(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administration-settings-settings-module"],{

/***/ "./node_modules/primeng/components/inputtextarea/inputtextarea.js":
/*!************************************************************************!*\
  !*** ./node_modules/primeng/components/inputtextarea/inputtextarea.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var InputTextarea = /** @class */ (function () {
    function InputTextarea(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
        this.onResize = new core_1.EventEmitter();
    }
    InputTextarea.prototype.ngDoCheck = function () {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize();
        }
    };
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    InputTextarea.prototype.onInput = function (e) {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize(e);
        }
    };
    InputTextarea.prototype.updateFilledState = function () {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) || (this.ngModel && this.ngModel.model);
    };
    InputTextarea.prototype.onFocus = function (e) {
        if (this.autoResize) {
            this.resize(e);
        }
    };
    InputTextarea.prototype.onBlur = function (e) {
        if (this.autoResize) {
            this.resize(e);
        }
    };
    InputTextarea.prototype.resize = function (event) {
        this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
        if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
            this.el.nativeElement.style.overflowY = "scroll";
            this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
        }
        else {
            this.el.nativeElement.style.overflow = "hidden";
        }
        this.onResize.emit(event || {});
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InputTextarea.prototype, "autoResize", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], InputTextarea.prototype, "onResize", void 0);
    __decorate([
        core_1.HostListener('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputTextarea.prototype, "onInput", null);
    __decorate([
        core_1.HostListener('focus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputTextarea.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputTextarea.prototype, "onBlur", null);
    InputTextarea = __decorate([
        core_1.Directive({
            selector: '[pInputTextarea]',
            host: {
                '[class.ui-inputtext]': 'true',
                '[class.ui-corner-all]': 'true',
                '[class.ui-inputtextarea-resizable]': 'autoResize',
                '[class.ui-state-default]': 'true',
                '[class.ui-widget]': 'true',
                '[class.ui-state-filled]': 'filled'
            }
        }),
        __param(1, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, forms_1.NgModel])
    ], InputTextarea);
    return InputTextarea;
}());
exports.InputTextarea = InputTextarea;
var InputTextareaModule = /** @class */ (function () {
    function InputTextareaModule() {
    }
    InputTextareaModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [InputTextarea],
            declarations: [InputTextarea]
        })
    ], InputTextareaModule);
    return InputTextareaModule;
}());
exports.InputTextareaModule = InputTextareaModule;
//# sourceMappingURL=inputtextarea.js.map

/***/ }),

/***/ "./node_modules/primeng/fileupload.js":
/*!********************************************!*\
  !*** ./node_modules/primeng/fileupload.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/fileupload/fileupload */ "./node_modules/primeng/components/fileupload/fileupload.js"));

/***/ }),

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

/***/ "./src/app/main/administration/settings/form/settings-form.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/main/administration/settings/form/settings-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button *ngIf=\"isReadOpenMode && hasUpdateAccessRight\" type=\"button\" mat-raised-button (click)=\"editSettings()\">\r\n      {{ \"global.edit\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode && !isCreateOpenMode\"\r\n      type=\"button\"\r\n      color=\"warn\"\r\n      mat-raised-button\r\n      (click)=\"cancelSettings()\"\r\n    >\r\n      {{ \"global.cancel\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      class=\"btn-with-spinner\"\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"saveSettings()\"\r\n    >\r\n      <span class=\"lds-hourglass\" *ngIf=\"showSaveSpinner\"></span>\r\n      {{ \"global.save\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"reloadSettings()\">{{ \"global.refresh\" | translate }}</button>\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <mat-tab-group animationDuration=\"0ms\" dynamicHeight>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + \".generalConfiguration\" | translate }}\r\n          </ng-template>\r\n          <div class=\"grid-row\">\r\n            <div class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".generalConfiguration\" | translate }}\r\n                      ({{ propertyValuesTableDataSource ? propertyValuesTableDataSource.dataCount : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <a-table [dataSource]=\"propertyValuesTableDataSource\">\r\n                    <ng-template tableActionsDef>\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && !disablePropertyTypeDeleteButton()\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteSelectedPropertyValue()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"!isReadOpenMode && propertyValuesTableDataSource.hasDataSelection\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"addPropertyValue()\"\r\n                      >\r\n                        {{ \"global.add\" | translate }}\r\n                      </button>\r\n                    </ng-template>\r\n\r\n                    <ng-template columnDef=\"isStandard\" let-rowData=\"rowData\">\r\n                      <i *ngIf=\"rowData.isStandard\" class=\"fa fa-fw fa-check\" aria-hidden=\"true\"></i>\r\n                    </ng-template>\r\n\r\n                    <ng-template columnDef=\"propertiesValue\" let-rowData=\"rowData\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"aw-input\"\r\n                        [(ngModel)]=\"rowData.propertiesValue\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                      />\r\n                    </ng-template>\r\n\r\n                    <ng-template columnDef=\"propertiesKey\" let-rowData=\"rowData\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"aw-input\"\r\n                        [(ngModel)]=\"rowData.propertiesKey\"\r\n                        [disabled]=\"rowData['propertiesValueId']\"\r\n                        maxlength=\"100\"\r\n                      />\r\n                    </ng-template>\r\n                  </a-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + \".inspectorWorkbench\" | translate }}\r\n          </ng-template>\r\n          <div class=\"grid-row\" [ngStyle]=\"{ display: iwListArr.length > 0 ? '' : 'none' }\">\r\n            <div\r\n              *ngFor=\"let item of iwListArr; let i = index\"\r\n              [ngClass]=\"i < 1 ? 'grid-cell--7' : i < 2 ? 'grid-cell--5' : i < 3 ? 'grid-cell--3' : 'grid-cell--9'\"\r\n            >\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ item.sectionTitle | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- DISPLAY CUSTOMIZING PANEL -->\r\n                <div *ngIf=\"i == 0\" class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div *ngFor=\"let element of item.sectionRowData\" class=\"row\">\r\n                        <div class=\"grid-cell--4\" *ngFor=\"let obj of element\" [ngSwitch]=\"obj.customValueList\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ obj.name }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <span *ngSwitchCase=\"undefined\" class=\"display--flex-row\">\r\n                                <input\r\n                                  type=\"text\"\r\n                                  class=\"aw-input\"\r\n                                  [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                  [disabled]=\"isReadOpenMode\"\r\n                                />\r\n                                <span style=\"width:140px; padding: 8px 0;\"\r\n                                  >{{ obj.bsdeAwCustomDTO.propertyDefaultValue }} (default)</span\r\n                                >\r\n                              </span>\r\n                              <p-dropdown\r\n                                *ngSwitchDefault\r\n                                class=\"aw-dropdown fixed-width\"\r\n                                [options]=\"obj.customValueList\"\r\n                                [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                appendTo=\"body\"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- PROJECT CUSTOMIZING PANEL -->\r\n                <div *ngIf=\"i == 1\" class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\" *ngFor=\"let element of item.sectionRowData\">\r\n                        <div class=\"grid-cell--6\" *ngFor=\"let obj of element\" [ngSwitch]=\"obj.customValueList\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ obj.name }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <span *ngSwitchCase=\"undefined\" class=\"display--flex-row\">\r\n                                <input\r\n                                  type=\"text\"\r\n                                  class=\"aw-input\"\r\n                                  [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                  [disabled]=\"isReadOpenMode\"\r\n                                />\r\n                                <span style=\"width:140px; padding: 8px 0;\"\r\n                                  >{{ obj.bsdeAwCustomDTO.propertyDefaultValue }} (default)</span\r\n                                >\r\n                              </span>\r\n                              <p-dropdown\r\n                                *ngSwitchDefault\r\n                                class=\"aw-dropdown fixed-width\"\r\n                                [options]=\"obj.customValueList\"\r\n                                [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                appendTo=\"body\"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- WORKSCOPE CUSTOMIZING PANEL -->\r\n                <div *ngIf=\"i == 2\" class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div *ngFor=\"let element of item.sectionRowData\" class=\"section-content\">\r\n                      <div class=\"row\">\r\n                        <div class=\"grid-cell--12\" *ngFor=\"let obj of element\" [ngSwitch]=\"obj.customValueList\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ obj.name }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <span *ngSwitchCase=\"undefined\" class=\"display--flex-row\">\r\n                                <input\r\n                                  type=\"text\"\r\n                                  class=\"aw-input\"\r\n                                  [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                  [disabled]=\"isReadOpenMode\"\r\n                                />\r\n                                <span style=\"width:140px; padding: 8px 0;\"\r\n                                  >{{ obj.bsdeAwCustomDTO.propertyDefaultValue }} (default)</span\r\n                                >\r\n                              </span>\r\n                              <p-dropdown\r\n                                *ngSwitchDefault\r\n                                class=\"aw-dropdown fixed-width\"\r\n                                [options]=\"obj.customValueList\"\r\n                                [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                appendTo=\"body\"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- INVENTORY CUSTOMIZING PANEL -->\r\n                <div *ngIf=\"i == 3\" class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\" *ngFor=\"let element of item.sectionRowData\">\r\n                        <div class=\"grid-cell--3\" *ngFor=\"let obj of element\" [ngSwitch]=\"obj.customValueList\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ obj.name }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <span *ngSwitchCase=\"undefined\" class=\"display--flex-row\">\r\n                                <input\r\n                                  type=\"text\"\r\n                                  class=\"aw-input\"\r\n                                  [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                  [disabled]=\"isReadOpenMode\"\r\n                                />\r\n                                <span style=\"width:140px; padding: 8px 0;\"\r\n                                  >{{ obj.bsdeAwCustomDTO.propertyDefaultValue }} (default)</span\r\n                                >\r\n                              </span>\r\n                              <p-dropdown\r\n                                *ngSwitchDefault\r\n                                class=\"aw-dropdown fixed-width\"\r\n                                [options]=\"obj.customValueList\"\r\n                                [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                appendTo=\"body\"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + \".engineeringManagement\" | translate }}\r\n          </ng-template>\r\n          <div\r\n            class=\"grid-row\"\r\n            *ngFor=\"let item of emListArr\"\r\n            [ngStyle]=\"{ display: emListArr.length > 0 ? '' : 'none' }\"\r\n          >\r\n            <div class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ item.sectionTitle | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\" *ngFor=\"let element of item.sectionRowData\">\r\n                        <div class=\"grid-cell--3\" *ngFor=\"let obj of element\" [ngSwitch]=\"obj.customValueList\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ obj.name }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <span *ngSwitchCase=\"undefined\" class=\"display--flex-row\">\r\n                                <input\r\n                                  type=\"text\"\r\n                                  class=\"aw-input\"\r\n                                  [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                  [disabled]=\"isReadOpenMode\"\r\n                                />\r\n                                <span style=\"width:140px; padding: 8px 0;\"\r\n                                  >{{ obj.bsdeAwCustomDTO.propertyDefaultValue }} (default)</span\r\n                                >\r\n                              </span>\r\n                              <p-dropdown\r\n                                *ngSwitchDefault\r\n                                class=\"aw-dropdown fixed-width\"\r\n                                [options]=\"obj.customValueList\"\r\n                                [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                appendTo=\"body\"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + \".fleetManagement\" | translate }}\r\n          </ng-template>\r\n          <div class=\"grid-row\" [ngStyle]=\"{ display: fmListArr.length > 0 ? '' : 'none' }\">\r\n            <div class=\"grid-cell--6\" *ngFor=\"let item of fmListArr\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ item.sectionTitle | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\" *ngFor=\"let element of item.sectionRowData\">\r\n                        <div class=\"grid-cell--3\" *ngFor=\"let obj of element\" [ngSwitch]=\"obj.customValueList\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ obj.name }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <span *ngSwitchCase=\"undefined\" class=\"display--flex-row\">\r\n                                <input\r\n                                  type=\"text\"\r\n                                  class=\"aw-input\"\r\n                                  [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                  [disabled]=\"isReadOpenMode\"\r\n                                />\r\n                                <span style=\"width:140px; padding: 8px 0;\"\r\n                                  >{{ obj.bsdeAwCustomDTO.propertyDefaultValue }} (default)</span\r\n                                >\r\n                              </span>\r\n                              <p-dropdown\r\n                                *ngSwitchDefault\r\n                                class=\"aw-dropdown fixed-width\"\r\n                                [options]=\"obj.customValueList\"\r\n                                [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                appendTo=\"body\"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + \".maintenanceOperations\" | translate }}\r\n          </ng-template>\r\n          <div\r\n            class=\"grid-row\"\r\n            *ngFor=\"let item of meListArr\"\r\n            [ngStyle]=\"{ display: meListArr.length > 0 ? '' : 'none' }\"\r\n          >\r\n            <div class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ item.sectionTitle | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\">\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\" *ngFor=\"let element of item.sectionRowData\">\r\n                        <div class=\"grid-cell--3\" *ngFor=\"let obj of element\" [ngSwitch]=\"obj.customValueList\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ obj.name }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <span *ngSwitchCase=\"undefined\" class=\"display--flex-row\">\r\n                                <input\r\n                                  type=\"text\"\r\n                                  class=\"aw-input\"\r\n                                  [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                  [disabled]=\"isReadOpenMode\"\r\n                                />\r\n                                <span style=\"width:140px; padding: 8px 0;\"\r\n                                  >{{ obj.bsdeAwCustomDTO.propertyDefaultValue }} (default)</span\r\n                                >\r\n                              </span>\r\n                              <p-dropdown\r\n                                *ngSwitchDefault\r\n                                class=\"aw-dropdown fixed-width\"\r\n                                [options]=\"obj.customValueList\"\r\n                                [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                appendTo=\"body\"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"grid-row\" [ngStyle]=\"{ display: ipListArr.length > 0 ? '' : 'none' }\">\r\n            <div class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".installationParameters\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <div class=\"section\" *ngFor=\"let item of ipListArr\">\r\n                    <h4 class=\"section-title\">\r\n                      {{ item.sectionTitle }}\r\n                    </h4>\r\n\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\" *ngFor=\"let element of item.sectionRowData\">\r\n                        <div class=\"grid-cell--3\" *ngFor=\"let obj of element\" [ngSwitch]=\"obj.customValueList\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">\r\n                              {{ obj.name }}\r\n                            </label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <span *ngSwitchCase=\"undefined\" class=\"display--flex-row\">\r\n                                <input\r\n                                  type=\"text\"\r\n                                  class=\"aw-input\"\r\n                                  [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                  [disabled]=\"isReadOpenMode\"\r\n                                />\r\n                                <span style=\"width:140px; padding: 8px 0;\"\r\n                                  >{{ obj.bsdeAwCustomDTO.propertyDefaultValue }} (default)</span\r\n                                >\r\n                              </span>\r\n                              <p-dropdown\r\n                                *ngSwitchDefault\r\n                                class=\"aw-dropdown fixed-width\"\r\n                                [options]=\"obj.customValueList\"\r\n                                [(ngModel)]=\"obj.bsdeAwCustomDTO.propertyCustomValue\"\r\n                                [disabled]=\"isReadOpenMode\"\r\n                                appendTo=\"body\"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/administration/settings/form/settings-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/administration/settings/form/settings-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: SettingsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsFormComponent", function() { return SettingsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _settings_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings-form.service */ "./src/app/main/administration/settings/form/settings-form.service.ts");
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














var SettingsFormComponent = /** @class */ (function (_super) {
    __extends(SettingsFormComponent, _super);
    function SettingsFormComponent(favoriteService, loaderService, messageService, pageTocService, serializationService, tabService, translateService, settingsFormService, confirmationService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Read, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.translateService = translateService;
        _this.settingsFormService = settingsFormService;
        _this.confirmationService = confirmationService;
        _this.component = SettingsFormComponent_1;
        _this.customizePropertyList = [];
        _this.iwList = [];
        _this.emList = [];
        _this.fmList = [];
        _this.meList = [];
        _this.ipList = [];
        _this.iwListArr = [];
        _this.emListArr = [];
        _this.fmListArr = [];
        _this.meListArr = [];
        _this.ipListArr = [];
        _super.prototype.registerPageTocEntryObservable.call(_this);
        _this.initPropertyValuesTableDataSource();
        return _this;
    }
    SettingsFormComponent_1 = SettingsFormComponent;
    SettingsFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].ADM_SETTINGS_FORM;
    };
    SettingsFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Read);
        this.loadSettings();
    };
    SettingsFormComponent.prototype.cancelSettings = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Read);
        this.loadSettings();
    };
    SettingsFormComponent.prototype.editSettings = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Write);
    };
    SettingsFormComponent.prototype.reloadSettings = function () {
        this.loadSettings();
    };
    SettingsFormComponent.prototype.loadSettings = function () {
        var _this = this;
        this.propertyValuesTableDataSource.setData([]);
        // get aerweb config properties
        var bidoPropertiesDTO = {
            propertiesId: SettingsFormComponent_1.AEROWEB_CONFIG_PROPERTY_ID,
            propertiesName: 'aerowebb_configuration',
            propertiesType: 'TECHNICAL',
            isInternationalized: false
        };
        this.settingsFormService.findBidoPropertyValuesByPropertyId(bidoPropertiesDTO).subscribe(function (result) {
            if (!!result) {
                _this.propertyValuesTableDataSource.addData(result);
            }
        });
        // Get customizing data
        this.settingsFormService.getCustomizationData().subscribe(function (result) {
            if (!!result) {
                _this.customizePropertyList = result;
                _this.customizePropertyList.forEach(function (obj) {
                    obj.data.forEach(function (obj1) {
                        if (obj1.customValueList && obj1.bsdeAwCustomDTO.propertyDefaultValue) {
                            var matchFound_1 = 0;
                            obj1.customValueList.forEach(function (val) {
                                if (val.value === obj1.bsdeAwCustomDTO.propertyDefaultValue) {
                                    val.label = val.label + " (default)";
                                    matchFound_1++;
                                }
                            });
                            if (!matchFound_1) {
                                var listOption = {
                                    label: obj1.bsdeAwCustomDTO.propertyDefaultValue + " (default)",
                                    value: obj1.bsdeAwCustomDTO.propertyDefaultValue
                                };
                                obj1.customValueList.push(listOption);
                            }
                        }
                    });
                });
                _this.iwList = [];
                _this.emList = [];
                _this.fmList = [];
                _this.meList = [];
                _this.ipList = [];
                _this.iwListArr = [];
                _this.emListArr = [];
                _this.fmListArr = [];
                _this.meListArr = [];
                _this.ipListArr = [];
                _this.iwList = result.filter(function (obj) {
                    return obj.groupTitle === 'iw';
                });
                _this.makeRowsFromList(_this.iwList, _this.iwListArr);
                _this.emList = result.filter(function (obj) {
                    return obj.groupTitle === 'em';
                });
                _this.makeRowsFromList(_this.emList, _this.emListArr);
                _this.fmList = result.filter(function (obj) {
                    return obj.groupTitle === 'fm';
                });
                _this.makeRowsFromList(_this.fmList, _this.fmListArr);
                _this.meList = result.filter(function (obj) {
                    return obj.groupTitle === 'me';
                });
                _this.makeRowsFromList(_this.meList, _this.meListArr);
                _this.ipList = result.filter(function (obj) {
                    return obj.groupTitle === 'ip';
                });
                _this.makeRowsFromList(_this.ipList, _this.ipListArr);
                _this.setTableOfContent();
            }
        });
    };
    SettingsFormComponent.prototype.makeRowsFromList = function (list, resultArr) {
        for (var k = 0; k < list.length; k++) {
            var sectionRowObj = {
                sectionTitle: list[k].title,
                sectionRowData: []
            };
            var rowArr = [];
            for (var i = 0; i < list[k].data.length; i++) {
                if (list[k].data[i]) {
                    rowArr.push(list[k].data[i]);
                }
            }
            sectionRowObj.sectionRowData.push(rowArr);
            resultArr.push(sectionRowObj);
        }
    };
    SettingsFormComponent.prototype.initPropertyValuesTableDataSource = function () {
        this.propertyValuesTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'propertiesKey',
                    translateKey: this.getTranslateKey('propertiesKey'),
                    width: '35%'
                },
                {
                    field: 'isStandard',
                    translateKey: this.getTranslateKey('isStandard'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["ColumnAlignment"].CENTER,
                    width: '10%'
                },
                {
                    field: 'propertiesValue',
                    translateKey: this.getTranslateKey('propertiesValue'),
                    width: '55%'
                }
            ],
            data: []
        });
    };
    SettingsFormComponent.prototype.saveSettings = function () {
        var _this = this;
        var bsdeAwCustomDTOs = [];
        var propertyTableDtos = [];
        this.customizePropertyList.forEach(function (obj) {
            if (obj.data) {
                obj.data.forEach(function (customDto) {
                    bsdeAwCustomDTOs.push(customDto.bsdeAwCustomDTO);
                });
            }
        });
        this.propertyValuesTableDataSource.dataSrc.forEach(function (obj) {
            if (obj.propertiesKey !== null && obj.propertiesKey !== undefined) {
                propertyTableDtos.push(obj);
            }
        });
        var saveSettingInput = {
            bidoPropertiesValueDTO: propertyTableDtos,
            bsdeAwCustomDTO: bsdeAwCustomDTOs
        };
        this.showSaveSpinner = true;
        this.settingsFormService.updateSettings(saveSettingInput).subscribe(function () {
            _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnUpdateSettings'));
            _this.loadSettings();
            _this.showSaveSpinner = false;
        }, function (error) {
            _this.showSaveSpinner = false;
        });
    };
    /**************************************************************************
     * Table Of Content
     *************************************************************************/
    SettingsFormComponent.prototype.setTableOfContent = function () {
        var _this = this;
        var generalConfigurationKey = this.getTranslateKey('generalConfiguration');
        var inspectorWorkBenchKey = this.getTranslateKey('inspectorWorkbench');
        var engineeringDataKey = this.getTranslateKey('engineeringManagement');
        var fleetManagementKey = this.getTranslateKey('fleetManagement');
        var maintenanceOperationsKey = this.getTranslateKey('maintenanceOperations');
        var installationParametersKey = this.getTranslateKey('installationParameters');
        this.translateService
            .get([
            generalConfigurationKey,
            inspectorWorkBenchKey,
            engineeringDataKey,
            fleetManagementKey,
            maintenanceOperationsKey,
            installationParametersKey
        ])
            .subscribe(function (results) {
            var generalConfigurationLabel = !!results ? results[generalConfigurationKey] : 'General Configuration';
            var inspectorWorkBenchLabel = !!results ? results[inspectorWorkBenchKey] : 'Inspector Work Bench';
            var engineeringDataLabel = !!results ? results[engineeringDataKey] : 'Engineering Data';
            var fleetManagementLabel = !!results ? results[fleetManagementKey] : 'Fleet Management';
            var maintenanceOperationsLabel = !!results ? results[maintenanceOperationsKey] : 'Maintenance Operations';
            var installationParametersLabel = !!results ? results[installationParametersKey] : 'Installation Parameters';
            _this.toc = [
                {
                    id: 'generalConfigurationAnchor',
                    anchor: _this.generalConfigurationEltRef,
                    label: generalConfigurationLabel
                },
                {
                    id: 'inspectorWorkBenchAnchor',
                    anchor: _this.inspectorWorkBenchEltRef,
                    label: inspectorWorkBenchLabel
                },
                {
                    id: 'engineeringDataAnchor',
                    anchor: _this.engineeringDataEltRef,
                    label: engineeringDataLabel
                },
                {
                    id: 'fleetManagementAnchor',
                    anchor: _this.fleetManagementEltRef,
                    label: fleetManagementLabel
                },
                {
                    id: 'maintenanceOperationsAnchor',
                    anchor: _this.maintenanceOperationsEltRef,
                    label: maintenanceOperationsLabel
                }
            ];
            if (_this.ipList && _this.ipList.length > 0) {
                _this.toc.push({
                    id: 'installationParametersAnchor',
                    anchor: _this.installationParametersEltRef,
                    label: installationParametersLabel
                });
            }
        });
    };
    SettingsFormComponent.prototype.addPropertyValue = function () {
        var bidoPropertiesValueDTO = {
            isStandard: false,
            propertiesKey: undefined,
            propertiesValue: undefined,
            propertiesId: SettingsFormComponent_1.AEROWEB_CONFIG_PROPERTY_ID
        };
        this.propertyValuesTableDataSource.addData([bidoPropertiesValueDTO]);
    };
    SettingsFormComponent.prototype.deleteSelectedPropertyValue = function () {
        var _this = this;
        var partialMessageKey = 'global.deleteConfirmationMsg';
        this.confirmationService.confirmDelete({
            messageKey: partialMessageKey,
            accept: function () {
                _this.propertyValuesTableDataSource.deleteDataSelection();
            }
        });
    };
    SettingsFormComponent.prototype.disablePropertyTypeDeleteButton = function () {
        var result;
        if (this.propertyValuesTableDataSource.dataSelectionCount === 0) {
            result = true;
        }
        else {
            var properties = this.propertyValuesTableDataSource.dataSelection.filter(function (value) { return value.isStandard; });
            result = properties.length === 0 ? false : true;
        }
        return result;
    };
    var SettingsFormComponent_1;
    SettingsFormComponent.GENERAL_CONFIGURATION_ANCHOR_ID = 'generalConfigurationAnchor';
    SettingsFormComponent.INSPECTOR_WORKBENCH_ANCHOR_ID = 'inspectorWorkBenchAnchor';
    SettingsFormComponent.ENGINEERING_DATA_ANCHOR_ID = 'engineeringDataAnchor';
    SettingsFormComponent.FLEET_MANAGEMENT_ANCHOR_ID = 'fleetManagementAnchor';
    SettingsFormComponent.MAINTENANCE_OPERATIONS_ANCHOR_ID = 'maintenanceOperationsAnchor';
    SettingsFormComponent.INSTALLATION_PARAMETERS_ANCHOR_ID = 'installationParametersAnchor';
    SettingsFormComponent.AEROWEB_CONFIG_PROPERTY_ID = '1';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(SettingsFormComponent_1.GENERAL_CONFIGURATION_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SettingsFormComponent.prototype, "generalConfigurationEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(SettingsFormComponent_1.INSPECTOR_WORKBENCH_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SettingsFormComponent.prototype, "inspectorWorkBenchEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(SettingsFormComponent_1.ENGINEERING_DATA_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SettingsFormComponent.prototype, "engineeringDataEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(SettingsFormComponent_1.FLEET_MANAGEMENT_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SettingsFormComponent.prototype, "fleetManagementEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(SettingsFormComponent_1.MAINTENANCE_OPERATIONS_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SettingsFormComponent.prototype, "maintenanceOperationsEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(SettingsFormComponent_1.INSTALLATION_PARAMETERS_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SettingsFormComponent.prototype, "installationParametersEltRef", void 0);
    SettingsFormComponent = SettingsFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-settings-form',
            template: __webpack_require__(/*! ./settings-form.component.html */ "./src/app/main/administration/settings/form/settings-form.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_2__["PageTocService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__["TabService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _settings_form_service__WEBPACK_IMPORTED_MODULE_13__["SettingsFormService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]])
    ], SettingsFormComponent);
    return SettingsFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_12__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/administration/settings/settings.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/administration/settings/settings.module.ts ***!
  \*****************************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ "./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts");
/* harmony import */ var _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/dialog-status/dialog-status.module */ "./src/app/shared/components/dialog-status/dialog-status.module.ts");
/* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/dialog-table/dialog-table.module */ "./src/app/shared/components/dialog-table/dialog-table.module.ts");
/* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ "./src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_settings_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form/settings-form.component */ "./src/app/main/administration/settings/form/settings-form.component.ts");
/* harmony import */ var _form_settings_form_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./form/settings-form.service */ "./src/app/main/administration/settings/form/settings-form.service.ts");
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
    primeng_fileupload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"],
    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__["InputTextareaModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"]
];
var INTERNAL_MODULES = [
    _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_11__["ComponentSidebarModule"],
    _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_13__["DialogTableModule"],
    _shared_components_dialog_status_dialog_status_module__WEBPACK_IMPORTED_MODULE_12__["DialogStatusModule"],
    _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_14__["DynamicAttributesModule"],
    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_16__["ModalModule"],
    _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_17__["TableModule"]
];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [_form_settings_form_component__WEBPACK_IMPORTED_MODULE_19__["SettingsFormComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_settings_form_service__WEBPACK_IMPORTED_MODULE_20__["SettingsFormService"]];
var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS),
                _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_15__["ManageSearchCriteriaModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-status/dialog-status.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/dialog-status/dialog-status.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".statusState\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          [options]=\"statusList\"\r\n          [(ngModel)]=\"item.statusState\"\r\n          [showClear]=\"true\"\r\n          placeholder=\"&nbsp;\"\r\n          [disabled]=\"!isStatusEditable\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".statusDate\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-calendar\r\n          showButtonBar=\"true\"\r\n          [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\"\r\n          [yearRange]=\"sessionService.calendarYearRange\"\r\n          class=\"aw-calendar\"\r\n          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n          [locale]=\"sessionService.calendarFormat\"\r\n          [(ngModel)]=\"item.statusDate\"\r\n          [disabled]=\"true\"\r\n          [showTime]=\"true\"\r\n          appendTo=\"body\"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".statusUser\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"item.statusUser\" [disabled]=\"true\" />\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">{{ \"global.close\" | translate }}</button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-status/dialog-status.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/dialog-status/dialog-status.component.ts ***!
  \****************************************************************************/
/*! exports provided: DialogStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogStatusComponent", function() { return DialogStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/session.service */ "./src/app/shared/services/session.service.ts");
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






var DialogStatusComponent = /** @class */ (function (_super) {
    __extends(DialogStatusComponent, _super);
    function DialogStatusComponent(sessionService, propertiesService, messageService) {
        var _this = _super.call(this, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'DialogStatusComponent') || this;
        _this.sessionService = sessionService;
        _this.propertiesService = propertiesService;
        _this.messageService = messageService;
        return _this;
    }
    DialogStatusComponent.prototype.ngOnInit = function () {
        this.loadStatusList();
    };
    DialogStatusComponent.prototype.close = function () {
        this.display = false;
    };
    DialogStatusComponent.prototype.loadStatusList = function () {
        var _this = this;
        var statusState = 'statusState';
        this.propertiesService
            .getObjectStatusList(this.isObjectTypeOfBireSbDTO, this.isObjectTypeOfBireEvolutionDTO, this.isObjectTypeOfBireMaintenancePlanDTO, this.item[statusState], this.isSapSession)
            .subscribe(function (result) {
            _this.statusList = result;
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadStatusList'));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogStatusComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogStatusComponent.prototype, "itemId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isStatusEditable'),
        __metadata("design:type", Boolean)
    ], DialogStatusComponent.prototype, "isStatusEditable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isObjectTypeOfBireSbDTO'),
        __metadata("design:type", Boolean)
    ], DialogStatusComponent.prototype, "isObjectTypeOfBireSbDTO", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isObjectTypeOfBireEvolutionDTO'),
        __metadata("design:type", Boolean)
    ], DialogStatusComponent.prototype, "isObjectTypeOfBireEvolutionDTO", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isObjectTypeOfBireMaintenancePlanDTO'),
        __metadata("design:type", Boolean)
    ], DialogStatusComponent.prototype, "isObjectTypeOfBireMaintenancePlanDTO", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isSapSession'),
        __metadata("design:type", Boolean)
    ], DialogStatusComponent.prototype, "isSapSession", void 0);
    DialogStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-status',
            template: __webpack_require__(/*! ./dialog-status.component.html */ "./src/app/shared/components/dialog-status/dialog-status.component.html")
        }),
        __metadata("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _services_properties_service__WEBPACK_IMPORTED_MODULE_4__["PropertiesService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], DialogStatusComponent);
    return DialogStatusComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/components/dialog-status/dialog-status.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/dialog-status/dialog-status.module.ts ***!
  \*************************************************************************/
/*! exports provided: DialogStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogStatusModule", function() { return DialogStatusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dialog_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-status.component */ "./src/app/shared/components/dialog-status/dialog-status.component.ts");
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
var EXTERNAL_MODULES = [primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_2__["DropdownModule"]];
var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_dialog_status_component__WEBPACK_IMPORTED_MODULE_7__["DialogStatusComponent"]];
var DialogStatusModule = /** @class */ (function () {
    function DialogStatusModule() {
    }
    DialogStatusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS),
            exports: __spread(COMPONENTS),
            imports: __spread([
                _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__["AngularCommonSharedModule"],
                _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__["AngularGenericTemplatesSharedModule"],
                _app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonSharedModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES)
        })
    ], DialogStatusModule);
    return DialogStatusModule;
}());



/***/ })

}]);
//# sourceMappingURL=administration-settings-settings-module.js.map