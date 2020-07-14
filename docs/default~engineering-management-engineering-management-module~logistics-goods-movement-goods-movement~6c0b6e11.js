(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~engineering-management-engineering-management-module~logistics-goods-movement-goods-movement~6c0b6e11'],
  {
    /***/ './src/app/main/logistics/logistics.service.ts':
      /*!*****************************************************!*\
  !*** ./src/app/main/logistics/logistics.service.ts ***!
  \*****************************************************/
      /*! exports provided: LogisticsService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LogisticsService', function() {
          return LogisticsService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../shared/api/aircraft-maintenance.api */ './src/app/shared/api/aircraft-maintenance.api.ts'
        );
        /* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../shared/api/am-project-management.api */ './src/app/shared/api/am-project-management.api.ts'
        );
        /* harmony import */ var _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../shared/api/asset-management.api */ './src/app/shared/api/asset-management.api.ts'
        );
        /* harmony import */ var _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../shared/api/bido-equipment.api */ './src/app/shared/api/bido-equipment.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_delivery_folder_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../shared/api/bidt-delivery-folder.api */ './src/app/shared/api/bidt-delivery-folder.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../shared/api/bidt-df-type.api */ './src/app/shared/api/bidt-df-type.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_document_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../shared/api/bidt-document.api */ './src/app/shared/api/bidt-document.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_proc_req_item_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../shared/api/bidt-proc-req-item.api */ './src/app/shared/api/bidt-proc-req-item.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_procurement_request_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../shared/api/bidt-procurement-request.api */ './src/app/shared/api/bidt-procurement-request.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../shared/api/bidt-site.api */ './src/app/shared/api/bidt-site.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_stock_mvt_type_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../shared/api/bidt-stock-mvt-type.api */ './src/app/shared/api/bidt-stock-mvt-type.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../shared/api/bidt-stock-mvt.api */ './src/app/shared/api/bidt-stock-mvt.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_tor_item_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../shared/api/bidt-tor-item.api */ './src/app/shared/api/bidt-tor-item.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_transfer_order_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../shared/api/bidt-transfer-order.api */ './src/app/shared/api/bidt-transfer-order.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_work_center_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../shared/api/bidt-work-center.api */ './src/app/shared/api/bidt-work-center.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
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

        var LogisticsService = /** @class */ (function(_super) {
          __extends(LogisticsService, _super);
          function LogisticsService(
            http,
            appConfigService,
            bidtWorkCenterApi,
            aircraftMaintenanceApi,
            amProjectManagementApi,
            bidtDeliveryFolderApi,
            bidtTransferOrderApi,
            bidtDfTypeApi,
            bidtProcReqItemApi,
            bidtProcurementRequestApi,
            bidtStockMvtApi,
            bidtStockMvtTypeApi,
            productStructureManagementApi,
            bidtWarehouseApi,
            bidtSiteApi,
            fleetManagementApi,
            bidtDocumentApi,
            assetManagementApi,
            bidoEquipmentApi,
            bidtTorItemApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtWorkCenterApi = bidtWorkCenterApi;
            _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
            _this.amProjectManagementApi = amProjectManagementApi;
            _this.bidtDeliveryFolderApi = bidtDeliveryFolderApi;
            _this.bidtTransferOrderApi = bidtTransferOrderApi;
            _this.bidtDfTypeApi = bidtDfTypeApi;
            _this.bidtProcReqItemApi = bidtProcReqItemApi;
            _this.bidtProcurementRequestApi = bidtProcurementRequestApi;
            _this.bidtStockMvtApi = bidtStockMvtApi;
            _this.bidtStockMvtTypeApi = bidtStockMvtTypeApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            _this.bidtSiteApi = bidtSiteApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.bidtDocumentApi = bidtDocumentApi;
            _this.assetManagementApi = assetManagementApi;
            _this.bidoEquipmentApi = bidoEquipmentApi;
            _this.bidtTorItemApi = bidtTorItemApi;
            return _this;
          }
          /**************************************************************************
           * Bidt work center api
           *************************************************************************/
          LogisticsService.prototype.findWorkCenterById = function(input) {
            return _super.prototype.post.call(this, this.bidtWorkCenterApi.getById, input);
          };
          /**************************************************************************
           * Aircraft maintenance api
           *************************************************************************/
          LogisticsService.prototype.createProcurementRequestFromWorkOrder = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.createProcurementRequest, input);
          };
          /**************************************************************************
           * AM project management api
           *************************************************************************/
          LogisticsService.prototype.findWorkPackage = function(input) {
            return _super.prototype.post.call(this, this.amProjectManagementApi.findBidmProject, input);
          };
          /**************************************************************************
           * Fleet management  api
           *************************************************************************/
          LogisticsService.prototype.findEquipment = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, input);
          };
          /**************************************************************************
           * Bidt transfer order api
           *************************************************************************/
          LogisticsService.prototype.createTransferOrder = function(input) {
            return _super.prototype.post.call(this, this.bidtTransferOrderApi.create, input);
          };
          LogisticsService.prototype.addOrUpdateTransferOrder = function(input) {
            return _super.prototype.post.call(this, this.bidtTransferOrderApi.addOrUpdateTransferOrder, input);
          };
          LogisticsService.prototype.findTransferOrdersByCriteria = function(input) {
            return _super.prototype.post.call(this, this.bidtTransferOrderApi.findTransferOrdersByCriteria, input);
          };
          LogisticsService.prototype.findTransferOrdersById = function(input) {
            return _super.prototype.post.call(this, this.bidtTransferOrderApi.findTransferOrderById, input);
          };
          LogisticsService.prototype.searchWarehouseCandidateAssetsByTorItem = function(input) {
            return _super.prototype.post.call(this, this.bidtTransferOrderApi.searchWarehouseCandidateAssets, input);
          };
          LogisticsService.prototype.searchGlobalCandidateAssetsByTorItem = function(input) {
            return _super.prototype.post.call(this, this.bidtTransferOrderApi.searchGlobalCandidateAssets, input);
          };
          LogisticsService.prototype.searchLocalCandidateAssetsByTorItem = function(input) {
            return _super.prototype.post.call(this, this.bidtTransferOrderApi.searchLocalCandidateAssets, input);
          };
          LogisticsService.prototype.bookCandidateAssetByTorItem = function(input) {
            return _super.prototype.post.call(this, this.bidtTransferOrderApi.bookCandidateAsset, input);
          };
          LogisticsService.prototype.cancelBookedAssetByTorItem = function(input) {
            return _super.prototype.post.call(this, this.bidtTransferOrderApi.cancelBookedAsset, input);
          };
          LogisticsService.prototype.isAssetBookedByTorItem = function(input) {
            return _super.prototype.post.call(this, this.bidtTransferOrderApi.isAssetBooked, input);
          };
          LogisticsService.prototype.preemptCandidateAssetByTorItem = function(input) {
            return _super.prototype.post.call(this, this.bidtTransferOrderApi.preemptCandidateAsset, input);
          };
          /**************************************************************************
           * Bidt transfer order api
           *************************************************************************/
          LogisticsService.prototype.createTransferOrderTorIem = function(input) {
            return _super.prototype.post.call(this, this.bidtTorItemApi.createTranferOrderTorItem, input);
          };
          /**************************************************************************
           * Bidt delivery folder api
           *************************************************************************/
          LogisticsService.prototype.addOrUpdateReceiptFolder = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.addOrUpdateReceiptFolder, input);
          };
          LogisticsService.prototype.addOrUpdateShipmentFolder = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.addOrUpdateShipmentFolder, input);
          };
          LogisticsService.prototype.addReceiptItem = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.addReceiptItem, input);
          };
          LogisticsService.prototype.addReceiptMaterialList = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.addReceiptMaterialList, input);
          };
          LogisticsService.prototype.addReceiptPackage = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.addReceiptPackage, input);
          };
          LogisticsService.prototype.findShipmentFolderWithAllObjectsById = function(input) {
            return _super.prototype.post.call(
              this,
              this.bidtDeliveryFolderApi.findShipmentFolderWithAllObjectsById,
              input
            );
          };
          LogisticsService.prototype.cancelItemOperations = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.cancelItemOperations, input);
          };
          LogisticsService.prototype.cancelPackageOperations = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.cancelPackageOperations, input);
          };
          LogisticsService.prototype.cancelStockMovementOperations = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.cancelStockMovementOperations, input);
          };
          LogisticsService.prototype.deleteDeliveryFolder = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.deleteDeliveryFolder, input);
          };
          LogisticsService.prototype.deleteReceiptItem = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.deleteReceiptItem, input);
          };
          LogisticsService.prototype.deleteShipmentItem = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.deleteShipmentItem, input);
          };
          LogisticsService.prototype.deleteReceiptMaterial = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.deleteReceiptMaterial, input);
          };
          LogisticsService.prototype.deleteReceiptPackage = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.deleteReceiptPackage, input);
          };
          LogisticsService.prototype.findDeliveryFoldersByCriteria = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.findDeliveryFoldersByCriteria, input);
          };
          LogisticsService.prototype.findDeliveryFoldersByPackageCode = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.findByPackageCode, input);
          };
          LogisticsService.prototype.findReceiptFolderByPackageCode = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.findReceiptFolderByPackageCode, input);
          };
          LogisticsService.prototype.findReceiptFolderWithAllObjectsById = function(input) {
            return _super.prototype.post.call(
              this,
              this.bidtDeliveryFolderApi.findReceiptFolderWithAllObjectsById,
              input
            );
          };
          LogisticsService.prototype.performItemOperations = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.performItemOperations, input);
          };
          LogisticsService.prototype.performPackageOperations = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.performPackageOperations, input);
          };
          LogisticsService.prototype.performStockMovementOperations = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.performStockMovementOperations, input);
          };
          LogisticsService.prototype.putInLitigationItemOperations = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.putInLitigationItemOperations, input);
          };
          LogisticsService.prototype.putInLitigationPackageOperations = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.putInLitigationPackageOperations, input);
          };
          LogisticsService.prototype.putInLitigationStockMovementOperations = function(input) {
            return _super.prototype.post.call(
              this,
              this.bidtDeliveryFolderApi.putInLitigationStockMovementOperations,
              input
            );
          };
          LogisticsService.prototype.fetchLengthUnitMap = function() {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.fetchLengthUnitMap);
          };
          LogisticsService.prototype.fetchWeightUnitMap = function() {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.fetchWeightUnitMap);
          };
          /**************************************************************************
           * Bidt delivery folder type api
           *************************************************************************/
          LogisticsService.prototype.addOrUpdateDeliveryFolderType = function(input) {
            return _super.prototype.post.call(this, this.bidtDfTypeApi.addOrUpdate, input);
          };
          LogisticsService.prototype.deleteDeliveryFolerType = function(input) {
            return _super.prototype.post.call(this, this.bidtDfTypeApi.delete, input);
          };
          LogisticsService.prototype.findReceiptDfTypes = function() {
            return _super.prototype.post.call(this, this.bidtDfTypeApi.findReceiptDfTypes);
          };
          LogisticsService.prototype.findReceiptDfTypeById = function(input) {
            return _super.prototype.post.call(this, this.bidtDfTypeApi.findReceiptDfTypeById, input);
          };
          LogisticsService.prototype.findShipmentDfTypes = function() {
            return _super.prototype.post.call(this, this.bidtDfTypeApi.findShipmentDfTypes);
          };
          LogisticsService.prototype.findShipmentDfTypeById = function(input) {
            return _super.prototype.post.call(this, this.bidtDfTypeApi.findShipmentDfTypeById, input);
          };
          LogisticsService.prototype.findAllBidoCustomer = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAllBidoCustomer);
          };
          /**************************************************************************
           * Bidt proc req item api
           *************************************************************************/
          LogisticsService.prototype.deleteProcurementRequestItem = function(input) {
            return _super.prototype.post.call(this, this.bidtProcReqItemApi.delete, input);
          };
          /**************************************************************************
           * Bidt procurement request api
           *************************************************************************/
          LogisticsService.prototype.updateProcurementRequestReceiver = function(input) {
            return _super.prototype.post.call(
              this,
              this.bidtProcurementRequestApi.updateProcurementRequestReceiver,
              input
            );
          };
          LogisticsService.prototype.duplicateProcurementRequest = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.duplicate, input);
          };
          LogisticsService.prototype.updateProcurementRequestItemQuantity = function(input) {
            return _super.prototype.post.call(
              this,
              this.bidtProcurementRequestApi.updateProcurementRequestItemQuantity,
              input
            );
          };
          LogisticsService.prototype.checkQuantityConsistency = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.checkQuantityConsistency, input);
          };
          LogisticsService.prototype.createProcurementRequest = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.createProcurementRequest, input);
          };
          LogisticsService.prototype.addMaterial = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.addMaterial, input);
          };
          LogisticsService.prototype.addOrUpdateProcurementRequest = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.addOrUpdate, input);
          };
          LogisticsService.prototype.addOrUpdateItem = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.addOrUpdateItem, input);
          };
          LogisticsService.prototype.bookCandidateAsset = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.bookCandidateAsset, input);
          };
          LogisticsService.prototype.preemptCandidateAsset = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.preemptCandidateAsset, input);
          };
          LogisticsService.prototype.cancelBookedAsset = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.cancelBookedAsset, input);
          };
          LogisticsService.prototype.isAssetBooked = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.isAssetBooked, input);
          };
          LogisticsService.prototype.cannibalizeAsset = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.cannibalizeAsset, input);
          };
          LogisticsService.prototype.createProcurementRequestItem = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.createProcurementRequestItem, input);
          };
          LogisticsService.prototype.cancelProcurementRequest = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.cancel, input);
          };
          LogisticsService.prototype.deleteProcurementRequest = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.delete, input);
          };
          LogisticsService.prototype.findProcurementRequestsByCriteria = function(input) {
            return _super.prototype.post.call(
              this,
              this.bidtProcurementRequestApi.findProcurementRequestsByCriteria,
              input
            );
          };
          LogisticsService.prototype.findProcurementRequestsByWoId = function(input) {
            return _super.prototype.post.call(
              this,
              this.bidtProcurementRequestApi.findProcurementRequestsByWoId,
              input
            );
          };
          LogisticsService.prototype.findProcurementRequestByIdWithAllObjects = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.findWithAllObjectsById, input.id);
          };
          LogisticsService.prototype.searchCandidateAssetsForCannibalism = function(input) {
            return _super.prototype.post.call(
              this,
              this.bidtProcurementRequestApi.searchCandidateAssetsForCannibalism,
              input
            );
          };
          LogisticsService.prototype.searchGlobalCandidateAssets = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.searchGlobalCandidateAssets, input);
          };
          LogisticsService.prototype.searchLocalCandidateAssets = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.searchLocalCandidateAssets, input);
          };
          LogisticsService.prototype.searchWarehouseCandidateAssets = function(input) {
            return _super.prototype.post.call(
              this,
              this.bidtProcurementRequestApi.searchWarehouseCandidateAssets,
              input
            );
          };
          LogisticsService.prototype.calculateRemainingQuantity = function(input) {
            return _super.prototype.post.call(this, this.bidtProcurementRequestApi.calculateRemainingQuantity, input);
          };
          /**************************************************************************
           * Bidt stock movement api
           *************************************************************************/
          LogisticsService.prototype.cancelStockMvtPending = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.cancelStockMvtPending, input);
          };
          LogisticsService.prototype.deleteMaterial = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.deleteMaterial, input);
          };
          LogisticsService.prototype.findStockMvtsByCriteria = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.findByCriteria, input);
          };
          LogisticsService.prototype.findStockMvtStory = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.findStockMvtStory, input);
          };
          LogisticsService.prototype.findStockMvtStoryFromFirstStockMvt = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.findStockMvtStoryFromFirstStockMvt, input);
          };
          LogisticsService.prototype.putStockMvtPending = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.putStockMvtPending, input);
          };
          LogisticsService.prototype.updateStockMvtStatus = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.updateStatus, input);
          };
          /**************************************************************************
           * Bidt stock movement type api
           *************************************************************************/
          LogisticsService.prototype.addOrUpdateStockMovementType = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtTypeApi.addOrUpdate, input);
          };
          LogisticsService.prototype.deleteStockMovementType = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtTypeApi.delete, input);
          };
          LogisticsService.prototype.findStockMvtTypes = function() {
            return _super.prototype.post.call(this, this.bidtStockMvtTypeApi.findAll);
          };
          LogisticsService.prototype.findStockMvtTypeById = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtTypeApi.findStockMvtTypeById, input);
          };
          LogisticsService.prototype.findBidtStockMvtForm = function(criteria) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.findBidtStockMvtForm, criteria);
          };
          /**************************************************************************
           * Product structure management api
           *************************************************************************/
          LogisticsService.prototype.findBidoCounterReferencesByPnCode = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBidoCounterReferencesByPnCode,
              input
            );
          };
          LogisticsService.prototype.findBirePnMeasuresByPnCode = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBirePnMeasuresByPnCode,
              input
            );
          };
          LogisticsService.prototype.findCounterByAsset = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findCounterByAsset, input);
          };
          LogisticsService.prototype.findBireVersionPnsByFamilyAndVariantAndPnCode = function(input) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagementApi.findBireVersionPnsByFamilyAndVariantAndPnCode,
              input
            );
          };
          /**************************************************************************
           * AM project management api
           *************************************************************************/
          LogisticsService.prototype.removeBidmProject = function(input) {
            return _super.prototype.post.call(this, this.amProjectManagementApi.removeBidmProject, input);
          };
          /**************************************************************************
           * AM project management api
           *************************************************************************/
          LogisticsService.prototype.findShipmentMaterial = function(input) {
            return _super.prototype.post.call(this, this.bidtDeliveryFolderApi.findShipmentMaterial, input);
          };
          /**************************************************************************
           * Bidt warehouse api
           *************************************************************************/
          LogisticsService.prototype.getWarehouseById = function(id) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.getById, id);
          };
          LogisticsService.prototype.getWarehousesBySiteId = function(siteId) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findBySiteId, siteId);
          };
          LogisticsService.prototype.findWarehousesByCriteria = function(siteId) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.findByCriteria, siteId);
          };
          /**************************************************************************
           * Bidt site api
           *************************************************************************/
          LogisticsService.prototype.findAllBireSite = function() {
            return _super.prototype.post.call(this, this.bidtSiteApi.findAll);
          };
          LogisticsService.prototype.getSiteById = function(input) {
            return _super.prototype.post.call(this, this.bidtSiteApi.getById, input);
          };
          /**************************************************************************
           * Bido equipment api
           *************************************************************************/
          LogisticsService.prototype.addOrUpdateBatch = function(input) {
            return _super.prototype.post.call(this, this.bidoEquipmentApi.addOrUpdateBatch, input);
          };
          LogisticsService.prototype.findDocumentByDeliveryFolderId = function(deliveryFolderId) {
            return _super.prototype.post.call(this, this.bidtDocumentApi.findByDeliveryFolderId, deliveryFolderId);
          };
          /**************************************************************************
           * Asset Managment equipment api
           *************************************************************************/
          LogisticsService.prototype.updateAsset = function(assetOutputDto) {
            return _super.prototype.post.call(this, this.assetManagementApi.updateAsset, assetOutputDto);
          };
          LogisticsService.prototype.createBidoNotification = function(bidoNotificationDTO) {
            return _super.prototype.post.call(
              this,
              this.assetManagementApi.createBidoNotification,
              bidoNotificationDTO
            );
          };
          LogisticsService.prototype.findEquipmentByPnAndBatchNumber = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentByPnAndBatchNumber, input);
          };
          LogisticsService.prototype.findEquipmentByPnAndSn = function(input) {
            return _super.prototype.post.call(
              this,
              this.fleetManagementApi.findFirstBidoEquipmentsByPnAndSnCodes,
              input
            );
          };
          LogisticsService.prototype.findBidoEquipmentCounter = function(input) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipmentCounter, input);
          };
          LogisticsService.prototype.findBirePn = function(input) {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findBirePn, input);
          };
          LogisticsService.prototype.findTransferOrdersByRemoval = function(input) {
            return _super.prototype.post.call(this, this.bidtTransferOrderApi.findByRemoval, input);
          };
          LogisticsService.prototype.cancelTransferOrder = function(input) {
            return _super.prototype.post.call(this, this.bidtTransferOrderApi.cancelTransferOrder, input);
          };
          LogisticsService.prototype.updateTorItemQuantity = function(input) {
            return _super.prototype.post.call(this, this.bidtTransferOrderApi.updateTorItemQuantity, input);
          };
          LogisticsService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
                providedIn: 'root'
              }),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_21__['AppConfigService'],
                _shared_api_bidt_work_center_api__WEBPACK_IMPORTED_MODULE_17__['BidtWorkCenterApi'],
                _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_2__['AircraftMaintenanceApi'],
                _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_3__['AMProjectManagementApi'],
                _shared_api_bidt_delivery_folder_api__WEBPACK_IMPORTED_MODULE_6__['BidtDeliveryFolderApi'],
                _shared_api_bidt_transfer_order_api__WEBPACK_IMPORTED_MODULE_15__['BidtTransferOrderApi'],
                _shared_api_bidt_df_type_api__WEBPACK_IMPORTED_MODULE_7__['BidtDfTypeApi'],
                _shared_api_bidt_proc_req_item_api__WEBPACK_IMPORTED_MODULE_9__['BidtProcReqItemApi'],
                _shared_api_bidt_procurement_request_api__WEBPACK_IMPORTED_MODULE_10__['BidtProcurementRequestApi'],
                _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_13__['BidtStockMvtApi'],
                _shared_api_bidt_stock_mvt_type_api__WEBPACK_IMPORTED_MODULE_12__['BidtStockMvtTypeApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_19__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_16__['BidtWarehouseApi'],
                _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_11__['BidtSiteApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_18__['FleetManagementApi'],
                _shared_api_bidt_document_api__WEBPACK_IMPORTED_MODULE_8__['BidtDocumentApi'],
                _shared_api_asset_management_api__WEBPACK_IMPORTED_MODULE_4__['AssetManagementApi'],
                _shared_api_bido_equipment_api__WEBPACK_IMPORTED_MODULE_5__['BidoEquipmentApi'],
                _shared_api_bidt_tor_item_api__WEBPACK_IMPORTED_MODULE_14__['BidtTorItemApi']
              ])
            ],
            LogisticsService
          );
          return LogisticsService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_20__['AbstractAwHttpService']);

        /***/
      }
  }
]);
//# sourceMappingURL=default~engineering-management-engineering-management-module~logistics-goods-movement-goods-movement~6c0b6e11.js.map
