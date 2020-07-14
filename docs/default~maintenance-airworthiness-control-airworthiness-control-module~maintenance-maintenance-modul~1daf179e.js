(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~maintenance-airworthiness-control-airworthiness-control-module~maintenance-maintenance-modul~1daf179e'],
  {
    /***/ './src/app/main/maintenance/work-order/form/work-order-form.service.ts':
      /*!*****************************************************************************!*\
  !*** ./src/app/main/maintenance/work-order/form/work-order-form.service.ts ***!
  \*****************************************************************************/
      /*! exports provided: WorkOrderFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'WorkOrderFormService', function() {
          return WorkOrderFormService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/aircraft-maintenance.api */ './src/app/shared/api/aircraft-maintenance.api.ts'
        );
        /* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/airworthiness-management.api */ './src/app/shared/api/airworthiness-management.api.ts'
        );
        /* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/api/am-project-management.api */ './src/app/shared/api/am-project-management.api.ts'
        );
        /* harmony import */ var _shared_api_bidm_wo_assignment_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/api/bidm-wo-assignment.api */ './src/app/shared/api/bidm-wo-assignment.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-employee.api */ './src/app/shared/api/bidt-employee.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-site.api */ './src/app/shared/api/bidt-site.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-stock-mvt.api */ './src/app/shared/api/bidt-stock-mvt.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_work_center_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-work-center.api */ './src/app/shared/api/bidt-work-center.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-business.api */ './src/app/shared/api/fleet-business.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_operation_history_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../../shared/api/operation-history.api */ './src/app/shared/api/operation-history.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../../shared/api/task-management.api */ './src/app/shared/api/task-management.api.ts'
        );
        /* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../../shared/api/user-profile-management.api */ './src/app/shared/api/user-profile-management.api.ts'
        );
        /* harmony import */ var _shared_api_wo_asset_management_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../../shared/api/wo-asset-management.api */ './src/app/shared/api/wo-asset-management.api.ts'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ../../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ../../../../shared/utils/array-utils */ './src/app/shared/utils/array-utils.ts'
        );
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ../../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
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

        var WorkOrderFormService = /** @class */ (function(_super) {
          __extends(WorkOrderFormService, _super);
          function WorkOrderFormService(
            http,
            appConfigService,
            aircraftMaintenanceApi,
            airworthinessManagementApi,
            propertiesService,
            userProfileManagementApi,
            fleetBusinessApi,
            bidtEmployeeApi,
            bidtStockMvtApi,
            productStructureManagementApi,
            taskManagementApi,
            fleetManagementApi,
            amProjectManagementApi,
            bidtWorkCenterApi,
            bidtWarehouseApi,
            bidmWoAssignmentApi,
            woAssetManagementApi,
            operationHistoryApi,
            bidtSiteApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
            _this.airworthinessManagementApi = airworthinessManagementApi;
            _this.propertiesService = propertiesService;
            _this.userProfileManagementApi = userProfileManagementApi;
            _this.fleetBusinessApi = fleetBusinessApi;
            _this.bidtEmployeeApi = bidtEmployeeApi;
            _this.bidtStockMvtApi = bidtStockMvtApi;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.taskManagementApi = taskManagementApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.amProjectManagementApi = amProjectManagementApi;
            _this.bidtWorkCenterApi = bidtWorkCenterApi;
            _this.bidtWarehouseApi = bidtWarehouseApi;
            _this.bidmWoAssignmentApi = bidmWoAssignmentApi;
            _this.woAssetManagementApi = woAssetManagementApi;
            _this.operationHistoryApi = operationHistoryApi;
            _this.bidtSiteApi = bidtSiteApi;
            _this._woTypeList = new rxjs__WEBPACK_IMPORTED_MODULE_2__['BehaviorSubject']([]);
            _this.woTypeList$ = _this._woTypeList.asObservable();
            _this._userList = new rxjs__WEBPACK_IMPORTED_MODULE_2__['BehaviorSubject']([]);
            _this.userList$ = _this._userList.asObservable();
            _this._woStatusList = new rxjs__WEBPACK_IMPORTED_MODULE_2__['BehaviorSubject']([]);
            _this.woStatusList$ = _this._woStatusList.asObservable();
            return _this;
          }
          WorkOrderFormService.prototype.findAuthorizedBireSite = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAuthorizedBireSite);
          };
          WorkOrderFormService.prototype.loadGenProps = function(key) {
            return this.propertiesService.getValue(key).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(results) {
                return !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_26__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
              })
            );
          };
          WorkOrderFormService.prototype.loadUserList = function(projectId) {
            return this.findUsersForWorkOrder(projectId).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(results) {
                return !!results
                  ? results
                      .map(function(user) {
                        return {
                          label: user.firstname + ' ' + user.lastname,
                          value: user.userId
                        };
                      })
                      .sort(
                        _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_25__['ArrayUtils'].compareValues('label')
                      )
                  : [];
              })
            );
          };
          WorkOrderFormService.prototype.findUsersForWorkOrder = function(projectId) {
            var param = {
              useCaseCode:
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_20__[
                  'BidoFunctionTypeConstants'
                ].UC_AIRM_EXECUTION,
              projectId: projectId
            };
            return this.findUsersWithUseCaseForWorkOrder(param);
          };
          WorkOrderFormService.prototype.findUsersWithUseCaseForWorkOrder = function(input) {
            return _super.prototype.post.call(
              this,
              this.userProfileManagementApi.findUsersWithUseCaseForWorkOrder,
              input
            );
          };
          WorkOrderFormService.prototype.findUsers = function() {
            return this.findUsersWithUseCase().pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(results) {
                return !!results
                  ? results
                      .map(function(user) {
                        return {
                          label: user.firstname + ' ' + user.lastname,
                          value: user.userId
                        };
                      })
                      .sort(
                        _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_25__['ArrayUtils'].compareValues('label')
                      )
                  : [];
              })
            );
          };
          WorkOrderFormService.prototype.loadMROCenterList = function() {
            return this.findAuthorizedBireSite().pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(results) {
                var mroCenterList = !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_26__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
                return mroCenterList.map(function(mro) {
                  mro.label = mro.label ? mro.label + ' (' + mro.value + ')' : mro.value;
                  return mro;
                });
              })
            );
          };
          /***********************************
     Aircraft maintenace api
    ***********************************/
          WorkOrderFormService.prototype.findBidmWorkOrder = function(bidmWorkOrderDTOId) {
            var _this = this;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])({
              woTypeList: this.loadGenProps(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_21__['GenericPropertyConstants']
                  .AIRM_WORK_ORDER_TYPES_MAP
              ),
              woStatusList: this.loadGenProps(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_21__['GenericPropertyConstants']
                  .AIRM_OPERATION_STATUS_MAP
              ),
              userList: this.loadUserList(bidmWorkOrderDTOId.projectId)
            }).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['mergeMap'])(function(_a) {
                var woTypeList = _a.woTypeList,
                  woStatusList = _a.woStatusList,
                  userList = _a.userList;
                _this._woTypeList.next(woTypeList);
                _this._woStatusList.next(woStatusList);
                _this._userList.next(userList);
                return _super.prototype.post
                  .call(_this, _this.aircraftMaintenanceApi.findBidmWorkOrderData, bidmWorkOrderDTOId)
                  .pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(res) {
                      return res;
                    })
                  );
              })
            );
          };
          WorkOrderFormService.prototype.updateWorkOrder = function(param) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.updateBidmWorkOrder, param).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(res) {
                return res;
              })
            );
          };
          WorkOrderFormService.prototype.setWoToBeConfirmed = function(param) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.setWoToBeConfirmed, param).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(res) {
                return res;
              })
            );
          };
          WorkOrderFormService.prototype.unsetWoToBeConfirmed = function(param) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.unsetWoToBeConfirmed, param).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(res) {
                return res;
              })
            );
          };
          WorkOrderFormService.prototype.calculatePerfWorkOrderDuration = function(woId) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.calculatePerfWorkOrderDuration, woId);
          };
          WorkOrderFormService.prototype.findBidmDocumentsByWorkOrder = function(woId) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmDocumentsByWorkOrder, woId);
          };
          WorkOrderFormService.prototype.updateBidmOperation = function(operation) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.updateBidmOperation, operation);
          };
          WorkOrderFormService.prototype.getProgressFromOperationStatus = function(operation) {
            return _super.prototype.post.call(
              this,
              this.aircraftMaintenanceApi.getProgressFromOperationStatus,
              operation
            );
          };
          WorkOrderFormService.prototype.calculateWorkOrderStatus = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.calculateWorkOrderStatus, input);
          };
          WorkOrderFormService.prototype.calculateAndUpdateBidmWorkOrderStatus = function(input) {
            return _super.prototype.post.call(
              this,
              this.aircraftMaintenanceApi.calculateAndUpdateBidmWorkOrderStatus,
              input
            );
          };
          WorkOrderFormService.prototype.openBidmWorkOrder = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.openBidmWorkOrder, input);
          };
          WorkOrderFormService.prototype.fetchBidmTimeTrackings = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.fetchBidmTimeTrackings, input);
          };
          WorkOrderFormService.prototype.saveBidmTimeTracking = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.saveBidmTimeTracking, input);
          };
          WorkOrderFormService.prototype.removeBidmTimeTracking = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.removeBidmTimeTracking, input);
          };
          WorkOrderFormService.prototype.findWorkOrderAttributes = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmWoAttributesByWorkOrder, input);
          };
          WorkOrderFormService.prototype.updateMaintenancePlanFromWorkOrder = function(bidmWorkOrderDTO) {
            return _super.prototype.post.call(
              this,
              this.aircraftMaintenanceApi.updateMaintenancePlanFromWorkOrder,
              bidmWorkOrderDTO
            );
          };
          WorkOrderFormService.prototype.updateLogbookFromWorkOrderInput = function(updateLogbookFromWorkOrderInput) {
            return _super.prototype.post.call(
              this,
              this.aircraftMaintenanceApi.updateLogbookFromWorkOrderInput,
              updateLogbookFromWorkOrderInput
            );
          };
          WorkOrderFormService.prototype.initializeUpdateLogbookFromWorkOrderInput = function(bidmWorkOrderDTO) {
            return _super.prototype.post.call(
              this,
              this.aircraftMaintenanceApi.initializeUpdateLogbookFromWorkOrderInput,
              bidmWorkOrderDTO
            );
          };
          WorkOrderFormService.prototype.deleteLogbookNotificationFromWorkOrder = function(bidmWorkOrderDTOId) {
            return _super.prototype.post.call(
              this,
              this.aircraftMaintenanceApi.deleteLogbookNotificationFromWorkOrder,
              bidmWorkOrderDTOId
            );
          };
          /***********************************
     user profile api
    ***********************************/
          WorkOrderFormService.prototype.findUsersWithUseCase = function() {
            return _super.prototype.post.call(
              this,
              this.userProfileManagementApi.findBidoUsersWithUseCase,
              _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_20__['BidoFunctionTypeConstants']
                .UC_AIRM_RECEPTION
            );
          };
          WorkOrderFormService.prototype.findUserById = function(userId) {
            return _super.prototype.post.call(this, this.userProfileManagementApi.findUser, userId);
          };
          WorkOrderFormService.prototype.findBidoUserByLogin = function(login) {
            return _super.prototype.post.call(this, this.userProfileManagementApi.findUserByLogin, login);
          };
          /***********************************
     fleet business api
    ***********************************/
          WorkOrderFormService.prototype.controlConfiguration = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.controlConfiguration, input);
          };
          WorkOrderFormService.prototype.findDefectEventsByEquipmentCode = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.findDefectEventsByEquipmentCode, input);
          };
          WorkOrderFormService.prototype.createWorkPostponementRequest = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.createWorkPostponementRequest, input);
          };
          WorkOrderFormService.prototype.cancelWorkPostponementRequest = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.cancelWorkPostponementRequest, input);
          };
          /***********************************
     employee api
    ***********************************/
          WorkOrderFormService.prototype.getEmployeeById = function(id) {
            return _super.prototype.post.call(this, this.bidtEmployeeApi.getById, id);
          };
          /***********************************
     Task managment api
    ***********************************/
          WorkOrderFormService.prototype.findBireTask = function(taskId) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireTask, taskId);
          };
          WorkOrderFormService.prototype.findBireDocTaskByTask = function(taskId) {
            return _super.prototype.post.call(this, this.taskManagementApi.findBireDocumentsByTask, taskId);
          };
          /***********************************
     Fleet management api
    ***********************************/
          WorkOrderFormService.prototype.findBidoEquipment = function(equipmentId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, equipmentId);
          };
          WorkOrderFormService.prototype.generateJobcard = function(bidmWorkOrderDTOId) {
            return _super.prototype.post.call(this, this.amProjectManagementApi.generateJobcard, bidmWorkOrderDTOId);
          };
          WorkOrderFormService.prototype.findBidoNotification = function(notificationId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoNotification, notificationId);
          };
          /**************************************************************************
           * Airworthiness management api
           *************************************************************************/
          WorkOrderFormService.prototype.findWorkOrderOriginDetails = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.findWorkOrderOriginDetails, input);
          };
          /**************************************************************************
           * Bidt Stock api
           *************************************************************************/
          WorkOrderFormService.prototype.controlStock = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.controlStock, input);
          };
          WorkOrderFormService.prototype.getRequestDetailList = function() {
            return [
              {
                procurementRequest: 'MR4000992',
                procurementRequestDescription: 'Nivelment store',
                referenceDocument: '',
                referenceDocumentDesc: '',
                recepient: 'BA118-MDM',
                recepientDesc: 'Magasin',
                materials: '###0055215-2154###',
                materialsDesc: 'Lot de Deploiement',
                quantity: '3',
                status: 'En course',
                statusDesc: '19/08/2019',
                expectedOn: '23/08/2019',
                criticity: 'Urgent'
              },
              {
                procurementRequest: 'MR4001831',
                procurementRequestDescription: 'Da order de Travel',
                referenceDocument: 'WO400992',
                referenceDocumentDesc: 'Order de Travel',
                recepient: 'BA118-MDM',
                recepientDesc: 'Atelier 2',
                materials: '',
                materialsDesc: '2 Postes',
                quantity: '2',
                status: 'Planifie',
                statusDesc: '19/08/2019',
                expectedOn: '23/08/2019',
                criticity: 'Immediate'
              },
              {
                procurementRequest: 'MR400671',
                procurementRequestDescription: 'Da order de Travel',
                referenceDocument: 'WO400321',
                referenceDocumentDesc: 'Order de Travel',
                recepient: 'BA118-MDM',
                recepientDesc: 'Magasin',
                materials: '###0055215-2154###',
                materialsDesc: 'DESIGNATION DU PIN',
                quantity: '1',
                status: 'Realise',
                statusDesc: '19/08/2019',
                expectedOn: '23/08/2019',
                criticity: 'Routine'
              }
            ];
          };
          /***********************************
     Work Center api
    ***********************************/
          WorkOrderFormService.prototype.getWorkCenterById = function(id) {
            return _super.prototype.post.call(this, this.bidtWorkCenterApi.getById, id);
          };
          /***********************************
     Warehouse api
    ***********************************/
          WorkOrderFormService.prototype.getWarehouseById = function(id) {
            return _super.prototype.post.call(this, this.bidtWarehouseApi.getById, id);
          };
          /***********************************
     Work Order assignment api
    ***********************************/
          WorkOrderFormService.prototype.findBidmWoAssignmentsByWorkOrder = function(workOrderId) {
            return _super.prototype.post.call(
              this,
              this.bidmWoAssignmentApi.findBidmWoAssignmentsByWorkOrder,
              workOrderId
            );
          };
          WorkOrderFormService.prototype.createBidmWoAssignment = function(woAssignment) {
            return _super.prototype.post.call(this, this.bidmWoAssignmentApi.createBidmWoAssignment, woAssignment);
          };
          // public updateBidmWoAssignment(woAssignment: BidmWoAssignmentDTO): Observable<void> {
          //   return super.post<BidmWoAssignmentDTO, void>(this.bidmWoAssignmentApi.updateBidmWoAssignment, woAssignment);
          // }
          WorkOrderFormService.prototype.updateBidmWoAssignment = function(woAssignment) {
            return _super.prototype.post.call(this, this.bidmWoAssignmentApi.updateBidmWoAssignment, woAssignment);
          };
          WorkOrderFormService.prototype.removeBidmWoAssignment = function(input) {
            return _super.prototype.post.call(this, this.bidmWoAssignmentApi.removeBidmWoAssignment, input);
          };
          /**************************************************************************
           * WoAsset management api
           *************************************************************************/
          WorkOrderFormService.prototype.getByWorkOrder = function(input) {
            return _super.prototype.post.call(this, this.woAssetManagementApi.getByWorkOrder, input);
          };
          WorkOrderFormService.prototype.addWoAssetManagementToWo = function(input) {
            return _super.prototype.post.call(this, this.woAssetManagementApi.addToWorkOrder, input);
          };
          WorkOrderFormService.prototype.woAssetManagementUpdateDecision = function(input) {
            return _super.prototype.post.call(this, this.woAssetManagementApi.updateDecision, input);
          };
          WorkOrderFormService.prototype.woAssetManagementUpdateSuperiorAsset = function(input) {
            return _super.prototype.post.call(this, this.woAssetManagementApi.updateSuperiorAsset, input);
          };
          WorkOrderFormService.prototype.woAssetManagementUpdateItemOrFunctionCode = function(input) {
            return _super.prototype.post.call(this, this.woAssetManagementApi.updateItemOrFunctionCode, input);
          };
          WorkOrderFormService.prototype.woAssetManagementUpdatePn = function(input) {
            return _super.prototype.post.call(this, this.woAssetManagementApi.updatePn, input);
          };
          WorkOrderFormService.prototype.woAssetManagementUpdateSelectedEquipment = function(input) {
            return _super.prototype.post.call(this, this.woAssetManagementApi.updateSelectedEquipment, input);
          };
          WorkOrderFormService.prototype.woAssetManagementUpdateSelectedWarehouse = function(input) {
            return _super.prototype.post.call(this, this.woAssetManagementApi.updateSelectedWarehouse, input);
          };
          WorkOrderFormService.prototype.woAssetManagementExecuteDecisions = function(input) {
            return _super.prototype.post.call(this, this.woAssetManagementApi.executeDecisions, input);
          };
          WorkOrderFormService.prototype.woAssetManagementUndoDecisions = function(input) {
            return _super.prototype.post.call(this, this.woAssetManagementApi.undoDecisions, input);
          };
          WorkOrderFormService.prototype.woAssetManagementControl = function(input) {
            return _super.prototype.post.call(this, this.woAssetManagementApi.control, input);
          };
          WorkOrderFormService.prototype.woAssetManagementSave = function(input) {
            return _super.prototype.post.call(this, this.woAssetManagementApi.save, input);
          };
          WorkOrderFormService.prototype.findHBidmOperation = function(input) {
            return _super.prototype.post.call(this, this.operationHistoryApi.findBidmOperationHistoric, input);
          };
          WorkOrderFormService.prototype.findBidtSiteById = function(siteId) {
            return _super.prototype.post.call(this, this.bidtSiteApi.getById, siteId);
          };
          WorkOrderFormService.prototype.findBidtSiteByCriteria = function(bidtSiteDTO) {
            return _super.prototype.post.call(this, this.bidtSiteApi.findAllByCriteria, bidtSiteDTO);
          };
          WorkOrderFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_23__['AppConfigService'],
                _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_4__['AircraftMaintenanceApi'],
                _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_5__['AirworthinessManagementApi'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_24__['PropertiesService'],
                _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_18__['UserProfileManagementApi'],
                _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_13__['FleetBusinessApi'],
                _shared_api_bidt_employee_api__WEBPACK_IMPORTED_MODULE_8__['BidtEmployeeApi'],
                _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_10__['BidtStockMvtApi'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_16__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_17__['TaskManagementApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_14__['FleetManagementApi'],
                _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_6__['AMProjectManagementApi'],
                _shared_api_bidt_work_center_api__WEBPACK_IMPORTED_MODULE_12__['BidtWorkCenterApi'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_11__['BidtWarehouseApi'],
                _shared_api_bidm_wo_assignment_api__WEBPACK_IMPORTED_MODULE_7__['BidmWoAssignmentApi'],
                _shared_api_wo_asset_management_api__WEBPACK_IMPORTED_MODULE_19__['WoAssetManagementApi'],
                _shared_api_operation_history_api__WEBPACK_IMPORTED_MODULE_15__['OperationHistoryApi'],
                _shared_api_bidt_site_api__WEBPACK_IMPORTED_MODULE_9__['BidtSiteApi']
              ])
            ],
            WorkOrderFormService
          );
          return WorkOrderFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_22__['AbstractAwHttpService']);

        /***/
      }
  }
]);
//# sourceMappingURL=default~maintenance-airworthiness-control-airworthiness-control-module~maintenance-maintenance-modul~1daf179e.js.map
