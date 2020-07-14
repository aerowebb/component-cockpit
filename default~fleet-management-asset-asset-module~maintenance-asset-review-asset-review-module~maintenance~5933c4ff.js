(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~fleet-management-asset-asset-module~maintenance-asset-review-asset-review-module~maintenance~5933c4ff"],{

/***/ "./src/app/shared/components/create-event-form/create-event-form.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/create-event-form/create-event-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".asset\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"event.equipmentText\" [disabled]=\"true\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group required\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".category\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          [options]=\"categories\"\r\n          [(ngModel)]=\"event.notificationCategroy\"\r\n          [disabled]=\"isReadOpenMode || categories.length === 1\"\r\n          (onChange)=\"loadTypeByCategory()\"\r\n          [showClear]=\"true\"\r\n          placeholder=\"&nbsp;\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group required\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".type\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          [options]=\"typeList\"\r\n          [(ngModel)]=\"event.bidoNotificationDTO.typeCode\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [showClear]=\"true\"\r\n          placeholder=\"&nbsp;\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group required\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".eventDate\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-calendar\r\n          showButtonBar=\"true\"\r\n          [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\"\r\n          [yearRange]=\"sessionService.calendarYearRange\"\r\n          class=\"aw-calendar\"\r\n          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n          [locale]=\"sessionService.calendarFormat\"\r\n          [(ngModel)]=\"event.bidoNotificationDTO.reportingPeriodStartDate\"\r\n          appendTo=\"body\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [maxDate]=\"maxDate\"\r\n          [showTime]=\"true\"\r\n          [hideOnDateTimeSelect]=\"true\"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      color=\"primary\"\r\n      [disabled]=\"showValidate()\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"validate()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/shared/components/create-event-form/create-event-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/create-event-form/create-event-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: CreateEventFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventFormComponent", function() { return CreateEventFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _create_event_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-event-form.service */ "./src/app/shared/components/create-event-form/create-event-form.service.ts");
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







var CreateEventFormComponent = /** @class */ (function (_super) {
    __extends(CreateEventFormComponent, _super);
    function CreateEventFormComponent(createEventFormService, sessionService, propertiesService, messageService) {
        var _this = _super.call(this, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'CreateEventComponent') || this;
        _this.createEventFormService = createEventFormService;
        _this.sessionService = sessionService;
        _this.propertiesService = propertiesService;
        _this.messageService = messageService;
        _this.categories = [];
        _this.typeList = [];
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.loadEventCategoryDropdown();
        _this.loadTypeByCategory();
        _this.maxDate = new Date();
        return _this;
    }
    Object.defineProperty(CreateEventFormComponent.prototype, "defaultCategory", {
        set: function (categoryCode) {
            this.event.notificationCategroy = categoryCode;
            this.loadEventCategoryDropdown();
        },
        enumerable: true,
        configurable: true
    });
    CreateEventFormComponent.prototype.loadEventCategoryDropdown = function () {
        var _this = this;
        this.propertiesService.getValue('getEventCategoryMap').subscribe(function (results) {
            var categories = results || [];
            if (!!_this.event && !!_this.event.notificationCategroy) {
                categories = results.filter(function (c) {
                    return c.value === _this.event.notificationCategroy;
                });
                _this.loadTypeByCategory();
            }
            _this.categories = categories;
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('.errorOnGetCategories'));
        });
    };
    CreateEventFormComponent.prototype.loadTypeByCategory = function () {
        var _this = this;
        if (!!this.event && !!this.event.notificationCategroy) {
            this.createEventFormService.findAllBidoNotificationTypeByTypeCategory(this.event.notificationCategroy).subscribe(function (results) {
                _this.typeList = results || [];
            }, function () {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorONloadTypeByCategory'));
            });
        }
        else {
            this.typeList = [];
        }
    };
    CreateEventFormComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
        if (!this.event) {
            this.event = {
                bidoNotificationDTO: {
                    bidoNotificationTypeDTO: {}
                }
            };
        }
        this.event.equipmentText = this.assetTitle;
    };
    CreateEventFormComponent.prototype.showValidate = function () {
        var response = !this.event.bidoNotificationDTO.typeCode ||
            !this.event.bidoNotificationDTO.reportingPeriodStartDate ||
            !this.event.notificationCategroy
            ? true
            : false;
        return response;
    };
    CreateEventFormComponent.prototype.validate = function () {
        this.onValidated.emit(this.event);
        this.closeDialog();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreateEventFormComponent.prototype, "event", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CreateEventFormComponent.prototype, "assetTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CreateEventFormComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], CreateEventFormComponent.prototype, "defaultCategory", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CreateEventFormComponent.prototype, "types", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CreateEventFormComponent.prototype, "onValidated", void 0);
    CreateEventFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-create-event-form',
            template: __webpack_require__(/*! ./create-event-form.component.html */ "./src/app/shared/components/create-event-form/create-event-form.component.html")
        }),
        __metadata("design:paramtypes", [_create_event_form_service__WEBPACK_IMPORTED_MODULE_6__["CreateEventFormService"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _services_properties_service__WEBPACK_IMPORTED_MODULE_3__["PropertiesService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], CreateEventFormComponent);
    return CreateEventFormComponent;
}(_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/components/create-event-form/create-event-form.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/create-event-form/create-event-form.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateEventFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventFormModule", function() { return CreateEventFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _create_event_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-event-form.component */ "./src/app/shared/components/create-event-form/create-event-form.component.ts");
/* harmony import */ var _create_event_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-event-form.service */ "./src/app/shared/components/create-event-form/create-event-form.service.ts");
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
var EXTERNAL_MODULES = [primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__["DropdownModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"]];
var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_create_event_form_component__WEBPACK_IMPORTED_MODULE_7__["CreateEventFormComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_create_event_form_service__WEBPACK_IMPORTED_MODULE_8__["CreateEventFormService"]];
var CreateEventFormModule = /** @class */ (function () {
    function CreateEventFormModule() {
    }
    CreateEventFormModule = __decorate([
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
    ], CreateEventFormModule);
    return CreateEventFormModule;
}());



/***/ }),

/***/ "./src/app/shared/components/create-event-form/create-event-form.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/create-event-form/create-event-form.service.ts ***!
  \**********************************************************************************/
/*! exports provided: CreateEventFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventFormService", function() { return CreateEventFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/asset-management.api */ "./src/app/shared/api/asset-management.api.ts");
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





var CreateEventFormService = /** @class */ (function (_super) {
    __extends(CreateEventFormService, _super);
    function CreateEventFormService(http, appConfigService, assetManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.assetManagementApi = assetManagementApi;
        return _this;
    }
    CreateEventFormService.prototype.findAllBidoNotificationTypeByTypeCategory = function (typeCategory) {
        return _super.prototype.post.call(this, this.assetManagementApi.findAllBidoNotificationTypeByTypeCategory, typeCategory);
    };
    CreateEventFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__["AssetManagementApi"]])
    ], CreateEventFormService);
    return CreateEventFormService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ })

}]);
//# sourceMappingURL=default~fleet-management-asset-asset-module~maintenance-asset-review-asset-review-module~maintenance~5933c4ff.js.map