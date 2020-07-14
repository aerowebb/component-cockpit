(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maintenance-forecast-forecast-module"],{

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

/***/ "./node_modules/primeng/slider.js":
/*!****************************************!*\
  !*** ./node_modules/primeng/slider.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/slider/slider */ "./node_modules/primeng/components/slider/slider.js"));

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

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/finalize.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/finalize.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
function finalize(callback) {
    return function (source) { return source.lift(new FinallyOperator(callback)); };
}
exports.finalize = finalize;
var FinallyOperator = (function () {
    function FinallyOperator(callback) {
        this.callback = callback;
    }
    FinallyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FinallySubscriber(subscriber, this.callback));
    };
    return FinallyOperator;
}());
var FinallySubscriber = (function (_super) {
    __extends(FinallySubscriber, _super);
    function FinallySubscriber(destination, callback) {
        var _this = _super.call(this, destination) || this;
        _this.add(new Subscription_1.Subscription(callback));
        return _this;
    }
    return FinallySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=finalize.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./src/app/main/maintenance/forecast/forecast.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/forecast.module.ts ***!
  \**************************************************************/
/*! exports provided: ForecastModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastModule", function() { return ForecastModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_api_unit_matrix_conversion_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/api/unit-matrix-conversion.api */ "./src/app/shared/api/unit-matrix-conversion.api.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/dialog-search-equipment/dialog-search-equipment.module */ "./src/app/shared/components/dialog-search-equipment/dialog-search-equipment.module.ts");
/* harmony import */ var _shared_components_dialog_search_evolution_dialog_search_evolution_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/dialog-search-evolution/dialog-search-evolution.module */ "./src/app/shared/components/dialog-search-evolution/dialog-search-evolution.module.ts");
/* harmony import */ var _shared_components_dialog_search_fleet_dialog_search_fleet_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/dialog-search-fleet/dialog-search-fleet.module */ "./src/app/shared/components/dialog-search-fleet/dialog-search-fleet.module.ts");
/* harmony import */ var _shared_components_dialog_search_task_dialog_search_task_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/components/dialog-search-task/dialog-search-task.module */ "./src/app/shared/components/dialog-search-task/dialog-search-task.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _shared_components_scheduler_scheduler_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/components/scheduler/scheduler.module */ "./src/app/shared/components/scheduler/scheduler.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _engineering_management_unit_conversion_matrix_unit_conversion_matrix_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../engineering-management/unit-conversion-matrix/unit-conversion-matrix.service */ "./src/app/main/engineering-management/unit-conversion-matrix/unit-conversion-matrix.service.ts");
/* harmony import */ var _procurement_request_procurement_requests_table_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../procurement-request/procurement-requests-table.module */ "./src/app/main/maintenance/procurement-request/procurement-requests-table.module.ts");
/* harmony import */ var _form_assets_required_availabilities_assets_required_availabilities_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./form/assets-required-availabilities/assets-required-availabilities.component */ "./src/app/main/maintenance/forecast/form/assets-required-availabilities/assets-required-availabilities.component.ts");
/* harmony import */ var _form_defect_dialog_defect_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./form/defect-dialog/defect-dialog.component */ "./src/app/main/maintenance/forecast/form/defect-dialog/defect-dialog.component.ts");
/* harmony import */ var _form_event_group_dialog_event_group_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./form/event-group-dialog/event-group-dialog.component */ "./src/app/main/maintenance/forecast/form/event-group-dialog/event-group-dialog.component.ts");
/* harmony import */ var _form_forecast_filter_list_forecast_filter_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./form/forecast-filter-list/forecast-filter-list.component */ "./src/app/main/maintenance/forecast/form/forecast-filter-list/forecast-filter-list.component.ts");
/* harmony import */ var _form_forecast_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./form/forecast-form.component */ "./src/app/main/maintenance/forecast/form/forecast-form.component.ts");
/* harmony import */ var _form_forecast_form_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./form/forecast-form.service */ "./src/app/main/maintenance/forecast/form/forecast-form.service.ts");
/* harmony import */ var _form_forecast_global_filter_forecast_global_filter_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./form/forecast-global-filter/forecast-global-filter.component */ "./src/app/main/maintenance/forecast/form/forecast-global-filter/forecast-global-filter.component.ts");
/* harmony import */ var _form_forecast_legend_dialog_forecast_legend_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./form/forecast-legend-dialog/forecast-legend-dialog.component */ "./src/app/main/maintenance/forecast/form/forecast-legend-dialog/forecast-legend-dialog.component.ts");
/* harmony import */ var _form_forecast_project_header_dialog_forecast_project_header_dialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./form/forecast-project-header-dialog/forecast-project-header-dialog.component */ "./src/app/main/maintenance/forecast/form/forecast-project-header-dialog/forecast-project-header-dialog.component.ts");
/* harmony import */ var _form_planned_date_dialog_planned_date_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./form/planned-date-dialog/planned-date-dialog.component */ "./src/app/main/maintenance/forecast/form/planned-date-dialog/planned-date-dialog.component.ts");
/* harmony import */ var _form_resources_availabilities_resources_availabilities_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./form/resources-availabilities/resources-availabilities.component */ "./src/app/main/maintenance/forecast/form/resources-availabilities/resources-availabilities.component.ts");
/* harmony import */ var _form_scheduled_event_dialog_scheduled_event_dialog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./form/scheduled-event-dialog/scheduled-event-dialog.component */ "./src/app/main/maintenance/forecast/form/scheduled-event-dialog/scheduled-event-dialog.component.ts");
/* harmony import */ var _form_unscheduled_event_dialog_unscheduled_event_dialog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./form/unscheduled-event-dialog/unscheduled-event-dialog.component */ "./src/app/main/maintenance/forecast/form/unscheduled-event-dialog/unscheduled-event-dialog.component.ts");
/* harmony import */ var _form_work_package_dialog_work_package_dialog_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./form/work-package-dialog/work-package-dialog.component */ "./src/app/main/maintenance/forecast/form/work-package-dialog/work-package-dialog.component.ts");
/* harmony import */ var _search_forecast_search_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./search/forecast-search.component */ "./src/app/main/maintenance/forecast/search/forecast-search.component.ts");
/* harmony import */ var _search_forecast_search_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./search/forecast-search.service */ "./src/app/main/maintenance/forecast/search/forecast-search.service.ts");
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
    primeng_multiselect__WEBPACK_IMPORTED_MODULE_4__["MultiSelectModule"],
    primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__["OverlayPanelModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__["SelectButtonModule"],
    primeng_slider__WEBPACK_IMPORTED_MODULE_7__["SliderModule"],
    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_8__["SplitButtonModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_9__["TableModule"],
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"]
];
var INTERNAL_MODULES = [
    _procurement_request_procurement_requests_table_module__WEBPACK_IMPORTED_MODULE_24__["ProcurementRequestsTableModule"],
    _shared_components_dialog_search_equipment_dialog_search_equipment_module__WEBPACK_IMPORTED_MODULE_15__["DialogSearchEquipmentModule"],
    _shared_components_dialog_search_evolution_dialog_search_evolution_module__WEBPACK_IMPORTED_MODULE_16__["DialogSearchEvolutionModule"],
    _shared_components_dialog_search_fleet_dialog_search_fleet_module__WEBPACK_IMPORTED_MODULE_17__["DialogSearchFleetModule"],
    _shared_components_dialog_search_task_dialog_search_task_module__WEBPACK_IMPORTED_MODULE_18__["DialogSearchTaskModule"],
    _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_20__["ModalModule"],
    _shared_components_scheduler_scheduler_module__WEBPACK_IMPORTED_MODULE_21__["SchedulerModule"]
];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [
    _form_assets_required_availabilities_assets_required_availabilities_component__WEBPACK_IMPORTED_MODULE_25__["AssetRequiredAvailabilitiesForecastFormDialogComponent"],
    _form_defect_dialog_defect_dialog_component__WEBPACK_IMPORTED_MODULE_26__["DefectForecastFormDialogComponent"],
    _form_event_group_dialog_event_group_dialog_component__WEBPACK_IMPORTED_MODULE_27__["EventGroupForecastFormDialogComponent"],
    _form_forecast_filter_list_forecast_filter_list_component__WEBPACK_IMPORTED_MODULE_28__["FilterListForecastFormComponent"],
    _form_forecast_global_filter_forecast_global_filter_component__WEBPACK_IMPORTED_MODULE_31__["GlobalFilterForecastFormComponent"],
    _form_forecast_legend_dialog_forecast_legend_dialog_component__WEBPACK_IMPORTED_MODULE_32__["LegendForecastFormDialogComponent"],
    _form_planned_date_dialog_planned_date_dialog_component__WEBPACK_IMPORTED_MODULE_34__["PlannedDateForecastFormDialogComponent"],
    _form_resources_availabilities_resources_availabilities_component__WEBPACK_IMPORTED_MODULE_35__["ResourcesAvailabilitiesForecastFormDialogComponent"],
    _form_scheduled_event_dialog_scheduled_event_dialog_component__WEBPACK_IMPORTED_MODULE_36__["ScheduledEventForecastFormDialogComponent"],
    _form_unscheduled_event_dialog_unscheduled_event_dialog_component__WEBPACK_IMPORTED_MODULE_37__["UnscheduledEventForecastFormDialogComponent"],
    _form_work_package_dialog_work_package_dialog_component__WEBPACK_IMPORTED_MODULE_38__["WorkPackageForecastFormDialogComponent"],
    _form_forecast_project_header_dialog_forecast_project_header_dialog_component__WEBPACK_IMPORTED_MODULE_33__["ForecastProjectHeaderDialogComponent"]
];
var DYNAMIC_COMPONENTS = [_form_forecast_form_component__WEBPACK_IMPORTED_MODULE_29__["ForecastFormComponent"], _search_forecast_search_component__WEBPACK_IMPORTED_MODULE_39__["ForecastSearchComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_forecast_form_service__WEBPACK_IMPORTED_MODULE_30__["ForecastFormService"], _search_forecast_search_service__WEBPACK_IMPORTED_MODULE_40__["ForecastSearchService"], _engineering_management_unit_conversion_matrix_unit_conversion_matrix_service__WEBPACK_IMPORTED_MODULE_23__["UnitConversionMatrixService"], _shared_api_unit_matrix_conversion_api__WEBPACK_IMPORTED_MODULE_13__["UnitConversionMatrixApi"]];
var ForecastModule = /** @class */ (function () {
    function ForecastModule() {
    }
    ForecastModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_11__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_12__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_14__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_22__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS),
                _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_19__["ManageSearchCriteriaModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], ForecastModule);
    return ForecastModule;
}());



/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/assets-required-availabilities/assets-required-availabilities.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/assets-required-availabilities/assets-required-availabilities.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"50\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <p-table\r\n      [resizableColumns]=\"true\"\r\n      #ptableAssets\r\n      class=\"aw-table2\"\r\n      [columns]=\"availabilitiesTableColList\"\r\n      [value]=\"availabilitiesTable\"\r\n      [(selection)]=\"availabilitiesTableSelection\"\r\n      [scrollable]=\"true\"\r\n    >\r\n      <ng-template pTemplate=\"caption\">\r\n        <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': availabilitiesTableSelection.length > 0 }\">\r\n          <div class=\"aw-table-global-filter\">\r\n            <label class=\"aw-table-global-filter-label\">\r\n              <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n            </label>\r\n\r\n            <input\r\n              class=\"aw-table-global-filter-input\"\r\n              type=\"text\"\r\n              placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n              (input)=\"ptableAssets.filterGlobal($event.target.value, 'contains')\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"aw-table-actions\">\r\n            <button\r\n              type=\"button\"\r\n              *ngIf=\"availabilitiesTableSelection.length > 0\"\r\n              mat-raised-button\r\n              color=\"warn\"\r\n              (click)=\"deleteSelectedRows()\"\r\n            >\r\n              {{ \"global.delete\" | translate }}\r\n            </button>\r\n            <button\r\n              type=\"button\"\r\n              *ngIf=\"availabilitiesTableSelection.length === 0\"\r\n              mat-raised-button\r\n              (click)=\"addAvailabilities()\"\r\n            >\r\n              {{ \"global.add\" | translate }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"colgroup\" let-columns>\r\n        <colgroup>\r\n          <col class=\"aw-table-checkbox-wrapper\" />\r\n          <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th class=\"aw-table-checkbox-wrapper\">\r\n            <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n          </th>\r\n          <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n            <span *ngIf=\"col.field !== 'number'\">\r\n              {{ getComponentName() + \".\" + col.field | translate }}\r\n            </span>\r\n            <span *ngIf=\"col.field === 'number'\">\r\n              #\r\n            </span>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n        <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n          <td class=\"aw-table-checkbox-wrapper\">\r\n            <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n          </td>\r\n          <td\r\n            *ngFor=\"let col of columns\"\r\n            pEditableColumn\r\n            [ngSwitch]=\"col.field\"\r\n            [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n          >\r\n            <span *ngSwitchCase=\"'availabilityStartDate'\">\r\n              <p-cellEditor>\r\n                <ng-template pTemplate=\"input\">\r\n                  <p-calendar\r\n                    showButtonBar=\"true\"\r\n                    [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\"\r\n                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                    class=\"aw-calendar\"\r\n                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                    [locale]=\"sessionService.calendarFormat\"\r\n                    [(ngModel)]=\"rowData[col.field]\"\r\n                    appendTo=\"body\"\r\n                  ></p-calendar>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"output\">\r\n                  <p-calendar\r\n                    showButtonBar=\"true\"\r\n                    [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\"\r\n                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                    class=\"aw-calendar\"\r\n                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                    [locale]=\"sessionService.calendarFormat\"\r\n                    [(ngModel)]=\"rowData[col.field]\"\r\n                    appendTo=\"body\"\r\n                    disabled\r\n                  ></p-calendar>\r\n                </ng-template>\r\n              </p-cellEditor>\r\n            </span>\r\n            <span *ngSwitchCase=\"'availabilityEndDate'\">\r\n              <p-cellEditor>\r\n                <ng-template pTemplate=\"input\">\r\n                  <p-calendar\r\n                    showButtonBar=\"true\"\r\n                    [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\"\r\n                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                    class=\"aw-calendar\"\r\n                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                    [locale]=\"sessionService.calendarFormat\"\r\n                    [(ngModel)]=\"rowData[col.field]\"\r\n                    appendTo=\"body\"\r\n                    disabled\r\n                  ></p-calendar>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"output\">\r\n                  <p-calendar\r\n                    showButtonBar=\"true\"\r\n                    [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\"\r\n                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                    class=\"aw-calendar\"\r\n                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                    [locale]=\"sessionService.calendarFormat\"\r\n                    [(ngModel)]=\"rowData[col.field]\"\r\n                    appendTo=\"body\"\r\n                    disabled\r\n                  ></p-calendar>\r\n                </ng-template>\r\n              </p-cellEditor>\r\n            </span>\r\n            <span *ngSwitchCase=\"'availabilityCode'\">\r\n              <p-cellEditor>\r\n                <ng-template pTemplate=\"input\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [options]=\"assetList\"\r\n                    [(ngModel)]=\"rowData[col.field]\"\r\n                    placeholder=\"&nbsp;\"\r\n                    [style]=\"{ width: '100%' }\"\r\n                    appendTo=\"body\"\r\n                  ></p-dropdown>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"output\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [options]=\"assetList\"\r\n                    [(ngModel)]=\"rowData[col.field]\"\r\n                    [disabled]=\"true\"\r\n                    placeholder=\"&nbsp;\"\r\n                  ></p-dropdown>\r\n                </ng-template>\r\n              </p-cellEditor>\r\n            </span>\r\n            <span *ngSwitchCase=\"'availabilityPerWeek'\">\r\n              <p-cellEditor>\r\n                <ng-template pTemplate=\"input\">\r\n                  <input pInputText type=\"text\" [(ngModel)]=\"rowData[col.field]\" required />\r\n                </ng-template>\r\n                <ng-template pTemplate=\"output\">\r\n                  {{ rowData[col.field] }}\r\n                </ng-template>\r\n              </p-cellEditor>\r\n            </span>\r\n            <span *ngSwitchCase=\"'availabilityPerWeekEnd'\">\r\n              <p-cellEditor>\r\n                <ng-template pTemplate=\"input\">\r\n                  <input pInputText type=\"text\" [(ngModel)]=\"rowData[col.field]\" required />\r\n                </ng-template>\r\n                <ng-template pTemplate=\"output\">\r\n                  {{ rowData[col.field] }}\r\n                </ng-template>\r\n              </p-cellEditor>\r\n            </span>\r\n            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"cancel\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn-with-spinner\" color=\"primary\" mat-raised-button (click)=\"validate()\">\r\n      <span class=\"lds-hourglass\" *ngIf=\"saveSpinner\"></span>\r\n      {{ \"validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/assets-required-availabilities/assets-required-availabilities.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/assets-required-availabilities/assets-required-availabilities.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: AssetRequiredAvailabilitiesForecastFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetRequiredAvailabilitiesForecastFormDialogComponent", function() { return AssetRequiredAvailabilitiesForecastFormDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators/finalize */ "./node_modules/rxjs/internal/operators/finalize.js");
/* harmony import */ var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/utils/bido-equipment-utils */ "./src/app/shared/utils/bido-equipment-utils.ts");
/* harmony import */ var _forecast_form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forecast-form.service */ "./src/app/main/maintenance/forecast/form/forecast-form.service.ts");
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










var AssetRequiredAvailabilitiesForecastFormDialogComponent = /** @class */ (function (_super) {
    __extends(AssetRequiredAvailabilitiesForecastFormDialogComponent, _super);
    function AssetRequiredAvailabilitiesForecastFormDialogComponent(messageService, sessionService, confirmationService, forcastFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, 'AssetRequiredAvailabilitiesForecastFormDialogComponent') || this;
        _this.messageService = messageService;
        _this.sessionService = sessionService;
        _this.confirmationService = confirmationService;
        _this.forcastFormService = forcastFormService;
        return _this;
    }
    AssetRequiredAvailabilitiesForecastFormDialogComponent_1 = AssetRequiredAvailabilitiesForecastFormDialogComponent;
    AssetRequiredAvailabilitiesForecastFormDialogComponent.prototype.ngOnInit = function () {
        this.assetList = [];
        this.availabilitiesTableColList = [
            { field: 'number', alignment: 'center', width: '5%' },
            { field: 'availabilityStartDate', alignment: 'left', width: '10%' },
            { field: 'availabilityEndDate', alignment: 'left', width: '10%' },
            { field: 'availabilityCode', alignment: 'left', width: '30%' },
            { field: 'availabilityPerWeek', alignment: 'left', width: '15%' },
            { field: 'availabilityPerWeekEnd', alignment: 'left', width: '15%' }
        ];
        this.loadAssetList();
        this.availabilitiesTableSelection = [];
        this.loadAvailabilityData();
    };
    AssetRequiredAvailabilitiesForecastFormDialogComponent.prototype.loadAssetList = function () {
        var _this = this;
        this.topAssetList.forEach(function (dto) {
            _this.assetList.push({
                label: _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_8__["BidoEquipmentUtils"].createAssetRepresentation(dto),
                value: dto.equipmentCode
            });
        });
        // Remove asset drop down in case assets are <= 1
        if (this.assetList.length <= 1) {
            var AVAILABILITY_CODE_COL_INDEX = 3;
            this.availabilitiesTableColList.splice(AVAILABILITY_CODE_COL_INDEX, 1);
        }
    };
    /************************************
     * Load Dialog data
     ************************************/
    AssetRequiredAvailabilitiesForecastFormDialogComponent.prototype.loadAvailabilityData = function () {
        var _this = this;
        this.availabilitiesTable = [];
        var input = {
            projectId: this.projectId,
            availabilityType: AssetRequiredAvailabilitiesForecastFormDialogComponent_1.AVAILABILITY_TYPE
        };
        this.forcastFormService
            .findBsdeAvailabilitysByProjectAndAvailabilityTypeAndAvailabilityCode(input)
            .subscribe(function (res) {
            res.forEach(function (row) {
                var availabilityEndDates = _this.getAvailabilityEndDate(res, row);
                _this.availabilitiesTable.push({
                    availabilityCode: row.availabilityCode,
                    availabilityId: row.availabilityId,
                    availabilityPerWeek: row.availabilityPerWeek,
                    availabilityPerWeekEnd: row.availabilityPerWeekEnd,
                    availabilityStartDate: row.availabilityStartDate,
                    availabilityType: row.availabilityType,
                    projectId: row.projectId,
                    isUnavailable: row.isUnavailable,
                    availabilityEndDate: availabilityEndDates
                });
            });
            _this.resetTableCounter();
        });
    };
    /************************************
     * Add Entry
     ************************************/
    AssetRequiredAvailabilitiesForecastFormDialogComponent.prototype.addAvailabilities = function () {
        this.availabilitiesTable.push({
            number: this.availabilitiesTable.length === 0 ? 1 : this.availabilitiesTable.length + 1,
            availabilityPerWeek: 0,
            availabilityPerWeekEnd: 0,
            availabilityType: AssetRequiredAvailabilitiesForecastFormDialogComponent_1.AVAILABILITY_TYPE,
            projectId: this.projectId.toString()
        });
    };
    // Sort acc to date
    AssetRequiredAvailabilitiesForecastFormDialogComponent.prototype.dateSelectionEvent = function () {
        this.availabilitiesTable = this.availabilitiesTable.sort(function (a, b) {
            if (!!b.availabilityStartDate && !!a.availabilityStartDate) {
                return a.availabilityStartDate.getTime() - b.availabilityStartDate.getTime();
            }
            return -1;
        });
        this.resetTableCounter();
    };
    /************************************
     * Validate Dialog and Save
     ************************************/
    AssetRequiredAvailabilitiesForecastFormDialogComponent.prototype.validate = function () {
        var _this = this;
        if (this.validateTable()) {
            this.saveSpinner = true;
            this.dateSelectionEvent();
            this.forcastFormService
                .createOrUpdateBsdeAvailability(this.availabilitiesTable)
                .pipe(Object(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
                _this.saveSpinner = false;
            }))
                .subscribe(function (res) {
                _this.loadAvailabilityData();
                _this.messageService.showSuccessMessage(_this.getTranslateKey('onSaveSuccess'));
            });
        }
    };
    /************************************
     * Table Validation
     ************************************/
    AssetRequiredAvailabilitiesForecastFormDialogComponent.prototype.validateTable = function () {
        var _this = this;
        var WORKING_DAY_HOUR_LIMIT = 23;
        var validation = true;
        var errorMsg = '';
        this.availabilitiesTable.forEach(function (res) {
            if (res.availabilityPerWeek === null || res.availabilityPerWeekEnd === null) {
                errorMsg = _this.getTranslateKey('weekMandatoryFields');
                validation = false;
            }
            if ((!!res.availabilityPerWeek && res.availabilityPerWeek > WORKING_DAY_HOUR_LIMIT) ||
                (!!res.availabilityPerWeekEnd && res.availabilityPerWeekEnd > WORKING_DAY_HOUR_LIMIT)) {
                errorMsg = _this.getTranslateKey('valueCannotBeGreaterThanWorkingDayHourLimit');
                validation = false;
            }
            if (!res.availabilityStartDate) {
                errorMsg = _this.getTranslateKey('startDateMandatory');
                validation = false;
            }
            if (_this.assetList.length === 0 && !res.availabilityCode) {
                errorMsg = _this.getTranslateKey('assetMandatory');
                validation = false;
            }
            else if (_this.assetList.length === 1) {
                res.availabilityCode = _this.assetList[0].value;
            }
        });
        if (!!errorMsg) {
            this.messageService.showErrorMessage(errorMsg);
        }
        return validation;
    };
    /************************************
     * Delete Rows
     ************************************/
    AssetRequiredAvailabilitiesForecastFormDialogComponent.prototype.deleteSelectedRows = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedAvailabilities'),
            accept: function () {
                var id = [];
                var cloneTable = __spread(_this.availabilitiesTable);
                _this.availabilitiesTableSelection.forEach(function (res) {
                    if (!!res) {
                        if (!!res.availabilityId) {
                            id.push({
                                availabilityId: res.availabilityId
                            });
                        }
                        cloneTable.splice(res.number - 1, 1);
                    }
                });
                _this.forcastFormService.removeBsdeAvailability(id).subscribe(function (res) {
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('onDeleteSuccess'));
                    _this.loadAvailabilityData();
                    _this.availabilitiesTableSelection = [];
                });
            }
        });
    };
    /************************************
     * Reset Table Counter
     ************************************/
    AssetRequiredAvailabilitiesForecastFormDialogComponent.prototype.resetTableCounter = function () {
        this.availabilitiesTable.forEach(function (res, index) {
            res.number = index + 1;
        });
    };
    /**
     * getAvailabilityEndDate() - This function is used to calculate the Availabilty End Date field.
     * @param results - Availability Data List
     * @param rowData - Availability Data Row
     */
    AssetRequiredAvailabilitiesForecastFormDialogComponent.prototype.getAvailabilityEndDate = function (results, rowData) {
        var nextDateFound;
        if (!!rowData.availabilityStartDate) {
            results.forEach(function (elements) {
                if (rowData.availabilityCode === elements.availabilityCode &&
                    elements.availabilityStartDate &&
                    rowData.availabilityStartDate &&
                    elements.availabilityStartDate > rowData.availabilityStartDate) {
                    if (!nextDateFound || (!!nextDateFound && elements.availabilityStartDate < nextDateFound)) {
                        nextDateFound = elements.availabilityStartDate;
                    }
                }
            });
        }
        if (!!nextDateFound) {
            var nextStartDate = new Date(nextDateFound);
            nextStartDate.setDate(nextStartDate.getDate() - 1);
            return nextStartDate;
        }
    };
    var AssetRequiredAvailabilitiesForecastFormDialogComponent_1;
    AssetRequiredAvailabilitiesForecastFormDialogComponent.AVAILABILITY_TYPE = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].AVAILABILITY_TYPE_QUALIFICATION;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AssetRequiredAvailabilitiesForecastFormDialogComponent.prototype, "projectId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AssetRequiredAvailabilitiesForecastFormDialogComponent.prototype, "topAssetList", void 0);
    AssetRequiredAvailabilitiesForecastFormDialogComponent = AssetRequiredAvailabilitiesForecastFormDialogComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-forecast-form-assets-required-availabilities',
            template: __webpack_require__(/*! ./assets-required-availabilities.component.html */ "./src/app/main/maintenance/forecast/form/assets-required-availabilities/assets-required-availabilities.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            _forecast_form_service__WEBPACK_IMPORTED_MODULE_9__["ForecastFormService"]])
    ], AssetRequiredAvailabilitiesForecastFormDialogComponent);
    return AssetRequiredAvailabilitiesForecastFormDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/defect-dialog/defect-dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/defect-dialog/defect-dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">\r\n          {{ \"name\" | translate }}\r\n        </label>\r\n\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" [disabled]=\"true\" [(ngModel)]=\"notification.notificationSubject\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">\r\n          {{ \"description\" | translate }}\r\n        </label>\r\n\r\n        <div class=\"form-control\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"aw-input\"\r\n            [disabled]=\"true\"\r\n            [(ngModel)]=\"notification.bidoNotificationTypeDTO.typeDescription\"\r\n          />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">\r\n          {{ \"code\" | translate }}\r\n        </label>\r\n\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" [disabled]=\"true\" [(ngModel)]=\"notification.notificationCode\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">\r\n          {{ \"notToExceedDate\" | translate }}\r\n        </label>\r\n\r\n        <div class=\"form-control\">\r\n          <p-calendar\r\n            showButtonBar=\"true\"\r\n            [monthNavigator]=\"true\"\r\n            [yearNavigator]=\"true\"\r\n            [yearRange]=\"sessionService.calendarYearRange\"\r\n            class=\"aw-calendar\"\r\n            appendTo=\"body\"\r\n            [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n            [locale]=\"sessionService.calendarFormat\"\r\n            [showTime]=\"true\"\r\n            [(ngModel)]=\"defect.nteDate\"\r\n            [disabled]=\"true\"\r\n          ></p-calendar>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">\r\n          {{ getComponentName() + \".delayCategory\" | translate }}\r\n        </label>\r\n\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" [disabled]=\"true\" [(ngModel)]=\"delayCategory\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"form-label\">\r\n          {{ getComponentName() + \".authorizedDelay\" | translate }}\r\n        </label>\r\n\r\n        <div class=\"form-control\">\r\n          <input type=\"text\" class=\"aw-input\" [disabled]=\"true\" [(ngModel)]=\"authorizedDelay\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"close\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/defect-dialog/defect-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/defect-dialog/defect-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DefectForecastFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefectForecastFormDialogComponent", function() { return DefectForecastFormDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
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





var DefectForecastFormDialogComponent = /** @class */ (function (_super) {
    __extends(DefectForecastFormDialogComponent, _super);
    function DefectForecastFormDialogComponent(sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'DefectForecastFormDialogComponent') || this;
        _this.sessionService = sessionService;
        _this.init();
        return _this;
    }
    DefectForecastFormDialogComponent.prototype.ngOnInit = function () {
        this.defect = this.eventModel._obj.deferredDefectEvent;
        this.notification = this.eventModel._obj.deferredDefectEvent.bidoNotificationData;
        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_4__["ObjectUtils"].isDefined(this.defect.deferredDefectInfo)) {
            var deferredDefectInfo = this.defect.deferredDefectInfo;
            this.authorizedDelay = deferredDefectInfo.delayValue;
            this.delayCategory = deferredDefectInfo.delayCategory;
        }
    };
    DefectForecastFormDialogComponent.prototype.init = function () {
        this.authorizedDelay = undefined;
        this.delayCategory = undefined;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DefectForecastFormDialogComponent.prototype, "eventModel", void 0);
    DefectForecastFormDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-forecast-form-defect',
            template: __webpack_require__(/*! ./defect-dialog.component.html */ "./src/app/main/maintenance/forecast/form/defect-dialog/defect-dialog.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DefectForecastFormDialogComponent);
    return DefectForecastFormDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/event-group-dialog/event-group-dialog.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/event-group-dialog/event-group-dialog.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"90\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <p-table\r\n      [resizableColumns]=\"true\"\r\n      #ptableEvents\r\n      class=\"aw-table2\"\r\n      [columns]=\"eventTableColList\"\r\n      [value]=\"eventTable\"\r\n      [(selection)]=\"eventTableSelection\"\r\n      [scrollable]=\"true\"\r\n      (onHeaderCheckboxToggle)=\"onSelectAllRows($event)\"\r\n      (onRowSelect)=\"onSelectRow()\"\r\n      (onRowUnselect)=\"onUnselectRow()\"\r\n    >\r\n      <ng-template pTemplate=\"caption\">\r\n        <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': eventTableSelection.length > 0 }\">\r\n          <div class=\"aw-table-global-filter\">\r\n            <label class=\"aw-table-global-filter-label\">\r\n              <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n            </label>\r\n\r\n            <input\r\n              class=\"aw-table-global-filter-input\"\r\n              type=\"text\"\r\n              placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n              (input)=\"ptableEvents.filterGlobal($event.target.value, 'contains')\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"aw-table-actions\">\r\n            <button\r\n              *ngIf=\"showRemoveFromWorkPackage\"\r\n              type=\"button\"\r\n              mat-raised-button\r\n              (click)=\"removeSelectionFromWorkPackage()\"\r\n            >\r\n              {{ \"removeFromWorkPackage\" | translate }}\r\n            </button>\r\n\r\n            <p-splitButton\r\n              *ngIf=\"showAddToWorkPackage\"\r\n              [label]=\"'addToWorkPackage' | translate\"\r\n              class=\"aw-split-btn aw-table-action\"\r\n              [model]=\"workPackageItemList\"\r\n              appendTo=\"body\"\r\n            ></p-splitButton>\r\n\r\n            <button\r\n              *ngIf=\"eventTableSelection.length > 0\"\r\n              type=\"button\"\r\n              mat-raised-button\r\n              (click)=\"updatePlannedDate()\"\r\n            >\r\n              {{ getComponentName() + \".updatePlannedDate\" | translate }}\r\n            </button>\r\n\r\n            <button *ngIf=\"eventTableSelection.length === 1\" type=\"button\" mat-raised-button (click)=\"editEvent()\">\r\n              {{ getComponentName() + \".editMainInformation\" | translate }}\r\n            </button>\r\n\r\n            <button *ngIf=\"eventTableSelection.length === 1\" type=\"button\" mat-raised-button (click)=\"openEvent()\">\r\n              {{ \"openObject\" | translate: { value: eventTableSelection[0].formattedType } }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"colgroup\" let-columns>\r\n        <colgroup>\r\n          <col class=\"aw-table-checkbox-wrapper\" />\r\n          <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th class=\"aw-table-checkbox-wrapper\">\r\n            <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n          </th>\r\n\r\n          <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n            {{ getComponentName() + \".\" + col.field | translate }}\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n        <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n          <td class=\"aw-table-checkbox-wrapper\">\r\n            <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n          </td>\r\n\r\n          <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n            {{ rowData[col.field] }}\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"close\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-forecast-form-defect\r\n  *ngIf=\"showDefectDialog\"\r\n  [(display)]=\"showDefectDialog\"\r\n  [eventModel]=\"selectedEventModel\"\r\n></aw-dialog-forecast-form-defect>\r\n\r\n<aw-dialog-forecast-form-planned-date\r\n  *ngIf=\"showPlannedDateDialog\"\r\n  [(display)]=\"showPlannedDateDialog\"\r\n  (onSelected)=\"onSelectedPlannedDate($event)\"\r\n></aw-dialog-forecast-form-planned-date>\r\n\r\n<aw-dialog-forecast-form-scheduled-event\r\n  *ngIf=\"showScheduledEventDialog\"\r\n  [(display)]=\"showScheduledEventDialog\"\r\n  [eventModel]=\"selectedEventModel\"\r\n></aw-dialog-forecast-form-scheduled-event>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/event-group-dialog/event-group-dialog.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/event-group-dialog/event-group-dialog.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EventGroupForecastFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventGroupForecastFormDialogComponent", function() { return EventGroupForecastFormDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _forecast_form_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../forecast-form.service */ "./src/app/main/maintenance/forecast/form/forecast-form.service.ts");
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











var EventGroupForecastFormDialogComponent = /** @class */ (function (_super) {
    __extends(EventGroupForecastFormDialogComponent, _super);
    function EventGroupForecastFormDialogComponent(forecastFormService, sessionService, dateService, messageService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'EventGroupForecastFormDialogComponent') || this;
        _this.forecastFormService = forecastFormService;
        _this.sessionService = sessionService;
        _this.dateService = dateService;
        _this.messageService = messageService;
        _this.translateService = translateService;
        _this.init();
        _this.setEventTableColList();
        return _this;
    }
    EventGroupForecastFormDialogComponent.prototype.ngOnInit = function () {
        this.setEventTable();
    };
    // //////////////////////////////////////////////////////////////////////////
    EventGroupForecastFormDialogComponent.prototype.editEvent = function () {
        if (this.forecastFormService.isDefectSchedulerEventType(this.eventTableSelection[0]._type)) {
            this.showDefectDialog = true;
        }
        else if (this.forecastFormService.isScheduledEventSchedulerEventType(this.eventTableSelection[0]._type)) {
            this.showScheduledEventDialog = true;
        }
        else if (this.forecastFormService.isUnscheduledEventSchedulerEventType(this.eventTableSelection[0]._type)) {
            this.showUnscheduledEventDialog = true;
        }
        this.selectedEventModel = this.eventTableSelection[0]._obj;
    };
    EventGroupForecastFormDialogComponent.prototype.onSelectAllRows = function (event) {
        if (event.checked) {
            this.onSelectRow();
        }
        else {
            this.onUnselectRow();
        }
    };
    EventGroupForecastFormDialogComponent.prototype.onSelectedPlannedDate = function (date) {
        if (this.forecastFormService.isValidPlannedDateForEventGroup(this.eventModel, date)) {
            this.forecastFormService.updateEventGroupPlannedDate({
                eventGroup: this.eventModel,
                events: this.eventTableSelection.map(function (event) { return event._obj; }),
                plannedDate: date
            });
        }
        else {
            this.messageService.showWarningMessage(this.getTranslateKey('warningOnChosenDatePosteriorToSomeNotToExceedDate'));
        }
    };
    EventGroupForecastFormDialogComponent.prototype.onSelectRow = function () {
        var _this = this;
        this.calculateAddToWorkPackageVisibility();
        this.calculateRemoveFromWorkPackageVisibility();
        if (this.showAddToWorkPackage) {
            this.workPackageItemList = this.eventTableSelection
                .map(function (selection) { return selection._workPackages; })
                .reduce(function (acc, val) { return acc.concat(val); }, [])
                .filter(function (v, i, a) { return a.indexOf(v) === i; })
                .sort(this.forecastFormService.sortWorkPackages)
                .map(function (workPackage) {
                return {
                    label: _this.workPackagePrefix + " " + workPackage.projectNumber,
                    command: function () {
                        _this.addSelectionToWorkPackage(workPackage);
                    }
                };
            });
        }
    };
    EventGroupForecastFormDialogComponent.prototype.onUnselectRow = function () {
        this.calculateAddToWorkPackageVisibility();
        this.calculateRemoveFromWorkPackageVisibility();
    };
    EventGroupForecastFormDialogComponent.prototype.openEvent = function () {
        this.forecastFormService.openEvent(this.eventTableSelection[0]._obj);
        this.closeDialog();
    };
    EventGroupForecastFormDialogComponent.prototype.removeSelectionFromWorkPackage = function () {
        var eventModel = this.eventTableSelection[0]._obj;
        this.forecastFormService.removeEventsFromWorkPackage({
            events: this.eventTableSelection.map(function (selection) { return selection._obj; }),
            workPackage: eventModel._obj.affectedWorkPackage
        });
        this.closeDialog();
    };
    EventGroupForecastFormDialogComponent.prototype.updatePlannedDate = function () {
        this.showPlannedDateDialog = true;
    };
    EventGroupForecastFormDialogComponent.prototype.addSelectionToWorkPackage = function (workPackage) {
        this.forecastFormService.addEventsToWorkPackage({
            events: this.eventTableSelection.map(function (selection) { return selection._obj; }),
            workPackage: workPackage
        });
        this.closeDialog();
    };
    EventGroupForecastFormDialogComponent.prototype.buildEventRowFromDefect = function (eventModel) {
        var event = eventModel._obj.deferredDefectEvent.bidoNotificationData;
        var eventName = event.bidoNotificationTypeDTO.typeDescription + " (" + event.notificationCode + ")";
        var eventType = this.forecastFormService.getEventCategoryLabel(event, this.eventCategoryList);
        return {
            eventName: eventName,
            eventType: eventType,
            eventDescription: '',
            formattedType: this.translateService.instant(this.forecastFormService.getUpcomingEventKey(eventModel)),
            plannedDate: this.dateService.dateToString(eventModel._obj.deferredDefectEvent.plannedDate),
            workPackage: this.formatWorkPackage(eventModel._obj.affectedWorkPackage),
            _obj: eventModel,
            _type: _forecast_form_service__WEBPACK_IMPORTED_MODULE_10__["EventModelType"].DEFECT,
            _workPackages: this.getAvailableWorkPackagesForEvent(eventModel)
        };
    };
    EventGroupForecastFormDialogComponent.prototype.buildEventRowFromDefectList = function () {
        var _this = this;
        return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__["ListUtils"].orEmpty(this.eventModel.defectList).map(function (defect) { return _this.buildEventRowFromDefect(defect); });
    };
    EventGroupForecastFormDialogComponent.prototype.buildEventRowFromScheduledEvent = function (eventModel, eventType) {
        return {
            eventDescription: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__["StringUtils"].orEmpty(eventModel._obj.bireTask.taskDesignation),
            eventName: eventModel._obj.bireTask.taskCode + "-" + eventModel._obj.bireTask.taskVersion,
            eventType: this.forecastFormService.getTaskTypeLabel(eventModel._obj.bireTask, this.taskTypeList),
            formattedType: this.translateService.instant(this.forecastFormService.getUpcomingEventKey(eventModel)),
            plannedDate: this.dateService.dateToString(eventModel._obj.bsdeScheduledEvent.plannedDate),
            workPackage: this.formatWorkPackage(eventModel._obj.affectedWorkPackage),
            _obj: eventModel,
            _type: eventType,
            _workPackages: this.getAvailableWorkPackagesForEvent(eventModel)
        };
    };
    EventGroupForecastFormDialogComponent.prototype.buildEventRowFromLlpAlertList = function () {
        var _this = this;
        return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__["ListUtils"].orEmpty(this.eventModel.llpAlertList).map(function (event) {
            return _this.buildEventRowFromScheduledEvent(event, _forecast_form_service__WEBPACK_IMPORTED_MODULE_10__["EventModelType"].LLP_ALERT);
        });
    };
    EventGroupForecastFormDialogComponent.prototype.buildEventRowFromScheduledEventList = function () {
        var _this = this;
        return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__["ListUtils"].orEmpty(this.eventModel.scheduledEventList).map(function (event) {
            return _this.buildEventRowFromScheduledEvent(event, _forecast_form_service__WEBPACK_IMPORTED_MODULE_10__["EventModelType"].SCHEDULED_EVENT);
        });
    };
    EventGroupForecastFormDialogComponent.prototype.buildEventRowFromUnscheduledEvent = function (eventModel, eventType) {
        return {
            eventDescription: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_9__["StringUtils"].orEmpty(eventModel._obj.bireTask.taskDesignation),
            eventName: eventModel._obj.bireTask.taskCode + "-" + eventModel._obj.bireTask.taskVersion,
            eventType: this.forecastFormService.getTaskTypeLabel(eventModel._obj.bireTask, this.taskTypeList),
            formattedType: this.translateService.instant(this.forecastFormService.getUpcomingEventKey(eventModel)),
            plannedDate: this.dateService.dateToString(eventModel._obj.bsdeEvent.plannedDate),
            workPackage: this.formatWorkPackage(eventModel._obj.affectedWorkPackage),
            _obj: eventModel,
            _type: eventType,
            _workPackages: this.getAvailableWorkPackagesForEvent(eventModel)
        };
    };
    EventGroupForecastFormDialogComponent.prototype.calculateAddToWorkPackageVisibility = function () {
        this.showAddToWorkPackage =
            this.eventTableSelection.length > 0 &&
                this.eventTableSelection.every(function (selection) {
                    var eventModel = selection._obj;
                    return (!_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].isDefined(eventModel._obj.affectedWorkPackage) && !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__["ListUtils"].isEmpty(selection._workPackages));
                });
    };
    EventGroupForecastFormDialogComponent.prototype.calculateRemoveFromWorkPackageVisibility = function () {
        this.showRemoveFromWorkPackage =
            this.eventTableSelection.length > 0 &&
                this.eventTableSelection.every(function (selection) {
                    var eventModel = selection._obj;
                    return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].isDefined(eventModel._obj.affectedWorkPackage);
                });
    };
    EventGroupForecastFormDialogComponent.prototype.getAvailableWorkPackagesForEvent = function (selectedEvent) {
        var _this = this;
        return this.eventList
            .filter(function (event) { return event.resourceId === selectedEvent.resourceId; })
            .filter(function (event) { return _this.forecastFormService.isWorkPackageSchedulerEventType(event.eventType); })
            .map(function (event) { return event._obj.bidmProject; });
    };
    EventGroupForecastFormDialogComponent.prototype.buildEventRowFromSnChangeList = function () {
        var _this = this;
        return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__["ListUtils"].orEmpty(this.eventModel.snChangeList).map(function (event) {
            return _this.buildEventRowFromUnscheduledEvent(event, _forecast_form_service__WEBPACK_IMPORTED_MODULE_10__["EventModelType"].SN_CHANGE);
        });
    };
    EventGroupForecastFormDialogComponent.prototype.buildEventRowFromUnscheduledEventList = function () {
        var _this = this;
        return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_7__["ListUtils"].orEmpty(this.eventModel.unscheduledEventList).map(function (event) {
            return _this.buildEventRowFromUnscheduledEvent(event, _forecast_form_service__WEBPACK_IMPORTED_MODULE_10__["EventModelType"].UNSCHEDULED_EVENT);
        });
    };
    EventGroupForecastFormDialogComponent.prototype.formatWorkPackage = function (workPackage) {
        var workPackagePrefix = this.translateService.instant('workPackageNumberShort');
        return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_8__["ObjectUtils"].isDefined(workPackage)
            ? workPackagePrefix + " " + workPackage.projectNumber
            : '';
    };
    EventGroupForecastFormDialogComponent.prototype.init = function () {
        this.eventTable = [];
        this.eventTableSelection = [];
        this.workPackagePrefix = this.translateService.instant('workPackageNumberShort');
        this.selectedEventModel = undefined;
        this.showAddToWorkPackage = false;
        this.showDefectDialog = false;
        this.showPlannedDateDialog = false;
        this.showRemoveFromWorkPackage = false;
        this.showScheduledEventDialog = false;
        this.showUnscheduledEventDialog = false;
    };
    EventGroupForecastFormDialogComponent.prototype.setEventTable = function () {
        this.eventTable = __spread(this.buildEventRowFromDefectList(), this.buildEventRowFromLlpAlertList(), this.buildEventRowFromScheduledEventList(), this.buildEventRowFromSnChangeList(), this.buildEventRowFromUnscheduledEventList());
    };
    EventGroupForecastFormDialogComponent.prototype.setEventTableColList = function () {
        this.eventTableColList = [
            { field: 'eventName', alignment: 'left', width: '15%' },
            { field: 'eventDescription', alignment: 'left', width: '55%' },
            { field: 'eventType', alignment: 'left', width: '10%' },
            { field: 'plannedDate', alignment: 'left', width: '10%' },
            { field: 'workPackage', alignment: 'left', width: '10%' }
        ];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EventGroupForecastFormDialogComponent.prototype, "eventCategoryList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EventGroupForecastFormDialogComponent.prototype, "eventModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EventGroupForecastFormDialogComponent.prototype, "taskTypeList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], EventGroupForecastFormDialogComponent.prototype, "eventList", void 0);
    EventGroupForecastFormDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-forecast-form-event-group',
            template: __webpack_require__(/*! ./event-group-dialog.component.html */ "./src/app/main/maintenance/forecast/form/event-group-dialog/event-group-dialog.component.html")
        }),
        __metadata("design:paramtypes", [_forecast_form_service__WEBPACK_IMPORTED_MODULE_10__["ForecastFormService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], EventGroupForecastFormDialogComponent);
    return EventGroupForecastFormDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/forecast-filter-list/forecast-filter-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/forecast-filter-list/forecast-filter-list.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scheduler-filters-toggler\">\r\n  <i\r\n    class=\"fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay\"\r\n    aria-hidden=\"true\"\r\n    pTooltip=\"{{ overlayVisible ? 'hideFilters' : ('showFilters' | translate) }}\"\r\n    tooltipPosition=\"top\"\r\n    [ngClass]=\"{ active: overlayVisible }\"\r\n    (click)=\"opFilters.toggle($event)\"\r\n  ></i>\r\n</div>\r\n\r\n<p-overlayPanel #opFilters styleClass=\"aw-overlay\" (onShow)=\"showOverlay()\" (onHide)=\"hideOverlay()\" appendTo=\"body\">\r\n  <div class=\"section\">\r\n    <h4 class=\"section-title\">\r\n      {{ \"upcomingEvents\" | translate }}\r\n    </h4>\r\n\r\n    <div class=\"section-content\">\r\n      <div class=\"form-group form-group-no-margin\">\r\n        <div class=\"form-control\">\r\n          <p-selectButton\r\n            [(ngModel)]=\"forecastFormService.forecastFiltering.upcomingEventTypeList\"\r\n            [options]=\"upcomingEventTypeList\"\r\n            multiple=\"multiple\"\r\n            (onChange)=\"filterForecast()\"\r\n          ></p-selectButton>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"section\">\r\n    <h4 class=\"section-title\">\r\n      {{ getComponentName() + \".upcomingEventAssignment\" | translate }}\r\n    </h4>\r\n\r\n    <div class=\"section-content\">\r\n      <div class=\"form-group form-group-no-margin\">\r\n        <div class=\"form-control\">\r\n          <p-selectButton\r\n            [(ngModel)]=\"forecastFormService.forecastFiltering.upcomingEventStatusList\"\r\n            [options]=\"upcomingEventStatusList\"\r\n            multiple=\"multiple\"\r\n            (onChange)=\"filterForecast()\"\r\n          ></p-selectButton>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"section\">\r\n    <h4 class=\"section-title\">\r\n      {{ \"workPackages\" | translate }}\r\n    </h4>\r\n\r\n    <div class=\"section-content\">\r\n      <div class=\"form-group form-group-no-margin\">\r\n        <div class=\"form-control\">\r\n          <p-selectButton\r\n            [(ngModel)]=\"forecastFormService.forecastFiltering.workPackageStatusList\"\r\n            [options]=\"filteredWorkPackageStatusList\"\r\n            multiple=\"multiple\"\r\n            (onChange)=\"filterForecast()\"\r\n          ></p-selectButton>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-overlayPanel>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/forecast-filter-list/forecast-filter-list.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/forecast-filter-list/forecast-filter-list.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: FilterListForecastFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterListForecastFormComponent", function() { return FilterListForecastFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/types/generic-component */ "./src/app/shared/types/generic-component.ts");
/* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/utils/bido-equipment-utils */ "./src/app/shared/utils/bido-equipment-utils.ts");
/* harmony import */ var _forecast_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forecast-form.service */ "./src/app/main/maintenance/forecast/form/forecast-form.service.ts");
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







var FilterListForecastFormComponent = /** @class */ (function (_super) {
    __extends(FilterListForecastFormComponent, _super);
    function FilterListForecastFormComponent(forecastFormService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write) || this;
        _this.forecastFormService = forecastFormService;
        _this.translateService = translateService;
        _this.init();
        _this.setUpcomingEventStatusList();
        return _this;
    }
    Object.defineProperty(FilterListForecastFormComponent.prototype, "topBidoEquipmentList", {
        set: function (value) {
            if (value) {
                this.topAssetList = value.map(function (elt) {
                    return {
                        label: _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_5__["BidoEquipmentUtils"].toString(elt),
                        value: elt
                    };
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterListForecastFormComponent.prototype, "workPackageStatusList", {
        set: function (value) {
            if (value) {
                this.filteredWorkPackageStatusList = value.filter(function (elt) { return elt.value !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_LINE_MAINTENANCE; });
            }
        },
        enumerable: true,
        configurable: true
    });
    FilterListForecastFormComponent.prototype.getComponentName = function () {
        return 'FilterListForecastFormComponent';
    };
    FilterListForecastFormComponent.prototype.filterForecast = function () {
        this.forecastFormService.filterForecast();
    };
    FilterListForecastFormComponent.prototype.hideOverlay = function () {
        this.overlayVisible = false;
    };
    FilterListForecastFormComponent.prototype.showOverlay = function () {
        this.overlayVisible = true;
    };
    FilterListForecastFormComponent.prototype.init = function () {
        this.filteredWorkPackageStatusList = [];
        this.overlayVisible = false;
        this.topAssetList = [];
    };
    FilterListForecastFormComponent.prototype.setUpcomingEventStatusList = function () {
        var _this = this;
        var upcomingEventAssignmentInPastKey = this.getTranslateKey('upcomingEventAssignmentInPast');
        var upcomingEventAssignmentNokKey = this.getTranslateKey('upcomingEventAssignmentNok');
        var upcomingEventAssignmentOkKey = this.getTranslateKey('upcomingEventAssignmentOk');
        var upcomingEventAssignmentWarnKey = this.getTranslateKey('upcomingEventAssignmentWarn');
        this.translateService
            .get([
            upcomingEventAssignmentInPastKey,
            upcomingEventAssignmentNokKey,
            upcomingEventAssignmentOkKey,
            upcomingEventAssignmentWarnKey
        ])
            .subscribe({
            next: function (results) {
                _this.upcomingEventStatusList = [
                    {
                        label: results[upcomingEventAssignmentOkKey],
                        value: _forecast_form_service__WEBPACK_IMPORTED_MODULE_6__["UpcomingEventStatus"].OK
                    },
                    {
                        label: results[upcomingEventAssignmentWarnKey],
                        value: _forecast_form_service__WEBPACK_IMPORTED_MODULE_6__["UpcomingEventStatus"].WARN
                    },
                    {
                        label: results[upcomingEventAssignmentNokKey],
                        value: _forecast_form_service__WEBPACK_IMPORTED_MODULE_6__["UpcomingEventStatus"].NOK
                    },
                    {
                        label: results[upcomingEventAssignmentInPastKey],
                        value: _forecast_form_service__WEBPACK_IMPORTED_MODULE_6__["UpcomingEventStatus"].IN_PAST
                    }
                ];
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('topAssetList'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], FilterListForecastFormComponent.prototype, "topBidoEquipmentList", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterListForecastFormComponent.prototype, "upcomingEventTypeList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], FilterListForecastFormComponent.prototype, "workPackageStatusList", null);
    FilterListForecastFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-forecast-form-filter-list',
            template: __webpack_require__(/*! ./forecast-filter-list.component.html */ "./src/app/main/maintenance/forecast/form/forecast-filter-list/forecast-filter-list.component.html")
        }),
        __metadata("design:paramtypes", [_forecast_form_service__WEBPACK_IMPORTED_MODULE_6__["ForecastFormService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], FilterListForecastFormComponent);
    return FilterListForecastFormComponent;
}(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_4__["GenericComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/forecast-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/forecast-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div *ngIf=\"!isCreateOpenMode && componentData && componentData.objectId\" class=\"page-subtitle\">\r\n          - {{ componentContext }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button *ngIf=\"!isCreateOpenMode\" type=\"button\" mat-raised-button (click)=\"manageForecastProject()\">\r\n      {{ componentData.componentId + \".editProjectHeader\" | translate }}\r\n    </button>\r\n\r\n    <button *ngIf=\"!isCreateOpenMode\" type=\"button\" mat-raised-button (click)=\"launchOptimizer()\">\r\n      {{ componentData.componentId + \".launchOptimizer\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item [matMenuTriggerFor]=\"navigations\">{{ \"goTo\" | translate }}</button>\r\n      <button mat-menu-item (click)=\"displayAssetRequiredAvailabilitiesDialog()\">\r\n        {{ getComponentName() + \".configureAssetRequiredAvailabilities\" | translate }}\r\n      </button>\r\n      <button mat-menu-item (click)=\"displayResourcesdAvailabilitiesDialog()\">\r\n        {{ getComponentName() + \".configureResourcesAvailabilities\" | translate }}\r\n      </button>\r\n      <button mat-menu-item (click)=\"reloadForecast(forecastProjectId)\">{{ \"global.refresh\" | translate }}</button>\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n    <mat-menu #navigations=\"matMenu\">\r\n      <button mat-menu-item (click)=\"openMaterialAvailabilityForAllWorkPackage()\">\r\n        {{ \"materialAvailability\" | translate }}\r\n      </button>\r\n      <button mat-menu-item (click)=\"openStaffPlanning()\">\r\n        {{ \"staffPlanning\" | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"grid-row\" *ngIf=\"!isCreateOpenMode\">\r\n      <div class=\"grid-cell--6 main-block-read-only\">\r\n        <div class=\"grid-cell grid-cell--container\">\r\n          <div class=\"grid-cell-header\">\r\n            <div class=\"grid-cell-title-container\">\r\n              <h3 class=\"grid-cell-title\">\r\n                {{ \"page.mainData\" | translate }}\r\n              </h3>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"grid-cell-content\">\r\n            <div class=\"column\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group form-group-inline form-group-no-margin form-group-fleet-data\">\r\n                  <label class=\"form-label\">{{ \"fleetData\" | translate }}</label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <div class=\"form-control-generic\">\r\n                      <ng-container *ngIf=\"forecastProject.projectFleetCode\">\r\n                        {{ forecastProject.projectFleetCode }}\r\n                        <ng-container *ngIf=\"forecastProject.projectFleetName\">\r\n                          ({{ forecastProject.projectFleetName }})\r\n                        </ng-container>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngIf=\"forecastProjectAsset.equipmentCode\">\r\n                        {{ forecastProjectAssetDesignation }}\r\n                      </ng-container>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"form-group form-group-inline form-group-no-margin form-group-mro-center\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"mroCenter\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      [options]=\"repairCenterList\"\r\n                      [(ngModel)]=\"selectedRepairCenter\"\r\n                      [disabled]=\"true\"\r\n                      placeholder=\"&nbsp;\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"form-group form-group-inline form-group-no-margin form-group-start-date\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"startDate\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <p-calendar\r\n                      showButtonBar=\"true\"\r\n                      [monthNavigator]=\"true\"\r\n                      [yearNavigator]=\"true\"\r\n                      [yearRange]=\"sessionService.calendarYearRange\"\r\n                      class=\"aw-calendar\"\r\n                      [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                      [locale]=\"sessionService.calendarFormat\"\r\n                      [showTime]=\"true\"\r\n                      [disabled]=\"true\"\r\n                      [(ngModel)]=\"forecastProject.projectStartDate\"\r\n                    ></p-calendar>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"form-group form-group-inline form-group-no-margin form-group-end-date\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"endDate\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <p-calendar\r\n                      showButtonBar=\"true\"\r\n                      [monthNavigator]=\"true\"\r\n                      [yearNavigator]=\"true\"\r\n                      [yearRange]=\"sessionService.calendarYearRange\"\r\n                      class=\"aw-calendar\"\r\n                      [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                      [locale]=\"sessionService.calendarFormat\"\r\n                      [showTime]=\"true\"\r\n                      [disabled]=\"true\"\r\n                      [(ngModel)]=\"forecastProject.projectEndDate\"\r\n                    ></p-calendar>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-cell--3\">\r\n        <div class=\"grid-cell grid-cell--container upcoming-events-block\">\r\n          <div class=\"grid-cell-header\">\r\n            <div class=\"grid-cell-title-container\">\r\n              <h3 class=\"grid-cell-title\">\r\n                {{ getComponentName() + \".upcomingEventAssignment\" | translate }}\r\n              </h3>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"grid-cell-content\">\r\n            <div class=\"column\">\r\n              <div class=\"form-group form-group-inline form-group-no-margin\">\r\n                <div class=\"upcoming-event ok\"></div>\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".upcomingEventOk\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <div\r\n                    class=\"form-control-generic\"\r\n                    [ngClass]=\"{\r\n                      ok:\r\n                        upcomingEventsWithOkStatus > 0 &&\r\n                        upcomingEventsWithWarnStatus == 0 &&\r\n                        upcomingEventsWithAlertStatus == 0 &&\r\n                        upcomingEventsWithNokStatus == 0 &&\r\n                        upcomingEventsInPastWithWarnStatus == 0 &&\r\n                        !schedulerLoading\r\n                    }\"\r\n                  >\r\n                    {{ upcomingEventsWithOkStatus }}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group form-group-inline form-group-no-margin\">\r\n                <div class=\"upcoming-event warn\"></div>\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".upcomingEventWarn\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <div\r\n                    class=\"form-control-generic\"\r\n                    [ngClass]=\"{\r\n                      warn:\r\n                        upcomingEventsWithWarnStatus > 0 &&\r\n                        upcomingEventsWithAlertStatus == 0 &&\r\n                        upcomingEventsWithNokStatus == 0 &&\r\n                        upcomingEventsInPastWithWarnStatus == 0 &&\r\n                        !schedulerLoading\r\n                    }\"\r\n                  >\r\n                    {{ upcomingEventsWithWarnStatus }}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- <div class=\"form-group form-group-inline form-group-no-margin\">\r\n                <div class=\"upcoming-event alert\"></div>\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".upcomingEventAlert\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <div\r\n                    class=\"form-control-generic\"\r\n                    [ngClass]=\"{\r\n                      alert:\r\n                        upcomingEventsWithAlertStatus > 0 &&\r\n                        upcomingEventsWithNokStatus == 0 &&\r\n                        upcomingEventsInPastWithWarnStatus == 0 &&\r\n                        !schedulerLoading\r\n                    }\"\r\n                  >\r\n                    {{ upcomingEventsWithAlertStatus }}\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n\r\n              <div class=\"form-group form-group-inline form-group-no-margin\">\r\n                <div class=\"upcoming-event nok\"></div>\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".upcomingEventNok\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <div\r\n                    class=\"form-control-generic\"\r\n                    [ngClass]=\"{\r\n                      nok:\r\n                        upcomingEventsWithNokStatus > 0 && upcomingEventsInPastWithWarnStatus == 0 && !schedulerLoading\r\n                    }\"\r\n                  >\r\n                    {{ upcomingEventsWithNokStatus }}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group form-group-inline form-group-no-margin\">\r\n                <div class=\"upcoming-event in-past\"></div>\r\n                <label class=\"form-label\">\r\n                  {{ getComponentName() + \".upcomingEventInPast\" | translate }}\r\n                </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <div\r\n                    class=\"form-control-generic\"\r\n                    [ngClass]=\"{\r\n                      'in-past': upcomingEventsInPastWithWarnStatus > 0 && !schedulerLoading\r\n                    }\"\r\n                  >\r\n                    {{ upcomingEventsInPastWithWarnStatus }}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-cell--3\">\r\n        <aw-material-availability-indicators [workPackages]=\"workPackageList\">\r\n          >\r\n        </aw-material-availability-indicators>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"grid-row\" [ngClass]=\"{ 'display--none': isCreateOpenMode }\">\r\n      <div class=\"grid-cell--12\">\r\n        <div class=\"grid-cell grid-cell--container scheduler-block\">\r\n          <div class=\"grid-cell-header\">\r\n            <div class=\"grid-cell-title-container loading-indicator\">\r\n              <h3 class=\"grid-cell-title\">\r\n                {{ \"planning\" | translate }}\r\n                <div *ngIf=\"schedulerLoading\" class=\"lds-hourglass\"></div>\r\n              </h3>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"grid-cell-content position--relative\">\r\n            <div class=\"scheduler-header\" [ngClass]=\"{ show: !schedulerLoading }\">\r\n              <div class=\"scheduler-filters\">\r\n                <aw-forecast-form-filter-list\r\n                  [topAssetList]=\"topAssetList\"\r\n                  [upcomingEventTypeList]=\"upcomingEventTypeList\"\r\n                  [workPackageStatusList]=\"workPackageStatusList\"\r\n                ></aw-forecast-form-filter-list>\r\n                <p-multiSelect\r\n                  [options]=\"assetList\"\r\n                  [(ngModel)]=\"assetListSelected\"\r\n                  optionLabel=\"_displayableField\"\r\n                  (onChange)=\"onFilterAsset()\"\r\n                  [defaultLabel]=\"filterAssetLabel\"\r\n                  [selectedItemsLabel]=\"filterAssetLabel\"\r\n                  maxSelectedLabels=\"0\"\r\n                  [panelStyle]=\"{ minWidth: '12rem' }\"\r\n                ></p-multiSelect>\r\n              </div>\r\n\r\n              <div class=\"navigation\">\r\n                <button mat-raised-button (click)=\"openAirworthinessStatus()\" *ngIf=\"selectedAssets.length > 0\">\r\n                  {{ \"airworthinessStatus\" | translate }}\r\n                </button>\r\n\r\n                <button mat-raised-button (click)=\"openMaintenancePlanning()\" *ngIf=\"selectedAssets.length === 1\">\r\n                  {{ \"maintenancePlanning\" | translate }}\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"actions\">\r\n                <button mat-raised-button (click)=\"addUnscheduledEvent()\" *ngIf=\"selectedAssets.length === 1\">\r\n                  {{ getComponentName() + \".addUnscheduledEvent\" | translate }}\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"today-btn\">\r\n                <button mat-raised-button (click)=\"showToday()\">\r\n                  {{ \"today\" | translate }}\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"time-resolution\">\r\n                <p-slider\r\n                  [max]=\"component.TIME_RESOLUTION_MAX_ZOOM\"\r\n                  [min]=\"component.TIME_RESOLUTION_MIN_ZOOM\"\r\n                  [(ngModel)]=\"schedulerZoomLevel\"\r\n                  (onChange)=\"onChangeTimeResolution($event)\"\r\n                ></p-slider>\r\n              </div>\r\n\r\n              <div class=\"scheduler-legend\">\r\n                <i\r\n                  class=\"fa fa-fw fa-info aw-icon aw-icon-with-border aw-icon-with-overlay\"\r\n                  aria-hidden=\"true\"\r\n                  pTooltip=\"{{ 'legend' | translate }}\"\r\n                  tooltipPosition=\"top\"\r\n                  (click)=\"openForecastLegendDialog()\"\r\n                ></i>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"scheduler-wrap\" [ngClass]=\"{ show: !schedulerLoading }\">\r\n              <bry-scheduler\r\n                #scheduler\r\n                [columns]=\"columnList\"\r\n                [emptyText]=\"schedulerConfig['emptyText']\"\r\n                [eventRenderer]=\"schedulerConfig['eventRenderer']\"\r\n                [events]=\"filteredEventList\"\r\n                [resources]=\"filteredResourceList\"\r\n                [cellEditFeature]=\"schedulerConfig['cellEditFeature']\"\r\n                [eventContextMenuFeature]=\"schedulerConfig['eventContextMenuFeature']\"\r\n                [eventDragFeature]=\"schedulerConfig['eventDragFeature']\"\r\n                [eventTooltipFeature]=\"schedulerConfig['eventTooltipFeature']\"\r\n                [rowHeight]=\"schedulerConfig['rowHeight']\"\r\n                [scheduleContextMenuFeature]=\"schedulerConfig['scheduleContextMenuFeature']\"\r\n                [scheduleTooltipFeature]=\"schedulerConfig['scheduleTooltipFeature']\"\r\n                [timeRangesFeature]=\"schedulerConfig['timeRangesFeature']\"\r\n                [treeFeature]=\"schedulerConfig['treeFeature']\"\r\n                [zoomKeepsOriginalTimespan]=\"schedulerConfig['zoomKeepsOriginalTimespan']\"\r\n                [zoomOnMouseWheel]=\"schedulerConfig['zoomOnMouseWheel']\"\r\n                [zoomOnTimeAxisDoubleClick]=\"schedulerConfig['zoomOnTimeAxisDoubleClick']\"\r\n              ></bry-scheduler>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-forecast-form-assets-required-availabilities\r\n    *ngIf=\"showAssetRequiredAvailabilitiesDialog\"\r\n    [(display)]=\"showAssetRequiredAvailabilitiesDialog\"\r\n    [projectId]=\"forecastProject.projectId\"\r\n    [topAssetList]=\"topAssetList\"\r\n  >\r\n  </aw-dialog-forecast-form-assets-required-availabilities>\r\n\r\n  <aw-dialog-forecast-form-resources-availabilities\r\n    *ngIf=\"showResourcesdAvailabilitiesDialog\"\r\n    [(display)]=\"showResourcesdAvailabilitiesDialog\"\r\n    [projectId]=\"forecastProject.projectId\"\r\n  >\r\n  </aw-dialog-forecast-form-resources-availabilities>\r\n\r\n  <aw-dialog-forecast-form-defect\r\n    *ngIf=\"showDefectDialog\"\r\n    [(display)]=\"showDefectDialog\"\r\n    [eventModel]=\"selectedEventModel\"\r\n  ></aw-dialog-forecast-form-defect>\r\n\r\n  <aw-dialog-forecast-form-scheduled-event\r\n    *ngIf=\"showScheduledEventDialog\"\r\n    [(display)]=\"showScheduledEventDialog\"\r\n    [eventModel]=\"selectedEventModel\"\r\n  ></aw-dialog-forecast-form-scheduled-event>\r\n\r\n  <aw-dialog-forecast-form-event-group\r\n    *ngIf=\"showEventGroupDialog && selectedEventModel\"\r\n    [(display)]=\"showEventGroupDialog\"\r\n    [eventCategoryList]=\"eventCategoryList\"\r\n    [eventModel]=\"selectedEventModel\"\r\n    [eventList]=\"eventList\"\r\n    [taskTypeList]=\"taskTypeList\"\r\n  ></aw-dialog-forecast-form-event-group>\r\n\r\n  <aw-dialog-forecast-form-legend\r\n    *ngIf=\"showForecastLegendDialog\"\r\n    [(display)]=\"showForecastLegendDialog\"\r\n  ></aw-dialog-forecast-form-legend>\r\n\r\n  <aw-dialog-forecast-form-unscheduled-event\r\n    *ngIf=\"showUnscheduledEventDialog\"\r\n    [(display)]=\"showUnscheduledEventDialog\"\r\n    [asset]=\"selectedAsset\"\r\n    [eventModel]=\"selectedEventModel\"\r\n  ></aw-dialog-forecast-form-unscheduled-event>\r\n\r\n  <aw-dialog-forecast-form-work-package\r\n    *ngIf=\"showWorkPackageCreateDialog\"\r\n    [(display)]=\"showWorkPackageCreateDialog\"\r\n    [endtDate]=\"selectedEndDate\"\r\n    [forecastMroCenter]=\"forecastProject.repairCenterCode\"\r\n    [siteList]=\"workPackageSiteList\"\r\n    [startDate]=\"selectedStartDate\"\r\n    [workPackageAssignedToList]=\"workPackageAssignedToList\"\r\n    [workPackageStatusList]=\"workPackageStatusList\"\r\n    [workPackageTypeList]=\"workPackageTypeList\"\r\n    (onCreated)=\"onCreatedWorkPackage($event)\"\r\n  ></aw-dialog-forecast-form-work-package>\r\n\r\n  <aw-dialog-forecast-form-work-package\r\n    *ngIf=\"showWorkPackageUpdateDialog\"\r\n    [(display)]=\"showWorkPackageUpdateDialog\"\r\n    [endtDate]=\"selectedEndDate\"\r\n    [eventModel]=\"selectedEventModel\"\r\n    [forecastMroCenter]=\"forecastProject.repairCenterCode\"\r\n    [siteList]=\"workPackageSiteList\"\r\n    [startDate]=\"selectedStartDate\"\r\n    [workPackageAssignedToList]=\"workPackageAssignedToList\"\r\n    [workPackageStatusList]=\"workPackageStatusList\"\r\n    [workPackageTypeList]=\"workPackageTypeList\"\r\n    (onUpdated)=\"onUpdatedWorkPackage($event)\"\r\n  ></aw-dialog-forecast-form-work-package>\r\n\r\n  <aw-dialog-forecast-form-project-header\r\n    *ngIf=\"showForecastManagementBlock\"\r\n    [(display)]=\"showForecastManagementBlock\"\r\n    [forecastProject]=\"forecastProject\"\r\n    [forecastProjectAsset]=\"forecastProjectAsset\"\r\n    [selectedRepairCenter]=\"selectedRepairCenter\"\r\n    [selectedWorkCenter]=\"selectedWorkCenter\"\r\n    [repairCenterList]=\"repairCenterList\"\r\n    [occurrenceList]=\"occurrenceList\"\r\n    [selectedCustomer]=\"selectedCustomer\"\r\n    [customerList]=\"customerList\"\r\n    [selectedForecastCategory]=\"selectedForecastCategory\"\r\n    [forecastCategoryList]=\"forecastCategoryList\"\r\n    [forecastProjectSrc]=\"forecastProjectSrc\"\r\n    [forecastProjectId]=\"forecastProjectId\"\r\n    [forecastProjectLlpEventsGeneration]=\"forecastProjectLlpEventsGeneration\"\r\n    [forecastProjectOccurrenceNumber]=\"forecastProjectOccurrenceNumber\"\r\n    (onSave)=\"reloadForecast($event, undefined)\"\r\n  >\r\n  </aw-dialog-forecast-form-project-header>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/forecast-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/forecast-form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .form-control-generic.in-past,\n:host .upcoming-event.in-past {\n  background-color: #000;\n  color: #fff !important; }\n\n:host .form-control-generic.nok,\n:host .upcoming-event.nok {\n  background-color: #ab000d !important;\n  color: #fff !important; }\n\n:host .form-control-generic.ok,\n:host .upcoming-event.ok {\n  background-color: #7cb342 !important;\n  color: #000 !important; }\n\n:host .form-control-generic.warn,\n:host .upcoming-event.warn {\n  background-color: #fbc02d !important;\n  color: #000 !important; }\n\n:host .form-control-generic.alert,\n:host .upcoming-event.alert {\n  background-color: #ea9107 !important;\n  color: #000 !important; }\n\n:host .material-availability-block .grid-cell-content > .column,\n:host .upcoming-events-block .grid-cell-content > .column {\n  align-items: center; }\n\n:host .material-availability-block .grid-cell-content > .column .form-control-generic,\n  :host .upcoming-events-block .grid-cell-content > .column .form-control-generic {\n    flex-direction: row;\n    justify-content: center;\n    min-width: 4rem;\n    padding: 0 8px; }\n\n:host .material-availability-block .grid-cell-content > .column .form-control-generic.nok,\n    :host .upcoming-events-block .grid-cell-content > .column .form-control-generic.nok {\n      background-color: #f6685e; }\n\n:host .material-availability-block .grid-cell-content > .column .form-control-generic.ok,\n    :host .upcoming-events-block .grid-cell-content > .column .form-control-generic.ok {\n      background-color: #4caf50; }\n\n:host .material-availability-block .grid-cell-content > .column .form-control-generic.warn,\n    :host .upcoming-events-block .grid-cell-content > .column .form-control-generic.warn {\n      background-color: #ffc107; }\n\n:host .main-block {\n  display: none; }\n\n:host .main-block.show {\n    display: initial; }\n\n:host .main-block .action-list .aw-btn {\n    margin-left: 8px; }\n\n:host .main-block .action-list .aw-btn:first-of-type {\n      margin-left: 0; }\n\n:host .main-block-read-only .grid-cell-content > .column > .row .form-group-fleet-data > label,\n:host .main-block-read-only .grid-cell-content > .column > .row .form-group-start-date > label {\n  max-width: 8rem;\n  min-width: 8rem; }\n\n:host .main-block-read-only .grid-cell-content > .column > .row .form-group-fleet-data .form-control,\n:host .main-block-read-only .grid-cell-content > .column > .row .form-group-start-date .form-control {\n  max-width: calc(100% - 8rem); }\n\n:host .main-block-read-only .grid-cell-content > .column > .row .form-group-end-date > label,\n:host .main-block-read-only .grid-cell-content > .column > .row .form-group-mro-center > label {\n  max-width: 8rem;\n  min-width: 8rem; }\n\n:host .main-block-read-only .grid-cell-content > .column > .row .form-group-end-date .form-control,\n:host .main-block-read-only .grid-cell-content > .column > .row .form-group-mro-center .form-control {\n  max-width: calc(100% - 5rem); }\n\n:host .main-block-read-only .grid-cell-content > .column > .row .form-group {\n  width: 50%; }\n\n:host .main-block-read-only .grid-cell-content > .column > .row .form-group .form-control {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n\n:host .main-block-read-only .grid-cell-content > .column > .row .form-group .form-control .form-control-generic {\n      display: inline !important; }\n\n:host .material-availability-block .grid-cell-content label {\n  width: 4rem; }\n\n:host .material-availability-block .grid-cell-content .form-group {\n  align-items: center; }\n\n:host .scheduler-block .scheduler-header .actions,\n:host .scheduler-block .scheduler-header .navigation {\n  display: flex;\n  flex-direction: row; }\n\n:host .scheduler-block .scheduler-header .actions .aw-btn,\n  :host .scheduler-block .scheduler-header .navigation .aw-btn {\n    margin-right: 8px; }\n\n:host .scheduler-block .scheduler-header .scheduler-filters {\n  margin-right: 8px; }\n\n:host .scheduler-block .scheduler-header .time-resolution {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  margin: 0 calc(2 * 8px); }\n\n:host .scheduler-block .scheduler-header .time-resolution p-slider {\n    width: 10rem; }\n\n:host .scheduler-block .scheduler-header .today-btn {\n  align-items: center;\n  display: flex;\n  flex-direction: row; }\n\n:host .scheduler-block .scheduler-wrap {\n  height: 59vh;\n  visibility: hidden; }\n\n:host .scheduler-block .scheduler-wrap.show {\n    visibility: visible; }\n\n:host .upcoming-events-block .grid-cell-content > .column {\n  overflow: hidden; }\n\n:host .upcoming-events-block .grid-cell-content > .column .form-group.form-group-inline {\n    width: 100%; }\n\n:host .upcoming-events-block .grid-cell-content > .column .form-group.form-group-inline label {\n      flex-grow: 1; }\n\n:host .upcoming-events-block .grid-cell-content > .column .form-group.form-group-inline .upcoming-event {\n      height: 21.21px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      margin-left: 4px;\n      max-width: 21.21px;\n      min-width: 21.21px; }\n\n::ng-deep .scheduler-wrap .b-sch-dragcreator-proxy {\n  background-color: #63a4ff !important;\n  opacity: 0.5 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9mb3JlY2FzdC9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFxmb3JlY2FzdFxcZm9ybVxcZm9yZWNhc3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9mb3JlY2FzdC9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9mb3JlY2FzdC9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTs7RUFJTSxzQkFBc0I7RUFDdEIsc0JBQXNCLEVBQUE7O0FBTDVCOztFQVNNLG9DQUFvQztFQUNwQyxzQkFBc0IsRUFBQTs7QUFWNUI7O0VBY00sb0NBQW9DO0VBQ3BDLHNCQUFzQixFQUFBOztBQWY1Qjs7RUFtQk0sb0NBQW9DO0VBQ3BDLHNCQUFzQixFQUFBOztBQXBCNUI7O0VBd0JNLG9DQUFvQztFQUNwQyxzQkFBc0IsRUFBQTs7QUF6QjVCOztFQWlDUSxtQkFBbUIsRUFBQTs7QUFqQzNCOztJQW9DVSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixjQ0FRLEVBQUE7O0FEdkNsQjs7TUEwQ1kseUJDdkJRLEVBQUE7O0FEbkJwQjs7TUE4Q1kseUJDOUJVLEVBQUE7O0FEaEJ0Qjs7TUFrRFkseUJDakNJLEVBQUE7O0FEakJoQjtFQTBESSxhQUFhLEVBQUE7O0FBMURqQjtJQTZETSxnQkFBZ0IsRUFBQTs7QUE3RHRCO0lBa0VRLGdCQzNCVSxFQUFBOztBRHZDbEI7TUFxRVUsY0FBYyxFQUFBOztBQXJFeEI7O0VBZ0ZVLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBakZ6Qjs7RUFxRlUsNEJBQTRCLEVBQUE7O0FBckZ0Qzs7RUE0RlUsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUE3RnpCOztFQWlHVSw0QkFBNEIsRUFBQTs7QUFqR3RDO0VBc0dRLFVBQVUsRUFBQTs7QUF0R2xCO0lFOEtFLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUE7O0FGaExyQjtNQTRHWSwwQkFBMEIsRUFBQTs7QUE1R3RDO0VBc0hRLFdBQVcsRUFBQTs7QUF0SG5CO0VBMEhRLG1CQUFtQixFQUFBOztBQTFIM0I7O0VBbUlRLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFwSTNCOztJQXVJVSxpQkNoR1EsRUFBQTs7QUR2Q2xCO0VBNElRLGlCQ3JHVSxFQUFBOztBRHZDbEI7RUFnSlEsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQW9DLEVBQUE7O0FBbko1QztJQXNKVSxZQUFZLEVBQUE7O0FBdEp0QjtFQTJKUSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQTdKM0I7RUFrS00sWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQW5LeEI7SUFzS1EsbUJBQW1CLEVBQUE7O0FBdEszQjtFQThLUSxnQkFBZ0IsRUFBQTs7QUE5S3hCO0lBaUxVLFdBQVcsRUFBQTs7QUFqTHJCO01Bb0xZLFlBQVksRUFBQTs7QUFwTHhCO01Bd0xZLGVBMUxTO01BMkxULGdDQUF3QjtjQUF4Qix3QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLGtCQTdMUztNQThMVCxrQkE5TFMsRUFBQTs7QUFzTXJCO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9mb3JlY2FzdC9mb3JtL2ZvcmVjYXN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbiRldmVudC13aWR0aDogMjEuMjFweDtcclxuXHJcbjpob3N0IHtcclxuICAuZm9ybS1jb250cm9sLWdlbmVyaWMsXHJcbiAgLnVwY29taW5nLWV2ZW50IHtcclxuICAgICYuaW4tcGFzdCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWIwMDBkICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3Y2IzNDIgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLndhcm4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJjMDJkICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTkxMDcgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXRlcmlhbC1hdmFpbGFiaWxpdHktYmxvY2ssXHJcbiAgLnVwY29taW5nLWV2ZW50cy1ibG9jayB7XHJcbiAgICAuZ3JpZC1jZWxsLWNvbnRlbnQge1xyXG4gICAgICAmID4gLmNvbHVtbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIG1pbi13aWR0aDogNHJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgICAmLm5vayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYub2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYud2FybiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFpbi1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICYuc2hvdyB7XHJcbiAgICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbi1saXN0IHtcclxuICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYWluLWJsb2NrLXJlYWQtb25seSB7XHJcbiAgICAuZ3JpZC1jZWxsLWNvbnRlbnQgPiAuY29sdW1uID4gLnJvdyB7XHJcbiAgICAgIC5mb3JtLWdyb3VwLWZsZWV0LWRhdGEsXHJcbiAgICAgIC5mb3JtLWdyb3VwLXN0YXJ0LWRhdGUge1xyXG4gICAgICAgICYgPiBsYWJlbCB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDhyZW07XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDhyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gOHJlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybS1ncm91cC1lbmQtZGF0ZSxcclxuICAgICAgLmZvcm0tZ3JvdXAtbXJvLWNlbnRlciB7XHJcbiAgICAgICAgJiA+IGxhYmVsIHtcclxuICAgICAgICAgIG1heC13aWR0aDogOHJlbTtcclxuICAgICAgICAgIG1pbi13aWR0aDogOHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA1cmVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICAgICAgLmZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0ZXJpYWwtYXZhaWxhYmlsaXR5LWJsb2NrIHtcclxuICAgIC5ncmlkLWNlbGwtY29udGVudCB7XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogNHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zY2hlZHVsZXItYmxvY2sge1xyXG4gICAgLnNjaGVkdWxlci1oZWFkZXIge1xyXG4gICAgICAuYWN0aW9ucyxcclxuICAgICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2NoZWR1bGVyLWZpbHRlcnMge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpbWUtcmVzb2x1dGlvbiB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgbWFyZ2luOiAwIGNhbGMoMiAqICN7JG1hcmdpbi12YWx1ZX0pO1xyXG5cclxuICAgICAgICBwLXNsaWRlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudG9kYXktYnRuIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zY2hlZHVsZXItd3JhcCB7XHJcbiAgICAgIGhlaWdodDogNTl2aDtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cclxuICAgICAgJi5zaG93IHtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXBjb21pbmctZXZlbnRzLWJsb2NrIHtcclxuICAgIC5ncmlkLWNlbGwtY29udGVudCB7XHJcbiAgICAgICYgPiAuY29sdW1uIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAuZm9ybS1ncm91cC5mb3JtLWdyb3VwLWlubGluZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudXBjb21pbmctZXZlbnQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICRldmVudC13aWR0aDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6ICRldmVudC13aWR0aDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAkZXZlbnQtd2lkdGg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLnNjaGVkdWxlci13cmFwIC5iLXNjaC1kcmFnY3JlYXRvci1wcm94eSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzYTRmZiAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAuNSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFV0aWxzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBidXR0b24tY29sb3IoJGJhY2tncm91bmQtY29sb3IsICRjb2xvciwgJGJvcmRlci1jb2xvcjogbnVsbCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIsXHJcbiAgJjpub3QoOmRpc2FibGVkKS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpZigkYm9yZGVyLWNvbG9yID09IG51bGwsICRjb2xvciwgJGJvcmRlci1jb2xvcik7XHJcbiAgICBjb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleC1jb2x1bW4oKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1yb3coKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQoKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuXHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWRpc2FibGVkKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWRpc2FibGVkO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1mb2N1cygpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxufVxyXG5cclxuQG1peGluIGlucHV0LWhvdmVyKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VhcmNoLWNyaXRlcmlhLWNvbnRhaW5lciB7XHJcbiAgLmFkdmFuY2VkLWNyaXRlcmlhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtY3JpdGVyaWEtZm9vdGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAuYXctYnRuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlY3Rpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiA0KTtcclxuXHJcbiAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgJi5yZXF1aXJlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkKCk7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hbGVydCB7XHJcbiAgICAgICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICYgPiBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LW92ZXJmbG93LWhpZGRlbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdyaWQgZm9ybSBjb250cm9scyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJNZWRpdW1cIjtcclxuXHJcbiAgJiA+IGlucHV0ICsgcC1tZXNzYWdlID4gLnVpLW1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpmb2N1cyxcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDI1NSwgMjU1LCAyNTUpIDYwJSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgIC5hdy1pY29uIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4sXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0biB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcblxyXG4gICAgICAmLmF3LWNhbGVuZGFyIC51aS1pbnB1dHRleHQsXHJcbiAgICAgICYuYXctZHJvcGRvd24gLnVpLWRyb3Bkb3duLFxyXG4gICAgICAmLmF3LWlucHV0LFxyXG4gICAgICAmLmF3LXRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1jYWxlbmRhciB7XHJcbiAgICAgIC8vIEZJWE1FOiBmaXggYW4gVUkgaXNzdWUgb24gUHJpbWVORyBjYWxlbmRhciBjb21wb25lbnQ7IHRvIHJlbW92ZSB3aGVuIGlzc3VlIHdpbGwgYmUgZml4ZWQgdXBzdHJlYW1cclxuICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAgIC5hdy1pY29uOm5vdCgucmVhZC1vbmx5LWxpbmspIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgLy8gbm9uZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udHJvbC1kYXRhIHtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tbmltcCxcclxuICAgIC5idG4tZXh0ZXJuYWwtbGluay13cmFwcGVyLFxyXG4gICAgLmJ0bi1jbGVhci13cmFwcGVyLFxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyLFxyXG4gICAgLmJ0bi1zZWFyY2gtd3JhcHBlciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlciB7XHJcbiAgICAgIC5hdy1maWxldXBsb2FkIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51aS1idXR0b24ge1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlOTM0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tY2xlYXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tc2VhcmNoIHtcclxuICAgICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1yYWRpb2J1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICYgPiAuYXctcmFkaW9idXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMiAqICN7JG1hcmdpbi12YWx1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLWdlbmVyaWMge1xyXG4gIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG5cclxuICAmID4gYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IC5hbGVydCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcblxyXG4gICAgJi5hbGVydC0tbm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNhbGVuZGFyIHtcclxuICAmLnVpLWlucHV0d3JhcHBlci1mb2N1cyB7XHJcbiAgICAudWktY2FsZW5kYXIgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1peGluIGdyaWQtY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRjaGVja2JveC1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRjaGVja2JveC1oZWlnaHQ7XHJcblxyXG4gIC51aS1jaGtib3gge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLWNoa2JveC1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1kcm9wZG93biB7XHJcbiAgLnVpLWRyb3Bkb3duIHtcclxuICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWZvY3VzIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uLFxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbiB7XHJcbiAgICAgIHJpZ2h0OiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgQGluY2x1ZGUgdGV4dC1vdmVyZmxvdy1oaWRkZW4oKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyICogMS43NXJlbSk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZpeGVkLXdpZHRoIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZmlsZXVwbG9hZCB7XHJcbiAgQGV4dGVuZCAuYXctYnRuO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICAudWktZmlsZXVwbG9hZC1jaG9vc2Uge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAwICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1idXR0b24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtaW5wdXQoKSB7XHJcbiAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRleHRhcmVhIHtcclxuICBAaW5jbHVkZSBncmlkLWlucHV0KCk7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi1oZWlnaHQ6ICRmb3JtLWNvbnRyb2wtaGVpZ2h0O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXJhZGlvYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG4gIHdpZHRoOiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG5cclxuICAudWktcmFkaW9idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLXJhZGlvYnV0dG9uLWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcblxyXG4gICAgICAgIC51aS1yYWRpb2J1dHRvbi1pY29uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gY2FsZW5kYXItcGFuZWwge1xyXG4gIC51aS1kYXRlcGlja2VyOm5vdCgudWktZGF0ZXBpY2tlci1pbmxpbmUpIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRyb3Bkb3duLXBhbmVsIHtcclxuICAudWktZHJvcGRvd24tcGFuZWwge1xyXG4gICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuICAgIC51aS1kcm9wZG93bi1pdGVtcy13cmFwcGVyIC51aS1kcm9wZG93bi1saXN0IHtcclxuICAgICAgLnVpLWRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnVpLXN0YXRlLWhpZ2hsaWdodCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/forecast-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/forecast-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: ForecastFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastFormComponent", function() { return ForecastFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var bryntum_scheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bryntum-scheduler */ "./external/scheduler/build/scheduler.module.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/scheduler/scheduler.component */ "./src/app/shared/components/scheduler/scheduler.component.ts");
/* harmony import */ var _shared_components_scheduler_scheduler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/scheduler/scheduler.service */ "./src/app/shared/components/scheduler/scheduler.service.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _shared_constants_bsde_attribute_constants_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/constants/bsde-attribute-constants.interface */ "./src/app/shared/constants/bsde-attribute-constants.interface.ts");
/* harmony import */ var _shared_constants_bsde_event_type_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/constants/bsde-event-type-constants */ "./src/app/shared/constants/bsde-event-type-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/constants/lang-constants */ "./src/app/shared/constants/lang-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../shared/utils/bido-equipment-utils */ "./src/app/shared/utils/bido-equipment-utils.ts");
/* harmony import */ var _shared_utils_boolean_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/utils/boolean-utils */ "./src/app/shared/utils/boolean-utils.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../shared/utils/number-utils */ "./src/app/shared/utils/number-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./forecast-form.service */ "./src/app/main/maintenance/forecast/form/forecast-form.service.ts");
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
































var ForecastFormComponent = /** @class */ (function (_super) {
    __extends(ForecastFormComponent, _super);
    function ForecastFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, forecastFormService, sessionService, confirmationService, propertiesService, schedulerService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_15__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.forecastFormService = forecastFormService;
        _this.sessionService = sessionService;
        _this.confirmationService = confirmationService;
        _this.propertiesService = propertiesService;
        _this.schedulerService = schedulerService;
        _this.translateService = translateService;
        _this.bidoFunctionTypeConstants = _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_9__["BidoFunctionTypeConstants"];
        _this.forecastCategory = _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastCategory"];
        _this.component = ForecastFormComponent_1;
        _this.schedulerTimeResolutionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this.onBeforeLoadOnce();
        _this.onBeforeLoad();
        return _this;
    }
    ForecastFormComponent_1 = ForecastFormComponent;
    ForecastFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_12__["ComponentConstants"].MAI_FORECAST_FORM;
    };
    ForecastFormComponent.prototype.ngAfterViewInit = function () {
        this.initSchedulerEngine();
    };
    ForecastFormComponent.prototype.ngOnDestroy = function () {
        if (!this.isCreateOpenMode) {
            this.forecastFormService.clearMaintenanceForecastingCache(this.forecastProjectId).subscribe();
        }
    };
    ForecastFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.updateOpenMode(this.componentData.openMode);
        var componentInput = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(this.componentData.objectId)
            ? this.serializationService.deserialize(this.componentData.objectId)
            : undefined;
        this.forecastProjectId = componentInput;
        this.showForecastManagementBlock = this.isCreateOpenMode;
        this.loadForecast();
        this.filterAssetLabel = this.translateService.instant(this.getTranslateKey('filterAssetLabel'));
    };
    ForecastFormComponent.prototype.onBeforeLoad = function () {
        this.assetMap = new Map();
        this.componentContext = '';
        this.endDate = undefined;
        this.eventCounter = 1;
        this.eventList = [];
        this.filteredEventList = [];
        this.filteredResourceList = [];
        this.flightUsage = [];
        this.forecastProject = {};
        this.forecastProjectSrc = {};
        this.forecastProjectAsset = {};
        this.forecastProjectLlpEventsGeneration = false;
        this.forecastProjectOccurrenceNumber = undefined;
        this.globalMaterialAvailability = { nok: 0, ok: 0, warn: 0 };
        this.materialAvailabilityByWorkPackage = new Map();
        this.resourceList = [];
        this.schedulerLoading = false;
        this.schedulerZoomLevel = ForecastFormComponent_1.TIME_RESOLUTION_MIN_ZOOM;
        this.startDate = undefined;
        this.topAssetList = [];
        this.upcomingEventsInPastWithWarnStatus = 0;
        this.upcomingEventsWithNokStatus = 0;
        this.upcomingEventsWithOkStatus = 0;
        this.upcomingEventsWithWarnStatus = 0;
        this.upcomingEventsWithAlertStatus = 0;
        this.workPackageList = [];
        this.selectedAsset = undefined;
        this.selectedAssets = [];
        this.selectedCustomer = undefined;
        this.selectedEventModel = undefined;
        this.selectedForecastCategory = _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastCategory"].FLEET;
        this.selectedEndDate = undefined;
        this.selectedRepairCenter = undefined;
        this.selectedWorkCenter = undefined;
        this.selectedStartDate = undefined;
        this.showAssetRequiredAvailabilitiesDialog = false;
        this.showDefectDialog = false;
        this.showScheduledEventDialog = false;
        this.showEventGroupDialog = false;
        this.showFlightDialog = false;
        this.showForecastLegendDialog = false;
        this.showForecastManagementBlock = false;
        this.showResourcesdAvailabilitiesDialog = false;
        this.showSearchAssetDialog = false;
        this.showSearchFleetDialog = false;
        this.showUnscheduledEventDialog = false;
        this.showWorkPackageCreateDialog = false;
        this.showWorkPackageUpdateDialog = false;
    };
    ForecastFormComponent.prototype.onBeforeLoadOnce = function () {
        this.customerList = [];
        this.eventCategoryList = [];
        this.flightStatusList = [];
        this.flightTypeList = [];
        this.forecastProjectId = undefined;
        this.repairCenterList = [];
        this.taskTypeList = [];
        this.upcomingEventTypeList = [];
        this.workPackageAssignedToList = [];
        this.workPackageSiteList = [];
        this.workPackageStatusList = [];
        this.workPackageTypeList = [];
        this.registerEventUpdateObservable();
        this.registerForecastFilteringObservable();
        this.registerSchedulerTimeResolutionObservable();
        this.setActions();
        this.setForecastCategoryList();
        this.setNavigations();
        this.setSchedulerColumnList();
        this.setSchedulerConfig();
        this.setOccurrenceList();
        this.setTsnLabel();
    };
    Object.defineProperty(ForecastFormComponent.prototype, "forecastProjectAssetDesignation", {
        // ////////////////////////////////////////////////////////////////////////////
        get: function () {
            return _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_25__["BidoEquipmentUtils"].createAssetName(this.forecastProjectAsset);
        },
        enumerable: true,
        configurable: true
    });
    ForecastFormComponent.prototype.addUnscheduledEvent = function () {
        this.selectedAsset = this.selectedAssets[0];
        this.selectedEventModel = undefined;
        this.showUnscheduledEventDialog = true;
    };
    ForecastFormComponent.prototype.hideForecastManagement = function () {
        this.showForecastManagementBlock = false;
    };
    ForecastFormComponent.prototype.launchOptimizer = function () {
        var _this = this;
        this.confirmationService.confirm({
            messageKey: this.getTranslateKey('confirmLaunchOptimizer'),
            accept: function () {
                _this.reloadForecast(undefined, _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastLoadOption"].OPTIMIZE);
            }
        });
    };
    ForecastFormComponent.prototype.manageForecastProject = function () {
        this.showForecastManagementBlock = true;
    };
    ForecastFormComponent.prototype.onChangeTimeResolution = function (event) {
        this.schedulerTimeResolutionChanged.next(event.value);
    };
    ForecastFormComponent.prototype.onCreatedWorkPackage = function (workPackage) {
        workPackage.bidmProject.assetCode = this.selectedAsset.equipmentCode;
        workPackage.bidmProject.statusState = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SIMULATED;
        this.createWorkPackage(workPackage.bidmProject);
    };
    ForecastFormComponent.prototype.onUpdatedWorkPackage = function (event) {
        this.updateWorkPackage(event);
    };
    ForecastFormComponent.prototype.openAirworthinessStatus = function () {
        this.forecastFormService.openAirworthinessStatus(this.selectedAssets.map(function (asset) { return asset.equipmentCode; }));
    };
    ForecastFormComponent.prototype.openForecastLegendDialog = function () {
        this.showForecastLegendDialog = true;
    };
    ForecastFormComponent.prototype.openMaterialAvailabilityForAllWorkPackage = function () {
        var _this = this;
        var repairCenterCode = this.getForecastRepairCenter().repairCenterCode;
        var workPackageIds = this.workPackageList
            .filter(function (workPackage) { return workPackage.statusState !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_CLOSE; })
            .map(function (workPackage) { return workPackage.projectId; });
        this.forecastFormService.getAllSiteByCriteria({ siteCode: repairCenterCode }).subscribe({
            next: function (siteList) {
                if (_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].isNullOrEmpty(siteList) && siteList.length !== 1) {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnOpenMaterialAvailability'));
                }
                else {
                    _this.forecastFormService.openMaterialAvailabilityForAllWorkPackage(siteList[0].siteId, workPackageIds, _this.forecastProject.projectStartDate, _this.forecastProject.projectEndDate);
                }
            }
        });
    };
    ForecastFormComponent.prototype.openMaintenancePlanning = function () {
        this.forecastFormService.openMaintenancePlanning(this.selectedAssets[0].equipmentCode);
    };
    ForecastFormComponent.prototype.openStaffPlanning = function () {
        var _this = this;
        var repairCenterCode = this.getForecastRepairCenter().repairCenterCode;
        this.forecastFormService.getAllSiteByCriteria({ siteCode: repairCenterCode }).subscribe({
            next: function (siteList) {
                if (_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].isNullOrEmpty(siteList) && siteList.length !== 1) {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnOpenStaffPlanning'));
                }
                else {
                    _this.forecastFormService.openStaffPlanning(siteList[0].bidtCompanyId, siteList[0].siteId, _this.forecastProject.projectStartDate, _this.forecastProject.projectEndDate);
                }
            }
        });
    };
    ForecastFormComponent.prototype.showToday = function () {
        this.scheduler.schedulerEngine.zoomTo({
            centerDate: new Date(),
            preset: this.scheduler.schedulerEngine.viewPreset
        });
    };
    ForecastFormComponent.prototype.reloadForecast = function (id, loadOption) {
        if (loadOption === void 0) { loadOption = _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastLoadOption"].DEFAULT; }
        this.onBeforeLoad();
        if (!!id) {
            this.forecastProjectId = id;
            this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_15__["ComponentOpenMode"].Read);
        }
        this.loadForecast({ loadOption: loadOption, forceInit: !!id });
    };
    ForecastFormComponent.prototype.addUpcomingEventsToWorkPackage = function (data) {
        var _this = this;
        var asset = this.getAssetFromResourceId(data.events[0].resourceId);
        var observable = this.handleUpcomintEventAddedToWorkPackage(data.events[0], data.workPackage.projectId, asset);
        data.events.slice(1).forEach(function (event) {
            observable = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function () { return _this.handleUpcomintEventAddedToWorkPackage(event, data.workPackage.projectId, asset); }));
        });
        return observable;
    };
    ForecastFormComponent.prototype.adjustEndDateOfSchedulerEventList = function () {
        var _this = this;
        this.eventList
            .filter(function (event) { return event.eventType === _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["EventModelType"].WORK_PACKAGE; })
            .filter(function (event) { return !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(event.endDate); })
            .forEach(function (event) {
            event.endDate = _this.schedulerService.formatEventDate(_this.endDate);
        });
    };
    ForecastFormComponent.prototype.buildAssetMap = function (elementList) {
        var _this = this;
        var counter = 0;
        var aux = function (list) {
            list.forEach(function (elt) {
                _this.assetMap.set(counter.toString(), elt.equipment);
                counter++;
                aux(elt.children);
            });
        };
        aux(elementList);
    };
    ForecastFormComponent.prototype.buildSchedulerEventFromDefect = function (defect, resourceId) {
        var date = defect.deferredDefectEvent.plannedDate || defect.deferredDefectEvent.nteDate;
        var eventStatus = this.forecastFormService.calculateUpcomingEventStatus(date, defect.affectedWorkPackage);
        var formattedDate = this.schedulerService.formatEventDate(date);
        var eventModel = {
            resourceId: resourceId,
            id: this.generateSchedulerEventId(),
            startDate: formattedDate,
            endDate: formattedDate,
            name: '1',
            maxEndDate: defect.deferredDefectEvent.nteDate,
            eventType: _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["EventModelType"].DEFECT,
            resizable: false,
            _obj: defect
        };
        this.setEventColor(eventModel, eventStatus);
        return eventModel;
    };
    ForecastFormComponent.prototype.buildSchedulerEventFromFlight = function (flight, resourceId) {
        return {
            resourceId: resourceId,
            id: this.generateSchedulerEventId(),
            startDate: this.schedulerService.formatEventTimestamp(flight.startDate),
            endDate: this.schedulerService.formatEventTimestamp(flight.endDate),
            name: '',
            draggable: false,
            eventColor: _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_FLIGHT.REAL,
            eventStyle: 'line',
            eventType: _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["EventModelType"].FLIGHT,
            resizable: false,
            _obj: flight
        };
    };
    ForecastFormComponent.prototype.buildSchedulerEventFromScheduledEvent = function (event, eventType, resourceId) {
        var date = event.bsdeScheduledEvent.plannedDate || event.bsdeScheduledEvent.nteDate;
        var eventStatus = this.forecastFormService.calculateUpcomingEventStatus(date, event.affectedWorkPackage, event.bsdeScheduledEvent);
        var formattedDate = this.schedulerService.formatEventDate(date);
        var eventModel = {
            eventType: eventType,
            resourceId: resourceId,
            id: this.generateSchedulerEventId(),
            startDate: formattedDate,
            endDate: formattedDate,
            name: '1',
            maxEndDate: event.bsdeScheduledEvent.nteDate,
            resizable: false,
            _obj: event
        };
        this.setEventColor(eventModel, eventStatus);
        return eventModel;
    };
    ForecastFormComponent.prototype.buildSchedulerEventFromUnscheduledEvent = function (event, eventType, resourceId) {
        var date = event.bsdeEvent.plannedDate;
        var eventStatus = this.forecastFormService.calculateUpcomingEventStatus(date, event.affectedWorkPackage);
        var eventModel = {
            eventType: eventType,
            resourceId: resourceId,
            id: this.generateSchedulerEventId(),
            startDate: this.schedulerService.formatEventDate(date),
            endDate: this.schedulerService.formatEventDate(date),
            name: '1',
            resizable: false,
            _obj: event
        };
        this.setEventColor(eventModel, eventStatus);
        return eventModel;
    };
    ForecastFormComponent.prototype.buildSchedulerEventFromWorkPackage = function (workPackage, resourceId) {
        var name = "" + this.translateService.instant('workPackageNumberShort') + workPackage.bidmProject.projectNumber;
        var startDate = workPackage.bidmProject.projectStartDate;
        var endDate = workPackage.bidmProject.projectEndDate || workPackage.bidmProject.projectDueDate;
        var isModifiable = this.forecastFormService.checkIfWorkPackageIfModifiable(workPackage.bidmProject);
        var eventModel = {
            name: name,
            resourceId: resourceId,
            id: this.generateSchedulerEventId(),
            startDate: this.schedulerService.formatEventDate(startDate),
            endDate: _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(endDate) ? this.schedulerService.formatEventDate(endDate) : undefined,
            draggable: isModifiable,
            eventType: _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["EventModelType"].WORK_PACKAGE,
            resizable: isModifiable,
            _obj: workPackage
        };
        this.setWorkPackageColor(eventModel, workPackage.bidmProject.statusState);
        return eventModel;
    };
    ForecastFormComponent.prototype.buildSchedulerEventList = function (elementList) {
        var _this = this;
        elementList.forEach(function (element) {
            var resourceId = element.equipment.equipmentCode;
            _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].orEmpty(element.missionEquipments)
                .filter(_this.forecastFormService.isValidFlight)
                .forEach(function (flight) { return _this.eventList.push(_this.buildSchedulerEventFromFlight(flight, resourceId)); });
            _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].orEmpty(element.workPackages)
                .filter(_this.forecastFormService.isValidWorkPackage)
                .forEach(function (workPackage) {
                return _this.eventList.push(_this.buildSchedulerEventFromWorkPackage(workPackage, resourceId));
            });
            _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].orEmpty(element.defects)
                .filter(_this.forecastFormService.isValidDefect)
                .forEach(function (defect) { return _this.eventList.push(_this.buildSchedulerEventFromDefect(defect, resourceId)); });
            _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].orEmpty(element.llpAlerts)
                .filter(_this.forecastFormService.isValidScheduledEvent)
                .forEach(function (event) {
                return _this.eventList.push(_this.buildSchedulerEventFromScheduledEvent(event, _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["EventModelType"].LLP_ALERT, resourceId));
            });
            _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].orEmpty(element.scheduledEvents)
                .filter(_this.forecastFormService.isValidScheduledEvent)
                .forEach(function (event) {
                return _this.eventList.push(_this.buildSchedulerEventFromScheduledEvent(event, _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["EventModelType"].SCHEDULED_EVENT, resourceId));
            });
            _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].orEmpty(element.snChanges)
                .filter(_this.forecastFormService.isValidUnscheduledEvent)
                .forEach(function (event) {
                return _this.eventList.push(_this.buildSchedulerEventFromUnscheduledEvent(event, _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["EventModelType"].SN_CHANGE, resourceId));
            });
            _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].orEmpty(element.unscheduledEvents)
                .filter(_this.forecastFormService.isValidUnscheduledEvent)
                .forEach(function (event) {
                return _this.eventList.push(_this.buildSchedulerEventFromUnscheduledEvent(event, _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["EventModelType"].UNSCHEDULED_EVENT, resourceId));
            });
            _this.buildSchedulerEventList(element.children);
        });
    };
    ForecastFormComponent.prototype.buildSchedulerResourceFromAsset = function (element) {
        var _this = this;
        return {
            id: element.equipment.equipmentCode,
            asset: element.equipment,
            assetDescription: element.equipmentDescription,
            children: element.children.map(function (childElement) { return _this.buildSchedulerResourceFromAsset(childElement); }),
            flDescription: element.flDescription
        };
    };
    ForecastFormComponent.prototype.buildSchedulerResourceList = function (elementList) {
        var _this = this;
        this.resourceList = elementList.map(function (element) { return _this.buildSchedulerResourceFromAsset(element); });
    };
    ForecastFormComponent.prototype.buildTopAssetList = function (elementList) {
        this.topAssetList = elementList.map(function (element) { return element.equipment; });
    };
    ForecastFormComponent.prototype.calculateGlobalMaterialAvailability = function () {
        this.globalMaterialAvailability = Array.from(this.materialAvailabilityByWorkPackage.values()).reduce(function (acc, val) {
            return {
                nok: val.nok + acc.nok,
                ok: val.ok + acc.ok,
                warn: val.warn + acc.warn
            };
        }, { nok: 0, ok: 0, warn: 0 });
    };
    ForecastFormComponent.prototype.calculateUpcomingEventNumberByStatus = function (eventList) {
        var _this = this;
        var allUpcomingEvents = eventList
            .filter(function (event) { return !_this.forecastFormService.isWorkPackageSchedulerEventType(event.eventType); })
            .map(function (event) {
            if (_this.forecastFormService.isEventGroupSchedulerEventType(event.eventType)) {
                var eventGroup = event;
                return __spread(eventGroup.defectList, eventGroup.llpAlertList, eventGroup.scheduledEventList, eventGroup.snChangeList, eventGroup.unscheduledEventList);
            }
            else {
                return [event];
            }
        })
            .reduce(function (acc, val) { return acc.concat(val); }, []);
        this.upcomingEventsInPastWithWarnStatus = allUpcomingEvents.filter(function (event) { return event.eventColor === _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_EVENT[_forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].IN_PAST]; }).length;
        this.upcomingEventsWithOkStatus = allUpcomingEvents.filter(function (event) { return event.eventColor === _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_EVENT[_forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].OK]; }).length;
        this.upcomingEventsWithWarnStatus = allUpcomingEvents.filter(function (event) { return event.eventColor === _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_EVENT[_forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].WARN]; }).length;
        this.upcomingEventsWithAlertStatus = allUpcomingEvents.filter(function (event) { return event.eventColor === _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_EVENT[_forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].ALERT]; }).length;
        this.upcomingEventsWithNokStatus = allUpcomingEvents.filter(function (event) { return event.eventColor === _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_EVENT[_forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].NOK]; }).length;
    };
    ForecastFormComponent.prototype.clearHighlight = function () {
        var _this = this;
        this.eventList.forEach(function (eventModel) {
            _this.setEventCls(eventModel, _this.getEventClasses(eventModel).filter(function (cls) {
                return cls !== ForecastFormComponent_1.EVENT_HIGHLIGHT_CLS &&
                    cls !== ForecastFormComponent_1.WORK_PACKAGE_HIGHLIGHT_CLS;
            }));
        });
        this.filterForecast(this.forecastFormService.forecastFiltering);
        this.mergeFilteredEvents();
    };
    ForecastFormComponent.prototype.createWorkPackage = function (workPackage) {
        var _this = this;
        this.forecastFormService
            .createBidmProject(workPackage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (newWorkPackageId) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])({
                newWorkPackage: _this.forecastFormService.getWorkPackage(newWorkPackageId.projectId),
                siteDataList: _this.forecastFormService.controlStock(workPackage)
            });
        }))
            .subscribe({
            next: function (data) {
                _this.workPackageList = __spread(_this.workPackageList, [data.newWorkPackage]);
                _this.updateWorkPackageMaterialAvailabilityValue(data.newWorkPackage, data.siteDataList);
                var selectedResource = _this.getResourceFromResourceId(data.newWorkPackage.assetCode);
                var newWorkPackageEvent = _this.buildSchedulerEventFromWorkPackage({ bidmProject: data.newWorkPackage, bidmWorkOrderList: [] }, selectedResource.id);
                _this.eventList.push(newWorkPackageEvent);
                _this.messageService.showSuccessMessage('successMessage.createWorkPackage');
                _this.updateSchedulerView();
            }
        });
    };
    ForecastFormComponent.prototype.filterForecast = function (forecastFiltering) {
        var _this = this;
        this.filteredResourceList = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_30__["StringUtils"].isNullOrEmpty(forecastFiltering.globalSearch)
            ? this.resourceList
            : this.resourceList.filter(function (resource) {
                var equipmentName = _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_25__["BidoEquipmentUtils"].createAssetName(resource.asset);
                return (equipmentName.includes(forecastFiltering.globalSearch) ||
                    resource.assetDescription.includes(forecastFiltering.globalSearch) ||
                    resource.flDescription.includes(forecastFiltering.globalSearch));
            });
        var filteredResourceIdList = this.filteredResourceList.map(function (resource) { return resource.id; });
        this.filteredEventList = this.eventList
            .filter(function (event) { return filteredResourceIdList.includes(event.resourceId); })
            .filter(function (event) {
            if (_this.forecastFormService.isDefectSchedulerEventType(event.eventType)) {
                return (_this.forecastFormService.filterForecastByUpcomingEventStatus(forecastFiltering, event.eventColor) &&
                    _this.forecastFormService.filterForecastByUpcomingEventType(forecastFiltering, event.eventType) &&
                    _this.forecastFormService.filterForecastDefect(forecastFiltering, event));
            }
            else if (_this.forecastFormService.isScheduledEventSchedulerEventType(event.eventType)) {
                return (_this.forecastFormService.filterForecastByUpcomingEventStatus(forecastFiltering, event.eventColor) &&
                    _this.forecastFormService.filterForecastByUpcomingEventType(forecastFiltering, event.eventType) &&
                    _this.forecastFormService.filterForecastScheduledEvent(forecastFiltering, event));
            }
            else if (_this.forecastFormService.isUnscheduledEventSchedulerEventType(event.eventType)) {
                return (_this.forecastFormService.filterForecastByUpcomingEventStatus(forecastFiltering, event.eventColor) &&
                    _this.forecastFormService.filterForecastByUpcomingEventType(forecastFiltering, event.eventType) &&
                    _this.forecastFormService.filterForecastUnscheduledEvent(forecastFiltering, event));
            }
            else if (_this.forecastFormService.isWorkPackageSchedulerEventType(event.eventType)) {
                return _this.forecastFormService.filterForecastWorkPackage(forecastFiltering, event);
            }
            else {
                return true;
            }
        });
    };
    ForecastFormComponent.prototype.fillAssetListForFilter = function (elementList) {
        var _this = this;
        this.assetList = [];
        this.assetListSelected = [];
        elementList.forEach(function (maintenance) {
            if (maintenance.equipment.equipmentFunction === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
                maintenance.equipment._displayableField = maintenance.equipment.registration;
            }
            else {
                maintenance.equipment._displayableField = maintenance.equipment.pnCode + "/" + maintenance.equipment.sn;
            }
            _this.assetList.push(maintenance.equipment);
            _this.assetListSelected.push(maintenance.equipment);
        });
    };
    ForecastFormComponent.prototype.onFilterAsset = function () {
        var _this = this;
        this.filteredResourceList = this.resourceList.filter(function (resource) {
            var assetFound = false;
            _this.assetListSelected.forEach(function (asset) {
                if (asset.equipmentCode === resource.asset.equipmentCode) {
                    assetFound = true;
                }
            });
            return assetFound;
        });
    };
    ForecastFormComponent.prototype.fillWorkPackageList = function (elementList) {
        var extractWorkPackages = function (elt) {
            return elt.workPackages
                .map(function (workPackage) { return workPackage.bidmProject; })
                .concat(elt.children.map(extractWorkPackages).reduce(function (acc, val) { return acc.concat(val); }, []));
        };
        this.workPackageList = elementList
            .map(extractWorkPackages)
            .reduce(function (acc, val) { return acc.concat(val); }, [])
            .reduce(function (acc, val) {
            return acc.some(function (elt) { return elt.projectId === val; }) ? acc : __spread(acc, [val]);
        }, []);
    };
    ForecastFormComponent.prototype.findEventModelSrcById = function (id) {
        return this.eventList.find(function (event) { return event.id === id; });
    };
    ForecastFormComponent.prototype.generateSchedulerEventId = function () {
        return this.eventCounter++;
    };
    ForecastFormComponent.prototype.getAllParentResourceIds = function (resourceId) {
        var aux = function (resource, lineage) {
            if (resource.id === resourceId) {
                return lineage;
            }
            else {
                return resource.children
                    .map(function (childResource) { return aux(childResource, __spread(lineage, [resource.id])); })
                    .reduce(function (acc, val) { return acc.concat(val); }, []);
            }
        };
        return this.resourceList.map(function (resource) { return aux(resource, []); }).reduce(function (acc, val) { return acc.concat(val); }, []);
    };
    ForecastFormComponent.prototype.getAssetFromResourceId = function (resourceId) {
        var selectedResource = this.getResourceFromResourceId(resourceId);
        return selectedResource.asset;
    };
    ForecastFormComponent.prototype.getEventClasses = function (event) {
        return event.cls ? event.cls.split(' ') : [];
    };
    ForecastFormComponent.prototype.getEventModelType = function (eventModel) {
        return eventModel.eventType;
    };
    ForecastFormComponent.prototype.getEventTooltip = function (eventModel) {
        var eventModelType = this.getEventModelType(eventModel);
        if (this.forecastFormService.isWorkPackageSchedulerEventType(eventModelType)) {
            var workPackageModel = eventModel;
            return this.forecastFormService.tooltipWorkPackageSchedulerEventType(workPackageModel, this.workPackageStatusList);
        }
        else {
            return '';
        }
    };
    ForecastFormComponent.prototype.getForecastRepairCenter = function () {
        var _this = this;
        var matchingRepairCenter = this.repairCenterList.find(function (repairCenter) { return repairCenter.value.repairCenterCode === _this.forecastProject.repairCenterCode; });
        return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(matchingRepairCenter)
            ? matchingRepairCenter.value
            : undefined;
    };
    ForecastFormComponent.prototype.getNextWorkPackageStatusLabel = function (workPackage) {
        var key;
        if (workPackage.statusState === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SIMULATED) {
            key = 'validateSimulation';
        }
        else {
            key = 'releaseWorkPackage';
        }
        return this.translateService.instant(this.getTranslateKey(key));
    };
    ForecastFormComponent.prototype.getPreviousWorkPackageStatusLabel = function (workPackage) {
        var key;
        if (workPackage.statusState === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_RELEASED) {
            key = 'cancelRelease';
        }
        else {
            key = 'cancelScheduling';
        }
        return this.translateService.instant(this.getTranslateKey(key));
    };
    ForecastFormComponent.prototype.getResourceFromResourceId = function (resourceId) {
        var queue = __spread(this.resourceList);
        while (queue.length > 0) {
            var first = queue.shift();
            if (first.id === resourceId) {
                return first;
            }
            else if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].isNullOrEmpty(first.children)) {
                queue.push.apply(queue, __spread(first.children));
            }
        }
        return undefined;
    };
    ForecastFormComponent.prototype.handleUpcomintEventAddedToWorkPackage = function (eventModel, workPackageId, asset) {
        var _this = this;
        var workPackageEventModel = this.eventList.find(function (genericEventModel) {
            return (_this.forecastFormService.isWorkPackageSchedulerEventType(genericEventModel.eventType) &&
                genericEventModel._obj.bidmProject.projectId ===
                    workPackageId);
        });
        var workPackage = workPackageEventModel._obj.bidmProject;
        var observable;
        if (this.forecastFormService.isDefectSchedulerEventType(eventModel.eventType)) {
            observable = this.forecastFormService.addDeferredDefectEventToWorkPackage(eventModel, workPackage, asset, this.forecastProjectId);
        }
        else if (this.forecastFormService.isScheduledEventSchedulerEventType(eventModel.eventType)) {
            observable = this.forecastFormService.addBsdeScheduledEventToWorkPackage(eventModel, workPackage, asset, this.forecastProjectId);
        }
        else if (this.forecastFormService.isSnChangeSchedulerEventType(eventModel.eventType)) {
            observable = this.forecastFormService.addBsdeEventSnChangeToWorkPackage(eventModel, workPackage, asset, this.forecastProjectId);
        }
        else if (this.forecastFormService.isUnscheduledEventSchedulerEventType(eventModel.eventType)) {
            var unscheduledEventModel = eventModel;
            var bsdeEvent = unscheduledEventModel._obj.bsdeEvent;
            if (bsdeEvent.eventType === _shared_constants_bsde_event_type_constants__WEBPACK_IMPORTED_MODULE_11__["BsdeEventTypeConstants"].EVOLUTION_TYPE_CODE) {
                observable = this.forecastFormService.addBsdeUnscheduledEventEvolutionToWorkPackage(unscheduledEventModel, workPackage, asset, this.forecastProjectId);
            }
            else if (bsdeEvent.eventType === _shared_constants_bsde_event_type_constants__WEBPACK_IMPORTED_MODULE_11__["BsdeEventTypeConstants"].TASK_TYPE_CODE) {
                observable = this.forecastFormService.addBsdeUnscheduledEventTaskToWorkPackage(unscheduledEventModel, workPackage, asset, this.forecastProjectId);
            }
        }
        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(observable)) {
            return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (updatedWorkPackage) {
                workPackageEventModel._obj.bidmProject = updatedWorkPackage;
                return _this.forecastFormService.controlStock(workPackage);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (siteDataList) {
                _this.updateWorkPackageMaterialAvailabilityValue(workPackage, siteDataList);
                var newStatus = _this.forecastFormService.calculateUpcomingEventStatus(eventModel.endDate, workPackage);
                // Update event reference into events
                var eventModelSrc = _this.findEventModelSrcById(eventModel.id);
                eventModelSrc._obj.affectedWorkPackage = workPackage;
                _this.setEventColor(eventModelSrc, newStatus);
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnAddEventToWorkPackage'));
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined);
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined);
        }
    };
    ForecastFormComponent.prototype.handleUpcomintEventRemovedFromWorkPackage = function (eventModel, workPackageId, asset) {
        var _this = this;
        var workPackageEventModel = this.eventList.find(function (genericEventModel) {
            return (_this.forecastFormService.isWorkPackageSchedulerEventType(genericEventModel.eventType) &&
                genericEventModel._obj.bidmProject.projectId ===
                    workPackageId);
        });
        var workPackage = workPackageEventModel._obj.bidmProject;
        var observable;
        if (this.forecastFormService.isDefectSchedulerEventType(eventModel.eventType)) {
            observable = this.forecastFormService.removeDeferredDefectEventFromWorkPackage(eventModel, workPackage, asset, this.forecastProjectId);
        }
        else if (this.forecastFormService.isScheduledEventSchedulerEventType(eventModel.eventType)) {
            observable = this.forecastFormService.removeBsdeScheduledEventFromWorkPackage(eventModel, workPackage, asset, this.forecastProjectId);
        }
        else if (this.forecastFormService.isSnChangeSchedulerEventType(eventModel.eventType)) {
            observable = this.forecastFormService.removeBsdeEventSnChangeFromWorkPackage(eventModel, workPackage, asset, this.forecastProjectId);
        }
        else if (this.forecastFormService.isUnscheduledEventSchedulerEventType(eventModel.eventType)) {
            var unscheduledEventModel = eventModel;
            var bsdeEvent = unscheduledEventModel._obj.bsdeEvent;
            if (bsdeEvent.eventType === _shared_constants_bsde_event_type_constants__WEBPACK_IMPORTED_MODULE_11__["BsdeEventTypeConstants"].EVOLUTION_TYPE_CODE) {
                observable = this.forecastFormService.removeBsdeUnscheduledEventEvolutionFromWorkPackage(unscheduledEventModel, workPackage, asset, this.forecastProjectId);
            }
            else if (bsdeEvent.eventType === _shared_constants_bsde_event_type_constants__WEBPACK_IMPORTED_MODULE_11__["BsdeEventTypeConstants"].TASK_TYPE_CODE) {
                observable = this.forecastFormService.removeBsdeUnscheduledEventTaskFromWorkPackage(unscheduledEventModel, workPackage, asset, this.forecastProjectId);
            }
        }
        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(observable)) {
            return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (updatedWorkPackage) {
                workPackageEventModel._obj.bidmProject = updatedWorkPackage;
                return _this.forecastFormService.controlStock(workPackage);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (siteDataList) {
                var eventModelToUpdate = _this.findEventModelSrcById(eventModel.id);
                // Update event
                eventModelToUpdate._obj.affectedWorkPackage = undefined;
                var newStatus = _this.forecastFormService.calculateUpcomingEventStatus(eventModelToUpdate.endDate, eventModelToUpdate._obj.affectedWorkPackage);
                _this.setEventColor(eventModelToUpdate, newStatus);
                // Update work package
                _this.updateWorkPackageMaterialAvailabilityValue(workPackage, siteDataList);
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnRemoveEventToWorkPackage'));
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined);
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined);
        }
    };
    ForecastFormComponent.prototype.highlightEventsAssociatedToWorkPackage = function (selectedEventModel) {
        var _this = this;
        var workPackage = selectedEventModel._obj.bidmProject;
        // Keep only events associated to selected work package
        this.filteredEventList = this.filteredEventList.filter(function (eventModel) {
            if (eventModel.resourceId !== selectedEventModel.resourceId) {
                return true;
            }
            else {
                var eventModelType = _this.getEventModelType(eventModel);
                if (_this.forecastFormService.isDefectSchedulerEventType(eventModelType) ||
                    _this.forecastFormService.isScheduledEventSchedulerEventType(eventModelType) ||
                    _this.forecastFormService.isUnscheduledEventSchedulerEventType(eventModelType)) {
                    var upcomingEventModel = eventModel;
                    return _this.isEventAssociatedToWorkPackage(upcomingEventModel, workPackage);
                }
                else if (_this.forecastFormService.isEventGroupSchedulerEventType(eventModelType)) {
                    var eventGroupModel = eventModel;
                    return (eventGroupModel.defectList.some(function (event) { return _this.isEventAssociatedToWorkPackage(event, workPackage); }) ||
                        eventGroupModel.llpAlertList.some(function (event) { return _this.isEventAssociatedToWorkPackage(event, workPackage); }) ||
                        eventGroupModel.scheduledEventList.some(function (event) {
                            return _this.isEventAssociatedToWorkPackage(event, workPackage);
                        }) ||
                        eventGroupModel.snChangeList.some(function (event) { return _this.isEventAssociatedToWorkPackage(event, workPackage); }) ||
                        eventGroupModel.unscheduledEventList.some(function (event) {
                            return _this.isEventAssociatedToWorkPackage(event, workPackage);
                        }));
                }
                else {
                    return true;
                }
            }
        });
        // Highlight selected work pacakge
        this.filteredEventList.forEach(function (eventModel) {
            if (eventModel.id === selectedEventModel.id) {
                _this.setEventCls(eventModel, __spread(_this.getEventClasses(eventModel), [
                    ForecastFormComponent_1.WORK_PACKAGE_HIGHLIGHT_CLS
                ]));
            }
        });
    };
    ForecastFormComponent.prototype.highlightWorkPackagesAssociatedToEvent = function (selectedEventModel) {
        var _this = this;
        // Keep only work packages associated to selected event
        var workPackages = [];
        if (this.forecastFormService.isDefectSchedulerEventType(selectedEventModel.eventType) ||
            this.forecastFormService.isScheduledEventSchedulerEventType(selectedEventModel.eventType) ||
            this.forecastFormService.isUnscheduledEventSchedulerEventType(selectedEventModel.eventType)) {
            workPackages.push(selectedEventModel._obj.affectedWorkPackage);
        }
        else if (this.forecastFormService.isEventGroupSchedulerEventType(selectedEventModel.eventType)) {
            var eventGroup = selectedEventModel;
            workPackages.push.apply(workPackages, __spread(__spread(eventGroup.defectList, eventGroup.llpAlertList, eventGroup.scheduledEventList, eventGroup.snChangeList, eventGroup.unscheduledEventList).map(function (eventModel) { return eventModel._obj.affectedWorkPackage; })));
        }
        var workPackageIds = workPackages
            .filter(function (workPackage) { return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(workPackage); })
            .map(function (workPackage) { return workPackage.projectId; });
        this.filteredEventList = this.filteredEventList.filter(function (eventModel) {
            if (eventModel.resourceId !== selectedEventModel.resourceId) {
                return true;
            }
            else {
                if (_this.forecastFormService.isWorkPackageSchedulerEventType(eventModel.eventType)) {
                    var workPackageEventModel = eventModel;
                    return workPackageIds.includes(workPackageEventModel._obj.bidmProject.projectId);
                }
                else {
                    return true;
                }
            }
        });
        // Highlight selected event
        this.filteredEventList.forEach(function (eventModel) {
            if (eventModel.id === selectedEventModel.id) {
                _this.setEventCls(eventModel, __spread(_this.getEventClasses(eventModel), [ForecastFormComponent_1.EVENT_HIGHLIGHT_CLS]));
            }
        });
    };
    ForecastFormComponent.prototype.initSchedulerEngine = function () {
        if (this.translateService.currentLang === _shared_constants_lang_constants__WEBPACK_IMPORTED_MODULE_14__["LangConstants"].FRENCH_CODE) {
            this.scheduler.schedulerEngine.localeManager.locale = 'Fr';
        }
        else {
            this.scheduler.schedulerEngine.localeManager.locale = 'En';
        }
        this.registerSchedulerBeforeDragCreateFinalize();
        this.registerSchedulerBeforeEventdropfinalize();
        this.registerSchedulerBeforeEventEdit();
        this.registerSchedulerCellClick();
        this.registerSchedulerClick();
        this.registerSchedulerEventClick();
        this.registerSchedulerEventDrop();
        this.registerSchedulerEventResizeEnd();
        this.registerSchedulerListeners();
        this.setSchedulerResourceColumnWidth();
    };
    ForecastFormComponent.prototype.isEventAssociatedToWorkPackage = function (eventModel, workPackage) {
        return (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(eventModel._obj.affectedWorkPackage) &&
            eventModel._obj.affectedWorkPackage.projectId === workPackage.projectId);
    };
    ForecastFormComponent.prototype.loadForecast = function (_a) {
        var _this = this;
        var _b = _a === void 0 ? {
            loadOption: _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastLoadOption"].DEFAULT,
            forceInit: true
        } : _a, loadOption = _b.loadOption, forceInit = _b.forceInit;
        this.schedulerLoading = !this.isCreateOpenMode;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])({
            forecast: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_30__["StringUtils"].isNullOrEmpty(this.forecastProjectId)
                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])({
                    init: forceInit ? this.forecastFormService.initialize(this.forecastProjectId) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined),
                    projectAttributeList: this.forecastFormService.getBsdeProjectAttributeList({
                        projectId: this.forecastProjectId
                    }),
                    projectData: this.forecastFormService.getBsdeProject({ projectId: this.forecastProjectId })
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
                    _this.setProjectAttributeList(result.projectAttributeList);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (result1) {
                    var project = result1.projectData;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])({
                        projectAsset: _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(project.projectPn) || _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(project.projectSn)
                            ? _this.forecastFormService.getForecastProjectAsset({
                                pnCode: project.projectPn,
                                sn: project.projectSn
                            })
                            : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined),
                        data: _this.forecastFormService.loadForecastData(project, _this.forecastProjectId, _this.forecastProjectLlpEventsGeneration, _this.forecastProjectOccurrenceNumber, loadOption)
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (result2) {
                        _this.fillWorkPackageList(result2.data);
                        _this.fillAssetListForFilter(result2.data);
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])({
                            data: Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result2.data),
                            flightUsage: _this.forecastFormService.getAllForecastFlightUsage(_this.forecastProjectId),
                            materialAvailabilityByWorkPackage: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].isEmpty(_this.workPackageList)
                                ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([])
                                : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(_this.workPackageList.map(function (workPackage) { return _this.forecastFormService.controlStock(workPackage); })),
                            project: Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(project),
                            projectAsset: Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result2.projectAsset)
                        });
                    }));
                })),
            customerList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].isEmpty(this.customerList)
                ? this.forecastFormService.getAllForecastProjectCustomer()
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.customerList),
            eventCategoryList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].isEmpty(this.eventCategoryList)
                ? this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_13__["GenericPropertyConstants"].EVENT_CATEGORY_MAP)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.eventCategoryList),
            flightStatusList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].isEmpty(this.flightStatusList)
                ? this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_13__["GenericPropertyConstants"].FLIGHT_STATUS_MAP)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.flightStatusList),
            flightTypeList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].isEmpty(this.flightTypeList)
                ? this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_13__["GenericPropertyConstants"].EVENT_MISSION_TYPE_MAP)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.flightTypeList),
            repairCenterList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].isEmpty(this.repairCenterList)
                ? this.forecastFormService.getAllForecastProjectSite()
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.repairCenterList),
            taskTypeList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].isEmpty(this.taskTypeList)
                ? this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_13__["GenericPropertyConstants"].TASK_TYPE_MAP)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.taskTypeList),
            upcomingEventTypeList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].isEmpty(this.upcomingEventTypeList)
                ? this.forecastFormService.buildUpcomingEventTypeList()
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.upcomingEventTypeList),
            workPackageAssignedToList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].isEmpty(this.workPackageAssignedToList)
                ? this.forecastFormService.workPackageAssignedToList()
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.workPackageAssignedToList),
            workPackageSiteList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].isEmpty(this.workPackageSiteList)
                ? this.forecastFormService.getAllWorkPackageSite()
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.workPackageSiteList),
            workPackageStatusList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].isEmpty(this.workPackageStatusList)
                ? this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_13__["GenericPropertyConstants"].AIRM_PROJECT_STATUS_MAP)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.workPackageStatusList),
            workPackageTypeList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].isEmpty(this.workPackageTypeList)
                ? this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_13__["GenericPropertyConstants"].WORK_PACKAGE_TYPE_MAP)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.workPackageTypeList)
        }).subscribe({
            next: function (result) {
                _this.customerList = result.customerList;
                _this.eventCategoryList = result.eventCategoryList;
                _this.flightStatusList = result.flightStatusList;
                _this.flightTypeList = result.flightTypeList;
                _this.repairCenterList = result.repairCenterList;
                _this.taskTypeList = result.taskTypeList;
                _this.upcomingEventTypeList = result.upcomingEventTypeList;
                _this.workPackageAssignedToList = result.workPackageAssignedToList;
                _this.workPackageSiteList = result.workPackageSiteList;
                _this.workPackageStatusList = result.workPackageStatusList;
                _this.workPackageTypeList = result.workPackageTypeList;
                if (!_this.isCreateOpenMode) {
                    _this.forecastFormService.initForecastFiltering(_this.upcomingEventTypeList, _this.workPackageStatusList);
                    var forecast = result.forecast;
                    _this.forecastProjectSrc = forecast.project;
                    _this.forecastProject = __assign({}, _this.forecastProjectSrc);
                    _this.forecastProjectAsset = forecast.projectAsset || {};
                    _this.flightUsage = forecast.flightUsage;
                    _this.setComponentContext();
                    _this.setForecastCategory();
                    _this.setForecastCustomerCode();
                    _this.setForecastRepairCenterCode();
                    _this.setForecastWorkCenterCode();
                    forecast.materialAvailabilityByWorkPackage.forEach(function (siteDataList, i) {
                        _this.updateWorkPackageMaterialAvailabilityValue(_this.workPackageList[i], siteDataList);
                    });
                    _this.buildSchedulerResourceList(forecast.data);
                    _this.buildSchedulerEventList(forecast.data);
                    _this.buildAssetMap(forecast.data);
                    _this.buildTopAssetList(forecast.data);
                    _this.adjustEndDateOfSchedulerEventList();
                    _this.updateSchedulerView();
                    setTimeout(function () {
                        _this.scheduler.schedulerEngine.zoomToFit();
                        _this.schedulerZoomLevel =
                            _this.scheduler.schedulerEngine.zoomLevel > ForecastFormComponent_1.TIME_RESOLUTION_MAX_ZOOM
                                ? ForecastFormComponent_1.TIME_RESOLUTION_MAX_ZOOM
                                : _this.scheduler.schedulerEngine.zoomLevel < ForecastFormComponent_1.TIME_RESOLUTION_MIN_ZOOM
                                    ? ForecastFormComponent_1.TIME_RESOLUTION_MIN_ZOOM
                                    : _this.scheduler.schedulerEngine.zoomLevel;
                        _this.schedulerLoading = false;
                    });
                    if (loadOption === _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastLoadOption"].OPTIMIZE) {
                        _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnLaunchOptimizer'));
                    }
                }
            }
        });
    };
    ForecastFormComponent.prototype.mergeFilteredEvents = function () {
        var _this = this;
        var eventMap = new Map();
        this.filteredEventList
            .filter(function (event) {
            return (!_this.forecastFormService.isFlightSchedulerEventType(event.eventType) &&
                !_this.forecastFormService.isWorkPackageSchedulerEventType(event.eventType));
        })
            .forEach(function (event) {
            var eventKey = event.resourceId + "#" + event.startDate;
            if (!eventMap.has(eventKey)) {
                eventMap.set(eventKey, []);
            }
            eventMap.set(eventKey, __spread(eventMap.get(eventKey), [event]));
        });
        __spread(eventMap.values()).filter(function (eventList) { return eventList.length > 1; })
            .forEach(function (eventToMergeList) {
            // 1. Remove all events with same date from eventList
            var eventToMergeIdList = eventToMergeList.map(function (event) { return event.id; });
            _this.filteredEventList = _this.filteredEventList.filter(function (event) { return !eventToMergeIdList.includes(event.id); });
            // 2. Add a new event regrouping all events at given date
            var defectList = _this.forecastFormService.getDefectList(eventToMergeList);
            var llpAlertList = _this.forecastFormService.getLlpAlertList(eventToMergeList);
            var scheduledEventList = _this.forecastFormService.getScheduledEventList(eventToMergeList);
            var snChangeList = _this.forecastFormService.getSnChangeList(eventToMergeList);
            var unscheduledEventList = _this.forecastFormService.getUnscheduledEventList(eventToMergeList);
            var upcomingEventsCount = defectList.length +
                llpAlertList.length +
                scheduledEventList.length +
                snChangeList.length +
                unscheduledEventList.length;
            var eventGroup = {
                defectList: defectList,
                llpAlertList: llpAlertList,
                scheduledEventList: scheduledEventList,
                snChangeList: snChangeList,
                unscheduledEventList: unscheduledEventList,
                id: _this.generateSchedulerEventId(),
                resourceId: eventToMergeList[0].resourceId,
                startDate: eventToMergeList[0].startDate,
                endDate: eventToMergeList[0].endDate,
                name: upcomingEventsCount > ForecastFormComponent_1.EVENT_GROUP_MAX_VALUE_DISPLAYED
                    ? ForecastFormComponent_1.EVENT_GROUP_MAX_VALUE_LABEL
                    : "" + upcomingEventsCount,
                eventType: _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["EventModelType"].EVENT_GROUP,
                resizable: false
            };
            _this.setEventGroupColor(eventGroup);
            _this.filteredEventList.push(eventGroup);
        });
    };
    ForecastFormComponent.prototype.registerEventUpdateObservable = function () {
        var _this = this;
        this.forecastFormService.eventGroupPlannedDateUpdate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe)).subscribe({
            next: function (data) {
                _this.updatePlannedDateForEventGroup(data).subscribe({
                    next: function () {
                        _this.updateSchedulerView();
                    }
                });
            }
        });
        this.forecastFormService.eventsAddedToWorkPackage$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe)).subscribe({
            next: function (data) {
                _this.addUpcomingEventsToWorkPackage(data).subscribe({
                    next: function () {
                        _this.updateSchedulerView();
                    }
                });
            }
        });
        this.forecastFormService.eventsRemovedFromWorkPackage$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe)).subscribe({
            next: function (data) {
                _this.removeUpcomingEventsFromWorkPackage(data).subscribe({
                    next: function () {
                        _this.updateSchedulerView();
                    }
                });
            }
        });
        this.forecastFormService.scheduledEventPlannedDateUpdate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe)).subscribe({
            next: function (data) {
                _this.updatePlannedDateForScheduledEvent(data.event, data.plannedDate).subscribe({
                    next: function () {
                        _this.updateSchedulerView();
                    }
                });
            }
        });
        this.forecastFormService.unscheduledEventCreate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe)).subscribe({
            next: function (data) {
                _this.forecastFormService.createBsdeEvent(data.event).subscribe({
                    next: function () {
                        _this.messageService.showSuccessMessage('successMessage.createUnscheduledEvent');
                        _this.reloadForecast(undefined); // TODO: avoid full reload
                    }
                });
            }
        });
        this.forecastFormService.unscheduledEventUpdate$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe)).subscribe({
            next: function (data) {
                _this.updatePlannedDateForUnscheduledEvent(data.event, data.event._obj.bsdeEvent.plannedDate).subscribe({
                    next: function () {
                        _this.updateSchedulerView();
                    }
                });
            }
        });
    };
    ForecastFormComponent.prototype.registerForecastFilteringObservable = function () {
        var _this = this;
        this.forecastFormService.forecastFiltering$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe)).subscribe({
            next: function () {
                _this.updateSchedulerView();
            }
        });
    };
    ForecastFormComponent.prototype.registerSchedulerBeforeDragCreateFinalize = function () {
        var _this = this;
        this.scheduler.schedulerEngine.on('beforeDragCreateFinalize', function (_a) {
            var context = _a.context;
            context.async = true;
            _this.selectedAsset = _this.getAssetFromResourceId(context.resourceRecord.id);
            _this.selectedEndDate = context.endDate;
            _this.selectedStartDate = context.startDate;
            _this.showWorkPackageCreateDialog = true;
            context.finalize(false);
        });
    };
    ForecastFormComponent.prototype.registerSchedulerBeforeEventdropfinalize = function () {
        var _this = this;
        this.scheduler.schedulerEngine.on('beforeeventdropfinalize', function (_a) {
            var context = _a.context;
            context.async = true;
            var dropStatus = false;
            if (_this.forecastFormService.isWorkPackageSchedulerEventType(context.record.data.eventType)) {
                if (context.targetEventRecord || context.newResource.id !== context.record.data.resourceId) {
                    _this.messageService.showWarningMessage(_this.getTranslateKey('warningOnInvalidOperation'));
                }
                else {
                    dropStatus = true;
                }
            }
            else if (_this.forecastFormService.isEventGroupSchedulerEventType(context.record.data.eventType)) {
                if (context.targetEventRecord) {
                    if (!_this.forecastFormService.isWorkPackageSchedulerEventType(context.targetEventRecord.data.eventType) ||
                        (context.newResource.id !== context.record.data.resourceId &&
                            !_this.getAllParentResourceIds(context.record.data.resourceId).includes(context.newResource.id))) {
                        _this.messageService.showWarningMessage(_this.getTranslateKey('warningOnInvalidOperation'));
                    }
                    else {
                        var eventGroup = context.record.data;
                        var eventsInEventGroup_1 = __spread(eventGroup.defectList, eventGroup.llpAlertList, eventGroup.scheduledEventList, eventGroup.snChangeList, eventGroup.unscheduledEventList);
                        var hasEventAlreadyAffected = eventsInEventGroup_1.some(function (event) {
                            return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(event._obj.affectedWorkPackage);
                        });
                        if (hasEventAlreadyAffected) {
                            _this.messageService.showWarningMessage(_this.getTranslateKey('warningOnSomeEventsAlreadyAffectedToWorkPackage'));
                        }
                        else {
                            _this.confirmationService.confirm({
                                interpolateParams: {
                                    value: context.targetEventRecord.data._obj
                                        .bidmProject.projectNumber
                                },
                                messageKey: _this.getTranslateKey('confirmAddToWorkPackage'),
                                accept: function () {
                                    _this.addUpcomingEventsToWorkPackage({
                                        events: eventsInEventGroup_1,
                                        workPackage: context.targetEventRecord
                                            .data._obj.bidmProject
                                    }).subscribe({
                                        next: function () {
                                            _this.updateSchedulerView();
                                        }
                                    });
                                }
                            });
                        }
                    }
                }
                else if (!_this.forecastFormService.isValidPlannedDateForEventGroup(context.record.data, context.endDate)) {
                    _this.messageService.showWarningMessage(_this.getTranslateKey('warningOnChosenDatePosteriorToSomeNotToExceedDate'));
                }
                else {
                    dropStatus = true;
                }
            }
            else if (_this.forecastFormService.isDefectSchedulerEventType(context.record.data.eventType) ||
                _this.forecastFormService.isScheduledEventSchedulerEventType(context.record.data.eventType) ||
                _this.forecastFormService.isUnscheduledEventSchedulerEventType(context.record.data.eventType)) {
                if (context.targetEventRecord) {
                    if (!_this.forecastFormService.isWorkPackageSchedulerEventType(context.targetEventRecord.data.eventType) ||
                        (context.newResource.id !== context.record.data.resourceId &&
                            !_this.getAllParentResourceIds(context.record.data.resourceId).includes(context.newResource.id))) {
                        _this.messageService.showWarningMessage(_this.getTranslateKey('warningOnInvalidOperation'));
                    }
                    else {
                        _this.confirmationService.confirm({
                            interpolateParams: {
                                value: context.targetEventRecord.data._obj
                                    .bidmProject.projectNumber
                            },
                            messageKey: _this.getTranslateKey('confirmAddToWorkPackage'),
                            accept: function () {
                                _this.handleUpcomintEventAddedToWorkPackage(context.record.data, context.targetEventRecord.data._obj.bidmProject.projectId, _this.getAssetFromResourceId(context.record.data.resourceId)).subscribe({
                                    next: function () {
                                        _this.updateSchedulerView();
                                    }
                                });
                            }
                        });
                    }
                }
                else if ((_this.forecastFormService.isDefectSchedulerEventType(context.record.data.eventType) ||
                    _this.forecastFormService.isScheduledEventSchedulerEventType(context.record.data.eventType)) &&
                    moment__WEBPACK_IMPORTED_MODULE_3__(context.endDate).isAfter(moment__WEBPACK_IMPORTED_MODULE_3__(context.record.data.maxEndDate))) {
                    _this.messageService.showWarningMessage(_this.getTranslateKey('warningOnChosenDatePosteriorToNotToExceedDate'));
                }
                else {
                    dropStatus = true;
                }
            }
            context.finalize(dropStatus);
        });
    };
    ForecastFormComponent.prototype.registerSchedulerBeforeEventEdit = function () {
        var _this = this;
        this.scheduler.schedulerEngine.on('beforeEventEdit', function (_a) {
            var eventRecord = _a.eventRecord;
            var eventModel = eventRecord.data;
            var eventModelType = _this.getEventModelType(eventModel);
            _this.selectedEventModel = eventModel;
            if (_this.forecastFormService.isDefectSchedulerEventType(eventModelType)) {
                _this.showDefectDialog = true;
            }
            else if (_this.forecastFormService.isFlightSchedulerEventType(eventModelType)) {
                _this.forecastFormService.openFlight(eventModel._obj);
            }
            else if (_this.forecastFormService.isEventGroupSchedulerEventType(eventModelType)) {
                _this.showEventGroupDialog = true;
            }
            else if (_this.forecastFormService.isScheduledEventSchedulerEventType(eventModelType)) {
                _this.showScheduledEventDialog = true;
            }
            else if (_this.forecastFormService.isUnscheduledEventSchedulerEventType(eventModelType)) {
                _this.showUnscheduledEventDialog = true;
            }
            else if (_this.forecastFormService.isWorkPackageSchedulerEventType(eventModelType)) {
                _this.showWorkPackageUpdateDialog = true;
            }
            return false;
        });
    };
    ForecastFormComponent.prototype.registerSchedulerCellClick = function () {
        var _this = this;
        this.scheduler.schedulerEngine.on('cellClick', function (_a) {
            var cellElement = _a.cellElement, record = _a.record;
            if (cellElement.classList.contains('b-tree-cell')) {
                cellElement.classList.remove('b-focused');
                cellElement.classList.remove('b-selected');
                if (cellElement.parentElement) {
                    cellElement.parentElement.classList.remove('b-selected');
                }
                if (_this.selectedAssets.includes(record.asset)) {
                    cellElement.classList.remove('resource-selected');
                    _this.selectedAssets = _this.selectedAssets.filter(function (selectedAsset) { return selectedAsset !== record.asset; });
                }
                else {
                    cellElement.classList.add('resource-selected');
                    _this.selectedAssets = __spread(_this.selectedAssets, [record.asset]);
                }
            }
        });
    };
    ForecastFormComponent.prototype.registerSchedulerClick = function () {
        var _this = this;
        this.scheduler.schedulerEngine.on('scheduleClick', function () {
            _this.clearHighlight();
        });
    };
    ForecastFormComponent.prototype.registerSchedulerEventClick = function () {
        var _this = this;
        this.scheduler.schedulerEngine.on('eventClick', function (_a) {
            var eventRecord = _a.eventRecord;
            var eventModelType = _this.getEventModelType(eventRecord.data);
            if (_this.forecastFormService.isDefectSchedulerEventType(eventModelType) ||
                _this.forecastFormService.isScheduledEventSchedulerEventType(eventModelType) ||
                _this.forecastFormService.isUnscheduledEventSchedulerEventType(eventModelType) ||
                _this.forecastFormService.isEventGroupSchedulerEventType(eventModelType)) {
                if (_this.getEventClasses(eventRecord.data).includes(ForecastFormComponent_1.EVENT_HIGHLIGHT_CLS)) {
                    _this.clearHighlight();
                }
                else {
                    _this.highlightWorkPackagesAssociatedToEvent(eventRecord.data);
                }
            }
            else if (_this.forecastFormService.isWorkPackageSchedulerEventType(eventModelType)) {
                if (_this.getEventClasses(eventRecord.data).includes(ForecastFormComponent_1.WORK_PACKAGE_HIGHLIGHT_CLS)) {
                    _this.clearHighlight();
                }
                else {
                    _this.highlightEventsAssociatedToWorkPackage(eventRecord.data);
                }
            }
            else {
                _this.clearHighlight();
            }
        });
    };
    ForecastFormComponent.prototype.registerSchedulerEventDrop = function () {
        var _this = this;
        this.scheduler.schedulerEngine.on('eventDrop', function (_a) {
            var eventRecords = _a.eventRecords;
            var eventRecord = eventRecords[0];
            var eventModel = eventRecord.data;
            var eventModelType = _this.getEventModelType(eventModel);
            if (_this.forecastFormService.isDefectSchedulerEventType(eventModelType)) {
                _this.updateDefectDates(eventModel, eventModel.startDate);
            }
            else if (_this.forecastFormService.isScheduledEventSchedulerEventType(eventModelType)) {
                _this.updatePlannedDateForScheduledEvent(eventModel, eventModel.startDate).subscribe({
                    next: function () {
                        _this.updateSchedulerView();
                    }
                });
            }
            else if (_this.forecastFormService.isUnscheduledEventSchedulerEventType(eventModelType)) {
                _this.updatePlannedDateForUnscheduledEvent(eventModel, eventModel.startDate).subscribe({
                    next: function () {
                        _this.updateSchedulerView();
                    }
                });
            }
            else if (_this.forecastFormService.isEventGroupSchedulerEventType(eventModelType)) {
                var eventGroup = eventModel;
                _this.updatePlannedDateForEventGroup({
                    eventGroup: eventGroup,
                    events: __spread(eventGroup.defectList, eventGroup.llpAlertList, eventGroup.scheduledEventList, eventGroup.snChangeList, eventGroup.unscheduledEventList),
                    plannedDate: eventModel.endDate
                }).subscribe({
                    next: function () {
                        _this.updateSchedulerView();
                    }
                });
            }
            else if (_this.forecastFormService.isWorkPackageSchedulerEventType(eventModelType)) {
                _this.updateWorkPackageDates(eventModel, eventModel.startDate, eventModel.endDate);
            }
        });
    };
    ForecastFormComponent.prototype.registerSchedulerEventResizeEnd = function () {
        var _this = this;
        this.scheduler.schedulerEngine.on('eventResizeEnd', function (_a) {
            var eventRecord = _a.eventRecord;
            var eventModel = eventRecord.data;
            var eventModelType = _this.getEventModelType(eventModel);
            if (_this.forecastFormService.isWorkPackageSchedulerEventType(eventModelType)) {
                _this.updateWorkPackageDates(eventModel, eventModel.startDate, eventModel.endDate);
            }
        });
    };
    ForecastFormComponent.prototype.registerSchedulerListeners = function () {
        var _this = this;
        bryntum_scheduler__WEBPACK_IMPORTED_MODULE_2__["EventHelper"].addListener(this.scheduler.schedulerEngine.element, {
            element: this.scheduler.schedulerEngine.element,
            click: function (event) {
                var eventTarget = event.target;
                if (eventTarget.classList.contains(ForecastFormComponent_1.ASSET_NAME_CLS) &&
                    _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(_this.assetMap.get(eventTarget.id))) {
                    _this.forecastFormService.openAsset(_this.assetMap.get(eventTarget.id));
                }
            }
        });
    };
    ForecastFormComponent.prototype.registerSchedulerTimeResolutionObservable = function () {
        var _this = this;
        this.schedulerTimeResolutionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe)).subscribe({
            next: function (value) {
                _this.scheduler.schedulerEngine.zoomTo(value);
            }
        });
    };
    ForecastFormComponent.prototype.removeUpcomingEventsFromWorkPackage = function (data) {
        var _this = this;
        var asset = this.getAssetFromResourceId(data.events[0].resourceId);
        var observable = this.handleUpcomintEventRemovedFromWorkPackage(data.events[0], data.workPackage.projectId, asset);
        data.events.slice(1).forEach(function (event) {
            observable = observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function () {
                return _this.handleUpcomintEventRemovedFromWorkPackage(event, data.workPackage.projectId, asset);
            }));
        });
        return observable;
    };
    ForecastFormComponent.prototype.removeWorkPackage = function (eventModel) {
        var _this = this;
        var workPackageToRemove = eventModel._obj.bidmProject;
        this.confirmationService.confirmDelete({
            messageKey: 'confirmationMessage.removeWorkPackage',
            accept: function () {
                var input = {
                    projectId: workPackageToRemove.projectId
                };
                _this.forecastFormService.removeBidmProject(input).subscribe({
                    next: function () {
                        // Remove work package from materialAvailabilityByWorkPackage map
                        _this.materialAvailabilityByWorkPackage.delete(workPackageToRemove.projectId);
                        // Remove work package from scheduler events
                        _this.eventList = _this.eventList.filter(function (event) { return event.id !== eventModel.id; });
                        // Update upcoming events associated to that work package
                        var updateEventAssociatedToWorkPackage = function (event) {
                            if (event._obj.affectedWorkPackage &&
                                event._obj.affectedWorkPackage.projectId === workPackageToRemove.projectId) {
                                event._obj.affectedWorkPackage = undefined;
                                var newStatus = _this.forecastFormService.calculateUpcomingEventStatus(event.endDate, undefined);
                                _this.setEventColor(event, newStatus);
                            }
                        };
                        _this.eventList.forEach(function (genericEvent) {
                            if (_this.forecastFormService.isDefectSchedulerEventType(genericEvent.eventType) ||
                                _this.forecastFormService.isScheduledEventSchedulerEventType(genericEvent.eventType) ||
                                _this.forecastFormService.isUnscheduledEventSchedulerEventType(genericEvent.eventType)) {
                                updateEventAssociatedToWorkPackage(genericEvent);
                            }
                            else if (_this.forecastFormService.isEventGroupSchedulerEventType(genericEvent.eventType)) {
                                var eventGroup = genericEvent;
                                eventGroup.defectList.forEach(updateEventAssociatedToWorkPackage);
                                eventGroup.llpAlertList.forEach(updateEventAssociatedToWorkPackage);
                                eventGroup.scheduledEventList.forEach(updateEventAssociatedToWorkPackage);
                                eventGroup.snChangeList.forEach(updateEventAssociatedToWorkPackage);
                                eventGroup.unscheduledEventList.forEach(updateEventAssociatedToWorkPackage);
                                _this.setEventGroupColor(eventGroup);
                            }
                        });
                        _this.messageService.showSuccessMessage('successMessage.removeWorkPackage');
                        _this.updateSchedulerView();
                    }
                });
            }
        });
    };
    ForecastFormComponent.prototype.displayAssetRequiredAvailabilitiesDialog = function () {
        this.showAssetRequiredAvailabilitiesDialog = true;
    };
    ForecastFormComponent.prototype.displayResourcesdAvailabilitiesDialog = function () {
        this.showResourcesdAvailabilitiesDialog = true;
    };
    ForecastFormComponent.prototype.setActions = function () {
        var _this = this;
        var configureAssetRequiredAvailabilitiesKey = this.getTranslateKey('configureAssetRequiredAvailabilities');
        var configureResourcesAvailabilitiesKey = this.getTranslateKey('configureResourcesAvailabilities');
        var editProjectHeaderKey = this.getTranslateKey('editProjectHeader');
        var launchOptimizerKey = this.getTranslateKey('launchOptimizer');
        this.translateService
            .get([
            configureAssetRequiredAvailabilitiesKey,
            configureResourcesAvailabilitiesKey,
            editProjectHeaderKey,
            launchOptimizerKey
        ])
            .subscribe({
            next: function (translations) {
                _this.actions = [
                    {
                        label: translations[editProjectHeaderKey],
                        command: function () {
                            _this.manageForecastProject();
                        }
                    },
                    {
                        label: translations[configureAssetRequiredAvailabilitiesKey],
                        command: function () {
                            _this.showAssetRequiredAvailabilitiesDialog = true;
                        }
                    },
                    {
                        label: translations[configureResourcesAvailabilitiesKey],
                        command: function () {
                            _this.showResourcesdAvailabilitiesDialog = true;
                        }
                    },
                    {
                        label: translations[launchOptimizerKey],
                        command: function () {
                            _this.launchOptimizer();
                        }
                    }
                ];
            }
        });
    };
    ForecastFormComponent.prototype.setComponentContext = function () {
        this.componentContext = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(this.forecastProjectId)
            ? this.forecastProject.projectNumber + " | " + this.forecastProject.projectName
            : 'tab.createMode';
        this.displayComponentContext(this.componentContext, this.isCreateOpenMode);
    };
    ForecastFormComponent.prototype.setEventCls = function (event, classes) {
        event.cls = classes.join(' ');
    };
    ForecastFormComponent.prototype.setEventColor = function (event, status) {
        event.eventColor = _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_EVENT[status];
        this.updateEventCls(event);
    };
    ForecastFormComponent.prototype.setEventContextMenu = function (eventModel, items) {
        var eventModelType = this.getEventModelType(eventModel);
        if (this.forecastFormService.isDefectSchedulerEventType(eventModelType) ||
            this.forecastFormService.isScheduledEventSchedulerEventType(eventModelType) ||
            this.forecastFormService.isUnscheduledEventSchedulerEventType(eventModelType)) {
            this.setEventContextMenuForUpcomingEvent(eventModel, items);
        }
        else if (this.forecastFormService.isWorkPackageSchedulerEventType(eventModelType)) {
            this.setEventContextMenuForWorkPackage(eventModel, items);
        }
        else if (this.forecastFormService.isEventGroupSchedulerEventType(eventModelType)) {
            this.setEventContextMenuForUpcomingEventGroup(items);
        }
        else if (this.forecastFormService.isFlightSchedulerEventType(eventModelType)) {
            this.setEventContextMenuForFlight(items);
        }
    };
    ForecastFormComponent.prototype.setEventContextMenuForFlight = function (items) {
        items.editEvent.text = this.translateService.instant('openFlight');
        items.editEvent.icon = '';
    };
    ForecastFormComponent.prototype.setEventContextMenuForUpcomingEvent = function (eventModel, items) {
        var _this = this;
        items.editEvent.text = this.translateService.instant(this.getTranslateKey('editMainInformation'));
        items.editEvent.icon = '';
        items.open = {
            text: this.translateService.instant('openObject', {
                value: this.translateService.instant(this.forecastFormService.getUpcomingEventKey(eventModel))
            }),
            onItem: function () {
                _this.forecastFormService.openEvent(eventModel);
            }
        };
        var asset = this.getAssetFromResourceId(eventModel.resourceId);
        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(eventModel._obj.affectedWorkPackage)) {
            var contextMenuEntryPrefix = this.translateService.instant('removeFromWorkPackage');
            var workPackage_1 = eventModel._obj.affectedWorkPackage;
            items["" + contextMenuEntryPrefix + workPackage_1.projectId] = {
                text: contextMenuEntryPrefix + " n\u00B0" + workPackage_1.projectNumber,
                onItem: function () {
                    _this.handleUpcomintEventRemovedFromWorkPackage(eventModel, workPackage_1.projectId, asset).subscribe({
                        next: function () {
                            _this.updateSchedulerView();
                        }
                    });
                }
            };
        }
        else {
            var contextMenuEntryPrefix_1 = this.translateService.instant('addToWorkPackageNb');
            this.eventList
                .filter(function (event) { return event.resourceId === eventModel.resourceId; })
                .filter(function (event) { return _this.forecastFormService.isWorkPackageSchedulerEventType(event.eventType); })
                .map(function (event) { return event._obj.bidmProject; })
                .sort(this.forecastFormService.sortWorkPackages)
                .forEach(function (workPackage) {
                items["" + contextMenuEntryPrefix_1 + workPackage.projectId] = {
                    text: contextMenuEntryPrefix_1 + " " + workPackage.projectNumber,
                    onItem: function () {
                        _this.handleUpcomintEventAddedToWorkPackage(eventModel, workPackage.projectId, asset).subscribe({
                            next: function () {
                                _this.updateSchedulerView();
                            }
                        });
                    }
                };
            });
        }
    };
    ForecastFormComponent.prototype.setEventContextMenuForUpcomingEventGroup = function (items) {
        var _this = this;
        items.editEvent.text = this.translateService.instant(this.getTranslateKey('updatePlannedDate'));
        items.editEvent.icon = '';
        items.updatePlannedDateForSubset = {
            text: this.translateService.instant(this.getTranslateKey('manageUpcomingEvents')),
            onItem: function (_a) {
                var eventRecord = _a.eventRecord;
                var eventModel = eventRecord.data;
                _this.selectedEventModel = eventModel;
                _this.selectedStartDate = eventModel.startDate;
                _this.showEventGroupDialog = true;
            }
        };
    };
    ForecastFormComponent.prototype.setEventContextMenuForWorkPackage = function (eventModel, items) {
        var _this = this;
        items.editEvent.text = this.translateService.instant(this.getTranslateKey('editMainInformation'));
        items.editEvent.icon = '';
        items.openWorkPackage = {
            text: this.translateService.instant(this.getTranslateKey('openWorkPackage')),
            onItem: function () {
                _this.forecastFormService.openWorkPackage(eventModel._obj.bidmProject);
            }
        };
        items.materialAvailability = {
            text: this.translateService.instant(this.getTranslateKey('openMaterialAvailability')),
            onItem: function () {
                _this.forecastFormService.openMaterialAvailability(eventModel._obj.bidmProject.projectId);
            }
        };
        items.openWorkOrders = {
            text: this.translateService.instant(this.getTranslateKey('openWorkOrders')),
            onItem: function () {
                _this.forecastFormService.openWorkOrders(eventModel._obj.bidmProject);
            }
        };
        if (eventModel._obj.bidmProject.statusState === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SIMULATED ||
            eventModel._obj.bidmProject.statusState === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SCHEDULED) {
            items.goToNextWorkPackageStatus = {
                text: this.getNextWorkPackageStatusLabel(eventModel._obj.bidmProject),
                onItem: function () {
                    _this.forecastFormService.setWorkPackageToNextStatus(eventModel._obj.bidmProject);
                    _this.updateWorkPackage(eventModel);
                }
            };
        }
        if (eventModel._obj.bidmProject.statusState === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_RELEASED ||
            eventModel._obj.bidmProject.statusState === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SCHEDULED) {
            items.goToPreviousWorkPackageStatus = {
                text: this.getPreviousWorkPackageStatusLabel(eventModel._obj.bidmProject),
                onItem: function () {
                    _this.forecastFormService.setWorkPackageToPreviousStatus(eventModel._obj.bidmProject);
                    _this.updateWorkPackage(eventModel);
                }
            };
        }
        if (eventModel._obj.bidmProject.statusState === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SIMULATED) {
            items.removeWorkPackage = {
                text: this.translateService.instant('removeWorkPackage'),
                onItem: function () {
                    _this.removeWorkPackage(eventModel);
                }
            };
        }
    };
    ForecastFormComponent.prototype.setEventGroupColor = function (eventGroup) {
        var eventList = __spread(eventGroup.defectList, eventGroup.llpAlertList, eventGroup.scheduledEventList, eventGroup.snChangeList, eventGroup.unscheduledEventList);
        var atLeastOneInPast = eventList.some(function (event) { return event.eventColor === _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_EVENT[_forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].IN_PAST]; });
        var atLeastOneNok = !atLeastOneInPast &&
            eventList.some(function (event) { return event.eventColor === _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_EVENT[_forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].NOK]; });
        var atLeastOneWarn = !atLeastOneNok &&
            !atLeastOneInPast &&
            eventList.some(function (event) { return event.eventColor === _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_EVENT[_forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].WARN]; });
        eventGroup.eventColor =
            _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_EVENT[atLeastOneInPast
                ? _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].IN_PAST
                : atLeastOneNok
                    ? _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].NOK
                    : atLeastOneWarn
                        ? _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].WARN
                        : _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].OK];
        this.updateEventCls(eventGroup);
    };
    ForecastFormComponent.prototype.setForecastCategory = function () {
        if (this.forecastProject.projectFleetCode) {
            this.selectedForecastCategory = _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastCategory"].FLEET;
        }
        else if (this.forecastProjectAsset) {
            this.selectedForecastCategory = _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastCategory"].ASSET;
        }
    };
    ForecastFormComponent.prototype.setForecastCategoryList = function () {
        var _this = this;
        var assetKey = 'asset';
        var fleetKey = 'fleet';
        this.translateService.get([assetKey, fleetKey]).subscribe({
            next: function (results) {
                var assetLabel = !!results ? results[assetKey] : 'Asset';
                var fleetLabel = !!results ? results[fleetKey] : 'Fleet';
                _this.forecastCategoryList = [
                    { label: assetLabel, value: _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastCategory"].ASSET },
                    { label: fleetLabel, value: _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastCategory"].FLEET }
                ];
            }
        });
    };
    ForecastFormComponent.prototype.setForecastCustomerCode = function () {
        var _this = this;
        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(this.forecastProject.customerCode)) {
            var matchingCustomer = this.customerList.find(function (customer) { return customer.value.customerCode === _this.forecastProject.customerCode; });
            this.selectedCustomer = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(matchingCustomer)
                ? matchingCustomer.value
                : undefined;
        }
    };
    ForecastFormComponent.prototype.setForecastRepairCenterCode = function () {
        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(this.forecastProject.repairCenterCode)) {
            this.selectedRepairCenter = this.getForecastRepairCenter();
        }
    };
    ForecastFormComponent.prototype.setForecastWorkCenterCode = function () {
        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(this.forecastProject.whId)) {
            this.selectedWorkCenter = this.forecastProject.whId;
        }
    };
    ForecastFormComponent.prototype.setNavigations = function () {
        var _this = this;
        var materialAvailabilityKey = 'materialAvailability';
        var staffPlanningKey = 'staffPlanning';
        this.translateService.get([materialAvailabilityKey, staffPlanningKey]).subscribe({
            next: function (translations) {
                _this.navigations = [
                    {
                        label: translations[materialAvailabilityKey],
                        command: function () {
                            _this.openMaterialAvailabilityForAllWorkPackage();
                        }
                    },
                    {
                        label: translations[staffPlanningKey],
                        command: function () {
                            _this.openStaffPlanning();
                        }
                    }
                ];
            }
        });
    };
    ForecastFormComponent.prototype.setOccurrenceList = function () {
        var OCCURRENCE_MAX_VALUE = 5; // TODO: get value from backend
        this.occurrenceList = Array.from(Array(OCCURRENCE_MAX_VALUE + 1).keys())
            .slice(1)
            .map(function (value) {
            return {
                value: value,
                label: value.toString()
            };
        });
    };
    ForecastFormComponent.prototype.setProjectAttributeList = function (attributeList) {
        var _this = this;
        _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_27__["ListUtils"].orEmpty(attributeList)
            .filter(function (attribute) { return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_30__["StringUtils"].isNullOrEmpty(attribute.attributeValue); })
            .forEach(function (attribute) {
            var attributeValue = attribute.attributeValue;
            if (attribute.attributeId === _shared_constants_bsde_attribute_constants_interface__WEBPACK_IMPORTED_MODULE_10__["BsdeAttributeConstants"].MFO_LLP_EVENTS_GENERATION) {
                _this.forecastProjectLlpEventsGeneration = _shared_utils_boolean_utils__WEBPACK_IMPORTED_MODULE_26__["BooleanUtils"].isTrue(attributeValue);
            }
            else if (attribute.attributeId === _shared_constants_bsde_attribute_constants_interface__WEBPACK_IMPORTED_MODULE_10__["BsdeAttributeConstants"].MFO_OCCURRENCE_NUMBER_OPTION) {
                _this.forecastProjectOccurrenceNumber = _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_28__["NumberUtils"].fromString(attributeValue);
            }
        });
    };
    ForecastFormComponent.prototype.setSchedulerColumnList = function () {
        var _this = this;
        this.columnList = [
            {
                enableCellContextMenu: false,
                htmlEncode: false,
                locked: true,
                text: this.translateService.instant('asset'),
                type: 'tree',
                width: ForecastFormComponent_1.COLUMN_ASSET_WIDTH,
                renderer: function (_a) {
                    var record = _a.record;
                    var assetId;
                    _this.assetMap.forEach(function (value, key) {
                        if (value.equipmentCode === record.data.asset.equipmentCode) {
                            assetId = key;
                        }
                    });
                    var assetName = _shared_utils_bido_equipment_utils__WEBPACK_IMPORTED_MODULE_25__["BidoEquipmentUtils"].createAssetName(record.data.asset);
                    return "\n          <div class=\"asset\">\n            <div>" + record.data.assetDescription + "</div>\n            <div>\n              <a\n                id=\"" + assetId + "\"\n                class=\"" + ForecastFormComponent_1.ASSET_NAME_CLS + "\"\n                style=\"cursor: pointer; font-style: italic; font-weight: 600;\"\n              >\n                " + assetName + "\n              </a>\n            </div>\n          </div>\n          ";
                }
            },
            {
                enableCellContextMenu: false,
                field: 'flDescription',
                locked: true,
                text: this.translateService.instant('functionalLocation'),
                width: ForecastFormComponent_1.COLUMN_FUNCTIONAL_LOCATION_WIDTH
            }
        ];
    };
    ForecastFormComponent.prototype.setSchedulerConfig = function () {
        var _this = this;
        this.schedulerConfig = {
            cellEditFeature: false,
            emptyText: '',
            rowHeight: ForecastFormComponent_1.SCHEDULER_ROW_HEIGHT,
            treeFeature: true,
            zoomKeepsOriginalTimespan: true,
            zoomOnMouseWheel: false,
            zoomOnTimeAxisDoubleClick: false,
            eventContextMenuFeature: {
                items: {
                    deleteEvent: false,
                    unassignEvent: false
                },
                processItems: function (_a) {
                    var eventRecord = _a.eventRecord, items = _a.items;
                    _this.setEventContextMenu(eventRecord.data, items);
                }
            },
            eventDragFeature: {
                constrainDragToResource: false
            },
            eventRenderer: function (_a) {
                var eventRecord = _a.eventRecord, tplData = _a.tplData;
                var eventModel = eventRecord.data;
                var eventModelType = _this.getEventModelType(eventModel);
                if (_this.forecastFormService.isWorkPackageSchedulerEventType(eventModelType)) {
                    var workPackageModel = eventModel;
                    var workPackageStatus = workPackageModel._obj.bidmProject.statusState;
                    if (workPackageStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SIMULATED ||
                        workPackageStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_8__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_RELEASED) {
                        tplData.style = 'color:black';
                    }
                    else {
                        tplData.style = 'color:white';
                    }
                }
                return eventModel.name;
            },
            eventTooltipFeature: {
                template: function (_a) {
                    var eventRecord = _a.eventRecord;
                    return _this.getEventTooltip(eventRecord.data);
                }
            },
            scheduleContextMenuFeature: {
                items: {
                    addEvent: false
                }
            },
            scheduleTooltipFeature: {
                getText: function (date, event) {
                    var resourceModel = _this.scheduler.schedulerEngine.resolveResourceRecord(bryntum_scheduler__WEBPACK_IMPORTED_MODULE_2__["DomHelper"].elementFromPoint(event.clientX, event.clientY));
                    if (!resourceModel) {
                        return '';
                    }
                    var momentOfDate = moment__WEBPACK_IMPORTED_MODULE_3__(date);
                    var flightUsage = _this.flightUsage
                        .filter(function (elt) { return elt.asset === resourceModel.id; })
                        .find(function (elt) { return momentOfDate.isBetween(elt.startPeriod, elt.endPeriod, undefined, '[]'); });
                    if (!_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(flightUsage)) {
                        return '';
                    }
                    return "\n            <div style=\"display: flex; flex-direction: row\">\n              <div style=\"width: 3rem\">" + _this.tsnLabel + "</div>\n              <div>" + flightUsage.tsnMax + "</div>\n            </div>";
                }
            },
            timeRangesFeature: {
                showCurrentTimeLine: true
            }
        };
    };
    ForecastFormComponent.prototype.setSchedulerEndDate = function () {
        this.endDate = this.schedulerService.getLastEventEndDate(this.filteredEventList);
    };
    ForecastFormComponent.prototype.setSchedulerResourceColumnWidth = function () {
        this.scheduler.schedulerEngine.getSubGrid('locked').width = ForecastFormComponent_1.COLUMN_ASSET_WIDTH - 1;
    };
    ForecastFormComponent.prototype.setSchedulerStartDate = function () {
        this.startDate = this.schedulerService.getFirstEventStartDate(this.filteredEventList);
    };
    ForecastFormComponent.prototype.setSchedulerTimeSpan = function () {
        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(this.startDate) && _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(this.endDate)) {
            if (!!this.startDate && !!this.endDate && this.startDate.getTime() === this.endDate.getTime()) {
                this.endDate.setTime(this.endDate.getTime() + 1);
            }
            this.scheduler.schedulerEngine.setTimeSpan(this.startDate, this.endDate);
        }
    };
    ForecastFormComponent.prototype.setTsnLabel = function () {
        var _this = this;
        this.forecastFormService.getTsnLabel().subscribe({
            next: function (result) {
                _this.tsnLabel = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_30__["StringUtils"].orEmpty(result);
            }
        });
    };
    ForecastFormComponent.prototype.setWorkPackageColor = function (event, status) {
        event.eventColor = _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_WORK_PACKAGE[status];
        this.updateEventCls(event);
    };
    ForecastFormComponent.prototype.updateAllEventStatusByAffectedWorkPackage = function (workPackage) {
        var _this = this;
        var hasAffectedWorkPackage = function (event) {
            return (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_29__["ObjectUtils"].isDefined(event._obj.affectedWorkPackage) &&
                event._obj.affectedWorkPackage.projectNumber === workPackage.projectNumber);
        };
        var updateEventColor = function (event) {
            var newStatus = _this.forecastFormService.calculateUpcomingEventStatus(event.endDate, workPackage);
            _this.setEventColor(event, newStatus);
        };
        this.eventList.forEach(function (genericEvent) {
            if (_this.forecastFormService.isEventGroupSchedulerEventType(genericEvent.eventType)) {
                var eventGroup = genericEvent;
                eventGroup.defectList.filter(hasAffectedWorkPackage).forEach(updateEventColor);
                eventGroup.llpAlertList.filter(hasAffectedWorkPackage).forEach(updateEventColor);
                eventGroup.scheduledEventList.filter(hasAffectedWorkPackage).forEach(updateEventColor);
                eventGroup.snChangeList.filter(hasAffectedWorkPackage).forEach(updateEventColor);
                eventGroup.unscheduledEventList.filter(hasAffectedWorkPackage).forEach(updateEventColor);
                _this.setEventGroupColor(eventGroup);
            }
            else {
                var event_1 = genericEvent;
                if (hasAffectedWorkPackage(event_1)) {
                    updateEventColor(event_1);
                }
            }
        });
    };
    ForecastFormComponent.prototype.updateDefect = function (defect) {
        var _this = this;
        return this.forecastFormService.updateBidoNotification(defect.bidoNotificationData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.messageService.showSuccessMessage('successMessage.updateDefect');
        }));
    };
    ForecastFormComponent.prototype.updateDefectDates = function (eventModel, date) {
        var _this = this;
        var defect = eventModel._obj.deferredDefectEvent;
        var notification = defect.bidoNotificationData;
        notification.reportingPeriodStartDate = date;
        notification.reportingPeriodEndDate = date;
        this.updateDefect(defect).subscribe({
            next: function () {
                _this.updateSchedulerView();
            }
        });
    };
    ForecastFormComponent.prototype.updateEventCls = function (event) {
        if (this.forecastFormService.isDefectSchedulerEventType(event.eventType) ||
            this.forecastFormService.isScheduledEventSchedulerEventType(event.eventType) ||
            this.forecastFormService.isUnscheduledEventSchedulerEventType(event.eventType) ||
            this.forecastFormService.isEventGroupSchedulerEventType(event.eventType)) {
            this.updateUpcomingEventCls(event);
        }
        else if (this.forecastFormService.isWorkPackageSchedulerEventType(event.eventType)) {
            this.updateWorkPackageCls(event);
        }
    };
    ForecastFormComponent.prototype.updatePlannedDateForEventGroup = function (data) {
        var _this = this;
        // Save modified events
        var observables = data.events.map(function (genericEvent) {
            if (_this.forecastFormService.isDefectSchedulerEventType(genericEvent.eventType)) {
                var event_2 = genericEvent;
                event_2.startDate = data.plannedDate;
                event_2.endDate = data.plannedDate;
                event_2._obj.deferredDefectEvent.plannedDate = data.plannedDate;
                return _this.updateDefect(event_2._obj.deferredDefectEvent);
            }
            else if (_this.forecastFormService.isScheduledEventSchedulerEventType(genericEvent.eventType)) {
                return _this.updatePlannedDateForScheduledEvent(genericEvent, data.plannedDate);
            }
            else {
                return _this.updatePlannedDateForUnscheduledEvent(genericEvent, data.plannedDate);
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(observables);
    };
    ForecastFormComponent.prototype.updatePlannedDateForScheduledEvent = function (event, date) {
        event.startDate = date;
        event.endDate = date;
        event._obj.bsdeScheduledEvent.plannedDate = date;
        return this.updateScheduledEvent(event);
    };
    ForecastFormComponent.prototype.updatePlannedDateForUnscheduledEvent = function (event, date) {
        event.startDate = date;
        event.endDate = date;
        event._obj.bsdeEvent.plannedDate = date;
        return this.updateUnscheduledEvent(event);
    };
    ForecastFormComponent.prototype.updateScheduledEvent = function (event) {
        var _this = this;
        var eventSrc = this.findEventModelSrcById(event.id);
        eventSrc._obj.bsdeScheduledEvent = event._obj.bsdeScheduledEvent;
        return this.forecastFormService.updateBsdeScheduledEvent(event._obj.bsdeScheduledEvent).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.messageService.showSuccessMessage('successMessage.updateScheduledEvent');
        }));
    };
    ForecastFormComponent.prototype.updateSchedulerView = function () {
        this.filterForecast(this.forecastFormService.forecastFiltering);
        this.mergeFilteredEvents();
        this.calculateGlobalMaterialAvailability();
        this.calculateUpcomingEventNumberByStatus(this.filteredEventList);
        this.setSchedulerStartDate();
        this.setSchedulerEndDate();
        this.setSchedulerTimeSpan();
    };
    ForecastFormComponent.prototype.updateUnscheduledEvent = function (event) {
        var _this = this;
        var eventSrc = this.findEventModelSrcById(event.id);
        eventSrc._obj.bsdeEvent = event._obj.bsdeEvent;
        return this.forecastFormService.updateBsdeScheduledEvent(event._obj.bsdeEvent).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.messageService.showSuccessMessage('successMessage.updateUnscheduledEvent');
        }));
    };
    ForecastFormComponent.prototype.updateUpcomingEventCls = function (event) {
        var clsToKeep = this.getEventClasses(event).filter(function (cls) {
            return cls !== ForecastFormComponent_1.EVENT_IN_PAST_CLS &&
                cls !== ForecastFormComponent_1.EVENT_NOK_CLS &&
                cls !== ForecastFormComponent_1.EVENT_WARN_CLS &&
                cls !== ForecastFormComponent_1.EVENT_OK_CLS &&
                cls !== ForecastFormComponent_1.EVENT_ALERT_CLS;
        });
        var clsToAdd = event.eventColor === _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_EVENT[_forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].IN_PAST]
            ? ForecastFormComponent_1.EVENT_IN_PAST_CLS
            : event.eventColor === _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_EVENT[_forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].NOK]
                ? ForecastFormComponent_1.EVENT_NOK_CLS
                : event.eventColor === _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_EVENT[_forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].WARN]
                    ? ForecastFormComponent_1.EVENT_WARN_CLS
                    : event.eventColor === _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_EVENT[_forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["UpcomingEventStatus"].ALERT]
                        ? ForecastFormComponent_1.EVENT_ALERT_CLS
                        : ForecastFormComponent_1.EVENT_OK_CLS;
        this.setEventCls(event, __spread(clsToKeep, [clsToAdd]));
    };
    ForecastFormComponent.prototype.updateWorkPackage = function (event) {
        var _this = this;
        var workPackage = event._obj.bidmProject;
        this.forecastFormService
            .updateBidmProject(workPackage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function () { return _this.forecastFormService.controlStock(workPackage); }))
            .subscribe({
            next: function (siteDataList) {
                _this.updateWorkPackageMaterialAvailabilityValue(workPackage, siteDataList);
                var eventSrc = _this.findEventModelSrcById(event.id);
                var color = _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"].EVENT_COLOR_WORK_PACKAGE[workPackage.statusState];
                var endDate = workPackage.projectEndDate || workPackage.projectDueDate || _this.endDate;
                var isModifiable = _this.forecastFormService.checkIfWorkPackageIfModifiable(workPackage);
                var startDate = workPackage.projectStartDate;
                eventSrc.endDate = _this.schedulerService.formatEventDate(endDate);
                eventSrc.eventColor = color;
                eventSrc.draggable = isModifiable;
                eventSrc.resizable = isModifiable;
                eventSrc.startDate = _this.schedulerService.formatEventDate(startDate);
                eventSrc._obj.bidmProject = workPackage;
                _this.updateAllEventStatusByAffectedWorkPackage(workPackage);
                _this.messageService.showSuccessMessage('successMessage.updateWorkPackage');
                _this.updateSchedulerView();
            }
        });
    };
    ForecastFormComponent.prototype.updateWorkPackageCls = function (event) {
        var clsToKeep = this.getEventClasses(event).filter(function (cls) { return cls !== ForecastFormComponent_1.WORK_PACKAGE_MATERIAL_AVAILABILITY_NOK_CLS; });
        var materialAvailability = this.materialAvailabilityByWorkPackage.get(event._obj.bidmProject.projectId);
        var clsToAdd = materialAvailability.nok > 0
            ? ForecastFormComponent_1.WORK_PACKAGE_MATERIAL_AVAILABILITY_NOK_CLS
            : materialAvailability.warn > 0
                ? ForecastFormComponent_1.WORK_PACKAGE_MATERIAL_AVAILABILITY_WARN_CLS
                : '';
        this.setEventCls(event, __spread(clsToKeep, [clsToAdd]));
    };
    ForecastFormComponent.prototype.updateWorkPackageDates = function (eventModel, startDate, endDate) {
        eventModel._obj.bidmProject.projectStartDate = startDate;
        eventModel._obj.bidmProject.projectEndDate = endDate;
        this.updateWorkPackage(eventModel);
    };
    ForecastFormComponent.prototype.updateWorkPackageMaterialAvailabilityValue = function (workPackage, siteDataList) {
        this.materialAvailabilityByWorkPackage.set(workPackage.projectId, this.forecastFormService.calculateWorkPackageMaterialAvailabilityValue(siteDataList));
    };
    var ForecastFormComponent_1;
    ForecastFormComponent.TIME_RESOLUTION_MAX_ZOOM = 15;
    ForecastFormComponent.TIME_RESOLUTION_MIN_ZOOM = 0;
    ForecastFormComponent.COLUMN_ASSET_WIDTH = 300;
    ForecastFormComponent.COLUMN_FUNCTIONAL_LOCATION_WIDTH = 300;
    ForecastFormComponent.SCHEDULER_ROW_HEIGHT = 40;
    ForecastFormComponent.ASSET_NAME_CLS = 'asset';
    ForecastFormComponent.EVENT_HIGHLIGHT_CLS = 'event-focus';
    ForecastFormComponent.EVENT_IN_PAST_CLS = 'in-past';
    ForecastFormComponent.EVENT_NOK_CLS = 'nok';
    ForecastFormComponent.EVENT_OK_CLS = 'ok';
    ForecastFormComponent.EVENT_WARN_CLS = 'warn';
    ForecastFormComponent.EVENT_ALERT_CLS = 'alert';
    ForecastFormComponent.WORK_PACKAGE_HIGHLIGHT_CLS = 'workpackage-focus';
    ForecastFormComponent.WORK_PACKAGE_MATERIAL_AVAILABILITY_NOK_CLS = 'material-nok';
    ForecastFormComponent.WORK_PACKAGE_MATERIAL_AVAILABILITY_WARN_CLS = 'material-warn';
    ForecastFormComponent.EVENT_GROUP_MAX_VALUE_DISPLAYED = 99;
    ForecastFormComponent.EVENT_GROUP_MAX_VALUE_LABEL = '++';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_6__["SchedulerComponent"]),
        __metadata("design:type", _shared_components_scheduler_scheduler_component__WEBPACK_IMPORTED_MODULE_6__["SchedulerComponent"])
    ], ForecastFormComponent.prototype, "scheduler", void 0);
    ForecastFormComponent = ForecastFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-forecast-form',
            template: __webpack_require__(/*! ./forecast-form.component.html */ "./src/app/main/maintenance/forecast/form/forecast-form.component.html"),
            styles: [__webpack_require__(/*! ./forecast-form.component.scss */ "./src/app/main/maintenance/forecast/form/forecast-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_17__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_18__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_19__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_21__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_23__["TabService"],
            _forecast_form_service__WEBPACK_IMPORTED_MODULE_31__["ForecastFormService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_22__["SessionService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_16__["ConfirmationService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_20__["PropertiesService"],
            _shared_components_scheduler_scheduler_service__WEBPACK_IMPORTED_MODULE_7__["SchedulerService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ForecastFormComponent);
    return ForecastFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_24__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/forecast-form.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/forecast-form.service.ts ***!
  \*************************************************************************/
/*! exports provided: EventModelType, ForecastLoadOption, ResourceSelectionMode, UpcomingEventStatus, ForecastCategory, ForecastFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModelType", function() { return EventModelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastLoadOption", function() { return ForecastLoadOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceSelectionMode", function() { return ResourceSelectionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingEventStatus", function() { return UpcomingEventStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastCategory", function() { return ForecastCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastFormService", function() { return ForecastFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/api/aircraft-maintenance.api */ "./src/app/shared/api/aircraft-maintenance.api.ts");
/* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/api/airworthiness-management.api */ "./src/app/shared/api/airworthiness-management.api.ts");
/* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/api/am-project-management.api */ "./src/app/shared/api/am-project-management.api.ts");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
/* harmony import */ var _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/api/bidt-stock-mvt.api */ "./src/app/shared/api/bidt-stock-mvt.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_maintenance_plan_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/api/maintenance-plan.api */ "./src/app/shared/api/maintenance-plan.api.ts");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/api/project-management.api */ "./src/app/shared/api/project-management.api.ts");
/* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/api/task-management.api */ "./src/app/shared/api/task-management.api.ts");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _shared_constants_bsde_attribute_constants_interface__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/constants/bsde-attribute-constants.interface */ "./src/app/shared/constants/bsde-attribute-constants.interface.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/constants/control-config-constants */ "./src/app/shared/constants/control-config-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../shared/utils/number-utils */ "./src/app/shared/utils/number-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
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
var _a, _b;

































var EventModelType;
(function (EventModelType) {
    EventModelType["DEFECT"] = "defect";
    EventModelType["FLIGHT"] = "flight";
    EventModelType["FLIGHT_USAGE"] = "flightUsage";
    EventModelType["EVENT_GROUP"] = "eventGroup";
    EventModelType["LLP_ALERT"] = "llpAlert";
    EventModelType["SCHEDULED_EVENT"] = "scheduledEvent";
    EventModelType["SN_CHANGE"] = "snChange";
    EventModelType["UNSCHEDULED_EVENT"] = "unscheduledEvent";
    EventModelType["WORK_PACKAGE"] = "workPackage";
})(EventModelType || (EventModelType = {}));
var ForecastLoadOption;
(function (ForecastLoadOption) {
    ForecastLoadOption[ForecastLoadOption["DEFAULT"] = 0] = "DEFAULT";
    ForecastLoadOption[ForecastLoadOption["OPTIMIZE"] = 1] = "OPTIMIZE";
})(ForecastLoadOption || (ForecastLoadOption = {}));
var ResourceSelectionMode;
(function (ResourceSelectionMode) {
    ResourceSelectionMode["ROW"] = "row";
})(ResourceSelectionMode || (ResourceSelectionMode = {}));
var UpcomingEventStatus;
(function (UpcomingEventStatus) {
    UpcomingEventStatus[UpcomingEventStatus["IN_PAST"] = 0] = "IN_PAST";
    UpcomingEventStatus[UpcomingEventStatus["NOK"] = 1] = "NOK";
    UpcomingEventStatus[UpcomingEventStatus["OK"] = 2] = "OK";
    UpcomingEventStatus[UpcomingEventStatus["WARN"] = 3] = "WARN";
    UpcomingEventStatus[UpcomingEventStatus["ALERT"] = 4] = "ALERT";
})(UpcomingEventStatus || (UpcomingEventStatus = {}));
var ForecastCategory;
(function (ForecastCategory) {
    ForecastCategory[ForecastCategory["ASSET"] = 0] = "ASSET";
    ForecastCategory[ForecastCategory["FLEET"] = 1] = "FLEET";
})(ForecastCategory || (ForecastCategory = {}));
var ForecastFormService = /** @class */ (function (_super) {
    __extends(ForecastFormService, _super);
    function ForecastFormService(http, appConfigService, aircraftMaintenanceApi, airworthinessManagementApi, amProjectManagementApi, bidtSiteApi, bidtStockMvtApi, fleetManagementApi, maintenancePlanApi, productStructureManagementApi, projectManagementApi, serializationService, tabService, userProfileManagementApi, messageService, taskManagementApi, translateService, bidtWarehouseApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
        _this.airworthinessManagementApi = airworthinessManagementApi;
        _this.amProjectManagementApi = amProjectManagementApi;
        _this.bidtSiteApi = bidtSiteApi;
        _this.bidtStockMvtApi = bidtStockMvtApi;
        _this.fleetManagementApi = fleetManagementApi;
        _this.maintenancePlanApi = maintenancePlanApi;
        _this.productStructureManagementApi = productStructureManagementApi;
        _this.projectManagementApi = projectManagementApi;
        _this.serializationService = serializationService;
        _this.tabService = tabService;
        _this.userProfileManagementApi = userProfileManagementApi;
        _this.messageService = messageService;
        _this.taskManagementApi = taskManagementApi;
        _this.translateService = translateService;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.eventGroupPlannedDateUpdateSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this.eventsAddedToWorkPackageSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this.eventsRemovedFromWorkPackageSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this.forecastFilteringSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this.scheduledEventPlannedDateUpdateSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this.unscheduledEventCreateSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this.unscheduledEventUpdateSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this._eventGroupPlannedDateUpdate$ = _this.eventGroupPlannedDateUpdateSource.asObservable();
        _this._eventsAddedToWorkPackage$ = _this.eventsAddedToWorkPackageSource.asObservable();
        _this._eventsRemovedFromWorkPackage$ = _this.eventsRemovedFromWorkPackageSource.asObservable();
        _this._forecastFiltering$ = _this.forecastFilteringSource.asObservable();
        _this._scheduledEventPlannedDateUpdate$ = _this.scheduledEventPlannedDateUpdateSource.asObservable();
        _this._unscheduledEventCreate$ = _this.unscheduledEventCreateSource.asObservable();
        _this._unscheduledEventUpdate$ = _this.unscheduledEventUpdateSource.asObservable();
        _this._forecastFiltering = {
            globalSearch: '',
            upcomingEventStatusList: [
                UpcomingEventStatus.OK,
                UpcomingEventStatus.WARN,
                UpcomingEventStatus.NOK,
                UpcomingEventStatus.IN_PAST
            ],
            upcomingEventTypeList: [],
            workPackageStatusList: []
        };
        return _this;
    }
    ForecastFormService_1 = ForecastFormService;
    Object.defineProperty(ForecastFormService.prototype, "eventGroupPlannedDateUpdate$", {
        get: function () {
            return this._eventGroupPlannedDateUpdate$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForecastFormService.prototype, "eventsAddedToWorkPackage$", {
        get: function () {
            return this._eventsAddedToWorkPackage$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForecastFormService.prototype, "eventsRemovedFromWorkPackage$", {
        get: function () {
            return this._eventsRemovedFromWorkPackage$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForecastFormService.prototype, "forecastFiltering", {
        get: function () {
            return this._forecastFiltering;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForecastFormService.prototype, "forecastFiltering$", {
        get: function () {
            return this._forecastFiltering$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForecastFormService.prototype, "scheduledEventPlannedDateUpdate$", {
        get: function () {
            return this._scheduledEventPlannedDateUpdate$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForecastFormService.prototype, "unscheduledEventCreate$", {
        get: function () {
            return this._unscheduledEventCreate$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ForecastFormService.prototype, "unscheduledEventUpdate$", {
        get: function () {
            return this._unscheduledEventUpdate$;
        },
        enumerable: true,
        configurable: true
    });
    ForecastFormService.prototype.addEventsToWorkPackage = function (data) {
        this.eventsAddedToWorkPackageSource.next(data);
    };
    ForecastFormService.prototype.buildUpcomingEventTypeList = function () {
        var defectKey = 'defect';
        var llpKey = 'llp';
        var scheduledEventKey = 'scheduledEvent';
        var snChangeKey = 'snChange';
        var unscheduledEventKey = 'unscheduledEvent';
        return this.translateService.get([defectKey, llpKey, scheduledEventKey, snChangeKey, unscheduledEventKey]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (results) {
            var defectLabel = !!results ? results[defectKey] : 'Defect';
            var llpLabel = !!results ? results[llpKey] : 'LLP';
            var scheduledEventLabel = !!results ? results[scheduledEventKey] : 'Scheduled Event';
            var snChangeLabel = !!results ? results[snChangeKey] : 'S/N Change';
            var unscheduledEventLabel = !!results ? results[unscheduledEventKey] : 'Unscheduled Event';
            return [
                { label: defectLabel, value: EventModelType.DEFECT },
                { label: llpLabel, value: EventModelType.LLP_ALERT },
                { label: scheduledEventLabel, value: EventModelType.SCHEDULED_EVENT },
                { label: snChangeLabel, value: EventModelType.SN_CHANGE },
                { label: unscheduledEventLabel, value: EventModelType.UNSCHEDULED_EVENT }
            ];
        }));
    };
    ForecastFormService.prototype.calculateUpcomingEventStatus = function (eventEndDate, affectedWorkPackage, scheduledEvent) {
        if (moment__WEBPACK_IMPORTED_MODULE_3__(eventEndDate).isBefore(moment__WEBPACK_IMPORTED_MODULE_3__())) {
            return UpcomingEventStatus.IN_PAST;
        }
        else if (!!scheduledEvent && scheduledEvent.alertOnThreshold) {
            return UpcomingEventStatus.ALERT;
        }
        else if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_31__["ObjectUtils"].isDefined(affectedWorkPackage)) {
            return moment__WEBPACK_IMPORTED_MODULE_3__(eventEndDate).isBefore(moment__WEBPACK_IMPORTED_MODULE_3__(affectedWorkPackage.projectEndDate))
                ? UpcomingEventStatus.NOK
                : UpcomingEventStatus.OK;
        }
        else {
            return UpcomingEventStatus.WARN;
        }
    };
    ForecastFormService.prototype.calculateWorkPackageMaterialAvailabilityValue = function (siteDataList) {
        var statusNok = _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_22__["ControlConfigConstants"].ICON_RED_LIGHT_CODE;
        var statusOk = _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_22__["ControlConfigConstants"].ICON_GREEN_LIGHT_CODE;
        var statusWarn = _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_22__["ControlConfigConstants"].ICON_YELLOW_LIGHT_CODE;
        return {
            nok: siteDataList.filter(function (siteData) { return siteData.status === statusNok; }).length,
            ok: siteDataList.filter(function (siteData) { return siteData.status === statusOk; }).length,
            warn: siteDataList.filter(function (siteData) { return siteData.status === statusWarn; }).length
        };
    };
    ForecastFormService.prototype.checkIfWorkPackageIfModifiable = function (workPackage) {
        return (workPackage.statusState === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SCHEDULED ||
            workPackage.statusState === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SIMULATED);
    };
    ForecastFormService.prototype.createUnscheduledEvent = function (data) {
        this.unscheduledEventCreateSource.next(data);
    };
    ForecastFormService.prototype.filterForecast = function () {
        this.forecastFilteringSource.next(this._forecastFiltering);
    };
    ForecastFormService.prototype.filterForecastByUpcomingEventType = function (forecastFiltering, eventType) {
        return forecastFiltering.upcomingEventTypeList.includes(eventType);
    };
    ForecastFormService.prototype.filterForecastByUpcomingEventStatus = function (forecastFiltering, eventColor) {
        var status = eventColor === ForecastFormService_1.EVENT_COLOR_EVENT[UpcomingEventStatus.OK]
            ? UpcomingEventStatus.OK
            : eventColor === ForecastFormService_1.EVENT_COLOR_EVENT[UpcomingEventStatus.WARN]
                ? UpcomingEventStatus.WARN
                : eventColor === ForecastFormService_1.EVENT_COLOR_EVENT[UpcomingEventStatus.NOK]
                    ? UpcomingEventStatus.NOK
                    : UpcomingEventStatus.IN_PAST;
        return forecastFiltering.upcomingEventStatusList.includes(status);
    };
    ForecastFormService.prototype.filterForecastDefect = function (forecastFiltering, eventModel) {
        var notification = eventModel._obj.deferredDefectEvent.bidoNotificationData;
        var notificationCodeCriteria = true;
        if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].isNullOrEmpty(forecastFiltering.globalSearch)) {
            notificationCodeCriteria = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].orEmpty(notification.notNotificationCode)
                .toUpperCase()
                .includes(forecastFiltering.globalSearch);
        }
        return notificationCodeCriteria;
    };
    ForecastFormService.prototype.filterForecastScheduledEvent = function (forecastFiltering, eventModel) {
        var event = eventModel._obj.bsdeScheduledEvent;
        var taskCodeCriteria = true;
        var taskVersionCriteria = true;
        if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].isNullOrEmpty(forecastFiltering.globalSearch)) {
            taskCodeCriteria = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].orEmpty(event.taskCode)
                .toUpperCase()
                .includes(forecastFiltering.globalSearch);
            taskVersionCriteria = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].orEmpty(event.taskVersion)
                .toUpperCase()
                .includes(forecastFiltering.globalSearch);
        }
        return taskCodeCriteria && taskVersionCriteria;
    };
    ForecastFormService.prototype.filterForecastUnscheduledEvent = function (forecastFiltering, eventModel) {
        var event = eventModel._obj.bsdeEvent;
        var taskCodeCriteria = true;
        var taskVersionCriteria = true;
        if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].isNullOrEmpty(forecastFiltering.globalSearch)) {
            taskCodeCriteria = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].orEmpty(event.taskCode)
                .toUpperCase()
                .includes(forecastFiltering.globalSearch);
            taskVersionCriteria = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].orEmpty(event.taskVersion)
                .toUpperCase()
                .includes(forecastFiltering.globalSearch);
        }
        return taskCodeCriteria && taskVersionCriteria;
    };
    ForecastFormService.prototype.filterForecastWorkPackage = function (forecastFiltering, eventModel) {
        var workPackage = eventModel._obj.bidmProject;
        var statusCriteria = forecastFiltering.workPackageStatusList.includes(workPackage.statusState);
        var projectNumberCriteria = true;
        if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].isNullOrEmpty(forecastFiltering.globalSearch)) {
            projectNumberCriteria = _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_30__["NumberUtils"].toString(workPackage.projectNumber)
                .toUpperCase()
                .includes(forecastFiltering.globalSearch);
        }
        return statusCriteria && projectNumberCriteria;
    };
    ForecastFormService.prototype.getDefectList = function (eventList) {
        return eventList.filter(function (event) { return event.eventType === EventModelType.DEFECT; });
    };
    ForecastFormService.prototype.getEventCategoryLabel = function (event, eventCategoryList) {
        var eventCategory = eventCategoryList.find(function (category) { return category.value === event.bidoNotificationTypeDTO.typeCategory; });
        return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_31__["ObjectUtils"].isDefined(eventCategory) ? eventCategory.label : '';
    };
    ForecastFormService.prototype.getLlpAlertList = function (eventList) {
        return eventList.filter(function (event) { return event.eventType === EventModelType.LLP_ALERT; });
    };
    ForecastFormService.prototype.getScheduledEventList = function (eventList) {
        return eventList.filter(function (event) { return event.eventType === EventModelType.SCHEDULED_EVENT; });
    };
    ForecastFormService.prototype.getSnChangeList = function (eventList) {
        return eventList.filter(function (event) { return event.eventType === EventModelType.SN_CHANGE; });
    };
    ForecastFormService.prototype.getTaskTypeLabel = function (task, taskTypeList) {
        var taskType = taskTypeList.find(function (type) { return type.value === task.taskTypeCode; });
        return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_31__["ObjectUtils"].isDefined(taskType) ? taskType.label : '';
    };
    ForecastFormService.prototype.getUnscheduledEventList = function (eventList) {
        return eventList.filter(function (event) { return event.eventType === EventModelType.UNSCHEDULED_EVENT; });
    };
    ForecastFormService.prototype.getUpcomingEventKey = function (eventModel) {
        return this.isDefectSchedulerEventType(eventModel.eventType)
            ? 'defect'
            : this.isLlpSchedulerEventType(eventModel.eventType)
                ? 'llp'
                : this.isScheduledEventSchedulerEventType(eventModel.eventType)
                    ? 'scheduledEvent'
                    : this.isSnChangeSchedulerEventType(eventModel.eventType)
                        ? 'snChange'
                        : 'unscheduledEvent';
    };
    ForecastFormService.prototype.initForecastFiltering = function (upcomingEventTypeList, workPackageStatusList) {
        this.setForecastFilteringUpcomingEventTypeList(upcomingEventTypeList.map(function (elt) { return elt.value; }));
        this.setForecastFilteringWorkPackageStatusList(workPackageStatusList.map(function (elt) { return elt.value; }));
    };
    ForecastFormService.prototype.isDefectSchedulerEventType = function (eventType) {
        return eventType === EventModelType.DEFECT;
    };
    ForecastFormService.prototype.isEventGroupSchedulerEventType = function (eventType) {
        return eventType === EventModelType.EVENT_GROUP;
    };
    ForecastFormService.prototype.isFlightSchedulerEventType = function (eventType) {
        return eventType === EventModelType.FLIGHT;
    };
    ForecastFormService.prototype.isLlpSchedulerEventType = function (eventType) {
        return eventType === EventModelType.LLP_ALERT;
    };
    ForecastFormService.prototype.isScheduledEventSchedulerEventType = function (eventType) {
        return eventType === EventModelType.LLP_ALERT || eventType === EventModelType.SCHEDULED_EVENT;
    };
    ForecastFormService.prototype.isSnChangeSchedulerEventType = function (eventType) {
        return eventType === EventModelType.SN_CHANGE;
    };
    ForecastFormService.prototype.isUnscheduledEventSchedulerEventType = function (eventType) {
        return eventType === EventModelType.SN_CHANGE || eventType === EventModelType.UNSCHEDULED_EVENT;
    };
    ForecastFormService.prototype.isValidDefect = function (defect) {
        return (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_31__["ObjectUtils"].isDefined(defect.deferredDefectEvent.bidoNotificationData) &&
            (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_31__["ObjectUtils"].isDefined(defect.deferredDefectEvent.plannedDate) ||
                _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_31__["ObjectUtils"].isDefined(defect.deferredDefectEvent.nteDate)));
    };
    ForecastFormService.prototype.isValidFlight = function (flight) {
        return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_31__["ObjectUtils"].isDefined(flight.startDate) && _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_31__["ObjectUtils"].isDefined(flight.endDate);
    };
    ForecastFormService.prototype.isValidPlannedDateForEventGroup = function (eventGroup, plannedDate) {
        return __spread(eventGroup.defectList, eventGroup.llpAlertList, eventGroup.scheduledEventList).map(function (event) { return event.maxEndDate; })
            .every(function (maxEndDate) { return moment__WEBPACK_IMPORTED_MODULE_3__(maxEndDate).isAfter(moment__WEBPACK_IMPORTED_MODULE_3__(plannedDate)); });
    };
    ForecastFormService.prototype.isValidScheduledEvent = function (event) {
        return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_31__["ObjectUtils"].isDefined(event.bsdeScheduledEvent.nteDate);
    };
    ForecastFormService.prototype.isValidUnscheduledEvent = function (event) {
        return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_31__["ObjectUtils"].isDefined(event.bsdeEvent.plannedDate);
    };
    ForecastFormService.prototype.isValidWorkPackage = function (workPackage) {
        var endDate = workPackage.bidmProject.projectEndDate || workPackage.bidmProject.projectDueDate;
        return (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_31__["ObjectUtils"].isDefined(workPackage.bidmProject.projectStartDate) &&
            (!_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_31__["ObjectUtils"].isDefined(endDate) || moment__WEBPACK_IMPORTED_MODULE_3__(endDate).isAfter(workPackage.bidmProject.projectStartDate)));
    };
    ForecastFormService.prototype.isWorkPackageSchedulerEventType = function (eventType) {
        return eventType === EventModelType.WORK_PACKAGE;
    };
    ForecastFormService.prototype.loadForecastData = function (forecastProject, forecastProjectId, forecastProjectLlpEventsGeneration, forecastProjectOccurrenceNumber, loadOption) {
        var forecastOption = {
            maintenanceForecastingProjectId: forecastProjectId,
            bsdeProjectDTO: {
                projectFleetId: forecastProject.projectFleetId,
                projectId: forecastProjectId,
                projectPn: forecastProject.projectPn,
                projectSn: forecastProject.projectSn
            },
            maintenancePlanEndDate: forecastProject.projectEndDate ||
                moment__WEBPACK_IMPORTED_MODULE_3__()
                    .add(ForecastFormService_1.FORECAST_PROJECT_DEFAULT_END_DATE_OFFSET, 'months')
                    .toDate(),
            maintenancePlanOccurrence: forecastProjectOccurrenceNumber,
            maintenancePlanStartDate: forecastProject.projectStartDate,
            maintenancePlanTimeScale: 'DAY',
            showSNChanges: true,
            showDeferredDefects: true,
            showScheduledEvents: true,
            showNonRoutineEvents: true,
            showOnlyColumnsWithContent: false,
            urlPNCode: forecastProject.projectPn,
            urlSNCode: forecastProject.projectSn,
            withIwbEvents: true,
            withLlpAlerts: forecastProjectLlpEventsGeneration
        };
        return loadOption === ForecastLoadOption.OPTIMIZE
            ? this.loadWithOptimizerOption(forecastOption)
            : this.loadWithFromDbOption(forecastOption);
    };
    ForecastFormService.prototype.openAirworthinessStatus = function (equipmentCodes) {
        var pageInput = {
            equipmentCodeList: equipmentCodes
        };
        this.openPage(_shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__["ComponentConstants"].MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM, pageInput);
    };
    ForecastFormService.prototype.openAsset = function (equipment) {
        var equipmentCode = equipment.equipmentCode;
        var pageInput = {
            equipmentCode: equipmentCode
        };
        if (equipment.equipmentFunction === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
            this.openPage(_shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__["ComponentConstants"].FLE_AIRCRAFT_FORM, pageInput);
        }
        else if (equipment.equipmentFunction === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY) {
            this.openPage(_shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__["ComponentConstants"].FLE_ENGINE_FORM, pageInput);
        }
        else {
            this.openPage(_shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__["ComponentConstants"].FLE_EQUIPMENT_FORM, pageInput);
        }
    };
    ForecastFormService.prototype.openEvent = function (eventModel) {
        var eventType = eventModel.eventType;
        if (this.isDefectSchedulerEventType(eventType)) {
            var defect = eventModel._obj.deferredDefectEvent;
            var notificationCode = defect.bidoNotificationData.notificationCode;
            var pageInput = {
                notificationCode: notificationCode
            };
            this.openPage(_shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__["ComponentConstants"].FLE_DEFECT_FORM, pageInput);
        }
        else if (this.isScheduledEventSchedulerEventType(eventType)) {
            var event_1 = eventModel._obj.bsdeScheduledEvent;
            if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].isNullOrEmpty(event_1.taskCode) && !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].isNullOrEmpty(event_1.taskVersion)) {
                this.openTask(event_1.taskCode, event_1.taskVersion);
            }
            else if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].isNullOrEmpty(event_1.pn) && !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].isNullOrEmpty(event_1.sn)) {
                this.openAssetByPnAndSn(event_1.pn, event_1.sn);
            }
        }
        else if (this.isUnscheduledEventSchedulerEventType(eventType)) {
            var event_2 = eventModel._obj.bsdeEvent;
            if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].isNullOrEmpty(event_2.taskCode) && !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].isNullOrEmpty(event_2.taskVersion)) {
                this.openTask(event_2.taskCode, event_2.taskVersion);
            }
            else if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].isNullOrEmpty(event_2.evolutionNumber) &&
                !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].isNullOrEmpty(event_2.evolutionRevisionNumber)) {
                var pageInput = {
                    evolutionNumber: event_2.evolutionNumber,
                    evolutionRevisionNumber: event_2.evolutionRevisionNumber
                };
                this.openPage(_shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__["ComponentConstants"].ENG_EVOLUTION_FORM, pageInput);
            }
            else if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].isNullOrEmpty(event_2.newPn) && !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].isNullOrEmpty(event_2.newSn)) {
                this.openAssetByPnAndSn(event_2.newPn, event_2.newSn);
            }
        }
    };
    ForecastFormService.prototype.openFlight = function (missionEquipment) {
        var _this = this;
        var missionEquipmentByIdInput = {
            equipmentCode: missionEquipment.equipmentCode,
            missionCode: missionEquipment.missionCode,
            occurrence: missionEquipment.occurrence
        };
        _super.prototype.post.call(this, this.fleetManagementApi.checkBidoMissionEquipmentById, missionEquipmentByIdInput)
            .subscribe(function (missionEquipmentById) {
            if (missionEquipmentById) {
                var pageInput = {
                    chronoNumber: missionEquipment.missionInstanceCode,
                    endDate: missionEquipment.endDate,
                    equipmentCode: missionEquipment.equipmentCode,
                    missionCode: missionEquipment.missionCode,
                    occurrence: missionEquipment.occurrence,
                    startDate: missionEquipment.startDate
                };
                _this.openPage(_shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__["ComponentConstants"].FLI_FLIGHT_FORM, pageInput);
            }
            else {
                var missionEquipmentByEquipmentCodeAndMissionCodeInput_1 = {
                    equipmentCode: missionEquipment.equipmentCode,
                    missionCode: missionEquipment.missionCode
                };
                _super.prototype.post.call(_this, _this.fleetManagementApi.checkBidoMissionEquipmentByEquipmentCodeAndMissionCode, missionEquipmentByEquipmentCodeAndMissionCodeInput_1)
                    .subscribe(function (missionEquipmentByEquipmentCodeAndMissionCode) {
                    if (missionEquipmentByEquipmentCodeAndMissionCodeInput_1) {
                        var pageInput = {
                            chronoNumber: missionEquipment.missionInstanceCode,
                            endDate: missionEquipment.endDate,
                            equipmentCode: missionEquipment.equipmentCode,
                            missionCode: missionEquipment.missionCode,
                            occurrence: missionEquipmentByEquipmentCodeAndMissionCode.occurrence,
                            startDate: missionEquipment.startDate
                        };
                        _this.openPage(_shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__["ComponentConstants"].FLI_FLIGHT_FORM, pageInput);
                    }
                    else {
                        _this.messageService.showErrorMessage('errorMessage.openFlight');
                    }
                });
            }
        });
    };
    ForecastFormService.prototype.openMaintenancePlanning = function (equipmentCode) {
        var pageInput = {
            equipmentCode: equipmentCode
        };
        this.openPage(_shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__["ComponentConstants"].MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM, pageInput);
    };
    ForecastFormService.prototype.openMaterialAvailability = function (workPackageId) {
        var pageInput = {
            workPackageId: workPackageId
        };
        this.openPage(_shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__["ComponentConstants"].LOG_MATERIAL_AVAILABILITY_WORK_PACKAGE_FORM, pageInput);
    };
    ForecastFormService.prototype.openMaterialAvailabilityForAllWorkPackage = function (siteId, workPackageIds, startDate, endDate) {
        var pageInput = {
            endDate: endDate,
            siteId: siteId,
            startDate: startDate,
            workPackageIdList: workPackageIds
        };
        this.openPage(_shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__["ComponentConstants"].LOG_MATERIAL_AVAILABILITY_FORECASTING_FORM, pageInput);
    };
    ForecastFormService.prototype.openStaffPlanning = function (companyId, siteId, startDate, endDate) {
        var pageInput = { companyId: companyId, endDate: endDate, siteId: siteId, startDate: startDate };
        this.openPage(_shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__["ComponentConstants"].HR_EMPLOYEE_PLANNING_FORM, pageInput);
    };
    ForecastFormService.prototype.openWorkOrders = function (workPackage) {
        var pageInput = workPackage;
        this.openPage(_shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__["ComponentConstants"].MAI_WORK_ORDERS_FORM, pageInput);
    };
    ForecastFormService.prototype.openWorkPackage = function (workPackage) {
        var pageInput = { wpId: workPackage.projectId };
        this.openPage(_shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__["ComponentConstants"].MAI_WORK_PACKAGE_FORM, pageInput);
    };
    ForecastFormService.prototype.removeEventsFromWorkPackage = function (data) {
        this.eventsRemovedFromWorkPackageSource.next(data);
    };
    ForecastFormService.prototype.saveForecastProjectAttributes = function (forecastProjectId, forecastProjectLlpEventsGeneration, forecastProjectOccurrenceNumber) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])({
            llpEventsGeneration: this.removeBsdeProjectAttribute({
                attributeId: _shared_constants_bsde_attribute_constants_interface__WEBPACK_IMPORTED_MODULE_20__["BsdeAttributeConstants"].MFO_LLP_EVENTS_GENERATION,
                projectId: forecastProjectId
            }),
            occurrenceNumber: this.removeBsdeProjectAttribute({
                attributeId: _shared_constants_bsde_attribute_constants_interface__WEBPACK_IMPORTED_MODULE_20__["BsdeAttributeConstants"].MFO_OCCURRENCE_NUMBER_OPTION,
                projectId: forecastProjectId
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])({
                llpEventsGeneration: _this.createBsdeProjectAttribute({
                    attributeId: _shared_constants_bsde_attribute_constants_interface__WEBPACK_IMPORTED_MODULE_20__["BsdeAttributeConstants"].MFO_LLP_EVENTS_GENERATION,
                    attributeValue: forecastProjectLlpEventsGeneration.toString(),
                    projectId: forecastProjectId
                }),
                occurrenceNumber: _this.createBsdeProjectAttribute({
                    attributeId: _shared_constants_bsde_attribute_constants_interface__WEBPACK_IMPORTED_MODULE_20__["BsdeAttributeConstants"].MFO_OCCURRENCE_NUMBER_OPTION,
                    attributeValue: _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_30__["NumberUtils"].toString(forecastProjectOccurrenceNumber),
                    projectId: forecastProjectId
                })
            });
        }));
    };
    ForecastFormService.prototype.setWorkPackageToNextStatus = function (workPackage) {
        var currentStatus = workPackage.statusState;
        if (currentStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SIMULATED) {
            workPackage.statusState = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SCHEDULED;
        }
        else if (currentStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SCHEDULED) {
            workPackage.statusState = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_RELEASED;
        }
        else if (currentStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_RELEASED) {
            workPackage.statusState = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_ONGOING;
        }
        else if (currentStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_ONGOING) {
            workPackage.statusState = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_PERFORMED;
        }
        else if (currentStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_PERFORMED) {
            workPackage.statusState = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_CLOSE;
        }
    };
    ForecastFormService.prototype.setWorkPackageToPreviousStatus = function (workPackage) {
        var currentStatus = workPackage.statusState;
        if (currentStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_CLOSE) {
            workPackage.statusState = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_PERFORMED;
        }
        else if (currentStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_PERFORMED) {
            workPackage.statusState = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_ONGOING;
        }
        else if (currentStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_ONGOING) {
            workPackage.statusState = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_RELEASED;
        }
        else if (currentStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_RELEASED) {
            workPackage.statusState = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SCHEDULED;
        }
        else if (currentStatus === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SCHEDULED) {
            workPackage.statusState = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SIMULATED;
        }
    };
    ForecastFormService.prototype.sortWorkPackages = function (wp1, wp2) {
        return _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_30__["NumberUtils"].toString(wp1.projectNumber).localeCompare(_shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_30__["NumberUtils"].toString(wp2.projectNumber));
    };
    ForecastFormService.prototype.tooltipWorkPackageSchedulerEventType = function (model, workPackageStatusList) {
        var wp = model._obj.bidmProject;
        var wpStatus = workPackageStatusList.find(function (status) { return status.value === wp.statusState; });
        var wpStatusLabel = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_31__["ObjectUtils"].isDefined(wpStatus) ? wpStatus.label : '';
        return "\n    <div class=\"scheduler-tooltip-container\">\n      " + this.translateService.instant('workPackageNumberShort') + " n\u00B0" + wp.projectNumber + " (" + wpStatusLabel + ")\n    </div>\n    ";
    };
    ForecastFormService.prototype.updateEventGroupPlannedDate = function (data) {
        this.eventGroupPlannedDateUpdateSource.next(data);
    };
    ForecastFormService.prototype.updateScheduledEventPlannedDate = function (data) {
        this.scheduledEventPlannedDateUpdateSource.next(data);
    };
    ForecastFormService.prototype.updateUnscheduledEvent = function (data) {
        this.unscheduledEventUpdateSource.next(data);
    };
    ForecastFormService.prototype.openAssetByPnAndSn = function (pn, sn) {
        var _this = this;
        var input = {
            sn: sn,
            pnCode: pn
        };
        this.getBidoEquipmentsByPnAndSn(input).subscribe(function (assetList) {
            if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_29__["ListUtils"].isNullOrEmpty(assetList) && assetList.length === 1) {
                _this.openAsset(assetList[0]);
            }
        });
    };
    ForecastFormService.prototype.openPage = function (componentId, objectId) {
        var data = {
            componentId: componentId,
            id: this.tabService.generateId(),
            objectId: this.serializationService.serialize(objectId),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_23__["ComponentOpenMode"].Read
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ForecastFormService.prototype.openTask = function (taskCode, taskVersion) {
        var pageInput = {
            taskCode: taskCode,
            taskVersion: taskVersion
        };
        this.openPage(_shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_21__["ComponentConstants"].ENG_TASK_FORM, pageInput);
    };
    ForecastFormService.prototype.setForecastFilteringUpcomingEventTypeList = function (list) {
        this._forecastFiltering.upcomingEventTypeList = list;
    };
    ForecastFormService.prototype.setForecastFilteringWorkPackageStatusList = function (list) {
        this._forecastFiltering.workPackageStatusList = list.filter(function (elt) { return elt !== _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_CLOSE; });
    };
    // ////////////////////////////////////////////////////////////////////////////
    // Aircraft  maintenance api
    // ////////////////////////////////////////////////////////////////////////////
    ForecastFormService.prototype.createBidmWorkOrder = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.createBidmWorkOrder, input);
    };
    ForecastFormService.prototype.removeBidmWorkOrder = function (input) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.removeBidmWorkOrder, input);
    };
    // ////////////////////////////////////////////////////////////////////////////
    // Airworthiness management api
    // ////////////////////////////////////////////////////////////////////////////
    ForecastFormService.prototype.getTsnLabel = function () {
        return _super.prototype.post.call(this, this.airworthinessManagementApi.getTsnLabelForAirworthinessControl);
    };
    // ////////////////////////////////////////////////////////////////////////////
    // AM project management api
    // ////////////////////////////////////////////////////////////////////////////
    ForecastFormService.prototype.createBidmProject = function (input) {
        return _super.prototype.post.call(this, this.amProjectManagementApi.createBidmProject, input);
    };
    ForecastFormService.prototype.getWorkPackage = function (projectId) {
        return _super.prototype.post.call(this, this.amProjectManagementApi.findBidmProject, projectId);
    };
    ForecastFormService.prototype.removeBidmProject = function (input) {
        return _super.prototype.post.call(this, this.amProjectManagementApi.removeBidmProject, input);
    };
    ForecastFormService.prototype.updateBidmProject = function (input) {
        return _super.prototype.post.call(this, this.amProjectManagementApi.updateBidmProject, input);
    };
    // ////////////////////////////////////////////////////////////////////////////
    // Bidt site api
    // ////////////////////////////////////////////////////////////////////////////
    ForecastFormService.prototype.getAllSiteByCriteria = function (input) {
        return _super.prototype.post.call(this, this.bidtSiteApi.findAllByCriteria, input);
    };
    ForecastFormService.prototype.getAllWorkPackageSite = function () {
        return _super.prototype.post.call(this, this.bidtSiteApi.findAll).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (siteList) {
            return siteList.map(function (site) {
                return {
                    label: "" + site.siteName,
                    value: site.siteCode
                };
            });
        }));
    };
    // ////////////////////////////////////////////////////////////////////////////
    // Bidt stock mvt api
    // ////////////////////////////////////////////////////////////////////////////
    ForecastFormService.prototype.controlStock = function (bidmProject) {
        var input = {
            date: bidmProject.projectStartDate,
            mvtStatusExcluded: [
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY,
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].MM_MVT_STATUS_CANCELED_KEY,
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].MM_MVT_STATUS_CLOSED_KEY
            ],
            projectId: { projectId: bidmProject.projectId },
            withItsAlternatives: true
        };
        return _super.prototype.post.call(this, this.bidtStockMvtApi.controlStock, input);
    };
    // ////////////////////////////////////////////////////////////////////////////
    // Fleet management api
    // ////////////////////////////////////////////////////////////////////////////
    ForecastFormService.prototype.getBidoEquipmentsByPnAndSn = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes, input);
    };
    ForecastFormService.prototype.getForecastProjectAsset = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findFirstBidoEquipmentsByPnAndSnCodes, input);
    };
    ForecastFormService.prototype.updateBidoNotification = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.updateBidoNotification, input);
    };
    // ////////////////////////////////////////////////////////////////////////////
    // Maintenance plan api
    // ////////////////////////////////////////////////////////////////////////////
    ForecastFormService.prototype.addBsdeEventSnChangeToWorkPackage = function (eventModel, bidmProject, bidoEquipment, forecastProjectId) {
        var input = {
            bidmProject: bidmProject,
            bidoEquipment: bidoEquipment,
            maintenanceForecastingProjectId: forecastProjectId,
            bsdeEvent: eventModel._obj.bsdeEvent
        };
        return _super.prototype.post.call(this, this.maintenancePlanApi.addBsdeEventSnChangeToWorkPackage, input);
    };
    ForecastFormService.prototype.addBsdeScheduledEventToWorkPackage = function (eventModel, bidmProject, bidoEquipment, forecastProjectId) {
        var input = {
            bidmProject: bidmProject,
            bidoEquipment: bidoEquipment,
            maintenanceForecastingProjectId: forecastProjectId,
            bsdeEvent: eventModel._obj.bsdeScheduledEvent
        };
        return _super.prototype.post.call(this, this.maintenancePlanApi.addBsdeScheduledEventToWorkPackage, input);
    };
    ForecastFormService.prototype.addBsdeUnscheduledEventEvolutionToWorkPackage = function (eventModel, bidmProject, bidoEquipment, forecastProjectId) {
        var input = {
            bidmProject: bidmProject,
            bidoEquipment: bidoEquipment,
            maintenanceForecastingProjectId: forecastProjectId,
            bsdeEvent: eventModel._obj.bsdeEvent
        };
        return _super.prototype.post.call(this, this.maintenancePlanApi.addBsdeUnscheduledEventEvolutionToWorkPackage, input);
    };
    ForecastFormService.prototype.addBsdeUnscheduledEventTaskToWorkPackage = function (eventModel, bidmProject, bidoEquipment, forecastProjectId) {
        var input = {
            bidmProject: bidmProject,
            bidoEquipment: bidoEquipment,
            maintenanceForecastingProjectId: forecastProjectId,
            bsdeEvent: eventModel._obj.bsdeEvent
        };
        return _super.prototype.post.call(this, this.maintenancePlanApi.addBsdeUnscheduledEventTaskToWorkPackage, input);
    };
    ForecastFormService.prototype.addDeferredDefectEventToWorkPackage = function (eventModel, bidmProject, bidoEquipment, forecastProjectId) {
        var defect = eventModel._obj.deferredDefectEvent;
        var input = {
            bidmProject: bidmProject,
            bidoEquipment: bidoEquipment,
            maintenanceForecastingProjectId: forecastProjectId,
            notificationCode: defect.bidoNotificationData.notificationCode,
            nteDate: defect.nteDate
        };
        return _super.prototype.post.call(this, this.maintenancePlanApi.addDeferredDefectEventToWorkPackage, input);
    };
    ForecastFormService.prototype.clearMaintenanceForecastingCache = function (input) {
        return _super.prototype.post.call(this, this.maintenancePlanApi.clearMaintenanceForecastingCache, input);
    };
    ForecastFormService.prototype.getAllFamilyVariantByUcMfoNonRoutineEvent = function () {
        return _super.prototype.post.call(this, this.maintenancePlanApi.findAllFamilyVariantByUcMfoNonRoutineEvent);
    };
    ForecastFormService.prototype.getAllForecastFlightUsage = function (input) {
        return _super.prototype.post.call(this, this.maintenancePlanApi.getAllMaintenanceForecastingFlightUsage, input);
    };
    ForecastFormService.prototype.getAllForecastProjectCustomer = function () {
        return _super.prototype.post.call(this, this.maintenancePlanApi.geAllMaintenanceForecastingCustomer);
    };
    ForecastFormService.prototype.getAllForecastProjectSite = function () {
        return _super.prototype.post.call(this, this.maintenancePlanApi.geAllMaintenanceForecastingSite);
    };
    ForecastFormService.prototype.getWorkPackageWhereDefectIsAffected = function (input) {
        return _super.prototype.post.call(this, this.maintenancePlanApi.getWorkPackageWhereDefectIsAffected, input);
    };
    ForecastFormService.prototype.getWorkPackageWhereScheduledEventIsAffected = function (input) {
        return _super.prototype.post.call(this, this.maintenancePlanApi.getWorkPackageWhereDefectIsAffected, input);
    };
    ForecastFormService.prototype.getWorkPackageWhereUnscheduledEventIsAffected = function (input) {
        return _super.prototype.post.call(this, this.maintenancePlanApi.getWorkPackageWhereDefectIsAffected, input);
    };
    ForecastFormService.prototype.initialize = function (input) {
        return _super.prototype.post.call(this, this.maintenancePlanApi.initMaintenanceForecastingCache, input);
    };
    ForecastFormService.prototype.isForecastProjectLocked = function (input) {
        return _super.prototype.post.call(this, this.maintenancePlanApi.isForecastProjectLocked, input);
    };
    ForecastFormService.prototype.loadWithForecasterOption = function (input) {
        return _super.prototype.post.call(this, this.maintenancePlanApi.loadMaintenanceForecastingWithForecasterOption, input);
    };
    ForecastFormService.prototype.loadWithFromDbOption = function (input) {
        return _super.prototype.post.call(this, this.maintenancePlanApi.loadMaintenanceForecastingWithFromDbOption, input);
    };
    ForecastFormService.prototype.loadWithLocalRefreshOption = function (input) {
        return _super.prototype.post.call(this, this.maintenancePlanApi.loadMaintenanceForecastingWithLocalRefreshOption, input);
    };
    ForecastFormService.prototype.loadWithOptimizerOption = function (input) {
        return _super.prototype.post.call(this, this.maintenancePlanApi.loadMaintenanceForecastingWithOptimizerOption, input);
    };
    ForecastFormService.prototype.removeBsdeEventSnChangeFromWorkPackage = function (eventModel, bidmProject, bidoEquipment, forecastProjectId) {
        var input = {
            bidmProject: bidmProject,
            bidoEquipment: bidoEquipment,
            maintenanceForecastingProjectId: forecastProjectId,
            bsdeEvent: eventModel._obj.bsdeEvent
        };
        return _super.prototype.post.call(this, this.maintenancePlanApi.removeBsdeEventSnChangeFromWorkPackage, input);
    };
    ForecastFormService.prototype.removeBsdeScheduledEventFromWorkPackage = function (eventModel, bidmProject, bidoEquipment, forecastProjectId) {
        var input = {
            bidmProject: bidmProject,
            bidoEquipment: bidoEquipment,
            maintenanceForecastingProjectId: forecastProjectId,
            bsdeEvent: eventModel._obj.bsdeScheduledEvent
        };
        return _super.prototype.post.call(this, this.maintenancePlanApi.removeBsdeScheduledEventFromWorkPackage, input);
    };
    ForecastFormService.prototype.removeBsdeUnscheduledEventEvolutionFromWorkPackage = function (eventModel, bidmProject, bidoEquipment, forecastProjectId) {
        var input = {
            bidmProject: bidmProject,
            bidoEquipment: bidoEquipment,
            maintenanceForecastingProjectId: forecastProjectId,
            bsdeEvent: eventModel._obj.bsdeEvent
        };
        return _super.prototype.post.call(this, this.maintenancePlanApi.removeBsdeUnscheduledEventEvolutionFromWorkPackage, input);
    };
    ForecastFormService.prototype.removeBsdeUnscheduledEventTaskFromWorkPackage = function (eventModel, bidmProject, bidoEquipment, forecastProjectId) {
        var input = {
            bidmProject: bidmProject,
            bidoEquipment: bidoEquipment,
            maintenanceForecastingProjectId: forecastProjectId,
            bsdeEvent: eventModel._obj.bsdeEvent
        };
        return _super.prototype.post.call(this, this.maintenancePlanApi.removeBsdeUnscheduledEventTaskFromWorkPackage, input);
    };
    ForecastFormService.prototype.removeDeferredDefectEventFromWorkPackage = function (eventModel, bidmProject, bidoEquipment, forecastProjectId) {
        var defect = eventModel._obj.deferredDefectEvent;
        var input = {
            bidmProject: bidmProject,
            bidoEquipment: bidoEquipment,
            maintenanceForecastingProjectId: forecastProjectId,
            notificationCode: defect.bidoNotificationData.notificationCode,
            nteDate: defect.nteDate
        };
        return _super.prototype.post.call(this, this.maintenancePlanApi.removeDeferredDefectEventFromWorkPackage, input);
    };
    ForecastFormService.prototype.updateMaintenanceForecasting = function (bsdeProject, forecastProjectId) {
        var input = {
            bsdeProjectDTO: bsdeProject,
            maintenanceForecastingProjectId: forecastProjectId
        };
        return _super.prototype.post.call(this, this.maintenancePlanApi.updateMaintenanceForecasting, input);
    };
    // ////////////////////////////////////////////////////////////////////////////
    // Project management api
    // ////////////////////////////////////////////////////////////////////////////
    ForecastFormService.prototype.getBireMeasureReference = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireMeasureReference, input);
    };
    ForecastFormService.prototype.getBireUnitMeasure = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireUnitMeasure, input);
    };
    // ////////////////////////////////////////////////////////////////////////////
    // Project management api
    // ////////////////////////////////////////////////////////////////////////////
    ForecastFormService.prototype.createBsdeEvent = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.createBsdeEvent, input);
    };
    ForecastFormService.prototype.createBsdeProject = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.createBsdeProject, input);
    };
    ForecastFormService.prototype.createBsdeProjectAttribute = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.createBsdeProjectAttribute, input);
    };
    ForecastFormService.prototype.createBsdeScheduledEvent = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.createBsdeScheduledEvent, input);
    };
    ForecastFormService.prototype.createOrUpdateBsdeAvailability = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.createOrUpdateBsdeAvailability, input);
    };
    ForecastFormService.prototype.findBsdeAvailabilitysByProjectAndAvailabilityTypeAndAvailabilityCode = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.findBsdeAvailabilitysByProjectAndAvailabilityTypeAndAvailabilityCode, input);
    };
    ForecastFormService.prototype.getBsdeProject = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.findBsdeProject, input);
    };
    ForecastFormService.prototype.getBsdeProjectAttributeList = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.findBsdeProjectAttributesByProject, input);
    };
    ForecastFormService.prototype.getBsdeProjectListByFleetId = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.findBsdeProjectsByFleetId, input);
    };
    ForecastFormService.prototype.getBsdeProjectListByPnAndSn = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.findBsdeProjectsByPnAndSn, input);
    };
    ForecastFormService.prototype.removeBsdeAvailability = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.removeBsdeAvailability, input);
    };
    ForecastFormService.prototype.removeBsdeProjectAttribute = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.removeBsdeProjectAttribute, input);
    };
    ForecastFormService.prototype.synchronizeWithHR = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.synchronizeWithHR, input);
    };
    ForecastFormService.prototype.updateBsdeEvent = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.updateBsdeEvent, input);
    };
    ForecastFormService.prototype.updateBsdeScheduledEvent = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.updateBsdeScheduledEvent, input);
    };
    // ////////////////////////////////////////////////////////////////////////////
    // Task maintenance api
    // ////////////////////////////////////////////////////////////////////////////
    ForecastFormService.prototype.findAllBireQualificationDatasDropDown = function () {
        return _super.prototype.post.call(this, this.taskManagementApi.createOrUpdateBsdeAvailability);
    };
    // ////////////////////////////////////////////////////////////////////////////
    // User profile maintenance api
    // ////////////////////////////////////////////////////////////////////////////
    ForecastFormService.prototype.workPackageAssignedToList = function () {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findBidoUsersWithUseCase, _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_19__["BidoFunctionTypeConstants"].UC_AIRM_RECEPTION)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (userList) {
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_29__["ListUtils"].isNullOrEmpty(userList)
                ? []
                : userList
                    .map(function (user) {
                    return {
                        label: user.lastname + " " + user.firstname,
                        value: user.userId
                    };
                })
                    .sort(function (user1, user2) { return user1.label.toUpperCase().localeCompare(user2.label.toUpperCase()); });
        }));
    };
    ForecastFormService.prototype.loadWorkCenterListBySite = function (input) {
        if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_32__["StringUtils"].isNullOrEmpty(input)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        }
        else {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findByMandantAndSiteCode, input);
        }
    };
    ForecastFormService.prototype.loadAllWorkCenterList = function () {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findAllWarehouseByUserRights);
    };
    var ForecastFormService_1;
    ForecastFormService.EVENT_COLOR_EVENT = (_a = {},
        _a[UpcomingEventStatus.IN_PAST] = '#000',
        _a[UpcomingEventStatus.NOK] = '#ab000d',
        _a[UpcomingEventStatus.OK] = '#7cb342',
        _a[UpcomingEventStatus.WARN] = '#fbc02d',
        _a[UpcomingEventStatus.ALERT] = '#EA9107',
        _a);
    ForecastFormService.EVENT_COLOR_FLIGHT = {
        REAL: 'purple',
        SIMULATED: 'purple'
    };
    ForecastFormService.EVENT_COLOR_WORK_PACKAGE = (_b = {},
        _b[_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SIMULATED] = '#63a4ff',
        _b[_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_SCHEDULED] = '#004ba0',
        _b[_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_RELEASED] = '#bcbcbc',
        _b[_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_ONGOING] = '#595959',
        _b[_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_PERFORMED] = '#595959',
        _b[_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_18__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_CLOSE] = '#232323',
        _b);
    ForecastFormService.FORECAST_PROJECT_DEFAULT_END_DATE_OFFSET = 3;
    ForecastFormService = ForecastFormService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_25__["AppConfigService"],
            _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_6__["AircraftMaintenanceApi"],
            _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_7__["AirworthinessManagementApi"],
            _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_8__["AMProjectManagementApi"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_9__["BidtSiteApi"],
            _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_10__["BidtStockMvtApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_12__["FleetManagementApi"],
            _shared_api_maintenance_plan_api__WEBPACK_IMPORTED_MODULE_13__["MaintenancePlanApi"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_14__["ProductStructureManagementApi"],
            _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_15__["ProjectManagementApi"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_27__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_28__["TabService"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_17__["UserProfileManagementApi"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_26__["MessageService"],
            _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_16__["TaskManagementApi"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_11__["BidtWarehouseApi"]])
    ], ForecastFormService);
    return ForecastFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_24__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/forecast-global-filter/forecast-global-filter.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/forecast-global-filter/forecast-global-filter.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aw-global-filter\">\r\n  <label class=\"aw-global-filter-label\">\r\n    <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n  </label>\r\n\r\n  <input\r\n    class=\"aw-global-filter-input\"\r\n    type=\"text\"\r\n    placeholder=\"{{ 'typeToFilter' | translate }}\"\r\n    [(ngModel)]=\"forecastFormService.forecastFiltering.globalSearch\"\r\n    (keyup)=\"filter(forecastFormService.forecastFiltering.globalSearch)\"\r\n  />\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/forecast-global-filter/forecast-global-filter.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/forecast-global-filter/forecast-global-filter.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: GlobalFilterForecastFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalFilterForecastFormComponent", function() { return GlobalFilterForecastFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/types/generic-component */ "./src/app/shared/types/generic-component.ts");
/* harmony import */ var _forecast_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forecast-form.service */ "./src/app/main/maintenance/forecast/form/forecast-form.service.ts");
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






var GlobalFilterForecastFormComponent = /** @class */ (function (_super) {
    __extends(GlobalFilterForecastFormComponent, _super);
    function GlobalFilterForecastFormComponent(forecastFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write) || this;
        _this.forecastFormService = forecastFormService;
        _this.registerGlobalSearchFilterObservable();
        return _this;
    }
    GlobalFilterForecastFormComponent_1 = GlobalFilterForecastFormComponent;
    GlobalFilterForecastFormComponent.prototype.getComponentName = function () {
        return 'GlobalFilterForecastFormComponent';
    };
    GlobalFilterForecastFormComponent.prototype.filter = function (searchTextValue) {
        this.globalSearchFilterChanged.next(searchTextValue);
    };
    GlobalFilterForecastFormComponent.prototype.clearGlobalFilter = function () {
        this.forecastFormService.forecastFiltering.globalSearch = '';
    };
    GlobalFilterForecastFormComponent.prototype.registerGlobalSearchFilterObservable = function () {
        var _this = this;
        this.clearGlobalFilter();
        this.globalSearchFilterChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.globalSearchFilterChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(GlobalFilterForecastFormComponent_1.SEARCH_TEXT_DEBOUNCE_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe))
            .subscribe(function () {
            _this.forecastFormService.filterForecast();
        });
    };
    var GlobalFilterForecastFormComponent_1;
    GlobalFilterForecastFormComponent.SEARCH_TEXT_DEBOUNCE_TIME = 500;
    GlobalFilterForecastFormComponent = GlobalFilterForecastFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-forecast-form-global-filter',
            template: __webpack_require__(/*! ./forecast-global-filter.component.html */ "./src/app/main/maintenance/forecast/form/forecast-global-filter/forecast-global-filter.component.html")
        }),
        __metadata("design:paramtypes", [_forecast_form_service__WEBPACK_IMPORTED_MODULE_5__["ForecastFormService"]])
    ], GlobalFilterForecastFormComponent);
    return GlobalFilterForecastFormComponent;
}(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_4__["GenericComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/forecast-legend-dialog/forecast-legend-dialog.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/forecast-legend-dialog/forecast-legend-dialog.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"section\">\r\n      <h4 class=\"section-title\">\r\n        {{ \"flight\" | translate }}\r\n      </h4>\r\n\r\n      <div class=\"section-content\">\r\n        <div class=\"legend-item\">\r\n          <div class=\"flight\"></div>\r\n          <div class=\"label\">{{ \"flight\" | translate }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"section\">\r\n      <h4 class=\"section-title\">\r\n        {{ \"upcomingEvent\" | translate }}\r\n      </h4>\r\n\r\n      <div class=\"section-content\">\r\n        <div class=\"legend-item\">\r\n          <div class=\"upcoming-event ok\"></div>\r\n          <div class=\"label\">{{ getComponentName() + \".upcomingEventOk\" | translate }}</div>\r\n        </div>\r\n\r\n        <div class=\"legend-item\">\r\n          <div class=\"upcoming-event warn\"></div>\r\n          <div class=\"label\">{{ getComponentName() + \".upcomingEventWarn\" | translate }}</div>\r\n        </div>\r\n\r\n        <div class=\"legend-item\">\r\n          <div class=\"upcoming-event nok\"></div>\r\n          <div class=\"label\">{{ getComponentName() + \".upcomingEventNok\" | translate }}</div>\r\n        </div>\r\n\r\n        <div class=\"legend-item\">\r\n          <div class=\"upcoming-event in-past\"></div>\r\n          <div class=\"label\">{{ getComponentName() + \".upcomingEventInPast\" | translate }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"section\">\r\n      <h4 class=\"section-title\">\r\n        {{ \"workPackage\" | translate }}\r\n      </h4>\r\n\r\n      <div class=\"section-content\">\r\n        <div class=\"legend-item\">\r\n          <div class=\"work-package simulated\"></div>\r\n          <div class=\"label\">{{ \"simulated\" | translate }}</div>\r\n        </div>\r\n\r\n        <div class=\"legend-item\">\r\n          <div class=\"work-package scheduled\"></div>\r\n          <div class=\"label\">{{ \"scheduled\" | translate }}</div>\r\n        </div>\r\n\r\n        <div class=\"legend-item\">\r\n          <div class=\"work-package released\"></div>\r\n          <div class=\"label\">{{ \"released\" | translate }}</div>\r\n        </div>\r\n\r\n        <div class=\"legend-item\">\r\n          <div class=\"work-package other\"></div>\r\n          <div class=\"label\">{{ getComponentName() + \".workPackageOtherStatus\" | translate }}</div>\r\n        </div>\r\n\r\n        <div class=\"legend-item\">\r\n          <div class=\"work-package closed\"></div>\r\n          <div class=\"label\">{{ \"closed\" | translate }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"close\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/forecast-legend-dialog/forecast-legend-dialog.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/forecast-legend-dialog/forecast-legend-dialog.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .legend-item {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  height: 2.25rem; }\n  :host .legend-item .label {\n    margin-left: 1rem; }\n  :host .legend-item .flight {\n    background-color: purple;\n    height: 4px;\n    width: calc(21.21px * 2); }\n  :host .legend-item .upcoming-event {\n    height: 21.21px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    width: 21.21px; }\n  :host .legend-item .upcoming-event.in-past {\n      background-color: #000;\n      color: #fff; }\n  :host .legend-item .upcoming-event.nok {\n      background-color: #ab000d;\n      color: #fff; }\n  :host .legend-item .upcoming-event.ok {\n      background-color: #7cb342;\n      color: #000; }\n  :host .legend-item .upcoming-event.warn {\n      background-color: #fbc02d;\n      color: #000; }\n  :host .legend-item .work-package {\n    height: 21.21px;\n    width: calc(21.21px * 2); }\n  :host .legend-item .work-package.simulated {\n      background-color: #63a4ff; }\n  :host .legend-item .work-package.scheduled {\n      background-color: #004ba0; }\n  :host .legend-item .work-package.released {\n      background-color: #bcbcbc; }\n  :host .legend-item .work-package.closed {\n      background-color: #232323; }\n  :host .legend-item .work-package.other {\n      background-color: #595959; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9mb3JlY2FzdC9mb3JtL2ZvcmVjYXN0LWxlZ2VuZC1kaWFsb2cvRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcbWFpbnRlbmFuY2VcXGZvcmVjYXN0XFxmb3JtXFxmb3JlY2FzdC1sZWdlbmQtZGlhbG9nXFxmb3JlY2FzdC1sZWdlbmQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBO0VBTG5CO0lBUU0saUJBQWlCLEVBQUE7RUFSdkI7SUFZTSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLHdCQUFnQyxFQUFBO0VBZHRDO0lBa0JNLGVBcEJlO0lBcUJmLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsY0F0QmUsRUFBQTtFQUVyQjtNQXVCUSxzQkFBc0I7TUFDdEIsV0FBVyxFQUFBO0VBeEJuQjtNQTRCUSx5QkFBeUI7TUFDekIsV0FBVyxFQUFBO0VBN0JuQjtNQWlDUSx5QkFBeUI7TUFDekIsV0FBVyxFQUFBO0VBbENuQjtNQXNDUSx5QkFBeUI7TUFDekIsV0FBVyxFQUFBO0VBdkNuQjtJQTRDTSxlQTlDZTtJQStDZix3QkFBZ0MsRUFBQTtFQTdDdEM7TUFnRFEseUJBQXlCLEVBQUE7RUFoRGpDO01Bb0RRLHlCQUF5QixFQUFBO0VBcERqQztNQXdEUSx5QkFBeUIsRUFBQTtFQXhEakM7TUE0RFEseUJBQXlCLEVBQUE7RUE1RGpDO01BZ0VRLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9mb3JlY2FzdC9mb3JtL2ZvcmVjYXN0LWxlZ2VuZC1kaWFsb2cvZm9yZWNhc3QtbGVnZW5kLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRldmVudC13aWR0aDogMjEuMjFweDtcclxuXHJcbjpob3N0IHtcclxuICAubGVnZW5kLWl0ZW0ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgaGVpZ2h0OiAyLjI1cmVtO1xyXG5cclxuICAgIC5sYWJlbCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5mbGlnaHQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XHJcbiAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICB3aWR0aDogY2FsYygjeyRldmVudC13aWR0aH0gKiAyKTtcclxuICAgIH1cclxuXHJcbiAgICAudXBjb21pbmctZXZlbnQge1xyXG4gICAgICBoZWlnaHQ6ICRldmVudC13aWR0aDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB3aWR0aDogJGV2ZW50LXdpZHRoO1xyXG5cclxuICAgICAgJi5pbi1wYXN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLm5vayB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FiMDAwZDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5vayB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdjYjM0MjtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi53YXJuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJjMDJkO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLndvcmstcGFja2FnZSB7XHJcbiAgICAgIGhlaWdodDogJGV2ZW50LXdpZHRoO1xyXG4gICAgICB3aWR0aDogY2FsYygjeyRldmVudC13aWR0aH0gKiAyKTtcclxuXHJcbiAgICAgICYuc2ltdWxhdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNhNGZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnNjaGVkdWxlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGJhMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5yZWxlYXNlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JjYmNiYztcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5jbG9zZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYub3RoZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTU5NTk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/forecast-legend-dialog/forecast-legend-dialog.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/forecast-legend-dialog/forecast-legend-dialog.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LegendForecastFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendForecastFormDialogComponent", function() { return LegendForecastFormDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
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



var LegendForecastFormDialogComponent = /** @class */ (function (_super) {
    __extends(LegendForecastFormDialogComponent, _super);
    function LegendForecastFormDialogComponent() {
        return _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'LegendForecastFormDialogComponent') || this;
    }
    LegendForecastFormDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-forecast-form-legend',
            template: __webpack_require__(/*! ./forecast-legend-dialog.component.html */ "./src/app/main/maintenance/forecast/form/forecast-legend-dialog/forecast-legend-dialog.component.html"),
            styles: [__webpack_require__(/*! ./forecast-legend-dialog.component.scss */ "./src/app/main/maintenance/forecast/form/forecast-legend-dialog/forecast-legend-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LegendForecastFormDialogComponent);
    return LegendForecastFormDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/forecast-project-header-dialog/forecast-project-header-dialog.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/forecast-project-header-dialog/forecast-project-header-dialog.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"70\">\r\n  <a-header>\r\n    <h3 class=\"grid-cell-title\">\r\n      {{ getComponentName() + \".projectHeader\" | translate }}\r\n    </h3>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"grid-row\">\r\n      <div class=\"grid-cell--12 main-block\">\r\n        <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n          <div class=\"section\">\r\n            <div class=\"section-content\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"forecastNumber\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"forecastProject.projectNumber\" [disabled]=\"true\" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [class.required]=\"!isReadOpenMode\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"forecastName\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"forecastProject.projectName\" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"mroCenter\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      [options]=\"repairCenterList\"\r\n                      [(ngModel)]=\"selectedRepairCenter\"\r\n                      [showClear]=\"true\"\r\n                      placeholder=\"&nbsp;\"\r\n                      (onChange)=\"updateRepairCenterCode()\"\r\n                      appendTo=\"body\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"workCenter\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      [options]=\"workCenterList\"\r\n                      [(ngModel)]=\"selectedWorkCenter\"\r\n                      [showClear]=\"true\"\r\n                      [disabled]=\"workCenterList.length == 0\"\r\n                      placeholder=\"&nbsp;\"\r\n                      (onChange)=\"updateWorkCenter()\"\r\n                      appendTo=\"body\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"customer\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      [options]=\"customerList\"\r\n                      [(ngModel)]=\"selectedCustomer\"\r\n                      [showClear]=\"true\"\r\n                      placeholder=\"&nbsp;\"\r\n                      (onChange)=\"updateCustomerCode()\"\r\n                      appendTo=\"body\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"form-group\" [ngClass]=\"{ 'flex--3': !isCreateOpenMode }\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"description\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control text-area\">\r\n                    <textarea\r\n                      class=\"aw-textarea\"\r\n                      [rows]=\"1\"\r\n                      pInputTextarea\r\n                      autoResize=\"autoResize\"\r\n                      [(ngModel)]=\"forecastProject.projectDescription\"\r\n                    ></textarea>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" *ngIf=\"!isCreateOpenMode\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"status\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"aw-input\"\r\n                      [disabled]=\"true\"\r\n                      [(ngModel)]=\"forecastProject.statusStateText\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"section\">\r\n            <h4 class=\"section-title\">\r\n              {{ getComponentName() + \".fleetData\" | translate }}\r\n            </h4>\r\n\r\n            <div class=\"section-content\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"form-control aw-selectbutton-wrapper\">\r\n                    <p-selectButton\r\n                      [(ngModel)]=\"selectedForecastCategory\"\r\n                      [options]=\"forecastCategoryList\"\r\n                      (onOptionClick)=\"onChangeForecastCategory($event)\"\r\n                    ></p-selectButton>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" *ngIf=\"!assetSelected\" [class.required]=\"!isReadOpenMode\">\r\n                  <label class=\"form-label\">{{ \"fleetCode\" | translate }}</label>\r\n\r\n                  <div class=\"form-control form-control-with-modal\">\r\n                    <div class=\"form-control-data\" (click)=\"openSearchFleetDialog()\">\r\n                      {{ forecastProject.projectFleetCode }}\r\n                    </div>\r\n\r\n                    <div *ngIf=\"forecastProject.projectFleetCode\" class=\"btn-clear-wrapper\">\r\n                      <i\r\n                        class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                        aria-hidden=\"true\"\r\n                        (click)=\"clearForecastProjectFleet()\"\r\n                      ></i>\r\n                    </div>\r\n\r\n                    <div class=\"btn-search-wrapper\">\r\n                      <i\r\n                        class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                        aria-hidden=\"true\"\r\n                        (click)=\"openSearchFleetDialog()\"\r\n                      ></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" *ngIf=\"forecastProject.projectFleetCode && !assetSelected\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"fleetName\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"aw-input\"\r\n                      [(ngModel)]=\"forecastProject.projectFleetName\"\r\n                      [disabled]=\"true\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" *ngIf=\"forecastProject.projectFleetCode && !assetSelected\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"customer\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"forecastProject.customerCode\" [disabled]=\"true\" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" *ngIf=\"assetSelected\" [class.required]=\"!isReadOpenMode\">\r\n                  <label class=\"form-label\">{{ \"assetCode\" | translate }}</label>\r\n\r\n                  <div class=\"form-control form-control-with-modal\">\r\n                    <div class=\"form-control-data\" (click)=\"openSearchAssetDialog()\">\r\n                      {{ forecastProjectAsset.equipmentCode }}\r\n                    </div>\r\n\r\n                    <div *ngIf=\"forecastProjectAsset.equipmentCode\" class=\"btn-clear-wrapper\">\r\n                      <i\r\n                        class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                        aria-hidden=\"true\"\r\n                        (click)=\"clearForecastProjectAsset()\"\r\n                      ></i>\r\n                    </div>\r\n\r\n                    <div class=\"btn-search-wrapper\">\r\n                      <i\r\n                        class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                        aria-hidden=\"true\"\r\n                        (click)=\"openSearchAssetDialog()\"\r\n                      ></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [class.required]=\"!isReadOpenMode\">\r\n                  <label class=\"form-label\">\r\n                    {{ getComponentName() + \".unitConversionMatrix\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      [options]=\"ucmList\"\r\n                      [(ngModel)]=\"selectedconversionMatrixDTO\"\r\n                      [showClear]=\"true\"\r\n                      placeholder=\"&nbsp;\"\r\n                      (onChange)=\"onChangeConversionMatrix()\"\r\n                      appendTo=\"body\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"section\">\r\n            <h4 class=\"section-title\">\r\n              {{ \"settings\" | translate }}\r\n            </h4>\r\n            <div class=\"row\" style=\"display: flex; justify-content: flex-end;\">\r\n              <button\r\n                *ngIf=\"\r\n                  !isCreateOpenMode && forecastProject.statusState != bidoFunctionTypeConstants.UC_MFO_FORECAST_CLOSING\r\n                \"\r\n                type=\"button\"\r\n                mat-raised-button\r\n                color=\"warn\"\r\n                (click)=\"closeForecastProject()\"\r\n              >\r\n                {{ getComponentName() + \".closeForecast\" | translate }}\r\n              </button>\r\n              <button\r\n                *ngIf=\"\r\n                  !isCreateOpenMode &&\r\n                  forecastProject.statusState != bidoFunctionTypeConstants.UC_MFO_FORECAST_MANAGEMENT\r\n                \"\r\n                type=\"button\"\r\n                mat-raised-button\r\n                (click)=\"reopenForecastProject()\"\r\n              >\r\n                {{ getComponentName() + \".reopenForecast\" | translate }}\r\n              </button>\r\n            </div>\r\n            <div class=\"section-content\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"startDate\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <p-calendar\r\n                      showButtonBar=\"true\"\r\n                      [monthNavigator]=\"true\"\r\n                      [yearNavigator]=\"true\"\r\n                      [yearRange]=\"sessionService.calendarYearRange\"\r\n                      class=\"aw-calendar\"\r\n                      [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                      [locale]=\"sessionService.calendarFormat\"\r\n                      [showTime]=\"true\"\r\n                      [maxDate]=\"forecastProject.projectEndDate\"\r\n                      [(ngModel)]=\"forecastProject.projectStartDate\"\r\n                      appendTo=\"body\"\r\n                    ></p-calendar>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"endDate\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <p-calendar\r\n                      showButtonBar=\"true\"\r\n                      [monthNavigator]=\"true\"\r\n                      [yearNavigator]=\"true\"\r\n                      [yearRange]=\"sessionService.calendarYearRange\"\r\n                      class=\"aw-calendar\"\r\n                      [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                      [locale]=\"sessionService.calendarFormat\"\r\n                      [showTime]=\"true\"\r\n                      [minDate]=\"forecastProject.projectStartDate\"\r\n                      [(ngModel)]=\"forecastProject.projectEndDate\"\r\n                      appendTo=\"body\"\r\n                    ></p-calendar>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"llp\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <p-checkbox\r\n                      binary=\"true\"\r\n                      class=\"aw-checkbox\"\r\n                      [(ngModel)]=\"forecastProjectLlpEventsGeneration\"\r\n                    ></p-checkbox>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">\r\n                    {{ \"occurrence\" | translate }}\r\n                  </label>\r\n\r\n                  <div class=\"form-control\">\r\n                    <p-dropdown\r\n                      class=\"aw-dropdown fixed-width\"\r\n                      [options]=\"occurrenceList\"\r\n                      placeholder=\"&nbsp;\"\r\n                      [(ngModel)]=\"forecastProjectOccurrenceNumber\"\r\n                      appendTo=\"body\"\r\n                    ></p-dropdown>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <div class=\"section\">\r\n      <div class=\"section-content\">\r\n        <div class=\"row\">\r\n          <div class=\"display--flex-row flex--1 flex-row--justify-end action-list\">\r\n            <button type=\"button\" mat-raised-button (click)=\"cancelForecastProject()\">\r\n              {{ \"cancel\" | translate }}\r\n            </button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"saveForecastProject()\">\r\n              {{ \"save\" | translate }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-equipment\r\n  *ngIf=\"showSearchAssetDialog\"\r\n  [(display)]=\"showSearchAssetDialog\"\r\n  (onSelected)=\"onSelectedAsset($event)\"\r\n></aw-dialog-search-equipment>\r\n\r\n<aw-dialog-search-fleet\r\n  *ngIf=\"showSearchFleetDialog\"\r\n  [(display)]=\"showSearchFleetDialog\"\r\n  (onSelected)=\"onSelectedFleet($event)\"\r\n></aw-dialog-search-fleet>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/forecast-project-header-dialog/forecast-project-header-dialog.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/forecast-project-header-dialog/forecast-project-header-dialog.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ForecastProjectHeaderDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastProjectHeaderDialogComponent", function() { return ForecastProjectHeaderDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _engineering_management_unit_conversion_matrix_unit_conversion_matrix_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../engineering-management/unit-conversion-matrix/unit-conversion-matrix.service */ "./src/app/main/engineering-management/unit-conversion-matrix/unit-conversion-matrix.service.ts");
/* harmony import */ var _fleet_management_fleet_form_fleet_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../fleet-management/fleet-form/fleet-form.service */ "./src/app/main/fleet-management/fleet-form/fleet-form.service.ts");
/* harmony import */ var _forecast_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../forecast-form.service */ "./src/app/main/maintenance/forecast/form/forecast-form.service.ts");
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















var ForecastProjectHeaderDialogComponent = /** @class */ (function (_super) {
    __extends(ForecastProjectHeaderDialogComponent, _super);
    function ForecastProjectHeaderDialogComponent(forecastFormService, messageService, sessionService, unitConversionMatrixService, fleetFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Write, 'ForecastProjectHeaderDialogComponent') || this;
        _this.forecastFormService = forecastFormService;
        _this.messageService = messageService;
        _this.sessionService = sessionService;
        _this.unitConversionMatrixService = unitConversionMatrixService;
        _this.fleetFormService = fleetFormService;
        _this.bidoFunctionTypeConstants = _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__["BidoFunctionTypeConstants"];
        _this.assetSelected = false;
        _this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
    }
    ForecastProjectHeaderDialogComponent.prototype.ngOnInit = function () {
        if (!!this.forecastProject.projectPn || !!this.forecastProject.projectSn) {
            this.assetSelected = true;
        }
        // Unit conversion matrix
        this.searchObject = {};
        this.ucmList = [];
        this.workCenterList = [];
        this.updateRepairCenterCode();
        if (this.assetSelected) {
            this.getConversionMatrixForAsset();
        }
        else {
            if (!!this.forecastProject.projectFleetId) {
                this.getFleetEquipments(this.forecastProject.projectFleetId);
            }
        }
    };
    ForecastProjectHeaderDialogComponent.prototype.cancelForecastProject = function () {
        this.closeDialog();
    };
    ForecastProjectHeaderDialogComponent.prototype.createForecastProject = function () {
        var _this = this;
        if (this.checkForecastProject()) {
            var forecastProjectObservable = this.selectedForecastCategory === _forecast_form_service__WEBPACK_IMPORTED_MODULE_14__["ForecastCategory"].FLEET
                ? this.forecastFormService.getBsdeProjectListByFleetId(this.forecastProject.projectFleetId)
                : this.forecastFormService.getBsdeProjectListByPnAndSn({
                    pnCode: this.forecastProjectAsset.statusState,
                    sn: this.forecastProjectAsset.sn
                });
            forecastProjectObservable.subscribe({
                next: function (forecastProjectList) {
                    var existingProjectNotClosed = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_9__["ListUtils"].orEmpty(forecastProjectList).some(function (forecastProject) { return forecastProject.statusState !== _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__["BidoFunctionTypeConstants"].UC_MFO_FORECAST_CLOSING; });
                    if (existingProjectNotClosed) {
                        _this.messageService.showWarningMessage(_this.getTranslateKey(_this.selectedForecastCategory === _forecast_form_service__WEBPACK_IMPORTED_MODULE_14__["ForecastCategory"].FLEET
                            ? 'errorOnProjectAlreadyExistByFleet'
                            : 'errorOnProjectAlreadyExistByPnSn'));
                    }
                    else {
                        _this.forecastProject.fromSap = false;
                        _this.forecastProject.projectStartDate = _this.forecastProject.projectStartDate || new Date();
                        _this.forecastProject.statusDate = new Date();
                        _this.forecastProject.statusState = _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__["BidoFunctionTypeConstants"].UC_MFO_FORECAST_MANAGEMENT;
                        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isDefined(_this.selectedCustomer)) {
                            _this.forecastProject.customerCode = _this.selectedCustomer.customerCode;
                        }
                        else {
                            _this.forecastProject.customerCode = undefined;
                        }
                        _this.forecastFormService
                            .createBsdeProject(_this.forecastProject)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (forecastProjectId) {
                            _this.forecastProjectId = forecastProjectId.projectId;
                            return _this.forecastFormService.saveForecastProjectAttributes(forecastProjectId.projectId, _this.forecastProjectLlpEventsGeneration, _this.forecastProjectOccurrenceNumber);
                        }))
                            .subscribe({
                            next: function () {
                                _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Write);
                                _this.onSave.emit(_this.forecastProjectId);
                                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnCreateForecast'));
                                _this.closeDialog();
                            }
                        });
                    }
                }
            });
        }
    };
    ForecastProjectHeaderDialogComponent.prototype.updateForecastProject = function () {
        var _this = this;
        if (this.checkForecastProject()) {
            this.forecastFormService.isForecastProjectLocked(this.forecastProjectId).subscribe({
                next: function (isForecastProjectLocked) {
                    if (isForecastProjectLocked) {
                        _this.messageService.showWarningMessage(_this.getTranslateKey('warningOnForecastLocked'));
                    }
                    else {
                        _this.forecastFormService
                            .updateMaintenanceForecasting(_this.forecastProject, _this.forecastProjectId)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function () {
                            return _this.forecastFormService.saveForecastProjectAttributes(_this.forecastProjectId, _this.forecastProjectLlpEventsGeneration, _this.forecastProjectOccurrenceNumber);
                        }))
                            .subscribe({
                            next: function () {
                                _this.onSave.emit();
                                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnUpdateForecast'));
                                _this.closeDialog();
                            }
                        });
                    }
                }
            });
        }
    };
    ForecastProjectHeaderDialogComponent.prototype.updateRepairCenterCode = function () {
        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isDefined(this.selectedRepairCenter)) {
            this.forecastProject.repairCenterCode = this.selectedRepairCenter.repairCenterCode;
            this.initializeWorkCenterList(this.forecastProject.repairCenterCode);
        }
        else {
            this.forecastProject.repairCenterCode = undefined;
        }
    };
    ForecastProjectHeaderDialogComponent.prototype.initializeWorkCenterList = function (siteCode) {
        var _this = this;
        this.forecastFormService.loadWorkCenterListBySite(siteCode).subscribe(function (result) {
            _this.workCenterList = result.map(function (mroCenter) {
                return {
                    label: mroCenter.label,
                    value: Number(mroCenter.value)
                };
            });
        });
    };
    ForecastProjectHeaderDialogComponent.prototype.updateWorkCenter = function () {
        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isDefined(this.selectedWorkCenter)) {
            this.forecastProject.whId = this.selectedWorkCenter;
        }
        else {
            this.forecastProject.whId = undefined;
        }
    };
    ForecastProjectHeaderDialogComponent.prototype.updateCustomerCode = function () {
        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isDefined(this.selectedCustomer)) {
            this.forecastProject.customerCode = this.selectedCustomer.customerCode;
        }
        else {
            this.forecastProject.customerCode = undefined;
        }
    };
    ForecastProjectHeaderDialogComponent.prototype.openSearchFleetDialog = function () {
        this.showSearchFleetDialog = true;
    };
    ForecastProjectHeaderDialogComponent.prototype.clearForecastProjectFleet = function () {
        this.forecastProject.customerCode = undefined;
        this.forecastProject.projectFleetCode = undefined;
        this.forecastProject.projectFleetId = undefined;
        this.forecastProject.projectFleetName = undefined;
    };
    ForecastProjectHeaderDialogComponent.prototype.openSearchAssetDialog = function () {
        this.showSearchAssetDialog = true;
    };
    ForecastProjectHeaderDialogComponent.prototype.clearForecastProjectAsset = function () {
        this.forecastProject.projectPn = undefined;
        this.forecastProject.projectSn = undefined;
        this.forecastProjectAsset = {};
    };
    ForecastProjectHeaderDialogComponent.prototype.checkForecastProject = function () {
        if (_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__["StringUtils"].isNullOrEmpty(this.forecastProject.projectName)) {
            this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelectedForecastName'));
            return false;
        }
        else if (this.forecastProject.projectStartDate &&
            this.forecastProject.projectEndDate &&
            moment__WEBPACK_IMPORTED_MODULE_1__(this.forecastProject.projectStartDate).isAfter(moment__WEBPACK_IMPORTED_MODULE_1__(this.forecastProject.projectEndDate))) {
            this.messageService.showWarningMessage(this.getTranslateKey('startDateAfterEndDate'));
            return false;
        }
        else if (this.selectedForecastCategory === _forecast_form_service__WEBPACK_IMPORTED_MODULE_14__["ForecastCategory"].ASSET &&
            !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isDefined(this.forecastProjectAsset.equipmentCode)) {
            this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelectedAsset'));
            return false;
        }
        else if (this.selectedForecastCategory === _forecast_form_service__WEBPACK_IMPORTED_MODULE_14__["ForecastCategory"].FLEET &&
            !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isDefined(this.forecastProject.projectFleetCode)) {
            this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelectedFleet'));
            return false;
        }
        else if (!_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__["ObjectUtils"].isDefined(this.selectedconversionMatrixDTO)) {
            this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelectedUnitConversionMatrix'));
            return false;
        }
        else {
            return true;
        }
    };
    ForecastProjectHeaderDialogComponent.prototype.saveForecastProject = function () {
        if (this.isCreateOpenMode || !this.forecastProjectId) {
            this.createForecastProject();
        }
        else {
            this.updateForecastProject();
        }
    };
    ForecastProjectHeaderDialogComponent.prototype.onChangeForecastCategory = function (event) {
        if (event.option.value === _forecast_form_service__WEBPACK_IMPORTED_MODULE_14__["ForecastCategory"].ASSET) {
            this.clearForecastProjectFleet();
            this.assetSelected = true;
        }
        else {
            this.clearForecastProjectAsset();
            this.assetSelected = false;
        }
        this.ucmList = [];
    };
    ForecastProjectHeaderDialogComponent.prototype.onSelectedAsset = function (asset) {
        this.forecastProject.projectPn = asset.pnCode;
        this.forecastProject.projectSn = asset.sn;
        this.forecastProjectAsset = asset;
        this.familyVariantCode = !!asset.familyVariantCode ? asset.familyVariantCode : '';
        this.getConversionMatrixForAsset();
    };
    ForecastProjectHeaderDialogComponent.prototype.onSelectedFleet = function (fleet) {
        this.forecastProject.customerCode = fleet.customerCode;
        this.forecastProject.projectFleetCode = fleet.fleetCode;
        this.forecastProject.projectFleetId = fleet.fleetId;
        this.forecastProject.projectFleetName = fleet.fleetName;
        if (!!fleet && !!fleet.fleetId) {
            this.getFleetEquipments(fleet.fleetId);
        }
    };
    // Constants getters
    ForecastProjectHeaderDialogComponent.prototype.getForecastCategoryFleet = function () {
        return _forecast_form_service__WEBPACK_IMPORTED_MODULE_14__["ForecastCategory"].FLEET;
    };
    ForecastProjectHeaderDialogComponent.prototype.getForecastCategoryAsset = function () {
        return _forecast_form_service__WEBPACK_IMPORTED_MODULE_14__["ForecastCategory"].ASSET;
    };
    ForecastProjectHeaderDialogComponent.prototype.getBidoFunctionTypeConstantsClosing = function () {
        return _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__["BidoFunctionTypeConstants"].UC_MFO_FORECAST_CLOSING;
    };
    ForecastProjectHeaderDialogComponent.prototype.reopenForecastProject = function () {
        this.forecastProject.statusState = _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__["BidoFunctionTypeConstants"].UC_MFO_FORECAST_MANAGEMENT;
        this.forecastProject.projectEndDate = undefined;
    };
    ForecastProjectHeaderDialogComponent.prototype.closeForecastProject = function () {
        this.forecastProject.statusState = _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_4__["BidoFunctionTypeConstants"].UC_MFO_FORECAST_CLOSING;
        this.forecastProject.projectEndDate = moment__WEBPACK_IMPORTED_MODULE_1__().toDate();
    };
    ForecastProjectHeaderDialogComponent.prototype.getConversionMatrixForAsset = function () {
        var _this = this;
        if (this.assetSelected || this.forecastProject.projectFleetCode) {
            this.ucmList = [];
            if (this.assetSelected && !!this.forecastProjectAsset.familyVariantCode) {
                this.familyVariantCode = this.forecastProjectAsset.familyVariantCode;
            }
            this.searchObject.familyVariant = this.familyVariantCode;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])({
                defaultConversionMatrix: this.unitConversionMatrixService.getDefaultMatrixByFamilyVariant(this.familyVariantCode),
                allUnitConversionMatrix: this.unitConversionMatrixService.searchUnitMatrixConversion(this.searchObject)
            }).subscribe({
                next: function (result) {
                    if (!!result && !!result.defaultConversionMatrix) {
                        _this.selectedconversionMatrixDTO = result.defaultConversionMatrix.cmId;
                    }
                    _this.ucmList = result.allUnitConversionMatrix.map(function (ucm) {
                        return {
                            label: "" + ucm.cmName,
                            value: !!ucm.cmId ? ucm.cmId : -1
                        };
                    });
                    if (!!_this.forecastProjectSrc.cmId) {
                        _this.getBireConversionMatrix();
                    }
                }
            });
        }
        else {
            this.ucmList = [];
            this.searchObject = {};
        }
    };
    ForecastProjectHeaderDialogComponent.prototype.getFleetEquipments = function (fleetId) {
        var _this = this;
        if (!!fleetId) {
            var fleetTemp = {
                fleetId: fleetId
            };
            this.fleetFormService.findBidoFleet(fleetTemp).subscribe(function (result) {
                _this.getConversionMatrixForFleet(result.bidoEquipmentTableDTO);
            }, function () {
                _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnLoadFleet'));
            });
        }
    };
    ForecastProjectHeaderDialogComponent.prototype.getConversionMatrixForFleet = function (equipments) {
        var _this = this;
        this.ucmList = [];
        this.searchObject = {};
        if (!!equipments && equipments.length > 0) {
            var allFamilyVariants_1 = [];
            equipments.forEach(function (equipment) {
                if (!!equipment && !!equipment.bidoEquipmentDTO && !!equipment.bidoEquipmentDTO.familyVariantCode) {
                    allFamilyVariants_1.push(equipment.bidoEquipmentDTO.familyVariantCode);
                }
            });
            var uniqueFamilyVariants = allFamilyVariants_1.filter(function (elem, i, arr) {
                if (arr.indexOf(elem) === i) {
                    return elem;
                }
            });
            uniqueFamilyVariants.forEach(function (familyVariant) {
                _this.searchObject.familyVariant = familyVariant;
                _this.unitConversionMatrixService.searchUnitMatrixConversion(_this.searchObject).subscribe(function (result) {
                    var _a;
                    if (!!result) {
                        var ucList = result.map(function (ucm) {
                            return {
                                label: "" + ucm.cmName,
                                value: !!ucm.cmId ? ucm.cmId : -1
                            };
                        });
                        if (!!_this.ucmList) {
                            (_a = _this.ucmList).push.apply(_a, __spread(ucList));
                        }
                    }
                });
            });
            if (!!this.forecastProjectSrc.cmId) {
                this.getBireConversionMatrix();
            }
        }
    };
    ForecastProjectHeaderDialogComponent.prototype.getBireConversionMatrix = function () {
        var _this = this;
        if (!!this.forecastProjectSrc.cmId) {
            this.unitConversionMatrixService.getUnitConversionMatrix(this.forecastProjectSrc.cmId).subscribe(function (result) {
                _this.selectedconversionMatrixDTO = result.cmId;
            });
        }
    };
    ForecastProjectHeaderDialogComponent.prototype.onChangeConversionMatrix = function () {
        if (!!this.selectedconversionMatrixDTO) {
            this.forecastProject.cmId = this.selectedconversionMatrixDTO;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ForecastProjectHeaderDialogComponent.prototype, "forecastProject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ForecastProjectHeaderDialogComponent.prototype, "forecastProjectSrc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ForecastProjectHeaderDialogComponent.prototype, "forecastProjectAsset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ForecastProjectHeaderDialogComponent.prototype, "selectedForecastCategory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ForecastProjectHeaderDialogComponent.prototype, "forecastProjectId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ForecastProjectHeaderDialogComponent.prototype, "forecastProjectLlpEventsGeneration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ForecastProjectHeaderDialogComponent.prototype, "forecastProjectOccurrenceNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ForecastProjectHeaderDialogComponent.prototype, "selectedRepairCenter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ForecastProjectHeaderDialogComponent.prototype, "selectedWorkCenter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ForecastProjectHeaderDialogComponent.prototype, "selectedCustomer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ForecastProjectHeaderDialogComponent.prototype, "showSearchFleetDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ForecastProjectHeaderDialogComponent.prototype, "showSearchAssetDialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ForecastProjectHeaderDialogComponent.prototype, "customerList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ForecastProjectHeaderDialogComponent.prototype, "repairCenterList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ForecastProjectHeaderDialogComponent.prototype, "forecastCategoryList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ForecastProjectHeaderDialogComponent.prototype, "occurrenceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ForecastProjectHeaderDialogComponent.prototype, "onSave", void 0);
    ForecastProjectHeaderDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-forecast-form-project-header',
            template: __webpack_require__(/*! ./forecast-project-header-dialog.component.html */ "./src/app/main/maintenance/forecast/form/forecast-project-header-dialog/forecast-project-header-dialog.component.html")
        }),
        __metadata("design:paramtypes", [_forecast_form_service__WEBPACK_IMPORTED_MODULE_14__["ForecastFormService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
            _engineering_management_unit_conversion_matrix_unit_conversion_matrix_service__WEBPACK_IMPORTED_MODULE_12__["UnitConversionMatrixService"],
            _fleet_management_fleet_form_fleet_form_service__WEBPACK_IMPORTED_MODULE_13__["FleetFormService"]])
    ], ForecastProjectHeaderDialogComponent);
    return ForecastProjectHeaderDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/planned-date-dialog/planned-date-dialog.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/planned-date-dialog/planned-date-dialog.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"plannedDate\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-calendar\r\n              showButtonBar=\"true\"\r\n              [monthNavigator]=\"true\"\r\n              [yearNavigator]=\"true\"\r\n              [yearRange]=\"sessionService.calendarYearRange\"\r\n              class=\"aw-calendar\"\r\n              appendTo=\"body\"\r\n              [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n              [locale]=\"sessionService.calendarFormat\"\r\n              [showTime]=\"true\"\r\n              [(ngModel)]=\"plannedDate\"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"cancel\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" color=\"primary\" mat-raised-button [disabled]=\"!plannedDate\" (click)=\"validate()\">\r\n      {{ \"validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/planned-date-dialog/planned-date-dialog.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/planned-date-dialog/planned-date-dialog.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PlannedDateForecastFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlannedDateForecastFormDialogComponent", function() { return PlannedDateForecastFormDialogComponent; });
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




var PlannedDateForecastFormDialogComponent = /** @class */ (function (_super) {
    __extends(PlannedDateForecastFormDialogComponent, _super);
    function PlannedDateForecastFormDialogComponent(sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'PlannedDateForecastFormDialogComponent') || this;
        _this.sessionService = sessionService;
        _this.init();
        return _this;
    }
    PlannedDateForecastFormDialogComponent.prototype.validate = function () {
        this.onSelected.emit(this.plannedDate);
        this.closeDialog();
    };
    PlannedDateForecastFormDialogComponent.prototype.init = function () {
        this.plannedDate = undefined;
        this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PlannedDateForecastFormDialogComponent.prototype, "onSelected", void 0);
    PlannedDateForecastFormDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-forecast-form-planned-date',
            template: __webpack_require__(/*! ./planned-date-dialog.component.html */ "./src/app/main/maintenance/forecast/form/planned-date-dialog/planned-date-dialog.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], PlannedDateForecastFormDialogComponent);
    return PlannedDateForecastFormDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/resources-availabilities/resources-availabilities.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/resources-availabilities/resources-availabilities.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"50\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <p-table\r\n      [resizableColumns]=\"true\"\r\n      #ptableAssets\r\n      class=\"aw-table2\"\r\n      [columns]=\"resourcesTableColList\"\r\n      [value]=\"resourcesTable\"\r\n      [(selection)]=\"resourcesTableSelection\"\r\n      [scrollable]=\"true\"\r\n    >\r\n      <ng-template pTemplate=\"caption\">\r\n        <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': resourcesTableSelection.length > 0 }\">\r\n          <div class=\"aw-table-global-filter\">\r\n            <label class=\"aw-table-global-filter-label\">\r\n              <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n            </label>\r\n\r\n            <input\r\n              class=\"aw-table-global-filter-input\"\r\n              type=\"text\"\r\n              placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n              (input)=\"ptableAssets.filterGlobal($event.target.value, 'contains')\"\r\n            />\r\n          </div>\r\n\r\n          <div class=\"aw-table-actions\">\r\n            <button\r\n              type=\"button\"\r\n              mat-raised-button\r\n              (click)=\"synchronizeData()\"\r\n              title=\"{{ getComponentName() + '.synchronizeDataTooltip' | translate }}\"\r\n            >\r\n              {{ getComponentName() + \".synchronizeData\" | translate }}\r\n            </button>\r\n            <button\r\n              type=\"button\"\r\n              *ngIf=\"resourcesTableSelection.length > 0\"\r\n              mat-raised-button\r\n              color=\"warn\"\r\n              (click)=\"deleteSelectedRows()\"\r\n            >\r\n              {{ \"global.delete\" | translate }}\r\n            </button>\r\n            <button\r\n              type=\"button\"\r\n              *ngIf=\"resourcesTableSelection.length === 0\"\r\n              mat-raised-button\r\n              (click)=\"addAvailabilities()\"\r\n            >\r\n              {{ \"global.add\" | translate }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"colgroup\" let-columns>\r\n        <colgroup>\r\n          <col class=\"aw-table-checkbox-wrapper\" />\r\n          <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th class=\"aw-table-checkbox-wrapper\">\r\n            <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n          </th>\r\n          <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n            <span *ngIf=\"col.field !== 'number'\">\r\n              {{ getComponentName() + \".\" + col.field | translate }}\r\n            </span>\r\n            <span *ngIf=\"col.field === 'number'\">\r\n              #\r\n            </span>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n        <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n          <td class=\"aw-table-checkbox-wrapper\">\r\n            <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n          </td>\r\n          <td\r\n            *ngFor=\"let col of columns\"\r\n            pEditableColumn\r\n            [ngSwitch]=\"col.field\"\r\n            [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n          >\r\n            <span *ngSwitchCase=\"'availabilityStartDate'\">\r\n              <p-cellEditor>\r\n                <ng-template pTemplate=\"input\">\r\n                  <p-calendar\r\n                    showButtonBar=\"true\"\r\n                    [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\"\r\n                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                    class=\"aw-calendar\"\r\n                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                    [locale]=\"sessionService.calendarFormat\"\r\n                    [(ngModel)]=\"rowData[col.field]\"\r\n                    appendTo=\"body\"\r\n                  ></p-calendar>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"output\">\r\n                  <p-calendar\r\n                    showButtonBar=\"true\"\r\n                    [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\"\r\n                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                    class=\"aw-calendar\"\r\n                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                    [locale]=\"sessionService.calendarFormat\"\r\n                    [(ngModel)]=\"rowData[col.field]\"\r\n                    appendTo=\"body\"\r\n                    disabled\r\n                  ></p-calendar>\r\n                </ng-template>\r\n              </p-cellEditor>\r\n            </span>\r\n            <span *ngSwitchCase=\"'availabilityEndDate'\">\r\n              <p-cellEditor>\r\n                <ng-template pTemplate=\"input\">\r\n                  <p-calendar\r\n                    showButtonBar=\"true\"\r\n                    [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\"\r\n                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                    class=\"aw-calendar\"\r\n                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                    [locale]=\"sessionService.calendarFormat\"\r\n                    [(ngModel)]=\"rowData[col.field]\"\r\n                    appendTo=\"body\"\r\n                    disabled\r\n                  ></p-calendar>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"output\">\r\n                  <p-calendar\r\n                    showButtonBar=\"true\"\r\n                    [monthNavigator]=\"true\"\r\n                    [yearNavigator]=\"true\"\r\n                    [yearRange]=\"sessionService.calendarYearRange\"\r\n                    class=\"aw-calendar\"\r\n                    [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                    [locale]=\"sessionService.calendarFormat\"\r\n                    [(ngModel)]=\"rowData[col.field]\"\r\n                    appendTo=\"body\"\r\n                    disabled\r\n                  ></p-calendar>\r\n                </ng-template>\r\n              </p-cellEditor>\r\n            </span>\r\n            <span *ngSwitchCase=\"'availabilityCode'\">\r\n              <p-cellEditor>\r\n                <ng-template pTemplate=\"input\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [options]=\"qualificationList\"\r\n                    [(ngModel)]=\"rowData[col.field]\"\r\n                    placeholder=\"&nbsp;\"\r\n                    [style]=\"{ width: '100%' }\"\r\n                    appendTo=\"body\"\r\n                  ></p-dropdown>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"output\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [options]=\"qualificationList\"\r\n                    [(ngModel)]=\"rowData[col.field]\"\r\n                    [disabled]=\"true\"\r\n                    placeholder=\"&nbsp;\"\r\n                  ></p-dropdown>\r\n                </ng-template>\r\n              </p-cellEditor>\r\n            </span>\r\n            <span *ngSwitchCase=\"'availabilityPerWeek'\">\r\n              <p-cellEditor>\r\n                <ng-template pTemplate=\"input\">\r\n                  <input pInputText type=\"text\" [(ngModel)]=\"rowData[col.field]\" required />\r\n                </ng-template>\r\n                <ng-template pTemplate=\"output\">\r\n                  {{ rowData[col.field] }}\r\n                </ng-template>\r\n              </p-cellEditor>\r\n            </span>\r\n            <span *ngSwitchCase=\"'availabilityPerWeekEnd'\">\r\n              <p-cellEditor>\r\n                <ng-template pTemplate=\"input\">\r\n                  <input pInputText type=\"text\" [(ngModel)]=\"rowData[col.field]\" required />\r\n                </ng-template>\r\n                <ng-template pTemplate=\"output\">\r\n                  {{ rowData[col.field] }}\r\n                </ng-template>\r\n              </p-cellEditor>\r\n            </span>\r\n            <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"cancel\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn-with-spinner\" color=\"primary\" mat-raised-button (click)=\"validate()\">\r\n      <span class=\"lds-hourglass\" *ngIf=\"saveSpinner\"></span>\r\n      {{ \"validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/resources-availabilities/resources-availabilities.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/resources-availabilities/resources-availabilities.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ResourcesAvailabilitiesForecastFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesAvailabilitiesForecastFormDialogComponent", function() { return ResourcesAvailabilitiesForecastFormDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators/finalize */ "./node_modules/rxjs/internal/operators/finalize.js");
/* harmony import */ var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _forecast_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../forecast-form.service */ "./src/app/main/maintenance/forecast/form/forecast-form.service.ts");
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









var ResourcesAvailabilitiesForecastFormDialogComponent = /** @class */ (function (_super) {
    __extends(ResourcesAvailabilitiesForecastFormDialogComponent, _super);
    function ResourcesAvailabilitiesForecastFormDialogComponent(messageService, sessionService, confirmationService, forcastFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, 'ResourcesAvailabilitiesForecastFormDialogComponent') || this;
        _this.messageService = messageService;
        _this.sessionService = sessionService;
        _this.confirmationService = confirmationService;
        _this.forcastFormService = forcastFormService;
        return _this;
    }
    ResourcesAvailabilitiesForecastFormDialogComponent_1 = ResourcesAvailabilitiesForecastFormDialogComponent;
    ResourcesAvailabilitiesForecastFormDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resourcesTableColList = [
            { field: 'number', alignment: 'center', width: '5%' },
            { field: 'availabilityStartDate', alignment: 'left', width: '20%' },
            { field: 'availabilityEndDate', alignment: 'left', width: '20%' },
            { field: 'availabilityCode', alignment: 'left', width: '25%' },
            { field: 'availabilityPerWeek', alignment: 'left', width: '15%' },
            { field: 'availabilityPerWeekEnd', alignment: 'left', width: '15%' }
        ];
        this.resourcesTableSelection = [];
        this.forcastFormService.findAllBireQualificationDatasDropDown().subscribe(function (res) {
            _this.qualificationList = res;
        });
        this.loadAvailabilityData();
    };
    /************************************
     * Load Dialog data
     ************************************/
    ResourcesAvailabilitiesForecastFormDialogComponent.prototype.loadAvailabilityData = function () {
        var _this = this;
        this.resourcesTable = [];
        var input = {
            projectId: this.projectId,
            availabilityType: ResourcesAvailabilitiesForecastFormDialogComponent_1.AVAILABILITY_TYPE
        };
        this.forcastFormService
            .findBsdeAvailabilitysByProjectAndAvailabilityTypeAndAvailabilityCode(input)
            .subscribe(function (res) {
            res.forEach(function (row) {
                var availabilityEndDates = _this.getAvailabilityEndDate(res, row);
                _this.resourcesTable.push({
                    availabilityCode: row.availabilityCode,
                    availabilityId: row.availabilityId,
                    availabilityPerWeek: row.availabilityPerWeek,
                    availabilityPerWeekEnd: row.availabilityPerWeekEnd,
                    availabilityStartDate: row.availabilityStartDate,
                    availabilityType: row.availabilityType,
                    projectId: row.projectId,
                    isUnavailable: row.isUnavailable,
                    availabilityEndDate: availabilityEndDates
                });
            });
            _this.resetTableCounter();
        });
    };
    /**
     * getAvailabilityEndDate() - This function is used to calculate the Availabilty End Date field.
     * @param results - Availability Data List
     * @param rowData - Availability Data Row
     */
    ResourcesAvailabilitiesForecastFormDialogComponent.prototype.getAvailabilityEndDate = function (results, rowData) {
        var nextDateFound;
        if (!!rowData.availabilityStartDate) {
            results.forEach(function (elements) {
                if (rowData.availabilityCode === elements.availabilityCode &&
                    elements.availabilityStartDate &&
                    rowData.availabilityStartDate &&
                    elements.availabilityStartDate > rowData.availabilityStartDate) {
                    if (!nextDateFound || (!!nextDateFound && elements.availabilityStartDate < nextDateFound)) {
                        nextDateFound = elements.availabilityStartDate;
                    }
                }
            });
        }
        if (!!nextDateFound) {
            var nextStartDate = new Date(nextDateFound);
            nextStartDate.setDate(nextStartDate.getDate() - 1);
            return nextStartDate;
        }
    };
    /************************************
     * Add Entry
     ************************************/
    ResourcesAvailabilitiesForecastFormDialogComponent.prototype.addAvailabilities = function () {
        this.resourcesTable.push({
            number: this.resourcesTable.length === 0 ? 1 : this.resourcesTable.length + 1,
            availabilityPerWeek: 0,
            availabilityPerWeekEnd: 0,
            availabilityType: ResourcesAvailabilitiesForecastFormDialogComponent_1.AVAILABILITY_TYPE,
            projectId: this.projectId.toString()
        });
    };
    // Sort acc to date
    ResourcesAvailabilitiesForecastFormDialogComponent.prototype.dateSelectionEvent = function () {
        this.resourcesTable = this.resourcesTable.sort(function (a, b) {
            if (!!b.availabilityStartDate && !!a.availabilityStartDate) {
                return a.availabilityStartDate.getTime() - b.availabilityStartDate.getTime();
            }
            return -1;
        });
        this.resetTableCounter();
    };
    /************************************
     * Validate Dialog and Save
     ************************************/
    ResourcesAvailabilitiesForecastFormDialogComponent.prototype.validate = function () {
        var _this = this;
        if (this.validateTable()) {
            this.saveSpinner = true;
            this.dateSelectionEvent();
            this.forcastFormService
                .createOrUpdateBsdeAvailability(this.resourcesTable)
                .pipe(Object(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
                _this.saveSpinner = false;
            }))
                .subscribe(function (res) {
                _this.loadAvailabilityData();
                _this.messageService.showSuccessMessage(_this.getTranslateKey('onSaveSuccess'));
            });
        }
    };
    /************************************
     * Table Validation
     ************************************/
    ResourcesAvailabilitiesForecastFormDialogComponent.prototype.validateTable = function () {
        var _this = this;
        var WORKING_DAY_HOUR_LIMIT = 23;
        var validation = true;
        this.resourcesTable.forEach(function (res) {
            if (res.availabilityPerWeek === null || res.availabilityPerWeekEnd === null) {
                _this.messageService.showErrorMessage(_this.getTranslateKey('weekMandatoryFields'));
                validation = false;
            }
            if ((!!res.availabilityPerWeek && res.availabilityPerWeek > WORKING_DAY_HOUR_LIMIT) ||
                (!!res.availabilityPerWeekEnd && res.availabilityPerWeekEnd > WORKING_DAY_HOUR_LIMIT)) {
                _this.messageService.showErrorMessage(_this.getTranslateKey('valueCannotBeGreaterThanWorkingDayHourLimit'));
                validation = false;
            }
            if (!res.availabilityStartDate) {
                _this.messageService.showErrorMessage(_this.getTranslateKey('startDateMandatory'));
                validation = false;
            }
            if (!res.availabilityCode) {
                _this.messageService.showErrorMessage(_this.getTranslateKey('qualificationMandatory'));
                validation = false;
            }
        });
        return validation;
    };
    /************************************
     * Delete Rows
     ************************************/
    ResourcesAvailabilitiesForecastFormDialogComponent.prototype.deleteSelectedRows = function () {
        var _this = this;
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey('confirmDeleteSelectedAvailabilities'),
            accept: function () {
                var id = [];
                var cloneTable = __spread(_this.resourcesTable);
                _this.resourcesTableSelection.forEach(function (res) {
                    if (!!res) {
                        if (!!res.availabilityId) {
                            id.push({
                                availabilityId: res.availabilityId
                            });
                        }
                        cloneTable.splice(res.number - 1, 1);
                    }
                });
                _this.forcastFormService.removeBsdeAvailability(id).subscribe(function (res) {
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('onDeleteSuccess'));
                    _this.loadAvailabilityData();
                    _this.resourcesTableSelection = [];
                });
            }
        });
    };
    /************************************
     * Reset Table Counter
     ************************************/
    ResourcesAvailabilitiesForecastFormDialogComponent.prototype.resetTableCounter = function () {
        this.resourcesTable.forEach(function (res, index) {
            res.number = index + 1;
        });
    };
    ResourcesAvailabilitiesForecastFormDialogComponent.prototype.synchronizeData = function () {
        var _this = this;
        this.forcastFormService.synchronizeWithHR(this.projectNumber).subscribe(function (res) {
            _this.resourcesTable = res;
        });
    };
    var ResourcesAvailabilitiesForecastFormDialogComponent_1;
    ResourcesAvailabilitiesForecastFormDialogComponent.AVAILABILITY_TYPE = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__["AWPropertiesConstants"].AVAILABILITY_TYPE_FLIGHT;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ResourcesAvailabilitiesForecastFormDialogComponent.prototype, "projectId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ResourcesAvailabilitiesForecastFormDialogComponent.prototype, "projectNumber", void 0);
    ResourcesAvailabilitiesForecastFormDialogComponent = ResourcesAvailabilitiesForecastFormDialogComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-forecast-form-resources-availabilities',
            template: __webpack_require__(/*! ./resources-availabilities.component.html */ "./src/app/main/maintenance/forecast/form/resources-availabilities/resources-availabilities.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            _forecast_form_service__WEBPACK_IMPORTED_MODULE_8__["ForecastFormService"]])
    ], ResourcesAvailabilitiesForecastFormDialogComponent);
    return ResourcesAvailabilitiesForecastFormDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/scheduled-event-dialog/scheduled-event-dialog.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/scheduled-event-dialog/scheduled-event-dialog.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"50\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ componentTitleKey | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">\r\n            {{ \"plannedDate\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-calendar\r\n              showButtonBar=\"true\"\r\n              [monthNavigator]=\"true\"\r\n              [yearNavigator]=\"true\"\r\n              [yearRange]=\"sessionService.calendarYearRange\"\r\n              class=\"aw-calendar\"\r\n              appendTo=\"body\"\r\n              [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n              [locale]=\"sessionService.calendarFormat\"\r\n              [showTime]=\"true\"\r\n              [(ngModel)]=\"plannedDate\"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\"></div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"taskCode\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"aw-input\"\r\n              [(ngModel)]=\"eventModel._obj.bsdeScheduledEvent.taskCode\"\r\n              [disabled]=\"true\"\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"blocked\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-checkbox\r\n              binary=\"true\"\r\n              class=\"aw-checkbox\"\r\n              [(ngModel)]=\"eventModel._obj.bsdeScheduledEvent.eventBlocked\"\r\n              [disabled]=\"true\"\r\n            ></p-checkbox>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"taskDescription\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control text-area\">\r\n            <textarea\r\n              class=\"aw-textarea\"\r\n              [rows]=\"3\"\r\n              pInputTextarea\r\n              autoResize=\"autoResize\"\r\n              [(ngModel)]=\"eventModel._obj.bireTask.taskDesignation\"\r\n              [disabled]=\"true\"\r\n            ></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"notToExceedDate\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-calendar\r\n              showButtonBar=\"true\"\r\n              [monthNavigator]=\"true\"\r\n              [yearNavigator]=\"true\"\r\n              [yearRange]=\"sessionService.calendarYearRange\"\r\n              class=\"aw-calendar\"\r\n              appendTo=\"body\"\r\n              [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n              [locale]=\"sessionService.calendarFormat\"\r\n              [showTime]=\"true\"\r\n              [(ngModel)]=\"eventModel._obj.bsdeScheduledEvent.nteDate\"\r\n              [disabled]=\"true\"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\"> {{ \"toBePerformedAt\" | translate }} ({{ unitName }}) </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"aw-input\"\r\n              [(ngModel)]=\"eventModel._obj.bsdeScheduledEvent.counterValue\"\r\n              [disabled]=\"true\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"periodicities\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"aw-input\"\r\n              [(ngModel)]=\"eventModel._obj.bsdeScheduledEvent.periodicities\"\r\n              [disabled]=\"true\"\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\"> {{ \"cumulatedFlightHours\" | translate }} (H) </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"aw-input\"\r\n              [(ngModel)]=\"eventModel._obj.bsdeScheduledEvent.topEqtTsn\"\r\n              [disabled]=\"true\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"occurrence\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"aw-input\"\r\n              [(ngModel)]=\"eventModel._obj.bsdeScheduledEvent.occurrence\"\r\n              [disabled]=\"true\"\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\"> {{ \"remainingAvailability\" | translate }} ({{ unitName }}) </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"aw-input\"\r\n              [(ngModel)]=\"eventModel._obj.bsdeScheduledEvent.counterRemaining\"\r\n              [disabled]=\"true\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\"> {{ \"alertThreshold\" | translate }} </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"aw-input\"\r\n              [(ngModel)]=\"eventModel._obj.bsdeScheduledEvent.taskThreshold\"\r\n              [disabled]=\"true\"\r\n            />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\"> {{ \"alertTolerance\" | translate }} </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"aw-input\"\r\n              [(ngModel)]=\"eventModel._obj.bsdeScheduledEvent.taskTolerance\"\r\n              [disabled]=\"true\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"cancel\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" color=\"primary\" mat-raised-button [disabled]=\"!plannedDate\" (click)=\"validate()\">\r\n      {{ \"validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/scheduled-event-dialog/scheduled-event-dialog.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/scheduled-event-dialog/scheduled-event-dialog.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ScheduledEventForecastFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduledEventForecastFormDialogComponent", function() { return ScheduledEventForecastFormDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _forecast_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forecast-form.service */ "./src/app/main/maintenance/forecast/form/forecast-form.service.ts");
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







var ScheduledEventForecastFormDialogComponent = /** @class */ (function (_super) {
    __extends(ScheduledEventForecastFormDialogComponent, _super);
    function ScheduledEventForecastFormDialogComponent(sessionService, forecastFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, 'ScheduledEventForecastFormDialogComponent') || this;
        _this.sessionService = sessionService;
        _this.forecastFormService = forecastFormService;
        _this.init();
        return _this;
    }
    ScheduledEventForecastFormDialogComponent.prototype.ngOnInit = function () {
        this.componentTitleKey = this.forecastFormService.getUpcomingEventKey(this.eventModel);
        this.plannedDate = this.eventModel._obj.bsdeScheduledEvent.plannedDate || this.eventModel.startDate;
        this.loadUnitName();
    };
    ScheduledEventForecastFormDialogComponent.prototype.validate = function () {
        this.forecastFormService.updateScheduledEventPlannedDate({
            event: this.eventModel,
            plannedDate: this.plannedDate
        });
        this.closeDialog();
    };
    ScheduledEventForecastFormDialogComponent.prototype.init = function () {
        this.plannedDate = undefined;
        this.unitName = '';
    };
    ScheduledEventForecastFormDialogComponent.prototype.loadUnitName = function () {
        var _this = this;
        if (this.eventModel._obj.bsdeScheduledEvent.counterCode) {
            this.forecastFormService
                .getBireMeasureReference({ counterCode: this.eventModel._obj.bsdeScheduledEvent.counterCode })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (measureReference) {
                return measureReference
                    ? _this.forecastFormService.getBireUnitMeasure({ unitCode: measureReference.unitCode }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (unitMeasure) {
                        return (measureReference.unitCode +
                            (unitMeasure && unitMeasure.unitName ? " - " + unitMeasure.unitName : ''));
                    }))
                    : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('');
            }))
                .subscribe(function (unitName) {
                _this.unitName = unitName;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScheduledEventForecastFormDialogComponent.prototype, "eventModel", void 0);
    ScheduledEventForecastFormDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-forecast-form-scheduled-event',
            template: __webpack_require__(/*! ./scheduled-event-dialog.component.html */ "./src/app/main/maintenance/forecast/form/scheduled-event-dialog/scheduled-event-dialog.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"], _forecast_form_service__WEBPACK_IMPORTED_MODULE_6__["ForecastFormService"]])
    ], ScheduledEventForecastFormDialogComponent);
    return ScheduledEventForecastFormDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/unscheduled-event-dialog/unscheduled-event-dialog.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/unscheduled-event-dialog/unscheduled-event-dialog.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"30\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">\r\n            {{ \"plannedDate\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-calendar\r\n              showButtonBar=\"true\"\r\n              [monthNavigator]=\"true\"\r\n              [yearNavigator]=\"true\"\r\n              [yearRange]=\"sessionService.calendarYearRange\"\r\n              class=\"aw-calendar\"\r\n              appendTo=\"body\"\r\n              [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n              [locale]=\"sessionService.calendarFormat\"\r\n              [showTime]=\"true\"\r\n              [(ngModel)]=\"event.plannedDate\"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"familyVariant\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              [options]=\"familyVariantList\"\r\n              [(ngModel)]=\"selectedFamilyVariant\"\r\n              [showClear]=\"true\"\r\n              placeholder=\"&nbsp;\"\r\n              appendTo=\"body\"\r\n              [disabled]=\"true\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group display--flex-row flex-row--align-center\">\r\n          <label class=\"form-label\">\r\n            {{ \"eventType\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control aw-selectbutton-wrapper\">\r\n            <p-selectButton [(ngModel)]=\"selectedEventType\" [options]=\"eventTypeList\"></p-selectButton>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"selectedEventType === eventType.EVOLUTION\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">\r\n            {{ \"evolutionNumber\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control form-control-with-modal\">\r\n            <div class=\"form-control-data\" (click)=\"openEvolutionDialog()\">\r\n              {{ event.evolutionNumber }}\r\n            </div>\r\n\r\n            <div *ngIf=\"event.evolutionNumber\" class=\"btn-clear-wrapper\">\r\n              <i\r\n                class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                aria-hidden=\"true\"\r\n                (click)=\"clearEvolution()\"\r\n              ></i>\r\n            </div>\r\n\r\n            <div class=\"btn-search-wrapper\">\r\n              <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\" (click)=\"openEvolutionDialog()\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"selectedEventType === eventType.EVOLUTION\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">\r\n            {{ \"evolutionRevisionNumber\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"event.evolutionRevisionNumber\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"selectedEventType === eventType.EVOLUTION && event.evolutionNumber\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"evolutionType\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input type=\"text\" class=\"aw-input\" [disabled]=\"true\" [(ngModel)]=\"event.evolutionType\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"selectedEventType === eventType.TASK\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"taskCode\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control form-control-with-modal\">\r\n            <div class=\"form-control-data\" (click)=\"openTaskDialog()\">\r\n              {{ event.taskCode }}\r\n            </div>\r\n\r\n            <div *ngIf=\"event.taskCode\" class=\"btn-clear-wrapper\">\r\n              <i\r\n                class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                aria-hidden=\"true\"\r\n                (click)=\"clearTask()\"\r\n              ></i>\r\n            </div>\r\n\r\n            <div class=\"btn-search-wrapper\">\r\n              <i class=\"fa fa-fw fa-search aw-icon btn-search\" aria-hidden=\"true\" (click)=\"openTaskDialog()\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"selectedEventType === eventType.TASK\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"taskVersion\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"event.taskVersion\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"cancel\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      type=\"button\"\r\n      mat-raised-button\r\n      (click)=\"save()\"\r\n      [disabled]=\"\r\n        !event.plannedDate ||\r\n        (selectedEventType === eventType.EVOLUTION && (!event.evolutionNumber || !event.evolutionRevisionNumber))\r\n      \"\r\n    >\r\n      {{ \"save\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n\r\n<aw-dialog-search-evolution\r\n  *ngIf=\"showEvolutionDialog\"\r\n  [(display)]=\"showEvolutionDialog\"\r\n  (onSelected)=\"onSelectedEvolution($event)\"\r\n></aw-dialog-search-evolution>\r\n\r\n<aw-dialog-search-task\r\n  *ngIf=\"showTaskDialog\"\r\n  [(display)]=\"showTaskDialog\"\r\n  (onSelected)=\"onSelectedTask($event)\"\r\n></aw-dialog-search-task>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/unscheduled-event-dialog/unscheduled-event-dialog.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/unscheduled-event-dialog/unscheduled-event-dialog.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: UnscheduledEventForecastFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnscheduledEventForecastFormDialogComponent", function() { return UnscheduledEventForecastFormDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/utils/bido-family-variant-utils */ "./src/app/shared/utils/bido-family-variant-utils.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _forecast_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../forecast-form.service */ "./src/app/main/maintenance/forecast/form/forecast-form.service.ts");
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









var EventType;
(function (EventType) {
    EventType[EventType["EVOLUTION"] = 0] = "EVOLUTION";
    EventType[EventType["TASK"] = 1] = "TASK";
})(EventType || (EventType = {}));
var UnscheduledEventForecastFormDialogComponent = /** @class */ (function (_super) {
    __extends(UnscheduledEventForecastFormDialogComponent, _super);
    function UnscheduledEventForecastFormDialogComponent(sessionService, forecastFormService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'UnscheduledEventForecastFormDialogComponent') || this;
        _this.sessionService = sessionService;
        _this.forecastFormService = forecastFormService;
        _this.translateService = translateService;
        _this.eventType = EventType;
        _this.init();
        _this.setEventTypeList();
        return _this;
    }
    UnscheduledEventForecastFormDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.forecastFormService.getAllFamilyVariantByUcMfoNonRoutineEvent().subscribe({
            next: function (familyVariantList) {
                _this.familyVariantList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_6__["ListUtils"].orEmpty(familyVariantList);
                if (_this.eventModel) {
                    _this.event = _this.eventModel._obj.bsdeEvent;
                    var matchingFamilyVariant = _this.familyVariantList.find(function (familyVariant) {
                        return familyVariant.value.familyCode ===
                            _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_5__["BidoFamilyVariantUtils"].getFamilyCodeFromFamilyVariantCode(_this.asset.familyVariantCode) &&
                            familyVariant.value.variantCode ===
                                _shared_utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_5__["BidoFamilyVariantUtils"].getVariantCodeFromFamilyVariantCode(_this.asset.familyVariantCode);
                    });
                    _this.selectedFamilyVariant = matchingFamilyVariant ? matchingFamilyVariant.value : undefined;
                    _this.selectedEventType = _this.event.taskCode ? EventType.TASK : EventType.EVOLUTION;
                }
            }
        });
    };
    UnscheduledEventForecastFormDialogComponent.prototype.clearEvolution = function () {
        this.event.evolutionNumber = undefined;
        this.event.evolutionRevisionNumber = undefined;
    };
    UnscheduledEventForecastFormDialogComponent.prototype.clearTask = function () {
        this.event.taskCode = undefined;
        this.event.taskVersion = undefined;
    };
    UnscheduledEventForecastFormDialogComponent.prototype.onSelectedEvolution = function (evolution) {
        this.event.evolutionNumber = evolution.evolutionNumber;
        this.event.evolutionRevisionNumber = evolution.evolutionRevisionNumber;
        this.event.evolutionType = evolution.evolutionType;
    };
    UnscheduledEventForecastFormDialogComponent.prototype.onSelectedTask = function (task) {
        this.event.taskCode = task.taskCode;
        this.event.taskVersion = task.taskVersion;
    };
    UnscheduledEventForecastFormDialogComponent.prototype.openEvolutionDialog = function () {
        this.showEvolutionDialog = true;
    };
    UnscheduledEventForecastFormDialogComponent.prototype.openTaskDialog = function () {
        this.showTaskDialog = true;
    };
    UnscheduledEventForecastFormDialogComponent.prototype.save = function () {
        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].isDefined(this.asset)) {
            this.event.pn = this.asset.pnCode;
            this.event.sn = this.asset.sn;
        }
        if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_7__["ObjectUtils"].isDefined(this.selectedFamilyVariant)) {
            var familyVariant = this.selectedFamilyVariant;
            this.event.familyCode = familyVariant.familyCode;
            this.event.variantCode = familyVariant.variantCode;
        }
        if (this.selectedEventType === EventType.EVOLUTION) {
            this.clearTask();
        }
        else {
            this.clearEvolution();
        }
        if (this.eventModel) {
            this.forecastFormService.updateUnscheduledEvent({ event: this.eventModel });
        }
        else {
            this.forecastFormService.createUnscheduledEvent({ event: this.event });
        }
    };
    UnscheduledEventForecastFormDialogComponent.prototype.init = function () {
        this.event = {};
        this.eventTypeList = [];
        this.familyVariantList = [];
        this.selectedEventType = EventType.TASK;
        this.selectedFamilyVariant = undefined;
        this.showEvolutionDialog = false;
        this.showTaskDialog = false;
    };
    UnscheduledEventForecastFormDialogComponent.prototype.setEventTypeList = function () {
        var _this = this;
        var evolutionKey = 'evolution';
        var taskKey = 'task';
        this.translateService.get([evolutionKey, taskKey]).subscribe(function (results) {
            var evolutionLabel = !!results ? results[evolutionKey] : 'Evolution';
            var taskLabel = !!results ? results[taskKey] : 'Task';
            _this.eventTypeList = [
                { label: taskLabel, value: EventType.TASK },
                { label: evolutionLabel, value: EventType.EVOLUTION }
            ];
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UnscheduledEventForecastFormDialogComponent.prototype, "asset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UnscheduledEventForecastFormDialogComponent.prototype, "eventModel", void 0);
    UnscheduledEventForecastFormDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-forecast-form-unscheduled-event',
            template: __webpack_require__(/*! ./unscheduled-event-dialog.component.html */ "./src/app/main/maintenance/forecast/form/unscheduled-event-dialog/unscheduled-event-dialog.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _forecast_form_service__WEBPACK_IMPORTED_MODULE_8__["ForecastFormService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], UnscheduledEventForecastFormDialogComponent);
    return UnscheduledEventForecastFormDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/work-package-dialog/work-package-dialog.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/work-package-dialog/work-package-dialog.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"40\">\r\n  <a-header>\r\n    <div class=\"modal-title\">\r\n      {{ getComponentName() + \".title\" | translate }}\r\n      {{ workPackage.projectNumber }}\r\n      <ng-container *ngIf=\"!isCreateOpenMode\">\r\n        ({{ workOrderList.length }} {{ (workOrderList.length > 1 ? \"workOrders\" : \"workOrder\") | translate }})\r\n      </ng-container>\r\n    </div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"column\">\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"name\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"workPackage.projectName\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"type\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              [options]=\"workPackageTypeList\"\r\n              [(ngModel)]=\"workPackage.projectType\"\r\n              [showClear]=\"true\"\r\n              placeholder=\"&nbsp;\"\r\n              appendTo=\"body\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"startDate\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-calendar\r\n              showButtonBar=\"true\"\r\n              [monthNavigator]=\"true\"\r\n              [yearNavigator]=\"true\"\r\n              [yearRange]=\"sessionService.calendarYearRange\"\r\n              class=\"aw-calendar\"\r\n              appendTo=\"body\"\r\n              [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n              [locale]=\"sessionService.calendarFormat\"\r\n              [showTime]=\"true\"\r\n              [(ngModel)]=\"workPackage.projectStartDate\"\r\n              [maxDate]=\"workPackage.projectDueDate\"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"dueDate\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-calendar\r\n              showButtonBar=\"true\"\r\n              [monthNavigator]=\"true\"\r\n              [yearNavigator]=\"true\"\r\n              [yearRange]=\"sessionService.calendarYearRange\"\r\n              class=\"aw-calendar\"\r\n              appendTo=\"body\"\r\n              [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n              [locale]=\"sessionService.calendarFormat\"\r\n              [showTime]=\"true\"\r\n              [(ngModel)]=\"workPackage.projectDueDate\"\r\n              [minDate]=\"workPackage.projectStartDate\"\r\n            ></p-calendar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"mroCenter\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              [options]=\"siteList\"\r\n              [(ngModel)]=\"workPackage.bireRepairCenterCode\"\r\n              [showClear]=\"true\"\r\n              placeholder=\"&nbsp;\"\r\n              appendTo=\"body\"\r\n              [disabled]=\"forecastMroCenter\"\r\n              (onChange)=\"getWorkShops()\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"form-label\">\r\n            {{ \"workCenter\" | translate }}\r\n          </label>\r\n\r\n          <div class=\"form-control\" *ngIf=\"workShopList.length > 0\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              [options]=\"workShopList\"\r\n              [(ngModel)]=\"workPackage.bidtWarehouseId\"\r\n              [showClear]=\"true\"\r\n              [disabled]=\"isReadOpenMode\"\r\n              placeholder=\"&nbsp;\"\r\n              appendTo=\"body\"\r\n            ></p-dropdown>\r\n          </div>\r\n          <div class=\"form-control\" *ngIf=\"workShopList.length === 0\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              [options]=\"workShopList\"\r\n              [(ngModel)]=\"workPackage.bidtWarehouseId\"\r\n              [showClear]=\"true\"\r\n              [disabled]=\"true\"\r\n              placeholder=\"&nbsp;\"\r\n              appendTo=\"body\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">\r\n              {{ \"assignedTo\" | translate }}\r\n            </label>\r\n\r\n            <div class=\"form-control\">\r\n              <p-dropdown\r\n                class=\"aw-dropdown fixed-width\"\r\n                [options]=\"workPackageAssignedToList\"\r\n                [(ngModel)]=\"workPackage.receivingAssignedTo\"\r\n                [showClear]=\"true\"\r\n                placeholder=\"&nbsp;\"\r\n                appendTo=\"body\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      {{ \"cancel\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"validate()\">\r\n      {{ \"validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/form/work-package-dialog/work-package-dialog.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/form/work-package-dialog/work-package-dialog.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: WorkPackageForecastFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPackageForecastFormDialogComponent", function() { return WorkPackageForecastFormDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service */ "./src/app/main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service.ts");
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





var WorkPackageForecastFormDialogComponent = /** @class */ (function (_super) {
    __extends(WorkPackageForecastFormDialogComponent, _super);
    function WorkPackageForecastFormDialogComponent(sessionService, dialogWorkOrderEditService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write, 'WorkPackageForecastFormDialogComponent') || this;
        _this.sessionService = sessionService;
        _this.dialogWorkOrderEditService = dialogWorkOrderEditService;
        _this.init();
        return _this;
    }
    WorkPackageForecastFormDialogComponent.prototype.ngOnInit = function () {
        if (this.eventModel) {
            this.workOrderList = this.eventModel._obj.bidmWorkOrderList;
            this.workPackage = this.eventModel._obj.bidmProject;
        }
        else {
            this.workOrderList = [];
            this.workPackage = {};
            this.workPackage.projectStartDate = this.startDate;
            this.workPackage.projectDueDate = this.endtDate;
            this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Create);
        }
        this.workPackage.bireRepairCenterCode = this.forecastMroCenter;
        this.getWorkShops();
    };
    WorkPackageForecastFormDialogComponent.prototype.validate = function () {
        if (this.eventModel) {
            this.eventModel._obj.bidmWorkOrderList = this.workOrderList;
            this.eventModel._obj.bidmProject = this.workPackage;
            this.onUpdated.emit(this.eventModel);
        }
        else {
            this.onCreated.emit({ bidmProject: this.workPackage, bidmWorkOrderList: this.workOrderList });
        }
        this.closeDialog();
    };
    WorkPackageForecastFormDialogComponent.prototype.init = function () {
        this.workOrderList = [];
        this.workPackage = {};
        this.onCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };
    /**
     * To get the list of workshops on selection of MRO center
     */
    WorkPackageForecastFormDialogComponent.prototype.getWorkShops = function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], WorkPackageForecastFormDialogComponent.prototype, "endtDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorkPackageForecastFormDialogComponent.prototype, "eventModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorkPackageForecastFormDialogComponent.prototype, "forecastMroCenter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WorkPackageForecastFormDialogComponent.prototype, "siteList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], WorkPackageForecastFormDialogComponent.prototype, "startDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WorkPackageForecastFormDialogComponent.prototype, "workPackageAssignedToList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WorkPackageForecastFormDialogComponent.prototype, "workPackageStatusList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WorkPackageForecastFormDialogComponent.prototype, "workPackageTypeList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WorkPackageForecastFormDialogComponent.prototype, "onCreated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WorkPackageForecastFormDialogComponent.prototype, "onUpdated", void 0);
    WorkPackageForecastFormDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-forecast-form-work-package',
            template: __webpack_require__(/*! ./work-package-dialog.component.html */ "./src/app/main/maintenance/forecast/form/work-package-dialog/work-package-dialog.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            _work_package_form_popups_dialog_work_order_edition_dialog_work_order_edition_service__WEBPACK_IMPORTED_MODULE_4__["DialogWorkOrderEditService"]])
    ], WorkPackageForecastFormDialogComponent);
    return WorkPackageForecastFormDialogComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/forecast/search/forecast-search.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/search/forecast-search.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div class=\"page-subtitle\">- {{ \"global.search\" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"openNewForecast()\" *ngIf=\"hasUpdateAccessRight\">\r\n      {{ \"global.create\" | translate }}\r\n    </button>\r\n    <button\r\n      id=\"actions\"\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show All Actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button id=\"favorites\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container  search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <div class=\"section\">\r\n                <div class=\"section-content\">\r\n                  <div class=\"row search-criteria-header\">\r\n                    <aw-manage-search-criteria\r\n                      [componentId]=\"SEARCH_CRITERIA_ID\"\r\n                      (onSelected)=\"loadSearchCriteria($event)\"\r\n                      (onSavedAsked)=\"saveSearchCriteriaAsked()\"\r\n                      [objectFromPage]=\"criteriaToSave\"\r\n                    ></aw-manage-search-criteria>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title\">1. {{ \"mainCriteria\" | translate }}</h4>\r\n\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ \"number\" | translate }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input type=\"number\" class=\"aw-input\" [(ngModel)]=\"searchObject.projectNumber\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ \"name\" | translate }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.projectName\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ \"currentStatus\" | translate }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          [options]=\"currentStatusList\"\r\n                          [(ngModel)]=\"searchObject.statusState\"\r\n                          [showClear]=\"true\"\r\n                          placeholder=\"&nbsp;\"\r\n                          (keyup.enter)=\"search()\"\r\n                          appendTo=\"body\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ \"lastUpdatedBy\" | translate }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          [options]=\"userList\"\r\n                          [(ngModel)]=\"searchObject.statusUser\"\r\n                          [showClear]=\"true\"\r\n                          placeholder=\"&nbsp;\"\r\n                          (keyup.enter)=\"search()\"\r\n                          appendTo=\"body\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">\r\n                        {{ \"description\" | translate }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchObject.projectDescription\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"display--flex-row flex--1\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ \"lastUpdate\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\" style=\"margin-right: 1px\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [options]=\"dateCriteriaList\"\r\n                            [(ngModel)]=\"selectedLastUpdateDateCriteria\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            (keyup.enter)=\"search()\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group flex--4\">\r\n                        <label class=\"form-label\">&nbsp;</label>\r\n\r\n                        <div class=\"form-control\" style=\"margin-left: 1px\">\r\n                          <p-calendar\r\n                            showButtonBar=\"true\"\r\n                            [monthNavigator]=\"true\"\r\n                            [yearNavigator]=\"true\"\r\n                            [yearRange]=\"sessionService.calendarYearRange\"\r\n                            class=\"aw-calendar\"\r\n                            [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                            [locale]=\"sessionService.calendarFormat\"\r\n                            [(ngModel)]=\"searchObject.statusDate\"\r\n                          ></p-calendar>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"display--flex-row flex--1\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ \"startDate\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\" style=\"margin-right: 1px\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [options]=\"dateCriteriaList\"\r\n                            [(ngModel)]=\"selectedStartDateCriteria\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            (keyup.enter)=\"search()\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group flex--4\">\r\n                        <label class=\"form-label\">&nbsp;</label>\r\n\r\n                        <div class=\"form-control\" style=\"margin-left: 1px\">\r\n                          <p-calendar\r\n                            showButtonBar=\"true\"\r\n                            [monthNavigator]=\"true\"\r\n                            [yearNavigator]=\"true\"\r\n                            [yearRange]=\"sessionService.calendarYearRange\"\r\n                            class=\"aw-calendar\"\r\n                            [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                            [locale]=\"sessionService.calendarFormat\"\r\n                            [(ngModel)]=\"searchObject.projectStartDate\"\r\n                          ></p-calendar>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"display--flex-row flex--1\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ \"endDate\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\" style=\"margin-right: 1px\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [options]=\"dateCriteriaList\"\r\n                            [(ngModel)]=\"selectedEndDateCriteria\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            (keyup.enter)=\"search()\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group flex--4\">\r\n                        <label class=\"form-label\">&nbsp;</label>\r\n\r\n                        <div class=\"form-control\" style=\"margin-left: 1px\">\r\n                          <p-calendar\r\n                            showButtonBar=\"true\"\r\n                            [monthNavigator]=\"true\"\r\n                            [yearNavigator]=\"true\"\r\n                            [yearRange]=\"sessionService.calendarYearRange\"\r\n                            class=\"aw-calendar\"\r\n                            [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                            [locale]=\"sessionService.calendarFormat\"\r\n                            [(ngModel)]=\"searchObject.projectEndDate\"\r\n                          ></p-calendar>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"section\">\r\n                <h4 class=\"section-title\">2. {{ componentData.componentId + \".forecastType\" | translate }}</h4>\r\n\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <div class=\"form-control aw-selectbutton-wrapper\">\r\n                        <p-selectButton\r\n                          [(ngModel)]=\"selectedForecastCategory\"\r\n                          [options]=\"forecastCategoryList\"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex--3\"></div>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"selectedForecastCategory === forecastCategory.ASSET\" class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ \"assetCode\" | translate }}</label>\r\n\r\n                      <div class=\"form-control form-control-with-modal\">\r\n                        <div class=\"form-control-data\" (click)=\"openSearchAssetDialog()\">\r\n                          {{ selectedAsset.equipmentCode }}\r\n                        </div>\r\n\r\n                        <div *ngIf=\"selectedAsset.equipmentCode\" class=\"btn-clear-wrapper\">\r\n                          <i\r\n                            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"clearSelectedAsset()\"\r\n                          ></i>\r\n                        </div>\r\n\r\n                        <div class=\"btn-search-wrapper\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"openSearchAssetDialog()\"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group flex--3\"></div>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"selectedForecastCategory === forecastCategory.FLEET\" class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ \"fleetCode\" | translate }}</label>\r\n\r\n                      <div class=\"form-control form-control-with-modal\">\r\n                        <div class=\"form-control-data\" (click)=\"openSearchFleetDialog()\">\r\n                          {{ selectedFleet.fleetCode }}\r\n                        </div>\r\n\r\n                        <div *ngIf=\"selectedFleet.fleetCode\" class=\"btn-clear-wrapper\">\r\n                          <i\r\n                            class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"clearSelectedFleet()\"\r\n                          ></i>\r\n                        </div>\r\n\r\n                        <div class=\"btn-search-wrapper\">\r\n                          <i\r\n                            class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                            aria-hidden=\"true\"\r\n                            (click)=\"openSearchFleetDialog()\"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" *ngIf=\"selectedFleet.fleetCode\">\r\n                      <label class=\"form-label\">\r\n                        {{ \"fleetName\" | translate }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"selectedFleet.fleetName\" [disabled]=\"true\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" *ngIf=\"selectedFleet.fleetCode\">\r\n                      <label class=\"form-label\">\r\n                        {{ \"customer\" | translate }}\r\n                      </label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input\"\r\n                          [(ngModel)]=\"selectedFleet.customerCode\"\r\n                          [disabled]=\"true\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" *ngIf=\"selectedFleet.fleetCode\"></div>\r\n                    <div class=\"form-group flex--3\" *ngIf=\"!selectedFleet.fleetCode\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"section\">\r\n                <div class=\"section-content\">\r\n                  <div class=\"advanced-criteria\" [ngClass]=\"{ 'display--none': !showAdvancedCriteria }\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ \"mroCenter\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [options]=\"siteList\"\r\n                            [(ngModel)]=\"searchObject.repairCenterCode\"\r\n                            (onChange)=\"updateRepairCenterCode()\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            (keyup.enter)=\"search()\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ \"workCenter\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [options]=\"workCenterList\"\r\n                            [(ngModel)]=\"searchObject.whId\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            (keyup.enter)=\"search()\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ \"customer\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [options]=\"customerList\"\r\n                            [(ngModel)]=\"searchObject.customerCode\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            (keyup.enter)=\"search()\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">\r\n                          {{ \"attributeName\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [options]=\"attributeList\"\r\n                            [(ngModel)]=\"selectedAttribute\"\r\n                            [showClear]=\"true\"\r\n                            placeholder=\"&nbsp;\"\r\n                            (keyup.enter)=\"search()\"\r\n                            appendTo=\"body\"\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group\" *ngIf=\"selectedAttribute\">\r\n                        <label class=\"form-label\">\r\n                          {{ \"attributeValue\" | translate }}\r\n                        </label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"selectedAttributeValue\" />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\" *ngIf=\"!selectedAttribute\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"section\">\r\n                <div class=\"section-content\">\r\n                  <div class=\"row search-criteria-footer\">\r\n                    <div\r\n                      class=\"advanced-criteria-toggler\"\r\n                      *ngIf=\"!showAdvancedCriteria\"\r\n                      (click)=\"showAdvancedCriteria = !showAdvancedCriteria\"\r\n                    >\r\n                      <i class=\"fa fa-fw fa-plus\" aria-hidden=\"true\"></i>\r\n\r\n                      <div class=\"advanced-criteria-toggler-more\">{{ \"expandCriteria\" | translate }}</div>\r\n                    </div>\r\n\r\n                    <div\r\n                      class=\"advanced-criteria-toggler\"\r\n                      *ngIf=\"showAdvancedCriteria\"\r\n                      (click)=\"showAdvancedCriteria = !showAdvancedCriteria\"\r\n                    >\r\n                      <i class=\"fa fa-fw fa-minus\" aria-hidden=\"true\"></i>\r\n\r\n                      <div class=\"advanced-criteria-toggler-less\">{{ \"collapseCriteria\" | translate }}</div>\r\n                    </div>\r\n\r\n                    <div class=\"search-actions\">\r\n                      <button\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        class=\"btn-with-spinner\"\r\n                        (click)=\"search()\"\r\n                        appKeyPress\r\n                        color=\"primary\"\r\n                        [keyCode]=\"'Enter'\"\r\n                        (keyPress)=\"search()\"\r\n                      >\r\n                        <span *ngIf=\"forecastTableLoading\" class=\"lds-hourglass\"></span>\r\n                        {{ \"global.toSearch\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #forecastTableContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"results\" | translate }} ({{ forecastTable ? forecastTable.length : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-table\r\n                [resizableColumns]=\"true\"\r\n                #ptableResults\r\n                class=\"aw-table2\"\r\n                [columns]=\"forecastTableColList\"\r\n                [value]=\"forecastTable\"\r\n                [(selection)]=\"forecastTableSelection\"\r\n                dataKey=\"_id\"\r\n                [scrollable]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!forecastTableLoading\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"forecastTableLoading\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\" [ngClass]=\"{ 'rows-selected': forecastTableSelection.length > 0 }\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        (input)=\"ptableResults.filterGlobal($event.target.value, 'contains')\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"hasManageAccessRight && forecastTableSelection.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"removeForecastProjects()\"\r\n                      >\r\n                        {{ \"delete\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"forecastTableSelection.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openForecastTableSelection()\"\r\n                      >\r\n                        {{ \"open\" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                    </th>\r\n\r\n                    <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n                  <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                    </td>\r\n\r\n                    <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      <a *ngSwitchCase=\"'forecastNumber'\" (click)=\"openForecast(rowData)\">\r\n                        {{ rowData[col.field] }}\r\n                      </a>\r\n\r\n                      <span *ngSwitchDefault> {{ rowData[col.field] }} </span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-search-equipment\r\n    *ngIf=\"showSearchAssetDialog\"\r\n    [(display)]=\"showSearchAssetDialog\"\r\n    (onSelected)=\"onSelectedAsset($event)\"\r\n  ></aw-dialog-search-equipment>\r\n\r\n  <aw-dialog-search-fleet\r\n    *ngIf=\"showSearchFleetDialog\"\r\n    [(display)]=\"showSearchFleetDialog\"\r\n    (onSelected)=\"onSelectedFleet($event)\"\r\n  ></aw-dialog-search-fleet>\r\n  <aw-dialog-forecast-form-project-header\r\n    *ngIf=\"showForecastManagementBlock\"\r\n    [(display)]=\"showForecastManagementBlock\"\r\n    [forecastProject]=\"forecastProject\"\r\n    [forecastProjectAsset]=\"forecastProjectAsset\"\r\n    [selectedRepairCenter]=\"selectedRepairCenter\"\r\n    [repairCenterList]=\"repairCenterList\"\r\n    [occurrenceList]=\"occurrenceList\"\r\n    [selectedCustomer]=\"selectedCustomer\"\r\n    [customerList]=\"customerListForCreation\"\r\n    [selectedForecastCategory]=\"selectedForecastCreateCategory\"\r\n    [forecastCategoryList]=\"forecastCreateCategoryList\"\r\n    [forecastProjectSrc]=\"forecastProjectSrc\"\r\n    [forecastProjectId]=\"forecastProjectId\"\r\n    [forecastProjectLlpEventsGeneration]=\"forecastProjectLlpEventsGeneration\"\r\n    [forecastProjectOccurrenceNumber]=\"forecastProjectOccurrenceNumber\"\r\n    (onSave)=\"reloadForecast($event)\"\r\n  >\r\n  </aw-dialog-forecast-form-project-header>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/search/forecast-search.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/search/forecast-search.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvZm9yZWNhc3Qvc2VhcmNoL2ZvcmVjYXN0LXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/maintenance/forecast/search/forecast-search.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/search/forecast-search.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ForecastSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastSearchComponent", function() { return ForecastSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/utils/number-utils */ "./src/app/shared/utils/number-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _form_forecast_form_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../form/forecast-form.service */ "./src/app/main/maintenance/forecast/form/forecast-form.service.ts");
/* harmony import */ var _forecast_search_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./forecast-search.service */ "./src/app/main/maintenance/forecast/search/forecast-search.service.ts");
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






















var ForecastSearchComponent = /** @class */ (function (_super) {
    __extends(ForecastSearchComponent, _super);
    function ForecastSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, dateService, forecastSearchService, forecastFormService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.dateService = dateService;
        _this.forecastSearchService = forecastSearchService;
        _this.forecastFormService = forecastFormService;
        _this.translateService = translateService;
        _this.SEARCH_CRITERIA_ID = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_4__["AppConstants"].MAINTENANCE_FORECAST_SEARCH_CRITERIA_ID;
        _this.forecastCategory = _forecast_search_service__WEBPACK_IMPORTED_MODULE_21__["ForecastCategory"];
        _this.searchData = {};
        _this.onBeforeLoad();
        _this.load();
        return _this;
    }
    ForecastSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__["ComponentConstants"].MAI_FORECAST_SEARCH;
    };
    ForecastSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('search', true);
    };
    ForecastSearchComponent.prototype.onBeforeLoad = function () {
        this.attributeList = [];
        this.currentStatusList = [];
        this.customerList = [];
        this.forecastTableLoading = false;
        this.searchObject = {};
        this.siteList = [];
        this.userList = [];
        this.allWorkCenterList = [];
        this.workCenterList = [];
        this.selectedAttribute = undefined;
        this.selectedAttributeValue = undefined;
        this.selectedForecastCategory = _forecast_search_service__WEBPACK_IMPORTED_MODULE_21__["ForecastCategory"].ALL;
        this.selectedEndDateCriteria = undefined;
        this.selectedLastUpdateDateCriteria = undefined;
        this.selectedStartDateCriteria = undefined;
        this.showAdvancedCriteria = false;
        this.showSearchAssetDialog = false;
        this.showSearchFleetDialog = false;
        this.showForecastManagementBlock = false;
        this.clearForecastTable();
        this.clearSelectedAsset();
        this.clearSelectedFleet();
        this.setDateCriteriaList();
        this.setForecastCategoryList();
        this.setForecastTableColList();
    };
    ForecastSearchComponent.prototype.setForecastFormFields = function () {
        this.forecastProjectId = undefined;
        this.forecastProject = {};
        this.forecastProjectAsset = {};
        this.selectedRepairCenter = undefined;
        this.repairCenterList = [];
        this.setOccurrenceList();
        this.selectedCustomer = undefined;
        this.forecastProjectSrc = {};
        this.forecastProjectLlpEventsGeneration = false;
        this.forecastProjectOccurrenceNumber = undefined;
        this.selectedForecastCreateCategory = _forecast_search_service__WEBPACK_IMPORTED_MODULE_21__["ForecastCreateCategory"].FLEET;
        this.setRepairCenterList();
        this.setCustomerListForCreation();
        this.setForecastCreateCategoryList();
    };
    ForecastSearchComponent.prototype.clearSelectedAsset = function () {
        this.selectedAsset = {};
    };
    ForecastSearchComponent.prototype.clearSelectedFleet = function () {
        this.selectedFleet = {};
    };
    ForecastSearchComponent.prototype.setOccurrenceList = function () {
        var OCCURRENCE_MAX_VALUE = 5; // TODO: get value from backend
        this.occurrenceList = Array.from(Array(OCCURRENCE_MAX_VALUE + 1).keys())
            .slice(1)
            .map(function (value) {
            return {
                value: value,
                label: value.toString()
            };
        });
    };
    ForecastSearchComponent.prototype.setRepairCenterList = function () {
        var _this = this;
        this.forecastFormService.getAllForecastProjectSite().subscribe(function (result) {
            _this.repairCenterList = result;
        });
    };
    ForecastSearchComponent.prototype.setCustomerListForCreation = function () {
        var _this = this;
        this.forecastFormService.getAllForecastProjectCustomer().subscribe(function (result) {
            _this.customerListForCreation = result;
        });
    };
    ForecastSearchComponent.prototype.load = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])({
            attributeList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__["ListUtils"].isEmpty(this.attributeList)
                ? this.forecastSearchService.getAllBsdeAttributesForForecast()
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.attributeList),
            currentStatusList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__["ListUtils"].isEmpty(this.currentStatusList)
                ? this.forecastSearchService.getAllBidoFunctionTypeByModule(_shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_5__["BidoFunctionTypeConstants"].MODULE_MFO)
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.currentStatusList),
            customerList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__["ListUtils"].isEmpty(this.customerList)
                ? this.forecastSearchService.getAllBidoCustomer()
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.customerList),
            siteList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__["ListUtils"].isEmpty(this.siteList) ? this.forecastSearchService.getAllBidtSite() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.siteList),
            allWorkCenterList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__["ListUtils"].isEmpty(this.allWorkCenterList)
                ? this.forecastFormService.loadAllWorkCenterList()
                : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.workCenterList),
            userList: _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__["ListUtils"].orEmpty(this.userList) ? this.forecastSearchService.getAllBidoUser() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.userList)
        }).subscribe({
            next: function (result) {
                _this.attributeList = result.attributeList;
                _this.currentStatusList = result.currentStatusList;
                _this.customerList = result.customerList;
                _this.siteList = result.siteList;
                _this.userList = result.userList;
                _this.allWorkCenterList = result.allWorkCenterList;
                _this.workCenterList = result.allWorkCenterList;
            }
        });
    };
    ForecastSearchComponent.prototype.onSelectedAsset = function (asset) {
        this.selectedAsset.equipmentCode = asset.equipmentCode;
        this.selectedAsset.equipmentFunction = asset.equipmentFunction;
        this.selectedAsset.pnCode = asset.pnCode;
        this.selectedAsset.registration = asset.registration;
        this.selectedAsset.sn = asset.sn;
    };
    ForecastSearchComponent.prototype.onSelectedFleet = function (fleet) {
        this.selectedFleet = fleet;
    };
    ForecastSearchComponent.prototype.openForecast = function (forecastRow) {
        this.forecastSearchService.openForecast(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write, forecastRow._id);
    };
    ForecastSearchComponent.prototype.openForecastTableSelection = function () {
        var _this = this;
        this.forecastTableSelection.forEach(function (forecast) { return _this.openForecast(forecast); });
    };
    ForecastSearchComponent.prototype.openNewForecast = function () {
        this.setForecastFormFields();
        this.showForecastManagementBlock = true;
    };
    ForecastSearchComponent.prototype.reloadForecast = function (id) {
        if (!!id) {
            this.forecastProjectId = id;
            this.forecastSearchService.openForecast(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read, this.forecastProjectId);
        }
    };
    ForecastSearchComponent.prototype.openSearchAssetDialog = function () {
        this.showSearchAssetDialog = true;
    };
    ForecastSearchComponent.prototype.openSearchFleetDialog = function () {
        this.showSearchFleetDialog = true;
    };
    ForecastSearchComponent.prototype.removeForecastProjects = function () {
        var _this = this;
        this.forecastTableSelection
            .map(function (forecast) { return forecast._id; })
            .forEach(function (selectedForecastId) {
            _this.forecastSearchService.isForecastProjectLocked(selectedForecastId).subscribe({
                next: function (isForecastProjectLocked) {
                    if (isForecastProjectLocked) {
                        _this.messageService.showWarningMessage(_this.getTranslateKey('warningOnForecastLocked'));
                    }
                    else {
                        _this.forecastSearchService.removeBsdeProject({ projectId: selectedForecastId }).subscribe({
                            next: function () {
                                _this.forecastTable = _this.forecastTable.filter(function (forecast) { return forecast._id !== selectedForecastId; });
                                _this.forecastTableSelection = _this.forecastTableSelection.filter(function (forecast) { return forecast._id !== selectedForecastId; });
                                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnRemoveForecast'));
                            }
                        });
                    }
                }
            });
        });
    };
    ForecastSearchComponent.prototype.search = function () {
        var _this = this;
        var _a;
        this.forecastTableLoading = true;
        this.clearForecastTable();
        _super.prototype.scrollToAnchor.call(this, this.forecastTableContainerAnchor);
        this.searchObject.projectPn =
            this.selectedForecastCategory === _forecast_search_service__WEBPACK_IMPORTED_MODULE_21__["ForecastCategory"].ASSET ? this.selectedAsset.pnCode : undefined;
        this.searchObject.projectSn =
            this.selectedForecastCategory === _forecast_search_service__WEBPACK_IMPORTED_MODULE_21__["ForecastCategory"].ASSET ? this.selectedAsset.sn : undefined;
        this.searchObject.projectFleetId =
            this.selectedForecastCategory === _forecast_search_service__WEBPACK_IMPORTED_MODULE_21__["ForecastCategory"].FLEET ? this.selectedFleet.fleetId : undefined;
        var attributeMap = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(this.selectedAttribute) && !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].isNullOrEmpty(this.selectedAttributeValue)
            ? (_a = {},
                _a[this.selectedAttribute.attributeId] = this.selectedAttributeValue,
                _a) : {};
        var fleetSearch = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(this.searchObject.projectFleetId)
            ? true
            : _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(this.searchObject.projectPn) || _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(this.searchObject.projectSn)
                ? false
                : undefined;
        var input = {
            attributeMap: attributeMap,
            fleetSearch: fleetSearch,
            bsdeProjectCriteria: this.searchObject,
            startDateCriteria: this.selectedStartDateCriteria,
            statusDateCriteria: this.selectedLastUpdateDateCriteria,
            endDateCriteria: this.selectedEndDateCriteria
        };
        this.forecastSearchService
            .getAllBsdeProjectByCriteria(input)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.forecastTableLoading = false;
            _super.prototype.differ.call(_this, function () {
                _super.prototype.scrollToAnchor.call(_this, _this.forecastTableContainerAnchor);
            });
        }))
            .subscribe(function (forecastList) {
            _this.forecastTable = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__["ListUtils"].orEmpty(forecastList).map(function (forecast) { return _this.createForecastRow(forecast); });
        });
    };
    ForecastSearchComponent.prototype.clearForecastTable = function () {
        this.forecastTable = [];
        this.forecastTableSelection = [];
    };
    ForecastSearchComponent.prototype.createForecastRow = function (forecast) {
        var matchingMroCenter = this.siteList.find(function (elt) { return elt.value === forecast.repairCenterCode; });
        var matchingWorkCenter = this.workCenterList.find(function (elt) { return parseInt(elt.value, 10) === forecast.whId; });
        var forecastMroCenter = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(matchingMroCenter)
            ? matchingMroCenter.label
            : '';
        var forecastWorkCenter = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(matchingWorkCenter)
            ? matchingWorkCenter.label
            : '';
        var forecastRow = {
            forecastMroCenter: forecastMroCenter,
            forecastWorkCenter: forecastWorkCenter,
            assetPn: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].orEmpty(forecast.projectPn),
            assetSn: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].orEmpty(forecast.projectSn),
            fleetName: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].orEmpty(forecast.projectFleetName),
            forecastName: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].orEmpty(forecast.projectName),
            forecastNumber: _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_17__["NumberUtils"].toString(forecast.projectNumber),
            forecastEndDate: this.dateService.dateWithHourToString(forecast.projectEndDate),
            forecastStartDate: this.dateService.dateWithHourToString(forecast.projectStartDate),
            forecastStatus: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].orEmpty(forecast.statusStateText),
            _id: forecast.projectId
        };
        return forecastRow;
    };
    ForecastSearchComponent.prototype.setDateCriteriaList = function () {
        var _this = this;
        this.forecastSearchService.loadDateCriteriaList().subscribe(function (result) { return (_this.dateCriteriaList = result); });
    };
    ForecastSearchComponent.prototype.setForecastCategoryList = function () {
        var _this = this;
        var allKey = 'all';
        var assetKey = 'asset';
        var fleetKey = 'fleet';
        this.translateService.get([allKey, assetKey, fleetKey]).subscribe({
            next: function (results) {
                var allLabel = !!results ? results[allKey] : 'All';
                var assetLabel = !!results ? results[assetKey] : 'Asset';
                var fleetLabel = !!results ? results[fleetKey] : 'Fleet';
                _this.forecastCategoryList = [
                    { label: allLabel, value: _forecast_search_service__WEBPACK_IMPORTED_MODULE_21__["ForecastCategory"].ALL },
                    { label: assetLabel, value: _forecast_search_service__WEBPACK_IMPORTED_MODULE_21__["ForecastCategory"].ASSET },
                    { label: fleetLabel, value: _forecast_search_service__WEBPACK_IMPORTED_MODULE_21__["ForecastCategory"].FLEET }
                ];
            }
        });
    };
    ForecastSearchComponent.prototype.setForecastCreateCategoryList = function () {
        var _this = this;
        var assetKey = 'asset';
        var fleetKey = 'fleet';
        this.translateService.get([assetKey, fleetKey]).subscribe({
            next: function (results) {
                var assetLabel = !!results ? results[assetKey] : 'Asset';
                var fleetLabel = !!results ? results[fleetKey] : 'Fleet';
                _this.forecastCreateCategoryList = [
                    { label: assetLabel, value: _forecast_search_service__WEBPACK_IMPORTED_MODULE_21__["ForecastCreateCategory"].ASSET },
                    { label: fleetLabel, value: _forecast_search_service__WEBPACK_IMPORTED_MODULE_21__["ForecastCreateCategory"].FLEET }
                ];
            }
        });
    };
    ForecastSearchComponent.prototype.setForecastTableColList = function () {
        this.forecastTableColList = [
            { field: 'forecastNumber', alignment: 'left', width: '2.5%' },
            { field: 'forecastName', alignment: 'left', width: '21.5%' },
            { field: 'fleetName', alignment: 'left', width: '12.5%' },
            { field: 'assetPn', alignment: 'left', width: '12%' },
            { field: 'assetSn', alignment: 'left', width: '7.5%' },
            { field: 'forecastStartDate', alignment: 'left', width: '8%' },
            { field: 'forecastEndDate', alignment: 'left', width: '8%' },
            { field: 'forecastMroCenter', alignment: 'left', width: '8%' },
            { field: 'forecastWorkCenter', alignment: 'left', width: '8%' },
            { field: 'forecastStatus', alignment: 'left', width: '12.5%' }
        ];
    };
    ForecastSearchComponent.prototype.loadSearchCriteria = function (event) {
        var criteria = event.criteria;
        if (!criteria) {
            this.resetSearchCriteria();
        }
        if (!this.componentData.objectId) {
            this.criteriaName = event.name;
            this.searchData = criteria || {};
            this.searchObject = this.searchData.searchObject || {};
            this.selectedLastUpdateDateCriteria = this.searchData.selectedLastUpdateDateCriteria;
            this.selectedStartDateCriteria = this.searchData.selectedStartDateCriteria;
            this.selectedEndDateCriteria = this.searchData.selectedEndDateCriteria;
            this.selectedForecastCategory = this.searchData.selectedForecastCategory || _forecast_search_service__WEBPACK_IMPORTED_MODULE_21__["ForecastCategory"].ALL;
            this.selectedFleet = this.searchData.selectedFleet || {};
            this.selectedAsset = this.searchData.selectedAsset || {};
            this.selectedAttribute = this.searchData.selectedAttribute;
            this.selectedAttributeValue = this.searchData.selectedAttributeValue;
            this.showAdvancedCriteria = this.searchData.showAdvancedCriteria || false;
            this.search();
        }
        else {
            this.componentData.objectId = undefined;
        }
    };
    ForecastSearchComponent.prototype.saveSearchCriteriaAsked = function () {
        var criteriaToSave = {
            searchObject: this.searchObject,
            selectedLastUpdateDateCriteria: this.selectedLastUpdateDateCriteria,
            selectedStartDateCriteria: this.selectedStartDateCriteria,
            selectedEndDateCriteria: this.selectedEndDateCriteria,
            selectedForecastCategory: this.selectedForecastCategory,
            selectedFleet: this.selectedFleet,
            selectedAsset: this.selectedAsset,
            selectedAttribute: this.selectedAttribute,
            selectedAttributeValue: this.selectedAttributeValue,
            showAdvancedCriteria: this.showAdvancedCriteria
        };
        this.criteriaToSave = criteriaToSave;
    };
    ForecastSearchComponent.prototype.resetSearchCriteria = function () {
        this.criteriaName = undefined;
        this.searchObject = {};
        this.selectedLastUpdateDateCriteria = undefined;
        this.selectedStartDateCriteria = undefined;
        this.selectedEndDateCriteria = undefined;
        this.selectedFleet = {};
        this.selectedAsset = {};
        this.selectedForecastCategory = _forecast_search_service__WEBPACK_IMPORTED_MODULE_21__["ForecastCategory"].ALL;
        this.selectedAttribute = undefined;
        this.selectedAttributeValue = undefined;
        this.showAdvancedCriteria = false;
    };
    ForecastSearchComponent.prototype.updateRepairCenterCode = function () {
        var _this = this;
        if (!!this.searchObject.repairCenterCode) {
            this.forecastFormService.loadWorkCenterListBySite(this.searchObject.repairCenterCode).subscribe(function (result) {
                _this.workCenterList = result;
            });
        }
        else {
            this.workCenterList = this.allWorkCenterList;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('forecastTableContainerAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ForecastSearchComponent.prototype, "forecastTableContainerAnchor", void 0);
    ForecastSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-forecast-search',
            template: __webpack_require__(/*! ./forecast-search.component.html */ "./src/app/main/maintenance/forecast/search/forecast-search.component.html"),
            styles: [__webpack_require__(/*! ./forecast-search.component.scss */ "./src/app/main/maintenance/forecast/search/forecast-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_9__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_13__["SessionService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"],
            _forecast_search_service__WEBPACK_IMPORTED_MODULE_21__["ForecastSearchService"],
            _form_forecast_form_service__WEBPACK_IMPORTED_MODULE_20__["ForecastFormService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ForecastSearchComponent);
    return ForecastSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_15__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/forecast/search/forecast-search.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/maintenance/forecast/search/forecast-search.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ForecastCategory, ForecastCreateCategory, ForecastSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastCategory", function() { return ForecastCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastCreateCategory", function() { return ForecastCreateCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastSearchService", function() { return ForecastSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/am-project-management.api */ "./src/app/shared/api/am-project-management.api.ts");
/* harmony import */ var _shared_api_maintenance_plan_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/maintenance-plan.api */ "./src/app/shared/api/maintenance-plan.api.ts");
/* harmony import */ var _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/project-management.api */ "./src/app/shared/api/project-management.api.ts");
/* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/api/user-profile-management.api */ "./src/app/shared/api/user-profile-management.api.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
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














var ForecastCategory;
(function (ForecastCategory) {
    ForecastCategory[ForecastCategory["ALL"] = 0] = "ALL";
    ForecastCategory[ForecastCategory["ASSET"] = 1] = "ASSET";
    ForecastCategory[ForecastCategory["FLEET"] = 2] = "FLEET";
})(ForecastCategory || (ForecastCategory = {}));
var ForecastCreateCategory;
(function (ForecastCreateCategory) {
    ForecastCreateCategory[ForecastCreateCategory["ASSET"] = 0] = "ASSET";
    ForecastCreateCategory[ForecastCreateCategory["FLEET"] = 1] = "FLEET";
})(ForecastCreateCategory || (ForecastCreateCategory = {}));
var ForecastSearchService = /** @class */ (function (_super) {
    __extends(ForecastSearchService, _super);
    function ForecastSearchService(http, appConfigService, serializationService, tabService, maintenancePlanApi, amProjectManagementApi, projectManagementApi, userProfileManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.serializationService = serializationService;
        _this.tabService = tabService;
        _this.maintenancePlanApi = maintenancePlanApi;
        _this.amProjectManagementApi = amProjectManagementApi;
        _this.projectManagementApi = projectManagementApi;
        _this.userProfileManagementApi = userProfileManagementApi;
        return _this;
    }
    ForecastSearchService.prototype.openForecast = function (openMode, forecastId) {
        var data = {
            openMode: openMode,
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].MAI_FORECAST_FORM,
            objectId: this.serializationService.serialize(forecastId)
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    // ////////////////////////////////////////////////////////////////////////////
    // Maintenance plan api
    // ////////////////////////////////////////////////////////////////////////////
    ForecastSearchService.prototype.getAllBidoCustomer = function () {
        return _super.prototype.post.call(this, this.maintenancePlanApi.geAllMaintenanceForecastingCustomer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (customerList) {
            return customerList
                .filter(function (customer) { return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(customer.value.customerName); })
                .map(function (customer) {
                return {
                    label: customer.value.customerName,
                    value: customer.value.customerCode
                };
            });
        }));
    };
    ForecastSearchService.prototype.getAllBidtSite = function () {
        return _super.prototype.post.call(this, this.maintenancePlanApi.geAllMaintenanceForecastingSite).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (siteList) {
            return siteList
                .filter(function (site) { return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(site.value.repairCenterName); })
                .map(function (site) {
                return {
                    label: site.value.repairCenterName,
                    value: site.value.repairCenterCode
                };
            });
        }));
    };
    ForecastSearchService.prototype.isForecastProjectLocked = function (input) {
        return _super.prototype.post.call(this, this.maintenancePlanApi.isForecastProjectLocked, input);
    };
    // ////////////////////////////////////////////////////////////////////////////
    // Project management api
    // ////////////////////////////////////////////////////////////////////////////
    ForecastSearchService.prototype.getAllBsdeAttributesForForecast = function () {
        return _super.prototype.post.call(this, this.projectManagementApi.findBsdeAttributesForForecast);
    };
    ForecastSearchService.prototype.getAllBsdeProjectByCriteria = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.findAllBsdeProjectByCriteria, input);
    };
    ForecastSearchService.prototype.removeBsdeProject = function (input) {
        return _super.prototype.post.call(this, this.projectManagementApi.removeBsdeProject, input);
    };
    ForecastSearchService.prototype.getBsdeProjectDateCriteria = function () {
        return _super.prototype.post.call(this, this.amProjectManagementApi.getBsdeProjectDateCriteria);
    };
    ForecastSearchService.prototype.loadDateCriteriaList = function () {
        return this.getBsdeProjectDateCriteria().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
            return !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_12__["SelectItemUtils"].fromLabelValues(results) : [];
        }));
    };
    // ////////////////////////////////////////////////////////////////////////////
    // User profile management api
    // ////////////////////////////////////////////////////////////////////////////
    ForecastSearchService.prototype.getAllBidoFunctionTypeByModule = function (input) {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findAllBidoFunctionTypeByModule, input)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (functionTypeList) {
            return functionTypeList
                .filter(function (functionType) { return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(functionType.functionName); })
                .map(function (functionType) {
                return {
                    label: functionType.functionName,
                    value: functionType.functionCode
                };
            });
        }));
    };
    ForecastSearchService.prototype.getAllBidoUser = function () {
        return _super.prototype.post.call(this, this.userProfileManagementApi.findAllBidoUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (userList) {
            return userList
                .filter(function (user) { return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(user.firstname) || !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(user.lastname); })
                .map(function (user) {
                return {
                    label: user.firstname + " " + user.lastname,
                    value: user.userId
                };
            });
        }));
    };
    ForecastSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfigService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__["TabService"],
            _shared_api_maintenance_plan_api__WEBPACK_IMPORTED_MODULE_4__["MaintenancePlanApi"],
            _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_3__["AMProjectManagementApi"],
            _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_5__["ProjectManagementApi"],
            _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_6__["UserProfileManagementApi"]])
    ], ForecastSearchService);
    return ForecastSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_8__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/components/dialog-search-fleet/dialog-search-fleet.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-fleet/dialog-search-fleet.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"50\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ \"fleetPopin.title\" | translate }}</div>\r\n\r\n    <i class=\"material-icons aw-icon aw-icon-with-border\" (click)=\"onCancel()\">close</i>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"search-dialog-container\">\r\n      <div class=\"section search-criteria-section\">\r\n        <h4 class=\"section-title\">{{ \"global.search\" | translate }}</h4>\r\n\r\n        <div class=\"section-content\">\r\n          <div class=\"column\">\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"customerCode\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.customerCode\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"fleetPopin.fleetCode\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.fleetCode\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ \"fleetPopin.fleetName\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchObject.fleetName\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row search-criteria-footer\">\r\n              <div class=\"search-actions\">\r\n                <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"searchFleets()\">\r\n                  <span>{{ \"global.toSearch\" | translate }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"section results-section\">\r\n        <h4 class=\"section-title\">\r\n          {{ \"global.results\" | translate }} ({{ resultsTable.list ? resultsTable.list.length : 0 }})\r\n        </h4>\r\n\r\n        <div class=\"section-content\">\r\n          <p-table\r\n            [resizableColumns]=\"true\"\r\n            #ptable\r\n            class=\"aw-table2\"\r\n            [columns]=\"resultsTableCols\"\r\n            [value]=\"resultsTable.list\"\r\n            [(selection)]=\"selectedObject\"\r\n            selectionMode=\"single\"\r\n            dataKey=\"fleetCode\"\r\n            [scrollable]=\"true\"\r\n            (onRowUnselect)=\"onRowUnselect()\"\r\n          >\r\n            <ng-template pTemplate=\"emptymessage\">\r\n              <span *ngIf=\"!isLoading\"> &nbsp;</span>\r\n\r\n              <div *ngIf=\"isLoading\" class=\"aw-table-loading-indicator\">\r\n                <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                <div class=\"lds-hourglass\"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"caption\">\r\n              <div class=\"aw-table-header\">\r\n                <div class=\"aw-table-global-filter\">\r\n                  <label class=\"aw-table-global-filter-label\">\r\n                    <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    #ptableGlobalFilter\r\n                    class=\"aw-table-global-filter-input\"\r\n                    type=\"text\"\r\n                    placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                    (input)=\"ptable.filterGlobal($event.target.value, 'contains')\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"colgroup\" let-columns>\r\n              <colgroup>\r\n                <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n              <tr>\r\n                <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                  {{ \"fleetPopin.\" + col.field | translate }}\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n              <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                  {{ rowData[col.field] }}\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"onCancel()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button [disabled]=\"isOneObjectSelected()\" color=\"primary\" type=\"button\" mat-raised-button (click)=\"onValidate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-search-fleet/dialog-search-fleet.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-fleet/dialog-search-fleet.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DialogSearchFleetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchFleetComponent", function() { return DialogSearchFleetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _dialog_search_fleet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-search-fleet.service */ "./src/app/shared/components/dialog-search-fleet/dialog-search-fleet.service.ts");
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





var DialogSearchFleetComponent = /** @class */ (function (_super) {
    __extends(DialogSearchFleetComponent, _super);
    function DialogSearchFleetComponent(dialogSearchFleetService, messageService) {
        var _this = _super.call(this, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write, 'fleetPopin') || this;
        _this.dialogSearchFleetService = dialogSearchFleetService;
        _this.messageService = messageService;
        _this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.resultsTable = {
            list: [],
            moreResults: false
        };
        _this.searchObject = {};
        _this.selectedObject = {};
        _this.resultsTableCols = [
            { field: 'fleetCode', alignment: 'left' },
            { field: 'fleetName', alignment: 'left' },
            { field: 'customerCode', alignment: 'left' }
        ];
        return _this;
    }
    Object.defineProperty(DialogSearchFleetComponent.prototype, "fleetCode", {
        // VISIBLE INPUT
        set: function (code) {
            this.searchObject.fleetCode = code;
        },
        enumerable: true,
        configurable: true
    });
    /*
      <summary>Search contacts for operator or owner</summary>
      */
    DialogSearchFleetComponent.prototype.searchFleets = function () {
        var _this = this;
        this.dialogSearchFleetService.findBidoFleetsBySearchCriteria(this.searchObject).subscribe(function (results) {
            if (results) {
                _this.selectedObject = {};
                _this.resultsTable = results;
            }
        }, function () {
            _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnSearch'));
        });
    };
    /*
      <summary>Emit the selectedObject on validate</summary>
      */
    DialogSearchFleetComponent.prototype.onValidate = function () {
        this.onSelected.emit(this.selectedObject);
        this.display = false;
    };
    // Clean the selectedObject object if the row is unselect
    DialogSearchFleetComponent.prototype.onRowUnselect = function () {
        this.selectedObject = {};
    };
    // Clean all the object on rerender
    DialogSearchFleetComponent.prototype.onShow = function () {
        this.selectedObject = {};
        this.resultsTable = {
            list: [],
            moreResults: false
        };
    };
    /*
      <summary>Close the pop up on cancel</summary>
      */
    DialogSearchFleetComponent.prototype.onCancel = function () {
        this.selectedObject = {};
        this.resultsTable = {
            list: [],
            moreResults: false
        };
        this.display = false;
    };
    DialogSearchFleetComponent.prototype.isOneObjectSelected = function () {
        return !this.selectedObject.fleetCode;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DialogSearchFleetComponent.prototype, "onSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('fleet-code'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DialogSearchFleetComponent.prototype, "fleetCode", null);
    DialogSearchFleetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-search-fleet',
            template: __webpack_require__(/*! ./dialog-search-fleet.component.html */ "./src/app/shared/components/dialog-search-fleet/dialog-search-fleet.component.html")
        }),
        __metadata("design:paramtypes", [_dialog_search_fleet_service__WEBPACK_IMPORTED_MODULE_4__["DialogSearchFleetService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], DialogSearchFleetComponent);
    return DialogSearchFleetComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/components/dialog-search-fleet/dialog-search-fleet.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-fleet/dialog-search-fleet.module.ts ***!
  \*************************************************************************************/
/*! exports provided: DialogSearchFleetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchFleetModule", function() { return DialogSearchFleetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dialog_search_fleet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-search-fleet.component */ "./src/app/shared/components/dialog-search-fleet/dialog-search-fleet.component.ts");
/* harmony import */ var _dialog_search_fleet_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-search-fleet.service */ "./src/app/shared/components/dialog-search-fleet/dialog-search-fleet.service.ts");
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
var EXTERNAL_MODULES = [primeng_table__WEBPACK_IMPORTED_MODULE_1__["TableModule"]];
var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_5__["ModalModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_dialog_search_fleet_component__WEBPACK_IMPORTED_MODULE_6__["DialogSearchFleetComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_dialog_search_fleet_service__WEBPACK_IMPORTED_MODULE_7__["DialogSearchFleetService"]];
var DialogSearchFleetModule = /** @class */ (function () {
    function DialogSearchFleetModule() {
    }
    DialogSearchFleetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS),
            exports: __spread(COMPONENTS),
            imports: __spread([
                _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__["AngularCommonSharedModule"],
                _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__["AngularGenericTemplatesSharedModule"],
                _app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonSharedModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], DialogSearchFleetModule);
    return DialogSearchFleetModule;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-search-fleet/dialog-search-fleet.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-fleet/dialog-search-fleet.service.ts ***!
  \**************************************************************************************/
/*! exports provided: DialogSearchFleetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchFleetService", function() { return DialogSearchFleetService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
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





var DialogSearchFleetService = /** @class */ (function (_super) {
    __extends(DialogSearchFleetService, _super);
    function DialogSearchFleetService(http, appConfigService, fleetManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.fleetManagementApi = fleetManagementApi;
        return _this;
    }
    DialogSearchFleetService.prototype.findBidoFleetsBySearchCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoFleetsBySearchCriteria, criteria);
    };
    DialogSearchFleetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_2__["FleetManagementApi"]])
    ], DialogSearchFleetService);
    return DialogSearchFleetService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/constants/bsde-attribute-constants.interface.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/constants/bsde-attribute-constants.interface.ts ***!
  \************************************************************************/
/*! exports provided: BsdeAttributeConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsdeAttributeConstants", function() { return BsdeAttributeConstants; });
var BsdeAttributeConstants = /** @class */ (function () {
    function BsdeAttributeConstants() {
    }
    // IWB standard attributes
    BsdeAttributeConstants.INVENTORY_LOADING_LOCK = '2';
    BsdeAttributeConstants.SAP_WBS_ELEMENT = '3';
    BsdeAttributeConstants.CUSTOMER = '4';
    BsdeAttributeConstants.IWB_FATHER_PROJECT = '5';
    BsdeAttributeConstants.RATING_CODE = '6';
    BsdeAttributeConstants.WORKSCOPE_STATUS = '7';
    BsdeAttributeConstants.WORK_ORDER_CODE = '15';
    BsdeAttributeConstants.WORK_PACKAGE_NUMBER = '16';
    // MFO standard attributes
    BsdeAttributeConstants.MFO_LLP_EVENTS_GENERATION = '8';
    BsdeAttributeConstants.MFO_IWB_ACTIONS_GENERATION = '9';
    BsdeAttributeConstants.MFO_TIME_SCALE_OPTION = '10';
    BsdeAttributeConstants.MFO_OCCURRENCE_NUMBER_OPTION = '11';
    BsdeAttributeConstants.MFO_USAGE_MODE = '12';
    BsdeAttributeConstants.MFO_LLP_COUNTERS = '13';
    BsdeAttributeConstants.MFO_EQUIPMENT_FUNCTIONS = '14';
    return BsdeAttributeConstants;
}());



/***/ }),

/***/ "./src/app/shared/constants/bsde-event-type-constants.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/constants/bsde-event-type-constants.ts ***!
  \***************************************************************/
/*! exports provided: BsdeEventTypeConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsdeEventTypeConstants", function() { return BsdeEventTypeConstants; });
var BsdeEventTypeConstants = /** @class */ (function () {
    function BsdeEventTypeConstants() {
    }
    BsdeEventTypeConstants.EVOLUTION_TYPE_CODE = '1';
    BsdeEventTypeConstants.TASK_TYPE_CODE = '2';
    BsdeEventTypeConstants.CHANGE_SN_TYPE_CODE = '3';
    return BsdeEventTypeConstants;
}());



/***/ }),

/***/ "./src/app/shared/utils/bido-equipment-utils.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/utils/bido-equipment-utils.ts ***!
  \******************************************************/
/*! exports provided: BidoEquipmentUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidoEquipmentUtils", function() { return BidoEquipmentUtils; });
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bido-family-variant-utils */ "./src/app/shared/utils/bido-family-variant-utils.ts");



var BidoEquipmentUtils = /** @class */ (function () {
    function BidoEquipmentUtils() {
    }
    BidoEquipmentUtils.createAssetName = function (equipment) {
        if (!equipment) {
            return '';
        }
        else {
            var designation = void 0;
            switch (equipment.equipmentFunction) {
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY:
                    designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.registration);
                    break;
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY:
                    designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn);
                    break;
                default:
                    designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.pnCode) + '/' + _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn);
                    break;
            }
            return designation;
        }
    };
    BidoEquipmentUtils.createAircraftRepresentation = function (equipment) {
        var aircraftRepresentation = '';
        if (!equipment) {
            return '';
        }
        else {
            if (BidoEquipmentUtils.createAssetName(equipment) !== '') {
                aircraftRepresentation =
                    'MSN ' + _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn) + ' | ' + BidoEquipmentUtils.createAssetName(equipment);
            }
            if (BidoEquipmentUtils.createAssetName(equipment) === '' && _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn) !== '') {
                aircraftRepresentation = 'MSN ' + _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn);
            }
            return aircraftRepresentation;
        }
    };
    BidoEquipmentUtils.createAssetRepresentation = function (equipment) {
        var assetRepresentation = '';
        if (equipment) {
            var designation = void 0;
            switch (equipment.equipmentFunction) {
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY:
                    assetRepresentation =
                        _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.familyVariantCode) +
                            ' | MSN ' +
                            _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn) +
                            ' | ' +
                            _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.registration);
                    designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.registration);
                    break;
                case _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY:
                    assetRepresentation =
                        _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.familyVariantCode) +
                            ' | MSN ' +
                            _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn) +
                            ' | ' +
                            _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.registration);
                    designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.registration);
                    break;
                default:
                    assetRepresentation =
                        _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.familyVariantCode) + ' | SN ' + _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn);
                    designation = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipment.sn);
                    break;
            }
        }
        return assetRepresentation;
    };
    BidoEquipmentUtils.getBireItemPK = function (equipment) {
        if (!!equipment.chapter &&
            !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isEmpty(equipment.chapter) &&
            !!equipment.marks &&
            !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isEmpty(equipment.marks) &&
            !!equipment.section &&
            !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isEmpty(equipment.section) &&
            !!equipment.sheet &&
            !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isEmpty(equipment.sheet) &&
            !!equipment.subject &&
            !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isEmpty(equipment.subject)) {
            var itemId = {
                familyCode: _bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_2__["BidoFamilyVariantUtils"].getFamilyCodeFromFamilyVariantCode(equipment.familyVariantCode),
                chapter: equipment.chapter,
                subject: equipment.subject,
                variantCode: _bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_2__["BidoFamilyVariantUtils"].getVariantCodeFromFamilyVariantCode(equipment.familyVariantCode),
                section: equipment.section,
                sheet: equipment.sheet,
                marks: equipment.marks,
                structureType: _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].STRUCTURE_TYPE_IPC_KEY
            };
            return itemId;
        }
        else {
            return undefined;
        }
    };
    BidoEquipmentUtils.toString = function (asset, withFamilyVariantCode) {
        if (withFamilyVariantCode === void 0) { withFamilyVariantCode = true; }
        if (!asset) {
            return '';
        }
        var equipmentCode = asset.equipmentCode;
        var equipmentFunction = asset.equipmentFunction;
        var familyVariantCode = withFamilyVariantCode ? asset.familyVariantCode + " | " : '';
        var pn = asset.pnCode;
        var registration = asset.registration;
        var sn = asset.sn;
        if (equipmentFunction === _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
            var formattedMsn = !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(sn) ? "MSN " + sn : '';
            var formattedRegistration = !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(registration) ? " | " + registration : '';
            return "" + familyVariantCode + formattedMsn + formattedRegistration;
        }
        else if (equipmentFunction === _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY) {
            var formattedEsn = !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(sn) ? "ESN " + sn : '';
            return "" + familyVariantCode + formattedEsn;
        }
        else {
            if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(pn)) {
                if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(sn)) {
                    return "P/N " + pn + " | S/N " + sn;
                }
                else {
                    return "P/N " + pn;
                }
            }
            else if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].isNullOrEmpty(sn)) {
                return "S/N " + sn;
            }
            else {
                return _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].orEmpty(equipmentCode);
            }
        }
    };
    return BidoEquipmentUtils;
}());



/***/ })

}]);
//# sourceMappingURL=maintenance-forecast-forecast-module.js.map