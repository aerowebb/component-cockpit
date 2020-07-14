(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-sales-document-sales-document-module"],{

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

/***/ "./src/app/main/logistics/sales-document/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/sales-document/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docName\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          class=\"aw-input\"\r\n          maxlength=\"100\"\r\n          [(ngModel)]=\"document.documentName\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docDescription\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <textarea\r\n          class=\"aw-textarea\"\r\n          pInputTextarea\r\n          [rows]=\"3\"\r\n          [(ngModel)]=\"document.documentDescription\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          maxlength=\"300\"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" color=\"primary\" type=\"button\" mat-raised-button (click)=\"validate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/sales-document/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/sales-document/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.ts ***!
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
            template: __webpack_require__(/*! ./dialog-business-partner-bido-document.component.html */ "./src/app/main/logistics/sales-document/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DialogBusinessPartnerBidoDocumentComponent);
    return DialogBusinessPartnerBidoDocumentComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/sales-document/dialog-material-and-services/dialog-material-and-services.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/sales-document/dialog-material-and-services/dialog-material-and-services.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOnlyForm }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".material\" | translate }}</label>\r\n\r\n      <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: !newObj }\">\r\n        <div class=\"form-control-data\" (click)=\"openMaterialDialog()\">\r\n          {{ obj.pnText }}\r\n        </div>\r\n\r\n        <div *ngIf=\"obj.pnText && newObj\" class=\"btn-clear-wrapper\">\r\n          <i\r\n            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n            aria-hidden=\"true\"\r\n            (click)=\"obj.pnText = undefined\"\r\n          ></i>\r\n        </div>\r\n        <div *ngIf=\"newObj\" class=\"btn-search-wrapper\">\r\n          <i\r\n            *ngIf=\"!isReadOnlyForm\"\r\n            class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n            aria-hidden=\"true\"\r\n            (click)=\"openMaterialDialog()\"\r\n          ></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"snVisibility\" class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".serialNumber\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"obj.serialNumber\" maxlength=\"50\" [disabled]=\"isReadOnlyForm\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"bnVisibility\" class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".batchNumber\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"obj.batchNumber\" maxlength=\"50\" [disabled]=\"isReadOnlyForm\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".quantity\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input\r\n          type=\"text\"\r\n          pKeyFilter=\"int\"\r\n          maxlength=\"37\"\r\n          class=\"aw-input\"\r\n          [(ngModel)]=\"obj.quantityForTable\"\r\n          [disabled]=\"isReadOnlyForm\"\r\n        />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".warehouse\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          [options]=\"warehouses\"\r\n          [(ngModel)]=\"obj.warehouse\"\r\n          [disabled]=\"isReadOnlyForm\"\r\n          [showClear]=\"true\"\r\n          placeholder=\"&nbsp;\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".partStatus\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"obj.partStatus\" disabled />\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span *ngIf=\"!isReadOnlyForm\">{{ \"global.cancel\" | translate }}</span>\r\n      <span *ngIf=\"isReadOnlyForm\">{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOnlyForm\"\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"associate()\"\r\n      [disabled]=\"!obj.pnText\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-material\r\n  *ngIf=\"showQuickSearchMaterialPopup\"\r\n  [(display)]=\"showQuickSearchMaterialPopup\"\r\n  [material-code]=\"pnCode\"\r\n  (onSelected)=\"setSelectedMaterial($event)\"\r\n></aw-dialog-search-material>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/sales-document/dialog-material-and-services/dialog-material-and-services.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/sales-document/dialog-material-and-services/dialog-material-and-services.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: DialogMaterialAndServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMaterialAndServicesComponent", function() { return DialogMaterialAndServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _form_sales_document_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/sales-document-form.service */ "./src/app/main/logistics/sales-document/form/sales-document-form.service.ts");
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
    function DialogMaterialAndServicesComponent(salesDocumentFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'DialogMaterialsComponent') || this;
        _this.salesDocumentFormService = salesDocumentFormService;
        _this.init();
        return _this;
    }
    DialogMaterialAndServicesComponent.prototype.ngOnInit = function () {
        if (!this.obj) {
            this.obj = {
                price: 0,
                productionLeadTime: 0,
                bidtStockMvtDTO: {},
                quantity: 0
            };
            this.pnCode = undefined;
        }
        else {
            this.pnCode = !!this.obj.bidtStockMvtDTO ? this.obj.bidtStockMvtDTO.birePnPnCode : undefined;
            if (!!this.obj.quantityForTable) {
                var qty = this.obj.quantityForTable.split(',');
                var quantity = '';
                for (var i = 0; i < qty.length; i++) {
                    quantity = "" + quantity + qty[i];
                }
                this.obj.quantityForTable = quantity;
            }
            if (!!this.pnCode) {
                this.setSnBnVisibility(this.pnCode);
                this.loadWarehouses();
            }
        }
    };
    DialogMaterialAndServicesComponent.prototype.init = function () {
        this.showQuickSearchMaterialPopup = false;
        this.warehouses = [];
        this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.snVisibility = false;
        this.bnVisibility = false;
    };
    DialogMaterialAndServicesComponent.prototype.openMaterialDialog = function () {
        if (this.newObj) {
            this.showQuickSearchMaterialPopup = true;
        }
    };
    DialogMaterialAndServicesComponent.prototype.setSelectedMaterial = function (selectedObject) {
        if (selectedObject) {
            this.obj.pnText = !!selectedObject.articleDesignation
                ? selectedObject.pnCode + " / " + selectedObject.articleDesignation
                : selectedObject.pnCode;
            this.pnCode = selectedObject.pnCode;
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
            this.salesDocumentFormService.displayWarehouse(this.pnCode).subscribe(function (results) {
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
        this.salesDocumentFormService.findBirePn(input).subscribe(function (result) {
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
                id: this.obj.id
            };
            if (!!this.obj.quantityForTable) {
                this.obj.bidtStockMvtDTO.stockMvtQuantity = this.obj.quantityForTable;
            }
            if (!!this.obj.warehouse) {
                var radix = 10;
                this.obj.bidtStockMvtDTO.bidtWarehouseId = Number.parseInt(this.obj.warehouse, radix);
                this.obj.warehouse = this.warehouses.filter(function (ware) { return ware.value === _this.obj.warehouse; })[0].label;
            }
            if (this.obj.bidtStockMvtDTO.id === null || this.obj.bidtStockMvtDTO.id === undefined) {
                this.obj.bidtStockMvtDTO.id = Math.random();
            }
            if (!!this.obj.quantityForTable) {
                this.obj.quantityForTable = this.numberStringToStringWithCommas(this.obj.quantityForTable);
            }
        }
    };
    /***************
     * Helper method
     **************/
    DialogMaterialAndServicesComponent.prototype.numberToStringWithCommas = function (n) {
        var parts = n.toString().split('.');
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '');
    };
    DialogMaterialAndServicesComponent.prototype.numberStringToStringWithCommas = function (n) {
        var parts = n.split('.');
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '');
    };
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
            template: __webpack_require__(/*! ./dialog-material-and-services.component.html */ "./src/app/main/logistics/sales-document/dialog-material-and-services/dialog-material-and-services.component.html")
        }),
        __metadata("design:paramtypes", [_form_sales_document_form_service__WEBPACK_IMPORTED_MODULE_4__["SalesDocumentFormService"]])
    ], DialogMaterialAndServicesComponent);
    return DialogMaterialAndServicesComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/sales-document/form/sales-document-form.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/sales-document/form/sales-document-form.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aw-component-sidebar\r\n  *ngIf=\"mainData.srCode\"\r\n  [toc]=\"toc\"\r\n  [(visibility)]=\"rightSidebarVisibility\"\r\n  [ngClass]=\"{ collapsed: rightSidebarCollapsed, expanded: rightSidebarExpanded }\"\r\n></aw-component-sidebar>\r\n\r\n<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          *ngIf=\"!isCreateOpenMode && componentData && componentData.objectId\"\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div *ngIf=\"!isCreateOpenMode && componentData && componentData.objectId\" class=\"page-subtitle\">\r\n        {{ pageSubtitle }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <p-splitButton\r\n      *ngIf=\"databaseMaterials.length !== 0\"\r\n      class=\"aw-split-btn aw-table-action\"\r\n      label=\"{{ getComponentName() + '.navigate' | translate }}\"\r\n      [model]=\"navigationLinkList\"\r\n    ></p-splitButton>\r\n\r\n    <button *ngIf=\"isReadOpenMode && !isCreateOpenMode\" type=\"button\" mat-raised-button (click)=\"reloadSalesDoc()\">\r\n      {{ \"global.refresh\" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf=\"isReadOpenMode && hasUpdateAccessRight\" type=\"button\" mat-raised-button (click)=\"editSalesDoc()\">\r\n      {{ \"global.edit\" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode && !isCreateOpenMode\" type=\"button\" mat-raised-button (click)=\"cancelSalesDoc()\">\r\n      {{ \"global.cancel\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      class=\"btn-with-spinner\"\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"saveSalesDoc()\"\r\n    >\r\n      <span class=\"lds-hourglass\" *ngIf=\"showSaveSpinner\"></span>\r\n      {{ \"global.save\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div #mainInformationAnchor class=\"grid-cell--12\" (click)=\"selectPageTocEntry(component.MAIN_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: isPageTocEntrySelected(component.MAIN_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"page.mainData\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"form-group flex--2\">\r\n                <label class=\"form-label\"> {{ componentData.componentId + \".srCode\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"mainData.srCode\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group flex--2\">\r\n                <label class=\"form-label\"> {{ componentData.componentId + \".srName\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"aw-input\"\r\n                    [(ngModel)]=\"mainData.srName\"\r\n                    maxlength=\"100\"\r\n                    [disabled]=\"isReadOpenMode\"\r\n                  />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group flex--2\">\r\n                <label class=\"form-label\">{{ componentData.componentId + \".srDescription\" | translate }}</label>\r\n\r\n                <div class=\"form-control\">\r\n                  <textarea\r\n                    pInputTextarea\r\n                    [rows]=\"3\"\r\n                    class=\"aw-textarea\"\r\n                    maxlength=\"40\"\r\n                    [(ngModel)]=\"mainData.srDescription\"\r\n                    [disabled]=\"isReadOpenMode\"\r\n                  ></textarea>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"form-group flex--2\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                <label class=\"form-label\">\r\n                  {{ componentData.componentId + \".creationDate\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-calendar\r\n                    showButtonBar=\"true\"\r\n                    [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\"\r\n                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                    class=\"aw-calendar\"\r\n                    [locale]=\"sessionService.calendarFormat\"\r\n                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                    [(ngModel)]=\"mainData.srCreationDate\"\r\n                    [disabled]=\"isReadOpenMode\"\r\n                    [maxDate]=\"currDate\"\r\n                  ></p-calendar>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group flex--2\">\r\n                <label class=\"form-label\">\r\n                  {{ componentData.componentId + \".bidoCustomerCustomerCode\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [showClear]=\"true\"\r\n                    placeholder=\"&nbsp;\"\r\n                    [options]=\"salesDocumentCustomers\"\r\n                    [(ngModel)]=\"mainData.bidoCustomerCustomerCode\"\r\n                    [disabled]=\"isReadOpenMode\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group flex--2\"></div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"form-group flex--2\">\r\n                <label class=\"form-label\">\r\n                  {{ componentData.componentId + \".deliveryDate\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-calendar\r\n                    showButtonBar=\"true\"\r\n                    [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\"\r\n                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                    class=\"aw-calendar\"\r\n                    [locale]=\"sessionService.calendarFormat\"\r\n                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                    [(ngModel)]=\"mainData.srDeliveryDate\"\r\n                    [disabled]=\"isReadOpenMode\"\r\n                  ></p-calendar>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group flex--2\">\r\n                <label class=\"form-label\">\r\n                  {{ componentData.componentId + \".srStatus\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [options]=\"salesDocumentStatus\"\r\n                    [showClear]=\"true\"\r\n                    [(ngModel)]=\"mainData.srStatus\"\r\n                    placeholder=\"&nbsp;\"\r\n                    [disabled]=\"isReadOpenMode\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group flex--2\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div [hidden]=\"!mainData.srCode\" class=\"grid-row\">\r\n        <div #msAnchor class=\"grid-cell--12\" (click)=\"selectPageTocEntry(component.MATERIALS_ANCHOR_ID)\">\r\n          <div\r\n            *ngIf=\"mainData.srCode\"\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: isPageTocEntrySelected(component.MATERIALS_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".materialsList\" | translate }} ({{\r\n                    materialsTable ? materialsTable.length : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #pTableMaterialsAndServices\r\n                class=\"aw-table2\"\r\n                [columns]=\"materialsTableCols\"\r\n                [value]=\"materialsTable\"\r\n                [(selection)]=\"selectedMaterials\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isMaterialsTableLoading\">&nbsp;</span>\r\n\r\n                  <div *ngIf=\"isMaterialsTableLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedMaterials.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableDecompositionGlobalFilter\r\n                        type=\"text\"\r\n                        class=\"aw-table-global-filter-input\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"pTableMaterialsAndServices.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"selectedMaterials.length === 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"goToGoodsMovements()\"\r\n                        [disabled]=\"databaseMaterials.length === 0\"\r\n                      >\r\n                        {{ componentData.componentId + \".goodsMovements\" | translate }}\r\n                      </button>\r\n\r\n                      <!-- <button\r\n                        *ngIf=\"!isReadOpenMode && selectedMaterials.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"goToStockMovements()\"\r\n                      >\r\n                        {{ componentData.componentId + \".stockMovements\" | translate }}\r\n                      </button> -->\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && selectedMaterials.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"deleteMaterials()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && selectedMaterials.length === 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"createMaterial()\"\r\n                      >\r\n                        {{ \"global.add\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && selectedMaterials.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"editMaterial()\"\r\n                      >\r\n                        {{ \"global.edit\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedMaterials.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openMaterial()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col *ngIf=\"!isReadOpenMode\" class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <!-- <tr>\r\n                    <th *ngIf=\"!isReadOpenMode\" colspan=\"6\"></th>\r\n                    <th *ngIf=\"isReadOpenMode\" colspan=\"5\"></th>\r\n\r\n                    <th *ngIf=\"hideUPrices\" colspan=\"4\" class=\"table-border-left\" style=\"text-align: center\">\r\n                      {{ getComponentName() + \".unitPrices\" | translate }}\r\n                    </th>\r\n                    <th colspan=\"2\" class=\"table-border-left\" style=\"text-align: center\">\r\n                      {{ getComponentName() + \".totalPrices\" | translate }}\r\n                    </th>\r\n                    <th colspan=\"3\" class=\"table-border-left\" style=\"text-align: center\">\r\n                      {{ getComponentName() + \".stockMovements\" | translate }}\r\n                    </th>\r\n                  </tr> -->\r\n\r\n                  <tr>\r\n                    <th *ngIf=\"!isReadOpenMode\" class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td *ngIf=\"!isReadOpenMode\" class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <span *ngSwitchCase=\"'pnText'\">\r\n                        <a (click)=\"goToMaterial(rowData)\">\r\n                          <span title=\"{{ rowData[col.field] }}\">{{ rowData[col.field] }}</span>\r\n                        </a>\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'warehouse'\">\r\n                        <span title=\"{{ rowData[col.field] }}\">{{ rowData[col.field] }}</span>\r\n                      </span>\r\n\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div [hidden]=\"!mainData.srCode\" class=\"grid-row\">\r\n        <div #documentAnchor class=\"grid-cell--12\" (click)=\"selectPageTocEntry(component.DOCUMENTS_ANCHOR_ID)\">\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            *ngIf=\"mainData.srCode\"\r\n            [ngClass]=\"{ active: isPageTocEntrySelected(component.DOCUMENTS_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.documents\" | translate }}\r\n                  ({{ documentTable ? documentTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableDocument\r\n                class=\"aw-table2\"\r\n                [columns]=\"documentTableCols\"\r\n                [value]=\"documentTable\"\r\n                [(selection)]=\"selectedDocuments\"\r\n                dataKey=\"docName\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoadingDocumentTable\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoadingDocumentTable\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedDocuments.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableDocumentGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableDocument.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"selectedDocuments.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"downloadFiles()\"\r\n                      >\r\n                        {{ \"global.download\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && selectedDocuments.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteDocuments()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && selectedDocuments.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"editDocument()\"\r\n                      >\r\n                        {{ \"global.edit\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedDocuments.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openDocument()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n\r\n                      <p-fileUpload\r\n                        #fileUploader\r\n                        *ngIf=\"!isReadOpenMode && selectedDocuments.length === 0\"\r\n                        class=\"aw-fileupload aw-table-action\"\r\n                        chooseLabel=\"{{ 'global.upload' | translate }}\"\r\n                        name=\"document[]\"\r\n                        customUpload=\"true\"\r\n                        mode=\"basic\"\r\n                        auto=\"true\"\r\n                        (uploadHandler)=\"uploadDocument($event, fileUploader)\"\r\n                      ></p-fileUpload>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\" [ngClass]=\"{ 'display--none': isReadOpenMode }\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ rowData[col.field] }}\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-business-partner-bido-document\r\n  *ngIf=\"showDocumentDialog\"\r\n  [(display)]=\"showDocumentDialog\"\r\n  [document]=\"currentDocument\"\r\n  [openMode]=\"documentDialogOpenMode\"\r\n  [types]=\"documentTypes\"\r\n  (onValidated)=\"onAddDocument($event)\"\r\n></aw-dialog-business-partner-bido-document>\r\n\r\n<aw-dialog-material-and-services\r\n  *ngIf=\"showDialogMaterialAndServices\"\r\n  [(display)]=\"showDialogMaterialAndServices\"\r\n  [obj]=\"currentMaterialObject\"\r\n  [isReadOnlyForm]=\"isReadOnlyPopup\"\r\n  [newObj]=\"isNewMaterialObject\"\r\n  (onCreate)=\"addNewMaterial($event)\"\r\n  (onUpdate)=\"updateMaterial($event)\"\r\n></aw-dialog-material-and-services>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/sales-document/form/sales-document-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/sales-document/form/sales-document-form.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3NhbGVzLWRvY3VtZW50L2Zvcm0vc2FsZXMtZG9jdW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/logistics/sales-document/form/sales-document-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/logistics/sales-document/form/sales-document-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SalesDocumentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesDocumentFormComponent", function() { return SalesDocumentFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _search_sales_document_search_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../search/sales-document-search.service */ "./src/app/main/logistics/sales-document/search/sales-document-search.service.ts");
/* harmony import */ var _sales_document_form_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sales-document-form.service */ "./src/app/main/logistics/sales-document/form/sales-document-form.service.ts");
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






















var SalesDocumentFormComponent = /** @class */ (function (_super) {
    __extends(SalesDocumentFormComponent, _super);
    function SalesDocumentFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, pageTocService, sessionService, translateService, salesDocumentFormService, salesDocumentSearchService, propertiesService, dateService, confirmationService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.salesDocumentFormService = salesDocumentFormService;
        _this.salesDocumentSearchService = salesDocumentSearchService;
        _this.propertiesService = propertiesService;
        _this.dateService = dateService;
        _this.confirmationService = confirmationService;
        _this.SET_TIME_OUT = 500;
        _this.component = SalesDocumentFormComponent_1;
        _this.setNavigationLinkList();
        _this.registerPageTocEntryObservable();
        _this.currDate = new Date();
        _this.init();
        _this.setTableCols();
        _this.loadDropdowns();
        return _this;
    }
    SalesDocumentFormComponent_1 = SalesDocumentFormComponent;
    SalesDocumentFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (!!this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            this.setTableOfContent();
            this.pageId = !!this.componentData.objectId
                ? this.serializationService.deserialize(this.componentData.objectId).id
                : undefined;
            if (this.pageId !== null && this.pageId !== undefined) {
                this.loadSalesDoc();
            }
            else {
                this.mainData.srCreationDate = new Date();
                this.displayComponentContext('tab.createMode', this.isCreateOpenMode);
            }
        }
    };
    SalesDocumentFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].LOG_SALES_DOCUMENT_FORM;
    };
    SalesDocumentFormComponent.prototype.init = function () {
        // general
        this.pageId = undefined;
        // dropdowns
        this.salesDocumentCustomers = [];
        this.salesDocumentStatus = [];
        // materials table
        this.materialsTableCols = [];
        // documents table
        this.showDocumentDialog = false;
        this.isLoadingDocumentTable = false;
        this.initAfterSave();
    };
    SalesDocumentFormComponent.prototype.initAfterSave = function () {
        // general
        this.pageSubtitle = '';
        this.mainData = {};
        // materials table
        this.materialsTable = [];
        this.databaseMaterials = [];
        this.selectedMaterials = [];
        this.isMaterialsTableLoading = false;
        this.showDialogMaterialAndServices = false;
        this.currentMaterialObject = undefined;
        this.isNewMaterialObject = false;
        this.isReadOnlyPopup = false;
        // documents table
        this.documentsAdded = [];
        this.documentsRemoved = [];
        this.documentsUpdated = [];
        this.documents = [];
        this.documentTable = [];
        this.documentTypes = [];
        this.selectedDocuments = [];
        this.currentDocument = undefined;
        this.currentDocumentIndex = -1;
        this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read;
        this.documentDataRemoveList = [];
    };
    SalesDocumentFormComponent.prototype.setTableCols = function () {
        this.materialsTableCols = [
            { field: 'pnText', alignment: 'left', width: '30%' },
            { field: 'serialNumber', alignment: 'left' },
            { field: 'batchNumber', alignment: 'left' },
            { field: 'quantityForTable', alignment: 'left' },
            { field: 'warehouse', alignment: 'left' },
            { field: 'partStatus', alignment: 'left' }
        ];
        this.documentTableCols = [
            { field: 'docName', alignment: 'left', width: '40%' },
            { field: 'docExtension', alignment: 'left', width: '20%' },
            { field: 'docSize', alignment: 'left', width: '20%' },
            { field: 'docAttachmentDate', alignment: 'left', width: '20%' }
        ];
    };
    SalesDocumentFormComponent.prototype.setNavigationLinkList = function () {
        var _this = this;
        var goodsMovementKey = this.getTranslateKey('goodsMovement');
        var stockMovementKey = this.getTranslateKey('stockMovement');
        this.translateService.get([goodsMovementKey, stockMovementKey]).subscribe(function (results) {
            var goodsMovementLabel = results ? results[goodsMovementKey] : 'Goods Movements';
            _this.navigationLinkList = [
                {
                    label: goodsMovementLabel,
                    command: function () {
                        _this.goToGoodsMovements();
                    }
                }
            ];
        });
    };
    /*******************
     * Table Of Content
     ******************/
    SalesDocumentFormComponent.prototype.setTableOfContent = function () {
        var _this = this;
        var mainDataKey = 'page.mainData';
        var materialsKey = this.getTranslateKey('materials');
        var documentsKey = 'global.documents';
        this.translateService.get([mainDataKey, materialsKey, documentsKey]).subscribe(function (results) {
            var mainDataLabel = !!results ? results[mainDataKey] : 'Main Information';
            var materialsLabel = !!results ? results[materialsKey] : 'Materials';
            var documentsLabel = !!results ? results[documentsKey] : 'Documents';
            _this.toc = [
                {
                    id: 'mainInformationAnchor',
                    anchor: _this.mainInformationEltRef,
                    label: mainDataLabel
                },
                {
                    id: 'materialsAnchor',
                    anchor: _this.materialsEltRef,
                    label: materialsLabel
                },
                {
                    id: 'documentsAnchor',
                    anchor: _this.documentsEltRef,
                    label: documentsLabel
                }
            ];
            setTimeout(function () {
                _super.prototype.selectPageTocEntry.call(_this, _this.component.MAIN_ANCHOR_ID);
            }, _this.SET_TIME_OUT);
        });
    };
    /**************
     * Page loading
     *************/
    SalesDocumentFormComponent.prototype.loadSalesDoc = function () {
        var _this = this;
        this.isMaterialsTableLoading = true;
        this.isLoadingDocumentTable = true;
        if (this.pageId !== null && this.pageId !== undefined) {
            this.salesDocumentFormService.getById(this.pageId).subscribe(function (result) {
                // Main Information
                _this.mainData = result.bidtSalesRequestDTO || {};
                // this.componentData.objectId = this.serializationService.serialize(this.mainData);
                _this.setPageContext();
                // Materials Table
                _this.materialsTable = result.materialAndServicesOutputList || [];
                _this.databaseMaterials = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(_this.materialsTable);
                // Documents Table
                _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__["ListUtils"].orEmpty(result.documentTablist)
                    .filter(function (document) { return !!document.documentName; })
                    .forEach(function (doc) {
                    _this.documents.push(doc.bidtDocumentDTO);
                });
                _this.documentTable = _this.documents.map(function (document) { return _this.createDocumentRow(document); });
            });
            this.isMaterialsTableLoading = false;
            this.isLoadingDocumentTable = false;
        }
    };
    SalesDocumentFormComponent.prototype.setPageContext = function () {
        var context = 'tab.create';
        if (!!this.mainData.srCode) {
            context = this.mainData.srCode;
            context = !!this.mainData.srName ? context + " | " + this.mainData.srName : context;
            context = !!this.mainData.bidoCustomerCustomerCode
                ? context + " | " + this.mainData.bidoCustomerCustomerCode
                : context;
        }
        this.pageSubtitle = context;
        // if (!this.isCreateOpenMode) {
        //   this.updateOpenMode(ComponentOpenMode.Write);
        // }
        this.displayComponentContext(context, this.isCreateOpenMode);
    };
    /***********
     * Dropdowns
     **********/
    SalesDocumentFormComponent.prototype.loadDropdowns = function () {
        this.loadSalesDocumentStatus();
        this.loadSalesDocumentCustomers();
    };
    SalesDocumentFormComponent.prototype.loadSalesDocumentStatus = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__["GenericPropertyConstants"].PURCHASE_STATUS_MAP).subscribe(function (results) {
            _this.salesDocumentStatus = results || [];
        });
    };
    SalesDocumentFormComponent.prototype.loadSalesDocumentCustomers = function () {
        var _this = this;
        this.salesDocumentSearchService.fetchSupplierDropDownData().subscribe(function (result) {
            _this.salesDocumentCustomers = result;
        });
    };
    /**************
     * Page actions
     *************/
    SalesDocumentFormComponent.prototype.reloadSalesDoc = function () {
        this.initAfterSave();
        this.loadSalesDoc();
    };
    SalesDocumentFormComponent.prototype.editSalesDoc = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Write);
    };
    SalesDocumentFormComponent.prototype.cancelSalesDoc = function () {
        this.reloadSalesDoc();
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read);
    };
    SalesDocumentFormComponent.prototype.saveSalesDoc = function () {
        var _this = this;
        if (!this.mainData.srCreationDate) {
            this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
        }
        else {
            var bidtStockMvtDTOList_1 = [];
            this.materialsTable.forEach(function (material) {
                var updating = _this.databaseMaterials.some(function (dm) {
                    return !!material.bidtStockMvtDTO && !!dm.bidtStockMvtDTO && dm.bidtStockMvtDTO.id === material.bidtStockMvtDTO.id;
                });
                if (!updating && !!material.bidtStockMvtDTO) {
                    material.bidtStockMvtDTO.id = undefined;
                }
                if (!!material.bidtStockMvtDTO) {
                    bidtStockMvtDTOList_1.push(material.bidtStockMvtDTO);
                }
            });
            var bidtDocumentList_1 = [];
            this.documentTable.forEach(function (doc) {
                if (!!doc._obj.documentPublicationDate) {
                    doc._obj.documentPublicationDate = new Date(doc._obj.documentPublicationDate);
                }
                doc._obj.bidtSalesRequestId = _this.pageId;
                bidtDocumentList_1.push(doc._obj);
            });
            var input = {
                bidtSalesRequestDTO: this.mainData,
                bidtStockMvtDTOList: bidtStockMvtDTOList_1,
                bidtDocumentList: bidtDocumentList_1,
                documentDataRemoveList: this.documentDataRemoveList
            };
            this.save(input);
        }
    };
    SalesDocumentFormComponent.prototype.save = function (input) {
        var _this = this;
        this.showSaveSpinner = true;
        this.salesDocumentFormService.saveSalesDocument(input).subscribe(function (result) {
            _this.pageId = result;
            _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnSaveSalesDocument'));
            _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Write);
            _this.componentData.openMode = 1;
            _this.initAfterSave();
            _this.loadSalesDoc();
            _this.showSaveSpinner = false;
        }, function (error) {
            _this.showSaveSpinner = false;
        });
    };
    /*****************
     * Materials Table
     ****************/
    SalesDocumentFormComponent.prototype.deleteMaterials = function () {
        var _this = this;
        this.selectedMaterials.forEach(function (material) {
            _this.materialsTable = _this.materialsTable.filter(function (m) { return !!m.bidtStockMvtDTO && !!material.bidtStockMvtDTO && m.bidtStockMvtDTO.id !== material.bidtStockMvtDTO.id; });
        });
        this.selectedMaterials = [];
    };
    SalesDocumentFormComponent.prototype.createMaterial = function () {
        this.showDialogMaterialAndServices = true;
        this.currentMaterialObject = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.selectedMaterials[0]);
        this.isReadOnlyPopup = false;
        this.isNewMaterialObject = true;
        this.selectedMaterialIndex = undefined;
    };
    SalesDocumentFormComponent.prototype.editMaterial = function () {
        var _this = this;
        this.showDialogMaterialAndServices = true;
        this.currentMaterialObject = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.selectedMaterials[0]);
        this.isReadOnlyPopup = false;
        this.isNewMaterialObject = false;
        this.selectedMaterialIndex = this.materialsTable.findIndex(function (material) {
            return !!material.bidtStockMvtDTO &&
                !!_this.selectedMaterials[0].bidtStockMvtDTO &&
                material.bidtStockMvtDTO.id === _this.selectedMaterials[0].bidtStockMvtDTO.id;
        });
        this.selectedMaterials = [];
    };
    SalesDocumentFormComponent.prototype.openMaterial = function () {
        this.showDialogMaterialAndServices = true;
        this.currentMaterialObject = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.selectedMaterials[0]);
        this.isReadOnlyPopup = true;
        this.isNewMaterialObject = false;
        this.selectedMaterials = [];
    };
    SalesDocumentFormComponent.prototype.goToStockMovements = function () {
        // todo
    };
    SalesDocumentFormComponent.prototype.goToGoodsMovements = function () {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].LOG_GOODS_MOVEMENT_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read
        };
        var input = {
            purchaseRequestId: this.mainData.id
        };
        data.objectId = this.serializationService.serialize(input);
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    SalesDocumentFormComponent.prototype.addNewMaterial = function (event) {
        if (!!event.bidtStockMvtDTO) {
            event.bidtStockMvtDTO.bidtSalesRequestId = this.pageId;
        }
        this.materialsTable.push(event);
    };
    SalesDocumentFormComponent.prototype.updateMaterial = function (event) {
        if (this.selectedMaterialIndex !== null && this.selectedMaterialIndex !== undefined) {
            this.materialsTable[this.selectedMaterialIndex] = event;
        }
    };
    SalesDocumentFormComponent.prototype.goToMaterial = function (row) {
        var _this = this;
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].LOG_MATERIAL_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read
        };
        if (!!row.bidtStockMvtDTO && !!row.bidtStockMvtDTO.birePnPnCode) {
            var input = {
                pnCode: row.bidtStockMvtDTO.birePnPnCode
            };
            this.salesDocumentFormService.findBirePn(input).subscribe(function (result) {
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
    /*****************
     * Documents Table
     ****************/
    SalesDocumentFormComponent.prototype.deleteDocuments = function () {
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
                    if (doc.id !== null && doc.id !== undefined) {
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
    SalesDocumentFormComponent.prototype.editDocument = function () {
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
    SalesDocumentFormComponent.prototype.openDocument = function () {
        if (this.selectedDocuments.length === 1) {
            this.currentDocument = this.selectedDocuments[0]._obj;
            this.currentDocumentIndex = -1;
            this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read;
            this.showDocumentDialog = true;
        }
    };
    SalesDocumentFormComponent.prototype.uploadDocument = function (event, fileUploader) {
        var _this = this;
        if (!!event.files) {
            var file_1 = event.files[0];
            // Check if the file already exists
            var fileExists = this.documents.some(function (document) { return document.documentName === file_1.name; });
            if (fileExists) {
                this.messageService.showWarningMessage('global.warningOnFileExists');
            }
            else {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_17__["FileUtils"].getFileContentAsBase64(file_1, function (fileContent) {
                    if (!!fileContent) {
                        var document_1 = {
                            documentContent: fileContent,
                            documentName: file_1.name,
                            documentPublicationDate: new Date(),
                            bidtSalesRequestId: _this.pageId
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
    SalesDocumentFormComponent.prototype.onAddDocument = function (document) {
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
    SalesDocumentFormComponent.prototype.downloadFiles = function () {
        this.selectedDocuments.forEach(function (documentRow) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_17__["FileUtils"].downloadFile(documentRow._obj.documentContent, documentRow._obj.documentName);
        });
    };
    /**********************************
     * Documents Table - helper methods
     *********************************/
    SalesDocumentFormComponent.prototype.createDocumentRow = function (document) {
        var selectedDocumentType = this.documentTypes.find(function (documentType) { return !!document.documentType && documentType.value === document.documentType; });
        var documentRow = {
            docAttachmentDate: !!document.documentPublicationDate
                ? this.dateService.dateToString(new Date(document.documentPublicationDate))
                : '',
            docExtension: this.formatDocExtension(document),
            docName: document.documentName,
            docSize: this.formatDocSize(document),
            docType: !!selectedDocumentType ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].orEmpty(selectedDocumentType.label) : '',
            id: document.id,
            _obj: document
        };
        return documentRow;
    };
    SalesDocumentFormComponent.prototype.formatDocExtension = function (document) {
        return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_17__["FileUtils"].getExtension(document.documentName).toUpperCase();
    };
    SalesDocumentFormComponent.prototype.formatDocSize = function (document) {
        return !!document.documentContent ? _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_17__["FileUtils"].getFormattedSize(document.documentContent.length) : '';
    };
    SalesDocumentFormComponent.prototype.areSameDocument = function (obj1, obj2) {
        if (!obj1 || !obj2) {
            return false;
        }
        else {
            return !!obj1.documentName && !!obj2.documentName && obj1.documentName === obj2.documentName;
        }
    };
    var SalesDocumentFormComponent_1;
    // General
    SalesDocumentFormComponent.MAIN_ANCHOR_ID = 'mainInformationAnchor';
    SalesDocumentFormComponent.MATERIALS_ANCHOR_ID = 'materialsAnchor';
    SalesDocumentFormComponent.DOCUMENTS_ANCHOR_ID = 'documentsAnchor';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(SalesDocumentFormComponent_1.MAIN_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SalesDocumentFormComponent.prototype, "mainInformationEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(SalesDocumentFormComponent_1.MATERIALS_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SalesDocumentFormComponent.prototype, "materialsEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(SalesDocumentFormComponent_1.DOCUMENTS_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SalesDocumentFormComponent.prototype, "documentsEltRef", void 0);
    SalesDocumentFormComponent = SalesDocumentFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-sales-document-form',
            template: __webpack_require__(/*! ./sales-document-form.component.html */ "./src/app/main/logistics/sales-document/form/sales-document-form.component.html"),
            styles: [__webpack_require__(/*! ./sales-document-form.component.scss */ "./src/app/main/logistics/sales-document/form/sales-document-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__["TabService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_3__["PageTocService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _sales_document_form_service__WEBPACK_IMPORTED_MODULE_21__["SalesDocumentFormService"],
            _search_sales_document_search_service__WEBPACK_IMPORTED_MODULE_20__["SalesDocumentSearchService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__["PropertiesService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"]])
    ], SalesDocumentFormComponent);
    return SalesDocumentFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_16__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/sales-document/form/sales-document-form.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main/logistics/sales-document/form/sales-document-form.service.ts ***!
  \***********************************************************************************/
/*! exports provided: SalesDocumentFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesDocumentFormService", function() { return SalesDocumentFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bidt_purchase_request_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-purchase-request.api */ "./src/app/shared/api/bidt-purchase-request.api.ts");
/* harmony import */ var _shared_api_bidt_sales_request_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-sales-request.api */ "./src/app/shared/api/bidt-sales-request.api.ts");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
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







var SalesDocumentFormService = /** @class */ (function (_super) {
    __extends(SalesDocumentFormService, _super);
    function SalesDocumentFormService(http, appConfigService, bidtSalesRequestApi, productStructureManagement, bidtPurchaseRequest) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtSalesRequestApi = bidtSalesRequestApi;
        _this.productStructureManagement = productStructureManagement;
        _this.bidtPurchaseRequest = bidtPurchaseRequest;
        return _this;
    }
    SalesDocumentFormService.prototype.getById = function (id) {
        return _super.prototype.post.call(this, this.bidtSalesRequestApi.getById, id);
    };
    SalesDocumentFormService.prototype.displayWarehouse = function (pnCode) {
        return _super.prototype.post.call(this, this.bidtPurchaseRequest.displayWarehouse, pnCode);
    };
    SalesDocumentFormService.prototype.findBirePn = function (id) {
        return _super.prototype.post.call(this, this.productStructureManagement.findBirePn, id);
    };
    SalesDocumentFormService.prototype.saveSalesDocument = function (input) {
        return _super.prototype.post.call(this, this.bidtSalesRequestApi.saveSalesDocument, input);
    };
    SalesDocumentFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"],
            _shared_api_bidt_sales_request_api__WEBPACK_IMPORTED_MODULE_3__["BidtSalesRequestApi"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__["ProductStructureManagementApi"],
            _shared_api_bidt_purchase_request_api__WEBPACK_IMPORTED_MODULE_2__["BidtPurchaseRequestApi"]])
    ], SalesDocumentFormService);
    return SalesDocumentFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/sales-document/sales-document.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/logistics/sales-document/sales-document.module.ts ***!
  \************************************************************************/
/*! exports provided: SalesDocumentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesDocumentModule", function() { return SalesDocumentModule; });
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
/* harmony import */ var _dialog_business_partner_bido_document_dialog_business_partner_bido_document_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dialog-business-partner-bido-document/dialog-business-partner-bido-document.component */ "./src/app/main/logistics/sales-document/dialog-business-partner-bido-document/dialog-business-partner-bido-document.component.ts");
/* harmony import */ var _dialog_material_and_services_dialog_material_and_services_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialog-material-and-services/dialog-material-and-services.component */ "./src/app/main/logistics/sales-document/dialog-material-and-services/dialog-material-and-services.component.ts");
/* harmony import */ var _form_sales_document_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./form/sales-document-form.component */ "./src/app/main/logistics/sales-document/form/sales-document-form.component.ts");
/* harmony import */ var _form_sales_document_form_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./form/sales-document-form.service */ "./src/app/main/logistics/sales-document/form/sales-document-form.service.ts");
/* harmony import */ var _search_sales_document_search_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./search/sales-document-search.component */ "./src/app/main/logistics/sales-document/search/sales-document-search.component.ts");
/* harmony import */ var _search_sales_document_search_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./search/sales-document-search.service */ "./src/app/main/logistics/sales-document/search/sales-document-search.service.ts");
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
var DYNAMIC_COMPONENTS = [_form_sales_document_form_component__WEBPACK_IMPORTED_MODULE_24__["SalesDocumentFormComponent"], _search_sales_document_search_component__WEBPACK_IMPORTED_MODULE_26__["SalesDocumentSearchComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_sales_document_form_service__WEBPACK_IMPORTED_MODULE_25__["SalesDocumentFormService"], _search_sales_document_search_service__WEBPACK_IMPORTED_MODULE_27__["SalesDocumentSearchService"]];
var SalesDocumentModule = /** @class */ (function () {
    function SalesDocumentModule() {
    }
    SalesDocumentModule = __decorate([
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
    ], SalesDocumentModule);
    return SalesDocumentModule;
}());



/***/ }),

/***/ "./src/app/main/logistics/sales-document/search/sales-document-search.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/logistics/sales-document/search/sales-document-search.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">\r\n        {{ \"page.searchPage\" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"openNewSalesDocument()\" *ngIf=\"hasUpdateAccessRight\">\r\n      {{ \"global.create\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row search-criteria-header\">\r\n                  <aw-manage-search-criteria\r\n                    [componentId]=\"SEARCH_CRITERIA_ID\"\r\n                    (onSelected)=\"loadSearchCriteria($event)\"\r\n                    (onSavedAsked)=\"saveSearchCriteriaAsked()\"\r\n                    [objectFromPage]=\"criteriaToSave\"\r\n                    [canChange]=\"!hasBeenCalculated\"\r\n                  ></aw-manage-search-criteria>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".srCode\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" maxlength=\"20\" [(ngModel)]=\"bidtSalesDTO.srCode\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".srStatus\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"salesDocumentStatus\"\r\n                        [showClear]=\"true\"\r\n                        [(ngModel)]=\"bidtSalesDTO.srStatus\"\r\n                        placeholder=\"&nbsp;\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".srName\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" maxlength=\"20\" [(ngModel)]=\"bidtSalesDTO.srName\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{\r\n                      componentData.componentId + \".bidoCustomerCustomerCode\" | translate\r\n                    }}</label>\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [options]=\"salesDocumentCustomers\"\r\n                        [(ngModel)]=\"searchObject.searchSupplier\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".material\" | translate }}</label>\r\n\r\n                    <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n                      <div class=\"form-control-data\" (click)=\"searchMaterialCode()\">\r\n                        {{ searchObject.pn }}\r\n                      </div>\r\n\r\n                      <div *ngIf=\"searchObject.pn\" class=\"btn-clear-wrapper\">\r\n                        <i\r\n                          class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"searchObject.pn = undefined\"\r\n                        ></i>\r\n                      </div>\r\n                      <div class=\"btn-search-wrapper\">\r\n                        <i\r\n                          class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"searchMaterialCode()\"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".srDescription\" | translate }}\r\n                    </label>\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" maxlength=\"20\" [(ngModel)]=\"bidtSalesDTO.srDescription\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group flex--2\"></div>\r\n                </div>\r\n\r\n                <div class=\"advanced-criteria\" [ngClass]=\"{ 'display--none': !showAdvancedCriteria }\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ componentData.componentId + \".creationDate\" | translate }}\r\n                      </label>\r\n                      <div class=\"form-control\">\r\n                        <p-calendar\r\n                          showButtonBar=\"true\"\r\n                          [monthNavigator]=\"true\"\r\n                          [yearNavigator]=\"true\"\r\n                          [yearRange]=\"sessionService.calendarYearRange\"\r\n                          class=\"aw-calendar\"\r\n                          [locale]=\"sessionService.calendarFormat\"\r\n                          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                          [(ngModel)]=\"bidtSalesDTO.srCreationDate\"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ componentData.componentId + \".deliveryDate\" | translate }}\r\n                      </label>\r\n                      <div class=\"form-control\">\r\n                        <p-calendar\r\n                          showButtonBar=\"true\"\r\n                          [monthNavigator]=\"true\"\r\n                          [yearNavigator]=\"true\"\r\n                          [yearRange]=\"sessionService.calendarYearRange\"\r\n                          class=\"aw-calendar\"\r\n                          [locale]=\"sessionService.calendarFormat\"\r\n                          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                          [(ngModel)]=\"bidtSalesDTO.srDeliveryDate\"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".sNo\" | translate }}</label>\r\n                      <div class=\"form-control\">\r\n                        <input type=\"text\" class=\"aw-input\" maxlength=\"20\" [(ngModel)]=\"searchObject.sn\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".batchNo\" | translate }}</label>\r\n                      <div class=\"form-control\">\r\n                        <input type=\"text\" class=\"aw-input\" maxlength=\"20\" [(ngModel)]=\"searchObject.batchNumber\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row search-criteria-footer\">\r\n                  <button mat-button (click)=\"showAdvancedCriteria = !showAdvancedCriteria\">\r\n                    <ng-container *ngIf=\"showAdvancedCriteria\">\r\n                      <mat-icon>remove</mat-icon>\r\n                      {{ \"global.collapseCriteria\" | translate }}\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"!showAdvancedCriteria\">\r\n                      <mat-icon>add</mat-icon>\r\n                      {{ \"global.expandCriteria\" | translate }}\r\n                    </ng-container>\r\n                  </button>\r\n\r\n                  <div class=\"search-actions\">\r\n                    <button\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      (click)=\"search()\"\r\n                      appKeyPress\r\n                      color=\"primary\"\r\n                      [keyCode]=\"'Enter'\"\r\n                      (keyPress)=\"search()\"\r\n                    >\r\n                      {{ \"global.toSearch\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.results\" | translate }}\r\n                  ({{ results ? results.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableResults\r\n                class=\"aw-table2\"\r\n                [columns]=\"resultTableCols\"\r\n                [value]=\"results\"\r\n                [(selection)]=\"selectedResults\"\r\n                dataKey=\"srCode\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedResults.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableResultsGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableResults.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"results && results.length > 0 && selectedResults.length === 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"exportTable()\"\r\n                      >\r\n                        {{ \"global.export\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"hasManageAccessRight && selectedResults.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteResults()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedResults.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openSelectedResults()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <a *ngSwitchCase=\"'srCode'\" (click)=\"openSalesDocument(rowData, componentOpenMode.Read)\">\r\n                        {{ rowData[col.field] }}</a\r\n                      >\r\n\r\n                      <span *ngSwitchCase=\"'creationDate'\">\r\n                        {{ dateService.timestampToString(rowData.srCreationDate) }}\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'deliveryDate'\">\r\n                        {{ dateService.timestampToString(rowData.srDeliveryDate) }}\r\n                      </span>\r\n\r\n                      <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-search-material\r\n  *ngIf=\"showQuickSearchMaterialPopup\"\r\n  [(display)]=\"showQuickSearchMaterialPopup\"\r\n  [material-code]=\"searchObject.productCode\"\r\n  (onSelected)=\"setSelectedMaterial($event)\"\r\n></aw-dialog-search-material>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/sales-document/search/sales-document-search.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/logistics/sales-document/search/sales-document-search.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3NhbGVzLWRvY3VtZW50L3NlYXJjaC9zYWxlcy1kb2N1bWVudC1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/logistics/sales-document/search/sales-document-search.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/sales-document/search/sales-document-search.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SalesDocumentSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesDocumentSearchComponent", function() { return SalesDocumentSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/export.service */ "./src/app/shared/services/export.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/utils/label-value-utils */ "./src/app/shared/utils/label-value-utils.ts");
/* harmony import */ var _sales_document_search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sales-document-search.service */ "./src/app/main/logistics/sales-document/search/sales-document-search.service.ts");
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



















var SalesDocumentSearchComponent = /** @class */ (function (_super) {
    __extends(SalesDocumentSearchComponent, _super);
    function SalesDocumentSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, propertiesService, salesDocumentSearchService, dateService, exportService, translateService, confirmationService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.propertiesService = propertiesService;
        _this.salesDocumentSearchService = salesDocumentSearchService;
        _this.dateService = dateService;
        _this.exportService = exportService;
        _this.translateService = translateService;
        _this.confirmationService = confirmationService;
        _this.SEARCH_CRITERIA_ID = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SALES_DOCUMENT_SEARCH_CRITERIA_ID;
        _this.componentOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"];
        _this.init();
        _this.setTableCols();
        _this.loadDropdowns();
        return _this;
    }
    SalesDocumentSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
    };
    SalesDocumentSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].LOG_SALES_DOCUMENT_SEARCH;
    };
    SalesDocumentSearchComponent.prototype.init = function () {
        // search objects
        this.bidtSalesDTO = {};
        this.searchObject = {};
        // dropdowns
        this.salesDocumentStatus = [];
        this.salesDocumentCustomers = [];
        // ovs popup
        this.showQuickSearchMaterialPopup = false;
        // results
        this.isLoading = false;
        this.showAdvancedCriteria = false;
        this.resultTableCols = [];
        this.resultTableInit();
    };
    SalesDocumentSearchComponent.prototype.resultTableInit = function () {
        this.resultTable = [];
        this.results = [];
        this.selectedResults = [];
        // data for export
        this.exportData = [];
    };
    SalesDocumentSearchComponent.prototype.setTableCols = function () {
        this.resultTableCols = [
            { field: 'srCode', alignment: 'left' },
            { field: 'srName', alignment: 'left' },
            { field: 'srDescription', alignment: 'left' },
            { field: 'bidoCustomerCustomerCode', alignment: 'left' },
            { field: 'srStatus', alignment: 'left' },
            { field: 'creationDate', alignment: 'left' },
            { field: 'deliveryDate', alignment: 'left' }
        ];
    };
    /***********
     * Dropdowns
     **********/
    SalesDocumentSearchComponent.prototype.loadDropdowns = function () {
        this.loadSalesDocumentStatus();
        this.loadSalesDocumentCustomers();
    };
    SalesDocumentSearchComponent.prototype.loadSalesDocumentStatus = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__["GenericPropertyConstants"].PURCHASE_STATUS_MAP).subscribe(function (results) {
            _this.salesDocumentStatus = results || [];
        });
    };
    SalesDocumentSearchComponent.prototype.loadSalesDocumentCustomers = function () {
        var _this = this;
        this.salesDocumentSearchService.fetchSupplierDropDownData().subscribe(function (result) {
            _this.salesDocumentCustomers = result;
        });
    };
    /***********
     * Ovs popup
     **********/
    SalesDocumentSearchComponent.prototype.searchMaterialCode = function () {
        this.showQuickSearchMaterialPopup = true;
    };
    SalesDocumentSearchComponent.prototype.setSelectedMaterial = function (selectedObject) {
        if (selectedObject) {
            this.searchObject.pn = selectedObject.pnCode;
        }
        this.showQuickSearchMaterialPopup = false;
    };
    /********************
     * Search by criteria
     *******************/
    SalesDocumentSearchComponent.prototype.search = function () {
        var _this = this;
        this.resultTableInit();
        if (this.searchObject.sn === '') {
            this.searchObject.sn = undefined;
        }
        if (this.searchObject.batchNumber === '') {
            this.searchObject.batchNumber = undefined;
        }
        var input = this.searchObject;
        input.bidtSalesDTO = this.bidtSalesDTO;
        this.isLoading = true;
        this.salesDocumentSearchService.findByCriteria(input).subscribe(function (result) {
            _this.isLoading = false;
            result.forEach(function (res) {
                if (!!res.bidtSalesRequestDTO && res.bidtSalesRequestDTO.srCreationDate) {
                    res.bidtSalesRequestDTO.creationDate = _this.dateService.timestampToString(res.bidtSalesRequestDTO.srCreationDate);
                }
                if (!!res.bidtSalesRequestDTO && res.bidtSalesRequestDTO.srDeliveryDate) {
                    res.bidtSalesRequestDTO.creationDate = _this.dateService.timestampToString(res.bidtSalesRequestDTO.srDeliveryDate);
                }
                if (!!res.bidtSalesRequestDTO && res.bidtSalesRequestDTO.srStatus) {
                    _shared_utils_label_value_utils__WEBPACK_IMPORTED_MODULE_17__["LabelValueUtils"].stringValueToLabel(res.bidtSalesRequestDTO, 'srStatus', _this.salesDocumentStatus);
                }
                if (!!res.bidtSalesRequestDTO) {
                    _this.results.push(res.bidtSalesRequestDTO);
                }
            });
            _this.results.forEach(function (res) {
                var data = {
                    srCode: res.srCode,
                    srName: res.srName,
                    srDescription: res.srDescription,
                    bidoCustomerCustomerCode: res.bidoCustomerCustomerCode,
                    srStatus: res.srStatus,
                    srCreationDate: res.creationDate,
                    srDeliveryDate: res.deliveryDate
                };
                _this.exportData.push(data);
            });
            _this.resultTable = result;
        });
    };
    /**************************
     * GOTO Sales Document Form
     *************************/
    SalesDocumentSearchComponent.prototype.openNewSalesDocument = function () {
        this.openSalesDocument(undefined, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Create);
    };
    SalesDocumentSearchComponent.prototype.openSalesDocument = function (object, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].LOG_SALES_DOCUMENT_FORM,
            openMode: openMode
        };
        if (!!object) {
            data.objectId = this.serializationService.serialize(object);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    /**********************
     * Save search criteria
     *********************/
    SalesDocumentSearchComponent.prototype.loadSearchCriteria = function (event) {
        var criteria = event.criteria;
        if (!criteria) {
            this.resetSearchCriteria();
            return;
        }
        // do not load criteria first time if we come from stock alert page
        if (!this.componentData.objectId) {
            this.criteriaName = event.name;
            this.searchObject = criteria || {};
            this.bidtSalesDTO = criteria.bidtSalesDTO || {};
        }
        else {
            this.componentData.objectId = undefined;
        }
        this.search();
    };
    SalesDocumentSearchComponent.prototype.saveSearchCriteriaAsked = function () {
        this.searchObject.bidtSalesDTO = this.bidtSalesDTO;
        var criteriaToSave = this.searchObject;
        this.criteriaToSave = criteriaToSave;
    };
    SalesDocumentSearchComponent.prototype.resetSearchCriteria = function () {
        this.bidtSalesDTO = {};
        this.searchObject = {
            bidtSalesDTO: this.bidtSalesDTO
        };
        this.criteriaName = undefined;
    };
    /**********************
     * Result table actions
     *********************/
    SalesDocumentSearchComponent.prototype.openSelectedResults = function () {
        var _this = this;
        this.selectedResults.forEach(function (res) {
            if (!!res) {
                _this.openSalesDocument(res, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Read);
            }
        });
    };
    SalesDocumentSearchComponent.prototype.exportTable = function () {
        var _this = this;
        var name = this.getComponentName() + ".salesDocListExport";
        this.translateService.get(name).subscribe(function (res) {
            _this.exportService.toExcel(_this.exportData, res, _this.componentData.componentId);
        });
    };
    SalesDocumentSearchComponent.prototype.deleteResults = function () {
        var _this = this;
        var confirmMessageKey = this.selectedResults.length > 1 ? 'confirmDeleteSelectedSDs' : 'confirmDeleteSelectedSD';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(confirmMessageKey),
            accept: function () {
                var input = [];
                _this.selectedResults.forEach(function (res) {
                    if (!!res.id) {
                        input.push(res.id);
                    }
                });
                _this.salesDocumentSearchService.deleteSalesDoc(input).subscribe(function () {
                    _this.search();
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteSD'));
                });
                _this.selectedResults = [];
            }
        });
    };
    SalesDocumentSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-sales-document-search',
            template: __webpack_require__(/*! ./sales-document-search.component.html */ "./src/app/main/logistics/sales-document/search/sales-document-search.component.html"),
            styles: [__webpack_require__(/*! ./sales-document-search.component.scss */ "./src/app/main/logistics/sales-document/search/sales-document-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_14__["SessionService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_12__["PropertiesService"],
            _sales_document_search_service__WEBPACK_IMPORTED_MODULE_18__["SalesDocumentSearchService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"],
            _shared_services_export_service__WEBPACK_IMPORTED_MODULE_8__["ExportService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]])
    ], SalesDocumentSearchComponent);
    return SalesDocumentSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_16__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/sales-document/search/sales-document-search.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/sales-document/search/sales-document-search.service.ts ***!
  \***************************************************************************************/
/*! exports provided: SalesDocumentSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesDocumentSearchService", function() { return SalesDocumentSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bidt_purchase_request_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-purchase-request.api */ "./src/app/shared/api/bidt-purchase-request.api.ts");
/* harmony import */ var _shared_api_bidt_sales_request_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-sales-request.api */ "./src/app/shared/api/bidt-sales-request.api.ts");
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






var SalesDocumentSearchService = /** @class */ (function (_super) {
    __extends(SalesDocumentSearchService, _super);
    function SalesDocumentSearchService(http, appConfigService, bidtPurchaseRequest, bidtSalesRequest) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtPurchaseRequest = bidtPurchaseRequest;
        _this.bidtSalesRequest = bidtSalesRequest;
        return _this;
    }
    // BidtPurchaseRequest
    SalesDocumentSearchService.prototype.fetchSupplierDropDownData = function () {
        return _super.prototype.post.call(this, this.bidtPurchaseRequest.fetchSupplierDropDownData);
    };
    // BidtSalesRequest
    SalesDocumentSearchService.prototype.findByCriteria = function (input) {
        return _super.prototype.post.call(this, this.bidtSalesRequest.findByCriteria, input);
    };
    SalesDocumentSearchService.prototype.deleteSalesDoc = function (input) {
        return _super.prototype.post.call(this, this.bidtSalesRequest.delete, input);
    };
    SalesDocumentSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"],
            _shared_api_bidt_purchase_request_api__WEBPACK_IMPORTED_MODULE_2__["BidtPurchaseRequestApi"],
            _shared_api_bidt_sales_request_api__WEBPACK_IMPORTED_MODULE_3__["BidtSalesRequestApi"]])
    ], SalesDocumentSearchService);
    return SalesDocumentSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__["AbstractAwHttpService"]));



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
//# sourceMappingURL=logistics-sales-document-sales-document-module.js.map