(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['logistics-stock-valuation-stock-valuation-module'],
  {
    /***/ './src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.html':
      /*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.html ***!
  \*****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">\r\n        {{ "page.searchPage" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-primary-actions">\r\n    <button type="button" mat-raised-button (click)="newCalculation()">\r\n      {{ componentData.componentId + ".newCalculation" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "page.mainData" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="row">\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ componentData.componentId + ".materialCode" | translate }} </label>\r\n\r\n                  <div\r\n                    *ngIf="\r\n                      !!stock && !!stock.searchInputStockValuation && !!stock.searchInputStockValuation.materialCode\r\n                    "\r\n                    class="form-control"\r\n                  >\r\n                    <input\r\n                      type="text"\r\n                      class="aw-input"\r\n                      [(ngModel)]="stock.searchInputStockValuation.materialCode"\r\n                      [disabled]="true"\r\n                    />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                  <label class="form-label"> {{ componentData.componentId + ".warehouseId" | translate }} </label>\r\n\r\n                  <div\r\n                    *ngIf="\r\n                      !!stock && !!stock.searchInputStockValuation && !!stock.searchInputStockValuation.warehouseId\r\n                    "\r\n                    class="form-control"\r\n                  >\r\n                    <input type="text" class="aw-input" [(ngModel)]="warehouse" [disabled]="true" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ "global.date" | translate }}</label>\r\n\r\n                  <div\r\n                    *ngIf="!!stock && !!stock.searchInputStockValuation && !!stock.searchInputStockValuation.date"\r\n                    class="form-control"\r\n                  >\r\n                    <p-calendar\r\n                      showButtonBar="true"\r\n                      [monthNavigator]="true"\r\n                      [yearNavigator]="true"\r\n                      [yearRange]="sessionService.calendarYearRange"\r\n                      class="aw-calendar"\r\n                      [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                      [locale]="sessionService.calendarFormat"\r\n                      [(ngModel)]="stock.searchInputStockValuation.date"\r\n                      disabled\r\n                    ></p-calendar>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="form-group">\r\n                  <label class="form-label"\r\n                    >{{ componentData.componentId + ".avgValue" | translate }} - {{ currency }}\r\n                  </label>\r\n\r\n                  <div\r\n                    *ngIf="!!stock && stock.resultCumpStockValue !== null && stock.resultCumpStockValue !== undefined"\r\n                    class="form-control"\r\n                  >\r\n                    <input type="text" class="aw-input" [disabled]="true" [(ngModel)]="averageValue" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--6">\r\n          <div class="grid-cell grid-cell--container grid-cell-chart">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <div class="grid-cell-title">\r\n                  {{ getComponentName() + ".quantityChart" | translate }}\r\n                  <div *ngIf="!chartContentReady" class="lds-hourglass"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="row flex-row--justify-center">\r\n                <div *ngIf="chartContentReady" class="chart-container">\r\n                  <div class="chart-wrapper">\r\n                    <p-chart\r\n                      [type]="chartType"\r\n                      [data]="stockQuantityVariationData"\r\n                      [options]="quantityChartOptions"\r\n                      width="100%"\r\n                      height="100%"\r\n                    ></p-chart>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="row flex-row--justify-center">\r\n                <div *ngIf="chartContentReady" class="chart-container">\r\n                  <div class="chart-legend">\r\n                    <div class="chart-legend-label">\r\n                      <div class="chart-legend-label-color quantity"></div>\r\n                      <span class="chart-value">{{ getComponentName() + ".quantity" | translate }}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-cell--6">\r\n          <div class="grid-cell grid-cell--container grid-cell-chart">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container loading-indicator">\r\n                <div class="grid-cell-title">\r\n                  {{ getComponentName() + ".amountChart" | translate }}\r\n                  <div *ngIf="!chartContentReady" class="lds-hourglass"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="row flex-row--justify-center">\r\n                <div *ngIf="chartContentReady" class="chart-container">\r\n                  <div class="chart-wrapper">\r\n                    <p-chart\r\n                      [type]="chartType"\r\n                      [data]="stockAmountVariationData"\r\n                      [options]="amountChartOptions"\r\n                      width="100%"\r\n                      height="100%"\r\n                    ></p-chart>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="row flex-row--justify-center">\r\n                <div *ngIf="chartContentReady" class="chart-container">\r\n                  <div class="chart-legend">\r\n                    <div class="chart-legend-label">\r\n                      <div class="chart-legend-label-color amount"></div>\r\n                      <span class="chart-value">{{ getComponentName() + ".amount" | translate }}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ getComponentName() + ".stockSheet" | translate }} ({{\r\n                    stockSheetTableForDisplay ? stockSheetTableForDisplay.length : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".receiptQty" | translate }}</label>\r\n\r\n                      <div\r\n                        *ngIf="\r\n                          !!stock &&\r\n                          stock.resultCumpReceiptQuantity !== null &&\r\n                          stock.resultCumpReceiptQuantity !== undefined\r\n                        "\r\n                        class="form-control"\r\n                      >\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [disabled]="true"\r\n                          [(ngModel)]="stock.resultCumpReceiptQuantity"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".issueQty" | translate }}</label>\r\n\r\n                      <div\r\n                        *ngIf="\r\n                          !!stock &&\r\n                          stock.resultCumpIssueQuantity !== null &&\r\n                          stock.resultCumpIssueQuantity !== undefined\r\n                        "\r\n                        class="form-control"\r\n                      >\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [disabled]="true"\r\n                          [(ngModel)]="stock.resultCumpIssueQuantity"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ getComponentName() + ".stockQty" | translate }}</label>\r\n\r\n                      <div\r\n                        *ngIf="\r\n                          !!stock &&\r\n                          stock.resultCumpStockQuantity !== null &&\r\n                          stock.resultCumpStockQuantity !== undefined\r\n                        "\r\n                        class="form-control"\r\n                      >\r\n                        <input\r\n                          type="text"\r\n                          class="aw-input"\r\n                          [disabled]="true"\r\n                          [(ngModel)]="stock.resultCumpStockQuantity"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <label class="form-label"\r\n                        >{{ getComponentName() + ".receiptAmt" | translate }} - {{ currency }}</label\r\n                      >\r\n\r\n                      <div\r\n                        *ngIf="\r\n                          !!stock &&\r\n                          stock.resultCumpReceiptAmount !== null &&\r\n                          stock.resultCumpReceiptAmount !== undefined\r\n                        "\r\n                        class="form-control"\r\n                      >\r\n                        <input type="text" class="aw-input" [disabled]="true" [(ngModel)]="receiptAmount" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label"\r\n                        >{{ getComponentName() + ".issueAmt" | translate }} - {{ currency }}</label\r\n                      >\r\n\r\n                      <div\r\n                        *ngIf="\r\n                          !!stock && stock.resultCumpIssueAmount !== null && stock.resultCumpIssueAmount !== undefined\r\n                        "\r\n                        class="form-control"\r\n                      >\r\n                        <input type="text" class="aw-input" [disabled]="true" [(ngModel)]="issueAmount" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label"\r\n                        >{{ getComponentName() + ".stockAmt" | translate }} - {{ currency }}</label\r\n                      >\r\n\r\n                      <div\r\n                        *ngIf="\r\n                          !!stock && stock.resultCumpStockAmount !== null && stock.resultCumpStockAmount !== undefined\r\n                        "\r\n                        class="form-control"\r\n                      >\r\n                        <input type="text" class="aw-input" [disabled]="true" [(ngModel)]="stockAmount" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="table-wrapper">\r\n                <p-table\r\n                  [resizableColumns]="true"\r\n                  #ptableTask\r\n                  class="aw-table2 max-height"\r\n                  [columns]="stockSheetTableCols"\r\n                  [value]="stockSheetTableForDisplay"\r\n                  [scrollable]="true"\r\n                >\r\n                  <ng-template pTemplate="emptyMessage">\r\n                    <span *ngIf="!chartContentReady"> &nbsp;</span>\r\n\r\n                    <div *ngIf="chartContentReady" class="aw-table-loading-indicator">\r\n                      <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n                      <div class="lds-hourglass"></div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="caption">\r\n                    <div class="aw-table-header">\r\n                      <div class="aw-table-global-filter">\r\n                        <label class="aw-table-global-filter-label">\r\n                          <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                        </label>\r\n\r\n                        <input\r\n                          #ptableTaskGlobalFilter\r\n                          class="aw-table-global-filter-input"\r\n                          type="text"\r\n                          placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                          (input)="ptableTask.filterGlobal($event.target.value, \'contains\')"\r\n                        />\r\n                      </div>\r\n\r\n                      <div class="aw-table-icon-actions">\r\n                        <i\r\n                          class="fa fa-fw fa-arrows-alt aw-icon aw-icon-with-border"\r\n                          aria-hidden="true"\r\n                          pTooltip="{{ \'global.showTableFullScreen\' | translate }}"\r\n                          tooltipPosition="top"\r\n                          (click)="displayFullScreen = true"\r\n                        ></i>\r\n                        &nbsp;\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="colgroup" let-columns>\r\n                    <colgroup>\r\n                      <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                      <col class="row-expand-wrapper" />\r\n                    </colgroup>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="header" let-columns>\r\n                    <tr>\r\n                      <th colspan="3"></th>\r\n                      <th colspan="3" class="table-border-left" style="text-align: center">\r\n                        {{ getComponentName() + ".stock" | translate }}\r\n                      </th>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <th\r\n                        pResizableColumn\r\n                        *ngFor="let col of columns"\r\n                        [ngSwitch]="col.field"\r\n                        [ngStyle]="{ \'text-align\': col.alignment }"\r\n                        [ngClass]="{ \'table-border-left\': col.field === \'stockQuantity\' }"\r\n                      >\r\n                        <span *ngSwitchCase="\'stockValue\'"\r\n                          >{{ componentData.componentId + "." + col.field | translate }} {{ curr }}</span\r\n                        >\r\n                        <span *ngSwitchCase="\'stockAmount\'"\r\n                          >{{ componentData.componentId + "." + col.field | translate }} {{ curr }}</span\r\n                        >\r\n                        <span *ngSwitchDefault>{{ componentData.componentId + "." + col.field | translate }}</span>\r\n                      </th>\r\n                    </tr>\r\n                  </ng-template>\r\n\r\n                  <ng-template pTemplate="body" let-rowData let-columns="columns">\r\n                    <tr>\r\n                      <td\r\n                        *ngFor="let col of columns"\r\n                        [ngStyle]="{ \'text-align\': col.alignment }"\r\n                        [ngClass]="{ \'table-border-left\': col.field === \'stockQuantity\' }"\r\n                      >\r\n                        {{ rowData[col.field] }}\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </p-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- ********************************************************************** -->\r\n<!-- Dialog: full screen -->\r\n<!-- ********************************************************************** -->\r\n\r\n<a-modal class="aw-table-fullscreen" [(visible)]="displayFullScreen" [fullScreen]="true">\r\n  <a-header>\r\n    <div class="modal__title-container">\r\n      <div class="modal__title">{{ getComponentName() + ".stockSheet" | translate }}</div>\r\n    </div>\r\n\r\n    <div class="close"><i class="material-icons" (click)="closeDialog()">close</i></div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <p-table\r\n      [resizableColumns]="true"\r\n      #ptableTasks\r\n      class="aw-table2"\r\n      [columns]="stockSheetTableCols2"\r\n      [value]="stockSheetTableForDisplay"\r\n      [scrollable]="true"\r\n    >\r\n      <ng-template pTemplate="emptyMessage">\r\n        <span *ngIf="!chartContentReady"> &nbsp;</span>\r\n\r\n        <div *ngIf="chartContentReady" class="aw-table-loading-indicator">\r\n          <div class="loading-message">{{ "table.loadingData" | translate }}</div>\r\n          <div class="lds-hourglass"></div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="caption">\r\n        <div class="aw-table-header">\r\n          <div class="aw-table-global-filter">\r\n            <label class="aw-table-global-filter-label"> <i class="fa fa-fw fa-search" aria-hidden="true"></i> </label>\r\n\r\n            <input\r\n              #ptableTasksGlobalFilter\r\n              class="aw-table-global-filter-input"\r\n              type="text"\r\n              placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n              (input)="ptableTasks.filterGlobal($event.target.value, \'contains\')"\r\n            />\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="colgroup" let-columns>\r\n        <colgroup>\r\n          <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n          <col class="row-expand-wrapper" />\r\n        </colgroup>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="header" let-columns>\r\n        <tr>\r\n          <th colspan="3"></th>\r\n          <th colspan="3" class="table-border-left" style="text-align: center">\r\n            {{ getComponentName() + ".receipt" | translate }}\r\n          </th>\r\n          <th colspan="3" class="table-border-left" style="text-align: center">\r\n            {{ getComponentName() + ".issue" | translate }}\r\n          </th>\r\n          <th colspan="3" class="table-border-left" style="text-align: center">\r\n            {{ getComponentName() + ".stock" | translate }}\r\n          </th>\r\n        </tr>\r\n\r\n        <tr>\r\n          <th\r\n            pResizableColumn\r\n            *ngFor="let col of columns"\r\n            [ngSwitch]="col.field"\r\n            [ngStyle]="{ \'text-align\': col.alignment }"\r\n            [ngClass]="{\r\n              \'table-border-left\':\r\n                col.field === \'stockQuantity\' || col.field === \'receiptQuantity\' || col.field === \'issueQuantity\'\r\n            }"\r\n          >\r\n            <span *ngSwitchCase="\'stockValue\'"\r\n              >{{ componentData.componentId + "." + col.field | translate }} {{ curr }}</span\r\n            >\r\n            <span *ngSwitchCase="\'stockAmount\'"\r\n              >{{ componentData.componentId + "." + col.field | translate }} {{ curr }}</span\r\n            >\r\n            <span *ngSwitchCase="\'issueValue\'"\r\n              >{{ componentData.componentId + "." + col.field | translate }} {{ curr }}</span\r\n            >\r\n            <span *ngSwitchCase="\'issueAmount\'"\r\n              >{{ componentData.componentId + "." + col.field | translate }} {{ curr }}</span\r\n            >\r\n            <span *ngSwitchCase="\'receiptValue\'"\r\n              >{{ componentData.componentId + "." + col.field | translate }} {{ curr }}</span\r\n            >\r\n            <span *ngSwitchCase="\'receiptAmount\'"\r\n              >{{ componentData.componentId + "." + col.field | translate }} {{ curr }}</span\r\n            >\r\n            <span *ngSwitchDefault>{{ componentData.componentId + "." + col.field | translate }}</span>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate="body" let-rowData let-columns="columns">\r\n        <tr>\r\n          <td\r\n            *ngFor="let col of columns"\r\n            [ngStyle]="{ \'text-align\': col.alignment }"\r\n            [ngClass]="{\r\n              \'table-border-left\':\r\n                col.field === \'stockQuantity\' || col.field === \'receiptQuantity\' || col.field === \'issueQuantity\'\r\n            }"\r\n          >\r\n            {{ rowData[col.field] }}\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </a-content>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.scss':
      /*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.scss ***!
  \*****************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.display--flex-column {\n  display: flex !important;\n  flex-direction: column !important; }\n\n.display--flex-row {\n  display: flex !important;\n  flex-direction: row !important; }\n\n.display--none {\n  display: none !important; }\n\n.height--100 {\n  height: 100%; }\n\n.min-width--fit-content {\n  min-width: -webkit-fit-content !important;\n  min-width: -moz-fit-content !important;\n  min-width: fit-content !important; }\n\n.position--relative {\n  position: relative !important; }\n\n.scroll-y--none {\n  overflow-y: hidden !important; }\n\n.text--unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important; }\n\n.visibility--hidden {\n  visibility: hidden !important; }\n\n.width--10 {\n  width: 10%; }\n\n.width--20 {\n  width: 20%; }\n\n.width--30 {\n  width: 30%; }\n\n.width--40 {\n  width: 50%; }\n\n.width--50 {\n  width: 50%; }\n\n.width--60 {\n  width: 60%; }\n\n.width--70 {\n  width: 70%; }\n\n.width--80 {\n  width: 80%; }\n\n.width--90 {\n  width: 90%; }\n\n.width--100 {\n  width: 100%; }\n\n.flex--1 {\n  flex: 1 !important; }\n\n.flex--2 {\n  flex: 2 !important; }\n\n.flex--3 {\n  flex: 3 !important; }\n\n.flex--4 {\n  flex: 4 !important; }\n\n.flex--5 {\n  flex: 5 !important; }\n\n.flex--auto {\n  flex: auto !important; }\n\n.flex-row--align-center {\n  align-items: center !important; }\n\n.flex-row--align-end {\n  align-items: flex-end !important; }\n\n.flex-row--align-start {\n  align-items: flex-start !important; }\n\n.flex-row--justify-center {\n  justify-content: center !important; }\n\n.flex-row--justify-end {\n  justify-content: flex-end !important; }\n\n.flex-row--justify-start {\n  justify-content: flex-start !important; }\n\n:host .table-border-left {\n  border-left: solid 1px #006ea9 !important; }\n\n:host .grid-cell.in-simulation {\n  border-left-color: #ffc107;\n  border-left-style: solid;\n  border-left-width: 8px; }\n\n:host .grid-cell-detail .form-control-potential-unit {\n  width: 4rem; }\n\n:host .grid-cell-scope .ancestor-actions,\n:host .grid-cell-scope .ancestor-data {\n  background-color: #f0f0f0; }\n\n:host .grid-cell-scope .ancestor-actions {\n  justify-content: flex-end;\n  padding: 8px; }\n\n:host .grid-cell-state-simulation {\n  background-color: #ffc107;\n  padding: 0; }\n\n:host .grid-cell-state-simulation .grid-cell-title {\n    color: #000; }\n\n:host .grid-cell-state-simulation .simulation-criterion:not(:last-of-type)::after {\n    content: " | "; }\n\n:host .grid-cell-chart .chart-container {\n  display: flex;\n  flex-direction: row; }\n\n@media screen and (max-width: 1280px) {\n    :host .grid-cell-chart .chart-container {\n      flex-direction: column; } }\n\n:host .grid-cell-chart .chart-container .chart-legend {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label {\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color {\n        height: 0.75rem;\n        margin-right: 8px;\n        width: 2rem; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.quantity {\n          background-color: #0d3fc2; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.amount {\n          background-color: #d3c632; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-legend-label .chart-legend-label-color.not-airworthy {\n          background-color: #f6685e; }\n\n:host .grid-cell-chart .chart-container .chart-legend .chart-value {\n      font-weight: 700;\n      margin-left: 8px; }\n\n:host .grid-cell-chart .chart-container .chart-wrapper {\n    position: relative;\n    height: 18rem;\n    width: 30rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stdmFsdWF0aW9uL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9tb2RpZmllcnMuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stdmFsdWF0aW9uL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcc3RvY2stdmFsdWF0aW9uXFxmb3JtXFxzdG9jay12YWx1YXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stdmFsdWF0aW9uL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stdmFsdWF0aW9uL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSx3QkFBd0I7RUFDeEIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUNBQWlDO0VBQWpDLHNDQUFpQztFQUFqQyxpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxvQ0FBNEI7S0FBNUIsaUNBQTRCO01BQTVCLGdDQUE0QjtVQUE1Qiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUE7O0FBS2I7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxzQ0FBc0MsRUFBQTs7QUN6SHhDO0VBRUkseUNBQXlDLEVBQUE7O0FBRjdDO0VBTUksMEJDWVk7RURYWix3QkMyQmdCO0VEMUJoQixzQkNnQ2MsRUFBQTs7QUR4Q2xCO0VBYU0sV0FBVyxFQUFBOztBQWJqQjs7RUFvQk0seUJDdkI4QixFQUFBOztBREdwQztFQXdCTSx5QkFBeUI7RUFDekIsWUNlWSxFQUFBOztBRHhDbEI7RUE4QkkseUJDWlk7RURhWixVQUFVLEVBQUE7O0FBL0JkO0lBa0NNLFdDcENtQixFQUFBOztBREV6QjtJQXNDTSxjQUFjLEVBQUE7O0FBdENwQjtFRW1CRSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FGMEJmO0lBOUNOO01BK0NRLHNCQUFzQixFQUFBLEVBNEN6Qjs7QUEzRkw7SUVjRSxhQUFhO0lBQ2Isc0JBQXNCO0lGc0NoQix1QkFBdUI7SUFDdkIsZ0JDZFUsRUFBQTs7QUR4Q2xCO01FbUJFLGFBQWE7TUFDYixtQkFBbUI7TUZ1Q1gsbUJBQW1CLEVBQUE7O0FBM0Q3QjtRQThEWSxlQUFlO1FBQ2YsaUJDdkJNO1FEd0JOLFdBQVcsRUFBQTs7QUFoRXZCO1VBbUVjLHlCQUF5QixFQUFBOztBQW5FdkM7VUF1RWMseUJBQXlCLEVBQUE7O0FBdkV2QztVQTJFYyx5QkN2RE0sRUFBQTs7QURwQnBCO01BaUZVLGdCQUFnQjtNQUNoQixnQkMxQ1EsRUFBQTs7QUR4Q2xCO0lBdUZRLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stdmFsdWF0aW9uL2Zvcm0vc3RvY2stdmFsdWF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS0tZmxleC1jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNwbGF5LS1mbGV4LXJvdyB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc3BsYXktLW5vbmUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlaWdodC0tMTAwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5taW4td2lkdGgtLWZpdC1jb250ZW50IHtcclxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3NpdGlvbi0tcmVsYXRpdmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2Nyb2xsLXktLW5vbmUge1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC0tdW5zZWxlY3RhYmxlIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmlzaWJpbGl0eS0taGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoLS0xMCB7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLndpZHRoLS0yMCB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLndpZHRoLS0zMCB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLndpZHRoLS00MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS01MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLndpZHRoLS02MCB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLndpZHRoLS03MCB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLndpZHRoLS04MCB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLndpZHRoLS05MCB7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLndpZHRoLS0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4uZmxleC0tMSB7XHJcbiAgZmxleDogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMiB7XHJcbiAgZmxleDogMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tMyB7XHJcbiAgZmxleDogMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNCB7XHJcbiAgZmxleDogNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tNSB7XHJcbiAgZmxleDogNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC0tYXV0byB7XHJcbiAgZmxleDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleC1yb3ctLWFsaWduLWVuZCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tYWxpZ24tc3RhcnQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mbGV4LXJvdy0tanVzdGlmeS1lbmQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsZXgtcm93LS1qdXN0aWZ5LXN0YXJ0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG4iLCJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuQGltcG9ydCBcIm1vZGlmaWVyc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIC50YWJsZS1ib3JkZXItbGVmdCB7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICMwMDZlYTkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5ncmlkLWNlbGwuaW4tc2ltdWxhdGlvbiB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJG9yYW5nZTtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6ICRtYXJnaW4tdmFsdWU7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLWRldGFpbCB7XHJcbiAgICAuZm9ybS1jb250cm9sLXBvdGVudGlhbC11bml0IHtcclxuICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLXNjb3BlIHtcclxuICAgIC5hbmNlc3Rvci1hY3Rpb25zLFxyXG4gICAgLmFuY2VzdG9yLWRhdGEge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLmFuY2VzdG9yLWFjdGlvbnMge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC1zdGF0ZS1zaW11bGF0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIC5ncmlkLWNlbGwtdGl0bGUge1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAuc2ltdWxhdGlvbi1jcml0ZXJpb246bm90KDpsYXN0LW9mLXR5cGUpOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIHwgXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JpZC1jZWxsLWNoYXJ0IHtcclxuICAgIC5jaGFydC1jb250YWluZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNoYXJ0LWxlZ2VuZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgIC5jaGFydC1sZWdlbmQtbGFiZWwge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC5jaGFydC1sZWdlbmQtbGFiZWwtY29sb3Ige1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDJyZW07XHJcblxyXG4gICAgICAgICAgICAmLnF1YW50aXR5IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQzZmMyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmFtb3VudCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzYzYzMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5ub3QtYWlyd29ydGh5IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoYXJ0LXZhbHVlIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaGFydC13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHJlbTtcclxuICAgICAgICB3aWR0aDogMzByZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.ts':
      /*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.ts ***!
  \***************************************************************************************/
      /*! exports provided: StockValuationFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StockValuationFormComponent',
          function() {
            return StockValuationFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _search_stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../search/stock-valuation-search.service */ './src/app/main/logistics/stock-valuation/search/stock-valuation-search.service.ts'
        );
        /* harmony import */ var _stock_valuation_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./stock-valuation-form.service */ './src/app/main/logistics/stock-valuation/form/stock-valuation-form.service.ts'
        );
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var extendStatics = function(d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
            };
          })();
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var StockValuationFormComponent = /** @class */ (function(_super) {
          __extends(StockValuationFormComponent, _super);
          function StockValuationFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            stockValuationFormService,
            dateService,
            stockValuationSearchService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
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
          StockValuationFormComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.searchObject =
              this.componentData.objectId && this.serializationService.deserialize(this.componentData.objectId);
            this.calculate();
          };
          StockValuationFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .LOG_STOCK_VALUATION_FORM;
          };
          StockValuationFormComponent.prototype.init = function() {
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
          StockValuationFormComponent.prototype.initChart = function() {
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
          StockValuationFormComponent.prototype.loadWarehouses = function() {
            var _this = this;
            this.stockValuationSearchService.findAll().subscribe(function(results) {
              results.forEach(function(res) {
                var warehouse = { label: '', value: '' };
                warehouse = {
                  label: res.whCode + ' - ' + res.whName,
                  value: '' + res.wareHouseId
                };
                _this.warehouses.push(warehouse);
              });
              var wares = _this.warehouses.filter(function(ware) {
                return (
                  _this.stock.searchInputStockValuation &&
                  _this.stock.searchInputStockValuation.warehouseId &&
                  '' + ware.value === '' + _this.stock.searchInputStockValuation.warehouseId
                );
              });
              _this.warehouse = wares[0] && wares[0].label;
            });
          };
          StockValuationFormComponent.prototype.setAmountChartOptions = function() {
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
                bodyFontColor:
                  _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__['AppConstants'].COLOR_BACKGROUND_PRIMARY
              }
            };
          };
          StockValuationFormComponent.prototype.setQuantityChartOptions = function() {
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
                bodyFontColor:
                  _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_1__['AppConstants'].COLOR_BACKGROUND_PRIMARY
              }
            };
          };
          StockValuationFormComponent.prototype.calculate = function() {
            var _this = this;
            this.isStockSheetTableLoading = true;
            this.stockValuationFormService.stockValuationSearch(this.searchObject).subscribe(function(result) {
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
          StockValuationFormComponent.prototype.concatenateStockTableRowsByMaterial = function(stockTable) {
            var _this = this;
            if (!!stockTable) {
              var stocks_1 = stockTable;
              stocks_1.forEach(function(stock) {
                if (stocks_1.length !== 0) {
                  var inStockTableForDB = _this.stockSheetTableForDB.filter(function(st) {
                    return st.date.getTime() === stock.date.getTime();
                  });
                  if (inStockTableForDB.length !== 0) {
                    // stock exists in this.stockSheetTableForDB
                    var indexInStockTableForDB = _this.stockSheetTableForDB.findIndex(function(st) {
                      return st.date.getTime() === stock.date.getTime();
                    });
                    // Receipt
                    if (
                      _this.stockSheetTableForDB[indexInStockTableForDB].receiptQuantity !== null &&
                      _this.stockSheetTableForDB[indexInStockTableForDB].receiptQuantity !== undefined &&
                      stock.receiptQuantity !== null &&
                      stock.receiptQuantity !== undefined
                    ) {
                      _this.stockSheetTableForDB[indexInStockTableForDB].receiptQuantity += stock.receiptQuantity;
                    }
                    // Stock
                    if (
                      _this.stockSheetTableForDB[indexInStockTableForDB].stockQuantity !== null &&
                      _this.stockSheetTableForDB[indexInStockTableForDB].stockQuantity !== undefined &&
                      stock.stockQuantity !== null &&
                      stock.stockQuantity !== undefined &&
                      _this.stockSheetTableForDB[indexInStockTableForDB].stockQuantity < stock.stockQuantity
                    ) {
                      _this.stockSheetTableForDB[indexInStockTableForDB].stockQuantity = stock.stockQuantity;
                    }
                    if (
                      _this.stockSheetTableForDB[indexInStockTableForDB].stockAmount !== null &&
                      _this.stockSheetTableForDB[indexInStockTableForDB].stockAmount !== undefined &&
                      stock.stockAmount !== null &&
                      stock.stockAmount !== undefined &&
                      _this.stockSheetTableForDB[indexInStockTableForDB].stockAmount < stock.stockAmount
                    ) {
                      _this.stockSheetTableForDB[indexInStockTableForDB].stockAmount = stock.stockAmount;
                    }
                  } else {
                    // new material code. push in this.stockSheetTableForDB
                    _this.stockSheetTableForDB.unshift(stock);
                  }
                }
              });
              this.convertStockTableIntoRowDTOArray();
            }
          };
          StockValuationFormComponent.prototype.convertStockTableIntoRowDTOArray = function() {
            var _this = this;
            this.stockSheetTableForDB.forEach(function(stock) {
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
          StockValuationFormComponent.prototype.setChartData = function(stock) {
            var _this = this;
            var stocks = stock.stockSheetTableList;
            if (!!stocks) {
              stocks.forEach(function(st) {
                _this.stockQuantityVariationData.labels.push(_this.dateService.dateToString(st.date));
                _this.stockQuantityVariationData.datasets[0].data.push(st.stockQuantity);
                _this.stockAmountVariationData.labels.push(_this.dateService.dateToString(st.date));
                _this.stockAmountVariationData.datasets[0].data.push(st.stockAmount);
              });
            }
            this.chartContentReady = true;
          };
          // Currency
          StockValuationFormComponent.prototype.loadCurrency = function() {
            var _this = this;
            this.stockValuationFormService.getLocalCurrency().subscribe(function(result) {
              _this.currency = result;
              var curr = _this.currency.split(' ');
              _this.curr = curr[1];
            });
          };
          StockValuationFormComponent.prototype.setStockSheetTableCols = function() {
            this.stockSheetTableCols = [
              { field: 'date', alignment: 'center' },
              { field: 'materialCode', alignment: 'center' },
              { field: 'materialDesignation', alignment: 'center' },
              { field: 'stockQuantity', alignment: 'center' },
              { field: 'stockValue', alignment: 'center' },
              { field: 'stockAmount', alignment: 'center' }
            ];
          };
          StockValuationFormComponent.prototype.setStockSheetTableCols2 = function() {
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
          StockValuationFormComponent.prototype.closeDialog = function() {
            this.displayFullScreen = false;
          };
          StockValuationFormComponent.prototype.numberWithCommas = function(n) {
            var parts = n.toString().split('.');
            return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '');
          };
          StockValuationFormComponent.prototype.newCalculation = function() {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
                  .LOG_STOCK_VALUATION_SEARCH,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          StockValuationFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-stock-valuation-form',
                template: __webpack_require__(
                  /*! ./stock-valuation-form.component.html */ './src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./stock-valuation-form.component.scss */ './src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__['SessionService'],
                _stock_valuation_form_service__WEBPACK_IMPORTED_MODULE_13__['StockValuationFormService'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_4__['DateService'],
                _search_stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_12__['StockValuationSearchService']
              ])
            ],
            StockValuationFormComponent
          );
          return StockValuationFormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_11__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.html':
      /*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.html ***!
  \*********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header-container">\r\n  <div class="page-context">\r\n    <div class="page-title-container">\r\n      <div class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class="page-secondary-actions">\r\n        <i\r\n          class="fa fa-fw aw-icon aw-icon-with-border"\r\n          [ngClass]="{ \'fa-star\': isFavoriteEntry, \'fa-star-o\': !isFavoriteEntry }"\r\n          aria-hidden="true"\r\n          (click)="updateFavoriteState()"\r\n          pTooltip="{{ \'page.\' + (isFavoriteEntry ? \'removeFromFavorites\' : \'addToFavorites\') | translate }}"\r\n          tooltipPosition="bottom"\r\n        ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="page-subtitle-container">\r\n      <div class="page-subtitle">\r\n        {{ "page.searchPage" | translate }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "global.search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <div class="column">\r\n                <div class="row search-criteria-header">\r\n                  <i\r\n                    class="fa fa-fw fa-undo aw-icon aw-icon-with-border search-criteria-action"\r\n                    aria-hidden="true"\r\n                    pTooltip="{{ \'global.reset\' | translate }}"\r\n                    tooltipPosition="top"\r\n                    (click)="resetSearchCriteria()"\r\n                  ></i>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".materialCode" | translate }} </label>\r\n\r\n                    <div class="form-control form-control-with-modal" [ngClass]="{ disabled: isReadOpenMode }">\r\n                      <div class="form-control-data" (click)="quickSearchMaterial()">\r\n                        {{ searchObject.materialCode }}\r\n                      </div>\r\n\r\n                      <div *ngIf="searchObject.materialCode" class="btn-clear-wrapper">\r\n                        <i\r\n                          class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                          aria-hidden="true"\r\n                          (click)="searchObject.materialCode = undefined"\r\n                        ></i>\r\n                      </div>\r\n                      <div class="btn-search-wrapper">\r\n                        <i\r\n                          class="fa fa-fw fa-search aw-icon btn-search"\r\n                          aria-hidden="true"\r\n                          (click)="quickSearchMaterial()"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group required">\r\n                    <label class="form-label">{{ "global.date" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <p-calendar\r\n                        showButtonBar="true"\r\n                        [monthNavigator]="true"\r\n                        [yearNavigator]="true"\r\n                        [yearRange]="sessionService.calendarYearRange"\r\n                        class="aw-calendar"\r\n                        [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                        [locale]="sessionService.calendarFormat"\r\n                        [(ngModel)]="searchObject.date"\r\n                        [disabled]="isReadOpenMode"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label"> {{ componentData.componentId + ".warehouseId" | translate }} </label>\r\n\r\n                    <div class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="warehouses"\r\n                        [(ngModel)]="searchObject.warehouseId"\r\n                        [showClear]="true"\r\n                        placeholder="&nbsp;"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="row">\r\n                  <div class="form-group required">\r\n                    <label class="form-label"> {{ componentData.componentId + ".method" | translate }} </label>\r\n\r\n                    <div style="width: 64%" class="form-control">\r\n                      <p-dropdown\r\n                        class="aw-dropdown fixed-width"\r\n                        [options]="methods"\r\n                        [(ngModel)]="searchObject.flag"\r\n                        placeholder="&nbsp;"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- <div class="form-group"></div> -->\r\n\r\n                  <div class="form-group"></div>\r\n                </div>\r\n\r\n                <div class="row search-criteria-footer">\r\n                  <div class="search-actions">\r\n                    <button type="button" mat-raised-button (click)="calculate()">\r\n                      {{ componentData.componentId + ".toCalculate" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-search-material\r\n  *ngIf="showQuickSearchMaterialPopup"\r\n  [(display)]="showQuickSearchMaterialPopup"\r\n  [material-code]="searchObject.materialCode"\r\n  (onSelected)="setSelectedMaterial($event)"\r\n></aw-dialog-search-material>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.scss':
      /*!*********************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.scss ***!
  \*********************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3N0b2NrLXZhbHVhdGlvbi9zZWFyY2gvc3RvY2stdmFsdWF0aW9uLXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */';

        /***/
      },

    /***/ './src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.ts':
      /*!*******************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.ts ***!
  \*******************************************************************************************/
      /*! exports provided: StockValuationSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StockValuationSearchComponent',
          function() {
            return StockValuationSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../node_modules/@ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./stock-valuation-search.service */ './src/app/main/logistics/stock-valuation/search/stock-valuation-search.service.ts'
        );
        var __extends =
          (undefined && undefined.__extends) ||
          (function() {
            var extendStatics = function(d, b) {
              extendStatics =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return extendStatics(d, b);
            };
            return function(d, b) {
              extendStatics(d, b);
              function __() {
                this.constructor = d;
              }
              d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
            };
          })();
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };

        var StockValuationSearchComponent = /** @class */ (function(_super) {
          __extends(StockValuationSearchComponent, _super);
          function StockValuationSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            translateService,
            stockValuationSearchService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
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
          StockValuationSearchComponent.prototype.init = function() {
            this.searchObject = {
              date: new Date(),
              flag: 0
            };
          };
          StockValuationSearchComponent.prototype.loadMethodDropdown = function() {
            var _this = this;
            var method1 = this.getComponentName() + '.methodWeightedAverage';
            var method2 = this.getComponentName() + '.methodFifo';
            this.translateService.get([method1, method2]).subscribe(function(results) {
              _this.methods = [
                { label: results[method1], value: 0 },
                { label: results[method2], value: 1 }
              ];
            });
          };
          StockValuationSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .LOG_STOCK_VALUATION_SEARCH;
          };
          StockValuationSearchComponent.prototype.ngOnInit = function() {
            _super.prototype.ngOnInit.call(this);
            this.displayComponentContext('global.search', true);
          };
          // opens material popup in search criteria
          StockValuationSearchComponent.prototype.quickSearchMaterial = function() {
            this.showQuickSearchMaterialPopup = true;
          };
          // loads warehouse dropdown
          StockValuationSearchComponent.prototype.loadWarehouses = function() {
            var _this = this;
            this.stockValuationSearchService.findAll().subscribe(function(results) {
              results.forEach(function(res) {
                var warehouse = { label: '', value: '' };
                warehouse = {
                  label: res.whCode + ' - ' + res.whName,
                  value: '' + res.wareHouseId
                };
                _this.warehouses.push(warehouse);
              });
            });
          };
          // calculates stocks on the basis of search criteria
          StockValuationSearchComponent.prototype.calculate = function() {
            // Check for date. No check for method required as some value is always selected in that dropdown.
            if (!!this.searchObject.date) {
              // transfer to stock valuation form
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
                    .LOG_STOCK_VALUATION_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read
              };
              var objectId = this.searchObject;
              if (!!objectId) {
                data.objectId = this.serializationService.serialize(objectId);
              }
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            } else {
              this.messageService.showWarningMessage(this.getTranslateKey('selectDate'));
            }
          };
          StockValuationSearchComponent.prototype.setSelectedMaterial = function(event) {
            this.showQuickSearchMaterialPopup = false;
            this.searchObject.materialCode = event.pnCode;
          };
          StockValuationSearchComponent.prototype.resetSearchCriteria = function() {
            this.init();
          };
          StockValuationSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-stock-valuation-search',
                template: __webpack_require__(
                  /*! ./stock-valuation-search.component.html */ './src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./stock-valuation-search.component.scss */ './src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_7__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_9__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__['SessionService'],
                _node_modules_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_11__['StockValuationSearchService']
              ])
            ],
            StockValuationSearchComponent
          );
          return StockValuationSearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_10__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-valuation/stock-valuation.module.ts':
      /*!**************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/stock-valuation.module.ts ***!
  \**************************************************************************/
      /*! exports provided: StockValuationModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'StockValuationModule', function() {
          return StockValuationModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! primeng/calendar */ './node_modules/primeng/calendar.js'
        );
        /* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/chart */ './node_modules/primeng/chart.js'
        );
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-material/dialog-search-material.module */ './src/app/shared/components/dialog-search-material/dialog-search-material.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/components/dialog-table/dialog-table.module */ './src/app/shared/components/dialog-table/dialog-table.module.ts'
        );
        /* harmony import */ var _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/components/dynamic-attributes/dynamic-attributes.module */ './src/app/shared/components/dynamic-attributes/dynamic-attributes.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _form_stock_valuation_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./form/stock-valuation-form.component */ './src/app/main/logistics/stock-valuation/form/stock-valuation-form.component.ts'
        );
        /* harmony import */ var _form_stock_valuation_form_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./form/stock-valuation-form.service */ './src/app/main/logistics/stock-valuation/form/stock-valuation-form.service.ts'
        );
        /* harmony import */ var _search_stock_valuation_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./search/stock-valuation-search.component */ './src/app/main/logistics/stock-valuation/search/stock-valuation-search.component.ts'
        );
        /* harmony import */ var _search_stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./search/stock-valuation-search.service */ './src/app/main/logistics/stock-valuation/search/stock-valuation-search.service.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
              d;
            if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __read =
          (undefined && undefined.__read) ||
          function(o, n) {
            var m = typeof Symbol === 'function' && o[Symbol.iterator];
            if (!m) return o;
            var i = m.call(o),
              r,
              ar = [],
              e;
            try {
              while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
            } catch (error) {
              e = { error: error };
            } finally {
              try {
                if (r && !r.done && (m = i['return'])) m.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
            return ar;
          };
        var __spread =
          (undefined && undefined.__spread) ||
          function() {
            for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
            return ar;
          };

        /******************************************************************************
         * Modules
         *************************************************************************** */
        var EXTERNAL_MODULES = [
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__['DropdownModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_4__['TableModule'],
          primeng_chart__WEBPACK_IMPORTED_MODULE_2__['ChartModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__['TooltipModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_dialog_table_dialog_table_module__WEBPACK_IMPORTED_MODULE_10__['DialogTableModule'],
          _shared_components_dynamic_attributes_dynamic_attributes_module__WEBPACK_IMPORTED_MODULE_11__[
            'DynamicAttributesModule'
          ],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_12__['ModalModule'],
          _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_9__[
            'DialogSearchMaterialModule'
          ]
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [];
        var DYNAMIC_COMPONENTS = [
          _search_stock_valuation_search_component__WEBPACK_IMPORTED_MODULE_16__['StockValuationSearchComponent'],
          _form_stock_valuation_form_component__WEBPACK_IMPORTED_MODULE_14__['StockValuationFormComponent']
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _search_stock_valuation_search_service__WEBPACK_IMPORTED_MODULE_17__['StockValuationSearchService'],
          _form_stock_valuation_form_service__WEBPACK_IMPORTED_MODULE_15__['StockValuationFormService']
        ];
        var StockValuationModule = /** @class */ (function() {
          function StockValuationModule() {}
          StockValuationModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_6__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_7__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_8__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_13__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            StockValuationModule
          );
          return StockValuationModule;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=logistics-stock-valuation-stock-valuation-module.js.map
