(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-material-material-module"],{

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

/***/ "./node_modules/primeng/radiobutton.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/radiobutton.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/radiobutton/radiobutton */ "./node_modules/primeng/components/radiobutton/radiobutton.js"));

/***/ }),

/***/ "./src/app/main/logistics/material/form/material-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/material-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #page *ngIf=\"loadedWorkflow\">\r\n  <div class=\"page-header\">\r\n    <div class=\"page-info\">\r\n      <div>\r\n        <h2 class=\"page-title\">\r\n          {{ \"transaction.\" + componentData.componentId | translate }}\r\n        </h2>\r\n\r\n        <div class=\"page-subtitle\">\r\n          <div *ngIf=\"componentData && componentData.objectId\" class=\"page-subtitle\">\r\n            - {{ serializationService.deserialize(componentData.objectId)[\"pnCode\"] }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"object-status\" *ngIf=\"materialFieldData.statusState\" (click)=\"showStatus()\">\r\n          {{ materialFieldData.statusState | formatSelectOption: workflowStatus }}\r\n        </div>\r\n        <div class=\"object-is-incomplete\" *ngIf=\"materialFieldData.incompletePartForSupply && !isCreateOpenMode\">\r\n          {{ componentData.componentId + \".materialIsIncomplete\" | translate }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-actions\">\r\n      <button\r\n        id=\"edit\"\r\n        *ngIf=\"isReadOpenMode && hasUpdateAccessRight\"\r\n        type=\"button\"\r\n        mat-raised-button\r\n        (click)=\"editMaterial()\"\r\n      >\r\n        {{ \"global.edit\" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        *ngIf=\"!isReadOpenMode && !isCreateOpenMode\"\r\n        type=\"button\"\r\n        color=\"warn\"\r\n        mat-raised-button\r\n        (click)=\"cancelMaterial()\"\r\n      >\r\n        {{ \"global.cancel\" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        id=\"save\"\r\n        *ngIf=\"!isReadOpenMode\"\r\n        class=\"btn-with-spinner\"\r\n        color=\"primary\"\r\n        type=\"button\"\r\n        mat-raised-button\r\n        (click)=\"saveMaterial()\"\r\n      >\r\n        <span class=\"lds-hourglass\" *ngIf=\"showSaveSpinner\"></span>\r\n        {{ \"global.save\" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        mat-icon-button\r\n        class=\"mat-elevation-z1\"\r\n        matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n        matTooltipPosition=\"above\"\r\n        aria-label=\"Show all actions\"\r\n        [matMenuTriggerFor]=\"actions\"\r\n      >\r\n        <mat-icon>more_horiz</mat-icon>\r\n      </button>\r\n      <mat-menu #actions=\"matMenu\">\r\n        <button mat-menu-item (click)=\"showCreateProcurementDialog()\" *ngIf=\"isReadOpenMode && !isCreateOpenMode\">\r\n          {{ \"createProcurementRequest\" | translate }}\r\n        </button>\r\n        <button mat-menu-item [matMenuTriggerFor]=\"navigations\">\r\n          {{ \"global.goTo\" | translate }}\r\n        </button>\r\n        <button mat-menu-item (click)=\"reloadMaterial()\">{{ \"global.refresh\" | translate }}</button>\r\n        <button mat-menu-item (click)=\"openStatusUpdatesPopup()\">{{ \"updates\" | translate }}</button>\r\n        <button mat-menu-item (click)=\"updateFavoriteState()\">{{ \"addToFavorite\" | translate }}</button>\r\n      </mat-menu>\r\n      <mat-menu #navigations=\"matMenu\">\r\n        <button *ngIf=\"!isCreateOpenMode\" type=\"button\" mat-menu-item (click)=\"navigationLinkList[0].command()\">\r\n          {{ navigationLinkList[0].label | translate }}\r\n        </button>\r\n      </mat-menu>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-wrapper\">\r\n    <div class=\"page-container\">\r\n      <mat-tab-group animationDuration=\"0ms\" dynamicHeight>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ \"home\" | translate }}\r\n          </ng-template>\r\n\r\n          <div class=\"grid-row\">\r\n            <div id=\"main\" #mainAnchor class=\"grid-cell--5\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ \"page.mainData\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"column\">\r\n                    <div class=\"row\">\r\n                      <div id=\"pnCode\" class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".code\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input\"\r\n                            maxlength=\"25\"\r\n                            [(ngModel)]=\"materialFieldData.pnCode\"\r\n                            [disabled]=\"isReadOpenMode || !isCreateOpenMode\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div id=\"articleDesignation\" class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".name\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input\"\r\n                            maxlength=\"100\"\r\n                            [(ngModel)]=\"materialFieldData.articleDesignation\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div id=\"pnType\" class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".materialType\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [options]=\"materialType\"\r\n                            [(ngModel)]=\"materialFieldData.pnType\"\r\n                            (onChange)=\"enableEngieeringView()\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div id=\"quantityUnit\" class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".quantityUnit\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [options]=\"quantityUnit\"\r\n                            [(ngModel)]=\"materialFieldData.quantityUnit\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div id=\"traceability\" class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".traceability\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [options]=\"traceability\"\r\n                            [(ngModel)]=\"materialFieldData.traceability\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div id=\"storageConditionValue\" class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".storageCondition\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [options]=\"storageCondition\"\r\n                            [(ngModel)]=\"storageConditionValue\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div id=\"otanPnReference\" class=\"form-group\">\r\n                        <label class=\"form-label\">{{\r\n                          componentData.componentId + \".otanPnReference\" | translate\r\n                        }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input\"\r\n                            [(ngModel)]=\"materialFieldData.otanPnReference\"\r\n                            maxlength=\"20\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ componentData.componentId + \".sparePartClass\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [showClear]=\"true\"\r\n                            [(ngModel)]=\"materialFieldData.sparePartClassCode\"\r\n                            [options]=\"sparePartClassOptions\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell--7 grid-cell--no-padding\">\r\n              <div class=\"grid-row\">\r\n                <div class=\"grid-cell--12\">\r\n                  <div class=\"grid-cell grid-cell--container\">\r\n                    <div class=\"grid-cell-header\">\r\n                      <div class=\"grid-cell-title-container\">\r\n                        <h3 id=\"alternativeTableTitle\" class=\"grid-cell-title\">\r\n                          {{ componentData.componentId + \".expiration\" | translate }}\r\n                        </h3>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                      <div class=\"row\">\r\n                        <div id=\"expirationDuration\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ componentData.componentId + \".duration\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              #expirationDuration=\"ngModel\"\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [pKeyFilter]=\"inputValidationService.validatorOfNumber()\"\r\n                              [pValidateOnly]=\"true\"\r\n                              maxlength=\"50\"\r\n                              [(ngModel)]=\"materialFieldData.expirationDuration\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            />\r\n                            <p-message\r\n                              *ngIf=\"\r\n                                expirationDuration.invalid && (expirationDuration.dirty || expirationDuration.touched)\r\n                              \"\r\n                              severity=\"error\"\r\n                              [text]=\"inputValidationService.formatOfNumber()\"\r\n                            ></p-message>\r\n                          </div>\r\n                        </div>\r\n                        <div id=\"expirationUnit\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ componentData.componentId + \".unit\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <p-dropdown\r\n                              class=\"aw-dropdown fixed-width\"\r\n                              [showClear]=\"true\"\r\n                              placeholder=\"&nbsp;\"\r\n                              [options]=\"expirationUnit\"\r\n                              [(ngModel)]=\"materialFieldData.expirationUnit\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                              appendTo=\"body\"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                        <div id=\"expirationThreshold\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ componentData.componentId + \".alertThreshold\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input\r\n                              #expirationThreshold=\"ngModel\"\r\n                              type=\"text\"\r\n                              class=\"aw-input\"\r\n                              [pKeyFilter]=\"inputValidationService.validatorOfNumber()\"\r\n                              [pValidateOnly]=\"true\"\r\n                              maxlength=\"50\"\r\n                              [(ngModel)]=\"materialFieldData.expirationThreshold\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                            />\r\n                            <p-message\r\n                              *ngIf=\"\r\n                                expirationThreshold.invalid &&\r\n                                (expirationThreshold.dirty || expirationThreshold.touched)\r\n                              \"\r\n                              severity=\"error\"\r\n                              [text]=\"inputValidationService.formatOfNumber()\"\r\n                            ></p-message>\r\n                          </div>\r\n                        </div>\r\n                        <div id=\"expirationThresholdUnit\" class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ componentData.componentId + \".alertThresholdUnit\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <p-dropdown\r\n                              class=\"aw-dropdown fixed-width\"\r\n                              [showClear]=\"true\"\r\n                              placeholder=\"&nbsp;\"\r\n                              [options]=\"expirationThresholdUnit\"\r\n                              [(ngModel)]=\"materialFieldData.expirationThresholdUnit\"\r\n                              [disabled]=\"isReadOpenMode\"\r\n                              appendTo=\"body\"\r\n                            ></p-dropdown>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-row\">\r\n                <div class=\"grid-cell--12\">\r\n                  <div class=\"grid-cell grid-cell--container\">\r\n                    <div class=\"grid-cell-header\">\r\n                      <div class=\"grid-cell-title-container\">\r\n                        <h3 id=\"alternativeTableTitle\" class=\"grid-cell-title\">\r\n                          {{ componentData.componentId + \".alternatives\" | translate }}\r\n                          ({{ alternativeTable ? alternativeTable.length : 0 }})\r\n                        </h3>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                      <p-table\r\n                        id=\"alternativeTable\"\r\n                        [resizableColumns]=\"true\"\r\n                        #ptableAlternative\r\n                        class=\"aw-table2\"\r\n                        [columns]=\"alternativeTableCols\"\r\n                        [value]=\"alternativeTable\"\r\n                        [(selection)]=\"selectedAlternatives\"\r\n                        [scrollable]=\"true\"\r\n                      >\r\n                        <ng-template pTemplate=\"emptymessage\">\r\n                          <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                          <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                            <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                            <div class=\"lds-hourglass\"></div>\r\n                          </div>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate=\"caption\">\r\n                          <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedAlternatives.length > 0 }\">\r\n                            <div class=\"aw-table-global-filter\">\r\n                              <label class=\"aw-table-global-filter-label\">\r\n                                <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                              </label>\r\n\r\n                              <input\r\n                                #ptableAlternativeGlobalFilter\r\n                                class=\"aw-table-global-filter-input\"\r\n                                type=\"text\"\r\n                                placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                                (input)=\"ptableAlternative.filterGlobal($event.target.value, 'contains')\"\r\n                              />\r\n                            </div>\r\n\r\n                            <div class=\"aw-table-actions\">\r\n                              <button\r\n                                id=\"deleteAlternative\"\r\n                                *ngIf=\"!isReadOpenMode && selectedAlternatives.length > 0\"\r\n                                type=\"button\"\r\n                                mat-raised-button\r\n                                color=\"warn\"\r\n                                (click)=\"deleteAlternative()\"\r\n                              >\r\n                                {{ \"global.delete\" | translate }}\r\n                              </button>\r\n\r\n                              <button\r\n                                id=\"editAlternative\"\r\n                                *ngIf=\"!isReadOpenMode && selectedAlternatives.length === 1\"\r\n                                type=\"button\"\r\n                                mat-raised-button\r\n                                (click)=\"editAlternative()\"\r\n                              >\r\n                                {{ \"global.edit\" | translate }}\r\n                              </button>\r\n                              <button\r\n                                id=\"openAlternative\"\r\n                                *ngIf=\"!isReadOpenMode && selectedAlternatives.length === 1\"\r\n                                type=\"button\"\r\n                                mat-raised-button\r\n                                (click)=\"openAlternative()\"\r\n                              >\r\n                                {{ \"global.open\" | translate }}\r\n                              </button>\r\n                              <button\r\n                                id=\"addAlternative\"\r\n                                *ngIf=\"!isReadOpenMode && selectedAlternatives.length === 0\"\r\n                                type=\"button\"\r\n                                mat-raised-button\r\n                                (click)=\"addAlternative()\"\r\n                              >\r\n                                {{ \"global.add\" | translate }}\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate=\"colgroup\" let-columns>\r\n                          <colgroup>\r\n                            <col class=\"aw-table-checkbox-wrapper\" />\r\n                            <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                          </colgroup>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate=\"header\" let-columns>\r\n                          <tr>\r\n                            <th class=\"aw-table-checkbox-wrapper\">\r\n                              <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                            </th>\r\n\r\n                            <th\r\n                              pResizableColumn\r\n                              *ngFor=\"let col of columns\"\r\n                              [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                            >\r\n                              {{ componentData.componentId + \".\" + col.field | translate }}\r\n                              <!-- materialFieldData.pnCode -->\r\n                            </th>\r\n                          </tr>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                          <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                            <td class=\"aw-table-checkbox-wrapper\">\r\n                              <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                            </td>\r\n\r\n                            <td\r\n                              *ngFor=\"let col of columns\"\r\n                              [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                              [ngSwitch]=\"col.field\"\r\n                            >\r\n                              <span *ngSwitchCase=\"'birePnByFkBidtPnBidtPn2BirePnPnCode'\">\r\n                                <div *ngIf=\"rowData[col.field] !== materialFieldData.pnCode\">\r\n                                  {{ rowData[col.field] }}\r\n                                </div>\r\n                                <div *ngIf=\"rowData[col.field] === materialFieldData.pnCode\">\r\n                                  {{ rowData[\"birePnByFkBidtPnBidtPn1BirePnPnCode\"] }}\r\n                                </div>\r\n                              </span>\r\n                              <span *ngSwitchDefault>\r\n                                {{ rowData[col.field] }}\r\n                              </span>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-template>\r\n                      </p-table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ getComponentName() + \".logistics\" | translate }}\r\n          </ng-template>\r\n\r\n          <div class=\"grid-row\">\r\n            <div id=\"warhouse\" #warhouseAnchor class=\"grid-cell--12\" (click)=\"setSelectedAnchor('warhouseAnchor')\">\r\n              <div class=\"grid-cell grid-cell--container\" [ngClass]=\"{ active: isSelectedAnchor('warhouseAnchor') }\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 id=\"warehouseTableTitle\" class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".warehouses\" | translate }}\r\n                      ({{ warehouseTable ? warehouseTable.length : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <p-table\r\n                    id=\"warehouseTable\"\r\n                    [resizableColumns]=\"true\"\r\n                    #ptableWarehouse\r\n                    class=\"aw-table2\"\r\n                    [columns]=\"warehouseTableCols\"\r\n                    [value]=\"warehouseTable\"\r\n                    [(selection)]=\"selectedWarehouse\"\r\n                    dataKey=\"dataId\"\r\n                    [scrollable]=\"true\"\r\n                  >\r\n                    <ng-template pTemplate=\"emptymessage\">\r\n                      <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                      <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                        <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                        <div class=\"lds-hourglass\"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"caption\">\r\n                      <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedWarehouse.length > 0 }\">\r\n                        <div class=\"aw-table-global-filter\">\r\n                          <label class=\"aw-table-global-filter-label\">\r\n                            <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableWarehouseGlobalFilter\r\n                            class=\"aw-table-global-filter-input\"\r\n                            type=\"text\"\r\n                            placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                            (input)=\"ptableWarehouse.filterGlobal($event.target.value, 'contains')\"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class=\"aw-table-actions\">\r\n                          <button\r\n                            id=\"deleteWarehouse\"\r\n                            *ngIf=\"!isReadOpenMode && selectedWarehouse.length > 0\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            color=\"warn\"\r\n                            (click)=\"deleteWarehouse()\"\r\n                          >\r\n                            {{ \"global.delete\" | translate }}\r\n                          </button>\r\n                          <button\r\n                            id=\"goToStockStatus\"\r\n                            *ngIf=\"selectedWarehouse.length === 1\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            (click)=\"goToStockStatus()\"\r\n                          >\r\n                            {{ componentData.componentId + \".stockStatus\" | translate }}\r\n                          </button>\r\n                          <button\r\n                            id=\"editWarehouse\"\r\n                            *ngIf=\"!isReadOpenMode && selectedWarehouse.length === 1\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            (click)=\"editWarehouse()\"\r\n                          >\r\n                            {{ \"global.edit\" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            id=\"openWarehouse\"\r\n                            *ngIf=\"!isReadOpenMode && selectedWarehouse.length === 1\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            (click)=\"openWarehouse()\"\r\n                          >\r\n                            {{ \"global.open\" | translate }}\r\n                          </button>\r\n                          <button\r\n                            id=\"addWarehouse\"\r\n                            *ngIf=\"!isReadOpenMode && selectedWarehouse.length === 0\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            (click)=\"addWarehouse()\"\r\n                          >\r\n                            {{ \"global.add\" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"colgroup\" let-columns>\r\n                      <colgroup>\r\n                        <col class=\"aw-table-checkbox-wrapper\" />\r\n                        <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"header\" let-columns>\r\n                      <tr>\r\n                        <th class=\"aw-table-checkbox-wrapper\">\r\n                          <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                          {{ componentData.componentId + \".\" + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                      <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                        <td class=\"aw-table-checkbox-wrapper\">\r\n                          <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                          {{ rowData[col.field] }}\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"grid-row\">\r\n            <div id=\"valuation\" class=\"grid-cell--3\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 id=\"valuationTableTitle\" class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".valuation\" | translate }}\r\n                      ({{ valuationTable ? valuationTable.length : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <p-table\r\n                    id=\"valuationTable\"\r\n                    [resizableColumns]=\"true\"\r\n                    #ptableValuation\r\n                    class=\"aw-table2\"\r\n                    [columns]=\"valuationTableCols\"\r\n                    [value]=\"valuationTable\"\r\n                    [(selection)]=\"selectedValuation\"\r\n                    [scrollable]=\"true\"\r\n                  >\r\n                    <ng-template pTemplate=\"emptymessage\">\r\n                      <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                      <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                        <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                        <div class=\"lds-hourglass\"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"caption\">\r\n                      <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedValuation.length > 0 }\">\r\n                        <div class=\"aw-table-global-filter\">\r\n                          <label class=\"aw-table-global-filter-label\">\r\n                            <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableValuationGlobalFilter\r\n                            class=\"aw-table-global-filter-input\"\r\n                            type=\"text\"\r\n                            placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                            (input)=\"ptableValuation.filterGlobal($event.target.value, 'contains')\"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class=\"aw-table-actions\">\r\n                          <button\r\n                            id=\"deleteValuation\"\r\n                            *ngIf=\"!isReadOpenMode && selectedValuation.length > 0\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            color=\"warn\"\r\n                            (click)=\"deleteValuation()\"\r\n                          >\r\n                            {{ \"global.delete\" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            id=\"editValuation\"\r\n                            *ngIf=\"!isReadOpenMode && selectedValuation.length === 1\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            (click)=\"editValuation()\"\r\n                          >\r\n                            {{ \"global.edit\" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            id=\"openValuation\"\r\n                            *ngIf=\"!isReadOpenMode && selectedValuation.length === 1\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            (click)=\"openValuation()\"\r\n                          >\r\n                            {{ \"global.open\" | translate }}\r\n                          </button>\r\n                          <button\r\n                            id=\"addValuation\"\r\n                            *ngIf=\"!isReadOpenMode && selectedValuation.length === 0\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            (click)=\"addValuation()\"\r\n                          >\r\n                            {{ \"global.add\" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"colgroup\" let-columns>\r\n                      <colgroup>\r\n                        <col class=\"aw-table-checkbox-wrapper\" />\r\n                        <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"header\" let-columns>\r\n                      <tr>\r\n                        <th class=\"aw-table-checkbox-wrapper\">\r\n                          <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                          {{ componentData.componentId + \".\" + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                      <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                        <td class=\"aw-table-checkbox-wrapper\">\r\n                          <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                        </td>\r\n                        <td\r\n                          *ngFor=\"let col of columns\"\r\n                          [ngSwitch]=\"col.field\"\r\n                          [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                        >\r\n                          {{ rowData[col.field] }}\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div id=\"customerEvolutionTablePanel\" class=\"grid-cell--6\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 id=\"customerEvolutionTableTitle\" class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".suppliers\" | translate }}\r\n                      ({{ supplierTable ? supplierTable.length : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <p-table\r\n                    id=\"customerEvolutionTable\"\r\n                    [resizableColumns]=\"true\"\r\n                    #ptableSuppliers\r\n                    class=\"aw-table2\"\r\n                    [columns]=\"suppliersTableCols\"\r\n                    [value]=\"supplierTable\"\r\n                    [(selection)]=\"selectedSuppliers\"\r\n                    dataKey=\"dataId\"\r\n                    [scrollable]=\"true\"\r\n                  >\r\n                    <ng-template pTemplate=\"emptymessage\">\r\n                      <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n                      <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                        <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                        <div class=\"lds-hourglass\"></div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"caption\">\r\n                      <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedSuppliers.length > 0 }\">\r\n                        <div class=\"aw-table-global-filter\">\r\n                          <label class=\"aw-table-global-filter-label\">\r\n                            <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableSuppliersGlobalFilter\r\n                            class=\"aw-table-global-filter-input\"\r\n                            type=\"text\"\r\n                            placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                            (input)=\"ptableSuppliers.filterGlobal($event.target.value, 'contains')\"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class=\"aw-table-actions\">\r\n                          <button\r\n                            id=\"deleteSupplier\"\r\n                            *ngIf=\"!isReadOpenMode && selectedSuppliers.length > 0\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            color=\"warn\"\r\n                            (click)=\"deleteSupplier()\"\r\n                          >\r\n                            {{ \"global.delete\" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            id=\"editSupplier\"\r\n                            *ngIf=\"!isReadOpenMode && selectedSuppliers.length === 1\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            (click)=\"editSupplier()\"\r\n                          >\r\n                            {{ \"global.edit\" | translate }}\r\n                          </button>\r\n                          <button\r\n                            id=\"openSupplier\"\r\n                            *ngIf=\"!isReadOpenMode && selectedSuppliers.length === 1\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            (click)=\"openSupplier()\"\r\n                          >\r\n                            {{ \"global.open\" | translate }}\r\n                          </button>\r\n                          <button\r\n                            id=\"addSupplier\"\r\n                            *ngIf=\"!isReadOpenMode && selectedSuppliers.length === 0\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            (click)=\"addSupplier()\"\r\n                          >\r\n                            {{ \"global.add\" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"colgroup\" let-columns>\r\n                      <colgroup>\r\n                        <col class=\"aw-table-checkbox-wrapper\" />\r\n                        <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"header\" let-columns>\r\n                      <tr>\r\n                        <th class=\"aw-table-checkbox-wrapper\">\r\n                          <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                          {{ componentData.componentId + \".\" + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                      <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                        <td class=\"aw-table-checkbox-wrapper\">\r\n                          <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td\r\n                          *ngFor=\"let col of columns\"\r\n                          [ngSwitch]=\"col.field\"\r\n                          [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                        >\r\n                          <a *ngSwitchCase=\"'supplierName'\" (click)=\"openBussinerPartnerForm(rowData)\">\r\n                            {{ rowData[col.field] }}\r\n                          </a>\r\n                          <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell--3\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 *ngIf=\"isMaterialContainer()\" class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".pnContent\" | translate }}\r\n                      ({{ containerTable ? containerTable.length : 0 }})\r\n                    </h3>\r\n                    <h3 *ngIf=\"!isMaterialContainer()\" class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".pnContainer\" | translate }}\r\n                      ({{ containerTable ? containerTable.length : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"grid-cell-content\">\r\n                  <p-table\r\n                    id=\"containerTable\"\r\n                    [resizableColumns]=\"true\"\r\n                    #ptableContainer\r\n                    class=\"aw-table2\"\r\n                    [columns]=\"containerTableCols\"\r\n                    [value]=\"containerTable\"\r\n                    [(selection)]=\"selectedContainer\"\r\n                    [scrollable]=\"true\"\r\n                  >\r\n                    <ng-template pTemplate=\"caption\">\r\n                      <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedContainer.length > 0 }\">\r\n                        <div class=\"aw-table-global-filter\">\r\n                          <label class=\"aw-table-global-filter-label\">\r\n                            <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableContainersGlobalFilter\r\n                            class=\"aw-table-global-filter-input\"\r\n                            type=\"text\"\r\n                            placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                            (input)=\"ptableContainer.filterGlobal($event.target.value, 'contains')\"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class=\"aw-table-actions\">\r\n                          <button\r\n                            id=\"deleteContainer\"\r\n                            *ngIf=\"!isReadOpenMode && selectedContainer.length > 0\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            color=\"warn\"\r\n                            (click)=\"deleteContainer()\"\r\n                          >\r\n                            {{ \"global.delete\" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            id=\"editContainer\"\r\n                            *ngIf=\"!isReadOpenMode && selectedContainer.length === 1\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            (click)=\"editContainer()\"\r\n                          >\r\n                            {{ \"global.edit\" | translate }}\r\n                          </button>\r\n                          <button\r\n                            id=\"openContainer\"\r\n                            *ngIf=\"selectedContainer.length === 1\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            (click)=\"openContainer()\"\r\n                          >\r\n                            {{ \"global.open\" | translate }}\r\n                          </button>\r\n                          <button\r\n                            id=\"addContainer\"\r\n                            *ngIf=\"!isReadOpenMode && selectedContainer.length === 0\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            (click)=\"addContainer()\"\r\n                          >\r\n                            {{ \"global.add\" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"colgroup\" let-columns>\r\n                      <colgroup>\r\n                        <col class=\"aw-table-checkbox-wrapper\" />\r\n                        <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"header\" let-columns>\r\n                      <tr>\r\n                        <th class=\"aw-table-checkbox-wrapper\">\r\n                          <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                          {{ componentData.componentId + \".\" + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                      <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                        <td class=\"aw-table-checkbox-wrapper\">\r\n                          <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td\r\n                          *ngFor=\"let col of columns\"\r\n                          [ngSwitch]=\"col.field\"\r\n                          [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                        >\r\n                          {{ rowData[col.field] }}\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ componentData.componentId + \".furtherInformation\" | translate }}\r\n          </ng-template>\r\n\r\n          <div class=\"grid-row\">\r\n            <div id=\"furtherInformationPanel\" class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".furtherInformation\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"column\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".avgPrice\" | translate }}</label>\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            (ngModelChange)=\"materialFieldData.averagePrice = $event\"\r\n                            [ngModel]=\"materialFieldData.averagePrice\"\r\n                            class=\"aw-input\"\r\n                            style=\"width:65%\"\r\n                            maxlength=\"15\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          />\r\n                          <span style=\"width:35%;padding-top:1em; float:right\">{{ priceCurrency }}</span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".avgPriceUnit\" | translate }}</label>\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [options]=\"unitOfIssueOptions\"\r\n                            [(ngModel)]=\"materialFieldData.unitOfIssue\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".quantity\" | translate }}</label>\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            (ngModelChange)=\"materialFieldData.quantityPerIssue = $event\"\r\n                            [ngModel]=\"materialFieldData.quantityPerIssue | number: '1.0-2'\"\r\n                            class=\"aw-input\"\r\n                            maxlength=\"15\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div id=\"accounting\" class=\"form-group\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".accounting\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input\"\r\n                            maxlength=\"50\"\r\n                            [(ngModel)]=\"materialFieldData.accounting\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div id=\"mtbf\" class=\"form-group\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".mtbf\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input inputs-with-unit\"\r\n                            [(ngModel)]=\"materialFieldData.mtbf\"\r\n                            maxlength=\"15\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          />\r\n                          <span class=\"units\">{{ mtbfAndMtburUnit }}</span>\r\n                        </div>\r\n                      </div>\r\n                      <div id=\"mtbur\" class=\"form-group\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".mtbur\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input inputs-with-unit\"\r\n                            [(ngModel)]=\"materialFieldData.mtbur\"\r\n                            maxlength=\"15\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          />\r\n                          <span class=\"units\">{{ mtbfAndMtburUnit }}</span>\r\n                        </div>\r\n                      </div>\r\n                      <div id=\"netWeight\" class=\"form-group\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".netWeight\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input inputs-with-unit\"\r\n                            [(ngModel)]=\"materialFieldData.netWeight\"\r\n                            maxlength=\"15\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          />\r\n                          <span class=\"units\">{{ weightUnit }}</span>\r\n                        </div>\r\n                      </div>\r\n                      <div id=\"packedWeight\" class=\"form-group\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".packedWeight\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input inputs-with-unit\"\r\n                            [(ngModel)]=\"materialFieldData.packedWeight\"\r\n                            maxlength=\"15\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          />\r\n                          <span class=\"units\">{{ weightUnit }}</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div id=\"unpackedHeight\" class=\"form-group\">\r\n                        <label class=\"form-label\">{{\r\n                          componentData.componentId + \".unpackedHeight\" | translate\r\n                        }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input inputs-with-unit\"\r\n                            [(ngModel)]=\"materialFieldData.unpackedHeight\"\r\n                            maxlength=\"15\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          />\r\n                          <span class=\"units\">{{ measurementsUnit }}</span>\r\n                        </div>\r\n                      </div>\r\n                      <div id=\"unpackedLength\" class=\"form-group\">\r\n                        <label class=\"form-label\">{{\r\n                          componentData.componentId + \".unpackedLength\" | translate\r\n                        }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input inputs-with-unit\"\r\n                            [(ngModel)]=\"materialFieldData.unpackedLength\"\r\n                            maxlength=\"15\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          />\r\n                          <span class=\"units\">{{ measurementsUnit }}</span>\r\n                        </div>\r\n                      </div>\r\n                      <div id=\"unpackedWidth\" class=\"form-group\">\r\n                        <label class=\"form-label\">{{ componentData.componentId + \".unpackedWidth\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"aw-input inputs-with-unit\"\r\n                            [(ngModel)]=\"materialFieldData.unpackedWidth\"\r\n                            maxlength=\"15\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          />\r\n                          <span class=\"units\">{{ measurementsUnit }}</span>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div id=\"hasExpirationDate\" class=\"form-group\">\r\n                        <label class=\"form-label\">{{\r\n                          componentData.componentId + \".hasExpirationDate\" | translate\r\n                        }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-checkbox\r\n                            class=\"aw-checkbox\"\r\n                            binary=\"true\"\r\n                            [(ngModel)]=\"materialFieldData.hasExpirationDate\"\r\n                            [disabled]=\"isReadOpenMode\"\r\n                          ></p-checkbox>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"grid-row\">\r\n            <div id=\"supplyConversionTablePanel\" class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".supplyConversionTable\" | translate }}\r\n                      ({{ supplyConversionTable ? supplyConversionTable.length : 0 }})\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"grid-cell-content\">\r\n                  <p-table\r\n                    id=\"supplyConversionTable\"\r\n                    [resizableColumns]=\"true\"\r\n                    #ptableSupplyConversion\r\n                    class=\"aw-table2\"\r\n                    [columns]=\"supplyConversionTableCols\"\r\n                    [value]=\"supplyConversionTable\"\r\n                    [(selection)]=\"selectedSupplyConversion\"\r\n                    [scrollable]=\"true\"\r\n                  >\r\n                    <ng-template pTemplate=\"caption\">\r\n                      <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': selectedSupplyConversion.length > 0 }\">\r\n                        <div class=\"aw-table-global-filter\">\r\n                          <label class=\"aw-table-global-filter-label\">\r\n                            <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                          </label>\r\n\r\n                          <input\r\n                            #ptableSupplyConversionGlobalFilter\r\n                            class=\"aw-table-global-filter-input\"\r\n                            type=\"text\"\r\n                            placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                            (input)=\"ptableSupplyConversion.filterGlobal($event.target.value, 'contains')\"\r\n                          />\r\n                        </div>\r\n\r\n                        <div class=\"aw-table-actions\">\r\n                          <button\r\n                            id=\"deleteSupplyConversion\"\r\n                            *ngIf=\"!isReadOpenMode && selectedSupplyConversion.length > 0\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            color=\"warn\"\r\n                            (click)=\"deleteSupplyConversion()\"\r\n                          >\r\n                            {{ \"global.delete\" | translate }}\r\n                          </button>\r\n\r\n                          <button\r\n                            id=\"editSupplyConversion\"\r\n                            *ngIf=\"!isReadOpenMode && selectedSupplyConversion.length === 1\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            (click)=\"editSupplyConversion()\"\r\n                          >\r\n                            {{ \"global.edit\" | translate }}\r\n                          </button>\r\n                          <button\r\n                            id=\"openSupplyConversion\"\r\n                            *ngIf=\"selectedSupplyConversion.length === 1\"\r\n                            type=\"button\"\r\n                            mat-raised-button\r\n                            (click)=\"openSupplyConversion()\"\r\n                          >\r\n                            {{ \"global.open\" | translate }}\r\n                          </button>\r\n                          <div\r\n                            class=\"hover-div\"\r\n                            pTooltip=\"{{ componentData.componentId + '.addHover' | translate }}\"\r\n                            [tooltipDisabled]=\"enableUnitOfIssue\"\r\n                            tooltipPosition=\"top\"\r\n                          >\r\n                            <button\r\n                              id=\"addSupplyConversion\"\r\n                              *ngIf=\"!isReadOpenMode && selectedSupplyConversion.length === 0\"\r\n                              type=\"button\"\r\n                              mat-raised-button\r\n                              (click)=\"addSupplyConversion()\"\r\n                              [disabled]=\"!enableUnitOfIssue\"\r\n                            >\r\n                              {{ \"global.add\" | translate }}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"colgroup\" let-columns>\r\n                      <colgroup>\r\n                        <col class=\"aw-table-checkbox-wrapper\" />\r\n                        <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                      </colgroup>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"header\" let-columns>\r\n                      <tr>\r\n                        <th class=\"aw-table-checkbox-wrapper\">\r\n                          <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                        </th>\r\n\r\n                        <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                          {{ componentData.componentId + \".\" + col.field | translate }}\r\n                        </th>\r\n                      </tr>\r\n                    </ng-template>\r\n\r\n                    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                      <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                        <td class=\"aw-table-checkbox-wrapper\">\r\n                          <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                        </td>\r\n\r\n                        <td\r\n                          *ngFor=\"let col of columns\"\r\n                          [ngSwitch]=\"col.field\"\r\n                          [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                        >\r\n                          {{ rowData[col.field] }}\r\n                        </td>\r\n                      </tr>\r\n                    </ng-template>\r\n                  </p-table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab *ngIf=\"dynamicAttributes && dynamicAttributes.length\">\r\n          <ng-template mat-tab-label>\r\n            {{ \"attributes\" | translate }}\r\n          </ng-template>\r\n\r\n          <div class=\"grid-row\">\r\n            <div id=\"attributesPanel\" class=\"grid-cell--12\">\r\n              <div class=\"grid-cell grid-cell--container\">\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ componentData.componentId + \".tabAttributes\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n                  <aw-dynamic-attributes\r\n                    id=\"dynamicAttributes\"\r\n                    [attributes]=\"dynamicAttributes\"\r\n                    [workflowControls]=\"userWorkflow ? userWorkflow.listControlByIdentifier : []\"\r\n                    [isReadOpenMode]=\"isReadOpenMode\"\r\n                  ></aw-dynamic-attributes>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-assign-warehouse-popup-form\r\n    *ngIf=\"showWarehousePopup\"\r\n    [(display)]=\"showWarehousePopup\"\r\n    [warehouseDetail]=\"currentWarehouse\"\r\n    [openMode]=\"warehouseDialogOpenMode\"\r\n    (onValidated)=\"onAddWarehouse($event)\"\r\n  ></aw-assign-warehouse-popup-form>\r\n  <aw-status-update-history\r\n    *ngIf=\"showStatusUpdatesPopup\"\r\n    [object]=\"pnStatus\"\r\n    [data]=\"tableStatusUpdatesData\"\r\n    [deleteApi]=\"deleteApi\"\r\n    [isStatusEditable]=\"false\"\r\n    [(display)]=\"showStatusUpdatesPopup\"\r\n    [keyMap]=\"updatesKeyMap\"\r\n    (onUpdated)=\"updateObjectStatusFromStatusUpdatesHistory($event)\"\r\n  ></aw-status-update-history>\r\n  <aw-assign-supplier-popup-form\r\n    *ngIf=\"showSupplierPopup\"\r\n    [(display)]=\"showSupplierPopup\"\r\n    [supplierDetail]=\"currentSupplier\"\r\n    [priceCurrency]=\"priceCurrency\"\r\n    [openMode]=\"supplierDialogOpenMode\"\r\n    [serviceType]=\"serviceType\"\r\n    (onValidated)=\"onAddSupplier($event)\"\r\n  ></aw-assign-supplier-popup-form>\r\n  <aw-assign-valuation-popup-form\r\n    *ngIf=\"showValuationPopup\"\r\n    [(display)]=\"showValuationPopup\"\r\n    [valuationDetail]=\"currentValuation\"\r\n    [priceCurrency]=\"priceCurrency\"\r\n    [openMode]=\"valuationDialogOpenMode\"\r\n    (onValidated)=\"onAddValuation($event)\"\r\n  ></aw-assign-valuation-popup-form>\r\n  <aw-assign-alternative-popup-form\r\n    *ngIf=\"showAlternativePopup\"\r\n    [(display)]=\"showAlternativePopup\"\r\n    [alternativeDetail]=\"currentAlternative\"\r\n    [pnCode]=\"materialFieldData.pnCode\"\r\n    [openMode]=\"alternativeDialogOpenMode\"\r\n    (onValidated)=\"onAddAlternative($event)\"\r\n  ></aw-assign-alternative-popup-form>\r\n  <aw-assign-container-popup-form\r\n    *ngIf=\"showContainerPopup\"\r\n    [(display)]=\"showContainerPopup\"\r\n    [containerDetail]=\"currentContainer\"\r\n    [openMode]=\"containerDialogOpenMode\"\r\n    [pnType]=\"materialFieldData.pnType\"\r\n    (onValidated)=\"onAddContainer($event)\"\r\n  ></aw-assign-container-popup-form>\r\n  <aw-assign-supply-conversion-popup-form\r\n    *ngIf=\"showSupplyConversionPopup\"\r\n    [(display)]=\"showSupplyConversionPopup\"\r\n    [pnCode]=\"materialFieldData.pnCode\"\r\n    [supplyConversionDetail]=\"currentSupplyConversion\"\r\n    [unitOfIssueOptions]=\"unitOfIssueOptions\"\r\n    [openMode]=\"supplyConversionDialogOpenMode\"\r\n    [supplyUnit]=\"materialFieldData.unitOfIssue\"\r\n    (onValidated)=\"onAddSupplyConversion($event)\"\r\n  ></aw-assign-supply-conversion-popup-form>\r\n\r\n  <aw-procurement-request-popup\r\n    *ngIf=\"createProcurementDialogVisible\"\r\n    [(display)]=\"createProcurementDialogVisible\"\r\n    [pn]=\"materialFieldData\"\r\n    (onValidate)=\"onCreateProcurementRequest($event)\"\r\n  >\r\n  </aw-procurement-request-popup>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/material/form/material-form.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/material-form.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .object-is-incomplete {\n  border: 1px solid transparent;\n  font-style: italic;\n  justify-content: center;\n  font-size: 1.125rem;\n  background-color: gold;\n  color: black;\n  border-radius: 16px;\n  padding: 4px 32px;\n  margin-top: 8px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-weight: 600;\n  display: inline-block;\n  margin-left: 10px; }\n  :host .object-is-incomplete.disabled {\n    cursor: auto; }\n  :host .inputs-with-unit {\n  width: 85% !important; }\n  :host .units {\n  width: 15%;\n  padding-top: 1em;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbWF0ZXJpYWwvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXG1hdGVyaWFsXFxmb3JtXFxtYXRlcmlhbC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTtFQWRyQjtJQWlCTSxZQUFZLEVBQUE7RUFqQmxCO0VBc0JJLHFCQUFxQixFQUFBO0VBdEJ6QjtFQTBCSSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL21hdGVyaWFsL2Zvcm0vbWF0ZXJpYWwtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuXHJcbjpob3N0IHtcclxuICAub2JqZWN0LWlzLWluY29tcGxldGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIHBhZGRpbmc6IDRweCAzMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW5wdXRzLXdpdGgtdW5pdCB7XHJcbiAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudW5pdHMge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/logistics/material/form/material-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/material-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: MaterialFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialFormComponent", function() { return MaterialFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_api_update_historic_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/update-historic.api */ "./src/app/shared/api/update-historic.api.ts");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/dynamic-attributes/dynamic-attributes.service */ "./src/app/shared/components/dynamic-attributes/dynamic-attributes.service.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/constants/bire-unit-measure-constants */ "./src/app/shared/constants/bire-unit-measure-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/enums/table-column-filter-mode.enum */ "./src/app/shared/enums/table-column-filter-mode.enum.ts");
/* harmony import */ var _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/enums/table-selection-mode.enum */ "./src/app/shared/enums/table-selection-mode.enum.ts");
/* harmony import */ var _shared_pipes_format_select_option_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/pipes/format-select-option.pipe */ "./src/app/shared/pipes/format-select-option.pipe.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/services/input-validation.service */ "./src/app/shared/services/input-validation.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_services_update_historic_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/services/update-historic.service */ "./src/app/shared/services/update-historic.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../shared/utils/dto-utils */ "./src/app/shared/utils/dto-utils.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../shared/utils/workflow-utils */ "./src/app/shared/utils/workflow-utils.ts");
/* harmony import */ var _object_status_object_status_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../object-status/object-status.component */ "./src/app/main/object-status/object-status.component.ts");
/* harmony import */ var _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../overlay/overlay.service */ "./src/app/main/overlay/overlay.service.ts");
/* harmony import */ var _material_form_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./material-form.service */ "./src/app/main/logistics/material/form/material-form.service.ts");
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































var MaterialFormComponent = /** @class */ (function (_super) {
    __extends(MaterialFormComponent, _super);
    function MaterialFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, pageTocService, inputValidationService, translateService, dynamicAttributesService, materialFormService, confirmationService, updateHistoricService, propertiesService, updateHistoricApi, _overlayService, _formatSelectOption) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.inputValidationService = inputValidationService;
        _this.translateService = translateService;
        _this.dynamicAttributesService = dynamicAttributesService;
        _this.materialFormService = materialFormService;
        _this.confirmationService = confirmationService;
        _this.updateHistoricService = updateHistoricService;
        _this.propertiesService = propertiesService;
        _this.updateHistoricApi = updateHistoricApi;
        _this._overlayService = _overlayService;
        _this._formatSelectOption = _formatSelectOption;
        // For status/updates popup
        _this.showStatusUpdatesPopup = false;
        _this.enableUnitOfIssue = false;
        _this.updatesKeyMap = new Map();
        _this.deleteApi = _this.updateHistoricApi.removeBireSbHistory;
        _this.setNavigationLinkList();
        _this.setTableCols();
        _this.init();
        _this.selectedAnchor = undefined;
        _this.registerPageTocEntrySelectedObservable();
        _this.userWorkflowSubject.subscribe(function (userWorflow) {
            _this.updateWorkflowToc();
            _this.updateWorkflowStatusList();
        });
        return _this;
    }
    MaterialFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_MATERIAL_FORM;
    };
    MaterialFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (this.componentData) {
            this.updateOpenMode(this.componentData.openMode);
            var context = this.isCreateOpenMode
                ? 'tab.createMode'
                : !!this.componentData.objectId && this.serializationService.deserialize(this.componentData.objectId).pnCode;
            this.displayComponentContext(context, this.isCreateOpenMode);
            this.loadMaterialDetailData();
            this.toc = [
                {
                    id: 'mainAnchor',
                    anchor: this.mainAnchor,
                    label: "" + this.translateService.instant('page.mainData')
                },
                {
                    id: 'warhouseAnchor',
                    anchor: this.warhouseAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('warehouses'))
                },
                {
                    id: 'valuationAnchor',
                    anchor: this.valuationAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('valuation'))
                },
                {
                    id: 'customerEvolutionTableAnchor',
                    anchor: this.customerEvolutionTableAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('suppliers'))
                },
                {
                    id: 'alternativeAnchor',
                    anchor: this.alternativeAnchor,
                    label: "" + this.translateService.instant(this.getTranslateKey('alternatives'))
                }
            ];
            this.updateWorkflowToc();
            setTimeout(function () {
                _this.setSelectedAnchor('mainAnchor');
            });
        }
        if (this.isCreateOpenMode) {
            this.materialFieldData.statusState = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].FUNC_OBJECT_STATUS_IS_INTEGRATED_KEY;
        }
    };
    MaterialFormComponent.prototype.updateWorkflowToc = function () {
        this.workflowToc = this.applyWorkflowOnPageToc(this.toc);
    };
    MaterialFormComponent.prototype.setNavigationLinkList = function () {
        var _this = this;
        var engineeringViewLabelKey = this.getTranslateKey('engineeringView');
        this.translateService.get([engineeringViewLabelKey]).subscribe(function (results) {
            var engineeringViewLabel = results ? results[engineeringViewLabelKey] : 'Engineering View';
            _this.navigationLinkList = [
                {
                    label: engineeringViewLabel,
                    command: function () {
                        _this.openPartView(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read);
                    }
                }
            ];
        });
    };
    MaterialFormComponent.prototype.isSelectedAnchor = function (anchorId) {
        return anchorId === this.selectedAnchor;
    };
    MaterialFormComponent.prototype.setSelectedAnchor = function (anchorId) {
        this.pageTocService.setAnchorSelected(anchorId);
        this.selectedAnchor = anchorId;
    };
    MaterialFormComponent.prototype.registerPageTocEntrySelectedObservable = function () {
        var _this = this;
        this.pageTocService.pageTocEntrySelected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(function (pageTocEntrySelected) {
            _this.selectedAnchor = pageTocEntrySelected;
        });
    };
    MaterialFormComponent.prototype.init = function () {
        this.loadUnitOfIssueOptions();
        this.loadServiceType();
        this.showWarehousePopup = false;
        this.showSupplierPopup = false;
        this.showValuationPopup = false;
        this.showAlternativePopup = false;
        this.showContainerPopup = false;
        this.showSupplyConversionPopup = false;
        this.engineeringView = false;
        this.warehouseDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read;
        this.supplierDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read;
        this.valuationDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read;
        this.alternativeDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read;
        this.containerDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read;
        this.supplyConversionDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read;
        this.currentWarehouse = undefined;
        this.currentWarehouseIndex = -1;
        this.currentSupplier = undefined;
        this.currentSupplierIndex = -1;
        this.currentAlternative = undefined;
        this.currentAlternativeIndex = -1;
        this.currentValuation = undefined;
        this.currentValuationIndex = -1;
        this.currentContainer = undefined;
        this.currentContainerIndex = -1;
        this.currentSupplyConversion = undefined;
        this.currentSupplyConversionIndex = -1;
        this.priceCurrency = '';
        this.mtbfAndMtburUnit = '(H)';
        this.measurementsUnit = '(Cm)';
        this.weightUnit = '(Kg)';
        this.storageConditionValue = undefined;
        this.materialType = [];
        this.traceability = [];
        this.quantityUnit = [];
        this.expirationThresholdUnit = [];
        this.storageCondition = [];
        this.expirationUnit = [];
        this.unitDropDown = [];
        this.warehouseTable = [];
        this.valuationTable = [];
        this.supplierTable = [];
        this.alternativeTable = [];
        this.selectedWarehouse = [];
        this.selectedSuppliers = [];
        this.selectedValuation = [];
        this.selectedContainer = [];
        this.selectedAlternatives = [];
        this.selectedSupplyConversion = [];
        this.warehouseMappedAddedList = [];
        this.supplierMappedAddedList = [];
        this.containerMappedAddedList = [];
        this.supplyConversionMappedAddedList = [];
        this.loadEngineeringPnTypes();
        this.loadDropDown();
        this.materialFieldData = {};
        this.sparePartClassOptions = [];
        this.loadSparePartClassDropdown();
        this.containerTable = [];
        this.supplyConversionTable = [];
    };
    MaterialFormComponent.prototype.setTableCols = function () {
        this.alternativeTableCols = [
            { field: 'birePnByFkBidtPnBidtPn2BirePnPnCode', alignment: 'left' },
            { field: 'nameOfInterchangebilty', alignment: 'left' },
            { field: 'alternativeComment', alignment: 'left' }
        ];
        this.suppliersTableCols = [
            { field: 'supplierName', alignment: 'left' },
            { field: 'numberOfDays', alignment: 'left' },
            { field: 'productQuantity', alignment: 'left' },
            { field: 'priceValueText', alignment: 'left' },
            { field: 'serviceType', alignment: 'left' }
        ];
        this.valuationTableCols = [
            { field: 'valuationName', alignment: 'left' },
            { field: 'unitValueText', alignment: 'left' }
        ];
        this.warehouseTableCols = [
            { field: 'siteName', alignment: 'left' },
            { field: 'wHName', alignment: 'left' },
            { field: 'storageBins', alignment: 'left' },
            { field: 'stock', alignment: 'left' },
            { field: 'whPrLowThreshold', alignment: 'left' },
            { field: 'whPrHighThreshold', alignment: 'left' }
        ];
        this.containerTableCols = [
            { field: 'pnCode', alignment: 'left' },
            { field: 'articleDesignation', alignment: 'left' }
        ];
        this.supplyConversionTableCols = [
            { field: 'unit', alignment: 'left' },
            { field: 'alternativeUnit', alignment: 'left' },
            { field: 'factor', alignment: 'left' }
        ];
    };
    MaterialFormComponent.prototype.cancelMaterial = function () {
        this.clearErrors();
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read);
        this.reloadMaterial();
    };
    MaterialFormComponent.prototype.editMaterial = function () {
        this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write);
    };
    MaterialFormComponent.prototype.reloadMaterial = function () {
        this.init();
        this.loadMaterialDetailData();
    };
    MaterialFormComponent.prototype.enableEngieeringView = function () {
        var e_1, _a;
        if (!!this.engineeringPnTypes && !!this.materialFieldData.pnType) {
            try {
                for (var _b = __values(this.engineeringPnTypes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var partValue = _c.value;
                    if (this.materialFieldData.pnType === partValue.value) {
                        this.engineeringView = true;
                        break;
                    }
                    else {
                        this.engineeringView = false;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    MaterialFormComponent.prototype.saveMaterial = function () {
        var _this = this;
        var saved = false;
        var missingFields = this.checkMandatoryFields(__assign({}, this.materialFieldData, { storageConditionValue: this.storageConditionValue, warehouseTableTitle: this.warehouseTable, valuationTableTitle: this.valuationTable, customerEvolutionTableTitle: this.supplierTable, alternativeTableTitle: this.alternativeTable, dynamicAttributes: this.dynamicAttributes }));
        if (this.materialFieldData && this.materialFieldData.pnCode && missingFields.length === 0) {
            var update = void 0;
            this.isCreateOpenMode ? (update = false) : (update = true);
            this.warehouseMappedAddedList = [];
            this.materialAttributes = this.dynamicAttributesService.toBirePnAttribute(this.materialFieldData.pnCode, this.dynamicAttributes);
            this.warehouseTable.forEach(function (warehouse) {
                var warehouseMapped = {
                    wareHouseId: warehouse.wareHouseId,
                    bidtSiteId: warehouse.bidtSiteId,
                    whPrHighThreshold: warehouse.whPrHighThreshold,
                    whPrLowThreshold: warehouse.whPrLowThreshold,
                    bidtStorageBinDTOList: warehouse.bidtStorageBinDTOList
                };
                _this.warehouseMappedAddedList.push(warehouseMapped);
            });
            this.supplierMappedAddedList = [];
            this.supplierTable.forEach(function (supplier) {
                _this.serviceType.forEach(function (type) {
                    if (type.label === supplier.serviceType) {
                        supplier.serviceType = type.value;
                    }
                });
                var supplierMapped = {
                    bidoCustomerCustomerCode: supplier.bidoCustomerCustomerCode,
                    numberOfDays: supplier.numberOfDays,
                    productQuantity: supplier.productQuantity,
                    priceValue: supplier.priceValue,
                    priceUnit: _this.priceCurrency,
                    serviceType: supplier.serviceType
                };
                _this.supplierMappedAddedList.push(supplierMapped);
            });
            this.containerMappedAddedList = [];
            if (this.materialFieldData.pnType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].PN_TYPE_BOX_KEY) {
                this.containerTable.forEach(function (container) {
                    var containerMapped = {
                        containerPnCode: _this.materialFieldData.pnCode,
                        contentPnCode: container.pnCode
                    };
                    _this.containerMappedAddedList.push(containerMapped);
                });
            }
            else {
                this.containerTable.forEach(function (container) {
                    var containerMapped = {
                        containerPnCode: container.pnCode,
                        contentPnCode: _this.materialFieldData.pnCode
                    };
                    _this.containerMappedAddedList.push(containerMapped);
                });
            }
            this.supplyConversionMappedAddedList = [];
            this.supplyConversionTable.forEach(function (supplyConversion) {
                _this.unitOfIssueOptions.forEach(function (res) {
                    if (supplyConversion.unit === res.label) {
                        supplyConversion.unit = res.value;
                    }
                    if (supplyConversion.alternativeUnit === res.label) {
                        supplyConversion.alternativeUnit = res.value;
                    }
                });
                var supplyConversionMapped = {
                    pnCode: _this.materialFieldData.pnCode,
                    unit: supplyConversion.unit,
                    alternativeUnit: supplyConversion.alternativeUnit,
                    factor: supplyConversion.factor
                };
                _this.supplyConversionMappedAddedList.push(supplyConversionMapped);
            });
            var intStorageValue = parseInt(this.storageConditionValue, 10);
            var saveId = {
                birePnDTO: this.materialFieldData,
                isUpdate: update,
                whareHouseTableDtos: this.warehouseMappedAddedList,
                bidtValuationDTOs: this.valuationTable,
                bidtProductCustomerDTOs: this.supplierMappedAddedList,
                bidtProductScDTO: {
                    bidtStorageConditionId: intStorageValue
                },
                bidtPnAlternativeDTOs: this.alternativeTable,
                bireContainerPnDTOs: this.containerMappedAddedList,
                bireSupplyConversionDTOs: this.supplyConversionMappedAddedList,
                materialAttributeDTOUpdatedList: this.materialAttributes
            };
            if (this.supplyConversionMappedAddedList.length > 0 && !this.materialFieldData.unitOfIssue) {
                this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveMaterialsForUnitOfIssue'));
            }
            else {
                this.showSaveSpinner = true;
                this.materialFormService.saveMaterial(saveId).subscribe(function (result) {
                    _this.componentData.objectId = _this.serializationService.serialize(_this.materialFieldData);
                    var context = _this.serializationService.deserialize(_this.componentData.objectId).pnCode;
                    _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write);
                    _this.displayComponentContext(context, _this.isCreateOpenMode);
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnSaveMaterials'));
                    _this.showSaveSpinner = false;
                    _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read);
                    _this.reloadMaterial();
                }, function (error) {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSaveMaterials'));
                    _this.showSaveSpinner = false;
                });
                saved = true;
            }
        }
        else {
            this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
        }
        return saved;
    };
    MaterialFormComponent.prototype.loadEngineeringPnTypes = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__["GenericPropertyConstants"].ENGINEERING_PN_TYPES_MAP).subscribe(function (results) {
            _this.engineeringPnTypes = results;
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetEngineeringPnTypes'));
        });
    };
    MaterialFormComponent.prototype.updateWorkflowStatusList = function () {
        if (!!this.materialFieldData) {
            this.workflowStatus = _shared_utils_workflow_utils__WEBPACK_IMPORTED_MODULE_27__["WorkflowUtils"].filterWorkflowStatusList(this.userWorkflow, this.partNumberStatus, this.materialFieldData.statusState);
        }
    };
    MaterialFormComponent.prototype.loadDropDown = function () {
        var _this = this;
        this.propertiesService.getValue('getPnTraceabilityMap').subscribe(function (results) {
            _this.traceability = !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_26__["SelectItemUtils"].fromLabelValues(results) : [];
        }, function () {
            _this.messageService.showErrorMessage('errorOnLoadingTraceability');
        });
        this.propertiesService.getValue('getPnTypeMap').subscribe(function (results) {
            _this.materialType = !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_26__["SelectItemUtils"].fromLabelValues(results) : [];
        }, function () {
            _this.messageService.showErrorMessage('errorOnLoadingMaterialType');
        });
        this.propertiesService.getValue('getPnTraceabilityMap').subscribe(function (results) {
            _this.traceability = !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_26__["SelectItemUtils"].fromLabelValues(results) : [];
        }, function () {
            _this.messageService.showErrorMessage('errorOnLoadingTraceability');
        });
        this.propertiesService.getValue('getFuncObjectStatusMap').subscribe({
            next: function (results) {
                _this.propertyStatus = results || [];
                _this.partNumberStatus = __spread(results);
                _this.handleObjectStatus();
                _this.loadMaterialUserWorkflow();
                _this.updateWorkflowStatusList();
            },
            error: function () {
                _this.messageService.showErrorMessage('errorOnLoadingTraceability');
                _this.loadUserWorkflow(undefined);
            }
        });
        this.propertiesService.getValue('getObjectStatusMap').subscribe(function (results) {
            _this.propertyObjectStatus = results;
            _this.handleObjectStatus();
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetObjectStatus'));
        });
        this.materialFormService.findAllBireUnitMeasures().subscribe(function (result) {
            var newLableValue = [];
            result.forEach(function (res) {
                if (_shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_8__["BireUnitMeasureConstants"].DAY === res.label) {
                    newLableValue.push({
                        label: res.label + "-" + res.value,
                        value: res.value
                    });
                }
                if (_shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_8__["BireUnitMeasureConstants"].MONTH === res.label) {
                    newLableValue.push({
                        label: res.label + "-" + res.value,
                        value: res.value
                    });
                }
                if (_shared_constants_bire_unit_measure_constants__WEBPACK_IMPORTED_MODULE_8__["BireUnitMeasureConstants"].YEAR === res.label) {
                    newLableValue.push({
                        label: res.label + "-" + res.value,
                        value: res.value
                    });
                }
            });
            _this.expirationUnit = newLableValue;
            _this.expirationThresholdUnit = newLableValue;
        });
        this.materialFormService.findQuantityUnitMap().subscribe(function (res) {
            _this.quantityUnit = res;
        });
        this.materialFormService.findStorageCondition().subscribe(function (result) {
            var labelValue = [];
            result.forEach(function (res) {
                if (!!res && !!res.id && !!res.scName) {
                    labelValue.push({
                        label: res.scName,
                        value: res.id.toString()
                    });
                }
            });
            _this.storageCondition = labelValue;
        });
        this.materialFormService.getLocalCurrency().subscribe(function (result) {
            _this.priceCurrency = result;
        });
    };
    MaterialFormComponent.prototype.handleObjectStatus = function () {
        // Adding object status if necessary
        if (!!this.materialFieldData &&
            !!this.materialFieldData.statusState &&
            !this.getLabelValueByValue(this.partNumberStatus, this.materialFieldData.statusState)) {
            var currentState = this.getLabelValueByValue(this.propertyObjectStatus, this.materialFieldData.statusState);
            if (currentState) {
                this.partNumberStatus.unshift(currentState);
                this.updateWorkflowStatusList();
            }
        }
    };
    MaterialFormComponent.prototype.getLabelValueByValue = function (references, value) {
        return references.find(function (lv) { return lv.value === value; });
    };
    MaterialFormComponent.prototype.loadMaterialDetailData = function () {
        var _this = this;
        var observables = [
            this.getDynamicAttributesObservable(_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].MCH_ATTRIBUTE_CATEGORY_ALL_KEY),
            this.getDynamicAttributesObservable(_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].MCH_ATTRIBUTE_CATEGORY_MATERIAL_KEY)
        ];
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).subscribe(function (results) {
            if (results) {
                var flattenResults = results.reduce(function (acc, val) { return acc.concat(val); }, []);
                _this.dynamicAttributes = _this.dynamicAttributesService.from(flattenResults);
                if (_this.componentData.objectId) {
                    var userId = {
                        pnCode: _this.serializationService.deserialize(_this.componentData.objectId).pnCode
                    };
                    if (!!userId) {
                        _this.materialFormService.getMaterialDetails(userId).subscribe(function (result) {
                            if (result !== null && result !== undefined) {
                                _this.materialFieldData = result.birePnDTO;
                                if (result.birePnDTO.averagePrice) {
                                    _this.materialFieldData.averagePrice = _this.convertAveragePrice(result.birePnDTO.averagePrice);
                                }
                                _this.enableEngieeringView();
                                _this.handleObjectStatus();
                                _this.loadMaterialUserWorkflow();
                                if (!!_this.materialFieldData.pnCode) {
                                    _this.materialFormService
                                        .findBirePnAttributesByPn(_this.materialFieldData.pnCode)
                                        .subscribe(function (attributesResults) {
                                        _this.dynamicAttributes.forEach(function (element) {
                                            element.attributes.forEach(function (attribute) {
                                                var attributeInResults = attributesResults.filter(function (res) { return res.attributeId === attribute.id; });
                                                if (attributeInResults.length === 1) {
                                                    attribute.value = attributeInResults[0].attributeValue;
                                                }
                                            });
                                        });
                                    });
                                }
                                _this.warehouseTable = [];
                                result.whareHouseTableDtos.forEach(function (obj) {
                                    _this.warehouseTable.push(_this.convertWarehouseDataToRow(obj));
                                });
                                _this.valuationTable = [];
                                result.bidtValuationDTOs.forEach(function (obj) {
                                    _this.valuationTable.push(_this.convertValuationDataToRow(obj));
                                });
                                _this.supplierTable = [];
                                result.bidtProductCustomerDTOs.forEach(function (obj) {
                                    _this.supplierTable.push(_this.convertSupplierDataToRow(obj));
                                });
                                _this.alternativeTable = result.bidtPnAlternativeDTOs || [];
                                _this.storageConditionValue = !!result.bidtProductScDTO.bidtStorageConditionId
                                    ? result.bidtProductScDTO.bidtStorageConditionId.toString()
                                    : undefined;
                                _this.containerTable = [];
                                result.bireContainerPnDTOs.forEach(function (obj) {
                                    var searchData;
                                    if (obj.containerPnCode === _this.materialFieldData.pnCode) {
                                        searchData = {
                                            pnCode: obj.contentPnCode
                                        };
                                    }
                                    else {
                                        searchData = {
                                            pnCode: obj.containerPnCode
                                        };
                                    }
                                    _this.materialFormService.getMaterialDetails(searchData).subscribe(function (matDetails) {
                                        if (matDetails) {
                                            _this.containerTable.push(_this.convertContainerDataToRow(matDetails.birePnDTO));
                                        }
                                    });
                                });
                                _this.supplyConversionTable = [];
                                result.bireSupplyConversionDTOs.forEach(function (obj) {
                                    _this.supplyConversionTable.push(_this.convertSupplyConversionDataToRow(obj));
                                });
                                _this.enableUnitOfIssue = _this.isUnitOfIssueInitialised(result);
                            }
                            else {
                                _super.prototype.throwUnboundLocalError.call(_this, 'loadMaterialDetailData', 'result');
                                _this.loadUserWorkflow(undefined);
                            }
                        }, function () {
                            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadMaterialData'));
                            _this.loadUserWorkflow(undefined);
                        });
                    }
                }
                else {
                    _this.loadUserWorkflow(undefined);
                }
            }
        });
    };
    MaterialFormComponent.prototype.getDynamicAttributesObservable = function (attributeCategory) {
        return this.materialFormService.findBireAttributesByCategory(attributeCategory);
    };
    MaterialFormComponent.prototype.loadMaterialUserWorkflow = function () {
        if (this.materialFieldData && this.propertyStatus) {
            var status_1 = this.materialFieldData.statusState;
            if (!this.propertyStatus.find(function (item) { return item.value === status_1; })) {
                // Non-functional status is ignored (legacy technical status)
                status_1 = undefined;
            }
            this.loadUserWorkflow(status_1);
        }
    };
    MaterialFormComponent.prototype.convertWarehouseDataToRow = function (obj) {
        var row = {
            siteName: obj.siteName,
            bidtSiteId: obj.bidtSiteId,
            wareHouseId: obj.wareHouseId,
            storageBins: !!obj.bidtStorageBinDTOList && obj.bidtStorageBinDTOList.length > 0
                ? this.getStorageBins(obj.bidtStorageBinDTOList)
                : '',
            wHName: obj.wHName,
            whPrHighThreshold: obj.whPrHighThreshold,
            whPrLowThreshold: obj.whPrLowThreshold,
            dataId: Math.random(),
            bidtStorageBinDTOList: obj.bidtStorageBinDTOList
        };
        return row;
    };
    MaterialFormComponent.prototype.getStorageBins = function (bidtStorageBinDTOList) {
        var sbin = '';
        bidtStorageBinDTOList.forEach(function (res) {
            if (!!res.sbNumber) {
                if (!!sbin) {
                    sbin = sbin + " / " + res.sbNumber;
                }
                else {
                    sbin = res.sbNumber;
                }
            }
        });
        return sbin;
    };
    MaterialFormComponent.prototype.convertAveragePrice = function (obj) {
        // convert the average price to 2 decimals
        var decimals = 1e2;
        var averagePriceFormatted = Math.round(obj * decimals) / decimals;
        return averagePriceFormatted;
    };
    MaterialFormComponent.prototype.convertValuationDataToRow = function (obj) {
        var formattedPrice = parseFloat(obj.priceValue).toFixed(2);
        var row = {
            bidtValuationGroupId: obj.bidtValuationGroupId,
            priceUnit: this.priceCurrency,
            priceValue: obj.priceValue,
            unitValueText: formattedPrice + " " + this.priceCurrency,
            valuationName: obj.valuationName
        };
        return row;
    };
    MaterialFormComponent.prototype.convertSupplierDataToRow = function (obj) {
        var formattedQuantity = parseFloat(obj.productQuantity).toFixed(0);
        var formattedPrice = parseFloat(obj.priceValue).toFixed(2);
        this.serviceType.forEach(function (type) {
            if (type.value === obj.serviceType) {
                obj.serviceType = type.label;
            }
        });
        var row = {
            bidoCustomerCustomerCode: obj.bidoCustomerCustomerCode,
            productQuantity: formattedQuantity,
            numberOfDays: obj.numberOfDays,
            priceValue: obj.priceValue,
            priceUnit: this.priceCurrency,
            supplierName: obj.supplierName,
            priceValueText: formattedPrice + " " + this.priceCurrency,
            id: obj.id,
            dataId: Math.random(),
            serviceType: obj.serviceType
        };
        return row;
    };
    MaterialFormComponent.prototype.convertContainerDataToRow = function (obj) {
        var row = {
            pnCode: obj.pnCode,
            articleDesignation: obj.articleDesignation,
            statusUser: obj.statusUser,
            statusDate: obj.statusDate,
            statusState: this._formatSelectOption.transform(obj.statusState, this.workflowStatus)
        };
        return row;
    };
    MaterialFormComponent.prototype.convertSupplyConversionDataToRow = function (obj) {
        obj.unit = this.unitOfIssueOptions[obj.unit - 1].label;
        obj.alternativeUnit = this.unitOfIssueOptions[obj.alternativeUnit - 1].label;
        var row = {
            pnCode: obj.pnCode,
            unit: obj.unit,
            alternativeUnit: obj.alternativeUnit,
            factor: obj.factor
        };
        return row;
    };
    MaterialFormComponent.prototype.openPartView = function (openMode) {
        var labelKey = 'transaction.PartNumberFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'PartNumberFormComponent',
            objectId: this.materialFieldData.pnCode,
            openMode: openMode
        };
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    MaterialFormComponent.prototype.openBussinerPartnerForm = function (objectId, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].ADM_BUSINESS_PARTNER_FORM,
            openMode: openMode
        };
        if (!!objectId && !!objectId.bidoCustomerCustomerCode) {
            var businessPartnerFormId = {
                customerCode: objectId.bidoCustomerCustomerCode
            };
            data.objectId = this.serializationService.serialize(businessPartnerFormId);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    MaterialFormComponent.prototype.openContainerPartView = function (selectedRow, openMode) {
        var labelKey = 'transaction.PartNumberFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'PartNumberFormComponent',
            objectId: selectedRow.pnCode,
            openMode: openMode
        };
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    /**************************************************************************
     * Warehouse Dialog
     *************************************************************************/
    MaterialFormComponent.prototype.addWarehouse = function () {
        this.currentWarehouse = undefined;
        this.warehouseDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Create;
        this.showWarehousePopup = true;
    };
    MaterialFormComponent.prototype.deleteWarehouse = function () {
        var _this = this;
        var partialMessageKey = this.selectedWarehouse.length > 1 ? 'confirmOnDeleteWarehouses' : 'confirmOnDeleteWarehouse';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.selectedWarehouse.forEach(function (selected) {
                    if (!!_this.warehouseTable) {
                        _this.warehouseTable = _this.warehouseTable.filter(function (warehouse) { return warehouse.dataId !== selected.dataId; });
                    }
                    else {
                        _super.prototype.throwUnboundLocalError.call(_this, 'deleteWarehouse', 'this.warehouseTable');
                    }
                });
                _this.selectedWarehouse = [];
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteWarehouse'));
            }
        });
    };
    MaterialFormComponent.prototype.editWarehouse = function () {
        var _this = this;
        this.currentWarehouse = __assign({}, this.selectedWarehouse[0]);
        if (!!this.currentWarehouse) {
            this.currentWarehouseIndex = this.warehouseTable.findIndex(function (warehouse) {
                return (!!warehouse.dataId &&
                    !!_this.selectedWarehouse[0].dataId &&
                    warehouse.dataId === _this.selectedWarehouse[0].dataId);
                //  return DTOUtils.equalsWarehouseTableDTO(warehouse, this.currentWarehouse);
            });
        }
        this.warehouseDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write;
        this.showWarehousePopup = true;
    };
    MaterialFormComponent.prototype.openWarehouse = function () {
        if (this.selectedWarehouse.length === 1) {
            this.currentWarehouse = this.selectedWarehouse[0];
            this.currentWarehouseIndex = -1;
            this.warehouseDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read;
            this.showWarehousePopup = true;
        }
    };
    MaterialFormComponent.prototype.onAddWarehouse = function (event) {
        var _this = this;
        if (!!event) {
            var warehouseAttribute_1 = {
                siteName: event.siteName,
                bidtSiteId: event.bidtSiteId,
                wareHouseId: event.wareHouseId,
                wHName: event.wHName,
                whPrHighThreshold: event.whPrHighThreshold,
                whPrLowThreshold: event.whPrLowThreshold,
                dataId: Math.random(),
                bidtStorageBinDTOList: event.bidtStorageBinDTOList
            };
            if (!!event.bidtStorageBinDTOList &&
                event.bidtStorageBinDTOList.length > 0 &&
                !!event.bidtStorageBinDTOList[0].bidtWarehouseId) {
                this.materialFormService
                    .findByWarehouseId(event.bidtStorageBinDTOList[0].bidtWarehouseId)
                    .subscribe(function (result) {
                    if (!!result && !!result.list && result.list.length > 0) {
                        var sbin_1 = '';
                        result.list.forEach(function (res) {
                            event.bidtStorageBinDTOList.forEach(function (r) {
                                if (r.id === res.id) {
                                    if (!!res.sbNumber) {
                                        if (!!sbin_1) {
                                            sbin_1 = sbin_1 + " / " + res.sbNumber;
                                        }
                                        else {
                                            sbin_1 = res.sbNumber;
                                        }
                                    }
                                }
                            });
                        });
                        warehouseAttribute_1.storageBins = sbin_1;
                        if (_this.warehouseDialogOpenMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write) {
                            _this.warehouseTable[_this.currentWarehouseIndex] = warehouseAttribute_1;
                        }
                        else {
                            _this.warehouseTable = __spread(_this.warehouseTable, [warehouseAttribute_1]);
                        }
                    }
                });
            }
            else {
                if (this.warehouseDialogOpenMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write) {
                    this.warehouseTable[this.currentWarehouseIndex] = warehouseAttribute_1;
                }
                else {
                    this.warehouseTable = __spread(this.warehouseTable, [warehouseAttribute_1]);
                }
            }
        }
        this.selectedWarehouse = [];
    };
    MaterialFormComponent.prototype.goToStockStatus = function () {
        if (this.selectedWarehouse.length === 1) {
            var stockStatus = {
                pnCode: this.materialFieldData.pnCode,
                stockOwnerCode: '',
                warehouseId: this.selectedWarehouse[0].wareHouseId,
                siteId: this.selectedWarehouse[0].bidtSiteId,
                startDate: new Date(),
                endDate: new Date()
            };
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_STOCK_STATUS_SEARCH,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read,
                objectId: this.serializationService.serialize(stockStatus)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
        // }
    };
    MaterialFormComponent.prototype.openStatusUpdatesPopup = function () {
        this.pnStatus = __assign({}, this.materialFieldData);
        this.showStatusUpdatesPopup = true;
        var columns = [
            { field: 'date', alignment: 'center', width: '150px', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_12__["TableColumnFilterMode"].Input },
            { field: 'author', alignment: 'center', width: '150px', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_12__["TableColumnFilterMode"].Input },
            { field: 'action', alignment: 'center', width: '150px', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_12__["TableColumnFilterMode"].Input },
            { field: 'status', alignment: 'center', width: '150px', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_12__["TableColumnFilterMode"].Input },
            { field: 'articleDesignation', alignment: 'center', width: '150px', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_12__["TableColumnFilterMode"].Input },
            { field: 'pnType', alignment: 'center', width: '150px', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_12__["TableColumnFilterMode"].Input },
            { field: 'quantityUnit', alignment: 'center', width: '150px', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_12__["TableColumnFilterMode"].Input },
            { field: 'traceability', alignment: 'center', width: '150px', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_12__["TableColumnFilterMode"].Input },
            { field: 'expirationDuration', alignment: 'center', width: '150px', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_12__["TableColumnFilterMode"].Input },
            { field: 'expirationUnit', alignment: 'center', width: '150px', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_12__["TableColumnFilterMode"].Input },
            { field: 'expirationThreshold', alignment: 'center', width: '150px', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_12__["TableColumnFilterMode"].Input },
            {
                field: 'expirationThresholdUnit',
                alignment: 'center',
                width: '150px',
                filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_12__["TableColumnFilterMode"].Input
            },
            { field: 'sparePartClass', alignment: 'center', width: '200px', filterMode: _shared_enums_table_column_filter_mode_enum__WEBPACK_IMPORTED_MODULE_12__["TableColumnFilterMode"].Input }
        ];
        this.updatesKeyMap.set('status', Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.partNumberStatus));
        if (!!this.materialFieldData.sparePartClassCode) {
            this.updatesKeyMap.set('sparePartClass', Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.sparePartClassOptions));
        }
        if (this.materialFieldData.pnCode) {
            this.tableStatusUpdatesData = {
                componentId: 'MaterialFormComponent.historicPopup',
                tableCols: columns,
                tableRows: this.updateHistoricService.findBirePnHistoric({
                    pnCode: this.materialFieldData.pnCode
                }),
                dataKey: undefined,
                selectionMode: _shared_enums_table_selection_mode_enum__WEBPACK_IMPORTED_MODULE_13__["TableSelectionMode"].Multiple,
                globalFilter: false
            };
        }
    };
    /**************************************************************************
     * Valuation Dialog
     *************************************************************************/
    MaterialFormComponent.prototype.addValuation = function () {
        this.currentValuation = undefined;
        this.valuationDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Create;
        this.showValuationPopup = true;
    };
    MaterialFormComponent.prototype.deleteValuation = function () {
        var _this = this;
        var partialMessageKey = this.selectedWarehouse.length > 1 ? 'confirmOnDeleteValuations' : 'confirmOnDeleteValuation';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.selectedValuation.forEach(function (selected) {
                    if (!!_this.valuationTable) {
                        _this.valuationTable = _this.valuationTable.filter(function (valuation) { return valuation.bidtValuationGroupId !== selected.bidtValuationGroupId; });
                    }
                    else {
                        _super.prototype.throwUnboundLocalError.call(_this, 'deleteValuation', 'this.valuationTable');
                    }
                });
                _this.selectedValuation = [];
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteValuation'));
            }
        });
    };
    MaterialFormComponent.prototype.editValuation = function () {
        var _this = this;
        this.currentValuation = __assign({}, this.selectedValuation[0]);
        if (!!this.currentValuation) {
            this.currentValuationIndex = this.valuationTable.findIndex(function (valuation) {
                return (!!valuation.bidtValuationGroupId &&
                    !!_this.selectedValuation[0].bidtValuationGroupId &&
                    valuation.bidtValuationGroupId === _this.selectedValuation[0].bidtValuationGroupId);
            });
        }
        this.valuationDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write;
        this.showValuationPopup = true;
    };
    MaterialFormComponent.prototype.openValuation = function () {
        if (this.selectedValuation.length === 1) {
            this.currentValuation = this.selectedValuation[0];
            this.currentValuationIndex = -1;
            this.valuationDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read;
            this.showValuationPopup = true;
        }
    };
    MaterialFormComponent.prototype.onAddValuation = function (event) {
        var _this = this;
        if (!!event) {
            var valuationAttribute_1 = {
                valuationName: event.valuationName,
                priceUnit: event.priceUnit,
                unitValueText: event.priceValue + " " + event.priceUnit,
                bidtValuationGroupId: event.bidtValuationGroupId,
                priceValue: event.priceValue
            };
            var isAdded = this.valuationTable.some(function (valuationData) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__["DTOUtils"].equalsValuationTableDTO(valuationAttribute_1, valuationData);
            });
            if (this.valuationDialogOpenMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write) {
                var checkElement = this.valuationTable.filter(function (valuationData, index) {
                    return (index !== _this.currentValuationIndex &&
                        valuationData.bidtValuationGroupId === valuationAttribute_1.bidtValuationGroupId);
                });
                if (checkElement.length === 0) {
                    this.valuationTable[this.currentValuationIndex] = valuationAttribute_1;
                }
                else {
                    this.messageService.showWarningMessage(this.getTranslateKey('warningOnValuationExists'));
                }
            }
            else {
                if (isAdded) {
                    this.messageService.showWarningMessage(this.getTranslateKey('warningOnValuationExists'));
                }
                else {
                    this.valuationTable = __spread(this.valuationTable, [valuationAttribute_1]);
                }
            }
        }
        this.selectedValuation = [];
    };
    /**************************************************************************
     * Supplier Dialog
     *************************************************************************/
    MaterialFormComponent.prototype.addSupplier = function () {
        this.currentSupplier = undefined;
        this.supplierDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Create;
        this.showSupplierPopup = true;
    };
    MaterialFormComponent.prototype.deleteSupplier = function () {
        var _this = this;
        var partialMessageKey = this.selectedSuppliers.length > 1 ? 'confirmOnDeleteSuppliers' : 'confirmOnDeleteSupplier';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.selectedSuppliers.forEach(function (selected) {
                    if (!!_this.supplierTable) {
                        _this.supplierTable = _this.supplierTable.filter(function (supplier) { return supplier.dataId !== selected.dataId; });
                    }
                    else {
                        _super.prototype.throwUnboundLocalError.call(_this, 'deleteSupplier', 'this.supplierTable');
                    }
                });
                _this.selectedSuppliers = [];
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteSupplier'));
            }
        });
    };
    MaterialFormComponent.prototype.editSupplier = function () {
        var _this = this;
        this.currentSupplier = __assign({}, this.selectedSuppliers[0]);
        if (!!this.currentSupplier) {
            this.currentSupplierIndex = this.supplierTable.findIndex(function (supplier) {
                return (!!supplier.dataId &&
                    !!_this.selectedSuppliers[0].dataId &&
                    supplier.dataId === _this.selectedSuppliers[0].dataId);
            });
        }
        this.supplierDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write;
        this.showSupplierPopup = true;
    };
    MaterialFormComponent.prototype.openSupplier = function () {
        if (this.selectedSuppliers.length === 1) {
            // { ...this.selectedSuppliers[0] } allows to keep the correct displayed form of ServiceType in supplier table
            this.currentSupplier = __assign({}, this.selectedSuppliers[0]);
            this.currentSupplierIndex = -1;
            this.supplierDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read;
            this.showSupplierPopup = true;
        }
    };
    MaterialFormComponent.prototype.onAddSupplier = function (event) {
        if (!!event) {
            this.serviceType.forEach(function (type) {
                if (type.value === event.serviceType) {
                    event.serviceType = type.label;
                }
            });
            var supplierAttribute = {
                supplierName: event.supplierName,
                priceUnit: event.priceUnit,
                priceValueText: event.priceValue + " " + event.priceUnit,
                bidoCustomerCustomerCode: event.bidoCustomerCustomerCode,
                priceValue: event.priceValue,
                numberOfDays: event.numberOfDays,
                productQuantity: event.productQuantity,
                dataId: Math.random(),
                serviceType: event.serviceType
            };
            if (this.supplierDialogOpenMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write) {
                this.supplierTable[this.currentSupplierIndex] = supplierAttribute;
            }
            else {
                this.supplierTable = __spread(this.supplierTable, [supplierAttribute]);
            }
        }
        this.selectedSuppliers = [];
    };
    /**************************************************************************
     * Alternative Dialog
     *************************************************************************/
    MaterialFormComponent.prototype.addAlternative = function () {
        this.currentAlternative = undefined;
        this.alternativeDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Create;
        this.showAlternativePopup = true;
    };
    MaterialFormComponent.prototype.deleteAlternative = function () {
        var _this = this;
        var partialMessageKey = this.selectedAlternatives.length > 1 ? 'confirmOnDeleteAlternatives' : 'confirmOnDeleteAlternative';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.selectedAlternatives.forEach(function (selected) {
                    if (!!_this.alternativeTable) {
                        _this.alternativeTable = _this.alternativeTable.filter(function (alternative) {
                            return alternative.birePnByFkBidtPnBidtPn2BirePnPnCode !== selected.birePnByFkBidtPnBidtPn2BirePnPnCode;
                        });
                    }
                    else {
                        _super.prototype.throwUnboundLocalError.call(_this, 'deleteAlternative', 'this.alternativeTable');
                    }
                });
                _this.selectedAlternatives = [];
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteAlternative'));
            }
        });
    };
    MaterialFormComponent.prototype.editAlternative = function () {
        var _this = this;
        this.currentAlternative = __assign({}, this.selectedAlternatives[0]);
        if (!!this.currentAlternative) {
            this.currentAlternativeIndex = this.alternativeTable.findIndex(function (alternative) {
                return (!!alternative.birePnByFkBidtPnBidtPn2BirePnPnCode &&
                    !!_this.selectedAlternatives[0].birePnByFkBidtPnBidtPn2BirePnPnCode &&
                    alternative.birePnByFkBidtPnBidtPn2BirePnPnCode ===
                        _this.selectedAlternatives[0].birePnByFkBidtPnBidtPn2BirePnPnCode);
            });
        }
        this.alternativeDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write;
        this.showAlternativePopup = true;
    };
    MaterialFormComponent.prototype.openAlternative = function () {
        if (this.selectedAlternatives.length === 1) {
            this.currentAlternative = this.selectedAlternatives[0];
            this.currentAlternativeIndex = -1;
            this.alternativeDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read;
            this.showAlternativePopup = true;
        }
    };
    MaterialFormComponent.prototype.onAddAlternative = function (event) {
        var _this = this;
        if (!!event) {
            var alternativeAttribute_1 = {
                birePnByFkBidtPnBidtPn1BirePnPnCode: this.materialFieldData.pnCode,
                birePnByFkBidtPnBidtPn2BirePnPnCode: event.birePnByFkBidtPnBidtPn2BirePnPnCode,
                alternativeType: event.alternativeType ? event.alternativeType : undefined,
                alternativeComment: event.alternativeComment ? event.alternativeComment : '',
                nameOfInterchangebilty: event.nameOfInterchangebilty ? event.nameOfInterchangebilty : ''
            };
            var isAdded = this.alternativeTable.some(function (alternativeData) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__["DTOUtils"].equalsAlternativeTableDTO(alternativeAttribute_1, alternativeData);
            });
            if (this.alternativeDialogOpenMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write) {
                var checkElement = this.alternativeTable.filter(function (alternativeData, index) {
                    return (index !== _this.currentAlternativeIndex &&
                        alternativeData.birePnByFkBidtPnBidtPn2BirePnPnCode ===
                            alternativeAttribute_1.birePnByFkBidtPnBidtPn2BirePnPnCode);
                });
                if (checkElement.length === 0) {
                    this.alternativeTable[this.currentAlternativeIndex] = alternativeAttribute_1;
                }
                else {
                    this.messageService.showWarningMessage(this.getTranslateKey('warningOnAlternativeExists'));
                }
            }
            else {
                if (isAdded) {
                    this.messageService.showWarningMessage(this.getTranslateKey('warningOnAlternativeExists'));
                }
                else {
                    this.alternativeTable = __spread(this.alternativeTable, [alternativeAttribute_1]);
                }
            }
        }
        this.selectedAlternatives = [];
    };
    /**************************************************************************
     * Container Dialog
     *************************************************************************/
    MaterialFormComponent.prototype.addContainer = function () {
        this.currentContainer = undefined;
        this.containerDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Create;
        this.showContainerPopup = true;
    };
    MaterialFormComponent.prototype.deleteContainer = function () {
        var _this = this;
        var partialMessageKey = this.selectedContainer.length > 1 ? 'confirmOnDeleteContainerPns' : 'confirmOnDeleteContainerPn';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.selectedContainer.forEach(function (selected) {
                    if (!!_this.containerTable) {
                        _this.containerTable = _this.containerTable.filter(function (container) { return container.pnCode !== selected.pnCode; });
                    }
                    else {
                        _super.prototype.throwUnboundLocalError.call(_this, 'deleteContainer', 'this.containerTable');
                    }
                });
                _this.selectedContainer = [];
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteContainerPn'));
            }
        });
    };
    MaterialFormComponent.prototype.editContainer = function () {
        var _this = this;
        this.currentContainer = __assign({}, this.selectedContainer[0]);
        if (!!this.currentContainer) {
            this.currentContainerIndex = this.containerTable.findIndex(function (container) {
                return (!!container.pnCode &&
                    !!_this.selectedContainer[0].pnCode &&
                    container.pnCode === _this.selectedContainer[0].pnCode);
            });
        }
        this.containerDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write;
        this.showContainerPopup = true;
    };
    MaterialFormComponent.prototype.openContainer = function () {
        if (this.selectedContainer.length === 1) {
            this.currentContainer = this.selectedContainer[0];
            this.currentContainerIndex = -1;
            this.containerDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read;
            this.showContainerPopup = true;
        }
    };
    MaterialFormComponent.prototype.onAddContainer = function (event) {
        if (!!event) {
            var containerAttribute_1 = {
                pnCode: event.pnCode,
                articleDesignation: event.articleDesignation
            };
            var isAdded = this.containerTable.some(function (containerData) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__["DTOUtils"].equalsContainerTableDTO(containerAttribute_1, containerData);
            });
            if (this.containerDialogOpenMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write) {
                this.containerTable[this.currentContainerIndex] = containerAttribute_1;
            }
            else {
                if (isAdded) {
                    this.messageService.showWarningMessage(this.getTranslateKey('warningOnContainerExists'));
                }
                else {
                    this.containerTable = __spread(this.containerTable, [containerAttribute_1]);
                }
            }
        }
        this.selectedContainer = [];
    };
    /**************************************************************************
     * Supply Conversion Dialog
     *************************************************************************/
    MaterialFormComponent.prototype.addSupplyConversion = function () {
        this.currentSupplyConversion = undefined;
        this.supplyConversionDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Create;
        this.showSupplyConversionPopup = true;
    };
    MaterialFormComponent.prototype.deleteSupplyConversion = function () {
        var _this = this;
        var partialMessageKey = this.selectedSupplyConversion.length > 1 ? 'confirmOnDeleteSupplyConversions' : 'confirmOnDeleteSupplyConversion';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.selectedSupplyConversion.forEach(function (selected) {
                    if (!!_this.supplyConversionTable) {
                        _this.supplyConversionTable = _this.supplyConversionTable.filter(function (supplyConversion) { return supplyConversion.alternativeUnit !== selected.alternativeUnit; });
                    }
                    else {
                        _super.prototype.throwUnboundLocalError.call(_this, 'deleteSupplyConversion', 'this.supplyConversionTable');
                    }
                });
                _this.selectedSupplyConversion = [];
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteSupplyConversion'));
            }
        });
    };
    MaterialFormComponent.prototype.editSupplyConversion = function () {
        var _this = this;
        this.currentSupplyConversion = __assign({}, this.selectedSupplyConversion[0]);
        if (!!this.currentSupplyConversion) {
            this.currentSupplyConversionIndex = this.supplyConversionTable.findIndex(function (supplyConversion) {
                return (!!supplyConversion.pnCode &&
                    !!_this.selectedSupplyConversion[0].pnCode &&
                    supplyConversion.pnCode === _this.selectedSupplyConversion[0].pnCode);
            });
        }
        this.supplyConversionDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write;
        this.showSupplyConversionPopup = true;
    };
    MaterialFormComponent.prototype.openSupplyConversion = function () {
        if (this.selectedSupplyConversion.length === 1) {
            this.currentSupplyConversion = this.selectedSupplyConversion[0];
            this.currentSupplyConversionIndex = -1;
            this.supplyConversionDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read;
            this.showSupplyConversionPopup = true;
        }
    };
    MaterialFormComponent.prototype.onAddSupplyConversion = function (event) {
        if (!!event) {
            var supplyConversionAttribute_1 = {
                pnCode: event.pnCode,
                unit: event.unit,
                alternativeUnit: event.alternativeUnit,
                factor: event.factor
            };
            var isAdded = this.supplyConversionTable.some(function (supplyConversionData) {
                return _shared_utils_dto_utils__WEBPACK_IMPORTED_MODULE_25__["DTOUtils"].equalsSupplyConversionTableDTO(supplyConversionAttribute_1, supplyConversionData);
            });
            if (this.supplyConversionDialogOpenMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Write) {
                this.supplyConversionTable[this.currentSupplyConversionIndex] = supplyConversionAttribute_1;
            }
            else {
                if (isAdded) {
                    this.messageService.showWarningMessage(this.getTranslateKey('warningOnSupplyConversionExists'));
                }
                else {
                    this.supplyConversionTable = __spread(this.supplyConversionTable, [supplyConversionAttribute_1]);
                }
            }
        }
        this.selectedSupplyConversion = [];
    };
    MaterialFormComponent.prototype.loadUnitOfIssueOptions = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__["GenericPropertyConstants"].UNIT_OF_ISSUE_MAP).subscribe(function (results) {
            _this.unitOfIssueOptions = results;
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetPartGuidelineTypes'));
        });
    };
    MaterialFormComponent.prototype.showCreateProcurementDialog = function () {
        this.createProcurementDialogVisible = true;
    };
    MaterialFormComponent.prototype.onCreateProcurementRequest = function (procurementRequest) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_9__["ComponentConstants"].LOG_PROCUREMENT_REQUEST_FORM,
            objectId: this.serializationService.serialize({ id: procurementRequest.id }),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_11__["ComponentOpenMode"].Read
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    MaterialFormComponent.prototype.showStatus = function () {
        var _this = this;
        if (!this.isCreateOpenMode) {
            var overlayRef = this._overlayService.openWithPositionCenter({
                content: _object_status_object_status_component__WEBPACK_IMPORTED_MODULE_28__["ObjectStatusComponent"],
                data: {
                    currentAuthor: this.materialFieldData.statusUser,
                    currentDate: this.materialFieldData.statusDate,
                    currentStatus: {
                        label: this._formatSelectOption.transform(this.materialFieldData.statusState, this.workflowStatus),
                        value: this.materialFieldData.statusState
                    },
                    nextStatuses: this.workflowStatus
                }
            });
            overlayRef.afterClosed$.subscribe({
                next: function (event) {
                    if (event.data) {
                        var currentState = _this.materialFieldData.statusState;
                        _this.materialFieldData.statusState = event.data;
                        var saved = _this.saveMaterial();
                        if (!saved) {
                            // Revert status change if save not launched
                            _this.materialFieldData.statusState = currentState;
                        }
                    }
                }
            });
        }
    };
    MaterialFormComponent.prototype.loadSparePartClassDropdown = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__["GenericPropertyConstants"].SPARE_PART_CLASS_CODE).subscribe(function (results) {
            _this.sparePartClassOptions = results;
        });
    };
    MaterialFormComponent.prototype.isMaterialContainer = function () {
        return this.materialFieldData.pnType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_7__["AWPropertiesConstants"].PN_TYPE_BOX_KEY;
    };
    MaterialFormComponent.prototype.isUnitOfIssueInitialised = function (result) {
        return !!result.birePnDTO.unitOfIssue;
    };
    MaterialFormComponent.prototype.loadServiceType = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_10__["GenericPropertyConstants"].MM_SERVICE_TYPE_MAP).subscribe(function (results) {
            _this.serviceType = results;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mainAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MaterialFormComponent.prototype, "mainAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('warhouseAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MaterialFormComponent.prototype, "warhouseAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('valuationAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MaterialFormComponent.prototype, "valuationAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('customerEvolutionTableAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MaterialFormComponent.prototype, "customerEvolutionTableAnchor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('alternativeAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MaterialFormComponent.prototype, "alternativeAnchor", void 0);
    MaterialFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-material-form',
            template: __webpack_require__(/*! ./material-form.component.html */ "./src/app/main/logistics/material/form/material-form.component.html"),
            styles: [__webpack_require__(/*! ./material-form.component.scss */ "./src/app/main/logistics/material/form/material-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_16__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_18__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_19__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_21__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_22__["TabService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_5__["PageTocService"],
            _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_17__["InputValidationService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_components_dynamic_attributes_dynamic_attributes_service__WEBPACK_IMPORTED_MODULE_6__["DynamicAttributesService"],
            _material_form_service__WEBPACK_IMPORTED_MODULE_30__["MaterialFormService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmationService"],
            _shared_services_update_historic_service__WEBPACK_IMPORTED_MODULE_23__["UpdateHistoricService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_20__["PropertiesService"],
            _shared_api_update_historic_api__WEBPACK_IMPORTED_MODULE_4__["UpdateHistoricApi"],
            _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_29__["OverlayService"],
            _shared_pipes_format_select_option_pipe__WEBPACK_IMPORTED_MODULE_14__["FormatSelectOptionPipe"]])
    ], MaterialFormComponent);
    return MaterialFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_24__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/material/form/popups/assign-alternative-popup-form/assign-alternative-popup-form.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/popups/assign-alternative-popup-form/assign-alternative-popup-form.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".material\" | translate }}</label>\r\n\r\n      <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n        <div class=\"form-control-data\" (click)=\"quickSearchMaterial()\">\r\n          {{ alternativeDetail.birePnByFkBidtPnBidtPn2BirePnPnCode }}\r\n        </div>\r\n\r\n        <div *ngIf=\"alternativeDetail.birePnByFkBidtPnBidtPn2BirePnPnCode\" class=\"btn-clear-wrapper\">\r\n          <i\r\n            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n            aria-hidden=\"true\"\r\n            (click)=\"resetMaterials()\"\r\n          ></i>\r\n        </div>\r\n        <div class=\"btn-search-wrapper\">\r\n          <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\" (click)=\"quickSearchMaterial()\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".interchangeability\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [options]=\"interchangeability\"\r\n          appendTo=\"body\"\r\n          [(ngModel)]=\"alternativeDetail.alternativeType\"\r\n          [showClear]=\"true\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".comment\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <textarea\r\n          class=\"aw-textarea\"\r\n          [rows]=\"3\"\r\n          pInputTextarea\r\n          maxlength=\"300\"\r\n          autoResize=\"autoResize\"\r\n          [(ngModel)]=\"alternativeDetail.alternativeComment\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"cancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      color=\"primary\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"validate()\"\r\n      [disabled]=\"!isScreenValid()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"cancel()\">\r\n      {{ \"global.close\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-material\r\n  *ngIf=\"showQuickSearchMaterialPopup\"\r\n  [(display)]=\"showQuickSearchMaterialPopup\"\r\n  [material-code]=\"alternativeDetail.birePnByFkBidtPnBidtPn2BirePnPnCode\"\r\n  (onSelected)=\"setSelectedMaterial($event)\"\r\n></aw-dialog-search-material>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/material/form/popups/assign-alternative-popup-form/assign-alternative-popup-form.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/popups/assign-alternative-popup-form/assign-alternative-popup-form.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: AssignAlternativesPopupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignAlternativesPopupFormComponent", function() { return AssignAlternativesPopupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _material_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../material-form.service */ "./src/app/main/logistics/material/form/material-form.service.ts");
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








var AssignAlternativesPopupFormComponent = /** @class */ (function (_super) {
    __extends(AssignAlternativesPopupFormComponent, _super);
    function AssignAlternativesPopupFormComponent(messageService, sessionService, propertiesService, materialFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'AssignAlternativesPopupFormComponent') || this;
        _this.messageService = messageService;
        _this.sessionService = sessionService;
        _this.propertiesService = propertiesService;
        _this.materialFormService = materialFormService;
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.showQuickSearchMaterialPopup = false;
        _this.searchObject = {};
        _this.loadDropDown();
        return _this;
    }
    AssignAlternativesPopupFormComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
        if (!this.alternativeDetail) {
            this.resetMaterials();
        }
    };
    AssignAlternativesPopupFormComponent.prototype.getTypeName = function () {
        return 'AssignAlternativesPopupFormComponent';
    };
    AssignAlternativesPopupFormComponent.prototype.cancel = function () {
        this.display = false;
    };
    AssignAlternativesPopupFormComponent.prototype.loadDropDown = function () {
        var _this = this;
        this.propertiesService.getValue('getPnInterchangeabilityMap').subscribe(function (results) {
            _this.interchangeability = !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_6__["SelectItemUtils"].fromLabelValues(results) : [];
        });
    };
    AssignAlternativesPopupFormComponent.prototype.resetMaterials = function () {
        this.alternativeDetail = {};
    };
    AssignAlternativesPopupFormComponent.prototype.quickSearchMaterial = function () {
        this.searchObject = {
            pnCode: this.alternativeDetail.birePnByFkBidtPnBidtPn2BirePnPnCode
        };
        this.showQuickSearchMaterialPopup = true;
    };
    AssignAlternativesPopupFormComponent.prototype.validate = function () {
        var _this = this;
        if (this.alternativeDetail) {
            this.alternativeDetail.nameOfInterchangebilty = '';
            this.interchangeability.forEach(function (res) {
                if (!!_this.alternativeDetail && _this.alternativeDetail.alternativeType === res.value) {
                    _this.alternativeDetail.nameOfInterchangebilty = res.label;
                }
            });
            if (this.pnCode === this.alternativeDetail.birePnByFkBidtPnBidtPn2BirePnPnCode) {
                this.messageService.showWarningMessage(this.getTranslateKey('sameAlternativeError'));
            }
            else {
                this.onValidated.emit(this.alternativeDetail);
            }
        }
        this.cancel();
    };
    AssignAlternativesPopupFormComponent.prototype.isScreenValid = function () {
        if (this.alternativeDetail && this.alternativeDetail.birePnByFkBidtPnBidtPn2BirePnPnCode) {
            return true;
        }
        return false;
    };
    /*************************************************************************
     * Dialog Search Material
     *************************************************************************/
    AssignAlternativesPopupFormComponent.prototype.setSelectedMaterial = function (event) {
        if (!!this.alternativeDetail) {
            if (Object.keys(event).length === 0) {
                this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
            }
            this.alternativeDetail.birePnByFkBidtPnBidtPn2BirePnPnCode = event.pnCode;
        }
        else {
            _super.prototype.throwUnboundLocalError.call(this, 'setSelectedContact', 'this.contact');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AssignAlternativesPopupFormComponent.prototype, "onValidated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AssignAlternativesPopupFormComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AssignAlternativesPopupFormComponent.prototype, "alternativeDetail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AssignAlternativesPopupFormComponent.prototype, "pnCode", void 0);
    AssignAlternativesPopupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-assign-alternative-popup-form',
            template: __webpack_require__(/*! ./assign-alternative-popup-form.component.html */ "./src/app/main/logistics/material/form/popups/assign-alternative-popup-form/assign-alternative-popup-form.component.html"),
            styles: [__webpack_require__(/*! ../popup-form.component.scss */ "./src/app/main/logistics/material/form/popups/popup-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_3__["PropertiesService"],
            _material_form_service__WEBPACK_IMPORTED_MODULE_7__["MaterialFormService"]])
    ], AssignAlternativesPopupFormComponent);
    return AssignAlternativesPopupFormComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/material/form/popups/assign-container-popup-form/assign-container-popup-form.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/popups/assign-container-popup-form/assign-container-popup-form.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".code\" | translate }}</label>\r\n\r\n        <div class=\"form-control form-control-with-modal\">\r\n          <div [ngClass]=\"{ 'form-control-data': !isReadOpenMode }\" (click)=\"isReadOpenMode ? '' : searchPNCode()\">\r\n            {{ containerDetail.pnCode }}\r\n          </div>\r\n          <div *ngIf=\"!isReadOpenMode\" class=\"btn-search-wrapper\">\r\n            <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\" (click)=\"searchPNCode()\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"isReadOpenMode\" class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".statusUser\" | translate }}</label>\r\n\r\n        <div class=\"form-control form-control-with-modal\">\r\n          <input type=\"text\" class=\"aw-input\" [disabled]=\"true\" [(ngModel)]=\"containerDetail.statusUser\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"isReadOpenMode\" class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".statusDate\" | translate }}</label>\r\n\r\n        <div class=\"form-control form-control-with-modal\">\r\n          <input type=\"text\" class=\"aw-input\" [disabled]=\"true\" [(ngModel)]=\"goodFormattedDate\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"isReadOpenMode\" class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".statusState\" | translate }}</label>\r\n\r\n        <div class=\"form-control form-control-with-modal\">\r\n          <input type=\"text\" class=\"aw-input\" [disabled]=\"true\" [(ngModel)]=\"containerDetail.statusState\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"cancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      (click)=\"validate()\"\r\n      [disabled]=\"!isScreenValid()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"cancel()\">\r\n      {{ \"global.close\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-material\r\n  *ngIf=\"showSearchPartDialog\"\r\n  [(display)]=\"showSearchPartDialog\"\r\n  (onSelected)=\"setSelectedPnCode($event)\"\r\n  [pnType]=\"containerDetail.pnType\"\r\n></aw-dialog-search-material>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/material/form/popups/assign-container-popup-form/assign-container-popup-form.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/popups/assign-container-popup-form/assign-container-popup-form.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: AssignContainerPopupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignContainerPopupFormComponent", function() { return AssignContainerPopupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/input-validation.service */ "./src/app/shared/services/input-validation.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _material_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../material-form.service */ "./src/app/main/logistics/material/form/material-form.service.ts");
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










var AssignContainerPopupFormComponent = /** @class */ (function (_super) {
    __extends(AssignContainerPopupFormComponent, _super);
    function AssignContainerPopupFormComponent(inputValidationService, messageService, sessionService, propertiesService, materialFormService, _dateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Read, 'AssignContainerPopupFormComponent') || this;
        _this.inputValidationService = inputValidationService;
        _this.messageService = messageService;
        _this.sessionService = sessionService;
        _this.propertiesService = propertiesService;
        _this.materialFormService = materialFormService;
        _this._dateService = _dateService;
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.showSearchPartDialog = false;
        return _this;
    }
    AssignContainerPopupFormComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
        if (!this.containerDetail) {
            this.containerDetail = {};
        }
        else {
            this.goodFormattedDate = this._dateService.dateToString(this.containerDetail.statusDate);
        }
        if (this.pnType === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].PN_TYPE_BOX_KEY) {
            this.containerDetail.pnType = '';
        }
        else {
            this.containerDetail.pnType = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].PN_TYPE_BOX_KEY;
        }
    };
    AssignContainerPopupFormComponent.prototype.getTypeName = function () {
        return 'AssignContainerPopupFormComponent';
    };
    AssignContainerPopupFormComponent.prototype.cancel = function () {
        this.display = false;
    };
    AssignContainerPopupFormComponent.prototype.validate = function () {
        if (!!this.containerDetail.pnCode) {
            this.onValidated.emit(this.containerDetail);
        }
        this.cancel();
    };
    AssignContainerPopupFormComponent.prototype.isScreenValid = function () {
        if (!!this.containerDetail.pnCode) {
            return true;
        }
        return false;
    };
    AssignContainerPopupFormComponent.prototype.searchPNCode = function () {
        this.showSearchPartDialog = true;
    };
    AssignContainerPopupFormComponent.prototype.setSelectedPnCode = function (selectedObject) {
        if (selectedObject) {
            this.containerDetail = selectedObject;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AssignContainerPopupFormComponent.prototype, "containerDetail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AssignContainerPopupFormComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AssignContainerPopupFormComponent.prototype, "pnType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AssignContainerPopupFormComponent.prototype, "onValidated", void 0);
    AssignContainerPopupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-assign-container-popup-form',
            template: __webpack_require__(/*! ./assign-container-popup-form.component.html */ "./src/app/main/logistics/material/form/popups/assign-container-popup-form/assign-container-popup-form.component.html"),
            styles: [__webpack_require__(/*! ../popup-form.component.scss */ "./src/app/main/logistics/material/form/popups/popup-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_4__["InputValidationService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_6__["PropertiesService"],
            _material_form_service__WEBPACK_IMPORTED_MODULE_9__["MaterialFormService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]])
    ], AssignContainerPopupFormComponent);
    return AssignContainerPopupFormComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/material/form/popups/assign-supplier-popup-form/assign-supplier-popup-form.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/popups/assign-supplier-popup-form/assign-supplier-popup-form.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\n  <a-header>\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\n  </a-header>\n\n  <a-content>\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\n      <label class=\"form-label\">{{ getComponentName() + \".supplier\" | translate }}</label>\n\n      <div class=\"form-control\">\n        <p-dropdown\n          class=\"aw-dropdown fixed-width\"\n          placeholder=\"&nbsp;\"\n          [options]=\"supplier\"\n          [(ngModel)]=\"supplierDetail.bidoCustomerCustomerCode\"\n          [showClear]=\"true\"\n          appendTo=\"body\"\n          [disabled]=\"isReadOpenMode\"\n        ></p-dropdown>\n      </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\n      <label class=\"form-label\">{{ getComponentName() + \".delay\" | translate }}</label>\n\n      <div class=\"form-control\">\n        <input\n          #numberOfDays=\"ngModel\"\n          type=\"text\"\n          class=\"aw-input\"\n          [pKeyFilter]=\"inputValidationService.validatorOfNumber()\"\n          [pValidateOnly]=\"true\"\n          maxlength=\"10\"\n          [(ngModel)]=\"supplierDetail.numberOfDays\"\n          [disabled]=\"isReadOpenMode\"\n        />\n        <p-message\n          *ngIf=\"numberOfDays.invalid && (numberOfDays.dirty || numberOfDays.touched)\"\n          severity=\"error\"\n          [text]=\"inputValidationService.formatOfNumber()\"\n        ></p-message>\n      </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\n      <label class=\"form-label\">{{ getComponentName() + \".quantity\" | translate }}</label>\n\n      <div class=\"form-control\">\n        <input\n          #productQuantity=\"ngModel\"\n          type=\"text\"\n          class=\"aw-input\"\n          [pKeyFilter]=\"inputValidationService.validatorOfNumber()\"\n          [pValidateOnly]=\"true\"\n          maxlength=\"50\"\n          [(ngModel)]=\"supplierDetail.productQuantity\"\n          [disabled]=\"isReadOpenMode\"\n        />\n        <p-message\n          *ngIf=\"productQuantity.invalid && (productQuantity.dirty || productQuantity.touched)\"\n          severity=\"error\"\n          [text]=\"inputValidationService.formatOfNumber()\"\n        ></p-message>\n      </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\n      <label class=\"form-label\">{{ getComponentName() + \".price\" | translate }}</label>\n\n      <div class=\"form-control\">\n        <input\n          #priceValue=\"ngModel\"\n          type=\"text\"\n          style=\"width:80%\"\n          class=\"aw-input\"\n          [pKeyFilter]=\"inputValidationService.validatorOfNumber()\"\n          [pValidateOnly]=\"true\"\n          maxlength=\"50\"\n          [(ngModel)]=\"supplierDetail.priceValue\"\n          [disabled]=\"isReadOpenMode\"\n        />\n        <span style=\"width:20%;padding-top:1em; float:right\">{{ getComponentName() + \".euro\" | translate }}</span>\n        <p-message\n          *ngIf=\"priceValue.invalid && (priceValue.dirty || priceValue.touched)\"\n          severity=\"error\"\n          [text]=\"inputValidationService.formatOfNumber()\"\n        ></p-message>\n      </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\n      <label class=\"form-label\">{{ getComponentName() + \".serviceType\" | translate }}</label>\n\n      <div class=\"form-control\">\n        <p-dropdown\n          class=\"aw-dropdown fixed-width\"\n          placeholder=\"&nbsp;\"\n          [options]=\"serviceType\"\n          [(ngModel)]=\"supplierDetail.serviceType\"\n          [showClear]=\"true\"\n          appendTo=\"body\"\n          [disabled]=\"isReadOpenMode\"\n        ></p-dropdown>\n      </div>\n    </div>\n  </a-content>\n\n  <a-footer>\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"cancel()\">\n      <span>{{ \"global.cancel\" | translate }}</span>\n    </button>\n\n    <button\n      *ngIf=\"!isReadOpenMode\"\n      type=\"button\"\n      mat-raised-button\n      color=\"primary\"\n      color=\"primary\"\n      (click)=\"validate()\"\n      [disabled]=\"\n        (numberOfDays.invalid && (numberOfDays.dirty || numberOfDays.touched)) ||\n        (productQuantity.invalid && (productQuantity.dirty || productQuantity.touched)) ||\n        (priceValue.invalid && (priceValue.dirty || priceValue.touched)) ||\n        !isScreenValid()\n      \"\n    >\n      {{ \"global.validate\" | translate }}\n    </button>\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"cancel()\">\n      {{ \"global.close\" | translate }}\n    </button>\n  </a-footer>\n</a-modal>\n"

/***/ }),

/***/ "./src/app/main/logistics/material/form/popups/assign-supplier-popup-form/assign-supplier-popup-form.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/popups/assign-supplier-popup-form/assign-supplier-popup-form.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AssignSuppliersPopupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignSuppliersPopupFormComponent", function() { return AssignSuppliersPopupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/services/input-validation.service */ "./src/app/shared/services/input-validation.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _material_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../material-form.service */ "./src/app/main/logistics/material/form/material-form.service.ts");
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









var AssignSuppliersPopupFormComponent = /** @class */ (function (_super) {
    __extends(AssignSuppliersPopupFormComponent, _super);
    function AssignSuppliersPopupFormComponent(inputValidationService, messageService, sessionService, propertiesService, materialFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Read, 'AssignSuppliersPopupFormComponent') || this;
        _this.inputValidationService = inputValidationService;
        _this.messageService = messageService;
        _this.sessionService = sessionService;
        _this.propertiesService = propertiesService;
        _this.materialFormService = materialFormService;
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.priceCurrency = '';
        _this.loadSupplier();
        return _this;
    }
    AssignSuppliersPopupFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateOpenMode(this.openMode);
        if (!this.supplierDetail) {
            this.supplierDetail = {};
        }
        else {
            this.serviceType.forEach(function (type) {
                if (type.label === _this.supplierDetail.serviceType) {
                    _this.supplierDetail.serviceType = type.value;
                }
            });
        }
    };
    AssignSuppliersPopupFormComponent.prototype.getTypeName = function () {
        return 'AssignSuppliersPopupFormComponent';
    };
    // tslint:disable-next-line:no-empty
    AssignSuppliersPopupFormComponent.prototype.validate = function () {
        var _this = this;
        if (!!this.supplierDetail) {
            this.supplier.forEach(function (res) {
                if (!!_this.supplierDetail && _this.supplierDetail.bidoCustomerCustomerCode === res.value) {
                    _this.supplierDetail.supplierName = res.label;
                }
            });
            this.supplierDetail.priceUnit = this.priceCurrency;
            this.onValidated.emit(this.supplierDetail);
        }
        this.cancel();
    };
    AssignSuppliersPopupFormComponent.prototype.cancel = function () {
        this.display = false;
    };
    AssignSuppliersPopupFormComponent.prototype.loadSupplier = function () {
        var _this = this;
        var input = {
            customerCode: '',
            customerType: _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].CUSTOMER_TYPE_SUP_KEY
        };
        this.materialFormService.findBidoCustomersBySearchCriteria(input).subscribe(function (results) {
            var labelValue = [];
            results.list.forEach(function (res) {
                if (!!res && !!res.customerCode) {
                    labelValue.push({
                        label: "" + res.customerCode + (res.customerName !== null ? "-" + res.customerName : ''),
                        value: res.customerCode.toString()
                    });
                }
            });
            _this.supplier = labelValue;
        });
    };
    AssignSuppliersPopupFormComponent.prototype.isScreenValid = function () {
        if (this.supplierDetail &&
            this.supplierDetail.bidoCustomerCustomerCode &&
            this.supplierDetail.numberOfDays &&
            this.supplierDetail.priceValue &&
            this.supplierDetail.productQuantity &&
            this.supplierDetail.serviceType) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AssignSuppliersPopupFormComponent.prototype, "supplierDetail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AssignSuppliersPopupFormComponent.prototype, "onValidated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AssignSuppliersPopupFormComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AssignSuppliersPopupFormComponent.prototype, "priceCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AssignSuppliersPopupFormComponent.prototype, "serviceType", void 0);
    AssignSuppliersPopupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-assign-supplier-popup-form',
            template: __webpack_require__(/*! ./assign-supplier-popup-form.component.html */ "./src/app/main/logistics/material/form/popups/assign-supplier-popup-form/assign-supplier-popup-form.component.html"),
            styles: [__webpack_require__(/*! ../popup-form.component.scss */ "./src/app/main/logistics/material/form/popups/popup-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_3__["InputValidationService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__["PropertiesService"],
            _material_form_service__WEBPACK_IMPORTED_MODULE_8__["MaterialFormService"]])
    ], AssignSuppliersPopupFormComponent);
    return AssignSuppliersPopupFormComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/material/form/popups/assign-supply-conversion-popup-form/assign-supply-conversion-popup-form.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/popups/assign-supply-conversion-popup-form/assign-supply-conversion-popup-form.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".alternativeUnit\" | translate }}</label>\r\n        <div class=\"form-control\">\r\n          <p-dropdown\r\n            class=\"aw-dropdown fixed-width\"\r\n            [options]=\"unitOfIssueOptions\"\r\n            [(ngModel)]=\"supplyConversionDetail.alternativeUnit\"\r\n            [showClear]=\"true\"\r\n            placeholder=\"&nbsp;\"\r\n            [disabled]=\"isReadOpenMode\"\r\n            appendTo=\"body\"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">{{ getComponentName() + \".factor\" | translate }}</label>\r\n\r\n        <div class=\"form-control\">\r\n          <input\r\n            class=\"aw-input\"\r\n            type=\"number\"\r\n            [(ngModel)]=\"supplyConversionDetail.factor\"\r\n            [disabled]=\"isReadOpenMode\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"cancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      (click)=\"validate()\"\r\n      [disabled]=\"!isScreenValid()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"cancel()\">\r\n      {{ \"global.close\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/material/form/popups/assign-supply-conversion-popup-form/assign-supply-conversion-popup-form.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/popups/assign-supply-conversion-popup-form/assign-supply-conversion-popup-form.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: AssignSupplyConversionPopupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignSupplyConversionPopupFormComponent", function() { return AssignSupplyConversionPopupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/services/input-validation.service */ "./src/app/shared/services/input-validation.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _material_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../material-form.service */ "./src/app/main/logistics/material/form/material-form.service.ts");
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









var AssignSupplyConversionPopupFormComponent = /** @class */ (function (_super) {
    __extends(AssignSupplyConversionPopupFormComponent, _super);
    function AssignSupplyConversionPopupFormComponent(inputValidationService, messageService, sessionService, propertiesService, materialFormService, _dateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'AssignSupplyConversionPopupFormComponent') || this;
        _this.inputValidationService = inputValidationService;
        _this.messageService = messageService;
        _this.sessionService = sessionService;
        _this.propertiesService = propertiesService;
        _this.materialFormService = materialFormService;
        _this._dateService = _dateService;
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    AssignSupplyConversionPopupFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateOpenMode(this.openMode);
        if (!this.supplyConversionDetail) {
            this.supplyConversionDetail = {};
        }
        else {
            this.unitOfIssueOptions.forEach(function (res) {
                if (_this.supplyConversionDetail.alternativeUnit === res.label) {
                    _this.supplyConversionDetail.alternativeUnit = res.value;
                }
            });
        }
        this.supplyConversionDetail.pnCode = this.pnCode;
    };
    AssignSupplyConversionPopupFormComponent.prototype.getTypeName = function () {
        return 'AssignSupplyConversionPopupFormComponent';
    };
    AssignSupplyConversionPopupFormComponent.prototype.cancel = function () {
        this.display = false;
    };
    AssignSupplyConversionPopupFormComponent.prototype.validate = function () {
        var _this = this;
        if (!!this.supplyConversionDetail.pnCode) {
            this.supplyConversionDetail.unit = this.unitOfIssueOptions[this.supplyUnit - 1].label;
            this.unitOfIssueOptions.forEach(function (res) {
                if (_this.supplyConversionDetail.alternativeUnit === res.value) {
                    _this.supplyConversionDetail.alternativeUnit = res.label;
                }
            });
            this.onValidated.emit(this.supplyConversionDetail);
        }
        this.cancel();
    };
    AssignSupplyConversionPopupFormComponent.prototype.isScreenValid = function () {
        if (!!this.supplyConversionDetail.alternativeUnit && !!this.supplyConversionDetail.factor) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AssignSupplyConversionPopupFormComponent.prototype, "pnCode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AssignSupplyConversionPopupFormComponent.prototype, "supplyConversionDetail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AssignSupplyConversionPopupFormComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AssignSupplyConversionPopupFormComponent.prototype, "supplyUnit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AssignSupplyConversionPopupFormComponent.prototype, "unitOfIssueOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AssignSupplyConversionPopupFormComponent.prototype, "onValidated", void 0);
    AssignSupplyConversionPopupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-assign-supply-conversion-popup-form',
            template: __webpack_require__(/*! ./assign-supply-conversion-popup-form.component.html */ "./src/app/main/logistics/material/form/popups/assign-supply-conversion-popup-form/assign-supply-conversion-popup-form.component.html"),
            styles: [__webpack_require__(/*! ../popup-form.component.scss */ "./src/app/main/logistics/material/form/popups/popup-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_3__["InputValidationService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__["PropertiesService"],
            _material_form_service__WEBPACK_IMPORTED_MODULE_8__["MaterialFormService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_2__["DateService"]])
    ], AssignSupplyConversionPopupFormComponent);
    return AssignSupplyConversionPopupFormComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/material/form/popups/assign-valuation-popup-form/assign-valuation-popup-form.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/popups/assign-valuation-popup-form/assign-valuation-popup-form.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".valuation\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [options]=\"valuation\"\r\n          [(ngModel)]=\"valuationGroupId\"\r\n          [showClear]=\"true\"\r\n          appendTo=\"body\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".value\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input\r\n          #priceValue=\"ngModel\"\r\n          type=\"text\"\r\n          class=\"aw-input\"\r\n          style=\"width:45%\"\r\n          [pKeyFilter]=\"inputValidationService.validatorOfNumber()\"\r\n          [pValidateOnly]=\"true\"\r\n          maxlength=\"50\"\r\n          [(ngModel)]=\"valuationDetail.priceValue\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        />\r\n        <span style=\"width:55%;padding-top:1em; float:right\" *ngIf=\"priceCurrency\">{{ priceCurrency }}</span>\r\n        <p-message\r\n          *ngIf=\"priceValue.invalid && (priceValue.dirty || priceValue.touched)\"\r\n          severity=\"error\"\r\n          [text]=\"inputValidationService.formatOfNumber()\"\r\n        ></p-message>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"cancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      (click)=\"validate()\"\r\n      [disabled]=\"(priceValue.invalid && (priceValue.dirty || priceValue.touched)) || !isScreenValid()\"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"cancel()\">\r\n      {{ \"global.close\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/material/form/popups/assign-valuation-popup-form/assign-valuation-popup-form.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/popups/assign-valuation-popup-form/assign-valuation-popup-form.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: AssignValuationPopupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignValuationPopupFormComponent", function() { return AssignValuationPopupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/input-validation.service */ "./src/app/shared/services/input-validation.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _material_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../material-form.service */ "./src/app/main/logistics/material/form/material-form.service.ts");
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








var AssignValuationPopupFormComponent = /** @class */ (function (_super) {
    __extends(AssignValuationPopupFormComponent, _super);
    function AssignValuationPopupFormComponent(inputValidationService, messageService, sessionService, propertiesService, materialFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'AssignValuationPopupFormComponent') || this;
        _this.inputValidationService = inputValidationService;
        _this.messageService = messageService;
        _this.sessionService = sessionService;
        _this.propertiesService = propertiesService;
        _this.materialFormService = materialFormService;
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.loadValuation();
        _this.priceCurrency = '';
        return _this;
    }
    AssignValuationPopupFormComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
        if (!this.valuationDetail) {
            this.valuationDetail = {};
        }
        else {
            this.valuationGroupId = this.valuationDetail.bidtValuationGroupId ?
                this.valuationDetail.bidtValuationGroupId.toString() : '';
        }
    };
    AssignValuationPopupFormComponent.prototype.getTypeName = function () {
        return 'AssignValuationPopupFormComponent';
    };
    AssignValuationPopupFormComponent.prototype.cancel = function () {
        this.display = false;
    };
    AssignValuationPopupFormComponent.prototype.loadValuation = function () {
        var _this = this;
        this.materialFormService.findAllValuation().subscribe(function (result) {
            var labelValue = [];
            result.forEach(function (res) {
                if (!!res && !!res.id && !!res.valuationGroupName) {
                    labelValue.push({
                        label: res.valuationGroupName,
                        value: res.id.toString()
                    });
                }
            });
            _this.valuation = labelValue;
        });
    };
    AssignValuationPopupFormComponent.prototype.validate = function () {
        var _this = this;
        if (!!this.valuationDetail) {
            this.valuation.forEach(function (res) {
                if (!!_this.valuationDetail && _this.valuationGroupId === res.value) {
                    _this.valuationDetail.valuationName = res.label;
                }
            });
            this.valuationDetail.bidtValuationGroupId = this.valuationGroupId ?
                parseInt(this.valuationGroupId, 10) : undefined;
            this.valuationDetail.priceUnit = this.priceCurrency;
            this.onValidated.emit(this.valuationDetail);
        }
        this.cancel();
    };
    AssignValuationPopupFormComponent.prototype.isScreenValid = function () {
        if (this.valuationDetail && this.valuationGroupId && this.valuationDetail.priceValue) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AssignValuationPopupFormComponent.prototype, "valuationDetail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AssignValuationPopupFormComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AssignValuationPopupFormComponent.prototype, "onValidated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AssignValuationPopupFormComponent.prototype, "priceCurrency", void 0);
    AssignValuationPopupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-assign-valuation-popup-form',
            template: __webpack_require__(/*! ./assign-valuation-popup-form.component.html */ "./src/app/main/logistics/material/form/popups/assign-valuation-popup-form/assign-valuation-popup-form.component.html"),
            styles: [__webpack_require__(/*! ../popup-form.component.scss */ "./src/app/main/logistics/material/form/popups/popup-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__["InputValidationService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__["PropertiesService"],
            _material_form_service__WEBPACK_IMPORTED_MODULE_7__["MaterialFormService"]])
    ], AssignValuationPopupFormComponent);
    return AssignValuationPopupFormComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/material/form/popups/assign-warehouse-popup-form/assign-warehouse-popup-form.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/popups/assign-warehouse-popup-form/assign-warehouse-popup-form.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".site\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [options]=\"sites\"\r\n          [(ngModel)]=\"siteId\"\r\n          (onChange)=\"loadWarehouse()\"\r\n          appendTo=\"body\"\r\n          [showClear]=\"true\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ required: !isReadOpenMode }\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".warehouse\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          placeholder=\"&nbsp;\"\r\n          [showClear]=\"true\"\r\n          [options]=\"warehouse\"\r\n          appendTo=\"body\"\r\n          [(ngModel)]=\"wareHouseId\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          (onChange)=\"loadStorageBins()\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".lowerThreshold\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input\r\n          #whPrLowThreshold=\"ngModel\"\r\n          type=\"text\"\r\n          class=\"aw-input\"\r\n          [pKeyFilter]=\"inputValidationService.validatorOfNumber()\"\r\n          [pValidateOnly]=\"true\"\r\n          maxlength=\"19\"\r\n          [(ngModel)]=\"warehouseDetail.whPrLowThreshold\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        />\r\n        <p-message\r\n          *ngIf=\"whPrLowThreshold.invalid && (whPrLowThreshold.dirty || whPrLowThreshold.touched)\"\r\n          severity=\"error\"\r\n          [text]=\"inputValidationService.formatOfNumber()\"\r\n        ></p-message>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".higherThreshold\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input\r\n          #whPrHighThreshold=\"ngModel\"\r\n          type=\"text\"\r\n          class=\"aw-input\"\r\n          [pKeyFilter]=\"inputValidationService.validatorOfNumber()\"\r\n          [pValidateOnly]=\"true\"\r\n          maxlength=\"19\"\r\n          [(ngModel)]=\"warehouseDetail.whPrHighThreshold\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        />\r\n        <p-message\r\n          *ngIf=\"whPrHighThreshold.invalid && (whPrHighThreshold.dirty || whPrHighThreshold.touched)\"\r\n          severity=\"error\"\r\n          [text]=\"inputValidationService.formatOfNumber()\"\r\n        ></p-message>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"form-group\" *ngFor=\"let bin of storageBinForWarehouse\">\r\n        <label class=\"form-label\"> {{ bin.label }} </label>\r\n\r\n        <div class=\"form-control\">\r\n          <p-checkbox class=\"aw-checkbox\" binary=\"true\" [(ngModel)]=\"bin.value\"></p-checkbox>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"cancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button\r\n      *ngIf=\"!isReadOpenMode\"\r\n      type=\"button\"\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      (click)=\"validate()\"\r\n      [disabled]=\"\r\n        (whPrLowThreshold.invalid && (whPrLowThreshold.dirty || whPrLowThreshold.touched)) ||\r\n        (whPrHighThreshold.invalid && (whPrHighThreshold.dirty || whPrHighThreshold.touched)) ||\r\n        !isScreenValid()\r\n      \"\r\n    >\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"cancel()\">\r\n      {{ \"global.close\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/material/form/popups/assign-warehouse-popup-form/assign-warehouse-popup-form.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/popups/assign-warehouse-popup-form/assign-warehouse-popup-form.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: AssignWarehousePopupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignWarehousePopupFormComponent", function() { return AssignWarehousePopupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/services/input-validation.service */ "./src/app/shared/services/input-validation.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _material_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../material-form.service */ "./src/app/main/logistics/material/form/material-form.service.ts");
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








var AssignWarehousePopupFormComponent = /** @class */ (function (_super) {
    __extends(AssignWarehousePopupFormComponent, _super);
    function AssignWarehousePopupFormComponent(inputValidationService, messageService, sessionService, propertiesService, materialFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'AssignWarehousePopupFormComponent') || this;
        _this.inputValidationService = inputValidationService;
        _this.messageService = messageService;
        _this.sessionService = sessionService;
        _this.propertiesService = propertiesService;
        _this.materialFormService = materialFormService;
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.storageBinForWarehouse = [];
        _this.loadSites();
        return _this;
    }
    AssignWarehousePopupFormComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
        if (!this.warehouseDetail) {
            this.warehouseDetail = {};
        }
        else {
            this.siteId = this.warehouseDetail.bidtSiteId ? this.warehouseDetail.bidtSiteId.toString() : undefined;
            this.wareHouseId = this.warehouseDetail.wareHouseId ? this.warehouseDetail.wareHouseId.toString() : undefined;
        }
    };
    AssignWarehousePopupFormComponent.prototype.getTypeName = function () {
        return 'AssignWarehousePopupFormComponent';
    };
    AssignWarehousePopupFormComponent.prototype.validate = function () {
        var _this = this;
        if (this.warehouseDetail) {
            this.sites.forEach(function (res) {
                if (!!_this.warehouseDetail && _this.siteId === res.value) {
                    _this.warehouseDetail.siteName = res.label;
                }
            });
            this.warehouse.forEach(function (res) {
                if (!!_this.warehouseDetail && _this.wareHouseId === res.value) {
                    _this.warehouseDetail.wHName = res.label;
                }
            });
            this.warehouseDetail.bidtSiteId = this.siteId ? parseInt(this.siteId, 10) : undefined;
            this.warehouseDetail.wareHouseId = this.wareHouseId ? parseInt(this.wareHouseId, 10) : undefined;
            var lowThreshold = this.warehouseDetail.whPrLowThreshold;
            var highThreshold = this.warehouseDetail.whPrHighThreshold;
            if (lowThreshold && highThreshold && Number(lowThreshold) > Number(highThreshold)) {
                this.messageService.showWarningMessage(this.getTranslateKey('warningOnThresholdValues'));
            }
            else {
                var bins_1 = [];
                this.storageBinForWarehouse.forEach(function (res) {
                    if (res.value) {
                        bins_1.push(res.bidtStorageBinDTO);
                    }
                });
                this.warehouseDetail.bidtStorageBinDTOList = bins_1;
                this.onValidated.emit(this.warehouseDetail);
            }
        }
        this.cancel();
    };
    AssignWarehousePopupFormComponent.prototype.cancel = function () {
        this.display = false;
    };
    AssignWarehousePopupFormComponent.prototype.loadSites = function () {
        var _this = this;
        this.materialFormService.findAllSites().subscribe(function (result) {
            var labelValue = [];
            result.forEach(function (res) {
                if (!!res && !!res.siteId) {
                    labelValue.push({
                        label: res.siteCode + "-" + res.siteName,
                        value: res.siteId.toString()
                    });
                }
            });
            _this.sites = labelValue;
            _this.loadWarehouse();
        });
    };
    AssignWarehousePopupFormComponent.prototype.loadWarehouse = function () {
        var _this = this;
        if (!!this.warehouseDetail && !!this.siteId) {
            var siteId = this.siteId;
            this.materialFormService.findWarehouseBySite(siteId).subscribe(function (result) {
                var labelValue = [];
                result.forEach(function (res) {
                    if (!!res && !!res.wareHouseId) {
                        labelValue.push({
                            label: res.whCode + "-" + res.whName,
                            value: res.wareHouseId.toString()
                        });
                    }
                });
                _this.warehouse = labelValue;
                _this.loadStorageBins();
            });
        }
        else if (!!this.warehouseDetail && this.siteId === null) {
            this.warehouse = [];
            this.wareHouseId = undefined;
        }
    };
    AssignWarehousePopupFormComponent.prototype.isScreenValid = function () {
        if (this.warehouseDetail && this.siteId && this.wareHouseId) {
            return true;
        }
        return false;
    };
    AssignWarehousePopupFormComponent.prototype.loadStorageBins = function () {
        var _this = this;
        if (!!this.wareHouseId) {
            this.storageBinForWarehouse = [];
            this.materialFormService.findByWarehouseId(parseInt(this.wareHouseId, 10)).subscribe(function (result) {
                if (!!result && !!result.list && result.list.length > 0) {
                    result.list.forEach(function (res) {
                        if (!!res.sbNumber) {
                            _this.storageBinForWarehouse.push({
                                label: res.sbNumber,
                                bidtStorageBinDTO: res,
                                value: false
                            });
                        }
                    });
                }
                if (_this.openMode === _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write) {
                    if (!!_this.warehouseDetail.bidtStorageBinDTOList && _this.warehouseDetail.bidtStorageBinDTOList.length > 0) {
                        _this.renderBin(_this.warehouseDetail);
                    }
                }
            });
        }
        else {
            this.storageBinForWarehouse = [];
        }
    };
    AssignWarehousePopupFormComponent.prototype.renderBin = function (warehouse) {
        var _this = this;
        warehouse.bidtStorageBinDTOList.forEach(function (res) {
            if (!!res.sbNumber) {
                _this.storageBinForWarehouse.forEach(function (r) {
                    if (r.bidtStorageBinDTO.id === res.id) {
                        r.value = true;
                    }
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AssignWarehousePopupFormComponent.prototype, "warehouseDetail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AssignWarehousePopupFormComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AssignWarehousePopupFormComponent.prototype, "onValidated", void 0);
    AssignWarehousePopupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-assign-warehouse-popup-form',
            template: __webpack_require__(/*! ./assign-warehouse-popup-form.component.html */ "./src/app/main/logistics/material/form/popups/assign-warehouse-popup-form/assign-warehouse-popup-form.component.html"),
            styles: [__webpack_require__(/*! ../popup-form.component.scss */ "./src/app/main/logistics/material/form/popups/popup-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__["InputValidationService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_4__["PropertiesService"],
            _material_form_service__WEBPACK_IMPORTED_MODULE_7__["MaterialFormService"]])
    ], AssignWarehousePopupFormComponent);
    return AssignWarehousePopupFormComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/material/form/popups/popup-form.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/logistics/material/form/popups/popup-form.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .item-textbox {\n  width: 5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbWF0ZXJpYWwvZm9ybS9wb3B1cHMvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxtYXRlcmlhbFxcZm9ybVxccG9wdXBzXFxwb3B1cC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbWF0ZXJpYWwvZm9ybS9wb3B1cHMvcG9wdXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuaXRlbS10ZXh0Ym94IHtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/logistics/material/material.module.ts":
/*!************************************************************!*\
  !*** ./src/app/main/logistics/material/material.module.ts ***!
  \************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
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
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/keyfilter */ "./node_modules/primeng/keyfilter.js");
/* harmony import */ var primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tristatecheckbox */ "./node_modules/primeng/tristatecheckbox.js");
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ "./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts");
/* harmony import */ var _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/dialog-search-material/dialog-search-material.module */ "./src/app/shared/components/dialog-search-material/dialog-search-material.module.ts");
/* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/dialog-table/dialog-table.module */ "./src/app/shared/components/dialog-table/dialog-table.module.ts");
/* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ "./src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_status_update_history_status_update_history_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/components/status-update-history/status-update-history.module */ "./src/app/shared/components/status-update-history/status-update-history.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _procurement_request_search_procurement_request_popup_procurement_request_popup_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../procurement-request/search/procurement-request-popup/procurement-request-popup.module */ "./src/app/main/logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.module.ts");
/* harmony import */ var _transfer_order_search_transfer_order_popup_transfer_order_popup_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../transfer-order/search/transfer-order-popup/transfer-order-popup.module */ "./src/app/main/logistics/transfer-order/search/transfer-order-popup/transfer-order-popup.module.ts");
/* harmony import */ var _form_material_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./form/material-form.component */ "./src/app/main/logistics/material/form/material-form.component.ts");
/* harmony import */ var _form_material_form_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./form/material-form.service */ "./src/app/main/logistics/material/form/material-form.service.ts");
/* harmony import */ var _form_popups_assign_alternative_popup_form_assign_alternative_popup_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./form/popups/assign-alternative-popup-form/assign-alternative-popup-form.component */ "./src/app/main/logistics/material/form/popups/assign-alternative-popup-form/assign-alternative-popup-form.component.ts");
/* harmony import */ var _form_popups_assign_container_popup_form_assign_container_popup_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./form/popups/assign-container-popup-form/assign-container-popup-form.component */ "./src/app/main/logistics/material/form/popups/assign-container-popup-form/assign-container-popup-form.component.ts");
/* harmony import */ var _form_popups_assign_supplier_popup_form_assign_supplier_popup_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./form/popups/assign-supplier-popup-form/assign-supplier-popup-form.component */ "./src/app/main/logistics/material/form/popups/assign-supplier-popup-form/assign-supplier-popup-form.component.ts");
/* harmony import */ var _form_popups_assign_supply_conversion_popup_form_assign_supply_conversion_popup_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./form/popups/assign-supply-conversion-popup-form/assign-supply-conversion-popup-form.component */ "./src/app/main/logistics/material/form/popups/assign-supply-conversion-popup-form/assign-supply-conversion-popup-form.component.ts");
/* harmony import */ var _form_popups_assign_valuation_popup_form_assign_valuation_popup_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./form/popups/assign-valuation-popup-form/assign-valuation-popup-form.component */ "./src/app/main/logistics/material/form/popups/assign-valuation-popup-form/assign-valuation-popup-form.component.ts");
/* harmony import */ var _form_popups_assign_warehouse_popup_form_assign_warehouse_popup_form_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./form/popups/assign-warehouse-popup-form/assign-warehouse-popup-form.component */ "./src/app/main/logistics/material/form/popups/assign-warehouse-popup-form/assign-warehouse-popup-form.component.ts");
/* harmony import */ var _search_material_search_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./search/material-search.component */ "./src/app/main/logistics/material/search/material-search.component.ts");
/* harmony import */ var _search_material_search_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./search/material-search.service */ "./src/app/main/logistics/material/search/material-search.service.ts");
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
    primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
    primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__["KeyFilterModule"],
    primeng_message__WEBPACK_IMPORTED_MODULE_7__["MessageModule"],
    primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"],
    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_9__["SplitButtonModule"],
    primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_12__["TriStateCheckboxModule"],
    _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_22__["TableModule"]
];
var INTERNAL_MODULES = [
    _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_18__["DialogTableModule"],
    _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_19__["DynamicAttributesModule"],
    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_20__["ModalModule"],
    _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_17__["DialogSearchMaterialModule"],
    _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_16__["ComponentSidebarModule"],
    _shared_components_status_update_history_status_update_history_module__WEBPACK_IMPORTED_MODULE_21__["StatusUpdateHistoryModule"],
    _procurement_request_search_procurement_request_popup_procurement_request_popup_module__WEBPACK_IMPORTED_MODULE_24__["ProcurementRequestPopupModule"],
    _transfer_order_search_transfer_order_popup_transfer_order_popup_module__WEBPACK_IMPORTED_MODULE_25__["TransferOrderPopupModule"]
];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [
    _form_popups_assign_warehouse_popup_form_assign_warehouse_popup_form_component__WEBPACK_IMPORTED_MODULE_33__["AssignWarehousePopupFormComponent"],
    _form_popups_assign_supplier_popup_form_assign_supplier_popup_form_component__WEBPACK_IMPORTED_MODULE_30__["AssignSuppliersPopupFormComponent"],
    _form_popups_assign_valuation_popup_form_assign_valuation_popup_form_component__WEBPACK_IMPORTED_MODULE_32__["AssignValuationPopupFormComponent"],
    _form_popups_assign_alternative_popup_form_assign_alternative_popup_form_component__WEBPACK_IMPORTED_MODULE_28__["AssignAlternativesPopupFormComponent"],
    _form_popups_assign_container_popup_form_assign_container_popup_form_component__WEBPACK_IMPORTED_MODULE_29__["AssignContainerPopupFormComponent"],
    _form_popups_assign_supply_conversion_popup_form_assign_supply_conversion_popup_form_component__WEBPACK_IMPORTED_MODULE_31__["AssignSupplyConversionPopupFormComponent"]
];
var DYNAMIC_COMPONENTS = [_search_material_search_component__WEBPACK_IMPORTED_MODULE_34__["MaterialSearchComponent"], _form_material_form_component__WEBPACK_IMPORTED_MODULE_26__["MaterialFormComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_search_material_search_service__WEBPACK_IMPORTED_MODULE_35__["MaterialSearchService"], _form_material_form_service__WEBPACK_IMPORTED_MODULE_27__["MaterialFormService"]];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_13__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_14__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_15__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_23__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/main/logistics/material/search/material-search.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/main/logistics/material/search/material-search.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"openNewMaterial()\" *ngIf=\"hasUpdateAccessRight\">\r\n      {{ \"global.create\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">{{ \"addToFavorite\" | translate }}</button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row search-criteria-header\">\r\n                  <i\r\n                    class=\"fa fa-fw fa-floppy-o aw-icon aw-icon-with-border search-criteria-action\"\r\n                    aria-hidden=\"true\"\r\n                    pTooltip=\"{{ 'global.save' | translate }}\"\r\n                    tooltipPosition=\"top\"\r\n                  ></i>\r\n                  <i\r\n                    class=\"fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action\"\r\n                    aria-hidden=\"true\"\r\n                    pTooltip=\"{{ 'global.reset' | translate }}\"\r\n                    tooltipPosition=\"top\"\r\n                    (click)=\"resetSearchCriteria()\"\r\n                  ></i>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".pnCode\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" maxlength=\"50\" [(ngModel)]=\"searchObject.pnCode\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".articleDesignation\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"aw-input\"\r\n                        maxlength=\"300\"\r\n                        [(ngModel)]=\"searchObject.articleDesignation\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".pnType\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"types\"\r\n                        [(ngModel)]=\"searchObject.pnType\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".traceability\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"traceability\"\r\n                        [(ngModel)]=\"searchObject.traceability\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".statusState\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"propertyStatus\"\r\n                        [(ngModel)]=\"searchObject.statusState\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".otanPnReference\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"aw-input\"\r\n                        [(ngModel)]=\"searchObject.otanPnReference\"\r\n                        maxlength=\"20\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row search-criteria-footer\">\r\n                  <div class=\"search-actions\">\r\n                    <button\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      class=\"btn-with-spinner\"\r\n                      color=\"primary\"\r\n                      (click)=\"search()\"\r\n                      appKeyPress\r\n                      [keyCode]=\"'Enter'\"\r\n                      (keyPress)=\"search()\"\r\n                    >\r\n                      <span *ngIf=\"isLoading\" class=\"lds-hourglass\"></span>\r\n                      {{ \"global.toSearch\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.results\" | translate }} ({{\r\n                    materialTableDataSource ? materialTableDataSource.dataCount : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <a-table [dataSource]=\"materialTableDataSource\">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf=\"\r\n                      materialTableDataSource &&\r\n                      materialTableDataSource.hasData &&\r\n                      !materialTableDataSource.hasDataSelection\r\n                    \"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"exportTable()\"\r\n                  >\r\n                    {{ \"global.export\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf=\"hasManageAccessRight && materialTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"deleteMaterials()\"\r\n                  >\r\n                    {{ \"global.delete\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf=\"materialTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"openSelectedMaterials()\"\r\n                  >\r\n                    {{ \"global.open\" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef=\"pnCode\" let-rowData=\"rowData\">\r\n                  <a (click)=\"openMaterialFromLink(rowData)\"> {{ rowData[\"pnCode\"] }}</a>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef=\"pnType\" let-rowData=\"rowData\">\r\n                  {{ rowData[\"pnTypeText\"] }}\r\n                </ng-template>\r\n\r\n                <ng-template columnDef=\"statusState\" let-rowData=\"rowData\">\r\n                  {{ statusDictionary[rowData.statusState] }}\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/material/search/material-search.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/logistics/material/search/material-search.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MaterialSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialSearchComponent", function() { return MaterialSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_export_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/export.service */ "./src/app/shared/services/export.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _material_search_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material-search.service */ "./src/app/main/logistics/material/search/material-search.service.ts");
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

















var MaterialSearchComponent = /** @class */ (function (_super) {
    __extends(MaterialSearchComponent, _super);
    /* ***************************************************************************/
    function MaterialSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, materialSearchService, confirmationService, exportService, propertiesService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.materialSearchService = materialSearchService;
        _this.confirmationService = confirmationService;
        _this.exportService = exportService;
        _this.propertiesService = propertiesService;
        _this.types = [];
        _this.traceability = [];
        _this.materialTable = [];
        _this.selectedMaterials = [];
        _this.propertyStatus = [];
        _this.statusDictionary = {};
        _this.isLoading = false;
        _this.showAdvancedCriteria = false;
        _this.resetSearchCriteria();
        _this.loadTraceability();
        _this.loadTypes();
        _this.loadStatus();
        _this.initMaterialTableDataSource();
        return _this;
    }
    MaterialSearchComponent_1 = MaterialSearchComponent;
    MaterialSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_MATERIAL_SEARCH;
    };
    MaterialSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
    };
    MaterialSearchComponent.prototype.deleteMaterials = function () {
        var _this = this;
        var confirmMessageKey = this.materialTableDataSource.dataSelection.length > 1
            ? 'confirmDeleteSelectedMaterials'
            : 'confirmDeleteSelectedMaterial';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(confirmMessageKey),
            accept: function () {
                var materialsId = [];
                _this.materialTableDataSource.dataSelection.forEach(function (materials) {
                    if (!!materials && !!materials.pnCode) {
                        var pnCodeId = {
                            pnCode: materials.pnCode
                        };
                        materialsId.push(pnCodeId);
                    }
                });
                _this.materialSearchService.removeBireData(materialsId).subscribe(function () {
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteMaterial'));
                    _this.materialTableDataSource.deleteDataSelection();
                }, function (error) {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDeleteMaterial'));
                });
            }
        });
    };
    MaterialSearchComponent.prototype.exportTable = function () {
        var _this = this;
        var materialExportData = this.materialTableDataSource.dataSrc.map(function (material) {
            var materialRowExport = {
                pnCode: material.pnCode,
                pnType: material.pnType,
                articleDesignation: material.articleDesignation,
                traceability: material.traceability,
                statusState: material.statusState ? _this.statusDictionary[material.statusState] : ''
            };
            return materialRowExport;
        });
        this.exportService.toExcel(materialExportData, MaterialSearchComponent_1.CUSTOMER_TABLE_EXPORT_NAME, this.componentData.componentId);
    };
    MaterialSearchComponent.prototype.openNewMaterial = function () {
        this.openMaterial(undefined, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Create);
    };
    MaterialSearchComponent.prototype.openSelectedMaterials = function () {
        var _this = this;
        this.materialTableDataSource.dataSelection.forEach(function (materials) {
            if (!!materials) {
                if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__["StringUtils"].isNullOrEmpty(materials.pnCode)) {
                    _this.messageService.showWarningMessage(_this.getTranslateKey('errorOnMissingCode'));
                }
                else {
                    _this.openMaterial(materials, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read);
                }
            }
        });
    };
    MaterialSearchComponent.prototype.openMaterialFromLink = function (material) {
        this.openMaterial(material, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read);
    };
    MaterialSearchComponent.prototype.resetSearchCriteria = function () {
        this.searchObject = {};
    };
    MaterialSearchComponent.prototype.search = function () {
        var _this = this;
        this.isLoading = true;
        _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
        var searchData = {
            pnCode: this.searchObject.pnCode ? this.searchObject.pnCode.trim() : '',
            articleDesignation: this.searchObject.articleDesignation ? this.searchObject.articleDesignation.trim() : '',
            traceability: this.searchObject.traceability,
            pnType: this.searchObject.pnType,
            statusState: this.searchObject.statusState,
            otanPnReference: this.searchObject.otanPnReference
        };
        this.materialSearchService.findProductsBySearchCriteria(searchData).subscribe(function (result) {
            if (result && result.list) {
                var resultsToAdd_1 = [];
                result.list.forEach(function (element) {
                    var birePnObject = __assign({}, element);
                    birePnObject.traceability = _this.getTraceabilityLabelByValue(birePnObject.traceability || '');
                    birePnObject.pnTypeText = _this.getPnType(element.pnType || '');
                    resultsToAdd_1.push(birePnObject);
                });
                _this.materialTableDataSource.setData(resultsToAdd_1);
                _this.isLoading = false;
            }
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetResults'));
        });
    };
    MaterialSearchComponent.prototype.getPnType = function (pnTypeValue) {
        var pnType = '';
        this.types.forEach(function (element) {
            if (pnTypeValue === element.value) {
                pnType = element.label;
            }
        });
        return pnType;
    };
    MaterialSearchComponent.prototype.getTraceabilityLabelByValue = function (value) {
        var label = this.traceability ? this.traceability.filter(function (t) { return t.value === value; }).map(function (t) { return t.label; })[0] : '';
        return label ? label : '';
    };
    MaterialSearchComponent.prototype.initMaterialTableDataSource = function () {
        this.materialTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                { field: 'pnCode', translateKey: this.getTranslateKey('pnCode') },
                { field: 'articleDesignation', translateKey: this.getTranslateKey('articleDesignation') },
                { field: 'pnType', translateKey: this.getTranslateKey('pnType') },
                { field: 'traceability', translateKey: this.getTranslateKey('traceability') },
                { field: 'statusState', translateKey: this.getTranslateKey('statusState') }
            ],
            data: []
        });
    };
    MaterialSearchComponent.prototype.loadTraceability = function () {
        var _this = this;
        this.propertiesService.getValue('getPnTraceabilityMap').subscribe(function (results) {
            _this.traceability = !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_14__["SelectItemUtils"].fromLabelValues(results) : [];
        }, function () {
            _this.messageService.showErrorMessage('errorOnLoadingTraceability');
        });
    };
    MaterialSearchComponent.prototype.loadTypes = function () {
        var _this = this;
        this.propertiesService.getValue('getPnTypeMap').subscribe(function (results) {
            _this.types = !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_14__["SelectItemUtils"].fromLabelValues(results) : [];
        });
    };
    MaterialSearchComponent.prototype.loadStatus = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__["GenericPropertyConstants"].FUNC_OBJECT_STATUS_MAP).subscribe(function (results) {
            _this.propertyStatus = results;
            _this.fillStatusDictionary(results);
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetFamilyVariant'));
        });
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__["GenericPropertyConstants"].OBJECT_STATUS_MAP).subscribe(function (results) {
            _this.fillStatusDictionary(results);
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnGetFamilyVariant'));
        });
    };
    MaterialSearchComponent.prototype.fillStatusDictionary = function (references) {
        var _this = this;
        references.forEach(function (lv) { return (_this.statusDictionary[lv.value] = lv.label); });
    };
    MaterialSearchComponent.prototype.openMaterial = function (objectId, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_MATERIAL_FORM,
            openMode: openMode
        };
        if (!!objectId) {
            var materialFormId = {
                pnCode: objectId.pnCode,
                pnType: objectId.pnType
            };
            data.objectId = this.serializationService.serialize(materialFormId);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
        this.materialTableDataSource.dataSelection = [];
    };
    var MaterialSearchComponent_1;
    MaterialSearchComponent.CUSTOMER_TABLE_EXPORT_NAME = 'material-list';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resultsContainerAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MaterialSearchComponent.prototype, "resultsContainerAnchor", void 0);
    MaterialSearchComponent = MaterialSearchComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-material-search',
            template: __webpack_require__(/*! ./material-search.component.html */ "./src/app/main/logistics/material/search/material-search.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__["TabService"],
            _material_search_service__WEBPACK_IMPORTED_MODULE_16__["MaterialSearchService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
            _shared_services_export_service__WEBPACK_IMPORTED_MODULE_6__["ExportService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__["PropertiesService"]])
    ], MaterialSearchComponent);
    return MaterialSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_13__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/material/search/material-search.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/logistics/material/search/material-search.service.ts ***!
  \***************************************************************************/
/*! exports provided: MaterialSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialSearchService", function() { return MaterialSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
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





var MaterialSearchService = /** @class */ (function (_super) {
    __extends(MaterialSearchService, _super);
    function MaterialSearchService(http, appConfigService, productStructureManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.productStructureManagementApi = productStructureManagementApi;
        return _this;
    }
    MaterialSearchService.prototype.findProductsBySearchCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findProductsBySearchCriteria, criteria);
    };
    MaterialSearchService.prototype.removeBireData = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.removeBirePn, input);
    };
    MaterialSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__["ProductStructureManagementApi"]])
    ], MaterialSearchService);
    return MaterialSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



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

/***/ "./src/app/main/overlay/overlay.service.ts":
/*!*************************************************!*\
  !*** ./src/app/main/overlay/overlay.service.ts ***!
  \*************************************************/
/*! exports provided: OverlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayService", function() { return OverlayService; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _overlay_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay-ref */ "./src/app/main/overlay/overlay-ref.ts");
/* harmony import */ var _overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.component */ "./src/app/main/overlay/overlay.component.ts");
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





var OverlayService = /** @class */ (function () {
    function OverlayService(_injector, _overlay) {
        this._injector = _injector;
        this._overlay = _overlay;
    }
    // //////////////////////////////////////////////////////////////////////////
    OverlayService.prototype.openWithPositionAbsolute = function (params) {
        return this.open(params, this.getConfig(params, this.getPositionAbsolute(params)));
    };
    OverlayService.prototype.openWithPositionCenter = function (params) {
        return this.open(params, this.getConfig(__assign({}, params, { hasVisibleBackdrop: params.hasVisibleBackdrop !== undefined ? params.hasVisibleBackdrop : true }), this.getPositionCenter()));
    };
    OverlayService.prototype.openWithPositionRelative = function (params) {
        return this.open(params, this.getConfig(params, this.getPositionRelative(params)));
    };
    // //////////////////////////////////////////////////////////////////////////
    OverlayService.prototype.createInjector = function (overlayRef, injector) {
        var tokens = new WeakMap([[_overlay_ref__WEBPACK_IMPORTED_MODULE_3__["OverlayRef"], overlayRef]]);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](injector, tokens);
    };
    OverlayService.prototype.getConfig = function (params, positionStrategy) {
        var hasBackdrop = params.hasBackdrop !== undefined ? params.hasBackdrop : true;
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
            hasBackdrop: hasBackdrop,
            positionStrategy: positionStrategy,
            backdropClass: hasBackdrop && params.hasVisibleBackdrop ? 'cdk-overlay-dark-backdrop' : '',
            height: params.height,
            scrollStrategy: this._overlay.scrollStrategies.reposition(),
            width: params.width
        });
    };
    OverlayService.prototype.getPositionAbsolute = function (params) {
        var positionStrategy = this._overlay
            .position()
            .global()
            .bottom(params.positions.bottom)
            .left(params.positions.left)
            .right(params.positions.right)
            .top(params.positions.top);
        return positionStrategy;
    };
    OverlayService.prototype.getPositionCenter = function () {
        var positionStrategy = this._overlay
            .position()
            .global()
            .centerHorizontally()
            .centerVertically();
        return positionStrategy;
    };
    OverlayService.prototype.getPositionRelative = function (params) {
        var positionStrategy = this._overlay
            .position()
            .flexibleConnectedTo(params.origin)
            .withPositions(params.positions || [])
            .withFlexibleDimensions(false)
            .withPush(false);
        return positionStrategy;
    };
    OverlayService.prototype.open = function (params, overlayConfig) {
        var cdkOverlayRef = this._overlay.create(overlayConfig);
        var overlayRef = new _overlay_ref__WEBPACK_IMPORTED_MODULE_3__["OverlayRef"](cdkOverlayRef, params.content, params.data);
        var injector = this.createInjector(overlayRef, this._injector);
        cdkOverlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](_overlay_component__WEBPACK_IMPORTED_MODULE_4__["OverlayComponent"], undefined, injector));
        return overlayRef;
    };
    OverlayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]])
    ], OverlayService);
    return OverlayService;
}());



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
//# sourceMappingURL=logistics-material-material-module.js.map