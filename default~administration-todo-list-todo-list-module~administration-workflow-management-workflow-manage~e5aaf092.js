(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administration-todo-list-todo-list-module~administration-workflow-management-workflow-manage~e5aaf092"],{

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

/***/ "./src/app/main/administration/attributes/search/attributes-search.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/administration/attributes/search/attributes-search.service.ts ***!
  \************************************************************************************/
/*! exports provided: AttributesSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesSearchService", function() { return AttributesSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
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






var AttributesSearchService = /** @class */ (function (_super) {
    __extends(AttributesSearchService, _super);
    function AttributesSearchService(http, appConfigService, productStructureManagementApi, fleetManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.productStructureManagementApi = productStructureManagementApi;
        _this.fleetManagementApi = fleetManagementApi;
        return _this;
    }
    AttributesSearchService.prototype.getAllEngineeringAttributeList = function () {
        return _super.prototype.post.call(this, this.productStructureManagementApi.
            findBireAttributes);
    };
    AttributesSearchService.prototype.getEngineeringAttributeList = function (category) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.
            findBireAttributesByCategory, category);
    };
    AttributesSearchService.prototype.getAllFleetAttributeList = function () {
        return _super.prototype.post.call(this, this.fleetManagementApi.
            findBidoAttributes);
    };
    AttributesSearchService.prototype.getFleetAttributeList = function (category) {
        return _super.prototype.post.call(this, this.fleetManagementApi.
            findBidoAttributesByAttributeCategory, category);
    };
    AttributesSearchService.prototype.removeEngineeringAttributes = function (selectedAttribute) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.
            removeBireAttribute, selectedAttribute);
    };
    AttributesSearchService.prototype.removeFleetAttributes = function (selectedAttribute) {
        return _super.prototype.post.call(this, this.fleetManagementApi.
            removeBidoAttribute, selectedAttribute);
    };
    AttributesSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__["ProductStructureManagementApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__["FleetManagementApi"]])
    ], AttributesSearchService);
    return AttributesSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/administration/workflow-management/form/dialog-import-scenario/dialog-import-scenario.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/main/administration/workflow-management/form/dialog-import-scenario/dialog-import-scenario.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\"> {{ getComponentName() + \".fileToImport\" | translate }}</label>\r\n\r\n        <div class=\"form-control form-control-with-modal\">\r\n          <div class=\"form-control-data\">\r\n            {{ fileName }}\r\n          </div>\r\n\r\n          <div class=\"btn-file-upload-wrapper\">\r\n            <p-fileUpload\r\n              #fileUploader\r\n              class=\"aw-fileupload\"\r\n              name=\"document[]\"\r\n              customUpload=\"true\"\r\n              mode=\"basic\"\r\n              auto=\"true\"\r\n              chooseLabel=\"\"\r\n              (uploadHandler)=\"uploadDocument($event, fileUploader)\"\r\n            >\r\n            </p-fileUpload>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">\r\n          {{ getComponentName() + \".deleteScenCurrentData\" | translate }}\r\n        </label>\r\n\r\n        <div class=\"form-control\">\r\n          <p-checkbox binary=\"true\" class=\"aw-checkbox\" [(ngModel)]=\"file.deletion\"></p-checkbox>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button type=\"button\" mat-raised-button class=\"btn-with-spinner\" [disabled]=\"!fileName\" (click)=\"importFile()\">\r\n      <span class=\"lds-hourglass\" *ngIf=\"showImportSpinner\"></span>\r\n      {{ getComponentName() + \".import\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-imported-message\r\n  *ngIf=\"showImportMsgDialog\"\r\n  [importReportMessage]=\"importMessage\"\r\n  [(display)]=\"showImportMsgDialog\"\r\n  (onClose)=\"onCloseMsgDialog($event)\"\r\n></aw-dialog-imported-message>\r\n"

/***/ }),

/***/ "./src/app/main/administration/workflow-management/form/dialog-import-scenario/dialog-import-scenario.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/main/administration/workflow-management/form/dialog-import-scenario/dialog-import-scenario.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: DialogImportScenarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogImportScenarioComponent", function() { return DialogImportScenarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _workflow_management_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workflow-management-form.service */ "./src/app/main/administration/workflow-management/form/workflow-management-form.service.ts");
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






var DialogImportScenarioComponent = /** @class */ (function (_super) {
    __extends(DialogImportScenarioComponent, _super);
    function DialogImportScenarioComponent(workflowManagementFormService, messageService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'DialogImportScenarioComponent') || this;
        _this.workflowManagementFormService = workflowManagementFormService;
        _this.messageService = messageService;
        _this.file = {};
        _this.onValidate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogImportScenarioComponent.prototype.ngOnInit = function () {
        // TODO
    };
    /*************************************************************************
     * UPLOAD FILE
     *************************************************************************/
    DialogImportScenarioComponent.prototype.uploadDocument = function (event, fileUploader) {
        var _this = this;
        if (event.files) {
            var file_1 = event.files[0];
            {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_4__["FileUtils"].getFileContentAsBase64(file_1, function (fileContent) {
                    if (fileContent) {
                        _this.file = {
                            excelSource: fileContent,
                            fileName: file_1.name,
                            deletion: _this.file.deletion
                        };
                        _this.fileName = _this.file.fileName;
                    }
                });
            }
            fileUploader.clear();
        }
    };
    /*************************************************************************
     * IMPORT FILE
     *************************************************************************/
    DialogImportScenarioComponent.prototype.importFile = function () {
        var _this = this;
        this.showImportSpinner = true;
        this.workflowManagementFormService.importWorkflowFromExcel(this.file).subscribe(function (resp) {
            _this.importMessage = resp;
            _this.showImportMsgDialog = true;
            _this.showImportSpinner = false;
            _this.onValidate.emit();
        }, function (error) {
            _this.messageService.showErrorMessage('global.internalServerError');
            _this.showImportSpinner = false;
        });
    };
    DialogImportScenarioComponent.prototype.onCloseMsgDialog = function () {
        this.closeDialog();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogImportScenarioComponent.prototype, "onValidate", void 0);
    DialogImportScenarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-import-scenario',
            template: __webpack_require__(/*! ./dialog-import-scenario.component.html */ "./src/app/main/administration/workflow-management/form/dialog-import-scenario/dialog-import-scenario.component.html")
        }),
        __metadata("design:paramtypes", [_workflow_management_form_service__WEBPACK_IMPORTED_MODULE_5__["WorkflowManagementFormService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], DialogImportScenarioComponent);
    return DialogImportScenarioComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/administration/workflow-management/form/dialog-import-scenario/dialog-imported-message/dialog-imported-message.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/main/administration/workflow-management/form/dialog-import-scenario/dialog-imported-message/dialog-imported-message.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\">\r\n      <div class=\"form-control\">\r\n        <textarea\r\n          class=\"aw-textarea\"\r\n          [rows]=\"10\"\r\n          [cols]=\"30\"\r\n          [disabled]=\"true\"\r\n          pInputTextarea\r\n          [(ngModel)]=\"importReportMessage\"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"close()\">{{ \"global.close\" | translate }}</button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/administration/workflow-management/form/dialog-import-scenario/dialog-imported-message/dialog-imported-message.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/main/administration/workflow-management/form/dialog-import-scenario/dialog-imported-message/dialog-imported-message.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: DialogImportedMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogImportedMessageComponent", function() { return DialogImportedMessageComponent; });
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



var DialogImportedMessageComponent = /** @class */ (function (_super) {
    __extends(DialogImportedMessageComponent, _super);
    function DialogImportedMessageComponent() {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'DialogImportedMessageComponent') || this;
        _this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogImportedMessageComponent.prototype.ngOnInit = function () {
        return;
    };
    DialogImportedMessageComponent.prototype.close = function () {
        this.onClose.emit();
        this.closeDialog();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogImportedMessageComponent.prototype, "onClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogImportedMessageComponent.prototype, "importReportMessage", void 0);
    DialogImportedMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-imported-message',
            template: __webpack_require__(/*! ./dialog-imported-message.component.html */ "./src/app/main/administration/workflow-management/form/dialog-import-scenario/dialog-imported-message/dialog-imported-message.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DialogImportedMessageComponent);
    return DialogImportedMessageComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/administration/workflow-management/form/workflow-management-form.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/administration/workflow-management/form/workflow-management-form.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-subtitle-\">\r\n        <div class=\"page-subtitle\">- {{ subtitle }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button *ngIf=\"isReadOpenMode && hasUpdateAccessRight\" type=\"button\" mat-raised-button (click)=\"editScenario()\">\r\n      {{ \"global.edit\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode && !isCreateOpenMode\"\r\n      type=\"button\"\r\n      color=\"warn\"\r\n      mat-raised-button\r\n      (click)=\"cancel()\"\r\n    >\r\n      {{ \"global.cancel\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      class=\"btn-with-spinner\"\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"saveScenario()\"\r\n    >\r\n      <span class=\"lds-hourglass\" *ngIf=\"showSaveSpinner\"></span>\r\n      {{ \"global.save\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      id=\"actions\"\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button *ngIf=\"isReadOpenMode && !isCreateOpenMode\" type=\"button\" mat-menu-item (click)=\"reload()\">\r\n        {{ \"global.refresh\" | translate }}\r\n      </button>\r\n\r\n      <button id=\"favorites\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div\r\n          #mainInformationAnchor\r\n          class=\"grid-cell--12\"\r\n          (click)=\"selectPageTocEntry(component.MAIN_INFORMATION_ANCHOR_ID)\"\r\n        >\r\n          <div\r\n            class=\"grid-cell grid-cell--container\"\r\n            [ngClass]=\"{ active: isPageTocEntrySelected(component.MAIN_INFORMATION_ANCHOR_ID) }\"\r\n          >\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"page.mainData\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                <label class=\"form-label\">\r\n                  {{ \"global.name\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"aw-input\"\r\n                    [disabled]=\"!isCreateOpenMode\"\r\n                    maxlength=\"100\"\r\n                    [(ngModel)]=\"bidtScenario.name\"\r\n                  />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                <label class=\"form-label\">\r\n                  {{ componentData.componentId + \".bidtFuncObjectIdStr\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [options]=\"functionObjectList\"\r\n                    [(ngModel)]=\"selectedFuncObjectId\"\r\n                    [showClear]=\"true\"\r\n                    placeholder=\"&nbsp;\"\r\n                    [disabled]=\"!isCreateOpenMode\"\r\n                    (onChange)=\"onFuncObjectChange()\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ componentData.componentId + \".initialStatusStr\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    *ngIf=\"statusObjectList\"\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [options]=\"statusObjectList\"\r\n                    [(ngModel)]=\"bidtScenario.initialStatusKey\"\r\n                    [showClear]=\"true\"\r\n                    placeholder=\"&nbsp;\"\r\n                    [disabled]=\"!isCreateOpenMode\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".assignmentOfProfiles\" | translate }}\r\n                  ({{ profilesTableDataSource ? profilesTableDataSource.dataCount : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <!-- Assignment of profiles table -->\r\n\r\n              <div class=\"section\">\r\n                <div class=\"section-content\">\r\n                  <div style=\"width: 100%\">\r\n                    <a-table [dataSource]=\"profilesTableDataSource\">\r\n                      <ng-template columnDef=\"isAffected\" let-rowData=\"rowData\">\r\n                        <div class=\"ui-g-12\">\r\n                          <p-checkbox\r\n                            value=\"profilesList\"\r\n                            [(ngModel)]=\"rowData.isAffected\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            binary=\"true\"\r\n                          >\r\n                          </p-checkbox>\r\n                        </div>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".controlsManagement\" | translate }}\r\n                  ({{ controlMgmtTableDataSource ? controlMgmtTableDataSource.dataCount : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <!-- Controls management table -->\r\n\r\n              <div class=\"section\">\r\n                <div class=\"section-content\">\r\n                  <div style=\"width: 100%\">\r\n                    <a-table [dataSource]=\"controlMgmtTableDataSource\">\r\n                      <ng-template columnDef=\"isManaged\" let-rowData=\"rowData\">\r\n                        <div class=\"ui-g-12\">\r\n                          <p-checkbox\r\n                            value=\"controlsManagement\"\r\n                            [(ngModel)]=\"rowData.isManaged\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            binary=\"true\"\r\n                          >\r\n                          </p-checkbox>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template columnDef=\"isVisible\" let-rowData=\"rowData\">\r\n                        <div class=\"ui-g-12\">\r\n                          <p-checkbox\r\n                            value=\"controlsManagement\"\r\n                            [(ngModel)]=\"rowData.isVisible\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            binary=\"true\"\r\n                          >\r\n                          </p-checkbox>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template columnDef=\"isReadOnly\" let-rowData=\"rowData\">\r\n                        <div class=\"ui-g-12\">\r\n                          <p-checkbox\r\n                            value=\"controlsManagement\"\r\n                            [(ngModel)]=\"rowData.isReadOnly\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            binary=\"true\"\r\n                          >\r\n                          </p-checkbox>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template columnDef=\"isMandatory\" let-rowData=\"rowData\">\r\n                        <div class=\"ui-g-12\">\r\n                          <p-checkbox\r\n                            value=\"controlsManagement\"\r\n                            [(ngModel)]=\"rowData.isMandatory\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            binary=\"true\"\r\n                          >\r\n                          </p-checkbox>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template columnDef=\"groupName\" let-rowData=\"rowData\">\r\n                        <span pTooltip=\"{{ rowData['description'] }}\" tooltipPosition=\"bottom\">\r\n                          {{ rowData.groupName }}\r\n                        </span>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Target Status table -->\r\n              <div class=\"section\" *ngIf=\"showTargetStatusTable()\">\r\n                <div class=\"section-content\">\r\n                  <h4 class=\"section-title\">\r\n                    {{ componentData.componentId + \".assignmentOfTargetStatus\" | translate }}\r\n                    ({{ targetStatusTableDataSource ? targetStatusTableDataSource.dataCount : 0 }})\r\n                  </h4>\r\n                  <a-table [dataSource]=\"targetStatusTableDataSource\">\r\n                    <ng-template columnDef=\"isAffected\" let-rowData=\"rowData\">\r\n                      <div class=\"ui-g-12\">\r\n                        <p-checkbox\r\n                          value=\"targetStatus\"\r\n                          [(ngModel)]=\"rowData.isAffected\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                          binary=\"true\"\r\n                        >\r\n                        </p-checkbox>\r\n                      </div>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/administration/workflow-management/form/workflow-management-form.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/administration/workflow-management/form/workflow-management-form.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWRtaW5pc3RyYXRpb24vd29ya2Zsb3ctbWFuYWdlbWVudC9mb3JtL3dvcmtmbG93LW1hbmFnZW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/administration/workflow-management/form/workflow-management-form.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/administration/workflow-management/form/workflow-management-form.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: WorkflowManagementFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowManagementFormComponent", function() { return WorkflowManagementFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_function_object_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/function-object-constants */ "./src/app/shared/constants/function-object-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/utils/workflow-utils */ "./src/app/shared/utils/workflow-utils.ts");
/* harmony import */ var _attributes_search_attributes_search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../attributes/search/attributes-search.service */ "./src/app/main/administration/attributes/search/attributes-search.service.ts");
/* harmony import */ var _workflow_management_form_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./workflow-management-form.service */ "./src/app/main/administration/workflow-management/form/workflow-management-form.service.ts");
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




















var WorkflowManagementFormComponent = /** @class */ (function (_super) {
    __extends(WorkflowManagementFormComponent, _super);
    function WorkflowManagementFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, pageTocService, translateService, workflowManagementFormService, propertiesService, attributesSearchService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.translateService = translateService;
        _this.workflowManagementFormService = workflowManagementFormService;
        _this.propertiesService = propertiesService;
        _this.attributesSearchService = attributesSearchService;
        // Attributes
        _this.bireAttributes = [];
        _this.bidoAttributes = [];
        _this.component = WorkflowManagementFormComponent_1;
        _this.initTargetStatusTableDataSource();
        _this.initProfilesTableDataSource();
        _this.initcontrolMgmtTableDataSource();
        _super.prototype.registerPageTocEntryObservable.call(_this);
        return _this;
    }
    WorkflowManagementFormComponent_1 = WorkflowManagementFormComponent;
    WorkflowManagementFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].ADM_WORKFLOW_MANAGEMENT_FORM;
    };
    WorkflowManagementFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.updateOpenMode(this.componentData.openMode);
        this.setTableOfContent();
        this.init();
    };
    /*************************************************************************
     * INIT
     *************************************************************************/
    WorkflowManagementFormComponent.prototype.init = function () {
        this.selectedFuncObjectId = undefined;
        this.forbiddenAttributeControls = [];
        this.bidtScenario = {};
        this.loadDropdowns();
        this.loadAttributes();
        this.load();
    };
    /*************************************************************************
     * SETTING TABLE OF CONTENTS
     *************************************************************************/
    WorkflowManagementFormComponent.prototype.setTableOfContent = function () {
        var _this = this;
        var mainDataKey = 'page.mainData';
        var generalKey = 'global.general';
        this.translateService.get([mainDataKey, generalKey]).subscribe(function (results) {
            var mainDataLabel = !!results ? results[mainDataKey] : 'Main Information';
            var generalLabel = !!results ? results[generalKey] : 'General';
            _this.toc = [
                {
                    id: 'mainInformationAnchor',
                    anchor: _this.mainInformationEltRef,
                    label: mainDataLabel
                },
                {
                    id: 'mainDataAnchor',
                    anchor: _this.mainDataEltRef,
                    label: generalLabel
                }
            ];
            _super.prototype.selectPageTocEntry.call(_this, _this.component.MAIN_INFORMATION_ANCHOR_ID);
        });
    };
    /*************************************************************************
     * INTI TABLE COLS
     *************************************************************************/
    WorkflowManagementFormComponent.prototype.initTargetStatusTableDataSource = function () {
        this.targetStatusTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__["TableDataSource"]({
            enableSelection: false,
            allowMultiSelect: true,
            columns: [
                {
                    field: 'statusName',
                    translateKey: this.getTranslateKey('statusName'),
                    width: '90%'
                },
                {
                    field: 'isAffected',
                    translateKey: this.getTranslateKey('isAffected'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__["ColumnAlignment"].CENTER,
                    width: '10%'
                }
            ],
            data: []
        });
    };
    WorkflowManagementFormComponent.prototype.initProfilesTableDataSource = function () {
        this.profilesTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__["TableDataSource"]({
            enableSelection: false,
            allowMultiSelect: true,
            itemsPerPage: 6,
            columns: [
                {
                    field: 'profileName',
                    translateKey: this.getTranslateKey('profileName'),
                    width: '40%'
                },
                {
                    field: 'profileComment',
                    translateKey: this.getTranslateKey('profileComment'),
                    width: '40%'
                },
                {
                    field: 'isAffected',
                    translateKey: this.getTranslateKey('isAffected'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__["ColumnAlignment"].CENTER,
                    width: '20%'
                }
            ],
            data: []
        });
    };
    WorkflowManagementFormComponent.prototype.initcontrolMgmtTableDataSource = function () {
        this.controlMgmtTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__["TableDataSource"]({
            enableSelection: false,
            allowMultiSelect: false,
            columns: [
                {
                    field: 'isManaged',
                    translateKey: this.getTranslateKey('isManaged'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__["ColumnAlignment"].CENTER,
                    width: '10%'
                },
                {
                    field: 'groupName',
                    translateKey: this.getTranslateKey('groupName'),
                    width: '60%'
                },
                {
                    field: 'isVisible',
                    translateKey: this.getTranslateKey('isVisible'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__["ColumnAlignment"].CENTER,
                    width: '10%'
                },
                {
                    field: 'isReadOnly',
                    translateKey: this.getTranslateKey('isReadOnly'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__["ColumnAlignment"].CENTER,
                    width: '10%'
                },
                {
                    field: 'isMandatory',
                    translateKey: this.getTranslateKey('isMandatory'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__["ColumnAlignment"].CENTER,
                    width: '10%'
                }
            ],
            data: []
        });
    };
    /*************************************************************************
     * SCREEN OPERAIONS
     *************************************************************************/
    WorkflowManagementFormComponent.prototype.reload = function () {
        this.init();
    };
    WorkflowManagementFormComponent.prototype.editScenario = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write);
    };
    WorkflowManagementFormComponent.prototype.cancel = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read);
        this.reload();
    };
    /*************************************************************************
     * LOAD DROPDOWNS DATA
     *************************************************************************/
    WorkflowManagementFormComponent.prototype.loadDropdowns = function () {
        var _this = this;
        this.workflowManagementFormService.getInternationalizedFuncObject().subscribe(function (response) { return (_this.functionObjectList = response); }, function (error) {
            _this.messageService.showErrorMessage('global.internalServerError');
        });
    };
    WorkflowManagementFormComponent.prototype.getFunctionObjectKey = function () {
        var _this = this;
        var labelValue = this.functionObjectList && this.functionObjectList.find(function (lv) { return lv.value === "" + _this.selectedFuncObjectId; });
        return labelValue && labelValue.key;
    };
    WorkflowManagementFormComponent.prototype.getStatusObjectListKey = function () {
        return _shared_constants_function_object_constants__WEBPACK_IMPORTED_MODULE_6__["FunctionObjectConstants"].getPropertyListKeyByFuncObjKey(this.getFunctionObjectKey());
    };
    WorkflowManagementFormComponent.prototype.loadStatusList = function () {
        var _this = this;
        var propertyListKey = _shared_constants_function_object_constants__WEBPACK_IMPORTED_MODULE_6__["FunctionObjectConstants"].getPropertyListKeyByFuncObjKey(this.getFunctionObjectKey());
        if (propertyListKey) {
            this.propertiesService.getValue(propertyListKey).subscribe(function (results) {
                _this.statusObjectList = __spread(results);
                _this.currentStatusObjectListKey = propertyListKey;
                _this.targetStatusTableDataSource.setData(_this.statusObjectList.map(function (lv) { return ({
                    statusName: lv.label,
                    statusKey: lv.value,
                    isAffected: false
                }); }));
                _this.statusObjectList.unshift({
                    value: _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_17__["WorkflowUtils"].ALL_STATUS,
                    label: _this.translateService.instant(_this.getTranslateKey('allStatus'))
                });
            }, function (error) {
                _this.messageService.showErrorMessage('global.internalServerError');
            });
        }
        else {
            this.statusObjectList = undefined;
            this.currentStatusObjectListKey = undefined;
        }
    };
    WorkflowManagementFormComponent.prototype.showTargetStatusTable = function () {
        return !!this.statusObjectList && this.bidtScenario.initialStatusKey !== _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_17__["WorkflowUtils"].ALL_STATUS;
    };
    /*************************************************************************
     * LOAD ATTRIBUTES
     *************************************************************************/
    WorkflowManagementFormComponent.prototype.loadAttributes = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])({
            resultsBire: this.attributesSearchService.getAllEngineeringAttributeList(),
            resultsBido: this.attributesSearchService.getAllFleetAttributeList()
        }).subscribe(function (results) {
            if (results) {
                _this.bireAttributes = results.resultsBire;
                _this.bidoAttributes = results.resultsBido;
                _this.fillControlMgmtTable(__spread(_this.controlMgmtTableDataSource.dataSrc, _this.forbiddenAttributeControls));
            }
        });
    };
    /*************************************************************************
     * LOAD TABLES DATA
     *************************************************************************/
    WorkflowManagementFormComponent.prototype.load = function () {
        var _this = this;
        var bidtScenarioDTO = {
            id: undefined
        };
        if (!!this.componentData.objectId) {
            bidtScenarioDTO.id = this.serializationService.deserialize(this.componentData.objectId);
        }
        else {
            this.displayComponentContext('tab.createMode', this.isCreateOpenMode);
        }
        this.isLoadingData = true;
        this.workflowManagementFormService.searchScenarioByCriteria(bidtScenarioDTO).subscribe(function (response) {
            if (!!response) {
                if (!!response.bidtScenarioDTO) {
                    _this.bidtScenario = response.bidtScenarioDTO;
                    _this.selectedFuncObjectId = !!_this.bidtScenario.bidtFuncObjectId
                        ? _this.bidtScenario.bidtFuncObjectId.toString()
                        : undefined;
                    _this.loadStatusList();
                    _this.displayComponentContext(_this.bidtScenario.name, _this.isCreateOpenMode);
                    _this.subtitle = _this.bidtScenario.name;
                }
                if (!!response.bidtScenProfileGroupList && response.bidtScenProfileGroupList.length > 0) {
                    _this.profilesTableDataSource.setData(response.bidtScenProfileGroupList);
                    _this.profilesTableDataSource.update();
                }
                if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_15__["ObjectUtils"].isDefined(bidtScenarioDTO.id) && // Ignoring target status list in creation mode.
                    !!response.bidtScenStatusGroupList &&
                    response.bidtScenStatusGroupList.length > 0) {
                    _this.targetStatusTableDataSource.setData(response.bidtScenStatusGroupList);
                    _this.targetStatusTableDataSource.update();
                }
                if (!!response.bidtScenarioControlGroupList && response.bidtScenarioControlGroupList.length > 0) {
                    _this.fillControlMgmtTable(response.bidtScenarioControlGroupList);
                }
            }
            _this.profilesTableDataSource.update();
            _this.isLoadingData = false;
        }, function (error) {
            _this.messageService.showErrorMessage('global.internalServerError');
            _this.isLoadingData = false;
        });
    };
    WorkflowManagementFormComponent.prototype.fillControlMgmtTable = function (data) {
        var _this = this;
        var controlMgmtList = data.map(function (row) { return ({
            bidtControlGroupData: row.bidtControlGroupData,
            bidtControlGroupId: row.bidtControlGroupId,
            bidtScenarioId: row.bidtScenarioId,
            description: row.bidtControlGroupData
                ? _this.translateControlKey(row.bidtControlGroupData.description)
                : undefined,
            isManaged: !!row.isManaged ? row.isManaged : false,
            isMandatory: !!row.isMandatory ? row.isMandatory : false,
            isReadOnly: !!row.isReadOnly ? row.isReadOnly : false,
            isVisible: !!row.isVisible ? row.isVisible : false,
            groupName: row.bidtControlGroupData ? _this.translateControlKey(row.bidtControlGroupData.name) : undefined
        }); });
        // Removing lines without name => Attribute unknown or fordidden (by mandant)
        this.forbiddenAttributeControls = controlMgmtList.filter(function (row) { return row.groupName === undefined; });
        controlMgmtList.sort(function (a, b) {
            if (a.groupName) {
                if (b.groupName) {
                    return a.groupName.localeCompare(b.groupName);
                }
                else {
                    return 1;
                }
            }
            else {
                return -1;
            }
        });
        this.controlMgmtTableDataSource.setData(controlMgmtList.filter(function (row) { return row.groupName !== undefined; }));
        this.controlMgmtTableDataSource.update();
    };
    WorkflowManagementFormComponent.prototype.translateControlKey = function (key) {
        var translation;
        if (key) {
            var attibuteField = _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_17__["WorkflowUtils"].controlGroupTranslationKeyToAttributeField(key);
            translation = attibuteField
                ? this.translateAttribute(attibuteField)
                : this.translateService.instant(this.getTranslateKey(key));
        }
        return translation;
    };
    WorkflowManagementFormComponent.prototype.translateAttribute = function (attributeField) {
        var translation;
        var attributes;
        if (attributeField.attributeOrigin === _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_17__["WorkflowUtils"].ORIGIN_BIRE) {
            attributes = this.bireAttributes;
        }
        else if (attributeField.attributeOrigin === _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_17__["WorkflowUtils"].ORIGIN_BIDO) {
            attributes = this.bidoAttributes;
        }
        if (attributes) {
            var attributeValue = attributes.find(function (attribute) { return attribute.attributeId === attributeField.attributeId; });
            if (attributeValue) {
                translation = this.translateService.instant(this.getTranslateKey("attributeControl." + attributeField.attributeField), {
                    content: attributeValue["attribute" + _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__["StringUtils"].firstLetterToUpper(attributeField.attributeField) + _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_16__["StringUtils"].firstLetterToUpper(this.translateService.currentLang)] || ''
                });
            }
        }
        return translation;
    };
    /*************************************************************************
     * Fetch Control Management Table List
     *************************************************************************/
    WorkflowManagementFormComponent.prototype.onFuncObjectChange = function () {
        this.fetchControlMgmtList();
        if (this.getStatusObjectListKey() !== this.currentStatusObjectListKey) {
            if (this.bidtScenario) {
                // Removing status that are not relevant anymore
                this.bidtScenario.initialStatusKey = undefined;
                this.bidtScenario.targetStatusKeyList = undefined;
            }
            this.loadStatusList();
        }
    };
    WorkflowManagementFormComponent.prototype.fetchControlMgmtList = function () {
        var _this = this;
        if (!!this.selectedFuncObjectId) {
            this.bidtScenario.bidtFuncObjectId = parseInt(this.selectedFuncObjectId, 10);
            this.workflowManagementFormService
                .getControlMgmtTableData(this.bidtScenario)
                .subscribe(function (response) {
                if (!!response && !!response.bidtScenarioControlGroupList) {
                    _this.fillControlMgmtTable(response.bidtScenarioControlGroupList);
                }
            });
        }
    };
    /*************************************************************************
     * SAVE
     *************************************************************************/
    WorkflowManagementFormComponent.prototype.saveScenario = function () {
        var _this = this;
        if (this.isScreenValidated()) {
            if (this.isCreateOpenMode) {
                this.bidtScenario.bidtFuncObjectId = parseInt(this.selectedFuncObjectId, 10);
                this.bidtScenario.id = undefined;
            }
            var saveWorkflowManagementInputDTO = {
                bidtScenarioDataCustomOutputDTO: {
                    bidtScenarioDTO: this.bidtScenario,
                    bidtScenProfileGroupList: this.profilesTableDataSource.dataSrc,
                    bidtScenStatusGroupList: this.targetStatusTableDataSource.dataSrc,
                    bidtScenarioControlGroupList: __spread(this.controlMgmtTableDataSource.dataSrc, this.forbiddenAttributeControls)
                },
                isScenarioUpdated: this.openMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Create ? false : true
            };
            this.showSaveSpinner = true;
            this.workflowManagementFormService.saveWorkflowManagement(saveWorkflowManagementInputDTO).subscribe(function (response) {
                _this.showSaveSpinner = false;
                if (_this.isCreateOpenMode && !!response) {
                    _this.componentData.objectId = _this.serializationService.serialize(response);
                }
                _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read);
                _this.messageService.showSuccessMessage(_this.getTranslateKey('onSaveSuccess'));
                _this.reload();
            }, function (error) {
                _this.messageService.showErrorMessage('global.errorOnSave');
                _this.showSaveSpinner = false;
            });
        }
        else {
            this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
        }
    };
    WorkflowManagementFormComponent.prototype.isScreenValidated = function () {
        if (!!this.selectedFuncObjectId && !!this.bidtScenario.name) {
            return true;
        }
        return false;
    };
    var WorkflowManagementFormComponent_1;
    WorkflowManagementFormComponent.MAIN_DATA_ANCHOR_ID = 'mainDataAnchor';
    WorkflowManagementFormComponent.MAIN_INFORMATION_ANCHOR_ID = 'mainInformationAnchor';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(WorkflowManagementFormComponent_1.MAIN_INFORMATION_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WorkflowManagementFormComponent.prototype, "mainInformationEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(WorkflowManagementFormComponent_1.MAIN_DATA_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WorkflowManagementFormComponent.prototype, "mainDataEltRef", void 0);
    WorkflowManagementFormComponent = WorkflowManagementFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-workflow-management-form',
            template: __webpack_require__(/*! ./workflow-management-form.component.html */ "./src/app/main/administration/workflow-management/form/workflow-management-form.component.html"),
            styles: [__webpack_require__(/*! ./workflow-management-form.component.scss */ "./src/app/main/administration/workflow-management/form/workflow-management-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__["TabService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_3__["PageTocService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _workflow_management_form_service__WEBPACK_IMPORTED_MODULE_19__["WorkflowManagementFormService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__["PropertiesService"],
            _attributes_search_attributes_search_service__WEBPACK_IMPORTED_MODULE_18__["AttributesSearchService"]])
    ], WorkflowManagementFormComponent);
    return WorkflowManagementFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_14__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/administration/workflow-management/form/workflow-management-form.service.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/administration/workflow-management/form/workflow-management-form.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: WorkflowManagementFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowManagementFormService", function() { return WorkflowManagementFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_api_bidt_func_object_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/bidt-func-object.api */ "./src/app/shared/api/bidt-func-object.api.ts");
/* harmony import */ var _shared_api_workflow_import_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/workflow-import.api */ "./src/app/shared/api/workflow-import.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_types_api_types_bidt_scenario_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/types/api-types/bidt-scenario.api */ "./src/app/shared/types/api-types/bidt-scenario.api.ts");
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









var WorkflowManagementFormService = /** @class */ (function (_super) {
    __extends(WorkflowManagementFormService, _super);
    function WorkflowManagementFormService(http, appConfigService, bidtScenarioApi, bidtFuncObjectApi, workflowImportApi, translateService) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtScenarioApi = bidtScenarioApi;
        _this.bidtFuncObjectApi = bidtFuncObjectApi;
        _this.workflowImportApi = workflowImportApi;
        _this.translateService = translateService;
        return _this;
    }
    WorkflowManagementFormService.prototype.searchScenarioByCriteria = function (bidtScenarioDTO) {
        return _super.prototype.post.call(this, this.bidtScenarioApi.searchScenarioByCriteria, bidtScenarioDTO);
    };
    WorkflowManagementFormService.prototype.getControlMgmtTableData = function (bidtScenarioDTO) {
        return _super.prototype.post.call(this, this.bidtScenarioApi.getControlMgmtTableData, bidtScenarioDTO);
    };
    WorkflowManagementFormService.prototype.findAll = function () {
        return _super.prototype.post.call(this, this.bidtFuncObjectApi.findAll);
    };
    WorkflowManagementFormService.prototype.getInternationalizedFuncObject = function () {
        var _this = this;
        return this.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.map(function (lv) { return ({
                value: lv.value,
                key: lv.label,
                label: _this.translateService.instant("FuncObject." + lv.label)
            }); });
        }));
    };
    WorkflowManagementFormService.prototype.saveWorkflowManagement = function (dto) {
        return _super.prototype.post.call(this, this.bidtScenarioApi.saveWorkflowManagement, dto);
    };
    WorkflowManagementFormService.prototype.importWorkflowFromExcel = function (dto) {
        return _super.prototype.post.call(this, this.workflowImportApi.importWorkflowFromExcel, dto);
    };
    WorkflowManagementFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__["AppConfigService"],
            _shared_types_api_types_bidt_scenario_api__WEBPACK_IMPORTED_MODULE_8__["BidtScenarioApi"],
            _shared_api_bidt_func_object_api__WEBPACK_IMPORTED_MODULE_4__["BidtFuncObjectApi"],
            _shared_api_workflow_import_api__WEBPACK_IMPORTED_MODULE_5__["WorkflowImportApi"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], WorkflowManagementFormService);
    return WorkflowManagementFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/administration/workflow-management/search/workflow-management-search.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/administration/workflow-management/search/workflow-management-search.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div class=\"page-subtitle\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button\r\n      id=\"actions\"\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button type=\"button\" mat-menu-item class=\"btn-with-spinner\" (click)=\"exportTable()\">\r\n        <span class=\"lds-hourglass\" *ngIf=\"showExportSpinner\"></span>\r\n        {{ \"global.export\" | translate }}\r\n      </button>\r\n\r\n      <button type=\"button\" mat-menu-item (click)=\"importTable()\">\r\n        {{ \"global.import\" | translate }}\r\n      </button>\r\n\r\n      <button type=\"button\" mat-menu-item (click)=\"refresh()\">\r\n        {{ \"global.refresh\" | translate }}\r\n      </button>\r\n\r\n      <button id=\"favorites\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.results\" | translate }} ({{ workflowTableDataSource.dataCount }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <a-table [dataSource]=\"workflowTableDataSource\">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    color=\"warn\"\r\n                    (click)=\"deleteSelectedScenario(workflowTableDataSource.dataSelection)\"\r\n                    *ngIf=\"hasManageAccessRight && workflowTableDataSource.hasDataSelection\"\r\n                  >\r\n                    {{ \"global.delete\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"openSelectedScenario(workflowTableDataSource.dataSelection)\"\r\n                    *ngIf=\"workflowTableDataSource.hasDataSelection\"\r\n                  >\r\n                    {{ \"global.open\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"duplicateSelectedScenario()\"\r\n                    *ngIf=\"workflowTableDataSource.hasDataSelection\"\r\n                  >\r\n                    {{ \"global.duplicate\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"openNewScenario()\"\r\n                    *ngIf=\"!workflowTableDataSource.hasDataSelection\"\r\n                  >\r\n                    {{ \"global.add\" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef=\"bidtFuncObjectLabel\" let-rowData=\"rowData\">\r\n                  <span>{{ \"FuncObject.\" + rowData.bidtFuncObjectLabel | translate }}</span>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef=\"targetStatusKeyList\" let-rowData=\"rowData\">\r\n                  <span\r\n                    *ngIf=\"!!rowData.targetStatusKeyList && rowData.targetStatusKeyList.length > 0\"\r\n                    pTooltip=\"{{ rowData['targetStatusTooltip'] }}\"\r\n                    tooltipPosition=\"bottom\"\r\n                  >\r\n                    {{ rowData.selectedStatusLabel }}\r\n                  </span>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef=\"bidtScenarioProfileList\" let-rowData=\"rowData\">\r\n                  <span\r\n                    *ngIf=\"!!rowData.bidtScenarioProfileList && rowData.bidtScenarioProfileList.length > 0\"\r\n                    pTooltip=\"{{ rowData['profileTooltip'] }}\"\r\n                    tooltipPosition=\"bottom\"\r\n                  >\r\n                    {{ rowData.selectedProfileVal }}\r\n                  </span>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-import-scenario\r\n  *ngIf=\"showImportDialog\"\r\n  [(display)]=\"showImportDialog\"\r\n  (onValidate)=\"onImportScenario($event)\"\r\n></aw-dialog-import-scenario>\r\n"

/***/ }),

/***/ "./src/app/main/administration/workflow-management/search/workflow-management-search.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/administration/workflow-management/search/workflow-management-search.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWRtaW5pc3RyYXRpb24vd29ya2Zsb3ctbWFuYWdlbWVudC9zZWFyY2gvd29ya2Zsb3ctbWFuYWdlbWVudC1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main/administration/workflow-management/search/workflow-management-search.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/administration/workflow-management/search/workflow-management-search.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: WorkflowManagementSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowManagementSearchComponent", function() { return WorkflowManagementSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utils/workflow-utils */ "./src/app/shared/utils/workflow-utils.ts");
/* harmony import */ var _workflow_management_search_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./workflow-management-search.service */ "./src/app/main/administration/workflow-management/search/workflow-management-search.service.ts");
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















var WorkflowManagementSearchComponent = /** @class */ (function (_super) {
    __extends(WorkflowManagementSearchComponent, _super);
    function WorkflowManagementSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, translateService, workflowManagementSearchService, confirmationService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.translateService = translateService;
        _this.workflowManagementSearchService = workflowManagementSearchService;
        _this.confirmationService = confirmationService;
        _this.initWorkflowTableDataSource();
        return _this;
    }
    WorkflowManagementSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].ADM_WORKFLOW_MANAGEMENT_SEARCH;
    };
    WorkflowManagementSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
        this.init();
    };
    /*************************************************************************
     * SCREEN OPERATIONS
     *************************************************************************/
    WorkflowManagementSearchComponent.prototype.init = function () {
        this.load();
    };
    WorkflowManagementSearchComponent.prototype.refresh = function () {
        this.init();
    };
    /*************************************************************************
     * SET SCENARIO TABLE COLUMNS
     *************************************************************************/
    WorkflowManagementSearchComponent.prototype.initWorkflowTableDataSource = function () {
        this.workflowTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'name',
                    translateKey: this.getTranslateKey('name'),
                    width: '20%'
                },
                {
                    field: 'bidtFuncObjectLabel',
                    translateKey: this.getTranslateKey('bidtFuncObjectLabel'),
                    width: '20%'
                },
                {
                    field: 'initialStatusLabel',
                    translateKey: this.getTranslateKey('initialStatusLabel'),
                    width: '20%'
                },
                {
                    field: 'targetStatusKeyList',
                    translateKey: this.getTranslateKey('targetStatusKeyList'),
                    width: '20%'
                },
                {
                    field: 'bidtScenarioProfileList',
                    translateKey: this.getTranslateKey('bidtScenarioProfileList'),
                    width: '20%'
                }
            ],
            data: []
        });
    };
    /*************************************************************************
     * LOAD SCENARIO TABLE RESULTS
     *************************************************************************/
    WorkflowManagementSearchComponent.prototype.load = function () {
        var _this = this;
        var bidtScenarioFindByCriteriaInputDTO = {
            bidtScenarioDTO: {}
        };
        this.showTableLoadingSpinner = true;
        this.workflowManagementSearchService.findByCriteria(bidtScenarioFindByCriteriaInputDTO).subscribe(function (response) {
            if (!!response && response.length > 0) {
                response.forEach(function (res) {
                    if (!!res && !!res.bidtScenarioProfileList) {
                        res.selectedProfileVal = res.bidtScenarioProfileList[0].value;
                        _this.setProfile(res);
                    }
                    // TODO: need confirmation of this behavior as always [...] is displayed in legacy
                    if (!!res && !!res.targetStatusKeyList && res.targetStatusKeyList.length > 0) {
                        res.selectedStatusLabel = '[...]';
                    }
                    _this.setTooltip(res);
                    res.selectedStatusLabel = '';
                    if (res.targetStatusKeyList) {
                        for (var i = 0; i < res.targetStatusKeyList.length; i++) {
                            if (res.targetStatusKeyList[i].label !== '[...]') {
                                if (i === res.targetStatusKeyList.length - 1) {
                                    res.selectedStatusLabel = res.selectedStatusLabel + res.targetStatusKeyList[i].label;
                                }
                                else {
                                    res.selectedStatusLabel = res.selectedStatusLabel + res.targetStatusKeyList[i].label + ', ';
                                }
                            }
                        }
                    }
                    res.selectedProfileVal = '';
                    if (res.bidtScenarioProfileList) {
                        for (var i = 0; i < res.bidtScenarioProfileList.length; i++) {
                            if (res.bidtScenarioProfileList[i].label !== '[...]') {
                                if (i === res.bidtScenarioProfileList.length - 1) {
                                    res.selectedProfileVal = res.selectedProfileVal + res.bidtScenarioProfileList[i].label;
                                }
                                else {
                                    res.selectedProfileVal = res.selectedProfileVal + res.bidtScenarioProfileList[i].label + ', ';
                                }
                            }
                        }
                    }
                    if (_shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_13__["WorkflowUtils"].ALL_STATUS === res.initialStatusKey) {
                        res.initialStatusLabel = _this.translateService.instant(_this.getTranslateKey('allStatus'));
                    }
                });
            }
            _this.workflowTableDataSource.setData(response);
            _this.workflowTableDataSource.update();
            _this.showTableLoadingSpinner = false;
        }, function (error) {
            _this.showTableLoadingSpinner = false;
        });
    };
    WorkflowManagementSearchComponent.prototype.setTooltip = function (rowData) {
        var profileTooltip = [];
        if (!!rowData && !!rowData.bidtScenarioProfileList && rowData.bidtScenarioProfileList.length > 0) {
            rowData.bidtScenarioProfileList.forEach(function (res) {
                if (res.label !== '[...]') {
                    profileTooltip.push(res.label);
                }
            });
            rowData.profileTooltip = profileTooltip.toString();
        }
        var statusTootip = [];
        if (!!rowData && !!rowData.targetStatusKeyList && rowData.targetStatusKeyList.length > 0) {
            rowData.targetStatusKeyList.forEach(function (res) {
                if (res.label !== '[...]') {
                    statusTootip.push(res.label);
                }
            });
            rowData.targetStatusTooltip = statusTootip.toString();
        }
    };
    /*************************************************************************
     * EXPORT TABLE
     *************************************************************************/
    WorkflowManagementSearchComponent.prototype.exportTable = function () {
        var _this = this;
        this.showExportSpinner = true;
        this.workflowManagementSearchService.generateXlsWorkFlow().subscribe(function (result) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_12__["FileUtils"].downloadFile(result.fileContent, result.fileName);
            _this.showExportSpinner = false;
        }, function (error) {
            _this.showExportSpinner = false;
        });
    };
    /*************************************************************************
     * IMPORT TABLE
     *************************************************************************/
    WorkflowManagementSearchComponent.prototype.importTable = function () {
        this.showImportDialog = true;
    };
    WorkflowManagementSearchComponent.prototype.onImportScenario = function ($event) {
        this.refresh();
    };
    /*************************************************************************
     * OPEN/CREATE SCENARIO
     *************************************************************************/
    WorkflowManagementSearchComponent.prototype.openNewScenario = function () {
        this.openScenario(undefined, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Create);
    };
    WorkflowManagementSearchComponent.prototype.openSelectedScenario = function () {
        var _this = this;
        this.workflowTableDataSource.dataSelection.forEach(function (scenario) {
            if (!!scenario) {
                _this.openScenario(scenario, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read);
            }
        });
    };
    WorkflowManagementSearchComponent.prototype.duplicateSelectedScenario = function () {
        var _this = this;
        this.workflowTableDataSource.dataSelection.forEach(function (scenario) {
            if (!!scenario) {
                _this.openScenario(scenario, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Create);
            }
        });
    };
    WorkflowManagementSearchComponent.prototype.openScenario = function (objectId, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].ADM_WORKFLOW_MANAGEMENT_FORM,
            openMode: openMode
        };
        if (!!objectId && !!objectId.id) {
            data.objectId = this.serializationService.serialize(objectId.id);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    /*************************************************************************
     * DELETE SCENARIO
     *************************************************************************/
    WorkflowManagementSearchComponent.prototype.deleteSelectedScenario = function () {
        var _this = this;
        var confirmMessageKey = this.workflowTableDataSource.dataSelectionCount > 1
            ? 'confirmDeleteSelectedScenarios'
            : 'confirmDeleteSelectedScenario';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(confirmMessageKey),
            accept: function () {
                var idList = [];
                _this.workflowTableDataSource.dataSelection.forEach(function (row) {
                    idList.push(row.id);
                });
                _this.workflowManagementSearchService.deleteScenId(idList).subscribe(function (result) {
                    _this.workflowTableDataSource.dataSelection = [];
                    _this.refresh();
                }, function (error) {
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('errorOnDeletion'));
                });
            }
        });
    };
    /**
     * Filtering
     */
    WorkflowManagementSearchComponent.prototype.setProfile = function (rowData) {
        if (!!rowData && !!rowData.bidtScenarioProfileList) {
            if (!!rowData.selectedProfileVal) {
                rowData.selectedProfileLabel = rowData.bidtScenarioProfileList.filter(function (row) {
                    return row.value === rowData.selectedProfileVal;
                })[0].label;
            }
            else {
                rowData.selectedProfileLabel = '[...]';
            }
        }
    };
    WorkflowManagementSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-workflow-management-search',
            template: __webpack_require__(/*! ./workflow-management-search.component.html */ "./src/app/main/administration/workflow-management/search/workflow-management-search.component.html"),
            styles: [__webpack_require__(/*! ./workflow-management-search.component.scss */ "./src/app/main/administration/workflow-management/search/workflow-management-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__["TabService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _workflow_management_search_service__WEBPACK_IMPORTED_MODULE_14__["WorkflowManagementSearchService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]])
    ], WorkflowManagementSearchComponent);
    return WorkflowManagementSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_11__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/administration/workflow-management/search/workflow-management-search.service.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/administration/workflow-management/search/workflow-management-search.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: WorkflowManagementSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowManagementSearchService", function() { return WorkflowManagementSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_workflow_export_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/workflow-export.api */ "./src/app/shared/api/workflow-export.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_types_api_types_bidt_scenario_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/types/api-types/bidt-scenario.api */ "./src/app/shared/types/api-types/bidt-scenario.api.ts");
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






var WorkflowManagementSearchService = /** @class */ (function (_super) {
    __extends(WorkflowManagementSearchService, _super);
    function WorkflowManagementSearchService(http, appConfigService, bidtScenarioApi, workflowExportApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtScenarioApi = bidtScenarioApi;
        _this.workflowExportApi = workflowExportApi;
        return _this;
    }
    /**
     * Search table records
     */
    WorkflowManagementSearchService.prototype.findByCriteria = function (bidtScenarioFindByCriteriaInputDTO) {
        return _super.prototype.post.call(this, this.bidtScenarioApi.findByCriteria, bidtScenarioFindByCriteriaInputDTO);
    };
    /**
     * Export Workflow
     */
    WorkflowManagementSearchService.prototype.generateXlsWorkFlow = function () {
        return _super.prototype.post.call(this, this.workflowExportApi.generateXlsWorkFlow);
    };
    /**
     * Delete selected records
     */
    WorkflowManagementSearchService.prototype.deleteScenId = function (idList) {
        return _super.prototype.post.call(this, this.bidtScenarioApi.delete, idList);
    };
    WorkflowManagementSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_types_api_types_bidt_scenario_api__WEBPACK_IMPORTED_MODULE_5__["BidtScenarioApi"],
            _shared_api_workflow_export_api__WEBPACK_IMPORTED_MODULE_2__["WorkflowExportApi"]])
    ], WorkflowManagementSearchService);
    return WorkflowManagementSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/administration/workflow-management/workflow-management.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/administration/workflow-management/workflow-management.module.ts ***!
  \***************************************************************************************/
/*! exports provided: API_PROVIDERS, WorkflowManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_PROVIDERS", function() { return API_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowManagementModule", function() { return WorkflowManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_api_bidt_func_object_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/api/bidt-func-object.api */ "./src/app/shared/api/bidt-func-object.api.ts");
/* harmony import */ var _shared_api_workflow_export_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/api/workflow-export.api */ "./src/app/shared/api/workflow-export.api.ts");
/* harmony import */ var _shared_api_workflow_import_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/api/workflow-import.api */ "./src/app/shared/api/workflow-import.api.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ "./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _shared_types_api_types_bidt_scenario_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/types/api-types/bidt-scenario.api */ "./src/app/shared/types/api-types/bidt-scenario.api.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _attributes_search_attributes_search_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../attributes/search/attributes-search.service */ "./src/app/main/administration/attributes/search/attributes-search.service.ts");
/* harmony import */ var _form_dialog_import_scenario_dialog_import_scenario_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./form/dialog-import-scenario/dialog-import-scenario.component */ "./src/app/main/administration/workflow-management/form/dialog-import-scenario/dialog-import-scenario.component.ts");
/* harmony import */ var _form_dialog_import_scenario_dialog_imported_message_dialog_imported_message_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form/dialog-import-scenario/dialog-imported-message/dialog-imported-message.component */ "./src/app/main/administration/workflow-management/form/dialog-import-scenario/dialog-imported-message/dialog-imported-message.component.ts");
/* harmony import */ var _form_workflow_management_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./form/workflow-management-form.component */ "./src/app/main/administration/workflow-management/form/workflow-management-form.component.ts");
/* harmony import */ var _form_workflow_management_form_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./form/workflow-management-form.service */ "./src/app/main/administration/workflow-management/form/workflow-management-form.service.ts");
/* harmony import */ var _search_workflow_management_search_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./search/workflow-management-search.component */ "./src/app/main/administration/workflow-management/search/workflow-management-search.component.ts");
/* harmony import */ var _search_workflow_management_search_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./search/workflow-management-search.service */ "./src/app/main/administration/workflow-management/search/workflow-management-search.service.ts");
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
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_1__["CheckboxModule"],
    _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_13__["ComponentSidebarModule"],
    primeng_dialog__WEBPACK_IMPORTED_MODULE_2__["DialogModule"],
    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_15__["ModalModule"],
    primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"]
];
var INTERNAL_MODULES = [_shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_16__["TableModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_form_dialog_import_scenario_dialog_import_scenario_component__WEBPACK_IMPORTED_MODULE_20__["DialogImportScenarioComponent"], _form_dialog_import_scenario_dialog_imported_message_dialog_imported_message_component__WEBPACK_IMPORTED_MODULE_21__["DialogImportedMessageComponent"]];
var DYNAMIC_COMPONENTS = [_form_workflow_management_form_component__WEBPACK_IMPORTED_MODULE_22__["WorkflowManagementFormComponent"], _search_workflow_management_search_component__WEBPACK_IMPORTED_MODULE_24__["WorkflowManagementSearchComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [
    _form_workflow_management_form_service__WEBPACK_IMPORTED_MODULE_23__["WorkflowManagementFormService"],
    _search_workflow_management_search_service__WEBPACK_IMPORTED_MODULE_25__["WorkflowManagementSearchService"],
    _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_14__["PageTocService"],
    _attributes_search_attributes_search_service__WEBPACK_IMPORTED_MODULE_19__["AttributesSearchService"]
];
var API_PROVIDERS = [_shared_types_api_types_bidt_scenario_api__WEBPACK_IMPORTED_MODULE_17__["BidtScenarioApi"], _shared_api_workflow_export_api__WEBPACK_IMPORTED_MODULE_10__["WorkflowExportApi"], _shared_api_bidt_func_object_api__WEBPACK_IMPORTED_MODULE_9__["BidtFuncObjectApi"], _shared_api_workflow_import_api__WEBPACK_IMPORTED_MODULE_11__["WorkflowImportApi"]];
var WorkflowManagementModule = /** @class */ (function () {
    function WorkflowManagementModule() {
    }
    WorkflowManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_7__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_8__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_12__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES, API_PROVIDERS)
        })
    ], WorkflowManagementModule);
    return WorkflowManagementModule;
}());



/***/ }),

/***/ "./src/app/shared/api/bidt-func-object.api.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/api/bidt-func-object.api.ts ***!
  \****************************************************/
/*! exports provided: BidtFuncObjectApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidtFuncObjectApi", function() { return BidtFuncObjectApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.api */ "./src/app/shared/api/abstract.api.ts");
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


var BidtFuncObjectApi = /** @class */ (function (_super) {
    __extends(BidtFuncObjectApi, _super);
    // public readonly delete: string = super.appendToBaseUrl('/delete');
    // public readonly getById: string = super.appendToBaseUrl('/get_by_id');
    // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');
    function BidtFuncObjectApi() {
        var _this = _super.call(this, BidtFuncObjectApi_1.baseUrl) || this;
        _this.findAll = _super.prototype.appendToBaseUrl.call(_this, '/find_all');
        return _this;
    }
    BidtFuncObjectApi_1 = BidtFuncObjectApi;
    var BidtFuncObjectApi_1;
    BidtFuncObjectApi.baseUrl = '/bidt_func_object';
    BidtFuncObjectApi = BidtFuncObjectApi_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BidtFuncObjectApi);
    return BidtFuncObjectApi;
}(_abstract_api__WEBPACK_IMPORTED_MODULE_1__["AbstractApi"]));



/***/ }),

/***/ "./src/app/shared/api/workflow-export.api.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/api/workflow-export.api.ts ***!
  \***************************************************/
/*! exports provided: WorkflowExportApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowExportApi", function() { return WorkflowExportApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.api */ "./src/app/shared/api/abstract.api.ts");
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


var WorkflowExportApi = /** @class */ (function (_super) {
    __extends(WorkflowExportApi, _super);
    function WorkflowExportApi() {
        var _this = _super.call(this, WorkflowExportApi_1.baseUrl) || this;
        _this.generateXlsWorkFlow = _super.prototype.appendToBaseUrl.call(_this, '/generate_xls_work_flow');
        return _this;
    }
    WorkflowExportApi_1 = WorkflowExportApi;
    var WorkflowExportApi_1;
    WorkflowExportApi.baseUrl = '/workflow_export';
    WorkflowExportApi = WorkflowExportApi_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WorkflowExportApi);
    return WorkflowExportApi;
}(_abstract_api__WEBPACK_IMPORTED_MODULE_1__["AbstractApi"]));



/***/ }),

/***/ "./src/app/shared/api/workflow-import.api.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/api/workflow-import.api.ts ***!
  \***************************************************/
/*! exports provided: WorkflowImportApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowImportApi", function() { return WorkflowImportApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.api */ "./src/app/shared/api/abstract.api.ts");
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


var WorkflowImportApi = /** @class */ (function (_super) {
    __extends(WorkflowImportApi, _super);
    function WorkflowImportApi() {
        var _this = _super.call(this, WorkflowImportApi_1.baseUrl) || this;
        // public readonly getXLS: string = super.appendToBaseUrl('/get_xls');
        _this.importWorkflowFromExcel = _super.prototype.appendToBaseUrl.call(_this, '/import_workflow_from_excel');
        return _this;
    }
    WorkflowImportApi_1 = WorkflowImportApi;
    var WorkflowImportApi_1;
    WorkflowImportApi.baseUrl = '/workflow_import';
    WorkflowImportApi = WorkflowImportApi_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WorkflowImportApi);
    return WorkflowImportApi;
}(_abstract_api__WEBPACK_IMPORTED_MODULE_1__["AbstractApi"]));



/***/ }),

/***/ "./src/app/shared/types/api-types/bidt-scenario.api.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/types/api-types/bidt-scenario.api.ts ***!
  \*************************************************************/
/*! exports provided: BidtScenarioApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidtScenarioApi", function() { return BidtScenarioApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_abstract_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/abstract.api */ "./src/app/shared/api/abstract.api.ts");
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


var BidtScenarioApi = /** @class */ (function (_super) {
    __extends(BidtScenarioApi, _super);
    function BidtScenarioApi() {
        var _this = _super.call(this, BidtScenarioApi_1.baseUrl) || this;
        _this.findByCriteria = _super.prototype.appendToBaseUrl.call(_this, '/find_by_criteria');
        // public readonly findByFuncObjectIdAndInitialStatusKeyAndProfileList: string = super.appendToBaseUrl('/find_by_func_object_id_and_initial_status_key_and_profile_list');
        _this.delete = _super.prototype.appendToBaseUrl.call(_this, '/delete');
        // public readonly getById: string = super.appendToBaseUrl('/get_by_id');
        // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');
        // public readonly findByFuncObjectId: string = super.appendToBaseUrl('/find_by_func_object_id');
        // public readonly deleteByFuncObjectId: string = super.appendToBaseUrl('/delete_by_func_object_id');
        _this.searchScenarioByCriteria = _super.prototype.appendToBaseUrl.call(_this, '/search_scenario_by_criteria');
        _this.getControlMgmtTableData = _super.prototype.appendToBaseUrl.call(_this, '/get_control_mgmt_table_data');
        _this.saveWorkflowManagement = _super.prototype.appendToBaseUrl.call(_this, '/save_workflow_management');
        _this.getTodoList = _super.prototype.appendToBaseUrl.call(_this, '/todo_list');
        return _this;
    }
    BidtScenarioApi_1 = BidtScenarioApi;
    var BidtScenarioApi_1;
    BidtScenarioApi.baseUrl = '/bidt_scenario';
    BidtScenarioApi = BidtScenarioApi_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BidtScenarioApi);
    return BidtScenarioApi;
}(_api_abstract_api__WEBPACK_IMPORTED_MODULE_1__["AbstractApi"]));



/***/ })

}]);
//# sourceMappingURL=default~administration-todo-list-todo-list-module~administration-workflow-management-workflow-manage~e5aaf092.js.map