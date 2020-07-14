(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administration-site-site-module"],{

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

/***/ "./node_modules/primeng/components/message/message.js":
/*!************************************************************!*\
  !*** ./node_modules/primeng/components/message/message.js ***!
  \************************************************************/
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
var UIMessage = /** @class */ (function () {
    function UIMessage() {
    }
    Object.defineProperty(UIMessage.prototype, "icon", {
        get: function () {
            var icon = null;
            if (this.severity) {
                switch (this.severity) {
                    case 'success':
                        icon = 'pi pi-check';
                        break;
                    case 'info':
                        icon = 'pi pi-info-circle';
                        break;
                    case 'error':
                        icon = 'pi pi-times';
                        break;
                    case 'warn':
                        icon = 'pi pi-exclamation-triangle';
                        break;
                    default:
                        icon = 'pi pi-info-circle';
                        break;
                }
            }
            return icon;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], UIMessage.prototype, "severity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], UIMessage.prototype, "text", void 0);
    UIMessage = __decorate([
        core_1.Component({
            selector: 'p-message',
            template: "\n        <div aria-live=\"polite\" class=\"ui-message ui-widget ui-corner-all\" *ngIf=\"severity\"\n        [ngClass]=\"{'ui-message-info': (severity === 'info'),\n                'ui-message-warn': (severity === 'warn'),\n                'ui-message-error': (severity === 'error'),\n                'ui-message-success': (severity === 'success')}\">\n            <span class=\"ui-message-icon\" [ngClass]=\"icon\"></span>\n            <span class=\"ui-message-text\" [innerHTML]=\"text\"></span>\n        </div>\n    "
        })
    ], UIMessage);
    return UIMessage;
}());
exports.UIMessage = UIMessage;
var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [UIMessage],
            declarations: [UIMessage]
        })
    ], MessageModule);
    return MessageModule;
}());
exports.MessageModule = MessageModule;
//# sourceMappingURL=message.js.map

/***/ }),

/***/ "./node_modules/primeng/dialog.js":
/*!****************************************!*\
  !*** ./node_modules/primeng/dialog.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/dialog/dialog */ "./node_modules/primeng/components/dialog/dialog.js"));

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

/***/ "./src/app/main/administration/site/form/dialog-capability/dialog-capability.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/administration/site/form/dialog-capability/dialog-capability.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".partNumber\" | translate }}</label>\r\n      <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode || !isCreateOpenMode }\">\r\n        <div class=\"form-control-data\" (click)=\"openPartNumberDialog()\">{{ capability.pnCode }}</div>\r\n\r\n        <div *ngIf=\"capability.pnCode\" class=\"btn-clear-wrapper\">\r\n          <i\r\n            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n            aria-hidden=\"true\"\r\n            (click)=\"capability.pnCode = undefined\"\r\n          ></i>\r\n        </div>\r\n        <div class=\"btn-search-wrapper\">\r\n          <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\" (click)=\"openPartNumberDialog()\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".technicalLevel\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          name=\"bidtTechnicalLevels\"\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [options]=\"technicalLevels\"\r\n          [(ngModel)]=\"capability.technicalLevel\"\r\n          placeholder=\"&nbsp;\"\r\n          [showClear]=\"true\"\r\n          [disabled]=\"isReadOpenMode || !isCreateOpenMode\"\r\n          required\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".cost\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input\r\n          #cost=\"ngModel\"\r\n          name=\"cost\"\r\n          type=\"text\"\r\n          [pKeyFilter]=\"inputValidationService.validatorOfMoney()\"\r\n          [pValidateOnly]=\"true\"\r\n          maxlength=\"37\"\r\n          [(ngModel)]=\"capability.cost\"\r\n          class=\"aw-input \"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [pKeyFilter]=\"inputValidationService.validatorOfPositiveNumber()\"\r\n          [pValidateOnly]=\"true\"\r\n        />\r\n        <p-message\r\n          *ngIf=\"cost.invalid && (cost.dirty || cost.touched)\"\r\n          severity=\"error\"\r\n          [text]=\"inputValidationService.formatOfMoney()\"\r\n        ></p-message>\r\n      </div>\r\n      <label class=\"form-label\">{{ getComponentName() + \".euro\" | translate }}</label>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".validityDate\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-calendar\r\n          showButtonBar=\"true\"\r\n          [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\"\r\n          [yearRange]=\"sessionService.calendarYearRange\"\r\n          class=\"aw-calendar \"\r\n          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n          [locale]=\"sessionService.calendarFormat\"\r\n          [ngClass]=\"{ inactive: isReadOpenMode }\"\r\n          [(ngModel)]=\"capability.availabilityDate\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          appendTo=\"body\"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".tat\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input\r\n          #tat=\"ngModel\"\r\n          type=\"number\"\r\n          name=\"tat\"\r\n          [pKeyFilter]=\"inputValidationService.validatorOfInteger()\"\r\n          [pValidateOnly]=\"true\"\r\n          onKeyPress=\"if(this.value.length==10) return false;\"\r\n          [(ngModel)]=\"capability.tat\"\r\n          class=\"aw-input \"\r\n          [disabled]=\"isReadOpenMode\"\r\n        />\r\n        <p-message\r\n          *ngIf=\"tat.invalid && (tat.dirty || tat.touched)\"\r\n          severity=\"error\"\r\n          [text]=\"inputValidationService.formatOfInteger()\"\r\n        ></p-message>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      color=\"primary\"\r\n      mat-raised-button\r\n      (click)=\"validate()\"\r\n      [disabled]=\"\r\n        (cost.invalid && (cost.dirty || cost.touched)) ||\r\n        !capability.pnCode ||\r\n        capability.pnCode.length === 0 ||\r\n        !capability.technicalLevel ||\r\n        capability.technicalLevel.length === 0\r\n      \"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"global.close\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-table\r\n  *ngIf=\"showPartNumberDialog\"\r\n  [data]=\"partNumberTableData\"\r\n  [keyMap]=\"keyMap\"\r\n  [(display)]=\"showPartNumberDialog\"\r\n  (onSelected)=\"onSelectedPartNumber($event)\"\r\n></aw-dialog-table>\r\n"

/***/ }),

/***/ "./src/app/main/administration/site/form/dialog-capability/dialog-capability.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/main/administration/site/form/dialog-capability/dialog-capability.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DialogCapabilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogCapabilityComponent", function() { return DialogCapabilityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/enums/table-column-filter-mode.enum */ "./src/app/shared/enums/table-column-filter-mode.enum.ts");
/* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/enums/table-selection-mode.enum */ "./src/app/shared/enums/table-selection-mode.enum.ts");
/* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/input-validation.service */ "./src/app/shared/services/input-validation.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _site_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../site-form.service */ "./src/app/main/administration/site/form/site-form.service.ts");
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










var DialogCapabilityComponent = /** @class */ (function (_super) {
    __extends(DialogCapabilityComponent, _super);
    function DialogCapabilityComponent(inputValidationService, siteFormService, messageService, sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'DialogCapabilityComponent') || this;
        _this.inputValidationService = inputValidationService;
        _this.siteFormService = siteFormService;
        _this.messageService = messageService;
        _this.sessionService = sessionService;
        _this.technicalLevels = [];
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.showPartNumberDialog = false;
        _this.capability = {};
        return _this;
    }
    DialogCapabilityComponent.prototype.loadTechnicalLevel = function () {
        var _this = this;
        this.siteFormService.findAllBireTils().subscribe(function (results) {
            results.forEach(function (result) {
                if (result.technicalLevel !== null && result.technicalLevel !== undefined && !!result.tilName) {
                    var tempName = {
                        value: result.technicalLevel.toString(),
                        label: result.tilName
                    };
                    _this.technicalLevels.push(tempName);
                }
            });
            if (_this.capabilityTemp != undefined) {
                _this.capability = _this.capabilityTemp;
            }
        });
    };
    DialogCapabilityComponent.prototype.ngOnInit = function () {
        this.loadTechnicalLevel();
        this.updateOpenMode(this.openMode);
        if (!this.capability) {
            this.capability = {};
            this.capability.tat = 0;
            this.capability.cost = '0';
        }
    };
    DialogCapabilityComponent.prototype.openPartNumberDialog = function () {
        this.showPartNumberDialog = true;
        this.initPartNumberTableData();
    };
    DialogCapabilityComponent.prototype.validate = function () {
        var _this = this;
        if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isNullOrEmpty(this.capability.pnCode) ||
            _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isNullOrEmpty(this.capability.technicalLevel)) {
            this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
        }
        else {
            // Checking if part Number typed is valid or not
            this.isPartNumberValid(function (cb) {
                if (cb === '') {
                    return;
                }
                else {
                    _this.capability.pnCode = cb.pnCode;
                    _this.onValidated.emit(_this.capability);
                    _this.closeDialog();
                }
            });
        }
    };
    DialogCapabilityComponent.prototype.isPartNumberValid = function (callback) {
        var _this = this;
        var criteria = {};
        if (this.capability.pnCode) {
            criteria.birePnDTO = {};
            criteria.birePnDTO.pnCode = this.capability.pnCode;
        }
        this.siteFormService.findAllBirePnByCriteria(criteria).subscribe(function (res) {
            if (res.list.length === 0) {
                callback('');
            }
            res.list.map(function (result) {
                if (!!_this.capability.pnCode &&
                    !!result.pnCode &&
                    _this.capability.pnCode.toLowerCase() === result.pnCode.toLowerCase()) {
                    callback(result);
                }
            });
        });
    };
    DialogCapabilityComponent.prototype.initPartNumberTableData = function () {
        var partNumberTableCols = [
            { field: 'pnCode', alignment: 'left', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input, width: '10rem' },
            { field: 'articleDesignation', alignment: 'left', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input, width: '20rem' },
            { field: 'manufacturerOtanCode', alignment: 'left', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input, width: '10rem' },
            { field: 'otanPnReference', alignment: 'left', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input, width: '10rem' },
            { field: 'quantityUnit', alignment: 'left', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_2__["TableColumnFilterMode"].Input, width: '8rem' }
        ];
        var criteria = {};
        if (this.capability.pnCode) {
            criteria.birePnDTO = {};
            criteria.birePnDTO.pnCode = this.capability.pnCode;
        }
        this.partNumberTableData = {
            componentId: this.getComponentName() + '.partDialog',
            tableCols: partNumberTableCols,
            tableRows: this.siteFormService.findAllBirePnByCriteria(criteria),
            dataKey: undefined,
            selectionMode: _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_3__["TableSelectionMode"].Single,
            globalFilter: true
        };
    };
    DialogCapabilityComponent.prototype.onSelectedPartNumber = function (birePnDTO) {
        if (!!birePnDTO) {
            this.capability.pnCode = birePnDTO.pnCode;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogCapabilityComponent.prototype, "capabilityTemp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DialogCapabilityComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogCapabilityComponent.prototype, "onValidated", void 0);
    DialogCapabilityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-capability',
            template: __webpack_require__(/*! ./dialog-capability.component.html */ "./src/app/main/administration/site/form/dialog-capability/dialog-capability.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_4__["InputValidationService"],
            _site_form_service__WEBPACK_IMPORTED_MODULE_9__["SiteFormService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
    ], DialogCapabilityComponent);
    return DialogCapabilityComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/administration/site/form/site-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/administration/site/form/site-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div *ngIf=\"!isCreateOpenMode && componentData && componentData.objectId\" class=\"page-subtitle\">\r\n          - {{ this.serializationService.deserialize(this.componentData.objectId).siteCode }}\r\n          {{ this.serializationService.deserialize(this.componentData.objectId).siteName }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button *ngIf=\"isReadOpenMode && hasUpdateAccessRight\" type=\"button\" mat-raised-button (click)=\"editSite()\">\r\n      {{ \"global.edit\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode && !isCreateOpenMode\"\r\n      type=\"button\"\r\n      color=\"warn\"\r\n      mat-raised-button\r\n      (click)=\"cancelSite()\"\r\n    >\r\n      {{ \"global.cancel\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      class=\"btn-with-spinner\"\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"saveSite()\"\r\n    >\r\n      <span class=\"lds-hourglass\" *ngIf=\"showSaveSpinner\"></span>\r\n      {{ \"global.save\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"reloadSite()\">{{ \"global.refresh\" | translate }}</button>\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"page.mainData\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                <label class=\"form-label\"> {{ componentData.componentId + \".siteCode\" | translate }} </label>\r\n                <div class=\"form-control\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"aw-input\"\r\n                    [(ngModel)]=\"site.siteCode\"\r\n                    maxlength=\"50\"\r\n                    [disabled]=\"isReadOpenMode || !isCreateOpenMode\"\r\n                  />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ componentData.componentId + \".siteName\" | translate }} </label>\r\n                <div class=\"form-control\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"aw-input\"\r\n                    [(ngModel)]=\"site.siteName\"\r\n                    maxlength=\"100\"\r\n                    [disabled]=\"isReadOpenMode\"\r\n                  />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                <label class=\"form-label\"> {{ componentData.componentId + \".bidtCompanyId\" | translate }} </label>\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    name=\"bidtCompanyName\"\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    placeholder=\"&nbsp;\"\r\n                    [options]=\"companies\"\r\n                    [(ngModel)]=\"site.companyId\"\r\n                    placeholder=\"&nbsp;\"\r\n                    (onChange)=\"loadCompany()\"\r\n                    [disabled]=\"isReadOpenMode\"\r\n                    required\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ componentData.componentId + \".siteDescription\" | translate }} </label>\r\n                <div class=\"form-control\">\r\n                  <textarea\r\n                    class=\"aw-textarea\"\r\n                    [rows]=\"3\"\r\n                    maxlength=\"300\"\r\n                    [(ngModel)]=\"site.siteDescription\"\r\n                    [disabled]=\"isReadOpenMode\"\r\n                    pInputTextarea\r\n                  ></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #documentTableAnchor class=\"grid-cell grid-cell--container\">\r\n            <!-- Capabilities table -->\r\n\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".capabilities\" | translate }} ({{\r\n                    capabilityTableDataSource ? capabilityTableDataSource.dataCount : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell-content\">\r\n              <a-table [dataSource]=\"capabilityTableDataSource\">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf=\"!isReadOpenMode && !capabilityTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"createCapability()\"\r\n                  >\r\n                    {{ \"global.add\" | translate }}\r\n                  </button>\r\n                  <button\r\n                    *ngIf=\"!isReadOpenMode && capabilityTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    color=\"warn\"\r\n                    (click)=\"deleteCapability()\"\r\n                  >\r\n                    {{ \"global.delete\" | translate }}\r\n                  </button>\r\n                  <button\r\n                    *ngIf=\"!isReadOpenMode && capabilityTableDataSource.dataSelectionCount === 1\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"editCapability()\"\r\n                  >\r\n                    {{ \"global.edit\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf=\"capabilityTableDataSource.dataSelectionCount === 1\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"openCapability()\"\r\n                  >\r\n                    {{ \"global.open\" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-capability\r\n    *ngIf=\"showCapabilityDialog\"\r\n    [(display)]=\"showCapabilityDialog\"\r\n    [capabilityTemp]=\"currentCapability\"\r\n    [openMode]=\"capabilityDialogOpenMode\"\r\n    (onValidated)=\"onAddCapability($event)\"\r\n  >\r\n  </aw-dialog-capability>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/administration/site/form/site-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main/administration/site/form/site-form.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #site-form-component .main-data .form-group {\n  width: 15rem; }\n\n:host #site-form-component .attributes-tab,\n:host #site-form-component .general-tab {\n  flex-direction: column; }\n\n:host #site-form-component .general-tab .general-fields {\n  display: flex;\n  flex-direction: row;\n  width: 100%; }\n\n:host #site-form-component .general-tab .general-fields .general-field {\n    width: 10rem; }\n\n:host #site-form-component .general-tab .general-fields .general-type-checkbox {\n    width: 8rem; }\n\n:host #site-form-component .general-tab .general-fields .location-container {\n    display: flex;\n    flex-direction: row; }\n\n:host #site-form-component .general-tab .general-fields .location-container > div:nth-of-type(2) {\n      flex: 1; }\n\n:host #site-form-component .general-tab .general-fields > div {\n    display: flex;\n    flex-direction: column;\n    width: 50%; }\n\n:host #site-form-component .general-tab .general-fields > div:first-of-type {\n      padding-right: 24px; }\n\n:host #site-form-component .general-tab .general-fields > div:nth-of-type(2) {\n      padding-left: 24px; }\n\n:host #site-form-component .general-tab .general-tables {\n  display: flex;\n  flex-direction: column;\n  padding-top: 24px; }\n\n:host #site-form-component .general-tab .general-tables .row {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; }\n\n:host #site-form-component .general-tab .general-tables .row:first-of-type {\n      margin-bottom: 24px; }\n\n:host #site-form-component .general-tab .general-tables .row .table-wrapper {\n      width: 50%; }\n\n:host #site-form-component .general-tab .general-tables .row .table-wrapper:first-of-type {\n        padding-right: 24px; }\n\n:host #site-form-component .general-tab .general-tables .row .table-wrapper:nth-of-type(2) {\n        padding-left: 24px; }\n\n:host #site-form-component .documents-tab .table-wrapper {\n  width: 100%; }\n\n:host #site-form-component .evolution-form-popup {\n  display: flex;\n  flex-direction: row;\n  transition: width 0.3s;\n  width: 20vw; }\n\n:host #site-form-component .evolution-form-popup > div:nth-of-type(2) {\n    flex: 1; }\n\n:host #site-form-component .evolution-form-popup.active-right-panel {\n    width: 70vw; }\n\n:host #site-form-component .evolution-form-popup.active-right-panel .left-panel .evolution-number {\n      background-color: #e5e5e5; }\n\n:host #site-form-component .evolution-form-popup.active-right-panel .left-panel .form-group {\n      padding: 20px; }\n\n:host #site-form-component .evolution-form-popup.active-right-panel .right-panel {\n      border-left: 1px solid #bdbdbd;\n      padding: 20px 0 20px 20px; }\n\n:host #site-form-component .evolution-number-panel {\n  margin-bottom: 1rem;\n  height: 409px;\n  transition: height 0.5s ease-in-out; }\n\n:host #site-form-component .evolution-number-panel .form-group {\n    margin-bottom: 5px;\n    margin-left: 0;\n    transition: margin-left 0.5s ease-in-out, margin-top 0.25s ease-in-out; }\n\n:host #site-form-component .evolution-number-panel .table-container {\n    -webkit-animation: fade 1s;\n            animation: fade 1s;\n    opacity: 1; }\n\n:host #site-form-component .evolution-number-panel.collapsed {\n    box-shadow: none;\n    height: 56px; }\n\n:host #site-form-component .evolution-number-panel.collapsed .panel-content {\n      padding-bottom: 0; }\n\n:host #site-form-component .evolution-number-panel.collapsed .form-group {\n      margin-bottom: 0;\n      margin-left: -24px;\n      margin-top: -24px; }\n\n:host #site-form-component .evolution-number-panel.collapsed .table-container {\n      -webkit-animation: fade-out 1s;\n              animation: fade-out 1s; }\n\n::ng-deep .export-methods {\n  list-style-type: none;\n  margin: 0;\n  min-width: 100px;\n  padding: 0; }\n\n::ng-deep .export-methods .export-method-wrapper {\n    cursor: pointer;\n    font-size: 0.8rem;\n    padding: 5px 0; }\n\n::ng-deep .export-methods .export-method-wrapper .export-method {\n      padding-left: 5px; }\n\n::ng-deep .export-methods .export-method-wrapper .export-method:hover {\n        text-decoration: underline; }\n\n::ng-deep #business-partner-form-component .aw-dialog .ui-dialog {\n  max-width: 90%; }\n\n@-webkit-keyframes fade {\n  0% {\n    display: none;\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade {\n  0% {\n    display: none;\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hZG1pbmlzdHJhdGlvbi9zaXRlL2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcYWRtaW5pc3RyYXRpb25cXHNpdGVcXGZvcm1cXHNpdGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdNLFlBQVksRUFBQTs7QUFIbEI7O0VBUU0sc0JBQXNCLEVBQUE7O0FBUjVCO0VBYVEsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBZm5CO0lBa0JVLFlBQVksRUFBQTs7QUFsQnRCO0lBc0JVLFdBQVcsRUFBQTs7QUF0QnJCO0lBMEJVLGFBQWE7SUFDYixtQkFBbUIsRUFBQTs7QUEzQjdCO01BOEJZLE9BQU8sRUFBQTs7QUE5Qm5CO0lBbUNVLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVSxFQUFBOztBQXJDcEI7TUF3Q1ksbUJBQW1CLEVBQUE7O0FBeEMvQjtNQTRDWSxrQkFBa0IsRUFBQTs7QUE1QzlCO0VBa0RRLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCLEVBQUE7O0FBcER6QjtJQXVEVSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTs7QUF6RHpCO01BNERZLG1CQUFtQixFQUFBOztBQTVEL0I7TUFnRVksVUFBVSxFQUFBOztBQWhFdEI7UUFtRWMsbUJBQW1CLEVBQUE7O0FBbkVqQztRQXVFYyxrQkFBa0IsRUFBQTs7QUF2RWhDO0VBZ0ZRLFdBQVcsRUFBQTs7QUFoRm5CO0VBcUZNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUF4RmpCO0lBMkZRLE9BQU8sRUFBQTs7QUEzRmY7SUErRlEsV0FBVyxFQUFBOztBQS9GbkI7TUFtR1kseUJBQXlCLEVBQUE7O0FBbkdyQztNQXVHWSxhQUFhLEVBQUE7O0FBdkd6QjtNQTRHVSw4QkFBOEI7TUFDOUIseUJBQXlCLEVBQUE7O0FBN0duQztFQW1ITSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1DQUFtQyxFQUFBOztBQXJIekM7SUF3SFEsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxzRUFBc0UsRUFBQTs7QUExSDlFO0lBOEhRLDBCQUFrQjtZQUFsQixrQkFBa0I7SUFDbEIsVUFBVSxFQUFBOztBQS9IbEI7SUFtSVEsZ0JBQWdCO0lBQ2hCLFlBQVksRUFBQTs7QUFwSXBCO01BdUlVLGlCQUFpQixFQUFBOztBQXZJM0I7TUEySVUsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixpQkFBaUIsRUFBQTs7QUE3STNCO01BaUpVLDhCQUFzQjtjQUF0QixzQkFBc0IsRUFBQTs7QUFPaEM7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBSlo7SUFPSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWMsRUFBQTs7QUFUbEI7TUFZTSxpQkFBaUIsRUFBQTs7QUFadkI7UUFlUSwwQkFBMEIsRUFBQTs7QUFNbEM7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsVUFBVSxFQUFBO0VBR1o7SUFDRSxVQUFVLEVBQUEsRUFBQTs7QUFQZDtFQUNFO0lBQ0UsYUFBYTtJQUNiLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBTmQ7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FkbWluaXN0cmF0aW9uL3NpdGUvZm9ybS9zaXRlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgI3NpdGUtZm9ybS1jb21wb25lbnQge1xyXG4gICAgLm1haW4tZGF0YSAuZm9ybS1ncm91cCB7XHJcbiAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYXR0cmlidXRlcy10YWIsXHJcbiAgICAuZ2VuZXJhbC10YWIge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5nZW5lcmFsLXRhYiB7XHJcbiAgICAgIC5nZW5lcmFsLWZpZWxkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAuZ2VuZXJhbC1maWVsZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ2VuZXJhbC10eXBlLWNoZWNrYm94IHtcclxuICAgICAgICAgIHdpZHRoOiA4cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvY2F0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgICAmID4gZGl2Om50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYgPiBkaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5nZW5lcmFsLXRhYmxlcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG5cclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhYmxlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZG9jdW1lbnRzLXRhYiB7XHJcbiAgICAgIC50YWJsZS13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ldm9sdXRpb24tZm9ybS1wb3B1cCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XHJcbiAgICAgIHdpZHRoOiAyMHZ3O1xyXG5cclxuICAgICAgJiA+IGRpdjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hY3RpdmUtcmlnaHQtcGFuZWwge1xyXG4gICAgICAgIHdpZHRoOiA3MHZ3O1xyXG5cclxuICAgICAgICAubGVmdC1wYW5lbCB7XHJcbiAgICAgICAgICAuZXZvbHV0aW9uLW51bWJlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0LXBhbmVsIHtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2JkYmRiZDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmV2b2x1dGlvbi1udW1iZXItcGFuZWwge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICBoZWlnaHQ6IDQwOXB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC41cyBlYXNlLWluLW91dCwgbWFyZ2luLXRvcCAwLjI1cyBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlIDFzO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY29sbGFwc2VkIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGhlaWdodDogNTZweDtcclxuXHJcbiAgICAgICAgLnBhbmVsLWNvbnRlbnQge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTI0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFibGUtY29udGFpbmVyIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogZmFkZS1vdXQgMXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmV4cG9ydC1tZXRob2RzIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLmV4cG9ydC1tZXRob2Qtd3JhcHBlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG5cclxuICAgIC5leHBvcnQtbWV0aG9kIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwICNidXNpbmVzcy1wYXJ0bmVyLWZvcm0tY29tcG9uZW50IC5hdy1kaWFsb2cgLnVpLWRpYWxvZyB7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgMCUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/administration/site/form/site-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/administration/site/form/site-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: SiteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteFormComponent", function() { return SiteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utils/dto-utils */ "./src/app/shared/utils/dto-utils.ts");
/* harmony import */ var _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/utils/label-value-utils */ "./src/app/shared/utils/label-value-utils.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _site_form_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./site-form.service */ "./src/app/main/administration/site/form/site-form.service.ts");
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

















var SiteFormComponent = /** @class */ (function (_super) {
    __extends(SiteFormComponent, _super);
    function SiteFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, translateService, siteFormService, dateService, confirmationService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.translateService = translateService;
        _this.siteFormService = siteFormService;
        _this.dateService = dateService;
        _this.confirmationService = confirmationService;
        _this.init();
        _this.initCapabilityTableDataSource();
        return _this;
    }
    SiteFormComponent.prototype.init = function () {
        this.site = {};
        this.companies = [];
        this.capability = [];
        this.capabilityAdded = [];
        this.capabilityRemoved = [];
        this.capabilityUpdated = [];
        this.currentCapability = undefined;
        this.currentCapabilityIndex = -1;
        this.capabilityDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read;
        this.showCapabilityDialog = false;
        this.isLoading = false;
        this.technicalLevels = [];
        this.loadCompany();
        this.loadTechnicalLevel();
    };
    SiteFormComponent.prototype.initCapabilityTableDataSource = function () {
        this.capabilityTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'pnCode',
                    translateKey: this.getTranslateKey('pnCode')
                },
                {
                    field: 'technicalLevel',
                    translateKey: this.getTranslateKey('technicalLevel')
                },
                {
                    field: 'cost',
                    translateKey: this.getTranslateKey('cost')
                },
                {
                    field: 'availabilityDate',
                    translateKey: this.getTranslateKey('availabilityDate')
                },
                {
                    field: 'tat',
                    translateKey: this.getTranslateKey('tat')
                }
            ],
            data: []
        });
    };
    SiteFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].ADM_SITE_FORM;
    };
    SiteFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (!!this.componentData) {
            this.loadCompany();
            this.updateOpenMode(this.componentData.openMode);
            var context = this.componentData.objectId && this.serializationService.deserialize(this.componentData.objectId).siteName
                ? this.serializationService.deserialize(this.componentData.objectId).siteCode + " " + this.serializationService.deserialize(this.componentData.objectId).siteName
                : this.componentData.objectId &&
                    "" + this.serializationService.deserialize(this.componentData.objectId).siteCode;
            var contextMode = this.isCreateOpenMode ? 'tab.createMode' : context;
            if (!!contextMode) {
                this.displayComponentContext(contextMode, this.isCreateOpenMode);
            }
            this.loadSite();
        }
    };
    SiteFormComponent.prototype.loadCompany = function () {
        var _this = this;
        this.siteFormService.findBidtCompanyByCriteria({}).subscribe(function (results) {
            _this.companies = results;
        });
    };
    SiteFormComponent.prototype.loadTechnicalLevel = function () {
        var _this = this;
        this.siteFormService.findAllBireTils().subscribe(function (results) {
            results.forEach(function (result) {
                if (result.technicalLevel !== null && result.technicalLevel !== undefined && !!result.tilName) {
                    var tempName = {
                        value: result.technicalLevel.toString(),
                        label: result.tilName
                    };
                    _this.technicalLevels.push(tempName);
                }
            });
        });
    };
    SiteFormComponent.prototype.loadSite = function () {
        var _this = this;
        if (!!this.componentData && !!this.componentData.objectId) {
            this.isLoading = true;
            // Load Site object
            var siteObject = this.serializationService.deserialize(this.componentData.objectId);
            if (!!siteObject.siteId) {
                this.siteFormService.getById(siteObject.siteId).subscribe(function (result) {
                    _this.isLoading = false;
                    if (!!result) {
                        _this.site = result;
                        _this.site.companyId = !!result.bidtCompanyId ? result.bidtCompanyId.toString() : '';
                        if (!!_this.site && !!_this.site.siteCode) {
                            var siteCode = _this.site.siteCode;
                            _this.loadcapabilities(siteCode);
                        }
                    }
                });
            }
            else {
                _super.prototype.throwUnboundLocalError.call(this, 'loadSite', 'siteObject.siteId');
            }
        }
    };
    SiteFormComponent.prototype.getTechnicalLevelValueById = function (technicalLevelId) {
        var selectedTechnicalLevel = this.technicalLevels.find(function (technicalLevel) {
            return technicalLevel.value === technicalLevelId.toString();
        });
        return selectedTechnicalLevel ? selectedTechnicalLevel.label : '';
    };
    SiteFormComponent.prototype.loadcapabilities = function (repairCenterCode) {
        var _this = this;
        this.siteFormService.findBsdeSitePnTilsBySiteCode(repairCenterCode).subscribe(function (results) {
            _this.capability = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_15__["ListUtils"].orEmpty(results);
            var capabilities = [];
            results.forEach(function (result) {
                var tempCapability = _this.createCapabilityRow(result);
                if (!!result && !!tempCapability) {
                    capabilities.push(tempCapability);
                }
            });
            _this.capabilityTableDataSource.setData(capabilities);
        });
    };
    SiteFormComponent.prototype.createCapabilityRow = function (resultCapability) {
        if (!!resultCapability.pnCode && !!resultCapability.technicalLevel) {
            var capabilityRow = {
                repairCenterCode: resultCapability.repairCenterCode,
                pnCode: resultCapability.pnCode,
                technicalLevel: this.getTechnicalLevelValueById(Number(resultCapability.technicalLevel)),
                technicalLevelId: resultCapability.technicalLevel,
                cost: resultCapability.cost,
                availabilityDate: this.dateService.dateToString(resultCapability.availabilityDate),
                tat: resultCapability.tat
            };
            return capabilityRow;
        }
        else {
            _super.prototype.throwUnboundLocalError.call(this, 'createCapabilityRow', 'resultCapability');
        }
    };
    SiteFormComponent.prototype.createCapability = function () {
        this.currentCapability = undefined;
        this.capabilityDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Create;
        this.showCapabilityDialog = true;
    };
    SiteFormComponent.prototype.editCapability = function () {
        if (this.capabilityTableDataSource.dataSelectionCount === 1) {
            var selectedCapability = this.findMatchingCapability(this.capabilityTableDataSource.dataSelection[0]);
            if (!!selectedCapability) {
                this.currentCapabilityIndex = this.capability.findIndex(function (capability) {
                    return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_13__["DTOUtils"].equalsBsdeSitePnTilDTO(capability, capability);
                });
                this.currentCapability = __assign({}, selectedCapability);
                this.capabilityDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write;
                this.showCapabilityDialog = true;
            }
        }
    };
    SiteFormComponent.prototype.findMatchingCapability = function (row) {
        var bsdeSitePnTilDTOToReturn;
        if (!!row) {
            bsdeSitePnTilDTOToReturn = this.capability.find(function (capability) {
                return (!!capability.pnCode &&
                    capability.pnCode === row.pnCode &&
                    !!capability.technicalLevel &&
                    capability.technicalLevel === row.technicalLevelId);
            });
        }
        return bsdeSitePnTilDTOToReturn;
    };
    SiteFormComponent.prototype.openCapability = function () {
        if (this.capabilityTableDataSource.dataSelectionCount === 1) {
            this.currentCapability = this.findMatchingCapability(this.capabilityTableDataSource.dataSelection[0]);
            this.currentCapabilityIndex = -1;
            this.capabilityDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read;
            this.showCapabilityDialog = true;
        }
    };
    SiteFormComponent.prototype.onAddCapability = function (capability) {
        if (!!capability) {
            capability.repairCenterCode = this.site.siteCode;
            if (this.currentCapabilityIndex !== -1) {
                this.capability[this.currentCapabilityIndex] = capability;
                var createdRowFromCapabilityDataEvent = this.createCapabilityRow(capability);
                if (!!createdRowFromCapabilityDataEvent) {
                    this.capabilityTableDataSource.replaceData(this.capabilityTableDataSource.dataSelection[0], createdRowFromCapabilityDataEvent);
                    var updatedCustomerEvolutionIndex = this.capabilityUpdated.findIndex(function (customerEvolutionUpdated) {
                        return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_13__["DTOUtils"].equalsBsdeSitePnTilDTO(customerEvolutionUpdated, capability);
                    });
                    if (updatedCustomerEvolutionIndex !== -1) {
                        this.capabilityUpdated[updatedCustomerEvolutionIndex] = capability;
                    }
                    else {
                        this.capabilityUpdated = __spread(this.capabilityUpdated, [capability]);
                    }
                }
            }
            else {
                var isAdded = this.capability.some(function (capabilityAdded) {
                    return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_13__["DTOUtils"].equalsBsdeSitePnTilDTO(capabilityAdded, capability);
                });
                if (isAdded) {
                    this.messageService.showWarningMessage(this.getTranslateKey('warningOnCapabilityExists'));
                }
                else {
                    var tempCapability = this.createCapabilityRow(capability);
                    if (!!tempCapability) {
                        this.capability = __spread(this.capability, [capability]);
                        this.capabilityAdded = __spread(this.capabilityAdded, [capability]);
                        this.capabilityTableDataSource.addData([tempCapability]);
                    }
                }
            }
        }
        this.capabilityTableDataSource.dataSelection = [];
        this.currentCapabilityIndex = -1;
    };
    SiteFormComponent.prototype.deleteCapability = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: 'global.deleteConfirmationMsg',
            accept: function () {
                _this.capabilityTableDataSource.dataSelection.forEach(function (capability) {
                    _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_14__["LabelValueUtils"].labelToStringValue(capability, 'technicalLevel', _this.technicalLevels);
                    if (!!capability.pnCode && !!capability.technicalLevel) {
                        var bsdeSitePnTilDTO = {
                            pnCode: capability.pnCode,
                            repairCenterCode: capability.repairCenterCode,
                            technicalLevel: capability.technicalLevel
                        };
                        var selectedCapability_1 = _this.findMatchingCapability(capability);
                        var capabilityAddedWithoutSelection = _this.capabilityAdded.filter(function (capabilityAdded) {
                            return !!selectedCapability_1 && !_shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_13__["DTOUtils"].equalsBsdeSitePnTilDTO(selectedCapability_1, capabilityAdded);
                        });
                        if (_this.capabilityAdded.length !== capabilityAddedWithoutSelection.length) {
                            _this.capabilityAdded = capabilityAddedWithoutSelection;
                        }
                        else {
                            _this.capabilityRemoved.push(bsdeSitePnTilDTO);
                        }
                    }
                    else {
                        _super.prototype.throwUnboundLocalError.call(_this, 'deleteCapability', 'capability');
                    }
                });
                _this.capabilityTableDataSource.setData(_this.capabilityTableDataSource.dataSrc.filter(function (capability) {
                    return !_this.capabilityTableDataSource.dataSelection.some(function (selectedCapability) {
                        return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_13__["DTOUtils"].equalsBsdeSitePnTilDTO(_this.findMatchingCapability(capability), _this.findMatchingCapability(selectedCapability));
                    });
                }));
                _this.capabilityTableDataSource.dataSelection = [];
            }
        });
    };
    SiteFormComponent.prototype.editSite = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write);
    };
    SiteFormComponent.prototype.validateForm = function () {
        if (!!this.site && !!this.site.siteCode && this.site.siteCode.trim() && this.site.companyId) {
            return true;
        }
        else {
            return false;
        }
    };
    SiteFormComponent.prototype.saveSite = function () {
        var _this = this;
        if (this.validateForm()) {
            if (!!this.componentData && !!this.componentData.objectId) {
                var siteObject = this.serializationService.deserialize(this.componentData.objectId);
                if (siteObject.siteId) {
                    this.site.siteId = siteObject.siteId;
                }
            }
            var bidtSiteDTO = {
                siteId: this.site.siteId,
                siteCode: this.site.siteCode,
                siteName: this.site.siteName,
                siteDescription: this.site.siteDescription,
                bidtCompanyId: !!this.site.companyId ? +this.site.companyId : undefined
            };
            this.capabilityAdded.forEach(function (capability) { return (capability.repairCenterCode = _this.site.siteCode); });
            var saveSiteInput = {
                bidtSiteDTO: bidtSiteDTO,
                bsdeSitePntilAddDTOList: this.capabilityAdded,
                bsdeSitePnTilDeleteDTOIdList: this.capabilityRemoved,
                bsdeSitePntilUpdateDTOList: this.capabilityUpdated
            };
            this.showSaveSpinner = true;
            this.siteFormService.saveSite(saveSiteInput).subscribe(function (result) {
                if (!!_this.componentData && !!_this.site.siteCode) {
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnSave'));
                    _this.componentData.objectId = _this.serializationService.serialize(result);
                    var context = _this.serializationService.deserialize(_this.componentData.objectId).siteName
                        ? _this.serializationService.deserialize(_this.componentData.objectId).siteCode + "\n            " + _this.serializationService.deserialize(_this.componentData.objectId).siteName
                        : _this.serializationService.deserialize(_this.componentData.objectId).siteCode;
                    _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read);
                    _this.displayComponentContext(context, _this.isCreateOpenMode);
                    _this.capabilityAdded = [];
                    _this.capabilityUpdated = [];
                    _this.capabilityRemoved = [];
                }
                else {
                    _super.prototype.throwUnboundLocalError.call(_this, 'saveSite', 'this.site.siteCode');
                }
                _this.showSaveSpinner = false;
            }, function (error) {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSave'));
                _this.showSaveSpinner = false;
            });
        }
        else {
            this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
        }
    };
    SiteFormComponent.prototype.cancelSite = function () {
        if (this.isWriteOpenMode) {
            this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read);
        }
        this.reloadSite();
    };
    SiteFormComponent.prototype.reloadSite = function () {
        this.init();
        this.loadSite();
    };
    SiteFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-site-form',
            template: __webpack_require__(/*! ./site-form.component.html */ "./src/app/main/administration/site/form/site-form.component.html"),
            styles: [__webpack_require__(/*! ./site-form.component.scss */ "./src/app/main/administration/site/form/site-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__["TabService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _site_form_service__WEBPACK_IMPORTED_MODULE_16__["SiteFormService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]])
    ], SiteFormComponent);
    return SiteFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_12__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/administration/site/form/site-form.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/administration/site/form/site-form.service.ts ***!
  \********************************************************************/
/*! exports provided: SiteFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteFormService", function() { return SiteFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-company.api */ "./src/app/shared/api/bidt-company.api.ts");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
/* harmony import */ var _shared_api_logistics_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/logistics-management.api */ "./src/app/shared/api/logistics-management.api.ts");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/api/task-management.api */ "./src/app/shared/api/task-management.api.ts");
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









var SiteFormService = /** @class */ (function (_super) {
    __extends(SiteFormService, _super);
    function SiteFormService(http, appConfigService, bidtSiteApi, logisticsManagementApi, productStructureManagementApi, taskManagementApi, bidtCompanyApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtSiteApi = bidtSiteApi;
        _this.logisticsManagementApi = logisticsManagementApi;
        _this.productStructureManagementApi = productStructureManagementApi;
        _this.taskManagementApi = taskManagementApi;
        _this.bidtCompanyApi = bidtCompanyApi;
        return _this;
    }
    SiteFormService.prototype.getById = function (siteId) {
        return _super.prototype.post.call(this, this.bidtSiteApi.getById, siteId);
    };
    SiteFormService.prototype.findBsdeSitePnTilsBySiteCode = function (repairCenterCode) {
        return _super.prototype.post.call(this, this.logisticsManagementApi.findBsdeSitePnTilsBySiteCode, repairCenterCode);
    };
    SiteFormService.prototype.findAllBirePnByCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBirePnByCriteria, criteria);
    };
    SiteFormService.prototype.findBidtCompanyByCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.bidtCompanyApi.findByCriteria, criteria);
    };
    SiteFormService.prototype.findAllBireTils = function () {
        return _super.prototype.post.call(this, this.taskManagementApi.findAllBireTils);
    };
    SiteFormService.prototype.saveSite = function (saveSiteInput) {
        return _super.prototype.post.call(this, this.bidtSiteApi.saveSite, saveSiteInput);
    };
    SiteFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__["AppConfigService"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__["BidtSiteApi"],
            _shared_api_logistics_management_api__WEBPACK_IMPORTED_MODULE_4__["LogisticsManagementApi"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_5__["ProductStructureManagementApi"],
            _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_6__["TaskManagementApi"],
            _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__["BidtCompanyApi"]])
    ], SiteFormService);
    return SiteFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/administration/site/search/site-search.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/administration/site/search/site-search.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div class=\"page-subtitle\">- {{ \"page.searchPage\" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"openNewSite()\" *ngIf=\"hasUpdateAccessRight\">\r\n      {{ \"global.create\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      id=\"actions\"\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button id=\"favorites\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row search-criteria-header\">\r\n                  <aw-manage-search-criteria\r\n                    [componentId]=\"SEARCH_CRITERIA_ID\"\r\n                    (onSelected)=\"loadSearchCriteria($event)\"\r\n                    (onSavedAsked)=\"saveSearchCriteriaAsked()\"\r\n                    [objectFromPage]=\"criteriaToSave\"\r\n                    [canChange]=\"!hasBeenCalculated\"\r\n                  ></aw-manage-search-criteria>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".siteCode\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.siteCode\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".siteName\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.siteName\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".bidtCompanyId\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        name=\"bidtCompanyName\"\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"companies\"\r\n                        [(ngModel)]=\"searchObject.bidtCompanyId\"\r\n                        [showClear]=\"true\"\r\n                        (keyup.enter)=\"search()\"\r\n                        (onChange)=\"loadCompany()\"\r\n                        placeholder=\"&nbsp;\"\r\n                        required\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row search-criteria-footer\">\r\n                  <div class=\"search-actions\">\r\n                    <button\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      class=\"btn-with-spinner\"\r\n                      color=\"primary\"\r\n                      (click)=\"search()\"\r\n                      appKeyPress\r\n                      [keyCode]=\"'Enter'\"\r\n                      (keyPress)=\"search()\"\r\n                    >\r\n                      <span *ngIf=\"isLoading\" class=\"lds-hourglass\"></span>\r\n                      {{ \"global.toSearch\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <!-- Sites table -->\r\n\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.results\" | translate }} ({{ siteTableDataSource ? siteTableDataSource.dataCount : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <a-table [dataSource]=\"siteTableDataSource\">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf=\"siteTableDataSource && siteTableDataSource.hasData && !siteTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"exportTable()\"\r\n                  >\r\n                    {{ \"global.export\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf=\"hasManageAccessRight && siteTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    color=\"warn\"\r\n                    (click)=\"deleteSites()\"\r\n                  >\r\n                    {{ \"global.delete\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf=\"siteTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"openSelectedSites()\"\r\n                  >\r\n                    {{ \"global.open\" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/administration/site/search/site-search.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/main/administration/site/search/site-search.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .criteria-checkboxes,\n:host .form-group {\n  margin-right: 20px;\n  max-width: 15rem;\n  min-width: 10rem;\n  width: 20%; }\n  :host .criteria-checkboxes:last-of-type,\n  :host .form-group:last-of-type {\n    margin-right: 0; }\n  :host .search-criteria-primary {\n  justify-content: flex-start; }\n  :host .search-criteria-primary .criteria-checkboxes {\n    display: flex;\n    flex-direction: column; }\n  :host .search-criteria-primary .criteria-checkboxes p-checkbox:first-of-type {\n      margin-bottom: 5px; }\n  :host .search-criteria-primary .criteria-checkboxes p-checkbox:nth-of-type(2) {\n      margin-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hZG1pbmlzdHJhdGlvbi9zaXRlL3NlYXJjaC9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxhZG1pbmlzdHJhdGlvblxcc2l0ZVxcc2VhcmNoXFxzaXRlLXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFHSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7RUFOZDs7SUFTTSxlQUFlLEVBQUE7RUFUckI7RUFjSSwyQkFBMkIsRUFBQTtFQWQvQjtJQWlCTSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFsQjVCO01BcUJRLGtCQUFrQixFQUFBO0VBckIxQjtNQXlCUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FkbWluaXN0cmF0aW9uL3NpdGUvc2VhcmNoL3NpdGUtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jcml0ZXJpYS1jaGVja2JveGVzLFxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1heC13aWR0aDogMTVyZW07XHJcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuXHJcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWFyY2gtY3JpdGVyaWEtcHJpbWFyeSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgLmNyaXRlcmlhLWNoZWNrYm94ZXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgcC1jaGVja2JveDpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAtY2hlY2tib3g6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/administration/site/search/site-search.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/administration/site/search/site-search.component.ts ***!
  \**************************************************************************/
/*! exports provided: SiteSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteSearchComponent", function() { return SiteSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/export.service */ "./src/app/shared/services/export.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _site_search_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./site-search.service */ "./src/app/main/administration/site/search/site-search.service.ts");
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















var SiteSearchComponent = /** @class */ (function (_super) {
    __extends(SiteSearchComponent, _super);
    function SiteSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, siteSearchService, confirmationService, exportService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.siteSearchService = siteSearchService;
        _this.confirmationService = confirmationService;
        _this.exportService = exportService;
        _this.SEARCH_CRITERIA_ID = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SITE_SEARCH_CRITERIA_ID;
        _this.isLoading = false;
        _this.companies = [];
        _this.displayedSiteRowNb = 0;
        _this.searchObject = {};
        _this.resetSearchCriteria();
        _this.initSiteTableDataSource();
        _this.loadCompany();
        return _this;
    }
    SiteSearchComponent_1 = SiteSearchComponent;
    SiteSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].ADM_SITE_SEARCH;
    };
    SiteSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
    };
    SiteSearchComponent.prototype.loadCompany = function () {
        var _this = this;
        this.siteSearchService.findBidtCompanyByCriteria({}).subscribe(function (results) {
            _this.companies = results;
        });
    };
    SiteSearchComponent.prototype.deleteSites = function () {
        var _this = this;
        var confirmMessageKey = this.siteTableDataSource.dataSelectionCount > 1 ? 'confirmDeleteSelectedSites' : 'confirmDeleteSelectedSite';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(confirmMessageKey),
            accept: function () {
                var selectedBidtSiteDTOId = new Array();
                _this.siteTableDataSource.dataSelection.forEach(function (site) {
                    if (!!site && !!site.siteCode) {
                        var siteIds = {
                            siteId: site.siteId
                        };
                        if (!!siteIds.siteId) {
                            selectedBidtSiteDTOId.push(siteIds.siteId);
                        }
                        else {
                            _super.prototype.throwUnboundLocalError.call(_this, 'deleteSites', 'siteIds.siteId');
                        }
                    }
                });
                _this.siteSearchService.removeBidtSite(selectedBidtSiteDTOId).subscribe(function () {
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteSite'));
                    _this.siteTableDataSource.dataSelection = [];
                    _this.search();
                });
            }
        });
    };
    SiteSearchComponent.prototype.exportTable = function () {
        var siteExportData;
        siteExportData = this.siteTableDataSource.dataSrc.map(function (site) {
            var siteRowExport = {
                siteCode: site.siteCode,
                siteName: site.siteName,
                bidtCompanyId: site.bidtCompanyId,
                siteDescription: site.siteDescription
            };
            return siteRowExport;
        });
        if (!!this.componentData) {
            this.exportService.toExcel(siteExportData, SiteSearchComponent_1.CUSTOMER_TABLE_EXPORT_NAME, this.componentData.componentId);
        }
        else {
            _super.prototype.throwUnboundLocalError.call(this, 'exportTable', 'this.componentData');
        }
    };
    SiteSearchComponent.prototype.openNewSite = function () {
        this.openSite(undefined, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Create);
    };
    SiteSearchComponent.prototype.openSelectedSites = function () {
        var _this = this;
        this.siteTableDataSource.dataSelection.forEach(function (site) {
            if (!!site) {
                if (!!site.siteId && _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(site.siteId.toString())) {
                    _this.messageService.showWarningMessage(_this.getTranslateKey('errorOnMissingSiteCode'));
                }
                else {
                    _this.openSite(site, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read);
                }
            }
        });
    };
    SiteSearchComponent.prototype.resetSearchCriteria = function () {
        this.criteriaName = undefined;
        this.searchObject = {};
    };
    SiteSearchComponent.prototype.loadSearchCriteria = function (event) {
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
        this.search();
    };
    SiteSearchComponent.prototype.saveSearchCriteriaAsked = function () {
        var criteriaToSave = this.searchObject;
        this.criteriaToSave = criteriaToSave;
    };
    SiteSearchComponent.prototype.search = function () {
        var _this = this;
        this.isLoading = true;
        this.siteTableDataSource.setData([]);
        this.siteSearchService.findBidtSiteByCriteria(this.searchObject).subscribe(function (result) {
            _this.setresultTable(result);
            _this.isLoading = false;
        });
    };
    SiteSearchComponent.prototype.updateDisplayedSiteRowNb = function (value) {
        this.displayedSiteRowNb = value;
    };
    SiteSearchComponent.prototype.initSiteTableDataSource = function () {
        this.siteTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'siteCode',
                    translateKey: this.getTranslateKey('siteCode'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].LEFT,
                    width: '25%'
                },
                {
                    field: 'siteName',
                    translateKey: this.getTranslateKey('siteName'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].LEFT,
                    width: '25%'
                },
                {
                    field: 'bidtCompanyId',
                    translateKey: this.getTranslateKey('bidtCompanyId'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].LEFT,
                    width: '25%'
                },
                {
                    field: 'siteDescription',
                    translateKey: this.getTranslateKey('siteDescription'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].LEFT,
                    width: '25%'
                }
            ],
            data: []
        });
    };
    SiteSearchComponent.prototype.formatCompany = function (companyId) {
        var selectedCompany = this.companies.find(function (company) {
            return company.value === companyId.toString();
        });
        return selectedCompany ? selectedCompany.label : '';
    };
    SiteSearchComponent.prototype.openSite = function (objectId, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].ADM_SITE_FORM,
            openMode: openMode
        };
        if (!!objectId) {
            var siteFormId = {
                siteId: objectId.siteId,
                siteCode: objectId.siteCode,
                siteName: objectId.siteName
            };
            data.objectId = this.serializationService.serialize(siteFormId);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    SiteSearchComponent.prototype.setresultTable = function (result) {
        var _this = this;
        if (!!result) {
            var results_1 = [];
            result.list.forEach(function (res) {
                if (!!res && !!res.bidtCompanyId && !!res.siteCode) {
                    var siteRow = {
                        siteCode: res.siteCode,
                        siteName: res.siteName ? res.siteName : '',
                        bidtCompanyId: _this.formatCompany(res.bidtCompanyId),
                        siteDescription: res.siteDescription ? res.siteDescription : '',
                        siteId: res.siteId
                    };
                    results_1.push(siteRow);
                }
            });
            this.siteTableDataSource.setData(results_1);
            this.siteTableDataSource.update();
            this.displayedSiteRowNb = this.siteTableDataSource.dataCount;
        }
        this.siteTableDataSource.dataSelection = [];
    };
    var SiteSearchComponent_1;
    SiteSearchComponent.CUSTOMER_TABLE_EXPORT_NAME = 'site-list';
    SiteSearchComponent = SiteSearchComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-site-search',
            template: __webpack_require__(/*! ./site-search.component.html */ "./src/app/main/administration/site/search/site-search.component.html"),
            styles: [__webpack_require__(/*! ./site-search.component.scss */ "./src/app/main/administration/site/search/site-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__["TabService"],
            _site_search_service__WEBPACK_IMPORTED_MODULE_14__["SiteSearchService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
            _shared_services_export_service__WEBPACK_IMPORTED_MODULE_6__["ExportService"]])
    ], SiteSearchComponent);
    return SiteSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/administration/site/search/site-search.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/administration/site/search/site-search.service.ts ***!
  \************************************************************************/
/*! exports provided: SiteSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteSearchService", function() { return SiteSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-company.api */ "./src/app/shared/api/bidt-company.api.ts");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
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






var SiteSearchService = /** @class */ (function (_super) {
    __extends(SiteSearchService, _super);
    function SiteSearchService(http, appConfigService, bidtSiteApi, bidtCompanyApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtSiteApi = bidtSiteApi;
        _this.bidtCompanyApi = bidtCompanyApi;
        return _this;
    }
    SiteSearchService.prototype.findBidtCompanyByCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.bidtCompanyApi.findByCriteria, criteria);
    };
    SiteSearchService.prototype.findBidtSiteByCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.bidtSiteApi.findByCriteria, criteria);
    };
    SiteSearchService.prototype.removeBidtSite = function (bidtSiteId) {
        return _super.prototype.post.call(this, this.bidtSiteApi.delete, bidtSiteId);
    };
    SiteSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__["BidtSiteApi"],
            _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__["BidtCompanyApi"]])
    ], SiteSearchService);
    return SiteSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/administration/site/site.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/administration/site/site.module.ts ***!
  \*********************************************************/
/*! exports provided: SiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteModule", function() { return SiteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/keyfilter */ "./node_modules/primeng/keyfilter.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/dialog-table/dialog-table.module */ "./src/app/shared/components/dialog-table/dialog-table.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_dialog_capability_dialog_capability_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form/dialog-capability/dialog-capability.component */ "./src/app/main/administration/site/form/dialog-capability/dialog-capability.component.ts");
/* harmony import */ var _form_site_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form/site-form.component */ "./src/app/main/administration/site/form/site-form.component.ts");
/* harmony import */ var _form_site_form_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form/site-form.service */ "./src/app/main/administration/site/form/site-form.service.ts");
/* harmony import */ var _search_site_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./search/site-search.component */ "./src/app/main/administration/site/search/site-search.component.ts");
/* harmony import */ var _search_site_search_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./search/site-search.service */ "./src/app/main/administration/site/search/site-search.service.ts");
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
    primeng_dialog__WEBPACK_IMPORTED_MODULE_2__["DialogModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__["InputTextareaModule"],
    primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5__["KeyFilterModule"],
    primeng_message__WEBPACK_IMPORTED_MODULE_6__["MessageModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
    primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5__["KeyFilterModule"],
    primeng_message__WEBPACK_IMPORTED_MODULE_6__["MessageModule"]
];
var INTERNAL_MODULES = [_shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_12__["DialogTableModule"], _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_14__["ModalModule"], _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_15__["TableModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_form_dialog_capability_dialog_capability_component__WEBPACK_IMPORTED_MODULE_17__["DialogCapabilityComponent"]];
var DYNAMIC_COMPONENTS = [_form_site_form_component__WEBPACK_IMPORTED_MODULE_18__["SiteFormComponent"], _search_site_search_component__WEBPACK_IMPORTED_MODULE_20__["SiteSearchComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_site_form_service__WEBPACK_IMPORTED_MODULE_19__["SiteFormService"], _search_site_search_service__WEBPACK_IMPORTED_MODULE_21__["SiteSearchService"]];
var SiteModule = /** @class */ (function () {
    function SiteModule() {
    }
    SiteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_9__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_10__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_16__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS),
                _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_13__["ManageSearchCriteriaModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], SiteModule);
    return SiteModule;
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
//# sourceMappingURL=administration-site-site-module.js.map