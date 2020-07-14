(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["engineering-management-shop-manual-shop-manual-module"],{

/***/ "./src/app/main/engineering-management/shop-manual/dialog-shop-manual/dialog-shop-manual.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/shop-manual/dialog-shop-manual/dialog-shop-manual.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"isCreateOpenMode ? 25 : 55\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"section\">\r\n        <div class=\"section-content\">\r\n          <div [ngClass]=\"{ column: isCreateOpenMode, row: !isCreateOpenMode }\">\r\n            <div class=\"form-group required\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".smCode\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <input\r\n                  type=\"text\"\r\n                  name=\"smCode\"\r\n                  [(ngModel)]=\"bireShopManualDTO.smCode\"\r\n                  class=\"aw-input\"\r\n                  maxlength=\"50\"\r\n                  [disabled]=\"isReadOpenMode || !isCreateOpenMode\"\r\n                  required\r\n                />\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".smDescription\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <textarea\r\n                  class=\"aw-textarea\"\r\n                  [rows]=\"3\"\r\n                  pInputTextarea\r\n                  [(ngModel)]=\"bireShopManualDTO.smDescription\"\r\n                  [disabled]=\"isReadOpenMode\"\r\n                  maxlength=\"300\"\r\n                ></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- shop manual task table -->\r\n\r\n      <div *ngIf=\"!isCreateOpenMode\" class=\"section\">\r\n        <h4 class=\"section-title\">\r\n          {{ getComponentName() + \".shopManualTaskList\" | translate }} ({{\r\n            shopManualTableDataSource ? shopManualTableDataSource.dataCount : 0\r\n          }})\r\n        </h4>\r\n\r\n        <div class=\"section-content\">\r\n          <div class=\"row\">\r\n            <a-table [dataSource]=\"shopManualTableDataSource\">\r\n              <ng-template columnDef=\"isStandard\" let-rowData=\"rowData\">\r\n                <i *ngIf=\"rowData.isStandard\" class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n              </ng-template>\r\n            </a-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"global.close\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">{{ \"global.cancel\" | translate }}</button>\r\n\r\n    <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"validate()\" [disabled]=\"!bireShopManualDTO.smCode\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/shop-manual/dialog-shop-manual/dialog-shop-manual.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/shop-manual/dialog-shop-manual/dialog-shop-manual.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: DialogShopManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogShopManualComponent", function() { return DialogShopManualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shop_manual_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shop-manual.service */ "./src/app/main/engineering-management/shop-manual/shop-manual.service.ts");
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







var DialogShopManualComponent = /** @class */ (function (_super) {
    __extends(DialogShopManualComponent, _super);
    function DialogShopManualComponent(messageService, sessionService, shopManualService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Read, 'DialogShopManualComponent') || this;
        _this.messageService = messageService;
        _this.sessionService = sessionService;
        _this.shopManualService = shopManualService;
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.shopManualItemTableLoading = false;
        _this.filteredRowsNb = 0;
        // Table column
        _this.initShopManualTableDataSource();
        return _this;
    }
    DialogShopManualComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
        if (!this.data) {
            this.data = {};
        }
        else {
            this.bireShopManualDTO = __assign({}, this.data);
        }
        this.renderShopManualItemTable();
    };
    DialogShopManualComponent.prototype.initShopManualTableDataSource = function () {
        this.shopManualTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["TableDataSource"]({
            enableSelection: false,
            columns: [
                {
                    field: 'taskCode',
                    translateKey: this.getTranslateKey('taskCode'),
                    width: '55%'
                },
                {
                    field: 'taskVersion',
                    translateKey: this.getTranslateKey('taskVersion'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].RIGHT,
                    width: '15%'
                },
                {
                    field: 'smVersionStart',
                    translateKey: this.getTranslateKey('smVersionStart'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].RIGHT,
                    width: '15%'
                },
                {
                    field: 'smVersionEnd',
                    translateKey: this.getTranslateKey('smVersionEnd'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].RIGHT,
                    width: '15%'
                }
            ],
            data: []
        });
    };
    /**
     * Render shop manual table
     */
    DialogShopManualComponent.prototype.renderShopManualItemTable = function () {
        var _this = this;
        if (!!this.data.smCode) {
            this.shopManualItemTableLoading = true;
            var bireShopManualDTOId = {
                smCode: this.data.smCode
            };
            this.shopManualService.findBireSmTasksByShopManual(bireShopManualDTOId).subscribe(function (results) {
                _this.shopManualTableDataSource.setData(results.list);
                _this.filteredRowsNb = _this.shopManualTableDataSource.dataCount;
                _this.shopManualItemTableLoading = false;
            });
        }
    };
    /**
     * Validate and emit data
     */
    DialogShopManualComponent.prototype.validate = function () {
        var _this = this;
        if (this.isScreenValidated()) {
            if (this.openMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write) {
                // Update Mode
                this.data = __assign({}, this.bireShopManualDTO);
                this.onUpdate.emit(this.data);
                this.closeDialog();
            }
            else if (this.openMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Create) {
                // Check if entry already exist in table
                var isFound_1 = false;
                this.shopManualList.forEach(function (res) {
                    if (res.smCode === _this.bireShopManualDTO.smCode) {
                        isFound_1 = true;
                    }
                });
                if (!isFound_1) {
                    // Create Mode
                    this.data = __assign({}, this.bireShopManualDTO);
                    this.onValidated.emit(this.data);
                    this.closeDialog();
                }
                else {
                    this.messageService.showErrorMessage(this.getTranslateKey('entryAlreadyExist'));
                }
            }
        }
        else {
            this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
        }
    };
    /**
     * Is screen valid
     */
    DialogShopManualComponent.prototype.isScreenValidated = function () {
        if (!this.bireShopManualDTO.smCode || this.bireShopManualDTO.smCode.trim().length === 0) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * CLose dialog
     */
    DialogShopManualComponent.prototype.closeDialog = function () {
        this.display = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DialogShopManualComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogShopManualComponent.prototype, "shopManualList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogShopManualComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogShopManualComponent.prototype, "onValidated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogShopManualComponent.prototype, "onUpdate", void 0);
    DialogShopManualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-shop-manual',
            template: __webpack_require__(/*! ./dialog-shop-manual.component.html */ "./src/app/main/engineering-management/shop-manual/dialog-shop-manual/dialog-shop-manual.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _shop_manual_service__WEBPACK_IMPORTED_MODULE_6__["ShopManualService"]])
    ], DialogShopManualComponent);
    return DialogShopManualComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/shop-manual/shop-manual.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/engineering-management/shop-manual/shop-manual.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n\r\n      <div class=\"page-subtitle\">- {{ getComponentName() + \".list\" | translate }}</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button type=\"button\" mat-raised-button class=\"btn-with-spinner\" color=\"primary\" (click)=\"onClickSave()\">\r\n      <span class=\"lds-hourglass\" *ngIf=\"showSaveSpinner\"></span>\r\n      {{ \"global.save\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <!-- Shop manual table -->\r\n\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".shopManualList\" | translate }} ({{\r\n                    shopManualTableDataSource ? shopManualTableDataSource.dataCount : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <a-table [dataSource]=\"shopManualTableDataSource\">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf=\"shopManualTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    color=\"warn\"\r\n                    (click)=\"deleteSelectedShopManual()\"\r\n                  >\r\n                    {{ \"global.delete\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf=\"shopManualTableDataSource.dataSelectionCount === 1\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"editSelectedShopManual()\"\r\n                  >\r\n                    {{ \"global.edit\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf=\"!shopManualTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"addShopManual()\"\r\n                  >\r\n                    {{ \"global.add\" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n                <ng-template columnDef=\"isStandard\" let-rowData=\"rowData\">\r\n                  <i *ngIf=\"rowData.isStandard\" class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-shop-manual\r\n  *ngIf=\"showShopManualDialog\"\r\n  [(display)]=\"showShopManualDialog\"\r\n  [data]=\"selectedShopManualTableDialogData\"\r\n  [openMode]=\"shopManualDialogOpenMode\"\r\n  (onValidated)=\"onAddShopManual($event)\"\r\n  (onUpdate)=\"updateShopManual($event)\"\r\n  [shopManualList]=\"shopManualTableDataSource.dataSrc\"\r\n></aw-dialog-shop-manual>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/shop-manual/shop-manual.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/main/engineering-management/shop-manual/shop-manual.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZW5naW5lZXJpbmctbWFuYWdlbWVudC9zaG9wLW1hbnVhbC9zaG9wLW1hbnVhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/engineering-management/shop-manual/shop-manual.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/engineering-management/shop-manual/shop-manual.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ShopManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopManualComponent", function() { return ShopManualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shop_manual_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shop-manual.service */ "./src/app/main/engineering-management/shop-manual/shop-manual.service.ts");
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












var ShopManualComponent = /** @class */ (function (_super) {
    __extends(ShopManualComponent, _super);
    function ShopManualComponent(favoriteService, loaderService, messageService, serializationService, tabService, shopManualService, confirmationService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Read, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.shopManualService = shopManualService;
        _this.confirmationService = confirmationService;
        _this.shopManualTableLoading = false;
        _this.filteredRowsNb = 0;
        _this.shopManualDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Read;
        // Table column
        _this.initShopManualTableDataSource();
        _this.showShopManualDialog = false;
        _this.bireShopManualUpdatedList = [];
        _this.bireShopManualAddedList = [];
        return _this;
    }
    ShopManualComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].ENG_SHOP_MANUAL;
    };
    ShopManualComponent.prototype.ngOnInit = function () {
        this.displayComponentContext(this.getTranslateKey('list'), true);
        this.loadShopManualTableData();
        if (this.componentData.objectId && this.componentData.objectId.length > 0) {
            this.subtitle = this.componentData.objectId;
        }
    };
    ShopManualComponent.prototype.initShopManualTableDataSource = function () {
        this.shopManualTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'smCode',
                    translateKey: this.getTranslateKey('smCode'),
                    width: '30%'
                },
                {
                    field: 'smDescription',
                    translateKey: this.getTranslateKey('smDescription'),
                    width: '70%'
                }
            ],
            data: []
        });
    };
    ShopManualComponent.prototype.loadShopManualTableData = function (isfromRefresh) {
        var _this = this;
        this.shopManualTableLoading = true;
        var flag = isfromRefresh ? true : false;
        this.shopManualService.findAllBireShopManuals().subscribe(function (results) {
            _this.shopManualTableDataSource.setData(results.list);
            _this.filteredRowsNb = _this.shopManualTableDataSource.dataCount;
            if (!flag) {
                if (_this.bireShopManualAddedList) {
                    _this.bireShopManualAddedList.forEach(function (entry) {
                        _this.shopManualTableDataSource.addData([entry]);
                    });
                }
                // TO reenter modified entry in table
                if (_this.bireShopManualUpdatedList) {
                    _this.shopManualTableDataSource.dataSrc.forEach(function (res) {
                        _this.bireShopManualUpdatedList.forEach(function (entry) {
                            if (res.smCode === entry.smCode) {
                                _this.shopManualTableDataSource.replaceData(_this.shopManualTableDataSource.dataSelection[0], entry);
                            }
                        });
                    });
                }
            }
            _this.shopManualTableLoading = false;
        });
    };
    // tslint:disable-next-line:no-any
    ShopManualComponent.prototype.onFilter = function (event) {
        this.filteredRowsNb = event.filteredValue.length;
    };
    /**
     * On Add button click
     */
    ShopManualComponent.prototype.addShopManual = function () {
        this.selectedShopManualTableDialogData = {};
        this.shopManualDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Create;
        this.showShopManualDialog = true;
    };
    /**
     * On add table row
     */
    ShopManualComponent.prototype.onAddShopManual = function (ev) {
        this.shopManualTableDataSource.addData([ev]);
        this.bireShopManualAddedList.push(ev);
        this.filteredRowsNb = this.shopManualTableDataSource.dataCount;
    };
    /**
     * Delete selected Row
     */
    ShopManualComponent.prototype.deleteSelectedShopManual = function () {
        var _this = this;
        var partialMessageKey = this.shopManualTableDataSource.dataSelectionCount > 1
            ? 'confirmDeleteSelectedShopManuals'
            : 'confirmDeleteSelectedShopManual';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                var bireShopManualDTOId = [];
                _this.shopManualTableDataSource.dataSelection.forEach(function (res) {
                    if (!!res.smCode) {
                        bireShopManualDTOId.push({ smCode: res.smCode });
                    }
                    else {
                        _super.prototype.throwUnboundLocalError.call(_this, 'deleteSelectedShopManual', 'res.smCode');
                    }
                });
                _this.shopManualService.removeBireShopManual(bireShopManualDTOId).subscribe(function (results) {
                    // Removing entry from added list if added
                    _this.bireShopManualAddedList.forEach(function (entry, index) {
                        _this.shopManualTableDataSource.dataSelection.forEach(function (en) {
                            if (entry.smCode === en.smCode) {
                                _this.bireShopManualAddedList.splice(index, 1);
                            }
                        });
                    });
                    // Removing entry from updated list if added
                    _this.bireShopManualUpdatedList.forEach(function (entry, index) {
                        _this.shopManualTableDataSource.dataSelection.forEach(function (en) {
                            if (entry.smCode === en.smCode) {
                                _this.bireShopManualUpdatedList.splice(index, 1);
                            }
                        });
                    });
                    _this.refresh();
                    _this.shopManualTableDataSource.dataSelection = [];
                });
            }
        });
    };
    /**
     * Edit Selected Row
     */
    ShopManualComponent.prototype.editSelectedShopManual = function () {
        this.selectedShopManualCodeToEdit = '';
        this.selectedShopManualTableDialogData = this.shopManualTableDataSource.dataSelection[0];
        this.shopManualDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write;
        this.showShopManualDialog = true;
        var selShopManualCode = this.shopManualTableDataSource.dataSelection[0].smCode;
        if (!!selShopManualCode) {
            this.selectedShopManualCodeToEdit = selShopManualCode;
        }
        else {
            _super.prototype.throwUnboundLocalError.call(this, 'editSelectedShopManual', 'selShopManualCode');
        }
    };
    /**
     * On update table row
     */
    ShopManualComponent.prototype.updateShopManual = function (ev) {
        var _this = this;
        this.shopManualTableDataSource.replaceData(this.shopManualTableDataSource.dataSelection[0], ev);
        var isNew = false;
        this.bireShopManualAddedList.forEach(function (res, index) {
            if (res.smCode === ev.smCode) {
                isNew = true;
                _this.bireShopManualAddedList.splice(index, 1);
            }
        });
        if (!isNew) {
            this.bireShopManualUpdatedList.forEach(function (res, index) {
                if (res.smCode === ev.smCode) {
                    _this.bireShopManualUpdatedList.splice(index, 1);
                }
            });
            this.bireShopManualUpdatedList.push(ev);
        }
        else {
            this.bireShopManualAddedList.push(ev);
        }
        this.shopManualTableDataSource.dataSelection = [];
    };
    /**
     * Saving Data
     */
    ShopManualComponent.prototype.onClickSave = function () {
        var _this = this;
        if (this.isSaveValid(this.bireShopManualAddedList, this.bireShopManualUpdatedList)) {
            var saveCatalogInput = {
                bireShopManualAddedList: this.bireShopManualAddedList,
                bireShopManualUpdatedList: this.bireShopManualUpdatedList
            };
            this.showSaveSpinner = true;
            this.shopManualService.saveCatalog(saveCatalogInput).subscribe(function () {
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnSave'));
                // Clearing Added and updated List
                _this.bireShopManualAddedList = [];
                _this.bireShopManualUpdatedList = [];
                _this.showSaveSpinner = false;
            }, function (error) {
                _this.showSaveSpinner = false;
            });
        }
    };
    ShopManualComponent.prototype.isSaveValid = function (dtoAdd, dtoUpdate) {
        // if (dtoAdd.length === 0 && dtoUpdate.length === 0) {
        //   return false;
        // }
        return true;
    };
    ShopManualComponent.prototype.refresh = function () {
        this.shopManualTableDataSource.dataSelection = [];
        this.bireShopManualAddedList = [];
        this.bireShopManualUpdatedList = [];
        this.loadShopManualTableData(true);
    };
    ShopManualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-shop-manual',
            template: __webpack_require__(/*! ./shop-manual.component.html */ "./src/app/main/engineering-management/shop-manual/shop-manual.component.html"),
            styles: [__webpack_require__(/*! ./shop-manual.component.scss */ "./src/app/main/engineering-management/shop-manual/shop-manual.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__["TabService"],
            _shop_manual_service__WEBPACK_IMPORTED_MODULE_11__["ShopManualService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]])
    ], ShopManualComponent);
    return ShopManualComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/shop-manual/shop-manual.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/engineering-management/shop-manual/shop-manual.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ShopManualModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopManualModule", function() { return ShopManualModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _dialog_shop_manual_dialog_shop_manual_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog-shop-manual/dialog-shop-manual.component */ "./src/app/main/engineering-management/shop-manual/dialog-shop-manual/dialog-shop-manual.component.ts");
/* harmony import */ var _shop_manual_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shop-manual.component */ "./src/app/main/engineering-management/shop-manual/shop-manual.component.ts");
/* harmony import */ var _shop_manual_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shop-manual.service */ "./src/app/main/engineering-management/shop-manual/shop-manual.service.ts");
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
var EXTERNAL_MODULES = [primeng_table__WEBPACK_IMPORTED_MODULE_1__["TableModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"]];
var INTERNAL_MODULES = [_shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_7__["TableModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [_shop_manual_component__WEBPACK_IMPORTED_MODULE_10__["ShopManualComponent"], _dialog_shop_manual_dialog_shop_manual_component__WEBPACK_IMPORTED_MODULE_9__["DialogShopManualComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_shop_manual_service__WEBPACK_IMPORTED_MODULE_11__["ShopManualService"]];
var ShopManualModule = /** @class */ (function () {
    function ShopManualModule() {
    }
    ShopManualModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_8__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], ShopManualModule);
    return ShopManualModule;
}());



/***/ }),

/***/ "./src/app/main/engineering-management/shop-manual/shop-manual.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/engineering-management/shop-manual/shop-manual.service.ts ***!
  \********************************************************************************/
/*! exports provided: ShopManualService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopManualService", function() { return ShopManualService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/api/task-management.api */ "./src/app/shared/api/task-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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






var ShopManualService = /** @class */ (function (_super) {
    __extends(ShopManualService, _super);
    function ShopManualService(http, appConfigService, taskManagementApi, fleetManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.taskManagementApi = taskManagementApi;
        _this.fleetManagementApi = fleetManagementApi;
        return _this;
    }
    ShopManualService.prototype.findAllBireShopManuals = function () {
        return _super.prototype.post.call(this, this.taskManagementApi.findAllBireShopManuals);
    };
    ShopManualService.prototype.removeBireShopManual = function (bireShopManualDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.removeBireShopManual, bireShopManualDTOId);
    };
    ShopManualService.prototype.saveCatalog = function (saveCatalogInput) {
        return _super.prototype.post.call(this, this.fleetManagementApi.saveCatalog, saveCatalogInput);
    };
    ShopManualService.prototype.findBireSmTasksByShopManual = function (bireShopManualDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireSmTasksByShopManual, bireShopManualDTOId);
    };
    ShopManualService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"],
            _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_3__["TaskManagementApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__["FleetManagementApi"]])
    ], ShopManualService);
    return ShopManualService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__["AbstractAwHttpService"]));



/***/ })

}]);
//# sourceMappingURL=engineering-management-shop-manual-shop-manual-module.js.map