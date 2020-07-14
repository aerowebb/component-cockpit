(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-order-document-order-document-module"],{

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

/***/ "./src/app/main/logistics/order-document/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/order-document/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docName\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input\"\r\n          maxlength=\"100\"\r\n          [(ngModel)]=\"document.documentName\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docDescription\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <textarea\r\n          class=\"aw-textarea\"\r\n          pInputTextarea\r\n          [rows]=\"3\"\r\n          [(ngModel)]=\"document.documentDescription\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          maxlength=\"300\"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" color=\"primary\" type=\"button\" mat-raised-button (click)=\"validate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/order-document/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/order-document/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: DialogBusinessPartnerBidoDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBusinessPartnerBidoDocumentComponent", function() { return DialogBusinessPartnerBidoDocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
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




var DialogBusinessPartnerBidoDocumentComponent = /** @class */ (function (_super) {
    __extends(DialogBusinessPartnerBidoDocumentComponent, _super);
    function DialogBusinessPartnerBidoDocumentComponent(sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'DialogOrderDocBidtDocumentComponent') || this;
        _this.sessionService = sessionService;
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogBusinessPartnerBidoDocumentComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
        if (!this.document) {
            this.document = {};
        }
    };
    DialogBusinessPartnerBidoDocumentComponent.prototype.validate = function () {
        this.onValidated.emit(this.document);
        this.closeDialog();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogBusinessPartnerBidoDocumentComponent.prototype, "document", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DialogBusinessPartnerBidoDocumentComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogBusinessPartnerBidoDocumentComponent.prototype, "types", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogBusinessPartnerBidoDocumentComponent.prototype, "onValidated", void 0);
    DialogBusinessPartnerBidoDocumentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-business-partner-bido-document',
            template: __webpack_require__(/*! ./dialog-business-partner-bido-document.component.html */ "./src/app/main/logistics/order-document/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DialogBusinessPartnerBidoDocumentComponent);
    return DialogBusinessPartnerBidoDocumentComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/order-document/dialog-material-and-services/dialog-material-and-services.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/order-document/dialog-material-and-services/dialog-material-and-services.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOnlyForm }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".material\" | translate }}</label>\r\n\r\n      <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: !newObj }\">\r\n        <div class=\"form-control-data\" (click)=\"openMaterialDialog()\">\r\n          {{ obj.pnText }}\r\n        </div>\r\n\r\n        <div *ngIf=\"obj.pnText && newObj\" class=\"btn-clear-wrapper\">\r\n          <i\r\n            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n            aria-hidden=\"true\"\r\n            (click)=\"obj.pnText = undefined\"\r\n          ></i>\r\n        </div>\r\n        <div *ngIf=\"newObj\" class=\"btn-search-wrapper\">\r\n          <i\r\n            *ngIf=\"!isReadOnlyForm\"\r\n            class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n            aria-hidden=\"true\"\r\n            (click)=\"openMaterialDialog()\"\r\n          ></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!!obj.pnText && snVisibility\" class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".serialNumber\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"obj.serialNumber\" maxlength=\"50\" [disabled]=\"isReadOnlyForm\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!!obj.pnText && bnVisibility\" class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".batchNumber\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"obj.batchNumber\" maxlength=\"50\" [disabled]=\"isReadOnlyForm\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!!obj.pnText\" class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".quantity\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          pKeyFilter=\"int\"\r\n          maxlength=\"37\"\r\n          class=\"aw-input\"\r\n          [(ngModel)]=\"obj.quantity\"\r\n          [disabled]=\"isReadOnlyForm\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"!!obj.pnText\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".warehouse\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          [options]=\"warehouses\"\r\n          [(ngModel)]=\"obj.warehouse\"\r\n          [disabled]=\"isReadOnlyForm\"\r\n          [showClear]=\"true\"\r\n          placeholder=\"&nbsp;\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"!!obj.pnText\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".partStatus\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"obj.partStatus\" disabled />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"category !== '2-req'\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".price\" | translate }} ({{ localCurrency }})</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input\r\n          #price=\"ngModel\"\r\n          type=\"text\"\r\n          [pKeyFilter]=\"inputValidationService.validatorOfMoney()\"\r\n          [pValidateOnly]=\"true\"\r\n          maxlength=\"37\"\r\n          class=\"aw-input\"\r\n          [(ngModel)]=\"obj.price\"\r\n          [disabled]=\"isReadOnlyForm\"\r\n        />\r\n        <p-message\r\n          *ngIf=\"price.invalid && (price.dirty || price.touched)\"\r\n          severity=\"error\"\r\n          [text]=\"inputValidationService.formatOfMoney()\"\r\n        ></p-message>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"category !== '2-req'\">\r\n      <label class=\"form-label\"\r\n        >{{ getComponentName() + \".productionLeadTime\" | translate }} ({{\r\n          getComponentName() + \".days\" | translate\r\n        }})</label\r\n      >\r\n\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          pKeyFilter=\"int\"\r\n          maxlength=\"10\"\r\n          class=\"aw-input\"\r\n          [(ngModel)]=\"obj.productionLeadTime\"\r\n          [disabled]=\"isReadOnlyForm\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".byQuotation\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-checkbox\r\n          class=\"aw-checkbox\"\r\n          binary=\"true\"\r\n          [(ngModel)]=\"obj.byQuotation\"\r\n          [disabled]=\"isReadOnlyForm\"\r\n        ></p-checkbox>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" *ngIf=\"category !== '2-req'\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".discountPercent\" | translate }} (%)</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          pKeyFilter=\"int\"\r\n          class=\"aw-input\"\r\n          [(ngModel)]=\"obj.discountPercent\"\r\n          [disabled]=\"isReadOnlyForm\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span *ngIf=\"!isReadOnlyForm\">{{ \"global.cancel\" | translate }}</span>\r\n      <span *ngIf=\"isReadOnlyForm\">{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOnlyForm\"\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"associate()\"\r\n      [disabled]=\"!obj.pnText\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-material\r\n  *ngIf=\"showQuickSearchMaterialPopup\"\r\n  [(display)]=\"showQuickSearchMaterialPopup\"\r\n  [material-code]=\"pnCode\"\r\n  (onSelected)=\"setSelectedMaterial($event)\"\r\n></aw-dialog-search-material>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/order-document/dialog-material-and-services/dialog-material-and-services.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/order-document/dialog-material-and-services/dialog-material-and-services.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: DialogMaterialAndServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMaterialAndServicesComponent", function() { return DialogMaterialAndServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/input-validation.service */ "./src/app/shared/services/input-validation.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _form_order_document_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/order-document-form.service */ "./src/app/main/logistics/order-document/form/order-document-form.service.ts");
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






var DialogMaterialAndServicesComponent = /** @class */ (function (_super) {
    __extends(DialogMaterialAndServicesComponent, _super);
    function DialogMaterialAndServicesComponent(inputValidationService, orderDocumentFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'DialogMaterialAndServicesComponent') || this;
        _this.inputValidationService = inputValidationService;
        _this.orderDocumentFormService = orderDocumentFormService;
        _this.init();
        _this.getLocalCurrency();
        return _this;
    }
    DialogMaterialAndServicesComponent.prototype.ngOnInit = function () {
        if (!this.obj) {
            this.obj = {
                price: 0,
                quantity: 0,
                productionLeadTime: 0,
                discountPercent: 0,
                bidtStockMvtDTO: {}
            };
            this.pnCode = undefined;
        }
        else {
            this.pnCode = !!this.obj.bidtStockMvtDTO ? this.obj.bidtStockMvtDTO.birePnPnCode : undefined;
            if (!!this.pnCode) {
                this.setSnBnVisibility(this.pnCode);
                this.loadWarehouses();
            }
        }
    };
    DialogMaterialAndServicesComponent.prototype.init = function () {
        this.byQuotation = undefined;
        this.showQuickSearchMaterialPopup = false;
        this.warehouses = [];
        this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.snVisibility = false;
        this.bnVisibility = false;
        this.localCurrency = undefined;
    };
    DialogMaterialAndServicesComponent.prototype.openMaterialDialog = function () {
        if (this.newObj) {
            this.showQuickSearchMaterialPopup = true;
        }
    };
    DialogMaterialAndServicesComponent.prototype.setSelectedMaterial = function (selectedObject) {
        if (selectedObject) {
            this.obj.pnText = selectedObject.pnCode;
            this.obj.materialName = selectedObject.articleDesignation;
            this.pnCode = selectedObject.pnCode;
            if (!!this.obj.bidtStockMvtDTO) {
                this.obj.bidtStockMvtDTO.birePnPnCode = selectedObject.pnCode;
            }
            if (!!this.pnCode) {
                this.setSnBnVisibility(this.pnCode);
            }
            this.loadWarehouses();
        }
        this.showQuickSearchMaterialPopup = false;
    };
    DialogMaterialAndServicesComponent.prototype.loadWarehouses = function () {
        var _this = this;
        if (!!this.pnCode) {
            this.orderDocumentFormService.displayWarehouse(this.pnCode).subscribe(function (results) {
                _this.warehouses = results || [];
                if (!_this.newObj && !!_this.obj.warehouse) {
                    _this.obj.warehouse = _this.warehouses.filter(function (ware) { return ware.label === _this.obj.warehouse; })[0].value;
                }
            });
        }
    };
    DialogMaterialAndServicesComponent.prototype.associate = function () {
        this.updateBidtStockMvtDTO();
        if (this.newObj) {
            this.onCreate.emit(this.obj);
            this.display = false;
        }
        else {
            this.onUpdate.emit(this.obj);
            this.display = false;
        }
    };
    DialogMaterialAndServicesComponent.prototype.setSnBnVisibility = function (pnCode) {
        var _this = this;
        var input = {
            pnCode: pnCode
        };
        this.orderDocumentFormService.findBirePn(input).subscribe(function (result) {
            if (!!result &&
                (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].PN_TRACEABILITY_BY_SN === result.traceability ||
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].PN_TRACEABILITY_BY_PACKAGING_BATCH_AND_SN === result.traceability)) {
                _this.snVisibility = true;
            }
            if (!!result &&
                (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].PN_TRACEABILITY_BY_BATCH === result.traceability ||
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].PN_TRACEABILITY_BY_PACKAGING_BATCH_AND_SN === result.traceability)) {
                _this.bnVisibility = true;
            }
        });
    };
    DialogMaterialAndServicesComponent.prototype.updateBidtStockMvtDTO = function () {
        var _this = this;
        if (!!this.obj.bidtStockMvtDTO) {
            this.obj.bidtStockMvtDTO = {
                birePnPnCode: this.pnCode,
                stockMvtSn: this.obj.serialNumber,
                stockMvtBatchNumber: this.obj.batchNumber,
                numberOfDays: this.obj.productionLeadTime === 0 ? undefined : this.obj.productionLeadTime,
                id: this.obj.id
            };
            if (!!this.obj.quantity) {
                this.obj.bidtStockMvtDTO.stockMvtQuantity = "" + this.obj.quantity;
            }
            if (!!this.obj.price) {
                this.obj.bidtStockMvtDTO.priceValue = "" + this.obj.price;
            }
            if (!!this.obj.warehouse) {
                var radix = 10;
                this.obj.bidtStockMvtDTO.bidtWarehouseId = Number.parseInt(this.obj.warehouse, radix);
                this.obj.warehouse = this.warehouses.filter(function (ware) { return ware.value === _this.obj.warehouse; })[0].label;
            }
            if (!!this.obj.discountPercent) {
                this.obj.bidtStockMvtDTO.discountPercentValue = "" + this.obj.discountPercent;
            }
            if (!!this.obj.byQuotation) {
                this.obj.bidtStockMvtDTO.byQuotation = this.obj.byQuotation ? 1 : 0;
            }
            if (this.obj.bidtStockMvtDTO.id === null || this.obj.bidtStockMvtDTO.id === undefined) {
                this.obj.bidtStockMvtDTO.id = Math.random();
            }
            this.obj.currency = this.localCurrency;
            this.obj.totalPrice = 0;
            this.obj.discountValue = 0;
            this.obj.priceAfterDiscount = 0;
            this.obj.productionLeadTime = this.obj.productionLeadTime === 0 ? undefined : this.obj.productionLeadTime;
        }
    };
    DialogMaterialAndServicesComponent.prototype.getLocalCurrency = function () {
        var _this = this;
        this.orderDocumentFormService.getLocalCurrency().subscribe(function (res) {
            _this.localCurrency = res;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogMaterialAndServicesComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogMaterialAndServicesComponent.prototype, "obj", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogMaterialAndServicesComponent.prototype, "displayChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogMaterialAndServicesComponent.prototype, "isReadOnlyForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogMaterialAndServicesComponent.prototype, "newObj", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogMaterialAndServicesComponent.prototype, "onCreate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogMaterialAndServicesComponent.prototype, "onUpdate", void 0);
    DialogMaterialAndServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-material-and-services',
            template: __webpack_require__(/*! ./dialog-material-and-services.component.html */ "./src/app/main/logistics/order-document/dialog-material-and-services/dialog-material-and-services.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_3__["InputValidationService"],
            _form_order_document_form_service__WEBPACK_IMPORTED_MODULE_5__["OrderDocumentFormService"]])
    ], DialogMaterialAndServicesComponent);
    return DialogMaterialAndServicesComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/order-document/form/order-document-form.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/order-document/form/order-document-form.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aw-component-sidebar\r\n  *ngIf=\"!isCreateOpenMode\"\r\n  [toc]=\"toc\"\r\n  [(visibility)]=\"rightSidebarVisibility\"\r\n  [ngClass]=\"{ collapsed: rightSidebarCollapsed, expanded: rightSidebarExpanded }\"\r\n></aw-component-sidebar>\r\n\r\n<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          *ngIf=\"!isCreateOpenMode && componentData && componentData.objectId\"\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div *ngIf=\"!isCreateOpenMode && componentData && componentData.objectId\" class=\"page-subtitle\">\r\n        {{ pageSubtitle }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <p-splitButton\r\n      *ngIf=\"\r\n        mainData.prCategory !== awPropertiesConstants.PURCHASE_CATEGORY_CONTRACT &&\r\n        goodsMovementNameVisible() &&\r\n        materialsAndServicesTable.length > 0\r\n      \"\r\n      class=\"aw-split-btn aw-table-action\"\r\n      label=\"{{ getComponentName() + '.navigate' | translate }}\"\r\n      [model]=\"navigationLinkList\"\r\n    ></p-splitButton>\r\n\r\n    <button *ngIf=\"isReadOpenMode && !isCreateOpenMode\" type=\"button\" mat-raised-button (click)=\"reloadOrderDoc()\">\r\n      {{ \"global.refresh\" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf=\"isReadOpenMode && hasUpdateAccessRight\" type=\"button\" mat-raised-button (click)=\"editOrderDoc()\">\r\n      {{ \"global.edit\" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode && !isCreateOpenMode\" type=\"button\" mat-raised-button (click)=\"cancelOrderDoc()\">\r\n      {{ \"global.cancel\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      class=\"btn-with-spinner\"\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"saveOrderDoc()\"\r\n    >\r\n      <span class=\"lds-hourglass\" *ngIf=\"showSaveSpinner\"></span>\r\n      {{ \"global.save\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div #mainInformationAnchor class=\"grid-cell--12\" (click)=\"selectPageTocEntry(component.MAIN_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: !isCreateOpenMode && isPageTocEntrySelected(component.MAIN_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"page.mainData\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"form-group flex--2\">\r\n                <label class=\"form-label\"> {{ componentData.componentId + \".prCode\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"mainData.prCode\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group flex--2\">\r\n                <label class=\"form-label\"> {{ componentData.componentId + \".prName\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"aw-input\"\r\n                    [(ngModel)]=\"mainData.prName\"\r\n                    maxlength=\"100\"\r\n                    [disabled]=\"isReadOpenMode\"\r\n                  />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group flex--2\">\r\n                <label class=\"form-label\">{{ componentData.componentId + \".prDescription\" | translate }}</label>\r\n\r\n                <div class=\"form-control\">\r\n                  <textarea\r\n                    pInputTextarea\r\n                    [rows]=\"3\"\r\n                    class=\"aw-textarea\"\r\n                    maxlength=\"40\"\r\n                    [(ngModel)]=\"mainData.prDescription\"\r\n                    [disabled]=\"isReadOpenMode\"\r\n                  ></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"form-group flex--2\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                <label class=\"form-label\">{{ componentData.componentId + \".prCategory\" | translate }}</label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [showClear]=\"true\"\r\n                    [disabled]=\"!isCreateOpenMode\"\r\n                    [options]=\"categoryOptions\"\r\n                    [(ngModel)]=\"mainData.prCategory\"\r\n                    (onChange)=\"loadTypeOptions()\"\r\n                    placeholder=\"&nbsp;\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group flex--2\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                <label class=\"form-label\">{{ componentData.componentId + \".prType\" | translate }}</label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [showClear]=\"true\"\r\n                    [disabled]=\"!isCreateOpenMode\"\r\n                    [options]=\"typeOptions\"\r\n                    [(ngModel)]=\"mainData.prType\"\r\n                    placeholder=\"&nbsp;\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group flex--2\">\r\n                <label *ngIf=\"!isCreateOpenMode\" class=\"form-label\">{{\r\n                  componentData.componentId + \".prStatus\" | translate\r\n                }}</label>\r\n\r\n                <div *ngIf=\"!isCreateOpenMode\" class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [showClear]=\"true\"\r\n                    [options]=\"statusOptions\"\r\n                    [(ngModel)]=\"mainData.prStatus\"\r\n                    placeholder=\"&nbsp;\"\r\n                    [disabled]=\"isReadOpenMode\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div\r\n          #additionalInformationAnchor\r\n          class=\"grid-cell--12\"\r\n          (click)=\"selectPageTocEntry(component.ADDITIONAL_ANCHOR_ID)\"\r\n        >\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: !isCreateOpenMode && isPageTocEntrySelected(component.ADDITIONAL_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"page.additionalData\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"advanced-criteria\" style=\"background-color:white\">\r\n                  <div class=\"grid-row\">\r\n                    <div class=\"grid-cell--3\">\r\n                      <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                        <div class=\"section\">\r\n                          <h4 class=\"section-title\">\r\n                            {{ componentData.componentId + \".superiorDocument\" | translate }}\r\n                          </h4>\r\n                          <div class=\"section-content\">\r\n                            <div class=\"row\">\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{ componentData.componentId + \".code\" | translate }}</label>\r\n\r\n                                <div\r\n                                  class=\"form-control form-control-with-modal\"\r\n                                  [ngClass]=\"{ disabled: isReadOpenMode }\"\r\n                                >\r\n                                  <div class=\"form-control-data\" (click)=\"!isReadOpenMode && searchSuperiorDocument()\">\r\n                                    {{ mainData.superiorDocument }}\r\n                                  </div>\r\n\r\n                                  <!-- <div *ngIf=\"mainData.superiorDocument\" class=\"btn-clear-wrapper\">\r\n                                    <i\r\n                                      class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                                      aria-hidden=\"true\"\r\n                                      (click)=\"mainData.superiorDocument = undefined\"\r\n                                    ></i>\r\n                                  </div> -->\r\n                                  <div class=\"btn-search-wrapper\">\r\n                                    <i\r\n                                      *ngIf=\"!isReadOpenMode\"\r\n                                      class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                                      aria-hidden=\"true\"\r\n                                      (click)=\"searchSuperiorDocument()\"\r\n                                    ></i>\r\n                                  </div>\r\n                                  <div *ngIf=\"!!mainData.superiorDocument\" class=\"btn-search-wrapper\">\r\n                                    <i\r\n                                      *ngIf=\"!isReadOpenMode\"\r\n                                      class=\"fa fa-fw fa-external-link aw-icon aw-icon-with-border\"\r\n                                      aria-hidden=\"true\"\r\n                                      (click)=\"goToDocument(superiorId)\"\r\n                                    ></i>\r\n                                  </div>\r\n                                  <div *ngIf=\"!!mainData.superiorDocument\" class=\"btn-search-wrapper\">\r\n                                    <i\r\n                                      *ngIf=\"!isReadOpenMode\"\r\n                                      class=\"fa fa-fw fa-trash aw-icon\"\r\n                                      aria-hidden=\"true\"\r\n                                      (click)=\"\r\n                                        mainData.superiorDocument = undefined;\r\n                                        mainData.bidtPurchaseRequestId = undefined;\r\n                                        superiorId = undefined\r\n                                      \"\r\n                                    ></i>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-row\">\r\n                    <div class=\"grid-cell--3\">\r\n                      <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                        <div class=\"section\">\r\n                          <h4 class=\"section-title\">{{ componentData.componentId + \".dates\" | translate }}</h4>\r\n                          <div class=\"grid-cell-content\">\r\n                            <div class=\"row\">\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\r\n                                  componentData.componentId + \".creationDate\" | translate\r\n                                }}</label>\r\n                                <div class=\"form-control\">\r\n                                  <p-calendar\r\n                                    showButtonBar=\"true\"\r\n                                    [monthNavigator]=\"true\"\r\n                                    [yearNavigator]=\"true\"\r\n                                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                                    class=\"aw-calendar\"\r\n                                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                                    [locale]=\"sessionService.calendarFormat\"\r\n                                    [(ngModel)]=\"mainData.prCreationDate\"\r\n                                    [disabled]=\"isReadOpenMode\"\r\n                                  ></p-calendar>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div\r\n                              *ngIf=\"mainData.prCategory === awPropertiesConstants.PURCHASE_CATEGORY_ORDER\"\r\n                              class=\"row\"\r\n                            >\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\r\n                                  componentData.componentId + \".receptionDate\" | translate\r\n                                }}</label>\r\n                                <div class=\"form-control\">\r\n                                  <p-calendar\r\n                                    showButtonBar=\"true\"\r\n                                    [monthNavigator]=\"true\"\r\n                                    [yearNavigator]=\"true\"\r\n                                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                                    class=\"aw-calendar\"\r\n                                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                                    [locale]=\"sessionService.calendarFormat\"\r\n                                    [(ngModel)]=\"mainData.prReceptionDate\"\r\n                                    [disabled]=\"isReadOpenMode\"\r\n                                  ></p-calendar>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div\r\n                              *ngIf=\"\r\n                                mainData.prCategory === awPropertiesConstants.PURCHASE_CATEGORY_CONTRACT ||\r\n                                mainData.prCategory === awPropertiesConstants.PURCHASE_CATEGORY_QUOTATION\r\n                              \"\r\n                              class=\"row\"\r\n                            >\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\r\n                                  componentData.componentId + \".startDate\" | translate\r\n                                }}</label>\r\n                                <div class=\"form-control\">\r\n                                  <p-calendar\r\n                                    showButtonBar=\"true\"\r\n                                    [monthNavigator]=\"true\"\r\n                                    [yearNavigator]=\"true\"\r\n                                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                                    class=\"aw-calendar\"\r\n                                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                                    [locale]=\"sessionService.calendarFormat\"\r\n                                    [(ngModel)]=\"mainData.prStartDate\"\r\n                                    [disabled]=\"isReadOpenMode\"\r\n                                  ></p-calendar>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div\r\n                              *ngIf=\"\r\n                                mainData.prCategory === awPropertiesConstants.PURCHASE_CATEGORY_CONTRACT ||\r\n                                mainData.prCategory === awPropertiesConstants.PURCHASE_CATEGORY_QUOTATION\r\n                              \"\r\n                              class=\"row\"\r\n                            >\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\r\n                                  componentData.componentId + \".endDate\" | translate\r\n                                }}</label>\r\n                                <div class=\"form-control\">\r\n                                  <p-calendar\r\n                                    showButtonBar=\"true\"\r\n                                    [monthNavigator]=\"true\"\r\n                                    [yearNavigator]=\"true\"\r\n                                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                                    class=\"aw-calendar\"\r\n                                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                                    [locale]=\"sessionService.calendarFormat\"\r\n                                    [(ngModel)]=\"mainData.prEndDate\"\r\n                                    [disabled]=\"isReadOpenMode\"\r\n                                  ></p-calendar>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"grid-cell--3\">\r\n                      <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                        <div class=\"section\">\r\n                          <h4 class=\"section-title\">{{ componentData.componentId + \".supplier\" | translate }}</h4>\r\n                          <div class=\"section-content\">\r\n                            <div class=\"row\">\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\r\n                                  componentData.componentId + \".supplier\" | translate\r\n                                }}</label>\r\n                                <div class=\"form-control\">\r\n                                  <p-dropdown\r\n                                    class=\"aw-dropdown fixed-width\"\r\n                                    [showClear]=\"true\"\r\n                                    placeholder=\"&nbsp;\"\r\n                                    [options]=\"codeOptions\"\r\n                                    [(ngModel)]=\"mainData.bidoCustomerCustomerCode\"\r\n                                    [disabled]=\"isReadOpenMode\"\r\n                                  ></p-dropdown>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\"\r\n                                  >{{ componentData.componentId + \".docNo\" | translate }}&#176;</label\r\n                                >\r\n                                <div class=\"form-control\">\r\n                                  <input\r\n                                    type=\"text\"\r\n                                    class=\"aw-input\"\r\n                                    [(ngModel)]=\"mainData.supplierDocumentNumber\"\r\n                                    [disabled]=\"isReadOpenMode\"\r\n                                    maxlength=\"50\"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div\r\n                      *ngIf=\"mainData.prCategory !== awPropertiesConstants.PURCHASE_CATEGORY_REQUEST\"\r\n                      class=\"grid-cell--3\"\r\n                    >\r\n                      <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                        <div class=\"section\">\r\n                          <h4 class=\"section-title\">{{ componentData.componentId + \".price\" | translate }}</h4>\r\n                          <div class=\"section-content\">\r\n                            <div class=\"row\">\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{ componentData.componentId + \".price\" | translate }}</label>\r\n\r\n                                <div *ngIf=\"!isReadOpenMode\" class=\"form-control form-control-with-btn\">\r\n                                  <input\r\n                                    type=\"text\"\r\n                                    class=\"aw-input\"\r\n                                    [(ngModel)]=\"mainData.prPriceValue\"\r\n                                    [disabled]=\"disablePrice\"\r\n                                    maxlength=\"37\"\r\n                                    pKeyFilter=\"int\"\r\n                                  />\r\n                                  <i\r\n                                    *ngIf=\"!isReadOpenMode\"\r\n                                    class=\"fa fa-fw fa-pencil aw-icon aw-icon-with-border search-criteria-action\"\r\n                                    aria-hidden=\"true\"\r\n                                    (click)=\"disablePrice = false\"\r\n                                    pTooltip=\"{{ componentData.componentId + '.editPrice' | translate }}\"\r\n                                  ></i>\r\n                                  <i\r\n                                    *ngIf=\"!isReadOpenMode\"\r\n                                    class=\"fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action\"\r\n                                    aria-hidden=\"true\"\r\n                                    (click)=\"resetPrice()\"\r\n                                    pTooltip=\"{{ componentData.componentId + '.resetPrice' | translate }}\"\r\n                                  ></i>\r\n                                </div>\r\n\r\n                                <div style=\"padding-top: 10px\" class=\"form-control\" *ngIf=\"isReadOpenMode\">\r\n                                  {{ mainData.prPriceValue }}\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">\r\n                                  {{ componentData.componentId + \".currency\" | translate }}\r\n                                </label>\r\n\r\n                                <div class=\"form-control\">\r\n                                  <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"mainData.prPriceUnit\" />\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div #msAnchor class=\"grid-cell--12\" (click)=\"selectPageTocEntry(component.MS_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: isPageTocEntrySelected(component.MS_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".materialsAndServices\" | translate }} ({{\r\n                    materialsAndServicesTable ? materialsAndServicesTable.length : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #pTableMaterialsAndServices\r\n                class=\"aw-table2\"\r\n                [columns]=\"msTableCols\"\r\n                [value]=\"materialsAndServicesTable\"\r\n                [(selection)]=\"selectedMaterials\"\r\n                [scrollable]=\"true\"\r\n                dataKey=\"_dataKey\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isMaterialAndServicesTableLoading\">&nbsp;</span>\r\n\r\n                  <div *ngIf=\"isMaterialAndServicesTableLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedMaterials.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableDecompositionGlobalFilter\r\n                        type=\"text\"\r\n                        class=\"aw-table-global-filter-input\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"pTableMaterialsAndServices.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <!-- <button\r\n                        *ngIf=\"logisticVisibility() && !isReadOpenMode && selectedMaterials.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"goToStockMovements()\"\r\n                      >\r\n                        {{ componentData.componentId + \".stockMovements\" | translate }}\r\n                      </button> -->\r\n\r\n                      <button\r\n                        *ngIf=\"\r\n                          !isReadOpenMode && materialsAndServicesTable.length > 0 && mainData.bidoCustomerCustomerCode\r\n                        \"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"updateConditions()\"\r\n                      >\r\n                        {{ componentData.componentId + \".updateConditions\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && selectedMaterials.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"deleteMaterials()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"\r\n                          mainData.prCategory !== awPropertiesConstants.PURCHASE_CATEGORY_CONTRACT &&\r\n                          selectedMaterials.length === 0 &&\r\n                          goodsMovementNameVisible() &&\r\n                          materialsAndServicesTable.length > 0\r\n                        \"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"goToGoodsMovement()\"\r\n                      >\r\n                        {{ componentData.componentId + \".goToGoodsMovement\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"\r\n                          selectedMaterials.length === 0 &&\r\n                          subcontractingMovementsVisible() &&\r\n                          materialsAndServicesTable.length > 0\r\n                        \"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"createSubcontractingMovements()\"\r\n                      >\r\n                        {{ componentData.componentId + \".createSubcontractingMovements\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && selectedMaterials.length === 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"createMaterial()\"\r\n                      >\r\n                        {{ \"global.add\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && selectedMaterials.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"editMaterial()\"\r\n                      >\r\n                        {{ \"global.edit\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedMaterials.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openMaterial()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col *ngIf=\"!isReadOpenMode\" class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                    <col class=\"row-expand-wrapper\" />\r\n                    <col class=\"row-action-wrapper\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th *ngIf=\"!isReadOpenMode\" class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                    <th class=\"row-expand-wrapper\"></th>\r\n                    <th class=\"row-action-wrapper\"></th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td *ngIf=\"!isReadOpenMode\" class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <span *ngSwitchCase=\"'pnText'\">\r\n                        <a (click)=\"goToMaterial(rowData)\">\r\n                          <span title=\"{{ rowData[col.field] }}\">{{ rowData[col.field] }}</span>\r\n                        </a>\r\n                      </span>\r\n\r\n                      <a *ngSwitchCase=\"'serialNumber'\" (click)=\"openEquipmentForm(rowData)\">\r\n                        <span>{{ rowData[col.field] }}</span>\r\n                      </a>\r\n\r\n                      <span *ngSwitchCase=\"'warehouse'\">\r\n                        <span title=\"{{ rowData[col.field] }}\">{{ rowData[col.field] }}</span>\r\n                      </span>\r\n\r\n                      <a *ngSwitchCase=\"'consecutiveDocument'\" (click)=\"openConsecutiveDocument(rowData)\">\r\n                        <span title=\"{{ rowData[col.field] }}\">{{ rowData[col.field] }}</span>\r\n                      </a>\r\n\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n\r\n                    <td class=\"row-expand-wrapper\" [pRowToggler]=\"rowData\">\r\n                      <i\r\n                        class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n                        [ngClass]=\"rowData._expand ? 'fa-minus' : 'fa-plus'\"\r\n                        aria-hidden=\"true\"\r\n                        pTooltip=\"{{ 'global.showTableRowDetails' | translate }}\"\r\n                        tooltipPosition=\"top\"\r\n                        (click)=\"toggleMaterialAndServicesExpand(rowData)\"\r\n                      ></i>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\r\n                  <tr class=\"row-expanded\" *ngIf=\"rowData._expand\">\r\n                    <td [attr.colspan]=\"columns.length + 2\">\r\n                      <div *ngIf=\"mainData.prCategory !== awPropertiesConstants.PURCHASE_CATEGORY_REQUEST\" class=\"row\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".price\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              *ngIf=\"rowData.price !== 'null'\"\r\n                              class=\"aw-input\"\r\n                              type=\"text\"\r\n                              [(ngModel)]=\"rowData.price\"\r\n                              [disabled]=\"true\"\r\n                            />\r\n                            <input *ngIf=\"rowData.price === 'null'\" class=\"aw-input\" type=\"text\" disabled />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".discountPercent\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              *ngIf=\"rowData.discountPercent !== 'null'\"\r\n                              class=\"aw-input\"\r\n                              type=\"text\"\r\n                              [(ngModel)]=\"rowData.discountPercent\"\r\n                              [disabled]=\"true\"\r\n                            />\r\n                            <input *ngIf=\"rowData.discountPercent === 'null'\" class=\"aw-input\" type=\"text\" disabled />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".discountValue\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              *ngIf=\"rowData.discountValue !== 'null'\"\r\n                              class=\"aw-input\"\r\n                              type=\"text\"\r\n                              [(ngModel)]=\"rowData.discountValue\"\r\n                              [disabled]=\"true\"\r\n                            />\r\n                            <input *ngIf=\"rowData.discountValue === 'null'\" class=\"aw-input\" type=\"text\" disabled />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".priceAfterDiscount\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              *ngIf=\"rowData.priceAfterDiscount !== 'null'\"\r\n                              class=\"aw-input\"\r\n                              type=\"text\"\r\n                              [(ngModel)]=\"rowData.priceAfterDiscount\"\r\n                              [disabled]=\"true\"\r\n                            />\r\n                            <input\r\n                              *ngIf=\"rowData.priceAfterDiscount === 'null'\"\r\n                              class=\"aw-input\"\r\n                              type=\"text\"\r\n                              disabled\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngIf=\"mainData.prCategory !== awPropertiesConstants.PURCHASE_CATEGORY_CONTRACT\" class=\"row\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".warehouse\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              *ngIf=\"rowData.warehouse !== 'null'\"\r\n                              class=\"aw-input\"\r\n                              type=\"text\"\r\n                              [(ngModel)]=\"rowData.warehouse\"\r\n                              [disabled]=\"true\"\r\n                            />\r\n                            <input *ngIf=\"rowData.warehouse === 'null'\" class=\"aw-input\" type=\"text\" disabled />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".partStatus\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              *ngIf=\"rowData.partStatus !== 'null'\"\r\n                              class=\"aw-input\"\r\n                              type=\"text\"\r\n                              [(ngModel)]=\"rowData.partStatus\"\r\n                              [disabled]=\"true\"\r\n                            />\r\n                            <input *ngIf=\"rowData.partStatus === 'null'\" class=\"aw-input\" type=\"text\" disabled />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".consecutiveDocument\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              *ngIf=\"rowData.consecutiveDocument !== 'null'\"\r\n                              class=\"aw-input\"\r\n                              type=\"text\"\r\n                              [(ngModel)]=\"rowData.consecutiveDocument\"\r\n                              [disabled]=\"true\"\r\n                            />\r\n                            <input\r\n                              *ngIf=\"rowData.consecutiveDocument === 'null'\"\r\n                              class=\"aw-input\"\r\n                              type=\"text\"\r\n                              disabled\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\"></div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div [hidden]=\"!mainData.prCode\" class=\"grid-row\">\r\n        <div #consecutiveAnchor class=\"grid-cell--12\" (click)=\"selectPageTocEntry(component.CONSECUTIVE_ANCHOR_ID)\">\r\n          <div\r\n            *ngIf=\"mainData.prCode\"\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: isPageTocEntrySelected(component.CONSECUTIVE_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".consecutiveDocuments\" | translate }} ({{\r\n                    consecutiveDocumentsTable ? consecutiveDocumentsTable.length : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"enableDocumentCreation() && !isReadOpenMode\" class=\"grid-cell-content\" style=\"width: 50%\">\r\n              <div class=\"form-group flex--2\">\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [options]=\"categoryOptions\"\r\n                    [(ngModel)]=\"consecutiveCategory\"\r\n                    (onChange)=\"loadConsecutiveTypeOptions()\"\r\n                    placeholder=\"&nbsp;\"\r\n                    appendTo=\"body\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group flex--2\">\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [showClear]=\"true\"\r\n                    [options]=\"consecutiveTypeOptions\"\r\n                    [(ngModel)]=\"consecutiveType\"\r\n                    placeholder=\"&nbsp;\"\r\n                    appendTo=\"body\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group flex--1\">\r\n                <button type=\"button\" mat-raised-button (click)=\"createConsecutiveDocuments()\">\r\n                  {{ componentData.componentId + \".createDocument\" | translate }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <div class=\"section\">\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <p-table\r\n                      [resizableColumns]=\"true\"\r\n                      #pTableConsecutiveDocuments\r\n                      class=\"aw-table2\"\r\n                      [columns]=\"consecutiveDocumentsTableCols\"\r\n                      [value]=\"consecutiveDocumentsTable\"\r\n                      [(selection)]=\"selectedConsecutiveDocuments\"\r\n                      [scrollable]=\"true\"\r\n                    >\r\n                      <ng-template pTemplate=\"emptymessage\">\r\n                        <span *ngIf=\"!isConsecutiveDocumentsLoading\">&nbsp;</span>\r\n\r\n                        <div *ngIf=\"isConsecutiveDocumentsLoading\" class=\"aw-table-loading-indicator\">\r\n                          <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                          <div class=\"lds-hourglass\"></div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"caption\">\r\n                        <div\r\n                          class=\"aw-table-header\"\r\n                          [ngClass]=\"{ 'rows-selected': selectedConsecutiveDocuments.length > 0 }\"\r\n                        >\r\n                          <div class=\"aw-table-global-filter\">\r\n                            <label class=\"aw-table-global-filter-label\">\r\n                              <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableConsecutiveDocumentseGlobalFilter\r\n                              type=\"text\"\r\n                              class=\"aw-table-global-filter-input\"\r\n                              placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                              (input)=\"pTableConsecutiveDocuments.filterGlobal($event.target.value, 'contains')\"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class=\"aw-table-actions\">\r\n                            <button type=\"button\" mat-raised-button (click)=\"reloadConsecutiveDocuments()\">\r\n                              {{ \"global.reload\" | translate }}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"colgroup\" let-columns>\r\n                        <colgroup>\r\n                          <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"header\" let-columns>\r\n                        <tr>\r\n                          <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                            {{ componentData.componentId + \".\" + col.field | translate }}\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                        <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                          <td\r\n                            *ngFor=\"let col of columns\"\r\n                            [ngSwitch]=\"col.field\"\r\n                            [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                          >\r\n                            <span *ngSwitchCase=\"'code'\">\r\n                              <a (click)=\"openSelectedDocuemnt(rowData)\">{{ rowData[col.field] }}</a>\r\n                            </span>\r\n                            <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div [hidden]=\"!mainData.prCode\" class=\"grid-row\">\r\n      <div #documentAnchor class=\"grid-cell--12\" (click)=\"selectPageTocEntry(component.DOCUMENTS_ANCHOR_ID)\">\r\n        <div\r\n          class=\"grid-cell grid-cell--container\"\r\n          *ngIf=\"mainData.prCode\"\r\n          [ngClass]=\"{ active: isPageTocEntrySelected(component.DOCUMENTS_ANCHOR_ID) }\"\r\n        >\r\n          <div class=\"grid-cell-header\">\r\n            <div class=\"grid-cell-title-container\">\r\n              <h3 class=\"grid-cell-title\">\r\n                {{ \"global.documents\" | translate }}\r\n                ({{ documentTable ? documentTable.length : 0 }})\r\n              </h3>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"grid-cell-content\">\r\n            <p-table\r\n              [resizableColumns]=\"true\"\r\n              #ptableDocument\r\n              class=\"aw-table2\"\r\n              [columns]=\"documentTableCols\"\r\n              [value]=\"documentTable\"\r\n              [(selection)]=\"selectedDocuments\"\r\n              dataKey=\"docName\"\r\n              [scrollable]=\"true\"\r\n            >\r\n              <ng-template pTemplate=\"emptymessage\">\r\n                <span *ngIf=\"!isLoadingDocumentTable\"> &nbsp;</span>\r\n\r\n                <div *ngIf=\"isLoadingDocumentTable\" class=\"aw-table-loading-indicator\">\r\n                  <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                  <div class=\"lds-hourglass\"></div>\r\n                </div>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"caption\">\r\n                <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedDocuments.length > 0 }\">\r\n                  <div class=\"aw-table-global-filter\">\r\n                    <label class=\"aw-table-global-filter-label\">\r\n                      <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                    </label>\r\n\r\n                    <input\r\n                      #ptableDocumentGlobalFilter\r\n                      class=\"aw-table-global-filter-input\"\r\n                      type=\"text\"\r\n                      placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                      (input)=\"ptableDocument.filterGlobal($event.target.value, 'contains')\"\r\n                    />\r\n                  </div>\r\n\r\n                  <div class=\"aw-table-actions\">\r\n                    <button\r\n                      *ngIf=\"selectedDocuments.length > 0\"\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      (click)=\"downloadFiles()\"\r\n                    >\r\n                      {{ \"global.download\" | translate }}\r\n                    </button>\r\n\r\n                    <button\r\n                      *ngIf=\"!isReadOpenMode && selectedDocuments.length > 0\"\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      color=\"warn\"\r\n                      (click)=\"deleteDocuments()\"\r\n                    >\r\n                      {{ \"global.delete\" | translate }}\r\n                    </button>\r\n\r\n                    <button\r\n                      *ngIf=\"!isReadOpenMode && selectedDocuments.length === 1\"\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      (click)=\"editDocument()\"\r\n                    >\r\n                      {{ \"global.edit\" | translate }}\r\n                    </button>\r\n\r\n                    <button\r\n                      *ngIf=\"selectedDocuments.length === 1\"\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      (click)=\"openDocument()\"\r\n                    >\r\n                      {{ \"global.open\" | translate }}\r\n                    </button>\r\n\r\n                    <p-fileUpload\r\n                      #fileUploader\r\n                      *ngIf=\"!isReadOpenMode && selectedDocuments.length === 0\"\r\n                      class=\"aw-fileupload aw-table-action\"\r\n                      chooseLabel=\"{{ 'global.upload' | translate }}\"\r\n                      name=\"document[]\"\r\n                      customUpload=\"true\"\r\n                      mode=\"basic\"\r\n                      auto=\"true\"\r\n                      (uploadHandler)=\"uploadDocument($event, fileUploader)\"\r\n                    ></p-fileUpload>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"colgroup\" let-columns>\r\n                <colgroup>\r\n                  <col class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\" />\r\n                  <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                </colgroup>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                  <th class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\">\r\n                    <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                  </th>\r\n\r\n                  <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                    {{ componentData.componentId + \".\" + col.field | translate }}\r\n                  </th>\r\n                </tr>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                  <td class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\">\r\n                    <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                  </td>\r\n\r\n                  <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                    {{ rowData[col.field] }}\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </p-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-search-purchase-request\r\n  *ngIf=\"showQuickSearchPurchaseRequestPopup\"\r\n  [(display)]=\"showQuickSearchPurchaseRequestPopup\"\r\n  [pr-code]=\"mainData.superiorDocument\"\r\n  (onSelected)=\"setSelectedPurchaseRequest($event)\"\r\n></aw-dialog-search-purchase-request>\r\n\r\n<aw-dialog-business-partner-bido-document\r\n  *ngIf=\"showDocumentDialog\"\r\n  [(display)]=\"showDocumentDialog\"\r\n  [document]=\"currentDocument\"\r\n  [openMode]=\"documentDialogOpenMode\"\r\n  [types]=\"documentTypes\"\r\n  (onValidated)=\"onAddDocument($event)\"\r\n></aw-dialog-business-partner-bido-document>\r\n\r\n<aw-dialog-material-and-services\r\n  *ngIf=\"showDialogMaterialAndServices\"\r\n  [(display)]=\"showDialogMaterialAndServices\"\r\n  [obj]=\"currentMSObject\"\r\n  [isReadOnlyForm]=\"isReadOnlyPopup\"\r\n  [newObj]=\"isNewMSObject\"\r\n  [category]=\"mainData.prCategory\"\r\n  (onCreate)=\"addNewMS($event)\"\r\n  (onUpdate)=\"updateMS($event)\"\r\n></aw-dialog-material-and-services>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/order-document/form/order-document-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/order-document/form/order-document-form.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .table-border-left {\n  border-left: solid 1px #006ea9 !important; }\n\n:host .read-only-price {\n  border-bottom: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvb3JkZXItZG9jdW1lbnQvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXG9yZGVyLWRvY3VtZW50XFxmb3JtXFxvcmRlci1kb2N1bWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUNBQXlDLEVBQUE7O0FBRjdDO0VBTUksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9vcmRlci1kb2N1bWVudC9mb3JtL29yZGVyLWRvY3VtZW50LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLnRhYmxlLWJvcmRlci1sZWZ0IHtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggIzAwNmVhOSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJlYWQtb25seS1wcmljZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/logistics/order-document/form/order-document-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/logistics/order-document/form/order-document-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrderDocumentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDocumentFormComponent", function() { return OrderDocumentFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/utils/label-value-utils */ "./src/app/shared/utils/label-value-utils.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/utils/number-utils */ "./src/app/shared/utils/number-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _search_order_document_search_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../search/order-document-search.service */ "./src/app/main/logistics/order-document/search/order-document-search.service.ts");
/* harmony import */ var _order_document_form_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./order-document-form.service */ "./src/app/main/logistics/order-document/form/order-document-form.service.ts");
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


























var OrderDocumentFormComponent = /** @class */ (function (_super) {
    __extends(OrderDocumentFormComponent, _super);
    function OrderDocumentFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, pageTocService, orderDocumentFormService, propertiesService, orderDocumentSearchService, dateService, confirmationService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.sessionService = sessionService;
        _this.orderDocumentFormService = orderDocumentFormService;
        _this.propertiesService = propertiesService;
        _this.orderDocumentSearchService = orderDocumentSearchService;
        _this.dateService = dateService;
        _this.confirmationService = confirmationService;
        _this.translateService = translateService;
        _this.component = OrderDocumentFormComponent_1;
        _this.awPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"];
        _this.setNavigationLinkList();
        _this.registerPageTocEntryObservable();
        _this.init();
        _this.loadCategoryOptions();
        _this.loadStatusOptions();
        _this.loadCodeOptions();
        _this.setTableCols();
        _this.getLocalCurrency();
        _this.msTableCols = _this.msTableCols1;
        return _this;
    }
    OrderDocumentFormComponent_1 = OrderDocumentFormComponent;
    OrderDocumentFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].LOG_ORDER_DOCUMENT_FORM;
    };
    OrderDocumentFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (!!this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            this.setTableOfContent();
            var pageContext = 'tab.createMode';
            var receivedDocument = void 0;
            var receivedStockAlert = void 0;
            if (!!this.componentData.objectId) {
                receivedDocument = this.serializationService.deserialize(this.componentData.objectId);
                this.pageId = !!receivedDocument._obj ? receivedDocument._obj.id : undefined;
                if (!this.pageId) {
                    receivedStockAlert = this.serializationService.deserialize(this.componentData.objectId);
                    this.setPageContext(this.componentData.objectId);
                    this.pageSubtitle = pageContext;
                    this.displayComponentContext(pageContext, this.isCreateOpenMode);
                }
            }
            if (!!this.pageId) {
                this.loadOrderDoc();
            }
            else if (!!receivedStockAlert) {
                this.msTableCols = this.msTableCols1;
                this.mainData.prCategory = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PURCHASE_CATEGORY_REQUEST;
                this.mainData.prName = receivedStockAlert.orderName;
                this.mainData.prDescription = receivedStockAlert.orderName;
                this.mainData.prCreationDate = new Date();
                this.mainData.prStatus = this.mainData.prStatus || _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PURCHASE_STATUS_OPEN;
                this.loadTypeOptions();
                var event_1 = {
                    pnText: receivedStockAlert.pnCode,
                    materialName: receivedStockAlert.materialName,
                    quantity: 1,
                    warehouse: receivedStockAlert.warehouse,
                    bidtStockMvtDTO: {
                        birePnPnCode: receivedStockAlert.pnCode,
                        bidtWarehouseId: receivedStockAlert.warehouseId
                    }
                };
                this.addNewMS(event_1);
            }
            else {
                this.mainData.prCreationDate = new Date();
                this.mainData.prPriceValue = '0';
                this.incomingPrice = '0';
            }
        }
        if (this.isCreateOpenMode) {
            this.orderDocumentFormService.getLocalCurrency().subscribe(function (result) {
                _this.mainData.prPriceUnit = result;
            });
        }
    };
    OrderDocumentFormComponent.prototype.setPageContext = function (objectId) {
        var supplierInfo = [];
        supplierInfo =
            !!this.componentData.objectId && !!this.serializationService.deserialize(this.componentData.objectId).supplier
                ? this.serializationService.deserialize(this.componentData.objectId).supplier.split('-')
                : [];
        var context = '';
        if (!!this.componentData.objectId && !!this.serializationService.deserialize(objectId).code) {
            context = "" + this.serializationService.deserialize(objectId).code;
        }
        if (!!objectId && !!this.serializationService.deserialize(objectId).category && context !== '') {
            context = context + " | " + this.serializationService.deserialize(objectId).category;
        }
        if (!!objectId && !!this.serializationService.deserialize(objectId).type && context !== '') {
            context = context + " | " + this.serializationService.deserialize(objectId).type;
        }
        if (supplierInfo.length !== 0 && context !== '') {
            context = context + " | " + supplierInfo[0];
        }
        return context;
    };
    OrderDocumentFormComponent.prototype.init = function () {
        this.pageSubtitle = '';
        this.categoryOptions = [];
        this.typeOptions = [];
        this.statusOptions = [];
        this.showQuickSearchPurchaseRequestPopup = false;
        // this.materialsAndServicesTableCols = [];
        // this.materialsAndServicesTableCols2 = [];
        // this.materialsAndServicesTableCols3 = [];
        // this.materialsAndServicesTableCols4 = [];
        // this.materialsAndServicesTableCols5 = [];
        this.msTableCols1 = [];
        this.msTableCols2 = [];
        this.msTableCols = [];
        this.isMaterialAndServicesTableLoading = false;
        this.showDocumentDialog = false;
        this.isLoadingDocumentTable = false;
        this.isConsecutiveDocumentsLoading = false;
        this.showDialogMaterialAndServices = false;
        this.isReadOnlyPopup = false;
        this.consecutiveDocumentsTableCols = [];
        this.localCurrency = undefined;
        this.initAfterSave();
    };
    OrderDocumentFormComponent.prototype.initAfterSave = function () {
        this.mainData = {};
        this.backupMainData = {};
        this.materialsAndServicesTable = [];
        this.databaseMSTable = [];
        this.selectedMaterials = [];
        this.documentsAdded = [];
        this.documentsRemoved = [];
        this.documentsUpdated = [];
        this.documents = [];
        this.documentTable = [];
        this.documentTypes = [];
        this.selectedDocuments = [];
        this.currentDocument = undefined;
        this.currentDocumentIndex = -1;
        this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read;
        this.consecutiveDocumentsTable = [];
        this.selectedConsecutiveDocuments = [];
        this.currentMSObject = undefined;
        this.selectedMSIndex = undefined;
        this.isNewMSObject = false;
        this.bidtStockMvtRemoveList = [];
        this.documentDataRemoveList = [];
        this.consecutiveTypeOptions = [];
        this.showUPrices = true;
        this.hideUPrices = false;
        this.superiorId = undefined;
        this.incomingPrice = undefined;
        this.disablePrice = true;
        this.consecutiveCategory = undefined;
        this.consecutiveType = undefined;
    };
    OrderDocumentFormComponent.prototype.setNavigationLinkList = function () {
        var _this = this;
        var goodsMovementKey = this.getTranslateKey('goodsMovement');
        var stockMovementKey = this.getTranslateKey('stockMovement');
        this.translateService.get([goodsMovementKey, stockMovementKey]).subscribe(function (results) {
            var goodsMovementLabel = results ? results[goodsMovementKey] : 'Goods Movements';
            _this.navigationLinkList = [
                {
                    label: goodsMovementLabel,
                    command: function () {
                        _this.goToGoodsMovement();
                    }
                }
            ];
        });
    };
    OrderDocumentFormComponent.prototype.goToGoodsMovement = function () {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].LOG_GOODS_MOVEMENT_PURCHASE_REQUEST_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read
        };
        var input = {
            purchaseRequestId: this.mainData.id
        };
        data.objectId = this.serializationService.serialize(input);
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    OrderDocumentFormComponent.prototype.loadCategoryOptions = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__["GenericPropertyConstants"].PURCHASE_CATEGORY_MAP).subscribe(function (results) {
            _this.categoryOptions = results || [];
        });
    };
    OrderDocumentFormComponent.prototype.loadTypeOptions = function () {
        this.mainData.prType = undefined;
        this.fetchTypeDropdownData();
    };
    OrderDocumentFormComponent.prototype.fetchTypeDropdownData = function () {
        var _this = this;
        if (!!this.mainData.prCategory) {
            this.orderDocumentSearchService.findTypeBasedOnCategory(this.mainData.prCategory).subscribe(function (results) {
                _this.typeOptions = results || [];
            });
        }
        else {
            this.typeOptions = [];
        }
    };
    OrderDocumentFormComponent.prototype.loadConsecutiveTypeOptions = function () {
        var _this = this;
        if (!!this.consecutiveCategory) {
            this.orderDocumentSearchService.findTypeBasedOnCategory(this.consecutiveCategory).subscribe(function (results) {
                _this.consecutiveTypeOptions = results || [];
            });
        }
        else {
            this.consecutiveTypeOptions = [];
        }
    };
    OrderDocumentFormComponent.prototype.loadStatusOptions = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__["GenericPropertyConstants"].PURCHASE_STATUS_MAP).subscribe(function (results) {
            _this.statusOptions = results || [];
        });
    };
    OrderDocumentFormComponent.prototype.loadCodeOptions = function () {
        var _this = this;
        this.orderDocumentSearchService.findBidoCustomerBySearchCriteriaOrder().subscribe(function (results) {
            _this.codeOptions = results || [];
        });
    };
    OrderDocumentFormComponent.prototype.loadOrderDoc = function () {
        var _this = this;
        this.isMaterialAndServicesTableLoading = true;
        this.isConsecutiveDocumentsLoading = true;
        this.isLoadingDocumentTable = true;
        if (!!this.pageId) {
            this.orderDocumentFormService.getById(this.pageId).subscribe(function (result) {
                _this.mainData = result.bidtPurchaseRequestDTO;
                _this.mainData.prStatus = _this.mainData.prStatus || _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PURCHASE_STATUS_OPEN;
                _this.fetchTypeDropdownData();
                _this.backupMainData = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(_this.mainData);
                _this.setMSTableCols(_this.mainData);
                var componentData = _this.serializationService.serialize(_this.getOrderDocRow(result.bidtPurchaseRequestDTO));
                _this.componentData.objectId = componentData;
                _this.pageSubtitle = _this.setPageContext(componentData);
                _this.displayComponentContext(_this.pageSubtitle, _this.isCreateOpenMode);
                if (!!_this.mainData.superiorId) {
                    _this.superiorId = _this.mainData.superiorId;
                }
                _this.incomingPrice = _this.mainData.prPriceValue;
                // Material and services tab
                _this.materialsAndServicesTable = result.materialAndServicesOutputList;
                _this.materialsAndServicesTable.forEach(function (ms) {
                    if (!!ms.bidtStockMvtDTO && !!ms.bidtStockMvtDTO.byQuotation) {
                        ms.byQuotation =
                            ms.bidtStockMvtDTO.byQuotation === 1 ? true : ms.bidtStockMvtDTO.byQuotation === 0 ? false : undefined;
                    }
                    if (!!ms.pnText) {
                        var material = ms.pnText.split(' / ');
                        ms.pnText = material[0];
                        ms.materialName = material[1];
                    }
                    ms._dataKey = Math.random();
                    ms._expand = false;
                    ms._obj = ms;
                });
                _this.databaseMSTable = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(_this.materialsAndServicesTable);
                _this.materialsAndServicesTable.forEach(function (ms) {
                    if (ms.quantity === null || ms.quantity === undefined) {
                        ms.quantity = 0;
                    }
                    if (ms.price === null || ms.price === undefined) {
                        ms.price = 0;
                    }
                    if (ms.discountPercent === null || ms.discountPercent === undefined) {
                        ms.discountPercent = 0;
                    }
                    if (ms.discountValue === null || ms.discountValue === undefined) {
                        ms.discountValue = 0;
                    }
                    if (ms.totalPrice === null || ms.totalPrice === undefined) {
                        ms.totalPrice = 0;
                    }
                    if (ms.currency === null || ms.currency === undefined) {
                        ms.currency = _this.localCurrency;
                    }
                    if (ms.priceAfterDiscount === null || ms.priceAfterDiscount === undefined) {
                        ms.priceAfterDiscount = 0;
                    }
                });
                _this.isMaterialAndServicesTableLoading = false;
                // Consecutive documents tab
                _this.consecutiveDocumentsTable = result.consecutiveDocumentOutputList;
                _this.consecutiveDocumentsTable.forEach(function (cDoc) {
                    if (!!cDoc.creationDateText) {
                        var dateTime = cDoc.creationDateText.split(' ');
                        var date = dateTime[0].split('/');
                        cDoc.creationDateText = date[2] + "/" + date[1] + "/" + date[0] + " " + dateTime[1];
                    }
                });
                _this.isConsecutiveDocumentsLoading = false;
                // Documents tab
                _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__["ListUtils"].orEmpty(result.documentTablist)
                    .filter(function (document) { return !!document.documentName; })
                    .forEach(function (doc) {
                    _this.documents.push(doc.bidtDocumentDTO);
                });
                _this.documentTable = _this.documents.map(function (document) { return _this.createDocumentRow(document); });
            });
            this.isLoadingDocumentTable = false;
        }
    };
    OrderDocumentFormComponent.prototype.setMSTableCols = function (mainData) {
        switch (mainData.prCategory) {
            // case '4-ord':
            //   this.msTableCols = this.materialsAndServicesTableCols2;
            //   break;
            // case '5-oth':
            //   this.msTableCols = this.materialsAndServicesTableCols2;
            //   break;
            // case '1-con':
            //   this.msTableCols = this.materialsAndServicesTableCols4;
            //   break;
            // case '2-req':
            //   this.msTableCols = this.materialsAndServicesTableCols3;
            //   break;
            // case '3-quo':
            //   this.msTableCols = this.materialsAndServicesTableCols2;
            //   break;
            case '2-req':
                this.msTableCols = this.msTableCols2;
                break;
            default:
                this.msTableCols = this.msTableCols1;
                break;
        }
    };
    OrderDocumentFormComponent.prototype.goToDocument = function (id) {
        var _this = this;
        if (!!id) {
            this.orderDocumentFormService.getById(id).subscribe(function (res) {
                var input = {
                    code: res.bidtPurchaseRequestDTO.prCode,
                    category: res.bidtPurchaseRequestDTO.prCategory,
                    type: res.bidtPurchaseRequestDTO.prType,
                    supplier: res.bidtPurchaseRequestDTO.supplier,
                    _obj: res.bidtPurchaseRequestDTO
                };
                _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_19__["LabelValueUtils"].stringValueToLabel(input, 'category', _this.categoryOptions);
                _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_19__["LabelValueUtils"].stringValueToLabel(input, 'type', _this.consecutiveTypeOptions);
                _this.openOrderDocument(input, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read);
            });
        }
    };
    OrderDocumentFormComponent.prototype.openOrderDocument = function (object, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].LOG_ORDER_DOCUMENT_FORM,
            openMode: openMode
        };
        if (!!object) {
            data.objectId = this.serializationService.serialize(object);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    OrderDocumentFormComponent.prototype.openConsecutiveDocument = function (row) {
        var _this = this;
        if (!!row.consecutiveDocument) {
            var input = {
                bidtPurchaseDTO: { prCode: row.consecutiveDocument.split(' ')[0] }
            };
            this.orderDocumentSearchService.findByCriteria(input).subscribe(function (orderDocument) {
                var orderDocumentRow = {
                    code: orderDocument.list[0].prCode,
                    name: orderDocument.list[0].prName,
                    status: orderDocument.list[0].prStatus,
                    creationDate: _this.formatDate(orderDocument.list[0].prCreationDate),
                    receptionDate: _this.formatDate(orderDocument.list[0].prReceptionDate),
                    category: orderDocument.list[0].prCategory,
                    type: orderDocument.list[0].prType,
                    startDate: _this.formatDate(orderDocument.list[0].prStartDate),
                    endDate: _this.formatDate(orderDocument.list[0].prEndDate),
                    supplierDocumentNumber: orderDocument.list[0].supplierDocumentNumber,
                    supplier: orderDocument.list[0].supplier,
                    superiorDocument: orderDocument.list[0].superiorDocument,
                    _obj: orderDocument.list[0]
                };
                _this.openOrderDocument(orderDocumentRow, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read);
            });
        }
    };
    OrderDocumentFormComponent.prototype.formatDate = function (date) {
        if (!!date) {
            return this.dateService.dateToString(new Date(date));
        }
        else {
            return '';
        }
    };
    OrderDocumentFormComponent.prototype.searchSuperiorDocument = function () {
        this.showQuickSearchPurchaseRequestPopup = true;
    };
    OrderDocumentFormComponent.prototype.setSelectedPurchaseRequest = function (selectedObject) {
        if (selectedObject && selectedObject.prCode !== this.mainData.prCode) {
            this.mainData.superiorDocument = selectedObject.prCode;
            this.mainData.bidtPurchaseRequestId = selectedObject.id;
            this.superiorId = selectedObject.id;
        }
        this.showQuickSearchPurchaseRequestPopup = false;
    };
    OrderDocumentFormComponent.prototype.editOrderDoc = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write);
    };
    OrderDocumentFormComponent.prototype.cancelOrderDoc = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read);
        this.reloadOrderDoc();
    };
    OrderDocumentFormComponent.prototype.setTableCols = function () {
        // this.materialsAndServicesTableCols = [
        //   { field: 'pnText', alignment: 'left' },
        //   { field: 'serialNumber', alignment: 'left' },
        //   { field: 'batchNumber', alignment: 'left' },
        //   { field: 'quantity', alignment: 'left', width: '6%' },
        //   { field: 'productionLeadTime', alignment: 'left' },
        //   { field: 'price', alignment: 'left', width: '5%' },
        //   { field: 'discountPercent', alignment: 'left', width: '6%' },
        //   { field: 'discountValue', alignment: 'left', width: '6%' },
        //   { field: 'priceAfterDiscount', alignment: 'left', width: '6.5%' },
        //   { field: 'totalPrice', alignment: 'left' },
        //   { field: 'currency', alignment: 'left' },
        //   { field: 'warehouse', alignment: 'left' },
        //   { field: 'partStatus', alignment: 'left' },
        //   { field: 'consecutiveDocument', alignment: 'left', width: '8%' }
        // ];
        // this.materialsAndServicesTableCols2 = [
        //   { field: 'pnText', alignment: 'left' },
        //   { field: 'serialNumber', alignment: 'left' },
        //   { field: 'batchNumber', alignment: 'left' },
        //   { field: 'quantity', alignment: 'left' },
        //   { field: 'productionLeadTime', alignment: 'left' },
        //   { field: 'totalPrice', alignment: 'left' },
        //   { field: 'currency', alignment: 'left' },
        //   { field: 'warehouse', alignment: 'left' },
        //   { field: 'partStatus', alignment: 'left' },
        //   { field: 'consecutiveDocument', alignment: 'left' }
        // ];
        // this.materialsAndServicesTableCols3 = [
        //   { field: 'pnText', alignment: 'left' },
        //   { field: 'serialNumber', alignment: 'left' },
        //   { field: 'batchNumber', alignment: 'left' },
        //   { field: 'quantity', alignment: 'left' },
        //   { field: 'warehouse', alignment: 'left' },
        //   { field: 'partStatus', alignment: 'left' },
        //   { field: 'consecutiveDocument', alignment: 'left' }
        // ];
        // this.materialsAndServicesTableCols4 = [
        //   { field: 'pnText', alignment: 'left' },
        //   { field: 'serialNumber', alignment: 'left' },
        //   { field: 'batchNumber', alignment: 'left' },
        //   { field: 'quantity', alignment: 'left' },
        //   { field: 'productionLeadTime', alignment: 'left' },
        //   { field: 'totalPrice', alignment: 'left' },
        //   { field: 'currency', alignment: 'left' }
        // ];
        // this.materialsAndServicesTableCols5 = [
        //   { field: 'pnText', alignment: 'left' },
        //   { field: 'serialNumber', alignment: 'left' },
        //   { field: 'batchNumber', alignment: 'left' },
        //   { field: 'quantity', alignment: 'left', width: '6%' },
        //   { field: 'productionLeadTime', alignment: 'left' },
        //   { field: 'price', alignment: 'left', width: '5%' },
        //   { field: 'discountPercent', alignment: 'left', width: '6%' },
        //   { field: 'discountValue', alignment: 'left', width: '6%' },
        //   { field: 'priceAfterDiscount', alignment: 'left', width: '6.5%' },
        //   { field: 'totalPrice', alignment: 'left' },
        //   { field: 'currency', alignment: 'left' }
        // ];
        this.msTableCols1 = [
            { field: 'pnText', alignment: 'left' },
            { field: 'materialName', alignment: 'left', width: '30%' },
            { field: 'serialNumber', alignment: 'left' },
            { field: 'batchNumber', alignment: 'left' },
            { field: 'quantity', alignment: 'left', width: '6%' },
            { field: 'productionLeadTime', alignment: 'left' },
            { field: 'totalPrice', alignment: 'left' },
            { field: 'currency', alignment: 'left' }
        ];
        this.msTableCols2 = [
            { field: 'pnText', alignment: 'left' },
            { field: 'materialName', alignment: 'left', width: '30%' },
            { field: 'serialNumber', alignment: 'left' },
            { field: 'batchNumber', alignment: 'left' },
            { field: 'quantity', alignment: 'left' }
        ];
        // this.msTableCols2 = [];
        // this.msTableCols = this.materialsAndServicesTableCols2;
        this.documentTableCols = [
            { field: 'docName', alignment: 'left', width: '40%' },
            { field: 'docExtension', alignment: 'left', width: '20%' },
            { field: 'docSize', alignment: 'left', width: '20%' },
            { field: 'docAttachmentDate', alignment: 'left', width: '20%' }
        ];
        this.consecutiveDocumentsTableCols = [
            { field: 'code', alignment: 'left' },
            { field: 'name', alignment: 'left' },
            { field: 'category', alignment: 'left' },
            { field: 'type', alignment: 'left' },
            { field: 'supplier', alignment: 'left' },
            { field: 'status', alignment: 'left' },
            { field: 'creationDateText', alignment: 'left' },
            { field: 'superiorDocumentCode', alignment: 'left' },
            { field: 'superiorDocumentCategory', alignment: 'left' }
        ];
    };
    OrderDocumentFormComponent.prototype.toggleMaterialAndServicesExpand = function (row) {
        row._expand = !row._expand;
    };
    OrderDocumentFormComponent.prototype.downloadFiles = function () {
        this.selectedDocuments.forEach(function (documentRow) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_18__["FileUtils"].downloadFile(documentRow._obj.documentContent, documentRow._obj.documentName);
        });
    };
    OrderDocumentFormComponent.prototype.createDocumentRow = function (document) {
        var selectedDocumentType = this.documentTypes.find(function (documentType) { return !!document.documentType && documentType.value === document.documentType; });
        var documentRow = {
            docAttachmentDate: !!document.documentPublicationDate
                ? this.dateService.dateToString(new Date(document.documentPublicationDate))
                : '',
            docExtension: this.formatDocExtension(document),
            docName: document.documentName,
            docSize: this.formatDocSize(document),
            docType: !!selectedDocumentType ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(selectedDocumentType.label) : '',
            id: document.id,
            _obj: document
        };
        return documentRow;
    };
    OrderDocumentFormComponent.prototype.formatDocExtension = function (document) {
        return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_18__["FileUtils"].getExtension(document.documentName).toUpperCase();
    };
    OrderDocumentFormComponent.prototype.formatDocSize = function (document) {
        return !!document.documentContent ? _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_18__["FileUtils"].getFormattedSize(document.documentContent.length) : '';
    };
    OrderDocumentFormComponent.prototype.deleteDocuments = function () {
        var _this = this;
        var partialMessageKey = this.selectedDocuments.length > 1 ? 'confirmDeleteSelectedDocuments' : 'confirmDeleteSelectedDocument';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.selectedDocuments.forEach(function (selectedDocumentRow) {
                    var documentsAddedWithoutSelection = _this.documentsAdded.filter(function (document) { return !_this.areSameDocument(document, selectedDocumentRow._obj); });
                    // list of added objects contains the selection
                    if (_this.documentsAdded.length !== documentsAddedWithoutSelection.length) {
                        // Remove selection from added objects
                        _this.documentsAdded = documentsAddedWithoutSelection;
                    }
                    else {
                        var documentsUpdatedWithoutSelection = _this.documentsUpdated.filter(function (document) { return !_this.areSameDocument(document, selectedDocumentRow._obj); });
                        // list of updated objects contains the selection
                        if (_this.documentsUpdated.length !== documentsUpdatedWithoutSelection.length) {
                            // Remove selection from added objects
                            _this.documentsUpdated = documentsUpdatedWithoutSelection;
                        }
                        _this.documentsRemoved = __spread(_this.documentsRemoved, [selectedDocumentRow._obj]);
                    }
                });
                _this.documentsRemoved.forEach(function (doc) {
                    if (!!doc.id) {
                        _this.documentDataRemoveList.push(doc.id);
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
    OrderDocumentFormComponent.prototype.editDocument = function () {
        var _this = this;
        if (this.selectedDocuments.length === 1) {
            this.currentDocumentIndex = this.documents.findIndex(function (document) {
                return _this.areSameDocument(document, _this.selectedDocuments[0]._obj);
            });
            this.currentDocument = __assign({}, this.selectedDocuments[0]._obj);
            this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write;
            this.showDocumentDialog = true;
        }
    };
    OrderDocumentFormComponent.prototype.openDocument = function () {
        if (this.selectedDocuments.length === 1) {
            this.currentDocument = this.selectedDocuments[0]._obj;
            this.currentDocumentIndex = -1;
            this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read;
            this.showDocumentDialog = true;
        }
    };
    OrderDocumentFormComponent.prototype.uploadDocument = function (event, fileUploader) {
        var _this = this;
        if (!!event.files) {
            var file_1 = event.files[0];
            // Check if the file already exists
            var fileExists = this.documents.some(function (document) { return document.documentName === file_1.name; });
            if (fileExists) {
                this.messageService.showWarningMessage('global.warningOnFileExists');
            }
            else {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_18__["FileUtils"].getFileContentAsBase64(file_1, function (fileContent) {
                    if (!!fileContent) {
                        var document_1 = {
                            documentContent: fileContent,
                            documentName: file_1.name,
                            documentPublicationDate: new Date(),
                            bidtPurchaseRequestId: _this.pageId
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
    OrderDocumentFormComponent.prototype.areSameDocument = function (obj1, obj2) {
        if (!obj1 || !obj2) {
            return false;
        }
        else {
            return !!obj1.documentName && !!obj2.documentName && obj1.documentName === obj2.documentName;
        }
    };
    OrderDocumentFormComponent.prototype.onAddDocument = function (document) {
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
    OrderDocumentFormComponent.prototype.createMaterial = function () {
        this.showDialogMaterialAndServices = true;
        this.currentMSObject = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.selectedMaterials[0]);
        this.isReadOnlyPopup = false;
        this.isNewMSObject = true;
        this.selectedMSIndex = -1;
    };
    OrderDocumentFormComponent.prototype.editMaterial = function () {
        var _this = this;
        this.showDialogMaterialAndServices = true;
        this.currentMSObject = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.selectedMaterials[0]);
        this.isReadOnlyPopup = false;
        this.isNewMSObject = false;
        this.selectedMSIndex = this.materialsAndServicesTable.findIndex(function (ms) {
            return !!ms.bidtStockMvtDTO &&
                !!_this.selectedMaterials[0].bidtStockMvtDTO &&
                ms.bidtStockMvtDTO.id === _this.selectedMaterials[0].bidtStockMvtDTO.id;
        });
        this.selectedMaterials = [];
    };
    OrderDocumentFormComponent.prototype.openMaterial = function () {
        this.showDialogMaterialAndServices = true;
        this.currentMSObject = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.selectedMaterials[0]);
        this.isReadOnlyPopup = true;
        this.isNewMSObject = false;
        this.selectedMaterials = [];
    };
    OrderDocumentFormComponent.prototype.reloadConsecutiveDocuments = function () {
        var _this = this;
        if (!!this.pageId) {
            this.isConsecutiveDocumentsLoading = true;
            this.orderDocumentFormService.getById(this.pageId).subscribe(function (r) {
                _this.consecutiveDocumentsTable = r.consecutiveDocumentOutputList;
                _this.isConsecutiveDocumentsLoading = false;
            });
        }
    };
    /**************************************************************************
     * Table Of Content
     *************************************************************************/
    OrderDocumentFormComponent.prototype.setTableOfContent = function () {
        var _this = this;
        var mainDataKey = 'page.mainData';
        var additionalKey = 'page.additionalData';
        var msKey = this.getTranslateKey('materialsAndServices');
        var consecutiveKey = this.getTranslateKey('consecutiveDocuments');
        var documentsKey = 'global.documents';
        this.translateService
            .get([mainDataKey, additionalKey, msKey, consecutiveKey, documentsKey])
            .subscribe(function (results) {
            var mainDataLabel = !!results ? results[mainDataKey] : 'Main Information';
            var additionalLabel = !!results ? results[additionalKey] : 'Additional Information';
            var msLabel = !!results ? results[msKey] : 'Material and Services';
            var consecutiveLabel = !!results ? results[consecutiveKey] : 'Consecutive Documents';
            var documentsLabel = !!results ? results[documentsKey] : 'Documents';
            _this.toc = [
                {
                    id: 'mainInformationAnchor',
                    anchor: _this.mainInformationEltRef,
                    label: mainDataLabel
                },
                {
                    id: 'additionalInformationAnchor',
                    anchor: _this.additionalInformationEltRef,
                    label: additionalLabel
                },
                {
                    id: 'msAnchor',
                    anchor: _this.msEltRef,
                    label: msLabel
                },
                {
                    id: 'consecutiveAnchor',
                    anchor: _this.consecutiveEltRef,
                    label: consecutiveLabel
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
    OrderDocumentFormComponent.prototype.navigateToSelectedSectionFromSummary = function (anchorId, elementRef, event) {
        _super.prototype.selectPageTocEntry.call(this, anchorId);
        _super.prototype.scrollToAnchorAndStopPropagation.call(this, elementRef, event);
    };
    OrderDocumentFormComponent.prototype.saveOrderDoc = function () {
        var _this = this;
        if (!this.mainData.prCategory || !this.mainData.prType) {
            this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
        }
        else {
            var bidtStockMvtDTOList_1 = [];
            this.materialsAndServicesTable.forEach(function (ms) {
                if (!!ms.bidtStockMvtDTO) {
                    var updating = _this.databaseMSTable.some(function (dms) { return !!dms.bidtStockMvtDTO && !!ms.bidtStockMvtDTO && dms.bidtStockMvtDTO.id === ms.bidtStockMvtDTO.id; });
                    if (!updating && !!ms.bidtStockMvtDTO.id) {
                        ms.bidtStockMvtDTO.id = undefined;
                    }
                    bidtStockMvtDTOList_1.push(ms.bidtStockMvtDTO);
                }
            });
            var bidtDocumentList_1 = [];
            this.documentTable.forEach(function (doc) {
                if (!!doc._obj.documentPublicationDate) {
                    doc._obj.documentPublicationDate = new Date(doc._obj.documentPublicationDate);
                }
                doc._obj.bidtPurchaseRequestId = _this.pageId;
                bidtDocumentList_1.push(doc._obj);
            });
            var input = {
                bidtPurchaseRequestDTO: this.mainData,
                bidtStockMvtDTOList: bidtStockMvtDTOList_1,
                bidtStockMvtRemoveList: this.bidtStockMvtRemoveList,
                bidtDocumentList: bidtDocumentList_1,
                documentDataRemoveList: this.documentDataRemoveList
            };
            this.save(input);
        }
    };
    OrderDocumentFormComponent.prototype.save = function (input) {
        var _this = this;
        this.showSaveSpinner = true;
        this.orderDocumentFormService.saveOrderDocument(input).subscribe(function (result) {
            _this.afterSave(result);
            _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnSaveOrderDocument'));
            _this.showSaveSpinner = false;
        }, function (error) {
            _this.showSaveSpinner = false;
        });
    };
    OrderDocumentFormComponent.prototype.afterSave = function (result) {
        var _this = this;
        this.pageId = result.id;
        var displayOrderDocumentInput = {
            bidtPurchaseDTO: {
                prCode: result.prCode
            }
        };
        this.orderDocumentSearchService.findByCriteria(displayOrderDocumentInput).subscribe(function (res) {
            var componentData = _this.serializationService.serialize(_this.getOrderDocRow(res.list[0]));
            _this.componentData.objectId = componentData;
            _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write);
            _this.componentData.openMode = 1;
            _this.pageSubtitle = _this.setPageContext(componentData);
            _this.displayComponentContext(_this.setPageContext(componentData), _this.isCreateOpenMode);
            _this.initAfterSave();
            _this.loadOrderDoc();
        });
    };
    OrderDocumentFormComponent.prototype.getOrderDocRow = function (result) {
        var orderDocumentRow = {
            code: result.prCode,
            category: result.prCategory,
            type: result.prType,
            supplier: result.supplier,
            _obj: result
        };
        return orderDocumentRow;
    };
    OrderDocumentFormComponent.prototype.addNewMS = function (event) {
        event._dataKey = Math.random();
        event._expand = false;
        event._obj = event;
        if (!!event.bidtStockMvtDTO) {
            if (!!event && !!event.price) {
                if (!!event.discountPercent) {
                    event.priceAfterDiscount = event.price !== 0 ? event.price - event.discountPercent : event.price;
                }
                else {
                    event.priceAfterDiscount = event.price;
                }
                if (!!event.quantity) {
                    event.totalPrice = event.priceAfterDiscount * event.quantity;
                }
                else {
                    event.totalPrice = event.priceAfterDiscount * 0;
                }
            }
            event.bidtStockMvtDTO.bidtPurchaseRequestId = this.pageId;
        }
        this.materialsAndServicesTable.push(event);
    };
    OrderDocumentFormComponent.prototype.updateMS = function (event) {
        if (this.selectedMSIndex !== null && this.selectedMSIndex !== undefined) {
            this.materialsAndServicesTable[this.selectedMSIndex] = event;
        }
    };
    OrderDocumentFormComponent.prototype.enableDocumentCreation = function () {
        var response;
        response =
            _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PURCHASE_STATUS_ACCEPTED === this.backupMainData.prStatus &&
                (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PURCHASE_CATEGORY_REQUEST === this.backupMainData.prCategory ||
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PURCHASE_CATEGORY_QUOTATION === this.backupMainData.prCategory ||
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PURCHASE_CATEGORY_ORDER === this.backupMainData.prCategory)
                ? true
                : false;
        return response;
    };
    OrderDocumentFormComponent.prototype.priceVisibility = function () {
        var response;
        response = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PURCHASE_CATEGORY_REQUEST === this.mainData.prCategory ? false : true;
        return response;
    };
    OrderDocumentFormComponent.prototype.logisticVisibility = function () {
        var response;
        response = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PURCHASE_CATEGORY_CONTRACT === this.mainData.prCategory ? false : true;
        return response;
    };
    OrderDocumentFormComponent.prototype.goodsMovementNameVisible = function () {
        var response = false;
        if (this.materialsAndServicesTable.length > 0) {
            var logic1 = 2;
            var logic2 = 4;
            response =
                this.materialsAndServicesTable[0].logicState === logic1 ||
                    this.materialsAndServicesTable[0].logicState === logic2
                    ? true
                    : false;
        }
        return response;
    };
    OrderDocumentFormComponent.prototype.subcontractingMovementsVisible = function () {
        var response = false;
        if (this.materialsAndServicesTable.length > 0) {
            var logic = 3;
            response = this.materialsAndServicesTable[0].logicState === logic && !this.isReadOpenMode ? true : false;
        }
        return response;
    };
    OrderDocumentFormComponent.prototype.showUnitPrices = function () {
        // this.showUPrices = false;
        // this.hideUPrices = true;
        // if (this.mainData.prCategory === '1-con') {
        //   this.msTableCols = this.materialsAndServicesTableCols5;
        // } else {
        //   this.msTableCols = this.materialsAndServicesTableCols;
        // }
    };
    OrderDocumentFormComponent.prototype.hideUnitPrices = function () {
        this.showUPrices = true;
        this.hideUPrices = false;
        this.setMSTableCols(this.mainData);
    };
    OrderDocumentFormComponent.prototype.resetPrice = function () {
        this.disablePrice = true;
        this.mainData.prPriceValue = this.incomingPrice;
    };
    OrderDocumentFormComponent.prototype.deleteMaterials = function () {
        var _this = this;
        this.selectedMaterials.forEach(function (material) {
            _this.materialsAndServicesTable = _this.materialsAndServicesTable.filter(function (ms) {
                return !!ms.bidtStockMvtDTO && !!material.bidtStockMvtDTO && ms.bidtStockMvtDTO.id !== material.bidtStockMvtDTO.id;
            });
            var databaseEntry = _this.databaseMSTable.some(function (ms) {
                return !!material.bidtStockMvtDTO && !!ms.bidtStockMvtDTO && ms.bidtStockMvtDTO.id === material.bidtStockMvtDTO.id;
            });
            if (databaseEntry && !!material.bidtStockMvtDTO && !!material.bidtStockMvtDTO.id) {
                _this.bidtStockMvtRemoveList.push(material.bidtStockMvtDTO.id);
            }
        });
        this.selectedMaterials = [];
    };
    OrderDocumentFormComponent.prototype.createConsecutiveDocuments = function () {
        var _this = this;
        if (!this.consecutiveCategory || !this.consecutiveType) {
            this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
        }
        else {
            var bidtPurchaseRequestDTO = {
                id: this.pageId,
                prCategory: this.consecutiveCategory,
                prType: this.consecutiveType,
                prCreationDate: this.mainData.prCreationDate || new Date(),
                bidoCustomerCustomerCode: this.mainData.bidoCustomerCustomerCode
            };
            var bidtStockMvtDTOList_2 = [];
            this.materialsAndServicesTable.forEach(function (ms) {
                if (!!ms.bidtStockMvtDTO) {
                    bidtStockMvtDTOList_2.push(ms.bidtStockMvtDTO);
                }
            });
            var input_1 = {
                bidtPurchaseRequestDTO: bidtPurchaseRequestDTO,
                bidtStockMvtDTOList: bidtStockMvtDTOList_2
            };
            var saveMainDataAndMaterialTable = {
                bidtPurchaseRequestDTO: this.backupMainData,
                bidtStockMvtDTOList: bidtStockMvtDTOList_2
            };
            this.orderDocumentFormService.saveOrderDocument(saveMainDataAndMaterialTable).subscribe(function (output) {
                _this.afterSave(output);
                _this.orderDocumentFormService.createConsecutiveDocument(input_1).subscribe(function (result) {
                    _this.consecutiveCategory = undefined;
                    _this.consecutiveType = undefined;
                    _this.consecutiveTypeOptions = [];
                    if (!!_this.pageId) {
                        _this.isConsecutiveDocumentsLoading = true;
                        _this.orderDocumentFormService.getById(_this.pageId).subscribe(function (r) {
                            _this.consecutiveDocumentsTable = r.consecutiveDocumentOutputList;
                            _this.consecutiveDocumentsTable.forEach(function (cDoc) {
                                if (!!cDoc.creationDateText) {
                                    var dateTime = cDoc.creationDateText.split(' ');
                                    var date = dateTime[0].split('/');
                                    cDoc.creationDateText = date[2] + "/" + date[1] + "/" + date[0] + " " + dateTime[1];
                                }
                            });
                            _this.isConsecutiveDocumentsLoading = false;
                            _this.orderDocumentFormService.getById(result).subscribe(function (res) {
                                var newPageInput = {
                                    code: res.bidtPurchaseRequestDTO.prCode,
                                    category: res.bidtPurchaseRequestDTO.prCategory,
                                    type: res.bidtPurchaseRequestDTO.prType,
                                    supplier: res.bidtPurchaseRequestDTO.supplier,
                                    _obj: res.bidtPurchaseRequestDTO
                                };
                                _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_19__["LabelValueUtils"].stringValueToLabel(newPageInput, 'category', _this.categoryOptions);
                                _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_19__["LabelValueUtils"].stringValueToLabel(newPageInput, 'type', _this.typeOptions);
                            });
                        });
                    }
                });
            });
        }
    };
    OrderDocumentFormComponent.prototype.openSelectedDocuemnt = function (row) {
        if (!!row.bidtPurchaseRequestDTO && !!row.bidtPurchaseRequestDTO.id) {
            this.goToDocument(row.bidtPurchaseRequestDTO.id);
        }
    };
    OrderDocumentFormComponent.prototype.goToMaterial = function (row) {
        var _this = this;
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].LOG_MATERIAL_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read
        };
        if (!!row.bidtStockMvtDTO && !!row.bidtStockMvtDTO.birePnPnCode) {
            var input = {
                pnCode: row.bidtStockMvtDTO.birePnPnCode
            };
            this.orderDocumentFormService.findBirePn(input).subscribe(function (result) {
                if (!!result) {
                    var materialFormId = {
                        pnCode: result.pnCode,
                        pnType: result.pnType
                    };
                    data.objectId = _this.serializationService.serialize(materialFormId);
                }
                var labelKey = 'transaction.' + data.componentId;
                _this.tabService.open(_this.tabService.create(data, labelKey, true));
            });
        }
    };
    OrderDocumentFormComponent.prototype.openEquipmentForm = function (row) {
        var _this = this;
        if (!!row.bidtStockMvtDTO) {
            var input = {
                pnCode: row.bidtStockMvtDTO.birePnPnCode,
                sn: row.serialNumber
            };
            this.orderDocumentFormService.getEuipmentBYpnAndSN(input).subscribe(function (result) {
                if (!!result) {
                    if (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY === result[0].equipmentFunction) {
                        _this.goToAircraft(result[0].equipmentCode, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read);
                    }
                    else if (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY === result[0].equipmentFunction) {
                        _this.goToEngine(result[0].equipmentCode, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read);
                    }
                    else if (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].ITEM_FAMILY_CODE_TOOL_KEY === result[0].equipmentFunction) {
                        _this.goToTools(result[0].equipmentCode, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read);
                    }
                    else {
                        _this.goToEquipment(result[0].equipmentCode, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read);
                    }
                }
                else {
                    _this.messageService.showWarningMessage(_this.getTranslateKey('assetNotFound'));
                }
            });
        }
    };
    OrderDocumentFormComponent.prototype.goToAircraft = function (aircraftCode, openMode) {
        var labelKey = 'transaction.AircraftFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'AircraftFormComponent',
            openMode: openMode
        };
        if (!!aircraftCode) {
            var equipmentId = {
                equipmentCode: aircraftCode
            };
            data.objectId = this.serializationService.serialize(equipmentId);
        }
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    OrderDocumentFormComponent.prototype.goToEngine = function (engineCode, openMode) {
        var labelKey = 'transaction.EngineFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'EngineFormComponent',
            openMode: openMode
        };
        if (!!engineCode) {
            var equipmentId = {
                equipmentCode: engineCode
            };
            data.objectId = this.serializationService.serialize(equipmentId);
        }
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    OrderDocumentFormComponent.prototype.goToEquipment = function (equipmentCode, openMode) {
        var labelKey = 'transaction.EquipmentFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'EquipmentFormComponent',
            openMode: openMode
        };
        if (!!equipmentCode) {
            var equipmentId = {
                equipmentCode: equipmentCode
            };
            data.objectId = this.serializationService.serialize(equipmentId);
        }
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    OrderDocumentFormComponent.prototype.goToTools = function (equipmentCode, openMode) {
        var labelKey = 'transaction.ToolFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'ToolFormComponent',
            openMode: openMode
        };
        if (!!equipmentCode) {
            var equipmentId = {
                equipmentCode: equipmentCode
            };
            data.objectId = this.serializationService.serialize(equipmentId);
        }
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    OrderDocumentFormComponent.prototype.reloadOrderDoc = function () {
        this.initAfterSave();
        this.loadOrderDoc();
    };
    OrderDocumentFormComponent.prototype.getLocalCurrency = function () {
        var _this = this;
        this.orderDocumentFormService.getLocalCurrency().subscribe(function (res) {
            _this.localCurrency = res;
        });
    };
    OrderDocumentFormComponent.prototype.updateConditions = function () {
        var _this = this;
        this.materialsAndServicesTable.forEach(function (row) {
            if (!!row.bidtStockMvtDTO && !!row.bidtStockMvtDTO.birePnPnCode) {
                _this.orderDocumentFormService
                    .findBirePn({
                    pnCode: row.bidtStockMvtDTO.birePnPnCode
                })
                    .subscribe({
                    next: function (pn) {
                        if (pn && pn.pnCode) {
                            _this.orderDocumentFormService
                                .findByCustomerAndProduct({
                                customerCode: _this.mainData.bidoCustomerCustomerCode,
                                pnCode: pn.pnCode
                            })
                                .subscribe({
                                next: function (listPc) {
                                    for (var index = 0; index < listPc.length; index++) {
                                        var pcData = listPc[index];
                                        // Qty only for non serialized parts
                                        if (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PN_TRACEABILITY_BY_SN !== pn.traceability &&
                                            pcData.productQuantity &&
                                            _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_21__["NumberUtils"].fromString(pcData.productQuantity) > 0) {
                                            row.bidtStockMvtDTO.stockMvtQuantity = pcData.productQuantity;
                                            row.quantity = _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_21__["NumberUtils"].fromString(pcData.productQuantity);
                                        }
                                        // price
                                        if (pcData.priceValue && _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_21__["NumberUtils"].fromString(pcData.priceValue) > 0) {
                                            row.bidtStockMvtDTO.priceValue = pcData.priceValue;
                                            row.totalPrice = _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_21__["NumberUtils"].fromString(pcData.priceValue);
                                        }
                                        // lead time
                                        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_22__["ObjectUtils"].isDefined(pcData.numberOfDays) && pcData.numberOfDays > 0) {
                                            row.bidtStockMvtDTO.numberOfDays = pcData.numberOfDays;
                                            row.productionLeadTime = pcData.numberOfDays;
                                        }
                                        // un seul fournisseur est renseigné dans la demande d'achat donc on sort
                                        break;
                                    }
                                }
                            });
                        }
                    }
                });
            }
        });
    };
    var OrderDocumentFormComponent_1;
    OrderDocumentFormComponent.MAIN_ANCHOR_ID = 'mainInformationAnchor';
    OrderDocumentFormComponent.ADDITIONAL_ANCHOR_ID = 'additionalInformationAnchor';
    OrderDocumentFormComponent.MS_ANCHOR_ID = 'msAnchor';
    OrderDocumentFormComponent.CONSECUTIVE_ANCHOR_ID = 'consecutiveAnchor';
    OrderDocumentFormComponent.DOCUMENTS_ANCHOR_ID = 'documentAnchor';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(OrderDocumentFormComponent_1.MAIN_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OrderDocumentFormComponent.prototype, "mainInformationEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(OrderDocumentFormComponent_1.ADDITIONAL_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OrderDocumentFormComponent.prototype, "additionalInformationEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(OrderDocumentFormComponent_1.MS_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OrderDocumentFormComponent.prototype, "msEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(OrderDocumentFormComponent_1.CONSECUTIVE_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OrderDocumentFormComponent.prototype, "consecutiveEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(OrderDocumentFormComponent_1.DOCUMENTS_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OrderDocumentFormComponent.prototype, "documentTableEltRef", void 0);
    OrderDocumentFormComponent = OrderDocumentFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-order-document-form',
            template: __webpack_require__(/*! ./order-document-form.component.html */ "./src/app/main/logistics/order-document/form/order-document-form.component.html"),
            styles: [__webpack_require__(/*! ./order-document-form.component.scss */ "./src/app/main/logistics/order-document/form/order-document-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_11__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_12__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__["SessionService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_3__["PageTocService"],
            _order_document_form_service__WEBPACK_IMPORTED_MODULE_25__["OrderDocumentFormService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_13__["PropertiesService"],
            _search_order_document_search_service__WEBPACK_IMPORTED_MODULE_24__["OrderDocumentSearchService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], OrderDocumentFormComponent);
    return OrderDocumentFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_17__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/order-document/order-document.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/logistics/order-document/order-document.module.ts ***!
  \************************************************************************/
/*! exports provided: OrderDocumentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDocumentModule", function() { return OrderDocumentModule; });
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
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tristatecheckbox */ "./node_modules/primeng/tristatecheckbox.js");
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ "./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts");
/* harmony import */ var _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/dialog-search-material/dialog-search-material.module */ "./src/app/shared/components/dialog-search-material/dialog-search-material.module.ts");
/* harmony import */ var _shared_components_dialog_search_purchase_request_dialog_search_purchase_request_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/dialog-search-purchase-request/dialog-search-purchase-request.module */ "./src/app/shared/components/dialog-search-purchase-request/dialog-search-purchase-request.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _dialog_business_partner_bido_document_dialog_business_partner_bido_document_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dialog-business-partner-bido-document/dialog-business-partner-bido-document.component */ "./src/app/main/logistics/order-document/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.ts");
/* harmony import */ var _dialog_material_and_services_dialog_material_and_services_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialog-material-and-services/dialog-material-and-services.component */ "./src/app/main/logistics/order-document/dialog-material-and-services/dialog-material-and-services.component.ts");
/* harmony import */ var _form_order_document_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./form/order-document-form.component */ "./src/app/main/logistics/order-document/form/order-document-form.component.ts");
/* harmony import */ var _form_order_document_form_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./form/order-document-form.service */ "./src/app/main/logistics/order-document/form/order-document-form.service.ts");
/* harmony import */ var _search_order_document_search_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./search/order-document-search.component */ "./src/app/main/logistics/order-document/search/order-document-search.component.ts");
/* harmony import */ var _search_order_document_search_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./search/order-document-search.service */ "./src/app/main/logistics/order-document/search/order-document-search.service.ts");
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
    primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
    primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__["KeyFilterModule"],
    primeng_message__WEBPACK_IMPORTED_MODULE_7__["MessageModule"],
    primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"],
    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__["SplitButtonModule"],
    primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_12__["TriStateCheckboxModule"]
];
var INTERNAL_MODULES = [
    _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_17__["DialogSearchMaterialModule"],
    _shared_components_dialog_search_purchase_request_dialog_search_purchase_request_module__WEBPACK_IMPORTED_MODULE_18__["DialogSearchPurchaseRequestModule"],
    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_20__["ModalModule"],
    _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_16__["ComponentSidebarModule"]
];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_dialog_business_partner_bido_document_dialog_business_partner_bido_document_component__WEBPACK_IMPORTED_MODULE_22__["DialogBusinessPartnerBidoDocumentComponent"], _dialog_material_and_services_dialog_material_and_services_component__WEBPACK_IMPORTED_MODULE_23__["DialogMaterialAndServicesComponent"]];
var DYNAMIC_COMPONENTS = [_form_order_document_form_component__WEBPACK_IMPORTED_MODULE_24__["OrderDocumentFormComponent"], _search_order_document_search_component__WEBPACK_IMPORTED_MODULE_26__["OrderDocumentSearchComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_order_document_form_service__WEBPACK_IMPORTED_MODULE_25__["OrderDocumentFormService"], _search_order_document_search_service__WEBPACK_IMPORTED_MODULE_27__["OrderDocumentSearchService"]];
var OrderDocumentModule = /** @class */ (function () {
    function OrderDocumentModule() {
    }
    OrderDocumentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_13__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_14__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_15__["AppCommonSharedModule"],
                _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_19__["ManageSearchCriteriaModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_21__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], OrderDocumentModule);
    return OrderDocumentModule;
}());



/***/ }),

/***/ "./src/app/main/logistics/order-document/search/order-document-search.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/logistics/order-document/search/order-document-search.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">\r\n        {{ \"page.searchPage\" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"openNewOrderDocument()\" *ngIf=\"hasUpdateAccessRight\">\r\n      {{ \"global.create\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row search-criteria-header\">\r\n                  <!-- <i\r\n                    class=\"fa fa-fw fa-floppy-o aw-icon aw-icon-with-border search-criteria-action\"\r\n                    aria-hidden=\"true\"\r\n                    pTooltip=\"{{ 'global.save' | translate }}\"\r\n                    tooltipPosition=\"top\"\r\n                  ></i>\r\n                  <i\r\n                    class=\"fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action\"\r\n                    aria-hidden=\"true\"\r\n                    pTooltip=\"{{ 'global.reset' | translate }}\"\r\n                    tooltipPosition=\"top\"\r\n                    (click)=\"resetSearchCriteria()\"\r\n                  ></i> -->\r\n                  <aw-manage-search-criteria\r\n                    [componentId]=\"SEARCH_CRITERIA_ID\"\r\n                    (onSelected)=\"loadSearchCriteria($event)\"\r\n                    (onSavedAsked)=\"saveSearchCriteriaAsked()\"\r\n                    [objectFromPage]=\"criteriaToSave\"\r\n                    [canChange]=\"!hasBeenCalculated\"\r\n                  ></aw-manage-search-criteria>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".code\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" maxlength=\"20\" [(ngModel)]=\"bidtPurchaseDTO.prCode\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".status\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"orderDocumentStatus\"\r\n                        [(ngModel)]=\"bidtPurchaseDTO.prStatus\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".name\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" maxlength=\"20\" [(ngModel)]=\"bidtPurchaseDTO.prName\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".category\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"orderDocumentCategories\"\r\n                        [(ngModel)]=\"bidtPurchaseDTO.prCategory\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                        (onChange)=\"loadOrderDocumentTypes()\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".type\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"orderDocumentTypes\"\r\n                        [(ngModel)]=\"bidtPurchaseDTO.prType\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".description\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" maxlength=\"20\" [(ngModel)]=\"bidtPurchaseDTO.prDescription\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"advanced-criteria\" [ngClass]=\"{ 'display--none': !showAdvancedCriteria }\">\r\n                  <div class=\"grid-row\">\r\n                    <div class=\"grid-cell--3\">\r\n                      <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                        <div class=\"section\">\r\n                          <h4 class=\"section-title\">{{ componentData.componentId + \".dates\" | translate }}</h4>\r\n                          <div class=\"section-content\">\r\n                            <div class=\"row\">\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\r\n                                  componentData.componentId + \".creationDate\" | translate\r\n                                }}</label>\r\n                                <div class=\"form-control\">\r\n                                  <p-calendar\r\n                                    showButtonBar=\"true\"\r\n                                    [monthNavigator]=\"true\"\r\n                                    [yearNavigator]=\"true\"\r\n                                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                                    class=\"aw-calendar\"\r\n                                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                                    [locale]=\"sessionService.calendarFormat\"\r\n                                    [(ngModel)]=\"searchObject.creationDate\"\r\n                                  ></p-calendar>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"bidtPurchaseDTO.prCategory === '4-ord'\">\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\r\n                                  componentData.componentId + \".receptionDate\" | translate\r\n                                }}</label>\r\n                                <div class=\"form-control\">\r\n                                  <p-calendar\r\n                                    showButtonBar=\"true\"\r\n                                    [monthNavigator]=\"true\"\r\n                                    [yearNavigator]=\"true\"\r\n                                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                                    class=\"aw-calendar\"\r\n                                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                                    [locale]=\"sessionService.calendarFormat\"\r\n                                    [(ngModel)]=\"searchObject.receptionDate\"\r\n                                  ></p-calendar>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div\r\n                              class=\"row\"\r\n                              *ngIf=\"bidtPurchaseDTO.prCategory === '1-con' || bidtPurchaseDTO.prCategory === '3-quo'\"\r\n                            >\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\r\n                                  componentData.componentId + \".startDate\" | translate\r\n                                }}</label>\r\n                                <div class=\"form-control\">\r\n                                  <p-calendar\r\n                                    showButtonBar=\"true\"\r\n                                    [monthNavigator]=\"true\"\r\n                                    [yearNavigator]=\"true\"\r\n                                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                                    class=\"aw-calendar\"\r\n                                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                                    [locale]=\"sessionService.calendarFormat\"\r\n                                    [(ngModel)]=\"searchObject.startDate\"\r\n                                  ></p-calendar>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div\r\n                              class=\"row\"\r\n                              *ngIf=\"bidtPurchaseDTO.prCategory === '1-con' || bidtPurchaseDTO.prCategory === '3-quo'\"\r\n                            >\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\r\n                                  componentData.componentId + \".endDate\" | translate\r\n                                }}</label>\r\n                                <div class=\"form-control\">\r\n                                  <p-calendar\r\n                                    showButtonBar=\"true\"\r\n                                    [monthNavigator]=\"true\"\r\n                                    [yearNavigator]=\"true\"\r\n                                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                                    class=\"aw-calendar\"\r\n                                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                                    [locale]=\"sessionService.calendarFormat\"\r\n                                    [(ngModel)]=\"searchObject.endDate\"\r\n                                  ></p-calendar>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"bidtPurchaseDTO.prCategory !== '2-req'\" class=\"grid-cell--3\">\r\n                      <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                        <div class=\"section\">\r\n                          <h4 class=\"section-title\">{{ componentData.componentId + \".supplier\" | translate }}</h4>\r\n                          <div class=\"section-content\">\r\n                            <div class=\"row\">\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{ componentData.componentId + \".code\" | translate }}</label>\r\n                                <div class=\"form-control\">\r\n                                  <p-dropdown\r\n                                    class=\"aw-dropdown fixed-width\"\r\n                                    [showClear]=\"true\"\r\n                                    placeholder=\"&nbsp;\"\r\n                                    [options]=\"orderDocumentSuppliers\"\r\n                                    [(ngModel)]=\"searchObject.searchSupplier\"\r\n                                  ></p-dropdown>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\"\r\n                                  >{{ componentData.componentId + \".docNo\" | translate }}&#176;</label\r\n                                >\r\n                                <div class=\"form-control\">\r\n                                  <input\r\n                                    type=\"text\"\r\n                                    class=\"aw-input\"\r\n                                    maxlength=\"20\"\r\n                                    [(ngModel)]=\"bidtPurchaseDTO.supplierDocumentNumber\"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"grid-cell--3\">\r\n                      <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                        <div class=\"section\">\r\n                          <h4 class=\"section-title\">\r\n                            {{ componentData.componentId + \".materialAndServices\" | translate }}\r\n                          </h4>\r\n                          <div class=\"section-content\">\r\n                            <div class=\"row\">\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\r\n                                  componentData.componentId + \".material\" | translate\r\n                                }}</label>\r\n\r\n                                <div\r\n                                  class=\"form-control form-control-with-modal\"\r\n                                  [ngClass]=\"{ disabled: isReadOpenMode }\"\r\n                                >\r\n                                  <div class=\"form-control-data\" (click)=\"searchMaterialCode()\">\r\n                                    {{ searchObject.material }}\r\n                                  </div>\r\n\r\n                                  <div *ngIf=\"searchObject.material\" class=\"btn-clear-wrapper\">\r\n                                    <i\r\n                                      class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                                      aria-hidden=\"true\"\r\n                                      (click)=\"searchObject.material = undefined\"\r\n                                    ></i>\r\n                                  </div>\r\n                                  <div class=\"btn-search-wrapper\">\r\n                                    <i\r\n                                      class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                                      aria-hidden=\"true\"\r\n                                      (click)=\"searchMaterialCode()\"\r\n                                    ></i>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{ componentData.componentId + \".sNo\" | translate }}</label>\r\n                                <div class=\"form-control\">\r\n                                  <input type=\"text\" class=\"aw-input\" maxlength=\"20\" [(ngModel)]=\"searchObject.sn\" />\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{\r\n                                  componentData.componentId + \".batchNo\" | translate\r\n                                }}</label>\r\n                                <div class=\"form-control\">\r\n                                  <input\r\n                                    type=\"text\"\r\n                                    class=\"aw-input\"\r\n                                    maxlength=\"20\"\r\n                                    [(ngModel)]=\"searchObject.batchNumber\"\r\n                                  />\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"grid-cell--3\">\r\n                      <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                        <div class=\"section\">\r\n                          <h4 class=\"section-title\">\r\n                            {{ componentData.componentId + \".superiorDocument\" | translate }}\r\n                          </h4>\r\n                          <div class=\"section-content\">\r\n                            <div class=\"row\">\r\n                              <div class=\"form-group\">\r\n                                <label class=\"form-label\">{{ componentData.componentId + \".code\" | translate }}</label>\r\n\r\n                                <div\r\n                                  class=\"form-control form-control-with-modal\"\r\n                                  [ngClass]=\"{ disabled: isReadOpenMode }\"\r\n                                >\r\n                                  <div class=\"form-control-data\" (click)=\"searchSuperiorDocument()\">\r\n                                    {{ searchObject.purchaseRequestSupCode }}\r\n                                  </div>\r\n\r\n                                  <div *ngIf=\"searchObject.purchaseRequestSupCode\" class=\"btn-clear-wrapper\">\r\n                                    <i\r\n                                      class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                                      aria-hidden=\"true\"\r\n                                      (click)=\"searchObject.purchaseRequestSupCode = undefined\"\r\n                                    ></i>\r\n                                  </div>\r\n                                  <div class=\"btn-search-wrapper\">\r\n                                    <i\r\n                                      class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                                      aria-hidden=\"true\"\r\n                                      (click)=\"searchSuperiorDocument()\"\r\n                                    ></i>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row search-criteria-footer\">\r\n                  <button mat-button (click)=\"showAdvancedCriteria = !showAdvancedCriteria\">\r\n                    <ng-container *ngIf=\"showAdvancedCriteria\">\r\n                      <mat-icon>remove</mat-icon>\r\n                      {{ \"global.collapseCriteria\" | translate }}\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"!showAdvancedCriteria\">\r\n                      <mat-icon>add</mat-icon>\r\n                      {{ \"global.expandCriteria\" | translate }}\r\n                    </ng-container>\r\n                  </button>\r\n\r\n                  <div class=\"search-actions\">\r\n                    <button\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      (click)=\"search()\"\r\n                      color=\"primary\"\r\n                      appKeyPress\r\n                      [keyCode]=\"'Enter'\"\r\n                      (keyPress)=\"search()\"\r\n                    >\r\n                      {{ \"global.toSearch\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.results\" | translate }} ({{\r\n                    orderDocumentTable.list ? orderDocumentTable.list.length : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableResults\r\n                class=\"aw-table2\"\r\n                [columns]=\"orderDocumentTableCols\"\r\n                [value]=\"orderDocumentTable.list\"\r\n                [(selection)]=\"selectedOrderDocuments\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedOrderDocuments.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableResultsGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableResults.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"\r\n                          orderDocumentTable && orderDocumentTable.length > 0 && selectedOrderDocuments.length === 0\r\n                        \"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"exportTable()\"\r\n                      >\r\n                        {{ \"global.export\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"hasManageAccessRight && selectedOrderDocuments.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteOrderDocuments()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedOrderDocuments.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openSelectedOrderDocuments()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n                    <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <a *ngSwitchCase=\"'code'\" (click)=\"openOrderDocument(rowData, componentOpenMode.Read)\">\r\n                        {{ rowData[col.field] }}</a\r\n                      >\r\n                      <a *ngSwitchCase=\"'superiorDocument'\" (click)=\"openSuperiorOrderDocument(rowData)\">\r\n                        {{ rowData[col.field] }}</a\r\n                      >\r\n                      <span *ngSwitchCase=\"'name'\"\r\n                        ><span title=\"{{ rowData[col.field] }}\">{{ rowData[col.field] }}</span></span\r\n                      >\r\n                      <span *ngSwitchCase=\"'category'\"\r\n                        ><span title=\"{{ rowData[col.field] }}\">{{ rowData[col.field] }}</span></span\r\n                      >\r\n                      <span *ngSwitchCase=\"'supplier'\"\r\n                        ><span title=\"{{ rowData[col.field] }}\">{{ rowData[col.field] }}</span></span\r\n                      >\r\n\r\n                      <span *ngSwitchCase=\"'type'\"\r\n                        ><span title=\"{{ rowData[col.field] }}\">{{ rowData[col.field] }}</span></span\r\n                      >\r\n                      <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-search-material\r\n  *ngIf=\"showQuickSearchMaterialPopup\"\r\n  [(display)]=\"showQuickSearchMaterialPopup\"\r\n  [material-code]=\"searchObject.productCode\"\r\n  (onSelected)=\"setSelectedMaterial($event)\"\r\n></aw-dialog-search-material>\r\n\r\n<aw-dialog-search-purchase-request\r\n  *ngIf=\"showQuickSearchPurchaseRequestPopup\"\r\n  [(display)]=\"showQuickSearchPurchaseRequestPopup\"\r\n  [pr-code]=\"searchObject.purchaseRequestSupCode\"\r\n  (onSelected)=\"setSelectedPurchaseRequest($event)\"\r\n></aw-dialog-search-purchase-request>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/order-document/search/order-document-search.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/logistics/order-document/search/order-document-search.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL29yZGVyLWRvY3VtZW50L3NlYXJjaC9vcmRlci1kb2N1bWVudC1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/logistics/order-document/search/order-document-search.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/order-document/search/order-document-search.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OrderDocumentSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDocumentSearchComponent", function() { return OrderDocumentSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/export.service */ "./src/app/shared/services/export.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _order_document_search_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./order-document-search.service */ "./src/app/main/logistics/order-document/search/order-document-search.service.ts");
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


















var OrderDocumentSearchComponent = /** @class */ (function (_super) {
    __extends(OrderDocumentSearchComponent, _super);
    /* ***************************************************************************/
    function OrderDocumentSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, dateService, orderDocumentSearchService, confirmationService, exportService, propertiesService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.dateService = dateService;
        _this.orderDocumentSearchService = orderDocumentSearchService;
        _this.confirmationService = confirmationService;
        _this.exportService = exportService;
        _this.propertiesService = propertiesService;
        _this.SEARCH_CRITERIA_ID = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].ORDER_DOCUMENT_SEARCH_CRITERIA_ID;
        _this.componentOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"];
        _this.init();
        _this.initOrderDocumentTableCols();
        _this.loadOrderDocumentCategories();
        _this.loadOrderDocumentStatus();
        _this.loadOrderDocumentSupplierCodes();
        return _this;
    }
    OrderDocumentSearchComponent_1 = OrderDocumentSearchComponent;
    OrderDocumentSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_ORDER_DOCUMENT_SEARCH;
    };
    OrderDocumentSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
    };
    OrderDocumentSearchComponent.prototype.deleteOrderDocuments = function () {
        var _this = this;
        var confirmMessageKey = this.selectedOrderDocuments.length > 1
            ? 'confirmDeleteSelectedOrderDocuments'
            : 'confirmDeleteSelectedOrderDocument';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(confirmMessageKey),
            accept: function () {
                var ids = [];
                _this.selectedOrderDocuments.forEach(function (orderDocument) {
                    if (!!orderDocument && !!orderDocument._obj.id) {
                        ids.push(orderDocument._obj.id);
                    }
                });
                _this.orderDocumentSearchService.remove(ids).subscribe(function () {
                    _this.search();
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteOrderDocument'));
                });
                _this.selectedOrderDocuments = [];
            }
        });
    };
    OrderDocumentSearchComponent.prototype.exportTable = function () {
        this.exportService.toExcel(this.orderDocumentTable.list, OrderDocumentSearchComponent_1.ORDER_DOCUMENT_TABLE_EXPORT_NAME, this.componentData.componentId);
    };
    OrderDocumentSearchComponent.prototype.openNewOrderDocument = function () {
        this.openOrderDocument(undefined, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Create);
    };
    OrderDocumentSearchComponent.prototype.openSelectedOrderDocuments = function () {
        var _this = this;
        this.selectedOrderDocuments.forEach(function (orderDocument) {
            if (!!orderDocument) {
                if (orderDocument._obj.id === null || orderDocument._obj.id === undefined) {
                    _this.messageService.showWarningMessage(_this.getTranslateKey('errorOnMissingOrderDocumentCode'));
                }
                else {
                    _this.openOrderDocument(orderDocument, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read);
                }
            }
        });
    };
    OrderDocumentSearchComponent.prototype.resetSearchCriteria = function () {
        this.bidtPurchaseDTO = {};
        this.searchObject = {
            bidtPurchaseDTO: this.bidtPurchaseDTO
        };
        this.criteriaName = undefined;
    };
    OrderDocumentSearchComponent.prototype.search = function () {
        var _this = this;
        this.isLoading = true;
        this.clearResultTable();
        _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
        this.searchObject.bidtPurchaseDTO = this.bidtPurchaseDTO;
        this.orderDocumentSearchService.findByCriteria(this.searchObject).subscribe(function (result) {
            _this.isLoading = false;
            _this.setOrderDocumentTable(result);
            _super.prototype.differ.call(_this, function () {
                _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
            });
        });
    };
    OrderDocumentSearchComponent.prototype.loadSearchCriteria = function (event) {
        var criteria = event.criteria;
        if (!criteria) {
            this.resetSearchCriteria();
            return;
        }
        // do not load criteria first time if we come from stock alert page
        if (!this.componentData.objectId) {
            this.criteriaName = event.name;
            this.searchObject = criteria || {};
            this.bidtPurchaseDTO = criteria.bidtPurchaseDTO || {};
        }
        else {
            this.componentData.objectId = undefined;
        }
        this.search();
    };
    OrderDocumentSearchComponent.prototype.saveSearchCriteriaAsked = function () {
        this.searchObject.bidtPurchaseDTO = this.bidtPurchaseDTO;
        var criteriaToSave = this.searchObject;
        this.criteriaToSave = criteriaToSave;
    };
    OrderDocumentSearchComponent.prototype.clearResultTable = function () {
        this.orderDocumentTable = { list: [], moreResults: false };
        this.selectedOrderDocuments = [];
    };
    OrderDocumentSearchComponent.prototype.init = function () {
        this.clearResultTable();
        this.resetSearchCriteria();
        this.orderDocumentCategories = [];
        this.orderDocumentStatus = [];
        this.orderDocumentSuppliers = [];
        this.orderDocumentTypes = [];
        this.isLoading = false;
        this.showAdvancedCriteria = false;
        this.receptionDateVisibility = false;
        this.startDateVisibility = false;
        this.endDateVisibility = false;
        this.showQuickSearchMaterialPopup = false;
        this.showQuickSearchPurchaseRequestPopup = false;
    };
    OrderDocumentSearchComponent.prototype.initOrderDocumentTableCols = function () {
        this.orderDocumentTableCols = [
            { field: 'code', alignment: 'left' },
            { field: 'name', alignment: 'left' },
            { field: 'category', alignment: 'left' },
            { field: 'type', alignment: 'left' },
            { field: 'supplier', alignment: 'left' },
            { field: 'supplierDocumentNumber', alignment: 'left' },
            { field: 'status', alignment: 'left' },
            { field: 'creationDate', alignment: 'left' },
            { field: 'receptionDate', alignment: 'left' },
            { field: 'startDate', alignment: 'left' },
            { field: 'endDate', alignment: 'left' },
            { field: 'superiorDocument', alignment: 'left' }
        ];
    };
    OrderDocumentSearchComponent.prototype.formatDate = function (date) {
        if (!!date) {
            return this.dateService.dateToString(new Date(date));
        }
        else {
            return '';
        }
    };
    OrderDocumentSearchComponent.prototype.loadOrderDocumentCategories = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__["GenericPropertyConstants"].PURCHASE_CATEGORY_MAP).subscribe(function (results) {
            _this.orderDocumentCategories = !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_16__["SelectItemUtils"].fromLabelValues(results) : [];
        });
    };
    OrderDocumentSearchComponent.prototype.loadOrderDocumentStatus = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__["GenericPropertyConstants"].PURCHASE_STATUS_MAP).subscribe(function (results) {
            _this.orderDocumentStatus = !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_16__["SelectItemUtils"].fromLabelValues(results) : [];
        });
    };
    OrderDocumentSearchComponent.prototype.loadOrderDocumentTypes = function () {
        var _this = this;
        this.bidtPurchaseDTO.prType = undefined;
        var category = this.searchObject.bidtPurchaseDTO && this.searchObject.bidtPurchaseDTO.prCategory;
        if (category !== null && category !== undefined) {
            this.orderDocumentSearchService.findTypeBasedOnCategory(category).subscribe(function (results) {
                _this.orderDocumentTypes = !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_16__["SelectItemUtils"].fromLabelValues(results) : [];
            });
        }
        else {
            this.orderDocumentTypes = [];
        }
    };
    OrderDocumentSearchComponent.prototype.loadOrderDocumentSupplierCodes = function () {
        var _this = this;
        this.orderDocumentSearchService.findBidoCustomerBySearchCriteriaOrder().subscribe(function (results) {
            _this.orderDocumentSuppliers = !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_16__["SelectItemUtils"].fromLabelValues(results) : [];
        });
    };
    OrderDocumentSearchComponent.prototype.openOrderDocument = function (object, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_ORDER_DOCUMENT_FORM,
            openMode: openMode
        };
        if (!!object) {
            data.objectId = this.serializationService.serialize(object);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    OrderDocumentSearchComponent.prototype.openSuperiorOrderDocument = function (object) {
        if (!!object) {
            var superiorRow = this.orderDocumentTable.list.filter(function (doc) { return doc.code === object.superiorDocument; })[0];
            this.openOrderDocument(superiorRow, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read);
        }
        // const data: PageComponentData = {
        //   id: this.tabService.generateId(),
        //   componentId: ComponentConstants.LOG_ORDER_DOCUMENT_FORM,
        //   openMode
        // };
        // if (!!object) {
        //   data.objectId = this.serializationService.serialize(object);
        // }
        // const labelKey = 'transaction.' + data.componentId;
        // this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    OrderDocumentSearchComponent.prototype.setOrderDocumentTable = function (result) {
        var _this = this;
        if (!!result) {
            this.orderDocumentTable.moreResults = result.moreResults;
            this.orderDocumentTable.list = result.list.map(function (orderDocument) {
                var orderDocumentRow = {
                    code: orderDocument.prCode,
                    name: orderDocument.prName,
                    status: orderDocument.prStatus,
                    creationDate: _this.formatDate(orderDocument.prCreationDate),
                    receptionDate: _this.formatDate(orderDocument.prReceptionDate),
                    category: orderDocument.prCategory,
                    type: orderDocument.prType,
                    startDate: _this.formatDate(orderDocument.prStartDate),
                    endDate: _this.formatDate(orderDocument.prEndDate),
                    supplierDocumentNumber: orderDocument.supplierDocumentNumber,
                    supplier: orderDocument.supplier,
                    superiorDocument: orderDocument.superiorDocument,
                    _obj: orderDocument
                };
                return orderDocumentRow;
            });
        }
        this.selectedOrderDocuments = [];
    };
    OrderDocumentSearchComponent.prototype.searchMaterialCode = function () {
        this.showQuickSearchMaterialPopup = true;
    };
    OrderDocumentSearchComponent.prototype.searchSuperiorDocument = function () {
        this.showQuickSearchPurchaseRequestPopup = true;
    };
    OrderDocumentSearchComponent.prototype.setSelectedMaterial = function (selectedObject) {
        if (selectedObject) {
            this.searchObject.material = selectedObject.pnCode;
        }
        this.showQuickSearchMaterialPopup = false;
    };
    OrderDocumentSearchComponent.prototype.setSelectedPurchaseRequest = function (selectedObject) {
        if (selectedObject) {
            this.searchObject.purchaseRequestSupCode = selectedObject.prCode;
        }
        this.showQuickSearchPurchaseRequestPopup = false;
    };
    var OrderDocumentSearchComponent_1;
    OrderDocumentSearchComponent.ORDER_DOCUMENT_TABLE_EXPORT_NAME = 'order-document-list';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resultsContainerAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], OrderDocumentSearchComponent.prototype, "resultsContainerAnchor", void 0);
    OrderDocumentSearchComponent = OrderDocumentSearchComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-order-document-search',
            template: __webpack_require__(/*! ./order-document-search.component.html */ "./src/app/main/logistics/order-document/search/order-document-search.component.html"),
            styles: [__webpack_require__(/*! ./order-document-search.component.scss */ "./src/app/main/logistics/order-document/search/order-document-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"],
            _order_document_search_service__WEBPACK_IMPORTED_MODULE_17__["OrderDocumentSearchService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
            _shared_services_export_service__WEBPACK_IMPORTED_MODULE_7__["ExportService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__["PropertiesService"]])
    ], OrderDocumentSearchComponent);
    return OrderDocumentSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_15__["PageComponent"]));



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
//# sourceMappingURL=logistics-order-document-order-document-module.js.map