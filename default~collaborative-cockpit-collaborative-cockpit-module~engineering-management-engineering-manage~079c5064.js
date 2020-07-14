(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~collaborative-cockpit-collaborative-cockpit-module~engineering-management-engineering-manage~079c5064"],{

/***/ "./src/app/shared/components/dialog-search-item/dialog-search-item.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-item/dialog-search-item.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"70\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"search-dialog-container\">\r\n      <div class=\"section\">\r\n        <h4 class=\"section-title\">{{ \"global.search\" | translate }}</h4>\r\n\r\n        <div class=\"section-content\">\r\n          <div class=\"column\">\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".familyVariant\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [options]=\"familyVariantList\"\r\n                    [(ngModel)]=\"searchFamilyVariant\"\r\n                    [showClear]=\"true\"\r\n                    placeholder=\"&nbsp;\"\r\n                    appendTo=\"body\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".designation\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.name\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".functionCode\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.functionCode\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".itemNumber\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.itemNumber\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".itemFamily\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.familyCode\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".chapter\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.chapter\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".section\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.section\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".subject\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.subject\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".sheet\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.sheet\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".marks\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.marks\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row search-criteria-footer\">\r\n              <div class=\"search-actions\">\r\n                <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"search()\">\r\n                  {{ \"global.toSearch\" | translate }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <h4 class=\"section-title\">\r\n          {{ \"global.results\" | translate }}\r\n          ({{ table.list ? table.list.length : 0 }}{{ table.moreResults ? \"+\" : \"\" }})\r\n        </h4>\r\n\r\n        <div class=\"section-content\">\r\n          <p-table\r\n            [resizableColumns]=\"true\"\r\n            #ptableItem\r\n            class=\"aw-table2\"\r\n            [columns]=\"tableColList\"\r\n            [value]=\"table.list\"\r\n            [(selection)]=\"tableSelection\"\r\n            selectionMode=\"single\"\r\n            [scrollable]=\"true\"\r\n          >\r\n            <ng-template pTemplate=\"emptymessage\">\r\n              <span *ngIf=\"!tableLoading\"> &nbsp;</span>\r\n\r\n              <div *ngIf=\"tableLoading\" class=\"aw-table-loading-indicator\">\r\n                <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                <div class=\"lds-hourglass\"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"caption\">\r\n              <div class=\"aw-table-header\">\r\n                <div class=\"aw-table-global-filter\">\r\n                  <label class=\"aw-table-global-filter-label\">\r\n                    <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    class=\"aw-table-global-filter-input\"\r\n                    type=\"text\"\r\n                    placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                    (input)=\"ptableItem.filterGlobal($event.target.value, 'contains')\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"colgroup\" let-columns>\r\n              <colgroup>\r\n                <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n              <tr>\r\n                <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                  {{ getComponentName() + \".\" + col.field | translate }}\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n              <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                  {{ rowData[col.field] }}\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"cancel()\">\r\n      {{ \"dialog.cancel\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"validate()\" [disabled]=\"!tableSelection\">\r\n      {{ \"dialog.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-search-item/dialog-search-item.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-item/dialog-search-item.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DialogSearchItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchItemComponent", function() { return DialogSearchItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _utils_list_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _utils_object_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _dialog_search_item_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog-search-item.service */ "./src/app/shared/components/dialog-search-item/dialog-search-item.service.ts");
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











var DialogSearchItemComponent = /** @class */ (function (_super) {
    __extends(DialogSearchItemComponent, _super);
    function DialogSearchItemComponent(dialogSearchItemService, messageService, propertiesService) {
        var _this = _super.call(this, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, 'DialogSearchItemComponent') || this;
        _this.dialogSearchItemService = dialogSearchItemService;
        _this.messageService = messageService;
        _this.propertiesService = propertiesService;
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.init();
        _this.loadFamilyCodeList();
        _this.loadFamilyVariantList();
        _this.setTableColList();
        return _this;
    }
    DialogSearchItemComponent_1 = DialogSearchItemComponent;
    DialogSearchItemComponent.prototype.ngOnInit = function () {
        this.searchObject = this.searchObject || {};
    };
    DialogSearchItemComponent.prototype.search = function () {
        var _this = this;
        this.tableLoading = true;
        this.clearTableData();
        var familyCode;
        var variantCode;
        if (_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].isDefined(this.searchFamilyVariant)) {
            familyCode = this.extractFamilyCodeFromFamilyVariant(this.searchFamilyVariant);
            variantCode = this.extractVariantCodeFromFamilyVariant(this.searchFamilyVariant);
        }
        this.searchObject.familyCode = familyCode;
        this.searchObject.variantCode = variantCode;
        this.dialogSearchItemService
            .findBireItemsBySearchCriteria(this.searchObject, this.autoFilterForFlFunction)
            .subscribe(function (result) {
            _this.table.moreResults = result.moreResults;
            _this.table.list = _utils_list_utils__WEBPACK_IMPORTED_MODULE_7__["ListUtils"].orEmpty(result.list).map(function (elt) { return _this.createItemRow(elt); });
            _this.tableLoading = false;
        });
    };
    DialogSearchItemComponent.prototype.cancel = function () {
        _super.prototype.closeDialog.call(this);
    };
    DialogSearchItemComponent.prototype.validate = function () {
        if (!this.tableSelection) {
            this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelection'));
        }
        else {
            this.onValidated.emit(this.tableSelection._obj);
            _super.prototype.closeDialog.call(this);
        }
    };
    DialogSearchItemComponent.prototype.clearTableData = function () {
        this.table = { list: [], moreResults: false };
        this.tableSelection = undefined;
    };
    DialogSearchItemComponent.prototype.createItemRow = function (obj) {
        var familyVariant = _utils_string_utils__WEBPACK_IMPORTED_MODULE_9__["StringUtils"].orEmpty(obj.familyCode);
        familyVariant += _utils_string_utils__WEBPACK_IMPORTED_MODULE_9__["StringUtils"].isNullOrEmpty(obj.structureType) ? '' : "-" + _utils_string_utils__WEBPACK_IMPORTED_MODULE_9__["StringUtils"].orEmpty(obj.structureType);
        familyVariant += _utils_string_utils__WEBPACK_IMPORTED_MODULE_9__["StringUtils"].isNullOrEmpty(obj.variantCode) ? '' : "-" + _utils_string_utils__WEBPACK_IMPORTED_MODULE_9__["StringUtils"].orEmpty(obj.variantCode);
        var item = [obj.chapter, obj.section, obj.subject, obj.sheet, obj.marks]
            .filter(function (elt) { return _utils_object_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].isDefined(elt); })
            .join('-');
        var itemFamily = this.familyCodeList.find(function (elt) { return elt.value === obj.familyCode; });
        var itemRow = {
            familyVariant: familyVariant,
            item: item,
            designation: _utils_string_utils__WEBPACK_IMPORTED_MODULE_9__["StringUtils"].orEmpty(obj.name),
            functionCode: _utils_string_utils__WEBPACK_IMPORTED_MODULE_9__["StringUtils"].orEmpty(obj.functionCode),
            itemFamily: itemFamily ? _utils_string_utils__WEBPACK_IMPORTED_MODULE_9__["StringUtils"].orEmpty(itemFamily.label) : '',
            itemNumber: _utils_string_utils__WEBPACK_IMPORTED_MODULE_9__["StringUtils"].orEmpty(obj.itemNumber),
            _obj: obj
        };
        return itemRow;
    };
    DialogSearchItemComponent.prototype.extractFamilyCodeFromFamilyVariant = function (familyVariant) {
        if (_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].isDefined(familyVariant)) {
            var matches = familyVariant.match(DialogSearchItemComponent_1.FAMILY_VARIANT_REGEXP);
            return matches ? matches[1] : undefined;
        }
        else {
            return undefined;
        }
    };
    DialogSearchItemComponent.prototype.extractVariantCodeFromFamilyVariant = function (familyVariant) {
        if (_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].isDefined(familyVariant)) {
            var matches = familyVariant.match(DialogSearchItemComponent_1.FAMILY_VARIANT_REGEXP);
            return matches ? matches[2] : undefined;
        }
        else {
            return undefined;
        }
    };
    DialogSearchItemComponent.prototype.init = function () {
        this.clearTableData();
        this.familyCodeList = [];
        this.familyVariantList = [];
        this.searchFamilyVariant = undefined;
        this.tableLoading = false;
    };
    DialogSearchItemComponent.prototype.loadFamilyCodeList = function () {
        var _this = this;
        this.propertiesService.getValue(_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__["GenericPropertyConstants"].ITEM_FAMILY_CODE_MAP).subscribe(function (results) {
            _this.familyCodeList = _utils_list_utils__WEBPACK_IMPORTED_MODULE_7__["ListUtils"].orEmpty(results);
        });
    };
    DialogSearchItemComponent.prototype.loadFamilyVariantList = function () {
        var _this = this;
        var input = {
            useCase: _constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_1__["BidoFunctionTypeConstants"].UC_MCH_TASK,
            module: _constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_1__["BidoFunctionTypeConstants"].MODULE_FAMILY
        };
        this.dialogSearchItemService.findFamilyVariant(input).subscribe(function (results) {
            _this.familyVariantList = _utils_list_utils__WEBPACK_IMPORTED_MODULE_7__["ListUtils"].orEmpty(results)
                .filter(function (elt) { return _utils_object_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].isDefined(elt.labelValueDTO); })
                .map(function (elt) {
                return {
                    label: elt.labelValueDTO.label,
                    value: elt.labelValueDTO.value
                };
            });
        });
    };
    DialogSearchItemComponent.prototype.setTableColList = function () {
        this.tableColList = [
            { field: 'familyVariant', alignment: 'left', width: '15%' },
            { field: 'item', alignment: 'left', width: '25%' },
            { field: 'designation', alignment: 'left', width: '35%' },
            { field: 'functionCode', alignment: 'left', width: '15%' },
            { field: 'itemNumber', alignment: 'left', width: '10%' }
        ];
    };
    var DialogSearchItemComponent_1;
    DialogSearchItemComponent.FAMILY_VARIANT_REGEXP = /([^-]+)-[^-]+-(.+)/;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogSearchItemComponent.prototype, "searchObject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogSearchItemComponent.prototype, "autoFilterForFlFunction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DialogSearchItemComponent.prototype, "onValidated", void 0);
    DialogSearchItemComponent = DialogSearchItemComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-search-item',
            template: __webpack_require__(/*! ./dialog-search-item.component.html */ "./src/app/shared/components/dialog-search-item/dialog-search-item.component.html")
        }),
        __metadata("design:paramtypes", [_dialog_search_item_service__WEBPACK_IMPORTED_MODULE_10__["DialogSearchItemService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _services_properties_service__WEBPACK_IMPORTED_MODULE_5__["PropertiesService"]])
    ], DialogSearchItemComponent);
    return DialogSearchItemComponent;
}(_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/components/dialog-search-item/dialog-search-item.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-item/dialog-search-item.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DialogSearchItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchItemModule", function() { return DialogSearchItemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dialog_search_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-search-item.component */ "./src/app/shared/components/dialog-search-item/dialog-search-item.component.ts");
/* harmony import */ var _dialog_search_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog-search-item.service */ "./src/app/shared/components/dialog-search-item/dialog-search-item.service.ts");
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
var EXTERNAL_MODULES = [primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__["DropdownModule"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["TableModule"]];
var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_dialog_search_item_component__WEBPACK_IMPORTED_MODULE_7__["DialogSearchItemComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_dialog_search_item_service__WEBPACK_IMPORTED_MODULE_8__["DialogSearchItemService"]];
var DialogSearchItemModule = /** @class */ (function () {
    function DialogSearchItemModule() {
    }
    DialogSearchItemModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS),
            exports: __spread(COMPONENTS),
            imports: __spread([
                _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__["AngularCommonSharedModule"],
                _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__["AngularGenericTemplatesSharedModule"],
                _app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonSharedModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], DialogSearchItemModule);
    return DialogSearchItemModule;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-search-item/dialog-search-item.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-item/dialog-search-item.service.ts ***!
  \************************************************************************************/
/*! exports provided: DialogSearchItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchItemService", function() { return DialogSearchItemService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
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





var DialogSearchItemService = /** @class */ (function (_super) {
    __extends(DialogSearchItemService, _super);
    function DialogSearchItemService(http, appConfigService, productStructureManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.productStructureManagementApi = productStructureManagementApi;
        return _this;
    }
    DialogSearchItemService.prototype.findBireItemsBySearchCriteria = function (bireItem, autoFilterForFlFunction) {
        var params = {
            bireItemDTOCriteria: bireItem,
            pnCode: undefined,
            attribute: undefined,
            autoFilterFlFunction: autoFilterForFlFunction
        };
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireItemsBySearchCriteria, params);
    };
    DialogSearchItemService.prototype.findFamilyVariant = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findFamilyVariant, input);
    };
    DialogSearchItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__["ProductStructureManagementApi"]])
    ], DialogSearchItemService);
    return DialogSearchItemService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ })

}]);
//# sourceMappingURL=default~collaborative-cockpit-collaborative-cockpit-module~engineering-management-engineering-manage~079c5064.js.map