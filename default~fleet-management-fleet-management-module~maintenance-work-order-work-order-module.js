(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~fleet-management-fleet-management-module~maintenance-work-order-work-order-module"],{

/***/ "./src/app/shared/components/dialog-equipment-list/dialog-equipment-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-equipment-list/dialog-equipment-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dialog\r\n  class=\"aw-dialog\"\r\n  header=\"{{ getComponentName() + '.title' | translate }}\"\r\n  modal=\"modal\"\r\n  positionTop=\"60\"\r\n  [(visible)]=\"display\"\r\n  [closable]=\"false\"\r\n  [focusOnShow]=\"false\"\r\n  [contentStyle]=\"{ width: '85vw' }\"\r\n>\r\n  <div class=\"popup-content\">\r\n    <div class=\"search-panel-container\">\r\n      <div class=\"row search-criteria-container\">\r\n        <div class=\"column\">\r\n          <div class=\"form-group\">\r\n            <label>\r\n              {{ getComponentName() + \".equipmentCode\" | translate }}\r\n            </label>\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.equipmentCode\" />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>\r\n              {{ getComponentName() + \".equipmentDesignation\" | translate }}\r\n            </label>\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.equipmentDesignation\" />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>\r\n              {{ getComponentName() + \".operatorCustomerCode\" | translate }}\r\n            </label>\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.operatorCustomerCode\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"column\">\r\n          <div class=\"form-group\">\r\n            <label>\r\n              {{ getComponentName() + \".pnCode\" | translate }}\r\n            </label>\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.pnCode\" />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>\r\n              {{ getComponentName() + \".registration\" | translate }}\r\n            </label>\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.registration\" />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>\r\n              {{ getComponentName() + \".modelCode\" | translate }}\r\n            </label>\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.modelCode\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"column\">\r\n          <div class=\"form-group\">\r\n            <label>\r\n              {{ getComponentName() + \".sn\" | translate }}\r\n            </label>\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.sn\" />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>\r\n              {{ getComponentName() + \".equipmentFunction\" | translate }}\r\n            </label>\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              [options]=\"functionList\"\r\n              [(ngModel)]=\"searchObject.equipmentFunction\"\r\n              [showClear]=\"true\"\r\n              placeholder=\"&nbsp;\"\r\n            ></p-dropdown>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>\r\n              {{ getComponentName() + \".operationalStatus\" | translate }}\r\n            </label>\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              [options]=\"statusList\"\r\n              [(ngModel)]=\"searchObject.operationalStatus\"\r\n              [showClear]=\"true\"\r\n              placeholder=\"&nbsp;\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"search-button-container\">\r\n        <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"search()\">\r\n          <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n          <span>{{ \"global.toSearch\" | translate }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <p-table\r\n      [resizableColumns]=\"true\"\r\n      #ptableEquipment\r\n      class=\"aw-table aw-table-section\"\r\n      [columns]=\"equipmenTableCols\"\r\n      [value]=\"equipmenTable.list\"\r\n      [style]=\"{ margin: '0 auto', width: '100%' }\"\r\n      selectionMode=\"single\"\r\n      [(selection)]=\"selectedEquipment\"\r\n      dataKey=\"equipmentCode\"\r\n      (onFilter)=\"updateDisplayedEquipmentRowNb($event.filteredValue.length)\"\r\n      [scrollable]=\"true\"\r\n      scrollHeight=\"60vh\"\r\n    >\r\n      <ng-template pTemplate=\"emptymessage\">\r\n        &nbsp;\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"caption\">\r\n        <div class=\"aw-table-header\">\r\n          <div class=\"aw-table-header-title-wrapper\">\r\n            <div class=\"aw-table-results-number\" *ngIf=\"ptableEquipment.totalRecords > 0\">\r\n              {{ displayedEquipmentRowNb }} / {{ ptableEquipment.totalRecords }}\r\n              <span class=\"aw-table-more-results\" *ngIf=\"equipmenTable.moreResults\">+</span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aw-table-global-filter\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"aw-input\"\r\n              placeholder=\"{{ 'global.globalFilter' | translate }}\"\r\n              (input)=\"ptableEquipment.filterGlobal($event.target.value, 'contains')\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"colgroup\" let-columns>\r\n        <colgroup>\r\n          <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th\r\n            pResizableColumn\r\n            *ngFor=\"let col of columns\"\r\n            [pSortableColumn]=\"col.field\"\r\n            [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n          >\r\n            {{ getComponentName() + \".\" + col.field | translate }}\r\n\r\n            <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n        <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n          <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n            {{ rowData[col.field] }}\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n\r\n  <p-footer>\r\n    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"validate()\">\r\n      <i class=\"fa fa-fw fa-check\" aria-hidden=\"true\"></i>\r\n      <span>{{ \"global.validate\" | translate }}</span>\r\n    </button>\r\n\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <i class=\"fa fa-fw fa-times\" aria-hidden=\"true\"></i>\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-equipment-list/dialog-equipment-list.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-equipment-list/dialog-equipment-list.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .search-panel-container {\n  align-items: flex-end;\n  border-bottom: 1px dashed #bdbdbd;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px; }\n  :host .search-panel-container .search-criteria-container {\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    flex-wrap: wrap;\n    padding-right: 40px; }\n  :host .search-panel-container .search-criteria-container .form-group {\n      min-width: 10rem;\n      width: 15rem; }\n  :host .search-panel-container .search-criteria-container .form-group:last-of-type {\n        margin-right: 0; }\n  :host .search-panel-container .search-button-container {\n    padding-bottom: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nLWVxdWlwbWVudC1saXN0L0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZGlhbG9nLWVxdWlwbWVudC1saXN0XFxkaWFsb2ctZXF1aXBtZW50LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxxQkFBcUI7RUFDckIsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7RUFOdkI7SUFTTSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RUFiekI7TUFnQlEsZ0JBQWdCO01BQ2hCLFlBQVksRUFBQTtFQWpCcEI7UUFvQlUsZUFBZSxFQUFBO0VBcEJ6QjtJQTBCTSxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy1lcXVpcG1lbnQtbGlzdC9kaWFsb2ctZXF1aXBtZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLnNlYXJjaC1wYW5lbC1jb250YWluZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjYmRiZGJkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIC5zZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMHJlbTtcclxuICAgICAgICB3aWR0aDogMTVyZW07XHJcblxyXG4gICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/dialog-equipment-list/dialog-equipment-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-equipment-list/dialog-equipment-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DialogEquipmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogEquipmentListComponent", function() { return DialogEquipmentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _utils_select_item_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _utils_table_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/table-utils */ "./src/app/shared/utils/table-utils.ts");
/* harmony import */ var _dialog_equipment_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog-equipment-list.service */ "./src/app/shared/components/dialog-equipment-list/dialog-equipment-list.service.ts");
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









var DialogEquipmentListComponent = /** @class */ (function (_super) {
    __extends(DialogEquipmentListComponent, _super);
    function DialogEquipmentListComponent(dialogEquipmentListService, messageService, propertiesService) {
        var _this = _super.call(this, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, 'DialogEquipmentListComponent') || this;
        _this.dialogEquipmentListService = dialogEquipmentListService;
        _this.messageService = messageService;
        _this.propertiesService = propertiesService;
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.displayedEquipmentRowNb = 0;
        _this.equipmenTable = { list: [], moreResults: false };
        _this.searchObject = {};
        _this.selectedEquipment = undefined;
        _this.loadFunctionList();
        _this.loadStatusList();
        _this.initTableCols();
        return _this;
    }
    DialogEquipmentListComponent.prototype.search = function () {
        var _this = this;
        this.dialogEquipmentListService.findAllBidoEquipmentByCriteria(this.searchObject).subscribe(function (result) {
            if (!!result) {
                _this.equipmenTable = result;
                _this.equipmenTable.list = _utils_table_utils__WEBPACK_IMPORTED_MODULE_7__["TableUtils"].removeEmptyRows(_this.equipmenTable.list, _this.equipmenTableCols);
                _this.displayedEquipmentRowNb = _this.equipmenTable.list.length;
            }
            _this.selectedEquipment = undefined;
        });
    };
    DialogEquipmentListComponent.prototype.updateDisplayedEquipmentRowNb = function (value) {
        this.displayedEquipmentRowNb = value;
    };
    DialogEquipmentListComponent.prototype.validate = function () {
        if (!this.selectedEquipment) {
            this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelection'));
        }
        else {
            this.onValidated.emit(this.selectedEquipment);
            this.closeDialog();
        }
    };
    DialogEquipmentListComponent.prototype.initTableCols = function () {
        this.equipmenTableCols = [
            { field: 'equipmentCode', width: '8rem' },
            { field: 'pnCode', width: '8rem' },
            { field: 'sn', width: '8rem' },
            { field: 'equipmentDesignation', width: '16rem' },
            { field: 'registration', width: '8rem' },
            { field: 'fatherEquipment', width: '12rem' },
            { field: 'equipmentFunction', width: '6rem' },
            { field: 'modelCode', width: '8rem' },
            { field: 'operatorCustomerCode', width: '6rem' },
            { field: 'operationalStatus', width: '8rem' },
            { field: 'familyVariantCode', width: '8rem' }
        ];
    };
    DialogEquipmentListComponent.prototype.loadFunctionList = function () {
        var _this = this;
        this.propertiesService
            .getValue(_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__["GenericPropertyConstants"].ITEM_FAMILY_CODE_MAP)
            .subscribe(function (results) { return (_this.functionList = !!results ? _utils_select_item_utils__WEBPACK_IMPORTED_MODULE_6__["SelectItemUtils"].fromLabelValues(results) : []); });
    };
    DialogEquipmentListComponent.prototype.loadStatusList = function () {
        var _this = this;
        this.propertiesService
            .getValue(_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__["GenericPropertyConstants"].OPERATIONAL_STATUS_MAP)
            .subscribe(function (results) { return (_this.statusList = !!results ? _utils_select_item_utils__WEBPACK_IMPORTED_MODULE_6__["SelectItemUtils"].fromLabelValues(results) : []); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogEquipmentListComponent.prototype, "onValidated", void 0);
    DialogEquipmentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-equipment-list',
            template: __webpack_require__(/*! ./dialog-equipment-list.component.html */ "./src/app/shared/components/dialog-equipment-list/dialog-equipment-list.component.html"),
            styles: [__webpack_require__(/*! ./dialog-equipment-list.component.scss */ "./src/app/shared/components/dialog-equipment-list/dialog-equipment-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_dialog_equipment_list_service__WEBPACK_IMPORTED_MODULE_8__["DialogEquipmentListService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _services_properties_service__WEBPACK_IMPORTED_MODULE_5__["PropertiesService"]])
    ], DialogEquipmentListComponent);
    return DialogEquipmentListComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/components/dialog-equipment-list/dialog-equipment-list.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-equipment-list/dialog-equipment-list.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DialogEquipmentListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogEquipmentListModule", function() { return DialogEquipmentListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _dialog_equipment_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-equipment-list.component */ "./src/app/shared/components/dialog-equipment-list/dialog-equipment-list.component.ts");
/* harmony import */ var _dialog_equipment_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog-equipment-list.service */ "./src/app/shared/components/dialog-equipment-list/dialog-equipment-list.service.ts");
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







// import { ModalModule } from '../modal/modal.module';


/******************************************************************************
 * Modules
 *************************************************************************** */
var EXTERNAL_MODULES = [primeng_dialog__WEBPACK_IMPORTED_MODULE_1__["DialogModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__["DropdownModule"], primeng_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"]]; // TODO: replace DialogModule by ModalModule
// const INTERNAL_MODULES = [ModalModule];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_dialog_equipment_list_component__WEBPACK_IMPORTED_MODULE_7__["DialogEquipmentListComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_dialog_equipment_list_service__WEBPACK_IMPORTED_MODULE_8__["DialogEquipmentListService"]];
var DialogEquipmentListModule = /** @class */ (function () {
    function DialogEquipmentListModule() {
    }
    DialogEquipmentListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS),
            exports: __spread(COMPONENTS),
            imports: __spread([
                _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_4__["AngularCommonSharedModule"],
                _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_5__["AngularGenericTemplatesSharedModule"],
                _app_common_shared_module__WEBPACK_IMPORTED_MODULE_6__["AppCommonSharedModule"]
            ], EXTERNAL_MODULES
            // ...INTERNAL_MODULES
            ),
            providers: __spread(SERVICES)
        })
    ], DialogEquipmentListModule);
    return DialogEquipmentListModule;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-equipment-list/dialog-equipment-list.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-equipment-list/dialog-equipment-list.service.ts ***!
  \******************************************************************************************/
/*! exports provided: DialogEquipmentListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogEquipmentListService", function() { return DialogEquipmentListService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
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





var DialogEquipmentListService = /** @class */ (function (_super) {
    __extends(DialogEquipmentListService, _super);
    function DialogEquipmentListService(http, appConfigService, fleetManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.fleetManagementApi = fleetManagementApi;
        return _this;
    }
    DialogEquipmentListService.prototype.findAllBidoEquipmentByCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoEquipmentLwoByCriteria, criteria);
    };
    DialogEquipmentListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__["FleetManagementApi"]])
    ], DialogEquipmentListService);
    return DialogEquipmentListService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/constants/bido-notification-type-constants.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/constants/bido-notification-type-constants.ts ***!
  \**********************************************************************/
/*! exports provided: BidoNotificationTypeConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidoNotificationTypeConstants", function() { return BidoNotificationTypeConstants; });
var BidoNotificationTypeConstants = /** @class */ (function () {
    function BidoNotificationTypeConstants() {
    }
    // Maintenance
    BidoNotificationTypeConstants.ACRS_TYPE_CODE = 'ACRS';
    BidoNotificationTypeConstants.TASK_APPLIED_TYPE_CODE = 'TA';
    BidoNotificationTypeConstants.EVOLUTION_APPLIED_TYPE_CODE = 'EA';
    BidoNotificationTypeConstants.ASSEMBLY_TYPE_CODE = 'AS';
    BidoNotificationTypeConstants.DISASSEMBLY_TYPE_CODE = 'DI';
    BidoNotificationTypeConstants.FORM1_TYPE_CODE = 'FORM1';
    return BidoNotificationTypeConstants;
}());



/***/ }),

/***/ "./src/app/shared/utils/table-utils.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/utils/table-utils.ts ***!
  \*********************************************/
/*! exports provided: TableUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableUtils", function() { return TableUtils; });
/* harmony import */ var _string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string-utils */ "./src/app/shared/utils/string-utils.ts");

var TableUtils = /** @class */ (function () {
    function TableUtils() {
    }
    TableUtils.removeEmptyRows = function (rows, columns) {
        return rows.filter(function (row) {
            return columns.some(function (col) { return !_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(row[col.field]); });
        });
    };
    return TableUtils;
}());



/***/ })

}]);
//# sourceMappingURL=default~fleet-management-fleet-management-module~maintenance-work-order-work-order-module.js.map