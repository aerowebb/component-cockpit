(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["engineering-management-configuration-diagram-configuration-diagram-module"],{

/***/ "./src/app/main/engineering-management/configuration-diagram/configuration-diagram.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/configuration-diagram/configuration-diagram.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ConfigurationDiagramModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationDiagramModule", function() { return ConfigurationDiagramModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/tree.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_tree__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../..//shared/components/table/table.module */ "./src/app/shared/components/table/table.module.ts");
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/component-sidebar/component-sidebar.mdule */ "./src/app/shared/components/component-sidebar/component-sidebar.mdule.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_configuration_diagram_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form/configuration-diagram-form.component */ "./src/app/main/engineering-management/configuration-diagram/form/configuration-diagram-form.component.ts");
/* harmony import */ var _form_configuration_diagram_form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form/configuration-diagram-form.service */ "./src/app/main/engineering-management/configuration-diagram/form/configuration-diagram-form.service.ts");
/* harmony import */ var _search_configuration_diagram_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/configuration-diagram-search.component */ "./src/app/main/engineering-management/configuration-diagram/search/configuration-diagram-search.component.ts");
/* harmony import */ var _search_configuration_diagram_search_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search/configuration-diagram-search.service */ "./src/app/main/engineering-management/configuration-diagram/search/configuration-diagram-search.service.ts");
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
var EXTERNAL_MODULES = [primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__["CheckboxModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_6__["TreeModule"]];
var INTERNAL_MODULES = [_shared_components_component_sidebar_component_sidebar_mdule__WEBPACK_IMPORTED_MODULE_11__["ComponentSidebarModule"], _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_7__["TableModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [_form_configuration_diagram_form_component__WEBPACK_IMPORTED_MODULE_13__["ConfigurationDiagramFormComponent"], _search_configuration_diagram_search_component__WEBPACK_IMPORTED_MODULE_15__["ConfigurationDiagramSearchComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_configuration_diagram_form_service__WEBPACK_IMPORTED_MODULE_14__["ConfigurationDiagramFormService"], _search_configuration_diagram_search_service__WEBPACK_IMPORTED_MODULE_16__["ConfigurationDiagramSearchService"]];
var ConfigurationDiagramModule = /** @class */ (function () {
    function ConfigurationDiagramModule() {
    }
    ConfigurationDiagramModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_8__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_9__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_10__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_12__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], ConfigurationDiagramModule);
    return ConfigurationDiagramModule;
}());



/***/ }),

/***/ "./src/app/main/engineering-management/configuration-diagram/form/configuration-diagram-form.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/configuration-diagram/form/configuration-diagram-form.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n\r\n      <div class=\"page-subtitle-container\">\r\n        <div *ngIf=\"itemDesignation\" class=\"page-subtitle\">- {{ itemDesignation }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button\r\n      mat-icon-button\r\n      *ngIf=\"!isCreateOpenMode\"\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button type=\"button\" mat-menu-item (click)=\"reload()\">\r\n        {{ \"global.refresh\" | translate }}\r\n      </button>\r\n      <button type=\"button\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ \"page.\" + (isFavoriteEntry ? \"removeFromFavorites\" : \"addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <mat-tab-group animationDuration=\"0ms\" dynamicHeight>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            {{ \"global.home\" | translate }}\r\n          </ng-template>\r\n\r\n          <div class=\"grid-row\">\r\n            <!-- CONFIGURATION SIMULATION -->\r\n            <div\r\n              #configurationSimulationAnchor\r\n              class=\"grid-cell--equally\"\r\n              (click)=\"selectPageTocEntry(component.CONFIGURATION_SIMULATION_ANCHOR_ID)\"\r\n            >\r\n              <div\r\n                class=\"grid-cell grid-cell--container configuration-generation\"\r\n                [ngClass]=\"{ active: isPageTocEntrySelected(component.CONFIGURATION_SIMULATION_ANCHOR_ID) }\"\r\n              >\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ getComponentName() + \".configurationSimulation\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"column\">\r\n                    <!-- ROW 1 -->\r\n                    <div class=\"row\">\r\n                      <p-table\r\n                        [resizableColumns]=\"true\"\r\n                        #ptableEvolution\r\n                        class=\"aw-table2 table-evolution\"\r\n                        [columns]=\"itemEvolutionsCols\"\r\n                        [value]=\"evolutionTable\"\r\n                        [scrollable]=\"true\"\r\n                      >\r\n                        <ng-template pTemplate=\"colgroup\" let-columns>\r\n                          <colgroup>\r\n                            <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                          </colgroup>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate=\"header\" let-columns>\r\n                          <tr>\r\n                            <th\r\n                              pResizableColumn\r\n                              *ngFor=\"let col of columns\"\r\n                              [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                            >\r\n                              {{ componentData.componentId + \".\" + col.field | translate }}\r\n                            </th>\r\n                          </tr>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate=\"body\" let-rowData>\r\n                          <tr (click)=\"toggleEvolutionHighlight(rowData)\">\r\n                            <td [ngStyle]=\"{ 'text-align': 'left' }\">\r\n                              {{ rowData.evolution }}\r\n                            </td>\r\n\r\n                            <td [ngStyle]=\"{ 'text-align': 'left' }\">\r\n                              <p-checkbox\r\n                                binary=\"true\"\r\n                                class=\"aw-table-checkbox\"\r\n                                [(ngModel)]=\"rowData.inConfiguration\"\r\n                              ></p-checkbox>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-template>\r\n                      </p-table>\r\n                    </div>\r\n\r\n                    <!-- ROW 2 -->\r\n                    <div class=\"row\">\r\n                      <div>\r\n                        <div class=\"action-list\">\r\n                          <button type=\"button\" mat-raised-button (click)=\"generateConfiguration()\">\r\n                            {{ getComponentName() + \".simulate\" | translate }}\r\n                          </button>\r\n\r\n                          <button type=\"button\" mat-raised-button (click)=\"resetConfiguration()\">\r\n                            {{ getComponentName() + \".reset\" | translate }}\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <!-- ROW 3 -->\r\n                    <div class=\"row\">\r\n                      <p-table\r\n                        [resizableColumns]=\"true\"\r\n                        #ptableTargetPn\r\n                        class=\"aw-table2 table-target-pn\"\r\n                        [columns]=\"itemTargetPnCols\"\r\n                        [value]=\"targetPnTable\"\r\n                        [scrollable]=\"true\"\r\n                      >\r\n                        <ng-template pTemplate=\"colgroup\" let-columns>\r\n                          <colgroup>\r\n                            <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                          </colgroup>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate=\"header\" let-columns>\r\n                          <tr>\r\n                            <th\r\n                              pResizableColumn\r\n                              *ngFor=\"let col of columns\"\r\n                              [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                            >\r\n                              {{ componentData.componentId + \".\" + col.field | translate }}\r\n                            </th>\r\n                          </tr>\r\n                        </ng-template>\r\n\r\n                        <ng-template pTemplate=\"body\" let-rowData class=\"ui-table-scrollable-body\">\r\n                          <tr (click)=\"togglePnHighlight(rowData)\">\r\n                            <td [ngStyle]=\"{ 'text-align': 'left' }\">\r\n                              {{ rowData.pn }}\r\n                            </td>\r\n\r\n                            <td [ngStyle]=\"{ 'text-align': 'left' }\">\r\n                              {{ rowData.quantity }}\r\n                            </td>\r\n                          </tr>\r\n                        </ng-template>\r\n                      </p-table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- PARTS PROGRESSION -->\r\n            <div\r\n              #pnAndEvolutionSelectionAnchor\r\n              class=\"grid-cell--grow2\"\r\n              (click)=\"selectPageTocEntry(component.PN_AND_EVOLUTION_SELECTION_ANCHOR_ID)\"\r\n            >\r\n              <div\r\n                class=\"grid-cell grid-cell--container\"\r\n                [ngClass]=\"{ active: isPageTocEntrySelected(component.PN_AND_EVOLUTION_SELECTION_ANCHOR_ID) }\"\r\n              >\r\n                <div class=\"grid-cell-header\">\r\n                  <div class=\"grid-cell-title-container\">\r\n                    <h3 class=\"grid-cell-title\">\r\n                      {{ getComponentName() + \".partsProgression\" | translate }}\r\n                    </h3>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- ROW 1 -->\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".approvalDate\" | translate }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-calendar\r\n                          showButtonBar=\"true\"\r\n                          [monthNavigator]=\"true\"\r\n                          [yearNavigator]=\"true\"\r\n                          [yearRange]=\"sessionService.calendarYearRange\"\r\n                          class=\"aw-calendar\"\r\n                          [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                          [locale]=\"sessionService.calendarFormat\"\r\n                          [(ngModel)]=\"applicabilityDate\"\r\n                          [readonlyInput]=\"true\"\r\n                          (onSelect)=\"onSelectApplicabilityDate()\"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{\r\n                        getComponentName() + \".retrievePnInConfiguration\" | translate\r\n                      }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          [options]=\"pnList\"\r\n                          [(ngModel)]=\"pnSelected\"\r\n                          [showClear]=\"true\"\r\n                          placeholder=\"&nbsp;\"\r\n                          (onChange)=\"onSelectPn()\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{\r\n                        getComponentName() + \".retrieveEvolutionInConfiguration\" | translate\r\n                      }}</label>\r\n\r\n                      <div class=\"form-control\">\r\n                        <p-dropdown\r\n                          class=\"aw-dropdown fixed-width\"\r\n                          [options]=\"evolutionList\"\r\n                          [(ngModel)]=\"evolutionSelected\"\r\n                          [showClear]=\"true\"\r\n                          placeholder=\"&nbsp;\"\r\n                          (onChange)=\"onSelectEvolution(evolutionSelected ? evolutionSelected.evolution : undefined)\"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- ROW 2 - PARTS PROGRESSION-->\r\n                <div class=\"grid-cell-content\">\r\n                  <div class=\"column\">\r\n                    <div *ngFor=\"let pnLinkList of pnLinkListList\" class=\"row\">\r\n                      <p-tree class=\"pn-link-schema\" [value]=\"pnLinkList\" layout=\"horizontal\">\r\n                        <ng-template let-node pTemplate=\"default\">\r\n                          <div class=\"pn-node\">\r\n                            <span *ngIf=\"node.data.actionType.length > 0\">{{ node.data.actionType }}</span>\r\n\r\n                            <a\r\n                              (click)=\"openPartNumberLink(node.data.code)\"\r\n                              class=\"pn\"\r\n                              [ngClass]=\"{ selected: node.data._isSelectedByPn }\"\r\n                            >\r\n                              {{ node.data.code }}\r\n                            </a>\r\n\r\n                            <span *ngIf=\"node.data.quantity.length > 0\">\r\n                              ({{ getComponentName() + \".quantity\" | translate }} = {{ node.data.quantity }})\r\n                            </span>\r\n\r\n                            <a\r\n                              *ngIf=\"node.data.evolution.length > 0\"\r\n                              class=\"evolution\"\r\n                              (click)=\"openAdDialog($event, node.data)\"\r\n                              [ngClass]=\"{ selected: node.data._isSelectedByEvolution }\"\r\n                            >\r\n                              {{ node.data.evolution }}\r\n                            </a>\r\n                          </div>\r\n                        </ng-template>\r\n                      </p-tree>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/configuration-diagram/form/configuration-diagram-form.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/configuration-diagram/form/configuration-diagram-form.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .aw-table2.table-target-pn .ui-table-scrollable-body {\n  max-height: 14rem !important; }\n\n::ng-deep .aw-table2.table-evolution .ui-table-scrollable-body {\n  max-height: 14rem !important; }\n\n:host .configuration-generation .action-list-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: calc(8px * 5);\n  width: 12.5%; }\n\n:host .configuration-generation .action-list-wrapper .action-list > button {\n    margin: 8px auto 0 auto; }\n\n:host .configuration-generation .action-list-wrapper .action-list > button:first-of-type {\n      margin-top: 0; }\n\n:host .configuration-generation .table-target-pn {\n  margin-top: 20px; }\n\n:host .configuration-generation .table-evolution {\n  margin-bottom: 20px; }\n\n:host .parts-progression .grid-cell-content {\n  max-width: 100%;\n  overflow-x: auto; }\n\n::ng-deep body .pn-link-schema .ui-tree {\n  border: none; }\n\n::ng-deep body .pn-link-schema .ui-tree.ui-tree-horizontal .ui-treenode .ui-treenode-content {\n  cursor: default;\n  padding: calc(8px / 2) calc(8px / 2) calc(8px / 2) 18px;\n  position: relative; }\n\n::ng-deep\nbody\n.pn-link-schema\n.ui-tree.ui-tree-horizontal\n.ui-treenode\n.ui-treenode-content.ui-treenode-selectable:not(.ui-state-highlight):hover {\n  background-color: #fff;\n  cursor: default; }\n\n::ng-deep body .pn-link-schema .ui-tree.ui-tree-horizontal .ui-treenode .ui-treenode-content .ui-tree-toggler {\n  left: 0;\n  max-height: 1.125rem;\n  min-height: 1.125rem;\n  position: absolute;\n  top: calc((50% - 1.125rem / 2) + 1px); }\n\n::ng-deep .pn-link-schema .pn-node {\n  display: flex;\n  flex-direction: column;\n  max-width: 10rem;\n  min-width: 10rem; }\n\n::ng-deep .pn-link-schema .pn-node > * {\n  border: 1px solid #fff;\n  padding: 1px 0; }\n\n::ng-deep .pn-link-schema .pn-node > *:last-child {\n  margin-bottom: 0; }\n\n::ng-deep .pn-link-schema .pn-node > .evolution,\n::ng-deep .pn-link-schema .pn-node > .pn {\n  cursor: pointer;\n  transition: background-color 0.3s, border-color 0.3s, color 0.3s; }\n\n::ng-deep .pn-link-schema .pn-node > .evolution:hover,\n::ng-deep .pn-link-schema .pn-node > .pn:hover {\n  background-color: #fff;\n  border-color: #01579b; }\n\n::ng-deep .pn-link-schema .pn-node > .evolution {\n  margin-top: 8px; }\n\n::ng-deep .pn-link-schema .pn-node > .evolution.selected {\n  background-color: #0182e7;\n  color: #000; }\n\n::ng-deep .pn-link-schema .pn-node > .evolution.selected:hover {\n  background-color: #fff;\n  border-color: #0182e7; }\n\n::ng-deep .pn-link-schema .pn-node > .pn {\n  font-weight: 600; }\n\n::ng-deep .pn-link-schema .pn-node > .pn.selected {\n  background-color: #51b1fe;\n  color: #000; }\n\n::ng-deep .pn-link-schema .pn-node > .pn.selected:hover {\n  background-color: #fff;\n  border-color: #51b1fe; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9lbmdpbmVlcmluZy1tYW5hZ2VtZW50L2NvbmZpZ3VyYXRpb24tZGlhZ3JhbS9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXGVuZ2luZWVyaW5nLW1hbmFnZW1lbnRcXGNvbmZpZ3VyYXRpb24tZGlhZ3JhbVxcZm9ybVxcY29uZmlndXJhdGlvbi1kaWFncmFtLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vZW5naW5lZXJpbmctbWFuYWdlbWVudC9jb25maWd1cmF0aW9uLWRpYWdyYW0vZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL21haW4vZW5naW5lZXJpbmctbWFuYWdlbWVudC9jb25maWd1cmF0aW9uLWRpYWdyYW0vZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFSSw0QkFBNEIsRUFBQTs7QUFGaEM7RUFNSSw0QkFBNEIsRUFBQTs7QUFJaEM7RUNLRSxhQUFhO0VBQ2Isc0JBQXNCO0VERGxCLG1CQUFtQjtFQUNuQix5QkFBc0M7RUFDdEMsWUFBWSxFQUFBOztBQVBsQjtJQVdVLHVCQUFpQyxFQUFBOztBQVgzQztNQWNZLGFBQWEsRUFBQTs7QUFkekI7RUFxQk0sZ0JBQWdCLEVBQUE7O0FBckJ0QjtFQXlCTSxtQkFBbUIsRUFBQTs7QUF6QnpCO0VBK0JNLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFLdEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsdURBQThGO0VBQzlGLGtCQUFrQixFQUFBOztBQUdwQjs7Ozs7O0VBTUUsc0JFbEU2QjtFRm1FN0IsZUFBZSxFQUFBOztBQUdqQjtFQUNFLE9BQU87RUFDUCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQ0FBcUMsRUFBQTs7QUFHdkM7RUM1REUsYUFBYTtFQUNiLHNCQUFzQjtFRDhEdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHNCRXRGNkI7RUZ1RjdCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7O0VBRUUsZUFBZTtFQUVmLGdFQUFnRSxFQUFBOztBQUdsRTs7RUFFRSxzQkV2RzZCO0VGd0c3QixxQkVwR29CLEVBQUE7O0FGdUd0QjtFQUNFLGVFaEVnQixFQUFBOztBRm1FbEI7RUFDRSx5QkFBNkM7RUFDN0MsV0UvR3VCLEVBQUE7O0FGa0h6QjtFQUNFLHNCRXJINkI7RUZzSDdCLHFCQUF5QyxFQUFBOztBQUczQztFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHlCQUE2QztFQUM3QyxXRTdIdUIsRUFBQTs7QUZnSXpCO0VBQ0Usc0JFbkk2QjtFRm9JN0IscUJBQXlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2VuZ2luZWVyaW5nLW1hbmFnZW1lbnQvY29uZmlndXJhdGlvbi1kaWFncmFtL2Zvcm0vY29uZmlndXJhdGlvbi1kaWFncmFtLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLmF3LXRhYmxlMi50YWJsZS10YXJnZXQtcG4gLnVpLXRhYmxlLXNjcm9sbGFibGUtYm9keSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNHJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmF3LXRhYmxlMi50YWJsZS1ldm9sdXRpb24gLnVpLXRhYmxlLXNjcm9sbGFibGUtYm9keSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNHJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIC5jb25maWd1cmF0aW9uLWdlbmVyYXRpb24ge1xyXG4gICAgLmFjdGlvbi1saXN0LXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNSk7XHJcbiAgICAgIHdpZHRoOiAxMi41JTtcclxuXHJcbiAgICAgIC5hY3Rpb24tbGlzdCB7XHJcbiAgICAgICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgICAgICBtYXJnaW46ICRtYXJnaW4tdmFsdWUgYXV0byAwIGF1dG87XHJcblxyXG4gICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtdGFyZ2V0LXBuIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtZXZvbHV0aW9uIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYXJ0cy1wcm9ncmVzc2lvbiB7XHJcbiAgICAuZ3JpZC1jZWxsLWNvbnRlbnQge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgYm9keSAucG4tbGluay1zY2hlbWEgLnVpLXRyZWUge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIGJvZHkgLnBuLWxpbmstc2NoZW1hIC51aS10cmVlLnVpLXRyZWUtaG9yaXpvbnRhbCAudWktdHJlZW5vZGUgLnVpLXRyZWVub2RlLWNvbnRlbnQge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBwYWRkaW5nOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKSBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKSBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKSAxOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwXHJcbiAgYm9keVxyXG4gIC5wbi1saW5rLXNjaGVtYVxyXG4gIC51aS10cmVlLnVpLXRyZWUtaG9yaXpvbnRhbFxyXG4gIC51aS10cmVlbm9kZVxyXG4gIC51aS10cmVlbm9kZS1jb250ZW50LnVpLXRyZWVub2RlLXNlbGVjdGFibGU6bm90KC51aS1zdGF0ZS1oaWdobGlnaHQpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGJvZHkgLnBuLWxpbmstc2NoZW1hIC51aS10cmVlLnVpLXRyZWUtaG9yaXpvbnRhbCAudWktdHJlZW5vZGUgLnVpLXRyZWVub2RlLWNvbnRlbnQgLnVpLXRyZWUtdG9nZ2xlciB7XHJcbiAgbGVmdDogMDtcclxuICBtYXgtaGVpZ2h0OiAxLjEyNXJlbTtcclxuICBtaW4taGVpZ2h0OiAxLjEyNXJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiBjYWxjKCg1MCUgLSAxLjEyNXJlbSAvIDIpICsgMXB4KTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wbi1saW5rLXNjaGVtYSAucG4tbm9kZSB7XHJcbiAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgbWF4LXdpZHRoOiAxMHJlbTtcclxuICBtaW4td2lkdGg6IDEwcmVtO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnBuLWxpbmstc2NoZW1hIC5wbi1ub2RlID4gKiB7XHJcbiAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICBwYWRkaW5nOiAxcHggMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wbi1saW5rLXNjaGVtYSAucG4tbm9kZSA+ICo6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wbi1saW5rLXNjaGVtYSAucG4tbm9kZSA+IC5ldm9sdXRpb24sXHJcbjo6bmctZGVlcCAucG4tbGluay1zY2hlbWEgLnBuLW5vZGUgPiAucG4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBib3JkZXItY29sb3IgMC4zcywgY29sb3IgMC4zcztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wbi1saW5rLXNjaGVtYSAucG4tbm9kZSA+IC5ldm9sdXRpb246aG92ZXIsXHJcbjo6bmctZGVlcCAucG4tbGluay1zY2hlbWEgLnBuLW5vZGUgPiAucG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnBuLWxpbmstc2NoZW1hIC5wbi1ub2RlID4gLmV2b2x1dGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogJG1hcmdpbi12YWx1ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wbi1saW5rLXNjaGVtYSAucG4tbm9kZSA+IC5ldm9sdXRpb24uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGFjY2VudC1jb2xvciwgMTUlKTtcclxuICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wbi1saW5rLXNjaGVtYSAucG4tbm9kZSA+IC5ldm9sdXRpb24uc2VsZWN0ZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRhY2NlbnQtY29sb3IsIDE1JSk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucG4tbGluay1zY2hlbWEgLnBuLW5vZGUgPiAucG4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucG4tbGluay1zY2hlbWEgLnBuLW5vZGUgPiAucG4uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGFjY2VudC1jb2xvciwgMzUlKTtcclxuICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5wbi1saW5rLXNjaGVtYSAucG4tbm9kZSA+IC5wbi5zZWxlY3RlZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6IGxpZ2h0ZW4oJGFjY2VudC1jb2xvciwgMzUlKTtcclxufVxyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFV0aWxzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBidXR0b24tY29sb3IoJGJhY2tncm91bmQtY29sb3IsICRjb2xvciwgJGJvcmRlci1jb2xvcjogbnVsbCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIsXHJcbiAgJjpub3QoOmRpc2FibGVkKS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpZigkYm9yZGVyLWNvbG9yID09IG51bGwsICRjb2xvciwgJGJvcmRlci1jb2xvcik7XHJcbiAgICBjb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZmxleC1jb2x1bW4oKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleC1yb3coKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQoKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuXHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWRpc2FibGVkKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWRpc2FibGVkO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1mb2N1cygpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxufVxyXG5cclxuQG1peGluIGlucHV0LWhvdmVyKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG59XHJcblxyXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VhcmNoLWNyaXRlcmlhLWNvbnRhaW5lciB7XHJcbiAgLmFkdmFuY2VkLWNyaXRlcmlhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtY3JpdGVyaWEtZm9vdGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbGVzcyxcclxuICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAuYXctYnRuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlY3Rpb24tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiA0KTtcclxuXHJcbiAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgJi5yZXF1aXJlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkKCk7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hbGVydCB7XHJcbiAgICAgICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICYgPiBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LW92ZXJmbG93LWhpZGRlbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdyaWQgZm9ybSBjb250cm9scyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJNZWRpdW1cIjtcclxuXHJcbiAgJiA+IGlucHV0ICsgcC1tZXNzYWdlID4gLnVpLW1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWFjdGlvbnMge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpmb2N1cyxcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiKDI1NSwgMjU1LCAyNTUpIDYwJSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuXHJcbiAgICAgIC5hdy1pY29uIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4sXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0biB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblxyXG4gICAgJiA+ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMS43NXJlbSk7XHJcblxyXG4gICAgICAmLmF3LWNhbGVuZGFyIC51aS1pbnB1dHRleHQsXHJcbiAgICAgICYuYXctZHJvcGRvd24gLnVpLWRyb3Bkb3duLFxyXG4gICAgICAmLmF3LWlucHV0LFxyXG4gICAgICAmLmF3LXRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1jYWxlbmRhciB7XHJcbiAgICAgIC8vIEZJWE1FOiBmaXggYW4gVUkgaXNzdWUgb24gUHJpbWVORyBjYWxlbmRhciBjb21wb25lbnQ7IHRvIHJlbW92ZSB3aGVuIGlzc3VlIHdpbGwgYmUgZml4ZWQgdXBzdHJlYW1cclxuICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5hdy1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1tb2RhbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbiAgICAgIC5hdy1pY29uOm5vdCgucmVhZC1vbmx5LWxpbmspIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgLy8gbm9uZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udHJvbC1kYXRhIHtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgICAgIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tbmltcCxcclxuICAgIC5idG4tZXh0ZXJuYWwtbGluay13cmFwcGVyLFxyXG4gICAgLmJ0bi1jbGVhci13cmFwcGVyLFxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyLFxyXG4gICAgLmJ0bi1zZWFyY2gtd3JhcHBlciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlciB7XHJcbiAgICAgIC5hdy1maWxldXBsb2FkIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51aS1idXR0b24ge1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjFyZW07XHJcblxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlOTM0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXctaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tY2xlYXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tc2VhcmNoIHtcclxuICAgICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1yYWRpb2J1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICYgPiAuYXctcmFkaW9idXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMiAqICN7JG1hcmdpbi12YWx1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLWdlbmVyaWMge1xyXG4gIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG5cclxuICAmID4gYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiA+IC5hbGVydCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcblxyXG4gICAgJi5hbGVydC0tbm9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0tb2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLXdhcm5pbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNhbGVuZGFyIHtcclxuICAmLnVpLWlucHV0d3JhcHBlci1mb2N1cyB7XHJcbiAgICAudWktY2FsZW5kYXIgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1peGluIGdyaWQtY2hlY2tib3gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRjaGVja2JveC1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRjaGVja2JveC1oZWlnaHQ7XHJcblxyXG4gIC51aS1jaGtib3gge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLWNoa2JveC1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1kcm9wZG93biB7XHJcbiAgLnVpLWRyb3Bkb3duIHtcclxuICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWZvY3VzIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uLFxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbiB7XHJcbiAgICAgIHJpZ2h0OiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgQGluY2x1ZGUgdGV4dC1vdmVyZmxvdy1oaWRkZW4oKTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyICogMS43NXJlbSk7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZpeGVkLXdpZHRoIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZmlsZXVwbG9hZCB7XHJcbiAgQGV4dGVuZCAuYXctYnRuO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICAudWktZmlsZXVwbG9hZC1jaG9vc2Uge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAwICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1idXR0b24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtaW5wdXQoKSB7XHJcbiAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICB9XHJcblxyXG4gICY6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXRleHRhcmVhIHtcclxuICBAaW5jbHVkZSBncmlkLWlucHV0KCk7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1pbi1oZWlnaHQ6ICRmb3JtLWNvbnRyb2wtaGVpZ2h0O1xyXG4gIHJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLXJhZGlvYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG4gIHdpZHRoOiAkcmFkaW9idXR0b24taGVpZ2h0O1xyXG5cclxuICAudWktcmFkaW9idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgLnVpLXJhZGlvYnV0dG9uLWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcblxyXG4gICAgICAgIC51aS1yYWRpb2J1dHRvbi1pY29uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gY2FsZW5kYXItcGFuZWwge1xyXG4gIC51aS1kYXRlcGlja2VyOm5vdCgudWktZGF0ZXBpY2tlci1pbmxpbmUpIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGRyb3Bkb3duLXBhbmVsIHtcclxuICAudWktZHJvcGRvd24tcGFuZWwge1xyXG4gICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuICAgIC51aS1kcm9wZG93bi1pdGVtcy13cmFwcGVyIC51aS1kcm9wZG93bi1saXN0IHtcclxuICAgICAgLnVpLWRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnVpLXN0YXRlLWhpZ2hsaWdodCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/engineering-management/configuration-diagram/form/configuration-diagram-form.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/configuration-diagram/form/configuration-diagram-form.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ConfigurationDiagramFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationDiagramFormComponent", function() { return ConfigurationDiagramFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/component-sidebar/page-toc.service */ "./src/app/shared/components/component-sidebar/page-toc.service.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _configuration_diagram_form_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./configuration-diagram-form.service */ "./src/app/main/engineering-management/configuration-diagram/form/configuration-diagram-form.service.ts");
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
















var ConfigurationDiagramFormComponent = /** @class */ (function (_super) {
    __extends(ConfigurationDiagramFormComponent, _super);
    // ****************************************************************************
    function ConfigurationDiagramFormComponent(favoriteService, loaderService, messageService, pageTocService, serializationService, tabService, sessionService, configurationDiagramFormService, translateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService, pageTocService) || this;
        _this.sessionService = sessionService;
        _this.configurationDiagramFormService = configurationDiagramFormService;
        _this.translateService = translateService;
        _this.component = ConfigurationDiagramFormComponent_1;
        _this.init();
        _this.loadBireActionTypeList();
        _super.prototype.registerPageTocEntryObservable.call(_this);
        return _this;
    }
    ConfigurationDiagramFormComponent_1 = ConfigurationDiagramFormComponent;
    ConfigurationDiagramFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].ENG_CONFIGURATION_DIAGRAM_FORM;
    };
    ConfigurationDiagramFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.updateOpenMode(this.componentData.openMode);
        if (!this.componentData.objectId) {
            this.messageService.showErrorMessage('global.errorOnNavigate');
        }
        else {
            this.setTableOfContent();
            this.item = this.serializationService.deserialize(this.componentData.objectId);
            this.setItemDesignation(this.item);
            this.generatePnLinkSchema(this.item);
        }
        this.initTableCols();
    };
    ConfigurationDiagramFormComponent.prototype.generateConfiguration = function () {
        var _this = this;
        var evolutionList = this.evolutionTable
            .filter(function (row) { return row.inConfiguration && _this.evolutionDataMap.has(row.evolution); })
            .map(function (row) {
            var evolutionData = _this.evolutionDataMap.get(row.evolution);
            var evolution = {
                evolutionNumber: evolutionData.evolutionNumber,
                evolutionRevisionNumber: evolutionData.evolutionRevisionNumber
            };
            return evolution;
        });
        var input = {
            bireItemData: this.item,
            bireEvolutionDataList: evolutionList,
            bireEvolutionDataAppliedList: undefined,
            atLeastOneInventory: true,
            onlyUnknownInventory: false,
            pnUnknownMode: false
        };
        this.configurationDiagramFormService.generateConfigurationList(input).subscribe(function (result) {
            if (result) {
                _this.targetPnTable = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_12__["ListUtils"].orEmpty(result.targetDataList).map(function (elt) {
                    var targetPnRow = {
                        pn: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].orEmpty(elt.partNumber),
                        quantity: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].orEmpty(elt.quantity),
                        _isSelected: false
                    };
                    return targetPnRow;
                });
            }
        });
    };
    ConfigurationDiagramFormComponent.prototype.onSelectApplicabilityDate = function () {
        this.reload();
    };
    ConfigurationDiagramFormComponent.prototype.onSelectEvolution = function (evolution) {
        var _this = this;
        var evolutionSelected = this.evolutionList.find(function (elt) { return elt.value.evolution === evolution; });
        this.evolutionSelected = evolutionSelected ? evolutionSelected.value : undefined;
        // Pn schema
        var action = function (node) {
            node._isSelectedByEvolution =
                _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_13__["ObjectUtils"].isDefined(evolution) && !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].isNullOrEmpty(node.evolution) && node.evolution === evolution;
        };
        this.pnLinkListList.forEach(function (pnLinkList) {
            _this.traversePnLinkList(pnLinkList, action);
        });
        // Evolution list
        this.evolutionTable = this.evolutionTable.map(function (elt) {
            return {
                designation: elt.designation,
                evolution: elt.evolution,
                inConfiguration: elt.inConfiguration,
                _isSelected: elt.evolution === evolution
            };
        });
    };
    ConfigurationDiagramFormComponent.prototype.onSelectPn = function () {
        var _this = this;
        // Pn schema
        var action = function (node) {
            node._isSelectedByPn = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_13__["ObjectUtils"].isDefined(_this.pnSelected) && node.code === _this.pnSelected;
        };
        this.pnLinkListList.forEach(function (pnLinkList) {
            _this.traversePnLinkList(pnLinkList, action);
        });
        this.pnLinkListList = __spread(this.pnLinkListList);
        // Pn list
        this.targetPnTable = this.targetPnTable.map(function (elt) {
            return {
                pn: elt.pn,
                quantity: elt.quantity,
                _isSelected: elt.pn === _this.pnSelected
            };
        });
    };
    ConfigurationDiagramFormComponent.prototype.openAdDialog = function (event, pnNode) {
        event.preventDefault();
        event.stopPropagation();
        var objectId = {
            sbNumber: pnNode._evolutionNumber,
            sbRevisionNumber: pnNode._evolutionRevisionNumber
        };
        var labelKey = 'transaction.SbadFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'SbadFormComponent',
            objectId: this.serializationService.serialize(objectId),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read
        };
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    ConfigurationDiagramFormComponent.prototype.reload = function () {
        this.applicabilityDate = new Date();
        this.evolutionList = [];
        this.evolutionSelected = undefined;
        this.evolutionTable = [];
        this.itemDesignation = '';
        this.pnLinkListList = [];
        this.pnList = [];
        this.pnSelected = undefined;
        this.generatePnLinkSchema(this.item);
    };
    ConfigurationDiagramFormComponent.prototype.resetConfiguration = function () {
        this.evolutionTable = this.evolutionTable.map(function (row) {
            var newRow = {
                designation: row.designation,
                evolution: row.evolution,
                inConfiguration: false,
                _isSelected: false
            };
            return newRow;
        });
        this.targetPnTable = [];
    };
    ConfigurationDiagramFormComponent.prototype.toggleEvolutionHighlight = function (row) {
        row._isSelected = !row._isSelected;
        this.onSelectEvolution(row._isSelected ? row.evolution : undefined);
    };
    ConfigurationDiagramFormComponent.prototype.togglePnHighlight = function (row) {
        row._isSelected = !row._isSelected;
        this.pnSelected = row._isSelected ? row.pn : undefined;
        this.onSelectPn();
    };
    ConfigurationDiagramFormComponent.prototype.createPnLinkSchemaFromRoot = function (root, links) {
        var _this = this;
        var nodeData = this.createPnNodeFromBireVersionDTO(root);
        var nodeChildren = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_12__["ListUtils"].orEmpty(links[root.pnCode]).map(function (nodeChild) { return _this.createPnNode(nodeChild, links, [nodeData.code]); });
        var rootPnNode = {
            data: nodeData,
            children: nodeChildren,
            expanded: nodeChildren.length > 0
        };
        this.pnLinkListList = __spread(this.pnLinkListList, [[rootPnNode]]);
    };
    ConfigurationDiagramFormComponent.prototype.createPnNode = function (itemPnEvolution, links, lineage) {
        var _this = this;
        var nodeData = this.createPnNodeFromBireItemPnEvolutionDTO(itemPnEvolution);
        var nodeChildren = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_12__["ListUtils"].orEmpty(links[itemPnEvolution.pnPnCode])
            .filter(function (nodeChild) { return !lineage.includes(nodeChild.pnCode); })
            .map(function (nodeChild) { return _this.createPnNode(nodeChild, links, __spread(lineage, [nodeData.code])); });
        var node = {
            data: nodeData,
            children: nodeChildren,
            expanded: nodeChildren.length > 0
        };
        return node;
    };
    ConfigurationDiagramFormComponent.prototype.createPnNodeFromBireItemPnEvolutionDTO = function (itemPnEvolution) {
        var actionType = itemPnEvolution.actionTypeCode
            ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].orEmpty(this.actionTypeMap.get(itemPnEvolution.actionTypeCode))
            : '';
        var pnNode = {
            actionType: actionType,
            code: itemPnEvolution.pnPnCode,
            evolution: itemPnEvolution.evolutionNumber + "-" + itemPnEvolution.evolutionRevisionNumber,
            quantity: itemPnEvolution.quantityAfter || itemPnEvolution.quantityBefore || '',
            _evolutionNumber: itemPnEvolution.evolutionNumber,
            _evolutionRevisionNumber: itemPnEvolution.evolutionRevisionNumber,
            _isSelectedByEvolution: false,
            _isSelectedByPn: false
        };
        if (itemPnEvolution.evolutionNumber && itemPnEvolution.evolutionRevisionNumber) {
            this.evolutionDataMap.set(pnNode.evolution, {
                evolutionNumber: itemPnEvolution.evolutionNumber,
                evolutionRevisionNumber: itemPnEvolution.evolutionRevisionNumber
            });
        }
        return pnNode;
    };
    ConfigurationDiagramFormComponent.prototype.createPnNodeFromBireVersionDTO = function (versionPn) {
        var pnNode = {
            actionType: '',
            code: versionPn.pnCode,
            evolution: '',
            quantity: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].orEmpty(versionPn.pnQuantityTci),
            _isSelectedByEvolution: false,
            _isSelectedByPn: false
        };
        return pnNode;
    };
    ConfigurationDiagramFormComponent.prototype.generatePnLinkSchema = function (bireItemDTO) {
        var _this = this;
        var bireItemLWO = {
            chapter: bireItemDTO.chapter,
            familyCode: bireItemDTO.familyCode,
            marks: bireItemDTO.marks,
            section: bireItemDTO.section,
            sheet: bireItemDTO.sheet,
            structureType: bireItemDTO.structureType,
            subject: bireItemDTO.subject,
            variantCode: bireItemDTO.variantCode
        };
        var input = {
            applicabilityDate: this.applicabilityDate,
            familyCode: bireItemDTO.familyCode,
            structureType: bireItemDTO.structureType,
            variantCode: bireItemDTO.variantCode,
            bireItemDTO: bireItemLWO
        };
        this.configurationDiagramFormService.generatePnLinkSchema(input).subscribe(function (result) {
            if (result && result.pnItemPnEvolutionMap && !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_12__["ListUtils"].isNullOrEmpty(result.rootPnList)) {
                result.rootPnList.forEach(function (rootPn) {
                    _this.createPnLinkSchemaFromRoot(rootPn, result.pnItemPnEvolutionMap);
                    _this.setEvolutionList();
                    _this.setEvolutionTable();
                    _this.setPnList();
                });
            }
        });
    };
    ConfigurationDiagramFormComponent.prototype.init = function () {
        this.actionTypeMap = new Map();
        this.applicabilityDate = new Date();
        this.evolutionList = [];
        this.evolutionDataMap = new Map();
        this.evolutionSelected = undefined;
        this.evolutionTable = [];
        this.itemEvolutionsCols = [];
        this.itemDesignation = '';
        this.pnLinkListList = [];
        this.pnList = [];
        this.pnSelected = undefined;
        this.itemTargetPnCols = [];
        this.targetPnTable = [];
    };
    ConfigurationDiagramFormComponent.prototype.initTableCols = function () {
        this.itemEvolutionsCols = [
            { field: 'evolution', alignment: 'left', width: '50%' },
            { field: 'inConfiguration', alignment: 'left', width: '50%' }
        ];
        this.itemTargetPnCols = [
            { field: 'targetPn', alignment: 'left', width: '50%' },
            { field: 'targetQuantity', alignment: 'left', width: '50%' }
        ];
    };
    ConfigurationDiagramFormComponent.prototype.loadBireActionTypeList = function () {
        var _this = this;
        this.configurationDiagramFormService.findAllBireActionType().subscribe(function (results) {
            _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_12__["ListUtils"].orEmpty(results)
                .filter(function (elt) { return elt.actionTypeCode; })
                .forEach(function (elt) {
                _this.actionTypeMap.set(elt.actionTypeCode, _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].orEmpty(elt.actionTypeName));
            });
        });
    };
    ConfigurationDiagramFormComponent.prototype.setEvolutionList = function () {
        var _this = this;
        var action = function (node) {
            if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].isNullOrEmpty(node.evolution)) {
                var isPresent = _this.evolutionList.some(function (elt) { return elt.label === node.evolution; });
                if (!isPresent) {
                    var evolution = {
                        label: node.evolution,
                        value: node
                    };
                    _this.evolutionList = __spread(_this.evolutionList, [evolution]);
                }
            }
        };
        this.pnLinkListList.forEach(function (pnLinkList) {
            _this.traversePnLinkList(pnLinkList, action);
        });
        this.evolutionList.sort(function (elt1, elt2) { return elt1.label.localeCompare(elt2.label); });
    };
    ConfigurationDiagramFormComponent.prototype.setEvolutionTable = function () {
        var _this = this;
        this.evolutionList.forEach(function (elt) {
            var input = {
                evolutionNumber: elt.value._evolutionNumber,
                evolutionRevisionNumber: elt.value._evolutionRevisionNumber
            };
            _this.configurationDiagramFormService.findBireEvolution(input).subscribe(function (result) {
                var row = {
                    designation: result ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].orEmpty(result.evolutionSummary) : '',
                    evolution: elt.value._evolutionNumber + "-" + elt.value._evolutionRevisionNumber,
                    inConfiguration: false,
                    _isSelected: false
                };
                var isPresent = _this.evolutionTable.some(function (evo) { return evo.evolution === row.evolution; });
                if (!isPresent) {
                    _this.evolutionTable = __spread(_this.evolutionTable, [row]);
                }
            });
        });
    };
    ConfigurationDiagramFormComponent.prototype.setItemDesignation = function (item) {
        this.itemDesignation = item.chapter + "-" + item.section + "-" + item.subject + "-" + item.sheet + "-" + item.marks;
        if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].isNullOrEmpty(item.name)) {
            this.itemDesignation = this.itemDesignation + " / " + item.name;
        }
        _super.prototype.displayComponentContext.call(this, this.itemDesignation, false);
    };
    ConfigurationDiagramFormComponent.prototype.setPnList = function () {
        var _this = this;
        var action = function (node) {
            if (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].isNullOrEmpty(node.code)) {
                var isPresent = _this.pnList.some(function (elt) { return elt.label === node.code; });
                if (!isPresent) {
                    var pn = {
                        label: node.code,
                        value: node.code
                    };
                    _this.pnList = __spread(_this.pnList, [pn]);
                }
            }
        };
        this.pnLinkListList.forEach(function (pnLinkList) {
            _this.traversePnLinkList(pnLinkList, action);
        });
        this.pnList.sort(function (elt1, elt2) { return elt1.label.localeCompare(elt2.label); });
    };
    ConfigurationDiagramFormComponent.prototype.setTableOfContent = function () {
        var _this = this;
        var approvalDateKey = this.getTranslateKey('approvalDate');
        var configurationSimulationKey = this.getTranslateKey('configurationSimulation');
        var partsProgressionKey = this.getTranslateKey('partsProgression');
        var pnAndEvolutionSelectionKey = this.getTranslateKey('pnAndEvolutionSelection');
        this.translateService
            .get([approvalDateKey, configurationSimulationKey, partsProgressionKey, pnAndEvolutionSelectionKey])
            .subscribe(function (results) {
            var approvalDateLabel = !!results ? results[approvalDateKey] : 'Approval Date';
            var configurationSimulationLabel = !!results
                ? results[configurationSimulationKey]
                : 'Configuration Simulation';
            var partsProgressionLabel = !!results ? results[partsProgressionKey] : 'Parts Progression';
            var pnAndEvolutionSelectionLabel = !!results
                ? results[pnAndEvolutionSelectionKey]
                : 'P/N & Evolution Selection';
            _this.toc = [
                {
                    id: 'approvalDateAnchor',
                    anchor: _this.approvalDateEltRef,
                    label: approvalDateLabel
                },
                {
                    id: 'pnAndEvolutionSelectionAnchor',
                    anchor: _this.pnAndEvolutionSelectionEltRef,
                    label: pnAndEvolutionSelectionLabel
                },
                {
                    id: 'partsProgressionAnchor',
                    anchor: _this.partsProgressionEltRef,
                    label: partsProgressionLabel
                },
                {
                    id: 'configurationSimulationAnchor',
                    anchor: _this.configurationSimulationEltRef,
                    label: configurationSimulationLabel
                }
            ];
            _super.prototype.selectPageTocEntry.call(_this, _this.component.APPROVAL_DATE_ANCHOR_ID);
        });
    };
    ConfigurationDiagramFormComponent.prototype.traversePnLinkList = function (list, action) {
        var _this = this;
        list.forEach(function (elt) {
            action(elt.data);
            if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_12__["ListUtils"].isNullOrEmpty(elt.children)) {
                _this.traversePnLinkList(elt.children, action);
            }
        });
    };
    ConfigurationDiagramFormComponent.prototype.openPartNumberLink = function (pnCode) {
        var _this = this;
        this.configurationDiagramFormService.findBireVersionPnsByPnCode(pnCode).subscribe(function (result) {
            if (!!result && result.length > 0) {
                _this.openItemPartNumber(result[0], _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read);
            }
        });
    };
    ConfigurationDiagramFormComponent.prototype.openItemPartNumber = function (objectId, openMode) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].ENG_ITEM_PART_NUMBER_FORM,
            openMode: openMode
        };
        if (!!objectId) {
            data.objectId = this.serializationService.serialize(objectId);
        }
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    var ConfigurationDiagramFormComponent_1;
    ConfigurationDiagramFormComponent.APPROVAL_DATE_ANCHOR_ID = 'approvalDateAnchor';
    ConfigurationDiagramFormComponent.CONFIGURATION_SIMULATION_ANCHOR_ID = 'configurationSimulationAnchor';
    ConfigurationDiagramFormComponent.PARTS_PROGRESSION_ANCHOR_ID = 'partsProgressionAnchor';
    ConfigurationDiagramFormComponent.PN_AND_EVOLUTION_SELECTION_ANCHOR_ID = 'pnAndEvolutionSelectionAnchor';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ConfigurationDiagramFormComponent_1.APPROVAL_DATE_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConfigurationDiagramFormComponent.prototype, "approvalDateEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ConfigurationDiagramFormComponent_1.CONFIGURATION_SIMULATION_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConfigurationDiagramFormComponent.prototype, "configurationSimulationEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ConfigurationDiagramFormComponent_1.PARTS_PROGRESSION_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConfigurationDiagramFormComponent.prototype, "partsProgressionEltRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ConfigurationDiagramFormComponent_1.PN_AND_EVOLUTION_SELECTION_ANCHOR_ID),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConfigurationDiagramFormComponent.prototype, "pnAndEvolutionSelectionEltRef", void 0);
    ConfigurationDiagramFormComponent = ConfigurationDiagramFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-configuration-diagram-form',
            template: __webpack_require__(/*! ./configuration-diagram-form.component.html */ "./src/app/main/engineering-management/configuration-diagram/form/configuration-diagram-form.component.html"),
            styles: [__webpack_require__(/*! ./configuration-diagram-form.component.scss */ "./src/app/main/engineering-management/configuration-diagram/form/configuration-diagram-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _shared_components_component_sidebar_page_toc_service__WEBPACK_IMPORTED_MODULE_2__["PageTocService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"],
            _configuration_diagram_form_service__WEBPACK_IMPORTED_MODULE_15__["ConfigurationDiagramFormService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ConfigurationDiagramFormComponent);
    return ConfigurationDiagramFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/configuration-diagram/form/configuration-diagram-form.service.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/configuration-diagram/form/configuration-diagram-form.service.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ConfigurationDiagramFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationDiagramFormService", function() { return ConfigurationDiagramFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_product_structure_business_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/product-structure-business.api */ "./src/app/shared/api/product-structure-business.api.ts");
/* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/product-structure-management.api */ "./src/app/shared/api/product-structure-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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






var ConfigurationDiagramFormService = /** @class */ (function (_super) {
    __extends(ConfigurationDiagramFormService, _super);
    function ConfigurationDiagramFormService(http, appConfigService, productStructureBusinessApi, productStructureManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.productStructureBusinessApi = productStructureBusinessApi;
        _this.productStructureManagementApi = productStructureManagementApi;
        return _this;
    }
    /**************************************************************************
     * Product structure business api
     *************************************************************************/
    ConfigurationDiagramFormService.prototype.generateConfigurationList = function (input) {
        return _super.prototype.post.call(this, this.productStructureBusinessApi.generateConfigurationList, input);
    };
    /**************************************************************************
     * Product structure management api
     *************************************************************************/
    ConfigurationDiagramFormService.prototype.findAllBireActionType = function () {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireActionType);
    };
    ConfigurationDiagramFormService.prototype.findAllBireEvolutionPnByItem = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireEvolutionPnByItem, input);
    };
    ConfigurationDiagramFormService.prototype.findAllBireItemByFamilyCodeAndVariantCode = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireItemByFamilyCodeAndVariantCode, input);
    };
    ConfigurationDiagramFormService.prototype.findBireVersionPnsByPnCode = function (pnCode) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireVersionPnsByPnCode, pnCode);
    };
    ConfigurationDiagramFormService.prototype.findAllBireItemPnEvolutionByItem = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireItemPnEvolutionByItem, input);
    };
    ConfigurationDiagramFormService.prototype.findAllBireVersionPnByItem = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireVersionPnsByItem, input);
    };
    ConfigurationDiagramFormService.prototype.findAllFamilyByModuleAndUseCase = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAllFamilyByModuleAndUseCase, input);
    };
    ConfigurationDiagramFormService.prototype.findBireEvolution = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireEvolution, input);
    };
    ConfigurationDiagramFormService.prototype.generatePnLinkSchema = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.generatePnLinkSchema, input);
    };
    ConfigurationDiagramFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__["AppConfigService"],
            _shared_api_product_structure_business_api__WEBPACK_IMPORTED_MODULE_2__["ProductStructureBusinessApi"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_3__["ProductStructureManagementApi"]])
    ], ConfigurationDiagramFormService);
    return ConfigurationDiagramFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/engineering-management/configuration-diagram/search/configuration-diagram-search.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/configuration-diagram/search/configuration-diagram-search.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-subtitle\">\r\n        <div class=\"page-subtitle\">- {{ \"page.searchPage\" | translate }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button\r\n      id=\"actions\"\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button id=\"favorites\" mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".searchCriteria\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row search-criteria-header\">\r\n                  <i\r\n                    class=\"fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action\"\r\n                    aria-hidden=\"true\"\r\n                    pTooltip=\"{{ 'global.reset' | translate }}\"\r\n                    tooltipPosition=\"top\"\r\n                    (click)=\"resetSearchCriteria()\"\r\n                  ></i>\r\n                </div>\r\n\r\n                <div class=\"row search-criteria-header\">\r\n                  <div class=\"form-group flex--2 required\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".family\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"searchFamilyList\"\r\n                        [(ngModel)]=\"searchSelectedFamily\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                        (onChange)=\"onSelectFamily()\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group flex--2 required\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".variant\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"searchVariantList\"\r\n                        [(ngModel)]=\"searchSelectedVariant\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                        (keyup.enter)=\"search()\"\r\n                        [disabled]=\"!searchSelectedFamily\"\r\n                        (onChange)=\"onSelectVariant()\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group flex--2\"></div>\r\n                </div>\r\n\r\n                <div *ngIf=\"searchSelectedVariant\" class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".chapter\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchChapter\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".section\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchSection\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".subject\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchSubject\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".sheet\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchSheet\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".marks\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchMarks\" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">\r\n                      {{ getComponentName() + \".pnCode\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"searchPn\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row search-criteria-footer\">\r\n                  <div class=\"search-actions\">\r\n                    <button\r\n                      type=\"button\"\r\n                      mat-raised-button\r\n                      class=\"btn-with-spinner\"\r\n                      (click)=\"search()\"\r\n                      color=\"primary\"\r\n                      [disabled]=\"!searchSelectedFamily || !searchSelectedVariant\"\r\n                      appKeyPress\r\n                      [keyCode]=\"'Enter'\"\r\n                      (keyPress)=\"search()\"\r\n                    >\r\n                      <span *ngIf=\"tableLoading\" class=\"lds-hourglass\"></span>\r\n                      {{ \"global.toSearch\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div #resultsContainerAnchor class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ \"global.results\" | translate }} ({{ tableDataSource ? tableDataSource.dataCount : 0 }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <a-table [dataSource]=\"tableDataSource\">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    *ngIf=\"tableDataSource.hasDataSelection\"\r\n                    type=\"button\"\r\n                    mat-raised-button\r\n                    (click)=\"openTableSelectedList()\"\r\n                  >\r\n                    {{ \"global.open\" | translate }}\r\n                  </button>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/engineering-management/configuration-diagram/search/configuration-diagram-search.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/configuration-diagram/search/configuration-diagram-search.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ConfigurationDiagramSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationDiagramSearchComponent", function() { return ConfigurationDiagramSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/table/table-data-source */ "./src/app/shared/components/table/table-data-source.ts");
/* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/bido-function-type-constants */ "./src/app/shared/constants/bido-function-type-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _configuration_diagram_search_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./configuration-diagram-search.service */ "./src/app/main/engineering-management/configuration-diagram/search/configuration-diagram-search.service.ts");
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















var ConfigurationDiagramSearchComponent = /** @class */ (function (_super) {
    __extends(ConfigurationDiagramSearchComponent, _super);
    /* ***************************************************************************/
    function ConfigurationDiagramSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, configurationDiagramSearchService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.configurationDiagramSearchService = configurationDiagramSearchService;
        _this.initTableDataSource();
        _this.init();
        _this.loadFamilyList();
        return _this;
    }
    ConfigurationDiagramSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].ENG_CONFIGURATION_DIAGRAM_SEARCH;
    };
    ConfigurationDiagramSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
    };
    ConfigurationDiagramSearchComponent.prototype.onSelectFamily = function () {
        var _this = this;
        this.searchSelectedVariant = undefined;
        this.clearOptionalSearchCriteria();
        if (this.searchSelectedFamily) {
            this.configurationDiagramSearchService
                .findAllBireVariantVersionByFamilyCode(this.searchSelectedFamily.familyCode)
                .subscribe(function (results) {
                _this.searchVariantList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__["ListUtils"].orEmpty(results)
                    .filter(function (elt) { return _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_12__["ObjectUtils"].isDefined(elt); })
                    .map(function (elt) {
                    var label = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_12__["ObjectUtils"].isDefined(elt.variantName)
                        ? elt.structureType + "-" + elt.variantCode + "-" + elt.variantName
                        : elt.structureType + "-" + elt.variantCode;
                    return {
                        label: label,
                        value: elt
                    };
                });
            });
        }
    };
    ConfigurationDiagramSearchComponent.prototype.onSelectVariant = function () {
        this.clearOptionalSearchCriteria();
    };
    ConfigurationDiagramSearchComponent.prototype.openTableSelectedList = function () {
        var _this = this;
        this.tableDataSource.dataSelection.forEach(function (row) {
            var data = {
                id: _this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_3__["ComponentConstants"].ENG_CONFIGURATION_DIAGRAM_FORM,
                objectId: _this.serializationService.serialize(row._obj),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write
            };
            var labelKey = 'transaction.' + data.componentId;
            _this.tabService.open(_this.tabService.create(data, labelKey, true));
        });
    };
    ConfigurationDiagramSearchComponent.prototype.resetSearchCriteria = function () {
        this.searchSelectedFamily = undefined;
        this.searchSelectedVariant = undefined;
        this.clearOptionalSearchCriteria();
    };
    ConfigurationDiagramSearchComponent.prototype.search = function () {
        var _this = this;
        this.tableLoading = true;
        this.clearTable();
        _super.prototype.scrollToAnchor.call(this, this.resultsContainerAnchor);
        var criteria = {
            bireItemDTOCriteria: {
                familyCode: this.searchSelectedFamily.familyCode,
                variantCode: this.searchSelectedVariant.variantCode,
                structureType: this.searchSelectedVariant.structureType,
                chapter: this.searchChapter,
                section: this.searchSection,
                sheet: this.searchSheet,
                subject: this.searchSubject,
                marks: this.searchMarks
            },
            pnCode: this.searchPn
        };
        this.configurationDiagramSearchService.findAllBireItemBySearchCriteria(criteria).subscribe(function (result) {
            _this.tableLoading = false;
            _this.setTable(result);
            _super.prototype.differ.call(_this, function () {
                _super.prototype.scrollToAnchor.call(_this, _this.resultsContainerAnchor);
            });
        });
    };
    ConfigurationDiagramSearchComponent.prototype.clearOptionalSearchCriteria = function () {
        this.searchChapter = undefined;
        this.searchMarks = undefined;
        this.searchPn = undefined;
        this.searchSection = undefined;
        this.searchSheet = undefined;
        this.searchSubject = undefined;
    };
    ConfigurationDiagramSearchComponent.prototype.clearTable = function () {
        this.tableDataSource.setData([]);
    };
    ConfigurationDiagramSearchComponent.prototype.init = function () {
        this.searchApplicabilityDate = undefined;
        this.searchFamilyList = [];
        this.searchSelectedFamily = undefined;
        this.searchChapter = undefined;
        this.searchMarks = undefined;
        this.searchPn = undefined;
        this.searchSection = undefined;
        this.searchSelectedVariant = undefined;
        this.searchSheet = undefined;
        this.searchSubject = undefined;
        this.searchVariantList = [];
        this.tableLoading = false;
        this.clearTable();
    };
    ConfigurationDiagramSearchComponent.prototype.loadFamilyList = function () {
        var _this = this;
        var input = {
            module: _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_2__["BidoFunctionTypeConstants"].MODULE_FAMILY,
            useCase: _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_2__["BidoFunctionTypeConstants"].UC_MCH_BOM
        };
        this.configurationDiagramSearchService.findAllFamilyByModuleAndUseCase(input).subscribe(function (results) {
            _this.searchFamilyList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__["ListUtils"].orEmpty(results)
                .filter(function (elt) { return elt && elt.familyCode; })
                .map(function (elt) {
                var label = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_12__["ObjectUtils"].isDefined(elt.familyName)
                    ? elt.familyCode + "-" + elt.familyName
                    : "" + elt.familyCode;
                return {
                    label: label,
                    value: elt
                };
            });
        });
    };
    ConfigurationDiagramSearchComponent.prototype.setTable = function (data) {
        this.tableDataSource.setData(data.list.map(function (item) {
            var itemRow = {
                familyVariant: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(item.familyCode),
                name: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(item.name),
                chapter: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(item.chapter),
                section: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(item.section),
                subject: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(item.subject),
                sheet: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(item.sheet),
                marks: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(item.marks),
                itemFamily: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(item.itemFamilyCode),
                functionCode: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(item.functionCode),
                itemNumber: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_13__["StringUtils"].orEmpty(item.itemNumber),
                _obj: item
            };
            return itemRow;
        }));
        this.moreResults = data.moreResults;
    };
    ConfigurationDiagramSearchComponent.prototype.initTableDataSource = function () {
        this.tableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["TableDataSource"]({
            allowMultiSelect: true,
            columns: [
                {
                    field: 'familyVariant',
                    translateKey: this.getTranslateKey('familyVariant'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].LEFT,
                    width: '12.5%'
                },
                { field: 'name', translateKey: this.getTranslateKey('name'), alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].LEFT, width: '22.5%' },
                {
                    field: 'chapter',
                    translateKey: this.getTranslateKey('chapter'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].LEFT,
                    width: '6%'
                },
                {
                    field: 'section',
                    translateKey: this.getTranslateKey('section'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].LEFT,
                    width: '6%'
                },
                {
                    field: 'subject',
                    translateKey: this.getTranslateKey('subject'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].LEFT,
                    width: '6%'
                },
                { field: 'sheet', translateKey: this.getTranslateKey('sheet'), alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].LEFT, width: '6%' },
                { field: 'marks', translateKey: this.getTranslateKey('marks'), alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].LEFT, width: '6%' },
                {
                    field: 'itemFamily',
                    translateKey: this.getTranslateKey('itemFamily'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].LEFT,
                    width: '15%'
                },
                {
                    field: 'functionCode',
                    translateKey: this.getTranslateKey('functionCode'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].LEFT,
                    width: '10%'
                },
                {
                    field: 'itemNumber',
                    translateKey: this.getTranslateKey('itemNumber'),
                    alignment: _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__["ColumnAlignment"].LEFT,
                    width: '10%'
                }
            ],
            data: []
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resultsContainerAnchor'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConfigurationDiagramSearchComponent.prototype, "resultsContainerAnchor", void 0);
    ConfigurationDiagramSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-configuration-diagram-search',
            template: __webpack_require__(/*! ./configuration-diagram-search.component.html */ "./src/app/main/engineering-management/configuration-diagram/search/configuration-diagram-search.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__["TabService"],
            _configuration_diagram_search_service__WEBPACK_IMPORTED_MODULE_14__["ConfigurationDiagramSearchService"]])
    ], ConfigurationDiagramSearchComponent);
    return ConfigurationDiagramSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/engineering-management/configuration-diagram/search/configuration-diagram-search.service.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/main/engineering-management/configuration-diagram/search/configuration-diagram-search.service.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ConfigurationDiagramSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationDiagramSearchService", function() { return ConfigurationDiagramSearchService; });
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





var ConfigurationDiagramSearchService = /** @class */ (function (_super) {
    __extends(ConfigurationDiagramSearchService, _super);
    function ConfigurationDiagramSearchService(http, appConfigService, productStructureManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.productStructureManagementApi = productStructureManagementApi;
        return _this;
    }
    /**************************************************************************
     * Product structure management api
     *************************************************************************/
    ConfigurationDiagramSearchService.prototype.findAllBireItemBySearchCriteria = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findBireItemsBySearchCriteria, input);
    };
    ConfigurationDiagramSearchService.prototype.findAllBireVariantVersionByFamilyCode = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAllBireVariantVersionByFamilyCode, input);
    };
    ConfigurationDiagramSearchService.prototype.findAllFamilyByModuleAndUseCase = function (input) {
        return _super.prototype.post.call(this, this.productStructureManagementApi.findAllFamilyByModuleAndUseCase, input);
    };
    ConfigurationDiagramSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"],
            _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__["ProductStructureManagementApi"]])
    ], ConfigurationDiagramSearchService);
    return ConfigurationDiagramSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__["AbstractAwHttpService"]));



/***/ })

}]);
//# sourceMappingURL=engineering-management-configuration-diagram-configuration-diagram-module.js.map