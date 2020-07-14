(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flight-operations-runway-scheduling-runway-scheduling-module"],{

/***/ "./node_modules/@angular/material/esm5/progress-bar.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/progress-bar.es5.js ***!
  \*****************************************************************/
/*! exports provided: MatProgressBarModule, MAT_PROGRESS_BAR_LOCATION_FACTORY, MatProgressBarBase, _MatProgressBarMixinBase, MAT_PROGRESS_BAR_LOCATION, MatProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressBarModule", function() { return MatProgressBarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION_FACTORY", function() { return MAT_PROGRESS_BAR_LOCATION_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressBarBase", function() { return MatProgressBarBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatProgressBarMixinBase", function() { return _MatProgressBarMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_BAR_LOCATION", function() { return MAT_PROGRESS_BAR_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressBar", function() { return MatProgressBar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(josephperrott): Benchpress tests.
// TODO(josephperrott): Add ARIA attributes for progress bar "for".
// Boilerplate for applying mixins to MatProgressBar.
/**
 * \@docs-private
 */
var  
// TODO(josephperrott): Benchpress tests.
// TODO(josephperrott): Add ARIA attributes for progress bar "for".
// Boilerplate for applying mixins to MatProgressBar.
/**
 * \@docs-private
 */
MatProgressBarBase = /** @class */ (function () {
    function MatProgressBarBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatProgressBarBase;
}());
/** @type {?} */
var _MatProgressBarMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(MatProgressBarBase, 'primary');
/**
 * Injection token used to provide the current location to `MatProgressBar`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * \@docs-private
 * @type {?}
 */
var MAT_PROGRESS_BAR_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-progress-bar-location', { providedIn: 'root', factory: MAT_PROGRESS_BAR_LOCATION_FACTORY });
/**
 * \@docs-private
 * @return {?}
 */
function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
    /** @type {?} */
    var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]);
    /** @type {?} */
    var _location = _document ? _document.location : null;
    return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname: function () { return _location ? (_location.pathname + _location.search) : ''; }
    };
}
/**
 * Counter used to generate unique IDs for progress bars.
 * @type {?}
 */
var progressbarId = 0;
/**
 * `<mat-progress-bar>` component.
 */
var MatProgressBar = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatProgressBar, _super);
    function MatProgressBar(_elementRef, _ngZone, _animationMode, 
    /**
     * @deprecated `location` parameter to be made required.
     * @breaking-change 8.0.0
     */
    location) {
        var _this = _super.call(this, _elementRef) || this;
        _this._elementRef = _elementRef;
        _this._ngZone = _ngZone;
        _this._animationMode = _animationMode;
        /**
         * Flag that indicates whether NoopAnimations mode is set to true.
         */
        _this._isNoopAnimation = false;
        _this._value = 0;
        _this._bufferValue = 0;
        /**
         * Event emitted when animation of the primary progress bar completes. This event will not
         * be emitted when animations are disabled, nor will it be emitted for modes with continuous
         * animations (indeterminate and query).
         */
        _this.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Reference to animation end subscription to be unsubscribed on destroy.
         */
        _this._animationEndSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */
        _this.mode = 'determinate';
        /**
         * ID of the progress bar.
         */
        _this.progressbarId = "mat-progress-bar-" + progressbarId++;
        // We need to prefix the SVG reference with the current path, otherwise they won't work
        // in Safari if the page has a `<base>` tag. Note that we need quotes inside the `url()`,
        // because named route URLs can contain parentheses (see #12338). Also we don't use since
        // we can't tell the difference between whether
        // the consumer is using the hash location strategy or not, because `Location` normalizes
        // both `/#/foo/bar` and `/foo/bar` to the same thing.
        /** @type {?} */
        var path = location ? location.getPathname().split('#')[0] : '';
        _this._rectangleFillValue = "url('" + path + "#" + _this.progressbarId + "')";
        _this._isNoopAnimation = _animationMode === 'NoopAnimations';
        return _this;
    }
    Object.defineProperty(MatProgressBar.prototype, "value", {
        /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
        get: /**
         * Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._value = clamp(v || 0);
            // When noop animation is set to true, trigger animationEnd directly.
            if (this._isNoopAnimation) {
                this.emitAnimationEnd();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressBar.prototype, "bufferValue", {
        /** Buffer value of the progress bar. Defaults to zero. */
        get: /**
         * Buffer value of the progress bar. Defaults to zero.
         * @return {?}
         */
        function () { return this._bufferValue; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) { this._bufferValue = clamp(v || 0); },
        enumerable: true,
        configurable: true
    });
    /** Gets the current transform value for the progress bar's primary indicator. */
    /**
     * Gets the current transform value for the progress bar's primary indicator.
     * @return {?}
     */
    MatProgressBar.prototype._primaryTransform = /**
     * Gets the current transform value for the progress bar's primary indicator.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scale = this.value / 100;
        return { transform: "scaleX(" + scale + ")" };
    };
    /**
     * Gets the current transform value for the progress bar's buffer indicator. Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     */
    /**
     * Gets the current transform value for the progress bar's buffer indicator. Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     * @return {?}
     */
    MatProgressBar.prototype._bufferTransform = /**
     * Gets the current transform value for the progress bar's buffer indicator. Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     * @return {?}
     */
    function () {
        if (this.mode === 'buffer') {
            /** @type {?} */
            var scale = this.bufferValue / 100;
            return { transform: "scaleX(" + scale + ")" };
        }
    };
    /**
     * @return {?}
     */
    MatProgressBar.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._isNoopAnimation) {
            // Run outside angular so change detection didn't get triggered on every transition end
            // instead only on the animation that we care about (primary value bar's transitionend)
            this._ngZone.runOutsideAngular((function () {
                _this._animationEndSubscription =
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this._primaryValueBar.nativeElement, 'transitionend')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((function (e) {
                        return e.target === _this._primaryValueBar.nativeElement;
                    })))
                        .subscribe(function (_) { return _this._ngZone.run(function () { return _this.emitAnimationEnd(); }); });
            }));
        }
    };
    /**
     * @return {?}
     */
    MatProgressBar.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._animationEndSubscription.unsubscribe();
    };
    /** Emit an animationEnd event if in determinate or buffer mode. */
    /**
     * Emit an animationEnd event if in determinate or buffer mode.
     * @private
     * @return {?}
     */
    MatProgressBar.prototype.emitAnimationEnd = /**
     * Emit an animationEnd event if in determinate or buffer mode.
     * @private
     * @return {?}
     */
    function () {
        if (this.mode === 'determinate' || this.mode === 'buffer') {
            this.animationEnd.next({ value: this.value });
        }
    };
    MatProgressBar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-progress-bar',
                    exportAs: 'matProgressBar',
                    host: {
                        'role': 'progressbar',
                        'aria-valuemin': '0',
                        'aria-valuemax': '100',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.mode]': 'mode',
                        'class': 'mat-progress-bar',
                        '[class._mat-animation-noopable]': "_isNoopAnimation",
                    },
                    inputs: ['color'],
                    template: "<svg width=\"100%\" height=\"4\" focusable=\"false\" class=\"mat-progress-bar-background mat-progress-bar-element\"><defs><pattern [id]=\"progressbarId\" x=\"4\" y=\"0\" width=\"8\" height=\"4\" patternUnits=\"userSpaceOnUse\"><circle cx=\"2\" cy=\"2\" r=\"2\"/></pattern></defs><rect [attr.fill]=\"_rectangleFillValue\" width=\"100%\" height=\"100%\"/></svg><div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div><div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\" #primaryValueBar></div><div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>",
                    styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-background{display:none}}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:'';display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2s infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2s infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after{animation:none;transition:none}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    MatProgressBar.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MAT_PROGRESS_BAR_LOCATION,] }] }
    ]; };
    MatProgressBar.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        bufferValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        _primaryValueBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['primaryValueBar',] }],
        animationEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return MatProgressBar;
}(_MatProgressBarMixinBase));
/**
 * Clamps a value to be between two numbers, by default 0 and 100.
 * @param {?} v
 * @param {?=} min
 * @param {?=} max
 * @return {?}
 */
function clamp(v, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.max(min, Math.min(max, v));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatProgressBarModule = /** @class */ (function () {
    function MatProgressBarModule() {
    }
    MatProgressBarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]],
                    exports: [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]],
                    declarations: [MatProgressBar],
                },] },
    ];
    return MatProgressBarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=progress-bar.es5.js.map


/***/ }),

/***/ "./src/app/main/flight-operations/runway-scheduling/form/runway-scheduling-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/runway-scheduling/form/runway-scheduling-form.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div *ngIf=\"!isCreateOpenMode && componentData && componentData.objectId\" class=\"page-subtitle\">\r\n          <span class=\"page-subtitle\"> - {{ context }} </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button\r\n      id=\"actions\"\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button type=\"button\" mat-menu-item (click)=\"changeStartDateOfSchedulerAndReloadResourcesAndEvents()\">\r\n        {{ \"global.refresh\" | translate }}\r\n      </button>\r\n      <button id=\"favorites\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\" style=\"max-width: 100%\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".information\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\"> {{ componentData.componentId + \".startDate\" | translate }} </label>\r\n                  <div class=\"form-control\">\r\n                    <p-calendar\r\n                      showButtonBar=\"true\"\r\n                      [monthNavigator]=\"true\"\r\n                      [yearNavigator]=\"true\"\r\n                      [yearRange]=\"sessionService.calendarYearRange\"\r\n                      class=\"aw-calendar\"\r\n                      appendTo=\"body\"\r\n                      [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                      [showTime]=\"true\"\r\n                      [locale]=\"sessionService.calendarFormat\"\r\n                      [(ngModel)]=\"startViewDate\"\r\n                      [disabled]=\"isReadOpenMode\"\r\n                    ></p-calendar>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">\r\n                    {{ componentData.componentId + \".departureLocation\" | translate }}\r\n                  </label>\r\n                  <div class=\"form-control\">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      [options]=\"flightBaseList\"\r\n                      [(ngModel)]=\"selectedBase\"\r\n                      [showClear]=\"false\"\r\n                      placeholder=\"&nbsp;\"\r\n                      [disabled]=\"isReadOpenMode\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".schedule\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <div class=\"form-control aw-selectbutton-wrapper center-content\">\r\n                  <p-selectButton\r\n                    [options]=\"timeOptionToDisplayList\"\r\n                    (onChange)=\"onTimeOptionChange($event.value)\"\r\n                    [(ngModel)]=\"defaultSplitButtonValue\"\r\n                  >\r\n                  </p-selectButton>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell--12\">\r\n              <div\r\n                [ngClass]=\"{\r\n                  'grid-cell--10': showAircraftAssociationColumn,\r\n                  'grid-cell--12': !showAircraftAssociationColumn\r\n                }\"\r\n                style=\"padding-right: 2px !important;\"\r\n              >\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"scheduler-wrap show\">\r\n                    <bry-scheduler\r\n                      [barMargin]=\"barMargin\"\r\n                      [columns]=\"schedulerConfig['columns']\"\r\n                      [startDate]=\"schedulerConfig['startDate']\"\r\n                      [endDate]=\"schedulerConfig['endDate']\"\r\n                      [timeRanges]=\"schedulerConfig['timeRanges']\"\r\n                      [timeRangesFeature]=\"schedulerConfig['timeRangesFeature']\"\r\n                      [headerContextMenuFeature]=\"schedulerConfig['headerContextMenuFeature']\"\r\n                      [eventContextMenuFeature]=\"schedulerConfig['eventContextMenuFeature']\"\r\n                      [scheduleContextMenuFeature]=\"schedulerConfig['scheduleContextMenuFeature']\"\r\n                      [eventTooltipFeature]=\"schedulerConfig['eventTooltipFeature']\"\r\n                      [resources]=\"flightResources\"\r\n                      [filterBarFeature]=\"schedulerConfig['filterBarFeature']\"\r\n                      [events]=\"flightEvents\"\r\n                      [rowHeight]=\"schedulerConfig['rowHeight']\"\r\n                      [eventRenderer]=\"schedulerConfig['eventRenderer']\"\r\n                      [readOnly]=\"schedulerConfig['readOnly']\"\r\n                      [zoomKeepsOriginalTimespan]=\"schedulerConfig['zoomKeepsOriginalTimespan']\"\r\n                      [zoomOnMouseWheel]=\"schedulerConfig['zoomOnMouseWheel']\"\r\n                      [zoomOnTimeAxisDoubleClick]=\"schedulerConfig['zoomOnTimeAxisDoubleClick']\"\r\n                      [viewPreset]=\"schedulerConfig['viewPreset']\"\r\n                      [zoomLevels]=\"schedulerConfig['zoomLevels']\"\r\n                    >\r\n                    </bry-scheduler>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell--2 availablesAircrafts\" *ngIf=\"showAircraftAssociationColumn\">\r\n                <div *ngFor=\"let aircraft of availablesAircraftsDisplayedInfo\">\r\n                  <div\r\n                    [className]=\"aircraft.borderClassColor\"\r\n                    [pTooltip]=\"\r\n                      getEventTooltip(aircraft.bidoMissionEquipmentLWO, aircraft.runwaySchedulingFlightInfoOutputDTO)\r\n                    \"\r\n                    [tooltipDisabled]=\"aircraft.aircraftStructureIsLoading || !aircraft.aircraftStructureLoaded\"\r\n                    [escape]=\"false\"\r\n                  >\r\n                    <a *ngIf=\"aircraft.aircraft.sn\" (click)=\"openAircraft(aircraft.aircraft.equipmentCode)\">\r\n                      {{ aircraft.aircraft.sn }}\r\n                    </a>\r\n\r\n                    <div *ngIf=\"aircraft.aircraftStructureIsLoading\" class=\"aw-table-loading-indicator\">\r\n                      <div class=\"loading-message center-content\">{{ \"table.loadingData\" | translate }}</div>\r\n                      <div class=\"lds-hourglass center-content\"></div>\r\n                    </div>\r\n\r\n                    <div\r\n                      *ngIf=\"!aircraft.aircraftStructureIsLoading && !aircraft.aircraftStructureLoaded\"\r\n                      class=\"aw-table-loading-indicator\"\r\n                    >\r\n                      <div class=\"loading-message center-content\">\r\n                        {{ componentData.componentId + \".errorLoadingData\" | translate }}\r\n                      </div>\r\n                    </div>\r\n\r\n                    <ng-container *ngIf=\"!aircraft.aircraftStructureIsLoading && aircraft.aircraftStructureLoaded\">\r\n                      <div\r\n                        *ngIf=\"\r\n                          aircraft.bidoMissionEquipmentLWO && aircraft.bidoMissionEquipmentLWO.requestedOpeConfigCode\r\n                        \"\r\n                      >\r\n                        {{ getInstallationsRemovals(aircraft.runwaySchedulingFlightInfoOutputDTO) }}\r\n                      </div>\r\n\r\n                      <div [className]=\"aircraft.potentialLabelClassColor\">\r\n                        {{ potentialLabel }}: {{ getPotentialInHours(aircraft.runwaySchedulingFlightInfoOutputDTO) }}\r\n                      </div>\r\n\r\n                      <div>\r\n                        <div class=\"tieProgressBar\">\r\n                          <label class=\"form-label\">\r\n                            {{ componentData.componentId + \".aircraftTieTarget\" | translate }}\r\n                          </label>\r\n                          <mat-progress-bar mode=\"determinate\" [value]=\"component.FIFTY_PERCENT_THAT_IS_VISUAL_CUE\">\r\n                          </mat-progress-bar>\r\n                        </div>\r\n                        <div class=\"tieProgressBar\">\r\n                          <label class=\"form-label\">\r\n                            {{ componentData.componentId + \".aircraftTieCurrent\" | translate }}\r\n                          </label>\r\n                          <mat-progress-bar\r\n                            mode=\"determinate\"\r\n                            [value]=\"\r\n                              getPercentageOfTieProgressBar(\r\n                                aircraft.runwaySchedulingFlightInfoOutputDTO.aircraftTieTarget,\r\n                                aircraft.runwaySchedulingFlightInfoOutputDTO.aircraftTieCurrent\r\n                              )\r\n                            \"\r\n                          >\r\n                          </mat-progress-bar>\r\n                        </div>\r\n                        <div class=\"tieProgressBar\">\r\n                          <label class=\"form-label\">\r\n                            {{ componentData.componentId + \".fleetTieAverage\" | translate }}\r\n                          </label>\r\n                          <mat-progress-bar\r\n                            mode=\"determinate\"\r\n                            [value]=\"\r\n                              getPercentageOfTieProgressBar(\r\n                                aircraft.runwaySchedulingFlightInfoOutputDTO.aircraftTieTarget,\r\n                                aircraft.runwaySchedulingFlightInfoOutputDTO.fleetTieAverage\r\n                              )\r\n                            \"\r\n                          >\r\n                          </mat-progress-bar>\r\n                        </div>\r\n                      </div>\r\n                    </ng-container>\r\n                    <div class=\"center-content\">\r\n                      <i\r\n                        class=\"fa fa-fw fa-link aw-icon ng-star-inserted tooltip\"\r\n                        aria-hidden=\"true\"\r\n                        (click)=\"associateAircraft(aircraft)\"\r\n                      >\r\n                        <span class=\"tooltiptext\">{{\r\n                          componentData.componentId + \".tooltipAssociate\" | translate\r\n                        }}</span>\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/flight-operations/runway-scheduling/form/runway-scheduling-form.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/runway-scheduling/form/runway-scheduling-form.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .pointer {\n  cursor: pointer !important; }\n\n:host .tieProgressBar {\n  margin-top: 8px; }\n\n:host ::ng-deep button.aw-btn {\n  margin-left: 8px; }\n\n:host ::ng-deep div.slider-row {\n  display: flex;\n  justify-content: flex-end; }\n\n:host ::ng-deep .time-resolution {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  margin: 0 calc(2 * 8px);\n  margin-bottom: 1em; }\n\n:host ::ng-deep .time-resolution p-slider {\n    width: 10rem; }\n\n:host .scheduler-wrap {\n  height: 75vh;\n  visibility: hidden; }\n\n:host .scheduler-wrap.show {\n    visibility: visible; }\n\n:host ::ng-deep .center-content {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n:host ::ng-deep .aircraft-default {\n  color: black;\n  font-family: \"LatoLatinWeb\";\n  font-size: 0.875rem;\n  font-weight: 400;\n  padding: 5px;\n  margin: auto;\n  box-sizing: border-box !important;\n  border-radius: 16px;\n  border: solid 1px;\n  min-width: 190px !important;\n  margin-bottom: 2px;\n  margin-top: 2px;\n  background-color: #fff !important;\n  justify-content: left; }\n\n:host ::ng-deep .no-aircraft-assigned {\n  color: #a82525 !important;\n  justify-content: center !important;\n  text-align: center !important;\n  border-color: grey !important; }\n\n:host ::ng-deep .aircraft-default {\n  border-color: grey !important; }\n\n:host ::ng-deep .aircraft-status-ok {\n  border-color: #4caf50 !important; }\n\n:host ::ng-deep .aircraft-status-warning {\n  border-color: #ffc107 !important; }\n\n:host ::ng-deep .aircraft-status-nok {\n  border-color: #f6685e !important; }\n\n:host ::ng-deep .red-label {\n  color: #a82525 !important; }\n\n:host ::ng-deep .on-click-remove-flight-association {\n  color: black !important;\n  transition-property: opacity;\n  position: absolute;\n  top: 2px;\n  right: 2px; }\n\n:host ::ng-deep .availablesAircrafts {\n  overflow-y: auto;\n  height: 75vh;\n  padding-left: 0px !important; }\n\n:host ::ng-deep .active-overload {\n  outline: 2px solid #2196f3;\n  outline-offset: 3px;\n  font-weight: bold !important; }\n\n:host ::ng-deep a {\n  color: #01579b !important;\n  border-bottom-color: transparent;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  cursor: pointer;\n  transition: border-bottom-color 0.25s ease-in-out; }\n\n:host ::ng-deep .column-label {\n  font-weight: 400; }\n\n:host ::ng-deep .column-label:before {\n  content: \"\\2022\";\n  color: #2196f3;\n  margin-right: 0.6em; }\n\n:host .tooltip {\n  position: relative; }\n\n:host .tooltiptext {\n  font-family: \"LatoLatinWeb\";\n  font-size: 0.875rem;\n  font-weight: 400;\n  visibility: hidden;\n  width: 120px;\n  background-color: #555;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 125%;\n  left: 50%;\n  margin-left: -60px;\n  opacity: 0;\n  transition: opacity 0.3s; }\n\n:host .tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #555 transparent transparent transparent; }\n\n:host .tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9mbGlnaHQtb3BlcmF0aW9ucy9ydW53YXktc2NoZWR1bGluZy9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXGZsaWdodC1vcGVyYXRpb25zXFxydW53YXktc2NoZWR1bGluZ1xcZm9ybVxccnVud2F5LXNjaGVkdWxpbmctZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLDBCQUEwQixFQUFBOztBQUY5QjtFQU1JLGVBQWUsRUFBQTs7QUFObkI7RUFVSSxnQkFBZ0IsRUFBQTs7QUFWcEI7RUFjSSxhQUFhO0VBQ2IseUJBQXlCLEVBQUE7O0FBZjdCO0VBbUJJLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUFvQztFQUNwQyxrQkFBa0IsRUFBQTs7QUF2QnRCO0lBeUJNLFlBQVksRUFBQTs7QUF6QmxCO0VBOEJJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUEvQnRCO0lBaUNNLG1CQUFtQixFQUFBOztBQWpDekI7RUFzQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUF4Q3ZCO0VBNENJLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlDQUFzRDtFQUN0RCxxQkFBcUIsRUFBQTs7QUF6RHpCO0VBNkRJLHlCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMsNkJBQTZCO0VBQzdCLDZCQUE2QixFQUFBOztBQWhFakM7RUFvRUksNkJBQTZCLEVBQUE7O0FBcEVqQztFQXdFSSxnQ0FBc0MsRUFBQTs7QUF4RTFDO0VBNEVJLGdDQUFnQyxFQUFBOztBQTVFcEM7RUFnRkksZ0NBQW9DLEVBQUE7O0FBaEZ4QztFQW9GSSx5QkFBNEIsRUFBQTs7QUFwRmhDO0VBd0ZJLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVLEVBQUE7O0FBNUZkO0VBZ0dJLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCLEVBQUE7O0FBbEdoQztFQXNHSSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLDRCQUE0QixFQUFBOztBQXhHaEM7RUE0R0kseUJBQStCO0VBQy9CLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixpREFBaUQsRUFBQTs7QUFqSHJEO0VBcUhJLGdCQUFnQixFQUFBOztBQXJIcEI7RUF5SEksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUEzSHZCO0VBK0hJLGtCQUFrQixFQUFBOztBQS9IdEI7RUFtSUksMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHdCQUF3QixFQUFBOztBQW5KNUI7RUF1SkksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHNEQUFzRCxFQUFBOztBQTlKMUQ7RUFrS0ksbUJBQW1CO0VBQ25CLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vZmxpZ2h0LW9wZXJhdGlvbnMvcnVud2F5LXNjaGVkdWxpbmcvZm9ybS9ydW53YXktc2NoZWR1bGluZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRpZVByb2dyZXNzQmFyIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCBidXR0b24uYXctYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgZGl2LnNsaWRlci1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLnRpbWUtcmVzb2x1dGlvbiB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW46IDAgY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBwLXNsaWRlciB7XHJcbiAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zY2hlZHVsZXItd3JhcCB7XHJcbiAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAmLnNob3cge1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5jZW50ZXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5haXJjcmFmdC1kZWZhdWx0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XHJcbiAgICBtaW4td2lkdGg6IDE5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm5vLWFpcmNyYWZ0LWFzc2lnbmVkIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZXkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuYWlyY3JhZnQtZGVmYXVsdCB7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZXkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuYWlyY3JhZnQtc3RhdHVzLW9rIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGdyZWVuLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5haXJjcmFmdC1zdGF0dXMtd2FybmluZyB7XHJcbiAgICBib3JkZXItY29sb3I6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuYWlyY3JhZnQtc3RhdHVzLW5vayB7XHJcbiAgICBib3JkZXItY29sb3I6ICRyZWQtbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLnJlZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogJHJlZC1kYXJrMSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5vbi1jbGljay1yZW1vdmUtZmxpZ2h0LWFzc29jaWF0aW9uIHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgcmlnaHQ6IDJweDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuYXZhaWxhYmxlc0FpcmNyYWZ0cyB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA3NXZoO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuYWN0aXZlLW92ZXJsb2FkIHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCAjMjE5NmYzO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgYSB7XHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLmNvbHVtbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5jb2x1bW4tbGFiZWw6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMDIyXCI7XHJcbiAgICBjb2xvcjogIzIxOTZmMztcclxuICAgIG1hcmdpbi1yaWdodDogMC42ZW07XHJcbiAgfVxyXG5cclxuICAudG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAudG9vbHRpcHRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvdHRvbTogMTI1JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcbiAgfVxyXG5cclxuICAudG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzU1NSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/flight-operations/runway-scheduling/form/runway-scheduling-form.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/flight-operations/runway-scheduling/form/runway-scheduling-form.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: RunwaySchedulingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunwaySchedulingFormComponent", function() { return RunwaySchedulingFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var bryntum_scheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bryntum-scheduler */ "./external/scheduler/build/scheduler.module.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/scheduler/scheduler.component */ "./src/app/shared/components/scheduler/scheduler.component.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/control-config-constants */ "./src/app/shared/constants/control-config-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/constants/lang-constants */ "./src/app/shared/constants/lang-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _flight_form_flight_flight_form_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../flight/form/flight/flight-form.service */ "./src/app/main/flight-operations/flight/form/flight/flight-form.service.ts");
/* harmony import */ var _flight_search_search_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../flight/search/search.service */ "./src/app/main/flight-operations/flight/search/search.service.ts");
/* harmony import */ var _scheduling_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../scheduling.service */ "./src/app/main/flight-operations/runway-scheduling/scheduling.service.ts");
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

























var RunwaySchedulingFormComponent = /** @class */ (function (_super) {
    __extends(RunwaySchedulingFormComponent, _super);
    function RunwaySchedulingFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, schedulingService, flightFormService, propertiesService, translateService, confirmationService, searchService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.schedulingService = schedulingService;
        _this.flightFormService = flightFormService;
        _this.propertiesService = propertiesService;
        _this.translateService = translateService;
        _this.confirmationService = confirmationService;
        _this.searchService = searchService;
        _this.barMargin = 10;
        _this.missionFlightCounter = 0;
        _this.flightEvents = [];
        _this.eventCounter = 0;
        _this.nbDecimalOnPotential = 2;
        _this.component = RunwaySchedulingFormComponent_1;
        // Bryntum init
        _this.init();
        _this.loadTimeOptionsToDiplayList();
        return _this;
    }
    RunwaySchedulingFormComponent_1 = RunwaySchedulingFormComponent;
    RunwaySchedulingFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__["ComponentConstants"].FLI_RUNWAY_SCHEDULING_FORM;
    };
    RunwaySchedulingFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.init();
    };
    RunwaySchedulingFormComponent.prototype.onReload = function () {
        this.startViewDate = new Date();
        this.hideAvailablesAircraftBlock();
        this.defaultSplitButtonValue = this.component.DURATION_24_HOURS_HOURS_UNIT;
        this.onTimeOptionChangeLastValue = this.component.DURATION_24_HOURS_HOURS_UNIT;
        this.roundStartViewDateToThirtyMinutes();
        this.onTimeOptionChange(this.onTimeOptionChangeLastValue);
        this.loadAvailableFlights();
    };
    RunwaySchedulingFormComponent.prototype.init = function () {
        this.flightBaseList = [];
        this.showAircraftAssociationColumn = false;
        this.defaultSplitButtonValue = this.component.DURATION_24_HOURS_HOURS_UNIT;
        this.onTimeOptionChangeLastValue = this.component.DURATION_24_HOURS_HOURS_UNIT;
        this.loadStartViewDateEndViewDate(this.component.DURATION_24_HOURS_HOURS_UNIT);
        this.loadFlightBaseList();
        this.loadOperationalStatusList();
        this.loadSchedulerConfig();
        this.selectedBase = '2';
        this.loadBidoMissionEquipmentByCriteria(this.startViewDate, this.endViewDate);
        this.displayComponentContext(this.context, this.isCreateOpenMode);
        this.loadAvailableFlights();
    };
    RunwaySchedulingFormComponent.prototype.loadFlightBaseList = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__["GenericPropertyConstants"].FLIGHT_BASE_MAP).subscribe(function (results) {
            _this.flightBaseList = _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_21__["SelectItemUtils"].fromLabelValues(_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_20__["ListUtils"].orEmpty(results));
        });
    };
    RunwaySchedulingFormComponent.prototype.loadOperationalStatusList = function () {
        var _this = this;
        this.schedulingService.getOperationalStatusMap().subscribe(function (result) { return (_this.operationalStatusList = result); });
    };
    RunwaySchedulingFormComponent.prototype.loadBidoMissionEquipmentByCriteria = function (startViewDate, endViewDate) {
        var _this = this;
        var criteria = {
            departureLocation: this.selectedBase,
            flightEndDateFrom: startViewDate,
            flightDateTo: endViewDate,
            hrModuleActivated: true,
            onlyNotAffectedFlights: false
        };
        this.searchService
            .findAllBidoMissionEquipmentByCriteria(criteria)
            .subscribe(function (resultfindAllBidoMissionEquipmentByCriteria) {
            if (!!resultfindAllBidoMissionEquipmentByCriteria && !!resultfindAllBidoMissionEquipmentByCriteria.list) {
                _this.bidoMissionEquipmentLWOArray = resultfindAllBidoMissionEquipmentByCriteria.list;
                _this.flightResources = [];
                _this.flightEvents = [];
                _this.bidoMissionEquipmentLWOArray.forEach(function (bidoMissionEquipment) {
                    _this.buildFlightResource(bidoMissionEquipment);
                });
            }
        });
    };
    RunwaySchedulingFormComponent.prototype.loadAvailableFlights = function () {
        var _this = this;
        var criteria = {};
        this.schedulingService
            .findAllAircraftByCriteria(criteria)
            .subscribe(function (results) {
            _this.availablesAircraftsDto = results.list;
        });
    };
    RunwaySchedulingFormComponent.prototype.loadRunwaySchedulingFlightInfoOutputDTOAttributeForFlightEventDisplay = function (bidoMissionEquipmentDTOId, bidoMissionEquipmentLWO) {
        var requestedOpeConfigCode;
        var flightTime;
        if (!!bidoMissionEquipmentLWO) {
            requestedOpeConfigCode = bidoMissionEquipmentLWO.requestedOpeConfigCode;
            if (!!bidoMissionEquipmentLWO.startDate && !!bidoMissionEquipmentLWO.endDate) {
                flightTime = this.getDurationInTimeDuratonUnit(bidoMissionEquipmentLWO.startDate, bidoMissionEquipmentLWO.endDate);
            }
        }
        var bidoRunwaySchedulingFlightInputDTO = {
            bidoMissionEquipmentDTOId: bidoMissionEquipmentDTOId,
            requestedOpeConfigCode: requestedOpeConfigCode,
            flightTime: flightTime,
            flightTimeUnit: this.component.timeDurationUnit
        };
        return this.schedulingService.getRunwaySchedulingFlightInfo(bidoRunwaySchedulingFlightInputDTO);
    };
    RunwaySchedulingFormComponent.prototype.buildAircraftDisplayedInfo = function (aircraft, selectedFlight, requestedOpeConfigCode) {
        var _this = this;
        var bidoMissionEquipmentLWO = selectedFlight.bidoMissionEquipmentLWO;
        var bidoMissionEquipmentDTOId = {
            missionCode: bidoMissionEquipmentLWO.missionCode,
            equipmentCode: bidoMissionEquipmentLWO.equipmentCode,
            occurrence: bidoMissionEquipmentLWO.occurrence
        };
        var runwaySchedulingFlightInfoOutputDTO = {};
        var aircraftDisplayedInfo = {
            aircraft: aircraft,
            bidoMissionEquipmentLWO: bidoMissionEquipmentLWO,
            runwaySchedulingFlightInfoOutputDTO: runwaySchedulingFlightInfoOutputDTO,
            borderClassColor: this.component.AIRCRAFT_DEFAULT_CLASS,
            potentialLabelClassColor: '',
            aircraftStructureIsLoading: true,
            aircraftStructureLoaded: false
        };
        this.availablesAircraftsDisplayedInfo.push(aircraftDisplayedInfo);
        var durationInTimeDuratonUnit = 0;
        if (!!bidoMissionEquipmentLWO && !!bidoMissionEquipmentLWO.startDate && !!bidoMissionEquipmentLWO.endDate) {
            durationInTimeDuratonUnit = this.getDurationInTimeDuratonUnit(bidoMissionEquipmentLWO.startDate, bidoMissionEquipmentLWO.endDate);
        }
        var bidoRunwaySchedulingFlightInputDTO = {
            bidoMissionEquipmentDTOId: bidoMissionEquipmentDTOId,
            allocableEquipmentCode: aircraft.equipmentCode,
            requestedOpeConfigCode: requestedOpeConfigCode,
            flightTime: durationInTimeDuratonUnit,
            flightTimeUnit: this.component.timeDurationUnit
        };
        this.schedulingService
            .getRunwaySchedulingFlightInfo(bidoRunwaySchedulingFlightInputDTO)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            aircraftDisplayedInfo = __assign({}, aircraftDisplayedInfo, { aircraftStructureIsLoading: false });
            _this.availablesAircraftsDisplayedInfo.splice(_this.findAvailablesAircraftsDisplayedInfoIndex(aircraftDisplayedInfo), 1, aircraftDisplayedInfo);
        }))
            .subscribe(function (result) {
            aircraftDisplayedInfo = __assign({}, aircraftDisplayedInfo, { runwaySchedulingFlightInfoOutputDTO: result, aircraftStructureLoaded: true, borderClassColor: _this.getEventColorClass(result), potentialLabelClassColor: _this.getPotentialLabelClass(result) });
        });
    };
    RunwaySchedulingFormComponent.prototype.findAvailablesAircraftsDisplayedInfoIndex = function (aircraftsDisplayedInfo) {
        return this.availablesAircraftsDisplayedInfo.findIndex(function (elt) { return elt.aircraft.equipmentCode === aircraftsDisplayedInfo.aircraft.equipmentCode; });
    };
    RunwaySchedulingFormComponent.prototype.getDurationInTimeDuratonUnit = function (startDate, endDate) {
        var duration = 0;
        if (this.component.secondsInHours.toString().toUpperCase() === 's'.toUpperCase()) {
            duration = moment__WEBPACK_IMPORTED_MODULE_3__(endDate).seconds() - moment__WEBPACK_IMPORTED_MODULE_3__(startDate).seconds();
        }
        else if (this.component.secondsInHours.toString().toUpperCase() === 'm'.toUpperCase()) {
            duration = moment__WEBPACK_IMPORTED_MODULE_3__(endDate).seconds() - moment__WEBPACK_IMPORTED_MODULE_3__(startDate).seconds() / this.component.secondsInMinute;
        }
        else if (this.component.secondsInHours.toString().toUpperCase() === 'h'.toUpperCase()) {
            duration = moment__WEBPACK_IMPORTED_MODULE_3__(endDate).seconds() - moment__WEBPACK_IMPORTED_MODULE_3__(startDate).seconds() / this.component.secondsInHours;
        }
        return duration;
    };
    RunwaySchedulingFormComponent.prototype.buildFlightResource = function (bidoMissionEquipment) {
        var flightResource = {
            id: String(this.generateMissionFlightId()),
            data: bidoMissionEquipment,
            children: []
        };
        this.buildFlightEvent(flightResource);
        this.flightResources.push(flightResource);
        this.flightResources = __spread(this.flightResources);
    };
    RunwaySchedulingFormComponent.prototype.buildFlightEvent = function (flightResource) {
        var _this = this;
        if (!!flightResource.data) {
            var bidoMissionEquipmentLWO = flightResource.data;
            var startDate = bidoMissionEquipmentLWO.startDate;
            var endDate = bidoMissionEquipmentLWO.endDate;
            var eventModel_1 = {
                id: this.generateSchedulerEventId(),
                resourceId: flightResource.id,
                eventType: '',
                startDate: startDate,
                endDate: endDate,
                bidoMissionEquipmentLWO: bidoMissionEquipmentLWO,
                _isSelected: false,
                eventColor: 'null',
                eventStyle: 'null'
            };
            if (!this.isEmptyEquipmentCode(bidoMissionEquipmentLWO)) {
                var name_1 = this.getName(flightResource.data);
                var bidoMissionEquipmentDTOId = {
                    equipmentCode: bidoMissionEquipmentLWO.equipmentCode,
                    missionCode: bidoMissionEquipmentLWO.missionCode,
                    occurrence: bidoMissionEquipmentLWO.occurrence
                };
                this.loadRunwaySchedulingFlightInfoOutputDTOAttributeForFlightEventDisplay(bidoMissionEquipmentDTOId, bidoMissionEquipmentLWO).subscribe(function (runwaySchedulingFlightInfoOutputDTO) {
                    eventModel_1 = __assign({}, eventModel_1, { name: runwaySchedulingFlightInfoOutputDTO.sn || name_1, runwaySchedulingFlightInfoOutputDTO: runwaySchedulingFlightInfoOutputDTO });
                    _this.flightEvents.push(eventModel_1);
                    _this.flightEvents = __spread(_this.flightEvents);
                });
            }
            else {
                this.flightEvents.push(eventModel_1);
            }
        }
        this.flightEvents = __spread(this.flightEvents);
    };
    RunwaySchedulingFormComponent.prototype.loadStartViewDateEndViewDate = function (timeDurationHoursUnit) {
        if (this.startViewDate == undefined) {
            this.roundStartViewDateToThirtyMinutes();
        }
        this.startDateFormated = moment__WEBPACK_IMPORTED_MODULE_3__(this.startViewDate).format(this.sessionService.dateTimeFormatMomentJS);
        this.endViewDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.startViewDate)
            .add(timeDurationHoursUnit, 'hours')
            .toDate();
    };
    RunwaySchedulingFormComponent.prototype.loadTimeOptionsToDiplayList = function () {
        var _this = this;
        var label6Hours = this.getTranslateKey(this.component.DURATION_6_HOURS_KEY);
        var label12Hours = this.getTranslateKey(this.component.DURATION_12_HOURS_KEY);
        var label24Hours = this.getTranslateKey(this.component.DURATION_24_HOURS_KEY);
        var labe7days = this.getTranslateKey(this.component.DURATION_7_DAYS_KEY);
        this.translateService.get([label6Hours, label12Hours, label24Hours, labe7days]).subscribe({
            next: function (results) {
                _this.timeOptionToDisplayList = [
                    {
                        label: results[label6Hours],
                        value: _this.component.DURATION_6_HOURS_HOURS_UNIT
                    },
                    {
                        label: results[label12Hours],
                        value: _this.component.DURATION_12_HOURS_HOURS_UNIT
                    },
                    {
                        label: results[label24Hours],
                        value: _this.component.DURATION_24_HOURS_HOURS_UNIT
                    },
                    {
                        label: results[labe7days],
                        value: _this.component.DURATION_7_DAYS_HOURS_UNIT
                    }
                ];
            }
        });
    };
    RunwaySchedulingFormComponent.prototype.loadSchedulerConfig = function () {
        var _this = this;
        this.schedulerConfig = {
            timeRangesFeature: false,
            enableHeaderContextMenu: false,
            zoomOnMouseWheel: false,
            zoomOnTimeAxisDoubleClick: false,
            cellEditFeature: false,
            dependenciesFeature: false,
            dependencyEditFeature: false,
            eventContextMenuFeature: false,
            scheduleContextMenuFeature: false,
            eventDragCreateFeature: false,
            eventDragFeature: false,
            eventEditFeature: false,
            columnLinesFeature: false,
            columnPickerFeature: false,
            columnReorderFeature: false,
            columnResizeFeature: true,
            groupFeature: false,
            sortFeature: false,
            eventResizeFeature: false,
            columnDragToolbarFeature: false,
            zoomKeepsOriginalTimespan: false,
            readOnly: true,
            timeRanges: true,
            filterBarFeature: true,
            eventFilterFeature: false,
            headerContextMenuFeature: {
                processItems: function (_a) {
                    var items = _a.items;
                    // Hook to disabled menuItems en right click
                    items.length = 0;
                }
            },
            cellTooltipFeature: false,
            scheduleTooltipFeature: false,
            eventTooltipFeature: {
                // Tooltip configs can be used here
                align: 'l-r',
                // A custom HTML template
                template: function (_a) {
                    var eventRecord = _a.eventRecord;
                    return _this.getEventTooltip(eventRecord.data.bidoMissionEquipmentLWO, eventRecord.data.runwaySchedulingFlightInfoOutputDTO);
                }
            },
            rowHeight: this.component.SCHEDULER_ROW_HEIGHT,
            eventRenderer: function (event) { return _this.getEventRenderer(event); }
        };
        this.setSchedulerDate();
        this.setSchedulerFlightColumn();
        this.setZoomLevelsConfig();
    };
    RunwaySchedulingFormComponent.prototype.setSchedulerDate = function () {
        this.schedulerConfig = __assign({}, this.schedulerConfig, { startDate: this.startViewDate, endDate: this.endViewDate, viewPreset: this.component.presetHourAndDay });
    };
    RunwaySchedulingFormComponent.prototype.setSchedulerFlightColumn = function () {
        var _this = this;
        this.schedulerConfig = __assign({}, this.schedulerConfig, { columns: [
                {
                    text: this.translateService.instant(this.getComponentName() + ".flights"),
                    width: 200,
                    htmlEncode: false,
                    editor: false,
                    enableCellContextMenu: false,
                    sortable: function (data1, data2) { return _this.compareToSort(data1.data, data2.data); },
                    filterable: function (_a) {
                        var value = _a.value, record = _a.record;
                        return _this.filterMissionColumn(record.data, value);
                    },
                    renderer: function (_a) {
                        var record = _a.record;
                        return _this.getMissionColumnRenderer(record.data);
                    }
                }
            ] });
    };
    RunwaySchedulingFormComponent.prototype.setZoomLevelsConfig = function () {
        this.setCustomPresetConfig();
        var zoomLevels = [
            { width: 50, increment: 15, resolution: 30, preset: 'minuteAndHour', resolutionUnit: 'minute' },
            { width: 50, increment: 30, resolution: 30, preset: 'minuteAndHourCustom', resolutionUnit: 'minute' },
            { width: 50, increment: 1, resolution: 30, preset: 'hourAndDay', resolutionUnit: 'hour' },
            { width: 43, increment: 6, resolution: 30, preset: 'hourAndDay', resolutionUnit: 'hour' } // 7j/6day = 28 ; 1200/28 28*50 ~ 43px
        ];
        this.schedulerConfig = __assign({}, this.schedulerConfig, { zoomLevels: zoomLevels });
    };
    RunwaySchedulingFormComponent.prototype.setCustomPresetConfig = function () {
        var minuteAndHourCustom;
        minuteAndHourCustom = {
            tickWidth: 100,
            tickHeight: 60,
            displayDateFormat: 'll LT',
            shiftIncrement: 1,
            shiftUnit: 'hour',
            defaultSpan: 24,
            timeResolution: {
                unit: 'minute',
                increment: 30
            },
            headerConfig: {
                middle: {
                    unit: 'minute',
                    increment: '30',
                    dateFormat: 'LT'
                },
                top: {
                    unit: 'hour',
                    dateFormat: 'ddd MM/DD'
                }
            }
        };
        bryntum_scheduler__WEBPACK_IMPORTED_MODULE_2__["PresetManager"].registerPreset('minuteAndHourCustom', minuteAndHourCustom);
    };
    RunwaySchedulingFormComponent.prototype.getMissionColumnRenderer = function (data) {
        var missionCodeLabel = this.translateService.instant(this.getComponentName() + ".mission");
        var flightChronoLabel = this.translateService.instant(this.getComponentName() + ".flightChrono");
        var operationalConfigLabel = this.translateService.instant(this.getComponentName() + ".operationalConfig");
        var returnTemplate = '';
        if (!!data.data) {
            var operationalConfigTemplate = '';
            if (data.data.requestedOpeConfigCode) {
                var requestedOpeConfigCode = data.data.requestedOpeConfigCode;
                operationalConfigTemplate = "<a id=" + data.id + ">\n              <span id=" + data.id + "\n                    class=\"" + this.component.COLUMN_LABEL_CLASS + "\n                     " + this.component.ON_CLICK_OPEN_OPERATIONAL_CONFIGURATION_CLASS + "\">\n                    " + operationalConfigLabel + ": " + requestedOpeConfigCode + "\n              </span>\n          </a>";
            }
            returnTemplate = "\n          <div>\n              <a id=" + data.id + ">\n                  <span id=" + data.id + " class=\"" + this.component.COLUMN_LABEL_CLASS + "\n                  " + this.component.ON_CLICK_OPEN_MISSION_CLASS + "\">\n                      " + missionCodeLabel + ": " + data.data.missionCode + "\n                  </span>\n              </a>\n              </br>\n              <a id=" + data.id + ">\n                  <span id=" + data.id + " class=\"" + this.component.COLUMN_LABEL_CLASS + "\n                   " + this.component.ON_CLICK_OPEN_FLIGHT_CLASS + "\">\n                      " + flightChronoLabel + ": " + data.data.chronoNumber + "\n                  </span>\n              </a>\n              </br>\n              " + operationalConfigTemplate + "\n          </div>\n        ";
        }
        return returnTemplate;
    };
    RunwaySchedulingFormComponent.prototype.getEventTooltip = function (bidoMissionEquipmentLWO, runwaySchedulingFlightInfoOutputDTO) {
        var eventHTML = '<table><tbody>';
        if (!!runwaySchedulingFlightInfoOutputDTO) {
            var msnRowHTML = this.getMSNRow(runwaySchedulingFlightInfoOutputDTO);
            eventHTML += msnRowHTML;
        }
        var startDateRowHTML = this.getStartDateRow(bidoMissionEquipmentLWO);
        if (!!startDateRowHTML) {
            eventHTML += startDateRowHTML;
        }
        var endDateRowHTML = this.getEndDateRow(bidoMissionEquipmentLWO);
        if (!!endDateRowHTML) {
            eventHTML += endDateRowHTML;
        }
        if (!!runwaySchedulingFlightInfoOutputDTO) {
            var aicraftStateRowHTML = this.getAicraftStateRow(runwaySchedulingFlightInfoOutputDTO);
            if (!!aicraftStateRowHTML) {
                eventHTML += aicraftStateRowHTML;
            }
            var nbInstallsRemovalsHTML = this.getInstallationsRemovalsRow(runwaySchedulingFlightInfoOutputDTO);
            eventHTML += nbInstallsRemovalsHTML;
            var potentialStatus = this.potentialStatusRow(runwaySchedulingFlightInfoOutputDTO);
            eventHTML += potentialStatus;
            var taskRowHTML = this.getTaskRow(runwaySchedulingFlightInfoOutputDTO);
            if (!!taskRowHTML) {
                eventHTML += taskRowHTML;
            }
            var defectRowHTML = this.getDefectRow(runwaySchedulingFlightInfoOutputDTO);
            if (!!defectRowHTML) {
                eventHTML += defectRowHTML;
            }
            var workPackageRowHTML = this.getWorkPackageRow(runwaySchedulingFlightInfoOutputDTO);
            if (!!workPackageRowHTML) {
                eventHTML += workPackageRowHTML;
            }
            var fuelDeltaRowHTML = this.getFuelDeltaRow(runwaySchedulingFlightInfoOutputDTO);
            if (!!fuelDeltaRowHTML) {
                eventHTML += fuelDeltaRowHTML;
            }
        }
        eventHTML += '</tbody></table>';
        return eventHTML;
    };
    RunwaySchedulingFormComponent.prototype.potentialStatusRow = function (runwaySchedulingFlightInfoOutputDTO) {
        var potentialStatusRowHTML;
        var insufficiantLabel = this.translateService.instant(this.getComponentName() + ".insufficientPotential");
        var sufficiantLabel = this.translateService.instant(this.getComponentName() + ".sufficientPotential");
        var potentialStatus = runwaySchedulingFlightInfoOutputDTO.potentialStatus === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_7__["ControlConfigConstants"].ICON_GREEN_LED_CODE
            ? sufficiantLabel
            : insufficiantLabel;
        potentialStatusRowHTML = "<tr><td>" + potentialStatus + "</td><tr>";
        return potentialStatusRowHTML;
    };
    RunwaySchedulingFormComponent.prototype.getInstallationsRemovalsRow = function (runwaySchedulingFlightInfoOutputDTO) {
        var installationsRemovalsRowHTML;
        var installRemovalsLabel = this.translateService.instant(this.getComponentName() + ".requiredInstallationsRemovals");
        var installations = this.getInstallations(runwaySchedulingFlightInfoOutputDTO);
        var removals = this.getRemovals(runwaySchedulingFlightInfoOutputDTO);
        var installationsRemovals = !!installations
            ? installations + ' - ' + removals
            : RunwaySchedulingFormComponent_1.NO_ATTRIBUTE + ' - ' + RunwaySchedulingFormComponent_1.NO_ATTRIBUTE;
        installationsRemovalsRowHTML = "<tr><td>" + installRemovalsLabel + ":</td><td>" + installationsRemovals + "</td><tr>";
        return installationsRemovalsRowHTML;
    };
    RunwaySchedulingFormComponent.prototype.getWorkPackageRow = function (runwaySchedulingFlightInfoOutputDTO) {
        var workPackageRowHTML;
        if (!!runwaySchedulingFlightInfoOutputDTO.equipmentStatus) {
            var workPackageLabel = this.translateService.instant(this.getComponentName() + ".workPackage");
            var woNumber = this.getWorkPackagesNumber(runwaySchedulingFlightInfoOutputDTO);
            workPackageRowHTML = "<tr><td>" + workPackageLabel + ":</td><td>" + woNumber + "</td><tr>";
        }
        return workPackageRowHTML;
    };
    RunwaySchedulingFormComponent.prototype.getFuelDeltaRow = function (runwaySchedulingFlightInfoOutputDTO) {
        var fuelDeltaRowHTML;
        if (runwaySchedulingFlightInfoOutputDTO && !!runwaySchedulingFlightInfoOutputDTO.equipmentStatus) {
            var fuelDeltaLabel = this.translateService.instant(this.getComponentName() + ".fuelDelta");
            var fuelDelta = this.getFuelDeltaNumber(runwaySchedulingFlightInfoOutputDTO);
            var fuelDeltaUnit = this.getFuelDeltaUnit(runwaySchedulingFlightInfoOutputDTO);
            fuelDeltaRowHTML = "<tr><td>" + fuelDeltaLabel + ":</td><td>" + fuelDelta + " " + fuelDeltaUnit + "</td><tr>";
        }
        return fuelDeltaRowHTML;
    };
    RunwaySchedulingFormComponent.prototype.getDefectRow = function (runwaySchedulingFlightInfoOutputDTO) {
        var defectRowHTML;
        if (!!runwaySchedulingFlightInfoOutputDTO.equipmentStatus) {
            var defectsLabel = this.translateService.instant(this.getComponentName() + ".defects");
            var defectNumber = this.getDefectsNumber(runwaySchedulingFlightInfoOutputDTO);
            defectRowHTML = "<tr><td>" + defectsLabel + ":</td><td>" + defectNumber + "</td><tr>";
        }
        return defectRowHTML;
    };
    RunwaySchedulingFormComponent.prototype.getTaskRow = function (runwaySchedulingFlightInfoOutputDTO) {
        var tasksRowHTML;
        if (!!runwaySchedulingFlightInfoOutputDTO.equipmentStatus) {
            var tasksLabel = this.translateService.instant(this.getComponentName() + ".tasks");
            var taskNumber = this.getTasksNumber(runwaySchedulingFlightInfoOutputDTO);
            tasksRowHTML = "<tr><td>" + tasksLabel + ":</td><td>" + taskNumber + "</td><tr>";
        }
        return tasksRowHTML;
    };
    RunwaySchedulingFormComponent.prototype.getAicraftStateRow = function (runwaySchedulingFlightInfoOutputDTO) {
        var acStateRowHTML;
        if (!!runwaySchedulingFlightInfoOutputDTO.equipmentStatus) {
            var acStateLabel = this.translateService.instant(this.getComponentName() + ".acState");
            var acState = this.findOperationalStatusLabelByValue(runwaySchedulingFlightInfoOutputDTO.equipmentStatus);
            acStateRowHTML = "<tr><td>" + acStateLabel + ":</td><td>" + acState + "</td><tr>";
        }
        return acStateRowHTML;
    };
    RunwaySchedulingFormComponent.prototype.getMSNRow = function (runwaySchedulingFlightInfoOutputDTO) {
        return "<tr><td>" + runwaySchedulingFlightInfoOutputDTO.sn + "</td><tr>";
    };
    RunwaySchedulingFormComponent.prototype.getStartDateRow = function (bidoMissionEquipmentLWO) {
        var startDateRowHTML;
        if (!!bidoMissionEquipmentLWO.startDate) {
            var startDateLabel = this.translateService.instant(this.getComponentName() + ".startDate");
            var startDateValue = moment__WEBPACK_IMPORTED_MODULE_3__(bidoMissionEquipmentLWO.startDate).format(this.sessionService.dateTimeFormatMomentJS);
            startDateRowHTML = "<tr><td>" + startDateLabel + ":</td><td>" + startDateValue + "</td><tr>";
        }
        return startDateRowHTML;
    };
    RunwaySchedulingFormComponent.prototype.getEndDateRow = function (bidoMissionEquipmentLWO) {
        var endDateRowHTML;
        if (!!bidoMissionEquipmentLWO.endDate) {
            var endDateLabel = this.translateService.instant(this.getComponentName() + ".endDate");
            endDateRowHTML = moment__WEBPACK_IMPORTED_MODULE_3__(bidoMissionEquipmentLWO.endDate).format(this.sessionService.dateTimeFormatMomentJS);
            endDateRowHTML = "<tr><td>" + endDateLabel + ":</td><td>" + endDateRowHTML + "</td><tr>";
        }
        return endDateRowHTML;
    };
    RunwaySchedulingFormComponent.prototype.getEventRenderer = function (event) {
        var eventHTML = '';
        var eventModel = event.tplData.event.data;
        var bidoMissionEquipmentLWO = eventModel.bidoMissionEquipmentLWO;
        var runwaySchedulingFlightInfoOutputDTO = eventModel.runwaySchedulingFlightInfoOutputDTO;
        if (this.isEmptyEquipmentCode(bidoMissionEquipmentLWO)) {
            var noAircraftAssignedOnFlightLabel = this.translateService.instant(this.getComponentName() + ".noAircraftAssigned");
            var NO_AIRCRAFT = this.component.AIRCRAFT_DEFAULT_CLASS +
                ' ' +
                this.component.NO_AIRCRAFT_ASSIGNED_CLASS +
                ' ' +
                this.component.ON_CLICK_SET_SELECTED_FLIGHT_CLASS;
            if (eventModel._isSelected) {
                NO_AIRCRAFT = NO_AIRCRAFT + ' ' + this.component.ACTIVE_OVERLOAD;
            }
            event.tplData.cls += NO_AIRCRAFT;
            eventHTML = "\n                <div id=" + bidoMissionEquipmentLWO.chronoNumber + ">\n                    " + noAircraftAssignedOnFlightLabel + "\n                </div>\n      ";
        }
        else {
            var installationsRemovalsHTML = '';
            if (!!bidoMissionEquipmentLWO && !!bidoMissionEquipmentLWO.requestedOpeConfigCode) {
                var installationsRemovals = this.getInstallationsRemovals(runwaySchedulingFlightInfoOutputDTO);
                installationsRemovalsHTML = "\n          <div>\n            " + installationsRemovals + "\n          </div>";
            }
            var potential = this.getPotentialInHours(runwaySchedulingFlightInfoOutputDTO);
            var eventColorClass = this.getEventColorClass(runwaySchedulingFlightInfoOutputDTO);
            var potentialLabelClass = this.getPotentialLabelClass(runwaySchedulingFlightInfoOutputDTO);
            event.tplData.cls += eventColorClass;
            eventHTML = "\n      <div>\n        <div>\n          <a id=" + event.resourceRecord.id + "\n            class=" + this.component.ON_CLICK_OPEN_AIRCRAFT_SELECT_CLASS + ">\n                " + eventModel.name + "\n          </a>\n          <i class=\"material-icons " + this.component.ON_CLICK_REMOVE_ASSOCIATION_CLASS + "\">\n            close\n          </i>\n        </div>\n          " + installationsRemovalsHTML + "\n        <div class=" + potentialLabelClass + "> " + this.potentialLabel + ": " + potential + "</div>\n      </div>\n      ";
        }
        return eventHTML;
    };
    RunwaySchedulingFormComponent.prototype.getPotentialInHours = function (runwaySchedulingFlightInfoOutputDTO) {
        var durationInpoint = this.component.NO_ATTRIBUTE;
        if (!!runwaySchedulingFlightInfoOutputDTO &&
            !!runwaySchedulingFlightInfoOutputDTO.potential &&
            !!runwaySchedulingFlightInfoOutputDTO.potentialUnit) {
            if (runwaySchedulingFlightInfoOutputDTO.potentialUnit.toUpperCase() === 's'.toUpperCase()) {
                durationInpoint = (runwaySchedulingFlightInfoOutputDTO.potential / this.component.secondsInHours).toFixed(this.nbDecimalOnPotential);
            }
            else if (runwaySchedulingFlightInfoOutputDTO.potentialUnit.toUpperCase() === 'm'.toUpperCase()) {
                durationInpoint = (runwaySchedulingFlightInfoOutputDTO.potential / this.component.minutesInHour).toFixed(this.nbDecimalOnPotential);
            }
            else if (runwaySchedulingFlightInfoOutputDTO.potentialUnit.toUpperCase() === 'h'.toUpperCase()) {
                durationInpoint = runwaySchedulingFlightInfoOutputDTO.potential.toFixed(this.nbDecimalOnPotential);
            }
        }
        durationInpoint += ' ' + this.component.potentialUnitLabel;
        return durationInpoint;
    };
    RunwaySchedulingFormComponent.prototype.getPotentialLabelClass = function (runwaySchedulingFlightInfoOutputDTO) {
        var potentialLabelClass = '';
        if (!!runwaySchedulingFlightInfoOutputDTO &&
            !!runwaySchedulingFlightInfoOutputDTO.potentialStatus &&
            _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_7__["ControlConfigConstants"].ICON_RED === runwaySchedulingFlightInfoOutputDTO.potentialStatus) {
            potentialLabelClass = this.component.RED_LABEL_CLASS;
        }
        return potentialLabelClass;
    };
    RunwaySchedulingFormComponent.prototype.getEventColorClass = function (runwaySchedulingFlightInfoOutputDTO) {
        var statusClass = this.component.AIRCRAFT_DEFAULT_CLASS;
        if (!!runwaySchedulingFlightInfoOutputDTO && !!runwaySchedulingFlightInfoOutputDTO.eventStatus) {
            if (runwaySchedulingFlightInfoOutputDTO.eventStatus === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_7__["ControlConfigConstants"].ICON_GREEN) {
                statusClass += ' ' + this.component.AIRCRAFT_STATUS_OK_CLASS;
            }
            else if (runwaySchedulingFlightInfoOutputDTO.eventStatus === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_7__["ControlConfigConstants"].ICON_YELLOW) {
                statusClass += ' ' + this.component.AIRCRAFT_STATUS_WARNING_CLASS;
            }
            else if (runwaySchedulingFlightInfoOutputDTO.eventStatus === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_7__["ControlConfigConstants"].ICON_RED) {
                statusClass += ' ' + this.component.AIRCRAFT_STATUS_NOK_CLASS;
            }
        }
        return statusClass;
    };
    Object.defineProperty(RunwaySchedulingFormComponent.prototype, "potentialLabel", {
        get: function () {
            return this.translateService.instant(this.getComponentName() + ".potential");
        },
        enumerable: true,
        configurable: true
    });
    RunwaySchedulingFormComponent.prototype.registerSchedulerListeners = function () {
        if (!!this.scheduler.schedulerEngine) {
            this.scheduler.schedulerEngine.on({
                eventClick: 'onEventClick',
                cellClick: 'onCellClick',
                thisObj: this
            });
        }
    };
    RunwaySchedulingFormComponent.prototype.changeEventSelectedClass = function () {
        if (!!this.scheduler.schedulerEngine) {
            this.scheduler.schedulerEngine.setEventSelectedCls('active-overload');
        }
    };
    // tslint:disable-next-line:no-any
    RunwaySchedulingFormComponent.prototype.onCellClick = function (config) {
        var eventTarget = config.event.target;
        if (eventTarget.classList.contains(this.component.ON_CLICK_OPEN_MISSION_CLASS)) {
            this.openMission(eventTarget.id);
        }
        else if (eventTarget.classList.contains(this.component.ON_CLICK_OPEN_FLIGHT_CLASS)) {
            this.openFlightFromResourceId(eventTarget.id);
        }
        else if (eventTarget.classList.contains(this.component.ON_CLICK_OPEN_OPERATIONAL_CONFIGURATION_CLASS)) {
            this.openOperationalConfigurationFromResourceId(eventTarget.id);
        }
    };
    // tslint:disable-next-line:no-any
    RunwaySchedulingFormComponent.prototype.onEventClick = function (config) {
        this.scheduler.schedulerEngine.clearEventSelection();
        if (!!config.eventRecord) {
            var eventModel = config.eventRecord.data;
            if (!!eventModel && !!eventModel.bidoMissionEquipmentLWO) {
                if (this.isEmptyEquipmentCode(eventModel.bidoMissionEquipmentLWO)) {
                    this.setSelectedFlight(eventModel.bidoMissionEquipmentLWO.chronoNumber);
                }
                else {
                    this.hideAvailablesAircraftBlock();
                }
            }
            if (!!config &&
                !!config.event &&
                !!config.event.target &&
                !!eventModel.bidoMissionEquipmentLWO.equipmentCode &&
                config.event.target.classList.contains(this.component.ON_CLICK_OPEN_AIRCRAFT_SELECT_CLASS)) {
                this.openAircraft(eventModel.bidoMissionEquipmentLWO.equipmentCode);
            }
            if (!!config &&
                !!config.event &&
                !!config.event.target &&
                !!eventModel.bidoMissionEquipmentLWO &&
                config.event.target.classList.contains(this.component.ON_CLICK_REMOVE_ASSOCIATION_CLASS)) {
                this.unAssociateAircraft(eventModel.bidoMissionEquipmentLWO);
            }
        }
    };
    RunwaySchedulingFormComponent.prototype.onTimeOptionChange = function (timeInHours) {
        this.loadStartEndViewDateAndChangeSchedulerConfigAccordingly(timeInHours);
        if (this.onTimeOptionChangeLastValue < timeInHours) {
            this.loadBidoMissionEquipmentByCriteria(this.startViewDate, this.endViewDate);
        }
        this.onTimeOptionChangeLastValue = timeInHours;
    };
    RunwaySchedulingFormComponent.prototype.loadStartEndViewDateAndChangeSchedulerConfigAccordingly = function (timeInHours) {
        this.loadStartViewDateEndViewDate(timeInHours);
        this.scheduler.schedulerEngine.zoomLevel = this.getZoomLevelAccordingToSelectedTimeDurationHoursUnit(timeInHours);
        this.scheduler.schedulerEngine.setTimeSpan(this.startViewDate, this.endViewDate);
        this.scheduler.schedulerEngine.scrollLeft = 0;
    };
    RunwaySchedulingFormComponent.prototype.setSelectedFlight = function (chronoNumber) {
        var _this = this;
        var selectedFlight = this.findFlightEventByChronoNumber(chronoNumber);
        if (!!selectedFlight && this.isEmptyEquipmentCode(selectedFlight.bidoMissionEquipmentLWO)) {
            if (!!this.selectedFlight && selectedFlight !== this.selectedFlight) {
                this.selectedFlight._isSelected = false;
            }
            this.showAvailablesAircraftBlock();
            selectedFlight._isSelected = true;
            this.selectedFlight = selectedFlight;
            var requestedOpeConfigCode_1 = !!selectedFlight && !!selectedFlight.bidoMissionEquipmentLWO.requestedOpeConfigCode
                ? selectedFlight.bidoMissionEquipmentLWO.requestedOpeConfigCode
                : undefined;
            this.availablesAircraftsDisplayedInfo = [];
            this.availablesAircraftsDto.forEach(function (aircraftDto) {
                _this.buildAircraftDisplayedInfo(aircraftDto, selectedFlight, requestedOpeConfigCode_1);
            });
        }
    };
    RunwaySchedulingFormComponent.prototype.unAssociateAircraft = function (bidoMissionEquipmentLWO) {
        var _this = this;
        this.confirmationService.confirm({
            messageKey: this.translateService.instant(this.getComponentName() + ".confirmUnAssociate"),
            accept: function () {
                if (!!bidoMissionEquipmentLWO.equipmentCode && !!bidoMissionEquipmentLWO.chronoNumber) {
                    _this.saveUnAssociateAircraft(bidoMissionEquipmentLWO.chronoNumber, bidoMissionEquipmentLWO.equipmentCode);
                }
            }
        });
    };
    RunwaySchedulingFormComponent.prototype.saveUnAssociateAircraft = function (chrononumber, equipmentCode) {
        var _this = this;
        var flightToDissociate = this.findFlightEventByChronoNumber(chrononumber);
        var equipmentDTO = this.findavailablesAircraftsDtoByEquipmentCode(equipmentCode);
        var saveFlightEquipmentInputDTO = {
            newEquipmentCode: this.component.EMPTY,
            missionCode: flightToDissociate.bidoMissionEquipmentLWO.missionCode,
            familyVariantCode: equipmentDTO.familyVariantCode,
            occurence: flightToDissociate.bidoMissionEquipmentLWO.occurrence,
            previousEquipmentCode: equipmentDTO.equipmentCode
        };
        this.flightFormService.updateFlightEquipment(saveFlightEquipmentInputDTO).subscribe(function () {
            _this.loadBidoMissionEquipmentByCriteria(_this.startViewDate, _this.endViewDate);
        }, function (err) {
            _this.messageService.showErrorMessage(err.error.errorDetail);
        });
    };
    RunwaySchedulingFormComponent.prototype.associateAircraft = function (acToAssociate) {
        var _this = this;
        this.confirmationService.confirm({
            messageKey: this.translateService.instant(this.getComponentName() + ".confirmAircraftAssignment"),
            accept: function () {
                if (!!acToAssociate.aircraft.equipmentCode) {
                    _this.selectedFlight.bidoMissionEquipmentLWO.equipmentCode = acToAssociate.aircraft.equipmentCode;
                    _this.saveFlightAttributeData(acToAssociate);
                }
            }
        });
    };
    RunwaySchedulingFormComponent.prototype.saveFlightAttributeData = function (acToAssociate) {
        var _this = this;
        var missionEquipment = this.findMissionEquipmentTableOutputByChronoNumber(this.selectedFlight.bidoMissionEquipmentLWO.chronoNumber);
        var saveFlightEquipmentInputDTO = {
            newEquipmentCode: acToAssociate.aircraft.equipmentCode,
            missionCode: missionEquipment.missionCode,
            familyVariantCode: acToAssociate.aircraft.familyVariantCode,
            occurence: missionEquipment.occurrence,
            previousEquipmentCode: ''
        };
        this.flightFormService.updateFlightEquipment(saveFlightEquipmentInputDTO).subscribe(function () {
            _this.loadBidoMissionEquipmentByCriteria(_this.startViewDate, _this.endViewDate);
        }, function (err) {
            _this.messageService.showErrorMessage(err.error.errorDetail);
        });
    };
    RunwaySchedulingFormComponent.prototype.getName = function (bidoMissionEquipmentLWO) {
        var name = this.component.NO_ATTRIBUTE;
        if (bidoMissionEquipmentLWO.asset) {
            name = this.getMSNFromLabel(bidoMissionEquipmentLWO.asset);
        }
        return name;
    };
    RunwaySchedulingFormComponent.prototype.getInstallationsRemovals = function (runwaySchedulingFlightInfoOutputDTO) {
        var requiredInstallationsRemovalsLabel = this.translateService.instant(this.getComponentName() + ".requiredInstallationsRemovals");
        var installationsRemovals = "\n      " + requiredInstallationsRemovalsLabel + ":\n       " + this.getInstallations(runwaySchedulingFlightInfoOutputDTO) + " - " + this.getRemovals(runwaySchedulingFlightInfoOutputDTO);
        return installationsRemovals;
    };
    RunwaySchedulingFormComponent.prototype.findOperationalStatusLabelByValue = function (potentialStatus) {
        var operationalStatus = this.operationalStatusList.find(function (elt) { return elt.value === potentialStatus; });
        return operationalStatus.label;
    };
    RunwaySchedulingFormComponent.prototype.getInstallations = function (runwaySchedulingFlightInfoOutputDTO) {
        var installations = this.component.NO_ATTRIBUTE;
        if (runwaySchedulingFlightInfoOutputDTO && runwaySchedulingFlightInfoOutputDTO.requiredInstalls != undefined) {
            installations = runwaySchedulingFlightInfoOutputDTO.requiredInstalls.toString();
        }
        return installations;
    };
    RunwaySchedulingFormComponent.prototype.getRemovals = function (runwaySchedulingFlightInfoOutputDTO) {
        var removals = this.component.NO_ATTRIBUTE;
        if (runwaySchedulingFlightInfoOutputDTO && runwaySchedulingFlightInfoOutputDTO.requiredRemovals != undefined) {
            removals = runwaySchedulingFlightInfoOutputDTO.requiredRemovals.toString();
        }
        return removals;
    };
    RunwaySchedulingFormComponent.prototype.getTasksNumber = function (runwaySchedulingFlightInfoOutputDTO) {
        var task = this.component.NO_ATTRIBUTE;
        if (runwaySchedulingFlightInfoOutputDTO && !!runwaySchedulingFlightInfoOutputDTO.nbTasks) {
            task = runwaySchedulingFlightInfoOutputDTO.nbTasks.toString();
        }
        return task;
    };
    RunwaySchedulingFormComponent.prototype.getDefectsNumber = function (runwaySchedulingFlightInfoOutputDTO) {
        var defect = this.component.NO_ATTRIBUTE;
        if (runwaySchedulingFlightInfoOutputDTO && runwaySchedulingFlightInfoOutputDTO.nbDefects != undefined) {
            defect = runwaySchedulingFlightInfoOutputDTO.nbDefects.toString();
        }
        return defect;
    };
    RunwaySchedulingFormComponent.prototype.getFuelDeltaNumber = function (runwaySchedulingFlightInfoOutputDTO) {
        var fuelDelta = this.component.NO_ATTRIBUTE;
        if (runwaySchedulingFlightInfoOutputDTO && runwaySchedulingFlightInfoOutputDTO.fuelDelta != undefined) {
            fuelDelta = runwaySchedulingFlightInfoOutputDTO.fuelDelta.toString();
        }
        return fuelDelta;
    };
    RunwaySchedulingFormComponent.prototype.getFuelDeltaUnit = function (runwaySchedulingFlightInfoOutputDTO) {
        var fuelDeltaUnit = this.component.NO_ATTRIBUTE;
        if (runwaySchedulingFlightInfoOutputDTO && runwaySchedulingFlightInfoOutputDTO.fuelDeltaUnit) {
            fuelDeltaUnit = runwaySchedulingFlightInfoOutputDTO.fuelDeltaUnit.toString();
        }
        return fuelDeltaUnit;
    };
    RunwaySchedulingFormComponent.prototype.getWorkPackagesNumber = function (runwaySchedulingFlightInfoOutputDTO) {
        var wp = this.component.NO_ATTRIBUTE;
        if (runwaySchedulingFlightInfoOutputDTO &&
            runwaySchedulingFlightInfoOutputDTO.nbScheduledWorkPackages != undefined) {
            wp = runwaySchedulingFlightInfoOutputDTO.nbScheduledWorkPackages.toString();
        }
        return wp;
    };
    RunwaySchedulingFormComponent.prototype.openFlightFromResourceId = function (resourceId) {
        var missionEquipmentTableOutputDTO = this.findFlightResrourceFromId(resourceId);
        if (!!missionEquipmentTableOutputDTO) {
            var flight = {
                equipmentCode: missionEquipmentTableOutputDTO.equipmentCode,
                missionCode: missionEquipmentTableOutputDTO.missionCode,
                occurrence: missionEquipmentTableOutputDTO.occurrence,
                asset: '',
                chronoNumber: '',
                copilot: '',
                customer: '',
                cycleNumber: '',
                duration: '',
                endDate: '',
                engineStartDate: '',
                engineStopDate: '',
                flightType: '',
                fuelUsed: '',
                ifrDuration: '',
                missionArrivalLocation: '',
                missionDepartureLocation: '',
                missionNumber: '',
                pilot: '',
                startDate: '',
                statusState: ''
            };
            this.openMissionEquipment(flight, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read);
        }
    };
    RunwaySchedulingFormComponent.prototype.openOperationalConfigurationFromResourceId = function (resourceId) {
        var missionEquipmentTableOutputDTO = this.findFlightResrourceFromId(resourceId);
        if (!!missionEquipmentTableOutputDTO) {
            var functionalLocationDto = {
                flCode: missionEquipmentTableOutputDTO.requestedOpeConfigCode
            };
            this.openOperationalConfiguration(functionalLocationDto, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read);
        }
    };
    RunwaySchedulingFormComponent.prototype.openOperationalConfiguration = function (functionalLocationDto, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__["ComponentConstants"].ENG_OPERATIONAL_CONFIGURATION_FORM,
            objectId: functionalLocationDto != undefined ? this.serializationService.serialize(functionalLocationDto) : undefined,
            openMode: openMode
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    RunwaySchedulingFormComponent.prototype.openMissionEquipment = function (missionEquipment, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__["ComponentConstants"].FLI_FLIGHT_FORM,
            openMode: openMode
        };
        if (!!missionEquipment) {
            var missionEquipmentId = {
                equipmentCode: missionEquipment.equipmentCode,
                missionCode: missionEquipment.missionCode,
                occurrence: missionEquipment.occurrence,
                chronoNumber: missionEquipment.chronoNumber
            };
            data.objectId = this.serializationService.serialize(missionEquipmentId);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    RunwaySchedulingFormComponent.prototype.openMission = function (resourceId) {
        var missionEquipmentTableOutputDTO = this.findFlightResrourceFromId(resourceId);
        var bidoMissionDTO = {
            missionCode: !!missionEquipmentTableOutputDTO ? missionEquipmentTableOutputDTO.missionCode : ''
        };
        var labelKey = 'transaction.MissionFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__["ComponentConstants"].FLI_FLIGHTS_MISSION_FORM,
            objectId: this.serializationService.serialize(bidoMissionDTO),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read
        };
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    RunwaySchedulingFormComponent.prototype.openAircraft = function (aircraftEquipmentCode) {
        var labelKey = 'transaction.AircraftFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'AircraftFormComponent',
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__["ComponentOpenMode"].Read
        };
        if (!!aircraftEquipmentCode) {
            var equipmentId = {
                equipmentCode: aircraftEquipmentCode
            };
            data.objectId = this.serializationService.serialize(equipmentId);
        }
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    RunwaySchedulingFormComponent.prototype.compareToSort = function (data1, data2) {
        var moment1 = moment__WEBPACK_IMPORTED_MODULE_3__(data1.startDate);
        var moment2 = moment__WEBPACK_IMPORTED_MODULE_3__(data2.startDate);
        if (moment1.isSame(moment2)) {
            return 0;
        }
        else if (moment1.isBefore(moment2)) {
            return -1;
        }
        else {
            return 1;
        }
    };
    RunwaySchedulingFormComponent.prototype.filterMissionColumn = function (data, value) {
        var bidoMissionEquipmentLWO = data.data;
        return (!!bidoMissionEquipmentLWO &&
            ((!!bidoMissionEquipmentLWO.chronoNumber &&
                bidoMissionEquipmentLWO.chronoNumber.toUpperCase().includes(value.toUpperCase())) ||
                (!!bidoMissionEquipmentLWO.requestedOpeConfigCode &&
                    bidoMissionEquipmentLWO.requestedOpeConfigCode.toUpperCase().includes(value.toUpperCase())) ||
                (!!bidoMissionEquipmentLWO.missionCode &&
                    bidoMissionEquipmentLWO.missionCode.toUpperCase().includes(value.toUpperCase()))));
    };
    RunwaySchedulingFormComponent.prototype.getZoomLevelAccordingToSelectedTimeDurationHoursUnit = function (timeDurationHoursUnit) {
        var zoomLevel;
        if (timeDurationHoursUnit === this.component.DURATION_6_HOURS_HOURS_UNIT) {
            zoomLevel = 0;
        }
        else if (timeDurationHoursUnit === this.component.DURATION_12_HOURS_HOURS_UNIT) {
            zoomLevel = 1;
        }
        else if (timeDurationHoursUnit === this.component.DURATION_24_HOURS_HOURS_UNIT) {
            zoomLevel = 2;
        }
        else if (timeDurationHoursUnit === this.component.DURATION_7_DAYS_HOURS_UNIT) {
            // tslint:disable-next-line:no-magic-numbers
            zoomLevel = 3;
        }
        else {
            zoomLevel = 2;
        }
        return zoomLevel;
    };
    RunwaySchedulingFormComponent.prototype.ngAfterViewInit = function () {
        this.registerSchedulerListeners();
        this.changeEventSelectedClass();
        if (!!this.scheduler.schedulerEngine) {
            if (this.translateService.currentLang === _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_9__["LangConstants"].FRENCH_CODE) {
                this.scheduler.schedulerEngine.localeManager.locale = 'Fr';
            }
            else {
                this.scheduler.schedulerEngine.localeManager.locale = 'En';
            }
        }
    };
    RunwaySchedulingFormComponent.prototype.findavailablesAircraftsDtoByEquipmentCode = function (equipmentCode) {
        return this.availablesAircraftsDto.find(function (elt) { return equipmentCode === elt.equipmentCode; });
    };
    RunwaySchedulingFormComponent.prototype.findMissionEquipmentTableOutputByChronoNumber = function (chronoNumber) {
        return this.bidoMissionEquipmentLWOArray.find(function (elt) { return elt.chronoNumber === chronoNumber; });
    };
    RunwaySchedulingFormComponent.prototype.findFlightEventByChronoNumber = function (chronoNumber) {
        return this.flightEvents.find(function (flight) {
            return flight.bidoMissionEquipmentLWO.chronoNumber === chronoNumber;
        });
    };
    RunwaySchedulingFormComponent.prototype.findFlightResrourceFromId = function (resourceId) {
        var flightResourceModel = this.flightResources.find(function (flight) { return flight.id === resourceId; });
        return !!flightResourceModel ? flightResourceModel.data : undefined;
    };
    RunwaySchedulingFormComponent.prototype.isEmptyEquipmentCode = function (bidoMissionEquipmentLWO) {
        if (!bidoMissionEquipmentLWO) {
            return true;
        }
        else {
            return !bidoMissionEquipmentLWO.equipmentCode || this.component.EMPTY === bidoMissionEquipmentLWO.equipmentCode;
        }
    };
    RunwaySchedulingFormComponent.prototype.getMSNFromLabel = function (label) {
        return label.split('|')[2].trim();
    };
    RunwaySchedulingFormComponent.prototype.generateMissionFlightId = function () {
        return this.missionFlightCounter++;
    };
    RunwaySchedulingFormComponent.prototype.generateSchedulerEventId = function () {
        return ++this.eventCounter;
    };
    RunwaySchedulingFormComponent.prototype.hideAvailablesAircraftBlock = function () {
        this.showAircraftAssociationColumn = false;
    };
    RunwaySchedulingFormComponent.prototype.showAvailablesAircraftBlock = function () {
        if (!(this.availablesAircraftsDto.length > 0)) {
            this.messageService.showInfoMessage(this.getTranslateKey('noAircraftAvailable'));
        }
        else {
            this.showAircraftAssociationColumn = true;
        }
    };
    RunwaySchedulingFormComponent.prototype.getPercentageOfTieProgressBar = function (aircraftTieTarget, tieElement) {
        return (this.component.FIFTY_PERCENT_THAT_IS_VISUAL_CUE * tieElement) / aircraftTieTarget;
    };
    RunwaySchedulingFormComponent.prototype.changeStartDateOfSchedulerAndReloadResourcesAndEvents = function () {
        this.loadStartEndViewDateAndChangeSchedulerConfigAccordingly(this.onTimeOptionChangeLastValue);
        this.scheduler.schedulerEngine.setStartDate(this.startViewDate);
        this.scheduler.schedulerEngine.setEndDate(this.endViewDate);
        this.loadBidoMissionEquipmentByCriteria(this.startViewDate, this.endViewDate);
    };
    RunwaySchedulingFormComponent.prototype.roundStartViewDateToThirtyMinutes = function () {
        var startDate = moment__WEBPACK_IMPORTED_MODULE_3__();
        var minute = startDate.minute();
        var halfHour = 30;
        if (minute < halfHour) {
            this.startViewDate = startDate.subtract(minute, 'minutes').toDate();
        }
        else if (minute >= halfHour) {
            this.startViewDate = startDate.subtract(minute - halfHour, 'minutes').toDate();
        }
    };
    var RunwaySchedulingFormComponent_1;
    // Bryntum default preset
    RunwaySchedulingFormComponent.presetHourAndDay = 'hourAndDay';
    RunwaySchedulingFormComponent.COLUMN_LABEL_CLASS = 'column-label';
    RunwaySchedulingFormComponent.RED_LABEL_CLASS = 'red-label';
    RunwaySchedulingFormComponent.ON_CLICK_OPEN_AIRCRAFT_SELECT_CLASS = 'aircraft-select';
    RunwaySchedulingFormComponent.ON_CLICK_SET_SELECTED_FLIGHT_CLASS = 'on-click-set-selected-flight';
    RunwaySchedulingFormComponent.ON_CLICK_REMOVE_ASSOCIATION_CLASS = 'on-click-remove-flight-association';
    RunwaySchedulingFormComponent.ON_CLICK_OPEN_MISSION_CLASS = 'mission-number-select';
    RunwaySchedulingFormComponent.ON_CLICK_OPEN_FLIGHT_CLASS = 'flight-chrono-select';
    RunwaySchedulingFormComponent.ON_CLICK_OPEN_OPERATIONAL_CONFIGURATION_CLASS = 'operational-configuration-select';
    RunwaySchedulingFormComponent.ACTIVE_OVERLOAD = 'active-overload';
    RunwaySchedulingFormComponent.AIRCRAFT_DEFAULT_CLASS = 'aircraft-default';
    RunwaySchedulingFormComponent.AIRCRAFT_STATUS_OK_CLASS = 'aircraft-status-ok';
    RunwaySchedulingFormComponent.AIRCRAFT_STATUS_WARNING_CLASS = 'aircraft-status-warning';
    RunwaySchedulingFormComponent.AIRCRAFT_STATUS_NOK_CLASS = 'aircraft-status-nok';
    RunwaySchedulingFormComponent.NO_AIRCRAFT_ASSIGNED_CLASS = 'no-aircraft-assigned';
    RunwaySchedulingFormComponent.SCHEDULER_ROW_HEIGHT = 100;
    RunwaySchedulingFormComponent.NO_ATTRIBUTE = 'N/A';
    RunwaySchedulingFormComponent.EMPTY = 'EMPTY';
    RunwaySchedulingFormComponent.DURATION_6_HOURS_HOURS_UNIT = 6;
    RunwaySchedulingFormComponent.DURATION_12_HOURS_HOURS_UNIT = 12;
    RunwaySchedulingFormComponent.DURATION_24_HOURS_HOURS_UNIT = 24;
    RunwaySchedulingFormComponent.DURATION_7_DAYS_HOURS_UNIT = 168;
    RunwaySchedulingFormComponent.DURATION_6_HOURS_KEY = 'duration6Hours';
    RunwaySchedulingFormComponent.DURATION_12_HOURS_KEY = 'duration12Hours';
    RunwaySchedulingFormComponent.DURATION_24_HOURS_KEY = 'duration24Hours';
    RunwaySchedulingFormComponent.DURATION_7_DAYS_KEY = 'duration7days';
    RunwaySchedulingFormComponent.FIFTY_PERCENT_THAT_IS_VISUAL_CUE = 50;
    RunwaySchedulingFormComponent.timeDurationUnit = 'H';
    RunwaySchedulingFormComponent.potentialUnitLabel = 'FH';
    RunwaySchedulingFormComponent.secondsInMinute = 60;
    RunwaySchedulingFormComponent.minutesInHour = 60;
    RunwaySchedulingFormComponent.secondsInHours = 3600;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_5__["SchedulerComponent"]),
        __metadata("design:type", _shared_components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_5__["SchedulerComponent"])
    ], RunwaySchedulingFormComponent.prototype, "scheduler", void 0);
    RunwaySchedulingFormComponent = RunwaySchedulingFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-runway-scheduling-form',
            template: __webpack_require__(/*! ./runway-scheduling-form.component.html */ "./src/app/main/flight-operations/runway-scheduling/form/runway-scheduling-form.component.html"),
            styles: [__webpack_require__(/*! ./runway-scheduling-form.component.scss */ "./src/app/main/flight-operations/runway-scheduling/form/runway-scheduling-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_12__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_13__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_14__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_16__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_18__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_17__["SessionService"],
            _scheduling_service__WEBPACK_IMPORTED_MODULE_24__["SchedulingService"],
            _flight_form_flight_flight_form_service__WEBPACK_IMPORTED_MODULE_22__["FlightFormService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_15__["PropertiesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmationService"],
            _flight_search_search_service__WEBPACK_IMPORTED_MODULE_23__["SearchService"]])
    ], RunwaySchedulingFormComponent);
    return RunwaySchedulingFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_19__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/flight-operations/runway-scheduling/runway-scheduling.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/flight-operations/runway-scheduling/runway-scheduling.module.ts ***!
  \**************************************************************************************/
/*! exports provided: RunwaySchedulingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunwaySchedulingModule", function() { return RunwaySchedulingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/table/table */ "./node_modules/primeng/components/table/table.js");
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_table_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_api_runway_scheduling_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/api/runway-scheduling.api */ "./src/app/shared/api/runway-scheduling.api.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/dialog-search-customer/dialog-search-customer.module */ "./src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts");
/* harmony import */ var _shared_components_scheduler_scheduler_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/scheduler/scheduler.module */ "./src/app/shared/components/scheduler/scheduler.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _fleet_management_functional_location_assignment_functional_location_assignment_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../fleet-management/functional-location-assignment/functional-location-assignment.service */ "./src/app/main/fleet-management/functional-location-assignment/functional-location-assignment.service.ts");
/* harmony import */ var _flight_form_flight_flight_form_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../flight/form/flight/flight-form.service */ "./src/app/main/flight-operations/flight/form/flight/flight-form.service.ts");
/* harmony import */ var _flight_search_search_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../flight/search/search.service */ "./src/app/main/flight-operations/flight/search/search.service.ts");
/* harmony import */ var _operation_search_operation_search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../operation-search/operation-search.service */ "./src/app/main/flight-operations/operation-search/operation-search.service.ts");
/* harmony import */ var _form_runway_scheduling_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form/runway-scheduling-form.component */ "./src/app/main/flight-operations/runway-scheduling/form/runway-scheduling-form.component.ts");
/* harmony import */ var _scheduling_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scheduling.service */ "./src/app/main/flight-operations/runway-scheduling/scheduling.service.ts");
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
var PRIMENG_MODULES = [primeng_components_table_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"]];
var MATERIAL_MODULES = [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"]];
var EXTERNAL_MODULES = [_shared_components_scheduler_scheduler_module__WEBPACK_IMPORTED_MODULE_13__["SchedulerModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["SliderModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["SelectButtonModule"]];
var INTERNAL_MODULES = [];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [_form_runway_scheduling_form_component__WEBPACK_IMPORTED_MODULE_19__["RunwaySchedulingFormComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [
    _scheduling_service__WEBPACK_IMPORTED_MODULE_20__["SchedulingService"],
    _flight_search_search_service__WEBPACK_IMPORTED_MODULE_17__["SearchService"],
    _operation_search_operation_search_service__WEBPACK_IMPORTED_MODULE_18__["OperationSearchService"],
    _fleet_management_functional_location_assignment_functional_location_assignment_service__WEBPACK_IMPORTED_MODULE_15__["FunctionalLocationAssignmentService"],
    _flight_form_flight_flight_form_service__WEBPACK_IMPORTED_MODULE_16__["FlightFormService"],
    _shared_api_runway_scheduling_api__WEBPACK_IMPORTED_MODULE_10__["RunwaySchedulingApi"]
];
var RunwaySchedulingModule = /** @class */ (function () {
    function RunwaySchedulingModule() {
    }
    RunwaySchedulingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__["AppCommonSharedModule"],
                _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_12__["DialogSearchCustomerModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_14__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES, PRIMENG_MODULES, MATERIAL_MODULES),
            providers: __spread(SERVICES, [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]])
        })
    ], RunwaySchedulingModule);
    return RunwaySchedulingModule;
}());



/***/ }),

/***/ "./src/app/main/flight-operations/runway-scheduling/scheduling.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/flight-operations/runway-scheduling/scheduling.service.ts ***!
  \********************************************************************************/
/*! exports provided: SchedulingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulingService", function() { return SchedulingService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_runway_scheduling_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/api/runway-scheduling.api */ "./src/app/shared/api/runway-scheduling.api.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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







var SchedulingService = /** @class */ (function (_super) {
    __extends(SchedulingService, _super);
    function SchedulingService(http, appConfigService, fleetManagementApi, runwaySchedulingApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.fleetManagementApi = fleetManagementApi;
        _this.runwaySchedulingApi = runwaySchedulingApi;
        return _this;
    }
    SchedulingService.prototype.findAllAircraftByCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findAllAircraftByCriteria, criteria);
    };
    SchedulingService.prototype.getRunwaySchedulingFlightInfo = function (criteria) {
        return _super.prototype.post.call(this, this.runwaySchedulingApi.getMissionSchedulingFlightInfo, criteria);
    };
    SchedulingService.prototype.getOperationalStatusMap = function () {
        return _super.prototype.post.call(this, this.fleetManagementApi.getOperationalStatusMap, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].FAMILY_FUNCTION_AIRCRAFT_KEY);
    };
    SchedulingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__["FleetManagementApi"],
            _shared_api_runway_scheduling_api__WEBPACK_IMPORTED_MODULE_3__["RunwaySchedulingApi"]])
    ], SchedulingService);
    return SchedulingService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/api/runway-scheduling.api.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/api/runway-scheduling.api.ts ***!
  \*****************************************************/
/*! exports provided: RunwaySchedulingApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunwaySchedulingApi", function() { return RunwaySchedulingApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.api */ "./src/app/shared/api/abstract.api.ts");
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


var RunwaySchedulingApi = /** @class */ (function (_super) {
    __extends(RunwaySchedulingApi, _super);
    function RunwaySchedulingApi() {
        var _this = _super.call(this, RunwaySchedulingApi_1.baseUrl) || this;
        _this.getMissionSchedulingFlightInfo = _super.prototype.appendToBaseUrl.call(_this, ' /get_runway_scheduling_flight_info');
        return _this;
    }
    RunwaySchedulingApi_1 = RunwaySchedulingApi;
    var RunwaySchedulingApi_1;
    RunwaySchedulingApi.baseUrl = '/runway_scheduling';
    RunwaySchedulingApi = RunwaySchedulingApi_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RunwaySchedulingApi);
    return RunwaySchedulingApi;
}(_abstract_api__WEBPACK_IMPORTED_MODULE_1__["AbstractApi"]));



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



/***/ })

}]);
//# sourceMappingURL=flight-operations-runway-scheduling-runway-scheduling-module.js.map