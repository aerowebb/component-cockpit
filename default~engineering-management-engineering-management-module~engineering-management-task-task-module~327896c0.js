(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~engineering-management-engineering-management-module~engineering-management-task-task-module~327896c0"],{

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

/***/ "./src/app/shared/components/dialog-search-evolution/dialog-search-evolution.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-evolution/dialog-search-evolution.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\" [width]=\"70\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"search-dialog-container\">\r\n      <div class=\"section search-criteria-section\">\r\n        <h4 class=\"section-title\">{{ \"global.search\" | translate }}</h4>\r\n\r\n        <div class=\"section-content\">\r\n          <div class=\"column\">\r\n            <div class=\"row\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ getComponentName() + \".number\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchCriteria.evolutionNumber\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ getComponentName() + \".revisionNumber\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchCriteria.evolutionRevisionNumber\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ getComponentName() + \".designation\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <input class=\"aw-input\" type=\"text\" [(ngModel)]=\"searchCriteria.evolutionSummary\" />\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"form-label\"> {{ getComponentName() + \".source\" | translate }} </label>\r\n\r\n                <div class=\"form-control\">\r\n                  <p-dropdown\r\n                    class=\"aw-dropdown fixed-width\"\r\n                    [options]=\"evolutionSourceList\"\r\n                    [(ngModel)]=\"evolutionSource\"\r\n                    [showClear]=\"true\"\r\n                    placeholder=\"&nbsp;\"\r\n                    appendTo=\"body\"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row search-criteria-footer\">\r\n              <div class=\"search-actions\">\r\n                <button type=\"button\" color=\"primary\" mat-raised-button (click)=\"search()\">\r\n                  <span>{{ \"global.toSearch\" | translate }}</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <h4 class=\"section-title\">\r\n          {{ \"global.results\" | translate }} ({{ evolutionTable.list ? evolutionTable.list.length : 0 }})\r\n        </h4>\r\n\r\n        <div class=\"section-content\">\r\n          <p-table\r\n            [resizableColumns]=\"true\"\r\n            #ptable\r\n            class=\"aw-table2\"\r\n            [columns]=\"evolutionTableColList\"\r\n            [value]=\"evolutionTable.list\"\r\n            [(selection)]=\"evolutionTableSelection\"\r\n            selectionMode=\"single\"\r\n            [scrollable]=\"true\"\r\n          >\r\n            <ng-template pTemplate=\"emptymessage\">\r\n              <span *ngIf=\"!evolutionTableLoading\"> &nbsp;</span>\r\n\r\n              <div *ngIf=\"evolutionTableLoading\" class=\"aw-table-loading-indicator\">\r\n                <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                <div class=\"lds-hourglass\"></div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"caption\">\r\n              <div class=\"aw-table-header\">\r\n                <div class=\"aw-table-global-filter\">\r\n                  <label class=\"aw-table-global-filter-label\">\r\n                    <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                  </label>\r\n\r\n                  <input\r\n                    #ptableGlobalFilter\r\n                    class=\"aw-table-global-filter-input\"\r\n                    type=\"text\"\r\n                    placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                    (input)=\"ptable.filterGlobal($event.target.value, 'contains')\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"colgroup\" let-columns>\r\n              <colgroup>\r\n                <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n              <tr>\r\n                <th pResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                  {{ getComponentName() + \".\" + col.field | translate }}\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\r\n              <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                <td *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                  {{ rowData[col.field] }}\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </p-table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"cancel()\">\r\n      {{ \"global.cancel\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"validate()\" [disabled]=\"!evolutionTableSelection\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-search-evolution/dialog-search-evolution.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-evolution/dialog-search-evolution.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DialogSearchEvolutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchEvolutionComponent", function() { return DialogSearchEvolutionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/bido-evolution-constants */ "./src/app/shared/constants/bido-evolution-constants.ts");
/* harmony import */ var _constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _services_properties_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _types_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/bido-family-variant-utils */ "./src/app/shared/utils/bido-family-variant-utils.ts");
/* harmony import */ var _utils_list_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _utils_object_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _dialog_search_evolution_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog-search-evolution.service */ "./src/app/shared/components/dialog-search-evolution/dialog-search-evolution.service.ts");
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















var DialogSearchEvolutionComponent = /** @class */ (function (_super) {
    __extends(DialogSearchEvolutionComponent, _super);
    function DialogSearchEvolutionComponent(dialogSearchEvolutionService, propertiesService, translateService) {
        var _this = _super.call(this, _enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write, 'DialogSearchEvolutionComponent') || this;
        _this.dialogSearchEvolutionService = dialogSearchEvolutionService;
        _this.propertiesService = propertiesService;
        _this.translateService = translateService;
        _this.structureType = _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].STRUCTURE_TYPE_IPC_KEY;
        _this.init();
        _this.loadEvolutionComplianceList();
        _this.loadEvolutionSourceList();
        _this.loadEvolutionStatusList();
        _this.setEvolutionTableColList();
        return _this;
    }
    Object.defineProperty(DialogSearchEvolutionComponent.prototype, "familyVariantCode", {
        get: function () {
            return this._familyVariantCode;
        },
        set: function (value) {
            this._familyVariantCode = value;
            if (this._familyVariantCode) {
                this.familyCode = _utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_10__["BidoFamilyVariantUtils"].getFamilyCodeFromFamilyVariantCode(value);
                this.variantCode = _utils_bido_family_variant_utils__WEBPACK_IMPORTED_MODULE_10__["BidoFamilyVariantUtils"].getVariantCodeFromFamilyVariantCode(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    DialogSearchEvolutionComponent.prototype.cancel = function () {
        _super.prototype.closeDialog.call(this);
    };
    DialogSearchEvolutionComponent.prototype.search = function () {
        var _this = this;
        this.clearTable();
        this.evolutionTableLoading = true;
        var evolutionObservableList = [];
        var modificationObservableList = [];
        var sbObservableList = [];
        // Evolutions (i.e. Configuring SB impacting Part Numbers)
        if (_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.evolutionSource) ||
            this.evolutionSource === _constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_5__["BidoEvolutionConstants"].CODE_EVOLUTION) {
            if (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.equipmentCode)) {
                // If research is done for a particular Asset
                evolutionObservableList = __spread(evolutionObservableList, [
                    this.findEvolutionListByEquipment().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.postProcessEvolutionResultList(result); }))
                ]);
            }
            else if (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.pnCode)) {
                // If research is done for a particular Part Number
                evolutionObservableList = __spread(evolutionObservableList, [
                    this.findRecursivelyAssociatedEvolutionListToItemAndPnCode().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.postProcessEvolutionResultList(result); }))
                ]);
            }
            else if (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.variantCode)) {
                // Else If research is done for a particular Family Variant
                evolutionObservableList = __spread(evolutionObservableList, [
                    this.findEvolutionListByFamilyCodeAndVariantCode().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.postProcessEvolutionResultList(result); }))
                ]);
            }
            else {
                // Only evolutions according to criteria of number, revision and designation
                evolutionObservableList = __spread(evolutionObservableList, [
                    this.findEvolutionListByEvolutionIdAndDesignation().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.postProcessEvolutionResultList(result); }))
                ]);
            }
        }
        // SBs (i.e. different than Configuring SB and AD)
        if (_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.evolutionSource) || this.evolutionSource === _constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_5__["BidoEvolutionConstants"].CODE_SB) {
            if (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.equipmentCode)) {
                // If research is done for a particular Asset
                sbObservableList = __spread(sbObservableList, [
                    this.findSbListByEquipment().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.postProcessSbResultList(result); }))
                ]);
            }
            else if (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.variantCode)) {
                // If research is done for a particular Family Variant (get Applicable SB for FV)
                sbObservableList = __spread(sbObservableList, [
                    this.findApplicableSbList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.postProcessSbResultList(result); }))
                ]);
            }
            else {
                // Only SBs according to criteria of number, revision and designation
                evolutionObservableList = __spread(evolutionObservableList, [
                    this.findSbListBySbIdAndDesignation().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.postProcessSbResultList(result); }))
                ]);
            }
        }
        // ADs
        if (_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.evolutionSource) || this.evolutionSource === _constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_5__["BidoEvolutionConstants"].CODE_AD) {
            if (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.variantCode)) {
                // If research is done for a particular Family Variant (get Applicable AD for FV)
                sbObservableList = __spread(sbObservableList, [
                    this.findApplicableAdList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.postProcessAdResultList(result); }))
                ]);
            }
            else {
                // Only ADs according to criteria of number, revision and designation
                sbObservableList = __spread(sbObservableList, [
                    this.findSbListBySbIdAndDesignation().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.postProcessAdResultList(result); }))
                ]);
            }
        }
        // Modifications
        if (_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.evolutionSource) ||
            this.evolutionSource === _constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_5__["BidoEvolutionConstants"].CODE_MODIFICATION) {
            if (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.variantCode)) {
                // If research is done for a particular Family Variant (get Applicable MOD for FV)
                modificationObservableList = __spread(modificationObservableList, [
                    this.findApplicableModificationList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.postProcessModificationResultList(result); }))
                ]);
            }
            else {
                // Only MODs according to criteria of number, revision and designation
                modificationObservableList = __spread(modificationObservableList, [
                    this.findModificationListByModificationIdAndDesignation().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.postProcessModificationResultList(result); }))
                ]);
            }
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])({
            evolutionList: _utils_list_utils__WEBPACK_IMPORTED_MODULE_11__["ListUtils"].isEmpty(evolutionObservableList) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(evolutionObservableList),
            modificationList: _utils_list_utils__WEBPACK_IMPORTED_MODULE_11__["ListUtils"].isEmpty(modificationObservableList) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(modificationObservableList),
            sbList: _utils_list_utils__WEBPACK_IMPORTED_MODULE_11__["ListUtils"].isEmpty(sbObservableList) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(sbObservableList)
        }).subscribe({
            next: function (result) { return _this.processSearchResultList(result.evolutionList, result.modificationList, result.sbList); }
        });
    };
    DialogSearchEvolutionComponent.prototype.validate = function () {
        this.onSelected.emit(this.evolutionTableSelection._obj);
        _super.prototype.closeDialog.call(this);
    };
    DialogSearchEvolutionComponent.prototype.clearTable = function () {
        this.evolutionTableLoading = false;
        this.evolutionTableSelection = undefined;
        this.evolutionTable = {
            list: [],
            moreResults: false
        };
    };
    DialogSearchEvolutionComponent.prototype.createEvolutionRowFromEvolution = function (evolution) {
        var compliance = this.evolutionComplianceList.find(function (elt) { return elt.value === evolution.evolutionCompliance; });
        var status = this.evolutionStatusList.find(function (elt) { return elt.value === evolution.statusState; });
        var evolutionRow = {
            compliance: compliance ? _utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(compliance.label) : '',
            designation: _utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(evolution.evolutionSummary),
            number: _utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(evolution.evolutionNumber),
            revisionNumber: _utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(evolution.evolutionRevisionNumber),
            source: evolution.evolutionType,
            status: status ? _utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(status.label) : '',
            _obj: evolution
        };
        return evolutionRow;
    };
    DialogSearchEvolutionComponent.prototype.createEvolutionRowFromModification = function (modification) {
        var status = this.evolutionStatusList.find(function (elt) { return elt.value === modification.statusState; });
        var evolutionRow = {
            compliance: '',
            designation: _utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(modification.modificationTitle),
            number: _utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(modification.modificationNumber),
            revisionNumber: _utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(modification.modificationRevisionNumber),
            source: modification.modificationType,
            status: status ? _utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(status.label) : '',
            _obj: modification
        };
        return evolutionRow;
    };
    DialogSearchEvolutionComponent.prototype.createEvolutionRowFromSb = function (sb) {
        var compliance = this.evolutionComplianceList.find(function (elt) { return elt.value === sb.sbCompliance; });
        var status = this.evolutionStatusList.find(function (elt) { return elt.value === sb.statusState; });
        var evolutionRow = {
            compliance: compliance ? _utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(compliance.label) : '',
            designation: _utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(sb.sbTitle),
            number: _utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(sb.sbNumber),
            revisionNumber: _utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(sb.sbRevisionNumber),
            source: sb.sbType,
            status: status ? _utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(status.label) : '',
            _obj: sb
        };
        return evolutionRow;
    };
    DialogSearchEvolutionComponent.prototype.init = function () {
        this.evolutionComplianceList = [];
        this.evolutionSourceList = [];
        this.evolutionStatusList = [];
        this.familyCode = undefined;
        this.searchCriteria = {};
        this.variantCode = undefined;
        this.evolutionSource = _constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_5__["BidoEvolutionConstants"].CODE_EVOLUTION;
        this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearTable();
    };
    DialogSearchEvolutionComponent.prototype.loadEvolutionComplianceList = function () {
        var _this = this;
        this.propertiesService.getValue(_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__["GenericPropertyConstants"].COMPLIANCE_MAP).subscribe(function (results) {
            _this.evolutionComplianceList = _utils_list_utils__WEBPACK_IMPORTED_MODULE_11__["ListUtils"].orEmpty(results);
        });
    };
    DialogSearchEvolutionComponent.prototype.loadEvolutionSourceList = function () {
        var _this = this;
        var adTypeKey = this.getTranslateKey('adType');
        var evolutionTypeKey = this.getTranslateKey('evolutionType');
        var modificationTypeKey = this.getTranslateKey('modificationType');
        var sbTypeKey = this.getTranslateKey('sbType');
        this.translateService
            .get([adTypeKey, evolutionTypeKey, modificationTypeKey, sbTypeKey])
            .subscribe(function (results) {
            var adTypeLabel = !!results ? results[adTypeKey] : 'AD (Airworthiness Directive)';
            var evolutionTypeLabel = !!results ? results[evolutionTypeKey] : 'SB Configuration';
            var modificationTypeLabel = !!results ? results[modificationTypeKey] : 'Modification';
            var sbTypeLabel = !!results ? results[sbTypeKey] : 'Others SB';
            _this.evolutionSourceList = [
                {
                    label: evolutionTypeLabel,
                    value: _constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_5__["BidoEvolutionConstants"].CODE_EVOLUTION
                },
                {
                    label: sbTypeLabel,
                    value: _constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_5__["BidoEvolutionConstants"].CODE_SB
                },
                {
                    label: adTypeLabel,
                    value: _constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_5__["BidoEvolutionConstants"].CODE_AD
                },
                {
                    label: modificationTypeLabel,
                    value: _constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_5__["BidoEvolutionConstants"].CODE_MODIFICATION
                }
            ];
        });
    };
    DialogSearchEvolutionComponent.prototype.loadEvolutionStatusList = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
            this.propertiesService.getValue(_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__["GenericPropertyConstants"].FUNC_OBJECT_STATUS_MAP),
            this.propertiesService.getValue(_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__["GenericPropertyConstants"].OBJECT_STATUS_MAP)
        ]).subscribe(function (_a) {
            var _b = __read(_a, 2), funcObjectList = _b[0], objectList = _b[1];
            _this.evolutionStatusList = __spread(_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__["ListUtils"].orEmpty(funcObjectList), _utils_list_utils__WEBPACK_IMPORTED_MODULE_11__["ListUtils"].orEmpty(objectList));
        });
    };
    DialogSearchEvolutionComponent.prototype.processSearchResultList = function (evolutionResultList, modificationResultList, sbResultList) {
        var _this = this;
        var processedEvolutionList = new Set();
        var evolutionList = evolutionResultList
            .map(function (result) { return result.list; })
            .reduce(function (acc, x) { return acc.concat(x); }, [])
            .filter(function (evolution) { return !processedEvolutionList.has(_this.computeEvolutionKey(evolution)); })
            .map(function (evolution) {
            processedEvolutionList.add(_this.computeEvolutionKey(evolution));
            return _this.createEvolutionRowFromEvolution(evolution);
        });
        var modificationList = modificationResultList
            .map(function (result) { return result.list; })
            .reduce(function (acc, x) { return acc.concat(x); }, [])
            .filter(function (modification) { return !processedEvolutionList.has(_this.computeModificationKey(modification)); })
            .map(function (modification) {
            processedEvolutionList.add(_this.computeModificationKey(modification));
            return _this.createEvolutionRowFromModification(modification);
        });
        var sbList = sbResultList
            .map(function (result) { return result.list; })
            .reduce(function (acc, x) { return acc.concat(x); }, [])
            .filter(function (sb) { return !processedEvolutionList.has(_this.computeSbKey(sb)); })
            .map(function (sb) {
            processedEvolutionList.add(_this.computeSbKey(sb));
            return _this.createEvolutionRowFromSb(sb);
        });
        this.evolutionTable.list = __spread(evolutionList, modificationList, sbList);
        this.evolutionTable.moreResults = [
            evolutionResultList.map(function (results) { return results.moreResults; }),
            modificationResultList.map(function (results) { return results.moreResults; }),
            sbResultList.map(function (results) { return results.moreResults; })
        ]
            .reduce(function (acc, x) { return acc.concat(x); }, [])
            .some(function (hasMoreResult) { return hasMoreResult; });
        this.evolutionTableLoading = false;
    };
    DialogSearchEvolutionComponent.prototype.setEvolutionTableColList = function () {
        this.evolutionTableColList = [
            { field: 'number', alignment: 'left', width: '12.5%' },
            { field: 'revisionNumber', alignment: 'right', width: '12.5%' },
            { field: 'status', alignment: 'left', width: '12.5%' },
            { field: 'source', alignment: 'left', width: '12.5%' },
            // { field: 'compliance', alignment: 'left', width: '12.5%' },
            { field: 'designation', alignment: 'left', width: '50%' }
        ];
    };
    ///////////////////////////////////////////////////////////////////////////////
    DialogSearchEvolutionComponent.prototype.computeEvolutionKey = function (evolution) {
        return evolution.evolutionNumber + "-" + evolution.evolutionRevisionNumber;
    };
    DialogSearchEvolutionComponent.prototype.computeModificationKey = function (modification) {
        return modification.modificationNumber + "-" + modification.modificationRevisionNumber;
    };
    DialogSearchEvolutionComponent.prototype.computeSbKey = function (sb) {
        return sb.sbNumber + "-" + sb.sbRevisionNumber;
    };
    DialogSearchEvolutionComponent.prototype.filterAd = function (sb) {
        var criteriaNumber = !_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.searchCriteria.evolutionNumber);
        var criteriaRevisionNumber = !_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.searchCriteria.evolutionRevisionNumber);
        var criteriaTitle = !_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.searchCriteria.evolutionSummary);
        return (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(sb.sbType) &&
            sb.sbType === _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].SB_TYPE_AD_KEY &&
            (!criteriaNumber ||
                (criteriaNumber &&
                    (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(sb.sbNumber) &&
                        sb.sbNumber.includes(this.searchCriteria.evolutionNumber)))) &&
            (!criteriaRevisionNumber ||
                (criteriaRevisionNumber &&
                    (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(sb.sbRevisionNumber) &&
                        sb.sbRevisionNumber.includes(this.searchCriteria.evolutionRevisionNumber)))) &&
            (!criteriaTitle ||
                (criteriaTitle &&
                    (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(sb.sbTitle) &&
                        sb.sbTitle.includes(this.searchCriteria.evolutionSummary)))));
    };
    DialogSearchEvolutionComponent.prototype.filterEvolution = function (evolution) {
        var criteriaNumber = !_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.searchCriteria.evolutionNumber);
        var criteriaRevisionNumber = !_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.searchCriteria.evolutionRevisionNumber);
        var criteriaTitle = !_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.searchCriteria.evolutionSummary);
        return ((!criteriaNumber ||
            (criteriaNumber &&
                (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(evolution.evolutionNumber) &&
                    evolution.evolutionNumber.includes(this.searchCriteria.evolutionNumber)))) &&
            (!criteriaRevisionNumber ||
                (criteriaRevisionNumber &&
                    (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(evolution.evolutionRevisionNumber) &&
                        evolution.evolutionRevisionNumber.includes(this.searchCriteria
                            .evolutionRevisionNumber)))) &&
            (!criteriaTitle ||
                (criteriaTitle &&
                    (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(evolution.evolutionSummary) &&
                        evolution.evolutionSummary.includes(this.searchCriteria.evolutionSummary)))));
    };
    DialogSearchEvolutionComponent.prototype.filterModification = function (modification) {
        var criteriaNumber = !_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.searchCriteria.evolutionNumber);
        var criteriaRevisionNumber = !_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.searchCriteria.evolutionRevisionNumber);
        var criteriaTitle = !_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.searchCriteria.evolutionSummary);
        return ((!criteriaNumber ||
            (criteriaNumber &&
                (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(modification.modificationNumber) &&
                    modification.modificationNumber.includes(this.searchCriteria.evolutionNumber)))) &&
            (!criteriaRevisionNumber ||
                (criteriaRevisionNumber &&
                    (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(modification.modificationRevisionNumber) &&
                        modification.modificationRevisionNumber.includes(this.searchCriteria
                            .evolutionRevisionNumber)))) &&
            (!criteriaTitle ||
                (criteriaTitle &&
                    (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(modification.modificationTitle) &&
                        modification.modificationTitle.includes(this.searchCriteria.evolutionSummary)))));
    };
    DialogSearchEvolutionComponent.prototype.filterSb = function (sb) {
        var criteriaNumber = !_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.searchCriteria.evolutionNumber);
        var criteriaRevisionNumber = !_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.searchCriteria.evolutionRevisionNumber);
        var criteriaTitle = !_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(this.searchCriteria.evolutionSummary);
        return (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(sb.sbType) &&
            sb.sbType !== _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].SB_TYPE_CONFIGURATION_KEY &&
            sb.sbType !== _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].SB_TYPE_AD_KEY &&
            (!criteriaNumber ||
                (criteriaNumber &&
                    (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(sb.sbNumber) &&
                        sb.sbNumber.includes(this.searchCriteria.evolutionNumber)))) &&
            (!criteriaRevisionNumber ||
                (criteriaRevisionNumber &&
                    (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(sb.sbRevisionNumber) &&
                        sb.sbRevisionNumber.includes(this.searchCriteria.evolutionRevisionNumber)))) &&
            (!criteriaTitle ||
                (criteriaTitle &&
                    (!_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].isNullOrEmpty(sb.sbTitle) &&
                        sb.sbTitle.includes(this.searchCriteria.evolutionSummary)))));
    };
    DialogSearchEvolutionComponent.prototype.findEvolutionListByEquipment = function () {
        return this.dialogSearchEvolutionService.findEvolutionListByEquipment(this.familyVariantCode, this.equipmentCode, _utils_object_utils__WEBPACK_IMPORTED_MODULE_12__["ObjectUtils"].isDefined(this.complianceStatus) ? [this.complianceStatus] : undefined, this.sn);
    };
    DialogSearchEvolutionComponent.prototype.findRecursivelyAssociatedEvolutionListToItemAndPnCode = function () {
        return this.dialogSearchEvolutionService.findRecursivelyAssociatedEvolutionListToItemAndPnCode(this.familyCode, this.variantCode, this.structureType, this.pnCode);
    };
    DialogSearchEvolutionComponent.prototype.findEvolutionListByFamilyCodeAndVariantCode = function () {
        return this.dialogSearchEvolutionService.findEvolutionListByFamilyCodeAndVariantCode(this.familyCode, this.variantCode, this.structureType);
    };
    DialogSearchEvolutionComponent.prototype.findEvolutionListByEvolutionIdAndDesignation = function () {
        return this.dialogSearchEvolutionService.findEvolutionListByEvolutionIdAndDesignation(this.searchCriteria);
    };
    DialogSearchEvolutionComponent.prototype.findSbListByEquipment = function () {
        return this.dialogSearchEvolutionService.findSbListByEquipment(this.familyVariantCode, this.equipmentCode, _utils_object_utils__WEBPACK_IMPORTED_MODULE_12__["ObjectUtils"].isDefined(this.complianceStatus) ? [this.complianceStatus] : undefined, this.sn);
    };
    DialogSearchEvolutionComponent.prototype.findApplicableSbList = function () {
        return this.dialogSearchEvolutionService.findApplicableSbList(this.familyCode, this.variantCode, this.structureType, this.sn);
    };
    DialogSearchEvolutionComponent.prototype.findSbListBySbIdAndDesignation = function () {
        return this.dialogSearchEvolutionService.findSbListBySbIdAndDesignation(this.searchCriteria);
    };
    DialogSearchEvolutionComponent.prototype.findApplicableAdList = function () {
        return this.dialogSearchEvolutionService.findApplicableAdList(this.familyCode, this.variantCode, this.structureType, this.sn);
    };
    DialogSearchEvolutionComponent.prototype.findApplicableModificationList = function () {
        return this.dialogSearchEvolutionService.findApplicableModificationList(this.familyCode, this.variantCode, this.structureType);
    };
    DialogSearchEvolutionComponent.prototype.findModificationListByModificationIdAndDesignation = function () {
        return this.dialogSearchEvolutionService.findModificationListByModificationIdAndDesignation(this.searchCriteria, this.familyCode, this.structureType);
    };
    DialogSearchEvolutionComponent.prototype.postProcessAdResultList = function (result) {
        return this.postProcessResultList(result, this.filterAd.bind(this), function (sb) {
            var updatedSb = __assign({}, sb);
            updatedSb.sbType = _constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_5__["BidoEvolutionConstants"].CODE_AD;
            return updatedSb;
        });
    };
    DialogSearchEvolutionComponent.prototype.postProcessEvolutionResultList = function (result) {
        return this.postProcessResultList(result, this.filterEvolution.bind(this), function (evolution) {
            var updatedEvolution = __assign({}, evolution);
            updatedEvolution.evolutionType = _constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_5__["BidoEvolutionConstants"].CODE_EVOLUTION;
            return updatedEvolution;
        });
    };
    DialogSearchEvolutionComponent.prototype.postProcessModificationResultList = function (result) {
        return this.postProcessResultList(result, this.filterModification.bind(this), function (modification) {
            var updatedModification = __assign({}, modification);
            updatedModification.modificationType = _constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_5__["BidoEvolutionConstants"].CODE_MODIFICATION;
            return updatedModification;
        });
    };
    DialogSearchEvolutionComponent.prototype.postProcessResultList = function (result, filterfn, transformfn) {
        return {
            list: result.list.filter(filterfn).map(transformfn),
            moreResults: result.moreResults
        };
    };
    DialogSearchEvolutionComponent.prototype.postProcessSbResultList = function (result) {
        return this.postProcessResultList(result, this.filterSb.bind(this), function (sb) {
            var updatedSb = __assign({}, sb);
            updatedSb.sbType = _constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_5__["BidoEvolutionConstants"].CODE_SB;
            return updatedSb;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogSearchEvolutionComponent.prototype, "complianceStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogSearchEvolutionComponent.prototype, "equipmentCode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogSearchEvolutionComponent.prototype, "evolutionNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogSearchEvolutionComponent.prototype, "evolutionRevisionNumber", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogSearchEvolutionComponent.prototype, "evolutionSource", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogSearchEvolutionComponent.prototype, "pnCode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogSearchEvolutionComponent.prototype, "sn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DialogSearchEvolutionComponent.prototype, "familyVariantCode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogSearchEvolutionComponent.prototype, "onSelected", void 0);
    DialogSearchEvolutionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-search-evolution',
            template: __webpack_require__(/*! ./dialog-search-evolution.component.html */ "./src/app/shared/components/dialog-search-evolution/dialog-search-evolution.component.html")
        }),
        __metadata("design:paramtypes", [_dialog_search_evolution_service__WEBPACK_IMPORTED_MODULE_14__["DialogSearchEvolutionService"],
            _services_properties_service__WEBPACK_IMPORTED_MODULE_8__["PropertiesService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], DialogSearchEvolutionComponent);
    return DialogSearchEvolutionComponent;
}(_types_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]));



/***/ }),

/***/ "./src/app/shared/components/dialog-search-evolution/dialog-search-evolution.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-evolution/dialog-search-evolution.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: DialogSearchEvolutionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchEvolutionModule", function() { return DialogSearchEvolutionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dialog_search_evolution_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-search-evolution.component */ "./src/app/shared/components/dialog-search-evolution/dialog-search-evolution.component.ts");
/* harmony import */ var _dialog_search_evolution_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog-search-evolution.service */ "./src/app/shared/components/dialog-search-evolution/dialog-search-evolution.service.ts");
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
var EXTERNAL_MODULES = [primeng_dropdown__WEBPACK_IMPORTED_MODULE_1__["DropdownModule"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["TableModule"]];
var INTERNAL_MODULES = [_modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [_dialog_search_evolution_component__WEBPACK_IMPORTED_MODULE_7__["DialogSearchEvolutionComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_dialog_search_evolution_service__WEBPACK_IMPORTED_MODULE_8__["DialogSearchEvolutionService"]];
var DialogSearchEvolutionModule = /** @class */ (function () {
    function DialogSearchEvolutionModule() {
    }
    DialogSearchEvolutionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS),
            exports: __spread(COMPONENTS),
            imports: __spread([
                _angular_common_shared_module__WEBPACK_IMPORTED_MODULE_3__["AngularCommonSharedModule"],
                _angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_4__["AngularGenericTemplatesSharedModule"],
                _app_common_shared_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonSharedModule"]
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], DialogSearchEvolutionModule);
    return DialogSearchEvolutionModule;
}());



/***/ }),

/***/ "./src/app/shared/components/dialog-search-evolution/dialog-search-evolution.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-search-evolution/dialog-search-evolution.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: DialogSearchEvolutionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSearchEvolutionService", function() { return DialogSearchEvolutionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/api/fleet-business.api */ "./src/app/shared/api/fleet-business.api.ts");
/* harmony import */ var _shared_api_product_structure_business_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/api/product-structure-business.api */ "./src/app/shared/api/product-structure-business.api.ts");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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








var DialogSearchEvolutionService = /** @class */ (function (_super) {
    __extends(DialogSearchEvolutionService, _super);
    function DialogSearchEvolutionService(http, appConfigService, fleetBusinessApi, productStructureBusinessApi, productStructureManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.fleetBusinessApi = fleetBusinessApi;
        _this.productStructureBusinessApi = productStructureBusinessApi;
        _this.productStructureManagementApi = productStructureManagementApi;
        return _this;
    }
    /**************************************************************************
     * Fleet business api
     *************************************************************************/
    DialogSearchEvolutionService.prototype.findEvolutionListByEquipment = function (familyVariantCode, equipmentCode, complianceStatusList, engineSerialNumber) {
        var input = {
            equipmentCode: equipmentCode,
            familyVariantCode: familyVariantCode,
            applicationStatus: complianceStatusList,
            optionalEngineSerialNumber: engineSerialNumber
        };
        return _super.prototype.post.call(this, this.fleetBusinessApi.findBireEvolutionsByEquipment, input);
    };
    DialogSearchEvolutionService.prototype.findSbListByEquipment = function (familyVariantCode, equipmentCode, complianceStatusList, engineSerialNumber) {
        var optionalSbTypeListToExclude = [
            _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].SB_TYPE_AD_KEY,
            _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].SB_TYPE_CONFIGURATION_KEY
        ];
        var input = {
            equipmentCode: equipmentCode,
            familyVariantCode: familyVariantCode,
            applicationStatus: complianceStatusList,
            optionalEngineSerialNumber: engineSerialNumber,
            optionalSbTypesToExclude: optionalSbTypeListToExclude
        };
        return _super.prototype.post.call(this, this.fleetBusinessApi.findBireSbsByEquipment, input);
    };
    /**************************************************************************
     * Product structure business api
     *************************************************************************/
    DialogSearchEvolutionService.prototype.findApplicableAdList = function (familyCode, variantCode, structureType, engineSerialNumber) {
        var input = {
            familyCode: familyCode,
            structureType: structureType,
            variantCode: variantCode,
            optionalSerialNumber: engineSerialNumber
        };
        return _super.prototype.post.call(this, this.productStructureBusinessApi.getApplicableAds, input);
    };
    DialogSearchEvolutionService.prototype.findApplicableModificationList = function (familyCode, variantCode, structureType) {
        var input = {
            familyCode: familyCode,
            structureType: structureType,
            variantCode: variantCode
        };
        return _super.prototype.post.call(this, this.productStructureBusinessApi.getApplicableModifications, input);
    };
    DialogSearchEvolutionService.prototype.findApplicableSbList = function (familyCode, variantCode, structureType, engineSerialNumber) {
        var optionalSbTypeListToExclude = [
            _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].SB_TYPE_AD_KEY,
            _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].SB_TYPE_CONFIGURATION_KEY
        ];
        var input = {
            familyCode: familyCode,
            structureType: structureType,
            variantCode: variantCode,
            optionalSbTypesToExclude: optionalSbTypeListToExclude,
            optionalSerialNumber: engineSerialNumber
        };
        return _super.prototype.post.call(this, this.productStructureBusinessApi.getApplicableSbs, input);
    };
    DialogSearchEvolutionService.prototype.findRecursivelyAssociatedEvolutionListToItemAndPnCode = function (familyCode, variantCode, structureType, pnCode) {
        var bireItem = {
            familyCode: familyCode,
            structureType: structureType,
            variantCode: variantCode
        };
        var input = {
            pnCode: pnCode,
            bireEvolutionDataList: [],
            bireItemDTO: bireItem,
            pnCodeProcessed: []
        };
        return _super.prototype.post.call(this, this.productStructureBusinessApi.getRecursivelyAssociatedBireEvolutionsToItemAndPnCode, input);
    };
    /**************************************************************************
     * Product structure management api
     *************************************************************************/
    DialogSearchEvolutionService.prototype.findEvolutionListByEvolutionIdAndDesignation = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireEvolutionsByEvolutionPKAndDesignation, input);
    };
    DialogSearchEvolutionService.prototype.findEvolutionListByFamilyCodeAndVariantCode = function (familyCode, variantCode, structureType) {
        var input = {
            familyCode: familyCode,
            structureType: structureType,
            variantCode: variantCode,
            forLogBookApplicability: false
        };
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireEvolutionsByFamilyAndVariantCodes, input);
    };
    DialogSearchEvolutionService.prototype.findModificationListByModificationIdAndDesignation = function (evolutionCriteria, familyCode, structureType) {
        var input = {
            familyCode: familyCode,
            structureType: structureType,
            modificationNumber: evolutionCriteria.evolutionNumber,
            modificationRevisionNumber: evolutionCriteria.evolutionRevisionNumber,
            modificationTitle: evolutionCriteria.evolutionSummary
        };
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireModificationsByModificationPKAndDesignationAlternative, input);
    };
    DialogSearchEvolutionService.prototype.findSbListBySbIdAndDesignation = function (evolutionCriteria) {
        var input = {
            sbNumber: evolutionCriteria.evolutionNumber,
            sbRevisionNumber: evolutionCriteria.evolutionRevisionNumber,
            sbTitle: evolutionCriteria.evolutionSummary
        };
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireSbsBySbPKAndDesignation, input);
    };
    DialogSearchEvolutionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_app_config_service__WEBPACK_IMPORTED_MODULE_7__["AppConfigService"],
            _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_2__["FleetBusinessApi"],
            _shared_api_product_structure_business_api__WEBPACK_IMPORTED_MODULE_3__["ProductStructureBusinessApi"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_4__["ProductStructureManagementApi"]])
    ], DialogSearchEvolutionService);
    return DialogSearchEvolutionService;
}(_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/shared/constants/bido-evolution-constants.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/constants/bido-evolution-constants.ts ***!
  \**************************************************************/
/*! exports provided: BidoEvolutionConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidoEvolutionConstants", function() { return BidoEvolutionConstants; });
var BidoEvolutionConstants = /** @class */ (function () {
    function BidoEvolutionConstants() {
    }
    BidoEvolutionConstants.CODE_MODIFICATION = 'MOD';
    BidoEvolutionConstants.CODE_EVOLUTION = 'EVOL';
    BidoEvolutionConstants.CODE_SB = 'SB';
    BidoEvolutionConstants.MODULE_HR = 'AD';
    BidoEvolutionConstants.CODE_AD = 'AD';
    return BidoEvolutionConstants;
}());



/***/ })

}]);
//# sourceMappingURL=default~engineering-management-engineering-management-module~engineering-management-task-task-module~327896c0.js.map