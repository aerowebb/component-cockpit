(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistics-stock-view-stock-view-module"],{

/***/ "./node_modules/primeng/chart.js":
/*!***************************************!*\
  !*** ./node_modules/primeng/chart.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/chart/chart */ "./node_modules/primeng/components/chart/chart.js"));

/***/ }),

/***/ "./node_modules/primeng/treetable.js":
/*!*******************************************!*\
  !*** ./node_modules/primeng/treetable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/treetable/treetable */ "./node_modules/primeng/components/treetable/treetable.js"));

/***/ }),

/***/ "./src/app/main/logistics/stock-view/dialog-select-location-stock/dialog-select-location-stock.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-view/dialog-select-location-stock/dialog-select-location-stock.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-modal class=\"aw-modal\" [(visible)]=\"display\">\r\n  <a-header>\r\n    <div class=\"modal-title\">{{ getComponentName() + \".title\" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class=\"section\">\r\n      <h3 class=\"section-title\">\r\n        {{ getComponentName() + \".newLocation\" | translate }}\r\n      </h3>\r\n      <div class=\"grid-row\">\r\n        <div class=\"form-group required\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".zone\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <p-selectButton\r\n              [(ngModel)]=\"selectedZone\"\r\n              [options]=\"storageZoneList\"\r\n              appendTo=\"body\"\r\n              (onChange)=\"loadBinDropDown()\"\r\n            ></p-selectButton>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group required\" *ngIf=\"isZoneHaveBins\">\r\n          <label class=\"form-label\">\r\n            {{ getComponentName() + \".bins\" | translate }}\r\n          </label>\r\n          <div class=\"form-control\">\r\n            <p-dropdown\r\n              class=\"aw-dropdown fixed-width\"\r\n              placeholder=\"&nbsp;\"\r\n              [(ngModel)]=\"selectedBin\"\r\n              [options]=\"storageBinList\"\r\n              appendTo=\"body\"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"!isZoneHaveBins\"></div>\r\n        <div class=\"form-group\"></div>\r\n        <div class=\"form-group\"></div>\r\n        <div class=\"form-group\"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"section\">\r\n      <h3 class=\"section-title\">\r\n        {{ getComponentName() + \".assetToMove\" | translate }}\r\n      </h3>\r\n\r\n      <div class=\"section-content\">\r\n        <p-table\r\n          #ptableStockInformation\r\n          class=\"aw-table2\"\r\n          [resizableColumns]=\"true\"\r\n          [scrollable]=\"true\"\r\n          [value]=\"rows\"\r\n          [customSort]=\"false\"\r\n        >\r\n          <ng-template pTemplate=\"colgroup\">\r\n            <colgroup>\r\n              <col style=\"width: 18%;\" />\r\n              <col style=\"width: 18%;\" />\r\n              <col style=\"width: 16%;\" />\r\n              <col style=\"width: 16%;\" />\r\n              <col style=\"width: 16%;\" *ngIf=\"withAlternatives\" />\r\n              <col style=\"width: 16%;\" />\r\n            </colgroup>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"header\">\r\n            <tr>\r\n              <th style=\"text-align: left;\">\r\n                {{ getComponentName() + \".material\" | translate }}\r\n              </th>\r\n              <th style=\"text-align: left;\">\r\n                {{ getComponentName() + \".batchNumber\" | translate }}\r\n              </th>\r\n\r\n              <th style=\"text-align: left;\">\r\n                {{ getComponentName() + \".snAndManufactoring\" | translate }}\r\n              </th>\r\n              <th style=\"text-align: right;\">\r\n                {{ getComponentName() + \".quantity\" | translate }}\r\n              </th>\r\n              <th style=\"text-align: left;\" *ngIf=\"withAlternatives\">\r\n                {{ getComponentName() + \".interchangeability\" | translate }}\r\n              </th>\r\n              <th style=\"text-align: left;\">\r\n                {{ getComponentName() + \".storage\" | translate }}\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n            <tr>\r\n              <td>\r\n                <div>\r\n                  <div>\r\n                    <span class=\"bold\">\r\n                      {{ rowData[\"pn\"] }}\r\n                    </span>\r\n                  </div>\r\n                  <div>\r\n                    <span class=\"italic\">{{ rowData[\"designation\"] }}</span>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n\r\n              <td>\r\n                <div>\r\n                  <span class=\"bold\">\r\n                    {{ rowData[\"stockBatchNumber\"] }}\r\n                  </span>\r\n                </div>\r\n                <div *ngIf=\"rowData['stockBatchNumber']\">\r\n                  <span class=\"italic\">\r\n                    {{ rowData[\"operationalStatus\"] | formatSelectOption: equipmentStatuses }}\r\n                  </span>\r\n                </div>\r\n              </td>\r\n\r\n              <td>\r\n                <div>\r\n                  <span class=\"bold\" *ngIf=\"rowData['stockSn'] && !rowData['manufacturingBatchNumber']\">\r\n                    {{ rowData[\"stockSn\"] }}\r\n                  </span>\r\n                  <span class=\"bold\" *ngIf=\"!rowData['stockSn'] && rowData['manufacturingBatchNumber']\">\r\n                    {{ rowData[\"manufacturingBatchNumber\"] }}\r\n                  </span>\r\n                </div>\r\n                <div *ngIf=\"!rowData['stockBatchNumber']\">\r\n                  <span class=\"italic\">\r\n                    {{ rowData[\"operationalStatus\"] | formatSelectOption: equipmentStatuses }}\r\n                  </span>\r\n                </div>\r\n              </td>\r\n\r\n              <td style=\"text-align: right;\">\r\n                {{ rowData[\"stockQuantity\"] | formatNumber }}\r\n              </td>\r\n\r\n              <td *ngIf=\"withAlternatives\">\r\n                {{ rowData[\"interchangeabilityText\"] }}\r\n              </td>\r\n              <td>\r\n                <div>\r\n                  <div>\r\n                    <span class=\"bold\">\r\n                      {{ rowData[\"areaText\"] }}\r\n                    </span>\r\n                  </div>\r\n                  <div>\r\n                    {{ rowData[\"storageBinText\"] }}\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </p-table>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type=\"button\" mat-raised-button (click)=\"closeDialog()\">\r\n      <span>{{ \"global.cancel\" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf=\"!isReadOpenMode\" color=\"primary\" type=\"button\" mat-raised-button (click)=\"validate()\">\r\n      {{ \"global.validate\" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/stock-view/dialog-select-location-stock/dialog-select-location-stock.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-view/dialog-select-location-stock/dialog-select-location-stock.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .custom-icon {\n  font-size: 6em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stdmlldy9kaWFsb2ctc2VsZWN0LWxvY2F0aW9uLXN0b2NrL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcc3RvY2stdmlld1xcZGlhbG9nLXNlbGVjdC1sb2NhdGlvbi1zdG9ja1xcZGlhbG9nLXNlbGVjdC1sb2NhdGlvbi1zdG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbG9naXN0aWNzL3N0b2NrLXZpZXcvZGlhbG9nLXNlbGVjdC1sb2NhdGlvbi1zdG9jay9kaWFsb2ctc2VsZWN0LWxvY2F0aW9uLXN0b2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jdXN0b20taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDZlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/logistics/stock-view/dialog-select-location-stock/dialog-select-location-stock.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-view/dialog-select-location-stock/dialog-select-location-stock.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: DialogSelectLocationStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSelectLocationStockComponent", function() { return DialogSelectLocationStockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_bidt_storage_bin_type_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/bidt-storage-bin-type-constants */ "./src/app/shared/constants/bidt-storage-bin-type-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/types/dialog-component */ "./src/app/shared/types/dialog-component.ts");
/* harmony import */ var _form_stock_view_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/stock-view-form.service */ "./src/app/main/logistics/stock-view/form/stock-view-form.service.ts");
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






var DialogSelectLocationStockComponent = /** @class */ (function (_super) {
    __extends(DialogSelectLocationStockComponent, _super);
    function DialogSelectLocationStockComponent(stockViewFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__["ComponentOpenMode"].Write, 'DialogSelectLocationStockComponent') || this;
        _this.stockViewFormService = stockViewFormService;
        _this.onChangeLocation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.init();
        return _this;
    }
    DialogSelectLocationStockComponent.prototype.init = function () {
        this.storageZoneList = [];
        this.storageBinList = [];
        this.isZoneHaveBins = false;
    };
    DialogSelectLocationStockComponent.prototype.ngOnInit = function () {
        this.loadZoneDropDown();
    };
    DialogSelectLocationStockComponent.prototype.loadZoneDropDown = function () {
        var _this = this;
        if (this.rows[0].warehouseId) {
            this.stockViewFormService.findBidtWarehouseById(Number(this.rows[0].warehouseId)).subscribe(function (warehouse) {
                if (warehouse.bidtStorageBinDTOs) {
                    warehouse.bidtStorageBinDTOs
                        .filter(function (storage) { return storage.bidtStorageBinTypeId === _shared_constants_bidt_storage_bin_type_constants__WEBPACK_IMPORTED_MODULE_2__["BidtStorageBinTypeConstant"].SERVICEABLE; })
                        .forEach(function (storageBin) {
                        var row = {
                            label: storageBin.sbDescription
                                ? storageBin.sbNumber + " - " + storageBin.sbDescription
                                : "" + storageBin.sbNumber,
                            value: storageBin.id,
                            number: Number(storageBin.sbNumber),
                            _zone: storageBin
                        };
                        _this.storageZoneList.push(row);
                    });
                    _this.storageZoneList.sort(function (a, b) { return a.number - b.number; });
                }
            });
        }
    };
    DialogSelectLocationStockComponent.prototype.loadBinDropDown = function () {
        var _this = this;
        this.isZoneHaveBins = false;
        this.storageBinList = [];
        var storageZone = this.storageZoneList.filter(function (storage) { return storage.value === _this.selectedZone; })[0]._zone;
        if (storageZone.bins) {
            storageZone.bins.forEach(function (storageBin) {
                var row = {
                    label: storageBin.sbDescription
                        ? storageBin.sbNumber + " - " + storageBin.sbDescription
                        : "" + storageBin.sbNumber,
                    value: storageBin.id,
                    number: Number(storageBin.sbNumber),
                    _zone: storageBin
                };
                _this.storageBinList.push(row);
            });
            this.storageBinList.sort(function (a, b) { return a.number - b.number; });
            this.isZoneHaveBins = true;
        }
    };
    DialogSelectLocationStockComponent.prototype.validate = function () {
        var _this = this;
        var stockMvtDTOList = [];
        this.rows.forEach(function (stockInformation) {
            var stockMvtDTO = {
                birePnPnCode: stockInformation.pn,
                stockMvtSn: stockInformation.stockSn,
                stockMvtBatchNumber: stockInformation.stockBatchNumber,
                stockMvtQuantity: stockInformation.stockQuantity,
                bidtSiteByBidtSiteIssueId: Number(stockInformation.siteId),
                bidtWarehouseByBidtWarehouseIssueId: Number(stockInformation.warehouseId),
                bidtStorageBinByBidtSbZoneIssueId: stockInformation.areaId ? Number(stockInformation.areaId) : undefined,
                bidtStorageBinByBidtSbBinIssueId: stockInformation.storageBinId
                    ? Number(stockInformation.storageBinId)
                    : undefined,
                bidtSiteByBidtSiteReceiptId: Number(stockInformation.siteId),
                bidtWarehouseByBidtWarehouseReceiptId: Number(stockInformation.warehouseId),
                bidtStorageBinByBidtSbZoneReceiptId: _this.selectedZone,
                bidtStorageBinByBidtSbBinReceiptId: _this.selectedBin
            };
            stockMvtDTOList.push(stockMvtDTO);
        });
        this.stockViewFormService.mmfCreateStockMvtLocationChange(stockMvtDTOList).subscribe(function (updateList) {
            var mvtStatus = [];
            var mvtStatusExcluded = [];
            mvtStatusExcluded = [
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].MM_MVT_STATUS_CANCELED_KEY,
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"].MM_MVT_STATUS_EXECUTED_KEY
            ];
            var searchCriteria = {
                mvtStatus: mvtStatus,
                mvtStatusExcluded: mvtStatusExcluded,
                untilPlannedDate: new Date(),
                stockMvt: {
                    bidtSiteByBidtSiteIssueId: updateList[0].bidtSiteByBidtSiteIssueId,
                    bidtSiteByBidtSiteReceiptId: updateList[0].bidtSiteByBidtSiteReceiptId,
                    bidtWarehouseByBidtWarehouseIssueId: updateList[0].bidtWarehouseByBidtWarehouseIssueId,
                    bidtWarehouseByBidtWarehouseReceiptId: updateList[0].bidtWarehouseByBidtWarehouseReceiptId,
                    bidtStockMvtTypeId: updateList[0].bidtStockMvtTypeId,
                    stockMvtSn: updateList[0].stockMvtSn,
                    stockMvtBatchNumber: updateList[0].stockMvtBatchNumber
                },
                pnCode: updateList[0].birePnPnCode,
                withAlternatives: false,
                dfShipmentSearch: false
            };
            var params = {
                searchParameters: searchCriteria,
                bidtStockList: updateList
            };
            _this.onChangeLocation.emit(params);
            _this.closeDialog();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogSelectLocationStockComponent.prototype, "rows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DialogSelectLocationStockComponent.prototype, "withAlternatives", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogSelectLocationStockComponent.prototype, "equipmentStatuses", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogSelectLocationStockComponent.prototype, "onChangeLocation", void 0);
    DialogSelectLocationStockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-dialog-select-location',
            template: __webpack_require__(/*! ./dialog-select-location-stock.component.html */ "./src/app/main/logistics/stock-view/dialog-select-location-stock/dialog-select-location-stock.component.html"),
            styles: [__webpack_require__(/*! ./dialog-select-location-stock.component.scss */ "./src/app/main/logistics/stock-view/dialog-select-location-stock/dialog-select-location-stock.component.scss")]
        }),
        __metadata("design:paramtypes", [_form_stock_view_form_service__WEBPACK_IMPORTED_MODULE_5__["StockViewFormService"]])
    ], DialogSelectLocationStockComponent);
    return DialogSelectLocationStockComponent;
}(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-view/form/stock-view-filter/stock-view-filter.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-view/form/stock-view-filter/stock-view-filter.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\r\n  <div class=\"grid-row\">\r\n    <div class=\"grid-cell grid-cell--container custom-border\">\r\n      <div class=\"grid-cell-content\">\r\n        <div class=\"column\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group flex--auto\">\r\n              <label class=\"form-label\">{{ getComponentName() + \".material\" | translate }} </label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  placeholder=\"&nbsp;\"\r\n                  [showClear]=\"true\"\r\n                  [options]=\"listInterface.pnList\"\r\n                  [(ngModel)]=\"searchCriteria.pn\"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group flex--auto\">\r\n              <label class=\"form-label\"> {{ getComponentName() + \".site\" | translate }} </label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  placeholder=\"&nbsp;\"\r\n                  [showClear]=\"true\"\r\n                  [options]=\"listInterface.siteList\"\r\n                  [(ngModel)]=\"searchCriteria.siteId\"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group flex--auto\">\r\n              <label class=\"form-label\"> {{ getComponentName() + \".warehouse\" | translate }} </label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  placeholder=\"&nbsp;\"\r\n                  [showClear]=\"true\"\r\n                  [options]=\"listInterface.woList\"\r\n                  [(ngModel)]=\"searchCriteria.warehouseId\"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group flex--auto\">\r\n              <label class=\"form-label\"> {{ getComponentName() + \".area\" | translate }} </label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  placeholder=\"&nbsp;\"\r\n                  [showClear]=\"true\"\r\n                  [options]=\"listInterface.areaList\"\r\n                  [(ngModel)]=\"searchCriteria.areaId\"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group flex--auto\">\r\n              <label class=\"form-label\"> {{ getComponentName() + \".storage\" | translate }} </label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-dropdown\r\n                  class=\"aw-dropdown fixed-width\"\r\n                  placeholder=\"&nbsp;\"\r\n                  [showClear]=\"true\"\r\n                  [options]=\"listInterface.storageBinList\"\r\n                  [(ngModel)]=\"searchCriteria.storageBinId\"\r\n                ></p-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group flex--auto\">\r\n              <label class=\"form-label\"> {{ getComponentName() + \".plannedIssue\" | translate }} </label>\r\n\r\n              <div class=\"form-control\">\r\n                <p-calendar\r\n                  showButtonBar=\"true\"\r\n                  [monthNavigator]=\"true\"\r\n                  [yearNavigator]=\"true\"\r\n                  [yearRange]=\"sessionService.calendarYearRange\"\r\n                  appendTo=\"body\"\r\n                  class=\"aw-calendar\"\r\n                  [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                  [locale]=\"sessionService.calendarFormat\"\r\n                  [readonlyInput]=\"true\"\r\n                  [(ngModel)]=\"searchCriteria.stockIssueDate\"\r\n                ></p-calendar>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row action-list\">\r\n            <button type=\"button\" mat-raised-button (click)=\"reset()\">\r\n              {{ \"global.reset\" | translate }}\r\n            </button>\r\n\r\n            <button type=\"button\" mat-raised-button (click)=\"filter()\">\r\n              {{ \"global.filter\" | translate }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/stock-view/form/stock-view-filter/stock-view-filter.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-view/form/stock-view-filter/stock-view-filter.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-border {\n  border: 0px !important;\n  box-shadow: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stdmlldy9mb3JtL3N0b2NrLXZpZXctZmlsdGVyL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcc3RvY2stdmlld1xcZm9ybVxcc3RvY2stdmlldy1maWx0ZXJcXHN0b2NrLXZpZXctZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stdmlldy9mb3JtL3N0b2NrLXZpZXctZmlsdGVyL3N0b2NrLXZpZXctZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1ib3JkZXIge1xyXG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/logistics/stock-view/form/stock-view-filter/stock-view-filter.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-view/form/stock-view-filter/stock-view-filter.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: StockViewFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockViewFilterComponent", function() { return StockViewFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/types/generic-component */ "./src/app/shared/types/generic-component.ts");
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




var StockViewFilterComponent = /** @class */ (function (_super) {
    __extends(StockViewFilterComponent, _super);
    function StockViewFilterComponent(sessionService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__["ComponentOpenMode"].Write) || this;
        _this.sessionService = sessionService;
        _this.init();
        return _this;
    }
    Object.defineProperty(StockViewFilterComponent.prototype, "setDropdownData", {
        set: function (data) {
            var _this = this;
            this.initDropdown();
            if (!!data && data.length) {
                data.forEach(function (element) {
                    _this.setDropdowns(element);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    StockViewFilterComponent.prototype.getComponentName = function () {
        return 'StockViewFilterComponent';
    };
    StockViewFilterComponent.prototype.init = function () {
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initDropdown();
    };
    /*********************************************
     * INITILIZE DROPDOWNS
     ********************************************/
    StockViewFilterComponent.prototype.initDropdown = function () {
        this.listInterface = {
            siteList: [],
            pnList: [],
            woList: [],
            areaList: [],
            storageBinList: []
        };
        this.searchCriteria = {};
    };
    StockViewFilterComponent.prototype.reset = function () {
        this.searchCriteria = {};
    };
    StockViewFilterComponent.prototype.setDropdowns = function (eleClone) {
        if (!!this.listInterface) {
            if (eleClone && eleClone.siteId && this.listInterface.siteList) {
                var isPresent = this.listInterface.siteList.filter(function (res) { return res.value === eleClone.siteId; });
                if (isPresent.length === 0) {
                    this.listInterface.siteList.push({
                        label: eleClone.siteText || eleClone.siteId,
                        value: eleClone.siteId
                    });
                }
            }
            if (eleClone && eleClone.warehouseId && this.listInterface.woList) {
                var isPresent = this.listInterface.woList.filter(function (res) { return res.value === eleClone.warehouseId; });
                if (isPresent.length === 0) {
                    this.listInterface.woList.push({
                        label: eleClone.warehouseText || eleClone.warehouseText,
                        value: eleClone.warehouseId
                    });
                }
            }
            if (eleClone && eleClone.pn && this.listInterface.pnList) {
                var isPresent = this.listInterface.pnList.filter(function (res) { return res.value === eleClone.pn; });
                if (isPresent.length === 0) {
                    this.listInterface.pnList.push({
                        label: eleClone.pn,
                        value: eleClone.pn
                    });
                }
            }
            if (eleClone && eleClone.areaId && this.listInterface.areaList) {
                var isPresent = this.listInterface.areaList.filter(function (res) { return res.value === eleClone.areaId; });
                if (isPresent.length === 0) {
                    this.listInterface.areaList.push({
                        label: eleClone.areaText || eleClone.areaId,
                        value: eleClone.areaId
                    });
                }
            }
            if (eleClone && eleClone.storageBinId && this.listInterface.storageBinList) {
                var isPresent = this.listInterface.storageBinList.filter(function (res) { return res.value === eleClone.storageBinId; });
                if (isPresent.length === 0) {
                    this.listInterface.storageBinList.push({
                        label: eleClone.storageBinText || eleClone.storageBinId,
                        value: eleClone.storageBinId
                    });
                }
            }
        }
    };
    StockViewFilterComponent.prototype.filter = function () {
        // todo: need to implemented for planned date
        this.onFilter.emit(this.searchCriteria);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('stockInformationTable'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], StockViewFilterComponent.prototype, "setDropdownData", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Map)
    ], StockViewFilterComponent.prototype, "familyCodeMap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StockViewFilterComponent.prototype, "onFilter", void 0);
    StockViewFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-stock-view-filter',
            template: __webpack_require__(/*! ./stock-view-filter.component.html */ "./src/app/main/logistics/stock-view/form/stock-view-filter/stock-view-filter.component.html"),
            styles: [__webpack_require__(/*! ./stock-view-filter.component.scss */ "./src/app/main/logistics/stock-view/form/stock-view-filter/stock-view-filter.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], StockViewFilterComponent);
    return StockViewFilterComponent;
}(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_3__["GenericComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-view/form/stock-view-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/main/logistics/stock-view/form/stock-view-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">\r\n                  {{ componentData.componentId + \".stockStatus\" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content grid-cell-content-with-section\">\r\n              <div class=\"row\">\r\n                <div class=\"section\" style=\"padding-right: 8px; width: 20%;\">\r\n                  <h3 class=\"section-title\">\r\n                    &nbsp;\r\n                  </h3>\r\n\r\n                  <div class=\"section-content\">\r\n                    <p-treeTable\r\n                      class=\"aw-tree-table2\"\r\n                      selectionMode=\"single\"\r\n                      [value]=\"stockViewTreeTable\"\r\n                      [resizableColumns]=\"true\"\r\n                      [scrollable]=\"true\"\r\n                      [(selection)]=\"selectedStockViewTreeNode\"\r\n                      (onNodeSelect)=\"onSelectStockViewTreeNode($event.node)\"\r\n                      (onNodeUnselect)=\"onUnselectStockViewTreeNode()\"\r\n                    >\r\n                      <ng-template pTemplate=\"colgroup\">\r\n                        <colgroup>\r\n                          <col style=\"width: 80%;\" />\r\n                          <col style=\"width: 20%;\" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"header\">\r\n                        <tr>\r\n                          <th ttResizableColumn style=\"text-align: left;\">\r\n                            {{ getComponentName() + \".location\" | translate }}\r\n                          </th>\r\n\r\n                          <th ttResizableColumn style=\"text-align: right;\">\r\n                            {{ getComponentName() + \".quantity\" | translate }}\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\">\r\n                        <tr [ttRow]=\"rowNode\" [ttSelectableRow]=\"rowNode\">\r\n                          <td style=\"overflow: hidden; text-overflow: ellipsis;\">\r\n                            <p-treeTableToggler [rowNode]=\"rowNode\"></p-treeTableToggler>\r\n\r\n                            <ng-container *ngIf=\"rowData.type == treeNodeType.SITE\">\r\n                              {{ rowData.data.site.siteName }}\r\n                            </ng-container>\r\n\r\n                            <ng-container *ngIf=\"rowData.type == treeNodeType.WAREHOUSE\">\r\n                              {{ rowData.data.warehouse.whName }}\r\n                            </ng-container>\r\n\r\n                            <ng-container *ngIf=\"rowData.type == treeNodeType.ZONE\">\r\n                              {{ rowData.data.zone.sbNumber }}\r\n                              <ng-container *ngIf=\"rowData.data.zone.sbDescription\">\r\n                                - {{ rowData.data.zone.sbDescription }}\r\n                              </ng-container>\r\n                            </ng-container>\r\n                          </td>\r\n\r\n                          <td style=\"text-align: right;\">\r\n                            {{ rowData.quantity }}\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-treeTable>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"section\" style=\"border-left: 1px solid #000; padding-left: 8px; width: 80%;\">\r\n                  <h3 class=\"section-title\">\r\n                    {{ componentData.componentId + \".stockToDate\" | translate }}\r\n                    ({{ date | date: \"shortDate\":\"\":translateService.currentLang }})\r\n                  </h3>\r\n\r\n                  <div class=\"section-content\">\r\n                    <p-table\r\n                      #ptableStockInformation\r\n                      class=\"aw-table2\"\r\n                      [resizableColumns]=\"true\"\r\n                      [scrollable]=\"true\"\r\n                      [value]=\"stockInformationTable\"\r\n                      [(selection)]=\"selectedStockInformations\"\r\n                      [globalFilterFields]=\"[\r\n                        'pn',\r\n                        'designation',\r\n                        'stockSn',\r\n                        'stockBatchNumber',\r\n                        'manufacturingBatchNumber',\r\n                        'interchangeabilityText',\r\n                        'siteText',\r\n                        'warehouseText',\r\n                        'areaText',\r\n                        'storageBinText',\r\n                        'stockIssueDate'\r\n                      ]\"\r\n                      (sortFunction)=\"customSort($event)\"\r\n                      [customSort]=\"true\"\r\n                    >\r\n                      <ng-template pTemplate=\"caption\">\r\n                        <div\r\n                          class=\"aw-table-header\"\r\n                          [ngClass]=\"{ 'rows-selected': selectedStockInformations.length > 0 }\"\r\n                        >\r\n                          <div class=\"aw-table-global-filter\">\r\n                            <label class=\"aw-table-global-filter-label\">\r\n                              <i class=\"fa fa-fw fa-search\" aria-hidden=\"true\"></i>\r\n                            </label>\r\n\r\n                            <input\r\n                              #ptableStockInformationGlobalFilter\r\n                              class=\"aw-table-global-filter-input\"\r\n                              type=\"text\"\r\n                              placeholder=\"{{ 'table.globalFilterText' | translate }}\"\r\n                              (input)=\"ptableStockInformation.filterGlobal($event.target.value, 'contains')\"\r\n                            />\r\n                          </div>\r\n\r\n                          <div class=\"aw-table-actions\">\r\n                            <button\r\n                              *ngIf=\"\r\n                                selectedStockInformations.length > 0 &&\r\n                                selectedStockViewTreeNode.data.type != treeNodeType.SITE\r\n                              \"\r\n                              type=\"button\"\r\n                              mat-raised-button\r\n                              (click)=\"changeLocation()\"\r\n                            >\r\n                              {{ getComponentName() + \".changeLocation\" | translate }}\r\n                            </button>\r\n                          </div>\r\n                          <div class=\"aw-table-icon-actions\">\r\n                            <i\r\n                              *ngIf=\"!!completeStockInformationTable && completeStockInformationTable.length > 0\"\r\n                              class=\"fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay\"\r\n                              aria-hidden=\"true\"\r\n                              [ngClass]=\"{ active: filtersVisible }\"\r\n                              (click)=\"opFilters.toggle($event); openFilters()\"\r\n                            ></i>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"colgroup\">\r\n                        <colgroup>\r\n                          <col class=\"aw-table-checkbox-wrapper\" />\r\n                          <col style=\"width: 15%;\" />\r\n                          <col style=\"width: 15%;\" />\r\n                          <col style=\"width: 15%;\" />\r\n                          <col style=\"width: 5%;\" />\r\n                          <col style=\"width: 15%;\" *ngIf=\"withAlternatives\" />\r\n                          <col style=\"width: 15%;\" />\r\n                          <col style=\"width: 10%;\" />\r\n                          <col style=\"width: 10%;\" />\r\n                        </colgroup>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"header\">\r\n                        <tr>\r\n                          <th class=\"aw-table-checkbox-wrapper\">\r\n                            <p-tableHeaderCheckbox class=\"aw-table-checkbox\"></p-tableHeaderCheckbox>\r\n                          </th>\r\n                          <th style=\"text-align: left;\" pSortableColumn=\"pn\">\r\n                            {{ getComponentName() + \".material\" | translate }}\r\n                            <p-sortIcon field=\"pn\"></p-sortIcon>\r\n                          </th>\r\n                          <th style=\"text-align: left;\" pSortableColumn=\"stockBatchNumber\">\r\n                            {{ getComponentName() + \".batchNumber\" | translate }}\r\n                            <p-sortIcon field=\"stockBatchNumber\"></p-sortIcon>\r\n                          </th>\r\n                          <th style=\"text-align: left;\" pSortableColumn=\"stockSn\">\r\n                            {{ getComponentName() + \".snAndManufactoring\" | translate }}\r\n                            <p-sortIcon field=\"stockSn\"></p-sortIcon>\r\n                          </th>\r\n                          <th style=\"text-align: right;\" pSortableColumn=\"stockQuantity\">\r\n                            {{ getComponentName() + \".quantity\" | translate }}\r\n                            <p-sortIcon field=\"stockQuantity\"></p-sortIcon>\r\n                          </th>\r\n                          <th\r\n                            style=\"text-align: left;\"\r\n                            *ngIf=\"withAlternatives\"\r\n                            pSortableColumn=\"interchangeabilityText\"\r\n                          >\r\n                            {{ getComponentName() + \".interchangeability\" | translate }}\r\n                            <p-sortIcon field=\"interchangeabilityText\"></p-sortIcon>\r\n                          </th>\r\n                          <th style=\"text-align: left;\" pSortableColumn=\"siteText\">\r\n                            {{ getComponentName() + \".location\" | translate }}\r\n                            <p-sortIcon field=\"siteText\"></p-sortIcon>\r\n                          </th>\r\n                          <th style=\"text-align: left;\" pSortableColumn=\"areaText\">\r\n                            {{ getComponentName() + \".storage\" | translate }}\r\n                            <p-sortIcon field=\"areaText\"></p-sortIcon>\r\n                          </th>\r\n                          <th style=\"text-align: left;\" pSortableColumn=\"stockIssueDate\">\r\n                            {{ getComponentName() + \".plannedIssue\" | translate }}\r\n                            <p-sortIcon field=\"stockIssueDate\"></p-sortIcon>\r\n                          </th>\r\n                        </tr>\r\n                      </ng-template>\r\n\r\n                      <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n                        <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\r\n                          <td class=\"aw-table-checkbox-wrapper\">\r\n                            <p-tableCheckbox class=\"aw-table-checkbox\" [value]=\"rowData\"></p-tableCheckbox>\r\n                          </td>\r\n                          <td>\r\n                            <div>\r\n                              <div>\r\n                                <a class=\"bold\" (click)=\"openPn(rowData)\">\r\n                                  {{ rowData[\"pn\"] }}\r\n                                </a>\r\n                              </div>\r\n                              <div>\r\n                                <span class=\"italic\">{{ rowData[\"designation\"] }}</span>\r\n                              </div>\r\n                            </div>\r\n                          </td>\r\n\r\n                          <td>\r\n                            <div>\r\n                              <a\r\n                                class=\"bold\"\r\n                                (click)=\"rowData['stockSn'] ? openEquipment(rowData) : openBatch(rowData)\"\r\n                              >\r\n                                {{ rowData[\"stockBatchNumber\"] }}\r\n                              </a>\r\n                            </div>\r\n                            <div *ngIf=\"rowData['stockBatchNumber']\">\r\n                              <span class=\"italic\">\r\n                                {{ rowData[\"operationalStatus\"] | formatSelectOption: equipmentStatuses }}\r\n                              </span>\r\n                            </div>\r\n                          </td>\r\n\r\n                          <td>\r\n                            <div>\r\n                              <a\r\n                                class=\"bold\"\r\n                                (click)=\"openEquipment(rowData)\"\r\n                                *ngIf=\"rowData['stockSn'] && !rowData['manufacturingBatchNumber']\"\r\n                              >\r\n                                {{ rowData[\"stockSn\"] }}\r\n                              </a>\r\n                              <a\r\n                                class=\"bold\"\r\n                                (click)=\"openManufacturingBatch(rowData)\"\r\n                                *ngIf=\"!rowData['stockSn'] && rowData['manufacturingBatchNumber']\"\r\n                              >\r\n                                {{ rowData[\"manufacturingBatchNumber\"] }}\r\n                              </a>\r\n                            </div>\r\n                            <div *ngIf=\"!rowData['stockBatchNumber']\">\r\n                              <span class=\"italic\">\r\n                                {{ rowData[\"operationalStatus\"] | formatSelectOption: equipmentStatuses }}\r\n                              </span>\r\n                            </div>\r\n                          </td>\r\n\r\n                          <td style=\"text-align: right;\">\r\n                            {{ rowData[\"stockQuantity\"] | formatNumber }}\r\n                          </td>\r\n\r\n                          <td *ngIf=\"withAlternatives\">\r\n                            {{ rowData[\"interchangeabilityText\"] }}\r\n                          </td>\r\n\r\n                          <td>\r\n                            <div>\r\n                              <div>\r\n                                <span class=\"bold\">\r\n                                  {{ rowData[\"siteText\"] }}\r\n                                </span>\r\n                              </div>\r\n                              <div>\r\n                                {{ rowData[\"warehouseText\"] }}\r\n                              </div>\r\n                            </div>\r\n                          </td>\r\n\r\n                          <td>\r\n                            <div>\r\n                              <div>\r\n                                <span class=\"bold\">\r\n                                  {{ rowData[\"areaText\"] }}\r\n                                </span>\r\n                              </div>\r\n                              <div>\r\n                                {{ rowData[\"storageBinText\"] }}\r\n                              </div>\r\n                            </div>\r\n                          </td>\r\n\r\n                          <td>\r\n                            <span class=\"bold\">\r\n                              {{ rowData[\"stockIssueDate\"] | date: \"shortDate\":\"\":translateService.currentLang }}\r\n                            </span>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-template>\r\n                    </p-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <p-overlayPanel\r\n    #opFilters\r\n    [appendTo]=\"'body'\"\r\n    class=\"aw-overlay\"\r\n    [dismissable]=\"false\"\r\n    (onShow)=\"filtersVisible = true\"\r\n    (onHide)=\"filtersVisible = false\"\r\n  >\r\n    <aw-stock-view-filter\r\n      *ngIf=\"showFilterOverlay && !!completeStockInformationTable && completeStockInformationTable.length > 0\"\r\n      [stockInformationTable]=\"completeStockInformationTable\"\r\n      (onFilter)=\"opFilters.hide(); filtersVisible = false; filterWithCriteria($event)\"\r\n    ></aw-stock-view-filter>\r\n  </p-overlayPanel>\r\n\r\n  <aw-dialog-select-location\r\n    *ngIf=\"isChangeLocationDisplayed\"\r\n    [(display)]=\"isChangeLocationDisplayed\"\r\n    [rows]=\"selectedStockInformations\"\r\n    [equipmentStatuses]=\"equipmentStatuses\"\r\n    [withAlternatives]=\"withAlternatives\"\r\n    (onChangeLocation)=\"onValidateChangeLocation($event)\"\r\n  ></aw-dialog-select-location>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/stock-view/form/stock-view-form.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/logistics/stock-view/form/stock-view-form.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .ui-table-scrollable-body {\n  max-height: 38rem !important; }\n\n::ng-deep .ui-treetable-scrollable-body {\n  max-height: 38rem !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stdmlldy9mb3JtL0Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZnJvbnRlbmRfYWVyb3dlYmIvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcc3RvY2stdmlld1xcZm9ybVxcc3RvY2stdmlldy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay12aWV3L2Zvcm0vc3RvY2stdmlldy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC51aS10YWJsZS1zY3JvbGxhYmxlLWJvZHkge1xyXG4gIG1heC1oZWlnaHQ6IDM4cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudWktdHJlZXRhYmxlLXNjcm9sbGFibGUtYm9keSB7XHJcbiAgbWF4LWhlaWdodDogMzhyZW0gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/logistics/stock-view/form/stock-view-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/logistics/stock-view/form/stock-view-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StockViewFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockViewFormComponent", function() { return StockViewFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/types/form-page-component */ "./src/app/shared/types/form-page-component.ts");
/* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/utils/number-utils */ "./src/app/shared/utils/number-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _stock_view_form_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./stock-view-form.service */ "./src/app/main/logistics/stock-view/form/stock-view-form.service.ts");
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

















var TreeNodeType;
(function (TreeNodeType) {
    TreeNodeType["SITE"] = "site";
    TreeNodeType["WAREHOUSE"] = "warehouse";
    TreeNodeType["ZONE"] = "zone";
})(TreeNodeType || (TreeNodeType = {}));
var StockViewFormComponent = /** @class */ (function (_super) {
    __extends(StockViewFormComponent, _super);
    function StockViewFormComponent(favoriteService, loaderService, messageService, serializationService, tabService, translateService, propertiesService, stockViewFormService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.translateService = translateService;
        _this.propertiesService = propertiesService;
        _this.stockViewFormService = stockViewFormService;
        _this.treeNodeType = TreeNodeType;
        _this.init();
        return _this;
    }
    StockViewFormComponent_1 = StockViewFormComponent;
    // ////////////////////////////////////////////////////////////////////////////
    StockViewFormComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].LOG_STOCK_VIEW_FORM;
    };
    // ////////////////////////////////////////////////////////////////////////////
    StockViewFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (this.componentData.objectId) {
            var input = this.serializationService.deserialize(this.componentData.objectId);
            this.date = input.date;
            this.withAlternatives = input.withAlternatives;
            this.stockViewTreeTable = input.data.map(function (node) { return _this.createSiteTreeNode(node); });
            if (this.stockViewTreeTable.length === 1) {
                this.stockViewTreeTable[0].expanded = true;
                this.selectedStockViewTreeNode = this.stockViewTreeTable[0];
                this.onSelectStockViewTreeNode(this.selectedStockViewTreeNode);
            }
        }
    };
    // ////////////////////////////////////////////////////////////////////////////
    StockViewFormComponent.prototype.customSort = function (event) {
        if (event.data) {
            event.data.sort(function (data1, data2) {
                var value1;
                var value2;
                var result;
                if (event.field === 'stockSn') {
                    value1 = data1.stockSn || data1.manufacturingBatchNumber;
                    value2 = data2.stockSn || data2.manufacturingBatchNumber;
                }
                else {
                    value1 = data1[event.field];
                    value2 = data2[event.field];
                }
                if (value1 === null && value2 !== null) {
                    result = -1;
                }
                else if (value1 !== null && value2 === null) {
                    result = 1;
                }
                else if (value1 === null && value2 === null) {
                    result = 0;
                }
                else if (typeof value1 === 'string' && typeof value2 === 'string') {
                    result = value1.localeCompare(value2);
                }
                else {
                    result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
                }
                return event.order * result;
            });
        }
    };
    StockViewFormComponent.prototype.onSelectStockViewTreeNode = function (node) {
        this.stockInformationTable = node.data.data.stockInformation.sort(function (x, y) {
            return x.pn.localeCompare(y.pn);
        });
        this.completeStockInformationTable = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.stockInformationTable);
        this.selectedStockInformations = [];
    };
    StockViewFormComponent.prototype.onUnselectStockViewTreeNode = function () {
        this.stockInformationTable = [];
        this.completeStockInformationTable = [];
    };
    StockViewFormComponent.prototype.openBatch = function (row) {
        var _this = this;
        var equip = {};
        equip.pnCode = row.pn;
        equip.batchNumber = row.stockBatchNumber;
        equip.bidoEquipmentAttributeList = [];
        equip.equipmentFunction = '';
        this.stockViewFormService.findBidoEquipmentByPnAndBatchNumber(equip).subscribe({
            next: function (result) {
                if (result) {
                    var data = {
                        id: _this.tabService.generateId(),
                        componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].LOG_PACKAGING_BATCH_FORM,
                        openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read
                    };
                    data.objectId = result.equipmentCode;
                    var labelKey = 'transaction.' + data.componentId;
                    _this.tabService.open(_this.tabService.create(data, labelKey, true));
                }
            }
        });
    };
    StockViewFormComponent.prototype.openEquipment = function (row) {
        var _this = this;
        this.loadStockInformationEquipment(row).subscribe({
            next: function (equipment) {
                if (equipment) {
                    var data = {
                        componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].FLE_EQUIPMENT_FORM,
                        id: _this.tabService.generateId(),
                        objectId: _this.serializationService.serialize({
                            equipmentCode: equipment.equipmentCode
                        }),
                        openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read
                    };
                    var labelKey = 'transaction.' + data.componentId;
                    _this.tabService.open(_this.tabService.create(data, labelKey, true));
                }
            }
        });
    };
    StockViewFormComponent.prototype.openManufacturingBatch = function (row) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].LOG_MANUFACTURING_BATCH_FORM,
            objectId: this.serializationService.serialize({ customerCode: row.manufacturingBatchNumber }),
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    StockViewFormComponent.prototype.openPn = function (row) {
        var data = {
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].ENG_PART_NUMBER_FORM,
            id: this.tabService.generateId(),
            objectId: row.pn,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    // ////////////////////////////////////////////////////////////////////////////
    StockViewFormComponent.prototype.calculateQuantity = function (stockInformation) {
        return stockInformation
            .filter(function (aStockInformation) { return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_15__["StringUtils"].isNullOrEmpty(aStockInformation.stockQuantity); })
            .map(function (aStockInformation) { return aStockInformation.stockQuantity; })
            .map(function (quantity) { return _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_14__["NumberUtils"].fromString(quantity); })
            .reduce(function (x, y) { return x + y; }, 0);
    };
    StockViewFormComponent.prototype.createSiteTreeNode = function (node) {
        var _this = this;
        return {
            data: { data: node, quantity: this.calculateQuantity(node.stockInformation), type: TreeNodeType.SITE },
            children: node.warehouseNodes.map(function (warehouseNode) { return _this.createWarehouseTreeNode(warehouseNode); })
        };
    };
    StockViewFormComponent.prototype.createWarehouseTreeNode = function (node) {
        var _this = this;
        return {
            data: { data: node, quantity: this.calculateQuantity(node.stockInformation), type: TreeNodeType.WAREHOUSE },
            children: node.zoneNodes.map(function (zoneNode) { return _this.createZoneTreeNode(zoneNode); })
        };
    };
    StockViewFormComponent.prototype.createZoneTreeNode = function (node) {
        return {
            data: { data: node, quantity: this.calculateQuantity(node.stockInformation), type: TreeNodeType.ZONE },
            children: []
        };
    };
    StockViewFormComponent.prototype.init = function () {
        this.stockInformationTable = [];
        this.stockViewTreeTable = [];
        this.equipmentStatuses = [];
        this.selectedStockInformations = [];
        this.selectedStockViewTreeNode = undefined;
        this.isChangeLocationDisplayed = false;
        this.loadEquipmentStatuses();
    };
    StockViewFormComponent.prototype.loadEquipmentStatuses = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__["GenericPropertyConstants"].OPERATIONAL_STATUS_MAP).subscribe(function (statuses) {
            _this.equipmentStatuses = statuses.sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
        });
    };
    StockViewFormComponent.prototype.loadStockInformationEquipment = function (rowData) {
        return this.stockViewFormService
            .findBidoEquipmentsByPnAndSn({
            pnCode: rowData.pn,
            sn: rowData.stockSn
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (equipments) { return (equipments.length > 0 ? equipments[0] : undefined); }));
    };
    StockViewFormComponent.prototype.changeLocation = function () {
        this.isChangeLocationDisplayed = true;
    };
    StockViewFormComponent.prototype.openFilters = function () {
        this.showFilterOverlay = !this.filtersVisible;
    };
    StockViewFormComponent.prototype.filterWithCriteria = function (event) {
        if (Object.keys(event).length === 0) {
            this.stockInformationTable = [];
            this.stockInformationTable = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.completeStockInformationTable);
        }
        else {
            this.stockInformationTable = this.completeStockInformationTable.filter(function (element) {
                for (var prop in event) {
                    if (prop === StockViewFormComponent_1.issueData && element[prop] && event[prop]) {
                        var currentDate = new Date(event[prop]).getTime();
                        var savedDate = new Date(element[prop]).getTime();
                        return currentDate < savedDate ? false : true;
                    }
                    else if (event[prop] && element[prop] !== event[prop]) {
                        return false;
                    }
                }
                return true;
            });
        }
    };
    StockViewFormComponent.prototype.onValidateChangeLocation = function (params) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__["ComponentConstants"].LOG_STOCK_MOVEMENTS_FORM,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__["ComponentOpenMode"].Read,
            objectId: JSON.stringify(params)
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    var StockViewFormComponent_1;
    // private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;
    StockViewFormComponent.issueData = 'stockIssueDate';
    StockViewFormComponent = StockViewFormComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-stock-view-form',
            template: __webpack_require__(/*! ./stock-view-form.component.html */ "./src/app/main/logistics/stock-view/form/stock-view-form.component.html"),
            styles: [__webpack_require__(/*! ./stock-view-form.component.scss */ "./src/app/main/logistics/stock-view/form/stock-view-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_7__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_8__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_11__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__["TabService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__["PropertiesService"],
            _stock_view_form_service__WEBPACK_IMPORTED_MODULE_16__["StockViewFormService"]])
    ], StockViewFormComponent);
    return StockViewFormComponent;
}(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_13__["FormPageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-view/form/stock-view-form.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/logistics/stock-view/form/stock-view-form.service.ts ***!
  \***************************************************************************/
/*! exports provided: StockViewFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockViewFormService", function() { return StockViewFormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-stock-mvt.api */ "./src/app/shared/api/bidt-stock-mvt.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/fleet-management.api */ "./src/app/shared/api/fleet-management.api.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
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







var StockViewFormService = /** @class */ (function (_super) {
    __extends(StockViewFormService, _super);
    function StockViewFormService(appConfigService, http, fleetManagementApi, bidtWarehouseApi, bidtStockMvtApi) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.fleetManagementApi = fleetManagementApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.bidtStockMvtApi = bidtStockMvtApi;
        return _this;
    }
    StockViewFormService.prototype.findBidoEquipmentsByPnAndSn = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes, input);
    };
    StockViewFormService.prototype.findBidtWarehouseById = function (warehouseId) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findBidtWarehouseById, warehouseId);
    };
    StockViewFormService.prototype.mmfCreateStockMvtLocationChange = function (stockMvtDtoList) {
        return _super.prototype.post.call(this, this.bidtStockMvtApi.mmfCreateStockMvtLocationChange, stockMvtDtoList);
    };
    StockViewFormService.prototype.findBidoEquipmentByPnAndBatchNumber = function (input) {
        return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentByPnAndBatchNumber, input);
    };
    StockViewFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_6__["AppConfigService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_4__["FleetManagementApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_3__["BidtWarehouseApi"],
            _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_2__["BidtStockMvtApi"]])
    ], StockViewFormService);
    return StockViewFormService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_5__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-view/search/stock-view-search.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/main/logistics/stock-view/search/stock-view-search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n  <div class=\"page-info\">\r\n    <div>\r\n      <h2 class=\"page-title\">\r\n        {{ \"transaction.\" + componentData.componentId | translate }}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"page-actions\">\r\n    <button\r\n      mat-icon-button\r\n      class=\"mat-elevation-z1\"\r\n      matTooltip=\"{{ 'global.showAllActionTooltip' | translate }}\"\r\n      matTooltipPosition=\"above\"\r\n      aria-label=\"Show all actions\"\r\n      [matMenuTriggerFor]=\"actions\"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions=\"matMenu\">\r\n      <button mat-menu-item (click)=\"updateFavoriteState()\">\r\n        {{ (isFavoriteEntry ? \"page.removeFromFavorites\" : \"page.addToFavorites\") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-wrapper\">\r\n  <div class=\"page-container\">\r\n    <div class=\"page-content\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-cell--12\">\r\n          <div class=\"grid-cell grid-cell--container\">\r\n            <div class=\"grid-cell-header\">\r\n              <div class=\"grid-cell-title-container\">\r\n                <h3 class=\"grid-cell-title\">{{ componentData.componentId + \".research\" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-cell-content\">\r\n              <div class=\"column\">\r\n                <div class=\"row\">\r\n                  <div class=\"form-group required\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".date\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-calendar\r\n                        showButtonBar=\"true\"\r\n                        [monthNavigator]=\"true\"\r\n                        [yearNavigator]=\"true\"\r\n                        [yearRange]=\"sessionService.calendarYearRange\"\r\n                        appendTo=\"body\"\r\n                        class=\"aw-calendar\"\r\n                        [dateFormat]=\"sessionService.dateFormatPrimeNG\"\r\n                        [locale]=\"sessionService.calendarFormat\"\r\n                        [readonlyInput]=\"true\"\r\n                        [(ngModel)]=\"searchCriteria.date\"\r\n                      ></p-calendar>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group required may-required\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".material\" | translate }} </label>\r\n\r\n                    <div class=\"form-control form-control-with-modal\">\r\n                      <div class=\"form-control-data\" (click)=\"openItemPnDialog()\">\r\n                        {{ searchCriteria.pnCode }}\r\n                      </div>\r\n\r\n                      <div *ngIf=\"searchCriteria.pnCode\" class=\"btn-clear-wrapper\">\r\n                        <i\r\n                          class=\"ui-dropdown-clear-icon pi pi-times aw-icon btn-clear\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"clearItemPn()\"\r\n                        ></i>\r\n                      </div>\r\n                      <div class=\"btn-search-wrapper\">\r\n                        <i\r\n                          class=\"fa fa-fw fa-search aw-icon btn-search\"\r\n                          aria-hidden=\"true\"\r\n                          (click)=\"openItemPnDialog()\"\r\n                        ></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-label\">{{ componentData.componentId + \".itsAlternatives\" | translate }}</label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-checkbox\r\n                        binary=\"true\"\r\n                        class=\"aw-checkbox\"\r\n                        [(ngModel)]=\"searchCriteria.withAlternatives\"\r\n                      ></p-checkbox>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\"></div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"form-group required may-required\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".site\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [showClear]=\"true\"\r\n                        [options]=\"sites\"\r\n                        [(ngModel)]=\"searchCriteria.siteId\"\r\n                        (onChange)=\"onChangeSiteOrWarehouseCategory()\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group required may-required flex--2\" style=\"height: 47px;\">\r\n                    <label class=\"form-label\">\r\n                      {{ selectedWarehouseCategory | formatSelectOption: warehouseCategories }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control aw-selectbutton-wrapper aw-selectbutton-with-dropdown\">\r\n                      <p-selectButton\r\n                        [options]=\"warehouseCategories\"\r\n                        [(ngModel)]=\"selectedWarehouseCategory\"\r\n                        (onChange)=\"onChangeSiteOrWarehouseCategory()\"\r\n                      ></p-selectButton>\r\n\r\n                      <p-dropdown\r\n                        appendTo=\"body\"\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [options]=\"warehouses\"\r\n                        [showClear]=\"true\"\r\n                        [(ngModel)]=\"searchCriteria.warehouseId\"\r\n                        (onChange)=\"onChangeWarehouse()\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group required may-required\">\r\n                    <label class=\"form-label\"> {{ componentData.componentId + \".zone\" | translate }} </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [options]=\"areas\"\r\n                        [showClear]=\"true\"\r\n                        [(ngModel)]=\"searchCriteria.areaId\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group \">\r\n                    <label class=\"form-label\">\r\n                      {{ componentData.componentId + \".storageBin\" | translate }}\r\n                    </label>\r\n\r\n                    <div class=\"form-control\">\r\n                      <p-dropdown\r\n                        class=\"aw-dropdown fixed-width\"\r\n                        placeholder=\"&nbsp;\"\r\n                        [options]=\"storageBins\"\r\n                        [showClear]=\"true\"\r\n                        [(ngModel)]=\"searchCriteria.storageBinId\"\r\n                      ></p-dropdown>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row flex-row--justify-end\">\r\n                  <div class=\"search-actions\">\r\n                    <button\r\n                      appKeyPress\r\n                      mat-raised-button\r\n                      color=\"primary\"\r\n                      type=\"button\"\r\n                      [keyCode]=\"'Enter'\"\r\n                      (click)=\"calculate()\"\r\n                      (keyPress)=\"calculate()\"\r\n                    >\r\n                      {{ componentData.componentId + \".toCalculate\" | translate }}\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-search-pn\r\n    [showPartTypeSelection]=\"true\"\r\n    [(display)]=\"itemPnDialogVisible\"\r\n    (onSelected)=\"onSelectItemPn($event)\"\r\n    *ngIf=\"itemPnDialogVisible\"\r\n  ></aw-dialog-search-pn>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/logistics/stock-view/search/stock-view-search.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/main/logistics/stock-view/search/stock-view-search.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StockViewSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockViewSearchComponent", function() { return StockViewSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/constants/aw-properties-constants */ "./src/app/shared/constants/aw-properties-constants.ts");
/* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/constants/component-constants */ "./src/app/shared/constants/component-constants.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/enums/component-open-mode.enum */ "./src/app/shared/enums/component-open-mode.enum.ts");
/* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/favorite.service */ "./src/app/shared/services/favorite.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
/* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/serialization.service */ "./src/app/shared/services/serialization.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/tab.service */ "./src/app/shared/services/tab.service.ts");
/* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/types/page-component */ "./src/app/shared/types/page-component.ts");
/* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/utils/list-utils */ "./src/app/shared/utils/list-utils.ts");
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ "./src/app/shared/utils/string-utils.ts");
/* harmony import */ var _stock_view_search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stock-view-search.service */ "./src/app/main/logistics/stock-view/search/stock-view-search.service.ts");
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
















var StockViewSearchComponent = /** @class */ (function (_super) {
    __extends(StockViewSearchComponent, _super);
    function StockViewSearchComponent(favoriteService, loaderService, messageService, serializationService, tabService, sessionService, propertiesService, stockViewSearchService) {
        var _this = _super.call(this, _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Write, favoriteService, loaderService, messageService, serializationService, tabService) || this;
        _this.sessionService = sessionService;
        _this.propertiesService = propertiesService;
        _this.stockViewSearchService = stockViewSearchService;
        _this.awPropertiesConstants = _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__["AWPropertiesConstants"];
        _this.init();
        return _this;
    }
    // ////////////////////////////////////////////////////////////////////////////
    StockViewSearchComponent.prototype.getComponentName = function () {
        return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_STOCK_VIEW_SEARCH;
    };
    // ////////////////////////////////////////////////////////////////////////////
    StockViewSearchComponent.prototype.calculate = function () {
        var _this = this;
        if (this.searchCriteria.date &&
            (!_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].isNullOrEmpty(this.searchCriteria.pnCode) ||
                (this.searchCriteria.siteId && this.searchCriteria.warehouseId && this.searchCriteria.areaId))) {
            this.stockViewSearchService.loadStockView(this.searchCriteria).subscribe(function (stockView) {
                if (_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__["ListUtils"].isNullOrEmpty(stockView)) {
                    _this.messageService.showWarningMessage(_this.getTranslateKey('noResult'));
                }
                else {
                    _this.openStockView(stockView);
                }
            });
        }
        else {
            this.messageService.showWarningMessage(this.getTranslateKey('missingCriteria'));
        }
    };
    StockViewSearchComponent.prototype.clearItemPn = function () {
        this.searchCriteria.pnCode = undefined;
    };
    StockViewSearchComponent.prototype.onChangeSiteOrWarehouseCategory = function () {
        this.unselectWarehouse();
        this.unselectArea();
        if (this.searchCriteria.siteId) {
            this.loadWareHouses(this.searchCriteria.siteId, this.selectedWarehouseCategory);
        }
    };
    StockViewSearchComponent.prototype.onChangeWarehouse = function () {
        this.unselectArea();
        if (this.searchCriteria.warehouseId) {
            this.loadAreas(this.searchCriteria.warehouseId);
        }
    };
    StockViewSearchComponent.prototype.onSelectItemPn = function (pn) {
        this.searchCriteria.pnCode = pn.pnCode;
    };
    StockViewSearchComponent.prototype.openItemPnDialog = function () {
        this.itemPnDialogVisible = true;
    };
    // ////////////////////////////////////////////////////////////////////////////
    StockViewSearchComponent.prototype.init = function () {
        this.searchCriteria = {
            date: new Date()
        };
        this.areas = [];
        this.sites = [];
        this.storageBins = [];
        this.warehouses = [];
        this.warehouseCategories = [];
        this.selectedWarehouseCategory = undefined;
        this.itemPnDialogVisible = false;
        this.loadSites();
        this.loadUserSiteId();
        this.loadWarehouseCategories();
    };
    StockViewSearchComponent.prototype.loadAreas = function (warehouseId) {
        var _this = this;
        this.stockViewSearchService.findBidtWarehouseById(warehouseId).subscribe({
            next: function (warehouse) {
                _this.areas = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_13__["ListUtils"].orEmpty(warehouse.bidtStorageBinDTOs)
                    .map(function (area) {
                    return {
                        label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_14__["StringUtils"].orEmpty(area.sbNumber) + (area.sbDescription ? " - " + area.sbDescription : ''),
                        value: area.id
                    };
                })
                    .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
            }
        });
    };
    StockViewSearchComponent.prototype.loadSites = function () {
        var _this = this;
        this.stockViewSearchService.findAllBireSite().subscribe({
            next: function (sites) {
                _this.sites = sites
                    .map(function (site) {
                    return {
                        label: site.siteCode + " - " + site.siteName,
                        value: site.siteId
                    };
                })
                    .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
            }
        });
    };
    StockViewSearchComponent.prototype.loadUserSiteId = function () {
        var _this = this;
        this.sessionService.getUserSiteId().subscribe({
            next: function (site) {
                if (site && site.siteId) {
                    _this.searchCriteria.siteId = site.siteId;
                    _this.loadUserWarehouseId(site.siteId);
                }
            }
        });
    };
    StockViewSearchComponent.prototype.loadUserWarehouseId = function (siteId) {
        var _this = this;
        this.sessionService.getUserWarehouseId().subscribe({
            next: function (warehouse) {
                if (warehouse && warehouse.wareHouseId && warehouse.whCategory) {
                    _this.searchCriteria.warehouseId = warehouse.wareHouseId;
                    _this.selectedWarehouseCategory = warehouse.whCategory;
                    _this.loadWareHouses(siteId, _this.selectedWarehouseCategory);
                    _this.loadAreas(_this.searchCriteria.warehouseId);
                }
            }
        });
    };
    StockViewSearchComponent.prototype.loadWarehouseCategories = function () {
        var _this = this;
        this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__["GenericPropertyConstants"].WAREHOUSE_CATEGORY_MAP).subscribe({
            next: function (warehouseCategories) {
                _this.warehouseCategories = warehouseCategories.sort(function (s1, s2) { return s1.value.localeCompare(s2.value); });
                var warehouseCategory = _this.warehouseCategories.length > 0 ? _this.warehouseCategories[0].value : undefined;
                _this.selectedWarehouseCategory = warehouseCategory;
            }
        });
    };
    StockViewSearchComponent.prototype.loadWareHouses = function (site, warehouseCategory) {
        var _this = this;
        this.stockViewSearchService.getWarehousesBySiteId(site).subscribe({
            next: function (warehouses) {
                _this.warehouses = warehouses
                    .filter(function (warehouse) { return warehouse.whCategory === warehouseCategory; })
                    .map(function (warehouse) {
                    return {
                        label: warehouse.whCode + " - " + warehouse.whName,
                        value: warehouse.wareHouseId
                    };
                })
                    .sort(function (s1, s2) { return s1.label.localeCompare(s2.label); });
            }
        });
    };
    StockViewSearchComponent.prototype.openStockView = function (stockView) {
        var data = {
            id: this.tabService.generateId(),
            componentId: _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__["ComponentConstants"].LOG_STOCK_VIEW_FORM,
            objectId: this.searchCriteria
                ? this.serializationService.serialize({
                    data: stockView,
                    date: this.searchCriteria.date,
                    withAlternatives: !!this.searchCriteria.withAlternatives
                })
                : undefined,
            openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__["ComponentOpenMode"].Read
        };
        var labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
    };
    StockViewSearchComponent.prototype.unselectArea = function () {
        this.areas = [];
        this.searchCriteria.areaId = undefined;
    };
    StockViewSearchComponent.prototype.unselectWarehouse = function () {
        this.warehouses = [];
        this.searchCriteria.warehouseId = undefined;
    };
    StockViewSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aw-stock-view-search',
            template: __webpack_require__(/*! ./stock-view-search.component.html */ "./src/app/main/logistics/stock-view/search/stock-view-search.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteService"],
            _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _shared_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
            _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_9__["SerializationService"],
            _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_11__["TabService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_8__["PropertiesService"],
            _stock_view_search_service__WEBPACK_IMPORTED_MODULE_15__["StockViewSearchService"]])
    ], StockViewSearchComponent);
    return StockViewSearchComponent;
}(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_12__["PageComponent"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-view/search/stock-view-search.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/logistics/stock-view/search/stock-view-search.service.ts ***!
  \*******************************************************************************/
/*! exports provided: StockViewSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockViewSearchService", function() { return StockViewSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/api/bidt-site.api */ "./src/app/shared/api/bidt-site.api.ts");
/* harmony import */ var _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/api/bidt-stock-mvt.api */ "./src/app/shared/api/bidt-stock-mvt.api.ts");
/* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/api/bidt-warehouse.api */ "./src/app/shared/api/bidt-warehouse.api.ts");
/* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/constants/generic-property-constants */ "./src/app/shared/constants/generic-property-constants.ts");
/* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/http/abstract-aw-http */ "./src/app/shared/http/abstract-aw-http.ts");
/* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/app-config.service */ "./src/app/shared/services/app-config.service.ts");
/* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/properties.service */ "./src/app/shared/services/properties.service.ts");
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









var StockViewSearchService = /** @class */ (function (_super) {
    __extends(StockViewSearchService, _super);
    function StockViewSearchService(http, bidtSiteApi, bidtStockMvtApi, bidtWarehouseApi, propertiesService, appConfigService) {
        var _this = _super.call(this, http, appConfigService) || this;
        _this.bidtSiteApi = bidtSiteApi;
        _this.bidtStockMvtApi = bidtStockMvtApi;
        _this.bidtWarehouseApi = bidtWarehouseApi;
        _this.propertiesService = propertiesService;
        return _this;
    }
    StockViewSearchService.prototype.loadStockView = function (input) {
        return _super.prototype.post.call(this, this.bidtStockMvtApi.loadStockView, input);
    };
    StockViewSearchService.prototype.findBidtWarehouseById = function (id) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findBidtWarehouseById, id);
    };
    StockViewSearchService.prototype.findAllBireSite = function () {
        return _super.prototype.post.call(this, this.bidtSiteApi.findAll);
    };
    StockViewSearchService.prototype.getWarehousesBySiteId = function (siteId) {
        return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, siteId);
    };
    StockViewSearchService.prototype.getWarehouseCategoryMap = function () {
        return this.propertiesService.getValue(_shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__["GenericPropertyConstants"].WAREHOUSE_CATEGORY_MAP);
    };
    StockViewSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_2__["BidtSiteApi"],
            _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_3__["BidtStockMvtApi"],
            _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_4__["BidtWarehouseApi"],
            _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_8__["PropertiesService"],
            _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__["AppConfigService"]])
    ], StockViewSearchService);
    return StockViewSearchService;
}(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__["AbstractAwHttpService"]));



/***/ }),

/***/ "./src/app/main/logistics/stock-view/stock-view.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/logistics/stock-view/stock-view.module.ts ***!
  \****************************************************************/
/*! exports provided: StockViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockViewModule", function() { return StockViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/treetable.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_treetable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/angular-common-shared.module */ "./src/app/shared/angular-common-shared.module.ts");
/* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/angular-generic-templates-shared-module */ "./src/app/shared/angular-generic-templates-shared-module.ts");
/* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/app-common-shared.module */ "./src/app/shared/app-common-shared.module.ts");
/* harmony import */ var _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/dialog-search-material/dialog-search-material.module */ "./src/app/shared/components/dialog-search-material/dialog-search-material.module.ts");
/* harmony import */ var _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/dialog-search-pn/dialog-search-pn.module */ "./src/app/shared/components/dialog-search-pn/dialog-search-pn.module.ts");
/* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ "./src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts");
/* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/modal/modal.module */ "./src/app/shared/components/modal/modal.module.ts");
/* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../dynamic-component-loader/dynamic-component-loader.module */ "./src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts");
/* harmony import */ var _stock_movements_form_form_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../stock-movements/form/form.service */ "./src/app/main/logistics/stock-movements/form/form.service.ts");
/* harmony import */ var _dialog_select_location_stock_dialog_select_location_stock_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dialog-select-location-stock/dialog-select-location-stock.component */ "./src/app/main/logistics/stock-view/dialog-select-location-stock/dialog-select-location-stock.component.ts");
/* harmony import */ var _form_stock_view_filter_stock_view_filter_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form/stock-view-filter/stock-view-filter.component */ "./src/app/main/logistics/stock-view/form/stock-view-filter/stock-view-filter.component.ts");
/* harmony import */ var _form_stock_view_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./form/stock-view-form.component */ "./src/app/main/logistics/stock-view/form/stock-view-form.component.ts");
/* harmony import */ var _form_stock_view_form_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./form/stock-view-form.service */ "./src/app/main/logistics/stock-view/form/stock-view-form.service.ts");
/* harmony import */ var _search_stock_view_search_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./search/stock-view-search.component */ "./src/app/main/logistics/stock-view/search/stock-view-search.component.ts");
/* harmony import */ var _search_stock_view_search_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./search/stock-view-search.service */ "./src/app/main/logistics/stock-view/search/stock-view-search.service.ts");
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
    primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"],
    primeng_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"],
    primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
    primeng_chart__WEBPACK_IMPORTED_MODULE_2__["ChartModule"],
    primeng_treetable__WEBPACK_IMPORTED_MODULE_10__["TreeTableModule"],
    primeng_selectbutton__WEBPACK_IMPORTED_MODULE_7__["SelectButtonModule"],
    primeng_checkbox__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
    primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__["OverlayPanelModule"],
    primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"]
];
var INTERNAL_MODULES = [_shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_14__["DialogSearchMaterialModule"], _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_15__["DialogSearchPnModule"], _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_17__["ModalModule"]];
/******************************************************************************
 * Components
 *************************************************************************** */
var COMPONENTS = [];
var DYNAMIC_COMPONENTS = [
    _form_stock_view_form_component__WEBPACK_IMPORTED_MODULE_22__["StockViewFormComponent"],
    _search_stock_view_search_component__WEBPACK_IMPORTED_MODULE_24__["StockViewSearchComponent"],
    _dialog_select_location_stock_dialog_select_location_stock_component__WEBPACK_IMPORTED_MODULE_20__["DialogSelectLocationStockComponent"],
    _form_stock_view_filter_stock_view_filter_component__WEBPACK_IMPORTED_MODULE_21__["StockViewFilterComponent"]
];
/******************************************************************************
 * Services
 *************************************************************************** */
var SERVICES = [_form_stock_view_form_service__WEBPACK_IMPORTED_MODULE_23__["StockViewFormService"], _search_stock_view_search_service__WEBPACK_IMPORTED_MODULE_25__["StockViewSearchService"], _stock_movements_form_form_service__WEBPACK_IMPORTED_MODULE_19__["FormService"]];
var StockViewModule = /** @class */ (function () {
    function StockViewModule() {
    }
    StockViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
            imports: __spread([
                _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_11__["AngularCommonSharedModule"],
                _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_12__["AngularGenericTemplatesSharedModule"],
                _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_13__["AppCommonSharedModule"],
                _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_16__["ManageSearchCriteriaModule"],
                _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_18__["DynamicComponentLoaderModule"].forChild(DYNAMIC_COMPONENTS)
            ], EXTERNAL_MODULES, INTERNAL_MODULES),
            providers: __spread(SERVICES)
        })
    ], StockViewModule);
    return StockViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=logistics-stock-view-stock-view-module.js.map