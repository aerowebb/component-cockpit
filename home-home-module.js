(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts ***!
  \**********************************************************************************/
/*! exports provided: DynamicComponentLoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponentLoaderModule", function() { return DynamicComponentLoaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-component-loader.service */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.service.ts");
/* harmony import */ var _dynamic_component_manifest_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-component-manifest.interface */ "./src/app/main/dynamic-component-loader/dynamic-component-manifest.interface.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DynamicComponentLoaderModule = /** @class */ (function () {
    function DynamicComponentLoaderModule() {
    }
    DynamicComponentLoaderModule_1 = DynamicComponentLoaderModule;
    DynamicComponentLoaderModule.forRoot = function (manifests) {
        return {
            ngModule: DynamicComponentLoaderModule_1,
            providers: [
                _dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_2__["DynamicComponentLoader"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], useClass: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"] },
                // provider for Angular CLI to analyze
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ROUTES"], useValue: manifests, multi: true },
                // provider for DynamicComponentLoader to analyze
                { provide: _dynamic_component_manifest_interface__WEBPACK_IMPORTED_MODULE_3__["DYNAMIC_COMPONENT_MANIFESTS"], useValue: manifests }
            ]
        };
    };
    // tslint:disable-next-line:no-any
    DynamicComponentLoaderModule.forChild = function (components) {
        return {
            ngModule: DynamicComponentLoaderModule_1,
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ANALYZE_FOR_ENTRY_COMPONENTS"], useValue: components, multi: true },
                // provider for @angular/router to parse
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ROUTES"], useValue: [], multi: true },
                // provider for DynamicComponentLoader to analyze
                { provide: _dynamic_component_manifest_interface__WEBPACK_IMPORTED_MODULE_3__["DYNAMIC_COMPONENT"], useValue: components }
            ]
        };
    };
    var DynamicComponentLoaderModule_1;
    DynamicComponentLoaderModule = DynamicComponentLoaderModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])()
    ], DynamicComponentLoaderModule);
    return DynamicComponentLoaderModule;
}());



/***/ }),

/***/ "./src/app/main/dynamic-component-loader/dynamic-component-loader.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main/dynamic-component-loader/dynamic-component-loader.service.ts ***!
  \***********************************************************************************/
/*! exports provided: DynamicComponentLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponentLoader", function() { return DynamicComponentLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _dynamic_component_manifest_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-component-manifest.interface */ "./src/app/main/dynamic-component-loader/dynamic-component-manifest.interface.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DynamicComponentLoader = /** @class */ (function () {
    function DynamicComponentLoader(manifests, injector, loader, loaderService) {
        this.manifests = manifests;
        this.injector = injector;
        this.loader = loader;
        this.loaderService = loaderService;
    }
    // Retrieve a ComponentFactory, based on the specified componentId (defined in the DynamicComponentManifest array).
    DynamicComponentLoader.prototype.getComponentFactory = function (componentId, injector) {
        var _this = this;
        var manifest = this.manifests.find(function (m) { return m.componentId === componentId; });
        if (!manifest) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])("DynamicComponentLoader: Unknown componentId \"" + componentId + "\"");
        }
        this.loaderService.showModuleLoadingBar();
        var p = this.loader.load(manifest.loadChildren).then(function (ngModuleFactory) {
            var moduleRef = ngModuleFactory.create(injector || _this.injector);
            var dynamicComponentTypes = moduleRef.injector.get(_dynamic_component_manifest_interface__WEBPACK_IMPORTED_MODULE_3__["DYNAMIC_COMPONENT"]);
            if (!dynamicComponentTypes) {
                throw _this.dynamicComponentLoaderError(componentId);
            }
            var requestedDynamicComponentType = dynamicComponentTypes.find(function (dynamicComponentType) {
                return dynamicComponentType.prototype.getComponentName.apply(undefined) === componentId;
            });
            if (!requestedDynamicComponentType) {
                throw _this.dynamicComponentLoaderError(componentId);
            }
            return moduleRef.componentFactoryResolver.resolveComponentFactory(requestedDynamicComponentType);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(p);
    };
    DynamicComponentLoader.prototype.dynamicComponentLoaderError = function (componentId) {
        var message = 'DynamicComponentLoader: Dynamic module for componentId "' +
            componentId +
            '" does not contain DYNAMIC_COMPONENT as a provider.';
        return new Error(message);
    };
    DynamicComponentLoader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_dynamic_component_manifest_interface__WEBPACK_IMPORTED_MODULE_3__["DYNAMIC_COMPONENT_MANIFESTS"])),
        __metadata("design:paramtypes", [Array, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], DynamicComponentLoader);
    return DynamicComponentLoader;
}());



/***/ }),

/***/ "./src/app/main/dynamic-component-loader/dynamic-component-manifest.interface.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/dynamic-component-loader/dynamic-component-manifest.interface.ts ***!
  \***************************************************************************************/
/*! exports provided: DYNAMIC_COMPONENT, DYNAMIC_COMPONENT_MANIFESTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DYNAMIC_COMPONENT", function() { return DYNAMIC_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DYNAMIC_COMPONENT_MANIFESTS", function() { return DYNAMIC_COMPONENT_MANIFESTS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// tslint:disable-next-line:no-any
var DYNAMIC_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('DYNAMIC_COMPONENT');
// tslint:disable-next-line:no-any
var DYNAMIC_COMPONENT_MANIFESTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('DYNAMIC_COMPONENT_MANIFESTS');


/***/ }),

/***/ "./src/app/main/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home-component\" class=\"page-wrapper\" [@mainContainerState]=\"mainContainerState\">\r\n  <div class=\"page-container\">\r\n    <div class=\"logo-container\">\r\n      <img class=\"logo-aw\" src=\"assets/img/home_logo.svg\" [@imgState]=\"imgState\" />\r\n\r\n      <img\r\n        class=\"logo-client\"\r\n        src=\"assets/img/client.svg\"\r\n        *ngIf=\"sessionService.isSpecificBRASIDAS || sessionService.isSpecificDassault\"\r\n      />\r\n    </div>\r\n\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"tiles-container\">\r\n            <div class=\"tile\" *ngFor=\"let favorite of favorites\">\r\n              <div class=\"tile-header\">\r\n                <div class=\"tile-favorite\" (click)=\"toggleDefaultFavorite(favorite)\">\r\n                  <i *ngIf=\"isFavoriteToOpen(favorite)\" class=\"fa fa-fw fa-star favorite-entry\" aria-hidden=\"true\"></i>\r\n                  <i *ngIf=\"!isFavoriteToOpen(favorite)\" class=\"fa fa-fw fa-star-o\" aria-hidden=\"true\"></i>\r\n                </div>\r\n\r\n                <div class=\"tile-title\" (click)=\"openFavorite(favorite)\">\r\n                  {{ \"transaction.\" + favorite.componentId | translate }}\r\n                </div>\r\n\r\n                <div class=\"tile-remove\" (click)=\"removeFavorite(favorite)\">\r\n                  <i class=\"material-icons\">close</i>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"tile-content\" (click)=\"openFavorite(favorite)\">\r\n                <div class=\"tile-context\">\r\n                  <span *ngIf=\"favorite.formattedContext\">{{ favorite.formattedContext }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"favorites.length === 0\" class=\"tile-empty\">\r\n              Your favorites <i class=\"fa fa-fw fa-star favorite-icon\" aria-hidden=\"true\"></i> will appear here.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"appVersionService.appVersion\" class=\"release-version\">\r\n      <div>{{ sessionService.userFirstName }} {{ sessionService.userLastName }}</div>\r\n\r\n      <div *ngIf=\"sessionService.client\">Client {{ sessionService.client }}</div>\r\n\r\n      <div>{{ sessionService.system }}</div>\r\n\r\n      <div>{{ sessionService.instance }}</div>\r\n\r\n      <div>{{ appVersionService.appVersion.version }}</div>\r\n\r\n      <div>{{ appVersionService.appVersion.copyright }}</div>\r\n\r\n      <div *ngIf=\"appVersionService.appVersion.versionDate\">\r\n        {{ dateService.dateWitCustomFormatToString(appVersionService.appVersion.versionDate, \"LL\") }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/main/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host #home-component {\n  background-attachment: fixed;\n  background-image: url('home-background.jpg');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: calc(100vh - 40px);\n  margin-top: 40px; }\n  :host #home-component .page-container {\n    min-height: 100%; }\n  :host #home-component .page-container .page-content {\n      margin: 0 auto;\n      max-width: calc(100% - 2 * 8rem); }\n  :host #home-component .page-container .release-version {\n      bottom: 8px;\n      position: absolute;\n      right: 8px;\n      text-align: right;\n      width: 8rem; }\n  :host .logo-container {\n  display: flex;\n  flex-direction: column;\n  height: 60vh;\n  align-items: center;\n  justify-content: center; }\n  :host .logo-container .logo-aw {\n    width: 40rem; }\n  :host .logo-container .logo-client {\n    margin-top: 32px;\n    width: 24rem; }\n  :host .tiles-container {\n  display: flex;\n  flex-direction: row; }\n  :host .tile {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  margin: 8px;\n  width: calc(100% / 6 - 8px * 2);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\n  position: relative;\n  transition-duration: 200ms;\n  transition-property: box-shadow;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  @media screen and (max-width: 1280px) {\n    :host .tile {\n      width: calc(100% / 3 - 8px * 2); } }\n  :host .tile:hover:not(:active), :host .tile:focus-within:not(:active) {\n    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08); }\n  :host .tile .tile-header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    background: #fafafa;\n    height: calc(8px * 4);\n    padding: 0 calc(8px / 2);\n    width: 100%; }\n  :host .tile .tile-header .tile-title {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      cursor: pointer;\n      flex-grow: 1;\n      font-size: 0.875rem;\n      padding-left: calc(8px / 2); }\n  :host .tile .tile-header .tile-favorite {\n      cursor: pointer; }\n  :host .tile .tile-header .tile-favorite > i:hover::before {\n        color: #707070;\n        content: \"\\f005\"; }\n  :host .tile .tile-content {\n    display: flex;\n    flex-direction: column;\n    cursor: pointer;\n    height: calc(calc(8px * 4) + calc(8px * 4) / 2);\n    justify-content: center;\n    width: 100%; }\n  :host .tile .tile-context {\n    display: flex;\n    flex-direction: row;\n    line-height: 1;\n    max-height: calc(8px * 2);\n    min-height: calc(8px * 2);\n    padding: 0 calc(8px / 2); }\n  :host .tile .tile-context > span {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      max-width: 100%; }\n  :host .tile:hover .tile-remove,\n:host .tile:focus .tile-remove {\n  opacity: 1;\n  transition-delay: 500ms; }\n  :host .tile-remove {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: linear-gradient(to left, #fafafa 60%, transparent);\n  border-top-right-radius: 4px;\n  color: rgba(90, 90, 90, 0.7);\n  cursor: pointer;\n  height: calc(8px * 4);\n  justify-content: flex-end;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  width: 2.5rem;\n  transition: opacity 150ms; }\n  :host .tile-remove:hover, :host .tile-remove:focus {\n    opacity: 1;\n    transition: none; }\n  :host .tile-remove:hover > i {\n    color: #5a5a5a; }\n  :host .tile-remove:active > i {\n    color: #4285f4; }\n  :host .tile-remove > i {\n    font-size: 1.125rem;\n    padding-right: calc(8px / 2); }\n  :host .tile-empty {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  margin: 8px;\n  width: calc(100% / 6 - 8px * 2);\n  border: 1px dashed #595959;\n  color: #595959;\n  cursor: default;\n  height: calc(calc(8px * 4) + calc(calc(8px * 4) + calc(8px * 4) / 2));\n  padding: 8px;\n  text-align: center; }\n  @media screen and (max-width: 1280px) {\n    :host .tile-empty {\n      width: calc(100% / 3 - 8px * 2); } }\n  :host .tile-empty .favorite-icon {\n    color: #01579b; }\n  :host .favorites-tip {\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n  color: #707070;\n  cursor: default;\n  font-size: 0.6875rem;\n  justify-content: center;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ob21lL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vaG9tZS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiLCJzcmMvYXBwL21haW4vaG9tZS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBRUksNEJBQTRCO0VBQzVCLDRDQUFnRTtFQUNoRSxrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwwQkFBdUM7RUFDdkMsZ0JDOEJnQixFQUFBO0VEdENwQjtJQVdNLGdCQUFnQixFQUFBO0VBWHRCO01BY1EsY0FBYztNQUNkLGdDQUErRCxFQUFBO0VBZnZFO01BbUJRLFdDT1U7TUROVixrQkFBa0I7TUFDbEIsVUNLVTtNREpWLGlCQUFpQjtNQUNqQixXQXRDOEIsRUFBQTtFQWV0QztFRUFFLGFBQWE7RUFDYixzQkFBc0I7RUY4QnBCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7RUFqQzNCO0lBb0NNLFlBQVksRUFBQTtFQXBDbEI7SUF3Q00sZ0JBQWdCO0lBQ2hCLFlBQVksRUFBQTtFQXpDbEI7RUVLRSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7RUZOckI7RUFWRSw0QkFBb0M7RUFDcEMsa0JDNEJpQjtFRDNCakIsV0NrQ2dCO0VEakNoQiwrQkFBNEM7RUEyRDFDLDBFQUEwRTtFQUMxRSxrQkFBa0I7RUFFbEIsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQix3REFBd0QsRUFBQTtFQTlEMUQ7SUFLRjtNQUpJLCtCQUE0QyxFQUFBLEVBMkg3QztFQXZISDtJQTZETSx5RUFBeUUsRUFBQTtFQTdEL0U7SUVLRSxhQUFhO0lBQ2IsbUJBQW1CO0lGNkRmLG1CQUFtQjtJQUNuQiwyQkNqRGE7SURrRGIsNEJDbERhO0lEbURiLG1CQUE4QjtJQUM5QixxQkFyRnlDO0lBc0Z6Qyx3QkFBcUM7SUFDckMsV0FBVyxFQUFBO0VBekVqQjtNRWlLRSxnQkFBZ0I7TUFDaEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNRnJGYixlQUFlO01BQ2YsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQiwyQkFBd0MsRUFBQTtFQWpGaEQ7TUFxRlEsZUFBZSxFQUFBO0VBckZ2QjtRQXlGWSxjQUFjO1FBQ2QsZ0JBQWdCLEVBQUE7RUExRjVCO0lFQUUsYUFBYTtJQUNiLHNCQUFzQjtJRmtHbEIsZUFBZTtJQUNmLCtDQWpIeUU7SUFrSHpFLHVCQUF1QjtJQUN2QixXQUFXLEVBQUE7RUF0R2pCO0lFS0UsYUFBYTtJQUNiLG1CQUFtQjtJRnNHZixjQUFjO0lBQ2QseUJBQXNDO0lBQ3RDLHlCQUFzQztJQUN0Qyx3QkFBcUMsRUFBQTtFQS9HM0M7TUVpS0UsZ0JBQWdCO01BQ2hCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUYvQ2IsZUFBZSxFQUFBO0VBcEh2Qjs7RUEySEksVUFBVTtFQUVWLHVCQUF1QixFQUFBO0VBN0gzQjtFRUtFLGFBQWE7RUFDYixtQkFBbUI7RUY2SGpCLG1CQUFtQjtFQUNuQiw4REFBeUU7RUFDekUsNEJDbEhlO0VEbUhmLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YscUJBdEoyQztFQXVKM0MseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFFYix5QkFBeUIsRUFBQTtFQS9JN0I7SUFtSk0sVUFBVTtJQUVWLGdCQUFnQixFQUFBO0VBckp0QjtJQXlKTSxjQUFzQixFQUFBO0VBeko1QjtJQTZKTSxjQUF3QixFQUFBO0VBN0o5QjtJQWlLTSxtQkFBbUI7SUFDbkIsNEJBQXlDLEVBQUE7RUFsSy9DO0VBVkUsNEJBQW9DO0VBQ3BDLGtCQzRCaUI7RUQzQmpCLFdDa0NnQjtFRGpDaEIsK0JBQTRDO0VBZ0wxQywwQkN4TDBCO0VEeUwxQixjQ3pMMEI7RUQwTDFCLGVBQWU7RUFDZixxRUFBOEQ7RUFDOUQsWUNuSmM7RURvSmQsa0JBQWtCLEVBQUE7RUFuTHBCO0lBS0Y7TUFKSSwrQkFBNEMsRUFBQSxFQXVMN0M7RUFuTEg7SUFpTE0sY0MvTGdCLEVBQUE7RURjdEI7RUVLRSxhQUFhO0VBQ2IsbUJBQW1CO0VGa0xqQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcblxyXG4kcmVsZWFzZS12ZXJzaW9uLWNvbnRhaW5lci13aWR0aDogOHJlbTtcclxuJHRpbGUtaGVhZGVyLWhlaWdodDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNCk7XHJcbiR0aWxlLWNvbnRlbnQtaGVpZ2h0OiBjYWxjKCN7JHRpbGUtaGVhZGVyLWhlaWdodH0gKyAjeyR0aWxlLWhlYWRlci1oZWlnaHR9IC8gMik7XHJcblxyXG5AbWl4aW4gdGlsZSgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgbWFyZ2luOiAkbWFyZ2luLXZhbHVlO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLyA2IC0gI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzIC0gI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICNob21lLWNvbXBvbmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9ob21lLWJhY2tncm91bmQuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skdG9wYmFyLWhlaWdodH0pO1xyXG4gICAgbWFyZ2luLXRvcDogJHRvcGJhci1oZWlnaHQ7XHJcblxyXG4gICAgLnBhZ2UtY29udGFpbmVyIHtcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqICN7JHJlbGVhc2UtdmVyc2lvbi1jb250YWluZXItd2lkdGh9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlbGVhc2UtdmVyc2lvbiB7XHJcbiAgICAgICAgYm90dG9tOiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB3aWR0aDogJHJlbGVhc2UtdmVyc2lvbi1jb250YWluZXItd2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2dvLWNvbnRhaW5lciB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAubG9nby1hdyB7XHJcbiAgICAgIHdpZHRoOiA0MHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubG9nby1jbGllbnQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgICB3aWR0aDogMjRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGlsZXMtY29udGFpbmVyIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcbiAgfVxyXG5cclxuICAudGlsZSB7XHJcbiAgICBAaW5jbHVkZSB0aWxlKCk7XHJcblxyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcblxyXG4gICAgJjpob3Zlcjpub3QoOmFjdGl2ZSksXHJcbiAgICAmOmZvY3VzLXdpdGhpbjpub3QoOmFjdGl2ZSkge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDNweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgfVxyXG5cclxuICAgIC50aWxlLWhlYWRlciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiAgICAgIGhlaWdodDogJHRpbGUtaGVhZGVyLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMCBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAudGlsZS10aXRsZSB7XHJcbiAgICAgICAgQGluY2x1ZGUgdGV4dC1vdmVyZmxvdy1oaWRkZW4oKTtcclxuXHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aWxlLWZhdm9yaXRlIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICYgPiBpIHtcclxuICAgICAgICAgICY6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlxcZjAwNVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aWxlLWNvbnRlbnQge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBoZWlnaHQ6ICR0aWxlLWNvbnRlbnQtaGVpZ2h0O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpbGUtY29udGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgbWF4LWhlaWdodDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICBwYWRkaW5nOiAwIGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG5cclxuICAgICAgJiA+IHNwYW4ge1xyXG4gICAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRpbGU6aG92ZXIgLnRpbGUtcmVtb3ZlLFxyXG4gIC50aWxlOmZvY3VzIC50aWxlLXJlbW92ZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG5cclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDUwMG1zO1xyXG4gIH1cclxuXHJcbiAgLnRpbGUtcmVtb3ZlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjUwLCAyNTAsIDI1MCkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBjb2xvcjogcmdiYSg5MCwgOTAsIDkwLCAwLjcpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiAkdGlsZS1oZWFkZXItaGVpZ2h0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcblxyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcztcclxuXHJcbiAgICAmOmhvdmVyLFxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIgPiBpIHtcclxuICAgICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFjdGl2ZSA+IGkge1xyXG4gICAgICBjb2xvcjogcmdiKDY2LCAxMzMsIDI0NCk7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IGkge1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aWxlLWVtcHR5IHtcclxuICAgIEBpbmNsdWRlIHRpbGUoKTtcclxuXHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggZGFzaGVkICRib3JkZXItY29sb3I7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgaGVpZ2h0OiBjYWxjKCN7JHRpbGUtaGVhZGVyLWhlaWdodH0gKyAjeyR0aWxlLWNvbnRlbnQtaGVpZ2h0fSk7XHJcbiAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5mYXZvcml0ZS1pY29uIHtcclxuICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZmF2b3JpdGVzLXRpcCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgZm9udC1zaXplOiAwLjY4NzVyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBVdGlscyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gYnV0dG9uLWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCAkY29sb3IsICRib3JkZXItY29sb3I6IG51bGwpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yO1xyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyLFxyXG4gICY6bm90KDpkaXNhYmxlZCkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogaWYoJGJvcmRlci1jb2xvciA9PSBudWxsLCAkY29sb3IsICRib3JkZXItY29sb3IpO1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgtY29sdW1uKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtcm93KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuQG1peGluIGlucHV0KCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1kaXNhYmxlZCgpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZm9jdXMoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1ob3ZlcigpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlYXJjaC1jcml0ZXJpYS1jb250YWluZXIge1xyXG4gIC5hZHZhbmNlZC1jcml0ZXJpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLWZvb3RlciB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNCk7XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgICYucmVxdWlyZWQge1xyXG4gICAgICBAaW5jbHVkZSBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCgpO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAmID4gYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1vdmVyZmxvdy1oaWRkZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHcmlkIGZvcm0gY29udHJvbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViTWVkaXVtXCI7XHJcblxyXG4gICYgPiBpbnB1dCArIHAtbWVzc2FnZSA+IC51aS1tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyNTUsIDI1NSwgMjU1KSA2MCUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAuYXctaWNvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuLFxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG5cclxuICAgICAgJi5hdy1jYWxlbmRhciAudWktaW5wdXR0ZXh0LFxyXG4gICAgICAmLmF3LWRyb3Bkb3duIC51aS1kcm9wZG93bixcclxuICAgICAgJi5hdy1pbnB1dCxcclxuICAgICAgJi5hdy10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctY2FsZW5kYXIge1xyXG4gICAgICAvLyBGSVhNRTogZml4IGFuIFVJIGlzc3VlIG9uIFByaW1lTkcgY2FsZW5kYXIgY29tcG9uZW50OyB0byByZW1vdmUgd2hlbiBpc3N1ZSB3aWxsIGJlIGZpeGVkIHVwc3RyZWFtXHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAuYXctaWNvbjpub3QoLnJlYWQtb25seS1saW5rKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IC8vIG5vbmVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wtZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW5pbXAsXHJcbiAgICAuYnRuLWV4dGVybmFsLWxpbmstd3JhcHBlcixcclxuICAgIC5idG4tY2xlYXItd3JhcHBlcixcclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlcixcclxuICAgIC5idG4tc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIge1xyXG4gICAgICAuYXctZmlsZXVwbG9hZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudWktYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTkzNFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWNsZWFyIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtcmFkaW9idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAmID4gLmF3LXJhZGlvYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDIgKiAjeyRtYXJnaW4tdmFsdWV9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jYWxlbmRhciB7XHJcbiAgJi51aS1pbnB1dHdyYXBwZXItZm9jdXMge1xyXG4gICAgLnVpLWNhbGVuZGFyIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkY2hlY2tib3gtaGVpZ2h0O1xyXG4gIHdpZHRoOiAkY2hlY2tib3gtaGVpZ2h0O1xyXG5cclxuICAudWktY2hrYm94IHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1jaGtib3gtYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZHJvcGRvd24ge1xyXG4gIC51aS1kcm9wZG93biB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1mb2N1cyB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbixcclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24ge1xyXG4gICAgICByaWdodDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDEuNzVyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5maXhlZC13aWR0aCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZpbGV1cGxvYWQge1xyXG4gIEBleHRlbmQgLmF3LWJ0bjtcclxuXHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLnVpLWZpbGV1cGxvYWQtY2hvb3NlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMCAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudWktYnV0dG9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWlucHV0KCkge1xyXG4gIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZXh0YXJlYSB7XHJcbiAgQGluY2x1ZGUgZ3JpZC1pbnB1dCgpO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAkZm9ybS1jb250cm9sLWhlaWdodDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1yYWRpb2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuICB3aWR0aDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuXHJcbiAgLnVpLXJhZGlvYnV0dG9uIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1yYWRpb2J1dHRvbi1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAudWktcmFkaW9idXR0b24taWNvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGNhbGVuZGFyLXBhbmVsIHtcclxuICAudWktZGF0ZXBpY2tlcjpub3QoLnVpLWRhdGVwaWNrZXItaW5saW5lKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkcm9wZG93bi1wYW5lbCB7XHJcbiAgLnVpLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgICAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlciAudWktZHJvcGRvd24tbGlzdCB7XHJcbiAgICAgIC51aS1kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi51aS1zdGF0ZS1oaWdobGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_menu_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/constants/menu-constants */ "./src/app/shared/constants/menu-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_app_version_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/app-version.service */ "./src/app/shared/services/app-version.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/types/generic-component */ "./src/app/shared/types/generic-component.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/main/menu/menu.service.ts");
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















var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(appVersionService, dateService, menuService, sessionService, tabService, favoriteService, loaderService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Write) || this;
        _this.appVersionService = appVersionService;
        _this.dateService = dateService;
        _this.menuService = menuService;
        _this.sessionService = sessionService;
        _this.tabService = tabService;
        _this.favoriteService = favoriteService;
        _this.loaderService = loaderService;
        _this.translateService = translateService;
        _this.favorites = [];
        _this.favoriteToOpen = undefined;
        _this.selectedMenuEntry = undefined;
        _this.selectedSubmenuEntry = undefined;
        _this.loadFavorites();
        _this.setupObservables();
        // Animations
        _this.imgState = 'hidden';
        _this.mainContainerState = 'hidden';
        _this.setupAnimations();
        return _this;
    }
    HomeComponent_1 = HomeComponent;
    HomeComponent.prototype.getComponentName = function () {
        return 'HomeComponent';
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.loaderService.hideModuleLoadingBar();
    };
    HomeComponent.prototype.isFavoriteToOpen = function (favorite) {
        if (this.favoriteToOpen) {
            if (this.favoriteToOpen.objectId) {
                return (favorite.componentId === this.favoriteToOpen.componentId && favorite.objectId === this.favoriteToOpen.objectId);
            }
            else {
                return favorite.componentId === this.favoriteToOpen.componentId;
            }
        }
        else {
            return false;
        }
    };
    HomeComponent.prototype.onClickMenuEntry = function (menuEntry) {
        if (!!this.selectedMenuEntry && menuEntry.key === this.selectedMenuEntry.key) {
            this.hideMenuOverlay();
        }
        else {
            this.displayMenuOverlay(menuEntry);
        }
    };
    HomeComponent.prototype.onHoverMenuEntry = function (menuEntry) {
        if (!!this.selectedMenuEntry && menuEntry.key !== this.selectedMenuEntry.key) {
            this.displayMenuOverlay(menuEntry);
        }
    };
    HomeComponent.prototype.openFavorite = function (favorite) {
        var componentId = favorite.componentId;
        var labelKey = 'transaction.' + componentId;
        var data = {
            id: this.tabService.generateId(),
            componentId: componentId,
            objectId: favorite.objectId,
            openMode: !!favorite.objectId ? _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Read : _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ComponentOpenMode"].Write
        };
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    HomeComponent.prototype.removeFavorite = function (favorite) {
        this.favoriteService.updateFavoriteState(true, favorite.componentId, favorite.objectId, favorite.context);
    };
    HomeComponent.prototype.toggleDefaultFavorite = function (selectedFavorite) {
        this.favorites.forEach(function (favorite) { return (favorite.shouldOpenAtStartup = false); });
        if (!!this.favoriteToOpen &&
            this.favoriteToOpen.componentId === selectedFavorite.componentId &&
            this.favoriteToOpen.objectId === selectedFavorite.objectId) {
            this.removeDefaultFavorite(selectedFavorite);
        }
        else {
            this.setDefaultFavorite(selectedFavorite);
        }
    };
    HomeComponent.prototype.displayMenuOverlay = function (menuEntry) {
        this.selectedMenuEntry = menuEntry;
        this.imgState = 'hidden';
    };
    HomeComponent.prototype.formatFavoriteContext = function (favoriteEntry) {
        if (!!favoriteEntry.context) {
            this.translateService.get(favoriteEntry.context).subscribe(function (translatedValue) {
                favoriteEntry.formattedContext = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(translatedValue)
                    ? favoriteEntry.context
                    : translatedValue;
            });
        }
    };
    HomeComponent.prototype.getLogoUri = function (favoriteEntry) {
        var mainMenu = _shared_constants_menu_constants__WEBPACK_IMPORTED_MODULE_4__["MenuConstants"].COMPONENTS_ROOT[favoriteEntry.componentId];
        switch (mainMenu) {
            case _shared_constants_menu_constants__WEBPACK_IMPORTED_MODULE_4__["MenuConstants"].MENU_ADMINISTRATION:
                return HomeComponent_1.administrationLogoUri;
            case _shared_constants_menu_constants__WEBPACK_IMPORTED_MODULE_4__["MenuConstants"].MENU_COLLABORATIVE_COCKPIT:
                return HomeComponent_1.collaborativeCockpitLogoUri;
            case _shared_constants_menu_constants__WEBPACK_IMPORTED_MODULE_4__["MenuConstants"].MENU_ENGINEERING_DATA:
                return HomeComponent_1.engineeringDataLogoUri;
            case _shared_constants_menu_constants__WEBPACK_IMPORTED_MODULE_4__["MenuConstants"].MENU_FLEET_MANAGEMENT:
                return HomeComponent_1.fleetManagementLogoUri;
            case _shared_constants_menu_constants__WEBPACK_IMPORTED_MODULE_4__["MenuConstants"].MENU_FLIGHT_OPERATIONS:
                return HomeComponent_1.flightOperationLogoUri;
            case _shared_constants_menu_constants__WEBPACK_IMPORTED_MODULE_4__["MenuConstants"].MENU_HUMAN_RESOURCES:
                return HomeComponent_1.humanResourcesLogoUri;
            case _shared_constants_menu_constants__WEBPACK_IMPORTED_MODULE_4__["MenuConstants"].MENU_LOGISTICS:
                return HomeComponent_1.logisticsLogoUri;
            case _shared_constants_menu_constants__WEBPACK_IMPORTED_MODULE_4__["MenuConstants"].MENU_MAINTENANCE:
                return HomeComponent_1.maintenanceLogoUri;
            default:
                return undefined;
        }
    };
    HomeComponent.prototype.hideMenuOverlay = function () {
        this.selectedMenuEntry = undefined;
        this.imgState = 'visible';
    };
    HomeComponent.prototype.loadFavorites = function () {
        var _this = this;
        this.favoriteService.favorites().subscribe(function (results) {
            _this.favorites = !!results ? results : [];
            _this.favorites = _this.favorites.map(function (favorite) {
                _this.formatFavoriteContext(favorite);
                favorite.img = _this.getLogoUri(favorite);
                return favorite;
            });
            _this.selectFavoriteToOpen();
        });
    };
    HomeComponent.prototype.removeDefaultFavorite = function (favorite) {
        var _this = this;
        this.favoriteService.removeDefaultFavorite().subscribe(function () {
            favorite.shouldOpenAtStartup = false;
            _this.favoriteToOpen = undefined;
        });
    };
    HomeComponent.prototype.selectFavoriteToOpen = function () {
        var _this = this;
        this.favoriteService.getDefaultFavorite().subscribe(function (result) {
            if (!!result) {
                var selectedDefaultFavorite = _this.favorites.find(function (favorite) {
                    return favorite.componentId === result.componentId && favorite.objectId === result.objectId;
                });
                if (!!selectedDefaultFavorite) {
                    selectedDefaultFavorite.shouldOpenAtStartup = true;
                    _this.favoriteToOpen = selectedDefaultFavorite;
                    _this.openFavorite(_this.favoriteToOpen);
                }
            }
        });
    };
    HomeComponent.prototype.setDefaultFavorite = function (favorite) {
        var _this = this;
        this.favoriteService.setDefaultFavorite(favorite).subscribe(function () {
            favorite.shouldOpenAtStartup = true;
            _this.favoriteToOpen = favorite;
        });
    };
    HomeComponent.prototype.setupAnimations = function () {
        var _this = this;
        setTimeout(function () {
            _this.imgState = 'visible';
        }, HomeComponent_1.IMG_STATE_TIMEOUT);
        setTimeout(function () {
            _this.mainContainerState = 'visible';
        }, HomeComponent_1.MAIN_CONTAINER_STATE_TIMEOUT);
    };
    HomeComponent.prototype.setupObservables = function () {
        var _this = this;
        this.favoriteService.favoriteAdded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(function (result) {
            _this.formatFavoriteContext(result);
            result.img = _this.getLogoUri(result);
            _this.favorites = __spread(_this.favorites, [result]);
            _this.favoriteService.confirmFavoriteUpdate(_this.favoriteService.toString(result));
        }, function (result) {
            _this.favoriteService.reportFavoriteErrorUpdate(_this.favoriteService.toString(result));
        });
        this.favoriteService.favoriteRemoved$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(function (result) {
            _this.favorites = _this.favorites.filter(function (favorite) {
                return !(favorite.componentId === result.componentId &&
                    ((_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(favorite.objectId) && _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(result.objectId)) ||
                        favorite.objectId === result.objectId));
            });
            if (!!_this.favoriteToOpen &&
                _this.favoriteToOpen.componentId === result.componentId &&
                ((_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(_this.favoriteToOpen.objectId) && _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(result.objectId)) ||
                    _this.favoriteToOpen.objectId === result.objectId)) {
                _this.removeDefaultFavorite(result);
            }
            _this.favoriteService.confirmFavoriteUpdate(_this.favoriteService.toString(result));
        }, function (result) {
            _this.favoriteService.reportFavoriteErrorUpdate(_this.favoriteService.toString(result));
        });
    };
    var HomeComponent_1;
    HomeComponent.IMG_STATE_TIMEOUT = 500;
    HomeComponent.MAIN_CONTAINER_STATE_TIMEOUT = 250;
    HomeComponent.administrationLogoUri = 'assets/img/menu-administration.svg';
    HomeComponent.collaborativeCockpitLogoUri = 'assets/img/menu-collaborative-cockpit.svg';
    HomeComponent.engineeringDataLogoUri = 'assets/img/menu-engineering-data.svg';
    HomeComponent.fleetManagementLogoUri = 'assets/img/menu-fleet-management.svg';
    HomeComponent.flightOperationLogoUri = 'assets/img/menu-flight-operations.svg';
    HomeComponent.humanResourcesLogoUri = 'assets/img/menu-human-resources.svg';
    HomeComponent.logisticsLogoUri = 'assets/img/menu-logistics.svg';
    HomeComponent.maintenanceLogoUri = 'assets/img/menu-maintenance.svg';
    HomeComponent = HomeComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('imgState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        display: 'none',
                        opacity: '0'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: '1'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hidden => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1000ms ease-in')])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('mainContainerState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: '0'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: '1'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hidden => visible', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1000ms')])
                ])
            ],
            selector: 'aw-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/main/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_app_version_service__WEBPACK_IMPORTED_MODULE_6__["AppVersionService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"],
            _menu_menu_service__WEBPACK_IMPORTED_MODULE_14__["MenuService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__["TabService"],
            _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_8__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], HomeComponent);
    return HomeComponent;
}(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_12__["GenericComponent"]));



/***/ }),

/***/ "./src/app/main/home/home.module.ts":
/*!******************************************!*\
  !*** ./src/app/main/home/home.module.ts ***!
  \******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/main/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/******************************************************************************
 * Components
 *************************************************************************** */
var DYNAMIC_COMPONENTS = [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: DYNAMIC_COMPONENTS,
            imports: [_shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_1__["AngularCommonSharedModule"], _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonSharedModule"], _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_3__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map