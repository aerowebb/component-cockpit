(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~engineering-management-engineering-management-module~logistics-goods-receipt-goods-receipt-m~6fa2eb53'],
  {
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

    /***/ './src/app/main/logistics/transfer-order/shared/transfer-order-service.ts':
      /*!********************************************************************************!*\
  !*** ./src/app/main/logistics/transfer-order/shared/transfer-order-service.ts ***!
  \********************************************************************************/
      /*! exports provided: DocumentType, TransferOrderService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'DocumentType', function() {
          return DocumentType;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TransferOrderService', function() {
          return TransferOrderService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-df-type.api */ './src/app/shared/api/bidt-df-type.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/pipes/extract-translation.pipe */ './src/app/shared/pipes/extract-translation.pipe.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
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

        var DocumentType;
        (function(DocumentType) {
          DocumentType[(DocumentType['DOCUMENT_TYPE_PROCUREMENT_REQUEST'] = 0)] = 'DOCUMENT_TYPE_PROCUREMENT_REQUEST';
          DocumentType[(DocumentType['DOCUMENT_TYPE_WORK_PACKAGE'] = 1)] = 'DOCUMENT_TYPE_WORK_PACKAGE';
        })(DocumentType || (DocumentType = {}));
        var TransferOrderService = /** @class */ (function(_super) {
          __extends(TransferOrderService, _super);
          function TransferOrderService(
            http,
            appConfigService,
            bidtDfTypeApi,
            translateService,
            propertiesService,
            extractTranslationPipe,
            fleetManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtDfTypeApi = bidtDfTypeApi;
            _this.translateService = translateService;
            _this.propertiesService = propertiesService;
            _this.extractTranslationPipe = extractTranslationPipe;
            _this.fleetManagementApi = fleetManagementApi;
            return _this;
          }
          TransferOrderService.prototype.fetchTypeList = function() {
            var _this = this;
            return _super.prototype.post.call(this, this.bidtDfTypeApi.findShipmentDfTypes).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(dfTypes) {
                return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                  .orEmpty(dfTypes)
                  .map(function(dfType) {
                    return {
                      label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].orEmpty(
                        _this.extractTranslationPipe.transform(dfType.dftDesignation)
                      ),
                      value: dfType.id
                    };
                  });
              })
            );
          };
          TransferOrderService.prototype.fetchTypeObjectList = function() {
            var _this = this;
            return _super.prototype.post.call(this, this.bidtDfTypeApi.findShipmentDfTypes).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(dfTypes) {
                return _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_11__['ListUtils']
                  .orEmpty(dfTypes)
                  .map(function(dfType) {
                    return {
                      label: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_12__['StringUtils'].orEmpty(
                        _this.extractTranslationPipe.transform(dfType.dftDesignation)
                      ),
                      value: dfType
                    };
                  });
              })
            );
          };
          TransferOrderService.prototype.loadDocumentTypes = function() {
            return [
              {
                label: this.translateService.instant('procurementRequest'),
                value: DocumentType.DOCUMENT_TYPE_PROCUREMENT_REQUEST
              },
              {
                label: this.translateService.instant('workPackage'),
                value: DocumentType.DOCUMENT_TYPE_WORK_PACKAGE
              }
            ];
          };
          TransferOrderService.prototype.fetchCriticalityList = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .LOGISTICAL_CRITICALITY_MAP
            );
          };
          TransferOrderService.prototype.fetchStatusList = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .TRANSFER_FOLDER_STATUS_MAP
            );
          };
          TransferOrderService.prototype.fetchProcurementRequestTypeList = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .PROCUREMENT_REQUEST_TYPE_MAP
            );
          };
          TransferOrderService.prototype.fetchProcurementRequestStatusList = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .PROCUREMENT_REQUEST_STATUS_MAP
            );
          };
          TransferOrderService.prototype.fetchOperationalStatuses = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .OPERATIONAL_STATUS_MAP
            );
          };
          TransferOrderService.prototype.fetchStockMvtStatuses = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .MVT_STATUS_MAP
            );
          };
          TransferOrderService.prototype.fetchWorkPackageStatuses = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .AIRM_PROJECT_STATUS_MAP
            );
          };
          TransferOrderService.prototype.fetchWorkPackageTypes = function() {
            return this.propertiesService.getValue(
              _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_6__['GenericPropertyConstants']
                .WORK_PACKAGE_TYPE_MAP
            );
          };
          TransferOrderService.prototype.findBidoEquipmentsByPnAndSn = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes, input);
          };
          TransferOrderService.prototype.findBidoEquipmentByPnAndBatchNumber = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentByPnAndBatchNumber, input);
          };
          TransferOrderService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__['AppConfigService'],
                _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_4__['BidtDfTypeApi'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__['PropertiesService'],
                _shared_pipes_extract_translation_pipe__WEBPACK_IMPORTED_MODULE_8__['ExtractTranslationPipe'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__['FleetManagementApi']
              ])
            ],
            TransferOrderService
          );
          return TransferOrderService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__['AbstractAwHttpService']);

        /***/
      }
  }
]);
//# sourceMappingURL=default~engineering-management-engineering-management-module~logistics-goods-receipt-goods-receipt-m~6fa2eb53.js.map
