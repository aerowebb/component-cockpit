(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~collaborative-cockpit-collaborative-cockpit-module~fleet-management-fleet-management-module~~71485da2"],{

/***/ "./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ \"equipmentPopin.title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"search-dialog-container\">\r\n      <div class=\"section search-criteria-section\">\r\n        <h4 class=\"section-title\">{{ \"global.search\" | translate }}</h4>\r\n\r\n        <div class=\"section-content\">\r\n          <div class=\"column\" *ngIf=\"!isGroundEquipment\">\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.pnCode\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.pnCode\" [disabled]=\"pnChoose\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.sn\" | translate }} </label>\r\n\r\n                <div class=\"form-control\"><input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.sn\" /></div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.equipmentCode\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.equipmentCode\" />\r\n                </div>\r\n              </div>\r\n              <!--<div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.batchNumber\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.batchNumber\" />\r\n                </div>\r\n              </div>-->\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.equipmentDesignation\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.equipmentDesignation\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.registration\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.registration\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.equipmentFunction\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [options]=\"propertyFunctions\"\r\n                    [(ngModel)]=\"searchObject.equipmentFunction\"\r\n                    [showClear]=\"true\"\r\n                    placeholder=\"&nbsp;\"\r\n                    appendTo=\"body\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.operatorCustomerCode\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.operatorCustomerCode\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.modelCode\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.modelCode\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.operationalStatus\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [options]=\"propertyStatus\"\r\n                    [(ngModel)]=\"searchObject.operationalStatus\"\r\n                    [showClear]=\"true\"\r\n                    placeholder=\"&nbsp;\"\r\n                    appendTo=\"body\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row search-criteria-footer\">\r\n              <div class=\"search-actions\">\r\n                <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"searchEquipments()\">\r\n                  <span>{{ \"global.toSearch\" | translate }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- FOR GROUND EQUIPMENT -->\r\n          <div class=\"column\" *ngIf=\"isGroundEquipment\">\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.equipmentCode\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.equipmentCode\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.pnCode\" | translate }} </label>\r\n\r\n                <div class=\"form-control\"><input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.pnCode\" /></div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.sn\" | translate }} </label>\r\n\r\n                <div class=\"form-control\"><input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.sn\" /></div>\r\n              </div>\r\n              <div class=\"form-group\"></div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.equipmentDesignation\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.equipmentDesignation\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.operatorCustomerCode\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.operatorCustomerCode\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"equipmentPopin.operationalStatus\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [options]=\"propertyStatus\"\r\n                    [(ngModel)]=\"searchObject.operationalStatus\"\r\n                    [showClear]=\"true\"\r\n                    placeholder=\"&nbsp;\"\r\n                    appendTo=\"body\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row search-criteria-footer\">\r\n              <div class=\"search-actions\">\r\n                <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"searchEquipments()\">\r\n                  <span>{{ \"global.toSearch\" | translate }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"section results-section\">\r\n        <h4 class=\"section-title\">\r\n          {{ \"global.results\" | translate }} ({{ resultsTable.list ? resultsTable.list.length : 0 }})\r\n        </h4>\r\n\r\n        <div class=\"section-content\">\r\n          <p-table\r\n            [resizableColumns]=\"true\"\r\n            #ptable\r\n            class=\"aw-table2\"\r\n            [columns]=\"resultsTableCols\"\r\n            [value]=\"resultsTable.list\"\r\n            [(selection)]=\"selectedObjectList\"\r\n            dataKey=\"equipmentCode\"\r\n            [scrollable]=\"true\"\r\n            [selectionMode]=\"selectionMode\"\r\n          >\r\n            <ng-template pTemplate=\"emptymessage\">\r\n              <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n              <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                <div class=\"lds-hourglass\"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"caption\">\r\n              <div class=\"aw-table-header\">\r\n                <div class=\"aw-table-global-filter\">\r\n                  <label class=\"aw-table-global-filter-label\">\r\n                    <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    #ptableGlobalFilter\r\n                    class=\"aw-table-global-filter-input\"\r\n                    type=\"text\"\r\n                    placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                    (input)=\"ptable.filterGlobal($event.target.value, 'contains')\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"colgroup\" let-columns>\r\n              <colgroup>\r\n                <col *ngIf=\"selectionMultiple\" class=\"aw-table-checkbox-wrapper\" />\r\n                <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n              <tr>\r\n                <th *ngIf=\"selectionMultiple\" class=\"aw-table-checkbox-wrapper\">\r\n                  <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                </th>\r\n\r\n                <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                  {{ \"equipmentPopin.\" + col.field | translate }}\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n              <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                <td *ngIf=\"selectionMultiple\" class=\"aw-table-checkbox-wrapper\">\r\n                  <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                </td>\r\n\r\n                <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                  {{ rowData[col.field] }}\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"onValidate()\" [disabled]=\"disableValidate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DialogSearchEquipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchEquipmentComponent", function() { return DialogSearchEquipmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/label-value-utils */ "./src/app/shared/utils/label-value-utils.ts");
/* harmony import */ var _dialog_search_equipment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-search-equipment.service */ "./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.service.ts");
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








/**
 * DEPRECATED: use `aw-dialog-equipment-list`
 */
var DialogSearchEquipmentComponent = /** @class */ (function (_super) {
    __extends(DialogSearchEquipmentComponent, _super);
    function DialogSearchEquipmentComponent(dialogSearchAssetService, messageService, propertiesService) {
        var _this = _super.call(this, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, 'equipmentPopin') || this;
        _this.dialogSearchAssetService = dialogSearchAssetService;
        _this.messageService = messageService;
        _this.propertiesService = propertiesService;
        _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.selectionMode = 'single';
        _this.resultsTable = {
            list: [],
            moreResults: false
        };
        _this.searchObject = {};
        _this.selectedObjectList = [];
        _this.selectionMultiple = false;
        _this.resultsTableCols = [
            { field: 'familyVariantCode', alignment: 'left' },
            { field: 'pnCode', alignment: 'left' },
            { field: 'sn', alignment: 'left' },
            { field: 'equipmentDesignation', alignment: 'left' },
            { field: 'equipmentFunction', alignment: 'left' },
            { field: 'operationalStatus', alignment: 'left' }
        ];
        return _this;
    }
    Object.defineProperty(DialogSearchEquipmentComponent.prototype, "qualificationCode", {
        set: function (code) {
            this.searchObject = {};
            this.searchObject.equipmentCode = code;
        },
        enumerable: true,
        configurable: true
    });
    DialogSearchEquipmentComponent.prototype.ngOnInit = function () {
        if (this.pnChoose) {
            this.searchObject.pnCode = this.pnChoose;
        }
        if (this.selectionMultiple) {
            this.selectionMode = 'multiple';
        }
        else {
            this.selectionMode = 'single';
        }
        this.loadDropdowns();
        if (!this.isGroundEquipment) {
            this.resultsTableCols.splice(1, 0, { field: 'registration', alignment: 'left' });
        }
    };
    Object.defineProperty(DialogSearchEquipmentComponent.prototype, "assetCode", {
        set: function (assetCode) {
            this.searchObject.equipmentCode = assetCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogSearchEquipmentComponent.prototype, "familyVariant", {
        set: function (familyVariant) {
            this.searchObject.familyVariantCode = familyVariant;
        },
        enumerable: true,
        configurable: true
    });
    /*
      <summary>Search work package for operator or owner</summary>
      */
    DialogSearchEquipmentComponent.prototype.searchEquipments = function () {
        var _this = this;
        if (this.isGroundEquipment) {
            this.searchObject.equipmentFunction = this.equipmentFunction;
        }
        var observable;
        if (!this.isGroundEquipment) {
            if (!this.searchAllEquipment) {
                observable = this.dialogSearchAssetService.findBidoEquipmentsBySearchCriteria(this.searchObject);
            }
            else {
                observable = this.dialogSearchAssetService.findAllBidoEquipmentsBySearchCriteria(this.searchObject);
            }
        }
        else {
            observable = this.dialogSearchAssetService.findGroundEquipmentsBySearchCriteria(this.searchObject);
        }
        observable.subscribe(function (results) {
            if (results) {
                results.list.forEach(function (element) {
                    _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_6__["LabelValueUtils"].stringValueToLabel(element, 'equipmentFunction', _this.propertyFunctions);
                    _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_6__["LabelValueUtils"].stringValueToLabel(element, 'operationalStatus', _this.propertyStatus);
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
    DialogSearchEquipmentComponent.prototype.onValidate = function () {
        var _this = this;
        if (this.selectionMultiple) {
            this.selectedObjectList.forEach(function (elt) {
                _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_6__["LabelValueUtils"].labelToStringValue(elt, 'equipmentFunction', _this.propertyFunctions);
                _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_6__["LabelValueUtils"].labelToStringValue(elt, 'operationalStatus', _this.propertyStatus);
            });
        }
        else {
            _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_6__["LabelValueUtils"].labelToStringValue(JSON.parse(JSON.stringify(this.selectedObjectList)), 'equipmentFunction', this.propertyFunctions);
            _utils_label_value_utils__WEBPACK_IMPORTED_MODULE_6__["LabelValueUtils"].labelToStringValue(JSON.parse(JSON.stringify(this.selectedObjectList)), 'operationalStatus', this.propertyStatus);
        }
        this.onSelected.emit(this.selectedObjectList);
        this.display = false;
    };
    DialogSearchEquipmentComponent.prototype.disableValidate = function () {
        return this.selectedObjectList.length === 0;
    };
    DialogSearchEquipmentComponent.prototype.loadStatus = function () {
        var _this = this;
        this.propertyStatus = [];
        var observable = !this.isGroundEquipment
            ? this.propertiesService.getValue(_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__["GenericPropertyConstants"].OPERATIONAL_STATUS_MAP)
            : this.propertiesService.getValue(_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__["GenericPropertyConstants"].GROUND_EQUIPMENT_STATUS_MAP);
        observable.subscribe(function (results) {
            if (results) {
                _this.propertyStatus = results;
            }
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnStatusList'));
        });
    };
    DialogSearchEquipmentComponent.prototype.loadFunctions = function () {
        var _this = this;
        var observable = !this.isGroundEquipment
            ? this.propertiesService.getValue(_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__["GenericPropertyConstants"].ITEM_FAMILY_CODE_MAP)
            : this.dialogSearchAssetService.fetchGroundEquipmentFunctionList();
        observable.subscribe(function (results) {
            if (results) {
                _this.propertyFunctions = results;
            }
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnFunctionList'));
        });
    };
    DialogSearchEquipmentComponent.prototype.loadDropdowns = function () {
        // Load DropDown
        this.loadFunctions();
        this.loadStatus();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('equipment-code'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DialogSearchEquipmentComponent.prototype, "qualificationCode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogSearchEquipmentComponent.prototype, "selectionMultiple", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DialogSearchEquipmentComponent.prototype, "onSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogSearchEquipmentComponent.prototype, "isGroundEquipment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogSearchEquipmentComponent.prototype, "equipmentFunction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogSearchEquipmentComponent.prototype, "searchAllEquipment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogSearchEquipmentComponent.prototype, "pnChoose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('equipment-code'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DialogSearchEquipmentComponent.prototype, "assetCode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('family-variant'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DialogSearchEquipmentComponent.prototype, "familyVariant", null);
    DialogSearchEquipmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-search-equipment',
            template: __webpack_require__(/*! ./dialog-search-equipment.component.html */ "./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.component.html")
        }),
        __metadata("design:paramtypes", [_dialog_search_equipment_service__WEBPACK_IMPORTED_MODULE_7__["DialogSearchEquipmentService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _services_properties_service__WEBPACK_IMPORTED_MODULE_5__["PropertiesService"]])
    ], DialogSearchEquipmentComponent);
    return DialogSearchEquipmentComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: DialogSearchEquipmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchEquipmentModule", function() { return DialogSearchEquipmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dialog_search_equipment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-search-equipment.component */ "./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.component.ts");
/* harmony import */ var _dialog_search_equipment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog-search-equipment.service */ "./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.service.ts");
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
var COMPONENTS = [_dialog_search_equipment_component__WEBPACK_IMPORTED_MODULE_7__["DialogSearchEquipmentComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_dialog_search_equipment_service__WEBPACK_IMPORTED_MODULE_8__["DialogSearchEquipmentService"]];
var DialogSearchEquipmentModule = /** @class */ (function () {
    function DialogSearchEquipmentModule() {
    }
    DialogSearchEquipmentModule = __decorate([
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
    ], DialogSearchEquipmentModule);
    return DialogSearchEquipmentModule;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: DialogSearchEquipmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchEquipmentService", function() { return DialogSearchEquipmentService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _api_asset_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/asset-management.api */ "./src/app/shared/api/asset-management.api.ts");
/* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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






var DialogSearchEquipmentService = /** @class */ (function (_super) {
    __extends(DialogSearchEquipmentService, _super);
    function DialogSearchEquipmentService(http, appConfigService, fleetManagementApi, assetManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.fleetManagementApi = fleetManagementApi;
        _this.assetManagementApi = assetManagementApi;
        return _this;
    }
    DialogSearchEquipmentService.prototype.findBidoEquipmentsBySearchCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentsBySearchCriteria, criteria);
    };
    DialogSearchEquipmentService.prototype.findAllBidoEquipmentsBySearchCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoEquipmentsBySearchCriteria, criteria);
    };
    DialogSearchEquipmentService.prototype.findBidoEquipment = function (asset) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, asset);
    };
    DialogSearchEquipmentService.prototype.fetchGroundEquipmentFunctionList = function () {
        return _super.prototype.post.call(this, this.assetManagementApi.fetchGroundEquipmentFunctionList);
    };
    DialogSearchEquipmentService.prototype.findGroundEquipmentsBySearchCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.assetManagementApi.findGroundEquipmentsBySearchCriteria, criteria);
    };
    DialogSearchEquipmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__["FleetManagementApi"],
            _api_asset_management_api__WEBPACK_IMPORTED_MODULE_3__["AssetManagementApi"]])
    ], DialogSearchEquipmentService);
    return DialogSearchEquipmentService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__["AbstractAwHttpService"]));



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
//# sourceMappingURL=default~collaborative-cockpit-collaborative-cockpit-module~fleet-management-fleet-management-module~~71485da2.js.map