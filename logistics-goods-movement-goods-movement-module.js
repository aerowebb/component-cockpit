(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-goods-movement-goods-movement-module"],{

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

/***/ "./src/app/main/logistics/goods-movement/form/goods-movement-form.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-movement/form/goods-movement-form.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\n  <div class=\"page-context\">\n    <div class=\"page-title-container\">\n      <div class=\"page-title\">\n        {{ \"transaction.\" + getComponentName() | translate }}\n      </div>\n\n      <div class=\"page-secondary-actions\">\n        <i\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\n          aria-hidden=\"true\"\n          (click)=\"updateFavoriteState()\"\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\n          tooltipPosition=\"bottom\"\n        ></i>\n      </div>\n    </div>\n\n    <div class=\"page-subtitle-container\">\n      <div class=\"page-subtitle\">\n        {{ componentContext }}\n      </div>\n    </div>\n  </div>\n  <div class=\"page-primary-actions\">\n    <button type=\"button\" mat-raised-button (click)=\"onReload()\">\n      {{ \"global.refresh\" | translate }}\n    </button>\n  </div>\n</div>\n\n<div class=\"page-wrapper\">\n  <div class=\"page-container full-width\">\n    <div class=\"page-content\">\n      <div class=\"grid-row\">\n        <div class=\"grid-cell--6\">\n          <div #forecastInfos class=\"grid-cell grid-cell--container main-data-block\">\n            <div class=\"grid-cell-header\">\n              <div class=\"grid-cell-title-container\">\n                <h3 class=\"grid-cell-title\">\n                  {{ \"page.mainData\" | translate }}\n                </h3>\n              </div>\n            </div>\n\n            <div class=\"grid-cell-content\">\n              <div class=\"column\">\n                <div class=\"row\">\n                  <div class=\"form-group\">\n                    <label class=\"form-label\">\n                      {{ getComponentName() + \".mroCenter\" | translate }}\n                    </label>\n                    <div class=\"form-control\">\n                      <input\n                        type=\"text\"\n                        class=\"aw-input\"\n                        [(ngModel)]=\"mainDataInformation.mroCenter\"\n                        [disabled]=\"true\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"form-label\">\n                      {{ getComponentName() + \".numberOfAircraft\" | translate }}\n                    </label>\n                    <div class=\"form-control\">\n                      <input\n                        type=\"text\"\n                        class=\"aw-input\"\n                        [(ngModel)]=\"mainDataInformation.aircraftNumber\"\n                        [disabled]=\"true\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group\">\n                    <label class=\"form-label\">\n                      {{ getComponentName() + \".startDate\" | translate }}\n                    </label>\n                    <div class=\"form-control\">\n                      <input\n                        type=\"text\"\n                        class=\"aw-input\"\n                        [(ngModel)]=\"mainDataInformation.startDate\"\n                        [disabled]=\"true\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"form-label\">\n                      {{ getComponentName() + \".endDate\" | translate }}\n                    </label>\n                    <div class=\"form-control\">\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"mainDataInformation.endDate\" [disabled]=\"true\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"grid-cell--3\">\n          <div #ForecastInfos class=\"grid-cell grid-cell--container work-package-block\">\n            <div class=\"grid-cell-header\">\n              <div class=\"grid-cell-title-container\">\n                <h3 class=\"grid-cell-title\">\n                  {{ getComponentName() + \".workPackages\" | translate }}\n                </h3>\n              </div>\n            </div>\n\n            <div class=\"grid-cell-content \" *ngIf=\"statusList\">\n              <div class=\"column\">\n                <div\n                  *ngFor=\"\n                    let status of statusList | slice: startFirstPartStatusList:endFirstPartStatusList;\n                    let i = index\n                  \"\n                  class=\"form-group form-group-inline form-group-no-margin\"\n                >\n                  <label class=\"form-label\">\n                    {{ status.label }}\n                  </label>\n\n                  <div class=\"form-control\">\n                    <div class=\"form-control-generic\">\n                      {{ status.value }}\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"column\">\n                <div\n                  *ngFor=\"let status of statusList | slice: endFirstPartStatusList; let i = index\"\n                  class=\"form-group form-group-inline form-group-no-margin\"\n                >\n                  <label class=\"form-label\">\n                    {{ status.label }}\n                  </label>\n\n                  <div class=\"form-control\">\n                    <div class=\"form-control-generic\">\n                      {{ status.value }}\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"grid-cell--3\">\n          <aw-material-availability-indicators [procurementRequests]=\"procurementRequests\">\n          </aw-material-availability-indicators>\n        </div>\n      </div>\n      <div class=\"grid-row\">\n        <div class=\"grid-cell--12\">\n          <aw-procurement-requests-table [procurementRequests]=\"procurementRequests\"></aw-procurement-requests-table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/logistics/goods-movement/form/goods-movement-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-movement/form/goods-movement-form.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .grid-cell-search .search-actions button {\n  margin-left: 8px; }\n  :host .grid-cell-search .search-actions button:first-of-type {\n    margin-left: 0; }\n  :host .additionalInformationLabel {\n  display: flex;\n  flex-direction: row;\n  color: #01579b;\n  line-height: 1.75rem;\n  margin-left: calc(8px * 2);\n  font-size: 1rem; }\n  :host .grid-cell-stock-mvt-list .table {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%; }\n  :host .grid-cell-stock-mvt-list .table .batch-nb {\n    width: 7.5%; }\n  :host .grid-cell-stock-mvt-list .table .date {\n    width: 7.5%; }\n  :host .grid-cell-stock-mvt-list .table .illustration {\n    width: 7.5%; }\n  :host .grid-cell-stock-mvt-list .table .material {\n    width: 15%; }\n  :host .grid-cell-stock-mvt-list .table .quantity {\n    text-align: right;\n    width: 5%; }\n  :host .grid-cell-stock-mvt-list .table .serial-nb {\n    width: 7.5%; }\n  :host .grid-cell-stock-mvt-list .table .source {\n    width: 17.5%; }\n  :host .grid-cell-stock-mvt-list .table .status {\n    text-align: center;\n    width: 5%; }\n  :host .grid-cell-stock-mvt-list .table .stock {\n    width: 17.5%; }\n  :host .grid-cell-stock-mvt-list .table .type {\n    width: 5%; }\n  :host .grid-cell-stock-mvt-list .table .unit {\n    width: 5%; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-cell,\n  :host .grid-cell-stock-mvt-list .table .table-header .table-cell {\n    padding: 0 calc(8px / 2); }\n  :host .grid-cell-stock-mvt-list .table .table-header {\n    background-color: #fff;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 40px;\n    z-index: 1; }\n  :host .grid-cell-stock-mvt-list .table .table-header .table-row {\n      display: flex;\n      flex-direction: row;\n      border-bottom: 1px solid #595959;\n      max-height: 24px;\n      min-height: 24px; }\n  :host .grid-cell-stock-mvt-list .table .table-header .table-actions {\n      display: flex;\n      flex-direction: row;\n      padding-bottom: 8px; }\n  :host .grid-cell-stock-mvt-list .table .table-header .table-actions .row-actions {\n        display: flex;\n        flex-direction: row;\n        align-items: flex-end;\n        justify-content: flex-end; }\n  :host .grid-cell-stock-mvt-list .table .table-header .table-actions .row-actions > .aw-btn {\n          margin-left: 8px; }\n  :host .grid-cell-stock-mvt-list .table .table-header .table-actions .row-actions > .aw-btn:first-of-type {\n            margin-left: 0; }\n  :host .grid-cell-stock-mvt-list .table .table-header .table-actions .table-filters {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        margin-right: 8px; }\n  :host .grid-cell-stock-mvt-list .table .table-header .table-actions .table-filters > .aw-icon {\n          font-size: 1.125rem;\n          line-height: 2rem;\n          width: 2rem; }\n  :host .grid-cell-stock-mvt-list .table .table-header .table-actions .table-global-filter {\n        display: flex;\n        flex-direction: row;\n        align-items: baseline;\n        flex-grow: 1;\n        padding-right: 5%; }\n  :host .grid-cell-stock-mvt-list .table .table-header .table-actions .table-global-filter .global-filter-input {\n          background-color: transparent;\n          border-bottom-color: #595959;\n          border-left-color: transparent;\n          border-radius: 0;\n          border-right-color: transparent;\n          border-style: solid;\n          border-top-color: transparent;\n          border-width: 1px;\n          color: inherit;\n          font-family: inherit;\n          font-size: inherit;\n          font-weight: inherit;\n          line-height: 1.42857143;\n          outline: none;\n          padding: 2px 0 4px 0;\n          transition: border-bottom-color 0.25s ease-in-out;\n          min-width: 12rem;\n          width: 12rem;\n          transition: border-bottom-color 0.25s ease-in-out, width 0.5s ease; }\n  :host .grid-cell-stock-mvt-list .table .table-header .table-actions .table-global-filter .global-filter-input::-webkit-input-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-stock-mvt-list .table .table-header .table-actions .table-global-filter .global-filter-input:-moz-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-stock-mvt-list .table .table-header .table-actions .table-global-filter .global-filter-input::-moz-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-stock-mvt-list .table .table-header .table-actions .table-global-filter .global-filter-input:-ms-input-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-stock-mvt-list .table .table-header .table-actions .table-global-filter .global-filter-input:focus {\n            border-bottom-color: #01579b;\n            outline: none;\n            width: 100%; }\n  :host .grid-cell-stock-mvt-list .table .table-body {\n    min-height: calc(8px * 5); }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row {\n      display: flex;\n      flex-direction: row;\n      border-bottom: 1px solid #f0f0f0;\n      cursor: pointer;\n      padding: 8px 0; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row:hover {\n        background-color: #f0f0f0; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row.selected {\n        background-color: #b6deff;\n        border-bottom: 1px solid #b6deff;\n        border-top: 1px solid #b6deff; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row.selected.executed {\n          border-bottom: calc(2 * 1px) solid #595959; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row.selected.first {\n          border-top-width: 1px; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell {\n        display: flex;\n        flex-direction: column; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.illustration img {\n          max-height: 6rem; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.material .material-code {\n          font-weight: 600; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.material .material-designation {\n          font-style: italic; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.material .label {\n          width: 3rem; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.material .label.available {\n            width: 5rem; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.serial-nb {\n          font-weight: 600; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.source.source-default,\n        :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.source .pr-code,\n        :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.source .wo-code {\n          font-weight: 600; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.source.source-wo .label {\n          width: 2.5rem; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.source .wo-designation {\n          font-style: italic; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.status > span {\n          padding: calc(8px / 2); }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.status > span.executed {\n            background-color: #4caf50; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.status > span.out-dated {\n            background-color: #f6685e; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.status > span.requested {\n            background-color: #ffc107; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell.stock .label {\n          width: 5rem; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell .additional-data {\n          margin-top: 8px; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell .label {\n          display: inline-block; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell .value {\n          font-weight: bold; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell a {\n          color: #01579b; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row .table-cell a:hover {\n            text-decoration: underline; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row-details {\n      display: flex;\n      flex-direction: column;\n      border-bottom: 1px solid #b6deff;\n      border-top: 1px solid #b6deff;\n      border-right: 1px solid #b6deff;\n      border-left: 1px solid #b6deff; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row-details.endWp {\n        border-bottom: calc(2 * 1px) solid #006ea9; }\n  :host .grid-cell-stock-mvt-list .table .table-body .table-row-details .table-row-details-header {\n        margin-bottom: 8px; }\n  :host .table-filters-overlay {\n  display: flex;\n  flex-direction: row; }\n  :host .table-filters-overlay .column {\n    margin: 0 16px; }\n  :host .table-filters-overlay .filters {\n    display: flex;\n    flex-direction: column; }\n  :host .table-filters-overlay .filters > * {\n      margin: 8px 0 !important; }\n  :host .table-filters-overlay .filters .aw-dropdown {\n      overflow: visible !important; }\n  :host .ok {\n  background-color: #4caf50 !important;\n  width: 30%;\n  text-align: center; }\n  :host .warning {\n  background-color: #ffc107 !important;\n  width: 30%;\n  text-align: center; }\n  :host .nok {\n  background-color: #f6685e !important;\n  width: 30%;\n  text-align: center; }\n  :host .main-data-block .grid-cell-content > .column .form-group {\n  margin-bottom: 4px !important; }\n  :host .work-package-block .grid-cell-content > .column .form-group.form-group-inline.form-group-no-margin {\n  margin: 4px 0 4px 0 !important; }\n  :host .work-package-block .grid-cell-content > .column .form-group.form-group-inline.form-group-no-margin .form-label {\n    width: 65px; }\n  :host .material-availability-block .grid-cell-content > .column {\n  align-items: center; }\n  :host .material-availability-block .grid-cell-content > .column label {\n    width: 4rem; }\n  :host .material-availability-block .grid-cell-content > .column .form-group {\n    align-items: center; }\n  :host .material-availability-block .grid-cell-content > .column .form-group.form-group-inline.form-group-no-margin {\n      margin: 4px 0 4px 0 !important; }\n  :host .material-availability-block .grid-cell-content > .column .form-group .form-control-generic {\n      flex-direction: row;\n      justify-content: center;\n      min-width: 4rem;\n      padding: 0 8px; }\n  :host .material-availability-block .grid-cell-content > .column .form-group .form-control-generic.nok {\n        background-color: #f6685e; }\n  :host .material-availability-block .grid-cell-content > .column .form-group .form-control-generic.ok {\n        background-color: #4caf50; }\n  :host .material-availability-block .grid-cell-content > .column .form-group .form-control-generic.warn {\n        background-color: #ffc107; }\n  :host .material-availability-horizontal-block .row label {\n  width: 4rem; }\n  :host .material-availability-horizontal-block .row .form-group {\n  align-items: center; }\n  :host .material-availability-horizontal-block .row .form-group.form-group-no-margin {\n    margin: 4px 0 4px 0 !important; }\n  :host .material-availability-horizontal-block .row .form-group.form-group-no-margin .form-label {\n      text-align: center; }\n  :host .material-availability-horizontal-block .row .form-group.form-group-no-margin .form-control {\n      flex-direction: row;\n      text-align: center;\n      min-width: 4rem;\n      padding: 0 8px;\n      margin: 8px 16px 0px 16px !important;\n      line-height: 2; }\n  :host .material-availability-horizontal-block .row .form-group.form-group-no-margin .form-control.nok {\n        background-color: #f6685e; }\n  :host .material-availability-horizontal-block .row .form-group.form-group-no-margin .form-control.ok {\n        background-color: #4caf50; }\n  :host .material-availability-horizontal-block .row .form-group.form-group-no-margin .form-control.warn {\n        background-color: #ffc107; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvZ29vZHMtbW92ZW1lbnQvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXGdvb2RzLW1vdmVtZW50XFxmb3JtXFxnb29kcy1tb3ZlbWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9nb29kcy1tb3ZlbWVudC9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvZ29vZHMtbW92ZW1lbnQvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFJUSxnQkNtQ1UsRUFBQTtFRHZDbEI7SUFPVSxjQUFjLEVBQUE7RUFQeEI7RUFjSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLGVBQWUsRUFBQTtFQW5CbkI7RUVhRSxhQUFhO0VBQ2Isc0JBQXNCO0VGWWxCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7RUEzQmpCO0lBOEJRLFdBQVcsRUFBQTtFQTlCbkI7SUFrQ1EsV0FBVyxFQUFBO0VBbENuQjtJQXNDUSxXQUFXLEVBQUE7RUF0Q25CO0lBMENRLFVBQVUsRUFBQTtFQTFDbEI7SUE4Q1EsaUJBQWlCO0lBQ2pCLFNBQVMsRUFBQTtFQS9DakI7SUFtRFEsV0FBVyxFQUFBO0VBbkRuQjtJQXVEUSxZQUFZLEVBQUE7RUF2RHBCO0lBMkRRLGtCQUFrQjtJQUNsQixTQUFTLEVBQUE7RUE1RGpCO0lBZ0VRLFlBQVksRUFBQTtFQWhFcEI7SUFvRVEsU0FBUyxFQUFBO0VBcEVqQjtJQXdFUSxTQUFTLEVBQUE7RUF4RWpCOztJQThFVSx3QkFBcUMsRUFBQTtFQTlFL0M7SUFtRlEsc0JDeEZ1QjtJRHlGdkIsd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixTQ2xDWTtJRG1DWixVQUFVLEVBQUE7RUF0RmxCO01Fa0JFLGFBQWE7TUFDYixtQkFBbUI7TUZ3RVgsZ0NDN0ZvQjtNRDhGcEIsZ0JBOUZnQjtNQStGaEIsZ0JBL0ZnQixFQUFBO0VBRTFCO01Fa0JFLGFBQWE7TUFDYixtQkFBbUI7TUZnRlgsbUJDNURRLEVBQUE7RUR2Q2xCO1FFa0JFLGFBQWE7UUFDYixtQkFBbUI7UUZxRlQscUJBQXFCO1FBQ3JCLHlCQUF5QixFQUFBO0VBekdyQztVQTRHYyxnQkNyRUksRUFBQTtFRHZDbEI7WUErR2dCLGNBQWMsRUFBQTtFQS9HOUI7UUVrQkUsYUFBYTtRQUNiLG1CQUFtQjtRRm9HVCxtQkFBbUI7UUFDbkIsaUJDakZNLEVBQUE7RUR2Q2xCO1VBMkhjLG1CQUFtQjtVQUNuQixpQkFBaUI7VUFDakIsV0FBVyxFQUFBO0VBN0h6QjtRRWtCRSxhQUFhO1FBQ2IsbUJBQW1CO1FGaUhULHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osaUJBQWlCLEVBQUE7RUF0STdCO1VFdUJFLDZCQUE2QjtVQUM3Qiw0QkQxQjRCO1VDMkI1Qiw4QkFBOEI7VUFDOUIsZ0JBQWdCO1VBQ2hCLCtCQUErQjtVQUMvQixtQkRLa0I7VUNKbEIsNkJBQTZCO1VBQzdCLGlCRElnQjtVQ0hoQixjQUFjO1VBQ2Qsb0JBQW9CO1VBQ3BCLGtCQUFrQjtVQUNsQixvQkFBb0I7VUFDcEIsdUJER3VCO1VDRnZCLGFBQWE7VUFDYixvQkFBb0I7VUFFcEIsaURBQWlEO1VGd0dyQyxnQkFBZ0I7VUFDaEIsWUFBWTtVQUVaLGtFQUFrRSxFQUFBO0VBbEpoRjtZQTJJZ0IsY0M3SWM7WUQ4SWQsZ0JBQWdCLEVBQUE7RUE1SWhDO1lBMklnQixjQzdJYztZRDhJZCxnQkFBZ0IsRUFBQTtFQTVJaEM7WUEySWdCLGNDN0ljO1lEOElkLGdCQUFnQixFQUFBO0VBNUloQztZQTJJZ0IsY0M3SWM7WUQ4SWQsZ0JBQWdCLEVBQUE7RUE1SWhDO1lBcUpnQiw0QkN0Sk07WUR1Sk4sYUFBYTtZQUNiLFdBQVcsRUFBQTtFQXZKM0I7SUErSlEseUJBQXNDLEVBQUE7RUEvSjlDO01Fa0JFLGFBQWE7TUFDYixtQkFBbUI7TUZpSlgsZ0NDeEswQjtNRHlLMUIsZUFBZTtNQUNmLGNBQXdCLEVBQUE7RUF0S2xDO1FBeUtZLHlCQzdLd0IsRUFBQTtFRElwQztRQTZLWSx5QkFBeUI7UUFDekIsZ0NBQWdDO1FBQ2hDLDZCQUE2QixFQUFBO0VBL0t6QztVQWtMYywwQ0NwTGdCLEVBQUE7RURFOUI7VUFzTGMscUJDcEpJLEVBQUE7RURsQ2xCO1FFYUUsYUFBYTtRQUNiLHNCQUFzQixFQUFBO0VGZHhCO1VBOExjLGdCQUFnQixFQUFBO0VBOUw5QjtVQW1NZ0IsZ0JBQWdCLEVBQUE7RUFuTWhDO1VBdU1nQixrQkFBa0IsRUFBQTtFQXZNbEM7VUEyTWdCLFdBQVcsRUFBQTtFQTNNM0I7WUE4TWtCLFdBQVcsRUFBQTtFQTlNN0I7VUFvTmMsZ0JBQWdCLEVBQUE7RUFwTjlCOzs7VUEyTmdCLGdCQUFnQixFQUFBO0VBM05oQztVQWdPa0IsYUFBYSxFQUFBO0VBaE8vQjtVQXFPZ0Isa0JBQWtCLEVBQUE7RUFyT2xDO1VBMk9nQixzQkFBbUMsRUFBQTtFQTNPbkQ7WUE4T2tCLHlCQzlOSSxFQUFBO0VEaEJ0QjtZQWtQa0IseUJDL05FLEVBQUE7RURuQnBCO1lBc1BrQix5QkNyT0YsRUFBQTtFRGpCaEI7VUE2UGdCLFdBQVcsRUFBQTtFQTdQM0I7VUFrUWMsZUMzTkksRUFBQTtFRHZDbEI7VUFzUWMscUJBQXFCLEVBQUE7RUF0UW5DO1VBMFFjLGlCQUFpQixFQUFBO0VBMVEvQjtVQThRYyxjQy9RUSxFQUFBO0VEQ3RCO1lBaVJnQiwwQkFBMEIsRUFBQTtFQWpSMUM7TUVhRSxhQUFhO01BQ2Isc0JBQXNCO01GNFFkLGdDQUFnQztNQUNoQyw2QkFBNkI7TUFDN0IsK0JBQStCO01BQy9CLDhCQUE4QixFQUFBO0VBN1J4QztRQWdTWSwwQ0MzUVEsRUFBQTtFRHJCcEI7UUFvU1ksa0JDN1BNLEVBQUE7RUR2Q2xCO0VFa0JFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFRm5CckI7SUErU00sY0FBYyxFQUFBO0VBL1NwQjtJRWFFLGFBQWE7SUFDYixzQkFBc0IsRUFBQTtFRmR4QjtNQXNUUSx3QkFBa0MsRUFBQTtFQXRUMUM7TUEwVFEsNEJBQTRCLEVBQUE7RUExVHBDO0VBZ1VJLG9DQUEwQztFQUMxQyxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7RUFsVXRCO0VBc1VJLG9DQUFvQztFQUNwQyxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7RUF4VXRCO0VBNFVJLG9DQUF3QztFQUN4QyxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7RUE5VXRCO0VBcVZVLDZCQUE2QixFQUFBO0VBclZ2QztFQWlXYyw4QkFBOEIsRUFBQTtFQWpXNUM7SUFvV2dCLFdBQVcsRUFBQTtFQXBXM0I7RUFnWFEsbUJBQW1CLEVBQUE7RUFoWDNCO0lBbVhVLFdBQVcsRUFBQTtFQW5YckI7SUF1WFUsbUJBQW1CLEVBQUE7RUF2WDdCO01BMlhjLDhCQUE4QixFQUFBO0VBM1g1QztNQWdZWSxtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGVBQWU7TUFDZixjQzVWTSxFQUFBO0VEdkNsQjtRQXNZYyx5QkNuWE0sRUFBQTtFRG5CcEI7UUEwWWMseUJDMVhRLEVBQUE7RURoQnRCO1FBOFljLHlCQzdYRSxFQUFBO0VEakJoQjtFQXlaUSxXQUFXLEVBQUE7RUF6Wm5CO0VBNlpRLG1CQUFtQixFQUFBO0VBN1ozQjtJQWdhVSw4QkFBOEIsRUFBQTtFQWhheEM7TUFtYVksa0JBQWtCLEVBQUE7RUFuYTlCO01BdWFZLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGNDbllNO01Eb1lOLG9DQUFvQztNQUNwQyxjQUFjLEVBQUE7RUE1YTFCO1FBK2FjLHlCQzVaTSxFQUFBO0VEbkJwQjtRQW1iYyx5QkNuYVEsRUFBQTtFRGhCdEI7UUF1YmMseUJDdGFFLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9nb29kcy1tb3ZlbWVudC9mb3JtL2dvb2RzLW1vdmVtZW50LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbiR0YWJsZS1oZWFkZXItaGVpZ2h0OiAyNHB4O1xyXG5cclxuOmhvc3Qge1xyXG4gIC5ncmlkLWNlbGwtc2VhcmNoIHtcclxuICAgIC5zZWFyY2gtYWN0aW9ucyB7XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hZGRpdGlvbmFsSW5mb3JtYXRpb25MYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGNvbG9yOiAjMDE1NzliO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYyg4cHggKiAyKTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtc3RvY2stbXZ0LWxpc3Qge1xyXG4gICAgLnRhYmxlIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAuYmF0Y2gtbmIge1xyXG4gICAgICAgIHdpZHRoOiA3LjUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0ZSB7XHJcbiAgICAgICAgd2lkdGg6IDcuNSU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbGx1c3RyYXRpb24ge1xyXG4gICAgICAgIHdpZHRoOiA3LjUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0ZXJpYWwge1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5xdWFudGl0eSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VyaWFsLW5iIHtcclxuICAgICAgICB3aWR0aDogNy41JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNvdXJjZSB7XHJcbiAgICAgICAgd2lkdGg6IDE3LjUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RhdHVzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RvY2sge1xyXG4gICAgICAgIHdpZHRoOiAxNy41JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnR5cGUge1xyXG4gICAgICAgIHdpZHRoOiA1JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVuaXQge1xyXG4gICAgICAgIHdpZHRoOiA1JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRhYmxlLWJvZHksXHJcbiAgICAgIC50YWJsZS1oZWFkZXIge1xyXG4gICAgICAgIC50YWJsZS1jZWxsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgdG9wOiAkdG9wYmFyLWhlaWdodDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICAudGFibGUtcm93IHtcclxuICAgICAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAkdGFibGUtaGVhZGVyLWhlaWdodDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6ICR0YWJsZS1oZWFkZXItaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYmxlLWFjdGlvbnMge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgICAucm93LWFjdGlvbnMge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgICAgJiA+IC5hdy1idG4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhYmxlLWZpbHRlcnMge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAgICAgJiA+IC5hdy1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhYmxlLWdsb2JhbC1maWx0ZXIge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG5cclxuICAgICAgICAgICAgLmdsb2JhbC1maWx0ZXItaW5wdXQge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEycmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMnJlbTtcclxuXHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dCwgd2lkdGggMC41cyBlYXNlO1xyXG5cclxuICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFibGUtYm9keSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNSk7XHJcblxyXG4gICAgICAgIC50YWJsZS1yb3cge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZSAwO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmRlZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjZkZWZmO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2I2ZGVmZjtcclxuXHJcbiAgICAgICAgICAgICYuZXhlY3V0ZWQge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IGNhbGMoMiAqICN7JGJvcmRlci13aWR0aH0pICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5maXJzdCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50YWJsZS1jZWxsIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgICAgICAgICYuaWxsdXN0cmF0aW9uIGltZyB7XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogNnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5tYXRlcmlhbCB7XHJcbiAgICAgICAgICAgICAgLm1hdGVyaWFsLWNvZGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5tYXRlcmlhbC1kZXNpZ25hdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgJi5hdmFpbGFibGUge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2VyaWFsLW5iIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnNvdXJjZSB7XHJcbiAgICAgICAgICAgICAgJi5zb3VyY2UtZGVmYXVsdCxcclxuICAgICAgICAgICAgICAucHItY29kZSxcclxuICAgICAgICAgICAgICAud28tY29kZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgJi5zb3VyY2Utd28ge1xyXG4gICAgICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC53by1kZXNpZ25hdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgJiA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5leGVjdXRlZCB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi5vdXQtZGF0ZWQge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLnJlcXVlc3RlZCB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnN0b2NrIHtcclxuICAgICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYWRkaXRpb25hbC1kYXRhIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcblxyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFibGUtcm93LWRldGFpbHMge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I2ZGVmZjtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjZkZWZmO1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I2ZGVmZjtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2I2ZGVmZjtcclxuXHJcbiAgICAgICAgICAmLmVuZFdwIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogY2FsYygyICogI3skYm9yZGVyLXdpZHRofSkgJGJvcmRlci1zdHlsZSAkYmx1ZS1kYXJrMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGFibGUtcm93LWRldGFpbHMtaGVhZGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWJsZS1maWx0ZXJzLW92ZXJsYXkge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlcnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICAgJiA+ICoge1xyXG4gICAgICAgIG1hcmdpbjogJG1hcmdpbi12YWx1ZSAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hdy1kcm9wZG93biB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDEgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAud2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm5vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYWluLWRhdGEtYmxvY2sge1xyXG4gICAgLmdyaWQtY2VsbC1jb250ZW50IHtcclxuICAgICAgJiA+IC5jb2x1bW4ge1xyXG4gICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndvcmstcGFja2FnZS1ibG9jayB7XHJcbiAgICAuZ3JpZC1jZWxsLWNvbnRlbnQge1xyXG4gICAgICAmID4gLmNvbHVtbiB7XHJcbiAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgJi5mb3JtLWdyb3VwLWlubGluZSB7XHJcbiAgICAgICAgICAgICYuZm9ybS1ncm91cC1uby1tYXJnaW4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNHB4IDAgNHB4IDAgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgLmZvcm0tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0ZXJpYWwtYXZhaWxhYmlsaXR5LWJsb2NrIHtcclxuICAgIC5ncmlkLWNlbGwtY29udGVudCB7XHJcbiAgICAgICYgPiAuY29sdW1uIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICB3aWR0aDogNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgJi5mb3JtLWdyb3VwLWlubGluZSB7XHJcbiAgICAgICAgICAgICYuZm9ybS1ncm91cC1uby1tYXJnaW4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNHB4IDAgNHB4IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDRyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICYubm9rIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5vayB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi53YXJuIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0ZXJpYWwtYXZhaWxhYmlsaXR5LWhvcml6b250YWwtYmxvY2sge1xyXG4gICAgLnJvdyB7XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogNHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICYuZm9ybS1ncm91cC1uby1tYXJnaW4ge1xyXG4gICAgICAgICAgbWFyZ2luOiA0cHggMCA0cHggMCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgIC5mb3JtLWxhYmVsIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNHJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDhweCAxNnB4IDBweCAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG5cclxuICAgICAgICAgICAgJi5ub2sge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLm9rIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLndhcm4ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/logistics/goods-movement/form/goods-movement-form.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main/logistics/goods-movement/form/goods-movement-form.service.ts ***!
  \***********************************************************************************/
/*! exports provided: GoodsMovementFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsMovementFormService", function() { return GoodsMovementFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/am-project-management.api */ "./src/app/shared/api/am-project-management.api.ts");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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






var GoodsMovementFormService = /** @class */ (function (_super) {
    __extends(GoodsMovementFormService, _super);
    function GoodsMovementFormService(http, appConfigService, amProjectManagementApi, bidtSiteApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.amProjectManagementApi = amProjectManagementApi;
        _this.bidtSiteApi = bidtSiteApi;
        return _this;
    }
    GoodsMovementFormService.prototype.findSiteById = function (siteId) {
        return _super.prototype.post.call(this, this.bidtSiteApi.getById, siteId);
    };
    GoodsMovementFormService.prototype.findWorkPackage = function (projectId) {
        return _super.prototype.post.call(this, this.amProjectManagementApi.findBidmProject, projectId);
    };
    GoodsMovementFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"],
            _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_2__["AMProjectManagementApi"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_3__["BidtSiteApi"]])
    ], GoodsMovementFormService);
    return GoodsMovementFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/goods-movement/form/material-availability/material-availability-forecasting.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/goods-movement/form/material-availability/material-availability-forecasting.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: MaterialAvailabilityForecastingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialAvailabilityForecastingFormComponent", function() { return MaterialAvailabilityForecastingFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _maintenance_procurement_request_procurement_requests_table_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../maintenance/procurement-request/procurement-requests-table.service */ "./src/app/main/maintenance/procurement-request/procurement-requests-table.service.ts");
/* harmony import */ var _goods_movement_form_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../goods-movement-form.service */ "./src/app/main/logistics/goods-movement/form/goods-movement-form.service.ts");
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




















var MaterialAvailabilityForecastingFormComponent = /** @class */ (function (_super) {
    __extends(MaterialAvailabilityForecastingFormComponent, _super);
    function MaterialAvailabilityForecastingFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, pageTocService, sessionService, goodsMovementFormService, propertiesService, translateService, procurementRequestsTableService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.sessionService = sessionService;
        _this.goodsMovementFormService = goodsMovementFormService;
        _this.propertiesService = propertiesService;
        _this.translateService = translateService;
        _this.procurementRequestsTableService = procurementRequestsTableService;
        _this.startFirstPartStatusList = 0;
        _this.endFirstPartStatusList = 3;
        return _this;
    }
    MaterialAvailabilityForecastingFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.init();
    };
    MaterialAvailabilityForecastingFormComponent.prototype.init = function () {
        var _this = this;
        this.mainDataInformation = { aircraftNumber: 0 };
        this.forecastObject = this.componentData.objectId
            ? this.serializationService.deserialize(this.componentData.objectId)
            : undefined;
        if (this.forecastObject) {
            this.goodsMovementFormService.findSiteById(this.forecastObject.siteId).subscribe(function (site) {
                _this.mroCenter = site;
                _this.initData();
                _this.setComponentContext();
            });
            var wpIds = this.forecastObject.workPackageIdList.map(function (workPackageId) {
                return {
                    projectId: workPackageId
                };
            });
            this.procurementRequestsTableService
                .findProcReqItemsAndStockQuantityIndicators(undefined, wpIds)
                .subscribe(function (proqReq) {
                _this.procurementRequests = proqReq;
            });
        }
    };
    MaterialAvailabilityForecastingFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_MATERIAL_AVAILABILITY_FORECASTING_FORM;
    };
    MaterialAvailabilityForecastingFormComponent.prototype.setComponentContext = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            this.translateService.get(this.getTranslateKey('from')),
            this.translateService.get(this.getTranslateKey('to'))
        ]).subscribe({
            next: function (_a) {
                var _b = __read(_a, 2), translation1 = _b[0], translation2 = _b[1];
                if (_this.forecastObject) {
                    _this.componentContext = _this.mroCenter.siteName + " | " + translation1 + " " + moment__WEBPACK_IMPORTED_MODULE_2__(_this.forecastObject.startDate).format(_this.sessionService.dateFormatMomentJS) + " " + translation2 + " " + moment__WEBPACK_IMPORTED_MODULE_2__(_this.forecastObject.endDate).format(_this.sessionService.dateFormatMomentJS);
                    _this.displayComponentContext(_this.componentContext, false);
                }
            }
        });
    };
    MaterialAvailabilityForecastingFormComponent.prototype.onReload = function () {
        this.initData();
    };
    MaterialAvailabilityForecastingFormComponent.prototype.initData = function () {
        var _this = this;
        this.mainDataInformation = { aircraftNumber: 0 };
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].AIRM_PROJECT_STATUS_MAP).subscribe(function (result) {
            var nbOfStatus = 5;
            _this.statusList = result.slice(_this.startFirstPartStatusList, nbOfStatus);
        });
        this.workPackageInforamtion = {
            nbSimulated: 0,
            nbScheduled: 0,
            nbReleased: 0,
            nbOnGoing: 0,
            nbPerformed: 0
        };
        this.initMainDataInformation();
        this.setWorkPackageInfo();
    };
    MaterialAvailabilityForecastingFormComponent.prototype.initMainDataInformation = function () {
        this.setMroCenterInfo();
        this.setDatesInfo();
    };
    MaterialAvailabilityForecastingFormComponent.prototype.setMroCenterInfo = function () {
        this.mainDataInformation.mroCenter = this.mroCenter.siteName + " (" + this.mroCenter.siteCode + ")";
    };
    MaterialAvailabilityForecastingFormComponent.prototype.setDatesInfo = function () {
        if (this.forecastObject) {
            this.mainDataInformation.startDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.forecastObject.startDate).format(this.sessionService.dateTimeFormatMomentJS);
            this.mainDataInformation.endDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.forecastObject.endDate).format(this.sessionService.dateTimeFormatMomentJS);
        }
    };
    MaterialAvailabilityForecastingFormComponent.prototype.setWorkPackageInfo = function () {
        var _this = this;
        var workPackageobservablesList = [];
        if (this.forecastObject) {
            this.forecastObject.workPackageIdList.forEach(function (wp) {
                workPackageobservablesList.push(_this.goodsMovementFormService.findWorkPackage(wp));
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(workPackageobservablesList)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                var valueList = [
                    _this.workPackageInforamtion.nbSimulated.toString(),
                    _this.workPackageInforamtion.nbScheduled.toString(),
                    _this.workPackageInforamtion.nbReleased.toString(),
                    _this.workPackageInforamtion.nbOnGoing.toString(),
                    _this.workPackageInforamtion.nbPerformed.toString()
                ];
                _this.statusList.forEach(function (status, i) {
                    status.value = valueList[i];
                });
            }))
                .subscribe(function (wpList) {
                var aircraftMsnComparator = '';
                wpList.forEach(function (wp) {
                    switch (wp.statusState) {
                        case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SIMULATED:
                            _this.workPackageInforamtion.nbSimulated++;
                            break;
                        case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SCHEDULED:
                            _this.workPackageInforamtion.nbScheduled++;
                            break;
                        case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_RELEASED:
                            _this.workPackageInforamtion.nbReleased++;
                            break;
                        case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_ONGOING:
                            _this.workPackageInforamtion.nbOnGoing++;
                            break;
                        case _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_PERFORMED:
                            _this.workPackageInforamtion.nbPerformed++;
                            break;
                        default:
                            break;
                    }
                    if (wp.aircraftMsn && aircraftMsnComparator !== wp.aircraftMsn) {
                        aircraftMsnComparator = wp.aircraftMsn;
                        _this.mainDataInformation.aircraftNumber++;
                    }
                });
            });
        }
    };
    MaterialAvailabilityForecastingFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-material-availability-context-form',
            template: __webpack_require__(/*! ../goods-movement-form.component.html */ "./src/app/main/logistics/goods-movement/form/goods-movement-form.component.html"),
            styles: [__webpack_require__(/*! ../goods-movement-form.component.scss */ "./src/app/main/logistics/goods-movement/form/goods-movement-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_11__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_12__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__["TabService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_5__["PageTocService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__["SessionService"],
            _goods_movement_form_service__WEBPACK_IMPORTED_MODULE_19__["GoodsMovementFormService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_13__["PropertiesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _maintenance_procurement_request_procurement_requests_table_service__WEBPACK_IMPORTED_MODULE_18__["ProcurementRequestsTableService"]])
    ], MaterialAvailabilityForecastingFormComponent);
    return MaterialAvailabilityForecastingFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_17__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/goods-movement/goods-movement.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/logistics/goods-movement/goods-movement.module.ts ***!
  \************************************************************************/
/*! exports provided: GoodsMovementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsMovementModule", function() { return GoodsMovementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/dialog-search-material/dialog-search-material.module */ "./src/app/shared/components/dialog-search-material/dialog-search-material.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/services/file.service */ "./src/app/shared/services/file.service.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _maintenance_procurement_request_procurement_requests_table_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../maintenance/procurement-request/procurement-requests-table.module */ "./src/app/main/maintenance/procurement-request/procurement-requests-table.module.ts");
/* harmony import */ var _material_availability_material_availability_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../material-availability/material-availability.module */ "./src/app/main/logistics/material-availability/material-availability.module.ts");
/* harmony import */ var _form_goods_movement_form_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form/goods-movement-form.service */ "./src/app/main/logistics/goods-movement/form/goods-movement-form.service.ts");
/* harmony import */ var _form_material_availability_material_availability_forecasting_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./form/material-availability/material-availability-forecasting.component */ "./src/app/main/logistics/goods-movement/form/material-availability/material-availability-forecasting.component.ts");
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
    primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__["CheckboxModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
    primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_4__["OverlayPanelModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__["SelectButtonModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"]
];
var INTERNAL_MODULES = [
    _maintenance_procurement_request_procurement_requests_table_module__WEBPACK_IMPORTED_MODULE_17__["ProcurementRequestsTableModule"],
    _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_11__["DialogSearchMaterialModule"],
    _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_12__["ManageSearchCriteriaModule"],
    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_13__["ModalModule"],
    _material_availability_material_availability_module__WEBPACK_IMPORTED_MODULE_18__["MaterialAvailabilityModule"],
    _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_14__["TableModule"]
];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [_form_material_availability_material_availability_forecasting_component__WEBPACK_IMPORTED_MODULE_20__["MaterialAvailabilityForecastingFormComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_shared_services_file_service__WEBPACK_IMPORTED_MODULE_15__["FileService"], _form_goods_movement_form_service__WEBPACK_IMPORTED_MODULE_19__["GoodsMovementFormService"]];
var GoodsMovementModule = /** @class */ (function () {
    function GoodsMovementModule() {
    }
    GoodsMovementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_16__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], GoodsMovementModule);
    return GoodsMovementModule;
}());



/***/ }),

/***/ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: DialogWorkOrderEditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogWorkOrderEditService", function() { return DialogWorkOrderEditService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/api/aircraft-maintenance.api */ "./src/app/shared/api/aircraft-maintenance.api.ts");
/* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/api/airworthiness-management.api */ "./src/app/shared/api/airworthiness-management.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/api/task-management.api */ "./src/app/shared/api/task-management.api.ts");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
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












var DialogWorkOrderEditService = /** @class */ (function (_super) {
    __extends(DialogWorkOrderEditService, _super);
    function DialogWorkOrderEditService(http, appConfigService, aircraftMaintenanceApi, airworthinessManagementApi, taskManagementApi, bidtWarehouseApi, fleetManagementApi, userProfileManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
        _this.airworthinessManagementApi = airworthinessManagementApi;
        _this.taskManagementApi = taskManagementApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.fleetManagementApi = fleetManagementApi;
        _this.userProfileManagementApi = userProfileManagementApi;
        return _this;
    }
    /**************************************************************************
     * Fleet management api
     *************************************************************************/
    DialogWorkOrderEditService.prototype.findBidoCustomer = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoCustomer, input);
    };
    DialogWorkOrderEditService.prototype.createOrUpdateBidmWorkOrder = function (bidmWorkOrder) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.createOrUpdateBidmWorkOrder, bidmWorkOrder);
    };
    DialogWorkOrderEditService.prototype.findRelatedItemsFromTask = function (bireTaskDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findRelatedItemsFromTask, bireTaskDTOId);
    };
    DialogWorkOrderEditService.prototype.findRelatedItemsFromEvolution = function (bireEvolutionDTO) {
        return _super.prototype.post.call(this, this.taskManagementApi.findRelatedItemsFromEvolution, bireEvolutionDTO);
    };
    DialogWorkOrderEditService.prototype.findRelatedAssets = function (findRelatedAssetsInput) {
        return _super.prototype.post.call(this, this.taskManagementApi.findRelatedAssets, findRelatedAssetsInput);
    };
    DialogWorkOrderEditService.prototype.findOperationsFromTaskAndRelatedTasks = function (bireTaskDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findOperationsFromTaskAndRelatedTasks, bireTaskDTOId);
    };
    DialogWorkOrderEditService.prototype.findOperationsFromEvolution = function (bireEvolutionDTO) {
        return _super.prototype.post.call(this, this.taskManagementApi.findOperationsFromEvolution, bireEvolutionDTO);
    };
    DialogWorkOrderEditService.prototype.findWorkOrder = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmWorkOrder, input);
    };
    DialogWorkOrderEditService.prototype.findBidmWorkOrder = function (bidmWorkOrderDTOId) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmWorkOrderData, bidmWorkOrderDTOId);
    };
    DialogWorkOrderEditService.prototype.calculateWorkOrderStatus = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.calculateWorkOrderStatus, input);
    };
    DialogWorkOrderEditService.prototype.findWorkOrderOriginDetails = function (input) {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.findWorkOrderOriginDetails, input);
    };
    DialogWorkOrderEditService.prototype.findBidmOperationsByWorkOrder = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmOperationsByWorkOrder, input);
    };
    DialogWorkOrderEditService.prototype.loadWarehouseList = function (input) {
        if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__["StringUtils"].isNullOrEmpty(input)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        else {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findByMandantAndSiteCode, input);
        }
    };
    DialogWorkOrderEditService.prototype.loadWareHouses = function () {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findAll);
    };
    DialogWorkOrderEditService.prototype.findUsersWithUseCaseForWorkOrder = function (input) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findUsersWithUseCaseForWorkOrder, input);
    };
    DialogWorkOrderEditService.prototype.findBireOperationPnsByOperation = function (p) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireOperationPnsByOperation, p);
    };
    DialogWorkOrderEditService.prototype.findBirePn = function (input) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBirePn, input);
    };
    DialogWorkOrderEditService.prototype.initalizeWoProcurementRequestInput = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.initializeProcurementRequest, input);
    };
    DialogWorkOrderEditService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__["AppConfigService"],
            _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__["AircraftMaintenanceApi"],
            _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_4__["AirworthinessManagementApi"],
            _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_7__["TaskManagementApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_5__["BidtWarehouseApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__["FleetManagementApi"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_8__["UserProfileManagementApi"]])
    ], DialogWorkOrderEditService);
    return DialogWorkOrderEditService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/services/file.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/file.service.ts ***!
  \*************************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _api_document_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/document.api */ "./src/app/shared/api/document.api.ts");
/* harmony import */ var _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _utils_image_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/image-utils */ "./src/app/shared/utils/image-utils.ts");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-config.service */ "./src/app/shared/services/app-config.service.ts");
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








var FileService = /** @class */ (function (_super) {
    __extends(FileService, _super);
    function FileService(http, appConfigService, domSanitizer, productStructureManagementApi, documentApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.domSanitizer = domSanitizer;
        _this.productStructureManagementApi = productStructureManagementApi;
        _this.documentApi = documentApi;
        return _this;
    }
    FileService.prototype.findIllustration = function (bireItemDtoId, bidoEquipementDTO) {
        var bidoBireId = {
            bidoEquipmentDTOId: { equipmentCode: bidoEquipementDTO.equipmentCode },
            bireItemDTOId: bireItemDtoId,
            sn: bidoEquipementDTO.sn
        };
        return _super.prototype.post.call(this, this.documentApi.findBidoBireDoc, bidoBireId);
    };
    FileService.prototype.findBireDocItemByPnCode = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireDocItemByPnCode, input);
    };
    FileService.prototype.sanitizeAndGetBase64Prefix = function (illustrationDocument) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl("" + _utils_image_utils__WEBPACK_IMPORTED_MODULE_6__["ImageUtils"].getBase64Prefix(illustrationDocument.docType) + illustrationDocument.docFile);
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _app_config_service__WEBPACK_IMPORTED_MODULE_7__["AppConfigService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__["ProductStructureManagementApi"],
            _api_document_api__WEBPACK_IMPORTED_MODULE_3__["DocumentApi"]])
    ], FileService);
    return FileService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/utils/image-utils.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/utils/image-utils.ts ***!
  \*********************************************/
/*! exports provided: ImageUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUtils", function() { return ImageUtils; });
/* harmony import */ var _string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string-utils */ "./src/app/shared/utils/string-utils.ts");

var ImageUtils = /** @class */ (function () {
    function ImageUtils() {
    }
    ImageUtils.getBase64Prefix = function (extension) {
        var formattedExtension = '';
        if (this.isJpg(extension)) {
            formattedExtension = ImageUtils.JPG_BASE64_ID;
        }
        else if (this.isPng(extension)) {
            formattedExtension = ImageUtils.PNG_BASE64_ID;
        }
        return _string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isEmpty(formattedExtension) ? '' : "data:image/" + formattedExtension + ";base64,";
    };
    ImageUtils.isJpg = function (extension) {
        return this.isFormatMatching(extension, ImageUtils.JPG_EXTENSION_LIST);
    };
    ImageUtils.isPng = function (extension) {
        return this.isFormatMatching(extension, ImageUtils.PNG_EXTENSION_LIST);
    };
    ImageUtils.isFormatMatching = function (extension, validExtensionList) {
        if (_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(extension)) {
            return false;
        }
        else {
            var extensionToCheck_1 = extension.toLowerCase();
            return validExtensionList.some(function (elt) { return elt === extensionToCheck_1; });
        }
    };
    ImageUtils.JPG_BASE64_ID = 'jpg';
    ImageUtils.PNG_BASE64_ID = 'png';
    ImageUtils.JPG_EXTENSION_LIST = ['jpeg', 'jpg'];
    ImageUtils.PNG_EXTENSION_LIST = ['png'];
    return ImageUtils;
}());



/***/ })

}]);
//# sourceMappingURL=logistics-goods-movement-goods-movement-module.js.map