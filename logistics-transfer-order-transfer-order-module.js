(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-transfer-order-transfer-order-module"],{

/***/ "./node_modules/primeng/chart.js":
/*!***************************************!*\
  !*** ./node_modules/primeng/chart.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/chart/chart */ "./node_modules/primeng/components/chart/chart.js"));

/***/ }),

/***/ "./src/app/main/logistics/transfer-order/form/material-selection/material-selection.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/form/material-selection/material-selection.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-row\">\r\n  <!-- BREADCRUMB BLOCK-->\r\n  <div class=\"grid-cell--12 custom-breadcrumb-padding\">\r\n    <div class=\"grid-cell grid-cell--container bread-crumb-custom-cell\">\r\n      <div class=\"grid-cell-content\">\r\n        <div class=\"row\">\r\n          <div class=\"breadcrumbs flex-row\">\r\n            <ul id=\"breadcrumbs-status\">\r\n              <li *ngFor=\"let state of breadcrumbsList\" [class.current]=\"state.title === breadcrumbsSelectedItem.title\">\r\n                <div class=\"statusLabel\">\r\n                  <div class=\"title\">{{ state.title }}</div>\r\n                  <div class=\"subtitle\" title=\"{{ state.subtittle }}\">{{ state.subtittle }}</div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- POST PANEL -->\r\n  <div #mainInfoAnchor class=\"grid-cell--12\">\r\n    <div class=\"grid-cell grid-cell--container\">\r\n      <div class=\"grid-cell-header\">\r\n        <div class=\"grid-cell-title-container\">\r\n          <h3 class=\"grid-cell-title\">\r\n            {{ getComponentName() + \".items\" | translate }}\r\n          </h3>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-cell-content\">\r\n        <div class=\"column\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">{{ getComponentName() + \".pn\" | translate }}</label>\r\n\r\n            <div class=\"form-control\">\r\n              <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"item.pn\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">{{ getComponentName() + \".designation\" | translate }}</label>\r\n\r\n            <div class=\"form-control\">\r\n              <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"item.designation\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"column\">\r\n          <div class=\"form-group custom-form\">\r\n            <div class=\"custom-control\">\r\n              {{ getComponentName() + \".transferQuantity\" | translate }}\r\n              <b class=\"value-class\">{{ item.transferQuantity }}</b>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group custom-form\">\r\n            <div class=\"custom-control\">\r\n              {{ getComponentName() + \".selectionQuantity\" | translate }}\r\n              <b class=\"value-class\">{{ item.selectionQuantity }}</b>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"column\">\r\n          <div class=\"form-group custom-form\">\r\n            <div class=\"custom-control\">\r\n              {{ getComponentName() + \".reserve\" | translate }}\r\n              <b class=\"value-class\">{{ item.reserve }}</b>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group custom-form\">\r\n            <div class=\"custom-control\">\r\n              {{ getComponentName() + \".withdrawn\" | translate }}\r\n              <b class=\"value-class\">{{ item.withdrawn }}</b>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group custom-form\">\r\n            <div class=\"custom-control\">\r\n              {{ getComponentName() + \".sent\" | translate }}\r\n              <b class=\"value-class\">{{ item.sent }}</b>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"column\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- MATERIAL PANEL  -->\r\n  <div #mainInfoAnchor class=\"grid-cell--12\">\r\n    <div class=\"grid-cell grid-cell--container\">\r\n      <div class=\"grid-cell-header\">\r\n        <div class=\"grid-cell-title-container\">\r\n          <h3 class=\"grid-cell-title\">\r\n            {{ getComponentName() + \".materialsProposed\" | translate }} ({{ materialTableDataSource.dataCount }})\r\n          </h3>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-cell-content\">\r\n        <!-- Counter ROW -->\r\n        <div class=\"row\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">&nbsp;</label>\r\n            <div class=\"form-control\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".site\" | translate }}</label>\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  placeholder=\"&nbsp;\"\r\n                  [showClear]=\"true\"\r\n                  [options]=\"siteList\"\r\n                  [(ngModel)]=\"selectedSite\"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">&nbsp;</label>\r\n            <div class=\"form-control\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".warehouse\" | translate }}</label>\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  placeholder=\"&nbsp;\"\r\n                  [showClear]=\"true\"\r\n                  [options]=\"warehouseList\"\r\n                  [(ngModel)]=\"selectedWarehouse\"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">&nbsp;</label>\r\n            <div class=\"form-control\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".date\" | translate }}</label>\r\n              <div class=\"form-control\">\r\n                <p-calendar\r\n                  showButtonBar=\"true\"\r\n                  [monthNavigator]=\"true\"\r\n                  [yearNavigator]=\"true\"\r\n                  [yearRange]=\"sessionService.calendarYearRange\"\r\n                  class=\"aw-calendar\"\r\n                  [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                  [locale]=\"sessionService.calendarFormat\"\r\n                  [(ngModel)]=\"date\"\r\n                  appendTo=\"body\"\r\n                  disabled\r\n                ></p-calendar>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\"></div>\r\n        </div>\r\n\r\n        <!-- MATERIAL TABLE -->\r\n        <a-table [dataSource]=\"materialTableDataSource\">\r\n          <ng-template columnDef=\"article\" let-rowData=\"rowData\">\r\n            <a>{{ rowData.article }}</a>\r\n          </ng-template>\r\n          <ng-template columnDef=\"sn\" let-rowData=\"rowData\">\r\n            <a>{{ rowData.sn }}</a>\r\n          </ng-template>\r\n          <ng-template columnDef=\"status\" let-rowData=\"rowData\">\r\n            <div class=\"code\">\r\n              <div class=\"info\">\r\n                <b>{{ rowData[\"status\"] }}</b>\r\n              </div>\r\n              <div class=\"info\">\r\n                <span *ngIf=\"rowData['statusLabel'] === reserve; then reserveTempate; else otherStatusTemplate\"></span>\r\n                <ng-template #reserveTempate\r\n                  ><b class=\"value-reserve\">{{ rowData[\"statusLabel\"] }}</b></ng-template\r\n                >\r\n\r\n                <ng-template\r\n                  #otherStatusTemplate\r\n                  *ngIf=\"\r\n                    !!rowData['statusLabel'] && rowData['statusLabel'].startsWith('Reserved for');\r\n                    then reservedForTemplate\r\n                  \"\r\n                >\r\n                </ng-template>\r\n                <ng-template #reservedForTemplate\r\n                  ><b class=\"value-reserve-for\">{{ rowData[\"statusLabel\"] }}</b>\r\n                </ng-template>\r\n                <span\r\n                  *ngIf=\"\r\n                    !!rowData['statusLabel'] &&\r\n                    rowData['statusLabel'] !== reserve &&\r\n                    !rowData['statusLabel'].startsWith('Reserved for')\r\n                  \"\r\n                  >{{ rowData[\"statusLabel\"] }}</span\r\n                >\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template columnDef=\"warehouse\" let-rowData=\"rowData\">\r\n            <div class=\"code\">\r\n              <div class=\"info\">\r\n                <span class=\"label-class\">{{ getComponentName() + \".site\" | translate }}</span>\r\n                <b>{{ rowData[\"site\"] }}</b>\r\n              </div>\r\n              <div class=\"info\">\r\n                <b>{{ rowData[\"warehouse\"] }}</b>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template columnDef=\"localisation\" let-rowData=\"rowData\">\r\n            <div class=\"code\">\r\n              <div class=\"info\">\r\n                <span class=\"label-class\">{{ getComponentName() + \".zone\" | translate }}</span>\r\n                <b>{{ rowData[\"zone\"] }}</b>\r\n              </div>\r\n              <div class=\"info\">\r\n                <span class=\"label-class\">{{ getComponentName() + \".emp\" | translate }}</span>\r\n                <b>{{ rowData[\"emp\"] }}</b>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template columnDef=\"tech\" let-rowData=\"rowData\">\r\n            <div class=\"code\">\r\n              <div class=\"info\">\r\n                <span class=\"label-class\">{{ getComponentName() + \".potential\" | translate }}</span>\r\n                <b>{{ rowData[\"potential\"] }}</b>\r\n              </div>\r\n              <div class=\"info\">\r\n                <span class=\"label-class\">{{ getComponentName() + \".lapsed\" | translate }}</span>\r\n                <b>{{ rowData[\"lapsed\"] }}</b>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template columnDef=\"action\" let-rowData=\"rowData\">\r\n            <button\r\n              *ngIf=\"rowData['statusLabel'] === reserve\"\r\n              type=\"button\"\r\n              mat-raised-button\r\n              color=\"warn\"\r\n              class=\"button-cancel\"\r\n              (click)=\"actionClick(rowData)\"\r\n            >\r\n              {{ \"global.cancel\" | translate }}\r\n            </button>\r\n            <button\r\n              *ngIf=\"!rowData['statusLabel']\"\r\n              type=\"button\"\r\n              mat-raised-button\r\n              class=\"button-reserve\"\r\n              (click)=\"actionClick(rowData)\"\r\n            >\r\n              {{ getComponentName() + \".reserve\" | translate }}\r\n            </button>\r\n            <button\r\n              *ngIf=\"!!rowData['statusLabel'] && rowData['statusLabel'].startsWith('Reserved for')\"\r\n              type=\"button\"\r\n              mat-raised-button\r\n              class=\"button-preempter\"\r\n              (click)=\"actionClick(rowData)\"\r\n            >\r\n              {{ getComponentName() + \".preempter\" | translate }}\r\n            </button>\r\n          </ng-template>\r\n        </a-table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/transfer-order/form/material-selection/material-selection.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/form/material-selection/material-selection.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .custom-progressbar {\n  padding: 0.7em 0; }\n\n:host #breadcrumbs-status {\n  overflow: hidden;\n  display: flex; }\n\n:host ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n:host .breadcrumbs {\n  display: flex;\n  flex-grow: 1; }\n\n:host .bread-crumb-custom-cell {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n  padding-bottom: 0 !important; }\n\n:host #breadcrumbs-status li {\n  float: left;\n  margin: 0 1em 0 1em; }\n\n:host #breadcrumbs-status .current {\n  float: left;\n  margin: 0 1em 0 1em; }\n\n:host #breadcrumbs-status .statusLabel {\n  background: #ffffff;\n  padding: 0.3em 1em;\n  float: left;\n  text-decoration: none;\n  color: #000;\n  position: relative;\n  white-space: nowrap;\n  min-height: 3em; }\n\n:host #breadcrumbs-status .current .statusLabel {\n  background: #01579b; }\n\n:host #breadcrumbs-status .statusLabel::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-width: 1.5em 0 1.5em 1em;\n  border-style: solid;\n  border-color: #ffffff #ffffff #ffffff transparent;\n  left: -1em; }\n\n:host #breadcrumbs-status .current .statusLabel::before {\n  border-color: #01579b #01579b #01579b transparent; }\n\n:host #breadcrumbs-status .statusLabel::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-top: 1.5em solid transparent;\n  border-bottom: 1.5em solid transparent;\n  border-left: 1em solid #ffffff;\n  right: -1em; }\n\n:host #breadcrumbs-status .current .statusLabel::after {\n  border-left-color: #01579b; }\n\n:host #breadcrumbs-status .current .statusLabel {\n  color: white;\n  font-weight: bold; }\n\n:host #breadcrumbs-status .current::after,\n:host #breadcrumbs-status .current::before {\n  content: normal; }\n\n:host .breadcrumb-cursor {\n  cursor: pointer; }\n\n:host .custom-breadcrumb-padding {\n  padding: 0 !important; }\n\n:host .code {\n  display: inline-table;\n  width: 100%; }\n\n:host ::ng-deep .name {\n  font-style: italic;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 20em; }\n\n:host ::ng-deep .info {\n  overflow: hidden;\n  padding-bottom: 0.4em;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n:host .label-class {\n  padding-right: 5.5em;\n  display: inline-block;\n  width: 3.5em; }\n\n:host .custom-width {\n  width: 100%; }\n\n:host .custom-form {\n  display: inline; }\n\n:host .custom-control {\n  width: -webkit-max-content !important;\n  width: -moz-max-content !important;\n  width: max-content !important;\n  margin-top: 1em !important; }\n\n:host .custom-label {\n  width: -webkit-max-content !important;\n  width: -moz-max-content !important;\n  width: max-content !important;\n  margin-top: 2em !important; }\n\n:host .value-class {\n  padding-left: 1em; }\n\n:host .value-reserve {\n  color: #4caf50; }\n\n:host .value-reserve-for {\n  color: #f6685e; }\n\n:host .button-reserve {\n  color: #4caf50 !important;\n  border-color: #4caf50 !important; }\n\n:host .button-reserve:hover {\n  background: #4caf50 !important;\n  border-color: #4caf50 !important;\n  color: #fff !important; }\n\n:host .button-cancel {\n  color: #f6685e !important;\n  border-color: #f6685e !important; }\n\n:host .button-preempter {\n  color: #fba643 !important;\n  border-color: #fba643 !important; }\n\n:host .button-preempter:hover {\n  background: #fba643 !important;\n  color: #fff !important;\n  border-color: #fba643 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvdHJhbnNmZXItb3JkZXIvZm9ybS9tYXRlcmlhbC1zZWxlY3Rpb24vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFx0cmFuc2Zlci1vcmRlclxcZm9ybVxcbWF0ZXJpYWwtc2VsZWN0aW9uXFxtYXRlcmlhbC1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbG9naXN0aWNzL3RyYW5zZmVyLW9yZGVyL2Zvcm0vbWF0ZXJpYWwtc2VsZWN0aW9uL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVJLGdCQUFnQixFQUFBOztBQUZwQjtFQU1JLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7O0FBUGpCO0VBV0ksU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFicEI7RUFpQkksYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFsQmhCO0VBc0JJLHdDQUF3QztFQUN4QyxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBOztBQXpCaEM7RUE2QkksV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQTlCdkI7RUFrQ0ksV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQW5DdkI7RUF1Q0ksbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFdDNUNxQjtFRDZDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBOUNuQjtFQWtESSxtQkNqRGtCLEVBQUE7O0FERHRCO0VBc0RJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGlEQUFpRDtFQUNqRCxVQUFVLEVBQUE7O0FBN0RkO0VBaUVJLGlEQUFtRSxFQUFBOztBQWpFdkU7RUFxRUksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsOEJBQThCO0VBQzlCLFdBQVcsRUFBQTs7QUE1RWY7RUFnRkksMEJDL0VrQixFQUFBOztBRER0QjtFQW9GSSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBckZyQjs7RUEwRkksZUFBZSxFQUFBOztBQTFGbkI7RUE4RkksZUFBZSxFQUFBOztBQTlGbkI7RUFrR0kscUJBQXFCLEVBQUE7O0FBbEd6QjtFQXNHSSxxQkFBcUI7RUFDckIsV0FBVyxFQUFBOztBQXZHZjtFQTJHSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQS9HbkI7RUFtSEksZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBdEh2QjtFQTBISSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUE1SGhCO0VBZ0lJLFdBQVcsRUFBQTs7QUFoSWY7RUFvSUksZUFBZSxFQUFBOztBQXBJbkI7RUF3SUkscUNBQTZCO0VBQTdCLGtDQUE2QjtFQUE3Qiw2QkFBNkI7RUFDN0IsMEJBQTBCLEVBQUE7O0FBekk5QjtFQTZJSSxxQ0FBNkI7RUFBN0Isa0NBQTZCO0VBQTdCLDZCQUE2QjtFQUM3QiwwQkFBMEIsRUFBQTs7QUE5STlCO0VBa0pJLGlCQUFpQixFQUFBOztBQWxKckI7RUFzSkksY0NwSWtCLEVBQUE7O0FEbEJ0QjtFQTBKSSxjQ3JJZ0IsRUFBQTs7QURyQnBCO0VBOEpJLHlCQUErQjtFQUMvQixnQ0FBc0MsRUFBQTs7QUEvSjFDO0VBbUtJLDhCQUFvQztFQUNwQyxnQ0FBc0M7RUFDdEMsc0JBQTJDLEVBQUE7O0FBcksvQztFQXlLSSx5QkFBNkI7RUFDN0IsZ0NBQW9DLEVBQUE7O0FBMUt4QztFQThLSSx5QkFBc0M7RUFDdEMsZ0NBQTZDLEVBQUE7O0FBL0tqRDtFQW1MSSw4QkFBMkM7RUFDM0Msc0JBQTJDO0VBQzNDLGdDQUE2QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvdHJhbnNmZXItb3JkZXIvZm9ybS9tYXRlcmlhbC1zZWxlY3Rpb24vbWF0ZXJpYWwtc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLmN1c3RvbS1wcm9ncmVzc2JhciB7XHJcbiAgICBwYWRkaW5nOiAwLjdlbSAwO1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmJyZWFkY3J1bWJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG5cclxuICAuYnJlYWQtY3J1bWItY3VzdG9tLWNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIDFlbSAwIDFlbTtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgMWVtIDAgMWVtO1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyAuc3RhdHVzTGFiZWwge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDAuM2VtIDFlbTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWluLWhlaWdodDogM2VtO1xyXG4gIH1cclxuXHJcbiAgI2JyZWFkY3J1bWJzLXN0YXR1cyAuY3VycmVudCAuc3RhdHVzTGFiZWwge1xyXG4gICAgYmFja2dyb3VuZDogJGFjY2VudC1jb2xvcjtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLnN0YXR1c0xhYmVsOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEuNWVtO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxLjVlbSAwIDEuNWVtIDFlbTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmYgI2ZmZmZmZiAjZmZmZmZmIHRyYW5zcGFyZW50O1xyXG4gICAgbGVmdDogLTFlbTtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQgLnN0YXR1c0xhYmVsOjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yICRhY2NlbnQtY29sb3IgJGFjY2VudC1jb2xvciB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLnN0YXR1c0xhYmVsOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMS41ZW07XHJcbiAgICBib3JkZXItdG9wOiAxLjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDEuNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFlbSBzb2xpZCAjZmZmZmZmO1xyXG4gICAgcmlnaHQ6IC0xZW07XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5jdXJyZW50IC5zdGF0dXNMYWJlbDo6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAjYnJlYWRjcnVtYnMtc3RhdHVzIC5jdXJyZW50IC5zdGF0dXNMYWJlbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQ6OmFmdGVyLFxyXG4gICNicmVhZGNydW1icy1zdGF0dXMgLmN1cnJlbnQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAuYnJlYWRjcnVtYi1jdXJzb3Ige1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1icmVhZGNydW1iLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNvZGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm5hbWUge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1heC13aWR0aDogMjBlbTtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuaW5mbyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNGVtO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgLmxhYmVsLWNsYXNzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUuNWVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDMuNWVtO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tbGFiZWwge1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC52YWx1ZS1jbGFzcyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICB9XHJcblxyXG4gIC52YWx1ZS1yZXNlcnZlIHtcclxuICAgIGNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gIH1cclxuXHJcbiAgLnZhbHVlLXJlc2VydmUtZm9yIHtcclxuICAgIGNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICB9XHJcblxyXG4gIC5idXR0b24tcmVzZXJ2ZSB7XHJcbiAgICBjb2xvcjogJGdyZWVuLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLXJlc2VydmU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGdyZWVuLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1jYW5jZWwge1xyXG4gICAgY29sb3I6ICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLXByZWVtcHRlciB7XHJcbiAgICBjb2xvcjogJGNyaXRpY2FsLXZhbHVlLWRhcmsgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogJGNyaXRpY2FsLXZhbHVlLWRhcmsgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5idXR0b24tcHJlZW1wdGVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjcml0aWNhbC12YWx1ZS1kYXJrICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkY3JpdGljYWwtdmFsdWUtZGFyayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/main/logistics/transfer-order/form/material-selection/material-selection.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/form/material-selection/material-selection.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: MaterialSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialSelectionComponent", function() { return MaterialSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _search_transfer_order_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../search/transfer-order-search.service */ "./src/app/main/logistics/transfer-order/search/transfer-order-search.service.ts");
/* harmony import */ var _transfer_order_form_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../transfer-order-form.service */ "./src/app/main/logistics/transfer-order/form/transfer-order-form.service.ts");
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













var MaterialSelectionComponent = /** @class */ (function (_super) {
    __extends(MaterialSelectionComponent, _super);
    function MaterialSelectionComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, transferOrderSearchService, transferOrderFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.transferOrderSearchService = transferOrderSearchService;
        _this.transferOrderFormService = transferOrderFormService;
        _this.date = new Date();
        _this.reserve = 'Reserve';
        return _this;
    }
    MaterialSelectionComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_MATERIAL_SELECTION;
    };
    MaterialSelectionComponent.prototype.ngOnInit = function () {
        this.breadcrumbsList = [];
        this.breadcrumbsSelectedItem = {};
        this.item = {};
        this.materialTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["TableDataSource"]({
            allowMultiSelect: false,
            enableSelection: false,
            columns: [
                { field: 'article', translateKey: this.getTranslateKey('article'), width: '15%' },
                { field: 'sn', translateKey: this.getTranslateKey('sn'), width: '15%' },
                { field: 'status', translateKey: this.getTranslateKey('status'), width: '15%' },
                { field: 'warehouse', translateKey: this.getTranslateKey('warehouse'), width: '15%' },
                { field: 'localisation', translateKey: this.getTranslateKey('localisation'), width: '15%' },
                { field: 'tech', translateKey: this.getTranslateKey('tech'), width: '15%' },
                {
                    field: 'action',
                    translateKey: this.getTranslateKey('action'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].CENTER,
                    width: '10%'
                }
            ],
            data: []
        });
        this.loadDropdown();
        this.loadMaterialData();
    };
    /***************************************
     * Load Dropdowns
     ***************************************/
    MaterialSelectionComponent.prototype.loadDropdown = function () {
        var _this = this;
        this.siteList = [];
        this.transferOrderSearchService.fetchSiteList().subscribe(function (res) {
            res.forEach(function (site) {
                if (!!site.siteId && !!site.siteName) {
                    _this.siteList.push({
                        label: site.siteName,
                        value: site.siteId
                    });
                }
            });
        });
        this.transferOrderSearchService.fetchWarehouseList().subscribe(function (res) {
            _this.warehouseList = res.sort(function (s1, s2) { return s1.value.localeCompare(s2.value); });
        });
    };
    /*****************************
     * Load Material table data
     *****************************/
    MaterialSelectionComponent.prototype.loadMaterialData = function () {
        this.item = this.transferOrderFormService.getItemData();
        var materialData = this.transferOrderFormService.loadMaterialData();
        this.materialTableDataSource.addData(materialData);
        // TEST DATA
        this.breadcrumbsList = [
            {
                subtittle: 'P/N 1311005-10',
                title: 'MATERIAL SELECTION'
            }
        ];
        this.breadcrumbsSelectedItem = this.breadcrumbsList[0];
    };
    MaterialSelectionComponent.prototype.actionClick = function (rowData) {
        rowData.statusLabel = rowData.statusLabel === this.reserve ? undefined : this.reserve;
    };
    MaterialSelectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-material-selection',
            template: __webpack_require__(/*! ./material-selection.component.html */ "./src/app/main/logistics/transfer-order/form/material-selection/material-selection.component.html"),
            styles: [__webpack_require__(/*! ./material-selection.component.scss */ "./src/app/main/logistics/transfer-order/form/material-selection/material-selection.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"],
            _search_transfer_order_search_service__WEBPACK_IMPORTED_MODULE_11__["TransferOrderSearchService"],
            _transfer_order_form_service__WEBPACK_IMPORTED_MODULE_12__["TransferOrderFormService"]])
    ], MaterialSelectionComponent);
    return MaterialSelectionComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/transfer-order/form/transfer-order-form.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/form/transfer-order-form.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div *ngIf=\"mainInfo.number\" class=\"page-subtitle\">- {{ mainInfo.number }}</div>\r\n      </div>\r\n    </div>\r\n    <div\r\n      class=\"object-status\"\r\n      [ngClass]=\"{\r\n        disabled: mainInfo.status == aWPropertiesConstants.TRANSFER_ORDER_STATUS_CANCELED\r\n      }\"\r\n      *ngIf=\"mainInfo.status\"\r\n      (click)=\"showStatus()\"\r\n    >\r\n      {{ mainInfo.status | formatSelectOption: torStatusList }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button type=\"button\" mat-raised-button *ngIf=\"showMaterialInfo\" (click)=\"goback()\">\r\n      {{ componentData.componentId + \".back\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"\r\n        isReadOpenMode &&\r\n        !showMaterialInfo &&\r\n        (tor.torType === aWPropertiesConstants.TRANSFER_ORDER_TYPE_REVERSE_MVT || !procRequest) &&\r\n        tor.torStatus === aWPropertiesConstants.TRANSFER_ORDER_STATUS_PLANNED\r\n      \"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"edit()\"\r\n    >\r\n      {{ \"global.edit\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode && !showMaterialInfo\"\r\n      type=\"button\"\r\n      color=\"warn\"\r\n      mat-raised-button\r\n      (click)=\"cancel()\"\r\n    >\r\n      {{ \"global.cancel\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode && !showMaterialInfo\"\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"save()\"\r\n    >\r\n      {{ \"global.save\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"init()\">{{ \"global.refresh\" | translate }}</button>\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">{{ \"addToFavorite\" | translate }}</button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <mat-tab-group animationDuration=\"0ms\" dynamicHeight>\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ \"home\" | translate }}\r\n        </ng-template>\r\n\r\n        <div class=\"grid-row\" *ngIf=\"!showMaterialInfo\">\r\n          <!-- MAIN INFO PANEL -->\r\n          <div id=\"mainPanel\" class=\"grid-cell--6\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ \"page.mainData\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content\">\r\n                <div class=\"column\">\r\n                  <!-- ROW 1 -->\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group flex--4\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".number\" | translate }}</label>\r\n\r\n                      <div class=\"form-control custom-anchor\">\r\n                        {{ mainInfo.number }}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group flex--4\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".type\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          *ngIf=\"mainInfo.type\"\r\n                          class=\"aw-input\"\r\n                          type=\"text\"\r\n                          disabled\r\n                          (ngModelChange)=\"mainInfo.type = $event\"\r\n                          [ngModel]=\"mainInfo.type | formatSelectOption: torTypeList | extractTranslation\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group flex--4\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".control\" | translate }}</label>\r\n\r\n                      <div\r\n                        class=\"form-control alert\"\r\n                        [ngClass]=\"{\r\n                          'procurement--ok':\r\n                            isReadOpenMode && tor.criticality == aWPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE,\r\n                          'procurement--warning':\r\n                            isReadOpenMode && tor.criticality == aWPropertiesConstants.LOGISTICAL_CRITICALITY_URGENT,\r\n                          'procurement--nok':\r\n                            isReadOpenMode && tor.criticality == aWPropertiesConstants.LOGISTICAL_CRITICALITY_IMMEDIATE\r\n                        }\"\r\n                      >\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          [options]=\"criticalitiesList\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [showClear]=\"true\"\r\n                          [(ngModel)]=\"tor.criticality\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group flex--4\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".applicant\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\">{{ mainInfo.applicant }} ({{ mainInfo.applicantLogin }})</div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex--4\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".created\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        {{ mainInfo.created | date: \"yyyy/MM/dd HH:mm\" }}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"flex--4\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".refDocument\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n              <!-- ROW 3 -->\r\n              <div class=\"grid-cell-content\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".refDocumentNum\" | translate }}</label>\r\n\r\n                  <div class=\"form-control custom-anchor\">\r\n                    <a class=\"link\" (click)=\"openReferenceDocument()\">{{ mainInfo.refDocumentNum }}</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\" stp>{{ getComponentName() + \".refDocType\" | translate }}</label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <input\r\n                      *ngIf=\"mainInfo.isProcurementRequestRefDoc && mainInfo.refDocType\"\r\n                      class=\"aw-input\"\r\n                      type=\"text\"\r\n                      disabled\r\n                      (ngModelChange)=\"mainInfo.refDocType = $event\"\r\n                      [ngModel]=\"mainInfo.refDocType | formatSelectOption: procurementRequestTypeList\"\r\n                    />\r\n                    <label *ngIf=\"mainInfo.isWorkPackageRefDoc && mainInfo.refDocumentNum\" style=\"padding-top: 2px;\">{{\r\n                      getComponentName() + \".workPackage\" | translate\r\n                    }}</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".refStatus\" | translate }}</label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <input\r\n                      *ngIf=\"mainInfo.isProcurementRequestRefDoc && mainInfo.refStatus\"\r\n                      class=\"aw-input\"\r\n                      type=\"text\"\r\n                      disabled\r\n                      (ngModelChange)=\"mainInfo.refStatus = $event\"\r\n                      [ngModel]=\"mainInfo.refStatus | formatSelectOption: procurementRequestStatusList\"\r\n                    />\r\n\r\n                    <input\r\n                      *ngIf=\"mainInfo.isWorkPackageRefDoc && mainInfo.refStatus\"\r\n                      class=\"aw-input\"\r\n                      type=\"text\"\r\n                      disabled\r\n                      (ngModelChange)=\"mainInfo.refStatus = $event\"\r\n                      [ngModel]=\"mainInfo.refStatus | formatSelectOption: workPackageStatuses\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- PROVIDER PANEL -->\r\n          <div class=\"grid-cell--3\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".supplier\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content\">\r\n                <div class=\"column\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".site\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\" *ngIf=\"mainInfo.supplierSite\">\r\n                      <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"mainInfo.supplierSite\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".warehouse\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\" *ngIf=\"mainInfo.supplierShop\">\r\n                      <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"mainInfo.supplierShop\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".date\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-calendar\r\n                        showButtonBar=\"true\"\r\n                        [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\"\r\n                        [yearRange]=\"sessionService.calendarYearRange\"\r\n                        class=\"aw-calendar\"\r\n                        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                        [locale]=\"sessionService.calendarFormat\"\r\n                        appendTo=\"body\"\r\n                        [(ngModel)]=\"mainInfo.supplierShipmentDate\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- RECIPIENT PANEL -->\r\n          <div class=\"grid-cell--3\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".recipient\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content\">\r\n                <div class=\"column\">\r\n                  <div class=\"form-group\" *ngIf=\"!mainInfo.recipientSite\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".partner\" | translate }}</label>\r\n\r\n                    <div class=\"form-control form-control-with-modal\" *ngIf=\"!isReadOpenMode\">\r\n                      <div class=\"form-control-data\" (click)=\"openCustomerDialog()\">\r\n                        <span *ngIf=\"bidoCustomerReceipt\"\r\n                          >{{ bidoCustomerReceipt?.customerCode }} - {{ bidoCustomerReceipt?.customerName }}</span\r\n                        >\r\n                      </div>\r\n\r\n                      <div *ngIf=\"bidoCustomerReceipt\" class=\"btn-clear-wrapper\">\r\n                        <i\r\n                          class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"unselectFinalCustomer()\"\r\n                        ></i>\r\n                      </div>\r\n                      <div class=\"btn-search-wrapper\">\r\n                        <i\r\n                          class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"openCustomerDialog()\"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-control\" *ngIf=\"isReadOpenMode\">\r\n                      <div class=\"form-control-generic\">\r\n                        {{ bidoCustomerReceipt?.customerCode }} - {{ bidoCustomerReceipt?.customerName }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\" *ngIf=\"mainInfo.recipientSite\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".site\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"siteList\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [showClear]=\"true\"\r\n                        [(ngModel)]=\"mainInfo.recipientSiteId\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                        (onChange)=\"loadWareHouses(mainInfo.recipientSiteId)\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\" *ngIf=\"mainInfo.recipientShop\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".warehouse\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"warehouseList\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [showClear]=\"true\"\r\n                        [(ngModel)]=\"mainInfo.recipientWarehouseId\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                        (onChange)=\"loadWareHouses(mainInfo.recipientSiteId)\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".expectedDate\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-calendar\r\n                        showButtonBar=\"true\"\r\n                        [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\"\r\n                        [yearRange]=\"sessionService.calendarYearRange\"\r\n                        class=\"aw-calendar\"\r\n                        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                        [locale]=\"sessionService.calendarFormat\"\r\n                        appendTo=\"body\"\r\n                        [(ngModel)]=\"mainInfo.recipientDate\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"grid-row\" *ngIf=\"!showMaterialInfo\">\r\n          <div class=\"grid-cell--12\">\r\n            <div class=\"grid-cell grid-cell--container  grid-cell-item-movement\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ componentData.componentId + \".postes\" | translate }} ({{ articleList ? articleList.length : 0 }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                <div class=\"row flex-row--justify-end\">\r\n                  <button type=\"button\" mat-raised-button (click)=\"showItemDialog()\" *ngIf=\"!isReadOpenMode\">\r\n                    {{ getComponentName() + \".addItem\" | translate }}\r\n                  </button>\r\n                </div>\r\n                <div class=\"row list-with-details\">\r\n                  <div class=\"list custom-border\">\r\n                    <div class=\"section\">\r\n                      <h4 class=\"section-title\">\r\n                        {{ componentData.componentId + \".articles\" | translate }}\r\n                      </h4>\r\n                    </div>\r\n                    <p-table\r\n                      #ptableImportReports\r\n                      class=\"aw-table2\"\r\n                      [columns]=\"articlesTableCols\"\r\n                      [value]=\"articleList\"\r\n                      [(selection)]=\"selectedArticle\"\r\n                      selectionMode=\"single\"\r\n                      (onRowSelect)=\"fillSNList()\"\r\n                      (onRowUnselect)=\"onArticleRowUnselect()\"\r\n                    >\r\n                      <ng-template pTemplate=\"colgroup\" let-columns>\r\n                        <colgroup>\r\n                          <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"header\" let-columns> </ng-template>\r\n\r\n                      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                        <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                          <td\r\n                            *ngFor=\"let col of columns\"\r\n                            [ngSwitch]=\"col.field\"\r\n                            [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                          >\r\n                            <div *ngSwitchDefault>\r\n                              <div>\r\n                                <div style=\"display: flex; flex-direction: row;\">\r\n                                  <div style=\"min-width: 3rem; display: inline-block; flex-grow: 1;\">\r\n                                    <a style=\"font-weight: 600\" (click)=\"openArticle(rowData['pn'])\">\r\n                                      {{ rowData[\"pn\"] }}\r\n                                    </a>\r\n                                  </div>\r\n\r\n                                  <div>\r\n                                    {{ componentData.componentId + \".qty\" | translate }} =\r\n                                    <span style=\"font-weight: 600\">\r\n                                      {{ rowData[\"quantity\"] | formatNumber }}\r\n                                    </span>\r\n                                    <span *ngIf=\"rowData['quantityUnit']\">\r\n                                      {{ rowData[\"quantityUnit\"] }}\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                                <div style=\"display: flex; flex-direction: row;\">\r\n                                  <div style=\"min-width: 3rem; display: inline-block; flex-grow: 1;\">\r\n                                    {{ rowData[\"otanPnReference\"] }}\r\n                                  </div>\r\n\r\n                                  <div *ngIf=\"rowData['quantityPerIssue']\">\r\n                                    ({{ \"distributionQuantityShort\" | translate }} =\r\n                                    {{ rowData[\"quantityPerIssue\"] | formatNumber }})\r\n                                  </div>\r\n                                </div>\r\n                                <div style=\"display: flex; flex-direction: row;\">\r\n                                  <div style=\"min-width: 3rem; display: inline-block; flex-grow: 1;\">\r\n                                    {{ rowData[\"articleNum\"] }}\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div\r\n                                style=\"font-style: italic; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding-bottom: 1.5rem;\"\r\n                              >\r\n                                {{ rowData[\"articleDesignation\"] }}\r\n                              </div>\r\n\r\n                              <div>\r\n                                <div style=\"min-width: 8rem; display: inline-block;\">\r\n                                  <ng-container>\r\n                                    {{ getComponentName() + \".notSelected\" | translate }}\r\n                                  </ng-container>\r\n                                </div>\r\n                                <span style=\"font-weight: 600\"> {{ rowData[\"notSelectedNb\"] }}</span>\r\n                              </div>\r\n\r\n                              <div>\r\n                                <div style=\"min-width: 8rem; display: inline-block;\">\r\n                                  <ng-container>\r\n                                    {{ getComponentName() + \".selected\" | translate }}\r\n                                  </ng-container>\r\n                                </div>\r\n                                <span style=\"font-weight: 600\"> {{ rowData[\"selectedNb\"] }}</span>\r\n                              </div>\r\n\r\n                              <div>\r\n                                <div style=\"min-width: 8rem; display: inline-block;\">\r\n                                  <ng-container>\r\n                                    {{ getComponentName() + \".inTransit\" | translate }}\r\n                                  </ng-container>\r\n                                </div>\r\n                                <span style=\"font-weight: 600\"> {{ rowData[\"shippedNb\"] }}</span>\r\n                              </div>\r\n\r\n                              <div>\r\n                                <div style=\"min-width: 8rem; display: inline-block;\">\r\n                                  <ng-container\r\n                                    *ngIf=\"tor.torType !== aWPropertiesConstants.TRANSFER_ORDER_TYPE_REVERSE_MVT\"\r\n                                  >\r\n                                    {{ getComponentName() + \".delivered\" | translate }}\r\n                                  </ng-container>\r\n                                  <ng-container\r\n                                    *ngIf=\"tor.torType === aWPropertiesConstants.TRANSFER_ORDER_TYPE_REVERSE_MVT\"\r\n                                  >\r\n                                    {{ getComponentName() + \".reversed\" | translate }}\r\n                                  </ng-container>\r\n                                </div>\r\n                                <span style=\"font-weight: 600\"> {{ rowData[\"receivedNb\"] }}</span>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div style=\"display: flex; flex-direction: row; justify-content: flex-end;\">\r\n                              <button\r\n                                class=\"actions-btn\"\r\n                                mat-icon-button\r\n                                class=\"mat-elevation-z1\"\r\n                                [matMenuTriggerFor]=\"itemActions\"\r\n                                (click)=\"$event.stopPropagation()\"\r\n                                *ngIf=\"\r\n                                  selectedArticle &&\r\n                                  tor.torStatus !== aWPropertiesConstants.TRANSFER_ORDER_STATUS_PERFORMED &&\r\n                                  tor.torStatus !== aWPropertiesConstants.TRANSFER_ORDER_STATUS_CANCELED &&\r\n                                  ((!tor.bidmProjectProjectId &&\r\n                                    (!tor.bidtProcReqItemId ||\r\n                                      tor.torType === aWPropertiesConstants.TRANSFER_ORDER_TYPE_REVERSE_MVT)) ||\r\n                                    selectedBidtDfTypeDTO.transferType ===\r\n                                      aWPropertiesConstants.MM_TRANSFER_TYPE_INTER_SITE_KEY ||\r\n                                    selectedBidtDfTypeDTO.transferType ===\r\n                                      aWPropertiesConstants.MM_TRANSFER_TYPE_EXTERNAL_KEY)\r\n                                \"\r\n                              >\r\n                                <mat-icon>more_horiz</mat-icon>\r\n                              </button>\r\n                              <mat-menu #itemActions=\"matMenu\">\r\n                                <button mat-menu-item (click)=\"manageTransfertOrderItem(rowData)\">\r\n                                  {{ componentData.componentId + \".manage\" | translate }}\r\n                                </button>\r\n                              </mat-menu>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n\r\n                  <div class=\"list\">\r\n                    <div class=\"section\">\r\n                      <h4 class=\"section-title\">\r\n                        {{ componentData.componentId + \".selectedAsset\" | translate }}\r\n                      </h4>\r\n                    </div>\r\n                    <p-table\r\n                      *ngIf=\"!!selectedArticle\"\r\n                      #ptableImportReports\r\n                      class=\"aw-table2\"\r\n                      [columns]=\"snTableCols\"\r\n                      [value]=\"snList\"\r\n                      [(selection)]=\"selectedSN\"\r\n                      selectionMode=\"single\"\r\n                      (onRowSelect)=\"fillStockMovementList()\"\r\n                      (onRowUnselect)=\"onSNRowUnselect()\"\r\n                    >\r\n                      <ng-template pTemplate=\"colgroup\" let-columns>\r\n                        <colgroup>\r\n                          <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"header\" let-columns> </ng-template>\r\n\r\n                      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                        <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                          <td\r\n                            *ngFor=\"let col of columns\"\r\n                            [ngSwitch]=\"col.field\"\r\n                            [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                          >\r\n                            <div\r\n                              *ngIf=\"!rowData['stockMvtSn'] && !rowData['stockMvtBatchNumber']\"\r\n                              style=\"font-style: italic;\"\r\n                            >\r\n                              {{ getComponentName() + \".noSelectedAsset\" | translate }}\r\n                            </div>\r\n\r\n                            <div *ngIf=\"rowData['stockMvtSn'] || rowData['stockMvtBatchNumber']\">\r\n                              <div>\r\n                                <span style=\"min-width: 9rem; display: inline-block;\">\r\n                                  {{ \"packagingNumber\" | translate }}\r\n                                </span>\r\n                                <a class=\"bold\" (click)=\"openBatch(rowData['stockMvtBatchNumber'])\">\r\n                                  {{ rowData[\"stockMvtBatchNumber\"] }}\r\n                                </a>\r\n                              </div>\r\n\r\n                              <div *ngIf=\"rowData['stockMvtSn']\">\r\n                                <span style=\"min-width: 9rem; display: inline-block;\">\r\n                                  {{ \"sn\" | translate }}\r\n                                </span>\r\n                                <a\r\n                                  class=\"bold\"\r\n                                  *ngIf=\"rowData['stockMvtSn']\"\r\n                                  (click)=\"openEquipment(rowData['stockMvtSn'])\"\r\n                                >\r\n                                  {{ rowData[\"stockMvtSn\"] }}\r\n                                </a>\r\n                              </div>\r\n\r\n                              <div>\r\n                                <span style=\"min-width: 9rem; display: inline-block;\">\r\n                                  {{ \"status\" | translate }}\r\n                                </span>\r\n                                <span class=\"bold\">\r\n                                  {{ rowData.equipment?.operationalStatus | formatSelectOption: operationalStatuses }}\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n\r\n                  <div class=\"details\">\r\n                    <div class=\"section\">\r\n                      <h4 class=\"section-title\">\r\n                        {{ componentData.componentId + \".stockMovements\" | translate }}\r\n                      </h4>\r\n                      <div class=\"section-content\">\r\n                        <aw-procurement-request-mvt-status\r\n                          *ngIf=\"\r\n                            stockMovementTableDataSource.data &&\r\n                            tor.torType !== aWPropertiesConstants.TRANSFER_ORDER_TYPE_REVERSE_MVT\r\n                          \"\r\n                          [componentName]=\"'TransferOrderMvtStatusComponent'\"\r\n                          [mvts]=\"stockMvtSubject.asObservable()\"\r\n                          (onClick)=\"toggleDetailsTable($event)\"\r\n                          style=\"padding-bottom: 50px;\"\r\n                        ></aw-procurement-request-mvt-status>\r\n                        <aw-procurement-request-reverse-mvt-status\r\n                          *ngIf=\"\r\n                            stockMovementTableDataSource.data &&\r\n                            tor.torType === aWPropertiesConstants.TRANSFER_ORDER_TYPE_REVERSE_MVT\r\n                          \"\r\n                          [mvts]=\"stockMvtSubject.asObservable()\"\r\n                          [procurementRequest]=\"procRequest\"\r\n                          (onClick)=\"toggleDetailsTable($event)\"\r\n                          style=\"padding-bottom: 50px;\"\r\n                        ></aw-procurement-request-reverse-mvt-status>\r\n                        <a-table\r\n                          *ngIf=\"!!selectedArticle && !!selectedSN && showDetails\"\r\n                          [dataSource]=\"stockMovementTableDataSource\"\r\n                        >\r\n                          <ng-template columnDef=\"movement\" let-rowData=\"rowData\">\r\n                            <div>\r\n                              <a class=\"bold\" (click)=\"openStovkMvt()\">\r\n                                {{ rowData[\"stockMvtCode\"] }}\r\n                              </a>\r\n                            </div>\r\n\r\n                            <div>\r\n                              <span class=\"italic\">{{\r\n                                rowData[\"bidtStockMvtType\"]?.smtName | extractTranslation\r\n                              }}</span>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template columnDef=\"type\" let-rowData=\"rowData\">\r\n                            <i\r\n                              *ngIf=\"rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_CREDIT\"\r\n                              class=\"fa fa-fw fa-arrow-right procurement-type--in\"\r\n                              aria-hidden=\"true\"\r\n                              pTooltip=\"{{ componentData.componentId + '.receipt' | translate }}\"\r\n                            ></i>\r\n                            <i\r\n                              *ngIf=\"rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_DEBIT\"\r\n                              class=\"fa fa-fw fa-arrow-right procurement-type--out\"\r\n                              aria-hidden=\"true\"\r\n                              pTooltip=\"{{ componentData.componentId + '.issue' | translate }}\"\r\n                            ></i>\r\n                            <i\r\n                              *ngIf=\"rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_TRANSFER\"\r\n                              class=\"fa fa-fw fa-arrow-right procurement-type--transfer\"\r\n                              aria-hidden=\"true\"\r\n                              pTooltip=\"{{ componentData.componentId + '.transfer' | translate }}\"\r\n                            ></i>\r\n                          </ng-template>\r\n\r\n                          <ng-template columnDef=\"warehouseWorkshop\" let-rowData=\"rowData\">\r\n                            <div\r\n                              *ngIf=\"\r\n                                rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_CREDIT ||\r\n                                rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_TRANSFER\r\n                              \"\r\n                            >\r\n                              <span class=\"bold\">{{ rowData[\"bidtSiteReceipt\"]?.siteCode }}</span>\r\n                            </div>\r\n                            <div\r\n                              *ngIf=\"\r\n                                rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_CREDIT ||\r\n                                rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_TRANSFER\r\n                              \"\r\n                            >\r\n                              <span class=\"italic\">{{ rowData[\"bidtWarehouseReceipt\"]?.whName }}</span>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_DEBIT\">\r\n                              <span class=\"bold\">{{ rowData[\"bidtSiteIssue\"]?.siteCode }}</span>\r\n                            </div>\r\n                            <div *ngIf=\"rowData['bidtStockMvtType']?.smtWay === bidtStockMvtConstants.MVT_WAY_DEBIT\">\r\n                              <span class=\"italic\">{{ rowData[\"bidtWarehouseIssue\"]?.whName }}</span>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template columnDef=\"outbound\" let-rowData=\"rowData\">\r\n                            <div *ngIf=\"rowData['bidtStorageBinZoneIssue']?.sbNumber\">\r\n                              <span class=\"bold\">\r\n                                {{ rowData[\"bidtStorageBinZoneIssue\"]?.sbNumber }}\r\n                                <ng-container *ngIf=\"rowData['bidtStorageBinZoneIssue']?.sbDescription\">\r\n                                  - {{ rowData[\"bidtStorageBinZoneIssue\"]?.sbDescription }}\r\n                                </ng-container>\r\n                              </span>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"rowData['bidtStorageBinBinIssue']?.sbNumber\">\r\n                              <span class=\"bold\">{{ rowData[\"bidtStorageBinBinIssue\"]?.sbNumber }}</span>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template columnDef=\"inbound\" let-rowData=\"rowData\">\r\n                            <div *ngIf=\"rowData['bidtStorageBinZoneReceipt']?.sbNumber\">\r\n                              <span class=\"bold\">\r\n                                {{ rowData[\"bidtStorageBinZoneReceipt\"]?.sbNumber }}\r\n                                <ng-container *ngIf=\"rowData['bidtStorageBinZoneReceipt']?.sbDescription\">\r\n                                  - {{ rowData[\"bidtStorageBinZoneReceipt\"]?.sbDescription }}\r\n                                </ng-container>\r\n                              </span>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"rowData['bidtStorageBinBinReceipt']?.sbNumber\">\r\n                              <span class=\"bold\">{{ rowData[\"bidtStorageBinBinReceipt\"]?.sbNumber }}</span>\r\n                            </div>\r\n                          </ng-template>\r\n\r\n                          <ng-template columnDef=\"status\" let-rowData=\"rowData\">\r\n                            <div>\r\n                              <span class=\"bold\">\r\n                                {{ rowData[\"mvtStatus\"] | formatSelectOption: stockMvtStatuses }}\r\n                              </span>\r\n                            </div>\r\n\r\n                            <div>\r\n                              {{\r\n                                (rowData[\"stockMvtDate\"] ? rowData[\"stockMvtDate\"] : rowData[\"stockMvtPlannedDate\"])\r\n                                  | date: \"yyyy/MM/dd HH:mm\":\"\":translateService.currentLang\r\n                              }}\r\n                            </div>\r\n                          </ng-template>\r\n                        </a-table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ \"documents\" | translate }}\r\n        </ng-template>\r\n\r\n        <div class=\"grid-row\">\r\n          <div class=\"grid-cell--12\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ componentData.componentId + \".documents\" | translate }} ({{ documentTableDataSource.dataCount }})\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                <div class=\"section\">\r\n                  <div class=\"section-content\">\r\n                    <a-table [dataSource]=\"documentTableDataSource\">\r\n                      <ng-template tableActionsDef>\r\n                        <button\r\n                          *ngIf=\"!isReadOpenMode && documentTableDataSource.hasDataSelection\"\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                          (click)=\"openSelectedDocument()\"\r\n                        >\r\n                          {{ \"global.open\" | translate }}\r\n                        </button>\r\n                      </ng-template>\r\n                    </a-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n\r\n  <aw-material-selection *ngIf=\"showMaterialInfo\"></aw-material-selection>\r\n</div>\r\n\r\n<aw-dialog-search-customer\r\n  *ngIf=\"customerDialogVisible\"\r\n  [(display)]=\"customerDialogVisible\"\r\n  (onSelected)=\"onSelectCustomer($event)\"\r\n></aw-dialog-search-customer>\r\n\r\n<aw-dialog-add-popup\r\n  *ngIf=\"itemDialogVisible\"\r\n  [(display)]=\"itemDialogVisible\"\r\n  (onValidate)=\"onValidateAddItem($event)\"\r\n></aw-dialog-add-popup>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/transfer-order/form/transfer-order-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/form/transfer-order-form.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .grid-cell-item-movement .list-with-details .details {\n  flex-grow: 1;\n  width: 60%; }\n  :host .grid-cell-item-movement .list-with-details .details .item-structure-node-action-list {\n    justify-content: flex-end; }\n  :host .grid-cell-item-movement .list-with-details .details .item-structure-node-action-list > button {\n      margin-right: 8px; }\n  :host .grid-cell-item-movement .list-with-details .details .item-structure-node-action-list > button:last-of-type {\n        margin-right: 0; }\n  :host .grid-cell-item-movement .list-with-details .details .item-structure-node-image > img {\n    max-width: 100%;\n    min-width: 100%; }\n  :host .grid-cell-item-movement .list-with-details .list {\n  width: 20%;\n  min-width: 17em; }\n  :host .alert {\n  display: inline-block;\n  width: 50%; }\n  :host .alert.alert--ok {\n    background-color: #4caf50; }\n  :host .alert.alert--warning {\n    background-color: #ffc107; }\n  :host .alert.alert--nok {\n    background-color: #f6685e; }\n  :host .alert.alert--none {\n    background-color: #c8d4d6; }\n  :host .custom-width {\n  width: 50%; }\n  :host .custom-div {\n  padding-left: 1.2em; }\n  :host .custom-control {\n  padding-top: 0.4em; }\n  :host .custom-anchor {\n  padding: 0.7em 0; }\n  :host .code {\n  display: inline-table;\n  width: 100%; }\n  :host ::ng-deep .name {\n  font-style: italic;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 20em; }\n  :host ::ng-deep .info {\n  overflow: hidden;\n  padding-bottom: 0.4em;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  :host ::ng-deep .table-name {\n  font-style: italic;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 20em; }\n  :host ::ng-deep .table-info {\n  overflow: hidden;\n  padding-bottom: 0.4em;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  :host .custom-padding {\n  padding-left: 1em; }\n  :host .label-class {\n  padding-right: 4.5em;\n  display: inline-block;\n  width: 3.5em; }\n  :host .display-custom {\n  display: inline !important;\n  font-weight: bold; }\n  :host .icon-custom {\n  float: right; }\n  :host .custom-border {\n  border-right: 1px solid #595959; }\n  :host .custom-float {\n  float: right; }\n  :host .alert-msg {\n  color: #f6685e; }\n  :host .type-in {\n  color: #4caf50;\n  -webkit-transform: rotate(320deg);\n          transform: rotate(320deg); }\n  :host .type-out {\n  color: #f6685e;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n  :host .type-transfer {\n  color: #006ea9; }\n  :host .procurement--nok {\n  background-color: #f6685e; }\n  :host .procurement--ok {\n  background-color: #4caf50; }\n  :host .procurement--warning {\n  background-color: #ffc107; }\n  :host .procurement-type--in {\n  color: #4caf50;\n  -webkit-transform: rotate(320deg);\n          transform: rotate(320deg); }\n  :host .procurement-type--out {\n  color: #f6685e;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n  :host .procurement-type--transfer {\n  color: #006ea9; }\n  :host .link {\n  cursor: pointer; }\n  :host .link:hover {\n    text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvdHJhbnNmZXItb3JkZXIvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXHRyYW5zZmVyLW9yZGVyXFxmb3JtXFx0cmFuc2Zlci1vcmRlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy90cmFuc2Zlci1vcmRlci9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUlRLFlBQVk7RUFDWixVQUFVLEVBQUE7RUFMbEI7SUFRVSx5QkFBeUIsRUFBQTtFQVJuQztNQVdZLGlCQytCTSxFQUFBO0VEMUNsQjtRQWNjLGVBQWUsRUFBQTtFQWQ3QjtJQXFCWSxlQUFlO0lBQ2YsZUFBZSxFQUFBO0VBdEIzQjtFQTRCUSxVQUFVO0VBQ1YsZUFBZSxFQUFBO0VBN0J2QjtFQW1DSSxxQkFBcUI7RUFDckIsVUFBVSxFQUFBO0VBcENkO0lBdUNNLHlCQ3BCZ0IsRUFBQTtFRG5CdEI7SUEyQ00seUJDdkJVLEVBQUE7RURwQmhCO0lBK0NNLHlCQ3pCYyxFQUFBO0VEdEJwQjtJQW1ETSx5QkMxQlMsRUFBQTtFRHpCZjtFQXdESSxVQUFVLEVBQUE7RUF4RGQ7RUE0REksbUJBQW1CLEVBQUE7RUE1RHZCO0VBZ0VJLGtCQUFrQixFQUFBO0VBaEV0QjtFQW9FSSxnQkFBZ0IsRUFBQTtFQXBFcEI7RUF3RUkscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTtFQXpFZjtFQTZFSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBO0VBakZuQjtFQXFGSSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtFQXhGdkI7RUE0Rkksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTtFQWhHbkI7RUFvR0ksZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7RUF2R3ZCO0VBMkdJLGlCQUFpQixFQUFBO0VBM0dyQjtFQStHSSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTtFQWpIaEI7RUFxSEksMEJBQTBCO0VBQzFCLGlCQUFpQixFQUFBO0VBdEhyQjtFQTBISSxZQUFZLEVBQUE7RUExSGhCO0VBOEhJLCtCQUErQixFQUFBO0VBOUhuQztFQWtJSSxZQUFZLEVBQUE7RUFsSWhCO0VBc0lJLGNDaEhnQixFQUFBO0VEdEJwQjtFQTBJSSxjQ3ZIa0I7RUR3SGxCLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtFQTNJN0I7RUErSUksY0N6SGdCO0VEMEhoQixnQ0FBd0I7VUFBeEIsd0JBQXdCLEVBQUE7RUFoSjVCO0VBb0pJLGNDNUhnQixFQUFBO0VEeEJwQjtFQXdKSSx5QkNsSWdCLEVBQUE7RUR0QnBCO0VBNEpJLHlCQ3pJa0IsRUFBQTtFRG5CdEI7RUFnS0kseUJDNUlZLEVBQUE7RURwQmhCO0VBb0tJLGNDakprQjtFRGtKbEIsaUNBQXlCO1VBQXpCLHlCQUF5QixFQUFBO0VBcks3QjtFQXlLSSxjQ25KZ0I7RURvSmhCLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTtFQTFLNUI7RUE4S0ksY0N0SmdCLEVBQUE7RUR4QnBCO0VBa0xJLGVBQWUsRUFBQTtFQWxMbkI7SUFvTE0sMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy90cmFuc2Zlci1vcmRlci9mb3JtL3RyYW5zZmVyLW9yZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLmdyaWQtY2VsbC1pdGVtLW1vdmVtZW50IHtcclxuICAgIC5saXN0LXdpdGgtZGV0YWlscyB7XHJcbiAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuXHJcbiAgICAgICAgLml0ZW0tc3RydWN0dXJlLW5vZGUtYWN0aW9uLWxpc3Qge1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAmID4gYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLml0ZW0tc3RydWN0dXJlLW5vZGUtaW1hZ2Uge1xyXG4gICAgICAgICAgJiA+IGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxN2VtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWxlcnQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tbm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tbm9uZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5MTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jdXN0b20td2lkdGgge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tZGl2IHtcclxuICAgIHBhZGRpbmctbGVmdDogMS4yZW07XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZy10b3A6IDAuNGVtO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1hbmNob3Ige1xyXG4gICAgcGFkZGluZzogMC43ZW0gMDtcclxuICB9XHJcblxyXG4gIC5jb2RlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5uYW1lIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtYXgtd2lkdGg6IDIwZW07XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLmluZm8ge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRlbTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAudGFibGUtbmFtZSB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWF4LXdpZHRoOiAyMGVtO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC50YWJsZS1pbmZvIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40ZW07XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgfVxyXG5cclxuICAubGFiZWwtY2xhc3Mge1xyXG4gICAgcGFkZGluZy1yaWdodDogNC41ZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMy41ZW07XHJcbiAgfVxyXG5cclxuICAuZGlzcGxheS1jdXN0b20ge1xyXG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5pY29uLWN1c3RvbSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWJvcmRlciB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNTk1OTU5O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1mbG9hdCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuYWxlcnQtbXNnIHtcclxuICAgIGNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICB9XHJcblxyXG4gIC50eXBlLWluIHtcclxuICAgIGNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzIwZGVnKTtcclxuICB9XHJcblxyXG4gIC50eXBlLW91dCB7XHJcbiAgICBjb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG5cclxuICAudHlwZS10cmFuc2ZlciB7XHJcbiAgICBjb2xvcjogJGJsdWUtZGFyazE7XHJcbiAgfVxyXG5cclxuICAucHJvY3VyZW1lbnQtLW5vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICB9XHJcblxyXG4gIC5wcm9jdXJlbWVudC0tb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICB9XHJcblxyXG4gIC5wcm9jdXJlbWVudC0td2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgLnByb2N1cmVtZW50LXR5cGUtLWluIHtcclxuICAgIGNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzIwZGVnKTtcclxuICB9XHJcblxyXG4gIC5wcm9jdXJlbWVudC10eXBlLS1vdXQge1xyXG4gICAgY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnByb2N1cmVtZW50LXR5cGUtLXRyYW5zZmVyIHtcclxuICAgIGNvbG9yOiAkYmx1ZS1kYXJrMTtcclxuICB9XHJcblxyXG4gIC5saW5rIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/logistics/transfer-order/form/transfer-order-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/form/transfer-order-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TransferOrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferOrderFormComponent", function() { return TransferOrderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/bidt-stock-mvt-constants */ "./src/app/shared/constants/bidt-stock-mvt-constants.ts");
/* harmony import */ var _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/constants/bidt-stock-mvt-type-constants */ "./src/app/shared/constants/bidt-stock-mvt-type-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../goods-receipt/delivery-folder-search.service */ "./src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts");
/* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../logistics.service */ "./src/app/main/logistics/logistics.service.ts");
/* harmony import */ var _shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/transfer-order-service */ "./src/app/main/logistics/transfer-order/shared/transfer-order-service.ts");
/* harmony import */ var _transfer_order_form_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./transfer-order-form.service */ "./src/app/main/logistics/transfer-order/form/transfer-order-form.service.ts");
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

























var TransferOrderFormComponent = /** @class */ (function (_super) {
    __extends(TransferOrderFormComponent, _super);
    function TransferOrderFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, pageTocService, logisticsService, translateService, sessionService, torFormService, torService, dfSearchService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.logisticsService = logisticsService;
        _this.translateService = translateService;
        _this.sessionService = sessionService;
        _this.torFormService = torFormService;
        _this.torService = torService;
        _this.dfSearchService = dfSearchService;
        _super.prototype.registerPageTocEntryObservable.call(_this);
        _this.bidtStockMvtConstants = _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_7__["BidtStockMvtConstants"];
        _this.aWPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"];
        _this.component = TransferOrderFormComponent_1;
        _this.bidtStockMvtTypeConstants = _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_8__["BidtStockMvtTypeConstant"];
        _this.stockMvtSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this.showDetails = false;
        return _this;
    }
    TransferOrderFormComponent_1 = TransferOrderFormComponent;
    TransferOrderFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_TRANSFER_ORDER_FORM;
    };
    TransferOrderFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.init();
    };
    TransferOrderFormComponent.prototype.init = function () {
        var _this = this;
        this.tor = {};
        this.procRequest = {};
        this.mainInfo = {};
        this.articleList = [];
        this.snList = [];
        this.siteList = [];
        this.warehouseList = [];
        this.siteSrcList = [];
        this.warehouseSrcList = [];
        this.customerDialogVisible = false;
        this.itemDialogVisible = false;
        if (this.componentData.objectId) {
            this.transferOrderId = this.serializationService.deserialize(this.componentData.objectId);
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])({
            criticalitiesList: this.torService.fetchCriticalityList(),
            procurementRequestStatusList: this.torService.fetchProcurementRequestStatusList(),
            procurementRequestTypeList: this.torService.fetchProcurementRequestTypeList(),
            torStatusList: this.torService.fetchStatusList(),
            torTypeList: this.torService.fetchTypeList(),
            torTypeListObject: this.torService.fetchTypeObjectList(),
            operationalStatuses: this.torService.fetchOperationalStatuses(),
            stockMvtStatuses: this.torService.fetchStockMvtStatuses(),
            findTorOutput: this.torFormService.findTransferOrderById(this.transferOrderId),
            workPackageStatuses: this.torService.fetchWorkPackageStatuses(),
            workPackageTypes: this.torService.fetchWorkPackageTypes()
        }).subscribe(function (values) {
            _this.criticalitiesList = values.criticalitiesList;
            _this.procurementRequestStatusList = values.procurementRequestStatusList;
            _this.procurementRequestTypeList = values.procurementRequestTypeList;
            _this.torStatusList = values.torStatusList;
            _this.torTypeList = values.torTypeList;
            _this.torTypeListObject = values.torTypeListObject;
            _this.operationalStatuses = values.operationalStatuses;
            _this.stockMvtStatuses = values.stockMvtStatuses;
            _this.workPackageStatuses = values.workPackageStatuses;
            _this.workPackageTypes = values.workPackageTypes;
            _this.fetchTransferOrder(values.findTorOutput);
        });
        this.loadSites();
        this.updateOpenMode(this.componentData.openMode);
        this.initTableCols();
    };
    TransferOrderFormComponent.prototype.fetchTransferOrder = function (tor) {
        var _this = this;
        this.tor = tor.bidtTransferOrder;
        this.getSelectedDfType();
        if (!!tor.bidtTransferOrder.bidtTorItems) {
            tor.bidtTransferOrder.bidtTorItems.forEach(function (torItem) {
                var fistMovementsList = _this.getListSNForItem(torItem.birePnPnCode);
                fistMovementsList.forEach(function (firstMvt) {
                    _this.logisticsService.findStockMvtStoryFromFirstStockMvt(firstMvt).subscribe(function (mvts) {
                        if (!!torItem.pickingMovements) {
                            torItem.pickingMovements.concat(mvts);
                        }
                    });
                });
            });
        }
        this.fetchMainInfo(tor);
        this.fetchItems(tor);
        this.procRequest = tor.bidtProcurementRequest;
    };
    TransferOrderFormComponent.prototype.getSelectedDfType = function () {
        var _this = this;
        this.selectedBidtDfTypeDTO = this.torTypeListObject.filter(function (type) { return type.value.id === Number(_this.tor.torType); })[0].value;
    };
    TransferOrderFormComponent.prototype.fetchMainInfo = function (findTorOutput) {
        var _this = this;
        if (findTorOutput.bidtTransferOrder.bidoCustomerByFkBidtTraTorReceiBidoCusCustomerCode) {
            var customerDTOIdReceipt = {
                customerCode: findTorOutput.bidtTransferOrder.bidoCustomerByFkBidtTraTorReceiBidoCusCustomerCode
            };
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])({
                torInfo: this.torFormService.fetchTransferOrderData(findTorOutput.bidtTransferOrder),
                torRefDocumentInfo: this.torFormService.fetchTorRefDocument(findTorOutput.bidtProcurementRequest),
                torCreatedInfo: this.torFormService.fetchTorCreated(findTorOutput.bidtTransferOrder),
                bidoCustomer: this.torFormService.findBidoCustomer(customerDTOIdReceipt)
            }).subscribe(function (values) {
                _this.mainInfo = __assign({}, values.torInfo, values.torRefDocumentInfo, values.torCreatedInfo);
                _this.bidoCustomerReceipt = values.bidoCustomer;
            });
        }
        else {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])({
                torInfo: this.torFormService.fetchTransferOrderData(findTorOutput.bidtTransferOrder),
                torRefDocumentInfo: this.torFormService.fetchTorRefDocument(findTorOutput.bidtProcurementRequest),
                torCreatedInfo: this.torFormService.fetchTorCreated(findTorOutput.bidtTransferOrder)
            }).subscribe(function (values) {
                _this.mainInfo = __assign({}, values.torInfo, values.torRefDocumentInfo, values.torCreatedInfo);
                if (!!_this.mainInfo.recipientSiteId) {
                    _this.loadWareHouses(_this.mainInfo.recipientSiteId);
                }
            });
        }
    };
    TransferOrderFormComponent.prototype.fetchItems = function (tor) {
        var _this = this;
        if (tor.bidtTransferOrder.bidtTorItems) {
            tor.bidtTransferOrder.bidtTorItems.forEach(function (torItem) {
                _this.torFormService.fetchArticleData(torItem).subscribe(function (item) {
                    _this.articleList.push(item);
                    _this.calculateSituation(item);
                    _this.selectedArticle = _this.articleList[0];
                    _this.fillSNList();
                });
            });
        }
    };
    TransferOrderFormComponent.prototype.cancel = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read);
    };
    TransferOrderFormComponent.prototype.edit = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Write);
    };
    TransferOrderFormComponent.prototype.calculateSituation = function (row) {
        var stockMvts = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__["ListUtils"].orEmpty(row.bidtProcReqItemDTO.pickingMovements).filter(function (stockMvt) { return stockMvt.stockMvtWay === _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_7__["BidtStockMvtConstants"].MVT_WAY_DEBIT; });
        var transferedStockMvts = stockMvts.filter(function (stockMvt) { return stockMvt.mvtStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY; });
        row.selectedNb = stockMvts
            .filter(function (stockMvt) {
            return stockMvt.mvtStatus !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY &&
                stockMvt.mvtStatus !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].MM_MVT_STATUS_CANCELED_KEY &&
                (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isNullOrEmpty(stockMvt.stockMvtSn) || !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isNullOrEmpty(stockMvt.stockMvtBatchNumber));
        })
            .map(function (stockMvt) { return (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0); })
            .reduce(function (acc, x) { return acc + x; }, 0);
        row.receivedNb = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__["ListUtils"].orEmpty(row.bidtProcReqItemDTO.pickingMovements)
            .filter(function (stockMvt) {
            return stockMvt.stockMvtWay === _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_7__["BidtStockMvtConstants"].MVT_WAY_CREDIT &&
                stockMvt.mvtStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_6__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY;
        })
            .map(function (stockMvt) { return (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0); })
            .reduce(function (acc, x) { return acc + x; }, 0);
        row.shippedNb =
            transferedStockMvts
                .map(function (stockMvt) { return (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0); })
                .reduce(function (acc, x) { return acc + x; }, 0) - row.receivedNb;
        if (!!row.quantity) {
            row.notSelectedNb = row.quantity - row.shippedNb - row.selectedNb - row.receivedNb;
        }
        else {
            row.notSelectedNb = 0;
        }
    };
    /***************************************
     * INIT TABLE
     ***************************************/
    TransferOrderFormComponent.prototype.initTableCols = function () {
        // Stock movement Table
        this.stockMovementTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__["TableDataSource"]({
            enableSelection: false,
            columns: [
                { field: 'movement', translateKey: this.getTranslateKey('movement'), width: '20%' },
                { field: 'type', translateKey: this.getTranslateKey('type'), alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__["ColumnAlignment"].CENTER, width: '10%' },
                { field: 'warehouseWorkshop', translateKey: this.getTranslateKey('warehouseWorkshop'), width: '20%' },
                { field: 'outbound', translateKey: this.getTranslateKey('outbound'), width: '18%' },
                { field: 'inbound', translateKey: this.getTranslateKey('inbound'), width: '18%' },
                { field: 'status', translateKey: this.getTranslateKey('status'), width: '14%' }
            ],
            data: []
        });
        this.documentTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_5__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                { field: 'name', translateKey: this.getTranslateKey('name') },
                { field: 'comment', translateKey: this.getTranslateKey('comment') },
                { field: 'type', translateKey: this.getTranslateKey('type') },
                { field: 'extension', translateKey: this.getTranslateKey('extension') },
                { field: 'cut', translateKey: this.getTranslateKey('cut') },
                { field: 'date', translateKey: this.getTranslateKey('date') }
            ],
            data: []
        });
        this.articlesTableCols = [{ field: 'articles' }];
        this.snTableCols = [{ field: 'sn' }];
    };
    /***********************************
     * FORM DATA
     ***********************************/
    TransferOrderFormComponent.prototype.getQuantityMissing = function (rowData) {
        if (!!rowData && !!rowData.quantity) {
            if (!!this.snList && this.snList.length < rowData.quantity) {
                return rowData.quantity - this.snList.length;
            }
        }
        return 0;
    };
    TransferOrderFormComponent.prototype.fillSNList = function () {
        this.stockMvtSubject.next([]);
        this.showDetails = false;
        if (!!this.selectedArticle) {
            this.snList = this.getListSNForItemBySelectedArticle(this.selectedArticle.pn);
            this.selectedSN = this.snList[0];
            this.fillStockMovementList();
        }
    };
    TransferOrderFormComponent.prototype.getListSNForItem = function (pn) {
        if (!(pn && this.tor && this.tor.bidtTorItems)) {
            return [];
        }
        else {
            var bidtTorItems = this.tor.bidtTorItems;
            var datas_1 = bidtTorItems
                .filter(function (torItem) { return torItem.birePnPnCode === pn; })
                .map(function (torItem) { return torItem.pickingMovements; })
                .filter(function (stockMvts) { return !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__["ListUtils"].isNullOrEmpty(stockMvts); })
                .map(function (stockMvts) { return stockMvts; })
                .reduce(function (acc, x) { return acc.concat(x); }, [])
                .filter(function (stockMvt) { return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_19__["ObjectUtils"].isDefined(stockMvt) && !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_19__["ObjectUtils"].isDefined(stockMvt.bidtStockMvtId); });
            return datas_1
                ? Array.from(new Set(datas_1.map(function (stockMvt) { return stockMvt.stockMvtSn; })))
                    .map(function (sn) { return datas_1.filter(function (stockMvt) { return (stockMvt ? stockMvt.stockMvtSn === sn : false); }); })
                    .reduce(function (acc, x) { return acc.concat(x); }, [])
                : [];
        }
    };
    TransferOrderFormComponent.prototype.getListSNForItemBySelectedArticle = function (pn) {
        var _this = this;
        if (!(pn && this.tor && this.tor.bidtTorItems && this.selectedArticle)) {
            return [];
        }
        else {
            var bidtTorItems = this.tor.bidtTorItems;
            var datas_2 = bidtTorItems
                .filter(function (torItem) { return torItem.birePnPnCode === pn && _this.selectedArticle.bidtProcReqItemDTO.id === torItem.id; })
                .map(function (torItem) { return torItem.pickingMovements; })
                .filter(function (stockMvts) { return !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__["ListUtils"].isNullOrEmpty(stockMvts); })
                .map(function (stockMvts) { return stockMvts; })
                .reduce(function (acc, x) { return acc.concat(x); }, [])
                .filter(function (stockMvt) { return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_19__["ObjectUtils"].isDefined(stockMvt) && !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_19__["ObjectUtils"].isDefined(stockMvt.bidtStockMvtId); });
            return datas_2
                ? Array.from(new Set(datas_2.map(function (stockMvt) { return stockMvt.stockMvtSn; })))
                    .map(function (sn) { return datas_2.filter(function (stockMvt) { return (stockMvt ? stockMvt.stockMvtSn === sn : false); }); })
                    .reduce(function (acc, x) { return acc.concat(x); }, [])
                : [];
        }
    };
    TransferOrderFormComponent.prototype.onArticleRowUnselect = function () {
        this.selectedSN = undefined;
        this.stockMvtSubject.next([]);
    };
    TransferOrderFormComponent.prototype.onSNRowUnselect = function () {
        this.stockMvtSubject.next([]);
        this.showDetails = false;
        this.selectedSN = undefined;
    };
    TransferOrderFormComponent.prototype.fillStockMovementList = function () {
        var _this = this;
        if (!!this.selectedSN && !!this.tor.bidtTorItems) {
            var selectedTorItem = this.tor.bidtTorItems.find(function (torItem) { return !!_this.selectedSN && torItem.id === _this.selectedSN.bidtTorItemId; });
            if (!!selectedTorItem && !!selectedTorItem.pickingMovements) {
                if (this.selectedSN.stockMvtSn ||
                    this.selectedSN.stockMvtBatchNumber) {
                    var stocks = selectedTorItem.pickingMovements.filter(function (mvt) {
                        return !!_this.selectedSN &&
                            (mvt.stockMvtSn === _this.selectedSN.stockMvtSn ||
                                mvt.stockMvtBatchNumber === _this.selectedSN.stockMvtBatchNumber);
                    });
                    this.stockMovementTableDataSource.setData(stocks);
                    this.stockMvtSubject.next(stocks);
                    this.showDetails = false;
                }
                else {
                    this.stockMovementTableDataSource.setData([]);
                    this.stockMvtSubject.next([]);
                }
            }
        }
    };
    TransferOrderFormComponent.prototype.openReferenceDocument = function () {
        if (this.mainInfo.refDocumentNum) {
            if (this.mainInfo.isProcurementRequestRefDoc) {
                var data = {
                    id: this.tabService.generateId(),
                    componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_PROCUREMENT_REQUEST_FORM,
                    openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read,
                    objectId: this.serializationService.serialize({ id: this.procRequest.id })
                };
                var labelKey = 'transaction.' + data.componentId;
                this.tabService.open(this.tabService.create(data, labelKey, true));
            }
            else if (this.mainInfo.isWorkPackageRefDoc) {
                var data = {
                    id: this.tabService.generateId(),
                    componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].MAI_WORK_PACKAGE_FORM,
                    openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read,
                    objectId: this.serializationService.serialize({ wpId: this.mainInfo.refDocId })
                };
                var labelKey = 'transaction.' + data.componentId;
                this.tabService.open(this.tabService.create(data, labelKey, true));
            }
        }
    };
    TransferOrderFormComponent.prototype.openArticle = function (pnCode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_MATERIAL_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read,
            objectId: this.serializationService.serialize({ pnCode: pnCode })
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    TransferOrderFormComponent.prototype.openStovkMvt = function () {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_STOCK_MOVEMENTS_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    TransferOrderFormComponent.prototype.openBatch = function (stockMvtBatchNumber) {
        var _this = this;
        var input = {
            batchNumber: stockMvtBatchNumber,
            pnCode: this.selectedArticle.pn
        };
        this.torService.findBidoEquipmentByPnAndBatchNumber(input).subscribe(function (equipments) {
            if (equipments) {
                var data = {
                    id: _this.tabService.generateId(),
                    componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_PACKAGING_BATCH_FORM,
                    openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read,
                    objectId: equipments.equipmentCode
                };
                var labelKey = 'transaction.' + data.componentId;
                _this.tabService.open(_this.tabService.create(data, labelKey, true));
            }
        });
    };
    TransferOrderFormComponent.prototype.openEquipment = function (stockSn) {
        var _this = this;
        var input = {
            sn: stockSn,
            pnCode: this.selectedArticle.pn
        };
        this.torService.findBidoEquipmentsByPnAndSn(input).subscribe(function (equipments) {
            if (equipments && equipments.length > 0) {
                var objectId = {
                    equipmentCode: equipments[0].equipmentCode
                };
                var data = {
                    id: _this.tabService.generateId(),
                    openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read,
                    componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].FLE_EQUIPMENT_FORM,
                    objectId: _this.serializationService.serialize(objectId)
                };
                var labelKey = 'transaction.' + data.componentId;
                _this.tabService.open(_this.tabService.create(data, labelKey, true));
            }
        });
    };
    TransferOrderFormComponent.prototype.openManufacturingBatch = function (stockMvtBatchNumber) {
        if (stockMvtBatchNumber) {
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_MANUFACTURING_BATCH_FORM,
                objectId: this.serializationService.serialize({ customerCode: stockMvtBatchNumber }),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    TransferOrderFormComponent.prototype.openSelectedStock = function () {
        this.showMaterialInfo = true;
    };
    TransferOrderFormComponent.prototype.goback = function () {
        this.showMaterialInfo = false;
        var addSn = this.torFormService.addSN();
        this.snList.push(addSn);
    };
    TransferOrderFormComponent.prototype.showStatus = function () {
        // implement status workflow
    };
    TransferOrderFormComponent.prototype.manageTransfertOrderItem = function (row) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_MATERIAL_REQUEST_TRANSFER_ORDER_MANAGEMENT_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read,
            objectId: this.serializationService.serialize({
                torId: this.transferOrderId,
                torItemId: row.bidtProcReqItemDTO.id
            })
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    TransferOrderFormComponent.prototype.loadSites = function () {
        var _this = this;
        this.dfSearchService.findAllBireSite().subscribe({
            next: function (sites) {
                _this.siteList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__["ListUtils"].orEmpty(sites)
                    .map(function (site) {
                    return {
                        label: "" + site.siteCode,
                        value: site.siteId
                    };
                })
                    .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
                _this.siteSrcList = sites;
            }
        });
    };
    TransferOrderFormComponent.prototype.loadWareHouses = function (site) {
        var _this = this;
        this.dfSearchService.getWarehousesBySiteId(site).subscribe({
            next: function (warehouses) {
                _this.warehouseList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_18__["ListUtils"].orEmpty(warehouses)
                    .map(function (warehouse) {
                    return {
                        label: "" + warehouse.whName,
                        value: warehouse.wareHouseId
                    };
                })
                    .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
                _this.warehouseSrcList = warehouses;
            }
        });
    };
    TransferOrderFormComponent.prototype.save = function () {
        var _this = this;
        this.tor.bidtWarehouseByBidtWarehouseReceiverId = this.mainInfo.recipientWarehouseId;
        this.tor.bidtSiteByBidtSiteReceiverId = this.mainInfo.recipientSiteId;
        this.tor.bidtSiteReceipt = this.siteSrcList.find(function (site) { return site.siteId === _this.mainInfo.recipientSiteId; });
        this.tor.bidtWarehouseReceipt = this.warehouseSrcList.find(function (warehouse) { return warehouse.wareHouseId === _this.mainInfo.recipientWarehouseId; });
        if (!!this.mainInfo.recipientDate) {
            this.tor.receiptExpectedDate = new Date(this.mainInfo.recipientDate);
        }
        if (!!this.mainInfo.supplierShipmentDate) {
            this.tor.shipmentExpectedDate = new Date(this.mainInfo.supplierShipmentDate);
        }
        if (!!this.tor.bidtTorItems) {
            this.tor.bidtTorItems.forEach(function (torItem) {
                if (!!torItem.pickingMovements) {
                    torItem.pickingMovements.forEach(function (mvt) {
                        if (mvt.stockMvtWay === _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_7__["BidtStockMvtConstants"].MVT_WAY_CREDIT) {
                            mvt.bidtWarehouseByBidtWarehouseReceiptId = _this.tor.bidtWarehouseByBidtWarehouseReceiverId;
                            mvt.bidtSiteByBidtSiteReceiptId = _this.tor.bidtSiteByBidtSiteReceiverId;
                            mvt.stockMvtDate = !!_this.mainInfo.recipientDate ? new Date(_this.mainInfo.recipientDate) : undefined;
                        }
                        else if (mvt.stockMvtWay === _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_7__["BidtStockMvtConstants"].MVT_WAY_DEBIT ||
                            mvt.stockMvtWay === _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_7__["BidtStockMvtConstants"].MVT_WAY_TRANSFER) {
                            mvt.stockMvtDate = !!_this.mainInfo.supplierShipmentDate
                                ? new Date(_this.mainInfo.supplierShipmentDate)
                                : undefined;
                        }
                    });
                }
            });
        }
        this.logisticsService.addOrUpdateTransferOrder(this.tor).subscribe(function (res) {
            _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnUpdate'));
            _this.init();
        });
    };
    TransferOrderFormComponent.prototype.openCustomerDialog = function () {
        this.customerDialogVisible = true;
    };
    TransferOrderFormComponent.prototype.unselectFinalCustomer = function () {
        this.bidoCustomerReceipt = undefined;
        this.tor.bidoCustomerReceipt = undefined;
        this.tor.bidoCustomerByFkBidtTraTorReceiBidoCusCustomerCode = undefined;
    };
    TransferOrderFormComponent.prototype.onSelectCustomer = function (customer) {
        this.bidoCustomerReceipt = customer;
        this.tor.bidoCustomerReceipt = customer;
        this.tor.bidoCustomerByFkBidtTraTorReceiBidoCusCustomerCode = customer.customerCode;
    };
    TransferOrderFormComponent.prototype.toggleDetailsTable = function (showDetails) {
        this.showDetails = showDetails;
    };
    TransferOrderFormComponent.prototype.onValidateAddItem = function (event) {
        var _this = this;
        var input = {
            bidtTransferOrder: this.tor,
            pnCode: event.pn.pnCode,
            quantity: event.quantity
        };
        this.logisticsService
            .createTransferOrderTorIem(input)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.itemDialogVisible = false;
        }))
            .subscribe({
            next: function () {
                _this.messageService.showSuccessMessage('successOnAddItem');
                _this.init();
            }
        });
    };
    TransferOrderFormComponent.prototype.showItemDialog = function () {
        this.itemDialogVisible = true;
    };
    var TransferOrderFormComponent_1;
    TransferOrderFormComponent = TransferOrderFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-transfer-order-form',
            template: __webpack_require__(/*! ./transfer-order-form.component.html */ "./src/app/main/logistics/transfer-order/form/transfer-order-form.component.html"),
            styles: [__webpack_require__(/*! ./transfer-order-form.component.scss */ "./src/app/main/logistics/transfer-order/form/transfer-order-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_11__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__["TabService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_4__["PageTocService"],
            _logistics_service__WEBPACK_IMPORTED_MODULE_22__["LogisticsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_15__["SessionService"],
            _transfer_order_form_service__WEBPACK_IMPORTED_MODULE_24__["TransferOrderFormService"],
            _shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_23__["TransferOrderService"],
            _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_21__["DeliveryFolderSearchService"]])
    ], TransferOrderFormComponent);
    return TransferOrderFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_17__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/transfer-order/form/transfer-order-form.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/form/transfer-order-form.service.ts ***!
  \***********************************************************************************/
/*! exports provided: TransferOrderFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferOrderFormService", function() { return TransferOrderFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/am-project-management.api */ "./src/app/shared/api/am-project-management.api.ts");
/* harmony import */ var _shared_api_bidt_document_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/bidt-document.api */ "./src/app/shared/api/bidt-document.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../logistics.service */ "./src/app/main/logistics/logistics.service.ts");
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












var TransferOrderFormService = /** @class */ (function (_super) {
    __extends(TransferOrderFormService, _super);
    function TransferOrderFormService(http, appConfigService, amProjectManagementApi, bidtDocumentApi, fleetManagementApi, userProfileManagementApi, bidtProductStructureManagementTypeApi, logisticsService) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.amProjectManagementApi = amProjectManagementApi;
        _this.bidtDocumentApi = bidtDocumentApi;
        _this.fleetManagementApi = fleetManagementApi;
        _this.userProfileManagementApi = userProfileManagementApi;
        _this.bidtProductStructureManagementTypeApi = bidtProductStructureManagementTypeApi;
        _this.logisticsService = logisticsService;
        return _this;
    }
    TransferOrderFormService.prototype.findTransferOrderById = function (id) {
        return this.logisticsService.findTransferOrdersById(id);
    };
    TransferOrderFormService.prototype.findBidmProjectById = function (projectId) {
        return _super.prototype.post.call(this, this.amProjectManagementApi.findBidmProject, projectId);
    };
    TransferOrderFormService.prototype.fetchTransferOrderData = function (tor) {
        var workPackage$ = !!tor.bidmProjectProjectId ? this.findBidmProjectById(tor.bidmProjectProjectId) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
        return workPackage$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (workPackage) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                number: tor.torCode,
                type: tor.torType ? Number(tor.torType) : undefined,
                status: tor.torStatus,
                control: tor.criticality,
                refDocId: workPackage.projectId,
                isWorkPackageRefDoc: true,
                refDocumentNum: workPackage && workPackage.projectNumber ? workPackage.projectNumber.toString() : undefined,
                refDocType: workPackage.projectType,
                refStatus: workPackage.statusState,
                supplierSite: tor.bidtSiteIssue ? tor.bidtSiteIssue.siteCode : undefined,
                supplierShop: tor.bidtWarehouseIssue ? tor.bidtWarehouseIssue.whName : undefined,
                supplierShipmentDate: tor.shipmentExpectedDate ? tor.shipmentExpectedDate : undefined,
                recipientSite: tor.bidtSiteReceipt ? tor.bidtSiteReceipt.siteCode : undefined,
                recipientSiteId: tor.bidtSiteReceipt ? tor.bidtSiteReceipt.siteId : undefined,
                recipientShop: tor.bidtWarehouseReceipt ? tor.bidtWarehouseReceipt.whName : undefined,
                recipientWarehouseId: tor.bidtWarehouseReceipt ? tor.bidtWarehouseReceipt.wareHouseId : undefined,
                recipientDate: tor.receiptExpectedDate ? tor.receiptExpectedDate : undefined
            });
        }));
    };
    TransferOrderFormService.prototype.fetchTorRefDocument = function (bidtProcurementRequest) {
        var mainInfo = {};
        if (!bidtProcurementRequest) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(mainInfo);
        }
        if (bidtProcurementRequest.procCode) {
            mainInfo.refDocumentNum = bidtProcurementRequest.procCode;
        }
        if (bidtProcurementRequest.procType) {
            mainInfo.refDocType = bidtProcurementRequest.procType;
        }
        mainInfo.refStatus = bidtProcurementRequest.procStatus;
        mainInfo.isProcurementRequestRefDoc = true;
        mainInfo.isWorkPackageRefDoc = false;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(mainInfo);
    };
    TransferOrderFormService.prototype.fetchTorCreated = function (bidtTransferOrder) {
        if (bidtTransferOrder.statusUser) {
            return this.findUser(bidtTransferOrder.statusUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
                return {
                    created: bidtTransferOrder.statusDate,
                    applicant: user.firstname + " " + user.lastname,
                    applicantLogin: user.login
                };
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
    };
    TransferOrderFormService.prototype.fetchArticleData = function (torItem) {
        return this.getBirePnByPn({ pnCode: torItem.birePnPnCode }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (birePn) {
            var articleIf = {
                pn: birePn.pnCode,
                articleDesignation: birePn.articleDesignation,
                quantity: torItem.quantity,
                quantityUnit: birePn.quantityUnit,
                otanPnReference: birePn.otanPnReference,
                quantityPerIssue: birePn.quantityPerIssue,
                bidtProcReqItemDTO: torItem
            };
            return articleIf;
        }));
    };
    TransferOrderFormService.prototype.getBirePnByPn = function (birePnPnCode) {
        return _super.prototype.post.call(this, this.bidtProductStructureManagementTypeApi.findBirePn, birePnPnCode);
    };
    TransferOrderFormService.prototype.findBidoCustomer = function (customerId) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoCustomer, customerId);
    };
    TransferOrderFormService.prototype.findDocumentsByTransferOrderId = function (transferOrderId) {
        return _super.prototype.post.call(this, this.bidtDocumentApi.findByTransferOrderId, transferOrderId);
    };
    TransferOrderFormService.prototype.addSN = function () {
        return {
            stockMvtSn: '2225-02',
            mvtStatus: 'Cancel'
        };
    };
    TransferOrderFormService.prototype.addStock = function () {
        return {
            movementNum: 'OSM3243254324',
            movementName: 'Picking',
            type: '1',
            site: 'BA123',
            warehouse: 'Magasin General',
            zone: 'Stockage',
            emp: 'AD988',
            inboundLocalistaion: 'Sorte',
            status: 'Planned',
            date: '19/09/2019'
        };
    };
    TransferOrderFormService.prototype.getItemData = function () {
        return {
            pn: '13312-10',
            transferQuantity: '3',
            reserve: 0,
            withdrawn: 0,
            sent: 0,
            designation: '### DESIGNATION DU P/N ###',
            selectionQuantity: '1'
        };
    };
    TransferOrderFormService.prototype.loadMaterialData = function () {
        return [
            {
                article: '131100-29',
                articleDesignation: 'Interchangeable',
                sn: '22112-02',
                status: 'Disponible',
                statusLabel: 'Reserve',
                site: 'BA118',
                warehouse: 'Magasin General',
                zone: 'Stockage',
                emp: 'YH123',
                potential: '240 FH',
                lapsed: '90 Jours'
            },
            {
                article: '213412-12',
                sn: '22112-32',
                status: 'Disponible',
                site: 'BA338',
                statusLabel: 'Reserve',
                warehouse: 'Magasin General',
                zone: 'Stockage',
                emp: 'YH123',
                potential: '240 FH',
                lapsed: '90 Jours'
            },
            {
                article: '131100-29',
                sn: '22112-02',
                status: 'Disponible',
                statusLabel: '',
                site: 'BA668',
                warehouse: 'Magasin General',
                zone: 'Stockage',
                emp: 'FV213',
                potential: '240 FH',
                lapsed: '90 Jours'
            },
            {
                article: '131100-29',
                articleDesignation: 'Interchangeable',
                sn: '22112-02',
                status: 'Disponible',
                statusLabel: 'Reserved for DA S4000',
                site: 'BA118',
                warehouse: 'Magasin General',
                zone: 'Sorte',
                emp: 'IO9213',
                potential: '240 FH',
                lapsed: '72 Jours'
            }
        ];
    };
    /**************************************************************************
     * User profile management api
     *************************************************************************/
    TransferOrderFormService.prototype.findUser = function (input) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findUserByLogin, input);
    };
    TransferOrderFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__["AppConfigService"],
            _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_4__["AMProjectManagementApi"],
            _shared_api_bidt_document_api__WEBPACK_IMPORTED_MODULE_5__["BidtDocumentApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_6__["FleetManagementApi"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_8__["UserProfileManagementApi"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_7__["ProductStructureManagementApi"],
            _logistics_service__WEBPACK_IMPORTED_MODULE_11__["LogisticsService"]])
    ], TransferOrderFormService);
    return TransferOrderFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/transfer-order/search/transfer-order-search.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/search/transfer-order-search.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"createTransferOrder()\">\r\n      {{ \"global.create\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">{{ \"addToFavorite\" | translate }}</button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\" style=\"height: auto;\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <div class=\"section\">\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group flex--2\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".criticality\" | translate }} </label>\r\n\r\n                      <div class=\"form-control aw-selectbutton-wrapper\">\r\n                        <p-selectButton\r\n                          [options]=\"criticalities\"\r\n                          [(ngModel)]=\"searchCriteria.selectedCriticality\"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\"></div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".references\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input type=\"text\" [(ngModel)]=\"searchCriteria.selectedReference\" class=\"aw-input\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".type\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [showClear]=\"true\"\r\n                          [options]=\"typeList\"\r\n                          [(ngModel)]=\"searchCriteria.selectedType\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".expectedDate\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-calendar\r\n                          showButtonBar=\"true\"\r\n                          [monthNavigator]=\"true\"\r\n                          [yearNavigator]=\"true\"\r\n                          [yearRange]=\"sessionService.calendarYearRange\"\r\n                          class=\"aw-calendar\"\r\n                          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                          [locale]=\"sessionService.calendarFormat\"\r\n                          [(ngModel)]=\"searchCriteria.selectedExpectedDate\"\r\n                          appendTo=\"body\"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".status\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [showClear]=\"true\"\r\n                          [options]=\"statusList\"\r\n                          [(ngModel)]=\"searchCriteria.selectedStatus\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- SUPPLIER CRITERIA -->\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title\">{{ componentData.componentId + \".supplier\" | translate }}</h4>\r\n\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ selectedSupplier | formatSelectOption: suppliers }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control aw-selectbutton-wrapper\">\r\n                        <p-selectButton\r\n                          [options]=\"suppliers\"\r\n                          [(ngModel)]=\"selectedSupplier\"\r\n                          (click)=\"resetInputSupplier()\"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"selectedSupplier == component.SUPPLIER_EXTERNAL\" class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".partner\" | translate }}</label>\r\n\r\n                      <div class=\"form-control form-control-with-modal\">\r\n                        <div class=\"form-control-data\" (click)=\"openCustomerDialog(0)\">\r\n                          {{ searchCriteria.selectedPartner }}\r\n                          <span *ngIf=\"searchCriteria.selectedPartner\">({{ searchCriteria.selectedPartner }})</span>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"searchCriteria.selectedPartnerCode\" class=\"btn-clear-wrapper\">\r\n                          <i\r\n                            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"resetSupplierCustomerCode()\"\r\n                          ></i>\r\n                        </div>\r\n                        <div class=\"btn-search-wrapper\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"openCustomerDialog(0)\"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group ng-star-inserted\"></div>\r\n                  </div>\r\n                  <div *ngIf=\"selectedSupplier == component.SUPPLIER_INTERNAL\" class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".site\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [showClear]=\"true\"\r\n                          [(ngModel)]=\"searchCriteria.selectedSite\"\r\n                          [options]=\"siteList\"\r\n                          (onChange)=\"loadWareHouseList('supplier')\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group custom-width\">\r\n                      <label class=\"form-label\">{{\r\n                        componentData.componentId +\r\n                          (searchCriteria.warehouseType === awPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE\r\n                            ? \".warehouse\"\r\n                            : \".workshop\") | translate\r\n                      }}</label>\r\n\r\n                      <div class=\"form-control  aw-selectbutton-wrapper\">\r\n                        <p-selectButton\r\n                          [options]=\"warehouseList\"\r\n                          [(ngModel)]=\"searchCriteria.warehouseType\"\r\n                          (onChange)=\"getSelectedWareHouseList('supplier')\"\r\n                        >\r\n                        </p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> &nbsp;</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [showClear]=\"true\"\r\n                          [(ngModel)]=\"searchCriteria.selectedWarehouse\"\r\n                          [options]=\"shopList\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- RECIPIENT CRITERIA -->\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title\">{{ componentData.componentId + \".recipient\" | translate }}</h4>\r\n\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ selectedRecipient | formatSelectOption: recipients }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control aw-selectbutton-wrapper\">\r\n                        <p-selectButton\r\n                          [options]=\"recipients\"\r\n                          [(ngModel)]=\"selectedRecipient\"\r\n                          (click)=\"resetInputRecipient()\"\r\n                        >\r\n                        </p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\" *ngIf=\"selectedRecipient == component.RECIPIENT_EXTERNAL\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ componentData.componentId + \".partner\" | translate }}</label>\r\n\r\n                      <div class=\"form-control form-control-with-modal\">\r\n                        <div class=\"form-control-data\" (click)=\"openCustomerDialog()\">\r\n                          {{ searchCriteria.recipientSelectedPartner }}\r\n                          <span *ngIf=\"searchCriteria.recipientSelectedPartner\"\r\n                            >({{ searchCriteria.recipientSelectedPartner }})</span\r\n                          >\r\n                        </div>\r\n\r\n                        <div *ngIf=\"searchCriteria.recipientSelectedPartnerCode\" class=\"btn-clear-wrapper\">\r\n                          <i\r\n                            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"resetRecipientCustomerCode()\"\r\n                          ></i>\r\n                        </div>\r\n                        <div class=\"btn-search-wrapper\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"openCustomerDialog()\"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group ng-star-inserted\"></div>\r\n                  </div>\r\n                  <div class=\"row\" *ngIf=\"selectedRecipient == component.RECIPIENT_INTERNAL\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> {{ componentData.componentId + \".site\" | translate }} </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [showClear]=\"true\"\r\n                          [(ngModel)]=\"searchCriteria.recipientSelectedSite\"\r\n                          [options]=\"siteList\"\r\n                          (onChange)=\"loadWareHouseList('recipient')\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group custom-width\">\r\n                      <label class=\"form-label\">{{\r\n                        componentData.componentId +\r\n                          (searchCriteria.recipientWarehouseType === awPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE\r\n                            ? \".warehouse\"\r\n                            : \".workshop\") | translate\r\n                      }}</label>\r\n\r\n                      <div class=\"form-control  aw-selectbutton-wrapper\">\r\n                        <p-selectButton\r\n                          [options]=\"warehouseList\"\r\n                          [(ngModel)]=\"searchCriteria.recipientWarehouseType\"\r\n                          (onChange)=\"getSelectedWareHouseList('recipient')\"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"> &nbsp;</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          placeholder=\"&nbsp;\"\r\n                          [showClear]=\"true\"\r\n                          [(ngModel)]=\"searchCriteria.recipientSelectedWarehouse\"\r\n                          [options]=\"recipientshopList\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"section\">\r\n                <div class=\"section-content\">\r\n                  <div class=\"advanced-criteria\" [ngClass]=\"{ 'display--none': !showAdvancedSearchCriteria }\">\r\n                    <div class=\"section\">\r\n                      <h4 class=\"section-title\">\r\n                        {{ componentData.componentId + \".referenceDocument\" | translate }}\r\n                      </h4>\r\n                      <div class=\"section-content\">\r\n                        <div class=\"row\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{ componentData.componentId + \".docType\" | translate }} </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <p-dropdown\r\n                                class=\"aw-dropdown fixed-width\"\r\n                                placeholder=\"&nbsp;\"\r\n                                [options]=\"documentTypes\"\r\n                                [showClear]=\"true\"\r\n                                [(ngModel)]=\"searchCriteria.selectedDocumentType\"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ componentData.componentId + \".documentNumber\" | translate }}\r\n                            </label>\r\n                            <div class=\"form-control\">\r\n                              <input\r\n                                class=\"aw-input\"\r\n                                type=\"text\"\r\n                                [disabled]=\"searchCriteria.selectedDocumentType == undefined\"\r\n                                [(ngModel)]=\"searchCriteria.selectedDocumentCode\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group flex--2\"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- ACTION -->\r\n              <div class=\"section\">\r\n                <button mat-button (click)=\"showAdvancedSearchCriteria = !showAdvancedSearchCriteria\">\r\n                  <ng-container *ngIf=\"showAdvancedSearchCriteria\">\r\n                    <mat-icon>remove</mat-icon>\r\n                    {{ \"global.collapseCriteria\" | translate }}\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"!showAdvancedSearchCriteria\">\r\n                    <mat-icon>add</mat-icon>\r\n                    {{ \"global.expandCriteria\" | translate }}\r\n                  </ng-container>\r\n                </button>\r\n                <div class=\"section-content float-custom\">\r\n                  <div class=\"row search-criteria-footer\">\r\n                    <div class=\"search-actions\">\r\n                      <button\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"search()\"\r\n                        color=\"primary\"\r\n                        appKeyPress\r\n                        [keyCode]=\"'Enter'\"\r\n                        (keyPress)=\"search()\"\r\n                      >\r\n                        {{ \"global.toSearch\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- RESULT TABLE -->\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.results\" | translate }} ({{ resultsTableDataSource.dataCount }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <a-table [dataSource]=\"resultsTableDataSource\">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf=\"resultsTableDataSource.dataSelection.length > 0 && isAllOrderPlanned()\"\r\n                    type=\"button\"\r\n                    color=\"warn\"\r\n                    mat-raised-button\r\n                    (click)=\"cancelSelectedOrder()\"\r\n                  >\r\n                    {{ \"global.cancel\" | translate }}\r\n                  </button>\r\n                  <button\r\n                    *ngIf=\"resultsTableDataSource.dataSelection.length === 1\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"openSelectedOrder()\"\r\n                  >\r\n                    {{ \"global.open\" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef=\"transferOrder\" let-rowData=\"rowData\">\r\n                  <div class=\"code\">\r\n                    <div class=\"info\">\r\n                      <a (click)=\"openOrder(rowData.transferOrderDto?.bidtTransferOrder.id)\"\r\n                        ><b>{{ rowData[\"transferOrder\"] }}</b></a\r\n                      >\r\n                    </div>\r\n                    <div class=\"info\">\r\n                      <i>{{ rowData[\"transferDesignation\"] | extractTranslation }}</i>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template columnDef=\"refDocument\" let-rowData=\"rowData\">\r\n                  <div class=\"code\">\r\n                    <div class=\"info\">\r\n                      <a (click)=\"openProcurementRequest(rowData)\"\r\n                        ><b>{{ rowData[\"refNum\"] }}</b></a\r\n                      >\r\n                    </div>\r\n                    <div class=\"info\">\r\n                      <i>{{ rowData[\"refDesignation\"] }}</i>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template columnDef=\"supplier\" let-rowData=\"rowData\">\r\n                  <div class=\"code\">\r\n                    <div class=\"info\">\r\n                      <b *ngIf=\"rowData['supplierCode']\"\r\n                        >{{ rowData[\"supplierCode\"] }} - {{ rowData[\"supplierName\"] }}</b\r\n                      >\r\n                      <b *ngIf=\"!rowData['supplierCode']\"\r\n                        >{{ rowData[\"supplierCustomerCode\"] }} - {{ rowData[\"supplierCustomerName\"] }}</b\r\n                      >\r\n                    </div>\r\n                    <div class=\"info\">\r\n                      <i>{{ rowData[\"supplierWhName\"] }}</i>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template columnDef=\"recipient\" let-rowData=\"rowData\">\r\n                  <div class=\"code\">\r\n                    <div class=\"info\">\r\n                      <b *ngIf=\"rowData['recipientCode']\"\r\n                        >{{ rowData[\"recipientCode\"] }} - {{ rowData[\"recipientName\"] }}</b\r\n                      >\r\n                      <b *ngIf=\"!rowData['recipientCode']\"\r\n                        >{{ rowData[\"recipientCustomerCode\"] }} - {{ rowData[\"recipientCustomerName\"] }}</b\r\n                      >\r\n                    </div>\r\n                    <div class=\"info\">\r\n                      <i>{{ rowData[\"recipientWhName\"] }}</i>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template columnDef=\"article\" let-rowData=\"rowData\">\r\n                  <div *ngIf=\"!rowData['hasMultipleArticle']\">\r\n                    <div class=\"code\">\r\n                      <div class=\"info\">\r\n                        <span>\r\n                          <a (click)=\"openArticle(rowData['articleNum'])\"\r\n                            ><b>{{ rowData[\"articleNum\"] }}</b></a\r\n                          >\r\n                          <span *ngIf=\"rowData['sn'] || rowData['batchNumber']\"> / </span>\r\n                          <a (click)=\"openEquipment(rowData)\"\r\n                            ><b>{{ rowData[\"sn\"] }}</b></a\r\n                          >\r\n                          <a *ngIf=\"!rowData['sn']\" (click)=\"openEquipment(rowData)\"\r\n                            ><b>{{ rowData[\"batchNumber\"] }}</b></a\r\n                          >\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"info\">\r\n                        <i>{{ rowData[\"articleDesignation\"] }}</i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"rowData['hasMultipleArticle']\">\r\n                    <i>{{ rowData[\"quantity\"] }} {{ componentData.componentId + \".items\" | translate }}</i>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template columnDef=\"quantity\" let-rowData=\"rowData\">\r\n                  <b *ngIf=\"!rowData['hasMultipleArticle']\">{{ rowData[\"quantity\"] | number }}</b>\r\n                </ng-template>\r\n                <ng-template columnDef=\"expectedDate\" let-rowData=\"rowData\">\r\n                  <span>{{ rowData[\"expectedDate\"] | date: \"yyyy/MM/dd\" }} </span>\r\n                </ng-template>\r\n                <ng-template columnDef=\"status\" let-rowData=\"rowData\">\r\n                  <div class=\"code\">\r\n                    {{ rowData[\"status\"] }}\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template columnDef=\"criticality\" let-rowData=\"rowData\">\r\n                  <span\r\n                    *ngIf=\"rowData['criticalityCode'] === awPropertiesConstants.LOGISTICAL_CRITICALITY_IMMEDIATE\"\r\n                    class=\"procurement-alert procurement--nok\"\r\n                  >\r\n                    {{ rowData[\"criticality\"] | translate }}\r\n                  </span>\r\n                  <span\r\n                    *ngIf=\"rowData['criticalityCode'] === awPropertiesConstants.LOGISTICAL_CRITICALITY_URGENT\"\r\n                    class=\"procurement-alert procurement--warning\"\r\n                  >\r\n                    {{ rowData[\"criticality\"] | translate }}\r\n                  </span>\r\n                  <span\r\n                    *ngIf=\"rowData['criticalityCode'] === awPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE\"\r\n                    class=\"procurement-alert procurement--ok\"\r\n                  >\r\n                    {{ rowData[\"criticality\"] | translate }}\r\n                  </span>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-transfer-order-popup\r\n  *ngIf=\"showCreateTransferOrderDialog\"\r\n  [(display)]=\"showCreateTransferOrderDialog\"\r\n  (onValidate)=\"onCreate($event)\"\r\n>\r\n</aw-transfer-order-popup>\r\n\r\n<aw-dialog-search-customer\r\n  *ngIf=\"showCustomerDialog\"\r\n  [(display)]=\"showCustomerDialog\"\r\n  [customer-code]=\"searchCriteria.recipientSelectedPartnerCode\"\r\n  (onSelected)=\"onSelectedCustomer($event)\"\r\n>\r\n</aw-dialog-search-customer>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/transfer-order/search/transfer-order-search.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/search/transfer-order-search.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .alert {\n  display: inline-block;\n  max-width: 7rem;\n  text-transform: uppercase;\n  width: 100%;\n  font-weight: 600;\n  text-align: center;\n  width: 5rem; }\n  :host .alert.alert--ok {\n    background-color: #4caf50; }\n  :host .alert.alert--warning {\n    background-color: #ffc107; }\n  :host .alert.alert--nok {\n    background-color: #f6685e; }\n  :host .alert.alert--none {\n    background-color: #c8d4d6; }\n  :host .code {\n  display: inline-table;\n  width: 100%; }\n  :host ::ng-deep .name {\n  font-style: italic;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 20em; }\n  :host ::ng-deep .info {\n  overflow: hidden;\n  padding-bottom: 0.4em;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  :host .label-class {\n  padding-right: 0.5em;\n  display: inline-block;\n  width: 5.5em; }\n  :host .situation-label-class {\n  padding-right: 0.5em;\n  display: inline-block;\n  width: 5.5em; }\n  :host .float-custom {\n  float: right; }\n  :host .custom-width {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content; }\n  :host .procurement-alert {\n  font-weight: 600;\n  text-align: center;\n  display: inline-block;\n  padding: 4px; }\n  :host .procurement--nok {\n  background-color: #f6685e; }\n  :host .procurement--ok {\n  background-color: #4caf50; }\n  :host .procurement--warning {\n  background-color: #ffc107; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvdHJhbnNmZXItb3JkZXIvc2VhcmNoL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcdHJhbnNmZXItb3JkZXJcXHNlYXJjaFxcdHJhbnNmZXItb3JkZXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy90cmFuc2Zlci1vcmRlci9zZWFyY2gvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUkscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0VBUmY7SUFXTSx5QkNRZ0IsRUFBQTtFRG5CdEI7SUFlTSx5QkNLVSxFQUFBO0VEcEJoQjtJQW1CTSx5QkNHYyxFQUFBO0VEdEJwQjtJQXVCTSx5QkNFUyxFQUFBO0VEekJmO0VBNEJJLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7RUE3QmY7RUFpQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTtFQXJDbkI7RUF5Q0ksZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7RUE1Q3ZCO0VBZ0RJLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsWUFBWSxFQUFBO0VBbERoQjtFQXNESSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTtFQXhEaEI7RUE0REksWUFBWSxFQUFBO0VBNURoQjtFQWdFSSw4QkFBc0I7RUFBdEIsMkJBQXNCO0VBQXRCLHNCQUFzQixFQUFBO0VBaEUxQjtFQW9FSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7RUF2RWhCO0VBMkVJLHlCQ3JEZ0IsRUFBQTtFRHRCcEI7RUErRUkseUJDNURrQixFQUFBO0VEbkJ0QjtFQW1GSSx5QkMvRFksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3RyYW5zZmVyLW9yZGVyL3NlYXJjaC90cmFuc2Zlci1vcmRlci1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLmFsZXJ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1heC13aWR0aDogN3JlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tbm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tbm9uZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5MTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb2RlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5uYW1lIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtYXgtd2lkdGg6IDIwZW07XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLmluZm8ge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjRlbTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIC5sYWJlbC1jbGFzcyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1LjVlbTtcclxuICB9XHJcblxyXG4gIC5zaXR1YXRpb24tbGFiZWwtY2xhc3Mge1xyXG4gICAgcGFkZGluZy1yaWdodDogMC41ZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNS41ZW07XHJcbiAgfVxyXG5cclxuICAuZmxvYXQtY3VzdG9tIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20td2lkdGgge1xyXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICB9XHJcblxyXG4gIC5wcm9jdXJlbWVudC1hbGVydCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2N1cmVtZW50LS1ub2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgfVxyXG5cclxuICAucHJvY3VyZW1lbnQtLW9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgfVxyXG5cclxuICAucHJvY3VyZW1lbnQtLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/logistics/transfer-order/search/transfer-order-search.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/search/transfer-order-search.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TransferOrderSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferOrderSearchComponent", function() { return TransferOrderSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../logistics.service */ "./src/app/main/logistics/logistics.service.ts");
/* harmony import */ var _shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/transfer-order-service */ "./src/app/main/logistics/transfer-order/shared/transfer-order-service.ts");
/* harmony import */ var _transfer_order_search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./transfer-order-search.service */ "./src/app/main/logistics/transfer-order/search/transfer-order-search.service.ts");
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



















var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["COLLAPSE"] = 0] = "COLLAPSE";
    ViewMode[ViewMode["EXPAND"] = 1] = "EXPAND";
})(ViewMode || (ViewMode = {}));
var TransferOrderSearchComponent = /** @class */ (function (_super) {
    __extends(TransferOrderSearchComponent, _super);
    function TransferOrderSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, translateService, sessionService, confirmationService, transferOrderSearchService, logisticsService, transferOrderService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.translateService = translateService;
        _this.sessionService = sessionService;
        _this.confirmationService = confirmationService;
        _this.transferOrderSearchService = transferOrderSearchService;
        _this.logisticsService = logisticsService;
        _this.transferOrderService = transferOrderService;
        _this.searchCriteria = {};
        _this.component = TransferOrderSearchComponent_1;
        return _this;
    }
    TransferOrderSearchComponent_1 = TransferOrderSearchComponent;
    TransferOrderSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].LOG_TRANSFER_ORDER_SEARCH;
    };
    TransferOrderSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
        this.awPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"];
        this.completeSiteList = [];
        this.suppliers = [];
        this.recipients = [];
        this.criticalities = [];
        this.toTable = [];
        this.toTableLoading = false;
        this.toTableViewMode = ViewMode.COLLAPSE;
        this.selectedTos = [];
        this.documentTypes = this.transferOrderService.loadDocumentTypes();
        this.loadCriticalities();
        this.loadSuppliers();
        this.loadRecipients();
        this.loadDropdown();
        this.loadProcurementRequestType();
        this.initTableCols();
        this.setToTableColumns();
    };
    /***************************************
     * INIT TABLE
     ***************************************/
    TransferOrderSearchComponent.prototype.initTableCols = function () {
        this.resultsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'transferOrder',
                    translateKey: this.getTranslateKey('transferOrder'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '15%'
                },
                {
                    field: 'refDocument',
                    translateKey: this.getTranslateKey('refDocument'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '15%'
                },
                {
                    field: 'supplier',
                    translateKey: this.getTranslateKey('supplier'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '15%'
                },
                {
                    field: 'recipient',
                    translateKey: this.getTranslateKey('recipient'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '15%'
                },
                {
                    field: 'article',
                    translateKey: this.getTranslateKey('article'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '15%'
                },
                {
                    field: 'quantity',
                    translateKey: this.getTranslateKey('quantity'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '5%'
                },
                {
                    field: 'status',
                    translateKey: this.getTranslateKey('status'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '7.5%'
                },
                {
                    field: 'expectedDate',
                    translateKey: this.getTranslateKey('expectedDate'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '7.5%'
                },
                {
                    field: 'criticality',
                    translateKey: this.getTranslateKey('criticality'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].LEFT,
                    width: '7.5%'
                }
            ],
            data: [],
            customGlobalFilter: function (currentData, globalSearchText) {
                if (!globalSearchText) {
                    return true;
                }
                var upperCaseSearchText = globalSearchText.toUpperCase();
                return (currentData.transferOrder && currentData.transferOrder.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.transferDesignation &&
                        currentData.transferDesignation.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.refNum && currentData.refNum.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.refDesignation && currentData.refDesignation.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.recipientCode && currentData.recipientCode.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.recipientName && currentData.recipientName.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.recipientWhCode && currentData.recipientWhCode.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.recipientWhName && currentData.recipientWhName.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.supplierCode && currentData.supplierCode.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.supplierName && currentData.supplierName.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.supplierWhCode && currentData.supplierWhCode.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.supplierWhName && currentData.supplierWhName.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.articleNum && currentData.articleNum.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.articleNum && currentData.articleNum.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.articleDesignation &&
                        currentData.articleDesignation.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.status && currentData.status.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.quantity && currentData.quantity.toUpperCase().includes(upperCaseSearchText)) ||
                    (currentData.criticality && currentData.criticality.toUpperCase().includes(upperCaseSearchText))
                    ? true
                    : false;
            }
        });
    };
    /***************************************
     * Load Dropdowns
     ***************************************/
    TransferOrderSearchComponent.prototype.loadDropdown = function () {
        var _this = this;
        this.siteList = [];
        this.transferOrderSearchService.fetchSiteList().subscribe(function (res) {
            res.forEach(function (site) {
                if (!!site.siteId && !!site.siteName) {
                    _this.siteList.push({
                        label: site.siteName,
                        value: site.siteId
                    });
                }
            });
        });
        this.partnerList = this.transferOrderSearchService.fetchPartnerList();
        this.getWarehouseWorkshopList();
        this.transferOrderService.fetchStatusList().subscribe(function (res) {
            _this.statusList = res;
        });
        this.transferOrderService.fetchTypeList().subscribe(function (res) {
            _this.typeList = res;
        });
    };
    TransferOrderSearchComponent.prototype.loadCriticalities = function () {
        var _this = this;
        this.transferOrderService.fetchCriticalityList().subscribe({
            next: function (criticalities) {
                _this.criticalities = __spread([
                    {
                        label: _this.translateService.instant(_this.getTranslateKey('all')),
                        value: undefined
                    }
                ], criticalities.map(function (criticality) {
                    return {
                        label: criticality.label,
                        value: criticality.value
                    };
                }));
            }
        });
    };
    TransferOrderSearchComponent.prototype.loadProcurementRequestType = function () {
        var _this = this;
        this.transferOrderService
            .fetchProcurementRequestTypeList()
            .subscribe(function (procReq) { return (_this.procurementRequestTypeList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_15__["ListUtils"].orEmpty(procReq)); });
    };
    TransferOrderSearchComponent.prototype.loadSuppliers = function () {
        this.suppliers = [
            {
                label: this.translateService.instant('internal'),
                value: TransferOrderSearchComponent_1.SUPPLIER_INTERNAL
            },
            {
                label: this.translateService.instant('external'),
                value: TransferOrderSearchComponent_1.SUPPLIER_EXTERNAL
            }
        ];
        this.selectedSupplier = this.suppliers[0].value;
    };
    TransferOrderSearchComponent.prototype.loadRecipients = function () {
        this.recipients = [
            {
                label: this.translateService.instant('internal'),
                value: TransferOrderSearchComponent_1.RECIPIENT_INTERNAL
            },
            {
                label: this.translateService.instant('external'),
                value: TransferOrderSearchComponent_1.RECIPIENT_EXTERNAL
            }
        ];
        this.selectedRecipient = this.recipients[0].value;
    };
    TransferOrderSearchComponent.prototype.getWarehouseWorkshopList = function () {
        var _this = this;
        this.transferOrderSearchService.fetchWarehouseList().subscribe(function (res) {
            if (res && res.length) {
                _this.warehouseList = __spread(res).sort(function (s1, s2) { return s1.value.localeCompare(s2.value); });
                _this.searchCriteria.recipientWarehouseType =
                    _this.warehouseList && _this.warehouseList.length ? _this.warehouseList[0].value : '';
                _this.searchCriteria.warehouseType =
                    _this.warehouseList && _this.warehouseList.length ? _this.warehouseList[0].value : '';
            }
        });
    };
    TransferOrderSearchComponent.prototype.search = function () {
        var _this = this;
        this.toTableLoading = true;
        this.selectedTos = [];
        var searchCriteria = {
            transferOrder: {
                shipmentExpectedDate: this.searchCriteria.selectedExpectedDate,
                criticality: this.searchCriteria.selectedCriticality,
                torStatus: this.searchCriteria.selectedStatus,
                torType: this.searchCriteria.selectedType,
                torCode: this.searchCriteria.selectedReference,
                bidtSiteByBidtSiteSenderId: this.searchCriteria.selectedSite,
                bidtWarehouseByBidtWarehouseSenderId: this.completeSiteList
                    ? this.completeSiteList
                        .filter(function (site) { return site.whCode === _this.searchCriteria.selectedWarehouse; })
                        .map(function (site) { return site.wareHouseId; })[0]
                    : undefined,
                bidtSiteByBidtSiteReceiverId: this.searchCriteria.recipientSelectedSite,
                bidtWarehouseByBidtWarehouseReceiverId: this.completeSiteListRecipient
                    ? this.completeSiteListRecipient
                        .filter(function (site) { return site.whCode === _this.searchCriteria.recipientSelectedWarehouse; })
                        .map(function (site) { return site.wareHouseId; })[0]
                    : undefined,
                bidoCustomerByFkBidtTraTorSendeBidoCusCustomerCode: this.searchCriteria.selectedPartnerCode,
                bidoCustomerByFkBidtTraTorReceiBidoCusCustomerCode: this.searchCriteria.recipientSelectedPartner
            },
            transferOrderStatusExcluded: this.searchCriteria.selectedStatus
                ? []
                : [_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].TRANSFER_ORDER_STATUS_PERFORMED, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].TRANSFER_ORDER_STATUS_CANCELED]
        };
        this.logisticsService
            .findTransferOrdersByCriteria(searchCriteria)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this.toTableLoading = false;
        }))
            .subscribe({
            next: function (datas) {
                _super.prototype.differ.call(_this, function () {
                    _this.resultsTableDataSource.setData([]);
                    datas.forEach(function (data) { return _this.loadTransferOrderInterface(data); });
                    _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
                });
            }
        });
    };
    TransferOrderSearchComponent.prototype.loadTransferOrderInterface = function (data) {
        var _this = this;
        var refNum = data.bidtProcurementRequest ? data.bidtProcurementRequest.procCode : undefined;
        var refDesignation = data.bidtProcurementRequest ? data.bidtProcurementRequest.procType : undefined;
        var birePn$;
        var result = {};
        if (data.bidtTransferOrder) {
            result._transferOrderDTO = data.bidtTransferOrder;
            result.transferOrder = data.bidtTransferOrder.torCode;
            result.transferDesignation = this.typeList
                .filter(function (ty) { return ty.value.toString() === data.bidtTransferOrder.torType; })
                .map(function (res) { return res.label; })[0];
            result.refDesignation = refDesignation
                ? this.procurementRequestTypeList.filter(function (pr) { return pr.value === refDesignation; }).map(function (pr) { return pr.label; })[0]
                : data.bidtTransferOrder.bidmProject
                    ? this.translateService.instant(this.getTranslateKey('workPackage'))
                    : undefined;
            result.refDocument = result.refDesignation;
            result.status = this.statusList
                .filter(function (st) { return st.value === data.bidtTransferOrder.torStatus; })
                .map(function (res) { return res.label; })[0];
            result.criticalityCode = data.bidtTransferOrder.criticality;
            result.criticality = this.criticalities
                .filter(function (cr) { return cr.value === data.bidtTransferOrder.criticality; })
                .map(function (res) { return res.label; })[0];
            result.transferOrderDto = data;
            if (refNum || data.bidtTransferOrder.bidmProjectProjectId) {
                result.refNum = refNum
                    ? refNum
                    : !!data.bidtTransferOrder.bidmProject
                        ? "" + data.bidtTransferOrder.bidmProject.projectNumber
                        : '';
            }
            if (data.bidtTransferOrder.bidtSiteIssue) {
                result.supplierCode = data.bidtTransferOrder.bidtSiteIssue.siteCode;
                result.supplierName = data.bidtTransferOrder.bidtSiteIssue.siteName;
                result.supplier = result.supplierCode + " " + result.supplierName;
            }
            if (data.bidtTransferOrder.bidtWarehouseIssue) {
                result.supplierWhCode = data.bidtTransferOrder.bidtWarehouseIssue.whCode;
                result.supplierWhName = data.bidtTransferOrder.bidtWarehouseIssue.whName;
            }
            if (data.bidtTransferOrder.bidtSiteReceipt) {
                result.recipientCode = data.bidtTransferOrder.bidtSiteReceipt.siteCode;
                result.recipientName = data.bidtTransferOrder.bidtSiteReceipt.siteName;
                result.recipient = result.recipientCode + " " + result.recipientName;
            }
            if (data.bidtTransferOrder.bidtWarehouseReceipt) {
                result.recipientWhCode = data.bidtTransferOrder.bidtWarehouseReceipt.whCode;
                result.recipientWhName = data.bidtTransferOrder.bidtWarehouseReceipt.whName;
            }
            if (data.bidtTransferOrder.bidoCustomerIssue) {
                result.supplierCustomerCode = data.bidtTransferOrder.bidoCustomerIssue.customerCode;
                result.supplierCustomerName = data.bidtTransferOrder.bidoCustomerIssue.customerName;
            }
            if (data.bidtTransferOrder.bidoCustomerReceipt) {
                result.recipientCustomerCode = data.bidtTransferOrder.bidoCustomerReceipt.customerCode;
                result.recipientCustomerName = data.bidtTransferOrder.bidoCustomerReceipt.customerName;
            }
            if (data.bidtTransferOrder.bidtTorItems) {
                result.hasMultipleArticle = data.bidtTransferOrder.bidtTorItems.length > 1;
                if (result.hasMultipleArticle) {
                    result.quantity = "" + data.bidtTransferOrder.bidtTorItems.length;
                }
                else {
                    if (data.bidtTransferOrder.bidtTorItems[0] && data.bidtTransferOrder.bidtTorItems[0].birePnPnCode) {
                        birePn$ = this.transferOrderSearchService.getBirePnByPn({
                            pnCode: data.bidtTransferOrder.bidtTorItems[0].birePnPnCode
                        });
                        result.quantity = "" + data.bidtTransferOrder.bidtTorItems[0].quantity;
                    }
                }
            }
            if (data.bidtTransferOrder.shipmentExpectedDate) {
                result.expectedDate = new Date(data.bidtTransferOrder.shipmentExpectedDate);
            }
        }
        if (birePn$) {
            birePn$.subscribe(function (birePn) {
                result.article = birePn.pnCode + " " + birePn.articleDesignation;
                result.articleNum = birePn.pnCode;
                result.articleDesignation = birePn.articleDesignation;
                result.quantityUnit = birePn.quantityUnit;
                _this.resultsTableDataSource.addData([result]);
            });
        }
        else {
            this.resultsTableDataSource.addData([result]);
        }
        var nbSelectedMaterial = 0;
        if (data.bidtTransferOrder.bidtTorItems &&
            data.bidtTransferOrder.bidtTorItems.length === 1 &&
            data.bidtTransferOrder.bidtTorItems[0].pickingMovements) {
            data.bidtTransferOrder.bidtTorItems[0].pickingMovements.forEach(function (mvt) {
                if (mvt.bidtStockMvtId === null) {
                    result.sn = mvt.stockMvtSn;
                    result.batchNumber = mvt.stockMvtBatchNumber;
                    nbSelectedMaterial++;
                }
            });
        }
        if (nbSelectedMaterial > 1) {
            result.sn = undefined;
            result.batchNumber = undefined;
        }
    };
    TransferOrderSearchComponent.prototype.toogleViewMode = function () {
        this.toTableViewMode = this.toTableViewMode === ViewMode.COLLAPSE ? ViewMode.EXPAND : ViewMode.COLLAPSE;
    };
    TransferOrderSearchComponent.prototype.isAllOrderPlanned = function () {
        return (this.resultsTableDataSource.dataSelection.filter(function (row) {
            return !!row._transferOrderDTO &&
                !!row._transferOrderDTO.torStatus &&
                row._transferOrderDTO.torStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].TRANSFER_ORDER_STATUS_PLANNED;
        }).length === this.resultsTableDataSource.dataSelection.length);
    };
    TransferOrderSearchComponent.prototype.cancelSelectedOrder = function () {
        var _this = this;
        var partialMessageKey = this.resultsTableDataSource.dataSelection.length > 1 ? 'confirmCancelMany' : 'confirmCancelOne';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                var transferOrderToCancelList = _this.resultsTableDataSource.dataSelection
                    .filter(function (row) { return !!row._transferOrderDTO; })
                    .map(function (transferOrderRow) {
                    return transferOrderRow._transferOrderDTO;
                });
                _this.logisticsService.cancelTransferOrder(transferOrderToCancelList).subscribe(function (result) {
                    _this.resultsTableDataSource.dataSelection = [];
                    _this.search();
                });
            }
        });
    };
    TransferOrderSearchComponent.prototype.openSelectedOrder = function () {
        if (this.resultsTableDataSource.dataSelectionCount === 1) {
            if (this.resultsTableDataSource.dataSelection[0].transferOrderDto) {
                this.openOrder(this.resultsTableDataSource.dataSelection[0].transferOrderDto.bidtTransferOrder.id);
            }
        }
    };
    TransferOrderSearchComponent.prototype.openOrder = function (id) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].LOG_TRANSFER_ORDER_FORM,
            objectId: this.serializationService.serialize(id),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    TransferOrderSearchComponent.prototype.openProcurementRequest = function (tor) {
        if (!!tor.transferOrderDto && !!tor.transferOrderDto.bidtProcurementRequest) {
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].LOG_PROCUREMENT_REQUEST_FORM,
                objectId: tor.transferOrderDto && tor.transferOrderDto.bidtProcurementRequest
                    ? this.serializationService.serialize({ id: tor.transferOrderDto.bidtProcurementRequest.id })
                    : undefined,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
        else if (!!tor.transferOrderDto && !!tor.transferOrderDto.bidtTransferOrder.bidmProject) {
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].MAI_WORK_PACKAGE_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read,
                objectId: this.serializationService.serialize({
                    wpId: tor.transferOrderDto.bidtTransferOrder.bidmProject.projectId
                })
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    TransferOrderSearchComponent.prototype.openCustomerDialog = function (source) {
        this.showCustomerDialog = true;
        if (source === 0) {
            this.customDialogSource = source;
        }
    };
    TransferOrderSearchComponent.prototype.openArticle = function (pnCode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].LOG_MATERIAL_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read,
            objectId: this.serializationService.serialize({ pnCode: pnCode })
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    TransferOrderSearchComponent.prototype.openEquipment = function (tor) {
        var _this = this;
        var equip = {};
        if (tor.sn) {
            equip.sn = tor.sn;
        }
        equip.pnCode = tor.articleNum;
        equip.batchNumber = tor.batchNumber;
        equip.bidoEquipmentAttributeList = [];
        equip.equipmentFunction = '';
        if (tor.sn) {
            this.transferOrderService.findBidoEquipmentsByPnAndSn(equip).subscribe({
                next: function (results) {
                    if (results.length === 1) {
                        var objectId = {
                            equipmentCode: results[0].equipmentCode
                        };
                        var data = {
                            id: _this.tabService.generateId(),
                            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read,
                            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].FLE_EQUIPMENT_FORM,
                            objectId: _this.serializationService.serialize(objectId)
                        };
                        var labelKey = 'transaction.' + data.componentId;
                        _this.tabService.open(_this.tabService.create(data, labelKey, true));
                    }
                }
            });
        }
        else {
            this.transferOrderService.findBidoEquipmentByPnAndBatchNumber(equip).subscribe({
                next: function (result) {
                    if (result) {
                        var data = {
                            id: _this.tabService.generateId(),
                            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].LOG_PACKAGING_BATCH_FORM,
                            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read
                        };
                        data.objectId = result.equipmentCode;
                        var labelKey = 'transaction.' + data.componentId;
                        _this.tabService.open(_this.tabService.create(data, labelKey, true));
                    }
                }
            });
        }
    };
    /** On selecting business partner */
    TransferOrderSearchComponent.prototype.onSelectedCustomer = function (event) {
        if (this.customDialogSource === 0) {
            this.searchCriteria.selectedPartnerCode = event.customerCode;
            this.searchCriteria.selectedPartner = event.customerName;
        }
        else {
            this.searchCriteria.recipientSelectedPartnerCode = event.customerCode;
            this.searchCriteria.recipientSelectedPartner = event.customerName;
        }
        this.customDialogSource = undefined;
    };
    TransferOrderSearchComponent.prototype.loadWareHouseList = function (type) {
        var _this = this;
        var selectedSite = 0;
        if (type === 'recipient') {
            this.searchCriteria.recipientSelectedWarehouse = undefined;
            this.completeSiteListRecipient = [];
            this.recipientshopList = [];
            selectedSite = this.searchCriteria.recipientSelectedSite || 0;
        }
        else {
            this.searchCriteria.selectedWarehouse = undefined;
            this.completeSiteList = [];
            this.shopList = [];
            selectedSite = this.searchCriteria.selectedSite || 0;
        }
        if (selectedSite !== 0) {
            this.transferOrderSearchService.getWarehousesBySiteId(selectedSite).subscribe(function (res) {
                if (res && res.length) {
                    if (type === 'recipient') {
                        _this.completeSiteListRecipient = res;
                    }
                    else {
                        _this.completeSiteList = res;
                    }
                    _this.getSelectedWareHouseList(type);
                }
            });
        }
    };
    TransferOrderSearchComponent.prototype.getSelectedWareHouseList = function (type) {
        var _this = this;
        var arrayObject;
        var selectedWarehouseType;
        if (type === 'recipient') {
            arrayObject = __spread(this.completeSiteListRecipient);
            this.recipientshopList = [];
            selectedWarehouseType = this.searchCriteria.recipientWarehouseType;
            this.searchCriteria.recipientSelectedWarehouse = undefined;
        }
        else {
            arrayObject = __spread(this.completeSiteList);
            this.shopList = [];
            selectedWarehouseType = this.searchCriteria.warehouseType;
            this.searchCriteria.selectedWarehouse = undefined;
        }
        if (arrayObject && arrayObject.length) {
            arrayObject.forEach(function (siteObj) {
                if (siteObj && siteObj.whCategory === selectedWarehouseType) {
                    var shopListObj = {
                        label: siteObj.whName,
                        value: siteObj.whCode
                    };
                    type === 'recipient' ? _this.recipientshopList.push(shopListObj) : _this.shopList.push(shopListObj);
                }
            });
        }
    };
    TransferOrderSearchComponent.prototype.createTransferOrder = function () {
        this.showCreateTransferOrderDialog = true;
    };
    TransferOrderSearchComponent.prototype.resetInputSupplier = function () {
        if (this.selectedSupplier === TransferOrderSearchComponent_1.SUPPLIER_INTERNAL) {
            this.resetSupplierCustomerCode();
        }
        else {
            this.searchCriteria.selectedSite = undefined;
            this.searchCriteria.selectedWarehouse = undefined;
        }
    };
    TransferOrderSearchComponent.prototype.resetInputRecipient = function () {
        if (this.selectedRecipient === TransferOrderSearchComponent_1.RECIPIENT_INTERNAL) {
            this.resetRecipientCustomerCode();
        }
        else {
            this.searchCriteria.recipientSelectedSite = undefined;
            this.searchCriteria.recipientSelectedWarehouse = undefined;
        }
    };
    TransferOrderSearchComponent.prototype.resetSupplierCustomerCode = function () {
        this.searchCriteria.selectedPartnerCode = '';
        this.searchCriteria.selectedPartner = undefined;
    };
    TransferOrderSearchComponent.prototype.resetRecipientCustomerCode = function () {
        this.searchCriteria.recipientSelectedPartnerCode = '';
        this.searchCriteria.recipientSelectedPartner = undefined;
    };
    TransferOrderSearchComponent.prototype.setToTableColumns = function () {
        this.toTableColumns = [
            { field: 'transferOrder', alignment: 'left', width: '13%' },
            { field: 'refDocument', alignment: 'left', width: '13%' },
            { field: 'supplier', alignment: 'left', width: '13%' },
            { field: 'recipient', alignment: 'left', width: '13%' },
            { field: 'article', alignment: 'left', width: '21%' },
            { field: 'quantity', alignment: 'left', width: '9%' },
            { field: 'status', alignment: 'left', width: '9%' },
            { field: 'criticality', alignment: 'left', width: '9%' }
        ];
    };
    TransferOrderSearchComponent.prototype.onCreate = function (transferOrder) {
        this.openOrder(transferOrder.id);
    };
    var TransferOrderSearchComponent_1;
    TransferOrderSearchComponent.ALL = 'ALL';
    TransferOrderSearchComponent.SHIPMENT = 'shipment';
    TransferOrderSearchComponent.SUPPLIER_INTERNAL = 0;
    TransferOrderSearchComponent.SUPPLIER_EXTERNAL = 1;
    TransferOrderSearchComponent.RECIPIENT_INTERNAL = 0;
    TransferOrderSearchComponent.RECIPIENT_EXTERNAL = 1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resultsContainerAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TransferOrderSearchComponent.prototype, "resultsContainerAnchor", void 0);
    TransferOrderSearchComponent = TransferOrderSearchComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-transfer-order-search',
            template: __webpack_require__(/*! ./transfer-order-search.component.html */ "./src/app/main/logistics/transfer-order/search/transfer-order-search.component.html"),
            styles: [__webpack_require__(/*! ./transfer-order-search.component.scss */ "./src/app/main/logistics/transfer-order/search/transfer-order-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_13__["TabService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"],
            _transfer_order_search_service__WEBPACK_IMPORTED_MODULE_18__["TransferOrderSearchService"],
            _logistics_service__WEBPACK_IMPORTED_MODULE_16__["LogisticsService"],
            _shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_17__["TransferOrderService"]])
    ], TransferOrderSearchComponent);
    return TransferOrderSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_14__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/transfer-order/transfer-order.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/transfer-order.module.ts ***!
  \************************************************************************/
/*! exports provided: TransferOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferOrderModule", function() { return TransferOrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ "./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts");
/* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/dialog-search-customer/dialog-search-customer.module */ "./src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _procurement_request_procurement_request_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../procurement-request/procurement-request.module */ "./src/app/main/logistics/procurement-request/procurement-request.module.ts");
/* harmony import */ var _form_material_selection_material_selection_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form/material-selection/material-selection.component */ "./src/app/main/logistics/transfer-order/form/material-selection/material-selection.component.ts");
/* harmony import */ var _form_transfer_order_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form/transfer-order-form.component */ "./src/app/main/logistics/transfer-order/form/transfer-order-form.component.ts");
/* harmony import */ var _form_transfer_order_form_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./form/transfer-order-form.service */ "./src/app/main/logistics/transfer-order/form/transfer-order-form.service.ts");
/* harmony import */ var _search_transfer_order_popup_transfer_order_popup_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./search/transfer-order-popup/transfer-order-popup.module */ "./src/app/main/logistics/transfer-order/search/transfer-order-popup/transfer-order-popup.module.ts");
/* harmony import */ var _search_transfer_order_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./search/transfer-order-search.component */ "./src/app/main/logistics/transfer-order/search/transfer-order-search.component.ts");
/* harmony import */ var _search_transfer_order_search_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./search/transfer-order-search.service */ "./src/app/main/logistics/transfer-order/search/transfer-order-search.service.ts");
/* harmony import */ var _shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/transfer-order-service */ "./src/app/main/logistics/transfer-order/shared/transfer-order-service.ts");
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
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__["CheckboxModule"],
    _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_15__["TableModule"],
    primeng_chart__WEBPACK_IMPORTED_MODULE_1__["ChartModule"],
    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__["SplitButtonModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_5__["SelectButtonModule"],
    primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
    _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_12__["ComponentSidebarModule"],
    _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_14__["ManageSearchCriteriaModule"],
    _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_13__["DialogSearchCustomerModule"]
];
var INTERNAL_MODULES = [_search_transfer_order_popup_transfer_order_popup_module__WEBPACK_IMPORTED_MODULE_21__["TransferOrderPopupModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [_form_transfer_order_form_component__WEBPACK_IMPORTED_MODULE_19__["TransferOrderFormComponent"], _search_transfer_order_search_component__WEBPACK_IMPORTED_MODULE_22__["TransferOrderSearchComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_shared_transfer_order_service__WEBPACK_IMPORTED_MODULE_24__["TransferOrderService"], _form_transfer_order_form_service__WEBPACK_IMPORTED_MODULE_20__["TransferOrderFormService"], _search_transfer_order_search_service__WEBPACK_IMPORTED_MODULE_23__["TransferOrderSearchService"]];
var TransferOrderModule = /** @class */ (function () {
    function TransferOrderModule() {
    }
    TransferOrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS, [_form_material_selection_material_selection_component__WEBPACK_IMPORTED_MODULE_18__["MaterialSelectionComponent"]]),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_9__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_10__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__["AppCommonSharedModule"],
                _procurement_request_procurement_request_module__WEBPACK_IMPORTED_MODULE_17__["ProcurementRequestModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_16__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], TransferOrderModule);
    return TransferOrderModule;
}());



/***/ })

}]);
//# sourceMappingURL=logistics-transfer-order-transfer-order-module.js.map