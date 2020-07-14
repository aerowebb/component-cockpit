(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flight-operations-flight-scheduling-flight-scheduling-module"],{

/***/ "./src/app/main/flight-operations/flight-scheduling/flight-scheduling.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/flight-operations/flight-scheduling/flight-scheduling.module.ts ***!
  \**************************************************************************************/
/*! exports provided: FlightSchedulingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightSchedulingModule", function() { return FlightSchedulingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/table/table */ "./node_modules/primeng/components/table/table.js");
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_table_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/dialog-search-customer/dialog-search-customer.module */ "./src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts");
/* harmony import */ var _shared_components_scheduler_scheduler_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/scheduler/scheduler.module */ "./src/app/shared/components/scheduler/scheduler.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_flight_scheduling_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form/flight-scheduling-form.component */ "./src/app/main/flight-operations/flight-scheduling/form/flight-scheduling-form.component.ts");
/* harmony import */ var _form_flight_scheduling_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form/flight-scheduling-form.service */ "./src/app/main/flight-operations/flight-scheduling/form/flight-scheduling-form.service.ts");
/* harmony import */ var _search_flight_scheduling_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/flight-scheduling-search.component */ "./src/app/main/flight-operations/flight-scheduling/search/flight-scheduling-search.component.ts");
/* harmony import */ var _search_flight_scheduling_search_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search/flight-scheduling-search.service */ "./src/app/main/flight-operations/flight-scheduling/search/flight-scheduling-search.service.ts");
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
var PRIMENG_MODULES = [primeng_components_table_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"]];
var EXTERNAL_MODULES = [];
var INTERNAL_MODULES = [];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [
    _form_flight_scheduling_form_component__WEBPACK_IMPORTED_MODULE_13__["FlightSchedulingFormComponent"],
    _search_flight_scheduling_search_component__WEBPACK_IMPORTED_MODULE_15__["FlightSchedulingSearchComponent"]
];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_flight_scheduling_form_service__WEBPACK_IMPORTED_MODULE_14__["FlightSchedulingFormService"], _search_flight_scheduling_search_service__WEBPACK_IMPORTED_MODULE_16__["FlightSchedulingSearchService"]];
var FlightSchedulingModule = /** @class */ (function () {
    function FlightSchedulingModule() {
    }
    FlightSchedulingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_7__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_8__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_9__["AppCommonSharedModule"],
                _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_10__["DialogSearchCustomerModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_12__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES, PRIMENG_MODULES, [
                _shared_components_scheduler_scheduler_module__WEBPACK_IMPORTED_MODULE_11__["SchedulerModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["SliderModule"]
            ]),
            providers: __spread(SERVICES, [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]])
        })
    ], FlightSchedulingModule);
    return FlightSchedulingModule;
}());



/***/ }),

/***/ "./src/app/main/flight-operations/flight-scheduling/form/flight-scheduling-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/flight-scheduling/form/flight-scheduling-form.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div *ngIf=\"!isCreateOpenMode && componentData && componentData.objectId\" class=\"page-subtitle\">\r\n          <span class=\"page-subtitle\">\r\n            - {{ serializationService.deserialize(componentData.objectId)[\"fleetCode\"] }}\r\n          </span>\r\n\r\n          <span class=\"page-subtitle\" *ngIf=\"serializationService.deserialize(componentData.objectId)['fleetName']\">\r\n            - {{ serializationService.deserialize(componentData.objectId)[\"fleetName\"] }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button\r\n      id=\"actions\"\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button type=\"button\" mat-menu-item (click)=\"onReload()\">\r\n        {{ \"global.refresh\" | translate }}\r\n      </button>\r\n\r\n      <button id=\"favorites\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\" style=\"max-width: 100%\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--6\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ componentData.componentId + \".date\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"form-group\" style=\"max-width: 25%\">\r\n                <label class=\"form-label\"> {{ componentData.componentId + \".date\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-calendar\r\n                    showButtonBar=\"true\"\r\n                    [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\"\r\n                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                    class=\"aw-calendar\"\r\n                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                    [(ngModel)]=\"date\"\r\n                  ></p-calendar>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\" style=\"max-width: 75%\">\r\n                <label class=\"form-label\"> {{ componentData.componentId + \".timeZone\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [(ngModel)]=\"timeZoneSelected\"\r\n                    [showClear]=\"true\"\r\n                    [options]=\"timeZoneList\"\r\n                    placeholder=\"&nbsp;\"\r\n                    (onChange)=\"loadSchedulingAtTimeZone()\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"grid-cell--6\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ componentData.componentId + \".fleet\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ componentData.componentId + \".code\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"fleetCode\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ componentData.componentId + \".name\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input type=\"text\" class=\"aw-input\" disabled [(ngModel)]=\"fleetName\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ componentData.componentId + \".schedule\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"form-group\">{{ date }} {{ timeZoneSelected }}</div>\r\n              <button *ngIf=\"addFlightButtonVisible\" type=\"button\" mat-raised-button (click)=\"addFlight()\">\r\n                {{ getComponentName() + \".addFlight\" | translate }}\r\n              </button>\r\n\r\n              <button *ngIf=\"updateFlightButtonVisible\" type=\"button\" mat-raised-button (click)=\"openFlight()\">\r\n                {{ \"openFlight\" | translate }}\r\n              </button>\r\n\r\n              <button *ngIf=\"removeFlightButtonVisible\" type=\"button\" mat-raised-button (click)=\"removeFlight()\">\r\n                {{ getComponentName() + \".removeFlight\" | translate }}\r\n              </button>\r\n\r\n              <div class=\"slider-row\">\r\n                <div class=\"time-resolution\">\r\n                  <p-slider\r\n                    [max]=\"component.TIME_RESOLUTION_MAX_ZOOM\"\r\n                    [min]=\"component.TIME_RESOLUTION_MIN_ZOOM\"\r\n                    [(ngModel)]=\"schedulerZoomLevel\"\r\n                    (onChange)=\"onChangeTimeResolution($event)\"\r\n                  ></p-slider>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"scheduler-wrap show\">\r\n                  <bry-scheduler\r\n                    [barMargin]=\"barMargin\"\r\n                    [columns]=\"schedulerConfig['columns']\"\r\n                    [startDate]=\"schedulerConfig['startDate']\"\r\n                    [endDate]=\"schedulerConfig['endDate']\"\r\n                    [timeRanges]=\"schedulerConfig['timeRanges']\"\r\n                    [timeRangesFeature]=\"schedulerConfig['timeRangesFeature']\"\r\n                    [treeFeature]=\"schedulerConfig['treeFeature']\"\r\n                    [viewPreset]=\"schedulerConfig['viewPreset']\"\r\n                    [resources]=\"resourcesMissionName\"\r\n                    [filterBarFeature]=\"true\"\r\n                    [events]=\"events\"\r\n                    [eventTooltipFeature]=\"schedulerConfig['eventTooltip']\"\r\n                    [contextMenuFeature]=\"schedulerConfig['contextMenu']\"\r\n                    [readOnly]=\"schedulerConfig['readOnly']\"\r\n                    [zoomKeepsOriginalTimespan]=\"schedulerConfig['zoomKeepsOriginalTimespan']\"\r\n                    [zoomOnMouseWheel]=\"schedulerConfig['zoomOnMouseWheel']\"\r\n                    [zoomOnTimeAxisDoubleClick]=\"schedulerConfig['zoomOnTimeAxisDoubleClick']\"\r\n                  >\r\n                  </bry-scheduler>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/flight-operations/flight-scheduling/form/flight-scheduling-form.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/flight-scheduling/form/flight-scheduling-form.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .pointer {\n  cursor: pointer !important; }\n\n:host ::ng-deep .mission-event-select.cell-green {\n  background-color: #4caf50 !important; }\n\n:host ::ng-deep .mission-event-select.cell-yellow {\n  background-color: #dddf00 !important; }\n\n:host ::ng-deep .mission-event-select.cell-red {\n  background-color: #f6685e !important; }\n\n:host ::ng-deep .mission-event-select.cell-blue {\n  background-color: #b8d0e8 !important; }\n\n:host ::ng-deep .mission-event-select.white-cell-selected {\n  background-color: #176aad !important; }\n\n:host ::ng-deep .mission-event-select.blue-cell-selected {\n  background-color: #01579b !important; }\n\n:host ::ng-deep button.aw-btn {\n  margin-left: 8px; }\n\n:host ::ng-deep div.slider-row {\n  display: flex;\n  justify-content: flex-end; }\n\n:host ::ng-deep .time-resolution {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  margin: 0 calc(2 * 8px);\n  margin-bottom: 1em; }\n\n:host ::ng-deep .time-resolution p-slider {\n    width: 10rem; }\n\n:host .scheduler-wrap {\n  height: 75vh;\n  visibility: hidden; }\n\n:host .scheduler-wrap.show {\n    visibility: visible; }\n\n:host ::ng-deep a {\n  color: #01579b; }\n\n:host ::ng-deep a.mission-name-select {\n    border-bottom-color: transparent;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    color: #01579b;\n    cursor: pointer;\n    transition: border-bottom-color 0.25s ease-in-out; }\n\n:host ::ng-deep a:hover {\n    text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mbGlnaHQtb3BlcmF0aW9ucy9mbGlnaHQtc2NoZWR1bGluZy9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXGZsaWdodC1vcGVyYXRpb25zXFxmbGlnaHQtc2NoZWR1bGluZ1xcZm9ybVxcZmxpZ2h0LXNjaGVkdWxpbmctZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9mbGlnaHQtb3BlcmF0aW9ucy9mbGlnaHQtc2NoZWR1bGluZy9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVNLDBCQUEwQixFQUFBOztBQUZoQztFQU9NLG9DQUEwQyxFQUFBOztBQVBoRDtFQVVNLG9DQUFxQyxFQUFBOztBQVYzQztFQWFNLG9DQUF3QyxFQUFBOztBQWI5QztFQWdCTSxvQ0FBeUMsRUFBQTs7QUFoQi9DO0VBb0JNLG9DQUFvQyxFQUFBOztBQXBCMUM7RUF3Qk0sb0NBQW9DLEVBQUE7O0FBeEIxQztFQTZCSSxnQkFBZ0IsRUFBQTs7QUE3QnBCO0VBaUNJLGFBQWE7RUFDYix5QkFBeUIsRUFBQTs7QUFsQzdCO0VBc0NJLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUFvQztFQUNwQyxrQkFBa0IsRUFBQTs7QUExQ3RCO0lBNENNLFlBQVksRUFBQTs7QUE1Q2xCO0VBaURJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFsRHRCO0lBcURNLG1CQUFtQixFQUFBOztBQXJEekI7RUEwREksY0N6RGtCLEVBQUE7O0FERHRCO0lBNkRNLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaURBQ0YsRUFBQTs7QUFuRUo7SUFzRU0sMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2ZsaWdodC1vcGVyYXRpb25zL2ZsaWdodC1zY2hlZHVsaW5nL2Zvcm0vZmxpZ2h0LXNjaGVkdWxpbmctZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLnBvaW50ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAubWlzc2lvbi1ldmVudC1zZWxlY3R7XHJcbiAgICAmLmNlbGwtZ3JlZW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAmLmNlbGwteWVsbG93IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdzEgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICYuY2VsbC1yZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgJi5jZWxsLWJsdWUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1saWdodDEgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLndoaXRlLWNlbGwtc2VsZWN0ZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc2YWFkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5ibHVlLWNlbGwtc2VsZWN0ZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE1NzliICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgYnV0dG9uLmF3LWJ0bntcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgZGl2LnNsaWRlci1yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAudGltZS1yZXNvbHV0aW9uIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbjogMCBjYWxjKDIgKiAjeyRtYXJnaW4tdmFsdWV9KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIHAtc2xpZGVyIHtcclxuICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNjaGVkdWxlci13cmFwIHtcclxuICAgIGhlaWdodDogNzV2aDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgICAmLnNob3cge1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIGEge1xyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcblxyXG4gICAgJi5taXNzaW9uLW5hbWUtc2VsZWN0IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICAgIGNvbG9yOiAjMDE1NzliO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXRcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/flight-operations/flight-scheduling/form/flight-scheduling-form.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/flight-scheduling/form/flight-scheduling-form.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: FlightSchedulingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightSchedulingFormComponent", function() { return FlightSchedulingFormComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var bryntum_scheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bryntum-scheduler */ "./external/scheduler/build/scheduler.module.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/scheduler/scheduler.component */ "./src/app/shared/components/scheduler/scheduler.component.ts");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/constants/lang-constants */ "./src/app/shared/constants/lang-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _flight_scheduling_form_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./flight-scheduling-form.service */ "./src/app/main/flight-operations/flight-scheduling/form/flight-scheduling-form.service.ts");
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




























var CellColor;
(function (CellColor) {
    CellColor["Green"] = "cell-green";
    CellColor["Red"] = "cell-red";
    CellColor["Yellow"] = "cell-yellow";
    CellColor["Blue"] = "cell-blue";
    CellColor["WhiteCellSelected"] = "white-cell-selected";
    CellColor["BlueCellSelected"] = "blue-cell-selected";
})(CellColor || (CellColor = {}));
var FlightSchedulingFormComponent = /** @class */ (function (_super) {
    __extends(FlightSchedulingFormComponent, _super);
    function FlightSchedulingFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, flightSchedulingFormService, propertiesService, dateService, datePipe, translateService, confirmationService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.flightSchedulingFormService = flightSchedulingFormService;
        _this.propertiesService = propertiesService;
        _this.dateService = dateService;
        _this.datePipe = datePipe;
        _this.translateService = translateService;
        _this.confirmationService = confirmationService;
        _this.noOfDateToDisplay = 14;
        _this.barMargin = 10;
        _this.eventCounter = 0;
        _this.events = [];
        _this.resourcesMissionNameCounter = 0;
        _this.component = FlightSchedulingFormComponent_1;
        // Bryntum init
        _this.schedulerZoomLevel = FlightSchedulingFormComponent_1.TIME_RESOLUTION_MAX_ZOOM;
        _this.schedulerTimeResolutionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        _this.init();
        _this.loadWorkPackageStatusList();
        return _this;
    }
    FlightSchedulingFormComponent_1 = FlightSchedulingFormComponent;
    FlightSchedulingFormComponent.prototype.loadSchedulerConfig = function () {
        var _this = this;
        this.schedulerConfig = {
            readOnly: true,
            timeRanges: true,
            timeRangesFeature: {
                showCurrentTimeLine: true
            },
            zoomKeepsOriginalTimespan: true,
            zoomOnMouseWheel: false,
            zoomOnTimeAxisDoubleClick: false,
            eventTooltip: {
                template: function (target) {
                    var resourceId = target.eventRecord.data.resourceId;
                    var resource = _this.recursiveFind(_this.resourcesMissionName, resourceId);
                    var returnValue = '';
                    if (!!resource && !!resource.data) {
                        returnValue = _this.showTooltip(resource.data, _this.dateService.dateToString(target.startDate));
                    }
                    return returnValue;
                },
                anchorToTarget: false
            },
            treeFeature: true
        };
        this.registerSchedulerTimeResolutionObservable();
        this.setSchedulerDate();
        this.setSchedulerAircraftRegistrationColumn();
        this.setSchedulerViewPreset();
        this.setContextMenuFeature();
    };
    FlightSchedulingFormComponent.prototype.initSchedulerEngine = function () {
        this.registerSchedulerListeners();
    };
    FlightSchedulingFormComponent.prototype.registerSchedulerTimeResolutionObservable = function () {
        var _this = this;
        this.schedulerTimeResolutionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe)).subscribe({
            next: function (value) {
                _this.scheduler.schedulerEngine.zoomTo(value);
            }
        });
    };
    FlightSchedulingFormComponent.prototype.showToday = function () {
        this.scheduler.schedulerEngine.zoomTo({
            centerDate: new Date(),
            preset: this.scheduler.schedulerEngine.viewPreset
        });
    };
    FlightSchedulingFormComponent.prototype.onChangeTimeResolution = function (event) {
        this.schedulerTimeResolutionChanged.next(event.value);
    };
    FlightSchedulingFormComponent.prototype.recursiveFind = function (resourcesMissionNameSearched, id) {
        var resourceModelFound = resourcesMissionNameSearched.find(function (resource) { return resource.id === id; });
        var index = 0;
        while (!resourceModelFound && index < resourcesMissionNameSearched.length) {
            resourceModelFound = this.recursiveFind(resourcesMissionNameSearched[index].children, id);
            index++;
        }
        return resourceModelFound;
    };
    FlightSchedulingFormComponent.prototype.registerSchedulerListeners = function () {
        var _this = this;
        bryntum_scheduler__WEBPACK_IMPORTED_MODULE_3__["EventHelper"].addListener(this.scheduler.schedulerEngine.element, {
            element: this.scheduler.schedulerEngine.element,
            click: function (event) {
                var eventRecord = 'eventRecord';
                var eventTarget = event.target;
                if (eventTarget.classList.contains(FlightSchedulingFormComponent_1.MISSION_NAME_CLASS)) {
                    _this.openAircraftOrMission(eventTarget);
                }
                else if (eventTarget.classList.contains(FlightSchedulingFormComponent_1.MISSION_EVENT_CLASS)) {
                    _this.configureEventSelectedColorAndButtons(event, eventRecord);
                }
                else {
                    _this.clickedOnNoEventAndNoResource();
                }
            }
        });
    };
    FlightSchedulingFormComponent.prototype.clickedOnNoEventAndNoResource = function () {
        this.cellSelected = {};
        this.colClicked = '';
        this.colsSelected = [];
        this.buildSchedulerEventList();
        this.addFlightButtonVisible = false;
        this.removeFlightButtonVisible = false;
        this.resetFlightButtonVisible = false;
        this.updateFlightButtonVisible = false;
    };
    FlightSchedulingFormComponent.prototype.configureEventSelectedColorAndButtons = function (event, eventRecord) {
        var _this = this;
        var flightOutputRM = !!this.resourcesMissionName
            ? this.recursiveFind(this.resourcesMissionName, event[eventRecord].resourceId)
            : undefined;
        var flightOutputData = !!flightOutputRM ? flightOutputRM.data : undefined;
        if (!!flightOutputData) {
            // onCellClick will update visible buttons
            this.onCellClick(flightOutputData, this.dateService.dateToString(event[eventRecord].data.startDate));
            // Compute previous event selected style
            var previousEventSelectedFoundInEventsList = this.events.find(function (anEvent) { return !!_this.previousEventSelected && anEvent.id === _this.previousEventSelected.id; });
            if (!!previousEventSelectedFoundInEventsList) {
                var previousResource = this.recursiveFind(this.resourcesMissionName, previousEventSelectedFoundInEventsList.resourceId);
                if (!!previousResource) {
                    previousEventSelectedFoundInEventsList.cls =
                        FlightSchedulingFormComponent_1.MISSION_EVENT_CLASS +
                            ' ' +
                            this.getCellColor(previousResource.data, this.dateService.dateToString(previousEventSelectedFoundInEventsList.startDate));
                }
            }
            // Single event coloration
            var eventSelected = this.events.find(function (anEvent) { return anEvent.id === event[eventRecord].data.id; });
            this.previousEventSelected = eventSelected;
            if (!!eventSelected) {
                eventSelected.cls =
                    FlightSchedulingFormComponent_1.MISSION_EVENT_CLASS +
                        ' ' +
                        this.getCellColor(flightOutputData, this.dateService.dateToString(event[eventRecord].data.startDate));
            }
        }
        this.events = __spread(this.events);
    };
    FlightSchedulingFormComponent.prototype.openAircraftOrMission = function (eventTarget) {
        var flightOutputRM = !!this.resourcesMissionName
            ? this.recursiveFind(this.resourcesMissionName, eventTarget.id)
            : undefined;
        var flightOutputData = !!flightOutputRM ? flightOutputRM.data : undefined;
        if (!!flightOutputData) {
            this.openFlightSchedulingRowDetail(flightOutputData);
        }
    };
    FlightSchedulingFormComponent.prototype.setContextMenuFeature = function () {
        this.schedulerConfig = __assign({}, this.schedulerConfig, { contextMenu: {
                items: {
                    addEvent: false
                },
                processHeaderItems: function () { return false; }
            } });
    };
    FlightSchedulingFormComponent.prototype.setSchedulerViewPreset = function () {
        this.schedulerConfig = __assign({}, this.schedulerConfig, { viewPreset: {
                name: FlightSchedulingFormComponent_1.dayAndWeek,
                displayDateFormat: FlightSchedulingFormComponent_1.displayDateFormat,
                timeResolution: {
                    unit: FlightSchedulingFormComponent_1.day,
                    increment: 1
                },
                headerConfig: {
                    middle: {
                        unit: FlightSchedulingFormComponent_1.day,
                        dateFormat: FlightSchedulingFormComponent_1.dateFormat
                    }
                }
            } });
    };
    FlightSchedulingFormComponent.prototype.setSchedulerDate = function () {
        this.schedulerConfig = __assign({}, this.schedulerConfig, { startDate: moment__WEBPACK_IMPORTED_MODULE_5__()
                .startOf('year')
                .toDate(), endDate: moment__WEBPACK_IMPORTED_MODULE_5__()
                .endOf('year')
                .toDate() });
    };
    FlightSchedulingFormComponent.prototype.setSchedulerAircraftRegistrationColumn = function () {
        this.schedulerConfig = __assign({}, this.schedulerConfig, { columns: [
                {
                    text: this.translateService.instant(this.getTranslateKey('missionName')),
                    type: 'tree',
                    field: 'missionName',
                    width: 200,
                    htmlEncode: false,
                    sortable: true,
                    editor: false,
                    enableCellContextMenu: false,
                    renderer: function (_a) {
                        var record = _a.record;
                        return "\n            <div class=\"info\">\n                <a id=" + record.data.id + " class=" + FlightSchedulingFormComponent_1.MISSION_NAME_CLASS + ">\n                    " + record.data.missionName + "\n                </a>\n            </div>\n          ";
                    }
                }
            ] });
    };
    FlightSchedulingFormComponent.prototype.generateSchedulerColumnsMissionNameId = function () {
        return this.resourcesMissionNameCounter++;
    };
    FlightSchedulingFormComponent.prototype.generateSchedulerEventId = function () {
        return this.eventCounter++;
    };
    /**
     * Builds scheduler events on current nodes and children nodes by recursion.
     * @param parentResource Parent resource of second parameter
     * @param resource Current resource
     */
    FlightSchedulingFormComponent.prototype.buildSchedulerEventFromResource = function (parentResource, resource) {
        var returnArray = [];
        if (!!resource.data && !!resource.data.date) {
            var startDates = Object.keys(resource.data.date);
            var endDates = Object.values(resource.data.date);
            for (var i = 0; i < startDates.length; i++) {
                if (parentResource !== resource) {
                    // Push event on the parent node
                    returnArray.push({
                        resourceId: parentResource.id,
                        id: this.generateSchedulerEventId(),
                        eventType: '',
                        startDate: new Date(startDates[i]),
                        endDate: new Date(endDates[i]),
                        name: '',
                        cls: FlightSchedulingFormComponent_1.MISSION_EVENT_CLASS +
                            ' ' +
                            this.getCellColor(parentResource.data, this.dateService.dateToString(new Date(startDates[i])))
                    });
                }
                // Push event on the current node
                returnArray.push({
                    resourceId: resource.id,
                    id: this.generateSchedulerEventId(),
                    eventType: '',
                    startDate: new Date(startDates[i]),
                    endDate: new Date(endDates[i]),
                    name: '',
                    cls: FlightSchedulingFormComponent_1.MISSION_EVENT_CLASS +
                        ' ' +
                        this.getCellColor(resource.data, this.dateService.dateToString(new Date(startDates[i])))
                });
            }
        }
        // Recurse into children
        for (var i = 0; i < resource.children.length; i++) {
            returnArray.push.apply(returnArray, __spread(this.buildSchedulerEventFromResource(resource, resource.children[i])));
        }
        return returnArray;
    };
    /**
     * Builds bryntum scheduler event list
     */
    FlightSchedulingFormComponent.prototype.buildSchedulerEventList = function () {
        var _this = this;
        // Reinitialise event list otherwise bryntum scheduler engine does not detect changes
        this.events = [];
        this.resourcesMissionName.forEach(function (resource) {
            var _a;
            (_a = _this.events).push.apply(_a, __spread(_this.buildSchedulerEventFromResource(resource, resource)));
        });
    };
    FlightSchedulingFormComponent.prototype.buildSchedulerResourceList = function (wsTreeNodes) {
        var _this = this;
        this.resourcesMissionName = wsTreeNodes.map(function (wsTreeNode) { return _this.buildSchedulerResourceFromFleet(wsTreeNode); });
    };
    FlightSchedulingFormComponent.prototype.buildSchedulerResourceFromFleet = function (wsTreeNode) {
        var _this = this;
        return {
            id: String(this.generateSchedulerColumnsMissionNameId()),
            missionName: wsTreeNode.data.missionName,
            data: wsTreeNode.data,
            children: !!wsTreeNode.children
                ? wsTreeNode.children.map(function (childElement) { return _this.buildSchedulerResourceFromFleet(childElement); })
                : []
        };
    };
    FlightSchedulingFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__["ComponentConstants"].FLI_FLIGHT_SCHEDULING_FORM;
    };
    FlightSchedulingFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.milisecondsInADay =
            this.component.hoursInADay *
                this.component.minutesInAnHour *
                this.component.secondsInAMinute *
                this.component.milisecondsInASecond;
        if (!!this.componentData) {
            if (!!this.componentData.objectId) {
                this.fleetCode = this.serializationService.deserialize(this.componentData.objectId).fleetCode;
                this.fleetName = this.serializationService.deserialize(this.componentData.objectId).fleetName;
                var fleetContext = !this.isCreateOpenMode &&
                    this.componentData &&
                    this.componentData.objectId &&
                    this.serializationService.deserialize(this.componentData.objectId).fleetName
                    ? this.fleetCode + " - " + this.fleetName
                    : "" + this.fleetCode;
                var fleetContextId = fleetContext;
                this.displayComponentContext(fleetContextId, this.isCreateOpenMode);
                this.loadWorkSchdulingTable();
            }
        }
        this.loadTimeZoneList();
        this.loadSchedulerConfig();
    };
    FlightSchedulingFormComponent.prototype.ngAfterViewInit = function () {
        this.initSchedulerEngine();
        if (this.translateService.currentLang === _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_13__["LangConstants"].FRENCH_CODE) {
            this.scheduler.schedulerEngine.localeManager.locale = 'Fr';
        }
        else {
            this.scheduler.schedulerEngine.localeManager.locale = 'En';
        }
        this.showToday();
    };
    FlightSchedulingFormComponent.prototype.onReload = function () {
        this.loadTimeZoneList();
        this.loadSchedulingAtDate();
    };
    FlightSchedulingFormComponent.prototype.init = function () {
        this.treeTable = [];
        this.date = new Date();
        this.currDate = new Date();
        var radix = 10;
        this.currYear = Number.parseInt(this.datePipe.transform(this.currDate, 'yyyy'), radix);
        this.isScheduleLoading = false;
        this.isCalendarEvent = false;
        this.addFlightButtonVisible = false;
        this.updateFlightButtonVisible = false;
        this.removeFlightButtonVisible = false;
        this.resetFlightButtonVisible = false;
        this.cellSelected = {};
        this.colClicked = '';
        this.colsSelected = [];
        this.setTreeTableCols();
    };
    FlightSchedulingFormComponent.prototype.loadSchedulingAtDate = function () {
        this.setTreeTableCols();
        this.loadWorkSchdulingTable();
    };
    FlightSchedulingFormComponent.prototype.loadSchedulingAtTimeZone = function () {
        this.updateFlightScheduleDates();
    };
    FlightSchedulingFormComponent.prototype.updateFlightScheduleDates = function () {
        var _this = this;
        var previousTimezoneValue = Number(this.previousTimezone);
        var currentTimeZoneValue = Number(this.timeZoneSelected);
        if (currentTimeZoneValue !== previousTimezoneValue) {
            var gap_1 = Math.abs(previousTimezoneValue) >= 0 && Math.abs(currentTimeZoneValue)
                ? Math.abs(Math.abs(previousTimezoneValue) - Math.abs(currentTimeZoneValue))
                : Math.abs(previousTimezoneValue) + Math.abs(currentTimeZoneValue);
            var isGapPositive_1 = currentTimeZoneValue >= previousTimezoneValue;
            this.treeTable.forEach(function (treeRow) {
                if (!!treeRow.children) {
                    treeRow.children.forEach(function (child) {
                        var rowData = child.data;
                        if (!!rowData && !!rowData.date) {
                            var startDates = Object.keys(rowData.date);
                            var endDates = Object.values(rowData.date);
                            var newDateMap = {};
                            for (var i = 0; i < startDates.length; i++) {
                                startDates[i] = new Date(_this.updateFlightScheduleDate(gap_1, isGapPositive_1, "" + startDates[i])).toISOString();
                                endDates[i] = new Date(_this.updateFlightScheduleDate(gap_1, isGapPositive_1, "" + endDates[i])).toISOString();
                                newDateMap[startDates[i]] = endDates[i];
                            }
                            rowData.date = newDateMap;
                        }
                    });
                }
            });
            this.treeTable = __spread(this.treeTable);
            this.previousTimezone = Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(this.timeZoneSelected);
        }
    };
    FlightSchedulingFormComponent.prototype.updateFlightScheduleDate = function (gap, isGapPositive, date) {
        if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__["StringUtils"].isNullOrEmpty(date)) {
            return '';
        }
        else {
            var dateValue = new Date(date);
            var updatedDate = isGapPositive
                ? moment__WEBPACK_IMPORTED_MODULE_5__(dateValue).add(gap, 'hours')
                : moment__WEBPACK_IMPORTED_MODULE_5__(dateValue).subtract(gap, 'hours');
            return updatedDate.format(this.sessionService.dateTimeFormatMomentJS);
        }
    };
    FlightSchedulingFormComponent.prototype.loadTimeZoneList = function () {
        var _this = this;
        this.timeZoneList = [];
        this.timeZoneSelected = undefined;
        this.propertiesService.getTimeZones().subscribe(function (results) {
            _this.timeZoneList = results
                .map(function (result) {
                return {
                    label: result.label,
                    value: _this.dateService.getTimeZoneValue(result.value)
                };
            })
                .filter(function (timezone) { return !!timezone.value; });
            _this.propertiesService.getDefaultTimeZoneCode().subscribe(function (result) {
                _this.timeZoneSelected = _this.dateService.getTimeZoneValue(result);
                _this.previousTimezone = Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(_this.timeZoneSelected);
            });
        });
    };
    FlightSchedulingFormComponent.prototype.loadWorkSchdulingTable = function (cue) {
        var _this = this;
        this.treeTable = [];
        this.isTableLoading = true;
        var bidoFleetDTOId = {
            fleetId: !!this.componentData.objectId
                ? this.serializationService.deserialize(this.componentData.objectId).fleetId
                : ''
        };
        var input = {
            bidoFleetDTOId: bidoFleetDTOId,
            startDate: this.date,
            timeZone: this.timeZoneSelected
        };
        switch (cue) {
            case 'toggle':
                var endDateIndex = 14;
                input.startDate = new Date(this.treeTableCols[1].field);
                input.endDate = new Date(this.treeTableCols[endDateIndex].field);
                break;
            default:
                break;
        }
        this.flightSchedulingFormService.getFlightScheduling(input).subscribe(function (result) {
            if (result) {
                _this.treeTable = result;
                _this.buildSchedulerResourceList(result);
                _this.buildSchedulerEventList();
                _this.isTableLoading = false;
            }
        });
    };
    FlightSchedulingFormComponent.prototype.loadWorkPackageStatusList = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_12__["GenericPropertyConstants"].AIRM_PROJECT_STATUS_MAP).subscribe(function (result) {
            _this.statusList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_25__["ListUtils"].orEmpty(result);
        });
    };
    FlightSchedulingFormComponent.prototype.openFlightSchedulingRowDetail = function (rowData) {
        if (!!rowData) {
            if (!!rowData.missionCode) {
                // Go to mission form
                var input = {
                    missionCode: rowData.missionCode
                };
                this.openMission(input, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__["ComponentOpenMode"].Read);
            }
            else {
                // Go to equipment form
                var equipmentFunction = rowData.equiFunction;
                var equipmentCode = rowData.equipmentCode;
                switch (equipmentFunction) {
                    case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__["AWPropertiesConstants"].FAMILY_FUNCTION_AIRCRAFT_KEY:
                        this.goToAircraft(equipmentCode, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__["ComponentOpenMode"].Read);
                        break;
                    case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_10__["AWPropertiesConstants"].FAMILY_FUNCTION_ENGINE_KEY:
                        this.goToEngine(equipmentCode, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__["ComponentOpenMode"].Read);
                        break;
                    default:
                        this.goToEquipment(equipmentCode, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__["ComponentOpenMode"].Read);
                        break;
                }
            }
        }
    };
    FlightSchedulingFormComponent.prototype.openMission = function (object, openMode) {
        var labelKey = 'transaction.MissionFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'MissionFormComponent',
            objectId: this.serializationService.serialize(object),
            openMode: openMode
        };
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    FlightSchedulingFormComponent.prototype.goToAircraft = function (aircraftCode, openMode) {
        var labelKey = 'transaction.AircraftFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'AircraftFormComponent',
            openMode: openMode
        };
        if (!!aircraftCode) {
            var equipmentId = {
                equipmentCode: aircraftCode
            };
            data.objectId = this.serializationService.serialize(equipmentId);
        }
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    FlightSchedulingFormComponent.prototype.goToEngine = function (engineCode, openMode) {
        var labelKey = 'transaction.EngineFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'EngineFormComponent',
            openMode: openMode
        };
        if (!!engineCode) {
            var equipmentId = {
                equipmentCode: engineCode
            };
            data.objectId = this.serializationService.serialize(equipmentId);
        }
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    FlightSchedulingFormComponent.prototype.goToEquipment = function (equipmentCode, openMode) {
        var labelKey = 'transaction.EquipmentFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'EquipmentFormComponent',
            openMode: openMode
        };
        if (!!equipmentCode) {
            var equipmentId = {
                equipmentCode: equipmentCode
            };
            data.objectId = this.serializationService.serialize(equipmentId);
        }
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    FlightSchedulingFormComponent.prototype.getCellColor = function (rowData, colName) {
        var cellSelectedCheck = JSON.stringify(rowData) === JSON.stringify(this.cellSelected) && this.colsSelected.some(function (col) { return col === colName; });
        var originalColor = this.getOriginalCellColorWhenCellIsSelected(rowData, colName);
        if (!!rowData) {
            if (cellSelectedCheck && originalColor === '') {
                return CellColor.WhiteCellSelected;
            }
            else if (cellSelectedCheck && originalColor === CellColor.Blue) {
                return CellColor.BlueCellSelected;
            }
            else if (this.isCellColourable(rowData, colName)) {
                return CellColor.Blue;
            }
        }
        return '';
    };
    FlightSchedulingFormComponent.prototype.getOriginalCellColorWhenCellIsSelected = function (rowData, colName) {
        if (!!rowData) {
            if (this.isCellColourable(rowData, colName)) {
                return CellColor.Blue;
            }
        }
        return '';
    };
    FlightSchedulingFormComponent.prototype.showTooltip = function (flightSchedulingRowData, colName) {
        if (!!flightSchedulingRowData && !!flightSchedulingRowData.date) {
            var colDateValue = new Date(colName).valueOf();
            var startDates = Object.keys(flightSchedulingRowData.date);
            var endDates = Object.values(flightSchedulingRowData.date);
            var chronoNumber = flightSchedulingRowData.chronoNumber;
            var flightType = flightSchedulingRowData.flightType;
            var formattedStartDate = '';
            var formattedEndDate = '';
            for (var i = 0; i < startDates.length; i++) {
                var startDateValue = new Date(this.dateService.dateToString(new Date(startDates[i]))).valueOf();
                var endDateValue = new Date(this.dateService.dateToString(new Date(endDates[i]))).valueOf();
                var condition = colDateValue >= startDateValue && colDateValue <= endDateValue;
                if (condition) {
                    formattedStartDate = this.dateService.dateWitCustomFormatToString(new Date(startDates[i]), _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppConstants"].MOMENTJS_DATE_TIME);
                    formattedEndDate = this.dateService.dateWitCustomFormatToString(new Date(endDates[i]), _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppConstants"].MOMENTJS_DATE_TIME);
                    break;
                }
            }
            var status_1 = flightSchedulingRowData.flightStatus;
            var labelStyle = 'style="display: inline-block; width: 120px"';
            var valueStyle = 'style="font-weight: 600"';
            var chronoNumberLabel = this.translateService.instant(this.getComponentName() + ".chronoNumber");
            var flightTypeLabel = this.translateService.instant(this.getComponentName() + ".flightType");
            var startDateLabel = this.translateService.instant(this.getComponentName() + ".startDate");
            var endDateLabel = this.translateService.instant(this.getComponentName() + ".endDate");
            var statusLabel = this.translateService.instant(this.getComponentName() + ".status");
            var chronoNumberHtml = '<div>' +
                ("<span " + labelStyle + ">" + chronoNumberLabel + "</span><span " + valueStyle + ">" + chronoNumber + "</span>") +
                '</div>';
            var flightTypeHtml = '<div>' + ("<span " + labelStyle + ">" + flightTypeLabel + "</span><span " + valueStyle + ">" + flightType + "</span>") + '</div>';
            var startDateHtml = '<div>' +
                ("<span " + labelStyle + ">" + startDateLabel + "</span><span " + valueStyle + ">" + formattedStartDate + "</span>") +
                '</div>';
            var endDateHtml = '<div>' + ("<span " + labelStyle + ">" + endDateLabel + "</span><span " + valueStyle + ">" + formattedEndDate + "</span>") + '</div>';
            var statusHtml = '<div>' + ("<span " + labelStyle + ">" + statusLabel + "</span><span " + valueStyle + ">" + status_1 + "</span>") + '</div>';
            return [chronoNumberHtml, flightTypeHtml, startDateHtml, endDateHtml, statusHtml].join('');
        }
        return '';
    };
    FlightSchedulingFormComponent.prototype.setTreeTableCols = function () {
        this.treeTableCols = [];
        this.treeTableCols.push({ field: 'missionName', width: '12%', alignment: 'left' });
        var date = Object(lodash_es__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(this.date);
        for (var i = 1; i <= this.noOfDateToDisplay; i++) {
            this.treeTableCols.push({ field: "" + this.dateService.dateToString(date), width: '6%', alignment: 'left' });
            date.setDate(date.getDate() + 1);
        }
    };
    FlightSchedulingFormComponent.prototype.isCellColourable = function (rowData, colName) {
        var _this = this;
        if (!!rowData && !!rowData.equiFunction) {
            // aircraft
            var indexInTreeTable = this.treeTable.findIndex(function (row) { return "" + row.data.equipmentCode === rowData.equipmentCode; });
            var children = this.treeTable[indexInTreeTable].children;
            if (!!children) {
                return children.some(function (child) { return _this.isCellColourable(child.data, colName); });
            }
        }
        else {
            // flight
            if (!!rowData && !!rowData.date && !!colName) {
                var columnDate = new Date(colName).valueOf();
                var startDates = Object.keys(rowData.date);
                var endDates = Object.values(rowData.date);
                for (var i = 0; i < startDates.length; i++) {
                    var startDate = new Date(this.dateService.dateToString(new Date(startDates[i])));
                    var startDateValue = startDate.valueOf();
                    var endDate = new Date(this.dateService.dateToString(new Date(endDates[i])));
                    var endDateValue = endDate.valueOf();
                    if (endDate) {
                        if (columnDate >= startDateValue && columnDate <= endDateValue) {
                            return true;
                        }
                    }
                    else {
                        return false;
                    }
                }
            }
        }
        return false;
    };
    FlightSchedulingFormComponent.prototype.isAircraft = function (rowData) {
        return !!rowData.equiFunction;
    };
    FlightSchedulingFormComponent.prototype.onCellClick = function (rowData, colName) {
        this.cellSelected = rowData;
        this.colClicked = colName;
        this.colsSelected = [];
        this.colsSelected.push(colName);
        var cellColor = this.getCellColor(rowData, colName);
        if (!!rowData.equiFunction) {
            // aircraft
            this.addFlightButtonVisible =
                cellColor !== CellColor.Blue && cellColor !== CellColor.BlueCellSelected ? true : false;
            this.updateFlightButtonVisible = false;
            this.removeFlightButtonVisible = false;
            this.resetFlightButtonVisible = false;
        }
        else {
            // flight
            this.addFlightButtonVisible = false;
            this.updateFlightButtonVisible =
                cellColor === CellColor.Blue || cellColor === CellColor.BlueCellSelected ? true : false;
            this.removeFlightButtonVisible =
                cellColor === CellColor.Blue || cellColor === CellColor.BlueCellSelected ? true : false;
            this.resetFlightButtonVisible =
                cellColor === CellColor.Blue || cellColor === CellColor.BlueCellSelected ? true : false;
        }
    };
    FlightSchedulingFormComponent.prototype.addFlight = function () {
        if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_26__["StringUtils"].isNullOrEmpty(this.colClicked)) {
            var date = new Date(this.colClicked);
            date.setHours(2);
            var missionEquipmentId = {
                equipmentCode: this.cellSelected.equipmentCode,
                aircraftRepresentation: this.cellSelected.equipmentName,
                startDate: date.getTime(),
                endDate: date.getTime()
            };
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__["ComponentConstants"].FLI_FLIGHT_FORM,
                objectId: this.serializationService.serialize(missionEquipmentId),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__["ComponentOpenMode"].Create
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    FlightSchedulingFormComponent.prototype.openFlight = function () {
        if (!!this.cellSelected.equipmentCode && !!this.cellSelected.missionCode && !!this.cellSelected.occurence) {
            var missionEquipmentId = {
                equipmentCode: this.cellSelected.equipmentCode,
                missionCode: this.cellSelected.missionCode,
                occurrence: this.cellSelected.occurence,
                chronoNumber: this.cellSelected.chronoNumber
            };
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_11__["ComponentConstants"].FLI_FLIGHT_FORM,
                objectId: this.serializationService.serialize(missionEquipmentId),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_14__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    FlightSchedulingFormComponent.prototype.removeFlight = function () {
        var _this = this;
        var confirmMessageKey = 'confirmDeleteSelectedMissionEquipment';
        this.confirmationService.confirmDelete({
            messageKey: this.getComponentName() + "." + confirmMessageKey,
            accept: function () {
                if (!!_this.cellSelected &&
                    !!_this.cellSelected.equipmentCode &&
                    !!_this.cellSelected.missionCode &&
                    _this.cellSelected.occurence !== null &&
                    _this.cellSelected.occurence !== undefined) {
                    var missionEquipmentId = {
                        equipmentCode: _this.cellSelected.equipmentCode,
                        missionCode: _this.cellSelected.missionCode,
                        occurrence: _this.cellSelected.occurence
                    };
                    _this.flightSchedulingFormService.removeBidoMissionEquipment(missionEquipmentId).subscribe(function () {
                        _this.loadWorkSchdulingTable();
                        _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteMissionEquipment'));
                    });
                }
            }
        });
    };
    var FlightSchedulingFormComponent_1;
    FlightSchedulingFormComponent.hoursInADay = 24;
    FlightSchedulingFormComponent.minutesInAnHour = 60;
    FlightSchedulingFormComponent.secondsInAMinute = 60;
    FlightSchedulingFormComponent.milisecondsInASecond = 1000;
    // Bryntum scheduler variables
    FlightSchedulingFormComponent.dayAndWeek = 'dayAndWeek';
    FlightSchedulingFormComponent.hourAndDay = 'hourAndDay';
    FlightSchedulingFormComponent.day = 'day';
    FlightSchedulingFormComponent.dateFormat = 'DD/MM/YYYY';
    FlightSchedulingFormComponent.displayDateFormat = 'DD/MM/YYYY';
    FlightSchedulingFormComponent.TIME_RESOLUTION_MAX_ZOOM = 10;
    FlightSchedulingFormComponent.TIME_RESOLUTION_MIN_ZOOM = 0;
    FlightSchedulingFormComponent.MISSION_NAME_CLASS = 'mission-name-select';
    FlightSchedulingFormComponent.MISSION_EVENT_CLASS = 'mission-event-select';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_8__["SchedulerComponent"]),
        __metadata("design:type", _shared_components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_8__["SchedulerComponent"])
    ], FlightSchedulingFormComponent.prototype, "scheduler", void 0);
    FlightSchedulingFormComponent = FlightSchedulingFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aw-flight-scheduling-form',
            template: __webpack_require__(/*! ./flight-scheduling-form.component.html */ "./src/app/main/flight-operations/flight-scheduling/form/flight-scheduling-form.component.html"),
            styles: [__webpack_require__(/*! ./flight-scheduling-form.component.scss */ "./src/app/main/flight-operations/flight-scheduling/form/flight-scheduling-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_17__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_18__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_19__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_21__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_23__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_22__["SessionService"],
            _flight_scheduling_form_service__WEBPACK_IMPORTED_MODULE_27__["FlightSchedulingFormService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_20__["PropertiesService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_16__["DateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmationService"]])
    ], FlightSchedulingFormComponent);
    return FlightSchedulingFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_24__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/flight-operations/flight-scheduling/form/flight-scheduling-form.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/flight-scheduling/form/flight-scheduling-form.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: FlightSchedulingFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightSchedulingFormService", function() { return FlightSchedulingFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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





var FlightSchedulingFormService = /** @class */ (function (_super) {
    __extends(FlightSchedulingFormService, _super);
    function FlightSchedulingFormService(http, appConfigService, fleetManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.fleetManagementApi = fleetManagementApi;
        return _this;
    }
    FlightSchedulingFormService.prototype.getFlightScheduling = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.getFlightScheduling, input);
    };
    FlightSchedulingFormService.prototype.removeBidoMissionEquipment = function (id) {
        var selectedFlightIds = [];
        selectedFlightIds.push(id);
        return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoMissionEquipment, selectedFlightIds);
    };
    FlightSchedulingFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__["FleetManagementApi"]])
    ], FlightSchedulingFormService);
    return FlightSchedulingFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/flight-operations/flight-scheduling/search/flight-scheduling-search.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/flight-scheduling/search/flight-scheduling-search.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">\r\n        {{ \"page.searchPage\" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row search-criteria-header\">\r\n                  <i\r\n                    class=\"fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action\"\r\n                    aria-hidden=\"true\"\r\n                    pTooltip=\"{{ 'global.reset' | translate }}\"\r\n                    tooltipPosition=\"top\"\r\n                    (click)=\"resetSearchCriteria()\"\r\n                  ></i>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".fleetCode\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.fleetCode\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".fleetName\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.fleetName\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".customerCode\" | translate }} </label>\r\n\r\n                    <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n                      <div class=\"form-control-data\" (click)=\"quickSearchBusinessPartner()\">\r\n                        {{ searchObject.customerCode }}\r\n                      </div>\r\n\r\n                      <div *ngIf=\"searchObject.customerCode\" class=\"btn-clear-wrapper\">\r\n                        <i\r\n                          class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"searchObject.customerCode = undefined\"\r\n                        ></i>\r\n                      </div>\r\n                      <div class=\"btn-search-wrapper\">\r\n                        <i\r\n                          class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"quickSearchBusinessPartner()\"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\"></div>\r\n                </div>\r\n\r\n                <div class=\"row search-criteria-footer\">\r\n                  <div class=\"search-actions\">\r\n                    <button\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      (click)=\"search()\"\r\n                      appKeyPress\r\n                      color=\"primary\"\r\n                      [keyCode]=\"'Enter'\"\r\n                      (keyPress)=\"search()\"\r\n                    >\r\n                      {{ \"global.toSearch\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.results\" | translate }} ({{ resultsTable.list ? resultsTable.list.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableResults\r\n                class=\"aw-table2\"\r\n                [columns]=\"resultsTableCols\"\r\n                [value]=\"resultsTable.list\"\r\n                [(selection)]=\"selectedFleets\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedFleets.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableResultsGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableResults.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"selectedFleets.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openViewScheduleForSelectedFleet()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <span *ngSwitchCase=\"'fleetCode'\">\r\n                        <a (click)=\"openFleetForm(rowData)\"> {{ rowData[col.field] }} </a>\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'isOperator'\">\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field]\">\r\n                          <i class=\"fa fa-fw fa-check\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                      </span>\r\n\r\n                      <span *ngSwitchCase=\"'isOwner'\">\r\n                        <span *ngIf=\"rowData[col.field] !== null && rowData[col.field]\">\r\n                          <i class=\"fa fa-fw fa-check\" aria-hidden=\"true\"></i>\r\n                        </span>\r\n                      </span>\r\n\r\n                      <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-search-customer\r\n    *ngIf=\"showQuickSearchBusinessPartnerPopup\"\r\n    [(display)]=\"showQuickSearchBusinessPartnerPopup\"\r\n    [customer-code]=\"searchObject.customerCode\"\r\n    (onSelected)=\"setSelectedBusinessPartner($event)\"\r\n  ></aw-dialog-search-customer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/flight-operations/flight-scheduling/search/flight-scheduling-search.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/flight-scheduling/search/flight-scheduling-search.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZmxpZ2h0LW9wZXJhdGlvbnMvZmxpZ2h0LXNjaGVkdWxpbmcvc2VhcmNoL2ZsaWdodC1zY2hlZHVsaW5nLXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/flight-operations/flight-scheduling/search/flight-scheduling-search.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/flight-scheduling/search/flight-scheduling-search.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: FlightSchedulingSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightSchedulingSearchComponent", function() { return FlightSchedulingSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/export.service */ "./src/app/shared/services/export.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _flight_scheduling_search_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./flight-scheduling-search.service */ "./src/app/main/flight-operations/flight-scheduling/search/flight-scheduling-search.service.ts");
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











var FlightSchedulingSearchComponent = /** @class */ (function (_super) {
    __extends(FlightSchedulingSearchComponent, _super);
    function FlightSchedulingSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, flightSchedulingSearchService, exportService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.flightSchedulingSearchService = flightSchedulingSearchService;
        _this.exportService = exportService;
        _this.isReadOnlyForm = false;
        _this.showQuickSearchBusinessPartnerPopup = false;
        _this.resultsTable = { list: [], moreResults: false };
        _this.searchObject = {};
        _this.selectedFleets = [];
        _this.resultsTableExportName = 'fleet-list';
        _this.resultsTableCols = [
            { field: 'fleetCode', alignment: 'left' },
            { field: 'fleetName', alignment: 'left' },
            { field: 'customerCode', alignment: 'left' }
        ];
        return _this;
    }
    FlightSchedulingSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_1__["ComponentConstants"].FLI_FLIGHT_SCHEDULING_SEARCH;
    };
    FlightSchedulingSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
    };
    FlightSchedulingSearchComponent.prototype.quickSearchBusinessPartner = function () {
        this.showQuickSearchBusinessPartnerPopup = true;
    };
    FlightSchedulingSearchComponent.prototype.resetResultsTable = function (table) {
        table.reset();
        table.filters = {};
    };
    FlightSchedulingSearchComponent.prototype.search = function () {
        var _this = this;
        var bidoFleetDTO = this.searchObject;
        this.flightSchedulingSearchService.getBidoFleetsBySearchCriteria(bidoFleetDTO).subscribe(function (results) {
            if (results) {
                _this.resultsTable = results;
            }
            _this.selectedFleets = [];
        });
    };
    FlightSchedulingSearchComponent.prototype.resetSearchCriteria = function () {
        this.searchObject = {};
    };
    FlightSchedulingSearchComponent.prototype.openViewSchedule = function (object, openMode) {
        if (object) {
            var labelKey = 'transaction.FlightSchedulingFormComponent';
            var data = {
                id: this.tabService.generateId(),
                componentId: 'FlightSchedulingFormComponent',
                objectId: this.serializationService.serialize(object),
                openMode: openMode
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    FlightSchedulingSearchComponent.prototype.openViewScheduleForSelectedFleet = function () {
        var _this = this;
        this.selectedFleets.forEach(function (fleet) {
            if (fleet) {
                if (fleet.fleetId && fleet.fleetId.length > 0) {
                    _this.openViewSchedule(fleet, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write);
                }
                else {
                    _this.messageService.showWarningMessage(_this.getTranslateKey('errorOnMissingFleetId'));
                }
            }
        });
    };
    FlightSchedulingSearchComponent.prototype.openFleetForm = function (fleet) {
        if (!!fleet && !!fleet.fleetId) {
            var labelKey = 'transaction.FleetFormComponent';
            var data = {
                id: this.tabService.generateId(),
                componentId: 'FleetFormComponent',
                objectId: this.serializationService.serialize(fleet),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
        else {
            this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingFleetId'));
        }
    };
    FlightSchedulingSearchComponent.prototype.setSelectedBusinessPartner = function (event) {
        this.searchObject.customerCode = event.customerCode;
    };
    FlightSchedulingSearchComponent.prototype.exportTable = function () {
        var dataToExport = [];
        this.resultsTable.list.forEach(function (fleet) {
            var fleetDataExport = {
                fleetCode: fleet.fleetCode,
                fleetName: fleet.fleetName,
                customerCode: fleet.customerCode
            };
            dataToExport.push(fleetDataExport);
        });
        this.exportService.toExcel(dataToExport, this.resultsTableExportName, this.componentData.componentId);
    };
    FlightSchedulingSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-flight-scheduling-search',
            template: __webpack_require__(/*! ./flight-scheduling-search.component.html */ "./src/app/main/flight-operations/flight-scheduling/search/flight-scheduling-search.component.html"),
            styles: [__webpack_require__(/*! ./flight-scheduling-search.component.scss */ "./src/app/main/flight-operations/flight-scheduling/search/flight-scheduling-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_8__["TabService"],
            _flight_scheduling_search_service__WEBPACK_IMPORTED_MODULE_10__["FlightSchedulingSearchService"],
            _shared_services_export_service__WEBPACK_IMPORTED_MODULE_3__["ExportService"]])
    ], FlightSchedulingSearchComponent);
    return FlightSchedulingSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_9__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/flight-operations/flight-scheduling/search/flight-scheduling-search.service.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/flight-scheduling/search/flight-scheduling-search.service.ts ***!
  \*****************************************************************************************************/
/*! exports provided: FlightSchedulingSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightSchedulingSearchService", function() { return FlightSchedulingSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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





var FlightSchedulingSearchService = /** @class */ (function (_super) {
    __extends(FlightSchedulingSearchService, _super);
    function FlightSchedulingSearchService(http, appConfigService, fleetManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.fleetManagementApi = fleetManagementApi;
        return _this;
    }
    FlightSchedulingSearchService.prototype.getBidoFleetsBySearchCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoFleetsBySearchCriteria, criteria);
    };
    FlightSchedulingSearchService.prototype.removeBidoFleet = function (bidoFleetDTOId) {
        return _super.prototype.post.call(this, this.fleetManagementApi.removeBidoFleet, bidoFleetDTOId);
    };
    FlightSchedulingSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__["FleetManagementApi"]])
    ], FlightSchedulingSearchService);
    return FlightSchedulingSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ })

}]);
//# sourceMappingURL=flight-operations-flight-scheduling-flight-scheduling-module.js.map