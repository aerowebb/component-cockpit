(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-purchase-contract-components-purchase-contract-purchase-contract-module"],{

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

/***/ "./src/app/main/overlay/overlay.service.ts":
/*!*************************************************!*\
  !*** ./src/app/main/overlay/overlay.service.ts ***!
  \*************************************************/
/*! exports provided: OverlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayService", function() { return OverlayService; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _overlay_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay-ref */ "./src/app/main/overlay/overlay-ref.ts");
/* harmony import */ var _overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.component */ "./src/app/main/overlay/overlay.component.ts");
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





var OverlayService = /** @class */ (function () {
    function OverlayService(_injector, _overlay) {
        this._injector = _injector;
        this._overlay = _overlay;
    }
    // //////////////////////////////////////////////////////////////////////////
    OverlayService.prototype.openWithPositionAbsolute = function (params) {
        return this.open(params, this.getConfig(params, this.getPositionAbsolute(params)));
    };
    OverlayService.prototype.openWithPositionCenter = function (params) {
        return this.open(params, this.getConfig(__assign({}, params, { hasVisibleBackdrop: params.hasVisibleBackdrop !== undefined ? params.hasVisibleBackdrop : true }), this.getPositionCenter()));
    };
    OverlayService.prototype.openWithPositionRelative = function (params) {
        return this.open(params, this.getConfig(params, this.getPositionRelative(params)));
    };
    // //////////////////////////////////////////////////////////////////////////
    OverlayService.prototype.createInjector = function (overlayRef, injector) {
        var tokens = new WeakMap([[_overlay_ref__WEBPACK_IMPORTED_MODULE_3__["OverlayRef"], overlayRef]]);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](injector, tokens);
    };
    OverlayService.prototype.getConfig = function (params, positionStrategy) {
        var hasBackdrop = params.hasBackdrop !== undefined ? params.hasBackdrop : true;
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
            hasBackdrop: hasBackdrop,
            positionStrategy: positionStrategy,
            backdropClass: hasBackdrop && params.hasVisibleBackdrop ? 'cdk-overlay-dark-backdrop' : '',
            height: params.height,
            scrollStrategy: this._overlay.scrollStrategies.reposition(),
            width: params.width
        });
    };
    OverlayService.prototype.getPositionAbsolute = function (params) {
        var positionStrategy = this._overlay
            .position()
            .global()
            .bottom(params.positions.bottom)
            .left(params.positions.left)
            .right(params.positions.right)
            .top(params.positions.top);
        return positionStrategy;
    };
    OverlayService.prototype.getPositionCenter = function () {
        var positionStrategy = this._overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
        return positionStrategy;
    };
    OverlayService.prototype.getPositionRelative = function (params) {
        var positionStrategy = this._overlay
            .position()
            .flexibleConnectedTo(params.origin)
            .withPositions(params.positions || [])
            .withFlexibleDimensions(false)
            .withPush(false);
        return positionStrategy;
    };
    OverlayService.prototype.open = function (params, overlayConfig) {
        var cdkOverlayRef = this._overlay.create(overlayConfig);
        var overlayRef = new _overlay_ref__WEBPACK_IMPORTED_MODULE_3__["OverlayRef"](cdkOverlayRef, params.content, params.data);
        var injector = this.createInjector(overlayRef, this._injector);
        cdkOverlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](_overlay_component__WEBPACK_IMPORTED_MODULE_4__["OverlayComponent"], undefined, injector));
        return overlayRef;
    };
    OverlayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]])
    ], OverlayService);
    return OverlayService;
}());



/***/ }),

/***/ "./src/app/modules/purchase-contract/api/purchase-contract-element-api.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/api/purchase-contract-element-api.ts ***!
  \********************************************************************************/
/*! exports provided: PurchaseContractElementApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractElementApi", function() { return PurchaseContractElementApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_abstract_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/api/abstract.api */ "./src/app/shared/api/abstract.api.ts");
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


var PurchaseContractElementApi = /** @class */ (function (_super) {
    __extends(PurchaseContractElementApi, _super);
    function PurchaseContractElementApi() {
        var _this = _super.call(this, PurchaseContractElementApi_1.baseUrl) || this;
        _this.getElementsByItemId = _super.prototype.appendToBaseUrl.call(_this, '/find_elements_by_item_id');
        return _this;
    }
    PurchaseContractElementApi_1 = PurchaseContractElementApi;
    var PurchaseContractElementApi_1;
    PurchaseContractElementApi.baseUrl = 'purchasecontract/bidt_purchase_contract_element';
    PurchaseContractElementApi = PurchaseContractElementApi_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PurchaseContractElementApi);
    return PurchaseContractElementApi;
}(_shared_api_abstract_api__WEBPACK_IMPORTED_MODULE_1__["AbstractApi"]));



/***/ }),

/***/ "./src/app/modules/purchase-contract/api/purchase-contract-item.api.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/api/purchase-contract-item.api.ts ***!
  \*****************************************************************************/
/*! exports provided: PurchaseContractItemApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractItemApi", function() { return PurchaseContractItemApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_abstract_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/api/abstract.api */ "./src/app/shared/api/abstract.api.ts");
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


var PurchaseContractItemApi = /** @class */ (function (_super) {
    __extends(PurchaseContractItemApi, _super);
    function PurchaseContractItemApi() {
        var _this = _super.call(this, PurchaseContractItemApi_1.baseUrl) || this;
        _this.getContractSliceItems = _super.prototype.appendToBaseUrl.call(_this, '/get_contract_slice_items');
        return _this;
    }
    PurchaseContractItemApi_1 = PurchaseContractItemApi;
    var PurchaseContractItemApi_1;
    PurchaseContractItemApi.baseUrl = 'purchasecontract/bidt_purchase_contract_item';
    PurchaseContractItemApi = PurchaseContractItemApi_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PurchaseContractItemApi);
    return PurchaseContractItemApi;
}(_shared_api_abstract_api__WEBPACK_IMPORTED_MODULE_1__["AbstractApi"]));



/***/ }),

/***/ "./src/app/modules/purchase-contract/api/purchase-contract.api.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/api/purchase-contract.api.ts ***!
  \************************************************************************/
/*! exports provided: PurchaseContractApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractApi", function() { return PurchaseContractApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_abstract_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/api/abstract.api */ "./src/app/shared/api/abstract.api.ts");
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


var PurchaseContractApi = /** @class */ (function (_super) {
    __extends(PurchaseContractApi, _super);
    function PurchaseContractApi() {
        var _this = _super.call(this, PurchaseContractApi_1.baseUrl) || this;
        // public readonly findAll: string = super.appendToBaseUrl('/find_all');
        _this.findByCriteria = _super.prototype.appendToBaseUrl.call(_this, '/find_by_criteria');
        _this.delete = _super.prototype.appendToBaseUrl.call(_this, '/delete');
        _this.getById = _super.prototype.appendToBaseUrl.call(_this, '/get_by_id');
        _this.addOrUpdate = _super.prototype.appendToBaseUrl.call(_this, '/add_or_update');
        _this.getContractSlices = _super.prototype.appendToBaseUrl.call(_this, '/get_contract_slices');
        _this.getContractPartners = _super.prototype.appendToBaseUrl.call(_this, '/get_contract_partners');
        _this.getContractDocuments = _super.prototype.appendToBaseUrl.call(_this, '/get_documents');
        return _this;
    }
    PurchaseContractApi_1 = PurchaseContractApi;
    var PurchaseContractApi_1;
    PurchaseContractApi.baseUrl = 'purchasecontract/bidt_purchase_contract';
    PurchaseContractApi = PurchaseContractApi_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PurchaseContractApi);
    return PurchaseContractApi;
}(_shared_api_abstract_api__WEBPACK_IMPORTED_MODULE_1__["AbstractApi"]));



/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-element/dialog-purchase-contract-element.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-element/dialog-purchase-contract-element.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"section\">\r\n      <div class=\"section-content\">\r\n        <div class=\"column\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".pnCode\" | translate }}</label>\r\n\r\n              <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: !isCreateOpenMode }\">\r\n                <div class=\"form-control-data\" (click)=\"openMaterialDialog()\">\r\n                  {{ bidtPurchaseContractElementDTO.birePnPnCode }}\r\n                </div>\r\n\r\n                <div *ngIf=\"bidtPurchaseContractElementDTO.birePnPnCode && !isReadOpenMode\" class=\"btn-clear-wrapper\">\r\n                  <i\r\n                    class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                    aria-hidden=\"true\"\r\n                    (click)=\"bidtPurchaseContractElementDTO.birePnPnCode = undefined\"\r\n                  ></i>\r\n                </div>\r\n                <div\r\n                  *ngIf=\"bidtPurchaseContractElementDTO.birePnPnCode === undefined && !isReadOpenMode\"\r\n                  class=\"btn-search-wrapper\"\r\n                >\r\n                  <i\r\n                    class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                    aria-hidden=\"true\"\r\n                    (click)=\"openMaterialDialog()\"\r\n                  ></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".pceUnit\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <input\r\n                  maxlength=\"37\"\r\n                  class=\"aw-input\"\r\n                  [(ngModel)]=\"bidtPurchaseContractElementDTO.pceUnit\"\r\n                  [disabled]=\"isReadOpenMode\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".pceQuantity\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <input\r\n                  type=\"text\"\r\n                  pKeyFilter=\"int\"\r\n                  maxlength=\"37\"\r\n                  class=\"aw-input\"\r\n                  [(ngModel)]=\"bidtPurchaseContractElementDTO.pceQuantity\"\r\n                  [disabled]=\"isReadOpenMode\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\"\r\n                >{{ getComponentName() + \".pcePriceExclTax\" | translate }} ({{\r\n                  bidtPurchaseContractElementDTO.pceCurrency\r\n                }})</label\r\n              >\r\n\r\n              <div class=\"form-control\">\r\n                <input\r\n                  #pciePriceExclTax=\"ngModel\"\r\n                  type=\"text\"\r\n                  [pKeyFilter]=\"inputValidationService.validatorOfMoney()\"\r\n                  [pValidateOnly]=\"true\"\r\n                  maxlength=\"37\"\r\n                  class=\"aw-input\"\r\n                  [(ngModel)]=\"bidtPurchaseContractElementDTO.pcePriceExclTax\"\r\n                  [disabled]=\"isReadOpenMode\"\r\n                  (blur)=\"calculatePrice()\"\r\n                />\r\n                <p-message\r\n                  *ngIf=\"pciePriceExclTax.invalid && (pciePriceExclTax.dirty || pciePriceExclTax.touched)\"\r\n                  severity=\"error\"\r\n                  [text]=\"inputValidationService.formatOfMoney()\"\r\n                ></p-message>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".pceVat\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <input\r\n                  type=\"text\"\r\n                  [pKeyFilter]=\"inputValidationService.validatorOfMoney()\"\r\n                  maxlength=\"37\"\r\n                  class=\"aw-input\"\r\n                  [(ngModel)]=\"bidtPurchaseContractElementDTO.pceVat\"\r\n                  [disabled]=\"isReadOpenMode\"\r\n                  (blur)=\"calculatePrice()\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".pcePrice\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <input\r\n                  type=\"text\"\r\n                  pKeyFilter=\"money\"\r\n                  maxlength=\"37\"\r\n                  class=\"aw-input\"\r\n                  [(ngModel)]=\"bidtPurchaseContractElementDTO.pcePrice\"\r\n                  [disabled]=\"true\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".pceCurrency\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <input\r\n                  type=\"text\"\r\n                  pKeyFilter=\"alpha\"\r\n                  maxlength=\"37\"\r\n                  class=\"aw-input\"\r\n                  [(ngModel)]=\"bidtPurchaseContractElementDTO.pceCurrency\"\r\n                  [disabled]=\"isReadOpenMode\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".pceTimeLimit\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <input\r\n                  type=\"text\"\r\n                  pKeyFilter=\"int\"\r\n                  maxlength=\"37\"\r\n                  class=\"aw-input\"\r\n                  [(ngModel)]=\"bidtPurchaseContractElementDTO.pceTimeLimit\"\r\n                  [disabled]=\"isReadOpenMode\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span *ngIf=\"!isReadOpenMode\">{{ \"global.cancel\" | translate }}</span>\r\n      <span *ngIf=\"isReadOpenMode\">{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      (click)=\"validate()\"\r\n      [disabled]=\"!bidtPurchaseContractElementDTO.birePnPnCode\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-material\r\n  *ngIf=\"showQuickSearchMaterialPopup\"\r\n  [(display)]=\"showQuickSearchMaterialPopup\"\r\n  [material-code]=\"bidtPurchaseContractElementDTO.birePnPnCode\"\r\n  (onSelected)=\"setSelectedMaterial($event)\"\r\n></aw-dialog-search-material>\r\n"

/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-element/dialog-purchase-contract-element.component.ts":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-element/dialog-purchase-contract-element.component.ts ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: DialogPurchaseContractElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPurchaseContractElementComponent", function() { return DialogPurchaseContractElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_logistics_order_document_form_order_document_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../main/logistics/order-document/form/order-document-form.service */ "./src/app/main/logistics/order-document/form/order-document-form.service.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../shared/services/input-validation.service */ "./src/app/shared/services/input-validation.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _services_purchase_contract_element_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../services/purchase-contract-element.service */ "./src/app/modules/purchase-contract/services/purchase-contract-element.service.ts");
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









var DialogPurchaseContractElementComponent = /** @class */ (function (_super) {
    __extends(DialogPurchaseContractElementComponent, _super);
    function DialogPurchaseContractElementComponent(orderDocumentFormService, messageService, purchaseContractElementService, inputValidationService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].PCT_PURCHASE_ELEMENT_AND_SERVICES_DIALOG_FORM) || this;
        _this.orderDocumentFormService = orderDocumentFormService;
        _this.messageService = messageService;
        _this.purchaseContractElementService = purchaseContractElementService;
        _this.inputValidationService = inputValidationService;
        _this.onAddElementAndServices = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onUpdateElementAndServices = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogPurchaseContractElementComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].PCT_PURCHASE_ELEMENT_AND_SERVICES_DIALOG_FORM;
    };
    DialogPurchaseContractElementComponent.prototype.ngOnInit = function () {
        this.getLocalCurrency();
        this.calculatePrice();
        this.updateOpenMode(this.openMode); // create
        if (!this.data) {
            this.bidtPurchaseContractElementDTO = {};
            this.getLocalCurrency();
        }
        else {
            this.bidtPurchaseContractElementDTO = __assign({}, this.data);
        }
    };
    DialogPurchaseContractElementComponent.prototype.validate = function () {
        if (this.isScreenValidated()) {
            if (this.openMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Create) {
                this.onAddElementAndServices.emit(this.bidtPurchaseContractElementDTO);
            }
            else {
                this.onUpdateElementAndServices.emit(this.bidtPurchaseContractElementDTO);
            }
            this.closeDialog();
        }
        else {
            this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
        }
    };
    DialogPurchaseContractElementComponent.prototype.isScreenValidated = function () {
        return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_7__["StringUtils"].isNullOrEmpty(this.bidtPurchaseContractElementDTO.birePnPnCode);
    };
    DialogPurchaseContractElementComponent.prototype.closeDialog = function () {
        this.display = false;
    };
    DialogPurchaseContractElementComponent.prototype.openMaterialDialog = function () {
        this.showQuickSearchMaterialPopup = true;
    };
    DialogPurchaseContractElementComponent.prototype.setSelectedMaterial = function (event) {
        this.bidtPurchaseContractElementDTO.birePnPnCode = event.pnCode;
    };
    DialogPurchaseContractElementComponent.prototype.getLocalCurrency = function () {
        var _this = this;
        this.orderDocumentFormService.getLocalCurrency().subscribe(function (res) {
            _this.bidtPurchaseContractElementDTO.pceCurrency = res;
        });
    };
    DialogPurchaseContractElementComponent.prototype.calculatePrice = function () {
        this.purchaseContractElementService.calculatePrice(this.bidtPurchaseContractElementDTO);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DialogPurchaseContractElementComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogPurchaseContractElementComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogPurchaseContractElementComponent.prototype, "onAddElementAndServices", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogPurchaseContractElementComponent.prototype, "onUpdateElementAndServices", void 0);
    DialogPurchaseContractElementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-purchase-contract-element',
            template: __webpack_require__(/*! ./dialog-purchase-contract-element.component.html */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-element/dialog-purchase-contract-element.component.html")
        }),
        __metadata("design:paramtypes", [_main_logistics_order_document_form_order_document_form_service__WEBPACK_IMPORTED_MODULE_1__["OrderDocumentFormService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _services_purchase_contract_element_service__WEBPACK_IMPORTED_MODULE_8__["PurchaseContractElementService"],
            _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_4__["InputValidationService"]])
    ], DialogPurchaseContractElementComponent);
    return DialogPurchaseContractElementComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"]));



/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-item/dialog-purchase-contract-item.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-item/dialog-purchase-contract-item.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"75\">\r\n  <a-header>\r\n    <div class=\"modal-title\">\r\n      {{ getComponentName() + \".contractItems\" | translate }}\r\n    </div>\r\n  </a-header>\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group flex--2\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pciCode\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <input type=\"number\" class=\"aw-input\" [(ngModel)]=\"item.pciCode\" [disabled]=\"isReadOnlyForm\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group flex--4\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pciLabel\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"item.pciLabel\" [disabled]=\"isReadOnlyForm\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pciType\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              placeholder=\"&nbsp;\"\r\n              [showClear]=\"true\"\r\n              [options]=\"itemTypeListDisplay\"\r\n              [(ngModel)]=\"item.pciType\"\r\n              appendTo=\"body\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".statusState\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              placeholder=\"&nbsp;\"\r\n              [showClear]=\"true\"\r\n              [disabled]=\"isReadOnlyForm\"\r\n              [options]=\"itemStatusListDisplay\"\r\n              [(ngModel)]=\"item.statusState\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pcCommitmentAuthorization\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"aw-input\"\r\n              [(ngModel)]=\"item.pciCommitmentAuthorization\"\r\n              [disabled]=\"isReadOnlyForm\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pciFlagPackage\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <p-checkbox\r\n              binary=\"true\"\r\n              class=\"aw-checkbox\"\r\n              [(ngModel)]=\"item.pciFlagPackage\"\r\n              [disabled]=\"isReadOpenMode\"\r\n            ></p-checkbox>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pciPackagePrice\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <input type=\"number\" class=\"aw-input\" [(ngModel)]=\"item.pciPackagePrice\" [disabled]=\"isReadOpenMode\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pcLegalCommitment\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"item.pciLegalCommitment\" [disabled]=\"isReadOnlyForm\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pciStartDate\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <p-calendar\r\n              showButtonBar=\"true\"\r\n              [monthNavigator]=\"true\"\r\n              [yearNavigator]=\"true\"\r\n              [yearRange]=\"sessionService.calendarYearRange\"\r\n              class=\"aw-calendar\"\r\n              appendTo=\"body\"\r\n              [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n              [locale]=\"sessionService.calendarFormat\"\r\n              [(ngModel)]=\"item.pciStartDate\"\r\n              [disabled]=\"isReadOnlyForm\"\r\n              required\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pciEndDate\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <p-calendar\r\n              showButtonBar=\"true\"\r\n              [monthNavigator]=\"true\"\r\n              [yearNavigator]=\"true\"\r\n              [yearRange]=\"sessionService.calendarYearRange\"\r\n              class=\"aw-calendar\"\r\n              appendTo=\"body\"\r\n              [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n              [locale]=\"sessionService.calendarFormat\"\r\n              [(ngModel)]=\"item.pciEndDate\"\r\n              [disabled]=\"isReadOnlyForm\"\r\n              required\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pciCommitedAmount\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <input type=\"number\" class=\"aw-input\" [(ngModel)]=\"item.pciCommittedAmount\" [disabled]=\"isReadOpenMode\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pciFlagPartialReceipt\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <p-checkbox\r\n              binary=\"true\"\r\n              class=\"aw-checkbox\"\r\n              [(ngModel)]=\"item.pciFlagPartialReceipt\"\r\n              [disabled]=\"isReadOpenMode\"\r\n            ></p-checkbox>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pciPriceRevision\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <p-checkbox\r\n              binary=\"true\"\r\n              class=\"aw-checkbox\"\r\n              [(ngModel)]=\"item.pciPriceRevision\"\r\n              [disabled]=\"isReadOpenMode\"\r\n            ></p-checkbox>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pciPenalties\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <p-checkbox\r\n              binary=\"true\"\r\n              class=\"aw-checkbox\"\r\n              [(ngModel)]=\"item.pciPenalties\"\r\n              [disabled]=\"isReadOpenMode\"\r\n            ></p-checkbox>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">{{ \"global.cancel\" | translate }}</button>\r\n    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"validate()\" [disabled]=\"!isValid()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-item/dialog-purchase-contract-item.component.ts":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-item/dialog-purchase-contract-item.component.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: DialogPurchaseContractItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPurchaseContractItemComponent", function() { return DialogPurchaseContractItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
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







var DialogPurchaseContractItemComponent = /** @class */ (function (_super) {
    __extends(DialogPurchaseContractItemComponent, _super);
    function DialogPurchaseContractItemComponent(messageService, sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'DialogPurchaseContractItemComponent') || this;
        _this.messageService = messageService;
        _this.sessionService = sessionService;
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogPurchaseContractItemComponent.prototype.ngOnInit = function () {
        if (!this.item) {
            this.item = {};
        }
    };
    DialogPurchaseContractItemComponent.prototype.validate = function () {
        var _this = this;
        var errors = this.validateItem();
        if (errors.length === 0) {
            if (this.newItem) {
                this.onValidated.emit(this.item);
            }
            else {
                this.onUpdate.emit(this.item);
            }
            this.closeDialog();
        }
        else {
            errors.forEach(function (error) { return _this.messageService.showErrorMessage(error); });
        }
    };
    DialogPurchaseContractItemComponent.prototype.isValid = function () {
        return true;
    };
    DialogPurchaseContractItemComponent.prototype.validateItem = function () {
        var errors = [];
        if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_6__["StringUtils"].isNullOrEmpty(this.item.pciLabel) ||
            _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_6__["StringUtils"].isNullOrEmpty(this.item.pciType) ||
            !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_5__["ObjectUtils"].isDefined(this.item.pciCode)) {
            errors.push('global.warningOnMissingRequiredFields');
        }
        if (this.item.pciStartDate && this.item.pciEndDate && this.item.pciStartDate > this.item.pciEndDate) {
            errors.push(this.getTranslateKey('incoherentDate'));
        }
        return errors;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogPurchaseContractItemComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogPurchaseContractItemComponent.prototype, "isReadOnlyForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogPurchaseContractItemComponent.prototype, "newItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogPurchaseContractItemComponent.prototype, "itemTypeListDisplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogPurchaseContractItemComponent.prototype, "itemStatusListDisplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogPurchaseContractItemComponent.prototype, "onValidated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogPurchaseContractItemComponent.prototype, "onUpdate", void 0);
    DialogPurchaseContractItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-purchase-contract-item',
            template: __webpack_require__(/*! ./dialog-purchase-contract-item.component.html */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-item/dialog-purchase-contract-item.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"], _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
    ], DialogPurchaseContractItemComponent);
    return DialogPurchaseContractItemComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]));



/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-parent-id/dialog-purchase-contract-parent-id.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-parent-id/dialog-purchase-contract-parent-id.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"75\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"search-dialog-container\">\r\n      <div class=\"section search-criteria-section\">\r\n        <h4 class=\"section-title\">{{ \"global.search\" | translate }}</h4>\r\n\r\n        <div class=\"section-content\">\r\n          <div class=\"column\">\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".pcNumber\" | translate }}\r\n                </label>\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.pcNumber\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".pcLabel\" | translate }}\r\n                </label>\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.pcLabel\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".statusState\" | translate }}\r\n                </label>\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [options]=\"statusList\"\r\n                    [(ngModel)]=\"searchObject.statusState\"\r\n                    placeholder=\"&nbsp;\"\r\n                    [showClear]=\"true\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".pcLegalCommitment\" | translate }}\r\n                </label>\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.pcLegalCommitment\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".pcCreationDateStart\" | translate }}\r\n                </label>\r\n                <div class=\"form-control\">\r\n                  <p-calendar\r\n                    showButtonBar=\"true\"\r\n                    [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\"\r\n                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                    class=\"aw-calendar\"\r\n                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                    [locale]=\"sessionService.calendarFormat\"\r\n                    [(ngModel)]=\"searchObject.pcCreationDateInterval.minValue\"\r\n                  ></p-calendar>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".pcCreationDateEnd\" | translate }}\r\n                </label>\r\n                <div class=\"form-control\">\r\n                  <p-calendar\r\n                    showButtonBar=\"true\"\r\n                    [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\"\r\n                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                    class=\"aw-calendar\"\r\n                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                    [locale]=\"sessionService.calendarFormat\"\r\n                    [(ngModel)]=\"searchObject.pcCreationDateInterval.maxValue\"\r\n                  ></p-calendar>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row search-criteria-footer\">\r\n              <div class=\"search-actions\">\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"search()\">\r\n                  <span>{{ \"global.toSearch\" | translate }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"section results-section\">\r\n        <h4 class=\"section-title\">\r\n          {{ \"global.results\" | translate }} ({{\r\n            parentContractTableDataSource ? parentContractTableDataSource.dataCount : 0\r\n          }})\r\n        </h4>\r\n\r\n        <div class=\"section-content\">\r\n          <a-table [dataSource]=\"parentContractTableDataSource\"> </a-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"onValidate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-parent-id/dialog-purchase-contract-parent-id.component.ts":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-parent-id/dialog-purchase-contract-parent-id.component.ts ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: DialogPurchaseContractParentIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPurchaseContractParentIdComponent", function() { return DialogPurchaseContractParentIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../constants/properties/purchase-contract-property-constants */ "./src/app/modules/purchase-contract/constants/properties/purchase-contract-property-constants.ts");
/* harmony import */ var _services_purchase_contract_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../services/purchase-contract.service */ "./src/app/modules/purchase-contract/services/purchase-contract.service.ts");
/* harmony import */ var _utils_label_value_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../utils/label-value-helper */ "./src/app/modules/purchase-contract/utils/label-value-helper.ts");
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










var DialogPurchaseContractParentIdComponent = /** @class */ (function (_super) {
    __extends(DialogPurchaseContractParentIdComponent, _super);
    function DialogPurchaseContractParentIdComponent(purchaseContractService, sessionService, propertiesService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, 'DialogPurchaseContractParentIdComponent') || this;
        _this.purchaseContractService = purchaseContractService;
        _this.sessionService = sessionService;
        _this.propertiesService = propertiesService;
        _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.totalFilteredRows = 0;
        _this.searchObject = { pcCreationDateInterval: {} };
        _this.isLoading = false;
        _this.initParentContractTableDataSource();
        return _this;
    }
    DialogPurchaseContractParentIdComponent.prototype.ngOnInit = function () {
        this.searchObject = this.searchObject || {};
        this.loadStatusList();
    };
    DialogPurchaseContractParentIdComponent.prototype.initParentContractTableDataSource = function () {
        this.parentContractTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__["TableDataSource"]({
            allowMultiSelect: false,
            columns: [
                {
                    field: 'pcNumber',
                    translateKey: this.getTranslateKey('pcNumber')
                },
                {
                    field: 'pcLabel',
                    translateKey: this.getTranslateKey('pcLabel')
                },
                {
                    field: 'statusState',
                    translateKey: this.getTranslateKey('statusState')
                },
                {
                    field: 'pcLegalCommitment',
                    translateKey: this.getTranslateKey('pcLegalCommitment')
                },
                {
                    field: 'pcCreationDateStart',
                    translateKey: this.getTranslateKey('pcCreationDateStart')
                }
            ],
            data: []
        });
    };
    DialogPurchaseContractParentIdComponent.prototype.cancel = function () {
        _super.prototype.closeDialog.call(this);
    };
    DialogPurchaseContractParentIdComponent.prototype.loadStatusList = function () {
        var _this = this;
        this.propertiesService
            .getValue(_constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_7__["PurchaseContractPropertyConstants"].CONTRACT_STATUS_MAP)
            .subscribe(function (result) { return (_this.statusList = result); });
    };
    DialogPurchaseContractParentIdComponent.prototype.search = function () {
        this.loadContracts();
    };
    DialogPurchaseContractParentIdComponent.prototype.loadContracts = function () {
        var _this = this;
        this.isLoading = true;
        this.purchaseContractService
            .findBidtPurchaseContractByCriteria(this.searchObject)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this.isLoading = false;
        }))
            .subscribe(function (results) {
            if (results) {
                _this.parentContractTableDataSource.setData(results.list);
                _this.parentContractTableDataSource.dataSrc.forEach(function (element) {
                    element.statusState = _utils_label_value_helper__WEBPACK_IMPORTED_MODULE_9__["LabelValueHelper"].getLabelByValue(_this.statusList, element.statusState);
                });
            }
        });
    };
    DialogPurchaseContractParentIdComponent.prototype.onValidate = function () {
        this.onSelected.emit(this.parentContractTableDataSource.dataSelection[0]);
        _super.prototype.closeDialog.call(this);
    };
    DialogPurchaseContractParentIdComponent.prototype.onCancel = function () {
        this.parentContractTableDataSource.setData([]);
        this.totalFilteredRows = 0;
        this.closeDialog();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DialogPurchaseContractParentIdComponent.prototype, "onSelected", void 0);
    DialogPurchaseContractParentIdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-purchase-contract-parent-id',
            template: __webpack_require__(/*! ./dialog-purchase-contract-parent-id.component.html */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-parent-id/dialog-purchase-contract-parent-id.component.html")
        }),
        __metadata("design:paramtypes", [_services_purchase_contract_service__WEBPACK_IMPORTED_MODULE_8__["PurchaseContractService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__["PropertiesService"]])
    ], DialogPurchaseContractParentIdComponent);
    return DialogPurchaseContractParentIdComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"]));



/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-partner/dialog-purchase-contract-partner.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-partner/dialog-purchase-contract-partner.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group required\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\"> {{ getComponentName() + \".customerCode\" | translate }}</label>\r\n        <div class=\"form-control\">\r\n          <p-dropdown\r\n            appendTo=\"body\"\r\n            class=\"aw-dropdown fixed-width\"\r\n            placeholder=\"&nbsp;\"\r\n            [showClear]=\"true\"\r\n            [options]=\"cudstomersCodeOptions\"\r\n            [disabled]=\"isReadOpenMode\"\r\n            [(ngModel)]=\"bidtPurchaseContractPartnerDTO.customerCode\"\r\n          >\r\n          </p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group required\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\"> {{ getComponentName() + \".pcpRole\" | translate }}</label>\r\n        <div class=\"form-control\">\r\n          <p-dropdown\r\n            appendTo=\"body\"\r\n            class=\"aw-dropdown fixed-width\"\r\n            placeholder=\"&nbsp;\"\r\n            [showClear]=\"true\"\r\n            [options]=\"partnerRoleList\"\r\n            [disabled]=\"isReadOpenMode\"\r\n            [(ngModel)]=\"bidtPurchaseContractPartnerDTO.pcpRole\"\r\n          >\r\n          </p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"global.close\" | translate }}\r\n    </button>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">{{ \"global.cancel\" | translate }}</button>\r\n    <button\r\n      type=\"button\"\r\n      color=\"primary\"\r\n      mat-raised-button\r\n      (click)=\"validate()\"\r\n      [disabled]=\"!bidtPurchaseContractPartnerDTO.customerCode\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-partner/dialog-purchase-contract-partner.component.ts":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-partner/dialog-purchase-contract-partner.component.ts ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: DialogPurchaseContractPartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPurchaseContractPartnerComponent", function() { return DialogPurchaseContractPartnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_logistics_order_document_search_order_document_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../main/logistics/order-document/search/order-document-search.service */ "./src/app/main/logistics/order-document/search/order-document-search.service.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
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







var DialogPurchaseContractPartnerComponent = /** @class */ (function (_super) {
    __extends(DialogPurchaseContractPartnerComponent, _super);
    function DialogPurchaseContractPartnerComponent(orderDocumentSearchService, messageService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].PCT_PURCHASE_PARTNER_DIALOG_FORM) || this;
        _this.orderDocumentSearchService = orderDocumentSearchService;
        _this.messageService = messageService;
        _this.onAddPartner = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onUpdatePartner = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.partnerRoleList = [];
        return _this;
    }
    DialogPurchaseContractPartnerComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].PCT_PURCHASE_PARTNER_DIALOG_FORM;
    };
    DialogPurchaseContractPartnerComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode); // create
        if (!this.data) {
            this.data = {};
            this.bidtPurchaseContractPartnerDTO = {};
        }
        else {
            this.bidtPurchaseContractPartnerDTO = __assign({}, this.data);
        }
        this.loadCudstomersCodeOptions();
    };
    DialogPurchaseContractPartnerComponent.prototype.loadCudstomersCodeOptions = function () {
        var _this = this;
        this.orderDocumentSearchService.findBidoCustomerBySearchCriteriaOrder().subscribe(function (results) {
            _this.cudstomersCodeOptions = results || [];
        });
    };
    DialogPurchaseContractPartnerComponent.prototype.validate = function () {
        if (this.isScreenValidated()) {
            if (this.openMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Create) {
                this.onAddPartner.emit(this.bidtPurchaseContractPartnerDTO);
                this.closeDialog();
            }
            else {
                this.onUpdatePartner.emit(this.bidtPurchaseContractPartnerDTO);
                this.closeDialog();
            }
        }
        else {
            this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
        }
    };
    DialogPurchaseContractPartnerComponent.prototype.isScreenValidated = function () {
        return (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_6__["StringUtils"].isNullOrEmpty(this.bidtPurchaseContractPartnerDTO.customerCode) &&
            !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_6__["StringUtils"].isNullOrEmpty(this.bidtPurchaseContractPartnerDTO.pcpRole));
    };
    DialogPurchaseContractPartnerComponent.prototype.closeDialog = function () {
        this.display = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DialogPurchaseContractPartnerComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogPurchaseContractPartnerComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogPurchaseContractPartnerComponent.prototype, "partnerRoleList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogPurchaseContractPartnerComponent.prototype, "onAddPartner", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogPurchaseContractPartnerComponent.prototype, "onUpdatePartner", void 0);
    DialogPurchaseContractPartnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-purchase-contract-partner',
            template: __webpack_require__(/*! ./dialog-purchase-contract-partner.component.html */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-partner/dialog-purchase-contract-partner.component.html")
        }),
        __metadata("design:paramtypes", [_main_logistics_order_document_search_order_document_search_service__WEBPACK_IMPORTED_MODULE_1__["OrderDocumentSearchService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], DialogPurchaseContractPartnerComponent);
    return DialogPurchaseContractPartnerComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]));



/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-slice/dialog-purchase-contract-slice.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-slice/dialog-purchase-contract-slice.component.html ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"70\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n  <a-content>\r\n    <div class=\"section-content\">\r\n      <div class=\"column\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group required\">\r\n            <label class=\"form-label\">\r\n              {{ getComponentName() + \".pcsOrder\" | translate }}\r\n            </label>\r\n            <div class=\"form-control\">\r\n              <input type=\"number\" class=\"aw-input\" [(ngModel)]=\"data.pcsOrder\" [disabled]=\"isReadOpenMode\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group required\">\r\n            <label class=\"form-label\">\r\n              {{ getComponentName() + \".pcsType\" | translate }}\r\n            </label>\r\n\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                class=\"aw-dropdown fixed-width\"\r\n                appendTo=\"body\"\r\n                placeholder=\"&nbsp;\"\r\n                [options]=\"sliceTypeListDisplay\"\r\n                (onChange)=\"onSliceTypeChange($event)\"\r\n                [showClear]=\"true\"\r\n                [(ngModel)]=\"data.pcsType\"\r\n                [disabled]=\"isReadOpenMode\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">\r\n              {{ getComponentName() + \".statusState\" | translate }}\r\n            </label>\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                class=\"aw-dropdown fixed-width\"\r\n                appendTo=\"body\"\r\n                placeholder=\"&nbsp;\"\r\n                [options]=\"sliceStatusListDisplay\"\r\n                (onChange)=\"onSliceStatusChange($event)\"\r\n                [showClear]=\"true\"\r\n                [(ngModel)]=\"data.statusState\"\r\n                [disabled]=\"isReadOpenMode\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"section-content\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pcsDescription\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <textarea\r\n              class=\"aw-textarea\"\r\n              [rows]=\"1\"\r\n              pInputTextarea\r\n              [(ngModel)]=\"data.pcsDescription\"\r\n              [disabled]=\"isReadOpenMode\"\r\n            ></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"section-content\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".pcsConsolidationDate\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-calendar\r\n              showButtonBar=\"true\"\r\n              [monthNavigator]=\"true\"\r\n              [yearNavigator]=\"true\"\r\n              [yearRange]=\"sessionService.calendarYearRange\"\r\n              class=\"aw-calendar\"\r\n              [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n              [locale]=\"sessionService.calendarFormat\"\r\n              [(ngModel)]=\"data.pcsConsolidationDate\"\r\n              appendTo=\"body\"\r\n              [disabled]=\"true\"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"pcsDuration\" class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pcsDuration\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <input\r\n              numeric\r\n              type=\"text\"\r\n              class=\"aw-input\"\r\n              maxlength=\"50\"\r\n              [(ngModel)]=\"data.pcsDuration\"\r\n              (ngModelChange)=\"onDurationValueChange($event)\"\r\n              [disabled]=\"isReadOpenMode\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div id=\"pcsDurationUnit\" class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".unit\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input\r\n              numeric\r\n              type=\"text\"\r\n              class=\"aw-input\"\r\n              maxlength=\"50\"\r\n              [ngModel]=\"data.pcsDuration\"\r\n              (ngModelChange)=\"onDurationValueChange($event)\"\r\n              [disabled]=\"isReadOpenMode\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div id=\"pcsDurationUnit\" class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".unit\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              [showClear]=\"true\"\r\n              placeholder=\"&nbsp;\"\r\n              [options]=\"sliceUnitList\"\r\n              [disabled]=\"isReadOpenMode\"\r\n              [ngModel]=\"data.pcsDurationUnit\"\r\n              (ngModelChange)=\"onDurationUnitValueChange($event)\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"section-content\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pcsStartDate\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-calendar\r\n              showButtonBar=\"true\"\r\n              [monthNavigator]=\"true\"\r\n              [yearNavigator]=\"true\"\r\n              [yearRange]=\"sessionService.calendarYearRange\"\r\n              class=\"aw-calendar\"\r\n              appendTo=\"body\"\r\n              [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n              [locale]=\"sessionService.calendarFormat\"\r\n              [ngModel]=\"data.pcsStartDate\"\r\n              (ngModelChange)=\"onStartDateValueChange($event)\"\r\n              [disabled]=\"isReadOpenMode\"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".pcsEndDate\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-calendar\r\n              showButtonBar=\"true\"\r\n              [monthNavigator]=\"true\"\r\n              [yearNavigator]=\"true\"\r\n              [yearRange]=\"sessionService.calendarYearRange\"\r\n              class=\"aw-calendar\"\r\n              appendTo=\"body\"\r\n              [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n              [locale]=\"sessionService.calendarFormat\"\r\n              [(ngModel)]=\"data.pcsEndDate\"\r\n              [disabled]=\"true\"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"section-content\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".minAmount\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input\r\n              numeric\r\n              decimals=\"2\"\r\n              type=\"text\"\r\n              class=\"aw-input\"\r\n              maxlength=\"50\"\r\n              [(ngModel)]=\"data.pcsMinimumAmount\"\r\n              [disabled]=\"isReadOpenMode\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".maxAmount\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input\r\n              numeric\r\n              decimals=\"2\"\r\n              type=\"text\"\r\n              class=\"aw-input\"\r\n              maxlength=\"50\"\r\n              [(ngModel)]=\"data.pcsMaximumAmount\"\r\n              [disabled]=\"isReadOpenMode\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".commitedAmount\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input\r\n              numeric\r\n              decimals=\"2\"\r\n              type=\"text\"\r\n              class=\"aw-input\"\r\n              maxlength=\"50\"\r\n              [(ngModel)]=\"data.pcsCommitedAmount\"\r\n              [disabled]=\"isReadOpenMode\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".currency\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"currency\" [disabled]=\"true\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">{{ \"global.cancel\" | translate }}</button>\r\n\r\n    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"validate()\" [disabled]=\"!isValid()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-slice/dialog-purchase-contract-slice.component.ts":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-slice/dialog-purchase-contract-slice.component.ts ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: DialogPurchaseContractSliceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPurchaseContractSliceComponent", function() { return DialogPurchaseContractSliceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../constants/properties/purchase-contract-property-constants */ "./src/app/modules/purchase-contract/constants/properties/purchase-contract-property-constants.ts");
/* harmony import */ var _constants_properties_purchasecontract_purchase_contract_slice_status_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../constants/properties/purchasecontract/purchase-contract-slice-status-constants */ "./src/app/modules/purchase-contract/constants/properties/purchasecontract/purchase-contract-slice-status-constants.ts");
/* harmony import */ var _constants_properties_purchasecontract_purchase_contract_slice_type_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../constants/properties/purchasecontract/purchase-contract-slice-type-constants */ "./src/app/modules/purchase-contract/constants/properties/purchasecontract/purchase-contract-slice-type-constants.ts");
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










var DialogPurchaseContractSliceComponent = /** @class */ (function (_super) {
    __extends(DialogPurchaseContractSliceComponent, _super);
    function DialogPurchaseContractSliceComponent(messageService, sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__["ComponentConstants"].PCT_SLICES_DIALOG_FORM) || this;
        _this.messageService = messageService;
        _this.sessionService = sessionService;
        _this.onAddSlice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onUpdateSlice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogPurchaseContractSliceComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__["ComponentConstants"].PCT_SLICES_DIALOG_FORM;
    };
    DialogPurchaseContractSliceComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode); // create
        if (!this.data) {
            this.data = {};
        }
        if (this.openMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write || this.openMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Create) {
            // this.loadPcsEndDate();
        }
    };
    DialogPurchaseContractSliceComponent.prototype.onStartDateValueChange = function (event) {
        this.data.pcsStartDate = event;
        this.loadPcsEndDate();
    };
    DialogPurchaseContractSliceComponent.prototype.onDurationValueChange = function (event) {
        this.data.pcsDuration = event;
        this.loadPcsEndDate();
    };
    DialogPurchaseContractSliceComponent.prototype.onDurationUnitValueChange = function (event) {
        this.data.pcsDurationUnit = event;
        this.loadPcsEndDate();
    };
    DialogPurchaseContractSliceComponent.prototype.loadPcsEndDate = function () {
        if (!!this.data && !!this.data.pcsStartDate && !!this.data.pcsDurationUnit && !!this.data.pcsDuration) {
            var startDateSored = new Date(this.data.pcsStartDate);
            if (this.data.pcsDuration === 0) {
                this.data.pcsEndDate = startDateSored;
            }
            else {
                switch (this.data.pcsDurationUnit) {
                    case _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_7__["PurchaseContractPropertyConstants"].UNIT_DAY_VALUE: {
                        this.data.pcsEndDate = new Date(startDateSored.setTime(startDateSored.getTime() + this.data.pcsDuration * _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_7__["PurchaseContractPropertyConstants"].MILLI_SEC_IN_DAY));
                        break;
                    }
                    case _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_7__["PurchaseContractPropertyConstants"].UNIT_WEEK_VALUE: {
                        this.data.pcsEndDate = new Date(startDateSored.setTime(startDateSored.getTime() +
                            this.data.pcsDuration *
                                _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_7__["PurchaseContractPropertyConstants"].MILLI_SEC_IN_DAY *
                                _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_7__["PurchaseContractPropertyConstants"].DAY_IN_WEEK));
                        break;
                    }
                    case _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_7__["PurchaseContractPropertyConstants"].UNIT_MONTH_VALUE: {
                        this.data.pcsEndDate = new Date(startDateSored.setMonth(startDateSored.getMonth() + this.data.pcsDuration));
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        }
    };
    DialogPurchaseContractSliceComponent.prototype.validate = function () {
        if (this.isScreenValidated()) {
            if (this.newSlice) {
                this.onAddSlice.emit(this.data);
            }
            else {
                this.onUpdateSlice.emit(this.data);
            }
            this.closeDialog();
        }
        else {
            this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
        }
    };
    DialogPurchaseContractSliceComponent.prototype.isValid = function () {
        return true;
    };
    DialogPurchaseContractSliceComponent.prototype.isScreenValidated = function () {
        return (this.data.pcsOrder &&
            !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_6__["StringUtils"].isNullOrEmpty(this.data.pcsDescription) &&
            this.data.pcsType &&
            // Mandatory data if consolidation date is present
            (!this.data.pcsConsolidationDate || (this.data.pcsEndDate && this.data.pcsStartDate && this.data.pcsDuration)));
    };
    DialogPurchaseContractSliceComponent.prototype.onSliceStatusChange = function (event) {
        if (!this.data.pcsConsolidationDate && event.value === _constants_properties_purchasecontract_purchase_contract_slice_status_constants__WEBPACK_IMPORTED_MODULE_8__["PurchaseContractSliceStatusConstants"].FIRMED) {
            this.data.pcsConsolidationDate = new Date();
        }
    };
    DialogPurchaseContractSliceComponent.prototype.onSliceTypeChange = function (event) {
        if (!this.data.pcsConsolidationDate && event.value === _constants_properties_purchasecontract_purchase_contract_slice_type_constants__WEBPACK_IMPORTED_MODULE_9__["PurchaseContractSliceTypeConstants"].FIRM) {
            this.data.pcsConsolidationDate = new Date();
        }
    };
    DialogPurchaseContractSliceComponent.prototype.closeDialog = function () {
        this.display = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DialogPurchaseContractSliceComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogPurchaseContractSliceComponent.prototype, "newSlice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogPurchaseContractSliceComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogPurchaseContractSliceComponent.prototype, "isReadOnlyForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogPurchaseContractSliceComponent.prototype, "onAddSlice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogPurchaseContractSliceComponent.prototype, "onUpdateSlice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogPurchaseContractSliceComponent.prototype, "sliceTypeListDisplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogPurchaseContractSliceComponent.prototype, "sliceStatusListDisplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogPurchaseContractSliceComponent.prototype, "sliceUnitList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogPurchaseContractSliceComponent.prototype, "currency", void 0);
    DialogPurchaseContractSliceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-purchase-contract-slice',
            template: __webpack_require__(/*! ./dialog-purchase-contract-slice.component.html */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-slice/dialog-purchase-contract-slice.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
    ], DialogPurchaseContractSliceComponent);
    return DialogPurchaseContractSliceComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]));



/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/purchase-contract-form.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/form/purchase-contract-form.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n      <div class=\"page-subtitle\">\r\n        <div *ngIf=\"!isCreateOpenMode && purchaseContract\" class=\"page-subtitle\">- {{ purchaseContract.pcNumber }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"object-status\" *ngIf=\"purchaseContract.statusState\" (click)=\"showStatus()\">\r\n      {{ purchaseContract.statusState | formatSelectOption: statusList }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button *ngIf=\"isReadOpenMode && hasUpdateAccessRight\" type=\"button\" mat-raised-button (click)=\"edit()\">\r\n      {{ \"global.edit\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode && !isCreateOpenMode\"\r\n      color=\"warn\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"cancel()\"\r\n    >\r\n      {{ \"global.cancel\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      class=\"btn-with-spinner\"\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"save()\"\r\n    >\r\n      <span class=\"lds-hourglass\" *ngIf=\"showSaveSpinner\"></span>\r\n      {{ \"global.save\" | translate }}\r\n    </button>\r\n\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button\r\n        mat-menu-item\r\n        id=\"favorite\"\r\n        *ngIf=\"isReadOpenMode && hasUpdateAccessRight\"\r\n        (click)=\"updateFavoriteState()\"\r\n      >\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n      <button *ngIf=\"isReadOpenMode && !isCreateOpenMode\" type=\"button\" mat-menu-item (click)=\"reload()\">\r\n        {{ \"global.refresh\" | translate }}\r\n      </button>\r\n      <button mat-menu-item (click)=\"openStatusUpdatesPopup()\">{{ \"updates\" | translate }}</button>\r\n    </mat-menu>\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"Show all actions\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div #page class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <mat-tab-group animationDuration=\"0ms\" dynamicHeight>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ \"home\" | translate }}\r\n          </ng-template>\r\n          <div class=\"grid-row\">\r\n            <!-- HEADER DATA -->\r\n            <div #headerDataAnchor class=\"grid-cell--8\" (click)=\"selectPageTocEntry(component.HEADER_DATA_ANCHOR_ID)\">\r\n              <div\r\n                class=\"grid-cell grid-cell--container\"\r\n                [ngClass]=\"{ active: isPageTocEntrySelected(component.HEADER_DATA_ANCHOR_ID) }\"\r\n              >\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">{{ componentData.componentId + \".headerDataAnchor\" | translate }}</h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"row\">\r\n                    <div id=\"pcNumber\" class=\"form-group flex--6\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                      <label class=\"form-label\">\r\n                        {{ componentData.componentId + \".pcNumber\" | translate }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input\"\r\n                          [(ngModel)]=\"purchaseContract.pcNumber\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id=\"pcLabel\" class=\"form-group flex--6\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                      <label class=\"form-label\">\r\n                        {{ componentData.componentId + \".pcLabel\" | translate }}\r\n                      </label>\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input\"\r\n                          [(ngModel)]=\"purchaseContract.pcLabel\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div id=\"pcType\" class=\"form-group flex--6\">\r\n                      <label class=\"form-label\">\r\n                        {{ componentData.componentId + \".pcType\" | translate }}\r\n                      </label>\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [showClear]=\"true\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                          [options]=\"pcTypeList\"\r\n                          [(ngModel)]=\"purchaseContract.pcType\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id=\"pcCommitmentAuthorization\" class=\"form-group flex--6\">\r\n                      <label class=\"form-label\">\r\n                        {{ componentData.componentId + \".pcCommitmentAuthorization\" | translate }}\r\n                      </label>\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input\"\r\n                          [(ngModel)]=\"purchaseContract.pcCommitmentAuthorization\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id=\"pcLegalCommitment\" class=\"form-group flex--6\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                      <label class=\"form-label\">\r\n                        {{ componentData.componentId + \".pcLegalCommitment\" | translate }}\r\n                      </label>\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input\"\r\n                          [(ngModel)]=\"purchaseContract.pcLegalCommitment\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div id=\"pcBusinessCode\" class=\"form-group flex--6\">\r\n                      <label class=\"form-label\">\r\n                        {{ componentData.componentId + \".pcBusinessCode\" | translate }}\r\n                      </label>\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input\"\r\n                          [(ngModel)]=\"purchaseContract.pcBusinessCode\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id=\"pcValidityStartDate\" class=\"form-group flex--6\">\r\n                      <label class=\"form-label\">\r\n                        {{ componentData.componentId + \".pcValidityStartDate\" | translate }}\r\n                      </label>\r\n                      <div class=\"form-control\">\r\n                        <p-calendar\r\n                          showButtonBar=\"true\"\r\n                          [monthNavigator]=\"true\"\r\n                          [yearNavigator]=\"true\"\r\n                          [yearRange]=\"sessionService.calendarYearRange\"\r\n                          class=\"aw-calendar\"\r\n                          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                          [locale]=\"sessionService.calendarFormat\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                          [(ngModel)]=\"purchaseContract.pcValidityStartDate\"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id=\"pcValidityEndDate\" class=\"form-group flex--6\">\r\n                      <label class=\"form-label\">\r\n                        {{ componentData.componentId + \".pcValidityEndDate\" | translate }}\r\n                      </label>\r\n                      <div class=\"form-control\">\r\n                        <p-calendar\r\n                          showButtonBar=\"true\"\r\n                          [monthNavigator]=\"true\"\r\n                          [yearNavigator]=\"true\"\r\n                          [yearRange]=\"sessionService.calendarYearRange\"\r\n                          class=\"aw-calendar\"\r\n                          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                          [locale]=\"sessionService.calendarFormat\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                          [(ngModel)]=\"purchaseContract.pcValidityEndDate\"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div id=\"pcMinimumAmount\" class=\"form-group flex--6\">\r\n                      <label class=\"form-label\">\r\n                        {{ componentData.componentId + \".pcMinimumAmount\" | translate }}\r\n                      </label>\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          type=\"number\"\r\n                          class=\"aw-input\"\r\n                          [(ngModel)]=\"purchaseContract.pcMinimumAmount\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id=\"pcMaximumAmount\" class=\"form-group flex--6\">\r\n                      <label class=\"form-label\">\r\n                        {{ componentData.componentId + \".pcMaximumAmount\" | translate }}\r\n                      </label>\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          type=\"number\"\r\n                          class=\"aw-input\"\r\n                          [(ngModel)]=\"purchaseContract.pcMaximumAmount\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id=\"pcCurrency\" class=\"form-group flex--6\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".pcCurrency\" | translate }}</label>\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          [options]=\"pcCurrencyList\"\r\n                          [showClear]=\"true\"\r\n                          [(ngModel)]=\"purchaseContract.pcCurrency\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div id=\"bidtSiteId\" class=\"form-group flex--6\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".pcSite\" | translate }}</label>\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [options]=\"pcSiteList\"\r\n                          [(ngModel)]=\"purchaseContract.bidtSiteId\"\r\n                          [showClear]=\"true\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id=\"bidtEmployeeId\" class=\"form-group flex--6\">\r\n                      <label class=\"form-label\">\r\n                        {{ componentData.componentId + \".pcEmployeeId\" | translate }}\r\n                      </label>\r\n                      <div\r\n                        class=\"form-control form-control-with-modal\"\r\n                        [ngClass]=\"{ disabled: isReadOpenMode && !isCreateOpenMode }\"\r\n                      >\r\n                        <div\r\n                          class=\"form-control-data\"\r\n                          (click)=\"(!isReadOpenMode || isCreateOpenMode) && quickSearchEmployee()\"\r\n                        >\r\n                          {{ contractManagerName }}\r\n                        </div>\r\n                        <div *ngIf=\"contractManagerName\" class=\"btn-clear-wrapper\">\r\n                          <i\r\n                            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"contractManagerName = undefined\"\r\n                          ></i>\r\n                        </div>\r\n                        <div class=\"btn-search-wrapper\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"!isReadOpenMode && quickSearchEmployee()\"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div id=\"bidtPurchaseContractId\" class=\"form-group flex--6\">\r\n                      <label class=\"form-label\">\r\n                        {{ componentData.componentId + \".pcParentLabel\" | translate }}\r\n                      </label>\r\n                      <div\r\n                        class=\"form-control form-control-with-modal\"\r\n                        [ngClass]=\"{ disabled: isReadOpenMode && !isCreateOpenMode }\"\r\n                      >\r\n                        <div\r\n                          class=\"form-control-data\"\r\n                          (click)=\"(!isReadOpenMode || isCreateOpenMode) && selectParentId()\"\r\n                        >\r\n                          {{ parentContractLabel }}\r\n                        </div>\r\n                        <div *ngIf=\"purchaseContract.bidtPurchaseContractId\" class=\"btn-clear-wrapper\">\r\n                          <i\r\n                            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"purchaseContract.bidtPurchaseContractId = undefined\"\r\n                          ></i>\r\n                        </div>\r\n                        <div class=\"btn-search-wrapper\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"!isReadOpenMode && selectParentId()\"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- PARTNER -->\r\n            <div #partnernAnchor class=\"grid-cell--4\" (click)=\"selectPageTocEntry(component.PARTNER_ANCHOR_ID)\">\r\n              <div\r\n                class=\"grid-cell grid-cell--container\"\r\n                [ngClass]=\"{ active: isPageTocEntrySelected(component.PARTNER_ANCHOR_ID) }\"\r\n              >\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ getComponentName() + \".partnerList\" | translate }} ({{ partnerTableDataSource.dataCount }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"grid-cell-content\">\r\n                  <a-table [dataSource]=\"partnerTableDataSource\">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && partnerTableDataSource.hasDataSelection\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deletePartner()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && partnerTableDataSource.dataSelectionCount === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"editPartner()\"\r\n                      >\r\n                        {{ \"global.edit\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && !partnerTableDataSource.hasDataSelection\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"addPartner()\"\r\n                      >\r\n                        {{ \"global.add\" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- SLICES -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ \"PurchaseContractFormComponent.slices\" | translate }}\r\n          </ng-template>\r\n          <div class=\"grid-row\">\r\n            <div #sliceAnchor class=\"grid-cell--12\" (click)=\"selectPageTocEntry(component.SLICE_ANCHOR_ID)\">\r\n              <div\r\n                class=\"grid-cell grid-cell--container\"\r\n                [ngClass]=\"{ active: isPageTocEntrySelected(component.SLICE_ANCHOR_ID) }\"\r\n              >\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ \"PurchaseContractFormComponent.slices\" | translate }} ({{ slicesTableDataSource.dataCount }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"section-content\">\r\n                  <a-table\r\n                    [dataSource]=\"slicesTableDataSource\"\r\n                    (onRowSelect)=\"onSliceSelected($event)\"\r\n                    (onRowUnselect)=\"onSliceUnselected($event)\"\r\n                  >\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && slicesTableDataSource.hasDataSelection\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteSlices()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"isReadOpenMode && slicesTableDataSource.dataSelectionCount === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openSlices()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && !slicesTableDataSource.hasDataSelection\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"addSlices()\"\r\n                      >\r\n                        {{ \"global.add\" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && slicesTableDataSource.dataSelectionCount === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"editSlices()\"\r\n                      >\r\n                        {{ \"global.edit\" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"pcsOrder\" let-rowData=\"rowData\">\r\n                      {{ rowData.bidtPurchaseContractSliceDTO.pcsOrder }}\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"pcsDescription\" let-rowData=\"rowData\">\r\n                      {{ rowData.bidtPurchaseContractSliceDTO.pcsDescription }}\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"statusState\" let-rowData=\"rowData\">\r\n                      {{ rowData.sliceStatusLabel }}\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"pcsConsolidationDate\" let-rowData=\"rowData\">\r\n                      {{\r\n                        rowData.bidtPurchaseContractSliceDTO.pcsConsolidationDate\r\n                          | date: \"yyyy/MM/dd\":\"\":translateService.currentLang\r\n                      }}\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"pcsDuration\" let-rowData=\"rowData\">\r\n                      {{ rowData.bidtPurchaseContractSliceDTO.pcsDuration }}\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"pcsStartDate\" let-rowData=\"rowData\">\r\n                      {{\r\n                        rowData.bidtPurchaseContractSliceDTO.pcsStartDate\r\n                          | date: \"yyyy/MM/dd\":\"\":translateService.currentLang\r\n                      }}\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"pcsEndDate\" let-rowData=\"rowData\">\r\n                      {{\r\n                        rowData.bidtPurchaseContractSliceDTO.pcsEndDate\r\n                          | date: \"yyyy/MM/dd\":\"\":translateService.currentLang\r\n                      }}\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- (OFFICE)/(PROVISION) -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + \".officeProvisionTitle\" | translate }}\r\n          </ng-template>\r\n          <div class=\"grid-row\">\r\n            <div\r\n              #officeProvisionAnchor\r\n              class=\"grid-cell--12\"\r\n              (click)=\"selectPageTocEntry(component.OFFICE_PROVISION_ANCHOR_ID)\"\r\n            >\r\n              <div\r\n                class=\"grid-cell grid-cell--container\"\r\n                [ngClass]=\"{ active: isPageTocEntrySelected(component.OFFICE_PROVISION_ANCHOR_ID) }\"\r\n              >\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".officeProvisionTitle\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\" *ngIf=\"!itemsTreeTable\">\r\n                  {{ componentData.componentId + \".itemAccessDescription\" | translate }}\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content grid-cell-item-structure\" *ngIf=\"itemsTreeTable\">\r\n                  <!-- Item structure treetable -->\r\n                  <div class=\"column\">\r\n                    <div class=\"list-with-details\">\r\n                      <div class=\"list grid-cell--6\">\r\n                        <p-treeTable\r\n                          class=\"aw-tree-table2\"\r\n                          [value]=\"itemsTreeTable.tree\"\r\n                          [columns]=\"itemsTreeTableColList\"\r\n                          selectionMode=\"single\"\r\n                          [selection]=\"itemNodeSelected\"\r\n                          (selectionChange)=\"onItemSelection($event)\"\r\n                        >\r\n                          <ng-template pTemplate=\"colgroup\" let-columns>\r\n                            <colgroup>\r\n                              <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                            </colgroup>\r\n                          </ng-template>\r\n                          <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n                            <tr [ttRow]=\"rowNode\" [ttSelectableRow]=\"rowNode\">\r\n                              <td\r\n                                style=\"overflow: hidden; text-overflow: ellipsis;\"\r\n                                *ngFor=\"let col of columns; let i = index\"\r\n                                [ngSwitch]=\"col.field\"\r\n                              >\r\n                                <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n                                <span *ngSwitchDefault> {{ rowData.bidtPurchaseContractItemDTO[col.field] }}</span>\r\n                              </td>\r\n                            </tr>\r\n                          </ng-template>\r\n                        </p-treeTable>\r\n                      </div>\r\n\r\n                      <!-- Item structure form -->\r\n                      <div class=\"details grid-cell--9\" [ngClass]=\"{ 'visibility--hidden': !itemsTreeTable.tree }\">\r\n                        <div class=\"column\">\r\n                          <div class=\"section\">\r\n                            <div class=\"section-content\">\r\n                              <div class=\"row structure-node-action-list\">\r\n                                <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onAddItem()\">\r\n                                  {{ \"global.add\" | translate }}\r\n                                </button>\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && itemNodeSelected\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"onEditItem()\"\r\n                                >\r\n                                  {{ \"global.edit\" | translate }}\r\n                                </button>\r\n                                <button\r\n                                  *ngIf=\"!isReadOpenMode && itemNodeSelected\"\r\n                                  type=\"button\"\r\n                                  mat-raised-button\r\n                                  (click)=\"deleteItems()\"\r\n                                >\r\n                                  {{ \"global.delete\" | translate }}\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div *ngIf=\"itemSelected\" class=\"section\">\r\n                            <div class=\"section-content\">\r\n                              <div class=\"row\">\r\n                                <div id=\"pciCode\" class=\"form-group flex--4\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                                  <label class=\"form-label\">\r\n                                    {{ componentData.componentId + \".pciCode\" | translate }}\r\n                                  </label>\r\n                                  <div class=\"form-control\">\r\n                                    <input\r\n                                      type=\"number\"\r\n                                      class=\"aw-input\"\r\n                                      [(ngModel)]=\"itemSelected.bidtPurchaseContractItemDTO.pciCode\"\r\n                                      [disabled]=\"true\"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n                                <div id=\"pciLabel\" class=\"form-group flex--4\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                                  <label class=\"form-label\">\r\n                                    {{ componentData.componentId + \".pciLabel\" | translate }}\r\n                                  </label>\r\n                                  <div class=\"form-control\">\r\n                                    <input\r\n                                      type=\"text\"\r\n                                      class=\"aw-input\"\r\n                                      [(ngModel)]=\"itemSelected.bidtPurchaseContractItemDTO.pciLabel\"\r\n                                      [disabled]=\"true\"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"row\">\r\n                                <div id=\"pciType\" class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                                  <label class=\"form-label\">\r\n                                    {{ componentData.componentId + \".pciType\" | translate }}\r\n                                  </label>\r\n                                  <div class=\"form-control\">\r\n                                    <p-dropdown\r\n                                      class=\"aw-dropdown fixed-width\"\r\n                                      placeholder=\"&nbsp;\"\r\n                                      [showClear]=\"true\"\r\n                                      [disabled]=\"true\"\r\n                                      [options]=\"typeList\"\r\n                                      [(ngModel)]=\"itemSelected.bidtPurchaseContractItemDTO.pciType\"\r\n                                    ></p-dropdown>\r\n                                  </div>\r\n                                </div>\r\n                                <div id=\"pciStatus\" class=\"form-group\">\r\n                                  <label class=\"form-label\">\r\n                                    {{ componentData.componentId + \".pciStatus\" | translate }}\r\n                                  </label>\r\n                                  <div class=\"form-control\">\r\n                                    <p-dropdown\r\n                                      class=\"aw-dropdown fixed-width\"\r\n                                      placeholder=\"&nbsp;\"\r\n                                      [showClear]=\"true\"\r\n                                      [disabled]=\"true\"\r\n                                      [options]=\"itemStatusStateList\"\r\n                                      [(ngModel)]=\"itemSelected.bidtPurchaseContractItemDTO.statusState\"\r\n                                    ></p-dropdown>\r\n                                  </div>\r\n                                </div>\r\n                                <div id=\"pciCommitmentAuthorization\" class=\"form-group\">\r\n                                  <label class=\"form-label\">\r\n                                    {{ componentData.componentId + \".pciCommitmentAuthorization\" | translate }}\r\n                                  </label>\r\n                                  <div class=\"form-control\">\r\n                                    <input\r\n                                      type=\"text\"\r\n                                      class=\"aw-input\"\r\n                                      [(ngModel)]=\"itemSelected.bidtPurchaseContractItemDTO.pciCommitmentAuthorization\"\r\n                                      [disabled]=\"true\"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"row\">\r\n                                <div id=\"pciFlagPackage\" class=\"form-group flex--3\">\r\n                                  <label class=\"form-label\">\r\n                                    {{ componentData.componentId + \".pciFlagPackage\" | translate }}\r\n                                  </label>\r\n                                  <div class=\"form-control\">\r\n                                    <p-checkbox\r\n                                      binary=\"true\"\r\n                                      class=\"aw-checkbox\"\r\n                                      [(ngModel)]=\"itemSelected.bidtPurchaseContractItemDTO.pciFlagPackage\"\r\n                                      [disabled]=\"true\"\r\n                                    ></p-checkbox>\r\n                                  </div>\r\n                                </div>\r\n                                <div id=\"pciPackagePrice\" class=\"form-group flex--3\">\r\n                                  <label class=\"form-label\">\r\n                                    {{ componentData.componentId + \".pciPackagePrice\" | translate }}\r\n                                  </label>\r\n                                  <div class=\"form-control\">\r\n                                    <input\r\n                                      type=\"number\"\r\n                                      class=\"aw-input\"\r\n                                      [(ngModel)]=\"itemSelected.bidtPurchaseContractItemDTO.pciPackagePrice\"\r\n                                      [disabled]=\"true\"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n                                <div id=\"pcLegalCommitment\" class=\"form-group flex--3\">\r\n                                  <label class=\"form-label\">\r\n                                    {{ componentData.componentId + \".pciLegalCommitment\" | translate }}\r\n                                  </label>\r\n                                  <div class=\"form-control\">\r\n                                    <input\r\n                                      type=\"text\"\r\n                                      class=\"aw-input\"\r\n                                      [(ngModel)]=\"itemSelected.bidtPurchaseContractItemDTO.pciLegalCommitment\"\r\n                                      [disabled]=\"true\"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"row\">\r\n                                <div id=\"pciStartDate\" class=\"form-group flex--4\">\r\n                                  <label class=\"form-label\">\r\n                                    {{ componentData.componentId + \".pciStartDate\" | translate }}\r\n                                  </label>\r\n                                  <div class=\"form-control\">\r\n                                    <p-calendar\r\n                                      showButtonBar=\"true\"\r\n                                      [monthNavigator]=\"true\"\r\n                                      [yearNavigator]=\"true\"\r\n                                      [yearRange]=\"sessionService.calendarYearRange\"\r\n                                      class=\"aw-calendar\"\r\n                                      [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                                      [locale]=\"sessionService.calendarFormat\"\r\n                                      [(ngModel)]=\"itemSelected.bidtPurchaseContractItemDTO.pciStartDate\"\r\n                                      [disabled]=\"true\"\r\n                                    ></p-calendar>\r\n                                  </div>\r\n                                </div>\r\n                                <div id=\"pciEndDate\" class=\"form-group flex--4\">\r\n                                  <label class=\"form-label\">\r\n                                    {{ componentData.componentId + \".pciEndDate\" | translate }}\r\n                                  </label>\r\n                                  <div class=\"form-control\">\r\n                                    <p-calendar\r\n                                      showButtonBar=\"true\"\r\n                                      [monthNavigator]=\"true\"\r\n                                      [yearNavigator]=\"true\"\r\n                                      [yearRange]=\"sessionService.calendarYearRange\"\r\n                                      class=\"aw-calendar\"\r\n                                      [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                                      [locale]=\"sessionService.calendarFormat\"\r\n                                      [(ngModel)]=\"itemSelected.bidtPurchaseContractItemDTO.pciEndDate\"\r\n                                      [disabled]=\"true\"\r\n                                    ></p-calendar>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"row\">\r\n                                <div id=\"pciCommitedAmount\" class=\"form-group flex--4\">\r\n                                  <label class=\"form-label\">\r\n                                    {{ componentData.componentId + \".pciCommitedAmount\" | translate }}\r\n                                  </label>\r\n                                  <div class=\"form-control\">\r\n                                    <input\r\n                                      type=\"number\"\r\n                                      class=\"aw-input\"\r\n                                      [(ngModel)]=\"itemSelected.bidtPurchaseContractItemDTO.pciCommittedAmount\"\r\n                                      [disabled]=\"true\"\r\n                                    />\r\n                                  </div>\r\n                                </div>\r\n                                <div id=\"pciCurrency\" class=\"form-group flex--4\">\r\n                                  <label class=\"form-label\">{{\r\n                                    getComponentName() + \".pciCurrency\" | translate\r\n                                  }}</label>\r\n                                  <div class=\"form-control\">\r\n                                    <p-dropdown\r\n                                      class=\"aw-dropdown fixed-width\"\r\n                                      [options]=\"pcCurrencyList\"\r\n                                      [showClear]=\"true\"\r\n                                      [(ngModel)]=\"purchaseContract.pcCurrency\"\r\n                                      placeholder=\"&nbsp;\"\r\n                                      [disabled]=\"true\"\r\n                                    ></p-dropdown>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"row\">\r\n                                <div id=\"pciFlagPartialReceipt\" class=\"form-group flex--3\">\r\n                                  <label class=\"form-label\">\r\n                                    {{ componentData.componentId + \".pciFlagPartialReceipt\" | translate }}\r\n                                  </label>\r\n                                  <div class=\"form-control\">\r\n                                    <p-checkbox\r\n                                      binary=\"true\"\r\n                                      class=\"aw-checkbox\"\r\n                                      [(ngModel)]=\"itemSelected.bidtPurchaseContractItemDTO.pciFlagPartialReceipt\"\r\n                                      [disabled]=\"true\"\r\n                                    ></p-checkbox>\r\n                                  </div>\r\n                                </div>\r\n                                <div id=\"pciPriceRevision\" class=\"form-group flex--3\">\r\n                                  <label class=\"form-label\">\r\n                                    {{ componentData.componentId + \".pciPriceRevision\" | translate }}\r\n                                  </label>\r\n                                  <div class=\"form-control\">\r\n                                    <p-checkbox\r\n                                      binary=\"true\"\r\n                                      class=\"aw-checkbox\"\r\n                                      [(ngModel)]=\"itemSelected.bidtPurchaseContractItemDTO.pciPriceRevision\"\r\n                                      [disabled]=\"true\"\r\n                                    ></p-checkbox>\r\n                                  </div>\r\n                                </div>\r\n                                <div id=\"pciPenalties\" class=\"form-group flex--3\">\r\n                                  <label class=\"form-label\">\r\n                                    {{ componentData.componentId + \".pciPenalties\" | translate }}\r\n                                  </label>\r\n                                  <div class=\"form-control\">\r\n                                    <p-checkbox\r\n                                      binary=\"true\"\r\n                                      class=\"aw-checkbox\"\r\n                                      [(ngModel)]=\"itemSelected.bidtPurchaseContractItemDTO.pciPenalties\"\r\n                                      [disabled]=\"true\"\r\n                                    ></p-checkbox>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <!-- PRICE TABLE -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + \".priceTableAnchor\" | translate }}\r\n          </ng-template>\r\n          <div class=\"grid-row\">\r\n            <div #priceTableAnchor class=\"grid-cell--12\" (click)=\"selectPageTocEntry(component.PRICE_TABLE_ANCHOR_ID)\">\r\n              <div\r\n                class=\"grid-cell grid-cell--container\"\r\n                [ngClass]=\"{ active: isPageTocEntrySelected(component.PRICE_TABLE_ANCHOR_ID) }\"\r\n              >\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ getComponentName() + \".priceTableAnchor\" | translate }}\r\n                      {{ itemNodeSelected && \"(\" + elementAndServicesTableDataSource.dataCount + \")\" }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\" *ngIf=\"!itemNodeSelected\">\r\n                  {{ componentData.componentId + \".elementAccessDescription\" | translate }}\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\" *ngIf=\"itemNodeSelected\">\r\n                  <a-table [dataSource]=\"elementAndServicesTableDataSource\">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && elementAndServicesTableDataSource.hasDataSelection\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteElementAndService()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && elementAndServicesTableDataSource.dataSelectionCount === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"editElementAndServices()\"\r\n                      >\r\n                        {{ \"global.edit\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && !elementAndServicesTableDataSource.hasDataSelection\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"addElementAndServices()\"\r\n                      >\r\n                        {{ \"global.add\" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"birePnPnCode\" let-rowData=\"rowData\">\r\n                      {{ rowData.bidtPurchaseContractElementDTO.birePnPnCode }}\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"pceQuantity\" let-rowData=\"rowData\">\r\n                      {{ rowData.bidtPurchaseContractElementDTO.pceQuantity }}\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"pceCurrency\" let-rowData=\"rowData\">\r\n                      {{ rowData.bidtPurchaseContractElementDTO.pceCurrency }}\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"pcePriceExclTax\" let-rowData=\"rowData\">\r\n                      {{ rowData.bidtPurchaseContractElementDTO.pcePriceExclTax }}\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"pceVat\" let-rowData=\"rowData\">\r\n                      {{ rowData.bidtPurchaseContractElementDTO.pceVat }}\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"pcePrice\" let-rowData=\"rowData\">\r\n                      {{ rowData.bidtPurchaseContractElementDTO.pcePrice }}\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"pceTimeLimit\" let-rowData=\"rowData\">\r\n                      {{ rowData.bidtPurchaseContractElementDTO.pceTimeLimit }}\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <!-- Document section -->\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + \".documentsAnchor\" | translate }}\r\n          </ng-template>\r\n          <div class=\"section\" #documentsAnchor>\r\n            <aw-document-section\r\n              [isReadOnlyForm]=\"isReadOpenMode\"\r\n              [documentSectionSelected]=\"isPageTocEntrySelected(component.DOCUMENTS_ANCHOR_ID)\"\r\n              (onChangeDocumentSectionSelected)=\"selectDocumentSection($event)\"\r\n              [documentsList]=\"documentsList\"\r\n            >\r\n            </aw-document-section>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n\r\n    <!-- POPUP ZONE -->\r\n    <aw-dialog-status\r\n      *ngIf=\"showStatusUpdatesPopup\"\r\n      [isStatusEditable]=\"false\"\r\n      [item]=\"purchaseContract\"\r\n      [itemId]=\"purchaseContract.pcNumber\"\r\n      [(display)]=\"showStatusUpdatesPopup\"\r\n    >\r\n    </aw-dialog-status>\r\n\r\n    <aw-dialog-purchase-contract-slice\r\n      *ngIf=\"showSliceEditPopup\"\r\n      [(display)]=\"showSliceEditPopup\"\r\n      [data]=\"slicePopupData\"\r\n      [newSlice]=\"isNewSlice\"\r\n      [openMode]=\"slicesDialogOpenMode\"\r\n      [sliceStatusListDisplay]=\"sliceStatusList\"\r\n      [sliceTypeListDisplay]=\"sliceTypeList\"\r\n      [sliceUnitList]=\"sliceUnitList\"\r\n      [currency]=\"getCurrencyLabel()\"\r\n      (onAddSlice)=\"onAddSlice($event)\"\r\n      (onUpdateSlice)=\"onUpdateSlice($event)\"\r\n    >\r\n    </aw-dialog-purchase-contract-slice>\r\n\r\n    <aw-dialog-status\r\n      *ngIf=\"showStatusUpdatesPopup\"\r\n      [isStatusEditable]=\"false\"\r\n      [item]=\"purchaseContract\"\r\n      [itemId]=\"purchaseContract.purchaseContractNumber\"\r\n      [(display)]=\"showStatusUpdatesPopup\"\r\n    >\r\n    </aw-dialog-status>\r\n\r\n    <aw-dialog-purchase-contract-partner\r\n      *ngIf=\"showPartnerDialog\"\r\n      [(display)]=\"showPartnerDialog\"\r\n      [data]=\"currentPartner\"\r\n      [partnerRoleList]=\"partnerRoleList\"\r\n      [openMode]=\"partnerDialogOpenMode\"\r\n      (onAddPartner)=\"onAddPartner($event)\"\r\n      (onUpdatePartner)=\"onUpdatePartner($event)\"\r\n    ></aw-dialog-purchase-contract-partner>\r\n\r\n    <aw-dialog-purchase-contract-element\r\n      *ngIf=\"showElementAndServicesDialog\"\r\n      [(display)]=\"showElementAndServicesDialog\"\r\n      [data]=\"elementAndServicesPopupData\"\r\n      [openMode]=\"elementAndServicesDialogOpenMode\"\r\n      (onAddElementAndServices)=\"onAddElementAndServices($event)\"\r\n      (onUpdateElementAndServices)=\"onUpdateElementAndServices($event)\"\r\n    ></aw-dialog-purchase-contract-element>\r\n    <!-- Item dialog popup -->\r\n    <aw-dialog-purchase-contract-item\r\n      *ngIf=\"showItemPopup\"\r\n      [(display)]=\"showItemPopup\"\r\n      [item]=\"currentItem\"\r\n      [newItem]=\"isNewItem\"\r\n      [itemStatusListDisplay]=\"itemStatusStateList\"\r\n      [itemTypeListDisplay]=\"typeList\"\r\n      (onValidated)=\"addNewItem($event)\"\r\n      (onUpdate)=\"editSelectedItem($event)\"\r\n    ></aw-dialog-purchase-contract-item>\r\n    <!-- Framework contract popup -->\r\n    <aw-dialog-purchase-contract-parent-id\r\n      *ngIf=\"showParentIdDialog\"\r\n      [(display)]=\"showParentIdDialog\"\r\n      (onSelected)=\"onSelectedParentId($event)\"\r\n    ></aw-dialog-purchase-contract-parent-id>\r\n    <aw-dialog-search-employee\r\n      *ngIf=\"showEmployeePopup\"\r\n      [(display)]=\"showEmployeePopup\"\r\n      (onSelected)=\"setSelectedEmployee($event)\"\r\n    ></aw-dialog-search-employee>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/purchase-contract-form.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/form/purchase-contract-form.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .grid-cell-item-structure .list-with-details .details,\n:host .grid-cell-item-structure .list-with-details .list {\n  max-height: 100rem; }\n\n:host .grid-cell-item-structure .list-with-details .details {\n  flex-grow: 1; }\n\n:host .grid-cell-item-structure .list-with-details .details .structure-node-action-list {\n    justify-content: flex-end; }\n\n:host .grid-cell-item-structure .list-with-details .details .structure-node-action-list > button {\n      margin-right: 8px; }\n\n:host .grid-cell-item-structure .list-with-details .details .structure-node-action-list > button:last-of-type {\n        margin-right: 0; }\n\n:host .grid-cell-item-structure .list-with-details .list {\n  min-width: 25rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wdXJjaGFzZS1jb250cmFjdC9jb21wb25lbnRzL3B1cmNoYXNlLWNvbnRyYWN0L3BhZ2VzL2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbW9kdWxlc1xccHVyY2hhc2UtY29udHJhY3RcXGNvbXBvbmVudHNcXHB1cmNoYXNlLWNvbnRyYWN0XFxwYWdlc1xcZm9ybVxccHVyY2hhc2UtY29udHJhY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wdXJjaGFzZS1jb250cmFjdC9jb21wb25lbnRzL3B1cmNoYXNlLWNvbnRyYWN0L3BhZ2VzL2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUtRLGtCQUFrQixFQUFBOztBQUwxQjtFQVNRLFlBQVksRUFBQTs7QUFUcEI7SUFZVSx5QkFBeUIsRUFBQTs7QUFabkM7TUFlWSxpQkMwQk0sRUFBQTs7QUR6Q2xCO1FBa0JjLGVBQWUsRUFBQTs7QUFsQjdCO0VBeUJRLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wdXJjaGFzZS1jb250cmFjdC9jb21wb25lbnRzL3B1cmNoYXNlLWNvbnRyYWN0L3BhZ2VzL2Zvcm0vcHVyY2hhc2UtY29udHJhY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5ncmlkLWNlbGwtaXRlbS1zdHJ1Y3R1cmUge1xyXG4gICAgLmxpc3Qtd2l0aC1kZXRhaWxzIHtcclxuICAgICAgLmRldGFpbHMsXHJcbiAgICAgIC5saXN0IHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDByZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgICAgIC5zdHJ1Y3R1cmUtbm9kZS1hY3Rpb24tbGlzdCB7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgICYgPiBidXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubGlzdCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/purchase-contract-form.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/form/purchase-contract-form.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PurchaseContractFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractFormComponent", function() { return PurchaseContractFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _main_logistics_material_form_material_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../main/logistics/material/form/material-form.service */ "./src/app/main/logistics/material/form/material-form.service.ts");
/* harmony import */ var _main_maintenance_work_order_form_work_order_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../main/maintenance/work-order/form/work-order-form.service */ "./src/app/main/maintenance/work-order/form/work-order-form.service.ts");
/* harmony import */ var _main_object_status_object_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../main/object-status/object-status.component */ "./src/app/main/object-status/object-status.component.ts");
/* harmony import */ var _main_overlay_overlay_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../main/overlay/overlay.service */ "./src/app/main/overlay/overlay.service.ts");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_pipes_format_select_option_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../shared/pipes/format-select-option.pipe */ "./src/app/shared/pipes/format-select-option.pipe.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../constants/properties/purchase-contract-property-constants */ "./src/app/modules/purchase-contract/constants/properties/purchase-contract-property-constants.ts");
/* harmony import */ var _constants_properties_purchasecontract_purchase_contract_status_constants__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../constants/properties/purchasecontract/purchase-contract-status-constants */ "./src/app/modules/purchase-contract/constants/properties/purchasecontract/purchase-contract-status-constants.ts");
/* harmony import */ var _services_purchase_contract_element_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../services/purchase-contract-element.service */ "./src/app/modules/purchase-contract/services/purchase-contract-element.service.ts");
/* harmony import */ var _services_purchase_contract_item_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../services/purchase-contract-item.service */ "./src/app/modules/purchase-contract/services/purchase-contract-item.service.ts");
/* harmony import */ var _services_purchase_contract_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../services/purchase-contract.service */ "./src/app/modules/purchase-contract/services/purchase-contract.service.ts");
/* harmony import */ var _utils_label_value_helper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../utils/label-value-helper */ "./src/app/modules/purchase-contract/utils/label-value-helper.ts");
/* harmony import */ var _utils_table_data_source_with_history__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../utils/table-data-source-with-history */ "./src/app/modules/purchase-contract/utils/table-data-source-with-history.ts");
/* harmony import */ var _utils_tree_tree_modifications__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../utils/tree/tree-modifications */ "./src/app/modules/purchase-contract/utils/tree/tree-modifications.ts");
/* harmony import */ var _utils_tree_tree_node_utils__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../utils/tree/tree-node-utils */ "./src/app/modules/purchase-contract/utils/tree/tree-node-utils.ts");
/* harmony import */ var _shared_document_section_document_section_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../shared/document-section/document-section.component */ "./src/app/modules/purchase-contract/components/shared/document-section/document-section.component.ts");
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


































var PurchaseContractFormComponent = /** @class */ (function (_super) {
    __extends(PurchaseContractFormComponent, _super);
    // ****************************************************************************
    function PurchaseContractFormComponent(favoriteService, loaderService, messageService, pageTocService, serializationService, tabService, materialFormService, sessionService, translateService, purchaseContractService, purchaseContractItemService, purchaseContractElementService, confirmationService, propertiesService, workOrderFormService, _overlayService, _formatSelectOption) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.materialFormService = materialFormService;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.purchaseContractService = purchaseContractService;
        _this.purchaseContractItemService = purchaseContractItemService;
        _this.purchaseContractElementService = purchaseContractElementService;
        _this.confirmationService = confirmationService;
        _this.propertiesService = propertiesService;
        _this.workOrderFormService = workOrderFormService;
        _this._overlayService = _overlayService;
        _this._formatSelectOption = _formatSelectOption;
        _this.component = PurchaseContractFormComponent_1;
        _this.pcTypeList = [];
        _this.statusList = [];
        _this.typeList = [];
        _this.sliceStatusList = [];
        _this.sliceTypeList = [];
        _this.pcCurrencyList = [];
        _this.pcSiteList = [];
        _this.partnerRoleList = [];
        _this.itemStatusStateList = [];
        _this.currentItem = undefined;
        _this.isReadOnlyItemPopup = true;
        _this.showItemPopup = false;
        _this.onBeforeLoad();
        _this.tabSlicesId = 'slices';
        _this.initItemTreeTableColList();
        return _this;
    }
    PurchaseContractFormComponent_1 = PurchaseContractFormComponent;
    PurchaseContractFormComponent.prototype.onBeforeLoad = function () {
        this.showEmployeePopup = false;
        this.showParentIdDialog = false;
        _super.prototype.registerPageTocEntryObservable.call(this);
        this.initSlicesTableDataSource();
        this.loadReferentialData();
    };
    PurchaseContractFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].PCT_PURCHASE_CONTRACT_FORM;
    };
    PurchaseContractFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.updateOpenMode(this.componentData.openMode);
        this.setTableOfContent();
        this.init();
    };
    PurchaseContractFormComponent.prototype.cancel = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read);
        this.reload();
    };
    PurchaseContractFormComponent.prototype.edit = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write);
    };
    PurchaseContractFormComponent.prototype.reload = function () {
        this.init();
    };
    PurchaseContractFormComponent.prototype.save = function () {
        if (this.isScreenValidated()) {
            this.savePurchaseContract({
                bidtPurchaseContractDTO: this.purchaseContract,
                partnersModifications: this.partnerTableDataSource.mapListModifications(function (row) { return row.bidtPurchaseContractPartnerDTO; }),
                slicesModifications: this.slicesTableDataSource.mapListModifications(function (row) { return ({
                    bidtPurchaseContractSliceDTO: row.bidtPurchaseContractSliceDTO,
                    itemsTreeModifications: row.sliceItemsTree &&
                        row.sliceItemsTree.mapTreeModifications(function (itemRow) { return ({
                            bidtPurchaseContractItemDTO: itemRow.bidtPurchaseContractItemDTO,
                            elementsModificationsDTO: itemRow.itemElementAndServicesTableDataSource &&
                                itemRow.itemElementAndServicesTableDataSource.mapListModifications(function (elementRow) { return ({
                                    bidtPurchaseContractElementDTO: elementRow.bidtPurchaseContractElementDTO
                                }); })
                        }); })
                }); }),
                documentsModifications: this.documentComponent.getDocumentsModifications()
            });
        }
    };
    PurchaseContractFormComponent.prototype.isScreenValidated = function () {
        var _this = this;
        var isScreenValidated = true;
        // Validating purchase contract mandatory fields
        if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(this.purchaseContract.pcNumber) ||
            _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(this.purchaseContract.statusState) ||
            _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(this.purchaseContract.pcLegalCommitment) ||
            _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(this.purchaseContract.pcLabel)) {
            isScreenValidated = false;
            this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
        }
        var sliceOrderDuplicate = this.slicesTableDataSource.dataSrc.filter(function (sliceRow, index) {
            return (sliceRow.bidtPurchaseContractSliceDTO &&
                index !==
                    _this.slicesTableDataSource.dataSrc.findIndex(function (otherRow) {
                        return otherRow.bidtPurchaseContractSliceDTO &&
                            otherRow.bidtPurchaseContractSliceDTO.pcsOrder === sliceRow.bidtPurchaseContractSliceDTO.pcsOrder;
                    }));
        });
        if (sliceOrderDuplicate.length > 0) {
            isScreenValidated = false;
            this.messageService.showWarningMessage(this.getTranslateKey('errorDuplicateSliceNumber'));
        }
        // A supplier is mandatory on the contract
        // TODO BRASIDAS : Add supplier support to enforce rule that at least one supplier should be selected
        /*if (
          !this.partnerTableDataSource.dataSrc.some(
            (row) => row.bidtPurchaseContractPartnerDTO.pcpRole === PartnerRoleConstants.SUPPLIER
          )
        ) {
          isScreenValidated = false;
          this.messageService.showWarningMessage(this.getTranslateKey('errorNoSupplier'));
        }*/
        return isScreenValidated;
    };
    PurchaseContractFormComponent.prototype.savePurchaseContract = function (saveBidoCustomerInput) {
        var _this = this;
        this.showSaveSpinner = true;
        this.purchaseContractService.saveBidtPurchaseContract(saveBidoCustomerInput).subscribe(function (result) {
            if (!_this.purchaseContract.id) {
                if (result.id) {
                    var purchaseContractId = {
                        id: result.id
                    };
                    _this.componentData.objectId = _this.serializationService.serialize(purchaseContractId);
                }
                _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write);
                if (_this.purchaseContract.pcNumber) {
                    _this.displayComponentContext(_this.purchaseContract.pcNumber, _this.isCreateOpenMode);
                }
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnCreatePurchaseContract'));
            }
            else {
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnUpdatePurchaseContract'));
            }
            _this.reload();
            _this.showSaveSpinner = false;
        }, function (error) {
            _this.showSaveSpinner = false;
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSave'));
        });
    };
    PurchaseContractFormComponent.prototype.init = function () {
        this.purchaseContract = {};
        this.itemsTreeTable = undefined;
        this.itemNodeSelected = undefined;
        this.itemSelected = undefined;
        this.loadPurchaseContract();
        this.initTablePartnerCols();
        this.loadPartner();
        this.initTableElementAndServicesCols();
        this.loadSlices();
        this.loadPartner();
        this.loadDocuments();
        this.getSiteList();
    };
    PurchaseContractFormComponent.prototype.loadPurchaseContract = function () {
        var _this = this;
        if (this.componentData && this.componentData.objectId) {
            // Load purchase contract object
            var contractId = this.serializationService.deserialize(this.componentData.objectId);
            this.purchaseContractService.findBidtPurchaseContract(contractId).subscribe(function (result) {
                if (!!result) {
                    _this.purchaseContract = result;
                    if (!!_this.purchaseContract.bidtEmployeeId) {
                        _this.workOrderFormService.getEmployeeById(_this.purchaseContract.bidtEmployeeId).subscribe(function (employee) {
                            _this.contractManagerName = _this.getEmployeeName(employee);
                        });
                    }
                    if (!!_this.purchaseContract.bidtPurchaseContractId) {
                        _this.purchaseContractService
                            .findBidtPurchaseContract({ id: _this.purchaseContract.bidtPurchaseContractId })
                            .subscribe(function (contract) {
                            _this.parentContractLabel = _this.getParentContractLabel(contract);
                        });
                    }
                    if (_this.purchaseContract.pcNumber) {
                        _this.displayComponentContext(_this.purchaseContract.pcNumber, _this.isCreateOpenMode);
                    }
                }
            }, function () {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadingContract'));
            });
        }
        else {
            // Creation initialisation
            this.purchaseContract = {
                pcCreationDate: new Date(),
                pcUpdateDate: new Date(),
                pcValidityStartDate: new Date(),
                pcValidityEndDate: new Date(),
                statusState: _constants_properties_purchasecontract_purchase_contract_status_constants__WEBPACK_IMPORTED_MODULE_25__["PurchaseContractStatusConstants"].CREATED
            };
        }
    };
    // Load dropdown lists
    PurchaseContractFormComponent.prototype.loadReferentialData = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])({
            statusList: this.getReferencialObservable(this.statusList, _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_24__["PurchaseContractPropertyConstants"].CONTRACT_STATUS_MAP),
            typeList: this.getReferencialObservable(this.typeList, _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_24__["PurchaseContractPropertyConstants"].CONTRACT_ITEM_TYPE_MAP),
            sliceStatusList: this.getReferencialObservable(this.sliceStatusList, _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_24__["PurchaseContractPropertyConstants"].CONTRACT_SLICE_STATUS_MAP),
            sliceTypeList: this.getReferencialObservable(this.sliceTypeList, _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_24__["PurchaseContractPropertyConstants"].CONTRACT_SLICE_TYPE_MAP),
            pcTypeList: this.getReferencialObservable(this.pcTypeList, _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_24__["PurchaseContractPropertyConstants"].CONTRACT_TYPE_MAP),
            pcCurrencyList: this.getReferencialObservable(this.pcCurrencyList, _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__["GenericPropertyConstants"].CURRENCY_MAP),
            itemStatusList: this.getReferencialObservable(this.itemStatusStateList, _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_24__["PurchaseContractPropertyConstants"].CONTRACT_ITEM_STATUS_MAP),
            sliceUnitList: this.getReferencialObservable(this.pcCurrencyList, _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__["GenericPropertyConstants"].MISSION_PERIODICITY_TYPE_MAP),
            partnerRoleList: this.getReferencialObservable(this.partnerRoleList, _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_24__["PurchaseContractPropertyConstants"].PARTNER_ROLE_MAP)
        }).subscribe(function (result) {
            _this.statusList = result.statusList;
            _this.typeList = result.typeList;
            _this.sliceStatusList = result.sliceStatusList;
            _this.sliceTypeList = result.sliceTypeList;
            _this.pcTypeList = result.pcTypeList;
            _this.pcCurrencyList = result.pcCurrencyList;
            _this.itemStatusStateList = result.itemStatusList;
            _this.sliceUnitList = result.sliceUnitList;
            _this.partnerRoleList = result.partnerRoleList;
        });
    };
    // Get site list data from server
    PurchaseContractFormComponent.prototype.getSiteList = function () {
        var _this = this;
        this.materialFormService.findAllSites().subscribe(function (result) {
            _this.pcSiteList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].orEmpty(result).map(function (site) {
                return {
                    label: site.siteCode + "-" + site.siteName,
                    value: site.siteId
                };
            });
        });
    };
    PurchaseContractFormComponent.prototype.loadDocuments = function () {
        var _this = this;
        if (this.componentData && this.componentData.objectId) {
            var contractId = this.serializationService.deserialize(this.componentData.objectId);
            this.purchaseContractService
                .findBidtDocumentsByPurchaseContractId(contractId)
                .subscribe(function (results) { return (_this.documentsList = results); });
        }
    };
    PurchaseContractFormComponent.prototype.getReferencialObservable = function (currentList, mapKey) {
        return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_22__["ListUtils"].isEmpty(currentList) ? this.propertiesService.getValue(mapKey) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(currentList);
    };
    PurchaseContractFormComponent.prototype.loadPartner = function () {
        var _this = this;
        this.partnerTableDataSource.setData([]);
        if (this.componentData && this.componentData.objectId) {
            var contractId = this.serializationService.deserialize(this.componentData.objectId);
            this.partnerTableDataSource.isLoading = true;
            this.purchaseContractService
                .findBidoPartnerByPurchaseContractId(contractId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                _this.partnerTableDataSource.isLoading = false;
            }))
                .subscribe(function (result) {
                if (!!result) {
                    var partnerList = result.map(function (partner) { return _this.getContractPartnerRow(partner); });
                    _this.partnerTableDataSource.setData(partnerList);
                }
                else {
                    _this.partnerTableDataSource.setData([]);
                }
            }, function () {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadingPartners'));
            });
        }
    };
    /**************************************************************************
     * Table Of Content
     *************************************************************************/
    PurchaseContractFormComponent.prototype.setTableOfContent = function () {
        var _this = this;
        var headerDataKey = this.getComponentName() + '.' + PurchaseContractFormComponent_1.HEADER_DATA_ANCHOR_ID;
        var partnerKey = this.getComponentName() + '.' + PurchaseContractFormComponent_1.PARTNER_ANCHOR_ID;
        var sliceKey = this.getComponentName() + '.' + PurchaseContractFormComponent_1.SLICE_ANCHOR_ID;
        var officeProvisionKey = this.getComponentName() + '.' + PurchaseContractFormComponent_1.OFFICE_PROVISION_ANCHOR_ID;
        var priceTableKey = this.getComponentName() + '.' + PurchaseContractFormComponent_1.PRICE_TABLE_ANCHOR_ID;
        var documentsKey = this.getComponentName() + '.' + PurchaseContractFormComponent_1.DOCUMENTS_ANCHOR_ID;
        this.translateService
            .get([headerDataKey, partnerKey, sliceKey, officeProvisionKey, priceTableKey, documentsKey])
            .subscribe(function (results) {
            var headerDataLabel = !!results ? results[headerDataKey] : 'Header Data Information';
            var partnerLabel = !!results ? results[partnerKey] : 'Partner Information';
            var sliceLabel = !!results ? results[sliceKey] : 'Slice Information';
            var officeProvisionLabel = !!results ? results[officeProvisionKey] : 'Office / Provision Information';
            var priceTableLabel = !!results ? results[priceTableKey] : 'Price Information';
            var documentsLabel = !!results ? results[documentsKey] : 'Documents';
            _this.toc = [
                {
                    id: PurchaseContractFormComponent_1.HEADER_DATA_ANCHOR_ID,
                    anchor: _this.headerDataEltRef,
                    label: headerDataLabel
                },
                {
                    id: PurchaseContractFormComponent_1.PARTNER_ANCHOR_ID,
                    anchor: _this.partnerEltRef,
                    label: partnerLabel
                },
                {
                    id: PurchaseContractFormComponent_1.SLICE_ANCHOR_ID,
                    anchor: _this.sliceEltRef,
                    label: sliceLabel
                },
                {
                    id: PurchaseContractFormComponent_1.OFFICE_PROVISION_ANCHOR_ID,
                    anchor: _this.officeProvisionEltRef,
                    label: officeProvisionLabel
                },
                {
                    id: PurchaseContractFormComponent_1.PRICE_TABLE_ANCHOR_ID,
                    anchor: _this.priceTableEltRef,
                    label: priceTableLabel
                },
                {
                    id: PurchaseContractFormComponent_1.DOCUMENTS_ANCHOR_ID,
                    anchor: _this.documentsEltRef,
                    label: documentsLabel
                }
            ];
            _super.prototype.selectPageTocEntry.call(_this, _this.component.HEADER_DATA_ANCHOR_ID);
        });
    };
    PurchaseContractFormComponent.prototype.openStatusUpdatesPopup = function () {
        this.showStatusUpdatesPopup = true;
    };
    PurchaseContractFormComponent.prototype.selectDocumentSection = function (selected) {
        if (selected) {
            this.selectPageTocEntry(this.component.DOCUMENTS_ANCHOR_ID);
        }
    };
    /**************************************************************************
     * Table Of Slices
     *************************************************************************/
    PurchaseContractFormComponent.prototype.initSlicesTableDataSource = function () {
        this.slicesTableDataSource = new _utils_table_data_source_with_history__WEBPACK_IMPORTED_MODULE_30__["TableDataSourceWithHistory"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'pcsOrder',
                    translateKey: this.getTranslateKey('pcsOrder')
                },
                {
                    field: 'pcsDescription',
                    translateKey: this.getTranslateKey('pcsDescription')
                },
                {
                    field: 'statusState',
                    translateKey: this.getTranslateKey('statusState')
                },
                {
                    field: 'pcsConsolidationDate',
                    translateKey: this.getTranslateKey('pcsConsolidationDate')
                },
                {
                    field: 'pcsDuration',
                    translateKey: this.getTranslateKey('pcsDuration')
                },
                {
                    field: 'pcsStartDate',
                    translateKey: this.getTranslateKey('pcsStartDate')
                },
                {
                    field: 'pcsEndDate',
                    translateKey: this.getTranslateKey('pcsEndDate')
                }
            ],
            data: [],
            allowUniqueValue: true
        });
    };
    PurchaseContractFormComponent.prototype.loadSlices = function () {
        var _this = this;
        if (this.componentData && this.componentData.objectId) {
            // Load business partner object
            var contractId = this.serializationService.deserialize(this.componentData.objectId);
            this.slicesTableDataSource.setData([]);
            this.slicesTableDataSource.isLoading = true;
            this.purchaseContractService
                .findSlicesByPurchaseContractId(contractId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                _this.slicesTableDataSource.isLoading = false;
            }))
                .subscribe(function (result) {
                if (!!result) {
                    _this.slicesTableDataSource.setData(result.map(function (slice) { return _this.sliceToRow(slice); }));
                }
            }, function () {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadingSlices'));
            });
        }
    };
    PurchaseContractFormComponent.prototype.elementToRow = function (bidtPurchaseContractElementDTO) {
        this.purchaseContractElementService.calculatePrice(bidtPurchaseContractElementDTO);
        return {
            bidtPurchaseContractElementDTO: bidtPurchaseContractElementDTO
        };
    };
    PurchaseContractFormComponent.prototype.sliceToRow = function (sliceDTO) {
        return {
            bidtPurchaseContractSliceDTO: sliceDTO,
            sliceStatusLabel: _utils_label_value_helper__WEBPACK_IMPORTED_MODULE_29__["LabelValueHelper"].getLabelByValue(this.sliceStatusList, sliceDTO.statusState) || '',
            sliceTypeLabel: _utils_label_value_helper__WEBPACK_IMPORTED_MODULE_29__["LabelValueHelper"].getLabelByValue(this.sliceTypeList, sliceDTO.pcsType) || ''
        };
    };
    PurchaseContractFormComponent.prototype.addSlices = function () {
        this.slicesDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Create;
        this.slicePopupData = {};
        this.isNewSlice = true;
        this.openSliceEditPopup();
    };
    PurchaseContractFormComponent.prototype.onAddSlice = function (ev) {
        this.slicesTableDataSource.addData([this.sliceToRow(ev)]);
    };
    PurchaseContractFormComponent.prototype.editSlices = function () {
        this.slicesDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write;
        this.slicePopupData = __assign({}, this.slicesTableDataSource.dataSelection[0].bidtPurchaseContractSliceDTO);
        this.isNewSlice = false;
        this.openSliceEditPopup();
    };
    PurchaseContractFormComponent.prototype.openSliceEditPopup = function () {
        this.showSliceEditPopup = true;
    };
    PurchaseContractFormComponent.prototype.openSlices = function () {
        this.slicesDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read;
        this.slicePopupData = this.slicesTableDataSource.dataSelection[0].bidtPurchaseContractSliceDTO;
        this.isNewSlice = false;
        this.showSliceEditPopup = true;
        // this.isReadOnlyPurchaseContractSliceDialog = true;
    };
    PurchaseContractFormComponent.prototype.onUpdateSlice = function (ev) {
        this.slicesTableDataSource.replaceData(this.slicesTableDataSource.dataSelection[0], this.sliceToRow(ev));
    };
    PurchaseContractFormComponent.prototype.deleteSlices = function () {
        var _this = this;
        var partialMessageKey = this.slicesTableDataSource.dataSelectionCount > 1 ? 'confirmOnDeleteSlices' : 'confirmOnDeleteSlice';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.slicesTableDataSource.deleteDataSelection();
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteSlice'));
                _this.reinitializeItemTree();
            }
        });
    };
    PurchaseContractFormComponent.prototype.onSliceSelected = function (_event) {
        this.onSliceFocus();
    };
    PurchaseContractFormComponent.prototype.onSliceUnselected = function (_event) {
        this.onSliceFocus();
    };
    PurchaseContractFormComponent.prototype.onSliceFocus = function () {
        if (this.slicesTableDataSource.dataSelectionCount === 1) {
            var currentSlice = this.slicesTableDataSource.dataSelection[0];
            // Tree already loaded
            if (currentSlice.sliceItemsTree) {
                // Tree already loaded => Direct affectation
                this.itemsTreeTable = currentSlice.sliceItemsTree;
            }
            else {
                this.loadSliceItems(currentSlice);
            }
            this.sliceSelected = currentSlice;
        }
        else {
            this.reinitializeItemTree();
        }
    };
    PurchaseContractFormComponent.prototype.reinitializeItemTree = function () {
        this.itemsTreeTable = undefined;
        this.itemSelected = undefined;
        this.itemNodeSelected = undefined;
        this.initTableElementAndServicesCols();
    };
    /**************************************************************************
     * PARTNER
     *************************************************************************/
    PurchaseContractFormComponent.prototype.getContractPartnerRow = function (bidtPurchaseContractPartnerDTO) {
        return {
            bidtPurchaseContractPartnerDTO: bidtPurchaseContractPartnerDTO,
            customerCode: bidtPurchaseContractPartnerDTO.customerCode,
            roleLabel: _utils_label_value_helper__WEBPACK_IMPORTED_MODULE_29__["LabelValueHelper"].getLabelByValue(this.partnerRoleList, bidtPurchaseContractPartnerDTO.pcpRole)
        };
    };
    PurchaseContractFormComponent.prototype.initTablePartnerCols = function () {
        this.partnerTableDataSource = new _utils_table_data_source_with_history__WEBPACK_IMPORTED_MODULE_30__["TableDataSourceWithHistory"]({
            allowMultiSelect: true,
            columns: [
                { field: 'customerCode', translateKey: this.getTranslateKey('customerCode') },
                { field: 'roleLabel', translateKey: this.getTranslateKey('roleLabel') }
            ],
            data: [],
            allowUniqueValue: true,
            propertiesWitchIdentifyData: ['customerCode', 'roleLabel'],
            errorOnAddedDuplicate: this.getTranslateKey('errorOnPartnerDuplicate'),
            errorOnUpdatedDuplicate: this.getTranslateKey('errorOnPartnerDuplicate')
        });
    };
    PurchaseContractFormComponent.prototype.addPartner = function () {
        this.partnerDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Create;
        this.currentPartner = {};
        this.showPartnerDialog = true;
    };
    PurchaseContractFormComponent.prototype.onAddPartner = function (ev) {
        this.partnerTableDataSource.addData([this.getContractPartnerRow(ev)]);
    };
    PurchaseContractFormComponent.prototype.editPartner = function () {
        this.currentPartner = this.partnerTableDataSource.dataSelection[0].bidtPurchaseContractPartnerDTO;
        this.partnerDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write;
        this.showPartnerDialog = true;
    };
    PurchaseContractFormComponent.prototype.onUpdatePartner = function (ev) {
        this.partnerTableDataSource.replaceData(this.partnerTableDataSource.dataSelection[0], this.getContractPartnerRow(ev));
    };
    PurchaseContractFormComponent.prototype.deletePartner = function () {
        var _this = this;
        var partialMessageKey = this.partnerTableDataSource.dataSelectionCount > 1
            ? 'confirmDeleteSelectedPartners'
            : 'confirmDeleteSelectedPartner';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.partnerTableDataSource.deleteDataSelection();
            }
        });
    };
    /**************************************************************************
     * ELEMENT AND SERVICES
     *************************************************************************/
    PurchaseContractFormComponent.prototype.initTableElementAndServicesCols = function () {
        this.elementAndServicesTableDataSource = this.getItemAndServiceDataSourceWithHistory();
    };
    PurchaseContractFormComponent.prototype.addElementAndServices = function () {
        this.elementAndServicesPopupData = undefined;
        this.elementAndServicesDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Create;
        this.showElementAndServicesDialog = true;
    };
    PurchaseContractFormComponent.prototype.onAddElementAndServices = function (ev) {
        this.elementAndServicesTableDataSource.addData([this.elementToRow(ev)]);
        this.onElementsAndServicesModification();
    };
    PurchaseContractFormComponent.prototype.onElementsAndServicesModification = function () {
        if (!!this.itemsTreeTable && !!this.itemNodeSelected) {
            this.itemsTreeTable.markAsUpdated(this.itemNodeSelected);
        }
        this.onItemsTreeModification();
    };
    PurchaseContractFormComponent.prototype.editElementAndServices = function () {
        this.elementAndServicesDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write;
        this.elementAndServicesPopupData = __assign({}, this.elementAndServicesTableDataSource.dataSelection[0].bidtPurchaseContractElementDTO);
        this.isNewElementAndServices = false;
        this.showElementAndServicesDialog = true;
    };
    PurchaseContractFormComponent.prototype.onUpdateElementAndServices = function (ev) {
        this.elementAndServicesTableDataSource.replaceData(this.elementAndServicesTableDataSource.dataSelection[0], this.elementToRow(ev));
        this.onElementsAndServicesModification();
    };
    PurchaseContractFormComponent.prototype.deleteElementAndService = function () {
        var _this = this;
        var partialMessageKey = this.elementAndServicesTableDataSource.dataSelectionCount > 1
            ? 'confirmDeleteSelectedElements'
            : 'confirmDeleteSelectedElement';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.elementAndServicesTableDataSource.deleteDataSelection();
                _this.onElementsAndServicesModification();
            }
        });
    };
    /*************************************************************************
     * Item Structure Popup
     *************************************************************************/
    PurchaseContractFormComponent.prototype.loadSliceItems = function (slice) {
        var _this = this;
        var itemIdGetter = function (row) {
            return row.bidtPurchaseContractItemDTO && row.bidtPurchaseContractItemDTO.id;
        };
        var itemParentIdSetter = function (row, parentId) {
            return (row.bidtPurchaseContractItemDTO.bidtPurchaseContractItemId = parentId);
        };
        if (!slice.bidtPurchaseContractSliceDTO || slice.bidtPurchaseContractSliceDTO.id === undefined) {
            // Added slice => Direct initialisation
            slice.sliceItemsTree = new _utils_tree_tree_modifications__WEBPACK_IMPORTED_MODULE_31__["TreeModifications"](itemIdGetter, itemParentIdSetter);
            this.itemsTreeTable = slice.sliceItemsTree;
        }
        else {
            // Existing slice => items tree loading
            this.purchaseContractItemService
                .getContractSliceItems(slice.bidtPurchaseContractSliceDTO.id)
                .subscribe(function (itemsTree) {
                slice.sliceItemsTree = new _utils_tree_tree_modifications__WEBPACK_IMPORTED_MODULE_31__["TreeModifications"](itemIdGetter, itemParentIdSetter);
                slice.sliceItemsTree.tree = _utils_tree_tree_node_utils__WEBPACK_IMPORTED_MODULE_32__["TreeNodeUtils"].mapTreeNode(itemsTree, _this.initContractItemRow);
                _utils_tree_tree_node_utils__WEBPACK_IMPORTED_MODULE_32__["TreeNodeUtils"].setExpanded(slice.sliceItemsTree.tree);
                _this.itemsTreeTable = slice.sliceItemsTree;
            });
        }
    };
    PurchaseContractFormComponent.prototype.initContractItemRow = function (item) {
        return {
            bidtPurchaseContractItemDTO: item
        };
    };
    PurchaseContractFormComponent.prototype.initItemTreeTableColList = function () {
        this.itemsTreeTableColList = [{ field: 'pciLabel', alignment: 'left' }];
    };
    PurchaseContractFormComponent.prototype.onItemSelection = function (itemNode) {
        this.itemNodeSelected = itemNode;
        this.itemSelected = this.itemNodeSelected && this.itemNodeSelected.data;
        if (!!this.itemSelected) {
            if (this.itemSelected.itemElementAndServicesTableDataSource) {
                this.elementAndServicesTableDataSource = this.itemSelected.itemElementAndServicesTableDataSource;
            }
            else {
                this.loadItemElements();
            }
        }
    };
    PurchaseContractFormComponent.prototype.onAddItem = function () {
        // Show popup to create a new items
        this.isNewItem = true;
        if (this.sliceSelected && this.sliceSelected.bidtPurchaseContractSliceDTO) {
            this.currentItem = {
                pciStartDate: this.sliceSelected.bidtPurchaseContractSliceDTO.pcsStartDate,
                pciEndDate: this.sliceSelected.bidtPurchaseContractSliceDTO.pcsEndDate
            };
        }
        else {
            this.currentItem = undefined;
        }
        this.isReadOnlyItemPopup = false;
        this.showItemPopup = true;
    };
    PurchaseContractFormComponent.prototype.onItemsTreeModification = function () {
        // Force to register slice as modified to make its item modifications available on save
        this.slicesTableDataSource.markAsUpdated(this.slicesTableDataSource.dataSelection[0]);
    };
    PurchaseContractFormComponent.prototype.addNewItem = function (newItem) {
        if (this.itemsTreeTable) {
            this.itemsTreeTable.addChildNode(this.initContractItemRow(newItem), this.itemNodeSelected);
            this.onItemsTreeModification();
        }
    };
    PurchaseContractFormComponent.prototype.onEditItem = function () {
        if (this.itemSelected) {
            // Show popup to edit selected item
            this.currentItem = __assign({}, this.itemSelected.bidtPurchaseContractItemDTO);
            this.isNewItem = false;
            this.isReadOnlyItemPopup = false;
            this.showItemPopup = true;
        }
    };
    PurchaseContractFormComponent.prototype.editSelectedItem = function (item) {
        if (item && this.itemNodeSelected && this.itemsTreeTable) {
            var itemRow = this.itemNodeSelected.data;
            itemRow.bidtPurchaseContractItemDTO = item;
            if (!!this.itemSelected) {
                this.itemSelected.bidtPurchaseContractItemDTO = item;
            }
            this.itemsTreeTable.updateNode(itemRow, this.itemNodeSelected);
            this.onItemsTreeModification();
        }
    };
    PurchaseContractFormComponent.prototype.deleteItems = function () {
        if (this.itemsTreeTable) {
            this.itemsTreeTable.deleteNode(this.itemNodeSelected);
            this.onItemsTreeModification();
            this.initTableElementAndServicesCols();
        }
    };
    PurchaseContractFormComponent.prototype.getItemAndServiceDataSourceWithHistory = function () {
        return new _utils_table_data_source_with_history__WEBPACK_IMPORTED_MODULE_30__["TableDataSourceWithHistory"]({
            allowMultiSelect: true,
            columns: [
                { field: 'birePnPnCode', translateKey: this.getTranslateKey('pnCode') },
                { field: 'pceQuantity', translateKey: this.getTranslateKey('pciQuantity') },
                { field: 'pceCurrency', translateKey: this.getTranslateKey('pcieCurrency') },
                { field: 'pcePriceExclTax', translateKey: this.getTranslateKey('pciePriceExclTax') },
                { field: 'pceVat', translateKey: this.getTranslateKey('pcieVat') },
                { field: 'pcePrice', translateKey: this.getTranslateKey('pciPrice') },
                { field: 'pceTimeLimit', translateKey: this.getTranslateKey('pcieTimeLimit') }
            ],
            data: [],
            allowUniqueValue: false
        });
    };
    PurchaseContractFormComponent.prototype.itemAlreadyExists = function () {
        return (!!this.itemSelected &&
            !!this.itemSelected.bidtPurchaseContractItemDTO &&
            !!this.itemSelected.bidtPurchaseContractItemDTO.id);
    };
    PurchaseContractFormComponent.prototype.loadItemElements = function () {
        var _this = this;
        if (this.itemAlreadyExists()) {
            this.purchaseContractElementService
                .findElementsByItemId((this.itemSelected && this.itemSelected.bidtPurchaseContractItemDTO.id))
                .subscribe(function (elements) {
                if (!!_this.itemSelected) {
                    _this.itemSelected.itemElementAndServicesTableDataSource = _this.getItemAndServiceDataSourceWithHistory();
                    _this.itemSelected.itemElementAndServicesTableDataSource.setData(elements.map(function (element) { return _this.elementToRow(element); }));
                    _this.elementAndServicesTableDataSource = _this.itemSelected.itemElementAndServicesTableDataSource;
                }
            });
        }
        else if (!!this.itemSelected) {
            this.itemSelected.itemElementAndServicesTableDataSource = this.getItemAndServiceDataSourceWithHistory();
            this.elementAndServicesTableDataSource = this.itemSelected.itemElementAndServicesTableDataSource;
        }
    };
    /*************************************************************************
     * Parent contract id Popup
     *************************************************************************/
    PurchaseContractFormComponent.prototype.selectParentId = function () {
        this.showParentIdDialog = true;
    };
    PurchaseContractFormComponent.prototype.onSelectedParentId = function (selectedObject) {
        if (selectedObject) {
            this.purchaseContract.bidtPurchaseContractId = selectedObject.id;
            this.parentContractLabel = this.getParentContractLabel(selectedObject);
        }
        this.showParentIdDialog = false;
    };
    PurchaseContractFormComponent.prototype.getParentContractLabel = function (selectedParentContract) {
        return selectedParentContract.pcNumber + " " + selectedParentContract.pcLabel;
    };
    /*************************************************************************
     * Search employee Popup
     *************************************************************************/
    PurchaseContractFormComponent.prototype.quickSearchEmployee = function () {
        this.showEmployeePopup = true;
    };
    PurchaseContractFormComponent.prototype.setSelectedEmployee = function (selectedEmployee) {
        if (selectedEmployee) {
            this.showEmployeePopup = false;
            this.purchaseContract.bidtEmployeeId = selectedEmployee.id;
            this.contractManagerName = this.getEmployeeName(selectedEmployee);
        }
    };
    PurchaseContractFormComponent.prototype.getEmployeeName = function (selectedEmployee) {
        return selectedEmployee.employeeLastName + " " + selectedEmployee.employeeFirstName;
    };
    PurchaseContractFormComponent.prototype.getCurrencyLabel = function () {
        var returnValue;
        if (!!this.purchaseContract.pcCurrency && !!this.purchaseContract.pcCurrency) {
            returnValue = _utils_label_value_helper__WEBPACK_IMPORTED_MODULE_29__["LabelValueHelper"].getLabelByValue(this.pcCurrencyList, this.purchaseContract.pcCurrency);
        }
        return returnValue;
    };
    PurchaseContractFormComponent.prototype.showStatus = function () {
        var _this = this;
        var overlayRef = this._overlayService.openWithPositionCenter({
            content: _main_object_status_object_status_component__WEBPACK_IMPORTED_MODULE_6__["ObjectStatusComponent"],
            data: {
                currentAuthor: this.purchaseContract.statusUser,
                currentDate: this.purchaseContract.statusDate,
                currentStatus: {
                    label: this._formatSelectOption.transform(this.purchaseContract.statusState, this.statusList),
                    value: this.purchaseContract.statusState
                },
                nextStatuses: this.statusList
            }
        });
        overlayRef.afterClosed$.subscribe({
            next: function (event) {
                if (event.data) {
                    _this.purchaseContract.statusState = event.data;
                    _this.save();
                }
            }
        });
    };
    var PurchaseContractFormComponent_1;
    PurchaseContractFormComponent.HEADER_DATA_ANCHOR_ID = 'headerDataAnchor';
    PurchaseContractFormComponent.PARTNER_ANCHOR_ID = 'partnernAnchor';
    PurchaseContractFormComponent.SLICE_ANCHOR_ID = 'sliceAnchor';
    PurchaseContractFormComponent.OFFICE_PROVISION_ANCHOR_ID = 'officeProvisionAnchor';
    PurchaseContractFormComponent.PRICE_TABLE_ANCHOR_ID = 'priceTableAnchor';
    PurchaseContractFormComponent.DOCUMENTS_ANCHOR_ID = 'documentsAnchor';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_document_section_document_section_component__WEBPACK_IMPORTED_MODULE_33__["DocumentSectionComponent"]),
        __metadata("design:type", _shared_document_section_document_section_component__WEBPACK_IMPORTED_MODULE_33__["DocumentSectionComponent"])
    ], PurchaseContractFormComponent.prototype, "documentComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(PurchaseContractFormComponent_1.HEADER_DATA_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PurchaseContractFormComponent.prototype, "headerDataEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(PurchaseContractFormComponent_1.PARTNER_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PurchaseContractFormComponent.prototype, "partnerEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(PurchaseContractFormComponent_1.SLICE_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PurchaseContractFormComponent.prototype, "sliceEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(PurchaseContractFormComponent_1.OFFICE_PROVISION_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PurchaseContractFormComponent.prototype, "officeProvisionEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(PurchaseContractFormComponent_1.PRICE_TABLE_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PurchaseContractFormComponent.prototype, "priceTableEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(PurchaseContractFormComponent_1.DOCUMENTS_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PurchaseContractFormComponent.prototype, "documentsEltRef", void 0);
    PurchaseContractFormComponent = PurchaseContractFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-purchase-contract-form',
            template: __webpack_require__(/*! ./purchase-contract-form.component.html */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/purchase-contract-form.component.html"),
            styles: [__webpack_require__(/*! ./purchase-contract-form.component.scss */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/purchase-contract-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_14__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_16__["MessageService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_8__["PageTocService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_18__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_20__["TabService"],
            _main_logistics_material_form_material_form_service__WEBPACK_IMPORTED_MODULE_4__["MaterialFormService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_19__["SessionService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _services_purchase_contract_service__WEBPACK_IMPORTED_MODULE_28__["PurchaseContractService"],
            _services_purchase_contract_item_service__WEBPACK_IMPORTED_MODULE_27__["PurchaseContractItemService"],
            _services_purchase_contract_element_service__WEBPACK_IMPORTED_MODULE_26__["PurchaseContractElementService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmationService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_17__["PropertiesService"],
            _main_maintenance_work_order_form_work_order_form_service__WEBPACK_IMPORTED_MODULE_5__["WorkOrderFormService"],
            _main_overlay_overlay_service__WEBPACK_IMPORTED_MODULE_7__["OverlayService"],
            _shared_pipes_format_select_option_pipe__WEBPACK_IMPORTED_MODULE_12__["FormatSelectOptionPipe"]])
    ], PurchaseContractFormComponent);
    return PurchaseContractFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_21__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/search/purchase-contract-search.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/search/purchase-contract-search.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">\r\n        {{ \"page.searchPage\" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"openNewPurchaseContract()\" *ngIf=\"hasUpdateAccessRight\">\r\n      {{ \"global.create\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row search-criteria-header\">\r\n                  <aw-manage-search-criteria\r\n                    [componentId]=\"SEARCH_CRITERIA_ID\"\r\n                    (onSelected)=\"loadSearchCriteria($event)\"\r\n                    (onSavedAsked)=\"saveSearchCriteriaAsked()\"\r\n                    [objectFromPage]=\"searchCriteriaToSave\"\r\n                    [canChange]=\"!searchCriteriaCalculated\"\r\n                  ></aw-manage-search-criteria>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".pcNumber\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchCriteria.pcNumber\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".pcLabel\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchCriteria.pcLabel\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".statusState\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"statusList\"\r\n                        [(ngModel)]=\"searchCriteria.statusState\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [showClear]=\"true\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".pcLegalCommitment\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchCriteria.pcLegalCommitment\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".pcCreationDateStart\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <p-calendar\r\n                        showButtonBar=\"true\"\r\n                        [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\"\r\n                        [yearRange]=\"sessionService.calendarYearRange\"\r\n                        class=\"aw-calendar\"\r\n                        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                        [locale]=\"sessionService.calendarFormat\"\r\n                        [(ngModel)]=\"searchCriteria.pcCreationDateInterval.minValue\"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".pcCreationDateEnd\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <p-calendar\r\n                        showButtonBar=\"true\"\r\n                        [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\"\r\n                        [yearRange]=\"sessionService.calendarYearRange\"\r\n                        class=\"aw-calendar\"\r\n                        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                        [locale]=\"sessionService.calendarFormat\"\r\n                        [(ngModel)]=\"searchCriteria.pcCreationDateInterval.maxValue\"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"advanced-criteria\" [ngClass]=\"{ 'display--none': !showAdvancedSearchCriteria }\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group flex--1\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".pnCode\" | translate }}</label>\r\n\r\n                      <div class=\"form-control form-control-with-modal\">\r\n                        <div class=\"form-control-data\" (click)=\"openMaterialDialog()\">\r\n                          {{ searchCriteria.pnCode }}\r\n                        </div>\r\n\r\n                        <div *ngIf=\"searchCriteria.pnCode\" class=\"btn-clear-wrapper\">\r\n                          <i\r\n                            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"searchCriteria.pnCode = undefined\"\r\n                          ></i>\r\n                        </div>\r\n                        <div *ngIf=\"searchCriteria.pnCode === undefined\" class=\"btn-search-wrapper\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"openMaterialDialog()\"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex--2\"></div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row search-criteria-footer\">\r\n                  <button mat-button (click)=\"showAdvancedSearchCriteria = !showAdvancedSearchCriteria\">\r\n                    <ng-container *ngIf=\"showAdvancedSearchCriteria\">\r\n                      <mat-icon>remove</mat-icon>\r\n                      {{ \"global.collapseCriteria\" | translate }}\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"!showAdvancedSearchCriteria\">\r\n                      <mat-icon>add</mat-icon>\r\n                      {{ \"global.expandCriteria\" | translate }}\r\n                    </ng-container>\r\n                  </button>\r\n\r\n                  <div class=\"search-actions\">\r\n                    <button\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      (click)=\"search()\"\r\n                      appKeyPress\r\n                      color=\"primary\"\r\n                      [keyCode]=\"'Enter'\"\r\n                      (keyPress)=\"search()\"\r\n                    >\r\n                      {{ \"global.toSearch\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"grid-row\">\r\n          <div class=\"grid-cell--12\">\r\n            <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ \"results\" | translate }} ({{ purchaseContractTableDataSource.dataCount\r\n                    }}{{ moreResults ? \"+\" : \"\" }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content\">\r\n                <a-table [dataSource]=\"purchaseContractTableDataSource\">\r\n                  <ng-template tableActionsDef>\r\n                    <button\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      (click)=\"openPurchaseContracts()\"\r\n                      *ngIf=\"purchaseContractTableDataSource.hasDataSelection\"\r\n                    >\r\n                      {{ \"global.open\" | translate }}\r\n                    </button>\r\n                    <button\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      (click)=\"exportPurchaseContractTable()\"\r\n                      *ngIf=\"\r\n                        purchaseContractTableDataSource.hasData && !purchaseContractTableDataSource.hasDataSelection\r\n                      \"\r\n                    >\r\n                      {{ \"global.export\" | translate }}\r\n                    </button>\r\n                  </ng-template>\r\n\r\n                  <ng-template columnDef=\"pcNumber\" let-rowData=\"rowData\">\r\n                    <a (click)=\"openPurchaseContract(rowData.id)\">{{ rowData.pcNumber }}</a>\r\n                  </ng-template>\r\n                  <ng-template columnDef=\"pcCreationDate\" let-rowData=\"rowData\">\r\n                    {{ rowData.pcCreationDate | date: \"yyyy/MM/dd\":\"\":translateService.currentLang }}\r\n                  </ng-template>\r\n                </a-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-search-material\r\n  *ngIf=\"showQuickSearchMaterialPopup\"\r\n  [(display)]=\"showQuickSearchMaterialPopup\"\r\n  [material-code]=\"pnCode\"\r\n  (onSelected)=\"setSelectedMaterial($event)\"\r\n></aw-dialog-search-material>\r\n"

/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/search/purchase-contract-search.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/search/purchase-contract-search.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: PurchaseContractSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractSearchComponent", function() { return PurchaseContractSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/services/export.service */ "./src/app/shared/services/export.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../constants/properties/purchase-contract-property-constants */ "./src/app/modules/purchase-contract/constants/properties/purchase-contract-property-constants.ts");
/* harmony import */ var _services_purchase_contract_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../services/purchase-contract.service */ "./src/app/modules/purchase-contract/services/purchase-contract.service.ts");
/* harmony import */ var _utils_label_value_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../utils/label-value-helper */ "./src/app/modules/purchase-contract/utils/label-value-helper.ts");
/* harmony import */ var _purchase_contract_search_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./purchase-contract-search.service */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/search/purchase-contract-search.service.ts");
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























var PurchaseContractSearchComponent = /** @class */ (function (_super) {
    __extends(PurchaseContractSearchComponent, _super);
    /* ***************************************************************************/
    function PurchaseContractSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, translateService, sessionService, purchaseContractSearchService, purchaseContractService, confirmationService, exportService, propertiesService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.translateService = translateService;
        _this.sessionService = sessionService;
        _this.purchaseContractSearchService = purchaseContractSearchService;
        _this.purchaseContractService = purchaseContractService;
        _this.confirmationService = confirmationService;
        _this.exportService = exportService;
        _this.propertiesService = propertiesService;
        _this.SEARCH_CRITERIA_ID = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].PURCHASE_CONTRACT_SEARCH_CRITERIA_ID;
        _this.statusList = [];
        _this.onBeforeLoad();
        return _this;
    }
    PurchaseContractSearchComponent_1 = PurchaseContractSearchComponent;
    PurchaseContractSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
    };
    PurchaseContractSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__["ComponentConstants"].PCT_PURCHASE_CONTRACT_SEARCH;
    };
    PurchaseContractSearchComponent.prototype.onBeforeLoad = function () {
        this.init();
        this.initPurchaseContractTableDataSource();
        this.loadReferentialData();
    };
    PurchaseContractSearchComponent.prototype.init = function () {
        this.moreResults = false;
        this.searchCriteria = { pcCreationDateInterval: {} };
    };
    // //////////////////////////////////////////////////////////////////////////
    PurchaseContractSearchComponent.prototype.deletePurchaseContract = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(this.purchaseContractTableDataSource.dataSelectionCount === 1
                ? 'confirmDeleteSelectedPurchaseContract'
                : 'confirmDeleteSelectedPurchaseContracts'),
            accept: function () {
                var observables = _this.purchaseContractTableDataSource.dataSelection.map(function (purchaseContract) {
                    _this.purchaseContractSearchService.removeBidtPurchaseContract({
                        id: purchaseContract.id || ''
                    });
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).subscribe({
                    next: function () {
                        _this.messageService.showSuccessMessage(_this.getTranslateKey(_this.purchaseContractTableDataSource.dataSelectionCount === 1
                            ? 'successOnDeletePurchaseContract'
                            : 'successOnDeletePurchaseContracts'));
                        _this.purchaseContractTableDataSource.deleteDataSelection();
                    }
                });
            }
        });
    };
    PurchaseContractSearchComponent.prototype.exportPurchaseContractTable = function () {
        this.exportService.toExcel(this.purchaseContractTableDataSource.sanitizedData.map(function (data) {
            var idLess = __assign({}, data);
            delete idLess.id;
            return idLess;
        }), PurchaseContractSearchComponent_1.PURCHASE_CONTRACT_TABLE_EXPORT_NAME, this.componentData.componentId);
    };
    PurchaseContractSearchComponent.prototype.loadSearchCriteria = function (event) {
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
    PurchaseContractSearchComponent.prototype.openPurchaseContract = function (objectId) {
        this.purchaseContractSearchService.openPurchaseContract(objectId);
    };
    PurchaseContractSearchComponent.prototype.openNewPurchaseContract = function () {
        this.purchaseContractSearchService.openPurchaseContract(undefined);
    };
    PurchaseContractSearchComponent.prototype.openPurchaseContracts = function () {
        var _this = this;
        this.purchaseContractTableDataSource.dataSelection.forEach(function (purchaseContract) {
            _this.purchaseContractSearchService.openPurchaseContract(purchaseContract.id);
        });
    };
    PurchaseContractSearchComponent.prototype.loadReferentialData = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])({
            statusList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__["ListUtils"].isEmpty(this.statusList)
                ? this.propertiesService.getValue(_constants_properties_purchase_contract_property_constants__WEBPACK_IMPORTED_MODULE_19__["PurchaseContractPropertyConstants"].CONTRACT_STATUS_MAP)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.statusList)
        }).subscribe(function (result) {
            _this.statusList = result.statusList;
            _this.purchaseContractTableDataSource.addReferenceDataToColumn('statusState', _this.statusList);
        });
    };
    PurchaseContractSearchComponent.prototype.search = function () {
        var _this = this;
        this.purchaseContractTableDataSource.setData([]);
        this.moreResults = false;
        this.purchaseContractTableDataSource.isLoading = true;
        this.purchaseContractService
            .findBidtPurchaseContractByCriteria(this.searchCriteria)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.purchaseContractTableDataSource.isLoading = false;
            _super.prototype.differ.call(_this, function () {
                _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
            });
        }))
            .subscribe(function (purchaseContracts) {
            if (purchaseContracts && purchaseContracts.list) {
                var purchaseContractsRows = purchaseContracts.list.map(function (pc) { return ({
                    id: pc.id,
                    pcNumber: pc.pcNumber,
                    pcLabel: pc.pcLabel,
                    statusState: _utils_label_value_helper__WEBPACK_IMPORTED_MODULE_21__["LabelValueHelper"].getLabelByValue(_this.statusList, pc.statusState),
                    pcLegalCommitment: pc.pcLegalCommitment,
                    pcCreationDate: pc.pcCreationDate
                }); });
                _this.moreResults = purchaseContracts.moreResults;
                _this.purchaseContractTableDataSource.setData(purchaseContractsRows);
            }
            _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
        });
    };
    PurchaseContractSearchComponent.prototype.clearSearchCriteria = function () {
        this.searchCriteria = { pcCreationDateInterval: {} };
    };
    PurchaseContractSearchComponent.prototype.saveSearchCriteriaAsked = function () {
        this.searchCriteriaToSave = this.searchCriteria;
    };
    PurchaseContractSearchComponent.prototype.openMaterialDialog = function () {
        this.showQuickSearchMaterialPopup = true;
    };
    PurchaseContractSearchComponent.prototype.setSelectedMaterial = function (event) {
        this.searchCriteria.pnCode = event.pnCode;
    };
    PurchaseContractSearchComponent.prototype.initPurchaseContractTableDataSource = function () {
        this.purchaseContractTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'pcNumber',
                    translateKey: this.getTranslateKey('pcNumber')
                },
                {
                    field: 'pcLabel',
                    translateKey: this.getTranslateKey('pcLabel')
                },
                {
                    field: 'statusState',
                    translateKey: this.getTranslateKey('statusState')
                },
                {
                    field: 'pcLegalCommitment',
                    translateKey: this.getTranslateKey('pcLegalCommitment')
                },
                {
                    field: 'pcCreationDate',
                    translateKey: this.getTranslateKey('pcCreationDate')
                }
            ]
        });
    };
    var PurchaseContractSearchComponent_1;
    PurchaseContractSearchComponent.PURCHASE_CONTRACT_TABLE_EXPORT_NAME = 'purchase-contract-list';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resultsContainerAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PurchaseContractSearchComponent.prototype, "resultsContainerAnchor", void 0);
    PurchaseContractSearchComponent = PurchaseContractSearchComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-purchase-contract-search',
            template: __webpack_require__(/*! ./purchase-contract-search.component.html */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/search/purchase-contract-search.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_11__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_12__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__["TabService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__["SessionService"],
            _purchase_contract_search_service__WEBPACK_IMPORTED_MODULE_22__["PurchaseContractSearchService"],
            _services_purchase_contract_service__WEBPACK_IMPORTED_MODULE_20__["PurchaseContractService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"],
            _shared_services_export_service__WEBPACK_IMPORTED_MODULE_9__["ExportService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_13__["PropertiesService"]])
    ], PurchaseContractSearchComponent);
    return PurchaseContractSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_17__["PageComponent"]));



/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/pages/search/purchase-contract-search.service.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/pages/search/purchase-contract-search.service.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: PurchaseContractSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractSearchService", function() { return PurchaseContractSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _api_purchase_contract_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../api/purchase-contract.api */ "./src/app/modules/purchase-contract/api/purchase-contract.api.ts");
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









var PurchaseContractSearchService = /** @class */ (function (_super) {
    __extends(PurchaseContractSearchService, _super);
    function PurchaseContractSearchService(http, appConfigService, purchaseContractApi, serializationService, tabService) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.purchaseContractApi = purchaseContractApi;
        _this.serializationService = serializationService;
        _this.tabService = tabService;
        return _this;
    }
    PurchaseContractSearchService.prototype.openPurchaseContract = function (objectId) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].PCT_PURCHASE_CONTRACT_FORM,
            objectId: objectId ? this.serializationService.serialize({ id: objectId }) : undefined,
            openMode: objectId ? _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Read : _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Create
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    PurchaseContractSearchService.prototype.removeBidtPurchaseContract = function (bidoCustomerId) {
        return _super.prototype.post.call(this, this.purchaseContractApi.delete, bidoCustomerId);
    };
    PurchaseContractSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"],
            _api_purchase_contract_api__WEBPACK_IMPORTED_MODULE_8__["PurchaseContractApi"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__["TabService"]])
    ], PurchaseContractSearchService);
    return PurchaseContractSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/modules/purchase-contract/components/purchase-contract/purchase-contract.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/purchase-contract/purchase-contract.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: PurchaseContractModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractModule", function() { return PurchaseContractModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/tree.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_tree__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/treetable.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_treetable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _main_dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../main/dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _main_logistics_material_form_material_form_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../main/logistics/material/form/material-form.service */ "./src/app/main/logistics/material/form/material-form.service.ts");
/* harmony import */ var _main_logistics_order_document_form_order_document_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../main/logistics/order-document/form/order-document-form.service */ "./src/app/main/logistics/order-document/form/order-document-form.service.ts");
/* harmony import */ var _main_logistics_order_document_search_order_document_search_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../main/logistics/order-document/search/order-document-search.service */ "./src/app/main/logistics/order-document/search/order-document-search.service.ts");
/* harmony import */ var _main_maintenance_work_order_form_work_order_form_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../main/maintenance/work-order/form/work-order-form.service */ "./src/app/main/maintenance/work-order/form/work-order-form.service.ts");
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/components/component-sidebar/component-sidebar.mdule */ "./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts");
/* harmony import */ var _shared_components_dialog_search_employee_dialog_search_employee_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/components/dialog-search-employee/dialog-search-employee.module */ "./src/app/shared/components/dialog-search-employee/dialog-search-employee.module.ts");
/* harmony import */ var _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/components/dialog-search-material/dialog-search-material.module */ "./src/app/shared/components/dialog-search-material/dialog-search-material.module.ts");
/* harmony import */ var _shared_components_dialog_search_material_dialog_search_material_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/components/dialog-search-material/dialog-search-material.service */ "./src/app/shared/components/dialog-search-material/dialog-search-material.service.ts");
/* harmony import */ var _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/components/dialog-status/dialog-status.module */ "./src/app/shared/components/dialog-status/dialog-status.module.ts");
/* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/components/dialog-table/dialog-table.module */ "./src/app/shared/components/dialog-table/dialog-table.module.ts");
/* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../shared/components/dynamic-attributes/dynamic-attributes.module */ "./src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _api_purchase_contract_element_api__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../api/purchase-contract-element-api */ "./src/app/modules/purchase-contract/api/purchase-contract-element-api.ts");
/* harmony import */ var _api_purchase_contract_item_api__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../api/purchase-contract-item.api */ "./src/app/modules/purchase-contract/api/purchase-contract-item.api.ts");
/* harmony import */ var _api_purchase_contract_api__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../api/purchase-contract.api */ "./src/app/modules/purchase-contract/api/purchase-contract.api.ts");
/* harmony import */ var _services_purchase_contract_element_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../services/purchase-contract-element.service */ "./src/app/modules/purchase-contract/services/purchase-contract-element.service.ts");
/* harmony import */ var _services_purchase_contract_item_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../services/purchase-contract-item.service */ "./src/app/modules/purchase-contract/services/purchase-contract-item.service.ts");
/* harmony import */ var _services_purchase_contract_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../services/purchase-contract.service */ "./src/app/modules/purchase-contract/services/purchase-contract.service.ts");
/* harmony import */ var _shared_document_section_document_section_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../shared/document-section/document-section.module */ "./src/app/modules/purchase-contract/components/shared/document-section/document-section.module.ts");
/* harmony import */ var _pages_form_dialogs_dialog_purchase_contract_element_dialog_purchase_contract_element_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/form/dialogs/dialog-purchase-contract-element/dialog-purchase-contract-element.component */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-element/dialog-purchase-contract-element.component.ts");
/* harmony import */ var _pages_form_dialogs_dialog_purchase_contract_item_dialog_purchase_contract_item_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/form/dialogs/dialog-purchase-contract-item/dialog-purchase-contract-item.component */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-item/dialog-purchase-contract-item.component.ts");
/* harmony import */ var _pages_form_dialogs_dialog_purchase_contract_parent_id_dialog_purchase_contract_parent_id_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/form/dialogs/dialog-purchase-contract-parent-id/dialog-purchase-contract-parent-id.component */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-parent-id/dialog-purchase-contract-parent-id.component.ts");
/* harmony import */ var _pages_form_dialogs_dialog_purchase_contract_partner_dialog_purchase_contract_partner_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/form/dialogs/dialog-purchase-contract-partner/dialog-purchase-contract-partner.component */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-partner/dialog-purchase-contract-partner.component.ts");
/* harmony import */ var _pages_form_dialogs_dialog_purchase_contract_slice_dialog_purchase_contract_slice_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/form/dialogs/dialog-purchase-contract-slice/dialog-purchase-contract-slice.component */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/dialogs/dialog-purchase-contract-slice/dialog-purchase-contract-slice.component.ts");
/* harmony import */ var _pages_form_purchase_contract_form_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/form/purchase-contract-form.component */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/form/purchase-contract-form.component.ts");
/* harmony import */ var _pages_search_purchase_contract_search_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/search/purchase-contract-search.component */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/search/purchase-contract-search.component.ts");
/* harmony import */ var _pages_search_purchase_contract_search_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/search/purchase-contract-search.service */ "./src/app/modules/purchase-contract/components/purchase-contract/pages/search/purchase-contract-search.service.ts");
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
    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_4__["InputTextareaModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
    primeng_keyfilter__WEBPACK_IMPORTED_MODULE_5__["KeyFilterModule"],
    primeng_message__WEBPACK_IMPORTED_MODULE_6__["MessageModule"]
];
var INTERNAL_MODULES = [
    _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_26__["ManageSearchCriteriaModule"],
    _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_19__["ComponentSidebarModule"],
    _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_24__["DialogTableModule"],
    _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_23__["DialogStatusModule"],
    _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_25__["DynamicAttributesModule"],
    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_27__["ModalModule"],
    _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_28__["TableModule"],
    _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_21__["DialogSearchMaterialModule"],
    _shared_document_section_document_section_module__WEBPACK_IMPORTED_MODULE_35__["DocumentSectionModule"],
    _shared_components_dialog_search_employee_dialog_search_employee_module__WEBPACK_IMPORTED_MODULE_20__["DialogSearchEmployeeModule"]
];
var PRIMENG_MODULES = [primeng_tree__WEBPACK_IMPORTED_MODULE_9__["TreeModule"], primeng_treetable__WEBPACK_IMPORTED_MODULE_10__["TreeTableModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [
    _pages_form_dialogs_dialog_purchase_contract_slice_dialog_purchase_contract_slice_component__WEBPACK_IMPORTED_MODULE_40__["DialogPurchaseContractSliceComponent"],
    _pages_form_dialogs_dialog_purchase_contract_item_dialog_purchase_contract_item_component__WEBPACK_IMPORTED_MODULE_37__["DialogPurchaseContractItemComponent"],
    _pages_form_dialogs_dialog_purchase_contract_element_dialog_purchase_contract_element_component__WEBPACK_IMPORTED_MODULE_36__["DialogPurchaseContractElementComponent"],
    _pages_form_dialogs_dialog_purchase_contract_partner_dialog_purchase_contract_partner_component__WEBPACK_IMPORTED_MODULE_39__["DialogPurchaseContractPartnerComponent"],
    _pages_form_dialogs_dialog_purchase_contract_parent_id_dialog_purchase_contract_parent_id_component__WEBPACK_IMPORTED_MODULE_38__["DialogPurchaseContractParentIdComponent"]
];
var DYNAMIC_COMPONENTS = [_pages_form_purchase_contract_form_component__WEBPACK_IMPORTED_MODULE_41__["PurchaseContractFormComponent"], _pages_search_purchase_contract_search_component__WEBPACK_IMPORTED_MODULE_42__["PurchaseContractSearchComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var API = [_api_purchase_contract_api__WEBPACK_IMPORTED_MODULE_31__["PurchaseContractApi"], _api_purchase_contract_item_api__WEBPACK_IMPORTED_MODULE_30__["PurchaseContractItemApi"], _api_purchase_contract_element_api__WEBPACK_IMPORTED_MODULE_29__["PurchaseContractElementApi"]];
var SERVICES = [
    _services_purchase_contract_service__WEBPACK_IMPORTED_MODULE_34__["PurchaseContractService"],
    _services_purchase_contract_item_service__WEBPACK_IMPORTED_MODULE_33__["PurchaseContractItemService"],
    _services_purchase_contract_element_service__WEBPACK_IMPORTED_MODULE_32__["PurchaseContractElementService"],
    _pages_search_purchase_contract_search_service__WEBPACK_IMPORTED_MODULE_43__["PurchaseContractSearchService"],
    _main_logistics_order_document_search_order_document_search_service__WEBPACK_IMPORTED_MODULE_14__["OrderDocumentSearchService"],
    _shared_components_dialog_search_material_dialog_search_material_service__WEBPACK_IMPORTED_MODULE_22__["DialogSearchMaterialService"],
    _main_logistics_order_document_form_order_document_form_service__WEBPACK_IMPORTED_MODULE_13__["OrderDocumentFormService"],
    _main_logistics_material_form_material_form_service__WEBPACK_IMPORTED_MODULE_12__["MaterialFormService"],
    _main_maintenance_work_order_form_work_order_form_service__WEBPACK_IMPORTED_MODULE_15__["WorkOrderFormService"]
];
var PurchaseContractModule = /** @class */ (function () {
    function PurchaseContractModule() {
    }
    PurchaseContractModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_16__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_17__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_18__["AppCommonSharedModule"],
                _main_dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_11__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES, PRIMENG_MODULES),
            providers: __spread(API, SERVICES)
        })
    ], PurchaseContractModule);
    return PurchaseContractModule;
}());



/***/ }),

/***/ "./src/app/modules/purchase-contract/components/shared/document-section/document-section.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/shared/document-section/document-section.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-row\">\r\n  <div #documentsAnchor class=\"grid-cell--12\" (click)=\"onChangeDocumentSelected()\">\r\n    <div class=\"grid-cell grid-cell--container\" [ngClass]=\"{ active: documentSectionSelected }\">\r\n      <div class=\"grid-cell-header\">\r\n        <div class=\"grid-cell-title-container\">\r\n          <h3 class=\"grid-cell-title\">\r\n            {{ \"global.documents\" | translate }} ({{\r\n              documentsTableDataSource ? documentsTableDataSource.dataCount : 0\r\n            }})\r\n          </h3>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-cell-content\">\r\n        <a-table [dataSource]=\"documentsTableDataSource\">\r\n          <ng-template tableActionsDef>\r\n            <div class=\"btn-file-upload-wrapper\">\r\n              <p-fileUpload\r\n                #fileUploader\r\n                *ngIf=\"!isReadOnlyForm && !documentsTableDataSource.hasDataSelection\"\r\n                name=\"document[]\"\r\n                customUpload=\"true\"\r\n                mode=\"basic\"\r\n                auto=\"true\"\r\n                chooseLabel=\"{{ 'global.upload' | translate }}\"\r\n                (uploadHandler)=\"uploadDocument($event, fileUploader)\"\r\n              ></p-fileUpload>\r\n            </div>\r\n\r\n            <button\r\n              *ngIf=\"!isReadOnlyForm && !documentsTableDataSource.hasDataSelection\"\r\n              type=\"button\"\r\n              mat-raised-button\r\n              (click)=\"linkUrl()\"\r\n            >\r\n              {{ getComponentName() + \".linkUrl\" | translate }}\r\n            </button>\r\n\r\n            <button *ngIf=\"showDownloadDocButton()\" type=\"button\" mat-raised-button (click)=\"downloadFiles()\">\r\n              {{ \"global.download\" | translate }}\r\n            </button>\r\n\r\n            <button *ngIf=\"showGoToDocButton()\" type=\"button\" mat-raised-button (click)=\"goToDoc()\">\r\n              {{ \"global.goTo\" | translate }}\r\n            </button>\r\n\r\n            <button\r\n              *ngIf=\"!isReadOnlyForm && documentsTableDataSource.hasDataSelection\"\r\n              type=\"button\"\r\n              mat-raised-button\r\n              color=\"warn\"\r\n              (click)=\"deleteDocuments()\"\r\n            >\r\n              {{ \"global.delete\" | translate }}\r\n            </button>\r\n\r\n            <button\r\n              *ngIf=\"!isReadOnlyForm && documentsTableDataSource.dataSelectionCount === 1\"\r\n              type=\"button\"\r\n              mat-raised-button\r\n              (click)=\"editDocument()\"\r\n            >\r\n              {{ \"global.edit\" | translate }}\r\n            </button>\r\n\r\n            <button\r\n              *ngIf=\"documentsTableDataSource.dataSelectionCount === 1\"\r\n              type=\"button\"\r\n              mat-raised-button\r\n              (click)=\"openDocument()\"\r\n            >\r\n              {{ \"global.open\" | translate }}\r\n            </button>\r\n          </ng-template>\r\n          <ng-template columnDef=\"documentName\" let-rowData=\"rowData\">\r\n            <a (click)=\"downloadFiles(rowData)\">{{ rowData.documentName }}</a>\r\n          </ng-template>\r\n          <ng-template columnDef=\"documentPublicationDate\" let-rowData=\"rowData\">\r\n            {{ rowData.documentPublicationDate | date: \"yyyy/MM/dd\":\"\":translateService.currentLang }}\r\n          </ng-template>\r\n        </a-table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-document-popup-form\r\n  *ngIf=\"showDocumentDialog\"\r\n  [document]=\"currentDocument\"\r\n  [(display)]=\"showDocumentDialog\"\r\n  [isReadOnlyForm]=\"isReadOnlyDocumentDialog\"\r\n  (onValidated)=\"onUpdateDocument($event)\"\r\n></aw-document-popup-form>\r\n\r\n<aw-document-url-popup-form\r\n  *ngIf=\"showDocumentUrlDialog\"\r\n  [document]=\"currentDocument\"\r\n  [(display)]=\"showDocumentUrlDialog\"\r\n  [isReadOnlyForm]=\"isReadOnlyDocumentDialog\"\r\n  (onValidated)=\"onUpdateDocumentUrl($event)\"\r\n></aw-document-url-popup-form>\r\n"

/***/ }),

/***/ "./src/app/modules/purchase-contract/components/shared/document-section/document-section.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/shared/document-section/document-section.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: DocumentSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSectionComponent", function() { return DocumentSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _utils_table_data_source_with_history__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/table-data-source-with-history */ "./src/app/modules/purchase-contract/utils/table-data-source-with-history.ts");
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













var DocumentSectionComponent = /** @class */ (function (_super) {
    __extends(DocumentSectionComponent, _super);
    function DocumentSectionComponent(favoriteService, loaderService, messageService, serializationService, tabService, dateService, translateService, confirmationService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.dateService = dateService;
        _this.translateService = translateService;
        _this.confirmationService = confirmationService;
        _this.component = DocumentSectionComponent_1;
        _this.categories = [];
        _this.typeList = [];
        _this.maxDate = new Date();
        _this.errorMarkerList = [];
        _this.initDocumentsTableDataSource();
        _this.onChangeDocumentSectionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DocumentSectionComponent_1 = DocumentSectionComponent;
    Object.defineProperty(DocumentSectionComponent.prototype, "documentsList", {
        set: function (documentsTableDataSource) {
            this.documentsTableDataSource.setData(documentsTableDataSource);
        },
        enumerable: true,
        configurable: true
    });
    DocumentSectionComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
    };
    DocumentSectionComponent.prototype.getComponentName = function () {
        return 'DocumentSection';
    };
    DocumentSectionComponent.prototype.initDocumentsTableDataSource = function () {
        this.documentsTableDataSource = new _utils_table_data_source_with_history__WEBPACK_IMPORTED_MODULE_12__["TableDataSourceWithHistory"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'documentName',
                    translateKey: this.getTranslateKey('documentName')
                },
                {
                    field: 'documentDescription',
                    translateKey: this.getTranslateKey('documentDescription')
                },
                {
                    field: 'documentType',
                    translateKey: this.getTranslateKey('documentType')
                },
                {
                    field: 'documentPublicationDate',
                    translateKey: this.getTranslateKey('documentPublicationDate')
                },
                {
                    field: 'documentSource',
                    translateKey: this.getTranslateKey('documentSource')
                }
            ],
            data: [],
            allowUniqueValue: true,
            propertiesWitchIdentifyData: ['documentName'],
            errorOnAddedDuplicate: this.getTranslateKey('errorOnPartnerDuplicate'),
            errorOnUpdatedDuplicate: this.getTranslateKey('errorOnPartnerDuplicate')
        });
    };
    DocumentSectionComponent.prototype.onChangeDocumentSelected = function () {
        this.documentSectionSelected = true;
        this.onChangeDocumentSectionSelected.emit(true);
    };
    DocumentSectionComponent.prototype.uploadDocument = function (event, fileUploader) {
        var _this = this;
        if (event.files) {
            var file_1 = event.files[0];
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_11__["FileUtils"].getFileContentAsBase64(file_1, function (fileContent) {
                if (fileContent) {
                    var document_1 = {
                        documentContent: fileContent,
                        documentName: file_1.name,
                        documentPublicationDate: new Date()
                    };
                    _this.addNewDocument(document_1);
                }
            });
            fileUploader.clear();
        }
    };
    DocumentSectionComponent.prototype.linkUrl = function () {
        if (this.documentsTableDataSource.dataSelectionCount === 1) {
            this.currentDocument = __assign({}, this.documentsTableDataSource.dataSelection[0]);
            this.isReadOnlyDocumentDialog = false;
            this.showDocumentUrlDialog = true;
        }
        else {
            this.currentDocumentIndex = -1;
            this.currentDocument = {};
            this.showDocumentUrlDialog = true;
        }
    };
    DocumentSectionComponent.prototype.downloadFiles = function () {
        this.documentsTableDataSource.dataSelection.forEach(function (document) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_11__["FileUtils"].downloadFile(document.documentContent, document.documentName);
        });
    };
    DocumentSectionComponent.prototype.showDownloadDocButton = function () {
        var toReturn = true;
        if (!this.documentsTableDataSource.hasDataSelection) {
            toReturn = false;
        }
        else {
            this.documentsTableDataSource.dataSelection.forEach(function (doc) {
                if (!!doc.documentSource) {
                    toReturn = false;
                }
            });
        }
        return toReturn;
    };
    DocumentSectionComponent.prototype.showGoToDocButton = function () {
        var toReturn = true;
        if (!this.documentsTableDataSource.hasDataSelection) {
            toReturn = false;
        }
        else {
            this.documentsTableDataSource.dataSelection.forEach(function (doc) {
                if (!doc.documentSource) {
                    toReturn = false;
                }
            });
        }
        return toReturn;
    };
    DocumentSectionComponent.prototype.goToDoc = function () {
        this.documentsTableDataSource.dataSelection.forEach(function (doc) {
            window.open(doc.documentSource);
        });
    };
    DocumentSectionComponent.prototype.addNewDocument = function (newDocument) {
        this.documentsTableDataSource.addData([this.convertDocumentType(newDocument)]);
    };
    DocumentSectionComponent.prototype.openDocument = function () {
        if (this.documentsTableDataSource.dataSelectionCount === 1) {
            this.currentDocument = this.documentsTableDataSource.dataSelection[0];
            this.isReadOnlyDocumentDialog = true;
            if (!this.currentDocument.documentSource) {
                this.showDocumentDialog = true;
            }
            else {
                this.showDocumentUrlDialog = true;
            }
        }
    };
    DocumentSectionComponent.prototype.editDocument = function () {
        if (this.documentsTableDataSource.dataSelectionCount === 1) {
            this.currentDocument = __assign({}, this.documentsTableDataSource.dataSelection[0]);
            this.isReadOnlyDocumentDialog = false;
            if (!this.currentDocument.documentSource) {
                this.showDocumentDialog = true;
            }
            else {
                this.showDocumentUrlDialog = true;
            }
        }
    };
    DocumentSectionComponent.prototype.onUpdateDocument = function (document) {
        this.documentsTableDataSource.replaceData(this.documentsTableDataSource.dataSelection[0], this.convertDocumentType(document));
    };
    DocumentSectionComponent.prototype.onUpdateDocumentUrl = function (documentUrl) {
        if (this.currentDocumentIndex === -1) {
            this.addNewDocument(documentUrl);
        }
        else {
            this.onUpdateDocument(documentUrl);
        }
    };
    DocumentSectionComponent.prototype.deleteDocuments = function () {
        var _this = this;
        var partialMessageKey = this.documentsTableDataSource.dataSelectionCount > 1
            ? 'confirmDeleteSelectedDocuments'
            : 'confirmDeleteSelectedDocument';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.documentsTableDataSource.deleteDataSelection();
            }
        });
    };
    DocumentSectionComponent.prototype.getDocumentsModifications = function () {
        return this.documentsTableDataSource.toListModifications();
    };
    DocumentSectionComponent.prototype.convertDocumentType = function (obj) {
        return __assign({}, obj, { documentType: this.showDocExtension(obj) });
    };
    DocumentSectionComponent.prototype.showDocExtension = function (document) {
        return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_11__["FileUtils"].getExtension(document.documentName).toUpperCase();
    };
    var DocumentSectionComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentSectionComponent.prototype, "document", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DocumentSectionComponent.prototype, "documentsList", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DocumentSectionComponent.prototype, "documentSectionSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DocumentSectionComponent.prototype, "isReadOnlyForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DocumentSectionComponent.prototype, "onChangeDocumentSectionSelected", void 0);
    DocumentSectionComponent = DocumentSectionComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-document-section',
            template: __webpack_require__(/*! ./document-section.component.html */ "./src/app/modules/purchase-contract/components/shared/document-section/document-section.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__["TabService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])
    ], DocumentSectionComponent);
    return DocumentSectionComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__["PageComponent"]));



/***/ }),

/***/ "./src/app/modules/purchase-contract/components/shared/document-section/document-section.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/components/shared/document-section/document-section.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DocumentSectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSectionModule", function() { return DocumentSectionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _main_human_resources_employee_form_popups_document_popup_form_document_popup_form_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../main/human-resources/employee-form/popups/document-popup-form/document-popup-form.module */ "./src/app/main/human-resources/employee-form/popups/document-popup-form/document-popup-form.module.ts");
/* harmony import */ var _main_human_resources_employee_form_popups_document_url_popup_form_document_url_popup_form_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../main/human-resources/employee-form/popups/document-url-popup-form/document-url-popup-form.module */ "./src/app/main/human-resources/employee-form/popups/document-url-popup-form/document-url-popup-form.module.ts");
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _document_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./document-section.component */ "./src/app/modules/purchase-contract/components/shared/document-section/document-section.component.ts");
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
var EXTERNAL_MODULES = [primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__["DropdownModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__["FileUploadModule"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"]];
var INTERNAL_MODULES = [_shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_10__["ModalModule"], _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_11__["TableModule"], _main_human_resources_employee_form_popups_document_popup_form_document_popup_form_module__WEBPACK_IMPORTED_MODULE_5__["DocumentPopupFormModule"], _main_human_resources_employee_form_popups_document_url_popup_form_document_url_popup_form_module__WEBPACK_IMPORTED_MODULE_6__["DocumentUrlPopupFormModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_document_section_component__WEBPACK_IMPORTED_MODULE_12__["DocumentSectionComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [];
var DocumentSectionModule = /** @class */ (function () {
    function DocumentSectionModule() {
    }
    DocumentSectionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS),
            exports: __spread(COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_7__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_8__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_9__["AppCommonSharedModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], DocumentSectionModule);
    return DocumentSectionModule;
}());



/***/ }),

/***/ "./src/app/modules/purchase-contract/constants/properties/purchase-contract-property-constants.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/constants/properties/purchase-contract-property-constants.ts ***!
  \********************************************************************************************************/
/*! exports provided: PurchaseContractPropertyConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractPropertyConstants", function() { return PurchaseContractPropertyConstants; });
var PurchaseContractPropertyConstants = /** @class */ (function () {
    function PurchaseContractPropertyConstants() {
    }
    PurchaseContractPropertyConstants.CONTRACT_ITEM_TYPE_MAP = 'getPctContractItemTypeMap';
    PurchaseContractPropertyConstants.CONTRACT_SLICE_STATUS_MAP = 'getPctContractSliceStatusMap';
    PurchaseContractPropertyConstants.CONTRACT_SLICE_TYPE_MAP = 'getPctContractSliceTypeMap';
    PurchaseContractPropertyConstants.CONTRACT_STATUS_MAP = 'getPctContractStatusMap';
    PurchaseContractPropertyConstants.CONTRACT_TYPE_MAP = 'getPctContractTypeMap';
    PurchaseContractPropertyConstants.CONTRACT_ITEM_STATUS_MAP = 'getPctContractItemStatusMap';
    // TODO Replace mock by 'getPctPartnerRoleMap';
    PurchaseContractPropertyConstants.PARTNER_ROLE_MAP = 'getPurchaseContractTypeMap';
    PurchaseContractPropertyConstants.CONTRACT_SLICE_DURATION_UNIT_MAP = 'getPctContractSliceDurationUnitStatusMap';
    PurchaseContractPropertyConstants.CONTRACT_ELEMENT_TIME_LIMIT_UNIT_MAP = 'getPctContractElementTimeLimitUnitStatusMap';
    PurchaseContractPropertyConstants.UNIT_DAY_VALUE = '1-day';
    PurchaseContractPropertyConstants.UNIT_WEEK_VALUE = '2-wee';
    PurchaseContractPropertyConstants.UNIT_MONTH_VALUE = '3-mon';
    PurchaseContractPropertyConstants.MILLI_SEC_IN_DAY = 86400000;
    PurchaseContractPropertyConstants.DAY_IN_WEEK = 7;
    return PurchaseContractPropertyConstants;
}());



/***/ }),

/***/ "./src/app/modules/purchase-contract/constants/properties/purchasecontract/purchase-contract-slice-status-constants.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/constants/properties/purchasecontract/purchase-contract-slice-status-constants.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PurchaseContractSliceStatusConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractSliceStatusConstants", function() { return PurchaseContractSliceStatusConstants; });
var PurchaseContractSliceStatusConstants = /** @class */ (function () {
    function PurchaseContractSliceStatusConstants() {
    }
    PurchaseContractSliceStatusConstants.AWAITING_FIRMING = '1-wai';
    PurchaseContractSliceStatusConstants.FIRMED = '2-fir';
    PurchaseContractSliceStatusConstants.CANCELED = '3-can';
    return PurchaseContractSliceStatusConstants;
}());



/***/ }),

/***/ "./src/app/modules/purchase-contract/constants/properties/purchasecontract/purchase-contract-slice-type-constants.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/constants/properties/purchasecontract/purchase-contract-slice-type-constants.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: PurchaseContractSliceTypeConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractSliceTypeConstants", function() { return PurchaseContractSliceTypeConstants; });
var PurchaseContractSliceTypeConstants = /** @class */ (function () {
    function PurchaseContractSliceTypeConstants() {
    }
    PurchaseContractSliceTypeConstants.FIRM = '1-fir';
    PurchaseContractSliceTypeConstants.OPTIONAL = '2-opt';
    return PurchaseContractSliceTypeConstants;
}());



/***/ }),

/***/ "./src/app/modules/purchase-contract/constants/properties/purchasecontract/purchase-contract-status-constants.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/constants/properties/purchasecontract/purchase-contract-status-constants.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PurchaseContractStatusConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractStatusConstants", function() { return PurchaseContractStatusConstants; });
var PurchaseContractStatusConstants = /** @class */ (function () {
    function PurchaseContractStatusConstants() {
    }
    PurchaseContractStatusConstants.CREATED = '1-cre';
    PurchaseContractStatusConstants.PENDING = '2-pen';
    PurchaseContractStatusConstants.CLOSED = '3-clo';
    return PurchaseContractStatusConstants;
}());



/***/ }),

/***/ "./src/app/modules/purchase-contract/services/purchase-contract-element.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/services/purchase-contract-element.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: PurchaseContractElementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractElementService", function() { return PurchaseContractElementService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _api_purchase_contract_element_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/purchase-contract-element-api */ "./src/app/modules/purchase-contract/api/purchase-contract-element-api.ts");
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





var PurchaseContractElementService = /** @class */ (function (_super) {
    __extends(PurchaseContractElementService, _super);
    function PurchaseContractElementService(http, appConfigService, purchaseContractElementApiService) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.purchaseContractElementApiService = purchaseContractElementApiService;
        return _this;
    }
    PurchaseContractElementService.prototype.findElementsByItemId = function (itemId) {
        return _super.prototype.post.call(this, this.purchaseContractElementApiService.getElementsByItemId, itemId);
    };
    PurchaseContractElementService.prototype.calculatePrice = function (bidtPurchaseContractElementDTO) {
        if (bidtPurchaseContractElementDTO &&
            bidtPurchaseContractElementDTO.pcePriceExclTax &&
            bidtPurchaseContractElementDTO.pceVat) {
            var pciePriceExclTaxValue = parseFloat(bidtPurchaseContractElementDTO.pcePriceExclTax.toString());
            var pcieVatValue = parseFloat(bidtPurchaseContractElementDTO.pceVat.toString());
            var percentage = 100;
            var nbdecimal = 2;
            var result = (pciePriceExclTaxValue + (pciePriceExclTaxValue * pcieVatValue) / percentage).toString();
            var indexSep = result.indexOf('.') !== -1 ? result.indexOf('.') : result.indexOf(',') !== -1 ? result.indexOf(',') : undefined;
            if (!!indexSep) {
                bidtPurchaseContractElementDTO.pcePrice = parseFloat(result.substring(0, indexSep + nbdecimal + 1));
            }
            else {
                bidtPurchaseContractElementDTO.pcePrice = parseFloat(result);
            }
        }
    };
    PurchaseContractElementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"],
            _api_purchase_contract_element_api__WEBPACK_IMPORTED_MODULE_4__["PurchaseContractElementApi"]])
    ], PurchaseContractElementService);
    return PurchaseContractElementService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/modules/purchase-contract/services/purchase-contract-item.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/services/purchase-contract-item.service.ts ***!
  \**************************************************************************************/
/*! exports provided: PurchaseContractItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractItemService", function() { return PurchaseContractItemService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _api_purchase_contract_item_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/purchase-contract-item.api */ "./src/app/modules/purchase-contract/api/purchase-contract-item.api.ts");
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





var PurchaseContractItemService = /** @class */ (function (_super) {
    __extends(PurchaseContractItemService, _super);
    function PurchaseContractItemService(http, appConfigService, purchaseContractItemApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.purchaseContractItemApi = purchaseContractItemApi;
        return _this;
    }
    /**************************************************************************
     * Purchase contract api
     *************************************************************************/
    PurchaseContractItemService.prototype.getContractSliceItems = function (purchaseContractSliceId) {
        return _super.prototype.post.call(this, this.purchaseContractItemApi.getContractSliceItems, purchaseContractSliceId);
    };
    PurchaseContractItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"],
            _api_purchase_contract_item_api__WEBPACK_IMPORTED_MODULE_4__["PurchaseContractItemApi"]])
    ], PurchaseContractItemService);
    return PurchaseContractItemService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/modules/purchase-contract/services/purchase-contract.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/services/purchase-contract.service.ts ***!
  \*********************************************************************************/
/*! exports provided: PurchaseContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractService", function() { return PurchaseContractService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _api_purchase_contract_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/purchase-contract.api */ "./src/app/modules/purchase-contract/api/purchase-contract.api.ts");
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





var PurchaseContractService = /** @class */ (function (_super) {
    __extends(PurchaseContractService, _super);
    function PurchaseContractService(http, appConfigService, purchaseContractApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.purchaseContractApi = purchaseContractApi;
        return _this;
    }
    /**************************************************************************
     * Purchase contract api
     *************************************************************************/
    PurchaseContractService.prototype.findBidtPurchaseContract = function (bidtPurchaseContractId) {
        return _super.prototype.post.call(this, this.purchaseContractApi.getById, bidtPurchaseContractId.id);
    };
    PurchaseContractService.prototype.saveBidtPurchaseContract = function (purchaseContract) {
        return _super.prototype.post.call(this, this.purchaseContractApi.addOrUpdate, purchaseContract);
    };
    PurchaseContractService.prototype.findBidtPurchaseContractByCriteria = function (purchaseContract) {
        return _super.prototype.post.call(this, this.purchaseContractApi.findByCriteria, purchaseContract);
    };
    PurchaseContractService.prototype.findBidoPartnerByPurchaseContractId = function (bidtPurchaseContractId) {
        return _super.prototype.post.call(this, this.purchaseContractApi.getContractPartners, bidtPurchaseContractId.id);
    };
    PurchaseContractService.prototype.findSlicesByPurchaseContractId = function (purchaseContractId) {
        return _super.prototype.post.call(this, this.purchaseContractApi.getContractSlices, purchaseContractId.id);
    };
    PurchaseContractService.prototype.findBidtDocumentsByPurchaseContractId = function (purchaseContractId) {
        return _super.prototype.post.call(this, this.purchaseContractApi.getContractDocuments, purchaseContractId.id);
    };
    PurchaseContractService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"],
            _api_purchase_contract_api__WEBPACK_IMPORTED_MODULE_4__["PurchaseContractApi"]])
    ], PurchaseContractService);
    return PurchaseContractService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_2__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/modules/purchase-contract/utils/tree/action.enum.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/purchase-contract/utils/tree/action.enum.ts ***!
  \*********************************************************************/
/*! exports provided: ActionEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionEnum", function() { return ActionEnum; });
var ActionEnum;
(function (ActionEnum) {
    ActionEnum["Add"] = "A";
    ActionEnum["Update"] = "U";
    ActionEnum["Delete"] = "D";
})(ActionEnum || (ActionEnum = {}));


/***/ }),

/***/ "./src/app/modules/purchase-contract/utils/tree/tree-modifications.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/utils/tree/tree-modifications.ts ***!
  \****************************************************************************/
/*! exports provided: TreeModifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModifications", function() { return TreeModifications; });
/* harmony import */ var _action_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action.enum */ "./src/app/modules/purchase-contract/utils/tree/action.enum.ts");
/* harmony import */ var _tree_node_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree-node-utils */ "./src/app/modules/purchase-contract/utils/tree/tree-node-utils.ts");
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


/**
 * Tree that keep track of modifications done
 */
var TreeModifications = /** @class */ (function () {
    function TreeModifications(idGetter, parentIdSetter, addExpanded) {
        if (addExpanded === void 0) { addExpanded = true; }
        this.idGetter = idGetter;
        this.parentIdSetter = parentIdSetter;
        this._tree = [];
        this.deletedNodes = [];
        this.addExpanded = addExpanded;
    }
    Object.defineProperty(TreeModifications.prototype, "tree", {
        get: function () {
            return this._tree;
        },
        set: function (tree) {
            this._tree = tree;
            this.deletedNodes = [];
        },
        enumerable: true,
        configurable: true
    });
    TreeModifications.prototype.refresh = function () {
        // Top level array copy for tree table refresh
        this._tree = __spread(this._tree);
    };
    TreeModifications.prototype.addChildNode = function (childData, parentNode) {
        if (childData) {
            var childNode = { data: childData, action: _action_enum__WEBPACK_IMPORTED_MODULE_0__["ActionEnum"].Add, expanded: this.addExpanded };
            if (parentNode) {
                // Affecting parent key
                this.parentIdSetter(childData, this.idGetter(parentNode.data));
                if (!parentNode.children) {
                    parentNode.children = [];
                }
                parentNode.children.push(childNode);
            }
            else {
                // Adding parent less node
                this._tree.push(childNode);
            }
            this.refresh();
        }
    };
    TreeModifications.prototype.markAsUpdated = function (node) {
        this.updateNode(node.data, node);
    };
    TreeModifications.prototype.updateNode = function (data, node) {
        if (node) {
            node.data = data;
            // Keeps existing action or set as update
            node.action = node.action || _action_enum__WEBPACK_IMPORTED_MODULE_0__["ActionEnum"].Update;
        }
    };
    TreeModifications.prototype.deleteNode = function (node) {
        if (node) {
            // Selecting the node list from which the node should be deleted
            var nodeList = this._tree;
            if (node.parent && node.parent.children) {
                nodeList = node.parent.children;
            }
            var nodeIndex = nodeList.indexOf(node);
            if (nodeIndex !== -1) {
                // Removing node from tree
                nodeList.splice(nodeIndex, 1);
                //  Refreshing the tree
                this.refresh();
                // Adding non added deleted node to modifications history
                if (node.action !== _action_enum__WEBPACK_IMPORTED_MODULE_0__["ActionEnum"].Add) {
                    node.action = _action_enum__WEBPACK_IMPORTED_MODULE_0__["ActionEnum"].Delete;
                    this.deletedNodes.push(node);
                }
            }
        }
    };
    TreeModifications.prototype.getTreeModifications = function () {
        var treeModificationsDTO = {
            addedNodesList: [],
            updatedDataList: [],
            deletedDataList: this.deletedNodes.map(function (node) { return node.data; })
        };
        this.getAddOrUpdateModifications(this._tree, treeModificationsDTO);
        return treeModificationsDTO;
    };
    /**
     * Returns tree modifications applying map function on data
     * @param mapFunction Function to map data into expected result
     */
    TreeModifications.prototype.mapTreeModifications = function (mapFunction) {
        var treeModifications = this.getTreeModifications();
        var mapTreeModifications = {
            addedNodesList: _tree_node_utils__WEBPACK_IMPORTED_MODULE_1__["TreeNodeUtils"].mapTreeNode(treeModifications.addedNodesList, mapFunction),
            updatedDataList: treeModifications.updatedDataList.map(mapFunction),
            deletedDataList: treeModifications.deletedDataList.map(mapFunction)
        };
        return mapTreeModifications;
    };
    TreeModifications.prototype.getAddOrUpdateModifications = function (nodes, treeModificationsDTO) {
        var _this = this;
        if (nodes) {
            nodes.forEach(function (node) {
                switch (node.action) {
                    case _action_enum__WEBPACK_IMPORTED_MODULE_0__["ActionEnum"].Add:
                        treeModificationsDTO.addedNodesList.push(node);
                        // No recursive call: only added nodes should be present under an added node
                        break;
                    case _action_enum__WEBPACK_IMPORTED_MODULE_0__["ActionEnum"].Update:
                        treeModificationsDTO.updatedDataList.push(node.data);
                        _this.getAddOrUpdateModifications(node.children, treeModificationsDTO);
                        break;
                    default:
                        _this.getAddOrUpdateModifications(node.children, treeModificationsDTO);
                        break;
                }
            });
        }
    };
    return TreeModifications;
}());



/***/ }),

/***/ "./src/app/modules/purchase-contract/utils/tree/tree-node-utils.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/purchase-contract/utils/tree/tree-node-utils.ts ***!
  \*************************************************************************/
/*! exports provided: TreeNodeUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeUtils", function() { return TreeNodeUtils; });
var TreeNodeUtils = /** @class */ (function () {
    function TreeNodeUtils() {
    }
    /**
     * @param <T> Type of parameter tree nodes
     * @param <ID> Type of result tree nodes
     */
    TreeNodeUtils.mapTreeNode = function (treeNode, mapFunction) {
        return treeNode
            ? treeNode.map(function (node) { return ({
                data: mapFunction(node.data),
                children: TreeNodeUtils.mapTreeNode(node.children, mapFunction)
            }); })
            : [];
    };
    /**
     * @param <T> Type of parameter tree nodes
     * @param <ID> Type of result tree nodes
     */
    TreeNodeUtils.setExpanded = function (treeNode, expanded, recursively) {
        if (expanded === void 0) { expanded = true; }
        if (recursively === void 0) { recursively = true; }
        if (treeNode) {
            treeNode.forEach(function (node) {
                node.expanded = expanded;
                if (recursively) {
                    TreeNodeUtils.setExpanded(node.children, expanded, recursively);
                }
            });
        }
    };
    return TreeNodeUtils;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-status/dialog-status.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/dialog-status/dialog-status.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".statusState\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          [options]=\"statusList\"\r\n          [(ngModel)]=\"item.statusState\"\r\n          [showClear]=\"true\"\r\n          placeholder=\"&nbsp;\"\r\n          [disabled]=\"!isStatusEditable\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".statusDate\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-calendar\r\n          showButtonBar=\"true\"\r\n          [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\"\r\n          [yearRange]=\"sessionService.calendarYearRange\"\r\n          class=\"aw-calendar\"\r\n          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n          [locale]=\"sessionService.calendarFormat\"\r\n          [(ngModel)]=\"item.statusDate\"\r\n          [disabled]=\"true\"\r\n          [showTime]=\"true\"\r\n          appendTo=\"body\"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".statusUser\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"item.statusUser\" [disabled]=\"true\" />\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">{{ \"global.close\" | translate }}</button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-status/dialog-status.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/dialog-status/dialog-status.component.ts ***!
  \****************************************************************************/
/*! exports provided: DialogStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogStatusComponent", function() { return DialogStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/session.service */ "./src/app/shared/services/session.service.ts");
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






var DialogStatusComponent = /** @class */ (function (_super) {
    __extends(DialogStatusComponent, _super);
    function DialogStatusComponent(sessionService, propertiesService, messageService) {
        var _this = _super.call(this, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'DialogStatusComponent') || this;
        _this.sessionService = sessionService;
        _this.propertiesService = propertiesService;
        _this.messageService = messageService;
        return _this;
    }
    DialogStatusComponent.prototype.ngOnInit = function () {
        this.loadStatusList();
    };
    DialogStatusComponent.prototype.close = function () {
        this.display = false;
    };
    DialogStatusComponent.prototype.loadStatusList = function () {
        var _this = this;
        var statusState = 'statusState';
        this.propertiesService
            .getObjectStatusList(this.isObjectTypeOfBireSbDTO, this.isObjectTypeOfBireEvolutionDTO, this.isObjectTypeOfBireMaintenancePlanDTO, this.item[statusState], this.isSapSession)
            .subscribe(function (result) {
            _this.statusList = result;
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadStatusList'));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogStatusComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogStatusComponent.prototype, "itemId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isStatusEditable'),
        __metadata("design:type", Boolean)
    ], DialogStatusComponent.prototype, "isStatusEditable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isObjectTypeOfBireSbDTO'),
        __metadata("design:type", Boolean)
    ], DialogStatusComponent.prototype, "isObjectTypeOfBireSbDTO", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isObjectTypeOfBireEvolutionDTO'),
        __metadata("design:type", Boolean)
    ], DialogStatusComponent.prototype, "isObjectTypeOfBireEvolutionDTO", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isObjectTypeOfBireMaintenancePlanDTO'),
        __metadata("design:type", Boolean)
    ], DialogStatusComponent.prototype, "isObjectTypeOfBireMaintenancePlanDTO", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isSapSession'),
        __metadata("design:type", Boolean)
    ], DialogStatusComponent.prototype, "isSapSession", void 0);
    DialogStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-status',
            template: __webpack_require__(/*! ./dialog-status.component.html */ "./src/app/shared/components/dialog-status/dialog-status.component.html")
        }),
        __metadata("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _services_properties_service__WEBPACK_IMPORTED_MODULE_4__["PropertiesService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], DialogStatusComponent);
    return DialogStatusComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/components/dialog-status/dialog-status.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/dialog-status/dialog-status.module.ts ***!
  \*************************************************************************/
/*! exports provided: DialogStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogStatusModule", function() { return DialogStatusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dialog_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-status.component */ "./src/app/shared/components/dialog-status/dialog-status.component.ts");
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
var EXTERNAL_MODULES = [primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__["DropdownModule"]];
var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_dialog_status_component__WEBPACK_IMPORTED_MODULE_7__["DialogStatusComponent"]];
var DialogStatusModule = /** @class */ (function () {
    function DialogStatusModule() {
    }
    DialogStatusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS),
            exports: __spread(COMPONENTS),
            imports: __spread([
                _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__["AngularCommonSharedModule"],
                _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__["AngularGenericTemplatesSharedModule"],
                _app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonSharedModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES)
        })
    ], DialogStatusModule);
    return DialogStatusModule;
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
//# sourceMappingURL=modules-purchase-contract-components-purchase-contract-purchase-contract-module.js.map