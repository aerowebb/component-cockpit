(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~logistics-goods-movement-goods-movement-module~logistics-material-availability-material-avai~e4435f8e"],{

/***/ "./src/app/main/logistics/material-availability/form/material-availability-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-availability/form/material-availability-form.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-container\">\r\n  <div class=\"page-context\">\r\n    <div class=\"page-title-container\">\r\n      <div class=\"page-title\" *ngIf=\"goodMvtOutput.expectedTitle\">\r\n        {{ \"transaction.\" + goodMvtOutput.expectedTitle | translate }}\r\n      </div>\r\n      <div class=\"page-title\" *ngIf=\"!goodMvtOutput.expectedTitle\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </div>\r\n\r\n      <div class=\"page-secondary-actions\"></div>\r\n    </div>\r\n\r\n    <div class=\"page-subtitle-container\">\r\n      <div class=\"page-subtitle\">{{ subTitle }}</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-primary-actions\">\r\n    <button\r\n      type=\"button\"\r\n      mat-raised-button\r\n      *ngIf=\"snBatchTableSelection._select && materialTableSelection.isSn\"\r\n      (click)=\"openAirworthinessStatus(snBatchTableSelection.stockInformationRow)\"\r\n    >\r\n      {{ componentData.componentId + \".airworthinessStatus\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" mat-raised-button (click)=\"cancel()\">\r\n      {{ componentData.componentId + \".cancel\" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn-with-spinner\"\r\n      color=\"primary\"\r\n      mat-raised-button\r\n      *ngIf=\"materialTableSelection._select\"\r\n      (click)=\"save()\"\r\n    >\r\n      <span class=\"lds-hourglass\" *ngIf=\"isSaving\"></span>\r\n      {{ componentData.componentId + \".save\" | translate }}\r\n    </button>\r\n\r\n    <button type=\"button\" mat-raised-button (click)=\"refresh()\">\r\n      {{ componentData.componentId + \".refresh\" | translate }}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12 breadcrumbs\">\r\n          <div class=\"grid-cell grid-cell--container breadcrumbs-container\">\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"row \" *ngIf=\"!isCreateOpenMode\">\r\n                <div class=\"breadcrumbs flex-row--justify-center\">\r\n                  <ul class=\"breadcrumbs-navigation\">\r\n                    <li *ngFor=\"let state of breadcrumbsList\" [class.current]=\"state.tittle === breadcrumbs.tittle\">\r\n                      <div class=\"breadcrumbs-labels\">\r\n                        <div class=\"title\">{{ state.tittle }}</div>\r\n                        <div class=\"subtitle\">{{ state.subtittle }}</div>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"grid-row select-box\">\r\n        <div class=\"grid-cell--4 arrow\">\r\n          <div class=\"grid-cell grid-cell--container grid-cell-stock-select\">\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"grid-cell-header materials\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">{{ componentData.componentId + \".materail\" | translate }}</h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"table\">\r\n                <div class=\"table-header material\">\r\n                  <div class=\"table-row\">\r\n                    <div class=\"table-cell material-pn\">\r\n                      {{ componentData.componentId + \".materialPn\" | translate }}\r\n                    </div>\r\n                    <div class=\"table-cell interchangeability\">\r\n                      {{ componentData.componentId + \".interchangability\" | translate }}\r\n                    </div>\r\n                    <div class=\"table-cell material-quantity\">\r\n                      {{ componentData.componentId + \".availableQuantity\" | translate }}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"table-body material\">\r\n                  <ng-container *ngFor=\"let materialRow of materialTable; let i = index\">\r\n                    <div\r\n                      id=\"{{ i }}\"\r\n                      class=\"table-row\"\r\n                      (click)=\"toggleMaterialVisibility(materialRow, false)\"\r\n                      [ngClass]=\"{ first: i == 0, selected: materialRow._select }\"\r\n                    >\r\n                      <div class=\"table-cell material-pn content\">\r\n                        <a (click)=\"navigateToMaterial(materialRow.pnCode)\">\r\n                          {{ materialRow.pnCode }}\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"table-cell interchangeability\">\r\n                        {{ materialRow.interchangeability }}\r\n                      </div>\r\n                      <div class=\"table-cell material-quantity\">\r\n                        {{ materialRow.availableQuantity }}\r\n                      </div>\r\n                    </div>\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"grid-cell--4 arrow\">\r\n          <div class=\"grid-cell grid-cell--container grid-cell-stock-select\">\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"grid-cell-header warehouse\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">{{ componentData.componentId + \".warehouse\" | translate }}</h3>\r\n                </div>\r\n              </div>\r\n              <div class=\"table\">\r\n                <div class=\"table-header warehouse\" *ngIf=\"!noPnInWarehouse && materialTableSelection._select\">\r\n                  <div class=\"table-row\">\r\n                    <div class=\"table-cell warehouse-site\">\r\n                      {{ componentData.componentId + \".warehouseSite\" | translate }}\r\n                    </div>\r\n                    <div class=\"table-cell warehouse-name\">\r\n                      {{ componentData.componentId + \".warehouseName\" | translate }}\r\n                    </div>\r\n                    <div class=\"table-cell warehouse-quantity\">\r\n                      {{ componentData.componentId + \".availableQuantity\" | translate }}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"table-body warehouse\" *ngIf=\"!noPnInWarehouse && materialTableSelection._select\">\r\n                  <ng-container *ngFor=\"let warehouseRow of warehouseTable; let i = index\">\r\n                    <div\r\n                      id=\"{{ i }}\"\r\n                      class=\"table-row\"\r\n                      (click)=\"toggleWarehouseVisibility(warehouseRow)\"\r\n                      [ngClass]=\"{ first: i == 0, selected: warehouseRow._select }\"\r\n                    >\r\n                      <div class=\"table-cell warehouse-site\" *ngIf=\"warehouseRow.site\">\r\n                        {{ warehouseRow.site.siteName }}\r\n                      </div>\r\n                      <div class=\"table-cell warehouse-name\">\r\n                        {{ warehouseRow.bidtWarehouseDTO.whName }}\r\n                      </div>\r\n                      <div\r\n                        class=\"table-cell warehouse-quantity\"\r\n                        [ngClass]=\"{\r\n                          ok: isConfOk(warehouseRow),\r\n                          warning: isConfWarning(warehouseRow),\r\n                          nok: isConfNok(warehouseRow)\r\n                        }\"\r\n                      >\r\n                        <div class=\"warehouse-quantity value\">\r\n                          {{ warehouseRow.quantity }}\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n              <div class=\"message\" *ngIf=\"noPnInWarehouse && materialTableSelection._select\">\r\n                {{ componentData.componentId + \".noPnInWarehouse\" | translate }}\r\n              </div>\r\n              <div class=\"message\" *ngIf=\"!materialTableSelection._select\">\r\n                {{ componentData.componentId + \".selectMaterialMessage\" | translate }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"grid-cell--4\">\r\n          <div class=\"grid-cell grid-cell--container grid-cell-stock-select\">\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"grid-cell-header snBatch\">\r\n                <div class=\"grid-cell-title-container\">\r\n                  <h3 class=\"grid-cell-title\">\r\n                    <div *ngIf=\"materialTableSelection.isSn\">\r\n                      {{ componentData.componentId + \".snTitle\" | translate }}\r\n                    </div>\r\n                    <div *ngIf=\"!materialTableSelection.isSn\">\r\n                      {{ componentData.componentId + \".batch\" | translate }}\r\n                    </div>\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"table\">\r\n                <div\r\n                  class=\"table-header snBatch\"\r\n                  *ngIf=\"warehouseTableSelection._select && !noSnWithPn && !noBatchWithPn\"\r\n                >\r\n                  <div class=\"table-row\">\r\n                    <div class=\"table-cell snBatch-sn\" *ngIf=\"materialTableSelection.isSn\">\r\n                      {{ componentData.componentId + \".sn\" | translate }}\r\n                    </div>\r\n                    <div class=\"table-cell snBatch-batch\" *ngIf=\"!materialTableSelection.isSn\">\r\n                      {{ componentData.componentId + \".batch\" | translate }}\r\n                    </div>\r\n                    <div class=\"table-cell snBatch-qty\" *ngIf=\"!materialTableSelection.isSn\">\r\n                      {{ componentData.componentId + \".quantity\" | translate }}\r\n                    </div>\r\n                    <div class=\"table-cell snBatch-potential\">\r\n                      {{ componentData.componentId + \".potential\" | translate }}\r\n                    </div>\r\n                    <div class=\"table-cell snBatch-date\">\r\n                      {{ componentData.componentId + \".storageDate\" | translate }}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div\r\n                  class=\"table-body snBatch\"\r\n                  *ngIf=\"warehouseTableSelection._select && !noSnWithPn && !noBatchWithPn\"\r\n                >\r\n                  <ng-container *ngFor=\"let snBatchRow of snBatchTable; let i = index\">\r\n                    <div\r\n                      id=\"{{ i }}\"\r\n                      class=\"table-row\"\r\n                      (click)=\"toggleSnBatchVisibility(snBatchRow)\"\r\n                      [ngClass]=\"{ first: i == 0, selected: snBatchRow._select }\"\r\n                    >\r\n                      <div class=\"snBatch-sn\" *ngIf=\"materialTableSelection.isSn\">\r\n                        <a\r\n                          (click)=\"\r\n                            navigateToEquipment(materialTableSelection.pnCode, snBatchRow.stockInformationRow.sn)\r\n                          \"\r\n                        >\r\n                          {{ snBatchRow.stockInformationRow.sn }}\r\n                        </a>\r\n                        <i\r\n                          *ngIf=\"\r\n                            snBatchRow.stockInformationRow.isSnAlreadySelected &&\r\n                            !snBatchRow.stockInformationRow._obj.stockIssueWorkOrderWoCode\r\n                          \"\r\n                          class=\"fa fa-exclamation-triangle\"\r\n                          aria-hidden=\"true\"\r\n                          pTooltip=\"{{ componentData.componentId + '.tooltipNoSourceSn' | translate }}\"\r\n                          tooltipPosition=\"top\"\r\n                        >\r\n                        </i>\r\n                        <i\r\n                          *ngIf=\"\r\n                            snBatchRow.stockInformationRow.isSnAlreadySelected &&\r\n                            snBatchRow.stockInformationRow._obj.stockIssueWorkOrderWoCode\r\n                          \"\r\n                          class=\"fa fa-exclamation-triangle\"\r\n                          aria-hidden=\"true\"\r\n                          pTooltip=\"{{ componentData.componentId + '.tooltipSourceSn' | translate }}{{\r\n                            snBatchRow.stockInformationRow._obj.stockIssueWorkOrderWoCode\r\n                          }}\"\r\n                          tooltipPosition=\"top\"\r\n                        >\r\n                        </i>\r\n                      </div>\r\n                      <div class=\"snBatch-batch\" *ngIf=\"!materialTableSelection.isSn\">\r\n                        <a>\r\n                          {{ snBatchRow.stockInformationRow.batch }}\r\n                        </a>\r\n                        <i\r\n                          *ngIf=\"\r\n                            snBatchRow.stockInformationRow.isBatchAlreadySelected &&\r\n                            !snBatchRow.stockInformationRow._obj.stockIssueWorkOrderWoCode\r\n                          \"\r\n                          class=\"fa fa-exclamation-triangle\"\r\n                          aria-hidden=\"true\"\r\n                          pTooltip=\"{{ componentData.componentId + '.tooltipNoSourceBatch' | translate }}\"\r\n                          tooltipPosition=\"top\"\r\n                        >\r\n                        </i>\r\n                        <i\r\n                          *ngIf=\"\r\n                            snBatchRow.stockInformationRow.isBatchAlreadySelected &&\r\n                            snBatchRow.stockInformationRow._obj.stockIssueWorkOrderWoCode\r\n                          \"\r\n                          class=\"fa fa-exclamation-triangle\"\r\n                          aria-hidden=\"true\"\r\n                          pTooltip=\"{{ componentData.componentId + '.tooltipSourceBatch' | translate }}{{\r\n                            snBatchRow.stockInformationRow._obj.stockIssueWorkOrderWoCode\r\n                          }}\"\r\n                          tooltipPosition=\"top\"\r\n                        >\r\n                        </i>\r\n                      </div>\r\n                      <div class=\"snBatch-qty\" *ngIf=\"!materialTableSelection.isSn\">\r\n                        {{ snBatchRow.stockInformationRow.quantity }}\r\n                      </div>\r\n                      <div class=\"snBatch-potential\">\r\n                        {{ snBatchRow.stockInformationRow.potential }}\r\n                      </div>\r\n                      <div class=\"snBatch-date\" *ngIf=\"snBatchRow.storageDate\">\r\n                        {{ snBatchRow.storageDate }}\r\n                      </div>\r\n                    </div>\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n              <div class=\"message\" *ngIf=\"!warehouseTableSelection._select\">\r\n                <div *ngIf=\"materialTableSelection.isSn\">\r\n                  {{ componentData.componentId + \".selectWarehouseMessage\" | translate\r\n                  }}{{ componentData.componentId + \".sn\" | translate }}\r\n                </div>\r\n                <div *ngIf=\"!materialTableSelection.isSn\">\r\n                  {{ componentData.componentId + \".selectWarehouseMessage\" | translate\r\n                  }}{{ componentData.componentId + \".batch\" | translate }}\r\n                </div>\r\n              </div>\r\n              <div\r\n                *ngIf=\"\r\n                  materialTableSelection._select && warehouseTableSelection._select && (noSnWithPn || noBatchWithPn)\r\n                \"\r\n                class=\"message\"\r\n              >\r\n                <div *ngIf=\"noSnWithPn\">\r\n                  {{ componentData.componentId + \".noSnWithPn\" | translate }}\r\n                </div>\r\n                <div *ngIf=\"noBatchWithPn\">\r\n                  {{ componentData.componentId + \".noBatchWithPn\" | translate }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/material-availability/form/material-availability-form.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-availability/form/material-availability-form.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n:host .message {\n  color: #01579b;\n  font-size: 1rem;\n  text-align: center;\n  width: 100%; }\n\n:host .materials {\n  width: 100%; }\n\n:host .warehouse {\n  width: 100%; }\n\n:host .snBatch {\n  width: 100%; }\n\n:host .ok {\n  background-color: #4caf50 !important; }\n\n:host .warning {\n  background-color: #ffc107 !important; }\n\n:host .nok {\n  background-color: #f6685e !important; }\n\n:host .select-box .arrow::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-top: 1.5em solid transparent;\n  border-bottom: 1.5em solid transparent;\n  border-left: 0.7em solid #01579b;\n  right: -0.45em; }\n\n:host .breadcrumbs {\n  padding: 0px !important; }\n\n:host .breadcrumbs-container {\n  background-color: transparent !important;\n  border-color: transparent !important;\n  box-shadow: none !important;\n  padding: 8px 8px 0px 8px !important; }\n\n:host .breadcrumbs-navigation {\n  overflow: hidden;\n  display: flex; }\n\n:host .breadcrumbs-navigation li {\n  float: left;\n  margin: 0 10px 0 0px; }\n\n:host .breadcrumbs-navigation .current {\n  float: left;\n  margin: 0 25px 0 15px; }\n\n:host .breadcrumbs-navigation .breadcrumbs-labels {\n  background-color: #01579b;\n  padding: 0.7em 1em;\n  float: left;\n  text-decoration: none;\n  position: relative;\n  white-space: nowrap;\n  color: #fff;\n  font-size: 20px;\n  padding-bottom: 6px;\n  padding-top: 7px; }\n\n:host .breadcrumbs-navigation .breadcrumbs-labels .title {\n    font-weight: bold;\n    font-size: 20px; }\n\n:host .breadcrumbs-navigation .breadcrumbs-labels .subtitle {\n    font-weight: initial;\n    font-style: italic;\n    font-size: 15px; }\n\n:host .breadcrumbs-navigation .current .breadcrumbs-labels {\n  background: #01579b; }\n\n:host .breadcrumbs-navigation .current .breadcrumbs-labels .title {\n    font-weight: bold;\n    font-size: 20px; }\n\n:host .breadcrumbs-navigation .current .breadcrumbs-labels .subtitle {\n    font-weight: initial;\n    font-style: italic;\n    font-size: 15px; }\n\n:host .breadcrumbs-navigation .breadcrumbs-labels::before {\n  content: \"\";\n  position: absolute;\n  top: 49%;\n  margin-top: -1.5em;\n  border-width: 1.5em 0 1.6em 1em;\n  border-style: solid;\n  border-color: #ddd #ddd #ddd #ddd;\n  left: -1em; }\n\n:host .breadcrumbs-navigation .current .breadcrumbs-labels::before {\n  border-color: #01579b #01579b #01579b #01579b; }\n\n:host .breadcrumbs-navigation .breadcrumbs-labels::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  margin-top: -1.5em;\n  border-top: 1.5em solid transparent;\n  border-bottom: 1.5em solid transparent;\n  border-left: 1em solid #01579b;\n  right: -1em; }\n\n:host .breadcrumbs-navigation .current .breadcrumbs-labels::after {\n  border-left-color: #01579b; }\n\n:host .breadcrumbs-navigation .current .breadcrumbs-labels {\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  padding-bottom: 6px;\n  padding-top: 7px; }\n\n:host .breadcrumbs-navigation .current::after,\n:host .breadcrumbs-navigation .current::before {\n  content: normal; }\n\n:host .grid-cell-stock-select .table {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%; }\n\n:host .grid-cell-stock-select .table .material .material-pn {\n    width: 34%;\n    text-align: center; }\n\n:host .grid-cell-stock-select .table .material .interchangeability {\n    width: 33%;\n    text-align: center; }\n\n:host .grid-cell-stock-select .table .material .material-quantity {\n    width: 33%;\n    text-align: center; }\n\n:host .grid-cell-stock-select .table .warehouse .warehouse-name {\n    width: 37%;\n    text-align: center; }\n\n:host .grid-cell-stock-select .table .warehouse .warehouse-site {\n    width: 38%;\n    text-align: center; }\n\n:host .grid-cell-stock-select .table .warehouse .warehouse-quantity {\n    width: 25%;\n    text-align: center; }\n\n:host .grid-cell-stock-select .table .warehouse .warehouse-quantity.value {\n      font-weight: bold;\n      margin-top: 4px;\n      width: 100%; }\n\n:host .grid-cell-stock-select .table .snBatch .snBatch-sn {\n    width: 100%;\n    text-align: center; }\n\n:host .grid-cell-stock-select .table .snBatch .snBatch-batch {\n    width: 100%;\n    text-align: center; }\n\n:host .grid-cell-stock-select .table .snBatch .snBatch-potential {\n    width: 100%;\n    text-align: center; }\n\n:host .grid-cell-stock-select .table .snBatch .snBatch-date {\n    width: 100%;\n    text-align: center; }\n\n:host .grid-cell-stock-select .table .snBatch .snBatch-qty {\n    width: 10%;\n    text-align: center; }\n\n:host .grid-cell-stock-select .table .table-header {\n    background-color: #fff;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 40px;\n    z-index: 1; }\n\n:host .grid-cell-stock-select .table .table-header .table-row {\n      display: flex;\n      flex-direction: row;\n      border-bottom: 1px solid #595959;\n      max-height: 24px;\n      min-height: 24px; }\n\n:host .grid-cell-stock-select .table .table-body {\n    min-height: calc(8px * 5); }\n\n:host .grid-cell-stock-select .table .table-body .table-row {\n      display: flex;\n      flex-direction: row;\n      border-bottom: 1px solid #f0f0f0;\n      cursor: pointer;\n      padding: 8px 0;\n      justify-content: center; }\n\n:host .grid-cell-stock-select .table .table-body .table-row:hover {\n        background-color: #f0f0f0; }\n\n:host .grid-cell-stock-select .table .table-body .table-row.selected {\n        background-color: #b6deff;\n        border-bottom: 1px solid #b6deff;\n        border-top: 1px solid #b6deff; }\n\n:host .grid-cell-stock-select .table .table-body .table-row.selected.first {\n          border-top-width: 1px; }\n\n:host .grid-cell-stock-select .table .table-body .table-row .table-cell {\n        display: flex;\n        flex-direction: column; }\n\n:host .grid-cell-stock-select .table .table-body .table-row .table-cell .additional-data {\n          margin-top: 8px; }\n\n:host .grid-cell-stock-select .table .table-body .table-row .table-cell .label {\n          display: inline-block; }\n\n:host .grid-cell-stock-select .table .table-body .table-row .table-cell .value {\n          font-weight: bold; }\n\n:host .grid-cell-stock-select .table .table-body .table-row .table-cell a {\n          color: #01579b; }\n\n:host .grid-cell-stock-select .table .table-body .table-row .table-cell a:hover {\n            text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3MvbWF0ZXJpYWwtYXZhaWxhYmlsaXR5L2Zvcm0vRDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxmcm9udGVuZF9hZXJvd2ViYi9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxtYXRlcmlhbC1hdmFpbGFiaWxpdHlcXGZvcm1cXG1hdGVyaWFsLWF2YWlsYWJpbGl0eS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9tYXRlcmlhbC1hdmFpbGFiaWxpdHkvZm9ybS9EOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGZyb250ZW5kX2Flcm93ZWJiL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiLCJzcmMvYXBwL21haW4vbG9naXN0aWNzL21hdGVyaWFsLWF2YWlsYWJpbGl0eS9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUVJLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBSnBCO0VBUUksY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQVhmO0VBZUksV0FBVyxFQUFBOztBQWZmO0VBbUJJLFdBQVcsRUFBQTs7QUFuQmY7RUF1QkksV0FBVyxFQUFBOztBQXZCZjtFQTJCSSxvQ0FBMEMsRUFBQTs7QUEzQjlDO0VBK0JJLG9DQUFvQyxFQUFBOztBQS9CeEM7RUFtQ0ksb0NBQXdDLEVBQUE7O0FBbkM1QztFQXVDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0QyxnQ0FBZ0M7RUFDaEMsY0FBYyxFQUFBOztBQTlDbEI7RUFrREksdUJBQXVCLEVBQUE7O0FBbEQzQjtFQXNESSx3Q0FBd0M7RUFDeEMsb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQixtQ0FBbUMsRUFBQTs7QUF6RHZDO0VBNkRJLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7O0FBOURqQjtFQWtFSSxXQUFXO0VBQ1gsb0JBQW9CLEVBQUE7O0FBbkV4QjtFQXVFSSxXQUFXO0VBQ1gscUJBQXFCLEVBQUE7O0FBeEV6QjtFQTRFSSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFyRnBCO0lBd0ZNLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBekZyQjtJQTZGTSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUEvRnJCO0VBb0dJLG1CQ3JHa0IsRUFBQTs7QURDdEI7SUFzR00saUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTs7QUF2R3JCO0lBMkdNLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBOztBQTdHckI7RUFrSEksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLFVBQVUsRUFBQTs7QUF6SGQ7RUE2SEksNkNDOUhrQixFQUFBOztBREN0QjtFQWtJSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw4QkFBOEI7RUFDOUIsV0FBVyxFQUFBOztBQXpJZjtFQTZJSSwwQkM5SWtCLEVBQUE7O0FEQ3RCO0VBaUpJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFySnBCOztFQTBKSSxlQUFlLEVBQUE7O0FBMUpuQjtFRWFFLGFBQWE7RUFDYixzQkFBc0I7RUZtSmxCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBbEtqQjtJQXNLVSxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7O0FBdks1QjtJQTJLVSxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7O0FBNUs1QjtJQWdMVSxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7O0FBakw1QjtJQXVMVSxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7O0FBeEw1QjtJQTRMVSxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7O0FBN0w1QjtJQWlNVSxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7O0FBbE01QjtNQXFNWSxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLFdBQVcsRUFBQTs7QUF2TXZCO0lBOE1VLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTs7QUEvTTVCO0lBbU5VLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTs7QUFwTjVCO0lBd05VLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTs7QUF6TjVCO0lBNk5VLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTs7QUE5TjVCO0lBa09VLFVBQVU7SUFDVixrQkFBa0IsRUFBQTs7QUFuTzVCO0lBd09RLHNCQzdPdUI7SUQ4T3ZCLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsU0N2TFk7SUR3TFosVUFBVSxFQUFBOztBQTNPbEI7TUVrQkUsYUFBYTtNQUNiLG1CQUFtQjtNRjZOWCxnQ0NsUG9CO01EbVBwQixnQkFuUGdCO01Bb1BoQixnQkFwUGdCLEVBQUE7O0FBRTFCO0lBdVBRLHlCQUFzQyxFQUFBOztBQXZQOUM7TUVrQkUsYUFBYTtNQUNiLG1CQUFtQjtNRnlPWCxnQ0NoUTBCO01EaVExQixlQUFlO01BQ2YsY0FBd0I7TUFDeEIsdUJBQXVCLEVBQUE7O0FBL1BqQztRQWtRWSx5QkN0UXdCLEVBQUE7O0FESXBDO1FBc1FZLHlCQUF5QjtRQUN6QixnQ0FBZ0M7UUFDaEMsNkJBQTZCLEVBQUE7O0FBeFF6QztVQTJRYyxxQkN6T0ksRUFBQTs7QURsQ2xCO1FFYUUsYUFBYTtRQUNiLHNCQUFzQixFQUFBOztBRmR4QjtVQW1SYyxlQzVPSSxFQUFBOztBRHZDbEI7VUF1UmMscUJBQXFCLEVBQUE7O0FBdlJuQztVQTJSYyxpQkFBaUIsRUFBQTs7QUEzUi9CO1VBK1JjLGNDaFNRLEVBQUE7O0FEQ3RCO1lBa1NnQiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL21hdGVyaWFsLWF2YWlsYWJpbGl0eS9mb3JtL21hdGVyaWFsLWF2YWlsYWJpbGl0eS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcblxyXG4kdGFibGUtaGVhZGVyLWhlaWdodDogMjRweDtcclxuXHJcbjpob3N0IHtcclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5tZXNzYWdlIHtcclxuICAgIGNvbG9yOiAjMDE1NzliO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubWF0ZXJpYWxzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLndhcmVob3VzZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zbkJhdGNoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC53YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5ub2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zZWxlY3QtYm94IC5hcnJvdzo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEuNWVtO1xyXG4gICAgYm9yZGVyLXRvcDogMS41ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxLjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAwLjdlbSBzb2xpZCAjMDE1NzliO1xyXG4gICAgcmlnaHQ6IC0wLjQ1ZW07XHJcbiAgfVxyXG5cclxuICAuYnJlYWRjcnVtYnMge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnJlYWRjcnVtYnMtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDBweCA4cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5icmVhZGNydW1icy1uYXZpZ2F0aW9uIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgLmJyZWFkY3J1bWJzLW5hdmlnYXRpb24gbGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW46IDAgMTBweCAwIDBweDtcclxuICB9XHJcblxyXG4gIC5icmVhZGNydW1icy1uYXZpZ2F0aW9uIC5jdXJyZW50IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIDI1cHggMCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJyZWFkY3J1bWJzLW5hdmlnYXRpb24gLmJyZWFkY3J1bWJzLWxhYmVscyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE1NzliO1xyXG4gICAgcGFkZGluZzogMC43ZW0gMWVtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5icmVhZGNydW1icy1uYXZpZ2F0aW9uIC5jdXJyZW50IC5icmVhZGNydW1icy1sYWJlbHMge1xyXG4gICAgYmFja2dyb3VuZDogJGFjY2VudC1jb2xvcjtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YnRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBhcnJvd1xyXG4gIC5icmVhZGNydW1icy1uYXZpZ2F0aW9uIC5icmVhZGNydW1icy1sYWJlbHM6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0OSU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMS41ZW07XHJcbiAgICBib3JkZXItd2lkdGg6IDEuNWVtIDAgMS42ZW0gMWVtO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2RkZCAjZGRkICNkZGQgI2RkZDtcclxuICAgIGxlZnQ6IC0xZW07XHJcbiAgfVxyXG5cclxuICAuYnJlYWRjcnVtYnMtbmF2aWdhdGlvbiAuY3VycmVudCAuYnJlYWRjcnVtYnMtbGFiZWxzOjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yICRhY2NlbnQtY29sb3IgJGFjY2VudC1jb2xvciAkYWNjZW50LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLy9hcnJvd1xyXG4gIC5icmVhZGNydW1icy1uYXZpZ2F0aW9uIC5icmVhZGNydW1icy1sYWJlbHM6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xLjVlbTtcclxuICAgIGJvcmRlci10b3A6IDEuNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMS41ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMWVtIHNvbGlkICMwMTU3OWI7XHJcbiAgICByaWdodDogLTFlbTtcclxuICB9XHJcblxyXG4gIC5icmVhZGNydW1icy1uYXZpZ2F0aW9uIC5jdXJyZW50IC5icmVhZGNydW1icy1sYWJlbHM6OmFmdGVyIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLmJyZWFkY3J1bWJzLW5hdmlnYXRpb24gLmN1cnJlbnQgLmJyZWFkY3J1bWJzLWxhYmVscyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gIH1cclxuXHJcbiAgLmJyZWFkY3J1bWJzLW5hdmlnYXRpb24gLmN1cnJlbnQ6OmFmdGVyLFxyXG4gIC5icmVhZGNydW1icy1uYXZpZ2F0aW9uIC5jdXJyZW50OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgLmdyaWQtY2VsbC1zdG9jay1zZWxlY3Qge1xyXG4gICAgLnRhYmxlIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bW4oKTtcclxuXHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAubWF0ZXJpYWwge1xyXG4gICAgICAgIC5tYXRlcmlhbC1wbiB7XHJcbiAgICAgICAgICB3aWR0aDogMzQlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmludGVyY2hhbmdlYWJpbGl0eSB7XHJcbiAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdGVyaWFsLXF1YW50aXR5IHtcclxuICAgICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAud2FyZWhvdXNlIHtcclxuICAgICAgICAud2FyZWhvdXNlLW5hbWUge1xyXG4gICAgICAgICAgd2lkdGg6IDM3JTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53YXJlaG91c2Utc2l0ZSB7XHJcbiAgICAgICAgICB3aWR0aDogMzglO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndhcmVob3VzZS1xdWFudGl0eSB7XHJcbiAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICYudmFsdWUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zbkJhdGNoIHtcclxuICAgICAgICAuc25CYXRjaC1zbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbkJhdGNoLWJhdGNoIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNuQmF0Y2gtcG90ZW50aWFsIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNuQmF0Y2gtZGF0ZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbkJhdGNoLXF0eSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHRvcDogJHRvcGJhci1oZWlnaHQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgLnRhYmxlLXJvdyB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgIGJvcmRlci1ib3R0b206ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogJHRhYmxlLWhlYWRlci1oZWlnaHQ7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAkdGFibGUtaGVhZGVyLWhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YWJsZS1ib2R5IHtcclxuICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiA1KTtcclxuXHJcbiAgICAgICAgLnRhYmxlLXJvdyB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgICAgIGJvcmRlci1ib3R0b206ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlIDA7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkZWZmO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I2ZGVmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiNmRlZmY7XHJcblxyXG4gICAgICAgICAgICAmLmZpcnN0IHtcclxuICAgICAgICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhYmxlLWNlbGwge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG5cclxuICAgICAgICAgICAgLmFkZGl0aW9uYWwtZGF0YSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogJG1hcmdpbi12YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4kc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogIzU5NTk1OTtcclxuJGFjY2VudC1jb2xvcjogIzAxNTc5YjtcclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNlOGViZWQ7XHJcbiR0b3BiYXItY29sb3I6ICNmYWZhZmE7XHJcblxyXG4vLyAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xyXG4vLyAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbi8vICRwcmltYXJ5LXRleHQtY29sb3I6ICNlOGU4ZTg7XHJcbi8vICRzZWNvbmRhcnktdGV4dC1jb2xvcjogI2ZmZjtcclxuLy8gJGFjY2VudC1jb2xvcjogIzljZGNmZTtcclxuXHJcbiRib3JkZXItY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ6IHRyYW5zcGFyZW50O1xyXG4kYm9yZGVyLWNvbG9yLS1mb2N1czogJGFjY2VudC1jb2xvcjtcclxuJGJvcmRlci1jb2xvci0taG92ZXI6ICMxYTFhMWE7XHJcblxyXG4kZ3JlZW4tZGFyazE6ICMyNzYzMmE7XHJcbiRncmVlbi1saWdodDE6ICM0Y2FmNTA7XHJcbiRvcmFuZ2U6ICNmZmMxMDc7XHJcbiRyZWQtZGFyazE6ICNhODI1MjU7XHJcbiRyZWQtbGlnaHQxOiAjZjY2ODVlO1xyXG4kYmx1ZS1saWdodDE6ICNiOGQwZTg7XHJcbiRibHVlLWRhcmsxOiAjMDA2ZWE5O1xyXG4kZ3JleTE6ICNjOGQ0ZDY7XHJcbiR5ZWxsb3cxOiAjZGRkZjAwO1xyXG5cclxuJGNyaXRpY2FsLXZhbHVlLWRhcms6ICNmYmE2NDM7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY3JpdGljYWwtdmFsdWUtbGlnaHQ6ICNmZWNjOGU7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kY2FsZW5kYXIteWVsbG93OiAjZWZlZmIwOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGJhZC12YWx1ZS1kYXJrOiAjZmY2NzU4OyAvLyBUT0RPOiByZW1vdmUgaXRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcbiRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4kYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRmb250LWZhbWlseTogXCJMYXRvTGF0aW5XZWJcIjtcclxuJGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiRmb250LXdlaWdodDogNDAwO1xyXG4kbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4kbWFyZ2luLXZhbHVlOiA4cHg7XHJcbiRwYWdlLW1heC13aWR0aDogMTM2NnB4O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtNDogNDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTM6IDM7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0yOiAyO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGxlZnQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRyaWdodC1zaWRlYmFyLXdpZHRoLS1leHBhbmRlZDogMjIwcHg7XHJcbiR0b3BiYXItaGVpZ2h0OiA0MHB4O1xyXG4kbWFpbmJhci1ib3JkZXItY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuJG1haW5iYXItYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRwYWdlLWhlYWRlci1oZWlnaHQ6IDUuNXJlbTtcclxuJGZvcm0tY29udHJvbC1oZWlnaHQ6IDIuNXJlbTtcclxuJGNoZWNrYm94LWhlaWdodDogMS4yNXJlbTtcclxuJHJhZGlvYnV0dG9uLWhlaWdodDogMS4yNXJlbTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBVdGlscyAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5AbWl4aW4gYnV0dG9uLWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCAkY29sb3IsICRib3JkZXItY29sb3I6IG51bGwpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yO1xyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyLFxyXG4gICY6bm90KDpkaXNhYmxlZCkuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIGJvcmRlci1jb2xvcjogaWYoJGJvcmRlci1jb2xvciA9PSBudWxsLCAkY29sb3IsICRib3JkZXItY29sb3IpO1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZsZXgtY29sdW1uKCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1peGluIGZsZXgtcm93KCkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuQG1peGluIGlucHV0KCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcblxyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1kaXNhYmxlZCgpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZm9jdXMoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dC1ob3ZlcigpIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxufVxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHNlYXJjaC1jcml0ZXJpYS1jb250YWluZXIge1xyXG4gIC5hZHZhbmNlZC1jcml0ZXJpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNyaXRlcmlhLWZvb3RlciB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXItbW9yZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLWxlc3MsXHJcbiAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYygjeyRtYXJnaW4tdmFsdWV9IC8gMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgLmF3LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogNCk7XHJcblxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG5cclxuICAgICYucmVxdWlyZWQge1xyXG4gICAgICBAaW5jbHVkZSBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCgpO1xyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW1uKCk7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAmID4gYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1vdmVyZmxvdy1oaWRkZW4ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBHcmlkIGZvcm0gY29udHJvbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGdyaWQtZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViTWVkaXVtXCI7XHJcblxyXG4gICYgPiBpbnB1dCArIHAtbWVzc2FnZSA+IC51aS1tZXNzYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1hY3Rpb25zIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgJiA+IC5mb3JtLWNvbnRyb2wtYWN0aW9ucyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigyNTUsIDI1NSwgMjU1KSA2MCUsIHRyYW5zcGFyZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcblxyXG4gICAgICAuYXctaWNvbiB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuLFxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6ICRib3JkZXItc3R5bGU7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5mb3JtLWNvbnRyb2wtd2l0aC1idG4ge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNzVyZW0pO1xyXG5cclxuICAgICAgJi5hdy1jYWxlbmRhciAudWktaW5wdXR0ZXh0LFxyXG4gICAgICAmLmF3LWRyb3Bkb3duIC51aS1kcm9wZG93bixcclxuICAgICAgJi5hdy1pbnB1dCxcclxuICAgICAgJi5hdy10ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctY2FsZW5kYXIge1xyXG4gICAgICAvLyBGSVhNRTogZml4IGFuIFVJIGlzc3VlIG9uIFByaW1lTkcgY2FsZW5kYXIgY29tcG9uZW50OyB0byByZW1vdmUgd2hlbiBpc3N1ZSB3aWxsIGJlIGZpeGVkIHVwc3RyZWFtXHJcbiAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAuYXctaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtbW9kYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAuYXctaWNvbjpub3QoLnJlYWQtb25seS1saW5rKSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IC8vIG5vbmVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wtZGF0YSB7XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xyXG4gICAgICBwYWRkaW5nOiAycHggMCA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW5pbXAsXHJcbiAgICAuYnRuLWV4dGVybmFsLWxpbmstd3JhcHBlcixcclxuICAgIC5idG4tY2xlYXItd3JhcHBlcixcclxuICAgIC5idG4tZmlsZS11cGxvYWQtd3JhcHBlcixcclxuICAgIC5idG4tc2VhcmNoLXdyYXBwZXIge1xyXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIge1xyXG4gICAgICAuYXctZmlsZXVwbG9hZCB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudWktYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVpLWJ1dHRvbi1pY29uLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgICAgICB3aWR0aDogMS4xcmVtO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBcIlxcZTkzNFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF3LWljb24ge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICAgICAgJjpmb2N1cyxcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLWNsZWFyIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYnRuLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtcmFkaW9idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAmID4gLmF3LXJhZGlvYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDIgKiAjeyRtYXJnaW4tdmFsdWV9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1nZW5lcmljIHtcclxuICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuXHJcbiAgJiA+IGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG5cclxuICAgICYuYWxlcnQtLW5vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICRyZWQtZGFyazE7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jYWxlbmRhciB7XHJcbiAgJi51aS1pbnB1dHdyYXBwZXItZm9jdXMge1xyXG4gICAgLnVpLWNhbGVuZGFyIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC51aS1pbnB1dHRleHQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkY2hlY2tib3gtaGVpZ2h0O1xyXG4gIHdpZHRoOiAkY2hlY2tib3gtaGVpZ2h0O1xyXG5cclxuICAudWktY2hrYm94IHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1jaGtib3gtYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi51aS1zdGF0ZS1kaXNhYmxlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZHJvcGRvd24ge1xyXG4gIC51aS1kcm9wZG93biB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1mb2N1cyB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tY2xlYXItaWNvbixcclxuICAgIC51aS1kcm9wZG93bi10cmlnZ2VyIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24ge1xyXG4gICAgICByaWdodDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgIEBpbmNsdWRlIHRleHQtb3ZlcmZsb3ctaGlkZGVuKCk7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMiAqIDEuNzVyZW0pO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5maXhlZC13aWR0aCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWZpbGV1cGxvYWQge1xyXG4gIEBleHRlbmQgLmF3LWJ0bjtcclxuXHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLnVpLWZpbGV1cGxvYWQtY2hvb3NlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMCAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudWktYnV0dG9uLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWlucHV0KCkge1xyXG4gIEBpbmNsdWRlIGlucHV0KCk7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWRpc2FibGVkKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAmOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LWhvdmVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC10ZXh0YXJlYSB7XHJcbiAgQGluY2x1ZGUgZ3JpZC1pbnB1dCgpO1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAkZm9ybS1jb250cm9sLWhlaWdodDtcclxuICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1yYWRpb2J1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuICB3aWR0aDogJHJhZGlvYnV0dG9uLWhlaWdodDtcclxuXHJcbiAgLnVpLXJhZGlvYnV0dG9uIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAgIC51aS1yYWRpb2J1dHRvbi1ib3gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cclxuICAgICAgICAudWktcmFkaW9idXR0b24taWNvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGNhbGVuZGFyLXBhbmVsIHtcclxuICAudWktZGF0ZXBpY2tlcjpub3QoLnVpLWRhdGVwaWNrZXItaW5saW5lKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBkcm9wZG93bi1wYW5lbCB7XHJcbiAgLnVpLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuXHJcbiAgICAudWktZHJvcGRvd24taXRlbXMtd3JhcHBlciAudWktZHJvcGRvd24tbGlzdCB7XHJcbiAgICAgIC51aS1kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi51aS1zdGF0ZS1oaWdobGlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/logistics/material-availability/form/material-availability-form.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-availability/form/material-availability-form.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: MaterialAvailabilityFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialAvailabilityFormComponent", function() { return MaterialAvailabilityFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/constants/control-config-constants */ "./src/app/shared/constants/control-config-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_component_communication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/component-communication.service */ "./src/app/shared/services/component-communication.service.ts");
/* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/utils/number-utils */ "./src/app/shared/utils/number-utils.ts");
/* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/utils/object-utils */ "./src/app/shared/utils/object-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _material_availability_form_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./material-availability-form.service */ "./src/app/main/logistics/material-availability/form/material-availability-form.service.ts");
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





















var MaterialAvailabilityFormComponent = /** @class */ (function (_super) {
    __extends(MaterialAvailabilityFormComponent, _super);
    function MaterialAvailabilityFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, translateService, materialAvailabilityFormService, componentCommunicationService, dateService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.translateService = translateService;
        _this.materialAvailabilityFormService = materialAvailabilityFormService;
        _this.componentCommunicationService = componentCommunicationService;
        _this.dateService = dateService;
        _this.materialFirstInit = true;
        _this.warehouseFirstInit = true;
        _this.snBatchFirstInit = true;
        _this.isSaving = false;
        _this.aWPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"];
        _this.init();
        return _this;
    }
    MaterialAvailabilityFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].LOG_MATERIAL_AVAILABILITY_FORM;
    };
    MaterialAvailabilityFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (this.componentData.objectId) {
            this.goodMvtOutput = this.serializationService.deserialize(this.componentData.objectId);
            if (this.goodMvtOutput.data.stockMvt.id) {
                this.stockRowInputId = this.goodMvtOutput.data.stockMvt.id;
            }
            this.materialAvailabilityFormService.getStockMvtById(this.stockRowInputId).subscribe(function (stockMvt) {
                _this.stockRowInput = {
                    bidtStockMvtDTO: stockMvt
                };
                if (_this.stockRowInput.bidtStockMvtDTO.bidmWorkOrderProjectId) {
                    _this.materialAvailabilityFormService
                        .findBidmProjectById(_this.stockRowInput.bidtStockMvtDTO.bidmWorkOrderProjectId)
                        .subscribe(function (project) {
                        _this.workPackage = project;
                        _this.materialAvailabilityFormService.findAllSite().subscribe(function (siteList) {
                            siteList.forEach(function (site) {
                                if (site.siteCode === _this.goodMvtOutput.data.repairCenterCode &&
                                    site.siteName === _this.goodMvtOutput.data.repairCenter) {
                                    _this.mroCenter = site;
                                }
                            });
                            _this.createBreadcrumbsList();
                            _this.initMaterialTable();
                        });
                        _this.translateService.get(_this.getTranslateKey('workPackage')).subscribe(function (translation) {
                            _this.subTitle = (translation || 'Work Package') + " n\u00B0" + _this.workPackage.projectNumber;
                            _this.displayComponentContext(_this.subTitle, false);
                        });
                    });
                }
                else {
                    _this.createBreadcrumbsList();
                    _this.initMaterialTable();
                }
            });
        }
    };
    MaterialAvailabilityFormComponent.prototype.refresh = function () {
        this.init();
        this.createBreadcrumbsList();
        this.initMaterialTable();
    };
    MaterialAvailabilityFormComponent.prototype.init = function () {
        this.breadcrumbs = {};
        this.materialTableSelection = { _select: false };
        this.warehouseTableSelection = { _select: false };
        this.snBatchTableSelection = { _select: false };
        this.materailTableIsLoading = false;
        this.warehouseTableIsLoading = false;
        this.snBatechTableIsLoading = false;
        this.noPnInWarehouse = false;
        this.noSnWithPn = false;
        this.noBatchWithPn = false;
        this.materialFirstInit = true;
        this.warehouseFirstInit = true;
        this.snBatchFirstInit = true;
    };
    MaterialAvailabilityFormComponent.prototype.cancel = function () {
        this.closeComponent();
    };
    MaterialAvailabilityFormComponent.prototype.createBreadcrumbsList = function () {
        var _this = this;
        this.breadcrumbsList = [];
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([this.translateService.get(this.getTranslateKey('selectStock'))]).subscribe({
            next: function (_a) {
                var _b = __read(_a, 1), translation = _b[0];
                if (_this.stockRowInput.bidtStockMvtDTO.bidmWorkOrderProjectId &&
                    _this.stockRowInput.bidtStockMvtDTO.bidmWorkOrderWoId) {
                    var woDtoId = {
                        projectId: _this.stockRowInput.bidtStockMvtDTO.bidmWorkOrderProjectId,
                        woId: _this.stockRowInput.bidtStockMvtDTO.bidmWorkOrderWoId
                    };
                    _this.materialAvailabilityFormService.findBidmWorkOrder(woDtoId).subscribe(function (workOrder) {
                        _this.breadcrumbs.subtittle = workOrder.woCode + " - " + _this.goodMvtOutput.data.product.articleDesignation;
                        _this.breadcrumbsList.push(_this.breadcrumbs);
                    });
                }
                _this.breadcrumbs.tittle = translation;
            }
        });
    };
    MaterialAvailabilityFormComponent.prototype.initMaterialTable = function () {
        var _this = this;
        this.materialTable = [];
        var product = {
            pnCode: this.stockRowInput.bidtStockMvtDTO.birePnPnCode
        };
        this.materialAvailabilityFormService.getMaterialDetails(product).subscribe(function (result) {
            if (result.birePnDTO.pnCode) {
                var materialInput = {
                    pnCode: result.birePnDTO.pnCode,
                    interchangeability: undefined,
                    isSn: result.birePnDTO.traceability === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PN_TRACEABILITY_BY_BATCH ? false : true,
                    _select: false
                };
                _this.materialTable.push(materialInput);
                result.bidtPnAlternativeDTOs.forEach(function (alternative) {
                    if (alternative.birePnByFkBidtPnBidtPn2BirePnPnCode) {
                        if (alternative.birePnByFkBidtPnBidtPn2BirePnPnCode === result.birePnDTO.pnCode) {
                            if (alternative.birePnByFkBidtPnBidtPn1BirePnPnCode) {
                                var productAlt1 = {
                                    pnCode: alternative.birePnByFkBidtPnBidtPn1BirePnPnCode
                                };
                                var materialAlt1_1 = {
                                    pnCode: alternative.birePnByFkBidtPnBidtPn1BirePnPnCode,
                                    interchangeability: alternative.nameOfInterchangebilty,
                                    _select: false
                                };
                                _this.materialTable.push(materialAlt1_1);
                                _this.materialAvailabilityFormService.getMaterialDetails(productAlt1).subscribe(function (altResult) {
                                    materialAlt1_1.isSn =
                                        altResult.birePnDTO.traceability === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PN_TRACEABILITY_BY_BATCH ? false : true;
                                });
                            }
                        }
                        else {
                            var productAlt2 = {
                                pnCode: alternative.birePnByFkBidtPnBidtPn2BirePnPnCode
                            };
                            var materialAlt2_1 = {
                                pnCode: alternative.birePnByFkBidtPnBidtPn2BirePnPnCode,
                                interchangeability: alternative.nameOfInterchangebilty,
                                _select: false
                            };
                            _this.materialTable.push(materialAlt2_1);
                            _this.materialAvailabilityFormService.getMaterialDetails(productAlt2).subscribe(function (altResult2) {
                                materialAlt2_1.isSn =
                                    altResult2.birePnDTO.traceability === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].PN_TRACEABILITY_BY_BATCH ? false : true;
                            });
                        }
                    }
                });
                _this.materialTable.forEach(function (material) {
                    if (material.pnCode) {
                        if (_this.goodMvtOutput.data.stockMvt.birePnPnCode &&
                            _this.goodMvtOutput.data.stockMvt.birePnPnCode === material.pnCode &&
                            _this.materialFirstInit) {
                            _this.toggleMaterialVisibility(material, true);
                            _this.materialFirstInit = false;
                        }
                        var birePnDTOIdInput = {
                            pnCode: material.pnCode
                        };
                        var dateInput = new Date();
                        if (_this.stockRowInput.bidtStockMvtDTO.stockMvtDate) {
                            dateInput = new Date(_this.stockRowInput.bidtStockMvtDTO.stockMvtDate);
                        }
                        var getQuantityInAllStocksInput = {
                            birePnDTOId: birePnDTOIdInput,
                            site: _this.mroCenter,
                            quantity: Number(_this.stockRowInput.bidtStockMvtDTO.stockMvtQuantity),
                            date: _this.stockRowInput.bidtStockMvtDTO.stockMvtDate,
                            basedOnExecutedMovements: dateInput.getTime() <=
                                moment__WEBPACK_IMPORTED_MODULE_2__()
                                    .toDate()
                                    .getTime()
                        };
                        _this.materialAvailabilityFormService
                            .getQuantityInStockBySite(getQuantityInAllStocksInput)
                            .subscribe(function (availableQuantity) {
                            material.availableQuantity = availableQuantity.quantity;
                        });
                    }
                });
            }
        });
    };
    MaterialAvailabilityFormComponent.prototype.initWarehousesTable = function (sort) {
        var _this = this;
        this.noPnInWarehouse = false;
        this.warehouseFirstInit = true;
        if (!this.warehouseTableIsLoading) {
            this.warehouseTableIsLoading = true;
            this.warehouseTable = [];
            if (this.materialTableSelection && this.materialTableSelection.pnCode) {
                this.materialAvailabilityFormService
                    .findWarehouseByProduct(this.materialTableSelection.pnCode)
                    .subscribe(function (result) {
                    if (result.length > 0) {
                        result.forEach(function (warehouse) {
                            if (warehouse.wareHouseId &&
                                _this.materialTableSelection &&
                                _this.materialTableSelection.pnCode &&
                                _this.mroCenter) {
                                if (warehouse.bidtSiteId && _this.mroCenter.siteId && warehouse.bidtSiteId === _this.mroCenter.siteId) {
                                    var warehouseDto = {
                                        bidtWarehouseDTO: warehouse,
                                        site: _this.mroCenter,
                                        _select: false
                                    };
                                    _this.warehouseTable.push(warehouseDto);
                                }
                            }
                            else if (!_this.mroCenter && warehouse.wareHouseId) {
                                var warehouseDto = {
                                    bidtWarehouseDTO: warehouse,
                                    site: undefined,
                                    _select: false
                                };
                                _this.warehouseTable.push(warehouseDto);
                            }
                        });
                    }
                    if (result.length === 0 || _this.warehouseTable.length === 0) {
                        _this.noPnInWarehouse = true;
                        if (_this.materialTableSelection) {
                            _this.materialTableSelection._select = true;
                            _this.warehouseTableIsLoading = false;
                        }
                    }
                    _this.warehouseTable.forEach(function (warehouse) {
                        if (warehouse.bidtWarehouseDTO && warehouse.bidtWarehouseDTO.bidtSiteId) {
                            _this.materialAvailabilityFormService
                                .getSiteById(warehouse.bidtWarehouseDTO.bidtSiteId)
                                .subscribe(function (siteResult) {
                                warehouse.site = siteResult;
                                if (warehouse.bidtWarehouseDTO &&
                                    warehouse.bidtWarehouseDTO.wareHouseId &&
                                    _this.stockRowInput.bidtStockMvtDTO.birePnPnCode) {
                                    if (_this.goodMvtOutput.data.stockMvt.bidtWarehouseId &&
                                        _this.goodMvtOutput.data.stockMvt.bidtWarehouseId === warehouse.bidtWarehouseDTO.wareHouseId &&
                                        _this.warehouseFirstInit) {
                                        _this.toggleWarehouseVisibility(warehouse);
                                        _this.warehouseFirstInit = false;
                                    }
                                    var input = {
                                        warehouseId: warehouse.bidtWarehouseDTO.wareHouseId,
                                        pnCode: _this.stockRowInput.bidtStockMvtDTO.birePnPnCode
                                    };
                                    _this.materialAvailabilityFormService.findByWarehouseIdAndProductCode(input).subscribe(function (stock) {
                                        warehouse.product = stock;
                                    });
                                    if (_this.stockRowInput.bidtStockMvtDTO.birePnPnCode && warehouse.bidtWarehouseDTO) {
                                        var pnDtoId = {
                                            pnCode: _this.stockRowInput.bidtStockMvtDTO.birePnPnCode
                                        };
                                        var dateInput = new Date();
                                        if (_this.stockRowInput.bidtStockMvtDTO.stockMvtDate) {
                                            dateInput = new Date(_this.stockRowInput.bidtStockMvtDTO.stockMvtDate);
                                        }
                                        var inputQuantity = {
                                            birePnDTOId: pnDtoId,
                                            warehouseId: warehouse.bidtWarehouseDTO.wareHouseId,
                                            date: _this.stockRowInput.bidtStockMvtDTO.stockMvtDate,
                                            basedOnExecutedMovements: dateInput.getTime() <=
                                                moment__WEBPACK_IMPORTED_MODULE_2__()
                                                    .toDate()
                                                    .getTime()
                                        };
                                        _this.materialAvailabilityFormService.getQuantityInStock(inputQuantity).subscribe(function (quantity) {
                                            if (quantity < Number(_this.stockRowInput.bidtStockMvtDTO.stockMvtQuantity)) {
                                                warehouse.status = _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__["ControlConfigConstants"].ICON_RED_LIGHT_CODE;
                                                warehouse.quantity = quantity;
                                            }
                                            else if (warehouse.product &&
                                                warehouse.product.whPrLowThreshold &&
                                                quantity < warehouse.product.whPrLowThreshold) {
                                                warehouse.status = _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__["ControlConfigConstants"].ICON_YELLOW_LIGHT_CODE;
                                                warehouse.quantity = quantity;
                                            }
                                            else {
                                                warehouse.status = _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__["ControlConfigConstants"].ICON_GREEN_LIGHT_CODE;
                                                warehouse.quantity = quantity;
                                            }
                                        });
                                    }
                                    if (_this.materialTableSelection) {
                                        _this.materialTableSelection._select = true;
                                        _this.warehouseTableIsLoading = false;
                                        if (sort) {
                                            _this.sortMaterialTable();
                                        }
                                    }
                                }
                            });
                        }
                    });
                });
            }
        }
    };
    MaterialAvailabilityFormComponent.prototype.sortMaterialTable = function () {
        this.materialTable.sort(function (a, b) {
            if (a.pnCode !== undefined && b.pnCode !== undefined) {
                var boll = +b._select - +a._select || a.pnCode.localeCompare(b.pnCode);
                return boll;
            }
            else {
                return 0;
            }
        });
    };
    MaterialAvailabilityFormComponent.prototype.initSnBatch = function () {
        var _this = this;
        this.noSnWithPn = false;
        this.noBatchWithPn = false;
        this.snBatchFirstInit = true;
        if (!this.snBatechTableIsLoading) {
            this.snBatechTableIsLoading = true;
            this.snBatchTable = [];
            if (this.warehouseTableSelection &&
                this.warehouseTableSelection.site &&
                this.warehouseTableSelection.bidtWarehouseDTO) {
                var siteId_1 = this.warehouseTableSelection.site.siteId;
                var input = {
                    issuePeriod: undefined,
                    siteId: siteId_1,
                    warehouseId: this.warehouseTableSelection.bidtWarehouseDTO.wareHouseId,
                    pn: this.stockRowInput.bidtStockMvtDTO.birePnPnCode,
                    withItsAlternatives: false
                };
                this.materialAvailabilityFormService.findStockInformationListByCriteria(input).subscribe({
                    next: function (results) {
                        if (results.length !== 0) {
                            _this.stockRowInput.stockInformationTable = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__["ListUtils"].orEmpty(results).map(function (result) {
                                return _this.createStockInformationRow(result, _this.stockRowInput.bidtStockMvtDTO);
                            });
                            _this.stockRowInput.stockInformationTable.forEach(function (stock) {
                                var stockRow = {
                                    stockInformationRow: stock,
                                    _select: false,
                                    storageDate: stock._obj.stockReceiptDate
                                        ? _this.dateService.dateWithHourMinSecToString(stock._obj.stockReceiptDate)
                                        : undefined
                                };
                                if (stockRow.stockInformationRow) {
                                    if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(stockRow.stockInformationRow._obj.stockSn) &&
                                        _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(stockRow.stockInformationRow._obj.stockIssueQuantity)) {
                                        stockRow.stockInformationRow.isSnAlreadySelected = true;
                                    }
                                    if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(stockRow.stockInformationRow._obj.stockBatchNumber) &&
                                        _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(stockRow.stockInformationRow._obj.stockIssueQuantity)) {
                                        stockRow.stockInformationRow.isBatchAlreadySelected = true;
                                    }
                                    if ((_this.goodMvtOutput.data.stockMvt.stockMvtSn &&
                                        _this.goodMvtOutput.data.stockMvt.stockMvtSn === stockRow.stockInformationRow._obj.stockSn) ||
                                        (_this.goodMvtOutput.data.stockMvt.stockMvtBatchNumber &&
                                            _this.goodMvtOutput.data.stockMvt.stockMvtBatchNumber ===
                                                stockRow.stockInformationRow._obj.stockBatchNumber)) {
                                        stockRow.stockInformationRow.isSnAlreadySelected = false;
                                        stockRow.stockInformationRow.isBatchAlreadySelected = false;
                                        if (_this.snBatchFirstInit) {
                                            _this.toggleSnBatchVisibility(stockRow);
                                            _this.snBatchFirstInit = false;
                                        }
                                    }
                                }
                                _this.snBatchTable.push(stockRow);
                            });
                            _this.loadPotentialList(_this.stockRowInput, siteId_1);
                        }
                        else {
                            if (_this.materialTableSelection.isSn) {
                                _this.noSnWithPn = true;
                            }
                            else {
                                _this.noBatchWithPn = true;
                            }
                        }
                    },
                    complete: function () {
                        if (_this.warehouseTableSelection) {
                            _this.warehouseTableSelection._select = true;
                            _this.snBatechTableIsLoading = false;
                        }
                    }
                });
            }
        }
    };
    MaterialAvailabilityFormComponent.prototype.loadPotentialList = function (stockMvtRow, siteId) {
        var _this = this;
        if (stockMvtRow.bidtStockMvtDTO.birePnPnCode) {
            var pnId = {
                pnCode: stockMvtRow.bidtStockMvtDTO.birePnPnCode
            };
            var potentialListInput = {
                birePnDTOId: pnId,
                mvtDate: stockMvtRow.bidtStockMvtDTO.stockMvtDate,
                mvtId: stockMvtRow.bidtStockMvtDTO.id,
                siteId: siteId,
                stockStatusCode: stockMvtRow.bidtStockMvtDTO.stockStatus,
                stockTypeId: stockMvtRow.bidtStockMvtDTO.bidtStockTypeId,
                stockValuationId: stockMvtRow.bidtStockMvtDTO.bidtValuationGroupId,
                storageBinId: stockMvtRow.bidtStockMvtDTO.bidtStorageBinId,
                warehouseId: stockMvtRow.bidtStockMvtDTO.bidtWarehouseId,
                withPnAlternatives: false
            };
            this.materialAvailabilityFormService.findPotentialListByStockMvt(potentialListInput).subscribe({
                next: function (results) {
                    var potentialList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__["ListUtils"].orEmpty(results);
                    if (_this.stockRowInput.stockInformationTable) {
                        _this.stockRowInput.stockInformationTable.forEach(function (stockInformationRow) {
                            var matchingPotential = potentialList.find(function (potential) {
                                return (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(potential.stockMvtBatchNumber) &&
                                    potential.stockMvtBatchNumber === stockInformationRow._obj.stockBatchNumber) ||
                                    (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(potential.stockMvtSn) &&
                                        potential.stockMvtSn === stockInformationRow._obj.stockSn);
                            });
                            if (matchingPotential) {
                                stockInformationRow.potential = matchingPotential
                                    ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].orEmpty(matchingPotential.potential)
                                    : '';
                            }
                        });
                    }
                }
            });
        }
    };
    MaterialAvailabilityFormComponent.prototype.createStockInformationRow = function (stockInformation, stockMvt) {
        // Quantity
        var quantity = !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].isNullOrEmpty(stockInformation.stockReceiptQuantity)
            ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_17__["NumberUtils"].fromString(stockInformation.stockReceiptQuantity)
            : undefined;
        var formattedQuantity = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(quantity) && !isNaN(quantity)
            ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_17__["NumberUtils"].roundNumber(quantity, 1).toString()
            : '';
        // Selection availability of stock information rows
        var stockMvtQuantity = this.getStockMvtQuantity(stockMvt);
        var selectionAvailable = _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(stockMvtQuantity) && !isNaN(stockMvtQuantity) && stockMvtQuantity > 0;
        var stockInformationRow = {
            batch: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].orEmpty(stockInformation.stockBatchNumber),
            potential: '',
            quantity: formattedQuantity,
            site: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].orEmpty(stockInformation.siteText),
            sn: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].orEmpty(stockInformation.stockSn),
            stockType: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].orEmpty(stockInformation.stockTypeText),
            storageBin: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].orEmpty(stockInformation.storageBinText),
            valuationGroup: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].orEmpty(stockInformation.valuationGroupText),
            warehouse: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].orEmpty(stockInformation.warehouseText),
            isSnAlreadySelected: false,
            isBatchAlreadySelected: false,
            _obj: stockInformation,
            _selected: false,
            _selectionAvailable: selectionAvailable
        };
        return stockInformationRow;
    };
    MaterialAvailabilityFormComponent.prototype.getStockMvtQuantity = function (stockMvt) {
        return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_19__["StringUtils"].isNullOrEmpty(stockMvt.stockMvtQuantity)
            ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_17__["NumberUtils"].fromString(stockMvt.stockMvtQuantity)
            : undefined;
    };
    MaterialAvailabilityFormComponent.prototype.toggleWarehouseVisibility = function (row) {
        if (!row._select) {
            this.cleanWarehouseInfo();
            this.fillWarehouseInfo(row);
            this.initSnBatch();
        }
        else {
            this.cleanWarehouseInfo();
        }
    };
    MaterialAvailabilityFormComponent.prototype.fillWarehouseInfo = function (row) {
        if (row.bidtWarehouseDTO) {
            this.stockRowInput.bidtStockMvtDTO.bidtWarehouseId = row.bidtWarehouseDTO.wareHouseId;
            this.warehouseTableSelection = row;
        }
    };
    MaterialAvailabilityFormComponent.prototype.cleanWarehouseInfo = function () {
        this.noPnInWarehouse = false;
        this.stockRowInput.bidtStockMvtDTO.bidtWarehouseId = undefined;
        this.clearSnBatchInfo();
        if (this.warehouseTableSelection) {
            this.warehouseTableSelection._select = false;
        }
    };
    MaterialAvailabilityFormComponent.prototype.toggleMaterialVisibility = function (row, sort) {
        if (!row._select) {
            this.clearPnInfo(row);
            this.fillPnInfo(row);
            this.initWarehousesTable(sort);
        }
        else {
            this.clearPnInfo(row);
        }
    };
    MaterialAvailabilityFormComponent.prototype.fillPnInfo = function (row) {
        this.stockRowInput.bidtStockMvtDTO.birePnPnCode = row.pnCode;
        this.materialTableSelection = row;
    };
    MaterialAvailabilityFormComponent.prototype.clearPnInfo = function (row) {
        // this.stockRowInput.bidtStockMvtDTO.birePnPnCode = undefined;
        this.cleanWarehouseInfo();
        this.clearSnBatchInfo();
        if (this.materialTableSelection !== row) {
            this.materialTableSelection._select = false;
        }
    };
    MaterialAvailabilityFormComponent.prototype.toggleSnBatchVisibility = function (row) {
        if (!row._select) {
            this.clearSnBatchInfo();
            this.fillSnBatchInfo(row);
        }
        else {
            this.clearSnBatchInfo();
        }
    };
    MaterialAvailabilityFormComponent.prototype.fillSnBatchInfo = function (row) {
        if (row.stockInformationRow) {
            if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(row.stockInformationRow._obj.stockSn)) {
                this.stockRowInput.bidtStockMvtDTO.stockMvtSn = row.stockInformationRow._obj.stockSn;
            }
            else if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(row.stockInformationRow._obj.stockBatchNumber)) {
                this.stockRowInput.bidtStockMvtDTO.stockMvtBatchNumber = row.stockInformationRow._obj.stockBatchNumber;
            }
            this.snBatchTableSelection = row;
            this.snBatchTableSelection._select = true;
        }
    };
    MaterialAvailabilityFormComponent.prototype.clearSnBatchInfo = function () {
        this.stockRowInput.bidtStockMvtDTO.stockMvtSn = undefined;
        this.stockRowInput.bidtStockMvtDTO.stockMvtBatchNumber = undefined;
        this.noSnWithPn = false;
        this.noBatchWithPn = false;
        if (this.snBatchTableSelection) {
            this.snBatchTableSelection._select = false;
        }
    };
    MaterialAvailabilityFormComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        this.materialAvailabilityFormService
            .addOrUpdateStockMvt(this.stockRowInput.bidtStockMvtDTO)
            .subscribe(function (stockMvtResult) {
            _this.isSaving = false;
            _this.messageService.showSuccessMessage(_this.getTranslateKey('successOnSaveStockSelection'));
            _this.componentCommunicationService.changeStock(stockMvtResult);
            _this.closeComponent();
        });
    };
    MaterialAvailabilityFormComponent.prototype.openAirworthinessStatus = function (stockInformationRow) {
        var _this = this;
        var equipmentInput = {
            pnCode: stockInformationRow._obj.pn,
            sn: stockInformationRow.sn
        };
        this.materialAvailabilityFormService.findBidoEquipmentsByPnAndSn(equipmentInput).subscribe({
            next: function (equipmentList) {
                if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(equipmentList) &&
                    equipmentList.length === 1 &&
                    _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(equipmentList[0])) {
                    var equipment = equipmentList[0];
                    if (equipment.equipmentCode) {
                        var objectId = {
                            equipmentCodeList: [equipment.equipmentCode]
                        };
                        var data = {
                            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM,
                            id: _this.tabService.generateId(),
                            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Write,
                            objectId: _this.serializationService.serialize(objectId)
                        };
                        var labelKey = 'transaction.' + data.componentId;
                        _this.tabService.open(_this.tabService.create(data, labelKey, true));
                    }
                }
            }
        });
    };
    MaterialAvailabilityFormComponent.prototype.isConfOk = function (row) {
        return row.status === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__["ControlConfigConstants"].ICON_GREEN_LIGHT_CODE;
    };
    MaterialAvailabilityFormComponent.prototype.isConfWarning = function (row) {
        return row.status === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__["ControlConfigConstants"].ICON_YELLOW_LIGHT_CODE;
    };
    MaterialAvailabilityFormComponent.prototype.isConfNok = function (row) {
        return row.status === _shared_constants_control_config_constants__WEBPACK_IMPORTED_MODULE_6__["ControlConfigConstants"].ICON_RED_LIGHT_CODE;
    };
    MaterialAvailabilityFormComponent.prototype.navigateToEquipment = function (pn, sn) {
        var _this = this;
        if (pn && sn) {
            var equipmentInput = {
                sn: sn,
                pnCode: pn
            };
            this.materialAvailabilityFormService.findBidoEquipmentsByPnAndSn(equipmentInput).subscribe({
                next: function (equipmentList) {
                    if (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(equipmentList) &&
                        equipmentList.length === 1 &&
                        _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_18__["ObjectUtils"].isDefined(equipmentList[0])) {
                        var equipment = equipmentList[0];
                        var componentId = equipment.equipmentFunction === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].ITEM_FAMILY_CODE_AIRCRAFT_KEY
                            ? _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].FLE_AIRCRAFT_FORM
                            : equipment.equipmentFunction === _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_4__["AWPropertiesConstants"].ITEM_FAMILY_CODE_ENGINE_KEY
                                ? _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].FLE_ENGINE_FORM
                                : _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].FLE_EQUIPMENT_FORM;
                        var data = {
                            componentId: componentId,
                            id: _this.tabService.generateId(),
                            objectId: _this.serializationService.serialize({ equipmentCode: equipment.equipmentCode }),
                            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read
                        };
                        var labelKey = 'transaction.' + data.componentId;
                        _this.tabService.open(_this.tabService.create(data, labelKey, true));
                    }
                }
            });
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnOpenEquipment'));
        }
    };
    MaterialAvailabilityFormComponent.prototype.navigateToMaterial = function (pnCode) {
        if (pnCode) {
            var data = {
                id: this.tabService.generateId(),
                componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__["ComponentConstants"].LOG_MATERIAL_FORM,
                objectId: this.serializationService.serialize({ pnCode: pnCode }),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__["ComponentOpenMode"].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
        }
        else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnOpenMaterial'));
        }
    };
    MaterialAvailabilityFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-material-availability-form',
            template: __webpack_require__(/*! ./material-availability-form.component.html */ "./src/app/main/logistics/material-availability/form/material-availability-form.component.html"),
            styles: [__webpack_require__(/*! ./material-availability-form.component.scss */ "./src/app/main/logistics/material-availability/form/material-availability-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_10__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_11__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_12__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_13__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__["TabService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _material_availability_form_service__WEBPACK_IMPORTED_MODULE_20__["MaterialAvailabilityFormService"],
            _shared_services_component_communication_service__WEBPACK_IMPORTED_MODULE_8__["ComponentCommunicationService"],
            _shared_services_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"]])
    ], MaterialAvailabilityFormComponent);
    return MaterialAvailabilityFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_15__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/material-availability/form/material-availability-form.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/logistics/material-availability/form/material-availability-form.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: MaterialAvailabilityFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialAvailabilityFormService", function() { return MaterialAvailabilityFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/aircraft-maintenance.api */ "./src/app/shared/api/aircraft-maintenance.api.ts");
/* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/am-project-management.api */ "./src/app/shared/api/am-project-management.api.ts");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
/* harmony import */ var _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/api/bidt-stock-mvt.api */ "./src/app/shared/api/bidt-stock-mvt.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_product_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/api/bidt-warehouse-product.api */ "./src/app/shared/api/bidt-warehouse-product.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/api/task-management.api */ "./src/app/shared/api/task-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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












var MaterialAvailabilityFormService = /** @class */ (function (_super) {
    __extends(MaterialAvailabilityFormService, _super);
    function MaterialAvailabilityFormService(http, appConfigService, aircraftMaintenanceApi, amProjectManagementApi, bidtSiteApi, bidtStockMvtApi, bidtWarehouseApi, bidtWarehouseProductApi, fleetManagementApi, taskManagementApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
        _this.amProjectManagementApi = amProjectManagementApi;
        _this.bidtSiteApi = bidtSiteApi;
        _this.bidtStockMvtApi = bidtStockMvtApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.bidtWarehouseProductApi = bidtWarehouseProductApi;
        _this.fleetManagementApi = fleetManagementApi;
        _this.taskManagementApi = taskManagementApi;
        return _this;
    }
    /*************************
     * Aircraft maintenance api
     *************************/
    MaterialAvailabilityFormService.prototype.findBidmWorkOrder = function (bidmWorkOrderDTOId) {
        return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmWorkOrder, bidmWorkOrderDTOId);
    };
    /**************************************************************************
     * AM project management api
     *************************************************************************/
    MaterialAvailabilityFormService.prototype.findBidmProjectById = function (projectId) {
        return _super.prototype.post.call(this, this.amProjectManagementApi.findBidmProject, projectId);
    };
    /*************************
     * Bidt site api
     *************************/
    MaterialAvailabilityFormService.prototype.getSiteById = function (input) {
        return _super.prototype.post.call(this, this.bidtSiteApi.getById, input);
    };
    MaterialAvailabilityFormService.prototype.findAllSite = function () {
        return _super.prototype.post.call(this, this.bidtSiteApi.getSites);
    };
    /*************************
     * Bidt stock mvt api
     *************************/
    MaterialAvailabilityFormService.prototype.addOrUpdateStockMvt = function (input) {
        return _super.prototype.post.call(this, this.bidtStockMvtApi.addOrUpdateStockMvt, input);
    };
    MaterialAvailabilityFormService.prototype.findStockInformationListByCriteria = function (input) {
        return _super.prototype.post.call(this, this.bidtStockMvtApi.getStockInformationListByCriteria, input);
    };
    MaterialAvailabilityFormService.prototype.findPotentialListByStockMvt = function (input) {
        return _super.prototype.post.call(this, this.bidtStockMvtApi.getPotentialList, input);
    };
    MaterialAvailabilityFormService.prototype.getStockMvtById = function (getById) {
        return _super.prototype.post.call(this, this.bidtStockMvtApi.getById, getById);
    };
    MaterialAvailabilityFormService.prototype.getQuantityInStock = function (getQuantityInStock) {
        return _super.prototype.post.call(this, this.bidtStockMvtApi.getQuantityInStock, getQuantityInStock);
    };
    MaterialAvailabilityFormService.prototype.getQuantityInStockBySite = function (getQuantityInAllStock) {
        return _super.prototype.post.call(this, this.bidtStockMvtApi.getQuantityInStockBySite, getQuantityInAllStock);
    };
    /*************************
     * Bidt warehouse api
     *************************/
    MaterialAvailabilityFormService.prototype.findWarehouseByProduct = function (productPn) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findByProduct, productPn);
    };
    /*************************
     * Bidt warehouse product api
     *************************/
    MaterialAvailabilityFormService.prototype.findByWarehouseIdAndProductCode = function (input) {
        return _super.prototype.post.call(this, this.bidtWarehouseProductApi.findByWarehouseIdAndProductCode, input);
    };
    /*************************
     * Fleet Management api
     *************************/
    MaterialAvailabilityFormService.prototype.findBidoEquipmentsByPnAndSn = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes, input);
    };
    /*************************
     * Task Management api
     *************************/
    MaterialAvailabilityFormService.prototype.getMaterialDetails = function (input) {
        return _super.prototype.post.call(this, this.taskManagementApi.fetchProductDetails, input);
    };
    MaterialAvailabilityFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_11__["AppConfigService"],
            _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_2__["AircraftMaintenanceApi"],
            _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_3__["AMProjectManagementApi"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_4__["BidtSiteApi"],
            _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_5__["BidtStockMvtApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_7__["BidtWarehouseApi"],
            _shared_api_bidt_warehouse_product_api__WEBPACK_IMPORTED_MODULE_6__["BidtWarehouseProductApi"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_8__["FleetManagementApi"],
            _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_9__["TaskManagementApi"]])
    ], MaterialAvailabilityFormService);
    return MaterialAvailabilityFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_10__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/material-availability/material-availability.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/logistics/material-availability/material-availability.module.ts ***!
  \**************************************************************************************/
/*! exports provided: MaterialAvailabilityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialAvailabilityModule", function() { return MaterialAvailabilityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _form_material_availability_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/material-availability-form.component */ "./src/app/main/logistics/material-availability/form/material-availability-form.component.ts");
/* harmony import */ var _form_material_availability_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/material-availability-form.service */ "./src/app/main/logistics/material-availability/form/material-availability-form.service.ts");
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
var EXTERNAL_MODULES = [primeng_tooltip__WEBPACK_IMPORTED_MODULE_1__["TooltipModule"]];
var INTERNAL_MODULES = [];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [_form_material_availability_form_component__WEBPACK_IMPORTED_MODULE_6__["MaterialAvailabilityFormComponent"]];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_material_availability_form_service__WEBPACK_IMPORTED_MODULE_7__["MaterialAvailabilityFormService"]];
var MaterialAvailabilityModule = /** @class */ (function () {
    function MaterialAvailabilityModule() {
    }
    MaterialAvailabilityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_2__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_3__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonSharedModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_5__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], MaterialAvailabilityModule);
    return MaterialAvailabilityModule;
}());



/***/ }),

/***/ "./src/app/shared/services/component-communication.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/component-communication.service.ts ***!
  \********************************************************************/
/*! exports provided: ComponentCommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentCommunicationService", function() { return ComponentCommunicationService; });
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


var ComponentCommunicationService = /** @class */ (function () {
    function ComponentCommunicationService() {
        this.stockMvtSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentStockMvt$ = this.stockMvtSource.asObservable();
    }
    ComponentCommunicationService.prototype.changeStock = function (stock) {
        this.stockMvtSource.next(stock);
    };
    ComponentCommunicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ComponentCommunicationService);
    return ComponentCommunicationService;
}());



/***/ })

}]);
//# sourceMappingURL=default~logistics-goods-movement-goods-movement-module~logistics-material-availability-material-avai~e4435f8e.js.map