(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['logistics-stock-movements-stock-movements-module'],
  {
    /***/ './node_modules/primeng/card.js':
      /*!**************************************!*\
  !*** ./node_modules/primeng/card.js ***!
  \**************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /* Shorthand */

        function __export(m) {
          for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
        Object.defineProperty(exports, '__esModule', { value: true });
        __export(__webpack_require__(/*! ./components/card/card */ './node_modules/primeng/components/card/card.js'));

        /***/
      },

    /***/ './src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts':
      /*!********************************************************************************!*\
  !*** ./src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts ***!
  \********************************************************************************/
      /*! exports provided: DeliveryFolderSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DeliveryFolderSearchService',
          function() {
            return DeliveryFolderSearchService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_api_bidt_delivery_folder_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/api/bidt-delivery-folder.api */ './src/app/shared/api/bidt-delivery-folder.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_df_type_operation_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/api/bidt-df-type-operation.api */ './src/app/shared/api/bidt-df-type-operation.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/api/bidt-site.api */ './src/app/shared/api/bidt-site.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
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

        var DeliveryFolderSearchService = /** @class */ (function(_super) {
          __extends(DeliveryFolderSearchService, _super);
          function DeliveryFolderSearchService(
            http,
            appConfigService,
            propertiesService,
            bidtSiteApi,
            bidtWarehouseApi,
            bidtDeliveryFolderApi,
            translateService,
            bidtDfTypeOperationApi,
            fleetManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.propertiesService = propertiesService;
            _this.bidtSiteApi = bidtSiteApi;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            _this.bidtDeliveryFolderApi = bidtDeliveryFolderApi;
            _this.translateService = translateService;
            _this.bidtDfTypeOperationApi = bidtDfTypeOperationApi;
            _this.fleetManagementApi = fleetManagementApi;
            return _this;
          }
          DeliveryFolderSearchService.prototype.addOrUpdateReceiptFolder = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.addOrUpdateReceiptFolder, input);
          };
          DeliveryFolderSearchService.prototype.findAllBireSite = function() {
            return _super.prototype.post.call(this, this.bidtSiteApi.findAll);
          };
          DeliveryFolderSearchService.prototype.findAllSiteList = function() {
            return _super.prototype.post.call(this, this.bidtSiteApi.findSiteByUseCaseMmReceipt);
          };
          DeliveryFolderSearchService.prototype.loadStatusList = function(folderStatusMap) {
            return this.propertiesService.getValue(folderStatusMap);
          };
          DeliveryFolderSearchService.prototype.loadCriticalityList = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__['GenericPropertyConstants']
                .LOGISTICAL_CRITICALITY_MAP
            );
          };
          DeliveryFolderSearchService.prototype.getWarehouseCategoryMap = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__['GenericPropertyConstants']
                .WAREHOUSE_CATEGORY_MAP
            );
          };
          DeliveryFolderSearchService.prototype.getWorkshopTypeMap = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_8__['GenericPropertyConstants']
                .WORKSHOP_TYPE_MAP
            );
          };
          DeliveryFolderSearchService.prototype.getWarehousesBySiteId = function(siteId) {
            if (siteId) {
              return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, siteId);
            } else {
              return _super.prototype.post.call(this, this.bidtWarehouseApi.findAll);
            }
          };
          DeliveryFolderSearchService.prototype.loadProviderList = function() {
            return [
              { value: '0', label: '' + this.translateService.instant('GoodsReceiptFormComponent.internal') },
              { value: '1', label: '' + this.translateService.instant('GoodsReceiptFormComponent.external') }
            ];
          };
          DeliveryFolderSearchService.prototype.loadCreationChoiceList = function() {
            return [
              { value: '0', label: '' + this.translateService.instant('GoodsReceiptFormComponent.currentPackage') },
              { value: '1', label: '' + this.translateService.instant('GoodsReceiptFormComponent.newPackage') },
              { value: '2', label: '' + this.translateService.instant('GoodsReceiptFormComponent.without') }
            ];
          };
          DeliveryFolderSearchService.prototype.loadShipmentPackageChoiceList = function() {
            return [
              { value: '0', label: '' + this.translateService.instant('GoodsReceiptFormComponent.newPackage') },
              { value: '1', label: '' + this.translateService.instant('GoodsReceiptFormComponent.without') }
            ];
          };
          DeliveryFolderSearchService.prototype.loadCreationChoiceListPackage = function() {
            return [
              { value: '0', label: '' + this.translateService.instant('GoodsReceiptFormComponent.generated') },
              { value: '1', label: '' + this.translateService.instant('GoodsReceiptFormComponent.enter') }
            ];
          };
          DeliveryFolderSearchService.prototype.loadCreationChoiceListPackageNumber = function() {
            return [
              { value: '0', label: '' + this.translateService.instant('GoodsReceiptFormComponent.generatedPackage') },
              { value: '1', label: '' + this.translateService.instant('GoodsReceiptFormComponent.enterPackage') }
            ];
          };
          DeliveryFolderSearchService.prototype.loadCreationChoiceListPackagingNumber = function() {
            return [
              { value: '0', label: '' + this.translateService.instant('GoodsReceiptFormComponent.generatedPackaging') },
              {
                value: '1',
                label: '' + this.translateService.instant('GoodsReceiptFormComponent.enterPackagingNumber')
              }
            ];
          };
          DeliveryFolderSearchService.prototype.loadCreationChoiceListItem = function() {
            return [
              { value: '0', label: '' + this.translateService.instant('GoodsReceiptFormComponent.currentItem') },
              { value: '1', label: '' + this.translateService.instant('GoodsReceiptFormComponent.newItem') }
            ];
          };
          DeliveryFolderSearchService.prototype.loadCreationAssetChoice = function() {
            return [
              { value: '0', label: '' + this.translateService.instant('GoodsReceiptFormComponent.unknowAsset') },
              { value: '1', label: '' + this.translateService.instant('GoodsReceiptFormComponent.knowAsset') }
            ];
          };
          DeliveryFolderSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_10__['AppConfigService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__['PropertiesService'],
                _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_5__['BidtSiteApi'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_6__['BidtWarehouseApi'],
                _shared_api_bidt_delivery_folder_api__WEBPACK_IMPORTED_MODULE_3__['BidtDeliveryFolderApi'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateService'],
                _shared_api_bidt_df_type_operation_api__WEBPACK_IMPORTED_MODULE_4__['BidtDfTypeOperationApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_7__['FleetManagementApi']
              ])
            ],
            DeliveryFolderSearchService
          );
          return DeliveryFolderSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_9__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/dialog-add-package-shipment/dialog-add-package-shipment.component.html':
      /*!****************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/dialog-add-package-shipment/dialog-add-package-shipment.component.html ***!
  \****************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="column">\r\n      <div class="row">\r\n        <div class="form-group">\r\n          <div class="form-control aw-selectbutton-wrapper">\r\n            <p-selectButton\r\n              [(ngModel)]="selectedChoicePackage"\r\n              [options]="choiceListPackage"\r\n              (onChange)="resetChoicePackage()"\r\n            ></p-selectButton>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="section" *ngIf="selectedChoicePackage === component.CURRENT_PACKAGE">\r\n        <div class="row">\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ getComponentName() + ".packageNumber" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                class="aw-dropdown fixed-width"\r\n                placeholder="&nbsp;"\r\n                [showClear]="true"\r\n                [(ngModel)]="selectedPackage"\r\n                [options]="packageListDisplay"\r\n                appendTo="body"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section" *ngIf="selectedChoicePackage === component.NEW_PACKAGE">\r\n        <div class="row">\r\n          <div class="form-group">\r\n            <div class="form-control aw-selectbutton-wrapper">\r\n              <p-selectButton\r\n                [(ngModel)]="selectedChoice"\r\n                [options]="choiceList"\r\n                (onChange)="resetChoice()"\r\n              ></p-selectButton>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group required" *ngIf="selectedChoice === component.ENTER">\r\n            <label class="form-label">{{ getComponentName() + ".packageNumber" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <input type="text" class="aw-input" [(ngModel)]="externalPackageCode" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="row">\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ getComponentName() + ".packageType" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                class="aw-dropdown fixed-width"\r\n                [showClear]="true"\r\n                placeholder="&nbsp;"\r\n                [(ngModel)]="selectedPackageType"\r\n                [options]="packagesTypesList"\r\n                (onChange)="packageTypeChange()"\r\n                appendTo="body"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="row">\r\n          <div class="form-group">\r\n            <label class="form-label">\r\n              {{ getComponentName() + ".weight" | translate }}\r\n            </label>\r\n\r\n            <div class="form-control">\r\n              <input type="number" class="aw-input" [(ngModel)]="packageInput.weight" />\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <label class="form-label">\r\n              {{ getComponentName() + ".unit" | translate }}\r\n            </label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                class="aw-dropdown fixed-width"\r\n                [showClear]="true"\r\n                placeholder="&nbsp;"\r\n                [(ngModel)]="packageInput.weightUnit"\r\n                [options]="unitWeightList"\r\n                appendTo="body"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="row">\r\n          <div class="form-group">\r\n            <label class="form-label">\r\n              {{ getComponentName() + ".length" | translate }}\r\n            </label>\r\n\r\n            <div class="form-control">\r\n              <input type="number" class="aw-input" [disabled]="disableLength" [(ngModel)]="packageInput.length" />\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <label class="form-label">\r\n              {{ getComponentName() + ".unit" | translate }}\r\n            </label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                class="aw-dropdown fixed-width"\r\n                [showClear]="true"\r\n                placeholder="&nbsp;"\r\n                [(ngModel)]="packageInput.lengthUnit"\r\n                [options]="unitLengthList"\r\n                [disabled]="disableLength"\r\n                appendTo="body"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="row">\r\n          <div class="form-group">\r\n            <label class="form-label">\r\n              {{ getComponentName() + ".width" | translate }}\r\n            </label>\r\n\r\n            <div class="form-control">\r\n              <input type="number" class="aw-input" [disabled]="disableWidth" [(ngModel)]="packageInput.width" />\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <label class="form-label">\r\n              {{ getComponentName() + ".unit" | translate }}\r\n            </label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                class="aw-dropdown fixed-width"\r\n                [showClear]="true"\r\n                placeholder="&nbsp;"\r\n                [(ngModel)]="packageInput.widthUnit"\r\n                [options]="unitLengthList"\r\n                [disabled]="disableWidth"\r\n                appendTo="body"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="row">\r\n          <div class="form-group">\r\n            <label class="form-label">\r\n              {{ getComponentName() + ".height" | translate }}\r\n            </label>\r\n\r\n            <div class="form-control">\r\n              <input type="number" class="aw-input" [disabled]="disableHeight" [(ngModel)]="packageInput.height" />\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <label class="form-label">\r\n              {{ getComponentName() + ".unit" | translate }}\r\n            </label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                class="aw-dropdown fixed-width"\r\n                [showClear]="true"\r\n                placeholder="&nbsp;"\r\n                [(ngModel)]="packageInput.heightUnit"\r\n                [options]="unitLengthList"\r\n                [disabled]="disableHeight"\r\n                appendTo="body"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="section-content" *ngIf="calculateVolume() && showVolume()">\r\n          <div class="row">\r\n            <div class="form-group">\r\n              <h3>\r\n                <span class="bold italic">\r\n                  {{ getComponentName() + ".volume" | translate }}: {{ calculateVolume() }} {{ getVolumnUnit() }}\r\n                  <sup>{{ component.ROOTS_VALUE }}</sup>\r\n                </span>\r\n              </h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n\r\n    <button\r\n      type="button"\r\n      color="primary"\r\n      mat-raised-button\r\n      (click)="validate()"\r\n      [disabled]="\r\n        (!selectedPackage && selectedChoicePackage === component.CURRENT_PACKAGE) ||\r\n        (selectedChoicePackage === component.NEW_PACKAGE && !selectedPackageType)\r\n      "\r\n    >\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/dialog-add-package-shipment/dialog-add-package-shipment.component.scss':
      /*!****************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/dialog-add-package-shipment/dialog-add-package-shipment.component.scss ***!
  \****************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .scan {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  margin-bottom: 4rem; }\n  :host .scan i {\n    cursor: pointer;\n    font-size: 12rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stbW92ZW1lbnRzL2Zvcm0vZGlhbG9nLWFkZC1wYWNrYWdlLXNoaXBtZW50L2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxsb2dpc3RpY3NcXHN0b2NrLW1vdmVtZW50c1xcZm9ybVxcZGlhbG9nLWFkZC1wYWNrYWdlLXNoaXBtZW50XFxkaWFsb2ctYWRkLXBhY2thZ2Utc2hpcG1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7RUFOdkI7SUFTTSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1tb3ZlbWVudHMvZm9ybS9kaWFsb2ctYWRkLXBhY2thZ2Utc2hpcG1lbnQvZGlhbG9nLWFkZC1wYWNrYWdlLXNoaXBtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5zY2FuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxMnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/dialog-add-package-shipment/dialog-add-package-shipment.component.ts':
      /*!**************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/dialog-add-package-shipment/dialog-add-package-shipment.component.ts ***!
  \**************************************************************************************************************************/
      /*! exports provided: DialogAddPackageShipmentComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogAddPackageShipmentComponent',
          function() {
            return DialogAddPackageShipmentComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../goods-receipt/delivery-folder-search.service */ './src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
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

        var DialogAddPackageShipmentComponent = /** @class */ (function(_super) {
          __extends(DialogAddPackageShipmentComponent, _super);
          function DialogAddPackageShipmentComponent(propertiesService, logisticsService, deliveryFolderSearchService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Read,
                'DialogAddPackageShipmentComponent'
              ) || this;
            _this.propertiesService = propertiesService;
            _this.logisticsService = logisticsService;
            _this.deliveryFolderSearchService = deliveryFolderSearchService;
            _this.searchPnDialogVisible = false;
            _this.createWithPackage = true;
            _this.isGenerated = true;
            _this.component = DialogAddPackageShipmentComponent_1;
            _this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.selectedPackage = undefined;
            return _this;
          }
          DialogAddPackageShipmentComponent_1 = DialogAddPackageShipmentComponent;
          DialogAddPackageShipmentComponent.prototype.validate = function() {
            if (this.selectedPackage) {
              var input = {
                bidtPackageDTO: this.selectedPackage,
                isGenerated: this.isGenerated,
                createWithPackage: this.createWithPackage
              };
              this.onCreate.emit(input);
              this.closeDialog();
            } else {
              var packageDTO = {
                externalPackageCode: this.externalPackageCode,
                packageType: this.selectedPackageType.packageType,
                height: this.packageInput.height,
                heightUnit: this.packageInput.heightUnit,
                width: this.packageInput.width,
                widthUnit: this.packageInput.widthUnit,
                length: this.packageInput.length,
                lengthUnit: this.packageInput.lengthUnit,
                weight: this.packageInput.weight,
                weightUnit: this.packageInput.weightUnit,
                volume: this.calculateVolume().toString()
              };
              var input = {
                bidtPackageDTO: packageDTO,
                isGenerated: this.isGenerated,
                createWithPackage: this.createWithPackage
              };
              this.onCreate.emit(input);
              this.closeDialog();
            }
          };
          DialogAddPackageShipmentComponent.prototype.ngOnInit = function() {
            this.packageInput = {};
            this.disableLength = false;
            this.disableWidth = false;
            this.disableHeight = false;
            this.loadDropDowns();
          };
          DialogAddPackageShipmentComponent.prototype.loadDropDowns = function() {
            var _this = this;
            var packageTypes = this.propertiesService.getFullPackageTypeMap();
            var lengthUnit = this.logisticsService.fetchLengthUnitMap();
            var weightUnit = this.logisticsService.fetchWeightUnitMap();
            this.loadpackageList();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['forkJoin'])({
              packageTypes: packageTypes,
              lengthUnit: lengthUnit,
              weightUnit: weightUnit
            }).subscribe({
              next: function(results) {
                _this.packagesTypesList = results.packageTypes;
                _this.unitLengthList = results.lengthUnit;
                _this.unitWeightList = results.weightUnit;
                _this.choiceList = _this.deliveryFolderSearchService.loadCreationChoiceListPackage();
                _this.selectedChoice = _this.choiceList && _this.choiceList.length ? _this.choiceList[0].value : '';
                _this.choiceListPackage = _this.deliveryFolderSearchService.loadCreationChoiceList();
                _this.selectedChoicePackage =
                  _this.choiceListPackage && _this.choiceListPackage.length ? _this.choiceListPackage[1].value : '';
              }
            });
          };
          DialogAddPackageShipmentComponent.prototype.loadpackageList = function() {
            var _this = this;
            this.packageListDisplay = [];
            var delieryFolderId = {
              id: this.bidtDeliveryFolder.id
            };
            this.logisticsService
              .findShipmentFolderWithAllObjectsById(delieryFolderId)
              .subscribe(function(deliveryFolder) {
                _this.packageListWithOutItem = deliveryFolder.packageList;
                var packageList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_5__['ListUtils']
                  .orEmpty(_this.bidtDeliveryFolder.bidtDfItems)
                  .filter(function(item) {
                    return !!item.bidtPackage;
                  })
                  .map(function(item) {
                    return item.bidtPackage;
                  });
                if (_this.packageListWithOutItem && _this.packageListWithOutItem.length > 0) {
                  packageList = packageList.concat(_this.packageListWithOutItem);
                }
                packageList.forEach(function(packageDTO) {
                  var packageRow = {
                    label: packageDTO.packageCode,
                    value: packageDTO
                  };
                  _this.packageListDisplay.push(packageRow);
                });
                _this.packageListDisplay = _this.packageListDisplay
                  .reduce(function(unique, column) {
                    return unique.every(function(elt) {
                      return elt.label !== column.label;
                    })
                      ? __spread(unique, [column])
                      : unique;
                  }, [])
                  .sort(function(a, b) {
                    return a.label.localeCompare(b.label);
                  });
              });
          };
          DialogAddPackageShipmentComponent.prototype.openSearchPnDialog = function() {
            this.searchPnDialogVisible = true;
          };
          DialogAddPackageShipmentComponent.prototype.resetChoice = function() {
            this.changeMode();
          };
          DialogAddPackageShipmentComponent.prototype.changeMode = function() {
            switch (this.selectedChoice) {
              case this.component.GENERATE:
                this.isGenerated = true;
                break;
              case this.component.ENTER:
                this.isGenerated = false;
                break;
              default:
                break;
            }
          };
          DialogAddPackageShipmentComponent.prototype.resetChoicePackage = function() {
            this.changeModePackage();
          };
          DialogAddPackageShipmentComponent.prototype.changeModePackage = function() {
            switch (this.selectedChoicePackage) {
              case this.component.CURRENT_PACKAGE:
                this.createWithPackage = true;
                this.isGenerated = true;
                break;
              case this.component.NEW_PACKAGE:
                this.createWithPackage = true;
                this.isGenerated = true;
                break;
              case this.component.WITHOUT_PACKAGE:
                this.createWithPackage = false;
                this.isGenerated = false;
                break;
              default:
                break;
            }
          };
          DialogAddPackageShipmentComponent.prototype.isValidForm = function() {
            return false;
          };
          DialogAddPackageShipmentComponent.prototype.packageTypeChange = function() {
            this.packageInput = {
              length: this.selectedPackageType.length,
              lengthUnit: this.selectedPackageType.unit,
              width: this.selectedPackageType.width,
              widthUnit: this.selectedPackageType.unit,
              height: this.selectedPackageType.height,
              heightUnit: this.selectedPackageType.unit
            };
            this.disableLength = this.selectedPackageType.length ? true : false;
            this.disableWidth = this.selectedPackageType.width ? true : false;
            this.disableHeight = this.selectedPackageType.height ? true : false;
          };
          DialogAddPackageShipmentComponent.prototype.calculateVolume = function() {
            return this.packageInput.width && this.packageInput.length && this.packageInput.height
              ? this.packageInput.height * this.packageInput.length * this.packageInput.width
              : 0;
          };
          DialogAddPackageShipmentComponent.prototype.showVolume = function() {
            return (
              this.packageInput.lengthUnit === this.packageInput.widthUnit &&
              this.packageInput.lengthUnit === this.packageInput.heightUnit
            );
          };
          DialogAddPackageShipmentComponent.prototype.getVolumnUnit = function() {
            var _this = this;
            var selectedUnit = this.unitLengthList.find(function(item) {
              return item.value === _this.packageInput.lengthUnit;
            });
            return selectedUnit ? selectedUnit.label : '';
          };
          var DialogAddPackageShipmentComponent_1;
          DialogAddPackageShipmentComponent.GENERATE = '0';
          DialogAddPackageShipmentComponent.ENTER = '1';
          DialogAddPackageShipmentComponent.CURRENT_PACKAGE = '0';
          DialogAddPackageShipmentComponent.NEW_PACKAGE = '1';
          DialogAddPackageShipmentComponent.WITHOUT_PACKAGE = '2';
          DialogAddPackageShipmentComponent.ROOTS_VALUE = '3';
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogAddPackageShipmentComponent.prototype,
            'bidtDeliveryFolder',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogAddPackageShipmentComponent.prototype,
            'onCreate',
            void 0
          );
          DialogAddPackageShipmentComponent = DialogAddPackageShipmentComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-add-package',
                template: __webpack_require__(
                  /*! ./dialog-add-package-shipment.component.html */ './src/app/main/logistics/stock-movements/form/dialog-add-package-shipment/dialog-add-package-shipment.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-add-package-shipment.component.scss */ './src/app/main/logistics/stock-movements/form/dialog-add-package-shipment/dialog-add-package-shipment.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_3__['PropertiesService'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_7__['LogisticsService'],
                _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_6__[
                  'DeliveryFolderSearchService'
                ]
              ])
            ],
            DialogAddPackageShipmentComponent
          );
          return DialogAddPackageShipmentComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_4__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/dialog-confirm-treatment/confirm-dialog-treatment.component.html':
      /*!**********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/dialog-confirm-treatment/confirm-dialog-treatment.component.html ***!
  \**********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    {{ getComponentName() + ".message" | translate }}\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="reject()">\r\n      <span>{{ "global.no" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" type="button" mat-raised-button (click)="accept()">\r\n      {{ "global.yes" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/dialog-confirm-treatment/confirm-dialog-treatment.component.ts':
      /*!********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/dialog-confirm-treatment/confirm-dialog-treatment.component.ts ***!
  \********************************************************************************************************************/
      /*! exports provided: ConfirmDialogTreatmentComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ConfirmDialogTreatmentComponent',
          function() {
            return ConfirmDialogTreatmentComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
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

        var ConfirmDialogTreatmentComponent = /** @class */ (function(_super) {
          __extends(ConfirmDialogTreatmentComponent, _super);
          function ConfirmDialogTreatmentComponent() {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'ConfirmDialogTreatmentComponent'
              ) || this;
            _this.acceptEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          ConfirmDialogTreatmentComponent.prototype.getComponentName = function() {
            return 'ConfirmDialogTreatmentComponent';
          };
          ConfirmDialogTreatmentComponent.prototype.accept = function() {
            this.acceptEvent.emit();
            this.closeDialog();
          };
          ConfirmDialogTreatmentComponent.prototype.reject = function() {
            this.closeDialog();
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            ConfirmDialogTreatmentComponent.prototype,
            'acceptEvent',
            void 0
          );
          ConfirmDialogTreatmentComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-confirm-dialog-treatment',
                template: __webpack_require__(
                  /*! ./confirm-dialog-treatment.component.html */ './src/app/main/logistics/stock-movements/form/dialog-confirm-treatment/confirm-dialog-treatment.component.html'
                ),
                styles: [':host { white-space: pre-line }']
              }),
              __metadata('design:paramtypes', [])
            ],
            ConfirmDialogTreatmentComponent
          );
          return ConfirmDialogTreatmentComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/dialog-create-shipment-folder/dialog-create-shipment-folder.component.html':
      /*!********************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/dialog-create-shipment-folder/dialog-create-shipment-folder.component.html ***!
  \********************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="75">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="section">\r\n      <div class="section-content">\r\n        <div class="row">\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ getComponentName() + ".shipmentType" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                appendTo="body"\r\n                class="aw-dropdown fixed-width"\r\n                placeholder="&nbsp;"\r\n                [options]="dfTypes"\r\n                [showClear]="true"\r\n                [(ngModel)]="selectedDfType"\r\n                (onChange)="onSelectedDfTypeChange()"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ getComponentName() + ".expectedDate" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-calendar\r\n                appendTo="body"\r\n                class="aw-calendar"\r\n                showButtonBar="true"\r\n                [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                [locale]="sessionService.calendarFormat"\r\n                [(ngModel)]="selectedPlannedDate"\r\n                [monthNavigator]="true"\r\n                [yearNavigator]="true"\r\n                [yearRange]="sessionService.calendarYearRange"\r\n              ></p-calendar>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="section">\r\n      <h4 class="section-title">{{ getComponentName() + ".sender" | translate }}</h4>\r\n\r\n      <div class="section-content">\r\n        <div class="row">\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ getComponentName() + ".site" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                appendTo="body"\r\n                class="aw-dropdown fixed-width"\r\n                placeholder="&nbsp;"\r\n                [options]="sites"\r\n                [showClear]="true"\r\n                [(ngModel)]="selectedShipperSite"\r\n                (onChange)="onChangeShipperSite()"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group flex--2" style="height: 47px;">\r\n            <label class="form-label">\r\n              {{ selectedShipperWarehouseCategory | formatSelectOption: warehouseCategories }}\r\n            </label>\r\n\r\n            <div class="form-control aw-selectbutton-wrapper aw-selectbutton-with-dropdown">\r\n              <p-selectButton\r\n                [options]="warehouseCategories"\r\n                [(ngModel)]="selectedShipperWarehouseCategory"\r\n                (onChange)="onChangeShipperWarehouseCategory()"\r\n              ></p-selectButton>\r\n\r\n              <p-dropdown\r\n                appendTo="body"\r\n                class="aw-dropdown"\r\n                placeholder="&nbsp;"\r\n                [options]="shipperWarehouses"\r\n                [showClear]="true"\r\n                [(ngModel)]="selectedShipperWarehouse"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="section">\r\n      <h4 class="section-title">{{ getComponentName() + ".recipient" | translate }}</h4>\r\n\r\n      <div class="section-content">\r\n        <div class="row" *ngIf="!showPartnerDropdown">\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ getComponentName() + ".site" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                appendTo="body"\r\n                class="aw-dropdown fixed-width"\r\n                placeholder="&nbsp;"\r\n                [options]="sites"\r\n                [showClear]="true"\r\n                [(ngModel)]="selectedRecipientSite"\r\n                (onChange)="onChangeRecipientSite()"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group flex--2" style="height: 47px;">\r\n            <label class="form-label">\r\n              {{ selectedRecipientWarehouseCategory | formatSelectOption: warehouseCategories }}\r\n            </label>\r\n\r\n            <div class="form-control aw-selectbutton-wrapper aw-selectbutton-with-dropdown">\r\n              <p-selectButton\r\n                [options]="warehouseCategories"\r\n                [(ngModel)]="selectedRecipientWarehouseCategory"\r\n                (onChange)="onChangeRecipientWarehouseCategory()"\r\n              ></p-selectButton>\r\n\r\n              <p-dropdown\r\n                appendTo="body"\r\n                class="aw-dropdown"\r\n                placeholder="&nbsp;"\r\n                [options]="recipientWarehouses"\r\n                [showClear]="true"\r\n                [(ngModel)]="selectedRecipientWarehouse"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="row" *ngIf="showPartnerDropdown">\r\n          <div class="form-group required">\r\n            <label class="form-label">{{ getComponentName() + ".partner" | translate }}</label>\r\n\r\n            <div class="form-control">\r\n              <p-dropdown\r\n                appendTo="body"\r\n                class="aw-dropdown fixed-width"\r\n                placeholder="&nbsp;"\r\n                [options]="businessPartnerList"\r\n                [showClear]="true"\r\n                [(ngModel)]="bidoCustomerReceiver"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n          <div class="form-group"></div>\r\n          <div class="form-group"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="section">\r\n      <h4 class="section-title">{{ getComponentName() + ".package" | translate }}</h4>\r\n      <div class="section-content">\r\n        <div class="column">\r\n          <div class="row">\r\n            <div class="form-group">\r\n              <div class="form-control aw-selectbutton-wrapper">\r\n                <p-selectButton\r\n                  [(ngModel)]="selectedChoiceNewPackage"\r\n                  [options]="newPackageList"\r\n                  (onChange)="resetChoicePackage()"\r\n                ></p-selectButton>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="row" *ngIf="selectedChoiceNewPackage === component.NEW_PACKAGE">\r\n            <div class="form-group">\r\n              <div class="form-control aw-selectbutton-wrapper">\r\n                <p-selectButton\r\n                  [(ngModel)]="selectedChoice"\r\n                  [options]="choiceList"\r\n                  (onChange)="resetChoice()"\r\n                ></p-selectButton>\r\n              </div>\r\n            </div>\r\n\r\n            <div\r\n              class="form-group required"\r\n              *ngIf="selectedChoice === component.ENTER && selectedChoiceNewPackage === component.NEW_PACKAGE"\r\n            >\r\n              <label class="form-label">{{ getComponentName() + ".packageNumber" | translate }}</label>\r\n\r\n              <div class="form-control">\r\n                <input type="text" class="aw-input" [(ngModel)]="externalPackageCode" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="section" *ngIf="selectedChoiceNewPackage === component.NEW_PACKAGE">\r\n            <div class="row">\r\n              <div class="form-group required">\r\n                <label class="form-label">{{ getComponentName() + ".packageType" | translate }}</label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    [(ngModel)]="selectedPackageType"\r\n                    [options]="packagesTypesList"\r\n                    (onChange)="packageTypeChange()"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".weight" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <input type="number" class="aw-input" [(ngModel)]="packageInput.weight" />\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".unit" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    [(ngModel)]="packageInput.weightUnit"\r\n                    [options]="unitWeightList"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".length" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <input type="number" class="aw-input" [disabled]="disableLength" [(ngModel)]="packageInput.length" />\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".unit" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    [(ngModel)]="packageInput.lengthUnit"\r\n                    [options]="unitLengthList"\r\n                    [disabled]="disableLength"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".width" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <input type="number" class="aw-input" [disabled]="disableWidth" [(ngModel)]="packageInput.width" />\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".unit" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    [(ngModel)]="packageInput.widthUnit"\r\n                    [options]="unitLengthList"\r\n                    [disabled]="disableWidth"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="row">\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".height" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <input type="number" class="aw-input" [disabled]="disableHeight" [(ngModel)]="packageInput.height" />\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <label class="form-label">\r\n                  {{ getComponentName() + ".unit" | translate }}\r\n                </label>\r\n\r\n                <div class="form-control">\r\n                  <p-dropdown\r\n                    class="aw-dropdown fixed-width"\r\n                    [showClear]="true"\r\n                    placeholder="&nbsp;"\r\n                    [(ngModel)]="packageInput.heightUnit"\r\n                    [options]="unitLengthList"\r\n                    [disabled]="disableHeight"\r\n                    appendTo="body"\r\n                  ></p-dropdown>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="section-content" *ngIf="calculateVolume() && showVolume()">\r\n              <div class="row">\r\n                <div class="form-group">\r\n                  <h3>\r\n                    <span class="bold italic">\r\n                      {{ getComponentName() + ".volume" | translate }}: {{ calculateVolume() }} {{ getVolumnUnit() }}\r\n                      <sup>{{ component.ROOTS_VALUE }}</sup>\r\n                    </span>\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button mat-raised-button type="button" (click)="closeDialog()">{{ "global.cancel" | translate }}</button>\r\n\r\n    <button mat-raised-button type="button" color="primary" [disabled]="!canValidate()" (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/dialog-create-shipment-folder/dialog-create-shipment-folder.component.ts':
      /*!******************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/dialog-create-shipment-folder/dialog-create-shipment-folder.component.ts ***!
  \******************************************************************************************************************************/
      /*! exports provided: DialogCreateShipmentFolderComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogCreateShipmentFolderComponent',
          function() {
            return DialogCreateShipmentFolderComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/pipes/extract-translation.pipe */ './src/app/shared/pipes/extract-translation.pipe.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../goods-receipt/delivery-folder-search.service */ './src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts'
        );
        /* harmony import */ var _goods_receipt_form_goods_receipt_form_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../goods-receipt/form/goods-receipt-form.service */ './src/app/main/logistics/goods-receipt/form/goods-receipt-form.service.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
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

        var DialogCreateShipmentFolderComponent = /** @class */ (function(_super) {
          __extends(DialogCreateShipmentFolderComponent, _super);
          function DialogCreateShipmentFolderComponent(
            sessionService,
            extractTranslationPipe,
            dfSearchService,
            logisticsService,
            propertiesService,
            goodsReceiptFormService,
            deliveryFolderSearchService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_5__['ComponentOpenMode'].Read,
                'DialogCreateShipmentFolderComponent'
              ) || this;
            _this.sessionService = sessionService;
            _this.extractTranslationPipe = extractTranslationPipe;
            _this.dfSearchService = dfSearchService;
            _this.logisticsService = logisticsService;
            _this.propertiesService = propertiesService;
            _this.goodsReceiptFormService = goodsReceiptFormService;
            _this.deliveryFolderSearchService = deliveryFolderSearchService;
            _this.component = DialogCreateShipmentFolderComponent_1;
            _this.onValidate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.init();
            _this.loadSites();
            _this.loadWarehouseCategories();
            return _this;
          }
          DialogCreateShipmentFolderComponent_1 = DialogCreateShipmentFolderComponent;
          DialogCreateShipmentFolderComponent.prototype.ngOnInit = function() {
            var _this = this;
            this.packageInput = {};
            this.disableLength = false;
            this.disableWidth = false;
            this.disableHeight = false;
            if (this.movementStock._stockMvt) {
              this.selectedShipperSite = this.movementStock._stockMvt.bidtSiteByBidtSiteIssueId
                ? this.movementStock._stockMvt.bidtSiteByBidtSiteIssueId
                : undefined;
              this.selectedShipperWarehouseCategory = this.movementStock._stockMvt.bidtWarehouseIssue
                ? this.movementStock._stockMvt.bidtWarehouseIssue.whCategory
                : undefined;
              this.selectedShipperWarehouse = this.movementStock._stockMvt.bidtWarehouseByBidtWarehouseIssueId
                ? this.movementStock._stockMvt.bidtWarehouseByBidtWarehouseIssueId
                : undefined;
              this.selectedRecipientSite = this.movementStock._finalSite
                ? this.movementStock._finalSite.siteId
                : undefined;
              this.selectedRecipientWarehouseCategory = this.movementStock._finalWarehouse
                ? this.movementStock._finalWarehouse.whCategory
                : undefined;
              this.selectedRecipientWarehouse = this.movementStock._finalWarehouse
                ? this.movementStock._finalWarehouse.wareHouseId
                : undefined;
            }
            this.bidoCustomerReceiver = this.movementStock._bidoCustomerDto;
            if (this.selectedShipperSite) {
              this.loadWareHouses(this.selectedShipperSite, this.selectedShipperWarehouseCategory).subscribe({
                next: function(warehouses) {
                  _this.shipperWarehouses = warehouses;
                }
              });
            }
            if (this.selectedRecipientSite) {
              this.loadWareHouses(this.selectedRecipientSite, this.selectedRecipientWarehouseCategory).subscribe({
                next: function(warehouses) {
                  _this.recipientWarehouses = warehouses;
                }
              });
            }
          };
          ///////////////////////////////////////////////////////////////////////////////
          DialogCreateShipmentFolderComponent.prototype.getComponentName = function() {
            return 'DialogCreateShipmentFolderComponent';
          };
          DialogCreateShipmentFolderComponent.prototype.canValidate = function() {
            return this.selectedDfType &&
              (this.selectedRecipientWarehouse ||
                (this.bidoCustomerReceiver && this.bidoCustomerReceiver.customerCode)) &&
              (this.selectedShipperWarehouse || (this.bidoCustomerSender && this.bidoCustomerSender.customerCode)) &&
              this.selectedRecipientWarehouse !== this.selectedShipperWarehouse
              ? true
              : false;
          };
          DialogCreateShipmentFolderComponent.prototype.onChangeRecipientSite = function() {
            this.onChangeRecipientWarehouseCategory();
          };
          DialogCreateShipmentFolderComponent.prototype.onChangeRecipientWarehouseCategory = function() {
            var _this = this;
            this.unselectRecipientWarehouse();
            if (this.selectedRecipientSite) {
              this.loadWareHouses(this.selectedRecipientSite, this.selectedRecipientWarehouseCategory).subscribe({
                next: function(warehouses) {
                  _this.recipientWarehouses = warehouses;
                }
              });
            }
          };
          DialogCreateShipmentFolderComponent.prototype.onChangeShipperSite = function() {
            this.onChangeShipperWarehouseCategory();
          };
          DialogCreateShipmentFolderComponent.prototype.onChangeShipperWarehouseCategory = function() {
            var _this = this;
            this.unselectShipperWarehouse();
            if (this.selectedShipperSite) {
              this.loadWareHouses(this.selectedShipperSite, this.selectedShipperWarehouseCategory).subscribe({
                next: function(warehouses) {
                  _this.shipperWarehouses = warehouses;
                }
              });
            }
          };
          DialogCreateShipmentFolderComponent.prototype.validate = function() {
            var _this = this;
            var deliveryFolderInput = {
              bidtDfTypeId: this.selectedDfType && this.selectedDfType.id,
              bidtSiteByBidtSiteReceiverId: this.selectedRecipientSite,
              bidtSiteByBidtSiteSenderId: this.selectedShipperSite,
              bidtWarehouseByBidtWarehouseReceiverId: this.selectedRecipientWarehouse,
              bidtWarehouseByBidtWarehouseSenderId: this.selectedShipperWarehouse,
              criticality: undefined,
              plannedDate: this.selectedPlannedDate,
              bidoCustomerReceiver: this.bidoCustomerReceiver,
              bidoCustomerSender: this.bidoCustomerSender
            };
            this.logisticsService.addOrUpdateShipmentFolder(deliveryFolderInput).subscribe(function(deliveryFolder) {
              var packageDTO = {
                externalPackageCode: _this.externalPackageCode,
                packageType: _this.selectedPackageType ? _this.selectedPackageType.packageType : undefined,
                bidtDeliveryFolderId: deliveryFolder.id,
                height: _this.packageInput.height,
                heightUnit: _this.packageInput.heightUnit,
                width: _this.packageInput.width,
                widthUnit: _this.packageInput.widthUnit,
                length: _this.packageInput.length,
                lengthUnit: _this.packageInput.lengthUnit,
                weight: _this.packageInput.weight,
                weightUnit: _this.packageInput.weightUnit,
                volume: _this.calculateVolume().toString()
              };
              var input = {
                bidtPackageDTO: packageDTO,
                isGenerated: _this.isGenerated,
                bidtDeliveryFolderDTO: deliveryFolder,
                createWithPackage: _this.createWithPackage
              };
              if (_this.selectedChoiceNewPackage === _this.component.NEW_PACKAGE) {
                _this.goodsReceiptFormService.addShipmentPackage(input).subscribe(function(packageOutput) {
                  input.bidtPackageDTO = packageOutput;
                  _this.onValidate.emit(input);
                  _this.closeDialog();
                });
              } else {
                _this.onValidate.emit(input);
                _this.closeDialog();
              }
            });
          };
          ///////////////////////////////////////////////////////////////////////////////
          DialogCreateShipmentFolderComponent.prototype.init = function() {
            this.criticalities = [];
            this.dfTypes = [];
            this.recipientWarehouses = [];
            this.shipperWarehouses = [];
            this.sites = [];
            this.warehouseCategories = [];
            this.businessPartnerList = [];
            this.selectedCriticality =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__[
                'AWPropertiesConstants'
              ].LOGISTICAL_CRITICALITY_ROUTINE;
            this.selectedDfType = undefined;
            this.selectedPlannedDate = new Date();
            this.showPartnerDropdown = false;
            this.createWithPackage = true;
            this.isGenerated = true;
            this.loadCriticalities();
            this.loadDfTypes();
            this.loadSites();
            this.loadWarehouseCategories();
            this.loadBusinessPartnerList();
            this.loadDropDowns();
          };
          DialogCreateShipmentFolderComponent.prototype.loadBusinessPartnerList = function() {
            var _this = this;
            this.logisticsService.findAllBidoCustomer().subscribe(function(results) {
              _this.businessPartnerList = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils']
                .orEmpty(results)
                .filter(function(customer) {
                  return !!customer.customerCode;
                })
                .map(function(customer) {
                  return {
                    label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__['StringUtils'].isNullOrEmpty(
                      customer.customerName
                    )
                      ? customer.customerCode
                      : customer.customerName + ' (' + customer.customerCode + ')',
                    value: customer
                  };
                });
            });
          };
          DialogCreateShipmentFolderComponent.prototype.onSelectedDfTypeChange = function() {
            this.showPartnerDropdown =
              (this.selectedDfType &&
                this.selectedDfType.transferType ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                    .MM_TRANSFER_TYPE_INTRA_SITE_KEY) ||
              (this.selectedDfType &&
                this.selectedDfType.transferType ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                    .MM_TRANSFER_TYPE_INTER_SITE_KEY)
                ? false
                : true;
          };
          DialogCreateShipmentFolderComponent.prototype.loadCriticalities = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__['GenericPropertyConstants']
                  .LOGISTICAL_CRITICALITY_MAP
              )
              .subscribe({
                next: function(criticalities) {
                  _this.criticalities = criticalities.map(function(criticality) {
                    return {
                      label: criticality.label,
                      value: criticality.value
                    };
                  });
                }
              });
          };
          DialogCreateShipmentFolderComponent.prototype.loadDfTypes = function() {
            var _this = this;
            this.logisticsService.findShipmentDfTypes().subscribe({
              next: function(dfTypes) {
                _this.dfTypes = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils']
                  .orEmpty(dfTypes)
                  .filter(function(dfType) {
                    return !_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__['StringUtils'].isNullOrEmpty(
                      dfType.dftDesignation
                    );
                  })
                  .map(function(dfType) {
                    return {
                      label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_11__['StringUtils'].orEmpty(
                        _this.extractTranslationPipe.transform(dfType.dftDesignation)
                      ),
                      value: dfType
                    };
                  })
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
                _this.selectedDfType = _this.dfTypes.length === 1 ? _this.dfTypes[0].value : undefined;
                if (_this.movementStock._transferOrder) {
                  _this.selectedDfType = _this.getDfTypeByKey(_this.movementStock._transferOrder.torType);
                }
              }
            });
          };
          DialogCreateShipmentFolderComponent.prototype.getDfTypeByKey = function(key) {
            return this.dfTypes.filter(function(type) {
              return type.value.id === Number(key);
            })[0].value;
          };
          DialogCreateShipmentFolderComponent.prototype.loadSites = function() {
            var _this = this;
            this.dfSearchService.findAllSiteList().subscribe({
              next: function(sites) {
                _this.sites = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils']
                  .orEmpty(sites)
                  .map(function(site) {
                    return {
                      label: site.siteCode + ' - ' + site.siteName,
                      value: site.siteId
                    };
                  })
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
              }
            });
          };
          DialogCreateShipmentFolderComponent.prototype.loadWarehouseCategories = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_4__['GenericPropertyConstants']
                  .WAREHOUSE_CATEGORY_MAP
              )
              .subscribe({
                next: function(warehouseCategories) {
                  _this.warehouseCategories = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils']
                    .orEmpty(warehouseCategories)
                    .sort(function(s1, s2) {
                      return s1.value.localeCompare(s2.value);
                    });
                  var warehouseCategory =
                    _this.warehouseCategories.length > 0 ? _this.warehouseCategories[0].value : undefined;
                  if (!!_this.selectedRecipientWarehouseCategory) {
                    _this.selectedRecipientWarehouseCategory = warehouseCategory;
                  }
                  if (!!_this.selectedShipperWarehouseCategory) {
                    _this.selectedShipperWarehouseCategory = warehouseCategory;
                  }
                }
              });
          };
          DialogCreateShipmentFolderComponent.prototype.loadWareHouses = function(site, warehouseCategory) {
            return this.dfSearchService.getWarehousesBySiteId(site).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(warehouses) {
                return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_10__['ListUtils']
                  .orEmpty(warehouses)
                  .filter(function(warehouse) {
                    return warehouse.whCategory === warehouseCategory;
                  })
                  .map(function(warehouse) {
                    return {
                      label: warehouse.whCode + ' - ' + warehouse.whName,
                      value: warehouse.wareHouseId
                    };
                  })
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
              })
            );
          };
          DialogCreateShipmentFolderComponent.prototype.unselectRecipientWarehouse = function() {
            this.recipientWarehouses = [];
            this.selectedRecipientWarehouse = undefined;
          };
          DialogCreateShipmentFolderComponent.prototype.unselectShipperWarehouse = function() {
            this.shipperWarehouses = [];
            this.selectedShipperWarehouse = undefined;
          };
          DialogCreateShipmentFolderComponent.prototype.loadDropDowns = function() {
            var _this = this;
            var packageTypes = this.propertiesService.getFullPackageTypeMap();
            var lengthUnit = this.logisticsService.fetchLengthUnitMap();
            var weightUnit = this.logisticsService.fetchWeightUnitMap();
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['forkJoin'])({
              packageTypes: packageTypes,
              lengthUnit: lengthUnit,
              weightUnit: weightUnit
            }).subscribe({
              next: function(results) {
                _this.packagesTypesList = results.packageTypes;
                _this.unitLengthList = results.lengthUnit;
                _this.unitWeightList = results.weightUnit;
                _this.choiceList = _this.deliveryFolderSearchService.loadCreationChoiceListPackage();
                _this.selectedChoice = _this.choiceList && _this.choiceList.length ? _this.choiceList[0].value : '';
                _this.newPackageList = _this.deliveryFolderSearchService.loadShipmentPackageChoiceList();
                _this.selectedChoiceNewPackage =
                  _this.newPackageList && _this.newPackageList.length ? _this.newPackageList[0].value : '';
              }
            });
          };
          DialogCreateShipmentFolderComponent.prototype.resetChoice = function() {
            this.changeMode();
          };
          DialogCreateShipmentFolderComponent.prototype.changeMode = function() {
            switch (this.selectedChoice) {
              case this.component.GENERATE:
                this.isGenerated = true;
                break;
              case this.component.ENTER:
                this.isGenerated = false;
                break;
              default:
                break;
            }
          };
          DialogCreateShipmentFolderComponent.prototype.resetChoicePackage = function() {
            this.changeModePackage();
          };
          DialogCreateShipmentFolderComponent.prototype.changeModePackage = function() {
            switch (this.selectedChoiceNewPackage) {
              case this.component.NEW_PACKAGE:
                this.createWithPackage = true;
                this.isGenerated = true;
                break;
              case this.component.WITHOUT_PACKAGE:
                this.createWithPackage = false;
                this.isGenerated = false;
                break;
              default:
                break;
            }
          };
          DialogCreateShipmentFolderComponent.prototype.packageTypeChange = function() {
            this.packageInput = {
              length: this.selectedPackageType.length,
              lengthUnit: this.selectedPackageType.unit,
              width: this.selectedPackageType.width,
              widthUnit: this.selectedPackageType.unit,
              height: this.selectedPackageType.height,
              heightUnit: this.selectedPackageType.unit
            };
            this.disableLength = this.selectedPackageType.length ? true : false;
            this.disableWidth = this.selectedPackageType.width ? true : false;
            this.disableHeight = this.selectedPackageType.height ? true : false;
          };
          DialogCreateShipmentFolderComponent.prototype.calculateVolume = function() {
            return this.packageInput.width && this.packageInput.length && this.packageInput.height
              ? this.packageInput.height * this.packageInput.length * this.packageInput.width
              : 0;
          };
          DialogCreateShipmentFolderComponent.prototype.showVolume = function() {
            return (
              this.packageInput.lengthUnit === this.packageInput.widthUnit &&
              this.packageInput.lengthUnit === this.packageInput.heightUnit
            );
          };
          DialogCreateShipmentFolderComponent.prototype.getVolumnUnit = function() {
            var _this = this;
            var selectedUnit = this.unitLengthList.find(function(item) {
              return item.value === _this.packageInput.lengthUnit;
            });
            return selectedUnit ? selectedUnit.label : '';
          };
          var DialogCreateShipmentFolderComponent_1;
          DialogCreateShipmentFolderComponent.GENERATE = '0';
          DialogCreateShipmentFolderComponent.ENTER = '1';
          DialogCreateShipmentFolderComponent.NEW_PACKAGE = '0';
          DialogCreateShipmentFolderComponent.WITHOUT_PACKAGE = '1';
          DialogCreateShipmentFolderComponent.ROOTS_VALUE = '3';
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogCreateShipmentFolderComponent.prototype,
            'movementStock',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogCreateShipmentFolderComponent.prototype,
            'onValidate',
            void 0
          );
          DialogCreateShipmentFolderComponent = DialogCreateShipmentFolderComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-create-shipment-folder',
                template: __webpack_require__(
                  /*! ./dialog-create-shipment-folder.component.html */ './src/app/main/logistics/stock-movements/form/dialog-create-shipment-folder/dialog-create-shipment-folder.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_8__['SessionService'],
                _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_6__['ExtractTranslationPipe'],
                _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_12__[
                  'DeliveryFolderSearchService'
                ],
                _logistics_service__WEBPACK_IMPORTED_MODULE_14__['LogisticsService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__['PropertiesService'],
                _goods_receipt_form_goods_receipt_form_service__WEBPACK_IMPORTED_MODULE_13__['GoodsReceiptFormService'],
                _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_12__[
                  'DeliveryFolderSearchService'
                ]
              ])
            ],
            DialogCreateShipmentFolderComponent
          );
          return DialogCreateShipmentFolderComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_9__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/dialog-document-categories/dialog-document-categories-stock-mvt.component.html':
      /*!************************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/dialog-document-categories/dialog-document-categories-stock-mvt.component.html ***!
  \************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display" [width]="40">\n  <a-header>\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\n  </a-header>\n\n  <a-content>\n    <div class="row">\n      <a-table [dataSource]="operationsTableDataSource">\n        <ng-template columnDef="operationCode" let-rowData="rowData">\n          {{ rowData.operationCode }}\n        </ng-template>\n\n        <ng-template columnDef="docList" let-rowData="rowData">\n          <textarea class="aw-textarea" [rows]="5" [(ngModel)]="rowData.operationDocs" disabled="true"></textarea>\n        </ng-template>\n      </a-table>\n    </div>\n  </a-content>\n\n  <a-footer>\n    <button type="button" mat-raised-button (click)="closeDialog()">{{ "global.close" | translate }}</button>\n  </a-footer>\n</a-modal>\n';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/dialog-document-categories/dialog-document-categories-stock-mvt.component.ts':
      /*!**********************************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/dialog-document-categories/dialog-document-categories-stock-mvt.component.ts ***!
  \**********************************************************************************************************************************/
      /*! exports provided: DialogDocumentCategoriesStockMvtComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogDocumentCategoriesStockMvtComponent',
          function() {
            return DialogDocumentCategoriesStockMvtComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../form.service */ './src/app/main/logistics/stock-movements/form/form.service.ts'
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

        var DialogDocumentCategoriesStockMvtComponent = /** @class */ (function(_super) {
          __extends(DialogDocumentCategoriesStockMvtComponent, _super);
          function DialogDocumentCategoriesStockMvtComponent(formService, propertiesService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_4__['ComponentOpenMode'].Read,
                'DialogDocumentCategoriesStockMvtComponent'
              ) || this;
            _this.formService = formService;
            _this.propertiesService = propertiesService;
            _this.data = [];
            _this.initalizeTableColumns();
            return _this;
          }
          DialogDocumentCategoriesStockMvtComponent.prototype.ngOnInit = function() {
            var _this = this;
            var docAssetCategory$ = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__['GenericPropertyConstants']
                .DOC_ASSET_CATEGORY_MAP
            );
            var logisticalOperation$ = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_3__['GenericPropertyConstants']
                .LOGISTICAL_OPERATION_MAP
            );
            var operationAssetCategory$ = this.formService.getOperationCategories(this.bidtStockMvtOperationDTOList);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__['forkJoin'])([
              docAssetCategory$,
              operationAssetCategory$,
              logisticalOperation$
            ]).subscribe({
              next: function(_a) {
                var _b = __read(_a, 3),
                  docAssetCategory = _b[0],
                  operationAssetCategory = _b[1],
                  logisticalOperation = _b[2];
                _this.docAssetCategory = docAssetCategory;
                _this.logisticalOperation = logisticalOperation;
                if (
                  operationAssetCategory.dfTypeOperationList &&
                  operationAssetCategory.dfTypeOperationList.length > 0
                ) {
                  _this.useDfTypesOperation(operationAssetCategory.dfTypeOperationList);
                } else if (
                  operationAssetCategory.stockMvtTypeOperationList &&
                  operationAssetCategory.stockMvtTypeOperationList.length > 0
                ) {
                  _this.useStockMvtTypesOperation(operationAssetCategory.stockMvtTypeOperationList);
                }
                _this.operationsTableDataSource.setData(_this.data);
              }
            });
          };
          DialogDocumentCategoriesStockMvtComponent.prototype.getDocCategories = function(operation) {
            var _this = this;
            this.numberOfDocs = 1;
            this.dialogContent = '';
            if (operation.docCategories && operation.docCategories.length > 0) {
              operation.docCategories.forEach(function(categorieOpe) {
                if (_this.numberOfDocs === 1) {
                  _this.dialogContent =
                    _this.numberOfDocs +
                    '. ' +
                    _this.docAssetCategory.filter(function(categorie) {
                      return categorie.value === categorieOpe;
                    })[0].label;
                  _this.numberOfDocs++;
                } else {
                  _this.dialogContent =
                    _this.dialogContent +
                    '\r' +
                    _this.numberOfDocs +
                    '. ' +
                    _this.docAssetCategory.filter(function(categorie) {
                      return categorie.value === categorieOpe;
                    })[0].label;
                  _this.dialogContent = _this.dialogContent.replace(/\r?\n/g, '</br>');
                  _this.numberOfDocs++;
                }
              });
            }
          };
          DialogDocumentCategoriesStockMvtComponent.prototype.useDfTypesOperation = function(dfTypesOperations) {
            var _this = this;
            dfTypesOperations.forEach(function(operation) {
              _this.getDocCategories(operation);
              var operationRow = {
                operationCode: _this.logisticalOperation.filter(function(ope) {
                  return ope.value === operation.dftopeKey;
                })[0].label,
                operationDocs: _this.dialogContent,
                _operation: _this.bidtStockMvtOperationDTOList.filter(function(ope) {
                  return ope.bidtDfTypeOperationId === operation.id;
                })[0]
              };
              _this.data.push(operationRow);
            });
          };
          DialogDocumentCategoriesStockMvtComponent.prototype.useStockMvtTypesOperation = function(
            stockMvtTypeOperationLs
          ) {
            var _this = this;
            stockMvtTypeOperationLs.forEach(function(operation) {
              _this.getDocCategories(operation);
              var operationRow = {
                operationCode: _this.logisticalOperation.filter(function(ope) {
                  return ope.value === operation.smtoKey;
                })[0].label,
                operationDocs: _this.dialogContent,
                _operation: _this.bidtStockMvtOperationDTOList.filter(function(ope) {
                  return ope.bidtDfTypeOperationId === operation.id;
                })[0]
              };
              _this.data.push(operationRow);
            });
          };
          DialogDocumentCategoriesStockMvtComponent.prototype.initalizeTableColumns = function() {
            this.operationsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_2__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'operationCode',
                  translateKey: this.getTranslateKey('operationCode')
                },
                {
                  field: 'docList',
                  translateKey: this.getTranslateKey('docList')
                }
              ],
              data: []
            });
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogDocumentCategoriesStockMvtComponent.prototype,
            'bidtStockMvtOperationDTOList',
            void 0
          );
          DialogDocumentCategoriesStockMvtComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-document-categories',
                template: __webpack_require__(
                  /*! ./dialog-document-categories-stock-mvt.component.html */ './src/app/main/logistics/stock-movements/form/dialog-document-categories/dialog-document-categories-stock-mvt.component.html'
                )
              }),
              __metadata('design:paramtypes', [
                _form_service__WEBPACK_IMPORTED_MODULE_7__['FormService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_5__['PropertiesService']
              ])
            ],
            DialogDocumentCategoriesStockMvtComponent
          );
          return DialogDocumentCategoriesStockMvtComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_6__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/dialog-select-container/dialog-select-container.component.html':
      /*!********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/dialog-select-container/dialog-select-container.component.html ***!
  \********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="grid-row">\r\n      <div class="grid-cell--8">\r\n        <div class="form-group required">\r\n          <label class="form-label">\r\n            {{ getComponentName() + ".container" | translate }}\r\n          </label>\r\n          <div class="form-control">\r\n            <p-dropdown class="aw-dropdown fixed-width" placeholder="&nbsp;" [showClear]="true"></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="grid-cell--4">\r\n        <i class="fa fa-fw fa-qrcode custom-icon" aria-hidden="true"></i>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" color="primary" type="button" mat-raised-button (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/dialog-select-container/dialog-select-container.component.scss':
      /*!********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/dialog-select-container/dialog-select-container.component.scss ***!
  \********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .custom-icon {\n  font-size: 6em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stbW92ZW1lbnRzL2Zvcm0vZGlhbG9nLXNlbGVjdC1jb250YWluZXIvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcc3RvY2stbW92ZW1lbnRzXFxmb3JtXFxkaWFsb2ctc2VsZWN0LWNvbnRhaW5lclxcZGlhbG9nLXNlbGVjdC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1tb3ZlbWVudHMvZm9ybS9kaWFsb2ctc2VsZWN0LWNvbnRhaW5lci9kaWFsb2ctc2VsZWN0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuY3VzdG9tLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA2ZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/dialog-select-container/dialog-select-container.component.ts':
      /*!******************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/dialog-select-container/dialog-select-container.component.ts ***!
  \******************************************************************************************************************/
      /*! exports provided: DialogSelectContainerComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSelectContainerComponent',
          function() {
            return DialogSelectContainerComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
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

        var DialogSelectContainerComponent = /** @class */ (function(_super) {
          __extends(DialogSelectContainerComponent, _super);
          function DialogSelectContainerComponent() {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                'DialogSelectContainerComponent'
              ) || this;
            _this.onAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          DialogSelectContainerComponent.prototype.getComponentName = function() {
            return 'DialogSelectContainerComponent';
          };
          DialogSelectContainerComponent.prototype.validate = function() {
            var code = 'CONT685';
            this.onAdded.emit(code);
            this.closeDialog();
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogSelectContainerComponent.prototype,
            'data',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogSelectContainerComponent.prototype,
            'onAdded',
            void 0
          );
          DialogSelectContainerComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-select-container',
                template: __webpack_require__(
                  /*! ./dialog-select-container.component.html */ './src/app/main/logistics/stock-movements/form/dialog-select-container/dialog-select-container.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-select-container.component.scss */ './src/app/main/logistics/stock-movements/form/dialog-select-container/dialog-select-container.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            DialogSelectContainerComponent
          );
          return DialogSelectContainerComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_2__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/dialog-select-location/dialog-select-location.component.html':
      /*!******************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/dialog-select-location/dialog-select-location.component.html ***!
  \******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<a-modal class="aw-modal" [(visible)]="display">\r\n  <a-header>\r\n    <div class="modal-title">{{ getComponentName() + ".title" | translate }}</div>\r\n  </a-header>\r\n\r\n  <a-content>\r\n    <div class="grid-row">\r\n      <div class="form-group required">\r\n        <label class="form-label">\r\n          {{ getComponentName() + ".zone" | translate }}\r\n        </label>\r\n        <div class="form-control">\r\n          <p-selectButton\r\n            [(ngModel)]="selectedZone"\r\n            [options]="storageZoneList"\r\n            appendTo="body"\r\n            (onChange)="loadBinDropDown()"\r\n          ></p-selectButton>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="grid-row" *ngIf="isZoneHaveBins">\r\n      <div class="form-group required">\r\n        <label class="form-label">\r\n          {{ getComponentName() + ".bins" | translate }}\r\n        </label>\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            placeholder="&nbsp;"\r\n            [(ngModel)]="selectedBin"\r\n            [options]="storageBinList"\r\n            appendTo="body"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </a-content>\r\n\r\n  <a-footer>\r\n    <button type="button" mat-raised-button (click)="closeDialog()">\r\n      <span>{{ "global.cancel" | translate }}</span>\r\n    </button>\r\n\r\n    <button *ngIf="!isReadOpenMode" color="primary" type="button" mat-raised-button (click)="validate()">\r\n      {{ "global.validate" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      *ngIf="!isReadOpenMode"\r\n      color="primary"\r\n      type="button"\r\n      mat-raised-button\r\n      [disabled]="!selectedZone"\r\n      (click)="validateAndExec()"\r\n    >\r\n      {{ getComponentName() + ".validateAndExec" | translate }}\r\n    </button>\r\n  </a-footer>\r\n</a-modal>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/dialog-select-location/dialog-select-location.component.scss':
      /*!******************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/dialog-select-location/dialog-select-location.component.scss ***!
  \******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .custom-icon {\n  font-size: 6em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stbW92ZW1lbnRzL2Zvcm0vZGlhbG9nLXNlbGVjdC1sb2NhdGlvbi9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxzdG9jay1tb3ZlbWVudHNcXGZvcm1cXGRpYWxvZy1zZWxlY3QtbG9jYXRpb25cXGRpYWxvZy1zZWxlY3QtbG9jYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1tb3ZlbWVudHMvZm9ybS9kaWFsb2ctc2VsZWN0LWxvY2F0aW9uL2RpYWxvZy1zZWxlY3QtbG9jYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmN1c3RvbS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/dialog-select-location/dialog-select-location.component.ts':
      /*!****************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/dialog-select-location/dialog-select-location.component.ts ***!
  \****************************************************************************************************************/
      /*! exports provided: DialogSelectLocationComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DialogSelectLocationComponent',
          function() {
            return DialogSelectLocationComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_constants_bidt_storage_bin_type_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/constants/bidt-storage-bin-type-constants */ './src/app/shared/constants/bidt-storage-bin-type-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/types/dialog-component */ './src/app/shared/types/dialog-component.ts'
        );
        /* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../form.service */ './src/app/main/logistics/stock-movements/form/form.service.ts'
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

        var DialogSelectLocationComponent = /** @class */ (function(_super) {
          __extends(DialogSelectLocationComponent, _super);
          function DialogSelectLocationComponent(stockMovementsFormService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                'DialogSelectLocationComponent'
              ) || this;
            _this.stockMovementsFormService = stockMovementsFormService;
            _this.onChangeLocation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.onChangeAndExecLocation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.init();
            return _this;
          }
          DialogSelectLocationComponent.prototype.getComponentName = function() {
            return 'DialogSelectLocationComponent';
          };
          DialogSelectLocationComponent.prototype.init = function() {
            this.storageZoneList = [];
            this.storageBinList = [];
            this.isZoneHaveBins = false;
          };
          DialogSelectLocationComponent.prototype.ngOnInit = function() {
            this.loadZoneDropDown();
          };
          DialogSelectLocationComponent.prototype.loadZoneDropDown = function() {
            var _this = this;
            if (this.warehouse.bidtStorageBinDTOs) {
              this.warehouse.bidtStorageBinDTOs
                .filter(function(storage) {
                  return (
                    storage.bidtStorageBinTypeId ===
                    _shared_constants_bidt_storage_bin_type_constants__WEBPACK_IMPORTED_MODULE_1__[
                      'BidtStorageBinTypeConstant'
                    ].SERVICEABLE
                  );
                })
                .forEach(function(storageBin) {
                  var row = {
                    label: storageBin.sbDescription
                      ? storageBin.sbNumber + ' - ' + storageBin.sbDescription
                      : '' + storageBin.sbNumber,
                    value: storageBin.id,
                    number: Number(storageBin.sbNumber),
                    _zone: storageBin
                  };
                  _this.storageZoneList.push(row);
                });
              this.storageZoneList.sort(function(a, b) {
                return a.number - b.number;
              });
            }
          };
          DialogSelectLocationComponent.prototype.loadBinDropDown = function() {
            var _this = this;
            this.isZoneHaveBins = false;
            this.storageBinList = [];
            var storageZone = this.storageZoneList.filter(function(storage) {
              return storage.value === _this.selectedZone;
            })[0]._zone;
            if (storageZone.bins) {
              storageZone.bins.forEach(function(storageBin) {
                var row = {
                  label: storageBin.sbDescription
                    ? storageBin.sbNumber + ' - ' + storageBin.sbDescription
                    : '' + storageBin.sbNumber,
                  value: storageBin.id,
                  number: Number(storageBin.sbNumber),
                  _zone: storageBin
                };
                _this.storageBinList.push(row);
              });
              this.storageBinList.sort(function(a, b) {
                return a.number - b.number;
              });
              this.isZoneHaveBins = true;
            }
          };
          DialogSelectLocationComponent.prototype.validate = function() {
            var _this = this;
            this.rows.forEach(function(row) {
              if (row) {
                row.bidtStorageBinByBidtSbZoneReceiptId = _this.selectedZone;
                row.bidtStorageBinByBidtSbBinReceiptId = _this.selectedBin;
              }
            });
            this.stockMovementsFormService.addOrUpdateMvts(this.rows).subscribe(function(updateList) {
              var changes = [
                _this.storageZoneList.filter(function(storage) {
                  return storage.value === _this.selectedZone;
                })[0]._zone,
                _this.storageBinList.filter(function(storage) {
                  return storage.value === _this.selectedBin;
                })[0]._zone
              ];
              _this.onChangeLocation.emit(changes);
              _this.closeDialog();
            });
          };
          DialogSelectLocationComponent.prototype.validateAndExec = function() {
            var _this = this;
            this.rows.forEach(function(row) {
              if (row) {
                row.bidtStorageBinByBidtSbZoneReceiptId = _this.selectedZone;
                if (_this.selectedBin) {
                  row.bidtStorageBinByBidtSbBinReceiptId = _this.selectedBin;
                }
              }
            });
            if (this.selectedBin) {
              this.stockMovementsFormService.addOrUpdateMvts(this.rows).subscribe(function(updateList) {
                var changes = [
                  _this.storageZoneList.filter(function(storage) {
                    return storage.value === _this.selectedZone;
                  })[0]._zone,
                  _this.storageBinList.filter(function(storage) {
                    return storage.value === _this.selectedBin;
                  })[0]._zone
                ];
                var output = {
                  bidtStorageList: changes,
                  isBoth: true
                };
                _this.onChangeAndExecLocation.emit(output);
                _this.closeDialog();
              });
            } else {
              this.stockMovementsFormService.addOrUpdateMvts(this.rows).subscribe(function(updateList) {
                var changes = [
                  _this.storageZoneList.filter(function(storage) {
                    return storage.value === _this.selectedZone;
                  })[0]._zone
                ];
                var output = {
                  bidtStorageList: changes,
                  isBoth: false
                };
                _this.onChangeAndExecLocation.emit(output);
                _this.closeDialog();
              });
            }
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Object)],
            DialogSelectLocationComponent.prototype,
            'warehouse',
            void 0
          );
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            DialogSelectLocationComponent.prototype,
            'rows',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogSelectLocationComponent.prototype,
            'onChangeLocation',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            DialogSelectLocationComponent.prototype,
            'onChangeAndExecLocation',
            void 0
          );
          DialogSelectLocationComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-dialog-select-location',
                template: __webpack_require__(
                  /*! ./dialog-select-location.component.html */ './src/app/main/logistics/stock-movements/form/dialog-select-location/dialog-select-location.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./dialog-select-location.component.scss */ './src/app/main/logistics/stock-movements/form/dialog-select-location/dialog-select-location.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [_form_service__WEBPACK_IMPORTED_MODULE_4__['FormService']])
            ],
            DialogSelectLocationComponent
          );
          return DialogSelectLocationComponent;
        })(_shared_types_dialog_component__WEBPACK_IMPORTED_MODULE_3__['DialogComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/form.component.html':
      /*!*************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/form.component.html ***!
  \*************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <h2 class="page-title" *ngIf="formInfoCriteria">\r\n        {{ formInfoCriteria.movementType.label }}\r\n      </h2>\r\n\r\n      <div class="page-subtitle">\r\n        <div *ngIf="subtitle" class="page-subtitle">- {{ subtitle }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" *ngIf="isTreatPhase" mat-raised-button (click)="restTreatPhase()">\r\n      {{ componentNamespace + ".treatEnd" | translate }}\r\n    </button>\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="reload()">{{ "global.refresh" | translate }}</button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row" *ngIf="!showMovementInformation">\r\n        <div class="grid-cell--8">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ componentNamespace + ".criteria" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content" *ngIf="formInfoCriteria">\r\n              <div class="column">\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentNamespace + ".site" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <div class="form-control-generic">\r\n                        {{ formInfoCriteria.site }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentNamespace + ".warehouse" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <div class="form-control-generic">\r\n                        {{ formInfoCriteria.warehouse }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ componentNamespace + ".status" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <div class="form-control-generic">\r\n                        {{ formInfoCriteria.status }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label\r\n                      class="form-label"\r\n                      *ngIf="\r\n                        formInfoCriteria.status !=\r\n                          getMvtStockStatus(awPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY).label &&\r\n                        formInfoCriteria.status !=\r\n                          getMvtStockStatus(awPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY).label\r\n                      "\r\n                      >{{ componentNamespace + ".beforeDate" | translate }}</label\r\n                    >\r\n                    <label\r\n                      class="form-label"\r\n                      *ngIf="\r\n                        formInfoCriteria.status ==\r\n                          getMvtStockStatus(awPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY).label ||\r\n                        formInfoCriteria.status ==\r\n                          getMvtStockStatus(awPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY).label\r\n                      "\r\n                      >{{ componentNamespace + ".the" | translate }}</label\r\n                    >\r\n\r\n                    <div class="form-control">\r\n                      <div class="form-control-generic">\r\n                        {{ formInfoCriteria.date | date: appConstants.JS_DATE }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="grid-cell--4">\r\n          <div class="grid-cell grid-cell--container advancement-cell">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">\r\n                  {{ componentNamespace + ".advancement" | translate }}\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content" *ngIf="movementsStatusMap">\r\n              <div class="advancement-items">\r\n                <div class="advancement-item">\r\n                  <div>{{ advancementPlanned }}</div>\r\n                  <div>{{ getMvtStockStatus(awPropertiesConstants.MM_MVT_STATUS_PLANNED_KEY).label }}</div>\r\n                </div>\r\n\r\n                <div class="advancement-item">\r\n                  <div>{{ advancementRequested }}</div>\r\n                  <div>{{ getMvtStockStatus(awPropertiesConstants.MM_MVT_STATUS_ON_GOING_KEY).label }}</div>\r\n                </div>\r\n\r\n                <div class="advancement-item">\r\n                  <div>{{ advancementChecked }}</div>\r\n                  <div>{{ getMvtStockStatus(awPropertiesConstants.MM_MVT_STATUS_CHECKED_KEY).label }}</div>\r\n                </div>\r\n\r\n                <div class="advancement-item">\r\n                  <div>{{ advancementReleased }}</div>\r\n                  <div>{{ getMvtStockStatus(awPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY).label }}</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="advancement-progress" *ngIf="isTreatPhase">\r\n                <p-progressBar\r\n                  [ngClass]="{ green: advancement === component.PROGRESS_MAX }"\r\n                  [value]="advancement"\r\n                ></p-progressBar>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-row" *ngIf="!showMovementInformation">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title" *ngIf="!showCardView">\r\n                  {{ componentNamespace + ".movements" | translate }} ({{\r\n                    stockMovementTableDataSource ? stockMovementTableDataSource.dataCount : 0\r\n                  }})\r\n                </h3>\r\n                <h3 class="grid-cell-title" *ngIf="showCardView">\r\n                  {{ componentNamespace + ".movements" | translate }} ({{\r\n                    stockMovementTableDataSource ? stockMovementTableDataSource.dataSelectionCount : 0\r\n                  }})\r\n                </h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content">\r\n              <a-table [dataSource]="stockMovementTableDataSource" *ngIf="!showCardView">\r\n                <ng-template tableActionsDef>\r\n                  <button\r\n                    type="button"\r\n                    *ngIf="\r\n                      stockMovementTableDataSource.hasDataSelection &&\r\n                      isTreatPhase &&\r\n                      getCurrentComponentContext == componentContext.STOCK_PILLING &&\r\n                      isChangeLocationVisible()\r\n                    "\r\n                    mat-raised-button\r\n                    (click)="openSelectLocaationDialog()"\r\n                  >\r\n                    {{ componentNamespace + ".changeLocation" | translate }}\r\n                  </button>\r\n                  <button\r\n                    type="button"\r\n                    *ngIf="\r\n                      stockMovementTableDataSource.hasDataSelection &&\r\n                      !isTreatPhase &&\r\n                      !checkIfExecutedSelected() &&\r\n                      !bidtShipmentFolder\r\n                    "\r\n                    mat-raised-button\r\n                    (click)="checkIfOnGoingSelected()"\r\n                  >\r\n                    {{ componentNamespace + ".treat" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    type="button"\r\n                    *ngIf="\r\n                      stockMovementTableDataSource.hasDataSelection &&\r\n                      !isTreatPhase &&\r\n                      !checkIfExecutedSelected() &&\r\n                      !bidtShipmentFolder &&\r\n                      getCurrentComponentContext == componentContext.PICKING &&\r\n                      checkAllSameFinalReceipt(this.stockMovementTableDataSource.dataSelection) &&\r\n                      checkAllSameTransferOrderType(this.stockMovementTableDataSource.dataSelection)\r\n                    "\r\n                    mat-raised-button\r\n                    (click)="createShipmentAndPackage()"\r\n                  >\r\n                    {{ componentNamespace + ".treatAndShip" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    type="button"\r\n                    *ngIf="\r\n                      stockMovementTableDataSource.hasDataSelection &&\r\n                      isTreatPhase &&\r\n                      !checkIfExecutedSelected() &&\r\n                      getCurrentComponentContext == componentContext.PICKING &&\r\n                      isCheckMvtsVisible()\r\n                    "\r\n                    mat-raised-button\r\n                    (click)="checkMvts()"\r\n                  >\r\n                    {{ componentNamespace + ".checked" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    type="button"\r\n                    *ngIf="\r\n                      stockMovementTableDataSource.hasDataSelection &&\r\n                      !isTreatPhase &&\r\n                      !checkIfExecutedSelected() &&\r\n                      bidtShipmentFolder\r\n                    "\r\n                    mat-raised-button\r\n                    (click)="openAddPackageToShipment()"\r\n                  >\r\n                    {{ componentNamespace + ".addShipment" | translate }}\r\n                  </button>\r\n\r\n                  <button\r\n                    type="button"\r\n                    *ngIf="\r\n                      stockMovementTableDataSource.hasDataSelection &&\r\n                      isTreatPhase &&\r\n                      !checkIfExecutedSelected() &&\r\n                      !checkDislocationNeeded()\r\n                    "\r\n                    mat-raised-button\r\n                    (click)="executeMvts()"\r\n                  >\r\n                    {{ componentNamespace + ".execute" | translate }}\r\n                  </button>\r\n\r\n                  <i\r\n                    class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n                    [ngClass]="{ active: filtersVisible }"\r\n                    aria-hidden="true"\r\n                    (click)="opTableFilter.toggle($event)"\r\n                    *ngIf="stockMovementTableDataSource.data.length > 0"\r\n                  ></i>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="mvtStockCode" let-rowData="rowData">\r\n                  <div>\r\n                    <a (click)="openStockMovement(rowData)">{{ rowData["mvtStockCode"] }}</a>\r\n\r\n                    <i\r\n                      *ngIf="rowData[\'bidtStockMvtOperations\']"\r\n                      (click)="openDocumentDialog(rowData[\'bidtStockMvtOperations\'])"\r\n                      class="fa fa-th-list icon"\r\n                      aria-hidden="true"\r\n                    ></i>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="article" let-rowData="rowData">\r\n                  <div>\r\n                    <a (click)="openPartNumberLink(rowData[\'pnCode\'])">{{ rowData["pnCode"] }}</a>\r\n                  </div>\r\n                  <div>\r\n                    <i>{{ rowData["articleDesignation"] }}</i>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="batchNumber" let-rowData="rowData">\r\n                  <div *ngIf="rowData[\'batchNumber\']">\r\n                    <a (click)="openLink(rowData[\'_bidoEquipment\'])">{{ rowData["batchNumber"] }}</a>\r\n                  </div>\r\n                  <div *ngIf="rowData[\'batchNumber\']">\r\n                    <i>{{ rowData["operationalStatus"] }}</i>\r\n                  </div>\r\n                  <div *ngIf="rowData[\'needDislocate\']">\r\n                    <span style="color: red;"\r\n                      >{{ componentNamespace + ".qtyEqual" | translate }}\r\n                      {{ rowData["_bidoEquipment"].quantity | formatNumber }}</span\r\n                    >\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="sn" let-rowData="rowData">\r\n                  <div *ngIf="!rowData[\'manufacturingBatch\'] && rowData[\'sn\']">\r\n                    <a (click)="openLinkEquipment(rowData[\'_bidoEquipment\'].equipmentCode)">{{ rowData["sn"] }}</a>\r\n                  </div>\r\n                  <div *ngIf="rowData[\'manufacturingBatch\']">\r\n                    <a (click)="openMfgBatch(rowData[\'manufacturingBatch\'].batchNumber)"\r\n                      >{{ rowData["manufacturingBatch"].batchNumber }}\r\n                    </a>\r\n                  </div>\r\n\r\n                  <div *ngIf="!rowData[\'batchNumber\']">\r\n                    <i>{{ rowData["operationalStatus"] }}</i>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="qty" let-rowData="rowData">\r\n                  <div *ngIf="!rowData[\'needDislocate\']">{{ rowData["qty"] | formatNumber }}</div>\r\n                  <div\r\n                    *ngIf="rowData[\'needDislocate\']"\r\n                    class="need-disclocate"\r\n                    pTooltip="{{ componentNamespace + \'.tooltipDisclocate\' | translate }}"\r\n                    tooltipPosition="top"\r\n                  >\r\n                    <span\r\n                      >{{ rowData["qty"] | formatNumber }}\r\n                      <i\r\n                        class="fa fa-fw fa-cubes"\r\n                        style="color: initial; cursor: pointer; margin-left: 5px;"\r\n                        aria-hidden="true"\r\n                        (click)="showAddUpdatePopup(rowData)"\r\n                      ></i\r\n                    ></span>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="sbOutput" let-rowData="rowData">\r\n                  <div *ngIf="rowData[\'bidtStorageBinZoneIssue\']?.sbNumber">\r\n                    <div style="min-width: 2rem; display: inline-block;">\r\n                      {{ componentNamespace + ".area" | translate }}\r\n                    </div>\r\n                    <span style="font-weight: 600">\r\n                      {{ rowData["bidtStorageBinZoneIssue"]?.sbNumber }}\r\n                      <ng-container *ngIf="rowData[\'bidtStorageBinZoneIssue\']?.sbDescription">\r\n                        - {{ rowData["bidtStorageBinZoneIssue"]?.sbDescription }}\r\n                      </ng-container>\r\n                    </span>\r\n                  </div>\r\n\r\n                  <div *ngIf="rowData[\'bidtStorageBinBinIssue\']?.sbNumber">\r\n                    <div style="min-width: 3rem; display: inline-block;">\r\n                      {{ componentNamespace + ".bins" | translate }}\r\n                    </div>\r\n                    <span style="font-weight: 600">{{ rowData["bidtStorageBinBinIssue"]?.sbNumber }}</span>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="sbInput" let-rowData="rowData">\r\n                  <div *ngIf="rowData[\'bidtStorageBinZoneReceipt\']?.sbNumber">\r\n                    <div style="min-width: 2rem; display: inline-block;">\r\n                      {{ componentNamespace + ".area" | translate }}\r\n                    </div>\r\n                    <span style="font-weight: 600">\r\n                      {{ rowData["bidtStorageBinZoneReceipt"]?.sbNumber }}\r\n                      <ng-container *ngIf="rowData[\'bidtStorageBinZoneReceipt\']?.sbDescription">\r\n                        - {{ rowData["bidtStorageBinZoneReceipt"]?.sbDescription }}\r\n                      </ng-container>\r\n                    </span>\r\n                  </div>\r\n\r\n                  <div *ngIf="rowData[\'bidtStorageBinBinReceipt\']?.sbNumber">\r\n                    <div style="min-width: 3rem; display: inline-block;">\r\n                      {{ componentNamespace + ".bins" | translate }}\r\n                    </div>\r\n                    <span style="font-weight: 600">{{ rowData["bidtStorageBinBinReceipt"]?.sbNumber }}</span>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="status" let-rowData="rowData">\r\n                  <div\r\n                    [ngClass]="{\r\n                      \'green-background\': rowData[\'smoStatus\'].value == awPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY\r\n                    }"\r\n                  >\r\n                    {{ rowData["smoStatus"].label }}\r\n                  </div>\r\n                  <div>\r\n                    {{ rowData["statusDate"] | date: appConstants.JS_DATE }}\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="docOfOrigin" let-rowData="rowData">\r\n                  <div>\r\n                    <a (click)="openDocOrigine(rowData)">{{ rowData["documentNum"] }}</a>\r\n                    <div\r\n                      class="alert alert--nok"\r\n                      *ngIf="rowData[\'criticity\'] === awPropertiesConstants.LOGISTICAL_CRITICALITY_IMMEDIATE"\r\n                    >\r\n                      {{ componentNamespace + ".immediate" | translate }}\r\n                    </div>\r\n\r\n                    <div\r\n                      class="alert alert--warning"\r\n                      *ngIf="rowData[\'criticity\'] === awPropertiesConstants.LOGISTICAL_CRITICALITY_URGENT"\r\n                    >\r\n                      {{ componentNamespace + ".urgent" | translate }}\r\n                    </div>\r\n                    <div\r\n                      class="alert alert--ok"\r\n                      *ngIf="rowData[\'criticity\'] === awPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE"\r\n                    >\r\n                      {{ componentNamespace + ".routine" | translate }}\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <i>{{ rowData["documentDescription"] }}</i>\r\n                  </div>\r\n                </ng-template>\r\n\r\n                <ng-template columnDef="finalRecipient" let-rowData="rowData">\r\n                  <div *ngIf="rowData[\'bidoCustomerName\']">\r\n                    <div class="bold">\r\n                      {{ rowData["bidoCustomerName"] }}\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf="!rowData[\'bidoCustomerName\']">\r\n                    <div class="bold">\r\n                      {{ rowData["site"] }}\r\n                    </div>\r\n                    <div>\r\n                      <i>\r\n                        {{ rowData["warehouse"] }}\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </a-table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-select-container\r\n    *ngIf="containerDialogVisible"\r\n    [(display)]="containerDialogVisible"\r\n    (onAdded)="onSelectContainer($event)"\r\n  ></aw-dialog-select-container>\r\n\r\n  <aw-confirm-dialog-treatment\r\n    *ngIf="isOnGoingSelected"\r\n    [(display)]="isOnGoingSelected"\r\n    (acceptEvent)="treatMvts()"\r\n  ></aw-confirm-dialog-treatment>\r\n\r\n  <aw-dialog-select-location\r\n    *ngIf="selectedLocationDialogVisable"\r\n    [(display)]="selectedLocationDialogVisable"\r\n    [rows]="this.stockMvtList"\r\n    [warehouse]="stockMovementList[0].warehouse"\r\n    (onChangeLocation)="onChangeLocation($event)"\r\n    (onChangeAndExecLocation)="onChangeAndExecLocation($event)"\r\n  ></aw-dialog-select-location>\r\n\r\n  <aw-dialog-add-package\r\n    [bidtDeliveryFolder]="bidtShipmentFolder"\r\n    *ngIf="displayAddPackaage"\r\n    [(display)]="displayAddPackaage"\r\n    (onCreate)="addToShipmentFolder($event)"\r\n  ></aw-dialog-add-package>\r\n\r\n  <aw-dialog-document-categories\r\n    *ngIf="displayDocumentDialog"\r\n    [(display)]="displayDocumentDialog"\r\n    [bidtStockMvtOperationDTOList]="stockMvtOperationSelected"\r\n  ></aw-dialog-document-categories>\r\n\r\n  <aw-dialog-create-shipment-folder\r\n    [(display)]="displayCreateShipmentFolder"\r\n    (onValidate)="createShipmentFolder($event)"\r\n    *ngIf="displayCreateShipmentFolder"\r\n    [movementStock]="firstSelectedMvt"\r\n  ></aw-dialog-create-shipment-folder>\r\n\r\n  <p-overlayPanel #opTableFilter class="aw-overlay" (onShow)="filtersVisible = true" (onHide)="filtersVisible = false">\r\n    <div>\r\n      <div *ngIf="isDbInput && filterInLocList.length > 0">\r\n        <div class="form-group">\r\n          <label class="form-label"> {{ componentNamespace + ".inboundZone" | translate }} </label>\r\n\r\n          <div class="form-control">\r\n            <p-selectButton [(ngModel)]="filterInChoose" [options]="filterInLocList"></p-selectButton>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf="isSbOutput && filterOutLocList.length > 0" class="filter">\r\n        <div class="form-group">\r\n          <label class="form-label"> {{ componentNamespace + ".outboundZone" | translate }} </label>\r\n\r\n          <div class="form-control">\r\n            <p-selectButton [(ngModel)]="filterOutChoose" [options]="filterOutLocList"></p-selectButton>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="filter">\r\n        <div class="form-group">\r\n          <label class="form-label"> {{ componentNamespace + ".finalRecipient" | translate }} </label>\r\n\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              placeholder="&nbsp;"\r\n              [showClear]="true"\r\n              [(ngModel)]="filterFinalReceiptChoose"\r\n              [options]="filterFinalReceiptList"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div style="display: flex; justify-content: flex-end; margin-top: 32px;">\r\n        <button\r\n          type="button"\r\n          mat-raised-button\r\n          (click)="opTableFilter.hide(); filtersVisible = false; clearTableFilters()"\r\n        >\r\n          {{ "resetFilters" | translate }}\r\n        </button>\r\n\r\n        <button\r\n          type="button"\r\n          mat-raised-button\r\n          color="primary"\r\n          style="margin-left: 8px;"\r\n          (click)="opTableFilter.hide(); filtersVisible = false; filterTable()"\r\n        >\r\n          {{ "filter" | translate }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </p-overlayPanel>\r\n</div>\r\n\r\n<aw-dialog-add-update\r\n  *ngIf="openAddUpdatedialog"\r\n  [(display)]="openAddUpdatedialog"\r\n  [subAssemblyObject]="subAssemblyPopupObject"\r\n  [quantity]="addUpdateDialogQuantity"\r\n  [operatonalStatus]="addUpdateDialogEquipementStatus"\r\n  [unit]="packagingBatchUnit"\r\n  [fromStockMovement]="true"\r\n  (onValidate)="updateSubAssembly($event)"\r\n>\r\n</aw-dialog-add-update>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/form.component.scss':
      /*!*************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/form.component.scss ***!
  \*************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .alert {\n  display: inline-block;\n  text-transform: uppercase;\n  font-weight: 600;\n  width: 5em;\n  text-align: center;\n  margin-left: 6px; }\n  :host .alert.alert--ok {\n    background-color: #4caf50; }\n  :host .alert.alert--warning {\n    background-color: #ffc107; }\n  :host .alert.alert--nok {\n    background-color: #f6685e; }\n  :host .alert.alert--none {\n    background-color: #c8d4d6; }\n  :host .green-background {\n  background-color: #4caf50;\n  border-radius: 4px;\n  padding: 4px; }\n  :host .advancement-cell {\n  display: flex;\n  flex-direction: column; }\n  :host .advancement-cell .grid-cell-content {\n    flex-direction: column !important;\n    flex-grow: 1; }\n  :host .advancement-cell .grid-cell-content .advancement-items {\n      display: flex;\n      flex-direction: row; }\n  :host .advancement-cell .grid-cell-content .advancement-items .advancement-item {\n        flex-grow: 1;\n        text-align: center; }\n  :host .advancement-cell .grid-cell-content .advancement-items .advancement-item > div:first-of-type {\n          font-size: 3em; }\n  :host .advancement-cell .grid-cell-content .advancement-progress {\n      align-items: center;\n      display: flex;\n      flex-direction: row;\n      flex-grow: 1; }\n  :host .advancement-cell .grid-cell-content .advancement-progress p-progressBar {\n        width: 100%; }\n  :host ::ng-deep .green .ui-progressbar .ui-progressbar-value {\n  border: 0 none;\n  margin: 0;\n  background: #4caf50 !important; }\n  :host .bold {\n  font-style: bold; }\n  :host .filter {\n  margin-top: 8px; }\n  :host .need-disclocate {\n  color: #ff003c; }\n  :host .icon {\n  margin-left: 8px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stbW92ZW1lbnRzL2Zvcm0vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcc3RvY2stbW92ZW1lbnRzXFxmb3JtXFxmb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1tb3ZlbWVudHMvZm9ybS9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX2NvbnN0YW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUkscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTtFQVBwQjtJQVVNLHlCQ09nQixFQUFBO0VEakJ0QjtJQWNNLHlCQ0lVLEVBQUE7RURsQmhCO0lBa0JNLHlCQ0VjLEVBQUE7RURwQnBCO0lBc0JNLHlCQ0NTLEVBQUE7RUR2QmY7RUEwQkkseUJDVGtCO0VEVWxCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7RUE1QmhCO0VBZ0NJLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQWpDMUI7SUFvQ00saUNBQWlDO0lBQ2pDLFlBQVksRUFBQTtFQXJDbEI7TUF3Q1EsYUFBYTtNQUNiLG1CQUFtQixFQUFBO0VBekMzQjtRQTRDVSxZQUFZO1FBQ1osa0JBQWtCLEVBQUE7RUE3QzVCO1VBZ0RZLGNBQWMsRUFBQTtFQWhEMUI7TUFzRFEsbUJBQW1CO01BQ25CLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsWUFBWSxFQUFBO0VBekRwQjtRQTREVSxXQUFXLEVBQUE7RUE1RHJCO0VBcUVRLGNBQWM7RUFDZCxTQUFTO0VBQ1QsOEJBQW9DLEVBQUE7RUF2RTVDO0VBNkVJLGdCQUFnQixFQUFBO0VBN0VwQjtFQWlGSSxlQUFlLEVBQUE7RUFqRm5CO0VBcUZJLGNBdkZpQixFQUFBO0VBRXJCO0VBeUZJLGdCQUFnQjtFQUNoQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1tb3ZlbWVudHMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImNvbnN0YW50c1wiO1xuQGltcG9ydCBcIm1peGluc1wiO1xuJHJlZDogcmdiKDI1NSwgMCwgNjApO1xuXG46aG9zdCB7XG4gIC5hbGVydCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuXG4gICAgJi5hbGVydC0tb2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcbiAgICB9XG5cbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XG4gICAgfVxuXG4gICAgJi5hbGVydC0tbm9rIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQtbGlnaHQxO1xuICAgIH1cblxuICAgICYuYWxlcnQtLW5vbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXkxO1xuICAgIH1cbiAgfVxuICAuZ3JlZW4tYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICB9XG5cbiAgLmFkdmFuY2VtZW50LWNlbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5ncmlkLWNlbGwtY29udGVudCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgIC5hZHZhbmNlbWVudC1pdGVtcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgLmFkdmFuY2VtZW50LWl0ZW0ge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAmID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hZHZhbmNlbWVudC1wcm9ncmVzcyB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcblxuICAgICAgICBwLXByb2dyZXNzQmFyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIDo6bmctZGVlcCAuZ3JlZW4ge1xuICAgIC51aS1wcm9ncmVzc2JhciB7XG4gICAgICAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xuICAgICAgICBib3JkZXI6IDAgbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJvbGQge1xuICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIH1cblxuICAuZmlsdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cblxuICAubmVlZC1kaXNjbG9jYXRlIHtcbiAgICBjb2xvcjogJHJlZDtcbiAgfVxuXG4gIC5pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/form.component.ts':
      /*!***********************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/form.component.ts ***!
  \***********************************************************************/
      /*! exports provided: ComponentContext, FormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ComponentContext', function() {
          return ComponentContext;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FormComponent', function() {
          return FormComponent;
        });
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/app-constants */ './src/app/shared/constants/app-constants.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/bidt-stock-mvt-constants */ './src/app/shared/constants/bidt-stock-mvt-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/types/form-page-component */ './src/app/shared/types/form-page-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
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
        var __assign =
          (undefined && undefined.__assign) ||
          function() {
            __assign =
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            return __assign.apply(this, arguments);
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

        var ComponentContext;
        (function(ComponentContext) {
          ComponentContext[(ComponentContext['PICKING'] = 0)] = 'PICKING';
          ComponentContext[(ComponentContext['STOCK_MOVEMENT'] = 1)] = 'STOCK_MOVEMENT';
          ComponentContext[(ComponentContext['STOCK_PILLING'] = 2)] = 'STOCK_PILLING';
        })(ComponentContext || (ComponentContext = {}));
        var FormComponent = /** @class */ (function(_super) {
          __extends(FormComponent, _super);
          function FormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            translateService,
            extractTranslationPipe,
            logisticsService,
            propertiesService,
            searchService,
            formService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.sessionService = sessionService;
            _this.translateService = translateService;
            _this.extractTranslationPipe = extractTranslationPipe;
            _this.logisticsService = logisticsService;
            _this.propertiesService = propertiesService;
            _this.searchService = searchService;
            _this.formService = formService;
            _this.showMovementInformation = false;
            _this.appConstants = _shared_constants_app_constants__WEBPACK_IMPORTED_MODULE_2__['AppConstants'];
            _this.awPropertiesConstants =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants'];
            _this.component = FormComponent;
            _this.componentContext = ComponentContext;
            _this.componentNamespace =
              _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__[
                'ComponentConstants'
              ].LOG_STOCK_MOVEMENTS_FORM;
            _this.init();
            return _this;
          }
          FormComponent.prototype.ngOnInit = function() {
            var _this = this;
            _super.prototype.ngOnInit.call(this);
            if (this.componentData.objectId) {
              var object = this.serializationService.deserialize(this.componentData.objectId);
              this.searchParam = object.searchParameters;
              this.stockMvtListInit = object.bidtStockList;
              this.bidtShipmentFolder = object.bidtShipmentFolder ? object.bidtShipmentFolder : undefined;
              this.bidtReceiptFolder = object.bidtReceiptFolder ? object.bidtReceiptFolder : undefined;
              this.shipmentPackageChoose = object.bidtPackageDTO ? object.bidtPackageDTO : undefined;
              this.workOrderLinkToAssetId = object.workOrderLinkToAssetId ? object.workOrderLinkToAssetId : undefined;
              this.assetWithOT = object.assetWithOT;
              this.folderHaveAsset = object.folderHaveAsset;
            }
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                  .MVT_STATUS_MAP
              )
              .subscribe(function(results) {
                _this.movementsStatusMap = !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_11__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
                _this.doSearch();
              });
          };
          // ////////////////////////////////////////////////////////////////////////////
          FormComponent.prototype.doSearch = function() {
            var _this = this;
            var input = {
              stockMvtList: this.stockMvtListInit,
              shipmentFolder: this.bidtShipmentFolder ? this.bidtShipmentFolder : undefined,
              receiptFolder: this.bidtReceiptFolder ? this.bidtReceiptFolder : undefined,
              workOrderLinkToAssetId: this.workOrderLinkToAssetId,
              assetWithOT: this.assetWithOT
            };
            this.searchService.findBidtStockMvtForm(input).subscribe({
              next: function(stockMovements) {
                _this.stockMovementList = stockMovements;
                _this.loadCriteria();
                _this.loadReferentialData();
              }
            });
          };
          FormComponent.prototype.onSelectContainer = function() {
            // TODO
          };
          FormComponent.prototype.reload = function() {
            this.isDbInput = false;
            this.isSbOutput = false;
            this.stockMovementsRows = [];
            this.initStockMovementTableDataSource();
            this.loadCriteria();
          };
          FormComponent.prototype.selectContainter = function() {
            this.containerDialogVisible = true;
          };
          FormComponent.prototype.withdrawAndShip = function() {
            // TODO
          };
          // ////////////////////////////////////////////////////////////////////////////
          FormComponent.prototype.init = function() {
            this.stockMovementTypes = [];
            this.stockMovementsRows = [];
            this.filterInLocList = [];
            this.filterOutLocList = [];
            this.filterFinalReceiptList = [];
            this.shipmentCreatedOutput = undefined;
            this.advancement = 0;
            this.advancementChecked = 0;
            this.advancementPlanned = 0;
            this.advancementReleased = 0;
            this.advancementRequested = 0;
            this.advancementWaiting = 0;
            this.firstLaunch = true;
            this.containerDialogVisible = false;
            this.isDbInput = false;
            this.isSbOutput = false;
            this.isTreatPhase = false;
            this.isOnGoingSelected = false;
            this.filtersVisible = false;
            this.selectedLocationDialogVisable = false;
            this.displayAddPackaage = false;
            this.displayDocumentDialog = false;
            this.displayCreateShipmentFolder = false;
            this.shipmentFolderCreated = false;
            this.assetAddedToShipmentFolder = false;
            this.initStockMovementTableDataSource();
            this.getOperationalStatusMap();
            //
            // this.showCardView = false;
            // this.showMovementInformation = false;
            // this.subtitle = undefined;
          };
          FormComponent.prototype.getOperationalStatusMap = function() {
            var _this = this;
            var opeartionalStatusMap$ = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .OPERATIONAL_STATUS_MAP
            );
            var batchStatusMap$ = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .BATCH_EQUIPMENT_STATUS_MAP
            );
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__['forkJoin'])([opeartionalStatusMap$, batchStatusMap$]).subscribe({
              next: function(_a) {
                var _b = __read(_a, 2),
                  opeartionalStatusMap = _b[0],
                  batchStatusMap = _b[1];
                _this.opeartionalStatusMap = !!opeartionalStatusMap
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_11__['SelectItemUtils'].fromLabelValues(
                      opeartionalStatusMap
                    )
                  : [];
                _this.opeartionalStatusMap = _this.opeartionalStatusMap.concat(
                  !!batchStatusMap
                    ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_11__['SelectItemUtils'].fromLabelValues(
                        batchStatusMap
                      )
                    : []
                );
              }
            });
          };
          FormComponent.prototype.initStockMovementTableDataSource = function() {
            this.stockMovementTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'mvtStockCode',
                  translateKey: this.getTranslateKey('mvtStockCode', this.componentNamespace),
                  width: '10%'
                },
                {
                  field: 'article',
                  translateKey: this.getTranslateKey('refeArticle', this.componentNamespace),
                  width: '12.5%'
                },
                {
                  field: 'batchNumber',
                  translateKey: this.getTranslateKey('batchNumber', this.componentNamespace),
                  width: '10%'
                },
                {
                  field: 'sn',
                  translateKey: this.getTranslateKey('sn', this.componentNamespace),
                  width: '10%'
                },
                {
                  field: 'qty',
                  translateKey: this.getTranslateKey('qty', this.componentNamespace),
                  width: '5%',
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__['ColumnAlignment'].CENTER
                },
                {
                  field: 'unit',
                  translateKey: this.getTranslateKey('unit', this.componentNamespace),
                  width: '3%',
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__['ColumnAlignment'].CENTER
                },
                {
                  field: 'status',
                  translateKey: this.getTranslateKey('status', this.componentNamespace),
                  width: '6%'
                },
                {
                  field: 'docOfOrigin',
                  translateKey: this.getTranslateKey('docOfOrigin', this.componentNamespace),
                  width: '12.5%'
                },
                {
                  field: 'finalRecipient',
                  translateKey: this.getTranslateKey('finalRecipient', this.componentNamespace),
                  width: '10%'
                }
              ],
              data: []
            });
          };
          FormComponent.prototype.changeColumns = function(movementType) {
            var _this = this;
            var place = 6;
            var numberDeletion = 0;
            switch (movementType.value.smtWay) {
              case _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__['BidtStockMvtConstants']
                .MVT_WAY_CREDIT:
                this.isDbInput = true;
                var columnSbInput = {
                  field: 'sbInput',
                  translateKey: this.getTranslateKey('inboundLocalisation', this.componentNamespace),
                  width: '7,5%',
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__['ColumnAlignment'].LEFT
                };
                this.stockMovementTableDataSource.columns.splice(place, numberDeletion, columnSbInput);
                break;
              case _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__['BidtStockMvtConstants']
                .MVT_WAY_DEBIT:
                this.isSbOutput = true;
                var columnSbOutput = {
                  field: 'sbOutput',
                  translateKey: this.getTranslateKey('outboundLocalisation', this.componentNamespace),
                  width: '7,5%',
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__['ColumnAlignment'].LEFT
                };
                this.stockMovementTableDataSource.columns.splice(place, numberDeletion, columnSbOutput);
                break;
              case _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_4__['BidtStockMvtConstants']
                .MVT_WAY_TRANSFER:
                this.isDbInput = true;
                this.isSbOutput = true;
                var columnBothSb = [
                  {
                    field: 'sbInput',
                    translateKey: this.getTranslateKey('inboundLocalisation', this.componentNamespace),
                    width: '7.5%',
                    alignment:
                      _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__['ColumnAlignment'].LEFT
                  },
                  {
                    field: 'sbOutput',
                    translateKey: this.getTranslateKey('outboundLocalisation', this.componentNamespace),
                    width: '7.5%',
                    alignment:
                      _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__['ColumnAlignment'].LEFT
                  }
                ];
                columnBothSb.forEach(function(column) {
                  _this.stockMovementTableDataSource.columns.splice(place, numberDeletion, column);
                });
                break;
              default:
                break;
            }
          };
          FormComponent.prototype.updateAdvancement = function(stockMovements) {
            var statuses = stockMovements.map(function(stockMovement) {
              return stockMovement.mvtStatus;
            });
            this.advancementChecked = statuses.filter(function(status) {
              return (
                status ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .MM_MVT_STATUS_CHECKED_KEY
              );
            }).length;
            this.advancementPlanned = statuses.filter(function(status) {
              return (
                status ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .MM_MVT_STATUS_PLANNED_KEY
              );
            }).length;
            this.advancementReleased = statuses.filter(function(status) {
              return (
                status ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .MM_MVT_STATUS_EXECUTED_KEY
              );
            }).length;
            this.advancementRequested = statuses.filter(function(status) {
              return (
                status ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .MM_MVT_STATUS_ON_GOING_KEY
              );
            }).length;
            if (this.isTreatPhase) {
              var percentage = 100;
              this.advancement = Math.floor((this.advancementReleased / statuses.length) * percentage);
            } else {
              this.advancement = 0;
            }
          };
          // ////////////////////////////////////////////////////////////////////////////
          // ////////////////////////////////////////////////////////////////////////////
          // ////////////////////////////////////////////////////////////////////////////
          FormComponent.prototype.getOperationnalStatus = function(key) {
            return this.opeartionalStatusMap.filter(function(status) {
              return status.value === key;
            })[0].label;
          };
          FormComponent.prototype.getMvtStockStatus = function(key) {
            return this.movementsStatusMap.filter(function(status) {
              return status.value === key;
            })[0];
          };
          FormComponent.prototype.loadStockMovementTable = function() {
            var _this = this;
            this.changeColumns(this.formInfoCriteria.movementType);
            this.updateAdvancement(
              this.stockMovementList.map(function(row) {
                return row.stockMvt;
              })
            );
            this.stockMovementList
              .filter(function(movement) {
                return (
                  !_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__['ObjectUtils'].isDefined(
                    movement.procurementRequest
                  ) ||
                  _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__['ObjectUtils'].isDefined(
                    movement.procurementRequest.procType
                  )
                );
              })
              .forEach(function(movement) {
                var movementRow = {
                  articleDesignation: movement.stockMvt.birePnArticleDesignation,
                  batchNumber: movement.stockMvt.stockMvtBatchNumber,
                  bidoCustomerName: movement.bidoCustomerReceipt
                    ? movement.bidoCustomerReceipt.customerCode +
                      (movement.bidoCustomerReceipt.customerName
                        ? ' - ' + movement.bidoCustomerReceipt.customerName
                        : '')
                    : undefined,
                  criticity: movement.procurementRequest
                    ? movement.procurementRequest.criticality
                    : movement.transferOrder
                    ? movement.transferOrder.criticality
                    : movement.deliveryFolder
                    ? movement.deliveryFolder.criticality
                    : undefined,
                  documentNum: movement.procurementRequest
                    ? movement.procReqWorkOrderDTO
                      ? movement.procReqWorkOrderDTO.woCode
                      : movement.procurementRequest.procCode
                    : movement.transferOrder
                    ? movement.transferOrder.torCode
                    : movement.deliveryFolder
                    ? movement.deliveryFolder.dfCode
                    : movement.mvtWorkOrderDTO
                    ? movement.mvtWorkOrderDTO.woCode
                    : undefined,
                  documentDescription: movement.procurementRequest
                    ? movement.procReqWorkOrderDTO
                      ? _this.getWoType(movement.procReqWorkOrderDTO.woType)
                      : _this.getProcRequestTypes(movement.procurementRequest.procType)
                    : movement.transferOrder
                    ? _this.extractTranslationPipe.transform(
                        _this.getShipementType(Number(movement.transferOrder.torType)).dftDesignation
                      )
                    : movement.deliveryFolder
                    ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].orEmpty(
                        _this.extractTranslationPipe.transform(movement.deliveryFolder.bidtDfType.dftDesignation)
                      )
                    : movement.mvtWorkOrderDTO
                    ? _this.getWoType(movement.mvtWorkOrderDTO.woType)
                    : undefined,
                  bidtStockMvtOperations: !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_9__[
                    'ListUtils'
                  ].isNullOrEmpty(movement.stockMvt.bidtStockMvtOperations)
                    ? movement.stockMvt.bidtStockMvtOperations
                    : undefined,
                  needDislocate: _this.getNeedDislocate(movement),
                  id: movement.stockMvt.id,
                  pnCode: movement.stockMvt.birePnPnCode,
                  sn: movement.stockMvt.stockMvtSn,
                  site: movement.finalSite
                    ? movement.finalSite.siteCode +
                      (movement.finalSite.siteName ? ' - ' + movement.finalSite.siteName : '')
                    : undefined,
                  qty: movement.stockMvt.stockMvtQuantity,
                  bidtStorageBinBinIssue: movement.stockMvt.bidtStorageBinBinIssue,
                  bidtStorageBinBinReceipt: movement.stockMvt.bidtStorageBinBinReceipt,
                  bidtStorageBinZoneIssue: movement.stockMvt.bidtStorageBinZoneIssue,
                  bidtStorageBinZoneReceipt: movement.stockMvt.bidtStorageBinZoneReceipt,
                  smoStatus: _this.getMvtStockStatus(movement.stockMvt.mvtStatus),
                  mvtStockCode: movement.stockMvt.stockMvtCode,
                  unit: movement.birePnDTO ? movement.birePnDTO.quantityUnit : undefined,
                  warehouse: movement.finalWarehouse
                    ? movement.finalWarehouse.whCode +
                      (movement.finalWarehouse.whName ? ' - ' + movement.finalWarehouse.whName : '')
                    : undefined,
                  statusDate: movement.stockMvt.statusDate,
                  _bidoEquipment: movement.equipment,
                  manufacturingBatch: movement.manufacturingEquipment,
                  operationalStatus: movement.equipment.operationalStatus
                    ? _this.getOperationnalStatus(movement.equipment.operationalStatus)
                    : undefined,
                  _procurementRequest: movement.procurementRequest ? movement.procurementRequest : undefined,
                  _procReqWorkOrderDTO: movement.procReqWorkOrderDTO ? movement.procReqWorkOrderDTO : undefined,
                  _transferOrder: movement.transferOrder ? movement.transferOrder : undefined,
                  _deliveryFolder: movement.deliveryFolder ? movement.deliveryFolder : undefined,
                  _finalSite: movement.finalSite,
                  _finalWarehouse: movement.finalWarehouse,
                  _stockMvt: movement.stockMvt,
                  _birePnDTO: movement.birePnDTO
                };
                _this.stockMovementsRows.push(movementRow);
                _this.addFilterRow(movement);
              });
            this.sortStockMovementRows();
            this.sortFilterLists();
            this.stockMovementTableDataSource.setData(__spread(this.stockMovementsRows));
            if (this.bidtReceiptFolder && this.firstLaunch) {
              this.firstLaunch = false;
              this.stockMovementTableDataSource.dataSelection = this.stockMovementTableDataSource.data;
              this.treatMvts();
            }
          };
          FormComponent.prototype.getNeedDislocate = function(movement) {
            return (
              !!movement.equipment &&
              !!movement.equipment.quantity &&
              !!movement.stockMvt.stockMvtQuantity &&
              Number(movement.stockMvt.stockMvtQuantity) < movement.equipment.quantity
            );
          };
          FormComponent.prototype.getShipementType = function(key) {
            return this.shipementTypes.filter(function(shipement) {
              return shipement.value.id === key;
            })[0].value;
          };
          FormComponent.prototype.getProcRequestTypes = function(key) {
            return this.procRequestTypes.filter(function(procRequest) {
              return procRequest.value === key;
            })[0].label;
          };
          FormComponent.prototype.getWoType = function(key) {
            return this.woTypes.filter(function(woType) {
              return woType.value === key;
            })[0].label;
          };
          FormComponent.prototype.addFilterRow = function(movement) {
            if (movement.stockMvt.bidtStorageBinZoneIssue) {
              var filter = {
                label:
                  movement.stockMvt.bidtStorageBinZoneIssue.sbNumber +
                  (movement.stockMvt.bidtStorageBinZoneIssue.sbDescription
                    ? ' - ' + movement.stockMvt.bidtStorageBinZoneIssue.sbDescription
                    : ''),
                value: movement.stockMvt.bidtStorageBinZoneIssue.id
              };
              this.filterOutLocList.push(filter);
            }
            if (movement.stockMvt.bidtStorageBinZoneReceipt) {
              var filter = {
                label:
                  movement.stockMvt.bidtStorageBinZoneReceipt.sbNumber +
                  (movement.stockMvt.bidtStorageBinZoneReceipt.sbDescription
                    ? ' - ' + movement.stockMvt.bidtStorageBinZoneReceipt.sbDescription
                    : ''),
                value: movement.stockMvt.bidtStorageBinZoneReceipt.id
              };
              this.filterInLocList.push(filter);
            }
            if (movement.finalWarehouse) {
              var filter = {
                label: movement.finalWarehouse.whCode + ' - ' + movement.finalWarehouse.whName,
                value: movement.finalWarehouse.wareHouseId
              };
              this.filterFinalReceiptList.push(filter);
            }
          };
          FormComponent.prototype.sortFilterLists = function() {
            this.filterInLocList = this.filterInLocList.reduce(function(unique, column) {
              return unique.every(function(elt) {
                return elt.label !== column.label;
              })
                ? __spread(unique, [column])
                : unique;
            }, []);
            this.filterInLocList.sort(function(a, b) {
              return Number(a.label) - Number(b.label);
            });
            this.filterOutLocList = this.filterOutLocList.reduce(function(unique, column) {
              return unique.every(function(elt) {
                return elt.label !== column.label;
              })
                ? __spread(unique, [column])
                : unique;
            }, []);
            this.filterOutLocList.sort(function(a, b) {
              return Number(a.label) - Number(b.label);
            });
            this.filterFinalReceiptList = this.filterFinalReceiptList.reduce(function(unique, column) {
              return unique.every(function(elt) {
                return elt.label !== column.label;
              })
                ? __spread(unique, [column])
                : unique;
            }, []);
            this.filterOutLocList.sort(function(a, b) {
              return a.label.localeCompare(b.label);
            });
          };
          FormComponent.prototype.loadCriteria = function() {
            var _this = this;
            var site$ = this.formService.findSiteById(
              this.searchParam.stockMvt.bidtSiteByBidtSiteReceiptId
                ? this.searchParam.stockMvt.bidtSiteByBidtSiteReceiptId
                : this.searchParam.stockMvt.bidtSiteByBidtSiteIssueId
            );
            var warehouse$ = this.formService.findBidtWarehouseById(
              this.searchParam.stockMvt.bidtWarehouseByBidtWarehouseReceiptId
                ? this.searchParam.stockMvt.bidtWarehouseByBidtWarehouseReceiptId
                : this.searchParam.stockMvt.bidtWarehouseByBidtWarehouseIssueId
            );
            var movementsTypes$ = this.logisticsService.findStockMvtTypes();
            var shippmentTypes$ = this.formService.loadShipmentType();
            var procRequestTypes$ = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .PROCUREMENT_REQUEST_TYPE_MAP
            );
            var workOrderTypes$ = this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .AIRM_WORK_ORDER_TYPES_MAP
            );
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__['forkJoin'])([
              site$,
              warehouse$,
              movementsTypes$,
              shippmentTypes$,
              procRequestTypes$,
              workOrderTypes$
            ]).subscribe({
              next: function(_a) {
                var _b = __read(_a, 6),
                  site = _b[0],
                  warehouse = _b[1],
                  movementsTypes = _b[2],
                  shippmentTypes = _b[3],
                  procRequestTypes = _b[4],
                  workOrderTypes = _b[5];
                _this.shipementTypes = _this.getCorrectShippementTypeList(shippmentTypes);
                _this.movementTypes = _this.getCorrectMvtTypeList(movementsTypes);
                _this.procRequestTypes = procRequestTypes;
                _this.woTypes = workOrderTypes;
                if (_this.searchParam.stockMvt.bidtStockMvtTypeId) {
                  _this.formInfoCriteria = {
                    movementType: _this.getMvtTypeCriteria(
                      _this.movementTypes,
                      _this.searchParam.stockMvt.bidtStockMvtTypeId
                    ),
                    status:
                      _this.searchParam.mvtStatus && _this.searchParam.mvtStatus.length > 0
                        ? _this.getMvtStockStatus(_this.searchParam.mvtStatus[0]).label
                        : _this.translateService.instant(
                            _this.getTranslateKey('noExcecuted', _this.componentNamespace)
                          ),
                    date: _this.searchParam.untilRealDate
                      ? _this.searchParam.untilRealDate
                      : _this.searchParam.untilPlannedDate,
                    site: site.siteCode + (site.siteName ? ' - ' + site.siteName : ''),
                    warehouse: warehouse.whCode + (warehouse.whName ? ' - ' + warehouse.whName : ''),
                    _site: site,
                    _warehouse: warehouse
                  };
                }
                _this.loadStockMovementTable();
              }
            });
          };
          FormComponent.prototype.getCorrectMvtTypeList = function(movementsTypes) {
            var _this = this;
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_9__['ListUtils']
              .orEmpty(movementsTypes)
              .map(function(movementType) {
                return {
                  label: _this.extractTranslationPipe.transform(movementType.smtName),
                  value: movementType
                };
              })
              .sort(function(s1, s2) {
                return s1.label.localeCompare(s2.label);
              });
          };
          FormComponent.prototype.getCorrectShippementTypeList = function(shipementTypes) {
            var _this = this;
            return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_9__['ListUtils']
              .orEmpty(shipementTypes)
              .map(function(shipementType) {
                return {
                  label: _this.extractTranslationPipe.transform(shipementType.dftDesignation),
                  value: shipementType
                };
              })
              .sort(function(s1, s2) {
                return s1.label.localeCompare(s2.label);
              });
          };
          FormComponent.prototype.getMvtTypeCriteria = function(movementsTypes, typeid) {
            var typeMvt = movementsTypes.filter(function(type) {
              return type.value.id === typeid;
            });
            return typeMvt[0];
          };
          FormComponent.prototype.openLinkEquipment = function(code) {
            if (code) {
              this.openEquipment(
                code,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
              );
            }
          };
          FormComponent.prototype.openEquipment = function(objectId, openMode) {
            var labelKey = 'transaction.EquipmentFormComponent';
            var data = {
              id: this.tabService.generateId(),
              componentId: 'EquipmentFormComponent',
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
          FormComponent.prototype.openMfgBatch = function(objectId) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
                  .LOG_MANUFACTURING_BATCH_FORM,
              objectId: objectId ? this.serializationService.serialize({ customerCode: objectId }) : undefined,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          FormComponent.prototype.openLink = function(equipment) {
            if (equipment.sn) {
              this.openEquipment(
                equipment.equipmentCode,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
              );
            } else {
              this.openSelectedBatch(equipment.equipmentCode);
            }
          };
          FormComponent.prototype.openSelectedBatch = function(code) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
                  .LOG_PACKAGING_BATCH_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
            };
            data.objectId = code;
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          FormComponent.prototype.treatMvts = function() {
            var _this = this;
            this.isOnGoingSelected = false;
            var inputList = [];
            this.stockMovementTableDataSource.dataSelection.forEach(function(row) {
              var input = {
                stockMvtId: row.id,
                newStatus:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                    .MM_MVT_STATUS_ON_GOING_KEY
              };
              inputList.push(input);
            });
            this.formService.updateMvtsStatus(inputList).subscribe(function(updated) {
              _this.isTreatPhase = true;
              _this.stockMovementList = updated;
              _this.reload();
            });
          };
          FormComponent.prototype.executeMvts = function() {
            var _this = this;
            var inputList = [];
            this.stockMovementTableDataSource.dataSelection.forEach(function(row) {
              var input = {
                stockMvtId: row.id,
                newStatus:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                    .MM_MVT_STATUS_EXECUTED_KEY
              };
              inputList.push(input);
            });
            this.formService.updateMvtsStatus(inputList).subscribe(function(updated) {
              if (_this.shipmentFolderCreated) {
                _this.formService
                  .findShipmentAssociatedMvt(
                    updated.map(function(row) {
                      return row.stockMvt;
                    })
                  )
                  .subscribe(function(shipmentMvt) {
                    if (_this.shipmentCreatedOutput) {
                      _this.addToNewShipmentFolder(_this.shipmentCreatedOutput, shipmentMvt);
                    }
                  });
              }
              updated.forEach(function(movement) {
                var testNumber = _this.stockMovementList.findIndex(function(movementDto) {
                  return movementDto.stockMvt.id === movement.stockMvt.id;
                });
                _this.stockMovementList.splice(testNumber, 1, movement);
              });
              _this.reload();
            });
          };
          FormComponent.prototype.checkMvts = function() {
            var _this = this;
            var inputList = [];
            this.stockMovementTableDataSource.dataSelection.forEach(function(row) {
              var input = {
                stockMvtId: row.id,
                newStatus:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                    .MM_MVT_STATUS_CHECKED_KEY
              };
              inputList.push(input);
            });
            this.formService.updateMvtsStatus(inputList).subscribe(function(updated) {
              updated.forEach(function(movement) {
                var testNumber = _this.stockMovementList.findIndex(function(movementDto) {
                  return movementDto.stockMvt.id === movement.stockMvt.id;
                });
                _this.stockMovementList.splice(testNumber, 1, movement);
              });
              _this.reload();
            });
          };
          FormComponent.prototype.restTreatPhase = function() {
            var _this = this;
            var inputList = [];
            this.stockMovementTableDataSource.data.forEach(function(row) {
              if (
                row.smoStatus.value !==
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .MM_MVT_STATUS_EXECUTED_KEY
              ) {
                var input = {
                  stockMvtId: row.id,
                  newStatus:
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                      .MM_MVT_STATUS_PLANNED_KEY
                };
                inputList.push(input);
              }
            });
            this.formService.updateMvtsStatus(inputList).subscribe(function(updated) {
              var mvtList = updated.map(function(rowUpdate) {
                return rowUpdate.stockMvt;
              });
              if (_this.bidtReceiptFolder) {
                _this.openReceiptFolder(_this.bidtReceiptFolder);
              } else if (_this.shipmentFolderCreated && _this.shipmentCreatedOutput) {
                _this.openShipmentFolder(_this.shipmentCreatedOutput.bidtDeliveryFolderDTO);
              } else {
                _this.stockMvtListInit = mvtList;
                _this.isTreatPhase = false;
                _this.isDbInput = false;
                _this.isSbOutput = false;
                _this.stockMovementsRows = [];
                _this.initStockMovementTableDataSource();
                _this.doSearch();
              }
            });
          };
          FormComponent.prototype.checkIfOnGoingSelected = function() {
            var _this = this;
            this.stockMovementTableDataSource.dataSelection.forEach(function(row) {
              if (
                row.smoStatus.value ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .MM_MVT_STATUS_ON_GOING_KEY
              ) {
                _this.isOnGoingSelected = true;
              }
            });
            if (!this.isOnGoingSelected) {
              this.treatMvts();
            }
          };
          FormComponent.prototype.checkIfExecutedSelected = function() {
            var isExecutedSelected = false;
            this.stockMovementTableDataSource.dataSelection.forEach(function(row) {
              if (
                row.smoStatus.value ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                  .MM_MVT_STATUS_EXECUTED_KEY
              ) {
                isExecutedSelected = true;
              }
            });
            return isExecutedSelected;
          };
          FormComponent.prototype.loadReferentialData = function() {
            this.statusList = [];
          };
          FormComponent.prototype.openDocOrigine = function(movementRow) {
            if (movementRow._procReqWorkOrderDTO) {
              this.openWorkOrderLink(movementRow._procReqWorkOrderDTO);
            } else if (movementRow._procurementRequest) {
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
                    .LOG_PROCUREMENT_REQUEST_FORM,
                objectId: this.serializationService.serialize({ id: movementRow._procurementRequest.id }),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            } else if (movementRow._transferOrder) {
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
                    .LOG_TRANSFER_ORDER_FORM,
                objectId: this.serializationService.serialize(movementRow._transferOrder.id),
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            } else if (movementRow._deliveryFolder) {
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
                    .LOG_GOODS_RECEIPT_FORM,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read,
                objectId: this.serializationService.serialize({ id: movementRow._deliveryFolder.id })
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          FormComponent.prototype.openStockMovement = function(rowData) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
                  .LOG_STOCK_MOVEMENT_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
            };
            var inputObject = {
              id: rowData.id,
              bidtProcReqItemId: rowData._stockMvt && rowData._stockMvt.bidtProcReqItemId
            };
            data.objectId = this.serializationService.serialize(inputObject);
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          FormComponent.prototype.openWorkOrderLink = function(workOrder) {
            if (workOrder && workOrder.woId && workOrder.projectId) {
              var workOrderId = {
                woId: workOrder.woId,
                projectId: workOrder.projectId
              };
              this.openWorkOrder(
                workOrderId,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
              );
            }
          };
          FormComponent.prototype.openWorkOrder = function(wo, openModeWanted) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
                  .MAI_WORK_ORDER_FORM,
              openMode: openModeWanted,
              objectId: this.serializationService.serialize(wo)
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          FormComponent.prototype.openPartNumberLink = function(pnCode) {
            this.openPN(
              pnCode,
              _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read
            );
          };
          FormComponent.prototype.openPN = function(objectId, openMode) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
                  .ENG_PART_NUMBER_FORM,
              objectId: objectId,
              openMode: openMode
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          FormComponent.prototype.clearTableFilters = function() {
            this.filterInChoose = undefined;
            this.filterOutChoose = undefined;
            this.filterFinalReceiptChoose = undefined;
            this.stockMovementTableDataSource.setData(__spread(this.stockMovementsRows));
          };
          FormComponent.prototype.filterTable = function() {
            var _this = this;
            var tableFilter = __spread(this.stockMovementsRows);
            if (this.filterInChoose) {
              tableFilter = tableFilter.filter(function(elt) {
                return elt.bidtStorageBinZoneReceipt && elt.bidtStorageBinZoneReceipt.id === _this.filterInChoose;
              });
            }
            if (this.filterOutChoose) {
              tableFilter = tableFilter.filter(function(elt) {
                return elt.bidtStorageBinZoneIssue && elt.bidtStorageBinZoneIssue.id === _this.filterOutChoose;
              });
            }
            if (this.filterFinalReceiptChoose) {
              tableFilter = tableFilter.filter(function(elt) {
                return elt._finalWarehouse && elt._finalWarehouse.wareHouseId === _this.filterFinalReceiptChoose;
              });
            }
            this.stockMovementTableDataSource.setData(__spread(tableFilter));
          };
          FormComponent.prototype.openSelectLocaationDialog = function() {
            this.stockMvtList = this.stockMovementTableDataSource.dataSelection.map(function(row) {
              return row._stockMvt;
            });
            this.selectedLocationDialogVisable = true;
          };
          FormComponent.prototype.onChangeLocation = function(changedLocation) {
            this.stockMovementTableDataSource.dataSelection.forEach(function(row) {
              row.bidtStorageBinZoneReceipt = changedLocation[0];
              row.bidtStorageBinBinReceipt = changedLocation[1];
            });
          };
          FormComponent.prototype.onChangeAndExecLocation = function(changedLocation) {
            this.stockMovementTableDataSource.dataSelection.forEach(function(row) {
              if (changedLocation.isBoth) {
                row.bidtStorageBinZoneReceipt = changedLocation.bidtStorageList[0];
                row.bidtStorageBinBinReceipt = changedLocation.bidtStorageList[1];
              } else {
                row.bidtStorageBinZoneReceipt = changedLocation.bidtStorageList[0];
              }
            });
            this.executeMvts();
          };
          FormComponent.prototype.createShipmentAndPackage = function() {
            this.firstSelectedMvt = this.stockMovementTableDataSource.dataSelection[0];
            this.displayCreateShipmentFolder = true;
          };
          FormComponent.prototype.createShipmentFolder = function(input) {
            this.shipmentFolderCreated = true;
            this.shipmentCreatedOutput = input;
            this.treatMvts();
          };
          FormComponent.prototype.checkAllSameFinalReceipt = function(inputList) {
            if (!!inputList[0]._finalWarehouse) {
              return (
                inputList.filter(function(movementRow) {
                  return (
                    !!movementRow._finalWarehouse &&
                    movementRow._finalWarehouse.wareHouseId === inputList[0]._finalWarehouse.wareHouseId
                  );
                }).length === inputList.length
              );
            } else if (!!inputList[0]._bidoCustomerDto) {
              return (
                inputList.filter(function(movementRow) {
                  return (
                    !!movementRow._bidoCustomerDto &&
                    movementRow._bidoCustomerDto.customerCode === inputList[0]._bidoCustomerDto.customerCode
                  );
                }).length === inputList.length
              );
            }
          };
          FormComponent.prototype.checkAllSameTransferOrderType = function(inputList) {
            if (!!inputList[0]._transferOrder) {
              return (
                inputList.filter(function(movementRow) {
                  return (
                    !!movementRow._transferOrder &&
                    movementRow._transferOrder.torType === inputList[0]._transferOrder.torType
                  );
                }).length === inputList.length
              );
            }
          };
          FormComponent.prototype.checkDislocationNeeded = function() {
            var isDislocateNeeded = false;
            this.stockMovementTableDataSource.dataSelection.forEach(function(rowSelected) {
              if (rowSelected.needDislocate) {
                isDislocateNeeded = true;
                return;
              }
            });
            return isDislocateNeeded;
          };
          FormComponent.prototype.openAddPackageToShipment = function() {
            var _this = this;
            var mvtList = this.stockMovementTableDataSource.dataSelection
              .filter(function(row) {
                return !!row._stockMvt;
              })
              .map(function(row) {
                return row._stockMvt;
              });
            this.formService.findWorkOrderByMvts(mvtList).subscribe(function(workOrders) {
              if (
                workOrders &&
                workOrders.length > 0 &&
                _this.bidtShipmentFolder &&
                _this.bidtShipmentFolder.bidtWarehouseReceiver &&
                _this.bidtShipmentFolder.bidtWarehouseReceiver.whCategory ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                    .WAREHOUSE_CATEGORY_WORKSHOP
              ) {
                if (_this.isAllHaveWorkOrder(workOrders) && mvtList.length === workOrders.length) {
                  _this.doChecks();
                } else {
                  _this.messageService.showWarningMessage(
                    _this.getTranslateKey('warnigWorkOrder', _this.componentNamespace)
                  );
                }
              } else {
                _this.doChecks();
              }
            });
          };
          FormComponent.prototype.doChecks = function() {
            if (this.shipmentPackageChoose === undefined) {
              this.displayAddPackaage = true;
            } else {
              var inputWithPackage = {
                bidtPackageDTO: this.shipmentPackageChoose,
                isGenerated: false,
                createWithPackage: true
              };
              this.addToShipmentFolder(inputWithPackage);
            }
          };
          FormComponent.prototype.isAllHaveWorkOrder = function(workOrders) {
            return (
              workOrders.length ===
              workOrders.filter(function(row) {
                return !!row;
              }).length
            );
          };
          FormComponent.prototype.addToShipmentFolder = function(input) {
            var _this = this;
            var addToShipmentInput = [];
            this.stockMovementTableDataSource.dataSelection.forEach(function(row) {
              var addToShipmentInputRow = {
                bidtStockMvtDTO: row._stockMvt,
                bidtDeliveryFolderDTO: _this.bidtShipmentFolder,
                bidtPackageDTO: input.bidtPackageDTO,
                generated: input.isGenerated,
                createWithPackage: input.createWithPackage,
                transferOrder: row._transferOrder,
                bidtDfItemDTOList:
                  input.bidtPackageDTO.id && _this.bidtShipmentFolder && _this.bidtShipmentFolder.bidtDfItems
                    ? _this.bidtShipmentFolder.bidtDfItems.filter(function(item) {
                        return !!item.bidtPackage && item.bidtPackage.id === input.bidtPackageDTO.id;
                      })
                    : _this.bidtShipmentFolder && _this.bidtShipmentFolder.bidtDfItems
                    ? _this.bidtShipmentFolder.bidtDfItems.filter(function(item) {
                        return !item.bidtPackage;
                      })
                    : undefined
              };
              addToShipmentInput.push(addToShipmentInputRow);
            });
            this.formService.addAssetToShipmentFolder(addToShipmentInput).subscribe(function() {
              _this.openShipmentFolder(_this.bidtShipmentFolder);
            });
          };
          FormComponent.prototype.addToNewShipmentFolder = function(input, mvtList) {
            var _this = this;
            var addToShipmentInput = [];
            mvtList.forEach(function(row) {
              var addToShipmentInputRow = {
                bidtStockMvtDTO: row.stockMvt,
                bidtDeliveryFolderDTO: input.bidtDeliveryFolderDTO,
                bidtPackageDTO: input.bidtPackageDTO,
                generated: input.isGenerated,
                createWithPackage: input.createWithPackage,
                transferOrder: row.transferOrder,
                bidtDfItemDTOList:
                  input.bidtPackageDTO.id && _this.bidtShipmentFolder && _this.bidtShipmentFolder.bidtDfItems
                    ? _this.bidtShipmentFolder.bidtDfItems.filter(function(item) {
                        return !!item.bidtPackage && item.bidtPackage.id === input.bidtPackageDTO.id;
                      })
                    : _this.bidtShipmentFolder && _this.bidtShipmentFolder.bidtDfItems
                    ? _this.bidtShipmentFolder.bidtDfItems.filter(function(item) {
                        return !item.bidtPackage;
                      })
                    : undefined
              };
              addToShipmentInput.push(addToShipmentInputRow);
            });
            this.formService.addAssetToShipmentFolder(addToShipmentInput).subscribe(function() {
              _this.assetAddedToShipmentFolder = true;
            });
          };
          FormComponent.prototype.openShipmentFolder = function(df) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
                  .LOG_GOODS_SHIPMENT_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read,
              objectId: this.serializationService.serialize({ id: df.id })
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          FormComponent.prototype.openReceiptFolder = function(df) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_5__['ComponentConstants']
                  .LOG_GOODS_RECEIPT_FORM,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_7__['ComponentOpenMode'].Read,
              objectId: this.serializationService.serialize({ id: df.id })
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          FormComponent.prototype.isChangeLocationVisible = function() {
            return this.stockMovementTableDataSource.dataSelection.every(function(elt) {
              return (
                !elt.smoStatus ||
                elt.smoStatus.value !==
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                    .MM_MVT_STATUS_EXECUTED_KEY
              );
            });
          };
          FormComponent.prototype.isCheckMvtsVisible = function() {
            return this.stockMovementTableDataSource.dataSelection.every(function(elt) {
              return (
                !elt.smoStatus ||
                elt.smoStatus.value !==
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_3__['AWPropertiesConstants']
                    .MM_MVT_STATUS_CHECKED_KEY
              );
            });
          };
          FormComponent.prototype.openDocumentDialog = function(mvtOperations) {
            this.stockMvtOperationSelected = mvtOperations;
            this.displayDocumentDialog = true;
          };
          FormComponent.prototype.showAddUpdatePopup = function(stockMvtTableInterface) {
            this.subAssemblyPopupObject = {};
            this.subAssemblyPopupObject.batchNumber = stockMvtTableInterface.batchNumber;
            this.packagingBatchUnit = stockMvtTableInterface.unit;
            this.dislocatedEquipment = stockMvtTableInterface._bidoEquipment;
            this.dislocatedMvt = stockMvtTableInterface._stockMvt;
            if (
              !!this.dislocatedMvt &&
              !!this.dislocatedMvt.stockMvtQuantity &&
              !!this.dislocatedEquipment &&
              !!this.dislocatedEquipment.quantity
            ) {
              this.subAssemblyPopupObject.quantity = Number(this.dislocatedMvt.stockMvtQuantity);
              this.addUpdateDialogQuantity = this.dislocatedMvt.stockMvtQuantity.toString();
              this.addUpdateDialogEquipementStatus = this.dislocatedEquipment.operationalStatus;
              this.openAddUpdatedialog = true;
            }
          };
          FormComponent.prototype.updateSubAssembly = function(subAssemblyObject) {
            var _this = this;
            if (!!this.dislocatedEquipment) {
              var bidoEquipmentObject_1 = __assign({}, this.dislocatedEquipment);
              bidoEquipmentObject_1.equEquipmentCode = bidoEquipmentObject_1.equipmentCode;
              bidoEquipmentObject_1.quantity = subAssemblyObject.quantity;
              bidoEquipmentObject_1.batchNumber = subAssemblyObject.batchNumber;
              bidoEquipmentObject_1.operationalStatus = subAssemblyObject.batchNumber;
              bidoEquipmentObject_1.operationalStatus = subAssemblyObject.operationalStatus;
              bidoEquipmentObject_1.manufacturingDate = subAssemblyObject.creationDate;
              bidoEquipmentObject_1.statusUser = subAssemblyObject.statusUser;
              bidoEquipmentObject_1.equipmentCode = undefined;
              this.formService.addOrUpdateBatch(bidoEquipmentObject_1).subscribe(function(equipmentCode) {
                if (!!_this.dislocatedMvt) {
                  _this.logisticsService
                    .findStockMvtStoryFromFirstStockMvt(_this.dislocatedMvt)
                    .subscribe(function(stocksMvt) {
                      stocksMvt.forEach(function(stock) {
                        stock.stockMvtBatchNumber = bidoEquipmentObject_1.batchNumber;
                      });
                      _this.formService.addOrUpdateMvts(stocksMvt).subscribe(function() {
                        if (!_this.isTreatPhase) {
                          _this.openAddUpdatedialog = false;
                          _this.stockMovementsRows = [];
                          _this.dislocatedEquipment = undefined;
                          _this.dislocatedMvt = undefined;
                          _this.initStockMovementTableDataSource();
                          _this.doSearch();
                        } else {
                          _this.stockMvtListInit = _this.stockMovementList.map(function(row) {
                            return row.stockMvt;
                          });
                          _this.openAddUpdatedialog = false;
                          _this.stockMovementsRows = [];
                          _this.dislocatedEquipment = undefined;
                          _this.dislocatedMvt = undefined;
                          _this.initStockMovementTableDataSource();
                          _this.doSearch();
                        }
                      });
                    });
                }
              });
            }
          };
          FormComponent.PROGRESS_MAX = 100;
          return FormComponent;
        })(_shared_types_form_page_component__WEBPACK_IMPORTED_MODULE_8__['FormPageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/movement-information/movement-information.component.html':
      /*!**************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/movement-information/movement-information.component.html ***!
  \**************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-wrapper">\r\n  <div class="page-container">\r\n    <mat-tab-group animationDuration="0ms" dynamicHeight>\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ "home" | translate }}\r\n        </ng-template>\r\n\r\n        <div class="grid-row">\r\n          <!-- MAIN INFO -->\r\n          <div class="grid-cell--5">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ "page.mainData" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content  grid-cell-content-with-section">\r\n                <!-- ROW 1 -->\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".number" | translate }}</label>\r\n                    <div class="form-control custom-anchor">\r\n                      <a>{{ formInfo.number }}</a>\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".toRealizeThe" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.toRealizeThe" />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".status" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.status" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- ROW 2 -->\r\n                <div class="section margin-class">\r\n                  <h4 class="section-title">{{ getComponentName() + ".documentReference" | translate }}</h4>\r\n                  <div class="section-content">\r\n                    <div class="row">\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ getComponentName() + ".number" | translate }}</label>\r\n\r\n                        <div class="form-control custom-anchor">\r\n                          <a>{{ formInfo.docNumber }}</a>\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ getComponentName() + ".type" | translate }}</label>\r\n\r\n                        <div class="form-control">\r\n                          <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.docType" />\r\n                        </div>\r\n                      </div>\r\n                      <div class="form-group">\r\n                        <label class="form-label">{{ getComponentName() + ".critical" | translate }}</label>\r\n                        <div class="form-control custom-control">\r\n                          <span class="alert alert--nok">\r\n                            {{ formInfo.docControl }}\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Location -->\r\n          <div class="grid-cell--7">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ getComponentName() + ".location" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content  grid-cell-content-with-section">\r\n                <!-- ROW 1 -->\r\n                <div class="row">\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".site" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.site" />\r\n                    </div>\r\n                  </div>\r\n                  <div class="form-group">\r\n                    <label class="form-label">{{ getComponentName() + ".warehouse" | translate }}</label>\r\n\r\n                    <div class="form-control">\r\n                      <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.warehouse" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class="grid-cell--12">\r\n                  <div class="grid-cell--6">\r\n                    <div class="section">\r\n                      <h4 class="section-title">{{ getComponentName() + ".inboundLocalisation" | translate }}</h4>\r\n                      <div class="section-content">\r\n                        <div class="row">\r\n                          <div class="form-group">\r\n                            <label class="form-label">{{ getComponentName() + ".zone" | translate }}</label>\r\n\r\n                            <div class="form-control">\r\n                              <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.zone" />\r\n                            </div>\r\n                          </div>\r\n                          <div class="form-group">\r\n                            <label class="form-label">{{ getComponentName() + ".emplacement" | translate }}</label>\r\n\r\n                            <div class="form-control">\r\n                              <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.emplacement" />\r\n                            </div>\r\n                          </div>\r\n                          <div class="form-group">\r\n                            <label class="form-label">&nbsp;</label>\r\n\r\n                            <div class="form-control">\r\n                              <i class="fa fa-fw fa-search fa-arrow-right" aria-hidden="true"></i>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class="grid-cell--4">\r\n                    <div class="section">\r\n                      <h4 class="section-title">{{ getComponentName() + ".outboundLocalisation" | translate }}</h4>\r\n                      <div class="section-content">\r\n                        <div class="row">\r\n                          <div class="form-group">\r\n                            <label class="form-label">{{ getComponentName() + ".zone" | translate }}</label>\r\n\r\n                            <div class="form-control">\r\n                              <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.outZone" />\r\n                            </div>\r\n                          </div>\r\n                          <div class="form-group">\r\n                            <label class="form-label">{{ getComponentName() + ".emplacement" | translate }}</label>\r\n\r\n                            <div class="form-control">\r\n                              <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.outEmplacement" />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- MAterial panel -->\r\n          <div class="grid-cell--12">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ getComponentName() + ".material" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content  grid-cell-content-with-section">\r\n                <div class="grid-cell--10">\r\n                  <div class="section">\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".article" | translate }}</label>\r\n\r\n                          <div class="form-control custom-anchor">\r\n                            <a>{{ formInfo.article }}</a>\r\n                            <input\r\n                              class="aw-input"\r\n                              type="text"\r\n                              disabled\r\n                              title="{{ formInfo.articleDesignation }}"\r\n                              [(ngModel)]="formInfo.articleDesignation"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".snOrLot" | translate }}</label>\r\n                          <div class="form-control custom-anchor">\r\n                            <a>{{ formInfo.snOrLot }}</a>\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".qty" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.qty" />\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".etat" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.etat" />\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".materialType" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.materialType" />\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class="section  margin-class">\r\n                    <h4 class="section-title">{{ getComponentName() + ".informationLogistics" | translate }}</h4>\r\n\r\n                    <div class="section-content">\r\n                      <div class="row">\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".volume" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.volume" />\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".height" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.height" />\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".width" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.width" />\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".diameter" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.diameter" />\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".weight" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.weight" />\r\n                          </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                          <label class="form-label">{{ getComponentName() + ".additionalRemarks" | translate }}</label>\r\n\r\n                          <div class="form-control">\r\n                            <input class="aw-input" type="text" disabled [(ngModel)]="formInfo.additionalRemarks" />\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="grid-cell--2"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          {{ "documents" | translate }}\r\n        </ng-template>\r\n\r\n        <div class="grid-row">\r\n          <div class="grid-cell--12">\r\n            <div class="grid-cell grid-cell--container">\r\n              <div class="grid-cell-header">\r\n                <div class="grid-cell-title-container">\r\n                  <h3 class="grid-cell-title">\r\n                    {{ getComponentName() + ".documents" | translate }}\r\n                  </h3>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="grid-cell-content">\r\n                <a-table [dataSource]="documentsTableDataSource"> </a-table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/movement-information/movement-information.component.scss':
      /*!**************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/movement-information/movement-information.component.scss ***!
  \**************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .alert {\n  display: inline-block;\n  text-transform: uppercase;\n  font-weight: 600;\n  width: 8em;\n  text-align: center; }\n  :host .alert.alert--ok {\n    background-color: #4caf50; }\n  :host .alert.alert--warning {\n    background-color: #ffc107; }\n  :host .alert.alert--nok {\n    background-color: #f6685e; }\n  :host .alert.alert--none {\n    background-color: #c8d4d6; }\n  :host .custom-anchor {\n  padding: 0.7em 0; }\n  :host .margin-class {\n  margin-top: 0 !important; }\n  :host .custom-control {\n  padding-top: 0.4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stbW92ZW1lbnRzL2Zvcm0vbW92ZW1lbnQtaW5mb3JtYXRpb24vZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcc3RvY2stbW92ZW1lbnRzXFxmb3JtXFxtb3ZlbWVudC1pbmZvcm1hdGlvblxcbW92ZW1lbnQtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbG9naXN0aWNzL3N0b2NrLW1vdmVtZW50cy9mb3JtL21vdmVtZW50LWluZm9ybWF0aW9uL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7RUFOdEI7SUFTTSx5QkNVZ0IsRUFBQTtFRG5CdEI7SUFhTSx5QkNPVSxFQUFBO0VEcEJoQjtJQWlCTSx5QkNLYyxFQUFBO0VEdEJwQjtJQXFCTSx5QkNJUyxFQUFBO0VEekJmO0VBMEJJLGdCQUFnQixFQUFBO0VBMUJwQjtFQThCSSx3QkFBd0IsRUFBQTtFQTlCNUI7RUFrQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1tb3ZlbWVudHMvZm9ybS9tb3ZlbWVudC1pbmZvcm1hdGlvbi9tb3ZlbWVudC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuXHJcbjpob3N0IHtcclxuICAuYWxlcnQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB3aWR0aDogOGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICYuYWxlcnQtLW9rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS13YXJuaW5nIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1ub25lIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXkxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1hbmNob3Ige1xyXG4gICAgcGFkZGluZzogMC43ZW0gMDtcclxuICB9XHJcblxyXG4gIC5tYXJnaW4tY2xhc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1jb250cm9sIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjRlbTtcclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/movement-information/movement-information.component.ts':
      /*!************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/movement-information/movement-information.component.ts ***!
  \************************************************************************************************************/
      /*! exports provided: MovementInformationComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MovementInformationComponent',
          function() {
            return MovementInformationComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../form.service */ './src/app/main/logistics/stock-movements/form/form.service.ts'
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

        var MovementInformationComponent = /** @class */ (function(_super) {
          __extends(MovementInformationComponent, _super);
          function MovementInformationComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            stockMovementsFormService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_2__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.stockMovementsFormService = stockMovementsFormService;
            return _this;
          }
          MovementInformationComponent.prototype.getComponentName = function() {
            return 'MovementInformationComponent';
          };
          MovementInformationComponent.prototype.ngOnInit = function() {
            this.formInfo = {};
            this.initMovementTableDataSource();
            this.setPageInfo();
          };
          /**********************************
           * TABLE init
           **********************************/
          MovementInformationComponent.prototype.initMovementTableDataSource = function() {
            this.documentsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_1__[
              'TableDataSource'
            ]({
              allowMultiSelect: false,
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
          MovementInformationComponent.prototype.setPageInfo = function() {
            this.formInfo = this.stockMovementsFormService.fetchMovementInformation();
          };
          MovementInformationComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-movement-information',
                template: __webpack_require__(
                  /*! ./movement-information.component.html */ './src/app/main/logistics/stock-movements/form/movement-information/movement-information.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./movement-information.component.scss */ './src/app/main/logistics/stock-movements/form/movement-information/movement-information.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_3__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_4__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_5__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_6__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_7__['TabService'],
                _form_service__WEBPACK_IMPORTED_MODULE_9__['FormService']
              ])
            ],
            MovementInformationComponent
          );
          return MovementInformationComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_8__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/picking-form.component.ts':
      /*!*******************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/picking-form.component.ts ***!
  \*******************************************************************************/
      /*! exports provided: PickingFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'PickingFormComponent', function() {
          return PickingFormComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/pipes/extract-translation.pipe */ './src/app/shared/pipes/extract-translation.pipe.ts'
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
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
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
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _search_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../search/search.service */ './src/app/main/logistics/stock-movements/search/search.service.ts'
        );
        /* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./form.component */ './src/app/main/logistics/stock-movements/form/form.component.ts'
        );
        /* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./form.service */ './src/app/main/logistics/stock-movements/form/form.service.ts'
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

        var PickingFormComponent = /** @class */ (function(_super) {
          __extends(PickingFormComponent, _super);
          function PickingFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            translateService,
            extractTranslationPipe,
            logisticsService,
            propertiesService,
            searchService,
            formService
          ) {
            return (
              _super.call(
                this,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                sessionService,
                translateService,
                extractTranslationPipe,
                logisticsService,
                propertiesService,
                searchService,
                formService
              ) || this
            );
          }
          // ////////////////////////////////////////////////////////////////////////////
          PickingFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .LOG_STOCK_MOVEMENTS_FORM_PICKING;
          };
          // ////////////////////////////////////////////////////////////////////////////
          PickingFormComponent.prototype.init = function() {
            _super.prototype.init.call(this);
          };
          Object.defineProperty(PickingFormComponent.prototype, 'getCurrentComponentContext', {
            get: function() {
              return _form_component__WEBPACK_IMPORTED_MODULE_13__['ComponentContext'].PICKING;
            },
            enumerable: true,
            configurable: true
          });
          PickingFormComponent.prototype.sortStockMovementRows = function() {
            return this.stockMovementsRows.sort(function(a, b) {
              if (a.bidtStorageBinZoneIssue === null || b.bidtStorageBinZoneIssue === null) {
                return -1;
              }
              if (a.bidtStorageBinZoneIssue.sbNumber && b.bidtStorageBinZoneIssue.sbNumber) {
                var localeValue = a.bidtStorageBinZoneIssue.sbNumber.localeCompare(b.bidtStorageBinZoneIssue.sbNumber);
                if (localeValue === 0) {
                  if (
                    (a.bidtStorageBinBinIssue === null && b.bidtStorageBinBinIssue !== null) ||
                    (b.bidtStorageBinBinIssue === null && a.bidtStorageBinBinIssue === null)
                  ) {
                    return 1;
                  } else if (b.bidtStorageBinBinIssue === null && a.bidtStorageBinBinIssue !== null) {
                    return -1;
                  }
                  if (a.bidtStorageBinBinIssue.sbNumber && b.bidtStorageBinBinIssue.sbNumber) {
                    localeValue = a.bidtStorageBinBinIssue.sbNumber.localeCompare(b.bidtStorageBinBinIssue.sbNumber);
                  }
                }
                return localeValue;
              } else {
                return -1;
              }
            });
          };
          PickingFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-picking-form',
                template: __webpack_require__(
                  /*! ./form.component.html */ './src/app/main/logistics/stock-movements/form/form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./form.component.scss */ './src/app/main/logistics/stock-movements/form/form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_3__['ExtractTranslationPipe'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_11__['LogisticsService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__['PropertiesService'],
                _search_search_service__WEBPACK_IMPORTED_MODULE_12__['SearchService'],
                _form_service__WEBPACK_IMPORTED_MODULE_14__['FormService']
              ])
            ],
            PickingFormComponent
          );
          return PickingFormComponent;
        })(_form_component__WEBPACK_IMPORTED_MODULE_13__['FormComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/show-movement-card-view/show-movement-card-view.component.html':
      /*!********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/show-movement-card-view/show-movement-card-view.component.html ***!
  \********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<!-- FILTER -->\r\n<div class="row panel-height-top">\r\n  <p-overlayPanel #opFilters appendTo="body">\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label"> &nbsp;</label>\r\n\r\n        <div class="form-control aw-selectbutton-wrapper">\r\n          <p-selectButton\r\n            [(ngModel)]="selectedStatus"\r\n            [options]="statusList"\r\n            (onChange)="onChangeStatus()"\r\n          ></p-selectButton>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="row">\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".partNumber" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            placeholder="&nbsp;"\r\n            [showClear]="true"\r\n            [(ngModel)]="selectedWarehouse"\r\n            [options]="warehouseList"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label class="form-label">{{ getComponentName() + ".emplacement" | translate }}</label>\r\n\r\n        <div class="form-control">\r\n          <p-dropdown\r\n            class="aw-dropdown fixed-width"\r\n            placeholder="&nbsp;"\r\n            [showClear]="true"\r\n            [(ngModel)]="selectedWarehouse"\r\n            [options]="warehouseList"\r\n          ></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </p-overlayPanel>\r\n\r\n  <div class="custom-button">\r\n    <button type="button" mat-raised-button class="float-right">\r\n      {{ getComponentName() + ".createLitigation" | translate }}\r\n    </button>\r\n    <button type="button" mat-raised-button class="float-right">\r\n      {{ getComponentName() + ".putOnHold" | translate }}\r\n    </button>\r\n  </div>\r\n  <div class="float-right">\r\n    <i\r\n      class="fa fa-fw fa-filter aw-icon aw-icon-with-overlay fa-2x"\r\n      aria-hidden="true"\r\n      pTooltip="{{ getComponentName() + (filtersVisible ? \'.hideFilters\' : \'.showFilters\') | translate }}"\r\n      tooltipPosition="top"\r\n      [ngClass]="{ active: filtersVisible }"\r\n      (click)="opFilters.toggle($event)"\r\n    ></i>\r\n  </div>\r\n</div>\r\n\r\n<div class="row" *ngIf="!!selectedStock">\r\n  <div class="grid-cell-12 panel-height">\r\n    <div class="grid-cell--4 stock-list">\r\n      <div #resultsContainerAnchor class=" grid-cell--container">\r\n        <div class="grid-cell-content">\r\n          <div class="grid-cell-content">\r\n            <p-table\r\n              [resizableColumns]="true"\r\n              #ptableResult\r\n              class="aw-table2"\r\n              [columns]="resultTableCols"\r\n              selectionMode="single"\r\n              [(selection)]="selectedStock"\r\n              [value]="stockMovementList"\r\n              (onRowUnselect)="onAssetRowUnselect()"\r\n              (onRowSelect)="onAssetRowSelect($event.index)"\r\n              [scrollable]="true"\r\n            >\r\n              <ng-template pTemplate="caption">\r\n                <div class="aw-table-header" [ngClass]="{ \'rows-selected\': selectedAssetRow }">\r\n                  <div class="aw-table-global-filter">\r\n                    <label class="aw-table-global-filter-label">\r\n                      <i class="fa fa-fw fa-search" aria-hidden="true"></i>\r\n                    </label>\r\n\r\n                    <input\r\n                      #tableGlobalFilter\r\n                      class="aw-table-global-filter-input"\r\n                      type="text"\r\n                      placeholder="{{ \'table.globalFilterText\' | translate }}"\r\n                      (input)="table.filterGlobal($event.target.value, \'contains\')"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n              <ng-template pTemplate="colgroup" let-columns>\r\n                <colgroup>\r\n                  <col class="aw-table-checkbox-wrapper" />\r\n                  <col *ngFor="let col of columns" [ngStyle]="{ width: col.width }" />\r\n                </colgroup>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate="header" let-columns>\r\n                <tr>\r\n                  <th pResizableColumn *ngFor="let col of columns" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                    {{ getComponentName() + "." + col.field | translate }}\r\n                  </th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template pTemplate="body" let-rowData let-columns="columns" let-rowIndex="rowIndex">\r\n                <tr [pSelectableRow]="rowData" [pSelectableRowIndex]="rowIndex">\r\n                  <td *ngFor="let col of columns" [ngSwitch]="col.field" [ngStyle]="{ \'text-align\': col.alignment }">\r\n                    <span *ngSwitchCase="\'sequence\'">\r\n                      <div class="code">\r\n                        {{ rowData["index"] }}\r\n                      </div>\r\n                    </span>\r\n                    <span *ngSwitchCase="\'movementType\'">\r\n                      <div class="code">\r\n                        <a> {{ rowData["mvtStockCode"] }}</a>\r\n                      </div>\r\n                    </span>\r\n                    <span *ngSwitchCase="\'article\'">\r\n                      <div class="code">\r\n                        <a> {{ rowData["pnCode"] }}</a>\r\n                      </div>\r\n                    </span>\r\n                    <span *ngSwitchCase="\'sn\'">\r\n                      <div class="code">\r\n                        {{ rowData["sn"] }}\r\n                      </div>\r\n                    </span>\r\n                    <span *ngSwitchCase="\'empl\'">\r\n                      <div class="code">\r\n                        {{ rowData["sbNumber"] }}\r\n                      </div>\r\n                    </span>\r\n                    <span *ngSwitchCase="\'status\'">\r\n                      <div class="code">\r\n                        {{ rowData["smoStatus"] }}\r\n                      </div>\r\n                    </span>\r\n                    <span *ngSwitchDefault>{{ rowData[col.field] }}</span>\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </p-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="grid-cell--8 custom-grid">\r\n      <div class="grid-cell--12">\r\n        <div class="grid-cell-content  grid-cell-content-with-section">\r\n          <div class="section">\r\n            <h4 class="section-title">\r\n              <span class="section-title-content">{{ getComponentName() + ".material" | translate }}</span\r\n              ><span class="hr-line"></span>\r\n            </h4>\r\n            <div class="section-content">\r\n              <div class="row">\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".article" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input class="aw-input" type="text" disabled [(ngModel)]="selectedStock.pnCode" />\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".snLot" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input class="aw-input" type="text" disabled [(ngModel)]="selectedStock.sn" />\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".qty" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input class="aw-input" type="text" disabled [(ngModel)]="selectedStock.qty" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class="row">\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".designation" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input class="aw-input" type="text" disabled [(ngModel)]="selectedStock.articleDesignation" />\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".status" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input class="aw-input" type="text" disabled [(ngModel)]="selectedStock.smoStatus" />\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".materialType" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input class="aw-input" type="text" disabled [(ngModel)]="selectedStock.pnType" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-cell--12">\r\n        <div class="grid-cell-content  grid-cell-content-with-section">\r\n          <div class="section">\r\n            <h4 class="section-title">\r\n              <span class="section-title-content">{{ getComponentName() + ".informationLogistics" | translate }}</span\r\n              ><span class="hr-line"></span>\r\n            </h4>\r\n            <div class="section-content">\r\n              <div class="row">\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".stock" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input class="aw-input" type="text" disabled [(ngModel)]="selectedStock.whCategory" />\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".emp" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input class="aw-input" type="text" disabled [(ngModel)]="selectedStock.sbNumber" />\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".additionalRemarks" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input class="aw-input" type="text" disabled [(ngModel)]="selectedStock.additionalRemarks" />\r\n                  </div>\r\n                </div>\r\n                <div class="form-group"></div>\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".container" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <i class="fa fa-fw fa-th  custom-icon"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class="row">\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".volume" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input class="aw-input" type="text" disabled [(ngModel)]="selectedStock.volume" />\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".height" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input class="aw-input" type="text" disabled [(ngModel)]="selectedStock.height" />\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".width" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input class="aw-input" type="text" disabled [(ngModel)]="selectedStock.width" />\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".diameter" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input class="aw-input" type="text" disabled [(ngModel)]="selectedStock.diameter" />\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <label class="form-label">{{ getComponentName() + ".weight" | translate }}</label>\r\n\r\n                  <div class="form-control">\r\n                    <input class="aw-input" type="text" disabled [(ngModel)]="selectedStock.weight" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="grid-cell--12">\r\n        <div class="grid-cell-content  grid-cell-content-with-section">\r\n          <div class="section">\r\n            <h4 class="section-title">\r\n              <span class="section-title-content">{{ getComponentName() + ".progression" | translate }}</span\r\n              ><span class="hr-line"></span>\r\n            </h4>\r\n            <div class="section-content">\r\n              <div class="row custom-row">\r\n                <div class="form-group">\r\n                  <div class="form-control custom-control custom-control-cb custom-control-cbf">\r\n                    <p-checkbox binary="true" class="aw-checkbox" [(ngModel)]="progressionPlanned"></p-checkbox>\r\n                  </div>\r\n                  <label class="form-label custom-control-label">{{\r\n                    getComponentName() + ".planned" | translate\r\n                  }}</label>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="form-control custom-control custom-control-cb">\r\n                    <p-checkbox binary="true" class="aw-checkbox" [(ngModel)]="progressionRequest"></p-checkbox>\r\n                  </div>\r\n                  <label class="form-label custom-control-label">{{\r\n                    getComponentName() + ".request" | translate\r\n                  }}</label>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="form-control custom-control custom-control-cb">\r\n                    <p-checkbox binary="true" class="aw-checkbox" [(ngModel)]="progressionChecked"></p-checkbox>\r\n                  </div>\r\n                  <label class="form-label custom-control-label">{{\r\n                    getComponentName() + ".checked" | translate\r\n                  }}</label>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="form-control custom-control custom-control-cb custom-control-cbl">\r\n                    <p-checkbox\r\n                      binary="true"\r\n                      class="aw-checkbox"\r\n                      [(ngModel)]="progressionReleased"\r\n                      (onChange)="calculateProgression()"\r\n                    ></p-checkbox>\r\n                  </div>\r\n                  <label class="form-label custom-control-label">{{\r\n                    getComponentName() + ".released" | translate\r\n                  }}</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <aw-dialog-select-container\r\n    *ngIf="showContainerDialog"\r\n    [(display)]="showContainerDialog"\r\n    (onAdded)="containerAddedEvent($event)"\r\n  ></aw-dialog-select-container>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/show-movement-card-view/show-movement-card-view.component.scss':
      /*!********************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/show-movement-card-view/show-movement-card-view.component.scss ***!
  \********************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host ::ng-deep .ui-card {\n  border-radius: 1em;\n  cursor: pointer;\n  margin-bottom: 1em; }\n\n:host ::ng-deep .ui-card :focus {\n  background: #dde8f1;\n  border: 3px solid #01579b;\n  margin-top: -4px;\n  border-radius: 10px 0 0 10px;\n  border-right-color: transparent;\n  margin-right: -8px;\n  overflow: hidden;\n  margin-bottom: 20px; }\n\n:host ::ng-deep .ui-card-body {\n  padding: 0; }\n\n:host .padding-class {\n  padding-left: 2em; }\n\n:host .custom-form-group {\n  margin: 1em 0 0 0 !important; }\n\n:host .custom-row {\n  width: 100%; }\n\n:host .custom-control {\n  text-align: center;\n  font-size: 3em !important; }\n\n:host .custom-control-label {\n  text-align: center; }\n\n:host .custom-button {\n  display: inline;\n  position: absolute;\n  right: 4em; }\n\n:host .custom-label {\n  border-radius: 50%;\n  border: 1px solid; }\n\n:host .header-label {\n  padding-left: 2em;\n  width: 90%; }\n\n:host .header-counter {\n  background-color: #006ea9;\n  width: 10%;\n  text-align: center;\n  color: #fff; }\n\n:host .header-padding {\n  display: inline-block;\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  border-top-left-radius: 1em; }\n\n:host .float-left {\n  float: left; }\n\n:host .float-right {\n  float: right;\n  padding-right: 0.5em;\n  cursor: pointer;\n  margin-right: 3px; }\n\n:host .footer-class {\n  padding: 1em;\n  cursor: pointer; }\n\n:host .panel-height-top {\n  height: 3em; }\n\n:host .custom-icon {\n  font-size: 3em; }\n\n:host .panel-height {\n  height: 40em; }\n\n:host .custom-grid {\n  border-left: 0.1em solid #000; }\n\n:host ::ng-deep .static-header {\n  background: #dde8f1;\n  border: 3px solid #01579b;\n  margin-top: -4px;\n  border-radius: 10px 0 0 10px;\n  border-right-color: transparent;\n  margin-right: -7px;\n  overflow: hidden;\n  margin-bottom: 20px; }\n\n:host ::ng-deep .ui-card .static-header > span {\n  padding: 15px;\n  display: inline-block; }\n\n:host ::ng-deep .ui-card span.static-header-counter {\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #01579b;\n  border: 1px solid #01579b;\n  color: #fff;\n  font-weight: 700;\n  height: 54px;\n  padding-top: 12px;\n  font-size: large;\n  border-top-left-radius: 0px; }\n\n:host ::ng-deep .ui-card .static-header-label {\n  padding-right: 0;\n  font-size: large; }\n\n:host .stock-list {\n  overflow: auto; }\n\n:host .hr-line {\n  border-top: 1px solid #01579b;\n  content: " ";\n  width: 100%;\n  display: flex;\n  align-self: center;\n  margin-left: 10px;\n  height: 3px; }\n\n:host .section-title-content {\n  white-space: nowrap; }\n\n:host .custom-control-cb .aw-checkbox {\n  height: auto !important;\n  width: auto !important; }\n\n:host ::ng-deep .custom-control-cb .aw-checkbox .ui-chkbox .ui-chkbox-box {\n  padding: 0;\n  border-radius: 100% !important;\n  background: #fff !important;\n  border: 1px solid #01579b;\n  height: 67px !important;\n  width: 67px !important; }\n\n:host ::ng-deep .custom-control-cb .ui-chkbox .ui-chkbox-box .ui-chkbox-icon {\n  font-size: 50px;\n  display: block;\n  line-height: 67px; }\n\n:host ::ng-deep .custom-control-cb .aw-checkbox .ui-chkbox .ui-chkbox-box:not(.ui-state-disabled).ui-state-active {\n  background: #01579a !important; }\n\n:host .custom-control-cb {\n  position: relative;\n  margin: 0 !important; }\n\n:host .custom-control-cb:before,\n:host .custom-control-cb:after {\n  content: "";\n  height: 1.8px;\n  display: inline-block;\n  width: 30%;\n  background: #01579b;\n  position: absolute;\n  top: 56%;\n  -webkit-transform: translateY(-56%);\n          transform: translateY(-56%); }\n\n:host .custom-control-cbf:before,\n:host .custom-control-cbl:after {\n  display: none; }\n\n:host .custom-control-cb:after {\n  right: 0; }\n\n:host .custom-control-cb:before {\n  left: 0; }\n\n:host .stock-list .aw-table2 tr {\n  height: 50px; }\n\n:host ::ng-deep .stock-list .ui-table .ui-table-thead > tr > th,\n:host td {\n  width: 20%; }\n\n:host ::ng-deep .stock-list .ui-table-scrollable-body {\n  max-height: 35em !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stbW92ZW1lbnRzL2Zvcm0vc2hvdy1tb3ZlbWVudC1jYXJkLXZpZXcvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxhcHBcXG1haW5cXGxvZ2lzdGljc1xcc3RvY2stbW92ZW1lbnRzXFxmb3JtXFxzaG93LW1vdmVtZW50LWNhcmQtdmlld1xcc2hvdy1tb3ZlbWVudC1jYXJkLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbG9naXN0aWNzL3N0b2NrLW1vdmVtZW50cy9mb3JtL3Nob3ctbW92ZW1lbnQtY2FyZC12aWV3L2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcc3R5bGVzXFxfY29uc3RhbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUp0QjtFQU9JLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFkdkI7RUFrQkksVUFBVSxFQUFBOztBQWxCZDtFQXNCSSxpQkFBaUIsRUFBQTs7QUF0QnJCO0VBMEJJLDRCQUE0QixFQUFBOztBQTFCaEM7RUE4QkksV0FBVyxFQUFBOztBQTlCZjtFQWtDSSxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBbkM3QjtFQXVDSSxrQkFBa0IsRUFBQTs7QUF2Q3RCO0VBMkNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQTdDZDtFQWlESSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBbERyQjtFQXNESSxpQkFBaUI7RUFDakIsVUFBVSxFQUFBOztBQXZEZDtFQTJESSx5QkNuQ2dCO0VEb0NoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdDaEUyQixFQUFBOztBREUvQjtFQWtFSSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQTs7QUFyRS9CO0VBeUVJLFdBQVcsRUFBQTs7QUF6RWY7RUE2RUksWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBaEZyQjtFQW9GSSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQXJGbkI7RUF5RkksV0FBVyxFQUFBOztBQXpGZjtFQTZGSSxjQUFjLEVBQUE7O0FBN0ZsQjtFQWlHSSxZQUFZLEVBQUE7O0FBakdoQjtFQXFHSSw2QkFBNkIsRUFBQTs7QUFyR2pDO0VBeUdJLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFoSHZCO0VBb0hJLGFBQWE7RUFDYixxQkFBcUIsRUFBQTs7QUFySHpCO0VBeUhJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDJCQUEyQixFQUFBOztBQWxJL0I7RUFzSUksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQXZJcEI7RUEySUksY0FBYyxFQUFBOztBQTNJbEI7RUErSUksNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQXJKZjtFQXlKSSxtQkFBbUIsRUFBQTs7QUF6SnZCO0VBNkpJLHVCQUF1QjtFQUN2QixzQkFBc0IsRUFBQTs7QUE5SjFCO0VBa0tJLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7O0FBdksxQjtFQTJLSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQTdLckI7RUFpTEksOEJBQThCLEVBQUE7O0FBakxsQztFQXFMSSxrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7O0FBdEx4Qjs7RUEyTEksV0FBVztFQUNYLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTs7QUFsTS9COztFQXVNSSxhQUFhLEVBQUE7O0FBdk1qQjtFQTJNSSxRQUFRLEVBQUE7O0FBM01aO0VBK01JLE9BQU8sRUFBQTs7QUEvTVg7RUFtTkksWUFBWSxFQUFBOztBQW5OaEI7O0VBd05JLFVBQVUsRUFBQTs7QUF4TmQ7RUE0TkksMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1tb3ZlbWVudHMvZm9ybS9zaG93LW1vdmVtZW50LWNhcmQtdmlldy9zaG93LW1vdmVtZW50LWNhcmQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuXHJcbjpob3N0IHtcclxuICA6Om5nLWRlZXAgLnVpLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLnVpLWNhcmQgOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGU4ZjE7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDE1NzliO1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLnVpLWNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLnBhZGRpbmctY2xhc3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luOiAxZW0gMCAwIDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tcm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1jb250cm9sIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogM2VtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDRlbTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tbGFiZWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLWxhYmVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMmVtO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItY291bnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS1kYXJrMTtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItcGFkZGluZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxZW07XHJcbiAgfVxyXG5cclxuICAuZmxvYXQtbGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcblxyXG4gIC5mbG9hdC1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1jbGFzcyB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtaGVpZ2h0LXRvcCB7XHJcbiAgICBoZWlnaHQ6IDNlbTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWlnaHQge1xyXG4gICAgaGVpZ2h0OiA0MGVtO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1ncmlkIHtcclxuICAgIGJvcmRlci1sZWZ0OiAwLjFlbSBzb2xpZCAjMDAwO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5zdGF0aWMtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGU4ZjE7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDE1NzliO1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtN3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLnVpLWNhcmQgLnN0YXRpYy1oZWFkZXIgPiBzcGFuIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLnVpLWNhcmQgc3Bhbi5zdGF0aWMtaGVhZGVyLWNvdW50ZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMTU3OWI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDE1NzliO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC51aS1jYXJkIC5zdGF0aWMtaGVhZGVyLWxhYmVsIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gIH1cclxuXHJcbiAgLnN0b2NrLWxpc3Qge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuaHItbGluZSB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAxNTc5YjtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlLWNvbnRlbnQge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tY29udHJvbC1jYiAuYXctY2hlY2tib3gge1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5jdXN0b20tY29udHJvbC1jYiAuYXctY2hlY2tib3ggLnVpLWNoa2JveCAudWktY2hrYm94LWJveCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAxNTc5YjtcclxuICAgIGhlaWdodDogNjdweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDY3cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuY3VzdG9tLWNvbnRyb2wtY2IgLnVpLWNoa2JveCAudWktY2hrYm94LWJveCAudWktY2hrYm94LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogNjdweDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuY3VzdG9tLWNvbnRyb2wtY2IgLmF3LWNoZWNrYm94IC51aS1jaGtib3ggLnVpLWNoa2JveC1ib3g6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMTU3OWEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tY29udHJvbC1jYiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tY29udHJvbC1jYjpiZWZvcmUsXHJcbiAgLmN1c3RvbS1jb250cm9sLWNiOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDEuOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJhY2tncm91bmQ6ICMwMTU3OWI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU2JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTYlKTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tY29udHJvbC1jYmY6YmVmb3JlLFxyXG4gIC5jdXN0b20tY29udHJvbC1jYmw6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tY29udHJvbC1jYjphZnRlciB7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tY29udHJvbC1jYjpiZWZvcmUge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5zdG9jay1saXN0IC5hdy10YWJsZTIgdHIge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5zdG9jay1saXN0IC51aS10YWJsZSAudWktdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxyXG4gIHRkIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLnN0b2NrLWxpc3QgLnVpLXRhYmxlLXNjcm9sbGFibGUtYm9keSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNWVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjNTk1OTU5O1xyXG4kYWNjZW50LWNvbG9yOiAjMDE1NzliO1xyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2U4ZWJlZDtcclxuJHRvcGJhci1jb2xvcjogI2ZhZmFmYTtcclxuXHJcbi8vICRwcmltYXJ5LWJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XHJcbi8vICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuLy8gJHByaW1hcnktdGV4dC1jb2xvcjogI2U4ZThlODtcclxuLy8gJHNlY29uZGFyeS10ZXh0LWNvbG9yOiAjZmZmO1xyXG4vLyAkYWNjZW50LWNvbG9yOiAjOWNkY2ZlO1xyXG5cclxuJGJvcmRlci1jb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1kaXNhYmxlZDogdHJhbnNwYXJlbnQ7XHJcbiRib3JkZXItY29sb3ItLWZvY3VzOiAkYWNjZW50LWNvbG9yO1xyXG4kYm9yZGVyLWNvbG9yLS1ob3ZlcjogIzFhMWExYTtcclxuXHJcbiRncmVlbi1kYXJrMTogIzI3NjMyYTtcclxuJGdyZWVuLWxpZ2h0MTogIzRjYWY1MDtcclxuJG9yYW5nZTogI2ZmYzEwNztcclxuJHJlZC1kYXJrMTogI2E4MjUyNTtcclxuJHJlZC1saWdodDE6ICNmNjY4NWU7XHJcbiRibHVlLWxpZ2h0MTogI2I4ZDBlODtcclxuJGJsdWUtZGFyazE6ICMwMDZlYTk7XHJcbiRncmV5MTogI2M4ZDRkNjtcclxuJHllbGxvdzE6ICNkZGRmMDA7XHJcblxyXG4kY3JpdGljYWwtdmFsdWUtZGFyazogI2ZiYTY0MzsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjcml0aWNhbC12YWx1ZS1saWdodDogI2ZlY2M4ZTsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRjYWxlbmRhci15ZWxsb3c6ICNlZmVmYjA7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG4kYmFkLXZhbHVlLWRhcms6ICNmZjY3NTg7IC8vIFRPRE86IHJlbW92ZSBpdFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuJGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYlwiO1xyXG4kZm9udC1zaXplOiAwLjg3NXJlbTtcclxuJGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XHJcbiRtYXJnaW4tdmFsdWU6IDhweDtcclxuJHBhZ2UtbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC00OiA0O1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMzogMztcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTI6IDI7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kbGVmdC1zaWRlYmFyLXdpZHRoLS1jb2xsYXBzZWQ6IDUwcHg7XHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJHJpZ2h0LXNpZGViYXItd2lkdGgtLWV4cGFuZGVkOiAyMjBweDtcclxuJHRvcGJhci1oZWlnaHQ6IDQwcHg7XHJcbiRtYWluYmFyLWJvcmRlci1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4kbWFpbmJhci1ib3JkZXItd2lkdGg6IDJweDtcclxuJHBhZ2UtaGVhZGVyLWhlaWdodDogNS41cmVtO1xyXG4kZm9ybS1jb250cm9sLWhlaWdodDogMi41cmVtO1xyXG4kY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtO1xyXG4kcmFkaW9idXR0b24taGVpZ2h0OiAxLjI1cmVtO1xyXG4iXX0= */';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/show-movement-card-view/show-movement-card-view.component.ts':
      /*!******************************************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/show-movement-card-view/show-movement-card-view.component.ts ***!
  \******************************************************************************************************************/
      /*! exports provided: ShowMovementCardViewComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ShowMovementCardViewComponent',
          function() {
            return ShowMovementCardViewComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../form.service */ './src/app/main/logistics/stock-movements/form/form.service.ts'
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

        var ShowMovementCardViewComponent = /** @class */ (function(_super) {
          __extends(ShowMovementCardViewComponent, _super);
          function ShowMovementCardViewComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            stockMovementsFormService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_1__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.stockMovementsFormService = stockMovementsFormService;
            _this.onChangeProgression = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            _this.initMovementCardDataSource();
            return _this;
          }
          ShowMovementCardViewComponent.prototype.getComponentName = function() {
            return 'ShowMovementCardViewComponent';
          };
          ShowMovementCardViewComponent.prototype.ngOnInit = function() {
            this.selectedStock = {};
            this.statusList = this.stockMovementsFormService.loadStatus();
            this.initMovementCardDataSource();
            this.stockMovementList.forEach(function(item, index) {
              item.index = index + 1;
            });
            this.stockMovementListClone = __spread(this.stockMovementList);
            this.selectedStock = this.stockMovementList[0];
          };
          /*******************************
           * Change Status
           *******************************/
          ShowMovementCardViewComponent.prototype.onChangeStatus = function() {
            var _this = this;
            if (!!this.selectedStatus) {
              this.stockMovementList = this.stockMovementListClone.filter(function(res) {
                return res.smoStatus === _this.selectedStatus;
              });
            } else {
              this.stockMovementList = __spread(this.stockMovementListClone);
            }
          };
          /*******************************
           * Select Container
           *******************************/
          ShowMovementCardViewComponent.prototype.selectContainter = function(stock) {
            this.selectedStock = stock;
            if (this.selectedStock.smoStatus === 'Planned') {
              this.progressionPlanned = true;
            }
            this.showContainerDialog = true;
          };
          ShowMovementCardViewComponent.prototype.containerAddedEvent = function(ev) {
            var _this = this;
            var index = this.stockMovementList.findIndex(function(res) {
              return res.sn === _this.selectedStock.sn && res.pn === _this.selectedStock.pn;
            });
            if (!!this.stockMovementList[index]) {
              this.stockMovementList[index].container = ev;
            }
          };
          ShowMovementCardViewComponent.prototype.calculateProgression = function() {
            var testVal = 13;
            this.onChangeProgression.emit(testVal);
            if (this.progressionReleased) {
              this.progressionChecked = true;
              this.progressionPlanned = true;
              this.progressionRequest = true;
            } else {
              this.progressionChecked = false;
              this.progressionPlanned = false;
              this.progressionRequest = false;
            }
          };
          ShowMovementCardViewComponent.prototype.initMovementCardDataSource = function() {
            this.resultTableCols = [
              {
                field: 'sequence',
                alignment: 'left'
              },
              {
                field: 'movementType',
                alignment: 'left'
              },
              {
                field: 'article',
                alignment: 'left'
              },
              {
                field: 'qty',
                alignment: 'left'
              },
              {
                field: 'empl',
                alignment: 'left'
              },
              {
                field: 'status',
                alignment: 'left'
              }
            ];
          };
          ShowMovementCardViewComponent.prototype.onAssetRowUnselect = function() {
            this.selectedAssetRowIndex = undefined;
          };
          ShowMovementCardViewComponent.prototype.onAssetRowSelect = function(rowIndex) {
            this.selectedAssetRowIndex = rowIndex;
          };
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Array)],
            ShowMovementCardViewComponent.prototype,
            'stockMovementList',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            ShowMovementCardViewComponent.prototype,
            'onChangeProgression',
            void 0
          );
          ShowMovementCardViewComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-show-movement-card-view',
                template: __webpack_require__(
                  /*! ./show-movement-card-view.component.html */ './src/app/main/logistics/stock-movements/form/show-movement-card-view/show-movement-card-view.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./show-movement-card-view.component.scss */ './src/app/main/logistics/stock-movements/form/show-movement-card-view/show-movement-card-view.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_2__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_3__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_4__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_5__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_6__['TabService'],
                _form_service__WEBPACK_IMPORTED_MODULE_8__['FormService']
              ])
            ],
            ShowMovementCardViewComponent
          );
          return ShowMovementCardViewComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_7__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/stock-movements-form.component.ts':
      /*!***************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/stock-movements-form.component.ts ***!
  \***************************************************************************************/
      /*! exports provided: StockMovementsFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StockMovementsFormComponent',
          function() {
            return StockMovementsFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/pipes/extract-translation.pipe */ './src/app/shared/pipes/extract-translation.pipe.ts'
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
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
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
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _search_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../search/search.service */ './src/app/main/logistics/stock-movements/search/search.service.ts'
        );
        /* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./form.component */ './src/app/main/logistics/stock-movements/form/form.component.ts'
        );
        /* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./form.service */ './src/app/main/logistics/stock-movements/form/form.service.ts'
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

        var StockMovementsFormComponent = /** @class */ (function(_super) {
          __extends(StockMovementsFormComponent, _super);
          function StockMovementsFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            translateService,
            extractTranslationPipe,
            logisticsService,
            propertiesService,
            searchService,
            formService
          ) {
            return (
              _super.call(
                this,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                sessionService,
                translateService,
                extractTranslationPipe,
                logisticsService,
                propertiesService,
                searchService,
                formService
              ) || this
            );
          }
          // ////////////////////////////////////////////////////////////////////////////
          StockMovementsFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .LOG_STOCK_MOVEMENTS_FORM;
          };
          // ////////////////////////////////////////////////////////////////////////////
          StockMovementsFormComponent.prototype.init = function() {
            _super.prototype.init.call(this);
          };
          Object.defineProperty(StockMovementsFormComponent.prototype, 'getCurrentComponentContext', {
            get: function() {
              return _form_component__WEBPACK_IMPORTED_MODULE_13__['ComponentContext'].STOCK_MOVEMENT;
            },
            enumerable: true,
            configurable: true
          });
          StockMovementsFormComponent.prototype.sortStockMovementRows = function() {
            return this.stockMovementsRows.sort(function(a, b) {
              return a.mvtStockCode.localeCompare(b.mvtStockCode);
            });
          };
          StockMovementsFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-stock-movements-form',
                template: __webpack_require__(
                  /*! ./form.component.html */ './src/app/main/logistics/stock-movements/form/form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./form.component.scss */ './src/app/main/logistics/stock-movements/form/form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_3__['ExtractTranslationPipe'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_11__['LogisticsService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__['PropertiesService'],
                _search_search_service__WEBPACK_IMPORTED_MODULE_12__['SearchService'],
                _form_service__WEBPACK_IMPORTED_MODULE_14__['FormService']
              ])
            ],
            StockMovementsFormComponent
          );
          return StockMovementsFormComponent;
        })(_form_component__WEBPACK_IMPORTED_MODULE_13__['FormComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/stockpilling-form.component.ts':
      /*!************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/stockpilling-form.component.ts ***!
  \************************************************************************************/
      /*! exports provided: StockpillingFormComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StockpillingFormComponent',
          function() {
            return StockpillingFormComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/pipes/extract-translation.pipe */ './src/app/shared/pipes/extract-translation.pipe.ts'
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
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
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
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _search_search_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../search/search.service */ './src/app/main/logistics/stock-movements/search/search.service.ts'
        );
        /* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./form.component */ './src/app/main/logistics/stock-movements/form/form.component.ts'
        );
        /* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./form.service */ './src/app/main/logistics/stock-movements/form/form.service.ts'
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

        var StockpillingFormComponent = /** @class */ (function(_super) {
          __extends(StockpillingFormComponent, _super);
          function StockpillingFormComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            sessionService,
            translateService,
            extractTranslationPipe,
            logisticsService,
            propertiesService,
            searchService,
            formService
          ) {
            return (
              _super.call(
                this,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                sessionService,
                translateService,
                extractTranslationPipe,
                logisticsService,
                propertiesService,
                searchService,
                formService
              ) || this
            );
          }
          // ////////////////////////////////////////////////////////////////////////////
          StockpillingFormComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .LOG_STOCK_MOVEMENTS_FORM_STOCKPILLING;
          };
          // ////////////////////////////////////////////////////////////////////////////
          StockpillingFormComponent.prototype.init = function() {
            _super.prototype.init.call(this);
          };
          Object.defineProperty(StockpillingFormComponent.prototype, 'getCurrentComponentContext', {
            get: function() {
              return _form_component__WEBPACK_IMPORTED_MODULE_13__['ComponentContext'].STOCK_PILLING;
            },
            enumerable: true,
            configurable: true
          });
          StockpillingFormComponent.prototype.sortStockMovementRows = function() {
            return this.stockMovementsRows.sort(function(a, b) {
              if (a.bidtStorageBinZoneReceipt === null || b.bidtStorageBinZoneReceipt === null) {
                return -1;
              }
              if (a.bidtStorageBinZoneReceipt.sbNumber && b.bidtStorageBinZoneReceipt.sbNumber) {
                var localeValue = a.bidtStorageBinZoneReceipt.sbNumber.localeCompare(
                  b.bidtStorageBinZoneReceipt.sbNumber
                );
                if (localeValue === 0) {
                  if (
                    (a.bidtStorageBinBinReceipt === null && b.bidtStorageBinBinReceipt !== null) ||
                    (b.bidtStorageBinBinReceipt === null && a.bidtStorageBinBinReceipt === null)
                  ) {
                    return 1;
                  } else if (b.bidtStorageBinBinReceipt === null && a.bidtStorageBinBinReceipt !== null) {
                    return -1;
                  }
                  if (a.bidtStorageBinBinReceipt.sbNumber && b.bidtStorageBinBinReceipt.sbNumber) {
                    localeValue = a.bidtStorageBinBinReceipt.sbNumber.localeCompare(
                      b.bidtStorageBinBinReceipt.sbNumber
                    );
                  }
                }
                return localeValue;
              } else {
                return -1;
              }
            });
          };
          StockpillingFormComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-stockpilling-form',
                template: __webpack_require__(
                  /*! ./form.component.html */ './src/app/main/logistics/stock-movements/form/form.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./form.component.scss */ './src/app/main/logistics/stock-movements/form/form.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_4__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_6__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_8__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_10__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_9__['SessionService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_3__['ExtractTranslationPipe'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_11__['LogisticsService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_7__['PropertiesService'],
                _search_search_service__WEBPACK_IMPORTED_MODULE_12__['SearchService'],
                _form_service__WEBPACK_IMPORTED_MODULE_14__['FormService']
              ])
            ],
            StockpillingFormComponent
          );
          return StockpillingFormComponent;
        })(_form_component__WEBPACK_IMPORTED_MODULE_13__['FormComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/search/picking-search.component.ts':
      /*!***********************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/search/picking-search.component.ts ***!
  \***********************************************************************************/
      /*! exports provided: PickingSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'PickingSearchComponent', function() {
          return PickingSearchComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/bidt-stock-mvt-type-constants */ './src/app/shared/constants/bidt-stock-mvt-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/pipes/extract-translation.pipe */ './src/app/shared/pipes/extract-translation.pipe.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./search.component */ './src/app/main/logistics/stock-movements/search/search.component.ts'
        );
        /* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./search.service */ './src/app/main/logistics/stock-movements/search/search.service.ts'
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

        var PickingSearchComponent = /** @class */ (function(_super) {
          __extends(PickingSearchComponent, _super);
          function PickingSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            logisticsService,
            sessionService,
            extractTranslationPipe,
            propertiesService,
            searchService,
            translateService
          ) {
            return (
              _super.call(
                this,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                logisticsService,
                sessionService,
                extractTranslationPipe,
                propertiesService,
                searchService,
                translateService
              ) || this
            );
          }
          // ////////////////////////////////////////////////////////////////////////////
          PickingSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
              .LOG_STOCK_MOVEMENTS_SEARCH_PICKING;
          };
          // ////////////////////////////////////////////////////////////////////////////
          PickingSearchComponent.prototype.init = function() {
            _super.prototype.init.call(this);
            this.selectedMovementType =
              _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                'BidtStockMvtTypeConstant'
              ].PICKING;
            this.particularSearch = true;
          };
          PickingSearchComponent.prototype.filterMovementTypes = function() {
            return _super.prototype.filterMovementTypes.call(this).filter(function(movementType) {
              return (
                movementType.value ===
                _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__['BidtStockMvtTypeConstant']
                  .PICKING
              );
            });
          };
          Object.defineProperty(PickingSearchComponent.prototype, 'getCurrentComponentContext', {
            get: function() {
              return _search_component__WEBPACK_IMPORTED_MODULE_14__['ComponentContext'].PICKING;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(PickingSearchComponent.prototype, 'getComponentNameTocall', {
            get: function() {
              return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
                .LOG_STOCK_MOVEMENTS_FORM_PICKING;
            },
            enumerable: true,
            configurable: true
          });
          PickingSearchComponent.prototype.loadStatuses = function() {
            this.statuses = [
              {
                label: this.translateService.instant('StockMovementsSearchComponent.planned'),
                value:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                    .MM_MVT_STATUS_PLANNED_KEY
              },
              {
                label: this.translateService.instant('onGoing'),
                value:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                    .MM_MVT_STATUS_ON_GOING_KEY
              },
              {
                label: this.translateService.instant('StockMovementsSearchComponent.checked'),
                value:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                    .MM_MVT_STATUS_CHECKED_KEY
              },
              {
                label: this.translateService.instant('executed'),
                value:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                    .MM_MVT_STATUS_EXECUTED_KEY
              },
              {
                label: this.translateService.instant('canceled'),
                value:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                    .MM_MVT_STATUS_CANCELED_KEY
              }
            ];
            this.selectedStatus =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__[
                'AWPropertiesConstants'
              ].MM_MVT_STATUS_PLANNED_KEY;
          };
          PickingSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-picking-search',
                template: __webpack_require__(
                  /*! ./search.component.html */ './src/app/main/logistics/stock-movements/search/search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./search.component.scss */ './src/app/main/logistics/stock-movements/search/search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__['TabService'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_13__['LogisticsService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__['SessionService'],
                _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_5__['ExtractTranslationPipe'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__['PropertiesService'],
                _search_service__WEBPACK_IMPORTED_MODULE_15__['SearchService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            PickingSearchComponent
          );
          return PickingSearchComponent;
        })(_search_component__WEBPACK_IMPORTED_MODULE_14__['SearchComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/search/search.component.html':
      /*!*****************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/search/search.component.html ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="page-header">\r\n  <div class="page-info">\r\n    <div>\r\n      <h2 class="page-title">\r\n        {{ "transaction." + componentData.componentId | translate }}\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="page-actions">\r\n    <button type="button" mat-raised-button>\r\n      {{ "create" | translate }}\r\n    </button>\r\n\r\n    <button\r\n      mat-icon-button\r\n      class="mat-elevation-z1"\r\n      matTooltip="{{ \'global.showAllActionTooltip\' | translate }}"\r\n      matTooltipPosition="above"\r\n      aria-label="Show all actions"\r\n      [matMenuTriggerFor]="actions"\r\n    >\r\n      <mat-icon>more_horiz</mat-icon>\r\n    </button>\r\n    <mat-menu #actions="matMenu">\r\n      <button mat-menu-item (click)="updateFavoriteState()">\r\n        {{ (isFavoriteEntry ? "page.removeFromFavorites" : "page.addToFavorites") | translate }}\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class="page-wrapper">\r\n  <div class="page-container search-page-container">\r\n    <div class="page-content">\r\n      <div class="grid-row">\r\n        <div class="grid-cell--12">\r\n          <div class="grid-cell grid-cell--container">\r\n            <div class="grid-cell-header">\r\n              <div class="grid-cell-title-container">\r\n                <h3 class="grid-cell-title">{{ "search" | translate }}</h3>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="grid-cell-content grid-cell-content-with-section">\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group required">\r\n                      <label class="form-label ">{{ componentNamespace + ".site" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          class="aw-dropdown fixed-width"\r\n                          placeholder="&nbsp;"\r\n                          [options]="sites"\r\n                          [showClear]="true"\r\n                          [(ngModel)]="selectedSite"\r\n                          (onChange)="onChangeSite()"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group required may-required" style="height: 47px;">\r\n                      <label class="form-label">\r\n                        {{ selectedWarehouseCategory | formatSelectOption: warehouseCategories }}\r\n                      </label>\r\n\r\n                      <div class="form-control aw-selectbutton-wrapper aw-selectbutton-with-dropdown">\r\n                        <p-selectButton\r\n                          [options]="warehouseCategories"\r\n                          [(ngModel)]="selectedWarehouseCategory"\r\n                          (onChange)="onChangeWarehouseCategory()"\r\n                        ></p-selectButton>\r\n\r\n                        <p-dropdown\r\n                          appendTo="body"\r\n                          class="aw-dropdown fixed-width"\r\n                          placeholder="&nbsp;"\r\n                          [options]="warehouses"\r\n                          [showClear]="true"\r\n                          [(ngModel)]="selectedWarehouse"\r\n                          (onChange)="onChangeWarehouse()"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group" *ngIf="getCurrentComponentContext == componentContext.PICKING">\r\n                      <label class="form-label ">{{ componentNamespace + ".zone" | translate }}</label>\r\n                      <div class="form-control">\r\n                        <p-dropdown\r\n                          appendTo="body"\r\n                          class="aw-dropdown fixed-width"\r\n                          placeholder="&nbsp;"\r\n                          [options]="zonesList"\r\n                          [showClear]="true"\r\n                          [(ngModel)]="selectedZone"\r\n                        ></p-dropdown>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group" *ngIf="getCurrentComponentContext != componentContext.PICKING"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section" *ngIf="getCurrentComponentContext == componentContext.STOCK_MOVEMENT">\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group required" style="height: 47px;">\r\n                      <label class="form-label"> {{ componentNamespace + ".movementType" | translate }}</label>\r\n\r\n                      <div class="form-control aw-selectbutton-wrapper">\r\n                        <p-selectButton\r\n                          [options]="filteredMovementTypes"\r\n                          [(ngModel)]="selectedMovementType"\r\n                        ></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <h4 class="section-title">{{ componentNamespace + ".statusAndDate" | translate }}</h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group" style="height: 47px;">\r\n                      <label class="form-label ">{{ "status" | translate }}</label>\r\n\r\n                      <div class="form-control aw-selectbutton-wrapper">\r\n                        <p-selectButton [options]="statuses" [(ngModel)]="selectedStatus"></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group required">\r\n                      <label\r\n                        class="form-label"\r\n                        *ngIf="\r\n                          selectedStatus !== component.EXECUTED_STATUS && selectedStatus != component.CANCEL_STATUS\r\n                        "\r\n                      >\r\n                        {{ componentNamespace + ".beforeDate" | translate }}</label\r\n                      >\r\n                      <label\r\n                        class="form-label"\r\n                        *ngIf="\r\n                          selectedStatus === component.EXECUTED_STATUS || selectedStatus == component.CANCEL_STATUS\r\n                        "\r\n                      >\r\n                        {{ componentNamespace + ".the" | translate }}</label\r\n                      >\r\n\r\n                      <div class="form-control">\r\n                        <p-calendar\r\n                          showButtonBar="true"\r\n                          [monthNavigator]="true"\r\n                          [yearNavigator]="true"\r\n                          [yearRange]="sessionService.calendarYearRange"\r\n                          appendTo="body"\r\n                          class="aw-calendar"\r\n                          [dateFormat]="sessionService.dateFormatPrimeNG"\r\n                          [locale]="sessionService.calendarFormat"\r\n                          [(ngModel)]="selectedDate"\r\n                        ></p-calendar>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section" *ngIf="getCurrentComponentContext == componentContext.PICKING">\r\n                <h4 class="section-title">{{ componentNamespace + ".criticity" | translate }}</h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group">\r\n                      <div class="form-control aw-selectbutton-wrapper">\r\n                        <p-selectButton [options]="criticalList" [(ngModel)]="selectedCritical"></p-selectButton>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <h4 class="section-title">{{ componentNamespace + ".goods" | translate }}</h4>\r\n\r\n                <div class="section-content">\r\n                  <div class="row">\r\n                    <div class="form-group required may-required">\r\n                      <label class="form-label">{{ componentNamespace + ".material" | translate }} </label>\r\n\r\n                      <div class="form-control form-control-with-modal">\r\n                        <div class="form-control-data" (click)="openPnDialog()">\r\n                          {{ selectedPnCode }}\r\n                        </div>\r\n\r\n                        <div *ngIf="selectedPnCode" class="btn-clear-wrapper">\r\n                          <i\r\n                            class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                            aria-hidden="true"\r\n                            (click)="unselectPn()"\r\n                          ></i>\r\n                        </div>\r\n                        <div class="btn-search-wrapper">\r\n                          <i\r\n                            class="fa fa-fw fa-search aw-icon btn-search"\r\n                            aria-hidden="true"\r\n                            (click)="openPnDialog()"\r\n                          ></i>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentNamespace + ".alternatives" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <p-checkbox\r\n                          binary="true"\r\n                          class="aw-checkbox"\r\n                          [disabled]="!selectedPnCode"\r\n                          [(ngModel)]="withAlternatives"\r\n                        ></p-checkbox>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">{{ componentNamespace + ".serial" | translate }}</label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" [(ngModel)]="selectedSn" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class="form-group">\r\n                      <label class="form-label">\r\n                        {{ componentNamespace + ".batchNumber" | translate }}\r\n                      </label>\r\n\r\n                      <div class="form-control">\r\n                        <input class="aw-input" type="text" [(ngModel)]="selectedBatchNumber" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section" *ngIf="advancedCriteriaVisible">\r\n                <div class="section-content">\r\n                  <div class="advanced-criteria">\r\n                    <div class="section" *ngIf="finalRecipientVisible">\r\n                      <h4 class="section-title">{{ componentNamespace + ".finalRecipient" | translate }}</h4>\r\n\r\n                      <div class="section-content">\r\n                        <div class="row">\r\n                          <div class="form-group" style="height: 47px;">\r\n                            <div class="form-control aw-selectbutton-wrapper">\r\n                              <p-selectButton [options]="recipients" [(ngModel)]="selectedRecipient"></p-selectButton>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class="row" *ngIf="selectedRecipient == component.RECIPIENT_INTERNAL">\r\n                          <div class="form-group">\r\n                            <label class="form-label">{{ componentNamespace + ".site" | translate }}</label>\r\n\r\n                            <div class="form-control">\r\n                              <p-dropdown\r\n                                class="aw-dropdown fixed-width"\r\n                                placeholder="&nbsp;"\r\n                                [options]="sites"\r\n                                [showClear]="true"\r\n                                [(ngModel)]="selectedFinalRecipientSite"\r\n                                (onChange)="onChangeFinalRecipientSite()"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class="form-group" style="height: 47px;">\r\n                            <label class="form-label">\r\n                              {{ selectedWarehouseCategory | formatSelectOption: warehouseCategories }}\r\n                            </label>\r\n\r\n                            <div class="form-control aw-selectbutton-wrapper aw-selectbutton-with-dropdown">\r\n                              <p-selectButton\r\n                                [options]="warehouseCategories"\r\n                                [(ngModel)]="selectedFinalRecipientWarehouseCategory"\r\n                                (onChange)="onChangeFinalRecipientWarehouseCategory()"\r\n                              ></p-selectButton>\r\n\r\n                              <p-dropdown\r\n                                appendTo="body"\r\n                                class="aw-dropdown fixed-width"\r\n                                placeholder="&nbsp;"\r\n                                [options]="finalRecipientWarehouses"\r\n                                [showClear]="true"\r\n                                [(ngModel)]="selectedFinalRecipientWarehouse"\r\n                              ></p-dropdown>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class="form-group"></div>\r\n                        </div>\r\n\r\n                        <div class="row" *ngIf="selectedRecipient == component.RECIPIENT_EXTERNAL">\r\n                          <div class="form-group">\r\n                            <label class="form-label">{{ componentNamespace + ".partner" | translate }}</label>\r\n\r\n                            <div class="form-control form-control-with-modal">\r\n                              <div class="form-control-data" (click)="openCustomerDialog()">\r\n                                {{ selectedFinalRecipientCustomerCode }}\r\n                              </div>\r\n\r\n                              <div *ngIf="selectedFinalRecipientCustomerCode" class="btn-clear-wrapper">\r\n                                <i\r\n                                  class="ui-dropdown-clear-icon pi pi-times aw-icon btn-clear"\r\n                                  aria-hidden="true"\r\n                                  (click)="unselectFinalRecipientCustomer()"\r\n                                ></i>\r\n                              </div>\r\n                              <div class="btn-search-wrapper">\r\n                                <i\r\n                                  class="fa fa-fw fa-search aw-icon btn-search"\r\n                                  aria-hidden="true"\r\n                                  (click)="openCustomerDialog()"\r\n                                ></i>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class="form-group flex--2"></div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section" *ngIf="finalRecipientVisible">\r\n                <div class="section-content">\r\n                  <div class="row search-criteria-footer">\r\n                    <button mat-button (click)="advancedCriteriaVisible = !advancedCriteriaVisible">\r\n                      <ng-container *ngIf="advancedCriteriaVisible">\r\n                        <mat-icon>remove</mat-icon>\r\n                        {{ "global.collapseCriteria" | translate }}\r\n                      </ng-container>\r\n                      <ng-container *ngIf="!advancedCriteriaVisible">\r\n                        <mat-icon>add</mat-icon>\r\n                        {{ "global.expandCriteria" | translate }}\r\n                      </ng-container>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="section">\r\n                <div class="section-content">\r\n                  <div class="row search-criteria-footer">\r\n                    <div class="search-actions">\r\n                      <button\r\n                        appKeyPress\r\n                        mat-raised-button\r\n                        color="primary"\r\n                        type="button"\r\n                        [disabled]="!canSearch()"\r\n                        [keyCode]="\'Enter\'"\r\n                        (click)="search()"\r\n                        (keyPress)="search()"\r\n                      >\r\n                        {{ "global.toSearch" | translate }}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<aw-dialog-search-material\r\n  *ngIf="pnDialogVisible"\r\n  [(display)]="pnDialogVisible"\r\n  (onSelected)="onSelectMaterial($event)"\r\n></aw-dialog-search-material>\r\n\r\n<aw-dialog-search-customer\r\n  *ngIf="customerDialogVisible"\r\n  [(display)]="customerDialogVisible"\r\n  (onSelected)="onSelectCustomer($event)"\r\n></aw-dialog-search-customer>\r\n';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/search/search.component.scss':
      /*!*****************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/search/search.component.scss ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .form-group.may-required .form-label::after {\n  color: #ffc107 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpc3RpY3Mvc3RvY2stbW92ZW1lbnRzL3NlYXJjaC9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXGFwcFxcbWFpblxcbG9naXN0aWNzXFxzdG9jay1tb3ZlbWVudHNcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUkseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ2lzdGljcy9zdG9jay1tb3ZlbWVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb25zdGFudHNcIjtcclxuXHJcbjpob3N0IHtcclxuICAuZm9ybS1ncm91cC5tYXktcmVxdWlyZWQgLmZvcm0tbGFiZWw6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/search/search.component.ts':
      /*!***************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/search/search.component.ts ***!
  \***************************************************************************/
      /*! exports provided: ComponentContext, SearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ComponentContext', function() {
          return ComponentContext;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'SearchComponent', function() {
          return SearchComponent;
        });
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/bidt-stock-mvt-constants */ './src/app/shared/constants/bidt-stock-mvt-constants.ts'
        );
        /* harmony import */ var _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/bidt-stock-mvt-type-constants */ './src/app/shared/constants/bidt-stock-mvt-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/types/page-component */ './src/app/shared/types/page-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/utils/logistic-utils */ './src/app/shared/utils/logistic-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
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

        var ComponentContext;
        (function(ComponentContext) {
          ComponentContext[(ComponentContext['PICKING'] = 0)] = 'PICKING';
          ComponentContext[(ComponentContext['STOCK_MOVEMENT'] = 1)] = 'STOCK_MOVEMENT';
          ComponentContext[(ComponentContext['STOCK_PILLING'] = 2)] = 'STOCK_PILLING';
        })(ComponentContext || (ComponentContext = {}));
        var SearchComponent = /** @class */ (function(_super) {
          __extends(SearchComponent, _super);
          function SearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            logisticsService,
            sessionService,
            extractTranslationPipe,
            propertiesService,
            searchService,
            translateService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Write,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService
              ) || this;
            _this.logisticsService = logisticsService;
            _this.sessionService = sessionService;
            _this.extractTranslationPipe = extractTranslationPipe;
            _this.propertiesService = propertiesService;
            _this.searchService = searchService;
            _this.translateService = translateService;
            _this.component = SearchComponent;
            _this.componentContext = ComponentContext;
            _this.componentNamespace =
              _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__[
                'ComponentConstants'
              ].LOG_STOCK_MOVEMENTS_SEARCH;
            _this.init();
            _this.displayComponentContext('global.search', true);
            return _this;
          }
          // ////////////////////////////////////////////////////////////////////////////
          SearchComponent.prototype.canSearch = function() {
            return (
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__['ObjectUtils'].isDefined(this.selectedSite) &&
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__['ObjectUtils'].isDefined(
                this.selectedMovementType
              ) &&
              _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__['ObjectUtils'].isDefined(this.selectedDate) &&
              (_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__['ObjectUtils'].isDefined(
                this.selectedWarehouse
              ) ||
                _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_10__['ObjectUtils'].isDefined(this.selectedPnCode))
            );
          };
          SearchComponent.prototype.onChangeSite = function() {
            this.onChangeWarehouseCategory();
          };
          SearchComponent.prototype.onChangeFinalRecipientSite = function() {
            this.onChangeFinalRecipientWarehouseCategory();
          };
          SearchComponent.prototype.onChangeFinalRecipientWarehouseCategory = function() {
            var _this = this;
            this.unselectFinalRecipientWarehouse();
            if (this.selectedFinalRecipientSite) {
              this.loadWareHouses(
                this.selectedFinalRecipientSite,
                this.selectedFinalRecipientWarehouseCategory
              ).subscribe({
                next: function(warehouses) {
                  _this.finalRecipientWarehouses = warehouses;
                }
              });
            }
          };
          SearchComponent.prototype.onChangeWarehouseCategory = function() {
            var _this = this;
            this.unselectWarehouse();
            this.filteredMovementTypes = this.filterMovementTypes();
            if (this.selectedSite) {
              this.loadWareHouses(this.selectedSite, this.selectedWarehouseCategory).subscribe({
                next: function(warehouses) {
                  _this.warehouses = warehouses;
                }
              });
            }
          };
          SearchComponent.prototype.onChangeWarehouse = function() {
            var _this = this;
            this.searchService.findBidtWarehouseById(this.selectedWarehouse).subscribe(function(warehouseWithBin) {
              _this.selectedWarehouseDTO = warehouseWithBin;
              if (_this.selectedWarehouseDTO.bidtStorageBinDTOs) {
                _this.fillZoneList(_this.selectedWarehouseDTO.bidtStorageBinDTOs);
              }
            });
          };
          SearchComponent.prototype.fillZoneList = function(zonesListInput) {
            this.zonesList = zonesListInput.map(function(zone) {
              var zoneRow = {
                label: zone.sbNumber + (zone.sbDescription ? ' - ' + zone.sbDescription : ''),
                value: zone.id
              };
              return zoneRow;
            });
          };
          SearchComponent.prototype.onSelectCustomer = function(customer) {
            this.selectedFinalRecipientCustomerCode = customer.customerCode;
          };
          SearchComponent.prototype.onSelectMaterial = function(pn) {
            this.selectedPnCode = pn.pnCode;
          };
          SearchComponent.prototype.openCustomerDialog = function() {
            this.customerDialogVisible = true;
          };
          SearchComponent.prototype.openPnDialog = function() {
            this.pnDialogVisible = true;
          };
          SearchComponent.prototype.search = function() {
            var _this = this;
            var selectedMvtWay = this.movementTypes.find(function(movementType) {
              return movementType.value.id === _this.selectedMovementType;
            }).value.smtWay;
            var bidtSiteByBidtSiteIssueId;
            var bidtSiteByBidtSiteReceiptId;
            var bidtWarehouseByBidtWarehouseIssueId;
            var bidtWarehouseByBidtWarehouseReceiptId;
            var bidtStorageBinByBidtSbZoneReceiptId;
            var bidtStorageBinByBidtSbZoneIssueId;
            if (
              selectedMvtWay ===
                _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                  .MVT_WAY_CREDIT ||
              selectedMvtWay ===
                _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                  .MVT_WAY_TRANSFER
            ) {
              bidtSiteByBidtSiteReceiptId = this.selectedSite;
              bidtWarehouseByBidtWarehouseReceiptId = this.selectedWarehouse;
              bidtStorageBinByBidtSbZoneReceiptId = this.selectedZone;
            } else if (
              selectedMvtWay ===
                _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                  .MVT_WAY_DEBIT ||
              selectedMvtWay ===
                _shared_constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                  .MVT_WAY_TRANSFER
            ) {
              bidtSiteByBidtSiteIssueId = this.selectedSite;
              bidtWarehouseByBidtWarehouseIssueId = this.selectedWarehouse;
              bidtStorageBinByBidtSbZoneIssueId = this.selectedZone;
            }
            var mvtStatus = [];
            var mvtStatusExcluded = [];
            var untilPlannedDate;
            var untilRealDate;
            if (
              this.selectedStatus ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .MM_MVT_STATUS_CANCELED_KEY ||
              this.selectedStatus ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .MM_MVT_STATUS_EXECUTED_KEY
            ) {
              mvtStatus = [this.selectedStatus];
              untilRealDate = this.selectedDate;
            } else if (this.selectedStatus === this.component.NO_EXECUTED) {
              mvtStatusExcluded = [
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .MM_MVT_STATUS_CANCELED_KEY,
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .MM_MVT_STATUS_EXECUTED_KEY
              ];
              mvtStatus = [];
              untilPlannedDate = this.selectedDate;
            } else if (!!this.selectedStatus) {
              mvtStatusExcluded = [
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .MM_MVT_STATUS_CANCELED_KEY,
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .MM_MVT_STATUS_EXECUTED_KEY
              ];
              mvtStatus = [this.selectedStatus];
              untilPlannedDate = this.selectedDate;
            }
            var searchCriteria = {
              mvtStatus: mvtStatus,
              mvtStatusExcluded: mvtStatusExcluded,
              untilPlannedDate: untilPlannedDate,
              untilRealDate: untilRealDate,
              stockMvt: {
                bidtSiteByBidtSiteIssueId: bidtSiteByBidtSiteIssueId,
                bidtSiteByBidtSiteReceiptId: bidtSiteByBidtSiteReceiptId,
                bidtWarehouseByBidtWarehouseIssueId: bidtWarehouseByBidtWarehouseIssueId,
                bidtWarehouseByBidtWarehouseReceiptId: bidtWarehouseByBidtWarehouseReceiptId,
                bidtStorageBinByBidtSbZoneReceiptId: bidtStorageBinByBidtSbZoneReceiptId,
                bidtStorageBinByBidtSbZoneIssueId: bidtStorageBinByBidtSbZoneIssueId,
                bidtStockMvtTypeId: this.selectedMovementType,
                stockMvtSn: this.selectedSn,
                stockMvtBatchNumber: this.selectedBatchNumber
              },
              finalReceiverCustomerCode: this.selectedFinalRecipientCustomerCode,
              finalReceiverSiteId: this.selectedFinalRecipientSite,
              finalReceiverWarehouseId: this.selectedFinalRecipientWarehouse,
              pnCode: this.selectedPnCode,
              withAlternatives: this.withAlternatives,
              criticality: this.selectedCritical,
              dfShipmentSearch: false
            };
            this.searchService.findByCriteria(searchCriteria).subscribe(function(mvtList) {
              var params = {
                searchParameters: searchCriteria,
                bidtStockList: mvtList
              };
              var data = {
                id: _this.tabService.generateId(),
                componentId: _this.getComponentNameTocall,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_6__['ComponentOpenMode'].Read,
                objectId: _this.serializationService.serialize(params)
              };
              var labelKey = 'transaction.' + data.componentId;
              _this.tabService.open(_this.tabService.create(data, labelKey, true));
            });
          };
          SearchComponent.prototype.unselectFinalRecipientCustomer = function() {
            this.selectedFinalRecipientCustomerCode = undefined;
          };
          SearchComponent.prototype.unselectPn = function() {
            this.selectedPnCode = undefined;
          };
          // ////////////////////////////////////////////////////////////////////////////
          SearchComponent.prototype.filterMovementTypes = function() {
            var _this = this;
            return this.movementTypes
              .filter(function(movementType) {
                return _this.selectedWarehouseCategory ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                    .WAREHOUSE_CATEGORY_WAREHOUSE
                  ? movementType.value.id !==
                      _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                        'BidtStockMvtTypeConstant'
                      ].INSTALLATION &&
                      movementType.value.id !==
                        _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                          'BidtStockMvtTypeConstant'
                        ].REMOVAL &&
                      movementType.value.id !==
                        _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                          'BidtStockMvtTypeConstant'
                        ].WORKSHOP_ENTRY &&
                      movementType.value.id !==
                        _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                          'BidtStockMvtTypeConstant'
                        ].WORKSHOP_ISSUE
                  : movementType.value.id !==
                      _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                        'BidtStockMvtTypeConstant'
                      ].INSTALLATION &&
                      movementType.value.id !==
                        _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                          'BidtStockMvtTypeConstant'
                        ].BATCH_SPLITTING_MINUS &&
                      movementType.value.id !==
                        _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                          'BidtStockMvtTypeConstant'
                        ].BATCH_SPLITTING_PLUS &&
                      movementType.value.id !==
                        _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                          'BidtStockMvtTypeConstant'
                        ].CROSS_DOCKING &&
                      movementType.value.id !==
                        _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                          'BidtStockMvtTypeConstant'
                        ].QUARANTINE &&
                      movementType.value.id !==
                        _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                          'BidtStockMvtTypeConstant'
                        ].RECEIPT &&
                      movementType.value.id !==
                        _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                          'BidtStockMvtTypeConstant'
                        ].SHIPMENT;
              })
              .map(function(movementType) {
                return {
                  label: movementType.label,
                  value: movementType.value.id
                };
              });
          };
          SearchComponent.prototype.init = function() {
            this.filteredMovementTypes = [];
            this.finalRecipientWarehouses = [];
            this.movementTypes = [];
            this.recipients = [];
            this.sites = [];
            this.statuses = [];
            this.warehouseCategories = [];
            this.warehouses = [];
            this.zonesList = [];
            this.criticalList = [];
            this.selectedBatchNumber = undefined;
            this.selectedDate = new Date();
            this.selectedFinalRecipientCustomerCode = undefined;
            this.selectedFinalRecipientSite = undefined;
            this.selectedFinalRecipientWarehouse = undefined;
            this.selectedFinalRecipientWarehouseCategory = undefined;
            this.selectedPnCode = undefined;
            this.selectedMovementType = undefined;
            this.selectedRecipient = undefined;
            this.selectedSite = undefined;
            this.selectedSn = undefined;
            this.selectedStatus = undefined;
            this.selectedWarehouse = undefined;
            this.selectedWarehouseCategory = undefined;
            this.withAlternatives = false;
            this.advancedCriteriaVisible = false;
            this.customerDialogVisible = false;
            this.finalRecipientVisible = true;
            this.pnDialogVisible = false;
            this.particularSearch = false;
            this.loadMovementTypes();
            this.loadSites();
            this.loadStatuses();
            this.loadRecipients();
            this.loadWarehouseCategories();
            this.loadCriticity();
          };
          // ////////////////////////////////////////////////////////////////////////////
          SearchComponent.prototype.loadCriticity = function() {
            var _this = this;
            this.searchService.loadCriticalityList().subscribe(function(res) {
              res.forEach(function(criticity) {
                _this.criticalList.push({
                  label: criticity.label,
                  value: criticity.value
                });
              });
              _this.criticalList = _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_9__[
                'LogisticalUtils'
              ].sortCriticities(_this.criticalList);
              _this.criticalList = __spread(
                [
                  {
                    label: _this.translateService.instant(_this.getTranslateKey('all', _this.componentNamespace)),
                    value: undefined
                  }
                ],
                _this.criticalList
              );
            });
          };
          SearchComponent.prototype.loadMovementTypes = function() {
            var _this = this;
            this.logisticsService.findStockMvtTypes().subscribe({
              next: function(movementTypes) {
                _this.movementTypes = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils']
                  .orEmpty(movementTypes)
                  .filter(function(movementType) {
                    return (
                      movementType.id !==
                        _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                          'BidtStockMvtTypeConstant'
                        ].INVENTORY_CORRECTION_MINUS &&
                      movementType.id !==
                        _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                          'BidtStockMvtTypeConstant'
                        ].INVENTORY_CORRECTION_PLUS
                    );
                  })
                  .map(function(movementType) {
                    return {
                      label: _this.extractTranslationPipe.transform(movementType.smtName),
                      value: movementType
                    };
                  })
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
                _this.loadUserSiteId();
                _this.LoadUserWarehouseId();
              }
            });
          };
          SearchComponent.prototype.LoadUserWarehouseId = function() {
            var _this = this;
            this.sessionService.getUserWarehouseId().subscribe({
              next: function(warehouse) {
                _this.selectedWarehouseCategory = warehouse ? warehouse.whCategory : undefined;
                _this.filteredMovementTypes = _this.filterMovementTypes();
                _this.loadWareHouses(_this.selectedSite, _this.selectedWarehouseCategory).subscribe({
                  next: function(warehouses) {
                    _this.warehouses = warehouses;
                    if (warehouse && warehouse.wareHouseId) {
                      _this.selectedWarehouse = warehouse ? warehouse.wareHouseId : undefined;
                    }
                  }
                });
              }
            });
          };
          SearchComponent.prototype.loadUserSiteId = function() {
            var _this = this;
            this.sessionService.getUserSiteId().subscribe({
              next: function(site) {
                _this.selectedSite = site ? site.siteId : undefined;
              }
            });
          };
          SearchComponent.prototype.loadRecipients = function() {
            this.recipients = [
              {
                label: this.translateService.instant('internal'),
                value: SearchComponent.RECIPIENT_INTERNAL
              },
              {
                label: this.translateService.instant('external'),
                value: SearchComponent.RECIPIENT_EXTERNAL
              }
            ];
          };
          SearchComponent.prototype.loadSites = function() {
            var _this = this;
            this.searchService.findAllBireSite().subscribe({
              next: function(sites) {
                _this.sites = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils']
                  .orEmpty(sites)
                  .map(function(site) {
                    return {
                      label: site.siteCode + ' - ' + site.siteName,
                      value: site.siteId
                    };
                  })
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
              }
            });
          };
          SearchComponent.prototype.loadWareHouses = function(site, warehouseCategory) {
            return this.searchService.getWarehousesBySiteId(site).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__['map'])(function(warehouses) {
                return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils']
                  .orEmpty(warehouses)
                  .filter(function(warehouse) {
                    return warehouse.whCategory === warehouseCategory;
                  })
                  .map(function(warehouse) {
                    return {
                      label: warehouse.whCode + ' - ' + warehouse.whName,
                      value: warehouse.wareHouseId
                    };
                  })
                  .sort(function(s1, s2) {
                    return s1.label.localeCompare(s2.label);
                  });
              })
            );
          };
          SearchComponent.prototype.loadWarehouseCategories = function() {
            var _this = this;
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_5__['GenericPropertyConstants']
                  .WAREHOUSE_CATEGORY_MAP
              )
              .subscribe({
                next: function(warehouseCategories) {
                  _this.warehouseCategories = _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_8__['ListUtils']
                    .orEmpty(warehouseCategories)
                    .sort(function(s1, s2) {
                      return s1.value.localeCompare(s2.value);
                    });
                  var warehouseCategory =
                    _this.warehouseCategories.length > 0 ? _this.warehouseCategories[0].value : undefined;
                  _this.selectedWarehouseCategory = warehouseCategory;
                  _this.selectedFinalRecipientWarehouseCategory = warehouseCategory;
                  _this.onChangeWarehouseCategory();
                }
              });
          };
          SearchComponent.prototype.unselectFinalRecipientWarehouse = function() {
            this.finalRecipientWarehouses = [];
            this.selectedFinalRecipientWarehouse = undefined;
          };
          SearchComponent.prototype.unselectWarehouse = function() {
            this.warehouses = [];
            this.selectedWarehouse = undefined;
          };
          SearchComponent.RECIPIENT_EXTERNAL = 0;
          SearchComponent.RECIPIENT_INTERNAL = 1;
          SearchComponent.EXECUTED_STATUS =
            _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__[
              'AWPropertiesConstants'
            ].MM_MVT_STATUS_EXECUTED_KEY;
          SearchComponent.CANCEL_STATUS =
            _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__[
              'AWPropertiesConstants'
            ].MM_MVT_STATUS_CANCELED_KEY;
          SearchComponent.NO_EXECUTED = '0';
          return SearchComponent;
        })(_shared_types_page_component__WEBPACK_IMPORTED_MODULE_7__['PageComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/search/stock-movements-search.component.ts':
      /*!*******************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/search/stock-movements-search.component.ts ***!
  \*******************************************************************************************/
      /*! exports provided: StockMovementsSearchComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StockMovementsSearchComponent',
          function() {
            return StockMovementsSearchComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/bidt-stock-mvt-type-constants */ './src/app/shared/constants/bidt-stock-mvt-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/pipes/extract-translation.pipe */ './src/app/shared/pipes/extract-translation.pipe.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./search.component */ './src/app/main/logistics/stock-movements/search/search.component.ts'
        );
        /* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./search.service */ './src/app/main/logistics/stock-movements/search/search.service.ts'
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

        var StockMovementsSearchComponent = /** @class */ (function(_super) {
          __extends(StockMovementsSearchComponent, _super);
          function StockMovementsSearchComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            logisticsService,
            sessionService,
            extractTranslationPipe,
            propertiesService,
            searchService,
            translateService
          ) {
            return (
              _super.call(
                this,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                logisticsService,
                sessionService,
                extractTranslationPipe,
                propertiesService,
                searchService,
                translateService
              ) || this
            );
          }
          // ////////////////////////////////////////////////////////////////////////////
          StockMovementsSearchComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
              .LOG_STOCK_MOVEMENTS_SEARCH;
          };
          StockMovementsSearchComponent.prototype.filterMovementTypes = function() {
            return _super.prototype.filterMovementTypes.call(this).filter(function(movementType) {
              return (
                movementType.value !==
                  _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                    'BidtStockMvtTypeConstant'
                  ].STORAGE &&
                movementType.value !==
                  _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                    'BidtStockMvtTypeConstant'
                  ].PICKING
              );
            });
          };
          Object.defineProperty(StockMovementsSearchComponent.prototype, 'getCurrentComponentContext', {
            get: function() {
              return _search_component__WEBPACK_IMPORTED_MODULE_14__['ComponentContext'].STOCK_MOVEMENT;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(StockMovementsSearchComponent.prototype, 'getComponentNameTocall', {
            get: function() {
              return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
                .LOG_STOCK_MOVEMENTS_FORM;
            },
            enumerable: true,
            configurable: true
          });
          StockMovementsSearchComponent.prototype.loadStatuses = function() {
            this.statuses = [
              {
                label: this.translateService.instant('StockMovementsSearchComponent.noExcecuted'),
                value: this.component.NO_EXECUTED
              },
              {
                label: this.translateService.instant('executed'),
                value:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                    .MM_MVT_STATUS_EXECUTED_KEY
              },
              {
                label: this.translateService.instant('canceled'),
                value:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                    .MM_MVT_STATUS_CANCELED_KEY
              }
            ];
            this.selectedStatus = this.component.NO_EXECUTED;
          };
          StockMovementsSearchComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-stock-movements-search',
                template: __webpack_require__(
                  /*! ./search.component.html */ './src/app/main/logistics/stock-movements/search/search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./search.component.scss */ './src/app/main/logistics/stock-movements/search/search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__['TabService'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_13__['LogisticsService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__['SessionService'],
                _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_5__['ExtractTranslationPipe'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__['PropertiesService'],
                _search_service__WEBPACK_IMPORTED_MODULE_15__['SearchService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            StockMovementsSearchComponent
          );
          return StockMovementsSearchComponent;
        })(_search_component__WEBPACK_IMPORTED_MODULE_14__['SearchComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/search/stockpilling-search.component.ts':
      /*!****************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/search/stockpilling-search.component.ts ***!
  \****************************************************************************************/
      /*! exports provided: StockpillingSearcComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StockpillingSearcComponent',
          function() {
            return StockpillingSearcComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/constants/bidt-stock-mvt-type-constants */ './src/app/shared/constants/bidt-stock-mvt-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/pipes/extract-translation.pipe */ './src/app/shared/pipes/extract-translation.pipe.ts'
        );
        /* harmony import */ var _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/services/favorite.service */ './src/app/shared/services/favorite.service.ts'
        );
        /* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/loader.service */ './src/app/shared/services/loader.service.ts'
        );
        /* harmony import */ var _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/services/message.service */ './src/app/shared/services/message.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _logistics_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./search.component */ './src/app/main/logistics/stock-movements/search/search.component.ts'
        );
        /* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./search.service */ './src/app/main/logistics/stock-movements/search/search.service.ts'
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

        var StockpillingSearcComponent = /** @class */ (function(_super) {
          __extends(StockpillingSearcComponent, _super);
          function StockpillingSearcComponent(
            favoriteService,
            loaderService,
            messageService,
            serializationService,
            tabService,
            logisticsService,
            sessionService,
            extractTranslationPipe,
            propertiesService,
            searchService,
            translateService
          ) {
            return (
              _super.call(
                this,
                favoriteService,
                loaderService,
                messageService,
                serializationService,
                tabService,
                logisticsService,
                sessionService,
                extractTranslationPipe,
                propertiesService,
                searchService,
                translateService
              ) || this
            );
          }
          // ////////////////////////////////////////////////////////////////////////////
          StockpillingSearcComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
              .LOG_STOCK_MOVEMENTS_SEARCH_STOCKPILLING;
          };
          // ////////////////////////////////////////////////////////////////////////////
          StockpillingSearcComponent.prototype.filterMovementTypes = function() {
            return _super.prototype.filterMovementTypes.call(this).filter(function(movementType) {
              return (
                movementType.value ===
                _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__['BidtStockMvtTypeConstant']
                  .STORAGE
              );
            });
          };
          StockpillingSearcComponent.prototype.init = function() {
            _super.prototype.init.call(this);
            this.finalRecipientVisible = false;
            this.selectedMovementType =
              _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_3__[
                'BidtStockMvtTypeConstant'
              ].STORAGE;
            this.particularSearch = true;
          };
          Object.defineProperty(StockpillingSearcComponent.prototype, 'getCurrentComponentContext', {
            get: function() {
              return _search_component__WEBPACK_IMPORTED_MODULE_14__['ComponentContext'].STOCK_PILLING;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(StockpillingSearcComponent.prototype, 'getComponentNameTocall', {
            get: function() {
              return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_4__['ComponentConstants']
                .LOG_STOCK_MOVEMENTS_FORM_STOCKPILLING;
            },
            enumerable: true,
            configurable: true
          });
          StockpillingSearcComponent.prototype.loadStatuses = function() {
            this.statuses = [
              {
                label: this.translateService.instant('StockMovementsSearchComponent.noExcecuted'),
                value: this.component.NO_EXECUTED
              },
              {
                label: this.translateService.instant('executed'),
                value:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                    .MM_MVT_STATUS_EXECUTED_KEY
              },
              {
                label: this.translateService.instant('canceled'),
                value:
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_2__['AWPropertiesConstants']
                    .MM_MVT_STATUS_CANCELED_KEY
              }
            ];
            this.selectedStatus = this.component.NO_EXECUTED;
          };
          StockpillingSearcComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-stockpilling-search',
                template: __webpack_require__(
                  /*! ./search.component.html */ './src/app/main/logistics/stock-movements/search/search.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./search.component.scss */ './src/app/main/logistics/stock-movements/search/search.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_favorite_service__WEBPACK_IMPORTED_MODULE_6__['FavoriteService'],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_7__['LoaderService'],
                _shared_services_message_service__WEBPACK_IMPORTED_MODULE_8__['MessageService'],
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_10__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_12__['TabService'],
                _logistics_service__WEBPACK_IMPORTED_MODULE_13__['LogisticsService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_11__['SessionService'],
                _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_5__['ExtractTranslationPipe'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_9__['PropertiesService'],
                _search_service__WEBPACK_IMPORTED_MODULE_15__['SearchService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
              ])
            ],
            StockpillingSearcComponent
          );
          return StockpillingSearcComponent;
        })(_search_component__WEBPACK_IMPORTED_MODULE_14__['SearchComponent']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/stock-movements.module.ts':
      /*!**************************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/stock-movements.module.ts ***!
  \**************************************************************************/
      /*! exports provided: StockMovementsModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'StockMovementsModule', function() {
          return StockMovementsModule;
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
        /* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/card */ './node_modules/primeng/card.js'
        );
        /* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_card__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/chart */ './node_modules/primeng/chart.js'
        );
        /* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_chart__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/checkbox */ './node_modules/primeng/checkbox.js'
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/overlaypanel */ './node_modules/primeng/overlaypanel.js'
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/progressbar */ './node_modules/primeng/progressbar.js'
        );
        /* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/selectbutton */ './node_modules/primeng/selectbutton.js'
        );
        /* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-customer/dialog-search-customer.module */ './src/app/shared/components/dialog-search-customer/dialog-search-customer.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-material/dialog-search-material.module */ './src/app/shared/components/dialog-search-material/dialog-search-material.module.ts'
        );
        /* harmony import */ var _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/components/dialog-search-pn/dialog-search-pn.module */ './src/app/shared/components/dialog-search-pn/dialog-search-pn.module.ts'
        );
        /* harmony import */ var _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/components/manage-search-criteria/manage-search-criteria.module */ './src/app/shared/components/manage-search-criteria/manage-search-criteria.module.ts'
        );
        /* harmony import */ var _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../shared/components/modal/modal.module */ './src/app/shared/components/modal/modal.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../goods-receipt/delivery-folder-search.service */ './src/app/main/logistics/goods-receipt/delivery-folder-search.service.ts'
        );
        /* harmony import */ var _goods_receipt_form_goods_receipt_form_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../goods-receipt/form/goods-receipt-form.service */ './src/app/main/logistics/goods-receipt/form/goods-receipt-form.service.ts'
        );
        /* harmony import */ var _packaging_batch_packaging_batch_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../packaging-batch/packaging-batch.module */ './src/app/main/logistics/packaging-batch/packaging-batch.module.ts'
        );
        /* harmony import */ var _form_dialog_add_package_shipment_dialog_add_package_shipment_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./form/dialog-add-package-shipment/dialog-add-package-shipment.component */ './src/app/main/logistics/stock-movements/form/dialog-add-package-shipment/dialog-add-package-shipment.component.ts'
        );
        /* harmony import */ var _form_dialog_confirm_treatment_confirm_dialog_treatment_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./form/dialog-confirm-treatment/confirm-dialog-treatment.component */ './src/app/main/logistics/stock-movements/form/dialog-confirm-treatment/confirm-dialog-treatment.component.ts'
        );
        /* harmony import */ var _form_dialog_create_shipment_folder_dialog_create_shipment_folder_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./form/dialog-create-shipment-folder/dialog-create-shipment-folder.component */ './src/app/main/logistics/stock-movements/form/dialog-create-shipment-folder/dialog-create-shipment-folder.component.ts'
        );
        /* harmony import */ var _form_dialog_document_categories_dialog_document_categories_stock_mvt_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ./form/dialog-document-categories/dialog-document-categories-stock-mvt.component */ './src/app/main/logistics/stock-movements/form/dialog-document-categories/dialog-document-categories-stock-mvt.component.ts'
        );
        /* harmony import */ var _form_dialog_select_container_dialog_select_container_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
          /*! ./form/dialog-select-container/dialog-select-container.component */ './src/app/main/logistics/stock-movements/form/dialog-select-container/dialog-select-container.component.ts'
        );
        /* harmony import */ var _form_dialog_select_location_dialog_select_location_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
          /*! ./form/dialog-select-location/dialog-select-location.component */ './src/app/main/logistics/stock-movements/form/dialog-select-location/dialog-select-location.component.ts'
        );
        /* harmony import */ var _form_form_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
          /*! ./form/form.service */ './src/app/main/logistics/stock-movements/form/form.service.ts'
        );
        /* harmony import */ var _form_movement_information_movement_information_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
          /*! ./form/movement-information/movement-information.component */ './src/app/main/logistics/stock-movements/form/movement-information/movement-information.component.ts'
        );
        /* harmony import */ var _form_picking_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
          /*! ./form/picking-form.component */ './src/app/main/logistics/stock-movements/form/picking-form.component.ts'
        );
        /* harmony import */ var _form_show_movement_card_view_show_movement_card_view_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
          /*! ./form/show-movement-card-view/show-movement-card-view.component */ './src/app/main/logistics/stock-movements/form/show-movement-card-view/show-movement-card-view.component.ts'
        );
        /* harmony import */ var _form_stock_movements_form_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
          /*! ./form/stock-movements-form.component */ './src/app/main/logistics/stock-movements/form/stock-movements-form.component.ts'
        );
        /* harmony import */ var _form_stockpilling_form_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
          /*! ./form/stockpilling-form.component */ './src/app/main/logistics/stock-movements/form/stockpilling-form.component.ts'
        );
        /* harmony import */ var _search_picking_search_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
          /*! ./search/picking-search.component */ './src/app/main/logistics/stock-movements/search/picking-search.component.ts'
        );
        /* harmony import */ var _search_search_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
          /*! ./search/search.service */ './src/app/main/logistics/stock-movements/search/search.service.ts'
        );
        /* harmony import */ var _search_stock_movements_search_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
          /*! ./search/stock-movements-search.component */ './src/app/main/logistics/stock-movements/search/stock-movements-search.component.ts'
        );
        /* harmony import */ var _search_stockpilling_search_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
          /*! ./search/stockpilling-search.component */ './src/app/main/logistics/stock-movements/search/stockpilling-search.component.ts'
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
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__['TooltipModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__['DropdownModule'],
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_19__['TableModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__['CheckboxModule'],
          primeng_selectbutton__WEBPACK_IMPORTED_MODULE_8__['SelectButtonModule'],
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__['CalendarModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_9__['TableModule'],
          primeng_chart__WEBPACK_IMPORTED_MODULE_3__['ChartModule'],
          _shared_components_manage_search_criteria_manage_search_criteria_module__WEBPACK_IMPORTED_MODULE_17__[
            'ManageSearchCriteriaModule'
          ],
          primeng_card__WEBPACK_IMPORTED_MODULE_2__['CardModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_6__['OverlayPanelModule'],
          _shared_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_18__['ModalModule'],
          primeng_progressbar__WEBPACK_IMPORTED_MODULE_7__['ProgressBarModule'],
          _shared_components_dialog_search_material_dialog_search_material_module__WEBPACK_IMPORTED_MODULE_15__[
            'DialogSearchMaterialModule'
          ],
          _shared_components_dialog_search_customer_dialog_search_customer_module__WEBPACK_IMPORTED_MODULE_14__[
            'DialogSearchCustomerModule'
          ],
          _packaging_batch_packaging_batch_module__WEBPACK_IMPORTED_MODULE_23__['PackagingBatchModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_dialog_search_pn_dialog_search_pn_module__WEBPACK_IMPORTED_MODULE_16__[
            'DialogSearchPnModule'
          ]
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [];
        var DYNAMIC_COMPONENTS = [
          _search_stockpilling_search_component__WEBPACK_IMPORTED_MODULE_39__['StockpillingSearcComponent'],
          _search_picking_search_component__WEBPACK_IMPORTED_MODULE_36__['PickingSearchComponent'],
          _form_stock_movements_form_component__WEBPACK_IMPORTED_MODULE_34__['StockMovementsFormComponent'],
          _search_stock_movements_search_component__WEBPACK_IMPORTED_MODULE_38__['StockMovementsSearchComponent'],
          _form_show_movement_card_view_show_movement_card_view_component__WEBPACK_IMPORTED_MODULE_33__[
            'ShowMovementCardViewComponent'
          ],
          _form_movement_information_movement_information_component__WEBPACK_IMPORTED_MODULE_31__[
            'MovementInformationComponent'
          ],
          _form_dialog_select_container_dialog_select_container_component__WEBPACK_IMPORTED_MODULE_28__[
            'DialogSelectContainerComponent'
          ],
          _form_dialog_confirm_treatment_confirm_dialog_treatment_component__WEBPACK_IMPORTED_MODULE_25__[
            'ConfirmDialogTreatmentComponent'
          ],
          _form_dialog_select_location_dialog_select_location_component__WEBPACK_IMPORTED_MODULE_29__[
            'DialogSelectLocationComponent'
          ],
          _form_picking_form_component__WEBPACK_IMPORTED_MODULE_32__['PickingFormComponent'],
          _form_stockpilling_form_component__WEBPACK_IMPORTED_MODULE_35__['StockpillingFormComponent'],
          _form_dialog_add_package_shipment_dialog_add_package_shipment_component__WEBPACK_IMPORTED_MODULE_24__[
            'DialogAddPackageShipmentComponent'
          ],
          _form_dialog_document_categories_dialog_document_categories_stock_mvt_component__WEBPACK_IMPORTED_MODULE_27__[
            'DialogDocumentCategoriesStockMvtComponent'
          ],
          _form_dialog_create_shipment_folder_dialog_create_shipment_folder_component__WEBPACK_IMPORTED_MODULE_26__[
            'DialogCreateShipmentFolderComponent'
          ]
        ];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _form_form_service__WEBPACK_IMPORTED_MODULE_30__['FormService'],
          _search_search_service__WEBPACK_IMPORTED_MODULE_37__['SearchService'],
          _goods_receipt_delivery_folder_search_service__WEBPACK_IMPORTED_MODULE_21__['DeliveryFolderSearchService'],
          _goods_receipt_form_goods_receipt_form_service__WEBPACK_IMPORTED_MODULE_22__['GoodsReceiptFormService']
        ];
        var StockMovementsModule = /** @class */ (function() {
          function StockMovementsModule() {}
          StockMovementsModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_11__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_12__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_13__['AppCommonSharedModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_20__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(SERVICES)
              })
            ],
            StockMovementsModule
          );
          return StockMovementsModule;
        })();

        /***/
      },

    /***/ './src/app/shared/utils/logistic-utils.ts':
      /*!************************************************!*\
  !*** ./src/app/shared/utils/logistic-utils.ts ***!
  \************************************************/
      /*! exports provided: LogisticalUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LogisticalUtils', function() {
          return LogisticalUtils;
        });
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! moment */ './node_modules/moment/moment.js'
        );
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          moment__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../constants/bidt-stock-mvt-constants */ './src/app/shared/constants/bidt-stock-mvt-constants.ts'
        );
        /* harmony import */ var _list_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _number_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./number-utils */ './src/app/shared/utils/number-utils.ts'
        );
        /* harmony import */ var _string_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./string-utils */ './src/app/shared/utils/string-utils.ts'
        );

        var LogisticalUtils = /** @class */ (function() {
          function LogisticalUtils() {}
          LogisticalUtils.sortCriticities = function(criticities) {
            return criticities.sort(function(c1, _c2) {
              if (
                c1.value ===
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .LOGISTICAL_CRITICALITY_ROUTINE
              ) {
                return -1;
              } else if (
                c1.value ===
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .LOGISTICAL_CRITICALITY_IMMEDIATE
              ) {
                return 1;
              }
              return 0;
            });
          };
          LogisticalUtils.getServedIndicators = function(procurementRequest) {
            if (procurementRequest.bidtWarehouseReceipt && procurementRequest.bidtWarehouseReceipt.whCategory) {
              var procurementRequestItems = this.buildProcurementRequestItemsRows(procurementRequest);
              return this.computeProcurementRequestProgress(procurementRequestItems);
            } else {
              return undefined;
            }
          };
          LogisticalUtils.buildProcurementRequestItemsRows = function(procurementRequest) {
            var _this = this;
            return _list_utils__WEBPACK_IMPORTED_MODULE_3__['ListUtils']
              .orEmpty(procurementRequest.bidtProcReqItems)
              .map(function(bidtProcReqItem) {
                return _this.buildProcurementRequestItemRow(bidtProcReqItem);
              })
              .sort(function(x, y) {
                if (x.obj.statusDate && y.obj.statusDate) {
                  return moment__WEBPACK_IMPORTED_MODULE_0__(x.obj.statusDate).isBefore(y.obj.statusDate) ? -1 : 1;
                } else if (x.obj.statusDate) {
                  return -1;
                } else {
                  return 1;
                }
              });
          };
          LogisticalUtils.buildProcurementRequestItemRow = function(procurementRequestItem) {
            var progress = this.computeProcurementRequestItemProgress(
              procurementRequestItem.workshopEntries,
              procurementRequestItem.requestedQuantity
            );
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
          LogisticalUtils.computeProcurementRequestReverseItemProgress = function(stockMvts) {
            var filteredStockMvts = _list_utils__WEBPACK_IMPORTED_MODULE_3__['ListUtils']
              .orEmpty(stockMvts)
              .filter(function(stockMvt) {
                return (
                  stockMvt.stockMvtWay ===
                  _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                    .MVT_WAY_CREDIT
                );
              });
            var reversedStockMvts = filteredStockMvts.filter(function(stockMvt) {
              return (
                stockMvt.mvtStatus ===
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .MM_MVT_STATUS_EXECUTED_KEY
              );
            });
            var allNb = filteredStockMvts
              .map(function(stockMvt) {
                return stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0;
              })
              .reduce(function(acc, x) {
                return acc + x;
              }, 0);
            var reversedNb = reversedStockMvts
              .map(function(stockMvt) {
                return stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0;
              })
              .reduce(function(acc, x) {
                return acc + x;
              }, 0);
            var notReversedNb = allNb - reversedNb;
            return { allNb: allNb, reversedNb: reversedNb, notReversedNb: notReversedNb };
          };
          LogisticalUtils.computeProcurementRequestItemProgress = function(stockMvts, requestedQuantity) {
            var filteredStockMvts = _list_utils__WEBPACK_IMPORTED_MODULE_3__['ListUtils']
              .orEmpty(stockMvts)
              .filter(function(stockMvt) {
                return (
                  stockMvt.stockMvtWay ===
                  _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                    .MVT_WAY_CREDIT
                );
              });
            var servedStockMvts = filteredStockMvts.filter(function(stockMvt) {
              return (
                stockMvt.mvtStatus ===
                _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                  .MM_MVT_STATUS_EXECUTED_KEY
              );
            });
            var servedNb = servedStockMvts
              .map(function(stockMvt) {
                return stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0;
              })
              .reduce(function(acc, x) {
                return acc + x;
              }, 0);
            var bookedNb = filteredStockMvts
              .filter(function(stockMvt) {
                return (
                  stockMvt.mvtStatus !==
                    _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                      .MM_MVT_STATUS_EXECUTED_KEY &&
                  stockMvt.mvtStatus !==
                    _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                      .MM_MVT_STATUS_CANCELED_KEY &&
                  (!_string_utils__WEBPACK_IMPORTED_MODULE_5__['StringUtils'].isNullOrEmpty(stockMvt.stockMvtSn) ||
                    !_string_utils__WEBPACK_IMPORTED_MODULE_5__['StringUtils'].isNullOrEmpty(
                      stockMvt.stockMvtBatchNumber
                    ))
                );
              })
              .map(function(stockMvt) {
                return stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0;
              })
              .reduce(function(acc, x) {
                return acc + x;
              }, 0);
            var notServedNb = _string_utils__WEBPACK_IMPORTED_MODULE_5__['StringUtils'].isNullOrEmpty(requestedQuantity)
              ? 0
              : Math.max(
                  0,
                  _number_utils__WEBPACK_IMPORTED_MODULE_4__['NumberUtils'].fromString(requestedQuantity) -
                    servedNb -
                    bookedNb
                );
            return {
              allNb: filteredStockMvts.length,
              bookedNb: bookedNb,
              notBookedNb: notServedNb,
              servedNb: servedNb
            };
          };
          LogisticalUtils.computeProcurementRequestProgress = function(procurementRequestItems) {
            var procurementRequestQuantity = _list_utils__WEBPACK_IMPORTED_MODULE_3__['ListUtils']
              .orEmpty(procurementRequestItems)
              .map(function(e) {
                return e.obj.requestedQuantity;
              })
              .filter(function(quantity) {
                return !_string_utils__WEBPACK_IMPORTED_MODULE_5__['StringUtils'].isNullOrEmpty(quantity);
              })
              .map(function(quantity) {
                return _number_utils__WEBPACK_IMPORTED_MODULE_4__['NumberUtils'].fromString(quantity);
              })
              .reduce(function(acc, x) {
                return acc + x;
              }, 0);
            var procurementRequestProgress = _list_utils__WEBPACK_IMPORTED_MODULE_3__['ListUtils']
              .orEmpty(procurementRequestItems)
              .reduce(
                function(a, b) {
                  return {
                    bookedNb: a.bookedNb + b.bookedNb,
                    notBookedNb: a.notBookedNb + b.notBookedNb,
                    servedNb: a.servedNb + b.servedNb
                  };
                },
                {
                  bookedNb: 0,
                  notBookedNb: 0,
                  servedNb: 0
                }
              );
            return {
              bookedNb: procurementRequestProgress.bookedNb,
              notBookedNb: procurementRequestProgress.notBookedNb,
              isServed: procurementRequestProgress.servedNb === procurementRequestQuantity,
              servedNb: procurementRequestProgress.servedNb
            };
          };
          LogisticalUtils.isReversedTransfer = function(mvts) {
            return mvts.some(function(mvt) {
              return (
                mvt.stockMvtWay ===
                  _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                    .MVT_WAY_CREDIT &&
                mvt.mvtStatus ===
                  _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                    .MM_MVT_STATUS_EXECUTED_KEY
              );
            });
          };
          LogisticalUtils.isReversingTransfer = function(mvts) {
            return (
              mvts.some(function(mvt) {
                return (
                  mvt.stockMvtWay ===
                    _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                      .MVT_WAY_DEBIT &&
                  mvt.mvtStatus ===
                    _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                      .MM_MVT_STATUS_EXECUTED_KEY
                );
              }) &&
              mvts.some(function(mvt) {
                return (
                  mvt.stockMvtWay ===
                    _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                      .MVT_WAY_CREDIT &&
                  mvt.mvtStatus !==
                    _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                      .MM_MVT_STATUS_EXECUTED_KEY
                );
              })
            );
          };
          LogisticalUtils.isExecutingTransfer = function(mvts) {
            return (
              !mvts.some(function(mvt) {
                return (
                  mvt.stockMvtWay ===
                    _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                      .MVT_WAY_DEBIT &&
                  mvt.mvtStatus ===
                    _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                      .MM_MVT_STATUS_EXECUTED_KEY
                );
              }) &&
              !mvts.some(function(mvt) {
                return (
                  mvt.stockMvtWay ===
                    _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                      .MVT_WAY_CREDIT &&
                  mvt.mvtStatus ===
                    _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                      .MM_MVT_STATUS_EXECUTED_KEY
                );
              })
            );
          };
          LogisticalUtils.isWaitingTransfer = function(mvts) {
            return mvts.some(function(mvt) {
              return (
                mvt.stockMvtWay ===
                  _constants_bidt_stock_mvt_constants__WEBPACK_IMPORTED_MODULE_2__['BidtStockMvtConstants']
                    .MVT_WAY_TRANSFER &&
                mvt.mvtStatus !==
                  _constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_1__['AWPropertiesConstants']
                    .MM_MVT_STATUS_EXECUTED_KEY
              );
            });
          };
          return LogisticalUtils;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=logistics-stock-movements-stock-movements-module.js.map
