(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administration-enterprise-definition-enterprise-definition-module"],{

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

/***/ "./src/app/main/administration/enterprise-definition/company/company.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/administration/enterprise-definition/company/company.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ \"company\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".code\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input class=\"aw-input\" type=\"text\" maxlength=\"50\" [(ngModel)]=\"company.companyCode\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".name\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input class=\"aw-input\" type=\"text\" maxlength=\"100\" [(ngModel)]=\"company.companyName\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".type\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              appendTo=\"body\"\r\n              placeholder=\"&nbsp;\"\r\n              [options]=\"companyTypes\"\r\n              [showClear]=\"true\"\r\n              [(ngModel)]=\"company.companyType\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".description\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <textarea\r\n              class=\"aw-textarea\"\r\n              pInputTextarea\r\n              maxlength=\"300\"\r\n              [rows]=\"3\"\r\n              [(ngModel)]=\"company.companyDescription\"\r\n            ></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"cancel\" | translate }}\r\n    </button>\r\n\r\n    <button [disabled]=\"!company.companyCode\" type=\"button\" mat-raised-button (click)=\"save()\">\r\n      {{ \"save\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/administration/enterprise-definition/company/company.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/administration/enterprise-definition/company/company.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EnterpriseDefinitionCompanyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseDefinitionCompanyDialogComponent", function() { return EnterpriseDefinitionCompanyDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_select_option_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/utils/select-option-utils */ "./src/app/shared/utils/select-option-utils.ts");
/* harmony import */ var _enterprise_definition_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enterprise-definition.service */ "./src/app/main/administration/enterprise-definition/enterprise-definition.service.ts");
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









var EnterpriseDefinitionCompanyDialogComponent = /** @class */ (function (_super) {
    __extends(EnterpriseDefinitionCompanyDialogComponent, _super);
    function EnterpriseDefinitionCompanyDialogComponent(enterpriseDefinitionService, messageService, propertiesService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, 'EnterpriseDefinitionCompanyDialogComponent') || this;
        _this.enterpriseDefinitionService = enterpriseDefinitionService;
        _this.messageService = messageService;
        _this.propertiesService = propertiesService;
        _this.onBeforeLoadOnce();
        _this.onBeforeLoad();
        return _this;
    }
    // ////////////////////////////////////////////////////////////////////////////
    EnterpriseDefinitionCompanyDialogComponent.prototype.ngOnInit = function () {
        this.load();
    };
    // ////////////////////////////////////////////////////////////////////////////
    EnterpriseDefinitionCompanyDialogComponent.prototype.save = function () {
        var _this = this;
        this.enterpriseDefinitionService.saveCompany(this.company).subscribe({
            next: function () {
                _this.onSave.emit();
                _this.messageService.showSuccessMessage('successOnSaveCompany');
                _this.closeDialog();
            }
        });
    };
    // ////////////////////////////////////////////////////////////////////////////
    EnterpriseDefinitionCompanyDialogComponent.prototype.onBeforeLoad = function () {
        this.company = {};
    };
    EnterpriseDefinitionCompanyDialogComponent.prototype.onBeforeLoadOnce = function () {
        this.companyTypes = [];
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };
    EnterpriseDefinitionCompanyDialogComponent.prototype.load = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
            company: this.companyId ? this.enterpriseDefinitionService.getCompanyById(this.companyId) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined),
            companyTypes: this.companyTypes.length === 0
                ? this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__["GenericPropertyConstants"].COMPANY_TYPE_MAP)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.companyTypes)
        }).subscribe({
            next: function (_a) {
                var company = _a.company, companyTypes = _a.companyTypes;
                _this.company = company || {};
                _this.companyTypes = companyTypes.sort(_shared_utils_select_option_utils__WEBPACK_IMPORTED_MODULE_7__["SelectOptionUtils"].sort);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EnterpriseDefinitionCompanyDialogComponent.prototype, "companyId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EnterpriseDefinitionCompanyDialogComponent.prototype, "onSave", void 0);
    EnterpriseDefinitionCompanyDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-enterprise-definition-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/main/administration/enterprise-definition/company/company.component.html")
        }),
        __metadata("design:paramtypes", [_enterprise_definition_service__WEBPACK_IMPORTED_MODULE_8__["EnterpriseDefinitionService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__["PropertiesService"]])
    ], EnterpriseDefinitionCompanyDialogComponent);
    return EnterpriseDefinitionCompanyDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/administration/enterprise-definition/enterprise-definition.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/main/administration/enterprise-definition/enterprise-definition.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"results\" | translate }} ({{ enterpriseDefinitionTable.length }})</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-treeTable\r\n                #enterpriseDefinition\r\n                class=\"aw-tree-table2\"\r\n                selectionMode=\"single\"\r\n                [columns]=\"enterpriseDefinitionTableCols\"\r\n                [resizableColumns]=\"true\"\r\n                [scrollable]=\"true\"\r\n                [value]=\"enterpriseDefinitionTable\"\r\n                [(selection)]=\"enterpriseDefinitionTableSelection\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoadingEnterpriseDefinitionTable\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoadingEnterpriseDefinitionTable\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"enterpriseDefinition.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteSelection()\"\r\n                        *ngIf=\"enterpriseDefinitionTableSelection\"\r\n                      >\r\n                        {{ \"delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"editSelection()\"\r\n                        *ngIf=\"enterpriseDefinitionTableSelection\"\r\n                      >\r\n                        {{ \"edit\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openSelection()\"\r\n                        *ngIf=\"enterpriseDefinitionTableSelection && !enterpriseDefinitionTableSelection.data.isCompany\"\r\n                      >\r\n                        {{ \"open\" | translate }}\r\n                      </button>\r\n\r\n                      <p-splitButton\r\n                        class=\"aw-split-btn aw-table-action\"\r\n                        appendTo=\"body\"\r\n                        label=\"{{ 'global.add' | translate }}\"\r\n                        [model]=\"addItems\"\r\n                        *ngIf=\"!enterpriseDefinitionTableSelection\"\r\n                      ></p-splitButton>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th ttResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n                  <tr [ttSelectableRow]=\"rowNode\">\r\n                    <td *ngFor=\"let col of columns; let i = index\" [ngSwitch]=\"col.field\">\r\n                      <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n\r\n                      <span *ngSwitchCase=\"'level'\">\r\n                        <span *ngIf=\"rowData['isCompany']\">{{ \"company\" | translate }}</span>\r\n                        <span *ngIf=\"rowData['isSite']\">{{ \"site\" | translate }}</span>\r\n                        <span *ngIf=\"rowData['isWarehouse']\">{{ \"warehouse\" | translate }}</span>\r\n                        <span *ngIf=\"rowData['isWorkshop']\">{{ \"workshop\" | translate }}</span>\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'type'\">\r\n                        <span *ngIf=\"rowData['isCompany']\">\r\n                          {{ rowData[col.field] | formatSelectOption: companyTypes }}\r\n                        </span>\r\n                        <span *ngIf=\"rowData['isWarehouse']\">\r\n                          {{ rowData[col.field] | formatSelectOption: warehouseTypes }}\r\n                        </span>\r\n                        <span *ngIf=\"rowData['isWorkshop']\">\r\n                          {{ rowData[col.field] | formatSelectOption: workshopTypes }}\r\n                        </span>\r\n                      </span>\r\n\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-treeTable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-enterprise-definition-company\r\n    *ngIf=\"showCompanyDialog\"\r\n    [companyId]=\"this.enterpriseDefinitionTableSelection?.data.id\"\r\n    [(display)]=\"showCompanyDialog\"\r\n    (onSave)=\"reload()\"\r\n  ></aw-enterprise-definition-company>\r\n\r\n  <aw-enterprise-definition-site\r\n    *ngIf=\"showSiteDialog\"\r\n    [siteId]=\"this.enterpriseDefinitionTableSelection?.data.id\"\r\n    [(display)]=\"showSiteDialog\"\r\n    (onSave)=\"reload()\"\r\n  ></aw-enterprise-definition-site>\r\n\r\n  <aw-enterprise-definition-warehouse\r\n    *ngIf=\"showWarehouseDialog\"\r\n    [isWorkshopCategory]=\"false\"\r\n    [warehouseId]=\"this.enterpriseDefinitionTableSelection?.data.id\"\r\n    [(display)]=\"showWarehouseDialog\"\r\n    (onSave)=\"reload()\"\r\n  ></aw-enterprise-definition-warehouse>\r\n\r\n  <aw-enterprise-definition-warehouse\r\n    *ngIf=\"showWorkshopDialog\"\r\n    [isWorkshopCategory]=\"true\"\r\n    [warehouseId]=\"this.enterpriseDefinitionTableSelection?.data.id\"\r\n    [(display)]=\"showWorkshopDialog\"\r\n    (onSave)=\"reload()\"\r\n  ></aw-enterprise-definition-warehouse>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/administration/enterprise-definition/enterprise-definition.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/administration/enterprise-definition/enterprise-definition.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EnterpriseDefinitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseDefinitionComponent", function() { return EnterpriseDefinitionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _enterprise_definition_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./enterprise-definition.service */ "./src/app/main/administration/enterprise-definition/enterprise-definition.service.ts");
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

















var EnterpriseDefinitionComponent = /** @class */ (function (_super) {
    __extends(EnterpriseDefinitionComponent, _super);
    function EnterpriseDefinitionComponent(favoriteService, loaderService, messageService, serializationService, tabService, confirmationService, enterpriseDefinitionService, propertiesService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.confirmationService = confirmationService;
        _this.enterpriseDefinitionService = enterpriseDefinitionService;
        _this.propertiesService = propertiesService;
        _this.translateService = translateService;
        _this.onBeforeLoadOnce();
        _this.onBeforeLoad();
        _this.load();
        return _this;
    }
    // ////////////////////////////////////////////////////////////////////////////
    EnterpriseDefinitionComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].ADM_ENTERPRISE_DEFINITION;
    };
    // ////////////////////////////////////////////////////////////////////////////
    EnterpriseDefinitionComponent.prototype.deleteSelection = function () {
        var _this = this;
        if (this.enterpriseDefinitionTableSelection) {
            var element = this.enterpriseDefinitionTableSelection.data;
            var delete$_1;
            if (element.isCompany) {
                if (_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_15__["ListUtils"].orEmpty(this.enterpriseDefinitionTableSelection.children).length === 0) {
                    delete$_1 = this.deleteCompany(element);
                }
                else {
                    this.messageService.showWarningMessage(this.getTranslateKey('companyHasChildren'));
                }
            }
            else if (element.isSite) {
                if (_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_15__["ListUtils"].orEmpty(this.enterpriseDefinitionTableSelection.children).length === 0) {
                    delete$_1 = this.deleteSite(element);
                }
                else {
                    this.messageService.showWarningMessage(this.getTranslateKey('siteHasChildren'));
                }
            }
            else {
                delete$_1 = this.deleteWarehouse(element);
            }
            if (delete$_1) {
                this.confirmationService.confirmDelete({
                    messageKey: 'global.deleteConfirmationMsg',
                    accept: function () {
                        delete$_1.subscribe({
                            next: function () {
                                _this.reload();
                            }
                        });
                    }
                });
            }
        }
    };
    EnterpriseDefinitionComponent.prototype.editSelection = function () {
        if (this.enterpriseDefinitionTableSelection) {
            var element = this.enterpriseDefinitionTableSelection.data;
            this.showCompanyDialog = element.isCompany;
            this.showSiteDialog = element.isSite;
            this.showWarehouseDialog = element.isWarehouse;
            this.showWorkshopDialog = element.isWorkshop;
        }
    };
    EnterpriseDefinitionComponent.prototype.openSelection = function () {
        if (this.enterpriseDefinitionTableSelection) {
            var element = this.enterpriseDefinitionTableSelection.data;
            if (element.isSite) {
                this.openSite(element);
            }
            if (element.isWarehouse) {
                this.openWarehouse(element);
            }
            else if (element.isWorkshop) {
                this.openWorkshop(element);
            }
        }
    };
    EnterpriseDefinitionComponent.prototype.reload = function () {
        this.onBeforeLoad();
        this.load();
    };
    // ////////////////////////////////////////////////////////////////////////////
    EnterpriseDefinitionComponent.prototype.deleteCompany = function (element) {
        var _this = this;
        return this.enterpriseDefinitionService.deleteCompany(element.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function () {
            _this.messageService.showSuccessMessage('successOnDeleteCompany');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }));
    };
    EnterpriseDefinitionComponent.prototype.deleteSite = function (element) {
        var _this = this;
        return this.enterpriseDefinitionService.deleteSite([element.id]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function () {
            _this.messageService.showSuccessMessage('successOnDeleteSite');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }));
    };
    EnterpriseDefinitionComponent.prototype.deleteWarehouse = function (element) {
        var _this = this;
        return this.enterpriseDefinitionService.deleteWarehouse([element.id]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function () {
            _this.messageService.showSuccessMessage('successOnDeleteWarehouse');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }));
    };
    EnterpriseDefinitionComponent.prototype.load = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])({
            enterpriseDefinition: this.enterpriseDefinitionService.loadEnterpriseDefinition(),
            companyTypes: this.companyTypes.length === 0
                ? this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__["GenericPropertyConstants"].COMPANY_TYPE_MAP)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.companyTypes),
            warehouseTypes: this.warehouseTypes.length === 0
                ? this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__["GenericPropertyConstants"].WAREHOUSE_TYPE_MAP)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.warehouseTypes),
            workshopTypes: this.workshopTypes.length === 0
                ? this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__["GenericPropertyConstants"].WORKSHOP_TYPE_MAP)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.workshopTypes)
        }).subscribe({
            next: function (_a) {
                var enterpriseDefinition = _a.enterpriseDefinition, companyTypes = _a.companyTypes, warehouseTypes = _a.warehouseTypes, workshopTypes = _a.workshopTypes;
                _this.enterpriseDefinitionTable = enterpriseDefinition;
                _this.companyTypes = companyTypes;
                _this.warehouseTypes = warehouseTypes;
                _this.workshopTypes = workshopTypes;
            }
        });
    };
    EnterpriseDefinitionComponent.prototype.onBeforeLoad = function () {
        this.enterpriseDefinitionTable = [];
        this.enterpriseDefinitionTableSelection = undefined;
        this.isLoadingEnterpriseDefinitionTable = true;
        this.showCompanyDialog = false;
        this.showSiteDialog = false;
        this.showWarehouseDialog = false;
        this.showWorkshopDialog = false;
    };
    EnterpriseDefinitionComponent.prototype.onBeforeLoadOnce = function () {
        this.companyTypes = [];
        this.warehouseTypes = [];
        this.workshopTypes = [];
        this.setAddItems();
        this.setEnterpriseDefinitionTableCols();
    };
    EnterpriseDefinitionComponent.prototype.openSite = function (element) {
        var objectId = {
            siteId: element.id,
            siteCode: element.code,
            siteName: element.name
        };
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].ADM_SITE_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read,
            objectId: this.serializationService.serialize(objectId)
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    EnterpriseDefinitionComponent.prototype.openWarehouse = function (element) {
        var objectId = {
            wareHouseId: element.id,
            whCode: element.code,
            whName: element.name
        };
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].ADM_WAREHOUSE_FORM,
            objectId: this.serializationService.serialize(objectId),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    EnterpriseDefinitionComponent.prototype.openWorkshop = function (element) {
        var objectId = {
            wareHouseId: element.id,
            whCode: element.code,
            whName: element.name
        };
        var data = {
            id: this.tabService.generateId(),
            componentId: 'WorkshopFormComponent',
            objectId: this.serializationService.serialize(objectId),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    EnterpriseDefinitionComponent.prototype.setAddItems = function () {
        var _this = this;
        var companyKey = 'company';
        var siteKey = 'site';
        var warehouseKey = 'warehouse';
        var workshopKey = 'workshop';
        this.translateService.get([companyKey, siteKey, warehouseKey, workshopKey]).subscribe({
            next: function (results) {
                _this.addItems = [
                    {
                        label: results[companyKey],
                        command: function () {
                            _this.showCompanyDialog = true;
                        }
                    },
                    {
                        label: results[siteKey],
                        command: function () {
                            _this.showSiteDialog = true;
                        }
                    },
                    {
                        label: results[warehouseKey],
                        command: function () {
                            _this.showWarehouseDialog = true;
                        }
                    },
                    {
                        label: results[workshopKey],
                        command: function () {
                            _this.showWorkshopDialog = true;
                        }
                    }
                ];
            }
        });
    };
    EnterpriseDefinitionComponent.prototype.setEnterpriseDefinitionTableCols = function () {
        this.enterpriseDefinitionTableCols = [
            { field: 'code', alignment: 'left', width: '20%' },
            { field: 'name', alignment: 'left', width: '50%' },
            { field: 'level', alignment: 'left', width: '10%' },
            { field: 'type', alignment: 'left', width: '20%' }
        ];
    };
    EnterpriseDefinitionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-enterprise-definition',
            template: __webpack_require__(/*! ./enterprise-definition.component.html */ "./src/app/main/administration/enterprise-definition/enterprise-definition.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__["TabService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"],
            _enterprise_definition_service__WEBPACK_IMPORTED_MODULE_16__["EnterpriseDefinitionService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__["PropertiesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], EnterpriseDefinitionComponent);
    return EnterpriseDefinitionComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_14__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/administration/enterprise-definition/enterprise-definition.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/administration/enterprise-definition/enterprise-definition.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: EnterpriseDefinitionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseDefinitionModule", function() { return EnterpriseDefinitionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/treetable.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_treetable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/dialog-table/dialog-table.module */ "./src/app/shared/components/dialog-table/dialog-table.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./company/company.component */ "./src/app/main/administration/enterprise-definition/company/company.component.ts");
/* harmony import */ var _enterprise_definition_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enterprise-definition.component */ "./src/app/main/administration/enterprise-definition/enterprise-definition.component.ts");
/* harmony import */ var _enterprise_definition_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./enterprise-definition.service */ "./src/app/main/administration/enterprise-definition/enterprise-definition.service.ts");
/* harmony import */ var _site_site_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./site/site.component */ "./src/app/main/administration/enterprise-definition/site/site.component.ts");
/* harmony import */ var _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./warehouse/warehouse.component */ "./src/app/main/administration/enterprise-definition/warehouse/warehouse.component.ts");
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
var EXTERNAL_MODULES = [primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__["DropdownModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_2__["InputTextareaModule"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_3__["SplitButtonModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"], primeng_treetable__WEBPACK_IMPORTED_MODULE_5__["TreeTableModule"]];
var INTERNAL_MODULES = [_shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_9__["DialogTableModule"], _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_10__["ModalModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [
    _company_company_component__WEBPACK_IMPORTED_MODULE_12__["EnterpriseDefinitionCompanyDialogComponent"],
    _site_site_component__WEBPACK_IMPORTED_MODULE_15__["EnterpriseDefinitionSiteDialogComponent"],
    _warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_16__["EnterpriseDefinitionWarehouseDialogComponent"]
];
var DYNAMIC_COMPONENTS = [_enterprise_definition_component__WEBPACK_IMPORTED_MODULE_13__["EnterpriseDefinitionComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_enterprise_definition_service__WEBPACK_IMPORTED_MODULE_14__["EnterpriseDefinitionService"]];
var EnterpriseDefinitionModule = /** @class */ (function () {
    function EnterpriseDefinitionModule() {
    }
    EnterpriseDefinitionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_6__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_7__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_8__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_11__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], EnterpriseDefinitionModule);
    return EnterpriseDefinitionModule;
}());



/***/ }),

/***/ "./src/app/main/administration/enterprise-definition/enterprise-definition.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/main/administration/enterprise-definition/enterprise-definition.service.ts ***!
  \********************************************************************************************/
/*! exports provided: EnterpriseDefinitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseDefinitionService", function() { return EnterpriseDefinitionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/api/bidt-company.api */ "./src/app/shared/api/bidt-company.api.ts");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/utils/number-utils */ "./src/app/shared/utils/number-utils.ts");
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









var EnterpriseDefinitionService = /** @class */ (function (_super) {
    __extends(EnterpriseDefinitionService, _super);
    function EnterpriseDefinitionService(http, appConfigService, bidtCompanyApi, bidtSiteApi, bidtWarehouseApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtCompanyApi = bidtCompanyApi;
        _this.bidtSiteApi = bidtSiteApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        return _this;
    }
    /**************************************************************************
     * Bidt company api
     *************************************************************************/
    EnterpriseDefinitionService.prototype.deleteCompany = function (input) {
        return _super.prototype.post.call(this, this.bidtCompanyApi.delete, input);
    };
    EnterpriseDefinitionService.prototype.getCompanyById = function (input) {
        return _super.prototype.post.call(this, this.bidtCompanyApi.getById, input);
    };
    EnterpriseDefinitionService.prototype.loadCompanies = function (input) {
        return _super.prototype.post.call(this, this.bidtCompanyApi.findByCriteria, input).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (companies) {
            return companies
                .map(function (company) {
                return {
                    label: company.label,
                    value: _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_8__["NumberUtils"].fromString(company.value)
                };
            })
                .sort(function (c1, c2) { return c1.label.localeCompare(c2.label); });
        }));
    };
    EnterpriseDefinitionService.prototype.loadEnterpriseDefinition = function () {
        return _super.prototype.post.call(this, this.bidtCompanyApi.getEnterpriseStructure);
    };
    EnterpriseDefinitionService.prototype.saveCompany = function (input) {
        return _super.prototype.post.call(this, this.bidtCompanyApi.addOrUpdate, input);
    };
    /**************************************************************************
     * Bidt site api
     *************************************************************************/
    EnterpriseDefinitionService.prototype.deleteSite = function (input) {
        return _super.prototype.post.call(this, this.bidtSiteApi.delete, input);
    };
    EnterpriseDefinitionService.prototype.getSiteById = function (input) {
        return _super.prototype.post.call(this, this.bidtSiteApi.getById, input);
    };
    EnterpriseDefinitionService.prototype.loadSites = function (input) {
        return _super.prototype.post.call(this, this.bidtSiteApi.getSites, input);
    };
    EnterpriseDefinitionService.prototype.saveSite = function (input) {
        return _super.prototype.post.call(this, this.bidtSiteApi.addOrUpdate, input);
    };
    /**************************************************************************
     * Bidt warehouse api
     *************************************************************************/
    EnterpriseDefinitionService.prototype.deleteWarehouse = function (input) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.delete, input);
    };
    EnterpriseDefinitionService.prototype.getWarehouseById = function (input) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.getById, input);
    };
    EnterpriseDefinitionService.prototype.getWarehousesBySiteId = function (input) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, input);
    };
    EnterpriseDefinitionService.prototype.saveWarehouse = function (input) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.saveWarehouse, input);
    };
    EnterpriseDefinitionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__["AppConfigService"],
            _shared_api_bidt_company_api__WEBPACK_IMPORTED_MODULE_3__["BidtCompanyApi"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_4__["BidtSiteApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__["BidtWarehouseApi"]])
    ], EnterpriseDefinitionService);
    return EnterpriseDefinitionService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/administration/enterprise-definition/site/site.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/administration/enterprise-definition/site/site.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ \"site\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".inCompany\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              appendTo=\"body\"\r\n              placeholder=\"&nbsp;\"\r\n              [options]=\"companies\"\r\n              [showClear]=\"true\"\r\n              [(ngModel)]=\"site.bidtCompanyId\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".code\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input class=\"aw-input\" type=\"text\" maxlength=\"50\" [(ngModel)]=\"site.siteCode\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".name\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input class=\"aw-input\" type=\"text\" maxlength=\"100\" [(ngModel)]=\"site.siteName\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".description\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <textarea\r\n              class=\"aw-textarea\"\r\n              pInputTextarea\r\n              maxlength=\"300\"\r\n              [rows]=\"3\"\r\n              [(ngModel)]=\"site.siteDescription\"\r\n            ></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"cancel\" | translate }}\r\n    </button>\r\n\r\n    <button [disabled]=\"!site.bidtCompanyId || !site.siteCode\" type=\"button\" mat-raised-button (click)=\"save()\">\r\n      {{ \"save\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/administration/enterprise-definition/site/site.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/administration/enterprise-definition/site/site.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EnterpriseDefinitionSiteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseDefinitionSiteDialogComponent", function() { return EnterpriseDefinitionSiteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_select_option_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/utils/select-option-utils */ "./src/app/shared/utils/select-option-utils.ts");
/* harmony import */ var _enterprise_definition_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enterprise-definition.service */ "./src/app/main/administration/enterprise-definition/enterprise-definition.service.ts");
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







var EnterpriseDefinitionSiteDialogComponent = /** @class */ (function (_super) {
    __extends(EnterpriseDefinitionSiteDialogComponent, _super);
    function EnterpriseDefinitionSiteDialogComponent(enterpriseDefinitionService, messageService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'EnterpriseDefinitionSiteDialogComponent') || this;
        _this.enterpriseDefinitionService = enterpriseDefinitionService;
        _this.messageService = messageService;
        _this.onBeforeLoadOnce();
        _this.onBeforeLoad();
        return _this;
    }
    // ////////////////////////////////////////////////////////////////////////////
    EnterpriseDefinitionSiteDialogComponent.prototype.ngOnInit = function () {
        this.load();
    };
    // ////////////////////////////////////////////////////////////////////////////
    EnterpriseDefinitionSiteDialogComponent.prototype.save = function () {
        var _this = this;
        this.enterpriseDefinitionService.saveSite(this.site).subscribe({
            next: function () {
                _this.onSave.emit();
                _this.messageService.showSuccessMessage('successOnSaveSite');
                _this.closeDialog();
            }
        });
    };
    // ////////////////////////////////////////////////////////////////////////////
    EnterpriseDefinitionSiteDialogComponent.prototype.onBeforeLoad = function () {
        this.site = {};
    };
    EnterpriseDefinitionSiteDialogComponent.prototype.onBeforeLoadOnce = function () {
        this.companies = [];
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };
    EnterpriseDefinitionSiteDialogComponent.prototype.load = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
            site: this.siteId ? this.enterpriseDefinitionService.getSiteById(this.siteId) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined),
            companies: this.companies.length === 0 ? this.enterpriseDefinitionService.loadCompanies({}) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.companies)
        }).subscribe({
            next: function (_a) {
                var site = _a.site, companies = _a.companies;
                _this.site = site || {};
                _this.companies = companies.sort(_shared_utils_select_option_utils__WEBPACK_IMPORTED_MODULE_5__["SelectOptionUtils"].sort);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EnterpriseDefinitionSiteDialogComponent.prototype, "siteId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EnterpriseDefinitionSiteDialogComponent.prototype, "onSave", void 0);
    EnterpriseDefinitionSiteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-enterprise-definition-site',
            template: __webpack_require__(/*! ./site.component.html */ "./src/app/main/administration/enterprise-definition/site/site.component.html")
        }),
        __metadata("design:paramtypes", [_enterprise_definition_service__WEBPACK_IMPORTED_MODULE_6__["EnterpriseDefinitionService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], EnterpriseDefinitionSiteDialogComponent);
    return EnterpriseDefinitionSiteDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/administration/enterprise-definition/warehouse/warehouse.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/administration/enterprise-definition/warehouse/warehouse.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"40\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ (isWorkshopCategory ? \"workshop\" : \"warehouse\") | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".inCompany\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              appendTo=\"body\"\r\n              placeholder=\"&nbsp;\"\r\n              [options]=\"companies\"\r\n              [showClear]=\"true\"\r\n              [(ngModel)]=\"companyId\"\r\n              (onChange)=\"onChangeCompany()\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".site\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              appendTo=\"body\"\r\n              placeholder=\"&nbsp;\"\r\n              [options]=\"sitesByCompany\"\r\n              [showClear]=\"true\"\r\n              [(ngModel)]=\"warehouse.bidtSiteId\"\r\n              (onChange)=\"onChangeSite()\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".code\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input class=\"aw-input\" type=\"text\" maxlength=\"50\" [(ngModel)]=\"warehouse.whCode\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".name\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input class=\"aw-input\" type=\"text\" maxlength=\"100\" [(ngModel)]=\"warehouse.whName\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".type\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              appendTo=\"body\"\r\n              placeholder=\"&nbsp;\"\r\n              [options]=\"warehouseTypes\"\r\n              [showClear]=\"true\"\r\n              [(ngModel)]=\"warehouse.whType\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".providingWarehouse\" | translate }}</label>\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              appendTo=\"body\"\r\n              placeholder=\"&nbsp;\"\r\n              [options]=\"providingWarehouses\"\r\n              [showClear]=\"true\"\r\n              [(ngModel)]=\"warehouse.bidtWarehouseId\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".phoneNumber\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"warehouse.whPhoneNumber\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".zipCode\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"warehouse.whZipCode\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".country\" | translate }}</label>\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              appendTo=\"body\"\r\n              placeholder=\"&nbsp;\"\r\n              [options]=\"countries\"\r\n              [showClear]=\"true\"\r\n              [(ngModel)]=\"warehouse.whCountry\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".address\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <textarea\r\n              class=\"aw-textarea\"\r\n              pInputTextarea\r\n              maxlength=\"300\"\r\n              [rows]=\"3\"\r\n              [(ngModel)]=\"warehouse.whAdress\"\r\n            ></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"cancel\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      [disabled]=\"!companyId || !warehouse.bidtSiteId || !warehouse.whCode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"save()\"\r\n    >\r\n      {{ \"save\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/administration/enterprise-definition/warehouse/warehouse.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/main/administration/enterprise-definition/warehouse/warehouse.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EnterpriseDefinitionWarehouseDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseDefinitionWarehouseDialogComponent", function() { return EnterpriseDefinitionWarehouseDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_select_option_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/utils/select-option-utils */ "./src/app/shared/utils/select-option-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _enterprise_definition_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../enterprise-definition.service */ "./src/app/main/administration/enterprise-definition/enterprise-definition.service.ts");
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











var EnterpriseDefinitionWarehouseDialogComponent = /** @class */ (function (_super) {
    __extends(EnterpriseDefinitionWarehouseDialogComponent, _super);
    function EnterpriseDefinitionWarehouseDialogComponent(enterpriseDefinitionService, messageService, propertiesService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write, 'EnterpriseDefinitionWarehouseDialogComponent') || this;
        _this.enterpriseDefinitionService = enterpriseDefinitionService;
        _this.messageService = messageService;
        _this.propertiesService = propertiesService;
        _this.onBeforeLoadOnce();
        _this.onBeforeLoad();
        return _this;
    }
    // ////////////////////////////////////////////////////////////////////////////
    EnterpriseDefinitionWarehouseDialogComponent.prototype.ngOnInit = function () {
        this.load();
    };
    // ////////////////////////////////////////////////////////////////////////////
    EnterpriseDefinitionWarehouseDialogComponent.prototype.onChangeCompany = function () {
        this.warehouse.bidtSiteId = undefined;
        this.setSitesByCompany();
        this.setProvidingWarehouses();
    };
    EnterpriseDefinitionWarehouseDialogComponent.prototype.onChangeSite = function () {
        this.warehouse.bidtWarehouseId = undefined;
        this.setProvidingWarehouses();
    };
    EnterpriseDefinitionWarehouseDialogComponent.prototype.save = function () {
        var _this = this;
        this.enterpriseDefinitionService.saveWarehouse({ bidtWarehouseDTO: this.warehouse }).subscribe({
            next: function () {
                _this.onSave.emit();
                _this.messageService.showSuccessMessage('successOnSaveWarehouse');
                _this.closeDialog();
            }
        });
    };
    // ////////////////////////////////////////////////////////////////////////////
    EnterpriseDefinitionWarehouseDialogComponent.prototype.onBeforeLoad = function () {
        this.companyId = undefined;
        this.warehouse = {};
    };
    EnterpriseDefinitionWarehouseDialogComponent.prototype.onBeforeLoadOnce = function () {
        this.companies = [];
        this.companyId = undefined;
        this.countries = [];
        this.providingWarehouses = [];
        this.sites = [];
        this.sitesByCompany = [];
        this.warehouseTypes = [];
        this.warehouse = {};
        this.isWorkshopCategory = false;
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };
    EnterpriseDefinitionWarehouseDialogComponent.prototype.load = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
            companies: this.companies.length === 0 ? this.enterpriseDefinitionService.loadCompanies({}) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.companies),
            countries: this.countries.length === 0
                ? this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__["GenericPropertyConstants"].COUNTRY_ZONE_MAP)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.countries),
            sites: this.sites.length === 0 ? this.enterpriseDefinitionService.loadSites({}) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.sites),
            warehouse: this.warehouseId ? this.enterpriseDefinitionService.getWarehouseById(this.warehouseId) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined),
            warehouseTypes: this.warehouseTypes.length === 0
                ? this.propertiesService.getValue(this.isWorkshopCategory
                    ? _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__["GenericPropertyConstants"].WORKSHOP_TYPE_MAP
                    : _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__["GenericPropertyConstants"].WAREHOUSE_TYPE_MAP)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.warehouseTypes)
        }).subscribe({
            next: function (_a) {
                var companies = _a.companies, countries = _a.countries, sites = _a.sites, warehouse = _a.warehouse, warehouseTypes = _a.warehouseTypes;
                _this.warehouse = warehouse || {};
                _this.warehouse.whCategory =
                    _this.warehouse.whCategory ||
                        (_this.isWorkshopCategory
                            ? _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].WAREHOUSE_CATEGORY_WORKSHOP
                            : _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].WAREHOUSE_CATEGORY_WAREHOUSE);
                _this.companies = companies.sort(_shared_utils_select_option_utils__WEBPACK_IMPORTED_MODULE_8__["SelectOptionUtils"].sort);
                _this.countries = countries
                    .map(function (country) {
                    return {
                        label: country.label.split(';')[0],
                        value: country.value
                    };
                })
                    .sort(_shared_utils_select_option_utils__WEBPACK_IMPORTED_MODULE_8__["SelectOptionUtils"].sort);
                _this.sites = sites;
                _this.warehouseTypes = warehouseTypes.sort(_shared_utils_select_option_utils__WEBPACK_IMPORTED_MODULE_8__["SelectOptionUtils"].sort);
                if (_this.warehouse.bidtSiteId) {
                    _this.enterpriseDefinitionService.getSiteById(_this.warehouse.bidtSiteId).subscribe({
                        next: function (site) {
                            _this.companyId = site.bidtCompanyId;
                            _this.setSitesByCompany();
                            _this.setProvidingWarehouses();
                        }
                    });
                }
            }
        });
    };
    EnterpriseDefinitionWarehouseDialogComponent.prototype.setProvidingWarehouses = function () {
        var _this = this;
        if (this.warehouse.bidtSiteId) {
            this.enterpriseDefinitionService.getWarehousesBySiteId(this.warehouse.bidtSiteId).subscribe({
                next: function (warehouses) {
                    _this.providingWarehouses = warehouses
                        .map(function (warehouse) {
                        return {
                            label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__["StringUtils"].orEmpty(warehouse.whName),
                            value: warehouse.wareHouseId
                        };
                    })
                        .sort(_shared_utils_select_option_utils__WEBPACK_IMPORTED_MODULE_8__["SelectOptionUtils"].sort);
                }
            });
        }
        else {
            this.providingWarehouses = [];
        }
    };
    EnterpriseDefinitionWarehouseDialogComponent.prototype.setSitesByCompany = function () {
        var _this = this;
        this.sitesByCompany = this.companyId
            ? this.sites
                .filter(function (site) { return site.bidtCompanyId === _this.companyId; })
                .map(function (site) {
                return {
                    label: !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__["StringUtils"].isNullOrEmpty(site.siteName)
                        ? site.siteCode + " - " + site.siteName
                        : site.siteCode,
                    value: site.siteId
                };
            })
                .sort(_shared_utils_select_option_utils__WEBPACK_IMPORTED_MODULE_8__["SelectOptionUtils"].sort)
            : [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EnterpriseDefinitionWarehouseDialogComponent.prototype, "isWorkshopCategory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EnterpriseDefinitionWarehouseDialogComponent.prototype, "warehouseId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EnterpriseDefinitionWarehouseDialogComponent.prototype, "onSave", void 0);
    EnterpriseDefinitionWarehouseDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-enterprise-definition-warehouse',
            template: __webpack_require__(/*! ./warehouse.component.html */ "./src/app/main/administration/enterprise-definition/warehouse/warehouse.component.html")
        }),
        __metadata("design:paramtypes", [_enterprise_definition_service__WEBPACK_IMPORTED_MODULE_10__["EnterpriseDefinitionService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__["PropertiesService"]])
    ], EnterpriseDefinitionWarehouseDialogComponent);
    return EnterpriseDefinitionWarehouseDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/utils/select-option-utils.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/utils/select-option-utils.ts ***!
  \*****************************************************/
/*! exports provided: SelectOptionUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOptionUtils", function() { return SelectOptionUtils; });
var SelectOptionUtils = /** @class */ (function () {
    function SelectOptionUtils() {
    }
    SelectOptionUtils.sort = function (option1, option2) {
        return option1.label.localeCompare(option2.label);
    };
    return SelectOptionUtils;
}());



/***/ })

}]);
//# sourceMappingURL=administration-enterprise-definition-enterprise-definition-module.js.map