(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~maintenance-cockpit-inspection-cockpit-inspection-module~maintenance-cockpit-workscope-cockp~91d7ce95"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/primeng/autocomplete.js":
/*!**********************************************!*\
  !*** ./node_modules/primeng/autocomplete.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/autocomplete/autocomplete */ "./node_modules/primeng/components/autocomplete/autocomplete.js"));

/***/ }),

/***/ "./node_modules/primeng/card.js":
/*!**************************************!*\
  !*** ./node_modules/primeng/card.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/card/card */ "./node_modules/primeng/components/card/card.js"));

/***/ }),

/***/ "./node_modules/primeng/inputswitch.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/inputswitch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/inputswitch/inputswitch */ "./node_modules/primeng/components/inputswitch/inputswitch.js"));

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

/***/ "./src/app/shared/components/add-edit-inventory/add-edit-inventory.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/add-edit-inventory/add-edit-inventory.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        <span *ngIf=\"!!pageComponentData.title\">\r\n          {{ getComponentName() + \".inventoryTitle\" | translate }} {{ pageComponentData.title }}\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div class=\"page-subtitle\">\r\n          <span *ngIf=\"!!pageComponentData.subtittle\"> - {{ pageComponentData.subtittle }} </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button\r\n      id=\"favorites\"\r\n      *ngIf=\"(!isAddInventory || !addNewInventory) && selectedInventoryList.length > 0\"\r\n      mat-raised-button\r\n      color=\"warn\"\r\n      (click)=\"deleteInventories()\"\r\n    >\r\n      {{ getComponentName() + \".deleteInventory\" | translate }}\r\n    </button>\r\n    <button color=\"primary\" type=\"button\" mat-raised-button (click)=\"saveInventory()\">\r\n      {{ \"global.save\" | translate }}\r\n    </button>\r\n    <button\r\n      id=\"actions\"\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button id=\"favorites\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\" *ngIf=\"!isAddInventory\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container grid-cell-scope\">\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"grid-cell--12 row-button\">\r\n                <div class=\"grid-cell--11 buttons\">\r\n                  <!-- ACTIONS -->\r\n                  <div class=\"row\">\r\n                    <label *ngIf=\"!showInventories && cardList.length > 0\" class=\"form-label link-class\"\r\n                      ><a (click)=\"toggleInventoryDisplay()\"\r\n                        >+{{ getComponentName() + \".showInventory\" | translate }}</a\r\n                      ></label\r\n                    >\r\n                    <label *ngIf=\"showInventories && cardList.length > 0\" class=\"form-label link-class\"\r\n                      ><a (click)=\"toggleInventoryDisplay()\"\r\n                        >-{{ getComponentName() + \".hideInventory\" | translate }}</a\r\n                      ></label\r\n                    >\r\n                    <label *ngIf=\"cardList.length > 1\" class=\"form-label  link-class\"\r\n                      ><a (click)=\"selectAllInventories()\">{{\r\n                        getComponentName() + \".selectAll\" | translate\r\n                      }}</a></label\r\n                    >\r\n                    <label *ngIf=\"cardList.length > 1\" class=\"form-label  link-class\"\r\n                      ><a (click)=\"unselectAllInventories()\">{{\r\n                        getComponentName() + \".unselectAll\" | translate\r\n                      }}</a></label\r\n                    >\r\n                    <label\r\n                      class=\"form-label link-class\"\r\n                      *ngIf=\"cardList.length > maxVisibleInventories\"\r\n                      (click)=\"expandAll()\"\r\n                      ><a\r\n                        ><span *ngIf=\"!expandInventoryList\">+ {{ getComponentName() + \".showAll\" | translate }}</span>\r\n                        <span *ngIf=\"expandInventoryList\">- {{ getComponentName() + \".collapse\" | translate }}</span></a\r\n                      ></label\r\n                    >\r\n                    <div class=\"form-group\"></div>\r\n                    <div class=\"form-group\"></div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"grid-cell--1\">\r\n                  <div class=\"row\">\r\n                    <!-- Filter -->\r\n                    <span class=\"row align-custom custom-height\">\r\n                      <span class=\"lds-hourglass\" *ngIf=\"loadInventoriesFlag\"></span>\r\n                      <i\r\n                        class=\"fa fa-fw fa-filter aw-icon aw-icon-with-overlay\"\r\n                        aria-hidden=\"true\"\r\n                        pTooltip=\"{{\r\n                          getComponentName() + (filtersVisible ? '.hideFilters' : '.showFilters') | translate\r\n                        }}\"\r\n                        tooltipPosition=\"top\"\r\n                        [ngClass]=\"{ active: filtersVisible }\"\r\n                        (click)=\"opFilters.toggle($event)\"\r\n                      ></i>\r\n\r\n                      <p-overlayPanel\r\n                        #opFilters\r\n                        [appendTo]=\"'body'\"\r\n                        class=\"aw-overlay\"\r\n                        [dismissable]=\"true\"\r\n                        (onShow)=\"filtersVisible = true\"\r\n                        (onHide)=\"filtersVisible = false\"\r\n                      >\r\n                        <div class=\"page-content\" *ngIf=\"overlayContentReady\">\r\n                          <div class=\"grid-row\">\r\n                            <div class=\"grid-cell grid-cell--container\">\r\n                              <div class=\"grid-cell-content\">\r\n                                <div class=\"column\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"form-group flex--auto\">\r\n                                      <label class=\"form-label\">{{ getComponentName() + \".pn\" | translate }}</label>\r\n\r\n                                      <div class=\"form-control\">\r\n                                        <p-dropdown\r\n                                          class=\"aw-dropdown fixed-width\"\r\n                                          [(ngModel)]=\"searchCriteria.selectedPN\"\r\n                                          [options]=\"inventoryPNList\"\r\n                                          placeholder=\"&nbsp;\"\r\n                                          [showClear]=\"true\"\r\n                                        ></p-dropdown>\r\n                                      </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group flex--auto\">\r\n                                      <label class=\"form-label\">{{\r\n                                        getComponentName() + \".workorder\" | translate\r\n                                      }}</label>\r\n\r\n                                      <div class=\"form-control\">\r\n                                        <p-dropdown\r\n                                          class=\"aw-dropdown fixed-width\"\r\n                                          [(ngModel)]=\"searchCriteria.selectedWO\"\r\n                                          [options]=\"inventoryWOList\"\r\n                                          placeholder=\"&nbsp;\"\r\n                                          [showClear]=\"true\"\r\n                                        ></p-dropdown>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n\r\n                                  <div class=\"row\">\r\n                                    <div class=\"form-group flex--auto\">\r\n                                      <label class=\"form-label\">{{\r\n                                        getComponentName() + \".sentence\" | translate\r\n                                      }}</label>\r\n\r\n                                      <div class=\"form-control\">\r\n                                        <p-dropdown\r\n                                          class=\"aw-dropdown fixed-width\"\r\n                                          [(ngModel)]=\"searchCriteria.selectedSentence\"\r\n                                          [options]=\"inventorySentenceList\"\r\n                                          placeholder=\"&nbsp;\"\r\n                                          [showClear]=\"true\"\r\n                                        ></p-dropdown>\r\n                                      </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group flex--auto\">\r\n                                      <label class=\"form-label\">{{\r\n                                        getComponentName() + \".decision\" | translate\r\n                                      }}</label>\r\n\r\n                                      <div class=\"form-control footer-div\">\r\n                                        <p-dropdown\r\n                                          class=\"aw-dropdown fixed-width\"\r\n                                          [(ngModel)]=\"searchCriteria.selectedDecision\"\r\n                                          [options]=\"inventoryDecisionList\"\r\n                                          placeholder=\"&nbsp;\"\r\n                                          [showClear]=\"true\"\r\n                                        ></p-dropdown>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n\r\n                                  <div class=\"row\">\r\n                                    <div class=\"form-group\">\r\n                                      <label class=\"form-label\"> &nbsp;</label>\r\n\r\n                                      <div class=\"form-control aw-selectbutton-wrapper\">\r\n                                        <p-selectButton\r\n                                          [(ngModel)]=\"searchCriteria.control\"\r\n                                          [options]=\"statusList\"\r\n                                          multiple=\"true\"\r\n                                        ></p-selectButton>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n\r\n                                  <div class=\"row action-list\">\r\n                                    <button type=\"button\" mat-raised-button (click)=\"reset()\">\r\n                                      {{ \"global.reset\" | translate }}\r\n                                    </button>\r\n\r\n                                    <button type=\"button\" mat-raised-button (click)=\"filter(); opFilters.hide()\">\r\n                                      {{ \"global.filter\" | translate }}\r\n                                    </button>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </p-overlayPanel>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"grid-cell--12 custom-control\">\r\n                <div class=\"grid-cell--1 add-inventory\" (click)=\"addInventory()\">\r\n                  <p-card>\r\n                    <h1>+</h1>\r\n                  </p-card>\r\n                </div>\r\n                <div class=\"grid-cell--11 column custom-panel margin-class\" *ngIf=\"!loadInventoriesFlag\">\r\n                  <div\r\n                    class=\"row card-row\"\r\n                    [ngClass]=\"{\r\n                      'custom-card-row': !expandInventoryList\r\n                    }\"\r\n                    *ngIf=\"showInventories\"\r\n                  >\r\n                    <div\r\n                      class=\"card-container\"\r\n                      [ngClass]=\"{\r\n                        'card-serialize-item': isItemSerialized,\r\n                        'card-not-serialize-item': !isItemSerialized\r\n                      }\"\r\n                      *ngFor=\"let inventory of cardList\"\r\n                      (click)=\"selectInventory(inventory)\"\r\n                      [class.current]=\"inventory.isSelected\"\r\n                    >\r\n                      <p-card class=\"card-class\"\r\n                      [ngClass]=\"{\r\n                        'card-class': isItemSerialized,\r\n                        'card-class-not-serialize': !isItemSerialized\r\n                      }\"\r\n                      [styleClass]=\"getStyles(inventory.icon)\">\r\n                        <div class=\"row custom-row\">\r\n                          <div *ngIf=\"!isItemSerialized\" title=\"{{ inventory.quantity }}\">\r\n                            <span class=\"quantity-non-serialized\"> (Q= {{ getTrimQty(inventory.quantity) }})</span>\r\n                          </div>\r\n                          <div class=\"form\">\r\n                            <label class=\"form-label\"\r\n                              ><b>{{ getComponentName() + \".pn\" | translate }} :</b></label\r\n                            >\r\n                            <span class=\"margin-class\"\r\n                              ><a>{{ getTrimQty(inventory.pn) }}</a>\r\n                            </span>\r\n                          </div>\r\n                          <div class=\"form\" *ngIf=\"isItemSerialized && !!inventory.sn\">\r\n                            <label class=\"form-label\"\r\n                              ><b>{{ getComponentName() + \".sn\" | translate }} :</b></label\r\n                            >\r\n                            <span class=\"margin-class\"\r\n                              ><a>{{ getTrimQty(inventory.sn) }}</a></span\r\n                            >\r\n                          </div>\r\n                          <div class=\"form\" *ngIf=\"!isItemSerialized && !!inventory.trackingNumber\">\r\n                            <label class=\"form-label\"\r\n                              ><b>{{ getComponentName() + \".tn\" | translate }} :</b></label\r\n                            >\r\n                            <span class=\"margin-class\"\r\n                              ><a>{{ getTrimQty(inventory.trackingNumber) }}</a></span\r\n                            >\r\n                          </div>\r\n                          <div class=\"form\">\r\n                            <i *ngIf=\"!!inventory.sentenceValue\"\r\n                              ><span class=\"quantity\">S:</span>\r\n                              {{ getTrimLabel(getSentenceLabel(inventory.sentenceValue)) }}</i\r\n                            >\r\n                            <i *ngIf=\"!inventory.sentenceValue\"\r\n                              ><span class=\"quantity\">S:</span> {{ getComponentName() + \".notSet\" | translate }}</i\r\n                            >\r\n                          </div>\r\n                          <div class=\"form\">\r\n                            <i *ngIf=\"!!inventory.decisionValue\"\r\n                              ><span class=\"quantity\">D:</span>\r\n                              {{ getTrimLabel(getDecisionLabel(inventory.decisionValue)) }}</i\r\n                            >\r\n                            <i *ngIf=\"!inventory.decisionValue\"\r\n                              ><span class=\"quantity\">D:</span> {{ getComponentName() + \".notSet\" | translate }}</i\r\n                            >\r\n                          </div>\r\n                          <div class=\"form footer-div\">\r\n                            <i class=\"wks-float\" *ngIf=\"!!inventory.woCode\"\r\n                              ><b>Wks: </b> {{ getTrimQty(inventory.woCode) }}</i\r\n                            >\r\n                          </div>\r\n                        </div>\r\n                      </p-card>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- PANEL 2 -->\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container grid-cell-scope\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container  loading-indicator\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".technicalQuotation\" | translate }}\r\n                  <div *ngIf=\"loadInventoriesFlag\" class=\"lds-hourglass\"></div>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"grid-cell--12\">\r\n                <div class=\"grid-cell--4\">\r\n                  <div class=\"column\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\" *ngIf=\"!showOtherPN\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".pn\" | translate }}</label>\r\n                        <div class=\"form-control\" *ngIf=\"isPNCommon && selectedInventoryList.length > 1 && !selectedPN\">\r\n                          <i>{{ getComponentName() + \".differentPN\" | translate }}</i>\r\n                        </div>\r\n                        <div class=\"form-control\">\r\n                          <p-autoComplete\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [(ngModel)]=\"selectedPN\"\r\n                            [suggestions]=\"pnList\"\r\n                            [immutable]=\"true\"\r\n                            [dropdown]=\"true\"\r\n                            [forceSelection]=\"true\"\r\n                            (completeMethod)=\"searchPN($event)\"\r\n                            (onSelect)=\"onChangePN()\"\r\n                          ></p-autoComplete>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\" *ngIf=\"showOtherPN\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".otherPN\" | translate }}</label>\r\n                        <div\r\n                          class=\"form-control\"\r\n                          *ngIf=\"isOtherPNDifferent && selectedInventoryList.length > 1 && !selectedPN\"\r\n                        >\r\n                          <i>{{ getComponentName() + \".differentOtherPN\" | translate }}</i>\r\n                        </div>\r\n                        <div class=\"form-control\">\r\n                          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"otherPN\" />\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">&nbsp;</label>\r\n                        <div class=\"form-control\">\r\n                          <!-- Toggle PN and Other PN -->\r\n                          <button color=\"primary\" type=\"button\" mat-raised-button (click)=\"togglePNButton()\">\r\n                            <span *ngIf=\"showOtherPN\">{{ getComponentName() + \".pnList\" | translate }}</span>\r\n                            <span *ngIf=\"!showOtherPN\">{{ getComponentName() + \".otherPN\" | translate }}</span>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group flex--2\" *ngIf=\"selectedInventoryList.length === 1 && isItemSerialized\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".sn\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"selectedInventoryList[0].sn\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"isAddInventory || (addNewInventory && selectedInventoryList.length === 0)\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\"\r\n                          >{{ getComponentName() + \".quantity\" | translate }} ({{\r\n                            getComponentName() + \".expected\" | translate\r\n                          }}= {{ bireItemDTO.expectedQuantity }})</label\r\n                        >\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"number\"\r\n                            class=\"aw-input\"\r\n                            min=\"0\"\r\n                            [(ngModel)]=\"quantityValue\"\r\n                            (input)=\"onQuantityChange()\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"serial-class\">\r\n                        <!-- SERIALIZED -->\r\n                        <div class=\"form-group\" *ngIf=\"isItemSerialized\">\r\n                          <label class=\"form-label\">{{ getComponentName() + \".serialNo\" | translate }}</label>\r\n                          <div class=\"form-control custom-control\" *ngFor=\"let count of snCount; let i = index\">\r\n                            <span class=\"margin-top-class\" *ngIf=\"snCount.length > 1\">#{{ i + 1 }} </span>\r\n                            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"count.value\" />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div\r\n                      *ngIf=\"\r\n                        !isAddInventory &&\r\n                        !addNewInventory &&\r\n                        (!isItemSerialized || (isItemSerialized && selectedInventoryList.length > 1))\r\n                      \"\r\n                    >\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\"\r\n                          >{{ getComponentName() + \".quantity\" | translate }} ({{\r\n                            getComponentName() + \".expected\" | translate\r\n                          }}= {{ bireItemDTO.expectedQuantity }})</label\r\n                        >\r\n                        <div class=\"form-control\">\r\n                          <input\r\n                            type=\"number\"\r\n                            class=\"aw-input\"\r\n                            min=\"0\"\r\n                            [disabled]=\"isItemSerialized || (!isItemSerialized && selectedInventoryList.length > 1)\"\r\n                            [(ngModel)]=\"sumRealQuantity\"\r\n                            (input)=\"onQuantityChange()\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"serial-class\">\r\n                        <div class=\"form-group\" *ngIf=\"isItemSerialized\">\r\n                          <label class=\"form-label\">{{ getComponentName() + \".serialNo\" | translate }}</label>\r\n                          <div\r\n                            class=\"form-control custom-control\"\r\n                            *ngFor=\"let inventory of selectedInventoryList; let i = index\"\r\n                          >\r\n                            <span class=\"margin-top-class\" *ngIf=\"selectedInventoryList.length > 1\">#{{ i + 1 }} </span>\r\n                            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"inventory.sn\" />\r\n                          </div>\r\n                        </div>\r\n\r\n                        <!-- NOT SERIALIZED -->\r\n                        <div class=\"form-group\" *ngIf=\"!isItemSerialized && selectedInventoryList.length > 1\">\r\n                          <label class=\"form-label\">{{ getComponentName() + \".trackingNumber\" | translate }}</label>\r\n                          <div class=\"form-control\" *ngIf=\"isTNCommon\">\r\n                            <i>{{ getComponentName() + \".differentTN\" | translate }}</i>\r\n                          </div>\r\n                          <span *ngIf=\"selectedInventoryList.length > 1\">\r\n                            <div class=\"form-control\" *ngFor=\"let inventory of selectedInventoryList\">\r\n                              <input\r\n                                type=\"text\"\r\n                                class=\"aw-input\"\r\n                                *ngIf=\"!!inventory.trackingNumber\"\r\n                                disabled\r\n                                [(ngModel)]=\"inventory.trackingNumber\"\r\n                              />\r\n                            </div>\r\n                          </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\" *ngIf=\"selectedInventoryList.length === 1 && !isItemSerialized\">\r\n                          <label class=\"form-label\">{{ getComponentName() + \".trackingNumber\" | translate }}</label>\r\n\r\n                          <div class=\"form-control\">\r\n                            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"selectedInventoryList[0].trackingNumber\" />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"isAddInventory || (addNewInventory && selectedInventoryList.length === 0)\">\r\n                      <!-- NOT SERIALIZED -->\r\n                      <div class=\"form-group\" *ngIf=\"!isItemSerialized\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".trackingNumber\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"newInventory.trackingNumber\" />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".targetPN\" | translate }}</label>\r\n                      <div\r\n                        class=\"form-control\"\r\n                        *ngIf=\"isTargetPNCommon && selectedInventoryList.length > 1 && !selectedTargetPN\"\r\n                      >\r\n                        <i>{{ getComponentName() + \".differentTargetPN\" | translate }}</i>\r\n                      </div>\r\n                      <div class=\"form-control\">\r\n                        <p-autoComplete\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          [(ngModel)]=\"selectedTargetPN\"\r\n                          [suggestions]=\"targetPNList\"\r\n                          [immutable]=\"true\"\r\n                          [dropdown]=\"true\"\r\n                          [forceSelection]=\"true\"\r\n                          (completeMethod)=\"searchTargetPN($event)\"\r\n                          (onSelect)=\"onChangeTargetPN()\"\r\n                        ></p-autoComplete>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell--11\">\r\n                  <div class=\"column\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group flex--2\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".sentence\" | translate }}</label>\r\n                        <div\r\n                          class=\"form-control\"\r\n                          *ngIf=\"isIntersectionSentenceDiff && selectedInventoryList.length > 1 && !selectedSentence\"\r\n                        >\r\n                          <i>{{ getComponentName() + \".differentSentence\" | translate }}</i>\r\n                        </div>\r\n                        <div class=\"form-control aw-selectbutton-wrapper select-button-custom\">\r\n                          <p-selectButton\r\n                            [(ngModel)]=\"selectedSentence\"\r\n                            [options]=\"sentenceList\"\r\n                            (onChange)=\"changeSentence()\"\r\n                          ></p-selectButton>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\" *ngIf=\"selectedInventoryList.length > 0\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".configurationStatus\" | translate }}</label>\r\n                        <span *ngIf=\"getConfiguration() === ok\" class=\"alert alert--ok\">OK</span>\r\n                        <span *ngIf=\"getConfiguration() === nok\" class=\"alert alert--nok\">NOK</span>\r\n                        <span *ngIf=\"getConfiguration() === warning\" class=\"alert alert--warning\">WARNING</span>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group flex--2\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".decision\" | translate }}</label>\r\n                        <div\r\n                          class=\"form-control\"\r\n                          *ngIf=\"isIntersectionDecisionDiff && selectedInventoryList.length > 1 && !selectedDecision\"\r\n                        >\r\n                          <i>{{ getComponentName() + \".differentDecision\" | translate }}</i>\r\n                        </div>\r\n                        <div class=\"form-control aw-selectbutton-wrapper footer-div select-button-custom\">\r\n                          <p-selectButton\r\n                            [(ngModel)]=\"selectedDecision\"\r\n                            [options]=\"decisionList\"\r\n                            (onChange)=\"changeDecision()\"\r\n                          ></p-selectButton>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\" *ngIf=\"selectedInventoryList.length > 0\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".wo\" | translate }}</label>\r\n                        <div class=\"form-control\">\r\n                          <a class=\"link-class\" (click)=\"openWorkOrderLink(selectedInventoryList[0])\">{{\r\n                            selectedInventoryList[0].woCode\r\n                          }}</a>\r\n                          <p-progressBar\r\n                            *ngIf=\"!!selectedInventoryList[0].woCode\"\r\n                            [value]=\"selectedInventoryList[0].progress\"\r\n                          >\r\n                          </p-progressBar>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".comment\" | translate }}</label>\r\n                      <div class=\"form-control\">\r\n                        <textarea\r\n                          class=\"aw-textarea\"\r\n                          [rows]=\"3\"\r\n                          pInputTextarea\r\n                          maxlength=\"150\"\r\n                          [disabled]=\"isReadOpenMode\"\r\n                        ></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"grid-cell--1\" *ngIf=\"!isAddInventory && selectedInventoryList.length !== 0\">\r\n                  <img />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- PANEL 2 -->\r\n      <div class=\"grid-row\" *ngIf=\"isFromInspection\">\r\n        <!-- FINDINGS -->\r\n        <div class=\"grid-cell--6\">\r\n          <div class=\"grid-cell grid-cell--container grid-cell-scope\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container loading-indicator\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".findings\" | translate }}\r\n                  <div *ngIf=\"loadInventoriesFlag\" class=\"lds-hourglass\"></div>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\" *ngIf=\"!loadInventoriesFlag\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableFindingsElement\r\n                class=\"aw-table2\"\r\n                [columns]=\"findingCols\"\r\n                [value]=\"findingsList\"\r\n                [scrollable]=\"true\"\r\n                scrollHeight=\"25vh\"\r\n                [(selection)]=\"selectedFinding\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isfilterTable\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isfilterTable\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableCusCustomerGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableFindingsElement.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        type=\"button\"\r\n                        *ngIf=\"selectedFinding.length > 0\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteFindings()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n                      <button\r\n                        type=\"button\"\r\n                        *ngIf=\"selectedFinding.length === 1\"\r\n                        mat-raised-button\r\n                        (click)=\"editFindings()\"\r\n                      >\r\n                        {{ \"global.edit\" | translate }}\r\n                      </button>\r\n                      <button\r\n                        *ngIf=\"selectedFinding.length === 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openFindingsDialog()\"\r\n                      >\r\n                        {{ \"global.add\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedFinding.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openFindingsDialogInReadMode()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ getComponentName() + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <span *ngSwitchCase=\"'damage'\">\r\n                        <div>\r\n                          <a>{{ rowData[\"damageCode\"] }}</a>\r\n                        </div>\r\n                        <div>\r\n                          <i>{{ rowData[\"damageDescription\"] }}</i>\r\n                        </div>\r\n\r\n                        <div>\r\n                          {{ getComponentName() + \".criticality\" | translate }} : <b>{{ rowData[\"criticality\"] }}</b>\r\n                        </div>\r\n                        <div>\r\n                          {{ getComponentName() + \".quantity\" | translate }} : <b>{{ rowData[\"quantity\"] }}</b>\r\n                        </div>\r\n                      </span>\r\n                      <span *ngSwitchCase=\"'localisation'\">\r\n                        <div>\r\n                          <b>{{ rowData[\"localisationCode\"] }}</b>\r\n                        </div>\r\n                        <div>\r\n                          <a>{{ rowData[\"location\"] }}</a>\r\n                        </div>\r\n                      </span>\r\n                      <span *ngSwitchCase=\"'illustration'\">\r\n                        <div class=\"illustration\">\r\n                          <img\r\n                            class=\"img-class\"\r\n                            *ngIf=\"\r\n                              !!rowData.bireDocumentDTOList &&\r\n                              rowData.bireDocumentDTOList.length > 0 &&\r\n                              !!rowData.bireDocumentDTOList[0].docFile\r\n                            \"\r\n                            [src]=\"rowData.additionalData\"\r\n                          />\r\n                        </div>\r\n                      </span>\r\n\r\n                      <span *ngSwitchDefault>\r\n                        {{ rowData[col.field] }}\r\n                      </span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- WORKS -->\r\n        <div class=\"grid-cell--6\">\r\n          <div class=\"grid-cell grid-cell--container grid-cell-scope\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container  loading-indicator\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".works\" | translate }}\r\n                  <div *ngIf=\"loadInventoriesFlag\" class=\"lds-hourglass\"></div>\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\" *ngIf=\"!loadInventoriesFlag\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".reworkedPN\" | translate }}</label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      [options]=\"reworkPNs\"\r\n                      placeholder=\"&nbsp;\"\r\n                      [showClear]=\"true\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".mroCenter\" | translate }}</label>\r\n                  <div class=\"form-control\">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      [(ngModel)]=\"selectedMroCenter\"\r\n                      [options]=\"mroCenterList\"\r\n                      (onChange)=\"changeMroCenterAndLoadTask()\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ getComponentName() + \".taskType\" | translate }}</label>\r\n                  <div class=\"form-control\">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      [(ngModel)]=\"selectedTask\"\r\n                      [options]=\"taskList\"\r\n                      (onChange)=\"changeTaskType()\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableWorksElement\r\n                class=\"aw-table2\"\r\n                [columns]=\"worksCols\"\r\n                [value]=\"workList\"\r\n                [(selection)]=\"selectedWork\"\r\n                [scrollable]=\"true\"\r\n                scrollHeight=\"25vh\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isfilterTable\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isfilterTable\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptableCusCustomerGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableWorksElement.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button type=\"button\" mat-raised-button *ngIf=\"selectedWork.length > 0\" (click)=\"applyTask()\">\r\n                        {{ getComponentName() + \".applied\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"aw-table-icon-actions\">\r\n                      <i\r\n                        class=\"fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay\"\r\n                        aria-hidden=\"true\"\r\n                        tooltipPosition=\"top\"\r\n                        (click)=\"workFilters.toggle($event)\"\r\n                      ></i>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width, display: col.display }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th\r\n                      pResizableColumn\r\n                      *ngFor=\"let col of columns\"\r\n                      [ngStyle]=\"{ 'text-align': col.alignment, display: col.display }\"\r\n                    >\r\n                      {{ getComponentName() + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td\r\n                      *ngFor=\"let col of columns\"\r\n                      [ngSwitch]=\"col.field\"\r\n                      [ngStyle]=\"{ 'text-align': col.alignment, display: col.display }\"\r\n                    >\r\n                      <span *ngSwitchCase=\"'task'\">\r\n                        <div>\r\n                          <b>{{ rowData[\"taskCode\"] }}</b>\r\n                        </div>\r\n                        <div title=\"{{ rowData['designation'] }}\" class=\"description\">\r\n                          <i>{{ rowData[\"taskDesignation\"] }}</i>\r\n                        </div>\r\n                        <div>\r\n                          {{ getComponentName() + \".type\" | translate }} : <b>{{ rowData[\"taskTypeLabel\"] }}</b>\r\n                        </div>\r\n                      </span>\r\n                      <span *ngSwitchCase=\"'workorder'\">\r\n                        <div>\r\n                          <a>{{ rowData[\"workorder\"] }}</a>\r\n                        </div>\r\n                        <div *ngIf=\"!!rowData['progress']\">\r\n                          <p-progressBar [value]=\"rowData['progress']\"></p-progressBar>\r\n                        </div>\r\n                        <div>\r\n                          <i>{{ rowData[\"woText\"] }}</i>\r\n                        </div>\r\n                      </span>\r\n                      <span *ngSwitchCase=\"'applied'\">\r\n                        <p-inputSwitch [(ngModel)]=\"rowData[col.field]\" (onChange)=\"taskApplied()\"></p-inputSwitch>\r\n                      </span>\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- DOCUMENT TAB -->\r\n      <div\r\n        class=\"grid-row\"\r\n        *ngIf=\"selectedInventoryList.length === 1 || ((isAddInventory || addNewInventory) && quantityValue === 1)\"\r\n      >\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container grid-cell-scope\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container  loading-indicator\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".documents\" | translate }}\r\n                  ({{ documentTableDataSource ? documentTableDataSource.dataCount : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <a-table [dataSource]=\"documentTableDataSource\">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf=\"documentTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"downloadFiles()\"\r\n                  >\r\n                    {{ \"global.download\" | translate }}\r\n                  </button>\r\n                  <button\r\n                    *ngIf=\"!isReadOpenMode && documentTableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    color=\"warn\"\r\n                    (click)=\"deleteDocuments()\"\r\n                  >\r\n                    {{ \"global.delete\" | translate }}\r\n                  </button>\r\n                  <button\r\n                    *ngIf=\"!isReadOpenMode && documentTableDataSource.dataSelectionCount === 1\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"editDocument()\"\r\n                  >\r\n                    {{ \"global.edit\" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    *ngIf=\"!isReadOpenMode && documentTableDataSource.dataSelectionCount === 1\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"openDocument()\"\r\n                  >\r\n                    {{ \"global.open\" | translate }}\r\n                  </button>\r\n                  <p-fileUpload\r\n                    #fileUploader\r\n                    *ngIf=\"!isReadOpenMode && !documentTableDataSource.hasDataSelection\"\r\n                    chooseLabel=\"{{ 'global.upload' | translate }}\"\r\n                    name=\"document[]\"\r\n                    customUpload=\"true\"\r\n                    mode=\"basic\"\r\n                    auto=\"true\"\r\n                    (uploadHandler)=\"uploadDocument($event, fileUploader)\"\r\n                  ></p-fileUpload>\r\n                </ng-template>\r\n                <ng-template columnDef=\"docEndOfValidityDate\" let-rowData=\"rowData\">\r\n                  {{ rowData.docEndOfValidityDate | date: \"yyyy/MM/dd\" }}\r\n                </ng-template>\r\n                <ng-template columnDef=\"docExtension\" let-rowData=\"rowData\">\r\n                  <span> {{ showDocExtension(rowData) }} </span>\r\n                </ng-template>\r\n                <ng-template columnDef=\"docPublicationDate\" let-rowData=\"rowData\">\r\n                  <span>\r\n                    {{ rowData.docPublicationDate | date: \"yyyy/MM/dd\" }}\r\n                  </span>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p-overlayPanel #workFilters class=\"aw-overlay\" (onShow)=\"showFilterPanel = true\" (onHide)=\"showFilterPanel = false\">\r\n  <div class=\"grid-row\">\r\n    <div class=\"grid-cell--12\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">&nbsp;</label>\r\n\r\n          <div class=\"form-control aw-selectbutton-wrapper\">\r\n            <p-selectButton\r\n              [(ngModel)]=\"worksSearchCriteria.selectedToggle\"\r\n              [options]=\"toggleList\"\r\n              multiple=\"true\"\r\n            ></p-selectButton>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".reworkedPN\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              [(ngModel)]=\"worksSearchCriteria.selectedReworkPN\"\r\n              [options]=\"reworkPNList\"\r\n              placeholder=\"&nbsp;\"\r\n              [showClear]=\"true\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">{{ getComponentName() + \".taskCode\" | translate }}</label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-autoComplete\r\n              *ngIf=\"showFilterPanel\"\r\n              class=\"aw-dropdown fixed-width\"\r\n              [(ngModel)]=\"worksSearchCriteria.selectedCode\"\r\n              [suggestions]=\"taskCodeList\"\r\n              field=\"label\"\r\n              [immutable]=\"true\"\r\n              [dropdown]=\"true\"\r\n              [forceSelection]=\"true\"\r\n              (completeMethod)=\"searchTaskCodeList($event)\"\r\n            ></p-autoComplete>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\"> {{ getComponentName() + \".taskDesignation\" | translate }}</label>\r\n\r\n          <div class=\"form-control aw-selectbutton-wrapper\">\r\n            <p-autoComplete\r\n              *ngIf=\"showFilterPanel\"\r\n              class=\"aw-dropdown fixed-width\"\r\n              [(ngModel)]=\"worksSearchCriteria.selectedDesignation\"\r\n              [suggestions]=\"designationList\"\r\n              field=\"label\"\r\n              [immutable]=\"true\"\r\n              [dropdown]=\"true\"\r\n              [forceSelection]=\"true\"\r\n              (completeMethod)=\"searchDesignationList($event)\"\r\n            ></p-autoComplete>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row action-list\">\r\n        <button type=\"button\" mat-raised-button (click)=\"resetWorks()\">\r\n          {{ \"global.reset\" | translate }}\r\n        </button>\r\n\r\n        <button type=\"button\" mat-raised-button (click)=\"workFilters.hide(); showFilterPanel = false; filterWorks()\">\r\n          {{ \"global.filter\" | translate }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-overlayPanel>\r\n\r\n<aw-dialog-findings\r\n  *ngIf=\"showFindingsDialog\"\r\n  [openMode]=\"findingsDialogOpenMode\"\r\n  [(display)]=\"showFindingsDialog\"\r\n  [finding]=\"finding\"\r\n  (onAddFindings)=\"addFindings($event)\"\r\n></aw-dialog-findings>\r\n\r\n<aw-document-upload-dialog\r\n  *ngIf=\"showAddDocumentDialog\"\r\n  [(display)]=\"showAddDocumentDialog\"\r\n  [openMode]=\"documentDialogOpenMode\"\r\n  [document]=\"currentDocument\"\r\n  [types]=\"documentTypes\"\r\n  (onValidated)=\"addNewDocument($event)\"\r\n>\r\n</aw-document-upload-dialog>\r\n"

/***/ }),

/***/ "./src/app/shared/components/add-edit-inventory/add-edit-inventory.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/add-edit-inventory/add-edit-inventory.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .alert {\n  display: inline-block;\n  text-transform: uppercase;\n  font-weight: 600;\n  width: 8em;\n  text-align: center;\n  margin-left: 1.2em;\n  margin-top: 1em; }\n\n:host .alert.alert--ok {\n    background-color: #4caf50;\n    border-radius: 1em; }\n\n:host .alert.alert--warning {\n    background-color: #ffc107;\n    border-radius: 1em; }\n\n:host .alert.alert--nok {\n    background-color: #f6685e;\n    border-radius: 1em; }\n\n:host .alert.alert--none {\n    background-color: #c8d4d6; }\n\n:host .card-container {\n  margin-right: 0.5em;\n  margin-left: 0.5em;\n  margin-bottom: 0.5em;\n  border-radius: 1em !important; }\n\n:host .card-serialize-item {\n  width: 14.5em; }\n\n:host .card-not-serialize-item {\n  width: 16.5em; }\n\n:host .custom-cell {\n  border-radius: 1em !important;\n  box-shadow: 0.2em 0.2em #888888 !important; }\n\n:host ::ng-deep .ui-card {\n  cursor: pointer !important; }\n\n:host .link-class {\n  padding-right: 10em;\n  cursor: pointer; }\n\n:host .custom-column {\n  padding: 1em; }\n\n:host .custom-height {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-size: 1.2em; }\n\n:host .custom-row {\n  display: grid !important; }\n\n:host .form {\n  padding: 0.2em; }\n\n:host .margin-class {\n  margin-left: 0.3em; }\n\n:host .margin-top-class {\n  margin-top: 0.25em;\n  margin-right: 0.5em; }\n\n:host .custom-grid {\n  width: auto !important; }\n\n:host .border-class {\n  border: 1px solid !important; }\n\n:host ::ng-deep .card-class .alert--ok {\n  border-left: 0.3em solid #4caf50 !important;\n  height: 10em !important; }\n\n:host ::ng-deep .card-class .alert--nok {\n  border-left: 0.3em solid #f6685e !important;\n  height: 10em !important; }\n\n:host ::ng-deep .card-class .alert--warning {\n  border-left: 0.3em solid #f6685e !important;\n  height: 10em !important; }\n\n:host ::ng-deep .card-class-not-serialize .alert--ok {\n  border-left: 0.3em solid #4caf50 !important;\n  height: 10.5em !important; }\n\n:host ::ng-deep .card-class-not-serialize .alert--nok {\n  border-left: 0.3em solid #f6685e !important;\n  height: 10.5em !important; }\n\n:host ::ng-deep .card-class-not-serialize .alert--warning {\n  border-left: 0.3em solid #f6685e !important;\n  height: 10.5em !important; }\n\n:host .footer-div {\n  display: inline !important; }\n\n:host .wks-float {\n  float: left; }\n\n:host .action-class {\n  float: right; }\n\n:host .add-inventory {\n  cursor: pointer;\n  margin-top: 2em; }\n\n:host .link-class {\n  cursor: pointer; }\n\n:host .current {\n  border: 0.2em solid #595959 !important;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content; }\n\n:host .align-custom {\n  text-align: right; }\n\n:host .custom-button {\n  display: flex;\n  position: absolute;\n  padding: 1em; }\n\n:host .float-right {\n  float: right;\n  padding-right: 0.5em;\n  cursor: pointer; }\n\n:host .custom-control {\n  display: flex;\n  padding: 0 !important; }\n\n:host .buttons {\n  display: contents; }\n\n:host .row-button {\n  display: flex;\n  padding: 0.2em !important; }\n\n:host .quantity {\n  font-weight: bold; }\n\n:host .quantity-non-serialized {\n  font-weight: bold;\n  float: right; }\n\n:host .custom-panel {\n  width: 100%;\n  overflow-x: auto; }\n\n:host .custom-card-row {\n  flex-wrap: initial !important; }\n\n:host .card-row {\n  padding-bottom: 1em; }\n\n:host .serial-class {\n  overflow-y: auto;\n  max-height: 20em; }\n\n:host .inventory-title {\n  padding-left: 0.5em;\n  font-style: italic;\n  font-size: large; }\n\n:host .select-button-custom {\n  display: block !important; }\n\n:host .description {\n  font-style: italic;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 15em; }\n\n:host .btn-group {\n  margin-right: -2em !important; }\n\n::ng-deep .action-list {\n  justify-content: flex-end; }\n\n::ng-deep .action-list .aw-btn {\n    margin-left: 8px; }\n\n::ng-deep .action-list .aw-btn:first-of-type {\n      margin-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRkLWVkaXQtaW52ZW50b3J5L0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9tb2RpZmllcnMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRkLWVkaXQtaW52ZW50b3J5L0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcYWRkLWVkaXQtaW52ZW50b3J5XFxhZGQtZWRpdC1pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FkZC1lZGl0LWludmVudG9yeS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsaUNBQWlDLEVBQUE7O0FBR25DO0VBQ0Usd0JBQXdCO0VBQ3hCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHlDQUFpQztFQUFqQyxzQ0FBaUM7RUFBakMsaUNBQWlDLEVBQUE7O0FBR25DO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0Usb0NBQTRCO0tBQTVCLGlDQUE0QjtNQUE1QixnQ0FBNEI7VUFBNUIsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVyxFQUFBOztBQUtiO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0Usa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0Usa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0Usb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0Usc0NBQXNDLEVBQUE7O0FDekh4QztFQUVJLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFSbkI7SUFXTSx5QkNNZ0I7SURMaEIsa0JBQWtCLEVBQUE7O0FBWnhCO0lBZ0JNLHlCQ0VVO0lERFYsa0JBQWtCLEVBQUE7O0FBakJ4QjtJQXFCTSx5QkNEYztJREVkLGtCQUFrQixFQUFBOztBQXRCeEI7SUEwQk0seUJDSFMsRUFBQTs7QUR2QmY7RUErQkksbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsNkJBQTZCLEVBQUE7O0FBbENqQztFQXNDSSxhQUFhLEVBQUE7O0FBdENqQjtFQTBDSSxhQUFhLEVBQUE7O0FBMUNqQjtFQThDSSw2QkFBNkI7RUFDN0IsMENBQTBDLEVBQUE7O0FBL0M5QztFQW1ESSwwQkFBMEIsRUFBQTs7QUFuRDlCO0VBdURJLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBeERuQjtFQTRESSxZQUFZLEVBQUE7O0FBNURoQjtFQWdFSSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFqRXBCO0VBcUVJLHdCQUF3QixFQUFBOztBQXJFNUI7RUF5RUksY0FBYyxFQUFBOztBQXpFbEI7RUE2RUksa0JBQWtCLEVBQUE7O0FBN0V0QjtFQWlGSSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBbEZ2QjtFQXNGSSxzQkFBc0IsRUFBQTs7QUF0RjFCO0VBMEZJLDRCQUE0QixFQUFBOztBQTFGaEM7RUE4RkksMkNBQWlEO0VBQ2pELHVCQUF1QixFQUFBOztBQS9GM0I7RUFtR0ksMkNBQStDO0VBQy9DLHVCQUF1QixFQUFBOztBQXBHM0I7RUF3R0ksMkNBQStDO0VBQy9DLHVCQUF1QixFQUFBOztBQXpHM0I7RUE2R0ksMkNBQWlEO0VBQ2pELHlCQUF5QixFQUFBOztBQTlHN0I7RUFrSEksMkNBQStDO0VBQy9DLHlCQUF5QixFQUFBOztBQW5IN0I7RUF1SEksMkNBQStDO0VBQy9DLHlCQUF5QixFQUFBOztBQXhIN0I7RUE0SEksMEJBQTBCLEVBQUE7O0FBNUg5QjtFQWdJSSxXQUFXLEVBQUE7O0FBaElmO0VBb0lJLFlBQVksRUFBQTs7QUFwSWhCO0VBd0lJLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBekluQjtFQTZJSSxlQUFlLEVBQUE7O0FBN0luQjtFQWlKSSxzQ0FBb0Q7RUFDcEQsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUIsRUFBQTs7QUFsSnZCO0VBc0pJLGlCQUFpQixFQUFBOztBQXRKckI7RUEwSkksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBNUpoQjtFQWdLSSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWUsRUFBQTs7QUFsS25CO0VBc0tJLGFBQWE7RUFDYixxQkFBcUIsRUFBQTs7QUF2S3pCO0VBMktJLGlCQUFpQixFQUFBOztBQTNLckI7RUErS0ksYUFBYTtFQUNiLHlCQUF5QixFQUFBOztBQWhMN0I7RUFvTEksaUJBQWlCLEVBQUE7O0FBcExyQjtFQXdMSSxpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQXpMaEI7RUE2TEksV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQTlMcEI7RUFrTUksNkJBQTZCLEVBQUE7O0FBbE1qQztFQXNNSSxtQkFBbUIsRUFBQTs7QUF0TXZCO0VBME1JLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUEzTXBCO0VBK01JLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBak5wQjtFQXFOSSx5QkFBeUIsRUFBQTs7QUFyTjdCO0VBeU5JLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBN05uQjtFQWlPSSw2QkFBNkIsRUFBQTs7QUFJakM7RUFDRSx5QkFBeUIsRUFBQTs7QUFEM0I7SUFJSSxnQkNqTWMsRUFBQTs7QUQ2TGxCO01BT00sY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRkLWVkaXQtaW52ZW50b3J5L2FkZC1lZGl0LWludmVudG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LS1mbGV4LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLWZsZXgtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzcGxheS0tbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LS0xMDAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1pbi13aWR0aC0tZml0LWNvbnRlbnQge1xyXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvc2l0aW9uLS1yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwteS0tbm9uZSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LS11bnNlbGVjdGFibGUge1xyXG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aXNpYmlsaXR5LS1oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtLTEwIHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTIwIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTMwIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTQwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTUwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTYwIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTcwIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTgwIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTkwIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5mbGV4LS0xIHtcclxuICBmbGV4OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0yIHtcclxuICBmbGV4OiAyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0zIHtcclxuICBmbGV4OiAzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS00IHtcclxuICBmbGV4OiA0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS01IHtcclxuICBmbGV4OiA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS1hdXRvIHtcclxuICBmbGV4OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tZW5kIHtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1zdGFydCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWVuZCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktc3RhcnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwibW9kaWZpZXJzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLmFsZXJ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgd2lkdGg6IDhlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjJlbTtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tbm9uZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5MTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jYXJkLXNlcmlhbGl6ZS1pdGVtIHtcclxuICAgIHdpZHRoOiAxNC41ZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1ub3Qtc2VyaWFsaXplLWl0ZW0ge1xyXG4gICAgd2lkdGg6IDE2LjVlbTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tY2VsbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW0gIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAuMmVtIDAuMmVtICM4ODg4ODggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAudWktY2FyZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5saW5rLWNsYXNzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWNvbHVtbiB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tcm93IHtcclxuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5mb3JtIHtcclxuICAgIHBhZGRpbmc6IDAuMmVtO1xyXG4gIH1cclxuXHJcbiAgLm1hcmdpbi1jbGFzcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zZW07XHJcbiAgfVxyXG5cclxuICAubWFyZ2luLXRvcC1jbGFzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1ncmlkIHtcclxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyLWNsYXNzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLmNhcmQtY2xhc3MgLmFsZXJ0LS1vayB7XHJcbiAgICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgJGdyZWVuLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMGVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLmNhcmQtY2xhc3MgLmFsZXJ0LS1ub2sge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDAuM2VtIHNvbGlkICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuY2FyZC1jbGFzcyAuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDAuM2VtIHNvbGlkICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuY2FyZC1jbGFzcy1ub3Qtc2VyaWFsaXplIC5hbGVydC0tb2sge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDAuM2VtIHNvbGlkICRncmVlbi1saWdodDEgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAuNWVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLmNhcmQtY2xhc3Mtbm90LXNlcmlhbGl6ZSAuYWxlcnQtLW5vayB7XHJcbiAgICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgJHJlZC1saWdodDEgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAuNWVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLmNhcmQtY2xhc3Mtbm90LXNlcmlhbGl6ZSAuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDAuM2VtIHNvbGlkICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwLjVlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1kaXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAud2tzLWZsb2F0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1jbGFzcyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuYWRkLWludmVudG9yeSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgfVxyXG5cclxuICAubGluay1jbGFzcyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY3VycmVudCB7XHJcbiAgICBib3JkZXI6IDAuMmVtIHNvbGlkICRzZWNvbmRhcnktdGV4dC1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICB9XHJcblxyXG4gIC5hbGlnbi1jdXN0b20ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gIH1cclxuXHJcbiAgLmZsb2F0LXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1jb250cm9sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICB9XHJcblxyXG4gIC5yb3ctYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnF1YW50aXR5IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLnF1YW50aXR5LW5vbi1zZXJpYWxpemVkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1wYW5lbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWNhcmQtcm93IHtcclxuICAgIGZsZXgtd3JhcDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtcm93IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgfVxyXG5cclxuICAuc2VyaWFsLWNsYXNzIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAyMGVtO1xyXG4gIH1cclxuXHJcbiAgLmludmVudG9yeS10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcblxyXG4gIC5zZWxlY3QtYnV0dG9uLWN1c3RvbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtYXgtd2lkdGg6IDE1ZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLWdyb3VwIHtcclxuICAgIG1hcmdpbi1yaWdodDogLTJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5hY3Rpb24tbGlzdCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgLmF3LWJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/add-edit-inventory/add-edit-inventory.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/add-edit-inventory/add-edit-inventory.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddEditInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditInventoryComponent", function() { return AddEditInventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _constants_component_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/control-config-constants */ "./src/app/shared/constants/control-config-constants.ts");
/* harmony import */ var _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _services_confirmation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _types_form_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _utils_file_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _utils_image_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/image-utils */ "./src/app/shared/utils/image-utils.ts");
/* harmony import */ var _utils_select_item_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _table_table_data_source__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _add_edit_inventory_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./add-edit-inventory.service */ "./src/app/shared/components/add-edit-inventory/add-edit-inventory.service.ts");
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

























var AddEditInventoryComponent = /** @class */ (function (_super) {
    __extends(AddEditInventoryComponent, _super);
    function AddEditInventoryComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, translateService, dateService, propertiesService, domSanitizer, addEditInventoryService, confirmationService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.dateService = dateService;
        _this.propertiesService = propertiesService;
        _this.domSanitizer = domSanitizer;
        _this.addEditInventoryService = addEditInventoryService;
        _this.confirmationService = confirmationService;
        _this.showInventories = true;
        _this.isSentenceMatch = true;
        _this.isDecisionMatch = true;
        _this.selectedFindingsIndex = -1;
        _this.nok = _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__["ControlConfigConstants"].ICON_RED;
        _this.ok = _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__["ControlConfigConstants"].ICON_GREEN;
        _this.warning = _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__["ControlConfigConstants"].ICON_YELLOW_TRIANGLE_CODE;
        _this.sumRealQuantity = 0;
        _this.maxVisibleInventories = 4;
        return _this;
    }
    AddEditInventoryComponent_1 = AddEditInventoryComponent;
    AddEditInventoryComponent.prototype.getComponentName = function () {
        return _constants_component_constants__WEBPACK_IMPORTED_MODULE_12__["ComponentConstants"].MAI_ITEM_INVENTORY;
    };
    AddEditInventoryComponent.prototype.ngOnInit = function () {
        this.bsdeProjectDTO = {};
        this.pageComponentData = !!this.componentData.objectId
            ? this.serializationService.deserialize(this.componentData.objectId)
            : undefined;
        if (!!this.pageComponentData) {
            // Trim down subtitle to 25 characters
            var MAX_LENGTH = 25;
            this.pageComponentData.subtittle =
                !!this.pageComponentData.subtittle && this.pageComponentData.subtittle.length > MAX_LENGTH
                    ? this.pageComponentData.subtittle.substring(0, MAX_LENGTH) + "..."
                    : !this.pageComponentData.subtittle
                        ? undefined
                        : this.pageComponentData.subtittle;
            this.displayComponentContext("N\u00B0" + this.pageComponentData.subtittle, this.isCreateOpenMode);
        }
        this.cardList = [];
        this.cloneCardList = [];
        this.sentenceList = [];
        this.decisionList = [];
        this.findingsList = [];
        this.inventoryPNList = [];
        this.clonePnList = [];
        this.cloneTargetPNList = [];
        this.inventoryWOList = [];
        this.tnList = [];
        this.inventorySentenceList = [];
        this.inventoryDecisionList = [];
        this.statusList = [];
        this.globalSentenceList = [];
        this.globalDecisionList = [];
        this.addPNList = [];
        this.searchCriteria = {};
        this.worksSearchCriteria = {};
        this.statusList.push({ label: 'OK', value: AddEditInventoryComponent_1.OK }, { label: 'WARNING', value: AddEditInventoryComponent_1.WARNING }, { label: 'NOK', value: AddEditInventoryComponent_1.NOK });
        this.toggleList = [
            {
                label: "" + this.translateService.instant(this.getTranslateKey('applied')),
                value: AddEditInventoryComponent_1.APPLIED
            },
            {
                label: "" + this.translateService.instant(this.getTranslateKey('notApplied')),
                value: AddEditInventoryComponent_1.NOT_APPLIED
            }
        ];
        this.worksSearchCriteria.selectedToggle = [
            AddEditInventoryComponent_1.APPLIED,
            AddEditInventoryComponent_1.NOT_APPLIED
        ];
        this.unknown = "" + this.translateService.instant(this.getTranslateKey('unknown'));
        this.documentsAdded = [];
        this.documents = [];
        this.documentsUpdated = [];
        this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Read;
        this.resetData();
        this.init();
        this.loadDocumentTypes();
        this.initDocumentTableDataSource();
    };
    AddEditInventoryComponent.prototype.resetData = function () {
        this.snCount = [];
        this.selectedWork = [];
        this.selectedFinding = [];
        this.selectedInventoryList = [];
        this.tnList = [];
        this.items = [];
        this.newInventory = {
            index: 0,
            iwbFindingsToDisplay: [],
            iwbTask: []
        };
        this.quantityValue = undefined;
        this.selectedPN = undefined;
        this.otherPN = undefined;
        this.selectedTargetPN = undefined;
        this.selectedSentence = undefined;
        this.selectedDecision = undefined;
        this.resetDecisionList();
    };
    AddEditInventoryComponent.prototype.init = function () {
        this.renderTableCols();
        // Setting Page component Data
        if (!!this.pageComponentData && !!this.pageComponentData.bireItem) {
            this.inventoryList = !!this.pageComponentData.inventoryList ? this.pageComponentData.inventoryList : [];
            this.isFromInspection = this.pageComponentData.isFromInspection;
            this.isItemSerialized = !!this.pageComponentData.bireItem
                ? this.pageComponentData.bireItem.serializedPart
                : false;
            this.isAddInventory = this.pageComponentData.isAddInventory;
            this.bireItemDTO = this.pageComponentData.bireItem;
            this.bsdeProjectDTO = this.pageComponentData.data;
            this.selectedMroCenter = this.bsdeProjectDTO.repairCenterCode || undefined;
            this.loadInventoriesFlag = true;
            this.renderList();
            this.displayComponentContext("N\u00B0" + this.bsdeProjectDTO.projectNumber, this.isCreateOpenMode);
        }
        this.loadTaskTypes();
    };
    AddEditInventoryComponent.prototype.loadTaskTypes = function () {
        var _this = this;
        this.propertiesService.getValue(_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_14__["GenericPropertyConstants"].TASK_TYPE_MAP).subscribe(function (results) {
            _this.taskList = results || [];
            _this.selectedTask = _this.taskList.length > 0 ? _this.taskList[0].value : undefined;
        });
    };
    /****************************************************
     * DOCUMENT TABLE
     ****************************************************/
    AddEditInventoryComponent.prototype.initDocumentTableDataSource = function () {
        this.documentTableDataSource = new _table_table_data_source__WEBPACK_IMPORTED_MODULE_23__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'docName',
                    translateKey: this.getTranslateKey('docName')
                },
                {
                    field: 'docPublicationDate',
                    translateKey: this.getTranslateKey('docPublicationDate')
                },
                {
                    field: 'docEndOfValidityDate',
                    translateKey: this.getTranslateKey('docEndOfValidityDate')
                },
                {
                    field: 'docCategory',
                    translateKey: this.getTranslateKey('docCategory')
                },
                {
                    field: 'docDescription',
                    translateKey: this.getTranslateKey('docDescription')
                }
            ],
            data: []
        });
    };
    /***********************************************
     * Load PN List
     ***********************************************/
    AddEditInventoryComponent.prototype.loadPNList = function () {
        var _this = this;
        this.clonePnList = [];
        this.cloneTargetPNList = [];
        this.reworkPNs = [];
        this.addPNList = [];
        var input = this.bireItemDTO;
        this.addEditInventoryService.getPartNumberStructure(input).subscribe(function (res) {
            if (!!res && res.length > 0) {
                res.forEach(function (dto) {
                    _this.addPNList.push(dto.pn);
                });
                _this.addPNList.push(_this.unknown);
                // Setting rework PN
                _this.addPNList.forEach(function (pn) {
                    if (pn !== _this.unknown) {
                        _this.reworkPNs.push({
                            label: pn,
                            value: pn
                        });
                    }
                });
                _this.loadNewPNList();
                _this.clonePnList = __spread(_this.addPNList);
                // Rework PN
                _this.cloneReworkPNList = __spread(_this.reworkPNs);
                _this.reworkPNList = __spread(_this.cloneReworkPNList);
                _this.loadSentenceDecisionSpecificToItem();
            }
        });
    };
    AddEditInventoryComponent.prototype.loadFindingsList = function () {
        var _this = this;
        this.findingsList.forEach(function (res, index) { return (res.index = index); });
        this.findingsList.forEach(function (res) {
            if (!!res && !!res.bireDocumentDTOList && res.bireDocumentDTOList.length > 0) {
                res.additionalData = _this.loadItemStructureNodeIllustrationList(res);
            }
        });
    };
    /*********************************
     * Load Findings list
     *********************************/
    AddEditInventoryComponent.prototype.fetchFidingsList = function () {
        var _this = this;
        var input = {
            projectNumber: this.bsdeProjectDTO.projectNumber,
            bireItemKey: this.getKey(this.bireItemDTO)
        };
        this.addEditInventoryService.loadFindingsList(input).subscribe(function (res) {
            _this.findingsList = res;
            _this.updateFindingsToInventories();
        });
    };
    /**********************************
     * Load Image
     **********************************/
    AddEditInventoryComponent.prototype.loadItemStructureNodeIllustrationList = function (result) {
        if (!!result.bireDocumentDTOList && result.bireDocumentDTOList.length > 0) {
            var doc = result.bireDocumentDTOList[0];
            return this.domSanitizer.bypassSecurityTrustResourceUrl("" + _utils_image_utils__WEBPACK_IMPORTED_MODULE_20__["ImageUtils"].getBase64Prefix(doc.docType) + doc.docFile);
        }
    };
    /********************************************
     * Filter PN List
     *******************************************/
    AddEditInventoryComponent.prototype.searchPN = function (ev) {
        var dataArr = [];
        if (!!ev && !!ev.query && !!this.clonePnList) {
            dataArr = this.clonePnList.filter(function (pn) { return pn.toLowerCase().startsWith(ev.query.toLowerCase()); });
        }
        else {
            dataArr = this.clonePnList || [];
        }
        this.pnList = __spread(dataArr);
    };
    /********************************************
     * Filter Target PN List
     *******************************************/
    AddEditInventoryComponent.prototype.searchTargetPN = function (ev) {
        var dataArr = [];
        if (!!ev && !!ev.query && !!this.cloneTargetPNList) {
            dataArr = this.cloneTargetPNList.filter(function (pn) { return pn.toLowerCase().startsWith(ev.query.toLowerCase()); });
        }
        else {
            dataArr = this.cloneTargetPNList || [];
        }
        this.targetPNList = __spread(dataArr);
    };
    /**********************************
     * RENDER SCREEN ELEMENTS
     **********************************/
    AddEditInventoryComponent.prototype.renderTableCols = function () {
        this.findingCols = [
            { field: 'damage', alignment: 'left' },
            { field: 'localisation', alignment: 'left' },
            { field: 'findingComment', alignment: 'left' },
            { field: 'illustration', alignment: 'center' }
        ];
        this.worksCols = [
            { field: 'task', alignment: 'left', display: 'table-cell' },
            { field: 'code', alignment: 'left', display: 'none' },
            { field: 'type', alignment: 'left', display: 'none' },
            { field: 'designation', alignment: 'left', display: 'none' },
            { field: 'workorder', alignment: 'left', display: 'table-cell' },
            { field: 'applied', alignment: 'center', display: 'table-cell' }
        ];
    };
    /**********************************
     * INIT DROPDOWN
     **********************************/
    AddEditInventoryComponent.prototype.renderList = function () {
        var _this = this;
        this.sentenceList = [];
        this.decisionList = [];
        // Load Sentence and Decision
        this.fetchSentence();
        this.addEditInventoryService.findMROCenter().subscribe(function (res) {
            _this.mroCenterList = res;
        });
    };
    /***********************************
     * Load Sentence
     ***********************************/
    AddEditInventoryComponent.prototype.fetchSentence = function () {
        var _this = this;
        this.addEditInventoryService
            .fetchSentenceList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.fetchDecision();
        }))
            .subscribe(function (res) {
            _this.globalSentenceList = res;
        });
    };
    /***********************************
     * Load Decision
     ***********************************/
    AddEditInventoryComponent.prototype.fetchDecision = function () {
        var _this = this;
        this.addEditInventoryService
            .fetchDecisionList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.loadPNList();
            _this.initVersionsData();
            _this.fetchFidingsList();
        }))
            .subscribe(function (res) {
            _this.globalDecisionList = res;
        });
    };
    /***********************************
     * Load Sentence Decision
     ***********************************/
    AddEditInventoryComponent.prototype.loadSentenceDecisionSpecificToItem = function () {
        var _this = this;
        this.sentenceList = [];
        this.decisionList = [];
        var input = {
            projectNumber: this.bsdeProjectDTO.projectNumber,
            bireItemKey: this.getKey(this.bireItemDTO)
        };
        this.addEditInventoryService
            .getSentenceAndDecisionList(input)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.loadInventories();
            _this.getInventoryIcon();
        }))
            .subscribe(function (res) {
            _this.sentenceDecisionDTO = res;
            if (!!res.sentenceList && res.sentenceList.length > 0) {
                res.sentenceList.forEach(function (sentence) {
                    _this.sentenceList.push({
                        value: sentence,
                        label: _this.getSentenceLabel(sentence) || ''
                    });
                });
            }
            if (!!res.decisionList && res.decisionList.length > 0) {
                res.decisionList.forEach(function (decision) {
                    _this.decisionList.push({
                        value: decision,
                        label: _this.getDecisionLabel(decision) || ''
                    });
                });
            }
        });
    };
    // Get SN
    AddEditInventoryComponent.prototype.getSN = function () {
        if (this.isItemSerialized) {
            if (this.isAddInventory || this.addNewInventory) {
                if (!!this.snCount && this.snCount.length > 0) {
                    return this.snCount[0].value;
                }
            }
            else if (this.selectedInventoryList.length === 1) {
                return this.selectedInventoryList[0].sn;
            }
        }
        return undefined;
    };
    // Get Quantity
    AddEditInventoryComponent.prototype.getQuantity = function () {
        return !!this.quantityValue ? (this.isItemSerialized ? "" + this.quantityValue : "" + this.sumRealQuantity) : '1';
    };
    /***********************************
     * Load Inventories
     ***********************************/
    AddEditInventoryComponent.prototype.loadInventories = function () {
        var _this = this;
        // Render Inventories List
        this.cardList = [];
        if (this.inventoryList.length > 0) {
            this.inventoryList.forEach(function (inventory, index) {
                inventory.index = index;
                inventory.sentenceList = !!inventory.sentenceValue ? [inventory.sentenceValue] : undefined; // TODO: add sentence List
                inventory.decisionList = !!inventory.decisionValue ? [inventory.decisionValue] : undefined; // TODO: add decision List
                _this.cardList.push(inventory);
                _this.selectInventory(inventory);
            });
            this.loadFavoriteCombination();
            this.cloneCardList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.cardList);
        }
        else {
            this.loadInventoriesFlag = false;
        }
        // Collapsing if only 1 inventory
        if (this.cardList.length === 1) {
            this.toggleInventoryDisplay();
        }
        if (this.selectedInventoryList.length > 0) {
            this.modifyInventoryList();
        }
        if (this.isAddInventory) {
            this.loadFavoriteCombination();
        }
        this.filtersVisible = false;
        this.updateFilterCriteria();
    };
    /**************************************
     * Update filter
     **************************************/
    AddEditInventoryComponent.prototype.updateFilterCriteria = function () {
        var _this = this;
        this.overlayContentReady = false;
        this.searchCriteria = {};
        this.inventoryPNList = [];
        this.inventoryDecisionList = [];
        this.inventorySentenceList = [];
        this.inventoryWOList = [];
        this.cardList.forEach(function (inventory) {
            var isPNExist = _this.inventoryPNList.find(function (pn) { return pn.label === inventory.pn; });
            if (!isPNExist && !!inventory.pn && _this.pnList.includes(inventory.pn)) {
                _this.inventoryPNList.push({
                    label: inventory.pn,
                    value: inventory.pn
                });
            }
            if (!!inventory.decisionValue) {
                var isDecisionExist = _this.inventoryDecisionList.find(function (dec) { return dec.value === inventory.decisionValue; });
                if (!isDecisionExist) {
                    _this.inventoryDecisionList.push({
                        label: _this.getDecisionLabel(inventory.decisionValue) || '',
                        value: inventory.decisionValue
                    });
                }
            }
            if (!!inventory.woCode) {
                var isWOExist = _this.inventoryWOList.find(function (dec) { return dec.value === inventory.woCode; });
                if (!isWOExist) {
                    _this.inventoryWOList.push({
                        label: inventory.woCode,
                        value: inventory.woCode
                    });
                }
            }
            if (!!inventory.sentenceValue) {
                var isSentenceExist = _this.inventorySentenceList.find(function (dec) { return dec.value === inventory.sentenceValue; });
                if (!isSentenceExist) {
                    _this.inventorySentenceList.push({
                        label: _this.getSentenceLabel(inventory.sentenceValue) || '',
                        value: inventory.sentenceValue
                    });
                }
            }
            _this.overlayContentReady = true;
        });
    };
    AddEditInventoryComponent.prototype.loadFilterPanel = function () {
        var _this = this;
        this.inventorySentenceList = [];
        this.inventoryPNList = [];
        this.inventoryDecisionList = [];
        this.inventoryWOList = [];
        if (this.inventoryList.length > 0) {
            this.inventoryList.forEach(function (inventory) {
                var isPNExist = _this.inventoryPNList.filter(function (pn) { return pn.label === inventory.pn; });
                if (isPNExist.length === 0 && !!inventory.pn) {
                    _this.inventoryPNList.push({
                        label: inventory.pn,
                        value: inventory.pn
                    });
                }
                if (!!inventory.decisionValue) {
                    var isDecisionExist = _this.inventoryDecisionList.filter(function (dec) { return dec.value === inventory.decisionValue; });
                    if (isDecisionExist.length === 0) {
                        _this.inventoryDecisionList.push({
                            label: _this.getDecisionLabel(inventory.decisionValue) || '',
                            value: inventory.decisionValue
                        });
                    }
                }
                if (!!inventory.woCode) {
                    var isWOExist = _this.inventoryWOList.filter(function (dec) { return dec.value === inventory.woCode; });
                    if (isWOExist.length === 0) {
                        _this.inventoryWOList.push({
                            label: inventory.woCode,
                            value: inventory.woCode
                        });
                    }
                }
                if (!!inventory.sentenceValue) {
                    var isSentenceExist = _this.inventorySentenceList.filter(function (dec) { return dec.value === inventory.sentenceValue; });
                    if (isSentenceExist.length === 0) {
                        _this.inventorySentenceList.push({
                            label: _this.getSentenceLabel(inventory.sentenceValue) || '',
                            value: inventory.sentenceValue
                        });
                    }
                }
                _this.overlayContentReady = true;
            });
            this.cloneCardList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.cardList);
        }
    };
    /*********************************************
     * Fetch Sentence List
     *********************************************/
    AddEditInventoryComponent.prototype.getSentenceLabel = function (val) {
        var dto = this.globalSentenceList.filter(function (res) { return res.value === val; });
        return !!dto && dto.length > 0 ? dto[0].label : undefined;
    };
    /*********************************************
     * Fetch Decision List
     *********************************************/
    AddEditInventoryComponent.prototype.getDecisionLabel = function (val) {
        var dto = this.globalDecisionList.filter(function (res) { return res.value === val; });
        return !!dto && dto.length > 0 ? dto[0].label : undefined;
    };
    AddEditInventoryComponent.prototype.initVersionsData = function () {
        var _this = this;
        var bireItemDTOId = this.returnBireItemDTOId();
        this.itemVersions = [];
        this.addEditInventoryService.findBireItemVersions(bireItemDTOId).subscribe(function (results) {
            if (!!results) {
                results.forEach(function (data) {
                    _this.itemVersions.push(data.value);
                });
                _this.initDamagesAndLocationData();
            }
        });
    };
    /**
     * Return Bire Item DTO ID
     */
    AddEditInventoryComponent.prototype.returnBireItemDTOId = function () {
        var bireItemDTOId = {
            chapter: '',
            marks: '',
            section: '',
            sheet: '',
            subject: '',
            structureType: ''
        };
        if (!!this.bireItemDTO) {
            bireItemDTOId = {
                familyCode: this.bireItemDTO.familyCode,
                chapter: this.bireItemDTO.chapter,
                section: this.bireItemDTO.section,
                sheet: this.bireItemDTO.sheet,
                marks: this.bireItemDTO.marks,
                subject: this.bireItemDTO.subject,
                structureType: this.bireItemDTO.structureType,
                variantCode: this.bireItemDTO.variantCode
            };
        }
        return bireItemDTOId;
    };
    // Damage table
    AddEditInventoryComponent.prototype.initDamagesAndLocationData = function () {
        var _this = this;
        var damages = [];
        var locations = [];
        this.itemVersions.forEach(function (res) {
            var bireItemVersionDTOId = {
                chapter: _this.bireItemDTO.chapter,
                familyCode: _this.bireItemDTO.familyCode,
                marks: _this.bireItemDTO.marks,
                section: _this.bireItemDTO.section,
                sheet: _this.bireItemDTO.sheet,
                structureType: _this.bireItemDTO.structureType,
                subject: _this.bireItemDTO.subject,
                variantCode: _this.bireItemDTO.variantCode,
                versionNumber: res
            };
            // Damages
            _this.addEditInventoryService
                .findBireDamageItemsByItemVersionItemScreen(bireItemVersionDTOId)
                .subscribe(function (results) {
                results.forEach(function (dto) {
                    if (!!dto && !!dto.bireDamageItemDTO) {
                        var damageCustomDTO = {
                            damageCode: dto.bireDamageItemDTO.damageCode,
                            chapter: dto.bireDamageItemDTO.chapter,
                            familyCode: dto.bireDamageItemDTO.familyCode,
                            marks: dto.bireDamageItemDTO.marks,
                            section: dto.bireDamageItemDTO.section,
                            sheet: dto.bireDamageItemDTO.sheet,
                            structureType: dto.bireDamageItemDTO.structureType,
                            subject: dto.bireDamageItemDTO.subject,
                            variantCode: dto.bireDamageItemDTO.variantCode,
                            damageDescription: dto.description,
                            versionNumber: dto.bireDamageItemDTO.versionNumber
                        };
                        damages.push(damageCustomDTO);
                    }
                });
                _this.addEditInventoryService.damagesList = __spread(damages);
            });
            // Location
            _this.addEditInventoryService
                .findBireLocalisationItemsByItemVersion(bireItemVersionDTOId)
                .subscribe(function (results) {
                results.forEach(function (dto) {
                    locations.push(dto);
                });
                _this.addEditInventoryService.localisationList = __spread(locations);
            });
        });
        // Items
        this.initTasksData();
    };
    /**********************************
     * CHANGE QUANTITY VALUE
     **********************************/
    AddEditInventoryComponent.prototype.onQuantityChange = function () {
        var _this = this;
        if (this.isAddInventory || this.addNewInventory) {
            this.snCount = [];
            if (this.quantityValue !== undefined && Number.isInteger(this.quantityValue)) {
                var count = 0;
                // Add Mode
                if (this.isAddInventory || this.addNewInventory) {
                    count = this.quantityValue;
                }
                // Creating snList of dynamic size depending upon number entered by user
                Array(count)
                    .fill({})
                    .map(function () {
                    _this.snCount.push({
                        value: undefined
                    });
                });
            }
        }
        else if (!this.isItemSerialized && this.selectedInventoryList.length === 1 && !!this.sumRealQuantity) {
            this.selectedInventoryList[0].quantity = "" + this.sumRealQuantity;
        }
    };
    /***********************************************
     * Get color of configuration
     ***********************************************/
    AddEditInventoryComponent.prototype.getStyles = function (controlCode) {
        return controlCode === _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__["ControlConfigConstants"].ICON_GREEN
            ? 'alert--ok'
            : controlCode === _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__["ControlConfigConstants"].ICON_YELLOW
                ? 'alert--warning'
                : controlCode === _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__["ControlConfigConstants"].ICON_RED
                    ? 'alert--nok'
                    : 'none';
    };
    /**************************************************
     * GET CONFIGURATON CONTROL OF SELECTED INVENTORIES
     *************************************************/
    AddEditInventoryComponent.prototype.getConfiguration = function () {
        var warning = 0;
        var ok = 0;
        var nok = 0;
        if (this.selectedInventoryList.length > 0) {
            this.selectedInventoryList.forEach(function (res) {
                if (res.icon === _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__["ControlConfigConstants"].ICON_GREEN) {
                    ok++;
                }
                else if (res.icon === _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__["ControlConfigConstants"].ICON_RED) {
                    nok++;
                }
                else if (res.icon === _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__["ControlConfigConstants"].ICON_YELLOW) {
                    warning++;
                }
            });
        }
        return !!nok
            ? _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__["ControlConfigConstants"].ICON_RED
            : !!warning
                ? _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__["ControlConfigConstants"].ICON_YELLOW
                : _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__["ControlConfigConstants"].ICON_GREEN;
    };
    /****************************************
     * Inventories Action
     ****************************************/
    AddEditInventoryComponent.prototype.addInventory = function () {
        this.resetTaskDamagesAndDocuments();
        this.addNewInventory = true;
        this.unselectAllInventories();
        this.resetData();
        this.loadFavoriteCombination();
        this.quantityValue = 1;
    };
    AddEditInventoryComponent.prototype.loadNewPNList = function () {
        this.clonePnList = [];
        this.cloneTargetPNList = [];
        this.clonePnList = __spread(this.addPNList);
        this.cloneTargetPNList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.clonePnList);
        this.pnList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.clonePnList);
        this.targetPNList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.clonePnList);
    };
    AddEditInventoryComponent.prototype.loadFavoriteCombination = function () {
        // Set favorite combination, if exist
        if ((this.isAddInventory || this.addNewInventory) &&
            !!this.sentenceDecisionDTO &&
            !!this.sentenceDecisionDTO.favoriteCombination) {
            this.selectedSentence = this.sentenceDecisionDTO.favoriteCombination.sentence;
            this.modifyDecisionList();
            this.oldSentence = this.selectedSentence;
            this.selectedDecision = this.sentenceDecisionDTO.favoriteCombination.decision;
            this.oldDecision = this.selectedDecision;
            this.selectedPN = this.sentenceDecisionDTO.favoriteCombination.pn;
        }
    };
    AddEditInventoryComponent.prototype.toggleInventoryDisplay = function () {
        this.showInventories = this.showInventories ? false : true;
    };
    AddEditInventoryComponent.prototype.expandAll = function () {
        this.expandInventoryList = !this.expandInventoryList;
    };
    AddEditInventoryComponent.prototype.selectAllInventories = function () {
        this.otherPN = undefined;
        // Removing favorites, if any
        this.selectedSentence = undefined;
        this.selectedDecision = undefined;
        this.selectedPN = undefined;
        this.modifyInventories(true);
        this.sumRealQuantity = this.selectedInventoryList
            .map(function (obj) { return (!!obj.quantity ? Number(obj.quantity) : 0); })
            .reduce(function (sum, quantity) { return sum + quantity; }, 0);
        this.loadFindingsWorksAndDocuments();
    };
    AddEditInventoryComponent.prototype.unselectAllInventories = function () {
        this.modifyInventories(false);
        this.sumRealQuantity = 0;
        this.selectedSentence = undefined;
        this.selectedDecision = undefined;
        this.otherPN = undefined;
        this.addNewInventory = true;
        this.resetData();
        this.loadFavoriteCombination();
        this.loadFindingsWorksAndDocuments();
    };
    AddEditInventoryComponent.prototype.modifyInventories = function (selection) {
        this.otherPN = undefined;
        this.cardList.forEach(function (res) {
            res.isSelected = selection;
        });
        this.updateSelectionAndQuantity();
        this.modifyInventoryList();
    };
    AddEditInventoryComponent.prototype.updateSelectionAndQuantity = function () {
        this.updateInventoriesSelection();
        this.sumRealQuantity = this.selectedInventoryList
            .map(function (obj) { return (!!obj.quantity ? Number(obj.quantity) : 0); })
            .reduce(function (sum, quantity) { return sum + quantity; }, 0);
    };
    AddEditInventoryComponent.prototype.updateInventoriesSelection = function () {
        this.selectedInventoryList = this.cardList.filter(function (res) { return res.isSelected; });
    };
    /****************************************
     * On selection of inventories
     ****************************************/
    AddEditInventoryComponent.prototype.selectInventory = function (inventory) {
        this.otherPN = undefined;
        this.addNewInventory = false;
        inventory.isSelected = inventory.isSelected ? false : true;
        this.selectedInventoryList = [];
        this.selectedInventoryList = this.cardList.filter(function (res) { return res.isSelected; });
        this.sumRealQuantity = this.selectedInventoryList
            .map(function (obj) { return (!!obj.quantity ? Number(obj.quantity) : 0); })
            .reduce(function (sum, quantity) { return sum + quantity; }, 0);
        this.quantityValue = this.selectedInventoryList.length;
        this.selectedSentence = undefined;
        this.selectedDecision = undefined;
        if (this.selectedInventoryList.length > 0) {
            this.modifyInventoryList();
        }
        else {
            this.resetData();
            this.addNewInventory = true;
            this.loadFavoriteCombination();
        }
        this.loadFindingsWorksAndDocuments();
    };
    AddEditInventoryComponent.prototype.modifyInventoryList = function () {
        var _this = this;
        var sentenceArr = [];
        var diffPNArr = [];
        var otherPNArr = [];
        this.snList = [];
        this.tnList = [];
        this.addNewInventory = false;
        var decisionArr = [];
        var trackNumberArr = [];
        this.selectedInventoryList.forEach(function (res) {
            var snIndex = _this.snList.findIndex(function (sn) { return !!res.sn && res.sn === sn.value; });
            var tnIndex = _this.tnList.findIndex(function (tn) { return !!res.trackingNumber && res.trackingNumber === tn.value; });
            if (!!res.pn) {
                if (_this.clonePnList.indexOf(res.pn) !== -1 && diffPNArr.indexOf(res.pn) === -1) {
                    diffPNArr.push(res.pn);
                }
                else if (_this.clonePnList.indexOf(res.pn) === -1 && otherPNArr.indexOf(res.pn) === -1) {
                    otherPNArr.push(res.pn);
                }
            }
            if (snIndex === -1 && !!res.sn) {
                _this.snList.push({
                    value: res.sn,
                    label: res.sn
                });
            }
            if (tnIndex === -1 && !!res.trackingNumber) {
                _this.tnList.push({
                    value: res.trackingNumber,
                    label: res.trackingNumber
                });
                trackNumberArr.push([res.trackingNumber]);
            }
            if (!!res.sentenceValue) {
                sentenceArr.push([res.sentenceValue]);
            }
            if (!!res.decisionValue) {
                decisionArr.push([res.decisionValue]);
            }
        });
        this.isPNCommon = diffPNArr.length > 1 && this.selectedInventoryList.length > 1 ? this.setCommonPN() : false;
        this.isOtherPNDifferent =
            otherPNArr.length > 1 && this.selectedInventoryList.length > 1 ? this.setDiffOtherPN() : false;
        if (this.addNewInventory || this.newInventory) {
            this.selectedTargetPN = undefined;
        }
        else {
            this.isTargetPNCommon =
                this.selectedInventoryList.length > 1 && this.cloneTargetPNList.length === this.selectedInventoryList.length
                    ? this.setCommonTargetPN()
                    : false;
        }
        // Fill Sentence and Decision List of intersection
        if (sentenceArr.length > 0 && sentenceArr.length !== this.selectedInventoryList.length) {
            this.selectedSentence = undefined;
            this.oldSentence = undefined;
            this.isIntersectionSentenceDiff = true;
            this.resetDecisionList();
        }
        else if (!!sentenceArr && sentenceArr.length > 0) {
            var commonSent = sentenceArr.reduce(function (a, b) { return a.filter(function (c) { return b.includes(c); }); });
            if (!!commonSent && commonSent.length > 0) {
                this.selectedSentence = commonSent[0];
                this.oldSentence = this.selectedSentence;
                this.modifyDecisionList();
            }
            else {
                this.selectedSentence = undefined;
                this.oldSentence = undefined;
                this.isIntersectionSentenceDiff = true;
                this.resetDecisionList();
            }
        }
        else {
            this.isIntersectionSentenceDiff = false;
        }
        if (decisionArr.length > 0 && decisionArr.length !== this.selectedInventoryList.length) {
            this.selectedDecision = undefined;
            this.oldSentence = undefined;
            this.isIntersectionDecisionDiff = true;
        }
        else if (!!decisionArr && decisionArr.length > 0) {
            var commonDec = decisionArr.reduce(function (a, b) { return a.filter(function (c) { return b.includes(c); }); });
            if (!!commonDec && commonDec.length > 0) {
                this.selectedDecision = commonDec[0];
                this.oldDecision = this.selectedDecision;
            }
            else {
                this.selectedDecision = undefined;
                this.oldSentence = undefined;
                this.isIntersectionDecisionDiff = true;
            }
        }
        else {
            this.isIntersectionDecisionDiff = false;
        }
        if (!!trackNumberArr && trackNumberArr.length > 0) {
            var commonTN = trackNumberArr.reduce(function (a, b) { return a.filter(function (c) { return b.includes(c); }); });
            this.isTNCommon = commonTN.length === 0;
        }
        if (!this.addNewInventory || !this.newInventory) {
            if (!this.isOtherPNDifferent) {
                this.otherPN = diffPNArr.length === 0 && otherPNArr.length > 0 ? otherPNArr[0] : undefined;
            }
            if (!this.isPNCommon) {
                this.selectedPN =
                    otherPNArr.length === 0 && this.clonePnList.length > 0 && diffPNArr.length > 0 ? diffPNArr[0] : undefined;
            }
        }
        this.showOtherPN = otherPNArr.length > 0 && diffPNArr.length === 0;
        if (this.cloneTargetPNList.length > 0 && (!this.addNewInventory || !this.newInventory)) {
            this.selectedTargetPN = this.isTargetPNCommon ? undefined : this.cloneTargetPNList[0];
        }
        this.pnList = __spread(this.clonePnList);
        this.targetPNList = __spread(this.cloneTargetPNList);
    };
    AddEditInventoryComponent.prototype.setCommonPN = function () {
        this.selectedPN = undefined;
        return true;
    };
    AddEditInventoryComponent.prototype.setCommonTargetPN = function () {
        this.selectedTargetPN = undefined;
        return true;
    };
    AddEditInventoryComponent.prototype.setDiffOtherPN = function () {
        this.otherPN = undefined;
        return true;
    };
    /****************************************************
     * Onchange event for sentence and decision dropdown
     ****************************************************/
    AddEditInventoryComponent.prototype.changeSentence = function () {
        var _this = this;
        if (this.selectedSentence === this.oldSentence) {
            this.selectedSentence = undefined;
            this.oldSentence = undefined;
            this.resetDecisionList();
        }
        else {
            this.oldSentence = this.selectedSentence;
        }
        this.selectedDecision = undefined;
        this.oldDecision = undefined;
        this.selectedInventoryList.forEach(function (res) {
            res.sentenceList = [];
            res.sentenceList.push(_this.selectedSentence);
            res.sentenceValue = _this.selectedSentence;
        });
        this.modifyDecisionList();
        if (this.decisionList.length === 1 && !!this.selectedSentence) {
            this.selectedDecision = this.decisionList[0].value;
            // Assign decision to all selected inventories
            this.selectedInventoryList.forEach(function (res) {
                res.decisionValue = _this.selectedDecision;
            });
        }
        else {
            this.selectedDecision = undefined;
        }
        this.changeDecision(true);
        if (this.selectedInventoryList.length > 0) {
            this.modifyInventoryList();
        }
        this.filtersVisible = false;
        this.updateFilterCriteria();
        this.cloneCardList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.cardList);
    };
    /***************************************
     * Update Decision List on basis of sentence
     ***************************************/
    AddEditInventoryComponent.prototype.modifyDecisionList = function () {
        var _this = this;
        if (!!this.sentenceDecisionDTO &&
            !!this.sentenceDecisionDTO.sentenceDecisionList &&
            this.sentenceDecisionDTO.sentenceDecisionList.length > 0) {
            var dto = this.sentenceDecisionDTO.sentenceDecisionList.filter(function (res) { return res.sentence === _this.selectedSentence && res.decisionList; });
            if (!!dto && dto.length > 0 && !!dto[0].decisionList) {
                this.decisionList = [];
                dto[0].decisionList.forEach(function (res) {
                    _this.decisionList.push({
                        label: _this.getDecisionLabel(res),
                        value: res
                    });
                });
            }
        }
    };
    AddEditInventoryComponent.prototype.changeDecision = function (isModify) {
        var _this = this;
        // Dont modify in case change is happened from sentence
        if (!isModify) {
            if (this.selectedDecision === this.oldDecision) {
                this.selectedDecision = undefined;
                this.oldDecision = undefined;
            }
            else {
                this.oldDecision = this.selectedDecision;
            }
        }
        this.selectedInventoryList.forEach(function (res) {
            res.decisionList = [];
            res.decisionList.push(_this.selectedDecision);
            res.decisionValue = _this.selectedDecision;
        });
        this.loadFilterPanel();
        if (this.selectedInventoryList.length > 0) {
            this.modifyInventoryList();
        }
        this.cloneCardList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.cardList);
        this.filtersVisible = false;
        this.updateFilterCriteria();
    };
    /****************************************************
     * Onchange event for pn and target PN dropdown
     ****************************************************/
    AddEditInventoryComponent.prototype.onChangeTargetPN = function () {
        var _this = this;
        this.selectedInventoryList.forEach(function (res) {
            res.targetPN = _this.selectedTargetPN;
        });
        if (this.selectedInventoryList.length > 0) {
            this.modifyInventoryList();
        }
        this.getInventoryIcon();
    };
    AddEditInventoryComponent.prototype.onChangePN = function () {
        var _this = this;
        this.selectedInventoryList.forEach(function (res) {
            res.pn = _this.selectedPN;
        });
        this.getInventoryIcon();
    };
    AddEditInventoryComponent.prototype.getMatchingIconInput = function () {
        return {
            projectNumber: this.bsdeProjectDTO.projectNumber,
            pn: !!this.selectedPN ? this.selectedPN : !!this.otherPN ? this.otherPN : undefined,
            sn: this.getSN(),
            bireItemKey: this.getKey(this.bireItemDTO),
            quantity: this.getQuantity(),
            sentence: this.selectedSentence
        };
    };
    AddEditInventoryComponent.prototype.getControlForMultipleInventories = function () {
        var _this = this;
        var list = [];
        this.selectedInventoryList.forEach(function (res) {
            list.push({
                projectNumber: _this.bsdeProjectDTO.projectNumber,
                pn: res.pn,
                sn: !!res.sn ? res.sn : undefined,
                bireItemKey: _this.getKey(_this.bireItemDTO),
                quantity: res.quantity,
                sentence: res.sentenceValue
            });
        });
        return list;
    };
    AddEditInventoryComponent.prototype.openFindingsDialog = function () {
        this.finding = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.selectedFinding[0]);
        this.findingsDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Create;
        this.showFindingsDialog = true;
    };
    /****************************************************
     * EDIT FINDINGS
     ****************************************************/
    AddEditInventoryComponent.prototype.editFindings = function () {
        var _this = this;
        var dto = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.selectedFinding[0]);
        this.finding = dto;
        this.selectedFindingsIndex = this.findingsList.findIndex(function (res) { return res.index === _this.finding.index; });
        this.findingsDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Write;
        this.showFindingsDialog = true;
    };
    /****************************************************
     * DELETE FINDINGS
     ****************************************************/
    AddEditInventoryComponent.prototype.deleteFindings = function () {
        var _this = this;
        var partialMessageKey = this.findingsList.length > 1 ? 'confirmDeleteSelectedFindings' : 'confirmDeleteSelectedFinding';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.selectedFinding.forEach(function (dto) {
                    var index = _this.findingsList.findIndex(function (res) { return res.damageCode === dto.damageCode && res.index === dto.index; });
                    if (index !== -1) {
                        _this.findingsList.splice(index, 1);
                        _this.deleteInventoriesFindings(dto);
                    }
                });
                _this.selectedFinding = [];
            }
        });
    };
    AddEditInventoryComponent.prototype.deleteInventoriesFindings = function (dto) {
        var _this = this;
        this.selectedInventoryList.forEach(function (res) {
            if (!!res.findings && res.findings.length > 0) {
                var index = res.findings.findIndex(function (finding) { return finding.damageCode === dto.damageCode && finding.index === dto.index; });
                if (index !== -1 && !!_this.cardList && !!_this.cardList[res.index] && !!_this.cardList[res.index].findings) {
                    _this.cardList[res.index].findings.splice(index, 1);
                }
            }
        });
    };
    AddEditInventoryComponent.prototype.openFindingsDialogInReadMode = function () {
        this.finding = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.selectedFinding[0]);
        this.findingsDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Read;
        this.showFindingsDialog = true;
    };
    AddEditInventoryComponent.prototype.addFindings = function (event) {
        if (this.selectedFindingsIndex !== -1) {
            this.findingsList[this.selectedFindingsIndex] = event;
        }
        else {
            if (!this.findingsList) {
                this.findingsList = [];
            }
            this.findingsList.push(event);
        }
        this.loadFindingsList();
        this.updateFindingsToInventories(event);
        this.finding = undefined;
        this.selectedFinding = [];
    };
    // Item Data
    AddEditInventoryComponent.prototype.initTasksData = function () {
        var _this = this;
        this.workList = [];
        this.dbWorkList = [];
        this.reworkPNList = [];
        var bireItemDTOId = this.returnBireItemDTOId();
        // Setting work list
        this.addEditInventoryService
            .findBireTaskItemsByItemTaskTab(bireItemDTOId)
            .subscribe(function (results) {
            results.forEach(function (task) {
                _this.workList.push({
                    taskCode: task.code,
                    taskVersion: task.version,
                    taskDesignation: task.designation
                });
            });
            _this.updateWorksToInventories();
            _this.fetchMROCenterForEachTask();
        });
    };
    AddEditInventoryComponent.prototype.returnTaskTypeLabel = function (key) {
        return this.taskList.filter(function (task) { return task.value === key; });
    };
    // Fetch MRO Center of each task
    AddEditInventoryComponent.prototype.fetchMROCenterForEachTask = function () {
        var _this = this;
        this.workList.forEach(function (task, index) {
            _this.addEditInventoryService
                .findBireTask({ taskCode: task.taskCode, taskVersion: task.taskVersion })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                _this.changeMroCenterAndLoadTask();
            }))
                .subscribe(function (dto) {
                var taskTypeCodeDTO = _this.returnTaskTypeLabel(dto.taskTypeCode);
                task.taskTypeCode = dto.taskTypeCode;
                task.taskTypeLabel = !!taskTypeCodeDTO && taskTypeCodeDTO.length > 0 ? taskTypeCodeDTO[0].label : undefined;
                task.mroCenter = dto.repairCenterCode;
                _this.dbWorkList[index] = task;
            });
        });
    };
    AddEditInventoryComponent.prototype.changeMroCenterAndLoadTask = function () {
        this.changeMROCenter();
        // Assign task list for selected MRO Center
        this.loadTaskList();
    };
    AddEditInventoryComponent.prototype.changeMROCenter = function () {
        var _this = this;
        if (this.taskList.length > 0 && !this.selectedMroCenter) {
            this.workList = __spread(this.dbWorkList);
        }
        else {
            this.workList = this.dbWorkList.filter(function (res) { return res.mroCenter === _this.selectedMroCenter; });
        }
    };
    // Setting content of filter panel
    AddEditInventoryComponent.prototype.loadTaskList = function () {
        var _this = this;
        this.cloneTaskCodeList = [];
        this.cloneDesignationList = [];
        this.workList.filter(function (task) {
            _this.cloneTaskCodeList.push({
                label: task.taskCode,
                value: task.taskCode
            });
            _this.cloneDesignationList.push({
                label: task.taskDesignation,
                value: task.taskDesignation
            });
        });
        this.taskCodeList = __spread(this.cloneTaskCodeList);
        this.designationList = __spread(this.cloneDesignationList);
    };
    AddEditInventoryComponent.prototype.changeTaskType = function () {
        var _this = this;
        if (this.taskList.length > 0 && (this.selectedTask === this.taskList[0].value || !this.selectedTask)) {
            this.workList = this.dbWorkList.filter(function (res) { return res.mroCenter === _this.selectedMroCenter; });
        }
        else {
            this.workList = this.dbWorkList.filter(function (res) { return res.taskTypeCode === _this.selectedTask && res.mroCenter === _this.selectedMroCenter; });
        }
        // Assign task list for selected MRO Center
        this.loadTaskList();
    };
    // Documents
    AddEditInventoryComponent.prototype.loadDocumentTypes = function () {
        var _this = this;
        this.propertiesService.getValue(_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_14__["GenericPropertyConstants"].DOC_ASSET_CATEGORY_MAP).subscribe(function (results) {
            _this.documentTypes = !!results ? _utils_select_item_utils__WEBPACK_IMPORTED_MODULE_21__["SelectItemUtils"].fromLabelValues(results) : [];
        });
    };
    AddEditInventoryComponent.prototype.uploadDocument = function (event, fileUploader) {
        var _this = this;
        var flag = false;
        if (!!event.files) {
            var file_1 = event.files[0];
            this.documents.forEach(function (document) {
                if (!!document.bidoDocumentationDTO) {
                    if (document.bidoDocumentationDTO.docName === file_1.name) {
                        flag = true;
                    }
                }
            });
            if (flag) {
                this.messageService.showWarningMessage('global.warningOnFileExists');
            }
            else {
                _utils_file_utils__WEBPACK_IMPORTED_MODULE_19__["FileUtils"].getFileContentAsBase64(file_1, function (fileContent) {
                    var fileNameParts = file_1.name && file_1.name.includes('.') ? file_1.name.split('.') : [];
                    var docType = fileNameParts.length > 0 ? fileNameParts[fileNameParts.length - 1].toUpperCase() : undefined;
                    if (!!fileContent) {
                        var document_1 = {
                            docType: docType,
                            docFile: fileContent,
                            docName: file_1.name,
                            docPublicationDate: new Date()
                        };
                        var bidoDoc = {
                            bidoDocumentationDTO: document_1
                        };
                        _this.documents = __spread(_this.documents, [bidoDoc]);
                        _this.documentsAdded = __spread(_this.documentsAdded, [bidoDoc]);
                        _this.documentTableDataSource.addData([_this.addData(document_1)]);
                    }
                    _this.updateDocumentsToInventories();
                });
            }
            fileUploader.clear();
        }
    };
    AddEditInventoryComponent.prototype.openDocument = function () {
        if (this.documentTableDataSource.dataSelectionCount === 1) {
            this.currentDocumentIndex = -1;
            this.addedDocumentIndex = -1;
            this.currentDocument = this.documentTableDataSource.dataSelection[0]._obj;
            this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Read;
            this.showAddDocumentDialog = true;
        }
    };
    AddEditInventoryComponent.prototype.deleteDocuments = function () {
        var _this = this;
        var partialMessageKey = this.documentTableDataSource.dataSelectionCount > 1
            ? 'confirmDeleteSelectedDocuments'
            : 'confirmDeleteSelectedDocument';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                var temp = [];
                _this.documentTableDataSource.dataSelection.forEach(function (data) {
                    if (!!data && !!data._obj && !!data._obj.docCode) {
                        var codeId = {
                            docCode: data._obj.docCode
                        };
                        temp.push(codeId);
                    }
                });
                // this.equipment.removeBidoDocumentationId = temp;
                _this.documentTableDataSource.setData(_this.documentTableDataSource.dataSrc.filter(function (data) {
                    return !_this.documentTableDataSource.dataSelection.some(function (row) {
                        return data.docName === row.docName;
                    });
                }));
                _this.documents = _this.documents.filter(function (data) {
                    return !_this.documentTableDataSource.dataSelection.some(function (row) {
                        return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
                    });
                });
                _this.documentsAdded = _this.documentsAdded.filter(function (data) {
                    return !_this.documentTableDataSource.dataSelection.some(function (row) {
                        return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
                    });
                });
                _this.documentsUpdated = _this.documentsUpdated.filter(function (data) {
                    return !_this.documentTableDataSource.dataSelection.some(function (row) {
                        return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
                    });
                });
                _this.documentTableDataSource.dataSelection = [];
                _this.updateDocumentsToInventories();
            }
        });
    };
    AddEditInventoryComponent.prototype.downloadFiles = function () {
        this.documentTableDataSource.dataSelection.forEach(function (documentRow) {
            if (!!documentRow._obj) {
                _utils_file_utils__WEBPACK_IMPORTED_MODULE_19__["FileUtils"].downloadFile(documentRow._obj.docFile, documentRow._obj.docName);
            }
        });
    };
    AddEditInventoryComponent.prototype.editDocument = function () {
        var _this = this;
        if (this.documentTableDataSource.dataSelectionCount === 1) {
            this.currentDocumentIndex = this.documents.findIndex(function (list) {
                return (!!list.bidoDocumentationDTO &&
                    !!_this.documentTableDataSource.dataSelection[0].docName &&
                    list.bidoDocumentationDTO.docName === _this.documentTableDataSource.dataSelection[0].docName);
            });
            this.addedDocumentIndex = this.documentsAdded.findIndex(function (list) {
                return (!!list.bidoDocumentationDTO &&
                    !!_this.documentTableDataSource.dataSelection[0].docName &&
                    list.bidoDocumentationDTO.docName === _this.documentTableDataSource.dataSelection[0].docName);
            });
            this.currentDocument = __assign({}, this.documentTableDataSource.dataSelection[0]._obj);
            this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Write;
            this.showAddDocumentDialog = true;
        }
        this.updateDocumentsToInventories();
    };
    AddEditInventoryComponent.prototype.addNewDocument = function (newDocument) {
        var _this = this;
        var bidoDoc = {
            bidoDocumentationDTO: newDocument
        };
        var fileExists = true;
        if (!!newDocument) {
            this.documentTableDataSource.dataSrc.forEach(function (doc, i) {
                if (doc.docName === newDocument.docName) {
                    if (_this.currentDocumentIndex === i) {
                        fileExists = true;
                    }
                    else {
                        fileExists = false;
                        _this.messageService.showWarningMessage('global.warningOnFileExists');
                    }
                }
            });
            if (fileExists) {
                if (this.currentDocumentIndex !== -1) {
                    this.documents[this.currentDocumentIndex] = bidoDoc;
                    this.documentTableDataSource[this.currentDocumentIndex] = this.addData(newDocument);
                    var updatedDocumentIndex = this.documentsUpdated.findIndex(function (obj) {
                        return (!!obj.bidoDocumentationDTO &&
                            !!obj.bidoDocumentationDTO.docName &&
                            !!bidoDoc.bidoDocumentationDTO &&
                            !!bidoDoc.bidoDocumentationDTO.docName &&
                            obj.bidoDocumentationDTO.docName === bidoDoc.bidoDocumentationDTO.docName);
                    });
                    if (newDocument.docCode) {
                        if (updatedDocumentIndex !== -1) {
                            this.documentsUpdated[updatedDocumentIndex] = bidoDoc;
                        }
                        else {
                            this.documentsUpdated = __spread(this.documentsUpdated, [bidoDoc]);
                        }
                    }
                    else {
                        if (this.addedDocumentIndex !== -1) {
                            this.documentsAdded[this.addedDocumentIndex] = bidoDoc;
                        }
                        else {
                            this.documentsAdded = __spread(this.documentsAdded, [bidoDoc]);
                        }
                    }
                }
                else {
                    var isAdded = this.documentsAdded.some(function (documentAdded) { return _this.areSameDocument(documentAdded, bidoDoc); });
                    if (isAdded) {
                        this.messageService.showWarningMessage('global.warningOnDocumentExists');
                    }
                    else {
                        this.documents = __spread(this.documents, [bidoDoc]);
                        this.documentsAdded = __spread(this.documentsAdded, [bidoDoc]);
                        this.documentTableDataSource.addData([this.addData(newDocument)]);
                    }
                }
                this.updateDocumentsToInventories();
            }
            this.documentTableDataSource.dataSelection = [];
        }
    };
    AddEditInventoryComponent.prototype.areSameDocument = function (obj1, obj2) {
        if (!obj1 || !obj2) {
            return false;
        }
        else {
            return (!!obj1.bidoDocumentationDTO &&
                !!obj1.bidoDocumentationDTO.docName &&
                !!obj2.bidoDocumentationDTO &&
                !!obj2.bidoDocumentationDTO.docName &&
                obj1.bidoDocumentationDTO.docName === obj2.bidoDocumentationDTO.docName);
        }
    };
    AddEditInventoryComponent.prototype.addData = function (newDocument) {
        var selectedDocumentType = this.documentTypes.find(function (documentType) { return !!newDocument.docCategory && documentType.value === newDocument.docCategory; });
        var row = {
            docName: newDocument.docName,
            docExtension: this.showDocExtension(newDocument),
            docDescription: newDocument.docDescription,
            docCategory: !!selectedDocumentType ? _utils_string_utils__WEBPACK_IMPORTED_MODULE_22__["StringUtils"].orEmpty(selectedDocumentType.label) : '',
            docPublicationDate: this.dateService.dateToString(newDocument.docPublicationDate),
            docEndOfValidityDate: this.dateService.dateToString(newDocument.docEndOfValidityDate),
            _obj: newDocument
        };
        return row;
    };
    AddEditInventoryComponent.prototype.showDocExtension = function (document) {
        return _utils_file_utils__WEBPACK_IMPORTED_MODULE_19__["FileUtils"].getExtension(document.docName).toUpperCase();
    };
    /*************************
     * Overlay Actions
     *************************/
    AddEditInventoryComponent.prototype.filter = function () {
        var _this = this;
        if (!!this.searchCriteria && Object.keys(this.searchCriteria).length > 0) {
            this.cardList = this.cloneCardList.filter(function (res) {
                var isPNMatch = true;
                if (!!_this.searchCriteria.selectedPN) {
                    isPNMatch = _this.searchCriteria.selectedPN === res.pn;
                }
                var isWOMatch = true;
                if (!!_this.searchCriteria.selectedWO) {
                    isWOMatch = _this.searchCriteria.selectedWO === res.woCode;
                }
                var isSentenceMatch = true;
                if (!!_this.searchCriteria.selectedSentence) {
                    isSentenceMatch = _this.searchCriteria.selectedSentence === res.sentenceValue;
                }
                var isDecisionMatch = true;
                if (!!_this.searchCriteria.selectedDecision) {
                    isDecisionMatch = _this.searchCriteria.selectedDecision === res.decisionValue;
                }
                var control = true;
                if (!!_this.searchCriteria.control && _this.searchCriteria.control.length > 0 && !!res.icon) {
                    control = _this.searchCriteria.control.indexOf(res.icon) === -1 ? false : true;
                }
                // Make inventory selected if match is true
                res.isSelected = isPNMatch && isWOMatch && isSentenceMatch && isDecisionMatch && control ? true : false;
                return true;
            });
            this.cardList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.cardList);
        }
        else {
            this.selectedInventoryList = [];
            this.cardList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.cloneCardList);
            // Make all selected
            this.cardList.forEach(function (res) { return (res.isSelected = true); });
        }
        this.updateSelectionAndQuantity();
        if (this.selectedInventoryList.length > 0) {
            this.modifyInventoryList();
        }
        else {
            this.addNewInventory = true;
            this.quantityValue = this.isItemSerialized ? 1 : undefined;
            this.loadFavoriteCombination();
        }
    };
    AddEditInventoryComponent.prototype.reset = function () {
        this.searchCriteria = {};
    };
    /**********************************************
     * Validate
     *********************************************/
    AddEditInventoryComponent.prototype.validateScreenAndSave = function () {
        var _this = this;
        // PN Validity
        if (!this.otherPN && !this.selectedPN && (this.isAddInventory || this.addNewInventory)) {
            this.messageService.showErrorMessage(this.getTranslateKey('missingPN'));
            return;
        }
        // Is other PN Valid
        if (!!this.otherPN) {
            var pnId = {
                pnCode: this.otherPN
            };
            this.addEditInventoryService.findBirePn(pnId).subscribe(function (result) {
                if (!!result) {
                    _this.validateQty();
                }
            }, function (err) {
                _this.messageService.showErrorMessage(_this.getTranslateKey('invalidPN'));
                return;
            });
        }
        else {
            this.validateQty();
        }
    };
    /*************************************
     * Validate for Quantity
     *************************************/
    AddEditInventoryComponent.prototype.validateQty = function () {
        var _this = this;
        // check has to verify that the quantity of all inventories is equal to expected quantity,
        // if it is not equal, then do not save and display the message
        var totalInventory = this.inventoryList.length + (this.quantityValue || 0);
        if ((this.isAddInventory || this.addNewInventory) &&
            !!this.bireItemDTO.expectedQuantity &&
            !!totalInventory &&
            (totalInventory > parseInt(this.bireItemDTO.expectedQuantity, 10) ||
                totalInventory < parseInt(this.bireItemDTO.expectedQuantity, 10))) {
            this.confirmationService.confirmDelete({
                messageKey: this.getTranslateKey('inventoryQuantityNotCorrect'),
                accept: function () {
                    // SN Validity
                    if (!(_this.isAddInventory || _this.addNewInventory) &&
                        !!_this.selectedInventoryList &&
                        _this.selectedInventoryList.length > 0) {
                        var isSNAdded_1 = true;
                        var snArray_1 = [];
                        _this.selectedInventoryList.forEach(function (res) {
                            if (!res.sn) {
                                isSNAdded_1 = false;
                            }
                            else {
                                snArray_1.push(res.sn);
                            }
                        });
                        if (!isSNAdded_1) {
                            _this.messageService.showErrorMessage(_this.getTranslateKey('snMandatory'));
                            return;
                        }
                        // Find duplicate sn
                        var findDuplicates = function (arr) { return arr.filter(function (item, index) { return arr.indexOf(item) !== index; }); };
                        if (findDuplicates(snArray_1).length > 0) {
                            var pn = !!_this.selectedPN ? _this.selectedPN : _this.otherPN;
                            var errMsg = _this.translateService.instant(_this.getTranslateKey('duplicateSN')) + " " + pn + " / " + findDuplicates(snArray_1)[0];
                            _this.messageService.showErrorMessage(errMsg);
                            return;
                        }
                    }
                    if ((_this.isAddInventory || _this.addNewInventory) && _this.isItemSerialized) {
                        var isSNAdded_2 = true;
                        var snArray_2 = [];
                        _this.snCount.forEach(function (res) {
                            if (!res.value) {
                                isSNAdded_2 = false;
                            }
                            else {
                                snArray_2.push(res.value);
                            }
                        });
                        if (_this.snCount.length === 0 || !isSNAdded_2 || _this.snCount.length !== snArray_2.length) {
                            _this.messageService.showErrorMessage(_this.getTranslateKey('snMandatory'));
                            return;
                        }
                        // Find duplicate sn
                        var findDuplicates = function (arr) { return arr.filter(function (item, index) { return arr.indexOf(item) !== index; }); };
                        if (findDuplicates(snArray_2).length > 0) {
                            var pn = !!_this.selectedPN ? _this.selectedPN : _this.otherPN;
                            var errMsg = _this.translateService.instant(_this.getTranslateKey('duplicateSN')) + " " + pn + " / " + findDuplicates(snArray_2)[0];
                            _this.messageService.showErrorMessage(errMsg);
                            return;
                        }
                    }
                    _this.save();
                },
                reject: function () {
                    return;
                }
            });
        }
        else {
            this.save();
        }
    };
    /*******************************
     * Event to save Inventory
     *******************************/
    AddEditInventoryComponent.prototype.saveInventory = function () {
        this.validateScreenAndSave();
    };
    AddEditInventoryComponent.prototype.save = function () {
        // TODO
        var _this = this;
        // Remove other PN in case both PN and Other PN are entered
        if (!!this.selectedPN && !!this.otherPN) {
            this.otherPN = undefined;
        }
        // Assign PN
        if (this.selectedPN || this.otherPN) {
            var pn_1 = this.selectedPN || this.otherPN;
            this.selectedInventoryList.forEach(function (res) { return (res.pn = pn_1); });
        }
        // Check if any inventory is empty for sentence/decision, then assign favorite to it
        this.cardList.forEach(function (inventory) {
            if (!!_this.sentenceDecisionDTO && !!_this.sentenceDecisionDTO.favoriteCombination) {
                if (!inventory.sentenceValue && !inventory.decisionValue) {
                    inventory.sentenceValue = _this.sentenceDecisionDTO.favoriteCombination.sentence;
                    if (!!inventory.sentenceValue) {
                        inventory.sentenceList = [inventory.sentenceValue];
                    }
                    inventory.decisionValue = _this.sentenceDecisionDTO.favoriteCombination.decision;
                    if (!!inventory.decisionValue) {
                        inventory.decisionList = [inventory.decisionValue];
                    }
                    // Setting up favorite selection
                    _this.selectedSentence = _this.sentenceDecisionDTO.favoriteCombination.sentence;
                    _this.modifyDecisionList();
                    _this.oldSentence = _this.selectedSentence;
                    _this.selectedDecision = _this.sentenceDecisionDTO.favoriteCombination.decision;
                    _this.oldDecision = _this.selectedDecision;
                }
            }
            // Assign decision if length is 1
            if (_this.decisionList.length === 1 && !!_this.selectedSentence) {
                _this.selectedDecision = _this.decisionList[0].value;
                _this.oldDecision = _this.selectedDecision;
                inventory.decisionValue = _this.selectedDecision;
            }
        });
        if (!this.addNewInventory && !this.newInventory) {
            this.modifyInventories(true);
        }
        this.filtersVisible = false;
        this.updateFilterCriteria();
        // Update dbCopy
        this.cloneCardList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.cardList);
        this.getInventoryIcon();
        this.messageService.showSuccessMessage('global.successOnSave');
    };
    AddEditInventoryComponent.prototype.resetTaskDamagesAndDocuments = function () {
        this.workList.forEach(function (res) { return (res.applied = false); });
        this.findingsList = [];
        this.documents = [];
        this.documentsAdded = [];
        this.documentsUpdated = [];
    };
    AddEditInventoryComponent.prototype.deleteInventories = function () {
        var _this = this;
        var partialMessageKey = this.selectedInventoryList.length === 1
            ? 'confirmDeleteInventory'
            : this.selectedInventoryList.length === this.cardList.length
                ? 'confirmDeleteAllInventories'
                : 'confirmDeleteSelectedInventory';
        var message = this.selectedInventoryList.length === this.cardList.length
            ? " " + this.pageComponentData.title + " ?"
            : "\n " + this.getInventoryList(this.isItemSerialized);
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            contextKeys: [message],
            accept: function () {
                _this.selectedInventoryList.forEach(function (inventory) {
                    var index = _this.cardList.findIndex(function (res) { return res.index === inventory.index; });
                    _this.cardList.splice(index, 1);
                });
                _this.selectedInventoryList = [];
                _this.cloneCardList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(_this.cardList);
                _this.unselectAllInventories();
            }
        });
    };
    AddEditInventoryComponent.prototype.getInventoryList = function (isItemSerialized) {
        var _this = this;
        var maxSize = 5;
        var list = [];
        var str;
        this.selectedInventoryList.forEach(function (res) {
            if (list.length < maxSize) {
                if (isItemSerialized) {
                    str = !!res.sn ? "- P/N " + res.pn + " | S/N " + res.sn : "- P/N " + res.pn;
                }
                else {
                    str = !!res.trackingNumber
                        ? "- P/N " + res.pn + " | T/N " + res.trackingNumber + " (" + _this.translateService.instant(_this.getTranslateKey('qty')) + " = " + res.quantity + ")"
                        : "- P/N " + res.pn + " (" + _this.translateService.instant(_this.getTranslateKey('qty')) + " = " + res.quantity + ")";
                }
                list.push(str);
            }
            if (_this.selectedInventoryList.length > maxSize && list.length === maxSize) {
                list.push('- ...');
            }
        });
        return list.join('\n');
    };
    /**********************************************
     * Filter Item List
     *********************************************/
    AddEditInventoryComponent.prototype.searchReworkPNList = function (ev) {
        if (!!ev && !!ev.query && !!this.cloneReworkPNList) {
            this.reworkPNList = this.cloneReworkPNList.filter(function (res) {
                return res.label.toLowerCase().startsWith(ev.query.toLowerCase());
            });
        }
        else {
            this.reworkPNList = __spread(this.reworkPNList);
        }
    };
    /**********************************************
     * Filter Item List
     *********************************************/
    AddEditInventoryComponent.prototype.searchTaskCodeList = function (ev) {
        if (!!ev && !!ev.query && !!this.cloneTaskCodeList) {
            this.taskCodeList = this.cloneTaskCodeList.filter(function (res) {
                return res.label.toLowerCase().startsWith(ev.query.toLowerCase());
            });
        }
        else {
            this.taskCodeList = __spread(this.taskCodeList);
        }
    };
    /**********************************************
     * Filter Item List
     *********************************************/
    AddEditInventoryComponent.prototype.searchDesignationList = function (ev) {
        if (!!ev && !!ev.query && !!this.cloneDesignationList) {
            this.designationList = this.cloneDesignationList.filter(function (res) {
                return res.label.toLowerCase().startsWith(ev.query.toLowerCase());
            });
        }
        else {
            this.designationList = __spread(this.designationList);
        }
    };
    AddEditInventoryComponent.prototype.resetWorks = function () {
        this.worksSearchCriteria.selectedToggle = [
            AddEditInventoryComponent_1.APPLIED,
            AddEditInventoryComponent_1.NOT_APPLIED
        ];
        this.worksSearchCriteria.selectedDesignation = undefined;
        this.worksSearchCriteria.selectedReworkPN = undefined;
        this.worksSearchCriteria.selectedCode = undefined;
    };
    AddEditInventoryComponent.prototype.filterWorks = function () {
        var _this = this;
        if (!!this.worksSearchCriteria && Object.keys(this.worksSearchCriteria).length > 0) {
            this.workList = this.dbWorkList.filter(function (res) {
                var isCodeMatch = true;
                if (!!_this.worksSearchCriteria.selectedCode) {
                    isCodeMatch = _this.worksSearchCriteria.selectedCode.value === res.taskCode;
                }
                var isDesignationMatch = true;
                if (!!_this.worksSearchCriteria.selectedDesignation) {
                    isDesignationMatch = _this.worksSearchCriteria.selectedDesignation.value === res.taskDesignation;
                }
                var control = true;
                if (!!_this.worksSearchCriteria.selectedToggle && _this.worksSearchCriteria.selectedToggle.length > 0) {
                    var code = res.applied ? 0 : 1;
                    control = _this.worksSearchCriteria.selectedToggle.indexOf(code) === -1 ? false : true;
                }
                return isCodeMatch && isDesignationMatch && control;
            });
            this.workList = this.workList.filter(function (res) { return !!_this.selectedMroCenter && res.mroCenter === _this.selectedMroCenter; });
            this.workList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.workList);
        }
        else {
            this.changeMroCenterAndLoadTask();
            this.workList = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.dbWorkList);
        }
        this.showFilterPanel = false;
    };
    AddEditInventoryComponent.prototype.togglePNButton = function () {
        this.showOtherPN = this.showOtherPN ? false : true;
        if (this.showOtherPN && !!this.selectedPN) {
            this.selectedPN = undefined;
        }
        if (!this.showOtherPN && !!this.otherPN) {
            this.otherPN = undefined;
        }
        if (this.addNewInventory || this.newInventory) {
            this.loadFavoriteCombination();
        }
        else {
            this.modifyInventoryList();
        }
        this.getInventoryIcon();
    };
    /**********************************
     * OPEN WORK ORDER UC
     **********************************/
    AddEditInventoryComponent.prototype.openWorkOrderLink = function (rowData) {
        if (!!rowData.woId && !!rowData.woProjectId) {
            var workOrderDTOId = {
                woId: rowData.woId,
                projectId: rowData.woProjectId
            };
            this.openWorkOrder(workOrderDTOId, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Read);
        }
    };
    AddEditInventoryComponent.prototype.openWorkOrder = function (wo, openModeWanted) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _constants_component_constants__WEBPACK_IMPORTED_MODULE_12__["ComponentConstants"].MAI_WORK_ORDER_FORM,
            openMode: openModeWanted,
            objectId: this.serializationService.serialize(wo)
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    // Getting identifier key for an item node
    AddEditInventoryComponent.prototype.getKey = function (item) {
        return item.chapter + "-" + item.section + "-" + item.subject + "-" + item.sheet + "-" + item.marks;
    };
    /**************************************
     * Update Sentence Decision List
     **************************************/
    AddEditInventoryComponent.prototype.loadSentenceDecisionListByPN = function (targetIcon) {
        var _this = this;
        var input = {
            projectNumber: this.bsdeProjectDTO.projectNumber,
            pn: this.selectedPN || this.otherPN,
            bireItemKey: this.getKey(this.bireItemDTO),
            sn: !!this.snCount && this.snCount.length > 0 ? this.snCount[0].value : undefined,
            quantity: !!this.quantityValue
                ? this.isItemSerialized
                    ? "" + this.quantityValue
                    : "" + this.sumRealQuantity
                : '1',
            sentence: this.selectedSentence,
            icon: !!targetIcon
                ? targetIcon
                : this.selectedInventoryList.length > 0
                    ? this.getConfiguration()
                    : this.bireItemDTO.resultAssignmentIcon
        };
        this.addEditInventoryService
            .getSentenceAndDecisionList(input)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.modifyDecisionList();
        }))
            .subscribe(function (res) {
            _this.sentenceDecisionDTO.sentenceDecisionList = res.sentenceDecisionList;
        });
    };
    /**************************************
     * Apply Task
     **************************************/
    AddEditInventoryComponent.prototype.applyTask = function () {
        this.selectedWork.forEach(function (res) {
            res.applied = true;
        });
        this.updateDBList();
    };
    AddEditInventoryComponent.prototype.taskApplied = function () {
        this.updateDBList();
    };
    AddEditInventoryComponent.prototype.updateDBList = function () {
        var _this = this;
        this.workList.forEach(function (work) {
            var index = _this.dbWorkList.findIndex(function (res) { return res.taskCode === work.taskCode; });
            if (index !== -1) {
                _this.dbWorkList[index] = work;
            }
        });
        this.updateWorksToInventories();
    };
    /*****************************************************
     * Callback method to fetch icon
     *****************************************************/
    AddEditInventoryComponent.prototype.getInventoryIcon = function () {
        var _this = this;
        var input = this.isAddInventory || this.addNewInventory || this.selectedInventoryList.length === 1
            ? [this.getMatchingIconInput()]
            : this.getControlForMultipleInventories();
        this.addEditInventoryService
            .fetchMatchingIcon(input)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.loadInventoriesFlag = false;
        }))
            .subscribe(function (res) {
            if (res.length === 1) {
                _this.loadSentenceDecisionListByPN(res[0].icon);
            }
            else {
                res.forEach(function (dto, index) {
                    _this.selectedInventoryList[index].icon = dto.icon;
                });
                _this.loadSentenceDecisionListByPN(_this.getConfiguration());
                _this.filtersVisible = false;
                _this.updateFilterCriteria();
            }
        });
    };
    AddEditInventoryComponent.prototype.getTrimLabel = function (label) {
        var maxLength = 25;
        var lastIndex = 22;
        return !!label && label.length > maxLength ? label.substring(0, lastIndex) + "..." : label;
    };
    AddEditInventoryComponent.prototype.getTrimQty = function (label) {
        var maxLength = 17;
        var lastIndex = 16;
        return !!label && label.length > maxLength ? label.substring(0, lastIndex) + "..." : label;
    };
    /***************************************
     * Update Findings
     ***************************************/
    AddEditInventoryComponent.prototype.updateFindingsToInventories = function (isAddUpdateData) {
        var _this = this;
        if (!!this.selectedInventoryList && !!this.cardList && this.cardList.length > 0) {
            if (this.selectedInventoryList.length === 1) {
                this.selectedInventoryList[0].findings = this.findingsList;
            }
            else if (this.selectedInventoryList.length > 1) {
                this.cardList.forEach(function (res) {
                    if (res.isSelected) {
                        if (!res.findings) {
                            res.findings = [];
                        }
                        // If method called from updation/edition
                        if (!!isAddUpdateData && _this.selectedFindingsIndex !== -1) {
                            res.findings[_this.selectedFindingsIndex] = isAddUpdateData;
                        }
                        else {
                            res.findings = __spread(res.findings, _this.findingsList);
                        }
                    }
                });
            }
        }
    };
    /***************************************
     * Update Works
     ***************************************/
    AddEditInventoryComponent.prototype.updateWorksToInventories = function () {
        var _this = this;
        if (!!this.cardList && this.cardList.length > 0) {
            this.cardList.forEach(function (res) {
                if (res.isSelected) {
                    res.works = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(_this.dbWorkList);
                }
            });
        }
    };
    /***************************************
     * Update Documents
     ***************************************/
    AddEditInventoryComponent.prototype.updateDocumentsToInventories = function () {
        var _this = this;
        if (this.cardList.length > 0) {
            if (!!this.cardList && this.cardList.length > 0) {
                this.cardList.forEach(function (res) {
                    if (res.isSelected) {
                        res.document = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(_this.documents);
                        res.documentsAdded = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(_this.documentsAdded);
                        res.documentsUpdated = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(_this.documentsUpdated);
                    }
                });
            }
        }
    };
    /*****************************************
     * Method to load findings and works of
     * selected Inventory
     *****************************************/
    AddEditInventoryComponent.prototype.loadFindingsWorksAndDocuments = function () {
        var docListIndex = 0;
        var docAddIndex = 1;
        var docUpdateIndex = 2;
        this.updateInventoriesSelection();
        if (this.selectedInventoryList.length > 0) {
            // Load Findings
            this.findingsList =
                this.selectedInventoryList.length === 1
                    ? !!this.selectedInventoryList[0].findings
                        ? Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.selectedInventoryList[0].findings)
                        : []
                    : this.loadCommonFindings();
            // Load Works
            var workList = this.selectedInventoryList.length === 1 && !!this.selectedInventoryList[0].works
                ? Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.selectedInventoryList[0].works)
                : this.loadCommonWorks();
            this.updateWorkTable(workList);
            // Load Document
            this.documents =
                this.selectedInventoryList.length === 1
                    ? this.selectedInventoryList[0].document || []
                    : this.loadCommonDocuments(docListIndex) || [];
            this.documentsAdded =
                this.selectedInventoryList.length === 1
                    ? this.selectedInventoryList[0].documentsAdded || []
                    : this.loadCommonDocuments(docAddIndex) || [];
            this.documentsUpdated =
                this.selectedInventoryList.length === 1
                    ? this.selectedInventoryList[0].documentsUpdated || []
                    : this.loadCommonDocuments(docUpdateIndex) || [];
            if (!!this.documents) {
                this.loadDocumentTable();
            }
        }
        else {
            this.resetTaskDamagesAndDocuments();
        }
    };
    AddEditInventoryComponent.prototype.updateWorkTable = function (list) {
        var _this = this;
        this.workList = [];
        this.workList = list.filter(function (res) { return res.mroCenter === _this.selectedMroCenter; });
    };
    /**************************************
     * Load documents of inventories
     **************************************/
    AddEditInventoryComponent.prototype.loadDocumentTable = function () {
        var _this = this;
        this.documentTableDataSource.setData([]);
        var docArr = [];
        this.documents.forEach(function (res) {
            if (!!res && !!res.bidoDocumentationDTO) {
                docArr.push(_this.addData(res.bidoDocumentationDTO));
            }
        });
        this.documentTableDataSource.setData(docArr);
    };
    /*******************************************
     * Load inventories findings
     *******************************************/
    AddEditInventoryComponent.prototype.loadCommonFindings = function () {
        var findings = [];
        this.selectedInventoryList.forEach(function (inventory) {
            if (!!inventory.findings && inventory.findings.length > 0) {
                findings.push(inventory.findings);
            }
        });
        var findingsArr = [];
        if (!!findings && findings.length > 1) {
            var intersectionArr = findings.reduce(function (intersection, array) {
                return intersection.filter(function (intersectedItem) {
                    return array.some(function (item) {
                        return intersectedItem.findingComment === item.findingComment &&
                            intersectedItem.localisationCode === item.localisationCode &&
                            intersectedItem.quantity === item.quantity &&
                            intersectedItem.unitCode === item.unitCode &&
                            intersectedItem.criticality === item.criticality &&
                            intersectedItem.damageCode === item.damageCode;
                    });
                });
            }, findings[0]);
            if (!!intersectionArr && intersectionArr.length > 0) {
                findingsArr = intersectionArr;
            }
        }
        else {
            findingsArr = [];
        }
        return findingsArr;
    };
    /*******************************************
     * Load Intersection of works
     *******************************************/
    AddEditInventoryComponent.prototype.loadCommonWorks = function () {
        var works = [];
        var worksArr = [];
        this.selectedInventoryList.forEach(function (inventory) {
            if (!!inventory.works) {
                works.push(inventory.works);
            }
        });
        if (!!works && works.length > 0) {
            var intersectionArr_1 = works[0];
            works.forEach(function (res) {
                res.forEach(function (work) {
                    if (!work.applied) {
                        var eleIndex = intersectionArr_1.findIndex(function (dto) { return dto.taskCode === work.taskCode; });
                        if (eleIndex !== -1) {
                            intersectionArr_1[eleIndex] = work;
                        }
                    }
                });
            });
            worksArr =
                !!intersectionArr_1 && intersectionArr_1.length > 0
                    ? intersectionArr_1
                    : this.resetWorksTable();
        }
        else {
            worksArr = this.resetWorksTable();
        }
        return worksArr;
    };
    AddEditInventoryComponent.prototype.resetWorksTable = function () {
        this.resetWorks();
        var workArr = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.dbWorkList);
        workArr.forEach(function (res) { return (res.applied = false); });
        return workArr;
    };
    /********************************
     * Load Common Documents
     ********************************/
    AddEditInventoryComponent.prototype.loadCommonDocuments = function (index) {
        var docsArr = [];
        var list = index === 0
            ? this.selectedInventoryList.map(function (inventory) { return inventory.document; })
            : index === 1
                ? this.selectedInventoryList.map(function (inventory) { return inventory.documentsAdded; })
                : this.selectedInventoryList.map(function (inventory) { return inventory.documentsUpdated; });
        if (!!list) {
            list.forEach(function (res) {
                if (!!res) {
                    docsArr = __spread(docsArr, res);
                }
            });
        }
        return docsArr;
    };
    /********************************
     * Reset decision list
     ********************************/
    AddEditInventoryComponent.prototype.resetDecisionList = function () {
        var _this = this;
        if (!!this.sentenceDecisionDTO && !!this.sentenceDecisionDTO.decisionList) {
            this.decisionList = [];
            this.sentenceDecisionDTO.decisionList.forEach(function (res) {
                _this.decisionList.push({
                    label: _this.getDecisionLabel(res),
                    value: res
                });
            });
        }
    };
    var AddEditInventoryComponent_1;
    AddEditInventoryComponent.OK = _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__["ControlConfigConstants"].ICON_GREEN;
    AddEditInventoryComponent.WARNING = _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__["ControlConfigConstants"].ICON_YELLOW;
    AddEditInventoryComponent.NOK = _constants_control_config_constants__WEBPACK_IMPORTED_MODULE_13__["ControlConfigConstants"].ICON_RED;
    AddEditInventoryComponent.APPLIED = 0;
    AddEditInventoryComponent.NOT_APPLIED = 1;
    AddEditInventoryComponent = AddEditInventoryComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-add-edit-inventory',
            template: __webpack_require__(/*! ./add-edit-inventory.component.html */ "./src/app/shared/components/add-edit-inventory/add-edit-inventory.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-inventory.component.scss */ "./src/app/shared/components/add-edit-inventory/add-edit-inventory.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_date_service__WEBPACK_IMPORTED_MODULE_16__["DateService"],
            _services_properties_service__WEBPACK_IMPORTED_MODULE_17__["PropertiesService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            _add_edit_inventory_service__WEBPACK_IMPORTED_MODULE_24__["AddEditInventoryService"],
            _services_confirmation_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmationService"]])
    ], AddEditInventoryComponent);
    return AddEditInventoryComponent;
}(_types_form_page_component__WEBPACK_IMPORTED_MODULE_18__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/shared/components/add-edit-inventory/add-edit-inventory.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/add-edit-inventory/add-edit-inventory.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AddEditInventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditInventoryModule", function() { return AddEditInventoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__);
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
/* harmony import */ var _main_dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../main/dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _api_cockpit_component_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../api/cockpit-component.api */ "./src/app/shared/api/cockpit-component.api.ts");
/* harmony import */ var _add_edit_inventory_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-edit-inventory.component */ "./src/app/shared/components/add-edit-inventory/add-edit-inventory.component.ts");
/* harmony import */ var _add_edit_inventory_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./add-edit-inventory.service */ "./src/app/shared/components/add-edit-inventory/add-edit-inventory.service.ts");
/* harmony import */ var _dialog_findings_dialog_cockpit_bido_document_dialog_cockpit_bido_document_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dialog-findings/dialog-cockpit-bido-document/dialog-cockpit-bido-document.component */ "./src/app/shared/components/add-edit-inventory/dialog-findings/dialog-cockpit-bido-document/dialog-cockpit-bido-document.component.ts");
/* harmony import */ var _dialog_findings_dialog_findings_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dialog-findings/dialog-findings.component */ "./src/app/shared/components/add-edit-inventory/dialog-findings/dialog-findings.component.ts");
/* harmony import */ var _document_upload_dialog_document_upload_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./document-upload-dialog/document-upload-dialog.component */ "./src/app/shared/components/add-edit-inventory/document-upload-dialog/document-upload-dialog.component.ts");
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
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_20__["ModalModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"],
    primeng_message__WEBPACK_IMPORTED_MODULE_6__["MessageModule"],
    primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__["RadioButtonModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_14__["TableModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_12__["SelectButtonModule"],
    _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_21__["TableModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"],
    primeng_card__WEBPACK_IMPORTED_MODULE_2__["CardModule"],
    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_13__["SplitButtonModule"],
    primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__["OverlayPanelModule"],
    primeng_inputswitch__WEBPACK_IMPORTED_MODULE_5__["InputSwitchModule"],
    primeng_progressbar__WEBPACK_IMPORTED_MODULE_10__["ProgressBarModule"],
    primeng_primeng__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"],
    primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__["MultiSelectModule"],
    primeng_autocomplete__WEBPACK_IMPORTED_MODULE_1__["AutoCompleteModule"],
    primeng_primeng__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"]
];
var INTERNAL_MODULES = [];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [
    _add_edit_inventory_component__WEBPACK_IMPORTED_MODULE_23__["AddEditInventoryComponent"],
    _dialog_findings_dialog_findings_component__WEBPACK_IMPORTED_MODULE_26__["DialogFindingsComponent"],
    _dialog_findings_dialog_cockpit_bido_document_dialog_cockpit_bido_document_component__WEBPACK_IMPORTED_MODULE_25__["DialogCockpitBidoDocumentComponent"],
    _document_upload_dialog_document_upload_dialog_component__WEBPACK_IMPORTED_MODULE_27__["DocumentUploadDialogComponent"]
];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_add_edit_inventory_service__WEBPACK_IMPORTED_MODULE_24__["AddEditInventoryService"], _api_cockpit_component_api__WEBPACK_IMPORTED_MODULE_22__["CockpitComponentApi"]];
var AddEditInventoryModule = /** @class */ (function () {
    function AddEditInventoryModule() {
    }
    AddEditInventoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS),
            exports: __spread(COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_17__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_18__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_19__["AppCommonSharedModule"],
                _main_dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_16__["DynamicComponentLoaderModule"].forChild(COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], AddEditInventoryModule);
    return AddEditInventoryModule;
}());



/***/ }),

/***/ "./src/app/shared/components/add-edit-inventory/add-edit-inventory.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/add-edit-inventory/add-edit-inventory.service.ts ***!
  \************************************************************************************/
/*! exports provided: AddEditInventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditInventoryService", function() { return AddEditInventoryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_cockpit_component_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/cockpit-component.api */ "./src/app/shared/api/cockpit-component.api.ts");
/* harmony import */ var _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _api_task_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/task-management.api */ "./src/app/shared/api/task-management.api.ts");
/* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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







var AddEditInventoryService = /** @class */ (function (_super) {
    __extends(AddEditInventoryService, _super);
    function AddEditInventoryService(http, appConfigService, cockpitComponentApi, taskManagementApi, productStructureManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.cockpitComponentApi = cockpitComponentApi;
        _this.taskManagementApi = taskManagementApi;
        _this.productStructureManagementApi = productStructureManagementApi;
        return _this;
    }
    AddEditInventoryService.prototype.fetchSentenceList = function () {
        return _super.prototype.post.call(this, this.cockpitComponentApi.getSentenceList);
    };
    AddEditInventoryService.prototype.fetchDecisionList = function () {
        return _super.prototype.post.call(this, this.cockpitComponentApi.getDecisionList);
    };
    AddEditInventoryService.prototype.findMROCenter = function () {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireSiteForTask);
    };
    AddEditInventoryService.prototype.getPartNumberStructure = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.getPartNumberStructure, bireItemDTOId);
    };
    AddEditInventoryService.prototype.findBireDamageItemsByItemVersionItemScreen = function (bireItemVersionDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireDamageItemsByItemVersionItemScreen, bireItemVersionDTOId);
    };
    AddEditInventoryService.prototype.findBireLocalisationItemsByItemVersion = function (bireItemVersionDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireLocalisationItemsByItemVersion, bireItemVersionDTOId);
    };
    AddEditInventoryService.prototype.findBireTask = function (input) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireTask, input);
    };
    AddEditInventoryService.prototype.findBireItemVersions = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireItemVersionsByItem, bireItemDTOId);
    };
    AddEditInventoryService.prototype.findBireTaskItemsByItemTaskTab = function (bireItemDTOId) {
        return _super.prototype.post.call(this, this.taskManagementApi.findBireTaskItemsByItemTaskTab, bireItemDTOId);
    };
    AddEditInventoryService.prototype.findBirePn = function (pn) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBirePn, pn);
    };
    AddEditInventoryService.prototype.getSentenceAndDecisionList = function (input) {
        return _super.prototype.post.call(this, this.cockpitComponentApi.getSentenceAndDecisionList, input);
    };
    AddEditInventoryService.prototype.loadFindingsList = function (input) {
        return _super.prototype.post.call(this, this.cockpitComponentApi.loadFindingsList, input);
    };
    AddEditInventoryService.prototype.fetchMatchingIcon = function (input) {
        return _super.prototype.post.call(this, this.cockpitComponentApi.fetchMatchingIcon, input);
    };
    AddEditInventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"],
            _api_cockpit_component_api__WEBPACK_IMPORTED_MODULE_2__["CockpitComponentApi"],
            _api_task_management_api__WEBPACK_IMPORTED_MODULE_4__["TaskManagementApi"],
            _api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__["ProductStructureManagementApi"]])
    ], AddEditInventoryService);
    return AddEditInventoryService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/components/add-edit-inventory/dialog-findings/dialog-cockpit-bido-document/dialog-cockpit-bido-document.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/add-edit-inventory/dialog-findings/dialog-cockpit-bido-document/dialog-cockpit-bido-document.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docName\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"document.docName\" [disabled]=\"isReadOpenMode\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docPublicationDate\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-calendar\r\n          showButtonBar=\"true\"\r\n          [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\"\r\n          [yearRange]=\"sessionService.calendarYearRange\"\r\n          class=\"aw-calendar\"\r\n          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n          [locale]=\"sessionService.calendarFormat\"\r\n          [(ngModel)]=\"document.docPublicationDate\"\r\n          appendTo=\"body\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docDescription\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <textarea\r\n          class=\"aw-textarea\"\r\n          pInputTextarea\r\n          [rows]=\"3\"\r\n          [(ngModel)]=\"document.docDescription\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf=\"isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.close\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" color=\"primary\" type=\"button\" mat-raised-button (click)=\"validate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/shared/components/add-edit-inventory/dialog-findings/dialog-cockpit-bido-document/dialog-cockpit-bido-document.component.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/add-edit-inventory/dialog-findings/dialog-cockpit-bido-document/dialog-cockpit-bido-document.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: DialogCockpitBidoDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogCockpitBidoDocumentComponent", function() { return DialogCockpitBidoDocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
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




var DialogCockpitBidoDocumentComponent = /** @class */ (function (_super) {
    __extends(DialogCockpitBidoDocumentComponent, _super);
    function DialogCockpitBidoDocumentComponent(sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'DialogCockpitBidoDocumentComponent') || this;
        _this.sessionService = sessionService;
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DialogCockpitBidoDocumentComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
        if (!this.document) {
            this.document = {};
        }
    };
    DialogCockpitBidoDocumentComponent.prototype.validate = function () {
        this.onValidated.emit(this.document);
        this.closeDialog();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogCockpitBidoDocumentComponent.prototype, "document", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DialogCockpitBidoDocumentComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogCockpitBidoDocumentComponent.prototype, "types", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogCockpitBidoDocumentComponent.prototype, "onValidated", void 0);
    DialogCockpitBidoDocumentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-cockpit-bido-document',
            template: __webpack_require__(/*! ./dialog-cockpit-bido-document.component.html */ "./src/app/shared/components/add-edit-inventory/dialog-findings/dialog-cockpit-bido-document/dialog-cockpit-bido-document.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DialogCockpitBidoDocumentComponent);
    return DialogCockpitBidoDocumentComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/components/add-edit-inventory/dialog-findings/dialog-findings.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/add-edit-inventory/dialog-findings/dialog-findings.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"35\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".damage\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              placeholder=\"&nbsp;\"\r\n              [options]=\"damagesList\"\r\n              [showClear]=\"true\"\r\n              [(ngModel)]=\"finding.damageCode\"\r\n              (onChange)=\"onChangeDamage()\"\r\n              [disabled]=\"isReadOpenMode\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".quantity\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input type=\"number\" class=\"aw-input\" [(ngModel)]=\"finding.quantity\" [disabled]=\"isReadOpenMode\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".localisation\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              placeholder=\"&nbsp;\"\r\n              [options]=\"locationList\"\r\n              [showClear]=\"true\"\r\n              [(ngModel)]=\"finding.localisationCode\"\r\n              [disabled]=\"isReadOpenMode\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".criticality\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              placeholder=\"&nbsp;\"\r\n              [showClear]=\"true\"\r\n              [options]=\"criticalityList\"\r\n              [(ngModel)]=\"finding.criticality\"\r\n              [disabled]=\"isReadOpenMode\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".comment\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <textarea\r\n              class=\"aw-textarea\"\r\n              [rows]=\"3\"\r\n              pInputTextarea\r\n              [disabled]=\"isReadOpenMode\"\r\n              [(ngModel)]=\"finding.findingComment\"\r\n            ></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"section search-criteria-section\">\r\n          <h4 class=\"section-title\">\r\n            {{ getComponentName() + \".document\" | translate }} ({{\r\n              documentTableDataSource ? documentTableDataSource.dataCount : 0\r\n            }})\r\n          </h4>\r\n\r\n          <div class=\"section-content\">\r\n            <a-table [dataSource]=\"documentTableDataSource\">\r\n              <ng-template tableActionsDef>\r\n                <button\r\n                  *ngIf=\"documentTableDataSource.hasDataSelection\"\r\n                  type=\"button\"\r\n                  mat-raised-button\r\n                  (click)=\"downloadFiles()\"\r\n                >\r\n                  {{ \"global.download\" | translate }}\r\n                </button>\r\n\r\n                <button\r\n                  *ngIf=\"!isReadOpenMode && documentTableDataSource.hasDataSelection\"\r\n                  type=\"button\"\r\n                  mat-raised-button\r\n                  color=\"warn\"\r\n                  (click)=\"deleteDocuments()\"\r\n                  [disabled]=\"isReadOpenMode\"\r\n                >\r\n                  {{ \"global.delete\" | translate }}\r\n                </button>\r\n\r\n                <button\r\n                  *ngIf=\"!isReadOpenMode && documentTableDataSource.dataSelectionCount === 1\"\r\n                  type=\"button\"\r\n                  mat-raised-button\r\n                  (click)=\"editDocument()\"\r\n                  [disabled]=\"isReadOpenMode\"\r\n                >\r\n                  {{ \"global.edit\" | translate }}\r\n                </button>\r\n\r\n                <button\r\n                  *ngIf=\"documentTableDataSource.dataSelectionCount === 1\"\r\n                  type=\"button\"\r\n                  mat-raised-button\r\n                  (click)=\"openDocument()\"\r\n                  [disabled]=\"isReadOpenMode\"\r\n                >\r\n                  {{ \"global.open\" | translate }}\r\n                </button>\r\n\r\n                <p-fileUpload\r\n                  #fileUploader\r\n                  *ngIf=\"!isReadOpenMode && !documentTableDataSource.hasDataSelection\"\r\n                  chooseLabel=\"{{ 'global.upload' | translate }}\"\r\n                  name=\"document[]\"\r\n                  customUpload=\"true\"\r\n                  mode=\"basic\"\r\n                  auto=\"true\"\r\n                  (uploadHandler)=\"uploadDocument($event, fileUploader)\"\r\n                ></p-fileUpload>\r\n              </ng-template>\r\n            </a-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">{{ \"global.cancel\" | translate }}</button>\r\n\r\n    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"validate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-cockpit-bido-document\r\n  *ngIf=\"showDocumentDialog\"\r\n  [(display)]=\"showDocumentDialog\"\r\n  [document]=\"currentDocument\"\r\n  [openMode]=\"documentDialogOpenMode\"\r\n  [types]=\"documentTypes\"\r\n  (onValidated)=\"onAddDocument($event)\"\r\n>\r\n</aw-dialog-cockpit-bido-document>\r\n"

/***/ }),

/***/ "./src/app/shared/components/add-edit-inventory/dialog-findings/dialog-findings.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/components/add-edit-inventory/dialog-findings/dialog-findings.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DialogFindingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFindingsComponent", function() { return DialogFindingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _table_table_data_source__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _add_edit_inventory_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../add-edit-inventory.service */ "./src/app/shared/components/add-edit-inventory/add-edit-inventory.service.ts");
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














var DialogFindingsComponent = /** @class */ (function (_super) {
    __extends(DialogFindingsComponent, _super);
    function DialogFindingsComponent(sessionService, confirmationService, messageService, propertiesService, dateService, translateService, addEditInventoryService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, 'DialogFindingsComponent') || this;
        _this.sessionService = sessionService;
        _this.confirmationService = confirmationService;
        _this.messageService = messageService;
        _this.propertiesService = propertiesService;
        _this.dateService = dateService;
        _this.translateService = translateService;
        _this.addEditInventoryService = addEditInventoryService;
        _this.quantity = 1;
        _this.onAddFindings = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    // ****************************************************************************
    DialogFindingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documents = [];
        this.documentsAdded = [];
        this.documentsRemoved = [];
        this.documentsUpdated = [];
        this.damagesList = [];
        this.locationList = [];
        this.initDocumentTableDataSource();
        this.loadDocumentTypes();
        this.updateOpenMode(this.openMode);
        if (!!this.addEditInventoryService.damagesList) {
            this.addEditInventoryService.damagesList.forEach(function (res) {
                var label = !!res.damageDescription ? res.damageCode + " - " + res.damageDescription : "" + res.damageCode;
                _this.damagesList.push({
                    label: label,
                    value: res.damageCode
                });
            });
        }
        if (!!this.addEditInventoryService.localisationList) {
            this.addEditInventoryService.localisationList.forEach(function (res) {
                _this.locationList.push({
                    label: res.localisationDescription || res.localisationCode,
                    value: res.localisationCode
                });
            });
        }
        this.criticalityList = [
            {
                label: "" + this.translateService.instant(this.getTranslateKey('acceptable')),
                value: "" + this.translateService.instant(this.getTranslateKey('acceptable'))
            },
            {
                label: "" + this.translateService.instant(this.getTranslateKey('repairable')),
                value: "" + this.translateService.instant(this.getTranslateKey('repairable'))
            },
            {
                label: "" + this.translateService.instant(this.getTranslateKey('scrap')),
                value: "" + this.translateService.instant(this.getTranslateKey('scrap'))
            }
        ];
        if (!this.finding) {
            this.finding = {
                quantity: '1'
            };
        }
        else {
            if (!!this.finding.bireDocumentDTOList && this.finding.bireDocumentDTOList.length > 0) {
                this.finding.bireDocumentDTOList.forEach(function (document) {
                    _this.documentTableDataSource.addData([_this.createDocumentRow(document)]);
                });
            }
        }
    };
    DialogFindingsComponent.prototype.loadDocumentTypes = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_2__["GenericPropertyConstants"].DOC_PARTNER_CATEGORY_MAP).subscribe(function (results) {
            _this.documentTypes = !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_11__["SelectItemUtils"].fromLabelValues(results) : [];
        });
    };
    DialogFindingsComponent.prototype.initDocumentTableDataSource = function () {
        this.documentTableDataSource = new _table_table_data_source__WEBPACK_IMPORTED_MODULE_12__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'docName',
                    translateKey: this.getTranslateKey('name'),
                    alignment: _table_table_data_source__WEBPACK_IMPORTED_MODULE_12__["ColumnAlignment"].LEFT,
                    width: '60%'
                },
                {
                    field: 'docPublicationDate',
                    translateKey: this.getTranslateKey('date'),
                    alignment: _table_table_data_source__WEBPACK_IMPORTED_MODULE_12__["ColumnAlignment"].LEFT,
                    width: '20%'
                },
                {
                    field: 'docDescription',
                    translateKey: this.getTranslateKey('description'),
                    alignment: _table_table_data_source__WEBPACK_IMPORTED_MODULE_12__["ColumnAlignment"].LEFT,
                    width: '20%'
                }
            ],
            data: []
        });
    };
    /**************************************************************************
     * Documents tab
     *************************************************************************/
    DialogFindingsComponent.prototype.deleteDocuments = function () {
        var _this = this;
        var partialMessageKey = this.documentTableDataSource.dataSelectionCount > 1
            ? 'confirmDeleteSelectedDocuments'
            : 'confirmDeleteSelectedDocument';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                _this.documentTableDataSource.dataSelection.forEach(function (selectedDocumentRow) {
                    var documentsAddedWithoutSelection = _this.documentsAdded.filter(function (document) { return !_this.areSameDocument(document, selectedDocumentRow._obj); });
                    // list of added objects contains the selection
                    if (_this.documentsAdded.length !== documentsAddedWithoutSelection.length) {
                        // Remove selection from added objects
                        _this.documentsAdded = documentsAddedWithoutSelection;
                    }
                    else {
                        var documentsUpdatedWithoutSelection = _this.documentsUpdated.filter(function (document) { return !_this.areSameDocument(document, selectedDocumentRow._obj); });
                        // list of updated objects contains the selection
                        if (_this.documentsUpdated.length !== documentsUpdatedWithoutSelection.length) {
                            // Remove selection from added objects
                            _this.documentsUpdated = documentsUpdatedWithoutSelection;
                        }
                        _this.documentsRemoved = __spread(_this.documentsRemoved, [selectedDocumentRow._obj]);
                    }
                });
                _this.documents = _this.documents.filter(function (document) {
                    return !_this.documentTableDataSource.dataSelection.some(function (selectedDocumentRow) {
                        return _this.areSameDocument(document, selectedDocumentRow._obj);
                    });
                });
                _this.documentTableDataSource.setData(_this.documentTableDataSource.dataSrc.filter(function (documentRow) {
                    return !_this.documentTableDataSource.dataSelection.some(function (selectedDocumentRow) {
                        return _this.areSameDocument(documentRow._obj, selectedDocumentRow._obj);
                    });
                }));
                _this.documentTableDataSource.dataSelection = [];
            }
        });
    };
    DialogFindingsComponent.prototype.editDocument = function () {
        var _this = this;
        if (this.documentTableDataSource.dataSelectionCount === 1) {
            this.currentDocumentIndex = this.documents.findIndex(function (document) {
                return _this.areSameDocument(document, _this.documentTableDataSource.dataSelection[0]._obj);
            });
            this.currentDocument = __assign({}, this.documentTableDataSource.dataSelection[0]._obj);
            this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write;
            this.showDocumentDialog = true;
        }
    };
    DialogFindingsComponent.prototype.openDocument = function () {
        if (this.documentTableDataSource.dataSelection.length === 1) {
            this.currentDocument = this.documentTableDataSource.dataSelection[0]._obj;
            this.currentDocumentIndex = -1;
            this.documentDialogOpenMode = _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Read;
            this.showDocumentDialog = true;
        }
    };
    DialogFindingsComponent.prototype.downloadFiles = function () {
        this.documentTableDataSource.dataSelection.forEach(function (documentRow) {
            _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_10__["FileUtils"].downloadFile(documentRow._obj.docFile, documentRow._obj.docName);
        });
    };
    DialogFindingsComponent.prototype.uploadDocument = function (event, fileUploader) {
        var _this = this;
        if (!!event.files) {
            var file_1 = event.files[0];
            // Check if the file already exists
            var fileExists = this.documents.some(function (document) { return document.docName === file_1.name; });
            if (fileExists) {
                this.messageService.showWarningMessage('global.warningOnFileExists');
            }
            else {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_10__["FileUtils"].getFileContentAsBase64(file_1, function (fileContent) {
                    if (!!fileContent) {
                        var document_1 = {
                            docFile: fileContent,
                            docName: file_1.name,
                            docPublicationDate: new Date()
                        };
                        _this.documents = __spread(_this.documents, [document_1]);
                        _this.documentsAdded = __spread(_this.documentsAdded, [document_1]);
                        _this.documentTableDataSource.addData([_this.createDocumentRow(document_1)]);
                    }
                });
            }
            if (!!fileUploader) {
                fileUploader.clear();
            }
        }
    };
    DialogFindingsComponent.prototype.createDocumentRow = function (document) {
        var documentRow = {
            docExtension: this.formatDocExtension(document),
            docName: document.docName,
            docPublicationDate: this.dateService.dateToString(document.docPublicationDate),
            docSize: this.formatDocSize(document),
            docDescription: document.docDescription,
            docFile: document.docFile,
            _obj: document
        };
        return documentRow;
    };
    DialogFindingsComponent.prototype.formatDocExtension = function (document) {
        return _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_10__["FileUtils"].getExtension(document.docName).toUpperCase();
    };
    DialogFindingsComponent.prototype.formatDocSize = function (document) {
        return !!document.docFile ? _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_10__["FileUtils"].getFormattedSize(document.docFile.length) : '';
    };
    DialogFindingsComponent.prototype.areSameDocument = function (obj1, obj2) {
        if (!obj1 || !obj2) {
            return false;
        }
        else {
            return !!obj1.docName && !!obj2.docName && obj1.docName === obj2.docName;
        }
    };
    /**************************************************************************
     * Document Dialog
     *************************************************************************/
    DialogFindingsComponent.prototype.onAddDocument = function (document) {
        var _this = this;
        if (!!document) {
            if (this.currentDocumentIndex !== -1) {
                this.documents[this.currentDocumentIndex] = document;
                this.documentTableDataSource[this.currentDocumentIndex] = this.createDocumentRow(document);
                var updatedDocumentIndex = this.documentsUpdated.findIndex(function (documentUpdated) {
                    return _this.areSameDocument(documentUpdated, document);
                });
                if (updatedDocumentIndex !== -1) {
                    this.documentsUpdated[updatedDocumentIndex] = document;
                }
                else {
                    this.documentsUpdated = __spread(this.documentsUpdated, [document]);
                }
            }
            else {
                var isAdded = this.documentsAdded.some(function (documentAdded) { return _this.areSameDocument(documentAdded, document); });
                if (isAdded) {
                    this.messageService.showWarningMessage('global.warningOnDocumentExists');
                }
                else {
                    this.documents = __spread(this.documents, [document]);
                    this.documentsAdded = __spread(this.documentsAdded, [document]);
                    this.documentTableDataSource.addData([this.createDocumentRow(document)]);
                }
            }
        }
        this.documentTableDataSource.dataSelection = [];
    };
    DialogFindingsComponent.prototype.validate = function () {
        if (!this.finding.damageCode && !this.finding.findingComment) {
            this.messageService.showErrorMessage(this.getTranslateKey('commentMandatory'));
        }
        else {
            this.finding.bireDocumentDTOList = this.documentTableDataSource.data;
            this.onAddFindings.emit(this.finding);
            this.closeDialog();
        }
    };
    DialogFindingsComponent.prototype.onChangeDamage = function () {
        var _this = this;
        var dto = this.damagesList.filter(function (res) { return res.value === _this.finding.damageCode; });
        this.finding.damageDescription = !!dto && dto.length > 0 ? dto[0].label : undefined;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogFindingsComponent.prototype, "finding", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DialogFindingsComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogFindingsComponent.prototype, "onAddFindings", void 0);
    DialogFindingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-findings',
            template: __webpack_require__(/*! ./dialog-findings.component.html */ "./src/app/shared/components/add-edit-inventory/dialog-findings/dialog-findings.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__["PropertiesService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _add_edit_inventory_service__WEBPACK_IMPORTED_MODULE_13__["AddEditInventoryService"]])
    ], DialogFindingsComponent);
    return DialogFindingsComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/components/add-edit-inventory/document-upload-dialog/document-upload-dialog.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/shared/components/add-edit-inventory/document-upload-dialog/document-upload-dialog.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".docManagement\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docName\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"document.docName\" [disabled]=\"isReadOpenMode\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docPublicationDate\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-calendar\r\n          showButtonBar=\"true\"\r\n          [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\"\r\n          [yearRange]=\"sessionService.calendarYearRange\"\r\n          class=\"aw-calendar\"\r\n          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n          [locale]=\"sessionService.calendarFormat\"\r\n          [(ngModel)]=\"document.docPublicationDate\"\r\n          appendTo=\"body\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docEndOfValidityDate\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-calendar\r\n          showButtonBar=\"true\"\r\n          [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\"\r\n          [yearRange]=\"sessionService.calendarYearRange\"\r\n          class=\"aw-calendar\"\r\n          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n          [locale]=\"sessionService.calendarFormat\"\r\n          [(ngModel)]=\"document.docEndOfValidityDate\"\r\n          appendTo=\"body\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        ></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docType\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <p-dropdown\r\n          class=\"aw-dropdown fixed-width\"\r\n          [options]=\"types\"\r\n          [(ngModel)]=\"document.docCategory\"\r\n          [disabled]=\"isReadOpenMode\"\r\n          [showClear]=\"true\"\r\n          placeholder=\"&nbsp;\"\r\n          appendTo=\"body\"\r\n        ></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">{{ getComponentName() + \".docDescription\" | translate }}</label>\r\n\r\n      <div class=\"form-control\">\r\n        <textarea\r\n          class=\"aw-textarea\"\r\n          pInputTextarea\r\n          [rows]=\"3\"\r\n          [(ngModel)]=\"document.docDescription\"\r\n          [disabled]=\"isReadOpenMode\"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" type=\"button\" color=\"primary\" mat-raised-button (click)=\"validate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/shared/components/add-edit-inventory/document-upload-dialog/document-upload-dialog.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/shared/components/add-edit-inventory/document-upload-dialog/document-upload-dialog.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FkZC1lZGl0LWludmVudG9yeS9kb2N1bWVudC11cGxvYWQtZGlhbG9nL2RvY3VtZW50LXVwbG9hZC1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/add-edit-inventory/document-upload-dialog/document-upload-dialog.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/shared/components/add-edit-inventory/document-upload-dialog/document-upload-dialog.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DocumentUploadDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentUploadDialogComponent", function() { return DocumentUploadDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
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




var DocumentUploadDialogComponent = /** @class */ (function (_super) {
    __extends(DocumentUploadDialogComponent, _super);
    function DocumentUploadDialogComponent(sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Read, 'DocumentUploadDialogComponent') || this;
        _this.sessionService = sessionService;
        _this.displayChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onValidated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    DocumentUploadDialogComponent.prototype.ngOnInit = function () {
        this.updateOpenMode(this.openMode);
        if (!this.document) {
            this.document = {};
        }
    };
    DocumentUploadDialogComponent.prototype.validate = function () {
        this.onValidated.emit(this.document);
        this.closeDialog();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DocumentUploadDialogComponent.prototype, "document", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DocumentUploadDialogComponent.prototype, "openMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DocumentUploadDialogComponent.prototype, "types", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DocumentUploadDialogComponent.prototype, "onValidated", void 0);
    DocumentUploadDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-document-upload-dialog',
            template: __webpack_require__(/*! ./document-upload-dialog.component.html */ "./src/app/shared/components/add-edit-inventory/document-upload-dialog/document-upload-dialog.component.html"),
            styles: [__webpack_require__(/*! ./document-upload-dialog.component.scss */ "./src/app/shared/components/add-edit-inventory/document-upload-dialog/document-upload-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DocumentUploadDialogComponent);
    return DocumentUploadDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/constants/control-config-constants.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/constants/control-config-constants.ts ***!
  \**************************************************************/
/*! exports provided: ControlConfigConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlConfigConstants", function() { return ControlConfigConstants; });
var ControlConfigConstants = /** @class */ (function () {
    function ControlConfigConstants() {
    }
    ControlConfigConstants.ICON_GREEN = '9';
    ControlConfigConstants.ICON_RED = '10';
    ControlConfigConstants.ICON_YELLOW = '11';
    ControlConfigConstants.ICON_NONE = '12';
    ControlConfigConstants.CUSTOMIZATION_STATUS_NONE = '0';
    ControlConfigConstants.CUSTOMIZATION_STATUS_OK_ASSUMED = '10';
    ControlConfigConstants.CUSTOMIZATION_STATUS_OK_CUSTOMIZED = '11';
    ControlConfigConstants.CUSTOMIZATION_STATUS_WARNING_NO_ALTERNATIVE = '21';
    ControlConfigConstants.ICON_GREEN_LIGHT_CODE = '0';
    ControlConfigConstants.ICON_RED_LIGHT_CODE = '1';
    ControlConfigConstants.ICON_YELLOW_LIGHT_CODE = '2';
    ControlConfigConstants.ICON_NONE_LIGHT_CODE = '3';
    ControlConfigConstants.ICON_EQUIPMENT_CODE = '5';
    ControlConfigConstants.ICON_GREEN_ROUND_CODE = '6';
    ControlConfigConstants.ICON_ITEM_CODE = '4';
    ControlConfigConstants.ICON_YELLOW_TRIANGLE_CODE = '7';
    ControlConfigConstants.ICON_RED_SQUARE_CODE = '8';
    ControlConfigConstants.ICON_GREEN_LED_CODE = '9';
    ControlConfigConstants.ICON_YELLOW_LED_CODE = '11';
    ControlConfigConstants.ICON_RED_LED_CODE = '10';
    ControlConfigConstants.ICON_NONE_LED_CODE = '12';
    ControlConfigConstants.OME_CHECK_EQUIPMENT_MISSING = 'MISSING';
    ControlConfigConstants.OME_CHECK_EQUIPMENT_TO_REMOVE = 'REMOVE';
    ControlConfigConstants.OME_CHECK_EQUIPMENT_TO_REPLACE = 'REPLACE';
    ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_SUGGESTED = 'SUGGESTED';
    ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_VALIDATED = 'VALIDATED';
    ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_ON_GOING = 'ON_GOING';
    return ControlConfigConstants;
}());



/***/ }),

/***/ "./src/app/shared/utils/file-utils.ts":
/*!********************************************!*\
  !*** ./src/app/shared/utils/file-utils.ts ***!
  \********************************************/
/*! exports provided: FileUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUtils", function() { return FileUtils; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _number_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number-utils */ "./src/app/shared/utils/number-utils.ts");


var FileUtils = /** @class */ (function () {
    function FileUtils() {
    }
    FileUtils.downloadFile = function (file, fileName) {
        if (!!file && !!fileName) {
            var byteCharacters = atob(file.toString());
            var byteNumbers = new Array(byteCharacters.length);
            for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"](new Blob([new Uint8Array(byteNumbers)]), fileName);
        }
    };
    FileUtils.getExtension = function (fileName) {
        return !!fileName && fileName.includes('.') ? fileName.substring(fileName.lastIndexOf('.') + 1) : '';
    };
    FileUtils.getFileContentAsBase64 = function (file, callback) {
        if (!!file) {
            var reader_1 = new FileReader();
            reader_1.onloadend = function () {
                var fileContent = reader_1.result; // tslint:disable-line:no-any
                fileContent = fileContent.substring(fileContent.indexOf(',') + 1); // Remove data:*/*;base64,
                callback(fileContent);
            };
            reader_1.readAsDataURL(file);
        }
    };
    FileUtils.getFormattedSize = function (size) {
        if (!!size) {
            return size / FileUtils.KILOOCTET < FileUtils.KILOOCTET
                ? _number_utils__WEBPACK_IMPORTED_MODULE_1__["NumberUtils"].roundNumber(size / FileUtils.KILOOCTET) + " Ko"
                : _number_utils__WEBPACK_IMPORTED_MODULE_1__["NumberUtils"].roundNumber(size / FileUtils.KILOOCTET / FileUtils.KILOOCTET) + " Mo";
        }
        else {
            return '';
        }
    };
    FileUtils.KIBIOCTET = 1024;
    FileUtils.KILOOCTET = 1000;
    return FileUtils;
}());



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
//# sourceMappingURL=default~maintenance-cockpit-inspection-cockpit-inspection-module~maintenance-cockpit-workscope-cockp~91d7ce95.js.map