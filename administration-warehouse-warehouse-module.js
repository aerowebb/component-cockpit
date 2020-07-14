(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administration-warehouse-warehouse-module"],{

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

/***/ "./src/app/main/administration/warehouse/form/dialog-storage-bin/dialog-storage-bin.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/administration/warehouse/form/dialog-storage-bin/dialog-storage-bin.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ sbTitle }}</div>\r\n  </a-header>\r\n  <a-content>\r\n    <div class=\"form-group required\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".sbNumber\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          name=\"sbNumber\"\r\n          class=\"aw-input\"\r\n          [(ngModel)]=\"document.sbNumber\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          maxlength=\"50\"\r\n          required\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group required\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".sbType\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          name=\"sbType\"\r\n          class=\"aw-dropdown fixed-width\"\r\n          [options]=\"types\"\r\n          [(ngModel)]=\"document.bidtStorageBinTypeId\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [showClear]=\"true\"\r\n          placeholder=\"&nbsp;\"\r\n          appendTo=\"body\"\r\n          [style]=\"{ width: '100%' }\"\r\n          required\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".sbDescription\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          name=\"sbDescription\"\r\n          class=\"aw-input\"\r\n          [(ngModel)]=\"document.sbDescription\"\r\n          maxlength=\"300\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".sbLocalisation\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          name=\"sbLocalisation\"\r\n          class=\"aw-input\"\r\n          [(ngModel)]=\"document.sbLocalisation\"\r\n          maxlength=\"300\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".sbSurface\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <input\r\n          #sbSurface=\"ngModel\"\r\n          type=\"text\"\r\n          name=\"sbSurface\"\r\n          class=\"aw-input\"\r\n          [(ngModel)]=\"document.sbSurface\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          maxlength=\"20\"\r\n          [pKeyFilter]=\"inputValidationService.validatorOfPositiveInteger()\"\r\n          [pValidateOnly]=\"true\"\r\n        />\r\n        <p-message\r\n          *ngIf=\"sbSurface.invalid && (sbSurface.dirty || sbSurface.touched)\"\r\n          severity=\"error\"\r\n          [text]=\"inputValidationService.formatOfPositiveInteger()\"\r\n        ></p-message>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".sbVolume\" | translate }}</label>\r\n      <div class=\"form-control\">\r\n        <input\r\n          #sbVolume=\"ngModel\"\r\n          type=\"text\"\r\n          name=\"sbVolume\"\r\n          class=\"aw-input\"\r\n          [(ngModel)]=\"document.sbVolume\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          maxlength=\"20\"\r\n          [pKeyFilter]=\"inputValidationService.validatorOfPositiveInteger()\"\r\n          [pValidateOnly]=\"true\"\r\n        />\r\n        <p-message\r\n          *ngIf=\"sbVolume.invalid && (sbVolume.dirty || sbVolume.touched)\"\r\n          severity=\"error\"\r\n          [text]=\"inputValidationService.formatOfPositiveInteger()\"\r\n        ></p-message>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n  <a-footer>\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      (click)=\"validate()\"\r\n      [disabled]=\"!document.sbNumber || !document.bidtStorageBinTypeId\"\r\n    >\r\n      <span>{{ \"global.validate\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/administration/warehouse/form/dialog-storage-bin/dialog-storage-bin.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/administration/warehouse/form/dialog-storage-bin/dialog-storage-bin.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DialogStorageBinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogStorageBinComponent", function() { return DialogStorageBinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/input-validation.service */ "./src/app/shared/services/input-validation.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
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






var DialogStorageBinComponent = /** @class */ (function (_super) {
    __extends(DialogStorageBinComponent, _super);
    function DialogStorageBinComponent(inputValidationService, messageService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Read, 'DialogStorageBinComponent') || this;
        _this.inputValidationService = inputValidationService;
        _this.messageService = messageService;
        _this.translateService = translateService;
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogStorageBinComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
        if (!this.document) {
            this.document = {};
        }
        this.sbTitle = this.translateService.instant(this.getTranslateKey('title'));
        if (this.isArea) {
            this.sbTitle = this.translateService.instant(this.getTranslateKey('titleArea'));
        }
    };
    DialogStorageBinComponent.prototype.validate = function () {
        if (this.document.sbNumber && this.document.bidtStorageBinTypeId) {
            var maxIntegerValue = 9223372036854775807;
            var docSurface = !!this.document.sbSurface && this.document.sbSurface > maxIntegerValue;
            var docVolume = !!this.document.sbVolume && this.document.sbVolume > maxIntegerValue;
            if (docSurface || docVolume) {
                this.messageService.showErrorMessage(this.getTranslateKey('maxValueError'));
            }
            this.onValidated.emit(this.document);
            this.closeDialog();
        }
        else {
            this.messageService.showErrorMessage('global.missingFields');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogStorageBinComponent.prototype, "document", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DialogStorageBinComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogStorageBinComponent.prototype, "types", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogStorageBinComponent.prototype, "isArea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogStorageBinComponent.prototype, "onValidated", void 0);
    DialogStorageBinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-storage-bin',
            template: __webpack_require__(/*! ./dialog-storage-bin.component.html */ "./src/app/main/administration/warehouse/form/dialog-storage-bin/dialog-storage-bin.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_3__["InputValidationService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], DialogStorageBinComponent);
    return DialogStorageBinComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/administration/warehouse/form/warehouse-form.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/administration/warehouse/form/warehouse-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div *ngIf=\"wareHouseTitleText\" class=\"page-subtitle\">- {{ wareHouseTitleText }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button *ngIf=\"isReadOpenMode && hasUpdateAccessRight\" type=\"button\" mat-raised-button (click)=\"editWarehouse()\">\r\n      {{ \"global.edit\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode && !isCreateOpenMode\"\r\n      type=\"button\"\r\n      color=\"warn\"\r\n      mat-raised-button\r\n      (click)=\"cancelWarehouse()\"\r\n    >\r\n      {{ \"global.cancel\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      class=\"btn-with-spinner\"\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"saveWarehouse()\"\r\n    >\r\n      <span class=\"lds-hourglass\" *ngIf=\"showSaveSpinner\"></span>\r\n      {{ \"global.save\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"reloadWarehouse()\">{{ \"global.refresh\" | translate }}</button>\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".mainInformation\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"grid-row\">\r\n                  <div class=\"form-group required\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".whCode\" | translate }}</label>\r\n                    <div class=\"form-control\">\r\n                      <input\r\n                        type=\"text\"\r\n                        name=\"whCode\"\r\n                        class=\"aw-input\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                        [(ngModel)]=\"bidtWarehouseDTO.whCode\"\r\n                        required\r\n                        maxlength=\"50\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".whName\" | translate }}</label>\r\n                    <div class=\"form-control\">\r\n                      <input\r\n                        type=\"text\"\r\n                        name=\"whName\"\r\n                        class=\"aw-input\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                        [(ngModel)]=\"bidtWarehouseDTO.whName\"\r\n                        maxlength=\"100\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".whType\" | translate }}</label>\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        name=\"whType\"\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                        [options]=\"types\"\r\n                        [(ngModel)]=\"bidtWarehouseDTO.whType\"\r\n                        [showClear]=\"true\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"grid-row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".company\" | translate }}</label>\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        name=\"whCompany\"\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                        [options]=\"companies\"\r\n                        [(ngModel)]=\"bidtWarehouseDTO.bidtCompanyId\"\r\n                        [showClear]=\"true\"\r\n                        (onChange)=\"onSelectCompany()\"\r\n                        required\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group required\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".whSite\" | translate }}</label>\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        name=\"whSite\"\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                        [options]=\"sites\"\r\n                        [(ngModel)]=\"bidtWarehouseDTO.bidtSiteId\"\r\n                        [showClear]=\"true\"\r\n                        (onChange)=\"onSelectSite()\"\r\n                        required\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{\r\n                      componentData.componentId + \".supplyingWarehouse\" | translate\r\n                    }}</label>\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        name=\"whSite\"\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                        [options]=\"supplyingWarehouses\"\r\n                        [(ngModel)]=\"bidtWarehouseDTO.bidtWarehouseId\"\r\n                        [showClear]=\"true\"\r\n                        required\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"grid-row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".whPhoneNumber\" | translate }} </label>\r\n                    <div class=\"form-control\">\r\n                      <input\r\n                        type=\"text\"\r\n                        name=\"whPhoneNumber\"\r\n                        class=\"aw-input\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                        [(ngModel)]=\"bidtWarehouseDTO.whPhoneNumber\"\r\n                        maxlength=\"20\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".whZipCode\" | translate }}</label>\r\n                    <div class=\"form-control\">\r\n                      <input\r\n                        type=\"text\"\r\n                        name=\"whZipCode\"\r\n                        class=\"aw-input\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                        [(ngModel)]=\"bidtWarehouseDTO.whZipCode\"\r\n                        maxlength=\"10\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".country\" | translate }}</label>\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        name=\"whType\"\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                        [options]=\"countries\"\r\n                        [(ngModel)]=\"bidtWarehouseDTO.whCountry\"\r\n                        [showClear]=\"true\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"grid-row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".whAdress\" | translate }}</label>\r\n                    <div class=\"form-control\">\r\n                      <textarea\r\n                        class=\"aw-textarea\"\r\n                        [rows]=\"3\"\r\n                        pInputTextarea\r\n                        [disabled]=\"isReadOpenMode\"\r\n                        [(ngModel)]=\"bidtWarehouseDTO.whAdress\"\r\n                        maxlength=\"300\"\r\n                      ></textarea>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\"></div>\r\n                  <div class=\"form-group\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #wareHouseTableAnchor class=\"grid-cell grid-cell--container\">\r\n            <!-- Storage bins table -->\r\n\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".storage\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"list-with-details\">\r\n                <div class=\"list\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h4 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".areaList\" | translate }} ({{\r\n                        areaTableDataSource ? areaTableDataSource.dataCount : 0\r\n                      }})\r\n                    </h4>\r\n                  </div>\r\n                  <a-table\r\n                    [dataSource]=\"areaTableDataSource\"\r\n                    (onRowSelect)=\"onSelectOrDeselectedArea()\"\r\n                    (onRowUnselect)=\"onSelectOrDeselectedArea()\"\r\n                  >\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && areaTableDataSource.hasDataSelection\"\r\n                        type=\"button\"\r\n                        color=\"warn\"\r\n                        mat-raised-button\r\n                        (click)=\"deleteSelectedAreas()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && areaTableDataSource.dataSelectionCount === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"editArea()\"\r\n                      >\r\n                        {{ \"global.edit\" | translate }}\r\n                      </button>\r\n                      <button\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openSelectedAreas()\"\r\n                        *ngIf=\"areaTableDataSource.dataSelectionCount === 1\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && !areaTableDataSource.hasDataSelection\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"createArea()\"\r\n                      >\r\n                        {{ \"global.add\" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n                <div class=\"details\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h4 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".storageBinList\" | translate }} ({{\r\n                        storageBinsTableDataSource ? storageBinsTableDataSource.dataCount : 0\r\n                      }})\r\n                    </h4>\r\n                  </div>\r\n                  <a-table [dataSource]=\"storageBinsTableDataSource\">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && storageBinsTableDataSource.hasDataSelection\"\r\n                        type=\"button\"\r\n                        color=\"warn\"\r\n                        mat-raised-button\r\n                        (click)=\"deleteSelectedStorageBins()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && storageBinsTableDataSource.dataSelectionCount === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"editStorageBin()\"\r\n                      >\r\n                        {{ \"global.edit\" | translate }}\r\n                      </button>\r\n                      <button\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openSelectedStorageBins()\"\r\n                        *ngIf=\"storageBinsTableDataSource.dataSelectionCount === 1\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf=\"\r\n                          !isReadOpenMode &&\r\n                          areaTableDataSource.dataSelectionCount === 1 &&\r\n                          !storageBinsTableDataSource.hasDataSelection\r\n                        \"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"createStorageBin()\"\r\n                      >\r\n                        {{ \"global.add\" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <aw-dialog-storage-bin\r\n    *ngIf=\"showStorageBinDialog\"\r\n    [(display)]=\"showStorageBinDialog\"\r\n    [document]=\"currentStorageBin\"\r\n    [openMode]=\"storageBinDialogOpenMode\"\r\n    [types]=\"storageBinTypes\"\r\n    [isArea]=\"false\"\r\n    (onValidated)=\"onAddStorageBin($event)\"\r\n  >\r\n  </aw-dialog-storage-bin>\r\n  <aw-dialog-storage-bin\r\n    *ngIf=\"showAreaDialog\"\r\n    [(display)]=\"showAreaDialog\"\r\n    [document]=\"currentArea\"\r\n    [openMode]=\"areaDialogOpenMode\"\r\n    [types]=\"areaBinTypes\"\r\n    [isArea]=\"true\"\r\n    (onValidated)=\"onAddArea($event)\"\r\n  >\r\n  </aw-dialog-storage-bin>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/administration/warehouse/form/warehouse-form.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/main/administration/warehouse/form/warehouse-form.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .criteria-checkboxes,\n:host .form-group {\n  margin-right: 20px;\n  min-width: 10rem;\n  width: 20%; }\n  :host .criteria-checkboxes:last-of-type,\n  :host .form-group:last-of-type {\n    margin-right: 0; }\n  :host .search-criteria-primary {\n  justify-content: flex-start; }\n  :host .search-criteria-primary .criteria-checkboxes {\n    display: flex;\n    flex-direction: column; }\n  :host .search-criteria-primary .criteria-checkboxes p-checkbox:first-of-type {\n      margin-bottom: 5px; }\n  :host .search-criteria-primary .criteria-checkboxes p-checkbox:nth-of-type(2) {\n      margin-top: 5px; }\n  :host .margin-left20px {\n  margin-left: 20px; }\n  :host .col .row .form-group {\n  width: 15rem; }\n  :host .grid-cell-title-container {\n  padding-left: 1.25rem; }\n  :host .grid-cell-title-container .grid-cell-title {\n    color: #01579b; }\n  :host .list-with-details .details {\n  flex-grow: 1;\n  margin-left: 5px; }\n  :host .list-with-details .list {\n  max-width: 43%;\n  min-width: 43%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hZG1pbmlzdHJhdGlvbi93YXJlaG91c2UvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxhZG1pbmlzdHJhdGlvblxcd2FyZWhvdXNlXFxmb3JtXFx3YXJlaG91c2UtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9hZG1pbmlzdHJhdGlvbi93YXJlaG91c2UvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7O0VBR0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7RUFMZDs7SUFPTSxlQUFlLEVBQUE7RUFQckI7RUFXSSwyQkFBMkIsRUFBQTtFQVgvQjtJQWFNLGFBQWE7SUFDYixzQkFBc0IsRUFBQTtFQWQ1QjtNQWdCUSxrQkFBa0IsRUFBQTtFQWhCMUI7TUFtQlEsZUFBZSxFQUFBO0VBbkJ2QjtFQXdCSSxpQkFBaUIsRUFBQTtFQXhCckI7RUE2QlEsWUFBWSxFQUFBO0VBN0JwQjtFQW1DSSxxQkFBcUIsRUFBQTtFQW5DekI7SUFxQ00sY0NuQ2dCLEVBQUE7RURGdEI7RUEyQ00sWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBNUN0QjtFQWdETSxjQUFjO0VBQ2QsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hZG1pbmlzdHJhdGlvbi93YXJlaG91c2UvZm9ybS93YXJlaG91c2UtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuXHJcbjpob3N0IHtcclxuICAuY3JpdGVyaWEtY2hlY2tib3hlcyxcclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2VhcmNoLWNyaXRlcmlhLXByaW1hcnkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgLmNyaXRlcmlhLWNoZWNrYm94ZXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBwLWNoZWNrYm94OmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgICBwLWNoZWNrYm94Om50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm1hcmdpbi1sZWZ0MjBweCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcbiAgLmNvbCB7XHJcbiAgICAucm93IHtcclxuICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC10aXRsZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xyXG4gICAgLmdyaWQtY2VsbC10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxpc3Qtd2l0aC1kZXRhaWxzIHtcclxuICAgIC5kZXRhaWxzIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0IHtcclxuICAgICAgbWF4LXdpZHRoOiA0MyU7XHJcbiAgICAgIG1pbi13aWR0aDogNDMlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/main/administration/warehouse/form/warehouse-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/administration/warehouse/form/warehouse-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: WarehouseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseFormComponent", function() { return WarehouseFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/lang-constants */ "./src/app/shared/constants/lang-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _warehouse_form_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./warehouse-form.service */ "./src/app/main/administration/warehouse/form/warehouse-form.service.ts");
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

















var WarehouseFormComponent = /** @class */ (function (_super) {
    __extends(WarehouseFormComponent, _super);
    function WarehouseFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, warehouseFormService, confirmationService, translateService, propertiesService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.warehouseFormService = warehouseFormService;
        _this.confirmationService = confirmationService;
        _this.translateService = translateService;
        _this.propertiesService = propertiesService;
        _this.initStorageBinsTableDataSource();
        _this.isLoading = false;
        _this.init();
        return _this;
    }
    WarehouseFormComponent.prototype.getComponentName = function () {
        return 'WarehouseFormComponent';
    };
    WarehouseFormComponent.prototype.init = function () {
        this.filteredRowsNb = 0;
        this.types = [];
        this.sites = [];
        this.companies = [];
        this.supplyingWarehouses = [];
        this.countries = [];
        this.storageBinTypes = [];
        this.areaBinTypes = [];
        this.deletedStorageBins = [];
        this.bidtWarehouseDTO = {};
        this.warehouseTypeMap = new Map();
        this.binTypeMap = new Map();
        this.currentStorageBin = undefined;
        this.currentStorageBinIndex = -1;
        this.currentArea = undefined;
        this.currentAreaIndex = -1;
        this.storageBinDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read;
        this.areaDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read;
        this.showStorageBinDialog = false;
        this.showAreaDialog = false;
        this.loadCompanies();
        this.loadSites();
        this.loadSuppliyingWarehouses();
    };
    WarehouseFormComponent.prototype.initStorageBinsTableDataSource = function () {
        this.storageBinsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'sbNumber',
                    translateKey: this.getTranslateKey('sbNumber'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '10%'
                },
                {
                    field: 'sbDescription',
                    translateKey: this.getTranslateKey('sbDescription'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '18%'
                },
                {
                    field: 'sbType',
                    translateKey: this.getTranslateKey('sbType'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '18%'
                },
                {
                    field: 'sbLocalisation',
                    translateKey: this.getTranslateKey('sbLocalisation'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '18%'
                },
                {
                    field: 'sbSurface',
                    translateKey: this.getTranslateKey('sbSurface'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '18%'
                },
                {
                    field: 'sbVolume',
                    translateKey: this.getTranslateKey('sbVolume'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '18%'
                }
            ],
            data: []
        });
        this.areaTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'sbNumber',
                    translateKey: this.getTranslateKey('sbNumber'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '10%'
                },
                {
                    field: 'sbDescription',
                    translateKey: this.getTranslateKey('sbDescription'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '18%'
                },
                {
                    field: 'sbType',
                    translateKey: this.getTranslateKey('sbType'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '18%'
                }
            ],
            data: []
        });
    };
    WarehouseFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        // Load dropdowns
        // tslint:disable-next-line:no-any
        var observables = [
            this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__["GenericPropertyConstants"].WAREHOUSE_TYPE_MAP),
            this.propertiesService.getCountries(),
            this.warehouseFormService.findWarehouseAreaType(),
            this.warehouseFormService.findStorageBinType()
        ];
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).subscribe(function (results) {
            var types = results['0'];
            var countries = results['1'];
            types.forEach(function (element) {
                _this.warehouseTypeMap.set(element.value, element.label);
            });
            _this.areaBinTypes = _this.getBinTypeArray(results['2']);
            _this.storageBinTypes = _this.getBinTypeArray(results['3']);
            _this.types = types;
            _this.countries = countries;
            if (_this.componentData) {
                _this.updateOpenMode(_this.componentData.openMode);
                var warehouseObj = void 0;
                if (_this.componentData.objectId) {
                    warehouseObj = _this.serializationService.deserialize(_this.componentData.objectId);
                    _this.wareHouseId = warehouseObj.wareHouseId;
                    _this.wareHouseTitleText = warehouseObj.whName
                        ? warehouseObj.whCode + "-" + warehouseObj.whName
                        : "" + warehouseObj.whCode;
                    _this.loadWarehouse();
                }
                var context = _this.isCreateOpenMode ? 'tab.createMode' : _this.wareHouseTitleText;
                _this.displayComponentContext(context, _this.isCreateOpenMode);
            }
        });
    };
    WarehouseFormComponent.prototype.getBinTypeArray = function (binTypes) {
        var _this = this;
        var binArray = binTypes.map(function (element) {
            var matches = element.label.match(/EN=(.*)FR=(.*)/);
            var label = matches
                ? _this.translateService.currentLang === _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_6__["LangConstants"].FRENCH_CODE
                    ? matches[2]
                    : matches[1]
                : element.label;
            _this.binTypeMap.set(element.value, label);
            return {
                label: label,
                value: element.value
            };
        });
        return binArray;
    };
    WarehouseFormComponent.prototype.cancelWarehouse = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read);
        this.reloadWarehouse();
    };
    WarehouseFormComponent.prototype.checkValidation = function () {
        return !!this.bidtWarehouseDTO.whCode && !!this.bidtWarehouseDTO.bidtSiteId;
    };
    WarehouseFormComponent.prototype.editWarehouse = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write);
    };
    WarehouseFormComponent.prototype.reloadWarehouse = function () {
        this.init();
        this.ngOnInit();
    };
    WarehouseFormComponent.prototype.loadWarehouse = function () {
        var _this = this;
        this.areaTableDataSource.setData([]);
        this.areaTableDataSource.update();
        this.storageBinsTableDataSource.setData([]);
        this.storageBinsTableDataSource.update();
        if (!!this.wareHouseId) {
            this.warehouseFormService.findBidtWarehouseById(this.wareHouseId).subscribe(function (result) {
                _this.bidtWarehouseDTO = result;
                _this.loadSites();
                _this.loadAreas();
            });
        }
        else {
            _super.prototype.throwUnboundLocalError.call(this, 'loadWarehouse', 'this.wareHouseId');
        }
    };
    WarehouseFormComponent.prototype.loadAreas = function () {
        var _this = this;
        if (this.bidtWarehouseDTO.bidtStorageBinDTOs) {
            var bins_1 = [];
            this.isLoading = false;
            this.bidtWarehouseDTO.bidtStorageBinDTOs.forEach(function (element) {
                if (!!element.bidtStorageBinTypeId) {
                    var rowObj = {
                        sbNumber: element.sbNumber,
                        sbType: _this.binTypeMap.get(element.bidtStorageBinTypeId),
                        sbDescription: element.sbDescription,
                        storageBinDTO: element
                    };
                    bins_1.push(rowObj);
                }
            });
            this.areaTableDataSource.setData(bins_1);
            this.areaTableDataSource.update();
            this.filteredRowsNb = this.areaTableDataSource.dataCount;
        }
        this.areaTableDataSource.dataSelection = [];
    };
    WarehouseFormComponent.prototype.onSelectOrDeselectedArea = function () {
        if (this.areaTableDataSource.dataSelectionCount === 1) {
            this.currentAreaIndex = this.areaTableDataSource.dataSrc.indexOf(this.areaTableDataSource.dataSelection[0]);
            var selectedBin = this.areaTableDataSource.dataSelection[0].storageBinDTO;
            this.currentArea = __assign({}, selectedBin);
            this.setResultsTable(selectedBin.bins);
        }
        else {
            this.currentArea = undefined;
            this.setResultsTable([]);
        }
    };
    WarehouseFormComponent.prototype.setResultsTable = function (result) {
        var _this = this;
        var bins = [];
        if (result) {
            this.isLoading = false;
            result.forEach(function (element) {
                if (!!element.bidtStorageBinTypeId) {
                    var rowObj = {
                        sbNumber: element.sbNumber,
                        sbType: _this.binTypeMap.get(element.bidtStorageBinTypeId),
                        sbDescription: element.sbDescription,
                        sbLocalisation: element.sbLocalisation,
                        sbSurface: element.sbSurface,
                        sbVolume: element.sbVolume,
                        storageBinDTO: element
                    };
                    bins.push(rowObj);
                }
            });
        }
        this.storageBinsTableDataSource.setData(bins);
        this.storageBinsTableDataSource.update();
        this.filteredRowsNb = this.storageBinsTableDataSource.dataCount;
        this.storageBinsTableDataSource.dataSelection = [];
    };
    WarehouseFormComponent.prototype.loadCompanies = function () {
        var _this = this;
        this.warehouseFormService.fillListCompanies().subscribe(function (result) {
            _this.companies = result;
            _this.loadSites();
        });
    };
    WarehouseFormComponent.prototype.loadSites = function () {
        var _this = this;
        this.warehouseFormService.fillListSite(this.bidtWarehouseDTO.bidtCompanyId).subscribe(function (result) {
            _this.sites = result;
            _this.loadSuppliyingWarehouses();
        });
    };
    WarehouseFormComponent.prototype.loadSuppliyingWarehouses = function () {
        var _this = this;
        this.supplyingWarehouses = [];
        if (!this.bidtWarehouseDTO.bidtSiteId) {
            return;
        }
        this.warehouseFormService.fillListSupplyingWarehouses(this.bidtWarehouseDTO.bidtSiteId).subscribe(function (result) {
            if (result && result.length) {
                _this.supplyingWarehouses = result.filter(function (item) { return item.value !== _this.bidtWarehouseDTO.wareHouseId; });
            }
        });
    };
    WarehouseFormComponent.prototype.onSelectCompany = function () {
        this.bidtWarehouseDTO.bidtSiteId = undefined;
        this.bidtWarehouseDTO.bidtWarehouseId = undefined;
        this.loadSites();
    };
    WarehouseFormComponent.prototype.onSelectSite = function () {
        this.bidtWarehouseDTO.bidtWarehouseId = undefined;
        this.loadSuppliyingWarehouses();
    };
    WarehouseFormComponent.prototype.saveWarehouse = function () {
        var _this = this;
        if (!this.bidtWarehouseDTO.whCode || !this.bidtWarehouseDTO.bidtSiteId) {
            this.messageService.showErrorMessage('global.missingFields');
            return;
        }
        this.bidtWarehouseDTO.whCategory = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].WAREHOUSE_CATEGORY_WAREHOUSE;
        var addedUpdatedStorageBin = [];
        this.areaTableDataSource.dataSrc.forEach(function (element) {
            element.storageBinDTO.sbCategory = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].STORAGE_BIN_CATEGORY_AREA;
            addedUpdatedStorageBin.push(element.storageBinDTO);
        });
        this.storageBinsTableDataSource.dataSrc.forEach(function (element) {
            element.storageBinDTO.sbCategory = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].STORAGE_BIN_CATEGORY_SB;
        });
        var saveObj = {
            bidtWarehouseDTO: this.bidtWarehouseDTO,
            bidtStorageBinDTO: addedUpdatedStorageBin,
            deletedStorageBinIdList: this.deletedStorageBins
        };
        this.showSaveSpinner = true;
        this.warehouseFormService.saveWarehouse(saveObj).subscribe(function (result) {
            if (!!_this.componentData && !_this.bidtWarehouseDTO.wareHouseId && result) {
                _this.bidtWarehouseDTO.wareHouseId = result;
                _this.componentData.componentId = _this.getComponentName();
                _this.componentData.objectId = _this.serializationService.serialize(_this.bidtWarehouseDTO);
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnSaveWarehouse'));
                _this.ngOnInit();
            }
            else {
                _this.storageBinsTableDataSource.dataSelection = [];
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnUpdateWarehouse'));
            }
            _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read);
            _this.showSaveSpinner = false;
        }, function (error) {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSaveWarehouse'));
            _this.showSaveSpinner = false;
        });
    };
    WarehouseFormComponent.prototype.createArea = function () {
        this.currentAreaIndex = -1;
        this.currentArea = undefined;
        this.areaDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Create;
        this.showAreaDialog = true;
    };
    WarehouseFormComponent.prototype.createStorageBin = function () {
        this.currentStorageBinIndex = -1;
        this.currentStorageBin = undefined;
        this.storageBinDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Create;
        this.showStorageBinDialog = true;
    };
    WarehouseFormComponent.prototype.editArea = function () {
        if (this.areaTableDataSource.dataSelectionCount === 1) {
            this.currentAreaIndex = this.areaTableDataSource.dataSrc.indexOf(this.areaTableDataSource.dataSelection[0]);
            var selectedBin = this.areaTableDataSource.dataSelection[0].storageBinDTO;
            this.currentArea = __assign({}, selectedBin);
            this.areaDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write;
            this.showAreaDialog = true;
        }
    };
    WarehouseFormComponent.prototype.editStorageBin = function () {
        if (this.storageBinsTableDataSource.dataSelectionCount === 1) {
            this.currentStorageBinIndex = this.storageBinsTableDataSource.dataSrc.indexOf(this.storageBinsTableDataSource.dataSelection[0]);
            var selectedBin = this.storageBinsTableDataSource.dataSelection[0].storageBinDTO;
            this.currentStorageBin = __assign({}, selectedBin);
            this.storageBinDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write;
            this.showStorageBinDialog = true;
        }
    };
    WarehouseFormComponent.prototype.openSelectedAreas = function () {
        if (this.areaTableDataSource.dataSelectionCount === 1) {
            var selectedBin = this.areaTableDataSource.dataSelection[0].storageBinDTO;
            this.currentArea = __assign({}, selectedBin);
            this.areaDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read;
            this.showAreaDialog = true;
        }
    };
    WarehouseFormComponent.prototype.openSelectedStorageBins = function () {
        if (this.storageBinsTableDataSource.dataSelectionCount === 1) {
            var selectedBin = this.storageBinsTableDataSource.dataSelection[0].storageBinDTO;
            this.currentStorageBin = __assign({}, selectedBin);
            this.storageBinDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read;
            this.showStorageBinDialog = true;
        }
    };
    WarehouseFormComponent.prototype.deleteSelectedAreas = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: 'global.confirmSelectedDataDelete',
            accept: function () {
                _this.areaTableDataSource.dataSelection.forEach(function (element) {
                    _this.areaTableDataSource.setData(_this.areaTableDataSource.data.filter(function (storage) { return storage.sbNumber !== element.sbNumber; }));
                    if (element.storageBinDTO.id) {
                        _this.deletedStorageBins.push(element.storageBinDTO.id);
                    }
                    _this.areaTableDataSource.update();
                });
                _this.areaTableDataSource.deleteDataSelection();
            }
        });
    };
    WarehouseFormComponent.prototype.deleteSelectedStorageBins = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: 'global.confirmSelectedDataDelete',
            accept: function () {
                _this.storageBinsTableDataSource.dataSelection.forEach(function (element) {
                    _this.storageBinsTableDataSource.setData(_this.storageBinsTableDataSource.data.filter(function (storage) { return storage.sbNumber !== element.sbNumber; }));
                    if (element.storageBinDTO.id) {
                        _this.deletedStorageBins.push(element.storageBinDTO.id);
                    }
                    _this.storageBinsTableDataSource.update();
                });
                _this.storageBinsTableDataSource.deleteDataSelection();
            }
        });
    };
    WarehouseFormComponent.prototype.onAddStorageBin = function (element) {
        if (!!element && !!element.bidtStorageBinTypeId) {
            if (!this.areaTableDataSource.dataSelection[0].storageBinDTO.bins) {
                this.areaTableDataSource.dataSelection[0].storageBinDTO.bins = [];
            }
            this.areaTableDataSource.dataSelection[0].storageBinDTO.bins.push(element);
            var rowObj = {
                sbNumber: element.sbNumber,
                sbType: this.binTypeMap.get(element.bidtStorageBinTypeId),
                sbDescription: element.sbDescription,
                sbLocalisation: element.sbLocalisation,
                sbSurface: element.sbSurface,
                sbVolume: element.sbVolume,
                storageBinDTO: element
            };
            if (this.currentStorageBinIndex !== -1) {
                this.storageBinsTableDataSource.replaceData(this.storageBinsTableDataSource.dataSrc[this.currentStorageBinIndex], rowObj);
            }
            else {
                this.storageBinsTableDataSource.addData([rowObj]);
            }
            this.storageBinsTableDataSource.dataSelection = [];
        }
        else {
            _super.prototype.throwUnboundLocalError.call(this, 'onAddStorageBin', 'element');
        }
    };
    WarehouseFormComponent.prototype.onAddArea = function (element) {
        if (!!element && !!element.bidtStorageBinTypeId) {
            var rowObj = {
                sbNumber: element.sbNumber,
                sbType: this.binTypeMap.get(element.bidtStorageBinTypeId),
                sbDescription: element.sbDescription,
                storageBinDTO: element
            };
            if (this.currentAreaIndex !== -1) {
                this.areaTableDataSource.replaceData(this.areaTableDataSource.dataSrc[this.currentAreaIndex], rowObj);
            }
            else {
                this.areaTableDataSource.addData([rowObj]);
            }
            this.areaTableDataSource.dataSelection = [];
        }
        else {
            _super.prototype.throwUnboundLocalError.call(this, 'onAddArea', 'element');
        }
    };
    WarehouseFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-warehouse-form',
            template: __webpack_require__(/*! ./warehouse-form.component.html */ "./src/app/main/administration/warehouse/form/warehouse-form.component.html"),
            styles: [__webpack_require__(/*! ./warehouse-form.component.scss */ "./src/app/main/administration/warehouse/form/warehouse-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__["TabService"],
            _warehouse_form_service__WEBPACK_IMPORTED_MODULE_16__["WarehouseFormService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__["PropertiesService"]])
    ], WarehouseFormComponent);
    return WarehouseFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_15__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/administration/warehouse/form/warehouse-form.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/administration/warehouse/form/warehouse-form.service.ts ***!
  \******************************************************************************/
/*! exports provided: WarehouseFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseFormService", function() { return WarehouseFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bidt_storage_bin_type_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-storage-bin-type.api */ "./src/app/shared/api/bidt-storage-bin-type.api.ts");
/* harmony import */ var _shared_api_bidt_storage_bin_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-storage-bin.api */ "./src/app/shared/api/bidt-storage-bin.api.ts");
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







var WarehouseFormService = /** @class */ (function (_super) {
    __extends(WarehouseFormService, _super);
    function WarehouseFormService(http, appConfigService, bidtWarehouseApi, bidtStorageBinApi, bidtStorageBinTypeApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.bidtStorageBinApi = bidtStorageBinApi;
        _this.bidtStorageBinTypeApi = bidtStorageBinTypeApi;
        return _this;
    }
    WarehouseFormService.prototype.getById = function (id) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.getById, id);
    };
    WarehouseFormService.prototype.findBidtWarehouseById = function (id) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findBidtWarehouseById, id);
    };
    WarehouseFormService.prototype.deleteStorageBin = function (ids) {
        return _super.prototype.post.call(this, this.bidtStorageBinApi.deleteStorageBin, ids);
    };
    WarehouseFormService.prototype.findByWarehouseId = function (id) {
        return _super.prototype.post.call(this, this.bidtStorageBinApi.findByWarehouseId, id);
    };
    WarehouseFormService.prototype.fillListSite = function (companyId) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.fillListSite, companyId);
    };
    WarehouseFormService.prototype.fillListCompanies = function () {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.fillListCompanies);
    };
    WarehouseFormService.prototype.fillListSupplyingWarehouses = function (siteId) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.fillListSupplyingWarehouses, siteId);
    };
    WarehouseFormService.prototype.findWarehouseAreaType = function () {
        return _super.prototype.post.call(this, this.bidtStorageBinTypeApi.findWarehouseAreaType);
    };
    WarehouseFormService.prototype.findStorageBinType = function () {
        return _super.prototype.post.call(this, this.bidtStorageBinTypeApi.findStorageBinType);
    };
    WarehouseFormService.prototype.saveWarehouse = function (saveWarehouseInput) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.saveWarehouse, saveWarehouseInput);
    };
    WarehouseFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__["BidtWarehouseApi"],
            _shared_api_bidt_storage_bin_api__WEBPACK_IMPORTED_MODULE_3__["BidtStorageBinApi"],
            _shared_api_bidt_storage_bin_type_api__WEBPACK_IMPORTED_MODULE_2__["BidtStorageBinTypeApi"]])
    ], WarehouseFormService);
    return WarehouseFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/administration/warehouse/search/warehouse-search.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main/administration/warehouse/search/warehouse-search.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"openNewWarehouse()\" *ngIf=\"hasUpdateAccessRight\">\r\n      {{ \"global.create\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"reloadWarehouse()\">{{ \"global.refresh\" | translate }}</button>\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-cell-content\">\r\n        <div class=\"grid-row\">\r\n          <div class=\"grid-cell--12\">\r\n            <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n              <!-- Warehouses search table -->\r\n\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ \"global.results\" | translate }}\r\n                    ({{ warehouseTableDataSource ? warehouseTableDataSource.dataCount : 0 }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <a-table [dataSource]=\"warehouseTableDataSource\">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf=\"\r\n                      warehouseTableDataSource &&\r\n                      warehouseTableDataSource.hasData &&\r\n                      !warehouseTableDataSource.hasDataSelection\r\n                    \"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"exportTable()\"\r\n                  >\r\n                    {{ \"global.export\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf=\"hasManageAccessRight && warehouseTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    color=\"warn\"\r\n                    (click)=\"deleteSelectedWarehouses()\"\r\n                  >\r\n                    {{ \"global.delete\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf=\"warehouseTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"openSelectedWarehouses()\"\r\n                  >\r\n                    {{ \"global.open\" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/administration/warehouse/search/warehouse-search.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/main/administration/warehouse/search/warehouse-search.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .criteria-checkboxes,\n:host .form-group {\n  margin-right: 20px;\n  max-width: 15rem;\n  min-width: 10rem;\n  width: 20%; }\n  :host .criteria-checkboxes:last-of-type,\n  :host .form-group:last-of-type {\n    margin-right: 0; }\n  :host .search-criteria-primary {\n  justify-content: flex-start; }\n  :host .search-criteria-primary .criteria-checkboxes {\n    display: flex;\n    flex-direction: column; }\n  :host .search-criteria-primary .criteria-checkboxes p-checkbox:first-of-type {\n      margin-bottom: 5px; }\n  :host .search-criteria-primary .criteria-checkboxes p-checkbox:nth-of-type(2) {\n      margin-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hZG1pbmlzdHJhdGlvbi93YXJlaG91c2Uvc2VhcmNoL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXGFkbWluaXN0cmF0aW9uXFx3YXJlaG91c2VcXHNlYXJjaFxcd2FyZWhvdXNlLXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFHSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7RUFOZDs7SUFTTSxlQUFlLEVBQUE7RUFUckI7RUFjSSwyQkFBMkIsRUFBQTtFQWQvQjtJQWlCTSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFsQjVCO01BcUJRLGtCQUFrQixFQUFBO0VBckIxQjtNQXlCUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2FkbWluaXN0cmF0aW9uL3dhcmVob3VzZS9zZWFyY2gvd2FyZWhvdXNlLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuY3JpdGVyaWEtY2hlY2tib3hlcyxcclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xyXG4gICAgbWluLXdpZHRoOiAxMHJlbTtcclxuICAgIHdpZHRoOiAyMCU7XHJcblxyXG4gICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLXByaW1hcnkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIC5jcml0ZXJpYS1jaGVja2JveGVzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIHAtY2hlY2tib3g6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwLWNoZWNrYm94Om50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/administration/warehouse/search/warehouse-search.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/administration/warehouse/search/warehouse-search.component.ts ***!
  \************************************************************************************/
/*! exports provided: WarehouseSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseSearchComponent", function() { return WarehouseSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/export.service */ "./src/app/shared/services/export.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _warehouse_search_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./warehouse-search.service */ "./src/app/main/administration/warehouse/search/warehouse-search.service.ts");
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














var WarehouseSearchComponent = /** @class */ (function (_super) {
    __extends(WarehouseSearchComponent, _super);
    function WarehouseSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, warehouseSearchService, exportService, confirmationService, propertiesService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.warehouseSearchService = warehouseSearchService;
        _this.exportService = exportService;
        _this.confirmationService = confirmationService;
        _this.propertiesService = propertiesService;
        _this.resultsTableExportName = 'warehouse-list';
        _this.typeMap = new Map();
        _this.searchObject = {};
        _this.filteredRowsNb = 0;
        _this.initWarehouseTableDataSource();
        _this.wareHouseExportDTO = [];
        return _this;
    }
    WarehouseSearchComponent.prototype.getComponentName = function () {
        return 'WarehouseSearchComponent';
    };
    WarehouseSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__["GenericPropertyConstants"].WAREHOUSE_TYPE_MAP).subscribe(function (types) {
            types.forEach(function (element) {
                _this.typeMap.set(element.value, element.label);
            });
            _this.search();
        });
    };
    WarehouseSearchComponent.prototype.initWarehouseTableDataSource = function () {
        this.warehouseTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'whCode',
                    translateKey: this.getTranslateKey('whCode')
                },
                {
                    field: 'whName',
                    translateKey: this.getTranslateKey('whName')
                },
                {
                    field: 'whType',
                    translateKey: this.getTranslateKey('whType')
                },
                {
                    field: 'whSite',
                    translateKey: this.getTranslateKey('whSite')
                }
            ],
            data: []
        });
    };
    WarehouseSearchComponent.prototype.reloadWarehouse = function () {
        this.initWarehouseTableDataSource();
        this.ngOnInit();
    };
    WarehouseSearchComponent.prototype.search = function () {
        var _this = this;
        this.warehouseSearchService.findByCriteriaWarehouse().subscribe(function (result) {
            _this.setResultsTable(result);
        });
    };
    WarehouseSearchComponent.prototype.setResultsTable = function (result) {
        var _this = this;
        if (result) {
            var warehouses_1 = [];
            result.forEach(function (element) {
                var rowObj = {
                    warehouseDTO: element.bidtWarehouseDTO,
                    whSite: element.siteName,
                    whCode: element.bidtWarehouseDTO.whCode,
                    whName: element.bidtWarehouseDTO.whName,
                    whType: element.bidtWarehouseDTO.whType && _this.typeMap.get(element.bidtWarehouseDTO.whType)
                };
                warehouses_1.push(rowObj);
            });
            this.warehouseTableDataSource.setData(warehouses_1);
            this.warehouseTableDataSource.update();
            this.filteredRowsNb = this.warehouseTableDataSource.dataCount;
        }
        this.warehouseTableDataSource.dataSelection = [];
    };
    WarehouseSearchComponent.prototype.exportTable = function () {
        var _this = this;
        this.warehouseTableDataSource.dataSrc.forEach(function (row) {
            if (!!row) {
                var wareHouseDTO = {
                    whCode: row.whCode,
                    whName: row.whName,
                    whType: row.whType,
                    whSite: row.whSite
                };
                _this.wareHouseExportDTO = __spread(_this.wareHouseExportDTO, [wareHouseDTO]);
            }
        });
        if (!!this.componentData) {
            this.exportService.toExcel(this.wareHouseExportDTO, this.resultsTableExportName, this.componentData.componentId);
        }
        else {
            _super.prototype.throwUnboundLocalError.call(this, 'exportTable', 'this.componentData');
        }
    };
    WarehouseSearchComponent.prototype.deleteSelectedWarehouses = function () {
        var _this = this;
        var warehouseIds = [];
        this.confirmationService.confirmDelete({
            messageKey: 'global.confirmSelectedDataDelete',
            accept: function () {
                _this.warehouseTableDataSource.dataSelection.forEach(function (warehouse) {
                    if (!!warehouse.warehouseDTO && !!warehouse.warehouseDTO.wareHouseId) {
                        warehouseIds.push(warehouse.warehouseDTO.wareHouseId);
                    }
                    else {
                        _super.prototype.throwUnboundLocalError.call(_this, 'deleteSelectedWarehouses', 'warehouse.warehouseDTO.warehouseId');
                    }
                });
                _this.warehouseSearchService.deleteWarehouses(warehouseIds).subscribe(function (result) {
                    _this.search();
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteWarehouse'));
                }, function (error) {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDeleteWarehouse'));
                });
                _this.warehouseTableDataSource.dataSelection = [];
            }
        });
    };
    // tslint:disable-next-line:no-any
    WarehouseSearchComponent.prototype.onFilter = function (event) {
        this.filteredRowsNb = event.filteredValue.length;
    };
    WarehouseSearchComponent.prototype.openWarehouse = function (object, openMode) {
        var labelKey = 'transaction.WarehouseFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'WarehouseFormComponent',
            objectId: object && this.serializationService.serialize(object),
            openMode: openMode
        };
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WarehouseSearchComponent.prototype.openNewWarehouse = function () {
        this.openWarehouse(undefined, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Create);
    };
    WarehouseSearchComponent.prototype.openSelectedWarehouses = function () {
        var _this = this;
        this.warehouseTableDataSource.dataSelection.forEach(function (warehouse) {
            _this.openWarehouse(warehouse.warehouseDTO, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Read);
        });
    };
    WarehouseSearchComponent.prototype.resetTableFilter = function () {
        this.globalFilterTxt = '';
    };
    WarehouseSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-warehouse-search',
            template: __webpack_require__(/*! ./warehouse-search.component.html */ "./src/app/main/administration/warehouse/search/warehouse-search.component.html"),
            styles: [__webpack_require__(/*! ./warehouse-search.component.scss */ "./src/app/main/administration/warehouse/search/warehouse-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__["TabService"],
            _warehouse_search_service__WEBPACK_IMPORTED_MODULE_13__["WarehouseSearchService"],
            _shared_services_export_service__WEBPACK_IMPORTED_MODULE_5__["ExportService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__["PropertiesService"]])
    ], WarehouseSearchComponent);
    return WarehouseSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/administration/warehouse/search/warehouse-search.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/administration/warehouse/search/warehouse-search.service.ts ***!
  \**********************************************************************************/
/*! exports provided: WarehouseSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseSearchService", function() { return WarehouseSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-company.api */ "./src/app/shared/api/bidt-company.api.ts");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
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







var WarehouseSearchService = /** @class */ (function (_super) {
    __extends(WarehouseSearchService, _super);
    function WarehouseSearchService(http, appConfigService, bidtCompanyApi, bidtSiteApi, bidtWarehouseApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtCompanyApi = bidtCompanyApi;
        _this.bidtSiteApi = bidtSiteApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        return _this;
    }
    WarehouseSearchService.prototype.findByCriteriaWarehouse = function () {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findByCriteriaWarehouse);
    };
    WarehouseSearchService.prototype.deleteWarehouses = function (wareHouseIds) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.delete, wareHouseIds);
    };
    /**************************************************************************
     * Company api
     *************************************************************************/
    WarehouseSearchService.prototype.findBidtCompanyByCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.bidtCompanyApi.findByCriteria, criteria);
    };
    /**************************************************************************
     * Site api
     *************************************************************************/
    WarehouseSearchService.prototype.findBidtSiteByCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.bidtSiteApi.findAll, criteria);
    };
    WarehouseSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"],
            _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_2__["BidtCompanyApi"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__["BidtSiteApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__["BidtWarehouseApi"]])
    ], WarehouseSearchService);
    return WarehouseSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/administration/warehouse/warehouse.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/administration/warehouse/warehouse.module.ts ***!
  \*******************************************************************/
/*! exports provided: WarehouseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseModule", function() { return WarehouseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/keyfilter */ "./node_modules/primeng/keyfilter.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_dialog_storage_bin_dialog_storage_bin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form/dialog-storage-bin/dialog-storage-bin.component */ "./src/app/main/administration/warehouse/form/dialog-storage-bin/dialog-storage-bin.component.ts");
/* harmony import */ var _form_warehouse_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form/warehouse-form.component */ "./src/app/main/administration/warehouse/form/warehouse-form.component.ts");
/* harmony import */ var _form_warehouse_form_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./form/warehouse-form.service */ "./src/app/main/administration/warehouse/form/warehouse-form.service.ts");
/* harmony import */ var _search_warehouse_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search/warehouse-search.component */ "./src/app/main/administration/warehouse/search/warehouse-search.component.ts");
/* harmony import */ var _search_warehouse_search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search/warehouse-search.service */ "./src/app/main/administration/warehouse/search/warehouse-search.service.ts");
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
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__["DropdownModule"],
    primeng_fileupload__WEBPACK_IMPORTED_MODULE_2__["FileUploadModule"],
    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_3__["InputTextareaModule"],
    primeng_keyfilter__WEBPACK_IMPORTED_MODULE_4__["KeyFilterModule"],
    primeng_message__WEBPACK_IMPORTED_MODULE_5__["MessageModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"]
];
var INTERNAL_MODULES = [_shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_11__["ModalModule"], _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_12__["TableModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_form_dialog_storage_bin_dialog_storage_bin_component__WEBPACK_IMPORTED_MODULE_14__["DialogStorageBinComponent"]];
var DYNAMIC_COMPONENTS = [_form_warehouse_form_component__WEBPACK_IMPORTED_MODULE_15__["WarehouseFormComponent"], _search_warehouse_search_component__WEBPACK_IMPORTED_MODULE_17__["WarehouseSearchComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_warehouse_form_service__WEBPACK_IMPORTED_MODULE_16__["WarehouseFormService"], _search_warehouse_search_service__WEBPACK_IMPORTED_MODULE_18__["WarehouseSearchService"]];
var WarehouseModule = /** @class */ (function () {
    function WarehouseModule() {
    }
    WarehouseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_13__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], WarehouseModule);
    return WarehouseModule;
}());



/***/ })

}]);
//# sourceMappingURL=administration-warehouse-warehouse-module.js.map