(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-litigation-file-litigation-file-module"],{

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

/***/ "./src/app/main/logistics/litigation-file/form/dialog-action-plan/dialog-action-plan.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/form/dialog-action-plan/dialog-action-plan.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".selectActionPlan\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"row\">\r\n      <div class=\"form-group required\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".actionPlan\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <p-dropdown\r\n            class=\"aw-dropdown fixed-width\"\r\n            [options]=\"actionPlanList\"\r\n            [(ngModel)]=\"selectedAction\"\r\n            [showClear]=\"true\"\r\n            placeholder=\"&nbsp;\"\r\n            appendTo=\"body\"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"validate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/litigation-file/form/dialog-action-plan/dialog-action-plan.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/form/dialog-action-plan/dialog-action-plan.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DialogActionPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogActionPlanComponent", function() { return DialogActionPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
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




var DialogActionPlanComponent = /** @class */ (function (_super) {
    __extends(DialogActionPlanComponent, _super);
    function DialogActionPlanComponent(sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'DialogActionPlanComponent') || this;
        _this.sessionService = sessionService;
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogActionPlanComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
    };
    DialogActionPlanComponent.prototype.validate = function () {
        if (this.selectedAction) {
            this.onValidated.emit(this.selectedAction);
            this.closeDialog();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogActionPlanComponent.prototype, "actionPlanList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogActionPlanComponent.prototype, "onValidated", void 0);
    DialogActionPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-action-plan',
            template: __webpack_require__(/*! ./dialog-action-plan.component.html */ "./src/app/main/logistics/litigation-file/form/dialog-action-plan/dialog-action-plan.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DialogActionPlanComponent);
    return DialogActionPlanComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/litigation-file/form/dialog-establish-action-plan/dialog-establish-action-plan.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/form/dialog-establish-action-plan/dialog-establish-action-plan.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".establishActionPlan\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"row\">\r\n      <div class=\"form-group required\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".actionPlan\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <p-dropdown\r\n            class=\"aw-dropdown fixed-width\"\r\n            [options]=\"actionPlanList\"\r\n            [(ngModel)]=\"document.actionPlanName\"\r\n            [showClear]=\"true\"\r\n            placeholder=\"&nbsp;\"\r\n            appendTo=\"body\"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group required\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".comment\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <textarea class=\"aw-textarea\" pInputTextarea [rows]=\"3\" [(ngModel)]=\"document.comment\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"validate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/litigation-file/form/dialog-establish-action-plan/dialog-establish-action-plan.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/form/dialog-establish-action-plan/dialog-establish-action-plan.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: DialogEstablishActionPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogEstablishActionPlanComponent", function() { return DialogEstablishActionPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
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




var DialogEstablishActionPlanComponent = /** @class */ (function (_super) {
    __extends(DialogEstablishActionPlanComponent, _super);
    function DialogEstablishActionPlanComponent(sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'DialogEstablishActionPlanComponent') || this;
        _this.sessionService = sessionService;
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogEstablishActionPlanComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
        if (!this.document) {
            this.document = {};
        }
        this.document.comment = 'LITIGE PRIS EN CHARGE';
    };
    DialogEstablishActionPlanComponent.prototype.validate = function () {
        if (this.document.comment && this.document.actionPlanName) {
            this.onValidated.emit(this.document);
            this.closeDialog();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogEstablishActionPlanComponent.prototype, "document", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogEstablishActionPlanComponent.prototype, "actionPlanList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogEstablishActionPlanComponent.prototype, "onValidated", void 0);
    DialogEstablishActionPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-establish-action-plan',
            template: __webpack_require__(/*! ./dialog-establish-action-plan.component.html */ "./src/app/main/logistics/litigation-file/form/dialog-establish-action-plan/dialog-establish-action-plan.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DialogEstablishActionPlanComponent);
    return DialogEstablishActionPlanComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/litigation-file/form/dialog-transfer-validation/dialog-transfer-validation.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/form/dialog-transfer-validation/dialog-transfer-validation.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".transferValidation\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group required\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".comment\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <textarea\r\n          class=\"aw-textarea\"\r\n          pInputTextarea\r\n          [rows]=\"3\"\r\n          [(ngModel)]=\"document.comment\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" color=\"primary\" type=\"button\" mat-raised-button (click)=\"validate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/litigation-file/form/dialog-transfer-validation/dialog-transfer-validation.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/form/dialog-transfer-validation/dialog-transfer-validation.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: DialogTransferValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogTransferValidationComponent", function() { return DialogTransferValidationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
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




var DialogTransferValidationComponent = /** @class */ (function (_super) {
    __extends(DialogTransferValidationComponent, _super);
    function DialogTransferValidationComponent(sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'DialogTransferValidationComponent') || this;
        _this.sessionService = sessionService;
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogTransferValidationComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
        if (!this.document) {
            this.document = {};
        }
        this.document.comment = 'MATERIAL 1276712-11 PLACE EN ZONE DE QUARANTAINE';
    };
    DialogTransferValidationComponent.prototype.validate = function () {
        if (this.document.comment) {
            this.onValidated.emit(this.document);
            this.closeDialog();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogTransferValidationComponent.prototype, "document", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogTransferValidationComponent.prototype, "onValidated", void 0);
    DialogTransferValidationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-transfer-validation',
            template: __webpack_require__(/*! ./dialog-transfer-validation.component.html */ "./src/app/main/logistics/litigation-file/form/dialog-transfer-validation/dialog-transfer-validation.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DialogTransferValidationComponent);
    return DialogTransferValidationComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/litigation-file/form/dialog-validate-action/dialog-validate-action.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/form/dialog-validate-action/dialog-validate-action.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".validateAction\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"row\">\r\n      <div class=\"form-group required\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".comment\" | translate }}</label>\r\n        <div class=\"form-control\">\r\n          <textarea class=\"aw-textarea\" pInputTextarea [rows]=\"3\" [(ngModel)]=\"document.comment\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group required\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".contributor\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <p-dropdown\r\n            class=\"aw-dropdown fixed-width\"\r\n            [options]=\"contributorList\"\r\n            [(ngModel)]=\"document.contributor\"\r\n            [showClear]=\"true\"\r\n            placeholder=\"&nbsp;\"\r\n            appendTo=\"body\"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group required\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".date\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <p-calendar\r\n            showButtonBar=\"true\"\r\n            [monthNavigator]=\"true\"\r\n            [yearNavigator]=\"true\"\r\n            [yearRange]=\"sessionService.calendarYearRange\"\r\n            class=\"aw-calendar\"\r\n            [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n            [locale]=\"sessionService.calendarFormat\"\r\n            [(ngModel)]=\"document.actionValidationDate\"\r\n            appendTo=\"body\"\r\n          ></p-calendar>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"grid-cell--12\">\r\n        <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n          <div class=\"section\">\r\n            <h4 class=\"section-title\">\r\n              {{ getComponentName() + \".objectAssociates\" | translate }}\r\n            </h4>\r\n            <div class=\"section-content\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group required\">\r\n                  <label class=\"form-label\">\r\n                    {{ getComponentName() + \".category\" | translate }}\r\n                  </label>\r\n                  <div class=\"form-control\">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      [options]=\"categoryList\"\r\n                      [showClear]=\"true\"\r\n                      placeholder=\"&nbsp;\"\r\n                      [(ngModel)]=\"document.category\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group required\">\r\n                  <label class=\"form-label\">\r\n                    {{ getComponentName() + \".type\" | translate }}\r\n                  </label>\r\n                  <div class=\"form-control\">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      [options]=\"objectTypeList\"\r\n                      [showClear]=\"true\"\r\n                      placeholder=\"&nbsp;\"\r\n                      [(ngModel)]=\"document.type\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group required\">\r\n                  <label class=\"form-label\">\r\n                    {{ getComponentName() + \".expectedDeliveryDate\" | translate }}\r\n                  </label>\r\n                  <div class=\"form-control\">\r\n                    <p-calendar\r\n                      showButtonBar=\"true\"\r\n                      [monthNavigator]=\"true\"\r\n                      [yearNavigator]=\"true\"\r\n                      [yearRange]=\"sessionService.calendarYearRange\"\r\n                      class=\"aw-calendar\"\r\n                      [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                      [locale]=\"sessionService.calendarFormat\"\r\n                      [readonlyInput]=\"true\"\r\n                      [(ngModel)]=\"document.expectedDeliveryDate\"\r\n                      appendTo=\"body\"\r\n                    >\r\n                    </p-calendar>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"form-group required\">\r\n                  <label class=\"form-label\">\r\n                    {{ getComponentName() + \".recipient\" | translate }}\r\n                  </label>\r\n                  <div class=\"form-control\">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      [options]=\"recipientList\"\r\n                      [showClear]=\"true\"\r\n                      placeholder=\"&nbsp;\"\r\n                      [(ngModel)]=\"document.recipient\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">\r\n                    {{ getComponentName() + \".carrier\" | translate }}\r\n                  </label>\r\n                  <div class=\"form-control\">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      [options]=\"carrierList\"\r\n                      [showClear]=\"true\"\r\n                      placeholder=\"&nbsp;\"\r\n                      [(ngModel)]=\"document.carrier\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"close()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"validate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/litigation-file/form/dialog-validate-action/dialog-validate-action.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/form/dialog-validate-action/dialog-validate-action.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: DialogValidateActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogValidateActionComponent", function() { return DialogValidateActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
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




var DialogValidateActionComponent = /** @class */ (function (_super) {
    __extends(DialogValidateActionComponent, _super);
    function DialogValidateActionComponent(sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'DialogValidateActionComponent') || this;
        _this.sessionService = sessionService;
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogValidateActionComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
        if (!this.document) {
            this.document = {};
        }
        this.document.comment = 'TRANSFERT DU MATERIAL AU NTI2 REALISE';
    };
    DialogValidateActionComponent.prototype.validate = function () {
        this.onValidated.emit(this.document);
        this.closeDialog();
    };
    DialogValidateActionComponent.prototype.close = function () {
        this.document.action = !this.document.action;
        this.closeDialog();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogValidateActionComponent.prototype, "document", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogValidateActionComponent.prototype, "contributorList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogValidateActionComponent.prototype, "categoryList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogValidateActionComponent.prototype, "objectTypeList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogValidateActionComponent.prototype, "recipientList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogValidateActionComponent.prototype, "carrierList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogValidateActionComponent.prototype, "onValidated", void 0);
    DialogValidateActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-validate-action',
            template: __webpack_require__(/*! ./dialog-validate-action.component.html */ "./src/app/main/logistics/litigation-file/form/dialog-validate-action/dialog-validate-action.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DialogValidateActionComponent);
    return DialogValidateActionComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/litigation-file/form/litigation-file-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/form/litigation-file-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aw-component-sidebar\r\n  *ngIf=\"!isCreateOpenMode\"\r\n  [toc]=\"toc\"\r\n  [(visibility)]=\"rightSidebarVisibility\"\r\n  [ngClass]=\"{ collapsed: rightSidebarCollapsed, expanded: rightSidebarExpanded }\"\r\n></aw-component-sidebar>\r\n\r\n<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + getComponentName() | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          *ngIf=\"!isCreateOpenMode && componentData && componentData.objectId\"\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div *ngIf=\"!isCreateOpenMode && componentData && componentData.objectId\" class=\"page-subtitle\">\r\n        {{ pageSubtitle }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button\r\n      *ngIf=\"isReadOpenMode && !isCreateOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"reloadLitigationFile()\"\r\n    >\r\n      {{ \"global.refresh\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"isReadOpenMode && hasUpdateAccessRight\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"editLitigationFile()\"\r\n    >\r\n      {{ \"global.edit\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode && !isCreateOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"cancelLitigationFile()\"\r\n    >\r\n      {{ \"global.cancel\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      class=\"btn-with-spinner\"\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"saveLitigationFile()\"\r\n    >\r\n      <span class=\"lds-hourglass\" *ngIf=\"showSaveSpinner\"></span>\r\n      {{ \"global.save\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div #mainInformationAnchor class=\"grid-cell--7\" (click)=\"selectPageTocEntry(component.MAIN_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: !isCreateOpenMode && isPageTocEntrySelected(component.MAIN_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"page.mainData\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ getComponentName() + \".litigationNumber\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"mainData.litigationFile\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ getComponentName() + \".origin\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"mainData.origin\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".status\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"mainData.status\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".foundBy\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"mainData.createdBy\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".foundOn\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-calendar\r\n                        showButtonBar=\"true\"\r\n                        [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\"\r\n                        [yearRange]=\"sessionService.calendarYearRange\"\r\n                        class=\"aw-calendar\"\r\n                        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                        [locale]=\"sessionService.calendarFormat\"\r\n                        [readonlyInput]=\"true\"\r\n                        [(ngModel)]=\"mainData.foundOn\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                      >\r\n                      </p-calendar>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label *ngIf=\"!isCreateOpenMode\" class=\"form-label\">{{\r\n                      getComponentName() + \".blocking\" | translate\r\n                    }}</label>\r\n\r\n                    <div *ngIf=\"!isCreateOpenMode\" class=\"form-control\">\r\n                      <p-checkbox\r\n                        binary=\"true\"\r\n                        class=\"aw-checkbox\"\r\n                        [(ngModel)]=\"mainData.isBlocking\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                      ></p-checkbox>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div #defaultAnchor class=\"grid-cell--5\" (click)=\"selectPageTocEntry(component.DEFAULT_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: !isCreateOpenMode && isPageTocEntrySelected(component.DEFAULT_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ getComponentName() + \".default\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <p-table\r\n                  [resizableColumns]=\"true\"\r\n                  #pTableContributor\r\n                  class=\"aw-table2\"\r\n                  [columns]=\"defaultTableCols\"\r\n                  [value]=\"defaultTableList\"\r\n                  [scrollable]=\"true\"\r\n                  [paginator]=\"true\"\r\n                  [rows]=\"TABLE_PAGINATION_DEFAULT_ROWS\"\r\n                >\r\n                  <ng-template pTemplate=\"caption\">\r\n                    <div class=\"aw-table-header\">\r\n                      <div class=\"aw-table-global-filter\">\r\n                        <label class=\"aw-table-global-filter-label\">\r\n                          <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableContributorGlobalFilter\r\n                          type=\"text\"\r\n                          class=\"aw-table-global-filter-input\"\r\n                          placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                          (input)=\"pTableContributor.filterGlobal($event.target.value, 'contains')\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"aw-table-actions\"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"colgroup\" let-columns>\r\n                    <colgroup>\r\n                      <col class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\" />\r\n                      <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"header\" let-columns>\r\n                    <tr>\r\n                      <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                        {{ getComponentName() + \".\" + col.field | translate }}\r\n                      </th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                    <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                      <td\r\n                        *ngFor=\"let col of columns\"\r\n                        [ngSwitch]=\"col.field\"\r\n                        [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                      >\r\n                        <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div\r\n          #litigationElementsAnchor\r\n          class=\"grid-cell--12\"\r\n          (click)=\"selectPageTocEntry(component.LITIGATION_ELEMENTS_ANCHOR_ID)\"\r\n        >\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: isPageTocEntrySelected(component.LITIGATION_ELEMENTS_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".element\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <div class=\"section\">\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".pn\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <a>{{ litigationElementInput.pn }}</a>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".designation\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\">\r\n                        {{ litigationElementInput.designation }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".batchNumber\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <a>{{ litigationElementInput.sn }}</a>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".typeOfLitigationElements\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\">\r\n                        {{ litigationElementInput.elementType }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".status\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\">\r\n                        {{ litigationElementInput.status }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title section-without-margin\">\r\n                  {{ getComponentName() + \".location\" | translate }}\r\n                  <br />\r\n                </h4>\r\n\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ getComponentName() + \".owner\" | translate }}\r\n                      </label>\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          {{ litigationElementInput.owner }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ getComponentName() + \".site\" | translate }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          {{ litigationElementInput.siteCode }} -\r\n                          {{ litigationElementInput.siteName }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ getComponentName() + \".warehouse\" | translate }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          {{ litigationElementInput.whName }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ getComponentName() + \".zone\" | translate }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          {{ litigationElementInput.zone }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ getComponentName() + \".employee\" | translate }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          {{ litigationElementInput.employee }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div #originAnchor class=\"grid-cell--7\" (click)=\"selectPageTocEntry(component.ORIGIN_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: !isCreateOpenMode && isPageTocEntrySelected(component.ORIGIN_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ getComponentName() + \".origin\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"grid-row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ getComponentName() + \".folderName\" | translate }} </label>\r\n                    <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n                      <div class=\"form-control-data\" (click)=\"!isReadOpenMode && searchFolderName()\">\r\n                        {{ mainData.folderName }}\r\n                      </div>\r\n                      <div class=\"btn-search-wrapper\">\r\n                        <i\r\n                          *ngIf=\"!isReadOpenMode\"\r\n                          class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"searchFolderName()\"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ getComponentName() + \".folderNumber\" | translate }} </label>\r\n\r\n                    <div class=\"form-control form-control-padding\">\r\n                      <a>{{ mainData.folderNumber }}</a>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".status\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"mainData.status\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".supplier\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"mainData.supplier\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".carrier\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"mainData.carrier\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".criticity\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\" *ngIf=\"mainData.criticity === 'Immediate'\" class=\"nok\">\r\n                      <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"mainData.criticity\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div #contributorAnchor class=\"grid-cell--5\" (click)=\"selectPageTocEntry(component.CONTRIBUTOR_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: !isCreateOpenMode && isPageTocEntrySelected(component.CONTRIBUTOR_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ getComponentName() + \".contributors\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <p-table\r\n                  [resizableColumns]=\"true\"\r\n                  #pTableContributor\r\n                  class=\"aw-table2\"\r\n                  [columns]=\"contributorTableCols\"\r\n                  [value]=\"contributorTable\"\r\n                  [scrollable]=\"true\"\r\n                  [(selection)]=\"selectedContributors\"\r\n                >\r\n                  <ng-template pTemplate=\"emptymessage\">\r\n                    <span *ngIf=\"!isContributorTableLoading\">&nbsp;</span>\r\n\r\n                    <div *ngIf=\"isContributorTableLoading\" class=\"aw-table-loading-indicator\">\r\n                      <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                      <div class=\"lds-hourglass\"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"caption\">\r\n                    <div class=\"aw-table-header\">\r\n                      <div class=\"aw-table-global-filter\">\r\n                        <label class=\"aw-table-global-filter-label\">\r\n                          <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableContributorGlobalFilter\r\n                          type=\"text\"\r\n                          class=\"aw-table-global-filter-input\"\r\n                          placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                          (input)=\"pTableContributor.filterGlobal($event.target.value, 'contains')\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"aw-table-actions\">\r\n                        <button\r\n                          *ngIf=\"!isReadOpenMode && selectedContributors.length === 1\"\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                          color=\"warn\"\r\n                        >\r\n                          {{ \"global.delete\" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf=\"!isReadOpenMode && selectedContributors.length === 1\"\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                        >\r\n                          {{ \"global.edit\" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf=\"!isReadOpenMode && selectedContributors.length === 1\"\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                        >\r\n                          {{ \"global.open\" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          *ngIf=\"!isReadOpenMode && selectedContributors.length === 0\"\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                        >\r\n                          {{ \"global.add\" | translate }}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"colgroup\" let-columns>\r\n                    <colgroup>\r\n                      <col class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\" />\r\n                      <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"header\" let-columns>\r\n                    <tr>\r\n                      <th class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\">\r\n                        <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                      </th>\r\n                      <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                        {{ getComponentName() + \".\" + col.field | translate }}\r\n                      </th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                    <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                      <td class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\">\r\n                        <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                      </td>\r\n                      <td\r\n                        *ngFor=\"let col of columns\"\r\n                        [ngSwitch]=\"col.field\"\r\n                        [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                      >\r\n                        <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div #actionAnchor class=\"grid-cell--12\" (click)=\"selectPageTocEntry(component.ACTION_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: isPageTocEntrySelected(component.ACTION_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".actions\" | translate }} ({{ actionTable ? actionTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <div class=\"section\">\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".actionPlan\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"actionCounterData.actionPlan\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".plannedActions\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"actionCounterData.plannedActions\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".noOfReleasedActions\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input\"\r\n                          disabled\r\n                          [(ngModel)]=\"actionCounterData.noOfReleasedActions\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".durationInProgress\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input\"\r\n                          disabled\r\n                          [(ngModel)]=\"actionCounterData.durationInProgress\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".progress\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"col-width-20 form-control-padding\">\r\n                          <p-progressBar\r\n                            [ngClass]=\"{ yellow: actionCounterData['progress'] && actionCounterData['progress'] > 0 }\"\r\n                            [value]=\"actionCounterData['progress']\"\r\n                          ></p-progressBar>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <p-table\r\n                      [resizableColumns]=\"true\"\r\n                      #pTableActions\r\n                      class=\"aw-table2\"\r\n                      [columns]=\"actionTableCols\"\r\n                      [value]=\"actionTable\"\r\n                      [scrollable]=\"true\"\r\n                      [(selection)]=\"selectedActions\"\r\n                      [paginator]=\"true\"\r\n                      [rows]=\"TABLE_PAGINATION_DEFAULT_ROWS\"\r\n                    >\r\n                      <ng-template pTemplate=\"emptymessage\">\r\n                        <span *ngIf=\"!isActionTableLoading\">&nbsp;</span>\r\n\r\n                        <div *ngIf=\"isActionTableLoading\" class=\"aw-table-loading-indicator\">\r\n                          <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                          <div class=\"lds-hourglass\"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"caption\">\r\n                        <div class=\"aw-table-header\">\r\n                          <div class=\"aw-table-global-filter\">\r\n                            <label class=\"aw-table-global-filter-label\">\r\n                              <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #pTableActionsGlobalFilter\r\n                              type=\"text\"\r\n                              class=\"aw-table-global-filter-input\"\r\n                              placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                              (input)=\"pTableActions.filterGlobal($event.target.value, 'contains')\"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class=\"aw-table-actions\">\r\n                            <button\r\n                              *ngIf=\"!isReadOpenMode && selectedActions.length === 1\"\r\n                              type=\"button\"\r\n                              mat-raised-button\r\n                              color=\"warn\"\r\n                              (click)=\"onActionDelete()\"\r\n                            >\r\n                              {{ \"global.delete\" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf=\"!isReadOpenMode && selectedActions.length === 1\"\r\n                              type=\"button\"\r\n                              mat-raised-button\r\n                              (click)=\"onEditComment()\"\r\n                            >\r\n                              {{ getComponentName() + \".editComment\" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf=\"!isReadOpenMode && selectedActions.length === 1\"\r\n                              type=\"button\"\r\n                              mat-raised-button\r\n                              (click)=\"onActionValidation()\"\r\n                            >\r\n                              {{ getComponentName() + \".validateAction\" | translate }}\r\n                            </button>\r\n\r\n                            <button\r\n                              *ngIf=\"!isReadOpenMode && selectedActions.length === 0\"\r\n                              type=\"button\"\r\n                              mat-raised-button\r\n                              (click)=\"onAddActionPlan()\"\r\n                            >\r\n                              {{ getComponentName() + \".addAction\" | translate }}\r\n                            </button>\r\n                            <button\r\n                              *ngIf=\"!isReadOpenMode && !actionCounterData.actionPlan && selectedActions.length === 0\"\r\n                              type=\"button\"\r\n                              mat-raised-button\r\n                              (click)=\"onSelectActionPlan()\"\r\n                            >\r\n                              {{ getComponentName() + \".selectActionPlan\" | translate }}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"colgroup\" let-columns>\r\n                        <colgroup>\r\n                          <col class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\" />\r\n                          <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"header\" let-columns>\r\n                        <tr>\r\n                          <th class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\">\r\n                            <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                          </th>\r\n                          <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                            {{ getComponentName() + \".\" + col.field | translate }}\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                        <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                          <td class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\">\r\n                            <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                          </td>\r\n                          <td\r\n                            *ngFor=\"let col of columns\"\r\n                            [ngSwitch]=\"col.field\"\r\n                            [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                          >\r\n                            <span *ngSwitchCase=\"'action'\">\r\n                              <p-inputSwitch\r\n                                [(ngModel)]=\"rowData[col.field]\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                (click)=\"onChangeAction(rowData)\"\r\n                              ></p-inputSwitch>\r\n                            </span>\r\n                            <span *ngSwitchCase=\"'contributor'\">\r\n                              <div class=\"row\">\r\n                                <div class=\"font-bold\">{{ rowData[col.field] }}</div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"font-italic\" *ngIf=\"rowData['role']\">{{ rowData[\"role\"] }}</div>\r\n                              </div>\r\n                            </span>\r\n                            <span *ngSwitchCase=\"'status'\">\r\n                              <div class=\"row\">\r\n                                <div class=\"font-bold\">{{ rowData[col.field] }}</div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div *ngIf=\"rowData['since']\">\r\n                                  {{ getComponentName() + \".since\" | translate }}\r\n                                  <span class=\"font-bold\">{{ rowData[\"since\"] }}</span>\r\n                                </div>\r\n                              </div>\r\n                            </span>\r\n                            <span *ngSwitchCase=\"'objectAssociates'\">\r\n                              <div class=\"row\">\r\n                                <div class=\"font-bold\" *ngIf=\"rowData[col.field]\">\r\n                                  <a>{{ rowData[col.field] }}</a>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"font-italic\" *ngIf=\"rowData['stockType']\">{{ rowData[\"stockType\"] }}</div>\r\n                              </div>\r\n                            </span>\r\n                            <span *ngSwitchDefault class=\"font-bold\">{{ rowData[col.field] }}</span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div #documentAnchor class=\"grid-cell--12\" (click)=\"selectPageTocEntry(component.DOCUMENTS_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: isPageTocEntrySelected(component.DOCUMENTS_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.documents\" | translate }}\r\n                  ({{ documentTable ? documentTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableDocument\r\n                class=\"aw-table2\"\r\n                [columns]=\"documentTableCols\"\r\n                [value]=\"documentTable\"\r\n                [(selection)]=\"selectedDocuments\"\r\n                dataKey=\"docName\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoadingDocumentTable\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoadingDocumentTable\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedDocuments.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableDocumentGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableDocument.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"selectedDocuments.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"downloadFiles()\"\r\n                      >\r\n                        {{ \"global.download\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && selectedDocuments.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteDocuments()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && selectedDocuments.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"editDocument()\"\r\n                      >\r\n                        {{ \"global.edit\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedDocuments.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openDocument()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n\r\n                      <p-fileUpload\r\n                        #fileUploader\r\n                        *ngIf=\"!isReadOpenMode && selectedDocuments.length === 0\"\r\n                        class=\"aw-fileupload aw-table-action\"\r\n                        chooseLabel=\"{{ 'global.upload' | translate }}\"\r\n                        name=\"document[]\"\r\n                        customUpload=\"true\"\r\n                        mode=\"basic\"\r\n                        auto=\"true\"\r\n                        (uploadHandler)=\"uploadDocument($event, fileUploader)\"\r\n                      ></p-fileUpload>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ getComponentName() + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ rowData[col.field] }}\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-action-plan\r\n  *ngIf=\"showActionNameDialog\"\r\n  [(display)]=\"showActionNameDialog\"\r\n  [actionPlanList]=\"actionPlanList\"\r\n  (onValidated)=\"setActionPlan($event)\"\r\n></aw-dialog-action-plan>\r\n<aw-dialog-establish-action-plan\r\n  *ngIf=\"showEstablishActionDialog\"\r\n  [(display)]=\"showEstablishActionDialog\"\r\n  [document]=\"establishActionData\"\r\n  [actionPlanList]=\"actionPlanList\"\r\n  (onValidated)=\"onEstablishActionPlan($event)\"\r\n></aw-dialog-establish-action-plan>\r\n<aw-dialog-transfer-validation\r\n  *ngIf=\"showTransferValidationDialog\"\r\n  [(display)]=\"showTransferValidationDialog\"\r\n  [document]=\"transferValidationData\"\r\n  (onValidated)=\"onTransferValidation($event)\"\r\n></aw-dialog-transfer-validation>\r\n<aw-dialog-validate-action\r\n  *ngIf=\"showValidateActionDialog\"\r\n  [(display)]=\"showValidateActionDialog\"\r\n  [document]=\"validateActionData\"\r\n  [contributorList]=\"contributorList\"\r\n  [categoryList]=\"categoryList\"\r\n  [objectTypeList]=\"objectTypeList\"\r\n  [recipientList]=\"recipientList\"\r\n  [carrierList]=\"carrierList\"\r\n  (onValidated)=\"onValidateAction($event)\"\r\n></aw-dialog-validate-action>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/litigation-file/form/litigation-file-form.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/form/litigation-file-form.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .ok {\n  background-color: #4caf50 !important;\n  padding: 0.2em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\n:host .warning {\n  background-color: #ffc107 !important;\n  padding: 0.2em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\n:host .nok {\n  background-color: #f6685e !important;\n  padding: 0.2em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\n:host .font-ok {\n  color: #4caf50 !important; }\n\n:host .font-warning {\n  color: #ffc107 !important; }\n\n:host .font-nok {\n  color: #f6685e !important; }\n\n:host .font-bold {\n  font-weight: bold; }\n\n:host .font-italic {\n  font-style: italic; }\n\n:host .col-width-20 {\n  width: 20% !important; }\n\n:host .form-control-padding {\n  padding: 8px 0; }\n\n:host ::ng-deep .ui-inputswitch.ui-inputswitch-checked .ui-inputswitch-slider {\n  background-color: #4caf50 !important; }\n\n:host ::ng-deep .red .ui-progressbar .ui-progressbar-value {\n  border: 0 none;\n  margin: 0;\n  background: #f6685e !important; }\n\n:host ::ng-deep .yellow .ui-progressbar .ui-progressbar-value {\n  border: 0 none;\n  margin: 0;\n  background: #ffc107 !important; }\n\n:host ::ng-deep .green .ui-progressbar .ui-progressbar-value {\n  border: 0 none;\n  margin: 0;\n  background: #4caf50 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbGl0aWdhdGlvbi1maWxlL2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxsaXRpZ2F0aW9uLWZpbGVcXGZvcm1cXGxpdGlnYXRpb24tZmlsZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUksb0NBQTBDO0VBQzFDLGNBQWM7RUFDZCwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQixFQUFBOztBQUp0QjtFQVFJLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0IsRUFBQTs7QUFWdEI7RUFjSSxvQ0FBd0M7RUFDeEMsY0FBYztFQUNkLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCLEVBQUE7O0FBaEJ0QjtFQW9CSSx5QkFBK0IsRUFBQTs7QUFwQm5DO0VBd0JJLHlCQUF5QixFQUFBOztBQXhCN0I7RUE0QkkseUJBQTZCLEVBQUE7O0FBNUJqQztFQWdDSSxpQkFBaUIsRUFBQTs7QUFoQ3JCO0VBb0NJLGtCQUFrQixFQUFBOztBQXBDdEI7RUF3Q0kscUJBQXFCLEVBQUE7O0FBeEN6QjtFQTRDSSxjQUFjLEVBQUE7O0FBNUNsQjtFQWtEUSxvQ0FBMEMsRUFBQTs7QUFsRGxEO0VBMERRLGNBQWM7RUFDZCxTQUFTO0VBQ1QsOEJBQWtDLEVBQUE7O0FBNUQxQztFQW9FUSxjQUFjO0VBQ2QsU0FBUztFQUNULDhCQUE4QixFQUFBOztBQXRFdEM7RUE4RVEsY0FBYztFQUNkLFNBQVM7RUFDVCw4QkFBb0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL2xpdGlnYXRpb24tZmlsZS9mb3JtL2xpdGlnYXRpb24tZmlsZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLm9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDEgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgLndhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMC4yZW07XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAubm9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwLjJlbTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICB9XHJcblxyXG4gIC5mb250LW9rIHtcclxuICAgIGNvbG9yOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9udC13YXJuaW5nIHtcclxuICAgIGNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9udC1ub2sge1xyXG4gICAgY29sb3I6ICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9udC1ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmZvbnQtaXRhbGljIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcblxyXG4gIC5jb2wtd2lkdGgtMjAge1xyXG4gICAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbC1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC51aS1pbnB1dHN3aXRjaCB7XHJcbiAgICAmLnVpLWlucHV0c3dpdGNoLWNoZWNrZWQge1xyXG4gICAgICAudWktaW5wdXRzd2l0Y2gtc2xpZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAucmVkIHtcclxuICAgIC51aS1wcm9ncmVzc2JhciB7XHJcbiAgICAgIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAueWVsbG93IHtcclxuICAgIC51aS1wcm9ncmVzc2JhciB7XHJcbiAgICAgIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5ncmVlbiB7XHJcbiAgICAudWktcHJvZ3Jlc3NiYXIge1xyXG4gICAgICAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgICAgIGJvcmRlcjogMCBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/logistics/litigation-file/form/litigation-file-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/form/litigation-file-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: LitigationFileFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitigationFileFormComponent", function() { return LitigationFileFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _litigation_file_form_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./litigation-file-form.service */ "./src/app/main/logistics/litigation-file/form/litigation-file-form.service.ts");
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



















var LitigationFileFormComponent = /** @class */ (function (_super) {
    __extends(LitigationFileFormComponent, _super);
    function LitigationFileFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, pageTocService, litigationFileFormService, dateService, confirmationService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.sessionService = sessionService;
        _this.litigationFileFormService = litigationFileFormService;
        _this.dateService = dateService;
        _this.confirmationService = confirmationService;
        _this.translateService = translateService;
        _this.TABLE_PAGINATION_DEFAULT_ROWS = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].TABLE_PAGINATION_DEFAULT_ROWS;
        _this.component = LitigationFileFormComponent_1;
        _this.awPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"];
        _this.registerPageTocEntryObservable();
        _this.init();
        _this.setTableCols();
        _this.loadDropDowns();
        return _this;
    }
    LitigationFileFormComponent_1 = LitigationFileFormComponent;
    LitigationFileFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].LOG_LITIGATION_FILE_FORM;
    };
    LitigationFileFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (!!this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            this.setTableOfContent();
            var pageContext = 'tab.createMode';
            if (!!this.componentData.objectId) {
                this.mainData = this.serializationService.deserialize(this.componentData.objectId);
                if (this.mainData.foundOn) {
                    this.mainData.foundOn = new Date(this.mainData.foundOn);
                }
                pageContext = this.mainData.litigationFile || '';
                this.pageSubtitle = pageContext;
                this.loadTableData();
            }
            this.displayComponentContext(pageContext, this.isCreateOpenMode);
        }
    };
    LitigationFileFormComponent.prototype.loadDropDowns = function () {
        this.loadActionPlanList();
        this.loadLitigationTypes();
        this.loadLitigationElementTypes();
        this.loadContributorList();
        this.loadRecipientList();
        this.loadObjectTypeList();
        this.loadCarrierList();
        this.loadCategoryList();
        this.loadContributorList();
    };
    LitigationFileFormComponent.prototype.loadTableData = function () {
        this.findContributors();
        this.findLitigationElementsValue();
        this.findActions();
        this.getDefaultListData();
    };
    LitigationFileFormComponent.prototype.init = function () {
        this.pageSubtitle = '';
        this.mainData = {};
        this.actionCounterData = {};
        this.contributorTableCols = [];
        this.actionTableCols = [];
        this.documentTableCols = [];
        this.contributorTable = [];
        this.actionTable = [];
        this.litigationElementInput = {};
        this.documentTable = [];
        this.selectedDocuments = [];
        this.isContributorTableLoading = false;
        this.isLoadingDocumentTable = false;
        this.litigationTypeList = [];
        this.litigationElementList = [];
        this.selectedDocuments = [];
        this.selectedActions = [];
        this.selectedContributors = [];
        this.contributorList = [];
        this.categoryList = [];
        this.objectTypeList = [];
        this.recipientList = [];
        this.carrierList = [];
        this.actionPlanList = [];
        this.defaultTableList = [];
    };
    LitigationFileFormComponent.prototype.editLitigationFile = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Write);
    };
    LitigationFileFormComponent.prototype.cancelLitigationFile = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read);
    };
    LitigationFileFormComponent.prototype.reloadLitigationFile = function () {
        return;
    };
    LitigationFileFormComponent.prototype.saveLitigationFile = function () {
        return;
    };
    LitigationFileFormComponent.prototype.getDefaultListData = function () {
        this.defaultTableList = this.litigationFileFormService.getDefaultListData();
    };
    LitigationFileFormComponent.prototype.setTableCols = function () {
        this.contributorTableCols = [
            { field: 'role', alignment: 'left' },
            { field: 'login', alignment: 'left' }
        ];
        this.actionTableCols = [
            { field: 'item', alignment: 'left', width: '5%' },
            { field: 'actionName', alignment: 'left' },
            { field: 'comment', alignment: 'left' },
            { field: 'action', alignment: 'left' },
            { field: 'contributor', alignment: 'left' },
            { field: 'status', alignment: 'left' }
        ];
        this.documentTableCols = [
            { field: 'docName', alignment: 'left' },
            { field: 'comments', alignment: 'left' },
            { field: 'type', alignment: 'left' },
            { field: 'docExtension', alignment: 'left' },
            { field: 'docSize', alignment: 'left' },
            { field: 'docAttachmentDate', alignment: 'left' }
        ];
        this.defaultTableCols = [
            { field: 'type', alignment: 'left' },
            { field: 'category', alignment: 'left' },
            { field: 'comments', alignment: 'left' }
        ];
    };
    LitigationFileFormComponent.prototype.downloadFiles = function () {
        this.selectedDocuments.forEach(function (documentRow) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_16__["FileUtils"].downloadFile(documentRow._obj.documentContent, documentRow._obj.documentName);
        });
    };
    LitigationFileFormComponent.prototype.createDocumentRow = function (document) {
        var selectedDocumentType = this.documentTypes.find(function (documentType) { return !!document.documentType && documentType.value === document.documentType; });
        var documentRow = {
            docAttachmentDate: !!document.documentPublicationDate
                ? this.dateService.dateToString(new Date(document.documentPublicationDate))
                : '',
            docExtension: this.formatDocExtension(document),
            docName: document.documentName,
            docSize: this.formatDocSize(document),
            docType: !!selectedDocumentType ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_17__["StringUtils"].orEmpty(selectedDocumentType.label) : '',
            id: document.id,
            _obj: document
        };
        return documentRow;
    };
    LitigationFileFormComponent.prototype.formatDocExtension = function (document) {
        return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_16__["FileUtils"].getExtension(document.documentName).toUpperCase();
    };
    LitigationFileFormComponent.prototype.formatDocSize = function (document) {
        return !!document.documentContent ? _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_16__["FileUtils"].getFormattedSize(document.documentContent.length) : '';
    };
    LitigationFileFormComponent.prototype.deleteDocuments = function () {
        var _this = this;
        var partialMessageKey = this.selectedDocuments.length > 1 ? 'confirmDeleteSelectedDocuments' : 'confirmDeleteSelectedDocument';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.selectedDocuments.forEach(function (selectedDocumentRow) {
                    var documentsAddedWithoutSelection = _this.documentsAdded.filter(function (document) { return !_this.areSameDocument(document, selectedDocumentRow._obj); });
                    if (_this.documentsAdded.length !== documentsAddedWithoutSelection.length) {
                        _this.documentsAdded = documentsAddedWithoutSelection;
                    }
                    else {
                        var documentsUpdatedWithoutSelection = _this.documentsUpdated.filter(function (document) { return !_this.areSameDocument(document, selectedDocumentRow._obj); });
                        if (_this.documentsUpdated.length !== documentsUpdatedWithoutSelection.length) {
                            _this.documentsUpdated = documentsUpdatedWithoutSelection;
                        }
                        _this.documentsRemoved = __spread(_this.documentsRemoved, [selectedDocumentRow._obj]);
                    }
                });
                _this.documentsRemoved.forEach(function (doc) {
                    if (!!doc.id) {
                        // todo this.documentDataRemoveList.push(doc.id);
                    }
                });
                _this.documents = _this.documents.filter(function (document) {
                    return !_this.selectedDocuments.some(function (selectedDocumentRow) {
                        return _this.areSameDocument(document, selectedDocumentRow._obj);
                    });
                });
                _this.documentTable = _this.documentTable.filter(function (documentRow) {
                    return !_this.selectedDocuments.some(function (selectedDocumentRow) {
                        return _this.areSameDocument(documentRow._obj, selectedDocumentRow._obj);
                    });
                });
                _this.selectedDocuments = [];
            }
        });
    };
    LitigationFileFormComponent.prototype.editDocument = function () {
        var _this = this;
        if (this.selectedDocuments.length === 1) {
            this.currentDocumentIndex = this.documents.findIndex(function (document) {
                return _this.areSameDocument(document, _this.selectedDocuments[0]._obj);
            });
            this.currentDocument = __assign({}, this.selectedDocuments[0]._obj);
            this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Write;
            this.showDocumentDialog = true;
        }
    };
    LitigationFileFormComponent.prototype.openDocument = function () {
        if (this.selectedDocuments.length === 1) {
            this.currentDocument = this.selectedDocuments[0]._obj;
            this.currentDocumentIndex = -1;
            this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read;
            this.showDocumentDialog = true;
        }
    };
    LitigationFileFormComponent.prototype.uploadDocument = function (event, fileUploader) {
        var _this = this;
        if (!!event.files) {
            var file_1 = event.files[0];
            var fileExists = this.documents.some(function (document) { return document.documentName === file_1.name; });
            if (fileExists) {
                this.messageService.showWarningMessage('global.warningOnFileExists');
            }
            else {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_16__["FileUtils"].getFileContentAsBase64(file_1, function (fileContent) {
                    if (!!fileContent) {
                        var document_1 = {
                            documentContent: fileContent,
                            documentName: file_1.name,
                            documentPublicationDate: new Date(),
                            bidtPurchaseRequestId: 0
                        };
                        document_1.documentType = _this.formatDocExtension(document_1);
                        _this.documents = __spread(_this.documents, [document_1]);
                        _this.documentsAdded = __spread(_this.documentsAdded, [document_1]);
                        _this.documentTable = __spread(_this.documentTable, [_this.createDocumentRow(document_1)]);
                    }
                });
            }
            fileUploader.clear();
        }
    };
    LitigationFileFormComponent.prototype.areSameDocument = function (obj1, obj2) {
        if (!obj1 || !obj2) {
            return false;
        }
        else {
            return !!obj1.documentName && !!obj2.documentName && obj1.documentName === obj2.documentName;
        }
    };
    LitigationFileFormComponent.prototype.onAddDocument = function (document) {
        var _this = this;
        if (!!document) {
            if (this.currentDocumentIndex !== -1) {
                this.documents[this.currentDocumentIndex] = document;
                this.documentTable[this.currentDocumentIndex] = this.createDocumentRow(document);
                var updatedDocumentIndex = this.documentsUpdated.findIndex(function (documentUpdated) {
                    return _this.areSameDocument(documentUpdated, document);
                });
                if (updatedDocumentIndex !== -1) {
                    this.documentsUpdated[updatedDocumentIndex] = document;
                }
                else {
                    this.documentsUpdated = __spread(this.documentsUpdated, [document]);
                }
            }
            else {
                var isAdded = this.documentsAdded.some(function (documentAdded) { return _this.areSameDocument(documentAdded, document); });
                if (isAdded) {
                    this.messageService.showWarningMessage('global.warningOnDocumentExists');
                }
                else {
                    this.documents = __spread(this.documents, [document]);
                    this.documentsAdded = __spread(this.documentsAdded, [document]);
                    this.documentTable = __spread(this.documentTable, [this.createDocumentRow(document)]);
                }
            }
        }
        this.selectedDocuments = [];
    };
    /**************************************************************************
     * Table Of Content
     *************************************************************************/
    LitigationFileFormComponent.prototype.setTableOfContent = function () {
        var _this = this;
        var mainDataKey = 'page.mainData';
        var originKey = this.getTranslateKey('origin');
        var defaultKey = this.getTranslateKey('default');
        var contributorKey = this.getTranslateKey('contributors');
        var litigationElentsKey = this.getTranslateKey('litigationElements');
        var actionKey = this.getTranslateKey('actions');
        var documentsKey = 'global.documents';
        this.translateService
            .get([mainDataKey, originKey, defaultKey, contributorKey, litigationElentsKey, actionKey, documentsKey])
            .subscribe(function (results) {
            var mainDataLabel = !!results ? results[mainDataKey] : 'Main Information';
            var defaultLabel = !!results ? results[defaultKey] : 'Default';
            var originLabel = !!results ? results[originKey] : 'Origin';
            var contributorLabel = !!results ? results[contributorKey] : 'Contributors';
            var litigationElementsLabel = !!results ? results[litigationElentsKey] : 'Elemnts';
            var actionLabel = !!results ? results[actionKey] : 'Actions';
            var documentsLabel = !!results ? results[documentsKey] : 'Documents';
            _this.toc = [
                {
                    id: 'mainInformationAnchor',
                    anchor: _this.mainInformationEltRef,
                    label: mainDataLabel
                },
                {
                    id: 'defaultAnchor',
                    anchor: _this.defaultEltRef,
                    label: defaultLabel
                },
                {
                    id: 'litigationElementsAnchor',
                    anchor: _this.litigationElementsEltRef,
                    label: litigationElementsLabel
                },
                {
                    id: 'originAnchor',
                    anchor: _this.originEltRef,
                    label: originLabel
                },
                {
                    id: 'contributorAnchor',
                    anchor: _this.contributorEltRef,
                    label: contributorLabel
                },
                {
                    id: 'actionAnchor',
                    anchor: _this.actionEltRef,
                    label: actionLabel
                },
                {
                    id: 'documentAnchor',
                    anchor: _this.documentTableEltRef,
                    label: documentsLabel
                }
            ];
            setTimeout(function () {
                _super.prototype.selectPageTocEntry.call(_this, _this.component.MAIN_ANCHOR_ID);
            });
        });
    };
    // tslint:disable-next-line: no-any
    LitigationFileFormComponent.prototype.navigateToSelectedSectionFromSummary = function (anchorId, elementRef, event) {
        _super.prototype.selectPageTocEntry.call(this, anchorId);
        _super.prototype.scrollToAnchorAndStopPropagation.call(this, elementRef, event);
    };
    LitigationFileFormComponent.prototype.findContributors = function () {
        var _this = this;
        this.litigationFileFormService.findContributors().subscribe(function (result) {
            _this.contributorTable = result;
        });
    };
    LitigationFileFormComponent.prototype.findLitigationElementsValue = function () {
        var _this = this;
        this.litigationFileFormService.findLitigationMaterials().subscribe(function (result) {
            _this.litigationElementInput = result;
        });
    };
    LitigationFileFormComponent.prototype.findActions = function () {
        var _this = this;
        this.litigationFileFormService.findActions().subscribe(function (result) {
            _this.actionTable = result;
            _this.countActions();
        });
    };
    LitigationFileFormComponent.prototype.countActions = function () {
        var percent = 100;
        var releasedAction = this.actionTable.filter(function (obj) {
            return obj.status === 'Realise';
        }).length;
        var data = {
            actionPlan: '',
            plannedActions: this.actionTable.length,
            noOfReleasedActions: releasedAction,
            durationInProgress: '0 Jours',
            progress: (releasedAction / this.actionTable.length) * percent
        };
        this.actionCounterData = data;
    };
    LitigationFileFormComponent.prototype.loadLitigationTypes = function () {
        var _this = this;
        this.litigationFileFormService.loadLitigationTypes().subscribe(function (result) {
            _this.litigationTypeList = result;
        });
    };
    LitigationFileFormComponent.prototype.loadLitigationElementTypes = function () {
        var _this = this;
        this.litigationFileFormService.loadLitigationElementTypes().subscribe(function (result) {
            _this.litigationElementList = result;
        });
    };
    LitigationFileFormComponent.prototype.loadContributorList = function () {
        var _this = this;
        this.litigationFileFormService.loadContributorList().subscribe(function (result) {
            _this.contributorList = result;
        });
    };
    LitigationFileFormComponent.prototype.loadCategoryList = function () {
        var _this = this;
        this.litigationFileFormService.loadCategoryList().subscribe(function (result) {
            _this.categoryList = result;
        });
    };
    LitigationFileFormComponent.prototype.loadObjectTypeList = function () {
        var _this = this;
        this.litigationFileFormService.loadObjectTypeList().subscribe(function (result) {
            _this.objectTypeList = result;
        });
    };
    LitigationFileFormComponent.prototype.loadRecipientList = function () {
        var _this = this;
        this.litigationFileFormService.loadRecipientList().subscribe(function (result) {
            _this.recipientList = result;
        });
    };
    LitigationFileFormComponent.prototype.loadCarrierList = function () {
        var _this = this;
        this.litigationFileFormService.loadCarrierList().subscribe(function (result) {
            _this.carrierList = result;
        });
    };
    LitigationFileFormComponent.prototype.loadActionPlanList = function () {
        var _this = this;
        this.litigationFileFormService.loadActionPlanList().subscribe(function (result) {
            _this.actionPlanList = result;
        });
    };
    LitigationFileFormComponent.prototype.onChangeAction = function (rowData) {
        if (rowData.action) {
            if (rowData.item === '01') {
                this.showTransferValidationDialog = true;
                this.transferValidationData = __assign({}, rowData);
            }
            else if (rowData.item === '02') {
                this.showEstablishActionDialog = true;
                this.establishActionData = __assign({}, rowData);
            }
            else if (rowData.item === '03') {
                this.showValidateActionDialog = true;
                this.validateActionData = __assign({}, rowData);
            }
        }
    };
    LitigationFileFormComponent.prototype.onValidateAction = function (data) {
        this.actionTable[2].comment = data.comment;
        this.actionTable[2].action = data.action;
        this.actionTable[2].status = 'Realise';
        this.actionTable[2].since = '1 jours';
        this.actionTable[2].stockType = 'Ordre de transfert';
        this.countActions();
    };
    LitigationFileFormComponent.prototype.onEstablishActionPlan = function (data) {
        var _this = this;
        this.actionTable[1].comment = data.comment;
        this.actionTable[1].actionName = data.actionName;
        this.actionTable[1].action = data.action;
        this.actionTable[1].status = 'Realise';
        this.actionTable[1].since = '0 jours';
        this.litigationFileFormService.loadMoreActions().subscribe(function (result) {
            _this.actionTable = _this.actionTable.concat(result);
            _this.countActions();
        });
    };
    LitigationFileFormComponent.prototype.onTransferValidation = function (data) {
        this.actionTable[0].comment = data.comment;
        this.actionTable[0].action = data.action;
        this.actionTable[0].status = 'Realise';
        this.countActions();
    };
    LitigationFileFormComponent.prototype.onSelectActionPlan = function () {
        this.showActionNameDialog = true;
    };
    LitigationFileFormComponent.prototype.onAddActionPlan = function () {
        return;
    };
    LitigationFileFormComponent.prototype.onActionValidation = function () {
        return;
    };
    LitigationFileFormComponent.prototype.onEditComment = function () {
        return;
    };
    LitigationFileFormComponent.prototype.onActionDelete = function () {
        return;
    };
    LitigationFileFormComponent.prototype.searchFolderName = function () {
        return;
    };
    LitigationFileFormComponent.prototype.setActionPlan = function (data) {
        this.actionCounterData.actionPlan = data;
    };
    var LitigationFileFormComponent_1;
    LitigationFileFormComponent.MAIN_ANCHOR_ID = 'mainInformationAnchor';
    LitigationFileFormComponent.DEFAULT_ANCHOR_ID = 'defaultAnchor';
    LitigationFileFormComponent.ORIGIN_ANCHOR_ID = 'originAnchor';
    LitigationFileFormComponent.CONTRIBUTOR_ANCHOR_ID = 'contributorAnchor';
    LitigationFileFormComponent.LITIGATION_ELEMENTS_ANCHOR_ID = 'litigationElementsAnchor';
    LitigationFileFormComponent.ACTION_ANCHOR_ID = 'actionAnchor';
    LitigationFileFormComponent.DOCUMENTS_ANCHOR_ID = 'documentAnchor';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(LitigationFileFormComponent_1.MAIN_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LitigationFileFormComponent.prototype, "mainInformationEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(LitigationFileFormComponent_1.DEFAULT_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LitigationFileFormComponent.prototype, "defaultEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(LitigationFileFormComponent_1.ORIGIN_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LitigationFileFormComponent.prototype, "originEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(LitigationFileFormComponent_1.CONTRIBUTOR_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LitigationFileFormComponent.prototype, "contributorEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(LitigationFileFormComponent_1.LITIGATION_ELEMENTS_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LitigationFileFormComponent.prototype, "litigationElementsEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(LitigationFileFormComponent_1.ACTION_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LitigationFileFormComponent.prototype, "actionEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(LitigationFileFormComponent_1.DOCUMENTS_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LitigationFileFormComponent.prototype, "documentTableEltRef", void 0);
    LitigationFileFormComponent = LitigationFileFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-litigation-file-form',
            template: __webpack_require__(/*! ./litigation-file-form.component.html */ "./src/app/main/logistics/litigation-file/form/litigation-file-form.component.html"),
            styles: [__webpack_require__(/*! ./litigation-file-form.component.scss */ "./src/app/main/logistics/litigation-file/form/litigation-file-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_2__["PageTocService"],
            _litigation_file_form_service__WEBPACK_IMPORTED_MODULE_18__["LitigationFileFormService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], LitigationFileFormComponent);
    return LitigationFileFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_15__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/litigation-file/form/litigation-file-form.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/form/litigation-file-form.service.ts ***!
  \*************************************************************************************/
/*! exports provided: LitigationFileFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitigationFileFormService", function() { return LitigationFileFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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





var LitigationFileFormService = /** @class */ (function (_super) {
    __extends(LitigationFileFormService, _super);
    function LitigationFileFormService(http, appConfigService) {
        return _super.call(this, http, appConfigService) || this;
    }
    LitigationFileFormService.prototype.findContributors = function () {
        var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var result = [
                {
                    role: 'Createur',
                    login: 'John McClane'
                },
                {
                    role: 'Responsable Traitement',
                    login: 'Seth Gecko'
                },
                {
                    role: 'Controteur Qualte',
                    login: 'Paul Avery'
                }
            ];
            observer.next(result);
            observer.complete();
        });
        return simpleObservable;
    };
    LitigationFileFormService.prototype.getDefaultListData = function () {
        var results = [
            {
                type: 'Détérioration',
                category: 'Qualitatif',
                comments: 'Crique constantee'
            },
            {
                type: 'Détérioration',
                category: 'Qualitatif',
                comments: 'Enforcement constantee'
            }
        ];
        return results;
    };
    LitigationFileFormService.prototype.findLitigationMaterials = function () {
        var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var result = {
                elementType: 'Physical material',
                pn: '0055215-100-01',
                designation: '### DESIGNATION DU PN ###',
                sn: '12767612-11',
                status: 'Indisponible',
                owner: 'DMA6',
                siteCode: 'BA-118',
                siteName: 'Monte-de-marsan',
                whName: 'DRSU',
                zone: 'En Reception',
                location: 'N/A',
                employee: 'empl.'
            };
            observer.next(result);
            observer.complete();
        });
        return simpleObservable;
    };
    LitigationFileFormService.prototype.findActions = function () {
        var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var result = [
                {
                    item: '01',
                    actionName: 'Transferer en Quarantaine',
                    comment: '',
                    action: false,
                    contributor: 'John McClane',
                    role: 'Createur',
                    status: 'Lance',
                    since: '0 jours',
                    stockType: 'Movement Stock'
                },
                {
                    item: '02',
                    actionName: 'Confirmer la declaration de litige',
                    comment: '',
                    action: false,
                    contributor: 'Seth Gecko',
                    role: 'Responsable Traitement',
                    status: 'Planifie',
                    stockType: ''
                }
            ];
            observer.next(result);
            observer.complete();
        });
        return simpleObservable;
    };
    LitigationFileFormService.prototype.loadLitigationTypes = function () {
        var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var result = [
                {
                    label: 'Deterioration',
                    value: 'Deterioration'
                }
            ];
            observer.next(result);
            observer.complete();
        });
        return simpleObservable;
    };
    LitigationFileFormService.prototype.loadLitigationElementTypes = function () {
        var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var result = [
                {
                    label: 'Material Connu',
                    value: 'Material Connu'
                }
            ];
            observer.next(result);
            observer.complete();
        });
        return simpleObservable;
    };
    LitigationFileFormService.prototype.loadContributorList = function () {
        var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var result = [
                {
                    label: 'Travis BICKLE',
                    value: 'Travis BICKLE'
                }
            ];
            observer.next(result);
            observer.complete();
        });
        return simpleObservable;
    };
    LitigationFileFormService.prototype.loadCategoryList = function () {
        var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var result = [
                {
                    label: 'Order de Transfert',
                    value: 'Order de Transfert'
                }
            ];
            observer.next(result);
            observer.complete();
        });
        return simpleObservable;
    };
    LitigationFileFormService.prototype.loadObjectTypeList = function () {
        var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var result = [
                {
                    label: 'Envoi NTI2',
                    value: 'Envoi NTI2'
                }
            ];
            observer.next(result);
            observer.complete();
        });
        return simpleObservable;
    };
    LitigationFileFormService.prototype.loadRecipientList = function () {
        var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var result = [];
            observer.next(result);
            observer.complete();
        });
        return simpleObservable;
    };
    LitigationFileFormService.prototype.loadCarrierList = function () {
        var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var result = [];
            observer.next(result);
            observer.complete();
        });
        return simpleObservable;
    };
    LitigationFileFormService.prototype.loadActionPlanList = function () {
        var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var result = [
                {
                    label: 'Renvoi du Materiel au NTI3 pour reparation',
                    value: 'Renvoi du Materiel au NTI3 pour reparation'
                },
                {
                    label: 'Renvoi du Materiel au Fournisseur',
                    value: 'Renvoi du Materiel au Fournisseur'
                },
                {
                    label: 'Elimination du Materiel sans Test',
                    value: 'Elimination du Materiel sans Test'
                },
                {
                    label: 'Declassement du Materiel sans Test',
                    value: 'Declassement du Materiel sans Test'
                },
                {
                    label: 'Envoi du Materiel au NTI2 pour Test',
                    value: 'Envoi du Materiel au NTI2 pour Test'
                }
            ];
            observer.next(result);
            observer.complete();
        });
        return simpleObservable;
    };
    LitigationFileFormService.prototype.loadMoreActions = function () {
        var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var result = [
                {
                    item: '03',
                    actionName: 'Envoyer Materiel au NTI2',
                    comment: '',
                    action: false,
                    contributor: 'Travis BICKLE',
                    role: 'Logisticien',
                    status: 'Lance',
                    since: '0 jours',
                    objectAssociates: '',
                    stockType: '',
                    actionValidationDate: new Date(),
                    expectedDeliveryDate: new Date(),
                    category: 'Order de Transfert',
                    type: 'Envoi NTI2'
                },
                {
                    item: '04',
                    actionName: 'Receptionner Materiel au NTI2',
                    comment: '',
                    action: false,
                    contributor: '',
                    role: 'Logisticien',
                    status: 'Planifie',
                    objectAssociates: '',
                    stockType: ''
                },
                {
                    item: '05',
                    actionName: 'Analyser Resultat Test NTI2',
                    comment: '',
                    action: false,
                    contributor: '',
                    role: 'Technicien',
                    status: 'Planifie',
                    objectAssociates: '',
                    stockType: ''
                }
            ];
            observer.next(result);
            observer.complete();
        });
        return simpleObservable;
    };
    LitigationFileFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"]])
    ], LitigationFileFormService);
    return LitigationFileFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/litigation-file/litigation-file.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/litigation-file.module.ts ***!
  \**************************************************************************/
/*! exports provided: LitigationFileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitigationFileModule", function() { return LitigationFileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/keyfilter */ "./node_modules/primeng/keyfilter.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tristatecheckbox */ "./node_modules/primeng/tristatecheckbox.js");
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ "./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_dialog_action_plan_dialog_action_plan_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./form/dialog-action-plan/dialog-action-plan.component */ "./src/app/main/logistics/litigation-file/form/dialog-action-plan/dialog-action-plan.component.ts");
/* harmony import */ var _form_dialog_establish_action_plan_dialog_establish_action_plan_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./form/dialog-establish-action-plan/dialog-establish-action-plan.component */ "./src/app/main/logistics/litigation-file/form/dialog-establish-action-plan/dialog-establish-action-plan.component.ts");
/* harmony import */ var _form_dialog_transfer_validation_dialog_transfer_validation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./form/dialog-transfer-validation/dialog-transfer-validation.component */ "./src/app/main/logistics/litigation-file/form/dialog-transfer-validation/dialog-transfer-validation.component.ts");
/* harmony import */ var _form_dialog_validate_action_dialog_validate_action_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./form/dialog-validate-action/dialog-validate-action.component */ "./src/app/main/logistics/litigation-file/form/dialog-validate-action/dialog-validate-action.component.ts");
/* harmony import */ var _form_litigation_file_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./form/litigation-file-form.component */ "./src/app/main/logistics/litigation-file/form/litigation-file-form.component.ts");
/* harmony import */ var _form_litigation_file_form_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./form/litigation-file-form.service */ "./src/app/main/logistics/litigation-file/form/litigation-file-form.service.ts");
/* harmony import */ var _search_litigation_file_search_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./search/litigation-file-search.component */ "./src/app/main/logistics/litigation-file/search/litigation-file-search.component.ts");
/* harmony import */ var _search_litigation_file_search_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./search/litigation-file-search.service */ "./src/app/main/logistics/litigation-file/search/litigation-file-search.service.ts");
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
    primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__["InputSwitchModule"],
    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__["InputTextareaModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"],
    primeng_keyfilter__WEBPACK_IMPORTED_MODULE_7__["KeyFilterModule"],
    primeng_message__WEBPACK_IMPORTED_MODULE_8__["MessageModule"],
    primeng_progressbar__WEBPACK_IMPORTED_MODULE_9__["ProgressBarModule"],
    primeng_radiobutton__WEBPACK_IMPORTED_MODULE_10__["RadioButtonModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_11__["SelectButtonModule"],
    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_12__["SplitButtonModule"],
    primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_15__["TriStateCheckboxModule"]
];
var INTERNAL_MODULES = [_shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_21__["ModalModule"], _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_19__["ComponentSidebarModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [
    _form_dialog_action_plan_dialog_action_plan_component__WEBPACK_IMPORTED_MODULE_23__["DialogActionPlanComponent"],
    _form_dialog_establish_action_plan_dialog_establish_action_plan_component__WEBPACK_IMPORTED_MODULE_24__["DialogEstablishActionPlanComponent"],
    _form_dialog_transfer_validation_dialog_transfer_validation_component__WEBPACK_IMPORTED_MODULE_25__["DialogTransferValidationComponent"],
    _form_dialog_validate_action_dialog_validate_action_component__WEBPACK_IMPORTED_MODULE_26__["DialogValidateActionComponent"]
];
var DYNAMIC_COMPONENTS = [_form_litigation_file_form_component__WEBPACK_IMPORTED_MODULE_27__["LitigationFileFormComponent"], _search_litigation_file_search_component__WEBPACK_IMPORTED_MODULE_29__["LitigationFileSearchComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_search_litigation_file_search_service__WEBPACK_IMPORTED_MODULE_30__["LitigationFileSearchService"], _form_litigation_file_form_service__WEBPACK_IMPORTED_MODULE_28__["LitigationFileFormService"]];
var LitigationFileModule = /** @class */ (function () {
    function LitigationFileModule() {
    }
    LitigationFileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_16__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_17__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_18__["AppCommonSharedModule"],
                _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_20__["ManageSearchCriteriaModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_22__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], LitigationFileModule);
    return LitigationFileModule;
}());



/***/ }),

/***/ "./src/app/main/logistics/litigation-file/search/litigation-file-search.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/search/litigation-file-search.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + getComponentName() | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">\r\n        {{ \"page.searchPage\" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button type=\"button\" mat-raised-button *ngIf=\"hasUpdateAccessRight\">\r\n      {{ getComponentName() + \".seeMyLitigations\" | translate }}\r\n    </button>\r\n    <button type=\"button\" mat-raised-button (click)=\"openLitigationFile()\" *ngIf=\"hasUpdateAccessRight\">\r\n      {{ getComponentName() + \".createLitigation\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row search-criteria-header\">\r\n                  <aw-manage-search-criteria\r\n                    [componentId]=\"SEARCH_CRITERIA_ID\"\r\n                    (onSelected)=\"loadSearchCriteria($event)\"\r\n                    (onSavedAsked)=\"saveSearchCriteriaAsked()\"\r\n                    [objectFromPage]=\"criteriaToSave\"\r\n                    [canChange]=\"!hasBeenCalculated\"\r\n                  ></aw-manage-search-criteria>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"grid-cell--12\">\r\n                    <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                      <div class=\"section\">\r\n                        <h4 class=\"section-title\">\r\n                          {{ getComponentName() + \".litigation\" | translate }}\r\n                        </h4>\r\n                        <div class=\"section-content\">\r\n                          <div class=\"row\">\r\n                            <div class=\"form-group\">\r\n                              <div class=\"form-control\">\r\n                                <p-selectButton\r\n                                  [options]=\"litigationList\"\r\n                                  [ngModel]=\"searchObject.litigationId\"\r\n                                  (onChange)=\"litigationChange($event.value)\"\r\n                                ></p-selectButton>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">\r\n                                {{ getComponentName() + \".litigationNumber\" | translate }}\r\n                              </label>\r\n                              <div class=\"form-control\">\r\n                                <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.litigationNumber\" />\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">\r\n                                {{ getComponentName() + \".type\" | translate }}\r\n                              </label>\r\n                              <div class=\"form-control\">\r\n                                <p-dropdown\r\n                                  class=\"aw-dropdown fixed-width\"\r\n                                  [options]=\"litigationTypeList\"\r\n                                  [showClear]=\"true\"\r\n                                  placeholder=\"&nbsp;\"\r\n                                  [(ngModel)]=\"searchObject.type\"\r\n                                ></p-dropdown>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">\r\n                                {{ getComponentName() + \".foundOn\" | translate }}\r\n                              </label>\r\n                              <div class=\"form-control\">\r\n                                <p-calendar\r\n                                  showButtonBar=\"true\"\r\n                                  [monthNavigator]=\"true\"\r\n                                  [yearNavigator]=\"true\"\r\n                                  [yearRange]=\"sessionService.calendarYearRange\"\r\n                                  class=\"aw-calendar\"\r\n                                  [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                                  [locale]=\"sessionService.calendarFormat\"\r\n                                  [readonlyInput]=\"true\"\r\n                                  [(ngModel)]=\"searchObject.foundOn\"\r\n                                >\r\n                                </p-calendar>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">\r\n                                {{ getComponentName() + \".createdOn\" | translate }}\r\n                              </label>\r\n                              <div class=\"form-control\">\r\n                                <p-calendar\r\n                                  showButtonBar=\"true\"\r\n                                  [monthNavigator]=\"true\"\r\n                                  [yearNavigator]=\"true\"\r\n                                  [yearRange]=\"sessionService.calendarYearRange\"\r\n                                  class=\"aw-calendar\"\r\n                                  [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                                  [locale]=\"sessionService.calendarFormat\"\r\n                                  [readonlyInput]=\"true\"\r\n                                  [(ngModel)]=\"searchObject.createdOn\"\r\n                                >\r\n                                </p-calendar>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"grid-cell--12\">\r\n                    <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                      <div class=\"section\">\r\n                        <h4 class=\"section-title\">\r\n                          {{ getComponentName() + \".contributor\" | translate }}\r\n                        </h4>\r\n                        <div class=\"section-content\">\r\n                          <div class=\"row\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">\r\n                                {{ getComponentName() + \".treatmentResponsible\" | translate }}\r\n                              </label>\r\n                              <div class=\"form-control\">\r\n                                <p-dropdown\r\n                                  class=\"aw-dropdown fixed-width\"\r\n                                  [options]=\"userList\"\r\n                                  [showClear]=\"true\"\r\n                                  placeholder=\"&nbsp;\"\r\n                                  [(ngModel)]=\"searchObject.treatmentResponsible\"\r\n                                ></p-dropdown>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">\r\n                                {{ getComponentName() + \".qualityControl\" | translate }}\r\n                              </label>\r\n                              <div class=\"form-control\">\r\n                                <p-dropdown\r\n                                  class=\"aw-dropdown fixed-width\"\r\n                                  [options]=\"userList\"\r\n                                  [showClear]=\"true\"\r\n                                  placeholder=\"&nbsp;\"\r\n                                  [(ngModel)]=\"searchObject.qualityControl\"\r\n                                ></p-dropdown>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">\r\n                                {{ getComponentName() + \".otherContributor\" | translate }}\r\n                              </label>\r\n                              <div class=\"form-control\">\r\n                                <p-dropdown\r\n                                  class=\"aw-dropdown fixed-width\"\r\n                                  [options]=\"userList\"\r\n                                  [showClear]=\"true\"\r\n                                  placeholder=\"&nbsp;\"\r\n                                  [(ngModel)]=\"searchObject.otherSpeaker\"\r\n                                ></p-dropdown>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\"></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"grid-cell--12\">\r\n                    <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                      <div class=\"section\">\r\n                        <h4 class=\"section-title\">\r\n                          {{ getComponentName() + \".origin\" | translate }}\r\n                        </h4>\r\n                        <div class=\"section-content\">\r\n                          <div class=\"row\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">\r\n                                {{ getComponentName() + \".documentType\" | translate }}\r\n                              </label>\r\n                              <div class=\"form-control\">\r\n                                <p-dropdown\r\n                                  class=\"aw-dropdown fixed-width\"\r\n                                  [options]=\"documentTypeList\"\r\n                                  [showClear]=\"true\"\r\n                                  placeholder=\"&nbsp;\"\r\n                                  [(ngModel)]=\"searchObject.documentType\"\r\n                                ></p-dropdown>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">\r\n                                {{ getComponentName() + \".documentNumber\" | translate }}\r\n                              </label>\r\n                              <div class=\"form-control\">\r\n                                <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.documentNumber\" />\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">\r\n                                {{ getComponentName() + \".criticity\" | translate }}\r\n                              </label>\r\n                              <div class=\"form-control group-control\">\r\n                                <div class=\"form-sub-control \">\r\n                                  <p-selectButton\r\n                                    [options]=\"criticityList\"\r\n                                    [(ngModel)]=\"searchObject.criticity\"\r\n                                    (onChange)=\"changeCriticality()\"\r\n                                    multiple=\"multiple\"\r\n                                  ></p-selectButton>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\"></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"grid-cell--12\">\r\n                    <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                      <div class=\"section\">\r\n                        <h4 class=\"section-title\">\r\n                          {{ getComponentName() + \".disputedElement\" | translate }}\r\n                        </h4>\r\n                        <div class=\"section-content\">\r\n                          <div class=\"row\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">\r\n                                {{ getComponentName() + \".elementType\" | translate }}\r\n                              </label>\r\n                              <div class=\"form-control\">\r\n                                <p-dropdown\r\n                                  class=\"aw-dropdown fixed-width\"\r\n                                  [options]=\"disputedElementDocTypeList\"\r\n                                  [showClear]=\"true\"\r\n                                  placeholder=\"&nbsp;\"\r\n                                  [(ngModel)]=\"searchObject.disputedElementDocType\"\r\n                                >\r\n                                </p-dropdown>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\"></div>\r\n                            <div class=\"form-group\"></div>\r\n                            <div class=\"form-group\"></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"grid-cell--12\">\r\n                    <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                      <div class=\"section\">\r\n                        <h4 class=\"section-title\">\r\n                          {{ getComponentName() + \".location\" | translate }}\r\n                        </h4>\r\n                        <div class=\"section-content\">\r\n                          <div class=\"row\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">\r\n                                {{ getComponentName() + \".site\" | translate }}\r\n                              </label>\r\n                              <div class=\"form-control\">\r\n                                <p-dropdown\r\n                                  class=\"aw-dropdown fixed-width\"\r\n                                  [options]=\"siteList\"\r\n                                  [showClear]=\"true\"\r\n                                  placeholder=\"&nbsp;\"\r\n                                  [(ngModel)]=\"searchObject.siteId\"\r\n                                  (onChange)=\"loadShopList()\"\r\n                                ></p-dropdown>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">{{\r\n                                componentData.componentId +\r\n                                  (searchObject.warehouseType === awPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE\r\n                                    ? \".warehouse\"\r\n                                    : \".workshop\") | translate\r\n                              }}</label>\r\n\r\n                              <div class=\"form-control group-control\">\r\n                                <div class=\"form-sub-control \">\r\n                                  <p-selectButton\r\n                                    [options]=\"warehouseList\"\r\n                                    [(ngModel)]=\"searchObject.warehouseType\"\r\n                                    (onChange)=\"loadShopList()\"\r\n                                  ></p-selectButton>\r\n                                </div>\r\n                                <div class=\"form-sub-control\">\r\n                                  <p-dropdown\r\n                                    class=\"aw-dropdown fixed-width\"\r\n                                    placeholder=\"&nbsp;\"\r\n                                    [showClear]=\"true\"\r\n                                    [(ngModel)]=\"searchObject.warehouseId\"\r\n                                    [options]=\"shopList\"\r\n                                  ></p-dropdown>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\"></div>\r\n                            <div class=\"form-group\"></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"advanced-criteria\" [ngClass]=\"{ 'display--none': !showAdvancedCriteria }\"></div>\r\n\r\n                <div class=\"row search-criteria-footer\">\r\n                  <div class=\"search-actions\">\r\n                    <button\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      (click)=\"search()\"\r\n                      color=\"primary\"\r\n                      appKeyPress\r\n                      [keyCode]=\"'Enter'\"\r\n                      (keyPress)=\"search()\"\r\n                    >\r\n                      {{ \"global.toSearch\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.results\" | translate }} ({{\r\n                    litigationFileTable.list ? litigationFileTable.list.length : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableResults\r\n                class=\"aw-table2\"\r\n                [columns]=\"litigationFileTableCols\"\r\n                [value]=\"litigationFileTable.list\"\r\n                [(selection)]=\"selectedLitigationFiles\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedLitigationFiles.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableResultsGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableResults.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"\r\n                          litigationFileTable && litigationFileTable.length > 0 && selectedLitigationFiles.length === 0\r\n                        \"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"exportTable()\"\r\n                      >\r\n                        {{ \"global.export\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"hasManageAccessRight && selectedLitigationFiles.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteLitigationFiles()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedLitigationFiles.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openSelectedLitigationFiles()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ getComponentName() + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n                    <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <div *ngSwitchCase=\"'litigationFile'\">\r\n                        <div class=\"row\">\r\n                          <div class=\"flex--2 font-bold\">\r\n                            <a (click)=\"openLitigationFile(rowData, componentOpenMode.Read)\">{{\r\n                              rowData[col.field]\r\n                            }}</a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div>{{ rowData[\"category\"] }}</div>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngSwitchCase=\"'originDocument'\">\r\n                        <div class=\"row\">\r\n                          <div class=\"flex--2 font-bold\">\r\n                            <a>{{ rowData[\"folderNumber\"] }}</a>\r\n                          </div>\r\n                          <div class=\"flex--2\">{{ rowData[\"folderName\"] }}</div>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngSwitchCase=\"'isBlocking'\">\r\n                        <div class=\"row\">\r\n                          <p-checkbox\r\n                            binary=\"true\"\r\n                            class=\"aw-checkbox\"\r\n                            [(ngModel)]=\"rowData.isBlocking\"\r\n                            [disabled]=\"true\"\r\n                          ></p-checkbox>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngSwitchCase=\"'creation'\">\r\n                        <div class=\"row\">\r\n                          <div class=\"flex--2 \">{{ getComponentName() + \".createdOn\" | translate }}</div>\r\n                          <div class=\"flex--2 font-bold\">{{ rowData[\"createdOn\"] }}</div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"flex--2\">{{ getComponentName() + \".createdBy\" | translate }}</div>\r\n                          <div class=\"flex--2 font-bold\">{{ rowData[\"createdBy\"] }}</div>\r\n                        </div>\r\n                      </div>\r\n                      <div *ngSwitchDefault>{{ rowData[col.field] }}</div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/litigation-file/search/litigation-file-search.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/search/litigation-file-search.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .font-bold {\n  font-weight: bold; }\n\n:host .font-italic {\n  font-style: italic; }\n\n:host .custom-width {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content; }\n\n:host .group-control {\n  display: flex; }\n\n:host .group-control .form-sub-control {\n    flex-direction: column;\n    width: 100%; }\n\n:host .group-control .form-sub-control > p-selectButton {\n      display: flex;\n      align-items: flex-end;\n      height: 2.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbGl0aWdhdGlvbi1maWxlL3NlYXJjaC9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXGxpdGlnYXRpb24tZmlsZVxcc2VhcmNoXFxsaXRpZ2F0aW9uLWZpbGUtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9saXRpZ2F0aW9uLWZpbGUvc2VhcmNoL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLGlCQUFpQixFQUFBOztBQUZyQjtFQU1JLGtCQUFrQixFQUFBOztBQU50QjtFQVVJLDhCQUFzQjtFQUF0QiwyQkFBc0I7RUFBdEIsc0JBQXNCLEVBQUE7O0FBVjFCO0VBY0ksYUFBYSxFQUFBOztBQWRqQjtJQWdCTSxzQkFBc0I7SUFDdEIsV0FBVyxFQUFBOztBQWpCakI7TUFtQlEsYUFBYTtNQUNiLHFCQUFxQjtNQUNyQixjQ3NDb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL2xpdGlnYXRpb24tZmlsZS9zZWFyY2gvbGl0aWdhdGlvbi1maWxlLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuOmhvc3Qge1xyXG4gIC5mb250LWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAuZm9udC1pdGFsaWMge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS13aWR0aCB7XHJcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgLmdyb3VwLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5mb3JtLXN1Yi1jb250cm9sIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICYgPiBwLXNlbGVjdEJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgaGVpZ2h0OiAkZm9ybS1jb250cm9sLWhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/main/logistics/litigation-file/search/litigation-file-search.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/search/litigation-file-search.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LitigationFileSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitigationFileSearchComponent", function() { return LitigationFileSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/lang-constants */ "./src/app/shared/constants/lang-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _litigation_file_search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./litigation-file-search.service */ "./src/app/main/logistics/litigation-file/search/litigation-file-search.service.ts");
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
















var LitigationFileSearchComponent = /** @class */ (function (_super) {
    __extends(LitigationFileSearchComponent, _super);
    /* ***************************************************************************/
    function LitigationFileSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, dateService, litigationFileSearchService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.dateService = dateService;
        _this.litigationFileSearchService = litigationFileSearchService;
        _this.translateService = translateService;
        _this.SEARCH_CRITERIA_ID = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].ORDER_DOCUMENT_SEARCH_CRITERIA_ID;
        _this.componentOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"];
        _this.init();
        _this.initTableCols();
        _this.loadLitigationList();
        _this.loadLitigationTypeList();
        _this.loadDocumentTypeList();
        _this.loadCriticityList();
        _this.loadDisputedElementDocTypeList();
        _this.loadSiteList();
        _this.loadWarehouseList();
        _this.loadUserList();
        _this.getCriticilityList();
        return _this;
    }
    LitigationFileSearchComponent_1 = LitigationFileSearchComponent;
    LitigationFileSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].LOG_LITIGATION_FILE_SEARCH;
    };
    LitigationFileSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.awPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"];
        this.displayComponentContext('global.search', true);
    };
    LitigationFileSearchComponent.prototype.resetSearchCriteria = function () {
        this.searchObject = {};
        this.searchObject.criticity = [];
        this.criteriaName = undefined;
    };
    LitigationFileSearchComponent.prototype.search = function () {
        var _this = this;
        this.isLoading = true;
        this.clearResultTable();
        _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
        this.litigationFileSearchService.findByCriteria().subscribe(function (result) {
            _this.isLoading = false;
            _this.litigationFileTable = result;
            _this.litigationFileTable.list.map(function (obj) {
                if (obj.foundOn) {
                    obj.createdOn = _this.dateService.dateToString(obj.foundOn);
                }
                return obj;
            });
            _super.prototype.differ.call(_this, function () {
                _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
            });
        });
    };
    LitigationFileSearchComponent.prototype.loadSearchCriteria = function (event) {
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
    LitigationFileSearchComponent.prototype.saveSearchCriteriaAsked = function () {
        var criteriaToSave = this.searchObject;
        this.criteriaToSave = criteriaToSave;
    };
    LitigationFileSearchComponent.prototype.clearResultTable = function () {
        this.litigationFileTable = { list: [], moreResults: false };
        this.selectedLitigationFiles = [];
    };
    LitigationFileSearchComponent.prototype.init = function () {
        this.clearResultTable();
        this.resetSearchCriteria();
        this.litigationList = [];
        this.criticityList = [];
        this.disputedElementDocTypeList = [];
        this.siteList = [];
        this.documentTypeList = [];
        this.litigationTypeList = [];
        this.isLoading = false;
        this.showAdvancedCriteria = false;
        this.receptionDateVisibility = false;
        this.startDateVisibility = false;
        this.endDateVisibility = false;
        this.showQuickSearchMaterialPopup = false;
        this.showQuickSearchPurchaseRequestPopup = false;
    };
    LitigationFileSearchComponent.prototype.initTableCols = function () {
        this.litigationFileTableCols = [
            { field: 'litigationFile', alignment: 'left' },
            { field: 'litigationType', alignment: 'left' },
            { field: 'typeOfElement', alignment: 'left' },
            { field: 'isBlocking', alignment: 'left' },
            { field: 'originDocument', alignment: 'left' },
            { field: 'status', alignment: 'left' },
            { field: 'creation', alignment: 'left' }
        ];
    };
    LitigationFileSearchComponent.prototype.loadLitigationList = function () {
        this.litigationList = [
            { label: "" + this.translateService.instant(this.getTranslateKey('all')), value: 'All' },
            { label: "" + this.translateService.instant(this.getTranslateKey('blocking')), value: 'Blocking' },
            { label: "" + this.translateService.instant(this.getTranslateKey('nonBlocking')), value: 'Non Blocking' }
        ];
    };
    LitigationFileSearchComponent.prototype.loadLitigationTypeList = function () {
        var _this = this;
        var LITIGATION_ID = 140;
        this.litigationTypeList = [];
        this.litigationFileSearchService
            .fetchPropertyValuesTableData(LITIGATION_ID)
            .subscribe(function (res) {
            res.forEach(function (dto) {
                _this.litigationTypeList.push({
                    label: _this.translateService.currentLang === _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_5__["LangConstants"].ENGLISH_CODE
                        ? dto.enPropertiesValue
                        : dto.frPropertiesValue,
                    value: dto.propertiesKey
                });
            });
        });
    };
    LitigationFileSearchComponent.prototype.loadUserList = function () {
        var _this = this;
        this.userList = [];
        this.litigationFileSearchService.loadUserList().subscribe(function (result) { return (_this.userList = result); });
    };
    LitigationFileSearchComponent.prototype.loadDocumentTypeList = function () {
        this.documentTypeList = [];
    };
    LitigationFileSearchComponent.prototype.loadCriticityList = function () {
        this.criticityList = [];
    };
    LitigationFileSearchComponent.prototype.loadDisputedElementDocTypeList = function () {
        var _this = this;
        this.disputedElementDocTypeList = [];
        var LITIGATION_ID = 141;
        this.litigationFileSearchService
            .fetchPropertyValuesTableData(LITIGATION_ID)
            .subscribe(function (res) {
            res.forEach(function (dto) {
                _this.disputedElementDocTypeList.push({
                    label: _this.translateService.currentLang === _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_5__["LangConstants"].ENGLISH_CODE
                        ? dto.enPropertiesValue
                        : dto.frPropertiesValue,
                    value: dto.propertiesKey
                });
            });
        });
    };
    LitigationFileSearchComponent.prototype.loadSiteList = function () {
        var _this = this;
        this.siteList = [];
        this.litigationFileSearchService.findAllStockStatusSites().subscribe(function (result) {
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
    LitigationFileSearchComponent.prototype.loadWarehouseList = function () {
        var _this = this;
        this.warehouseList = [];
        this.litigationFileSearchService.loadWarehousesSelectItem().subscribe(function (res) {
            if (res && res.length > 0) {
                _this.warehouseList = res.sort(function (s1, s2) { return s1.value.localeCompare(s2.value); });
                _this.searchObject.warehouseType = res[0].value;
                _this.loadShopList();
            }
        });
    };
    LitigationFileSearchComponent.prototype.openLitigationFile = function (object, openMode) {
        var componentOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Create;
        if (openMode) {
            componentOpenMode = openMode;
        }
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].LOG_LITIGATION_FILE_FORM,
            openMode: componentOpenMode
        };
        if (!!object) {
            data.objectId = this.serializationService.serialize(object);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    LitigationFileSearchComponent.prototype.exportTable = function () {
        return;
    };
    LitigationFileSearchComponent.prototype.deleteLitigationFiles = function () {
        return;
    };
    LitigationFileSearchComponent.prototype.openSelectedLitigationFiles = function () {
        var _this = this;
        this.selectedLitigationFiles.forEach(function (obj) {
            _this.openLitigationFile(obj, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read);
        });
    };
    LitigationFileSearchComponent.prototype.loadShopList = function () {
        var _this = this;
        this.shopList = [];
        if (this.searchObject) {
            this.litigationFileSearchService
                .getWarehousesBySiteId(this.searchObject.siteId)
                .subscribe(function (results) {
                if (!!results) {
                    _this.shopList = results
                        .filter(function (wh) {
                        return !!wh.wareHouseId &&
                            !!wh.whName &&
                            !!wh.whCategory &&
                            _this.searchObject.warehouseType === wh.whCategory;
                    })
                        .map(function (shop) {
                        return {
                            label: shop.whName,
                            value: shop.wareHouseId
                        };
                    })
                        .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
                }
            });
        }
    };
    LitigationFileSearchComponent.prototype.getCriticilityList = function () {
        var _this = this;
        this.criticityList = [];
        this.litigationFileSearchService.loadCriticalityList().subscribe(function (res) {
            res.forEach(function (criticity) {
                _this.criticityList.push({
                    label: criticity.label,
                    value: criticity.value
                });
            });
            _this.criticityList.unshift({
                label: _this.translateService.instant(_this.getTranslateKey('all')),
                value: LitigationFileSearchComponent_1.ALL
            });
            _this.searchObject.criticity = [_this.criticityList[0].value];
        });
    };
    LitigationFileSearchComponent.prototype.changeCriticality = function () {
        if (this.searchObject && this.searchObject.criticity) {
            var isAllSelected = this.searchObject.criticity.indexOf(LitigationFileSearchComponent_1.ALL) !== -1 ? true : false;
            if (isAllSelected) {
                if (this.searchObject.criticity.length === 1) {
                    this.searchObject.criticity = [];
                    this.searchObject.criticity = [LitigationFileSearchComponent_1.ALL];
                }
                else if (this.searchObject.criticity.length === this.criticityList.length - 1) {
                    this.searchObject.criticity = [];
                    this.searchObject.criticity = [LitigationFileSearchComponent_1.ALL];
                }
                else if (this.searchObject.criticity.length > 1 &&
                    this.searchObject.criticity.length < this.criticityList.length) {
                    if (this.searchObject.criticity[this.searchObject.criticity.length - 1] !== LitigationFileSearchComponent_1.ALL) {
                        this.searchObject.criticity.splice(this.searchObject.criticity.indexOf(LitigationFileSearchComponent_1.ALL), 1);
                    }
                    else {
                        this.searchObject.criticity = [];
                        this.searchObject.criticity = [LitigationFileSearchComponent_1.ALL];
                    }
                }
            }
            else if (!isAllSelected && this.searchObject.criticity.length === this.criticityList.length - 1) {
                this.searchObject.criticity = [];
                this.searchObject.criticity = [LitigationFileSearchComponent_1.ALL];
            }
        }
    };
    LitigationFileSearchComponent.prototype.litigationChange = function (event) {
        if ((this.searchObject.litigationId === LitigationFileSearchComponent_1.litigationTypeObject.blocking &&
            event === LitigationFileSearchComponent_1.litigationTypeObject.nonBlocking) ||
            (this.searchObject.litigationId === LitigationFileSearchComponent_1.litigationTypeObject.nonBlocking &&
                event === LitigationFileSearchComponent_1.litigationTypeObject.blocking)) {
            this.searchObject.litigationId = LitigationFileSearchComponent_1.litigationTypeObject.all;
        }
        else {
            this.searchObject.litigationId = event;
        }
    };
    var LitigationFileSearchComponent_1;
    LitigationFileSearchComponent.ALL = 'ALL';
    LitigationFileSearchComponent.litigationTypeObject = {
        blocking: 'Blocking',
        nonBlocking: 'Non Blocking',
        all: 'All'
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resultsContainerAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LitigationFileSearchComponent.prototype, "resultsContainerAnchor", void 0);
    LitigationFileSearchComponent = LitigationFileSearchComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-litigation-file-search',
            template: __webpack_require__(/*! ./litigation-file-search.component.html */ "./src/app/main/logistics/litigation-file/search/litigation-file-search.component.html"),
            styles: [__webpack_require__(/*! ./litigation-file-search.component.scss */ "./src/app/main/logistics/litigation-file/search/litigation-file-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"],
            _litigation_file_search_service__WEBPACK_IMPORTED_MODULE_15__["LitigationFileSearchService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], LitigationFileSearchComponent);
    return LitigationFileSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_14__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/litigation-file/search/litigation-file-search.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/litigation-file/search/litigation-file-search.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: LitigationFileSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitigationFileSearchService", function() { return LitigationFileSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/utils/array-utils */ "./src/app/shared/utils/array-utils.ts");
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













var LitigationFileSearchService = /** @class */ (function (_super) {
    __extends(LitigationFileSearchService, _super);
    function LitigationFileSearchService(http, appConfigService, propertiesService, bidtWarehouseApi, bidtSiteApi, userProfileManagement) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.propertiesService = propertiesService;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.bidtSiteApi = bidtSiteApi;
        _this.userProfileManagement = userProfileManagement;
        return _this;
    }
    LitigationFileSearchService.prototype.findByCriteria = function () {
        var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var searchResult = {
                list: [
                    {
                        litigationFile: 'LF3223447',
                        litigationType: 'Deterioration',
                        category: 'Qualitatif',
                        typeOfElement: 'Material Connu',
                        isBlocking: true,
                        folderNumber: 'RF4000992',
                        folderName: 'Dossier de Reception - Material Neuf',
                        status: 'Créé',
                        foundOn: new Date(),
                        createdBy: 'John McClane',
                        comment: 'CRIQUE CONSTATEE SUR CE SN',
                        supplier: 'Dassault1',
                        carrier: 'DHL',
                        criticity: 'Immediate',
                        origin: 'Réception'
                    }
                ],
                moreResults: false
            };
            // observable execution
            observer.next(searchResult);
            observer.complete();
        });
        return simpleObservable;
    };
    LitigationFileSearchService.prototype.fetchPropertyValuesTableData = function (propertiesId) {
        return _super.prototype.post.call(this, this.userProfileManagement.findBidoPropertiesValuesByPropertiesId, propertiesId);
    };
    LitigationFileSearchService.prototype.findUsersWithUseCase = function () {
        return _super.prototype.post.call(this, this.userProfileManagement.findBidoUsersWithUseCase, _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_7__["BidoFunctionTypeConstants"].UC_AIRM_RECEPTION);
    };
    LitigationFileSearchService.prototype.loadWarehousesSelectItem = function () {
        return this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].WAREHOUSE_CATEGORY_MAP);
    };
    LitigationFileSearchService.prototype.getWarehousesBySiteId = function (siteId) {
        if (siteId) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, siteId);
        }
        else {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findAll);
        }
    };
    LitigationFileSearchService.prototype.findAllStockStatusSites = function () {
        return _super.prototype.post.call(this, this.bidtSiteApi.findSiteByUsecaseCodeStockStatus);
    };
    LitigationFileSearchService.prototype.loadCriticalityList = function () {
        return this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].LOGISTICAL_CRITICALITY_MAP);
    };
    LitigationFileSearchService.prototype.loadUserList = function () {
        return this.findUsersWithUseCase().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (results) {
            return !!results
                ? results
                    .map(function (user) {
                    return {
                        label: user.lastname + " " + user.firstname,
                        value: user.userId
                    };
                })
                    .sort(_shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_12__["ArrayUtils"].compareValues('label'))
                : [];
        }));
    };
    LitigationFileSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__["AppConfigService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__["PropertiesService"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__["BidtWarehouseApi"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_4__["BidtSiteApi"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_6__["UserProfileManagementApi"]])
    ], LitigationFileSearchService);
    return LitigationFileSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__["AbstractAwHttpService"]));



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



/***/ })

}]);
//# sourceMappingURL=logistics-litigation-file-litigation-file-module.js.map