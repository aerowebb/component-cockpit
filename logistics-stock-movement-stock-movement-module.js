(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-stock-movement-stock-movement-module"],{

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

/***/ "./src/app/main/logistics/stock-movement/form/stock-movement-form.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movement/form/stock-movement-form.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ formInfo.bidtStockMvtName | translate }}\r\n      </h2>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div class=\"page-subtitle\">- {{ formInfo.number }}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"object-status\" *ngIf=\"formInfo.status\">\r\n      {{ formInfo.status }}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <mat-tab-group animationDuration=\"0ms\" dynamicHeight>\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ \"home\" | translate }}\r\n        </ng-template>\r\n\r\n        <div class=\"grid-row\">\r\n          <div class=\"grid-cell--6\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ \"page.mainData\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content  grid-cell-content-with-section\">\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".number\" | translate }}</label>\r\n                    <div class=\"form-control\">\r\n                      <div class=\"space\">\r\n                        <a class=\"link\">\r\n                          {{ formInfo.number }}\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".toRealizeThe\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <div class=\"space\">\r\n                        <span class=\"link\">\r\n                          {{ formInfo.toRealizeThe | date: \"yyyy/MM/dd\" }}\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".executionDate\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"formInfo.executionDate\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"section margin-class\">\r\n                  <h4 class=\"section-title\">{{ getComponentName() + \".documentReference\" | translate }}</h4>\r\n                  <div class=\"section-content\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".number\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <div class=\"space\">\r\n                            <a class=\"link\">\r\n                              {{ formInfo.docNumber }}\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".type\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"formInfo.docType\" />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".critical\" | translate }}</label>\r\n                        <div\r\n                          class=\"form-control alert\"\r\n                          [ngClass]=\"{\r\n                            'procurement--ok':\r\n                              formInfo.criticality == aWPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE,\r\n                            'procurement--warning':\r\n                              formInfo.criticality == aWPropertiesConstants.LOGISTICAL_CRITICALITY_URGENT,\r\n                            'procurement--nok':\r\n                              formInfo.criticality == aWPropertiesConstants.LOGISTICAL_CRITICALITY_IMMEDIATE\r\n                          }\"\r\n                        >\r\n                          <p-dropdown\r\n                            class=\"aw-dropdown fixed-width\"\r\n                            [options]=\"procurementRequestCriticities\"\r\n                            placeholder=\"&nbsp;\"\r\n                            [showClear]=\"true\"\r\n                            [(ngModel)]=\"formInfo.criticality\"\r\n                            disabled\r\n                          ></p-dropdown>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"grid-cell--6\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".location\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content  grid-cell-content-with-section\">\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".site\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"formInfo.site\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ getComponentName() + \".warehouse\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"formInfo.warehouse\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell--12 custom-padding\">\r\n                  <div class=\"grid-cell--6 custom-padding\">\r\n                    <div class=\"section\">\r\n                      <h4 class=\"section-title\">{{ getComponentName() + \".outboundLocalisation\" | translate }}</h4>\r\n                      <div class=\"section-content\">\r\n                        <div class=\"row\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{ getComponentName() + \".zone\" | translate }}</label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"formInfo.outZone\" />\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{ getComponentName() + \".emplacement\" | translate }}</label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"formInfo.outEmplacement\" />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">&nbsp;</label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <i\r\n                                *ngIf=\"formInfo.bidtStockMvtType?.smtWay === bidtStockMvtConstants.MVT_WAY_CREDIT\"\r\n                                class=\"fa fa-fw fa-search fa-arrow-right custom-width procurement-type--in\"\r\n                                aria-hidden=\"true\"\r\n                              ></i>\r\n                              <i\r\n                                *ngIf=\"formInfo.bidtStockMvtType?.smtWay === bidtStockMvtConstants.MVT_WAY_DEBIT\"\r\n                                class=\"fa fa-fw fa-search fa-arrow-right custom-width procurement-type--out\"\r\n                                aria-hidden=\"true\"\r\n                              ></i>\r\n                              <i\r\n                                *ngIf=\"formInfo.bidtStockMvtType?.smtWay === bidtStockMvtConstants.MVT_WAY_TRANSFER\"\r\n                                class=\"fa fa-fw fa-search fa-arrow-right  custom-width procurement-type--transfer\"\r\n                                aria-hidden=\"true\"\r\n                              ></i>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"grid-cell--4\">\r\n                    <div class=\"section\">\r\n                      <h4 class=\"section-title\">{{ getComponentName() + \".inboundLocalisation\" | translate }}</h4>\r\n                      <div class=\"section-content\">\r\n                        <div class=\"row\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{ getComponentName() + \".zone\" | translate }}</label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"formInfo.zone\" />\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label class=\"form-label\">{{ getComponentName() + \".emplacement\" | translate }}</label>\r\n\r\n                            <div class=\"form-control\">\r\n                              <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"formInfo.emplacement\" />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"grid-cell--6\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".asset\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content  grid-cell-content-with-section\">\r\n                <div class=\"section\">\r\n                  <div class=\"section-content\">\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".article\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <div class=\"space\">\r\n                            <a class=\"link\">\r\n                              {{ formInfo.article }}\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".designation\" | translate }}</label>\r\n                        <div class=\"form-control\">\r\n                          <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"formInfo.articleDesignation\" />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".type\" | translate }}</label>\r\n                        <div class=\"form-control\">\r\n                          <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"formInfo.materialType\" />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <!----row2-->\r\n                    <div class=\"row\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".packagingBatch\" | translate }}</label>\r\n                        <div class=\"form-control custom-anchor\">\r\n                          <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"formInfo.batchNumber\" />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".snOrLot\" | translate }}</label>\r\n                        <div class=\"form-control custom-anchor\">\r\n                          <a>{{ formInfo.snOrLot }}</a>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label class=\"form-label\">{{ getComponentName() + \".qty\" | translate }}</label>\r\n\r\n                        <div class=\"form-control\">\r\n                          <input class=\"aw-input\" type=\"text\" disabled [(ngModel)]=\"formInfo.qty\" />\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"grid-cell--6\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".operations\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content\">\r\n                <a-table [dataSource]=\"operationTableDataSource\"> </a-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ \"documents\" | translate }}\r\n        </ng-template>\r\n\r\n        <div class=\"grid-row\">\r\n          <div class=\"grid-cell--12\">\r\n            <div class=\"grid-cell grid-cell--container\">\r\n              <div class=\"grid-cell-header\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    {{ getComponentName() + \".documents\" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-cell-content\">\r\n                <a-table [dataSource]=\"documentsTableDataSource\"> </a-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/stock-movement/form/stock-movement-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movement/form/stock-movement-form.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .procurement-type--in {\n  color: #4caf50;\n  -webkit-transform: rotate(320deg);\n          transform: rotate(320deg); }\n\n:host .procurement-type--out {\n  color: #f6685e;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n:host .procurement-type--transfer {\n  color: #006ea9; }\n\n:host .space {\n  padding-top: 8px; }\n\n:host .link {\n  cursor: pointer; }\n\n:host .custom-width {\n  width: 6em !important; }\n\n:host .custom-padding {\n  padding-left: 1px !important; }\n\n:host .alert {\n  display: inline-block;\n  width: 50%; }\n\n:host .procurement--nok {\n  background-color: #f6685e; }\n\n:host .procurement--ok {\n  background-color: #4caf50; }\n\n:host .procurement--warning {\n  background-color: #ffc107; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stbW92ZW1lbnQvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXHN0b2NrLW1vdmVtZW50XFxmb3JtXFxzdG9jay1tb3ZlbWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1tb3ZlbWVudC9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGNDaUJrQjtFRGhCbEIsaUNBQXlCO1VBQXpCLHlCQUF5QixFQUFBOztBQUg3QjtFQU9JLGNDZWdCO0VEZGhCLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTs7QUFSNUI7RUFZSSxjQ1lnQixFQUFBOztBRHhCcEI7RUFnQkksZ0JBQWdCLEVBQUE7O0FBaEJwQjtFQW9CSSxlQUFlLEVBQUE7O0FBcEJuQjtFQXdCSSxxQkFBcUIsRUFBQTs7QUF4QnpCO0VBNEJJLDRCQUE0QixFQUFBOztBQTVCaEM7RUFnQ0kscUJBQXFCO0VBQ3JCLFVBQVUsRUFBQTs7QUFqQ2Q7RUFxQ0kseUJDZmdCLEVBQUE7O0FEdEJwQjtFQXlDSSx5QkN0QmtCLEVBQUE7O0FEbkJ0QjtFQTZDSSx5QkN6QlksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3N0b2NrLW1vdmVtZW50L2Zvcm0vc3RvY2stbW92ZW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuXHJcbjpob3N0IHtcclxuICAucHJvY3VyZW1lbnQtdHlwZS0taW4ge1xyXG4gICAgY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjBkZWcpO1xyXG4gIH1cclxuXHJcbiAgLnByb2N1cmVtZW50LXR5cGUtLW91dCB7XHJcbiAgICBjb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG5cclxuICAucHJvY3VyZW1lbnQtdHlwZS0tdHJhbnNmZXIge1xyXG4gICAgY29sb3I6ICRibHVlLWRhcmsxO1xyXG4gIH1cclxuXHJcbiAgLnNwYWNlIHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgfVxyXG5cclxuICAubGluayB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXdpZHRoIHtcclxuICAgIHdpZHRoOiA2ZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmFsZXJ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAucHJvY3VyZW1lbnQtLW5vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICB9XHJcblxyXG4gIC5wcm9jdXJlbWVudC0tb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICB9XHJcblxyXG4gIC5wcm9jdXJlbWVudC0td2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/main/logistics/stock-movement/form/stock-movement-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movement/form/stock-movement-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: StockMovementFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMovementFormComponent", function() { return StockMovementFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../..//shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/bidt-stock-mvt-constants */ "./src/app/shared/constants/bidt-stock-mvt-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/pipes/extract-translation.pipe */ "./src/app/shared/pipes/extract-translation.pipe.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/utils/logistic-utils */ "./src/app/shared/utils/logistic-utils.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
/* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../logistics.service */ "./src/app/main/logistics/logistics.service.ts");
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





















var StockMovementFormComponent = /** @class */ (function (_super) {
    __extends(StockMovementFormComponent, _super);
    function StockMovementFormComponent(favoriteService, loaderService, messageService, serializationService, logisticsService, propertiesService, extractTranslationPipe, tabService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.logisticsService = logisticsService;
        _this.propertiesService = propertiesService;
        _this.extractTranslationPipe = extractTranslationPipe;
        _this.bidtStockMvtConstants = _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_5__["BidtStockMvtConstants"];
        _this.aWPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"];
        _this.init();
        return _this;
    }
    // ////////////////////////////////////////////////////////////////////////////
    StockMovementFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__["ComponentConstants"].LOG_STOCK_MOVEMENT_FORM;
    };
    // ////////////////////////////////////////////////////////////////////////////
    StockMovementFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var componentData = this.componentData.objectId
            ? this.serializationService.deserialize(this.componentData.objectId)
            : {};
        var mvtStatusMap = this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__["GenericPropertyConstants"].MVT_STATUS_MAP);
        var pnTypeMap = this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__["GenericPropertyConstants"].PN_TYPE_MAP);
        var criticities = this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_7__["GenericPropertyConstants"].LOGISTICAL_CRITICALITY_MAP);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({ pnTypeMap: pnTypeMap, mvtStatusMap: mvtStatusMap, criticities: criticities }).subscribe({
            next: function (results) {
                _this.pnTypeList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_2__["ListUtils"].orEmpty(results.pnTypeMap);
                _this.procurementRequestCriticities = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_2__["ListUtils"].orEmpty(results.criticities);
                _this.procurementRequestCriticities = _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_18__["LogisticalUtils"].sortCriticities(_this.procurementRequestCriticities);
                _this.movementsStatusMap =
                    !!results && results.mvtStatusMap ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_19__["SelectItemUtils"].fromLabelValues(results.mvtStatusMap) : [];
                _this.setPageInfo(componentData);
                _this.getDocumentData(componentData);
            }
        });
    };
    StockMovementFormComponent.prototype.init = function () {
        this.formInfo = {};
        this.initMovementTableDataSource();
        this.initOperationTableDataSource();
    };
    // /**********************************
    //  * TABLE init
    //  **********************************/
    StockMovementFormComponent.prototype.initMovementTableDataSource = function () {
        this.documentsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'documentNumber',
                    translateKey: this.getTranslateKey('documentNumber')
                },
                {
                    field: 'docComment',
                    translateKey: this.getTranslateKey('docComment')
                },
                {
                    field: 'docTye',
                    translateKey: this.getTranslateKey('docTye')
                },
                {
                    field: 'docExtension',
                    translateKey: this.getTranslateKey('docExtension')
                },
                {
                    field: 'cut',
                    translateKey: this.getTranslateKey('cut')
                },
                {
                    field: 'docDate',
                    translateKey: this.getTranslateKey('docDate')
                }
            ],
            data: []
        });
    };
    StockMovementFormComponent.prototype.initOperationTableDataSource = function () {
        this.operationTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"]({
            enableSelection: false,
            columns: [
                {
                    field: 'smoCode',
                    translateKey: this.getTranslateKey('smoCode')
                },
                {
                    field: 'designation',
                    translateKey: this.getTranslateKey('designation')
                }
            ],
            data: []
        });
    };
    StockMovementFormComponent.prototype.getDocumentData = function (inputData) {
        var _this = this;
        if (inputData && inputData.id) {
            this.logisticsService.findDocumentByDeliveryFolderId(inputData.id).subscribe(function (response) {
                if (response && response.length) {
                    response.forEach(function (element) {
                        var documentArray = {
                            documentNumber: element.documentCode,
                            docComment: element.documentDescription,
                            docTye: element.documentType,
                            docExtension: _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_17__["FileUtils"].getExtension(element.documentName).toUpperCase(),
                            docDate: element.statusDate,
                            cut: element.documentCategory
                        };
                        _this.documentsTableDataSource.addData([documentArray]);
                    });
                }
            });
        }
    };
    StockMovementFormComponent.prototype.setPageInfo = function (inputData) {
        var _this = this;
        var inputArray = {
            stockMvtList: [inputData]
        };
        this.logisticsService.findBidtStockMvtForm(inputArray).subscribe({
            next: function (stockMovements) {
                if (stockMovements && stockMovements.length) {
                    var stockMovementObject = stockMovements[0];
                    _this.formInfo = {
                        number: stockMovementObject.stockMvt.stockMvtCode,
                        docNumber: stockMovementObject.procurementRequest
                            ? stockMovementObject.procurementRequest.procCode
                            : stockMovementObject.transferOrder
                                ? stockMovementObject.transferOrder.torCode
                                : stockMovementObject.deliveryFolder
                                    ? stockMovementObject.deliveryFolder.dfCode
                                    : undefined,
                        docType: stockMovementObject.procurementRequest
                            ? stockMovementObject.procurementRequest.procType
                            : undefined,
                        status: stockMovementObject.stockMvt.mvtStatus
                            ? _this.getMvtStockStatus(stockMovementObject.stockMvt.mvtStatus).label
                            : '',
                        site: stockMovementObject.finalSite
                            ? stockMovementObject.finalSite.siteCode + " - " + stockMovementObject.finalSite.siteName
                            : undefined,
                        warehouse: stockMovementObject.finalWarehouse
                            ? stockMovementObject.finalWarehouse.whCode + " - " + stockMovementObject.finalWarehouse.whName
                            : undefined,
                        article: stockMovementObject.stockMvt.birePnPnCode
                            ? stockMovementObject.stockMvt.birePnPnCode
                            : stockMovementObject.equipment
                                ? stockMovementObject.equipment.pnCode
                                : undefined,
                        snOrLot: stockMovementObject.stockMvt.stockMvtSn
                            ? stockMovementObject.stockMvt.stockMvtSn
                            : stockMovementObject.equipment
                                ? stockMovementObject.equipment.sn
                                : undefined,
                        qty: stockMovementObject.stockMvt.stockMvtQuantity
                            ? parseInt(stockMovementObject.stockMvt.stockMvtQuantity, 10)
                            : stockMovementObject.equipment && stockMovementObject.equipment.quantity
                                ? stockMovementObject.equipment.quantity
                                : undefined,
                        zone: stockMovementObject.stockMvt.bidtStorageBinZoneIssue
                            ? stockMovementObject.stockMvt.bidtStorageBinZoneIssue.sbNumber
                            : '',
                        emplacement: stockMovementObject.stockMvt.bidtStorageBinBinReceipt
                            ? stockMovementObject.stockMvt.bidtStorageBinBinReceipt.sbLocalisation
                            : '',
                        outZone: stockMovementObject.stockMvt.bidtStorageBinZoneReceipt
                            ? stockMovementObject.stockMvt.bidtStorageBinZoneReceipt.sbNumber
                            : '',
                        outEmplacement: stockMovementObject.stockMvt.bidtStorageBinZoneReceipt
                            ? stockMovementObject.stockMvt.bidtStorageBinZoneReceipt.sbLocalisation
                            : '',
                        toRealizeThe: stockMovementObject.stockMvt.stockMvtPlannedDate,
                        executionDate: stockMovementObject.stockMvt.stockMvtDate,
                        bidtStockMvtType: stockMovementObject.stockMvt.bidtStockMvtType,
                        batchNumber: stockMovementObject.stockMvt.stockMvtBatchNumber,
                        criticality: stockMovementObject.procurementRequest && stockMovementObject.procurementRequest.criticality,
                        materialType: stockMovementObject.procurementRequest &&
                            stockMovementObject.procurementRequest.bidtProcReqItems &&
                            stockMovementObject.procurementRequest.bidtProcReqItems.length
                            ? _this.getPnType(stockMovementObject.procurementRequest.bidtProcReqItems[0].birePn || {})
                            : '',
                        articleDesignation: stockMovementObject.procurementRequest &&
                            stockMovementObject.procurementRequest.bidtProcReqItems &&
                            stockMovementObject.procurementRequest.bidtProcReqItems.length &&
                            stockMovementObject.procurementRequest.bidtProcReqItems[0].birePn
                            ? stockMovementObject.procurementRequest.bidtProcReqItems[0].birePn.articleDesignation
                            : stockMovementObject.stockMvt.birePnArticleDesignation
                                ? stockMovementObject.stockMvt.birePnArticleDesignation
                                : '',
                        bidtStockMvtName: stockMovementObject.stockMvt.bidtStockMvtType
                            ? _this.extractTranslationPipe.transform(stockMovementObject.stockMvt.bidtStockMvtType.smtName)
                            : ''
                    };
                    if (stockMovementObject.stockMvt &&
                        stockMovementObject.stockMvt.bidtStockMvtOperations &&
                        stockMovementObject.stockMvt.bidtStockMvtOperations.length) {
                        _this.setOperationDataTable(stockMovementObject.stockMvt.bidtStockMvtOperations);
                    }
                }
            }
        });
    };
    StockMovementFormComponent.prototype.getPnType = function (obj) {
        var birePnDTO = obj;
        var pnType = '';
        this.pnTypeList.forEach(function (element) {
            if (birePnDTO.pnType && birePnDTO.pnType === element.value) {
                pnType = element.label;
            }
        });
        return pnType;
    };
    StockMovementFormComponent.prototype.setOperationDataTable = function (operationsTableData) {
        var _this = this;
        operationsTableData.forEach(function (element) {
            var stockMvtOperationObject = {
                smoCode: parseInt(element.smoCode || '0', 10),
                designation: element.smoDesignation
            };
            _this.operationTableDataSource.addData([stockMvtOperationObject]);
        });
    };
    StockMovementFormComponent.prototype.getMvtStockStatus = function (key) {
        return this.movementsStatusMap.filter(function (status) { return status.value === key; })[0];
    };
    StockMovementFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-stock-movement',
            template: __webpack_require__(/*! ./stock-movement-form.component.html */ "./src/app/main/logistics/stock-movement/form/stock-movement-form.component.html"),
            styles: [__webpack_require__(/*! ./stock-movement-form.component.scss */ "./src/app/main/logistics/stock-movement/form/stock-movement-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_11__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_12__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_14__["SerializationService"],
            _logistics_service__WEBPACK_IMPORTED_MODULE_20__["LogisticsService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_13__["PropertiesService"],
            _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_9__["ExtractTranslationPipe"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_15__["TabService"]])
    ], StockMovementFormComponent);
    return StockMovementFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_16__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-movement/stock-movement.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movement/stock-movement.module.ts ***!
  \************************************************************************/
/*! exports provided: StockMovementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMovementModule", function() { return StockMovementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_stock_movement_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/stock-movement-form.component */ "./src/app/main/logistics/stock-movement/form/stock-movement-form.component.ts");
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
var INTERNAL_MODULES = [_shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_5__["TableModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__["DropdownModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var DYNAMIC_COMPONENTS = [_form_stock_movement_form_component__WEBPACK_IMPORTED_MODULE_7__["StockMovementFormComponent"]];
var StockMovementModule = /** @class */ (function () {
    function StockMovementModule() {
    }
    StockMovementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_6__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], INTERNAL_MODULES)
        })
    ], StockMovementModule);
    return StockMovementModule;
}());



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

/***/ "./src/app/shared/utils/logistic-utils.ts":
/*!************************************************!*\
  !*** ./src/app/shared/utils/logistic-utils.ts ***!
  \************************************************/
/*! exports provided: LogisticalUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticalUtils", function() { return LogisticalUtils; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/bidt-stock-mvt-constants */ "./src/app/shared/constants/bidt-stock-mvt-constants.ts");
/* harmony import */ var _list_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _number_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number-utils */ "./src/app/shared/utils/number-utils.ts");
/* harmony import */ var _string_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./string-utils */ "./src/app/shared/utils/string-utils.ts");






var LogisticalUtils = /** @class */ (function () {
    function LogisticalUtils() {
    }
    LogisticalUtils.sortCriticities = function (criticities) {
        return criticities.sort(function (c1, _c2) {
            if (c1.value === _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].LOGISTICAL_CRITICALITY_ROUTINE) {
                return -1;
            }
            else if (c1.value === _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].LOGISTICAL_CRITICALITY_IMMEDIATE) {
                return 1;
            }
            return 0;
        });
    };
    LogisticalUtils.getServedIndicators = function (procurementRequest) {
        if (procurementRequest.bidtWarehouseReceipt && procurementRequest.bidtWarehouseReceipt.whCategory) {
            var procurementRequestItems = this.buildProcurementRequestItemsRows(procurementRequest);
            return this.computeProcurementRequestProgress(procurementRequestItems);
        }
        else {
            return undefined;
        }
    };
    LogisticalUtils.buildProcurementRequestItemsRows = function (procurementRequest) {
        var _this = this;
        return _list_utils__WEBPACK_IMPORTED_MODULE_3__["ListUtils"].orEmpty(procurementRequest.bidtProcReqItems)
            .map(function (bidtProcReqItem) { return _this.buildProcurementRequestItemRow(bidtProcReqItem); })
            .sort(function (x, y) {
            if (x.obj.statusDate && y.obj.statusDate) {
                return moment__WEBPACK_IMPORTED_MODULE_0__(x.obj.statusDate).isBefore(y.obj.statusDate) ? -1 : 1;
            }
            else if (x.obj.statusDate) {
                return -1;
            }
            else {
                return 1;
            }
        });
    };
    LogisticalUtils.buildProcurementRequestItemRow = function (procurementRequestItem) {
        var progress = this.computeProcurementRequestItemProgress(procurementRequestItem.workshopEntries, procurementRequestItem.requestedQuantity);
        return {
            obj: procurementRequestItem,
            allNb: progress.allNb,
            servedNb: progress.servedNb,
            bookedNb: progress.bookedNb,
            notBookedNb: progress.notBookedNb,
            warehouseName: undefined,
            siteName: undefined
        };
    };
    LogisticalUtils.computeProcurementRequestReverseItemProgress = function (stockMvts) {
        var filteredStockMvts = _list_utils__WEBPACK_IMPORTED_MODULE_3__["ListUtils"].orEmpty(stockMvts).filter(function (stockMvt) { return stockMvt.stockMvtWay === _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__["BidtStockMvtConstants"].MVT_WAY_CREDIT; });
        var reversedStockMvts = filteredStockMvts.filter(function (stockMvt) { return stockMvt.mvtStatus === _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY; });
        var allNb = filteredStockMvts
            .map(function (stockMvt) { return (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0); })
            .reduce(function (acc, x) { return acc + x; }, 0);
        var reversedNb = reversedStockMvts
            .map(function (stockMvt) { return (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0); })
            .reduce(function (acc, x) { return acc + x; }, 0);
        var notReversedNb = allNb - reversedNb;
        return { allNb: allNb, reversedNb: reversedNb, notReversedNb: notReversedNb };
    };
    LogisticalUtils.computeProcurementRequestItemProgress = function (stockMvts, requestedQuantity) {
        var filteredStockMvts = _list_utils__WEBPACK_IMPORTED_MODULE_3__["ListUtils"].orEmpty(stockMvts).filter(function (stockMvt) { return stockMvt.stockMvtWay === _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__["BidtStockMvtConstants"].MVT_WAY_CREDIT; });
        var servedStockMvts = filteredStockMvts.filter(function (stockMvt) { return stockMvt.mvtStatus === _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY; });
        var servedNb = servedStockMvts
            .map(function (stockMvt) { return (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0); })
            .reduce(function (acc, x) { return acc + x; }, 0);
        var bookedNb = filteredStockMvts
            .filter(function (stockMvt) {
            return stockMvt.mvtStatus !== _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY &&
                stockMvt.mvtStatus !== _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].MM_MVT_STATUS_CANCELED_KEY &&
                (!_string_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].isNullOrEmpty(stockMvt.stockMvtSn) || !_string_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].isNullOrEmpty(stockMvt.stockMvtBatchNumber));
        })
            .map(function (stockMvt) { return (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0); })
            .reduce(function (acc, x) { return acc + x; }, 0);
        var notServedNb = _string_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].isNullOrEmpty(requestedQuantity)
            ? 0
            : Math.max(0, _number_utils__WEBPACK_IMPORTED_MODULE_4__["NumberUtils"].fromString(requestedQuantity) - servedNb - bookedNb);
        return { allNb: filteredStockMvts.length, bookedNb: bookedNb, notBookedNb: notServedNb, servedNb: servedNb };
    };
    LogisticalUtils.computeProcurementRequestProgress = function (procurementRequestItems) {
        var procurementRequestQuantity = _list_utils__WEBPACK_IMPORTED_MODULE_3__["ListUtils"].orEmpty(procurementRequestItems)
            .map(function (e) { return e.obj.requestedQuantity; })
            .filter(function (quantity) { return !_string_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].isNullOrEmpty(quantity); })
            .map(function (quantity) { return _number_utils__WEBPACK_IMPORTED_MODULE_4__["NumberUtils"].fromString(quantity); })
            .reduce(function (acc, x) { return acc + x; }, 0);
        var procurementRequestProgress = _list_utils__WEBPACK_IMPORTED_MODULE_3__["ListUtils"].orEmpty(procurementRequestItems).reduce(function (a, b) {
            return {
                bookedNb: a.bookedNb + b.bookedNb,
                notBookedNb: a.notBookedNb + b.notBookedNb,
                servedNb: a.servedNb + b.servedNb
            };
        }, {
            bookedNb: 0,
            notBookedNb: 0,
            servedNb: 0
        });
        return {
            bookedNb: procurementRequestProgress.bookedNb,
            notBookedNb: procurementRequestProgress.notBookedNb,
            isServed: procurementRequestProgress.servedNb === procurementRequestQuantity,
            servedNb: procurementRequestProgress.servedNb
        };
    };
    LogisticalUtils.isReversedTransfer = function (mvts) {
        return mvts.some(function (mvt) {
            return mvt.stockMvtWay === _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__["BidtStockMvtConstants"].MVT_WAY_CREDIT &&
                mvt.mvtStatus === _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY;
        });
    };
    LogisticalUtils.isReversingTransfer = function (mvts) {
        return (mvts.some(function (mvt) {
            return mvt.stockMvtWay === _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__["BidtStockMvtConstants"].MVT_WAY_DEBIT &&
                mvt.mvtStatus === _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY;
        }) &&
            mvts.some(function (mvt) {
                return mvt.stockMvtWay === _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__["BidtStockMvtConstants"].MVT_WAY_CREDIT &&
                    mvt.mvtStatus !== _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY;
            }));
    };
    LogisticalUtils.isExecutingTransfer = function (mvts) {
        return (!mvts.some(function (mvt) {
            return mvt.stockMvtWay === _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__["BidtStockMvtConstants"].MVT_WAY_DEBIT &&
                mvt.mvtStatus === _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY;
        }) &&
            !mvts.some(function (mvt) {
                return mvt.stockMvtWay === _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__["BidtStockMvtConstants"].MVT_WAY_CREDIT &&
                    mvt.mvtStatus === _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY;
            }));
    };
    LogisticalUtils.isWaitingTransfer = function (mvts) {
        return mvts.some(function (mvt) {
            return mvt.stockMvtWay === _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__["BidtStockMvtConstants"].MVT_WAY_TRANSFER &&
                mvt.mvtStatus !== _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY;
        });
    };
    return LogisticalUtils;
}());



/***/ })

}]);
//# sourceMappingURL=logistics-stock-movement-stock-movement-module.js.map