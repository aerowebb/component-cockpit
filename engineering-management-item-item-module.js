(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["engineering-management-item-item-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

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

/***/ "./src/app/main/engineering-management/item/form/item-form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/item-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div *ngIf=\"!isCreateOpenMode && componentData && componentData.objectId\" class=\"page-subtitle\">\r\n          - {{ subtitle }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button *ngIf=\"isReadOpenMode && hasUpdateAccessRight\" type=\"button\" mat-raised-button (click)=\"editItem()\">\r\n      {{ \"global.edit\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode && !isCreateOpenMode\"\r\n      type=\"button\"\r\n      color=\"warn\"\r\n      mat-raised-button\r\n      (click)=\"cancelItem()\"\r\n    >\r\n      {{ \"global.cancel\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      class=\"btn-with-spinner\"\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"saveItem()\"\r\n    >\r\n      <span class=\"lds-hourglass\" *ngIf=\"showSaveSpinner\"></span>\r\n      {{ \"global.save\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      *ngIf=\"!isCreateOpenMode\"\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button\r\n        *ngIf=\"isReadOpenMode && !isCreateOpenMode\"\r\n        type=\"button\"\r\n        mat-menu-item\r\n        (click)=\"openStatusUpdatesPopup()\"\r\n      >\r\n        {{ \"global.updates\" | translate }}\r\n      </button>\r\n\r\n      <button *ngIf=\"isReadOpenMode && !isCreateOpenMode\" type=\"button\" mat-menu-item (click)=\"refreshItem()\">\r\n        {{ \"global.refresh\" | translate }}\r\n      </button>\r\n\r\n      <button *ngIf=\"isReadOpenMode && !isCreateOpenMode\" type=\"button\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ \"page.\" + (isFavoriteEntry ? \"removeFromFavorites\" : \"addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <mat-tab-group animationDuration=\"0ms\" dynamicHeight>\r\n        <!-- HOME -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + \".home\" | translate }}\r\n          </ng-template>\r\n\r\n          <!-- MAIN INFORMATION -->\r\n          <div class=\"grid-row\">\r\n            <div #mainInfoAnchor class=\"grid-cell--12\" (click)=\"selectPageTocEntry('mainInfoAnchor')\">\r\n              <div\r\n                class=\"grid-cell grid-cell--container\"\r\n                [ngClass]=\"{ active: isPageTocEntrySelected('mainInfoAnchor') }\"\r\n              >\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">{{ \"page.mainData\" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"column\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group flex--1\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".familyVariant\" | translate }}</label\r\n                        >\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [showClear]=\"true\"\r\n                            [disabled]=\"isReadOpenMode || !isCreateOpenMode\"\r\n                            [options]=\"familyVariantList\"\r\n                            [(ngModel)]=\"selectedFamilyVariant\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group flex--1\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".itemCode\" | translate }}</label>\r\n                        <div class=\"form-control\">\r\n                          <!-- {{ subtitle }} -->\r\n                          <div class=\"row\">\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input input-item-code\"\r\n                              maxlength=\"2\"\r\n                              [(ngModel)]=\"bireItemDTO.chapter\"\r\n                              [disabled]=\"isReadOpenMode || !isCreateOpenMode\"\r\n                              pTooltip=\"{{ componentData.componentId + '.chapter' | translate }}\"\r\n                              tooltipPosition=\"top\"\r\n                            />\r\n                            <div class=\"tiret\">-</div>\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input input-item-code\"\r\n                              maxlength=\"2\"\r\n                              [(ngModel)]=\"bireItemDTO.section\"\r\n                              [disabled]=\"isReadOpenMode || !isCreateOpenMode\"\r\n                              pTooltip=\"{{ componentData.componentId + '.section' | translate }}\"\r\n                              tooltipPosition=\"top\"\r\n                            />\r\n                            <div class=\"tiret\">-</div>\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input input-item-code\"\r\n                              maxlength=\"2\"\r\n                              [(ngModel)]=\"bireItemDTO.subject\"\r\n                              [disabled]=\"isReadOpenMode || !isCreateOpenMode\"\r\n                              pTooltip=\"{{ componentData.componentId + '.subject' | translate }}\"\r\n                              tooltipPosition=\"top\"\r\n                            />\r\n                            <div class=\"tiret\">-</div>\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input input-item-code-5\"\r\n                              maxlength=\"5\"\r\n                              [(ngModel)]=\"bireItemDTO.sheet\"\r\n                              [disabled]=\"isReadOpenMode || !isCreateOpenMode\"\r\n                              pTooltip=\"{{ componentData.componentId + '.sheet' | translate }}\"\r\n                              tooltipPosition=\"top\"\r\n                            />\r\n                            <div class=\"tiret\">-</div>\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input input-item-code-5\"\r\n                              maxlength=\"5\"\r\n                              [(ngModel)]=\"bireItemDTO.marks\"\r\n                              [disabled]=\"isReadOpenMode || !isCreateOpenMode\"\r\n                              pTooltip=\"{{ componentData.componentId + '.marks' | translate }}\"\r\n                              tooltipPosition=\"top\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group flex--1\">\r\n                        <label class=\"form-label\"> {{ componentData.componentId + \".itemFamily\" | translate }}</label>\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [showClear]=\"true\"\r\n                            [options]=\"itemFamilyCodeList\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            [(ngModel)]=\"bireItemDTO.itemFamilyCode\"\r\n                          >\r\n                          </p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group flex--1\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".itemType\" | translate }}</label>\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [showClear]=\"true\"\r\n                            [(ngModel)]=\"bireItemDTO.itemType\"\r\n                            [options]=\"itemTypeList\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          >\r\n                          </p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group flex--1\">\r\n                        <label class=\"form-label\"> {{ componentData.componentId + \".functionCode\" | translate }}</label>\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input\"\r\n                            maxlength=\"50\"\r\n                            [(ngModel)]=\"bireItemDTO.functionCode\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group flex--1\">\r\n                        <label class=\"form-label\">{{\r\n                          componentData.componentId + \".serializedPart\" | translate\r\n                        }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-checkbox\r\n                            class=\"aw-checkbox\"\r\n                            binary=\"true\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            [(ngModel)]=\"bireItemDTO.serializedPart\"\r\n                          ></p-checkbox>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group flex--3\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".designation\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <textarea\r\n                            class=\"aw-textarea\"\r\n                            pInputTextarea\r\n                            [rows]=\"3\"\r\n                            maxlength=\"300\"\r\n                            [(ngModel)]=\"bireItemDTO.name\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          ></textarea>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".flocType\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [showClear]=\"true\"\r\n                            [options]=\"flocTypeList\"\r\n                            [(ngModel)]=\"bireItemDTO.ippeNodeType\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          >\r\n                          </p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\"> {{ componentData.componentId + \".itemNumber\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input\"\r\n                            maxlength=\"20\"\r\n                            [(ngModel)]=\"bireItemDTO.itemNumber\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{\r\n                          componentData.componentId + \".lifeRestrictionType\" | translate\r\n                        }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [showClear]=\"true\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            [(ngModel)]=\"bireItemDTO.lifeRestrictionType\"\r\n                            [options]=\"lifeRestrictionTypeList\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- PART NUMBER -->\r\n          <div class=\"grid-row\">\r\n            <div class=\"grid-cell--12\" #partNumber class=\"grid-cell--12\" (click)=\"selectPageTocEntry('partNumber')\">\r\n              <div class=\"grid-cell grid-cell--container\" [ngClass]=\"{ active: isPageTocEntrySelected('partNumber') }\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".partNumbers\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"list-with-details\">\r\n                        <div class=\"list\">\r\n                          <p-tree\r\n                            [value]=\"partNumberVersionList\"\r\n                            selectionMode=\"single\"\r\n                            [(selection)]=\"partNumberVersionSelected\"\r\n                            (onNodeSelect)=\"onSelectPartNumberVersion()\"\r\n                          >\r\n                          </p-tree>\r\n                        </div>\r\n\r\n                        <div class=\"details\">\r\n                          <p-table\r\n                            [resizableColumns]=\"true\"\r\n                            #ptablePart\r\n                            class=\"aw-table2\"\r\n                            [columns]=\"partNumberTableCols\"\r\n                            [value]=\"partNumberTableList\"\r\n                            [scrollable]=\"true\"\r\n                            [(selection)]=\"selectedPartNumber\"\r\n                          >\r\n                            <ng-template pTemplate=\"emptymessage\">\r\n                              <span *ngIf=\"!isLoadingTechnicalLevelTable\"> &nbsp;</span>\r\n\r\n                              <div *ngIf=\"isLoadingTechnicalLevelTable\" class=\"aw-table-loading-indicator\">\r\n                                <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                                <div class=\"lds-hourglass\"></div>\r\n                              </div>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate=\"colgroup\" let-columns>\r\n                              <colgroup>\r\n                                <col class=\"aw-table-checkbox-wrapper\" />\r\n                                <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                              </colgroup>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate=\"header\" let-columns>\r\n                              <tr>\r\n                                <th class=\"aw-table-checkbox-wrapper\">\r\n                                  <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                                </th>\r\n\r\n                                <th\r\n                                  pResizableColumn\r\n                                  *ngFor=\"let col of columns\"\r\n                                  [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                                >\r\n                                  {{ componentData.componentId + \".\" + col.field | translate }}\r\n                                </th>\r\n                              </tr>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                              <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                                <td class=\"aw-table-checkbox-wrapper\">\r\n                                  <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                                </td>\r\n\r\n                                <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                                  {{ rowData[col.field] }}\r\n                                </td>\r\n                              </tr>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate=\"caption\">\r\n                              <div\r\n                                class=\"aw-table-header\"\r\n                                [ngClass]=\"{ 'rows-selected': selectedPartNumber.length > 0 }\"\r\n                              >\r\n                                <div class=\"aw-table-global-filter\">\r\n                                  <label class=\"aw-table-global-filter-label\">\r\n                                    <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                  </label>\r\n\r\n                                  <input\r\n                                    #ptableCusCustomerGlobalFilter\r\n                                    class=\"aw-table-global-filter-input\"\r\n                                    type=\"text\"\r\n                                    placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                    (input)=\"ptablePart.filterGlobal($event.target.value, 'contains')\"\r\n                                  />\r\n                                </div>\r\n\r\n                                <div class=\"aw-table-actions\">\r\n                                  <button\r\n                                    *ngIf=\"!isReadOpenMode && selectedPartNumber.length > 0\"\r\n                                    type=\"button\"\r\n                                    mat-raised-button\r\n                                    color=\"warn\"\r\n                                  >\r\n                                    {{ componentData.componentId + \".duplicatePN\" | translate }}\r\n                                  </button>\r\n\r\n                                  <button\r\n                                    *ngIf=\"!isReadOpenMode && selectedPartNumber.length === 0\"\r\n                                    type=\"button\"\r\n                                    mat-raised-button\r\n                                    color=\"warn\"\r\n                                    (click)=\"deleteVersion()\"\r\n                                  >\r\n                                    {{ componentData.componentId + \".deleteVersion\" | translate }}\r\n                                  </button>\r\n\r\n                                  <button\r\n                                    *ngIf=\"!isReadOpenMode && selectedPartNumber.length > 0\"\r\n                                    type=\"button\"\r\n                                    mat-raised-button\r\n                                    color=\"warn\"\r\n                                    (click)=\"deletePN()\"\r\n                                  >\r\n                                    {{ componentData.componentId + \".deletePN\" | translate }}\r\n                                  </button>\r\n\r\n                                  <button\r\n                                    *ngIf=\"!isReadOpenMode && selectedPartNumber.length === 0\"\r\n                                    type=\"button\"\r\n                                    mat-raised-button\r\n                                    (click)=\"createPartNumberVersion()\"\r\n                                  >\r\n                                    {{ componentData.componentId + \".addVersion\" | translate }}\r\n                                  </button>\r\n\r\n                                  <button\r\n                                    *ngIf=\"\r\n                                      !isReadOpenMode &&\r\n                                      (selectedPartNumber.length === 1 || !!partNumberVersionSelected)\r\n                                    \"\r\n                                    type=\"button\"\r\n                                    mat-raised-button\r\n                                    (click)=\"createItemPN()\"\r\n                                  >\r\n                                    {{ componentData.componentId + \".addPN\" | translate }}\r\n                                  </button>\r\n                                  <button\r\n                                    *ngIf=\"selectedPartNumber.length === 1\"\r\n                                    type=\"button\"\r\n                                    mat-raised-button\r\n                                    (click)=\"editItemPN(selectedPartNumber[0])\"\r\n                                  >\r\n                                    {{ \"global.open\" | translate }}\r\n                                  </button>\r\n                                </div>\r\n                              </div>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                              <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                                <td class=\"aw-table-checkbox-wrapper\">\r\n                                  <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                                </td>\r\n                                <td>\r\n                                  <a (click)=\"editItemPN(rowData)\">{{ rowData.pn }} </a>\r\n                                </td>\r\n                                <td>{{ rowData.isn }}</td>\r\n                                <td>{{ rowData.ipcQuantity }}</td>\r\n                                <td>{{ rowData.mplQuantity }}</td>\r\n                                <td pTooltip=\"{{ rowData.alternatePn }}\" tooltipPosition=\"top\">\r\n                                  {{ rowData.alternatePn }}\r\n                                </td>\r\n                              </tr>\r\n                            </ng-template>\r\n                          </p-table>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- ADDITIONAL INFORMATION-->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + \".general\" | translate }}\r\n          </ng-template>\r\n\r\n          <div class=\"grid-row\">\r\n            <div class=\"grid-cell--12\" #general class=\"grid-cell--12\" (click)=\"selectPageTocEntry('general')\">\r\n              <div class=\"grid-cell grid-cell--container\" [ngClass]=\"{ active: isPageTocEntrySelected('general') }\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".general\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"column\">\r\n                        <!-- ROW 1 -->\r\n                        <div class=\"row\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{\r\n                              componentData.componentId + \".replacableUnitType\" | translate\r\n                            }}</label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <p-dropdown\r\n                                class=\"aw-dropdown fixed-width\"\r\n                                placeholder=\"&nbsp;\"\r\n                                [showClear]=\"true\"\r\n                                [(ngModel)]=\"bireItemDTO.lruSru\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                [options]=\"replacableUnitTypeList\"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{\r\n                              getComponentName() + \".dissassemblyGroup\" | translate\r\n                            }}</label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <p-dropdown\r\n                                class=\"aw-dropdown fixed-width\"\r\n                                placeholder=\"&nbsp;\"\r\n                                [showClear]=\"true\"\r\n                                [options]=\"unmountCodeList\"\r\n                                [(ngModel)]=\"bireItemDTO.unmountCode\"\r\n                                (onChange)=\"changeDissassembly()\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\"> {{ componentData.componentId + \".level\" | translate }}</label>\r\n                            <div class=\"form-control\">\r\n                              <p-dropdown\r\n                                class=\"aw-dropdown fixed-width\"\r\n                                placeholder=\"&nbsp;\"\r\n                                [showClear]=\"true\"\r\n                                [options]=\"levelList\"\r\n                                [(ngModel)]=\"bireItemDTO.itemLevel\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                              >\r\n                              </p-dropdown>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{\r\n                              componentData.componentId + \".isHeadOfGroup\" | translate\r\n                            }}</label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <p-checkbox\r\n                                class=\"aw-checkbox\"\r\n                                binary=\"true\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                [(ngModel)]=\"bireItemDTO.isItemHeadOfGroup\"\r\n                              ></p-checkbox>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ componentData.componentId + \".visibleOnInspection\" | translate }}</label\r\n                            >\r\n                            <div class=\"form-control\">\r\n                              <p-checkbox\r\n                                class=\"aw-checkbox\"\r\n                                binary=\"true\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                [(ngModel)]=\"bireItemDTO.inventoryVisible\"\r\n                              ></p-checkbox>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <!-- ROW 2 -->\r\n                        <div class=\"row\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\"> {{ componentData.componentId + \".isMELCDL\" | translate }}</label>\r\n                            <div class=\"form-control\">\r\n                              <p-checkbox\r\n                                class=\"aw-checkbox\"\r\n                                binary=\"true\"\r\n                                [(ngModel)]=\"isMelSelected\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                              ></p-checkbox>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ componentData.componentId + \".isIllustrated\" | translate }}</label\r\n                            >\r\n                            <div class=\"form-control\">\r\n                              <p-checkbox\r\n                                class=\"aw-checkbox\"\r\n                                [(ngModel)]=\"isillustratedSelected\"\r\n                                binary=\"true\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                (onChange)=\"isIllustratedChange()\"\r\n                              ></p-checkbox>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ componentData.componentId + \".attachingPart\" | translate }}</label\r\n                            >\r\n                            <div class=\"form-control\">\r\n                              <p-checkbox\r\n                                class=\"aw-checkbox\"\r\n                                binary=\"true\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                [(ngModel)]=\"bireItemDTO.attachingPart\"\r\n                              ></p-checkbox>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ componentData.componentId + \".configurableItem\" | translate }}</label\r\n                            >\r\n                            <div class=\"form-control\">\r\n                              <p-checkbox\r\n                                class=\"aw-checkbox\"\r\n                                binary=\"true\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                [(ngModel)]=\"bireItemDTO.configurableArticle\"\r\n                                (onChange)=\"bindToc()\"\r\n                              ></p-checkbox>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ componentData.componentId + \".isClassItem\" | translate }}</label\r\n                            >\r\n                            <div class=\"form-control\">\r\n                              <p-checkbox\r\n                                class=\"aw-checkbox\"\r\n                                binary=\"true\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                [(ngModel)]=\"bireItemDTO.isClassItem\"\r\n                              ></p-checkbox>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <!-- ROW 3 -->\r\n                        <div class=\"row\">\r\n                          <div class=\"form-group flex--1\">\r\n                            <label class=\"form-label\">&nbsp;</label>\r\n\r\n                            <div class=\"form-control aw-selectbutton-wrapper\">\r\n                              <p-selectButton [(ngModel)]=\"referRadio\" [options]=\"referList\"></p-selectButton>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div *ngIf=\"referRadio === 'referNHA'\" class=\"form-group flex--1\">\r\n                            <label class=\"form-label\">&nbsp;</label>\r\n\r\n                            <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n                              <div class=\"form-control-data\" (click)=\"searchItems('referForNHA')\">\r\n                                <span *ngIf=\"bireItemDTO\">\r\n                                  {{ bireItemDTO.nhaChapter }}\r\n                                  <span *ngIf=\"bireItemDTO.nhaSection\">-{{ bireItemDTO.nhaSection }}</span>\r\n                                  <span *ngIf=\"bireItemDTO.nhaSubject\">-{{ bireItemDTO.nhaSubject }}</span>\r\n                                  <span *ngIf=\"bireItemDTO.nhaSheet\">-{{ bireItemDTO.nhaSheet }}</span>\r\n                                  <span *ngIf=\"bireItemDTO.nhaMarks\">-{{ bireItemDTO.nhaMarks }}</span>\r\n                                </span>\r\n                              </div>\r\n\r\n                              <div\r\n                                *ngIf=\"\r\n                                  !isReadOpenMode &&\r\n                                  bireItemDTO &&\r\n                                  bireItemDTO.nhaChapter &&\r\n                                  bireItemDTO.nhaSection &&\r\n                                  bireItemDTO.nhaSubject &&\r\n                                  bireItemDTO.nhaSheet &&\r\n                                  bireItemDTO.nhaMarks\r\n                                \"\r\n                                class=\"btn-clear-wrapper\"\r\n                              >\r\n                                <i\r\n                                  class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                                  aria-hidden=\"true\"\r\n                                  (click)=\"\r\n                                    bireItemDTO.nhaChapter = undefined;\r\n                                    bireItemDTO.nhaSection = undefined;\r\n                                    bireItemDTO.nhaSubject = undefined;\r\n                                    bireItemDTO.nhaSheet = undefined;\r\n                                    bireItemDTO.nhaMarks = undefined\r\n                                  \"\r\n                                ></i>\r\n                              </div>\r\n                              <div *ngIf=\"!isReadOpenMode\" class=\"btn-search-wrapper\">\r\n                                <i\r\n                                  class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                                  aria-hidden=\"true\"\r\n                                  (click)=\"searchItems('referForNHA')\"\r\n                                ></i>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div *ngIf=\"referRadio === 'referToVal'\" class=\"form-group flex--1\">\r\n                            <label class=\"form-label\">&nbsp;</label>\r\n\r\n                            <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n                              <div class=\"form-control-data\" (click)=\"searchItems('referTo')\">\r\n                                <span *ngIf=\"bireItemDTO\">\r\n                                  {{ bireItemDTO.referChapter }}\r\n                                  <span *ngIf=\"bireItemDTO.referSection\">-{{ bireItemDTO.referSection }}</span>\r\n                                  <span *ngIf=\"bireItemDTO.referSubject\">-{{ bireItemDTO.referSubject }}</span>\r\n                                  <span *ngIf=\"bireItemDTO.referSheet\">-{{ bireItemDTO.referSheet }}</span>\r\n                                  <span *ngIf=\"bireItemDTO.referMarks\">-{{ bireItemDTO.referMarks }}</span>\r\n                                </span>\r\n                              </div>\r\n\r\n                              <div\r\n                                *ngIf=\"\r\n                                  !isReadOpenMode &&\r\n                                  bireItemDTO &&\r\n                                  bireItemDTO.referChapter &&\r\n                                  bireItemDTO.referSection &&\r\n                                  bireItemDTO.referSubject &&\r\n                                  bireItemDTO.referSheet &&\r\n                                  bireItemDTO.referMarks\r\n                                \"\r\n                                class=\"btn-clear-wrapper\"\r\n                              >\r\n                                <i\r\n                                  class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                                  aria-hidden=\"true\"\r\n                                  (click)=\"\r\n                                    bireItemDTO.referChapter = undefined;\r\n                                    bireItemDTO.referSection = undefined;\r\n                                    bireItemDTO.referSubject = undefined;\r\n                                    bireItemDTO.referSheet = undefined;\r\n                                    bireItemDTO.referMarks = undefined\r\n                                  \"\r\n                                ></i>\r\n                              </div>\r\n                              <div *ngIf=\"!isReadOpenMode\" class=\"btn-search-wrapper\">\r\n                                <i\r\n                                  class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                                  aria-hidden=\"true\"\r\n                                  (click)=\"searchItems('referTo')\"\r\n                                ></i>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group flex--1\">\r\n                            <label class=\"form-label\">\r\n                              {{ componentData.componentId + \".fixedElement\" | translate }}</label\r\n                            >\r\n\r\n                            <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n                              <div class=\"form-control-data\" (click)=\"searchItems('fixedElement')\">\r\n                                <span *ngIf=\"bireItemDTO\">\r\n                                  {{ bireItemDTO.fixChapter }}\r\n                                  <span *ngIf=\"bireItemDTO.fixSection\">-{{ bireItemDTO.fixSection }}</span>\r\n                                  <span *ngIf=\"bireItemDTO.fixSubject\">-{{ bireItemDTO.fixSubject }}</span>\r\n                                  <span *ngIf=\"bireItemDTO.fixSheet\">-{{ bireItemDTO.fixSheet }}</span>\r\n                                  <span *ngIf=\"bireItemDTO.fixMarks\">-{{ bireItemDTO.fixMarks }}</span>\r\n                                </span>\r\n                              </div>\r\n\r\n                              <div\r\n                                *ngIf=\"\r\n                                  !isReadOpenMode &&\r\n                                  bireItemDTO &&\r\n                                  bireItemDTO.fixChapter &&\r\n                                  bireItemDTO.fixSection &&\r\n                                  bireItemDTO.fixSubject &&\r\n                                  bireItemDTO.fixSheet &&\r\n                                  bireItemDTO.fixMarks\r\n                                \"\r\n                                class=\"btn-clear-wrapper\"\r\n                              >\r\n                                <i\r\n                                  class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                                  aria-hidden=\"true\"\r\n                                  (click)=\"\r\n                                    bireItemDTO.fixChapter = undefined;\r\n                                    bireItemDTO.fixSection = undefined;\r\n                                    bireItemDTO.fixSubject = undefined;\r\n                                    bireItemDTO.fixSheet = undefined;\r\n                                    bireItemDTO.fixMarks = undefined\r\n                                  \"\r\n                                ></i>\r\n                              </div>\r\n                              <div *ngIf=\"!isReadOpenMode\" class=\"btn-search-wrapper\">\r\n                                <i\r\n                                  class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                                  aria-hidden=\"true\"\r\n                                  (click)=\"searchItems('fixedElement')\"\r\n                                ></i>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group flex--2\">\r\n                            <label class=\"form-label\"> {{ componentData.componentId + \".comment\" | translate }}</label>\r\n                            <div class=\"form-control\">\r\n                              <textarea\r\n                                class=\"aw-textarea\"\r\n                                pInputTextarea\r\n                                [rows]=\"3\"\r\n                                maxlength=\"300\"\r\n                                [(ngModel)]=\"bireItemDTO.itemRemarks\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                              ></textarea>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- STRUCTURE -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + \".structure\" | translate }}\r\n          </ng-template>\r\n\r\n          <div [hidden]=\"isCreateOpenMode == true\">\r\n            <div class=\"grid-row\">\r\n              <!-- ITEM FATHERS -->\r\n              <div\r\n                class=\"grid-cell--equally\"\r\n                #structure\r\n                class=\"grid-cell--equally\"\r\n                (click)=\"selectPageTocEntry('structure')\"\r\n              >\r\n                <div class=\"grid-cell grid-cell--container\" [ngClass]=\"{ active: isPageTocEntrySelected('structure') }\">\r\n                  <div class=\"grid-cell-header\">\r\n                    <div class=\"grid-cell-title-container\">\r\n                      <h3 class=\"grid-cell-title\">\r\n                        {{ componentData.componentId + \".itemFather\" | translate }}\r\n                        ({{ itemFatherList ? itemFatherList.length : 0 }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                    <div class=\"section\">\r\n                      <div class=\"section-content\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #itemFatherTable\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"itemSonFatherCols\"\r\n                          [value]=\"itemFatherList\"\r\n                          [(selection)]=\"selectedItemFathers\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"emptymessage\">\r\n                            <span *ngIf=\"!isLoadingTechnicalLevelTable\"> &nbsp;</span>\r\n\r\n                            <div *ngIf=\"isLoadingTechnicalLevelTable\" class=\"aw-table-loading-indicator\">\r\n                              <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                              <div class=\"lds-hourglass\"></div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div\r\n                              class=\"aw-table-header\"\r\n                              [ngClass]=\"{ 'rows-selected': selectedItemFathers.length > 0 }\"\r\n                            >\r\n                              <div class=\"aw-table-global-filter\">\r\n                                <label class=\"aw-table-global-filter-label\">\r\n                                  <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n\r\n                                <input\r\n                                  #ptableCusCustomerGlobalFilter\r\n                                  class=\"aw-table-global-filter-input\"\r\n                                  type=\"text\"\r\n                                  placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                  (input)=\"itemFatherTable.filterGlobal($event.target.value, 'contains')\"\r\n                                />\r\n                              </div>\r\n\r\n                              <div class=\"aw-table-actions\">\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedItemFathers.length > 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  color=\"warn\"\r\n                                  (click)=\"deleteSelectedFatherItem()\"\r\n                                >\r\n                                  {{ \"global.delete\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedItemFathers.length === 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"createItemFather()\"\r\n                                >\r\n                                  {{ \"global.add\" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col class=\"aw-table-checkbox-wrapper\" />\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                              </th>\r\n\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                              </td>\r\n\r\n                              <td\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngSwitch]=\"col.field\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                <a *ngSwitchCase=\"'item'\" (click)=\"openItemUC(rowData)\">{{ rowData[col.field] }}</a>\r\n\r\n                                <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- ITEM SONS -->\r\n              <div\r\n                class=\"grid-cell--equally\"\r\n                #structure\r\n                class=\"grid-cell--equally\"\r\n                (click)=\"selectPageTocEntry('structure')\"\r\n              >\r\n                <div class=\"grid-cell grid-cell--container\" [ngClass]=\"{ active: isPageTocEntrySelected('structure') }\">\r\n                  <div class=\"grid-cell-header\">\r\n                    <div class=\"grid-cell-title-container\">\r\n                      <h3 class=\"grid-cell-title\">\r\n                        {{ componentData.componentId + \".itemSons\" | translate }}\r\n                        ({{ itemSonList ? itemSonList.length : 0 }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                    <div class=\"section\">\r\n                      <div class=\"section-content\">\r\n                        <div style=\"width: 100%\">\r\n                          <p-table\r\n                            [resizableColumns]=\"true\"\r\n                            #itemSonsTable\r\n                            class=\"aw-table2\"\r\n                            [columns]=\"itemSonFatherCols\"\r\n                            [value]=\"itemSonList\"\r\n                            [(selection)]=\"selectedItemSons\"\r\n                            [scrollable]=\"true\"\r\n                          >\r\n                            <ng-template pTemplate=\"emptymessage\">\r\n                              <span *ngIf=\"!isLoadingTechnicalLevelTable\"> &nbsp;</span>\r\n\r\n                              <div *ngIf=\"isLoadingTechnicalLevelTable\" class=\"aw-table-loading-indicator\">\r\n                                <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                                <div class=\"lds-hourglass\"></div>\r\n                              </div>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate=\"caption\">\r\n                              <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedItemSons.length > 0 }\">\r\n                                <div class=\"aw-table-global-filter\">\r\n                                  <label class=\"aw-table-global-filter-label\">\r\n                                    <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                  </label>\r\n\r\n                                  <input\r\n                                    #ptableCusCustomerGlobalFilter\r\n                                    class=\"aw-table-global-filter-input\"\r\n                                    type=\"text\"\r\n                                    placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                    (input)=\"itemSonsTable.filterGlobal($event.target.value, 'contains')\"\r\n                                  />\r\n                                </div>\r\n\r\n                                <div class=\"aw-table-actions\">\r\n                                  <button\r\n                                    *ngIf=\"!isReadOpenMode && selectedItemSons.length > 0\"\r\n                                    type=\"button\"\r\n                                    mat-raised-button\r\n                                    color=\"warn\"\r\n                                    (click)=\"deleteSelectedSonItem()\"\r\n                                  >\r\n                                    {{ \"global.delete\" | translate }}\r\n                                  </button>\r\n\r\n                                  <button\r\n                                    *ngIf=\"!isReadOpenMode && selectedItemSons.length === 0\"\r\n                                    type=\"button\"\r\n                                    mat-raised-button\r\n                                    (click)=\"createItemSon()\"\r\n                                  >\r\n                                    {{ \"global.add\" | translate }}\r\n                                  </button>\r\n                                </div>\r\n                              </div>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate=\"colgroup\" let-columns>\r\n                              <colgroup>\r\n                                <col class=\"aw-table-checkbox-wrapper\" />\r\n                                <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                              </colgroup>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate=\"header\" let-columns>\r\n                              <tr>\r\n                                <th class=\"aw-table-checkbox-wrapper\">\r\n                                  <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                                </th>\r\n\r\n                                <th\r\n                                  pResizableColumn\r\n                                  *ngFor=\"let col of columns\"\r\n                                  [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                                >\r\n                                  {{ componentData.componentId + \".\" + col.field | translate }}\r\n                                </th>\r\n                              </tr>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                              <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                                <td class=\"aw-table-checkbox-wrapper\">\r\n                                  <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                                </td>\r\n\r\n                                <td\r\n                                  *ngFor=\"let col of columns\"\r\n                                  [ngSwitch]=\"col.field\"\r\n                                  [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                                >\r\n                                  <a *ngSwitchCase=\"'item'\" (click)=\"openItemUC(rowData)\">{{ rowData[col.field] }}</a>\r\n\r\n                                  <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                                </td>\r\n                              </tr>\r\n                            </ng-template>\r\n                          </p-table>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- MEASURES -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + \".measures\" | translate }}\r\n          </ng-template>\r\n\r\n          <div [hidden]=\"isCreateOpenMode == true\">\r\n            <div class=\"grid-row\">\r\n              <div\r\n                class=\"grid-cell--12\"\r\n                #refMeasurement\r\n                class=\"grid-cell--12\"\r\n                (click)=\"selectPageTocEntry('refMeasurement')\"\r\n              >\r\n                <div\r\n                  class=\"grid-cell grid-cell--container\"\r\n                  [ngClass]=\"{ active: isPageTocEntrySelected('refMeasurement') }\"\r\n                >\r\n                  <div class=\"grid-cell-header\">\r\n                    <div class=\"grid-cell-title-container\">\r\n                      <h3 class=\"grid-cell-title\">\r\n                        {{ componentData.componentId + \".refMeasurement\" | translate }}\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                    <div class=\"section\">\r\n                      <div class=\"section-content\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #refMeasurementTable\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"refMeasurementCols\"\r\n                          [value]=\"refMeasurementList\"\r\n                          [(selection)]=\"selectedRefMeasurement\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"emptymessage\">\r\n                            <span *ngIf=\"!isLoadingTechnicalLevelTable\"> &nbsp;</span>\r\n\r\n                            <div *ngIf=\"isLoadingTechnicalLevelTable\" class=\"aw-table-loading-indicator\">\r\n                              <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                              <div class=\"lds-hourglass\"></div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div\r\n                              class=\"aw-table-header\"\r\n                              [ngClass]=\"{ 'rows-selected': selectedRefMeasurement.length > 0 }\"\r\n                            >\r\n                              <div class=\"aw-table-global-filter\">\r\n                                <label class=\"aw-table-global-filter-label\">\r\n                                  <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n\r\n                                <input\r\n                                  #ptableCusCustomerGlobalFilter\r\n                                  class=\"aw-table-global-filter-input\"\r\n                                  type=\"text\"\r\n                                  placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                  (input)=\"refMeasurementTable.filterGlobal($event.target.value, 'contains')\"\r\n                                />\r\n                              </div>\r\n\r\n                              <div class=\"aw-table-actions\">\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedRefMeasurement.length > 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  color=\"warn\"\r\n                                  (click)=\"deleteSelectedRefMeasurement()\"\r\n                                >\r\n                                  {{ \"global.delete\" | translate }}\r\n                                </button>\r\n                                <button\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  *ngIf=\"!isReadOpenMode && selectedRefMeasurement.length === 1\"\r\n                                  (click)=\"editSelectedRefMeasurement()\"\r\n                                >\r\n                                  {{ \"global.edit\" | translate }}\r\n                                </button>\r\n                                <button\r\n                                  *ngIf=\"selectedRefMeasurement.length === 1\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"openRefMeasurementDialog()\"\r\n                                >\r\n                                  {{ \"global.open\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedRefMeasurement.length === 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"createRefMeasurement()\"\r\n                                >\r\n                                  {{ \"global.add\" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col class=\"aw-table-checkbox-wrapper\" />\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                              </th>\r\n\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                              </td>\r\n                              <td\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngSwitch]=\"col.field\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- TASK DAMAGES and LOCALISATION -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + \".taskDamagesLocalisation\" | translate }}\r\n          </ng-template>\r\n\r\n          <!-- TASK -->\r\n          <div [hidden]=\"isCreateOpenMode == true\">\r\n            <div class=\"grid-row\">\r\n              <div\r\n                class=\"grid-cell--12\"\r\n                #taskDamagesLocalisation\r\n                class=\"grid-cell--12\"\r\n                (click)=\"selectPageTocEntry('taskDamagesLocalisation')\"\r\n              >\r\n                <div\r\n                  class=\"grid-cell grid-cell--container\"\r\n                  [ngClass]=\"{ active: isPageTocEntrySelected('taskDamagesLocalisation') }\"\r\n                >\r\n                  <div class=\"grid-cell-header\">\r\n                    <div class=\"grid-cell-title-container\">\r\n                      <h3 class=\"grid-cell-title\">\r\n                        {{ componentData.componentId + \".tasks\" | translate }}\r\n                        ({{ tasksList ? tasksList.length : 0 }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                    <div class=\"section\">\r\n                      <div class=\"section-content\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #tasksTable\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"tasksCols\"\r\n                          [value]=\"tasksList\"\r\n                          [(selection)]=\"selectedTasks\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"emptymessage\">\r\n                            <span *ngIf=\"!isLoadingTechnicalLevelTable\"> &nbsp;</span>\r\n\r\n                            <div *ngIf=\"isLoadingTechnicalLevelTable\" class=\"aw-table-loading-indicator\">\r\n                              <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                              <div class=\"lds-hourglass\"></div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedTasks.length > 0 }\">\r\n                              <div class=\"aw-table-global-filter\">\r\n                                <label class=\"aw-table-global-filter-label\">\r\n                                  <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n\r\n                                <input\r\n                                  #ptableCusCustomerGlobalFilter\r\n                                  class=\"aw-table-global-filter-input\"\r\n                                  type=\"text\"\r\n                                  placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                  (input)=\"tasksTable.filterGlobal($event.target.value, 'contains')\"\r\n                                />\r\n                              </div>\r\n\r\n                              <div class=\"aw-table-actions\">\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedTasks.length > 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  color=\"warn\"\r\n                                  (click)=\"deleteSelectedItemTasks()\"\r\n                                >\r\n                                  {{ \"global.delete\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"selectedTasks.length === 1\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"openItemTaskDialog()\"\r\n                                >\r\n                                  {{ \"global.open\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedTasks.length === 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"createItemTask()\"\r\n                                >\r\n                                  {{ \"global.add\" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col class=\"aw-table-checkbox-wrapper\" />\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                              </th>\r\n\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                              </td>\r\n\r\n                              <td\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngSwitch]=\"col.field\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                <span *ngSwitchCase=\"'code'\"\r\n                                  ><a (click)=\"openTaskCode(rowData)\">{{ rowData[col.field] }}</a></span\r\n                                >\r\n                                <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- DAMAGES and LOCATION -->\r\n          <div [hidden]=\"isCreateOpenMode == true\">\r\n            <div class=\"grid-row\">\r\n              <!-- DAMAGES -->\r\n              <div\r\n                class=\"grid-cell--equally\"\r\n                #taskDamagesLocalisation\r\n                (click)=\"selectPageTocEntry('taskDamagesLocalisation')\"\r\n              >\r\n                <div\r\n                  class=\"grid-cell grid-cell--container\"\r\n                  [ngClass]=\"{ active: isPageTocEntrySelected('taskDamagesLocalisation') }\"\r\n                >\r\n                  <div class=\"grid-cell-header\">\r\n                    <div class=\"grid-cell-title-container\">\r\n                      <h3 class=\"grid-cell-title\">\r\n                        {{ componentData.componentId + \".damages\" | translate }}\r\n                        ({{ damagesList ? damagesList.length : 0 }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                    <div class=\"section\">\r\n                      <div class=\"section-content\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #damageTable\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"damagesCols\"\r\n                          [value]=\"damagesList\"\r\n                          [(selection)]=\"selectedDamages\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"emptymessage\">\r\n                            <span *ngIf=\"!isLoadingTechnicalLevelTable\"> &nbsp;</span>\r\n\r\n                            <div *ngIf=\"isLoadingTechnicalLevelTable\" class=\"aw-table-loading-indicator\">\r\n                              <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                              <div class=\"lds-hourglass\"></div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedDamages.length > 0 }\">\r\n                              <div class=\"aw-table-global-filter\">\r\n                                <label class=\"aw-table-global-filter-label\">\r\n                                  <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n\r\n                                <input\r\n                                  #ptableCusCustomerGlobalFilter\r\n                                  class=\"aw-table-global-filter-input\"\r\n                                  type=\"text\"\r\n                                  placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                  (input)=\"damageTable.filterGlobal($event.target.value, 'contains')\"\r\n                                />\r\n                              </div>\r\n\r\n                              <div class=\"aw-table-actions\">\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedDamages.length > 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  color=\"warn\"\r\n                                  (click)=\"deleteSelectedDamages()\"\r\n                                >\r\n                                  {{ \"global.delete\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"selectedDamages.length === 1\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"openDamageDialog()\"\r\n                                >\r\n                                  {{ \"global.open\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedDamages.length === 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"createDamage()\"\r\n                                >\r\n                                  {{ \"global.add\" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col class=\"aw-table-checkbox-wrapper\" />\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                              </th>\r\n\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                              </td>\r\n\r\n                              <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                                {{ rowData[col.field] }}\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- LOCATION -->\r\n              <div\r\n                class=\"grid-cell--equally\"\r\n                #taskDamagesLocalisation\r\n                (click)=\"selectPageTocEntry('taskDamagesLocalisation')\"\r\n              >\r\n                <div\r\n                  class=\"grid-cell grid-cell--container\"\r\n                  [ngClass]=\"{ active: isPageTocEntrySelected('taskDamagesLocalisation') }\"\r\n                >\r\n                  <div class=\"grid-cell-header\">\r\n                    <div class=\"grid-cell-title-container\">\r\n                      <h3 class=\"grid-cell-title\">\r\n                        {{ componentData.componentId + \".localisations\" | translate }}\r\n                        ({{ localisationList ? localisationList.length : 0 }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                    <div class=\"section\">\r\n                      <div class=\"section-content\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #itemLocalisationTable\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"localisationCols\"\r\n                          [value]=\"localisationList\"\r\n                          [(selection)]=\"selectedLocalisation\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"emptymessage\">\r\n                            <span *ngIf=\"!isLoadingTechnicalLevelTable\"> &nbsp;</span>\r\n\r\n                            <div *ngIf=\"isLoadingTechnicalLevelTable\" class=\"aw-table-loading-indicator\">\r\n                              <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                              <div class=\"lds-hourglass\"></div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div\r\n                              class=\"aw-table-header\"\r\n                              [ngClass]=\"{ 'rows-selected': selectedLocalisation.length > 0 }\"\r\n                            >\r\n                              <div class=\"aw-table-global-filter\">\r\n                                <label class=\"aw-table-global-filter-label\">\r\n                                  <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n\r\n                                <input\r\n                                  #ptableCusCustomerGlobalFilter\r\n                                  class=\"aw-table-global-filter-input\"\r\n                                  type=\"text\"\r\n                                  placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                  (input)=\"itemLocalisationTable.filterGlobal($event.target.value, 'contains')\"\r\n                                />\r\n                              </div>\r\n\r\n                              <div class=\"aw-table-actions\">\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedLocalisation.length > 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  color=\"warn\"\r\n                                  (click)=\"deleteSelectedLocalisation()\"\r\n                                >\r\n                                  {{ \"global.delete\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"selectedLocalisation.length === 1\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"openLocalisationDialog()\"\r\n                                >\r\n                                  {{ \"global.open\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedLocalisation.length === 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"createLocalisation()\"\r\n                                >\r\n                                  {{ \"global.add\" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col class=\"aw-table-checkbox-wrapper\" />\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                              </th>\r\n\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                              </td>\r\n\r\n                              <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                                {{ rowData[col.field] }}\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- DAMAGES, LOCALISATION AND TASKS-->\r\n          <div [hidden]=\"isCreateOpenMode == true\">\r\n            <div class=\"grid-row\">\r\n              <div\r\n                class=\"grid-cell--12\"\r\n                #taskDamagesLocalisation\r\n                (click)=\"selectPageTocEntry('taskDamagesLocalisation')\"\r\n              >\r\n                <div\r\n                  class=\"grid-cell grid-cell--container\"\r\n                  [ngClass]=\"{ active: isPageTocEntrySelected('taskDamagesLocalisation') }\"\r\n                >\r\n                  <div class=\"grid-cell-header\">\r\n                    <div class=\"grid-cell-title-container\">\r\n                      <h3 class=\"grid-cell-title\">\r\n                        {{ componentData.componentId + \".damagesLocalisationTasks\" | translate }}\r\n                        ({{ damLocTaskList ? damLocTaskList.length : 0 }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                    <div class=\"section\">\r\n                      <div class=\"section-content\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #itemLocDamTable\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"damLocTasCols\"\r\n                          [value]=\"damLocTaskList\"\r\n                          [(selection)]=\"selectedDamLocTask\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"emptymessage\">\r\n                            <span *ngIf=\"!isLoadingTechnicalLevelTable\"> &nbsp;</span>\r\n\r\n                            <div *ngIf=\"isLoadingTechnicalLevelTable\" class=\"aw-table-loading-indicator\">\r\n                              <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                              <div class=\"lds-hourglass\"></div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedDamLocTask.length > 0 }\">\r\n                              <div class=\"aw-table-global-filter\">\r\n                                <label class=\"aw-table-global-filter-label\">\r\n                                  <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n\r\n                                <input\r\n                                  #ptableCusCustomerGlobalFilter\r\n                                  class=\"aw-table-global-filter-input\"\r\n                                  type=\"text\"\r\n                                  placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                  (input)=\"itemLocDamTable.filterGlobal($event.target.value, 'contains')\"\r\n                                />\r\n                              </div>\r\n\r\n                              <div class=\"aw-table-actions\">\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedDamLocTask.length > 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  color=\"warn\"\r\n                                  (click)=\"deleteSelectedDamLocTask()\"\r\n                                >\r\n                                  {{ \"global.delete\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"selectedDamLocTask.length === 1\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"openDamLocTaskDialog()\"\r\n                                >\r\n                                  {{ \"global.open\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedDamLocTask.length === 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"createDamLocTask()\"\r\n                                >\r\n                                  {{ \"global.add\" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col class=\"aw-table-checkbox-wrapper\" />\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                              </th>\r\n\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                              </td>\r\n\r\n                              <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                                {{ rowData[col.field] }}\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- CONFIGURATION PACKS -->\r\n        <mat-tab *ngIf=\"!(isCreateOpenMode == true || !bireItemDTO.configurableArticle)\">\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + \".configurationPacks\" | translate }}\r\n          </ng-template>\r\n\r\n          <div [hidden]=\"isCreateOpenMode == true || !bireItemDTO.configurableArticle\">\r\n            <div class=\"grid-row\">\r\n              <div #configurationPacks class=\"grid-cell--12\" (click)=\"selectPageTocEntry('configurationPacks')\">\r\n                <div\r\n                  class=\"grid-cell grid-cell--container\"\r\n                  [ngClass]=\"{ active: isPageTocEntrySelected('configurationPacks') }\"\r\n                >\r\n                  <div class=\"grid-cell-header\">\r\n                    <div class=\"grid-cell-title-container\">\r\n                      <h3 class=\"grid-cell-title\">\r\n                        {{ componentData.componentId + \".configurationPacks\" | translate }}\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                    <div class=\"section\">\r\n                      <div class=\"section-content\">\r\n                        <div class=\"list-with-details\">\r\n                          <div class=\"list\">\r\n                            <p-tree\r\n                              [value]=\"packNumberList\"\r\n                              selectionMode=\"single\"\r\n                              [(selection)]=\"packNumberSelected\"\r\n                              (onNodeSelect)=\"onSelectPackNumber()\"\r\n                            >\r\n                            </p-tree>\r\n                          </div>\r\n\r\n                          <div class=\"details\">\r\n                            <div class=\"section\">\r\n                              <div class=\"section-content\">\r\n                                <div class=\"section-actions\">\r\n                                  <button\r\n                                    (click)=\"deleteConfigPack()\"\r\n                                    type=\"button\"\r\n                                    mat-raised-button\r\n                                    color=\"warn\"\r\n                                    *ngIf=\"!isReadOpenMode && packNumberSelected\"\r\n                                  >\r\n                                    {{ componentData.componentId + \".deletePack\" | translate }}\r\n                                  </button>\r\n\r\n                                  <button\r\n                                    type=\"button\"\r\n                                    mat-raised-button\r\n                                    *ngIf=\"!isReadOpenMode && packNumberSelected\"\r\n                                    (click)=\"editConfigPack()\"\r\n                                  >\r\n                                    {{ componentData.componentId + \".editPack\" | translate }}\r\n                                  </button>\r\n\r\n                                  <button\r\n                                    type=\"button\"\r\n                                    *ngIf=\"!isReadOpenMode\"\r\n                                    mat-raised-button\r\n                                    (click)=\"addConfigPack()\"\r\n                                  >\r\n                                    {{ componentData.componentId + \".addPack\" | translate }}\r\n                                  </button>\r\n                                </div>\r\n\r\n                                <div class=\"display--flex-row flex--1\">\r\n                                  <div class=\"form-group\">\r\n                                    <label class=\"form-label\">{{\r\n                                      componentData.componentId + \".configPackType\" | translate\r\n                                    }}</label>\r\n\r\n                                    <div class=\"form-control\">\r\n                                      <p-dropdown\r\n                                        class=\"aw-dropdown fixed-width\"\r\n                                        [options]=\"packTypeList\"\r\n                                        [(ngModel)]=\"currentPackNumber.packType\"\r\n                                        [disabled]=\"true\"\r\n                                        appendTo=\"body\"\r\n                                        placeholder=\"&nbsp;\"\r\n                                      ></p-dropdown>\r\n                                    </div>\r\n                                  </div>\r\n\r\n                                  <div class=\"form-group\">\r\n                                    <label class=\"form-label\">{{\r\n                                      componentData.componentId + \".configPackDescription\" | translate\r\n                                    }}</label>\r\n\r\n                                    <div class=\"form-control\">\r\n                                      <textarea\r\n                                        class=\"aw-textarea\"\r\n                                        [rows]=\"3\"\r\n                                        pInputTextarea\r\n                                        [(ngModel)]=\"currentPackNumber.packDescription\"\r\n                                        [disabled]=\"true\"\r\n                                      ></textarea>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <!-- <p-table [resizableColumns]=\"true\"\r\n                                  #confPacktable\r\n                                  class=\"aw-table2\"\r\n                                  [columns]=\"configurationPackCols\"\r\n                                  [value]=\"configurationPackList\"\r\n                                  [(selection)]=\"selectedConfigurationPacks\"\r\n                                  [scrollable]=\"true\"\r\n                                  scrollHeight=\"200px\"\r\n                                >\r\n                                  <ng-template pTemplate=\"emptymessage\">\r\n                                    <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                                    <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                                      <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                                      <div class=\"lds-hourglass\"></div>\r\n                                    </div>\r\n                                  </ng-template>\r\n                                  <ng-template pTemplate=\"caption\">\r\n                                    <div\r\n                                      class=\"aw-table-header\"\r\n                                      [ngClass]=\"{ 'rows-selected': selectedConfigurationPacks.length > 0 }\"\r\n                                    >\r\n                                      <div class=\"aw-table-global-filter\">\r\n                                        <label class=\"aw-table-global-filter-label\">\r\n                                          <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                        </label>\r\n\r\n                                        <input\r\n                                          #ptableResultsGlobalFilter\r\n                                          class=\"aw-table-global-filter-input\"\r\n                                          type=\"text\"\r\n                                          placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                          (input)=\"confPacktable.filterGlobal($event.target.value, 'contains')\"\r\n                                        />\r\n                                      </div>\r\n\r\n                                      <div class=\"aw-table-actions\">\r\n                                        <button\r\n                                          type=\"button\"\r\n                                          mat-raised-button color=\"warn\"\r\n                                          *ngIf=\"!isReadOpenMode && selectedConfigurationPacks.length > 0\"\r\n                                        >\r\n                                          {{ \"global.delete\" | translate }}\r\n                                        </button>\r\n\r\n                                        <button\r\n                                          type=\"button\"\r\n                                          mat-raised-button\r\n                                          *ngIf=\"!isReadOpenMode && selectedConfigurationPacks.length === 1\"\r\n                                        >\r\n                                          {{ \"global.edit\" | translate }}\r\n                                        </button>\r\n\r\n                                        <button\r\n                                          type=\"button\"\r\n                                          *ngIf=\"!isReadOpenMode && selectedConfigurationPacks.length === 0\"\r\n                                          mat-raised-button\r\n                                        >\r\n                                          {{ \"global.add\" | translate }}\r\n                                        </button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </ng-template>\r\n                                  <ng-template pTemplate=\"colgroup\" let-columns>\r\n                                    <colgroup>\r\n                                      <col class=\"aw-table-checkbox-wrapper\" />\r\n                                      <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                                    </colgroup>\r\n                                  </ng-template>\r\n\r\n                                  <ng-template pTemplate=\"header\" let-columns>\r\n                                    <tr>\r\n                                      <th class=\"aw-table-checkbox-wrapper\">\r\n                                        <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                                      </th>\r\n\r\n                                      <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                                        {{ componentData.componentId + \".\" + col.field | translate }}\r\n                                      </th>\r\n                                    </tr>\r\n                                  </ng-template>\r\n\r\n                                  <ng-template\r\n                                    pTemplate=\"body\"\r\n                                    let-rowData\r\n                                    let-columns=\"columns\"\r\n                                    let-rowIndex=\"rowIndex\"\r\n                                  >\r\n                                    <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                                      <td class=\"aw-table-checkbox-wrapper\">\r\n                                        <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                                      </td>\r\n\r\n                                      <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                                        <span [ngSwitch]=\"col.field\">\r\n                                          <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                                        </span>\r\n                                      </td>\r\n                                    </tr>\r\n                                  </ng-template>\r\n                                </p-table> -->\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"section\">\r\n                              <h4 class=\"section-title\">\r\n                                {{ componentData.componentId + \".packEvolutions\" | translate }}\r\n                                ({{ evolutionPacksTableList ? evolutionPacksTableList.length : 0 }})\r\n                              </h4>\r\n                              <div class=\"section-content\">\r\n                                <p-table\r\n                                  [resizableColumns]=\"true\"\r\n                                  #ptablePackEvolution\r\n                                  class=\"aw-table2\"\r\n                                  [columns]=\"evolutionPacksTableCols\"\r\n                                  [value]=\"evolutionPacksTableList\"\r\n                                  [scrollable]=\"true\"\r\n                                  [(selection)]=\"selectedEvolutionPacks\"\r\n                                  dataKey=\"evolutionNumber\"\r\n                                >\r\n                                  <ng-template pTemplate=\"emptymessage\">\r\n                                    <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                                    <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                                      <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                                      <div class=\"lds-hourglass\"></div>\r\n                                    </div>\r\n                                  </ng-template>\r\n                                  <ng-template pTemplate=\"caption\">\r\n                                    <div\r\n                                      class=\"aw-table-header\"\r\n                                      [ngClass]=\"{ 'rows-selected': selectedEvolutionPacks.length > 0 }\"\r\n                                    >\r\n                                      <div class=\"aw-table-global-filter\">\r\n                                        <label class=\"aw-table-global-filter-label\">\r\n                                          <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                        </label>\r\n\r\n                                        <input\r\n                                          #ptableResultsGlobalFilter\r\n                                          class=\"aw-table-global-filter-input\"\r\n                                          type=\"text\"\r\n                                          placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                          (input)=\"ptablePackEvolution.filterGlobal($event.target.value, 'contains')\"\r\n                                        />\r\n                                      </div>\r\n\r\n                                      <div class=\"aw-table-actions\">\r\n                                        <button\r\n                                          type=\"button\"\r\n                                          mat-raised-button\r\n                                          color=\"warn\"\r\n                                          *ngIf=\"\r\n                                            !isReadOpenMode && packNumberSelected && selectedEvolutionPacks.length > 0\r\n                                          \"\r\n                                          (click)=\"deleteConfigEvolution()\"\r\n                                        >\r\n                                          {{ \"global.delete\" | translate }}\r\n                                        </button>\r\n\r\n                                        <button\r\n                                          type=\"button\"\r\n                                          mat-raised-button\r\n                                          *ngIf=\"\r\n                                            !isReadOpenMode && packNumberSelected && selectedEvolutionPacks.length === 1\r\n                                          \"\r\n                                          (click)=\"editConfigEvolution()\"\r\n                                        >\r\n                                          {{ \"global.edit\" | translate }}\r\n                                        </button>\r\n\r\n                                        <button\r\n                                          type=\"button\"\r\n                                          *ngIf=\"\r\n                                            !isReadOpenMode && packNumberSelected && selectedEvolutionPacks.length === 0\r\n                                          \"\r\n                                          mat-raised-button\r\n                                          (click)=\"addConfigEvolution()\"\r\n                                        >\r\n                                          {{ \"global.add\" | translate }}\r\n                                        </button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </ng-template>\r\n\r\n                                  <ng-template pTemplate=\"colgroup\" let-columns>\r\n                                    <colgroup>\r\n                                      <col class=\"aw-table-checkbox-wrapper\" />\r\n                                      <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                                      <col [ngStyle]=\"{ width: '3%' }\" />\r\n                                    </colgroup>\r\n                                  </ng-template>\r\n\r\n                                  <ng-template pTemplate=\"header\" let-columns>\r\n                                    <tr>\r\n                                      <th class=\"aw-table-checkbox-wrapper\">\r\n                                        <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                                      </th>\r\n\r\n                                      <th\r\n                                        pResizableColumn\r\n                                        *ngFor=\"let col of columns\"\r\n                                        [ngStyle]=\"{ 'text-align': col.alignment, width: col.width }\"\r\n                                      >\r\n                                        {{ componentData.componentId + \".\" + col.field | translate }}\r\n                                      </th>\r\n                                      <th [ngStyle]=\"{ width: '3%' }\">&nbsp;</th>\r\n                                    </tr>\r\n                                  </ng-template>\r\n\r\n                                  <ng-template\r\n                                    pTemplate=\"body\"\r\n                                    let-rowData\r\n                                    let-columns=\"columns\"\r\n                                    let-rowIndex=\"rowIndex\"\r\n                                  >\r\n                                    <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                                      <td class=\"aw-table-checkbox-wrapper\">\r\n                                        <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                                      </td>\r\n                                      <td\r\n                                        *ngFor=\"let col of columns\"\r\n                                        [ngSwitch]=\"col.field\"\r\n                                        [ngStyle]=\"{ 'text-align': col.alignment, width: col.width }\"\r\n                                      >\r\n                                        <span *ngSwitchCase=\"'control'\" style=\"text-align: center\">\r\n                                          <span\r\n                                            *ngIf=\"rowData[col.field] === null || rowData[col.field] === undefined\"\r\n                                            class=\"alert alert--ok\"\r\n                                          >\r\n                                            {{ \"global.alertOk\" | translate }}\r\n                                          </span>\r\n\r\n                                          <span\r\n                                            *ngIf=\"!!rowData[col.field]\"\r\n                                            class=\"alert alert--warning\"\r\n                                            pTooltip=\"{{ rowData.message | translate }}\"\r\n                                          >\r\n                                            {{ \"global.alertWarning\" | translate }}\r\n                                          </span>\r\n                                        </span>\r\n                                        <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                                      </td>\r\n                                      <td\r\n                                        class=\"row-expand-wrapper\"\r\n                                        [pRowToggler]=\"rowData\"\r\n                                        [ngStyle]=\"{ width: '3%', 'text-align': 'left' }\"\r\n                                      >\r\n                                        <i\r\n                                          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n                                          [ngClass]=\"rowData.expand ? 'fa-minus' : 'fa-plus'\"\r\n                                          aria-hidden=\"true\"\r\n                                          pTooltip=\"{{ 'global.showTableRowDetails' | translate }}\"\r\n                                          tooltipPosition=\"top\"\r\n                                          (click)=\"toggleRowDetailsVisibility(rowData)\"\r\n                                        ></i>\r\n                                      </td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"!!rowData.expand\" class=\"row-expanded\">\r\n                                      <td [attr.colspan]=\"columns.length + 2\">\r\n                                        <div class=\"column forced-backgroung\">\r\n                                          <div class=\"row\">\r\n                                            <div class=\"form-group flex--1\">\r\n                                              <label class=\"form-label\">\r\n                                                {{ getComponentName() + \".\" + \"vintageDate\" | translate }}\r\n                                              </label>\r\n\r\n                                              <div class=\"form-control\">\r\n                                                <input\r\n                                                  type=\"text\"\r\n                                                  class=\"aw-input\"\r\n                                                  [(ngModel)]=\"rowData.vintageDate\"\r\n                                                  [disabled]=\"true\"\r\n                                                />\r\n                                              </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"form-group flex--1\">\r\n                                              <label class=\"form-label\">\r\n                                                {{ getComponentName() + \".\" + \"description\" | translate }}\r\n                                              </label>\r\n\r\n                                              <div class=\"form-control\">\r\n                                                <input\r\n                                                  type=\"text\"\r\n                                                  class=\"aw-input\"\r\n                                                  [(ngModel)]=\"rowData.description\"\r\n                                                  [disabled]=\"true\"\r\n                                                />\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </td>\r\n                                    </tr>\r\n                                  </ng-template>\r\n                                </p-table>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- MAINTENANCE -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + \".maintenance\" | translate }}\r\n          </ng-template>\r\n\r\n          <div [hidden]=\"isCreateOpenMode == true\">\r\n            <div class=\"grid-row\">\r\n              <!-- MAINTENANCE PROGRAMS-->\r\n              <div class=\"grid-cell--4\" #maintenance>\r\n                <div\r\n                  class=\"grid-cell grid-cell--container\"\r\n                  [ngClass]=\"{ active: isPageTocEntrySelected('maintenance') }\"\r\n                >\r\n                  <div class=\"grid-cell-header\">\r\n                    <div class=\"grid-cell-title-container\">\r\n                      <h3 class=\"grid-cell-title\">\r\n                        {{ componentData.componentId + \".maintenancePrograms\" | translate }}\r\n                        ({{ maintenanceProgramList ? maintenanceProgramList.length : 0 }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                    <div class=\"section\">\r\n                      <div class=\"section-content\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #maintenanceProgramTable\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"maintenanceProgramCols\"\r\n                          [value]=\"maintenanceProgramList\"\r\n                          [(selection)]=\"selectedMaintenanceProgram\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"emptymessage\">\r\n                            <span *ngIf=\"!isLoadingMaintenanceProgramTable\"> &nbsp;</span>\r\n\r\n                            <div *ngIf=\"isLoadingMaintenanceProgramTable\" class=\"aw-table-loading-indicator\">\r\n                              <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                              <div class=\"lds-hourglass\"></div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div\r\n                              class=\"aw-table-header\"\r\n                              [ngClass]=\"{ 'rows-selected': selectedMaintenanceProgram.length > 0 }\"\r\n                            >\r\n                              <div class=\"aw-table-global-filter\">\r\n                                <label class=\"aw-table-global-filter-label\">\r\n                                  <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n\r\n                                <input\r\n                                  #ptableCusCustomerGlobalFilter\r\n                                  class=\"aw-table-global-filter-input\"\r\n                                  type=\"text\"\r\n                                  placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                  (input)=\"maintenanceProgramTable.filterGlobal($event.target.value, 'contains')\"\r\n                                />\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                                {{ rowData[col.field] }}\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- TECHNICAL LEVELS -->\r\n              <div class=\"grid-cell--4\" #maintenance>\r\n                <div\r\n                  class=\"grid-cell grid-cell--container\"\r\n                  [ngClass]=\"{ active: isPageTocEntrySelected('maintenance') }\"\r\n                >\r\n                  <div class=\"grid-cell-header\">\r\n                    <div class=\"grid-cell-title-container\">\r\n                      <h3 class=\"grid-cell-title\">\r\n                        {{ componentData.componentId + \".technicalLevels\" | translate }}\r\n                        ({{ technicalLevelList ? technicalLevelList.length : 0 }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                    <div class=\"section\">\r\n                      <div class=\"section-content\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #technicalLevelTable\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"technicalLevelCols\"\r\n                          [value]=\"technicalLevelList\"\r\n                          [(selection)]=\"selectedTechnicalLevel\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"emptymessage\">\r\n                            <span *ngIf=\"!isLoadingTechnicalLevelTable\"> &nbsp;</span>\r\n\r\n                            <div *ngIf=\"isLoadingTechnicalLevelTable\" class=\"aw-table-loading-indicator\">\r\n                              <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                              <div class=\"lds-hourglass\"></div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div\r\n                              class=\"aw-table-header\"\r\n                              [ngClass]=\"{ 'rows-selected': selectedTechnicalLevel.length > 0 }\"\r\n                            >\r\n                              <div class=\"aw-table-global-filter\">\r\n                                <label class=\"aw-table-global-filter-label\">\r\n                                  <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n\r\n                                <input\r\n                                  #ptableCusCustomerGlobalFilter\r\n                                  class=\"aw-table-global-filter-input\"\r\n                                  type=\"text\"\r\n                                  placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                  (input)=\"technicalLevelTable.filterGlobal($event.target.value, 'contains')\"\r\n                                />\r\n                              </div>\r\n\r\n                              <div class=\"aw-table-actions\">\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedTechnicalLevel.length > 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  color=\"warn\"\r\n                                  (click)=\"deleteSelectedItem()\"\r\n                                >\r\n                                  {{ \"global.delete\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedTechnicalLevel.length === 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"createItem()\"\r\n                                >\r\n                                  {{ \"global.add\" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col class=\"aw-table-checkbox-wrapper\" />\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                              </th>\r\n\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                              </td>\r\n\r\n                              <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                                {{ rowData[col.field] }}\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- REPAIR CENTERS -->\r\n              <div class=\"grid-cell--4\" #maintenance>\r\n                <div\r\n                  class=\"grid-cell grid-cell--container\"\r\n                  [ngClass]=\"{ active: isPageTocEntrySelected('maintenance') }\"\r\n                >\r\n                  <div class=\"grid-cell-header\">\r\n                    <div class=\"grid-cell-title-container\">\r\n                      <h3 class=\"grid-cell-title\">\r\n                        {{ componentData.componentId + \".repairCenter\" | translate }}\r\n                        ({{ repairCentersList ? repairCentersList.length : 0 }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                    <div class=\"section\">\r\n                      <div class=\"section-content\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #repairCenterTable\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"repairCentersCols\"\r\n                          [value]=\"repairCentersList\"\r\n                          [(selection)]=\"selectedRepairCenters\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"emptymessage\">\r\n                            <span *ngIf=\"!isLoadingRepairCenterTable\"> &nbsp;</span>\r\n\r\n                            <div *ngIf=\"isLoadingRepairCenterTable\" class=\"aw-table-loading-indicator\">\r\n                              <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                              <div class=\"lds-hourglass\"></div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div\r\n                              class=\"aw-table-header\"\r\n                              [ngClass]=\"{ 'rows-selected': selectedRepairCenters.length > 0 }\"\r\n                            >\r\n                              <div class=\"aw-table-global-filter\">\r\n                                <label class=\"aw-table-global-filter-label\">\r\n                                  <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n\r\n                                <input\r\n                                  #ptableCusCustomerGlobalFilter\r\n                                  class=\"aw-table-global-filter-input\"\r\n                                  type=\"text\"\r\n                                  placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                  (input)=\"repairCenterTable.filterGlobal($event.target.value, 'contains')\"\r\n                                />\r\n                              </div>\r\n\r\n                              <div class=\"aw-table-actions\">\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedRepairCenters.length > 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  color=\"warn\"\r\n                                  (click)=\"deleteSelectedRepairCenter()\"\r\n                                >\r\n                                  {{ \"global.delete\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedRepairCenters.length === 1\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"editRepairCenterDialog()\"\r\n                                >\r\n                                  {{ \"global.edit\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedRepairCenters.length === 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"createRepairCenter()\"\r\n                                >\r\n                                  {{ \"global.add\" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col class=\"aw-table-checkbox-wrapper\" />\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                              </th>\r\n\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                              </td>\r\n\r\n                              <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                                {{ rowData[col.field] }}\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- CAUSE OF REMOVAL -->\r\n          <div [hidden]=\"isCreateOpenMode == true\">\r\n            <div class=\"grid-row\">\r\n              <div class=\"grid-cell--12\">\r\n                <div class=\"grid-cell grid-cell--container\">\r\n                  <div class=\"grid-cell-header\">\r\n                    <div class=\"grid-cell-title-container\">\r\n                      <h3 class=\"grid-cell-title\">\r\n                        {{ componentData.componentId + \".causeOfRemoval\" | translate }}\r\n                        ({{ causeOfRemovalList ? causeOfRemovalList.length : 0 }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                    <div class=\"section\">\r\n                      <div class=\"section-content\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #causeOfRemovalTable\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"causeOfRemovalCols\"\r\n                          [value]=\"causeOfRemovalList\"\r\n                          [(selection)]=\"selectedCauseOfRemoval\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"emptymessage\">\r\n                            <span *ngIf=\"!isLoadingCauseOfRemovalTable\"> &nbsp;</span>\r\n\r\n                            <div *ngIf=\"isLoadingCauseOfRemovalTable\" class=\"aw-table-loading-indicator\">\r\n                              <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                              <div class=\"lds-hourglass\"></div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div\r\n                              class=\"aw-table-header\"\r\n                              [ngClass]=\"{ 'rows-selected': selectedCauseOfRemoval.length > 0 }\"\r\n                            >\r\n                              <div class=\"aw-table-global-filter\">\r\n                                <label class=\"aw-table-global-filter-label\">\r\n                                  <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n\r\n                                <input\r\n                                  #ptableCusCustomerGlobalFilter\r\n                                  class=\"aw-table-global-filter-input\"\r\n                                  type=\"text\"\r\n                                  placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                  (input)=\"causeOfRemovalTable.filterGlobal($event.target.value, 'contains')\"\r\n                                />\r\n                              </div>\r\n\r\n                              <div class=\"aw-table-actions\">\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedCauseOfRemoval.length > 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  color=\"warn\"\r\n                                  (click)=\"deleteSelectedRemovalCause()\"\r\n                                >\r\n                                  {{ \"global.delete\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedCauseOfRemoval.length === 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"createRemovalCause()\"\r\n                                >\r\n                                  {{ \"global.add\" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col class=\"aw-table-checkbox-wrapper\" />\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                              </th>\r\n\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                              </td>\r\n\r\n                              <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                                {{ rowData[col.field] }}\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- STATISTICS -->\r\n          <div [hidden]=\"isCreateOpenMode == true\">\r\n            <div class=\"grid-row\">\r\n              <div class=\"grid-cell--12\">\r\n                <div class=\"grid-cell grid-cell--container\">\r\n                  <div class=\"grid-cell-header\">\r\n                    <div class=\"grid-cell-title-container\">\r\n                      <h3 class=\"grid-cell-title\">\r\n                        {{ componentData.componentId + \".statistics\" | translate }}\r\n                        ({{ statisticsList ? statisticsList.length : 0 }})\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                    <div class=\"section\">\r\n                      <div class=\"section-content\">\r\n                        <p-table\r\n                          [resizableColumns]=\"true\"\r\n                          #statisticsTable\r\n                          class=\"aw-table2\"\r\n                          [columns]=\"statisticsCols\"\r\n                          [value]=\"statisticsList\"\r\n                          [(selection)]=\"selectedStatistics\"\r\n                          [scrollable]=\"true\"\r\n                        >\r\n                          <ng-template pTemplate=\"emptymessage\">\r\n                            <span *ngIf=\"!isLoadingStatisticsTable\"> &nbsp;</span>\r\n\r\n                            <div *ngIf=\"isLoadingStatisticsTable\" class=\"aw-table-loading-indicator\">\r\n                              <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                              <div class=\"lds-hourglass\"></div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"caption\">\r\n                            <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedStatistics.length > 0 }\">\r\n                              <div class=\"aw-table-global-filter\">\r\n                                <label class=\"aw-table-global-filter-label\">\r\n                                  <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                </label>\r\n\r\n                                <input\r\n                                  #ptableCusCustomerGlobalFilter\r\n                                  class=\"aw-table-global-filter-input\"\r\n                                  type=\"text\"\r\n                                  placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                  (input)=\"statisticsTable.filterGlobal($event.target.value, 'contains')\"\r\n                                />\r\n                              </div>\r\n\r\n                              <div class=\"aw-table-actions\">\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedStatistics.length > 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  color=\"warn\"\r\n                                  (click)=\"deleteSelectedStat()\"\r\n                                >\r\n                                  {{ \"global.delete\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedStatistics.length === 1\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"editStat()\"\r\n                                >\r\n                                  {{ \"global.edit\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"selectedStatistics.length === 1\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"openMaintenanceStatDialog()\"\r\n                                >\r\n                                  {{ \"global.open\" | translate }}\r\n                                </button>\r\n\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && selectedStatistics.length === 0\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"createMaintenanceStats()\"\r\n                                >\r\n                                  {{ \"global.add\" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col class=\"aw-table-checkbox-wrapper\" />\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"header\" let-columns>\r\n                            <tr>\r\n                              <th class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                              </th>\r\n\r\n                              <th\r\n                                pResizableColumn\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              </th>\r\n                            </tr>\r\n                          </ng-template>\r\n\r\n                          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                              <td class=\"aw-table-checkbox-wrapper\">\r\n                                <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                              </td>\r\n\r\n                              <td\r\n                                *ngFor=\"let col of columns\"\r\n                                [ngSwitch]=\"col.field\"\r\n                                [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              >\r\n                                <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- ATTRIBUTES -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + \".attributes\" | translate }}\r\n          </ng-template>\r\n\r\n          <div class=\"grid-row\">\r\n            <div class=\"grid-cell--12\" #partNumber class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".attributes\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"grid-cell--12\">\r\n                      <aw-dynamic-attributes\r\n                        [attributes]=\"dynamicAttributesForItem\"\r\n                        [history]=\"dynamicAttributesHistoric\"\r\n                        [showHistory]=\"false\"\r\n                        [isReadOpenMode]=\"isReadOpenMode\"\r\n                      ></aw-dynamic-attributes>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- ILLUSTRATION -->\r\n        <mat-tab *ngIf=\"!(isCreateOpenMode == true || !isillustratedSelected)\">\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + \".illustration\" | translate }}\r\n          </ng-template>\r\n\r\n          <div class=\"grid-row\">\r\n            <div\r\n              class=\"grid-cell--12\"\r\n              #illustrations\r\n              class=\"grid-cell--12\"\r\n              (click)=\"selectPageTocEntry('illustrations')\"\r\n            >\r\n              <div\r\n                class=\"grid-cell grid-cell--container\"\r\n                [ngClass]=\"{ active: isPageTocEntrySelected('illustrations') }\"\r\n                *ngIf=\"isillustratedSelected\"\r\n              >\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".illustrations\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">{{ componentData.componentId + \".docURL\" | translate }}</label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"docURL\" [disabled]=\"isReadOpenMode\" />\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\"></label>\r\n\r\n                          <div class=\"form-control\" style=\"margin-top: 2em\">\r\n                            <a *ngIf=\"isDocPresent\" style=\"cursor: pointer;\" (click)=\"openUrl()\">{{\r\n                              \"global.open\" | translate\r\n                            }}</a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group\"></div>\r\n                      </div>\r\n                      <div class=\"section\">\r\n                        <h4 class=\"section-title\">\r\n                          {{ componentData.componentId + \".documentsMgmt\" | translate }}\r\n                        </h4>\r\n                        <div class=\"section-content\">\r\n                          <p-table\r\n                            [resizableColumns]=\"true\"\r\n                            #ptableDocument\r\n                            class=\"aw-table2\"\r\n                            [columns]=\"documentsTableCols\"\r\n                            [value]=\"bireDocumentDisplayed\"\r\n                            [(selection)]=\"selectedDocuments\"\r\n                            dataKey=\"docName\"\r\n                            [scrollable]=\"true\"\r\n                          >\r\n                            <ng-template pTemplate=\"emptymessage\">\r\n                              <span *ngIf=\"!isLoadingDocumentTable\"> &nbsp;</span>\r\n\r\n                              <div *ngIf=\"isLoadingDocumentTable\" class=\"aw-table-loading-indicator\">\r\n                                <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                                <div class=\"lds-hourglass\"></div>\r\n                              </div>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate=\"caption\">\r\n                              <div\r\n                                class=\"aw-table-header\"\r\n                                [ngClass]=\"{ 'rows-selected': selectedDocuments.length > 0 }\"\r\n                              >\r\n                                <div class=\"aw-table-global-filter\">\r\n                                  <label class=\"aw-table-global-filter-label\">\r\n                                    <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                                  </label>\r\n\r\n                                  <input\r\n                                    #ptableDocumentGlobalFilter\r\n                                    class=\"aw-table-global-filter-input\"\r\n                                    type=\"text\"\r\n                                    placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                    (input)=\"ptableDocument.filterGlobal($event.target.value, 'contains')\"\r\n                                  />\r\n                                </div>\r\n\r\n                                <div class=\"aw-table-actions\" *ngIf=\"!isFieldEnabled\">\r\n                                  <button\r\n                                    *ngIf=\"!isReadOpenMode && selectedDocuments.length > 0\"\r\n                                    type=\"button\"\r\n                                    mat-raised-button\r\n                                    color=\"warn\"\r\n                                    (click)=\"deleteDocuments()\"\r\n                                  >\r\n                                    {{ \"global.delete\" | translate }}\r\n                                  </button>\r\n\r\n                                  <button\r\n                                    *ngIf=\"!isReadOpenMode && selectedDocuments.length === 1\"\r\n                                    type=\"button\"\r\n                                    mat-raised-button\r\n                                    (click)=\"editDocument()\"\r\n                                  >\r\n                                    {{ \"global.edit\" | translate }}\r\n                                  </button>\r\n\r\n                                  <button\r\n                                    *ngIf=\"!isReadOpenMode && selectedDocuments.length === 1\"\r\n                                    type=\"button\"\r\n                                    mat-raised-button\r\n                                    (click)=\"openDocument()\"\r\n                                  >\r\n                                    {{ \"global.open\" | translate }}\r\n                                  </button>\r\n\r\n                                  <button\r\n                                    *ngIf=\"!isReadOpenMode && selectedDocuments.length == 0\"\r\n                                    type=\"button\"\r\n                                    mat-raised-button\r\n                                    (click)=\"addDocument()\"\r\n                                  >\r\n                                    {{ \"global.add\" | translate }}\r\n                                  </button>\r\n                                </div>\r\n                              </div>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate=\"colgroup\" let-columns>\r\n                              <colgroup>\r\n                                <col\r\n                                  class=\"aw-table-checkbox-wrapper\"\r\n                                  [ngClass]=\"{ 'display--none': isReadOpenMode }\"\r\n                                />\r\n                                <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                              </colgroup>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate=\"header\" let-columns>\r\n                              <tr>\r\n                                <th class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\">\r\n                                  <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                                </th>\r\n\r\n                                <th\r\n                                  pResizableColumn\r\n                                  *ngFor=\"let col of columns\"\r\n                                  [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                                >\r\n                                  {{ componentData.componentId + \".\" + col.field | translate }}\r\n                                </th>\r\n                              </tr>\r\n                            </ng-template>\r\n\r\n                            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                              <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                                <td class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\">\r\n                                  <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                                </td>\r\n\r\n                                <td\r\n                                  *ngFor=\"let col of columns\"\r\n                                  [ngSwitch]=\"col.field\"\r\n                                  [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                                >\r\n                                  <span *ngSwitchCase=\"'docEndOfValidityDate'\">\r\n                                    {{ rowData[col.field] | date: \"yyyy/MM/dd\":\"\":translateService.currentLang }}\r\n                                  </span>\r\n\r\n                                  <span *ngSwitchCase=\"'docName'\">\r\n                                    <span\r\n                                      (click)=\"downloadDocument(rowData)\"\r\n                                      style=\"cursor: pointer; text-decoration: underline; color: blue\"\r\n                                    >\r\n                                      {{ rowData[col.field] }}\r\n                                    </span>\r\n                                  </span>\r\n\r\n                                  <span *ngSwitchCase=\"'docExtension'\"> {{ showDocExtension(rowData) }} </span>\r\n\r\n                                  <span *ngSwitchCase=\"'docPublicationDate'\">\r\n                                    {{ rowData[col.field] | date: \"yyyy/MM/dd\":\"\":translateService.currentLang }}\r\n                                  </span>\r\n\r\n                                  <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                                </td>\r\n                              </tr>\r\n                            </ng-template>\r\n                          </p-table>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"section\">\r\n                        <h4 class=\"section-title\">\r\n                          {{ componentData.componentId + \".notes\" | translate }}\r\n                        </h4>\r\n                        <div class=\"section-content\">\r\n                          <div class=\"row\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">{{ componentData.componentId + \".note1\" | translate }}</label>\r\n\r\n                              <div class=\"form-control\">\r\n                                <textarea\r\n                                  class=\"aw-textarea\"\r\n                                  pInputTextarea\r\n                                  [rows]=\"3\"\r\n                                  maxlength=\"300\"\r\n                                  [(ngModel)]=\"note1\"\r\n                                  [disabled]=\"isReadOpenMode\"\r\n                                ></textarea>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">{{ componentData.componentId + \".note2\" | translate }}</label>\r\n\r\n                              <div class=\"form-control\">\r\n                                <textarea\r\n                                  class=\"aw-textarea\"\r\n                                  pInputTextarea\r\n                                  [rows]=\"3\"\r\n                                  maxlength=\"300\"\r\n                                  [(ngModel)]=\"note2\"\r\n                                  [disabled]=\"isReadOpenMode\"\r\n                                ></textarea>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">{{ componentData.componentId + \".note3\" | translate }}</label>\r\n\r\n                              <div class=\"form-control\">\r\n                                <textarea\r\n                                  class=\"aw-textarea\"\r\n                                  pInputTextarea\r\n                                  maxlength=\"300\"\r\n                                  [rows]=\"3\"\r\n                                  [(ngModel)]=\"note3\"\r\n                                  [disabled]=\"isReadOpenMode\"\r\n                                ></textarea>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n\r\n      <!-- Item Dialog -->\r\n      <aw-dialog-search-item\r\n        *ngIf=\"showItemsDialog\"\r\n        [(display)]=\"showItemsDialog\"\r\n        (onValidated)=\"setSelectedItems($event)\"\r\n      ></aw-dialog-search-item>\r\n\r\n      <!-- TIL Dialog -->\r\n      <aw-til-popup\r\n        *ngIf=\"showTILDialog\"\r\n        [(display)]=\"showTILDialog\"\r\n        [component-data]=\"dataItem\"\r\n        (onCreate)=\"addNewItem($event)\"\r\n      ></aw-til-popup>\r\n\r\n      <!-- REPAIR CENTER Dialog-->\r\n      <aw-repair-center-popup\r\n        *ngIf=\"showRepairCenterDialog\"\r\n        [(display)]=\"showRepairCenterDialog\"\r\n        [component-data]=\"dataRepairCenter\"\r\n        (onCreate)=\"addNewRepairCenter($event)\"\r\n        (onUpdate)=\"updateRepairCenter($event)\"\r\n      ></aw-repair-center-popup>\r\n\r\n      <!-- Cause of REMOVAL -->\r\n      <aw-cause-of-removal-popup\r\n        *ngIf=\"showCauseOfRemovalDialog\"\r\n        [(display)]=\"showCauseOfRemovalDialog\"\r\n        (onCreate)=\"addNewCause($event)\"\r\n      ></aw-cause-of-removal-popup>\r\n\r\n      <!-- MAINTENANCE STATS -->\r\n      <aw-statistics-popup\r\n        *ngIf=\"showMaintenanceStatDialog\"\r\n        [(display)]=\"showMaintenanceStatDialog\"\r\n        [component-data]=\"dataMaintenanceStats\"\r\n        (onCreate)=\"addNewStat($event)\"\r\n        (onUpdate)=\"updateStat($event)\"\r\n      >\r\n      </aw-statistics-popup>\r\n\r\n      <!-- REFERENCE MEASUREMENT -->\r\n      <aw-reference-measurement-popup\r\n        *ngIf=\"showRefMeasurementDialog\"\r\n        [(display)]=\"showRefMeasurementDialog\"\r\n        [component-data]=\"dataRefMeasurement\"\r\n        (onCreate)=\"addNewRefMeasurement($event)\"\r\n        (onUpdate)=\"updateRefMeasurement($event)\"\r\n        [bireItemDTOId]=\"returnBireItemDTOId()\"\r\n      >\r\n      </aw-reference-measurement-popup>\r\n\r\n      <!-- ITEM SON -->\r\n      <aw-dialog-search-item\r\n        *ngIf=\"showItemSonDialog\"\r\n        [(display)]=\"showItemSonDialog\"\r\n        (onValidated)=\"addNewItemSon($event)\"\r\n      ></aw-dialog-search-item>\r\n\r\n      <!-- ITEM FATHER -->\r\n      <aw-dialog-search-item\r\n        *ngIf=\"showItemFatherDialog\"\r\n        [(display)]=\"showItemFatherDialog\"\r\n        (onValidated)=\"addNewItemFather($event)\"\r\n      ></aw-dialog-search-item>\r\n\r\n      <!-- ITEM VERSION -->\r\n      <aw-item-version-popup\r\n        *ngIf=\"openPartNumberVersionDialogFlag\"\r\n        [(display)]=\"openPartNumberVersionDialogFlag\"\r\n        [component-data]=\"dataItemVersion\"\r\n        (onCreate)=\"addNewItemVersion($event)\"\r\n      ></aw-item-version-popup>\r\n\r\n      <!-- TASK -->\r\n      <aw-task-popup\r\n        *ngIf=\"showItemTaskDialog\"\r\n        [(display)]=\"showItemTaskDialog\"\r\n        [component-data]=\"dataItemTask\"\r\n        (onCreate)=\"addNewItemTask($event)\"\r\n        [bireItemDTOId]=\"returnBireItemDTOId()\"\r\n      ></aw-task-popup>\r\n\r\n      <!-- DAMAGE -->\r\n      <aw-damage-popup\r\n        *ngIf=\"showDamageDialog\"\r\n        [(display)]=\"showDamageDialog\"\r\n        [component-data]=\"dataDamage\"\r\n        (onCreate)=\"addNewDamage($event)\"\r\n        [bireItemDTOId]=\"returnBireItemDTOId()\"\r\n      ></aw-damage-popup>\r\n\r\n      <!-- LOCALISATION -->\r\n      <aw-localisation-popup\r\n        *ngIf=\"showLocalisationDialog\"\r\n        [(display)]=\"showLocalisationDialog\"\r\n        [component-data]=\"dataLocalisation\"\r\n        (onCreate)=\"addNewLocalisation($event)\"\r\n        [bireItemDTOId]=\"returnBireItemDTOId()\"\r\n      ></aw-localisation-popup>\r\n\r\n      <!-- DAM LOC TASK-->\r\n      <aw-dam-loc-task-popup\r\n        *ngIf=\"showBireDamLocalisationDialog\"\r\n        [(display)]=\"showBireDamLocalisationDialog\"\r\n        [component-data]=\"dataBireDamLoc\"\r\n        (onCreate)=\"addNewDamLocTask($event)\"\r\n        [bireItemDTOId]=\"returnBireItemDTOId()\"\r\n      >\r\n      </aw-dam-loc-task-popup>\r\n\r\n      <!-- STATUS UPDATE HISTORY -->\r\n      <aw-status-update-history\r\n        *ngIf=\"showStatusUpdatesPopup\"\r\n        [object]=\"bireItemDTO\"\r\n        [data]=\"tableStatusUpdatesData\"\r\n        [deleteApi]=\"deleteApi\"\r\n        [(display)]=\"showStatusUpdatesPopup\"\r\n        [keyMap]=\"updatesKeyMap\"\r\n        [isStatusEditable]=\"!isReadOpenMode\"\r\n        (onUpdated)=\"updateObjectStatusFromStatusUpdatesHistory($event)\"\r\n      >\r\n      </aw-status-update-history>\r\n\r\n      <aw-dialog-bire-document\r\n        *ngIf=\"showDocumentDialog\"\r\n        [document]=\"currentDocument\"\r\n        [(display)]=\"showDocumentDialog\"\r\n        [isReadOnlyForm]=\"isReadOnlyDocumentDialog\"\r\n        (onValidated)=\"updateDocument($event)\"\r\n      ></aw-dialog-bire-document>\r\n\r\n      <aw-item-import-popup\r\n        *ngIf=\"showAddDocumentDialog\"\r\n        [document]=\"currentDocument\"\r\n        [(display)]=\"showAddDocumentDialog\"\r\n        [isReadOnlyForm]=\"isReadOnlyDocumentDialog\"\r\n        [types]=\"documentTypes\"\r\n        (onValidated)=\"addNewDocument($event)\"\r\n      ></aw-item-import-popup>\r\n\r\n      <aw-configuration-pack-popup\r\n        *ngIf=\"showConfigPackDialog\"\r\n        [component-data]=\"currentPack\"\r\n        [typeList]=\"packTypeList\"\r\n        [(display)]=\"showConfigPackDialog\"\r\n        (onValidated)=\"updateConfigPack($event)\"\r\n      ></aw-configuration-pack-popup>\r\n\r\n      <aw-edit-evolution-popup\r\n        *ngIf=\"showEditEvolutionPackDialog\"\r\n        [component-data]=\"currentConfigEvolution\"\r\n        [(display)]=\"showEditEvolutionPackDialog\"\r\n        (onValidated)=\"updateConfigEvolution($event)\"\r\n      ></aw-edit-evolution-popup>\r\n\r\n      <aw-add-evolution-popup\r\n        *ngIf=\"showAddConfigPackDialog\"\r\n        [component-data]=\"currentPack\"\r\n        [(display)]=\"showAddConfigPackDialog\"\r\n        (onValidated)=\"validateConfigEvolution($event)\"\r\n      ></aw-add-evolution-popup>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/item-form.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/item-form.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .separator {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n:host .list-with-details .details {\n  flex-grow: 1; }\n\n:host .list-with-details .list {\n  min-width: 9rem; }\n\n:host .input-item-code {\n  width: 10% !important; }\n\n:host .input-item-code-5 {\n  width: auto;\n  min-width: 10% !important;\n  max-width: 22% !important; }\n\n:host .tiret {\n  margin-top: 4px !important;\n  margin-right: 4px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9lbmdpbmVlcmluZy1tYW5hZ2VtZW50L2l0ZW0vZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxlbmdpbmVlcmluZy1tYW5hZ2VtZW50XFxpdGVtXFxmb3JtXFxpdGVtLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZW5naW5lZXJpbmctbWFuYWdlbWVudC9pdGVtL2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDcUJFLGFBQWE7RUFDYixtQkFBbUI7RURsQmpCLG1CQUFtQixFQUFBOztBQUp2QjtFQVNNLFlBQVksRUFBQTs7QUFUbEI7RUFhTSxlQUFlLEVBQUE7O0FBYnJCO0VBa0JJLHFCQUFxQixFQUFBOztBQWxCekI7RUFzQkksV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix5QkFBeUIsRUFBQTs7QUF4QjdCO0VBNEJJLDBCQUEwQjtFQUMxQiw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vZW5naW5lZXJpbmctbWFuYWdlbWVudC9pdGVtL2Zvcm0vaXRlbS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5zZXBhcmF0b3Ige1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmxpc3Qtd2l0aC1kZXRhaWxzIHtcclxuICAgIC5kZXRhaWxzIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0IHtcclxuICAgICAgbWluLXdpZHRoOiA5cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlucHV0LWl0ZW0tY29kZSB7XHJcbiAgICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQtaXRlbS1jb2RlLTUge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAyMiUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50aXJldCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/item-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/item-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: ItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFormComponent", function() { return ItemFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_api_product_structure_history_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/product-structure-history.api */ "./src/app/shared/api/product-structure-history.api.ts");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/dynamic-attributes/dynamic-attributes.service */ "./src/app/shared/components/dynamic-attributes/dynamic-attributes.service.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/enums/table-column-filter-mode.enum */ "./src/app/shared/enums/table-column-filter-mode.enum.ts");
/* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/enums/table-selection-mode.enum */ "./src/app/shared/enums/table-selection-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/utils/dto-utils */ "./src/app/shared/utils/dto-utils.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _shared_utils_url_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/utils/url-utils */ "./src/app/shared/utils/url-utils.ts");
/* harmony import */ var _search_item_search_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../search/item-search.service */ "./src/app/main/engineering-management/item/search/item-search.service.ts");
/* harmony import */ var _item_form_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
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



























var ItemFormComponent = /** @class */ (function (_super) {
    __extends(ItemFormComponent, _super);
    function ItemFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, pageTocService, propertiesService, itemFormService, itemSearchService, translateService, dynamicAttributesService, confirmationService, productStructureHistoryApi, dateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.propertiesService = propertiesService;
        _this.itemFormService = itemFormService;
        _this.itemSearchService = itemSearchService;
        _this.translateService = translateService;
        _this.dynamicAttributesService = dynamicAttributesService;
        _this.confirmationService = confirmationService;
        _this.productStructureHistoryApi = productStructureHistoryApi;
        _this.dateService = dateService;
        _this.isMelSelected = false;
        _this.isillustratedSelected = false;
        _super.prototype.registerPageTocEntryObservable.call(_this);
        _this.componentName = _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__["ComponentConstants"].ENG_ITEM_FORM;
        _this.init();
        _this.loadCauseTypeList();
        _this.loadItemFamilyList();
        _this.setReferList();
        return _this;
    }
    ItemFormComponent.prototype.init = function () {
        this.kPourcentList = [];
        this.maintenanceTypeList = [];
        this.exchangeTypeList = [];
        this.repairCenterList = [];
        this.itemFamilyList = [];
        this.familyVariantList = [];
        this.bireVariantVersionList = [];
        this.flocTypeList = [];
        this.itemTypeList = [];
        this.lifeRestrictionTypeList = [];
        this.replacableUnitTypeList = [];
        this.itemFamilyCodeList = [];
        this.levelList = [];
        this.evolutionTableCols = [];
        this.evolutionTableList = [];
        this.unmountCodeList = [];
        this.bireUnmountAssemblyList = [];
        this.evolutionPacksTableCols = [];
        this.evolutionPacksTableList = [];
        this.selectedEvolutionPacks = [];
        this.configurationPackCols = [];
        this.configurationPackList = [];
        this.selectedConfigurationPacks = [];
        this.bireDocumentDisplayed = [];
        this.selectedDocuments = [];
        this.maintenanceProgramCols = [];
        this.maintenanceProgramList = [];
        this.selectedMaintenanceProgram = [];
        this.bireItemMaintenanceDTOAddedList = [];
        this.bireItemMaintenanceDTOUpdatedList = [];
        this.bireItemMaintenanceDTODeletedList = [];
        this.technicalLevelCols = [];
        this.technicalLevelList = [];
        this.selectedTechnicalLevel = [];
        this.bireTilItemDTODeletedList = [];
        this.bireTilItemDTOAddedList = [];
        this.repairCentersCols = [];
        this.repairCentersList = [];
        this.selectedRepairCenters = [];
        this.bireItemSiteDTODeletedList = [];
        this.bireItemSiteDTOAddedList = [];
        this.bireItemSiteDTOUpdatedList = [];
        this.causeOfRemovalList = [];
        this.causeOfRemovalCols = [];
        this.selectedCauseOfRemoval = [];
        this.bireReturnItemDTOAddedList = [];
        this.bireReturnItemDTODeletedList = [];
        this.itemSonFatherCols = [];
        this.itemFatherList = [];
        this.selectedItemFathers = [];
        this.itemSonList = [];
        this.selectedItemSons = [];
        this.removeDataStructureTab = [];
        this.saveStructureTab = [];
        this.tasksCols = [];
        this.tasksList = [];
        this.selectedTasks = [];
        this.bireTaskItemAddedList = [];
        this.bireTaskItemDeletedList = [];
        this.createBireVersionMeasureDTOList = [];
        this.updateBireVersionMeasureDTOList = [];
        this.removeBireVersionMeasureDTOIdList = [];
        this.statisticsCols = [];
        this.statisticsList = [];
        this.selectedStatistics = [];
        this.dynamicAttributesForItem = [];
        this.bireAttributesForItem = [];
        this.bireItemAttributeDTO = [];
        this.damagesCols = [];
        this.damagesList = [];
        this.selectedDamages = [];
        this.bireDamageItemDTOIdRemoveList = [];
        this.bireDamageItemDTOAddedList = [];
        this.refMeasurementList = [];
        this.selectedRefMeasurement = [];
        this.createBireVersionMeasureDTOList = [];
        this.updateBireVersionMeasureDTOList = [];
        this.selectedPartNumber = [];
        this.bireItemVersionDTOAddedList = [];
        this.bireItemVersionDTODeletedList = [];
        this.bireVersionPnDTOIdDeletedList = [];
        this.localisationList = [];
        this.selectedLocalisation = [];
        this.localisationCols = [];
        this.bireLocalisationItemDTOAddedList = [];
        this.bireLocalisationItemDTOIdRemoveList = [];
        this.damLocTasCols = [];
        this.selectedDamLocTask = [];
        this.createBireDamLocTaskDTOList = [];
        this.removeBireDamLocTaskDTOIdList = [];
        this.itemVersions = [];
        this.partNumberTableList = [];
        this.partNumberVersionList = [];
        this.partNumberVersionSelected = undefined;
        this.partNumberMap = new Map();
        this.packNumberMap = new Map();
        this.bireTils = [];
        this.listOfAllCauseOfRemoval = [];
        this.documentsTable = [];
        this.documentsAdded = [];
        this.documentsRemoved = [];
        this.documentsUpdated = [];
        this.causeTypeList = [];
        this.dataItem = {
            componentId: 'TilPopupComponent',
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
            object: {},
            selectedRow: undefined
        };
        this.showTILDialog = false;
        this.showRepairCenterDialog = false;
        this.showCauseOfRemovalDialog = false;
        this.showMaintenanceStatDialog = false;
        this.showConfigPackDialog = false;
        this.referRadio = 'referNHA';
        this.updatesKeyMap = new Map();
        this.deleteApi = this.productStructureHistoryApi.removeHfObjectByPk;
        this.createBirePackBaseOptionList = [];
        this.updateBirePackBaseOptionList = [];
        this.removeBirePackBaseOptionList = [];
        this.createBirePackEvolutionDTOList = [];
        this.updateBirePackEvolutionDTOList = [];
        this.packBaseOptionCode = [];
        this.packNumberSelected = undefined;
        this.currentPackNumber = {};
        this.packTypeList = [];
        this.packNumberList = [];
    };
    ItemFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__["ComponentConstants"].ENG_ITEM_FORM;
    };
    ItemFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (!!this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            if (!this.isCreateOpenMode && this.componentData.objectId) {
                this.bireItemDTO = this.serializationService.deserialize(this.componentData.objectId);
                this.initVersionsData();
                var context = this.bireItemDTO.chapter + "-" + this.bireItemDTO.section + "-" + this.bireItemDTO.subject;
                context += "-" + this.bireItemDTO.sheet + "-" + this.bireItemDTO.marks;
                this.subtitle = context;
                this.displayComponentContext(context, this.isCreateOpenMode);
                this.initDropdown();
                this.initTableCols();
                this.initItemData();
            }
            else {
                this.bireItemDTO = {};
                var context = 'tab.createMode';
                this.displayComponentContext(context, this.isCreateOpenMode);
                this.initDropdown();
                this.findBireAttributesByCategory();
            }
        }
        // Lang change events
        this.translateService.onLangChange.subscribe(function (_) {
            // Reset the right attribute name regarding the langage
            _this.dynamicAttributesForItem = _this.dynamicAttributesService.from(_this.bireAttributesForItem);
        });
        this.initTableCols();
        this.loadStatusList();
    };
    ItemFormComponent.prototype.loadStatusList = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__["GenericPropertyConstants"].OBJECT_STATUS_MAP).subscribe(function (results) {
            _this.statusList = results;
        });
    };
    ItemFormComponent.prototype.initVersionsData = function () {
        var _this = this;
        var bireItemDTOId = this.returnBireItemDTOId();
        this.itemVersions = [];
        this.itemFormService.findBireItemVersions(bireItemDTOId).subscribe(function (results) {
            if (!!results) {
                results.forEach(function (data) {
                    _this.itemVersions.push(data.value);
                });
            }
        });
    };
    ItemFormComponent.prototype.bindToc = function () {
        var _this = this;
        var mainDataKey = 'page.mainData';
        var generalKey = this.getTranslateKey('general');
        var partNumberKey = this.getTranslateKey('partNumbers');
        var structureKey = this.getTranslateKey('structure');
        var refMeasurementKey = this.getTranslateKey('refMeasurement');
        var damagesLocalisationKey = this.getTranslateKey('taskDamagesLocalisation');
        var confPackKey = this.getTranslateKey('configurationPacks');
        var maintenanceKey = this.getTranslateKey('maintenance');
        this.translateService
            .get([
            mainDataKey,
            generalKey,
            partNumberKey,
            structureKey,
            refMeasurementKey,
            damagesLocalisationKey,
            confPackKey,
            maintenanceKey
        ])
            .subscribe(function (results) {
            var mainDataLabel = !!results ? results[mainDataKey] : 'Main Information';
            var generalLabel = !!results ? results[generalKey] : 'Additional Information';
            var partNumberLabel = !!results ? results[partNumberKey] : 'Part Numbers';
            var structureLabel = !!results ? results[structureKey] : 'Structure';
            var refMeasurementLabel = !!results ? results[refMeasurementKey] : 'Reference Measurement';
            var damagesLocalisationLabel = !!results ? results[damagesLocalisationKey] : 'Task, Damages and Localisation';
            var confPackLabel = !!results ? results[confPackKey] : 'Configuration Packs';
            var maintenanceLabel = !!results ? results[maintenanceKey] : 'Maintenance';
            _this.toc = [
                {
                    id: 'mainInfoAnchor',
                    anchor: _this.mainInfoAnchor,
                    label: mainDataLabel
                },
                {
                    id: 'partNumber',
                    anchor: _this.partNumber,
                    label: partNumberLabel
                },
                {
                    id: 'general',
                    anchor: _this.general,
                    label: generalLabel
                },
                {
                    id: 'structure',
                    anchor: _this.structure,
                    label: structureLabel
                },
                {
                    id: 'refMeasurement',
                    anchor: _this.refMeasurement,
                    label: refMeasurementLabel
                },
                {
                    id: 'taskDamagesLocalisation',
                    anchor: _this.taskDamagesLocalisation,
                    label: damagesLocalisationLabel
                }
            ];
            if (!!_this.bireItemDTO.configurableArticle) {
                _this.toc.push({
                    id: 'configurationPacks',
                    anchor: _this.configurationPacks,
                    label: confPackLabel
                });
            }
            _this.toc.push({
                id: 'maintenance',
                anchor: _this.maintenance,
                label: maintenanceLabel
            });
            _super.prototype.selectPageTocEntry.call(_this, 'mainInfoAnchor');
        });
    };
    /**
     * Initilize table cols
     */
    ItemFormComponent.prototype.initTableCols = function () {
        this.evolutionTableCols = [
            { field: 'evolutionNumber', alignment: 'left' },
            { field: 'evolutionRemarks', alignment: 'left' },
            { field: 'pnCode', alignment: 'left' },
            { field: 'quantityBefore', alignment: 'left' },
            { field: 'actionTypeCode', alignment: 'left' },
            { field: 'pnPnCode', alignment: 'left' },
            { field: 'quantityAfter', alignment: 'left' },
            // { field: 'evolutionRevisionNumber', alignment: 'left' },
            { field: 'applicability', alignment: 'left' }
        ];
        this.documentsTableCols = [
            { field: 'docName', alignment: 'left', width: '47.5%' },
            { field: 'docSource', alignment: 'left', width: '12.5%' },
            { field: 'docExtension', alignment: 'left', width: '12.5%' },
            { field: 'docSize', alignment: 'left', width: '12.5%' },
            { field: 'docPublicationDate', alignment: 'left', width: '15%' }
        ];
        this.configurationPackCols = [
            { field: 'packBaseOptionCode', alignment: 'left' },
            { field: 'packDescription', alignment: 'left' },
            { field: 'packType', alignment: 'left' }
        ];
        this.maintenanceProgramCols = [{ field: 'maintenanceProgram', alignment: 'left' }];
        this.technicalLevelCols = [{ field: 'technicalLevel', alignment: 'left' }];
        this.repairCentersCols = [
            { field: 'repairCenterCode', alignment: 'left' },
            { field: 'exchangeType', alignment: 'left' }
        ];
        this.causeOfRemovalCols = [
            { field: 'returnReasonCode', alignment: 'left', width: '12.5%' },
            { field: 'returnReasonName', alignment: 'left', width: '25%' },
            { field: 'returnReasonDescription', alignment: 'left', width: '50%' },
            { field: 'causeTypeLabel', alignment: 'left', width: '12.5%' }
        ];
        this.statisticsCols = [
            { field: 'environmentCode', alignment: 'left', width: '20%' },
            { field: 'kPourcentCode', alignment: 'left', width: '20%' },
            { field: 'repairCenterCode', alignment: 'left', width: '30%' },
            { field: 'startDateLabel', alignment: 'left', width: '10%' },
            { field: 'endDateLabel', alignment: 'left', width: '10%' },
            { field: 'probability', alignment: 'left', width: '10%' }
        ];
        this.partNumberTableCols = [
            { field: 'pn', alignment: 'left', width: '15%' },
            { field: 'isn', alignment: 'left', width: '10%' },
            { field: 'ipcQuantity', alignment: 'left', width: '12.5%' },
            { field: 'mplQuantity', alignment: 'left', width: '12.5%' },
            { field: 'alternatePn', alignment: 'left', width: '50%' }
        ];
        this.itemSonFatherCols = [
            { field: 'item', alignment: 'left', width: '15%' },
            { field: 'designation', alignment: 'left', width: '40%' },
            { field: 'itemFamily', alignment: 'left', width: '15%' },
            { field: 'functionCode', alignment: 'left', width: '15%' },
            { field: 'itemNumber', alignment: 'left', width: '15%' }
        ];
        this.tasksCols = [
            { field: 'itemVersion', alignment: 'left', width: '8.5%' },
            { field: 'code', alignment: 'left', width: '15%' },
            { field: 'version', alignment: 'left', width: '6.5%' },
            { field: 'designation', alignment: 'left', width: '55%' },
            { field: 'type', alignment: 'left', width: '15%' }
        ];
        this.damagesCols = [
            { field: 'versionNumber', alignment: 'left', width: '22.5%' },
            { field: 'damageCode', alignment: 'left', width: '17.5%' },
            { field: 'damageDescription', alignment: 'left', width: '60%' }
        ];
        this.localisationCols = [
            { field: 'versionNumber', alignment: 'left', width: '22.5%' },
            { field: 'localisationCode', alignment: 'left', width: '17.5%' },
            { field: 'localisationDescription', alignment: 'left', width: '60%' }
        ];
        this.refMeasurementCols = [
            { field: 'versionNumber', alignment: 'left' },
            { field: 'counterCode', alignment: 'left' },
            { field: 'referenceValue', alignment: 'left' },
            { field: 'limitDateLabel', alignment: 'left' }
        ];
        this.damLocTasCols = [
            { field: 'versionNumber', alignment: 'left', width: '10%' },
            { field: 'damage', alignment: 'left', width: '20%' },
            { field: 'localisation', alignment: 'left', width: '20%' },
            { field: 'taskCode', alignment: 'left', width: '12.5%' },
            { field: 'taskVersion', alignment: 'left', width: '7.5%' },
            { field: 'taskDesignation', alignment: 'left', width: '30%' }
        ];
        this.evolutionPacksTableCols = [
            { field: 'control', alignment: 'left', width: '10%' },
            { field: 'evolutionNumber', alignment: 'left', width: '15%' },
            { field: 'revisionNumber', alignment: 'left', width: '15%' },
            { field: 'designation', alignment: 'left', width: '57%' }
        ];
    };
    /**
     * Init Screen
     */
    ItemFormComponent.prototype.initItemData = function () {
        this.initItemGeneralData();
        this.getIsMELIsIllustratedSelected();
        this.initEvolutionData();
        this.initConfigurationPacksData();
        this.initMaintenanceProgramData();
        this.statisticsData();
        this.initTechnicalLevelData();
        this.repairCenterData();
        this.causeOfRemovalData();
        this.partNumberData();
        this.findBireAttributesByCategory();
        this.initStructureData();
        this.initTaskDamagesLocalisationData();
        this.packNumberData();
    };
    /**
     * On click edit button
     */
    ItemFormComponent.prototype.editItem = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write);
    };
    /**
     * On click refresh button
     */
    ItemFormComponent.prototype.refreshItem = function () {
        this.init();
        this.ngOnInit();
        this.initTableCols();
    };
    /**
     * On click Cancel
     */
    ItemFormComponent.prototype.cancelItem = function () {
        if (this.isWriteOpenMode) {
            this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read);
        }
        this.refreshItem();
    };
    /**
     * On Radio change
     */
    ItemFormComponent.prototype.radChange = function () {
        this.bireItemDTO.fixChapter = undefined;
        this.bireItemDTO.fixSection = undefined;
        this.bireItemDTO.fixSubject = undefined;
        this.bireItemDTO.fixSheet = undefined;
        this.bireItemDTO.fixMarks = undefined;
        this.bireItemDTO.nhaChapter = undefined;
        this.bireItemDTO.nhaSection = undefined;
        this.bireItemDTO.nhaSubject = undefined;
        this.bireItemDTO.nhaSheet = undefined;
        this.bireItemDTO.nhaMarks = undefined;
    };
    ItemFormComponent.prototype.loadItemFamilyList = function () {
        var _this = this;
        this.itemFormService.getEquipmentFunctionList().subscribe(function (results) {
            _this.itemFamilyList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(results);
        });
    };
    /**
     * Method to init dropdowns
     */
    ItemFormComponent.prototype.initDropdown = function () {
        var _this = this;
        // Dissassemby group
        if (!this.isCreateOpenMode &&
            !!this.bireItemDTO &&
            !!this.bireItemDTO.familyCode &&
            !!this.bireItemDTO.structureType &&
            !!this.bireItemDTO.variantCode) {
            var bireVariantVersionDTOId = {
                familyCode: this.bireItemDTO.familyCode,
                structureType: this.bireItemDTO.structureType,
                variantCode: this.bireItemDTO.variantCode
            };
            this.itemFormService
                .findBireUnmountAssemblysByFamilyAndVariantCodes(bireVariantVersionDTOId)
                .subscribe(function (results) {
                _this.bireUnmountAssemblyList = results;
                results.forEach(function (res) {
                    if (!!res && !!res.unmountCode) {
                        _this.unmountCodeList.push({
                            label: res.unmountCode,
                            value: res.unmountCode
                        });
                    }
                });
            });
        }
        // Pack Type DropDown
        this.itemFormService.getPackType().subscribe(function (results) {
            _this.packTypeList = results;
        });
        // Family Variant dropdown
        this.itemSearchService.findBireVariantVersionsByFamilyFunctionItemAlternative().subscribe(function (results) {
            _this.bireVariantVersionList = results;
            var list = [];
            results.forEach(function (element) {
                list.push(element.labelValue);
            });
            _this.familyVariantList = list || [];
        });
        // Floc Type dropdown
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__["GenericPropertyConstants"].FLOC_TYPE_MAP).subscribe(function (results) {
            _this.flocTypeList = results;
        });
        // Item Type list dropdown
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__["GenericPropertyConstants"].ITEM_TYPE_MAP).subscribe(function (results) {
            _this.itemTypeList = results;
        });
        // Life restriction
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__["GenericPropertyConstants"].LIFE_RESTRICTION_TYPE_MAP).subscribe(function (results) {
            _this.lifeRestrictionTypeList = results;
        });
        // Replacable unit type
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__["GenericPropertyConstants"].MAINTENANCE_TYPE_MAP).subscribe(function (results) {
            _this.replacableUnitTypeList = results;
        });
        // Item family code list
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__["GenericPropertyConstants"].ITEM_FAMILY_CODE_MAP).subscribe(function (results) {
            _this.itemFamilyCodeList = results;
        });
        // Level Dropdown
        var maxLevel = 9;
        for (var i = 0; i <= maxLevel; i++) {
            this.levelList.push({
                label: i.toString(),
                value: i.toString()
            });
        }
        // Get dropdown list
        this.itemFormService.findAllBireTils().subscribe(function (results) {
            _this.bireTils = results;
        });
        // Repair Center List
        this.itemFormService.findAllBireReturnReasons().subscribe(function (results) {
            _this.listOfAllCauseOfRemoval = results;
        });
        this.getItemTypeMap();
        // K Pourcent List
        this.itemFormService.findBireKPourcentList().subscribe(function (results) {
            _this.kPourcentList = results;
        });
        // Maintenance Type
        this.itemFormService.findBireMaintenanceEnvironmentsList().subscribe(function (results) {
            _this.maintenanceTypeList = results;
        });
        // Repair Center List
        this.itemFormService.findAllBireSites().subscribe(function (results) {
            results.forEach(function (res) {
                res.label = res.value + "-" + res.label;
                if (res.value === 'Air base 1') {
                    res.label = 'Air base 1';
                }
            });
            _this.repairCenterList = results;
        });
        // Exchange Type List
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__["GenericPropertyConstants"].EXCHANGE_TYPE_MAP).subscribe(function (results) {
            _this.exchangeTypeList = results;
        });
    };
    /**
     * Event on chaning assembly dropdown
     */
    ItemFormComponent.prototype.changeDissassembly = function () {
        var _this = this;
        var unmountCodeDTO = this.bireUnmountAssemblyList.filter(function (res) { return res.unmountCode === _this.bireItemDTO.unmountCode; })[0];
        if (!!unmountCodeDTO) {
            this.bireItemDTO.unmFamilyCode = unmountCodeDTO.familyCode;
            this.bireItemDTO.unmStructureType = unmountCodeDTO.structureType;
            this.bireItemDTO.unmVariantCode = unmountCodeDTO.variantCode;
        }
    };
    ItemFormComponent.prototype.getItemTypeMap = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__["GenericPropertyConstants"].TASK_ITEM_TYPE_MAP).subscribe(function (results) {
            _this.taskItemList = results;
        });
    };
    /**
     * Return Bire Item DTO ID
     */
    ItemFormComponent.prototype.returnBireItemDTOId = function () {
        var bireItemDTOId = {
            chapter: '',
            marks: '',
            section: '',
            sheet: '',
            subject: '',
            structureType: ''
        };
        if (!!this.bireItemDTO) {
            bireItemDTOId = {
                familyCode: this.bireItemDTO.familyCode,
                chapter: this.bireItemDTO.chapter,
                section: this.bireItemDTO.section,
                sheet: this.bireItemDTO.sheet,
                marks: this.bireItemDTO.marks,
                subject: this.bireItemDTO.subject,
                structureType: this.bireItemDTO.structureType,
                variantCode: this.bireItemDTO.variantCode
            };
        }
        return bireItemDTOId;
    };
    /**
     * Method to fill Item screen in Edit mode
     */
    ItemFormComponent.prototype.initItemGeneralData = function () {
        var _this = this;
        var bireItemDTOId = this.returnBireItemDTOId();
        this.itemFormService.findBireItem(bireItemDTOId).subscribe(function (results) {
            _this.bireItemDTO = results;
            // Getting family variant
            _this.selectedFamilyVariant = _this.bireItemDTO.familyCode + "-" + _this.bireItemDTO.variantCode;
            _this.referRadio = !!_this.bireItemDTO.nhaChapter ? 'referNHA' : 'referToVal';
            _this.bindToc();
            _this.loadDocumentsTable();
        });
    };
    /**
     * Fetch data for Evolution tab
     */
    ItemFormComponent.prototype.initEvolutionData = function () {
        var _this = this;
        if (!this.isCreateOpenMode) {
            var bireItemDTOId = this.returnBireItemDTOId();
            this.itemFormService
                .findBireItemPnEvolutionsByItem(bireItemDTOId)
                .subscribe(function (results) {
                results.forEach(function (res) {
                    if (!!res.actionTypeCode) {
                        _this.getActionTypeLabel(res.actionTypeCode, function (label) {
                            res.actionTypeCode = label;
                            _this.evolutionTableList = __spread(_this.evolutionTableList, [res]);
                        });
                    }
                    else {
                        _this.evolutionTableList = __spread(_this.evolutionTableList, [res]);
                    }
                });
            });
        }
    };
    ItemFormComponent.prototype.getActionTypeLabel = function (code, callback) {
        this.itemFormService.findBireActionTypesByActionTypeCode(code).subscribe(function (results) {
            callback(results[0].label);
        });
    };
    /**
     * Fetch data for Configuration packs table
     */
    ItemFormComponent.prototype.initConfigurationPacksData = function () {
        var _this = this;
        if (!this.isCreateOpenMode) {
            var bireItemDTOId = this.returnBireItemDTOId();
            this.itemFormService.findBirePackBaseOptionsByItem(bireItemDTOId).subscribe(function (results) {
                _this.configurationPackList = results;
            });
        }
    };
    /**
     * Fetch data for Maintenance Program table
     */
    ItemFormComponent.prototype.initMaintenanceProgramData = function () {
        var _this = this;
        if (!this.isCreateOpenMode) {
            var bireItemDTOId = this.returnBireItemDTOId();
            this.itemFormService.findBireMaintenancePlansByItem(bireItemDTOId).subscribe(function (results) {
                _this.maintenanceProgramList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(results).map(function (result) {
                    var maintenanceProgram = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(result.planCode);
                    maintenanceProgram += _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(result.planDescription) ? '' : " - " + result.planDescription;
                    return {
                        maintenanceProgram: maintenanceProgram
                    };
                });
            });
        }
    };
    /**
     * Data for TIL table
     */
    ItemFormComponent.prototype.initTechnicalLevelData = function () {
        var _this = this;
        if (!this.isCreateOpenMode) {
            var bireItemDTOId = this.returnBireItemDTOId();
            this.itemFormService.findBireTilItemsByItem(bireItemDTOId).subscribe(function (results) {
                _this.technicalLevelList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(results).map(function (result) {
                    var technicalLevel = "" + result.technicalLevel;
                    technicalLevel += _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(result.tilDescription) ? '' : " - " + result.tilDescription;
                    return {
                        technicalLevel: technicalLevel,
                        _obj: result
                    };
                });
            });
        }
    };
    /**
     * Data for repair center table
     */
    ItemFormComponent.prototype.repairCenterData = function () {
        var _this = this;
        this.repairCentersList = [];
        if (!this.isCreateOpenMode) {
            var bireItemDTOId = this.returnBireItemDTOId();
            this.itemFormService.findBireItemSitesByItem(bireItemDTOId).subscribe(function (results) {
                results.forEach(function (dto) {
                    if (!!dto.repairCenterCode) {
                        dto.repairCenterCode = _this.repairCenterList.filter(function (res) {
                            if (res.value === 'Air base 1') {
                                res.label = 'Air base 1';
                            }
                            return res.value === dto.repairCenterCode;
                        })[0].label;
                    }
                    if (!!dto.exchangeType) {
                        dto.exchangeType = _this.exchangeTypeList.filter(function (res) { return res.value === dto.exchangeType; })[0].label;
                    }
                    _this.repairCentersList.push(dto);
                });
                _this.repairCentersList = __spread(_this.repairCentersList);
            });
        }
    };
    /**
     * Data for cause of removal table
     */
    ItemFormComponent.prototype.causeOfRemovalData = function () {
        var _this = this;
        if (!this.isCreateOpenMode) {
            var bireItemDTOId = this.returnBireItemDTOId();
            this.itemFormService.findBireReturnItem(bireItemDTOId).subscribe(function (results) {
                _this.causeOfRemovalList = results;
            });
        }
    };
    /**
     * Fetch data for statistics
     */
    ItemFormComponent.prototype.statisticsData = function () {
        var _this = this;
        this.statisticsList = [];
        if (!this.isCreateOpenMode) {
            var bireItemDTOId = this.returnBireItemDTOId();
            this.itemFormService
                .findBireItemMaintenanceByItem(bireItemDTOId)
                .subscribe(function (results) {
                var cloneBireItemMaintenance = [];
                results.forEach(function (dto) {
                    if (!!dto) {
                        if (!!dto.environmentCode) {
                            dto.environmentCode = _this.maintenanceTypeList.filter(function (res) { return res.value === dto.environmentCode; })[0].label;
                        }
                        if (!!dto.kPourcentCode) {
                            dto.kPourcentCode = _this.kPourcentList.filter(function (res) { return res.value === dto.kPourcentCode; })[0].label;
                        }
                        if (!!dto.repairCenterCode) {
                            dto.repairCenterCode = _this.repairCenterList.filter(function (res) { return res.value === dto.repairCenterCode; })[0].label;
                        }
                    }
                    dto.startDateLabel = _this.dateService.dateToString(dto.startDate);
                    dto.endDateLabel = _this.dateService.dateToString(dto.endDate);
                    cloneBireItemMaintenance.push(dto);
                });
                _this.statisticsList = __spread(cloneBireItemMaintenance);
            });
        }
    };
    ItemFormComponent.prototype.onSelectPartNumberVersion = function () {
        if (!!this.partNumberMap.get(this.partNumberVersionSelected.data)) {
            this.partNumberTableList = __spread(this.partNumberMap.get(this.partNumberVersionSelected.data));
            if (this.partNumberTableList.length === 1 && !this.partNumberTableList[0].pn) {
                this.partNumberTableList = [];
            }
        }
        else {
            this.partNumberTableList = [];
        }
    };
    /**
     * Fetch data for part number
     */
    ItemFormComponent.prototype.partNumberData = function () {
        var _this = this;
        if (!this.isCreateOpenMode) {
            var bireItemDTOId = this.returnBireItemDTOId();
            this.itemFormService.getPartNumberStructure(bireItemDTOId).subscribe(function (results) {
                var filteredResults = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(results).filter(function (result) { return !!result.versionNumber; });
                _this.partNumberVersionList = filteredResults
                    .map(function (result) { return result.versionNumber; })
                    .filter(function (v, i, a) { return a.indexOf(v) === i; })
                    .map(function (version) {
                    return {
                        label: "Version " + version,
                        data: version
                    };
                });
                filteredResults.forEach(function (result) {
                    var version = result.versionNumber;
                    if (!_this.partNumberMap.has(version)) {
                        _this.partNumberMap.set(version, []);
                    }
                    var alternatePn = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(result.alternatePn)
                        .map(function (pn) {
                        var formattedPn = "" + pn.pnPnCode;
                        formattedPn += _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(pn.interchangeability) ? '' : " - " + pn.interchangeability;
                        return formattedPn;
                    })
                        .join(' ; ');
                    var partNumberRow = {
                        alternatePn: alternatePn,
                        pn: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(result.pn),
                        isn: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(result.isn),
                        ipcQuantity: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(result.ipcQuantity),
                        mplQuantity: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(result.mplQuantity),
                        _obj: result
                    };
                    if (!!_this.partNumberMap.get(version) && _this.partNumberMap.get(version).length !== 0) {
                        _this.partNumberMap.set(version, __spread(_this.partNumberMap.get(version), [partNumberRow]));
                    }
                    else {
                        _this.partNumberMap.set(version, [partNumberRow]);
                    }
                    if (_this.partNumberVersionList.length > 0) {
                        _this.partNumberVersionSelected = _this.partNumberVersionList[0];
                        _this.onSelectPartNumberVersion();
                    }
                });
                // this.updateRowGroupMetaData();
                _this.initReferenceMeasurementData();
                _this.initDamagesData();
                _this.initLocalisationData();
                _this.bireDamLocTaskData();
            });
        }
    };
    /**
     * Update row group of part number on every operation on table
     */
    // private updateRowGroupMetaData() {
    //   this.rowGroupMetadata = {};
    //   if (this.partNumberTableList) {
    //     for (let i = 0; i < this.partNumberTableList.length; i++) {
    //       const rowData = this.partNumberTableList[i];
    //       const versionNumber = rowData.versionNumber as string;
    //       if (i === 0) {
    //         this.rowGroupMetadata[versionNumber] = { index: 0, size: 1 };
    //       } else {
    //         const previousRowData = this.partNumberTableList[i - 1];
    //         const previousRowGroup = previousRowData.versionNumber;
    //         if (versionNumber === previousRowGroup) {
    //           this.rowGroupMetadata[versionNumber].size++;
    //         } else {
    //           this.rowGroupMetadata[versionNumber] = { index: i, size: 1 };
    //         }
    //       }
    //     }
    //   }
    // }
    /**
     * Search Item OVS
     */
    ItemFormComponent.prototype.searchItems = function (source) {
        this.itemDialogSource = source;
        var componentObj;
        componentObj =
            !!this.componentData && !!this.componentData.objectId
                ? this.serializationService.deserialize(this.componentData.objectId)
                : {};
        if (!this.isReadOpenMode) {
            this.showItemsDialog = true;
        }
    };
    /**
     * Method call after item has been selected
     *
     */
    ItemFormComponent.prototype.setSelectedItems = function (selectedObject) {
        if (selectedObject) {
            if (this.itemDialogSource === 'fixedElement') {
                this.bireItemDTO.fixChapter = selectedObject.chapter;
                this.bireItemDTO.fixSheet = selectedObject.sheet;
                this.bireItemDTO.fixSubject = selectedObject.subject;
                this.bireItemDTO.fixSection = selectedObject.section;
                this.bireItemDTO.fixMarks = selectedObject.marks;
            }
            else if (this.itemDialogSource === 'referForNHA') {
                this.bireItemDTO.nhaChapter = selectedObject.chapter;
                this.bireItemDTO.nhaSheet = selectedObject.sheet;
                this.bireItemDTO.nhaSubject = selectedObject.subject;
                this.bireItemDTO.nhaSection = selectedObject.section;
                this.bireItemDTO.nhaMarks = selectedObject.marks;
            }
            else {
                this.bireItemDTO.referChapter = selectedObject.chapter;
                this.bireItemDTO.referSheet = selectedObject.sheet;
                this.bireItemDTO.referSubject = selectedObject.subject;
                this.bireItemDTO.referSection = selectedObject.section;
                this.bireItemDTO.referMarks = selectedObject.marks;
            }
        }
        this.showItemsDialog = false;
    };
    /**
     * Fetch data for is mel and is illustrated
     */
    ItemFormComponent.prototype.getIsMELIsIllustratedSelected = function () {
        var _this = this;
        var bireItemDTOId = this.returnBireItemDTOId();
        this.itemFormService.getIsMELIsIllustratedSelected(bireItemDTOId).subscribe(function (results) {
            if (results.length !== 0) {
                results.forEach(function (res) {
                    if (res.attributeId === '1') {
                        _this.isillustratedSelected = res.attributeValue === 'true' ? true : false;
                        if (_this.isillustratedSelected) {
                            _this.isIllustratedChange();
                        }
                    }
                    if (res.attributeId === '6') {
                        _this.isMelSelected = res.attributeValue === 'true' ? true : false;
                    }
                });
            }
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('getIsMELIsIllustratedSelected'));
        });
    };
    /**
     * Find list of attrubutes
     */
    ItemFormComponent.prototype.findBireAttributesByCategory = function () {
        var _this = this;
        this.bireAttributesForItem = [];
        this.itemFormService
            .findBireItemAttributesByCategory(_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].MCH_ATTRIBUTE_CATEGORY_ITEM_KEY)
            .subscribe(function (results) {
            _this.bireAttributesForItem = __spread(results);
            setTimeout(function () {
                _this.dynamicAttributesForItem = _this.dynamicAttributesService.from(_this.bireAttributesForItem);
                _this.getBireItemAttributes();
            });
        });
    };
    /**
     * Get attribute data
     */
    ItemFormComponent.prototype.getBireItemAttributes = function () {
        var _this = this;
        var bireItemDTOId = this.returnBireItemDTOId();
        this.itemFormService.findBireItemAttributesByItem(bireItemDTOId).subscribe(function (results) {
            results.forEach(function (attr) {
                switch (attr.attributeId) {
                    case '11': {
                        _this.note1 = attr.attributeValue;
                        break;
                    }
                    case '12': {
                        _this.note2 = attr.attributeValue;
                        break;
                    }
                    case '13': {
                        _this.note3 = attr.attributeValue;
                        break;
                    }
                    case '2': {
                        _this.isDocPresent = !!attr.attributeValue ? true : false;
                        _this.docURL = attr.attributeValue;
                        break;
                    }
                    default: {
                        break;
                    }
                }
            });
            _this.bireItemAttributeDTO = results;
            _this.dynamicAttributesService.setValues(_this.dynamicAttributesForItem, _this.bireItemAttributeDTO);
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('getBireItemAttributes'));
        });
    };
    /**
     * ITEM OPERATIONS
     */
    // ADD
    ItemFormComponent.prototype.createItem = function () {
        this.dataItem = {
            componentId: 'FamilyFormComponent',
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
            object: {},
            selectedRow: undefined
        };
        this.showTILDialog = true;
    };
    // ADD EVENT ITEM
    ItemFormComponent.prototype.addNewItem = function (newItem) {
        var searchInDisplayedList = this.technicalLevelList.find(
        // tslint:disable-next-line:triple-equals
        function (value) { return value._obj.technicalLevel == newItem.technicalLevel; });
        if (!searchInDisplayedList) {
            if (!!newItem && !!newItem.technicalLevel) {
                var bireTilItemDTO = {
                    technicalLevel: newItem.technicalLevel,
                    chapter: this.bireItemDTO.chapter,
                    familyCode: this.bireItemDTO.familyCode,
                    marks: this.bireItemDTO.marks,
                    section: this.bireItemDTO.section,
                    sheet: this.bireItemDTO.sheet,
                    structureType: this.bireItemDTO.structureType,
                    subject: this.bireItemDTO.subject,
                    variantCode: this.bireItemDTO.variantCode
                };
                var bireTilDTO = this.bireTils.filter(function (res) {
                    // tslint:disable-next-line:triple-equals
                    return res.technicalLevel == newItem.technicalLevel;
                })[0];
                if (!!bireTilDTO) {
                    var dto = {
                        technicalLevel: newItem.technicalLevel,
                        tilDescription: bireTilDTO.tilDescription,
                        tilName: bireTilDTO.tilName
                    };
                    var technicalLevel = "" + dto.technicalLevel;
                    technicalLevel += _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(dto.tilDescription) ? '' : " - " + dto.tilDescription;
                    var technicalLevelRow = {
                        technicalLevel: technicalLevel,
                        _obj: dto
                    };
                    this.technicalLevelList = __spread(this.technicalLevelList, [technicalLevelRow]);
                }
                this.bireTilItemDTOAddedList.push(bireTilItemDTO);
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyItemExisting'));
        }
        this.showTILDialog = false;
    };
    // DELETE ITEM
    ItemFormComponent.prototype.deleteSelectedItem = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedTILs'),
            accept: function () {
                _this.selectedTechnicalLevel.forEach(function (element) {
                    var searchInAddedList = _this.bireTilItemDTOAddedList.find(function (value) { return value.technicalLevel === element._obj.technicalLevel; });
                    if (searchInAddedList) {
                        var indexInAddedList = _this.bireTilItemDTOAddedList.indexOf(searchInAddedList);
                        _this.bireTilItemDTOAddedList.splice(indexInAddedList, 1);
                    }
                    else {
                        var bireTilItemDTOId = {
                            chapter: _this.bireItemDTO.chapter,
                            familyCode: _this.bireItemDTO.familyCode,
                            marks: _this.bireItemDTO.marks,
                            section: _this.bireItemDTO.section,
                            sheet: _this.bireItemDTO.sheet,
                            structureType: _this.bireItemDTO.structureType,
                            subject: _this.bireItemDTO.subject,
                            technicalLevel: element._obj.technicalLevel,
                            variantCode: _this.bireItemDTO.variantCode
                        };
                        _this.bireTilItemDTODeletedList.push(bireTilItemDTOId);
                    }
                    var indexInDisplayedList = _this.technicalLevelList.indexOf(element);
                    _this.technicalLevelList.splice(indexInDisplayedList, 1);
                });
                _this.selectedTechnicalLevel = [];
            }
        });
    };
    /**
     * REPAIR CENTER OPERATIONS
     */
    ItemFormComponent.prototype.createRepairCenter = function () {
        this.dataRepairCenter = {
            componentId: 'RepairCenterPopupComponent',
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
            object: {},
            selectedRow: undefined
        };
        this.showRepairCenterDialog = true;
    };
    // Edit repair center
    ItemFormComponent.prototype.editRepairCenterDialog = function () {
        if (this.selectedRepairCenters.length === 1) {
            this.currentCenterIndex = this.repairCentersList.indexOf(this.selectedRepairCenters[0]);
            var cloneDTO_1 = __assign({}, this.selectedRepairCenters[0]);
            cloneDTO_1.repairCenterCode = this.repairCenterList.filter(function (res) { return res.label === cloneDTO_1.repairCenterCode; })[0].value;
            if (!!cloneDTO_1.exchangeType) {
                cloneDTO_1.exchangeType = this.exchangeTypeList.filter(function (res) { return res.label === cloneDTO_1.exchangeType; })[0].value;
            }
            this.dataRepairCenter = {
                componentId: 'RepairCenterPopupComponent',
                selectedRow: undefined,
                object: cloneDTO_1,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write
            };
            this.showRepairCenterDialog = true;
        }
    };
    // Update event
    ItemFormComponent.prototype.updateRepairCenter = function (updatedCenter) {
        var previousRatingObject = this.repairCentersList[this.currentCenterIndex];
        var isFound = false;
        var cloneDTO = __assign({}, previousRatingObject);
        cloneDTO.repairCenterCode = this.repairCenterList.filter(function (res) { return res.value === updatedCenter.repairCenterCode; })[0].label;
        cloneDTO.exchangeType = this.exchangeTypeList.filter(function (res) { return res.value === updatedCenter.exchangeType; })[0].label;
        var searchInAddedList = this.bireItemSiteDTOAddedList.find(function (value) { return value.repairCenterCode === cloneDTO.repairCenterCode && value.exchangeType === cloneDTO.exchangeType; });
        var searchInUpdatedList = this.bireItemSiteDTOUpdatedList.find(function (value) { return value.repairCenterCode === cloneDTO.repairCenterCode && value.exchangeType === cloneDTO.exchangeType; });
        if (searchInAddedList) {
            var indexInAddedList = this.bireItemSiteDTOAddedList.indexOf(searchInAddedList);
            this.repairCentersList.forEach(function (res) {
                if (res.repairCenterCode === updatedCenter.repairCenterCode &&
                    res.exchangeType === updatedCenter.exchangeType) {
                    isFound = true;
                }
            });
            if (isFound) {
                this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyCenterExisting'));
            }
            else {
                this.bireItemSiteDTOAddedList[indexInAddedList] = updatedCenter;
            }
        }
        else if (searchInUpdatedList) {
            var indexInUpdatedList = this.bireItemSiteDTOUpdatedList.indexOf(searchInUpdatedList);
            this.repairCentersList.forEach(function (res) {
                if (res.repairCenterCode === updatedCenter.repairCenterCode &&
                    res.exchangeType === updatedCenter.exchangeType) {
                    isFound = true;
                }
            });
            if (isFound) {
                this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyCenterExisting'));
            }
            else {
                this.bireItemSiteDTOUpdatedList[indexInUpdatedList] = updatedCenter;
            }
        }
        else {
            this.repairCentersList.forEach(function (res) {
                if (res.repairCenterCode === updatedCenter.repairCenterCode &&
                    res.exchangeType === updatedCenter.exchangeType) {
                    isFound = true;
                }
            });
            if (isFound) {
                this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyCenterExisting'));
            }
            else {
                this.bireItemSiteDTOUpdatedList.push(updatedCenter);
            }
        }
        this.selectedStatistics = [];
        var clone = __assign({}, updatedCenter);
        clone.repairCenterCode = this.repairCenterList.filter(function (res) { return res.value === updatedCenter.repairCenterCode; })[0].label;
        clone.exchangeType = this.exchangeTypeList.filter(function (res) { return res.value === updatedCenter.exchangeType; })[0].label;
        this.repairCentersList[this.currentCenterIndex] = clone;
        this.showRepairCenterDialog = false;
    };
    // ADD EVENT SITE
    ItemFormComponent.prototype.addNewRepairCenter = function (newCenter) {
        var cloneCenter = __assign({}, newCenter);
        cloneCenter.repairCenterCode = this.repairCenterList.filter(function (res) {
            if (res.value === 'Air base 1') {
                res.label = 'Air base 1';
            }
            return res.value === cloneCenter.repairCenterCode;
        })[0].label;
        if (!!cloneCenter.exchangeType) {
            cloneCenter.exchangeType = this.exchangeTypeList.filter(function (res) { return res.value === cloneCenter.exchangeType; })[0].label;
        }
        var searchInDisplayedList = this.repairCentersList.find(function (value) { return value.repairCenterCode === cloneCenter.repairCenterCode; });
        if (!searchInDisplayedList) {
            if (!!newCenter) {
                newCenter.chapter = this.bireItemDTO.chapter;
                newCenter.familyCode = this.bireItemDTO.familyCode;
                newCenter.marks = this.bireItemDTO.marks;
                newCenter.section = this.bireItemDTO.section;
                newCenter.sheet = this.bireItemDTO.sheet;
                newCenter.structureType = this.bireItemDTO.structureType;
                newCenter.subject = this.bireItemDTO.subject;
                newCenter.variantCode = this.bireItemDTO.variantCode;
                this.bireItemSiteDTOAddedList.push(newCenter);
                var dto_1 = __assign({}, newCenter);
                dto_1.repairCenterCode = this.repairCenterList.filter(function (res) { return res.value === dto_1.repairCenterCode; })[0].label;
                if (!!dto_1.exchangeType) {
                    dto_1.exchangeType = this.exchangeTypeList.filter(function (res) { return res.value === dto_1.exchangeType; })[0].label;
                }
                this.repairCentersList.push(dto_1);
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyCenterExisting'));
        }
        this.showRepairCenterDialog = false;
    };
    // DELETE Repair CENTER
    ItemFormComponent.prototype.deleteSelectedRepairCenter = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedSites'),
            accept: function () {
                _this.selectedRepairCenters.forEach(function (element) {
                    var searchInAddedList = _this.bireItemSiteDTOAddedList.find(function (value) { return value.repairCenterCode === element.repairCenterCode; });
                    if (searchInAddedList) {
                        var indexInAddedList = _this.bireItemSiteDTOAddedList.indexOf(searchInAddedList);
                        _this.bireItemSiteDTOAddedList.splice(indexInAddedList, 1);
                    }
                    else {
                        var bireItemSiteDTOId = {
                            chapter: _this.bireItemDTO.chapter,
                            familyCode: _this.bireItemDTO.familyCode,
                            marks: _this.bireItemDTO.marks,
                            section: _this.bireItemDTO.section,
                            sheet: _this.bireItemDTO.sheet,
                            structureType: _this.bireItemDTO.structureType,
                            subject: _this.bireItemDTO.subject,
                            variantCode: _this.bireItemDTO.variantCode,
                            repairCenterCode: element.repairCenterCode
                        };
                        var dto_2 = __assign({}, bireItemSiteDTOId);
                        dto_2.repairCenterCode = _this.repairCenterList.filter(function (res) { return res.label === dto_2.repairCenterCode; })[0].value;
                        _this.bireItemSiteDTODeletedList.push(dto_2);
                    }
                    var indexInDisplayedList = _this.repairCentersList.indexOf(element);
                    _this.repairCentersList.splice(indexInDisplayedList, 1);
                });
                _this.selectedRepairCenters = [];
            }
        });
    };
    /**
     * CAUSE OF REMOVAL Operations
     */
    // ADD
    ItemFormComponent.prototype.createRemovalCause = function () {
        this.dataRepairCenter = {
            componentId: 'CauseOfRemovalPopupComponent',
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
            object: {},
            selectedRow: undefined
        };
        this.showCauseOfRemovalDialog = true;
    };
    // ADD EVENT
    ItemFormComponent.prototype.addNewCause = function (newCenter) {
        var _this = this;
        newCenter.forEach(function (element) {
            var searchInDisplayedList = _this.causeOfRemovalList.find(function (value) { return value.returnReasonCode === element.returnReasonCode; });
            if (!searchInDisplayedList) {
                if (!!element) {
                    var elementDTO = {
                        chapter: _this.bireItemDTO.chapter,
                        familyCode: _this.bireItemDTO.familyCode,
                        marks: _this.bireItemDTO.marks,
                        section: _this.bireItemDTO.section,
                        sheet: _this.bireItemDTO.sheet,
                        structureType: _this.bireItemDTO.structureType,
                        subject: _this.bireItemDTO.subject,
                        variantCode: _this.bireItemDTO.variantCode,
                        returnReasonCode: element.returnReasonCode
                    };
                    _this.bireReturnItemDTOAddedList.push(elementDTO);
                    var bireReturnReasonDTO_1 = _this.listOfAllCauseOfRemoval.filter(function (res) {
                        return res.returnReasonCode === element.returnReasonCode;
                    })[0];
                    if (!!bireReturnReasonDTO_1) {
                        var causeType = _this.causeTypeList.find(function (elt) { return elt.value === bireReturnReasonDTO_1.causeType; });
                        var dto = {
                            causeType: bireReturnReasonDTO_1.causeType,
                            causeTypeLabel: causeType ? causeType.label : bireReturnReasonDTO_1.causeType,
                            returnReasonCode: element.returnReasonCode,
                            returnReasonDescription: bireReturnReasonDTO_1.returnReasonDescription,
                            returnReasonName: bireReturnReasonDTO_1.returnReasonName
                        };
                        _this.causeOfRemovalList.push(dto);
                    }
                }
            }
            else {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorAlreadyRemovalCauseExisting'));
            }
        });
        this.showCauseOfRemovalDialog = false;
    };
    // DELETE
    ItemFormComponent.prototype.deleteSelectedRemovalCause = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedCauses'),
            accept: function () {
                _this.selectedCauseOfRemoval.forEach(function (element) {
                    var searchInAddedList = _this.bireReturnItemDTOAddedList.find(function (value) { return value.returnReasonCode === element.returnReasonCode; });
                    if (searchInAddedList) {
                        var indexInAddedList = _this.bireReturnItemDTOAddedList.indexOf(searchInAddedList);
                        _this.bireReturnItemDTOAddedList.splice(indexInAddedList, 1);
                    }
                    else {
                        var bireReturnItemDTOId = {
                            chapter: _this.bireItemDTO.chapter,
                            familyCode: _this.bireItemDTO.familyCode,
                            marks: _this.bireItemDTO.marks,
                            section: _this.bireItemDTO.section,
                            sheet: _this.bireItemDTO.sheet,
                            structureType: _this.bireItemDTO.structureType,
                            subject: _this.bireItemDTO.subject,
                            variantCode: _this.bireItemDTO.variantCode,
                            returnReasonCode: element.returnReasonCode
                        };
                        _this.bireReturnItemDTODeletedList.push(bireReturnItemDTOId);
                    }
                    var indexInDisplayedList = _this.causeOfRemovalList.indexOf(element);
                    _this.causeOfRemovalList.splice(indexInDisplayedList, 1);
                });
                _this.selectedCauseOfRemoval = [];
            }
        });
    };
    /**
     * MAINTENANCE STATS Operations
     */
    ItemFormComponent.prototype.createMaintenanceStats = function () {
        this.dataMaintenanceStats = {
            componentId: 'StatisticsPopupComponent',
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
            object: {},
            selectedRow: undefined
        };
        this.showMaintenanceStatDialog = true;
    };
    // OPEN
    ItemFormComponent.prototype.openMaintenanceStatDialog = function () {
        if (this.selectedStatistics.length === 1) {
            var cloneDTO_2 = __assign({}, this.selectedStatistics[0]);
            cloneDTO_2.environmentCode = this.maintenanceTypeList.filter(function (res) { return res.label === cloneDTO_2.environmentCode; })[0].value;
            cloneDTO_2.kPourcentCode = this.kPourcentList.filter(function (res) { return res.label === cloneDTO_2.kPourcentCode; })[0].value;
            cloneDTO_2.repairCenterCode = this.repairCenterList.filter(function (res) { return res.label === cloneDTO_2.repairCenterCode; })[0].value;
            this.dataMaintenanceStats = {
                componentId: 'StatisticsPopupComponent',
                selectedRow: undefined,
                object: cloneDTO_2,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read
            };
            this.showMaintenanceStatDialog = true;
        }
    };
    // ADD EVENT STATS
    ItemFormComponent.prototype.addNewStat = function (newCenter) {
        var envCode = this.maintenanceTypeList.filter(function (res) { return res.value === newCenter.environmentCode; })[0].label;
        var kPourCode = this.kPourcentList.filter(function (res) { return res.value === newCenter.kPourcentCode; })[0]
            .label;
        var repairCenterCode = this.repairCenterList.filter(function (res) { return res.value === newCenter.repairCenterCode; })[0].label;
        var searchInDisplayedList = this.statisticsList.find(function (value) {
            return value.repairCenterCode === repairCenterCode &&
                value.kPourcentCode === kPourCode &&
                value.environmentCode === envCode;
        });
        if (!searchInDisplayedList) {
            if (!!newCenter) {
                var bireItemMaintenanceDTO = {
                    chapter: this.bireItemDTO.chapter,
                    familyCode: this.bireItemDTO.familyCode,
                    marks: this.bireItemDTO.marks,
                    section: this.bireItemDTO.section,
                    sheet: this.bireItemDTO.sheet,
                    structureType: this.bireItemDTO.structureType,
                    subject: this.bireItemDTO.subject,
                    variantCode: this.bireItemDTO.variantCode,
                    endDate: newCenter.endDate,
                    environmentCode: newCenter.environmentCode,
                    kPourcentCode: newCenter.kPourcentCode,
                    probability: newCenter.probability,
                    repairCenterCode: newCenter.repairCenterCode,
                    startDate: newCenter.startDate
                };
                var tableDTO = __assign({}, bireItemMaintenanceDTO);
                tableDTO.environmentCode = this.maintenanceTypeList.filter(function (res) { return res.value === newCenter.environmentCode; })[0].label;
                tableDTO.kPourcentCode = this.kPourcentList.filter(function (res) { return res.value === newCenter.kPourcentCode; })[0].label;
                tableDTO.repairCenterCode = this.repairCenterList.filter(function (res) { return res.value === newCenter.repairCenterCode; })[0].label;
                this.bireItemMaintenanceDTOAddedList.push(bireItemMaintenanceDTO);
                tableDTO.startDateLabel = this.dateService.dateToString(tableDTO.startDate);
                tableDTO.endDateLabel = this.dateService.dateToString(tableDTO.endDate);
                this.statisticsList.push(tableDTO);
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyItemExisting'));
        }
        this.showMaintenanceStatDialog = false;
    };
    // EDIT
    ItemFormComponent.prototype.editStat = function () {
        var _this = this;
        if (this.selectedStatistics.length === 1) {
            // Copy all the selectedRating[0] field into currentRating one by one
            this.currentStatIndex = this.statisticsList.indexOf(this.selectedStatistics[0]);
            var cloneObj = __assign({}, this.selectedStatistics[0]);
            cloneObj.environmentCode = this.maintenanceTypeList.filter(function (res) { return res.label === _this.selectedStatistics[0].environmentCode; })[0].value;
            cloneObj.kPourcentCode = this.kPourcentList.filter(function (res) { return res.label === _this.selectedStatistics[0].kPourcentCode; })[0].value;
            cloneObj.repairCenterCode = this.repairCenterList.filter(function (res) { return res.label === _this.selectedStatistics[0].repairCenterCode; })[0].value;
            this.dataMaintenanceStats = {
                componentId: 'StatisticsPopupComponent',
                selectedRow: undefined,
                object: cloneObj,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write
            };
        }
        this.showMaintenanceStatDialog = true;
    };
    // UPDATE
    ItemFormComponent.prototype.updateStat = function (udpatedStat) {
        var previousRatingObject = this.statisticsList[this.currentStatIndex];
        var isFound = false;
        var searchInAddedList = this.bireItemMaintenanceDTOAddedList.find(function (value) {
            return value.environmentCode === previousRatingObject.environmentCode &&
                value.kPourcentCode === previousRatingObject.kPourcentCode &&
                value.repairCenterCode === previousRatingObject.repairCenterCode;
        });
        var searchInUpdatedList = this.bireItemMaintenanceDTOUpdatedList.find(function (value) {
            return value.environmentCode === previousRatingObject.environmentCode &&
                value.kPourcentCode === previousRatingObject.kPourcentCode &&
                value.repairCenterCode === previousRatingObject.repairCenterCode;
        });
        if (searchInAddedList) {
            var indexInAddedList = this.bireItemMaintenanceDTOAddedList.indexOf(searchInAddedList);
            this.statisticsList.forEach(function (res) {
                if (res.environmentCode === udpatedStat.environmentCode &&
                    res.kPourcentCode === udpatedStat.kPourcentCode &&
                    res.repairCenterCode === udpatedStat.repairCenterCode &&
                    res.startDate === udpatedStat.startDate &&
                    res.probability === udpatedStat.probability &&
                    res.endDate === udpatedStat.endDate) {
                    isFound = true;
                }
            });
            if (isFound) {
                this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyModificationExisting'));
            }
            else {
                this.bireItemMaintenanceDTOAddedList[indexInAddedList] = udpatedStat;
            }
        }
        else if (searchInUpdatedList) {
            var indexInUpdatedList = this.bireItemMaintenanceDTOUpdatedList.indexOf(searchInUpdatedList);
            this.statisticsList.forEach(function (res) {
                if (res.environmentCode === udpatedStat.environmentCode &&
                    res.kPourcentCode === udpatedStat.kPourcentCode &&
                    res.repairCenterCode === udpatedStat.repairCenterCode &&
                    res.startDate === udpatedStat.startDate &&
                    res.probability === udpatedStat.probability &&
                    res.endDate === udpatedStat.endDate) {
                    isFound = true;
                }
            });
            if (isFound) {
                this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyModificationExisting'));
            }
            else {
                this.bireItemMaintenanceDTOUpdatedList[indexInUpdatedList] = udpatedStat;
            }
        }
        else {
            this.statisticsList.forEach(function (res) {
                if (res.environmentCode === udpatedStat.environmentCode &&
                    res.kPourcentCode === udpatedStat.kPourcentCode &&
                    res.repairCenterCode === udpatedStat.repairCenterCode &&
                    res.startDate === udpatedStat.startDate &&
                    res.probability === udpatedStat.probability &&
                    res.endDate === udpatedStat.endDate) {
                    isFound = true;
                }
            });
            if (isFound) {
                this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyModificationExisting'));
            }
            else {
                this.bireItemMaintenanceDTOUpdatedList.push(udpatedStat);
            }
        }
        this.selectedStatistics = [];
        var clone = __assign({}, udpatedStat);
        clone.environmentCode = this.maintenanceTypeList.filter(function (res) { return res.value === udpatedStat.environmentCode; })[0].label;
        clone.kPourcentCode = this.kPourcentList.filter(function (res) { return res.value === udpatedStat.kPourcentCode; })[0].label;
        clone.repairCenterCode = this.repairCenterList.filter(function (res) { return res.value === udpatedStat.repairCenterCode; })[0].label;
        clone.startDateLabel = this.dateService.dateToString(clone.startDate);
        clone.endDateLabel = this.dateService.dateToString(clone.endDate);
        this.statisticsList[this.currentStatIndex] = clone;
        this.showMaintenanceStatDialog = false;
    };
    // DELETE
    ItemFormComponent.prototype.deleteSelectedStat = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedStat'),
            accept: function () {
                _this.selectedStatistics.forEach(function (element) {
                    var searchInAddedList = _this.bireItemMaintenanceDTODeletedList.find(function (value) {
                        return value.environmentCode === element.environmentCode &&
                            value.kPourcentCode === element.kPourcentCode &&
                            value.repairCenterCode === element.repairCenterCode;
                    });
                    if (searchInAddedList) {
                        var indexInAddedList = _this.bireItemMaintenanceDTODeletedList.indexOf(searchInAddedList);
                        _this.bireItemMaintenanceDTODeletedList.splice(indexInAddedList, 1);
                    }
                    else {
                        var bireItemMaintenanceDTOId = {
                            chapter: _this.bireItemDTO.chapter,
                            familyCode: _this.bireItemDTO.familyCode,
                            marks: _this.bireItemDTO.marks,
                            section: _this.bireItemDTO.section,
                            sheet: _this.bireItemDTO.sheet,
                            structureType: _this.bireItemDTO.structureType,
                            subject: _this.bireItemDTO.subject,
                            variantCode: _this.bireItemDTO.variantCode,
                            environmentCode: element.environmentCode,
                            kPourcentCode: element.kPourcentCode,
                            repairCenterCode: element.repairCenterCode
                        };
                        var clone = __assign({}, bireItemMaintenanceDTOId);
                        clone.environmentCode = _this.maintenanceTypeList.filter(function (res) { return res.label === _this.selectedStatistics[0].environmentCode; })[0].value;
                        clone.kPourcentCode = _this.kPourcentList.filter(function (res) { return res.label === _this.selectedStatistics[0].kPourcentCode; })[0].value;
                        clone.repairCenterCode = _this.repairCenterList.filter(function (res) { return res.label === _this.selectedStatistics[0].repairCenterCode; })[0].value;
                        _this.bireItemMaintenanceDTODeletedList.push(clone);
                    }
                    var indexInDisplayedList = _this.statisticsList.indexOf(element);
                    _this.statisticsList.splice(indexInDisplayedList, 1);
                });
                _this.selectedStatistics = [];
            }
        });
    };
    /**
     * STRUCTURE TAB Fetch(ITEM FATHER AND ITEM SONS)
     */
    ItemFormComponent.prototype.initStructureData = function () {
        var _this = this;
        var bireEvolutionItemDTO = {
            chapter: this.bireItemDTO.chapter,
            familyCode: this.bireItemDTO.familyCode,
            marks: this.bireItemDTO.marks,
            section: this.bireItemDTO.section,
            sheet: this.bireItemDTO.sheet,
            structureType: this.bireItemDTO.structureType,
            subject: this.bireItemDTO.subject,
            variantCode: this.bireItemDTO.variantCode
        };
        this.itemFormService.getStructureDetails(bireEvolutionItemDTO).subscribe(function (results) {
            results.forEach(function (res) {
                if (!!res.itemFatherOutput) {
                    _this.itemFatherList = __spread(_this.itemFatherList, [_this.createStructureRow(res.itemFatherOutput)]);
                }
                if (!!res.itemSonsOutput) {
                    _this.itemSonList = __spread(_this.itemSonList, [_this.createStructureRow(res.itemSonsOutput)]);
                }
            });
        });
    };
    ItemFormComponent.prototype.createStructureRow = function (obj) {
        var itemFamily = this.itemFamilyCodeList.find(function (elt) { return elt.value === obj.itemFamily; });
        var structureRow = {
            item: obj.item,
            designation: obj.designation,
            itemFamily: itemFamily ? itemFamily.label : obj.itemFamily,
            functionCode: obj.functionCode,
            itemNumber: obj.itemNumber
        };
        return structureRow;
    };
    /**
     * Tasks Damages Localisation Tab Fetch
     */
    ItemFormComponent.prototype.initTaskDamagesLocalisationData = function () {
        this.initTasksData();
    };
    // Item Data
    ItemFormComponent.prototype.initTasksData = function () {
        var _this = this;
        var bireItemDTOId = this.returnBireItemDTOId();
        this.itemFormService
            .findBireTaskItemsByItemTaskTab(bireItemDTOId)
            .subscribe(function (results) {
            _this.tasksList = results;
        });
    };
    // Damage table
    ItemFormComponent.prototype.initDamagesData = function () {
        var _this = this;
        var arr = [];
        this.itemVersions.forEach(function (res) {
            var bireItemVersionDTOId = {
                chapter: _this.bireItemDTO.chapter,
                familyCode: _this.bireItemDTO.familyCode,
                marks: _this.bireItemDTO.marks,
                section: _this.bireItemDTO.section,
                sheet: _this.bireItemDTO.sheet,
                structureType: _this.bireItemDTO.structureType,
                subject: _this.bireItemDTO.subject,
                variantCode: _this.bireItemDTO.variantCode,
                versionNumber: res
            };
            _this.itemFormService
                .findBireDamageItemsByItemVersionItemScreen(bireItemVersionDTOId)
                .subscribe(function (results) {
                results.forEach(function (dto) {
                    if (!!dto && !!dto.bireDamageItemDTO) {
                        var damageCustomDTO = {
                            damageCode: dto.bireDamageItemDTO.damageCode,
                            chapter: dto.bireDamageItemDTO.chapter,
                            familyCode: dto.bireDamageItemDTO.familyCode,
                            marks: dto.bireDamageItemDTO.marks,
                            section: dto.bireDamageItemDTO.section,
                            sheet: dto.bireDamageItemDTO.sheet,
                            structureType: dto.bireDamageItemDTO.structureType,
                            subject: dto.bireDamageItemDTO.subject,
                            variantCode: dto.bireDamageItemDTO.variantCode,
                            damageDescription: dto.description,
                            versionNumber: dto.bireDamageItemDTO.versionNumber
                        };
                        arr.push(damageCustomDTO);
                    }
                });
                _this.damagesList = __spread(arr);
            });
        });
    };
    /**
     * Localisation Table data
     */
    ItemFormComponent.prototype.initLocalisationData = function () {
        var _this = this;
        var arr = [];
        this.itemVersions.forEach(function (res) {
            var bireItemVersionDTOId = {
                chapter: _this.bireItemDTO.chapter,
                familyCode: _this.bireItemDTO.familyCode,
                marks: _this.bireItemDTO.marks,
                section: _this.bireItemDTO.section,
                sheet: _this.bireItemDTO.sheet,
                structureType: _this.bireItemDTO.structureType,
                subject: _this.bireItemDTO.subject,
                variantCode: _this.bireItemDTO.variantCode,
                versionNumber: res
            };
            _this.itemFormService
                .findBireLocalisationItemsByItemVersion(bireItemVersionDTOId)
                .subscribe(function (results) {
                results.forEach(function (dto) {
                    arr.push(dto);
                });
                _this.localisationList = __spread(arr);
            });
        });
    };
    /**
     * Damage Localisation Task Table fetch data
     */
    ItemFormComponent.prototype.bireDamLocTaskData = function () {
        var _this = this;
        var arr = [];
        this.itemVersions.forEach(function (res) {
            var bireItemVersionDTOId = {
                chapter: _this.bireItemDTO.chapter,
                familyCode: _this.bireItemDTO.familyCode,
                marks: _this.bireItemDTO.marks,
                section: _this.bireItemDTO.section,
                sheet: _this.bireItemDTO.sheet,
                structureType: _this.bireItemDTO.structureType,
                subject: _this.bireItemDTO.subject,
                variantCode: _this.bireItemDTO.variantCode,
                versionNumber: res
            };
            _this.itemFormService
                .findBireDamLocTasksByItemVersion(bireItemVersionDTOId)
                .subscribe(function (results) {
                results.forEach(function (dto) {
                    if (!!dto && !!dto.bireDamLocTaskDTO) {
                        var bireDamLocTaskCustomOutput = {
                            damageCode: dto.bireDamLocTaskDTO.damageCode,
                            chapter: dto.bireDamLocTaskDTO.chapter,
                            familyCode: dto.bireDamLocTaskDTO.familyCode,
                            marks: dto.bireDamLocTaskDTO.marks,
                            section: dto.bireDamLocTaskDTO.section,
                            sheet: dto.bireDamLocTaskDTO.sheet,
                            structureType: dto.bireDamLocTaskDTO.structureType,
                            subject: dto.bireDamLocTaskDTO.subject,
                            variantCode: dto.bireDamLocTaskDTO.variantCode,
                            damageDescription: dto.damageDescription,
                            localisationCode: dto.bireDamLocTaskDTO.localisationCode,
                            localisationDescription: dto.localisationDescription,
                            taskCode: dto.bireDamLocTaskDTO.taskCode,
                            taskDesignation: dto.taskDesignation,
                            taskVersion: dto.bireDamLocTaskDTO.taskVersion,
                            versionNumber: dto.bireDamLocTaskDTO.versionNumber,
                            damageCodeTxt: dto.bireDamLocTaskDTO.damageCode,
                            damageDescriptionTxt: dto.damageDescription,
                            localisationCodeTxt: dto.bireDamLocTaskDTO.localisationCode,
                            localisationDescriptionTxt: dto.localisationDescription
                        };
                        var damage = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(dto.bireDamLocTaskDTO.damageCode);
                        damage += _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(dto.damageDescription) ? '' : " - " + dto.damageDescription;
                        var localisation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(dto.bireDamLocTaskDTO.localisationCode);
                        localisation += _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(dto.localisationDescription)
                            ? ''
                            : " - " + dto.localisationDescription;
                        var damageLocalisationTaskRow = {
                            damage: damage,
                            localisation: localisation,
                            versionNumber: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(dto.bireDamLocTaskDTO.versionNumber),
                            taskCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(dto.bireDamLocTaskDTO.taskCode),
                            taskVersion: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(dto.bireDamLocTaskDTO.taskVersion),
                            taskDesignation: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(dto.taskDesignation),
                            _obj: bireDamLocTaskCustomOutput
                        };
                        arr.push(damageLocalisationTaskRow);
                    }
                });
                _this.damLocTaskList = __spread(arr);
            });
        });
    };
    /**
     * REFERENCE MEASUREMENT Fetch data
     */
    ItemFormComponent.prototype.initReferenceMeasurementData = function () {
        var _this = this;
        this.refMeasurementList = [];
        this.itemVersions.forEach(function (res) {
            var bireItemVersionDTOId = {
                chapter: _this.bireItemDTO.chapter,
                familyCode: _this.bireItemDTO.familyCode,
                marks: _this.bireItemDTO.marks,
                section: _this.bireItemDTO.section,
                sheet: _this.bireItemDTO.sheet,
                structureType: _this.bireItemDTO.structureType,
                subject: _this.bireItemDTO.subject,
                variantCode: _this.bireItemDTO.variantCode,
                versionNumber: res
            };
            _this.itemFormService
                .findBireVersionMeasuresByItemVersion(bireItemVersionDTOId)
                .subscribe(function (results) {
                results.forEach(function (resp) {
                    resp.limitDateLabel = _this.dateService.dateToString(resp.limitDate);
                });
                _this.refMeasurementList = __spread(results);
            });
        });
    };
    // Create
    ItemFormComponent.prototype.createRefMeasurement = function () {
        this.dataRefMeasurement = {
            componentId: 'ReferenceMeasurementPopupComponent',
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
            object: {},
            selectedRow: undefined
        };
        this.showRefMeasurementDialog = true;
    };
    // OPEN
    ItemFormComponent.prototype.openRefMeasurementDialog = function () {
        if (this.selectedRefMeasurement.length === 1) {
            this.dataRefMeasurement = {
                componentId: 'ReferenceMeasurementPopupComponent',
                selectedRow: undefined,
                object: __assign({}, this.selectedRefMeasurement[0]),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read
            };
            this.showRefMeasurementDialog = true;
        }
    };
    // ADD EVENT STATS
    ItemFormComponent.prototype.addNewRefMeasurement = function (newCenter) {
        // TODO find out how to have version number in column while adding something as there is no dropdown for it
        var searchInDisplayedList = this.refMeasurementList.find(function (value) {
            return value.versionNumber === newCenter.versionNumber &&
                value.counterCode === newCenter.counterCode &&
                value.ratingCode === newCenter.ratingCode;
        });
        if (!searchInDisplayedList) {
            if (!!newCenter) {
                var bireVersionMeasureDTO = {
                    chapter: this.bireItemDTO.chapter,
                    familyCode: this.bireItemDTO.familyCode,
                    marks: this.bireItemDTO.marks,
                    section: this.bireItemDTO.section,
                    sheet: this.bireItemDTO.sheet,
                    structureType: this.bireItemDTO.structureType,
                    subject: this.bireItemDTO.subject,
                    variantCode: this.bireItemDTO.variantCode,
                    versionNumber: newCenter.versionNumber,
                    counterCode: newCenter.counterCode,
                    referenceValue: newCenter.referenceValue,
                    limitDate: newCenter.limitDate,
                    ratingCode: newCenter.ratingCode,
                    birFamilyCode: this.bireItemDTO.familyCode,
                    birStructureType: this.bireItemDTO.structureType,
                    limitDateLabel: this.dateService.dateToString(newCenter.limitDate)
                };
                this.createBireVersionMeasureDTOList.push(bireVersionMeasureDTO);
                this.refMeasurementList = __spread(this.refMeasurementList, [bireVersionMeasureDTO]);
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyRefMeasurementExisting'));
        }
        this.showRefMeasurementDialog = false;
    };
    // dELETE REFERENCE   measurement
    ItemFormComponent.prototype.deleteSelectedRefMeasurement = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedRefMeasurements'),
            accept: function () {
                _this.selectedRefMeasurement.forEach(function (element) {
                    var searchInAddedList = _this.createBireVersionMeasureDTOList.find(function (value) {
                        return value.counterCode === element.counterCode &&
                            value.versionNumber === element.versionNumber &&
                            value.limitDate === element.limitDate &&
                            value.referenceValue === element.referenceValue;
                    });
                    if (searchInAddedList) {
                        var indexInAddedList = _this.createBireVersionMeasureDTOList.indexOf(searchInAddedList);
                        _this.createBireVersionMeasureDTOList.splice(indexInAddedList, 1);
                    }
                    else {
                        var bireVersionMeasureDTOId = {
                            chapter: _this.bireItemDTO.chapter,
                            familyCode: _this.bireItemDTO.familyCode,
                            marks: _this.bireItemDTO.marks,
                            section: _this.bireItemDTO.section,
                            sheet: _this.bireItemDTO.sheet,
                            structureType: _this.bireItemDTO.structureType,
                            subject: _this.bireItemDTO.subject,
                            variantCode: _this.bireItemDTO.variantCode,
                            counterCode: element.counterCode,
                            versionNumber: element.versionNumber,
                            ratingCode: element.ratingCode,
                            birFamilyCode: element.birFamilyCode,
                            birStructureType: element.birStructureType
                        };
                        _this.removeBireVersionMeasureDTOIdList.push(bireVersionMeasureDTOId);
                    }
                    var indexInDisplayedList = _this.refMeasurementList.indexOf(element);
                    _this.refMeasurementList.splice(indexInDisplayedList, 1);
                });
                _this.selectedRefMeasurement = [];
            }
        });
    };
    // EDIT
    ItemFormComponent.prototype.editSelectedRefMeasurement = function () {
        if (this.selectedRefMeasurement.length === 1) {
            this.currentRefIndex = this.refMeasurementList.indexOf(this.selectedRefMeasurement[0]);
            var cloneObj = __assign({}, this.selectedRefMeasurement[0]);
            this.dataRefMeasurement = {
                componentId: 'ReferenceMeasurementPopupComponent',
                selectedRow: undefined,
                object: cloneObj,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write
            };
        }
        this.showRefMeasurementDialog = true;
    };
    // On action update
    ItemFormComponent.prototype.updateRefMeasurement = function (udpatedStat) {
        var previousRatingObject = this.refMeasurementList[this.currentRefIndex];
        var isFound = false;
        var searchInAddedList = this.createBireVersionMeasureDTOList.find(function (value) {
            return value.counterCode === previousRatingObject.counterCode &&
                value.versionNumber === previousRatingObject.versionNumber &&
                value.ratingCode === previousRatingObject.ratingCode &&
                value.referenceValue === udpatedStat.referenceValue &&
                value.limitDate === udpatedStat.limitDate;
        });
        var searchInUpdatedList = this.updateBireVersionMeasureDTOList.find(function (value) {
            return value.counterCode === previousRatingObject.counterCode &&
                value.versionNumber === previousRatingObject.versionNumber &&
                value.ratingCode === previousRatingObject.ratingCode &&
                value.referenceValue === previousRatingObject.referenceValue &&
                value.limitDate === previousRatingObject.limitDate;
        });
        if (searchInAddedList) {
            var indexInAddedList = this.createBireVersionMeasureDTOList.indexOf(searchInAddedList);
            this.refMeasurementList.forEach(function (res) {
                if (res.counterCode === udpatedStat.counterCode &&
                    res.versionNumber === udpatedStat.versionNumber &&
                    res.ratingCode === udpatedStat.ratingCode &&
                    res.referenceValue === udpatedStat.referenceValue &&
                    res.limitDate === udpatedStat.limitDate) {
                    isFound = true;
                }
            });
            if (isFound) {
                this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyRefMeasurementExisting'));
            }
            else {
                this.createBireVersionMeasureDTOList[indexInAddedList] = udpatedStat;
            }
        }
        else if (searchInUpdatedList) {
            var indexInUpdatedList = this.updateBireVersionMeasureDTOList.indexOf(searchInUpdatedList);
            this.refMeasurementList.forEach(function (res) {
                if (res.counterCode === udpatedStat.counterCode &&
                    res.versionNumber === udpatedStat.versionNumber &&
                    res.ratingCode === udpatedStat.ratingCode &&
                    res.referenceValue === udpatedStat.referenceValue &&
                    res.limitDate === udpatedStat.limitDate) {
                    isFound = true;
                }
            });
            if (isFound) {
                this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyRefMeasurementExisting'));
            }
            else {
                this.updateBireVersionMeasureDTOList[indexInUpdatedList] = udpatedStat;
            }
        }
        else {
            this.refMeasurementList.forEach(function (res) {
                if (res.counterCode === udpatedStat.counterCode &&
                    res.versionNumber === udpatedStat.versionNumber &&
                    res.ratingCode === udpatedStat.ratingCode &&
                    res.referenceValue === udpatedStat.referenceValue &&
                    res.limitDate === udpatedStat.limitDate) {
                    isFound = true;
                }
            });
            if (isFound) {
                this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyModificationExisting'));
            }
            else {
                this.updateBireVersionMeasureDTOList.push(udpatedStat);
            }
        }
        this.selectedRefMeasurement = [];
        var clone = __assign({}, udpatedStat);
        clone.limitDateLabel = this.dateService.dateToString(clone.limitDate);
        this.refMeasurementList[this.currentRefIndex] = clone;
        this.showRefMeasurementDialog = false;
    };
    /**
     * ITEM FATHER/SON Dialog
     */
    // SON
    ItemFormComponent.prototype.createItemSon = function () {
        this.showItemSonDialog = true;
    };
    // Son item add event
    ItemFormComponent.prototype.addNewItemSon = function (ev) {
        var item = ev.chapter + "-" + ev.section + "-" + ev.subject + "-" + ev.sheet + "-" + ev.marks;
        var father = this.bireItemDTO.chapter + "-" + this.bireItemDTO.section + "-" + this.bireItemDTO.subject;
        father += "-" + this.bireItemDTO.sheet + "-" + this.bireItemDTO.marks;
        if (!this.isItemAddedSame(item, father)) {
            var searchInDisplayedList = this.itemSonList.find(function (value) { return value.item === item; });
            if (!searchInDisplayedList) {
                if (!!ev) {
                    var dto = {
                        designation: ev.name,
                        functionCode: ev.functionCode,
                        item: item,
                        itemFamily: ev.itemFamilyCode,
                        itemNumber: ev.itemNumber
                    };
                    this.itemSonList = __spread(this.itemSonList, [this.createStructureRow(dto)]);
                    var bireItemItemDTO = {
                        fatherChapter: this.bireItemDTO.chapter,
                        fatherFamilyCode: this.bireItemDTO.familyCode,
                        fatherMarks: this.bireItemDTO.marks,
                        fatherSection: this.bireItemDTO.section,
                        fatherSheet: this.bireItemDTO.sheet,
                        fatherStructureType: this.bireItemDTO.structureType,
                        fatherSubject: this.bireItemDTO.subject,
                        fatherVariantCode: this.bireItemDTO.variantCode,
                        sonChapter: ev.chapter,
                        sonFamilyCode: ev.familyCode,
                        sonMarks: ev.marks,
                        sonSection: ev.section,
                        sonSheet: ev.sheet,
                        sonStructureType: this.bireItemDTO.structureType,
                        sonSubject: ev.subject,
                        sonVariantCode: this.bireItemDTO.variantCode
                    };
                    this.saveStructureTab.push(bireItemItemDTO);
                }
            }
            else {
                this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadySonItemExisting'));
            }
            this.showItemSonDialog = false;
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorCannotInsertItemUnderItself'));
        }
    };
    // Son delete
    ItemFormComponent.prototype.deleteSelectedSonItem = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedSon'),
            accept: function () {
                _this.selectedItemSons.forEach(function (element) {
                    var searchInAddedList = _this.removeDataStructureTab.filter(function (value) {
                        var item = value.sonChapter + "-" + value.sonSection + "-" + value.sonSubject;
                        item += "-" + value.sonSheet + "-" + value.sonMarks;
                        if (item === element.item) {
                            return true;
                        }
                    })[0];
                    if (searchInAddedList) {
                        var indexInAddedList = _this.removeDataStructureTab.indexOf(searchInAddedList);
                        _this.removeDataStructureTab.splice(indexInAddedList, 1);
                    }
                    else {
                        var three = 3;
                        var four = 4;
                        var bireItemItemDTOId = {
                            fatherChapter: _this.bireItemDTO.chapter,
                            fatherFamilyCode: _this.bireItemDTO.familyCode,
                            fatherMarks: _this.bireItemDTO.marks,
                            fatherSection: _this.bireItemDTO.section,
                            fatherSheet: _this.bireItemDTO.sheet,
                            fatherStructureType: _this.bireItemDTO.structureType,
                            fatherSubject: _this.bireItemDTO.subject,
                            fatherVariantCode: _this.bireItemDTO.variantCode,
                            sonChapter: element.item.split('-')[0],
                            sonFamilyCode: _this.bireItemDTO.familyCode,
                            sonMarks: element.item.split('-')[four],
                            sonSection: element.item.split('-')[1],
                            sonSheet: element.item.split('-')[three],
                            sonStructureType: _this.bireItemDTO.structureType,
                            sonSubject: element.item.split('-')[2],
                            sonVariantCode: _this.bireItemDTO.variantCode
                        };
                        _this.removeDataStructureTab.push(bireItemItemDTOId);
                    }
                    var indexInDisplayedList = _this.itemSonList.indexOf(element);
                    _this.itemSonList.splice(indexInDisplayedList, 1);
                });
                _this.selectedItemSons = [];
            }
        });
    };
    // FATHER
    ItemFormComponent.prototype.createItemFather = function () {
        this.showItemFatherDialog = true;
    };
    // Father add item event
    ItemFormComponent.prototype.addNewItemFather = function (ev) {
        var item = ev.chapter + "-" + ev.section + "-" + ev.subject + "-" + ev.sheet + "-" + ev.marks;
        var son = this.bireItemDTO.chapter + "-" + this.bireItemDTO.section + "-" + this.bireItemDTO.subject;
        son += "-" + this.bireItemDTO.sheet + "-" + this.bireItemDTO.marks;
        if (!this.isSonSameAsFather(son, item)) {
            if (!this.isFatherItemAddedSame(item)) {
                var searchInDisplayedList = this.itemFatherList.find(function (value) { return value.item === item; });
                if (!searchInDisplayedList) {
                    if (!!ev) {
                        var dto = {
                            designation: ev.name,
                            functionCode: ev.functionCode,
                            item: item,
                            itemFamily: ev.itemFamilyCode,
                            itemNumber: ev.itemNumber
                        };
                        this.itemFatherList = __spread(this.itemFatherList, [this.createStructureRow(dto)]);
                        var bireItemItemDTO = {
                            fatherChapter: ev.chapter,
                            fatherFamilyCode: ev.familyCode,
                            fatherMarks: ev.marks,
                            fatherSection: ev.section,
                            fatherSheet: ev.sheet,
                            fatherStructureType: ev.structureType,
                            fatherSubject: ev.subject,
                            fatherVariantCode: this.bireItemDTO.variantCode,
                            sonChapter: this.bireItemDTO.chapter,
                            sonFamilyCode: this.bireItemDTO.familyCode,
                            sonMarks: this.bireItemDTO.marks,
                            sonSection: this.bireItemDTO.section,
                            sonSheet: this.bireItemDTO.sheet,
                            sonStructureType: this.bireItemDTO.structureType,
                            sonSubject: this.bireItemDTO.subject,
                            sonVariantCode: this.bireItemDTO.variantCode
                        };
                        this.saveStructureTab.push(bireItemItemDTO);
                    }
                }
                else {
                    this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyFatherItemExisting'));
                }
                this.showItemFatherDialog = false;
            }
            else {
                this.messageService.showErrorMessage(this.getTranslateKey('errorCannotInsertItemUpperItself'));
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorCannotInsertItemUnderItself'));
        }
    };
    /**
     * Checking if same son item is being added to son table
     */
    ItemFormComponent.prototype.isItemAddedSame = function (sonItem, fatherItem) {
        if (sonItem === fatherItem) {
            return true;
        }
        var isFound = this.itemFatherList.filter(function (father) {
            return sonItem === father.item;
        });
        return isFound.length > 0 ? true : false;
    };
    /**
     * Check for father / son item
     */
    ItemFormComponent.prototype.isSonSameAsFather = function (sonItem, fatherItem) {
        if (sonItem === fatherItem) {
            return true;
        }
        return false;
    };
    /**
     * Checking father item on add
     */
    ItemFormComponent.prototype.isFatherItemAddedSame = function (fatherItem) {
        var isFound = this.itemSonList.filter(function (son) {
            return fatherItem === son.item;
        });
        return isFound.length > 0 ? true : false;
    };
    // Father Delete
    ItemFormComponent.prototype.deleteSelectedFatherItem = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedFather'),
            accept: function () {
                _this.selectedItemFathers.forEach(function (element) {
                    var searchInAddedList = _this.removeDataStructureTab.filter(function (value) {
                        var item = value.fatherChapter + "-" + value.fatherSection + "-" + value.fatherSubject;
                        item += "-" + value.fatherSheet + "-" + value.fatherMarks;
                        if (item === element.item) {
                            return true;
                        }
                    })[0];
                    if (searchInAddedList) {
                        var indexInAddedList = _this.removeDataStructureTab.indexOf(searchInAddedList);
                        _this.removeDataStructureTab.splice(indexInAddedList, 1);
                    }
                    else {
                        var three = 3;
                        var four = 4;
                        var bireItemItemDTOId = {
                            fatherChapter: element.item.split('-')[0],
                            fatherFamilyCode: _this.bireItemDTO.familyCode,
                            fatherMarks: element.item.split('-')[four],
                            fatherSection: element.item.split('-')[1],
                            fatherSheet: element.item.split('-')[three],
                            fatherStructureType: _this.bireItemDTO.structureType,
                            fatherSubject: element.item.split('-')[2],
                            fatherVariantCode: _this.bireItemDTO.variantCode,
                            sonChapter: _this.bireItemDTO.chapter,
                            sonFamilyCode: _this.bireItemDTO.familyCode,
                            sonMarks: _this.bireItemDTO.marks,
                            sonSection: _this.bireItemDTO.section,
                            sonSheet: _this.bireItemDTO.sheet,
                            sonStructureType: _this.bireItemDTO.structureType,
                            sonSubject: _this.bireItemDTO.subject,
                            sonVariantCode: _this.bireItemDTO.variantCode
                        };
                        _this.removeDataStructureTab.push(bireItemItemDTOId);
                    }
                    var indexInDisplayedList = _this.itemFatherList.indexOf(element);
                    _this.itemFatherList.splice(indexInDisplayedList, 1);
                });
                _this.selectedItemFathers = [];
            }
        });
    };
    /**
     * Part Number Operations
     */
    ItemFormComponent.prototype.openPartNumberVersionDialog = function () {
        if (this.selectedPartNumber.length === 1) {
            this.dataItemVersion = {
                componentId: 'ItemFatherPopupComponent',
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read,
                object: this.selectedPartNumber[0]._obj,
                selectedRow: undefined
            };
            this.openPartNumberVersionDialogFlag = true;
        }
    };
    // Add Version dialog
    ItemFormComponent.prototype.createPartNumberVersion = function () {
        this.dataItemVersion = {
            componentId: 'ItemFatherPopupComponent',
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
            object: {},
            selectedRow: undefined
        };
        this.openPartNumberVersionDialogFlag = true;
    };
    // Add Version
    ItemFormComponent.prototype.addNewItemVersion = function (ev) {
        var searchInDisplayedList = this.partNumberVersionList.find(function (value) { return value.data === ev.versionNumber; });
        if (!searchInDisplayedList) {
            if (!!ev) {
                // const dto: GetPartNumberStructureOutputDTO = {
                //   alternatePn: [],
                //   versionNumber: ev.versionNumber
                // };
                var bireItemVersionDTO = {
                    chapter: this.bireItemDTO.chapter,
                    familyCode: this.bireItemDTO.familyCode,
                    marks: this.bireItemDTO.marks,
                    section: this.bireItemDTO.section,
                    sheet: this.bireItemDTO.sheet,
                    structureType: this.bireItemDTO.structureType,
                    subject: this.bireItemDTO.subject,
                    variantCode: this.bireItemDTO.variantCode,
                    versionNumber: ev.versionNumber
                };
                this.bireItemVersionDTOAddedList.push(bireItemVersionDTO);
                // const partNumberRow: PartNumberRow = {
                //   alternatePn: '',
                //   pn: '',
                //   isn: '',
                //   ipcQuantity: '',
                //   mplQuantity: '',
                //   _obj: dto
                // };
                this.partNumberTableList = __spread(this.partNumberTableList);
                this.partNumberVersionList.push({
                    label: "Version " + ev.versionNumber,
                    data: ev.versionNumber,
                    parent: undefined,
                    expanded: true
                });
                // const version = (this.partNumberVersionSelected as TreeNode).data as string;
                // this.partNumberMap.set(version, [...this.partNumberTableList]);
                // this.updateRowGroupMetaData();
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyVersionExisting'));
        }
        this.openPartNumberVersionDialogFlag = false;
    };
    // Delete Version
    ItemFormComponent.prototype.deleteVersion = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedVersions'),
            accept: function () {
                var version = _this.partNumberVersionSelected.data;
                _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(_this.partNumberMap.get(version)).forEach(function (elt) {
                    var bireItemVersionDTOId = {
                        chapter: _this.bireItemDTO.chapter,
                        familyCode: _this.bireItemDTO.familyCode,
                        marks: _this.bireItemDTO.marks,
                        section: _this.bireItemDTO.section,
                        sheet: _this.bireItemDTO.sheet,
                        structureType: _this.bireItemDTO.structureType,
                        subject: _this.bireItemDTO.subject,
                        variantCode: _this.bireItemDTO.variantCode,
                        versionNumber: elt._obj.versionNumber
                    };
                    _this.bireItemVersionDTODeletedList.push(bireItemVersionDTOId);
                    _this.partNumberTableList = _this.partNumberTableList.filter(function (res) {
                        return res._obj.versionNumber !== elt._obj.versionNumber;
                    });
                    _this.partNumberMap.set(version, __spread(_this.partNumberTableList));
                });
                _this.partNumberVersionList = _this.partNumberVersionList.filter(function (elt) { return elt.data !== version; });
                _this.partNumberVersionSelected = undefined;
            }
        });
    };
    /**
     * Delete Part Number
     */
    ItemFormComponent.prototype.deletePN = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedPNs'),
            accept: function () {
                _this.selectedPartNumber.forEach(function (element) {
                    var bireVersionPnDTOId = {
                        chapter: _this.bireItemDTO.chapter,
                        familyCode: _this.bireItemDTO.familyCode,
                        isnAta: element.isn,
                        marks: _this.bireItemDTO.marks,
                        pnCode: element.pn,
                        section: _this.bireItemDTO.section,
                        sheet: _this.bireItemDTO.sheet,
                        structureType: _this.bireItemDTO.structureType,
                        subject: _this.bireItemDTO.subject,
                        variantCode: _this.bireItemDTO.variantCode,
                        versionNumber: element._obj.versionNumber
                    };
                    _this.bireVersionPnDTOIdDeletedList.push(bireVersionPnDTOId);
                    _this.partNumberTableList.forEach(function (res, index) {
                        if (res.pn === element.pn) {
                            _this.partNumberTableList.splice(index, 1);
                        }
                    });
                });
                // this.updateRowGroupMetaData();
                _this.selectedPartNumber = [];
            }
        });
    };
    /**
     * TASK Operations
     */
    ItemFormComponent.prototype.openItemTaskDialog = function () {
        if (this.selectedTasks.length === 1) {
            var cloneDTO_3 = __assign({}, this.selectedTasks[0]);
            cloneDTO_3.type = this.taskItemList.filter(function (res) {
                return res.label === cloneDTO_3.type;
            })[0].value;
            this.dataItemTask = {
                componentId: 'TaskPopupComponent',
                selectedRow: undefined,
                object: cloneDTO_3,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read
            };
            this.showItemTaskDialog = true;
        }
    };
    // Add Task dialog
    ItemFormComponent.prototype.createItemTask = function () {
        this.dataItemTask = {
            componentId: 'TaskPopupComponent',
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
            object: {},
            selectedRow: undefined
        };
        this.showItemTaskDialog = true;
    };
    // Add Item Task
    ItemFormComponent.prototype.addNewItemTask = function (ev) {
        var label = this.taskItemList.filter(function (res) {
            return res.value === ev.type;
        })[0].label;
        var searchInDisplayedList = this.tasksList.find(function (value) {
            return value.code === ev.code &&
                value.designation === ev.designation &&
                value.itemVersion === ev.itemVersion &&
                value.type === label &&
                value.version === ev.version;
        });
        if (!searchInDisplayedList) {
            if (!!ev) {
                var bireTaskItemDTO = {
                    chapter: this.bireItemDTO.chapter,
                    familyCode: this.bireItemDTO.familyCode,
                    marks: this.bireItemDTO.marks,
                    section: this.bireItemDTO.section,
                    sheet: this.bireItemDTO.sheet,
                    structureType: this.bireItemDTO.structureType,
                    subject: this.bireItemDTO.subject,
                    variantCode: this.bireItemDTO.variantCode,
                    // item: ev.item,
                    taskCode: ev.code,
                    taskItemTypeCode: ev.type,
                    taskVersion: ev.version,
                    versionNumber: ev.itemVersion
                };
                this.bireTaskItemAddedList.push(bireTaskItemDTO);
                var cloneDTO_4 = __assign({}, ev);
                cloneDTO_4.type = this.taskItemList.filter(function (res) {
                    return res.value === cloneDTO_4.type;
                })[0].label;
                this.tasksList = __spread(this.tasksList, [cloneDTO_4]);
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyTaskExisting'));
        }
        this.showItemTaskDialog = false;
    };
    // Delete Task
    ItemFormComponent.prototype.deleteSelectedItemTasks = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedTasks'),
            accept: function () {
                _this.selectedTasks.forEach(function (element) {
                    var searchInAddedList = _this.bireTaskItemAddedList.find(function (value) {
                        return value.taskCode === element.code &&
                            value.taskVersion === element.version &&
                            value.versionNumber === element.itemVersion &&
                            value.taskItemTypeCode === element.type;
                    });
                    if (searchInAddedList) {
                        var indexInAddedList = _this.bireItemVersionDTOAddedList.indexOf(searchInAddedList);
                        _this.bireItemVersionDTOAddedList.splice(indexInAddedList, 1);
                    }
                    else {
                        var bireTaskItemDTOId = {
                            chapter: _this.bireItemDTO.chapter,
                            familyCode: _this.bireItemDTO.familyCode,
                            marks: _this.bireItemDTO.marks,
                            section: _this.bireItemDTO.section,
                            sheet: _this.bireItemDTO.sheet,
                            structureType: _this.bireItemDTO.structureType,
                            subject: _this.bireItemDTO.subject,
                            variantCode: _this.bireItemDTO.variantCode,
                            taskCode: element.code,
                            taskItemTypeCode: element.type,
                            taskVersion: element.version,
                            versionNumber: element.itemVersion
                        };
                        bireTaskItemDTOId.taskItemTypeCode = _this.taskItemList.filter(function (res) {
                            return res.label === element.type;
                        })[0].value;
                        _this.bireTaskItemDeletedList.push(bireTaskItemDTOId);
                    }
                    var indexInDisplayedList = _this.tasksList.indexOf(element);
                    _this.tasksList.splice(indexInDisplayedList, 1);
                });
                _this.selectedTasks = [];
            }
        });
    };
    /**
     * Damage Operations
     */
    ItemFormComponent.prototype.openDamageDialog = function () {
        if (this.selectedDamages.length === 1) {
            this.dataDamage = {
                componentId: 'DamagePopupComponent',
                selectedRow: undefined,
                object: __assign({}, this.selectedDamages[0]),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read
            };
            this.showDamageDialog = true;
        }
    };
    // Add Damage dialog
    ItemFormComponent.prototype.createDamage = function () {
        this.dataItemTask = {
            componentId: 'DamagePopupComponent',
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
            object: {},
            selectedRow: undefined
        };
        this.showDamageDialog = true;
    };
    // Add Item Damage
    ItemFormComponent.prototype.addNewDamage = function (ev) {
        var searchInDisplayedList = this.damagesList.find(function (value) { return value.damageCode === ev.damageCode && ev.versionNumber === value.versionNumber; });
        if (!searchInDisplayedList) {
            if (!!ev) {
                var bireDamageItemDTO = {
                    chapter: this.bireItemDTO.chapter,
                    familyCode: this.bireItemDTO.familyCode,
                    marks: this.bireItemDTO.marks,
                    section: this.bireItemDTO.section,
                    sheet: this.bireItemDTO.sheet,
                    structureType: this.bireItemDTO.structureType,
                    subject: this.bireItemDTO.subject,
                    variantCode: this.bireItemDTO.variantCode,
                    damageCode: ev.damageCode,
                    versionNumber: ev.versionNumber
                };
                this.bireDamageItemDTOAddedList.push(bireDamageItemDTO);
                var damageTableDTO = {
                    chapter: this.bireItemDTO.chapter,
                    familyCode: this.bireItemDTO.familyCode,
                    versionNumber: ev.versionNumber,
                    marks: this.bireItemDTO.marks,
                    section: this.bireItemDTO.section,
                    sheet: this.bireItemDTO.sheet,
                    structureType: this.bireItemDTO.structureType,
                    subject: this.bireItemDTO.subject,
                    variantCode: this.bireItemDTO.variantCode,
                    damageDescription: ev.damageDescription,
                    damageCode: ev.damageCode,
                    unitCode: ev.unitCode
                };
                this.damagesList.push(damageTableDTO);
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyDamageExisting'));
        }
        this.showDamageDialog = false;
    };
    // Delete Damage
    ItemFormComponent.prototype.deleteSelectedDamages = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedDamages'),
            accept: function () {
                _this.selectedDamages.forEach(function (element) {
                    var searchInAddedList = _this.bireDamageItemDTOAddedList.find(function (value) { return value.damageCode === element.damageCode; });
                    if (searchInAddedList) {
                        var indexInAddedList = _this.bireDamageItemDTOAddedList.indexOf(searchInAddedList);
                        _this.bireDamageItemDTOAddedList.splice(indexInAddedList, 1);
                    }
                    else {
                        var bireDamageItemDTOId = {
                            chapter: _this.bireItemDTO.chapter,
                            familyCode: _this.bireItemDTO.familyCode,
                            marks: _this.bireItemDTO.marks,
                            section: _this.bireItemDTO.section,
                            sheet: _this.bireItemDTO.sheet,
                            structureType: _this.bireItemDTO.structureType,
                            subject: _this.bireItemDTO.subject,
                            variantCode: _this.bireItemDTO.variantCode,
                            damageCode: element.damageCode,
                            versionNumber: element.versionNumber
                        };
                        _this.bireDamageItemDTOIdRemoveList.push(bireDamageItemDTOId);
                    }
                    var indexInDisplayedList = _this.damagesList.indexOf(element);
                    _this.damagesList.splice(indexInDisplayedList, 1);
                });
                _this.selectedDamages = [];
            }
        });
    };
    /**
     * Localisation Operations
     */
    ItemFormComponent.prototype.openLocalisationDialog = function () {
        if (this.selectedLocalisation.length === 1) {
            this.dataLocalisation = {
                componentId: 'LocalisationPopupComponent',
                selectedRow: undefined,
                object: __assign({}, this.selectedLocalisation[0]),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read
            };
            this.showLocalisationDialog = true;
        }
    };
    // Add Localisation dialog
    ItemFormComponent.prototype.createLocalisation = function () {
        this.dataItemTask = {
            componentId: 'LocalisationPopupComponent',
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
            object: {},
            selectedRow: undefined
        };
        this.showLocalisationDialog = true;
    };
    // Add Item Localisation
    ItemFormComponent.prototype.addNewLocalisation = function (ev) {
        var searchInDisplayedList = this.localisationList.find(function (value) { return value.localisationCode === ev.localisationCode && value.versionNumber === ev.versionNumber; });
        if (!searchInDisplayedList) {
            if (!!ev) {
                var bireLocalisationItemDTO = {
                    chapter: this.bireItemDTO.chapter,
                    familyCode: this.bireItemDTO.familyCode,
                    marks: this.bireItemDTO.marks,
                    section: this.bireItemDTO.section,
                    sheet: this.bireItemDTO.sheet,
                    structureType: this.bireItemDTO.structureType,
                    subject: this.bireItemDTO.subject,
                    variantCode: this.bireItemDTO.variantCode,
                    localisationCode: ev.localisationCode,
                    versionNumber: ev.versionNumber
                };
                this.bireLocalisationItemDTOAddedList.push(bireLocalisationItemDTO);
                this.localisationList.push(ev);
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyLocalisationExisting'));
        }
        this.showDamageDialog = false;
    };
    // Delete Localisation
    ItemFormComponent.prototype.deleteSelectedLocalisation = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedLocalisations'),
            accept: function () {
                _this.selectedLocalisation.forEach(function (element) {
                    var searchInAddedList = _this.bireLocalisationItemDTOAddedList.find(function (value) { return value.localisationCode === element.localisationCode; });
                    if (searchInAddedList) {
                        var indexInAddedList = _this.bireLocalisationItemDTOAddedList.indexOf(searchInAddedList);
                        _this.bireLocalisationItemDTOAddedList.splice(indexInAddedList, 1);
                    }
                    else {
                        var bireLocalisationItemDTOId = {
                            chapter: _this.bireItemDTO.chapter,
                            familyCode: _this.bireItemDTO.familyCode,
                            marks: _this.bireItemDTO.marks,
                            section: _this.bireItemDTO.section,
                            sheet: _this.bireItemDTO.sheet,
                            structureType: _this.bireItemDTO.structureType,
                            subject: _this.bireItemDTO.subject,
                            variantCode: _this.bireItemDTO.variantCode,
                            localisationCode: element.localisationCode,
                            versionNumber: element.versionNumber
                        };
                        _this.bireLocalisationItemDTOIdRemoveList.push(bireLocalisationItemDTOId);
                    }
                    var indexInDisplayedList = _this.localisationList.indexOf(element);
                    _this.localisationList.splice(indexInDisplayedList, 1);
                });
                _this.selectedDamages = [];
            }
        });
    };
    /**
     * Damage Localisation Task Table Operations
     */
    ItemFormComponent.prototype.openDamLocTaskDialog = function () {
        if (this.selectedDamLocTask.length === 1) {
            this.dataBireDamLoc = {
                componentId: 'LocalisationPopupComponent',
                selectedRow: undefined,
                object: __assign({}, this.selectedDamLocTask[0]),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read
            };
            this.showBireDamLocalisationDialog = true;
        }
    };
    // Add Dam/Localisation/Task dialog
    ItemFormComponent.prototype.createDamLocTask = function () {
        this.dataBireDamLoc = {
            componentId: 'LocalisationPopupComponent',
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
            object: {},
            selectedRow: undefined
        };
        this.showBireDamLocalisationDialog = true;
    };
    // Add Item Dam/Localisation/Task
    ItemFormComponent.prototype.addNewDamLocTask = function (ev) {
        var searchInDisplayedList = this.damLocTaskList.find(function (value) {
            return value._obj.localisationCode === ev.localisationCode &&
                value._obj.damageCode === ev.damageCode &&
                value._obj.taskCode === ev.taskCode &&
                value._obj.taskVersion === ev.taskVersion &&
                value._obj.versionNumber === ev.versionNumber;
        });
        if (!searchInDisplayedList) {
            if (!!ev) {
                var bireDamLocTaskDTO = {
                    chapter: this.bireItemDTO.chapter,
                    familyCode: this.bireItemDTO.familyCode,
                    marks: this.bireItemDTO.marks,
                    section: this.bireItemDTO.section,
                    sheet: this.bireItemDTO.sheet,
                    structureType: this.bireItemDTO.structureType,
                    subject: this.bireItemDTO.subject,
                    variantCode: this.bireItemDTO.variantCode,
                    localisationCode: ev.localisationCode,
                    versionNumber: ev.versionNumber,
                    damageCode: ev.damageCode,
                    taskCode: ev.taskCode,
                    taskVersion: ev.taskVersion
                };
                this.createBireDamLocTaskDTOList.push(bireDamLocTaskDTO);
                ev.damageDescriptionTxt = ev.damageDescription;
                ev.localisationDescriptionTxt = ev.localisationDescription;
                ev.localisationCodeTxt = ev.localisationCode;
                ev.damageCodeTxt = ev.damageCode;
                var damage = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(ev.damageCode);
                damage += _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(ev.damageDescription) ? '' : " - " + ev.damageDescription;
                var localisation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(ev.localisationCode);
                localisation += _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(ev.localisationDescription) ? '' : " - " + ev.localisationDescription;
                var damageLocalisationTaskRow = {
                    damage: damage,
                    localisation: localisation,
                    versionNumber: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(ev.versionNumber),
                    taskCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(ev.taskCode),
                    taskVersion: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(ev.taskVersion),
                    taskDesignation: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(ev.taskDesignation),
                    _obj: ev
                };
                this.damLocTaskList = __spread(this.damLocTaskList, [damageLocalisationTaskRow]);
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyDamageLocTaskExisting'));
        }
        this.showBireDamLocalisationDialog = false;
    };
    // Delete Dam/Localisation/Task
    ItemFormComponent.prototype.deleteSelectedDamLocTask = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedDamLocTasks'),
            accept: function () {
                _this.selectedDamLocTask.forEach(function (element) {
                    var searchInAddedList = _this.createBireDamLocTaskDTOList.find(function (value) {
                        return value.localisationCode === element._obj.localisationCode &&
                            value.versionNumber === element._obj.versionNumber &&
                            value.taskCode === element._obj.taskCode &&
                            value.damageCode === element._obj.damageCode &&
                            value.taskVersion === element._obj.taskVersion;
                    });
                    if (searchInAddedList) {
                        var indexInAddedList = _this.createBireDamLocTaskDTOList.indexOf(searchInAddedList);
                        _this.createBireDamLocTaskDTOList.splice(indexInAddedList, 1);
                    }
                    else {
                        var bireDamLocTaskDTOId = {
                            chapter: _this.bireItemDTO.chapter,
                            familyCode: _this.bireItemDTO.familyCode,
                            marks: _this.bireItemDTO.marks,
                            section: _this.bireItemDTO.section,
                            sheet: _this.bireItemDTO.sheet,
                            structureType: _this.bireItemDTO.structureType,
                            subject: _this.bireItemDTO.subject,
                            variantCode: _this.bireItemDTO.variantCode,
                            localisationCode: element._obj.localisationCode,
                            versionNumber: element._obj.versionNumber,
                            damageCode: element._obj.damageCode,
                            taskCode: element._obj.taskCode,
                            taskVersion: element._obj.taskVersion
                        };
                        _this.removeBireDamLocTaskDTOIdList.push(bireDamLocTaskDTOId);
                    }
                    var indexInDisplayedList = _this.damLocTaskList.indexOf(element);
                    _this.damLocTaskList.splice(indexInDisplayedList, 1);
                });
                _this.selectedDamLocTask = [];
            }
        });
    };
    /**
     * Update status update popup
     */
    ItemFormComponent.prototype.openStatusUpdatesPopup = function () {
        this.showStatusUpdatesPopup = true;
        var objId = this.returnBireItemDTOId();
        var columns = [
            { field: 'time', alignment: 'left', width: '150px' },
            { field: 'author', width: '200px', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_9__["TableColumnFilterMode"].Input, alignment: 'left' },
            { field: 'action', width: '150px', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_9__["TableColumnFilterMode"].Input, alignment: 'left' },
            { field: 'objectStatus', alignment: 'left', width: '200px' },
            { field: 'designation', alignment: 'left', width: '200px' },
            { field: 'itemFamilyCode', alignment: 'left', width: '6.25rem' },
            { field: 'remarks', alignment: 'left', width: '6.25rem' },
            { field: 'itemType', alignment: 'left', width: '6.25rem' },
            { field: 'itemNumber', alignment: 'left', width: '6.25rem' },
            { field: 'functionCode', alignment: 'left', width: '6.25rem' },
            { field: 'itemLevel', alignment: 'left', width: '6.25rem' },
            { field: 'attachingPart', alignment: 'left', width: '6.25rem' },
            { field: 'replaceableUnitType', alignment: 'left', width: '6.25rem' },
            { field: 'fLocType', alignment: 'left', width: '6.25rem' },
            { field: 'lifeRestrictionType', alignment: 'left', width: '6.25rem' },
            { field: 'configurableItem', alignment: 'left', width: '6.25rem' },
            { field: 'serializedPart', alignment: 'left', width: '6.25rem' },
            { field: 'visibleOnInspection', alignment: 'left', width: '6.25rem' },
            { field: 'disassemblyGroup', alignment: 'left', width: '6.25rem' },
            { field: 'isItemHeadOfGroup', alignment: 'left', width: '6.25rem' },
            { field: 'fixedElementChapter', alignment: 'left', width: '6.25rem' },
            { field: 'fixedElementMark', alignment: 'left', width: '6.25rem' },
            { field: 'fixedElementSection', alignment: 'left', width: '6.25rem' },
            { field: 'fixedElementSheet', alignment: 'left', width: '6.25rem' },
            { field: 'fixedElementSubject', alignment: 'left', width: '6.25rem' },
            { field: 'referToChapter', alignment: 'left', width: '6.25rem' },
            { field: 'referToMark', alignment: 'left', width: '6.25rem' },
            { field: 'referToSection', alignment: 'left', width: '6.25rem' },
            { field: 'referToSheet', alignment: 'left', width: '6.25rem' },
            { field: 'referToSubject', alignment: 'left', width: '6.25rem' },
            { field: 'referForNHAMark', alignment: 'left', width: '6.25rem' },
            { field: 'referForNHASection', alignment: 'left', width: '6.25rem' },
            { field: 'referForNHASheet', alignment: 'left', width: '6.25rem' },
            { field: 'referForNHASubject', alignment: 'left', width: '6.25rem' }
        ];
        if (!!objId) {
            this.tableStatusUpdatesData = {
                componentId: 'ItemFormComponent.historicPopup',
                tableCols: columns,
                tableRows: this.itemFormService.findHistoricOfObjectByPk(objId),
                dataKey: undefined,
                selectionMode: _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_10__["TableSelectionMode"].Multiple,
                globalFilter: false
            };
        }
        else {
            _super.prototype.throwUnboundLocalError.call(this, 'openStatusUpdatesPopup', 'this.bireItemDTO');
        }
    };
    /**
     * SAVE HANDLING
     */
    // Validation
    ItemFormComponent.prototype.validateScreen = function () {
        if (!!this.bireItemDTO.familyCode &&
            !!this.bireItemDTO.variantCode &&
            !!this.bireItemDTO.chapter &&
            !!this.bireItemDTO.section &&
            !!this.bireItemDTO.subject &&
            !!this.bireItemDTO.sheet &&
            !!this.bireItemDTO.marks &&
            !!this.selectedFamilyVariant) {
            return true;
        }
        return false;
    };
    ItemFormComponent.prototype.setFamilyVariantCode = function () {
        var _this = this;
        this.bireVariantVersionList.forEach(function (res) {
            if (_this.selectedFamilyVariant === res.labelValue.value) {
                _this.bireItemDTO.familyCode = res.bireVariantVersionDTO.familyCode;
                _this.bireItemDTO.variantCode = res.bireVariantVersionDTO.variantCode;
                _this.bireItemDTO.structureType = res.bireVariantVersionDTO.structureType;
            }
        });
    };
    /**
     * Setting MEL and Illustrated Value
     */
    ItemFormComponent.prototype.setisMelIllustratedValuesToAttributeArray = function () {
        var attribute1 = {
            familyCode: this.bireItemDTO.familyCode,
            variantCode: this.bireItemDTO.variantCode,
            structureType: this.bireItemDTO.structureType,
            chapter: this.bireItemDTO.chapter,
            marks: this.bireItemDTO.marks,
            section: this.bireItemDTO.section,
            sheet: this.bireItemDTO.sheet,
            subject: this.bireItemDTO.subject,
            attributeId: '6',
            attributeValue: this.isMelSelected.toString()
        };
        var attribute2 = {
            familyCode: this.bireItemDTO.familyCode,
            variantCode: this.bireItemDTO.variantCode,
            structureType: this.bireItemDTO.structureType,
            chapter: this.bireItemDTO.chapter,
            marks: this.bireItemDTO.marks,
            section: this.bireItemDTO.section,
            sheet: this.bireItemDTO.sheet,
            subject: this.bireItemDTO.subject,
            attributeId: '1',
            attributeValue: this.isillustratedSelected.toString()
        };
        var attribute3 = {
            familyCode: this.bireItemDTO.familyCode,
            variantCode: this.bireItemDTO.variantCode,
            structureType: this.bireItemDTO.structureType,
            chapter: this.bireItemDTO.chapter,
            marks: this.bireItemDTO.marks,
            section: this.bireItemDTO.section,
            sheet: this.bireItemDTO.sheet,
            subject: this.bireItemDTO.subject,
            attributeId: '11',
            attributeValue: this.note1
        };
        var attribute4 = {
            familyCode: this.bireItemDTO.familyCode,
            variantCode: this.bireItemDTO.variantCode,
            structureType: this.bireItemDTO.structureType,
            chapter: this.bireItemDTO.chapter,
            marks: this.bireItemDTO.marks,
            section: this.bireItemDTO.section,
            sheet: this.bireItemDTO.sheet,
            subject: this.bireItemDTO.subject,
            attributeId: '12',
            attributeValue: this.note2
        };
        var attribute5 = {
            familyCode: this.bireItemDTO.familyCode,
            variantCode: this.bireItemDTO.variantCode,
            structureType: this.bireItemDTO.structureType,
            chapter: this.bireItemDTO.chapter,
            marks: this.bireItemDTO.marks,
            section: this.bireItemDTO.section,
            sheet: this.bireItemDTO.sheet,
            subject: this.bireItemDTO.subject,
            attributeId: '13',
            attributeValue: this.note3
        };
        var attribute6 = {
            familyCode: this.bireItemDTO.familyCode,
            variantCode: this.bireItemDTO.variantCode,
            structureType: this.bireItemDTO.structureType,
            chapter: this.bireItemDTO.chapter,
            marks: this.bireItemDTO.marks,
            section: this.bireItemDTO.section,
            sheet: this.bireItemDTO.sheet,
            subject: this.bireItemDTO.subject,
            attributeId: '2',
            attributeValue: this.docURL
        };
        this.bireItemAttributeDTO.push(attribute1);
        this.bireItemAttributeDTO.push(attribute2);
        this.bireItemAttributeDTO.push(attribute3);
        this.bireItemAttributeDTO.push(attribute4);
        this.bireItemAttributeDTO.push(attribute5);
        this.bireItemAttributeDTO.push(attribute6);
    };
    // Save
    ItemFormComponent.prototype.saveItem = function () {
        var _this = this;
        if (this.isCreateOpenMode) {
            this.setFamilyVariantCode();
        }
        if (this.validateScreen()) {
            if (this.isIllustrationTabValid()) {
                // Attributes
                this.bireItemAttributeDTO = this.dynamicAttributesService.toBireItemAttribute(this.bireItemDTO.familyCode, this.bireItemDTO.variantCode, this.bireItemDTO.structureType, this.bireItemDTO.chapter, this.bireItemDTO.marks, this.bireItemDTO.section, this.bireItemDTO.sheet, this.bireItemDTO.subject, this.dynamicAttributesForItem);
                this.setisMelIllustratedValuesToAttributeArray();
                var saveItemDTO = {
                    bireItemDTO: this.bireItemDTO,
                    isCreate: this.isCreateOpenMode,
                    bireDamageItemDTOAddedList: this.bireDamageItemDTOAddedList,
                    bireDamageItemDTOIdRemoveList: this.bireDamageItemDTOIdRemoveList,
                    bireItemAttributeDTOList: this.bireItemAttributeDTO,
                    bireItemMaintenanceDTOAddedList: this.bireItemMaintenanceDTOAddedList,
                    bireItemMaintenanceDTODeletedList: this.bireItemMaintenanceDTODeletedList,
                    bireItemMaintenanceDTOUpdatedList: this.bireItemMaintenanceDTOUpdatedList,
                    bireItemSiteDTOAddedList: this.bireItemSiteDTOAddedList,
                    bireItemSiteDTODeletedList: this.bireItemSiteDTODeletedList,
                    bireItemVersionDTODeletedList: this.bireItemVersionDTODeletedList,
                    bireItemVersionDTOAddedList: this.bireItemVersionDTOAddedList,
                    bireLocalisationItemDTOAddedList: this.bireLocalisationItemDTOAddedList,
                    bireLocalisationItemDTOIdRemoveList: this.bireLocalisationItemDTOIdRemoveList,
                    // bireLocalisationItemDTOUpdatedList: this.bireLocalisationItemDTOUpdatedList,
                    bireReturnItemDTOAddedList: this.bireReturnItemDTOAddedList,
                    bireReturnItemDTODeletedList: this.bireReturnItemDTODeletedList,
                    bireTaskItemAddedList: this.bireTaskItemAddedList,
                    bireTaskItemDeletedList: this.bireTaskItemDeletedList,
                    bireTilItemDTOAddedList: this.bireTilItemDTOAddedList,
                    bireTilItemDTODeletedList: this.bireTilItemDTODeletedList,
                    createBireDamLocTaskDTOList: this.createBireDamLocTaskDTOList,
                    removeBireDamLocTaskDTOIdList: this.removeBireDamLocTaskDTOIdList,
                    createBireVersionMeasureDTOList: this.createBireVersionMeasureDTOList,
                    removeDataStructureTab: this.removeDataStructureTab,
                    saveStructureTab: this.saveStructureTab,
                    updateBireVersionMeasureDTOList: this.updateBireVersionMeasureDTOList,
                    removeBireVersionMeasureDTOIdList: this.removeBireVersionMeasureDTOIdList,
                    bireVersionPnDTOIdDeletedList: this.bireVersionPnDTOIdDeletedList,
                    bireItemSiteDTOUpdatedList: this.bireItemSiteDTOUpdatedList,
                    documentsAdded: this.documentsAdded,
                    documentsRemoved: this.documentsRemoved,
                    documentsUpdated: this.documentsUpdated,
                    createBirePackBaseOptionList: this.createBirePackBaseOptionList,
                    updateBirePackBaseOptionList: this.updateBirePackBaseOptionList,
                    removeBirePackBaseOptionList: this.removeBirePackBaseOptionList,
                    createBirePackEvolutionDTOList: [],
                    updateBirePackEvolutionDTOList: this.updateBirePackEvolutionDTOList,
                    packBaseOptionCode: []
                };
                if (this.currentPackNumber && this.currentPackNumber.packBaseOptionCode) {
                    saveItemDTO.packBaseOptionCode = [this.currentPackNumber.packBaseOptionCode];
                }
                if (this.evolutionPacksTableList.length > 0) {
                    this.createBirePackEvolutionDTOList = [];
                    this.evolutionPacksTableList.forEach(function (obj) {
                        var element = _this.bireItemDTO;
                        element.evolutionNumber = obj.evolutionNumber;
                        element.evolutionRevisionNumber = obj.revisionNumber;
                        element.packBaseOptionCode = _this.currentPackNumber && _this.currentPackNumber.packBaseOptionCode;
                        element.packEvolutionDescription = obj.description;
                        element.vintageDate = obj._obj && obj._obj.vintageDate;
                        _this.createBirePackEvolutionDTOList.push(__assign({}, element));
                    });
                    saveItemDTO.createBirePackEvolutionDTOList = this.createBirePackEvolutionDTOList;
                }
                this.showSaveSpinner = true;
                this.itemFormService.saveItem(saveItemDTO).subscribe(function (result) {
                    if (result === 'SUCCESS') {
                        _this.componentData.objectId = _this.serializationService.serialize(_this.bireItemDTO);
                        _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read);
                        var context = _this.bireItemDTO.chapter + "-" + _this.bireItemDTO.section + "-" + _this.bireItemDTO.subject;
                        context += "-" + _this.bireItemDTO.sheet + "-" + _this.bireItemDTO.marks;
                        _this.displayComponentContext(context, _this.isCreateOpenMode);
                        _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnSaveItem'));
                        _this.documentsAdded = [];
                        _this.documentsRemoved = [];
                        _this.documentsUpdated = [];
                        _this.createBirePackBaseOptionList = [];
                        _this.updateBirePackBaseOptionList = [];
                        _this.removeBirePackBaseOptionList = [];
                        _this.createBirePackEvolutionDTOList = [];
                        _this.updateBirePackEvolutionDTOList = [];
                        _this.createBireVersionMeasureDTOList = [];
                        _this.updateBireVersionMeasureDTOList = [];
                        _this.removeBireVersionMeasureDTOIdList = [];
                        _this.packBaseOptionCode = [];
                        _this.packNumberData();
                    }
                    else {
                        // this.messageService.showErrorMessage(result.split('=')[1]);
                        _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSaveItem'));
                    }
                    _this.showSaveSpinner = false;
                }, function (error) {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSaveItem'));
                    _this.showSaveSpinner = false;
                });
            }
        }
        else {
            this.messageService.showErrorMessage('global.missingFields');
        }
    };
    ItemFormComponent.prototype.isIllustrationTabValid = function () {
        if (!!this.docURL) {
            if (_shared_utils_url_utils__WEBPACK_IMPORTED_MODULE_24__["UrlUtils"].validateUrl(this.docURL)) {
                return true;
            }
            else {
                this.messageService.showErrorMessage(this.getTranslateKey('invalidURL'));
                return false;
            }
        }
        return true;
    };
    ItemFormComponent.prototype.openUrl = function () {
        _shared_utils_url_utils__WEBPACK_IMPORTED_MODULE_24__["UrlUtils"].openUrl(this.docURL);
    };
    /**
     * open item part number UC
     */
    ItemFormComponent.prototype.openItemPartNumber = function (objectId, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__["ComponentConstants"].ENG_ITEM_PART_NUMBER_FORM,
            openMode: openMode
        };
        if (!!objectId) {
            data.objectId = this.serializationService.serialize(objectId);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ItemFormComponent.prototype.createItemPN = function () {
        var bireVersionPnDTO = {
            familyCode: this.bireItemDTO.familyCode,
            variantCode: this.bireItemDTO.variantCode,
            structureType: this.bireItemDTO.structureType,
            subject: this.bireItemDTO.subject,
            sheet: this.bireItemDTO.sheet,
            marks: this.bireItemDTO.marks,
            chapter: this.bireItemDTO.chapter,
            section: this.bireItemDTO.section,
            versionNumber: this.selectedPartNumber.length > 0
                ? this.selectedPartNumber[0]._obj.versionNumber
                : !!this.partNumberVersionSelected
                    ? this.partNumberVersionSelected.data
                    : undefined
        };
        this.openItemPartNumber(bireVersionPnDTO, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Create);
    };
    ItemFormComponent.prototype.editItemPN = function (row) {
        this.openItemPartNumber(row._obj.bireVersionPnDTO, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read);
    };
    /**
     * open Item UC on click on Item son/father row
     */
    ItemFormComponent.prototype.openItemUC = function (ev) {
        if (ev && ev.item && ev.item) {
            var three = 3;
            var four = 4;
            var bireItemDTO = {
                chapter: ev.item.split('-')[0],
                section: ev.item.split('-')[1],
                subject: ev.item.split('-')[2],
                sheet: ev.item.split('-')[three],
                marks: ev.item.split('-')[four],
                familyCode: this.bireItemDTO.familyCode,
                structureType: this.bireItemDTO.structureType,
                variantCode: this.bireItemDTO.variantCode
            };
            this.openItem(bireItemDTO, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read);
        }
    };
    ItemFormComponent.prototype.openItem = function (objectId, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__["ComponentConstants"].ENG_ITEM_FORM,
            openMode: openMode
        };
        if (!!objectId) {
            var itemFormId = {
                familyCode: objectId.familyCode,
                chapter: objectId.chapter,
                section: objectId.section,
                sheet: objectId.sheet,
                marks: objectId.marks,
                subject: objectId.subject,
                structureType: objectId.structureType,
                variantCode: objectId.variantCode
            };
            data.objectId = this.serializationService.serialize(itemFormId);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    /**
     * Opens evolution on row click
     */
    ItemFormComponent.prototype.openEvolution = function (evolution) {
        var labelKey = 'transaction.EvolutionFormComponent';
        var evolutionId = {
            evolutionNumber: evolution.evolutionNumber,
            evolutionRevisionNumber: evolution.evolutionRevisionNumber
        };
        var data = {
            id: this.tabService.generateId(),
            componentId: 'EvolutionFormComponent',
            objectId: this.serializationService.serialize(evolutionId),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read
        };
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ItemFormComponent.prototype.loadCauseTypeList = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__["GenericPropertyConstants"].CAUSE_TYPE_MAP).subscribe(function (results) {
            _this.causeTypeList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(results);
        });
    };
    ItemFormComponent.prototype.setReferList = function () {
        var _this = this;
        var referForNHAKey = this.getTranslateKey('referForNHA');
        var referToKey = this.getTranslateKey('referTo');
        this.translateService.get([referForNHAKey, referToKey]).subscribe(function (results) {
            var referForNHALabel = results ? results[referForNHAKey] : 'Refer For NHA';
            var referToLabel = results ? results[referToKey] : 'Refer To';
            _this.referList = [
                { label: referForNHALabel, value: 'referNHA' },
                { label: referToLabel, value: 'referToVal' }
            ];
        });
    };
    ItemFormComponent.prototype.isIllustratedChange = function () {
        if (this.isillustratedSelected) {
            this.toc.push({
                id: 'illustrations',
                anchor: this.illustrations,
                label: 'Illustrations'
            });
        }
        else {
            var isFound_1 = false;
            var illusIndex_1 = -1;
            this.toc.forEach(function (res, index) {
                if (res.id === 'illustrations') {
                    isFound_1 = true;
                    illusIndex_1 = index;
                }
            });
            if (isFound_1) {
                this.toc.splice(illusIndex_1, 1);
            }
        }
    };
    /*************************************************************************
     * Documents tab Operations
     *************************************************************************/
    ItemFormComponent.prototype.addDocument = function () {
        this.currentDocumentIndex = -1;
        this.currentDocument = undefined;
        this.isReadOnlyDocumentDialog = false;
        this.showAddDocumentDialog = true;
    };
    ItemFormComponent.prototype.editDocument = function () {
        var _this = this;
        if (this.selectedDocuments.length === 1) {
            this.currentDocumentIndex = this.documentsTable.findIndex(function (document) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_20__["DTOUtils"].equalsBireDocumentDTO(document, _this.selectedDocuments[0]._obj);
            });
            this.currentDocument = __assign({}, this.selectedDocuments[0]._obj);
            this.isReadOnlyDocumentDialog = false;
            this.showDocumentDialog = true;
        }
    };
    ItemFormComponent.prototype.openDocument = function () {
        if (this.selectedDocuments.length === 1) {
            this.currentDocument = this.selectedDocuments[0]._obj;
            this.currentDocumentIndex = undefined;
            this.isReadOnlyDocumentDialog = true;
            this.showDocumentDialog = true;
        }
    };
    ItemFormComponent.prototype.loadDocumentsTable = function () {
        var _this = this;
        var bireItemDTOId = {
            familyCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.familyCode),
            chapter: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.chapter),
            subject: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.subject),
            variantCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.variantCode),
            section: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.section),
            sheet: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.sheet),
            marks: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.marks),
            structureType: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.structureType)
        };
        this.itemFormService.findBireDocItemsByItem(bireItemDTOId).subscribe(function (results) {
            results.forEach(function (doc) {
                if (!!doc && !!doc.bireDocumentDTO) {
                    _this.documentsTable.push(doc.bireDocumentDTO);
                    _this.bireDocumentDisplayed.push(_this.getCustomDocumentRow(doc.bireDocumentDTO));
                }
            });
        });
    };
    ItemFormComponent.prototype.getCustomDocumentRow = function (newDocument) {
        return {
            _obj: newDocument,
            docCode: newDocument.docCode,
            docExtension: this.showDocExtension(newDocument),
            docName: newDocument.docName,
            docPublicationDate: this.dateService.dateToString(newDocument.docPublicationDate),
            docSize: this.showDocSize(newDocument),
            docSource: newDocument.docSource,
            docCategory: !!newDocument.docType ? this.getLabel(newDocument.docType, this.documentTypes) : undefined
        };
    };
    ItemFormComponent.prototype.showDocExtension = function (document) {
        return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_21__["FileUtils"].getExtension(document.docName).toUpperCase();
    };
    ItemFormComponent.prototype.showDocSize = function (document) {
        return document.docFile ? _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_21__["FileUtils"].getFormattedSize(document.docFile.length) : '';
    };
    ItemFormComponent.prototype.uploadDocument = function (event, fileUploader) {
        var _this = this;
        if (event.files) {
            var file_1 = event.files[0];
            // Check if the file already exists
            var fileExists = this.documentsTable.some(function (document) {
                return document.docName === file_1.name;
            });
            if (fileExists) {
                this.messageService.showWarningMessage(this.getTranslateKey('warningOnFileExists'));
            }
            else {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_21__["FileUtils"].getFileContentAsBase64(file_1, function (fileContent) {
                    if (fileContent) {
                        var document_1 = {
                            docFile: fileContent,
                            docName: file_1.name,
                            docPublicationDate: new Date()
                        };
                        var bireDocItemDTO = {
                            familyCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.familyCode),
                            chapter: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.chapter),
                            subject: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.subject),
                            variantCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.variantCode),
                            section: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.section),
                            sheet: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.sheet),
                            marks: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.marks),
                            structureType: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.structureType),
                            bireDocumentDTO: document_1
                        };
                        _this.documentsTable = __spread(_this.documentsTable, [document_1]);
                        _this.documentsAdded = __spread(_this.documentsAdded, [bireDocItemDTO]);
                    }
                });
            }
            fileUploader.clear();
        }
    };
    ItemFormComponent.prototype.deleteDocuments = function () {
        var _this = this;
        var partialMessageKey = this.selectedDocuments.length > 1 ? 'confirmDeleteSelectedDocuments' : 'confirmDeleteSelectedDocument';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.selectedDocuments.forEach(function (selectedDocument) {
                    var documentsAddedWithoutSelection = _this.documentsAdded.filter(function (documentAdded) {
                        if (!!documentAdded.bireDocumentDTO) {
                            return selectedDocument.docName !== documentAdded.bireDocumentDTO.docName;
                        }
                    });
                    // list of added objects contains the selection
                    if (_this.documentsAdded.length !== documentsAddedWithoutSelection.length) {
                        // Remove selection from added objects
                        _this.documentsAdded = documentsAddedWithoutSelection;
                    }
                    else {
                        var isRemoved = _this.documentsAdded.some(function (documentAdded) {
                            return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_20__["DTOUtils"].equalsBireDocumentDTO(selectedDocument._obj, documentAdded);
                        });
                        if (!isRemoved && !!selectedDocument && !!selectedDocument.docCode) {
                            var documentId = {
                                familyCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.familyCode),
                                chapter: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.chapter),
                                subject: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.subject),
                                variantCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.variantCode),
                                section: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.section),
                                sheet: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.sheet),
                                marks: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.marks),
                                structureType: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(_this.bireItemDTO.structureType),
                                docCode: selectedDocument.docCode
                            };
                            _this.documentsRemoved.push(documentId);
                        }
                    }
                    var docIndex = -1;
                    _this.bireDocumentDisplayed.filter(function (doc, index) {
                        if (doc.docName === selectedDocument.docName) {
                            docIndex = index;
                        }
                    });
                    _this.bireDocumentDisplayed.splice(docIndex, 1);
                });
                _this.documentsTable = _this.documentsTable.filter(function (document) {
                    return !_this.selectedDocuments.some(function (selectedDocument) {
                        return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_20__["DTOUtils"].equalsBireDocumentDTO(document, selectedDocument._obj);
                    });
                });
                _this.selectedDocuments = [];
            }
        });
    };
    ItemFormComponent.prototype.addNewDocument = function (newDocument) {
        var searchInDisplayedList = this.documentsTable.find(function (value) { return value.docName === newDocument.docName; });
        var searchInAddedList = this.documentsAdded.find(function (value) {
            if (!!value.bireDocumentDTO) {
                return value.bireDocumentDTO.docName === newDocument.docName;
            }
            return false;
        });
        if (!searchInDisplayedList) {
            if (searchInAddedList) {
                this.messageService.showErrorMessage(this.getTranslateKey('errorFileAlreadyExist'));
            }
            else {
                var bireDocItemDTO = {
                    familyCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.familyCode),
                    chapter: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.chapter),
                    subject: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.subject),
                    variantCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.variantCode),
                    section: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.section),
                    sheet: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.sheet),
                    marks: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.marks),
                    structureType: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.structureType),
                    bireDocumentDTO: newDocument
                };
                this.documentsAdded.push(bireDocItemDTO);
                this.bireDocumentDisplayed.push(this.getCustomDocumentRow(newDocument));
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorFileAlreadyExist'));
        }
    };
    ItemFormComponent.prototype.updateDocument = function (updatedDocument) {
        if (this.currentDocumentIndex !== null &&
            this.currentDocumentIndex !== undefined &&
            this.currentDocumentIndex >= 0) {
            var bireDocItemDTO = {
                familyCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.familyCode),
                chapter: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.chapter),
                subject: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.subject),
                variantCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.variantCode),
                section: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.section),
                sheet: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.sheet),
                marks: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.marks),
                structureType: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(this.bireItemDTO.structureType),
                docCode: updatedDocument.docCode,
                bireDocumentDTO: updatedDocument
            };
            var inAddedList = this.documentsAdded.some(function (doc) { return doc.docCode === updatedDocument.docCode; });
            var inUpdatedList = this.documentsUpdated.some(function (doc) { return doc.docCode === updatedDocument.docCode; });
            if (inAddedList) {
                // added but unsaved
                var indexInAddedList = this.documentsAdded.findIndex(function (doc) { return doc.docCode === updatedDocument.docCode; });
                this.documentsAdded[indexInAddedList] = bireDocItemDTO;
            }
            else if (inUpdatedList) {
                // DB value already updated
                var indexInUpdatedList = this.documentsUpdated.findIndex(function (doc) { return doc.docCode === updatedDocument.docCode; });
                this.documentsUpdated[indexInUpdatedList] = bireDocItemDTO;
            }
            else {
                // non updated DB value
                this.documentsUpdated.push(bireDocItemDTO);
            }
            this.documentsTable[this.currentDocumentIndex] = updatedDocument;
            this.bireDocumentDisplayed[this.currentDocumentIndex] = this.getCustomDocumentRow(updatedDocument);
            this.selectedDocuments = [];
        }
    };
    ItemFormComponent.prototype.downloadDocument = function (event) {
        _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_21__["FileUtils"].downloadFile(event._obj.docFile, event._obj.docName);
    };
    ItemFormComponent.prototype.getLabel = function (val, itemList) {
        var value = [];
        if (!!itemList) {
            value = itemList.filter(function (res) {
                return res.value === val;
            });
        }
        return value.length > 0 ? value[0].label : val;
    };
    ItemFormComponent.prototype.packNumberData = function () {
        var _this = this;
        if (!this.isCreateOpenMode) {
            this.itemFormService.findBirePackBaseOptionsByItemTab(this.bireItemDTO).subscribe(function (results) {
                results.forEach(function (result) {
                    var packBaseOptionCode = result.packBaseOptionCode;
                    if (!_this.packNumberMap.has(packBaseOptionCode)) {
                        _this.packNumberMap.set(packBaseOptionCode, __assign({}, result));
                    }
                });
                _this.setConfigPackTreeData();
                if (_this.packNumberList.length > 0) {
                    _this.packNumberSelected = _this.packNumberList[0];
                    _this.onSelectPackNumber();
                }
            });
        }
    };
    ItemFormComponent.prototype.setConfigPackTreeData = function () {
        var _this = this;
        this.packNumberList = [];
        this.packNumberMap.forEach(function (value) {
            _this.packNumberList.push({
                label: value.packBaseOptionCode,
                data: value.packBaseOptionCode
            });
        });
    };
    ItemFormComponent.prototype.onSelectPackNumber = function () {
        if (this.packNumberSelected &&
            this.packNumberSelected.label &&
            this.packNumberMap.get(this.packNumberSelected.label)) {
            var obj = this.packNumberMap.get(this.packNumberSelected.label);
            this.currentPackNumber = obj || {};
        }
        else {
            this.currentPackNumber = {};
        }
        this.loadPacksEvolutions();
    };
    ItemFormComponent.prototype.loadPacksEvolutions = function () {
        var _this = this;
        this.evolutionPacksTableList = [];
        if (this.currentPackNumber && this.currentPackNumber.packBaseOptionCode) {
            var input = {
                bireItemDTO: this.bireItemDTO,
                packBaseOptionCode: this.currentPackNumber.packBaseOptionCode
            };
            this.itemFormService.findBirePackEvolutionsByItemAndPackBaseOptionCodeItem(input).subscribe(function (results) {
                results.forEach(function (obj) {
                    var row = _this.transformEvolutionToRow(__assign({}, obj));
                    _this.evolutionPacksTableList.push(row);
                });
            });
        }
    };
    ItemFormComponent.prototype.updateConfigPack = function (obj) {
        var _this = this;
        if (!this.isNewPack && this.packNumberSelected && obj.packBaseOptionCode) {
            if (this.packNumberSelected.data.toString() !== obj.packBaseOptionCode &&
                this.packNumberMap.has(obj.packBaseOptionCode)) {
                this.messageService.showErrorMessage(this.getTranslateKey('errorPackCodeAlreadyExist'));
                return;
            }
            this.updateBirePackBaseOptionList.forEach(function (elem, index) {
                if (obj.packBaseOptionCode === elem.packBaseOptionCode) {
                    _this.updateBirePackBaseOptionList.splice(index, 1);
                }
            });
            this.updateBirePackBaseOptionList.push(obj);
            this.packNumberMap.set(obj.packBaseOptionCode, obj);
            this.onSelectPackNumber();
        }
        else {
            if (this.isNewPack && obj.packBaseOptionCode && !this.packNumberMap.has(obj.packBaseOptionCode)) {
                var newPack = {
                    label: obj.packBaseOptionCode,
                    data: obj.packBaseOptionCode
                };
                this.packNumberList.push(newPack);
                obj.familyCode = this.bireItemDTO.familyCode;
                obj.structureType = this.bireItemDTO.structureType;
                obj.variantCode = this.bireItemDTO.variantCode;
                obj.chapter = this.bireItemDTO.chapter;
                obj.sheet = this.bireItemDTO.sheet;
                obj.marks = this.bireItemDTO.marks;
                obj.section = this.bireItemDTO.section;
                obj.subject = this.bireItemDTO.subject;
                this.createBirePackBaseOptionList.forEach(function (elem, index) {
                    if (obj.packBaseOptionCode === elem.packBaseOptionCode) {
                        _this.createBirePackBaseOptionList.splice(index, 1);
                    }
                });
                this.createBirePackBaseOptionList.push(obj);
                this.packNumberMap.set(obj.packBaseOptionCode, obj);
            }
            else {
                this.messageService.showErrorMessage(this.getTranslateKey('errorPackCodeAlreadyExist'));
            }
        }
    };
    ItemFormComponent.prototype.deleteConfigPack = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedPack'),
            accept: function () {
                if (_this.packNumberSelected && _this.currentPackNumber) {
                    var obj_1 = _this.currentPackNumber;
                    _this.removeBirePackBaseOptionList.forEach(function (elem, index) {
                        if (obj_1.packBaseOptionCode === elem.packBaseOptionCode) {
                            _this.removeBirePackBaseOptionList.splice(index, 1);
                        }
                    });
                    _this.removeBirePackBaseOptionList.push(obj_1);
                    _this.packNumberMap.delete(obj_1.packBaseOptionCode);
                    _this.currentPackNumber = {};
                    _this.setConfigPackTreeData();
                    _this.packNumberSelected = undefined;
                    _this.selectedEvolutionPacks = [];
                    _this.evolutionPacksTableList = [];
                }
            }
        });
    };
    ItemFormComponent.prototype.addConfigPack = function () {
        this.isNewPack = true;
        this.currentPack = {
            componentId: 'ConfigurationPackPopupComponent',
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
            object: undefined,
            selectedRow: undefined
        };
        this.showConfigPackDialog = true;
    };
    ItemFormComponent.prototype.editConfigPack = function () {
        if (this.packNumberSelected && this.currentPackNumber) {
            this.isNewPack = false;
            this.currentPack = {
                componentId: 'ConfigurationPackPopupComponent',
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
                object: __assign({}, this.currentPackNumber),
                selectedRow: undefined
            };
            this.showConfigPackDialog = true;
        }
    };
    ItemFormComponent.prototype.addConfigEvolution = function () {
        if (this.selectedEvolutionPacks.length === 0) {
            this.showAddConfigPackDialog = true;
            this.currentPack = {
                componentId: 'AddEvolutionPopupComponent',
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
                object: __assign({}, this.currentPackNumber),
                selectedRow: undefined
            };
        }
    };
    ItemFormComponent.prototype.editConfigEvolution = function () {
        if (this.selectedEvolutionPacks.length > 0 && this.selectedEvolutionPacks[0]._obj) {
            this.showEditEvolutionPackDialog = true;
            this.currentConfigEvolution = {
                componentId: 'EditEvolutionPopupComponent',
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
                object: __assign({}, this.selectedEvolutionPacks[0]._obj),
                selectedRow: undefined
            };
        }
    };
    ItemFormComponent.prototype.deleteConfigEvolution = function () {
        var _this = this;
        var partialMessageKey = this.selectedEvolutionPacks.length > 1
            ? 'confirmDeleteSelectedConfingEvolutions'
            : 'confirmDeleteConfingEvolution';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.selectedEvolutionPacks.forEach(function (obj) {
                    if (obj.evolutionNumber) {
                        var index = _this.evolutionPacksTableList.indexOf(obj);
                        _this.evolutionPacksTableList.splice(index, 1);
                    }
                });
                _this.selectedEvolutionPacks = [];
            }
        });
    };
    ItemFormComponent.prototype.updateConfigEvolution = function (input) {
        var _this = this;
        var currentRow = this.selectedEvolutionPacks[0];
        currentRow._obj = input;
        currentRow.description = input.description;
        currentRow.vintageDate = this.dateService.dateToString(input.vintageDate);
        var birePackEvolutionDTO = this.bireItemDTO;
        birePackEvolutionDTO.evolutionNumber = input.evolutionNumber;
        birePackEvolutionDTO.evolutionRevisionNumber = input.evolutionRevisionNumber;
        birePackEvolutionDTO.vintageDate = input.vintageDate;
        birePackEvolutionDTO.packBaseOptionCode = this.currentPackNumber && this.currentPackNumber.packBaseOptionCode;
        birePackEvolutionDTO.packEvolutionDescription = input.description;
        this.updateBirePackEvolutionDTOList.forEach(function (elem, index) {
            if (currentRow.evolutionNumber === elem.evolutionNumber) {
                _this.updateBirePackEvolutionDTOList.splice(index, 1);
            }
        });
        this.updateBirePackEvolutionDTOList.push(birePackEvolutionDTO);
        this.selectedEvolutionPacks = [];
    };
    ItemFormComponent.prototype.validateConfigEvolution = function (inputList) {
        var _this = this;
        if (inputList && inputList.length > 0) {
            inputList.forEach(function (obj) {
                var checkData = _this.evolutionPacksTableList.filter(function (tableRow) {
                    if (obj.bireEvolutionData) {
                        return tableRow.evolutionNumber === obj.bireEvolutionData.evolutionNumber;
                    }
                });
                if (checkData.length === 0) {
                    var birePackEvolutionOutput = {
                        evolutionNumber: obj.bireEvolutionData && obj.bireEvolutionData.evolutionNumber,
                        evolutionRevisionNumber: obj.bireEvolutionData && obj.bireEvolutionData.evolutionRevisionNumber,
                        description: undefined,
                        vintageDate: undefined,
                        designation: undefined
                    };
                    var row = _this.transformEvolutionToRow(__assign({}, birePackEvolutionOutput));
                    _this.evolutionPacksTableList.push(row);
                }
            });
        }
    };
    ItemFormComponent.prototype.transformEvolutionToRow = function (obj) {
        var packEvolutionRow = {
            _obj: obj,
            control: obj.interdependency,
            evolutionNumber: obj.evolutionNumber,
            revisionNumber: obj.evolutionRevisionNumber,
            designation: obj.designation,
            description: obj.description,
            vintageDate: this.dateService.dateToString(obj.vintageDate),
            message: obj.issueMessage
        };
        return packEvolutionRow;
    };
    // tslint:disable-next-line:no-any
    ItemFormComponent.prototype.toggleRowDetailsVisibility = function (row) {
        row.expand = !row.expand;
    };
    ItemFormComponent.prototype.openTaskCode = function (task) {
        if (task) {
            var bireTaskId = {
                taskCode: task.code,
                taskVersion: task.version
            };
            this.openTask(bireTaskId, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read);
        }
    };
    ItemFormComponent.prototype.openTask = function (object, openMode) {
        if (object != undefined) {
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__["ComponentConstants"].ENG_TASK_FORM,
                objectId: this.serializationService.serialize(object),
                openMode: openMode
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mainInfoAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ItemFormComponent.prototype, "mainInfoAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('partNumber'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ItemFormComponent.prototype, "partNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('general'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ItemFormComponent.prototype, "general", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('structure'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ItemFormComponent.prototype, "structure", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('refMeasurement'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ItemFormComponent.prototype, "refMeasurement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('taskDamagesLocalisation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ItemFormComponent.prototype, "taskDamagesLocalisation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('evolutions'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ItemFormComponent.prototype, "evolutions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('configurationPacks'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ItemFormComponent.prototype, "configurationPacks", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('maintenance'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ItemFormComponent.prototype, "maintenance", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('illustrations'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ItemFormComponent.prototype, "illustrations", void 0);
    ItemFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-item-form',
            template: __webpack_require__(/*! ./item-form.component.html */ "./src/app/main/engineering-management/item/form/item-form.component.html"),
            styles: [__webpack_require__(/*! ./item-form.component.scss */ "./src/app/main/engineering-management/item/form/item-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_13__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_14__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_15__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_17__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_18__["TabService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_3__["PageTocService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_16__["PropertiesService"],
            _item_form_service__WEBPACK_IMPORTED_MODULE_26__["ItemFormService"],
            _search_item_search_service__WEBPACK_IMPORTED_MODULE_25__["ItemSearchService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_4__["DynamicAttributesService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmationService"],
            _shared_api_product_structure_history_api__WEBPACK_IMPORTED_MODULE_2__["ProductStructureHistoryApi"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]])
    ], ItemFormComponent);
    return ItemFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_19__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/item-form.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/item-form.service.ts ***!
  \****************************************************************************/
/*! exports provided: ItemFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFormService", function() { return ItemFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_product_structure_business_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/product-structure-business.api */ "./src/app/shared/api/product-structure-business.api.ts");
/* harmony import */ var _shared_api_product_structure_history_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/product-structure-history.api */ "./src/app/shared/api/product-structure-history.api.ts");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/api/task-management.api */ "./src/app/shared/api/task-management.api.ts");
/* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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










var ItemFormService = /** @class */ (function (_super) {
    __extends(ItemFormService, _super);
    function ItemFormService(http, appConfigService, fleetManagementApi, productStructureManagementApi, taskManagementApi, productStructureHistoryApi, productStructureBusinessApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.fleetManagementApi = fleetManagementApi;
        _this.productStructureManagementApi = productStructureManagementApi;
        _this.taskManagementApi = taskManagementApi;
        _this.productStructureHistoryApi = productStructureHistoryApi;
        _this.productStructureBusinessApi = productStructureBusinessApi;
        return _this;
    }
    ItemFormService.prototype.isFollowedInRating = function (followedRatingInput) {
        return _super.prototype.post.call(this, this.productStructureBusinessApi.isFollowedInRating, followedRatingInput);
    };
    ItemFormService.prototype.getEquipmentFunctionList = function () {
        return _super.prototype.post.call(this, this.fleetManagementApi.getEquipmentFunctionList);
    };
    ItemFormService.prototype.findBireItem = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireItem, bireItemDTOId);
    };
    ItemFormService.prototype.findBireItemPnEvolutionsByItem = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireItemPnEvolutionsByItem, bireItemDTOId);
    };
    ItemFormService.prototype.findBirePackBaseOptionsByItem = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBirePackBaseOptionsByItem, bireItemDTOId);
    };
    ItemFormService.prototype.findBireMaintenancePlansByItem = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findAllBireMaintenancePlanByItem, bireItemDTOId);
    };
    ItemFormService.prototype.findBireTilItemsByItem = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireTilItemsByItem, bireItemDTOId);
    };
    ItemFormService.prototype.findBireItemSitesByItem = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireItemSitesByItem, bireItemDTOId);
    };
    ItemFormService.prototype.findBireReturnItem = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireReturnItem, bireItemDTOId);
    };
    ItemFormService.prototype.findBireItemMaintenanceByItem = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireItemMaintenanceByItem, bireItemDTOId);
    };
    ItemFormService.prototype.getPartNumberStructure = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.getPartNumberStructure, bireItemDTOId);
    };
    ItemFormService.prototype.findBireItemsBySearchCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireItemsBySearchCriteria, criteria);
    };
    ItemFormService.prototype.findBireItemAttributesByCategory = function (category) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireItemAttributesByCategory, category);
    };
    ItemFormService.prototype.findBireItemAttributesByItem = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireItemAttributesByItem, bireItemDTOId);
    };
    ItemFormService.prototype.getIsMELIsIllustratedSelected = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.getIsMELIsIllustratedSelected, bireItemDTOId);
    };
    ItemFormService.prototype.findAllBireTils = function () {
        return _super.prototype.post.call(this, this.taskManagementApi.findAllBireTils);
    };
    ItemFormService.prototype.findAllBireSites = function () {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireSite);
    };
    ItemFormService.prototype.findAllBireReturnReasons = function () {
        return _super.prototype.post.call(this, this.taskManagementApi.findAllBireReturnReasons);
    };
    ItemFormService.prototype.findBireKPourcentList = function () {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireKPourcentList);
    };
    ItemFormService.prototype.findBireMaintenanceEnvironmentsList = function () {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireMaintenanceEnvironmentsList);
    };
    ItemFormService.prototype.getStructureDetails = function (bireEvolutionItemDTO) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.getStructureDetails, bireEvolutionItemDTO);
    };
    ItemFormService.prototype.findBireTaskItemsByItemTaskTab = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireTaskItemsByItemTaskTab, bireItemDTOId);
    };
    ItemFormService.prototype.findBireDamageItemsByItemVersionItemScreen = function (bireItemVersionDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireDamageItemsByItemVersionItemScreen, bireItemVersionDTOId);
    };
    ItemFormService.prototype.findBireVersionMeasuresByItemVersion = function (bireItemVersionDTOId) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireVersionMeasuresByItemVersion, bireItemVersionDTOId);
    };
    ItemFormService.prototype.findBireMeasureReferencesBySearchCriteria = function (bireMeasureReferenceDTO) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireMeasureReferencesBySearchCriteria, bireMeasureReferenceDTO);
    };
    ItemFormService.prototype.findAllBireMeasureReferenceByCriteria = function (bireMeasureReferenceDTO) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireMeasureReferenceByCriteria, bireMeasureReferenceDTO);
    };
    ItemFormService.prototype.saveItem = function (saveItem) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.saveItem, saveItem);
    };
    ItemFormService.prototype.findBireTasksByCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.taskManagementApi.findAllBireTaskByCriteriaInput, criteria);
    };
    ItemFormService.prototype.findMROCenter = function () {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireSite);
    };
    ItemFormService.prototype.getTaskGroups = function () {
        return _super.prototype.post.call(this, this.taskManagementApi.findAllBireTaskGroups);
    };
    ItemFormService.prototype.findBireItemVersions = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireItemVersionsByItem, bireItemDTOId);
    };
    ItemFormService.prototype.findBireDamagesByCriteria = function () {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireDamagesByCriteria);
    };
    ItemFormService.prototype.findBireLocalisationItemsByItemVersion = function (bireItemVersionDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireLocalisationItemsByItemVersion, bireItemVersionDTOId);
    };
    ItemFormService.prototype.findBireLocalisationCodesByCriteria = function () {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireLocalisationCodesByCriteria);
    };
    ItemFormService.prototype.findBireDamLocTasksByItemVersion = function (bireItemVersionDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireDamLocTasksByItemVersion, bireItemVersionDTOId);
    };
    ItemFormService.prototype.findBireActionTypesByActionTypeCode = function (code) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireActionTypesByActionTypeCode, code);
    };
    ItemFormService.prototype.findBireUnmountAssemblysByFamilyAndVariantCodes = function (bireVariantVersionDTOId) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireUnmountAssemblysByFamilyAndVariantCodes, bireVariantVersionDTOId);
    };
    ItemFormService.prototype.findHistoricOfObjectByPk = function (objId) {
        return _super.prototype.post.call(this, this.productStructureHistoryApi.findHistoricOfObjectByPk, objId);
    };
    ItemFormService.prototype.findBireRatingsBySearchCriteria = function (bireRatingCriteria, variantCodeCriteria) {
        var searchCriteria = {
            bireRatingDTOCriteria: bireRatingCriteria,
            variantCode: variantCodeCriteria,
            useCaseCode: _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__["BidoFunctionTypeConstants"].UC_MCH_BOM
        };
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireRatingsBySearchCriteria, searchCriteria);
    };
    ItemFormService.prototype.findBireDocItemsByItem = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireDocItemsByItem, input);
    };
    ItemFormService.prototype.findBirePackBaseOptionsByItemTab = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBirePackBaseOptionsByItemTab, input);
    };
    ItemFormService.prototype.findBirePackEvolutionsByItemAndPackBaseOptionCodeItem = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBirePackEvolutionsByItemAndPackBaseOptionCodeItem, input);
    };
    ItemFormService.prototype.findBireEvolutionsByFamilyAndVariantCodesItemPack = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireEvolutionsByFamilyAndVariantCodesItemPack, input);
    };
    ItemFormService.prototype.getPackType = function () {
        return _super.prototype.post.call(this, this.productStructureManagementApi.getPackType);
    };
    ItemFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfigService"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__["FleetManagementApi"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__["ProductStructureManagementApi"],
            _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_6__["TaskManagementApi"],
            _shared_api_product_structure_history_api__WEBPACK_IMPORTED_MODULE_4__["ProductStructureHistoryApi"],
            _shared_api_product_structure_business_api__WEBPACK_IMPORTED_MODULE_3__["ProductStructureBusinessApi"]])
    ], ItemFormService);
    return ItemFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/add-evolution-popup/add-evolution-popup.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/add-evolution-popup/add-evolution-popup.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"50\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"section\">\r\n      <h4 class=\"section-title\">{{ \"global.results\" | translate }} ({{ evolutionsTableDataSource?.dataCount }})</h4>\r\n      <div class=\"section-content\">\r\n        <a-table [dataSource]=\"evolutionsTableDataSource\"> </a-table>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"onCancel()\">{{ \"global.cancel\" | translate }}</button>\r\n\r\n    <button\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      (click)=\"onValidate()\"\r\n      [disabled]=\"!evolutionsTableDataSource.hasDataSelection\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/add-evolution-popup/add-evolution-popup.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/add-evolution-popup/add-evolution-popup.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AddEvolutionPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEvolutionPopupComponent", function() { return AddEvolutionPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _item_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
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





var AddEvolutionPopupComponent = /** @class */ (function (_super) {
    __extends(AddEvolutionPopupComponent, _super);
    function AddEvolutionPopupComponent(itemFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'AddEvolutionPopupComponent') || this;
        _this.itemFormService = itemFormService;
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.initItemTableData();
        return _this;
    }
    AddEvolutionPopupComponent.prototype.ngOnInit = function () {
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            if (!!this.componentData.object) {
                this.birePackBaseOptionDTO = this.componentData.object;
            }
            else {
                this.birePackBaseOptionDTO = {};
            }
            this.loadEvolutions();
        }
    };
    /**
     * Validate Screen
     */
    AddEvolutionPopupComponent.prototype.onValidate = function () {
        var selectedItems = [];
        this.evolutionsTableDataSource.dataSelection.forEach(function (obj) {
            if (obj._obj) {
                selectedItems.push(obj._obj);
            }
        });
        this.onValidated.emit(selectedItems);
        this.display = false;
    };
    /**
     * Close popup
     */
    AddEvolutionPopupComponent.prototype.onCancel = function () {
        this.display = false;
    };
    AddEvolutionPopupComponent.prototype.loadEvolutions = function () {
        var _this = this;
        this.evolutionsTableDataSource.setData([]);
        this.isLoading = true;
        var bireVariantVersionDTOId = {
            familyCode: this.birePackBaseOptionDTO.familyCode || '',
            structureType: this.birePackBaseOptionDTO.structureType || '',
            variantCode: this.birePackBaseOptionDTO.variantCode || ''
        };
        this.itemFormService
            .findBireEvolutionsByFamilyAndVariantCodesItemPack(bireVariantVersionDTOId)
            .subscribe(function (results) {
            results.forEach(function (obj) {
                var row = {
                    _obj: obj,
                    ad: obj.ads,
                    applicability: obj.mods_Applicability,
                    evolutionCompliance: obj.customizedEvolutionCompliance,
                    evolutionNumber: obj.bireEvolutionData && obj.bireEvolutionData.evolutionNumber,
                    mod: obj.mods,
                    sb: obj.sbs
                };
                _this.evolutionsTableDataSource.addData([row]);
            });
            _this.isLoading = false;
        });
    };
    AddEvolutionPopupComponent.prototype.initItemTableData = function () {
        this.evolutionsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["TableDataSource"]({
            columns: [
                { field: 'evolutionNumber', translateKey: this.getTranslateKey('evolutionNumber') },
                { field: 'evolutionCompliance', translateKey: this.getTranslateKey('evolutionCompliance') },
                { field: 'mod', translateKey: this.getTranslateKey('mod') },
                { field: 'sb', translateKey: this.getTranslateKey('sb') },
                { field: 'ad', translateKey: this.getTranslateKey('ad') },
                { field: 'applicability', translateKey: this.getTranslateKey('applicability') }
            ],
            data: []
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('component-data'),
        __metadata("design:type", Object)
    ], AddEvolutionPopupComponent.prototype, "componentData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddEvolutionPopupComponent.prototype, "onValidated", void 0);
    AddEvolutionPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-add-evolution-popup',
            template: __webpack_require__(/*! ./add-evolution-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/add-evolution-popup/add-evolution-popup.component.html")
        }),
        __metadata("design:paramtypes", [_item_form_service__WEBPACK_IMPORTED_MODULE_4__["ItemFormService"]])
    ], AddEvolutionPopupComponent);
    return AddEvolutionPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/cause-of-removal-popup/cause-of-removal-popup.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/cause-of-removal-popup/cause-of-removal-popup.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"80\">\r\n  <a-header>\r\n    <div class=\"modal-title\">\r\n      {{ getComponentName() + \".causeOfRemovalMangement\" | translate }} ({{ causeOfRemovalDataSource.dataCount }})\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <div class=\"form-control\">\r\n        <a-table [dataSource]=\"causeOfRemovalDataSource\"> </a-table>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      [disabled]=\"!causeOfRemovalDataSource.hasDataSelection\"\r\n      (click)=\"onValidate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/cause-of-removal-popup/cause-of-removal-popup.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/cause-of-removal-popup/cause-of-removal-popup.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: CauseOfRemovalPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CauseOfRemovalPopupComponent", function() { return CauseOfRemovalPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _form_item_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../form/item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
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










var CauseOfRemovalPopupComponent = /** @class */ (function (_super) {
    __extends(CauseOfRemovalPopupComponent, _super);
    function CauseOfRemovalPopupComponent(itemFormService, messageService, propertiesService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, 'CauseOfRemovalPopupComponent') || this;
        _this.itemFormService = itemFormService;
        _this.messageService = messageService;
        _this.propertiesService = propertiesService;
        _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.init();
        _this.loadCauseTypeList();
        return _this;
    }
    /**
     * Init screen
     */
    CauseOfRemovalPopupComponent.prototype.init = function () {
        this.bireReturnItemDTO = {};
        this.causeOfRemovalDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["TableDataSource"]({
            columns: [
                {
                    field: 'returnReasonCode',
                    translateKey: this.getTranslateKey('returnReasonCode'),
                    width: '12.5%'
                },
                {
                    field: 'returnReasonName',
                    translateKey: this.getTranslateKey('returnReasonName'),
                    width: '25.5%'
                },
                {
                    field: 'returnReasonDescription',
                    translateKey: this.getTranslateKey('returnReasonDescription'),
                    width: '50.5%'
                },
                {
                    field: 'causeType',
                    translateKey: this.getTranslateKey('causeType'),
                    width: '12.5%'
                }
            ],
            data: []
        });
    };
    CauseOfRemovalPopupComponent.prototype.initilizeScreen = function () {
        var _this = this;
        // Repair Center List
        this.itemFormService.findAllBireReturnReasons().subscribe(function (results) {
            _this.causeOfRemovalDataSource.setData(_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__["ListUtils"].orEmpty(results).map(function (result) { return _this.createCauseOfRemovalRow(result); }));
        });
    };
    CauseOfRemovalPopupComponent.prototype.createCauseOfRemovalRow = function (obj) {
        var causeType = this.causeTypeList.find(function (elt) { return elt.value === obj.causeType; });
        var causeOfRemovalRow = {
            returnReasonCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].orEmpty(obj.returnReasonCode),
            returnReasonName: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].orEmpty(obj.returnReasonName),
            returnReasonDescription: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].orEmpty(obj.returnReasonDescription),
            causeType: causeType ? causeType.label : _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].orEmpty(obj.causeType),
            _obj: obj
        };
        return causeOfRemovalRow;
    };
    /**
     * Validate Screen
     */
    CauseOfRemovalPopupComponent.prototype.onValidate = function () {
        if (this.validateScreen()) {
            var selectedCauseList = this.causeOfRemovalDataSource.dataSelection.map(function (elt) { return elt._obj; });
            this.onCreate.emit(selectedCauseList);
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidRemovalisRequired'));
        }
    };
    /**
     * Close popup
     */
    CauseOfRemovalPopupComponent.prototype.onCancel = function () {
        this.display = false;
    };
    /**
     * Is required fields filled ?
     */
    CauseOfRemovalPopupComponent.prototype.validateScreen = function () {
        if (this.causeOfRemovalDataSource.hasDataSelection) {
            return true;
        }
        return false;
    };
    CauseOfRemovalPopupComponent.prototype.loadCauseTypeList = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__["GenericPropertyConstants"].CAUSE_TYPE_MAP).subscribe(function (results) {
            _this.causeTypeList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__["ListUtils"].orEmpty(results);
            _this.initilizeScreen();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CauseOfRemovalPopupComponent.prototype, "onCreate", void 0);
    CauseOfRemovalPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-cause-of-removal-popup',
            template: __webpack_require__(/*! ./cause-of-removal-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/cause-of-removal-popup/cause-of-removal-popup.component.html")
        }),
        __metadata("design:paramtypes", [_form_item_form_service__WEBPACK_IMPORTED_MODULE_9__["ItemFormService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__["PropertiesService"]])
    ], CauseOfRemovalPopupComponent);
    return CauseOfRemovalPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/configuration-pack-popup/configuration-pack-popup.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/configuration-pack-popup/configuration-pack-popup.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">\r\n      {{ getComponentName() + (title === \"edit\" ? \".editPack\" : \".addPack\") | translate }}\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".packCode\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input\"\r\n          maxlength=\"1\"\r\n          [disabled]=\"title === 'edit'\"\r\n          [(ngModel)]=\"birePackBaseOptionDTO.packBaseOptionCode\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".packDescription\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <textarea\r\n          class=\"aw-textarea\"\r\n          pInputTextarea\r\n          [rows]=\"3\"\r\n          [cols]=\"40\"\r\n          [(ngModel)]=\"birePackBaseOptionDTO.packDescription\"\r\n          maxlength=\"300\"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".packType\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          [options]=\"typeList\"\r\n          [(ngModel)]=\"birePackBaseOptionDTO.packType\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      [disabled]=\"!birePackBaseOptionDTO.packType || !birePackBaseOptionDTO.packBaseOptionCode\"\r\n      (click)=\"onValidate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/configuration-pack-popup/configuration-pack-popup.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/configuration-pack-popup/configuration-pack-popup.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ConfigurationPackPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationPackPopupComponent", function() { return ConfigurationPackPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
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



var ConfigurationPackPopupComponent = /** @class */ (function (_super) {
    __extends(ConfigurationPackPopupComponent, _super);
    function ConfigurationPackPopupComponent() {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'ConfigurationPackPopupComponent') || this;
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ConfigurationPackPopupComponent.prototype.ngOnInit = function () {
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            if (!!this.componentData.object) {
                this.birePackBaseOptionDTO = this.componentData.object;
                this.title = 'edit';
            }
            else {
                this.birePackBaseOptionDTO = {
                    packType: '1'
                };
                this.title = 'new';
            }
        }
    };
    /**
     * Validate Screen
     */
    ConfigurationPackPopupComponent.prototype.onValidate = function () {
        this.onValidated.emit(this.birePackBaseOptionDTO);
        this.display = false;
    };
    /**
     * Close popup
     */
    ConfigurationPackPopupComponent.prototype.onCancel = function () {
        this.display = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('component-data'),
        __metadata("design:type", Object)
    ], ConfigurationPackPopupComponent.prototype, "componentData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ConfigurationPackPopupComponent.prototype, "typeList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ConfigurationPackPopupComponent.prototype, "onValidated", void 0);
    ConfigurationPackPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-configuration-pack-popup',
            template: __webpack_require__(/*! ./configuration-pack-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/configuration-pack-popup/configuration-pack-popup.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ConfigurationPackPopupComponent);
    return ConfigurationPackPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/dam-loc-task-popup/dam-loc-task-popup.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/dam-loc-task-popup/dam-loc-task-popup.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".damageManagement\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".itemVersion\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [showClear]=\"true\"\r\n          [options]=\"itemVersionList\"\r\n          [(ngModel)]=\"versionNumber\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".damageCode\" | translate }}</label>\r\n\r\n      <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n        <div class=\"form-control-data\" (click)=\"showDamageDialog()\">{{ bireDamLocTaskCustomOutput.damageCode }}</div>\r\n\r\n        <div *ngIf=\"bireDamLocTaskCustomOutput.damageCode\" class=\"btn-clear-wrapper\">\r\n          <i\r\n            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n            aria-hidden=\"true\"\r\n            (click)=\"bireDamLocTaskCustomOutput.damageCode = undefined\"\r\n          ></i>\r\n        </div>\r\n        <div class=\"btn-search-wrapper\">\r\n          <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\" (click)=\"showDamageDialog()\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".localisationCode\" | translate }}</label>\r\n\r\n      <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n        <div class=\"form-control-data\" (click)=\"showLocalisationDialog()\">\r\n          {{ bireDamLocTaskCustomOutput.localisationCode }}\r\n        </div>\r\n\r\n        <div *ngIf=\"bireDamLocTaskCustomOutput.localisationCode\" class=\"btn-clear-wrapper\">\r\n          <i\r\n            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n            aria-hidden=\"true\"\r\n            (click)=\"bireDamLocTaskCustomOutput.localisationCode = undefined\"\r\n          ></i>\r\n        </div>\r\n        <div class=\"btn-search-wrapper\">\r\n          <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\" (click)=\"showLocalisationDialog()\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".taskCode\" | translate }}</label>\r\n\r\n      <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n        <div class=\"form-control-data\" (click)=\"taskSearchCode()\">{{ bireDamLocTaskCustomOutput.taskCode }}</div>\r\n\r\n        <div *ngIf=\"bireDamLocTaskCustomOutput.taskCode\" class=\"btn-clear-wrapper\">\r\n          <i\r\n            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n            aria-hidden=\"true\"\r\n            (click)=\"bireDamLocTaskCustomOutput.taskCode = undefined\"\r\n          ></i>\r\n        </div>\r\n        <div class=\"btn-search-wrapper\">\r\n          <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\" (click)=\"taskSearchCode()\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".taskVersion\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input\"\r\n          maxlength=\"50\"\r\n          [(ngModel)]=\"bireDamLocTaskCustomOutput.taskVersion\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      [disabled]=\"\r\n        !versionNumber ||\r\n        !bireDamLocTaskCustomOutput.damageCode ||\r\n        !bireDamLocTaskCustomOutput.localisationCode ||\r\n        !bireDamLocTaskCustomOutput.taskCode\r\n      \"\r\n      (click)=\"onValidate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-damage-list-popup\r\n  *ngIf=\"showDamageListDialog\"\r\n  [(display)]=\"showDamageListDialog\"\r\n  (onCreate)=\"setSelectedDamages($event)\"\r\n></aw-damage-list-popup>\r\n\r\n<aw-dialog-search-task\r\n  *ngIf=\"showItemTaskSearchPopup\"\r\n  [(display)]=\"showItemTaskSearchPopup\"\r\n  (onSelected)=\"addTask($event)\"\r\n></aw-dialog-search-task>\r\n\r\n<aw-localisation-list-popup\r\n  *ngIf=\"showLocalisationListDialog\"\r\n  [(display)]=\"showLocalisationListDialog\"\r\n  (onCreate)=\"setSelectedLocalisation($event)\"\r\n></aw-localisation-list-popup>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/dam-loc-task-popup/dam-loc-task-popup.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/dam-loc-task-popup/dam-loc-task-popup.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DamLocTaskPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DamLocTaskPopupComponent", function() { return DamLocTaskPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _item_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
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





var DamLocTaskPopupComponent = /** @class */ (function (_super) {
    __extends(DamLocTaskPopupComponent, _super);
    function DamLocTaskPopupComponent(messageService, itemFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'DamLocTaskPopupComponent') || this;
        _this.messageService = messageService;
        _this.itemFormService = itemFormService;
        _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DamLocTaskPopupComponent.prototype.ngOnInit = function () {
        this.bireDamLocTaskCustomOutput = {};
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            if (!!this.componentData.object) {
                this.bireDamLocTaskCustomOutput = {
                    damageCode: this.componentData.object.damageCode,
                    localisationCode: this.componentData.object.localisationCode,
                    taskCode: this.componentData.object.taskCode,
                    taskVersion: this.componentData.object.taskVersion
                };
                if (!!this.componentData.object.versionNumber) {
                    this.versionNumber = this.componentData.object.versionNumber;
                }
            }
        }
        this.renderDropdown();
    };
    DamLocTaskPopupComponent.prototype.renderDropdown = function () {
        var _this = this;
        this.itemFormService.findBireItemVersions(this.bireItemDTOId).subscribe(function (results) {
            _this.itemVersionList = results;
        });
    };
    /**
     * Validate Screen
     */
    DamLocTaskPopupComponent.prototype.onValidate = function () {
        if (this.validateScreen()) {
            this.bireDamLocTaskCustomOutput.versionNumber = this.versionNumber;
            this.onCreate.emit(this.bireDamLocTaskCustomOutput);
            this.display = false;
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidDamLocisRequired'));
        }
    };
    DamLocTaskPopupComponent.prototype.showLocalisationDialog = function () {
        this.showLocalisationListDialog = true;
    };
    /**
     * Close popup
     */
    DamLocTaskPopupComponent.prototype.onCancel = function () {
        this.display = false;
    };
    /**
     * Is required fields filled ?
     */
    DamLocTaskPopupComponent.prototype.validateScreen = function () {
        if (!!this.bireDamLocTaskCustomOutput.damageCode &&
            !!this.versionNumber &&
            !!this.bireDamLocTaskCustomOutput.localisationCode &&
            !!this.bireDamLocTaskCustomOutput.taskCode &&
            !!this.bireDamLocTaskCustomOutput.taskVersion) {
            return true;
        }
        return false;
    };
    /**
     * Opens task search dialog
     */
    DamLocTaskPopupComponent.prototype.taskSearchCode = function () {
        this.showItemTaskSearchPopup = true;
    };
    DamLocTaskPopupComponent.prototype.setSelectedDamages = function (ev) {
        this.bireDamLocTaskCustomOutput.damageCode = ev.damageCode;
        this.bireDamLocTaskCustomOutput.damageDescription = ev.damageDescription;
        this.showDamageListDialog = true;
    };
    DamLocTaskPopupComponent.prototype.setSelectedLocalisation = function (ev) {
        this.bireDamLocTaskCustomOutput.localisationCode = ev.localisationCode;
        this.bireDamLocTaskCustomOutput.localisationDescription = ev.localisationDescription;
        this.showLocalisationListDialog = true;
    };
    /**
     * On task selection
     */
    DamLocTaskPopupComponent.prototype.addTask = function (task) {
        this.showItemTaskSearchPopup = false;
        this.bireDamLocTaskCustomOutput.taskCode = task.taskCode;
        this.bireDamLocTaskCustomOutput.taskVersion = task.taskVersion;
        this.bireDamLocTaskCustomOutput.taskDesignation = task.taskDesignation;
    };
    DamLocTaskPopupComponent.prototype.showDamageDialog = function () {
        this.showDamageListDialog = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('component-data'),
        __metadata("design:type", Object)
    ], DamLocTaskPopupComponent.prototype, "componentData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bireItemDTOId'),
        __metadata("design:type", Object)
    ], DamLocTaskPopupComponent.prototype, "bireItemDTOId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DamLocTaskPopupComponent.prototype, "onCreate", void 0);
    DamLocTaskPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dam-loc-task-popup',
            template: __webpack_require__(/*! ./dam-loc-task-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/dam-loc-task-popup/dam-loc-task-popup.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _item_form_service__WEBPACK_IMPORTED_MODULE_4__["ItemFormService"]])
    ], DamLocTaskPopupComponent);
    return DamLocTaskPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/damage-popup/damage-list-popup/damage-list-popup.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/damage-popup/damage-list-popup/damage-list-popup.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"60\">\r\n  <a-header>\r\n    <div class=\"modal-title\">\r\n      {{ getComponentName() + \".damageList\" | translate }} ({{ damageListDataSource.dataCount }})\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <div class=\"form-control\">\r\n        <a-table [dataSource]=\"damageListDataSource\"> </a-table>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      [disabled]=\"!damageListDataSource.hasDataSelection\"\r\n      (click)=\"onValidate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/damage-popup/damage-list-popup/damage-list-popup.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/damage-popup/damage-list-popup/damage-list-popup.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: DamageListPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DamageListPopupComponent", function() { return DamageListPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _item_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
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






var DamageListPopupComponent = /** @class */ (function (_super) {
    __extends(DamageListPopupComponent, _super);
    function DamageListPopupComponent(messageService, itemFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'DamageListPopupComponent') || this;
        _this.messageService = messageService;
        _this.itemFormService = itemFormService;
        _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DamageListPopupComponent.prototype.ngOnInit = function () {
        this.damageListDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["TableDataSource"]({
            allowMultiSelect: false,
            columns: [
                { field: 'damageCode', translateKey: this.getTranslateKey('damageCode'), width: '20%' },
                { field: 'unitCode', translateKey: this.getTranslateKey('unitCode'), width: '10%' },
                { field: 'damageDescription', translateKey: this.getTranslateKey('damageDescription'), width: '70%' }
            ],
            data: [],
            enableSelection: true
        });
        this.getDamageList();
    };
    DamageListPopupComponent.prototype.getDamageList = function () {
        var _this = this;
        this.itemFormService.findBireDamagesByCriteria().subscribe(function (result) {
            _this.damageListDataSource.addData(result);
        });
    };
    /**
     * Validate Screen
     */
    DamageListPopupComponent.prototype.onValidate = function () {
        if (this.validateScreen()) {
            this.onCreate.emit(this.damageListDataSource.dataSelection[0]);
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidDamageIsRequired'));
        }
        this.display = false;
    };
    /**
     * Close popup
     */
    DamageListPopupComponent.prototype.onCancel = function () {
        this.display = false;
    };
    /**
     * Is required fields filled ?
     */
    DamageListPopupComponent.prototype.validateScreen = function () {
        if (!!this.damageListDataSource.dataSelection[0].damageCode) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DamageListPopupComponent.prototype, "onCreate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('versionNumber'),
        __metadata("design:type", String)
    ], DamageListPopupComponent.prototype, "versionNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bireItemDTOId'),
        __metadata("design:type", Object)
    ], DamageListPopupComponent.prototype, "bireItemDTOId", void 0);
    DamageListPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-damage-list-popup',
            template: __webpack_require__(/*! ./damage-list-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/damage-popup/damage-list-popup/damage-list-popup.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _item_form_service__WEBPACK_IMPORTED_MODULE_5__["ItemFormService"]])
    ], DamageListPopupComponent);
    return DamageListPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/damage-popup/damage-popup.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/damage-popup/damage-popup.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".damageManagement\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".itemVersion\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [showClear]=\"true\"\r\n          [options]=\"itemVersionList\"\r\n          [(ngModel)]=\"versionNumber\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".damageCode\" | translate }}</label>\r\n\r\n      <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n        <div class=\"form-control-data\" (click)=\"showDamageDialog()\">{{ bireDamageDTO.damageCode }}</div>\r\n\r\n        <div *ngIf=\"bireDamageDTO.damageCode\" class=\"btn-clear-wrapper\">\r\n          <i\r\n            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n            aria-hidden=\"true\"\r\n            (click)=\"bireDamageDTO.damageCode = undefined\"\r\n          ></i>\r\n        </div>\r\n        <div class=\"btn-search-wrapper\">\r\n          <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\" (click)=\"showDamageDialog()\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      [disabled]=\"!versionNumber || !bireDamageDTO.damageCode\"\r\n      (click)=\"onValidate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-damage-list-popup\r\n  *ngIf=\"showDamageListDialog\"\r\n  [(display)]=\"showDamageListDialog\"\r\n  (onCreate)=\"setSelectedItems($event)\"\r\n></aw-damage-list-popup>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/damage-popup/damage-popup.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/damage-popup/damage-popup.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DamagePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DamagePopupComponent", function() { return DamagePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _item_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
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





var DamagePopupComponent = /** @class */ (function (_super) {
    __extends(DamagePopupComponent, _super);
    function DamagePopupComponent(messageService, itemFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'DamagePopupComponent') || this;
        _this.messageService = messageService;
        _this.itemFormService = itemFormService;
        _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DamagePopupComponent.prototype.ngOnInit = function () {
        this.bireDamageDTO = {};
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            if (!!this.componentData.object) {
                this.bireDamageDTO = {
                    damageCode: this.componentData.object.damageCode,
                    damageDescription: this.componentData.object.description
                };
                if (!!this.componentData.object.versionNumber) {
                    this.versionNumber = this.componentData.object.versionNumber;
                }
            }
        }
        this.renderDropdown();
    };
    DamagePopupComponent.prototype.renderDropdown = function () {
        var _this = this;
        this.itemFormService.findBireItemVersions(this.bireItemDTOId).subscribe(function (results) {
            _this.itemVersionList = results;
        });
    };
    /**
     * Validate Screen
     */
    DamagePopupComponent.prototype.onValidate = function () {
        if (this.validateScreen()) {
            var bireDamageDTOCustom = {
                damageCode: this.bireDamageDTO.damageCode,
                damageDescription: this.bireDamageDTO.damageDescription,
                unitCode: this.bireDamageDTO.unitCode,
                versionNumber: this.versionNumber
            };
            this.onCreate.emit(bireDamageDTOCustom);
            this.display = false;
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidRepairCenterisRequired'));
        }
    };
    /**
     * Close popup
     */
    DamagePopupComponent.prototype.onCancel = function () {
        this.display = false;
    };
    /**
     * Is required fields filled ?
     */
    DamagePopupComponent.prototype.validateScreen = function () {
        if (!!this.bireDamageDTO.damageCode && !!this.versionNumber) {
            return true;
        }
        return false;
    };
    DamagePopupComponent.prototype.setSelectedItems = function (ev) {
        this.bireDamageDTO = ev;
        this.showDamageListDialog = true;
    };
    DamagePopupComponent.prototype.showDamageDialog = function () {
        this.showDamageListDialog = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('component-data'),
        __metadata("design:type", Object)
    ], DamagePopupComponent.prototype, "componentData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bireItemDTOId'),
        __metadata("design:type", Object)
    ], DamagePopupComponent.prototype, "bireItemDTOId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DamagePopupComponent.prototype, "onCreate", void 0);
    DamagePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-damage-popup',
            template: __webpack_require__(/*! ./damage-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/damage-popup/damage-popup.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _item_form_service__WEBPACK_IMPORTED_MODULE_4__["ItemFormService"]])
    ], DamagePopupComponent);
    return DamagePopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/edit-evolution-popup/edit-evolution-popup.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/edit-evolution-popup/edit-evolution-popup.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".vintageDate\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <p-calendar\r\n          showButtonBar=\"true\"\r\n          [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\"\r\n          [yearRange]=\"sessionService.calendarYearRange\"\r\n          class=\"aw-calendar\"\r\n          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n          [locale]=\"sessionService.calendarFormat\"\r\n          [(ngModel)]=\"birePackEvolutionOutput.vintageDate\"\r\n          appendTo=\"body\"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".description\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [(ngModel)]=\"birePackEvolutionOutput.description\"\r\n          maxlength=\"300\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" color=\"primary\" type=\"button\" mat-raised-button (click)=\"onValidate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/edit-evolution-popup/edit-evolution-popup.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/edit-evolution-popup/edit-evolution-popup.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: EditEvolutionPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEvolutionPopupComponent", function() { return EditEvolutionPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
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




var EditEvolutionPopupComponent = /** @class */ (function (_super) {
    __extends(EditEvolutionPopupComponent, _super);
    function EditEvolutionPopupComponent(sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'EditEvolutionPopupComponent') || this;
        _this.sessionService = sessionService;
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    EditEvolutionPopupComponent.prototype.ngOnInit = function () {
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            if (!!this.componentData.object) {
                this.birePackEvolutionOutput = this.componentData.object;
            }
            else {
                this.birePackEvolutionOutput = {};
            }
        }
    };
    /**
     * Validate Screen
     */
    EditEvolutionPopupComponent.prototype.onValidate = function () {
        this.onValidated.emit(this.birePackEvolutionOutput);
        this.display = false;
    };
    /**
     * Close popup
     */
    EditEvolutionPopupComponent.prototype.onCancel = function () {
        this.display = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('component-data'),
        __metadata("design:type", Object)
    ], EditEvolutionPopupComponent.prototype, "componentData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EditEvolutionPopupComponent.prototype, "typeList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditEvolutionPopupComponent.prototype, "onValidated", void 0);
    EditEvolutionPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-edit-evolution-popup',
            template: __webpack_require__(/*! ./edit-evolution-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/edit-evolution-popup/edit-evolution-popup.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], EditEvolutionPopupComponent);
    return EditEvolutionPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/item-father-popup/item-father-popup.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/item-father-popup/item-father-popup.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" width=\"15\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".itemFatherManagement\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".item\" | translate }}</label>\r\n      <div class=\"form-control display--flex-row\">\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input flex--1\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [(ngModel)]=\"bireItemDTO.chapter\"\r\n          maxlength=\"2\"\r\n        />\r\n        <span class=\"separator\">-</span>\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input flex--1\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [(ngModel)]=\"bireItemDTO.section\"\r\n          maxlength=\"2\"\r\n        />\r\n        <span class=\"separator\">-</span>\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input flex--1\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [(ngModel)]=\"bireItemDTO.subject\"\r\n          maxlength=\"2\"\r\n        />\r\n        <span class=\"separator\">-</span>\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input flex--3\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [(ngModel)]=\"bireItemDTO.sheet\"\r\n          maxlength=\"5\"\r\n        />\r\n        <span class=\"separator\">-</span>\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input flex--3\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [(ngModel)]=\"bireItemDTO.marks\"\r\n          maxlength=\"5\"\r\n        />\r\n        <i\r\n          class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n          aria-hidden=\"true\"\r\n          *ngIf=\"!isReadOpenMode\"\r\n          (click)=\"searchItems()\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      [disabled]=\"\r\n        !bireItemDTO.chapter || !bireItemDTO.section || !bireItemDTO.subject || !bireItemDTO.sheet || !bireItemDTO.marks\r\n      \"\r\n      (click)=\"onValidate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-table\r\n  *ngIf=\"showItemDialog\"\r\n  [(display)]=\"showItemDialog\"\r\n  [data]=\"dialogTableDataItems\"\r\n  (onSelected)=\"setSelectedItems($event)\"\r\n></aw-dialog-table>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/item-father-popup/item-father-popup.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/item-father-popup/item-father-popup.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .separator {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9lbmdpbmVlcmluZy1tYW5hZ2VtZW50L2l0ZW0vZm9ybS9wb3B1cHMvaXRlbS1mYXRoZXItcG9wdXAvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcZW5naW5lZXJpbmctbWFuYWdlbWVudFxcaXRlbVxcZm9ybVxccG9wdXBzXFxpdGVtLWZhdGhlci1wb3B1cFxcaXRlbS1mYXRoZXItcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZW5naW5lZXJpbmctbWFuYWdlbWVudC9pdGVtL2Zvcm0vcG9wdXBzL2l0ZW0tZmF0aGVyLXBvcHVwL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQ3FCRSxhQUFhO0VBQ2IsbUJBQW1CO0VEbEJqQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vZW5naW5lZXJpbmctbWFuYWdlbWVudC9pdGVtL2Zvcm0vcG9wdXBzL2l0ZW0tZmF0aGVyLXBvcHVwL2l0ZW0tZmF0aGVyLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5zZXBhcmF0b3Ige1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufSIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/item-father-popup/item-father-popup.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/item-father-popup/item-father-popup.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ItemFatherPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFatherPopupComponent", function() { return ItemFatherPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/enums/table-column-filter-mode.enum */ "./src/app/shared/enums/table-column-filter-mode.enum.ts");
/* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/enums/table-selection-mode.enum */ "./src/app/shared/enums/table-selection-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _item_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
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







var ItemFatherPopupComponent = /** @class */ (function (_super) {
    __extends(ItemFatherPopupComponent, _super);
    function ItemFatherPopupComponent(messageService, itemFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'ItemFatherPopupComponent') || this;
        _this.messageService = messageService;
        _this.itemFormService = itemFormService;
        _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ItemFatherPopupComponent.prototype.ngOnInit = function () {
        this.bireItemDTO = {};
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            var indexThree = 3;
            var indexFour = 4;
            if (!!this.componentData.object) {
                var dto = this.componentData.object;
                this.bireItemDTO.chapter = dto.item.split('-')[0];
                this.bireItemDTO.section = dto.item.split('-')[1];
                this.bireItemDTO.subject = dto.item.split('-')[2];
                this.bireItemDTO.sheet = dto.item.split('-')[indexThree];
                this.bireItemDTO.marks = dto.item.split('-')[indexFour];
            }
        }
    };
    /**
     * Validate Screen
     */
    ItemFatherPopupComponent.prototype.onValidate = function () {
        var _this = this;
        this.isBireItemPresent(function (isItemInDb) {
            if (Object.keys(isItemInDb).length !== 0) {
                if (_this.validateScreen()) {
                    _this.onCreate.emit(_this.bireItemDTO);
                }
                else {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('entryOfValidRepairCenterisRequired'));
                }
            }
            else {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorBireItemNotExist'));
            }
        });
    };
    /**
     * Close popup
     */
    ItemFatherPopupComponent.prototype.onCancel = function () {
        this.display = false;
    };
    /**
     * Is required fields filled ?
     */
    ItemFatherPopupComponent.prototype.validateScreen = function () {
        if (!!this.bireItemDTO.chapter) {
            return true;
        }
        return false;
    };
    ItemFatherPopupComponent.prototype.setSelectedItems = function (selectedObject) {
        this.bireItemDTO = selectedObject;
        this.showItemDialog = false;
    };
    /**
     * Search Item OVS
     */
    ItemFatherPopupComponent.prototype.searchItems = function () {
        if (!this.isReadOpenMode) {
            this.showItemDialog = true;
            var itemCol = [
                { field: 'familyCode', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'structureType', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'variantCode', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'name', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'chapter', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'section', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'subject', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'sheet', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'marks', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'functionCode', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'itemNumber', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'itemType', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'flocType', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'itemFamily', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'configurableItem', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Tricheckbox }
            ];
            var bire = this.bireItemCloneDTO;
            bire.chapter = !!this.bireItemDTO.chapter ? this.bireItemDTO.chapter : undefined;
            bire.section = !!this.bireItemDTO.section ? this.bireItemDTO.section : undefined;
            bire.marks = !!this.bireItemDTO.marks ? this.bireItemDTO.marks : undefined;
            bire.sheet = !!this.bireItemDTO.sheet ? this.bireItemDTO.sheet : undefined;
            bire.subject = !!this.bireItemDTO.subject ? this.bireItemDTO.subject : undefined;
            var criteria = {
                bireItemDTOCriteria: bire
            };
            this.dialogTableDataItems = {
                componentId: 'ImpactsItemPopupDialog',
                tableCols: itemCol,
                tableRows: this.itemFormService.findBireItemsBySearchCriteria(criteria),
                dataKey: undefined,
                selectionMode: _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_3__["TableSelectionMode"].Single,
                globalFilter: true
            };
        }
    };
    /**
     * Chcking if item present in db
     */
    ItemFatherPopupComponent.prototype.isBireItemPresent = function (callback) {
        var _this = this;
        var bire = this.bireItemCloneDTO;
        var criteria = {
            bireItemDTOCriteria: bire
        };
        this.itemFormService.findBireItemsBySearchCriteria(criteria).subscribe(function (res) {
            var isFound = {};
            res.list.forEach(function (result) {
                var resultItem = result.chapter + "-" + result.section + "-" + result.subject + "-" + result.sheet + "-" + result.marks;
                var bireItem = _this.bireItemDTO.chapter + "-" + _this.bireItemDTO.section + "-" + _this.bireItemDTO.subject + "-" + _this.bireItemDTO.sheet + "-" + _this.bireItemDTO.marks;
                if (resultItem === bireItem) {
                    isFound = result;
                }
            });
            callback(isFound);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('component-data'),
        __metadata("design:type", Object)
    ], ItemFatherPopupComponent.prototype, "componentData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bireItemCloneDTO'),
        __metadata("design:type", Object)
    ], ItemFatherPopupComponent.prototype, "bireItemCloneDTO", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ItemFatherPopupComponent.prototype, "onCreate", void 0);
    ItemFatherPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-item-father-popup',
            template: __webpack_require__(/*! ./item-father-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/item-father-popup/item-father-popup.component.html"),
            styles: [__webpack_require__(/*! ./item-father-popup.component.scss */ "./src/app/main/engineering-management/item/form/popups/item-father-popup/item-father-popup.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _item_form_service__WEBPACK_IMPORTED_MODULE_6__["ItemFormService"]])
    ], ItemFatherPopupComponent);
    return ItemFatherPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/item-import-popup/item-import-popup.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/item-import-popup/item-import-popup.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".docManagement\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".docName\" | translate }}</label>\r\n\r\n        <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n          <div class=\"form-control-data\">\r\n            {{ document.docName }}\r\n          </div>\r\n\r\n          <div class=\"btn-file-upload-wrapper\">\r\n            <p-fileUpload\r\n              #fileUploader\r\n              *ngIf=\"!isReadOnlyForm\"\r\n              class=\"aw-fileupload\"\r\n              name=\"document[]\"\r\n              customUpload=\"true\"\r\n              mode=\"basic\"\r\n              auto=\"true\"\r\n              chooseLabel=\"\"\r\n              (uploadHandler)=\"uploadDocument($event, fileUploader)\"\r\n            ></p-fileUpload>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".docSource\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"document.docSource\" [disabled]=\"isReadOnlyForm\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".docPublicationDate\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <p-calendar\r\n            showButtonBar=\"true\"\r\n            [monthNavigator]=\"true\"\r\n            [yearNavigator]=\"true\"\r\n            [yearRange]=\"sessionService.calendarYearRange\"\r\n            class=\"aw-calendar\"\r\n            [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n            [locale]=\"sessionService.calendarFormat\"\r\n            [(ngModel)]=\"document.docPublicationDate\"\r\n            [disabled]=\"isReadOnlyForm\"\r\n            appendTo=\"body\"\r\n          ></p-calendar>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".docDescription\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <textarea\r\n            class=\"aw-textarea\"\r\n            [rows]=\"3\"\r\n            pInputTextarea\r\n            [(ngModel)]=\"document.docDescription\"\r\n            [disabled]=\"isReadOnlyForm\"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">{{ \"global.cancel\" | translate }}</button>\r\n    <button\r\n      *ngIf=\"!isReadOnlyForm\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      (click)=\"validate()\"\r\n      [disabled]=\"!document.docFile && !document.docSource\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/item-import-popup/item-import-popup.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/item-import-popup/item-import-popup.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ItemImportPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemImportPopupComponent", function() { return ItemImportPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
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





var ItemImportPopupComponent = /** @class */ (function (_super) {
    __extends(ItemImportPopupComponent, _super);
    function ItemImportPopupComponent(sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'SbadFormComponent') || this;
        _this.sessionService = sessionService;
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    Object.defineProperty(ItemImportPopupComponent.prototype, "display", {
        get: function () {
            return this.displayValue;
        },
        set: function (displayValue) {
            this.displayValue = displayValue;
            this.displayChange.emit(this.displayValue);
        },
        enumerable: true,
        configurable: true
    });
    ItemImportPopupComponent.prototype.ngOnInit = function () {
        if (!this.document) {
            this.document = {};
        }
    };
    ItemImportPopupComponent.prototype.cancel = function () {
        this.display = false;
    };
    ItemImportPopupComponent.prototype.validate = function () {
        this.onValidated.emit(this.document);
        this.display = false;
    };
    ItemImportPopupComponent.prototype.uploadDocument = function (event, fileUploader) {
        var _this = this;
        if (event.files) {
            var file_1 = event.files[0];
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_4__["FileUtils"].getFileContentAsBase64(file_1, function (fileContent) {
                if (fileContent) {
                    _this.document.docFile = fileContent;
                    _this.document.docName = file_1.name;
                    _this.document.docPublicationDate = new Date();
                    _this.document.docType = _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_4__["FileUtils"].getExtension(file_1.name).toUpperCase();
                }
            });
            fileUploader.clear();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ItemImportPopupComponent.prototype, "display", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ItemImportPopupComponent.prototype, "displayChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemImportPopupComponent.prototype, "document", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ItemImportPopupComponent.prototype, "isReadOnlyForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ItemImportPopupComponent.prototype, "onValidated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ItemImportPopupComponent.prototype, "types", void 0);
    ItemImportPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-item-import-popup',
            template: __webpack_require__(/*! ./item-import-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/item-import-popup/item-import-popup.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], ItemImportPopupComponent);
    return ItemImportPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/item-son-popup/item-son-popup.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/item-son-popup/item-son-popup.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" width=\"15\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".itemSonManagement\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".item\" | translate }}</label>\r\n      <div class=\"form-control display--flex-row\">\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input flex--1\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [(ngModel)]=\"bireItemDTO.chapter\"\r\n          maxlength=\"2\"\r\n        />\r\n        <span class=\"separator\">-</span>\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input flex--1\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [(ngModel)]=\"bireItemDTO.section\"\r\n          maxlength=\"2\"\r\n        />\r\n        <span class=\"separator\">-</span>\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input flex--1\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [(ngModel)]=\"bireItemDTO.subject\"\r\n          maxlength=\"2\"\r\n        />\r\n        <span class=\"separator\">-</span>\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input flex--3\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [(ngModel)]=\"bireItemDTO.sheet\"\r\n          maxlength=\"5\"\r\n        />\r\n        <span class=\"separator\">-</span>\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input flex--3\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [(ngModel)]=\"bireItemDTO.marks\"\r\n          maxlength=\"5\"\r\n        />\r\n        <i\r\n          class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n          aria-hidden=\"true\"\r\n          *ngIf=\"!isReadOpenMode\"\r\n          (click)=\"searchItems()\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      [disabled]=\"\r\n        !bireItemDTO.chapter || !bireItemDTO.section || !bireItemDTO.subject || !bireItemDTO.sheet || !bireItemDTO.marks\r\n      \"\r\n      (click)=\"onValidate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-table\r\n  *ngIf=\"showItemDialog\"\r\n  [(display)]=\"showItemDialog\"\r\n  [data]=\"dialogTableDataItems\"\r\n  (onSelected)=\"setSelectedItems($event)\"\r\n></aw-dialog-table>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/item-son-popup/item-son-popup.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/item-son-popup/item-son-popup.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .separator {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9lbmdpbmVlcmluZy1tYW5hZ2VtZW50L2l0ZW0vZm9ybS9wb3B1cHMvaXRlbS1zb24tcG9wdXAvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcZW5naW5lZXJpbmctbWFuYWdlbWVudFxcaXRlbVxcZm9ybVxccG9wdXBzXFxpdGVtLXNvbi1wb3B1cFxcaXRlbS1zb24tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZW5naW5lZXJpbmctbWFuYWdlbWVudC9pdGVtL2Zvcm0vcG9wdXBzL2l0ZW0tc29uLXBvcHVwL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQ3FCRSxhQUFhO0VBQ2IsbUJBQW1CO0VEbEJqQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vZW5naW5lZXJpbmctbWFuYWdlbWVudC9pdGVtL2Zvcm0vcG9wdXBzL2l0ZW0tc29uLXBvcHVwL2l0ZW0tc29uLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5zZXBhcmF0b3Ige1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufSIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/item-son-popup/item-son-popup.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/item-son-popup/item-son-popup.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ItemSonPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSonPopupComponent", function() { return ItemSonPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/enums/table-column-filter-mode.enum */ "./src/app/shared/enums/table-column-filter-mode.enum.ts");
/* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/enums/table-selection-mode.enum */ "./src/app/shared/enums/table-selection-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _item_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
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







var ItemSonPopupComponent = /** @class */ (function (_super) {
    __extends(ItemSonPopupComponent, _super);
    function ItemSonPopupComponent(messageService, itemFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'ItemSonPopupComponent') || this;
        _this.messageService = messageService;
        _this.itemFormService = itemFormService;
        _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ItemSonPopupComponent.prototype.ngOnInit = function () {
        this.bireItemDTO = {};
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            var indexThree = 3;
            var indexFour = 4;
            if (!!this.componentData.object) {
                var dto = this.componentData.object;
                this.bireItemDTO.chapter = dto.item.split('-')[0];
                this.bireItemDTO.section = dto.item.split('-')[1];
                this.bireItemDTO.subject = dto.item.split('-')[2];
                this.bireItemDTO.sheet = dto.item.split('-')[indexThree];
                this.bireItemDTO.marks = dto.item.split('-')[indexFour];
            }
        }
    };
    /**
     * Validate Screen
     */
    ItemSonPopupComponent.prototype.onValidate = function () {
        var _this = this;
        this.isBireItemPresent(function (isItemInDb) {
            if (Object.keys(isItemInDb).length !== 0) {
                _this.bireItemDTO = isItemInDb;
                if (_this.validateScreen()) {
                    _this.onCreate.emit(_this.bireItemDTO);
                }
                else {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('entryOfValidRepairCenterisRequired'));
                }
            }
            else {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorBireItemNotExist'));
            }
        });
    };
    /**
     * Close popup
     */
    ItemSonPopupComponent.prototype.onCancel = function () {
        this.display = false;
    };
    /**
     * Is required fields filled ?
     */
    ItemSonPopupComponent.prototype.validateScreen = function () {
        if (!!this.bireItemDTO.chapter) {
            return true;
        }
        return false;
    };
    ItemSonPopupComponent.prototype.setSelectedItems = function (selectedObject) {
        this.bireItemDTO = selectedObject;
        this.showItemDialog = false;
    };
    /**
     * Search Item OVS
     */
    ItemSonPopupComponent.prototype.searchItems = function () {
        if (!this.isReadOpenMode) {
            this.showItemDialog = true;
            var itemCol = [
                { field: 'familyCode', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'structureType', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'variantCode', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'name', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'chapter', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'section', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'subject', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'sheet', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'marks', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'functionCode', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'itemNumber', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'itemType', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'flocType', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'itemFamily', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input },
                { field: 'configurableItem', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Tricheckbox }
            ];
            var bire = this.bireItemCloneDTO;
            bire.chapter = !!this.bireItemDTO.chapter ? this.bireItemDTO.chapter : undefined;
            bire.section = !!this.bireItemDTO.section ? this.bireItemDTO.section : undefined;
            bire.marks = !!this.bireItemDTO.marks ? this.bireItemDTO.marks : undefined;
            bire.sheet = !!this.bireItemDTO.sheet ? this.bireItemDTO.sheet : undefined;
            bire.subject = !!this.bireItemDTO.subject ? this.bireItemDTO.subject : undefined;
            var criteria = {
                bireItemDTOCriteria: bire
            };
            this.dialogTableDataItems = {
                componentId: 'ImpactsItemPopupDialog',
                tableCols: itemCol,
                tableRows: this.itemFormService.findBireItemsBySearchCriteria(criteria),
                dataKey: undefined,
                selectionMode: _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_3__["TableSelectionMode"].Single,
                globalFilter: true
            };
        }
    };
    /**
     * Chcking if item present in db
     */
    ItemSonPopupComponent.prototype.isBireItemPresent = function (callback) {
        var _this = this;
        var bire = this.bireItemCloneDTO;
        var criteria = {
            bireItemDTOCriteria: bire
        };
        this.itemFormService.findBireItemsBySearchCriteria(criteria).subscribe(function (res) {
            var isFound = {};
            res.list.forEach(function (result) {
                var resultItem = result.chapter + "-" + result.section + "-" + result.subject + "-" + result.sheet + "-" + result.marks;
                var bireItem = _this.bireItemDTO.chapter + "-" + _this.bireItemDTO.section + "-" + _this.bireItemDTO.subject + "-" + _this.bireItemDTO.sheet + "-" + _this.bireItemDTO.marks;
                if (resultItem === bireItem) {
                    isFound = result;
                }
            });
            callback(isFound);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('component-data'),
        __metadata("design:type", Object)
    ], ItemSonPopupComponent.prototype, "componentData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bireItemCloneDTO'),
        __metadata("design:type", Object)
    ], ItemSonPopupComponent.prototype, "bireItemCloneDTO", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ItemSonPopupComponent.prototype, "onCreate", void 0);
    ItemSonPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-item-son-popup',
            template: __webpack_require__(/*! ./item-son-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/item-son-popup/item-son-popup.component.html"),
            styles: [__webpack_require__(/*! ./item-son-popup.component.scss */ "./src/app/main/engineering-management/item/form/popups/item-son-popup/item-son-popup.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _item_form_service__WEBPACK_IMPORTED_MODULE_6__["ItemFormService"]])
    ], ItemSonPopupComponent);
    return ItemSonPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/item-version-popup/item-version-popup.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/item-version-popup/item-version-popup.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".itemVersionManagement\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".versionNumber\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input\"\r\n          maxlength=\"50\"\r\n          [(ngModel)]=\"getPartNumberStructureOutputDTO.versionNumber\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      [disabled]=\"!getPartNumberStructureOutputDTO.versionNumber\"\r\n      (click)=\"onValidate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/item-version-popup/item-version-popup.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/item-version-popup/item-version-popup.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ItemVersionPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemVersionPopupComponent", function() { return ItemVersionPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
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




var ItemVersionPopupComponent = /** @class */ (function (_super) {
    __extends(ItemVersionPopupComponent, _super);
    function ItemVersionPopupComponent(messageService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'ItemVersionPopupComponent') || this;
        _this.messageService = messageService;
        _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ItemVersionPopupComponent.prototype.ngOnInit = function () {
        this.getPartNumberStructureOutputDTO = {};
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            if (!!this.componentData.object) {
                this.getPartNumberStructureOutputDTO = this.componentData.object;
            }
        }
    };
    /**
     * Validate Screen
     */
    ItemVersionPopupComponent.prototype.onValidate = function () {
        if (this.validateScreen()) {
            this.onCreate.emit(this.getPartNumberStructureOutputDTO);
            this.closeDialog();
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidVersionisRequired'));
        }
    };
    /**
     * Close popup
     */
    ItemVersionPopupComponent.prototype.onCancel = function () {
        this.display = false;
    };
    /**
     * Is required fields filled ?
     */
    ItemVersionPopupComponent.prototype.validateScreen = function () {
        if (!!this.getPartNumberStructureOutputDTO.versionNumber) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('component-data'),
        __metadata("design:type", Object)
    ], ItemVersionPopupComponent.prototype, "componentData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ItemVersionPopupComponent.prototype, "onCreate", void 0);
    ItemVersionPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-item-version-popup',
            template: __webpack_require__(/*! ./item-version-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/item-version-popup/item-version-popup.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], ItemVersionPopupComponent);
    return ItemVersionPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/localisation-popup/localisation-list-popup/localisation-list-popup.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/localisation-popup/localisation-list-popup/localisation-list-popup.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"30\">\r\n  <a-header>\r\n    <div class=\"modal-title\">\r\n      {{ getComponentName() + \".localisationList\" | translate }} ({{ localisationDataSource.dataCount }})\r\n    </div>\r\n  </a-header>\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <div class=\"form-control\">\r\n        <a-table [dataSource]=\"localisationDataSource\"> </a-table>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      [disabled]=\"!localisationDataSource.hasDataSelection\"\r\n      (click)=\"onValidate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/localisation-popup/localisation-list-popup/localisation-list-popup.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/localisation-popup/localisation-list-popup/localisation-list-popup.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: LocalisationListPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalisationListPopupComponent", function() { return LocalisationListPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _item_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
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






var LocalisationListPopupComponent = /** @class */ (function (_super) {
    __extends(LocalisationListPopupComponent, _super);
    function LocalisationListPopupComponent(messageService, itemFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'LocalisationListPopupComponent') || this;
        _this.messageService = messageService;
        _this.itemFormService = itemFormService;
        _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    LocalisationListPopupComponent.prototype.ngOnInit = function () {
        this.localisationDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["TableDataSource"]({
            allowMultiSelect: false,
            columns: [
                {
                    field: 'localisationCode',
                    translateKey: this.getTranslateKey('localisationCode')
                }
            ],
            data: []
        });
        this.getLocalisationList();
    };
    LocalisationListPopupComponent.prototype.getLocalisationList = function () {
        var _this = this;
        this.itemFormService
            .findBireLocalisationCodesByCriteria()
            .subscribe(function (result) {
            _this.localisationDataSource.setData(result.list);
        });
    };
    /**
     * Validate Screen
     */
    LocalisationListPopupComponent.prototype.onValidate = function () {
        if (this.validateScreen()) {
            this.onCreate.emit(this.localisationDataSource.dataSelection[0]);
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidDamageIsRequired'));
        }
        this.display = false;
    };
    /**
     * Close popup
     */
    LocalisationListPopupComponent.prototype.onCancel = function () {
        this.display = false;
    };
    /**
     * Is required fields filled ?
     */
    LocalisationListPopupComponent.prototype.validateScreen = function () {
        if (!!this.localisationDataSource.dataSelection[0].localisationCode) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LocalisationListPopupComponent.prototype, "onCreate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('versionNumber'),
        __metadata("design:type", String)
    ], LocalisationListPopupComponent.prototype, "versionNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bireItemDTOId'),
        __metadata("design:type", Object)
    ], LocalisationListPopupComponent.prototype, "bireItemDTOId", void 0);
    LocalisationListPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-localisation-list-popup',
            template: __webpack_require__(/*! ./localisation-list-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/localisation-popup/localisation-list-popup/localisation-list-popup.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _item_form_service__WEBPACK_IMPORTED_MODULE_5__["ItemFormService"]])
    ], LocalisationListPopupComponent);
    return LocalisationListPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/localisation-popup/localisation-popup.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/localisation-popup/localisation-popup.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".localisationManagement\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".itemVersion\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [showClear]=\"true\"\r\n          [options]=\"itemVersionList\"\r\n          [(ngModel)]=\"versionNumber\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".localisationCode\" | translate }}</label>\r\n\r\n      <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n        <div class=\"form-control-data\" (click)=\"showLocalisationDialog()\">\r\n          {{ bireLocalisationItemDTO.localisationCode }}\r\n        </div>\r\n\r\n        <div *ngIf=\"bireLocalisationItemDTO.localisationCode\" class=\"btn-clear-wrapper\">\r\n          <i\r\n            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n            aria-hidden=\"true\"\r\n            (click)=\"bireLocalisationItemDTO.localisationCode = undefined\"\r\n          ></i>\r\n        </div>\r\n        <div class=\"btn-search-wrapper\">\r\n          <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\" (click)=\"showLocalisationDialog()\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".localisationDescription\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input\"\r\n          maxlength=\"50\"\r\n          [(ngModel)]=\"bireLocalisationItemDTO.localisationDescription\"\r\n          [disabled]=\"true\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      [disabled]=\"!versionNumber || !bireLocalisationItemDTO.localisationCode\"\r\n      (click)=\"onValidate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-localisation-list-popup\r\n  *ngIf=\"showLocalisationListDialog\"\r\n  [(display)]=\"showLocalisationListDialog\"\r\n  (onCreate)=\"setSelectedItems($event)\"\r\n></aw-localisation-list-popup>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/localisation-popup/localisation-popup.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/localisation-popup/localisation-popup.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: LocalisationPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalisationPopupComponent", function() { return LocalisationPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _item_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
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





var LocalisationPopupComponent = /** @class */ (function (_super) {
    __extends(LocalisationPopupComponent, _super);
    function LocalisationPopupComponent(messageService, itemFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'LocalisationPopupComponent') || this;
        _this.messageService = messageService;
        _this.itemFormService = itemFormService;
        _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    LocalisationPopupComponent.prototype.ngOnInit = function () {
        this.bireLocalisationItemDTO = {};
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            if (!!this.componentData.object) {
                this.bireLocalisationItemDTO = {
                    localisationCode: this.componentData.object.localisationCode
                };
                if (!!this.componentData.object.versionNumber) {
                    this.versionNumber = this.componentData.object.versionNumber;
                }
            }
        }
        this.renderDropdown();
    };
    LocalisationPopupComponent.prototype.renderDropdown = function () {
        var _this = this;
        this.itemFormService.findBireItemVersions(this.bireItemDTOId).subscribe(function (results) {
            _this.itemVersionList = results;
        });
    };
    /**
     * Validate Screen
     */
    LocalisationPopupComponent.prototype.onValidate = function () {
        if (this.validateScreen()) {
            this.onCreate.emit(this.bireLocalisationItemDTO);
            this.display = false;
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidRepairCenterisRequired'));
        }
    };
    /**
     * Close popup
     */
    LocalisationPopupComponent.prototype.onCancel = function () {
        this.display = false;
    };
    /**
     * Is required fields filled ?
     */
    LocalisationPopupComponent.prototype.validateScreen = function () {
        if (!!this.bireLocalisationItemDTO.localisationCode && !!this.bireLocalisationItemDTO.versionNumber) {
            return true;
        }
        return false;
    };
    LocalisationPopupComponent.prototype.setSelectedItems = function (ev) {
        this.bireLocalisationItemDTO = ev;
        this.bireLocalisationItemDTO.versionNumber = this.versionNumber;
        this.showLocalisationListDialog = true;
    };
    LocalisationPopupComponent.prototype.showLocalisationDialog = function () {
        this.showLocalisationListDialog = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('component-data'),
        __metadata("design:type", Object)
    ], LocalisationPopupComponent.prototype, "componentData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bireItemDTOId'),
        __metadata("design:type", Object)
    ], LocalisationPopupComponent.prototype, "bireItemDTOId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LocalisationPopupComponent.prototype, "onCreate", void 0);
    LocalisationPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-localisation-popup',
            template: __webpack_require__(/*! ./localisation-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/localisation-popup/localisation-popup.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _item_form_service__WEBPACK_IMPORTED_MODULE_4__["ItemFormService"]])
    ], LocalisationPopupComponent);
    return LocalisationPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/reference-measurement-popup/reference-measurement-popup.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/reference-measurement-popup/reference-measurement-popup.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" width=\"30\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".referenceMeasurement\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".itemVersion\" | translate }}</label>\r\n        <div class=\"form-control\">\r\n          <p-dropdown\r\n            class=\"aw-dropdown fixed-width\"\r\n            placeholder=\"&nbsp;\"\r\n            [showClear]=\"true\"\r\n            [options]=\"itemVersionList\"\r\n            [(ngModel)]=\"itemVersion\"\r\n            [disabled]=\"isReadOpenMode || !isEditable\"\r\n            appendTo=\"body\"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".measureCode\" | translate }}</label>\r\n\r\n        <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode || !isEditable }\">\r\n          <div class=\"form-control-data\" (click)=\"showCounterCode()\">{{ currentRef.counterCode }}</div>\r\n\r\n          <div *ngIf=\"currentRef.counterCode\" class=\"btn-clear-wrapper\">\r\n            <i\r\n              class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n              aria-hidden=\"true\"\r\n              *ngIf=\"isReadOpenMode || isEditable\"\r\n              (click)=\"currentRef.counterCode = undefined\"\r\n            ></i>\r\n          </div>\r\n          <div class=\"btn-search-wrapper\">\r\n            <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\" (click)=\"showCounterCode()\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\" *ngIf=\"isFollowedInRating\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".ratingCode\" | translate }}</label>\r\n\r\n        <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode || !isEditable }\">\r\n          <div class=\"form-control-data\" (click)=\"showRating()\">{{ bireVersionMeasureDTO.ratingCode }}</div>\r\n\r\n          <div *ngIf=\"bireVersionMeasureDTO.ratingCode\" class=\"btn-clear-wrapper\">\r\n            <i\r\n              class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n              aria-hidden=\"true\"\r\n              *ngIf=\"isReadOpenMode || isEditable\"\r\n              (click)=\"bireVersionMeasureDTO.ratingCode = undefined\"\r\n            ></i>\r\n          </div>\r\n          <div class=\"btn-search-wrapper\">\r\n            <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\" (click)=\"showRating()\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\" *ngIf=\"isFollowedInRating\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".ratingName\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" maxlength=\"50\" [(ngModel)]=\"bireRatingDTO.ratingName\" [disabled]=\"true\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"display--flex-row\">\r\n        <div class=\"form-group min-width--fit-content\">\r\n          <label class=\"form-label\">&nbsp;</label>\r\n\r\n          <div class=\"form-control aw-selectbutton-wrapper\">\r\n            <p-selectButton [(ngModel)]=\"radLimit\" [options]=\"limitList\"></p-selectButton>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"radLimit === 'limitValue'\" class=\"form-group\">\r\n          <label class=\"form-label\">&nbsp;</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input type=\"number\" class=\"aw-input\" maxlength=\"30\" [(ngModel)]=\"bireVersionMeasureDTO.referenceValue\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"radLimit === 'limitDate'\" class=\"form-group\">\r\n          <label class=\"form-label\">&nbsp;</label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-calendar\r\n              showButtonBar=\"true\"\r\n              [monthNavigator]=\"true\"\r\n              [yearNavigator]=\"true\"\r\n              [yearRange]=\"sessionService.calendarYearRange\"\r\n              class=\"aw-calendar\"\r\n              [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n              [locale]=\"sessionService.calendarFormat\"\r\n              [(ngModel)]=\"bireVersionMeasureDTO.limitDate\"\r\n              appendTo=\"body\"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      [disabled]=\"!itemVersion || !currentRef.counterCode || (!bireVersionMeasureDTO.ratingCode && isFollowedInRating)\"\r\n      (click)=\"onValidate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-table\r\n  *ngIf=\"showCounterCodeDialog\"\r\n  [(display)]=\"showCounterCodeDialog\"\r\n  [data]=\"dialogTableDataCounterCode\"\r\n  [keyMap]=\"keyMap\"\r\n  (onSelected)=\"setSelectedCounterCode($event)\"\r\n></aw-dialog-table>\r\n\r\n<aw-dialog-search-rating\r\n  *ngIf=\"showRatingDialog\"\r\n  [(display)]=\"showRatingDialog\"\r\n  (onSelected)=\"setSelectedRating($event)\"\r\n  [structure-type]=\"bireItemDTOId.structureType\"\r\n  [family-code]=\"bireItemDTOId.familyCode\"\r\n></aw-dialog-search-rating>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/reference-measurement-popup/reference-measurement-popup.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/reference-measurement-popup/reference-measurement-popup.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: ReferenceMeasurementPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceMeasurementPopupComponent", function() { return ReferenceMeasurementPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_bire_rating_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/constants/bire-rating-constants */ "./src/app/shared/constants/bire-rating-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/enums/table-column-filter-mode.enum */ "./src/app/shared/enums/table-column-filter-mode.enum.ts");
/* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/enums/table-selection-mode.enum */ "./src/app/shared/enums/table-selection-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../shared/utils/bido-family-variant-utils */ "./src/app/shared/utils/bido-family-variant-utils.ts");
/* harmony import */ var _form_item_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../form/item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
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














var ReferenceMeasurementPopupComponent = /** @class */ (function (_super) {
    __extends(ReferenceMeasurementPopupComponent, _super);
    function ReferenceMeasurementPopupComponent(sessionService, itemFormService, messageService, propertiesService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Write, 'ReferenceMeasurementPopupComponent') || this;
        _this.sessionService = sessionService;
        _this.itemFormService = itemFormService;
        _this.messageService = messageService;
        _this.propertiesService = propertiesService;
        _this.translateService = translateService;
        _this.radLimit = 'limitValue';
        _this.isEditable = true;
        _this.isFollowedInRating = false;
        _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.init();
        _this.initKeyMap();
        _this.setLimitList();
        return _this;
    }
    ReferenceMeasurementPopupComponent.prototype.init = function () {
        this.bireVersionMeasureDTO = {};
        this.currentRef = {};
        this.bireRatingDTO = {};
    };
    ReferenceMeasurementPopupComponent.prototype.initKeyMap = function () {
        this.keyMap = new Map();
        this.keyMap.set('mrCategory', this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__["GenericPropertyConstants"].REF_MEASURE_CATEGORY_MAP));
    };
    ReferenceMeasurementPopupComponent.prototype.ngOnInit = function () {
        this.renderDropdown();
        this.searchCounterCode();
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            this.defineIfFollowedInRating();
            if (!!this.componentData && !!this.componentData.object && !this.isEmpty(this.componentData.object)) {
                this.isEditable = false;
                this.bireVersionMeasureDTO = this.componentData.object;
                if (!!this.bireVersionMeasureDTO.ratingCode) {
                    this.getRatingName(this.bireVersionMeasureDTO.ratingCode);
                }
                if (!!this.componentData.object.counterCode) {
                    this.currentRef.counterCode = this.componentData.object.counterCode;
                }
                if (!!this.componentData.object.limitDate) {
                    this.radLimit = 'limitDate';
                }
            }
        }
    };
    ReferenceMeasurementPopupComponent.prototype.defineIfFollowedInRating = function () {
        var _this = this;
        if (!this.bireItemDTOId) {
            return;
        }
        var familyVariantCode = _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_12__["BidoFamilyVariantUtils"].buildFamilyVariantCode(this.bireItemDTOId.familyCode, this.bireItemDTOId.variantCode);
        if (!familyVariantCode) {
            return;
        }
        this.itemFormService.isFollowedInRating(familyVariantCode).subscribe(function (data) {
            _this.isFollowedInRating = data;
        });
    };
    ReferenceMeasurementPopupComponent.prototype.isEmpty = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    ReferenceMeasurementPopupComponent.prototype.renderDropdown = function () {
        var _this = this;
        this.itemFormService.findBireItemVersions(this.bireItemDTOId).subscribe(function (results) {
            _this.itemVersionList = results;
            if (_this.componentData) {
                if (!!_this.componentData && !!_this.componentData.object && !!_this.componentData.object.versionNumber) {
                    _this.itemVersion = _this.componentData.object.versionNumber;
                }
            }
        });
    };
    /**
     * Validate Screen
     */
    ReferenceMeasurementPopupComponent.prototype.onValidate = function () {
        if (this.validateScreen()) {
            var max = 1000000;
            if (!this.isFollowedInRating) {
                this.bireVersionMeasureDTO.ratingCode = _shared_constants_bire_rating_constants__WEBPACK_IMPORTED_MODULE_3__["BireRatingConstants"].DEFAULT;
            }
            // tslint:disable-next-line:radix
            if (!!this.bireVersionMeasureDTO.referenceValue && parseInt(this.bireVersionMeasureDTO.referenceValue) > max) {
                this.messageService.showErrorMessage(this.getTranslateKey('enterSmallerValue'));
            }
            else {
                if (!!this.componentData && this.isEmpty(this.componentData.object)) {
                    this.onCreate.emit(this.bireVersionMeasureDTO);
                }
                else {
                    this.onUpdate.emit(this.bireVersionMeasureDTO);
                }
                this.display = false;
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidRepairCenterisRequired'));
        }
    };
    /**
     * Close popup
     */
    ReferenceMeasurementPopupComponent.prototype.onCancel = function () {
        this.init();
        this.display = false;
    };
    /**
     * Is required fields filled ?
     */
    ReferenceMeasurementPopupComponent.prototype.validateScreen = function () {
        this.bireVersionMeasureDTO.counterCode = this.currentRef.counterCode;
        this.bireVersionMeasureDTO.versionNumber = this.itemVersion;
        if (!!this.bireVersionMeasureDTO.counterCode && !!this.bireVersionMeasureDTO.versionNumber) {
            return true;
        }
        return false;
    };
    ReferenceMeasurementPopupComponent.prototype.showCounterCode = function () {
        if (this.isEditable) {
            this.showCounterCodeDialog = true;
        }
    };
    ReferenceMeasurementPopupComponent.prototype.showRating = function () {
        if (this.isEditable) {
            this.showRatingDialog = true;
        }
    };
    /**
     * Search for counter code
     */
    ReferenceMeasurementPopupComponent.prototype.searchCounterCode = function () {
        var counterTable = [
            { field: 'counterCode', width: '12.5%', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__["TableColumnFilterMode"].Input, alignment: 'left' },
            { field: 'unitCode', width: '7.5%', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__["TableColumnFilterMode"].Input, alignment: 'left' },
            { field: 'mrCategory', width: '10%', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__["TableColumnFilterMode"].Input, alignment: 'left' },
            { field: 'counterRemarks', width: '40%', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__["TableColumnFilterMode"].Input, alignment: 'left' },
            { field: 'minRemainPercent', width: '12.5%', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__["TableColumnFilterMode"].Input, alignment: 'left' },
            { field: 'isCounter', width: '7.5%', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__["TableColumnFilterMode"].Tricheckbox, alignment: 'center' },
            { field: 'propagationAllowed', width: '10%', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_6__["TableColumnFilterMode"].Tricheckbox, alignment: 'center' }
        ];
        var bireMeasureReferenceDTO = {};
        this.dialogTableDataCounterCode = {
            componentId: 'CounterCodePopup',
            tableCols: counterTable,
            tableRows: this.itemFormService.findAllBireMeasureReferenceByCriteria(bireMeasureReferenceDTO).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
                return {
                    list: results,
                    moreResults: false
                };
            })),
            dataKey: undefined,
            selectionMode: _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_7__["TableSelectionMode"].Single,
            globalFilter: true
        };
    };
    /**
     * Gets rating name
     */
    ReferenceMeasurementPopupComponent.prototype.getRatingName = function (code) {
        var _this = this;
        var searchObject = {
            familyCode: this.bireItemDTOId.familyCode,
            structureType: this.bireItemDTOId.structureType,
            ratingCode: code
        };
        this.itemFormService
            .findBireRatingsBySearchCriteria(searchObject, this.bireItemDTOId.variantCode)
            .subscribe(function (results) {
            if (results && results.list) {
                _this.bireRatingDTO.ratingName = results.list[0].ratingName;
            }
        });
    };
    /**
     * Event on setting counter code
     */
    ReferenceMeasurementPopupComponent.prototype.setSelectedCounterCode = function (selectedObject) {
        if (selectedObject) {
            this.currentRef.counterCode = selectedObject.counterCode;
        }
        this.showCounterCodeDialog = false;
    };
    /**
     * Event on setting rating
     */
    ReferenceMeasurementPopupComponent.prototype.setSelectedRating = function (ev) {
        this.bireVersionMeasureDTO.ratingCode = ev.ratingCode;
        this.bireRatingDTO.ratingName = ev.ratingName;
    };
    /**
     * Event on date change
     */
    ReferenceMeasurementPopupComponent.prototype.changeRad = function () {
        this.bireVersionMeasureDTO.referenceValue = undefined;
        this.bireVersionMeasureDTO.limitDate = undefined;
    };
    ReferenceMeasurementPopupComponent.prototype.setLimitList = function () {
        var _this = this;
        var limitValueKey = this.getTranslateKey('limitValue');
        var limitDateKey = this.getTranslateKey('limitDate');
        this.translateService.get([limitValueKey, limitDateKey]).subscribe(function (results) {
            var limitValueLabel = results ? results[limitValueKey] : 'Limit Value';
            var limitDateLabel = results ? results[limitDateKey] : 'Limit Date';
            _this.limitList = [{ label: limitValueLabel, value: 'limitValue' }, { label: limitDateLabel, value: 'limitDate' }];
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('component-data'),
        __metadata("design:type", Object)
    ], ReferenceMeasurementPopupComponent.prototype, "componentData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ReferenceMeasurementPopupComponent.prototype, "onCreate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ReferenceMeasurementPopupComponent.prototype, "onUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bireItemDTOId'),
        __metadata("design:type", Object)
    ], ReferenceMeasurementPopupComponent.prototype, "bireItemDTOId", void 0);
    ReferenceMeasurementPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-reference-measurement-popup',
            template: __webpack_require__(/*! ./reference-measurement-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/reference-measurement-popup/reference-measurement-popup.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"],
            _form_item_form_service__WEBPACK_IMPORTED_MODULE_13__["ItemFormService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__["PropertiesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ReferenceMeasurementPopupComponent);
    return ReferenceMeasurementPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/repair-center-popup/repair-center-popup.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/repair-center-popup/repair-center-popup.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".repairCenterMangement\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".repairCenter\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [showClear]=\"true\"\r\n          [options]=\"repairCenterList\"\r\n          [(ngModel)]=\"bireItemSiteDTO.repairCenterCode\"\r\n          [disabled]=\"isReadOpenMode || !isEditable\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".exchangeType\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [showClear]=\"true\"\r\n          [options]=\"exchangeTypeList\"\r\n          [(ngModel)]=\"bireItemSiteDTO.exchangeType\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      [disabled]=\"!bireItemSiteDTO.repairCenterCode\"\r\n      (click)=\"onValidate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/repair-center-popup/repair-center-popup.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/repair-center-popup/repair-center-popup.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: RepairCenterPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepairCenterPopupComponent", function() { return RepairCenterPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _form_item_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../form/item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
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







var RepairCenterPopupComponent = /** @class */ (function (_super) {
    __extends(RepairCenterPopupComponent, _super);
    function RepairCenterPopupComponent(itemFormService, messageService, propertiesService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'RepairCenterPopupComponent') || this;
        _this.itemFormService = itemFormService;
        _this.messageService = messageService;
        _this.propertiesService = propertiesService;
        _this.isEditable = true;
        _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.init();
        return _this;
    }
    /**
     * Init screen
     */
    RepairCenterPopupComponent.prototype.init = function () {
        this.bireItemSiteDTO = {};
        this.repairCenterList = [];
        this.exchangeTypeList = [];
    };
    RepairCenterPopupComponent.prototype.ngOnInit = function () {
        // Get dropdown list
        this.initilizeDropdowns();
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            if (!!this.componentData && !!this.componentData.object && !this.isEmpty(this.componentData.object)) {
                this.isEditable = false;
                this.bireItemSiteDTO = this.componentData.object;
            }
        }
    };
    RepairCenterPopupComponent.prototype.initilizeDropdowns = function () {
        var _this = this;
        // exchangeTypeList
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__["GenericPropertyConstants"].EXCHANGE_TYPE_MAP).subscribe(function (results) {
            _this.exchangeTypeList = results;
            if (_this.componentData) {
                _this.bireItemSiteDTO =
                    !!_this.componentData && !!_this.componentData.object && !_this.isEmpty(_this.componentData.object)
                        ? _this.componentData.object
                        : {};
            }
        });
        // Repair Center List
        this.itemFormService.findAllBireSites().subscribe(function (results) {
            results.forEach(function (res) {
                res.label = res.value + "-" + res.label;
                if (res.value === 'Air base 1') {
                    res.label = 'Air base 1';
                }
            });
            _this.repairCenterList = results;
            if (_this.componentData) {
                _this.bireItemSiteDTO =
                    !!_this.componentData && !!_this.componentData.object && !_this.isEmpty(_this.componentData.object)
                        ? _this.componentData.object
                        : {};
            }
            if (!!_this.componentData && _this.isEmpty(_this.componentData.object)) {
                _this.bireItemSiteDTO.repairCenterCode = results[0].value;
            }
        });
    };
    /**
     * Validate Screen
     */
    RepairCenterPopupComponent.prototype.onValidate = function () {
        if (this.validateScreen()) {
            if (!!this.componentData && this.isEmpty(this.componentData.object)) {
                this.onCreate.emit(this.bireItemSiteDTO);
            }
            else {
                this.onUpdate.emit(this.bireItemSiteDTO);
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidRepairCenterisRequired'));
        }
    };
    /**
     * Close popup
     */
    RepairCenterPopupComponent.prototype.onCancel = function () {
        this.init();
        this.display = false;
    };
    RepairCenterPopupComponent.prototype.isEmpty = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    /**
     * Is required fields filled ?
     */
    RepairCenterPopupComponent.prototype.validateScreen = function () {
        if (!!this.bireItemSiteDTO.repairCenterCode) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('component-data'),
        __metadata("design:type", Object)
    ], RepairCenterPopupComponent.prototype, "componentData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RepairCenterPopupComponent.prototype, "onCreate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RepairCenterPopupComponent.prototype, "onUpdate", void 0);
    RepairCenterPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-repair-center-popup',
            template: __webpack_require__(/*! ./repair-center-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/repair-center-popup/repair-center-popup.component.html")
        }),
        __metadata("design:paramtypes", [_form_item_form_service__WEBPACK_IMPORTED_MODULE_6__["ItemFormService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__["PropertiesService"]])
    ], RepairCenterPopupComponent);
    return RepairCenterPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/statistics-popup/statistics-popup.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/statistics-popup/statistics-popup.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".statsticsMangement\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".maintenanceType\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [showClear]=\"true\"\r\n          [options]=\"maintenanceTypeList\"\r\n          [(ngModel)]=\"bireItemMaintenanceDTO.environmentCode\"\r\n          [disabled]=\"isReadOpenMode || !isEditable\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".kPourcent\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [showClear]=\"true\"\r\n          [options]=\"kPourcentList\"\r\n          [(ngModel)]=\"bireItemMaintenanceDTO.kPourcentCode\"\r\n          [disabled]=\"isReadOpenMode || !isEditable\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".repairCenter\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [showClear]=\"true\"\r\n          [options]=\"repairCenterList\"\r\n          [(ngModel)]=\"bireItemMaintenanceDTO.repairCenterCode\"\r\n          [disabled]=\"isReadOpenMode || !isEditable\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".startDate\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-calendar\r\n          showButtonBar=\"true\"\r\n          [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\"\r\n          [yearRange]=\"sessionService.calendarYearRange\"\r\n          class=\"aw-calendar\"\r\n          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n          [locale]=\"sessionService.calendarFormat\"\r\n          [(ngModel)]=\"bireItemMaintenanceDTO.startDate\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          appendTo=\"body\"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".endDate\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-calendar\r\n          showButtonBar=\"true\"\r\n          [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\"\r\n          [yearRange]=\"sessionService.calendarYearRange\"\r\n          class=\"aw-calendar\"\r\n          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n          [locale]=\"sessionService.calendarFormat\"\r\n          [(ngModel)]=\"bireItemMaintenanceDTO.endDate\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          appendTo=\"body\"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".probability\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          pKeyFilter=\"int\"\r\n          class=\"aw-input\"\r\n          maxlength=\"50\"\r\n          [(ngModel)]=\"bireItemMaintenanceDTO.probability\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      [disabled]=\"\r\n        !bireItemMaintenanceDTO.environmentCode ||\r\n        !bireItemMaintenanceDTO.kPourcentCode ||\r\n        !bireItemMaintenanceDTO.repairCenterCode\r\n      \"\r\n      (click)=\"onValidate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/statistics-popup/statistics-popup.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/statistics-popup/statistics-popup.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: StatisticsPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPopupComponent", function() { return StatisticsPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/input-validation.service */ "./src/app/shared/services/input-validation.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _form_item_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../form/item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
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







var StatisticsPopupComponent = /** @class */ (function (_super) {
    __extends(StatisticsPopupComponent, _super);
    function StatisticsPopupComponent(sessionService, itemFormService, messageService, inputValidationService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'StatisticsPopupComponent') || this;
        _this.sessionService = sessionService;
        _this.itemFormService = itemFormService;
        _this.messageService = messageService;
        _this.inputValidationService = inputValidationService;
        _this.isEditable = true;
        _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.init();
        return _this;
    }
    /**
     * Init screen
     */
    StatisticsPopupComponent.prototype.init = function () {
        this.bireItemMaintenanceDTO = {};
        this.repairCenterList = [];
        this.maintenanceTypeList = [];
        this.kPourcentList = [];
    };
    StatisticsPopupComponent.prototype.ngOnInit = function () {
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            if (!!this.componentData && !!this.componentData.object && !this.isEmpty(this.componentData.object)) {
                this.isEditable = false;
                // tslint:disable-next-line:no-string-literal
                this.bireItemMaintenanceDTO['dataKeyId'] = this.componentData.object['dataKeyId'];
                this.bireItemMaintenanceDTO = this.componentData.object;
            }
            else {
                this.bireItemMaintenanceDTO.probability = 0;
            }
        }
        // Get dropdown list
        this.initilizeDropdowns();
    };
    StatisticsPopupComponent.prototype.initilizeDropdowns = function () {
        var _this = this;
        // K Pourcent List
        this.itemFormService.findBireKPourcentList().subscribe(function (results) {
            _this.kPourcentList = results;
            if (!!_this.componentData && _this.isEmpty(_this.componentData.object)) {
                _this.bireItemMaintenanceDTO.kPourcentCode = results[0].value;
            }
        });
        // Maintenance Type
        this.itemFormService.findBireMaintenanceEnvironmentsList().subscribe(function (results) {
            _this.maintenanceTypeList = results;
            if (!!_this.componentData && _this.isEmpty(_this.componentData.object)) {
                _this.bireItemMaintenanceDTO.environmentCode = results[0].value;
            }
        });
        // Repair Center List
        this.itemFormService.findAllBireSites().subscribe(function (results) {
            results.forEach(function (res) {
                res.label = res.value + "-" + res.label;
                if (res.value === 'Air base 1') {
                    res.label = 'Air base 1';
                }
            });
            _this.repairCenterList = results;
            if (!!_this.componentData && _this.isEmpty(_this.componentData.object)) {
                _this.bireItemMaintenanceDTO.repairCenterCode = results[0].value;
            }
        });
    };
    /**
     * Validate Screen
     */
    StatisticsPopupComponent.prototype.onValidate = function () {
        if (this.validateScreen()) {
            if (this.maxProbaility()) {
                if (!!this.componentData && !!this.componentData.object && !this.isEmpty(this.componentData.object)) {
                    this.onUpdate.emit(this.bireItemMaintenanceDTO);
                }
                else {
                    this.onCreate.emit(this.bireItemMaintenanceDTO);
                }
            }
            else {
                this.messageService.showErrorMessage(this.getTranslateKey('entryOfProbability'));
            }
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidRepairCenterisRequired'));
        }
    };
    /**
     * Close popup
     */
    StatisticsPopupComponent.prototype.onCancel = function () {
        this.init();
        this.display = false;
    };
    StatisticsPopupComponent.prototype.isEmpty = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    StatisticsPopupComponent.prototype.maxProbaility = function () {
        var max = 1000000;
        var min = 0;
        if (!!this.bireItemMaintenanceDTO.probability &&
            (this.bireItemMaintenanceDTO.probability > max || this.bireItemMaintenanceDTO.probability < min)) {
            return false;
        }
        return true;
    };
    /**
     * Is required fields filled ?
     */
    StatisticsPopupComponent.prototype.validateScreen = function () {
        if (!!this.bireItemMaintenanceDTO.repairCenterCode &&
            !!this.bireItemMaintenanceDTO.environmentCode &&
            !!this.bireItemMaintenanceDTO.kPourcentCode) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('component-data'),
        __metadata("design:type", Object)
    ], StatisticsPopupComponent.prototype, "componentData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StatisticsPopupComponent.prototype, "onCreate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StatisticsPopupComponent.prototype, "onUpdate", void 0);
    StatisticsPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-statistics-popup',
            template: __webpack_require__(/*! ./statistics-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/statistics-popup/statistics-popup.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _form_item_form_service__WEBPACK_IMPORTED_MODULE_6__["ItemFormService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__["InputValidationService"]])
    ], StatisticsPopupComponent);
    return StatisticsPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/task-popup/task-popup.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/task-popup/task-popup.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".tasksManagement\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".itemVersion\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [showClear]=\"true\"\r\n          [options]=\"itemVersionList\"\r\n          [(ngModel)]=\"taskAssociatedItemOutput.itemVersion\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".taskCode\" | translate }}</label>\r\n\r\n      <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n        <div class=\"form-control-data\" (click)=\"taskSearchCode()\">{{ taskAssociatedItemOutput.code }}</div>\r\n\r\n        <div *ngIf=\"taskAssociatedItemOutput.code\" class=\"btn-clear-wrapper\">\r\n          <i\r\n            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n            aria-hidden=\"true\"\r\n            (click)=\"taskAssociatedItemOutput.code = undefined\"\r\n          ></i>\r\n        </div>\r\n        <div class=\"btn-search-wrapper\">\r\n          <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\" (click)=\"taskSearchCode()\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".taskVersion\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input\"\r\n          maxlength=\"50\"\r\n          [(ngModel)]=\"taskAssociatedItemOutput.version\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        />\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".taskItemType\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [showClear]=\"true\"\r\n          [options]=\"taskItemList\"\r\n          [(ngModel)]=\"taskAssociatedItemOutput.type\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      [disabled]=\"\r\n        !taskAssociatedItemOutput.itemVersion ||\r\n        !taskAssociatedItemOutput.code ||\r\n        !taskAssociatedItemOutput.version ||\r\n        !taskAssociatedItemOutput.type\r\n      \"\r\n      (click)=\"onValidate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-task\r\n  *ngIf=\"showItemTaskSearchPopup\"\r\n  [(display)]=\"showItemTaskSearchPopup\"\r\n  (onSelected)=\"addTask($event)\"\r\n></aw-dialog-search-task>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/task-popup/task-popup.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/task-popup/task-popup.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TaskPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPopupComponent", function() { return TaskPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _item_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
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







var TaskPopupComponent = /** @class */ (function (_super) {
    __extends(TaskPopupComponent, _super);
    function TaskPopupComponent(messageService, itemFormService, propertiesService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'TaskPopupComponent') || this;
        _this.messageService = messageService;
        _this.itemFormService = itemFormService;
        _this.propertiesService = propertiesService;
        _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    TaskPopupComponent.prototype.ngOnInit = function () {
        this.taskAssociatedItemOutput = {};
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            if (!!this.componentData.object) {
                this.taskAssociatedItemOutput = this.componentData.object;
            }
        }
        this.renderDropdown();
    };
    TaskPopupComponent.prototype.renderDropdown = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_1__["GenericPropertyConstants"].TASK_ITEM_TYPE_MAP).subscribe(function (results) {
            _this.taskItemList = results;
        });
        this.itemFormService.findBireItemVersions(this.bireItemDTOId).subscribe(function (results) {
            _this.itemVersionList = results;
        });
    };
    /**
     * Validate Screen
     */
    TaskPopupComponent.prototype.onValidate = function () {
        if (this.validateScreen()) {
            this.onCreate.emit(this.taskAssociatedItemOutput);
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidRepairCenterisRequired'));
        }
    };
    /**
     * Close popup
     */
    TaskPopupComponent.prototype.onCancel = function () {
        this.display = false;
    };
    /**
     * Is required fields filled ?
     */
    TaskPopupComponent.prototype.validateScreen = function () {
        if (!!this.taskAssociatedItemOutput.code &&
            !!this.taskAssociatedItemOutput.itemVersion &&
            !!this.taskAssociatedItemOutput.type &&
            !!this.taskAssociatedItemOutput.version) {
            return true;
        }
        return false;
    };
    /**
     * Opens task search dialog
     */
    TaskPopupComponent.prototype.taskSearchCode = function () {
        this.showItemTaskSearchPopup = true;
    };
    /**
     * On task selection
     */
    TaskPopupComponent.prototype.addTask = function (task) {
        this.showItemTaskSearchPopup = false;
        this.taskAssociatedItemOutput.code = task.taskCode;
        this.taskAssociatedItemOutput.version = task.taskVersion;
        this.taskAssociatedItemOutput.designation = task.taskDesignation;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('component-data'),
        __metadata("design:type", Object)
    ], TaskPopupComponent.prototype, "componentData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TaskPopupComponent.prototype, "onCreate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bireItemDTOId'),
        __metadata("design:type", Object)
    ], TaskPopupComponent.prototype, "bireItemDTOId", void 0);
    TaskPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-task-popup',
            template: __webpack_require__(/*! ./task-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/task-popup/task-popup.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _item_form_service__WEBPACK_IMPORTED_MODULE_6__["ItemFormService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__["PropertiesService"]])
    ], TaskPopupComponent);
    return TaskPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/til-popup/til-popup.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/til-popup/til-popup.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".tilManagement\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".tilLevel\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [showClear]=\"true\"\r\n          [options]=\"tilList\"\r\n          [(ngModel)]=\"bireTilItemDTO.technicalLevel\"\r\n          appendTo=\"body\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          (onChange)=\"setDescription()\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".description\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <textarea class=\"aw-textarea\" pInputTextarea [rows]=\"3\" [(ngModel)]=\"description\" disabled=\"true\"></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      [disabled]=\"!bireTilItemDTO.technicalLevel\"\r\n      (click)=\"onValidate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/form/popups/til-popup/til-popup.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/form/popups/til-popup/til-popup.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TilPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilPopupComponent", function() { return TilPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _form_item_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../form/item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
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





var TilPopupComponent = /** @class */ (function (_super) {
    __extends(TilPopupComponent, _super);
    function TilPopupComponent(itemFormService, messageService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'TilPopupComponent') || this;
        _this.itemFormService = itemFormService;
        _this.messageService = messageService;
        _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.init();
        return _this;
    }
    /**
     * Init screen
     */
    TilPopupComponent.prototype.init = function () {
        this.bireTilItemDTO = {};
        this.tilList = [];
        this.bireTils = [];
    };
    TilPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
        }
        // Get dropdown list
        this.itemFormService.findAllBireTils().subscribe(function (results) {
            var list = [];
            results.forEach(function (element) {
                if (!!element && element.technicalLevel !== undefined) {
                    list.push({
                        label: element.tilName,
                        value: element.technicalLevel.toString()
                    });
                }
            });
            _this.tilList = list;
            _this.bireTils = results;
            if (_this.componentData) {
                _this.bireTilItemDTO =
                    !!_this.componentData && !!_this.componentData.object && !_this.isEmpty(_this.componentData.object)
                        ? _this.componentData.object
                        : {};
                _this.setDescription();
            }
        });
    };
    /**
     * Set description field
     */
    TilPopupComponent.prototype.setDescription = function () {
        var _this = this;
        if (!!this.bireTilItemDTO.technicalLevel) {
            this.description = undefined;
            var bireTilDTO = this.bireTils.filter(function (res) {
                // tslint:disable-next-line:triple-equals
                return res.technicalLevel == _this.bireTilItemDTO.technicalLevel;
            })[0];
            this.description = bireTilDTO.tilDescription;
        }
    };
    /**
     * Validate Screen
     */
    TilPopupComponent.prototype.onValidate = function () {
        if (this.validateScreen()) {
            this.onCreate.emit(this.bireTilItemDTO);
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidTechicalLevelisRequired'));
        }
    };
    /**
     * Close popup
     */
    TilPopupComponent.prototype.onCancel = function () {
        this.init();
        this.display = false;
    };
    TilPopupComponent.prototype.isEmpty = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    /**
     * Is required fields filled ?
     */
    TilPopupComponent.prototype.validateScreen = function () {
        if (!!this.bireTilItemDTO.technicalLevel) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('component-data'),
        __metadata("design:type", Object)
    ], TilPopupComponent.prototype, "componentData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TilPopupComponent.prototype, "onCreate", void 0);
    TilPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-til-popup',
            template: __webpack_require__(/*! ./til-popup.component.html */ "./src/app/main/engineering-management/item/form/popups/til-popup/til-popup.component.html")
        }),
        __metadata("design:paramtypes", [_form_item_form_service__WEBPACK_IMPORTED_MODULE_4__["ItemFormService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], TilPopupComponent);
    return TilPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/item/item.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/engineering-management/item/item.module.ts ***!
  \*****************************************************************/
/*! exports provided: ItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemModule", function() { return ItemModule; });
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
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/tree.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_tree__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ "./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts");
/* harmony import */ var _shared_components_dialog_bire_document_dialog_bire_document_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/dialog-bire-document/dialog-bire-document.module */ "./src/app/shared/components/dialog-bire-document/dialog-bire-document.module.ts");
/* harmony import */ var _shared_components_dialog_search_item_dialog_search_item_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/dialog-search-item/dialog-search-item.module */ "./src/app/shared/components/dialog-search-item/dialog-search-item.module.ts");
/* harmony import */ var _shared_components_dialog_search_rating_dialog_search_rating_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/dialog-search-rating/dialog-search-rating.module */ "./src/app/shared/components/dialog-search-rating/dialog-search-rating.module.ts");
/* harmony import */ var _shared_components_dialog_search_rating_dialog_search_rating_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/dialog-search-rating/dialog-search-rating.service */ "./src/app/shared/components/dialog-search-rating/dialog-search-rating.service.ts");
/* harmony import */ var _shared_components_dialog_search_task_dialog_search_task_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/components/dialog-search-task/dialog-search-task.module */ "./src/app/shared/components/dialog-search-task/dialog-search-task.module.ts");
/* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/components/dialog-table/dialog-table.module */ "./src/app/shared/components/dialog-table/dialog-table.module.ts");
/* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ "./src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_status_update_history_status_update_history_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/components/status-update-history/status-update-history.module */ "./src/app/shared/components/status-update-history/status-update-history.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_item_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./form/item-form.component */ "./src/app/main/engineering-management/item/form/item-form.component.ts");
/* harmony import */ var _form_item_form_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./form/item-form.service */ "./src/app/main/engineering-management/item/form/item-form.service.ts");
/* harmony import */ var _form_popups_add_evolution_popup_add_evolution_popup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./form/popups/add-evolution-popup/add-evolution-popup.component */ "./src/app/main/engineering-management/item/form/popups/add-evolution-popup/add-evolution-popup.component.ts");
/* harmony import */ var _form_popups_cause_of_removal_popup_cause_of_removal_popup_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./form/popups/cause-of-removal-popup/cause-of-removal-popup.component */ "./src/app/main/engineering-management/item/form/popups/cause-of-removal-popup/cause-of-removal-popup.component.ts");
/* harmony import */ var _form_popups_configuration_pack_popup_configuration_pack_popup_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./form/popups/configuration-pack-popup/configuration-pack-popup.component */ "./src/app/main/engineering-management/item/form/popups/configuration-pack-popup/configuration-pack-popup.component.ts");
/* harmony import */ var _form_popups_dam_loc_task_popup_dam_loc_task_popup_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./form/popups/dam-loc-task-popup/dam-loc-task-popup.component */ "./src/app/main/engineering-management/item/form/popups/dam-loc-task-popup/dam-loc-task-popup.component.ts");
/* harmony import */ var _form_popups_damage_popup_damage_list_popup_damage_list_popup_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./form/popups/damage-popup/damage-list-popup/damage-list-popup.component */ "./src/app/main/engineering-management/item/form/popups/damage-popup/damage-list-popup/damage-list-popup.component.ts");
/* harmony import */ var _form_popups_damage_popup_damage_popup_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./form/popups/damage-popup/damage-popup.component */ "./src/app/main/engineering-management/item/form/popups/damage-popup/damage-popup.component.ts");
/* harmony import */ var _form_popups_edit_evolution_popup_edit_evolution_popup_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./form/popups/edit-evolution-popup/edit-evolution-popup.component */ "./src/app/main/engineering-management/item/form/popups/edit-evolution-popup/edit-evolution-popup.component.ts");
/* harmony import */ var _form_popups_item_father_popup_item_father_popup_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./form/popups/item-father-popup/item-father-popup.component */ "./src/app/main/engineering-management/item/form/popups/item-father-popup/item-father-popup.component.ts");
/* harmony import */ var _form_popups_item_import_popup_item_import_popup_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./form/popups/item-import-popup/item-import-popup.component */ "./src/app/main/engineering-management/item/form/popups/item-import-popup/item-import-popup.component.ts");
/* harmony import */ var _form_popups_item_son_popup_item_son_popup_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./form/popups/item-son-popup/item-son-popup.component */ "./src/app/main/engineering-management/item/form/popups/item-son-popup/item-son-popup.component.ts");
/* harmony import */ var _form_popups_item_version_popup_item_version_popup_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./form/popups/item-version-popup/item-version-popup.component */ "./src/app/main/engineering-management/item/form/popups/item-version-popup/item-version-popup.component.ts");
/* harmony import */ var _form_popups_localisation_popup_localisation_list_popup_localisation_list_popup_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./form/popups/localisation-popup/localisation-list-popup/localisation-list-popup.component */ "./src/app/main/engineering-management/item/form/popups/localisation-popup/localisation-list-popup/localisation-list-popup.component.ts");
/* harmony import */ var _form_popups_localisation_popup_localisation_popup_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./form/popups/localisation-popup/localisation-popup.component */ "./src/app/main/engineering-management/item/form/popups/localisation-popup/localisation-popup.component.ts");
/* harmony import */ var _form_popups_reference_measurement_popup_reference_measurement_popup_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./form/popups/reference-measurement-popup/reference-measurement-popup.component */ "./src/app/main/engineering-management/item/form/popups/reference-measurement-popup/reference-measurement-popup.component.ts");
/* harmony import */ var _form_popups_repair_center_popup_repair_center_popup_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./form/popups/repair-center-popup/repair-center-popup.component */ "./src/app/main/engineering-management/item/form/popups/repair-center-popup/repair-center-popup.component.ts");
/* harmony import */ var _form_popups_statistics_popup_statistics_popup_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./form/popups/statistics-popup/statistics-popup.component */ "./src/app/main/engineering-management/item/form/popups/statistics-popup/statistics-popup.component.ts");
/* harmony import */ var _form_popups_task_popup_task_popup_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./form/popups/task-popup/task-popup.component */ "./src/app/main/engineering-management/item/form/popups/task-popup/task-popup.component.ts");
/* harmony import */ var _form_popups_til_popup_til_popup_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./form/popups/til-popup/til-popup.component */ "./src/app/main/engineering-management/item/form/popups/til-popup/til-popup.component.ts");
/* harmony import */ var _search_item_search_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./search/item-search.component */ "./src/app/main/engineering-management/item/search/item-search.component.ts");
/* harmony import */ var _search_item_search_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./search/item-search.service */ "./src/app/main/engineering-management/item/search/item-search.service.ts");
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
    primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__["KeyFilterModule"],
    primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__["RadioButtonModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__["SelectButtonModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
    primeng_tree__WEBPACK_IMPORTED_MODULE_11__["TreeModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"]
];
var INTERNAL_MODULES = [
    _shared_components_dialog_search_item_dialog_search_item_module__WEBPACK_IMPORTED_MODULE_17__["DialogSearchItemModule"],
    _shared_components_dialog_search_rating_dialog_search_rating_module__WEBPACK_IMPORTED_MODULE_18__["DialogSearchRatingModule"],
    _shared_components_dialog_search_task_dialog_search_task_module__WEBPACK_IMPORTED_MODULE_20__["DialogSearchTaskModule"],
    _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_21__["DialogTableModule"],
    _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_22__["DynamicAttributesModule"],
    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_23__["ModalModule"],
    _shared_components_status_update_history_status_update_history_module__WEBPACK_IMPORTED_MODULE_24__["StatusUpdateHistoryModule"],
    _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_25__["TableModule"]
];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [
    _form_popups_add_evolution_popup_add_evolution_popup_component__WEBPACK_IMPORTED_MODULE_29__["AddEvolutionPopupComponent"],
    _form_popups_cause_of_removal_popup_cause_of_removal_popup_component__WEBPACK_IMPORTED_MODULE_30__["CauseOfRemovalPopupComponent"],
    _form_popups_configuration_pack_popup_configuration_pack_popup_component__WEBPACK_IMPORTED_MODULE_31__["ConfigurationPackPopupComponent"],
    _form_popups_damage_popup_damage_list_popup_damage_list_popup_component__WEBPACK_IMPORTED_MODULE_33__["DamageListPopupComponent"],
    _form_popups_damage_popup_damage_popup_component__WEBPACK_IMPORTED_MODULE_34__["DamagePopupComponent"],
    _form_popups_dam_loc_task_popup_dam_loc_task_popup_component__WEBPACK_IMPORTED_MODULE_32__["DamLocTaskPopupComponent"],
    _form_popups_edit_evolution_popup_edit_evolution_popup_component__WEBPACK_IMPORTED_MODULE_35__["EditEvolutionPopupComponent"],
    _form_popups_item_father_popup_item_father_popup_component__WEBPACK_IMPORTED_MODULE_36__["ItemFatherPopupComponent"],
    _form_popups_item_son_popup_item_son_popup_component__WEBPACK_IMPORTED_MODULE_38__["ItemSonPopupComponent"],
    _form_popups_item_version_popup_item_version_popup_component__WEBPACK_IMPORTED_MODULE_39__["ItemVersionPopupComponent"],
    _form_popups_localisation_popup_localisation_list_popup_localisation_list_popup_component__WEBPACK_IMPORTED_MODULE_40__["LocalisationListPopupComponent"],
    _form_popups_localisation_popup_localisation_popup_component__WEBPACK_IMPORTED_MODULE_41__["LocalisationPopupComponent"],
    _form_popups_reference_measurement_popup_reference_measurement_popup_component__WEBPACK_IMPORTED_MODULE_42__["ReferenceMeasurementPopupComponent"],
    _form_popups_repair_center_popup_repair_center_popup_component__WEBPACK_IMPORTED_MODULE_43__["RepairCenterPopupComponent"],
    _form_popups_statistics_popup_statistics_popup_component__WEBPACK_IMPORTED_MODULE_44__["StatisticsPopupComponent"],
    _form_popups_task_popup_task_popup_component__WEBPACK_IMPORTED_MODULE_45__["TaskPopupComponent"],
    _form_popups_item_import_popup_item_import_popup_component__WEBPACK_IMPORTED_MODULE_37__["ItemImportPopupComponent"],
    _form_popups_til_popup_til_popup_component__WEBPACK_IMPORTED_MODULE_46__["TilPopupComponent"]
];
var DYNAMIC_COMPONENTS = [_form_item_form_component__WEBPACK_IMPORTED_MODULE_27__["ItemFormComponent"], _search_item_search_component__WEBPACK_IMPORTED_MODULE_47__["ItemSearchComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_shared_components_dialog_search_rating_dialog_search_rating_service__WEBPACK_IMPORTED_MODULE_19__["DialogSearchRatingService"], _form_item_form_service__WEBPACK_IMPORTED_MODULE_28__["ItemFormService"], _search_item_search_service__WEBPACK_IMPORTED_MODULE_48__["ItemSearchService"]];
var ItemModule = /** @class */ (function () {
    function ItemModule() {
    }
    ItemModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_12__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_13__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_14__["AppCommonSharedModule"],
                _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_15__["ComponentSidebarModule"],
                _shared_components_dialog_bire_document_dialog_bire_document_module__WEBPACK_IMPORTED_MODULE_16__["DialogBireDocumentModule"],
                _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_25__["TableModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_26__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], ItemModule);
    return ItemModule;
}());



/***/ }),

/***/ "./src/app/main/engineering-management/item/search/item-search.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/search/item-search.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div class=\"page-subtitle\">- {{ \"page.searchPage\" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"openNewItem()\" *ngIf=\"hasUpdateAccessRight\">\r\n      {{ \"global.create\" | translate }}\r\n    </button>\r\n    <button\r\n      id=\"actions\"\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button id=\"favorites\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row search-criteria-header\">\r\n                  <i\r\n                    class=\"fa fa-fw fa-floppy-o aw-icon aw-icon-with-border search-criteria-action\"\r\n                    aria-hidden=\"true\"\r\n                    pTooltip=\"{{ 'global.save' | translate }}\"\r\n                    tooltipPosition=\"top\"\r\n                  ></i>\r\n                  <i\r\n                    class=\"fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action\"\r\n                    aria-hidden=\"true\"\r\n                    pTooltip=\"{{ 'global.reset' | translate }}\"\r\n                    tooltipPosition=\"top\"\r\n                    (click)=\"resetSearchCriteria()\"\r\n                  ></i>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group required\">\r\n                    <label class=\"form-label\"> {{ componentName + \".familyVariantCode\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [showClear]=\"true\"\r\n                        [options]=\"familyVariant\"\r\n                        [(ngModel)]=\"searchCriteria.familyCode\"\r\n                        (keyup.enter)=\"search()\"\r\n                        placeholder=\"&nbsp;\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"display--flex-row flex--1\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentName + \".chapter\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input class=\"aw-input\" type=\"text\" maxlength=\"2\" [(ngModel)]=\"searchCriteria.chapter\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentName + \".section\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input class=\"aw-input\" type=\"text\" maxlength=\"2\" [(ngModel)]=\"searchCriteria.section\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"display--flex-row flex--1\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentName + \".subject\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input class=\"aw-input\" type=\"text\" maxlength=\"2\" [(ngModel)]=\"searchCriteria.subject\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentName + \".sheet\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input class=\"aw-input\" type=\"text\" maxlength=\"5\" [(ngModel)]=\"searchCriteria.sheet\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"display--flex-row flex--1\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentName + \".marks\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input class=\"aw-input\" type=\"text\" maxlength=\"5\" [(ngModel)]=\"searchCriteria.marks\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\"></div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentName + \".name\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchCriteria.name\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentName + \".itemFamilyCode\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [options]=\"itemFamily\"\r\n                        [(ngModel)]=\"searchCriteria.itemFamilyCode\"\r\n                        (keyup.enter)=\"search()\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentName + \".functionCode\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchCriteria.functionCode\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentName + \".itemNumber\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input class=\"aw-input\" type=\"text\" maxlength=\"20\" [(ngModel)]=\"searchCriteria.itemNumber\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"advanced-criteria\" [ngClass]=\"{ 'display--none': !showAdvancedCriteria }\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group flex\">\r\n                      <label class=\"form-label\"> {{ componentName + \".itemType\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          [showClear]=\"true\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [options]=\"itemType\"\r\n                          [(ngModel)]=\"searchCriteria.itemType\"\r\n                          (keyup.enter)=\"search()\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex\">\r\n                      <label class=\"form-label\"> {{ componentName + \".flocType\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          [showClear]=\"true\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [options]=\"flocType\"\r\n                          [(ngModel)]=\"searchCriteria.ippeNodeType\"\r\n                          (keyup.enter)=\"search()\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex\">\r\n                      <label class=\"form-label\"> {{ componentName + \".AssociatedPart\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchCriteria.attachingPart\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex\">\r\n                      <label class=\"form-label\"> {{ componentName + \".onlyMelCdlItems\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-checkbox binary=\"true\" class=\"aw-checkbox\" [(ngModel)]=\"isMelSelected\"></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\"></div>\r\n                </div>\r\n\r\n                <div class=\"row search-criteria-footer\">\r\n                  <button mat-button (click)=\"showAdvancedCriteria = !showAdvancedCriteria\">\r\n                    <ng-container *ngIf=\"showAdvancedCriteria\">\r\n                      <mat-icon>remove</mat-icon>\r\n                      {{ \"global.collapseCriteria\" | translate }}\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"!showAdvancedCriteria\">\r\n                      <mat-icon>add</mat-icon>\r\n                      {{ \"global.expandCriteria\" | translate }}\r\n                    </ng-container>\r\n                  </button>\r\n\r\n                  <div class=\"search-actions\">\r\n                    <button\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      class=\"btn-with-spinner\"\r\n                      (click)=\"search()\"\r\n                      color=\"primary\"\r\n                      appKeyPress\r\n                      [keyCode]=\"'Enter'\"\r\n                      (keyPress)=\"search()\"\r\n                    >\r\n                      <span *ngIf=\"isTableLoading\" class=\"lds-hourglass\"></span>\r\n                      {{ \"global.toSearch\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.results\" | translate }} ({{ itemTableDataSource.dataCount }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell-content\">\r\n              <a-table [dataSource]=\"itemTableDataSource\">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf=\"itemTableDataSource.hasData && !itemTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"exportTable()\"\r\n                  >\r\n                    {{ \"global.export\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf=\"hasManageAccessRight && itemTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    color=\"warn\"\r\n                    (click)=\"deleteItems()\"\r\n                  >\r\n                    {{ \"global.delete\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf=\"itemTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"openSelectedItem()\"\r\n                  >\r\n                    {{ \"global.open\" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/item/search/item-search.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/engineering-management/item/search/item-search.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ItemSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSearchComponent", function() { return ItemSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/export.service */ "./src/app/shared/services/export.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/utils/label-value-utils */ "./src/app/shared/utils/label-value-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _item_search_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./item-search.service */ "./src/app/main/engineering-management/item/search/item-search.service.ts");
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















var ItemSearchComponent = /** @class */ (function (_super) {
    __extends(ItemSearchComponent, _super);
    /* ***************************************************************************/
    function ItemSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, exportService, itemSearchService, confirmationService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.exportService = exportService;
        _this.itemSearchService = itemSearchService;
        _this.confirmationService = confirmationService;
        _this.componentName = _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].ENG_ITEM_SEARCH;
        _this.isTableLoading = false;
        _this.showAdvancedCriteria = false;
        _this.itemFamily = [];
        _this.familyVariant = [];
        _this.flocType = [];
        _this.itemType = [];
        _this.familyVariantValue = [];
        _this.loadDropdowns();
        _this.resetSearchCriteria();
        _this.initTableCols();
        return _this;
    }
    ItemSearchComponent_1 = ItemSearchComponent;
    ItemSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].ENG_ITEM_SEARCH;
    };
    ItemSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
    };
    /**
     * On action delete items
     */
    ItemSearchComponent.prototype.deleteItems = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmItemDeletion'),
            accept: function () {
                var bireItemDTOIdArr = [];
                var selectedFamilyVariant = _this.getSelectedFamilyVariant();
                _this.itemTableDataSource.dataSelection.forEach(function (res) {
                    if (!!selectedFamilyVariant && !!selectedFamilyVariant.bireVariantVersionDTO) {
                        var bireItemDTOId = {
                            familyCode: selectedFamilyVariant.bireVariantVersionDTO.familyCode,
                            variantCode: selectedFamilyVariant.bireVariantVersionDTO.variantCode,
                            structureType: selectedFamilyVariant.bireVariantVersionDTO.structureType,
                            chapter: res.chapter,
                            section: res.section,
                            sheet: res.sheet,
                            subject: res.subject,
                            marks: res.marks
                        };
                        bireItemDTOIdArr.push(bireItemDTOId);
                    }
                });
                _this.itemSearchService.removeBireItem(bireItemDTOIdArr).subscribe(function (result) {
                    _this.search();
                });
            }
        });
    };
    /**
     * Export table functionality
     */
    ItemSearchComponent.prototype.exportTable = function () {
        var itemExportData = this.itemTableDataSource.dataSrc.map(function (item) {
            var itemRowExport = {
                chapter: item.chapter ? item.chapter : '',
                section: item.section ? item.section : '',
                subject: item.subject ? item.subject : '',
                sheet: item.sheet ? item.sheet : '',
                marks: item.marks ? item.marks : '',
                name: item.name ? item.name : '',
                familyVariantCode: item.familyCode + "-" + item.structureType + "-" + item.variantCode,
                itemFamilyCode: item.itemFamilyCode ? item.itemFamilyCode : '',
                functionCode: item.functionCode ? item.functionCode : '',
                itemNumber: item.itemNumber ? item.itemNumber : ''
            };
            return itemRowExport;
        });
        this.exportService.toExcel(itemExportData, ItemSearchComponent_1.TABLE_EXPORT_NAME, this.componentData.componentId);
    };
    /**
     * Open item screen form
     */
    ItemSearchComponent.prototype.openNewItem = function () {
        this.openItem(undefined, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Create);
    };
    ItemSearchComponent.prototype.openSelectedItem = function () {
        var _this = this;
        this.itemTableDataSource.dataSelection.forEach(function (item) {
            if (!!item) {
                if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(item.familyCode)) {
                    _this.messageService.showWarningMessage(_this.getTranslateKey('errorOnMissingCode'));
                }
                else {
                    _this.openItem(item, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Read);
                }
            }
        });
    };
    ItemSearchComponent.prototype.openItem = function (objectId, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].ENG_ITEM_FORM,
            openMode: openMode
        };
        if (!!objectId) {
            var itemFormId = {
                familyCode: objectId.familyCode,
                chapter: objectId.chapter,
                section: objectId.section,
                sheet: objectId.sheet,
                marks: objectId.marks,
                subject: objectId.subject,
                structureType: objectId.structureType,
                variantCode: objectId.variantCode
            };
            data.objectId = this.serializationService.serialize(itemFormId);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    /**
     * Reset search criteria
     */
    ItemSearchComponent.prototype.resetSearchCriteria = function () {
        this.searchCriteria = {};
        this.isMelSelected = false;
    };
    /**
     * Action on search
     */
    ItemSearchComponent.prototype.search = function () {
        var _this = this;
        var selectedFamilyVariant = this.getSelectedFamilyVariant();
        if (!selectedFamilyVariant) {
            this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            return;
        }
        this.isTableLoading = true;
        _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
        var bire = {
            familyCode: selectedFamilyVariant ? selectedFamilyVariant.bireVariantVersionDTO.familyCode : undefined,
            variantCode: selectedFamilyVariant ? selectedFamilyVariant.bireVariantVersionDTO.variantCode : undefined,
            structureType: selectedFamilyVariant ? selectedFamilyVariant.bireVariantVersionDTO.structureType : undefined,
            chapter: !!this.searchCriteria.chapter ? this.searchCriteria.chapter : undefined,
            section: !!this.searchCriteria.section ? this.searchCriteria.section : undefined,
            sheet: !!this.searchCriteria.sheet ? this.searchCriteria.sheet : undefined,
            subject: !!this.searchCriteria.subject ? this.searchCriteria.subject : undefined,
            marks: !!this.searchCriteria.marks ? this.searchCriteria.marks : undefined,
            ippeNodeType: !!this.searchCriteria.ippeNodeType ? this.searchCriteria.ippeNodeType : undefined,
            itemType: !!this.searchCriteria.itemType ? this.searchCriteria.itemType : undefined,
            itemFamilyCode: !!this.searchCriteria.itemFamilyCode ? this.searchCriteria.itemFamilyCode : undefined,
            attachingPart: !!this.searchCriteria.attachingPart ? this.searchCriteria.attachingPart : undefined,
            name: !!this.searchCriteria.name ? this.searchCriteria.name : undefined,
            itemNumber: !!this.searchCriteria.itemNumber ? this.searchCriteria.itemNumber : undefined,
            functionCode: !!this.searchCriteria.functionCode ? this.searchCriteria.functionCode : undefined
        };
        var criteria = {
            bireItemDTOCriteria: bire
        };
        if (this.isMelSelected) {
            // tslint:disable-next-line:no-any
            var mapAttributeObj = {
                6: this.isMelSelected
            };
            criteria.attribute = mapAttributeObj;
        }
        this.itemSearchService.findBireItemsBySearchCriteria(criteria).subscribe(function (result) {
            _this.isTableLoading = false;
            if (result) {
                result.list.forEach(function (element) {
                    _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_12__["LabelValueUtils"].stringValueToLabel(element, 'familyVariantCode', _this.familyVariant);
                    _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_12__["LabelValueUtils"].stringValueToLabel(element, 'itemFamilyCode', _this.itemFamily);
                });
            }
            _this.setCustomerTable(result);
        });
    };
    /**
     * init table columns
     */
    ItemSearchComponent.prototype.initTableCols = function () {
        this.itemTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["TableDataSource"]({
            columns: [
                { field: 'chapter', translateKey: this.getTranslateKey('chapter'), width: '6%' },
                { field: 'section', translateKey: this.getTranslateKey('section'), width: '6%' },
                { field: 'subject', translateKey: this.getTranslateKey('subject'), width: '6%' },
                { field: 'sheet', translateKey: this.getTranslateKey('sheet'), width: '6%' },
                { field: 'marks', translateKey: this.getTranslateKey('marks'), width: '6%' },
                { field: 'name', translateKey: this.getTranslateKey('name'), width: '30%' },
                { field: 'familyVariantCode', translateKey: this.getTranslateKey('familyVariantCode'), width: '10%' },
                { field: 'itemFamilyCode', translateKey: this.getTranslateKey('itemFamilyCode'), width: '10%' },
                { field: 'functionCode', translateKey: this.getTranslateKey('functionCode'), width: '10%' },
                {
                    field: 'itemNumber',
                    translateKey: this.getTranslateKey('itemNumber'),
                    width: '10%',
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].RIGHT
                }
            ],
            data: []
        });
    };
    ItemSearchComponent.prototype.setCustomerTable = function (results) {
        this.itemTableDataSource.setData([]);
        if (!!results) {
            this.itemTableDataSource.addData(results.list);
        }
    };
    /**
     * Init load dropdowns
     */
    ItemSearchComponent.prototype.loadDropdowns = function () {
        var _this = this;
        // To bind dropdown family variant
        this.itemSearchService.findBireVariantVersionsByFamilyFunctionItemAlternative().subscribe(function (results) {
            var list = [];
            results.forEach(function (element) {
                list.push(element.labelValue);
            });
            _this.familyVariant = list || [];
            _this.familyVariantValue = results;
            if (!!list && list.length > 0) {
                _this.searchCriteria.familyCode = list[0].value;
            }
        });
        this.itemSearchService.getItemFamily().subscribe(function (results) {
            _this.itemFamily = results;
        });
        this.itemSearchService.getFlocType().subscribe(function (results) {
            _this.flocType = results;
        });
        this.itemSearchService.getItemType().subscribe(function (results) {
            _this.itemType = results;
        });
    };
    ItemSearchComponent.prototype.getSelectedFamilyVariant = function () {
        var _this = this;
        return this.familyVariantValue.find(function (elt) {
            return elt.labelValue.value === _this.searchCriteria.familyCode;
        });
    };
    var ItemSearchComponent_1;
    ItemSearchComponent.TABLE_EXPORT_NAME = 'item-list';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resultsContainerAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ItemSearchComponent.prototype, "resultsContainerAnchor", void 0);
    ItemSearchComponent = ItemSearchComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-item-search',
            template: __webpack_require__(/*! ./item-search.component.html */ "./src/app/main/engineering-management/item/search/item-search.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__["TabService"],
            _shared_services_export_service__WEBPACK_IMPORTED_MODULE_5__["ExportService"],
            _item_search_service__WEBPACK_IMPORTED_MODULE_14__["ItemSearchService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]])
    ], ItemSearchComponent);
    return ItemSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__["PageComponent"]));



/***/ }),

/***/ "./src/app/shared/constants/bire-rating-constants.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/constants/bire-rating-constants.ts ***!
  \***********************************************************/
/*! exports provided: BireRatingConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BireRatingConstants", function() { return BireRatingConstants; });
var BireRatingConstants = /** @class */ (function () {
    function BireRatingConstants() {
    }
    BireRatingConstants.DEFAULT = '_';
    return BireRatingConstants;
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

/***/ "./src/app/shared/utils/file-utils.ts":
/*!********************************************!*\
  !*** ./src/app/shared/utils/file-utils.ts ***!
  \********************************************/
/*! exports provided: FileUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUtils", function() { return FileUtils; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _number_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number-utils */ "./src/app/shared/utils/number-utils.ts");


var FileUtils = /** @class */ (function () {
    function FileUtils() {
    }
    FileUtils.downloadFile = function (file, fileName) {
        if (!!file && !!fileName) {
            var byteCharacters = atob(file.toString());
            var byteNumbers = new Array(byteCharacters.length);
            for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"](new Blob([new Uint8Array(byteNumbers)]), fileName);
        }
    };
    FileUtils.getExtension = function (fileName) {
        return !!fileName && fileName.includes('.') ? fileName.substring(fileName.lastIndexOf('.') + 1) : '';
    };
    FileUtils.getFileContentAsBase64 = function (file, callback) {
        if (!!file) {
            var reader_1 = new FileReader();
            reader_1.onloadend = function () {
                var fileContent = reader_1.result; // tslint:disable-line:no-any
                fileContent = fileContent.substring(fileContent.indexOf(',') + 1); // Remove data:*/*;base64,
                callback(fileContent);
            };
            reader_1.readAsDataURL(file);
        }
    };
    FileUtils.getFormattedSize = function (size) {
        if (!!size) {
            return size / FileUtils.KILOOCTET < FileUtils.KILOOCTET
                ? _number_utils__WEBPACK_IMPORTED_MODULE_1__["NumberUtils"].roundNumber(size / FileUtils.KILOOCTET) + " Ko"
                : _number_utils__WEBPACK_IMPORTED_MODULE_1__["NumberUtils"].roundNumber(size / FileUtils.KILOOCTET / FileUtils.KILOOCTET) + " Mo";
        }
        else {
            return '';
        }
    };
    FileUtils.KIBIOCTET = 1024;
    FileUtils.KILOOCTET = 1000;
    return FileUtils;
}());



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
//# sourceMappingURL=engineering-management-item-item-module.js.map