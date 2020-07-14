(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~maintenance-maintenance-module~maintenance-work-orders-calendar-work-orders-calendar-module~~44a16550"],{

/***/ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"search-dialog-container\">\r\n      <div class=\"section search-criteria-section\">\r\n        <div class=\"section-content\">\r\n          <div class=\"column\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".assignedTo\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  [options]=\"userList\"\r\n                  [(ngModel)]=\"woScheduleInfo.assignedTo\"\r\n                  [showClear]=\"true\"\r\n                  placeholder=\"&nbsp;\"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">\r\n                {{ getComponentName() + \".scheduledStartDate\" | translate }}\r\n              </label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-calendar\r\n                  showButtonBar=\"true\"\r\n                  [monthNavigator]=\"true\"\r\n                  [yearNavigator]=\"true\"\r\n                  [yearRange]=\"sessionService.calendarYearRange\"\r\n                  class=\"aw-calendar\"\r\n                  [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                  [locale]=\"sessionService.calendarFormat\"\r\n                  [(ngModel)]=\"woScheduleInfo.woScheduledStartDate\"\r\n                  appendTo=\"body\"\r\n                  [showTime]=\"true\"\r\n                ></p-calendar>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">\r\n                {{ getComponentName() + \".scheduledEndDate\" | translate }}\r\n              </label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-calendar\r\n                  showButtonBar=\"true\"\r\n                  [monthNavigator]=\"true\"\r\n                  [yearNavigator]=\"true\"\r\n                  [yearRange]=\"sessionService.calendarYearRange\"\r\n                  class=\"aw-calendar\"\r\n                  [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                  [locale]=\"sessionService.calendarFormat\"\r\n                  [(ngModel)]=\"woScheduleInfo.woScheduledEndDate\"\r\n                  appendTo=\"body\"\r\n                  [showTime]=\"true\"\r\n                ></p-calendar>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">{{ \"global.cancel\" | translate }}</button>\r\n\r\n    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"validate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.component.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.component.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .modal .modal__content {\n  min-height: 30vh;\n  max-width: 50vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLXBhY2thZ2UvZm9ybS9wb3B1cHMvZGlhbG9nLXdvcmstb3JkZXItc2NoZWR1bGluZy1lZGl0aW9uL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFx3b3JrLXBhY2thZ2VcXGZvcm1cXHBvcHVwc1xcZGlhbG9nLXdvcmstb3JkZXItc2NoZWR1bGluZy1lZGl0aW9uXFxkaWFsb2ctd29yay1vcmRlci1zY2hlZHVsaW5nLWVkaXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFSSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLXBhY2thZ2UvZm9ybS9wb3B1cHMvZGlhbG9nLXdvcmstb3JkZXItc2NoZWR1bGluZy1lZGl0aW9uL2RpYWxvZy13b3JrLW9yZGVyLXNjaGVkdWxpbmctZWRpdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC9kZWVwLyAubW9kYWwgLm1vZGFsX19jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDMwdmg7XHJcbiAgICBtYXgtd2lkdGg6IDUwdnc7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: DialogWorkOrderSchedulingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogWorkOrderSchedulingEditComponent", function() { return DialogWorkOrderSchedulingEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _work_package_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../work-package-form.service */ "./src/app/main/maintenance/work-package/form/work-package-form.service.ts");
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





var DialogWorkOrderSchedulingEditComponent = /** @class */ (function (_super) {
    __extends(DialogWorkOrderSchedulingEditComponent, _super);
    function DialogWorkOrderSchedulingEditComponent(sessionService, wpFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'DialogWorkOrderSchedulingEditComponent') || this;
        _this.sessionService = sessionService;
        _this.wpFormService = wpFormService;
        _this.init();
        return _this;
    }
    DialogWorkOrderSchedulingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wpFormService.userList$.subscribe(function (list) { return (_this.userList = list); });
    };
    DialogWorkOrderSchedulingEditComponent.prototype.init = function () {
        this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.woScheduleInfo = {
            assignedTo: undefined,
            woScheduledEndDate: undefined,
            woScheduledStartDate: undefined
        };
    };
    DialogWorkOrderSchedulingEditComponent.prototype.validate = function () {
        this.onValidated.emit(this.woScheduleInfo);
        this.closeDialog();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogWorkOrderSchedulingEditComponent.prototype, "onValidated", void 0);
    DialogWorkOrderSchedulingEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-work-order-scheduling-edition',
            template: __webpack_require__(/*! ./dialog-work-order-scheduling-edition.component.html */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.component.html"),
            styles: [__webpack_require__(/*! ./dialog-work-order-scheduling-edition.component.scss */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"], _work_package_form_service__WEBPACK_IMPORTED_MODULE_4__["WorkPackageFormService"]])
    ], DialogWorkOrderSchedulingEditComponent);
    return DialogWorkOrderSchedulingEditComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.module.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.module.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: DialogWorkOrderSchedulingEditionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogWorkOrderSchedulingEditionModule", function() { return DialogWorkOrderSchedulingEditionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dialog_work_order_scheduling_edition_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-work-order-scheduling-edition.component */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.component.ts");
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
var EXTERNAL_MODULES = [primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__["DropdownModule"], _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_dialog_work_order_scheduling_edition_component__WEBPACK_IMPORTED_MODULE_7__["DialogWorkOrderSchedulingEditComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [];
var DialogWorkOrderSchedulingEditionModule = /** @class */ (function () {
    function DialogWorkOrderSchedulingEditionModule() {
    }
    DialogWorkOrderSchedulingEditionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS),
            exports: __spread(COMPONENTS),
            imports: __spread([_shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__["AngularCommonSharedModule"], _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__["AngularGenericTemplatesSharedModule"], _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonSharedModule"]], EXTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], DialogWorkOrderSchedulingEditionModule);
    return DialogWorkOrderSchedulingEditionModule;
}());



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-table-full-screen/dialog-work-order-table-full-screen.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-order-table-full-screen/dialog-work-order-table-full-screen.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-table-fullscreen\" [(visible)]=\"display\" [fullScreen]=\"true\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".workOrders\" | translate }} ({{ workOrderTable.length }})</div>\r\n\r\n    <div class=\"close-wrapper\">\r\n      <i class=\"aw-icon aw-icon-with-border fa fa-fw fa-minus\" (click)=\"closeDialog()\"></i>\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <p-treeTable\r\n        #ptreeTableItemStructure\r\n        class=\"aw-tree-table2\"\r\n        [value]=\"workOrderTable\"\r\n        [columns]=\"tableCols\"\r\n        selectionMode=\"checkbox\"\r\n        [(selection)]=\"selectedWorkOrders\"\r\n        [scrollable]=\"true\"\r\n        scrollHeight=\"calc(100vh - 250px)\"\r\n        [resizableColumns]=\"true\"\r\n      >\r\n        <ng-template pTemplate=\"emptymessage\">\r\n          <span *ngIf=\"!isLoadingWorkOrderTable\"> &nbsp;</span>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"caption\">\r\n          <div class=\"aw-table-header\">\r\n            <div class=\"aw-table-global-filter\">\r\n              <label class=\"aw-table-global-filter-label\">\r\n                <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n              </label>\r\n\r\n              <input\r\n                #ptreeTableItemStructureGlobalFilter\r\n                class=\"aw-table-global-filter-input\"\r\n                type=\"text\"\r\n                placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                [(ngModel)]=\"searchGlobalFilter\"\r\n                (keyup)=\"searchGlobalFilterChange(searchGlobalFilter)\"\r\n              />\r\n            </div>\r\n            <div class=\"aw-table-actions\">\r\n              <div class=\"form-control\">\r\n                <p-selectButton\r\n                  multiple=\"multiple\"\r\n                  class=\"woDisplayType-btn\"\r\n                  [(ngModel)]=\"tableDisplayTypeSelected\"\r\n                  [options]=\"tableDisplayTypeList\"\r\n                  (onChange)=\"changeWorkOrderTableCols()\"\r\n                ></p-selectButton>\r\n              </div>\r\n\r\n              <div *ngIf=\"!isLoadingWorkOrderTable\" class=\"aw-table-icon-actions\">\r\n                <i\r\n                  class=\"fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay\"\r\n                  aria-hidden=\"true\"\r\n                  pTooltip=\"{{ getComponentName() + (filtersVisible ? '.hideFilters' : '.showFilters') | translate }}\"\r\n                  tooltipPosition=\"top\"\r\n                  [ngClass]=\"{ active: filtersVisible }\"\r\n                  (click)=\"woFilters.toggle($event)\"\r\n                ></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n        <!-- \r\n        <ng-template pTemplate=\"frozenbody\" let-rowNode let-rowData=\"rowData\">\r\n            <tr>\r\n                <td>\r\n                    <p-treeTableToggler [rowNode]=\"rowNode\"></p-treeTableToggler>\r\n                    {{rowData.name}}\r\n                </td>\r\n            </tr>            \r\n        </ng-template> -->\r\n\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n          <colgroup>\r\n            <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n          </colgroup>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n          <tr *ngFor=\"let row of tableColsHeader\">\r\n            <th\r\n              ttResizableColumn\r\n              *ngFor=\"let col of row\"\r\n              [attr.colspan]=\"col.colspan\"\r\n              [class.ui-treetable-col]=\"!col.isFreezed\"\r\n            >\r\n              {{ getComponentName() + \".\" + col.field | translate }}\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n          <tr>\r\n            <td\r\n              *ngFor=\"let col of columns; let i = index\"\r\n              [ngSwitch]=\"col.field\"\r\n              [ngStyle]=\"{ width: col.width, 'text-align': col.alignment }\"\r\n            >\r\n              <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\r\n\r\n              <span *ngSwitchCase=\"'progress'\">\r\n                <p-progressBar\r\n                  [ngClass]=\"rowData['statusCrititicy']\"\r\n                  [value]=\"rowData['statusPercent']\"\r\n                ></p-progressBar>\r\n              </span>\r\n\r\n              <span *ngSwitchCase=\"'WTY'\">\r\n                <p-checkbox\r\n                  binary=\"true\"\r\n                  class=\"aw-checkbox\"\r\n                  [(ngModel)]=\"rowData['WTY']\"\r\n                  [disabled]=\"true\"\r\n                ></p-checkbox>\r\n              </span>\r\n\r\n              <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-treeTable>\r\n    </div>\r\n  </a-content>\r\n</a-modal>\r\n<p-overlayPanel #woFilters class=\"aw-overlay\" (onShow)=\"filtersVisible = true\" (onHide)=\"filtersVisible = false\">\r\n  <aw-work-order-table-filters\r\n    [searchCriteria]=\"searchCriteria\"\r\n    (onFilter)=\"woFilters.hide(); filtersVisible = false; filter()\"\r\n    (onReset)=\"woFilters.hide(); reset()\"\r\n  >\r\n  </aw-work-order-table-filters>\r\n</p-overlayPanel>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-table-full-screen/dialog-work-order-table-full-screen.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-order-table-full-screen/dialog-work-order-table-full-screen.component.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ui-treetable {\n  width: calc(100% - 40px); }\n\n:host /deep/ table tr {\n  border-bottom: 0px !important; }\n\n:host /deep/ .ui-treetable {\n  top: 35px; }\n\n.ui-treetable-col {\n  background-color: #f4f4f4 !important;\n  border-left: 1px solid #006ea9 !important;\n  border-right: 1px solid #006ea9 !important;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLXBhY2thZ2UvZm9ybS9wb3B1cHMvZGlhbG9nLXdvcmstb3JkZXItdGFibGUtZnVsbC1zY3JlZW4vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcbWFpbnRlbmFuY2VcXHdvcmstcGFja2FnZVxcZm9ybVxccG9wdXBzXFxkaWFsb2ctd29yay1vcmRlci10YWJsZS1mdWxsLXNjcmVlblxcZGlhbG9nLXdvcmstb3JkZXItdGFibGUtZnVsbC1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSx3QkFBd0IsRUFBQTs7QUFGaEM7RUFLUSw2QkFBNkIsRUFBQTs7QUFMckM7RUFRUSxTQUFTLEVBQUE7O0FBR2pCO0VBQ0ksb0NBQW9DO0VBQ3BDLHlDQUF5QztFQUN6QywwQ0FBMEM7RUFDMUMsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3dvcmstcGFja2FnZS9mb3JtL3BvcHVwcy9kaWFsb2ctd29yay1vcmRlci10YWJsZS1mdWxsLXNjcmVlbi9kaWFsb2ctd29yay1vcmRlci10YWJsZS1mdWxsLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgL2RlZXAvIC51aS10cmVldGFibGUge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgIH1cclxuICAgIC9kZWVwLyB0YWJsZSB0ciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAvZGVlcC8gLnVpLXRyZWV0YWJsZSB7XHJcbiAgICAgICAgdG9wOiAzNXB4O1xyXG4gICAgfVxyXG59XHJcbi51aS10cmVldGFibGUtY29sIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwNmVhOSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwNmVhOSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-table-full-screen/dialog-work-order-table-full-screen.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-order-table-full-screen/dialog-work-order-table-full-screen.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: DialogWorkOrderTableFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogWorkOrderTableFullScreenComponent", function() { return DialogWorkOrderTableFullScreenComponent; });
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



var DialogWorkOrderTableFullScreenComponent = /** @class */ (function (_super) {
    __extends(DialogWorkOrderTableFullScreenComponent, _super);
    function DialogWorkOrderTableFullScreenComponent() {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'DialogWorkOrderTableFullScreenComponent') || this;
        _this.tableDisplayTypeList = [];
        _this.tableColsHeader = [];
        _this.tableCols = [];
        _this.frozenCols = [];
        _this.filtersVisible = false;
        _this.colListMap = new Map();
        _this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onSearchGlobalFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.initCols();
        _this.onChangeWorkOrderTableCols = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogWorkOrderTableFullScreenComponent.prototype.changeWorkOrderTableCols = function () {
        this.initTableCols();
        this.onChangeWorkOrderTableCols.emit();
    };
    DialogWorkOrderTableFullScreenComponent.prototype.ngOnInit = function () {
        this.tableDisplayTypeSelected = this.tableDisplayTypeList.map(function (type) { return type.value; });
        this.initTableCols();
    };
    DialogWorkOrderTableFullScreenComponent.prototype.filter = function () {
        this.onFilter.emit();
    };
    DialogWorkOrderTableFullScreenComponent.prototype.reset = function () {
        this.onReset.emit();
    };
    DialogWorkOrderTableFullScreenComponent.prototype.searchGlobalFilterChange = function (searchGlobalFilter) {
        this.onSearchGlobalFilter.emit(searchGlobalFilter);
    };
    DialogWorkOrderTableFullScreenComponent.prototype.initCols = function () {
        this.colsListFrozen = [
            [{ field: '_', alignment: 'center', colspan: 2, isFreezed: true }],
            [{ field: '_', alignment: 'center', colspan: 2, isFreezed: true }],
            [
                { field: 'code', alignment: 'left', width: '150px' },
                { field: 'description', alignment: 'left', width: '200px' }
            ]
        ];
        this.colListMap.set('Scheduling', [
            [{ field: 'scheduling', alignment: 'center', width: '50px', colspan: 6 }],
            [{ field: '_', alignment: 'center', width: '50px', colspan: 6 }],
            [
                { field: 'type', alignment: 'left', width: '100px' },
                { field: 'asset', alignment: 'left', width: '100px' },
                { field: 'assignedTo', alignment: 'left', width: '150px' },
                { field: 'componentCockpit', alignment: 'left', width: '150px' },
                { field: 'startDate', alignment: 'left', width: '100px' },
                { field: 'endDate', alignment: 'left', width: '150px' }
            ]
        ]);
        this.colListMap.set('Execution', [
            [{ field: 'execution', alignment: 'center', width: '50px', colspan: 8 }],
            [{ field: '_', alignment: 'center', width: '50px', colspan: 8 }],
            [
                { field: 'progress', alignment: 'center', width: '150px' },
                { field: 'WTY', alignment: 'center', width: '50px' },
                { field: 'openingDate', alignment: 'left', width: '150px' },
                { field: 'closingDate', alignment: 'left', width: '150px' },
                { field: 'componentCockpit', alignment: 'left', width: '150px' },
                { field: 'comments', alignment: 'left', width: '200px' },
                { field: 'checkedBy', alignment: 'left', width: '150px' },
                { field: 'checkedOn', alignment: 'left', width: '150px' }
            ]
        ]);
        this.colListMap.set('Engineering', [
            [{ field: 'engineering', alignment: 'center', width: '50px', colspan: 6 }],
            [{ field: '_', alignment: 'center', width: '50px', colspan: 6 }],
            [
                { field: 'origin', alignment: 'left', width: '250px' },
                { field: 'relatedItem', alignment: 'left', width: '250px' },
                { field: 'zone', alignment: 'left', width: '150px' },
                { field: 'standardDuration', alignment: 'left', width: '150px' },
                { field: 'standardCost', alignment: 'left', width: '150px' },
                { field: 'qualification', alignment: 'left', width: '150px' }
            ]
        ]);
        this.colListMap.set('Timeline', [
            [{ field: 'timeline', alignment: 'center', width: '50px', colspan: 4 }],
            [
                { field: 'workload', alignment: 'center', width: '50px', colspan: 2 },
                { field: 'duration', alignment: 'center', width: '50px', colspan: 2 }
            ],
            [
                { field: 'planWorkload', alignment: 'right', width: '100px' },
                { field: 'Workload', alignment: 'right', width: '100px' },
                { field: 'planDuration', alignment: 'right', width: '100px' },
                { field: 'Duration', alignment: 'right', width: '100px' }
            ]
        ]);
        this.colListMap.set('Costs', [
            [{ field: 'costs', alignment: 'center', width: '50px', colspan: 8 }],
            [
                { field: 'totalCost', alignment: 'center', width: '50px', colspan: 2 },
                { field: 'labourCost', alignment: 'center', width: '50px', colspan: 2 },
                { field: 'materialCost', alignment: 'center', width: '50px', colspan: 2 },
                { field: 'subcontractingCost', alignment: 'center', width: '50px', colspan: 2 }
            ],
            [
                { field: 'planTotalCost', alignment: 'right', width: '100px' },
                { field: 'TotalCost', alignment: 'right', width: '100px' },
                { field: 'planLaborCost', alignment: 'right', width: '100px' },
                { field: 'LaborCost', alignment: 'right', width: '100px' },
                { field: 'planMaterialCost', alignment: 'right', width: '100px' },
                { field: 'MaterialCost', alignment: 'right', width: '100px' },
                { field: 'planSubcontractCost', alignment: 'right', width: '100px' },
                { field: 'SubcontractingCost', alignment: 'right', width: '100px' }
            ]
        ]);
    };
    DialogWorkOrderTableFullScreenComponent.prototype.initTableCols = function () {
        var _this = this;
        this.tableColsHeader = this.colsListFrozen;
        this.tableDisplayTypeSelected.forEach(function (typeSelected) {
            _this.tableColsHeader = _this.tableColsHeader.map(function (colHeader, i) { return __spread(colHeader, _this.addGroupCols(typeSelected, i)); });
        });
        this.tableCols = this.tableColsHeader[2];
        this.frozenCols = [
            { field: 'code', alignment: 'left', width: '50px' },
            { field: 'description', alignment: 'left', width: '150px' }
        ];
    };
    DialogWorkOrderTableFullScreenComponent.prototype.addGroupCols = function (groupColName, level) {
        var groupCols = [];
        var groupAllCols = this.colListMap.get(groupColName);
        if (groupAllCols && groupAllCols[level]) {
            groupCols = groupAllCols[level];
        }
        return groupCols;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogWorkOrderTableFullScreenComponent.prototype, "workOrderTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogWorkOrderTableFullScreenComponent.prototype, "tableDisplayTypeList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogWorkOrderTableFullScreenComponent.prototype, "searchCriteria", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogWorkOrderTableFullScreenComponent.prototype, "searchGlobalFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogWorkOrderTableFullScreenComponent.prototype, "onChangeWorkOrderTableCols", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogWorkOrderTableFullScreenComponent.prototype, "onFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogWorkOrderTableFullScreenComponent.prototype, "onReset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogWorkOrderTableFullScreenComponent.prototype, "onSearchGlobalFilter", void 0);
    DialogWorkOrderTableFullScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-work-order-table-full-screen',
            template: __webpack_require__(/*! ./dialog-work-order-table-full-screen.component.html */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-table-full-screen/dialog-work-order-table-full-screen.component.html"),
            styles: [__webpack_require__(/*! ./dialog-work-order-table-full-screen.component.scss */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-table-full-screen/dialog-work-order-table-full-screen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DialogWorkOrderTableFullScreenComponent);
    return DialogWorkOrderTableFullScreenComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/dialog-work-package-document/dialog-work-package-document.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-package-document/dialog-work-package-document.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".docManagement\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".docName\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"currentDoc.docName\" [disabled]=\"true\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".docType\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"currentDoc.docType\" [disabled]=\"true\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".docExtension\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"currentDoc.docExtension\" [disabled]=\"true\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".docSize\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"currentDoc.docSize\" [disabled]=\"true\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".docPublicationDate\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"currentDoc.docPublicationDate\" [disabled]=\"true\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">{{ \"global.cancel\" | translate }}</button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/dialog-work-package-document/dialog-work-package-document.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-package-document/dialog-work-package-document.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: DialogWorkPackageDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogWorkPackageDocumentComponent", function() { return DialogWorkPackageDocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/utils/bidm-document-utils */ "./src/app/shared/utils/bidm-document-utils.ts");
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









var DialogWorkPackageDocumentComponent = /** @class */ (function (_super) {
    __extends(DialogWorkPackageDocumentComponent, _super);
    function DialogWorkPackageDocumentComponent(sessionService, messageService, dateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].MAI_DIALOG_WORK_PACKAGE_DOCUMENT) || this;
        _this.sessionService = sessionService;
        _this.messageService = messageService;
        _this.dateService = dateService;
        return _this;
    }
    DialogWorkPackageDocumentComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].MAI_DIALOG_WORK_PACKAGE_DOCUMENT;
    };
    DialogWorkPackageDocumentComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Create);
        this.currentDoc = {
            docExtension: _shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_8__["BidmDocumentUtils"].formatDocExtension(this.wpDocument),
            docName: this.wpDocument.documentName,
            docPublicationDate: this.dateService.momentToString(moment__WEBPACK_IMPORTED_MODULE_1__(Number(this.wpDocument.documentPublicationDate))),
            docSize: _shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_8__["BidmDocumentUtils"].formatDocSize(this.wpDocument),
            docType: '',
            isChecked: false,
            _obj: this.wpDocument
        };
    };
    DialogWorkPackageDocumentComponent.prototype.closeDialog = function () {
        this.display = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DialogWorkPackageDocumentComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogWorkPackageDocumentComponent.prototype, "wpDocument", void 0);
    DialogWorkPackageDocumentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-work-package-document',
            template: __webpack_require__(/*! ./dialog-work-package-document.component.html */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-package-document/dialog-work-package-document.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]])
    ], DialogWorkPackageDocumentComponent);
    return DialogWorkPackageDocumentComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/import-task-popup/import-task-popup.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/import-task-popup/import-task-popup.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\">\r\n      <span class=\"form-label doc\" (click)=\"openTemplate()\">\r\n        {{ getComponentName() + \".templateWorkTaskFileXls\" | translate }}\r\n      </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\"> {{ getComponentName() + \".fileToImport\" | translate }} </label>\r\n      <div class=\"form-control form-control-with-btn\">\r\n        <input type=\"text\" class=\"aw-input fileInput\" [(ngModel)]=\"fileName\" [disabled]=\"true\" />\r\n        <p-fileUpload\r\n          #fileUploader\r\n          class=\"aw-fileupload aw-table-action\"\r\n          name=\"document[]\"\r\n          customUpload=\"true\"\r\n          mode=\"basic\"\r\n          auto=\"true\"\r\n          chooseLabel=\"{{ 'global.upload' | translate }}\"\r\n          (uploadHandler)=\"uploadDocument($event, fileUploader)\"\r\n        ></p-fileUpload>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"close()\">{{ \"global.close\" | translate }}</button>\r\n    <button type=\"button\" mat-raised-button (click)=\"import()\" [disabled]=\"!isUpload\">\r\n      {{ \"global.import\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/import-task-popup/import-task-popup.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/import-task-popup/import-task-popup.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .form-label.doc {\n  cursor: pointer;\n  text-decoration: underline;\n  color: blue; }\n\n:host .fileInput {\n  width: 79% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLXBhY2thZ2UvZm9ybS9wb3B1cHMvaW1wb3J0LXRhc2stcG9wdXAvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcbWFpbnRlbmFuY2VcXHdvcmstcGFja2FnZVxcZm9ybVxccG9wdXBzXFxpbXBvcnQtdGFzay1wb3B1cFxcaW1wb3J0LXRhc2stcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFdBQVcsRUFBQTs7QUFMakI7RUFVSSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2Uvd29yay1wYWNrYWdlL2Zvcm0vcG9wdXBzL2ltcG9ydC10YXNrLXBvcHVwL2ltcG9ydC10YXNrLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5mb3JtLWxhYmVsIHtcclxuICAgICYuZG9jIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmlsZUlucHV0IHtcclxuICAgIHdpZHRoOiA3OSUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/import-task-popup/import-task-popup.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/import-task-popup/import-task-popup.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ImportTaskPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportTaskPopupComponent", function() { return ImportTaskPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _import_task_popup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./import-task-popup.service */ "./src/app/main/maintenance/work-package/form/popups/import-task-popup/import-task-popup.service.ts");
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







var ImportTaskPopupComponent = /** @class */ (function (_super) {
    __extends(ImportTaskPopupComponent, _super);
    function ImportTaskPopupComponent(_confirmationService, importTaskPopupService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'ImportTaskPopupComponent') || this;
        _this._confirmationService = _confirmationService;
        _this.importTaskPopupService = importTaskPopupService;
        _this.translateService = translateService;
        _this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.templateName = 'TEMPLATE_WORK_TASK_FILE.xls';
        return _this;
    }
    ImportTaskPopupComponent.prototype.ngOnInit = function () {
        this.isUpload = false;
        this.fileName = this.translateService.instant(this.getTranslateKey('noFile', this.getComponentName()));
    };
    ImportTaskPopupComponent.prototype.openTemplate = function () {
        var _this = this;
        this.importTaskPopupService.downloadTemplate().subscribe(function (result) {
            _this.downLoadFiles(result, _this.templateName);
        });
    };
    ImportTaskPopupComponent.prototype.downLoadFiles = function (docFile, docName) {
        _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_5__["FileUtils"].downloadFile(docFile, docName);
    };
    ImportTaskPopupComponent.prototype.uploadDocument = function (event, fileUploader) {
        var _this = this;
        if (event.files) {
            var file_1 = event.files[0];
            {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_5__["FileUtils"].getFileContentAsBase64(file_1, function (fileContent) {
                    _this.file = {
                        docFile: fileContent,
                        docName: file_1.name,
                        docPublicationDate: new Date()
                    };
                    if (!!_this.file.docName) {
                        _this.fileName = _this.file.docName;
                    }
                });
            }
            this.isUpload = true;
            fileUploader.clear();
        }
    };
    ImportTaskPopupComponent.prototype.import = function () {
        this.confirmDeleteWorkOrder();
    };
    ImportTaskPopupComponent.prototype.close = function () {
        this.display = false;
        this.refresh.emit(this.reportMessage);
    };
    ImportTaskPopupComponent.prototype.confirmDeleteWorkOrder = function () {
        var _this = this;
        if (this.openMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write || this.openMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Create) {
            this._confirmationService.confirm({
                messageKey: 'confirmationMessage.reomoveWorkOrders',
                accept: function () {
                    if (_this.file.docFile) {
                        var importWorkTaskFromExcelInput = {
                            fileName: _this.templateName,
                            excelSource: _this.file.docFile,
                            bidmProjectDTO: _this.bidmProjectDTO,
                            bidoEquipmentDTO: _this.bidoEquipmentDTO,
                            deletion: true
                        };
                        _this.importTaskPopupService
                            .ImportWorkTaskFromExcel(importWorkTaskFromExcelInput)
                            .subscribe(function (reportData) {
                            _this.reportMessage = reportData;
                            _this.close();
                        });
                    }
                },
                reject: function () {
                    if (_this.file.docFile) {
                        var importWorkTaskFromExcelInput = {
                            fileName: _this.templateName,
                            excelSource: _this.file.docFile,
                            bidmProjectDTO: _this.bidmProjectDTO,
                            bidoEquipmentDTO: _this.bidoEquipmentDTO,
                            deletion: false
                        };
                        _this.importTaskPopupService
                            .ImportWorkTaskFromExcel(importWorkTaskFromExcelInput)
                            .subscribe(function (reportData) {
                            _this.reportMessage = reportData;
                            _this.close();
                        });
                    }
                }
            });
        }
        else {
            this.close();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImportTaskPopupComponent.prototype, "bidmProjectDTO", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImportTaskPopupComponent.prototype, "bidoEquipmentDTO", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ImportTaskPopupComponent.prototype, "displayChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ImportTaskPopupComponent.prototype, "refresh", void 0);
    ImportTaskPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-import-task-popup',
            template: __webpack_require__(/*! ./import-task-popup.component.html */ "./src/app/main/maintenance/work-package/form/popups/import-task-popup/import-task-popup.component.html"),
            styles: [__webpack_require__(/*! ./import-task-popup.component.scss */ "./src/app/main/maintenance/work-package/form/popups/import-task-popup/import-task-popup.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _import_task_popup_service__WEBPACK_IMPORTED_MODULE_6__["ImportTaskPopupService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ImportTaskPopupComponent);
    return ImportTaskPopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/import-task-popup/import-task-popup.service.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/import-task-popup/import-task-popup.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ImportTaskPopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportTaskPopupService", function() { return ImportTaskPopupService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/api/fleet-business.api */ "./src/app/shared/api/fleet-business.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_standard_import_am_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/api/standard-import-am.api */ "./src/app/shared/api/standard-import-am.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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







var ImportTaskPopupService = /** @class */ (function (_super) {
    __extends(ImportTaskPopupService, _super);
    function ImportTaskPopupService(http, appConfigService, fleetManagementApi, fleetBusinessApi, standardImportAmApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.fleetManagementApi = fleetManagementApi;
        _this.fleetBusinessApi = fleetBusinessApi;
        _this.standardImportAmApi = standardImportAmApi;
        return _this;
    }
    ImportTaskPopupService.prototype.loadE5xTableData = function () {
        return _super.prototype.post.call(this, this.fleetManagementApi.findE5XMappingRowsByMandant);
    };
    ImportTaskPopupService.prototype.getExcelFileOnExport = function () {
        return _super.prototype.post.call(this, this.fleetBusinessApi.getImportE5xMappingReport);
    };
    ImportTaskPopupService.prototype.downloadTemplate = function () {
        return _super.prototype.post.call(this, this.standardImportAmApi.getImportWorkTaskXLS);
    };
    ImportTaskPopupService.prototype.ImportWorkTaskFromExcel = function (input) {
        return _super.prototype.post.call(this, this.standardImportAmApi.importWorkTaskFromExcel, input);
    };
    ImportTaskPopupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_3__["FleetManagementApi"],
            _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_2__["FleetBusinessApi"],
            _shared_api_standard_import_am_api__WEBPACK_IMPORTED_MODULE_4__["StandardImportAmApi"]])
    ], ImportTaskPopupService);
    return ImportTaskPopupService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/import-task-report-dialog/import-task-report-dialog.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/import-task-report-dialog/import-task-report-dialog.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal report\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".loadingTask\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\"></label>\r\n\r\n      <div class=\"form-control\">\r\n        <textarea pInputTextArea [rows]=\"15\" type=\"text\" class=\"aw-textarea\" [(ngModel)]=\"message\" disabled></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/import-task-report-dialog/import-task-report-dialog.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/import-task-report-dialog/import-task-report-dialog.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ImportTaskReportDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportTaskReportDialogComponent", function() { return ImportTaskReportDialogComponent; });
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



var ImportTaskReportDialogComponent = /** @class */ (function (_super) {
    __extends(ImportTaskReportDialogComponent, _super);
    function ImportTaskReportDialogComponent() {
        return _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'ImportTaskReportDialogComponent') || this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImportTaskReportDialogComponent.prototype, "message", void 0);
    ImportTaskReportDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-import-task-report-dialog',
            template: __webpack_require__(/*! ./import-task-report-dialog.component.html */ "./src/app/main/maintenance/work-package/form/popups/import-task-report-dialog/import-task-report-dialog.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ImportTaskReportDialogComponent);
    return ImportTaskReportDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/wp-last-update/wp-last-update-pop-up.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/wp-last-update/wp-last-update-pop-up.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\"> {{ getComponentName() + \".number\" | translate }} </label>\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"bidmProjectDTO.projectNumber\" disabled />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\"> {{ getComponentName() + \".name\" | translate }} </label>\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"bidmProjectDTO.projectName\" disabled />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\"> {{ getComponentName() + \".currentStatus\" | translate }} </label>\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"status\" disabled />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\"> {{ getComponentName() + \".serialNumber\" | translate }} </label>\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"bidmProjectDTO.aircraftMsn\" disabled />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\"> {{ getComponentName() + \".aircraftRegistration\" | translate }} </label>\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"bidmProjectDTO.aircraftRegistration\" disabled />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\"> {{ getComponentName() + \".customer\" | translate }} </label>\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"customerName\" disabled />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\"> {{ getComponentName() + \".type\" | translate }} </label>\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"type\" disabled />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\"> {{ getComponentName() + \".lastUpdate\" | translate }} </label>\r\n        <div class=\"form-control\">\r\n          <p-calendar\r\n            showButtonBar=\"true\"\r\n            [monthNavigator]=\"true\"\r\n            [yearNavigator]=\"true\"\r\n            [yearRange]=\"sessionService.calendarYearRange\"\r\n            class=\"aw-calendar\"\r\n            [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n            [locale]=\"sessionService.calendarFormat\"\r\n            [(ngModel)]=\"bidmProjectDTO.statusDate\"\r\n            [disabled]=\"true\"\r\n            appendTo=\"body\"\r\n            placeholder=\"&nbsp;\"\r\n          ></p-calendar>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\"> {{ getComponentName() + \".lastUpdateBy\" | translate }} </label>\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"bidmProjectDTO.statusUser\" disabled />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\"> {{ getComponentName() + \".description\" | translate }} </label>\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"bidmProjectDTO.projectDescription\" disabled />\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\"> {{ getComponentName() + \".sourceSystemId\" | translate }} </label>\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"systemSourceIdValue\" disabled />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\"> {{ getComponentName() + \".sourceSystemReference\" | translate }} </label>\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"systemSourceReferenceValue\" disabled />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">{{ \"global.close\" | translate }}</button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/wp-last-update/wp-last-update-pop-up.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/wp-last-update/wp-last-update-pop-up.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2Uvd29yay1wYWNrYWdlL2Zvcm0vcG9wdXBzL3dwLWxhc3QtdXBkYXRlL3dwLWxhc3QtdXBkYXRlLXBvcC11cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/wp-last-update/wp-last-update-pop-up.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/wp-last-update/wp-last-update-pop-up.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LastUpdatePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastUpdatePopupComponent", function() { return LastUpdatePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bidm_attribute_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/constants/bidm-attribute-constants */ "./src/app/shared/constants/bidm-attribute-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _search_work_package_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../search/work-package-search.service */ "./src/app/main/maintenance/work-package/search/work-package-search.service.ts");
/* harmony import */ var _work_package_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../work-package.service */ "./src/app/main/maintenance/work-package/work-package.service.ts");
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











var LastUpdatePopupComponent = /** @class */ (function (_super) {
    __extends(LastUpdatePopupComponent, _super);
    function LastUpdatePopupComponent(sessionService, wpService, wpSearchService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read, 'WorkPackageLastUpdateComponent') || this;
        _this.sessionService = sessionService;
        _this.wpService = wpService;
        _this.wpSearchService = wpSearchService;
        return _this;
    }
    LastUpdatePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.systemSourceIdValue = '';
        this.systemSourceReferenceValue = '';
        if (!!this.bidmProjectDTO) {
            var removedstatuses = [
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SCHEDULED,
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SIMULATED
            ];
            this.wpService.loadStatusList(removedstatuses).subscribe(function (result) {
                _this.statusList = result;
                _this.status = _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_7__["SelectItemUtils"].formatSelectItem(_this.bidmProjectDTO.statusState, _this.statusList);
            });
            this.wpService.loadGenProps(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__["GenericPropertyConstants"].WORK_PACKAGE_TYPE_MAP).subscribe(function (r) {
                _this.typeList = r;
                _this.type = _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_7__["SelectItemUtils"].formatSelectItem(_this.bidmProjectDTO.projectType, _this.typeList);
            });
            var bidmProjectDTOId = {
                projectId: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_8__["StringUtils"].isNullOrEmpty(this.bidmProjectDTO.projectId) ? '' : "" + this.bidmProjectDTO.projectId
            };
            this.wpSearchService.findBidmProjectAttributesByWorkOrder(bidmProjectDTOId).subscribe(function (result) {
                _this.attributeList = result;
                var attributeSystemSourceId = _this.attributeList.find(function (attribute) { return attribute.attributeName === _shared_constants_bidm_attribute_constants__WEBPACK_IMPORTED_MODULE_2__["BidmAttributeConstants"].WORK_PACKAGE_SYSTEM_SOURCE_ID; });
                _this.systemSourceIdValue =
                    !!attributeSystemSourceId && !!attributeSystemSourceId.attributeValue
                        ? attributeSystemSourceId.attributeValue
                        : '';
                var attributeSystemSourceReference = _this.attributeList.find(function (attribute) { return attribute.attributeName === _shared_constants_bidm_attribute_constants__WEBPACK_IMPORTED_MODULE_2__["BidmAttributeConstants"].WORK_PACKAGE_SYSTEM_SOURCE_REFERENCE; });
                _this.systemSourceReferenceValue =
                    !!attributeSystemSourceReference && !!attributeSystemSourceReference.attributeValue
                        ? attributeSystemSourceReference.attributeValue
                        : '';
            });
            if (!!this.customers) {
                var selectedItem = this.customers.list.find(function (customer) { return customer.customerCode === _this.bidmProjectDTO.bidoCustomerCode; });
                this.customerName =
                    !!selectedItem && !!selectedItem.customerName
                        ? selectedItem.customerName + " (" + this.bidmProjectDTO.bidoCustomerCode + ")"
                        : !!this.bidmProjectDTO.bidoCustomerCode
                            ? "" + this.bidmProjectDTO.bidoCustomerCode
                            : '';
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LastUpdatePopupComponent.prototype, "bidmProjectDTO", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LastUpdatePopupComponent.prototype, "customers", void 0);
    LastUpdatePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-wp-last-update-popup',
            template: __webpack_require__(/*! ./wp-last-update-pop-up.component.html */ "./src/app/main/maintenance/work-package/form/popups/wp-last-update/wp-last-update-pop-up.component.html"),
            styles: [__webpack_require__(/*! ./wp-last-update-pop-up.component.scss */ "./src/app/main/maintenance/work-package/form/popups/wp-last-update/wp-last-update-pop-up.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _work_package_service__WEBPACK_IMPORTED_MODULE_10__["WorkPackageService"],
            _search_work_package_search_service__WEBPACK_IMPORTED_MODULE_9__["WorkPackageSearchService"]])
    ], LastUpdatePopupComponent);
    return LastUpdatePopupComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/wp-report-dialog/wp-report-dialog.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/wp-report-dialog/wp-report-dialog.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <p-table\r\n    [resizableColumns]=\"true\"\r\n    #tableAssets\r\n    class=\"aw-table2\"\r\n    [columns]=\"resultsTableCols\"\r\n    [value]=\"resultsTable\"\r\n    [scrollable]=\"true\"\r\n  >\r\n    <ng-template pTemplate=\"emptymessage\">\r\n      <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n      <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n        <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n        <div class=\"lds-hourglass\"></div>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"colgroup\" let-columns>\r\n      <colgroup>\r\n        <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n      </colgroup>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr>\r\n        <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n          {{ getComponentName() + \".\" + col.field | translate }}\r\n          <span class=\"lds-hourglass\" *ngIf=\"col.field === 'action' && showGenerateSpinner\"></span>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n      <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n        <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\" [ngSwitch]=\"col.field\">\r\n          <button *ngSwitchCase=\"'action'\" type=\"button\" mat-raised-button (click)=\"generateReport(rowData['id'])\">\r\n            {{ getComponentName() + \".generate\" | translate }}\r\n          </button>\r\n\r\n          <span\r\n            *ngSwitchCase=\"'fileName'\"\r\n            pTooltip=\"{{ this.getComponentName() + '.' + rowData['fileDesc'] | translate }}\"\r\n            tooltipPosition=\"bottom\"\r\n            >{{ this.getComponentName() + \".\" + rowData[col.field] | translate }}</span\r\n          >\r\n\r\n          <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/wp-report-dialog/wp-report-dialog.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/wp-report-dialog/wp-report-dialog.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  max-width: 60vw; }\n  :host .content .card {\n    border: 1px solid #f0f0f0;\n    border-radius: 4px;\n    cursor: pointer;\n    margin: 8px;\n    max-width: 8rem;\n    min-width: 8rem;\n    padding: 8px;\n    text-align: center; }\n  :host .content .card:hover {\n      border-color: #d7d6d6; }\n  :host .content .card.selected {\n      border-color: #01579b;\n      color: #01579b; }\n  :host .list {\n  display: flex;\n  flex-direction: column; }\n  :host a:hover {\n  text-decoration: underline; }\n  :host .footer {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding-top: calc(8px * 2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLXBhY2thZ2UvZm9ybS9wb3B1cHMvd3AtcmVwb3J0LWRpYWxvZy9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxtYWludGVuYW5jZVxcd29yay1wYWNrYWdlXFxmb3JtXFxwb3B1cHNcXHdwLXJlcG9ydC1kaWFsb2dcXHdwLXJlcG9ydC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2Uvd29yay1wYWNrYWdlL2Zvcm0vcG9wdXBzL3dwLXJlcG9ydC1kaWFsb2cvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3dvcmstcGFja2FnZS9mb3JtL3BvcHVwcy93cC1yZXBvcnQtZGlhbG9nL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQ2tCRSxhQUFhO0VBQ2IsbUJBQW1CO0VEZmpCLGVBQWU7RUFDZixlQUFlLEVBQUE7RUFMbkI7SUFRTSx5QkVaOEI7SUZhOUIsa0JFdUJhO0lGdEJiLGVBQWU7SUFDZixXRTRCWTtJRjNCWixlQWRXO0lBZVgsZUFmVztJQWdCWCxZRXlCWTtJRnhCWixrQkFBa0IsRUFBQTtFQWZ4QjtNQWtCUSxxQkFBc0QsRUFBQTtFQWxCOUQ7TUFzQlEscUJFdkJjO01Gd0JkLGNFeEJjLEVBQUE7RUZDdEI7RUE0QkksYUFBYTtFQUNiLHNCQUFzQixFQUFBO0VBN0IxQjtFQWdDSSwwQkFBMEIsRUFBQTtFQWhDOUI7RUNrQkUsYUFBYTtFQUNiLG1CQUFtQjtFRG1CakIseUJBQXlCO0VBQ3pCLDBCQUF1QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLXBhY2thZ2UvZm9ybS9wb3B1cHMvd3AtcmVwb3J0LWRpYWxvZy93cC1yZXBvcnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcblxyXG4kY2FyZC13aWR0aDogOHJlbTtcclxuXHJcbjpob3N0IHtcclxuICAuY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1heC13aWR0aDogNjB2dztcclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luOiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICBtYXgtd2lkdGg6ICRjYXJkLXdpZHRoO1xyXG4gICAgICBtaW4td2lkdGg6ICRjYXJkLXdpZHRoO1xyXG4gICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDEwJSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcblxyXG4gIC5mb290ZXIge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZy10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gIH1cclxufVxyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFV0aWxzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBidXR0b24tY29sb3IoJGJhY2tncm91bmQtY29sb3IsICRjb2xvciwgJGJvcmRlci1jb2xvcjogbnVsbCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIsXHJcbiAgJjpub3QoOmRpc2FibGVkKS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpZigkYm9yZGVyLWNvbG9yID09IG51bGwsICRjb2xvciwgJGJvcmRlci1jb2xvcik7XHJcbiAgICBjb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleC1jb2x1bW4oKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1yb3coKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQoKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuXHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWRpc2FibGVkKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWRpc2FibGVkO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1mb2N1cygpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxufVxyXG5cclxuQG1peGluIGlucHV0LWhvdmVyKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VhcmNoLWNyaXRlcmlhLWNvbnRhaW5lciB7XHJcbiAgLmFkdmFuY2VkLWNyaXRlcmlhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtY3JpdGVyaWEtZm9vdGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAuYXctYnRuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlY3Rpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiA0KTtcclxuXHJcbiAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgJi5yZXF1aXJlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkKCk7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hbGVydCB7XHJcbiAgICAgICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICYgPiBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LW92ZXJmbG93LWhpZGRlbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdyaWQgZm9ybSBjb250cm9scyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJNZWRpdW1cIjtcclxuXHJcbiAgJiA+IGlucHV0ICsgcC1tZXNzYWdlID4gLnVpLW1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpmb2N1cyxcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDI1NSwgMjU1LCAyNTUpIDYwJSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgIC5hdy1pY29uIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4sXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0biB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcblxyXG4gICAgICAmLmF3LWNhbGVuZGFyIC51aS1pbnB1dHRleHQsXHJcbiAgICAgICYuYXctZHJvcGRvd24gLnVpLWRyb3Bkb3duLFxyXG4gICAgICAmLmF3LWlucHV0LFxyXG4gICAgICAmLmF3LXRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1jYWxlbmRhciB7XHJcbiAgICAgIC8vIEZJWE1FOiBmaXggYW4gVUkgaXNzdWUgb24gUHJpbWVORyBjYWxlbmRhciBjb21wb25lbnQ7IHRvIHJlbW92ZSB3aGVuIGlzc3VlIHdpbGwgYmUgZml4ZWQgdXBzdHJlYW1cclxuICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAgIC5hdy1pY29uOm5vdCgucmVhZC1vbmx5LWxpbmspIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgLy8gbm9uZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udHJvbC1kYXRhIHtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tbmltcCxcclxuICAgIC5idG4tZXh0ZXJuYWwtbGluay13cmFwcGVyLFxyXG4gICAgLmJ0bi1jbGVhci13cmFwcGVyLFxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyLFxyXG4gICAgLmJ0bi1zZWFyY2gtd3JhcHBlciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlciB7XHJcbiAgICAgIC5hdy1maWxldXBsb2FkIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51aS1idXR0b24ge1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlOTM0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tY2xlYXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tc2VhcmNoIHtcclxuICAgICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1yYWRpb2J1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICYgPiAuYXctcmFkaW9idXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMiAqICN7JG1hcmdpbi12YWx1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLWdlbmVyaWMge1xyXG4gIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG5cclxuICAmID4gYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IC5hbGVydCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcblxyXG4gICAgJi5hbGVydC0tbm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNhbGVuZGFyIHtcclxuICAmLnVpLWlucHV0d3JhcHBlci1mb2N1cyB7XHJcbiAgICAudWktY2FsZW5kYXIgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1peGluIGdyaWQtY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRjaGVja2JveC1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRjaGVja2JveC1oZWlnaHQ7XHJcblxyXG4gIC51aS1jaGtib3gge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLWNoa2JveC1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1kcm9wZG93biB7XHJcbiAgLnVpLWRyb3Bkb3duIHtcclxuICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWZvY3VzIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uLFxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbiB7XHJcbiAgICAgIHJpZ2h0OiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgQGluY2x1ZGUgdGV4dC1vdmVyZmxvdy1oaWRkZW4oKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyICogMS43NXJlbSk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZpeGVkLXdpZHRoIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZmlsZXVwbG9hZCB7XHJcbiAgQGV4dGVuZCAuYXctYnRuO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICAudWktZmlsZXVwbG9hZC1jaG9vc2Uge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAwICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1idXR0b24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtaW5wdXQoKSB7XHJcbiAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRleHRhcmVhIHtcclxuICBAaW5jbHVkZSBncmlkLWlucHV0KCk7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi1oZWlnaHQ6ICRmb3JtLWNvbnRyb2wtaGVpZ2h0O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXJhZGlvYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG4gIHdpZHRoOiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG5cclxuICAudWktcmFkaW9idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLXJhZGlvYnV0dG9uLWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcblxyXG4gICAgICAgIC51aS1yYWRpb2J1dHRvbi1pY29uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gY2FsZW5kYXItcGFuZWwge1xyXG4gIC51aS1kYXRlcGlja2VyOm5vdCgudWktZGF0ZXBpY2tlci1pbmxpbmUpIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRyb3Bkb3duLXBhbmVsIHtcclxuICAudWktZHJvcGRvd24tcGFuZWwge1xyXG4gICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuICAgIC51aS1kcm9wZG93bi1pdGVtcy13cmFwcGVyIC51aS1kcm9wZG93bi1saXN0IHtcclxuICAgICAgLnVpLWRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnVpLXN0YXRlLWhpZ2hsaWdodCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/wp-report-dialog/wp-report-dialog.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/wp-report-dialog/wp-report-dialog.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: WpReportDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpReportDialogComponent", function() { return WpReportDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/types/generic-component */ "./src/app/shared/types/generic-component.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _wp_report_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wp-report-dialog.service */ "./src/app/main/maintenance/work-package/form/popups/wp-report-dialog/wp-report-dialog.service.ts");
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







var WpReportDialogComponent = /** @class */ (function (_super) {
    __extends(WpReportDialogComponent, _super);
    function WpReportDialogComponent(messageService, reportDialogFormService, sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write) || this;
        _this.messageService = messageService;
        _this.reportDialogFormService = reportDialogFormService;
        _this.sessionService = sessionService;
        _this.resultsTableCols = [
            { field: 'fileName', width: '60%', alignment: 'left' },
            { field: 'fileFormat', width: '20%', alignment: 'left' },
            { field: 'action', width: '20%', alignment: 'center' }
        ];
        _this.resultsTable = [];
        _this.onValidate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    WpReportDialogComponent.prototype.ngOnInit = function () {
        this.resultsTable = [
            {
                fileName: 'workPackage',
                fileDesc: 'workPackagePdfDesc',
                fileFormat: 'PDF',
                id: 'workPackagePdf'
            },
            {
                fileName: 'workPackage',
                fileDesc: 'workPackageXmlDesc',
                fileFormat: 'XML',
                id: 'workPackageXml'
            },
            {
                fileName: 'technicalQuotation',
                fileDesc: 'technicalQuotationDesc',
                fileFormat: 'PDF',
                id: 'technicalQuotation'
            },
            {
                fileName: 'findings',
                fileDesc: 'findingsDesc',
                fileFormat: 'PDF',
                id: 'findings'
            },
            {
                fileName: 'ACRS',
                fileDesc: 'ACRSDesc',
                fileFormat: 'PDF',
                id: 'ACRS'
            }
        ];
    };
    WpReportDialogComponent.prototype.getComponentName = function () {
        return 'WpReportDialogComponent';
    };
    WpReportDialogComponent.prototype.generateReport = function (reportName) {
        var _this = this;
        var onSuccess = function (result) {
            if (!!result.fileContent && result.fileName) {
                _this.downLoadFiles(result.fileContent, result.fileName);
            }
        };
        var onError = function (err) {
            _this.showGenerateSpinner = false;
            _this.onValidate.emit();
            if (!!err && !!err.errorDetail) {
                _this.messageService.showErrorMessage(err.errorDetail);
            }
            else {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGeneratingDoc'));
            }
        };
        var workPackageReport = {
            projectId: this.workPackage.projectId || '',
            equipmentCode: this.workPackage.assetCode || '',
            isSpecific: this.sessionService.isSpecificDassault
        };
        this.showGenerateSpinner = true;
        switch (reportName) {
            case 'workPackagePdf':
                this.reportDialogFormService.generateWorkPackageReport(workPackageReport).subscribe(onSuccess, onError);
                break;
            case 'workPackageXml':
                this.reportDialogFormService
                    .generateAssetWorkXmlAlternate(this.workPackage.projectId)
                    .subscribe(onSuccess, onError);
                break;
            case 'technicalQuotation':
                this.reportDialogFormService
                    .exportBidmFindingsReportPdf(this.workPackage.projectId)
                    .subscribe(onSuccess, onError);
                break;
            case 'findings':
                this.reportDialogFormService
                    .exportBsdeFindingsReportPdf(this.workPackage.projectId)
                    .subscribe(onSuccess, onError);
                break;
            case 'ACRS':
                this.reportDialogFormService.generateAPRSCertificate(workPackageReport).subscribe(onSuccess, onError);
                break;
            default:
                break;
        }
    };
    WpReportDialogComponent.prototype.downLoadFiles = function (docFile, docName) {
        _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_4__["FileUtils"].downloadFile(docFile, docName);
        this.showGenerateSpinner = false;
        this.onValidate.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WpReportDialogComponent.prototype, "workPackage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], WpReportDialogComponent.prototype, "isAircraft", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WpReportDialogComponent.prototype, "onValidate", void 0);
    WpReportDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-wp-report-dialog',
            template: __webpack_require__(/*! ./wp-report-dialog.component.html */ "./src/app/main/maintenance/work-package/form/popups/wp-report-dialog/wp-report-dialog.component.html"),
            styles: [__webpack_require__(/*! ./wp-report-dialog.component.scss */ "./src/app/main/maintenance/work-package/form/popups/wp-report-dialog/wp-report-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _wp_report_dialog_service__WEBPACK_IMPORTED_MODULE_6__["WpReportDialogFormService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])
    ], WpReportDialogComponent);
    return WpReportDialogComponent;
}(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_3__["GenericComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/wp-report-dialog/wp-report-dialog.service.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/wp-report-dialog/wp-report-dialog.service.ts ***!
  \********************************************************************************************************/
/*! exports provided: WpReportDialogFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpReportDialogFormService", function() { return WpReportDialogFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/api/am-project-management.api */ "./src/app/shared/api/am-project-management.api.ts");
/* harmony import */ var _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/api/project-management.api */ "./src/app/shared/api/project-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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






var WpReportDialogFormService = /** @class */ (function (_super) {
    __extends(WpReportDialogFormService, _super);
    function WpReportDialogFormService(http, appConfigService, amProjectManagementApi, projectManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.amProjectManagementApi = amProjectManagementApi;
        _this.projectManagementApi = projectManagementApi;
        return _this;
    }
    WpReportDialogFormService.prototype.generateWorkPackageReport = function (bidmProjectReportDTOId) {
        return _super.prototype.post.call(this, this.amProjectManagementApi.generateWorkPackageReport, bidmProjectReportDTOId);
    };
    WpReportDialogFormService.prototype.generateAssetWorkXmlAlternate = function (projectId) {
        if (projectId === void 0) { projectId = ''; }
        return _super.prototype.post.call(this, this.amProjectManagementApi.generateAssetWorkXmlAlternate, projectId);
    };
    WpReportDialogFormService.prototype.exportBidmFindingsReportPdf = function (projectId) {
        if (projectId === void 0) { projectId = ''; }
        return _super.prototype.post.call(this, this.projectManagementApi.exportBidmFindingsReportPdf, projectId);
    };
    WpReportDialogFormService.prototype.exportBsdeFindingsReportPdf = function (projectId) {
        if (projectId === void 0) { projectId = ''; }
        return _super.prototype.post.call(this, this.projectManagementApi.exportBsdeFindingsReportPdf, projectId);
    };
    WpReportDialogFormService.prototype.generateAPRSCertificate = function (bidmProjectReportDTOId) {
        return _super.prototype.post.call(this, this.amProjectManagementApi.generateAPRSCertificate, bidmProjectReportDTOId);
    };
    WpReportDialogFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"],
            _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_2__["AMProjectManagementApi"],
            _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_3__["ProjectManagementApi"]])
    ], WpReportDialogFormService);
    return WpReportDialogFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\r\n  <div class=\"grid-row\">\r\n    <div class=\"grid-cell grid-cell--container\">\r\n      <div class=\"grid-cell-content\">\r\n        <div class=\"column\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group flex--auto\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".statusList\" | translate }}</label>\r\n\r\n              <div class=\"form-control aw-selectbutton-wrapper\">\r\n                <p-selectButton\r\n                  [(ngModel)]=\"searchCriteria.statusList\"\r\n                  [options]=\"statusList\"\r\n                  multiple=\"multiple\"\r\n                ></p-selectButton>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group flex--auto\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".woTypeList\" | translate }}</label>\r\n\r\n              <div class=\"form-control aw-selectbutton-wrapper\">\r\n                <p-selectButton\r\n                  [(ngModel)]=\"searchCriteria.woTypeList\"\r\n                  [options]=\"woTypeList\"\r\n                  multiple=\"multiple\"\r\n                ></p-selectButton>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".userList\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  [options]=\"userList\"\r\n                  [(ngModel)]=\"searchCriteria.assignedTo\"\r\n                  [showClear]=\"true\"\r\n                  placeholder=\"&nbsp;\"\r\n                >\r\n                </p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".assetList\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  [options]=\"assetList\"\r\n                  [(ngModel)]=\"searchCriteria.asset\"\r\n                  [showClear]=\"true\"\r\n                  placeholder=\"&nbsp;\"\r\n                >\r\n                </p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".zoneList\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  [options]=\"zoneList\"\r\n                  [(ngModel)]=\"searchCriteria.zone\"\r\n                  [showClear]=\"true\"\r\n                  placeholder=\"&nbsp;\"\r\n                >\r\n                </p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".qualificationList\" | translate }}</label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  [options]=\"qualificationList\"\r\n                  [(ngModel)]=\"searchCriteria.qualification\"\r\n                  [showClear]=\"true\"\r\n                  placeholder=\"&nbsp;\"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row action-list\">\r\n  <button type=\"button\" mat-raised-button (click)=\"reset()\">\r\n    {{ getComponentName() + \".reset\" | translate }}\r\n  </button>\r\n\r\n  <button type=\"button\" mat-raised-button (click)=\"filter()\">\r\n    {{ getComponentName() + \".filter\" | translate }}\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .action-list {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 15px; }\n  :host .action-list .aw-btn {\n    margin-left: 8px; }\n  :host .action-list .aw-btn:first-of-type {\n      margin-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLXBhY2thZ2UvZm9ybS93b3JrLW9yZGVyLXRhYmxlLWZpbHRlcnMvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcbWFpbnRlbmFuY2VcXHdvcmstcGFja2FnZVxcZm9ybVxcd29yay1vcmRlci10YWJsZS1maWx0ZXJzXFx3b3JrLW9yZGVyLXRhYmxlLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2Uvd29yay1wYWNrYWdlL2Zvcm0vd29yay1vcmRlci10YWJsZS1maWx0ZXJzL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7RUFKcEI7SUFPTSxnQkNtQ1ksRUFBQTtFRDFDbEI7TUFVUSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3dvcmstcGFja2FnZS9mb3JtL3dvcmstb3JkZXItdGFibGUtZmlsdGVycy93b3JrLW9yZGVyLXRhYmxlLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLmFjdGlvbi1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgICAuYXctYnRuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: WorkOrderTableFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderTableFiltersComponent", function() { return WorkOrderTableFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/types/generic-component */ "./src/app/shared/types/generic-component.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _work_package_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../work-package-form.service */ "./src/app/main/maintenance/work-package/form/work-package-form.service.ts");
/* harmony import */ var _work_order_table_filters_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work-order-table-filters.service */ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.service.ts");
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





var WorkOrderTableFiltersComponent = /** @class */ (function (_super) {
    __extends(WorkOrderTableFiltersComponent, _super);
    function WorkOrderTableFiltersComponent(wpFormService, workOrderTableFiltersService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write) || this;
        _this.wpFormService = wpFormService;
        _this.workOrderTableFiltersService = workOrderTableFiltersService;
        _this.init();
        return _this;
    }
    WorkOrderTableFiltersComponent.prototype.getComponentName = function () {
        return 'WorkOrderTableFiltersComponent';
    };
    WorkOrderTableFiltersComponent.prototype.filter = function () {
        this.onFilter.emit();
    };
    WorkOrderTableFiltersComponent.prototype.reset = function () {
        this.onReset.emit();
    };
    WorkOrderTableFiltersComponent.prototype.init = function () {
        var _this = this;
        this.wpFormService.woStatusList$.subscribe(function (statusList) { return (_this.statusList = statusList); });
        this.wpFormService.woTypeList$.subscribe(function (list) { return (_this.woTypeList = list); });
        this.workOrderTableFiltersService.assignetToFilterList$.subscribe(function (list) { return (_this.userList = list); });
        this.workOrderTableFiltersService.assetFilterList$.subscribe(function (list) { return (_this.assetList = list); });
        this.workOrderTableFiltersService.zoneFilterList$.subscribe(function (list) { return (_this.zoneList = list); });
        this.workOrderTableFiltersService.qualificationList$.subscribe(function (list) { return (_this.qualificationList = list); });
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorkOrderTableFiltersComponent.prototype, "searchCriteria", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WorkOrderTableFiltersComponent.prototype, "onFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WorkOrderTableFiltersComponent.prototype, "onReset", void 0);
    WorkOrderTableFiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-work-order-table-filters',
            template: __webpack_require__(/*! ./work-order-table-filters.component.html */ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.component.html"),
            styles: [__webpack_require__(/*! ./work-order-table-filters.component.scss */ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.component.scss")]
        }),
        __metadata("design:paramtypes", [_work_package_form_service__WEBPACK_IMPORTED_MODULE_3__["WorkPackageFormService"],
            _work_order_table_filters_service__WEBPACK_IMPORTED_MODULE_4__["WorkOrderTableFiltersService"]])
    ], WorkOrderTableFiltersComponent);
    return WorkOrderTableFiltersComponent;
}(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_1__["GenericComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: WorkOrderTableFiltersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderTableFiltersModule", function() { return WorkOrderTableFiltersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _work_order_table_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work-order-table-filters.component */ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.component.ts");
/* harmony import */ var _work_order_table_filters_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./work-order-table-filters.service */ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.service.ts");
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
var EXTERNAL_MODULES = [primeng_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"], primeng_selectbutton__WEBPACK_IMPORTED_MODULE_2__["SelectButtonModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__["DropdownModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_work_order_table_filters_component__WEBPACK_IMPORTED_MODULE_7__["WorkOrderTableFiltersComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_work_order_table_filters_service__WEBPACK_IMPORTED_MODULE_8__["WorkOrderTableFiltersService"]];
var WorkOrderTableFiltersModule = /** @class */ (function () {
    function WorkOrderTableFiltersModule() {
    }
    WorkOrderTableFiltersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS),
            exports: __spread(COMPONENTS),
            imports: __spread([_shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_4__["AngularCommonSharedModule"], _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_5__["AngularGenericTemplatesSharedModule"], _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_6__["AppCommonSharedModule"]], EXTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], WorkOrderTableFiltersModule);
    return WorkOrderTableFiltersModule;
}());



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.service.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.service.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: WorkOrderTableFiltersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderTableFiltersService", function() { return WorkOrderTableFiltersService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
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






var WorkOrderTableFiltersService = /** @class */ (function (_super) {
    __extends(WorkOrderTableFiltersService, _super);
    function WorkOrderTableFiltersService(http, appConfigService) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this._assignedToFilterList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        _this.assignetToFilterList$ = _this._assignedToFilterList.asObservable();
        _this._assetFilterList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        _this.assetFilterList$ = _this._assetFilterList.asObservable();
        _this._zoneFilterList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        _this.zoneFilterList$ = _this._zoneFilterList.asObservable();
        _this._qualificationList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        _this.qualificationList$ = _this._qualificationList.asObservable();
        return _this;
    }
    Object.defineProperty(WorkOrderTableFiltersService.prototype, "assignedToFilterList", {
        set: function (set) {
            var list = Array.from(set).sort();
            this._assignedToFilterList.next(_shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_5__["SelectItemUtils"].fromValues(list));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkOrderTableFiltersService.prototype, "assetFilterList", {
        set: function (set) {
            var list = Array.from(set).sort();
            this._assetFilterList.next(_shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_5__["SelectItemUtils"].fromValues(list));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkOrderTableFiltersService.prototype, "zoneFilterList", {
        set: function (set) {
            var list = Array.from(set).sort();
            this._zoneFilterList.next(_shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_5__["SelectItemUtils"].fromValues(list));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkOrderTableFiltersService.prototype, "qualificationList", {
        set: function (set) {
            var list = Array.from(set).sort();
            this._qualificationList.next(_shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_5__["SelectItemUtils"].fromValues(list));
        },
        enumerable: true,
        configurable: true
    });
    WorkOrderTableFiltersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"]])
    ], WorkOrderTableFiltersService);
    return WorkOrderTableFiltersService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/work-package-form.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/work-package-form.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #page *ngIf=\"loadedWorkflow\">\r\n  <div class=\"page-header\">\r\n    <div class=\"page-info\">\r\n      <div>\r\n        <h2 class=\"page-title\">\r\n          {{ \"transaction.\" + componentData.componentId | translate }}\r\n        </h2>\r\n\r\n        <div class=\"page-subtitle\">\r\n          <div *ngIf=\"!isCreateOpenMode && componentData && componentData.objectId\" class=\"page-subtitle\">\r\n            - {{ workPackage.projectNumber }}\r\n            {{ workPackage.projectName ? \" | \".concat(workPackage.projectName) : \"\" }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"object-status\" *ngIf=\"workPackage.statusState\" (click)=\"showStatus()\">\r\n        {{ workPackage.statusState | formatSelectOption: statusList }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-actions\">\r\n      <button id=\"report\" mat-raised-button (click)=\"wpReportToShow.toggle($event)\" *ngIf=\"!isCreateOpenMode\">\r\n        {{ getComponentName() + \".report\" | translate }}\r\n      </button>\r\n\r\n      <button id=\"edit\" mat-raised-button (click)=\"editWorkPackage()\" *ngIf=\"isReadOpenMode && hasUpdateAccessRight\">\r\n        {{ \"global.edit\" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        id=\"save\"\r\n        mat-raised-button\r\n        class=\"btn-with-spinner\"\r\n        color=\"primary\"\r\n        (click)=\"saveWorkPackage()\"\r\n        *ngIf=\"!isReadOpenMode\"\r\n      >\r\n        <span class=\"lds-hourglass\" *ngIf=\"showSaveSpinner\"></span>\r\n        {{ \"global.save\" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        id=\"actions\"\r\n        mat-icon-button\r\n        class=\"mat-elevation-z1\"\r\n        matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n        matTooltipPosition=\"above\"\r\n        aria-label=\"Show all actions\"\r\n        [matMenuTriggerFor]=\"actions\"\r\n      >\r\n        <mat-icon>more_horiz</mat-icon>\r\n      </button>\r\n      <mat-menu #actions=\"matMenu\">\r\n        <button\r\n          id=\"goTo\"\r\n          mat-menu-item\r\n          [matMenuTriggerFor]=\"navigations\"\r\n          *ngIf=\"\r\n            workPackage.statusState !== awPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED &&\r\n            workPackage.statusState !== awPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED\r\n          \"\r\n        >\r\n          {{ \"goTo\" | translate }}\r\n        </button>\r\n        <button id=\"importTask\" mat-menu-item (click)=\"importTask()\">\r\n          {{ getComponentName() + \".importTask\" | translate }}\r\n        </button>\r\n        <button id=\"lastUpdate\" mat-menu-item (click)=\"lastUpdateDetails()\">\r\n          {{ getComponentName() + \".lastUpdate\" | translate }}\r\n        </button>\r\n        <button id=\"refresh\" mat-menu-item (click)=\"refresh()\">{{ \"global.refresh\" | translate }}</button>\r\n        <button id=\"favorites\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n          {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n        </button>\r\n      </mat-menu>\r\n      <mat-menu #navigations=\"matMenu\">\r\n        <button\r\n          id=\"goodsMovement\"\r\n          mat-menu-item\r\n          (click)=\"callGoodsMovement()\"\r\n          *ngIf=\"\r\n            workPackage.statusState !== awPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED &&\r\n            workPackage.statusState !== awPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED\r\n          \"\r\n        >\r\n          {{ getComponentName() + \".goodsMovement\" | translate }}\r\n        </button>\r\n\r\n        <button id=\"assetReview\" mat-menu-item (click)=\"callAssetReview()\" *ngIf=\"!isCreateOpenMode\">\r\n          {{ getComponentName() + \".assetReview\" | translate }}\r\n        </button>\r\n      </mat-menu>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-wrapper\">\r\n    <div class=\"page-container\">\r\n      <mat-tab-group animationDuration=\"0ms\" dynamicHeight>\r\n        <mat-tab id=\"homeTab\">\r\n          <ng-template mat-tab-label>\r\n            {{ \"home\" | translate }}\r\n          </ng-template>\r\n\r\n          <div class=\"grid-row\">\r\n            <div id=\"mainInformationPanel\" [ngClass]=\"isCreateOpenMode ? 'grid-cell--12' : 'grid-cell--7'\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ getComponentName() + \".mainInformation\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <ng-template [ngIf]=\"!isCreateOpenMode\" [ngIfElse]=\"createWorkPackageMainInformationTemplate\">\r\n                    <div class=\"row\">\r\n                      <div class=\"column grid-cell--6\">\r\n                        <ng-container *ngTemplateOutlet=\"asset\"></ng-container>\r\n                      </div>\r\n                      <div class=\"column grid-cell--3\">\r\n                        <ng-container *ngTemplateOutlet=\"name\"></ng-container>\r\n                      </div>\r\n                      <div class=\"column grid-cell--3\">\r\n                        <ng-container *ngTemplateOutlet=\"type\"></ng-container>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"column grid-cell--3\">\r\n                        <ng-container *ngTemplateOutlet=\"mroCenter\"></ng-container>\r\n                      </div>\r\n                      <div class=\"column grid-cell--3\">\r\n                        <ng-container *ngTemplateOutlet=\"workShop\"></ng-container>\r\n                      </div>\r\n                      <div class=\"column grid-cell--3\">\r\n                        <ng-container *ngTemplateOutlet=\"assignTo\"></ng-container>\r\n                      </div>\r\n                      <div *ngIf=\"!isCreateOpenMode\" class=\"column grid-cell--3\">\r\n                        <div id=\"dueDateDelta\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".delta\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control colored-field\">\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [ngClass]=\"dueDateDeltaColor\"\r\n                              [(ngModel)]=\"dueDateDelta\"\r\n                              [disabled]=\"true\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"column grid-cell--3\">\r\n                        <ng-container *ngTemplateOutlet=\"startDate\"></ng-container>\r\n                      </div>\r\n                      <div class=\"column grid-cell--3\">\r\n                        <ng-container *ngTemplateOutlet=\"dueDate\"></ng-container>\r\n                      </div>\r\n                      <div class=\"column grid-cell--3\">\r\n                        <ng-container *ngTemplateOutlet=\"targetTAT\"></ng-container>\r\n                      </div>\r\n                      <div *ngIf=\"!isCreateOpenMode\" class=\"column grid-cell--3\">\r\n                        <div id=\"null\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".projectTAT\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div id=\"workInProgressPanel\" class=\"grid-cell--5\" *ngIf=\"!isCreateOpenMode\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container loading-indicator\">\r\n                    <div class=\"grid-cell-title\">\r\n                      {{ getComponentName() + \".workInProgress\" | translate }}\r\n                      <div *ngIf=\"isLoadingWorkOrderTable\" class=\"lds-hourglass\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"row\">\r\n                    <div *ngIf=\"chartVisible\" class=\"chart-container\" style=\"width: 80%;\">\r\n                      <div class=\"grid-cell--12\">\r\n                        <div id=\"chart\" class=\"chart-wrapper\" style=\"min-height: 20rem; height: 20rem\">\r\n                          <p-chart\r\n                            [type]=\"chartType\"\r\n                            [data]=\"chartData\"\r\n                            [options]=\"chartOptions\"\r\n                            width=\"100%\"\r\n                            height=\"100%\"\r\n                          ></p-chart>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"column\">\r\n                      <div *ngFor=\"let cl of chartLegend\" class=\"chart-legend-label flex--2\">\r\n                        <div class=\"flex--3\">\r\n                          {{ cl.label }}\r\n                        </div>\r\n                        <div [ngStyle]=\"cl.value > 0 && { 'background-color': cl.color }\" class=\"chart-value flex--1\">\r\n                          {{ cl.value }}\r\n                        </div>\r\n                        <div class=\"flex--1\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"grid-row\">\r\n            <div\r\n              [ngClass]=\"\r\n                isCostSettingEnabled ? 'grid-cell--3 grid-cell--no-padding' : 'grid-cell--12 grid-cell--no-padding'\r\n              \"\r\n              *ngIf=\"!isCreateOpenMode\"\r\n            >\r\n              <div\r\n                id=\"materialAvailabilityPanel\"\r\n                [ngClass]=\"isCostSettingEnabled ? 'grid-cell--equally' : 'grid-cell--6 full-height'\"\r\n              >\r\n                <aw-material-availability-indicators [procurementRequests]=\"procurementRequests\">\r\n                </aw-material-availability-indicators>\r\n              </div>\r\n\r\n              <div id=\"outgoingConfigurationPanel\" [ngClass]=\"isCostSettingEnabled ? 'grid-cell--12' : 'grid-cell--6'\">\r\n                <div class=\"grid-cell grid-cell--container\" style=\"display: flex; flex-direction: column;\">\r\n                  <div class=\"grid-cell-header\">\r\n                    <div class=\"grid-cell-title-container\">\r\n                      <h3 class=\"grid-cell-title\">\r\n                        {{ getComponentName() + \".outgoingConfiguration\" | translate }}\r\n                      </h3>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"grid-cell-content\" style=\"flex-grow: 1;\">\r\n                    <div class=\"column\">\r\n                      <div class=\"row outgoingConf\">\r\n                        <div id=\"ok2\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".ok\" | translate }}\r\n                          </label>\r\n                          <div class=\"form-control readyOnlyField\">\r\n                            <div *ngIf=\"isLoadingOutgoingConf\" class=\"outgoing-conf-lds-hourglass lds-hourglass\"></div>\r\n                            <input\r\n                              *ngIf=\"!isLoadingOutgoingConf\"\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [ngClass]=\"{ ok: isConfOk() }\"\r\n                              [(ngModel)]=\"outgoinConfiguration.ok\"\r\n                              [disabled]=\"true\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <div id=\"warning2\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".warning\" | translate }}\r\n                          </label>\r\n                          <div class=\"form-control readyOnlyField\">\r\n                            <div *ngIf=\"isLoadingOutgoingConf\" class=\"outgoing-conf-lds-hourglass lds-hourglass\"></div>\r\n                            <input\r\n                              *ngIf=\"!isLoadingOutgoingConf\"\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [ngClass]=\"{ 'outgoing-conf-warning': isConfWarning() }\"\r\n                              [(ngModel)]=\"outgoinConfiguration.warning\"\r\n                              [disabled]=\"true\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <div id=\"nok2\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".nok\" | translate }}\r\n                          </label>\r\n                          <div class=\"form-control readyOnlyField\">\r\n                            <div *ngIf=\"isLoadingOutgoingConf\" class=\"outgoing-conf-lds-hourglass lds-hourglass\"></div>\r\n                            <input\r\n                              *ngIf=\"!isLoadingOutgoingConf\"\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [ngClass]=\"{ 'outgoing-conf-nok': isConfNok() }\"\r\n                              [(ngModel)]=\"outgoinConfiguration.nok\"\r\n                              [disabled]=\"true\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"aw-table-actions action-list\">\r\n                          <button\r\n                            id=\"openBtnOutgoingConfigurationPanel\"\r\n                            mat-raised-button\r\n                            (click)=\"openAppliedConfigurationManagement()\"\r\n                          >\r\n                            {{ getComponentName() + \".openBtn\" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"isCostSettingEnabled\" id=\"timelineAndCostsPanel\" class=\"grid-cell--equally\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ getComponentName() + \".timelineAndCosts\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n                <!-- WORKLOAD CHART -->\r\n                <div class=\"grid-cell-content grid-cell--4 grid-cell-workload-chart\">\r\n                  <div id=\"chart2\" class=\"chart-wrapper\">\r\n                    <p-chart\r\n                      #workloadChartElement\r\n                      [type]=\"workloadChart.chartType\"\r\n                      [data]=\"workloadChart.chartData\"\r\n                      [options]=\"workloadChart.chartOptions\"\r\n                      width=\"100%\"\r\n                      height=\"100%\"\r\n                    ></p-chart>\r\n                  </div>\r\n                </div>\r\n                <!-- DURATION CHART -->\r\n                <div class=\"grid-cell-content grid-cell--4 grid-cell-duration-chart\">\r\n                  <div id=\"chart3\" class=\"chart-wrapper\">\r\n                    <p-chart\r\n                      #durationChartElement\r\n                      [type]=\"durationChart.chartType\"\r\n                      [data]=\"durationChart.chartData\"\r\n                      [options]=\"durationChart.chartOptions\"\r\n                      width=\"100%\"\r\n                      height=\"100%\"\r\n                    ></p-chart>\r\n                  </div>\r\n                </div>\r\n                <!-- COSTS CHART -->\r\n                <div class=\"grid-cell-content grid-cell--4 grid-cell-costs-chart\">\r\n                  <div id=\"chart4\" class=\"chart-wrapper\">\r\n                    <p-chart\r\n                      #costsChartElement\r\n                      [type]=\"costsChart.chartType\"\r\n                      [data]=\"costsChart.chartData\"\r\n                      [options]=\"costsChart.chartOptions\"\r\n                      width=\"100%\"\r\n                      height=\"100%\"\r\n                    ></p-chart>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab id=\"additionalDataTab\">\r\n          <ng-template mat-tab-label>\r\n            {{ \"additionalData\" | translate }}\r\n          </ng-template>\r\n\r\n          <div class=\"grid-row\">\r\n            <div id=\"generalPanel\" #generalAnchor class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container grid-cell-general\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ getComponentName() + \".general\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col flex--2\">\r\n                          <div id=\"projectDescription\" class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".description\" | translate }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <textarea\r\n                                class=\"aw-textarea\"\r\n                                pInputTextarea\r\n                                [rows]=\"4\"\r\n                                [(ngModel)]=\"workPackage.projectDescription\"\r\n                                [disabled]=\"\r\n                                  isReadOpenMode ||\r\n                                  workPackage.statusState === awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE\r\n                                \"\r\n                              ></textarea>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col flex--2\">\r\n                          <div id=\"receivingRemarks\" class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".remarks\" | translate }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <textarea\r\n                                class=\"aw-textarea\"\r\n                                pInputTextarea\r\n                                [rows]=\"4\"\r\n                                [(ngModel)]=\"workPackage.receivingRemarks\"\r\n                                [disabled]=\"\r\n                                  isReadOpenMode ||\r\n                                  workPackage.statusState === awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE\r\n                                \"\r\n                              ></textarea>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col flex--2\">\r\n                          <div id=\"bidoOperationCode\" class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ getComponentName() + \".operation\" | translate }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <p-dropdown\r\n                                class=\"aw-dropdown fixed-width\"\r\n                                [options]=\"operationList\"\r\n                                [(ngModel)]=\"workPackage.bidoOperationCode\"\r\n                                [showClear]=\"true\"\r\n                                placeholder=\"&nbsp;\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                appendTo=\"body\"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"section\">\r\n                    <h4 class=\"section-title\">\r\n                      {{ getComponentName() + \".businessPartner\" | translate }}\r\n                    </h4>\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\">\r\n                        <div id=\"salesRequestCode\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".salesRequest\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n                            <div class=\"form-control-data\" (click)=\"openSaleRequestDialog($event)\">\r\n                              {{ workPackage.salesRequestCode }}\r\n                            </div>\r\n\r\n                            <div *ngIf=\"workPackage.salesRequestCode\" class=\"btn-clear-wrapper\">\r\n                              <i\r\n                                class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                                aria-hidden=\"true\"\r\n                                (click)=\"workPackage.salesRequestCode = ''\"\r\n                              ></i>\r\n                            </div>\r\n                            <div *ngIf=\"!isReadOpenMode\" class=\"btn-search-wrapper\">\r\n                              <i\r\n                                class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                                aria-hidden=\"true\"\r\n                                (click)=\"openSaleRequestDialog($event)\"\r\n                              ></i>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id=\"purchaseRequestCode\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".purchaseRequest\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n                            <div class=\"form-control-data\" (click)=\"openPurchaseRequestDialog($event)\">\r\n                              {{ workPackage.purchaseRequestCode }}\r\n                            </div>\r\n\r\n                            <div *ngIf=\"workPackage.purchaseRequestCode\" class=\"btn-clear-wrapper\">\r\n                              <i\r\n                                class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                                aria-hidden=\"true\"\r\n                                (click)=\"workPackage.purchaseRequestCode = ''\"\r\n                              ></i>\r\n                            </div>\r\n                            <div *ngIf=\"!isReadOpenMode\" class=\"btn-search-wrapper\">\r\n                              <i\r\n                                class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                                aria-hidden=\"true\"\r\n                                (click)=\"openPurchaseRequestDialog($event)\"\r\n                              ></i>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id=\"bidoCustomerCode\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".customer\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n                            <div class=\"form-control-data\" (click)=\"openCustomerDialog($event)\">\r\n                              {{ workPackage.bidoCustomerCode }}\r\n                            </div>\r\n\r\n                            <div *ngIf=\"workPackage.bidoCustomerCode\" class=\"btn-clear-wrapper\">\r\n                              <i\r\n                                class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                                aria-hidden=\"true\"\r\n                                (click)=\"workPackage.bidoCustomerCode = ''\"\r\n                              ></i>\r\n                            </div>\r\n                            <div *ngIf=\"!isReadOpenMode\" class=\"btn-search-wrapper\">\r\n                              <i\r\n                                class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                                aria-hidden=\"true\"\r\n                                (click)=\"openCustomerDialog($event)\"\r\n                              ></i>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id=\"projectContactName\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".contactName\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [(ngModel)]=\"workPackage.projectContactName\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id=\"projectContactPhone\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".contactPhone\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [(ngModel)]=\"workPackage.projectContactPhone\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"section\">\r\n                    <h4 class=\"section-title\">\r\n                      {{ getComponentName() + \".receiving\" | translate }}\r\n                    </h4>\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\">\r\n                        <div id=\"receivingNumber\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".receivingNumber\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [(ngModel)]=\"workPackage.receivingNumber\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id=\"receivingDate\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".dateOfReceipt\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <p-calendar\r\n                              showButtonBar=\"true\"\r\n                              [monthNavigator]=\"true\"\r\n                              [yearNavigator]=\"true\"\r\n                              [yearRange]=\"sessionService.calendarYearRange\"\r\n                              class=\"aw-calendar\"\r\n                              [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                              [locale]=\"sessionService.calendarFormat\"\r\n                              [(ngModel)]=\"workPackage.receivingDate\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                              appendTo=\"body\"\r\n                            ></p-calendar>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id=\"receivingDeliveyRef\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".deliveryReference\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [(ngModel)]=\"workPackage.receivingDeliveyRef\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id=\"receivingPackagesRef\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".packageReference\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [(ngModel)]=\"workPackage.receivingPackagesRef\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id=\"receivingNumberPackages\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".numberOfPackages\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [(ngModel)]=\"workPackage.receivingNumberPackages\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\">\r\n                        <div id=\"receivingIsDamaged\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".damaged\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <p-checkbox\r\n                              binary=\"true\"\r\n                              class=\"aw-checkbox\"\r\n                              [(ngModel)]=\"workPackage.receivingIsDamaged\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            ></p-checkbox>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id=\"receivingInventory\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".receivingInventory\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <p-dropdown\r\n                              class=\"aw-dropdown fixed-width\"\r\n                              [options]=\"receptionInventoryList\"\r\n                              [(ngModel)]=\"workPackage.receivingInventory\"\r\n                              [showClear]=\"true\"\r\n                              placeholder=\"&nbsp;\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                              appendTo=\"body\"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id=\"bireReturnReasonCode\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".returnReason\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <p-dropdown\r\n                              class=\"aw-dropdown fixed-width\"\r\n                              [options]=\"returnReasonList\"\r\n                              [(ngModel)]=\"workPackage.bireReturnReasonCode\"\r\n                              [showClear]=\"true\"\r\n                              placeholder=\"&nbsp;\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                              appendTo=\"body\"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id=\"receivingPriority\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".priority\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <p-dropdown\r\n                              class=\"aw-dropdown fixed-width\"\r\n                              [options]=\"receptionPriorityList\"\r\n                              [(ngModel)]=\"workPackage.receivingPriority\"\r\n                              [showClear]=\"true\"\r\n                              placeholder=\"&nbsp;\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                              appendTo=\"body\"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div id=\"receivingDescription\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".description\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [(ngModel)]=\"workPackage.receivingDescription\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab id=\"workOrdersTab\">\r\n          <ng-template mat-tab-label>\r\n            {{ \"workOrders\" | translate }}\r\n          </ng-template>\r\n\r\n          <div class=\"grid-row\">\r\n            <div id=\"workOrdersPanel\" class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\" *ngIf=\"!isCreateOpenMode && workPackageObject\">\r\n                <aw-work-order-list\r\n                  [userWorkflow]=\"userWorkflow\"\r\n                  [workPackage]=\"workPackageObject\"\r\n                  [mainPageOpenMode]=\"componentOpenMode\"\r\n                  (editWorkOrder)=\"onEditWorkOrder($event)\"\r\n                  (addWorkOrder)=\"onEditWorkOrder($event)\"\r\n                  (updateSchadulingEdition)=\"onUpdateSchedulingEdit($event)\"\r\n                  (transferOfWO)=\"onTransferOfWO($event)\"\r\n                ></aw-work-order-list>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab id=\"componentCockpitTab\" *ngIf=\"isComponentCockpitModuleInstalled\">\r\n          <ng-template mat-tab-label>\r\n            {{ \"componentCockpit\" | translate }}\r\n          </ng-template>\r\n\r\n          <div class=\"grid-row\">\r\n            <div id=\"componentCockpitPanel\" class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\" *ngIf=\"!isCreateOpenMode\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ \"componentCockpit\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\" *ngIf=\"showCockpitTab\">\r\n                  <aw-component-cockpit-operation-form\r\n                    *ngIf=\"isBsdeProjectExist\"\r\n                    [cockpitComponentData]=\"cockpitComponentData\"\r\n                  ></aw-component-cockpit-operation-form>\r\n\r\n                  <span *ngIf=\"!isBsdeProjectExist\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ getComponentName() + \".noProjectExist\" | translate }}\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        &nbsp;\r\n                      </label>\r\n                      <div class=\"form-control\">\r\n                        <button\r\n                          id=\"componentCockpitPanel\"\r\n                          type=\"button\"\r\n                          class=\"btn-with-spinner\"\r\n                          mat-raised-button\r\n                          (click)=\"createComponentCockpit()\"\r\n                        >\r\n                          <span class=\"lds-hourglass\" *ngIf=\"bsdeProjectLoading\"></span>\r\n                          {{ getComponentName() + \".inititateProject\" | translate }}\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab id=\"procurementRequestsTab\">\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + \".procurementRequests\" | translate }}\r\n          </ng-template>\r\n          <div class=\"grid-row\">\r\n            <!-- Position: relative; make overlayPannel not matching with element where prFilters.toggle is call -->\r\n            <div class=\"grid-cell--12\" style=\"position: static !important;\">\r\n              <aw-procurement-requests-table\r\n                [procurementRequests]=\"procurementRequests\"\r\n                (askParentRefresh)=\"refresh()\"\r\n              ></aw-procurement-requests-table>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab id=\"defectsTab\">\r\n          <ng-template mat-tab-label>\r\n            {{ \"defects\" | translate }}\r\n          </ng-template>\r\n\r\n          <div class=\"grid-row\">\r\n            <div id=\"defectsPanel\" #defectsAnchor class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\" *ngIf=\"!isCreateOpenMode\">\r\n                <aw-defect-list\r\n                  [userWorkflow]=\"userWorkflow\"\r\n                  [isAddAvailable]=\"true\"\r\n                  [equipmentName]=\"workPackage.assetName\"\r\n                  [acrsEventCodeList]=\"acrsEventCodeList\"\r\n                  [workDataDefect]=\"workDataDefect\"\r\n                  [statusState]=\"disableDefectsTableButtonsInClosedStatus()\"\r\n                ></aw-defect-list>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab id=\"documentsTab\">\r\n          <ng-template mat-tab-label>\r\n            {{ \"documents\" | translate }}\r\n          </ng-template>\r\n\r\n          <div class=\"grid-row\">\r\n            <div id=\"documentsPanel\" #documentAnchor class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ \"global.documents\" | translate }} ({{\r\n                        documentTableDataSource ? documentTableDataSource.dataCount : 0\r\n                      }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <a-table id=\"documentTableDataSource\" [dataSource]=\"documentTableDataSource\">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        id=\"downloadDocument\"\r\n                        *ngIf=\"documentTableDataSource.hasDataSelection\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"downloadFiles()\"\r\n                      >\r\n                        {{ \"global.download\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        id=\"deleteDocument\"\r\n                        *ngIf=\"\r\n                          workPackage.statusState !== awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE &&\r\n                          !isReadOpenMode &&\r\n                          documentTableDataSource.hasDataSelection\r\n                        \"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteDocuments()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        id=\"openDocument\"\r\n                        *ngIf=\"documentTableDataSource.dataSelectionCount === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openDocument()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n\r\n                      <p-fileUpload\r\n                        id=\"uploadDocument\"\r\n                        #fileUploader\r\n                        *ngIf=\"\r\n                          workPackage.statusState !== awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE &&\r\n                          !isReadOpenMode &&\r\n                          !documentTableDataSource.hasDataSelection\r\n                        \"\r\n                        mode=\"basic\"\r\n                        name=\"document[]\"\r\n                        (uploadHandler)=\"uploadDocument($event, fileUploader)\"\r\n                        chooseLabel=\"{{ 'global.upload' | translate }}\"\r\n                        customUpload=\"true\"\r\n                        auto=\"true\"\r\n                      >\r\n                      </p-fileUpload>\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n\r\n    <aw-import-task-popup\r\n      *ngIf=\"showImportTaskPopup\"\r\n      [bidmProjectDTO]=\"workPackage\"\r\n      [bidoEquipmentDTO]=\"bidoEquipment\"\r\n      [(display)]=\"showImportTaskPopup\"\r\n      (refresh)=\"refreshOnImport($event)\"\r\n    ></aw-import-task-popup>\r\n\r\n    <aw-wp-last-update-popup\r\n      *ngIf=\"showLastUpdatePopup\"\r\n      [bidmProjectDTO]=\"workPackage\"\r\n      [customers]=\"allCustomers\"\r\n      [(display)]=\"showLastUpdatePopup\"\r\n    ></aw-wp-last-update-popup>\r\n\r\n    <aw-import-task-report-dialog\r\n      *ngIf=\"showImportTaskReport\"\r\n      [(display)]=\"showImportTaskReport\"\r\n      [message]=\"importTaskReportMessage\"\r\n    ></aw-import-task-report-dialog>\r\n\r\n    <aw-dialog-search-equipment\r\n      *ngIf=\"showEquipmentDialog\"\r\n      [(display)]=\"showEquipmentDialog\"\r\n      [equipment-code]=\"workPackage.assetCode\"\r\n      [selectionMultiple]=\"false\"\r\n      [searchAllEquipment]=\"true\"\r\n      (onSelected)=\"onSelectEquipment($event)\"\r\n    ></aw-dialog-search-equipment>\r\n\r\n    <aw-dialog-search-customer\r\n      *ngIf=\"showCustomerDialog\"\r\n      [(display)]=\"showCustomerDialog\"\r\n      [iscustomerOwner]=\"true\"\r\n      [iscustomerOperator]=\"true\"\r\n      [customer-code]=\"\"\r\n      (onSelected)=\"onSelectCustomer($event)\"\r\n    ></aw-dialog-search-customer>\r\n\r\n    <aw-dialog-search-sales-request\r\n      *ngIf=\"showSaleRequestDialog\"\r\n      [(display)]=\"showSaleRequestDialog\"\r\n      [sr-code]=\"workPackage.salesRequestCode\"\r\n      (onSelected)=\"onSelectSaleRequest($event)\"\r\n    >\r\n    </aw-dialog-search-sales-request>\r\n\r\n    <aw-dialog-search-purchase-request\r\n      *ngIf=\"showPurchaseRequestDialog\"\r\n      [(display)]=\"showPurchaseRequestDialog\"\r\n      [pr-code]=\"workPackage.purchaseRequestCode\"\r\n      (onSelected)=\"setSelectedPurchaseRequest($event)\"\r\n    >\r\n    </aw-dialog-search-purchase-request>\r\n\r\n    <p-overlayPanel\r\n      #wpReportToShow\r\n      [appendTo]=\"'body'\"\r\n      (onShow)=\"wpReportToShowVisible = true\"\r\n      (onHide)=\"wpReportToShowVisible = false\"\r\n      [dismissable]=\"false\"\r\n    >\r\n      <aw-wp-report-dialog\r\n        [workPackage]=\"workPackage\"\r\n        [isAircraft]=\"false\"\r\n        (onValidate)=\"docDownloaded(wpReportToShow)\"\r\n      ></aw-wp-report-dialog>\r\n    </p-overlayPanel>\r\n\r\n    <aw-dialog-work-order-edition\r\n      *ngIf=\"displayWorkOrderEdit\"\r\n      [(display)]=\"displayWorkOrderEdit\"\r\n      [workOrderSelected]=\"workOrderSelected\"\r\n      [workPackage]=\"workPackageWOEdition\"\r\n      [workOrders]=\"workOrderListWOEdition\"\r\n      [familyCode]=\"familyCode\"\r\n      [variantCode]=\"variantCode\"\r\n      (onValidated)=\"onAddWorkOrder($event)\"\r\n    >\r\n    </aw-dialog-work-order-edition>\r\n\r\n    <aw-dialog-work-order-scheduling-edition\r\n      *ngIf=\"displayWorkOrderSchedulingEdit\"\r\n      [(display)]=\"displayWorkOrderSchedulingEdit\"\r\n      (onValidated)=\"onWorkOrderSchedulingEdited($event)\"\r\n    >\r\n    </aw-dialog-work-order-scheduling-edition>\r\n\r\n    <aw-dialog-work-package-document\r\n      *ngIf=\"showDocumentDialog\"\r\n      [openMode]=\"documentDialogOpenMode\"\r\n      [wpDocument]=\"currentDocument\"\r\n      [(display)]=\"showDocumentDialog\"\r\n    ></aw-dialog-work-package-document>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #createWorkPackageMainInformationTemplate>\r\n  <div class=\"column\">\r\n    <div class=\"row\">\r\n      <div class=\"column grid-cell--3\">\r\n        <ng-container *ngTemplateOutlet=\"asset\"></ng-container>\r\n      </div>\r\n      <div class=\"column grid-cell--3\">\r\n        <ng-container *ngTemplateOutlet=\"name\"></ng-container>\r\n      </div>\r\n      <div class=\"column grid-cell--3\">\r\n        <ng-container *ngTemplateOutlet=\"mroCenter\"></ng-container>\r\n      </div>\r\n      <div class=\"column grid-cell--3\">\r\n        <ng-container *ngTemplateOutlet=\"workShop\"></ng-container>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"column grid-cell--equally\">\r\n        <ng-container *ngTemplateOutlet=\"type\"></ng-container>\r\n      </div>\r\n      <div class=\"column grid-cell--equally\">\r\n        <ng-container *ngTemplateOutlet=\"assignTo\"></ng-container>\r\n      </div>\r\n      <div class=\"column grid-cell--equally\">\r\n        <ng-container *ngTemplateOutlet=\"startDate\"></ng-container>\r\n      </div>\r\n      <div class=\"column grid-cell--equally\">\r\n        <ng-container *ngTemplateOutlet=\"dueDate\"></ng-container>\r\n      </div>\r\n      <div class=\"column grid-cell--equally\">\r\n        <ng-container *ngTemplateOutlet=\"targetTAT\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #asset>\r\n  <div id=\"assetName\" class=\"form-group\" [class.required]=\"!isReadOpenMode && !isWorkPackageHasAssetName\">\r\n    <label class=\"form-label\">\r\n      {{ getComponentName() + \".asset\" | translate }}\r\n    </label>\r\n\r\n    <div\r\n      class=\"form-control form-control-with-modal\"\r\n      [ngClass]=\"{ 'disabled form-control-with-actions': isWorkPackageHasAssetName }\"\r\n    >\r\n      <div class=\"form-control-data\" (click)=\"openEquipmentDialog($event)\">\r\n        {{ workPackage.assetName }}\r\n      </div>\r\n\r\n      <div *ngIf=\"!isWorkPackageHasAssetName\" class=\"btn-clear-wrapper\">\r\n        <i\r\n          class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"workPackage.assetName = ''; workPackage.assetCode = ''\"\r\n        ></i>\r\n      </div>\r\n      <div *ngIf=\"!isWorkPackageHasAssetName\" class=\"btn-search-wrapper\">\r\n        <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\" (click)=\"openEquipmentDialog()\"></i>\r\n      </div>\r\n      <div class=\"form-control-actions\" [ngClass]=\"{ 'hide-asset-nav': !isWorkPackageHasAssetName }\">\r\n        <i\r\n          class=\"fa fa-fw fa-external-link aw-icon\"\r\n          aria-hidden=\"true\"\r\n          pTooltip=\"{{ 'global.open' | translate }}\"\r\n          tooltipPosition=\"top\"\r\n          [ngClass]=\"{ 'display-asset-nav': isWorkPackageHasAssetName }\"\r\n          (click)=\"openAsset()\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #name>\r\n  <div id=\"projectName\" class=\"form-group\">\r\n    <label class=\"form-label\">\r\n      {{ getComponentName() + \".name\" | translate }}\r\n    </label>\r\n\r\n    <div class=\"form-control\">\r\n      <input\r\n        type=\"text\"\r\n        class=\"aw-input\"\r\n        [(ngModel)]=\"workPackage.projectName\"\r\n        [disabled]=\"isReadOpenMode || workPackage.statusState === awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE\"\r\n      />\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ng-template #type>\r\n  <div id=\"projectType\" class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n    <label class=\"form-label\">\r\n      {{ getComponentName() + \".type\" | translate }}\r\n    </label>\r\n\r\n    <div class=\"form-control\">\r\n      <p-dropdown\r\n        class=\"aw-dropdown fixed-width\"\r\n        [options]=\"typeList\"\r\n        appendTo=\"body\"\r\n        [(ngModel)]=\"workPackage.projectType\"\r\n        [showClear]=\"true\"\r\n        placeholder=\"&nbsp;\"\r\n        [disabled]=\"isReadOpenMode || workPackage.statusState === awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE\"\r\n      ></p-dropdown>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ng-template #mroCenter>\r\n  <div id=\"bireRepairCenterCode\" class=\"form-group\">\r\n    <label class=\"form-label\">\r\n      {{ getComponentName() + \".mroCenter\" | translate }}\r\n    </label>\r\n\r\n    <div class=\"form-control\">\r\n      <p-dropdown\r\n        class=\"aw-dropdown fixed-width\"\r\n        [options]=\"mroCenterList\"\r\n        [(ngModel)]=\"workPackage.bireRepairCenterCode\"\r\n        [showClear]=\"true\"\r\n        placeholder=\"&nbsp;\"\r\n        [disabled]=\"\r\n          isReadOpenMode ||\r\n          workPackage.statusState === awPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED ||\r\n          workPackage.statusState === awPropertiesConstants.AIRM_PROJECT_STATUS_ONGOING ||\r\n          workPackage.statusState === awPropertiesConstants.AIRM_PROJECT_STATUS_PERFORMED ||\r\n          workPackage.statusState === awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE\r\n        \"\r\n        (onChange)=\"getWorkShops()\"\r\n        appendTo=\"body\"\r\n      ></p-dropdown>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ng-template #workShop>\r\n  <div id=\"bireRepairCenterCode\" class=\"form-group\">\r\n    <label class=\"form-label\">\r\n      {{ getComponentName() + \".workshop\" | translate }}\r\n    </label>\r\n\r\n    <div class=\"form-control\" *ngIf=\"workShopList.length > 0\">\r\n      <p-dropdown\r\n        class=\"aw-dropdown fixed-width\"\r\n        [options]=\"workShopList\"\r\n        [(ngModel)]=\"workPackage.bidtWarehouseId\"\r\n        [showClear]=\"true\"\r\n        [disabled]=\"isReadOpenMode || workPackage.statusState === awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE\"\r\n        placeholder=\"&nbsp;\"\r\n        appendTo=\"body\"\r\n      ></p-dropdown>\r\n    </div>\r\n    <div class=\"form-control\" *ngIf=\"workShopList.length === 0\">\r\n      <p-dropdown\r\n        class=\"aw-dropdown fixed-width\"\r\n        [options]=\"workShopList\"\r\n        [(ngModel)]=\"workPackage.bidtWarehouseId\"\r\n        [showClear]=\"true\"\r\n        [disabled]=\"true\"\r\n        placeholder=\"&nbsp;\"\r\n        appendTo=\"body\"\r\n      ></p-dropdown>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ng-template #assignTo>\r\n  <div id=\"receivingAssignedTo\" class=\"form-group\">\r\n    <label class=\"form-label\">\r\n      {{ getComponentName() + \".assignedTo\" | translate }}\r\n    </label>\r\n\r\n    <div class=\"form-control\">\r\n      <p-dropdown\r\n        class=\"aw-dropdown fixed-width\"\r\n        [options]=\"userList\"\r\n        appendTo=\"body\"\r\n        [(ngModel)]=\"workPackage.receivingAssignedTo\"\r\n        [showClear]=\"true\"\r\n        placeholder=\"&nbsp;\"\r\n        [disabled]=\"isReadOpenMode || workPackage.statusState === awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE\"\r\n      ></p-dropdown>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ng-template #startDate>\r\n  <div id=\"projectStartDate\" class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n    <label class=\"form-label\">\r\n      {{ getComponentName() + \".startDate\" | translate }}\r\n    </label>\r\n\r\n    <div class=\"form-control\">\r\n      <p-calendar\r\n        showButtonBar=\"true\"\r\n        [monthNavigator]=\"true\"\r\n        [yearNavigator]=\"true\"\r\n        [yearRange]=\"sessionService.calendarYearRange\"\r\n        appendTo=\"body\"\r\n        class=\"aw-calendar\"\r\n        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n        [locale]=\"sessionService.calendarFormat\"\r\n        [(ngModel)]=\"workPackage.projectStartDate\"\r\n        [maxDate]=\"workPackage.projectDueDate\"\r\n        [disabled]=\"isReadOpenMode || workPackage.statusState === awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE\"\r\n      ></p-calendar>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ng-template #dueDate>\r\n  <div id=\"projectDueDate\" class=\"form-group\">\r\n    <label class=\"form-label\">\r\n      {{ getComponentName() + \".dueDate\" | translate }}\r\n    </label>\r\n\r\n    <div class=\"form-control\">\r\n      <p-calendar\r\n        showButtonBar=\"true\"\r\n        [monthNavigator]=\"true\"\r\n        [yearNavigator]=\"true\"\r\n        [yearRange]=\"sessionService.calendarYearRange\"\r\n        appendTo=\"body\"\r\n        class=\"aw-calendar\"\r\n        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n        [locale]=\"sessionService.calendarFormat\"\r\n        [(ngModel)]=\"workPackage.projectDueDate\"\r\n        [minDate]=\"workPackage.projectStartDate\"\r\n        [disabled]=\"isReadOpenMode || workPackage.statusState === awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE\"\r\n      ></p-calendar>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ng-template #targetTAT>\r\n  <div id=\"projectTargetedTat\" class=\"form-group\">\r\n    <label class=\"form-label\">\r\n      {{ getComponentName() + \".targetTAT\" | translate }}\r\n    </label>\r\n\r\n    <div class=\"form-control\">\r\n      <input\r\n        type=\"text\"\r\n        class=\"aw-input\"\r\n        [(ngModel)]=\"workPackage.projectTargetedTat\"\r\n        [disabled]=\"isReadOpenMode || workPackage.statusState === awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE\"\r\n      />\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/work-package-form.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/work-package-form.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .main-creation {\n  max-width: 25%; }\n\n:host .main-update {\n  min-width: 50%; }\n\n:host .outgoingConf input,\n:host .outgoingConf label {\n  text-align: center; }\n\n:host .outgoingConf .ok {\n  background-color: #4caf50 !important; }\n\n:host .outgoingConf .outgoing-conf-warning {\n  background-color: #ffc107 !important; }\n\n:host .outgoingConf .outgoing-conf-nok {\n  background-color: #f6685e !important; }\n\n:host .full-height {\n  height: 100%; }\n\n:host .alignLeft {\n  text-align: left; }\n\n:host /deep/ .colored-field {\n  padding: 5px 0px !important; }\n\n:host /deep/ .colored-field input {\n    padding: 3px 0px !important;\n    width: 100px !important; }\n\n:host /deep/ .colored-field .error-field {\n    background-color: #f6685e !important; }\n\n:host /deep/ .colored-field .ok-field {\n    background-color: #4caf50 !important; }\n\n:host /deep/ .colored-field .warning-field {\n    background-color: #ffc107 !important; }\n\n:host .custoPadding1 {\n  padding-right: 4vw !important; }\n\n:host .custoPadding2 {\n  padding-right: 2vw !important; }\n\n:host .tableDisplayTypeList {\n  text-align: left;\n  margin-left: 8px; }\n\n:host .grid-cell-workload-chart .chart-container,\n:host .grid-cell-duration-chart .chart-container,\n:host .grid-cell-costs-chart .chart-container {\n  display: flex;\n  flex-direction: row; }\n\n@media screen and (max-width: 1280px) {\n    :host .grid-cell-workload-chart .chart-container,\n    :host .grid-cell-duration-chart .chart-container,\n    :host .grid-cell-costs-chart .chart-container {\n      flex-direction: row; } }\n\n:host .grid-cell-workload-chart .chart-wrapper,\n:host .grid-cell-duration-chart .chart-wrapper,\n:host .grid-cell-costs-chart .chart-wrapper {\n  position: relative;\n  height: 17rem;\n  width: 99%; }\n\n:host .grid-cell-work-in-progress .chart-container {\n  display: flex;\n  flex-direction: row; }\n\n@media screen and (max-width: 1280px) {\n    :host .grid-cell-work-in-progress .chart-container {\n      flex-direction: row; } }\n\n:host .grid-cell-work-in-progress .chart-container .chart-legend {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 8px; }\n\n:host .grid-cell-work-in-progress .chart-container .chart-legend .chart-legend-label {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n\n:host .grid-cell-work-in-progress .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n        height: 0.75rem;\n        margin-right: 8px;\n        width: 2rem; }\n\n:host .grid-cell-work-in-progress .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.airworthy {\n          background-color: #4caf50; }\n\n:host .grid-cell-work-in-progress .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.airworthy-with-alerts {\n          background-color: #ffc107; }\n\n:host .grid-cell-work-in-progress .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-airworthy {\n          background-color: #f6685e; }\n\n:host .grid-cell-work-in-progress .chart-container .chart-legend .chart-value {\n      font-weight: 700;\n      text-align: end;\n      padding-right: 5px; }\n\n:host .grid-cell-work-in-progress .chart-container .chart-wrapper {\n    position: relative;\n    height: 14rem;\n    width: 99%; }\n\n#breadcrumbs-status {\n  overflow: hidden;\n  display: flex; }\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n#breadcrumbs-status li {\n  float: left;\n  margin: 0 1em 0 1em; }\n\n#breadcrumbs-status .current {\n  float: left;\n  margin: 0 25px 0 20px; }\n\n#breadcrumbs-status .statusLabel {\n  background: #ddd;\n  padding: 0.7em 1em;\n  float: left;\n  text-decoration: none;\n  color: #000;\n  position: relative;\n  white-space: nowrap; }\n\n#breadcrumbs-status .current .statusLabel {\n  background: #01579b; }\n\n#breadcrumbs-status .statusLabel::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-width: 1.5em 0 1.5em 1em;\n  border-style: solid;\n  border-color: #ddd #ddd #ddd transparent;\n  left: -1em; }\n\n#breadcrumbs-status .current .statusLabel::before {\n  border-color: #01579b #01579b #01579b transparent; }\n\n#breadcrumbs-status .statusLabel::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-top: 1.5em solid transparent;\n  border-bottom: 1.5em solid transparent;\n  border-left: 1em solid #ddd;\n  right: -1em; }\n\n#breadcrumbs-status .current .statusLabel::after {\n  border-left-color: #01579b; }\n\n#breadcrumbs-status .current .statusLabel {\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  padding-bottom: 6px;\n  padding-top: 7px; }\n\n#breadcrumbs-status .current::after,\n#breadcrumbs-status .current::before {\n  content: normal; }\n\n.woDisplayType-btn {\n  padding-left: 8px; }\n\n.outgoingConf.section {\n  flex-grow: 1;\n  text-align: center; }\n\n.outgoingConf.row {\n  flex-wrap: nowrap !important; }\n\n.outgoing-conf-lds-hourglass {\n  padding-left: calc(8px * 2);\n  padding-top: 8px;\n  padding-bottom: 8px; }\n\n.action-list {\n  align-items: flex-end;\n  display: flex;\n  flex-grow: 1;\n  justify-content: center; }\n\n.action-list .aw-btn {\n    margin-left: 8px; }\n\n.action-list .aw-btn:first-of-type {\n      margin-left: 0; }\n\n.status-actions {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 100%;\n  justify-content: flex-end; }\n\n.status-actions button {\n  margin-left: 8px; }\n\n.breadcrumbs {\n  display: flex;\n  flex-grow: 1; }\n\n.readyOnlyField {\n  padding: 8px 0; }\n\n.display-asset-nav {\n  display: block !important; }\n\n.hide-asset-nav {\n  display: none !important; }\n\n.table-display-type {\n  margin-left: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLXBhY2thZ2UvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxtYWludGVuYW5jZVxcd29yay1wYWNrYWdlXFxmb3JtXFx3b3JrLXBhY2thZ2UtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLXBhY2thZ2UvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2Uvd29yay1wYWNrYWdlL2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUksY0FBYyxFQUFBOztBQUZsQjtFQUtJLGNBQWMsRUFBQTs7QUFMbEI7O0VBVU0sa0JBQWtCLEVBQUE7O0FBVnhCO0VBY00sb0NBQTBDLEVBQUE7O0FBZGhEO0VBa0JNLG9DQUFvQyxFQUFBOztBQWxCMUM7RUFzQk0sb0NBQXdDLEVBQUE7O0FBdEI5QztFQTBCSSxZQUFZLEVBQUE7O0FBMUJoQjtFQThCSSxnQkFBZ0IsRUFBQTs7QUE5QnBCO0VBa0NJLDJCQUEyQixFQUFBOztBQWxDL0I7SUFvQ00sMkJBQTJCO0lBQzNCLHVCQUF1QixFQUFBOztBQXJDN0I7SUF3Q00sb0NBQXdDLEVBQUE7O0FBeEM5QztJQTJDTSxvQ0FBMEMsRUFBQTs7QUEzQ2hEO0lBOENNLG9DQUFvQyxFQUFBOztBQTlDMUM7RUFtREksNkJBQTZCLEVBQUE7O0FBbkRqQztFQXVESSw2QkFBNkIsRUFBQTs7QUF2RGpDO0VBMkRJLGdCQUFnQjtFQUNoQixnQkNuQmMsRUFBQTs7QUR6Q2xCOzs7RUVvQkUsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBRmdEZjtJQXJFTjs7O01Bc0VRLG1CQUFtQixFQUFBLEVBRXRCOztBQXhFTDs7O0VBMEVNLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVSxFQUFBOztBQTVFaEI7RUVvQkUsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBRitEZjtJQXBGTjtNQXFGUSxtQkFBbUIsRUFBQSxFQTZDdEI7O0FBbElMO0lFZUUsYUFBYTtJQUNiLHNCQUFzQjtJRjJFaEIsdUJBQXVCO0lBQ3ZCLGdCQ25EVSxFQUFBOztBRHpDbEI7TUVvQkUsYUFBYTtNQUNiLG1CQUFtQjtNRjRFWCxtQkFBbUIsRUFBQTs7QUFqRzdCO1FBb0dZLGVBQWU7UUFDZixpQkM1RE07UUQ2RE4sV0FBVyxFQUFBOztBQXRHdkI7VUF5R2MseUJDdkZRLEVBQUE7O0FEbEJ0QjtVQTZHYyx5QkMxRkUsRUFBQTs7QURuQmhCO1VBaUhjLHlCQzVGTSxFQUFBOztBRHJCcEI7TUF1SFUsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixrQkFBa0IsRUFBQTs7QUF6SDVCO0lBOEhRLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVSxFQUFBOztBQU1sQjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBQ1gscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFdDakt1QjtFRGtLdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG1CQ3JLb0IsRUFBQTs7QUR3S3RCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGlEQUFtRSxFQUFBOztBQUdyRTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDJCQUEyQjtFQUMzQixXQUFXLEVBQUE7O0FBR2I7RUFDRSwwQkNuTW9CLEVBQUE7O0FEc010QjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7O0VBRUUsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSwyQkFBd0M7RUFDeEMsZ0JDMUxnQjtFRDJMaEIsbUJDM0xnQixFQUFBOztBRDhMbEI7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUIsRUFBQTs7QUFKekI7SUFPSSxnQkNyTWMsRUFBQTs7QUQ4TGxCO01BVU0sY0FBYyxFQUFBOztBQUtwQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxnQkN0TmdCLEVBQUE7O0FEeU5sQjtFQUNFLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3dvcmstcGFja2FnZS9mb3JtL3dvcmstcGFja2FnZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLm1haW4tY3JlYXRpb24ge1xyXG4gICAgbWF4LXdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIC5tYWluLXVwZGF0ZSB7XHJcbiAgICBtaW4td2lkdGg6IDUwJTtcclxuICB9XHJcbiAgLm91dGdvaW5nQ29uZiB7XHJcbiAgICBpbnB1dCxcclxuICAgIGxhYmVsIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDEgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAub3V0Z29pbmctY29uZi13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5vdXRnb2luZy1jb25mLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mdWxsLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuYWxpZ25MZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAvZGVlcC8gLmNvbG9yZWQtZmllbGQge1xyXG4gICAgcGFkZGluZzogNXB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgaW5wdXQge1xyXG4gICAgICBwYWRkaW5nOiAzcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmVycm9yLWZpZWxkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDEgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5vay1maWVsZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDEgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC53YXJuaW5nLWZpZWxkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmN1c3RvUGFkZGluZzEge1xyXG4gICAgcGFkZGluZy1yaWdodDogNHZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9QYWRkaW5nMiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAydncgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50YWJsZURpc3BsYXlUeXBlTGlzdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLXdvcmtsb2FkLWNoYXJ0LFxyXG4gIC5ncmlkLWNlbGwtZHVyYXRpb24tY2hhcnQsXHJcbiAgLmdyaWQtY2VsbC1jb3N0cy1jaGFydCB7XHJcbiAgICAuY2hhcnQtY29udGFpbmVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGFydC13cmFwcGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDE3cmVtO1xyXG4gICAgICB3aWR0aDogOTklO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC13b3JrLWluLXByb2dyZXNzIHtcclxuICAgIC5jaGFydC1jb250YWluZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoYXJ0LWxlZ2VuZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgIC5jaGFydC1sZWdlbmQtbGFiZWwge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC5jaGFydC1sZWdlbmQtbGFiZWwtY29sb3Ige1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDJyZW07XHJcblxyXG4gICAgICAgICAgICAmLmFpcndvcnRoeSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5haXJ3b3J0aHktd2l0aC1hbGVydHMge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYubm90LWFpcndvcnRoeSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGFydC12YWx1ZSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoYXJ0LXdyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDE0cmVtO1xyXG4gICAgICAgIHdpZHRoOiA5OSU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNicmVhZGNydW1icy1zdGF0dXMge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxudWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbiNicmVhZGNydW1icy1zdGF0dXMgbGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMCAxZW0gMCAxZW07XHJcbn1cclxuXHJcbiNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMCAyNXB4IDAgMjBweDtcclxufVxyXG5cclxuI2JyZWFkY3J1bWJzLXN0YXR1cyAuc3RhdHVzTGFiZWwge1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgcGFkZGluZzogMC43ZW0gMWVtO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuI2JyZWFkY3J1bWJzLXN0YXR1cyAuY3VycmVudCAuc3RhdHVzTGFiZWwge1xyXG4gIGJhY2tncm91bmQ6ICRhY2NlbnQtY29sb3I7XHJcbn1cclxuXHJcbiNicmVhZGNydW1icy1zdGF0dXMgLnN0YXR1c0xhYmVsOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC0xLjVlbTtcclxuICBib3JkZXItd2lkdGg6IDEuNWVtIDAgMS41ZW0gMWVtO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGRkICNkZGQgI2RkZCB0cmFuc3BhcmVudDtcclxuICBsZWZ0OiAtMWVtO1xyXG59XHJcblxyXG4jYnJlYWRjcnVtYnMtc3RhdHVzIC5jdXJyZW50IC5zdGF0dXNMYWJlbDo6YmVmb3JlIHtcclxuICBib3JkZXItY29sb3I6ICRhY2NlbnQtY29sb3IgJGFjY2VudC1jb2xvciAkYWNjZW50LWNvbG9yIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jYnJlYWRjcnVtYnMtc3RhdHVzIC5zdGF0dXNMYWJlbDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC0xLjVlbTtcclxuICBib3JkZXItdG9wOiAxLjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAxLjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdDogMWVtIHNvbGlkICNkZGQ7XHJcbiAgcmlnaHQ6IC0xZW07XHJcbn1cclxuXHJcbiNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQgLnN0YXR1c0xhYmVsOjphZnRlciB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbn1cclxuXHJcbiNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQgLnN0YXR1c0xhYmVsIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxufVxyXG5cclxuI2JyZWFkY3J1bWJzLXN0YXR1cyAuY3VycmVudDo6YWZ0ZXIsXHJcbiNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogbm9ybWFsO1xyXG59XHJcblxyXG4ud29EaXNwbGF5VHlwZS1idG4ge1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcblxyXG4ub3V0Z29pbmdDb25mLnNlY3Rpb24ge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vdXRnb2luZ0NvbmYucm93IHtcclxuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3V0Z29pbmctY29uZi1sZHMtaG91cmdsYXNzIHtcclxuICBwYWRkaW5nLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gIHBhZGRpbmctdG9wOiAkbWFyZ2luLXZhbHVlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAkbWFyZ2luLXZhbHVlO1xyXG59XHJcblxyXG4uYWN0aW9uLWxpc3Qge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLmF3LWJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdGF0dXMtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5zdGF0dXMtYWN0aW9ucyBidXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4ucmVhZHlPbmx5RmllbGQge1xyXG4gIHBhZGRpbmc6IDhweCAwO1xyXG59XHJcblxyXG4uZGlzcGxheS1hc3NldC1uYXYge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oaWRlLWFzc2V0LW5hdiB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUtZGlzcGxheS10eXBlIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFV0aWxzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBidXR0b24tY29sb3IoJGJhY2tncm91bmQtY29sb3IsICRjb2xvciwgJGJvcmRlci1jb2xvcjogbnVsbCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIsXHJcbiAgJjpub3QoOmRpc2FibGVkKS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpZigkYm9yZGVyLWNvbG9yID09IG51bGwsICRjb2xvciwgJGJvcmRlci1jb2xvcik7XHJcbiAgICBjb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleC1jb2x1bW4oKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1yb3coKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQoKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuXHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWRpc2FibGVkKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWRpc2FibGVkO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1mb2N1cygpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxufVxyXG5cclxuQG1peGluIGlucHV0LWhvdmVyKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VhcmNoLWNyaXRlcmlhLWNvbnRhaW5lciB7XHJcbiAgLmFkdmFuY2VkLWNyaXRlcmlhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtY3JpdGVyaWEtZm9vdGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAuYXctYnRuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlY3Rpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiA0KTtcclxuXHJcbiAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgJi5yZXF1aXJlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkKCk7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hbGVydCB7XHJcbiAgICAgICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICYgPiBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LW92ZXJmbG93LWhpZGRlbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdyaWQgZm9ybSBjb250cm9scyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJNZWRpdW1cIjtcclxuXHJcbiAgJiA+IGlucHV0ICsgcC1tZXNzYWdlID4gLnVpLW1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpmb2N1cyxcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDI1NSwgMjU1LCAyNTUpIDYwJSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgIC5hdy1pY29uIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4sXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0biB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcblxyXG4gICAgICAmLmF3LWNhbGVuZGFyIC51aS1pbnB1dHRleHQsXHJcbiAgICAgICYuYXctZHJvcGRvd24gLnVpLWRyb3Bkb3duLFxyXG4gICAgICAmLmF3LWlucHV0LFxyXG4gICAgICAmLmF3LXRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1jYWxlbmRhciB7XHJcbiAgICAgIC8vIEZJWE1FOiBmaXggYW4gVUkgaXNzdWUgb24gUHJpbWVORyBjYWxlbmRhciBjb21wb25lbnQ7IHRvIHJlbW92ZSB3aGVuIGlzc3VlIHdpbGwgYmUgZml4ZWQgdXBzdHJlYW1cclxuICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAgIC5hdy1pY29uOm5vdCgucmVhZC1vbmx5LWxpbmspIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgLy8gbm9uZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udHJvbC1kYXRhIHtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tbmltcCxcclxuICAgIC5idG4tZXh0ZXJuYWwtbGluay13cmFwcGVyLFxyXG4gICAgLmJ0bi1jbGVhci13cmFwcGVyLFxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyLFxyXG4gICAgLmJ0bi1zZWFyY2gtd3JhcHBlciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlciB7XHJcbiAgICAgIC5hdy1maWxldXBsb2FkIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51aS1idXR0b24ge1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlOTM0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tY2xlYXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tc2VhcmNoIHtcclxuICAgICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1yYWRpb2J1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICYgPiAuYXctcmFkaW9idXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMiAqICN7JG1hcmdpbi12YWx1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLWdlbmVyaWMge1xyXG4gIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG5cclxuICAmID4gYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IC5hbGVydCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcblxyXG4gICAgJi5hbGVydC0tbm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNhbGVuZGFyIHtcclxuICAmLnVpLWlucHV0d3JhcHBlci1mb2N1cyB7XHJcbiAgICAudWktY2FsZW5kYXIgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1peGluIGdyaWQtY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRjaGVja2JveC1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRjaGVja2JveC1oZWlnaHQ7XHJcblxyXG4gIC51aS1jaGtib3gge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLWNoa2JveC1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1kcm9wZG93biB7XHJcbiAgLnVpLWRyb3Bkb3duIHtcclxuICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWZvY3VzIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uLFxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbiB7XHJcbiAgICAgIHJpZ2h0OiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgQGluY2x1ZGUgdGV4dC1vdmVyZmxvdy1oaWRkZW4oKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyICogMS43NXJlbSk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZpeGVkLXdpZHRoIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZmlsZXVwbG9hZCB7XHJcbiAgQGV4dGVuZCAuYXctYnRuO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICAudWktZmlsZXVwbG9hZC1jaG9vc2Uge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAwICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1idXR0b24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtaW5wdXQoKSB7XHJcbiAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRleHRhcmVhIHtcclxuICBAaW5jbHVkZSBncmlkLWlucHV0KCk7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi1oZWlnaHQ6ICRmb3JtLWNvbnRyb2wtaGVpZ2h0O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXJhZGlvYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG4gIHdpZHRoOiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG5cclxuICAudWktcmFkaW9idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLXJhZGlvYnV0dG9uLWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcblxyXG4gICAgICAgIC51aS1yYWRpb2J1dHRvbi1pY29uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gY2FsZW5kYXItcGFuZWwge1xyXG4gIC51aS1kYXRlcGlja2VyOm5vdCgudWktZGF0ZXBpY2tlci1pbmxpbmUpIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRyb3Bkb3duLXBhbmVsIHtcclxuICAudWktZHJvcGRvd24tcGFuZWwge1xyXG4gICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuICAgIC51aS1kcm9wZG93bi1pdGVtcy13cmFwcGVyIC51aS1kcm9wZG93bi1saXN0IHtcclxuICAgICAgLnVpLWRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnVpLXN0YXRlLWhpZ2hsaWdodCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/work-package-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/work-package-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WorkPackageFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPackageFormComponent", function() { return WorkPackageFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/dialog-search-customer/dialog-search-customer.service */ "./src/app/shared/components/dialog-search-customer/dialog-search-customer.service.ts");
/* harmony import */ var _shared_components_dialog_work_package_dialog_work_package_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/dialog-work-package/dialog-work-package.component */ "./src/app/shared/components/dialog-work-package/dialog-work-package.component.ts");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/constants/control-config-constants */ "./src/app/shared/constants/control-config-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_page_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/services/page.service */ "./src/app/shared/services/page.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../shared/utils/bidm-document-utils */ "./src/app/shared/utils/bidm-document-utils.ts");
/* harmony import */ var _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../shared/utils/bido-family-variant-utils */ "./src/app/shared/utils/bido-family-variant-utils.ts");
/* harmony import */ var _shared_utils_dom_utils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../shared/utils/dom-utils */ "./src/app/shared/utils/dom-utils.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../shared/utils/number-utils */ "./src/app/shared/utils/number-utils.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _shared_utils_settings_utils__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../shared/utils/settings-utils */ "./src/app/shared/utils/settings-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../shared/utils/workflow-utils */ "./src/app/shared/utils/workflow-utils.ts");
/* harmony import */ var _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../overlay/overlay.service */ "./src/app/main/overlay/overlay.service.ts");
/* harmony import */ var _procurement_request_procurement_requests_table_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../procurement-request/procurement-requests-table.service */ "./src/app/main/maintenance/procurement-request/procurement-requests-table.service.ts");
/* harmony import */ var _work_package_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../work-package.service */ "./src/app/main/maintenance/work-package/work-package.service.ts");
/* harmony import */ var _popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./popups/dialog-work-order-edition/dialog-work-order-edition.service */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts");
/* harmony import */ var _status_work_package_status_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./status/work-package-status.component */ "./src/app/main/maintenance/work-package/form/status/work-package-status.component.ts");
/* harmony import */ var _work_package_form_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./work-package-form.service */ "./src/app/main/maintenance/work-package/form/work-package-form.service.ts");
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
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};











































var WorkPackageFormComponent = /** @class */ (function (_super) {
    __extends(WorkPackageFormComponent, _super);
    function WorkPackageFormComponent(favoriteService, loaderService, messageService, pageTocService, serializationService, tabService, propertiesService, translateService, sessionService, wpFormService, wpService, pageService, confirmationService, dateService, _overlayService, dialogSearchCustomerService, procurementRequestsTableService, dialogWorkOrderEditService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Read, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.propertiesService = propertiesService;
        _this.translateService = translateService;
        _this.sessionService = sessionService;
        _this.wpFormService = wpFormService;
        _this.wpService = wpService;
        _this.pageService = pageService;
        _this.confirmationService = confirmationService;
        _this.dateService = dateService;
        _this._overlayService = _overlayService;
        _this.dialogSearchCustomerService = dialogSearchCustomerService;
        _this.procurementRequestsTableService = procurementRequestsTableService;
        _this.dialogWorkOrderEditService = dialogWorkOrderEditService;
        _this.workPackage = {};
        _this.statusActionList = [];
        _this.workOrderCount = 0;
        _this.outgoinConfiguration = { ok: undefined, warning: undefined, nok: undefined };
        _this.stockControlConf = { ok: undefined, warning: undefined, nok: undefined };
        _this.showEquipmentDialog = false;
        _this.showCustomerDialog = false;
        _this.showSaleRequestDialog = false;
        _this.showPurchaseRequestDialog = false;
        _this.isLoadingWorkOrderTable = false;
        _this.isLoadingOutgoingConf = false;
        _this.isLoadingStockControlConf = false;
        _this.chartVisible = false;
        _this.acrsEventCodeList = [];
        _this.days = "" + _this.translateService.instant(_this.getTranslateKey('days'));
        // work order edition dialog
        _this.displayWorkOrderEdit = false;
        // update scheduling edit
        _this.displayWorkOrderSchedulingEdit = false;
        _this.showCockpitTab = true;
        _this.awPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"];
        _this.component = WorkPackageFormComponent_1;
        _super.prototype.registerPageTocEntryObservable.call(_this);
        _this.initDocumentTableDataSource();
        _this.documentTableDataSource.dataSelection = [];
        _this.documentAddedList = [];
        _this.documentList = [];
        _this.documentRemovedList = [];
        _this.documentUpdatedList = [];
        _this.documentTypeList = [];
        _this.loadDocumentTypeList();
        _this.workOrderTable = [];
        _this.canUpdateCloseWp = false;
        _this.showImportTaskPopup = false;
        _this.showImportTaskReport = false;
        _this.initCostSettingDisplay();
        _this.initChart();
        _this.userWorkflowSubject.subscribe(function (userWorkflow) {
            _this.updateWorkflowStatusList();
        });
        return _this;
    }
    WorkPackageFormComponent_1 = WorkPackageFormComponent;
    WorkPackageFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_13__["ComponentConstants"].MAI_WORK_PACKAGE_FORM;
    };
    WorkPackageFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.workPackage = {};
        this.workPackageObject = {};
        this.initToc();
        this.loadLists();
        this.wpService.loadUserList().subscribe(function (users) { return (_this.userList = users); });
        this.updateOpenMode(this.componentData.openMode);
        this.componentOpenMode = this.componentData.openMode;
        if (this.componentData.objectId) {
            var objectId = this.serializationService.deserialize(this.componentData.objectId);
            this.projectId = objectId.wpId;
            this.initDocumentTable();
            this.loadWorkPackage();
            // Check if Component Cockpit module is enable
            this.setComponentCockpitTabVisibility();
        }
        else {
            this.loadUserWorkflow(undefined);
        }
        this.canUpdateCloseWp = this.sessionService.hasUserRightByUseCase(_shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_12__["BidoFunctionTypeConstants"].UC_AIRM_WP_CLOSING, _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_12__["BidoFunctionTypeConstants"].DEGREE_UPDATE);
        this.canManageCloseWp = this.sessionService.hasUserRightByUseCase(_shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_12__["BidoFunctionTypeConstants"].UC_AIRM_WP_CLOSING, _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_12__["BidoFunctionTypeConstants"].DEGREE_MANAGE);
        this.searchCustomers();
    };
    WorkPackageFormComponent.prototype.refresh = function () {
        this.initDocumentTable();
        this.loadWorkPackage();
        this.loadBsdeProject();
    };
    WorkPackageFormComponent.prototype.initToc = function () {
        if (!this.isCreateOpenMode) {
            this.toc = [
                {
                    id: this.component.STATUS_ANCHOR_ID,
                    anchor: this.statusAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('statusandTimelines'))
                },
                {
                    id: this.component.MAIN_ANCHOR_ID,
                    anchor: this.mainAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('mainInformation'))
                },
                {
                    id: this.component.MATERIAL_AVAILABILITY_ANCHOR_ID,
                    anchor: this.materialAvailabilityAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('materialAvailability'))
                },
                {
                    id: this.component.OUTGOING_CONFIGURAION_ANCHOR_ID,
                    anchor: this.outgoingConfigurationAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('outgoingConfiguration'))
                },
                {
                    id: this.component.PROGRESS_ANCHOR_ID,
                    anchor: this.workOrderProgressAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('workInProgress'))
                },
                {
                    id: this.component.TIMELINE_AND_COSTS_ANCHOR_ID,
                    anchor: this.timelineAndCostsAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('timelineAndCosts'))
                },
                {
                    id: this.component.GENERAL_ANCHOR_ID,
                    anchor: this.generalAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('general'))
                },
                {
                    id: this.component.DEFECTS_ANCHOR_ID,
                    anchor: this.defectsAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('defects'))
                },
                {
                    id: this.component.DOCUMENTS_ANCHOR_ID,
                    anchor: this.documentAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('document'))
                }
            ];
        }
        else {
            this.toc = [
                {
                    id: this.component.STATUS_ANCHOR_ID,
                    anchor: this.statusAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('statusandTimelines'))
                },
                {
                    id: this.component.MAIN_ANCHOR_ID,
                    anchor: this.mainAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('mainInformation'))
                },
                {
                    id: this.component.GENERAL_ANCHOR_ID,
                    anchor: this.generalAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('general'))
                }
            ];
        }
        _super.prototype.selectPageTocEntry.call(this, this.component.STATUS_ANCHOR_ID);
    };
    WorkPackageFormComponent.prototype.loadLists = function () {
        var _this = this;
        var removedstatuses = [_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_LINE_MAINTENANCE];
        this.wpService.loadStatusList(removedstatuses).subscribe(function (res) { return (_this.statusList = res); });
        this.wpFormService.getLocalCurrency().subscribe(function (res) { return (_this.currency = res); });
        this.wpService.loadGenProps(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_15__["GenericPropertyConstants"].WORK_PACKAGE_TYPE_MAP).subscribe(function (res) {
            _this.typeList = res;
            _this.workPackage.projectType = "" + _shared_components_dialog_work_package_dialog_work_package_component__WEBPACK_IMPORTED_MODULE_8__["WPType"].ACRS;
        });
        this.wpService.loadGenProps(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_15__["GenericPropertyConstants"].RECEPTION_PRIORITY_MAP).subscribe(function (res) { return (_this.receptionPriorityList = res); });
        this.wpService.loadGenProps(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_15__["GenericPropertyConstants"].RECEPTION_INVENTORY_MAP).subscribe(function (res) { return (_this.receptionInventoryList = res); });
        this.wpService.loadMROCenterList().subscribe(function (result) { return (_this.mroCenterList = result); });
        this.wpService.loadOperationList().subscribe(function (result) { return (_this.operationList = result); });
        this.wpFormService.loadReturnReasons().subscribe(function (result) { return (_this.returnReasonList = result); });
        this.workShopList = [];
    };
    WorkPackageFormComponent.prototype.updateWorkflowStatusList = function () {
        this.workflowStatus = _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_36__["WorkflowUtils"].filterWorkflowStatusList(this.userWorkflow, this.statusList, this.workPackage.statusState);
    };
    WorkPackageFormComponent.prototype.initChart = function () {
        this.chartLegend = [
            {
                statusList: [_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_POSTPONED],
                value: 0,
                color: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].COLOR_GREEN,
                label: "" + this.translateService.instant(this.getTranslateKey('chartPostponed'))
            },
            {
                statusList: [_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_POSTPONEMENT_REQUESTED],
                value: 0,
                color: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].COLOR_YELLOW,
                label: "" + this.translateService.instant(this.getTranslateKey('chartPostponementRequest'))
            }
        ];
        this.chartDataset = [
            {
                statusList: [_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_PLANNED],
                value: 0,
                color: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].COLOR_GREY,
                label: "" + this.translateService.instant(this.getTranslateKey('chartScheduled'))
            },
            {
                statusList: [_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_ONGOING],
                value: 0,
                color: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].COLOR_BLUE_LIGHT,
                label: "" + this.translateService.instant(this.getTranslateKey('chartOngoing'))
            },
            {
                statusList: [_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_TO_BE_CONFIRMED],
                value: 0,
                color: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].COLOR_BLUE_LIGHT,
                label: "" + this.translateService.instant(this.getTranslateKey('chartToBeConfirmed'))
            },
            {
                statusList: [_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_PERFORMED],
                value: 0,
                color: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].COLOR_BLUE_DARK,
                label: "" + this.translateService.instant(this.getTranslateKey('chartPerformed'))
            },
            {
                statusList: [_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_CLOSE],
                value: 0,
                color: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].COLOR_GREEN,
                label: "" + this.translateService.instant(this.getTranslateKey('chartClose'))
            }
        ];
        this.chartType = 'bar';
        this.chartVisible = false;
        this.chartData = {
            datasets: [
                {
                    data: this.chartDataset.map(function (cd) { return cd.value; }),
                    backgroundColor: this.chartDataset.map(function (cd) { return cd.color; }),
                    hoverBackgroundColor: this.chartDataset.map(function (cd) { return cd.color; })
                }
            ],
            labels: this.chartDataset.map(function (cd) { return cd.label; })
        };
        this.setChartOptions();
        this.chartVisible = true;
        this.workloadChart = this.initPlannedRealChart([
            this.initPlannedRealCharTypeDataset('workload', _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].COLOR_GREEN)
        ]);
        this.durationChart = this.initPlannedRealChart([
            this.initPlannedRealCharTypeDataset('duration', _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].COLOR_BLUE_LIGHT)
        ]);
        this.costsChart = this.initPlannedRealChart([
            this.initPlannedRealCharTypeDataset('labourCost', _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].COLOR_RED),
            this.initPlannedRealCharTypeDataset('materialCost', _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].COLOR_ORANGE),
            this.initPlannedRealCharTypeDataset('subcontractCost', _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].COLOR_YELLOW)
        ], true);
    };
    WorkPackageFormComponent.prototype.initCharTypeDataset = function (labelKey, backgroundColor, data) {
        if (data === void 0) { data = []; }
        return {
            label: "" + this.translateService.instant(this.getTranslateKey(labelKey)),
            backgroundColor: backgroundColor,
            data: data
        };
    };
    WorkPackageFormComponent.prototype.initPlannedRealCharTypeDataset = function (labelKey, backgroundColor) {
        return this.initCharTypeDataset(labelKey, backgroundColor, [0, 0]);
    };
    WorkPackageFormComponent.prototype.toNumber = function (str) {
        return str ? Number(str) : 0;
    };
    WorkPackageFormComponent.prototype.addPlannedRealChart = function (chart, planned, real, index) {
        if (index === void 0) { index = 0; }
        if (chart && chart.chartData && chart.chartData.datasets && chart.chartData.datasets[index]) {
            this.addPlannedRealDataSet(chart.chartData.datasets[index], this.toNumber(planned), this.toNumber(real));
        }
    };
    WorkPackageFormComponent.prototype.addPlannedRealDataSet = function (dataset, planned, real) {
        if (dataset && dataset.data && dataset.data.length > 1) {
            dataset.data[0] += planned;
            dataset.data[1] += real;
        }
    };
    WorkPackageFormComponent.prototype.initPlannedRealChart = function (datasets, stacked) {
        if (stacked === void 0) { stacked = false; }
        return {
            chartVisible: true,
            chartType: 'bar',
            chartData: {
                labels: [
                    "" + this.translateService.instant(this.getTranslateKey('planned')),
                    "" + this.translateService.instant(this.getTranslateKey('real'))
                ],
                datasets: datasets
            },
            chartOptions: {
                legend: { display: true },
                tooltips: {
                    bodyFontColor: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].COLOR_BACKGROUND_PRIMARY
                },
                scales: {
                    xAxes: [
                        {
                            ticks: { autoSkip: false },
                            stacked: stacked
                        }
                    ],
                    yAxes: [
                        {
                            ticks: { beginAtZero: true },
                            stacked: stacked
                        }
                    ]
                }
            }
        };
    };
    WorkPackageFormComponent.prototype.updateChart = function () {
        this.workOrderCount = 0;
        // init charts values
        this.chartDataset.map(function (d) {
            d.value = 0;
            return d;
        });
        this.chartLegend.map(function (d) {
            d.value = 0;
            return d;
        });
        this.calculateChart(this.workOrderTable);
        this.chartData.datasets[0].data = this.chartDataset.map(function (cd) { return cd.value; });
        this.chartData = __assign({}, this.chartData);
        this.refreshChart(this.workloadChartElement);
        this.refreshChart(this.durationChartElement);
        this.refreshChart(this.costsChartElement);
    };
    WorkPackageFormComponent.prototype.refreshChart = function (chart) {
        if (chart) {
            chart.refresh();
        }
    };
    WorkPackageFormComponent.prototype.calculateChart = function (woList) {
        var _this = this;
        if (woList === void 0) { woList = []; }
        woList.forEach(function (wo) {
            _this.workOrderCount++;
            var workOrderRow = wo.data;
            _this.chartDataset.forEach(function (cd) {
                if (cd.statusList.includes(workOrderRow.status)) {
                    cd.value++;
                }
            });
            _this.chartLegend.forEach(function (cd) {
                if (cd.statusList.includes(workOrderRow.status)) {
                    cd.value++;
                }
            });
            _this.addPlannedRealChart(_this.durationChart, workOrderRow.planDuration, workOrderRow.Duration);
            _this.addPlannedRealChart(_this.workloadChart, workOrderRow.planWorkload, workOrderRow.Workload);
            _this.addPlannedRealChart(_this.costsChart, workOrderRow.planLaborCost, workOrderRow.LaborCost, 0);
            _this.addPlannedRealChart(_this.costsChart, workOrderRow.planMaterialCost, workOrderRow.MaterialCost, 1);
            _this.addPlannedRealChart(_this.costsChart, workOrderRow.planSubcontractCost, workOrderRow.SubcontractingCost, 2);
            _this.calculateChart(wo.children);
        });
    };
    WorkPackageFormComponent.prototype.setChartOptions = function () {
        this.chartOptions = {
            legend: {
                display: false
            },
            tooltips: {
                bodyFontColor: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["AppConstants"].COLOR_BACKGROUND_PRIMARY
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            autoSkip: false
                        }
                    }
                ],
                yAxes: [
                    {
                        ticks: {
                            precision: 0
                        }
                    }
                ]
            }
        };
    };
    WorkPackageFormComponent.prototype.loadWorkPackage = function () {
        var _this = this;
        if (!!this.projectId) {
            this.wpFormService.findBidmProject(this.projectId).subscribe(function (result) {
                if (result === null) {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('notFound'));
                }
                else if (result.assetCode) {
                    _this.workDataDefect = {
                        workPackage: result,
                        equipementCode: result.assetCode
                    };
                    var componentContext = _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_32__["NumberUtils"].toString(result.projectNumber);
                    componentContext += _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_35__["StringUtils"].isNullOrEmpty(result.projectName) ? '' : " | " + result.projectName;
                    _this.displayComponentContext(componentContext, false);
                    _this.workPackage = result;
                    _this.loadUserWorkflow(_this.workPackage.statusState);
                    _this.getWorkShops();
                    _this.workPackageObject = _this.workPackage;
                    _this.procurementRequestsTableService
                        .findProcReqItemsAndStockQuantityIndicators(undefined, [
                        { projectId: _this.workPackageObject.projectId }
                    ])
                        .subscribe(function (proqReq) {
                        _this.procurementRequests = proqReq;
                    });
                    var bidoEquipmentDTOId = {
                        equipmentCode: result.assetCode
                    };
                    _this.wpFormService.findBidoEquipment(bidoEquipmentDTOId).subscribe(function (equipment) {
                        _this.bidoEquipment = equipment;
                        if (!!equipment && !!equipment.familyVariantCode) {
                            _this.familyCode = _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_29__["BidoFamilyVariantUtils"].getFamilyCodeFromFamilyVariantCode(equipment.familyVariantCode);
                            _this.variantCode = _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_29__["BidoFamilyVariantUtils"].getVariantCodeFromFamilyVariantCode(equipment.familyVariantCode);
                        }
                    });
                    _this.projectTargetedTat = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_35__["StringUtils"].isNullOrEmpty(result.projectTargetedTat)
                        ? ''
                        : result.projectTargetedTat + " " + _this.days;
                    _this.initStatusActions();
                    _this.loadWorkOrders();
                    _this.calculateDeltaDates();
                    _this.ctrlStock();
                    _this.ctrlConfiguration();
                    _this.isWorkPackageHasAssetName = !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_35__["StringUtils"].isNullOrEmpty(_this.workPackage.assetName);
                    _this.loadBsdeProject();
                }
            });
        }
        else {
            this.workPackage = {};
            this.workPackageObject = {};
            this.isWorkPackageHasAssetName = !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_35__["StringUtils"].isNullOrEmpty(this.workPackage.assetName);
        }
    };
    WorkPackageFormComponent.prototype.initStatusActions = function () {
        var _this = this;
        switch (this.workPackage.statusState) {
            case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SIMULATED:
                this.statusActionList = [
                    {
                        label: "" + this.translateService.instant(this.getTranslateKey('scheduleWorkPackage')),
                        command: function () { return _this.statusActionBtn(_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SCHEDULED); }
                    },
                    {
                        label: "" + this.translateService.instant(this.getTranslateKey('deleteWorkPackage')),
                        command: function () { return _this.statusActionBtn(WorkPackageFormComponent_1.DELETE_WORK_PACKAGE); }
                    }
                ];
                break;
            case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SCHEDULED:
                this.statusActionList = [
                    {
                        label: "" + this.translateService.instant(this.getTranslateKey('cancelScheduling')),
                        command: function () { return _this.statusActionBtn(_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SIMULATED); }
                    },
                    {
                        label: "" + this.translateService.instant(this.getTranslateKey('releaseWorkPackage')),
                        command: function () { return _this.statusActionBtn(_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_RELEASED); }
                    }
                ];
                break;
            case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_PERFORMED:
                this.statusActionList = [
                    {
                        label: "" + this.translateService.instant(this.getTranslateKey('closeWorkPackage')),
                        command: function () { return _this.statusActionBtn(_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_CLOSE); }
                    }
                ];
                break;
            case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_RELEASED:
                this.statusActionList = [
                    {
                        label: "" + this.translateService.instant(this.getTranslateKey('cancelRelease')),
                        command: function () { return _this.statusActionBtn(_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SCHEDULED); }
                    }
                ];
                break;
            default:
                this.statusActionList = [];
                break;
        }
    };
    WorkPackageFormComponent.prototype.loadWorkOrders = function () {
        var _this = this;
        this.isLoadingWorkOrderTable = true;
        this.wpFormService.getBidmWorkOrdersStructureByProject(this.projectId).subscribe(function (woList) {
            _this.workOrderTable = __spread(woList);
            _this.workOrderList = _this.flatDeep(woList);
            _this.updateChart();
            _this.checkWorkPackageStatus();
            _this.isLoadingWorkOrderTable = false;
            _this.defineCloseState();
        });
    };
    WorkPackageFormComponent.prototype.defineCloseState = function () {
        this.isFinalStep = false;
        this.showCloseButton = false;
        this.showReopenButton = false;
        var wp = this.workPackage;
        if (!wp.statusState) {
            return;
        }
        if (wp.statusState === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_CLOSE ||
            wp.statusState === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_PERFORMED) {
            this.isFinalStep = true;
            if (wp.statusState === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_CLOSE) {
                this.showReopenButton = true;
            }
        }
        else {
            // check status of work orders
            if (!!this.workOrderList) {
                var allWOAreClosedOrPostponed_1 = this.workOrderList.length > 0;
                // tslint:disable-next-line:no-any
                this.workOrderList.forEach(function (value) {
                    allWOAreClosedOrPostponed_1 =
                        allWOAreClosedOrPostponed_1 &&
                            (value.status === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_POSTPONED ||
                                value.status === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_CLOSE);
                });
                this.isFinalStep = allWOAreClosedOrPostponed_1;
                this.showCloseButton = allWOAreClosedOrPostponed_1;
            }
        }
    };
    WorkPackageFormComponent.prototype.flatDeep = function (tree) {
        var _this = this;
        return tree.reduce(function (acc, val) { return __spread(acc, (val ? [val.data] : []), (val.children ? _this.flatDeep(val.children) : [])); }, []);
    };
    WorkPackageFormComponent.prototype.openWorkOrders = function () {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_13__["ComponentConstants"].MAI_WORK_ORDERS_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Read
        };
        data.objectId = this.serializationService.serialize(this.workPackage);
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WorkPackageFormComponent.prototype.statusActionBtn = function (newStatus) {
        if (newStatus === WorkPackageFormComponent_1.DELETE_WORK_PACKAGE) {
            // #TODO ABT: Delete WP not implemented yet
        }
        else {
            this.workPackage.statusState = newStatus;
            this.editWorkPackage();
        }
    };
    WorkPackageFormComponent.prototype.editWorkPackage = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Write);
        this.componentOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Write;
    };
    WorkPackageFormComponent.prototype.cancelWorkPackage = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Read);
        this.componentOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Read;
        this.initDocumentTable();
        this.loadWorkPackage();
        this.clearErrors();
    };
    WorkPackageFormComponent.prototype.saveWorkPackage = function () {
        var _this = this;
        var saved = false;
        var missingFields = this.checkMandatoryFields(__assign({}, this.workPackage, { documentTableDataSource: this.documentTableDataSource.dataSrc }));
        if (missingFields.length > 0 || !this.workPackage.projectType) {
            this.messageService.showErrorMessage('global.missingFields');
        }
        else if (!!this.projectId) {
            this.showSaveSpinner = true;
            this.wpFormService
                .updateBidmProject(this.workPackage)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                _this.showSaveSpinner = false;
            }))
                .subscribe(function () {
                _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Read);
                _this.componentOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Read;
                _this.saveDocuments();
            });
            saved = true;
        }
        else {
            if (!this.workPackage.assetCode || !this.workPackage.projectStartDate) {
                this.messageService.showErrorMessage('global.missingFields');
                return;
            }
            this.workPackage.statusState = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_RELEASED;
            this.showSaveSpinner = true;
            this.wpFormService
                .createBidmProject(this.workPackage)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                _this.showSaveSpinner = false;
            }))
                .subscribe(function (bidmProjectId) {
                _this.documentList.forEach(function (doc) {
                    doc.projectId = bidmProjectId.projectId;
                    doc.statusState = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_RELEASED;
                });
                _this.documentAddedList.forEach(function (doc) {
                    doc.projectId = bidmProjectId.projectId;
                    doc.statusState = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_RELEASED;
                });
                _this.projectId = bidmProjectId.projectId;
                _this.componentData.objectId = _this.serializationService.serialize(_this.projectId);
                _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Read);
                _this.componentOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Read;
                _this.initToc();
                _this.saveDocuments();
                _this.loadWorkPackage();
            });
            saved = true;
        }
        return saved;
    };
    WorkPackageFormComponent.prototype.openEquipmentDialog = function (event) {
        if (!this.isReadOpenMode && !this.isWorkPackageHasAssetName) {
            this.showEquipmentDialog = true;
        }
    };
    WorkPackageFormComponent.prototype.openCustomerDialog = function (event) {
        if (!this.isReadOpenMode && !_shared_utils_dom_utils__WEBPACK_IMPORTED_MODULE_30__["DomUtils"].isTargetDisabled(event.target)) {
            var bidoCustomerDto = { customerCode: this.workPackage.bidoCustomerCode };
            this.customerFilter = bidoCustomerDto;
            this.showCustomerDialog = true;
        }
    };
    WorkPackageFormComponent.prototype.openSaleRequestDialog = function (event) {
        if (!this.isReadOpenMode && !_shared_utils_dom_utils__WEBPACK_IMPORTED_MODULE_30__["DomUtils"].isTargetDisabled(event.target)) {
            this.showSaleRequestDialog = true;
        }
    };
    WorkPackageFormComponent.prototype.openPurchaseRequestDialog = function (event) {
        if (!this.isReadOpenMode && !_shared_utils_dom_utils__WEBPACK_IMPORTED_MODULE_30__["DomUtils"].isTargetDisabled(event.target)) {
            this.showPurchaseRequestDialog = true;
        }
    };
    WorkPackageFormComponent.prototype.onSelectEquipment = function (equipment) {
        this.workPackage.assetCode = equipment.equipmentCode;
        this.workPackage.assetName = this.getEquipmentRepresentation(equipment);
    };
    WorkPackageFormComponent.prototype.getEquipmentRepresentation = function (equipment) {
        var toReturn = '';
        var VALUES_SEPARATOR = ' | ';
        var LABEL_VALUE_SEPARATOR = ' ';
        if (equipment.equipmentFunctionCode === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
            toReturn = equipment.familyVariantCode;
            if (!!equipment.sn) {
                toReturn += VALUES_SEPARATOR + 'MSN' + LABEL_VALUE_SEPARATOR + equipment.sn;
            }
            if (!!equipment.registration) {
                toReturn += VALUES_SEPARATOR + equipment.registration;
            }
        }
        else if (equipment.equipmentFunctionCode === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY) {
            toReturn = equipment.familyVariantCode;
            if (!!equipment.sn) {
                toReturn += VALUES_SEPARATOR + 'ESN' + LABEL_VALUE_SEPARATOR + equipment.sn;
            }
        }
        else {
            if (!!equipment.pnCode) {
                toReturn += 'PN' + LABEL_VALUE_SEPARATOR + equipment.pnCode;
                if (!!equipment.sn) {
                    toReturn += VALUES_SEPARATOR + 'SN' + LABEL_VALUE_SEPARATOR + equipment.sn;
                }
                else if (!!equipment.sn) {
                    toReturn += 'SN' + LABEL_VALUE_SEPARATOR + equipment.sn;
                }
                else {
                    toReturn += equipment.equipmentCode;
                }
            }
        }
        return toReturn;
    };
    WorkPackageFormComponent.prototype.onSelectCustomer = function (equipment) {
        this.workPackage.bidoCustomerCode = equipment.customerCode;
    };
    WorkPackageFormComponent.prototype.onSelectSaleRequest = function (saleRequest) {
        this.workPackage.salesRequestCode = saleRequest.srCode;
    };
    WorkPackageFormComponent.prototype.setSelectedPurchaseRequest = function (purchaseRequest) {
        this.workPackage.purchaseRequestCode = purchaseRequest.prCode;
    };
    WorkPackageFormComponent.prototype.calculateDeltaDates = function () {
        var refDate = this.workPackage.projectEndDate ? this.workPackage.projectEndDate : new Date();
        var status = 'ok';
        if (!this.workPackage.projectDueDate) {
            status = 'default';
        }
        else {
            var dueDays = Math.ceil((this.workPackage.projectDueDate.valueOf() - refDate.valueOf()) / WorkPackageFormComponent_1.ONE_DAY_IN_MS);
            this.dueDateDelta = dueDays.toString() + " " + this.days;
            if (refDate > this.workPackage.projectDueDate) {
                status = 'error';
            }
            else if (dueDays < WorkPackageFormComponent_1.DUE_DATE_WARNING_DAYS) {
                status = 'warning';
            }
        }
        this.dueDateDeltaColor = status + '-field';
        // TODO: Calculate TAT Delta
        // const targetedTat = this.projectTargetedTat ? Number(this.projectTargetedTat) : undefined;
        // const projectTat = 0;
        // if (targetedTat && projectTat) {
        //   const dueTat = Math.ceil(targetedTat - projectTat);
        //   this.tatDelta = `${dueTat.toString()} ${this.days}`;
        // }
    };
    WorkPackageFormComponent.prototype.ctrlStock = function () {
        var _this = this;
        this.isLoadingStockControlConf = true;
        var projectIdDto = {
            projectId: this.projectId
        };
        var input = {
            projectId: projectIdDto,
            mvtStatusExcluded: [
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY,
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].MM_MVT_STATUS_CANCELED_KEY,
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].MM_MVT_STATUS_CLOSED_KEY
            ],
            date: moment__WEBPACK_IMPORTED_MODULE_2__().toDate()
        };
        this.wpFormService.controlStock(input).subscribe(function (stockMvtList) {
            _this.stockControlConf = { ok: 0, warning: 0, nok: 0 };
            _this.checkStock(stockMvtList);
            _this.isLoadingStockControlConf = false;
        });
    };
    WorkPackageFormComponent.prototype.checkStock = function (stockList) {
        var _this = this;
        stockList.forEach(function (stock) {
            _this.countStockConfig(stock);
        });
    };
    WorkPackageFormComponent.prototype.countStockConfig = function (stock) {
        this.stockControlConf.ok = this.stockControlConf.ok || 0;
        this.stockControlConf.warning = this.stockControlConf.warning || 0;
        this.stockControlConf.nok = this.stockControlConf.nok || 0;
        this.stockControlConf.ok += stock.status === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_14__["ControlConfigConstants"].ICON_GREEN_LIGHT_CODE ? 1 : 0;
        this.stockControlConf.warning += stock.status === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_14__["ControlConfigConstants"].ICON_YELLOW_LIGHT_CODE ? 1 : 0;
        this.stockControlConf.nok += stock.status === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_14__["ControlConfigConstants"].ICON_RED_LIGHT_CODE ? 1 : 0;
    };
    WorkPackageFormComponent.prototype.isConfStockOk = function () {
        return ((this.stockControlConf.nok === undefined ? 0 : this.stockControlConf.nok) === 0 &&
            (this.stockControlConf.warning === undefined ? 0 : this.stockControlConf.warning) === 0 &&
            (this.stockControlConf.ok === undefined ? 0 : this.stockControlConf.ok) > 0);
    };
    WorkPackageFormComponent.prototype.isConStockfWarning = function () {
        return ((this.stockControlConf.nok === undefined ? 0 : this.stockControlConf.nok) === 0 &&
            (this.stockControlConf.warning === undefined ? 0 : this.stockControlConf.warning) > 0);
    };
    WorkPackageFormComponent.prototype.isConfStockNok = function () {
        return (this.stockControlConf.nok === undefined ? 0 : this.stockControlConf.nok) > 0;
    };
    WorkPackageFormComponent.prototype.ctrlConfiguration = function () {
        var _this = this;
        this.isLoadingOutgoingConf = true;
        var input = {
            checkConfiguration: true,
            checkFl: true,
            checkLogbook: true,
            checkMel: true,
            checkPotential: true,
            checkReferential: true,
            checkStructure: true,
            equipmentCode: this.workPackage.assetCode || '',
            projectId: this.workPackage.projectId,
            withAllCounters: true,
            withFunctionalLocations: true,
            withMelFlag: true
        };
        this.wpFormService.controlConfiguration(input).subscribe(function (result) {
            _this.outgoinConfiguration = { ok: 0, warning: 0, nok: 0 };
            _this.checkConfiguration(result);
            _this.isLoadingOutgoingConf = false;
        });
    };
    WorkPackageFormComponent.prototype.checkConfiguration = function (asset) {
        var _this = this;
        var e_1, _a;
        var checkList = [
            asset.checkConfigurationCause,
            asset.checkCoreCause,
            asset.checkFlCause,
            asset.checkMelCause,
            asset.checkReferentialCause,
            asset.checkStructureCause,
            asset.checkConfigurationCauseAlt,
            asset.checkCoreCauseAlt,
            asset.checkFlCauseAlt,
            asset.checkMelCauseAlt,
            asset.checkReferentialCauseAlt,
            asset.checkStructureCauseAlt,
            asset.checkConfigurationResult,
            asset.checkCoreResult,
            asset.checkFlResult,
            asset.checkMelResult,
            asset.checkReferentialResult,
            asset.checkStructureResult,
            asset.checkLogbookCause,
            asset.checkLogbookCauseAlt,
            asset.checkLogbookResult,
            asset.checkPotentialCause,
            asset.checkPotentialCauseAlt,
            asset.checkPotentialResult
        ];
        try {
            for (var checkList_1 = __values(checkList), checkList_1_1 = checkList_1.next(); !checkList_1_1.done; checkList_1_1 = checkList_1.next()) {
                var checkElement = checkList_1_1.value;
                this.countConfiguration(checkElement);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (checkList_1_1 && !checkList_1_1.done && (_a = checkList_1.return)) _a.call(checkList_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (asset.children) {
            asset.children.forEach(function (childAsset) { return _this.checkConfiguration(childAsset); });
        }
    };
    WorkPackageFormComponent.prototype.countConfiguration = function (checkPart) {
        this.outgoinConfiguration.ok = this.outgoinConfiguration.ok || 0;
        this.outgoinConfiguration.warning = this.outgoinConfiguration.warning || 0;
        this.outgoinConfiguration.nok = this.outgoinConfiguration.nok || 0;
        this.outgoinConfiguration.ok += checkPart === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_14__["ControlConfigConstants"].ICON_GREEN ? 1 : 0;
        this.outgoinConfiguration.warning += checkPart === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_14__["ControlConfigConstants"].ICON_YELLOW ? 1 : 0;
        this.outgoinConfiguration.nok += checkPart === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_14__["ControlConfigConstants"].ICON_RED ? 1 : 0;
    };
    WorkPackageFormComponent.prototype.callAssetReview = function () {
        if (!!this.workPackage.assetCode) {
            var objectId = {
                equipmentCodeList: [this.workPackage.assetCode]
            };
            var data = {
                id: this.tabService.generateId(),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Read,
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_13__["ComponentConstants"].MAI_ASSET_REVIEW_FORM,
                objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    WorkPackageFormComponent.prototype.openAppliedConfigurationManagement = function () {
        if (this.workPackage.assetCode) {
            var objectId = {
                equipmentCodeList: [this.workPackage.assetCode],
                workPackage: this.workPackage.projectId
            };
            var data = {
                id: this.tabService.generateId(),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Read,
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_13__["ComponentConstants"].MAI_CONFIGURATION_CONTROL,
                objectId: this.serializationService.serialize(objectId)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
        else {
            // TODO
        }
    };
    WorkPackageFormComponent.prototype.callGoodsMovement = function () {
        var goodsMovementInput = {
            workPackageId: this.projectId
        };
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_13__["ComponentConstants"].LOG_GOODS_MOVEMENT_WORK_PACKAGE_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Read,
            objectId: this.serializationService.serialize(goodsMovementInput)
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WorkPackageFormComponent.prototype.callMaterialAvailability = function () {
        var goodsMovementInput = {
            workPackageId: this.projectId
        };
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_13__["ComponentConstants"].LOG_MATERIAL_AVAILABILITY_WORK_PACKAGE_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Read,
            objectId: this.serializationService.serialize(goodsMovementInput)
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WorkPackageFormComponent.prototype.isConfOk = function () {
        return ((this.outgoinConfiguration.nok === undefined ? 0 : this.outgoinConfiguration.nok) === 0 &&
            (this.outgoinConfiguration.warning === undefined ? 0 : this.outgoinConfiguration.warning) === 0 &&
            (this.outgoinConfiguration.ok === undefined ? 0 : this.outgoinConfiguration.ok) > 0);
    };
    WorkPackageFormComponent.prototype.isConfWarning = function () {
        return ((this.outgoinConfiguration.nok === undefined ? 0 : this.outgoinConfiguration.nok) === 0 &&
            (this.outgoinConfiguration.warning === undefined ? 0 : this.outgoinConfiguration.warning) > 0);
    };
    WorkPackageFormComponent.prototype.isConfNok = function () {
        return (this.outgoinConfiguration.nok === undefined ? 0 : this.outgoinConfiguration.nok) > 0;
    };
    WorkPackageFormComponent.prototype.docDownloaded = function (overlaypanel) {
        overlaypanel.visible = false;
    };
    WorkPackageFormComponent.prototype.openAsset = function () {
        if (this.workPackage.assetName) {
            this.pageService.openAsset(this.workPackage.assetCode, this.workPackage.equipmentFunction);
        }
    };
    /**
     * Updating status of Work Package
     */
    WorkPackageFormComponent.prototype.checkWorkPackageStatus = function () {
        var _this = this;
        if (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_LINE_MAINTENANCE !== this.workPackage.statusState) {
            var bidmProjectDTOId = {
                projectId: this.workPackage.projectId
            };
            this.wpFormService
                .findBidmProjectWithLinkedObjects(bidmProjectDTOId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (bidmProject) { return _this.wpFormService.calculateBidmProjectStatus(bidmProject); }))
                .subscribe(function (projectStatus) {
                _this.workPackage.statusState =
                    projectStatus !== _this.workPackage.statusState ? projectStatus : _this.workPackage.statusState;
            });
        }
    };
    /**************************************************************************
     * Documents tab
     *************************************************************************/
    WorkPackageFormComponent.prototype.initDocumentTableDataSource = function () {
        this.documentTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'docName',
                    translateKey: this.getTranslateKey('docName'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__["ColumnAlignment"].LEFT,
                    width: '30%'
                },
                {
                    field: 'docType',
                    translateKey: this.getTranslateKey('docType'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__["ColumnAlignment"].LEFT,
                    width: '30%'
                },
                {
                    field: 'docExtension',
                    translateKey: this.getTranslateKey('docExtension'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__["ColumnAlignment"].LEFT,
                    width: '15%'
                },
                {
                    field: 'docSize',
                    translateKey: this.getTranslateKey('docSize'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__["ColumnAlignment"].LEFT,
                    width: '15%'
                },
                {
                    field: 'docPublicationDate',
                    translateKey: this.getTranslateKey('docPublicationDate'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_9__["ColumnAlignment"].LEFT,
                    width: '10%'
                }
            ],
            data: []
        });
    };
    WorkPackageFormComponent.prototype.initDocumentTable = function () {
        var _this = this;
        var projectId = {
            projectId: this.projectId
        };
        this.wpFormService.findBidmDocumentsByProject(projectId).subscribe(function (documentList) {
            _this.documentList = documentList;
            _this.documentTableDataSource.setData(_this.documentList.map(function (document) { return _this.createDocumentRow(document); }));
        });
    };
    WorkPackageFormComponent.prototype.loadDocumentTypeList = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_15__["GenericPropertyConstants"].DOC_EVENT_CATEGORY_MAP).subscribe(function (results) {
            _this.documentTypeList = !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_33__["SelectItemUtils"].fromLabelValues(results) : [];
        });
    };
    WorkPackageFormComponent.prototype.saveDocuments = function () {
        var _this = this;
        var observables = this.documentAddedList.map(function (document) { return _this.wpFormService.createBidmDocument(document); });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(observables).subscribe(function (bidmObjectId) {
            _this.documentAddedList = [];
            _this.initDocumentTable();
            _this.loadWorkPackage();
        });
    };
    WorkPackageFormComponent.prototype.deleteDocuments = function () {
        var _this = this;
        this.documentRemovedList = [];
        var partialMessageKey = this.documentTableDataSource.dataSelectionCount > 1
            ? 'confirmDeleteSelectedDocuments'
            : 'confirmDeleteSelectedDocument';
        this.confirmationService.confirmDelete({
            messageKey: 'global.' + partialMessageKey,
            accept: function () {
                _this.documentTableDataSource.dataSelection.forEach(function (selectedDocumentRow) {
                    var documentsAddedWithoutSelection = _this.documentAddedList.filter(function (document) { return !_shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_28__["BidmDocumentUtils"].areSameDocument(document, selectedDocumentRow._obj); });
                    // list of added objects contains the selection
                    if (_this.documentAddedList.length !== documentsAddedWithoutSelection.length) {
                        // Remove selection from added objects
                        _this.documentAddedList = documentsAddedWithoutSelection;
                    }
                    else {
                        var documentsUpdatedWithoutSelection = _this.documentUpdatedList.filter(function (document) { return !_shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_28__["BidmDocumentUtils"].areSameDocument(document, selectedDocumentRow._obj); });
                        // list of updated objects contains the selection
                        if (_this.documentUpdatedList.length !== documentsUpdatedWithoutSelection.length) {
                            // Remove selection from added objects
                            _this.documentUpdatedList = documentsUpdatedWithoutSelection;
                        }
                        _this.documentRemovedList = __spread(_this.documentRemovedList, [selectedDocumentRow._obj]);
                    }
                });
                _this.documentList = _this.documentList.filter(function (document) {
                    return !_this.documentTableDataSource.dataSelection.some(function (selectedRow) {
                        return _shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_28__["BidmDocumentUtils"].areSameDocument(document, selectedRow._obj);
                    });
                });
                _this.documentTableDataSource.setData(_this.documentTableDataSource.dataSrc.filter(function (documentRow) {
                    return !_this.documentTableDataSource.dataSelection.some(function (selectedDocumentRow) {
                        return _shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_28__["BidmDocumentUtils"].areSameDocument(documentRow._obj, selectedDocumentRow._obj);
                    });
                }));
                var observables = _this.documentRemovedList
                    .filter(function (doc) { return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_35__["StringUtils"].isNullOrEmpty(doc.documentId); })
                    .map(function (document) {
                    var bidmDocumentDTOId = {
                        documentId: document.documentId
                    };
                    return _this.wpFormService.removeBidmDocument(bidmDocumentDTOId);
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(observables).subscribe(function () {
                    _this.documentRemovedList = [];
                });
                _this.documentTableDataSource.dataSelection = [];
            }
        });
    };
    WorkPackageFormComponent.prototype.downloadFiles = function () {
        this.documentTableDataSource.dataSelection.forEach(function (documentRow) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_31__["FileUtils"].downloadFile(documentRow._obj.documentContent, documentRow._obj.documentName);
        });
    };
    WorkPackageFormComponent.prototype.editDocument = function () {
        if (this.documentTableDataSource.dataSelectionCount === 1) {
            this.currentDocument = __assign({}, this.documentTableDataSource.dataSelection[0]._obj);
            this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Write;
            this.showDocumentDialog = true;
        }
    };
    WorkPackageFormComponent.prototype.openDocument = function () {
        if (this.documentTableDataSource.dataSelection.length === 1) {
            this.currentDocument = this.documentTableDataSource.dataSelection[0]._obj;
            this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Read;
            this.showDocumentDialog = true;
        }
    };
    WorkPackageFormComponent.prototype.uploadDocument = function (event, fileUploader) {
        var _this = this;
        if (!!event.files) {
            var file_1 = event.files[0];
            // Check if the file already exists
            var fileExists = this.documentList.some(function (document) { return document.documentName === file_1.name; });
            if (fileExists) {
                this.messageService.showWarningMessage('global.warningOnFileExists');
            }
            else {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_31__["FileUtils"].getFileContentAsBase64(file_1, function (fileContent) {
                    if (!!fileContent) {
                        var document_1 = {
                            documentContent: fileContent,
                            projectId: _this.workPackage.projectId,
                            documentName: file_1.name,
                            documentCode: file_1.name,
                            documentType: _shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_28__["BidmDocumentUtils"].typeFile(file_1.name),
                            statusState: _this.workPackage.statusState,
                            statusDate: moment__WEBPACK_IMPORTED_MODULE_2__().toDate(),
                            documentPublicationDate: moment__WEBPACK_IMPORTED_MODULE_2__().toDate()
                        };
                        _this.documentList = __spread(_this.documentList, [document_1]);
                        _this.documentAddedList = __spread(_this.documentAddedList, [document_1]);
                        _this.documentTableDataSource.addData([_this.createDocumentRow(document_1)]);
                    }
                });
            }
            fileUploader.clear();
        }
    };
    WorkPackageFormComponent.prototype.createDocumentRow = function (document) {
        var selectedDocumentType = this.documentTypeList.find(function (documentType) { return !!document.documentCategory && documentType.value === document.documentCategory; });
        var documentRow = {
            docExtension: _shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_28__["BidmDocumentUtils"].formatDocExtension(document),
            docName: document.documentName,
            docPublicationDate: this.dateService.momentToString(moment__WEBPACK_IMPORTED_MODULE_2__(Number(document.documentPublicationDate))),
            docSize: _shared_utils_bidm_document_utils__WEBPACK_IMPORTED_MODULE_28__["BidmDocumentUtils"].formatDocSize(document),
            docType: !!selectedDocumentType ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_35__["StringUtils"].orEmpty(selectedDocumentType.label) : '',
            isChecked: false,
            _obj: document
        };
        return documentRow;
    };
    WorkPackageFormComponent.prototype.importTask = function () {
        this.showImportTaskPopup = true;
    };
    WorkPackageFormComponent.prototype.lastUpdateDetails = function () {
        this.showLastUpdatePopup = true;
    };
    WorkPackageFormComponent.prototype.refreshOnImport = function (importTaskReportMessage) {
        if (importTaskReportMessage) {
            this.importTaskReportMessage = importTaskReportMessage;
            this.showImportTaskReport = true;
            this.refresh();
        }
    };
    WorkPackageFormComponent.prototype.showStatus = function () {
        var _this = this;
        var overlayRef = this._overlayService.openWithPositionCenter({
            content: _status_work_package_status_component__WEBPACK_IMPORTED_MODULE_41__["WorkPackageStatusComponent"],
            data: this.workPackage
        });
        overlayRef.afterClosed$.subscribe({
            next: function (event) {
                if (event.data) {
                    var currentState_1 = _this.workPackage.statusState;
                    if (currentState_1 === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_CLOSE &&
                        event.data === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_PERFORMED) {
                        _this.wpFormService.checkAcrsEventForBidmProject(_this.workPackage).subscribe(function (result) {
                            if (result) {
                                _this.confirmationService.confirm({
                                    messageKey: _this.getTranslateKey('acrsEventToDelete'),
                                    accept: function () {
                                        _this.updateWorkPackageStatus(currentState_1, event.data);
                                    }
                                });
                            }
                            else {
                                _this.updateWorkPackageStatus(currentState_1, event.data);
                            }
                        });
                    }
                    else {
                        _this.updateWorkPackageStatus(currentState_1, event.data);
                    }
                }
            }
        });
    };
    WorkPackageFormComponent.prototype.updateWorkPackageStatus = function (currentStatus, newStatus) {
        this.workPackage.statusState = newStatus;
        var saved = this.saveWorkPackage();
        if (!saved) {
            // Revert status change if save not launched
            this.workPackage.statusState = currentStatus;
        }
    };
    WorkPackageFormComponent.prototype.onEditWorkOrder = function (workOrderEditObject) {
        this.displayWorkOrderEdit = workOrderEditObject.display;
        this.workOrderSelected = workOrderEditObject.workOrderSelected;
        this.workOrderListWOEdition = this.workOrderList;
        this.workPackageWOEdition = this.workPackage;
    };
    WorkPackageFormComponent.prototype.onUpdateSchedulingEdit = function (updateSchedulingObject) {
        this.displayWorkOrderSchedulingEdit = updateSchedulingObject.display;
        this.selectedWorkOrders = updateSchedulingObject.selectedWorkOrders;
    };
    WorkPackageFormComponent.prototype.onAddWorkOrder = function (isCreated) {
        var _this = this;
        if (isCreated) {
            this.wpFormService.calculateBidmProjectStatus(this.workPackage).subscribe(function (statusState) {
                if (_this.workPackage.statusState !== statusState) {
                    _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Write);
                    _this.componentOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Write;
                    _this.workPackage.statusState = statusState;
                }
            });
        }
        this.workPackageObject = __assign({}, this.workPackage);
    };
    WorkPackageFormComponent.prototype.onWorkOrderSchedulingEdited = function (woScheduleInfo) {
        var _this = this;
        var isAssignedToUpdate = woScheduleInfo.assignedTo !== undefined && woScheduleInfo.assignedTo.length > 0;
        var isStartDateToUpdate = woScheduleInfo.woScheduledStartDate !== undefined;
        var isEndDateToUpdate = woScheduleInfo.woScheduledEndDate !== undefined;
        if (isAssignedToUpdate || isStartDateToUpdate || isEndDateToUpdate) {
            var woList = this.selectedWorkOrders.map(function (node) { return node.data; });
            var bidmWorkOrderList = woList.map(function (wo) {
                var bidmWorkOrder = wo.bidmWorkOrder;
                bidmWorkOrder.woAssignedTo = isAssignedToUpdate ? woScheduleInfo.assignedTo : bidmWorkOrder.woAssignedTo;
                bidmWorkOrder.woScheduledStartDate = isStartDateToUpdate
                    ? woScheduleInfo.woScheduledStartDate
                    : bidmWorkOrder.woScheduledStartDate;
                bidmWorkOrder.woScheduledEndDate = isEndDateToUpdate
                    ? woScheduleInfo.woScheduledEndDate
                    : bidmWorkOrder.woScheduledEndDate;
                return bidmWorkOrder;
            });
            this.wpFormService.updateBidmWorkOrders(bidmWorkOrderList).subscribe(function (result) {
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnUpdateScheduleWO'));
                _this.workPackageObject = __assign({}, _this.workPackage);
            }, function (error) {
                if (!!error.error && !!error.error.errorDesc && error.error.errorDesc.length > 0) {
                    _this.messageService.showErrorMessage(error.error.errorDesc);
                }
                else {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnUpdateScheduleWO'));
                }
                _this.workPackageObject = __assign({}, _this.workPackage);
            });
        }
    };
    WorkPackageFormComponent.prototype.searchCustomers = function () {
        var _this = this;
        this.searchObject = {};
        this.searchObject.isOwner = true;
        this.dialogSearchCustomerService.findBidoCustomersBySearchCriteria(this.searchObject).subscribe(function (results) {
            _this.allCustomers = results;
        });
    };
    WorkPackageFormComponent.prototype.onTransferOfWO = function () {
        this.refresh();
    };
    WorkPackageFormComponent.prototype.initCostSettingDisplay = function () {
        var _this = this;
        this.propertiesService
            .getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_15__["GenericPropertyConstants"].AEROWEBB_CONFIGURATION_MAP)
            .subscribe(function (awConfiguration) {
            _this.isCostSettingEnabled = _shared_utils_settings_utils__WEBPACK_IMPORTED_MODULE_34__["SettingsUtils"].isPropertyEnabled(awConfiguration, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_11__["AWPropertiesConstants"].DISPLAY_COST);
        });
    };
    /**********************************
     * Component Cockpit Tab handling
     **********************************/
    WorkPackageFormComponent.prototype.loadBsdeProject = function () {
        var _this = this;
        if (!!this.workPackage.projectNumber) {
            this.showCockpitTab = false;
            this.wpFormService.getBsdeProjectData("" + this.workPackage.projectNumber).subscribe(function (res) {
                if (!!res) {
                    _this.cockpitComponentData = {
                        id: _this.tabService.generateId(),
                        componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_13__["ComponentConstants"].MAI_COMPONENT_COCKPIT_OPERATION_FORM,
                        openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_16__["ComponentOpenMode"].Read,
                        isFromWorkPackage: true
                    };
                    if (!!res) {
                        _this.cockpitComponentData.objectId = _this.serializationService.serialize(res.projectNumber);
                    }
                    _this.isBsdeProjectExist = true;
                    _this.bsdeProject = res;
                    _this.showCockpitTab = true;
                }
            }, function (error) {
                _this.isBsdeProjectExist = false;
                _this.showCockpitTab = true;
            });
        }
    };
    /**************************************
     * Create Component Cockpit Project
     **************************************/
    WorkPackageFormComponent.prototype.createComponentCockpit = function () {
        var _this = this;
        if (this.validateProjectCreation()) {
            // Check whether Project already exist or not with same PN and SN
            this.wpFormService.getBsdeProjectListByPnAndSn(this.bidoEquipment).subscribe(function (res) {
                if (!!res && res.length > 0) {
                    var isAnyProjectNotClosed = res.find(function (project) { return project.statusState !== _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_12__["BidoFunctionTypeConstants"].UC_IWB_PROJECT_CLOSING; });
                    if (!!isAnyProjectNotClosed) {
                        var errMsg = _this.translateService.instant(_this.getTranslateKey('componentCockpit')) + " " + isAnyProjectNotClosed.projectNumber + " " + _this.translateService.instant(_this.getTranslateKey('alreadyExistonItem')) + " " + _this.getKey(_this.bidoEquipment) + " ";
                        _this.messageService.showErrorMessage(errMsg);
                    }
                    else {
                        _this.createProject();
                    }
                }
                else {
                    _this.createProject();
                }
            });
        }
    };
    WorkPackageFormComponent.prototype.createProject = function () {
        var _this = this;
        var input = {
            bidoEquipmentDTO: this.bidoEquipment,
            bidmProjectDTO: this.workPackage
        };
        this.bsdeProjectLoading = true;
        this.wpFormService
            .createWorkbenchInspection(input)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            _this.bsdeProjectLoading = false;
        }))
            .subscribe(function (resp) {
            if (!!resp) {
                _this.loadBsdeProject();
            }
        });
    };
    /**************************************
     * Validate project creation
     *************************************/
    WorkPackageFormComponent.prototype.validateProjectCreation = function () {
        // TODO: add more checks
        if (!this.bidoEquipment.pnCode) {
            this.messageService.showErrorMessage(this.getTranslateKey('pnRequired'));
            return false;
        }
        return true;
    };
    /**********************************************
     * Handling the visibility of CC Tab
     **********************************************/
    WorkPackageFormComponent.prototype.setComponentCockpitTabVisibility = function () {
        var _this = this;
        this.wpFormService
            .isBuildingBlockInstalled(_shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_12__["BidoFunctionTypeConstants"].MODULE_IWB)
            .subscribe(function (isBuildingBlockInstalled) {
            _this.isComponentCockpitModuleInstalled = isBuildingBlockInstalled;
        });
    };
    /**
     * To get the list of workshops on selection of MRO center
     */
    WorkPackageFormComponent.prototype.getWorkShops = function () {
        var _this = this;
        this.dialogWorkOrderEditService.loadWarehouseList(this.workPackage.bireRepairCenterCode).subscribe(function (result) {
            _this.workShopList = result.map(function (workCenter) {
                return {
                    label: workCenter.label,
                    value: Number(workCenter.value)
                };
            });
        });
    };
    WorkPackageFormComponent.prototype.disableDefectsTableButtonsInClosedStatus = function () {
        return (!!this.workDataDefect &&
            !!this.workDataDefect.workPackage &&
            this.workDataDefect.workPackage.statusState === this.awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE);
    };
    WorkPackageFormComponent.prototype.getKey = function (input) {
        return input.chapter + "-" + input.section + "-" + input.subject + "-" + input.sheet + "-" + input.marks;
    };
    var WorkPackageFormComponent_1;
    WorkPackageFormComponent.ONE_DAY_IN_MS = 86400000;
    WorkPackageFormComponent.DUE_DATE_WARNING_DAYS = 7;
    WorkPackageFormComponent.DELETE_WORK_PACKAGE = 'delete';
    WorkPackageFormComponent.STATUS_ANCHOR_ID = 'statusAnchor';
    WorkPackageFormComponent.MAIN_ANCHOR_ID = 'mainAnchor';
    WorkPackageFormComponent.MATERIAL_AVAILABILITY_ANCHOR_ID = 'materialAvailabilityAnchor';
    WorkPackageFormComponent.TIMELINE_AND_COSTS_ANCHOR_ID = 'timelineAndCostsAnchor';
    WorkPackageFormComponent.OUTGOING_CONFIGURAION_ANCHOR_ID = 'outgoingConfigurationAnchor';
    WorkPackageFormComponent.PROGRESS_ANCHOR_ID = 'workOrderProgressAnchor';
    WorkPackageFormComponent.GENERAL_ANCHOR_ID = 'generalAnchor';
    WorkPackageFormComponent.DEFECTS_ANCHOR_ID = 'defectsAnchor';
    WorkPackageFormComponent.DOCUMENTS_ANCHOR_ID = 'documentAnchor';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(WorkPackageFormComponent_1.STATUS_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WorkPackageFormComponent.prototype, "statusAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(WorkPackageFormComponent_1.MAIN_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WorkPackageFormComponent.prototype, "mainAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(WorkPackageFormComponent_1.MATERIAL_AVAILABILITY_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WorkPackageFormComponent.prototype, "materialAvailabilityAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(WorkPackageFormComponent_1.OUTGOING_CONFIGURAION_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WorkPackageFormComponent.prototype, "outgoingConfigurationAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(WorkPackageFormComponent_1.PROGRESS_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WorkPackageFormComponent.prototype, "workOrderProgressAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(WorkPackageFormComponent_1.TIMELINE_AND_COSTS_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WorkPackageFormComponent.prototype, "timelineAndCostsAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(WorkPackageFormComponent_1.GENERAL_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WorkPackageFormComponent.prototype, "generalAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(WorkPackageFormComponent_1.DEFECTS_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WorkPackageFormComponent.prototype, "defectsAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(WorkPackageFormComponent_1.DOCUMENTS_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WorkPackageFormComponent.prototype, "documentAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('workloadChartElement'),
        __metadata("design:type", primeng_chart__WEBPACK_IMPORTED_MODULE_3__["UIChart"])
    ], WorkPackageFormComponent.prototype, "workloadChartElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('durationChartElement'),
        __metadata("design:type", primeng_chart__WEBPACK_IMPORTED_MODULE_3__["UIChart"])
    ], WorkPackageFormComponent.prototype, "durationChartElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('costsChartElement'),
        __metadata("design:type", primeng_chart__WEBPACK_IMPORTED_MODULE_3__["UIChart"])
    ], WorkPackageFormComponent.prototype, "costsChartElement", void 0);
    WorkPackageFormComponent = WorkPackageFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-work-package-form',
            template: __webpack_require__(/*! ./work-package-form.component.html */ "./src/app/main/maintenance/work-package/form/work-package-form.component.html"),
            styles: [__webpack_require__(/*! ./work-package-form.component.scss */ "./src/app/main/maintenance/work-package/form/work-package-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_19__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_20__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_21__["MessageService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_6__["PageTocService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_24__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_26__["TabService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_23__["PropertiesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_25__["SessionService"],
            _work_package_form_service__WEBPACK_IMPORTED_MODULE_42__["WorkPackageFormService"],
            _work_package_service__WEBPACK_IMPORTED_MODULE_39__["WorkPackageService"],
            _shared_services_page_service__WEBPACK_IMPORTED_MODULE_22__["PageService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_17__["ConfirmationService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_18__["DateService"],
            _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_37__["OverlayService"],
            _shared_components_dialog_search_customer_dialog_search_customer_service__WEBPACK_IMPORTED_MODULE_7__["DialogSearchCustomerService"],
            _procurement_request_procurement_requests_table_service__WEBPACK_IMPORTED_MODULE_38__["ProcurementRequestsTableService"],
            _popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_40__["DialogWorkOrderEditService"]])
    ], WorkPackageFormComponent);
    return WorkPackageFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_27__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-package/work-package.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/work-package.module.ts ***!
  \**********************************************************************/
/*! exports provided: WorkPackageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPackageModule", function() { return WorkPackageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/treetable.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_treetable__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ "./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts");
/* harmony import */ var _shared_components_defect_list_defect_list_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/defect-list/defect-list.module */ "./src/app/shared/components/defect-list/defect-list.module.ts");
/* harmony import */ var _shared_components_dialog_bido_customer_dialog_bido_customer_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/dialog-bido-customer/dialog-bido-customer.service */ "./src/app/shared/components/dialog-bido-customer/dialog-bido-customer.service.ts");
/* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/components/dialog-search-customer/dialog-search-customer.module */ "./src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts");
/* harmony import */ var _shared_components_dialog_search_defect_events_dialog_search_defect_events_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/components/dialog-search-defect-events/dialog-search-defect-events.module */ "./src/app/shared/components/dialog-search-defect-events/dialog-search-defect-events.module.ts");
/* harmony import */ var _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/components/dialog-search-equipment/dialog-search-equipment.module */ "./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.module.ts");
/* harmony import */ var _shared_components_dialog_search_event_dialog_search_event_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/components/dialog-search-event/dialog-search-event.module */ "./src/app/shared/components/dialog-search-event/dialog-search-event.module.ts");
/* harmony import */ var _shared_components_dialog_search_evolution_dialog_search_evolution_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/components/dialog-search-evolution/dialog-search-evolution.module */ "./src/app/shared/components/dialog-search-evolution/dialog-search-evolution.module.ts");
/* harmony import */ var _shared_components_dialog_search_operation_dialog_search_operation_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/components/dialog-search-operation/dialog-search-operation.module */ "./src/app/shared/components/dialog-search-operation/dialog-search-operation.module.ts");
/* harmony import */ var _shared_components_dialog_search_purchase_request_dialog_search_purchase_request_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/components/dialog-search-purchase-request/dialog-search-purchase-request.module */ "./src/app/shared/components/dialog-search-purchase-request/dialog-search-purchase-request.module.ts");
/* harmony import */ var _shared_components_dialog_search_purchase_request_dialog_search_purchase_request_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../shared/components/dialog-search-purchase-request/dialog-search-purchase-request.service */ "./src/app/shared/components/dialog-search-purchase-request/dialog-search-purchase-request.service.ts");
/* harmony import */ var _shared_components_dialog_search_sales_request_dialog_search_sales_request_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../shared/components/dialog-search-sales-request/dialog-search-sales-request.module */ "./src/app/shared/components/dialog-search-sales-request/dialog-search-sales-request.module.ts");
/* harmony import */ var _shared_components_dialog_search_sales_request_dialog_search_sales_request_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../shared/components/dialog-search-sales-request/dialog-search-sales-request.service */ "./src/app/shared/components/dialog-search-sales-request/dialog-search-sales-request.service.ts");
/* harmony import */ var _shared_components_dialog_search_task_dialog_search_task_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../shared/components/dialog-search-task/dialog-search-task.module */ "./src/app/shared/components/dialog-search-task/dialog-search-task.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _shared_components_work_order_list_work_order_list_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../shared/components/work-order-list/work-order-list.module */ "./src/app/shared/components/work-order-list/work-order-list.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _human_resources_employee_form_employee_form_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../human-resources/employee-form/employee-form.service */ "./src/app/main/human-resources/employee-form/employee-form.service.ts");
/* harmony import */ var _component_cockpit_operation_component_cockpit_operation_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../component-cockpit-operation/component-cockpit-operation.module */ "./src/app/main/maintenance/component-cockpit-operation/component-cockpit-operation.module.ts");
/* harmony import */ var _procurement_request_procurement_requests_table_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../procurement-request/procurement-requests-table.module */ "./src/app/main/maintenance/procurement-request/procurement-requests-table.module.ts");
/* harmony import */ var _work_order_form_work_order_form_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../work-order/form/work-order-form.service */ "./src/app/main/maintenance/work-order/form/work-order-form.service.ts");
/* harmony import */ var _form_popups_dialog_work_order_edition_dialog_work_order_edition_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./form/popups/dialog-work-order-edition/dialog-work-order-edition.component */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.component.ts");
/* harmony import */ var _form_popups_dialog_work_order_edition_dialog_work_order_edition_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./form/popups/dialog-work-order-edition/dialog-work-order-edition.module */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.module.ts");
/* harmony import */ var _form_popups_dialog_work_order_scheduling_edition_dialog_work_order_scheduling_edition_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.component */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.component.ts");
/* harmony import */ var _form_popups_dialog_work_order_scheduling_edition_dialog_work_order_scheduling_edition_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.module */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.module.ts");
/* harmony import */ var _form_popups_dialog_work_order_table_full_screen_dialog_work_order_table_full_screen_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./form/popups/dialog-work-order-table-full-screen/dialog-work-order-table-full-screen.component */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-table-full-screen/dialog-work-order-table-full-screen.component.ts");
/* harmony import */ var _form_popups_dialog_work_package_document_dialog_work_package_document_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./form/popups/dialog-work-package-document/dialog-work-package-document.component */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-package-document/dialog-work-package-document.component.ts");
/* harmony import */ var _form_popups_import_task_popup_import_task_popup_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./form/popups/import-task-popup/import-task-popup.component */ "./src/app/main/maintenance/work-package/form/popups/import-task-popup/import-task-popup.component.ts");
/* harmony import */ var _form_popups_import_task_report_dialog_import_task_report_dialog_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./form/popups/import-task-report-dialog/import-task-report-dialog.component */ "./src/app/main/maintenance/work-package/form/popups/import-task-report-dialog/import-task-report-dialog.component.ts");
/* harmony import */ var _form_popups_wp_last_update_wp_last_update_pop_up_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./form/popups/wp-last-update/wp-last-update-pop-up.component */ "./src/app/main/maintenance/work-package/form/popups/wp-last-update/wp-last-update-pop-up.component.ts");
/* harmony import */ var _form_popups_wp_report_dialog_wp_report_dialog_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./form/popups/wp-report-dialog/wp-report-dialog.component */ "./src/app/main/maintenance/work-package/form/popups/wp-report-dialog/wp-report-dialog.component.ts");
/* harmony import */ var _form_popups_wp_report_dialog_wp_report_dialog_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./form/popups/wp-report-dialog/wp-report-dialog.service */ "./src/app/main/maintenance/work-package/form/popups/wp-report-dialog/wp-report-dialog.service.ts");
/* harmony import */ var _form_work_order_table_filters_work_order_table_filters_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./form/work-order-table-filters/work-order-table-filters.module */ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.module.ts");
/* harmony import */ var _form_work_package_form_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./form/work-package-form.component */ "./src/app/main/maintenance/work-package/form/work-package-form.component.ts");
/* harmony import */ var _form_work_package_form_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./form/work-package-form.service */ "./src/app/main/maintenance/work-package/form/work-package-form.service.ts");
/* harmony import */ var _search_work_package_search_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./search/work-package-search.component */ "./src/app/main/maintenance/work-package/search/work-package-search.component.ts");
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






















































var EXTERNAL_MODULES = [
    primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"],
    primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
    primeng_chart__WEBPACK_IMPORTED_MODULE_2__["ChartModule"],
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
    primeng_progressbar__WEBPACK_IMPORTED_MODULE_8__["ProgressBarModule"],
    primeng_treetable__WEBPACK_IMPORTED_MODULE_13__["TreeTableModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_9__["SelectButtonModule"],
    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_10__["SplitButtonModule"],
    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_31__["ModalModule"],
    primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_7__["OverlayPanelModule"],
    primeng_dialog__WEBPACK_IMPORTED_MODULE_4__["DialogModule"],
    _shared_components_dialog_search_defect_events_dialog_search_defect_events_module__WEBPACK_IMPORTED_MODULE_21__["DialogSearchDefectEventsModule"],
    _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_22__["DialogSearchEquipmentModule"],
    _shared_components_dialog_search_purchase_request_dialog_search_purchase_request_module__WEBPACK_IMPORTED_MODULE_26__["DialogSearchPurchaseRequestModule"],
    _shared_components_dialog_search_sales_request_dialog_search_sales_request_module__WEBPACK_IMPORTED_MODULE_28__["DialogSearchSalesRequestModule"],
    primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"]
];
var INTERNAL_MODULES = [
    _procurement_request_procurement_requests_table_module__WEBPACK_IMPORTED_MODULE_37__["ProcurementRequestsTableModule"],
    _shared_components_defect_list_defect_list_module__WEBPACK_IMPORTED_MODULE_18__["DefectListModule"],
    _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_20__["DialogSearchCustomerModule"],
    _form_popups_dialog_work_order_edition_dialog_work_order_edition_module__WEBPACK_IMPORTED_MODULE_40__["DialogWorkOrderEditionModule"],
    _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_32__["TableModule"],
    _form_work_order_table_filters_work_order_table_filters_module__WEBPACK_IMPORTED_MODULE_50__["WorkOrderTableFiltersModule"],
    _form_popups_dialog_work_order_scheduling_edition_dialog_work_order_scheduling_edition_module__WEBPACK_IMPORTED_MODULE_42__["DialogWorkOrderSchedulingEditionModule"],
    _shared_components_work_order_list_work_order_list_module__WEBPACK_IMPORTED_MODULE_33__["WorkOrderListModule"],
    _component_cockpit_operation_component_cockpit_operation_module__WEBPACK_IMPORTED_MODULE_36__["ComponentCockpitOperationModule"]
];
var API = [];
var COMPONENTS = [
    _form_popups_wp_report_dialog_wp_report_dialog_component__WEBPACK_IMPORTED_MODULE_48__["WpReportDialogComponent"],
    _form_popups_import_task_popup_import_task_popup_component__WEBPACK_IMPORTED_MODULE_45__["ImportTaskPopupComponent"],
    _form_popups_import_task_report_dialog_import_task_report_dialog_component__WEBPACK_IMPORTED_MODULE_46__["ImportTaskReportDialogComponent"],
    _form_popups_wp_last_update_wp_last_update_pop_up_component__WEBPACK_IMPORTED_MODULE_47__["LastUpdatePopupComponent"]
];
var DYNAMIC_COMPONENTS = [
    _form_work_package_form_component__WEBPACK_IMPORTED_MODULE_51__["WorkPackageFormComponent"],
    _search_work_package_search_component__WEBPACK_IMPORTED_MODULE_53__["WorkPackageSearchComponent"],
    _form_popups_dialog_work_order_table_full_screen_dialog_work_order_table_full_screen_component__WEBPACK_IMPORTED_MODULE_43__["DialogWorkOrderTableFullScreenComponent"],
    _form_popups_dialog_work_package_document_dialog_work_package_document_component__WEBPACK_IMPORTED_MODULE_44__["DialogWorkPackageDocumentComponent"]
];
var SERVICES = [
    _form_work_package_form_service__WEBPACK_IMPORTED_MODULE_52__["WorkPackageFormService"],
    _work_order_form_work_order_form_service__WEBPACK_IMPORTED_MODULE_38__["WorkOrderFormService"],
    _form_popups_wp_report_dialog_wp_report_dialog_service__WEBPACK_IMPORTED_MODULE_49__["WpReportDialogFormService"],
    _shared_components_dialog_bido_customer_dialog_bido_customer_service__WEBPACK_IMPORTED_MODULE_19__["DialogBidoCustomerService"],
    _shared_components_dialog_search_sales_request_dialog_search_sales_request_service__WEBPACK_IMPORTED_MODULE_29__["DialogSearchSalesRequestService"],
    _shared_components_dialog_search_purchase_request_dialog_search_purchase_request_service__WEBPACK_IMPORTED_MODULE_27__["DialogSearchPurchaseRequestService"],
    _human_resources_employee_form_employee_form_service__WEBPACK_IMPORTED_MODULE_35__["EmployeeFormService"]
];
var WorkPackageModule = /** @class */ (function () {
    function WorkPackageModule() {
    }
    WorkPackageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_14__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_15__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_16__["AppCommonSharedModule"],
                _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_17__["ComponentSidebarModule"],
                _shared_components_dialog_search_task_dialog_search_task_module__WEBPACK_IMPORTED_MODULE_30__["DialogSearchTaskModule"],
                _shared_components_dialog_search_evolution_dialog_search_evolution_module__WEBPACK_IMPORTED_MODULE_24__["DialogSearchEvolutionModule"],
                _shared_components_dialog_search_event_dialog_search_event_module__WEBPACK_IMPORTED_MODULE_23__["DialogSearchEventModule"],
                _shared_components_dialog_search_operation_dialog_search_operation_module__WEBPACK_IMPORTED_MODULE_25__["DialogSearchOperationModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_34__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            exports: [_form_popups_dialog_work_order_edition_dialog_work_order_edition_component__WEBPACK_IMPORTED_MODULE_39__["DialogWorkOrderEditComponent"], _form_popups_dialog_work_order_scheduling_edition_dialog_work_order_scheduling_edition_component__WEBPACK_IMPORTED_MODULE_41__["DialogWorkOrderSchedulingEditComponent"]],
            providers: __spread(API, SERVICES)
        })
    ], WorkPackageModule);
    return WorkPackageModule;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-search-sales-request/dialog-search-sales-request.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-sales-request/dialog-search-sales-request.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"80\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ \"salesRequestPopin.title\" | translate }}</div>\r\n\r\n    <i class=\"material-icons aw-icon aw-icon-with-border\" (click)=\"onCancel()\">close</i>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"search-dialog-container\">\r\n      <div class=\"section search-criteria-section\">\r\n        <h4 class=\"section-title\">{{ \"global.search\" | translate }}</h4>\r\n\r\n        <div class=\"section-content\">\r\n          <div class=\"column\">\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"salesRequestPopin.srCode\" | translate }} </label>\r\n\r\n                <div class=\"form-control\"><input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.srCode\" /></div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"salesRequestPopin.srName\" | translate }} </label>\r\n\r\n                <div class=\"form-control\"><input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.srName\" /></div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"salesRequestPopin.srDescription\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.srDescription\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"salesRequestPopin.srCreationDate\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-calendar\r\n                    showButtonBar=\"true\"\r\n                    [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\"\r\n                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                    class=\"aw-calendar\"\r\n                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                    [locale]=\"sessionService.calendarFormat\"\r\n                    [(ngModel)]=\"creation\"\r\n                    appendTo=\"body\"\r\n                  ></p-calendar>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"salesRequestPopin.srDeliveryDate\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-calendar\r\n                    showButtonBar=\"true\"\r\n                    [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\"\r\n                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                    class=\"aw-calendar\"\r\n                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                    [locale]=\"sessionService.calendarFormat\"\r\n                    [(ngModel)]=\"delivery\"\r\n                    appendTo=\"body\"\r\n                  ></p-calendar>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"salesRequestPopin.bidoCustomerCustomerCode\" | translate }} </label>\r\n\r\n                <div class=\"form-control\"><input class=\"aw-input\" type=\"text\" [(ngModel)]=\"customerCode\" /></div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row search-criteria-footer\">\r\n              <div class=\"search-actions\">\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"searchSalesRequests()\">\r\n                  <span>{{ \"global.toSearch\" | translate }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"section results-section\">\r\n        <h4 class=\"section-title\">\r\n          {{ \"global.results\" | translate }} ({{ resultsTable.list ? resultsTable.list.length : 0 }})\r\n        </h4>\r\n\r\n        <div class=\"section-content\">\r\n          <p-table\r\n            [resizableColumns]=\"true\"\r\n            #ptable\r\n            class=\"aw-table2\"\r\n            [columns]=\"resultsTableCols\"\r\n            [value]=\"resultsTable.list\"\r\n            [(selection)]=\"selectedObject\"\r\n            selectionMode=\"single\"\r\n            dataKey=\"srCode\"\r\n            [scrollable]=\"true\"\r\n            (onRowUnselect)=\"onRowUnselect()\"\r\n          >\r\n            <ng-template pTemplate=\"emptymessage\">\r\n              <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n              <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                <div class=\"lds-hourglass\"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"caption\">\r\n              <div class=\"aw-table-header\">\r\n                <div class=\"aw-table-global-filter\">\r\n                  <label class=\"aw-table-global-filter-label\">\r\n                    <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    #ptableGlobalFilter\r\n                    class=\"aw-table-global-filter-input\"\r\n                    type=\"text\"\r\n                    placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                    (input)=\"ptable.filterGlobal($event.target.value, 'contains')\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"colgroup\" let-columns>\r\n              <colgroup>\r\n                <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n              <tr>\r\n                <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                  {{ \"salesRequestPopin.\" + col.field | translate }}\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n              <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                  <span *ngIf=\"!col.isDate\"> {{ rowData[col.field] }} </span>\r\n                  <span *ngIf=\"col.isDate\">\r\n                    {{ rowData[col.field] | date: \"short\":\"\":translateService.currentLang }}\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isOneObjectSelected()\" color=\"primary\" type=\"button\" mat-raised-button (click)=\"onValidate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-search-sales-request/dialog-search-sales-request.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-sales-request/dialog-search-sales-request.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: DialogSearchSalesRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchSalesRequestComponent", function() { return DialogSearchSalesRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _dialog_search_sales_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-search-sales-request.service */ "./src/app/shared/components/dialog-search-sales-request/dialog-search-sales-request.service.ts");
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







var DialogSearchSalesRequestComponent = /** @class */ (function (_super) {
    __extends(DialogSearchSalesRequestComponent, _super);
    function DialogSearchSalesRequestComponent(dialogSearchSalesRequestService, sessionService, translateService, messageService) {
        var _this = _super.call(this, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, 'salesRequestPopin') || this;
        _this.dialogSearchSalesRequestService = dialogSearchSalesRequestService;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.messageService = messageService;
        _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.resultsTable = {
            list: [],
            moreResults: false
        };
        _this.searchObject = {};
        _this.selectedObject = {};
        _this.resultsTableCols = [
            { field: 'srCode', width: '250px' },
            { field: 'srName', width: '250px' },
            { field: 'srDescription', width: '350px' },
            { field: 'srCreationDate', width: '200px', isDate: true },
            { field: 'srDeliveryDate', width: '200px', isDate: true },
            { field: 'bidoCustomerCustomerCode', width: '200px' }
        ];
        return _this;
    }
    Object.defineProperty(DialogSearchSalesRequestComponent.prototype, "salesOrderCode", {
        // VISIBLE INPUT
        set: function (code) {
            this.searchObject.srCode = code;
        },
        enumerable: true,
        configurable: true
    });
    DialogSearchSalesRequestComponent.prototype.searchSalesRequests = function () {
        var _this = this;
        this.dialogSearchSalesRequestService
            .findBidtSalesRequestsByCriteriaForOVS(this.searchObject, this.customerCode, this.creation, this.delivery)
            .subscribe(function (results) {
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
    DialogSearchSalesRequestComponent.prototype.onValidate = function () {
        this.onSelected.emit(this.selectedObject);
        this.selectedObject = {};
        this.display = false;
    };
    // Clean the selectedObject object if the row is unselect
    DialogSearchSalesRequestComponent.prototype.onRowUnselect = function () {
        this.selectedObject = {};
    };
    // Clean all the object on rerender
    DialogSearchSalesRequestComponent.prototype.onShow = function () {
        this.selectedObject = {};
        this.resultsTable = {
            list: [],
            moreResults: false
        };
    };
    /*
      <summary>Close the pop up on cancel</summary>
      */
    DialogSearchSalesRequestComponent.prototype.onCancel = function () {
        this.selectedObject = {};
        this.resultsTable = {
            list: [],
            moreResults: false
        };
        this.display = false;
    };
    DialogSearchSalesRequestComponent.prototype.isOneObjectSelected = function () {
        return !this.selectedObject.srCode;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DialogSearchSalesRequestComponent.prototype, "onSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('sr-code'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DialogSearchSalesRequestComponent.prototype, "salesOrderCode", null);
    DialogSearchSalesRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-search-sales-request',
            template: __webpack_require__(/*! ./dialog-search-sales-request.component.html */ "./src/app/shared/components/dialog-search-sales-request/dialog-search-sales-request.component.html")
        }),
        __metadata("design:paramtypes", [_dialog_search_sales_request_service__WEBPACK_IMPORTED_MODULE_6__["DialogSearchSalesRequestService"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], DialogSearchSalesRequestComponent);
    return DialogSearchSalesRequestComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/components/dialog-search-sales-request/dialog-search-sales-request.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-sales-request/dialog-search-sales-request.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DialogSearchSalesRequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchSalesRequestModule", function() { return DialogSearchSalesRequestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dialog_search_sales_request_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-search-sales-request.component */ "./src/app/shared/components/dialog-search-sales-request/dialog-search-sales-request.component.ts");
/* harmony import */ var _dialog_search_sales_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog-search-sales-request.service */ "./src/app/shared/components/dialog-search-sales-request/dialog-search-sales-request.service.ts");
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
var EXTERNAL_MODULES = [primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["TableModule"]];
var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_dialog_search_sales_request_component__WEBPACK_IMPORTED_MODULE_7__["DialogSearchSalesRequestComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_dialog_search_sales_request_service__WEBPACK_IMPORTED_MODULE_8__["DialogSearchSalesRequestService"]];
var DialogSearchSalesRequestModule = /** @class */ (function () {
    function DialogSearchSalesRequestModule() {
    }
    DialogSearchSalesRequestModule = __decorate([
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
    ], DialogSearchSalesRequestModule);
    return DialogSearchSalesRequestModule;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-search-sales-request/dialog-search-sales-request.service.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-sales-request/dialog-search-sales-request.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: DialogSearchSalesRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchSalesRequestService", function() { return DialogSearchSalesRequestService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bidt_sales_request_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api/bidt-sales-request.api */ "./src/app/shared/api/bidt-sales-request.api.ts");
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





var DialogSearchSalesRequestService = /** @class */ (function (_super) {
    __extends(DialogSearchSalesRequestService, _super);
    function DialogSearchSalesRequestService(http, appConfigService, bidtSalesRequestApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtSalesRequestApi = bidtSalesRequestApi;
        return _this;
    }
    DialogSearchSalesRequestService.prototype.findBidtSalesRequestsByCriteriaForOVS = function (criteria, custumerCode, creation, delivery) {
        var param = {
            bidtSalesRequestCriteria: criteria,
            supplier: custumerCode,
            creationDate: creation,
            deliveryDate: delivery
        };
        return _super.prototype.post.call(this, this.bidtSalesRequestApi.findBidtSalesRequestsByCriteriaForOVS, param);
    };
    DialogSearchSalesRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_api_bidt_sales_request_api__WEBPACK_IMPORTED_MODULE_2__["BidtSalesRequestApi"]])
    ], DialogSearchSalesRequestService);
    return DialogSearchSalesRequestService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/components/work-order-list/form/work-order-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/work-order-list/form/work-order-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-cell-header\">\r\n  <div class=\"grid-cell-title-container\">\r\n    <h3 class=\"grid-cell-title\">{{ getComponentName() + \".workOrders\" | translate }} ({{ workOrderTable.length }})</h3>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"grid-cell-content\">\r\n  <p-treeTable\r\n    id=\"workOrderTable\"\r\n    #ptreeTableItemStructure\r\n    class=\"aw-tree-table2\"\r\n    [value]=\"workOrderTable\"\r\n    [columns]=\"workOrderTableCols\"\r\n    [scrollable]=\"false\"\r\n    selectionMode=\"checkbox\"\r\n    [(selection)]=\"selectedWorkOrders\"\r\n    [resizableColumns]=\"true\"\r\n  >\r\n    <ng-template pTemplate=\"emptymessage\">\r\n      <span *ngIf=\"!isLoadingWorkOrderTable\"> &nbsp;</span>\r\n\r\n      <div *ngIf=\"isLoadingWorkOrderTable\" class=\"aw-table-loading-indicator\">\r\n        <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n        <div class=\"lds-hourglass\"></div>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"caption\">\r\n      <div class=\"aw-table-header\">\r\n        <div class=\"aw-table-global-filter\">\r\n          <label class=\"aw-table-global-filter-label\">\r\n            <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n          </label>\r\n\r\n          <input\r\n            #ptreeTableItemStructureGlobalFilter\r\n            class=\"aw-table-global-filter-input\"\r\n            type=\"text\"\r\n            placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n            [(ngModel)]=\"searchGlobalFilter\"\r\n            (keyup)=\"searchGlobalFilterChange(searchGlobalFilter)\"\r\n          />\r\n        </div>\r\n\r\n        <div class=\"aw-table-actions\" *ngIf=\"!hideTableActions\">\r\n          <button\r\n            id=\"transferWorkOrders\"\r\n            *ngIf=\"displayTransferButton\"\r\n            type=\"button\"\r\n            mat-raised-button\r\n            (click)=\"openWorkPackagesList()\"\r\n          >\r\n            {{ getComponentName() + \".transferWO\" | translate }}\r\n          </button>\r\n\r\n          <button\r\n            id=\"goodsMovementsWorkOrderTable\"\r\n            *ngIf=\"selectedWorkOrders.length > 0\"\r\n            type=\"button\"\r\n            mat-raised-button\r\n            (click)=\"openSelectedGoodsMovement()\"\r\n          >\r\n            {{ getComponentName() + \".goodsMovements\" | translate }}\r\n          </button>\r\n\r\n          <button\r\n            id=\"updateSchedulingWorkOrderTable\"\r\n            *ngIf=\"selectedWorkOrders.length > 0 && showUpdateEditButton()\"\r\n            type=\"button\"\r\n            mat-raised-button\r\n            (click)=\"openUpdateSchedulingDialog()\"\r\n          >\r\n            {{ getComponentName() + \".updateScheduling\" | translate }}\r\n          </button>\r\n\r\n          <button\r\n            id=\"openWorkOrderTable\"\r\n            *ngIf=\"selectedWorkOrders.length > 1\"\r\n            type=\"button\"\r\n            mat-raised-button\r\n            (click)=\"openSelectedWorkOrders()\"\r\n          >\r\n            {{ \"global.open\" | translate }}\r\n          </button>\r\n\r\n          <button\r\n            id=\"editWorkOrderTable\"\r\n            *ngIf=\"\r\n              _workPackage.statusState !== awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE &&\r\n              selectedWorkOrders.length === 1 &&\r\n              showUpdateEditButton()\r\n            \"\r\n            type=\"button\"\r\n            mat-raised-button\r\n            (click)=\"editSelectedWorkOrder()\"\r\n          >\r\n            {{ \"global.edit\" | translate }}\r\n          </button>\r\n\r\n          <button\r\n            id=\"addWorkOrderTable\"\r\n            *ngIf=\"\r\n              _workPackage.statusState !== awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE &&\r\n              selectedWorkOrders.length === 0\r\n            \"\r\n            type=\"button\"\r\n            mat-raised-button\r\n            (click)=\"addWorkOrderDialog()\"\r\n          >\r\n            {{ \"global.add\" | translate }}\r\n          </button>\r\n\r\n          <button id=\"calendarWorkOrderTable\" type=\"button\" mat-raised-button (click)=\"goToCalendar()\">\r\n            {{ getComponentName() + \".calendar\" | translate }}\r\n          </button>\r\n\r\n          <button\r\n            id=\"deleteWorkOrderTable\"\r\n            *ngIf=\"\r\n              _workPackage.statusState !== awPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE &&\r\n              selectedWorkOrders.length > 0 &&\r\n              mainPageOpenMode === componentOpenMode.Write\r\n            \"\r\n            type=\"button\"\r\n            mat-raised-button\r\n            color=\"warn\"\r\n            (click)=\"deleteSelectedWorkOrder()\"\r\n          >\r\n            {{ \"global.delete\" | translate }}\r\n          </button>\r\n\r\n          <div *ngIf=\"!isLoadingWorkOrderTable\" class=\"aw-table-icon-actions\">\r\n            <i\r\n              class=\"fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay\"\r\n              aria-hidden=\"true\"\r\n              pTooltip=\"{{ getComponentName() + (filtersVisible ? '.hideFilters' : '.showFilters') | translate }}\"\r\n              tooltipPosition=\"left\"\r\n              [ngClass]=\"{ active: filtersVisible }\"\r\n              (click)=\"woFilters.toggle($event)\"\r\n            ></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"!isLoadingWorkOrderTable && filterActivatedList !== null && !!filterActivatedList.length > 0\"\r\n        class=\"active-filter-list\"\r\n      >\r\n        <div class=\"aw-chips\" *ngFor=\"let filter of filterActivatedList\">\r\n          <span class=\"aw-chips-label\">{{ filter.value }}</span>\r\n          <i class=\"fa fa-fw fa-times aw-chips-icon\" aria-hidden=\"true\" (click)=\"filter.action()\"></i>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"colgroup\" let-columns>\r\n      <colgroup>\r\n        <col class=\"aw-table-checkbox-wrapper\" />\r\n        <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n      </colgroup>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr>\r\n        <th class=\"aw-table-checkbox-wrapper\">\r\n          <p-treeTableHeaderCheckbox class=\"aw-table-checkbox\"></p-treeTableHeaderCheckbox>\r\n        </th>\r\n        <th ttResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n          {{ getComponentName() + \".\" + col.field | translate }}\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n      <tr>\r\n        <td class=\"aw-table-checkbox-wrapper\">\r\n          <p-treeTableCheckbox\r\n            class=\"aw-table-checkbox\"\r\n            [value]=\"rowNode\"\r\n            (click)=\"isTransferWOButtonVisible()\"\r\n          ></p-treeTableCheckbox>\r\n        </td>\r\n\r\n        <td\r\n          *ngFor=\"let col of columns; let i = index\"\r\n          [ngSwitch]=\"col.field\"\r\n          [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n          [ngClass]=\"col.class\"\r\n        >\r\n          <div *ngSwitchCase=\"'workOrder'\" class=\"row nowrap\">\r\n            <div>\r\n              <p-treeTableToggler [rowNode]=\"rowNode\"></p-treeTableToggler>\r\n            </div>\r\n            <div class=\"tree-table-cell\">\r\n              <a class=\"value\" (click)=\"openWorkOrderLink(rowData.bidmWorkOrder)\">{{ rowData.code }}</a>\r\n              <div class=\"designation\">{{ rowData.description }}</div>\r\n              <div class=\"additional-data\">\r\n                <div>\r\n                  <span class=\"label\">{{ getComponentName() + \".type\" | translate }}</span>\r\n                  <span class=\"value\">{{ rowData.type }}</span>\r\n                </div>\r\n                <div>\r\n                  <span class=\"label\"> {{ getComponentName() + \".origin\" | translate }}</span>\r\n                  <a class=\"value\" (click)=\"consultWorkOrderOrigin(rowData)\">{{ rowData.origin }}</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngSwitchCase=\"'engineeringData'\" class=\"tree-table-cell\">\r\n            <div>\r\n              <span class=\"label\"> {{ getComponentName() + \".item\" | translate }}</span>\r\n              <a class=\"value\" (click)=\"openItem(rowData.bidmWorkOrder)\">{{ rowData.relatedItem }}</a>\r\n            </div>\r\n            <div>\r\n              <span class=\"label\">{{ getComponentName() + \".zone\" | translate }}</span>\r\n              <span class=\"value\">{{ rowData.zone }}</span>\r\n            </div>\r\n            <div>\r\n              <span class=\"label\">{{ getComponentName() + \".standardDuration\" | translate }}</span>\r\n              <span class=\"value\">{{ rowData.standardDuration }}</span>\r\n              <span class=\"horizontal-separator\"></span>\r\n              <span class=\"label\">{{ getComponentName() + \".standardCost\" | translate }}</span>\r\n              <span class=\"value\">{{ rowData.standardCost }}</span>\r\n            </div>\r\n            <div>\r\n              <span class=\"label\">{{ getComponentName() + \".qualifications\" | translate }}</span>\r\n              <span class=\"value\">{{ rowData.qualification }}</span>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngSwitchCase=\"'fleetData'\" class=\"tree-table-cell\">\r\n            <div>\r\n              <span class=\"label\"> {{ getComponentName() + \".sn\" | translate }}</span>\r\n              <a *ngIf=\"rowData.bidoEquipmentData\" (click)=\"openSnLink(rowData.bidoEquipmentData)\" class=\"value\">{{\r\n                rowData.bidmWorkOrder.assetSn\r\n              }}</a>\r\n              <span *ngIf=\"!rowData.bidoEquipmentData\" class=\"value\">{{ rowData.bidmWorkOrder.assetSn }}</span>\r\n            </div>\r\n            <div>\r\n              <span class=\"label\"> {{ getComponentName() + \".pn\" | translate }}</span>\r\n              <a (click)=\"openPartNumberLink(rowData.bidmWorkOrder.assetPn)\" class=\"value\">{{\r\n                rowData.bidmWorkOrder.assetPn\r\n              }}</a>\r\n            </div>\r\n            <div class=\"designation\" *ngIf=\"rowData.bidoEquipmentData\">\r\n              {{ rowData.bidoEquipmentData.equipmentDesignation }}\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngSwitchCase=\"'schedulingData'\" class=\"tree-table-cell\">\r\n            <div>\r\n              <span class=\"label\">{{ getComponentName() + \".assignedTo\" | translate }}</span>\r\n              <span class=\"value\">{{ rowData.assignedTo }}</span>\r\n            </div>\r\n            <div class=\"additional-data\">\r\n              <div>\r\n                <span class=\"label\">{{ getComponentName() + \".startDate\" | translate }}</span>\r\n                <span class=\"value\">{{ rowData.startDate }}</span>\r\n              </div>\r\n              <div>\r\n                <span class=\"label\">{{ getComponentName() + \".endDate\" | translate }}</span>\r\n                <span class=\"value\">{{ rowData.endDate }}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngSwitchCase=\"'executionData'\" class=\"tree-table-cell\">\r\n            <div class=\"row compact\">\r\n              <div class=\"grid-cell--3 grid-cell--no-padding\">\r\n                <p-progressBar [ngClass]=\"rowData.statusCrititicy\" [value]=\"rowData.statusPercent\"> </p-progressBar>\r\n              </div>\r\n              <div class=\"grid-cell--9 grid-cell--no-padding\">\r\n                <span class=\"horizontal-separator\"></span>\r\n                <span class=\"value\"> {{ this.getStatusLabel(rowData.status) }}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"additional-data\"></div>\r\n            <div>\r\n              <span class=\"label\">{{ getComponentName() + \".openingDate\" | translate }}</span>\r\n              <span class=\"value\">{{ rowData.openingDate }} </span>\r\n            </div>\r\n            <div>\r\n              <span class=\"label\">{{ getComponentName() + \".closingDate\" | translate }}</span>\r\n              <span class=\"value\">{{ rowData.closingDate }}</span>\r\n            </div>\r\n            <div class=\"additional-data\" *ngIf=\"rowData.checkedBy || rowData.checkedOn\"></div>\r\n            <div *ngIf=\"rowData.checkedBy\">\r\n              <span class=\"label\">{{ getComponentName() + \".checkedBy\" | translate }}</span>\r\n              <span class=\"value\">{{ rowData.checkedBy }}</span>\r\n            </div>\r\n            <div *ngIf=\"rowData.checkedOn\">\r\n              <span class=\"label\">{{ getComponentName() + \".checkedOn\" | translate }}</span>\r\n              <span class=\"value\">{{ rowData.checkedOn }}</span>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngSwitchCase=\"'illustration'\" class=\"tree-table-cell illustration\">\r\n            <img *ngIf=\"rowData.materialIllustration\" [src]=\"rowData.materialIllustration\" />\r\n          </div>\r\n\r\n          <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-treeTable>\r\n</div>\r\n\r\n<p-overlayPanel\r\n  #woFilters\r\n  class=\"aw-overlay\"\r\n  (onShow)=\"filtersVisible = true\"\r\n  (onHide)=\"filtersVisible = false\"\r\n  appendTo=\"body\"\r\n>\r\n  <aw-work-order-table-filters\r\n    [searchCriteria]=\"workOrderTableCriteria\"\r\n    (onFilter)=\"woFilters.hide(); filtersVisible = false; updateWorkOrderTable()\"\r\n    (onReset)=\"woFilters.hide(); resetWorkOrderTableFilters()\"\r\n  >\r\n  </aw-work-order-table-filters>\r\n</p-overlayPanel>\r\n\r\n<aw-dialog-work-package-list\r\n  *ngIf=\"showWorkPackageListDialog\"\r\n  [(display)]=\"showWorkPackageListDialog\"\r\n  [selectedWorkOrders]=\"selectedWorkOrders\"\r\n  [_workPackage]=\"_workPackage\"\r\n  (onTransferOfWO)=\"onTransferOfWO($event)\"\r\n>\r\n</aw-dialog-work-package-list>\r\n"

/***/ }),

/***/ "./src/app/shared/components/work-order-list/form/work-order-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/work-order-list/form/work-order-list.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .grid-cell-search .search-actions button {\n  margin-left: 8px; }\n  :host .grid-cell-search .search-actions button:first-of-type {\n    margin-left: 0; }\n  :host ::ng-deep p-progressbar.pla .ui-progressbar-value {\n  background: #c8d4d6; }\n  :host ::ng-deep p-progressbar.ong .ui-progressbar-value {\n  background: #b8d0e8; }\n  :host ::ng-deep p-progressbar.tbc .ui-progressbar-value {\n  background: #b8d0e8; }\n  :host ::ng-deep p-progressbar.per .ui-progressbar-value {\n  background: #006ea9; }\n  :host ::ng-deep p-progressbar.clo .ui-progressbar-value {\n  background: #4caf50; }\n  :host ::ng-deep p-progressbar.pos .ui-progressbar-value {\n  background: #4caf50; }\n  :host ::ng-deep p-progressbar.por .ui-progressbar-value {\n  background: #dddf00; }\n  :host .grid-cell-work-order-list .table {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%; }\n  :host .grid-cell-work-order-list .table .workOrder {\n    width: 20%; }\n  :host .grid-cell-work-order-list .table .engineeringData {\n    width: 22.5%; }\n  :host .grid-cell-work-order-list .table .fleetData {\n    width: 10%; }\n  :host .grid-cell-work-order-list .table .schedulingData {\n    width: 17.5%; }\n  :host .grid-cell-work-order-list .table .executionData {\n    width: 17.5%; }\n  :host .grid-cell-work-order-list .table .illustration {\n    width: 12.5%;\n    text-align: center; }\n  :host .grid-cell-work-order-list .table .table-body .table-cell,\n  :host .grid-cell-work-order-list .table .table-header .table-cell {\n    padding: 0 calc(8px / 2); }\n  :host .grid-cell-work-order-list .table .table-header {\n    background-color: #fff;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 40px; }\n  :host .grid-cell-work-order-list .table .table-header .table-row {\n      display: flex;\n      flex-direction: row;\n      border-bottom: 1px solid #595959;\n      max-height: 24px;\n      min-height: 24px; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions {\n      display: flex;\n      flex-direction: row;\n      padding-bottom: 8px; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .row-actions {\n        display: flex;\n        flex-direction: row;\n        align-items: flex-end;\n        justify-content: flex-end; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .row-actions > .aw-btn {\n          margin-left: 8px; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .row-actions > .aw-btn:first-of-type {\n            margin-left: 0; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-filters {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        margin-right: 8px; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-filters > .aw-icon {\n          font-size: 1.125rem;\n          line-height: 2rem;\n          width: 2rem; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter {\n        display: flex;\n        flex-direction: row;\n        align-items: baseline;\n        flex-grow: 1;\n        padding-right: 5%; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input {\n          background-color: transparent;\n          border-bottom-color: #595959;\n          border-left-color: transparent;\n          border-radius: 0;\n          border-right-color: transparent;\n          border-style: solid;\n          border-top-color: transparent;\n          border-width: 1px;\n          color: inherit;\n          font-family: inherit;\n          font-size: inherit;\n          font-weight: inherit;\n          line-height: 1.42857143;\n          outline: none;\n          padding: 2px 0 4px 0;\n          transition: border-bottom-color 0.25s ease-in-out;\n          min-width: 12rem;\n          width: 12rem;\n          transition: border-bottom-color 0.25s ease-in-out, width 0.5s ease; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input::-webkit-input-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input:-moz-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input::-moz-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input:-ms-input-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input:focus {\n            border-bottom-color: #01579b;\n            outline: none;\n            width: 100%; }\n  :host .grid-cell-work-order-list .table .table-body {\n    min-height: calc(8px * 5); }\n  :host .grid-cell-work-order-list .table .table-body .table-row {\n      display: flex;\n      flex-direction: row;\n      border-bottom: 1px solid #f0f0f0;\n      cursor: pointer;\n      padding: 8px 0; }\n  :host .grid-cell-work-order-list .table .table-body .table-row:hover {\n        background-color: #f0f0f0; }\n  :host .grid-cell-work-order-list .table .table-body .table-row.selected {\n        background-color: #e9f5ff;\n        border-bottom-color: #e9f5ff;\n        border-left: calc(2 * 1px) solid #595959;\n        border-right: calc(2 * 1px) solid #595959;\n        border-top: calc(2 * 1px) solid #595959; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell {\n        display: flex;\n        flex-direction: column; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell.illustration img {\n          max-height: 6rem; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .horizontal-separator {\n          margin-left: 2%; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .additional-data {\n          margin-top: 8px; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .label {\n          min-width: 2.5rem;\n          display: inline-block; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .label + .value {\n          margin-left: 5%; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .value {\n          font-weight: bold; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .designation {\n          font-style: italic; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell a {\n          color: #01579b; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell a:hover {\n            text-decoration: underline; }\n  :host .grid-cell-work-order-list .table .table-body .table-row-details {\n      display: flex;\n      flex-direction: column;\n      border-bottom: calc(2 * 1px) solid #595959;\n      border-left: calc(2 * 1px) solid #595959;\n      border-right: calc(2 * 1px) solid #595959;\n      border-top: 1px dashed #595959;\n      padding: 8px; }\n  :host .grid-cell-work-order-list .table .table-body .table-row-details .table-row-details-header {\n        margin-bottom: 8px; }\n  :host .row.nowrap {\n  flex-wrap: nowrap !important; }\n  :host ::ng-deep .tree-table-cell {\n  display: flex;\n  flex-direction: column; }\n  :host ::ng-deep .tree-table-cell.illustration img {\n    max-height: 6rem; }\n  :host ::ng-deep .tree-table-cell .horizontal-separator {\n    margin-left: 2%; }\n  :host ::ng-deep .tree-table-cell .additional-data {\n    margin-top: 8px; }\n  :host ::ng-deep .tree-table-cell .label {\n    min-width: 2.5rem;\n    display: inline-block; }\n  :host ::ng-deep .tree-table-cell .label + .value {\n    margin-left: 5%; }\n  :host ::ng-deep .tree-table-cell .value {\n    font-weight: bold; }\n  :host ::ng-deep .tree-table-cell .designation {\n    font-style: italic;\n    white-space: normal; }\n  :host ::ng-deep .tree-table-cell a {\n    color: #01579b;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    /*       &:hover {\r\n        text-decoration: underline;\r\n      } */ }\n  :host ::ng-deep .small-calendar .ui-calendar {\n  width: 100px !important; }\n  :host ::ng-deep .small-calendar .ui-calendar .ui-inputtext {\n  padding: 0 !important; }\n  :host .table-filters-overlay {\n  display: flex;\n  flex-direction: column; }\n  :host .table-filters-overlay .filters {\n    display: flex;\n    flex-direction: column; }\n  :host .table-filters-overlay .filters > * {\n      margin-top: 8px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvd29yay1vcmRlci1saXN0L2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFx3b3JrLW9yZGVyLWxpc3RcXGZvcm1cXHdvcmstb3JkZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvd29yay1vcmRlci1saXN0L2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy93b3JrLW9yZGVyLWxpc3QvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3dvcmstb3JkZXItbGlzdC9mb3JtL3dvcmstb3JkZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUlRLGdCQ21DVSxFQUFBO0VEdkNsQjtJQU9VLGNBQWMsRUFBQTtFQVB4QjtFQWNJLG1CQ1FXLEVBQUE7RUR0QmY7RUFpQkksbUJDR2lCLEVBQUE7RURwQnJCO0VBb0JJLG1CQ0FpQixFQUFBO0VEcEJyQjtFQXVCSSxtQkNGZ0IsRUFBQTtFRHJCcEI7RUEwQkksbUJDVmtCLEVBQUE7RURoQnRCO0VBNkJJLG1CQ2JrQixFQUFBO0VEaEJ0QjtFQWdDSSxtQkNUYSxFQUFBO0VEdkJqQjtFRWFFLGFBQWE7RUFDYixzQkFBc0I7RUZ5QmxCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7RUF4Q2pCO0lBMkNRLFVBQVUsRUFBQTtFQTNDbEI7SUErQ1EsWUFBWSxFQUFBO0VBL0NwQjtJQW1EUSxVQUFVLEVBQUE7RUFuRGxCO0lBdURRLFlBQVksRUFBQTtFQXZEcEI7SUEyRFEsWUFBWSxFQUFBO0VBM0RwQjtJQStEUSxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7RUFoRTFCOztJQXNFVSx3QkFBcUMsRUFBQTtFQXRFL0M7SUEyRVEsc0JDaEZ1QjtJRGlGdkIsd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixTQzFCWSxFQUFBO0VEbkRwQjtNRWtCRSxhQUFhO01BQ2IsbUJBQW1CO01GK0RYLGdDQ3BGb0I7TURxRnBCLGdCQXJGZ0I7TUFzRmhCLGdCQXRGZ0IsRUFBQTtFQUUxQjtNRWtCRSxhQUFhO01BQ2IsbUJBQW1CO01GdUVYLG1CQ25EUSxFQUFBO0VEdkNsQjtRRWtCRSxhQUFhO1FBQ2IsbUJBQW1CO1FGNEVULHFCQUFxQjtRQUNyQix5QkFBeUIsRUFBQTtFQWhHckM7VUFtR2MsZ0JDNURJLEVBQUE7RUR2Q2xCO1lBc0dnQixjQUFjLEVBQUE7RUF0RzlCO1FFa0JFLGFBQWE7UUFDYixtQkFBbUI7UUYyRlQsbUJBQW1CO1FBQ25CLGlCQ3hFTSxFQUFBO0VEdkNsQjtVQWtIYyxtQkFBbUI7VUFDbkIsaUJBQWlCO1VBQ2pCLFdBQVcsRUFBQTtFQXBIekI7UUVrQkUsYUFBYTtRQUNiLG1CQUFtQjtRRndHVCxxQkFBcUI7UUFDckIsWUFBWTtRQUNaLGlCQUFpQixFQUFBO0VBN0g3QjtVRXVCRSw2QkFBNkI7VUFDN0IsNEJEMUI0QjtVQzJCNUIsOEJBQThCO1VBQzlCLGdCQUFnQjtVQUNoQiwrQkFBK0I7VUFDL0IsbUJES2tCO1VDSmxCLDZCQUE2QjtVQUM3QixpQkRJZ0I7VUNIaEIsY0FBYztVQUNkLG9CQUFvQjtVQUNwQixrQkFBa0I7VUFDbEIsb0JBQW9CO1VBQ3BCLHVCREd1QjtVQ0Z2QixhQUFhO1VBQ2Isb0JBQW9CO1VBRXBCLGlEQUFpRDtVRitGckMsZ0JBQWdCO1VBQ2hCLFlBQVk7VUFFWixrRUFBa0UsRUFBQTtFQXpJaEY7WUFrSWdCLGNDcEljO1lEcUlkLGdCQUFnQixFQUFBO0VBbkloQztZQWtJZ0IsY0NwSWM7WURxSWQsZ0JBQWdCLEVBQUE7RUFuSWhDO1lBa0lnQixjQ3BJYztZRHFJZCxnQkFBZ0IsRUFBQTtFQW5JaEM7WUFrSWdCLGNDcEljO1lEcUlkLGdCQUFnQixFQUFBO0VBbkloQztZQTRJZ0IsNEJDN0lNO1lEOElOLGFBQWE7WUFDYixXQUFXLEVBQUE7RUE5STNCO0lBc0pRLHlCQUFzQyxFQUFBO0VBdEo5QztNRWtCRSxhQUFhO01BQ2IsbUJBQW1CO01Gd0lYLGdDQy9KMEI7TURnSzFCLGVBQWU7TUFDZixjQUF3QixFQUFBO0VBN0psQztRQWdLWSx5QkNwS3dCLEVBQUE7RURJcEM7UUFvS1kseUJBQTZDO1FBQzdDLDRCQUFnRDtRQUNoRCx3Q0N4S2tCO1FEeUtsQix5Q0N6S2tCO1FEMEtsQix1Q0MxS2tCLEVBQUE7RURFOUI7UUVhRSxhQUFhO1FBQ2Isc0JBQXNCLEVBQUE7RUZkeEI7VUErS2MsZ0JBQWdCLEVBQUE7RUEvSzlCO1VBbUxjLGVBQWUsRUFBQTtFQW5MN0I7VUF1TGMsZUNoSkksRUFBQTtFRHZDbEI7VUEyTGMsaUJBQWlCO1VBQ2pCLHFCQUFxQixFQUFBO0VBNUxuQztVQWdNYyxlQUFlLEVBQUE7RUFoTTdCO1VBb01jLGlCQUFpQixFQUFBO0VBcE0vQjtVQXdNYyxrQkFBa0IsRUFBQTtFQXhNaEM7VUE0TWMsY0M3TVEsRUFBQTtFREN0QjtZQStNZ0IsMEJBQTBCLEVBQUE7RUEvTTFDO01FYUUsYUFBYTtNQUNiLHNCQUFzQjtNRjBNZCwwQ0MxTm9CO01EMk5wQix3Q0MzTm9CO01ENE5wQix5Q0M1Tm9CO01ENk5wQiw4QkM3Tm9CO01EOE5wQixZQ3JMUSxFQUFBO0VEdkNsQjtRQStOWSxrQkN4TE0sRUFBQTtFRHZDbEI7RUF1T0ksNEJBQTRCLEVBQUE7RUF2T2hDO0VFYUUsYUFBYTtFQUNiLHNCQUFzQixFQUFBO0VGZHhCO0lBOE9NLGdCQUFnQixFQUFBO0VBOU90QjtJQWtQTSxlQUFlLEVBQUE7RUFsUHJCO0lBc1BNLGVDL01ZLEVBQUE7RUR2Q2xCO0lBMFBNLGlCQUFpQjtJQUNqQixxQkFBcUIsRUFBQTtFQTNQM0I7SUErUE0sZUFBZSxFQUFBO0VBL1ByQjtJQW1RTSxpQkFBaUIsRUFBQTtFQW5RdkI7SUF1UU0sa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0VBeFF6QjtJQTRRTSxjQzdRZ0I7SUQ4UWhCLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCOztTRzlFRyxFSGdGQztFQWhSVjtFQXFSSSx1QkFBdUIsRUFBQTtFQXJSM0I7RUF5UkkscUJBQXFCLEVBQUE7RUF6UnpCO0VFYUUsYUFBYTtFQUNiLHNCQUFzQixFQUFBO0VGZHhCO0lFYUUsYUFBYTtJQUNiLHNCQUFzQixFQUFBO0VGZHhCO01BbVNRLGVDNVBVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy93b3JrLW9yZGVyLWxpc3QvZm9ybS93b3JrLW9yZGVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbiR0YWJsZS1oZWFkZXItaGVpZ2h0OiAyNHB4O1xyXG5cclxuOmhvc3Qge1xyXG4gIC5ncmlkLWNlbGwtc2VhcmNoIHtcclxuICAgIC5zZWFyY2gtYWN0aW9ucyB7XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLnBsYSAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZDogJGdyZXkxO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgcC1wcm9ncmVzc2Jhci5vbmcgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICRibHVlLWxpZ2h0MTtcclxuICB9XHJcbiAgOjpuZy1kZWVwIHAtcHJvZ3Jlc3NiYXIudGJjIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZS1saWdodDE7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLnBlciAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZDogJGJsdWUtZGFyazE7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLmNsbyAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZDogJGdyZWVuLWxpZ2h0MTtcclxuICB9XHJcbiAgOjpuZy1kZWVwIHAtcHJvZ3Jlc3NiYXIucG9zIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ3JlZW4tbGlnaHQxO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgcC1wcm9ncmVzc2Jhci5wb3IgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICR5ZWxsb3cxO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3Qge1xyXG4gICAgLnRhYmxlIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAud29ya09yZGVyIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZW5naW5lZXJpbmdEYXRhIHtcclxuICAgICAgICB3aWR0aDogMjIuNSU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mbGVldERhdGEge1xyXG4gICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zY2hlZHVsaW5nRGF0YSB7XHJcbiAgICAgICAgd2lkdGg6IDE3LjUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXhlY3V0aW9uRGF0YSB7XHJcbiAgICAgICAgd2lkdGg6IDE3LjUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaWxsdXN0cmF0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTIuNSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFibGUtYm9keSxcclxuICAgICAgLnRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgLnRhYmxlLWNlbGwge1xyXG4gICAgICAgICAgcGFkZGluZzogMCBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWJsZS1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB0b3A6ICR0b3BiYXItaGVpZ2h0O1xyXG5cclxuICAgICAgICAudGFibGUtcm93IHtcclxuICAgICAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAkdGFibGUtaGVhZGVyLWhlaWdodDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6ICR0YWJsZS1oZWFkZXItaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYmxlLWFjdGlvbnMge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgICAucm93LWFjdGlvbnMge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgICAgJiA+IC5hdy1idG4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhYmxlLWZpbHRlcnMge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAgICAgJiA+IC5hdy1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhYmxlLWdsb2JhbC1maWx0ZXIge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG5cclxuICAgICAgICAgICAgLmdsb2JhbC1maWx0ZXItaW5wdXQge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEycmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMnJlbTtcclxuXHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dCwgd2lkdGggMC41cyBlYXNlO1xyXG5cclxuICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFibGUtYm9keSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNSk7XHJcblxyXG4gICAgICAgIC50YWJsZS1yb3cge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZSAwO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGFjY2VudC1jb2xvciwgNjUlKTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbGlnaHRlbigkYWNjZW50LWNvbG9yLCA2NSUpO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogY2FsYygyICogI3skYm9yZGVyLXdpZHRofSkgJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IGNhbGMoMiAqICN7JGJvcmRlci13aWR0aH0pICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogY2FsYygyICogI3skYm9yZGVyLXdpZHRofSkgJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50YWJsZS1jZWxsIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgICAgICAgICYuaWxsdXN0cmF0aW9uIGltZyB7XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogNnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhvcml6b250YWwtc2VwYXJhdG9yIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hZGRpdGlvbmFsLWRhdGEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGFiZWwgKyAudmFsdWUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRlc2lnbmF0aW9uIHtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYmxlLXJvdy1kZXRhaWxzIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcblxyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogY2FsYygyICogI3skYm9yZGVyLXdpZHRofSkgJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IGNhbGMoMiAqICN7JGJvcmRlci13aWR0aH0pICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogY2FsYygyICogI3skYm9yZGVyLXdpZHRofSkgJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlci13aWR0aCBkYXNoZWQgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICAgLnRhYmxlLXJvdy1kZXRhaWxzLWhlYWRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICRtYXJnaW4tdmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucm93Lm5vd3JhcCB7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC50cmVlLXRhYmxlLWNlbGwge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAmLmlsbHVzdHJhdGlvbiBpbWcge1xyXG4gICAgICBtYXgtaGVpZ2h0OiA2cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFsLXNlcGFyYXRvciB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkaXRpb25hbC1kYXRhIHtcclxuICAgICAgbWFyZ2luLXRvcDogJG1hcmdpbi12YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWwge1xyXG4gICAgICBtaW4td2lkdGg6IDIuNXJlbTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYWJlbCArIC52YWx1ZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAudmFsdWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzaWduYXRpb24ge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIC8qICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9ICovXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLnNtYWxsLWNhbGVuZGFyIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuc21hbGwtY2FsZW5kYXIgLnVpLWNhbGVuZGFyIC51aS1pbnB1dHRleHQge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlLWZpbHRlcnMtb3ZlcmxheSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgIC5maWx0ZXJzIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgICYgPiAqIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFV0aWxzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBidXR0b24tY29sb3IoJGJhY2tncm91bmQtY29sb3IsICRjb2xvciwgJGJvcmRlci1jb2xvcjogbnVsbCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIsXHJcbiAgJjpub3QoOmRpc2FibGVkKS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpZigkYm9yZGVyLWNvbG9yID09IG51bGwsICRjb2xvciwgJGJvcmRlci1jb2xvcik7XHJcbiAgICBjb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleC1jb2x1bW4oKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1yb3coKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQoKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuXHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWRpc2FibGVkKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWRpc2FibGVkO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1mb2N1cygpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxufVxyXG5cclxuQG1peGluIGlucHV0LWhvdmVyKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VhcmNoLWNyaXRlcmlhLWNvbnRhaW5lciB7XHJcbiAgLmFkdmFuY2VkLWNyaXRlcmlhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtY3JpdGVyaWEtZm9vdGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAuYXctYnRuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlY3Rpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiA0KTtcclxuXHJcbiAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgJi5yZXF1aXJlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkKCk7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hbGVydCB7XHJcbiAgICAgICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICYgPiBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LW92ZXJmbG93LWhpZGRlbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdyaWQgZm9ybSBjb250cm9scyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJNZWRpdW1cIjtcclxuXHJcbiAgJiA+IGlucHV0ICsgcC1tZXNzYWdlID4gLnVpLW1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpmb2N1cyxcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDI1NSwgMjU1LCAyNTUpIDYwJSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgIC5hdy1pY29uIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4sXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0biB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcblxyXG4gICAgICAmLmF3LWNhbGVuZGFyIC51aS1pbnB1dHRleHQsXHJcbiAgICAgICYuYXctZHJvcGRvd24gLnVpLWRyb3Bkb3duLFxyXG4gICAgICAmLmF3LWlucHV0LFxyXG4gICAgICAmLmF3LXRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1jYWxlbmRhciB7XHJcbiAgICAgIC8vIEZJWE1FOiBmaXggYW4gVUkgaXNzdWUgb24gUHJpbWVORyBjYWxlbmRhciBjb21wb25lbnQ7IHRvIHJlbW92ZSB3aGVuIGlzc3VlIHdpbGwgYmUgZml4ZWQgdXBzdHJlYW1cclxuICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAgIC5hdy1pY29uOm5vdCgucmVhZC1vbmx5LWxpbmspIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgLy8gbm9uZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udHJvbC1kYXRhIHtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tbmltcCxcclxuICAgIC5idG4tZXh0ZXJuYWwtbGluay13cmFwcGVyLFxyXG4gICAgLmJ0bi1jbGVhci13cmFwcGVyLFxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyLFxyXG4gICAgLmJ0bi1zZWFyY2gtd3JhcHBlciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlciB7XHJcbiAgICAgIC5hdy1maWxldXBsb2FkIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51aS1idXR0b24ge1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlOTM0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tY2xlYXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tc2VhcmNoIHtcclxuICAgICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1yYWRpb2J1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICYgPiAuYXctcmFkaW9idXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMiAqICN7JG1hcmdpbi12YWx1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLWdlbmVyaWMge1xyXG4gIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG5cclxuICAmID4gYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IC5hbGVydCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcblxyXG4gICAgJi5hbGVydC0tbm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNhbGVuZGFyIHtcclxuICAmLnVpLWlucHV0d3JhcHBlci1mb2N1cyB7XHJcbiAgICAudWktY2FsZW5kYXIgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1peGluIGdyaWQtY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRjaGVja2JveC1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRjaGVja2JveC1oZWlnaHQ7XHJcblxyXG4gIC51aS1jaGtib3gge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLWNoa2JveC1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1kcm9wZG93biB7XHJcbiAgLnVpLWRyb3Bkb3duIHtcclxuICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWZvY3VzIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uLFxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbiB7XHJcbiAgICAgIHJpZ2h0OiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgQGluY2x1ZGUgdGV4dC1vdmVyZmxvdy1oaWRkZW4oKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyICogMS43NXJlbSk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZpeGVkLXdpZHRoIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZmlsZXVwbG9hZCB7XHJcbiAgQGV4dGVuZCAuYXctYnRuO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICAudWktZmlsZXVwbG9hZC1jaG9vc2Uge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAwICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1idXR0b24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtaW5wdXQoKSB7XHJcbiAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRleHRhcmVhIHtcclxuICBAaW5jbHVkZSBncmlkLWlucHV0KCk7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi1oZWlnaHQ6ICRmb3JtLWNvbnRyb2wtaGVpZ2h0O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXJhZGlvYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG4gIHdpZHRoOiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG5cclxuICAudWktcmFkaW9idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLXJhZGlvYnV0dG9uLWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcblxyXG4gICAgICAgIC51aS1yYWRpb2J1dHRvbi1pY29uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gY2FsZW5kYXItcGFuZWwge1xyXG4gIC51aS1kYXRlcGlja2VyOm5vdCgudWktZGF0ZXBpY2tlci1pbmxpbmUpIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRyb3Bkb3duLXBhbmVsIHtcclxuICAudWktZHJvcGRvd24tcGFuZWwge1xyXG4gICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuICAgIC51aS1kcm9wZG93bi1pdGVtcy13cmFwcGVyIC51aS1kcm9wZG93bi1saXN0IHtcclxuICAgICAgLnVpLWRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnVpLXN0YXRlLWhpZ2hsaWdodCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5ncmlkLWNlbGwtc2VhcmNoIC5zZWFyY2gtYWN0aW9ucyBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogOHB4OyB9XG4gIDpob3N0IC5ncmlkLWNlbGwtc2VhcmNoIC5zZWFyY2gtYWN0aW9ucyBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cblxuOmhvc3QgOjpuZy1kZWVwIHAtcHJvZ3Jlc3NiYXIucGxhIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gIGJhY2tncm91bmQ6ICNjOGQ0ZDY7IH1cblxuOmhvc3QgOjpuZy1kZWVwIHAtcHJvZ3Jlc3NiYXIub25nIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gIGJhY2tncm91bmQ6ICNiOGQwZTg7IH1cblxuOmhvc3QgOjpuZy1kZWVwIHAtcHJvZ3Jlc3NiYXIudGJjIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gIGJhY2tncm91bmQ6ICNiOGQwZTg7IH1cblxuOmhvc3QgOjpuZy1kZWVwIHAtcHJvZ3Jlc3NiYXIucGVyIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gIGJhY2tncm91bmQ6ICMwMDZlYTk7IH1cblxuOmhvc3QgOjpuZy1kZWVwIHAtcHJvZ3Jlc3NiYXIuY2xvIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gIGJhY2tncm91bmQ6ICM0Y2FmNTA7IH1cblxuOmhvc3QgOjpuZy1kZWVwIHAtcHJvZ3Jlc3NiYXIucG9zIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gIGJhY2tncm91bmQ6ICM0Y2FmNTA7IH1cblxuOmhvc3QgOjpuZy1kZWVwIHAtcHJvZ3Jlc3NiYXIucG9yIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gIGJhY2tncm91bmQ6ICNkZGRmMDA7IH1cblxuOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTsgfVxuICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLndvcmtPcmRlciB7XG4gICAgd2lkdGg6IDIwJTsgfVxuICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLmVuZ2luZWVyaW5nRGF0YSB7XG4gICAgd2lkdGg6IDIyLjUlOyB9XG4gIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAuZmxlZXREYXRhIHtcbiAgICB3aWR0aDogMTAlOyB9XG4gIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAuc2NoZWR1bGluZ0RhdGEge1xuICAgIHdpZHRoOiAxNy41JTsgfVxuICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLmV4ZWN1dGlvbkRhdGEge1xuICAgIHdpZHRoOiAxNy41JTsgfVxuICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLmlsbHVzdHJhdGlvbiB7XG4gICAgd2lkdGg6IDEyLjUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLWNlbGwsXG4gIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIC50YWJsZS1jZWxsIHtcbiAgICBwYWRkaW5nOiAwIGNhbGMoOHB4IC8gMik7IH1cbiAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDQwcHg7IH1cbiAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciAudGFibGUtcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1OTU5NTk7XG4gICAgICBtYXgtaGVpZ2h0OiAyNHB4O1xuICAgICAgbWluLWhlaWdodDogMjRweDsgfVxuICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIC50YWJsZS1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDsgfVxuICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIgLnRhYmxlLWFjdGlvbnMgLnJvdy1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XG4gICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIC50YWJsZS1hY3Rpb25zIC5yb3ctYWN0aW9ucyA+IC5hdy1idG4ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7IH1cbiAgICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciAudGFibGUtYWN0aW9ucyAucm93LWFjdGlvbnMgPiAuYXctYnRuOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7IH1cbiAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIC50YWJsZS1hY3Rpb25zIC50YWJsZS1maWx0ZXJzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cbiAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIgLnRhYmxlLWFjdGlvbnMgLnRhYmxlLWZpbHRlcnMgPiAuYXctaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgICB3aWR0aDogMnJlbTsgfVxuICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIgLnRhYmxlLWFjdGlvbnMgLnRhYmxlLWdsb2JhbC1maWx0ZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNSU7IH1cbiAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIgLnRhYmxlLWFjdGlvbnMgLnRhYmxlLWdsb2JhbC1maWx0ZXIgLmdsb2JhbC1maWx0ZXItaW5wdXQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM1OTU5NTk7XG4gICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDJweCAwIDRweCAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMnJlbTtcbiAgICAgICAgICB3aWR0aDogMTJyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dCwgd2lkdGggMC41cyBlYXNlOyB9XG4gICAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIgLnRhYmxlLWFjdGlvbnMgLnRhYmxlLWdsb2JhbC1maWx0ZXIgLmdsb2JhbC1maWx0ZXItaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwOyB9XG4gICAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIgLnRhYmxlLWFjdGlvbnMgLnRhYmxlLWdsb2JhbC1maWx0ZXIgLmdsb2JhbC1maWx0ZXItaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciAudGFibGUtYWN0aW9ucyAudGFibGUtZ2xvYmFsLWZpbHRlciAuZ2xvYmFsLWZpbHRlci1pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciAudGFibGUtYWN0aW9ucyAudGFibGUtZ2xvYmFsLWZpbHRlciAuZ2xvYmFsLWZpbHRlci1pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwOyB9XG4gICAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIgLnRhYmxlLWFjdGlvbnMgLnRhYmxlLWdsb2JhbC1maWx0ZXIgLmdsb2JhbC1maWx0ZXItaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAxNTc5YjtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgfVxuICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkge1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoOHB4ICogNSk7IH1cbiAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogOHB4IDA7IH1cbiAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtcm93OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDsgfVxuICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1yb3cuc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmNWZmO1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZTlmNWZmO1xuICAgICAgICBib3JkZXItbGVmdDogY2FsYygyICogMXB4KSBzb2xpZCAjNTk1OTU5O1xuICAgICAgICBib3JkZXItcmlnaHQ6IGNhbGMoMiAqIDFweCkgc29saWQgIzU5NTk1OTtcbiAgICAgICAgYm9yZGVyLXRvcDogY2FsYygyICogMXB4KSBzb2xpZCAjNTk1OTU5OyB9XG4gICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdyAudGFibGUtY2VsbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1yb3cgLnRhYmxlLWNlbGwuaWxsdXN0cmF0aW9uIGltZyB7XG4gICAgICAgICAgbWF4LWhlaWdodDogNnJlbTsgfVxuICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdyAudGFibGUtY2VsbCAuaG9yaXpvbnRhbC1zZXBhcmF0b3Ige1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTsgfVxuICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdyAudGFibGUtY2VsbCAuYWRkaXRpb25hbC1kYXRhIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1yb3cgLnRhYmxlLWNlbGwgLmxhYmVsIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDIuNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1yb3cgLnRhYmxlLWNlbGwgLmxhYmVsICsgLnZhbHVlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7IH1cbiAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1yb3cgLnRhYmxlLWNlbGwgLnZhbHVlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdyAudGFibGUtY2VsbCAuZGVzaWduYXRpb24ge1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxuICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdyAudGFibGUtY2VsbCBhIHtcbiAgICAgICAgICBjb2xvcjogIzAxNTc5YjsgfVxuICAgICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtcm93IC50YWJsZS1jZWxsIGE6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cbiAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdy1kZXRhaWxzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYm9yZGVyLWJvdHRvbTogY2FsYygyICogMXB4KSBzb2xpZCAjNTk1OTU5O1xuICAgICAgYm9yZGVyLWxlZnQ6IGNhbGMoMiAqIDFweCkgc29saWQgIzU5NTk1OTtcbiAgICAgIGJvcmRlci1yaWdodDogY2FsYygyICogMXB4KSBzb2xpZCAjNTk1OTU5O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjNTk1OTU5O1xuICAgICAgcGFkZGluZzogOHB4OyB9XG4gICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdy1kZXRhaWxzIC50YWJsZS1yb3ctZGV0YWlscy1oZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cblxuOmhvc3QgLnJvdy5ub3dyYXAge1xuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50OyB9XG5cbjpob3N0IDo6bmctZGVlcCAudHJlZS10YWJsZS1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnRyZWUtdGFibGUtY2VsbC5pbGx1c3RyYXRpb24gaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiA2cmVtOyB9XG4gIDpob3N0IDo6bmctZGVlcCAudHJlZS10YWJsZS1jZWxsIC5ob3Jpem9udGFsLXNlcGFyYXRvciB7XG4gICAgbWFyZ2luLWxlZnQ6IDIlOyB9XG4gIDpob3N0IDo6bmctZGVlcCAudHJlZS10YWJsZS1jZWxsIC5hZGRpdGlvbmFsLWRhdGEge1xuICAgIG1hcmdpbi10b3A6IDhweDsgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnRyZWUtdGFibGUtY2VsbCAubGFiZWwge1xuICAgIG1pbi13aWR0aDogMi41cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnRyZWUtdGFibGUtY2VsbCAubGFiZWwgKyAudmFsdWUge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTsgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnRyZWUtdGFibGUtY2VsbCAudmFsdWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG4gIDpob3N0IDo6bmctZGVlcCAudHJlZS10YWJsZS1jZWxsIC5kZXNpZ25hdGlvbiB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IH1cbiAgOmhvc3QgOjpuZy1kZWVwIC50cmVlLXRhYmxlLWNlbGwgYSB7XG4gICAgY29sb3I6ICMwMTU3OWI7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIC8qICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9ICovIH1cblxuOmhvc3QgOjpuZy1kZWVwIC5zbWFsbC1jYWxlbmRhciAudWktY2FsZW5kYXIge1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDsgfVxuXG46aG9zdCA6Om5nLWRlZXAgLnNtYWxsLWNhbGVuZGFyIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9XG5cbjpob3N0IC50YWJsZS1maWx0ZXJzLW92ZXJsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIDpob3N0IC50YWJsZS1maWx0ZXJzLW92ZXJsYXkgLmZpbHRlcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIDpob3N0IC50YWJsZS1maWx0ZXJzLW92ZXJsYXkgLmZpbHRlcnMgPiAqIHtcbiAgICAgIG1hcmdpbi10b3A6IDhweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/work-order-list/form/work-order-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/work-order-list/form/work-order-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WorkOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderListComponent", function() { return WorkOrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _main_maintenance_work_package_form_work_order_table_filters_work_order_table_filters_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.service */ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.service.ts");
/* harmony import */ var _main_maintenance_work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../main/maintenance/work-package/form/work-package-form.service */ "./src/app/main/maintenance/work-package/form/work-package-form.service.ts");
/* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants/bido-evolution-constants */ "./src/app/shared/constants/bido-evolution-constants.ts");
/* harmony import */ var _constants_component_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/file.service */ "./src/app/shared/services/file.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/page.service */ "./src/app/shared/services/page.service.ts");
/* harmony import */ var _services_serialization_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _services_tab_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _types_generic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../types/generic-component */ "./src/app/shared/types/generic-component.ts");
/* harmony import */ var _utils_file_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _utils_list_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _work_order_list_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./work-order-list.service */ "./src/app/shared/components/work-order-list/form/work-order-list.service.ts");
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
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};






















var WorkOrderListComponent = /** @class */ (function (_super) {
    __extends(WorkOrderListComponent, _super);
    function WorkOrderListComponent(messageService, serializationService, tabService, workOrdersFormService, wpFormService, workOrderTableFiltersService, confirmationService, pageService, translateService, fileService) {
        var _this = _super.call(this, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Write) || this;
        _this.messageService = messageService;
        _this.serializationService = serializationService;
        _this.tabService = tabService;
        _this.workOrdersFormService = workOrdersFormService;
        _this.wpFormService = wpFormService;
        _this.workOrderTableFiltersService = workOrderTableFiltersService;
        _this.confirmationService = confirmationService;
        _this.pageService = pageService;
        _this.translateService = translateService;
        _this.fileService = fileService;
        _this.hideTableActions = false;
        _this.showSaveSpinner = false;
        _this.statusLabels = [];
        _this.isLoadingWorkOrderTable = false;
        _this.filtersVisible = false;
        _this.workOrderCount = 0;
        _this.filterActivatedList = [];
        _this.woCriteriaStatusList = [];
        _this.woCriteriaTypeList = [];
        _this.assignedToFilterList = new Set();
        _this.assetFilterList = new Set();
        _this.zoneFilterList = new Set();
        _this.qualificationList = new Set();
        _this.initStatusLabel();
        _this.editWorkOrder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.addWorkOrder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.updateSchadulingEdition = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.transferOfWO = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.componentOpenMode = _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"];
        _this.awPropertiesConstants = _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"];
        return _this;
    }
    WorkOrderListComponent_1 = WorkOrderListComponent;
    Object.defineProperty(WorkOrderListComponent.prototype, "workPackage", {
        get: function () {
            return this._workPackage;
        },
        set: function (workPackageData) {
            this._workPackage = workPackageData;
            this.init();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkOrderListComponent.prototype, "workOrderInputList", {
        get: function () {
            return this._workOrderInputList;
        },
        set: function (workOrderInputList) {
            this._workOrderInputList = workOrderInputList;
            this.init();
        },
        enumerable: true,
        configurable: true
    });
    WorkOrderListComponent.prototype.getComponentName = function () {
        return _constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].MAI_WORK_ORDERS_FORM;
    };
    WorkOrderListComponent.prototype.init = function () {
        var _this = this;
        if (this.hideWOTableAction !== undefined && this.hideWOTableAction) {
            this.hideTableActions = true;
        }
        this.workOrderTable = [];
        this.selectedWorkOrders = [];
        this.filterActivatedList = [];
        if (!!this.workPackage) {
            this.projectId = this.workPackage.projectId || '';
        }
        this.workOrdersFormService.loadMROCenterList().subscribe(function (result) {
            _this.mroCenterList = result;
        });
        this.setGlobalFilter();
        this.initWorkOrderTableFilters();
        this.initWorkOrderTableCols();
        this.loadLists();
        this.loadWorkOrders();
    };
    WorkOrderListComponent.prototype.ngOnInit = function () {
        if (this.mainPageOpenMode === undefined) {
            this.mainPageOpenMode = _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Write;
        }
    };
    // DATA LOADING
    WorkOrderListComponent.prototype.loadWorkOrders = function () {
        var _this = this;
        this.selectedWorkOrders = [];
        this.isLoadingWorkOrderTable = true;
        if (!!this.workPackage) {
            this.wpFormService.getBidmWorkOrdersStructureByProject(this.projectId).subscribe(function (woList) {
                _this.workOrderInitialTable = __spread(woList);
                _this.workOrderInitialTable.forEach(function (wo) { return _this.loadIllustrations(wo.data); });
                _this.workOrderList = _this.flatDeep(woList);
                _this.updateWorkOrderTable();
                _this.initFilterLists();
                _this.isLoadingWorkOrderTable = false;
            });
        }
        else if (!!this.workOrderInputList) {
            this.wpFormService.getBidmWorkOrdersStructure(this.workOrderInputList).subscribe(function (woList) {
                _this.workOrderInitialTable = __spread(woList);
                _this.workOrderInitialTable.forEach(function (wo) { return _this.loadIllustrations(wo.data); });
                _this.workOrderList = _this.flatDeep(woList);
                _this.updateWorkOrderTable();
                _this.initFilterLists();
                _this.isLoadingWorkOrderTable = false;
            });
        }
    };
    WorkOrderListComponent.prototype.flatDeep = function (tree) {
        var _this = this;
        return tree.reduce(function (acc, val) { return __spread(acc, (val ? [val.data] : []), (val.children ? _this.flatDeep(val.children) : [])); }, []);
    };
    WorkOrderListComponent.prototype.loadLists = function () {
        var _this = this;
        this.wpFormService.woStatusList$.subscribe(function (list) {
            _this.woStatusList = list;
            _this.workOrderTableCriteria.statusList = _this.woStatusList.map(function (status) { return status.value; });
            _this.woCriteriaStatusList = _this.workOrderTableCriteria.statusList;
            var removedStatuses = [_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_LINE_MAINTENANCE];
            _this.statusList = list.filter(function (status) { return !removedStatuses.includes(status.value); });
        });
        this.wpFormService.woTypeList$.subscribe(function (list) {
            _this.woTypeList = list;
            _this.workOrderTableCriteria.woTypeList = _this.woTypeList.map(function (woType) { return woType.value; });
            _this.woCriteriaTypeList = _this.workOrderTableCriteria.woTypeList;
        });
    };
    WorkOrderListComponent.prototype.loadIllustrations = function (workOrderRow) {
        var _this = this;
        var workOrder = workOrderRow.bidmWorkOrder;
        var equipment = workOrderRow.bidoEquipmentData;
        if (workOrder && equipment) {
            if (!!workOrder.bireItemChapter &&
                !!workOrder.bireItemSection &&
                !!workOrder.bireItemSubject &&
                !!workOrder.bireItemSheet &&
                !!workOrder.bireItemMarks) {
                var bireItemDtoId = {
                    familyCode: workOrder.bireItemFamilyCode,
                    variantCode: workOrder.bireItemVariantCode,
                    chapter: workOrder.bireItemChapter,
                    section: workOrder.bireItemSection,
                    subject: workOrder.bireItemSubject,
                    sheet: workOrder.bireItemSheet,
                    marks: workOrder.bireItemMarks,
                    structureType: _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].STRUCTURE_TYPE_IPC_KEY
                };
                if (equipment.equipmentCode) {
                    this.fileService.findIllustration(bireItemDtoId, equipment).subscribe(function (illustrationDocument) {
                        if (illustrationDocument) {
                            workOrderRow.materialIllustration = _this.fileService.sanitizeAndGetBase64Prefix(illustrationDocument);
                        }
                        // Refresh view with illustations
                        _this.updateWorkOrderTable();
                        _this.initWorkOrderTableCols();
                    });
                }
            }
        }
    };
    // TABLE COLUMNS HANDLING
    WorkOrderListComponent.prototype.initWorkOrderTableCols = function () {
        if (this.hasIllustration(this.workOrderTable)) {
            this.workOrderTableCols = [
                { field: 'workOrder', alignment: 'left', width: '20%' },
                { field: 'engineeringData', alignment: 'left', width: '20%' },
                { field: 'fleetData', alignment: 'left', width: '10%' },
                { field: 'schedulingData', alignment: 'left', width: '15%' },
                { field: 'executionData', alignment: 'left', width: '15%' },
                { field: 'componentCockpitText', alignment: 'left', width: '10%' },
                { field: 'illustration', alignment: 'center', width: '10%' }
            ];
        }
        else {
            this.workOrderTableCols = [
                { field: 'workOrder', alignment: 'left', width: '22.5%' },
                { field: 'engineeringData', alignment: 'left', width: '20%' },
                { field: 'fleetData', alignment: 'left', width: '12.5%' },
                { field: 'schedulingData', alignment: 'left', width: '17.5%' },
                { field: 'executionData', alignment: 'left', width: '17.5%' },
                { field: 'componentCockpitText', alignment: 'left', width: '10%' }
            ];
        }
    };
    WorkOrderListComponent.prototype.hasIllustration = function (workOrderTable) {
        var _this = this;
        return (!!workOrderTable &&
            !!workOrderTable.find(function (node) {
                return !!node.data.materialIllustration || _this.hasIllustration(node.children);
            }));
    };
    // FILTERS HANDLING
    WorkOrderListComponent.prototype.initWorkOrderTableFilters = function () {
        this.workOrderTableCriteria = {
            statusList: this.woCriteriaStatusList,
            woTypeList: this.woCriteriaTypeList,
            assignedTo: '',
            qualification: '',
            asset: '',
            zone: ''
        };
    };
    WorkOrderListComponent.prototype.resetWorkOrderTableFilters = function () {
        this.initWorkOrderTableFilters();
        this.updateWorkOrderTable();
    };
    WorkOrderListComponent.prototype.searchGlobalFilterChange = function (searchGlobalFilter) {
        this.searchGlobalFilter = searchGlobalFilter;
        this.searchGlobalFilter$.next(searchGlobalFilter);
    };
    WorkOrderListComponent.prototype.setGlobalFilter = function () {
        var _this = this;
        this.searchGlobalFilter = '';
        this.searchGlobalFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchGlobalFilter$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(WorkOrderListComponent_1.SEARCH_TEXT_DEBOUNCE_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe))
            .subscribe(function () { return _this.updateWorkOrderTable(); });
    };
    WorkOrderListComponent.prototype.updateWorkOrderTable = function () {
        var _this = this;
        this.workOrderTable = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.workOrderInitialTable).filter(function (node) {
            return _this.treeNodeMatchFilters(node, _this.searchGlobalFilter);
        });
        this.filterActivatedList = __spread(this.getChipFilters('statusList', this.woStatusList), this.getChipFilters('woTypeList', this.woTypeList), this.getChipFilter('assignedTo'), this.getChipFilter('qualification'), this.getChipFilter('asset'), this.getChipFilter('zone'));
        this.initWorkOrderTableCols();
    };
    WorkOrderListComponent.prototype.getChipFilters = function (listName, filterList) {
        var _this = this;
        var filterCriteria = this.workOrderTableCriteria[listName];
        return filterList
            .filter(function (_a) {
            var value = _a.value;
            return filterCriteria.includes(value);
        })
            .map(function (item) {
            return {
                value: !!item.label ? item.label : '',
                action: function () {
                    _this.workOrderTableCriteria[listName] = filterCriteria.filter(function (elem) { return elem !== item.value; });
                    _this.updateWorkOrderTable();
                }
            };
        });
    };
    WorkOrderListComponent.prototype.getChipFilter = function (filterName) {
        var _this = this;
        var filterValue = this.workOrderTableCriteria[filterName];
        return !filterValue
            ? []
            : [
                {
                    value: filterValue,
                    action: function () {
                        _this.workOrderTableCriteria[filterName] = '';
                        _this.updateWorkOrderTable();
                    }
                }
            ];
    };
    WorkOrderListComponent.prototype.treeNodeMatchFilters = function (node, searchText) {
        var _this = this;
        if (!_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__["ListUtils"].isNullOrEmpty(node.children)) {
            node.children = node.children.filter(function (child) { return _this.treeNodeMatchFilters(child, searchText); });
        }
        var nodeData = node.data;
        // Description
        var descriptionMatch = _utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isNullOrEmpty(searchText) || nodeData.description.toLowerCase().includes(searchText);
        // Code
        var codeMatch = _utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isNullOrEmpty(searchText) || nodeData.code.toLowerCase().includes(searchText);
        // Status
        var statusMatch = true;
        if (!_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__["ListUtils"].isNullOrEmpty(this.workOrderTableCriteria.statusList)) {
            statusMatch = this.workOrderTableCriteria.statusList.includes(nodeData.status);
        }
        // AssignedTo
        var assignedToMatch = _utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isNullOrEmpty(this.workOrderTableCriteria.assignedTo) ||
            this.workOrderTableCriteria.assignedTo === nodeData.assignedTo;
        // Asset
        var assetMatch = _utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isNullOrEmpty(this.workOrderTableCriteria.asset) ||
            this.workOrderTableCriteria.asset === nodeData.asset;
        // Zone
        var zoneMatch = _utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isNullOrEmpty(this.workOrderTableCriteria.zone) || this.workOrderTableCriteria.zone === nodeData.zone;
        // Qualification
        var qualificationMatch = _utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isNullOrEmpty(this.workOrderTableCriteria.qualification) ||
            this.workOrderTableCriteria.qualification === nodeData.qualification;
        // Type
        var woTypeMatch = true;
        if (!_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__["ListUtils"].isNullOrEmpty(this.workOrderTableCriteria.woTypeList)) {
            woTypeMatch = !!nodeData.type && this.workOrderTableCriteria.woTypeList.includes(nodeData.woType);
        }
        return (_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__["ListUtils"].orEmpty(node.children).length > 0 ||
            ((codeMatch || descriptionMatch) &&
                statusMatch &&
                assignedToMatch &&
                assetMatch &&
                zoneMatch &&
                qualificationMatch &&
                woTypeMatch));
    };
    WorkOrderListComponent.prototype.initFilterLists = function () {
        var e_1, _a;
        this.assignedToFilterList.clear();
        this.assetFilterList.clear();
        this.zoneFilterList.clear();
        this.qualificationList.clear();
        try {
            for (var _b = __values(this.workOrderInitialTable), _c = _b.next(); !_c.done; _c = _b.next()) {
                var wo = _c.value;
                this.treeNodeFilterListsCreation(wo);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.workOrderTableFiltersService.assignedToFilterList = this.assignedToFilterList;
        this.workOrderTableFiltersService.assetFilterList = this.assetFilterList;
        this.workOrderTableFiltersService.zoneFilterList = this.zoneFilterList;
        this.workOrderTableFiltersService.qualificationList = this.qualificationList;
    };
    WorkOrderListComponent.prototype.treeNodeFilterListsCreation = function (node) {
        var e_2, _a;
        if (!_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__["ListUtils"].isNullOrEmpty(node.children) && node.children !== undefined) {
            try {
                for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var children = _c.value;
                    this.treeNodeFilterListsCreation(children);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        var nodeData = node.data;
        if (!!nodeData.assignedTo) {
            this.assignedToFilterList.add(nodeData.assignedTo);
        }
        if (!!nodeData.asset) {
            this.assetFilterList.add(nodeData.asset);
        }
        if (!!nodeData.zone) {
            this.zoneFilterList.add(nodeData.zone);
        }
        if (!!nodeData.qualification) {
            this.qualificationList.add(nodeData.qualification);
        }
    };
    // WORK ORDER TABLE LINKS HANDLER
    WorkOrderListComponent.prototype.getBidmWOFromTreeNodes = function (woNodes) {
        var _this = this;
        return woNodes.map(function (node) {
            var nodeData = node.data;
            return {
                projectId: _this.projectId,
                woId: _utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].orEmpty(nodeData.woId)
            };
        });
    };
    WorkOrderListComponent.prototype.openSelectedWorkOrders = function (curWorkOrder) {
        var e_3, _a;
        var woTreeNodeList = curWorkOrder ? [{ data: curWorkOrder }] : this.selectedWorkOrders;
        var woList = this.getBidmWOFromTreeNodes(woTreeNodeList);
        try {
            for (var woList_1 = __values(woList), woList_1_1 = woList_1.next(); !woList_1_1.done; woList_1_1 = woList_1.next()) {
                var wo = woList_1_1.value;
                var data = {
                    id: this.tabService.generateId(),
                    componentId: _constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].MAI_WORK_ORDER_FORM,
                    openMode: _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Write,
                    objectId: this.serializationService.serialize(wo)
                };
                var labelKey = 'transaction.' + data.componentId;
                this.tabService.open(this.tabService.create(data, labelKey, true));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (woList_1_1 && !woList_1_1.done && (_a = woList_1.return)) _a.call(woList_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    WorkOrderListComponent.prototype.editSelectedWorkOrder = function (curWorkOrder) {
        var woTreeNodeList = curWorkOrder ? [{ data: curWorkOrder }] : this.selectedWorkOrders;
        var woList = this.getBidmWOFromTreeNodes(woTreeNodeList);
        if (woList.length === 1 && !curWorkOrder) {
            var workOrderEditObject = {
                display: true,
                workOrderSelected: this.workOrderSelected = {
                    projectId: this.projectId,
                    woId: _utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].orEmpty(woList[0].woId)
                },
                workPackage: this.workPackage,
                workOrderList: this.workOrderList
            };
            this.editWorkOrder.emit(workOrderEditObject);
        }
    };
    WorkOrderListComponent.prototype.addWorkOrderDialog = function () {
        var workOrderEditObject = {
            display: true,
            workOrderSelected: undefined,
            workPackage: this.workPackage,
            workOrderList: this.workOrderList
        };
        this.addWorkOrder.emit(workOrderEditObject);
    };
    WorkOrderListComponent.prototype.openUpdateSchedulingDialog = function () {
        var updateSchedulingObject = {
            display: true,
            selectedWorkOrders: this.selectedWorkOrders
        };
        this.updateSchadulingEdition.emit(updateSchedulingObject);
    };
    WorkOrderListComponent.prototype.deleteSelectedWorkOrder = function () {
        var _this = this;
        var partialMessageKey = this.selectedWorkOrders.length > 1 ? 'confirmDeleteSelectedWOs' : 'confirmDeleteSelectedWO';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                var bidmWorkOrderDTOIdList = _this.getBidmWOFromTreeNodes(_this.selectedWorkOrders);
                _this.workOrdersFormService.removeBidmWorkOrderList(bidmWorkOrderDTOIdList).subscribe(function (result) {
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteWO'));
                    _this.loadWorkOrders();
                }, function (error) {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDeleteWO'));
                    _this.loadWorkOrders();
                });
            }
        });
    };
    // GLOBAL ACTIONS HANDLER
    WorkOrderListComponent.prototype.goToCalendar = function () {
        var labelKey = 'transaction.WorkOrdersCalendarFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'WorkOrdersCalendarFormComponent',
            openMode: _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read
        };
        if (!!this.workPackage) {
            data.objectId = this.serializationService.serialize(this.workPackage);
        }
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WorkOrderListComponent.prototype.printAllJobsCards = function () {
        var _this = this;
        this.showSaveSpinner = true;
        var workOrderIdList = [];
        this.workOrderList.forEach(function (wo) {
            if (wo.woId && wo.projectId) {
                var workOrderId = {
                    woId: wo.woId,
                    projectId: wo.projectId
                };
                workOrderIdList.push(workOrderId);
            }
        });
        this.workOrdersFormService.generateJobcards(workOrderIdList).subscribe({
            next: function (woCard) {
                _utils_file_utils__WEBPACK_IMPORTED_MODULE_18__["FileUtils"].downloadFile(woCard.fileContent, woCard.fileName);
                _this.showSaveSpinner = false;
            }
        });
    };
    WorkOrderListComponent.prototype.onReload = function () {
        this.init();
        this.loadLists();
        this.loadWorkOrders();
    };
    // WORK ORDER TABLE LINKS HANDLER
    WorkOrderListComponent.prototype.openSnLink = function (equipment) {
        if (equipment && equipment.equipmentCode) {
            this.pageService.openAsset(equipment.equipmentCode, equipment.equipmentFunction);
        }
    };
    WorkOrderListComponent.prototype.openPartNumberLink = function (pnCode) {
        this.openPN(pnCode, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read);
    };
    WorkOrderListComponent.prototype.openPN = function (objectId, openMode) {
        var labelKey = 'transaction.PartNumberFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'PartNumberFormComponent',
            objectId: objectId,
            openMode: openMode
        };
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WorkOrderListComponent.prototype.openWorkOrderLink = function (workOrder) {
        if (workOrder && workOrder.woId && workOrder.projectId) {
            var workOrderId = {
                woId: workOrder.woId,
                projectId: workOrder.projectId
            };
            this.openWorkOrder(workOrderId, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read);
        }
    };
    WorkOrderListComponent.prototype.openWorkOrder = function (wo, openModeWanted) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].MAI_WORK_ORDER_FORM,
            openMode: openModeWanted,
            objectId: this.serializationService.serialize(wo)
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WorkOrderListComponent.prototype.openSelectedGoodsMovement = function () {
        var _this = this;
        var woList = this.getBidmWOFromTreeNodes(this.selectedWorkOrders);
        woList.forEach(function (wo) {
            var goodsMovementInput = {
                workOrderId: wo.woId,
                workPackageId: wo.projectId
            };
            var data = {
                id: _this.tabService.generateId(),
                componentId: _constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_GOODS_MOVEMENT_WORK_ORDER_FORM,
                openMode: _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read,
                objectId: _this.serializationService.serialize(goodsMovementInput)
            };
            var labelKey = 'transaction.' + data.componentId;
            _this.tabService.open(_this.tabService.create(data, labelKey, true));
        });
    };
    WorkOrderListComponent.prototype.openItem = function (workOrder) {
        var woItemDTO = {
            familyCode: workOrder.bireItemFamilyCode,
            variantCode: workOrder.bireItemVariantCode,
            chapter: workOrder.bireItemChapter,
            section: workOrder.bireItemSection,
            subject: workOrder.bireItemSubject,
            sheet: workOrder.bireItemSheet,
            marks: workOrder.bireItemMarks,
            structureType: _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].STRUCTURE_TYPE_IPC_KEY
        };
        var data = {
            id: this.tabService.generateId(),
            componentId: _constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].ENG_ITEM_FORM,
            openMode: _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read
        };
        data.objectId = this.serializationService.serialize(woItemDTO);
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WorkOrderListComponent.prototype.consultWorkOrderOrigin = function (curWorkOrder) {
        var _this = this;
        var workOrder = curWorkOrder.bidmWorkOrder;
        var calculateWorkOrderImput = {
            workOrderData: curWorkOrder.bidmWorkOrder,
            workPackageAssetCode: this.workPackage.assetCode,
            fromLineMaintenance: false
        };
        this.workOrdersFormService.calculateWorkOrderStatus(calculateWorkOrderImput).subscribe(function (calculateWorkOrder) {
            var assetWorkOrderOriginInput = {
                woType: workOrder.woType,
                woSource: workOrder.woSource,
                evolutionType: calculateWorkOrder.evolutionType,
                familyVariantCode: curWorkOrder.familyVariantCode
            };
            _this.workOrdersFormService.findWorkOrderOriginDetails(assetWorkOrderOriginInput).subscribe(function (result) {
                if (_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_WORK_ORDER_TYPE_TASK === workOrder.woType) {
                    if (!!result.bireTaskDTOId) {
                        // open task form
                        var bireTaskDTO = result.bireTaskDTOId;
                        _this.pageService.openTask(bireTaskDTO);
                    }
                }
                else if (_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_WORK_ORDER_TYPE_EVOLUTION === workOrder.woType) {
                    if (_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_8__["BidoEvolutionConstants"].CODE_EVOLUTION === assetWorkOrderOriginInput.evolutionType) {
                        if (!!result.bireEvolutionDTOId) {
                            // open evolution form
                            var bireEvolutionDTOId = {
                                adSbModDTOId: result.bireEvolutionDTOId
                            };
                            _this.pageService.openEvolution(bireEvolutionDTOId);
                        }
                    }
                    else if (_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_8__["BidoEvolutionConstants"].CODE_AD === assetWorkOrderOriginInput.evolutionType) {
                        if (!!result.bireSbDTOId) {
                            // open Airworthiness Directive form
                            var bireSBDTOId = {
                                adSbModDTOId: result.bireSbDTOId
                            };
                            _this.pageService.openAD(bireSBDTOId);
                        }
                    }
                    else if (_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_8__["BidoEvolutionConstants"].CODE_SB === assetWorkOrderOriginInput.evolutionType) {
                        if (!!result.bireSbDTOId) {
                            // open Service Bulletin form
                            var bireSbDTOId = {
                                adSbModDTOId: result.bireSbDTOId
                            };
                            _this.pageService.openSB(bireSbDTOId);
                        }
                    }
                    else if (_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_8__["BidoEvolutionConstants"].CODE_MODIFICATION === assetWorkOrderOriginInput.evolutionType) {
                        if (!!result.bireModificationDTOId) {
                            // open modification form
                            var bireModificationDTOId = {
                                adSbModDTOId: result.bireModificationDTOId
                            };
                            _this.pageService.openModification(bireModificationDTOId);
                        }
                    }
                }
                else if (_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_WORK_ORDER_TYPE_DEFECT === assetWorkOrderOriginInput.woType) {
                    if (!!result.bidoNotificationDTOId) {
                        // open event form
                        _this.pageService.openEvent(result.bidoNotificationDTOId);
                    }
                }
                else if (_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_WORK_ORDER_TYPE_SN_CHANGE === assetWorkOrderOriginInput.woType) {
                    if (!!result.bidoEquipmentDTO) {
                        if (_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY === result.bidoEquipmentDTO.equipmentFunction) {
                            // open aircraft
                            _this.pageService.openAircraft(result.bidoEquipmentDTO.equipmentCode, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read);
                        }
                        else if (_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY === result.bidoEquipmentDTO.equipmentFunction) {
                            // open engine
                            _this.pageService.openEngine(result.bidoEquipmentDTO.equipmentCode);
                        }
                        else {
                            // open equipment
                            _this.pageService.openEquipment(result.bidoEquipmentDTO.equipmentCode);
                        }
                    }
                }
            });
        });
    };
    // REFERENCES UTILS
    WorkOrderListComponent.prototype.initStatusLabel = function () {
        var statusLabel = [];
        this.addValueLabel(statusLabel, _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_SIMULATED, 'simulated');
        this.addValueLabel(statusLabel, _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_RELEASED, 'released');
        this.addValueLabel(statusLabel, _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_PLANNED, 'planned');
        this.addValueLabel(statusLabel, _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_ONGOING, 'onGoing');
        this.addValueLabel(statusLabel, _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_PERFORMED, 'performed');
        this.addValueLabel(statusLabel, _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_TO_BE_CONFIRMED, 'toBeConfirm');
        this.addValueLabel(statusLabel, _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_CLOSE, 'close');
        this.addValueLabel(statusLabel, _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_POSTPONEMENT_REQUESTED, 'postPonementRequest');
        this.addValueLabel(statusLabel, _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_POSTPONED, 'postponed');
        this.statusLabels = statusLabel;
    };
    WorkOrderListComponent.prototype.addValueLabel = function (references, value, labelKeySuffix) {
        if (references) {
            references.push({
                value: value,
                label: this.translateService.instant(this.getTranslateKey(labelKeySuffix))
            });
        }
    };
    WorkOrderListComponent.prototype.getStatusLabel = function (value) {
        var labelValue = this.statusLabels.find(function (lv) { return lv.value === value; });
        return labelValue && labelValue.label;
    };
    /**
     * This method is used to check if Transfer WO is to be displayed or not.
     *
     * The conditions are as follow :
     * 1. If the selected WO has the status "released", a button "Transfer WO (s)" must appear. (see screenshot).
     * 2. If the selected WO isn't in "released" status, the "Transfer WO (s)" button must not appear.
     */
    WorkOrderListComponent.prototype.isTransferWOButtonVisible = function () {
        if (this.selectedWorkOrders.length === 0) {
            this.displayTransferButton = false;
        }
        else {
            var workOrders = this.selectedWorkOrders.filter(function (workOrder) { return workOrder.data.status !== _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_RELEASED; });
            if (workOrders.length === 0) {
                this.displayTransferButton = true;
            }
            else {
                this.displayTransferButton = false;
            }
        }
    };
    /**
     * This method is used to open the popup containing the list of work packages.
     */
    WorkOrderListComponent.prototype.openWorkPackagesList = function () {
        this.showWorkPackageListDialog = true;
    };
    /**
     *
     */
    WorkOrderListComponent.prototype.onTransferOfWO = function (workPackage) {
        this.transferOfWO.emit(workPackage);
    };
    /**
     * This method hide updateScheduling and Edit button on selection of Closed Work order.
     */
    WorkOrderListComponent.prototype.showUpdateEditButton = function () {
        var closedWorkOrder = this.selectedWorkOrders.find(function (workOrder) { return workOrder.data.status === _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_CLOSE; });
        if (!!closedWorkOrder) {
            return false;
        }
        else {
            return true;
        }
    };
    var WorkOrderListComponent_1;
    WorkOrderListComponent.SEARCH_TEXT_DEBOUNCE_TIME = 500;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], WorkOrderListComponent.prototype, "workPackage", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorkOrderListComponent.prototype, "hideWOTableAction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorkOrderListComponent.prototype, "mainPageOpenMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], WorkOrderListComponent.prototype, "workOrderInputList", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WorkOrderListComponent.prototype, "editWorkOrder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WorkOrderListComponent.prototype, "addWorkOrder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WorkOrderListComponent.prototype, "updateSchadulingEdition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WorkOrderListComponent.prototype, "transferOfWO", void 0);
    WorkOrderListComponent = WorkOrderListComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-work-order-list',
            template: __webpack_require__(/*! ./work-order-list.component.html */ "./src/app/shared/components/work-order-list/form/work-order-list.component.html"),
            styles: [__webpack_require__(/*! ./work-order-list.component.scss */ "./src/app/shared/components/work-order-list/form/work-order-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_13__["MessageService"],
            _services_serialization_service__WEBPACK_IMPORTED_MODULE_15__["SerializationService"],
            _services_tab_service__WEBPACK_IMPORTED_MODULE_16__["TabService"],
            _work_order_list_service__WEBPACK_IMPORTED_MODULE_21__["WorkOrderListService"],
            _main_maintenance_work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_6__["WorkPackageFormService"],
            _main_maintenance_work_package_form_work_order_table_filters_work_order_table_filters_service__WEBPACK_IMPORTED_MODULE_5__["WorkOrderTableFiltersService"],
            _services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmationService"],
            _services_page_service__WEBPACK_IMPORTED_MODULE_14__["PageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _services_file_service__WEBPACK_IMPORTED_MODULE_12__["FileService"]])
    ], WorkOrderListComponent);
    return WorkOrderListComponent;
}(_types_generic_component__WEBPACK_IMPORTED_MODULE_17__["GenericComponent"]));



/***/ }),

/***/ "./src/app/shared/components/work-order-list/form/work-order-list.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/work-order-list/form/work-order-list.service.ts ***!
  \***********************************************************************************/
/*! exports provided: WorkOrderListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderListService", function() { return WorkOrderListService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/aircraft-maintenance.api */ "./src/app/shared/api/aircraft-maintenance.api.ts");
/* harmony import */ var _api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/airworthiness-management.api */ "./src/app/shared/api/airworthiness-management.api.ts");
/* harmony import */ var _api_am_project_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/am-project-management.api */ "./src/app/shared/api/am-project-management.api.ts");
/* harmony import */ var _api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _utils_select_item_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
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











var WorkOrderListService = /** @class */ (function (_super) {
    __extends(WorkOrderListService, _super);
    function WorkOrderListService(http, appConfigService, airworthinessManagementApi, aircraftMaintenanceApi, amProjectManagementApi, fleetManagementApi, productStructureManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.airworthinessManagementApi = airworthinessManagementApi;
        _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
        _this.amProjectManagementApi = amProjectManagementApi;
        _this.fleetManagementApi = fleetManagementApi;
        _this.productStructureManagementApi = productStructureManagementApi;
        return _this;
    }
    /**************************************************************************
     * Aircraft management api
     *************************************************************************/
    WorkOrderListService.prototype.calculateWorkOrderStatus = function (workOrderDetailInput) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.calculateWorkOrderStatus, workOrderDetailInput);
    };
    WorkOrderListService.prototype.removeBidmWorkOrderList = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.removeBidmWorkOrderList, input);
    };
    WorkOrderListService.prototype.updateBidmWorkOrders = function (bidmWorkOrderList) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.updateBidmWorkOrders, bidmWorkOrderList);
    };
    /**************************************************************************
     * AM project management api
     *************************************************************************/
    WorkOrderListService.prototype.generateJobcards = function (workOrderIdList) {
        return _super.prototype.post.call(this, this.amProjectManagementApi.generateJobcards, workOrderIdList);
    };
    /**************************************************************************
     * Fleet management api
     *************************************************************************/
    WorkOrderListService.prototype.findBidoEquipmentById = function (bidoEquipementDtoId) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, bidoEquipementDtoId);
    };
    /**************************************************************************
     * Airworthiness management api
     *************************************************************************/
    WorkOrderListService.prototype.findWorkOrderOriginDetails = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.findWorkOrderOriginDetails, input);
    };
    WorkOrderListService.prototype.calculateBidmProjectStatus = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.calculateBidmProjectStatus, input);
    };
    /**************************************************************************
     * Reference list
     *************************************************************************/
    WorkOrderListService.prototype.findAuthorizedBireSite = function () {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAuthorizedBireSite);
    };
    WorkOrderListService.prototype.loadMROCenterList = function () {
        return this.findAuthorizedBireSite().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
            var mroCenterList = !!results ? _utils_select_item_utils__WEBPACK_IMPORTED_MODULE_10__["SelectItemUtils"].fromLabelValues(results) : [];
            return mroCenterList.map(function (mro) {
                mro.label = mro.label ? mro.value + " (" + mro.label + ")" : mro.value;
                return mro;
            });
        }));
    };
    WorkOrderListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfigService"],
            _api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_4__["AirworthinessManagementApi"],
            _api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__["AircraftMaintenanceApi"],
            _api_am_project_management_api__WEBPACK_IMPORTED_MODULE_5__["AMProjectManagementApi"],
            _api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__["FleetManagementApi"],
            _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_7__["ProductStructureManagementApi"]])
    ], WorkOrderListService);
    return WorkOrderListService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/components/work-order-list/form/work-package-list-dialog/work-package-list-dialog.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/shared/components/work-order-list/form/work-package-list-dialog/work-package-list-dialog.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"20\">\r\n  <a-header>\r\n    <h3 class=\"grid-cell-title\">\r\n      {{ getComponentName() + \".projectHeader\" | translate }}\r\n    </h3>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"grid-row\">\r\n      <div class=\"grid-cell--12 main-block\">\r\n        <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n          <div class=\"section\">\r\n            <div class=\"section-content\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">\r\n                    {{ getComponentName() + \".selectWorkPackage\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      [options]=\"workPackagesList\"\r\n                      [(ngModel)]=\"selectedWorkPackage\"\r\n                      [showClear]=\"true\"\r\n                      placeholder=\"&nbsp;\"\r\n                      appendTo=\"body\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\" *ngIf=\"selectedWorkPackage\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">\r\n                    {{ getComponentName() + \".name\" | translate }}\r\n                  </label>\r\n                  <div class=\"form-control\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"aw-input\"\r\n                      [(ngModel)]=\"selectedWorkPackage.projectName\"\r\n                      [disabled]=\"true\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\" *ngIf=\"selectedWorkPackage\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">\r\n                    {{ getComponentName() + \".startDate\" | translate }}\r\n                  </label>\r\n                  <div class=\"form-control\">\r\n                    <p-calendar\r\n                      showButtonBar=\"true\"\r\n                      [monthNavigator]=\"true\"\r\n                      [yearNavigator]=\"true\"\r\n                      [yearRange]=\"sessionService.calendarYearRange\"\r\n                      class=\"aw-calendar\"\r\n                      [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                      [locale]=\"sessionService.calendarFormat\"\r\n                      [(ngModel)]=\"selectedWorkPackage.projectStartDate\"\r\n                      [disabled]=\"true\"\r\n                    ></p-calendar>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">\r\n                    {{ getComponentName() + \".dueDate\" | translate }}\r\n                  </label>\r\n                  <div class=\"form-control\">\r\n                    <p-calendar\r\n                      showButtonBar=\"true\"\r\n                      [monthNavigator]=\"true\"\r\n                      [yearNavigator]=\"true\"\r\n                      [yearRange]=\"sessionService.calendarYearRange\"\r\n                      class=\"aw-calendar\"\r\n                      [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                      [locale]=\"sessionService.calendarFormat\"\r\n                      [(ngModel)]=\"selectedWorkPackage.projectDueDate\"\r\n                      [disabled]=\"true\"\r\n                    ></p-calendar>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <div class=\"section\">\r\n      <div class=\"section-content\">\r\n        <div class=\"row\">\r\n          <div class=\"display--flex-row flex--1 flex-row--justify-end action-list\">\r\n            <button type=\"button\" mat-raised-button (click)=\"cancel()\">\r\n              {{ \"cancel\" | translate }}\r\n            </button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"transferWorkOrder()\" [disabled]=\"!isValidateEnabled()\">\r\n              {{ \"validate\" | translate }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/shared/components/work-order-list/form/work-package-list-dialog/work-package-list-dialog.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/shared/components/work-order-list/form/work-package-list-dialog/work-package-list-dialog.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: WorkPackageListDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPackageListDialogComponent", function() { return WorkPackageListDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _main_maintenance_work_orders_form_work_orders_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../main/maintenance/work-orders/form/work-orders-form.service */ "./src/app/main/maintenance/work-orders/form/work-orders-form.service.ts");
/* harmony import */ var _main_maintenance_work_package_search_work_package_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../main/maintenance/work-package/search/work-package-search.service */ "./src/app/main/maintenance/work-package/search/work-package-search.service.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
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









var WorkPackageListDialogComponent = /** @class */ (function (_super) {
    __extends(WorkPackageListDialogComponent, _super);
    function WorkPackageListDialogComponent(messageService, sessionService, wpSearchService, translateService, workOrdersFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Write, 'WorkPackageListDialogComponent') || this;
        _this.messageService = messageService;
        _this.sessionService = sessionService;
        _this.wpSearchService = wpSearchService;
        _this.translateService = translateService;
        _this.workOrdersFormService = workOrdersFormService;
        _this.onTransferOfWO = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    WorkPackageListDialogComponent.prototype.ngOnInit = function () {
        this.searchObject = {};
        this.moveWorkOrderInput = {};
        this.workPackagesList = [];
        this.getWorkPackagesList();
    };
    /**
     * This method is used to get the work packages which has to be displayed in list of popup.
     * This is based on the following Criteria :
     *
     * 1. The WPs displayed in the list are the WPs that have the same related asset of the original WP.
     * 2. The WPs displayed in the list are the WPs that are assigned to the same person as the person of the original WP.
     * 3. The WPs displayed in the list are the WPs with the statuses "released", "on going" or "performed".
     *    WPs with other statuses must not be proposed.
     */
    WorkPackageListDialogComponent.prototype.getWorkPackagesList = function () {
        var _this = this;
        this.searchObject.assetCode = this._workPackage.assetCode;
        this.wpSearchService.findBidmProjectsBySearchCriteria(this.searchObject).subscribe(function (result) {
            if (!!result) {
                var workPackages = result.list.filter(function (workPackage) {
                    return workPackage.receivingAssignedTo === _this._workPackage.receivingAssignedTo &&
                        (workPackage.statusState === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_RELEASED ||
                            workPackage.statusState === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_ONGOING ||
                            workPackage.statusState === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_PERFORMED);
                });
                workPackages.forEach(function (workPackage) {
                    _this.workPackagesList.push({
                        label: "" + workPackage.projectNumber,
                        value: workPackage
                    });
                });
                _this.display = true;
            }
        });
    };
    /**
     * This method is used to transfer the work order(s) to the selected work package.
     */
    WorkPackageListDialogComponent.prototype.transferWorkOrder = function () {
        var _this = this;
        this.moveWorkOrderInput = {};
        if (!!this.selectedWorkPackage && !!this.selectedWorkPackage.projectId) {
            var projectId = this.selectedWorkPackage.projectId;
            var bidmProjectDTOId = {
                projectId: projectId
            };
            var bidmWorkOrderDTOIds_1 = [];
            this.workOrderList = this.flatDeep(this.selectedWorkOrders);
            this.workOrderList.forEach(function (workOrder) {
                var objectId = {
                    projectId: !!workOrder.projectId ? workOrder.projectId : '',
                    woId: !!workOrder.woId ? workOrder.woId : ''
                };
                bidmWorkOrderDTOIds_1.push(objectId);
            });
            this.moveWorkOrderInput = {
                bidmProjectDTOId: bidmProjectDTOId,
                bidmWorkOrderDTOIds: bidmWorkOrderDTOIds_1
            };
            this.workOrdersFormService.moveWorkOrders(this.moveWorkOrderInput).subscribe(function (result) {
                _this.display = false;
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnTransferWO'));
                _this.onTransferOfWO.emit(_this._workPackage);
            }, function (error) {
                _this.display = false;
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnTransferWO'));
            });
        }
    };
    /**
     * This method is to flatten the tree to get the WorkOrder(s)
     */
    WorkPackageListDialogComponent.prototype.flatDeep = function (tree) {
        var _this = this;
        return tree.reduce(function (acc, val) { return __spread(acc, (val ? [val.data] : []), (val.children ? _this.flatDeep(val.children) : [])); }, []);
    };
    WorkPackageListDialogComponent.prototype.isValidateEnabled = function () {
        return this.selectedWorkPackage;
    };
    WorkPackageListDialogComponent.prototype.cancel = function () {
        this.display = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorkPackageListDialogComponent.prototype, "_workPackage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WorkPackageListDialogComponent.prototype, "selectedWorkOrders", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WorkPackageListDialogComponent.prototype, "onTransferOfWO", void 0);
    WorkPackageListDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-work-package-list',
            template: __webpack_require__(/*! ./work-package-list-dialog.component.html */ "./src/app/shared/components/work-order-list/form/work-package-list-dialog/work-package-list-dialog.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
            _main_maintenance_work_package_search_work_package_search_service__WEBPACK_IMPORTED_MODULE_3__["WorkPackageSearchService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _main_maintenance_work_orders_form_work_orders_form_service__WEBPACK_IMPORTED_MODULE_2__["WorkOrdersFormService"]])
    ], WorkPackageListDialogComponent);
    return WorkPackageListDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/components/work-order-list/work-order-list.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/work-order-list/work-order-list.module.ts ***!
  \*****************************************************************************/
/*! exports provided: WorkOrderListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderListModule", function() { return WorkOrderListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/treetable.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_treetable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _main_dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../main/dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _main_maintenance_work_orders_form_work_orders_form_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../main/maintenance/work-orders/form/work-orders-form.service */ "./src/app/main/maintenance/work-orders/form/work-orders-form.service.ts");
/* harmony import */ var _main_maintenance_work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.module */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.module.ts");
/* harmony import */ var _main_maintenance_work_package_form_popups_dialog_work_order_scheduling_edition_dialog_work_order_scheduling_edition_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.module */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.module.ts");
/* harmony import */ var _main_maintenance_work_package_form_work_order_table_filters_work_order_table_filters_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.module */ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.module.ts");
/* harmony import */ var _main_maintenance_work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../main/maintenance/work-package/form/work-package-form.service */ "./src/app/main/maintenance/work-package/form/work-package-form.service.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/file.service */ "./src/app/shared/services/file.service.ts");
/* harmony import */ var _form_work_order_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form/work-order-list.component */ "./src/app/shared/components/work-order-list/form/work-order-list.component.ts");
/* harmony import */ var _form_work_order_list_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./form/work-order-list.service */ "./src/app/shared/components/work-order-list/form/work-order-list.service.ts");
/* harmony import */ var _form_work_package_list_dialog_work_package_list_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./form/work-package-list-dialog/work-package-list-dialog.component */ "./src/app/shared/components/work-order-list/form/work-package-list-dialog/work-package-list-dialog.component.ts");
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
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
    primeng_treetable__WEBPACK_IMPORTED_MODULE_9__["TreeTableModule"],
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__["CheckboxModule"],
    primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"],
    primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__["ProgressBarModule"],
    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__["SplitButtonModule"],
    primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
    primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_3__["OverlayPanelModule"],
    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_16__["ModalModule"]
];
var INTERNAL_MODULES = [
    _main_maintenance_work_package_form_work_order_table_filters_work_order_table_filters_module__WEBPACK_IMPORTED_MODULE_14__["WorkOrderTableFiltersModule"],
    _main_maintenance_work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_module__WEBPACK_IMPORTED_MODULE_12__["DialogWorkOrderEditionModule"],
    _main_maintenance_work_package_form_popups_dialog_work_order_scheduling_edition_dialog_work_order_scheduling_edition_module__WEBPACK_IMPORTED_MODULE_13__["DialogWorkOrderSchedulingEditionModule"]
];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_form_work_order_list_component__WEBPACK_IMPORTED_MODULE_21__["WorkOrderListComponent"], _form_work_package_list_dialog_work_package_list_dialog_component__WEBPACK_IMPORTED_MODULE_23__["WorkPackageListDialogComponent"]];
var DYNAMIC_COMPONENTS = [];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_main_maintenance_work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_15__["WorkPackageFormService"], _services_file_service__WEBPACK_IMPORTED_MODULE_20__["FileService"], _form_work_order_list_service__WEBPACK_IMPORTED_MODULE_22__["WorkOrderListService"], _main_maintenance_work_orders_form_work_orders_form_service__WEBPACK_IMPORTED_MODULE_11__["WorkOrdersFormService"]];
var WorkOrderListModule = /** @class */ (function () {
    function WorkOrderListModule() {
    }
    WorkOrderListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_17__["AngularCommonSharedModule"],
                _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_18__["AngularGenericTemplatesSharedModule"],
                _app_common_shared_module__WEBPACK_IMPORTED_MODULE_19__["AppCommonSharedModule"],
                _main_dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_10__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            exports: [_form_work_order_list_component__WEBPACK_IMPORTED_MODULE_21__["WorkOrderListComponent"]],
            providers: __spread(SERVICES)
        })
    ], WorkOrderListModule);
    return WorkOrderListModule;
}());



/***/ }),

/***/ "./src/app/shared/constants/bidm-attribute-constants.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/constants/bidm-attribute-constants.ts ***!
  \**************************************************************/
/*! exports provided: BidmAttributeConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidmAttributeConstants", function() { return BidmAttributeConstants; });
var BidmAttributeConstants = /** @class */ (function () {
    function BidmAttributeConstants() {
    }
    BidmAttributeConstants.IS_MAINTENANCE_PLAN_UPDATED = '1';
    BidmAttributeConstants.IS_ASSET_STRUCTURE_UPDATED = '2';
    BidmAttributeConstants.ACRS_EVENT_CODE = '3';
    BidmAttributeConstants.FLIGHT_NUMBER = '4';
    BidmAttributeConstants.GONOGOWP_FOR_FLIGHT = '5';
    BidmAttributeConstants.WORK_PACKAGE_SYSTEM_SOURCE_ID = '6';
    BidmAttributeConstants.WORK_PACKAGE_SYSTEM_SOURCE_REFERENCE = '7';
    BidmAttributeConstants.WORK_ORDER_SYSTEM_SOURCE_ID = '8';
    BidmAttributeConstants.WORK_ORDER_SYSTEM_SOURCE_REFERENCE = '9';
    return BidmAttributeConstants;
}());



/***/ }),

/***/ "./src/app/shared/utils/bidm-document-utils.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/utils/bidm-document-utils.ts ***!
  \*****************************************************/
/*! exports provided: BidmDocumentUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidmDocumentUtils", function() { return BidmDocumentUtils; });
/* harmony import */ var _file_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-utils */ "./src/app/shared/utils/file-utils.ts");

var BidmDocumentUtils = /** @class */ (function () {
    function BidmDocumentUtils() {
    }
    BidmDocumentUtils.areSameDocument = function (obj1, obj2) {
        if (!obj1 || !obj2) {
            return false;
        }
        else {
            return !!obj1.documentName && !!obj2.documentName && obj1.documentName === obj2.documentName;
        }
    };
    BidmDocumentUtils.formatDocExtension = function (document) {
        return _file_utils__WEBPACK_IMPORTED_MODULE_0__["FileUtils"].getExtension(document.documentName).toUpperCase();
    };
    BidmDocumentUtils.typeFile = function (fileName) {
        return _file_utils__WEBPACK_IMPORTED_MODULE_0__["FileUtils"].getExtension(fileName).toUpperCase();
    };
    BidmDocumentUtils.formatDocSize = function (document) {
        return !!document.documentContent ? _file_utils__WEBPACK_IMPORTED_MODULE_0__["FileUtils"].getFormattedSize(document.documentContent.length) : '';
    };
    return BidmDocumentUtils;
}());



/***/ }),

/***/ "./src/app/shared/utils/settings-utils.ts":
/*!************************************************!*\
  !*** ./src/app/shared/utils/settings-utils.ts ***!
  \************************************************/
/*! exports provided: SettingsUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsUtils", function() { return SettingsUtils; });
/* harmony import */ var _string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string-utils */ "./src/app/shared/utils/string-utils.ts");

var SettingsUtils = /** @class */ (function () {
    function SettingsUtils() {
    }
    SettingsUtils.isPropertyEnabled = function (settings, propertyInput) {
        var selectedProperty = settings.find(function (property) { return property.value === propertyInput; });
        return (!!selectedProperty &&
            !_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(selectedProperty.label) &&
            (selectedProperty.label.trim().toUpperCase() === 'X' ||
                selectedProperty.label === '1' ||
                selectedProperty.label.trim().toUpperCase() === 'TRUE'));
    };
    return SettingsUtils;
}());



/***/ })

}]);
//# sourceMappingURL=default~maintenance-maintenance-module~maintenance-work-orders-calendar-work-orders-calendar-module~~44a16550.js.map