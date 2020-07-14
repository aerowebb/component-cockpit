(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~logistics-procurement-request-procurement-request-module~logistics-transfer-order-transfer-o~df74949e"],{

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

/***/ "./src/app/main/logistics/procurement-request/form/dialog-add-popup/dialog-add-popup.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/form/dialog-add-popup/dialog-add-popup.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".article\" | translate }}</label>\r\n\r\n          <div class=\"form-control form-control-with-modal\">\r\n            <div class=\"form-control-data\" (click)=\"searchPn()\">\r\n              {{ pn?.pnCode }}\r\n            </div>\r\n\r\n            <div *ngIf=\"pn\" class=\"btn-clear-wrapper\">\r\n              <i\r\n                class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                aria-hidden=\"true\"\r\n                (click)=\"pn = undefined\"\r\n              ></i>\r\n            </div>\r\n            <div class=\"btn-search-wrapper\">\r\n              <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\" (click)=\"searchPn()\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".quantity\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"quantity\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">{{ \"global.cancel\" | translate }}</button>\r\n\r\n    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"validate()\" [disabled]=\"!pn || !quantity\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-pn\r\n  *ngIf=\"pnDialogVisible\"\r\n  [(display)]=\"pnDialogVisible\"\r\n  [showPartTypeSelection]=\"true\"\r\n  (onSelected)=\"onSelectPn($event)\"\r\n></aw-dialog-search-pn>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/procurement-request/form/dialog-add-popup/dialog-add-popup.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/form/dialog-add-popup/dialog-add-popup.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .custom-icon {\n  font-size: 10em;\n  cursor: pointer; }\n\n:host .custom-align {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvcHJvY3VyZW1lbnQtcmVxdWVzdC9mb3JtL2RpYWxvZy1hZGQtcG9wdXAvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxwcm9jdXJlbWVudC1yZXF1ZXN0XFxmb3JtXFxkaWFsb2ctYWRkLXBvcHVwXFxkaWFsb2ctYWRkLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFIbkI7RUFPSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3Byb2N1cmVtZW50LXJlcXVlc3QvZm9ybS9kaWFsb2ctYWRkLXBvcHVwL2RpYWxvZy1hZGQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmN1c3RvbS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTBlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/logistics/procurement-request/form/dialog-add-popup/dialog-add-popup.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/form/dialog-add-popup/dialog-add-popup.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DialogAddPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddPopupComponent", function() { return DialogAddPopupComponent; });
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




var DialogAddPopupComponent = /** @class */ (function (_super) {
    __extends(DialogAddPopupComponent, _super);
    function DialogAddPopupComponent(sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'DialogAddPopupComponent') || this;
        _this.sessionService = sessionService;
        _this.onValidate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.init();
        return _this;
    }
    // ////////////////////////////////////////////////////////////////////////////
    DialogAddPopupComponent.prototype.onSelectPn = function (event) {
        this.pn = event;
    };
    DialogAddPopupComponent.prototype.searchPn = function () {
        this.pnDialogVisible = true;
    };
    DialogAddPopupComponent.prototype.validate = function () {
        this.onValidate.emit({ pn: this.pn, quantity: this.quantity });
    };
    // ////////////////////////////////////////////////////////////////////////////
    DialogAddPopupComponent.prototype.init = function () {
        this.pn = undefined;
        this.quantity = undefined;
        this.pnDialogVisible = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogAddPopupComponent.prototype, "onValidate", void 0);
    DialogAddPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-add-popup',
            template: __webpack_require__(/*! ./dialog-add-popup.component.html */ "./src/app/main/logistics/procurement-request/form/dialog-add-popup/dialog-add-popup.component.html"),
            styles: [__webpack_require__(/*! ./dialog-add-popup.component.scss */ "./src/app/main/logistics/procurement-request/form/dialog-add-popup/dialog-add-popup.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DialogAddPopupComponent);
    return DialogAddPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/procurement-request/form/dialog-edit-quantity/dialog-edit-quantity.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/form/dialog-edit-quantity/dialog-edit-quantity.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ \"editQuantity\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ \"oldQuantity\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"oldQuantity\" [disabled]=\"true\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">{{ \"newQuantity\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"newQuantity\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">{{ \"global.cancel\" | translate }}</button>\r\n\r\n    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"validate()\" [disabled]=\"!newQuantity\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/procurement-request/form/dialog-edit-quantity/dialog-edit-quantity.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/form/dialog-edit-quantity/dialog-edit-quantity.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: DialogEditQuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogEditQuantityComponent", function() { return DialogEditQuantityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/utils/number-utils */ "./src/app/shared/utils/number-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../logistics.service */ "./src/app/main/logistics/logistics.service.ts");
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








var DialogEditQuantityComponent = /** @class */ (function (_super) {
    __extends(DialogEditQuantityComponent, _super);
    function DialogEditQuantityComponent(confirmationService, logisticsService, messageService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'DialogEditQuantityComponent') || this;
        _this.confirmationService = confirmationService;
        _this.logisticsService = logisticsService;
        _this.messageService = messageService;
        _this.onValidate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.init();
        return _this;
    }
    // ////////////////////////////////////////////////////////////////////////////
    DialogEditQuantityComponent.prototype.ngOnInit = function () {
        var quantity = this.procReqItem.requestedQuantity
            ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_5__["NumberUtils"].toString(_shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_5__["NumberUtils"].roundNumber(_shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_5__["NumberUtils"].fromString(this.procReqItem.requestedQuantity)))
            : undefined;
        this.newQuantity = quantity;
        this.oldQuantity = quantity;
    };
    // ////////////////////////////////////////////////////////////////////////////
    DialogEditQuantityComponent.prototype.validate = function () {
        var _this = this;
        var servedQty = this.workshopEntries
            .filter(function (stockMvt) {
            return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].isDefined(stockMvt.obj.stockMvtSn) || _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].isDefined(stockMvt.obj.stockMvtBatchNumber);
        })
            .map(function (stockMvt) { return (stockMvt.obj.stockMvtQuantity ? Number(stockMvt.obj.stockMvtQuantity) : 0); })
            .reduce(function (acc, x) { return acc + x; }, 0);
        var newQty = _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_5__["NumberUtils"].fromString(this.newQuantity);
        if (newQty <= 0) {
            this.messageService.showWarningMessage(this.getTranslateKey('errorQuantityLowerThanZero'));
        }
        else if (newQty < servedQty) {
            this.messageService.showErrorMessage(this.getTranslateKey('errorWrongQuantity'));
        }
        else {
            this.logisticsService.checkQuantityConsistency(this.procurementRequest).subscribe({
                next: function (consistent) {
                    if (consistent) {
                        _this.onValidate.emit(_this.newQuantity);
                        _this.closeDialog();
                    }
                    else {
                        _this.confirmationService.confirm({
                            messageKey: _this.getTranslateKey('quantityNotConsistent'),
                            contextKeys: [_this.getTranslateKey('confirmContinue')],
                            accept: function () {
                                _this.onValidate.emit(_this.newQuantity);
                                _this.closeDialog();
                            }
                        });
                    }
                }
            });
        }
    };
    // ////////////////////////////////////////////////////////////////////////////
    DialogEditQuantityComponent.prototype.init = function () {
        this.newQuantity = undefined;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogEditQuantityComponent.prototype, "procurementRequest", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogEditQuantityComponent.prototype, "procReqItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogEditQuantityComponent.prototype, "workshopEntries", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogEditQuantityComponent.prototype, "onValidate", void 0);
    DialogEditQuantityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-procurement-request-edit-quantity',
            template: __webpack_require__(/*! ./dialog-edit-quantity.component.html */ "./src/app/main/logistics/procurement-request/form/dialog-edit-quantity/dialog-edit-quantity.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _logistics_service__WEBPACK_IMPORTED_MODULE_7__["LogisticsService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], DialogEditQuantityComponent);
    return DialogEditQuantityComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/procurement-request/form/mvt-status/procurement-request-mvt-status.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/form/mvt-status/procurement-request-mvt-status.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column\" *ngIf=\"mvts.length\">\r\n  <div class=\"row\" style=\"justify-content: flex-end;\">\r\n    <button mat-raised-button (click)=\"schowDetails()\" style=\"width: 16rem;\" *ngIf=\"!showDetails\">\r\n      {{ getComponentName() + \".showMouvement\" | translate }}\r\n    </button>\r\n    <button mat-raised-button (click)=\"schowDetails()\" style=\"width: 16rem;\" *ngIf=\"showDetails\">\r\n      {{ getComponentName() + \".hideMouvement\" | translate }}\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"row\" style=\"justify-content: center; margin-top: 40px\">\r\n    <aw-stepper [steps]=\"steps\"></aw-stepper>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/procurement-request/form/mvt-status/procurement-request-mvt-status.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/form/mvt-status/procurement-request-mvt-status.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ProcurementRequestMvtStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcurementRequestMvtStatusComponent", function() { return ProcurementRequestMvtStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/constants/bidt-stock-mvt-constants */ "./src/app/shared/constants/bidt-stock-mvt-constants.ts");
/* harmony import */ var _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/constants/bidt-stock-mvt-type-constants */ "./src/app/shared/constants/bidt-stock-mvt-type-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/types/generic-component */ "./src/app/shared/types/generic-component.ts");
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








var ProcurementRequestMvtStatusComponent = /** @class */ (function (_super) {
    __extends(ProcurementRequestMvtStatusComponent, _super);
    function ProcurementRequestMvtStatusComponent(translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Write) || this;
        _this.translateService = translateService;
        _this.mvts = [];
        _this.steps = [];
        _this.showDetails = false;
        _this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ProcurementRequestMvtStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mvtObservable$.subscribe(function (mvts) {
            _this.mvts = mvts;
            _this.showDetails = false;
            _this.initSteps();
        });
    };
    ProcurementRequestMvtStatusComponent.prototype.getComponentName = function () {
        return this.componentName;
    };
    ProcurementRequestMvtStatusComponent.prototype.initSteps = function () {
        var _this = this;
        this.initArray();
        this.mvts.forEach(function (mvt) {
            if (mvt.stockMvtWay === _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_WAY_TRANSFER) {
                if (mvt.mvtStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].MM_MVT_STATUS_PLANNED_KEY) {
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT].status = 'previous';
                }
                else if (mvt.mvtStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].MM_MVT_STATUS_ON_GOING_KEY) {
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT].status = 'previous';
                }
                else if (!!mvt.mvtStatus && mvt.mvtStatus >= _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].MM_MVT_STATUS_ON_GOING_KEY) {
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT].status = 'previous';
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_TRANSFERT].status = 'previous';
                }
            }
            else if (mvt.stockMvtWay === _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_WAY_DEBIT) {
                if (mvt.mvtStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].MM_MVT_STATUS_ON_GOING_KEY) {
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT].status = 'previous';
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_TRANSFERT].status = 'previous';
                }
                else if (!!mvt.mvtStatus && mvt.mvtStatus >= _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].MM_MVT_STATUS_ON_GOING_KEY) {
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT].status = 'previous';
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_TRANSFERT].status = 'previous';
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_DEBIT].status = 'previous';
                }
            }
            else if (mvt.stockMvtWay === _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_WAY_CREDIT) {
                if (mvt.mvtStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].MM_MVT_STATUS_ON_GOING_KEY) {
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT].status = 'previous';
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_TRANSFERT].status = 'previous';
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_DEBIT].status = 'previous';
                }
                else if (!!mvt.mvtStatus && mvt.mvtStatus >= _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].MM_MVT_STATUS_ON_GOING_KEY) {
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT].status = 'previous';
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_TRANSFERT].status = 'previous';
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_DEBIT].status = 'previous';
                    _this.steps[_shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_STATUS_STEP_WAY_CREDIT].status = 'previous';
                }
            }
        });
    };
    ProcurementRequestMvtStatusComponent.prototype.initArray = function () {
        var _this = this;
        this.steps = [];
        var mvtTransfert = this.mvts.find(function (m) { return m.stockMvtWay === _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__["BidtStockMvtConstants"].MVT_WAY_TRANSFER; });
        var pickingKey = this.getTranslateKey('picking');
        var crossDockKey = this.getTranslateKey('crossDock');
        var executionPickingKey = this.getTranslateKey('executionPicking');
        var deliveryKey = this.getTranslateKey('delivery');
        var deliveredKey = this.getTranslateKey('delivered');
        this.translateService.get([pickingKey, crossDockKey, executionPickingKey, deliveryKey, deliveredKey]).subscribe({
            next: function (results) {
                var pickingLabel = !!results ? results[pickingKey] : 'picking';
                var crossDockLabel = !!results ? results[crossDockKey] : 'cross-dock';
                var executionPickingLabel = !!results ? results[executionPickingKey] : 'picking execution';
                var deliveryLabel = !!results ? results[deliveryKey] : 'delivery';
                var deliveredLabel = !!results ? results[deliveredKey] : 'delivered';
                _this.steps = [
                    {
                        label: !!mvtTransfert &&
                            !!mvtTransfert.bidtStockMvtType &&
                            mvtTransfert.bidtStockMvtType.id === _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_5__["BidtStockMvtTypeConstant"].PICKING
                            ? pickingLabel
                            : crossDockLabel,
                        status: 'next'
                    },
                    {
                        label: executionPickingLabel,
                        status: 'next'
                    },
                    {
                        label: deliveryLabel,
                        status: 'next'
                    },
                    {
                        label: deliveredLabel,
                        status: 'next'
                    }
                ];
            }
        });
    };
    ProcurementRequestMvtStatusComponent.prototype.schowDetails = function () {
        this.showDetails = !this.showDetails;
        this.onClick.emit(this.showDetails);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mvts'),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ProcurementRequestMvtStatusComponent.prototype, "mvtObservable$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProcurementRequestMvtStatusComponent.prototype, "componentName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProcurementRequestMvtStatusComponent.prototype, "onClick", void 0);
    ProcurementRequestMvtStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'aw-procurement-request-mvt-status',
            template: __webpack_require__(/*! ./procurement-request-mvt-status.component.html */ "./src/app/main/logistics/procurement-request/form/mvt-status/procurement-request-mvt-status.component.html")
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ProcurementRequestMvtStatusComponent);
    return ProcurementRequestMvtStatusComponent;
}(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_7__["GenericComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/procurement-request/form/procurement-request-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/form/procurement-request-form.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div *ngIf=\"procurementRequest.procCode\" class=\"page-subtitle\">- {{ procurementRequest.procCode }}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div\r\n      class=\"object-status\"\r\n      [ngClass]=\"{\r\n        disabled: procurementRequest.procStatus == aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CANCELED\r\n      }\"\r\n      *ngIf=\"procurementRequest.procStatus\"\r\n      (click)=\"showStatus()\"\r\n    >\r\n      {{ procurementRequest.procStatus | formatSelectOption: procurementRequestStatuses }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button\r\n      *ngIf=\"\r\n        isReadOpenMode &&\r\n        (procurementRequest.procStatus == aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT ||\r\n          procurementRequest.procStatus == aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED ||\r\n          procurementRequest.procStatus == aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_RELEASED ||\r\n          procurementRequest.procStatus == aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED)\r\n      \"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"edit()\"\r\n    >\r\n      {{ \"global.edit\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"isReadOpenMode && procurementRequest.procStatus != aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\"\r\n      type=\"button\"\r\n      color=\"primary\"\r\n      mat-raised-button\r\n      (click)=\"duplicate()\"\r\n    >\r\n      {{ \"duplicate\" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" color=\"warn\" mat-raised-button (click)=\"cancel()\">\r\n      {{ \"global.cancel\" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"save()\" [disabled]=\"!canSave()\">\r\n      {{ \"save\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"reload()\">{{ \"global.refresh\" | translate }}</button>\r\n      <!-- <button mat-menu-item (click)=\"remove()\">{{ \"global.delete\" | translate }}</button> -->\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <mat-tab-group animationDuration=\"0ms\" dynamicHeight>\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ \"home\" | translate }}\r\n        </ng-template>\r\n\r\n        <div class=\"grid-row\">\r\n          <div class=\"grid-cell--6\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".mainInformations\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content\">\r\n                <div class=\"column\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group flex--2\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".type\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">\r\n                          {{ procurementRequest.procType | formatSelectOption: procurementRequestTypes }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".criticity\" | translate }}</label>\r\n\r\n                      <div\r\n                        class=\"form-control alert\"\r\n                        [ngClass]=\"{\r\n                          'procurement--ok':\r\n                            isReadOpenMode &&\r\n                            procurementRequest.criticality == aWPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE,\r\n                          'procurement--warning':\r\n                            isReadOpenMode &&\r\n                            procurementRequest.criticality == aWPropertiesConstants.LOGISTICAL_CRITICALITY_URGENT,\r\n                          'procurement--nok':\r\n                            isReadOpenMode &&\r\n                            procurementRequest.criticality == aWPropertiesConstants.LOGISTICAL_CRITICALITY_IMMEDIATE\r\n                        }\"\r\n                      >\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          [options]=\"procurementRequestCriticities\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [showClear]=\"true\"\r\n                          [(ngModel)]=\"procurementRequest.criticality\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ \"criticityReason\" | translate }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <textarea\r\n                          class=\"aw-textarea\"\r\n                          [rows]=\"2\"\r\n                          pInputTextarea\r\n                          autoResize=\"autoResize\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                          [(ngModel)]=\"procurementRequest.criticalityReason\"\r\n                        ></textarea>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" [ngClass]=\"{ 'visibility--hidden': !isExpectedSnVisible() }\">\r\n                      <label class=\"form-label\"> {{ getComponentName() + \".expectedSn\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          class=\"aw-input\"\r\n                          name=\"value\"\r\n                          type=\"text\"\r\n                          [disabled]=\"true\"\r\n                          [(ngModel)]=\"procurementRequest.procComment\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".applicant\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">{{ userName }} ({{ userLogin }})</div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".createdOn\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-calendar\r\n                          showButtonBar=\"true\"\r\n                          [monthNavigator]=\"true\"\r\n                          [yearNavigator]=\"true\"\r\n                          [yearRange]=\"sessionService.calendarYearRange\"\r\n                          class=\"aw-calendar\"\r\n                          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                          [locale]=\"sessionService.calendarFormat\"\r\n                          [(ngModel)]=\"procurementRequest.statusDate\"\r\n                          [showTime]=\"true\"\r\n                          [disabled]=\"true\"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".requestedDate\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-calendar\r\n                          showButtonBar=\"true\"\r\n                          [monthNavigator]=\"true\"\r\n                          [yearNavigator]=\"true\"\r\n                          [yearRange]=\"sessionService.calendarYearRange\"\r\n                          class=\"aw-calendar\"\r\n                          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                          [locale]=\"sessionService.calendarFormat\"\r\n                          [(ngModel)]=\"procurementRequest.requestedDate\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                          appendTo=\"body\"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"grid-cell--3\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".shipper\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content\">\r\n                <div class=\"column\">\r\n                  <div class=\"form-group\" *ngIf=\"procurementRequest.bidoCustomer\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".partner\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\">\r\n                        {{ procurementRequest.bidoCustomer.customerName }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\" *ngIf=\"procurementRequest.bidtSiteIssue\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".site\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\">\r\n                        {{ procurementRequest.bidtSiteIssue.siteCode }} -\r\n                        {{ procurementRequest.bidtSiteIssue.siteName }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\" *ngIf=\"procurementRequest.bidtWarehouseIssue\">\r\n                    <label class=\"form-label\">{{ \"warehouse\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\">\r\n                        {{ procurementRequest.bidtWarehouseIssue.whCode }} -\r\n                        {{ procurementRequest.bidtWarehouseIssue.whName }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"grid-cell--3\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".recipient\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content\">\r\n                <div class=\"column\">\r\n                  <div class=\"form-group\" *ngIf=\"procurementRequest.bidtSiteReceipt\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".site\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\">\r\n                        {{ procurementRequest.bidtSiteReceipt.siteCode }}\r\n                        <ng-container *ngIf=\"procurementRequest.bidtSiteReceipt.siteName\">\r\n                          - {{ procurementRequest.bidtSiteReceipt.siteName }}\r\n                        </ng-container>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\" *ngIf=\"procurementRequest.bidtWarehouseReceipt\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".warehouseWorkshop\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\">\r\n                        {{ procurementRequest.bidtWarehouseReceipt.whCode }}\r\n                        <ng-container *ngIf=\"procurementRequest.bidtWarehouseReceipt.whName\">\r\n                          - {{ procurementRequest.bidtWarehouseReceipt.whName }}\r\n                        </ng-container>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\" *ngIf=\"workPackageAsset\">\r\n                    <label class=\"form-label\">\r\n                      <ng-container\r\n                        *ngIf=\"workPackageAsset.equipmentFunction == aWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY\"\r\n                      >\r\n                        {{ \"aircraft\" | translate }}\r\n                      </ng-container>\r\n                      <ng-container\r\n                        *ngIf=\"workPackageAsset.equipmentFunction == aWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY\"\r\n                      >\r\n                        {{ \"engine\" | translate }}\r\n                      </ng-container>\r\n                      <ng-container\r\n                        *ngIf=\"\r\n                          workPackageAsset.equipmentFunction != aWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY &&\r\n                          workPackageAsset.equipmentFunction != aWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY\r\n                        \"\r\n                      >\r\n                        {{ \"equipment\" | translate }}\r\n                      </ng-container>\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\">\r\n                        <a (click)=\"openWorkPackageAsset()\">{{ workPackageAssetName }}</a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"grid-row\">\r\n          <div class=\"grid-cell--4\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".origine\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".documentNumber\" | translate }}</label>\r\n\r\n                    <div class=\"form-control form-control-with-modal\" *ngIf=\"!isReadOpenMode\">\r\n                      <div class=\"form-control-data\" (click)=\"openWoDialog()\">\r\n                        <a class=\"link\" (click)=\"openWorkOrder()\" *ngIf=\"procurementRequest.bidmWorkOrder\">\r\n                          {{ procurementRequest.bidmWorkOrder?.woCode }}\r\n                        </a>\r\n                      </div>\r\n\r\n                      <div *ngIf=\"procurementRequest.bidmWorkOrder\" class=\"btn-clear-wrapper\">\r\n                        <i\r\n                          class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"eraseWo()\"\r\n                        ></i>\r\n                      </div>\r\n                      <div class=\"btn-search-wrapper\">\r\n                        <i\r\n                          class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"openWoDialog()\"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-control form-control-generic\" *ngIf=\"isReadOpenMode\">\r\n                      <a\r\n                        class=\"link\"\r\n                        (click)=\"openWorkOrder()\"\r\n                        *ngIf=\"procurementRequest.bidmWorkOrder\"\r\n                        style=\"cursor: pointer;\"\r\n                      >\r\n                        {{ procurementRequest.bidmWorkOrder?.woCode }}\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".type\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\">\r\n                        <ng-container\r\n                          *ngIf=\"procurementRequest.bidmWorkOrder && procurementRequest.bidmWorkOrder.woCode\"\r\n                        >\r\n                          {{ \"workOrder\" | translate }}\r\n                        </ng-container>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"grid-cell--4\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".desiredPotential\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content\">\r\n                <div class=\"row\" *ngIf=\"procurementRequestUnits.length == 0\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\" style=\"font-style: italic;\">\r\n                        {{ getComponentName() + \".noPotentialUnit\" | translate }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\" *ngIf=\"procurementRequestUnits.length > 0\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".value\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input\r\n                        class=\"aw-input\"\r\n                        type=\"text\"\r\n                        [(ngModel)]=\"procurementRequest.requestedPotential\"\r\n                        *ngIf=\"!isReadOpenMode\"\r\n                      />\r\n\r\n                      <ng-container *ngIf=\"isReadOpenMode\">\r\n                        {{ procurementRequest.requestedPotential | formatNumber }}\r\n                      </ng-container>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\" *ngIf=\"procurementRequestUnits.length > 0\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".unit\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                        [options]=\"procurementRequestUnits\"\r\n                        [(ngModel)]=\"procurementRequest.potentialUnit\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                        appendTo=\"body\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".expiration\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-calendar\r\n                        showButtonBar=\"true\"\r\n                        [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\"\r\n                        [yearRange]=\"sessionService.calendarYearRange\"\r\n                        class=\"aw-calendar\"\r\n                        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                        [locale]=\"sessionService.calendarFormat\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                        [(ngModel)]=\"procurementRequest.calendarPotential\"\r\n                      >\r\n                      </p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group flex--2\" *ngIf=\"procurementRequestUnits.length == 0\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"grid-cell--4\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".progress\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content\">\r\n                <div class=\"column\">\r\n                  <div class=\"row\">\r\n                    <div style=\"margin-left: 20px; max-width: 10rem; min-width: 10rem;\">\r\n                      <span class=\"bold\">{{ getComponentName() + \".procurement\" | translate }}</span>\r\n\r\n                      <div\r\n                        style=\"padding: 4px; margin-top: 4px; color: #000; border-radius: 4px; max-width: 6rem; min-width: 6rem; text-align: center;\"\r\n                        [ngClass]=\"{\r\n                          'served--nok': servedNb == 0,\r\n                          'served--ok': servedNb > 0 && isServed,\r\n                          'served--warning': servedNb > 0 && !isServed\r\n                        }\"\r\n                      >\r\n                        <span *ngIf=\"servedNb == 0\">\r\n                          {{ componentData.componentId + \".notServed\" | translate }}\r\n                        </span>\r\n                        <span *ngIf=\"servedNb > 0 && !isServed\">\r\n                          {{ componentData.componentId + \".partiallyServed\" | translate }}\r\n                        </span>\r\n                        <span *ngIf=\"servedNb > 0 && isServed\">\r\n                          {{ componentData.componentId + \".served\" | translate }}\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex-row--align-center\">\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\" style=\"font-size: 2.5rem; padding-bottom: 1rem;\">\r\n                          {{ notBookedNb }}\r\n                        </div>\r\n                      </div>\r\n                      <label class=\"form-label\">\r\n                        <ng-container\r\n                          *ngIf=\"\r\n                            procurementRequest.procStatus ==\r\n                              aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED ||\r\n                            procurementRequest.procStatus == aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED ||\r\n                            procurementRequest.procStatus == aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                          \"\r\n                        >\r\n                          {{ getComponentName() + \".notSelected\" | translate }}\r\n                        </ng-container>\r\n                        <ng-container\r\n                          *ngIf=\"\r\n                            procurementRequest.procStatus !=\r\n                              aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED &&\r\n                            procurementRequest.procStatus != aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED &&\r\n                            procurementRequest.procStatus != aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                          \"\r\n                        >\r\n                          {{ getComponentName() + \".notBooked\" | translate }}\r\n                        </ng-container>\r\n                      </label>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex-row--align-center\">\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\" style=\"font-size: 2.5rem; padding-bottom: 1rem\">\r\n                          {{ bookedNb }}\r\n                        </div>\r\n                      </div>\r\n                      <label class=\"form-label\">\r\n                        <ng-container\r\n                          *ngIf=\"\r\n                            procurementRequest.procStatus ==\r\n                              aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED ||\r\n                            procurementRequest.procStatus == aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED ||\r\n                            procurementRequest.procStatus == aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                          \"\r\n                        >\r\n                          {{ getComponentName() + \".selected\" | translate }}\r\n                        </ng-container>\r\n                        <ng-container\r\n                          *ngIf=\"\r\n                            procurementRequest.procStatus !=\r\n                              aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED &&\r\n                            procurementRequest.procStatus != aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED &&\r\n                            procurementRequest.procStatus != aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                          \"\r\n                        >\r\n                          {{ getComponentName() + \".booked\" | translate }}\r\n                        </ng-container>\r\n                      </label>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex-row--align-center\">\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\" style=\"font-size: 2.5rem; padding-bottom: 1rem\">\r\n                          {{ servedNb }}\r\n                        </div>\r\n                      </div>\r\n                      <label class=\"form-label\">{{ getComponentName() + \".served\" | translate }}</label>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div\r\n                    class=\"row\"\r\n                    style=\"margin-top: 16px;\"\r\n                    *ngIf=\"\r\n                      procurementRequest.procType == aWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE_ES ||\r\n                      procurementRequest.procType == aWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING_ES\r\n                    \"\r\n                  >\r\n                    <div style=\"margin-left: 20px; max-width: 10rem; min-width: 10rem;\">\r\n                      <span class=\"bold\">{{ getComponentName() + \".reverse\" | translate }}</span>\r\n\r\n                      <div\r\n                        style=\"padding: 4px; margin-top: 4px; color: #000; border-radius: 4px; max-width: 6rem; min-width: 6rem; text-align: center;\"\r\n                        [ngClass]=\"{\r\n                          'served--nok': notReversedNb > 0 && reversedNb == 0,\r\n                          'served--ok': notReversedNb == 0 && reversedNb > 0,\r\n                          'served--warning': notReversedNb > 0 && reversedNb > 0\r\n                        }\"\r\n                      >\r\n                        <span *ngIf=\"notReversedNb > 0 && reversedNb == 0\">\r\n                          {{ componentData.componentId + \".notReversed\" | translate }}\r\n                        </span>\r\n                        <span *ngIf=\"notReversedNb > 0 && reversedNb > 0\">\r\n                          {{ componentData.componentId + \".partiallyReversed\" | translate }}\r\n                        </span>\r\n                        <span *ngIf=\"notReversedNb == 0 && reversedNb > 0\">\r\n                          {{ componentData.componentId + \".reversed\" | translate }}\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex-row--align-center\">\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\" style=\"font-size: 2.5rem; padding-bottom: 1rem\">\r\n                          {{ notReversedNb }}\r\n                        </div>\r\n                      </div>\r\n                      <label class=\"form-label\">{{ getComponentName() + \".notReversed\" | translate }}</label>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex-row--align-center\">\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\" style=\"font-size: 2.5rem; padding-bottom: 1rem\">\r\n                          {{ reversedNb }}\r\n                        </div>\r\n                      </div>\r\n                      <label class=\"form-label\">{{ getComponentName() + \".reversed\" | translate }}</label>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ componentData.componentId + \".items\" | translate }}\r\n        </ng-template>\r\n\r\n        <div class=\"grid-row\">\r\n          <div class=\"grid-cell--12\">\r\n            <div class=\"grid-cell grid-cell--container grid-cell-items\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ componentData.componentId + \".procurementItems\" | translate }} ({{\r\n                      procurementRequest.bidtProcReqItems ? procurementRequest.bidtProcReqItems.length : 0\r\n                    }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                <div class=\"row flex-row--justify-end\">\r\n                  <button type=\"button\" mat-raised-button (click)=\"showItemDialog()\" *ngIf=\"!isReadOpenMode\">\r\n                    {{ componentData.componentId + \".addItem\" | translate }}\r\n                  </button>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"section\">\r\n                    <h4 class=\"section-title\">\r\n                      {{ componentData.componentId + \".materials\" | translate }}\r\n                    </h4>\r\n\r\n                    <div class=\"section-content\">\r\n                      <p-table\r\n                        id=\"items-table\"\r\n                        class=\"aw-table2\"\r\n                        [value]=\"procurementRequestItems\"\r\n                        [(selection)]=\"selectedProcurementRequestItem\"\r\n                        selectionMode=\"single\"\r\n                        (onRowSelect)=\"onSelectProcurementRequestItem()\"\r\n                        (onRowUnselect)=\"onSelectProcurementRequestItem()\"\r\n                      >\r\n                        <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n                          <tr\r\n                            [pSelectableRow]=\"rowData\"\r\n                            [pSelectableRowIndex]=\"rowIndex\"\r\n                            [ngStyle]=\"{ 'background-color': '#ffffff' }\"\r\n                          >\r\n                            <td>\r\n                              <div>\r\n                                <div style=\"display: flex; flex-direction: row;\">\r\n                                  <div style=\"min-width: 3rem; display: inline-block; flex-grow: 1;\">\r\n                                    <a style=\"font-weight: 600\" (click)=\"openArticle(rowData['obj'].birePn?.pnCode)\">\r\n                                      {{ rowData[\"obj\"].birePn?.pnCode }}\r\n                                    </a>\r\n                                  </div>\r\n\r\n                                  <div>\r\n                                    {{ componentData.componentId + \".requestedQty\" | translate }} =\r\n                                    <span style=\"font-weight: 600\">\r\n                                      {{ rowData[\"obj\"].requestedQuantity | formatNumber }}\r\n                                    </span>\r\n                                    <span *ngIf=\"rowData['obj'].birePn?.quantityUnit\">\r\n                                      {{ rowData[\"obj\"].birePn?.quantityUnit }}\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div style=\"display: flex; flex-direction: row;\">\r\n                                  <div style=\"min-width: 3rem; display: inline-block; flex-grow: 1;\">\r\n                                    {{ rowData[\"obj\"].birePn?.otanPnReference }}\r\n                                  </div>\r\n\r\n                                  <div *ngIf=\"rowData['obj'].birePn?.quantityPerIssue\">\r\n                                    ({{ \"distributionQuantityShort\" | translate }} =\r\n                                    {{ rowData[\"obj\"].birePn.quantityPerIssue | formatNumber }})\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div\r\n                                style=\"font-style: italic; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding-bottom: 1.5rem;\"\r\n                              >\r\n                                {{ rowData[\"obj\"].birePn?.articleDesignation }}\r\n                              </div>\r\n\r\n                              <div *ngIf=\"rowData['siteName']\" style=\"display: flex; justify-content: space-between;\">\r\n                                <span style=\"color: #01579b;;\">{{ getComponentName() + \".supplier\" | translate }}</span>\r\n                                <span class=\"bold\">{{ rowData[\"siteName\"] }}</span>\r\n                              </div>\r\n\r\n                              <div style=\"padding-bottom: 0.6rem; text-align: end;\" *ngIf=\"rowData['warehouseName']\">\r\n                                <span class=\"italic\">{{ rowData[\"warehouseName\"] }}</span>\r\n                              </div>\r\n\r\n                              <div>\r\n                                <div style=\"min-width: 8rem; display: inline-block;\">\r\n                                  <ng-container\r\n                                    *ngIf=\"\r\n                                      procurementRequest.procStatus ==\r\n                                        aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED ||\r\n                                      procurementRequest.procStatus ==\r\n                                        aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED ||\r\n                                      procurementRequest.procStatus ==\r\n                                        aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                                    \"\r\n                                  >\r\n                                    {{ getComponentName() + \".notSelected\" | translate }}\r\n                                  </ng-container>\r\n                                  <ng-container\r\n                                    *ngIf=\"\r\n                                      procurementRequest.procStatus !=\r\n                                        aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED &&\r\n                                      procurementRequest.procStatus !=\r\n                                        aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED &&\r\n                                      procurementRequest.procStatus !=\r\n                                        aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                                    \"\r\n                                  >\r\n                                    {{ getComponentName() + \".notBooked\" | translate }}\r\n                                  </ng-container>\r\n                                </div>\r\n                                <span style=\"font-weight: 600\">{{ rowData[\"notBookedNb\"] }}</span>\r\n                              </div>\r\n\r\n                              <div>\r\n                                <div style=\"min-width: 8rem; display: inline-block;\">\r\n                                  <ng-container\r\n                                    *ngIf=\"\r\n                                      procurementRequest.procStatus ==\r\n                                        aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED ||\r\n                                      procurementRequest.procStatus ==\r\n                                        aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED ||\r\n                                      procurementRequest.procStatus ==\r\n                                        aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                                    \"\r\n                                  >\r\n                                    {{ getComponentName() + \".selected\" | translate }}\r\n                                  </ng-container>\r\n                                  <ng-container\r\n                                    *ngIf=\"\r\n                                      procurementRequest.procStatus !=\r\n                                        aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_SIMULATED &&\r\n                                      procurementRequest.procStatus !=\r\n                                        aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED &&\r\n                                      procurementRequest.procStatus !=\r\n                                        aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                                    \"\r\n                                  >\r\n                                    {{ getComponentName() + \".booked\" | translate }}\r\n                                  </ng-container>\r\n                                </div>\r\n                                <span style=\"font-weight: 600\">{{ rowData[\"bookedNb\"] }}</span>\r\n                              </div>\r\n\r\n                              <div>\r\n                                <div style=\"min-width: 8rem; display: inline-block;\">\r\n                                  {{ getComponentName() + \".served\" | translate }}\r\n                                </div>\r\n                                <span style=\"font-weight: 600\">{{ rowData[\"servedNb\"] }}</span>\r\n                              </div>\r\n\r\n                              <div\r\n                                style=\"display: flex; flex-direction: row; justify-content: space-between; align-items: center;\"\r\n                                *ngIf=\"\r\n                                  procurementRequest.procStatus !=\r\n                                  aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CANCELED\r\n                                \"\r\n                              >\r\n                                <div\r\n                                  style=\"padding: 8px; color: #000; border-radius: 4px;\"\r\n                                  [ngClass]=\"{\r\n                                    'served--nok': rowData['servedNb'] == 0,\r\n                                    'served--ok': rowData['servedNb'] > 0 && rowData['servedNb'] == rowData['allNb'],\r\n                                    'served--warning':\r\n                                      rowData['servedNb'] > 0 && rowData['servedNb'] != rowData['allNb']\r\n                                  }\"\r\n                                >\r\n                                  <span *ngIf=\"rowData['servedNb'] == 0\">\r\n                                    {{ componentData.componentId + \".notServed\" | translate }}\r\n                                  </span>\r\n                                  <span *ngIf=\"rowData['servedNb'] > 0 && rowData['servedNb'] != rowData['allNb']\">\r\n                                    {{ componentData.componentId + \".partiallyServed\" | translate }}\r\n                                  </span>\r\n                                  <span *ngIf=\"rowData['servedNb'] > 0 && rowData['servedNb'] == rowData['allNb']\">\r\n                                    {{ componentData.componentId + \".served\" | translate }}\r\n                                  </span>\r\n                                </div>\r\n\r\n                                <div>\r\n                                  <button\r\n                                    class=\"actions-btn\"\r\n                                    mat-icon-button\r\n                                    class=\"mat-elevation-z1\"\r\n                                    [matMenuTriggerFor]=\"itemActions\"\r\n                                    (click)=\"stopPropagation($event)\"\r\n                                    *ngIf=\"\r\n                                      selectedProcurementRequestItem &&\r\n                                      rowData.obj === selectedProcurementRequestItem.obj &&\r\n                                      procurementRequest.procStatus !==\r\n                                        aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CLOSED\r\n                                    \"\r\n                                  >\r\n                                    <mat-icon>more_horiz</mat-icon>\r\n                                  </button>\r\n                                  <mat-menu #itemActions=\"matMenu\">\r\n                                    <button\r\n                                      mat-menu-item\r\n                                      (click)=\"manageProcurementRequestItem(rowData)\"\r\n                                      *ngIf=\"\r\n                                        procurementRequest.procStatus !=\r\n                                        aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                                      \"\r\n                                    >\r\n                                      {{ componentData.componentId + \".manage\" | translate }}\r\n                                    </button>\r\n                                    <button\r\n                                      mat-menu-item\r\n                                      (click)=\"editProcReqItemQuantity(rowData)\"\r\n                                      *ngIf=\"\r\n                                        rowData.obj.priStatus !=\r\n                                          aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CLOSED ||\r\n                                        rowData.obj.priStatus !=\r\n                                          aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CANCELED\r\n                                      \"\r\n                                    >\r\n                                      {{ \"editQuantity\" | translate }}\r\n                                    </button>\r\n                                    <button mat-menu-item (click)=\"deleteProcurementRequestItem(rowData)\">\r\n                                      {{ \"delete\" | translate }}\r\n                                    </button>\r\n                                  </mat-menu>\r\n                                </div>\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-template>\r\n                      </p-table>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"section\">\r\n                    <h4 class=\"section-title\">\r\n                      {{ componentData.componentId + \".selectedAsset\" | translate }}\r\n                    </h4>\r\n\r\n                    <div class=\"section-content\">\r\n                      <p-table\r\n                        *ngIf=\"selectedProcurementRequestItem\"\r\n                        class=\"aw-table2\"\r\n                        [value]=\"workshopEntries\"\r\n                        [(selection)]=\"selectedWorkshopEntry\"\r\n                        selectionMode=\"single\"\r\n                        (onRowSelect)=\"onSelectWorkshopEntry()\"\r\n                        (onRowUnselect)=\"onSelectWorkshopEntry()\"\r\n                      >\r\n                        <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n                          <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                            <td>\r\n                              <div\r\n                                *ngIf=\"!rowData.obj['stockMvtSn'] && !rowData.obj['stockMvtBatchNumber']\"\r\n                                style=\"font-style: italic;\"\r\n                              >\r\n                                {{ getComponentName() + \".noSelectedAsset\" | translate }}\r\n                              </div>\r\n\r\n                              <div *ngIf=\"rowData.obj['stockMvtSn'] || rowData.obj['stockMvtBatchNumber']\">\r\n                                <div>\r\n                                  <span style=\"min-width: 9rem; display: inline-block;\">\r\n                                    {{ \"packagingNumber\" | translate }}\r\n                                  </span>\r\n                                  <a class=\"bold\" (click)=\"openBatch(rowData)\">\r\n                                    {{ rowData.obj[\"stockMvtBatchNumber\"] }}\r\n                                  </a>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"!rowData.obj['stockMvtSn']\">\r\n                                  <span style=\"min-width: 9rem; display: inline-block;\">{{\r\n                                    getComponentName() + \".quantity\" | translate\r\n                                  }}</span>\r\n                                  <span class=\"bold\" *ngIf=\"rowData.obj['stockMvtQuantity']\">\r\n                                    {{ rowData.obj[\"stockMvtQuantity\"] | formatNumber }}\r\n                                  </span>\r\n                                  <span class=\"bold\" *ngIf=\"rowData.obj['stockMvtUnit']\">\r\n                                    {{ rowData.obj[\"stockMvtUnit\"] }}\r\n                                  </span>\r\n                                </div>\r\n\r\n                                <div>\r\n                                  <span style=\"min-width: 9rem; display: inline-block;\">\r\n                                    {{ (rowData.obj[\"stockMvtSn\"] ? \"sn\" : \"manufacturingBatch\") | translate }}\r\n                                  </span>\r\n                                  <a class=\"bold\" (click)=\"openEquipment(rowData)\" *ngIf=\"rowData.obj['stockMvtSn']\">\r\n                                    {{ rowData.obj[\"stockMvtSn\"] }}\r\n                                  </a>\r\n                                  <a\r\n                                    class=\"bold\"\r\n                                    (click)=\"openManufacturingBatch(rowData)\"\r\n                                    *ngIf=\"!rowData.obj['stockMvtSn']\"\r\n                                  >\r\n                                    {{ rowData[\"manufacturingBatch\"]?.batchNumber }}\r\n                                  </a>\r\n                                </div>\r\n\r\n                                <div>\r\n                                  <span style=\"min-width: 9rem; display: inline-block;\">\r\n                                    {{ \"status\" | translate }}\r\n                                  </span>\r\n                                  <span class=\"bold\">\r\n                                    {{ rowData.equipment?.operationalStatus | formatSelectOption: operationalStatuses }}\r\n                                  </span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div\r\n                                style=\"display: flex; flex-direction: row; justify-content: flex-end;\"\r\n                                *ngIf=\"\r\n                                  (rowData.obj['stockMvtSn'] || rowData.obj['stockMvtBatchNumber']) &&\r\n                                  procurementRequest.procStatus !=\r\n                                    aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CANCELED\r\n                                \"\r\n                              >\r\n                                <button\r\n                                  class=\"actions-btn\"\r\n                                  mat-icon-button\r\n                                  class=\"mat-elevation-z1\"\r\n                                  [matMenuTriggerFor]=\"itemActions\"\r\n                                  (click)=\"stopPropagation($event)\"\r\n                                  *ngIf=\"isCancelBookingBtnVisible(rowData)\"\r\n                                >\r\n                                  <mat-icon>more_horiz</mat-icon>\r\n                                </button>\r\n                                <mat-menu #itemActions=\"matMenu\">\r\n                                  <button mat-menu-item (click)=\"cancelBooking(rowData)\">\r\n                                    {{ \"cancel\" | translate }}\r\n                                  </button>\r\n                                </mat-menu>\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-template>\r\n                      </p-table>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"section\">\r\n                    <h4 class=\"section-title\">\r\n                      {{ componentData.componentId + \".servedState\" | translate }}\r\n                    </h4>\r\n\r\n                    <div class=\"section-content\">\r\n                      <aw-procurement-request-mvt-status\r\n                        *ngIf=\"\r\n                          selectedWorkshopEntry &&\r\n                          selectedWorkshopEntry?.obj.bidtStockMvtTypeId !== bidtStockMvtTypeConstants.REMOVAL\r\n                        \"\r\n                        [mvts]=\"stockMvtSubject.asObservable()\"\r\n                        [componentName]=\"'ProcurementRequestMvtStatusComponent'\"\r\n                        (onClick)=\"toggleDetailsTable($event)\"\r\n                      ></aw-procurement-request-mvt-status>\r\n\r\n                      <a-table\r\n                        [dataSource]=\"stockMvtTableDataSource\"\r\n                        *ngIf=\"\r\n                          selectedWorkshopEntry &&\r\n                          (showDetails ||\r\n                            selectedWorkshopEntry?.obj.bidtStockMvtTypeId === bidtStockMvtTypeConstants.REMOVAL)\r\n                        \"\r\n                        style=\"margin-top: 40px\"\r\n                      >\r\n                        <ng-template columnDef=\"movement\" let-rowData=\"rowData\">\r\n                          <div>\r\n                            <a class=\"bold\" (click)=\"openStovkMvt(rowData)\">\r\n                              {{ rowData[\"stockMvtCode\"] }}\r\n                            </a>\r\n                          </div>\r\n\r\n                          <div>\r\n                            <span class=\"italic\">{{ rowData[\"bidtStockMvtType\"]?.smtName | extractTranslation }}</span>\r\n                          </div>\r\n                        </ng-template>\r\n\r\n                        <ng-template columnDef=\"type\" let-rowData=\"rowData\">\r\n                          <i\r\n                            *ngIf=\"rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_CREDIT\"\r\n                            class=\"fa fa-fw fa-arrow-right procurement-type--in\"\r\n                            aria-hidden=\"true\"\r\n                            pTooltip=\"{{ componentData.componentId + '.receipt' | translate }}\"\r\n                          ></i>\r\n                          <i\r\n                            *ngIf=\"rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_DEBIT\"\r\n                            class=\"fa fa-fw fa-arrow-right procurement-type--out\"\r\n                            aria-hidden=\"true\"\r\n                            pTooltip=\"{{ componentData.componentId + '.issue' | translate }}\"\r\n                          ></i>\r\n                          <i\r\n                            *ngIf=\"rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_TRANSFER\"\r\n                            class=\"fa fa-fw fa-arrow-right procurement-type--transfer\"\r\n                            aria-hidden=\"true\"\r\n                            pTooltip=\"{{ componentData.componentId + '.transfer' | translate }}\"\r\n                          ></i>\r\n                        </ng-template>\r\n\r\n                        <ng-template columnDef=\"warehouseWorkshop\" let-rowData=\"rowData\">\r\n                          <div\r\n                            *ngIf=\"\r\n                              rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_CREDIT ||\r\n                              rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_TRANSFER\r\n                            \"\r\n                          >\r\n                            <span class=\"bold\">{{ rowData[\"bidtSiteReceipt\"]?.siteCode }}</span>\r\n                          </div>\r\n                          <div\r\n                            *ngIf=\"\r\n                              rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_CREDIT ||\r\n                              rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_TRANSFER\r\n                            \"\r\n                          >\r\n                            <span class=\"italic\">{{ rowData[\"bidtWarehouseReceipt\"]?.whName }}</span>\r\n                          </div>\r\n\r\n                          <div *ngIf=\"rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_DEBIT\">\r\n                            <span class=\"bold\">{{ rowData[\"bidtSiteIssue\"]?.siteCode }}</span>\r\n                          </div>\r\n                          <div *ngIf=\"rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_DEBIT\">\r\n                            <span class=\"italic\">{{ rowData[\"bidtWarehouseIssue\"]?.whName }}</span>\r\n                          </div>\r\n                        </ng-template>\r\n\r\n                        <ng-template columnDef=\"outbound\" let-rowData=\"rowData\">\r\n                          <div *ngIf=\"rowData['bidtStorageBinZoneIssue']?.sbNumber\">\r\n                            <span class=\"bold\">\r\n                              {{ rowData[\"bidtStorageBinZoneIssue\"]?.sbNumber }}\r\n                              <ng-container *ngIf=\"rowData['bidtStorageBinZoneIssue']?.sbDescription\">\r\n                                - {{ rowData[\"bidtStorageBinZoneIssue\"]?.sbDescription }}\r\n                              </ng-container>\r\n                            </span>\r\n                          </div>\r\n\r\n                          <div *ngIf=\"rowData['bidtStorageBinBinIssue']?.sbNumber\">\r\n                            <span class=\"bold\">{{ rowData[\"bidtStorageBinBinIssue\"]?.sbNumber }}</span>\r\n                          </div>\r\n                        </ng-template>\r\n\r\n                        <ng-template columnDef=\"inbound\" let-rowData=\"rowData\">\r\n                          <div *ngIf=\"rowData['bidtStorageBinZoneReceipt']?.sbNumber\">\r\n                            <span class=\"bold\">\r\n                              {{ rowData[\"bidtStorageBinZoneReceipt\"]?.sbNumber }}\r\n                              <ng-container *ngIf=\"rowData['bidtStorageBinZoneReceipt']?.sbDescription\">\r\n                                - {{ rowData[\"bidtStorageBinZoneReceipt\"]?.sbDescription }}\r\n                              </ng-container>\r\n                            </span>\r\n                          </div>\r\n\r\n                          <div *ngIf=\"rowData['bidtStorageBinBinReceipt']?.sbNumber\">\r\n                            <span class=\"bold\">{{ rowData[\"bidtStorageBinBinReceipt\"]?.sbNumber }}</span>\r\n                          </div>\r\n                        </ng-template>\r\n\r\n                        <ng-template columnDef=\"status\" let-rowData=\"rowData\">\r\n                          <div>\r\n                            <span class=\"bold\">\r\n                              {{ rowData[\"mvtStatus\"] | formatSelectOption: stockMvtStatuses }}\r\n                            </span>\r\n                          </div>\r\n\r\n                          <div>\r\n                            {{\r\n                              (rowData[\"stockMvtDate\"] ? rowData[\"stockMvtDate\"] : rowData[\"stockMvtPlannedDate\"])\r\n                                | date: \"yyyy/MM/dd HH:mm\":\"\":translateService.currentLang\r\n                            }}\r\n                          </div>\r\n                        </ng-template>\r\n                      </a-table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          class=\"grid-row\"\r\n          *ngIf=\"\r\n            procurementRequest.procType == aWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE_ES ||\r\n            procurementRequest.procType == aWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING_ES\r\n          \"\r\n        >\r\n          <div class=\"grid-cell--12\">\r\n            <div class=\"grid-cell grid-cell--container grid-cell-items\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ componentData.componentId + \".reverseItems\" | translate }}\r\n                    ({{ reverseProcurementRequestItems.length }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                <!-- <div class=\"row flex-row--justify-end\">\r\n                  <button type=\"button\" mat-raised-button (click)=\"showItemDialog()\" *ngIf=\"!isReadOpenMode\">\r\n                    {{ componentData.componentId + \".addItem\" | translate }}\r\n                  </button>\r\n                </div> -->\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"section\">\r\n                    <h4 class=\"section-title\">\r\n                      {{ componentData.componentId + \".materials\" | translate }}\r\n                    </h4>\r\n\r\n                    <div class=\"section-content\">\r\n                      <p-table\r\n                        id=\"items-table\"\r\n                        class=\"aw-table2\"\r\n                        [value]=\"reverseProcurementRequestItems\"\r\n                        [(selection)]=\"reverseSelectedProcurementRequestItem\"\r\n                        selectionMode=\"single\"\r\n                        (onRowSelect)=\"onSelectReverseProcurementRequestItem()\"\r\n                        (onRowUnselect)=\"onSelectReverseProcurementRequestItem()\"\r\n                      >\r\n                        <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n                          <tr\r\n                            [pSelectableRow]=\"rowData\"\r\n                            [pSelectableRowIndex]=\"rowIndex\"\r\n                            [ngStyle]=\"{ 'background-color': '#ffffff' }\"\r\n                          >\r\n                            <td>\r\n                              <div>\r\n                                <div style=\"display: flex; flex-direction: row;\">\r\n                                  <div style=\"min-width: 3rem; display: inline-block; flex-grow: 1;\">\r\n                                    <a style=\"font-weight: 600\" (click)=\"openArticle(rowData['obj'].birePn?.pnCode)\">\r\n                                      {{ rowData[\"obj\"].birePn?.pnCode }}\r\n                                    </a>\r\n                                  </div>\r\n\r\n                                  <div>\r\n                                    {{ componentData.componentId + \".requestedQty\" | translate }} =\r\n                                    <span style=\"font-weight: 600\">\r\n                                      {{ rowData[\"obj\"].quantity | formatNumber }}\r\n                                    </span>\r\n                                    <span *ngIf=\"rowData['obj'].birePn?.quantityUnit\">\r\n                                      {{ rowData[\"obj\"].birePn?.quantityUnit }}\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div style=\"display: flex; flex-direction: row;\">\r\n                                  <div style=\"min-width: 3rem; display: inline-block; flex-grow: 1;\">\r\n                                    {{ rowData[\"obj\"].birePn?.otanPnReference }}\r\n                                  </div>\r\n\r\n                                  <div *ngIf=\"rowData['obj'].birePn?.quantityPerIssue\">\r\n                                    ({{ \"distributionQuantityShort\" | translate }} =\r\n                                    {{ rowData[\"obj\"].birePn.quantityPerIssue | formatNumber }})\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div\r\n                                style=\"font-style: italic; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding-bottom: 1.5rem;\"\r\n                              >\r\n                                {{ rowData[\"obj\"].birePn?.articleDesignation }}\r\n                              </div>\r\n\r\n                              <div\r\n                                *ngIf=\"rowData['siteIssueName']\"\r\n                                style=\"display: flex; justify-content: space-between;\"\r\n                              >\r\n                                <span style=\"color: #01579b;;\">{{ getComponentName() + \".supplier\" | translate }}</span>\r\n                                <span class=\"bold\">{{ rowData[\"siteIssueName\"] }}</span>\r\n                              </div>\r\n\r\n                              <div\r\n                                style=\"padding-bottom: 0.6rem; text-align: end;\"\r\n                                *ngIf=\"rowData['warehouseIssueName']\"\r\n                              >\r\n                                <span class=\"italic\">{{ rowData[\"warehouseIssueName\"] }}</span>\r\n                              </div>\r\n\r\n                              <div\r\n                                *ngIf=\"rowData['siteReceiptName']\"\r\n                                style=\"display: flex; justify-content: space-between;\"\r\n                              >\r\n                                <span style=\"color: #01579b;;\">{{ \"recipient\" | translate }}</span>\r\n                                <span class=\"bold\">{{ rowData[\"siteReceiptName\"] }}</span>\r\n                              </div>\r\n\r\n                              <div\r\n                                style=\"padding-bottom: 0.6rem; text-align: end;\"\r\n                                *ngIf=\"rowData['warehouseReceiptName']\"\r\n                              >\r\n                                <span class=\"italic\">{{ rowData[\"warehouseReceiptName\"] }}</span>\r\n                              </div>\r\n\r\n                              <div>\r\n                                <div style=\"min-width: 8rem; display: inline-block;\">\r\n                                  {{ getComponentName() + \".notReversed\" | translate }}\r\n                                </div>\r\n                                <span style=\"font-weight: 600\">{{ rowData[\"notReversedNb\"] }}</span>\r\n                              </div>\r\n\r\n                              <div>\r\n                                <div style=\"min-width: 8rem; display: inline-block;\">\r\n                                  {{ getComponentName() + \".reversed\" | translate }}\r\n                                </div>\r\n                                <span style=\"font-weight: 600\">{{ rowData[\"reversedNb\"] }}</span>\r\n                              </div>\r\n\r\n                              <div\r\n                                style=\"display: flex; flex-direction: row; justify-content: space-between; align-items: center;\"\r\n                                *ngIf=\"\r\n                                  procurementRequest.procStatus !=\r\n                                  aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CANCELED\r\n                                \"\r\n                              >\r\n                                <div\r\n                                  style=\"padding: 8px; color: #000; border-radius: 4px;\"\r\n                                  [ngClass]=\"{\r\n                                    'served--nok': rowData['reversedNb'] == 0,\r\n                                    'served--ok':\r\n                                      rowData['reversedNb'] > 0 && rowData['reversedNb'] == rowData['allNb'],\r\n                                    'served--warning':\r\n                                      rowData['reversedNb'] > 0 && rowData['reversedNb'] != rowData['allNb']\r\n                                  }\"\r\n                                >\r\n                                  <span *ngIf=\"rowData['reversedNb'] == 0\">\r\n                                    {{ componentData.componentId + \".notReversed\" | translate }}\r\n                                  </span>\r\n                                  <span *ngIf=\"rowData['reversedNb'] > 0 && rowData['reversedNb'] != rowData['allNb']\">\r\n                                    {{ componentData.componentId + \".partiallyReversed\" | translate }}\r\n                                  </span>\r\n                                  <span *ngIf=\"rowData['reversedNb'] > 0 && rowData['reversedNb'] == rowData['allNb']\">\r\n                                    {{ componentData.componentId + \".reversed\" | translate }}\r\n                                  </span>\r\n                                </div>\r\n\r\n                                <div>\r\n                                  <button\r\n                                    class=\"actions-btn\"\r\n                                    mat-icon-button\r\n                                    class=\"mat-elevation-z1\"\r\n                                    [matMenuTriggerFor]=\"itemActions\"\r\n                                    (click)=\"stopPropagation($event)\"\r\n                                    *ngIf=\"\r\n                                      reverseSelectedProcurementRequestItem &&\r\n                                      rowData.obj === reverseSelectedProcurementRequestItem.obj &&\r\n                                      procurementRequest.procStatus !==\r\n                                        aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CLOSED\r\n                                    \"\r\n                                  >\r\n                                    <mat-icon>more_horiz</mat-icon>\r\n                                  </button>\r\n                                  <mat-menu #itemActions=\"matMenu\">\r\n                                    <button\r\n                                      mat-menu-item\r\n                                      (click)=\"manageTransfertOrderItem(rowData)\"\r\n                                      *ngIf=\"\r\n                                        !procurementRequest.bidmWorkOrderWoId &&\r\n                                        procurementRequest.procStatus !=\r\n                                          aWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT\r\n                                      \"\r\n                                    >\r\n                                      {{ componentData.componentId + \".manage\" | translate }}\r\n                                    </button>\r\n                                  </mat-menu>\r\n                                </div>\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-template>\r\n                      </p-table>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"section\">\r\n                    <h4 class=\"section-title\">\r\n                      {{ componentData.componentId + \".reversedAsset\" | translate }}\r\n                    </h4>\r\n\r\n                    <div class=\"section-content\">\r\n                      <p-table\r\n                        *ngIf=\"reverseSelectedProcurementRequestItem\"\r\n                        class=\"aw-table2\"\r\n                        [value]=\"reverseWorkshopEntries\"\r\n                        [(selection)]=\"reverseSelectedWorkshopEntry\"\r\n                        selectionMode=\"single\"\r\n                        (onRowSelect)=\"onSelectReverseWorkshopEntry()\"\r\n                        (onRowUnselect)=\"onSelectReverseWorkshopEntry()\"\r\n                      >\r\n                        <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n                          <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                            <td>\r\n                              <div\r\n                                *ngIf=\"!rowData.obj['stockMvtSn'] && !rowData.obj['stockMvtBatchNumber']\"\r\n                                style=\"font-style: italic;\"\r\n                              >\r\n                                {{ getComponentName() + \".noSelectedAsset\" | translate }}\r\n                              </div>\r\n\r\n                              <div *ngIf=\"rowData.obj['stockMvtSn'] || rowData.obj['stockMvtBatchNumber']\">\r\n                                <div>\r\n                                  <span style=\"min-width: 9rem; display: inline-block;\">\r\n                                    {{ \"packagingNumber\" | translate }}\r\n                                  </span>\r\n                                  <a class=\"bold\" (click)=\"openBatch(rowData)\">\r\n                                    {{ rowData.obj[\"stockMvtBatchNumber\"] }}\r\n                                  </a>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"!rowData.obj['stockMvtSn']\">\r\n                                  <span style=\"min-width: 9rem; display: inline-block;\">{{\r\n                                    getComponentName() + \".quantity\" | translate\r\n                                  }}</span>\r\n                                  <span class=\"bold\" *ngIf=\"rowData.obj['stockMvtQuantity']\">\r\n                                    {{ rowData.obj[\"stockMvtQuantity\"] | formatNumber }}\r\n                                  </span>\r\n                                  <span class=\"bold\" *ngIf=\"rowData.obj['stockMvtUnit']\">\r\n                                    {{ rowData.obj[\"stockMvtUnit\"] }}\r\n                                  </span>\r\n                                </div>\r\n\r\n                                <div>\r\n                                  <span style=\"min-width: 9rem; display: inline-block;\">\r\n                                    {{ (rowData.obj[\"stockMvtSn\"] ? \"sn\" : \"manufacturingBatch\") | translate }}\r\n                                  </span>\r\n                                  <a class=\"bold\" (click)=\"openEquipment(rowData)\" *ngIf=\"rowData.obj['stockMvtSn']\">\r\n                                    {{ rowData.obj[\"stockMvtSn\"] }}\r\n                                  </a>\r\n                                  <a\r\n                                    class=\"bold\"\r\n                                    (click)=\"openManufacturingBatch(rowData)\"\r\n                                    *ngIf=\"!rowData.obj['stockMvtSn']\"\r\n                                  >\r\n                                    {{ rowData[\"manufacturingBatch\"]?.batchNumber }}\r\n                                  </a>\r\n                                </div>\r\n\r\n                                <div>\r\n                                  <span style=\"min-width: 9rem; display: inline-block;\">\r\n                                    {{ \"status\" | translate }}\r\n                                  </span>\r\n                                  <span class=\"bold\">\r\n                                    {{ rowData.equipment?.operationalStatus | formatSelectOption: operationalStatuses }}\r\n                                  </span>\r\n                                </div>\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-template>\r\n                      </p-table>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"section\">\r\n                    <h4 class=\"section-title\">\r\n                      {{ componentData.componentId + \".reversedState\" | translate }}\r\n                    </h4>\r\n\r\n                    <div class=\"section-content\">\r\n                      <aw-procurement-request-reverse-mvt-status\r\n                        *ngIf=\"\r\n                          reverseSelectedWorkshopEntry &&\r\n                          reverseSelectedWorkshopEntry?.obj.bidtStockMvtTypeId !== bidtStockMvtTypeConstants.REMOVAL\r\n                        \"\r\n                        [mvts]=\"reverseStockMvtSubject.asObservable()\"\r\n                        [procurementRequest]=\"procurementRequest\"\r\n                        (onClick)=\"toggleReverseDetailsTable($event)\"\r\n                      ></aw-procurement-request-reverse-mvt-status>\r\n\r\n                      <a-table\r\n                        [dataSource]=\"reverseStockMvtTableDataSource\"\r\n                        *ngIf=\"\r\n                          reverseSelectedWorkshopEntry &&\r\n                          (reverseShowDetails ||\r\n                            reverseSelectedWorkshopEntry?.obj.bidtStockMvtTypeId === bidtStockMvtTypeConstants.REMOVAL)\r\n                        \"\r\n                        style=\"margin-top: 40px\"\r\n                      >\r\n                        <ng-template columnDef=\"movement\" let-rowData=\"rowData\">\r\n                          <div>\r\n                            <a class=\"bold\" (click)=\"openStovkMvt(rowData)\">\r\n                              {{ rowData[\"stockMvtCode\"] }}\r\n                            </a>\r\n                          </div>\r\n\r\n                          <div>\r\n                            <span class=\"italic\">{{ rowData[\"bidtStockMvtType\"]?.smtName | extractTranslation }}</span>\r\n                          </div>\r\n                        </ng-template>\r\n\r\n                        <ng-template columnDef=\"type\" let-rowData=\"rowData\">\r\n                          <i\r\n                            *ngIf=\"rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_CREDIT\"\r\n                            class=\"fa fa-fw fa-arrow-right procurement-type--in\"\r\n                            aria-hidden=\"true\"\r\n                            pTooltip=\"{{ componentData.componentId + '.receipt' | translate }}\"\r\n                          ></i>\r\n                          <i\r\n                            *ngIf=\"rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_DEBIT\"\r\n                            class=\"fa fa-fw fa-arrow-right procurement-type--out\"\r\n                            aria-hidden=\"true\"\r\n                            pTooltip=\"{{ componentData.componentId + '.issue' | translate }}\"\r\n                          ></i>\r\n                          <i\r\n                            *ngIf=\"rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_TRANSFER\"\r\n                            class=\"fa fa-fw fa-arrow-right procurement-type--transfer\"\r\n                            aria-hidden=\"true\"\r\n                            pTooltip=\"{{ componentData.componentId + '.transfer' | translate }}\"\r\n                          ></i>\r\n                        </ng-template>\r\n\r\n                        <ng-template columnDef=\"warehouseWorkshop\" let-rowData=\"rowData\">\r\n                          <div\r\n                            *ngIf=\"\r\n                              rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_CREDIT ||\r\n                              rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_TRANSFER\r\n                            \"\r\n                          >\r\n                            <span class=\"bold\">{{ rowData[\"bidtSiteReceipt\"]?.siteCode }}</span>\r\n                          </div>\r\n                          <div\r\n                            *ngIf=\"\r\n                              rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_CREDIT ||\r\n                              rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_TRANSFER\r\n                            \"\r\n                          >\r\n                            <span class=\"italic\">{{ rowData[\"bidtWarehouseReceipt\"]?.whName }}</span>\r\n                          </div>\r\n\r\n                          <div *ngIf=\"rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_DEBIT\">\r\n                            <span class=\"bold\">{{ rowData[\"bidtSiteIssue\"]?.siteCode }}</span>\r\n                          </div>\r\n                          <div *ngIf=\"rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_DEBIT\">\r\n                            <span class=\"italic\">{{ rowData[\"bidtWarehouseIssue\"]?.whName }}</span>\r\n                          </div>\r\n                        </ng-template>\r\n\r\n                        <ng-template columnDef=\"outbound\" let-rowData=\"rowData\">\r\n                          <div *ngIf=\"rowData['bidtStorageBinZoneIssue']?.sbNumber\">\r\n                            <span class=\"bold\">\r\n                              {{ rowData[\"bidtStorageBinZoneIssue\"]?.sbNumber }}\r\n                              <ng-container *ngIf=\"rowData['bidtStorageBinZoneIssue']?.sbDescription\">\r\n                                - {{ rowData[\"bidtStorageBinZoneIssue\"]?.sbDescription }}\r\n                              </ng-container>\r\n                            </span>\r\n                          </div>\r\n\r\n                          <div *ngIf=\"rowData['bidtStorageBinBinIssue']?.sbNumber\">\r\n                            <span class=\"bold\">{{ rowData[\"bidtStorageBinBinIssue\"]?.sbNumber }}</span>\r\n                          </div>\r\n                        </ng-template>\r\n\r\n                        <ng-template columnDef=\"inbound\" let-rowData=\"rowData\">\r\n                          <div *ngIf=\"rowData['bidtStorageBinZoneReceipt']?.sbNumber\">\r\n                            <span class=\"bold\">\r\n                              {{ rowData[\"bidtStorageBinZoneReceipt\"]?.sbNumber }}\r\n                              <ng-container *ngIf=\"rowData['bidtStorageBinZoneReceipt']?.sbDescription\">\r\n                                - {{ rowData[\"bidtStorageBinZoneReceipt\"]?.sbDescription }}\r\n                              </ng-container>\r\n                            </span>\r\n                          </div>\r\n\r\n                          <div *ngIf=\"rowData['bidtStorageBinBinReceipt']?.sbNumber\">\r\n                            <span class=\"bold\">{{ rowData[\"bidtStorageBinBinReceipt\"]?.sbNumber }}</span>\r\n                          </div>\r\n                        </ng-template>\r\n\r\n                        <ng-template columnDef=\"status\" let-rowData=\"rowData\">\r\n                          <div>\r\n                            <span class=\"bold\">\r\n                              {{ rowData[\"mvtStatus\"] | formatSelectOption: stockMvtStatuses }}\r\n                            </span>\r\n                          </div>\r\n\r\n                          <div>\r\n                            {{\r\n                              (rowData[\"stockMvtDate\"] ? rowData[\"stockMvtDate\"] : rowData[\"stockMvtPlannedDate\"])\r\n                                | date: \"yyyy/MM/dd HH:mm\":\"\":translateService.currentLang\r\n                            }}\r\n                          </div>\r\n                        </ng-template>\r\n                      </a-table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ componentData.componentId + \".documents\" | translate }}\r\n        </ng-template>\r\n\r\n        <div class=\"grid-row\">\r\n          <div class=\"grid-cell--12\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ componentData.componentId + \".documents\" | translate }} ({{ documentTableDataSource.dataCount }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                <div class=\"section\">\r\n                  <div class=\"section-content\">\r\n                    <a-table [dataSource]=\"documentTableDataSource\">\r\n                      <ng-template tableActionsDef>\r\n                        <p-fileUpload\r\n                          #fileUploader\r\n                          auto=\"true\"\r\n                          chooseLabel=\"{{ 'global.upload' | translate }}\"\r\n                          customUpload=\"true\"\r\n                          mode=\"basic\"\r\n                          name=\"document[]\"\r\n                          (uploadHandler)=\"uploadDocument($event, fileUploader)\"\r\n                          *ngIf=\"!isReadOpenMode && !documentTableDataSource.hasDataSelection\"\r\n                        >\r\n                        </p-fileUpload>\r\n\r\n                        <button\r\n                          *ngIf=\"!isReadOpenMode && documentTableDataSource.hasDataSelection\"\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                          color=\"warn\"\r\n                          (click)=\"deleteDocuments()\"\r\n                        >\r\n                          {{ \"global.delete\" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n\r\n                      <ng-template columnDef=\"documentPublicationDate\" let-rowData=\"rowData\">\r\n                        {{ rowData[\"documentPublicationDate\"] | date: \"shortDate\":\"\":translateService.currentLang }}\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-add-popup\r\n  *ngIf=\"itemDialogVisible\"\r\n  [(display)]=\"itemDialogVisible\"\r\n  (onValidate)=\"onValidateItem($event)\"\r\n></aw-dialog-add-popup>\r\n\r\n<aw-dialog-procurement-request-edit-quantity\r\n  *ngIf=\"editQuantityDialogVisible\"\r\n  [(display)]=\"editQuantityDialogVisible\"\r\n  [procurementRequest]=\"procurementRequest\"\r\n  [procReqItem]=\"selectedProcReqItem\"\r\n  [workshopEntries]=\"workshopEntries\"\r\n  (onValidate)=\"onEditQuantity($event)\"\r\n></aw-dialog-procurement-request-edit-quantity>\r\n\r\n<aw-dialog-search-work-order\r\n  *ngIf=\"showWoDialog\"\r\n  [(display)]=\"showWoDialog\"\r\n  [sourceSearchObject]=\"searchWoObject\"\r\n  (onSelected)=\"onSelectWo($event)\"\r\n>\r\n</aw-dialog-search-work-order>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/procurement-request/form/procurement-request-form.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/form/procurement-request-form.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .grid-cell-items .section:first-of-type, :host .grid-cell-items .section:nth-of-type(2) {\n  width: 20%; }\n\n:host .grid-cell-items .section:last-of-type {\n  padding-left: 1px;\n  width: 60%; }\n\n:host .grid-cell-items .section:nth-of-type(2) {\n  border-left: 1px solid #595959;\n  border-right: 1px solid #595959;\n  padding-left: 1px; }\n\n:host .green {\n  color: #4caf50 !important; }\n\n:host .red {\n  color: #f6685e !important; }\n\n:host .yellow {\n  color: #ffc107 !important; }\n\n:host .alert {\n  display: inline-block;\n  width: 50%; }\n\n:host .served--nok {\n  background-color: #f6685e !important; }\n\n:host .served--ok {\n  background-color: #4caf50 !important; }\n\n:host .served--warning {\n  background-color: #ffc107 !important; }\n\n:host .procurement--nok {\n  background-color: #f6685e; }\n\n:host .procurement--ok {\n  background-color: #4caf50; }\n\n:host .procurement--warning {\n  background-color: #ffc107; }\n\n:host .procurement-type--in {\n  color: #4caf50;\n  -webkit-transform: rotate(320deg);\n          transform: rotate(320deg); }\n\n:host .procurement-type--out {\n  color: #f6685e;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n:host .procurement-type--transfer {\n  color: #006ea9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvcHJvY3VyZW1lbnQtcmVxdWVzdC9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xccHJvY3VyZW1lbnQtcmVxdWVzdFxcZm9ybVxccHJvY3VyZW1lbnQtcmVxdWVzdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9wcm9jdXJlbWVudC1yZXF1ZXN0L2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBS1EsVUFBVSxFQUFBOztBQUxsQjtFQVNRLGlCQUFpQjtFQUNqQixVQUFVLEVBQUE7O0FBVmxCO0VBY1EsOEJDYnNCO0VEY3RCLCtCQ2RzQjtFRGV0QixpQkFBaUIsRUFBQTs7QUFoQnpCO0VBc0JJLHlCQUErQixFQUFBOztBQXRCbkM7RUEwQkkseUJBQTZCLEVBQUE7O0FBMUJqQztFQThCSSx5QkFBeUIsRUFBQTs7QUE5QjdCO0VBa0NJLHFCQUFxQjtFQUNyQixVQUFVLEVBQUE7O0FBbkNkO0VBdUNJLG9DQUF3QyxFQUFBOztBQXZDNUM7RUEyQ0ksb0NBQTBDLEVBQUE7O0FBM0M5QztFQStDSSxvQ0FBb0MsRUFBQTs7QUEvQ3hDO0VBbURJLHlCQzdCZ0IsRUFBQTs7QUR0QnBCO0VBdURJLHlCQ3BDa0IsRUFBQTs7QURuQnRCO0VBMkRJLHlCQ3ZDWSxFQUFBOztBRHBCaEI7RUErREksY0M1Q2tCO0VENkNsQixpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBaEU3QjtFQW9FSSxjQzlDZ0I7RUQrQ2hCLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTs7QUFyRTVCO0VBeUVJLGNDakRnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvcHJvY3VyZW1lbnQtcmVxdWVzdC9mb3JtL3Byb2N1cmVtZW50LXJlcXVlc3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuXHJcbjpob3N0IHtcclxuICAuZ3JpZC1jZWxsLWl0ZW1zIHtcclxuICAgIC5zZWN0aW9uIHtcclxuICAgICAgJjpmaXJzdC1vZi10eXBlLFxyXG4gICAgICAmOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcHg7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JlZW4ge1xyXG4gICAgY29sb3I6ICRncmVlbi1saWdodDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yZWQge1xyXG4gICAgY29sb3I6ICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAueWVsbG93IHtcclxuICAgIGNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYWxlcnQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5zZXJ2ZWQtLW5vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNlcnZlZC0tb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNlcnZlZC0td2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucHJvY3VyZW1lbnQtLW5vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICB9XHJcblxyXG4gIC5wcm9jdXJlbWVudC0tb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICB9XHJcblxyXG4gIC5wcm9jdXJlbWVudC0td2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgLnByb2N1cmVtZW50LXR5cGUtLWluIHtcclxuICAgIGNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzIwZGVnKTtcclxuICB9XHJcblxyXG4gIC5wcm9jdXJlbWVudC10eXBlLS1vdXQge1xyXG4gICAgY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnByb2N1cmVtZW50LXR5cGUtLXRyYW5zZmVyIHtcclxuICAgIGNvbG9yOiAkYmx1ZS1kYXJrMTtcclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/logistics/procurement-request/form/procurement-request-form.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/form/procurement-request-form.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProcurementRequestFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcurementRequestFormComponent", function() { return ProcurementRequestFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/constants/bidt-stock-mvt-constants */ "./src/app/shared/constants/bidt-stock-mvt-constants.ts");
/* harmony import */ var _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/constants/bidt-stock-mvt-type-constants */ "./src/app/shared/constants/bidt-stock-mvt-type-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/utils/bido-equipment-utils */ "./src/app/shared/utils/bido-equipment-utils.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../shared/utils/logistic-utils */ "./src/app/shared/utils/logistic-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../overlay/overlay.service */ "./src/app/main/overlay/overlay.service.ts");
/* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../logistics.service */ "./src/app/main/logistics/logistics.service.ts");
/* harmony import */ var _procurement_request_form_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./procurement-request-form.service */ "./src/app/main/logistics/procurement-request/form/procurement-request-form.service.ts");
/* harmony import */ var _status_procurement_request_status_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./status/procurement-request-status.component */ "./src/app/main/logistics/procurement-request/form/status/procurement-request-status.component.ts");
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

































var ProcurementRequestFormComponent = /** @class */ (function (_super) {
    __extends(ProcurementRequestFormComponent, _super);
    // ////////////////////////////////////////////////////////////////////////////
    function ProcurementRequestFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, pageTocService, sessionService, translateService, confirmationService, logisticsService, overlayService, procurementRequestFormService, propertiesService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__["ComponentOpenMode"].Read, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.confirmationService = confirmationService;
        _this.logisticsService = logisticsService;
        _this.overlayService = overlayService;
        _this.procurementRequestFormService = procurementRequestFormService;
        _this.propertiesService = propertiesService;
        _this.aWPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"];
        _this.component = ProcurementRequestFormComponent_1;
        _this.bidtStockMvtConstants = _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_8__["BidtStockMvtConstants"];
        _this.bidtStockMvtTypeConstants = _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidtStockMvtTypeConstant"];
        _this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__["GenericPropertyConstants"].DOC_PARTNER_CATEGORY_MAP).subscribe(function (results) {
            _this.documentTypes = !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_27__["SelectItemUtils"].fromLabelValues(results) : [];
        });
        _this.sessionService.getUserSiteId().subscribe({
            next: function (site) {
                _this.userSiteId = site ? site.siteId : undefined;
            }
        });
        _this.stockMvtSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.reverseStockMvtSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.showDetails = false;
        _this.reverseShowDetails = false;
        _this.init();
        _this.onBeforeLoad();
        return _this;
    }
    ProcurementRequestFormComponent_1 = ProcurementRequestFormComponent;
    // ////////////////////////////////////////////////////////////////////////////
    ProcurementRequestFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__["ComponentConstants"].LOG_PROCUREMENT_REQUEST_FORM;
    };
    // ////////////////////////////////////////////////////////////////////////////
    ProcurementRequestFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        if (this.componentData.objectId) {
            this.procurementRequestId = this.serializationService.deserialize(this.componentData.objectId).id;
            this.load();
        }
    };
    // ////////////////////////////////////////////////////////////////////////////
    ProcurementRequestFormComponent.prototype.cancel = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__["ComponentOpenMode"].Read);
    };
    ProcurementRequestFormComponent.prototype.cancelBooking = function (row) {
        var _this = this;
        if (row.equipment) {
            this.logisticsService.isAssetBooked(row.equipment).subscribe({
                next: function (stockMvt) {
                    if (stockMvt) {
                        _this.logisticsService.cancelBookedAsset(stockMvt).subscribe({
                            next: function () {
                                _this.reload();
                            }
                        });
                    }
                    else {
                        _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnCancelBookedAsset'));
                    }
                }
            });
        }
    };
    ProcurementRequestFormComponent.prototype.canSave = function () {
        return (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_26__["ObjectUtils"].isDefined(this.procurementRequest.criticality) &&
            _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_26__["ObjectUtils"].isDefined(this.procurementRequest.requestedDate));
    };
    ProcurementRequestFormComponent.prototype.deleteProcurementRequestItem = function (row) {
        var _this = this;
        if (row) {
            this.logisticsService.deleteProcurementRequestItem(row.obj.id).subscribe({
                next: function () {
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnRemoveItem'));
                    _this.reload();
                }
            });
        }
    };
    ProcurementRequestFormComponent.prototype.editProcReqItemQuantity = function (row) {
        this.editQuantityDialogVisible = true;
        this.selectedProcReqItem = row.obj;
    };
    ProcurementRequestFormComponent.prototype.edit = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__["ComponentOpenMode"].Write);
    };
    ProcurementRequestFormComponent.prototype.manageProcurementRequestItem = function (row) {
        if (row) {
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__["ComponentConstants"].LOG_MATERIAL_REQUEST_MANAGEMENT_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__["ComponentOpenMode"].Read,
                objectId: this.serializationService.serialize({
                    prId: this.procurementRequest.id,
                    prItemId: row.obj.id
                })
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    ProcurementRequestFormComponent.prototype.onSelectProcurementRequestItem = function () {
        this.workshopEntries = [];
        this.stockMvtTableDataSource.setData([]);
        this.stockMvtSubject.next([]);
        this.showDetails = false;
        this.selectedWorkshopEntry = undefined;
        this.stockMvtTableDataSource.dataSelection = [];
        this.loadWorkshopEntryFromProcurementRequestItem();
    };
    ProcurementRequestFormComponent.prototype.onSelectReverseProcurementRequestItem = function () {
        this.reverseWorkshopEntries = [];
        this.reverseStockMvtTableDataSource.setData([]);
        this.reverseStockMvtSubject.next([]);
        this.reverseShowDetails = false;
        this.reverseSelectedWorkshopEntry = undefined;
        this.reverseStockMvtTableDataSource.dataSelection = [];
        this.loadReverseWorkshopEntryFromProcurementRequestItem();
    };
    ProcurementRequestFormComponent.prototype.onSelectReverseWorkshopEntry = function () {
        this.reverseStockMvtTableDataSource.setData([]);
        this.reverseStockMvtSubject.next([]);
        this.reverseShowDetails = false;
        this.reverseStockMvtTableDataSource.dataSelection = [];
        this.loadReverseStockMvtFromWorkshopEntry();
    };
    ProcurementRequestFormComponent.prototype.onSelectWorkshopEntry = function () {
        this.stockMvtTableDataSource.setData([]);
        this.stockMvtSubject.next([]);
        this.showDetails = false;
        this.stockMvtTableDataSource.dataSelection = [];
        this.loadStockMvtFromWorkshopEntry();
    };
    ProcurementRequestFormComponent.prototype.onValidateItem = function (event) {
        var _this = this;
        var input = {
            bidtProcurementRequest: this.procurementRequest,
            pnCode: event.pn.pnCode,
            quantity: event.quantity
        };
        this.logisticsService
            .createProcurementRequestItem(input)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.itemDialogVisible = false;
        }))
            .subscribe({
            next: function () {
                _this.messageService.showSuccessMessage('successOnAddItem');
                _this.reload();
            }
        });
    };
    ProcurementRequestFormComponent.prototype.onEditQuantity = function (newQuantity) {
        var _this = this;
        if (this.selectedProcReqItem) {
            this.logisticsService
                .updateProcurementRequestItemQuantity({
                newQuantity: newQuantity,
                itemId: this.selectedProcReqItem.id,
                oldQuantity: this.selectedProcReqItem.requestedQuantity
            })
                .subscribe({
                next: function () {
                    _this.reload();
                }
            });
        }
    };
    ProcurementRequestFormComponent.prototype.openWorkPackageAsset = function () {
        if (this.workPackageAsset) {
            var componentId = void 0;
            if (this.workPackageAsset.equipmentFunction === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
                componentId = _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__["ComponentConstants"].FLE_AIRCRAFT_FORM;
            }
            else if (this.workPackageAsset.equipmentFunction === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY) {
                componentId = _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__["ComponentConstants"].FLE_ENGINE_FORM;
            }
            else {
                componentId = _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__["ComponentConstants"].FLE_EQUIPMENT_FORM;
            }
            var data = {
                componentId: componentId,
                id: this.tabService.generateId(),
                objectId: this.serializationService.serialize({
                    equipmentCode: this.workPackageAsset.equipmentCode
                }),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    ProcurementRequestFormComponent.prototype.openArticle = function (pnCode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__["ComponentConstants"].LOG_MATERIAL_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__["ComponentOpenMode"].Read,
            objectId: this.serializationService.serialize({ pnCode: pnCode })
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ProcurementRequestFormComponent.prototype.openStovkMvt = function (rowData) {
        var searchCriteria = {
            mvtStatus: rowData.mvtStatus ? [rowData.mvtStatus] : [],
            mvtStatusExcluded: [],
            untilPlannedDate: rowData.stockMvtPlannedDate,
            stockMvt: rowData,
            pnCode: rowData.birePnPnCode,
            withAlternatives: false,
            criticality: rowData.criticality,
            dfShipmentSearch: false
        };
        var params = {
            searchParameters: searchCriteria,
            bidtStockList: [rowData]
        };
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__["ComponentConstants"].LOG_STOCK_MOVEMENTS_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__["ComponentOpenMode"].Read,
            objectId: this.serializationService.serialize(params)
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ProcurementRequestFormComponent.prototype.openWorkOrder = function () {
        if (this.isReadOpenMode || this.bookedNb !== 0) {
            if (this.procurementRequest.bidmWorkOrder) {
                var data = {
                    id: this.tabService.generateId(),
                    componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__["ComponentConstants"].MAI_WORK_ORDER_FORM,
                    openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__["ComponentOpenMode"].Read,
                    objectId: this.serializationService.serialize({
                        projectId: this.procurementRequest.bidmWorkOrder.projectId,
                        woId: this.procurementRequest.bidmWorkOrder.woId
                    })
                };
                var labelKey = 'transaction.' + data.componentId;
                this.tabService.open(this.tabService.create(data, labelKey, true));
            }
        }
    };
    ProcurementRequestFormComponent.prototype.reload = function () {
        this.onBeforeLoad();
        this.load();
    };
    ProcurementRequestFormComponent.prototype.remove = function () {
        var _this = this;
        this.confirmationService.confirm({
            messageKey: 'confirmDeleteProcurementRequest',
            accept: function () {
                _this.logisticsService.deleteProcurementRequest(_this.procurementRequest.id).subscribe({
                    next: function () {
                        _this.messageService.showSuccessMessage('successOnDeleteProcurementRequest');
                        _this.tabService.openPreviousTab();
                    }
                });
            }
        });
    };
    ProcurementRequestFormComponent.prototype.save = function () {
        var _this = this;
        this.logisticsService.addOrUpdateProcurementRequest(this.procurementRequest).subscribe({
            next: function (procurementRequest) {
                _this.saveBidtDocuments();
                _this.procurementRequest = procurementRequest;
                _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__["ComponentOpenMode"].Read);
                _this.reload();
            }
        });
    };
    ProcurementRequestFormComponent.prototype.showItemDialog = function () {
        this.itemDialogVisible = true;
    };
    ProcurementRequestFormComponent.prototype.showStatus = function () {
        var _this = this;
        if (this.procurementRequest.procStatus !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].PROCUREMENT_REQUEST_STATUS_CANCELED) {
            var overlayRef = this.overlayService.openWithPositionCenter({
                content: _status_procurement_request_status_component__WEBPACK_IMPORTED_MODULE_32__["ProcurementRequesttatusComponent"],
                data: {
                    procurementRequest: this.procurementRequest,
                    showClosedButton: this.bookedNb - this.bookedButDidntStartedNb === 0
                }
            });
            overlayRef.afterClosed$.subscribe({
                next: function (event) {
                    if (event.data) {
                        _this.procurementRequest.procStatus = event.data;
                        if (!!_this.procurementRequest.bidtProcReqItems &&
                            _this.procurementRequest.procStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].PROCUREMENT_REQUEST_STATUS_CLOSED) {
                            _this.procurementRequest.bidtProcReqItems.forEach(function (item) {
                                if (!!item.workshopEntries) {
                                    item.workshopEntries.forEach(function (entry) {
                                        _this.logisticsService.findStockMvtStory(entry).subscribe(function (mvts) {
                                            if (mvts.some(function (mvt) {
                                                return (mvt.bidtStockMvtTypeId === _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidtStockMvtTypeConstant"].PICKING ||
                                                    mvt.bidtStockMvtTypeId === _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidtStockMvtTypeConstant"].CROSS_DOCKING) &&
                                                    mvt.mvtStatus !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY &&
                                                    mvt.mvtStatus !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].MM_MVT_STATUS_ON_GOING_KEY;
                                            })) {
                                                _this.logisticsService.cancelBookedAsset(entry).subscribe();
                                            }
                                        });
                                    });
                                }
                            });
                        }
                        _this.save();
                    }
                }
            });
        }
    };
    ProcurementRequestFormComponent.prototype.stopPropagation = function (event) {
        event.stopPropagation();
    };
    ProcurementRequestFormComponent.prototype.uploadDocument = function (event, fileUploader) {
        var _this = this;
        if (!!event.files) {
            var file_1 = event.files[0];
            // Check if the file already exists
            var fileExists = this.documentTableDataSource.data.some(function (document) { return document.documentName === file_1.name; });
            if (fileExists) {
                this.messageService.showWarningMessage('global.warningOnFileExists');
            }
            else {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_23__["FileUtils"].getFileContentAsBase64(file_1, function (fileContent) {
                    if (!!fileContent) {
                        var selectedDocumentType = _this.documentTypes.find(function (documentType) { return !!file_1.type && documentType.value === file_1.type; });
                        var document_1 = {
                            documentContent: fileContent,
                            documentName: file_1.name,
                            documentType: !!selectedDocumentType ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_28__["StringUtils"].orEmpty(selectedDocumentType.label) : '',
                            documentPublicationDate: new Date()
                        };
                        _this.procurementRequest.bidtDocuments = __spread(_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__["ListUtils"].orEmpty(_this.procurementRequest.bidtDocuments), [
                            document_1
                        ]);
                        _this.documentTableDataSource.addData([document_1]);
                    }
                });
            }
            fileUploader.clear();
        }
    };
    ProcurementRequestFormComponent.prototype.saveBidtDocuments = function () {
        var _this = this;
        if (this.procurementRequest.bidtDocuments) {
            var saveDocumentDeliveryFolderInput = {
                procurementRequestDTO: this.procurementRequest,
                documentList: this.procurementRequest.bidtDocuments
            };
            this.procurementRequestFormService.saveDocuments(saveDocumentDeliveryFolderInput).subscribe(function (document) {
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnCreateDocument'));
            });
        }
    };
    ProcurementRequestFormComponent.prototype.deleteDocuments = function () {
        var _this = this;
        this.documentTableDataSource.dataSelection.forEach(function (selection) {
            _this.deleteDocument.push(_this.procurementRequestFormService.deleteByid(selection.id));
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.deleteDocument).subscribe(function (result) {
            _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteDocument'));
            _this.reload();
        });
    };
    ProcurementRequestFormComponent.prototype.init = function () {
        this.initDocumentTable();
        this.initStockMvtTable();
    };
    ProcurementRequestFormComponent.prototype.initDocumentTable = function () {
        this.documentTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_6__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                { field: 'documentName', translateKey: this.getTranslateKey('name'), width: '90%' },
                { field: 'documentPublicationDate', translateKey: this.getTranslateKey('dateAdded'), width: '10%' }
            ],
            data: []
        });
    };
    ProcurementRequestFormComponent.prototype.initStockMvtTable = function () {
        this.stockMvtTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_6__["TableDataSource"]({
            enableSelection: false,
            columns: [
                { field: 'movement', translateKey: this.getTranslateKey('movement'), width: '20%' },
                { field: 'type', translateKey: this.getTranslateKey('type'), alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_6__["ColumnAlignment"].CENTER, width: '7.5%' },
                { field: 'warehouseWorkshop', translateKey: this.getTranslateKey('warehouseWorkshop'), width: '20%' },
                { field: 'outbound', translateKey: this.getTranslateKey('outbound'), width: '20%' },
                { field: 'inbound', translateKey: this.getTranslateKey('inbound'), width: '20%' },
                { field: 'status', translateKey: this.getTranslateKey('status'), width: '12.5%' }
            ],
            data: []
        });
        this.reverseStockMvtTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_6__["TableDataSource"]({
            enableSelection: false,
            columns: [
                { field: 'movement', translateKey: this.getTranslateKey('movement'), width: '20%' },
                { field: 'type', translateKey: this.getTranslateKey('type'), alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_6__["ColumnAlignment"].CENTER, width: '7.5%' },
                { field: 'warehouseWorkshop', translateKey: this.getTranslateKey('warehouseWorkshop'), width: '20%' },
                { field: 'outbound', translateKey: this.getTranslateKey('outbound'), width: '20%' },
                { field: 'inbound', translateKey: this.getTranslateKey('inbound'), width: '20%' },
                { field: 'status', translateKey: this.getTranslateKey('status'), width: '12.5%' }
            ],
            data: []
        });
    };
    ProcurementRequestFormComponent.prototype.load = function () {
        var _this = this;
        this.logisticsService
            .findProcurementRequestByIdWithAllObjects({ id: this.procurementRequestId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (procurementRequest) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])({
                procurementRequest: Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(procurementRequest),
                user: procurementRequest.statusUser
                    ? _this.procurementRequestFormService.findUser(procurementRequest.statusUser)
                    : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(undefined),
                workPackageAsset: procurementRequest.bidmWorkOrder && procurementRequest.bidmWorkOrder.projectId
                    ? _this.procurementRequestFormService
                        .findWorkPackage(procurementRequest.bidmWorkOrder.projectId)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (workPackage) {
                        return workPackage.assetCode
                            ? _this.procurementRequestFormService.findEquipment({ equipmentCode: workPackage.assetCode })
                            : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(undefined);
                    }))
                    : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(undefined)
            });
        }))
            .subscribe({
            next: function (_a) {
                var procurementRequest = _a.procurementRequest, user = _a.user, workPackageAsset = _a.workPackageAsset;
                _this.procurementRequest = procurementRequest;
                _this.userLogin = user ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_28__["StringUtils"].orEmpty(user.login) : '';
                _this.userName = user ? user.firstname + " " + user.lastname : procurementRequest.statusUser;
                _this.workPackageAsset = workPackageAsset;
                _this.workPackageAssetName = _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_22__["BidoEquipmentUtils"].createAssetRepresentation(workPackageAsset);
                if (_this.procurementRequest.statusUser) {
                    _this.procurementRequestFormService.getUserSiteByLogin(_this.procurementRequest.statusUser).subscribe({
                        next: function (site) {
                            _this.enableProcReqItemQuantityModification = site && _this.userSiteId === site.siteId;
                        }
                    });
                }
                _this.procurementRequestFormService
                    .findByProcurementRequestId(procurementRequest.id)
                    .subscribe(function (documentDtolist) {
                    _this.procurementRequest.bidtDocuments = documentDtolist;
                    _this.documentTableDataSource.setData(_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__["ListUtils"].orEmpty(_this.procurementRequest.bidtDocuments));
                });
                var warehouseCategory = procurementRequest.bidtWarehouseReceipt.whCategory;
                if (warehouseCategory) {
                    var procurementRequestItems = _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_25__["LogisticalUtils"].buildProcurementRequestItemsRows(procurementRequest);
                    var servedAndBooked = _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_25__["LogisticalUtils"].computeProcurementRequestProgress(procurementRequestItems);
                    _this.bookedNb = servedAndBooked.bookedNb;
                    _this.notBookedNb = servedAndBooked.notBookedNb;
                    _this.isServed = servedAndBooked.isServed;
                    _this.servedNb = servedAndBooked.servedNb;
                    _this.procurementRequestItems = procurementRequestItems;
                    _this.procurementRequestItems.forEach(function (procurementRequestItem) {
                        if (!!procurementRequestItem.obj.bidtWarehouseId) {
                            _this.logisticsService.getWarehouseById(procurementRequestItem.obj.bidtWarehouseId).subscribe({
                                next: function (warehouse) {
                                    procurementRequestItem.warehouseName = warehouse.whName;
                                    if (!!warehouse.bidtSiteId) {
                                        _this.logisticsService.getSiteById(warehouse.bidtSiteId).subscribe({
                                            next: function (site) {
                                                procurementRequestItem.siteName = site.siteName;
                                            }
                                        });
                                    }
                                }
                            });
                        }
                        else {
                            if (!!_this.procurementRequest.bidtSiteIssue) {
                                procurementRequestItem.siteName = _this.procurementRequest.bidtSiteIssue.siteName;
                            }
                            if (!!_this.procurementRequest.bidtWarehouseIssue) {
                                procurementRequestItem.warehouseName = _this.procurementRequest.bidtWarehouseIssue.whName;
                            }
                        }
                    });
                    _this.selectedProcurementRequestItem =
                        _this.procurementRequestItems.length > 0 ? _this.procurementRequestItems[0] : undefined;
                    // ////////////////////////////////////////////////////////////////////////////
                    var reverseObservables$ = _this.procurementRequestItems
                        .map(function (item) { return item.obj.id; })
                        .map(function (itemId) {
                        return _this.logisticsService.findTransferOrdersByCriteria({
                            transferOrder: {
                                bidtProcReqItemId: itemId,
                                torType: _this.aWPropertiesConstants.TRANSFER_ORDER_TYPE_REVERSE_MVT
                            },
                            transferOrderStatusExcluded: []
                        });
                    });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(reverseObservables$).subscribe({
                        next: function (results) {
                            _this.reverseProcurementRequestItems = results
                                .reduce(function (acc, x) { return acc.concat(x); }, [])
                                .map(function (result) { return result.bidtTransferOrder; })
                                .filter(function (transferOrder) { return transferOrder.bidtTorItems && transferOrder.bidtTorItems.length > 0; })
                                .map(function (transferOrder) {
                                return transferOrder.bidtTorItems.map(function (torItem) { return ({ transferOrder: transferOrder, torItem: torItem }); });
                            })
                                .reduce(function (acc, x) { return acc.concat(x); }, [])
                                .map(function (_a) {
                                var transferOrder = _a.transferOrder, torItem = _a.torItem;
                                var progress = _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_25__["LogisticalUtils"].computeProcurementRequestReverseItemProgress(torItem.pickingMovements);
                                return {
                                    obj: torItem,
                                    allNb: progress.allNb,
                                    reversedNb: progress.reversedNb,
                                    notReversedNb: progress.notReversedNb,
                                    warehouseReceiptName: transferOrder.bidtWarehouseReceipt
                                        ? transferOrder.bidtWarehouseReceipt.whName
                                        : undefined,
                                    siteReceiptName: transferOrder.bidtSiteReceipt
                                        ? transferOrder.bidtSiteReceipt.siteName
                                        : undefined,
                                    warehouseIssueName: transferOrder.bidtWarehouseIssue
                                        ? transferOrder.bidtWarehouseIssue.whName
                                        : undefined,
                                    siteIssueName: transferOrder.bidtSiteIssue ? transferOrder.bidtSiteIssue.siteName : undefined
                                };
                            });
                            _this.reverseSelectedProcurementRequestItem =
                                _this.reverseProcurementRequestItems.length > 0 ? _this.reverseProcurementRequestItems[0] : undefined;
                            _this.onSelectReverseProcurementRequestItem();
                            _this.reverseProcurementRequestItems.forEach(function (item) {
                                _this.reversedNb += item.reversedNb;
                                _this.notReversedNb += item.notReversedNb;
                            });
                        }
                    });
                    // ////////////////////////////////////////////////////////////////////////////
                    _this.loadProcurementRequestUnits(_this.procurementRequestItems.map(function (row) { return row.obj; }));
                    _this.loadWorkshopEntryFromProcurementRequestItem();
                    _this.bookedButDidntStartedNb = 0;
                    _this.workshopEntries.forEach(function (entry) {
                        _this.logisticsService.findStockMvtStory(entry.obj).subscribe(function (mvts) {
                            var tmpMvt = mvts.find(function (m) {
                                return m.stockMvtWay === _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_8__["BidtStockMvtConstants"].MVT_WAY_TRANSFER &&
                                    m.mvtStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].MM_MVT_STATUS_PLANNED_KEY;
                            });
                            if (tmpMvt) {
                                _this.bookedButDidntStartedNb++;
                            }
                        });
                    });
                }
            }
        });
    };
    ProcurementRequestFormComponent.prototype.loadProcurementRequestCriticities = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__["GenericPropertyConstants"].LOGISTICAL_CRITICALITY_MAP).subscribe({
            next: function (criticities) {
                _this.procurementRequestCriticities = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__["ListUtils"].orEmpty(criticities);
                _this.procurementRequestCriticities = _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_25__["LogisticalUtils"].sortCriticities(_this.procurementRequestCriticities);
            }
        });
    };
    ProcurementRequestFormComponent.prototype.loadProcurementRequestStatuses = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__["GenericPropertyConstants"].PROCUREMENT_REQUEST_STATUS_MAP).subscribe({
            next: function (procurementRequestStatuses) {
                _this.procurementRequestStatuses = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__["ListUtils"].orEmpty(procurementRequestStatuses);
            }
        });
    };
    ProcurementRequestFormComponent.prototype.loadProcurementRequestTypes = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__["GenericPropertyConstants"].PROCUREMENT_REQUEST_TYPE_MAP).subscribe({
            next: function (procurementRequestTypes) {
                _this.procurementRequestTypes = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__["ListUtils"].orEmpty(procurementRequestTypes);
            }
        });
    };
    ProcurementRequestFormComponent.prototype.loadProcurementRequestUnits = function (bidtProcReqItems) {
        var _this = this;
        var observables = bidtProcReqItems
            .map(function (bidtProcReqItem) { return bidtProcReqItem.birePnPnCode; })
            .filter(function (pnCode) { return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_26__["ObjectUtils"].isDefined(pnCode); })
            .map(function (pnCode) {
            return _this.procurementRequestFormService.findBidoCounterReferencesByPnCode({ pnCode: pnCode });
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(observables).subscribe({
            next: function (results) {
                _this.procurementRequestUnits = results
                    .reduce(function (acc, val) { return acc.concat(val); }, [])
                    .reduce(function (acc, current) {
                    return acc.some(function (counterReference) { return counterReference.counterCode === current.counterCode; })
                        ? acc
                        : acc.concat([current]);
                }, [])
                    .reduce(function (acc, current) {
                    var isCounterReferenceAssociatedToAllPns = results.every(function (counterReferences) {
                        return counterReferences.some(function (counterReference) { return counterReference.counterCode === current.counterCode; });
                    });
                    return isCounterReferenceAssociatedToAllPns ? acc.concat([current]) : acc;
                }, [])
                    .map(function (counterReference) {
                    return {
                        label: counterReference.unitCode + " (" + counterReference.counterCode + ")",
                        value: counterReference.counterCode
                    };
                })
                    .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
            }
        });
    };
    ProcurementRequestFormComponent.prototype.loadStockMvtFromWorkshopEntry = function () {
        var _this = this;
        if (this.selectedWorkshopEntry) {
            this.logisticsService.findStockMvtStory(this.selectedWorkshopEntry.obj).subscribe({
                next: function (stockMvts) {
                    if (_this.selectedWorkshopEntry.obj.stockMvtSn ||
                        _this.selectedWorkshopEntry.obj.stockMvtBatchNumber) {
                        _this.stockMvtTableDataSource.addData(stockMvts);
                        _this.stockMvtSubject.next(stockMvts);
                        _this.showDetails = false;
                    }
                    else {
                        _this.stockMvtTableDataSource.addData(stockMvts.filter(function (stockMvt) {
                            return stockMvt.bidtStockMvtTypeId !== _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidtStockMvtTypeConstant"].RECEIPT &&
                                stockMvt.bidtStockMvtTypeId !== _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidtStockMvtTypeConstant"].WORKSHOP_ENTRY;
                        }));
                    }
                }
            });
        }
    };
    ProcurementRequestFormComponent.prototype.loadReverseStockMvtFromWorkshopEntry = function () {
        var _this = this;
        if (this.reverseSelectedWorkshopEntry) {
            this.logisticsService.findStockMvtStory(this.reverseSelectedWorkshopEntry.obj).subscribe({
                next: function (stockMvts) {
                    if (_this.reverseSelectedWorkshopEntry.obj.stockMvtSn ||
                        _this.reverseSelectedWorkshopEntry.obj.stockMvtBatchNumber) {
                        _this.reverseStockMvtTableDataSource.addData(stockMvts);
                        _this.reverseStockMvtSubject.next(stockMvts);
                        _this.reverseShowDetails = false;
                    }
                    else {
                        _this.reverseStockMvtTableDataSource.addData(stockMvts.filter(function (stockMvt) {
                            return stockMvt.bidtStockMvtTypeId !== _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidtStockMvtTypeConstant"].RECEIPT &&
                                stockMvt.bidtStockMvtTypeId !== _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidtStockMvtTypeConstant"].WORKSHOP_ENTRY;
                        }));
                    }
                }
            });
        }
    };
    ProcurementRequestFormComponent.prototype.loadOperationalStatuses = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__["GenericPropertyConstants"].OPERATIONAL_STATUS_MAP).subscribe({
            next: function (operationalStatuses) {
                _this.operationalStatuses = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__["ListUtils"].orEmpty(operationalStatuses);
            }
        });
    };
    ProcurementRequestFormComponent.prototype.loadStovkMvtStatuses = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_11__["GenericPropertyConstants"].MVT_STATUS_MAP).subscribe({
            next: function (stockMvtStatuses) {
                _this.stockMvtStatuses = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__["ListUtils"].orEmpty(stockMvtStatuses);
            }
        });
    };
    ProcurementRequestFormComponent.prototype.loadWorkshopEntryFromProcurementRequestItem = function () {
        var _this = this;
        if (this.selectedProcurementRequestItem) {
            this.workshopEntries = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__["ListUtils"].orEmpty(this.selectedProcurementRequestItem.obj.workshopEntries)
                .filter(function (stockMvt) {
                return stockMvt.bidtStockMvtTypeId === _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidtStockMvtTypeConstant"].RECEIPT ||
                    stockMvt.bidtStockMvtTypeId === _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidtStockMvtTypeConstant"].WORKSHOP_ENTRY ||
                    stockMvt.bidtStockMvtTypeId === _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidtStockMvtTypeConstant"].REMOVAL;
            })
                .map(function (stockMvt) {
                return {
                    obj: stockMvt
                };
            })
                .sort(function (x, y) {
                if (x.obj.stockMvtSn && y.obj.stockMvtSn) {
                    if (x.obj.statusDate && y.obj.statusDate) {
                        return moment__WEBPACK_IMPORTED_MODULE_2__(x.obj.statusDate).isBefore(y.obj.statusDate) ? -1 : 1;
                    }
                    else if (x.obj.statusDate) {
                        return -1;
                    }
                    return 1;
                }
                else if (x.obj.stockMvtSn) {
                    return -1;
                }
                return 1;
            });
            this.selectedWorkshopEntry = this.workshopEntries.length > 0 ? this.workshopEntries[0] : undefined;
            this.workshopEntries.forEach(function (workshopEntry) {
                if (workshopEntry.obj.stockMvtSn) {
                    var input = {
                        sn: workshopEntry.obj.stockMvtSn,
                        pnCode: workshopEntry.obj.birePnPnCode
                    };
                    _this.procurementRequestFormService.findBidoEquipmentsByPnAndSn(input).subscribe(function (equipments) {
                        if (equipments && equipments.length > 0) {
                            workshopEntry.equipment = equipments[0];
                        }
                    });
                }
                else {
                    var input = {
                        batchNumber: workshopEntry.obj.stockMvtBatchNumber,
                        pnCode: workshopEntry.obj.birePnPnCode
                    };
                    _this.procurementRequestFormService.findBidoEquipmentByPnAndBatchNumber(input).subscribe(function (equipment) {
                        if (equipment) {
                            workshopEntry.equipment = equipment;
                            if (equipment.equEquipmentCode) {
                                _this.procurementRequestFormService
                                    .getManufacturingBatchByEquipment(equipment)
                                    .subscribe(function (manufacturingBatch) {
                                    workshopEntry.manufacturingBatch = manufacturingBatch;
                                });
                            }
                        }
                    });
                }
            });
            this.loadStockMvtFromWorkshopEntry();
        }
    };
    ProcurementRequestFormComponent.prototype.loadReverseWorkshopEntryFromProcurementRequestItem = function () {
        var _this = this;
        if (this.reverseSelectedProcurementRequestItem) {
            this.reverseWorkshopEntries = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_24__["ListUtils"].orEmpty(this.reverseSelectedProcurementRequestItem.obj.pickingMovements)
                .filter(function (stockMvt) {
                return stockMvt.bidtStockMvtTypeId === _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidtStockMvtTypeConstant"].RECEIPT ||
                    stockMvt.bidtStockMvtTypeId === _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidtStockMvtTypeConstant"].WORKSHOP_ENTRY ||
                    stockMvt.bidtStockMvtTypeId === _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidtStockMvtTypeConstant"].REMOVAL;
            })
                .map(function (stockMvt) {
                return {
                    obj: stockMvt
                };
            })
                .sort(function (x, y) {
                if (x.obj.stockMvtSn && y.obj.stockMvtSn) {
                    if (x.obj.statusDate && y.obj.statusDate) {
                        return moment__WEBPACK_IMPORTED_MODULE_2__(x.obj.statusDate).isBefore(y.obj.statusDate) ? -1 : 1;
                    }
                    else if (x.obj.statusDate) {
                        return -1;
                    }
                    return 1;
                }
                else if (x.obj.stockMvtSn) {
                    return -1;
                }
                return 1;
            });
            this.reverseSelectedWorkshopEntry =
                this.reverseWorkshopEntries.length > 0 ? this.reverseWorkshopEntries[0] : undefined;
            this.reverseWorkshopEntries.forEach(function (workshopEntry) {
                if (workshopEntry.obj.stockMvtSn) {
                    var input = {
                        sn: workshopEntry.obj.stockMvtSn,
                        pnCode: workshopEntry.obj.birePnPnCode
                    };
                    _this.procurementRequestFormService.findBidoEquipmentsByPnAndSn(input).subscribe(function (equipments) {
                        if (equipments && equipments.length > 0) {
                            workshopEntry.equipment = equipments[0];
                        }
                    });
                }
                else {
                    var input = {
                        batchNumber: workshopEntry.obj.stockMvtBatchNumber,
                        pnCode: workshopEntry.obj.birePnPnCode
                    };
                    _this.procurementRequestFormService.findBidoEquipmentByPnAndBatchNumber(input).subscribe(function (equipment) {
                        if (equipment && equipment.equEquipmentCode) {
                            workshopEntry.equipment = equipment;
                            if (equipment.equEquipmentCode) {
                                _this.procurementRequestFormService
                                    .getManufacturingBatchByEquipment(equipment)
                                    .subscribe(function (manufacturingBatch) {
                                    workshopEntry.manufacturingBatch = manufacturingBatch;
                                });
                            }
                        }
                    });
                }
            });
            this.loadReverseStockMvtFromWorkshopEntry();
        }
    };
    ProcurementRequestFormComponent.prototype.onBeforeLoad = function () {
        this.deleteDocument = [];
        this.procurementRequest = {};
        this.procurementRequestCriticities = [];
        this.procurementRequestStatuses = [];
        this.procurementRequestTypes = [];
        this.procurementRequestUnits = [];
        this.stockMvtStatuses = [];
        this.userLogin = '';
        this.userName = '';
        this.workPackageAsset = undefined;
        this.workPackageAssetName = '';
        this.bookedNb = 0;
        this.notBookedNb = 0;
        this.servedNb = 0;
        this.procurementRequestItems = [];
        this.selectedProcurementRequestItem = undefined;
        this.reverseProcurementRequestItems = [];
        this.reverseSelectedProcurementRequestItem = undefined;
        this.reverseWorkshopEntries = [];
        this.reverseSelectedWorkshopEntry = undefined;
        this.reverseStockMvtTableDataSource.setData([]);
        this.reversedNb = 0;
        this.notReversedNb = 0;
        this.workshopEntries = [];
        this.selectedWorkshopEntry = undefined;
        this.stockMvtTableDataSource.setData([]);
        this.documentTableDataSource.setData([]);
        this.itemDialogVisible = false;
        this.loadProcurementRequestCriticities();
        this.loadProcurementRequestStatuses();
        this.loadProcurementRequestTypes();
        this.loadOperationalStatuses();
        this.loadStovkMvtStatuses();
    };
    ProcurementRequestFormComponent.prototype.openBatch = function (row) {
        if (row.obj.stockMvtSn) {
            this.openEquipment(row);
        }
        else {
            if (row.equipment) {
                var data = {
                    id: this.tabService.generateId(),
                    componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__["ComponentConstants"].LOG_PACKAGING_BATCH_FORM,
                    openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__["ComponentOpenMode"].Read
                };
                data.objectId = row.equipment.equipmentCode;
                var labelKey = 'transaction.' + data.componentId;
                this.tabService.open(this.tabService.create(data, labelKey, true));
            }
        }
    };
    ProcurementRequestFormComponent.prototype.openEquipment = function (row) {
        if (row.equipment) {
            var objectId = {
                equipmentCode: row.equipment.equipmentCode
            };
            var data = {
                id: this.tabService.generateId(),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__["ComponentOpenMode"].Read,
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__["ComponentConstants"].FLE_EQUIPMENT_FORM,
                objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    ProcurementRequestFormComponent.prototype.openManufacturingBatch = function (row) {
        if (row.manufacturingBatch) {
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__["ComponentConstants"].LOG_MANUFACTURING_BATCH_FORM,
                objectId: this.serializationService.serialize({ customerCode: row.manufacturingBatch.batchNumber }),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    ProcurementRequestFormComponent.prototype.duplicate = function () {
        var _this = this;
        this.logisticsService.duplicateProcurementRequest(this.procurementRequest).subscribe({
            next: function (duplicate) {
                _this.openProcurementRequest(duplicate);
            }
        });
    };
    ProcurementRequestFormComponent.prototype.openProcurementRequest = function (procurementRequest) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__["ComponentConstants"].LOG_PROCUREMENT_REQUEST_FORM,
            objectId: this.serializationService.serialize({ id: procurementRequest.id }),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__["ComponentOpenMode"].Read
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ProcurementRequestFormComponent.prototype.isExpectedSnVisible = function () {
        return this.procurementRequestItems
            .map(function (procReqItem) { return procReqItem.obj; })
            .some(function (procReqItem) {
            return !!procReqItem.birePn &&
                (procReqItem.birePn.traceability === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].PN_TRACEABILITY_BY_BATCH ||
                    procReqItem.birePn.traceability === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].PN_TRACEABILITY_BY_SN ||
                    procReqItem.birePn.traceability === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].PN_TRACEABILITY_BY_PACKAGING_BATCH_AND_SN);
        });
    };
    ProcurementRequestFormComponent.prototype.isCancelBookingBtnVisible = function (row) {
        return (!!this.selectedWorkshopEntry &&
            this.selectedWorkshopEntry.obj.id === row.obj.id &&
            this.stockMvtTableDataSource.data.some(function (stockMvt) {
                return row.obj.stockMvtSn === stockMvt.stockMvtSn &&
                    row.obj.stockMvtBatchNumber === stockMvt.stockMvtBatchNumber &&
                    (stockMvt.bidtStockMvtTypeId === _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidtStockMvtTypeConstant"].PICKING ||
                        stockMvt.bidtStockMvtTypeId === _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidtStockMvtTypeConstant"].CROSS_DOCKING) &&
                    stockMvt.mvtStatus !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY &&
                    stockMvt.mvtStatus !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].MM_MVT_STATUS_ON_GOING_KEY;
            }));
    };
    ProcurementRequestFormComponent.prototype.openWoDialog = function () {
        if (!this.isReadOpenMode) {
            if (this.bookedNb !== 0) {
                if (!!this.procurementRequest.bidtSiteReceipt &&
                    !!this.procurementRequest.bidtSiteReceipt.siteId &&
                    !!this.procurementRequest.bidtWarehouseReceipt &&
                    !!this.procurementRequest.bidtWarehouseReceipt.wareHouseId) {
                    var searchWoObject = {
                        projectCriteria: {
                            bireRepairCenterCode: this.procurementRequest.bidtSiteReceipt.siteId.toString()
                        },
                        workOrderCriteria: {
                            bidtWarehouseId: this.procurementRequest.bidtWarehouseReceipt.wareHouseId
                        }
                    };
                    this.searchWoObject = searchWoObject;
                }
            }
            this.showWoDialog = true;
        }
        else {
            this.openWorkOrder();
        }
    };
    ProcurementRequestFormComponent.prototype.eraseWo = function () {
        this.procurementRequest.bidmWorkOrder = undefined;
        this.procurementRequest.bidmWorkOrderBidMandant = undefined;
        this.procurementRequest.bidmWorkOrderMandant = undefined;
        this.procurementRequest.bidmWorkOrderProjectId = undefined;
        this.procurementRequest.bidmWorkOrderWoId = undefined;
        this.procurementRequest.requestedDate = undefined;
        this.procurementRequest.bidtWarehouseByBidtWarehouseReceiptId = undefined;
        this.procurementRequest.bidtSiteByBidtSiteReceiptId = undefined;
        this.procurementRequest.bidtWarehouseReceipt = undefined;
        this.procurementRequest.bidtSiteReceipt = undefined;
        this.procurementRequest.bidtWarehouseByBidtWarehouseIssueId = undefined;
        this.procurementRequest.bidtSiteByBidtSiteIssueId = undefined;
        this.procurementRequest.bidtWarehouseIssue = undefined;
        this.procurementRequest.bidtSiteIssue = undefined;
        this.workPackageAsset = undefined;
        this.workPackageAssetName = '';
    };
    ProcurementRequestFormComponent.prototype.onSelectWo = function (workOrder) {
        var _this = this;
        this.eraseWo();
        this.procurementRequest.bidmWorkOrder = workOrder;
        this.procurementRequest.bidmWorkOrderProjectId = workOrder.projectId;
        this.procurementRequest.bidmWorkOrderWoId = workOrder.woId;
        this.procurementRequest.requestedDate = workOrder.woScheduledStartDate;
        if (workOrder.calculatedStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_PLANNED) {
            this.procurementRequest.procStatus = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].PROCUREMENT_REQUEST_STATUS_PLANNED;
        }
        else if (workOrder.calculatedStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_RELEASED) {
            this.procurementRequest.procStatus = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].PROCUREMENT_REQUEST_STATUS_RELEASED;
        }
        if (workOrder.bidtWarehouseId) {
            this.logisticsService.getWarehouseById(workOrder.bidtWarehouseId).subscribe({
                next: function (warehouseReceipt) {
                    if (warehouseReceipt) {
                        // Warehouse receipt
                        _this.procurementRequest.bidtWarehouseByBidtWarehouseReceiptId = warehouseReceipt.wareHouseId;
                        _this.procurementRequest.bidtSiteByBidtSiteReceiptId = warehouseReceipt.bidtSiteId;
                        _this.procurementRequest.bidtWarehouseReceipt = warehouseReceipt;
                        if (warehouseReceipt.bidtSiteId) {
                            // site receipt
                            _this.logisticsService.getSiteById(warehouseReceipt.bidtSiteId).subscribe(function (siteReceipt) {
                                _this.procurementRequest.bidtSiteReceipt = siteReceipt;
                            });
                        }
                        if (warehouseReceipt.bidtWarehouseId) {
                            _this.logisticsService.getWarehouseById(warehouseReceipt.bidtWarehouseId).subscribe({
                                next: function (warehouseIssue) {
                                    // warehouse issue
                                    if (warehouseIssue) {
                                        _this.procurementRequest.bidtWarehouseByBidtWarehouseIssueId = warehouseIssue.wareHouseId;
                                        _this.procurementRequest.bidtSiteByBidtSiteIssueId = warehouseIssue.bidtSiteId;
                                        _this.procurementRequest.bidtWarehouseIssue = warehouseIssue;
                                        if (warehouseReceipt.bidtSiteId) {
                                            // site issue
                                            _this.logisticsService
                                                .getSiteById(warehouseReceipt.bidtSiteId)
                                                .subscribe(function (siteIssue) {
                                                _this.procurementRequest.bidtSiteIssue = siteIssue;
                                            });
                                        }
                                    }
                                }
                            });
                        }
                    }
                }
            });
        }
        if (workOrder.projectId) {
            // Asset
            this.procurementRequestFormService
                .findWorkPackage(workOrder.projectId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (workPackage) {
                return workPackage.assetCode
                    ? _this.procurementRequestFormService.findEquipment({ equipmentCode: workPackage.assetCode })
                    : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(undefined);
            }))
                .subscribe(function (workPackageAsset) {
                _this.workPackageAsset = workPackageAsset;
                _this.workPackageAssetName = _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_22__["BidoEquipmentUtils"].createAssetRepresentation(workPackageAsset);
            });
        }
    };
    ProcurementRequestFormComponent.prototype.toggleDetailsTable = function (showDetails) {
        this.showDetails = showDetails;
    };
    ProcurementRequestFormComponent.prototype.toggleReverseDetailsTable = function (showDetails) {
        this.reverseShowDetails = showDetails;
    };
    ProcurementRequestFormComponent.prototype.manageTransfertOrderItem = function (row) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_10__["ComponentConstants"].LOG_MATERIAL_REQUEST_TRANSFER_ORDER_MANAGEMENT_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_12__["ComponentOpenMode"].Read,
            objectId: this.serializationService.serialize({
                torId: row.obj.bidtTransferOrderId,
                torItemId: row.obj.id
            })
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    var ProcurementRequestFormComponent_1;
    ProcurementRequestFormComponent = ProcurementRequestFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-procurement-request-form',
            template: __webpack_require__(/*! ./procurement-request-form.component.html */ "./src/app/main/logistics/procurement-request/form/procurement-request-form.component.html"),
            styles: [__webpack_require__(/*! ./procurement-request-form.component.scss */ "./src/app/main/logistics/procurement-request/form/procurement-request-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_14__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_16__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_18__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_20__["TabService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_5__["PageTocService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_19__["SessionService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmationService"],
            _logistics_service__WEBPACK_IMPORTED_MODULE_30__["LogisticsService"],
            _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_29__["OverlayService"],
            _procurement_request_form_service__WEBPACK_IMPORTED_MODULE_31__["ProcurementRequestFormService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_17__["PropertiesService"]])
    ], ProcurementRequestFormComponent);
    return ProcurementRequestFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_21__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/procurement-request/form/procurement-request-form.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/form/procurement-request-form.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProcurementRequestFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcurementRequestFormService", function() { return ProcurementRequestFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/am-project-management.api */ "./src/app/shared/api/am-project-management.api.ts");
/* harmony import */ var _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/asset-management.api */ "./src/app/shared/api/asset-management.api.ts");
/* harmony import */ var _shared_api_bidt_document_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/bidt-document.api */ "./src/app/shared/api/bidt-document.api.ts");
/* harmony import */ var _shared_api_bidt_procurement_request_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/bidt-procurement-request.api */ "./src/app/shared/api/bidt-procurement-request.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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











var ProcurementRequestFormService = /** @class */ (function (_super) {
    __extends(ProcurementRequestFormService, _super);
    function ProcurementRequestFormService(http, aMProjectManagementApi, assetManagementApi, fleetManagementApi, productStructureManagementApi, userProfileManagementApi, bidtProcurementRequestApi, bidtDocumentApi, appConfigService) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.aMProjectManagementApi = aMProjectManagementApi;
        _this.assetManagementApi = assetManagementApi;
        _this.fleetManagementApi = fleetManagementApi;
        _this.productStructureManagementApi = productStructureManagementApi;
        _this.userProfileManagementApi = userProfileManagementApi;
        _this.bidtProcurementRequestApi = bidtProcurementRequestApi;
        _this.bidtDocumentApi = bidtDocumentApi;
        return _this;
    }
    /**************************************************************************
     * AM project management api
     *************************************************************************/
    ProcurementRequestFormService.prototype.findWorkPackage = function (input) {
        return _super.prototype.post.call(this, this.aMProjectManagementApi.findBidmProject, input);
    };
    /**************************************************************************
     * Fleet management  api
     *************************************************************************/
    ProcurementRequestFormService.prototype.findEquipment = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, input);
    };
    /**************************************************************************
     * Product structure management api
     *************************************************************************/
    ProcurementRequestFormService.prototype.findBidoCounterReferencesByPnCode = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBidoCounterReferencesByPnCode, input);
    };
    /**************************************************************************
     * User profile management api
     *************************************************************************/
    ProcurementRequestFormService.prototype.findUser = function (input) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findUserByLogin, input);
    };
    ProcurementRequestFormService.prototype.getUserSiteByLogin = function (input) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.getUserSiteByLogin, input);
    };
    ProcurementRequestFormService.prototype.getUserWarehouseByLogin = function (input) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.getUserWarehouseByLogin, input);
    };
    /**************************************************************************
     * Bidt document api
     *************************************************************************/
    ProcurementRequestFormService.prototype.findByProcurementRequestId = function (procurementReqquestId) {
        return _super.prototype.post.call(this, this.bidtDocumentApi.findByProcurementRequestId, procurementReqquestId);
    };
    ProcurementRequestFormService.prototype.deleteByid = function (documentId) {
        return _super.prototype.post.call(this, this.bidtDocumentApi.deleteByid, documentId);
    };
    /**************************************************************************
     * Bidt procurement request api
     *************************************************************************/
    ProcurementRequestFormService.prototype.saveDocuments = function (input) {
        return _super.prototype.post.call(this, this.bidtProcurementRequestApi.saveProcurementRequestDocuments, input);
    };
    ProcurementRequestFormService.prototype.findBidoEquipmentsByPnAndSn = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes, input);
    };
    ProcurementRequestFormService.prototype.findBidoEquipmentByPnAndBatchNumber = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentByPnAndBatchNumber, input);
    };
    ProcurementRequestFormService.prototype.getManufacturingBatchByEquipment = function (input) {
        return _super.prototype.post.call(this, this.assetManagementApi.getManufacturingBatchByEquipment, input);
    };
    ProcurementRequestFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_2__["AMProjectManagementApi"],
            _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_3__["AssetManagementApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__["FleetManagementApi"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_7__["ProductStructureManagementApi"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_8__["UserProfileManagementApi"],
            _shared_api_bidt_procurement_request_api__WEBPACK_IMPORTED_MODULE_5__["BidtProcurementRequestApi"],
            _shared_api_bidt_document_api__WEBPACK_IMPORTED_MODULE_4__["BidtDocumentApi"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__["AppConfigService"]])
    ], ProcurementRequestFormService);
    return ProcurementRequestFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/procurement-request/form/reverse-mvt-status/procurement-request-reverse-mvt-status.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/form/reverse-mvt-status/procurement-request-reverse-mvt-status.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"column\" *ngIf=\"mvts.length\">\r\n  <div class=\"row\" style=\"justify-content: flex-end;\">\r\n    <button mat-raised-button (click)=\"schowDetails()\" style=\"width: 16rem;\" *ngIf=\"!showDetails\">\r\n      {{ getComponentName() + \".showMouvement\" | translate }}\r\n    </button>\r\n    <button mat-raised-button (click)=\"schowDetails()\" style=\"width: 16rem;\" *ngIf=\"showDetails\">\r\n      {{ getComponentName() + \".hideMouvement\" | translate }}\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"row\" style=\"justify-content: center; margin-top: 40px\">\r\n    <aw-stepper [steps]=\"steps\"></aw-stepper>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/procurement-request/form/reverse-mvt-status/procurement-request-reverse-mvt-status.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/form/reverse-mvt-status/procurement-request-reverse-mvt-status.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: ProcurementRequestReverseMvtStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcurementRequestReverseMvtStatusComponent", function() { return ProcurementRequestReverseMvtStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/types/generic-component */ "./src/app/shared/types/generic-component.ts");
/* harmony import */ var _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/utils/logistic-utils */ "./src/app/shared/utils/logistic-utils.ts");
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







var ProcurementRequestReverseMvtStatusComponent = /** @class */ (function (_super) {
    __extends(ProcurementRequestReverseMvtStatusComponent, _super);
    function ProcurementRequestReverseMvtStatusComponent(translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write) || this;
        _this.translateService = translateService;
        _this.mvts = [];
        _this.steps = [];
        _this.showDetails = false;
        _this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ProcurementRequestReverseMvtStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mvtObservable$.subscribe(function (mvts) {
            _this.mvts = mvts;
            _this.showDetails = false;
            _this.initSteps();
        });
    };
    ProcurementRequestReverseMvtStatusComponent.prototype.getComponentName = function () {
        return 'ProcurementRequestReverseMvtStatusComponent';
    };
    ProcurementRequestReverseMvtStatusComponent.prototype.initSteps = function () {
        this.initArray();
        if (_shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_6__["LogisticalUtils"].isReversedTransfer(this.mvts)) {
            this.steps.slice(0, this.steps.length).forEach(function (step) {
                step.status = 'previous';
            });
        }
        else if (_shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_6__["LogisticalUtils"].isReversingTransfer(this.mvts)) {
            this.steps.slice(0, this.steps.length - 1).forEach(function (step) {
                step.status = 'previous';
            });
        }
        else {
            this.steps[0].status = 'previous';
            if (!!this.procurementRequest &&
                this.procurementRequest.procType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING_ES &&
                _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_6__["LogisticalUtils"].isExecutingTransfer(this.mvts)) {
                this.steps[1].status = 'previous';
            }
        }
    };
    ProcurementRequestReverseMvtStatusComponent.prototype.initArray = function () {
        var _this = this;
        this.steps = [];
        var waitingKey = this.getTranslateKey('waiting');
        var executingKey = this.getTranslateKey('executing');
        var reversingKey = this.getTranslateKey('reversing');
        var reversedKey = this.getTranslateKey('reversed');
        this.translateService.get([waitingKey, executingKey, reversingKey, reversedKey]).subscribe({
            next: function (results) {
                var waitingLabel = !!results ? results[waitingKey] : 'Waiting';
                var executingLabel = !!results ? results[executingKey] : 'Executing';
                var reversingLabel = !!results ? results[reversingKey] : 'Reversing';
                var reversedLabel = !!results ? results[reversedKey] : 'Reversed';
                _this.steps = [
                    {
                        label: executingLabel,
                        status: 'next'
                    },
                    {
                        label: reversingLabel,
                        status: 'next'
                    },
                    {
                        label: reversedLabel,
                        status: 'next'
                    }
                ];
                if (!!_this.procurementRequest &&
                    _this.procurementRequest.procType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING_ES) {
                    _this.steps = __spread([
                        {
                            label: waitingLabel,
                            status: 'next'
                        }
                    ], _this.steps);
                }
            }
        });
    };
    ProcurementRequestReverseMvtStatusComponent.prototype.schowDetails = function () {
        this.showDetails = !this.showDetails;
        this.onClick.emit(this.showDetails);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mvts'),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ProcurementRequestReverseMvtStatusComponent.prototype, "mvtObservable$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProcurementRequestReverseMvtStatusComponent.prototype, "procurementRequest", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProcurementRequestReverseMvtStatusComponent.prototype, "onClick", void 0);
    ProcurementRequestReverseMvtStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'aw-procurement-request-reverse-mvt-status',
            template: __webpack_require__(/*! ./procurement-request-reverse-mvt-status.component.html */ "./src/app/main/logistics/procurement-request/form/reverse-mvt-status/procurement-request-reverse-mvt-status.component.html")
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ProcurementRequestReverseMvtStatusComponent);
    return ProcurementRequestReverseMvtStatusComponent;
}(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_5__["GenericComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/procurement-request/procurement-request.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/procurement-request.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ProcurementRequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcurementRequestModule", function() { return ProcurementRequestModule; });
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
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__);
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
/* harmony import */ var _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/dialog-search-equipment/dialog-search-equipment.module */ "./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.module.ts");
/* harmony import */ var _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/dialog-search-pn/dialog-search-pn.module */ "./src/app/shared/components/dialog-search-pn/dialog-search-pn.module.ts");
/* harmony import */ var _shared_components_dialog_search_work_order_dialog_search_work_order_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/dialog-search-work-order/dialog-search-work-order.module */ "./src/app/shared/components/dialog-search-work-order/dialog-search-work-order.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_dialog_add_popup_dialog_add_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./form/dialog-add-popup/dialog-add-popup.component */ "./src/app/main/logistics/procurement-request/form/dialog-add-popup/dialog-add-popup.component.ts");
/* harmony import */ var _form_dialog_edit_quantity_dialog_edit_quantity_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./form/dialog-edit-quantity/dialog-edit-quantity.component */ "./src/app/main/logistics/procurement-request/form/dialog-edit-quantity/dialog-edit-quantity.component.ts");
/* harmony import */ var _form_mvt_status_procurement_request_mvt_status_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./form/mvt-status/procurement-request-mvt-status.component */ "./src/app/main/logistics/procurement-request/form/mvt-status/procurement-request-mvt-status.component.ts");
/* harmony import */ var _form_procurement_request_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./form/procurement-request-form.component */ "./src/app/main/logistics/procurement-request/form/procurement-request-form.component.ts");
/* harmony import */ var _form_procurement_request_form_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./form/procurement-request-form.service */ "./src/app/main/logistics/procurement-request/form/procurement-request-form.service.ts");
/* harmony import */ var _form_reverse_mvt_status_procurement_request_reverse_mvt_status_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./form/reverse-mvt-status/procurement-request-reverse-mvt-status.component */ "./src/app/main/logistics/procurement-request/form/reverse-mvt-status/procurement-request-reverse-mvt-status.component.ts");
/* harmony import */ var _search_procurement_request_popup_procurement_request_popup_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./search/procurement-request-popup/procurement-request-popup.module */ "./src/app/main/logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.module.ts");
/* harmony import */ var _search_procurement_request_search_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./search/procurement-request-search.component */ "./src/app/main/logistics/procurement-request/search/procurement-request-search.component.ts");
/* harmony import */ var _search_procurement_request_search_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./search/procurement-request-search.service */ "./src/app/main/logistics/procurement-request/search/procurement-request-search.service.ts");
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
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
    primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"],
    primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__["InputSwitchModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__["SelectButtonModule"],
    _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_20__["TableModule"],
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__["CheckboxModule"],
    _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_14__["ComponentSidebarModule"],
    primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
    primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__["OverlayPanelModule"],
    primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressBarModule"],
    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_19__["ModalModule"]
];
var INTERNAL_MODULES = [
    _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_15__["DialogSearchEquipmentModule"],
    _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_16__["DialogSearchPnModule"],
    _shared_components_dialog_search_work_order_dialog_search_work_order_module__WEBPACK_IMPORTED_MODULE_17__["DialogSearchWorkOrderModule"],
    _search_procurement_request_popup_procurement_request_popup_module__WEBPACK_IMPORTED_MODULE_28__["ProcurementRequestPopupModule"]
];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [
    _form_dialog_add_popup_dialog_add_popup_component__WEBPACK_IMPORTED_MODULE_22__["DialogAddPopupComponent"],
    _form_dialog_edit_quantity_dialog_edit_quantity_component__WEBPACK_IMPORTED_MODULE_23__["DialogEditQuantityComponent"],
    _form_mvt_status_procurement_request_mvt_status_component__WEBPACK_IMPORTED_MODULE_24__["ProcurementRequestMvtStatusComponent"],
    _form_reverse_mvt_status_procurement_request_reverse_mvt_status_component__WEBPACK_IMPORTED_MODULE_27__["ProcurementRequestReverseMvtStatusComponent"]
];
var DYNAMIC_COMPONENTS = [_form_procurement_request_form_component__WEBPACK_IMPORTED_MODULE_25__["ProcurementRequestFormComponent"], _search_procurement_request_search_component__WEBPACK_IMPORTED_MODULE_29__["ProcurementRequestSearchComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_procurement_request_form_service__WEBPACK_IMPORTED_MODULE_26__["ProcurementRequestFormService"], _search_procurement_request_search_service__WEBPACK_IMPORTED_MODULE_30__["ProcurementRequestSearchService"]];
var ProcurementRequestModule = /** @class */ (function () {
    function ProcurementRequestModule() {
    }
    ProcurementRequestModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_11__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_12__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_13__["AppCommonSharedModule"],
                _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_18__["ManageSearchCriteriaModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_21__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES),
            exports: [_form_dialog_add_popup_dialog_add_popup_component__WEBPACK_IMPORTED_MODULE_22__["DialogAddPopupComponent"], _form_mvt_status_procurement_request_mvt_status_component__WEBPACK_IMPORTED_MODULE_24__["ProcurementRequestMvtStatusComponent"], _form_reverse_mvt_status_procurement_request_reverse_mvt_status_component__WEBPACK_IMPORTED_MODULE_27__["ProcurementRequestReverseMvtStatusComponent"]]
        })
    ], ProcurementRequestModule);
    return ProcurementRequestModule;
}());



/***/ }),

/***/ "./src/app/main/logistics/procurement-request/search/procurement-request-search.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/search/procurement-request-search.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"createProcurementRequest()\">\r\n      {{ \"global.create\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <div class=\"column\">\r\n                <!-- TODO -->\r\n                <!-- <div class=\"row search-criteria-header\">\r\n                  <aw-manage-search-criteria></aw-manage-search-criteria>\r\n                </div> -->\r\n\r\n                <div class=\"section\">\r\n                  <h4 class=\"section-title\">{{ componentData.componentId + \".shipper\" | translate }}</h4>\r\n\r\n                  <div class=\"section-content\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\"> {{ componentData.componentId + \".site\" | translate }} </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [showClear]=\"true\"\r\n                            [(ngModel)]=\"procurementSearchInput.siteIssue\"\r\n                            [options]=\"siteList\"\r\n                            (onChange)=\"loadSupplierWarehouses()\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label\r\n                          class=\"form-label\"\r\n                          *ngIf=\"\r\n                            selectedSupplierWarehouseCategory === awPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE\r\n                          \"\r\n                        >\r\n                          {{ componentData.componentId + \".warehouse\" | translate }}\r\n                        </label>\r\n                        <label\r\n                          class=\"form-label\"\r\n                          *ngIf=\"\r\n                            selectedSupplierWarehouseCategory === awPropertiesConstants.WAREHOUSE_CATEGORY_WORKSHOP\r\n                          \"\r\n                        >\r\n                          {{ componentData.componentId + \".workshop\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control group-control \">\r\n                          <div class=\"form-sub-control \">\r\n                            <p-selectButton\r\n                              [options]=\"logisticsTypeList\"\r\n                              [(ngModel)]=\"selectedSupplierWarehouseCategory\"\r\n                              (onChange)=\"loadSupplierWarehouses()\"\r\n                            ></p-selectButton>\r\n                          </div>\r\n                          <div class=\"form-sub-control \">\r\n                            <p-dropdown\r\n                              class=\"aw-dropdown fixed-width\"\r\n                              placeholder=\"&nbsp;\"\r\n                              [showClear]=\"true\"\r\n                              [(ngModel)]=\"procurementSearchInput.warehouseIssue\"\r\n                              [options]=\"supplierWarehouses\"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\"> {{ getComponentName() + \".partner\" | translate }} </label>\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [options]=\"customerList\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [(ngModel)]=\"procurementSearchInput.customer\"\r\n                            appendTo=\"body\"\r\n                          >\r\n                          </p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group flex--1\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"section\">\r\n                  <h4 class=\"section-title\">{{ componentData.componentId + \".recipient\" | translate }}</h4>\r\n\r\n                  <div class=\"section-content\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\"> {{ componentData.componentId + \".site\" | translate }} </label>\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [showClear]=\"true\"\r\n                            [(ngModel)]=\"procurementSearchInput.siteName\"\r\n                            [options]=\"siteList\"\r\n                            (onChange)=\"loadRecipientWarehouses()\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label\r\n                          class=\"form-label\"\r\n                          *ngIf=\"procurementSearchInput.whType === awPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE\"\r\n                        >\r\n                          {{ componentData.componentId + \".warehouse\" | translate }}\r\n                        </label>\r\n                        <label\r\n                          class=\"form-label\"\r\n                          *ngIf=\"procurementSearchInput.whType === awPropertiesConstants.WAREHOUSE_CATEGORY_WORKSHOP\"\r\n                        >\r\n                          {{ componentData.componentId + \".workshop\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control group-control \">\r\n                          <div class=\"form-sub-control \">\r\n                            <p-selectButton\r\n                              [options]=\"logisticsTypeList\"\r\n                              [(ngModel)]=\"procurementSearchInput.whType\"\r\n                              (onChange)=\"loadRecipientWarehouses()\"\r\n                            ></p-selectButton>\r\n                          </div>\r\n                          <div class=\"form-sub-control \">\r\n                            <p-dropdown\r\n                              class=\"aw-dropdown fixed-width\"\r\n                              placeholder=\"&nbsp;\"\r\n                              [showClear]=\"true\"\r\n                              [(ngModel)]=\"procurementSearchInput.whCode\"\r\n                              [options]=\"shopList\"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ \"asset\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control form-control-with-modal\">\r\n                          <div class=\"form-control-data\" (click)=\"openAssetDialog()\">\r\n                            {{ selectedAssetName }}\r\n                          </div>\r\n\r\n                          <div *ngIf=\"selectedAsset\" class=\"btn-clear-wrapper\">\r\n                            <i\r\n                              class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                              aria-hidden=\"true\"\r\n                              (click)=\"selectedAsset = undefined\"\r\n                            ></i>\r\n                          </div>\r\n                          <div class=\"btn-search-wrapper\">\r\n                            <i\r\n                              class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                              aria-hidden=\"true\"\r\n                              (click)=\"openAssetDialog()\"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"section\">\r\n                  <h4 class=\"section-title\">{{ componentData.componentId + \".requestManagment\" | translate }}</h4>\r\n\r\n                  <div class=\"section-content\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ \"type\" | translate }}</label>\r\n                        <div class=\"form-control aw-selectbutton-wrapper\">\r\n                          <p-selectButton\r\n                            [options]=\"procurementRequestTypes\"\r\n                            [(ngModel)]=\"procurementSearchInput.type\"\r\n                          ></p-selectButton>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".criticity\" | translate }}</label>\r\n                        <div class=\"form-control aw-selectbutton-wrapper\">\r\n                          <p-selectButton\r\n                            [options]=\"criticalList\"\r\n                            [(ngModel)]=\"procurementSearchInput.criticality\"\r\n                          ></p-selectButton>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".requestNumber\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"procurementSearchInput.procCode\" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\"> {{ componentData.componentId + \".status\" | translate }} </label>\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [showClear]=\"true\"\r\n                            [(ngModel)]=\"procurementSearchInput.procStatus\"\r\n                            [options]=\"statusList\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".expectedDate\" | translate }}\r\n                        </label>\r\n                        <div class=\"form-control\">\r\n                          <p-calendar\r\n                            showButtonBar=\"true\"\r\n                            [monthNavigator]=\"true\"\r\n                            [yearNavigator]=\"true\"\r\n                            [yearRange]=\"sessionService.calendarYearRange\"\r\n                            class=\"aw-calendar\"\r\n                            [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                            [locale]=\"sessionService.calendarFormat\"\r\n                            appendTo=\"body\"\r\n                            [(ngModel)]=\"procurementSearchInput.requestedDate\"\r\n                          ></p-calendar>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ \"pn\" | translate }}</label>\r\n\r\n                        <div class=\"form-control form-control-with-modal\">\r\n                          <div class=\"form-control-data\" (click)=\"openAssetPnDialog()\">\r\n                            {{ selectedAssetPn?.pnCode }}\r\n                          </div>\r\n\r\n                          <div *ngIf=\"selectedAssetPn\" class=\"btn-clear-wrapper\">\r\n                            <i\r\n                              class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                              aria-hidden=\"true\"\r\n                              (click)=\"clearAssetPn()\"\r\n                            ></i>\r\n                          </div>\r\n                          <div class=\"btn-search-wrapper\">\r\n                            <i\r\n                              class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                              aria-hidden=\"true\"\r\n                              (click)=\"openAssetPnDialog()\"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group flex--2\">\r\n                        <label class=\"form-label\">{{ \"designation\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"selectedDesignation\" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"section\">\r\n                  <div class=\"section-content\">\r\n                    <div class=\"advanced-criteria\" [ngClass]=\"{ 'display--none': !showAdvancedSearchCriteria }\">\r\n                      <div class=\"section\">\r\n                        <h4 class=\"section-title\">\r\n                          {{ componentData.componentId + \".referenceDocument\" | translate }}\r\n                        </h4>\r\n                        <div class=\"section-content\">\r\n                          <div class=\"row\">\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\"\r\n                                >{{ componentData.componentId + \".documentType\" | translate }}\r\n                              </label>\r\n\r\n                              <div class=\"form-control\">\r\n                                <p-dropdown\r\n                                  class=\"aw-dropdown fixed-width\"\r\n                                  placeholder=\"&nbsp;\"\r\n                                  [showClear]=\"true\"\r\n                                  [(ngModel)]=\"procurementSearchInput.documentType\"\r\n                                  [options]=\"documentList\"\r\n                                ></p-dropdown>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">\r\n                                {{ componentData.componentId + \".documentNumber\" | translate }}\r\n                              </label>\r\n                              <div class=\"form-control\">\r\n                                <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"procurementSearchInput.woCode\" />\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\"></div>\r\n                            <div class=\"form-group\"></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- ACTION -->\r\n                <div class=\"section\">\r\n                  <div class=\"section-content\">\r\n                    <div class=\"row search-criteria-footer\">\r\n                      <button mat-button (click)=\"showAdvancedSearchCriteria = !showAdvancedSearchCriteria\">\r\n                        <ng-container *ngIf=\"showAdvancedSearchCriteria\">\r\n                          <mat-icon>remove</mat-icon>\r\n                          {{ \"global.collapseCriteria\" | translate }}\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"!showAdvancedSearchCriteria\">\r\n                          <mat-icon>add</mat-icon>\r\n                          {{ \"global.expandCriteria\" | translate }}\r\n                        </ng-container>\r\n                      </button>\r\n\r\n                      <div class=\"search-actions\">\r\n                        <button\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                          (click)=\"search()\"\r\n                          color=\"primary\"\r\n                          appKeyPress\r\n                          [keyCode]=\"'Enter'\"\r\n                          (keyPress)=\"search()\"\r\n                        >\r\n                          {{ \"global.toSearch\" | translate }}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.results\" | translate }} ({{ resultsTable ? resultsTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableResult\r\n                class=\"aw-table2\"\r\n                [columns]=\"resultTableCols\"\r\n                [value]=\"resultsTable\"\r\n                [(selection)]=\"selectedResults\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedResults.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableEquipmentGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableResult.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"isDeleteButtonVisible()\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteProcurementRequest()\"\r\n                      >\r\n                        {{ getComponentName() + \".delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"isCancelButtonVisible()\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"cancelProcurementRequest()\"\r\n                      >\r\n                        {{ \"cancel\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedResults.length == 1 && selectedResults[0]._obj.bidtProcReqItems?.length == 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openProcurementManagmentPage()\"\r\n                      >\r\n                        {{ getComponentName() + \".manage\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedResults.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openProcurementDetails(selectedResults[0])\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n\r\n                      <div class=\"aw-table-icon-actions\">\r\n                        <i\r\n                          class=\"fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay\"\r\n                          [ngClass]=\"{ active: filtersVisible }\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"opTableFilter.toggle($event)\"\r\n                          *ngIf=\"resultsTableSrc.length > 0\"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th\r\n                      [pSortableColumn]=\"col.field\"\r\n                      pResizableColumn\r\n                      *ngFor=\"let col of columns\"\r\n                      [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                    >\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                      <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <ng-container *ngSwitchCase=\"'procurementRequest'\">\r\n                        <div>\r\n                          <a class=\"bold\" (click)=\"openProcurementDetails(rowData)\">\r\n                            {{ rowData[col.field] }}\r\n                          </a>\r\n                        </div>\r\n\r\n                        <div>\r\n                          {{ rowData[\"procurementRequestDescription\"] | formatSelectOption: procurementRequestTypes }}\r\n                        </div>\r\n                      </ng-container>\r\n\r\n                      <span *ngSwitchCase=\"'referenceDocument'\">\r\n                        <div>\r\n                          <a class=\"bold\" (click)=\"openWorkOrder(rowData)\"> {{ rowData[col.field] }}</a>\r\n                        </div>\r\n                        <div class=\"info\">\r\n                          <i> {{ rowData[\"referenceDocumentDesc\"] }} </i>\r\n                        </div>\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'shipper'\">\r\n                        <div class=\"code\">\r\n                          <div>\r\n                            <span>\r\n                              <b>{{ rowData[col.field] }}</b>\r\n                            </span>\r\n                          </div>\r\n                          <div>\r\n                            <span>\r\n                              <i> {{ rowData[\"shipperDesc\"] }} </i></span\r\n                            >\r\n                          </div>\r\n                          <div class=\"custom-padding\">\r\n                            <span>\r\n                              {{ rowData[\"customerName\"] }}\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'recipient'\">\r\n                        <div class=\"code\">\r\n                          <div>\r\n                            <span>\r\n                              <b>{{ rowData[col.field] }}</b>\r\n                            </span>\r\n                          </div>\r\n                          <div>\r\n                            <span>\r\n                              <i> {{ rowData[\"recipientDesc\"] }} </i></span\r\n                            >\r\n                          </div>\r\n                        </div>\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'assetRecipient'\">\r\n                        <a class=\"bold\" (click)=\"openWorkPackageAsset(rowData)\">{{ rowData[col.field] }}</a>\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'materials'\">\r\n                        <div>\r\n                          <a class=\"bold\" (click)=\"openPart(rowData)\">{{ rowData[col.field] }}</a>\r\n                        </div>\r\n                        <div *ngIf=\"rowData['materialsDesc']\">\r\n                          <i>{{ rowData[\"materialsDesc\"] }}</i>\r\n                        </div>\r\n                        <div *ngIf=\"!rowData['materialsDesc'] && rowData['numberOfRecords']\">\r\n                          <i>{{ rowData[\"numberOfRecords\"] }} {{ componentData.componentId + \".items\" | translate }}</i>\r\n                        </div>\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'expectedOn'\">\r\n                        {{ rowData[col.field] | date: \"yyyy/MM/dd\":\"\":translateService.currentLang }}\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'status'\">\r\n                        <div class=\"code\">\r\n                          <div>\r\n                            <span>\r\n                              <b>{{ getStatusLabel(rowData[col.field]) }}</b>\r\n                            </span>\r\n                          </div>\r\n                          <div>\r\n                            <span>\r\n                              <i>\r\n                                <ng-container *ngIf=\"rowData['advancement'] == advancement.NOT_SERVED\">\r\n                                  {{ componentData.componentId + \".notServed\" | translate }}\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"rowData['advancement'] == advancement.PARTIALLY_SERVED\">\r\n                                  {{ componentData.componentId + \".partiallyServed\" | translate }}\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"rowData['advancement'] == advancement.SERVED\">\r\n                                  {{ componentData.componentId + \".served\" | translate }}\r\n                                </ng-container>\r\n                              </i>\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'criticity'\">\r\n                        <span\r\n                          *ngIf=\"rowData[col.field] === awPropertiesConstants.LOGISTICAL_CRITICALITY_IMMEDIATE\"\r\n                          class=\"procurement-alert procurement--nok\"\r\n                        >\r\n                          {{ componentData.componentId + \".immediate\" | translate }}\r\n                        </span>\r\n                        <span\r\n                          *ngIf=\"rowData[col.field] === awPropertiesConstants.LOGISTICAL_CRITICALITY_URGENT\"\r\n                          class=\"procurement-alert procurement--warning\"\r\n                        >\r\n                          {{ componentData.componentId + \".urgent\" | translate }}\r\n                        </span>\r\n                        <span\r\n                          *ngIf=\"rowData[col.field] === awPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE\"\r\n                          class=\"procurement-alert procurement--ok\"\r\n                        >\r\n                          {{ componentData.componentId + \".routine\" | translate }}\r\n                        </span>\r\n                      </span>\r\n\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-procurement-request-popup *ngIf=\"showCreateProcurementDialog\" [(display)]=\"showCreateProcurementDialog\">\r\n</aw-procurement-request-popup>\r\n\r\n<aw-dialog-search-equipment\r\n  *ngIf=\"assetDialogVisible\"\r\n  [(display)]=\"assetDialogVisible\"\r\n  [selectionMultiple]=\"false\"\r\n  [searchAllEquipment]=\"true\"\r\n  (onSelected)=\"onSelectAsset($event)\"\r\n></aw-dialog-search-equipment>\r\n\r\n<aw-dialog-search-pn\r\n  [showPartTypeSelection]=\"true\"\r\n  [(display)]=\"assetPnDialogVisible\"\r\n  (onSelected)=\"onSelectAssetPn($event)\"\r\n  [withAllTypes]=\"true\"\r\n  *ngIf=\"assetPnDialogVisible\"\r\n></aw-dialog-search-pn>\r\n\r\n<p-overlayPanel #opTableFilter class=\"aw-overlay\" (onShow)=\"filtersVisible = true\" (onHide)=\"filtersVisible = false\">\r\n  <div class=\"row\">\r\n    <div class=\"section\">\r\n      <h4 class=\"section-title\">{{ componentData.componentId + \".requestManagment\" | translate }}</h4>\r\n\r\n      <div class=\"section-content\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\"> {{ componentData.componentId + \".status\" | translate }} </label>\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                class=\"aw-dropdown fixed-width\"\r\n                placeholder=\"&nbsp;\"\r\n                [showClear]=\"true\"\r\n                [(ngModel)]=\"filter.status\"\r\n                [options]=\"statusList\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\"> {{ componentData.componentId + \".advancement\" | translate }} </label>\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                class=\"aw-dropdown fixed-width\"\r\n                placeholder=\"&nbsp;\"\r\n                [showClear]=\"true\"\r\n                [(ngModel)]=\"filter.advancement\"\r\n                [options]=\"filter.advancements\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">\r\n              {{ componentData.componentId + \".expectedDateFilter\" | translate }}\r\n            </label>\r\n            <div class=\"form-control\">\r\n              <p-calendar\r\n                showButtonBar=\"true\"\r\n                [monthNavigator]=\"true\"\r\n                [yearNavigator]=\"true\"\r\n                [yearRange]=\"sessionService.calendarYearRange\"\r\n                class=\"aw-calendar\"\r\n                [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                [locale]=\"sessionService.calendarFormat\"\r\n                appendTo=\"body\"\r\n                [(ngModel)]=\"filter.requestedDate\"\r\n              ></p-calendar>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">{{ \"type\" | translate }}</label>\r\n            <div class=\"form-control aw-selectbutton-wrapper\">\r\n              <p-selectButton [options]=\"procurementRequestTypes\" [(ngModel)]=\"filter.type\"></p-selectButton>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">{{ componentData.componentId + \".criticity\" | translate }}</label>\r\n            <div class=\"form-control aw-selectbutton-wrapper\">\r\n              <p-selectButton [options]=\"criticalList\" [(ngModel)]=\"filter.criticity\"></p-selectButton>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\"> {{ componentData.componentId + \".workOrder\" | translate }} </label>\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                class=\"aw-dropdown fixed-width\"\r\n                placeholder=\"&nbsp;\"\r\n                [showClear]=\"true\"\r\n                [(ngModel)]=\"filter.workOrder\"\r\n                [options]=\"filter.workOrders\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section\">\r\n        <h4 class=\"section-title\">{{ componentData.componentId + \".shipper\" | translate }}</h4>\r\n\r\n        <div class=\"section-content\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\"> {{ componentData.componentId + \".site\" | translate }} </label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  placeholder=\"&nbsp;\"\r\n                  [showClear]=\"true\"\r\n                  [(ngModel)]=\"filter.shipperSite\"\r\n                  [options]=\"siteList\"\r\n                  (onChange)=\"loadSupplierWarehousesFilter()\"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label\r\n                class=\"form-label\"\r\n                *ngIf=\"filter.shipperWarehouseType === awPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE\"\r\n              >\r\n                {{ componentData.componentId + \".warehouse\" | translate }}\r\n              </label>\r\n              <label\r\n                class=\"form-label\"\r\n                *ngIf=\"filter.shipperWarehouseType === awPropertiesConstants.WAREHOUSE_CATEGORY_WORKSHOP\"\r\n              >\r\n                {{ componentData.componentId + \".workshop\" | translate }}\r\n              </label>\r\n\r\n              <div class=\"form-control group-control\">\r\n                <div class=\"form-sub-control \">\r\n                  <p-selectButton\r\n                    [options]=\"logisticsTypeList\"\r\n                    [(ngModel)]=\"filter.shipperWarehouseType\"\r\n                    (onChange)=\"loadSupplierWarehousesFilter()\"\r\n                  ></p-selectButton>\r\n                </div>\r\n                <div class=\"form-sub-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    placeholder=\"&nbsp;\"\r\n                    [showClear]=\"true\"\r\n                    [(ngModel)]=\"filter.shipperWarehouse\"\r\n                    [options]=\"filter.shipperWarehouses\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"section\">\r\n          <h4 class=\"section-title\">{{ componentData.componentId + \".recipient\" | translate }}</h4>\r\n\r\n          <div class=\"section-content\">\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ componentData.componentId + \".site\" | translate }} </label>\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    placeholder=\"&nbsp;\"\r\n                    [showClear]=\"true\"\r\n                    [(ngModel)]=\"filter.recepientSite\"\r\n                    [options]=\"siteList\"\r\n                    (onChange)=\"loadRecipientWarehousesFilter()\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label\r\n                  class=\"form-label\"\r\n                  *ngIf=\"filter.recepientWarehouseType === awPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE\"\r\n                >\r\n                  {{ componentData.componentId + \".warehouse\" | translate }}\r\n                </label>\r\n                <label\r\n                  class=\"form-label\"\r\n                  *ngIf=\"filter.recepientWarehouseType === awPropertiesConstants.WAREHOUSE_CATEGORY_WORKSHOP\"\r\n                >\r\n                  {{ componentData.componentId + \".workshop\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control group-control \">\r\n                  <div class=\"form-sub-control \">\r\n                    <p-selectButton\r\n                      [options]=\"logisticsTypeList\"\r\n                      [(ngModel)]=\"filter.recepientWarehouseType\"\r\n                      (onChange)=\"loadRecipientWarehousesFilter()\"\r\n                    ></p-selectButton>\r\n                  </div>\r\n                  <div class=\"form-sub-control \">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      placeholder=\"&nbsp;\"\r\n                      [showClear]=\"true\"\r\n                      [(ngModel)]=\"filter.recepientWarehouse\"\r\n                      [options]=\"filter.recepientWarehouses\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row action-list\" style=\"justify-content: flex-end;\">\r\n    <button type=\"button\" mat-raised-button (click)=\"opTableFilter.hide(); filtersVisible = false; clearTableFilters()\">\r\n      {{ \"resetFilters\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      style=\"margin-left: 8px;\"\r\n      (click)=\"opTableFilter.hide(); filtersVisible = false; filterTable()\"\r\n    >\r\n      {{ \"filter\" | translate }}\r\n    </button>\r\n  </div>\r\n</p-overlayPanel>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/procurement-request/search/procurement-request-search.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/search/procurement-request-search.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .search-criteria-footer-end {\n  justify-content: flex-end; }\n\n:host .group-control {\n  display: flex; }\n\n:host .group-control .form-sub-control {\n    flex-direction: column;\n    width: 100%; }\n\n:host .group-control .form-sub-control > p-selectButton {\n      display: flex;\n      align-items: flex-end;\n      height: 2.5rem; }\n\n:host .grid-cell--3-max {\n  max-width: 25%; }\n\n:host .grid-cell--9-max {\n  max-width: 30%; }\n\n:host .code {\n  display: inline-table;\n  width: 100%; }\n\n:host ::ng-deep .info {\n  overflow: hidden;\n  padding-bottom: 0.4em;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n:host .procurement-alert {\n  font-weight: 600;\n  text-align: center;\n  display: inline-block;\n  padding: 4px; }\n\n:host .procurement--nok {\n  background-color: #f6685e; }\n\n:host .procurement--ok {\n  background-color: #4caf50; }\n\n:host .procurement--warning {\n  background-color: #ffc107; }\n\n:host .custom-padding {\n  padding-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvcHJvY3VyZW1lbnQtcmVxdWVzdC9zZWFyY2gvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxwcm9jdXJlbWVudC1yZXF1ZXN0XFxzZWFyY2hcXHByb2N1cmVtZW50LXJlcXVlc3Qtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9wcm9jdXJlbWVudC1yZXF1ZXN0L3NlYXJjaC9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSx5QkFBeUIsRUFBQTs7QUFGN0I7RUFLSSxhQUFhLEVBQUE7O0FBTGpCO0lBT00sc0JBQXNCO0lBQ3RCLFdBQVcsRUFBQTs7QUFSakI7TUFVUSxhQUFhO01BQ2IscUJBQXFCO01BQ3JCLGNDOENvQixFQUFBOztBRDFENUI7RUFpQkksY0FBYyxFQUFBOztBQWpCbEI7RUFvQkksY0FBYyxFQUFBOztBQXBCbEI7RUF3QkkscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTs7QUF6QmY7RUE2QkksZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBaEN2QjtFQW9DSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBdkNoQjtFQTJDSSx5QkNyQmdCLEVBQUE7O0FEdEJwQjtFQStDSSx5QkM1QmtCLEVBQUE7O0FEbkJ0QjtFQW1ESSx5QkMvQlksRUFBQTs7QURwQmhCO0VBdURJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvcHJvY3VyZW1lbnQtcmVxdWVzdC9zZWFyY2gvcHJvY3VyZW1lbnQtcmVxdWVzdC1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuOmhvc3Qge1xyXG4gIC5zZWFyY2gtY3JpdGVyaWEtZm9vdGVyLWVuZCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuICAuZ3JvdXAtY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLmZvcm0tc3ViLWNvbnRyb2wge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgJiA+IHAtc2VsZWN0QnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBoZWlnaHQ6ICRmb3JtLWNvbnRyb2wtaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ncmlkLWNlbGwtLTMtbWF4IHtcclxuICAgIG1heC13aWR0aDogMjUlO1xyXG4gIH1cclxuICAuZ3JpZC1jZWxsLS05LW1heCB7XHJcbiAgICBtYXgtd2lkdGg6IDMwJTtcclxuICB9XHJcblxyXG4gIC5jb2RlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5pbmZvIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40ZW07XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG5cclxuICAucHJvY3VyZW1lbnQtYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICB9XHJcblxyXG4gIC5wcm9jdXJlbWVudC0tbm9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gIH1cclxuXHJcbiAgLnByb2N1cmVtZW50LS1vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gIH1cclxuXHJcbiAgLnByb2N1cmVtZW50LS13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/logistics/procurement-request/search/procurement-request-search.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/logistics/procurement-request/search/procurement-request-search.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProcurementRequestSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcurementRequestSearchComponent", function() { return ProcurementRequestSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/bidt-stock-mvt-constants */ "./src/app/shared/constants/bidt-stock-mvt-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/utils/bido-equipment-utils */ "./src/app/shared/utils/bido-equipment-utils.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/utils/logistic-utils */ "./src/app/shared/utils/logistic-utils.ts");
/* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/utils/number-utils */ "./src/app/shared/utils/number-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../logistics.service */ "./src/app/main/logistics/logistics.service.ts");
/* harmony import */ var _procurement_request_search_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./procurement-request-search.service */ "./src/app/main/logistics/procurement-request/search/procurement-request-search.service.ts");
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

























var Advancement;
(function (Advancement) {
    Advancement[Advancement["NOT_SERVED"] = 0] = "NOT_SERVED";
    Advancement[Advancement["PARTIALLY_SERVED"] = 1] = "PARTIALLY_SERVED";
    Advancement[Advancement["SERVED"] = 2] = "SERVED";
})(Advancement || (Advancement = {}));
var ProcurementRequestSearchComponent = /** @class */ (function (_super) {
    __extends(ProcurementRequestSearchComponent, _super);
    function ProcurementRequestSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, translateService, propertiesService, logisticsService, procurementRequestSearchService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.propertiesService = propertiesService;
        _this.logisticsService = logisticsService;
        _this.procurementRequestSearchService = procurementRequestSearchService;
        _this.procurementSearchInput = {};
        _this.filter = {};
        _this.advancement = Advancement;
        _this.awPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"];
        _this.procurementRequestTypes = [];
        _this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].PROCUREMENT_REQUEST_TYPE_MAP).subscribe(function (res) {
            _this.procurementRequestTypes = __spread([
                {
                    label: _this.translateService.instant(_this.getTranslateKey('all')),
                    value: undefined
                }
            ], res);
        });
        _this.sessionService.getUserSiteId().subscribe({
            next: function (site) {
                _this.userSiteId = site ? site.siteId : undefined;
                _this.procurementSearchInput.siteIssue = _this.userSiteId;
            }
        });
        _this.sessionService.getUserWarehouseId().subscribe({
            next: function (warehouse) {
                _this.selectedSupplierWarehouseCategory = warehouse ? warehouse.whCategory : undefined;
                if (warehouse && warehouse.wareHouseId) {
                    _this.loadSupplierWarehouses();
                    _this.procurementSearchInput.warehouseIssue = warehouse ? warehouse.wareHouseId : undefined;
                }
            }
        });
        _this.filter.advancements = [
            {
                label: _this.translateService.instant(_this.getTranslateKey('notServed')),
                value: Advancement.NOT_SERVED
            },
            {
                label: _this.translateService.instant(_this.getTranslateKey('partiallyServed')),
                value: Advancement.PARTIALLY_SERVED
            },
            {
                label: _this.translateService.instant(_this.getTranslateKey('served')),
                value: Advancement.SERVED
            }
        ];
        return _this;
    }
    ProcurementRequestSearchComponent.prototype.clearTableFilters = function () {
        this.filter.status = undefined;
        this.filter.advancement = undefined;
        this.filter.requestedDate = undefined;
        this.filter.type = undefined;
        this.filter.criticity = undefined;
        this.filter.workOrder = undefined;
        this.filter.shipperSite = undefined;
        this.filter.shipperWarehouse = undefined;
        this.filter.shipperWarehouses = [];
        this.filter.recepientSite = undefined;
        this.filter.recepientWarehouse = undefined;
        this.filter.recepientWarehouses = [];
        this.resultsTable = __spread(this.resultsTableSrc);
    };
    ProcurementRequestSearchComponent.prototype.filterTable = function () {
        var _this = this;
        this.resultsTable = this.resultsTableSrc.filter(function (elt) {
            return ((!_this.filter.status || elt._obj.procStatus === _this.filter.status) &&
                (!_this.filter.advancement || elt.advancement === _this.filter.advancement) &&
                (!_this.filter.requestedDate || (!!elt.expectedOn && elt.expectedOn <= _this.filter.requestedDate)) &&
                (!_this.filter.type || elt._obj.procType === _this.filter.type) &&
                (!_this.filter.criticity || elt.criticity === _this.filter.criticity) &&
                (!_this.filter.workOrder ||
                    (!!elt._obj.bidmWorkOrder && elt._obj.bidmWorkOrder.woId === _this.filter.workOrder)) &&
                (!_this.filter.shipperSite ||
                    (!!elt._obj.bidtSiteByBidtSiteIssueId && elt._obj.bidtSiteByBidtSiteIssueId === _this.filter.shipperSite)) &&
                (!_this.filter.shipperWarehouse ||
                    (!!elt._obj.bidtWarehouseByBidtWarehouseIssueId &&
                        elt._obj.bidtWarehouseByBidtWarehouseIssueId === _this.filter.shipperWarehouse)) &&
                (!_this.filter.recepientSite ||
                    (!!elt._obj.bidtSiteByBidtSiteReceiptId &&
                        elt._obj.bidtSiteByBidtSiteReceiptId === _this.filter.recepientSite)) &&
                (!_this.filter.recepientWarehouse ||
                    (!!elt._obj.bidtWarehouseByBidtWarehouseReceiptId &&
                        elt._obj.bidtWarehouseByBidtWarehouseReceiptId === _this.filter.recepientWarehouse)));
        });
    };
    ProcurementRequestSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_PROCUREMENT_REQUEST_SEARCH;
    };
    ProcurementRequestSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.siteList = [];
        this.resultsTable = [];
        this.resultsTableSrc = [];
        this.selectedResults = [];
        this.criticalList = [];
        this.logisticsTypeList = [];
        this.displayComponentContext('global.search', true);
        this.loadDropdowns();
        this.resultTableCols = this.procurementRequestSearchService.loadTableCols();
    };
    /************************************
     * Fetch Dropdown Data
     ************************************/
    ProcurementRequestSearchComponent.prototype.loadDropdowns = function () {
        var _this = this;
        this.procurementRequestSearchService.findAllBireSite().subscribe({
            next: function (sites) {
                _this.siteList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__["ListUtils"].orEmpty(sites)
                    .filter(function (site) { return !!site.siteId && !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__["StringUtils"].isNullOrEmpty(site.siteName); })
                    .map(function (site) {
                    return {
                        label: site.siteCode + " - " + site.siteName,
                        value: site.siteId
                    };
                })
                    .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
            }
        });
        // Load Status List
        this.procurementRequestSearchService.loadStatusList().subscribe(function (res) {
            _this.statusList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__["ListUtils"].orEmpty(res)
                .filter(function (status) { return status.value !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PROCUREMENT_REQUEST_STATUS_SIMULATED; })
                .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
        });
        this.documentList = [{ label: this.translateService.instant(this.getTranslateKey('workOrder')), value: '0' }];
        this.procurementRequestSearchService.getWarehouseCategoryMap().subscribe(function (res) {
            if (res && res.length) {
                _this.logisticsTypeList = res.sort(function (s1, s2) { return s1.value.localeCompare(s2.value); });
                _this.procurementSearchInput.whType = _this.logisticsTypeList[0].value;
                _this.selectedSupplierWarehouseCategory = _this.logisticsTypeList[0].value;
                _this.filter.shipperWarehouseType = _this.logisticsTypeList[0].value;
                _this.filter.recepientWarehouseType = _this.logisticsTypeList[0].value;
            }
        });
        this.procurementRequestSearchService.loadCriticalityList().subscribe(function (res) {
            res.forEach(function (criticity) {
                _this.criticalList.push({
                    label: criticity.label,
                    value: criticity.value
                });
            });
            _this.criticalList = _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_20__["LogisticalUtils"].sortCriticities(_this.criticalList);
            _this.criticalList = __spread([
                {
                    label: _this.translateService.instant(_this.getTranslateKey('all')),
                    value: undefined
                }
            ], _this.criticalList);
        });
        this.customerList = [];
        this.procurementRequestSearchService.findAllBidoCustomer().subscribe(function (customers) {
            customers.forEach(function (customer) {
                if (customer.isOwner && customer.customerCode) {
                    _this.customerList.push({
                        label: customer.customerCode +
                            (customer.customerName ? ' - ' + customer.customerName : ''),
                        value: customer
                    });
                }
            });
        });
    };
    ProcurementRequestSearchComponent.prototype.loadRecipientWarehouses = function () {
        var _this = this;
        this.procurementSearchInput.whCode = undefined;
        this.shopList = [];
        if (!!this.procurementSearchInput.siteName && this.procurementSearchInput.whType) {
            this.loadWareHouses(this.procurementSearchInput.siteName, this.procurementSearchInput.whType).subscribe({
                next: function (warehouses) {
                    _this.shopList = warehouses;
                }
            });
        }
    };
    ProcurementRequestSearchComponent.prototype.loadRecipientWarehousesFilter = function () {
        var _this = this;
        this.filter.recepientWarehouse = undefined;
        this.filter.recepientWarehouses = [];
        if (!!this.filter.recepientSite && this.filter.recepientWarehouseType) {
            this.loadWareHouses(this.filter.recepientSite, this.filter.recepientWarehouseType).subscribe({
                next: function (warehouses) {
                    _this.filter.recepientWarehouses = warehouses;
                }
            });
        }
    };
    ProcurementRequestSearchComponent.prototype.loadSupplierWarehouses = function () {
        var _this = this;
        this.procurementSearchInput.warehouseIssue = undefined;
        this.supplierWarehouses = [];
        if (!!this.procurementSearchInput.siteIssue && this.selectedSupplierWarehouseCategory) {
            this.loadWareHouses(this.procurementSearchInput.siteIssue, this.selectedSupplierWarehouseCategory).subscribe({
                next: function (warehouses) {
                    _this.supplierWarehouses = warehouses;
                }
            });
        }
    };
    ProcurementRequestSearchComponent.prototype.loadSupplierWarehousesFilter = function () {
        var _this = this;
        this.filter.shipperWarehouse = undefined;
        this.filter.shipperWarehouses = [];
        if (!!this.filter.shipperSite && this.filter.shipperWarehouseType) {
            this.loadWareHouses(this.filter.shipperSite, this.filter.shipperWarehouseType).subscribe({
                next: function (warehouses) {
                    _this.filter.shipperWarehouses = warehouses;
                }
            });
        }
    };
    ProcurementRequestSearchComponent.prototype.loadWareHouses = function (siteId, warehouseCategory) {
        return this.procurementRequestSearchService.getWarehousesBySiteId(siteId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (warehouses) {
            return warehouses
                .filter(function (warehouse) {
                return !!warehouse.whCode &&
                    !!warehouse.whName &&
                    !!warehouse.whCategory &&
                    warehouseCategory === warehouse.whCategory;
            })
                .map(function (warehouse) {
                return {
                    label: warehouse.whCode + " - " + warehouse.whName,
                    value: warehouse.wareHouseId
                };
            })
                .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
        }));
    };
    /************************************
     * Action Search
     ************************************/
    ProcurementRequestSearchComponent.prototype.search = function () {
        this.resultsTable = [];
        this.resultsTableSrc = [];
        this.selectedResults = [];
        this.getProcurementTableData();
    };
    /************************************
     * Fetch Table Data
     ************************************/
    ProcurementRequestSearchComponent.prototype.getProcurementTableData = function () {
        var _this = this;
        this.isLoading = true;
        _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
        var searchMappedInputValue = this.getMappedInputOfModel();
        this.logisticsService
            .findProcurementRequestsByCriteria(searchMappedInputValue)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.isLoading = false;
        }))
            .subscribe(function (response) {
            if (response && response.length) {
                _this.mapRespToMaterialTableData(response);
            }
            _super.prototype.differ.call(_this, function () {
                _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
            });
        });
    };
    ProcurementRequestSearchComponent.prototype.formatQuantity = function (procurementRequest) {
        if (procurementRequest.bidtProcReqItems &&
            procurementRequest.bidtProcReqItems.length === 1 &&
            procurementRequest.bidtProcReqItems[0].requestedQuantity) {
            return _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_21__["NumberUtils"].roundNumber(_shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_21__["NumberUtils"].fromString(procurementRequest.bidtProcReqItems[0].requestedQuantity), 2).toString();
        }
        return '';
    };
    ProcurementRequestSearchComponent.prototype.formatQuantityUnit = function (procurementRequest) {
        if (procurementRequest.bidtProcReqItems &&
            procurementRequest.bidtProcReqItems.length === 1 &&
            procurementRequest.bidtProcReqItems[0].requestedQuantity) {
            var unit = procurementRequest.bidtProcReqItems[0].birePn && procurementRequest.bidtProcReqItems[0].birePn.quantityUnit
                ? procurementRequest.bidtProcReqItems[0].birePn.quantityUnit
                : undefined;
            return _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__["StringUtils"].orEmpty(unit);
        }
        return '';
    };
    /************************************
     * Mapping API Response
     ************************************/
    ProcurementRequestSearchComponent.prototype.mapRespToMaterialTableData = function (responseData) {
        var _this = this;
        this.resultsTableSrc = [];
        this.filter.workOrders = [];
        responseData.forEach(function (value) {
            var tableObject = {
                _obj: value,
                id: value.id,
                procurementRequest: value.procCode,
                procurementRequestDescription: value.procType,
                referenceDocument: !!value.bidmWorkOrder ? value.bidmWorkOrder.woCode : '',
                referenceDocumentDesc: !!value.bidmWorkOrder ? value.bidmWorkOrder.woDescription : '',
                recipient: !!value.bidtSiteReceipt ? value.bidtSiteReceipt.siteName : '',
                recipientDesc: !!value.bidtWarehouseReceipt ? value.bidtWarehouseReceipt.whName : '',
                shipper: !!value.bidtSiteIssue ? value.bidtSiteIssue.siteName : '',
                shipperDesc: !!value.bidtWarehouseIssue ? value.bidtWarehouseIssue.whName : '',
                quantity: _this.formatQuantity(value),
                quantityUnit: _this.formatQuantityUnit(value),
                status: value.procStatus,
                statusDesc: value.requestedDate,
                expectedOn: value.requestedDate,
                criticity: value.criticality,
                advancement: _this.calculateSituation(value),
                customerName: !!value.bidoCustomer ? value.bidoCustomer.customerName : '',
                assetRecipient: _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_18__["BidoEquipmentUtils"].createAssetRepresentation(value.bidoEquipmentDTO)
            };
            if (value.bidtProcReqItems && value.bidtProcReqItems.length) {
                if (value.bidtProcReqItems.length === 1) {
                    tableObject.materials = value.bidtProcReqItems[0].birePn
                        ? value.bidtProcReqItems[0].birePn.pnCode
                        : undefined;
                    tableObject.materialsDesc = value.bidtProcReqItems[0].birePn
                        ? value.bidtProcReqItems[0].birePn.articleDesignation
                        : undefined;
                }
                else {
                    tableObject.numberOfRecords = value.bidtProcReqItems.length;
                }
            }
            if (!!_this.filter.workOrders &&
                !!value.bidmWorkOrder &&
                !_this.filter.workOrders.find(function (elt) { return !!value.bidmWorkOrder && elt.value === value.bidmWorkOrder.woId; })) {
                _this.filter.workOrders.push({
                    label: value.bidmWorkOrder.woCode,
                    value: value.bidmWorkOrder.woId
                });
            }
            _this.resultsTableSrc.push(tableObject);
        });
        this.filter.workOrders = this.filter.workOrders.sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
        this.resultsTable = __spread(this.resultsTableSrc);
    };
    ProcurementRequestSearchComponent.prototype.getMappedInputOfModel = function () {
        var mappedModelValue = {
            procType: this.procurementSearchInput.type,
            bidtSiteByBidtSiteIssueId: this.procurementSearchInput.siteIssue,
            bidtSiteByBidtSiteReceiptId: this.procurementSearchInput.siteName,
            bidtWarehouseByBidtWarehouseReceiptId: this.procurementSearchInput.whCode,
            bidtWarehouseByBidtWarehouseIssueId: this.procurementSearchInput.warehouseIssue,
            criticality: this.procurementSearchInput.criticality,
            procCode: this.procurementSearchInput.procCode,
            procStatus: this.procurementSearchInput.procStatus,
            requestedDate: this.procurementSearchInput.requestedDate
                ? moment__WEBPACK_IMPORTED_MODULE_2__(this.procurementSearchInput.requestedDate)
                    .endOf('day')
                    .toDate()
                : undefined,
            bidtDocuments: !!this.procurementSearchInput.documentType || !!this.procurementSearchInput.woCode
                ? [
                    {
                        documentType: this.procurementSearchInput.documentType,
                        documentCode: this.procurementSearchInput.woCode
                    }
                ]
                : [],
            bidoCustomerCustomerCode: !!this.procurementSearchInput.customer
                ? this.procurementSearchInput.customer.customerCode
                : undefined,
            bidoCustomerMandant: !!this.procurementSearchInput.customer
                ? this.procurementSearchInput.customer.customerMandant
                : undefined
        };
        var procReqStatusExcluded = [_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PROCUREMENT_REQUEST_STATUS_SIMULATED];
        if (this.procurementSearchInput.procStatus !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PROCUREMENT_REQUEST_STATUS_CANCELED) {
            procReqStatusExcluded.push(_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PROCUREMENT_REQUEST_STATUS_CANCELED);
        }
        var criteriaInput = {
            procReqItemPnCode: this.selectedAssetPn ? this.selectedAssetPn.pnCode : undefined,
            procReqItemDesignation: this.selectedDesignation,
            assetCode: this.selectedAsset ? this.selectedAsset.equipmentCode : undefined,
            bidtProcurementRequest: mappedModelValue,
            procReqStatusExcluded: procReqStatusExcluded
        };
        return criteriaInput;
    };
    /************************************
     * Open Form Component
     ************************************/
    ProcurementRequestSearchComponent.prototype.openProcurementDetails = function (rowData) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_PROCUREMENT_REQUEST_FORM,
            objectId: rowData && rowData.procurementRequest ? this.serializationService.serialize({ id: rowData.id }) : undefined,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ProcurementRequestSearchComponent.prototype.isCancelButtonVisible = function () {
        return (this.selectedResults.length === 1 &&
            (this.selectedResults[0]._obj.procStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PROCUREMENT_REQUEST_STATUS_SIMULATED ||
                this.selectedResults[0]._obj.procStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PROCUREMENT_REQUEST_STATUS_PLANNED ||
                this.selectedResults[0]._obj.procStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PROCUREMENT_REQUEST_STATUS_RELEASED) &&
            this.sessionService.hasUserRightByUseCase(_shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_5__["BidoFunctionTypeConstants"].UC_MM_PROCUREMENT, _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_5__["BidoFunctionTypeConstants"].DEGREE_MANAGE));
    };
    ProcurementRequestSearchComponent.prototype.isDeleteButtonVisible = function () {
        return (this.selectedResults.length === 1 &&
            this.selectedResults[0]._obj.procStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PROCUREMENT_REQUEST_STATUS_DRAFT &&
            !!this.sessionService.loggedUser &&
            this.selectedResults[0]._obj.statusUser === this.sessionService.loggedUser.login);
    };
    ProcurementRequestSearchComponent.prototype.cancelProcurementRequest = function () {
        var _this = this;
        if (this.selectedResults.length === 1) {
            this.logisticsService.cancelProcurementRequest(this.selectedResults[0].id).subscribe(function () {
                _this.selectedResults = [];
                _this.getProcurementTableData();
                _this.messageService.showSuccessMessage('successOnCancelProcurementRequest');
            });
        }
    };
    ProcurementRequestSearchComponent.prototype.deleteProcurementRequest = function () {
        var _this = this;
        if (this.selectedResults.length === 1) {
            this.logisticsService.deleteProcurementRequest(this.selectedResults[0].id).subscribe(function () {
                _this.selectedResults = [];
                _this.getProcurementTableData();
                _this.messageService.showSuccessMessage('successOnDeleteProcurementRequest');
            });
        }
    };
    /************************************
     * Manage button visibilty
     ************************************/
    ProcurementRequestSearchComponent.prototype.getManageButtonVisibility = function () {
        var result = false;
        this.selectedResults.filter(function (res) {
            // TODO: Manage visibility of manage button
        });
        return result;
    };
    ProcurementRequestSearchComponent.prototype.getStatusLabel = function (statusValue) {
        var matchingStatus = this.statusList.find(function (status) { return status.value === statusValue; });
        return matchingStatus ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_22__["StringUtils"].orEmpty(matchingStatus.label) : '';
    };
    /************************************
     * Open Material Req Mgmt Form
     ************************************/
    ProcurementRequestSearchComponent.prototype.openProcurementManagmentPage = function () {
        if (this.selectedResults.length === 1 && this.selectedResults[0]._obj.bidtProcReqItems) {
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_MATERIAL_REQUEST_MANAGEMENT_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Write,
                objectId: this.serializationService.serialize({
                    prId: this.selectedResults[0]._obj.id,
                    prItemId: this.selectedResults[0]._obj.bidtProcReqItems[0].id
                })
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    ProcurementRequestSearchComponent.prototype.openPart = function (row) {
        if (row.materials) {
            var data = {
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].ENG_PART_NUMBER_FORM,
                id: this.tabService.generateId(),
                objectId: row.materials,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    ProcurementRequestSearchComponent.prototype.openWorkOrder = function (row) {
        if (row._obj.bidmWorkOrder) {
            var data = {
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].MAI_WORK_ORDER_FORM,
                id: this.tabService.generateId(),
                objectId: this.serializationService.serialize({
                    projectId: row._obj.bidmWorkOrder.projectId,
                    woId: row._obj.bidmWorkOrder.woId
                }),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    ProcurementRequestSearchComponent.prototype.createProcurementRequest = function () {
        this.showCreateProcurementDialog = true;
    };
    ProcurementRequestSearchComponent.prototype.openAssetDialog = function () {
        this.assetDialogVisible = true;
    };
    ProcurementRequestSearchComponent.prototype.onSelectAsset = function (equipment) {
        this.selectedAsset = equipment;
        this.selectedAssetName = _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_18__["BidoEquipmentUtils"].createAssetRepresentation(equipment);
    };
    ProcurementRequestSearchComponent.prototype.openAssetPnDialog = function () {
        this.assetPnDialogVisible = true;
    };
    ProcurementRequestSearchComponent.prototype.clearAssetPn = function () {
        this.selectedAssetPn = undefined;
    };
    ProcurementRequestSearchComponent.prototype.onSelectAssetPn = function (pn) {
        this.selectedAssetPn = pn;
    };
    ProcurementRequestSearchComponent.prototype.calculateSituation = function (procurementRequest) {
        var stockMvts = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__["ListUtils"].orEmpty(procurementRequest.bidtProcReqItems)
            .map(function (procReqItem) {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__["ListUtils"].orEmpty(procReqItem.workshopEntries).filter(function (stockMvt) { return stockMvt.stockMvtWay === _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_6__["BidtStockMvtConstants"].MVT_WAY_CREDIT; });
        })
            .reduce(function (acc, x) { return acc.concat(x); }, []);
        var allCount = stockMvts.length;
        var servedCount = stockMvts.filter(function (stockMvt) { return stockMvt.mvtStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY; }).length;
        return servedCount === 0
            ? Advancement.NOT_SERVED
            : servedCount > 0 && servedCount < allCount
                ? Advancement.PARTIALLY_SERVED
                : Advancement.SERVED;
    };
    ProcurementRequestSearchComponent.prototype.openWorkPackageAsset = function (row) {
        if (row._obj && row._obj.bidoEquipmentDTO) {
            var equipmentObject = row._obj.bidoEquipmentDTO;
            var componentId = void 0;
            if (equipmentObject.equipmentFunction === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
                componentId = _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].FLE_AIRCRAFT_FORM;
            }
            else if (equipmentObject.equipmentFunction === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY) {
                componentId = _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].FLE_ENGINE_FORM;
            }
            else {
                componentId = _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].FLE_EQUIPMENT_FORM;
            }
            var data = {
                componentId: componentId,
                id: this.tabService.generateId(),
                objectId: this.serializationService.serialize({
                    equipmentCode: equipmentObject.equipmentCode
                }),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    ProcurementRequestSearchComponent.ALL = 'ALL';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resultsContainerAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProcurementRequestSearchComponent.prototype, "resultsContainerAnchor", void 0);
    ProcurementRequestSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-procurement-request-search',
            template: __webpack_require__(/*! ./procurement-request-search.component.html */ "./src/app/main/logistics/procurement-request/search/procurement-request-search.component.html"),
            styles: [__webpack_require__(/*! ./procurement-request-search.component.scss */ "./src/app/main/logistics/procurement-request/search/procurement-request-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_11__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_12__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__["SessionService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_13__["PropertiesService"],
            _logistics_service__WEBPACK_IMPORTED_MODULE_23__["LogisticsService"],
            _procurement_request_search_service__WEBPACK_IMPORTED_MODULE_24__["ProcurementRequestSearchService"]])
    ], ProcurementRequestSearchComponent);
    return ProcurementRequestSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_17__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: DialogWorkOrderEditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogWorkOrderEditService", function() { return DialogWorkOrderEditService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/api/aircraft-maintenance.api */ "./src/app/shared/api/aircraft-maintenance.api.ts");
/* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/api/airworthiness-management.api */ "./src/app/shared/api/airworthiness-management.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/api/task-management.api */ "./src/app/shared/api/task-management.api.ts");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
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












var DialogWorkOrderEditService = /** @class */ (function (_super) {
    __extends(DialogWorkOrderEditService, _super);
    function DialogWorkOrderEditService(http, appConfigService, aircraftMaintenanceApi, airworthinessManagementApi, taskManagementApi, bidtWarehouseApi, fleetManagementApi, userProfileManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
        _this.airworthinessManagementApi = airworthinessManagementApi;
        _this.taskManagementApi = taskManagementApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.fleetManagementApi = fleetManagementApi;
        _this.userProfileManagementApi = userProfileManagementApi;
        return _this;
    }
    /**************************************************************************
     * Fleet management api
     *************************************************************************/
    DialogWorkOrderEditService.prototype.findBidoCustomer = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoCustomer, input);
    };
    DialogWorkOrderEditService.prototype.createOrUpdateBidmWorkOrder = function (bidmWorkOrder) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.createOrUpdateBidmWorkOrder, bidmWorkOrder);
    };
    DialogWorkOrderEditService.prototype.findRelatedItemsFromTask = function (bireTaskDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findRelatedItemsFromTask, bireTaskDTOId);
    };
    DialogWorkOrderEditService.prototype.findRelatedItemsFromEvolution = function (bireEvolutionDTO) {
        return _super.prototype.post.call(this, this.taskManagementApi.findRelatedItemsFromEvolution, bireEvolutionDTO);
    };
    DialogWorkOrderEditService.prototype.findRelatedAssets = function (findRelatedAssetsInput) {
        return _super.prototype.post.call(this, this.taskManagementApi.findRelatedAssets, findRelatedAssetsInput);
    };
    DialogWorkOrderEditService.prototype.findOperationsFromTaskAndRelatedTasks = function (bireTaskDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findOperationsFromTaskAndRelatedTasks, bireTaskDTOId);
    };
    DialogWorkOrderEditService.prototype.findOperationsFromEvolution = function (bireEvolutionDTO) {
        return _super.prototype.post.call(this, this.taskManagementApi.findOperationsFromEvolution, bireEvolutionDTO);
    };
    DialogWorkOrderEditService.prototype.findWorkOrder = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmWorkOrder, input);
    };
    DialogWorkOrderEditService.prototype.findBidmWorkOrder = function (bidmWorkOrderDTOId) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmWorkOrderData, bidmWorkOrderDTOId);
    };
    DialogWorkOrderEditService.prototype.calculateWorkOrderStatus = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.calculateWorkOrderStatus, input);
    };
    DialogWorkOrderEditService.prototype.findWorkOrderOriginDetails = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.findWorkOrderOriginDetails, input);
    };
    DialogWorkOrderEditService.prototype.findBidmOperationsByWorkOrder = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmOperationsByWorkOrder, input);
    };
    DialogWorkOrderEditService.prototype.loadWarehouseList = function (input) {
        if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__["StringUtils"].isNullOrEmpty(input)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        else {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findByMandantAndSiteCode, input);
        }
    };
    DialogWorkOrderEditService.prototype.loadWareHouses = function () {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findAll);
    };
    DialogWorkOrderEditService.prototype.findUsersWithUseCaseForWorkOrder = function (input) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findUsersWithUseCaseForWorkOrder, input);
    };
    DialogWorkOrderEditService.prototype.findBireOperationPnsByOperation = function (p) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireOperationPnsByOperation, p);
    };
    DialogWorkOrderEditService.prototype.findBirePn = function (input) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBirePn, input);
    };
    DialogWorkOrderEditService.prototype.initalizeWoProcurementRequestInput = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.initializeProcurementRequest, input);
    };
    DialogWorkOrderEditService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__["AppConfigService"],
            _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__["AircraftMaintenanceApi"],
            _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_4__["AirworthinessManagementApi"],
            _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_7__["TaskManagementApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__["BidtWarehouseApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__["FleetManagementApi"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_8__["UserProfileManagementApi"]])
    ], DialogWorkOrderEditService);
    return DialogWorkOrderEditService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__["AbstractAwHttpService"]));



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
//# sourceMappingURL=default~logistics-procurement-request-procurement-request-module~logistics-transfer-order-transfer-o~df74949e.js.map