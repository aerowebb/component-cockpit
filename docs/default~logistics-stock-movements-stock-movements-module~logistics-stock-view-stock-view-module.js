(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~logistics-stock-movements-stock-movements-module~logistics-stock-view-stock-view-module'],
  {
    /***/ './node_modules/primeng/overlaypanel.js':
      /*!**********************************************!*\
  !*** ./node_modules/primeng/overlaypanel.js ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /* Shorthand */

        function __export(m) {
          for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
        Object.defineProperty(exports, '__esModule', { value: true });
        __export(
          __webpack_require__(
            /*! ./components/overlaypanel/overlaypanel */ './node_modules/primeng/components/overlaypanel/overlaypanel.js'
          )
        );

        /***/
      },

    /***/ './src/app/main/logistics/stock-movements/form/form.service.ts':
      /*!*********************************************************************!*\
  !*** ./src/app/main/logistics/stock-movements/form/form.service.ts ***!
  \*********************************************************************/
      /*! exports provided: FormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FormService', function() {
          return FormService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/asset-management.api */ './src/app/shared/api/asset-management.api.ts'
        );
        /* harmony import */ var _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/bido-equipment.api */ './src/app/shared/api/bido-equipment.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_delivery_folder_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-delivery-folder.api */ './src/app/shared/api/bidt-delivery-folder.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-df-type.api */ './src/app/shared/api/bidt-df-type.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-site.api */ './src/app/shared/api/bidt-site.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-stock-mvt.api */ './src/app/shared/api/bidt-stock-mvt.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_storage_bin_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-storage-bin.api */ './src/app/shared/api/bidt-storage-bin.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
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

        var FormService = /** @class */ (function(_super) {
          __extends(FormService, _super);
          function FormService(
            http,
            appConfigService,
            bidtWarehouseApi,
            bidtSiteApi,
            bidtStorageBinApi,
            bidtStockMvtApi,
            assetManagementApi,
            bidtDfTypeApi,
            fleetManagementApi,
            bidtDeliveryFolderApi,
            bidoEquipmentApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            _this.bidtSiteApi = bidtSiteApi;
            _this.bidtStorageBinApi = bidtStorageBinApi;
            _this.bidtStockMvtApi = bidtStockMvtApi;
            _this.assetManagementApi = assetManagementApi;
            _this.bidtDfTypeApi = bidtDfTypeApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.bidtDeliveryFolderApi = bidtDeliveryFolderApi;
            _this.bidoEquipmentApi = bidoEquipmentApi;
            return _this;
          }
          FormService.prototype.findBidtStorageBinById = function(id) {
            return _super.prototype.post.call(this, this.bidtStorageBinApi.getById, id);
          };
          /*************************
           * Fleet Management api
           *************************/
          FormService.prototype.findBidoEquipmentsByPnAndSn = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes, input);
          };
          FormService.prototype.findBidoEquipmentByPnAndBatchNumber = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentByPnAndBatchNumber, input);
          };
          /*************************
           * bidt site api
           *************************/
          FormService.prototype.findSiteById = function(siteId) {
            return _super.prototype.post.call(this, this.bidtSiteApi.getById, siteId);
          };
          /*************************
           * bidt warehouse api
           *************************/
          FormService.prototype.findBidtWarehouseById = function(warehouseId) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.getById, warehouseId);
          };
          FormService.prototype.findStorageBinListByWarehouse = function(warehouseId) {
            return _super.prototype.post.call(this, this.bidtStorageBinApi.findAllByWarehouseId, warehouseId);
          };
          FormService.prototype.findByWarehouseId = function(id) {
            return _super.prototype.post.call(this, this.bidtStorageBinApi.findByWarehouseId, id);
          };
          /**************************************************************************
           * asset management api
           *************************************************************************/
          FormService.prototype.getManufacturingBatchByEquipment = function(input) {
            return _super.prototype.post.call(this, this.assetManagementApi.getManufacturingBatchByEquipment, input);
          };
          /**************************************************************************
           * stock movement api
           *************************************************************************/
          FormService.prototype.updateMvtsStatus = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.updateMovementsStatus, input);
          };
          FormService.prototype.addOrUpdateMvts = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.addOrUpdateMvts, input);
          };
          FormService.prototype.loadShipmentType = function() {
            return _super.prototype.post.call(this, this.bidtDfTypeApi.findShipmentDfTypes);
          };
          FormService.prototype.findWorkOrderByMvts = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.findWorkOrderByMvts, input);
          };
          FormService.prototype.getOperationCategories = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.getOperationCategories, input);
          };
          FormService.prototype.findShipmentAssociatedMvt = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.findShipmentAssociatedMvt, input);
          };
          /**************************************************************************
           * delivery folder api
           *************************************************************************/
          FormService.prototype.addAssetToShipmentFolder = function(inputList) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.addAssetToShipmentFolder, inputList);
          };
          FormService.prototype.loadStatus = function() {
            return [
              { value: 'Planned', label: 'Planned' },
              { value: 'Waiting', label: 'Waiting' },
              { value: 'Audited', label: 'Audited' },
              { value: 'Completed', label: 'Completed' }
            ];
          };
          FormService.prototype.fetchStockData = function() {
            return {
              site: 'BA118 - Saint-Dizler Robinson',
              warehouse: 'Magasin General',
              inboundLocalisation: 'Stock bon Ests',
              outboundLocalisation: 'Zone Sorte',
              status: 'Planifie',
              date: new Date(),
              startDate: new Date(),
              endDate: new Date(),
              movementType: 'Sample'
            };
          };
          FormService.prototype.fetchStockMovementTableData = function() {
            return [
              {
                mvtStockCode: 'OSM121112',
                pnCode: '1213-12',
                articleDesignation: '### DESIGNATION DU P/N ###',
                sn: 'A1212-10',
                whCategory: 'Bon Etat',
                qty: '11 u',
                sbNumber: 'AD1210',
                finalRecipient: 'BA118',
                finalRecipientWarehouse: 'Magasin General',
                smoStatus: 'Planned',
                stockMvtPlannedDate: '23/11/2019',
                documentNum: 'OTR231233',
                documentDescription: 'Lot de deployement',
                warehouse: 'Magasin General',
                destination: 'BA113- Monte-de-Marsan',
                container: true,
                volume: '4L',
                height: '73cm',
                width: '89cm',
                diameter: '44cm',
                weight: '15kg',
                pnType: 'OAE',
                additionalRemarks: 'Extremement Inflammable'
              },
              {
                mvtStockCode: 'OSM121114',
                pnCode: '1213-13',
                articleDesignation: '### DESIGNATION DU P/N ###',
                sn: 'A1212-11',
                whCategory: 'Magasin General',
                qty: '12 L',
                finalRecipient: 'BA118',
                finalRecipientWarehouse: 'Magasin General',
                sbNumber: 'AD1212',
                smoStatus: 'Audited',
                stockMvtPlannedDate: '23/11/2019',
                documentNum: 'OTR231233',
                documentDescription: 'Lot de deployement',
                warehouse: 'Magasin General',
                destination: 'BA113- Monte-de-Marsan',
                container: true,
                volume: '45L',
                height: '75cm',
                width: '35cm',
                diameter: '35cm',
                weight: '15kg',
                pnType: 'OAE 2',
                additionalRemarks: 'Extremement Volatile'
              },
              {
                mvtStockCode: 'OSM121312',
                pnCode: '11213-12',
                articleDesignation: '### DESIGNATION DU P/N ###',
                sn: 'A4412-10',
                whCategory: 'TEST',
                qty: '2 u',
                finalRecipient: 'BA118',
                finalRecipientWarehouse: 'Magasin General',
                sbNumber: 'AD1219',
                smoStatus: 'Completed',
                stockMvtPlannedDate: '23/11/2019',
                documentNum: 'OTR231233',
                documentDescription: 'Lot de deployement',
                warehouse: 'Magasin General',
                destination: 'BA113- Monte-de-Marsan',
                container: false,
                volume: '45L',
                height: '75cm',
                width: '35cm',
                diameter: '35cm',
                weight: '15kg',
                pnType: 'OAE',
                additionalRemarks: 'Safe'
              },
              {
                mvtStockCode: 'OSM121313',
                pnCode: '18813-12',
                articleDesignation: '### DESIGNATION DU P/N ###',
                sn: 'A1662-10',
                whCategory: 'Magasin',
                qty: '20 L',
                finalRecipient: 'BA118',
                finalRecipientWarehouse: 'Magasin General',
                sbNumber: 'AD1217',
                smoStatus: 'Completed',
                stockMvtPlannedDate: '23/11/2019',
                documentNum: 'OTR231233',
                documentDescription: 'Lot de deployement',
                warehouse: 'Magasin General',
                destination: 'BA113- Monte-de-Marsan',
                container: false,
                volume: '45L',
                height: '75cm',
                width: '35cm',
                diameter: '35cm',
                weight: '15kg',
                pnType: 'OAE',
                additionalRemarks: 'NONE'
              },
              {
                mvtStockCode: 'OSM121314',
                pnCode: '121993-12',
                articleDesignation: '### DESIGNATION DU P/N ###',
                sn: 'A12112-10',
                whCategory: 'Bon Etat',
                qty: '1 u',
                finalRecipient: 'BA118',
                finalRecipientWarehouse: 'Magasin General',
                sbNumber: 'AD12126',
                smoStatus: 'Planned',
                stockMvtPlannedDate: '23/11/2019',
                documentNum: 'OTR231233',
                documentDescription: 'Lot de deployement',
                warehouse: 'Magasin General',
                destination: 'BA113- Monte-de-Marsan',
                container: true,
                volume: '45L',
                height: '75cm',
                width: '35cm',
                diameter: '35cm',
                weight: '15kg',
                pnType: 'OAE',
                additionalRemarks: 'Extremement Inflammable'
              },
              {
                mvtStockCode: 'OSM121315',
                pnCode: '126713-12',
                articleDesignation: '### DESIGNATION DU P/N ###',
                sn: 'A12112-10',
                whCategory: 'Bon Etat',
                qty: '1 u',
                finalRecipient: 'BA118',
                finalRecipientWarehouse: 'Magasin General',
                sbNumber: 'AD1215',
                smoStatus: 'Audited',
                stockMvtPlannedDate: '23/11/2019',
                documentNum: 'OTR231233',
                documentDescription: 'Lot de deployement',
                warehouse: 'Magasin General',
                destination: 'BA113- Monte-de-Marsan',
                container: true,
                volume: '45L',
                height: '75cm',
                width: '35cm',
                diameter: '35cm',
                weight: '15kg',
                pnType: 'OAE',
                additionalRemarks: 'NOT AVAILABLE'
              },
              {
                mvtStockCode: 'OSM121316',
                pnCode: '121883-12',
                articleDesignation: '### DESIGNATION DU P/N ###',
                sn: 'A112212-10',
                whCategory: 'Bon Etat',
                qty: '1 L',
                finalRecipient: 'BA118',
                finalRecipientWarehouse: 'Magasin General',
                sbNumber: 'AD1214',
                smoStatus: 'Planifie',
                stockMvtPlannedDate: '23/11/2019',
                documentNum: 'OTR231233',
                documentDescription: 'Lot de deployement',
                warehouse: 'Magasin General',
                destination: 'BA113- Monte-de-Marsan',
                container: false,
                volume: '45L',
                height: '75cm',
                width: '35cm',
                diameter: '35cm',
                weight: '15kg',
                pnType: 'OAE',
                additionalRemarks: 'Voletile'
              }
            ];
          };
          FormService.prototype.fetchMovementInformation = function() {
            return {
              number: 'OSM485579',
              toRealizeThe: '23/11/2019',
              status: 'Planned',
              docNumber: 'OTR4851984',
              docType: 'Nivillement de Stock',
              docControl: 'Immediate',
              site: 'BA118 - Saint-Dizier Robinson',
              warehouse: 'Magasin General',
              zone: 'Stock Bon Etat',
              emplacement: 'AD982',
              outZone: 'Sortie',
              article: '16541-11',
              articleDesignation: '### DESIGNATION DU P/N ###',
              snOrLot: 'A1012-01',
              qty: '1 unite',
              etat: 'Bon Etat',
              materialType: 'OAE',
              volume: '45L',
              height: '75cm',
              width: '35cm',
              diameter: '35cm',
              weight: '15kg',
              additionalRemarks: 'Extremement Inflammable'
            };
          };
          /**************************************************************************
           * packaging batch api
           *************************************************************************/
          FormService.prototype.addOrUpdateBatch = function(equipmentObject) {
            return _super.prototype.post.call(this, this.bidoEquipmentApi.addOrUpdateBatch, equipmentObject);
          };
          FormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_12__['AppConfigService'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_9__['BidtWarehouseApi'],
                _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_6__['BidtSiteApi'],
                _shared_api_bidt_storage_bin_api__WEBPACK_IMPORTED_MODULE_8__['BidtStorageBinApi'],
                _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_7__['BidtStockMvtApi'],
                _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_2__['AssetManagementApi'],
                _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_5__['BidtDfTypeApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_10__['FleetManagementApi'],
                _shared_api_bidt_delivery_folder_api__WEBPACK_IMPORTED_MODULE_4__['BidtDeliveryFolderApi'],
                _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_3__['BidoEquipmentApi']
              ])
            ],
            FormService
          );
          return FormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_11__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/constants/bidt-storage-bin-type-constants.ts':
      /*!*********************************************************************!*\
  !*** ./src/app/shared/constants/bidt-storage-bin-type-constants.ts ***!
  \*********************************************************************/
      /*! exports provided: BidtStorageBinTypeConstant */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'BidtStorageBinTypeConstant',
          function() {
            return BidtStorageBinTypeConstant;
          }
        );
        var BidtStorageBinTypeConstant = /** @class */ (function() {
          function BidtStorageBinTypeConstant() {}
          BidtStorageBinTypeConstant.RECEIPT = 1;
          BidtStorageBinTypeConstant.SHIPMENT = 2;
          BidtStorageBinTypeConstant.SERVICEABLE = 3;
          BidtStorageBinTypeConstant.UNSERVICEABLE = 4;
          BidtStorageBinTypeConstant.QUARANTINE = 5;
          BidtStorageBinTypeConstant.TO_USE = 6;
          BidtStorageBinTypeConstant.TO_REVERSE = 7;
          BidtStorageBinTypeConstant.UNDER_MAINTENANCE = 8;
          BidtStorageBinTypeConstant.PARKING = 9;
          return BidtStorageBinTypeConstant;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=default~logistics-stock-movements-stock-movements-module~logistics-stock-view-stock-view-module.js.map
