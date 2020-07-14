(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maintenance-work-orders-work-orders-module"],{

/***/ "./src/app/main/maintenance/work-orders/form/work-orders-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/main/maintenance/work-orders/form/work-orders-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n\r\n        <i\r\n          class=\"fa fa-fw fa-info aw-icon aw-icon-with-border\"\r\n          aria-hidden=\"true\"\r\n          pTooltip=\"{{ 'page.info' | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">\r\n        {{ context }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"goToCalendar()\">\r\n      {{ getComponentName() + \".calendar\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn-with-spinner\" mat-raised-button (click)=\"printAllJobsCards()\">\r\n      <span class=\"lds-hourglass\" *ngIf=\"showSaveSpinner\"></span>\r\n      {{ getComponentName() + \".printAll\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" mat-raised-button (click)=\"onReload()\">\r\n      {{ \"global.refresh\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\" style=\"max-width: 100%\">\r\n    <div class=\"page-content\">\r\n      <!-- WORK ORDER -->\r\n      <div class=\"grid-row\">\r\n        <div #workOrdersAnchor class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container grid-cell-wo-table\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".workOrders\" | translate }} ({{ workOrderTable.length }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <p-treeTable\r\n                #ptreeTableItemStructure\r\n                class=\"aw-tree-table2\"\r\n                [value]=\"workOrderTable\"\r\n                [columns]=\"workOrderTableCols\"\r\n                [scrollable]=\"false\"\r\n                selectionMode=\"checkbox\"\r\n                [(selection)]=\"selectedWorkOrders\"\r\n                [resizableColumns]=\"true\"\r\n              >\r\n                <ng-template pTemplate=\"emptymessage\">\r\n                  <span *ngIf=\"!isLoadingWorkOrderTable\"> &nbsp;</span>\r\n\r\n                  <div *ngIf=\"isLoadingWorkOrderTable\" class=\"aw-table-loading-indicator\">\r\n                    <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                    <div class=\"lds-hourglass\"></div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"caption\">\r\n                  <div class=\"aw-table-header\">\r\n                    <div class=\"aw-table-global-filter\">\r\n                      <label class=\"aw-table-global-filter-label\">\r\n                        <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                      </label>\r\n\r\n                      <input\r\n                        #ptreeTableItemStructureGlobalFilter\r\n                        class=\"aw-table-global-filter-input\"\r\n                        type=\"text\"\r\n                        placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                        [(ngModel)]=\"searchGlobalFilter\"\r\n                        (keyup)=\"searchGlobalFilterChange(searchGlobalFilter)\"\r\n                      />\r\n                    </div>\r\n\r\n                    <div class=\"aw-table-actions\">\r\n                      <button\r\n                        *ngIf=\"selectedWorkOrders.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openSelectedGoodsMovement()\"\r\n                      >\r\n                        {{ getComponentName() + \".goodsMovements\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedWorkOrders.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openUpdateSchedulingDialog()\"\r\n                      >\r\n                        {{ getComponentName() + \".updateScheduling\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedWorkOrders.length > 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openSelectedWorkOrders()\"\r\n                      >\r\n                        {{ \"global.open\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedWorkOrders.length === 1\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"openSelectedWorkOrders()\"\r\n                      >\r\n                        {{ \"global.edit\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedWorkOrders.length === 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        (click)=\"displayWorkOrderScreenEdit()\"\r\n                      >\r\n                        {{ \"global.add\" | translate }}\r\n                      </button>\r\n\r\n                      <button\r\n                        *ngIf=\"selectedWorkOrders.length > 0\"\r\n                        type=\"button\"\r\n                        mat-raised-button\r\n                        color=\"warn\"\r\n                        (click)=\"deleteSelectedWorkOrder()\"\r\n                      >\r\n                        {{ \"global.delete\" | translate }}\r\n                      </button>\r\n\r\n                      <div *ngIf=\"!isLoadingWorkOrderTable\" class=\"aw-table-icon-actions\">\r\n                        <i\r\n                          class=\"fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay\"\r\n                          aria-hidden=\"true\"\r\n                          pTooltip=\"{{\r\n                            getComponentName() + (filtersVisible ? '.hideFilters' : '.showFilters') | translate\r\n                          }}\"\r\n                          tooltipPosition=\"left\"\r\n                          [ngClass]=\"{ active: filtersVisible }\"\r\n                          (click)=\"woFilters.toggle($event)\"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div\r\n                    *ngIf=\"!isLoadingWorkOrderTable && filterActivatedList !== null && !!filterActivatedList.length > 0\"\r\n                    class=\"active-filter-list\"\r\n                  >\r\n                    <div class=\"aw-chips\" *ngFor=\"let filter of filterActivatedList\">\r\n                      <span class=\"aw-chips-label\">{{ filter.value }}</span>\r\n                      <i class=\"fa fa-fw fa-times aw-chips-icon\" aria-hidden=\"true\" (click)=\"filter.action()\"></i>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"colgroup\" let-columns>\r\n                  <colgroup>\r\n                    <col class=\"aw-table-checkbox-wrapper\" />\r\n                    <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                  </colgroup>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"header\" let-columns>\r\n                  <tr>\r\n                    <th class=\"aw-table-checkbox-wrapper\">\r\n                      <p-treeTableHeaderCheckbox class=\"aw-table-checkbox\"></p-treeTableHeaderCheckbox>\r\n                    </th>\r\n                    <th ttResizableColumn *ngFor=\"let col of columns\" [ngStyle]=\"{ 'text-align': col.alignment }\">\r\n                      {{ componentData.componentId + \".\" + col.field | translate }}\r\n                    </th>\r\n                  </tr>\r\n                </ng-template>\r\n\r\n                <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\r\n                  <tr>\r\n                    <td class=\"aw-table-checkbox-wrapper\">\r\n                      <p-treeTableCheckbox class=\"aw-table-checkbox\" [value]=\"rowNode\"></p-treeTableCheckbox>\r\n                    </td>\r\n\r\n                    <td\r\n                      *ngFor=\"let col of columns; let i = index\"\r\n                      [ngSwitch]=\"col.field\"\r\n                      [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                      [ngClass]=\"col.class\"\r\n                    >\r\n                      <div *ngSwitchCase=\"'workOrder'\" class=\"row nowrap\">\r\n                        <div>\r\n                          <p-treeTableToggler [rowNode]=\"rowNode\"></p-treeTableToggler>\r\n                        </div>\r\n                        <div class=\"tree-table-cell\">\r\n                          <a class=\"value\" (click)=\"openWorkOrderLink(rowData.bidmWorkOrder)\">{{ rowData.code }}</a>\r\n                          <div class=\"designation\">{{ rowData.description }}</div>\r\n                          <div class=\"additional-data\">\r\n                            <div>\r\n                              <span class=\"label\">{{ getComponentName() + \".type\" | translate }}</span>\r\n                              <span class=\"value\">{{ rowData.type }}</span>\r\n                            </div>\r\n                            <div>\r\n                              <span class=\"label\"> {{ getComponentName() + \".origin\" | translate }}</span>\r\n                              <a class=\"value\" (click)=\"consultWorkOrderOrigin(rowData)\">{{ rowData.origin }}</a>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngSwitchCase=\"'engineeringData'\" class=\"tree-table-cell\">\r\n                        <div>\r\n                          <span class=\"label\"> {{ getComponentName() + \".item\" | translate }}</span>\r\n                          <a class=\"value\" (click)=\"openItem(rowData.bidmWorkOrder)\">{{ rowData.relatedItem }}</a>\r\n                        </div>\r\n                        <div>\r\n                          <span class=\"label\">{{ getComponentName() + \".zone\" | translate }}</span>\r\n                          <span class=\"value\">{{ rowData.zone }}</span>\r\n                        </div>\r\n                        <div>\r\n                          <span class=\"label\">{{ getComponentName() + \".standardDuration\" | translate }}</span>\r\n                          <span class=\"value\">{{ rowData.standardDuration }}</span>\r\n                          <span class=\"horizontal-separator\"></span>\r\n                          <span class=\"label\">{{ getComponentName() + \".standardCost\" | translate }}</span>\r\n                          <span class=\"value\">{{ rowData.standardCost }}</span>\r\n                        </div>\r\n                        <div>\r\n                          <span class=\"label\">{{ getComponentName() + \".qualifications\" | translate }}</span>\r\n                          <span class=\"value\">{{ rowData.qualification }}</span>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngSwitchCase=\"'fleetData'\" class=\"tree-table-cell\">\r\n                        <div>\r\n                          <span class=\"label\"> {{ getComponentName() + \".sn\" | translate }}</span>\r\n                          <a\r\n                            *ngIf=\"rowData.bidoEquipmentData\"\r\n                            (click)=\"openSnLink(rowData.bidoEquipmentData.equipmentCode)\"\r\n                            class=\"value\"\r\n                            >{{ rowData.bidmWorkOrder.assetSn }}</a\r\n                          >\r\n                          <span *ngIf=\"!rowData.bidoEquipmentData\" class=\"value\">{{\r\n                            rowData.bidmWorkOrder.assetSn\r\n                          }}</span>\r\n                        </div>\r\n                        <div>\r\n                          <span class=\"label\"> {{ getComponentName() + \".pn\" | translate }}</span>\r\n                          <a (click)=\"openPartNumberLink(rowData.bidmWorkOrder.assetPn)\" class=\"value\">{{\r\n                            rowData.bidmWorkOrder.assetPn\r\n                          }}</a>\r\n                        </div>\r\n                        <div class=\"designation\" *ngIf=\"rowData.bidoEquipmentData\">\r\n                          {{ rowData.bidoEquipmentData.equipmentDesignation }}\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngSwitchCase=\"'schedulingData'\" class=\"tree-table-cell\">\r\n                        <div>\r\n                          <span class=\"label\">{{ getComponentName() + \".assignedTo\" | translate }}</span>\r\n                          <span class=\"value\">{{ rowData.assignedTo }}</span>\r\n                        </div>\r\n                        <div class=\"additional-data\">\r\n                          <div>\r\n                            <span class=\"label\">{{ getComponentName() + \".startDate\" | translate }}</span>\r\n                            <span class=\"value\">{{ rowData.startDate }}</span>\r\n                          </div>\r\n                          <div>\r\n                            <span class=\"label\">{{ getComponentName() + \".endDate\" | translate }}</span>\r\n                            <span class=\"value\">{{ rowData.endDate }}</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngSwitchCase=\"'executionData'\" class=\"tree-table-cell\">\r\n                        <div class=\"row compact\">\r\n                          <div class=\"grid-cell--3 grid-cell--no-padding\">\r\n                            <p-progressBar [ngClass]=\"rowData.statusCrititicy\" [value]=\"rowData.statusPercent\">\r\n                            </p-progressBar>\r\n                          </div>\r\n                          <div class=\"grid-cell--9 grid-cell--no-padding\">\r\n                            <span class=\"horizontal-separator\"></span>\r\n                            <span class=\"value\">{{ this.getStatusLabel(rowData.status) }}</span>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"additional-data\"></div>\r\n                        <div>\r\n                          <span class=\"label\">{{ getComponentName() + \".openingDate\" | translate }}</span>\r\n                          <span class=\"value\">{{ rowData.openingDate }} </span>\r\n                        </div>\r\n                        <div>\r\n                          <span class=\"label\">{{ getComponentName() + \".closingDate\" | translate }}</span>\r\n                          <span class=\"value\">{{ rowData.closingDate }}</span>\r\n                        </div>\r\n                        <div class=\"additional-data\" *ngIf=\"rowData.checkedBy || rowData.checkedOn\"></div>\r\n                        <div *ngIf=\"rowData.checkedBy\">\r\n                          <span class=\"label\">{{ getComponentName() + \".checkedBy\" | translate }}</span>\r\n                          <span class=\"value\">{{ rowData.checkedBy }}</span>\r\n                        </div>\r\n                        <div *ngIf=\"rowData.checkedOn\">\r\n                          <span class=\"label\">{{ getComponentName() + \".checkedOn\" | translate }}</span>\r\n                          <span class=\"value\">{{ rowData.checkedOn }}</span>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngSwitchCase=\"'illustration'\" class=\"tree-table-cell illustration\">\r\n                        <img *ngIf=\"rowData.materialIllustration\" [src]=\"rowData.materialIllustration\" />\r\n                      </div>\r\n\r\n                      <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </p-treeTable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p-overlayPanel #woFilters class=\"aw-overlay\" (onShow)=\"filtersVisible = true\" (onHide)=\"filtersVisible = false\">\r\n  <aw-work-order-table-filters\r\n    [searchCriteria]=\"workOrderTableCriteria\"\r\n    (onFilter)=\"woFilters.hide(); filtersVisible = false; updateWorkOrderTable()\"\r\n    (onReset)=\"woFilters.hide(); resetWorkOrderTableFilters()\"\r\n  >\r\n  </aw-work-order-table-filters>\r\n</p-overlayPanel>\r\n\r\n<aw-dialog-work-order-edition\r\n  *ngIf=\"displayWorkOrderEdit\"\r\n  [(display)]=\"displayWorkOrderEdit\"\r\n  [workOrderSelected]=\"workOrderSelected\"\r\n  [workPackage]=\"workPackage\"\r\n  [workOrders]=\"workOrderList\"\r\n  (onValidated)=\"onAddWorkOrder($event)\"\r\n>\r\n</aw-dialog-work-order-edition>\r\n\r\n<aw-dialog-work-order-scheduling-edition\r\n  *ngIf=\"displayWorkOrderSchedulingEdit\"\r\n  [(display)]=\"displayWorkOrderSchedulingEdit\"\r\n  (onValidated)=\"onWorkOrderSchedulingEdited($event)\"\r\n>\r\n</aw-dialog-work-order-scheduling-edition>\r\n"

/***/ }),

/***/ "./src/app/main/maintenance/work-orders/form/work-orders-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/main/maintenance/work-orders/form/work-orders-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .grid-cell-search .search-actions button {\n  margin-left: 8px; }\n  :host .grid-cell-search .search-actions button:first-of-type {\n    margin-left: 0; }\n  :host ::ng-deep p-progressbar.pla .ui-progressbar-value {\n  background: #c8d4d6; }\n  :host ::ng-deep p-progressbar.ong .ui-progressbar-value {\n  background: #b8d0e8; }\n  :host ::ng-deep p-progressbar.tbc .ui-progressbar-value {\n  background: #b8d0e8; }\n  :host ::ng-deep p-progressbar.per .ui-progressbar-value {\n  background: #006ea9; }\n  :host ::ng-deep p-progressbar.clo .ui-progressbar-value {\n  background: #4caf50; }\n  :host ::ng-deep p-progressbar.pos .ui-progressbar-value {\n  background: #4caf50; }\n  :host ::ng-deep p-progressbar.por .ui-progressbar-value {\n  background: #dddf00; }\n  :host .grid-cell-work-order-list .table {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%; }\n  :host .grid-cell-work-order-list .table .workOrder {\n    width: 20%; }\n  :host .grid-cell-work-order-list .table .engineeringData {\n    width: 22.5%; }\n  :host .grid-cell-work-order-list .table .fleetData {\n    width: 10%; }\n  :host .grid-cell-work-order-list .table .schedulingData {\n    width: 17.5%; }\n  :host .grid-cell-work-order-list .table .executionData {\n    width: 17.5%; }\n  :host .grid-cell-work-order-list .table .illustration {\n    width: 12.5%;\n    text-align: center; }\n  :host .grid-cell-work-order-list .table .table-body .table-cell,\n  :host .grid-cell-work-order-list .table .table-header .table-cell {\n    padding: 0 calc(8px / 2); }\n  :host .grid-cell-work-order-list .table .table-header {\n    background-color: #fff;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 40px; }\n  :host .grid-cell-work-order-list .table .table-header .table-row {\n      display: flex;\n      flex-direction: row;\n      border-bottom: 1px solid #595959;\n      max-height: 24px;\n      min-height: 24px; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions {\n      display: flex;\n      flex-direction: row;\n      padding-bottom: 8px; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .row-actions {\n        display: flex;\n        flex-direction: row;\n        align-items: flex-end;\n        justify-content: flex-end; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .row-actions > .aw-btn {\n          margin-left: 8px; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .row-actions > .aw-btn:first-of-type {\n            margin-left: 0; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-filters {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        margin-right: 8px; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-filters > .aw-icon {\n          font-size: 1.125rem;\n          line-height: 2rem;\n          width: 2rem; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter {\n        display: flex;\n        flex-direction: row;\n        align-items: baseline;\n        flex-grow: 1;\n        padding-right: 5%; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input {\n          background-color: transparent;\n          border-bottom-color: #595959;\n          border-left-color: transparent;\n          border-radius: 0;\n          border-right-color: transparent;\n          border-style: solid;\n          border-top-color: transparent;\n          border-width: 1px;\n          color: inherit;\n          font-family: inherit;\n          font-size: inherit;\n          font-weight: inherit;\n          line-height: 1.42857143;\n          outline: none;\n          padding: 2px 0 4px 0;\n          transition: border-bottom-color 0.25s ease-in-out;\n          min-width: 12rem;\n          width: 12rem;\n          transition: border-bottom-color 0.25s ease-in-out, width 0.5s ease; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input::-webkit-input-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input:-moz-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input::-moz-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input:-ms-input-placeholder {\n            color: #595959;\n            font-weight: 400; }\n  :host .grid-cell-work-order-list .table .table-header .table-actions .table-global-filter .global-filter-input:focus {\n            border-bottom-color: #01579b;\n            outline: none;\n            width: 100%; }\n  :host .grid-cell-work-order-list .table .table-body {\n    min-height: calc(8px * 5); }\n  :host .grid-cell-work-order-list .table .table-body .table-row {\n      display: flex;\n      flex-direction: row;\n      border-bottom: 1px solid #f0f0f0;\n      cursor: pointer;\n      padding: 8px 0; }\n  :host .grid-cell-work-order-list .table .table-body .table-row:hover {\n        background-color: #f0f0f0; }\n  :host .grid-cell-work-order-list .table .table-body .table-row.selected {\n        background-color: #e9f5ff;\n        border-bottom-color: #e9f5ff;\n        border-left: calc(2 * 1px) solid #595959;\n        border-right: calc(2 * 1px) solid #595959;\n        border-top: calc(2 * 1px) solid #595959; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell {\n        display: flex;\n        flex-direction: column; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell.illustration img {\n          max-height: 6rem; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .horizontal-separator {\n          margin-left: 2%; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .additional-data {\n          margin-top: 8px; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .label {\n          min-width: 2.5rem;\n          display: inline-block; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .label + .value {\n          margin-left: 5%; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .value {\n          font-weight: bold; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell .designation {\n          font-style: italic; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell a {\n          color: #01579b; }\n  :host .grid-cell-work-order-list .table .table-body .table-row .table-cell a:hover {\n            text-decoration: underline; }\n  :host .grid-cell-work-order-list .table .table-body .table-row-details {\n      display: flex;\n      flex-direction: column;\n      border-bottom: calc(2 * 1px) solid #595959;\n      border-left: calc(2 * 1px) solid #595959;\n      border-right: calc(2 * 1px) solid #595959;\n      border-top: 1px dashed #595959;\n      padding: 8px; }\n  :host .grid-cell-work-order-list .table .table-body .table-row-details .table-row-details-header {\n        margin-bottom: 8px; }\n  :host .row.nowrap {\n  flex-wrap: nowrap !important; }\n  :host ::ng-deep .tree-table-cell {\n  display: flex;\n  flex-direction: column; }\n  :host ::ng-deep .tree-table-cell.illustration img {\n    max-height: 6rem; }\n  :host ::ng-deep .tree-table-cell .horizontal-separator {\n    margin-left: 2%; }\n  :host ::ng-deep .tree-table-cell .additional-data {\n    margin-top: 8px; }\n  :host ::ng-deep .tree-table-cell .label {\n    min-width: 2.5rem;\n    display: inline-block; }\n  :host ::ng-deep .tree-table-cell .label + .value {\n    margin-left: 5%; }\n  :host ::ng-deep .tree-table-cell .value {\n    font-weight: bold; }\n  :host ::ng-deep .tree-table-cell .designation {\n    font-style: italic;\n    white-space: normal; }\n  :host ::ng-deep .tree-table-cell a {\n    color: #01579b;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    /*       &:hover {\r\n        text-decoration: underline;\r\n      } */ }\n  :host ::ng-deep .small-calendar .ui-calendar {\n  width: 100px !important; }\n  :host ::ng-deep .small-calendar .ui-calendar .ui-inputtext {\n  padding: 0 !important; }\n  :host .table-filters-overlay {\n  display: flex;\n  flex-direction: column; }\n  :host .table-filters-overlay .filters {\n    display: flex;\n    flex-direction: column; }\n  :host .table-filters-overlay .filters > * {\n      margin-top: 8px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLW9yZGVycy9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXG1haW50ZW5hbmNlXFx3b3JrLW9yZGVyc1xcZm9ybVxcd29yay1vcmRlcnMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLW9yZGVycy9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLW9yZGVycy9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLW9yZGVycy9mb3JtL3dvcmstb3JkZXJzLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFJUSxnQkNtQ1UsRUFBQTtFRHZDbEI7SUFPVSxjQUFjLEVBQUE7RUFQeEI7RUFjSSxtQkNRVyxFQUFBO0VEdEJmO0VBaUJJLG1CQ0dpQixFQUFBO0VEcEJyQjtFQW9CSSxtQkNBaUIsRUFBQTtFRHBCckI7RUF1QkksbUJDRmdCLEVBQUE7RURyQnBCO0VBMEJJLG1CQ1ZrQixFQUFBO0VEaEJ0QjtFQTZCSSxtQkNia0IsRUFBQTtFRGhCdEI7RUFnQ0ksbUJDVGEsRUFBQTtFRHZCakI7RUVhRSxhQUFhO0VBQ2Isc0JBQXNCO0VGeUJsQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0VBeENqQjtJQTJDUSxVQUFVLEVBQUE7RUEzQ2xCO0lBK0NRLFlBQVksRUFBQTtFQS9DcEI7SUFtRFEsVUFBVSxFQUFBO0VBbkRsQjtJQXVEUSxZQUFZLEVBQUE7RUF2RHBCO0lBMkRRLFlBQVksRUFBQTtFQTNEcEI7SUErRFEsWUFBWTtJQUNaLGtCQUFrQixFQUFBO0VBaEUxQjs7SUFzRVUsd0JBQXFDLEVBQUE7RUF0RS9DO0lBMkVRLHNCQ2hGdUI7SURpRnZCLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsU0MxQlksRUFBQTtFRG5EcEI7TUVrQkUsYUFBYTtNQUNiLG1CQUFtQjtNRitEWCxnQ0NwRm9CO01EcUZwQixnQkFyRmdCO01Bc0ZoQixnQkF0RmdCLEVBQUE7RUFFMUI7TUVrQkUsYUFBYTtNQUNiLG1CQUFtQjtNRnVFWCxtQkNuRFEsRUFBQTtFRHZDbEI7UUVrQkUsYUFBYTtRQUNiLG1CQUFtQjtRRjRFVCxxQkFBcUI7UUFDckIseUJBQXlCLEVBQUE7RUFoR3JDO1VBbUdjLGdCQzVESSxFQUFBO0VEdkNsQjtZQXNHZ0IsY0FBYyxFQUFBO0VBdEc5QjtRRWtCRSxhQUFhO1FBQ2IsbUJBQW1CO1FGMkZULG1CQUFtQjtRQUNuQixpQkN4RU0sRUFBQTtFRHZDbEI7VUFrSGMsbUJBQW1CO1VBQ25CLGlCQUFpQjtVQUNqQixXQUFXLEVBQUE7RUFwSHpCO1FFa0JFLGFBQWE7UUFDYixtQkFBbUI7UUZ3R1QscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixpQkFBaUIsRUFBQTtFQTdIN0I7VUV1QkUsNkJBQTZCO1VBQzdCLDRCRDFCNEI7VUMyQjVCLDhCQUE4QjtVQUM5QixnQkFBZ0I7VUFDaEIsK0JBQStCO1VBQy9CLG1CREtrQjtVQ0psQiw2QkFBNkI7VUFDN0IsaUJESWdCO1VDSGhCLGNBQWM7VUFDZCxvQkFBb0I7VUFDcEIsa0JBQWtCO1VBQ2xCLG9CQUFvQjtVQUNwQix1QkRHdUI7VUNGdkIsYUFBYTtVQUNiLG9CQUFvQjtVQUVwQixpREFBaUQ7VUYrRnJDLGdCQUFnQjtVQUNoQixZQUFZO1VBRVosa0VBQWtFLEVBQUE7RUF6SWhGO1lBa0lnQixjQ3BJYztZRHFJZCxnQkFBZ0IsRUFBQTtFQW5JaEM7WUFrSWdCLGNDcEljO1lEcUlkLGdCQUFnQixFQUFBO0VBbkloQztZQWtJZ0IsY0NwSWM7WURxSWQsZ0JBQWdCLEVBQUE7RUFuSWhDO1lBa0lnQixjQ3BJYztZRHFJZCxnQkFBZ0IsRUFBQTtFQW5JaEM7WUE0SWdCLDRCQzdJTTtZRDhJTixhQUFhO1lBQ2IsV0FBVyxFQUFBO0VBOUkzQjtJQXNKUSx5QkFBc0MsRUFBQTtFQXRKOUM7TUVrQkUsYUFBYTtNQUNiLG1CQUFtQjtNRndJWCxnQ0MvSjBCO01EZ0sxQixlQUFlO01BQ2YsY0FBd0IsRUFBQTtFQTdKbEM7UUFnS1kseUJDcEt3QixFQUFBO0VESXBDO1FBb0tZLHlCQUE2QztRQUM3Qyw0QkFBZ0Q7UUFDaEQsd0NDeEtrQjtRRHlLbEIseUNDektrQjtRRDBLbEIsdUNDMUtrQixFQUFBO0VERTlCO1FFYUUsYUFBYTtRQUNiLHNCQUFzQixFQUFBO0VGZHhCO1VBK0tjLGdCQUFnQixFQUFBO0VBL0s5QjtVQW1MYyxlQUFlLEVBQUE7RUFuTDdCO1VBdUxjLGVDaEpJLEVBQUE7RUR2Q2xCO1VBMkxjLGlCQUFpQjtVQUNqQixxQkFBcUIsRUFBQTtFQTVMbkM7VUFnTWMsZUFBZSxFQUFBO0VBaE03QjtVQW9NYyxpQkFBaUIsRUFBQTtFQXBNL0I7VUF3TWMsa0JBQWtCLEVBQUE7RUF4TWhDO1VBNE1jLGNDN01RLEVBQUE7RURDdEI7WUErTWdCLDBCQUEwQixFQUFBO0VBL00xQztNRWFFLGFBQWE7TUFDYixzQkFBc0I7TUYwTWQsMENDMU5vQjtNRDJOcEIsd0NDM05vQjtNRDROcEIseUNDNU5vQjtNRDZOcEIsOEJDN05vQjtNRDhOcEIsWUNyTFEsRUFBQTtFRHZDbEI7UUErTlksa0JDeExNLEVBQUE7RUR2Q2xCO0VBdU9JLDRCQUE0QixFQUFBO0VBdk9oQztFRWFFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFRmR4QjtJQThPTSxnQkFBZ0IsRUFBQTtFQTlPdEI7SUFrUE0sZUFBZSxFQUFBO0VBbFByQjtJQXNQTSxlQy9NWSxFQUFBO0VEdkNsQjtJQTBQTSxpQkFBaUI7SUFDakIscUJBQXFCLEVBQUE7RUEzUDNCO0lBK1BNLGVBQWUsRUFBQTtFQS9QckI7SUFtUU0saUJBQWlCLEVBQUE7RUFuUXZCO0lBdVFNLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTtFQXhRekI7SUE0UU0sY0M3UWdCO0lEOFFoQiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUN4Qjs7U0c5RVMsRUhnRkM7RUFoUlY7RUFzUkksdUJBQXVCLEVBQUE7RUF0UjNCO0VBMFJJLHFCQUFxQixFQUFBO0VBMVJ6QjtFRWFFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFRmR4QjtJRWFFLGFBQWE7SUFDYixzQkFBc0IsRUFBQTtFRmR4QjtNQW9TUSxlQzdQVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS93b3JrLW9yZGVycy9mb3JtL3dvcmstb3JkZXJzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbiR0YWJsZS1oZWFkZXItaGVpZ2h0OiAyNHB4O1xyXG5cclxuOmhvc3Qge1xyXG4gIC5ncmlkLWNlbGwtc2VhcmNoIHtcclxuICAgIC5zZWFyY2gtYWN0aW9ucyB7XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLnBsYSAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZDogJGdyZXkxO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgcC1wcm9ncmVzc2Jhci5vbmcgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICRibHVlLWxpZ2h0MTtcclxuICB9XHJcbiAgOjpuZy1kZWVwIHAtcHJvZ3Jlc3NiYXIudGJjIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZS1saWdodDE7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLnBlciAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZDogJGJsdWUtZGFyazE7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLmNsbyAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG4gICAgYmFja2dyb3VuZDogJGdyZWVuLWxpZ2h0MTtcclxuICB9XHJcbiAgOjpuZy1kZWVwIHAtcHJvZ3Jlc3NiYXIucG9zIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZ3JlZW4tbGlnaHQxO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgcC1wcm9ncmVzc2Jhci5wb3IgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICR5ZWxsb3cxO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3Qge1xyXG4gICAgLnRhYmxlIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAud29ya09yZGVyIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZW5naW5lZXJpbmdEYXRhIHtcclxuICAgICAgICB3aWR0aDogMjIuNSU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mbGVldERhdGEge1xyXG4gICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zY2hlZHVsaW5nRGF0YSB7XHJcbiAgICAgICAgd2lkdGg6IDE3LjUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXhlY3V0aW9uRGF0YSB7XHJcbiAgICAgICAgd2lkdGg6IDE3LjUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaWxsdXN0cmF0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTIuNSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFibGUtYm9keSxcclxuICAgICAgLnRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgLnRhYmxlLWNlbGwge1xyXG4gICAgICAgICAgcGFkZGluZzogMCBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gLyAyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWJsZS1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB0b3A6ICR0b3BiYXItaGVpZ2h0O1xyXG5cclxuICAgICAgICAudGFibGUtcm93IHtcclxuICAgICAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAkdGFibGUtaGVhZGVyLWhlaWdodDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6ICR0YWJsZS1oZWFkZXItaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYmxlLWFjdGlvbnMge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgICAucm93LWFjdGlvbnMge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgICAgJiA+IC5hdy1idG4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhYmxlLWZpbHRlcnMge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAgICAgJiA+IC5hdy1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhYmxlLWdsb2JhbC1maWx0ZXIge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG5cclxuICAgICAgICAgICAgLmdsb2JhbC1maWx0ZXItaW5wdXQge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGlucHV0KCk7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEycmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMnJlbTtcclxuXHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dCwgd2lkdGggMC41cyBlYXNlO1xyXG5cclxuICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFibGUtYm9keSB7XHJcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNSk7XHJcblxyXG4gICAgICAgIC50YWJsZS1yb3cge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyLXdpZHRoICRib3JkZXItc3R5bGUgJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogJG1hcmdpbi12YWx1ZSAwO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGFjY2VudC1jb2xvciwgNjUlKTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbGlnaHRlbigkYWNjZW50LWNvbG9yLCA2NSUpO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogY2FsYygyICogI3skYm9yZGVyLXdpZHRofSkgJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IGNhbGMoMiAqICN7JGJvcmRlci13aWR0aH0pICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogY2FsYygyICogI3skYm9yZGVyLXdpZHRofSkgJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50YWJsZS1jZWxsIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgICAgICAgICYuaWxsdXN0cmF0aW9uIGltZyB7XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogNnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhvcml6b250YWwtc2VwYXJhdG9yIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hZGRpdGlvbmFsLWRhdGEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGFiZWwgKyAudmFsdWUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kZXNpZ25hdGlvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50YWJsZS1yb3ctZGV0YWlscyB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IGNhbGMoMiAqICN7JGJvcmRlci13aWR0aH0pICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiBjYWxjKDIgKiAjeyRib3JkZXItd2lkdGh9KSAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IGNhbGMoMiAqICN7JGJvcmRlci13aWR0aH0pICRib3JkZXItc3R5bGUgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICAgIGJvcmRlci10b3A6ICRib3JkZXItd2lkdGggZGFzaGVkICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAgIC50YWJsZS1yb3ctZGV0YWlscy1oZWFkZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJvdy5ub3dyYXAge1xyXG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAudHJlZS10YWJsZS1jZWxsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcblxyXG4gICAgJi5pbGx1c3RyYXRpb24gaW1nIHtcclxuICAgICAgbWF4LWhlaWdodDogNnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaG9yaXpvbnRhbC1zZXBhcmF0b3Ige1xyXG4gICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZGl0aW9uYWwtZGF0YSB7XHJcbiAgICAgIG1hcmdpbi10b3A6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgbWluLXdpZHRoOiAyLjVyZW07XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWwgKyAudmFsdWUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICB9IFxyXG5cclxuICAgIC52YWx1ZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNpZ25hdGlvbiB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuLyogICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH0gKi9cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICA6Om5nLWRlZXAgLnNtYWxsLWNhbGVuZGFyIC51aS1jYWxlbmRhcntcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5zbWFsbC1jYWxlbmRhciAudWktY2FsZW5kYXIgLnVpLWlucHV0dGV4dHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50YWJsZS1maWx0ZXJzLW92ZXJsYXkge1xyXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAuZmlsdGVycyB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcblxyXG4gICAgICAmID4gKiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBVdGlscyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gYnV0dG9uLWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCAkY29sb3IsICRib3JkZXItY29sb3I6IG51bGwpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yO1xyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyLFxyXG4gICY6bm90KDpkaXNhYmxlZCkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogaWYoJGJvcmRlci1jb2xvciA9PSBudWxsLCAkY29sb3IsICRib3JkZXItY29sb3IpO1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgtY29sdW1uKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtcm93KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuQG1peGluIGlucHV0KCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1kaXNhYmxlZCgpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZm9jdXMoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1ob3ZlcigpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlYXJjaC1jcml0ZXJpYS1jb250YWluZXIge1xyXG4gIC5hZHZhbmNlZC1jcml0ZXJpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLWZvb3RlciB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNCk7XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgICYucmVxdWlyZWQge1xyXG4gICAgICBAaW5jbHVkZSBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCgpO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAmID4gYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1vdmVyZmxvdy1oaWRkZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHcmlkIGZvcm0gY29udHJvbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViTWVkaXVtXCI7XHJcblxyXG4gICYgPiBpbnB1dCArIHAtbWVzc2FnZSA+IC51aS1tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyNTUsIDI1NSwgMjU1KSA2MCUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAuYXctaWNvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuLFxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG5cclxuICAgICAgJi5hdy1jYWxlbmRhciAudWktaW5wdXR0ZXh0LFxyXG4gICAgICAmLmF3LWRyb3Bkb3duIC51aS1kcm9wZG93bixcclxuICAgICAgJi5hdy1pbnB1dCxcclxuICAgICAgJi5hdy10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctY2FsZW5kYXIge1xyXG4gICAgICAvLyBGSVhNRTogZml4IGFuIFVJIGlzc3VlIG9uIFByaW1lTkcgY2FsZW5kYXIgY29tcG9uZW50OyB0byByZW1vdmUgd2hlbiBpc3N1ZSB3aWxsIGJlIGZpeGVkIHVwc3RyZWFtXHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAuYXctaWNvbjpub3QoLnJlYWQtb25seS1saW5rKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IC8vIG5vbmVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wtZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW5pbXAsXHJcbiAgICAuYnRuLWV4dGVybmFsLWxpbmstd3JhcHBlcixcclxuICAgIC5idG4tY2xlYXItd3JhcHBlcixcclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlcixcclxuICAgIC5idG4tc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIge1xyXG4gICAgICAuYXctZmlsZXVwbG9hZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudWktYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTkzNFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWNsZWFyIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtcmFkaW9idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAmID4gLmF3LXJhZGlvYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDIgKiAjeyRtYXJnaW4tdmFsdWV9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jYWxlbmRhciB7XHJcbiAgJi51aS1pbnB1dHdyYXBwZXItZm9jdXMge1xyXG4gICAgLnVpLWNhbGVuZGFyIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkY2hlY2tib3gtaGVpZ2h0O1xyXG4gIHdpZHRoOiAkY2hlY2tib3gtaGVpZ2h0O1xyXG5cclxuICAudWktY2hrYm94IHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1jaGtib3gtYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZHJvcGRvd24ge1xyXG4gIC51aS1kcm9wZG93biB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1mb2N1cyB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbixcclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24ge1xyXG4gICAgICByaWdodDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDEuNzVyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5maXhlZC13aWR0aCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZpbGV1cGxvYWQge1xyXG4gIEBleHRlbmQgLmF3LWJ0bjtcclxuXHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLnVpLWZpbGV1cGxvYWQtY2hvb3NlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMCAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudWktYnV0dG9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWlucHV0KCkge1xyXG4gIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZXh0YXJlYSB7XHJcbiAgQGluY2x1ZGUgZ3JpZC1pbnB1dCgpO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAkZm9ybS1jb250cm9sLWhlaWdodDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1yYWRpb2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuICB3aWR0aDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuXHJcbiAgLnVpLXJhZGlvYnV0dG9uIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1yYWRpb2J1dHRvbi1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAudWktcmFkaW9idXR0b24taWNvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGNhbGVuZGFyLXBhbmVsIHtcclxuICAudWktZGF0ZXBpY2tlcjpub3QoLnVpLWRhdGVwaWNrZXItaW5saW5lKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkcm9wZG93bi1wYW5lbCB7XHJcbiAgLnVpLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgICAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlciAudWktZHJvcGRvd24tbGlzdCB7XHJcbiAgICAgIC51aS1kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi51aS1zdGF0ZS1oaWdobGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCAuZ3JpZC1jZWxsLXNlYXJjaCAuc2VhcmNoLWFjdGlvbnMgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDsgfVxuICA6aG9zdCAuZ3JpZC1jZWxsLXNlYXJjaCAuc2VhcmNoLWFjdGlvbnMgYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG5cbjpob3N0IDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLnBsYSAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xuICBiYWNrZ3JvdW5kOiAjYzhkNGQ2OyB9XG5cbjpob3N0IDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLm9uZyAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xuICBiYWNrZ3JvdW5kOiAjYjhkMGU4OyB9XG5cbjpob3N0IDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLnRiYyAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xuICBiYWNrZ3JvdW5kOiAjYjhkMGU4OyB9XG5cbjpob3N0IDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLnBlciAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xuICBiYWNrZ3JvdW5kOiAjMDA2ZWE5OyB9XG5cbjpob3N0IDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLmNsbyAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xuICBiYWNrZ3JvdW5kOiAjNGNhZjUwOyB9XG5cbjpob3N0IDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLnBvcyAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xuICBiYWNrZ3JvdW5kOiAjNGNhZjUwOyB9XG5cbjpob3N0IDo6bmctZGVlcCBwLXByb2dyZXNzYmFyLnBvciAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xuICBiYWNrZ3JvdW5kOiAjZGRkZjAwOyB9XG5cbjpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7IH1cbiAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC53b3JrT3JkZXIge1xuICAgIHdpZHRoOiAyMCU7IH1cbiAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC5lbmdpbmVlcmluZ0RhdGEge1xuICAgIHdpZHRoOiAyMi41JTsgfVxuICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLmZsZWV0RGF0YSB7XG4gICAgd2lkdGg6IDEwJTsgfVxuICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnNjaGVkdWxpbmdEYXRhIHtcbiAgICB3aWR0aDogMTcuNSU7IH1cbiAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC5leGVjdXRpb25EYXRhIHtcbiAgICB3aWR0aDogMTcuNSU7IH1cbiAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC5pbGx1c3RyYXRpb24ge1xuICAgIHdpZHRoOiAxMi41JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1jZWxsLFxuICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciAudGFibGUtY2VsbCB7XG4gICAgcGFkZGluZzogMCBjYWxjKDhweCAvIDIpOyB9XG4gIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiA0MHB4OyB9XG4gICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIgLnRhYmxlLXJvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTk1OTU5O1xuICAgICAgbWF4LWhlaWdodDogMjRweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDI0cHg7IH1cbiAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciAudGFibGUtYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7IH1cbiAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIC50YWJsZS1hY3Rpb25zIC5yb3ctYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciAudGFibGUtYWN0aW9ucyAucm93LWFjdGlvbnMgPiAuYXctYnRuIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4OyB9XG4gICAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIgLnRhYmxlLWFjdGlvbnMgLnJvdy1hY3Rpb25zID4gLmF3LWJ0bjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWhlYWRlciAudGFibGUtYWN0aW9ucyAudGFibGUtZmlsdGVycyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4OyB9XG4gICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIC50YWJsZS1hY3Rpb25zIC50YWJsZS1maWx0ZXJzID4gLmF3LWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgICAgd2lkdGg6IDJyZW07IH1cbiAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIC50YWJsZS1hY3Rpb25zIC50YWJsZS1nbG9iYWwtZmlsdGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlOyB9XG4gICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIC50YWJsZS1hY3Rpb25zIC50YWJsZS1nbG9iYWwtZmlsdGVyIC5nbG9iYWwtZmlsdGVyLWlucHV0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNTk1OTU5O1xuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAycHggMCA0cHggMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIG1pbi13aWR0aDogMTJyZW07XG4gICAgICAgICAgd2lkdGg6IDEycmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQsIHdpZHRoIDAuNXMgZWFzZTsgfVxuICAgICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIC50YWJsZS1hY3Rpb25zIC50YWJsZS1nbG9iYWwtZmlsdGVyIC5nbG9iYWwtZmlsdGVyLWlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIC50YWJsZS1hY3Rpb25zIC50YWJsZS1nbG9iYWwtZmlsdGVyIC5nbG9iYWwtZmlsdGVyLWlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwOyB9XG4gICAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIgLnRhYmxlLWFjdGlvbnMgLnRhYmxlLWdsb2JhbC1maWx0ZXIgLmdsb2JhbC1maWx0ZXItaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwOyB9XG4gICAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1oZWFkZXIgLnRhYmxlLWFjdGlvbnMgLnRhYmxlLWdsb2JhbC1maWx0ZXIgLmdsb2JhbC1maWx0ZXItaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtaGVhZGVyIC50YWJsZS1hY3Rpb25zIC50YWJsZS1nbG9iYWwtZmlsdGVyIC5nbG9iYWwtZmlsdGVyLWlucHV0OmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMTU3OWI7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IHtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDhweCAqIDUpOyB9XG4gICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDhweCAwOyB9XG4gICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdzpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IH1cbiAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtcm93LnNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjVmZjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2U5ZjVmZjtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IGNhbGMoMiAqIDFweCkgc29saWQgIzU5NTk1OTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBjYWxjKDIgKiAxcHgpIHNvbGlkICM1OTU5NTk7XG4gICAgICAgIGJvcmRlci10b3A6IGNhbGMoMiAqIDFweCkgc29saWQgIzU5NTk1OTsgfVxuICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1yb3cgLnRhYmxlLWNlbGwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtcm93IC50YWJsZS1jZWxsLmlsbHVzdHJhdGlvbiBpbWcge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDZyZW07IH1cbiAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1yb3cgLnRhYmxlLWNlbGwgLmhvcml6b250YWwtc2VwYXJhdG9yIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7IH1cbiAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1yb3cgLnRhYmxlLWNlbGwgLmFkZGl0aW9uYWwtZGF0YSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4OyB9XG4gICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtcm93IC50YWJsZS1jZWxsIC5sYWJlbCB7XG4gICAgICAgICAgbWluLXdpZHRoOiAyLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtcm93IC50YWJsZS1jZWxsIC5sYWJlbCArIC52YWx1ZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlOyB9XG4gICAgICAgIDpob3N0IC5ncmlkLWNlbGwtd29yay1vcmRlci1saXN0IC50YWJsZSAudGFibGUtYm9keSAudGFibGUtcm93IC50YWJsZS1jZWxsIC52YWx1ZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cbiAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1yb3cgLnRhYmxlLWNlbGwgLmRlc2lnbmF0aW9uIHtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7IH1cbiAgICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1yb3cgLnRhYmxlLWNlbGwgYSB7XG4gICAgICAgICAgY29sb3I6ICMwMTU3OWI7IH1cbiAgICAgICAgICA6aG9zdCAuZ3JpZC1jZWxsLXdvcmstb3JkZXItbGlzdCAudGFibGUgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdyAudGFibGUtY2VsbCBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG4gICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1yb3ctZGV0YWlscyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJvcmRlci1ib3R0b206IGNhbGMoMiAqIDFweCkgc29saWQgIzU5NTk1OTtcbiAgICAgIGJvcmRlci1sZWZ0OiBjYWxjKDIgKiAxcHgpIHNvbGlkICM1OTU5NTk7XG4gICAgICBib3JkZXItcmlnaHQ6IGNhbGMoMiAqIDFweCkgc29saWQgIzU5NTk1OTtcbiAgICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzU5NTk1OTtcbiAgICAgIHBhZGRpbmc6IDhweDsgfVxuICAgICAgOmhvc3QgLmdyaWQtY2VsbC13b3JrLW9yZGVyLWxpc3QgLnRhYmxlIC50YWJsZS1ib2R5IC50YWJsZS1yb3ctZGV0YWlscyAudGFibGUtcm93LWRldGFpbHMtaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG5cbjpob3N0IC5yb3cubm93cmFwIHtcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDsgfVxuXG46aG9zdCA6Om5nLWRlZXAgLnRyZWUtdGFibGUtY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgOmhvc3QgOjpuZy1kZWVwIC50cmVlLXRhYmxlLWNlbGwuaWxsdXN0cmF0aW9uIGltZyB7XG4gICAgbWF4LWhlaWdodDogNnJlbTsgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnRyZWUtdGFibGUtY2VsbCAuaG9yaXpvbnRhbC1zZXBhcmF0b3Ige1xuICAgIG1hcmdpbi1sZWZ0OiAyJTsgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnRyZWUtdGFibGUtY2VsbCAuYWRkaXRpb25hbC1kYXRhIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgOmhvc3QgOjpuZy1kZWVwIC50cmVlLXRhYmxlLWNlbGwgLmxhYmVsIHtcbiAgICBtaW4td2lkdGg6IDIuNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgOmhvc3QgOjpuZy1kZWVwIC50cmVlLXRhYmxlLWNlbGwgLmxhYmVsICsgLnZhbHVlIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7IH1cbiAgOmhvc3QgOjpuZy1kZWVwIC50cmVlLXRhYmxlLWNlbGwgLnZhbHVlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnRyZWUtdGFibGUtY2VsbCAuZGVzaWduYXRpb24ge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9XG4gIDpob3N0IDo6bmctZGVlcCAudHJlZS10YWJsZS1jZWxsIGEge1xuICAgIGNvbG9yOiAjMDE1NzliO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAvKiAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgfSAqLyB9XG5cbjpob3N0IDo6bmctZGVlcCAuc21hbGwtY2FsZW5kYXIgLnVpLWNhbGVuZGFyIHtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QgOjpuZy1kZWVwIC5zbWFsbC1jYWxlbmRhciAudWktY2FsZW5kYXIgLnVpLWlucHV0dGV4dCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxuXG46aG9zdCAudGFibGUtZmlsdGVycy1vdmVybGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICA6aG9zdCAudGFibGUtZmlsdGVycy1vdmVybGF5IC5maWx0ZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICA6aG9zdCAudGFibGUtZmlsdGVycy1vdmVybGF5IC5maWx0ZXJzID4gKiB7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/maintenance/work-orders/form/work-orders-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/main/maintenance/work-orders/form/work-orders-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WorkOrdersFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrdersFormComponent", function() { return WorkOrdersFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/bido-evolution-constants */ "./src/app/shared/constants/bido-evolution-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/confirmation.service */ "./src/app/shared/services/confirmation.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/file.service */ "./src/app/shared/services/file.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_page_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/page.service */ "./src/app/shared/services/page.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/utils/file-utils */ "./src/app/shared/utils/file-utils.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _work_package_form_work_order_table_filters_work_order_table_filters_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../work-package/form/work-order-table-filters/work-order-table-filters.service */ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.service.ts");
/* harmony import */ var _work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../work-package/form/work-package-form.service */ "./src/app/main/maintenance/work-package/form/work-package-form.service.ts");
/* harmony import */ var _work_orders_form_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./work-orders-form.service */ "./src/app/main/maintenance/work-orders/form/work-orders-form.service.ts");
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
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
























var SUBTITLE_SEPARATOR = ' | ';
var WorkOrdersFormComponent = /** @class */ (function (_super) {
    __extends(WorkOrdersFormComponent, _super);
    function WorkOrdersFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, workOrdersFormService, wpFormService, workOrderTableFiltersService, confirmationService, pageService, translateService, fileService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.workOrdersFormService = workOrdersFormService;
        _this.wpFormService = wpFormService;
        _this.workOrderTableFiltersService = workOrderTableFiltersService;
        _this.confirmationService = confirmationService;
        _this.pageService = pageService;
        _this.translateService = translateService;
        _this.fileService = fileService;
        _this.showSaveSpinner = false;
        _this.statusLabels = [];
        _this.isLoadingWorkOrderTable = false;
        _this.filtersVisible = false;
        _this.workOrderCount = 0;
        _this.displayWorkOrderEdit = false;
        _this.displayWorkOrderSchedulingEdit = false;
        _this.filterActivatedList = [];
        _this.woCriteriaStatusList = [];
        _this.woCriteriaTypeList = [];
        _this.assignedToFilterList = new Set();
        _this.assetFilterList = new Set();
        _this.zoneFilterList = new Set();
        _this.qualificationList = new Set();
        _this.initStatusLabel();
        _this.init();
        return _this;
    }
    WorkOrdersFormComponent_1 = WorkOrdersFormComponent;
    WorkOrdersFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].MAI_WORK_ORDERS_FORM;
    };
    WorkOrdersFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (this.componentData && this.componentData.objectId) {
            this.workPackage = this.serializationService.deserialize(this.componentData.objectId);
            this.projectId = this.workPackage.projectId || '';
        }
        this.workOrdersFormService.loadMROCenterList().subscribe(function (result) {
            _this.mroCenterList = result;
            _this.setSubtitle();
        });
        this.setGlobalFilter();
        this.initWorkOrderTableFilters();
        this.initWorkOrderTableCols();
        this.loadLists();
        this.loadWorkOrders();
    };
    WorkOrdersFormComponent.prototype.init = function () {
        this.workOrderTable = [];
        this.selectedWorkOrders = [];
        this.filterActivatedList = [];
    };
    // SUBTITLE COMPUTATION
    WorkOrdersFormComponent.prototype.setSubtitle = function () {
        var _this = this;
        var subtitle = '';
        if (this.workPackage) {
            if (this.workPackage.projectNumber) {
                subtitle = this.appendSubtitle(subtitle, "WP n\u00B0" + this.workPackage.projectNumber);
            }
            if (this.workPackage.aircraftMsn) {
                subtitle = this.appendSubtitle(subtitle, "MSN " + this.workPackage.aircraftMsn);
            }
            var mroCode = this.workPackage.bireRepairCenterCode;
            if (mroCode) {
                var mroItem = void 0;
                if (Array.isArray(this.mroCenterList)) {
                    mroItem = this.mroCenterList.find(function (mro) { return mro.value === _this.workPackage.bireRepairCenterCode; });
                }
                if (!mroItem) {
                    mroItem = { value: mroCode, label: mroCode };
                }
                subtitle = this.appendSubtitle(subtitle, "" + mroItem.label);
            }
        }
        this.context = subtitle;
        this.displayComponentContext(subtitle, false);
    };
    WorkOrdersFormComponent.prototype.appendSubtitle = function (subtitle, toAppend) {
        var ret = subtitle;
        if (subtitle.length > 0) {
            ret += SUBTITLE_SEPARATOR;
        }
        ret += toAppend;
        return ret;
    };
    // DATA LOADING
    WorkOrdersFormComponent.prototype.loadWorkOrders = function () {
        var _this = this;
        this.selectedWorkOrders = [];
        this.isLoadingWorkOrderTable = true;
        this.wpFormService.getBidmWorkOrdersStructureByProject(this.projectId).subscribe(function (woList) {
            _this.workOrderInitialTable = __spread(woList);
            _this.workOrderInitialTable.forEach(function (wo) { return _this.loadIllustrations(wo.data); });
            _this.workOrderList = _this.flatDeep(woList);
            _this.updateWorkOrderTable();
            _this.initFilterLists();
            _this.isLoadingWorkOrderTable = false;
        });
    };
    WorkOrdersFormComponent.prototype.flatDeep = function (tree) {
        var _this = this;
        return tree.reduce(function (acc, val) { return __spread(acc, (val ? [val.data] : []), (val.children ? _this.flatDeep(val.children) : [])); }, []);
    };
    WorkOrdersFormComponent.prototype.loadLists = function () {
        var _this = this;
        this.wpFormService.woStatusList$.subscribe(function (list) {
            _this.woStatusList = list;
            _this.workOrderTableCriteria.statusList = _this.woStatusList.map(function (status) { return status.value; });
            _this.woCriteriaStatusList = _this.workOrderTableCriteria.statusList;
            var removedStatuses = [_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].AIRM_PROJECT_STATUS_LINE_MAINTENANCE];
            _this.statusList = list.filter(function (status) { return !removedStatuses.includes(status.value); });
        });
        this.wpFormService.woTypeList$.subscribe(function (list) {
            _this.woTypeList = list;
            _this.workOrderTableCriteria.woTypeList = _this.woTypeList.map(function (woType) { return woType.value; });
            _this.woCriteriaTypeList = _this.workOrderTableCriteria.woTypeList;
        });
    };
    WorkOrdersFormComponent.prototype.loadIllustrations = function (workOrderRow) {
        var _this = this;
        var workOrder = workOrderRow.bidmWorkOrder;
        var equipment = workOrderRow.bidoEquipmentData;
        if (workOrder && equipment) {
            if (!!workOrder.bireItemChapter &&
                !!workOrder.bireItemSection &&
                !!workOrder.bireItemSubject &&
                !!workOrder.bireItemSheet &&
                !!workOrder.bireItemMarks) {
                var bireItemDtoId = {
                    familyCode: workOrder.bireItemFamilyCode,
                    variantCode: workOrder.bireItemVariantCode,
                    chapter: workOrder.bireItemChapter,
                    section: workOrder.bireItemSection,
                    subject: workOrder.bireItemSubject,
                    sheet: workOrder.bireItemSheet,
                    marks: workOrder.bireItemMarks,
                    structureType: _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].STRUCTURE_TYPE_IPC_KEY
                };
                if (equipment.equipmentCode) {
                    this.fileService.findIllustration(bireItemDtoId, equipment).subscribe(function (illustrationDocument) {
                        if (illustrationDocument) {
                            workOrderRow.materialIllustration = _this.fileService.sanitizeAndGetBase64Prefix(illustrationDocument);
                        }
                        // Refresh view with illustations
                        _this.updateWorkOrderTable();
                        _this.initWorkOrderTableCols();
                    });
                }
            }
        }
    };
    // TABLE COLUMNS HANDLING
    WorkOrdersFormComponent.prototype.initWorkOrderTableCols = function () {
        if (this.hasIllustration(this.workOrderTable)) {
            this.workOrderTableCols = [
                { field: 'workOrder', alignment: 'left', width: '20%' },
                { field: 'engineeringData', alignment: 'left', width: '20%' },
                { field: 'fleetData', alignment: 'left', width: '10%' },
                { field: 'schedulingData', alignment: 'left', width: '15%' },
                { field: 'executionData', alignment: 'left', width: '15%' },
                { field: 'componentCockpitText', alignment: 'left', width: '10%' },
                { field: 'illustration', alignment: 'center', width: '10%' }
            ];
        }
        else {
            this.workOrderTableCols = [
                { field: 'workOrder', alignment: 'left', width: '22.5%' },
                { field: 'engineeringData', alignment: 'left', width: '20%' },
                { field: 'fleetData', alignment: 'left', width: '12.5%' },
                { field: 'schedulingData', alignment: 'left', width: '17.5%' },
                { field: 'executionData', alignment: 'left', width: '17.5%' },
                { field: 'componentCockpitText', alignment: 'left', width: '10%' }
            ];
        }
    };
    WorkOrdersFormComponent.prototype.hasIllustration = function (workOrderTable) {
        var _this = this;
        return (!!workOrderTable &&
            !!workOrderTable.find(function (node) {
                return !!node.data.materialIllustration || _this.hasIllustration(node.children);
            }));
    };
    // FILTERS HANDLING
    WorkOrdersFormComponent.prototype.initWorkOrderTableFilters = function () {
        this.workOrderTableCriteria = {
            statusList: this.woCriteriaStatusList,
            woTypeList: this.woCriteriaTypeList,
            assignedTo: '',
            qualification: '',
            asset: '',
            zone: ''
        };
    };
    WorkOrdersFormComponent.prototype.resetWorkOrderTableFilters = function () {
        this.initWorkOrderTableFilters();
        this.updateWorkOrderTable();
    };
    WorkOrdersFormComponent.prototype.searchGlobalFilterChange = function (searchGlobalFilter) {
        this.searchGlobalFilter = searchGlobalFilter;
        this.searchGlobalFilter$.next(searchGlobalFilter);
    };
    WorkOrdersFormComponent.prototype.setGlobalFilter = function () {
        var _this = this;
        this.searchGlobalFilter = '';
        this.searchGlobalFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchGlobalFilter$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(WorkOrdersFormComponent_1.SEARCH_TEXT_DEBOUNCE_TIME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe))
            .subscribe(function () { return _this.updateWorkOrderTable(); });
    };
    WorkOrdersFormComponent.prototype.updateWorkOrderTable = function () {
        var _this = this;
        this.workOrderTable = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.workOrderInitialTable).filter(function (node) {
            return _this.treeNodeMatchFilters(node, _this.searchGlobalFilter);
        });
        this.filterActivatedList = __spread(this.getChipFilters('statusList', this.woStatusList), this.getChipFilters('woTypeList', this.woTypeList), this.getChipFilter('assignedTo'), this.getChipFilter('qualification'), this.getChipFilter('asset'), this.getChipFilter('zone'));
        this.initWorkOrderTableCols();
    };
    WorkOrdersFormComponent.prototype.getChipFilters = function (listName, filterList) {
        var _this = this;
        var filterCriteria = this.workOrderTableCriteria[listName];
        return filterList
            .filter(function (_a) {
            var value = _a.value;
            return filterCriteria.includes(value);
        })
            .map(function (item) {
            return {
                value: !!item.label ? item.label : '',
                action: function () {
                    _this.workOrderTableCriteria[listName] = filterCriteria.filter(function (elem) { return elem !== item.value; });
                    _this.updateWorkOrderTable();
                }
            };
        });
    };
    WorkOrdersFormComponent.prototype.getChipFilter = function (filterName) {
        var _this = this;
        var filterValue = this.workOrderTableCriteria[filterName];
        return !filterValue
            ? []
            : [
                {
                    value: filterValue,
                    action: function () {
                        _this.workOrderTableCriteria[filterName] = '';
                        _this.updateWorkOrderTable();
                    }
                }
            ];
    };
    WorkOrdersFormComponent.prototype.treeNodeMatchFilters = function (node, searchText) {
        var _this = this;
        if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__["ListUtils"].isNullOrEmpty(node.children)) {
            node.children = node.children.filter(function (child) { return _this.treeNodeMatchFilters(child, searchText); });
        }
        var nodeData = node.data;
        // Description
        var descriptionMatch = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isNullOrEmpty(searchText) || nodeData.description.toLowerCase().includes(searchText);
        // Code
        var codeMatch = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isNullOrEmpty(searchText) || nodeData.code.toLowerCase().includes(searchText);
        // Status
        var statusMatch = true;
        if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__["ListUtils"].isNullOrEmpty(this.workOrderTableCriteria.statusList)) {
            statusMatch = this.workOrderTableCriteria.statusList.includes(nodeData.status);
        }
        // AssignedTo
        var assignedToMatch = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isNullOrEmpty(this.workOrderTableCriteria.assignedTo) ||
            this.workOrderTableCriteria.assignedTo === nodeData.assignedTo;
        // Asset
        var assetMatch = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isNullOrEmpty(this.workOrderTableCriteria.asset) ||
            this.workOrderTableCriteria.asset === nodeData.asset;
        // Zone
        var zoneMatch = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isNullOrEmpty(this.workOrderTableCriteria.zone) || this.workOrderTableCriteria.zone === nodeData.zone;
        // Qualification
        var qualificationMatch = _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].isNullOrEmpty(this.workOrderTableCriteria.qualification) ||
            this.workOrderTableCriteria.qualification === nodeData.qualification;
        // Type
        var woTypeMatch = true;
        if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__["ListUtils"].isNullOrEmpty(this.workOrderTableCriteria.woTypeList)) {
            woTypeMatch = !!nodeData.type && this.workOrderTableCriteria.woTypeList.includes(nodeData.woType);
        }
        return (_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__["ListUtils"].orEmpty(node.children).length > 0 ||
            ((codeMatch || descriptionMatch) &&
                statusMatch &&
                assignedToMatch &&
                assetMatch &&
                zoneMatch &&
                qualificationMatch &&
                woTypeMatch));
    };
    WorkOrdersFormComponent.prototype.initFilterLists = function () {
        var e_1, _a;
        this.assignedToFilterList.clear();
        this.assetFilterList.clear();
        this.zoneFilterList.clear();
        this.qualificationList.clear();
        try {
            for (var _b = __values(this.workOrderInitialTable), _c = _b.next(); !_c.done; _c = _b.next()) {
                var wo = _c.value;
                this.treeNodeFilterListsCreation(wo);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.workOrderTableFiltersService.assignedToFilterList = this.assignedToFilterList;
        this.workOrderTableFiltersService.assetFilterList = this.assetFilterList;
        this.workOrderTableFiltersService.zoneFilterList = this.zoneFilterList;
        this.workOrderTableFiltersService.qualificationList = this.qualificationList;
    };
    WorkOrdersFormComponent.prototype.treeNodeFilterListsCreation = function (node) {
        var e_2, _a;
        if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_19__["ListUtils"].isNullOrEmpty(node.children) && node.children !== undefined) {
            try {
                for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var children = _c.value;
                    this.treeNodeFilterListsCreation(children);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        var nodeData = node.data;
        if (!!nodeData.assignedTo) {
            this.assignedToFilterList.add(nodeData.assignedTo);
        }
        if (!!nodeData.asset) {
            this.assetFilterList.add(nodeData.asset);
        }
        if (!!nodeData.zone) {
            this.zoneFilterList.add(nodeData.zone);
        }
        if (!!nodeData.qualification) {
            this.qualificationList.add(nodeData.qualification);
        }
    };
    // WORK ORDER TABLE LINKS HANDLER
    WorkOrdersFormComponent.prototype.getBidmWOFromTreeNodes = function (woNodes) {
        var _this = this;
        return woNodes.map(function (node) {
            var nodeData = node.data;
            return {
                projectId: _this.projectId,
                woId: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].orEmpty(nodeData.woId)
            };
        });
    };
    WorkOrdersFormComponent.prototype.openSelectedWorkOrders = function (curWorkOrder) {
        var e_3, _a;
        var woTreeNodeList = curWorkOrder ? [{ data: curWorkOrder }] : this.selectedWorkOrders;
        var woList = this.getBidmWOFromTreeNodes(woTreeNodeList);
        if (woList.length === 1 && !curWorkOrder) {
            this.workOrderSelected = {
                projectId: this.projectId,
                woId: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__["StringUtils"].orEmpty(woList[0].woId)
            };
            this.displayWorkOrderEdit = true;
        }
        else {
            try {
                for (var woList_1 = __values(woList), woList_1_1 = woList_1.next(); !woList_1_1.done; woList_1_1 = woList_1.next()) {
                    var wo = woList_1_1.value;
                    var data = {
                        id: this.tabService.generateId(),
                        componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].MAI_WORK_ORDER_FORM,
                        openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write,
                        objectId: this.serializationService.serialize(wo)
                    };
                    var labelKey = 'transaction.' + data.componentId;
                    this.tabService.open(this.tabService.create(data, labelKey, true));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (woList_1_1 && !woList_1_1.done && (_a = woList_1.return)) _a.call(woList_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
    };
    WorkOrdersFormComponent.prototype.displayWorkOrderScreenEdit = function () {
        this.workOrderSelected = undefined;
        this.displayWorkOrderEdit = true;
    };
    WorkOrdersFormComponent.prototype.onAddWorkOrder = function (isCreated) {
        var _this = this;
        if (isCreated) {
            this.workOrdersFormService.calculateBidmProjectStatus(this.workPackage).subscribe(function (statusState) {
                if (_this.workPackage.statusState !== statusState) {
                    _this.updateOpenMode(_shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Write);
                    _this.workPackage.statusState = statusState;
                }
            });
            this.loadWorkOrders();
        }
    };
    WorkOrdersFormComponent.prototype.openUpdateSchedulingDialog = function () {
        this.displayWorkOrderSchedulingEdit = true;
    };
    WorkOrdersFormComponent.prototype.onWorkOrderSchedulingEdited = function (woScheduleInfo) {
        var _this = this;
        var isAssignedToUpdate = woScheduleInfo.assignedTo !== undefined && woScheduleInfo.assignedTo.length > 0;
        var isStartDateToUpdate = woScheduleInfo.woScheduledStartDate !== undefined;
        var isEndDateToUpdate = woScheduleInfo.woScheduledEndDate !== undefined;
        if (isAssignedToUpdate || isStartDateToUpdate || isEndDateToUpdate) {
            var woList = this.selectedWorkOrders.map(function (node) { return node.data; });
            var bidmWorkOrderList = woList.map(function (wo) {
                var bidmWorkOrder = wo.bidmWorkOrder;
                bidmWorkOrder.woAssignedTo = isAssignedToUpdate ? woScheduleInfo.assignedTo : bidmWorkOrder.woAssignedTo;
                bidmWorkOrder.woScheduledStartDate = isStartDateToUpdate
                    ? woScheduleInfo.woScheduledStartDate
                    : bidmWorkOrder.woScheduledStartDate;
                bidmWorkOrder.woScheduledEndDate = isEndDateToUpdate
                    ? woScheduleInfo.woScheduledEndDate
                    : bidmWorkOrder.woScheduledEndDate;
                return bidmWorkOrder;
            });
            this.workOrdersFormService.updateBidmWorkOrders(bidmWorkOrderList).subscribe(function (result) {
                _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnUpdateScheduleWO'));
                _this.loadWorkOrders();
            }, function (error) {
                if (!!error.error && !!error.error.errorDesc && error.error.errorDesc.length > 0) {
                    _this.messageService.showErrorMessage(error.error.errorDesc);
                }
                else {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnUpdateScheduleWO'));
                }
                _this.loadWorkOrders();
            });
        }
    };
    WorkOrdersFormComponent.prototype.deleteSelectedWorkOrder = function () {
        var _this = this;
        var partialMessageKey = this.selectedWorkOrders.length > 1 ? 'confirmDeleteSelectedWOs' : 'confirmDeleteSelectedWO';
        this.confirmationService.confirmDelete({
            messageKey: this.getTranslateKey(partialMessageKey),
            accept: function () {
                var bidmWorkOrderDTOIdList = _this.getBidmWOFromTreeNodes(_this.selectedWorkOrders);
                _this.workOrdersFormService.removeBidmWorkOrderList(bidmWorkOrderDTOIdList).subscribe(function (result) {
                    _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnDeleteWO'));
                    _this.loadWorkOrders();
                }, function (error) {
                    _this.messageService.showErrorMessage(_this.getTranslateKey('errorOnDeleteWO'));
                    _this.loadWorkOrders();
                });
            }
        });
    };
    // GLOBAL ACTIONS HANDLER
    WorkOrdersFormComponent.prototype.goToCalendar = function () {
        var labelKey = 'transaction.WorkOrdersCalendarFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'WorkOrdersCalendarFormComponent',
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read
        };
        if (!!this.workPackage) {
            data.objectId = this.serializationService.serialize(this.workPackage);
        }
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WorkOrdersFormComponent.prototype.printAllJobsCards = function () {
        var _this = this;
        this.showSaveSpinner = true;
        var workOrderIdList = [];
        this.workOrderList.forEach(function (wo) {
            if (wo.woId && wo.projectId) {
                var workOrderId = {
                    woId: wo.woId,
                    projectId: wo.projectId
                };
                workOrderIdList.push(workOrderId);
            }
        });
        this.workOrdersFormService.generateJobcards(workOrderIdList).subscribe({
            next: function (woCard) {
                _shared_utils_file_utils__WEBPACK_IMPORTED_MODULE_18__["FileUtils"].downloadFile(woCard.fileContent, woCard.fileName);
                _this.showSaveSpinner = false;
            }
        });
    };
    WorkOrdersFormComponent.prototype.onReload = function () {
        this.init();
        this.loadLists();
        this.loadWorkOrders();
    };
    // WORK ORDER TABLE LINKS HANDLER
    WorkOrdersFormComponent.prototype.openSnLink = function (code) {
        if (code) {
            this.openEquipment(code, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read);
        }
    };
    WorkOrdersFormComponent.prototype.openEquipment = function (objectId, openMode) {
        var labelKey = 'transaction.AircraftFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'AircraftFormComponent',
            openMode: openMode
        };
        if (!!objectId) {
            var equipmentId = {
                equipmentCode: objectId
            };
            data.objectId = this.serializationService.serialize(equipmentId);
        }
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WorkOrdersFormComponent.prototype.openPartNumberLink = function (pnCode) {
        this.openPN(pnCode, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read);
    };
    WorkOrdersFormComponent.prototype.openPN = function (objectId, openMode) {
        var labelKey = 'transaction.PartNumberFormComponent';
        var data = {
            id: this.tabService.generateId(),
            componentId: 'PartNumberFormComponent',
            objectId: objectId,
            openMode: openMode
        };
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WorkOrdersFormComponent.prototype.openWorkOrderLink = function (workOrder) {
        if (workOrder && workOrder.woId && workOrder.projectId) {
            var workOrderId = {
                woId: workOrder.woId,
                projectId: workOrder.projectId
            };
            this.openWorkOrder(workOrderId, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read);
        }
    };
    WorkOrdersFormComponent.prototype.openWorkOrder = function (wo, openModeWanted) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].MAI_WORK_ORDER_FORM,
            openMode: openModeWanted,
            objectId: this.serializationService.serialize(wo)
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WorkOrdersFormComponent.prototype.openSelectedGoodsMovement = function () {
        var _this = this;
        var woList = this.getBidmWOFromTreeNodes(this.selectedWorkOrders);
        woList.forEach(function (wo) {
            var goodsMovementInput = {
                workOrderId: wo.woId,
                workPackageId: wo.projectId
            };
            var data = {
                id: _this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].LOG_GOODS_MOVEMENT_WORK_ORDER_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read,
                objectId: _this.serializationService.serialize(goodsMovementInput)
            };
            var labelKey = 'transaction.' + data.componentId;
            _this.tabService.open(_this.tabService.create(data, labelKey, true));
        });
    };
    WorkOrdersFormComponent.prototype.openItem = function (workOrder) {
        var woItemDTO = {
            familyCode: workOrder.bireItemFamilyCode,
            variantCode: workOrder.bireItemVariantCode,
            chapter: workOrder.bireItemChapter,
            section: workOrder.bireItemSection,
            subject: workOrder.bireItemSubject,
            sheet: workOrder.bireItemSheet,
            marks: workOrder.bireItemMarks,
            structureType: _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].STRUCTURE_TYPE_IPC_KEY
        };
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_7__["ComponentConstants"].ENG_ITEM_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read
        };
        data.objectId = this.serializationService.serialize(woItemDTO);
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    WorkOrdersFormComponent.prototype.consultWorkOrderOrigin = function (curWorkOrder) {
        var _this = this;
        var workOrder = curWorkOrder.bidmWorkOrder;
        var calculateWorkOrderImput = {
            workOrderData: curWorkOrder.bidmWorkOrder,
            workPackageAssetCode: this.workPackage.assetCode,
            fromLineMaintenance: false
        };
        this.workOrdersFormService.calculateWorkOrderStatus(calculateWorkOrderImput).subscribe(function (calculateWorkOrder) {
            var assetWorkOrderOriginInput = {
                woType: workOrder.woType,
                woSource: workOrder.woSource,
                evolutionType: calculateWorkOrder.evolutionType,
                familyVariantCode: curWorkOrder.familyVariantCode
            };
            _this.workOrdersFormService.findWorkOrderOriginDetails(assetWorkOrderOriginInput).subscribe(function (result) {
                if (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].AIRM_WORK_ORDER_TYPE_TASK === workOrder.woType) {
                    if (!!result.bireTaskDTOId) {
                        // open task form
                        var bireTaskDTO = result.bireTaskDTOId;
                        _this.pageService.openTask(bireTaskDTO);
                    }
                }
                else if (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].AIRM_WORK_ORDER_TYPE_EVOLUTION === workOrder.woType) {
                    if (_shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_6__["BidoEvolutionConstants"].CODE_EVOLUTION === assetWorkOrderOriginInput.evolutionType) {
                        if (!!result.bireEvolutionDTOId) {
                            // open evolution form
                            var bireEvolutionDTOId = {
                                adSbModDTOId: result.bireEvolutionDTOId
                            };
                            _this.pageService.openEvolution(bireEvolutionDTOId);
                        }
                    }
                    else if (_shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_6__["BidoEvolutionConstants"].CODE_AD === assetWorkOrderOriginInput.evolutionType) {
                        if (!!result.bireSbDTOId) {
                            // open Airworthiness Directive form
                            var bireSBDTOId = {
                                adSbModDTOId: result.bireSbDTOId
                            };
                            _this.pageService.openAD(bireSBDTOId);
                        }
                    }
                    else if (_shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_6__["BidoEvolutionConstants"].CODE_SB === assetWorkOrderOriginInput.evolutionType) {
                        if (!!result.bireSbDTOId) {
                            // open Service Bulletin form
                            var bireSbDTOId = {
                                adSbModDTOId: result.bireSbDTOId
                            };
                            _this.pageService.openSB(bireSbDTOId);
                        }
                    }
                    else if (_shared_constants_bido_evolution_constants__WEBPACK_IMPORTED_MODULE_6__["BidoEvolutionConstants"].CODE_MODIFICATION === assetWorkOrderOriginInput.evolutionType) {
                        if (!!result.bireModificationDTOId) {
                            // open modification form
                            var bireModificationDTOId = {
                                adSbModDTOId: result.bireModificationDTOId
                            };
                            _this.pageService.openModification(bireModificationDTOId);
                        }
                    }
                }
                else if (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].AIRM_WORK_ORDER_TYPE_DEFECT === assetWorkOrderOriginInput.woType) {
                    if (!!result.bidoNotificationDTOId) {
                        // open event form
                        _this.pageService.openEvent(result.bidoNotificationDTOId);
                    }
                }
                else if (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].AIRM_WORK_ORDER_TYPE_SN_CHANGE === assetWorkOrderOriginInput.woType) {
                    if (!!result.bidoEquipmentDTO) {
                        if (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY === result.bidoEquipmentDTO.equipmentFunction) {
                            // open aircraft
                            _this.pageService.openAircraft(result.bidoEquipmentDTO.equipmentCode, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_8__["ComponentOpenMode"].Read);
                        }
                        else if (_shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY === result.bidoEquipmentDTO.equipmentFunction) {
                            // open engine
                            _this.pageService.openEngine(result.bidoEquipmentDTO.equipmentCode);
                        }
                        else {
                            // open equipment
                            _this.pageService.openEquipment(result.bidoEquipmentDTO.equipmentCode);
                        }
                    }
                }
            });
        });
    };
    // REFERENCES UTILS
    WorkOrdersFormComponent.prototype.initStatusLabel = function () {
        var statusLabel = [];
        this.addValueLabel(statusLabel, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_PLANNED, 'planned');
        this.addValueLabel(statusLabel, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_ONGOING, 'onGoing');
        this.addValueLabel(statusLabel, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_PERFORMED, 'performed');
        this.addValueLabel(statusLabel, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_TO_BE_CONFIRMED, 'toBeConfirm');
        this.addValueLabel(statusLabel, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_CLOSE, 'close');
        this.addValueLabel(statusLabel, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_POSTPONEMENT_REQUESTED, 'postPonementRequest');
        this.addValueLabel(statusLabel, _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__["AWPropertiesConstants"].AIRM_OPERATION_STATUS_POSTPONED, 'postponed');
        this.statusLabels = statusLabel;
    };
    WorkOrdersFormComponent.prototype.addValueLabel = function (references, value, labelKeySuffix) {
        if (references) {
            references.push({
                value: value,
                label: this.translateService.instant(this.getTranslateKey(labelKeySuffix))
            });
        }
    };
    WorkOrdersFormComponent.prototype.getStatusLabel = function (value) {
        var labelValue = this.statusLabels.find(function (lv) { return lv.value === value; });
        return labelValue && labelValue.label;
    };
    var WorkOrdersFormComponent_1;
    WorkOrdersFormComponent.SEARCH_TEXT_DEBOUNCE_TIME = 500;
    WorkOrdersFormComponent = WorkOrdersFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-work-orders-form',
            template: __webpack_require__(/*! ./work-orders-form.component.html */ "./src/app/main/maintenance/work-orders/form/work-orders-form.component.html"),
            styles: [__webpack_require__(/*! ./work-orders-form.component.scss */ "./src/app/main/maintenance/work-orders/form/work-orders-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_12__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_13__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_15__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_16__["TabService"],
            _work_orders_form_service__WEBPACK_IMPORTED_MODULE_23__["WorkOrdersFormService"],
            _work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_22__["WorkPackageFormService"],
            _work_package_form_work_order_table_filters_work_order_table_filters_service__WEBPACK_IMPORTED_MODULE_21__["WorkOrderTableFiltersService"],
            _shared_services_confirmation_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmationService"],
            _shared_services_page_service__WEBPACK_IMPORTED_MODULE_14__["PageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_file_service__WEBPACK_IMPORTED_MODULE_11__["FileService"]])
    ], WorkOrdersFormComponent);
    return WorkOrdersFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_17__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/maintenance/work-orders/work-orders.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/maintenance/work-orders/work-orders.module.ts ***!
  \********************************************************************/
/*! exports provided: WorkOrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrdersModule", function() { return WorkOrdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/progressbar.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_progressbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/treetable.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_treetable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_services_file_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/file.service */ "./src/app/shared/services/file.service.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _work_package_form_work_order_table_filters_work_order_table_filters_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../work-package/form/work-order-table-filters/work-order-table-filters.module */ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.module.ts");
/* harmony import */ var _work_package_form_work_order_table_filters_work_order_table_filters_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../work-package/form/work-order-table-filters/work-order-table-filters.service */ "./src/app/main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.service.ts");
/* harmony import */ var _work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../work-package/form/work-package-form.service */ "./src/app/main/maintenance/work-package/form/work-package-form.service.ts");
/* harmony import */ var _work_package_work_package_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../work-package/work-package.module */ "./src/app/main/maintenance/work-package/work-package.module.ts");
/* harmony import */ var _form_work_orders_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form/work-orders-form.component */ "./src/app/main/maintenance/work-orders/form/work-orders-form.component.ts");
/* harmony import */ var _form_work_orders_form_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./form/work-orders-form.service */ "./src/app/main/maintenance/work-orders/form/work-orders-form.service.ts");
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
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
    primeng_treetable__WEBPACK_IMPORTED_MODULE_8__["TreeTableModule"],
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__["CheckboxModule"],
    primeng_progressbar__WEBPACK_IMPORTED_MODULE_4__["ProgressBarModule"],
    primeng_splitbutton__WEBPACK_IMPORTED_MODULE_5__["SplitButtonModule"],
    primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
    primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_3__["OverlayPanelModule"]
];
var INTERNAL_MODULES = [_work_package_work_package_module__WEBPACK_IMPORTED_MODULE_17__["WorkPackageModule"], _work_package_form_work_order_table_filters_work_order_table_filters_module__WEBPACK_IMPORTED_MODULE_14__["WorkOrderTableFiltersModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [_form_work_orders_form_component__WEBPACK_IMPORTED_MODULE_18__["WorkOrdersFormComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_work_orders_form_service__WEBPACK_IMPORTED_MODULE_19__["WorkOrdersFormService"], _work_package_form_work_package_form_service__WEBPACK_IMPORTED_MODULE_16__["WorkPackageFormService"], _work_package_form_work_order_table_filters_work_order_table_filters_service__WEBPACK_IMPORTED_MODULE_15__["WorkOrderTableFiltersService"], _shared_services_file_service__WEBPACK_IMPORTED_MODULE_12__["FileService"]];
var WorkOrdersModule = /** @class */ (function () {
    function WorkOrdersModule() {
    }
    WorkOrdersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_9__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_10__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_11__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_13__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], WorkOrdersModule);
    return WorkOrdersModule;
}());



/***/ })

}]);
//# sourceMappingURL=maintenance-work-orders-work-orders-module.js.map