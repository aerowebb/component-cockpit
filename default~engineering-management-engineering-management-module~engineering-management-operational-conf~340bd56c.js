(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~engineering-management-engineering-management-module~engineering-management-operational-conf~340bd56c"],{

/***/ "./src/app/shared/components/dialog-search-model/dialog-search-model.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-model/dialog-search-model.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"50\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ \"modelPopin.modelCode\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"search-dialog-container\">\r\n      <div class=\"section search-criteria-section\">\r\n        <h4 class=\"section-title\">{{ \"global.search\" | translate }}</h4>\r\n\r\n        <div class=\"section-content\">\r\n          <div class=\"column\">\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"modelPopin.modelCode\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.modelCode\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"modelPopin.modelName\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.modelName\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row search-criteria-footer\">\r\n              <div class=\"search-actions\">\r\n                <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"searchModels()\">\r\n                  <span>{{ \"global.toSearch\" | translate }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"section results-section\">\r\n        <h4 class=\"section-title\">\r\n          {{ \"global.results\" | translate }} ({{ resultsTable.list ? resultsTable.list.length : 0 }})\r\n        </h4>\r\n\r\n        <div class=\"section-content\">\r\n          <p-table\r\n            [resizableColumns]=\"true\"\r\n            #ptable\r\n            class=\"aw-table2\"\r\n            [columns]=\"resultsTableCols\"\r\n            [value]=\"resultsTable.list\"\r\n            [(selection)]=\"selectedObject\"\r\n            selectionMode=\"single\"\r\n            dataKey=\"modelCode\"\r\n            [scrollable]=\"true\"\r\n            (onRowUnselect)=\"onRowUnselect()\"\r\n          >\r\n            <ng-template pTemplate=\"emptymessage\">\r\n              <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n              <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                <div class=\"lds-hourglass\"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"caption\">\r\n              <div class=\"aw-table-header\">\r\n                <div class=\"aw-table-global-filter\">\r\n                  <label class=\"aw-table-global-filter-label\">\r\n                    <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    #ptableGlobalFilter\r\n                    class=\"aw-table-global-filter-input\"\r\n                    type=\"text\"\r\n                    placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                    (input)=\"ptable.filterGlobal($event.target.value, 'contains')\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"colgroup\" let-columns>\r\n              <colgroup>\r\n                <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n              <tr>\r\n                <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                  {{ \"modelPopin.\" + col.field | translate }}\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n              <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                  <!-- <span *ngSwitchCase=\"'familyVariant'\">\r\n                    <span *ngIf=\"rowData['familyCode'] && rowData['variantCode']\">\r\n                      {{ rowData[\"familyCode\"] + \"-\" + rowData[\"variantCode\"] }}\r\n                    </span>\r\n                    <span *ngIf=\"rowData['familyCode'] && !rowData['variantCode']\"> {{ rowData[\"familyCode\"] }} </span>\r\n                    <span *ngIf=\"!rowData['familyCode'] && rowData['variantCode']\"> {{ rowData[\"variantCode\"] }} </span>\r\n                  </span> -->\r\n\r\n                  <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button [disabled]=\"isOneObjectSelected()\" color=\"primary\" type=\"button\" mat-raised-button (click)=\"onValidate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-search-model/dialog-search-model.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-model/dialog-search-model.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DialogSearchModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchModelComponent", function() { return DialogSearchModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _dialog_search_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-search-model.service */ "./src/app/shared/components/dialog-search-model/dialog-search-model.service.ts");
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





var DialogSearchModelComponent = /** @class */ (function (_super) {
    __extends(DialogSearchModelComponent, _super);
    function DialogSearchModelComponent(dialogSearchModelService, messageService) {
        var _this = _super.call(this, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'DialogSearchModelComponent') || this;
        _this.dialogSearchModelService = dialogSearchModelService;
        _this.messageService = messageService;
        _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.resultsTable = {
            list: [],
            moreResults: false
        };
        _this.searchObject = {};
        _this.selectedObject = {};
        _this.resultsTableCols = [
            { field: 'modelCode', alignment: 'left' },
            { field: 'modelName', alignment: 'left' },
            { field: 'familyVariant', alignment: 'left' }
        ];
        return _this;
    }
    Object.defineProperty(DialogSearchModelComponent.prototype, "qualificationCode", {
        set: function (code) {
            this.searchObject = {};
            this.searchObject.modelCode = code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogSearchModelComponent.prototype, "familyCode", {
        set: function (familyCode) {
            this.searchObject.familyCode = familyCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogSearchModelComponent.prototype, "variantCode", {
        set: function (variantCode) {
            this.searchObject.variantCode = variantCode;
        },
        enumerable: true,
        configurable: true
    });
    DialogSearchModelComponent.prototype.searchModels = function () {
        var _this = this;
        this.dialogSearchModelService.findModel(this.searchObject).subscribe(function (results) {
            if (results) {
                results.list.forEach(function (element) {
                    element.familyVariant =
                        !!element.familyCode && !!element.variantCode
                            ? element.familyCode + '-' + element.variantCode
                            : !!element.familyCode
                                ? element.familyCode
                                : !!element.variantCode
                                    ? element.variantCode
                                    : '';
                });
                _this.resultsTable = results;
            }
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSearch'));
        });
    };
    /*
      <summary>Emit the selectedObject on validate</summary>
      */
    DialogSearchModelComponent.prototype.onValidate = function () {
        this.onSelected.emit(this.selectedObject);
        this.display = false;
    };
    // Clean the selectedContact object if the row is unselect
    DialogSearchModelComponent.prototype.onRowUnselect = function () {
        this.selectedObject = {};
    };
    // Clean all the object on rerender
    DialogSearchModelComponent.prototype.onShow = function () {
        this.selectedObject = {};
        this.resultsTable = {
            list: [],
            moreResults: false
        };
    };
    /*
      <summary>Close the pop up on cancel</summary>
      */
    DialogSearchModelComponent.prototype.onCancel = function () {
        this.selectedObject = {};
        this.resultsTable = {
            list: [],
            moreResults: false
        };
        this.display = false;
    };
    DialogSearchModelComponent.prototype.isOneObjectSelected = function () {
        return !this.selectedObject.modelCode;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('model-code'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DialogSearchModelComponent.prototype, "qualificationCode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('family-code'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DialogSearchModelComponent.prototype, "familyCode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('variant-code'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DialogSearchModelComponent.prototype, "variantCode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DialogSearchModelComponent.prototype, "onSelected", void 0);
    DialogSearchModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-search-model',
            template: __webpack_require__(/*! ./dialog-search-model.component.html */ "./src/app/shared/components/dialog-search-model/dialog-search-model.component.html")
        }),
        __metadata("design:paramtypes", [_dialog_search_model_service__WEBPACK_IMPORTED_MODULE_4__["DialogSearchModelService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], DialogSearchModelComponent);
    return DialogSearchModelComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/components/dialog-search-model/dialog-search-model.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-model/dialog-search-model.module.ts ***!
  \*************************************************************************************/
/*! exports provided: DialogSearchModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchModelModule", function() { return DialogSearchModelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dialog_search_model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-search-model.component */ "./src/app/shared/components/dialog-search-model/dialog-search-model.component.ts");
/* harmony import */ var _dialog_search_model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-search-model.service */ "./src/app/shared/components/dialog-search-model/dialog-search-model.service.ts");
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
var EXTERNAL_MODULES = [primeng_table__WEBPACK_IMPORTED_MODULE_1__["TableModule"]];
var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_5__["ModalModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_dialog_search_model_component__WEBPACK_IMPORTED_MODULE_6__["DialogSearchModelComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_dialog_search_model_service__WEBPACK_IMPORTED_MODULE_7__["DialogSearchModelService"]];
var DialogSearchModelModule = /** @class */ (function () {
    function DialogSearchModelModule() {
    }
    DialogSearchModelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS),
            exports: __spread(COMPONENTS),
            imports: __spread([
                _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__["AngularCommonSharedModule"],
                _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__["AngularGenericTemplatesSharedModule"],
                _app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonSharedModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], DialogSearchModelModule);
    return DialogSearchModelModule;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-search-model/dialog-search-model.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-model/dialog-search-model.service.ts ***!
  \**************************************************************************************/
/*! exports provided: DialogSearchModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchModelService", function() { return DialogSearchModelService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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





var DialogSearchModelService = /** @class */ (function (_super) {
    __extends(DialogSearchModelService, _super);
    function DialogSearchModelService(http, appConfigService, productStructureManagement) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.productStructureManagement = productStructureManagement;
        return _this;
    }
    DialogSearchModelService.prototype.findModel = function (criteria) {
        return _super.prototype.post.call(this, this.productStructureManagement.findBireModelsBySearchCriteriaForOVS, criteria);
    };
    DialogSearchModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__["ProductStructureManagementApi"]])
    ], DialogSearchModelService);
    return DialogSearchModelService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ })

}]);
//# sourceMappingURL=default~engineering-management-engineering-management-module~engineering-management-operational-conf~340bd56c.js.map