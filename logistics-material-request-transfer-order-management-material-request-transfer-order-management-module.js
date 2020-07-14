(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-material-request-transfer-order-management-material-request-transfer-order-management-module"],{

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

/***/ "./node_modules/primeng/overlaypanel.js":
/*!**********************************************!*\
  !*** ./node_modules/primeng/overlaypanel.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/overlaypanel/overlaypanel */ "./node_modules/primeng/components/overlaypanel/overlaypanel.js"));

/***/ }),

/***/ "./node_modules/primeng/progressbar.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/progressbar.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/progressbar/progressbar */ "./node_modules/primeng/components/progressbar/progressbar.js"));

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

/***/ "./node_modules/primeng/selectbutton.js":
/*!**********************************************!*\
  !*** ./node_modules/primeng/selectbutton.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/selectbutton/selectbutton */ "./node_modules/primeng/components/selectbutton/selectbutton.js"));

/***/ }),

/***/ "./node_modules/primeng/splitbutton.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/splitbutton.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/splitbutton/splitbutton */ "./node_modules/primeng/components/splitbutton/splitbutton.js"));

/***/ }),

/***/ "./src/app/main/logistics/material-request-transfer-order-management/form/material-request-transfer-order-management-form.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-transfer-order-management/form/material-request-transfer-order-management-form.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">{{ \"transaction.\" + componentData.componentId | translate }}</h2>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div *ngIf=\"subtitle\" class=\"page-subtitle\">- {{ subtitle }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"Show all actions\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"reload()\">\r\n        {{ \"global.refresh\" | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--8\">\r\n          <div class=\"grid-cell grid-cell--container grid-cell-scope  grid-cell-item-structure\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container loading-indicator\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"page.mainData\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <div class=\"column\">\r\n                <!-- ROW 1 -->\r\n                <div class=\"row\">\r\n                  <div class=\"form-group flex--4\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".number\" | translate }}</label>\r\n\r\n                    <div class=\"form-control custom-anchor\">\r\n                      {{ transferOrder.torCode }}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group flex--4\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".type\" | translate }}</label>\r\n\r\n                    <div class=\"form-control custom-anchor\">\r\n                      {{ toNumber(transferOrder.torType) | formatSelectOption: torTypeList | extractTranslation }}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group flex--4\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".criticity\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\">\r\n                        <span\r\n                          *ngIf=\"transferOrder.criticality === aWPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE\"\r\n                          class=\"ok\"\r\n                        >\r\n                          {{ getComponentName() + \".routine\" | translate }}\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngIf=\"transferOrder.criticality === aWPropertiesConstants.LOGISTICAL_CRITICALITY_IMMEDIATE\"\r\n                          class=\"nok\"\r\n                        >\r\n                          {{ getComponentName() + \".immediate\" | translate }}\r\n                        </span>\r\n\r\n                        <span\r\n                          *ngIf=\"transferOrder.criticality === aWPropertiesConstants.LOGISTICAL_CRITICALITY_URGENT\"\r\n                          class=\"warning\"\r\n                        >\r\n                          {{ getComponentName() + \".urgent\" | translate }}\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- ROW 2 -->\r\n                <div class=\"row\">\r\n                  <div class=\"form-group flex--4\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".applicant\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\">{{ applicant }} ({{ applicantLogin }})</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group flex--4\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".created\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      {{ transferOrder.statusDate | date: \"yyyy/MM/dd HH:mm\" }}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"flex--4\"></div>\r\n                </div>\r\n\r\n                <!-- ROW 3 -->\r\n                <div style=\"display: flex; margin-top: 32px;\">\r\n                  <div class=\"section\" style=\"flex-grow: 1; margin-top: 0;\">\r\n                    <h4 class=\"section-title\">\r\n                      {{ getComponentName() + \".shipper\" | translate }}\r\n                    </h4>\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\">\r\n                        <div class=\"form-group\" *ngIf=\"transferOrder.bidtSiteIssue\">\r\n                          <label class=\"form-label\">{{ getComponentName() + \".site\" | translate }}</label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <div class=\"form-control-generic\">\r\n                              {{ transferOrder?.bidtSiteIssue?.siteCode }}\r\n                              <ng-container *ngIf=\"transferOrder?.bidtSiteIssue?.siteName\">\r\n                                - {{ transferOrder?.bidtSiteIssue?.siteName }}\r\n                              </ng-container>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\" *ngIf=\"transferOrder.bidtWarehouseIssue\">\r\n                          <label class=\"form-label\">{{ \"warehouse\" | translate }}</label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <div class=\"form-control-generic\">\r\n                              {{ transferOrder.bidtWarehouseIssue.whCode }}\r\n                              <ng-container *ngIf=\"transferOrder.bidtWarehouseIssue.whName\">\r\n                                - {{ transferOrder.bidtWarehouseIssue.whName }}\r\n                              </ng-container>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"section\" style=\"flex-grow: 1; margin-top: 0;\">\r\n                    <h4 class=\"section-title\">\r\n                      {{ getComponentName() + \".recepient\" | translate }}\r\n                    </h4>\r\n\r\n                    <div class=\"section-content\">\r\n                      <div class=\"row\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".site\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <div class=\"form-control-generic\">\r\n                              {{ transferOrder?.bidtSiteReceipt?.siteCode }}\r\n                              <ng-container *ngIf=\"transferOrder?.bidtSiteReceipt?.siteName\">\r\n                                - {{ transferOrder?.bidtSiteReceipt?.siteName }}\r\n                              </ng-container>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <label class=\"form-label\">\r\n                            {{ getComponentName() + \".warehouseAndWorkshop\" | translate }}\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <div class=\"form-control-generic\">\r\n                              {{ transferOrder?.bidtWarehouseReceipt?.whCode }}\r\n                              <ng-container *ngIf=\"transferOrder?.bidtWarehouseReceipt?.whName\">\r\n                                - {{ transferOrder?.bidtWarehouseReceipt?.whName }}\r\n                              </ng-container>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\" *ngIf=\"workPackageAsset\">\r\n                          <label class=\"form-label\">\r\n                            <ng-container\r\n                              *ngIf=\"\r\n                                workPackageAsset.equipmentFunction == aWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY\r\n                              \"\r\n                            >\r\n                              {{ \"aircraft\" | translate }}\r\n                            </ng-container>\r\n                            <ng-container\r\n                              *ngIf=\"\r\n                                workPackageAsset.equipmentFunction == aWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY\r\n                              \"\r\n                            >\r\n                              {{ \"engine\" | translate }}\r\n                            </ng-container>\r\n                            <ng-container\r\n                              *ngIf=\"\r\n                                workPackageAsset.equipmentFunction !=\r\n                                  aWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY &&\r\n                                workPackageAsset.equipmentFunction != aWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY\r\n                              \"\r\n                            >\r\n                              {{ \"equipment\" | translate }}\r\n                            </ng-container>\r\n                          </label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <div class=\"form-control-generic\">\r\n                              <a (click)=\"openWorkPackageAsset()\">{{ workPackageAssetName }}</a>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"grid-cell--4\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".item\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <div class=\"column\">\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".partNumber\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\">\r\n                        {{ selectedTorItemBirePn?.pnCode }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".requestedQuantity\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\">\r\n                        {{ formatQuantity(selectedTorItem?.quantity) }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".designation\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"form-control-generic\">\r\n                        {{ selectedTorItemBirePn?.articleDesignation }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title\">\r\n                  {{ componentData.componentId + \".advancement\" | translate }}\r\n                </h4>\r\n\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\" style=\"margin-bottom: 8px;\">\r\n                    <div\r\n                      style=\"padding: 8px; color: #000; border-radius: 4px; margin-left: 16px;\"\r\n                      [ngClass]=\"{\r\n                        'served--nok': shippedNb == 0,\r\n                        'served--ok': shippedNb > 0 && shippedNb === selectedTorItem.quantity,\r\n                        'served--warning': shippedNb > 0 && shippedNb !== selectedTorItem.quantity\r\n                      }\"\r\n                    >\r\n                      <span *ngIf=\"shippedNb == 0\">\r\n                        {{ componentData.componentId + \".notSelected\" | translate }}\r\n                      </span>\r\n                      <span *ngIf=\"shippedNb > 0 && shippedNb !== selectedTorItem.quantity\">\r\n                        {{ componentData.componentId + \".partiallySelected\" | translate }}\r\n                      </span>\r\n                      <span *ngIf=\"shippedNb > 0 && shippedNb === selectedTorItem.quantity\">\r\n                        {{ componentData.componentId + \".inTransit\" | translate }}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group flex-row--align-center\">\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\" style=\"font-size: 3rem; padding-bottom: 1rem;\">\r\n                          {{ notSelectedNb }}\r\n                        </div>\r\n                      </div>\r\n                      <label class=\"form-label\">\r\n                        <ng-container>\r\n                          {{ getComponentName() + \".notSelected\" | translate }}\r\n                        </ng-container>\r\n                      </label>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex-row--align-center\">\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\" style=\"font-size: 3rem; padding-bottom: 1rem\">\r\n                          {{ selectedNb }}\r\n                        </div>\r\n                      </div>\r\n                      <label class=\"form-label\">\r\n                        <ng-container>\r\n                          {{ getComponentName() + \".selected\" | translate }}\r\n                        </ng-container>\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"form-group flex-row--align-center\">\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\" style=\"font-size: 3rem; padding-bottom: 1rem\">\r\n                          {{ shippedNb }}\r\n                        </div>\r\n                      </div>\r\n                      <label class=\"form-label\">{{ getComponentName() + \".inTransit\" | translate }}</label>\r\n                    </div>\r\n                    <div class=\"form-group flex-row--align-center\">\r\n                      <div class=\"form-control\">\r\n                        <div class=\"form-control-generic\" style=\"font-size: 3rem; padding-bottom: 1rem\">\r\n                          {{ receivedNb }}\r\n                        </div>\r\n                      </div>\r\n                      <label\r\n                        class=\"form-label\"\r\n                        *ngIf=\"transferOrder.torType !== aWPropertiesConstants.TRANSFER_ORDER_TYPE_REVERSE_MVT\"\r\n                        >{{ getComponentName() + \".delivered\" | translate }}</label\r\n                      >\r\n                      <label\r\n                        class=\"form-label\"\r\n                        *ngIf=\"transferOrder.torType === aWPropertiesConstants.TRANSFER_ORDER_TYPE_REVERSE_MVT\"\r\n                        >{{ getComponentName() + \".reversed\" | translate }}</label\r\n                      >\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container  loading-indicator\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".suggestedAssets\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div\r\n                  class=\"form-group\"\r\n                  *ngIf=\"\r\n                    transferOrder.torType != aWPropertiesConstants.TRANSFER_ORDER_TYPE_REVERSE_MVT &&\r\n                    transferOrder.torType != aWPropertiesConstants.TRANSFER_ORDER_TYPE_INTRA_SITE\r\n                  \"\r\n                >\r\n                  <div class=\"form-control aw-selectbutton-wrapper\">\r\n                    <p-selectButton\r\n                      [(ngModel)]=\"selectedcandidateAssetCategory\"\r\n                      [options]=\"candidateAssetCategoryList\"\r\n                      (onChange)=\"updateCandidateAssetTableColumns()\"\r\n                    ></p-selectButton>\r\n                  </div>\r\n                </div>\r\n\r\n                <p-table\r\n                  [resizableColumns]=\"true\"\r\n                  #ptableResults\r\n                  class=\"aw-table2\"\r\n                  [columns]=\"materialProposedTableCols\"\r\n                  [value]=\"candidateAssets\"\r\n                  [scrollable]=\"true\"\r\n                >\r\n                  <ng-template pTemplate=\"emptymessage\">\r\n                    <span *ngIf=\"!iscandidateAssetsLoading\"> &nbsp;</span>\r\n\r\n                    <div *ngIf=\"iscandidateAssetsLoading\" class=\"aw-table-loading-indicator\">\r\n                      <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                      <div class=\"lds-hourglass\"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"caption\">\r\n                    <div class=\"aw-table-header\">\r\n                      <div class=\"aw-table-global-filter\">\r\n                        <label class=\"aw-table-global-filter-label\">\r\n                          <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableResultsGlobalFilter\r\n                          class=\"aw-table-global-filter-input\"\r\n                          type=\"text\"\r\n                          placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                          (input)=\"ptableResults.filterGlobal($event.target.value, 'contains')\"\r\n                        />\r\n                      </div>\r\n\r\n                      <div class=\"table-actions\">\r\n                        <div class=\"aw-table-icon-actions\" style=\"margin-left: 0px;\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay\"\r\n                            aria-hidden=\"true\"\r\n                            [ngClass]=\"{ active: filtersVisible }\"\r\n                            (click)=\"opFilters.toggle($event)\"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"colgroup\" let-columns>\r\n                    <colgroup>\r\n                      <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                      <col [ngStyle]=\"{ width: '10%' }\" />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"header\" let-columns>\r\n                    <tr>\r\n                      <th\r\n                        pResizableColumn\r\n                        *ngFor=\"let col of columns\"\r\n                        [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                        [ngSwitch]=\"col.field\"\r\n                      >\r\n                        <ng-container *ngSwitchCase=\"'sn'\">\r\n                          <ng-container\r\n                            *ngIf=\"\r\n                              selectedTorItemBirePn?.traceability == aWPropertiesConstants.PN_TRACEABILITY_BY_SN ||\r\n                              selectedTorItemBirePn?.traceability ==\r\n                                aWPropertiesConstants.PN_TRACEABILITY_BY_PACKAGING_BATCH_AND_SN\r\n                            \"\r\n                          >\r\n                            {{ getComponentName() + \".sn\" | translate }}\r\n                          </ng-container>\r\n                          <ng-container\r\n                            *ngIf=\"\r\n                              selectedTorItemBirePn?.traceability == aWPropertiesConstants.PN_TRACEABILITY_BY_BATCH\r\n                            \"\r\n                          >\r\n                            {{ getComponentName() + \".manufacturingBatch\" | translate }}\r\n                          </ng-container>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngSwitchDefault>\r\n                          {{ getComponentName() + \".\" + col.field | translate }}\r\n                        </ng-container>\r\n                      </th>\r\n\r\n                      <th style=\"text-align: center;\">Action</th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                    <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                      <td\r\n                        *ngFor=\"let col of columns\"\r\n                        [ngSwitch]=\"col.field\"\r\n                        [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                      >\r\n                        <div *ngSwitchCase=\"'msn'\">\r\n                          <div class=\"row\">\r\n                            <a class=\"font-bold\" (click)=\"openEquipment(rowData['topEquipment'])\">{{\r\n                              rowData[\"topEquipment\"]?.sn\r\n                            }}</a>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            {{ formatEquipmentStatus(rowData[\"topEquipment\"]?.equipmentDesignation) }}\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase=\"'locationForPicking'\">\r\n                          {{\r\n                            rowData[\"currentBidmProject\"]\r\n                              ? formatSite(rowData[\"currentBidmProject\"].bireRepairCenterCode)\r\n                              : rowData[\"topEquipmentLocation\"]\r\n                          }}\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase=\"'material'\">\r\n                          <div class=\"row\">\r\n                            <a class=\"font-bold\" (click)=\"openPart(rowData)\">{{ rowData[\"pn\"]?.pnCode }}</a>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <span class=\"italic\">{{ rowData[\"equipment\"]?.equipmentDesignation }}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase=\"'sn'\">\r\n                          <div class=\"row\">\r\n                            <a\r\n                              class=\"font-bold\"\r\n                              (click)=\"openEquipment(rowData['equipment'])\"\r\n                              *ngIf=\"rowData['equipment'].sn && !rowData['stockInformation']?.manufacturingBatchNumber\"\r\n                            >\r\n                              {{ rowData[\"equipment\"]?.sn }}\r\n                            </a>\r\n                            <a\r\n                              class=\"bold\"\r\n                              (click)=\"openManufacturingBatch(rowData['stockInformation'].manufacturingBatchNumber)\"\r\n                              *ngIf=\"!rowData['equipment'].sn && rowData['stockInformation']?.manufacturingBatchNumber\"\r\n                            >\r\n                              {{ rowData[\"stockInformation\"].manufacturingBatchNumber }}\r\n                            </a>\r\n                          </div>\r\n\r\n                          <div class=\"row\" *ngIf=\"!rowData['equipment'].batchNumber\">\r\n                            <span class=\"italic\">{{\r\n                              formatEquipmentStatus(rowData[\"equipment\"]?.operationalStatus)\r\n                            }}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase=\"'snBatch'\">\r\n                          <div class=\"row\">\r\n                            <a\r\n                              class=\"font-bold\"\r\n                              (click)=\"openEquipment(rowData['equipment'])\"\r\n                              *ngIf=\"rowData['equipment'].sn && !rowData['stockInformation']?.manufacturingBatchNumber\"\r\n                            >\r\n                              {{ rowData[\"equipment\"]?.sn }}\r\n                            </a>\r\n                            <a\r\n                              class=\"bold\"\r\n                              (click)=\"openManufacturingBatch(rowData['stockInformation'].manufacturingBatchNumber)\"\r\n                              *ngIf=\"!rowData['equipment'].sn && rowData['stockInformation']?.manufacturingBatchNumber\"\r\n                            >\r\n                              {{ rowData[\"stockInformation\"].manufacturingBatchNumber }}\r\n                            </a>\r\n                          </div>\r\n\r\n                          <div class=\"row\" *ngIf=\"!rowData['equipment'].batchNumber\">\r\n                            <span class=\"italic\">{{\r\n                              formatEquipmentStatus(rowData[\"equipment\"]?.operationalStatus)\r\n                            }}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase=\"'quantity'\">\r\n                          {{ rowData[\"equipment\"]?.quantity | formatNumber }}\r\n                          <ng-container *ngIf=\"rowData['stockInformation'].stockMvtUnit\">\r\n                            {{ rowData[\"stockInformation\"].stockMvtUnit }}\r\n                          </ng-container>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase=\"'batch'\">\r\n                          <div class=\"row\">\r\n                            <a\r\n                              class=\"font-bold\"\r\n                              (click)=\"\r\n                                rowData['equipment']?.sn\r\n                                  ? openEquipment(rowData['equipment'])\r\n                                  : openBatch(rowData['equipment'].equipmentCode)\r\n                              \"\r\n                              *ngIf=\"rowData['equipment']\"\r\n                            >\r\n                              {{ rowData[\"equipment\"].batchNumber }}\r\n                            </a>\r\n                          </div>\r\n\r\n                          <div class=\"row\" *ngIf=\"rowData['equipment'].batchNumber\">\r\n                            <span class=\"italic\">{{\r\n                              formatEquipmentStatus(rowData[\"equipment\"]?.operationalStatus)\r\n                            }}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase=\"'location'\">\r\n                          <div class=\"row\" *ngIf=\"rowData['siteReceipt']?.siteName\">\r\n                            <span class=\"font-bold\">{{ rowData[\"siteReceipt\"]?.siteName }}</span>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <span class=\"italic\">{{ rowData[\"warehouseReceipt\"]?.whName }}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase=\"'technicalData'\">\r\n                          <div class=\"row\" *ngIf=\"rowData['potentialValue']\">\r\n                            <span style=\"width: 5rem;\">{{ getComponentName() + \".potential\" | translate }}</span>\r\n                            <span class=\"font-bold\"\r\n                              >{{ formatPotential(rowData[\"potentialValue\"]) }} {{ rowData[\"potentialUnit\"] }}</span\r\n                            >\r\n                          </div>\r\n\r\n                          <div class=\"row\" *ngIf=\"rowData['calendarPotential']\">\r\n                            <span style=\"width: 5rem;\">{{ getComponentName() + \".expiration\" | translate }}</span>\r\n                            <span class=\"font-bold\">{{\r\n                              rowData[\"calendarPotential\"] | date: \"yyyy/MM/dd\":\"\":translateService.currentLang\r\n                            }}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase=\"'availabilityAtDate'\">\r\n                          <div class=\"row\">\r\n                            <span *ngIf=\"isCandidateAssetServed(rowData)\" class=\"font-bold\">\r\n                              {{ getComponentName() + \".served\" | translate }}\r\n                            </span>\r\n\r\n                            <span\r\n                              class=\"font-bold\"\r\n                              [ngClass]=\"{\r\n                                green: !rowData['transferOrder'] || rowData['transferOrder'].id === transferOrder.id,\r\n                                yellow: rowData['transferOrder'] && rowData['transferOrder'].id !== transferOrder.id\r\n                              }\"\r\n                              *ngIf=\"isAvailableAtDate(rowData) && !isCandidateAssetServed(rowData)\"\r\n                            >\r\n                              {{ \"yes\" | translate }}\r\n                              <span *ngIf=\"rowData['plannedAvailabilityDate']\">\r\n                                ({{\r\n                                  rowData[\"plannedAvailabilityDate\"]\r\n                                    | date: \"yyyy/MM/dd\":\"\":translateService.currentLang\r\n                                }})\r\n                              </span>\r\n                            </span>\r\n                            <span class=\"font-bold red\" *ngIf=\"!isAvailableAtDate(rowData)\">\r\n                              {{ \"no\" | translate }}\r\n                              <span *ngIf=\"rowData['plannedAvailabilityDate']\">\r\n                                ({{\r\n                                  rowData[\"plannedAvailabilityDate\"]\r\n                                    | date: \"yyyy/MM/dd\":\"\":translateService.currentLang\r\n                                }})\r\n                              </span>\r\n                            </span>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <span\r\n                              *ngIf=\"rowData['transferOrder'] && rowData['transferOrder'].id === transferOrder.id\"\r\n                              style=\"font-style: italic;\"\r\n                              class=\"green\"\r\n                            >\r\n                              <ng-container\r\n                                *ngIf=\"\r\n                                  rowData['transferOrder']?.torStatus ==\r\n                                  aWPropertiesConstants.TRANSFER_ORDER_STATUS_PLANNED\r\n                                \"\r\n                              >\r\n                                {{ getBookedQty(rowData) | formatNumber }}\r\n                                {{ getComponentName() + \".selectedBy\" | translate }}\r\n                              </ng-container>\r\n                              <ng-container\r\n                                *ngIf=\"\r\n                                  rowData['transferOrder']?.torStatus !=\r\n                                  aWPropertiesConstants.TRANSFER_ORDER_STATUS_PLANNED\r\n                                \"\r\n                              >\r\n                                {{ getBookedQty(rowData) | formatNumber }}\r\n                                {{ getComponentName() + \".bookedBy\" | translate }}\r\n                              </ng-container>\r\n\r\n                              <a (click)=\"openTransferOrder(rowData['transferOrder'])\">{{\r\n                                rowData[\"transferOrder\"]?.torCode\r\n                              }}</a>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"\r\n                                rowData['transferOrder'] &&\r\n                                rowData['transferOrder'].id !== transferOrder.id &&\r\n                                (!rowData['warehouseReceipt'] ||\r\n                                  rowData['warehouseReceipt'] !==\r\n                                    aWPropertiesConstants.MM_WAREHOUSE_TYPE_DEPLOYEMENT_BATCH)\r\n                              \"\r\n                              style=\"font-style: italic;\"\r\n                              class=\"yellow\"\r\n                            >\r\n                              <ng-container\r\n                                *ngIf=\"\r\n                                  rowData['transferOrder']?.torStatus ==\r\n                                  aWPropertiesConstants.TRANSFER_ORDER_STATUS_PLANNED\r\n                                \"\r\n                              >\r\n                                {{ getComponentName() + \".selectedFor\" | translate }}\r\n                              </ng-container>\r\n                              <ng-container\r\n                                *ngIf=\"\r\n                                  rowData['transferOrder']?.torStatus !=\r\n                                  aWPropertiesConstants.TRANSFER_ORDER_STATUS_PLANNED\r\n                                \"\r\n                              >\r\n                                {{ getComponentName() + \".bookedFor\" | translate }}\r\n                              </ng-container>\r\n\r\n                              <a (click)=\"openProcurementRequest(rowData['transferOrder'])\">\r\n                                {{ rowData[\"transferOrder\"]?.torCode }}\r\n                              </a>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"rowData['bookingProcurementRequest']\"\r\n                              style=\"font-style: italic;\"\r\n                              class=\"yellow\"\r\n                            >\r\n                              {{ getComponentName() + \".selectedFor\" | translate }}\r\n\r\n                              <a (click)=\"openProcurementRequest(rowData['bookingProcurementRequest'])\">\r\n                                {{ rowData[\"bookingProcurementRequest\"].procCode }}\r\n                              </a>\r\n                            </span>\r\n\r\n                            <span\r\n                              *ngIf=\"\r\n                                rowData['transferOrder'] &&\r\n                                rowData['transferOrder'].id !== transferOrder.id &&\r\n                                rowData['warehouseReceipt'] ===\r\n                                  aWPropertiesConstants.MM_WAREHOUSE_TYPE_DEPLOYEMENT_BATCH\r\n                              \"\r\n                              style=\"font-style: italic;\"\r\n                              class=\"yellow\"\r\n                            >\r\n                              {{ getComponentName() + \".bookedForDeploymentBatch\" | translate }}\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div *ngSwitchCase=\"'satisfactionRate'\">\r\n                          <div class=\"row\" *ngIf=\"!isCandidateAssetServed(rowData)\">\r\n                            <div style=\"width: 100%; cursor: pointer;\">\r\n                              <p-progressBar\r\n                                [ngClass]=\"{\r\n                                  green: calculateSatisfactionRate(rowData) == 100,\r\n                                  yellow: calculateSatisfactionRate(rowData) < 100,\r\n                                  red: calculateSatisfactionRate(rowData) < 40\r\n                                }\"\r\n                                [value]=\"calculateSatisfactionRate(rowData)\"\r\n                                (click)=\"openSatisfactionRateDetails(rowData)\"\r\n                              ></p-progressBar>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </td>\r\n\r\n                      <td style=\"text-align: center;\">\r\n                        <button\r\n                          style=\"margin: 0 auto\"\r\n                          type=\"button\"\r\n                          class=\"btn-with-spinner\"\r\n                          mat-raised-button\r\n                          (click)=\"bookCandidateAsset(rowData)\"\r\n                          *ngIf=\"!rowData['transferOrder'] && isSelectBtnVisible() && !isCandidateAssetServed(rowData)\"\r\n                        >\r\n                          <span class=\"lds-hourglass\" *ngIf=\"rowData['_bookCandidateAssetLoading']\"></span>\r\n                          {{ getComponentName() + \".select\" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          style=\"margin: 0 auto\"\r\n                          type=\"button\"\r\n                          (click)=\"cancelBooking(rowData)\"\r\n                          *ngIf=\"\r\n                            rowData['transferOrder'] &&\r\n                            rowData['transferOrder'].id == transferOrder.id &&\r\n                            isCancelBookingBtnVisible(rowData)\r\n                          \"\r\n                          mat-raised-button\r\n                          color=\"warn\"\r\n                        >\r\n                          {{ getComponentName() + \".cancel\" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          style=\"margin: 0 auto\"\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                          color=\"accent\"\r\n                          *ngIf=\"\r\n                            rowData['transferOrder'] &&\r\n                            rowData['transferOrder'].id != transferOrder.id &&\r\n                            (rowData['transferOrder'].torStatus ==\r\n                              aWPropertiesConstants.TRANSFER_ORDER_STATUS_PERFORMED ||\r\n                              rowData['transferOrder'].torStatus ==\r\n                                aWPropertiesConstants.TRANSFER_ORDER_STATUS_ON_GOING) &&\r\n                            rowData['_hasPreemptionRight'] &&\r\n                            isSelectBtnVisible()\r\n                          \"\r\n                          (click)=\"confirmPreemptCandidateAsset(rowData)\"\r\n                        >\r\n                          {{ getComponentName() + \".select\" | translate }}\r\n                        </button>\r\n\r\n                        <button\r\n                          style=\"margin: 0 auto\"\r\n                          type=\"button\"\r\n                          mat-raised-button\r\n                          *ngIf=\"\r\n                            rowData['transferOrder'] &&\r\n                            rowData['transferOrder'].id != transferOrder.id &&\r\n                            rowData['transferOrder'].torStatus !=\r\n                              aWPropertiesConstants.TRANSFER_ORDER_STATUS_PERFORMED &&\r\n                            rowData['transferOrder'].torStatus !=\r\n                              aWPropertiesConstants.TRANSFER_ORDER_STATUS_ON_GOING &&\r\n                            isSelectBtnVisible()\r\n                          \"\r\n                          (click)=\"preemptCandidateAsset(rowData)\"\r\n                        >\r\n                          {{ getComponentName() + \".select\" | translate }}\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<p-overlayPanel #opFilters class=\"aw-overlay\" (onShow)=\"filtersVisible = true\" (onHide)=\"filtersVisible = false\">\r\n  <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n    <div class=\"col\">\r\n      <div class=\"section\">\r\n        <h4 class=\"section-title\">{{ getComponentName() + \".location\" | translate }}</h4>\r\n\r\n        <div class=\"section-content\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group\" style=\"min-width: 350px;\">\r\n              <label class=\"form-label\"> {{ getComponentName() + \".site\" | translate }} </label>\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  placeholder=\"&nbsp;\"\r\n                  [showClear]=\"true\"\r\n                  [(ngModel)]=\"searchFilterObject.site\"\r\n                  [options]=\"siteList\"\r\n                  (onChange)=\"loadLocationWarehouses()\"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label\r\n                class=\"form-label\"\r\n                *ngIf=\"locationWarehouseType === aWPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE\"\r\n              >\r\n                {{ componentData.componentId + \".warehouse\" | translate }}\r\n              </label>\r\n              <label\r\n                class=\"form-label\"\r\n                *ngIf=\"locationWarehouseType === aWPropertiesConstants.WAREHOUSE_CATEGORY_WORKSHOP\"\r\n              >\r\n                {{ componentData.componentId + \".workshop\" | translate }}\r\n              </label>\r\n\r\n              <div class=\"form-control \">\r\n                <p-selectButton\r\n                  [options]=\"logisticsTypeList\"\r\n                  [(ngModel)]=\"locationWarehouseType\"\r\n                  (onChange)=\"loadLocationWarehouses()\"\r\n                ></p-selectButton>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\" style=\"min-width: 400px;\">\r\n              <label class=\"form-label\">&nbsp;</label>\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  placeholder=\"&nbsp;\"\r\n                  [showClear]=\"true\"\r\n                  [(ngModel)]=\"searchFilterObject.warehouse\"\r\n                  [options]=\"warehouseList\"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <div class=\"section-content\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\"> {{ getComponentName() + \".sn\" | translate }} </label>\r\n              <div class=\"form-control\">\r\n                <input class=\"aw-input\" name=\"sn\" type=\"text\" [(ngModel)]=\"searchFilterObject.sn\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"form-label\"> {{ getComponentName() + \".status\" | translate }} </label>\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  [options]=\"equipmentStatusListFilter\"\r\n                  [showClear]=\"true\"\r\n                  placeholder=\"&nbsp;\"\r\n                  [(ngModel)]=\"searchFilterObject.status\"\r\n                >\r\n                </p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <h4 class=\"section-title\">{{ getComponentName() + \".satisfactionRate\" | translate }}</h4>\r\n        <div class=\"section-content\">\r\n          <div class=\"form-group\">\r\n            <div class=\"row\" style=\"padding-bottom: 5px;\">\r\n              <div class=\"flex--2\">\r\n                <div class=\"form-control\">\r\n                  <label class=\"form-label\"> {{ getComponentName() + \".sameSiteFilter\" | translate }} </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"flex--1\">\r\n                <div class=\"form-control aw-selectbutton-wrapper\">\r\n                  <p-selectButton\r\n                    [(ngModel)]=\"searchFilterObject.sameSite\"\r\n                    [options]=\"satifactionRateStatus\"\r\n                  ></p-selectButton>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" style=\"padding-bottom: 5px;\">\r\n              <div class=\"flex--2\">\r\n                <div class=\"form-control\">\r\n                  <label class=\"form-label\"> {{ getComponentName() + \".bookingStatusFilter\" | translate }} </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"flex--1\">\r\n                <div class=\"form-control aw-selectbutton-wrapper\">\r\n                  <p-selectButton\r\n                    [(ngModel)]=\"searchFilterObject.bookingStatus\"\r\n                    [options]=\"satifactionRateStatus\"\r\n                  ></p-selectButton>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" style=\"padding-bottom: 5px;\">\r\n              <div class=\"flex--2\">\r\n                <div class=\"form-control\">\r\n                  <label class=\"form-label\"> {{ getComponentName() + \".availableAtDateFilter\" | translate }} </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"flex--1\">\r\n                <div class=\"form-control aw-selectbutton-wrapper\">\r\n                  <p-selectButton\r\n                    [(ngModel)]=\"searchFilterObject.availableAtDate\"\r\n                    [options]=\"satifactionRateStatus\"\r\n                  ></p-selectButton>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" style=\"padding-bottom: 5px;\">\r\n              <div class=\"flex--2\">\r\n                <div class=\"form-control\">\r\n                  <label class=\"form-label\">\r\n                    {{ getComponentName() + \".noUnconfirmedFailureFilter\" | translate }}\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"flex--1\">\r\n                <div class=\"form-control aw-selectbutton-wrapper\">\r\n                  <p-selectButton\r\n                    [(ngModel)]=\"searchFilterObject.noUnconfirmedFailure\"\r\n                    [options]=\"satifactionRateStatus\"\r\n                  ></p-selectButton>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row action-list\" style=\"justify-content: flex-end;\">\r\n      <button type=\"button\" mat-raised-button (click)=\"opFilters.hide(); filtersVisible = false; resetFilters()\">\r\n        {{ \"global.reset\" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        type=\"button\"\r\n        mat-raised-button\r\n        (click)=\"opFilters.hide(); filtersVisible = false; filterSearchResult()\"\r\n        color=\"primary\"\r\n        style=\"margin-left: 8px;\"\r\n      >\r\n        {{ \"global.filter\" | translate }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</p-overlayPanel>\r\n\r\n<aw-dialog-satisfaction-rate-transfer-order\r\n  [(display)]=\"showSatisfactionRateDialog\"\r\n  *ngIf=\"showSatisfactionRateDialog\"\r\n  [transferOrder]=\"transferOrder\"\r\n  [candidateAsset]=\"selectedCandidateAsset\"\r\n></aw-dialog-satisfaction-rate-transfer-order>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/material-request-transfer-order-management/form/material-request-transfer-order-management-form.component.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-transfer-order-management/form/material-request-transfer-order-management-form.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: CandidateAssetCategory, SatisfactoryRateFilterState, MaterialRequestTransferOrderManagementFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateAssetCategory", function() { return CandidateAssetCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SatisfactoryRateFilterState", function() { return SatisfactoryRateFilterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialRequestTransferOrderManagementFormComponent", function() { return MaterialRequestTransferOrderManagementFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/bidt-stock-mvt-constants */ "./src/app/shared/constants/bidt-stock-mvt-constants.ts");
/* harmony import */ var _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/bidt-stock-mvt-type-constants */ "./src/app/shared/constants/bidt-stock-mvt-type-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/utils/number-utils */ "./src/app/shared/utils/number-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../logistics.service */ "./src/app/main/logistics/logistics.service.ts");
/* harmony import */ var _material_request_transfer_order_management_form_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./material-request-transfer-order-management-form.service */ "./src/app/main/logistics/material-request-transfer-order-management/form/material-request-transfer-order-management-form.service.ts");
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


























var CandidateAssetCategory;
(function (CandidateAssetCategory) {
    CandidateAssetCategory[CandidateAssetCategory["GLOBAL"] = 0] = "GLOBAL";
    CandidateAssetCategory[CandidateAssetCategory["LOCAL"] = 1] = "LOCAL";
    CandidateAssetCategory[CandidateAssetCategory["PICKING"] = 2] = "PICKING";
    CandidateAssetCategory[CandidateAssetCategory["WAREHOUSE"] = 3] = "WAREHOUSE";
})(CandidateAssetCategory || (CandidateAssetCategory = {}));
var SatisfactoryRateFilterState;
(function (SatisfactoryRateFilterState) {
    SatisfactoryRateFilterState[SatisfactoryRateFilterState["UNDEFINED"] = 0] = "UNDEFINED";
    SatisfactoryRateFilterState[SatisfactoryRateFilterState["YES"] = 1] = "YES";
    SatisfactoryRateFilterState[SatisfactoryRateFilterState["NO"] = 2] = "NO";
})(SatisfactoryRateFilterState || (SatisfactoryRateFilterState = {}));
var MaterialRequestTransferOrderManagementFormComponent = /** @class */ (function (_super) {
    __extends(MaterialRequestTransferOrderManagementFormComponent, _super);
    function MaterialRequestTransferOrderManagementFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, dateService, translateService, confirmationService, logisticsService, propertiesService, materialRequestTransferOrderFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.dateService = dateService;
        _this.translateService = translateService;
        _this.confirmationService = confirmationService;
        _this.logisticsService = logisticsService;
        _this.propertiesService = propertiesService;
        _this.materialRequestTransferOrderFormService = materialRequestTransferOrderFormService;
        _this.CRITICITY_GREEN = 'green';
        _this.CRITICITY_RED = 'red';
        _this.CRITICITY_YELLOW = 'yellow';
        _this.aWPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"];
        _this.componentOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"];
        _this.candidateAssetCategory = CandidateAssetCategory;
        _this.init();
        _this.initMaterialProposedTableCols();
        _this.materialRequestTransferOrderFormService.findAllSite().subscribe(function (sites) {
            _this.sites = sites;
        });
        _this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].PROCUREMENT_REQUEST_STATUS_MAP).subscribe(function (statusList) {
            _this.statusList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__["ListUtils"].orEmpty(statusList).sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
        });
        _this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].OPERATIONAL_STATUS_MAP).subscribe(function (statusList) {
            _this.equipmentStatusList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__["ListUtils"].orEmpty(statusList).sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
        });
        _this.materialRequestTransferOrderFormService.getOperationalStatusMap(' ').subscribe(function (statusList) {
            _this.equipmentStatusListFilter = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__["ListUtils"].orEmpty(statusList).sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
        });
        _this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].WAREHOUSE_CATEGORY_MAP).subscribe(function (res) {
            if (res && res.length) {
                _this.logisticsTypeList = res.sort(function (s1, s2) { return s1.value.localeCompare(s2.value); });
                _this.locationWarehouseType = _this.logisticsTypeList[0].value;
            }
        });
        _this.materialRequestTransferOrderFormService.fetchTypeList().subscribe(function (list) {
            _this.torTypeList = list;
        });
        _this.materialRequestTransferOrderFormService.findAllSite().subscribe({
            next: function (sites) {
                _this.siteList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__["ListUtils"].orEmpty(sites)
                    .filter(function (site) { return !!site.siteId && !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(site.siteName); })
                    .map(function (site) {
                    return {
                        label: site.siteCode + " - " + site.siteName,
                        value: site.siteId
                    };
                })
                    .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
            }
        });
        var localLevelKey = _this.getTranslateKey('localLevel');
        var globalLevelKey = _this.getTranslateKey('globalLevel');
        var warehouseLevelKey = _this.getTranslateKey('warehouseLevel');
        var yesKey = _this.getTranslateKey('yes');
        var noKey = _this.getTranslateKey('no');
        var undefinedKey = _this.getTranslateKey('undefined');
        _this.translateService
            .get([localLevelKey, globalLevelKey, warehouseLevelKey, yesKey, noKey, undefinedKey])
            .subscribe({
            next: function (results) {
                var localLevelLabel = !!results ? results[localLevelKey] : 'Local';
                var globalLevelLabel = !!results ? results[globalLevelKey] : 'Global';
                var warehouseLevelLabel = !!results ? results[warehouseLevelKey] : 'Warehouse';
                _this.candidateAssetCategoryList = [
                    { label: warehouseLevelLabel, value: CandidateAssetCategory.WAREHOUSE },
                    { label: localLevelLabel, value: CandidateAssetCategory.LOCAL },
                    { label: globalLevelLabel, value: CandidateAssetCategory.GLOBAL }
                ];
                var yesLabel = !!results ? results[yesKey] : 'Yes';
                var noLabel = !!results ? results[noKey] : 'No';
                var undefinedLabel = !!results ? results[undefinedKey] : 'Undefined';
                _this.satifactionRateStatus = [
                    { label: undefinedLabel, value: SatisfactoryRateFilterState.UNDEFINED },
                    { label: yesLabel, value: SatisfactoryRateFilterState.YES },
                    { label: noLabel, value: SatisfactoryRateFilterState.NO }
                ];
            }
        });
        return _this;
    }
    MaterialRequestTransferOrderManagementFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_MATERIAL_REQUEST_TRANSFER_ORDER_MANAGEMENT_FORM;
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.updateOpenMode(this.componentData.openMode);
        this.load();
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.reload = function () {
        this.load();
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.load = function () {
        var _this = this;
        if (!this.isCreateOpenMode && this.componentData.objectId) {
            var _a = this.serializationService.deserialize(this.componentData.objectId), torId = _a.torId, torItemId_1 = _a.torItemId;
            this.materialRequestTransferOrderFormService
                .findTransferOrderById(torId)
                .subscribe(function (ftor) {
                _this.transferOrder = ftor.bidtTransferOrder;
                if (!!_this.transferOrder.bidtTorItems) {
                    var tempSelectedTorItem = _this.transferOrder.bidtTorItems.find(function (item) { return item.id === torItemId_1; });
                    if (!!tempSelectedTorItem) {
                        _this.selectedTorItem = tempSelectedTorItem;
                    }
                    if (!!_this.selectedTorItem) {
                        _this.materialRequestTransferOrderFormService
                            .getBirePnByPn({ pnCode: _this.selectedTorItem.birePnPnCode })
                            .subscribe(function (result) {
                            _this.selectedTorItemBirePn = result;
                            _this.updateCandidateAssetTableColumns();
                        });
                    }
                }
                if (_this.transferOrder.statusUser) {
                    _this.materialRequestTransferOrderFormService.findUser(_this.transferOrder.statusUser).subscribe(function (user) {
                        _this.applicant = user.firstname + " " + user.lastname;
                        _this.applicantLogin = !!user.login ? user.login : '';
                    });
                }
            });
        }
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.openEquipment = function (equipment) {
        if (equipment) {
            var componentId = equipment.equipmentFunction === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY
                ? _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].FLE_AIRCRAFT_FORM
                : equipment.equipmentFunction === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY
                    ? _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].FLE_ENGINE_FORM
                    : _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].FLE_EQUIPMENT_FORM;
            var data = {
                componentId: componentId,
                id: this.tabService.generateId(),
                objectId: this.serializationService.serialize({ equipmentCode: equipment.equipmentCode }),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.openManufacturingBatch = function (manufacturingBatchNumber) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_MANUFACTURING_BATCH_FORM,
            objectId: this.serializationService.serialize({ customerCode: manufacturingBatchNumber }),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.openPart = function (candidateAsset) {
        if (candidateAsset.pn) {
            var data = {
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].ENG_PART_NUMBER_FORM,
                id: this.tabService.generateId(),
                objectId: candidateAsset.pn.pnCode,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.calculateSituation = function () {
        var stockMvts = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__["ListUtils"].orEmpty(this.selectedTorItem.pickingMovements).filter(function (stockMvt) { return stockMvt.stockMvtWay === _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_5__["BidtStockMvtConstants"].MVT_WAY_DEBIT; });
        this.transferedStockMvts = stockMvts.filter(function (stockMvt) { return stockMvt.mvtStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY; });
        this.selectedNb = stockMvts
            .filter(function (stockMvt) {
            return stockMvt.mvtStatus !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY &&
                stockMvt.mvtStatus !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].MM_MVT_STATUS_CANCELED_KEY &&
                (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(stockMvt.stockMvtSn) || !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].isNullOrEmpty(stockMvt.stockMvtBatchNumber));
        })
            .map(function (stockMvt) { return (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0); })
            .reduce(function (acc, x) { return acc + x; }, 0);
        this.receivedNb = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__["ListUtils"].orEmpty(this.selectedTorItem.pickingMovements)
            .filter(function (stockMvt) {
            return stockMvt.stockMvtWay === _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_5__["BidtStockMvtConstants"].MVT_WAY_CREDIT &&
                stockMvt.mvtStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY;
        })
            .map(function (stockMvt) { return (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0); })
            .reduce(function (acc, x) { return acc + x; }, 0);
        this.shippedNb =
            this.transferedStockMvts
                .map(function (stockMvt) { return (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0); })
                .reduce(function (acc, x) { return acc + x; }, 0) - this.receivedNb;
        if (!!this.selectedTorItem.quantity) {
            this.notSelectedNb = this.selectedTorItem.quantity - this.shippedNb - this.selectedNb - this.receivedNb;
        }
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.loadPreemptionRight = function (candidateAsset) {
        var _this = this;
        if (candidateAsset.stockInformation && candidateAsset.stockInformation.siteId) {
            this.materialRequestTransferOrderFormService
                .findSiteById(candidateAsset.stockInformation.siteId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (site) {
                return _this.materialRequestTransferOrderFormService.hasDisplayRights({
                    useCaseCode: _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__["BidoFunctionTypeConstants"].UC_MM_PREEMPTION,
                    functionCode: site.siteCode
                });
            }))
                .subscribe({
                next: function (hasPreemptionRight) {
                    candidateAsset._hasPreemptionRight = hasPreemptionRight;
                }
            });
        }
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.loadCandidateAssets = function () {
        var _this = this;
        this.iscandidateAssetsLoading = true;
        this.candidateAssetsSrc = [];
        this.candidateAssets = [];
        this.resetFilters();
        if (!!this.transferOrder.bidtSiteIssue && !!this.transferOrder.bidtWarehouseIssue) {
            var param = {
                torItemId: this.selectedTorItem.id,
                pnCode: this.selectedTorItem.birePnPnCode,
                requestedDate: this.transferOrder.statusDate,
                bidtSiteReceiptId: this.transferOrder.bidtSiteIssue.siteId,
                bidtWarehouseIssueId: this.transferOrder.bidtWarehouseIssue.wareHouseId
            };
            if (this.selectedcandidateAssetCategory === CandidateAssetCategory.WAREHOUSE) {
                this.logisticsService
                    .searchWarehouseCandidateAssetsByTorItem(param)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
                    _this.iscandidateAssetsLoading = false;
                }))
                    .subscribe(function (candidateAssets) {
                    _this.candidateAssetsSrc = _this.sortCandidateAssets(candidateAssets);
                    _this.candidateAssetsSrc.forEach(function (candidateAsset) {
                        _this.loadPreemptionRight(candidateAsset);
                    });
                    _this.candidateAssets = __spread(_this.candidateAssetsSrc);
                    _this.calculateSituation();
                });
            }
            else if (this.selectedcandidateAssetCategory === CandidateAssetCategory.LOCAL) {
                this.logisticsService
                    .searchLocalCandidateAssetsByTorItem(param)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
                    _this.iscandidateAssetsLoading = false;
                }))
                    .subscribe(function (candidateAssets) {
                    _this.candidateAssetsSrc = _this.sortCandidateAssets(candidateAssets);
                    _this.candidateAssetsSrc.forEach(function (candidateAsset) {
                        _this.loadPreemptionRight(candidateAsset);
                    });
                    _this.candidateAssets = __spread(_this.candidateAssetsSrc);
                    _this.calculateSituation();
                });
            }
            else if (this.selectedcandidateAssetCategory === CandidateAssetCategory.GLOBAL) {
                this.logisticsService
                    .searchGlobalCandidateAssetsByTorItem(param)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
                    _this.iscandidateAssetsLoading = false;
                }))
                    .subscribe(function (candidateAssets) {
                    _this.candidateAssetsSrc = _this.sortCandidateAssets(candidateAssets);
                    _this.candidateAssetsSrc.forEach(function (candidateAsset) {
                        _this.loadPreemptionRight(candidateAsset);
                    });
                    _this.candidateAssets = __spread(_this.candidateAssetsSrc);
                    _this.calculateSituation();
                });
            }
        }
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.sortCandidateAssets = function (candidateAssets) {
        var _this = this;
        return candidateAssets.sort(function (c1, c2) {
            if (_this.isCandidateAssetServed(c1) && !_this.isCandidateAssetServed(c2)) {
                return -1;
            }
            else if (!_this.isCandidateAssetServed(c1) && _this.isCandidateAssetServed(c2)) {
                return 1;
            }
            else {
                if (c1.transferOrder &&
                    c1.transferOrder.id === _this.transferOrder.id &&
                    !(c2.transferOrder && c2.transferOrder.id === _this.transferOrder.id)) {
                    return -1;
                }
                else if (c2.transferOrder &&
                    c2.transferOrder.id === _this.transferOrder.id &&
                    !(c1.transferOrder && c1.transferOrder.id === _this.transferOrder.id)) {
                    return 1;
                }
                else {
                    var r1 = _this.calculateSatisfactionRate(c1);
                    var r2 = _this.calculateSatisfactionRate(c2);
                    if (r1 > r2) {
                        return -1;
                    }
                    else if (r1 < r2) {
                        return 1;
                    }
                    else {
                        var e1 = c1.equipment ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(c1.equipment.sn) : '';
                        var e2 = c2.equipment ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(c2.equipment.sn) : '';
                        return e1.localeCompare(e2);
                    }
                }
            }
        });
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.init = function () {
        this.transferOrder = {};
        this.applicant = '';
        this.applicantLogin = '';
        this.torTypeList = [];
        this.formattedRequestedPotential = '';
        this.selectedCandidateAsset = undefined;
        this.selectedcandidateAssetCategory = CandidateAssetCategory.WAREHOUSE;
        this.potentialUnitList = [];
        this.candidateAssetsSrc = [];
        this.candidateAssets = [];
        this.equipmentStatusList = [];
        this.statusList = [];
        this.shippedNb = 0;
        this.selectedNb = 0;
        this.notSelectedNb = 0;
        this.iscandidateAssetsLoading = false;
        this.transferedStockMvts = [];
        this.satifactionRateStatus = [];
        this.workPackageAsset = undefined;
        this.workPackageAssetName = '';
        this.searchFilterObject = {};
        this.searchFilterObject.sameSite = -1;
        this.searchFilterObject.availableAtDate = -1;
        this.searchFilterObject.bookingStatus = -1;
        this.searchFilterObject.noUnconfirmedFailure = -1;
        this.materialProposedTableCols = [];
        this.siteList = [];
        this.warehouseList = [];
        this.logisticsTypeList = [];
        this.showChangeSupplierAndQuantityDialog = false;
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.initMaterialProposedTableCols = function () {
        this.materialProposedTableCols = this.getCandidateAssetTableColumnsForLocalCategory();
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.getCandidateAssetTableColumnsForPickingCategory = function () {
        return [
            { field: 'material', alignment: 'left', width: '15%' },
            { field: 'snBatch', alignment: 'left', width: '12.5%' },
            { field: 'msn', alignment: 'left', width: '15%' },
            { field: 'locationForPicking', alignment: 'left', width: '17.5%' },
            { field: 'technicalData', alignment: 'left', width: '15%' },
            { field: 'availabilityAtDate', alignment: 'left', width: '15%' },
            { field: 'satisfactionRate', alignment: 'left', width: '10%' }
        ];
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.getCandidateAssetTableColumnsForLocalCategory = function () {
        return [
            { field: 'material', alignment: 'left', width: '15%' },
            { field: 'batch', alignment: 'left', width: '12.5%' },
            { field: 'sn', alignment: 'left', width: '15%' },
            { field: 'quantity', alignment: 'right', width: '5%' },
            { field: 'location', alignment: 'left', width: '15%' },
            { field: 'technicalData', alignment: 'left', width: '12.5%' },
            { field: 'availabilityAtDate', alignment: 'left', width: '15%' },
            { field: 'satisfactionRate', alignment: 'left', width: '10%' }
        ];
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.onChangeCustomer = function () {
        this.openChangeCustomerDialog = true;
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.resetFilters = function () {
        this.searchFilterObject.status = undefined;
        this.searchFilterObject.sn = undefined;
        this.searchFilterObject.site = undefined;
        this.searchFilterObject.warehouse = undefined;
        this.searchFilterObject.sameSite = SatisfactoryRateFilterState.UNDEFINED;
        this.searchFilterObject.availableAtDate = SatisfactoryRateFilterState.UNDEFINED;
        this.searchFilterObject.bookingStatus = SatisfactoryRateFilterState.UNDEFINED;
        this.searchFilterObject.noUnconfirmedFailure = SatisfactoryRateFilterState.UNDEFINED;
        this.warehouseList = [];
        this.locationWarehouseType = this.logisticsTypeList[0].value;
        this.candidateAssets = __spread(this.candidateAssetsSrc);
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.filterSearchResult = function () {
        var _this = this;
        this.candidateAssets = this.candidateAssetsSrc.filter(function (elt) {
            return (_this.statusFilterCriteria(elt) &&
                _this.snFilterCriteria(elt) &&
                _this.siteFilterCriteria(elt) &&
                _this.warehouseFilterCriteria(elt) &&
                _this.satifactoryRateSameSiteFilterCriteria(elt) &&
                _this.satisfactoryRateAvailableAtDateCriteria(elt) &&
                _this.statifactoryRateBookingStatusCriteria(elt) &&
                _this.satisfactoryRateNoUnconfirmedFailureCriteria(elt));
        });
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.statusFilterCriteria = function (elt) {
        return (!this.searchFilterObject.status ||
            (!!elt.equipment && elt.equipment.operationalStatus === this.searchFilterObject.status));
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.snFilterCriteria = function (elt) {
        return (!this.searchFilterObject.sn ||
            (!!elt.equipment &&
                !!elt.equipment.sn &&
                elt.equipment.sn.toUpperCase().includes(this.searchFilterObject.sn.toUpperCase())));
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.siteFilterCriteria = function (elt) {
        return (!this.searchFilterObject.site || (!!elt.siteReceipt && elt.siteReceipt.siteId === this.searchFilterObject.site));
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.warehouseFilterCriteria = function (elt) {
        return (!this.searchFilterObject.warehouse ||
            (!!elt.warehouseReceipt && elt.warehouseReceipt.wareHouseId === this.searchFilterObject.warehouse));
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.satifactoryRateSameSiteFilterCriteria = function (elt) {
        return (this.searchFilterObject.sameSite === SatisfactoryRateFilterState.UNDEFINED || // UNDEFINED
            (this.searchFilterObject.sameSite === SatisfactoryRateFilterState.YES && // YES
                !!elt.siteReceipt &&
                !!this.transferOrder.bidtSiteReceipt &&
                elt.siteReceipt.siteId === this.transferOrder.bidtSiteReceipt.siteId) ||
            (this.searchFilterObject.sameSite === SatisfactoryRateFilterState.NO && // NO
                !(!!elt.siteReceipt &&
                    !!this.transferOrder.bidtSiteReceipt &&
                    elt.siteReceipt.siteId === this.transferOrder.bidtSiteReceipt.siteId)));
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.satisfactoryRateAvailableAtDateCriteria = function (elt) {
        return (this.searchFilterObject.availableAtDate === SatisfactoryRateFilterState.UNDEFINED || // UNDEFINED
            (this.searchFilterObject.availableAtDate === SatisfactoryRateFilterState.YES && // YES
                !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_22__["ObjectUtils"].isDefined(elt.plannedAvailabilityDate)) ||
            (this.searchFilterObject.availableAtDate === SatisfactoryRateFilterState.NO && // NO
                _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_22__["ObjectUtils"].isDefined(elt.plannedAvailabilityDate)));
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.statifactoryRateBookingStatusCriteria = function (elt) {
        return (this.searchFilterObject.bookingStatus === SatisfactoryRateFilterState.UNDEFINED || // UNDEFINED
            (this.searchFilterObject.bookingStatus === SatisfactoryRateFilterState.YES && // YES
                (!_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_22__["ObjectUtils"].isDefined(elt.transferOrder) ||
                    (!!elt.transferOrder && elt.transferOrder.id === this.transferOrder.id))) ||
            (this.searchFilterObject.bookingStatus === SatisfactoryRateFilterState.NO && // NO
                !(!_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_22__["ObjectUtils"].isDefined(elt.transferOrder) ||
                    (!!elt.transferOrder && elt.transferOrder.id === this.transferOrder.id))));
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.satisfactoryRateNoUnconfirmedFailureCriteria = function (elt) {
        return (this.searchFilterObject.noUnconfirmedFailure === SatisfactoryRateFilterState.UNDEFINED || // UNDEFINED
            (this.searchFilterObject.noUnconfirmedFailure === SatisfactoryRateFilterState.YES && // YES
                !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_22__["ObjectUtils"].isDefined(elt.unconfirmedFailure)) ||
            (this.searchFilterObject.noUnconfirmedFailure === SatisfactoryRateFilterState.NO && // NO
                _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_22__["ObjectUtils"].isDefined(elt.unconfirmedFailure)));
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.onGoBack = function () {
        var openMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read;
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_MATERIAL_REQUEST_MANAGEMENT_SEARCH,
            openMode: openMode
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.formatEquipmentStatus = function (statusValue) {
        var matchingStatus = this.equipmentStatusList.find(function (status) { return status.value === statusValue; });
        return matchingStatus ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(matchingStatus.label) : '';
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.formatStatus = function (statusValue) {
        var matchingStatus = this.statusList.find(function (status) { return status.value === statusValue; });
        return matchingStatus ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(matchingStatus.label) : '';
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.formatQuantity = function (quantity) {
        return quantity ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_21__["NumberUtils"].roundNumber(_shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_21__["NumberUtils"].fromString(quantity), 2).toString() : '';
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.formatPotential = function (potential) {
        return potential ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_21__["NumberUtils"].roundNumber(_shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_21__["NumberUtils"].fromString(potential), 2).toString() : '';
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.updateCandidateAssetTableColumns = function () {
        this.materialProposedTableCols =
            this.selectedcandidateAssetCategory === CandidateAssetCategory.PICKING
                ? this.getCandidateAssetTableColumnsForPickingCategory()
                : this.getCandidateAssetTableColumnsForLocalCategory();
        this.loadCandidateAssets();
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.isAvailableAtDate = function (candidateAsset) {
        return !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_22__["ObjectUtils"].isDefined(candidateAsset.plannedAvailabilityDate);
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.calculateSatisfactionRate = function (candidateAsset) {
        var rates = [];
        var rate = function (value) {
            rates.push(value ? 1 : 0);
        };
        rate(this.isAvailableAtDate(candidateAsset));
        rate(!_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_22__["ObjectUtils"].isDefined(candidateAsset.transferOrder) ||
            candidateAsset.transferOrder.id === this.transferOrder.id);
        rate(!!candidateAsset.siteReceipt &&
            !!this.transferOrder.bidtSiteIssue &&
            candidateAsset.siteReceipt.siteId === this.transferOrder.bidtSiteIssue.siteId);
        rate(!_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_22__["ObjectUtils"].isDefined(candidateAsset.unconfirmedFailure));
        // tslint:disable-next-line:no-magic-numbers
        return _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_21__["NumberUtils"].roundNumber((rates.filter(function (value) { return value === 1; }).length / rates.length) * 100, 0);
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.formatSite = function (siteCode) {
        var matchingSite = this.sites.find(function (site) { return site.siteCode === siteCode; });
        return matchingSite ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(matchingSite.siteName) : '';
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.openSatisfactionRateDetails = function (candidateAsset) {
        this.selectedCandidateAsset = candidateAsset;
        this.showSatisfactionRateDialog = true;
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.isSameQuantity = function (qt1, qt2) {
        return this.formatQuantity(qt1) === this.formatQuantity(qt2);
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.openProcurementRequest = function (procurementRequest) {
        if (procurementRequest) {
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_PROCUREMENT_REQUEST_FORM,
                objectId: this.serializationService.serialize({ id: procurementRequest.id }),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.cancelBooking = function (rowData) {
        var _this = this;
        if (rowData.equipment) {
            this.logisticsService.isAssetBookedByTorItem(rowData.equipment).subscribe({
                next: function (stockMvt) {
                    if (stockMvt) {
                        _this.logisticsService.cancelBookedAssetByTorItem(stockMvt).subscribe({
                            next: function () {
                                _this.reload();
                            }
                        });
                    }
                    else {
                        _this.messageService.showErrorMessage('errorOnCancelBookedAsset');
                    }
                }
            });
        }
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.openBatch = function (code) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_PACKAGING_BATCH_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read
        };
        data.objectId = code;
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.isSelectBtnVisible = function () {
        var procurementRequestQty = this.selectedTorItem.quantity ? this.selectedTorItem.quantity : undefined;
        return (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_22__["ObjectUtils"].isDefined(procurementRequestQty) &&
            this.selectedNb + this.shippedNb < procurementRequestQty);
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.bookCandidateAsset = function (candidateAsset) {
        var _this = this;
        if (candidateAsset.equipment) {
            candidateAsset._bookCandidateAssetLoading = true;
            var quantity = candidateAsset.equipment.sn
                ? '1'
                : Math.min(this.notSelectedNb, candidateAsset.equipment.quantity || 0).toString();
            this.logisticsService
                .bookCandidateAssetByTorItem({ quantity: quantity, candidateAsset: candidateAsset, bidtTorItem: this.selectedTorItem })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
                candidateAsset._bookCandidateAssetLoading = false;
            }))
                .subscribe({
                next: function () {
                    _this.reload();
                }
            });
        }
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.confirmPreemptCandidateAsset = function (candidateAsset) {
        var _this = this;
        this.confirmationService.confirm({
            messageKey: this.getTranslateKey('confirmPreempt'),
            accept: function () {
                _this.preemptCandidateAsset(candidateAsset);
            }
        });
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.preemptCandidateAsset = function (candidateAsset) {
        var _this = this;
        if (candidateAsset.equipment) {
            candidateAsset._bookCandidateAssetLoading = true;
            var quantity = candidateAsset.equipment.sn
                ? '1'
                : Math.min(this.notSelectedNb, candidateAsset.equipment.quantity || 0).toString();
            this.logisticsService
                .preemptCandidateAssetByTorItem({ quantity: quantity, candidateAsset: candidateAsset, bidtTorItem: this.selectedTorItem })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
                candidateAsset._bookCandidateAssetLoading = false;
            }))
                .subscribe({
                next: function () {
                    _this.reload();
                }
            });
        }
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.openWorkPackageAsset = function () {
        if (this.workPackageAsset) {
            var componentId = void 0;
            if (this.workPackageAsset.equipmentFunction === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
                componentId = _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].FLE_AIRCRAFT_FORM;
            }
            else if (this.workPackageAsset.equipmentFunction === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY) {
                componentId = _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].FLE_ENGINE_FORM;
            }
            else {
                componentId = _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].FLE_EQUIPMENT_FORM;
            }
            var data = {
                componentId: componentId,
                id: this.tabService.generateId(),
                objectId: this.serializationService.serialize({
                    equipmentCode: this.workPackageAsset.equipmentCode
                }),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.isCancelBookingBtnVisible = function (candidateAsset) {
        return (!!candidateAsset.equipment &&
            !!candidateAsset.transferOrder &&
            !!candidateAsset.transferOrder.bidtTorItems &&
            !!candidateAsset.transferOrder.bidtTorItems
                .filter(function (torItem) { return torItem && torItem.pickingMovements; })
                .map(function (torItem) { return torItem.pickingMovements; })
                .reduce(function (acc, x) { return acc.concat(x); })
                .some(function (stockMvt) {
                return candidateAsset.equipment.sn === stockMvt.stockMvtSn &&
                    candidateAsset.equipment.batchNumber === stockMvt.stockMvtBatchNumber &&
                    (stockMvt.bidtStockMvtTypeId === _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_6__["BidtStockMvtTypeConstant"].PICKING ||
                        stockMvt.bidtStockMvtTypeId === _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_6__["BidtStockMvtTypeConstant"].CROSS_DOCKING) &&
                    stockMvt.mvtStatus !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY &&
                    stockMvt.mvtStatus !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__["AWPropertiesConstants"].MM_MVT_STATUS_ON_GOING_KEY;
            }));
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.isCandidateAssetServed = function (candidateAsset) {
        return (!!candidateAsset.equipment &&
            this.transferedStockMvts.some(function (servedStockMvt) {
                return servedStockMvt.stockMvtSn === candidateAsset.equipment.sn &&
                    servedStockMvt.stockMvtBatchNumber === candidateAsset.equipment.batchNumber;
            }));
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.loadLocationWarehouses = function () {
        var _this = this;
        this.searchFilterObject.warehouse = undefined;
        this.warehouseList = [];
        if (!!this.searchFilterObject.site && this.locationWarehouseType) {
            this.loadWareHouses(this.searchFilterObject.site, this.locationWarehouseType).subscribe({
                next: function (warehouses) {
                    _this.warehouseList = warehouses;
                }
            });
        }
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.loadWareHouses = function (siteId, warehouseCategory) {
        return this.materialRequestTransferOrderFormService.getWarehousesBySiteId(siteId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (warehouses) {
            return warehouses
                .filter(function (warehouse) {
                return !!warehouse.whCode &&
                    !!warehouse.whName &&
                    !!warehouse.whCategory &&
                    warehouseCategory === warehouse.whCategory;
            })
                .map(function (warehouse) {
                return {
                    label: warehouse.whCode + " - " + warehouse.whName,
                    value: warehouse.wareHouseId
                };
            })
                .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
        }));
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.getBookedQty = function (candidateAsset) {
        if (candidateAsset.transferOrder && candidateAsset.transferOrder.bidtTorItems) {
            var matchingStockMvt = candidateAsset.transferOrder.bidtTorItems
                .filter(function (torItem) { return torItem && torItem.pickingMovements; })
                .map(function (torItem) { return torItem.pickingMovements; })
                .reduce(function (acc, x) { return acc.concat(x); })
                .find(function (stockMvt) {
                return candidateAsset.equipment.sn === stockMvt.stockMvtSn &&
                    candidateAsset.equipment.batchNumber === stockMvt.stockMvtBatchNumber &&
                    (stockMvt.bidtStockMvtTypeId === _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_6__["BidtStockMvtTypeConstant"].PICKING ||
                        stockMvt.bidtStockMvtTypeId === _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_6__["BidtStockMvtTypeConstant"].CROSS_DOCKING);
            });
            if (matchingStockMvt) {
                return _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_23__["StringUtils"].orEmpty(matchingStockMvt.stockMvtQuantity);
            }
        }
        return '';
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.onChangeSupplier = function () {
        this.showChangeSupplierAndQuantityDialog = true;
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.toNumber = function (str) {
        return Number(str);
    };
    MaterialRequestTransferOrderManagementFormComponent.prototype.openTransferOrder = function (transferOrder) {
        if (transferOrder) {
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_TRANSFER_ORDER_FORM,
                objectId: this.serializationService.serialize(transferOrder.id),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_9__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
    };
    MaterialRequestTransferOrderManagementFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-material-request-transfer-order-management-form',
            template: __webpack_require__(/*! ./material-request-transfer-order-management-form.component.html */ "./src/app/main/logistics/material-request-transfer-order-management/form/material-request-transfer-order-management-form.component.html"),
            styles: [__webpack_require__(/*! ../shared/style.scss */ "./src/app/main/logistics/material-request-transfer-order-management/shared/style.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_12__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_13__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_14__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_16__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_18__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_17__["SessionService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"],
            _logistics_service__WEBPACK_IMPORTED_MODULE_24__["LogisticsService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_15__["PropertiesService"],
            _material_request_transfer_order_management_form_service__WEBPACK_IMPORTED_MODULE_25__["MaterialRequestTransferOrderManagementFormService"]])
    ], MaterialRequestTransferOrderManagementFormComponent);
    return MaterialRequestTransferOrderManagementFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_19__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/material-request-transfer-order-management/form/material-request-transfer-order-management-form.service.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-transfer-order-management/form/material-request-transfer-order-management-form.service.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: MaterialRequestTransferOrderManagementFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialRequestTransferOrderManagementFormService", function() { return MaterialRequestTransferOrderManagementFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-df-type.api */ "./src/app/shared/api/bidt-df-type.api.ts");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
/* harmony import */ var _shared_api_bidt_transfer_order_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/bidt-transfer-order.api */ "./src/app/shared/api/bidt-transfer-order.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _shared_api_user_profile_business_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/api/user-profile-business.api */ "./src/app/shared/api/user-profile-business.api.ts");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
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















var MaterialRequestTransferOrderManagementFormService = /** @class */ (function (_super) {
    __extends(MaterialRequestTransferOrderManagementFormService, _super);
    function MaterialRequestTransferOrderManagementFormService(http, appConfigService, bidtSiteApi, userProfileBusinessApi, productStructureManagementApi, fleetManagementApi, bidtWarehouseApi, bidtTransferOrderApi, bidtDfTypeApi, userProfileManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtSiteApi = bidtSiteApi;
        _this.userProfileBusinessApi = userProfileBusinessApi;
        _this.productStructureManagementApi = productStructureManagementApi;
        _this.fleetManagementApi = fleetManagementApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.bidtTransferOrderApi = bidtTransferOrderApi;
        _this.bidtDfTypeApi = bidtDfTypeApi;
        _this.userProfileManagementApi = userProfileManagementApi;
        return _this;
    }
    /**************************************************************************
     * User profile business api
     *************************************************************************/
    MaterialRequestTransferOrderManagementFormService.prototype.hasDisplayRights = function (input) {
        return _super.prototype.post.call(this, this.userProfileBusinessApi.hasDisplayRights, input);
    };
    /**************************************************************************
     * Bidt site api
     *************************************************************************/
    MaterialRequestTransferOrderManagementFormService.prototype.findAllSite = function () {
        return _super.prototype.post.call(this, this.bidtSiteApi.getSites);
    };
    MaterialRequestTransferOrderManagementFormService.prototype.findSiteById = function (input) {
        return _super.prototype.post.call(this, this.bidtSiteApi.getById, input);
    };
    /**************************************************************************
     * Bidt warehouse api
     *************************************************************************/
    MaterialRequestTransferOrderManagementFormService.prototype.getWarehousesBySiteId = function (siteId) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, siteId);
    };
    /**************************************************************************
     * search requested material api
     *************************************************************************/
    MaterialRequestTransferOrderManagementFormService.prototype.getOperationalStatusMap = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.initializeOperationalStatusList, input);
    };
    MaterialRequestTransferOrderManagementFormService.prototype.findAllBidoCustomer = function () {
        return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoCustomer);
    };
    MaterialRequestTransferOrderManagementFormService.prototype.findTransferOrderById = function (id) {
        return _super.prototype.post.call(this, this.bidtTransferOrderApi.findTransferOrderById, id);
    };
    MaterialRequestTransferOrderManagementFormService.prototype.fetchTypeList = function () {
        return _super.prototype.post.call(this, this.bidtDfTypeApi.findShipmentDfTypes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (dfTypes) {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__["ListUtils"].orEmpty(dfTypes).map(function (dfType) {
                return {
                    label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].orEmpty(dfType.dftDesignation),
                    value: dfType.id
                };
            });
        }));
    };
    /**************************************************************************
     * User profile management api
     *************************************************************************/
    MaterialRequestTransferOrderManagementFormService.prototype.findUser = function (input) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findUserByLogin, input);
    };
    /**************************************************************************
     * Bire PN api
     *************************************************************************/
    MaterialRequestTransferOrderManagementFormService.prototype.getBirePnByPn = function (birePnPnCode) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBirePn, birePnPnCode);
    };
    MaterialRequestTransferOrderManagementFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_12__["AppConfigService"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_4__["BidtSiteApi"],
            _shared_api_user_profile_business_api__WEBPACK_IMPORTED_MODULE_9__["UserProfileBusinessApi"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_8__["ProductStructureManagementApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_7__["FleetManagementApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_6__["BidtWarehouseApi"],
            _shared_api_bidt_transfer_order_api__WEBPACK_IMPORTED_MODULE_5__["BidtTransferOrderApi"],
            _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_3__["BidtDfTypeApi"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_10__["UserProfileManagementApi"]])
    ], MaterialRequestTransferOrderManagementFormService);
    return MaterialRequestTransferOrderManagementFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_11__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/material-request-transfer-order-management/form/popups/dialog-satisfaction-rate-transfe-order/dialog-satisfaction-rate-transfer-order.component.html":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-transfer-order-management/form/popups/dialog-satisfaction-rate-transfe-order/dialog-satisfaction-rate-transfer-order.component.html ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"45\">\r\n  <a-header>\r\n    <div class=\"modal-title\">\r\n      {{ getComponentName() + \".satisfactionRateDetails\" | translate }}\r\n\r\n      <div style=\"margin: 0 auto; width: 8rem;\">\r\n        <p-progressBar\r\n          [ngClass]=\"{\r\n            green: calculateSatisfactionRate() == 100,\r\n            yellow: calculateSatisfactionRate() < 100,\r\n            red: calculateSatisfactionRate() < 40\r\n          }\"\r\n          [value]=\"calculateSatisfactionRate()\"\r\n        ></p-progressBar>\r\n      </div>\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"row\" style=\"font-size: 1rem; font-weight: bold;\">\r\n        {{ getComponentName() + \".intro\" | translate }}\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <span>{{ getComponentName() + \".sameSite\" | translate }}</span>\r\n        <div class=\"criteria-value ok\" *ngIf=\"sameSite\">{{ \"yes\" | translate }}</div>\r\n        <div class=\"criteria-value nok\" *ngIf=\"!sameSite\">{{ \"no\" | translate }}</div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <span>{{ getComponentName() + \".bookingStatus\" | translate }}</span>\r\n        <div class=\"criteria-value ok\" *ngIf=\"bookingStatus\">{{ \"yes\" | translate }}</div>\r\n        <div class=\"criteria-value nok\" *ngIf=\"!bookingStatus\">{{ \"no\" | translate }}</div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <span>{{ getComponentName() + \".availableAtDate\" | translate }}</span>\r\n        <div class=\"criteria-value ok\" *ngIf=\"availableAtDate\">{{ \"yes\" | translate }}</div>\r\n        <div class=\"criteria-value nok\" *ngIf=\"!availableAtDate\">{{ \"no\" | translate }}</div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <span>{{ getComponentName() + \".noUnconfirmedFailure\" | translate }}</span>\r\n        <div class=\"criteria-value ok\" *ngIf=\"noUnconfirmedFailure\">{{ \"yes\" | translate }}</div>\r\n        <div class=\"criteria-value nok\" *ngIf=\"!noUnconfirmedFailure\">{{ \"no\" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"global.close\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/material-request-transfer-order-management/form/popups/dialog-satisfaction-rate-transfe-order/dialog-satisfaction-rate-transfer-order.component.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-transfer-order-management/form/popups/dialog-satisfaction-rate-transfe-order/dialog-satisfaction-rate-transfer-order.component.scss ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .row {\n  margin: 0.5rem 0; }\n\n:host .row > span {\n  min-width: 40em;\n  max-width: 40em;\n  width: 40rem; }\n\n:host .criteria-value {\n  width: 6rem;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center; }\n\n:host .criteria-value.ok {\n    background-color: #4caf50; }\n\n:host .criteria-value.nok {\n    background-color: #f6685e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbWF0ZXJpYWwtcmVxdWVzdC10cmFuc2Zlci1vcmRlci1tYW5hZ2VtZW50L2Zvcm0vcG9wdXBzL2RpYWxvZy1zYXRpc2ZhY3Rpb24tcmF0ZS10cmFuc2ZlLW9yZGVyL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcbWF0ZXJpYWwtcmVxdWVzdC10cmFuc2Zlci1vcmRlci1tYW5hZ2VtZW50XFxmb3JtXFxwb3B1cHNcXGRpYWxvZy1zYXRpc2ZhY3Rpb24tcmF0ZS10cmFuc2ZlLW9yZGVyXFxkaWFsb2ctc2F0aXNmYWN0aW9uLXJhdGUtdHJhbnNmZXItb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbG9naXN0aWNzL21hdGVyaWFsLXJlcXVlc3QtdHJhbnNmZXItb3JkZXItbWFuYWdlbWVudC9mb3JtL3BvcHVwcy9kaWFsb2ctc2F0aXNmYWN0aW9uLXJhdGUtdHJhbnNmZS1vcmRlci9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxnQkFBZ0IsRUFBQTs7QUFGcEI7RUFNSSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFSaEI7RUFZSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQWpCM0I7SUFvQk0seUJDRGdCLEVBQUE7O0FEbkJ0QjtJQXdCTSx5QkNGYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbWF0ZXJpYWwtcmVxdWVzdC10cmFuc2Zlci1vcmRlci1tYW5hZ2VtZW50L2Zvcm0vcG9wdXBzL2RpYWxvZy1zYXRpc2ZhY3Rpb24tcmF0ZS10cmFuc2ZlLW9yZGVyL2RpYWxvZy1zYXRpc2ZhY3Rpb24tcmF0ZS10cmFuc2Zlci1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuXHJcbjpob3N0IHtcclxuICAucm93IHtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgfVxyXG5cclxuICAucm93ID4gc3BhbiB7XHJcbiAgICBtaW4td2lkdGg6IDQwZW07XHJcbiAgICBtYXgtd2lkdGg6IDQwZW07XHJcbiAgICB3aWR0aDogNDByZW07XHJcbiAgfVxyXG5cclxuICAuY3JpdGVyaWEtdmFsdWUge1xyXG4gICAgd2lkdGg6IDZyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAmLm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLm5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/main/logistics/material-request-transfer-order-management/form/popups/dialog-satisfaction-rate-transfe-order/dialog-satisfaction-rate-transfer-order.component.ts":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-transfer-order-management/form/popups/dialog-satisfaction-rate-transfe-order/dialog-satisfaction-rate-transfer-order.component.ts ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: DialogSatisfactionRateTransferOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSatisfactionRateTransferOrderComponent", function() { return DialogSatisfactionRateTransferOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/utils/number-utils */ "./src/app/shared/utils/number-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
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





var DialogSatisfactionRateTransferOrderComponent = /** @class */ (function (_super) {
    __extends(DialogSatisfactionRateTransferOrderComponent, _super);
    function DialogSatisfactionRateTransferOrderComponent() {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'DialogSatisfactionRateTransferOrderComponent') || this;
        _this.candidateAsset = {};
        _this.transferOrder = {};
        return _this;
    }
    DialogSatisfactionRateTransferOrderComponent.prototype.isAvailableAtDate = function () {
        return !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_4__["ObjectUtils"].isDefined(this.candidateAsset.plannedAvailabilityDate);
    };
    DialogSatisfactionRateTransferOrderComponent.prototype.calculateSatisfactionRate = function () {
        var rates = [];
        var rate = function (value) {
            rates.push(value ? 1 : 0);
        };
        this.availableAtDate = this.isAvailableAtDate();
        rate(this.availableAtDate);
        this.bookingStatus =
            !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_4__["ObjectUtils"].isDefined(this.candidateAsset.transferOrder) ||
                this.candidateAsset.transferOrder.id === this.transferOrder.id;
        rate(this.bookingStatus);
        this.sameSite =
            !!this.candidateAsset.siteReceipt &&
                !!this.transferOrder.bidtSiteIssue &&
                this.candidateAsset.siteReceipt.siteId === this.transferOrder.bidtSiteIssue.siteId;
        rate(this.sameSite);
        this.noUnconfirmedFailure = !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_4__["ObjectUtils"].isDefined(this.candidateAsset.unconfirmedFailure);
        rate(this.noUnconfirmedFailure);
        // tslint:disable-next-line:no-magic-numbers
        return _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_3__["NumberUtils"].roundNumber((rates.filter(function (value) { return value === 1; }).length / rates.length) * 100, 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogSatisfactionRateTransferOrderComponent.prototype, "candidateAsset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogSatisfactionRateTransferOrderComponent.prototype, "transferOrder", void 0);
    DialogSatisfactionRateTransferOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-satisfaction-rate-transfer-order',
            template: __webpack_require__(/*! ./dialog-satisfaction-rate-transfer-order.component.html */ "./src/app/main/logistics/material-request-transfer-order-management/form/popups/dialog-satisfaction-rate-transfe-order/dialog-satisfaction-rate-transfer-order.component.html"),
            styles: [__webpack_require__(/*! ./dialog-satisfaction-rate-transfer-order.component.scss */ "./src/app/main/logistics/material-request-transfer-order-management/form/popups/dialog-satisfaction-rate-transfe-order/dialog-satisfaction-rate-transfer-order.component.scss"), __webpack_require__(/*! ../../../shared/style.scss */ "./src/app/main/logistics/material-request-transfer-order-management/shared/style.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DialogSatisfactionRateTransferOrderComponent);
    return DialogSatisfactionRateTransferOrderComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/material-request-transfer-order-management/material-request-transfer-order-management.module.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-transfer-order-management/material-request-transfer-order-management.module.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: MaterialRequestTransferOrderManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialRequestTransferOrderManagementModule", function() { return MaterialRequestTransferOrderManagementModule; });
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
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tristatecheckbox */ "./node_modules/primeng/tristatecheckbox.js");
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/services/file.service */ "./src/app/shared/services/file.service.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_material_request_transfer_order_management_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./form/material-request-transfer-order-management-form.component */ "./src/app/main/logistics/material-request-transfer-order-management/form/material-request-transfer-order-management-form.component.ts");
/* harmony import */ var _form_material_request_transfer_order_management_form_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./form/material-request-transfer-order-management-form.service */ "./src/app/main/logistics/material-request-transfer-order-management/form/material-request-transfer-order-management-form.service.ts");
/* harmony import */ var _form_popups_dialog_satisfaction_rate_transfe_order_dialog_satisfaction_rate_transfer_order_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./form/popups/dialog-satisfaction-rate-transfe-order/dialog-satisfaction-rate-transfer-order.component */ "./src/app/main/logistics/material-request-transfer-order-management/form/popups/dialog-satisfaction-rate-transfe-order/dialog-satisfaction-rate-transfer-order.component.ts");
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
    primeng_primeng__WEBPACK_IMPORTED_MODULE_9__["InputSwitchModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_14__["TableModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"],
    primeng_keyfilter__WEBPACK_IMPORTED_MODULE_6__["KeyFilterModule"],
    primeng_message__WEBPACK_IMPORTED_MODULE_7__["MessageModule"],
    primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__["OverlayPanelModule"],
    primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__["ProgressBarModule"],
    primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__["RadioButtonModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12__["SelectButtonModule"],
    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_13__["SplitButtonModule"],
    primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_16__["TriStateCheckboxModule"]
];
var INTERNAL_MODULES = [_shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_21__["ModalModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_form_popups_dialog_satisfaction_rate_transfe_order_dialog_satisfaction_rate_transfer_order_component__WEBPACK_IMPORTED_MODULE_26__["DialogSatisfactionRateTransferOrderComponent"]];
var DYNAMIC_COMPONENTS = [_form_material_request_transfer_order_management_form_component__WEBPACK_IMPORTED_MODULE_24__["MaterialRequestTransferOrderManagementFormComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_shared_services_file_service__WEBPACK_IMPORTED_MODULE_22__["FileService"], _form_material_request_transfer_order_management_form_service__WEBPACK_IMPORTED_MODULE_25__["MaterialRequestTransferOrderManagementFormService"]];
var MaterialRequestTransferOrderManagementModule = /** @class */ (function () {
    function MaterialRequestTransferOrderManagementModule() {
    }
    MaterialRequestTransferOrderManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_17__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_18__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_19__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_23__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS),
                _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_20__["ManageSearchCriteriaModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], MaterialRequestTransferOrderManagementModule);
    return MaterialRequestTransferOrderManagementModule;
}());



/***/ }),

/***/ "./src/app/main/logistics/material-request-transfer-order-management/shared/style.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/material-request-transfer-order-management/shared/style.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .served--nok {\n  background-color: #f6685e !important; }\n\n:host .served--ok {\n  background-color: #4caf50 !important; }\n\n:host .served--warning {\n  background-color: #ffc107 !important; }\n\n:host ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n:host .message {\n  color: #01579b;\n  font-size: 1rem;\n  text-align: center;\n  width: 100%; }\n\n:host .materials {\n  width: 100%; }\n\n:host .warehouse {\n  width: 100%; }\n\n:host .snBatch {\n  width: 100%; }\n\n:host .ok {\n  background-color: #4caf50 !important;\n  padding: 0.2em; }\n\n:host .warning {\n  background-color: #ffc107 !important;\n  padding: 0.2em; }\n\n:host .nok {\n  background-color: #f6685e !important;\n  padding: 0.2em; }\n\n:host .font-ok {\n  color: #4caf50 !important; }\n\n:host .font-warning {\n  color: #ffc107 !important; }\n\n:host .font-nok {\n  color: #f6685e !important; }\n\n:host .font-bold {\n  font-weight: bold; }\n\n:host .font-italic {\n  font-style: italic; }\n\n:host .select-box .arrow::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-top: 1.5em solid transparent;\n  border-bottom: 1.5em solid transparent;\n  border-left: 0.7em solid #01579b;\n  right: -0.45em; }\n\n:host .section-without-margin {\n  margin-left: 0px !important;\n  margin-bottom: 1rem !important; }\n\n:host .col-width-20 {\n  width: 20% !important; }\n\n:host ::ng-deep .red .ui-progressbar .ui-progressbar-value {\n  border: 0 none;\n  margin: 0;\n  background: #f6685e !important; }\n\n:host ::ng-deep .yellow .ui-progressbar .ui-progressbar-value {\n  border: 0 none;\n  margin: 0;\n  background: #ffc107 !important; }\n\n:host ::ng-deep .green .ui-progressbar .ui-progressbar-value {\n  border: 0 none;\n  margin: 0;\n  background: #4caf50 !important; }\n\n:host span.green {\n  color: #4caf50 !important; }\n\n:host span.red {\n  color: #f6685e !important; }\n\n:host span.yellow {\n  color: #ffc107 !important; }\n\n:host .img-dimension {\n  height: 10rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbWF0ZXJpYWwtcmVxdWVzdC10cmFuc2Zlci1vcmRlci1tYW5hZ2VtZW50L3NoYXJlZC9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXG1hdGVyaWFsLXJlcXVlc3QtdHJhbnNmZXItb3JkZXItbWFuYWdlbWVudFxcc2hhcmVkXFxzdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUksb0NBQXdDLEVBQUE7O0FBRjVDO0VBTUksb0NBQTBDLEVBQUE7O0FBTjlDO0VBVUksb0NBQW9DLEVBQUE7O0FBVnhDO0VBY0ksU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFoQnBCO0VBb0JJLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUF2QmY7RUEyQkksV0FBVyxFQUFBOztBQTNCZjtFQStCSSxXQUFXLEVBQUE7O0FBL0JmO0VBbUNJLFdBQVcsRUFBQTs7QUFuQ2Y7RUF1Q0ksb0NBQTBDO0VBQzFDLGNBQWMsRUFBQTs7QUF4Q2xCO0VBNENJLG9DQUFvQztFQUNwQyxjQUFjLEVBQUE7O0FBN0NsQjtFQWlESSxvQ0FBd0M7RUFDeEMsY0FBYyxFQUFBOztBQWxEbEI7RUFzREkseUJBQStCLEVBQUE7O0FBdERuQztFQTBESSx5QkFBeUIsRUFBQTs7QUExRDdCO0VBOERJLHlCQUE2QixFQUFBOztBQTlEakM7RUFrRUksaUJBQWlCLEVBQUE7O0FBbEVyQjtFQXNFSSxrQkFBa0IsRUFBQTs7QUF0RXRCO0VBMEVJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLGdDQUFnQztFQUNoQyxjQUFjLEVBQUE7O0FBakZsQjtFQXFGSSwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUE7O0FBdEZsQztFQTBGSSxxQkFBcUIsRUFBQTs7QUExRnpCO0VBZ0dRLGNBQWM7RUFDZCxTQUFTO0VBQ1QsOEJBQWtDLEVBQUE7O0FBbEcxQztFQTBHUSxjQUFjO0VBQ2QsU0FBUztFQUNULDhCQUE4QixFQUFBOztBQTVHdEM7RUFvSFEsY0FBYztFQUNkLFNBQVM7RUFDVCw4QkFBb0MsRUFBQTs7QUF0SDVDO0VBNkhNLHlCQUErQixFQUFBOztBQTdIckM7RUFpSU0seUJBQTZCLEVBQUE7O0FBakluQztFQXFJTSx5QkFBeUIsRUFBQTs7QUFySS9CO0VBMElJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL21hdGVyaWFsLXJlcXVlc3QtdHJhbnNmZXItb3JkZXItbWFuYWdlbWVudC9zaGFyZWQvc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5zZXJ2ZWQtLW5vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNlcnZlZC0tb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNlcnZlZC0td2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5tZXNzYWdlIHtcclxuICAgIGNvbG9yOiAjMDE1NzliO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubWF0ZXJpYWxzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLndhcmVob3VzZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zbkJhdGNoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDEgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4gIH1cclxuXHJcbiAgLndhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMC4yZW07XHJcbiAgfVxyXG5cclxuICAubm9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwLjJlbTtcclxuICB9XHJcblxyXG4gIC5mb250LW9rIHtcclxuICAgIGNvbG9yOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9udC13YXJuaW5nIHtcclxuICAgIGNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9udC1ub2sge1xyXG4gICAgY29sb3I6ICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9udC1ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmZvbnQtaXRhbGljIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcblxyXG4gIC5zZWxlY3QtYm94IC5hcnJvdzo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEuNWVtO1xyXG4gICAgYm9yZGVyLXRvcDogMS41ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxLjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAwLjdlbSBzb2xpZCAjMDE1NzliO1xyXG4gICAgcmlnaHQ6IC0wLjQ1ZW07XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi13aXRob3V0LW1hcmdpbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29sLXdpZHRoLTIwIHtcclxuICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAucmVkIHtcclxuICAgIC51aS1wcm9ncmVzc2JhciB7XHJcbiAgICAgIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAueWVsbG93IHtcclxuICAgIC51aS1wcm9ncmVzc2JhciB7XHJcbiAgICAgIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5ncmVlbiB7XHJcbiAgICAudWktcHJvZ3Jlc3NiYXIge1xyXG4gICAgICAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgICAgIGJvcmRlcjogMCBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgJi5ncmVlbiB7XHJcbiAgICAgIGNvbG9yOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5yZWQge1xyXG4gICAgICBjb2xvcjogJHJlZC1saWdodDEgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLnllbGxvdyB7XHJcbiAgICAgIGNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW1nLWRpbWVuc2lvbiB7XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/constants/bidt-stock-mvt-constants.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/constants/bidt-stock-mvt-constants.ts ***!
  \**************************************************************/
/*! exports provided: BidtStockMvtConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidtStockMvtConstants", function() { return BidtStockMvtConstants; });
var BidtStockMvtConstants = /** @class */ (function () {
    function BidtStockMvtConstants() {
    }
    BidtStockMvtConstants.MVT_WAY_CREDIT = 'C';
    BidtStockMvtConstants.MVT_WAY_DEBIT = 'D';
    BidtStockMvtConstants.MVT_WAY_TRANSFER = 'T';
    BidtStockMvtConstants.MVT_RECONDITIONING = 'MVT_RECONDITIONING';
    BidtStockMvtConstants.MVT_RELATED_FL = 'MVT_RELATED_FL';
    BidtStockMvtConstants.MVT_STORAGE_COUNTER_RESET = 'MVT_STORAGE_COUNTER_RESET';
    BidtStockMvtConstants.MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT = 0;
    BidtStockMvtConstants.MVT_STATUS_STEP_WAY_TRANSFERT = 1;
    BidtStockMvtConstants.MVT_STATUS_STEP_WAY_DEBIT = 2;
    BidtStockMvtConstants.MVT_STATUS_STEP_WAY_CREDIT = 3;
    return BidtStockMvtConstants;
}());



/***/ }),

/***/ "./src/app/shared/constants/bidt-stock-mvt-type-constants.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/constants/bidt-stock-mvt-type-constants.ts ***!
  \*******************************************************************/
/*! exports provided: BidtStockMvtTypeConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidtStockMvtTypeConstant", function() { return BidtStockMvtTypeConstant; });
var BidtStockMvtTypeConstant = /** @class */ (function () {
    function BidtStockMvtTypeConstant() {
    }
    BidtStockMvtTypeConstant.RECEIPT = 10;
    BidtStockMvtTypeConstant.STORAGE = 11;
    BidtStockMvtTypeConstant.LOCATION_CHANGE = 12;
    BidtStockMvtTypeConstant.QUARANTINE = 13;
    BidtStockMvtTypeConstant.CROSS_DOCKING = 18;
    BidtStockMvtTypeConstant.PICKING = 19;
    BidtStockMvtTypeConstant.SHIPMENT = 20;
    BidtStockMvtTypeConstant.BATCH_SPLITTING_PLUS = 22;
    BidtStockMvtTypeConstant.BATCH_SPLITTING_MINUS = 23;
    BidtStockMvtTypeConstant.INVENTORY_CORRECTION_PLUS = 24;
    BidtStockMvtTypeConstant.INVENTORY_CORRECTION_MINUS = 25;
    BidtStockMvtTypeConstant.WORKSHOP_ENTRY = 30;
    BidtStockMvtTypeConstant.INSTALLATION = 40;
    BidtStockMvtTypeConstant.REMOVAL = 50;
    BidtStockMvtTypeConstant.WORKSHOP_ISSUE = 60;
    return BidtStockMvtTypeConstant;
}());



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
//# sourceMappingURL=logistics-material-request-transfer-order-management-material-request-transfer-order-management-module.js.map