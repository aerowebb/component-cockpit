(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-stock-valuation-stock-valuation-module"],{

/***/ "./src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">\r\n        {{ \"page.searchPage\" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button type=\"button\" mat-raised-button (click)=\"newCalculation()\">\r\n      {{ componentData.componentId + \".newCalculation\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"page.mainData\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ componentData.componentId + \".materialCode\" | translate }} </label>\r\n\r\n                  <div\r\n                    *ngIf=\"\r\n                      !!stock && !!stock.searchInputStockValuation && !!stock.searchInputStockValuation.materialCode\r\n                    \"\r\n                    class=\"form-control\"\r\n                  >\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"aw-input\"\r\n                      [(ngModel)]=\"stock.searchInputStockValuation.materialCode\"\r\n                      [disabled]=\"true\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\"> {{ componentData.componentId + \".warehouseId\" | translate }} </label>\r\n\r\n                  <div\r\n                    *ngIf=\"\r\n                      !!stock && !!stock.searchInputStockValuation && !!stock.searchInputStockValuation.warehouseId\r\n                    \"\r\n                    class=\"form-control\"\r\n                  >\r\n                    <input type=\"text\" class=\"aw-input\" [(ngModel)]=\"warehouse\" [disabled]=\"true\" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\">{{ \"global.date\" | translate }}</label>\r\n\r\n                  <div\r\n                    *ngIf=\"!!stock && !!stock.searchInputStockValuation && !!stock.searchInputStockValuation.date\"\r\n                    class=\"form-control\"\r\n                  >\r\n                    <p-calendar\r\n                      showButtonBar=\"true\"\r\n                      [monthNavigator]=\"true\"\r\n                      [yearNavigator]=\"true\"\r\n                      [yearRange]=\"sessionService.calendarYearRange\"\r\n                      class=\"aw-calendar\"\r\n                      [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                      [locale]=\"sessionService.calendarFormat\"\r\n                      [(ngModel)]=\"stock.searchInputStockValuation.date\"\r\n                      disabled\r\n                    ></p-calendar>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-label\"\r\n                    >{{ componentData.componentId + \".avgValue\" | translate }} - {{ currency }}\r\n                  </label>\r\n\r\n                  <div\r\n                    *ngIf=\"!!stock && stock.resultCumpStockValue !== null && stock.resultCumpStockValue !== undefined\"\r\n                    class=\"form-control\"\r\n                  >\r\n                    <input type=\"text\" class=\"aw-input\" [disabled]=\"true\" [(ngModel)]=\"averageValue\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--6\">\r\n          <div class=\"grid-cell grid-cell--container grid-cell-chart\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container loading-indicator\">\r\n                <div class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".quantityChart\" | translate }}\r\n                  <div *ngIf=\"!chartContentReady\" class=\"lds-hourglass\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"row flex-row--justify-center\">\r\n                <div *ngIf=\"chartContentReady\" class=\"chart-container\">\r\n                  <div class=\"chart-wrapper\">\r\n                    <p-chart\r\n                      [type]=\"chartType\"\r\n                      [data]=\"stockQuantityVariationData\"\r\n                      [options]=\"quantityChartOptions\"\r\n                      width=\"100%\"\r\n                      height=\"100%\"\r\n                    ></p-chart>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"row flex-row--justify-center\">\r\n                <div *ngIf=\"chartContentReady\" class=\"chart-container\">\r\n                  <div class=\"chart-legend\">\r\n                    <div class=\"chart-legend-label\">\r\n                      <div class=\"chart-legend-label-color quantity\"></div>\r\n                      <span class=\"chart-value\">{{ getComponentName() + \".quantity\" | translate }}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"grid-cell--6\">\r\n          <div class=\"grid-cell grid-cell--container grid-cell-chart\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container loading-indicator\">\r\n                <div class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".amountChart\" | translate }}\r\n                  <div *ngIf=\"!chartContentReady\" class=\"lds-hourglass\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"row flex-row--justify-center\">\r\n                <div *ngIf=\"chartContentReady\" class=\"chart-container\">\r\n                  <div class=\"chart-wrapper\">\r\n                    <p-chart\r\n                      [type]=\"chartType\"\r\n                      [data]=\"stockAmountVariationData\"\r\n                      [options]=\"amountChartOptions\"\r\n                      width=\"100%\"\r\n                      height=\"100%\"\r\n                    ></p-chart>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"row flex-row--justify-center\">\r\n                <div *ngIf=\"chartContentReady\" class=\"chart-container\">\r\n                  <div class=\"chart-legend\">\r\n                    <div class=\"chart-legend-label\">\r\n                      <div class=\"chart-legend-label-color amount\"></div>\r\n                      <span class=\"chart-value\">{{ getComponentName() + \".amount\" | translate }}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ getComponentName() + \".stockSheet\" | translate }} ({{\r\n                    stockSheetTableForDisplay ? stockSheetTableForDisplay.length : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <div class=\"section\">\r\n                <div class=\"section-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".receiptQty\" | translate }}</label>\r\n\r\n                      <div\r\n                        *ngIf=\"\r\n                          !!stock &&\r\n                          stock.resultCumpReceiptQuantity !== null &&\r\n                          stock.resultCumpReceiptQuantity !== undefined\r\n                        \"\r\n                        class=\"form-control\"\r\n                      >\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input\"\r\n                          [disabled]=\"true\"\r\n                          [(ngModel)]=\"stock.resultCumpReceiptQuantity\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".issueQty\" | translate }}</label>\r\n\r\n                      <div\r\n                        *ngIf=\"\r\n                          !!stock &&\r\n                          stock.resultCumpIssueQuantity !== null &&\r\n                          stock.resultCumpIssueQuantity !== undefined\r\n                        \"\r\n                        class=\"form-control\"\r\n                      >\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input\"\r\n                          [disabled]=\"true\"\r\n                          [(ngModel)]=\"stock.resultCumpIssueQuantity\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\">{{ getComponentName() + \".stockQty\" | translate }}</label>\r\n\r\n                      <div\r\n                        *ngIf=\"\r\n                          !!stock &&\r\n                          stock.resultCumpStockQuantity !== null &&\r\n                          stock.resultCumpStockQuantity !== undefined\r\n                        \"\r\n                        class=\"form-control\"\r\n                      >\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"aw-input\"\r\n                          [disabled]=\"true\"\r\n                          [(ngModel)]=\"stock.resultCumpStockQuantity\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"\r\n                        >{{ getComponentName() + \".receiptAmt\" | translate }} - {{ currency }}</label\r\n                      >\r\n\r\n                      <div\r\n                        *ngIf=\"\r\n                          !!stock &&\r\n                          stock.resultCumpReceiptAmount !== null &&\r\n                          stock.resultCumpReceiptAmount !== undefined\r\n                        \"\r\n                        class=\"form-control\"\r\n                      >\r\n                        <input type=\"text\" class=\"aw-input\" [disabled]=\"true\" [(ngModel)]=\"receiptAmount\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"\r\n                        >{{ getComponentName() + \".issueAmt\" | translate }} - {{ currency }}</label\r\n                      >\r\n\r\n                      <div\r\n                        *ngIf=\"\r\n                          !!stock && stock.resultCumpIssueAmount !== null && stock.resultCumpIssueAmount !== undefined\r\n                        \"\r\n                        class=\"form-control\"\r\n                      >\r\n                        <input type=\"text\" class=\"aw-input\" [disabled]=\"true\" [(ngModel)]=\"issueAmount\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label class=\"form-label\"\r\n                        >{{ getComponentName() + \".stockAmt\" | translate }} - {{ currency }}</label\r\n                      >\r\n\r\n                      <div\r\n                        *ngIf=\"\r\n                          !!stock && stock.resultCumpStockAmount !== null && stock.resultCumpStockAmount !== undefined\r\n                        \"\r\n                        class=\"form-control\"\r\n                      >\r\n                        <input type=\"text\" class=\"aw-input\" [disabled]=\"true\" [(ngModel)]=\"stockAmount\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"table-wrapper\">\r\n                <p-table\r\n                  [resizableColumns]=\"true\"\r\n                  #ptableTask\r\n                  class=\"aw-table2 max-height\"\r\n                  [columns]=\"stockSheetTableCols\"\r\n                  [value]=\"stockSheetTableForDisplay\"\r\n                  [scrollable]=\"true\"\r\n                >\r\n                  <ng-template pTemplate=\"emptyMessage\">\r\n                    <span *ngIf=\"!chartContentReady\"> &nbsp;</span>\r\n\r\n                    <div *ngIf=\"chartContentReady\" class=\"aw-table-loading-indicator\">\r\n                      <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n                      <div class=\"lds-hourglass\"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"caption\">\r\n                    <div class=\"aw-table-header\">\r\n                      <div class=\"aw-table-global-filter\">\r\n                        <label class=\"aw-table-global-filter-label\">\r\n                          <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableTaskGlobalFilter\r\n                          class=\"aw-table-global-filter-input\"\r\n                          type=\"text\"\r\n                          placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                          (input)=\"ptableTask.filterGlobal($event.target.value, 'contains')\"\r\n                        />\r\n                      </div>\r\n\r\n                      <div class=\"aw-table-icon-actions\">\r\n                        <i\r\n                          class=\"fa fa-fw fa-arrows-alt aw-icon aw-icon-with-border\"\r\n                          aria-hidden=\"true\"\r\n                          pTooltip=\"{{ 'global.showTableFullScreen' | translate }}\"\r\n                          tooltipPosition=\"top\"\r\n                          (click)=\"displayFullScreen = true\"\r\n                        ></i>\r\n                        &nbsp;\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"colgroup\" let-columns>\r\n                    <colgroup>\r\n                      <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n                      <col class=\"row-expand-wrapper\" />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"header\" let-columns>\r\n                    <tr>\r\n                      <th colspan=\"3\"></th>\r\n                      <th colspan=\"3\" class=\"table-border-left\" style=\"text-align: center\">\r\n                        {{ getComponentName() + \".stock\" | translate }}\r\n                      </th>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <th\r\n                        pResizableColumn\r\n                        *ngFor=\"let col of columns\"\r\n                        [ngSwitch]=\"col.field\"\r\n                        [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                        [ngClass]=\"{ 'table-border-left': col.field === 'stockQuantity' }\"\r\n                      >\r\n                        <span *ngSwitchCase=\"'stockValue'\"\r\n                          >{{ componentData.componentId + \".\" + col.field | translate }} {{ curr }}</span\r\n                        >\r\n                        <span *ngSwitchCase=\"'stockAmount'\"\r\n                          >{{ componentData.componentId + \".\" + col.field | translate }} {{ curr }}</span\r\n                        >\r\n                        <span *ngSwitchDefault>{{ componentData.componentId + \".\" + col.field | translate }}</span>\r\n                      </th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                    <tr>\r\n                      <td\r\n                        *ngFor=\"let col of columns\"\r\n                        [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n                        [ngClass]=\"{ 'table-border-left': col.field === 'stockQuantity' }\"\r\n                      >\r\n                        {{ rowData[col.field] }}\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- ********************************************************************** -->\r\n<!-- Dialog: full screen -->\r\n<!-- ********************************************************************** -->\r\n\r\n<a-modal class=\"aw-table-fullscreen\" [(visible)]=\"displayFullScreen\" [fullScreen]=\"true\">\r\n  <a-header>\r\n    <div class=\"modal__title-container\">\r\n      <div class=\"modal__title\">{{ getComponentName() + \".stockSheet\" | translate }}</div>\r\n    </div>\r\n\r\n    <div class=\"close\"><i class=\"material-icons\" (click)=\"closeDialog()\">close</i></div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <p-table\r\n      [resizableColumns]=\"true\"\r\n      #ptableTasks\r\n      class=\"aw-table2\"\r\n      [columns]=\"stockSheetTableCols2\"\r\n      [value]=\"stockSheetTableForDisplay\"\r\n      [scrollable]=\"true\"\r\n    >\r\n      <ng-template pTemplate=\"emptyMessage\">\r\n        <span *ngIf=\"!chartContentReady\"> &nbsp;</span>\r\n\r\n        <div *ngIf=\"chartContentReady\" class=\"aw-table-loading-indicator\">\r\n          <div class=\"loading-message\">{{ \"table.loadingData\" | translate }}</div>\r\n          <div class=\"lds-hourglass\"></div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"caption\">\r\n        <div class=\"aw-table-header\">\r\n          <div class=\"aw-table-global-filter\">\r\n            <label class=\"aw-table-global-filter-label\"> <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i> </label>\r\n\r\n            <input\r\n              #ptableTasksGlobalFilter\r\n              class=\"aw-table-global-filter-input\"\r\n              type=\"text\"\r\n              placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n              (input)=\"ptableTasks.filterGlobal($event.target.value, 'contains')\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"colgroup\" let-columns>\r\n        <colgroup>\r\n          <col *ngFor=\"let col of columns\" [ngStyle]=\"{ width: col.width }\" />\r\n          <col class=\"row-expand-wrapper\" />\r\n        </colgroup>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th colspan=\"3\"></th>\r\n          <th colspan=\"3\" class=\"table-border-left\" style=\"text-align: center\">\r\n            {{ getComponentName() + \".receipt\" | translate }}\r\n          </th>\r\n          <th colspan=\"3\" class=\"table-border-left\" style=\"text-align: center\">\r\n            {{ getComponentName() + \".issue\" | translate }}\r\n          </th>\r\n          <th colspan=\"3\" class=\"table-border-left\" style=\"text-align: center\">\r\n            {{ getComponentName() + \".stock\" | translate }}\r\n          </th>\r\n        </tr>\r\n\r\n        <tr>\r\n          <th\r\n            pResizableColumn\r\n            *ngFor=\"let col of columns\"\r\n            [ngSwitch]=\"col.field\"\r\n            [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n            [ngClass]=\"{\r\n              'table-border-left':\r\n                col.field === 'stockQuantity' || col.field === 'receiptQuantity' || col.field === 'issueQuantity'\r\n            }\"\r\n          >\r\n            <span *ngSwitchCase=\"'stockValue'\"\r\n              >{{ componentData.componentId + \".\" + col.field | translate }} {{ curr }}</span\r\n            >\r\n            <span *ngSwitchCase=\"'stockAmount'\"\r\n              >{{ componentData.componentId + \".\" + col.field | translate }} {{ curr }}</span\r\n            >\r\n            <span *ngSwitchCase=\"'issueValue'\"\r\n              >{{ componentData.componentId + \".\" + col.field | translate }} {{ curr }}</span\r\n            >\r\n            <span *ngSwitchCase=\"'issueAmount'\"\r\n              >{{ componentData.componentId + \".\" + col.field | translate }} {{ curr }}</span\r\n            >\r\n            <span *ngSwitchCase=\"'receiptValue'\"\r\n              >{{ componentData.componentId + \".\" + col.field | translate }} {{ curr }}</span\r\n            >\r\n            <span *ngSwitchCase=\"'receiptAmount'\"\r\n              >{{ componentData.componentId + \".\" + col.field | translate }} {{ curr }}</span\r\n            >\r\n            <span *ngSwitchDefault>{{ componentData.componentId + \".\" + col.field | translate }}</span>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n        <tr>\r\n          <td\r\n            *ngFor=\"let col of columns\"\r\n            [ngStyle]=\"{ 'text-align': col.alignment }\"\r\n            [ngClass]=\"{\r\n              'table-border-left':\r\n                col.field === 'stockQuantity' || col.field === 'receiptQuantity' || col.field === 'issueQuantity'\r\n            }\"\r\n          >\r\n            {{ rowData[col.field] }}\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </a-content>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .table-border-left {\n  border-left: solid 1px #006ea9 !important; }\n\n:host .grid-cell.in-simulation {\n  border-left-color: #ffc107;\n  border-left-style: solid;\n  border-left-width: 8px; }\n\n:host .grid-cell-detail .form-control-potential-unit {\n  width: 4rem; }\n\n:host .grid-cell-scope .ancestor-actions,\n:host .grid-cell-scope .ancestor-data {\n  background-color: #f0f0f0; }\n\n:host .grid-cell-scope .ancestor-actions {\n  justify-content: flex-end;\n  padding: 8px; }\n\n:host .grid-cell-state-simulation {\n  background-color: #ffc107;\n  padding: 0; }\n\n:host .grid-cell-state-simulation .grid-cell-title {\n    color: #000; }\n\n:host .grid-cell-state-simulation .simulation-criterion:not(:last-of-type)::after {\n    content: \" | \"; }\n\n:host .grid-cell-chart .chart-container {\n  display: flex;\n  flex-direction: row; }\n\n@media screen and (max-width: 1280px) {\n    :host .grid-cell-chart .chart-container {\n      flex-direction: column; } }\n\n:host .grid-cell-chart .chart-container .chart-legend {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n        height: 0.75rem;\n        margin-right: 8px;\n        width: 2rem; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.quantity {\n          background-color: #0d3fc2; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.amount {\n          background-color: #d3c632; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-airworthy {\n          background-color: #f6685e; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-value {\n      font-weight: 700;\n      margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-wrapper {\n    position: relative;\n    height: 18rem;\n    width: 30rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stdmFsdWF0aW9uL2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX21vZGlmaWVycy5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay12YWx1YXRpb24vZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXHN0b2NrLXZhbHVhdGlvblxcZm9ybVxcc3RvY2stdmFsdWF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbG9naXN0aWNzL3N0b2NrLXZhbHVhdGlvbi9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stdmFsdWF0aW9uL2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXHN0eWxlc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLHdCQUF3QjtFQUN4Qiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5Q0FBaUM7RUFBakMsc0NBQWlDO0VBQWpDLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLG9DQUE0QjtLQUE1QixpQ0FBNEI7TUFBNUIsZ0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQTs7QUFLYjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLHNDQUFzQyxFQUFBOztBQ3pIeEM7RUFFSSx5Q0FBeUMsRUFBQTs7QUFGN0M7RUFNSSwwQkNZWTtFRFhaLHdCQzJCZ0I7RUQxQmhCLHNCQ2dDYyxFQUFBOztBRHhDbEI7RUFhTSxXQUFXLEVBQUE7O0FBYmpCOztFQW9CTSx5QkN2QjhCLEVBQUE7O0FER3BDO0VBd0JNLHlCQUF5QjtFQUN6QixZQ2VZLEVBQUE7O0FEeENsQjtFQThCSSx5QkNaWTtFRGFaLFVBQVUsRUFBQTs7QUEvQmQ7SUFrQ00sV0NwQ21CLEVBQUE7O0FERXpCO0lBc0NNLGNBQWMsRUFBQTs7QUF0Q3BCO0VFbUJFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUYwQmY7SUE5Q047TUErQ1Esc0JBQXNCLEVBQUEsRUE0Q3pCOztBQTNGTDtJRWNFLGFBQWE7SUFDYixzQkFBc0I7SUZzQ2hCLHVCQUF1QjtJQUN2QixnQkNkVSxFQUFBOztBRHhDbEI7TUVtQkUsYUFBYTtNQUNiLG1CQUFtQjtNRnVDWCxtQkFBbUIsRUFBQTs7QUEzRDdCO1FBOERZLGVBQWU7UUFDZixpQkN2Qk07UUR3Qk4sV0FBVyxFQUFBOztBQWhFdkI7VUFtRWMseUJBQXlCLEVBQUE7O0FBbkV2QztVQXVFYyx5QkFBeUIsRUFBQTs7QUF2RXZDO1VBMkVjLHlCQ3ZETSxFQUFBOztBRHBCcEI7TUFpRlUsZ0JBQWdCO01BQ2hCLGdCQzFDUSxFQUFBOztBRHhDbEI7SUF1RlEsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay12YWx1YXRpb24vZm9ybS9zdG9jay12YWx1YXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LS1mbGV4LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLWZsZXgtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzcGxheS0tbm9uZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVpZ2h0LS0xMDAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1pbi13aWR0aC0tZml0LWNvbnRlbnQge1xyXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBvc2l0aW9uLS1yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGwteS0tbm9uZSB7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LS11bnNlbGVjdGFibGUge1xyXG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aXNpYmlsaXR5LS1oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtLTEwIHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTIwIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTMwIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTQwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTUwIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTYwIHtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTcwIHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTgwIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTkwIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ud2lkdGgtLTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi5mbGV4LS0xIHtcclxuICBmbGV4OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0yIHtcclxuICBmbGV4OiAyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS0zIHtcclxuICBmbGV4OiAzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS00IHtcclxuICBmbGV4OiA0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS01IHtcclxuICBmbGV4OiA1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LS1hdXRvIHtcclxuICBmbGV4OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tY2VudGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tZW5kIHtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1hbGlnbi1zdGFydCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LWVuZCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWp1c3RpZnktc3RhcnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwibW9kaWZpZXJzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgLnRhYmxlLWJvcmRlci1sZWZ0IHtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggIzAwNmVhOSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC5pbi1zaW11bGF0aW9uIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogJG1hcmdpbi12YWx1ZTtcclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtZGV0YWlsIHtcclxuICAgIC5mb3JtLWNvbnRyb2wtcG90ZW50aWFsLXVuaXQge1xyXG4gICAgICB3aWR0aDogNHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtc2NvcGUge1xyXG4gICAgLmFuY2VzdG9yLWFjdGlvbnMsXHJcbiAgICAuYW5jZXN0b3ItZGF0YSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAuYW5jZXN0b3ItYWN0aW9ucyB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLXN0YXRlLXNpbXVsYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgLmdyaWQtY2VsbC10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaW11bGF0aW9uLWNyaXRlcmlvbjpub3QoOmxhc3Qtb2YtdHlwZSk6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCIgfCBcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwtY2hhcnQge1xyXG4gICAgLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2hhcnQtbGVnZW5kIHtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAgICAgLmNoYXJ0LWxlZ2VuZC1sYWJlbCB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgLmNoYXJ0LWxlZ2VuZC1sYWJlbC1jb2xvciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMC43NXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgICAgICB3aWR0aDogMnJlbTtcclxuXHJcbiAgICAgICAgICAgICYucXVhbnRpdHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDNmYzI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYW1vdW50IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNjNjMyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLm5vdC1haXJ3b3J0aHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hhcnQtdmFsdWUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoYXJ0LXdyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDE4cmVtO1xyXG4gICAgICAgIHdpZHRoOiAzMHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBVdGlscyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gYnV0dG9uLWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCAkY29sb3IsICRib3JkZXItY29sb3I6IG51bGwpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yO1xyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyLFxyXG4gICY6bm90KDpkaXNhYmxlZCkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogaWYoJGJvcmRlci1jb2xvciA9PSBudWxsLCAkY29sb3IsICRib3JkZXItY29sb3IpO1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgtY29sdW1uKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtcm93KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuQG1peGluIGlucHV0KCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1kaXNhYmxlZCgpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZm9jdXMoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1ob3ZlcigpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlYXJjaC1jcml0ZXJpYS1jb250YWluZXIge1xyXG4gIC5hZHZhbmNlZC1jcml0ZXJpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLWZvb3RlciB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNCk7XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgICYucmVxdWlyZWQge1xyXG4gICAgICBAaW5jbHVkZSBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCgpO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAmID4gYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1vdmVyZmxvdy1oaWRkZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHcmlkIGZvcm0gY29udHJvbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViTWVkaXVtXCI7XHJcblxyXG4gICYgPiBpbnB1dCArIHAtbWVzc2FnZSA+IC51aS1tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyNTUsIDI1NSwgMjU1KSA2MCUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAuYXctaWNvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuLFxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG5cclxuICAgICAgJi5hdy1jYWxlbmRhciAudWktaW5wdXR0ZXh0LFxyXG4gICAgICAmLmF3LWRyb3Bkb3duIC51aS1kcm9wZG93bixcclxuICAgICAgJi5hdy1pbnB1dCxcclxuICAgICAgJi5hdy10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctY2FsZW5kYXIge1xyXG4gICAgICAvLyBGSVhNRTogZml4IGFuIFVJIGlzc3VlIG9uIFByaW1lTkcgY2FsZW5kYXIgY29tcG9uZW50OyB0byByZW1vdmUgd2hlbiBpc3N1ZSB3aWxsIGJlIGZpeGVkIHVwc3RyZWFtXHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAuYXctaWNvbjpub3QoLnJlYWQtb25seS1saW5rKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IC8vIG5vbmVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wtZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW5pbXAsXHJcbiAgICAuYnRuLWV4dGVybmFsLWxpbmstd3JhcHBlcixcclxuICAgIC5idG4tY2xlYXItd3JhcHBlcixcclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlcixcclxuICAgIC5idG4tc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIge1xyXG4gICAgICAuYXctZmlsZXVwbG9hZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudWktYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTkzNFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWNsZWFyIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtcmFkaW9idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAmID4gLmF3LXJhZGlvYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDIgKiAjeyRtYXJnaW4tdmFsdWV9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jYWxlbmRhciB7XHJcbiAgJi51aS1pbnB1dHdyYXBwZXItZm9jdXMge1xyXG4gICAgLnVpLWNhbGVuZGFyIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkY2hlY2tib3gtaGVpZ2h0O1xyXG4gIHdpZHRoOiAkY2hlY2tib3gtaGVpZ2h0O1xyXG5cclxuICAudWktY2hrYm94IHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1jaGtib3gtYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZHJvcGRvd24ge1xyXG4gIC51aS1kcm9wZG93biB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1mb2N1cyB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbixcclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24ge1xyXG4gICAgICByaWdodDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDEuNzVyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5maXhlZC13aWR0aCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZpbGV1cGxvYWQge1xyXG4gIEBleHRlbmQgLmF3LWJ0bjtcclxuXHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLnVpLWZpbGV1cGxvYWQtY2hvb3NlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMCAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudWktYnV0dG9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWlucHV0KCkge1xyXG4gIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZXh0YXJlYSB7XHJcbiAgQGluY2x1ZGUgZ3JpZC1pbnB1dCgpO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAkZm9ybS1jb250cm9sLWhlaWdodDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1yYWRpb2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuICB3aWR0aDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuXHJcbiAgLnVpLXJhZGlvYnV0dG9uIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1yYWRpb2J1dHRvbi1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAudWktcmFkaW9idXR0b24taWNvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGNhbGVuZGFyLXBhbmVsIHtcclxuICAudWktZGF0ZXBpY2tlcjpub3QoLnVpLWRhdGVwaWNrZXItaW5saW5lKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkcm9wZG93bi1wYW5lbCB7XHJcbiAgLnVpLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgICAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlciAudWktZHJvcGRvd24tbGlzdCB7XHJcbiAgICAgIC51aS1kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi51aS1zdGF0ZS1oaWdobGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: StockValuationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockValuationFormComponent", function() { return StockValuationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/constants/app-constants */ "./src/app/shared/constants/app-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _search_stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../search/stock-valuation-search.service */ "./src/app/main/logistics/stock-valuation/search/stock-valuation-search.service.ts");
/* harmony import */ var _stock_valuation_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stock-valuation-form.service */ "./src/app/main/logistics/stock-valuation/form/stock-valuation-form.service.ts");
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














var StockValuationFormComponent = /** @class */ (function (_super) {
    __extends(StockValuationFormComponent, _super);
    function StockValuationFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, stockValuationFormService, dateService, stockValuationSearchService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.stockValuationFormService = stockValuationFormService;
        _this.dateService = dateService;
        _this.stockValuationSearchService = stockValuationSearchService;
        _this.displayFullScreen = false;
        _this.init();
        _this.initChart();
        // this.loadWarehouses();
        _this.loadCurrency();
        _this.setStockSheetTableCols();
        _this.setStockSheetTableCols2();
        return _this;
    }
    StockValuationFormComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.searchObject =
            this.componentData.objectId && this.serializationService.deserialize(this.componentData.objectId);
        this.calculate();
    };
    StockValuationFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_STOCK_VALUATION_FORM;
    };
    StockValuationFormComponent.prototype.init = function () {
        this.stock = {};
        this.averageValue = '';
        this.receiptAmount = '';
        this.issueAmount = '0';
        this.stockAmount = '';
        this.stockSheetTableForDB = [];
        this.stockSheetTableForDisplay = [];
        this.warehouses = [];
        this.chartContentReady = false;
        this.currency = '';
        this.curr = '';
        this.warehouse = '';
    };
    StockValuationFormComponent.prototype.initChart = function () {
        this.chartType = 'line';
        this.stockQuantityVariationData = {
            datasets: [
                {
                    data: [],
                    label: 'Quantity',
                    borderColor: '#0D3FC2',
                    backgroundColor: '#0D3FC2',
                    hoverBackgroundColor: '#0D3FC2',
                    fill: false
                }
            ],
            labels: []
        };
        this.stockAmountVariationData = {
            datasets: [
                {
                    data: [],
                    label: 'Amount',
                    borderColor: '#D3C632',
                    backgroundColor: '#D3C632',
                    hoverBackgroundColor: '#D3C632',
                    fill: false
                }
            ],
            labels: []
        };
        this.setAmountChartOptions();
        this.setQuantityChartOptions();
    };
    // loads warehouse dropdown
    StockValuationFormComponent.prototype.loadWarehouses = function () {
        var _this = this;
        this.stockValuationSearchService.findAll().subscribe(function (results) {
            results.forEach(function (res) {
                var warehouse = { label: '', value: '' };
                warehouse = {
                    label: res.whCode + " - " + res.whName,
                    value: "" + res.wareHouseId
                };
                _this.warehouses.push(warehouse);
            });
            var wares = _this.warehouses.filter(function (ware) {
                return _this.stock.searchInputStockValuation &&
                    _this.stock.searchInputStockValuation.warehouseId &&
                    "" + ware.value === "" + _this.stock.searchInputStockValuation.warehouseId;
            });
            _this.warehouse = wares[0] && wares[0].label;
        });
    };
    StockValuationFormComponent.prototype.setAmountChartOptions = function () {
        this.amountChartOptions = {
            elements: {
                line: {
                    tension: 0
                }
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            },
            legend: {
                display: false
            },
            tooltips: {
                bodyFontColor: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].COLOR_BACKGROUND_PRIMARY
            }
        };
    };
    StockValuationFormComponent.prototype.setQuantityChartOptions = function () {
        this.quantityChartOptions = {
            elements: {
                line: {
                    tension: 0
                }
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }
                ]
            },
            legend: {
                display: false
            },
            tooltips: {
                bodyFontColor: _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].COLOR_BACKGROUND_PRIMARY
            }
        };
    };
    StockValuationFormComponent.prototype.calculate = function () {
        var _this = this;
        this.isStockSheetTableLoading = true;
        this.stockValuationFormService.stockValuationSearch(this.searchObject).subscribe(function (result) {
            _this.loadWarehouses();
            _this.setChartData(result);
            _this.stock = result;
            if (_this.stock.resultCumpStockValue !== null && _this.stock.resultCumpStockValue !== undefined) {
                _this.averageValue = _this.numberWithCommas(_this.stock.resultCumpStockValue);
            }
            if (_this.stock.resultCumpReceiptAmount !== null && _this.stock.resultCumpReceiptAmount !== undefined) {
                _this.receiptAmount = _this.numberWithCommas(_this.stock.resultCumpReceiptAmount);
            }
            if (_this.stock.resultCumpIssueAmount !== null && _this.stock.resultCumpIssueAmount !== undefined) {
                _this.issueAmount = _this.numberWithCommas(_this.stock.resultCumpIssueAmount);
            }
            if (_this.stock.resultCumpStockAmount !== null && _this.stock.resultCumpStockAmount !== undefined) {
                _this.stockAmount = _this.numberWithCommas(_this.stock.resultCumpStockAmount);
            }
            _this.concatenateStockTableRowsByMaterial(_this.stock.stockSheetTableList);
        });
    };
    StockValuationFormComponent.prototype.concatenateStockTableRowsByMaterial = function (stockTable) {
        var _this = this;
        if (!!stockTable) {
            var stocks_1 = stockTable;
            stocks_1.forEach(function (stock) {
                if (stocks_1.length !== 0) {
                    var inStockTableForDB = _this.stockSheetTableForDB.filter(function (st) { return st.date.getTime() === stock.date.getTime(); });
                    if (inStockTableForDB.length !== 0) {
                        // stock exists in this.stockSheetTableForDB
                        var indexInStockTableForDB = _this.stockSheetTableForDB.findIndex(function (st) { return st.date.getTime() === stock.date.getTime(); });
                        // Receipt
                        if (_this.stockSheetTableForDB[indexInStockTableForDB].receiptQuantity !== null &&
                            _this.stockSheetTableForDB[indexInStockTableForDB].receiptQuantity !== undefined &&
                            stock.receiptQuantity !== null &&
                            stock.receiptQuantity !== undefined) {
                            _this.stockSheetTableForDB[indexInStockTableForDB].receiptQuantity += stock.receiptQuantity;
                        }
                        // Stock
                        if (_this.stockSheetTableForDB[indexInStockTableForDB].stockQuantity !== null &&
                            _this.stockSheetTableForDB[indexInStockTableForDB].stockQuantity !== undefined &&
                            stock.stockQuantity !== null &&
                            stock.stockQuantity !== undefined &&
                            _this.stockSheetTableForDB[indexInStockTableForDB].stockQuantity < stock.stockQuantity) {
                            _this.stockSheetTableForDB[indexInStockTableForDB].stockQuantity = stock.stockQuantity;
                        }
                        if (_this.stockSheetTableForDB[indexInStockTableForDB].stockAmount !== null &&
                            _this.stockSheetTableForDB[indexInStockTableForDB].stockAmount !== undefined &&
                            stock.stockAmount !== null &&
                            stock.stockAmount !== undefined &&
                            _this.stockSheetTableForDB[indexInStockTableForDB].stockAmount < stock.stockAmount) {
                            _this.stockSheetTableForDB[indexInStockTableForDB].stockAmount = stock.stockAmount;
                        }
                    }
                    else {
                        // new material code. push in this.stockSheetTableForDB
                        _this.stockSheetTableForDB.unshift(stock);
                    }
                }
            });
            this.convertStockTableIntoRowDTOArray();
        }
    };
    StockValuationFormComponent.prototype.convertStockTableIntoRowDTOArray = function () {
        var _this = this;
        this.stockSheetTableForDB.forEach(function (stock) {
            var stockTableRow = {};
            stockTableRow.date = _this.dateService.dateToString(stock.date);
            stockTableRow.materialCode = stock.materialCode;
            stockTableRow.materialDesignation = stock.materialDesignation;
            if (stock.receiptAmount !== null && stock.receiptAmount !== undefined) {
                stockTableRow.receiptAmount = _this.numberWithCommas(stock.receiptAmount);
            }
            if (stock.receiptQuantity !== null && stock.receiptQuantity !== undefined) {
                stockTableRow.receiptQuantity = _this.numberWithCommas(stock.receiptQuantity);
            }
            if (stock.receiptValue !== null && stock.receiptValue !== undefined) {
                stockTableRow.receiptValue = _this.numberWithCommas(stock.receiptValue);
            }
            if (stock.issueAmount !== null && stock.issueAmount !== undefined) {
                stockTableRow.issueAmount = _this.numberWithCommas(stock.issueAmount);
            }
            if (stock.issueQuantity !== null && stock.issueQuantity !== undefined) {
                stockTableRow.issueQuantity = _this.numberWithCommas(stock.issueQuantity);
            }
            if (stock.issueValue !== null && stock.issueValue !== undefined) {
                stockTableRow.issueValue = _this.numberWithCommas(stock.issueValue);
            }
            if (stock.stockAmount !== null && stock.stockAmount !== undefined) {
                stockTableRow.stockAmount = _this.numberWithCommas(stock.stockAmount);
            }
            if (stock.stockQuantity !== null && stock.stockQuantity !== undefined) {
                stockTableRow.stockQuantity = _this.numberWithCommas(stock.stockQuantity);
            }
            if (stock.stockValue !== null && stock.stockValue !== undefined) {
                stockTableRow.stockValue = _this.numberWithCommas(stock.stockValue);
            }
            _this.stockSheetTableForDisplay.push(stockTableRow);
        });
        this.isStockSheetTableLoading = false;
    };
    StockValuationFormComponent.prototype.setChartData = function (stock) {
        var _this = this;
        var stocks = stock.stockSheetTableList;
        if (!!stocks) {
            stocks.forEach(function (st) {
                _this.stockQuantityVariationData.labels.push(_this.dateService.dateToString(st.date));
                _this.stockQuantityVariationData.datasets[0].data.push(st.stockQuantity);
                _this.stockAmountVariationData.labels.push(_this.dateService.dateToString(st.date));
                _this.stockAmountVariationData.datasets[0].data.push(st.stockAmount);
            });
        }
        this.chartContentReady = true;
    };
    // Currency
    StockValuationFormComponent.prototype.loadCurrency = function () {
        var _this = this;
        this.stockValuationFormService.getLocalCurrency().subscribe(function (result) {
            _this.currency = result;
            var curr = _this.currency.split(' ');
            _this.curr = curr[1];
        });
    };
    StockValuationFormComponent.prototype.setStockSheetTableCols = function () {
        this.stockSheetTableCols = [
            { field: 'date', alignment: 'center' },
            { field: 'materialCode', alignment: 'center' },
            { field: 'materialDesignation', alignment: 'center' },
            { field: 'stockQuantity', alignment: 'center' },
            { field: 'stockValue', alignment: 'center' },
            { field: 'stockAmount', alignment: 'center' }
        ];
    };
    StockValuationFormComponent.prototype.setStockSheetTableCols2 = function () {
        this.stockSheetTableCols2 = [
            { field: 'date', alignment: 'center' },
            { field: 'materialCode', alignment: 'center' },
            { field: 'materialDesignation', alignment: 'center' },
            { field: 'receiptQuantity', alignment: 'center' },
            { field: 'receiptValue', alignment: 'center' },
            { field: 'receiptAmount', alignment: 'center' },
            { field: 'issueQuantity', alignment: 'center' },
            { field: 'issueValue', alignment: 'center' },
            { field: 'issueAmount', alignment: 'center' },
            { field: 'stockQuantity', alignment: 'center' },
            { field: 'stockValue', alignment: 'center' },
            { field: 'stockAmount', alignment: 'center' }
        ];
    };
    StockValuationFormComponent.prototype.closeDialog = function () {
        this.displayFullScreen = false;
    };
    StockValuationFormComponent.prototype.numberWithCommas = function (n) {
        var parts = n.toString().split('.');
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '');
    };
    StockValuationFormComponent.prototype.newCalculation = function () {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_STOCK_VALUATION_SEARCH,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    StockValuationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-stock-valuation-form',
            template: __webpack_require__(/*! ./stock-valuation-form.component.html */ "./src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.html"),
            styles: [__webpack_require__(/*! ./stock-valuation-form.component.scss */ "./src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"],
            _stock_valuation_form_service__WEBPACK_IMPORTED_MODULE_13__["StockValuationFormService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"],
            _search_stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_12__["StockValuationSearchService"]])
    ], StockValuationFormComponent);
    return StockValuationFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\">\r\n        <i\r\n          class=\"fa fa-fw aw-icon aw-icon-with-border\"\r\n          [ngClass]=\"{ 'fa-star': isFavoriteEntry, 'fa-star-o': !isFavoriteEntry }\"\r\n          aria-hidden=\"true\"\r\n          (click)=\"updateFavoriteState()\"\r\n          pTooltip=\"{{ 'page.' + (isFavoriteEntry ? 'removeFromFavorites' : 'addToFavorites') | translate }}\"\r\n          tooltipPosition=\"bottom\"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">\r\n        {{ \"page.searchPage\" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container search-page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ \"global.search\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row search-criteria-header\">\r\n                  <i\r\n                    class=\"fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action\"\r\n                    aria-hidden=\"true\"\r\n                    pTooltip=\"{{ 'global.reset' | translate }}\"\r\n                    tooltipPosition=\"top\"\r\n                    (click)=\"resetSearchCriteria()\"\r\n                  ></i>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".materialCode\" | translate }} </label>\r\n\r\n                    <div class=\"form-control form-control-with-modal\" [ngClass]=\"{ disabled: isReadOpenMode }\">\r\n                      <div class=\"form-control-data\" (click)=\"quickSearchMaterial()\">\r\n                        {{ searchObject.materialCode }}\r\n                      </div>\r\n\r\n                      <div *ngIf=\"searchObject.materialCode\" class=\"btn-clear-wrapper\">\r\n                        <i\r\n                          class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"searchObject.materialCode = undefined\"\r\n                        ></i>\r\n                      </div>\r\n                      <div class=\"btn-search-wrapper\">\r\n                        <i\r\n                          class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"quickSearchMaterial()\"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group required\">\r\n                    <label class=\"form-label\">{{ \"global.date\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-calendar\r\n                        showButtonBar=\"true\"\r\n                        [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\"\r\n                        [yearRange]=\"sessionService.calendarYearRange\"\r\n                        class=\"aw-calendar\"\r\n                        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                        [locale]=\"sessionService.calendarFormat\"\r\n                        [(ngModel)]=\"searchObject.date\"\r\n                        [disabled]=\"isReadOpenMode\"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".warehouseId\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"warehouses\"\r\n                        [(ngModel)]=\"searchObject.warehouseId\"\r\n                        [showClear]=\"true\"\r\n                        placeholder=\"&nbsp;\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group required\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".method\" | translate }} </label>\r\n\r\n                    <div style=\"width: 64%\" class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        [options]=\"methods\"\r\n                        [(ngModel)]=\"searchObject.flag\"\r\n                        placeholder=\"&nbsp;\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- <div class=\"form-group\"></div> -->\r\n\r\n                  <div class=\"form-group\"></div>\r\n                </div>\r\n\r\n                <div class=\"row search-criteria-footer\">\r\n                  <div class=\"search-actions\">\r\n                    <button type=\"button\" mat-raised-button (click)=\"calculate()\">\r\n                      {{ componentData.componentId + \".toCalculate\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-search-material\r\n  *ngIf=\"showQuickSearchMaterialPopup\"\r\n  [(display)]=\"showQuickSearchMaterialPopup\"\r\n  [material-code]=\"searchObject.materialCode\"\r\n  (onSelected)=\"setSelectedMaterial($event)\"\r\n></aw-dialog-search-material>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3N0b2NrLXZhbHVhdGlvbi9zZWFyY2gvc3RvY2stdmFsdWF0aW9uLXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StockValuationSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockValuationSearchComponent", function() { return StockValuationSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/@ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stock-valuation-search.service */ "./src/app/main/logistics/stock-valuation/search/stock-valuation-search.service.ts");
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












var StockValuationSearchComponent = /** @class */ (function (_super) {
    __extends(StockValuationSearchComponent, _super);
    function StockValuationSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, translateService, stockValuationSearchService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.translateService = translateService;
        _this.stockValuationSearchService = stockValuationSearchService;
        _this.init();
        _this.warehouses = [];
        _this.currLang = _this.translateService.currentLang;
        _this.loadMethodDropdown();
        _this.showQuickSearchMaterialPopup = false;
        _this.loadWarehouses();
        return _this;
    }
    StockValuationSearchComponent.prototype.init = function () {
        this.searchObject = {
            date: new Date(),
            flag: 0
        };
    };
    StockValuationSearchComponent.prototype.loadMethodDropdown = function () {
        var _this = this;
        var method1 = this.getComponentName() + ".methodWeightedAverage";
        var method2 = this.getComponentName() + ".methodFifo";
        this.translateService.get([method1, method2]).subscribe(function (results) {
            _this.methods = [{ label: results[method1], value: 0 }, { label: results[method2], value: 1 }];
        });
    };
    StockValuationSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_STOCK_VALUATION_SEARCH;
    };
    StockValuationSearchComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.displayComponentContext('global.search', true);
    };
    // opens material popup in search criteria
    StockValuationSearchComponent.prototype.quickSearchMaterial = function () {
        this.showQuickSearchMaterialPopup = true;
    };
    // loads warehouse dropdown
    StockValuationSearchComponent.prototype.loadWarehouses = function () {
        var _this = this;
        this.stockValuationSearchService.findAll().subscribe(function (results) {
            results.forEach(function (res) {
                var warehouse = { label: '', value: '' };
                warehouse = {
                    label: res.whCode + " - " + res.whName,
                    value: "" + res.wareHouseId
                };
                _this.warehouses.push(warehouse);
            });
        });
    };
    // calculates stocks on the basis of search criteria
    StockValuationSearchComponent.prototype.calculate = function () {
        // Check for date. No check for method required as some value is always selected in that dropdown.
        if (!!this.searchObject.date) {
            // transfer to stock valuation form
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_STOCK_VALUATION_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Read
            };
            var objectId = this.searchObject;
            if (!!objectId) {
                data.objectId = this.serializationService.serialize(objectId);
            }
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
        else {
            this.messageService.showWarningMessage(this.getTranslateKey('selectDate'));
        }
    };
    StockValuationSearchComponent.prototype.setSelectedMaterial = function (event) {
        this.showQuickSearchMaterialPopup = false;
        this.searchObject.materialCode = event.pnCode;
    };
    StockValuationSearchComponent.prototype.resetSearchCriteria = function () {
        this.init();
    };
    StockValuationSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-stock-valuation-search',
            template: __webpack_require__(/*! ./stock-valuation-search.component.html */ "./src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.html"),
            styles: [__webpack_require__(/*! ./stock-valuation-search.component.scss */ "./src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"],
            _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_11__["StockValuationSearchService"]])
    ], StockValuationSearchComponent);
    return StockValuationSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-valuation/stock-valuation.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/stock-valuation.module.ts ***!
  \**************************************************************************/
/*! exports provided: StockValuationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockValuationModule", function() { return StockValuationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/dialog-search-material/dialog-search-material.module */ "./src/app/shared/components/dialog-search-material/dialog-search-material.module.ts");
/* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/dialog-table/dialog-table.module */ "./src/app/shared/components/dialog-table/dialog-table.module.ts");
/* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ "./src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_stock_valuation_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form/stock-valuation-form.component */ "./src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.ts");
/* harmony import */ var _form_stock_valuation_form_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form/stock-valuation-form.service */ "./src/app/main/logistics/stock-valuation/form/stock-valuation-form.service.ts");
/* harmony import */ var _search_stock_valuation_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search/stock-valuation-search.component */ "./src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.ts");
/* harmony import */ var _search_stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search/stock-valuation-search.service */ "./src/app/main/logistics/stock-valuation/search/stock-valuation-search.service.ts");
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
var EXTERNAL_MODULES = [primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_2__["ChartModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"]];
var INTERNAL_MODULES = [_shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_10__["DialogTableModule"], _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_11__["DynamicAttributesModule"], _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_12__["ModalModule"], _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_9__["DialogSearchMaterialModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [_search_stock_valuation_search_component__WEBPACK_IMPORTED_MODULE_16__["StockValuationSearchComponent"], _form_stock_valuation_form_component__WEBPACK_IMPORTED_MODULE_14__["StockValuationFormComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_search_stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_17__["StockValuationSearchService"], _form_stock_valuation_form_service__WEBPACK_IMPORTED_MODULE_15__["StockValuationFormService"]];
var StockValuationModule = /** @class */ (function () {
    function StockValuationModule() {
    }
    StockValuationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_6__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_7__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_8__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_13__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], StockValuationModule);
    return StockValuationModule;
}());



/***/ })

}]);
//# sourceMappingURL=logistics-stock-valuation-stock-valuation-module.js.map