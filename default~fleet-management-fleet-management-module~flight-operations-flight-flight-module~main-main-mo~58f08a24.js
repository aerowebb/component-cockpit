(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~fleet-management-fleet-management-module~flight-operations-flight-flight-module~main-main-mo~58f08a24"],{

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

/***/ "./src/app/main/maintenance/work-package/search/work-package-search.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/search/work-package-search.service.ts ***!
  \*************************************************************************************/
/*! exports provided: WorkPackageSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPackageSearchService", function() { return WorkPackageSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/am-project-management.api */ "./src/app/shared/api/am-project-management.api.ts");
/* harmony import */ var _shared_api_user_profile_business_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/user-profile-business.api */ "./src/app/shared/api/user-profile-business.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/utils/select-item-utils */ "./src/app/shared/utils/select-item-utils.ts");
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








var WorkPackageSearchService = /** @class */ (function (_super) {
    __extends(WorkPackageSearchService, _super);
    function WorkPackageSearchService(http, appConfigService, amProjectManagementApi, userProfileBusinessApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.amProjectManagementApi = amProjectManagementApi;
        _this.userProfileBusinessApi = userProfileBusinessApi;
        return _this;
    }
    WorkPackageSearchService.prototype.getBsdeProjectDateCriteria = function () {
        return _super.prototype.post.call(this, this.amProjectManagementApi.getBsdeProjectDateCriteria);
    };
    WorkPackageSearchService.prototype.removeBidmProject = function (input) {
        return _super.prototype.post.call(this, this.amProjectManagementApi.removeBidmProject, input);
    };
    WorkPackageSearchService.prototype.findBidmProjectsBySearchCriteria = function (criteria) {
        return _super.prototype.post.call(this, this.amProjectManagementApi.findBidmProjectsByProjectCriteriaWithMaxResult, criteria);
    };
    WorkPackageSearchService.prototype.findBidmProjectAttributesByWorkOrder = function (bidmProjectDTOId) {
        return _super.prototype.post.call(this, this.amProjectManagementApi.findBidmProjectAttributesByWorkOrder, bidmProjectDTOId);
    };
    WorkPackageSearchService.prototype.loadDateCriteriaList = function () {
        return this.getBsdeProjectDateCriteria().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
            return !!results ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_7__["SelectItemUtils"].fromLabelValues(results) : [];
        }));
    };
    WorkPackageSearchService.prototype.hasManagePMRights = function (input) {
        return _super.prototype.post.call(this, this.userProfileBusinessApi.hasManageRights, input);
    };
    WorkPackageSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"],
            _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_3__["AMProjectManagementApi"],
            _shared_api_user_profile_business_api__WEBPACK_IMPORTED_MODULE_4__["UserProfileBusinessApi"]])
    ], WorkPackageSearchService);
    return WorkPackageSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__["AbstractAwHttpService"]));



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



/***/ })

}]);
//# sourceMappingURL=default~fleet-management-fleet-management-module~flight-operations-flight-flight-module~main-main-mo~58f08a24.js.map