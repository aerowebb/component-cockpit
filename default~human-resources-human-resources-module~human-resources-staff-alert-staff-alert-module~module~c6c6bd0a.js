(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~human-resources-human-resources-module~human-resources-staff-alert-staff-alert-module~module~c6c6bd0a"],{

/***/ "./node_modules/primeng/keyfilter.js":
/*!*******************************************!*\
  !*** ./node_modules/primeng/keyfilter.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/keyfilter/keyfilter */ "./node_modules/primeng/components/keyfilter/keyfilter.js"));

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

/***/ "./src/app/shared/components/dialog-search-employee/dialog-search-employee.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-employee/dialog-search-employee.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"50\">\r\n  <a-header>\r\n    <div class=\"modal-title\">\r\n      {{ \"employeeOVSPopup.title\" | translate }} ({{ resultsTable.list ? resultsTable.list.length : 0 }})\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"row\">\r\n      <p-table\r\n        [resizableColumns]=\"true\"\r\n        #ptable\r\n        class=\"aw-table2\"\r\n        [columns]=\"resultsTableCols\"\r\n        [value]=\"resultsTable.list\"\r\n        [(selection)]=\"selectedObject\"\r\n        selectionMode=\"single\"\r\n        dataKey=\"employeeNumber\"\r\n        [scrollable]=\"true\"\r\n        (onRowUnselect)=\"onRowUnselect()\"\r\n      >\r\n        <ng-template pTemplate=\"emptymessage\">\r\n          <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n          <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n            <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n            <div class=\"lds-hourglass\"></div>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"caption\">\r\n          <div class=\"aw-table-header\">\r\n            <div class=\"aw-table-global-filter\">\r\n              <label class=\"aw-table-global-filter-label\">\r\n                <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n              </label>\r\n\r\n              <input\r\n                #ptableGlobalFilter\r\n                class=\"aw-table-global-filter-input\"\r\n                type=\"text\"\r\n                placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                (input)=\"ptable.filterGlobal($event.target.value, 'contains')\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n          <colgroup>\r\n            <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n          </colgroup>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n          <tr>\r\n            <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n              {{ \"employeeOVSPopup.\" + col.field | translate }}\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n          <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n            <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">{{ rowData[col.field] }}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"onValidate()\" [disabled]=\"isOneObjectSelected()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-search-employee/dialog-search-employee.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-employee/dialog-search-employee.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DialogSearchEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchEmployeeComponent", function() { return DialogSearchEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _dialog_search_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-search-employee.service */ "./src/app/shared/components/dialog-search-employee/dialog-search-employee.service.ts");
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





var DialogSearchEmployeeComponent = /** @class */ (function (_super) {
    __extends(DialogSearchEmployeeComponent, _super);
    function DialogSearchEmployeeComponent(dialogSearchEmployeeService, messageService) {
        var _this = _super.call(this, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'employeeOVSPopup') || this;
        _this.dialogSearchEmployeeService = dialogSearchEmployeeService;
        _this.messageService = messageService;
        _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.resultsTable = {
            list: [],
            moreResults: false
        };
        _this.searchObject = {};
        _this.selectedObject = {};
        _this.resultsTableCols = [
            { field: 'employeeLastName', alignment: 'left' },
            { field: 'employeeFirstName', alignment: 'left' },
            { field: 'employeeNumber', alignment: 'left' }
        ];
        _this.searchEmployees();
        return _this;
    }
    Object.defineProperty(DialogSearchEmployeeComponent.prototype, "name", {
        set: function (name) {
            this.searchObject.employeeLastName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogSearchEmployeeComponent.prototype, "firstName", {
        set: function (firstName) {
            this.searchObject.employeeFirstName = firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DialogSearchEmployeeComponent.prototype, "employeeNumber", {
        set: function (employeeNumber) {
            this.searchObject.employeeNumber = employeeNumber;
        },
        enumerable: true,
        configurable: true
    });
    /*
      <summary>Search models for operator or owner</summary>
      */
    DialogSearchEmployeeComponent.prototype.searchEmployees = function () {
        var _this = this;
        this.dialogSearchEmployeeService.findEmployee(this.searchObject).subscribe(function (results) {
            if (results) {
                _this.resultsTable = results;
            }
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSearch'));
        });
    };
    /*
      <summary>Emit the selectedObject on validate</summary>
      */
    DialogSearchEmployeeComponent.prototype.onValidate = function () {
        this.onSelected.emit(this.selectedObject);
        this.display = false;
    };
    // Clean the selectedObject object if the row is unselect
    DialogSearchEmployeeComponent.prototype.onRowUnselect = function () {
        this.selectedObject = {};
    };
    // Clean all the object on rerender
    DialogSearchEmployeeComponent.prototype.onShow = function () {
        this.selectedObject = {};
        this.resultsTable = {
            list: [],
            moreResults: false
        };
    };
    /*
      <summary>Close the pop up on cancel</summary>
      */
    DialogSearchEmployeeComponent.prototype.onCancel = function () {
        this.selectedObject = {};
        this.resultsTable = {
            list: [],
            moreResults: false
        };
        this.display = false;
    };
    DialogSearchEmployeeComponent.prototype.isOneObjectSelected = function () {
        return !this.selectedObject.employeeNumber;
    };
    DialogSearchEmployeeComponent.prototype.resetFilter = function () {
        this.filterTxt = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('employee-name'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DialogSearchEmployeeComponent.prototype, "name", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('employee-firstName'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DialogSearchEmployeeComponent.prototype, "firstName", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('employee-number'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DialogSearchEmployeeComponent.prototype, "employeeNumber", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DialogSearchEmployeeComponent.prototype, "onSelected", void 0);
    DialogSearchEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-search-employee',
            template: __webpack_require__(/*! ./dialog-search-employee.component.html */ "./src/app/shared/components/dialog-search-employee/dialog-search-employee.component.html")
        }),
        __metadata("design:paramtypes", [_dialog_search_employee_service__WEBPACK_IMPORTED_MODULE_4__["DialogSearchEmployeeService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], DialogSearchEmployeeComponent);
    return DialogSearchEmployeeComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/components/dialog-search-employee/dialog-search-employee.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-employee/dialog-search-employee.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: DialogSearchEmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchEmployeeModule", function() { return DialogSearchEmployeeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dialog_search_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-search-employee.component */ "./src/app/shared/components/dialog-search-employee/dialog-search-employee.component.ts");
/* harmony import */ var _dialog_search_employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-search-employee.service */ "./src/app/shared/components/dialog-search-employee/dialog-search-employee.service.ts");
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
var COMPONENTS = [_dialog_search_employee_component__WEBPACK_IMPORTED_MODULE_6__["DialogSearchEmployeeComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_dialog_search_employee_service__WEBPACK_IMPORTED_MODULE_7__["DialogSearchEmployeeService"]];
var DialogSearchEmployeeModule = /** @class */ (function () {
    function DialogSearchEmployeeModule() {
    }
    DialogSearchEmployeeModule = __decorate([
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
    ], DialogSearchEmployeeModule);
    return DialogSearchEmployeeModule;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-search-employee/dialog-search-employee.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-employee/dialog-search-employee.service.ts ***!
  \********************************************************************************************/
/*! exports provided: DialogSearchEmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchEmployeeService", function() { return DialogSearchEmployeeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api/bidt-employee.api */ "./src/app/shared/api/bidt-employee.api.ts");
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





var DialogSearchEmployeeService = /** @class */ (function (_super) {
    __extends(DialogSearchEmployeeService, _super);
    function DialogSearchEmployeeService(http, appConfigService, bidtEmployeeApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtEmployeeApi = bidtEmployeeApi;
        return _this;
    }
    DialogSearchEmployeeService.prototype.findEmployee = function (criteria) {
        return _super.prototype.post.call(this, this.bidtEmployeeApi.findBidtEmployeeBySearchCriteria, criteria);
    };
    DialogSearchEmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_2__["BidtEmployeeApi"]])
    ], DialogSearchEmployeeService);
    return DialogSearchEmployeeService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ })

}]);
//# sourceMappingURL=default~human-resources-human-resources-module~human-resources-staff-alert-staff-alert-module~module~c6c6bd0a.js.map