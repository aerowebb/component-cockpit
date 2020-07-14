(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-manufacturing-batch-manufacturing-batch-module"],{

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

/***/ "./src/app/main/logistics/manufacturing-batch/form/document-upload-dialog/document-upload-dialog.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/manufacturing-batch/form/document-upload-dialog/document-upload-dialog.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".docManagement\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docName\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"document.docName\" [disabled]=\"isReadOpenMode\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docPublicationDate\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-calendar\r\n          showButtonBar=\"true\"\r\n          [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\"\r\n          [yearRange]=\"sessionService.calendarYearRange\"\r\n          class=\"aw-calendar\"\r\n          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n          [locale]=\"sessionService.calendarFormat\"\r\n          [(ngModel)]=\"document.docPublicationDate\"\r\n          appendTo=\"body\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docEndOfValidityDate\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-calendar\r\n          showButtonBar=\"true\"\r\n          [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\"\r\n          [yearRange]=\"sessionService.calendarYearRange\"\r\n          class=\"aw-calendar\"\r\n          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n          [locale]=\"sessionService.calendarFormat\"\r\n          [(ngModel)]=\"document.docEndOfValidityDate\"\r\n          appendTo=\"body\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docType\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          [options]=\"types\"\r\n          [(ngModel)]=\"document.docCategory\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [showClear]=\"true\"\r\n          placeholder=\"&nbsp;\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docDescription\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <textarea\r\n          class=\"aw-textarea\"\r\n          pInputTextarea\r\n          [rows]=\"3\"\r\n          [(ngModel)]=\"document.docDescription\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" color=\"primary\" mat-raised-button (click)=\"validate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/manufacturing-batch/form/document-upload-dialog/document-upload-dialog.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/manufacturing-batch/form/document-upload-dialog/document-upload-dialog.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL21hbnVmYWN0dXJpbmctYmF0Y2gvZm9ybS9kb2N1bWVudC11cGxvYWQtZGlhbG9nL2RvY3VtZW50LXVwbG9hZC1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/logistics/manufacturing-batch/form/document-upload-dialog/document-upload-dialog.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/manufacturing-batch/form/document-upload-dialog/document-upload-dialog.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: DocumentUploadDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentUploadDialogComponent", function() { return DocumentUploadDialogComponent; });
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




var DocumentUploadDialogComponent = /** @class */ (function (_super) {
    __extends(DocumentUploadDialogComponent, _super);
    function DocumentUploadDialogComponent(sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'DocumentUploadDialogComponent') || this;
        _this.sessionService = sessionService;
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DocumentUploadDialogComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
        if (!this.document) {
            this.document = {};
        }
    };
    DocumentUploadDialogComponent.prototype.validate = function () {
        this.onValidated.emit(this.document);
        this.closeDialog();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentUploadDialogComponent.prototype, "document", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DocumentUploadDialogComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DocumentUploadDialogComponent.prototype, "types", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DocumentUploadDialogComponent.prototype, "onValidated", void 0);
    DocumentUploadDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-document-upload-dialog',
            template: __webpack_require__(/*! ./document-upload-dialog.component.html */ "./src/app/main/logistics/manufacturing-batch/form/document-upload-dialog/document-upload-dialog.component.html"),
            styles: [__webpack_require__(/*! ./document-upload-dialog.component.scss */ "./src/app/main/logistics/manufacturing-batch/form/document-upload-dialog/document-upload-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DocumentUploadDialogComponent);
    return DocumentUploadDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/manufacturing-batch/form/manufacturing-batch-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/logistics/manufacturing-batch/form/manufacturing-batch-form.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <!-- <div *ngIf=\"\" class=\"page-subtitle\">\r\n            - {{  }}\r\n          </div> -->\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"object-status\" *ngIf=\"\" (click)=\"showStatus()\">\r\n        {{  | formatSelectOption:  }}\r\n      </div> -->\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button *ngIf=\"!isCreateOpenMode\" type=\"button\" mat-raised-button>\r\n      {{ getComponentName() + \".delotir\" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf=\"!isCreateOpenMode\" type=\"button\" mat-raised-button>\r\n      {{ getComponentName() + \".report\" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"editBatch()\">\r\n      {{ \"global.edit\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      id=\"cancel\"\r\n      *ngIf=\"!isReadOpenMode && !isCreateOpenMode\"\r\n      color=\"warn\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"onCancel()\"\r\n    >\r\n      {{ \"global.cancel\" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" color=\"primary\" mat-raised-button (click)=\"saveBatch()\">\r\n      {{ \"global.save\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"reloadBatch()\">{{ \"global.refresh\" | translate }}</button>\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">{{ \"addToFavorite\" | translate }}</button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <mat-tab-group animationDuration=\"0ms\" dynamicHeight>\r\n        <!-- Home -->\r\n        <mat-tab id=\"homeTab\">\r\n          <ng-template mat-tab-label>\r\n            {{ \"home\" | translate }}\r\n          </ng-template>\r\n          <div class=\"grid-row\">\r\n            <div class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container loading-indicator\">\r\n                    <div class=\"grid-cell-title\">\r\n                      <span>{{ componentData.componentId + \".mainInfo\" | translate }}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"column\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".familyVariant\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            maxlength=\"35\"\r\n                            class=\"aw-input\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            [(ngModel)]=\"equipment.bidoEquipmentDTO.familyVariantCode\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".batchNumber\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            maxlength=\"35\"\r\n                            class=\"aw-input\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            [(ngModel)]=\"equipment.bidoEquipmentDTO.batchNumber\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".partNumber\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            maxlength=\"35\"\r\n                            class=\"aw-input\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            [(ngModel)]=\"equipment.bidoEquipmentDTO.pnCode\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".quantity\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            maxlength=\"35\"\r\n                            class=\"aw-input\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            [(ngModel)]=\"equipment.bidoEquipmentDTO.quantity\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".operationalStatus\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [showClear]=\"true\"\r\n                            [(ngModel)]=\"equipment.bidoEquipmentDTO.operationalStatus\"\r\n                            [options]=\"statusList\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group flex--2\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".designation\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            maxlength=\"35\"\r\n                            class=\"aw-input\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            [(ngModel)]=\"equipment.bidoEquipmentDTO.equipmentDesignation\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".expirationDate\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-calendar\r\n                            showButtonBar=\"true\"\r\n                            [monthNavigator]=\"true\"\r\n                            [yearNavigator]=\"true\"\r\n                            [yearRange]=\"sessionService.calendarYearRange\"\r\n                            class=\"aw-calendar\"\r\n                            [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                            [locale]=\"sessionService.calendarFormat\"\r\n                            appendTo=\"body\"\r\n                            [(ngModel)]=\"mainInfo.expirationDate\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          ></p-calendar>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".owner\" | translate }}</label>\r\n\r\n                        <div\r\n                          class=\"form-control form-control-with-modal\"\r\n                          [ngClass]=\"{ disabled: isReadOpenMode || !isCreateOpenMode }\"\r\n                        >\r\n                          <div class=\"form-control-data\" (click)=\"isCreateOpenMode ? searchOwners() : ''\">\r\n                            {{ equipment.bidoEquipmentDTO.ownerCustomerCode }}\r\n                            <span *ngIf=\"ownerCustomerName\">({{ ownerCustomerName }})</span>\r\n                          </div>\r\n\r\n                          <div *ngIf=\"equipment.bidoEquipmentDTO.ownerCustomerCode\" class=\"btn-clear-wrapper\">\r\n                            <i\r\n                              class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                              aria-hidden=\"true\"\r\n                              (click)=\"\r\n                                equipment.bidoEquipmentDTO.ownerCustomerCode = undefined; ownerCustomerName = undefined\r\n                              \"\r\n                            ></i>\r\n                          </div>\r\n                          <div class=\"btn-search-wrapper\">\r\n                            <i\r\n                              class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                              aria-hidden=\"true\"\r\n                              (click)=\"searchOwners()\"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".operator\" | translate }}</label>\r\n\r\n                        <div\r\n                          class=\"form-control form-control-with-modal\"\r\n                          [ngClass]=\"{ disabled: isReadOpenMode || !isCreateOpenMode }\"\r\n                        >\r\n                          <div class=\"form-control-data\" (click)=\"isCreateOpenMode ? searchOperators() : ''\">\r\n                            {{ equipment.bidoEquipmentDTO.operatorCustomerCode }}\r\n                            <span *ngIf=\"operatorCustomerName\">({{ operatorCustomerName }})</span>\r\n                          </div>\r\n\r\n                          <div *ngIf=\"equipment.bidoEquipmentDTO.operatorCustomerCode\" class=\"btn-clear-wrapper\">\r\n                            <i\r\n                              class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                              aria-hidden=\"true\"\r\n                              (click)=\"\r\n                                equipment.bidoEquipmentDTO.operatorCustomerCode = undefined;\r\n                                operatorCustomerName = undefined\r\n                              \"\r\n                            ></i>\r\n                          </div>\r\n                          <div class=\"btn-search-wrapper\">\r\n                            <i\r\n                              class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                              aria-hidden=\"true\"\r\n                              (click)=\"searchOperators()\"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Engineering References -->\r\n            <div class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".engineeringReferences\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content  grid-cell-content-with-section\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".itemCode\" | translate }}</label>\r\n                      <div class=\"form-control display--flex-row\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input flex--1\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                          [(ngModel)]=\"equipment.bidoEquipmentDTO.chapter\"\r\n                          maxlength=\"2\"\r\n                        />\r\n                        <span style=\"margin-top:10px\" class=\"separator\">-</span>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input flex--1\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                          [(ngModel)]=\"equipment.bidoEquipmentDTO.section\"\r\n                          maxlength=\"2\"\r\n                        />\r\n                        <span style=\"margin-top:10px\" class=\"separator\">-</span>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input flex--1\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                          [(ngModel)]=\"equipment.bidoEquipmentDTO.subject\"\r\n                          maxlength=\"2\"\r\n                        />\r\n                        <span style=\"margin-top:10px\" class=\"separator\">-</span>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input flex--1\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                          [(ngModel)]=\"equipment.bidoEquipmentDTO.sheet\"\r\n                          maxlength=\"5\"\r\n                        />\r\n                        <span style=\"margin-top:10px\" class=\"separator\">-</span>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input flex--1\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                          [(ngModel)]=\"equipment.bidoEquipmentDTO.marks\"\r\n                          maxlength=\"5\"\r\n                        />\r\n\r\n                        <div class=\"btn-search-wrapper\" *ngIf=\"!isReadOpenMode\">\r\n                          <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group general-field\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".itemNumber\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input\"\r\n                          [(ngModel)]=\"equipment.itemNumber\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group general-field\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".functionCode\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input\"\r\n                          [(ngModel)]=\"equipment.bidoEquipmentDTO.functionCode\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".position\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          [options]=\"propertyPositions\"\r\n                          [(ngModel)]=\"equipment.bidoEquipmentDTO.equiPosition\"\r\n                          [showClear]=\"true\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".function\" | translate }}</label>\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          [options]=\"propertyFunctions\"\r\n                          [(ngModel)]=\"equipment.bidoEquipmentDTO.equipmentFunction\"\r\n                          [showClear]=\"true\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".lifeRestriction\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-checkbox\r\n                          class=\"aw-checkbox\"\r\n                          binary=\"true\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                          [(ngModel)]=\"equipment.bidoEquipmentDTO.lifeRestriction\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        >\r\n                        </p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group general-field\">\r\n                      <label class=\"form-label\">{{\r\n                        componentData.componentId + \".manufacturingConfiguration\" | translate\r\n                      }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-checkbox\r\n                          binary=\"true\"\r\n                          class=\"aw-checkbox\"\r\n                          [(ngModel)]=\"equipment.bidoEquipmentDTO.manufacturingConfiguration\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell--6\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container loading-indicator \">\r\n                    <div class=\"grid-cell-title\">\r\n                      <span>{{ componentData.componentId + \".geographicalLocation\" | translate }}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">{{ componentData.componentId + \".zone\" | translate }}</label>\r\n\r\n                          <div *ngIf=\"isCreateOpenMode\" class=\"form-control\">\r\n                            <p-dropdown\r\n                              class=\"aw-dropdown fixed-width\"\r\n                              [options]=\"propertyZones\"\r\n                              [(ngModel)]=\"equipment.bidoEquipmentDTO.zone\"\r\n                              (onChange)=\"changeZone()\"\r\n                              [showClear]=\"true\"\r\n                              placeholder=\"&nbsp;\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            ></p-dropdown>\r\n                          </div>\r\n\r\n                          <div\r\n                            *ngIf=\"!isCreateOpenMode\"\r\n                            class=\"form-control form-control-with-modal\"\r\n                            [ngClass]=\"{ disabled: isReadOpenMode }\"\r\n                          >\r\n                            <div class=\"form-control-data\" (click)=\"!isReadOpenMode ? searchGeoLocation() : ''\">\r\n                              {{ equipment.bidoEquipmentDTO.zone }}\r\n                            </div>\r\n                            <div *ngIf=\"equipment.bidoEquipmentDTO.zone\" class=\"btn-clear-wrapper\">\r\n                              <i\r\n                                class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                                aria-hidden=\"true\"\r\n                                (click)=\"equipment.bidoEquipmentDTO.zone = undefined\"\r\n                              ></i>\r\n                            </div>\r\n                            <div class=\"btn-search-wrapper\">\r\n                              <i\r\n                                class=\"fa fa-fw fa-edit aw-icon btn-search\"\r\n                                aria-hidden=\"true\"\r\n                                (click)=\"searchGeoLocation()\"\r\n                              ></i>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">{{ componentData.componentId + \".country\" | translate }}</label>\r\n\r\n                          <div *ngIf=\"isCreateOpenMode\" class=\"form-control\">\r\n                            <p-dropdown\r\n                              class=\"aw-dropdown fixed-width\"\r\n                              [options]=\"propertyCountries\"\r\n                              [(ngModel)]=\"equipment.bidoEquipmentDTO.country\"\r\n                              (onChange)=\"changeCountry()\"\r\n                              [showClear]=\"true\"\r\n                              placeholder=\"&nbsp;\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                          <div *ngIf=\"!isCreateOpenMode\" class=\"form-control\">\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                              [(ngModel)]=\"equipment.bidoEquipmentDTO.country\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">{{ componentData.componentId + \".location\" | translate }}</label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <p-dropdown\r\n                              class=\"aw-dropdown fixed-width\"\r\n                              [options]=\"propertyLocations\"\r\n                              [(ngModel)]=\"locationValue\"\r\n                              [showClear]=\"true\"\r\n                              placeholder=\"&nbsp;\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell--6\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container loading-indicator \">\r\n                    <div class=\"grid-cell-title\">\r\n                      <span>{{ componentData.componentId + \".usCounters\" | translate }}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">{{ componentData.componentId + \".usage\" | translate }}</label>\r\n\r\n                          <div\r\n                            class=\"form-control\"\r\n                            [ngClass]=\"\r\n                              !equipment.usageCounterCalculationDTO.usageValue ||\r\n                              equipment.usageCounterCalculationDTO.usageValue === NOT_ACTIVATED\r\n                                ? COLOR_RED\r\n                                : COLOR_GREEN\r\n                            \"\r\n                          >\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [(ngModel)]=\"equipment.usageCounterCalculationDTO.usageValue\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">{{ componentData.componentId + \".storage\" | translate }}</label>\r\n\r\n                          <div\r\n                            class=\"form-control\"\r\n                            [ngClass]=\"\r\n                              !equipment.usageCounterCalculationDTO.storageValue ||\r\n                              equipment.usageCounterCalculationDTO.storageValue === NOT_ACTIVATED\r\n                                ? COLOR_RED\r\n                                : COLOR_GREEN\r\n                            \"\r\n                          >\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [(ngModel)]=\"equipment.usageCounterCalculationDTO.storageValue\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">{{\r\n                            componentData.componentId + \".usageStorage\" | translate\r\n                          }}</label>\r\n\r\n                          <div\r\n                            class=\"form-control\"\r\n                            [ngClass]=\"\r\n                              !equipment.usageCounterCalculationDTO.usageStorageValue ||\r\n                              equipment.usageCounterCalculationDTO.usageStorageValue === NOT_ACTIVATED\r\n                                ? COLOR_RED\r\n                                : COLOR_GREEN\r\n                            \"\r\n                          >\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [(ngModel)]=\"equipment.usageCounterCalculationDTO.usageStorageValue\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab *ngIf=\"!isCreateOpenMode\" id=\"structureTab\">\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + \".batchInfo\" | translate }}\r\n          </ng-template>\r\n          <div *ngIf=\"!isCreateOpenMode\">\r\n            <div class=\"grid-row\">\r\n              <div class=\"grid-cell--12\">\r\n                <div class=\"grid-cell grid-cell--container\">\r\n                  <div class=\"grid-cell-header\">\r\n                    <div class=\"grid-cell-title-container loading-indicator\">\r\n                      <div class=\"grid-cell-title\">\r\n                        {{ getComponentName() + \".generatedBatches\" | translate }} ({{\r\n                          gereratedBatcheTableDataSource.dataCount\r\n                        }})\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content\">\r\n                    <a-table [dataSource]=\"gereratedBatcheTableDataSource\">\r\n                      <ng-template tableActionsDef>\r\n                        <button type=\"button\" mat-raised-button *ngIf=\"gereratedBatcheTableDataSource.hasDataSelection\">\r\n                          {{ \"global.open\" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n\r\n                      <ng-template columnDef=\"batchNumber\" let-rowData=\"rowData\">\r\n                        <a>{{ rowData.batchNumber }}</a>\r\n                      </ng-template>\r\n                      <ng-template columnDef=\"location\" let-rowData=\"rowData\">\r\n                        <span class=\"label-info\">\r\n                          <a> {{ rowData.location }}</a>\r\n                          >\r\n                        </span>\r\n                        <span> {{ rowData[\"locationDescription\"] }}</span>\r\n                      </ng-template>\r\n                      <ng-template columnDef=\"emplacement\" let-rowData=\"rowData\">\r\n                        <span class=\"label-info\">\r\n                          <a> {{ rowData.emplacement }}</a>\r\n                        </span>\r\n                        <span> {{ rowData[\"emplacementDesc\"] }}</span>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab *ngIf=\"!isCreateOpenMode\" id=\"additionalTab\">\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + \".tabGeneral\" | translate }}\r\n          </ng-template>\r\n          <div class=\"grid-row\">\r\n            <div class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container loading-indicator \">\r\n                    <div class=\"grid-cell-title\">\r\n                      <span>{{ componentData.componentId + \".tabGeneral\" | translate }}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"column\">\r\n                        <div class=\"row\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{ componentData.componentId + \".assetCode\" | translate }}</label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                type=\"text\"\r\n                                maxlength=\"25\"\r\n                                class=\"aw-input\"\r\n                                [(ngModel)]=\"equipment.bidoEquipmentDTO.equipmentCode\"\r\n                                [disabled]=\"isReadOpenMode || !isCreateOpenMode\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{ componentData.componentId + \".eisDate\" | translate }}</label>\r\n                            <div class=\"form-control\">\r\n                              <p-calendar\r\n                                showButtonBar=\"true\"\r\n                                [monthNavigator]=\"true\"\r\n                                [yearNavigator]=\"true\"\r\n                                [yearRange]=\"sessionService.calendarYearRange\"\r\n                                class=\"aw-calendar\"\r\n                                [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                                [locale]=\"sessionService.calendarFormat\"\r\n                                [(ngModel)]=\"equipment.bidoEquipmentDTO.eisDate\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                [maxDate]=\"maxDate\"\r\n                              ></p-calendar>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <!-- TODO : propagate method  -->\r\n                          <!-- <div *ngIf=\"!isCreateOpenMode && !isReadOpenMode\" class=\"form-group\" style=\"margin-top:48px\">\r\n                            <i\r\n                              class=\"fa fa-fw fa-level-down aw-icon aw-icon-with-border\"\r\n                              aria-hidden=\"true\"\r\n                              pTooltip=\"{{ componentData.componentId + '.propagate' | translate }}\"\r\n                              tooltipPosition=\"top\"\r\n                              (click)=\"propagate()\"\r\n                            ></i>\r\n                          </div> -->\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{ componentData.componentId + \".model\" | translate }}</label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                type=\"text\"\r\n                                class=\"aw-input\"\r\n                                [disabled]=\"true\"\r\n                                [(ngModel)]=\"equipmentModelCodeAndName\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{\r\n                              componentData.componentId + \".manufacturer\" | translate\r\n                            }}</label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                type=\"text\"\r\n                                maxlength=\"35\"\r\n                                class=\"aw-input\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                [(ngModel)]=\"equipment.bidoEquipmentDTO.snManufacturer\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group general-field\">\r\n                            <label class=\"form-label\">{{\r\n                              componentData.componentId + \".manufacturingDate\" | translate\r\n                            }}</label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <p-calendar\r\n                                showButtonBar=\"true\"\r\n                                [monthNavigator]=\"true\"\r\n                                [yearNavigator]=\"true\"\r\n                                [yearRange]=\"sessionService.calendarYearRange\"\r\n                                class=\"aw-calendar\"\r\n                                [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                                [locale]=\"sessionService.calendarFormat\"\r\n                                [(ngModel)]=\"equipment.bidoEquipmentDTO.manufacturingDate\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                              >\r\n                              </p-calendar>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{\r\n                              componentData.componentId + \".configurationTracked\" | translate\r\n                            }}</label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <p-checkbox\r\n                                class=\"aw-checkbox\"\r\n                                binary=\"true\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                [(ngModel)]=\"configurationTracked\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                              ></p-checkbox>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{ componentData.componentId + \".rating\" | translate }}</label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                type=\"text\"\r\n                                class=\"aw-input\"\r\n                                [disabled]=\"true\"\r\n                                [(ngModel)]=\"equipmentRatingCodeAndName\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <aw-dynamic-attributes [showHistory]=\"true\"> </aw-dynamic-attributes>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab *ngIf=\"!isCreateOpenMode\" id=\"documentTab\">\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + \".tabDocument\" | translate }}\r\n          </ng-template>\r\n          <div class=\"grid-row\">\r\n            <div class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".tabDocument\" | translate }} ({{\r\n                        documentTableDataSource ? documentTableDataSource.dataCount : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <a-table [dataSource]=\"documentTableDataSource\">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf=\"documentTableDataSource.hasDataSelection\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"downloadFiles()\"\r\n                      >\r\n                        {{ \"global.download\" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && documentTableDataSource.hasDataSelection\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteDocuments()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && documentTableDataSource.dataSelectionCount === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"editDocument()\"\r\n                      >\r\n                        {{ \"global.edit\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && documentTableDataSource.dataSelectionCount === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openDocument()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n                      <p-fileUpload\r\n                        #fileUploader\r\n                        *ngIf=\"!isReadOpenMode && !documentTableDataSource.hasDataSelection\"\r\n                        chooseLabel=\"{{ 'global.upload' | translate }}\"\r\n                        name=\"document[]\"\r\n                        customUpload=\"true\"\r\n                        mode=\"basic\"\r\n                        auto=\"true\"\r\n                        (uploadHandler)=\"uploadDocument($event, fileUploader)\"\r\n                      ></p-fileUpload>\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"docEndOfValidityDate\" let-rowData=\"rowData\">\r\n                      {{ rowData.docEndOfValidityDate | date: \"shortDate\":\"\":translateService.currentLang }}\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"docExtension\" let-rowData=\"rowData\">\r\n                      <span> {{ showDocExtension(rowData) }} </span>\r\n                    </ng-template>\r\n                    <ng-template columnDef=\"docPublicationDate\" let-rowData=\"rowData\">\r\n                      <span>\r\n                        {{ rowData.docPublication | date: \"shortDate\":\"\":translateService.currentLang }}\r\n                      </span>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-document-upload-dialog\r\n  *ngIf=\"showAddDocumentDialog\"\r\n  [(display)]=\"showAddDocumentDialog\"\r\n  [openMode]=\"documentDialogOpenMode\"\r\n  [document]=\"currentDocument\"\r\n  [types]=\"documentTypes\"\r\n  (onValidated)=\"addNewDocument($event)\"\r\n>\r\n</aw-document-upload-dialog>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/manufacturing-batch/form/manufacturing-batch-form.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/logistics/manufacturing-batch/form/manufacturing-batch-form.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .label-info {\n  display: flex; }\n\n:host .procurement-type--in {\n  color: #4caf50;\n  -webkit-transform: rotate(320deg);\n          transform: rotate(320deg); }\n\n:host .procurement-type--out {\n  color: #f6685e;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n:host .procurement-type--transfer {\n  color: #006ea9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbWFudWZhY3R1cmluZy1iYXRjaC9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcbWFudWZhY3R1cmluZy1iYXRjaFxcZm9ybVxcbWFudWZhY3R1cmluZy1iYXRjaC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9tYW51ZmFjdHVyaW5nLWJhdGNoL2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksYUFBYSxFQUFBOztBQUZqQjtFQUtJLGNDY2tCO0VEYmxCLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFON0I7RUFVSSxjQ1lnQjtFRFhoQixnQ0FBd0I7VUFBeEIsd0JBQXdCLEVBQUE7O0FBWDVCO0VBZUksY0NTZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL21hbnVmYWN0dXJpbmctYmF0Y2gvZm9ybS9tYW51ZmFjdHVyaW5nLWJhdGNoLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLmxhYmVsLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLnByb2N1cmVtZW50LXR5cGUtLWluIHtcclxuICAgIGNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzIwZGVnKTtcclxuICB9XHJcblxyXG4gIC5wcm9jdXJlbWVudC10eXBlLS1vdXQge1xyXG4gICAgY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnByb2N1cmVtZW50LXR5cGUtLXRyYW5zZmVyIHtcclxuICAgIGNvbG9yOiAkYmx1ZS1kYXJrMTtcclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/logistics/manufacturing-batch/form/manufacturing-batch-form.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/logistics/manufacturing-batch/form/manufacturing-batch-form.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ManufacturingBatchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturingBatchFormComponent", function() { return ManufacturingBatchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../..//shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/bido-attribute-constants */ "./src/app/shared/constants/bido-attribute-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/enums/table-selection-mode.enum */ "./src/app/shared/enums/table-selection-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../logistics.service */ "./src/app/main/logistics/logistics.service.ts");
/* harmony import */ var _search_manufacturing_batch_search_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../search/manufacturing-batch-search.service */ "./src/app/main/logistics/manufacturing-batch/search/manufacturing-batch-search.service.ts");
/* harmony import */ var _manufacturing_batch_form_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./manufacturing-batch-form.service */ "./src/app/main/logistics/manufacturing-batch/form/manufacturing-batch-form.service.ts");
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



























var ManufacturingBatchFormComponent = /** @class */ (function (_super) {
    __extends(ManufacturingBatchFormComponent, _super);
    function ManufacturingBatchFormComponent(favoriteService, loaderService, pageTocService, messageService, serializationService, tabService, sessionService, dateService, translateService, manufacturingBatchFormService, manufacturingBatchSearchService, propertiesService, confirmationService, logisticsService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.sessionService = sessionService;
        _this.dateService = dateService;
        _this.translateService = translateService;
        _this.manufacturingBatchFormService = manufacturingBatchFormService;
        _this.manufacturingBatchSearchService = manufacturingBatchSearchService;
        _this.propertiesService = propertiesService;
        _this.confirmationService = confirmationService;
        _this.logisticsService = logisticsService;
        _this.TABLE_PAGINATION_DEFAULT_ROWS = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].TABLE_PAGINATION_DEFAULT_ROWS;
        // Color
        _this.COLOR_NONE = '';
        _this.COLOR_RED = 'red';
        _this.COLOR_GREEN = 'green';
        _this.COLOR_YELLOW = 'yellow';
        _this.NOT_ACTIVATED = 'Not Activated';
        _super.prototype.registerPageTocEntryObservable.call(_this);
        _this.appConstants = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"];
        _this.initInput();
        _this.initializeTableHeader();
        _this.loadDocumentTypes();
        _this.fillDropDown();
        _this.awPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"];
        _this.translateService.onLangChange.subscribe(function (_) {
            /* Change the DropDownList content regarding the langage */
            _this.fillDropDown();
        });
        return _this;
    }
    ManufacturingBatchFormComponent.prototype.initInput = function () {
        this.mainInfo = {};
        this.toc = [];
        this.bidoStockDisplayed = [];
        this.propertyLocations = [];
        this.propertyPositions = [];
        this.propertyZones = [];
        this.propertyCountries = [];
        this.propertyFunctions = [];
        this.documents = [];
        this.documentTypes = [];
        this.equipment = {
            bidoEquipmentDTO: {},
            measureTableDtos: [],
            bidoDocumentationTableOutputDTOs: [],
            stockOutputDto: {},
            superiorAsset: {},
            usageCounterCalculationDTO: {},
            saveUsageEquipment: {
                updateBidoEquipmentUsageDTOList: []
            }
        };
        this.documentsAdded = [];
        this.documentsUpdated = [];
        this.currentDocumentIndex = -1;
        this.addedDocumentIndex = -1;
        this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read;
        this.showAddDocumentDialog = false;
        this.eventAdded = [];
    };
    ManufacturingBatchFormComponent.prototype.onSavedAsset = function () {
        this.eventAdded = [];
        this.documentsAdded = [];
        this.documents = [];
        this.documentsUpdated = [];
        this.documentTableDataSource.dataSelection = [];
        _super.prototype.updateOpenMode.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read);
    };
    ManufacturingBatchFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__["ComponentConstants"].LOG_MANUFACTURING_BATCH_FORM;
    };
    // Documents
    ManufacturingBatchFormComponent.prototype.loadDocumentTypes = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__["GenericPropertyConstants"].DOC_ASSET_CATEGORY_MAP).subscribe(function (results) {
            _this.documentTypes = !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_22__["SelectItemUtils"].fromLabelValues(results) : [];
        });
    };
    ManufacturingBatchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
        }
        if (this.componentData && this.componentData.objectId) {
            this.manufacturingBatchSearchService.getMfgBatchList({}).subscribe(function (batchList) {
                if (batchList && batchList.length) {
                    batchList.forEach(function (batch) {
                        if (!!_this.componentData.objectId) {
                            if (batch.batchNumber ===
                                _this.serializationService.deserialize(_this.componentData.objectId).customerCode ||
                                '') {
                                if (!!batch.equipmentCode) {
                                    _this.assetCode = batch.equipmentCode;
                                }
                            }
                        }
                    });
                }
                _this.init();
            });
        }
        this.initializeSideBar();
    };
    ManufacturingBatchFormComponent.prototype.init = function () {
        this.loadManufacturingBatch();
    };
    ManufacturingBatchFormComponent.prototype.cancelBatch = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read);
        this.reloadBatch();
    };
    ManufacturingBatchFormComponent.prototype.editBatch = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Write);
    };
    ManufacturingBatchFormComponent.prototype.reloadBatch = function () {
        this.init();
    };
    ManufacturingBatchFormComponent.prototype.isSelectedAnchor = function (anchorId) {
        return anchorId === this.selectedAnchor;
    };
    ManufacturingBatchFormComponent.prototype.setSelectedAnchor = function (anchorId) {
        this.pageTocService.setAnchorSelected(anchorId);
        this.selectedAnchor = anchorId;
    };
    ManufacturingBatchFormComponent.prototype.searchOperators = function () {
        var itemCol = [
            { field: 'customerCode', alignment: 'left' },
            { field: 'customerName', alignment: 'left' }
        ];
        var bidoCustomerDTO = {
            isOwner: false,
            isOperator: true
        };
        this.dialogTableDataOperator = {
            componentId: 'PartnerPopupDialog',
            tableCols: itemCol,
            tableRows: this.manufacturingBatchFormService.findBidoCustomersBySearchCriteria(bidoCustomerDTO),
            dataKey: undefined,
            selectionMode: _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_11__["TableSelectionMode"].Single,
            globalFilter: true
        };
    };
    ManufacturingBatchFormComponent.prototype.searchOwners = function () {
        var itemCol = [
            { field: 'customerCode', alignment: 'left' },
            { field: 'customerName', alignment: 'left' }
        ];
        var bidoCustomerDTO = {
            isOwner: true,
            isOperator: false
        };
        this.dialogTableDataOwner = {
            componentId: 'PartnerPopupDialog',
            tableCols: itemCol,
            tableRows: this.manufacturingBatchFormService.findBidoCustomersBySearchCriteria(bidoCustomerDTO),
            dataKey: undefined,
            selectionMode: _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_11__["TableSelectionMode"].Single,
            globalFilter: true
        };
    };
    ManufacturingBatchFormComponent.prototype.loadManufacturingBatch = function () {
        var _this = this;
        if (!!this.assetCode) {
            var assetId = {
                bidoEquipmentDTOId: {
                    equipmentCode: this.assetCode
                },
                assetfunction: ' '
            };
            this.manufacturingBatchFormService.findBidoEquipmentAlternative(assetId).subscribe(function (result) {
                if (result) {
                    _this.equipment = __assign({}, result);
                    if (_this.equipment && _this.equipment.bidoEquipmentDTO) {
                        if (_this.componentData) {
                            _this.context = [
                                _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(_this.equipment.bidoEquipmentDTO.pnCode)
                                    ? ''
                                    : "P/N " + _this.equipment.bidoEquipmentDTO.pnCode,
                                _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(_this.equipment.bidoEquipmentDTO.sn)
                                    ? ''
                                    : "S/N " + _this.equipment.bidoEquipmentDTO.sn
                            ]
                                .filter(function (s) { return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isEmpty(s); })
                                .join(' | ');
                            if (!!_this.equipment.bidoEquipmentDTO.equipmentDesignation) {
                                _this.context = [
                                    _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(_this.context) ? '' : _this.context,
                                    _this.equipment.bidoEquipmentDTO.equipmentDesignation
                                ]
                                    .filter(function (s) { return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isEmpty(s); })
                                    .join(' | ');
                            }
                            _this.displayComponentContext(_this.context, _this.isCreateOpenMode);
                        }
                        _this.equipment.bidoEquipmentDTO.quantity = _this.equipment.bidoEquipmentDTO.quantity
                            ? Math.trunc(_this.equipment.bidoEquipmentDTO.quantity)
                            : undefined;
                        _this.ownerCustomerName = _this.equipment.ownerCustomerName;
                        _this.equipment.bidoEquipmentDTO.equipmentFunction = !!_this.equipment.bidoEquipmentDTO.equipmentFunction
                            ? _this.equipment.bidoEquipmentDTO.equipmentFunction
                            : undefined;
                        _this.operatorCustomerName = _this.equipment.operatorCustomerName;
                        if (!!_this.equipment.bidoEquipmentDTO.bidoEquipmentAttributeList) {
                            var locationData = _this.equipment.bidoEquipmentDTO.bidoEquipmentAttributeList.filter(function (el) {
                                if (el.attributeId === _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_7__["BidoAttributeConstants"].ASSET_LOCATION.toString()) {
                                    return el;
                                }
                            });
                            _this.locationValue = !!locationData[0] ? locationData[0].attributeValue : undefined;
                        }
                        _this.loadGenreatedBatchList();
                    }
                    _this.loadStocks();
                    _this.loadDocuments();
                }
                if (!!_this.equipment.modelCode && !!_this.equipment.modelName) {
                    _this.equipmentModelCodeAndName = _this.equipment.modelCode + ' - ' + _this.equipment.modelName;
                }
                if (!!_this.equipment.ratingCode && !!_this.equipment.ratingName) {
                    _this.equipmentRatingCodeAndName = _this.equipment.ratingCode + ' - ' + _this.equipment.ratingName;
                }
            }, function (err) {
                _this.messageService.showErrorMessage(err.error.errorDetail);
            });
        }
    };
    ManufacturingBatchFormComponent.prototype.initializeSideBar = function () {
        var _this = this;
        this.toc = [
            {
                id: 'mainAnchor',
                anchor: this.mainAnchor,
                label: this.translateService.instant(this.getTranslateKey('informationPrincipales'))
            },
            {
                id: 'gereratedBatches',
                anchor: this.gereratedBatches,
                label: this.translateService.instant(this.getTranslateKey('generatedBatches'))
            },
            {
                id: 'generalAnchor',
                anchor: this.generalAnchor,
                label: this.translateService.instant(this.getTranslateKey('tabGeneral'))
            },
            {
                id: 'stockAnchor',
                anchor: this.stockAnchor,
                label: this.translateService.instant(this.getTranslateKey('stock'))
            },
            {
                id: 'documentAnchor',
                anchor: this.documentAnchor,
                label: this.translateService.instant(this.getTranslateKey('document'))
            }
        ];
        setTimeout(function () {
            _this.setSelectedAnchor('mainAnchor');
        });
    };
    ManufacturingBatchFormComponent.prototype.loadGenreatedBatchList = function () {
        var _this = this;
        if (!!this.equipment.bidoEquipmentDTO.equipmentCode) {
            this.manufacturingBatchFormService
                .getGeneratedBatchList(this.equipment.bidoEquipmentDTO.equipmentCode)
                .subscribe(function (result) {
                if (result && result.length) {
                    _this.mapGeneratedBatchList(result);
                }
            });
        }
    };
    ManufacturingBatchFormComponent.prototype.mapGeneratedBatchList = function (result) {
        var _this = this;
        result.forEach(function (element) {
            var subAssemblyObj = {
                batchNumber: element.batchNumber || '',
                quantity: element.quantity || undefined,
                creationDate: element.manufacturingDate,
                operationalStatus: element.operationalStatus,
                location: element.stockInformationDTO && element.stockInformationDTO.siteText
                    ? element.stockInformationDTO.siteText
                    : '',
                warehouseDes: element.stockInformationDTO && element.stockInformationDTO.warehouseText,
                emplacementDesc: element.stockInformationDTO && element.stockInformationDTO.storageBinText,
                emplacement: element.stockInformationDTO && element.stockInformationDTO.storageBinId
            };
            if (_this.mainInfo && _this.mainInfo.quantity) {
                subAssemblyObj.batchOriginQty = parseInt(_this.mainInfo.quantity, 10);
                var newQuantityValue = parseInt(_this.mainInfo.quantity, 10) - (subAssemblyObj.quantity || 0);
                _this.mainInfo.quantity = newQuantityValue.toString();
            }
            _this.gereratedBatcheTableDataSource.addData([subAssemblyObj]);
        });
    };
    ManufacturingBatchFormComponent.prototype.initializeTableHeader = function () {
        this.gereratedBatcheTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'batchNumber',
                    translateKey: this.getTranslateKey('batchNumber')
                },
                {
                    field: 'quantity',
                    translateKey: this.getTranslateKey('partNumber')
                },
                {
                    field: 'creationDate',
                    translateKey: this.getTranslateKey('familyVariant')
                },
                {
                    field: 'operationalStatus',
                    translateKey: this.getTranslateKey('operationalStatus')
                },
                {
                    field: 'location',
                    translateKey: this.getTranslateKey('eisDate')
                },
                {
                    field: 'emplacement',
                    translateKey: this.getTranslateKey('assetCode')
                }
            ],
            data: []
        });
        this.documentTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'docName',
                    translateKey: this.getTranslateKey('docName')
                },
                {
                    field: 'docPublicationDate',
                    translateKey: this.getTranslateKey('docPublicationDate')
                },
                {
                    field: 'docEndOfValidityDate',
                    translateKey: this.getTranslateKey('docEndOfValidityDate')
                },
                {
                    field: 'docCategory',
                    translateKey: this.getTranslateKey('docCategory')
                },
                {
                    field: 'docDescription',
                    translateKey: this.getTranslateKey('docDescription')
                }
            ],
            data: []
        });
        this.stockTableCols = [
            { field: 'code', alignment: 'left', width: '10%' },
            { field: 'stockMvtDate', alignment: 'left', width: '11%' },
            { field: 'stockMvtWay', alignment: 'left', width: '7%' },
            { field: 'mvtStatus', alignment: 'left', width: '12%' },
            { field: 'site', alignment: 'left', width: '25%' },
            { field: 'warehouse', alignment: 'left', width: '25%' },
            { field: 'document', alignment: 'left', width: '10%' }
        ];
    };
    ManufacturingBatchFormComponent.prototype.loadStocks = function () {
        if (!!this.equipment.stockOutputDto && !!this.bidoStockDisplayed) {
            this.bidoStockDisplayed = this.equipment.stockOutputDto.stockTableDtos;
        }
    };
    ManufacturingBatchFormComponent.prototype.loadDocuments = function () {
        var _this = this;
        this.documentTableDataSource.setData([]);
        if (!!this.equipment.bidoDocumentationTableOutputDTOs) {
            this.documents = this.equipment.bidoDocumentationTableOutputDTOs;
            this.equipment.bidoDocumentationTableOutputDTOs.forEach(function (doc) {
                if (!!doc.bidoDocumentationDTO) {
                    var selectedDocumentType = _this.documentTypes.find(function (documentType) {
                        return !!doc.bidoDocumentationDTO &&
                            !!doc.bidoDocumentationDTO.docCategory &&
                            documentType.value === doc.bidoDocumentationDTO.docCategory;
                    });
                    var newDoc = {
                        docExtension: _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_21__["FileUtils"].getExtension(doc.bidoDocumentationDTO.docName).toUpperCase(),
                        docName: doc.bidoDocumentationDTO.docName,
                        docPublicationDate: _this.dateService.dateToString(doc.bidoDocumentationDTO.docPublicationDate),
                        docDescription: doc.bidoDocumentationDTO.docDescription,
                        docEndOfValidityDate: _this.dateService.dateToString(doc.bidoDocumentationDTO.docEndOfValidityDate),
                        docCategory: !!selectedDocumentType ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(selectedDocumentType.label) : '',
                        docCode: doc.bidoDocumentationDTO.docCode,
                        _obj: doc.bidoDocumentationDTO
                    };
                    _this.documentTableDataSource.addData([newDoc]);
                }
            });
        }
    };
    ManufacturingBatchFormComponent.prototype.fillDropDown = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__["GenericPropertyConstants"].BATCH_EQUIPMENT_STATUS_MAP).subscribe(function (results) {
            _this.statusList = results;
        });
        this.manufacturingBatchFormService.getCountryZoneMap().subscribe(function (results) {
            results.forEach(function (element) {
                var zoneElement;
                var countryElement;
                var keyCountry = element.value;
                var mapLabel = element.label.split(';');
                var zone = mapLabel[1];
                var country = mapLabel[0];
                // this.countryZoneMap.set(country, zone);
                zoneElement = {
                    label: zone,
                    value: zone
                };
                countryElement = {
                    label: country,
                    value: keyCountry
                };
                if (!_this.propertyZones.find(function (value) { return value.label === zoneElement.label; })) {
                    _this.propertyZones.push(zoneElement);
                }
                _this.propertyCountries.push(countryElement);
                // this.propertyAllCountries.push(countryElement);
            });
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetCountryZone'));
        });
        var bireId = {
            attributeId: _shared_constants_bido_attribute_constants__WEBPACK_IMPORTED_MODULE_7__["BidoAttributeConstants"].ASSET_LOCATION.toString()
        };
        this.manufacturingBatchFormService.getAssetSourceSystemIdList(bireId).subscribe(function (results) {
            _this.propertyLocations = results;
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetLocation'));
        });
        this.manufacturingBatchFormService.getEquipmentFunctionList().subscribe(function (results) {
            _this.propertyFunctions = results.filter(function (el) {
                if (el.value !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].FAMILY_FUNCTION_AIRCRAFT_KEY &&
                    el.value !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].FAMILY_FUNCTION_ENGINE_KEY &&
                    el.value !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].FAMILY_FUNCTION_TOOL_KEY) {
                    return el;
                }
            });
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetFunction'));
        });
        this.manufacturingBatchFormService.getPositionMap().subscribe(function (results) {
            _this.propertyPositions = results;
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetPosition'));
        });
    };
    ManufacturingBatchFormComponent.prototype.saveBatch = function () {
        var _this = this;
        if (this.isCreateOpenMode) {
            this.logisticsService.addOrUpdateBatch(this.equipment.bidoEquipmentDTO).subscribe({
                next: function (equipmentValue) {
                    _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read);
                }
            });
        }
        else {
            this.updateAsset();
        }
    };
    ManufacturingBatchFormComponent.prototype.onCancel = function () {
        _super.prototype.updateOpenMode.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read);
        this.reloadBatch();
    };
    ManufacturingBatchFormComponent.prototype.updateAsset = function () {
        var _this = this;
        var assetOutputDto = {
            bidoEquipmentDTO: this.equipment.bidoEquipmentDTO,
            createBidoDocumentationTableOutputDTOs: this.documentsAdded,
            updateBidoDocumentationTableOutputDTOs: this.documentsUpdated,
            removeBidoDocumentationId: this.equipment.removeBidoDocumentationId,
            stockOutputDto: {},
            usageCounterCalculationDTO: {},
            superiorAsset: {},
            bidoEquipmentAttributeDTOList: this.equipment.bidoEquipmentAttributeDTOList,
            itemNumber: this.equipment.itemNumber,
            modelCode: this.equipment.modelCode,
            modelName: this.equipment.modelName,
            ratingCode: this.equipment.ratingCode,
            ratingName: this.equipment.ratingName
        };
        var bidoNotificationDTO = this.eventAdded;
        this.showSaveSpinner = true;
        this.logisticsService.updateAsset(assetOutputDto).subscribe(function () {
            _this.onSavedAsset();
            _this.createBidoNotification(bidoNotificationDTO);
            _this.reloadBatch();
            _this.showSaveSpinner = false;
            _this.messageService.showSuccessMessage('global.successOnSave');
        }, function (err) {
            _this.messageService.showErrorMessage(err.errorDesc);
            _this.showSaveSpinner = false;
        });
    };
    ManufacturingBatchFormComponent.prototype.createBidoNotification = function (bidoNotificationDTO) {
        var _this = this;
        this.logisticsService.createBidoNotification(bidoNotificationDTO).subscribe(function () {
            _this.onSavedAsset();
        });
    };
    ManufacturingBatchFormComponent.prototype.downloadFiles = function () {
        this.documentTableDataSource.dataSelection.forEach(function (documentRow) {
            if (!!documentRow._obj) {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_21__["FileUtils"].downloadFile(documentRow._obj.docFile, documentRow._obj.docName);
            }
        });
    };
    ManufacturingBatchFormComponent.prototype.deleteDocuments = function () {
        var _this = this;
        var partialMessageKey = this.documentTableDataSource.dataSelectionCount > 1
            ? 'confirmDeleteSelectedDocuments'
            : 'confirmDeleteSelectedDocument';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                var temp = [];
                _this.documentTableDataSource.dataSelection.forEach(function (data) {
                    if (!!data && !!data._obj && !!data._obj.docCode) {
                        var codeId = {
                            docCode: data._obj.docCode
                        };
                        temp.push(codeId);
                    }
                });
                _this.equipment.removeBidoDocumentationId = temp;
                _this.documentTableDataSource.setData(_this.documentTableDataSource.dataSrc.filter(function (data) {
                    return !_this.documentTableDataSource.dataSelection.some(function (row) {
                        return data.docName === row.docName;
                    });
                }));
                _this.documents = _this.documents.filter(function (data) {
                    return !_this.documentTableDataSource.dataSelection.some(function (row) {
                        return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
                    });
                });
                _this.documentsAdded = _this.documentsAdded.filter(function (data) {
                    return !_this.documentTableDataSource.dataSelection.some(function (row) {
                        return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
                    });
                });
                _this.documentsUpdated = _this.documentsUpdated.filter(function (data) {
                    return !_this.documentTableDataSource.dataSelection.some(function (row) {
                        return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
                    });
                });
                _this.documentTableDataSource.dataSelection = [];
            }
        });
    };
    ManufacturingBatchFormComponent.prototype.uploadDocument = function (event, fileUploader) {
        var _this = this;
        var flag = false;
        if (!!event.files) {
            var file_1 = event.files[0];
            this.documents.forEach(function (document) {
                if (!!document.bidoDocumentationDTO) {
                    if (document.bidoDocumentationDTO.docName === file_1.name) {
                        flag = true;
                    }
                }
            });
            if (flag) {
                this.messageService.showWarningMessage('global.warningOnFileExists');
            }
            else {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_21__["FileUtils"].getFileContentAsBase64(file_1, function (fileContent) {
                    var fileNameParts = file_1.name && file_1.name.includes('.') ? file_1.name.split('.') : [];
                    var docType = fileNameParts.length > 0 ? fileNameParts[fileNameParts.length - 1].toUpperCase() : undefined;
                    if (!!fileContent) {
                        var document_1 = {
                            docType: docType,
                            docFile: fileContent,
                            docName: file_1.name,
                            docPublicationDate: new Date(),
                            equipmentCode: _this.equipment.bidoEquipmentDTO.equipmentCode
                        };
                        var bidoDoc = {
                            bidoDocumentationDTO: document_1
                        };
                        _this.documents = __spread(_this.documents, [bidoDoc]);
                        _this.documentsAdded = __spread(_this.documentsAdded, [bidoDoc]);
                        _this.documentTableDataSource.addData([_this.addData(document_1)]);
                    }
                });
            }
            fileUploader.clear();
        }
    };
    ManufacturingBatchFormComponent.prototype.openDocument = function () {
        if (this.documentTableDataSource.dataSelectionCount === 1) {
            this.currentDocumentIndex = -1;
            this.addedDocumentIndex = -1;
            this.currentDocument = this.documentTableDataSource.dataSelection[0]._obj;
            this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read;
            this.showAddDocumentDialog = true;
        }
    };
    ManufacturingBatchFormComponent.prototype.editDocument = function () {
        var _this = this;
        if (this.documentTableDataSource.dataSelectionCount === 1) {
            this.currentDocumentIndex = this.documents.findIndex(function (list) {
                return (!!list.bidoDocumentationDTO &&
                    !!_this.documentTableDataSource.dataSelection[0].docName &&
                    list.bidoDocumentationDTO.docName === _this.documentTableDataSource.dataSelection[0].docName);
            });
            this.addedDocumentIndex = this.documentsAdded.findIndex(function (list) {
                return (!!list.bidoDocumentationDTO &&
                    !!_this.documentTableDataSource.dataSelection[0].docName &&
                    list.bidoDocumentationDTO.docName === _this.documentTableDataSource.dataSelection[0].docName);
            });
            this.currentDocument = __assign({}, this.documentTableDataSource.dataSelection[0]._obj);
            this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Write;
            this.showAddDocumentDialog = true;
        }
    };
    ManufacturingBatchFormComponent.prototype.addData = function (newDocument) {
        var selectedDocumentType = this.documentTypes.find(function (documentType) { return !!newDocument.docCategory && documentType.value === newDocument.docCategory; });
        var row = {
            docName: newDocument.docName,
            docDescription: newDocument.docDescription,
            docCategory: !!selectedDocumentType ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(selectedDocumentType.label) : '',
            docPublicationDate: this.dateService.dateToString(newDocument.docPublicationDate),
            docEndOfValidityDate: this.dateService.dateToString(newDocument.docEndOfValidityDate),
            _obj: newDocument
        };
        return row;
    };
    ManufacturingBatchFormComponent.prototype.addNewDocument = function (newDocument) {
        var _this = this;
        var bidoDoc = {
            bidoDocumentationDTO: newDocument
        };
        var fileExists = true;
        if (!!newDocument) {
            this.documentTableDataSource.dataSrc.forEach(function (doc, i) {
                if (doc.docName === newDocument.docName) {
                    if (_this.currentDocumentIndex === i) {
                        fileExists = true;
                    }
                    else {
                        fileExists = false;
                        _this.messageService.showWarningMessage('global.warningOnFileExists');
                    }
                }
            });
            if (fileExists) {
                if (this.currentDocumentIndex !== -1) {
                    this.documents[this.currentDocumentIndex] = bidoDoc;
                    this.documentTableDataSource[this.currentDocumentIndex] = this.addData(newDocument);
                    var updatedDocumentIndex = this.documentsUpdated.findIndex(function (obj) {
                        return (!!obj.bidoDocumentationDTO &&
                            !!obj.bidoDocumentationDTO.docName &&
                            !!bidoDoc.bidoDocumentationDTO &&
                            !!bidoDoc.bidoDocumentationDTO.docName &&
                            obj.bidoDocumentationDTO.docName === bidoDoc.bidoDocumentationDTO.docName);
                    });
                    if (newDocument.docCode) {
                        if (updatedDocumentIndex !== -1) {
                            this.documentsUpdated[updatedDocumentIndex] = bidoDoc;
                        }
                        else {
                            this.documentsUpdated = __spread(this.documentsUpdated, [bidoDoc]);
                        }
                    }
                    else {
                        if (this.addedDocumentIndex !== -1) {
                            this.documentsAdded[this.addedDocumentIndex] = bidoDoc;
                        }
                        else {
                            this.documentsAdded = __spread(this.documentsAdded, [bidoDoc]);
                        }
                    }
                }
                else {
                    var isAdded = this.documentsAdded.some(function (documentAdded) { return _this.areSameDocument(documentAdded, bidoDoc); });
                    if (isAdded) {
                        this.messageService.showWarningMessage('global.warningOnDocumentExists');
                    }
                    else {
                        this.documents = __spread(this.documents, [bidoDoc]);
                        this.documentsAdded = __spread(this.documentsAdded, [bidoDoc]);
                        this.documentTableDataSource.addData([this.addData(newDocument)]);
                    }
                }
            }
            this.documentTableDataSource.dataSelection = [];
        }
    };
    ManufacturingBatchFormComponent.prototype.areSameDocument = function (obj1, obj2) {
        if (!obj1 || !obj2) {
            return false;
        }
        else {
            return (!!obj1.bidoDocumentationDTO &&
                !!obj1.bidoDocumentationDTO.docName &&
                !!obj2.bidoDocumentationDTO &&
                !!obj2.bidoDocumentationDTO.docName &&
                obj1.bidoDocumentationDTO.docName === obj2.bidoDocumentationDTO.docName);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mainAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ManufacturingBatchFormComponent.prototype, "mainAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gereratedBatches'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ManufacturingBatchFormComponent.prototype, "gereratedBatches", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('generalAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ManufacturingBatchFormComponent.prototype, "generalAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stockAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ManufacturingBatchFormComponent.prototype, "stockAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('documentAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ManufacturingBatchFormComponent.prototype, "documentAnchor", void 0);
    ManufacturingBatchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-manufacturing-batch-form',
            template: __webpack_require__(/*! ./manufacturing-batch-form.component.html */ "./src/app/main/logistics/manufacturing-batch/form/manufacturing-batch-form.component.html"),
            styles: [__webpack_require__(/*! ./manufacturing-batch-form.component.scss */ "./src/app/main/logistics/manufacturing-batch/form/manufacturing-batch-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_14__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_3__["PageTocService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_16__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_17__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_19__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_18__["SessionService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _manufacturing_batch_form_service__WEBPACK_IMPORTED_MODULE_26__["ManufacturingBatchFormService"],
            _search_manufacturing_batch_search_service__WEBPACK_IMPORTED_MODULE_25__["ManufacturingBatchSearchService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_2__["PropertiesService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmationService"],
            _logistics_service__WEBPACK_IMPORTED_MODULE_24__["LogisticsService"]])
    ], ManufacturingBatchFormComponent);
    return ManufacturingBatchFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_20__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/manufacturing-batch/form/manufacturing-batch-form.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/manufacturing-batch/form/manufacturing-batch-form.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: ManufacturingBatchFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturingBatchFormService", function() { return ManufacturingBatchFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/asset-management.api */ "./src/app/shared/api/asset-management.api.ts");
/* harmony import */ var _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bido-equipment.api */ "./src/app/shared/api/bido-equipment.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
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










var ManufacturingBatchFormService = /** @class */ (function (_super) {
    __extends(ManufacturingBatchFormService, _super);
    function ManufacturingBatchFormService(http, appConfigService, dateService, propertiesService, bidoEquipmentApi, assetManagementApi, fleetManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.dateService = dateService;
        _this.propertiesService = propertiesService;
        _this.bidoEquipmentApi = bidoEquipmentApi;
        _this.assetManagementApi = assetManagementApi;
        _this.fleetManagementApi = fleetManagementApi;
        return _this;
    }
    ManufacturingBatchFormService.prototype.getGeneratedBatchList = function (assetCode) {
        var equipmentObj = {
            equipmentCode: assetCode
        };
        return _super.prototype.post.call(this, this.bidoEquipmentApi.findSubBatches, equipmentObj);
    };
    ManufacturingBatchFormService.prototype.getCountryZoneMap = function () {
        return this.propertiesService.getValue('getCountryZoneMap');
    };
    ManufacturingBatchFormService.prototype.getPositionMap = function () {
        return this.propertiesService.getValue('getPositionMap');
    };
    ManufacturingBatchFormService.prototype.getEquipmentFunctionList = function () {
        return this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__["GenericPropertyConstants"].ITEM_FAMILY_CODE_MAP);
    };
    ManufacturingBatchFormService.prototype.findCountriesByZone = function (zone) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findCountriesByZone, zone);
    };
    ManufacturingBatchFormService.prototype.findZoneByCountries = function (country) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findZoneByCountries, country);
    };
    ManufacturingBatchFormService.prototype.getAssetSourceSystemIdList = function (bireId) {
        return _super.prototype.post.call(this, this.fleetManagementApi.getAssetSourceSystemIdList, bireId);
    };
    ManufacturingBatchFormService.prototype.findBidoCustomersBySearchCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoCustomersBySearchCriteria, criteria);
    };
    ManufacturingBatchFormService.prototype.findBidoEquipmentAlternative = function (asset) {
        return _super.prototype.post.call(this, this.assetManagementApi.getAssetByCode, asset);
    };
    ManufacturingBatchFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__["AppConfigService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__["PropertiesService"],
            _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_3__["BidoEquipmentApi"],
            _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__["AssetManagementApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__["FleetManagementApi"]])
    ], ManufacturingBatchFormService);
    return ManufacturingBatchFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/manufacturing-batch/manufacturing-batch.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/logistics/manufacturing-batch/manufacturing-batch.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ManufacturingBatchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturingBatchModule", function() { return ManufacturingBatchModule; });
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
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ "./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts");
/* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ "./src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_document_upload_dialog_document_upload_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form/document-upload-dialog/document-upload-dialog.component */ "./src/app/main/logistics/manufacturing-batch/form/document-upload-dialog/document-upload-dialog.component.ts");
/* harmony import */ var _form_manufacturing_batch_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./form/manufacturing-batch-form.component */ "./src/app/main/logistics/manufacturing-batch/form/manufacturing-batch-form.component.ts");
/* harmony import */ var _form_manufacturing_batch_form_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form/manufacturing-batch-form.service */ "./src/app/main/logistics/manufacturing-batch/form/manufacturing-batch-form.service.ts");
/* harmony import */ var _search_manufacturing_batch_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./search/manufacturing-batch-search.component */ "./src/app/main/logistics/manufacturing-batch/search/manufacturing-batch-search.component.ts");
/* harmony import */ var _search_manufacturing_batch_search_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./search/manufacturing-batch-search.service */ "./src/app/main/logistics/manufacturing-batch/search/manufacturing-batch-search.service.ts");
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
    primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__["CheckboxModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__["SelectButtonModule"],
    primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
    primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__["InputSwitchModule"],
    primeng_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressBarModule"]
];
var INTERNAL_MODULES = [_shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_17__["TableModule"], _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_16__["ModalModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [
    _form_manufacturing_batch_form_component__WEBPACK_IMPORTED_MODULE_20__["ManufacturingBatchFormComponent"],
    _search_manufacturing_batch_search_component__WEBPACK_IMPORTED_MODULE_22__["ManufacturingBatchSearchComponent"],
    _form_document_upload_dialog_document_upload_dialog_component__WEBPACK_IMPORTED_MODULE_19__["DocumentUploadDialogComponent"]
];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_manufacturing_batch_form_service__WEBPACK_IMPORTED_MODULE_21__["ManufacturingBatchFormService"], _search_manufacturing_batch_search_service__WEBPACK_IMPORTED_MODULE_23__["ManufacturingBatchSearchService"]];
var ManufacturingBatchModule = /** @class */ (function () {
    function ManufacturingBatchModule() {
    }
    ManufacturingBatchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_10__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_11__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_12__["AppCommonSharedModule"],
                _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_14__["DynamicAttributesModule"],
                _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_13__["ComponentSidebarModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS),
                _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_15__["ManageSearchCriteriaModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], ManufacturingBatchModule);
    return ManufacturingBatchModule;
}());



/***/ }),

/***/ "./src/app/main/logistics/manufacturing-batch/search/manufacturing-batch-search.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/logistics/manufacturing-batch/search/manufacturing-batch-search.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"openNewManufacturing()\" *ngIf=\"hasUpdateAccessRight\">\r\n      {{ \"global.create\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">{{ \"addToFavorite\" | translate }}</button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <!-- TODO -->\r\n                <!-- <div class=\"row search-criteria-header\">\r\n                  <aw-manage-search-criteria></aw-manage-search-criteria>\r\n                </div> -->\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".partNumber\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"manufacturingInputObj.pnCode\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".batchNumber\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"manufacturingInputObj.batchNumber\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".designation\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"manufacturingInputObj.designation\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".operationalStatus\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [(ngModel)]=\"manufacturingInputObj.operationalStatus\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [showClear]=\"true\"\r\n                        [options]=\"statusList\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".eisDate\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"manufacturingInputObj.eisDate\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\"></div>\r\n                </div>\r\n\r\n                <div class=\"row search-criteria-footer\">\r\n                  <div class=\"search-actions\">\r\n                    <button\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      color=\"primary\"\r\n                      (click)=\"search()\"\r\n                      appKeyPress\r\n                      [keyCode]=\"'Enter'\"\r\n                      (keyPress)=\"search()\"\r\n                    >\r\n                      {{ componentData.componentId + \".toSearch\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"results\" | translate }} ({{ mfgBatchTableDataSource.dataCount }})</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <a-table [dataSource]=\"mfgBatchTableDataSource\">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"exportMfgBatchTable()\"\r\n                    *ngIf=\"mfgBatchTableDataSource.hasData && !mfgBatchTableDataSource.hasDataSelection\"\r\n                  >\r\n                    {{ \"global.export\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    color=\"warn\"\r\n                    (click)=\"deleteMfgBatch(mfgBatchTableDataSource.dataSelection)\"\r\n                    *ngIf=\"hasManageAccessRight && mfgBatchTableDataSource.hasDataSelection\"\r\n                  >\r\n                    {{ \"global.delete\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"openMfgBatchDetails(mfgBatchTableDataSource.dataSelection)\"\r\n                    *ngIf=\"mfgBatchTableDataSource.hasDataSelection\"\r\n                  >\r\n                    {{ \"global.open\" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef=\"batchNumber\" let-rowData=\"rowData\">\r\n                  <a (click)=\"openMfgBatchDetail(rowData.batchNumber)\">{{ rowData.batchNumber }}</a>\r\n                </ng-template>\r\n                <ng-template columnDef=\"partNumber\" let-rowData=\"rowData\">\r\n                  <a> {{ rowData.partNumber }}</a>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/manufacturing-batch/search/manufacturing-batch-search.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/logistics/manufacturing-batch/search/manufacturing-batch-search.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .search-criteria-footer {\n  justify-content: flex-end; }\n\n:host .custom-width {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbWFudWZhY3R1cmluZy1iYXRjaC9zZWFyY2gvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxtYW51ZmFjdHVyaW5nLWJhdGNoXFxzZWFyY2hcXG1hbnVmYWN0dXJpbmctYmF0Y2gtc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQXlCLEVBQUE7O0FBRjdCO0VBS0ksOEJBQXNCO0VBQXRCLDJCQUFzQjtFQUF0QixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL21hbnVmYWN0dXJpbmctYmF0Y2gvc2VhcmNoL21hbnVmYWN0dXJpbmctYmF0Y2gtc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5zZWFyY2gtY3JpdGVyaWEtZm9vdGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gIC5jdXN0b20td2lkdGgge1xyXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/logistics/manufacturing-batch/search/manufacturing-batch-search.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/logistics/manufacturing-batch/search/manufacturing-batch-search.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ManufacturingBatchSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturingBatchSearchComponent", function() { return ManufacturingBatchSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _manufacturing_batch_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manufacturing-batch-search.service */ "./src/app/main/logistics/manufacturing-batch/search/manufacturing-batch-search.service.ts");
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













var ManufacturingBatchSearchComponent = /** @class */ (function (_super) {
    __extends(ManufacturingBatchSearchComponent, _super);
    function ManufacturingBatchSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, propertiesService, manufacturingBatchSearchService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.propertiesService = propertiesService;
        _this.manufacturingBatchSearchService = manufacturingBatchSearchService;
        _this.initMfgBatchTableDataSource();
        return _this;
    }
    ManufacturingBatchSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_MANUFACTURING_BATCH_SEARCH;
    };
    ManufacturingBatchSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.manufacturingInputObj = {};
        this.loadDropdowns();
    };
    ManufacturingBatchSearchComponent.prototype.loadDropdowns = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__["GenericPropertyConstants"].BATCH_EQUIPMENT_STATUS_MAP).subscribe(function (results) {
            _this.statusList = results;
        });
    };
    ManufacturingBatchSearchComponent.prototype.search = function () {
        var _this = this;
        this.mfgBatchTableDataSource.setData([]);
        var bidoEquipmentObject = this.getBidoEquipmentObject();
        this.manufacturingBatchSearchService.getMfgBatchList(bidoEquipmentObject).subscribe(function (result) {
            if (result && result.length) {
                _this.mapBidoEqupmentOutput(result);
            }
        });
    };
    ManufacturingBatchSearchComponent.prototype.getOprationalStatus = function (status) {
        var result = this.statusList.find(function (_a) {
            var value = _a.value;
            return value === status;
        });
        return result ? result.label : '';
    };
    ManufacturingBatchSearchComponent.prototype.mapBidoEqupmentOutput = function (result) {
        var _this = this;
        var resultsTable = [];
        result.forEach(function (element) {
            var tableObject = {
                batchNumber: element.batchNumber || '',
                partNumber: element.pnCode,
                designation: element.equipmentDesignation,
                operationalStatus: _this.getOprationalStatus(element.operationalStatus || ''),
                eisDate: element.manufacturingDate,
                assetCode: element.equipmentCode,
                quantity: element.quantity
            };
            resultsTable.push(tableObject);
        });
        this.mfgBatchTableDataSource.setData(resultsTable);
    };
    ManufacturingBatchSearchComponent.prototype.getBidoEquipmentObject = function () {
        var bidoObject = {
            pnCode: this.manufacturingInputObj.pnCode,
            batchNumber: this.manufacturingInputObj.batchNumber,
            equipmentDesignation: this.manufacturingInputObj.designation,
            operationalStatus: this.manufacturingInputObj.operationalStatus,
            manufacturingDate: this.manufacturingInputObj.eisDate
        };
        return bidoObject;
    };
    ManufacturingBatchSearchComponent.prototype.openMfgBatchDetail = function (batchNumber) {
        this.manufacturingBatchSearchService.openMfgBatch(batchNumber);
    };
    ManufacturingBatchSearchComponent.prototype.openMfgBatchDetails = function (mfgBatchRows) {
        var _this = this;
        mfgBatchRows.forEach(function (mfgBatch) {
            _this.manufacturingBatchSearchService.openMfgBatch(mfgBatch.assetCode);
        });
    };
    ManufacturingBatchSearchComponent.prototype.initMfgBatchTableDataSource = function () {
        this.mfgBatchTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'batchNumber',
                    translateKey: this.getTranslateKey('batchNumber')
                },
                {
                    field: 'partNumber',
                    translateKey: this.getTranslateKey('partNumber')
                },
                {
                    field: 'quantity',
                    translateKey: this.getTranslateKey('quantity')
                },
                {
                    field: 'designation',
                    translateKey: this.getTranslateKey('designation')
                },
                {
                    field: 'operationalStatus',
                    translateKey: this.getTranslateKey('operationalStatus')
                },
                {
                    field: 'eisDate',
                    translateKey: this.getTranslateKey('eisDate')
                },
                {
                    field: 'assetCode',
                    translateKey: this.getTranslateKey('assetCode')
                }
            ]
        });
    };
    /**
     * Open manufacturing screen form
     */
    ManufacturingBatchSearchComponent.prototype.openNewManufacturing = function () {
        this.openManufacturing(undefined, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Create);
    };
    ManufacturingBatchSearchComponent.prototype.openManufacturing = function (objectId, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_MANUFACTURING_BATCH_FORM,
            openMode: openMode
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ManufacturingBatchSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-manufacturing-batch-search',
            template: __webpack_require__(/*! ./manufacturing-batch-search.component.html */ "./src/app/main/logistics/manufacturing-batch/search/manufacturing-batch-search.component.html"),
            styles: [__webpack_require__(/*! ./manufacturing-batch-search.component.scss */ "./src/app/main/logistics/manufacturing-batch/search/manufacturing-batch-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__["TabService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_8__["PropertiesService"],
            _manufacturing_batch_search_service__WEBPACK_IMPORTED_MODULE_12__["ManufacturingBatchSearchService"]])
    ], ManufacturingBatchSearchComponent);
    return ManufacturingBatchSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/manufacturing-batch/search/manufacturing-batch-search.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/logistics/manufacturing-batch/search/manufacturing-batch-search.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: ManufacturingBatchSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturingBatchSearchService", function() { return ManufacturingBatchSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bido-equipment.api */ "./src/app/shared/api/bido-equipment.api.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
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









var ManufacturingBatchSearchService = /** @class */ (function (_super) {
    __extends(ManufacturingBatchSearchService, _super);
    function ManufacturingBatchSearchService(http, appConfigService, serializationService, bidoEquipmentApi, tabService) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.serializationService = serializationService;
        _this.bidoEquipmentApi = bidoEquipmentApi;
        _this.tabService = tabService;
        return _this;
    }
    ManufacturingBatchSearchService.prototype.getMfgBatchList = function (equipmentObj) {
        return _super.prototype.post.call(this, this.bidoEquipmentApi.findManufacturingBatchesByCriteria, equipmentObj);
    };
    ManufacturingBatchSearchService.prototype.openMfgBatch = function (objectId) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].LOG_MANUFACTURING_BATCH_FORM,
            objectId: objectId ? this.serializationService.serialize({ customerCode: objectId }) : undefined,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ManufacturingBatchSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__["SerializationService"],
            _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_2__["BidoEquipmentApi"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_8__["TabService"]])
    ], ManufacturingBatchSearchService);
    return ManufacturingBatchSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/enums/table-selection-mode.enum.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/enums/table-selection-mode.enum.ts ***!
  \***********************************************************/
/*! exports provided: TableSelectionMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSelectionMode", function() { return TableSelectionMode; });
var TableSelectionMode;
(function (TableSelectionMode) {
    TableSelectionMode["Multiple"] = "multiple";
    TableSelectionMode["Single"] = "single";
})(TableSelectionMode || (TableSelectionMode = {}));


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
//# sourceMappingURL=logistics-manufacturing-batch-manufacturing-batch-module.js.map