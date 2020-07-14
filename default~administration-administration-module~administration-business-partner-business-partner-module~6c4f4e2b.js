(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administration-administration-module~administration-business-partner-business-partner-module~6c4f4e2b"],{

/***/ "./src/app/shared/components/component-sidebar/component-sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/component-sidebar/component-sidebar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"right-sidebar\" [ngClass]=\"{ expanded: expanded, collapsed: collapsed }\">\r\n  <div class=\"sidebar-toggle\" (click)=\"toggleSidebarVisibility()\">\r\n    <i class=\"material-icons expand-icon\">chevron_left</i>\r\n    <i class=\"material-icons collapse-icon\">chevron_right</i>\r\n  </div>\r\n\r\n  <ul class=\"list--unstyled sidebar-nav\">\r\n    <li\r\n      *ngFor=\"let tocEntry of toc\"\r\n      [ngClass]=\"{ alert: isPageTocEntryWithAlert(tocEntry), active: isActivePageTocEntry(tocEntry) }\"\r\n      (click)=\"onClickPageTocEntry(tocEntry)\"\r\n    >\r\n      {{ tocEntry.label }}\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/component-sidebar/component-sidebar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/component-sidebar/component-sidebar.component.ts ***!
  \************************************************************************************/
/*! exports provided: ComponentSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentSidebarComponent", function() { return ComponentSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _enums_sidebar_visibility_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/sidebar-visibility.enum */ "./src/app/shared/enums/sidebar-visibility.enum.ts");
/* harmony import */ var _types_generic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types/generic-component */ "./src/app/shared/types/generic-component.ts");
/* harmony import */ var _page_toc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
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






var ComponentSidebarComponent = /** @class */ (function (_super) {
    __extends(ComponentSidebarComponent, _super);
    function ComponentSidebarComponent(pageTocService) {
        var _this = _super.call(this, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__["ComponentOpenMode"].Write) || this;
        _this.pageTocService = pageTocService;
        _this.init();
        _this.registerAnchorSelectedObservable();
        _this.registerErrorMarkerListObservable();
        return _this;
    }
    Object.defineProperty(ComponentSidebarComponent.prototype, "visibility", {
        get: function () {
            return this._visibility;
        },
        set: function (value) {
            this._visibility = value;
        },
        enumerable: true,
        configurable: true
    });
    ComponentSidebarComponent.prototype.getComponentName = function () {
        return 'ComponentSidebarComponent';
    };
    Object.defineProperty(ComponentSidebarComponent.prototype, "collapsed", {
        get: function () {
            return this.visibility === _enums_sidebar_visibility_enum__WEBPACK_IMPORTED_MODULE_3__["SidebarVisibility"].Collapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentSidebarComponent.prototype, "expanded", {
        get: function () {
            return this.visibility === _enums_sidebar_visibility_enum__WEBPACK_IMPORTED_MODULE_3__["SidebarVisibility"].Expanded;
        },
        enumerable: true,
        configurable: true
    });
    ComponentSidebarComponent.prototype.isActivePageTocEntry = function (pageTocEntry) {
        return pageTocEntry.id === this.selectedPageTocEntry;
    };
    ComponentSidebarComponent.prototype.isPageTocEntryWithAlert = function (pageTocEntry) {
        return this.errorMarkerList.some(function (errorMarker) { return errorMarker === pageTocEntry.id; });
    };
    ComponentSidebarComponent.prototype.onClickPageTocEntry = function (pageTocEntry) {
        this.pageTocService.setPageTocEntrySelected(pageTocEntry.id);
        this.selectedPageTocEntry = pageTocEntry.id;
        _super.prototype.scrollToAnchor.call(this, pageTocEntry.anchor);
    };
    ComponentSidebarComponent.prototype.toggleSidebarVisibility = function () {
        this.visibility =
            this.visibility === _enums_sidebar_visibility_enum__WEBPACK_IMPORTED_MODULE_3__["SidebarVisibility"].Collapsed ? _enums_sidebar_visibility_enum__WEBPACK_IMPORTED_MODULE_3__["SidebarVisibility"].Expanded : _enums_sidebar_visibility_enum__WEBPACK_IMPORTED_MODULE_3__["SidebarVisibility"].Collapsed;
        this.visibilityChange.emit(this.visibility);
    };
    ComponentSidebarComponent.prototype.init = function () {
        this.errorMarkerList = [];
        this.selectedPageTocEntry = undefined;
        this.visibilityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };
    ComponentSidebarComponent.prototype.registerAnchorSelectedObservable = function () {
        var _this = this;
        this.pageTocService.anchorSelected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe)).subscribe(function (anchorSelected) {
            _this.selectedPageTocEntry = anchorSelected;
        });
    };
    ComponentSidebarComponent.prototype.registerErrorMarkerListObservable = function () {
        var _this = this;
        this.pageTocService.errorMarkerList$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe)).subscribe(function (errorMarkerList) {
            _this.errorMarkerList = errorMarkerList;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ComponentSidebarComponent.prototype, "toc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], ComponentSidebarComponent.prototype, "visibility", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ComponentSidebarComponent.prototype, "visibilityChange", void 0);
    ComponentSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-component-sidebar',
            template: __webpack_require__(/*! ./component-sidebar.component.html */ "./src/app/shared/components/component-sidebar/component-sidebar.component.html")
        }),
        __metadata("design:paramtypes", [_page_toc_service__WEBPACK_IMPORTED_MODULE_5__["PageTocService"]])
    ], ComponentSidebarComponent);
    return ComponentSidebarComponent;
}(_types_generic_component__WEBPACK_IMPORTED_MODULE_4__["GenericComponent"]));



/***/ }),

/***/ "./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts ***!
  \********************************************************************************/
/*! exports provided: ComponentSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentSidebarModule", function() { return ComponentSidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _component_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-sidebar.component */ "./src/app/shared/components/component-sidebar/component-sidebar.component.ts");
/* harmony import */ var _page_toc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
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
 * Components
 *************************************************************************** */
var COMPONENTS = [_component_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ComponentSidebarComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_page_toc_service__WEBPACK_IMPORTED_MODULE_4__["PageTocService"]];
var ComponentSidebarModule = /** @class */ (function () {
    function ComponentSidebarModule() {
    }
    ComponentSidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS),
            exports: __spread(COMPONENTS),
            imports: [_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_1__["AngularCommonSharedModule"], _app_common_shared_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonSharedModule"]],
            providers: __spread(SERVICES)
        })
    ], ComponentSidebarModule);
    return ComponentSidebarModule;
}());



/***/ }),

/***/ "./src/app/shared/components/component-sidebar/page-toc.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/component-sidebar/page-toc.service.ts ***!
  \*************************************************************************/
/*! exports provided: PageTocService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTocService", function() { return PageTocService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageTocService = /** @class */ (function () {
    function PageTocService() {
        this._anchorSelectedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._errorMarkerListSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._pageTocEntrySelectedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._anchorSelected$ = this._anchorSelectedSource.asObservable();
        this._errorMarkerList$ = this._errorMarkerListSource.asObservable();
        this._pageTocEntrySelected$ = this._pageTocEntrySelectedSource.asObservable();
    }
    Object.defineProperty(PageTocService.prototype, "anchorSelected$", {
        get: function () {
            return this._anchorSelected$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageTocService.prototype, "errorMarkerList$", {
        get: function () {
            return this._errorMarkerList$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageTocService.prototype, "pageTocEntrySelected$", {
        get: function () {
            return this._pageTocEntrySelected$;
        },
        enumerable: true,
        configurable: true
    });
    PageTocService.prototype.clearErrorMarkerList = function () {
        this._errorMarkerListSource.next([]);
    };
    PageTocService.prototype.setAnchorSelected = function (anchorId) {
        this._anchorSelectedSource.next(anchorId);
    };
    PageTocService.prototype.setErrorMarkerList = function (errorMarkerList) {
        this._errorMarkerListSource.next(errorMarkerList);
    };
    PageTocService.prototype.setPageTocEntrySelected = function (pageTocEntryId) {
        this._pageTocEntrySelectedSource.next(pageTocEntryId);
    };
    PageTocService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PageTocService);
    return PageTocService;
}());



/***/ })

}]);
//# sourceMappingURL=default~administration-administration-module~administration-business-partner-business-partner-module~6c4f4e2b.js.map