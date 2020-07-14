(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~flight-operations-flight-flight-module~maintenance-airworthiness-control-airworthiness-contr~4dbc4abb'],
  {
    /***/ './node_modules/primeng/treetable.js':
      /*!*******************************************!*\
  !*** ./node_modules/primeng/treetable.js ***!
  \*******************************************/
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
            /*! ./components/treetable/treetable */ './node_modules/primeng/components/treetable/treetable.js'
          )
        );

        /***/
      },

    /***/ './src/app/main/maintenance/work-package/form/work-package-form.service.ts':
      /*!*********************************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/form/work-package-form.service.ts ***!
  \*********************************************************************************/
      /*! exports provided: WorkPackageFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'WorkPackageFormService', function() {
          return WorkPackageFormService;
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
        /* harmony import */ var _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-stock-mvt.api */ './src/app/shared/api/bidt-stock-mvt.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./../../../../shared/api/aircraft-maintenance.api */ './src/app/shared/api/aircraft-maintenance.api.ts'
        );
        /* harmony import */ var _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./../../../../shared/api/airworthiness-management.api */ './src/app/shared/api/airworthiness-management.api.ts'
        );
        /* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./../../../../shared/api/am-project-management.api */ './src/app/shared/api/am-project-management.api.ts'
        );
        /* harmony import */ var _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./../../../../shared/api/fleet-business.api */ './src/app/shared/api/fleet-business.api.ts'
        );
        /* harmony import */ var _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./../../../../shared/api/project-management.api */ './src/app/shared/api/project-management.api.ts'
        );
        /* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./../../../../shared/api/task-management.api */ './src/app/shared/api/task-management.api.ts'
        );
        /* harmony import */ var _shared_api_user_profile_business_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./../../../../shared/api/user-profile-business.api */ './src/app/shared/api/user-profile-business.api.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./../../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_services_date_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./../../../../shared/services/date.service */ './src/app/shared/services/date.service.ts'
        );
        /* harmony import */ var _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ./../../../../shared/utils/array-utils */ './src/app/shared/utils/array-utils.ts'
        );
        /* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./../../../../shared/utils/number-utils */ './src/app/shared/utils/number-utils.ts'
        );
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ./../../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ./../../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _work_package_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./../work-package.service */ './src/app/main/maintenance/work-package/work-package.service.ts'
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

        var WorkPackageFormService = /** @class */ (function(_super) {
          __extends(WorkPackageFormService, _super);
          function WorkPackageFormService(
            http,
            appConfigService,
            aircraftMaintenanceApi,
            amProjectManagementApi,
            bidtStockMvtApi,
            dateService,
            taskManagementApi,
            wpService,
            fleetBusinessApi,
            fleetManagementApi,
            airworthinessManagementApi,
            userProfileBusinessApi,
            projectManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
            _this.amProjectManagementApi = amProjectManagementApi;
            _this.bidtStockMvtApi = bidtStockMvtApi;
            _this.dateService = dateService;
            _this.taskManagementApi = taskManagementApi;
            _this.wpService = wpService;
            _this.fleetBusinessApi = fleetBusinessApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.airworthinessManagementApi = airworthinessManagementApi;
            _this.userProfileBusinessApi = userProfileBusinessApi;
            _this.projectManagementApi = projectManagementApi;
            _this._woStatusList = new rxjs__WEBPACK_IMPORTED_MODULE_2__['BehaviorSubject']([]);
            _this.woStatusList$ = _this._woStatusList.asObservable();
            _this._woTypeList = new rxjs__WEBPACK_IMPORTED_MODULE_2__['BehaviorSubject']([]);
            _this.woTypeList$ = _this._woTypeList.asObservable();
            _this._userList = new rxjs__WEBPACK_IMPORTED_MODULE_2__['BehaviorSubject']([]);
            _this.userList$ = _this._userList.asObservable();
            return _this;
          }
          WorkPackageFormService.prototype.createBidmProject = function(bidmProjectDTO) {
            return _super.prototype.post.call(this, this.amProjectManagementApi.createBidmProject, bidmProjectDTO).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(res) {
                return res;
              })
            );
          };
          WorkPackageFormService.prototype.updateBidmProject = function(bidmProjectDTO) {
            return _super.prototype.post.call(this, this.amProjectManagementApi.updateBidmProject, bidmProjectDTO).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(res) {
                return res;
              })
            );
          };
          WorkPackageFormService.prototype.checkAcrsEventForBidmProject = function(bidmProjectDTO) {
            return _super.prototype.post
              .call(this, this.amProjectManagementApi.checkAcrsEventForBidmProject, bidmProjectDTO)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(res) {
                  return res;
                })
              );
          };
          WorkPackageFormService.prototype.updateBidmWorkOrders = function(bidmWorkOrderList) {
            return _super.prototype.post.call(
              this,
              this.aircraftMaintenanceApi.updateBidmWorkOrders,
              bidmWorkOrderList
            );
          };
          WorkPackageFormService.prototype.getLocalCurrency = function() {
            return _super.prototype.post.call(this, this.taskManagementApi.getLocalCurrency).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(res) {
                return res.substr(res.indexOf('('));
              })
            );
          };
          WorkPackageFormService.prototype.findBidmProject = function(projectId) {
            return _super.prototype.post.call(this, this.amProjectManagementApi.findBidmProject, projectId);
          };
          WorkPackageFormService.prototype.findReturnReasons = function() {
            return _super.prototype.post.call(this, this.taskManagementApi.findAllBireReturnReasons, undefined);
          };
          WorkPackageFormService.prototype.getBidmWorkOrdersByProject = function(projectId) {
            var projectIdDto = { projectId: projectId };
            return _super.prototype.post.call(
              this,
              this.aircraftMaintenanceApi.getBidmWorkOrdersStructureByProject,
              projectIdDto
            );
          };
          WorkPackageFormService.prototype.findBidoEquipment = function(equipmentId) {
            return _super.prototype.post.call(this, this.fleetManagementApi.findBidoEquipment, equipmentId);
          };
          WorkPackageFormService.prototype.getBidmWorkOrdersStructureByProject = function(projectId) {
            var _this = this;
            var projectIdDto = { projectId: projectId };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])({
              woTypeList: this.wpService.loadGenProps(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_15__['GenericPropertyConstants']
                  .AIRM_WORK_ORDER_TYPES_MAP
              ),
              woStatusList: this.wpService.loadGenProps(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_15__['GenericPropertyConstants']
                  .AIRM_OPERATION_STATUS_MAP
              ),
              userList: this.wpService.loadUserList()
            }).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['mergeMap'])(function(_a) {
                var woTypeList = _a.woTypeList,
                  woStatusList = _a.woStatusList,
                  userList = _a.userList;
                return _super.prototype.post
                  .call(_this, _this.aircraftMaintenanceApi.getBidmWorkOrdersStructureByProject, projectIdDto)
                  .pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(woList) {
                      _this._woStatusList.next(woStatusList);
                      _this._woTypeList.next(woTypeList);
                      _this._userList.next(userList);
                      return _this.getWo(woList, woTypeList, woStatusList, userList);
                    })
                  );
              })
            );
          };
          WorkPackageFormService.prototype.getBidmWorkOrdersStructure = function(woListInput) {
            var _this = this;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])({
              woTypeList: this.wpService.loadGenProps(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_15__['GenericPropertyConstants']
                  .AIRM_WORK_ORDER_TYPES_MAP
              ),
              woStatusList: this.wpService.loadGenProps(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_15__['GenericPropertyConstants']
                  .AIRM_OPERATION_STATUS_MAP
              ),
              userList: this.wpService.loadUserList()
            }).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['mergeMap'])(function(_a) {
                var woTypeList = _a.woTypeList,
                  woStatusList = _a.woStatusList,
                  userList = _a.userList;
                return _super.prototype.post
                  .call(_this, _this.aircraftMaintenanceApi.getBidmWorkOrdersStructure, woListInput)
                  .pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(woList) {
                      _this._woStatusList.next(woStatusList);
                      _this._woTypeList.next(woTypeList);
                      _this._userList.next(userList);
                      return _this.getWo(woList, woTypeList, woStatusList, userList);
                    })
                  );
              })
            );
          };
          WorkPackageFormService.prototype.getWo = function(woList, woTypeList, woStatusList, userList) {
            var _this = this;
            return !!woList
              ? woList.map(function(wo) {
                  var data = {
                    woId: wo.bidmWorkOrder.woId,
                    projectId: wo.bidmWorkOrder.projectId,
                    code: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].orEmpty(
                      wo.bidmWorkOrder.woCode
                    ),
                    description: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].isNullOrEmpty(
                      wo.workOrderStatusDetail.taskDesignation
                    )
                      ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].orEmpty(
                          wo.bidmWorkOrder.woDescription
                        )
                      : _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].orEmpty(
                          wo.workOrderStatusDetail.taskDesignation
                        ),
                    type: _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_19__[
                      'SelectItemUtils'
                    ].formatSelectItem(wo.bidmWorkOrder.woType, woTypeList),
                    woType: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].orEmpty(
                      wo.bidmWorkOrder.woType
                    ),
                    origin: wo.workOrderStatusDetail.taskType
                      ? wo.bidmWorkOrder.woSourceText + ' (' + wo.workOrderStatusDetail.taskType + ')'
                      : wo.bidmWorkOrder.woSourceText,
                    asset: wo.assetRepresentation,
                    status: _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].orEmpty(
                      wo.workOrderStatusDetail.status
                    ),
                    statusPercent: parseInt(wo.statusPercent, 10),
                    statusCrititicy: wo.workOrderStatusDetail.status ? wo.workOrderStatusDetail.status.slice(2) : '',
                    startDate: _this.dateService.dateToString(wo.bidmWorkOrder.woScheduledStartDate),
                    endDate: _this.dateService.dateToString(wo.bidmWorkOrder.woScheduledEndDate),
                    assignedTo: _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_19__[
                      'SelectItemUtils'
                    ].formatSelectItem(wo.bidmWorkOrder.woAssignedTo, userList),
                    componentCockpit: wo.bidmWorkOrder.bsdeProjectNumber,
                    WTY: wo.bidmWorkOrder.underWarranty ? true : false,
                    openingDate: _this.dateService.dateToString(wo.workOrderStatusDetail.startDate),
                    closingDate: _this.dateService.dateToString(wo.workOrderStatusDetail.endDate),
                    checkedBy: _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_19__[
                      'SelectItemUtils'
                    ].formatSelectItem(wo.bidmWorkOrder.woCheckedBy, userList),
                    checkedOn: _this.dateService.dateToString(wo.bidmWorkOrder.woCheckedOn),
                    comments: wo.bidmWorkOrder.woComments,
                    relatedItem: wo.relatedItem,
                    zone: wo.workOrderStatusDetail.taskZone,
                    standardDuration: _this.roundNumberToString(
                      wo.workOrderStatusDetail.costAndDuration.theoreticalDuration
                    ),
                    standardCost: _this.roundNumberToString(
                      wo.workOrderStatusDetail.costAndDuration.theoreticalOpeCosts
                    ),
                    qualification: wo.qualificationNeeded,
                    planWorkload: _this.roundNumberToString(
                      wo.workOrderStatusDetail.costAndDuration.theoreticalWorkload
                    ),
                    planDuration: _this.roundNumberToString(
                      wo.workOrderStatusDetail.costAndDuration.theoreticalDuration
                    ),
                    planTotalCost: _this.roundNumberToString(
                      wo.workOrderStatusDetail.costAndDuration.theoreticalTotalCost
                    ),
                    planLaborCost: _this.roundNumberToString(
                      wo.workOrderStatusDetail.costAndDuration.theoreticalLaborCost
                    ),
                    planMaterialCost: _this.roundNumberToString(
                      wo.workOrderStatusDetail.costAndDuration.theoreticalMaterialCost
                    ),
                    planSubcontractCost: _this.roundNumberToString(
                      wo.workOrderStatusDetail.costAndDuration.theoreticalSubcontractingCost
                    ),
                    Workload: '',
                    Duration: '',
                    TotalCost: _this.roundNumberToString(wo.workOrderStatusDetail.costAndDuration.realTotalCost),
                    LaborCost: _this.roundNumberToString(wo.workOrderStatusDetail.costAndDuration.laborCost),
                    MaterialCost: _this.roundNumberToString(wo.workOrderStatusDetail.costAndDuration.materialCost),
                    SubcontractingCost: _this.roundNumberToString(
                      wo.workOrderStatusDetail.costAndDuration.subcontractingCost
                    ),
                    familyVariantCode: !!wo.workOrderStatusDetail.bidoEquipmentData
                      ? wo.workOrderStatusDetail.bidoEquipmentData.familyVariantCode
                      : '',
                    bidmWorkOrder: wo.bidmWorkOrder,
                    bidoEquipmentData: wo.workOrderStatusDetail.bidoEquipmentData,
                    componentCockpitText: wo.componentCockpitText
                  };
                  var children = wo.bidmWorkOrderDataList
                    ? _this.getWo(wo.bidmWorkOrderDataList, woTypeList, woStatusList, userList)
                    : [];
                  return { data: data, children: children };
                })
              : [];
          };
          WorkPackageFormService.prototype.loadReturnReasons = function() {
            return this.findReturnReasons().pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(results) {
                return !!results
                  ? results
                      .map(function(reason) {
                        return {
                          label: reason.returnReasonCode + ' - ' + reason.returnReasonName,
                          value: reason.returnReasonCode
                        };
                      })
                      .sort(
                        _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_17__['ArrayUtils'].compareValues('label')
                      )
                  : [];
              })
            );
          };
          WorkPackageFormService.prototype.roundNumberToString = function(value) {
            return value
              ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_18__['NumberUtils'].toString(
                  _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_18__['NumberUtils'].roundNumber(value)
                )
              : '0';
          };
          WorkPackageFormService.prototype.controlConfiguration = function(input) {
            return _super.prototype.post.call(this, this.fleetBusinessApi.controlConfiguration, input);
          };
          WorkPackageFormService.prototype.controlStock = function(input) {
            return _super.prototype.post.call(this, this.bidtStockMvtApi.controlStock, input);
          };
          WorkPackageFormService.prototype.findBidmProjectWithLinkedObjects = function(input) {
            return _super.prototype.post.call(
              this,
              this.amProjectManagementApi.findBidmProjectWithLinkedObjects,
              input
            );
          };
          WorkPackageFormService.prototype.calculateBidmProjectStatus = function(input) {
            return _super.prototype.post.call(this, this.airworthinessManagementApi.calculateBidmProjectStatus, input);
          };
          WorkPackageFormService.prototype.createBidmDocument = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.createBidmDocument, input);
          };
          WorkPackageFormService.prototype.findBidmDocumentsByProject = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.findBidmDocumentsByProject, input);
          };
          WorkPackageFormService.prototype.removeBidmDocument = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.removeBidmDocument, input);
          };
          WorkPackageFormService.prototype.getBsdeProjectData = function(projectNumber) {
            return _super.prototype.post.call(this, this.amProjectManagementApi.getBsdeProjectData, projectNumber);
          };
          WorkPackageFormService.prototype.createWorkbenchInspection = function(input) {
            return _super.prototype.post.call(this, this.amProjectManagementApi.createWorkbenchInspection, input);
          };
          WorkPackageFormService.prototype.isBuildingBlockInstalled = function(buildingBlock) {
            return _super.prototype.post.call(
              this,
              this.userProfileBusinessApi.isBuildingBlockInstalled,
              buildingBlock
            );
          };
          WorkPackageFormService.prototype.getBsdeProjectListByPnAndSn = function(input) {
            return _super.prototype.post.call(this, this.projectManagementApi.findBsdeProjectsByPnAndSn, input);
          };
          WorkPackageFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_7__['AppConfigService'],
                _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_8__['AircraftMaintenanceApi'],
                _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_10__['AMProjectManagementApi'],
                _shared_api_bidt_stock_mvt_api__WEBPACK_IMPORTED_MODULE_4__['BidtStockMvtApi'],
                _shared_services_date_service__WEBPACK_IMPORTED_MODULE_16__['DateService'],
                _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_13__['TaskManagementApi'],
                _work_package_service__WEBPACK_IMPORTED_MODULE_21__['WorkPackageService'],
                _shared_api_fleet_business_api__WEBPACK_IMPORTED_MODULE_11__['FleetBusinessApi'],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__['FleetManagementApi'],
                _shared_api_airworthiness_management_api__WEBPACK_IMPORTED_MODULE_9__['AirworthinessManagementApi'],
                _shared_api_user_profile_business_api__WEBPACK_IMPORTED_MODULE_14__['UserProfileBusinessApi'],
                _shared_api_project_management_api__WEBPACK_IMPORTED_MODULE_12__['ProjectManagementApi']
              ])
            ],
            WorkPackageFormService
          );
          return WorkPackageFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_6__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/maintenance/work-package/work-package.service.ts':
      /*!***********************************************************************!*\
  !*** ./src/app/main/maintenance/work-package/work-package.service.ts ***!
  \***********************************************************************/
      /*! exports provided: WorkPackageService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'WorkPackageService', function() {
          return WorkPackageService;
        });
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
        );
        /* harmony import */ var _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./../../../shared/api/fleet-management.api */ './src/app/shared/api/fleet-management.api.ts'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./../../../shared/api/user-profile-management.api */ './src/app/shared/api/user-profile-management.api.ts'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./../../../shared/utils/array-utils */ './src/app/shared/utils/array-utils.ts'
        );
        /* harmony import */ var _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./../../../shared/utils/select-item-utils */ './src/app/shared/utils/select-item-utils.ts'
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

        var WorkPackageService = /** @class */ (function(_super) {
          __extends(WorkPackageService, _super);
          function WorkPackageService(
            http,
            appConfigService,
            propertiesService,
            productStructureManagementApi,
            fleetManagementApi,
            userProfileManagementApi
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.propertiesService = propertiesService;
            _this.productStructureManagementApi = productStructureManagementApi;
            _this.fleetManagementApi = fleetManagementApi;
            _this.userProfileManagementApi = userProfileManagementApi;
            return _this;
          }
          WorkPackageService.prototype.findAuthorizedBireSite = function() {
            return _super.prototype.post.call(this, this.productStructureManagementApi.findAuthorizedBireSite);
          };
          WorkPackageService.prototype.findAuthorizedBidoOperations = function() {
            return _super.prototype.post.call(this, this.fleetManagementApi.findAuthorizedBidoOperations);
          };
          WorkPackageService.prototype.findUsersWithUseCase = function() {
            return _super.prototype.post.call(
              this,
              this.userProfileManagementApi.findBidoUsersWithUseCase,
              _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_8__['BidoFunctionTypeConstants']
                .UC_AIRM_RECEPTION
            );
          };
          WorkPackageService.prototype.loadGenProps = function(key) {
            return this.propertiesService.getValue(key).pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(results) {
                return !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_12__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
              })
            );
          };
          WorkPackageService.prototype.loadStatusList = function(removedStatuses) {
            return this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                  .AIRM_PROJECT_STATUS_MAP
              )
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(results) {
                  var statusList = !!results
                    ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_12__['SelectItemUtils'].fromLabelValues(
                        results
                      )
                    : [];
                  return statusList.filter(function(status) {
                    return !removedStatuses.includes(status.value);
                  });
                })
              );
          };
          WorkPackageService.prototype.loadMROCenterList = function() {
            return this.findAuthorizedBireSite().pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(results) {
                var mroCenterList = !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_12__['SelectItemUtils'].fromLabelValues(
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
          WorkPackageService.prototype.loadOperationList = function() {
            return this.findAuthorizedBidoOperations().pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(results) {
                return !!results
                  ? _shared_utils_select_item_utils__WEBPACK_IMPORTED_MODULE_12__['SelectItemUtils'].fromLabelValues(
                      results
                    )
                  : [];
              })
            );
          };
          WorkPackageService.prototype.loadUserList = function() {
            return this.findUsersWithUseCase().pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map'])(function(results) {
                return !!results
                  ? results
                      .map(function(user) {
                        return {
                          label: user.lastname + ' ' + user.firstname,
                          value: user.userId
                        };
                      })
                      .sort(
                        _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_11__['ArrayUtils'].compareValues('label')
                      )
                  : [];
              })
            );
          };
          WorkPackageService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_10__['PropertiesService'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_6__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_fleet_management_api__WEBPACK_IMPORTED_MODULE_5__['FleetManagementApi'],
                _shared_api_user_profile_management_api__WEBPACK_IMPORTED_MODULE_7__['UserProfileManagementApi']
              ])
            ],
            WorkPackageService
          );
          return WorkPackageService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/constants/bido-attribute-constants.ts':
      /*!**************************************************************!*\
  !*** ./src/app/shared/constants/bido-attribute-constants.ts ***!
  \**************************************************************/
      /*! exports provided: BidoAttributeConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'BidoAttributeConstants', function() {
          return BidoAttributeConstants;
        });
        var BidoAttributeConstants = /** @class */ (function() {
          function BidoAttributeConstants() {}
          /**************************************************************************
           * Attribute Types
           *************************************************************************/
          BidoAttributeConstants.ATTRIBUTE_TYPE_TEXT = 'Text';
          BidoAttributeConstants.ATTRIBUTE_TYPE_DATE = 'Date';
          BidoAttributeConstants.ATTRIBUTE_TYPE_BOOLEAN = 'Boolean';
          BidoAttributeConstants.ATTRIBUTE_TYPE_LIST = 'List';
          /**************************************************************************
           * Standard Attributes
           *************************************************************************/
          BidoAttributeConstants.SAP_EQUIPMENT_CODE = 1;
          BidoAttributeConstants.ASSET_LOCATION = 2;
          BidoAttributeConstants.MANUFACTURER = 3;
          BidoAttributeConstants.ICAO_CODE = 4;
          BidoAttributeConstants.ITEM_NUMBER = 5;
          BidoAttributeConstants.EVENT_LOCATION = 6;
          BidoAttributeConstants.ASSET_SYSTEM_SOURCE_ID = 7;
          BidoAttributeConstants.ASSET_SYSTEM_SOURCE_REFERENCE = 8;
          BidoAttributeConstants.EVENT_SYSTEM_SOURCE_ID = 9;
          BidoAttributeConstants.EVENT_SYSTEM_SOURCE_REFERENCE = 10;
          BidoAttributeConstants.FUNCTIONAL_LOCATION = 11;
          BidoAttributeConstants.EVENT_IS_DEFERRED_DEFECT = 12;
          BidoAttributeConstants.EVENT_DD_DELAY_CATEGORY = 13;
          BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZED_VALUE = 14;
          BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZED_UNIT = 15;
          BidoAttributeConstants.EVENT_DD_TASK_PROPOSED_TO_PROCESS = 16;
          BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZATION_NUMBER = 17;
          BidoAttributeConstants.EVENT_DEFECT_LAST_AUTHOR = 18;
          BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_LAST_AUTHOR = 19;
          BidoAttributeConstants.EVENT_DEFECT_DEFERRAL_LAST_AUTHOR = 20;
          BidoAttributeConstants.EVENT_DEFECT_DETECTION_CONTEXT = 21;
          BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_DESCRIPTION = 22;
          BidoAttributeConstants.EVENT_DEFECT_LOG_NUMBER = 23;
          BidoAttributeConstants.EVENT_DEFECT_EXTENSION = 24;
          BidoAttributeConstants.EVENT_DEFECT_AUTHOR = 25;
          BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_AUTHOR = 26;
          BidoAttributeConstants.EVENT_DEFECT_DEFERRAL_AUTHOR = 27;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_WO_CONTEXT = 28;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_AUTHORIZATION_NUMBER = 29;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_LIMIT_DATE = 30;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_REFUSAL_REASON = 31;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_AUTHOR = 32;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_DECISION_LAST_AUTHOR = 33;
          BidoAttributeConstants.MAINTENANCE_PLAN_ORIGINAL_DEADLINES = 34;
          BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_FLIGHT_RESTRICTIONS = 35;
          BidoAttributeConstants.EVENT_DEFECT_FLIGHT_RESTRICTIONS = 36;
          BidoAttributeConstants.EVENT_DEFECT_IS_CRITICAL = 37;
          BidoAttributeConstants.FLIGHT_GONOGO_VALIDATION = 38;
          BidoAttributeConstants.EVENT_TASK_APPLIED_FLIGHT_CONTEXT = 39;
          BidoAttributeConstants.IGNORE_INITIAL_DEADLINE_NEXT_OCCURRENCE_CALCULATION = 40;
          BidoAttributeConstants.EVENT_DEFECT_INSPECTION_MEAN = 41;
          BidoAttributeConstants.EVENT_DEFECT_SRM_REFERENCE = 42;
          BidoAttributeConstants.EVENT_DEFECT_FRAME_FROM = 43;
          BidoAttributeConstants.EVENT_DEFECT_FRAME_FROM_DISTANCE = 44;
          BidoAttributeConstants.EVENT_DEFECT_FRAME_TO = 45;
          BidoAttributeConstants.EVENT_DEFECT_FRAME_TO_DISTANCE = 46;
          BidoAttributeConstants.EVENT_DEFECT_STRINGER_FROM = 47;
          BidoAttributeConstants.EVENT_DEFECT_STRINGER_FROM_DISTANCE = 48;
          BidoAttributeConstants.EVENT_DEFECT_STRINGER_TO = 49;
          BidoAttributeConstants.EVENT_DEFECT_STRINGER_TO_DISTANCE = 50;
          BidoAttributeConstants.EVENT_DEFECT_RIB_FROM = 51;
          BidoAttributeConstants.EVENT_DEFECT_RIB_FROM_DISTANCE = 52;
          BidoAttributeConstants.EVENT_DEFECT_RIB_TO = 53;
          BidoAttributeConstants.EVENT_DEFECT_RIB_TO_DISTANCE = 54;
          BidoAttributeConstants.EVENT_DEFECT_BEAM_FROM = 55;
          BidoAttributeConstants.EVENT_DEFECT_BEAM_FROM_DISTANCE = 56;
          BidoAttributeConstants.EVENT_DEFECT_BEAM_TO = 57;
          BidoAttributeConstants.EVENT_DEFECT_BEAM_TO_DISTANCE = 56;
          BidoAttributeConstants.EVENT_DEFECT_DEPTH = 59;
          BidoAttributeConstants.EVENT_DEFECT_LENGHT = 60;
          BidoAttributeConstants.EVENT_DEFECT_WIDTH = 61;
          BidoAttributeConstants.EVENT_DEFECT_SURFACE_AREA = 62;
          BidoAttributeConstants.FLIGHT_SYSTEM_SOURCE_ID = 63;
          BidoAttributeConstants.FLIGHT_SYSTEM_SOURCE_REFERENCE = 64;
          BidoAttributeConstants.EVENT_WORK_ORDER_SOURCE = 65;
          BidoAttributeConstants.EVENT_FAULT_CODE = 68;
          // Dassault *******************************************************************
          BidoAttributeConstants.DAV_HUMS_STATUS = 2000;
          BidoAttributeConstants.DAV_HUMS_MESSAGE = 2001;
          BidoAttributeConstants.DAV_MANUAL_FLIGHT_ENTRIES = 2003;
          return BidoAttributeConstants;
        })();

        /***/
      },

    /***/ './src/app/shared/utils/array-utils.ts':
      /*!*********************************************!*\
  !*** ./src/app/shared/utils/array-utils.ts ***!
  \*********************************************/
      /*! exports provided: ArrayUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ArrayUtils', function() {
          return ArrayUtils;
        });
        var ArrayUtils = /** @class */ (function() {
          function ArrayUtils() {}
          ArrayUtils.compareValues = function(key, order) {
            if (order === void 0) {
              order = 'asc';
            }
            return function(a, b) {
              if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
              }
              var varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
              var varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
              var comparison = 0;
              if (varA > varB) {
                comparison = 1;
              } else if (varA < varB) {
                comparison = -1;
              }
              return order === 'desc' ? comparison * -1 : comparison;
            };
          };
          return ArrayUtils;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=default~flight-operations-flight-flight-module~maintenance-airworthiness-control-airworthiness-contr~4dbc4abb.js.map
