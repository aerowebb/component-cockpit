(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~logistics-goods-movement-goods-movement-module~maintenance-forecast-forecast-module~maintena~5d9237f0'],
  {
    /***/ './node_modules/primeng/dialog.js':
      /*!****************************************!*\
  !*** ./node_modules/primeng/dialog.js ***!
  \****************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /* Shorthand */

        function __export(m) {
          for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
        Object.defineProperty(exports, '__esModule', { value: true });
        __export(
          __webpack_require__(/*! ./components/dialog/dialog */ './node_modules/primeng/components/dialog/dialog.js')
        );

        /***/
      },

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

    /***/ './src/app/main/maintenance/procurement-request/material-availability-indicators/material-availability-indicators.component.html':
      /*!***************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/procurement-request/material-availability-indicators/material-availability-indicators.component.html ***!
  \***************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="grid-cell grid-cell--container">\r\n  <div class="grid-cell-header">\r\n    <div class="grid-cell-title-container">\r\n      <h3 class="grid-cell-title">\r\n        {{ getComponentName() + ".materialAvailability" | translate }}\r\n      </h3>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row" *ngIf="!isCreateOpenMode">\r\n    <div class="section material-availability grid-cell-content">\r\n      <div class="section-content">\r\n        <div class="row">\r\n          <div class="row material-availability">\r\n            <div id="ok" class="form-group">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".ok" | translate }}\r\n              </label>\r\n              <div class="form-control ready-only-field">\r\n                <div *ngIf="isLoadingProcurementRequestData" class="outgoing-conf-lds-hourglass lds-hourglass"></div>\r\n                <input\r\n                  *ngIf="!isLoadingProcurementRequestData"\r\n                  type="text"\r\n                  class="aw-input"\r\n                  [ngClass]="{ ok: isConfStockOk() }"\r\n                  [(ngModel)]="materialAvailabilityIndicators.nbProcReqItemsOk"\r\n                  [disabled]="true"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div id="warning" class="form-group">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".warning" | translate }}\r\n              </label>\r\n              <div class="form-control ready-only-field">\r\n                <div *ngIf="isLoadingProcurementRequestData" class="outgoing-conf-lds-hourglass lds-hourglass"></div>\r\n                <input\r\n                  *ngIf="!isLoadingProcurementRequestData"\r\n                  type="text"\r\n                  class="aw-input"\r\n                  [ngClass]="{ warning: isConStockfWarning() }"\r\n                  [(ngModel)]="materialAvailabilityIndicators.nbProcReqItemsWarning"\r\n                  [disabled]="true"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div id="nok" class="form-group">\r\n              <label class="form-label">\r\n                {{ getComponentName() + ".nok" | translate }}\r\n              </label>\r\n              <div class="form-control ready-only-field">\r\n                <div *ngIf="isLoadingProcurementRequestData" class="outgoing-conf-lds-hourglass lds-hourglass"></div>\r\n                <input\r\n                  *ngIf="!isLoadingProcurementRequestData"\r\n                  type="text"\r\n                  class="aw-input"\r\n                  [ngClass]="{ nok: isConfStockNok() }"\r\n                  [(ngModel)]="materialAvailabilityIndicators.nbProcReqItemsNOk"\r\n                  [disabled]="true"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/procurement-request/material-availability-indicators/material-availability-indicators.component.scss':
      /*!***************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/procurement-request/material-availability-indicators/material-availability-indicators.component.scss ***!
  \***************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.material-availability.section {\n  flex-grow: 1;\n  text-align: center; }\n\n.material-availability.row {\n  flex-wrap: nowrap !important; }\n\n.material-availability .row {\n  flex: 1;\n  padding: 0; }\n\n.ready-only-field {\n  padding: 8px 0; }\n\n.material-availability input {\n  text-align: center; }\n\n.material-availability .ok {\n  background-color: #4caf50 !important; }\n\n.material-availability .warning {\n  background-color: #ffc107 !important; }\n\n.material-availability .nok {\n  background-color: #f6685e !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9wcm9jdXJlbWVudC1yZXF1ZXN0L21hdGVyaWFsLWF2YWlsYWJpbGl0eS1pbmRpY2F0b3JzL2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxtYWludGVuYW5jZVxccHJvY3VyZW1lbnQtcmVxdWVzdFxcbWF0ZXJpYWwtYXZhaWxhYmlsaXR5LWluZGljYXRvcnNcXG1hdGVyaWFsLWF2YWlsYWJpbGl0eS1pbmRpY2F0b3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLE9BQU87RUFDUCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBRUksa0JBQWtCLEVBQUE7O0FBRnRCO0VBS0ksb0NBQTBDLEVBQUE7O0FBTDlDO0VBU0ksb0NBQW9DLEVBQUE7O0FBVHhDO0VBYUksb0NBQXdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3Byb2N1cmVtZW50LXJlcXVlc3QvbWF0ZXJpYWwtYXZhaWxhYmlsaXR5LWluZGljYXRvcnMvbWF0ZXJpYWwtYXZhaWxhYmlsaXR5LWluZGljYXRvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbi5tYXRlcmlhbC1hdmFpbGFiaWxpdHkuc2VjdGlvbiB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdGVyaWFsLWF2YWlsYWJpbGl0eS5yb3cge1xyXG4gIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1hdmFpbGFiaWxpdHkgLnJvdyB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucmVhZHktb25seS1maWVsZCB7XHJcbiAgcGFkZGluZzogOHB4IDA7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1hdmFpbGFiaWxpdHkge1xyXG4gIGlucHV0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLm9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC53YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5ub2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDEgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */';

        /***/
      },

    /***/ './src/app/main/maintenance/procurement-request/material-availability-indicators/material-availability-indicators.component.ts':
      /*!*************************************************************************************************************************************!*\
  !*** ./src/app/main/maintenance/procurement-request/material-availability-indicators/material-availability-indicators.component.ts ***!
  \*************************************************************************************************************************************/
      /*! exports provided: MaterialAvailabilityIndicatorsComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MaterialAvailabilityIndicatorsComponent',
          function() {
            return MaterialAvailabilityIndicatorsComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/types/generic-component */ './src/app/shared/types/generic-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _procurement_requests_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../procurement-requests-table.service */ './src/app/main/maintenance/procurement-request/procurement-requests-table.service.ts'
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

        var MaterialAvailabilityIndicatorsComponent = /** @class */ (function(_super) {
          __extends(MaterialAvailabilityIndicatorsComponent, _super);
          function MaterialAvailabilityIndicatorsComponent(procurementRequestsTableService) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_3__['ComponentOpenMode'].Read
              ) || this;
            _this.procurementRequestsTableService = procurementRequestsTableService;
            _this.init();
            return _this;
          }
          Object.defineProperty(MaterialAvailabilityIndicatorsComponent.prototype, 'workOrder', {
            set: function(workOrderDTO) {
              if (!!workOrderDTO) {
                this.bidmWorkOrder = workOrderDTO;
                this.loadProcurementRequestAndQuantity();
              }
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(MaterialAvailabilityIndicatorsComponent.prototype, 'workPackages', {
            set: function(workPackagesDTO) {
              if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_5__['ListUtils'].isNullOrEmpty(workPackagesDTO)) {
                this.workPackageDTOIdsTab = workPackagesDTO.map(function(workPackageDTO) {
                  return {
                    projectId: workPackageDTO.projectId
                  };
                });
                this.loadProcurementRequestAndQuantity();
              }
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(MaterialAvailabilityIndicatorsComponent.prototype, 'workPackageIds', {
            set: function(workPackagesId) {
              if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_5__['ListUtils'].isNullOrEmpty(workPackagesId)) {
                this.workPackageDTOIdsTab = workPackagesId.map(function(workPackageId) {
                  return {
                    projectId: workPackageId
                  };
                });
                this.loadProcurementRequestAndQuantity();
              }
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(MaterialAvailabilityIndicatorsComponent.prototype, 'procurementRequests', {
            set: function(procurementRequests) {
              if (
                !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_5__['ListUtils'].isNullOrEmpty(procurementRequests)
              ) {
                this.procurementRequestsTab = procurementRequests;
                this.loadProcurementRequestAndQuantity();
              }
            },
            enumerable: true,
            configurable: true
          });
          MaterialAvailabilityIndicatorsComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_2__['ComponentConstants']
              .MAI_MATERIAL_AVAILABILITY_INDICATORS;
          };
          MaterialAvailabilityIndicatorsComponent.prototype.init = function() {
            this.isLoadingProcurementRequestData = false;
            this.materialAvailabilityIndicators = {
              nbProcReqItemsOk: 0,
              nbProcReqItemsNOk: 0,
              nbProcReqItemsWarning: 0
            };
          };
          MaterialAvailabilityIndicatorsComponent.prototype.loadProcurementRequestAndQuantity = function() {
            var _this = this;
            if (
              !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_5__['ListUtils'].isNullOrEmpty(
                this.procurementRequestsTab
              )
            ) {
              this.computeMaterialAvailabilityIndicators(this.procurementRequestsTab);
            } else {
              this.isLoadingProcurementRequestData = true;
              this.procurementRequestsTableService
                .findProcReqItemsAndStockQuantityIndicators(this.bidmWorkOrder, this.workPackageDTOIdsTab)
                .pipe(
                  Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['finalize'])(function() {
                    return (_this.isLoadingProcurementRequestData = false);
                  })
                )
                .subscribe(function(results) {
                  _this.computeMaterialAvailabilityIndicators(results);
                });
            }
          };
          MaterialAvailabilityIndicatorsComponent.prototype.computeMaterialAvailabilityIndicators = function(results) {
            var nbProcReqItemsOk = 0;
            var nbProcReqItemsNOk = 0;
            var nbProcReqItemsWarning = 0;
            results.forEach(function(procReq) {
              if (!!procReq.procReqItemsAndQtyIndicatorsDTO) {
                procReq.procReqItemsAndQtyIndicatorsDTO.forEach(function(item) {
                  if (item.ok) {
                    nbProcReqItemsOk++;
                  } else if (item.nok) {
                    nbProcReqItemsNOk++;
                  } else if (item.warning) {
                    nbProcReqItemsWarning++;
                  }
                });
              }
            });
            this.materialAvailabilityIndicators = {
              nbProcReqItemsOk: nbProcReqItemsOk,
              nbProcReqItemsNOk: nbProcReqItemsNOk,
              nbProcReqItemsWarning: nbProcReqItemsWarning
            };
          };
          MaterialAvailabilityIndicatorsComponent.prototype.isConfStockOk = function() {
            return (
              this.materialAvailabilityIndicators.nbProcReqItemsNOk === 0 &&
              this.materialAvailabilityIndicators.nbProcReqItemsWarning === 0 &&
              this.materialAvailabilityIndicators.nbProcReqItemsOk > 0
            );
          };
          MaterialAvailabilityIndicatorsComponent.prototype.isConStockfWarning = function() {
            return (
              this.materialAvailabilityIndicators.nbProcReqItemsNOk === 0 &&
              this.materialAvailabilityIndicators.nbProcReqItemsWarning > 0
            );
          };
          MaterialAvailabilityIndicatorsComponent.prototype.isConfStockNok = function() {
            return this.materialAvailabilityIndicators.nbProcReqItemsNOk > 0;
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            MaterialAvailabilityIndicatorsComponent.prototype,
            'workOrder',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array),
              __metadata('design:paramtypes', [Array])
            ],
            MaterialAvailabilityIndicatorsComponent.prototype,
            'workPackages',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array),
              __metadata('design:paramtypes', [Array])
            ],
            MaterialAvailabilityIndicatorsComponent.prototype,
            'workPackageIds',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array),
              __metadata('design:paramtypes', [Array])
            ],
            MaterialAvailabilityIndicatorsComponent.prototype,
            'procurementRequests',
            null
          );
          MaterialAvailabilityIndicatorsComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-material-availability-indicators',
                template: __webpack_require__(
                  /*! ./material-availability-indicators.component.html */ './src/app/main/maintenance/procurement-request/material-availability-indicators/material-availability-indicators.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./material-availability-indicators.component.scss */ './src/app/main/maintenance/procurement-request/material-availability-indicators/material-availability-indicators.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _procurement_requests_table_service__WEBPACK_IMPORTED_MODULE_6__['ProcurementRequestsTableService']
              ])
            ],
            MaterialAvailabilityIndicatorsComponent
          );
          return MaterialAvailabilityIndicatorsComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_4__['GenericComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/procurement-request/procurement-requests-table.component.html':
      /*!************************************************************************************************!*\
  !*** ./src/app/main/maintenance/procurement-request/procurement-requests-table.component.html ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div class="grid-cell grid-cell--container">\r\n  <div class="grid-cell-header">\r\n    <div class="grid-cell-title-container">\r\n      <h3 class="grid-cell-title">\r\n        {{ requestManagementLabel }} ({{ procReqItemsTableDataSource ? procReqItemsTableDataSource.dataCount : 0 }})\r\n      </h3>\r\n    </div>\r\n  </div>\r\n  <div class="table-filters">\r\n    <i\r\n      class="fa fa-fw fa-filter aw-icon aw-icon-with-border aw-icon-with-overlay"\r\n      aria-hidden="true"\r\n      pTooltip="{{ \'global.\' + (stockMvtTableFiltersVisible ? \'hideFilters\' : \'showFilters\') | translate }}"\r\n      tooltipPosition="top"\r\n      [ngClass]="{ active: stockMvtTableFiltersVisible }"\r\n      (click)="setStockMvtTableFiltersVisible()"\r\n    ></i>\r\n\r\n    <div class="grid-cell-content filter-block" *ngIf="stockMvtTableFiltersVisible">\r\n      <div class="column">\r\n        <div class="form-group" *ngIf="filtersAvailabilityDefaultList">\r\n          <div class="form-label">\r\n            <label>\r\n              {{ getComponentName() + ".availability" | translate }}\r\n            </label>\r\n          </div>\r\n          <p-selectButton\r\n            multiple="multiple"\r\n            [options]="filtersAvailabilityDefaultList"\r\n            [(ngModel)]="procReqItemFiltersAvailabilityList"\r\n            (onChange)="filterStockMvtTableByCriteria()"\r\n          ></p-selectButton>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="column">\r\n        <div class="form-group" *ngIf="procReqItemStatusList">\r\n          <div class="form-label">\r\n            <label>\r\n              {{ getComponentName() + ".status" | translate }}\r\n            </label>\r\n          </div>\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              placeholder="&nbsp;"\r\n              [options]="procReqItemStatusList"\r\n              [showClear]="true"\r\n              [(ngModel)]="selectedProcReqFilterStatusValue"\r\n              (onChange)="filterStockMvtTableByCriteria()"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="column">\r\n        <div class="form-group" *ngIf="wpFiltersList">\r\n          <div class="form-label">\r\n            <label>\r\n              {{ getComponentName() + ".workPackage" | translate }}\r\n            </label>\r\n          </div>\r\n          <div class="form-control">\r\n            <p-dropdown\r\n              class="aw-dropdown fixed-width"\r\n              placeholder="&nbsp;"\r\n              [options]="wpFiltersList"\r\n              [showClear]="true"\r\n              [(ngModel)]="selectedProcReqFilterWPValue"\r\n              (onChange)="filterStockMvtTableByCriteria()"\r\n              appendTo="body"\r\n            ></p-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a-table [dataSource]="procReqItemsTableDataSource">\r\n    <ng-template tableActionsDef>\r\n      <button\r\n        id="deleteResultsTable"\r\n        *ngIf="isDeleteButtonVisible()"\r\n        type="button"\r\n        mat-raised-button\r\n        color="warn"\r\n        (click)="deleteProcurementRequest()"\r\n      >\r\n        {{ "delete" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        id="cancelResultsTable"\r\n        *ngIf="isCancelButtonVisible()"\r\n        type="button"\r\n        mat-raised-button\r\n        color="warn"\r\n        (click)="cancelProcurementRequest()"\r\n      >\r\n        {{ "cancel" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        id="editResultsTable"\r\n        *ngIf="enableOpenProcurementOnEdit"\r\n        type="button"\r\n        mat-raised-button\r\n        (click)="openProcurementRequestDialog()"\r\n      >\r\n        {{ "global.edit" | translate }}\r\n      </button>\r\n\r\n      <button\r\n        id="addResultsTable"\r\n        *ngIf="enableOpenProcurementOnAdd"\r\n        type="button"\r\n        mat-raised-button\r\n        (click)="openProcurementRequestDialog()"\r\n      >\r\n        {{ "global.add" | translate }}\r\n      </button>\r\n      <button\r\n        *ngIf="\r\n          procReqItemsTableDataSource.dataSelectionCount == 1 &&\r\n          procReqItemsTableDataSource.dataSelection[0]._obj.procReqItemsAndQtyIndicatorsDTO?.length == 1\r\n        "\r\n        type="button"\r\n        mat-raised-button\r\n        (click)="openProcurementManagmentPage()"\r\n      >\r\n        {{ getComponentName() + ".manage" | translate }}\r\n      </button>\r\n    </ng-template>\r\n\r\n    <ng-template columnDef="procurementRequest" let-rowData="rowData">\r\n      <div>\r\n        <a (click)="openProcurementDetails(rowData)"> {{ rowData.procurementRequest }} </a>\r\n      </div>\r\n      <div>\r\n        <i>\r\n          {{ rowData.procurementRequestDescription | formatSelectOption: procurementRequestTypes }}\r\n        </i>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template columnDef="referenceDocument" let-rowData="rowData">\r\n      <div>{{ rowData.referenceDocument }}</div>\r\n      <div>{{ rowData.referenceDocumentDesc }}</div>\r\n    </ng-template>\r\n\r\n    <ng-template columnDef="recepient" let-rowData="rowData">\r\n      <div>{{ rowData.recepient }}</div>\r\n      <div>{{ rowData.recepientDesc }}</div>\r\n    </ng-template>\r\n\r\n    <ng-template columnDef="materials" let-rowData="rowData">\r\n      <div>\r\n        <a style="font-weight: bold;" (click)="openPart(rowData)">{{ rowData.materials }}</a>\r\n      </div>\r\n      <div *ngIf="rowData.materialsDesc">\r\n        <i>{{ rowData.materialsDesc }}</i>\r\n      </div>\r\n      <div *ngIf="!rowData.materialsDesc && rowData.numberOfRecords">\r\n        <i>{{ rowData.numberOfRecords }} {{ getComponentName() + ".items" | translate }}</i>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template columnDef="status" let-rowData="rowData">\r\n      <div>\r\n        <b>{{ getStatusLabel(rowData.status) }}</b>\r\n      </div>\r\n      <div>\r\n        <i>\r\n          {{ rowData.statusDesc | date: "yyyy/MM/dd":"":translateService.currentLang }}\r\n        </i>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template columnDef="statusDate" let-rowData="rowData">\r\n      {{ rowData.statusDate | date: "yyyy/MM/dd":"":translateService.currentLang }}\r\n    </ng-template>\r\n\r\n    <ng-template columnDef="expectedOn" let-rowData="rowData">\r\n      <span *ngIf="rowData.status !== awPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CANCELED">\r\n        {{ rowData.expectedOn | date: "yyyy/MM/dd":"":translateService.currentLang }}\r\n      </span>\r\n    </ng-template>\r\n\r\n    <ng-template columnDef="criticity" let-rowData="rowData">\r\n      <span *ngIf="rowData.criticity === awPropertiesConstants.LOGISTICAL_CRITICALITY_IMMEDIATE">\r\n        {{ getComponentName() + ".immediate" | translate }}\r\n      </span>\r\n      <span *ngIf="rowData.criticity === awPropertiesConstants.LOGISTICAL_CRITICALITY_URGENT">\r\n        {{ getComponentName() + ".urgent" | translate }}\r\n      </span>\r\n      <span *ngIf="rowData.criticity === awPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE">\r\n        {{ getComponentName() + ".routine" | translate }}\r\n      </span>\r\n    </ng-template>\r\n\r\n    <ng-template columnDef="progress" let-rowData="rowData">\r\n      <div>\r\n        <div>\r\n          <span style="display: inline-block; min-width: 8rem;">{{\r\n            getComponentName() + ".procurement" | translate\r\n          }}</span>\r\n\r\n          <span\r\n            class="bold"\r\n            [ngClass]="{\r\n              \'served--nok\': rowData.servedNb == 0,\r\n              \'served--ok\': rowData.servedNb > 0 && rowData.isServed,\r\n              \'served--warning\': rowData.servedNb > 0 && !rowData.isServed\r\n            }"\r\n          >\r\n            <ng-container *ngIf="rowData.servedNb == 0">\r\n              {{ getComponentName() + ".notServed" | translate }}\r\n            </ng-container>\r\n            <ng-container *ngIf="rowData.servedNb > 0 && !rowData.isServed">\r\n              {{ getComponentName() + ".partiallyServed" | translate }}\r\n            </ng-container>\r\n            <ng-container *ngIf="rowData.servedNb > 0 && rowData.isServed">\r\n              {{ getComponentName() + ".served" | translate }}\r\n            </ng-container>\r\n          </span>\r\n        </div>\r\n\r\n        <div>{{ rowData.servedNb }} / {{ rowData.requestedQuantity }}</div>\r\n      </div>\r\n\r\n      <div\r\n        style="margin-top: 8px;"\r\n        *ngIf="\r\n          rowData.procurementRequestDescription == awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE_ES ||\r\n          rowData.procurementRequestDescription == awPropertiesConstants.PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING_ES\r\n        "\r\n      >\r\n        <div>\r\n          <span style="display: inline-block; min-width: 8rem;">{{ getComponentName() + ".reverse" | translate }}</span>\r\n\r\n          <span\r\n            class="bold"\r\n            [ngClass]="{\r\n              \'served--nok\': rowData.notReversedNb > 0 && rowData.reversedNb == 0,\r\n              \'served--ok\': rowData.reversedNb > 0 && rowData.notReversedNb == 0,\r\n              \'served--warning\': rowData.notReversedNb > 0 && rowData.reversedNb > 0\r\n            }"\r\n          >\r\n            <ng-container *ngIf="rowData.notReversedNb > 0 && rowData.reversedNb == 0">\r\n              {{ getComponentName() + ".notReversed" | translate }}\r\n            </ng-container>\r\n            <ng-container *ngIf="rowData.notReversedNb > 0 && rowData.reversedNb > 0">\r\n              {{ getComponentName() + ".partiallyReversed" | translate }}\r\n            </ng-container>\r\n            <ng-container *ngIf="rowData.reversedNb > 0 && rowData.notReversedNb == 0">\r\n              {{ getComponentName() + ".reversed" | translate }}\r\n            </ng-container>\r\n          </span>\r\n        </div>\r\n\r\n        <div>{{ rowData.reversedNb }} / {{ rowData.notReversedNb + rowData.reversedNb }}</div>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template columnDef="availableQuantity" let-rowData="rowData">\r\n      <div\r\n        class="base-label availability"\r\n        [ngClass]="{\r\n          ok: rowData.ok,\r\n          warning: rowData.warning,\r\n          nok: rowData.nok\r\n        }"\r\n      >\r\n        {{ rowData.availableQuantity }}\r\n      </div>\r\n    </ng-template>\r\n  </a-table>\r\n\r\n  <aw-procurement-request-popup\r\n    *ngIf="showProcurementRequestDialog"\r\n    [(display)]="showProcurementRequestDialog"\r\n    [workOrder]="bidmWorkOrder"\r\n    [workOrderStatus]="woStatus"\r\n    [workPackage]="bidmProjectDTO"\r\n    [bidtProcReqItem]="\r\n      procReqItemsTableDataSource.dataSelection[0]\r\n        ? procReqItemsTableDataSource.dataSelection[0].bidtProcReqItem\r\n        : undefined\r\n    "\r\n    [procurementRequest]="\r\n      procReqItemsTableDataSource.dataSelection[0] ? procReqItemsTableDataSource.dataSelection[0]._obj : undefined\r\n    "\r\n    (onValidate)="onUpdateProcurementRequest($event)"\r\n  >\r\n  </aw-procurement-request-popup>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/main/maintenance/procurement-request/procurement-requests-table.component.scss':
      /*!************************************************************************************************!*\
  !*** ./src/app/main/maintenance/procurement-request/procurement-requests-table.component.scss ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          ':host .table-filters {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-right: 8px; }\n  :host .table-filters > .aw-icon {\n    font-size: 1.125rem;\n    line-height: 2rem;\n    width: 2rem; }\n  :host .procurement-alert {\n  font-weight: 600;\n  align-content: center;\n  display: inline-block;\n  width: 50%; }\n  :host .progress {\n  color: #000; }\n  :host .ok {\n  background-color: #4caf50 !important; }\n  :host .warning {\n  background-color: #ffc107 !important; }\n  :host .nok {\n  background-color: #f6685e !important; }\n  :host .procurement--nok {\n  background-color: #f6685e; }\n  :host .procurement--ok {\n  background-color: #4caf50; }\n  :host .procurement--warning {\n  background-color: #ffc107; }\n  :host .served--nok {\n  color: #f6685e !important; }\n  :host .served--ok {\n  color: #4caf50 !important; }\n  :host .served--warning {\n  color: #ffc107 !important; }\n  :host .base-label {\n  font-weight: bold;\n  display: inline-block;\n  align-content: center;\n  width: 50%; }\n  :host .availability {\n  padding: 4px;\n  color: #000;\n  border-radius: 4px; }\n  :host .filter-block {\n  margin-left: 16px;\n  display: inline-block;\n  min-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWludGVuYW5jZS9wcm9jdXJlbWVudC1yZXF1ZXN0L2Q6XFxQcm9maWxlc1xcYXByYWRoYW5cXERlc2t0b3BcXEFlcm93ZWJiXFxQUk9KRUNUU1xcZ2l0aHViX3BhZ2VzL3NyY1xcYXBwXFxtYWluXFxtYWludGVuYW5jZVxccHJvY3VyZW1lbnQtcmVxdWVzdFxccHJvY3VyZW1lbnQtcmVxdWVzdHMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbnRlbmFuY2UvcHJvY3VyZW1lbnQtcmVxdWVzdC9kOlxcUHJvZmlsZXNcXGFwcmFkaGFuXFxEZXNrdG9wXFxBZXJvd2ViYlxcUFJPSkVDVFNcXGdpdGh1Yl9wYWdlcy9zcmNcXHN0eWxlc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3Byb2N1cmVtZW50LXJlcXVlc3QvZDpcXFByb2ZpbGVzXFxhcHJhZGhhblxcRGVza3RvcFxcQWVyb3dlYmJcXFBST0pFQ1RTXFxnaXRodWJfcGFnZXMvc3JjXFxzdHlsZXNcXF9jb25zdGFudHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ29CRSxhQUFhO0VBQ2IsbUJBQW1CO0VEakJqQixtQkFBbUI7RUFDbkIsaUJFb0NjLEVBQUE7RUZ6Q2xCO0lBUU0sbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXLEVBQUE7RUFWakI7RUFjSSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixVQUFVLEVBQUE7RUFqQmQ7RUFxQkksV0FBVyxFQUFBO0VBckJmO0VBeUJJLG9DQUEwQyxFQUFBO0VBekI5QztFQTZCSSxvQ0FBb0MsRUFBQTtFQTdCeEM7RUFpQ0ksb0NBQXdDLEVBQUE7RUFqQzVDO0VBcUNJLHlCRWhCZ0IsRUFBQTtFRnJCcEI7RUF5Q0kseUJFdkJrQixFQUFBO0VGbEJ0QjtFQTZDSSx5QkUxQlksRUFBQTtFRm5CaEI7RUFpREkseUJBQTZCLEVBQUE7RUFqRGpDO0VBcURJLHlCQUErQixFQUFBO0VBckRuQztFQXlESSx5QkFBeUIsRUFBQTtFQXpEN0I7RUE2REksaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsVUFBVSxFQUFBO0VBaEVkO0VBb0VJLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7RUF0RXRCO0VBMEVJLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW50ZW5hbmNlL3Byb2N1cmVtZW50LXJlcXVlc3QvcHJvY3VyZW1lbnQtcmVxdWVzdHMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiY29uc3RhbnRzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbjpob3N0IHtcclxuICAudGFibGUtZmlsdGVycyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6ICRtYXJnaW4tdmFsdWU7XHJcblxyXG4gICAgJiA+IC5hdy1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAucHJvY3VyZW1lbnQtYWxlcnQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAucHJvZ3Jlc3Mge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG5cclxuICAub2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLndhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnByb2N1cmVtZW50LS1ub2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1saWdodDE7XHJcbiAgfVxyXG5cclxuICAucHJvY3VyZW1lbnQtLW9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgfVxyXG5cclxuICAucHJvY3VyZW1lbnQtLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICB9XHJcblxyXG4gIC5zZXJ2ZWQtLW5vayB7XHJcbiAgICBjb2xvcjogJHJlZC1saWdodDEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zZXJ2ZWQtLW9rIHtcclxuICAgIGNvbG9yOiAkZ3JlZW4tbGlnaHQxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2VydmVkLS13YXJuaW5nIHtcclxuICAgIGNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYmFzZS1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuYXZhaWxhYmlsaXR5IHtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci1ibG9jayB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbHMgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuQG1peGluIGJ1dHRvbi1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yOiBudWxsKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlcixcclxuICAmOm5vdCg6ZGlzYWJsZWQpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6IGlmKCRib3JkZXItY29sb3IgPT0gbnVsbCwgJGNvbG9yLCAkYm9yZGVyLWNvbG9yKTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LWNvbHVtbigpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4LXJvdygpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbkBtaXhpbiBpbnB1dCgpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweCAwIDRweCAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtZGlzYWJsZWQoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0tZGlzYWJsZWQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1peGluIGlucHV0LWZvY3VzKCkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRib3JkZXItY29sb3ItLWZvY3VzO1xyXG59XHJcblxyXG5AbWl4aW4gaW5wdXQtaG92ZXIoKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvci0taG92ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzZWFyY2gtY3JpdGVyaWEtY29udGFpbmVyIHtcclxuICAuYWR2YW5jZWQtY3JpdGVyaWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1jcml0ZXJpYS1mb290ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYygjeyRtYXJnaW4tdmFsdWV9ICogMik7XHJcblxyXG4gICAgLmFkdmFuY2VkLWNyaXRlcmlhLXRvZ2dsZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAgIC5hZHZhbmNlZC1jcml0ZXJpYS10b2dnbGVyLW1vcmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1sZXNzLFxyXG4gICAgICAuYWR2YW5jZWQtY3JpdGVyaWEtdG9nZ2xlci1tb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5hdy1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoI3skbWFyZ2luLXZhbHVlfSAqIDQpO1xyXG5cclxuICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuXHJcbiAgICAmLnJlcXVpcmVkIHtcclxuICAgICAgQGluY2x1ZGUgZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQoKTtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogJHJlZC1kYXJrMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEuNzVyZW07XHJcblxyXG4gICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1hcmdpbi12YWx1ZX0gKiAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtbigpO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgJiA+IGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtb3ZlcmZsb3ctaGlkZGVuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR3JpZCBmb3JtIGNvbnRyb2xzIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBncmlkLWZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9MYXRpbldlYk1lZGl1bVwiO1xyXG5cclxuICAmID4gaW5wdXQgKyBwLW1lc3NhZ2UgPiAudWktbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYWN0aW9ucyB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICYgPiAuZm9ybS1jb250cm9sLWFjdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMjU1LCAyNTUsIDI1NSkgNjAlLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmZvcm0tY29udHJvbC1hY3Rpb25zIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG5cclxuICAgICAgLmF3LWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLWJ0bixcclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiAkYm9yZGVyLXN0eWxlO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS1jb250cm9sLXdpdGgtYnRuIHtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjc1cmVtKTtcclxuXHJcbiAgICAgICYuYXctY2FsZW5kYXIgLnVpLWlucHV0dGV4dCxcclxuICAgICAgJi5hdy1kcm9wZG93biAudWktZHJvcGRvd24sXHJcbiAgICAgICYuYXctaW5wdXQsXHJcbiAgICAgICYuYXctdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWNhbGVuZGFyIHtcclxuICAgICAgLy8gRklYTUU6IGZpeCBhbiBVSSBpc3N1ZSBvbiBQcmltZU5HIGNhbGVuZGFyIGNvbXBvbmVudDsgdG8gcmVtb3ZlIHdoZW4gaXNzdWUgd2lsbCBiZSBmaXhlZCB1cHN0cmVhbVxyXG4gICAgICBvdmVyZmxvdzogaW5pdGlhbDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmF3LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICYuZGlzYWJsZWQge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICAgLmF3LWljb246bm90KC5yZWFkLW9ubHktbGluaykge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyAvLyBub25lXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sLWRhdGEge1xyXG4gICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcclxuICAgICAgcGFkZGluZzogMnB4IDAgNHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1uaW1wLFxyXG4gICAgLmJ0bi1leHRlcm5hbC1saW5rLXdyYXBwZXIsXHJcbiAgICAuYnRuLWNsZWFyLXdyYXBwZXIsXHJcbiAgICAuYnRuLWZpbGUtdXBsb2FkLXdyYXBwZXIsXHJcbiAgICAuYnRuLXNlYXJjaC13cmFwcGVyIHtcclxuICAgICAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1maWxlLXVwbG9hZC13cmFwcGVyIHtcclxuICAgICAgLmF3LWZpbGV1cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLWJ1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxLjFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC51aS1idXR0b24taWNvbi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMS4xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCJcXGU5MzRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdy1pY29uIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1jbGVhciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmJ0bi1zZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxLjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0tY29udHJvbC13aXRoLXJhZGlvYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGZsZXgtcm93KCk7XHJcblxyXG4gICAgJiA+IC5hdy1yYWRpb2J1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyICogI3skbWFyZ2luLXZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtZ2VuZXJpYyB7XHJcbiAgQGluY2x1ZGUgZmxleC1yb3coKTtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcblxyXG4gICYgPiBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmID4gLmFsZXJ0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuXHJcbiAgICAmLmFsZXJ0LS1ub2sge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWxpZ2h0MTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFsZXJ0LS1vayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1saWdodDE7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbGVydC0td2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1mb3JtLWNvbnRyb2wtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkcmVkLWRhcmsxO1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtY2FsZW5kYXIge1xyXG4gICYudWktaW5wdXR3cmFwcGVyLWZvY3VzIHtcclxuICAgIC51aS1jYWxlbmRhciAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgaW5wdXQtaG92ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtZm9ybS1sYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogJGNoZWNrYm94LWhlaWdodDtcclxuICB3aWR0aDogJGNoZWNrYm94LWhlaWdodDtcclxuXHJcbiAgLnVpLWNoa2JveCB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktY2hrYm94LWJveCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICYudWktc3RhdGUtZGlzYWJsZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3ItLWhvdmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCgudWktc3RhdGUtZGlzYWJsZWQpLnVpLXN0YXRlLWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyLWNvbG9yLS1mb2N1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBncmlkLWRyb3Bkb3duIHtcclxuICAudWktZHJvcGRvd24ge1xyXG4gICAgQGluY2x1ZGUgaW5wdXQoKTtcclxuXHJcbiAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgQGluY2x1ZGUgaW5wdXQtZGlzYWJsZWQoKTtcclxuXHJcbiAgICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KC51aS1zdGF0ZS1kaXNhYmxlZCkudWktc3RhdGUtZm9jdXMge1xyXG4gICAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG5cclxuICAgICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWNsZWFyLWljb24sXHJcbiAgICAudWktZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51aS1kcm9wZG93bi1jbGVhci1pY29uIHtcclxuICAgICAgcmlnaHQ6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLXRyaWdnZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICBAaW5jbHVkZSB0ZXh0LW92ZXJmbG93LWhpZGRlbigpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIgKiAxLjc1cmVtKTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZml4ZWQtd2lkdGggLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1maWxldXBsb2FkIHtcclxuICBAZXh0ZW5kIC5hdy1idG47XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC51aS1maWxldXBsb2FkLWNob29zZSB7XHJcbiAgICBAaW5jbHVkZSBmbGV4LXJvdygpO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IDAgJG1hcmdpbi12YWx1ZTtcclxuXHJcbiAgICAudWktYnV0dG9uLWljb24tbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWJ1dHRvbi10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZ3JpZC1pbnB1dCgpIHtcclxuICBAaW5jbHVkZSBpbnB1dCgpO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1kaXNhYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC1ob3ZlcigpO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGdyaWQtdGV4dGFyZWEge1xyXG4gIEBpbmNsdWRlIGdyaWQtaW5wdXQoKTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogJGZvcm0tY29udHJvbC1oZWlnaHQ7XHJcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuQG1peGluIGdyaWQtcmFkaW9idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6ICRyYWRpb2J1dHRvbi1oZWlnaHQ7XHJcblxyXG4gIC51aS1yYWRpb2J1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuXHJcbiAgICAudWktcmFkaW9idXR0b24tYm94IHtcclxuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvci0tZm9jdXM7XHJcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLnVpLXN0YXRlLWRpc2FibGVkIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yLS1ob3ZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpub3QoLnVpLXN0YXRlLWRpc2FibGVkKS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnVpLXJhZGlvYnV0dG9uLWljb24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbkBtaXhpbiBjYWxlbmRhci1wYW5lbCB7XHJcbiAgLnVpLWRhdGVwaWNrZXI6bm90KC51aS1kYXRlcGlja2VyLWlubGluZSkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1zdHlsZTogJGJvcmRlci1zdHlsZTtcclxuICAgIGJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZHJvcGRvd24tcGFuZWwge1xyXG4gIC51aS1kcm9wZG93bi1wYW5lbCB7XHJcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggJGJvcmRlci1zdHlsZSAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gICAgLnVpLWRyb3Bkb3duLWl0ZW1zLXdyYXBwZXIgLnVpLWRyb3Bkb3duLWxpc3Qge1xyXG4gICAgICAudWktZHJvcGRvd24taXRlbSB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICAgICAgICBwYWRkaW5nOiAkbWFyZ2luLXZhbHVlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6ICM1OTU5NTk7XHJcbiRhY2NlbnQtY29sb3I6ICMwMTU3OWI7XHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZThlYmVkO1xyXG4kdG9wYmFyLWNvbG9yOiAjZmFmYWZhO1xyXG5cclxuLy8gJHByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuLy8gJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4vLyAkcHJpbWFyeS10ZXh0LWNvbG9yOiAjZThlOGU4O1xyXG4vLyAkc2Vjb25kYXJ5LXRleHQtY29sb3I6ICNmZmY7XHJcbi8vICRhY2NlbnQtY29sb3I6ICM5Y2RjZmU7XHJcblxyXG4kYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWRpc2FibGVkOiB0cmFuc3BhcmVudDtcclxuJGJvcmRlci1jb2xvci0tZm9jdXM6ICRhY2NlbnQtY29sb3I7XHJcbiRib3JkZXItY29sb3ItLWhvdmVyOiAjMWExYTFhO1xyXG5cclxuJGdyZWVuLWRhcmsxOiAjMjc2MzJhO1xyXG4kZ3JlZW4tbGlnaHQxOiAjNGNhZjUwO1xyXG4kb3JhbmdlOiAjZmZjMTA3O1xyXG4kcmVkLWRhcmsxOiAjYTgyNTI1O1xyXG4kcmVkLWxpZ2h0MTogI2Y2Njg1ZTtcclxuJGJsdWUtbGlnaHQxOiAjYjhkMGU4O1xyXG4kYmx1ZS1kYXJrMTogIzAwNmVhOTtcclxuJGdyZXkxOiAjYzhkNGQ2O1xyXG4keWVsbG93MTogI2RkZGYwMDtcclxuXHJcbiRjcml0aWNhbC12YWx1ZS1kYXJrOiAjZmJhNjQzOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNyaXRpY2FsLXZhbHVlLWxpZ2h0OiAjZmVjYzhlOyAvLyBUT0RPOiByZW1vdmUgaXRcclxuJGNhbGVuZGFyLXllbGxvdzogI2VmZWZiMDsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcbiRiYWQtdmFsdWUtZGFyazogI2ZmNjc1ODsgLy8gVE9ETzogcmVtb3ZlIGl0XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG4kYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kZm9udC1mYW1pbHk6IFwiTGF0b0xhdGluV2ViXCI7XHJcbiRmb250LXNpemU6IDAuODc1cmVtO1xyXG4kZm9udC13ZWlnaHQ6IDQwMDtcclxuJGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcclxuJG1hcmdpbi12YWx1ZTogOHB4O1xyXG4kcGFnZS1tYXgtd2lkdGg6IDEzNjZweDtcclxuJGF0dHJpYnV0ZXMtY29sdW1uLXdpZHRoLTQ6IDQ7XHJcbiRhdHRyaWJ1dGVzLWNvbHVtbi13aWR0aC0zOiAzO1xyXG4kYXR0cmlidXRlcy1jb2x1bW4td2lkdGgtMjogMjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiRsZWZ0LXNpZGViYXItd2lkdGgtLWNvbGxhcHNlZDogNTBweDtcclxuJGxlZnQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tY29sbGFwc2VkOiA1MHB4O1xyXG4kcmlnaHQtc2lkZWJhci13aWR0aC0tZXhwYW5kZWQ6IDIyMHB4O1xyXG4kdG9wYmFyLWhlaWdodDogNDBweDtcclxuJG1haW5iYXItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiRtYWluYmFyLWJvcmRlci13aWR0aDogMnB4O1xyXG4kcGFnZS1oZWFkZXItaGVpZ2h0OiA1LjVyZW07XHJcbiRmb3JtLWNvbnRyb2wtaGVpZ2h0OiAyLjVyZW07XHJcbiRjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW07XHJcbiRyYWRpb2J1dHRvbi1oZWlnaHQ6IDEuMjVyZW07XHJcbiJdfQ== */';

        /***/
      },

    /***/ './src/app/main/maintenance/procurement-request/procurement-requests-table.component.ts':
      /*!**********************************************************************************************!*\
  !*** ./src/app/main/maintenance/procurement-request/procurement-requests-table.component.ts ***!
  \**********************************************************************************************/
      /*! exports provided: ProcurementRequestsTableComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ProcurementRequestsTableComponent',
          function() {
            return ProcurementRequestsTableComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ './node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
        );
        /* harmony import */ var _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/components/table/table-data-source */ './src/app/shared/components/table/table-data-source.ts'
        );
        /* harmony import */ var _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/constants/aw-properties-constants */ './src/app/shared/constants/aw-properties-constants.ts'
        );
        /* harmony import */ var _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/constants/bido-function-type-constants */ './src/app/shared/constants/bido-function-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/constants/bidt-stock-mvt-type-constants */ './src/app/shared/constants/bidt-stock-mvt-type-constants.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../../../shared/constants/generic-property-constants */ './src/app/shared/constants/generic-property-constants.ts'
        );
        /* harmony import */ var _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../../../shared/enums/component-open-mode.enum */ './src/app/shared/enums/component-open-mode.enum.ts'
        );
        /* harmony import */ var _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../../../shared/services/properties.service */ './src/app/shared/services/properties.service.ts'
        );
        /* harmony import */ var _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/services/serialization.service */ './src/app/shared/services/serialization.service.ts'
        );
        /* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/services/session.service */ './src/app/shared/services/session.service.ts'
        );
        /* harmony import */ var _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/services/tab.service */ './src/app/shared/services/tab.service.ts'
        );
        /* harmony import */ var _shared_types_generic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/types/generic-component */ './src/app/shared/types/generic-component.ts'
        );
        /* harmony import */ var _shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/utils/list-utils */ './src/app/shared/utils/list-utils.ts'
        );
        /* harmony import */ var _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/utils/logistic-utils */ './src/app/shared/utils/logistic-utils.ts'
        );
        /* harmony import */ var _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../shared/utils/number-utils */ './src/app/shared/utils/number-utils.ts'
        );
        /* harmony import */ var _shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../../shared/utils/object-utils */ './src/app/shared/utils/object-utils.ts'
        );
        /* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../../shared/utils/string-utils */ './src/app/shared/utils/string-utils.ts'
        );
        /* harmony import */ var _logistics_logistics_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ../../logistics/logistics.service */ './src/app/main/logistics/logistics.service.ts'
        );
        /* harmony import */ var _procurement_requests_table_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./procurement-requests-table.service */ './src/app/main/maintenance/procurement-request/procurement-requests-table.service.ts'
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

        var ProcurementRequestsTableComponent = /** @class */ (function(_super) {
          __extends(ProcurementRequestsTableComponent, _super);
          function ProcurementRequestsTableComponent(
            serializationService,
            tabService,
            sessionService,
            logisticsService,
            propertiesService,
            translateService,
            procurementRequestsTableService
          ) {
            var _this =
              _super.call(
                this,
                _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Write
              ) || this;
            _this.serializationService = serializationService;
            _this.tabService = tabService;
            _this.sessionService = sessionService;
            _this.logisticsService = logisticsService;
            _this.propertiesService = propertiesService;
            _this.translateService = translateService;
            _this.procurementRequestsTableService = procurementRequestsTableService;
            _this.stockMvtTableFiltersVisible = false;
            _this.okKey = 1;
            _this.warningKey = 2;
            _this.nOkKey = 3;
            _this.defaultRequestManagementKey = 'requestManagement';
            _this.component = ProcurementRequestsTableComponent_1;
            _this.askParentRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            return _this;
          }
          ProcurementRequestsTableComponent_1 = ProcurementRequestsTableComponent;
          Object.defineProperty(ProcurementRequestsTableComponent.prototype, 'workOrder', {
            set: function(workOrder) {
              if (!!workOrder) {
                this.bidmWorkOrderFromInput = workOrder;
                this.bidmWorkOrder = workOrder;
              }
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(ProcurementRequestsTableComponent.prototype, 'workPackages', {
            set: function(workPackagesDTO) {
              if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__['ListUtils'].isNullOrEmpty(workPackagesDTO)) {
                this.workPackageDTOIdsFromInput = workPackagesDTO.map(function(workPackageDTO) {
                  return {
                    projectId: workPackageDTO.projectId
                  };
                });
              }
              this.loadData();
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(ProcurementRequestsTableComponent.prototype, 'workPackageIds', {
            set: function(workPackagesId) {
              if (!_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__['ListUtils'].isNullOrEmpty(workPackagesId)) {
                this.workPackageDTOIdsFromInput = workPackagesId.map(function(workPackageId) {
                  return {
                    projectId: workPackageId
                  };
                });
              }
              this.loadData();
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(ProcurementRequestsTableComponent.prototype, 'procurementRequests', {
            set: function(procurementRequests) {
              if (!!procurementRequests) {
                this.procurementRequestsFromInput = procurementRequests;
              }
              this.loadData();
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(ProcurementRequestsTableComponent.prototype, 'requestManagementKey', {
            set: function(requesteKey) {
              if (!!requesteKey) {
                this.initRequestManagementLabel(requesteKey);
              }
            },
            enumerable: true,
            configurable: true
          });
          ProcurementRequestsTableComponent.prototype.ngOnInit = function() {
            this.init();
          };
          ProcurementRequestsTableComponent.prototype.init = function() {
            this.initRequestManagementLabel(undefined);
            this.originalProcReqRow = [];
            this.procReqItemFiltersAvailabilityList = [];
            this.awPropertiesConstants =
              _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants'];
            this.initProcurementRequestsTableDataSource();
          };
          ProcurementRequestsTableComponent.prototype.initRequestManagementLabel = function(fromInputKey) {
            var _this = this;
            var requestManagementKey = this.defaultRequestManagementKey;
            if (!!fromInputKey) {
              requestManagementKey = fromInputKey;
            }
            var requestManagement = this.getTranslateKey(requestManagementKey);
            this.translateService.get([requestManagement]).subscribe(function(results) {
              _this.requestManagementLabel = '' + results[requestManagement];
            });
          };
          ProcurementRequestsTableComponent.prototype.loadData = function() {
            this.originalProcReqRow = [];
            this.procReqItemFiltersAvailabilityList = [];
            this.selectedProcReqFilterStatusValue = undefined;
            this.selectedProcReqFilterWPValue = -1;
            this.loadProcurementStatusMap();
            this.loadProcurementTypeMap();
            this.initProcurementRequestsTableDataSource();
            this.loadProcurementRequestAndQuantity();
            this.setStockMvtTableFiltersAvailabilityList();
          };
          ProcurementRequestsTableComponent.prototype.getComponentName = function() {
            return _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
              .MAI_PROCUREMENT_REQUESTS_TABLE;
          };
          ProcurementRequestsTableComponent.prototype.loadProcurementStatusMap = function() {
            var _this = this;
            this.procurementRequestStatusList = [];
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                  .PROCUREMENT_REQUEST_STATUS_MAP
              )
              .subscribe(function(res) {
                _this.procurementRequestStatusList = res;
                _this.procReqItemStatusList = res;
              });
          };
          ProcurementRequestsTableComponent.prototype.loadProcurementTypeMap = function() {
            var _this = this;
            this.procurementRequestTypes = [];
            this.propertiesService
              .getValue(
                _shared_constants_generic_property_constants__WEBPACK_IMPORTED_MODULE_9__['GenericPropertyConstants']
                  .PROCUREMENT_REQUEST_TYPE_MAP
              )
              .subscribe(function(res) {
                _this.procurementRequestTypes = res;
              });
          };
          ProcurementRequestsTableComponent.prototype.getProcurementRequestAndQuantityAsObservable = function(
            bidmWorkOrder,
            workPackageDTOIdsTab
          ) {
            return this.procurementRequestsTableService.findProcReqItemsAndStockQuantityIndicators(
              bidmWorkOrder,
              workPackageDTOIdsTab
            );
          };
          ProcurementRequestsTableComponent.prototype.loadProcurementRequestAndQuantity = function() {
            var _this = this;
            if (
              !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__['ListUtils'].isNullOrEmpty(
                this.procurementRequestsFromInput
              )
            ) {
              this.loadDataOnProcReqReception(this.procurementRequestsFromInput);
            } else if (!!this.workPackageDTOIdsFromInput) {
              this.procurementRequestsTableService
                .findProcReqItemsAndStockQuantityIndicators(undefined, this.workPackageDTOIdsFromInput)
                .subscribe(function(results) {
                  _this.procurementRequestsFromInput = results;
                  _this.loadDataOnProcReqReception(results);
                });
            }
          };
          ProcurementRequestsTableComponent.prototype.loadDataOnProcReqReception = function(results) {
            var _this = this;
            this.procReqItemsTableDataSource.deleteDataSelection();
            this.procReqItemsTableDataSource.setData([]);
            results.forEach(function(elt) {
              var procReqRow = _this.createProcReqItemRow(elt);
              _this.procReqItemsTableDataSource.addData(procReqRow);
              _this.setWPfiltersList();
            });
          };
          ProcurementRequestsTableComponent.prototype.createProcReqItemRow = function(procurementRequest) {
            var _this = this;
            var servedMaterialNb = 0;
            var reservedMaterialNb = 0;
            if (
              !_shared_utils_list_utils__WEBPACK_IMPORTED_MODULE_16__['ListUtils'].isNullOrEmpty(
                procurementRequest.procReqItemsAndQtyIndicatorsDTO
              )
            ) {
              var stockMvts = procurementRequest.procReqItemsAndQtyIndicatorsDTO[0].workshopEntries;
              if (stockMvts) {
                servedMaterialNb = stockMvts
                  .filter(function(stockMvt) {
                    return (
                      stockMvt.mvtStatus ===
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                          .MM_MVT_STATUS_EXECUTED_KEY &&
                      ((stockMvt.bidtStockMvtTypeId ===
                        _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_7__[
                          'BidtStockMvtTypeConstant'
                        ].RECEIPT &&
                        procurementRequest.bidtWarehouseReceipt.whCategory ===
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__[
                            'AWPropertiesConstants'
                          ].WAREHOUSE_CATEGORY_WAREHOUSE) ||
                        (stockMvt.bidtStockMvtTypeId ===
                          _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_7__[
                            'BidtStockMvtTypeConstant'
                          ].WORKSHOP_ENTRY &&
                          procurementRequest.bidtWarehouseReceipt.whCategory ===
                            _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__[
                              'AWPropertiesConstants'
                            ].WAREHOUSE_CATEGORY_WORKSHOP))
                    );
                  })
                  .filter(function(stockMvt) {
                    return stockMvt.stockMvtQuantity;
                  })
                  .map(function(stockMvt) {
                    return _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_18__['NumberUtils'].fromString(
                      stockMvt.stockMvtQuantity
                    );
                  })
                  .reduce(function(a, b) {
                    return a + b;
                  }, 0);
                reservedMaterialNb = stockMvts
                  .filter(function(stockMvt) {
                    return (
                      stockMvt.mvtStatus !==
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                          .MM_MVT_STATUS_EXECUTED_KEY &&
                      stockMvt.mvtStatus !==
                        _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                          .MM_MVT_STATUS_CANCELED_KEY &&
                      (stockMvt.stockMvtSn || stockMvt.stockMvtBatchNumber) &&
                      ((stockMvt.bidtStockMvtTypeId ===
                        _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_7__[
                          'BidtStockMvtTypeConstant'
                        ].RECEIPT &&
                        procurementRequest.bidtWarehouseReceipt.whCategory ===
                          _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__[
                            'AWPropertiesConstants'
                          ].WAREHOUSE_CATEGORY_WAREHOUSE) ||
                        (stockMvt.bidtStockMvtTypeId ===
                          _shared_constants_bidt_stock_mvt_type_constants__WEBPACK_IMPORTED_MODULE_7__[
                            'BidtStockMvtTypeConstant'
                          ].WORKSHOP_ENTRY &&
                          procurementRequest.bidtWarehouseReceipt.whCategory ===
                            _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__[
                              'AWPropertiesConstants'
                            ].WAREHOUSE_CATEGORY_WORKSHOP))
                    );
                  })
                  .filter(function(stockMvt) {
                    return stockMvt.stockMvtQuantity;
                  })
                  .map(function(stockMvt) {
                    return _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_18__['NumberUtils'].fromString(
                      stockMvt.stockMvtQuantity
                    );
                  })
                  .reduce(function(a, b) {
                    return a + b;
                  }, 0);
              }
            }
            var bidtProcReqItems = procurementRequest.procReqItemsAndQtyIndicatorsDTO;
            procurementRequest.bidtProcReqItems = bidtProcReqItems;
            var bidtProcurementRequestDTO = __assign({}, procurementRequest, bidtProcReqItems);
            var servedIndicators = _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_17__[
              'LogisticalUtils'
            ].getServedIndicators(bidtProcurementRequestDTO);
            return procurementRequest.procReqItemsAndQtyIndicatorsDTO.map(function(procReqItemsAndQtyIndicatorsDTO) {
              var procReqItemAndQtyRow = {
                procurementRequestId: procurementRequest.id,
                id: procReqItemsAndQtyIndicatorsDTO.id,
                procurementRequest: procurementRequest.procCode,
                procurementRequestDescription: procurementRequest.procType,
                referenceDocument: !!procurementRequest.bidmWorkOrder ? procurementRequest.bidmWorkOrder.woCode : '',
                referenceDocumentDesc: !!procurementRequest.bidmWorkOrder
                  ? procurementRequest.bidmWorkOrder.woDescription
                  : '',
                recepient: !!procurementRequest.bidtSiteReceipt ? procurementRequest.bidtSiteReceipt.siteName : '',
                recepientDesc: !!procurementRequest.bidtWarehouseReceipt
                  ? procurementRequest.bidtWarehouseReceipt.whName
                  : '',
                status: procurementRequest.procStatus,
                statusDate: procurementRequest.statusDate,
                statusDesc: procurementRequest.requestedDate,
                expectedOn: procurementRequest.requestedDate,
                criticity: procurementRequest.criticality,
                servedMaterial: servedMaterialNb,
                reservedMaterial: reservedMaterialNb,
                servedNb: servedIndicators ? servedIndicators.servedNb : 0,
                isServed: servedIndicators ? servedIndicators.isServed : false,
                materials: procReqItemsAndQtyIndicatorsDTO.birePn
                  ? procReqItemsAndQtyIndicatorsDTO.birePn.pnCode
                  : undefined,
                materialsDesc: procReqItemsAndQtyIndicatorsDTO.birePn
                  ? procReqItemsAndQtyIndicatorsDTO.birePn.articleDesignation
                  : undefined,
                requestedQuantity: procReqItemsAndQtyIndicatorsDTO.requestedQuantity
                  ? _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_18__['NumberUtils']
                      .roundNumber(
                        _shared_utils_number_utils__WEBPACK_IMPORTED_MODULE_18__['NumberUtils'].fromString(
                          procReqItemsAndQtyIndicatorsDTO.requestedQuantity
                        ),
                        2
                      )
                      .toString()
                  : '',
                notReversedNb: 0,
                reversedNb: 0,
                bidtProcReqItem: procReqItemsAndQtyIndicatorsDTO,
                _obj: procurementRequest
              };
              // Get procurement request item rows
              var procurementRequestItems = _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_17__[
                'LogisticalUtils'
              ].buildProcurementRequestItemsRows(procReqItemAndQtyRow._obj);
              // Search transfer order by bidtProcurementRequestItemId
              var reverseObservables$ = procurementRequestItems
                .map(function(item) {
                  return item.obj.id;
                })
                .map(function(itemId) {
                  return _this.logisticsService.findTransferOrdersByCriteria({
                    transferOrder: { bidtProcReqItemId: itemId },
                    transferOrderStatusExcluded: []
                  });
                });
              Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(reverseObservables$).subscribe(function(results) {
                var transferOrder = results
                  .reduce(function(acc, x) {
                    return acc.concat(x);
                  }, [])
                  .map(function(result) {
                    return result.bidtTransferOrder;
                  })
                  .find(function(to) {
                    return (
                      to.torType ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                        .TRANSFER_ORDER_TYPE_REVERSE_MVT
                    );
                  });
                if (transferOrder) {
                  var reverseProcurementRequestItems = transferOrder.bidtTorItems.map(function(torItem) {
                    // Compute reverse item progress
                    var progress = _shared_utils_logistic_utils__WEBPACK_IMPORTED_MODULE_17__[
                      'LogisticalUtils'
                    ].computeProcurementRequestReverseItemProgress(torItem.pickingMovements);
                    return {
                      obj: torItem,
                      allNb: progress.allNb,
                      reversedNb: progress.reversedNb,
                      notReversedNb: progress.notReversedNb,
                      warehouseName: transferOrder.bidtWarehouseIssue
                        ? transferOrder.bidtWarehouseIssue.whName
                        : undefined,
                      siteName: transferOrder.bidtSiteIssue ? transferOrder.bidtSiteIssue.siteName : undefined
                    };
                  });
                  // Compute transfer ordes's reverse items progress
                  var spareClassResversedNb_1 = 0;
                  var spareClassNotReversedNb_1 = 0;
                  reverseProcurementRequestItems.forEach(function(item) {
                    spareClassResversedNb_1 += item.reversedNb;
                    spareClassNotReversedNb_1 += item.notReversedNb;
                  });
                  procReqItemAndQtyRow.notReversedNb = spareClassNotReversedNb_1;
                  procReqItemAndQtyRow.reversedNb = spareClassResversedNb_1;
                  var tmp = _this.procReqItemsTableDataSource.dataSrc.find(function(d) {
                    return d.id === procReqItemAndQtyRow.id;
                  });
                  if (!!tmp) {
                    _this.procReqItemsTableDataSource.replaceData(tmp, procReqItemAndQtyRow);
                  }
                }
              });
              if (
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .PROCUREMENT_REQUEST_STATUS_CLOSED !== procurementRequest.procStatus
              ) {
                var qLabel_1 = _this.getTranslateKey('quantityQ');
                _this.translateService.get([qLabel_1]).subscribe(function(results) {
                  var availableQuantity = results[qLabel_1] + ' = ' + procReqItemsAndQtyIndicatorsDTO.availableQuantity;
                  procReqItemAndQtyRow = __assign({}, procReqItemAndQtyRow, {
                    availableQuantity: availableQuantity,
                    ok: procReqItemsAndQtyIndicatorsDTO.ok,
                    nok: procReqItemsAndQtyIndicatorsDTO.nok,
                    warning: procReqItemsAndQtyIndicatorsDTO.warning
                  });
                });
              }
              _this.originalProcReqRow.push(procReqItemAndQtyRow);
              return procReqItemAndQtyRow;
            });
          };
          Object.defineProperty(ProcurementRequestsTableComponent.prototype, 'enableOpenProcurementOnAdd', {
            get: function() {
              return (
                this.procReqItemsTableDataSource.dataSelectionCount === 0 &&
                !!this.bidmWorkOrderFromInput &&
                !this.statusState
              );
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(ProcurementRequestsTableComponent.prototype, 'enableOpenProcurementOnEdit', {
            get: function() {
              if (this.procReqItemsTableDataSource.hasDataSelection) {
                var selectedProcurementRequest = this.procReqItemsTableDataSource.dataSelection[0]._obj;
                return (
                  this.procReqItemsTableDataSource.dataSelectionCount === 1 &&
                  !!selectedProcurementRequest.bidmWorkOrder &&
                  (selectedProcurementRequest.procStatus ===
                    _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                      .PROCUREMENT_REQUEST_STATUS_DRAFT ||
                    selectedProcurementRequest.procStatus ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                        .PROCUREMENT_REQUEST_STATUS_PLANNED ||
                    selectedProcurementRequest.procStatus ===
                      _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                        .PROCUREMENT_REQUEST_STATUS_RELEASED) &&
                  !this.isReadOpenMode
                );
              } else {
                return false;
              }
            },
            enumerable: true,
            configurable: true
          });
          ProcurementRequestsTableComponent.prototype.openProcurementRequestDialog = function() {
            var _this = this;
            if (this.procReqItemsTableDataSource.dataSelectionCount === 1) {
              var selectedProcurementRequest = this.procReqItemsTableDataSource.dataSelection[0]._obj;
              this.bidmWorkOrder = selectedProcurementRequest.bidmWorkOrder;
              this.woStatus = this.bidmWorkOrder.calculatedStatus;
              this.bidmProjectDTO = selectedProcurementRequest.projectDTO;
              this.showProcurementRequestDialog = true;
            } else if (this.procReqItemsTableDataSource.dataSelectionCount === 0) {
              this.bidmWorkOrder = this.bidmWorkOrderFromInput;
              var calculateWorkOrderImput = {
                workOrderData: this.bidmWorkOrderFromInput,
                fromLineMaintenance: false
              };
              this.procurementRequestsTableService
                .calculateWorkOrderStatus(calculateWorkOrderImput)
                .subscribe(function(calculateWorkOrderOutput) {
                  _this.woStatus = calculateWorkOrderOutput.workOrderDetail.status;
                  _this.procurementRequestsTableService
                    .findBidmProject(_this.bidmWorkOrderFromInput.projectId)
                    .subscribe(function(result) {
                      _this.bidmProjectDTO = result;
                      _this.showProcurementRequestDialog = true;
                    });
                });
            }
          };
          ProcurementRequestsTableComponent.prototype.getStatusLabel = function(statusValue) {
            var matchingStatus = this.procurementRequestStatusList.find(function(status) {
              return status.value === statusValue;
            });
            return matchingStatus
              ? _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_20__['StringUtils'].orEmpty(matchingStatus.label)
              : '';
          };
          ProcurementRequestsTableComponent.prototype.openProcurementDetails = function(rowData) {
            var data = {
              id: this.tabService.generateId(),
              componentId:
                _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                  .LOG_PROCUREMENT_REQUEST_FORM,
              objectId:
                rowData && rowData.procurementRequest
                  ? this.serializationService.serialize({ id: rowData._obj.id })
                  : undefined,
              openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read
            };
            var labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          };
          ProcurementRequestsTableComponent.prototype.isDeleteButtonVisible = function() {
            var _this = this;
            return (
              this.procReqItemsTableDataSource.hasDataSelection &&
              this.procReqItemsTableDataSource.dataSelection.reduce(function(sum, next) {
                return sum && _this.isDeletableRow(next);
              }, true) &&
              !this.statusState
            );
          };
          ProcurementRequestsTableComponent.prototype.isDeletableRow = function(elt) {
            return (
              (elt._obj.procStatus ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .PROCUREMENT_REQUEST_STATUS_DRAFT ||
                elt._obj.procStatus ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .PROCUREMENT_REQUEST_STATUS_CANCELED) &&
              !!this.sessionService.loggedUser &&
              elt._obj.statusUser === this.sessionService.loggedUser.login &&
              !this.isReadOpenMode
            );
          };
          ProcurementRequestsTableComponent.prototype.deleteProcurementRequest = function() {
            var _this = this;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(
              this.procReqItemsTableDataSource.dataSelection.map(function(element) {
                return _this.logisticsService.deleteProcurementRequest(element.procurementRequestId);
              })
            ).subscribe(function() {
              _this.procReqItemsTableDataSource.deleteDataSelection();
            });
          };
          ProcurementRequestsTableComponent.prototype.isCancelButtonVisible = function() {
            var _this = this;
            return (
              this.procReqItemsTableDataSource.hasDataSelection &&
              this.procReqItemsTableDataSource.dataSelection.reduce(function(sum, next) {
                return sum && _this.isCancelableRow(next);
              }, true)
            );
          };
          ProcurementRequestsTableComponent.prototype.isCancelableRow = function(elt) {
            return (
              (elt._obj.procStatus ===
                _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                  .PROCUREMENT_REQUEST_STATUS_SIMULATED ||
                elt._obj.procStatus ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .PROCUREMENT_REQUEST_STATUS_PLANNED ||
                elt._obj.procStatus ===
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__['AWPropertiesConstants']
                    .PROCUREMENT_REQUEST_STATUS_RELEASED) &&
              this.sessionService.hasUserRightByUseCase(
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__['BidoFunctionTypeConstants']
                  .UC_MM_PROCUREMENT,
                _shared_constants_bido_function_type_constants__WEBPACK_IMPORTED_MODULE_6__['BidoFunctionTypeConstants']
                  .DEGREE_MANAGE
              )
            );
          };
          ProcurementRequestsTableComponent.prototype.cancelProcurementRequest = function() {
            var _this = this;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__['forkJoin'])(
              this.procReqItemsTableDataSource.dataSelection.map(function(element) {
                return _this.logisticsService.cancelProcurementRequest(element.procurementRequestId);
              })
            ).subscribe(function() {
              var rowToUpdateStatusAtCanceled = _this.procReqItemsTableDataSource.dataSelection.map(function(row) {
                var rowData = row;
                return _this.findProcurementRequestById(rowData.procurementRequestId);
              });
              rowToUpdateStatusAtCanceled.forEach(function(element) {
                element.procStatus =
                  _shared_constants_aw_properties_constants__WEBPACK_IMPORTED_MODULE_5__[
                    'AWPropertiesConstants'
                  ].PROCUREMENT_REQUEST_STATUS_CANCELED;
              });
              _this.procReqItemsTableDataSource.deleteDataSelection();
              _this.loadProcurementRequestAndQuantity();
            });
          };
          ProcurementRequestsTableComponent.prototype.findProcurementRequestById = function(id) {
            return this.procurementRequestsFromInput.find(function(procurementRequestAndIndicatorsOutputDTO) {
              return procurementRequestAndIndicatorsOutputDTO.id === id;
            });
          };
          ProcurementRequestsTableComponent.prototype.initProcurementRequestsTableDataSource = function() {
            this.procReqItemsTableDataSource = new _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__[
              'TableDataSource'
            ]({
              allowMultiSelect: true,
              columns: [
                {
                  field: 'procurementRequest',
                  translateKey: this.getTranslateKey('procurementRequest'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__['ColumnAlignment'].LEFT,
                  width: '13%'
                },
                {
                  field: 'recepient',
                  translateKey: this.getTranslateKey('recepient'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__['ColumnAlignment'].LEFT,
                  width: '11%'
                },
                {
                  field: 'materials',
                  translateKey: this.getTranslateKey('materials'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__['ColumnAlignment'].LEFT,
                  width: '20%'
                },
                {
                  field: 'requestedQuantity',
                  translateKey: this.getTranslateKey('requestedQuantity'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__['ColumnAlignment'].RIGHT,
                  width: '5%'
                },
                {
                  field: 'status',
                  translateKey: this.getTranslateKey('status'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__['ColumnAlignment'].LEFT,
                  width: '9%'
                },
                {
                  field: 'statusDate',
                  translateKey: this.getTranslateKey('statusDate'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__['ColumnAlignment'].LEFT,
                  width: '8%'
                },
                {
                  field: 'expectedOn',
                  translateKey: this.getTranslateKey('expectedOn'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__['ColumnAlignment'].LEFT,
                  width: '8%'
                },
                {
                  field: 'criticity',
                  translateKey: this.getTranslateKey('criticity'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__['ColumnAlignment'].LEFT,
                  width: '8%'
                },
                {
                  field: 'progress',
                  translateKey: this.getTranslateKey('advancement'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__['ColumnAlignment'].LEFT,
                  width: '18%'
                },
                {
                  field: 'availableQuantity',
                  translateKey: this.getTranslateKey('availableQuantity'),
                  alignment:
                    _shared_components_table_table_data_source__WEBPACK_IMPORTED_MODULE_4__['ColumnAlignment'].CENTER,
                  width: '8%'
                }
              ],
              data: []
            });
          };
          ProcurementRequestsTableComponent.prototype.openPart = function(row) {
            if (row.materials) {
              var data = {
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                    .ENG_PART_NUMBER_FORM,
                id: this.tabService.generateId(),
                objectId: row.materials,
                openMode: _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Read
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          ProcurementRequestsTableComponent.prototype.openProcurementManagmentPage = function() {
            if (
              this.procReqItemsTableDataSource.dataSelectionCount === 1 &&
              this.procReqItemsTableDataSource.dataSelection[0]._obj.procReqItemsAndQtyIndicatorsDTO
            ) {
              var data = {
                id: this.tabService.generateId(),
                componentId:
                  _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_8__['ComponentConstants']
                    .LOG_MATERIAL_REQUEST_MANAGEMENT_FORM,
                openMode:
                  _shared_enums_component_open_mode_enum__WEBPACK_IMPORTED_MODULE_10__['ComponentOpenMode'].Write,
                objectId: this.serializationService.serialize({
                  prId: this.procReqItemsTableDataSource.dataSelection[0]._obj.id,
                  prItemId: this.procReqItemsTableDataSource.dataSelection[0]._obj.procReqItemsAndQtyIndicatorsDTO[0].id
                })
              };
              var labelKey = 'transaction.' + data.componentId;
              this.tabService.open(this.tabService.create(data, labelKey, true));
            }
          };
          ProcurementRequestsTableComponent.prototype.setWPfiltersList = function() {
            var _this = this;
            var wpKey = this.getTranslateKey('wp');
            var msnKey = this.getTranslateKey('msn');
            this.wpFiltersList = [];
            this.translateService.get([wpKey, msnKey]).subscribe(function(results) {
              _this.originalProcReqRow.forEach(function(procReqItemAndQtyRow) {
                var bidmProjectDTO = procReqItemAndQtyRow._obj.projectDTO;
                procReqItemAndQtyRow._obj.procReqItemsAndQtyIndicatorsDTO.forEach(function() {
                  var selectedItem = {
                    label: results[wpKey] + ' n\u00B0' + bidmProjectDTO.projectNumber,
                    value: procReqItemAndQtyRow.procurementRequestId
                  };
                  if (bidmProjectDTO.aircraftMsn) {
                    selectedItem = {
                      label: selectedItem.label + ' | ' + results[msnKey] + ' ' + bidmProjectDTO.aircraftMsn,
                      value: selectedItem.value
                    };
                  }
                  var workPackage = _this.wpFiltersList.find(function(wp) {
                    return (wp.value = selectedItem.value);
                  });
                  if (!_shared_utils_object_utils__WEBPACK_IMPORTED_MODULE_19__['ObjectUtils'].isDefined(workPackage)) {
                    _this.wpFiltersList = __spread(_this.wpFiltersList, [selectedItem]);
                  }
                });
              });
            });
          };
          ProcurementRequestsTableComponent.prototype.setStockMvtTableFiltersAvailabilityList = function() {
            var _this = this;
            var okKey = this.getTranslateKey('ok');
            var warningKey = this.getTranslateKey('warning');
            var nokKey = this.getTranslateKey('nok');
            this.translateService
              .get([okKey, warningKey, nokKey])
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['map'])(function(results) {
                  return [
                    {
                      label: results[okKey],
                      value: _this.okKey
                    },
                    {
                      label: results[warningKey],
                      value: _this.warningKey
                    },
                    {
                      label: results[nokKey],
                      value: _this.nOkKey
                    }
                  ];
                })
              )
              .subscribe(function(result) {
                _this.filtersAvailabilityDefaultList = result;
                _this.procReqItemFiltersAvailabilityList = [_this.okKey, _this.warningKey, _this.nOkKey];
              });
          };
          ProcurementRequestsTableComponent.prototype.filterStockMvtTableByCriteria = function() {
            var _this = this;
            var dataToShow = [];
            if (!!this.procReqItemFiltersAvailabilityList) {
              this.procReqItemFiltersAvailabilityList.forEach(function(key) {
                if (key === _this.okKey) {
                  dataToShow = __spread(
                    dataToShow,
                    _this.originalProcReqRow.filter(function(row) {
                      return row.ok;
                    })
                  );
                }
                if (key === _this.warningKey) {
                  dataToShow = __spread(
                    dataToShow,
                    _this.originalProcReqRow.filter(function(row) {
                      return row.warning;
                    })
                  );
                }
                if (key === _this.nOkKey) {
                  dataToShow = __spread(
                    dataToShow,
                    _this.originalProcReqRow.filter(function(row) {
                      return row.nok;
                    })
                  );
                }
              });
            }
            if (!!this.selectedProcReqFilterStatusValue) {
              var dataStatusFilter = [];
              dataStatusFilter = dataToShow.filter(function(row) {
                return _this.selectedProcReqFilterStatusValue === row._obj.procStatus;
              });
              if (dataStatusFilter.length > 0) {
                dataToShow = __spread(dataStatusFilter);
              } else if (dataStatusFilter.length === 0) {
                dataToShow = [];
              }
            }
            if (!!this.selectedProcReqFilterWPValue) {
              var dataWPFilter = [];
              dataWPFilter = dataToShow.filter(function(row) {
                return _this.selectedProcReqFilterWPValue === row.procurementRequestId;
              });
              if (dataWPFilter.length > 0) {
                dataToShow = __spread(dataWPFilter);
              }
            }
            dataToShow = dataToShow.reduce(function(unique, item) {
              return unique.every(function(elt) {
                return elt.id !== item.id;
              })
                ? __spread(unique, [item])
                : unique;
            }, []);
            this.procReqItemsTableDataSource.setData(dataToShow);
          };
          ProcurementRequestsTableComponent.prototype.setStockMvtTableFiltersVisible = function() {
            this.stockMvtTableFiltersVisible = !this.stockMvtTableFiltersVisible;
          };
          ProcurementRequestsTableComponent.prototype.onUpdateProcurementRequest = function(event) {
            this.askParentRefresh.emit();
          };
          var ProcurementRequestsTableComponent_1;
          __decorate(
            [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(), __metadata('design:type', Boolean)],
            ProcurementRequestsTableComponent.prototype,
            'statusState',
            void 0
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object),
              __metadata('design:paramtypes', [Object])
            ],
            ProcurementRequestsTableComponent.prototype,
            'workOrder',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array),
              __metadata('design:paramtypes', [Array])
            ],
            ProcurementRequestsTableComponent.prototype,
            'workPackages',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array),
              __metadata('design:paramtypes', [Array])
            ],
            ProcurementRequestsTableComponent.prototype,
            'workPackageIds',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Array),
              __metadata('design:paramtypes', [Array])
            ],
            ProcurementRequestsTableComponent.prototype,
            'procurementRequests',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', String),
              __metadata('design:paramtypes', [String])
            ],
            ProcurementRequestsTableComponent.prototype,
            'requestManagementKey',
            null
          );
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'])(),
              __metadata('design:type', _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'])
            ],
            ProcurementRequestsTableComponent.prototype,
            'askParentRefresh',
            void 0
          );
          ProcurementRequestsTableComponent = ProcurementRequestsTableComponent_1 = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'aw-procurement-requests-table',
                template: __webpack_require__(
                  /*! ./procurement-requests-table.component.html */ './src/app/main/maintenance/procurement-request/procurement-requests-table.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./procurement-requests-table.component.scss */ './src/app/main/maintenance/procurement-request/procurement-requests-table.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _shared_services_serialization_service__WEBPACK_IMPORTED_MODULE_12__['SerializationService'],
                _shared_services_tab_service__WEBPACK_IMPORTED_MODULE_14__['TabService'],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_13__['SessionService'],
                _logistics_logistics_service__WEBPACK_IMPORTED_MODULE_21__['LogisticsService'],
                _shared_services_properties_service__WEBPACK_IMPORTED_MODULE_11__['PropertiesService'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'],
                _procurement_requests_table_service__WEBPACK_IMPORTED_MODULE_22__['ProcurementRequestsTableService']
              ])
            ],
            ProcurementRequestsTableComponent
          );
          return ProcurementRequestsTableComponent;
        })(_shared_types_generic_component__WEBPACK_IMPORTED_MODULE_15__['GenericComponent']);

        /***/
      },

    /***/ './src/app/main/maintenance/procurement-request/procurement-requests-table.module.ts':
      /*!*******************************************************************************************!*\
  !*** ./src/app/main/maintenance/procurement-request/procurement-requests-table.module.ts ***!
  \*******************************************************************************************/
      /*! exports provided: API_PROVIDERS, ProcurementRequestsTableModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'API_PROVIDERS', function() {
          return API_PROVIDERS;
        });
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ProcurementRequestsTableModule',
          function() {
            return ProcurementRequestsTableModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! primeng/calendar */ './node_modules/primeng/calendar.js'
        );
        /* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_calendar__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! primeng/checkbox */ './node_modules/primeng/checkbox.js'
        );
        /* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! primeng/dialog */ './node_modules/primeng/dialog.js'
        );
        /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dialog__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! primeng/dropdown */ './node_modules/primeng/dropdown.js'
        );
        /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! primeng/fileupload */ './node_modules/primeng/fileupload.js'
        );
        /* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! primeng/inputtextarea */ './node_modules/primeng/inputtextarea.js'
        );
        /* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! primeng/message */ './node_modules/primeng/message.js'
        );
        /* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_message__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! primeng/overlaypanel */ './node_modules/primeng/overlaypanel.js'
        );
        /* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! primeng/primeng */ './node_modules/primeng/primeng.js'
        );
        /* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_primeng__WEBPACK_IMPORTED_MODULE_9__
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! primeng/table */ './node_modules/primeng/table.js'
        );
        /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_table__WEBPACK_IMPORTED_MODULE_10__
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! primeng/tooltip */ './node_modules/primeng/tooltip.js'
        );
        /* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__
        );
        /* harmony import */ var _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ../../../shared/angular-common-shared.module */ './src/app/shared/angular-common-shared.module.ts'
        );
        /* harmony import */ var _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../shared/angular-generic-templates-shared-module */ './src/app/shared/angular-generic-templates-shared-module.ts'
        );
        /* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../shared/api/aircraft-maintenance.api */ './src/app/shared/api/aircraft-maintenance.api.ts'
        );
        /* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ../../../shared/api/am-project-management.api */ './src/app/shared/api/am-project-management.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_procurement_request_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ../../../shared/api/bidt-procurement-request.api */ './src/app/shared/api/bidt-procurement-request.api.ts'
        );
        /* harmony import */ var _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! ../../../shared/app-common-shared.module */ './src/app/shared/app-common-shared.module.ts'
        );
        /* harmony import */ var _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ../../../shared/components/table/table.module */ './src/app/shared/components/table/table.module.ts'
        );
        /* harmony import */ var _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! ../../dynamic-component-loader/dynamic-component-loader.module */ './src/app/main/dynamic-component-loader/dynamic-component-loader.module.ts'
        );
        /* harmony import */ var _logistics_procurement_request_search_procurement_request_popup_procurement_request_popup_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! ../../logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.module */ './src/app/main/logistics/procurement-request/search/procurement-request-popup/procurement-request-popup.module.ts'
        );
        /* harmony import */ var _material_availability_indicators_material_availability_indicators_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! ./material-availability-indicators/material-availability-indicators.component */ './src/app/main/maintenance/procurement-request/material-availability-indicators/material-availability-indicators.component.ts'
        );
        /* harmony import */ var _procurement_requests_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! ./procurement-requests-table.component */ './src/app/main/maintenance/procurement-request/procurement-requests-table.component.ts'
        );
        /* harmony import */ var _procurement_requests_table_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./procurement-requests-table.service */ './src/app/main/maintenance/procurement-request/procurement-requests-table.service.ts'
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
          primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__['FileUploadModule'],
          primeng_table__WEBPACK_IMPORTED_MODULE_10__['TableModule'],
          primeng_dialog__WEBPACK_IMPORTED_MODULE_3__['DialogModule'],
          primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_6__['InputTextareaModule'],
          primeng_message__WEBPACK_IMPORTED_MODULE_7__['MessageModule'],
          primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__['DropdownModule'],
          primeng_checkbox__WEBPACK_IMPORTED_MODULE_2__['CheckboxModule'],
          primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__['TooltipModule'],
          primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__['OverlayPanelModule'],
          primeng_primeng__WEBPACK_IMPORTED_MODULE_9__['SelectButtonModule']
        ];
        var INTERNAL_MODULES = [
          _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_18__['TableModule'],
          _logistics_procurement_request_search_procurement_request_popup_procurement_request_popup_module__WEBPACK_IMPORTED_MODULE_20__[
            'ProcurementRequestPopupModule'
          ]
        ];
        /******************************************************************************
         * Components
         *************************************************************************** */
        var COMPONENTS = [
          _procurement_requests_table_component__WEBPACK_IMPORTED_MODULE_22__['ProcurementRequestsTableComponent'],
          _material_availability_indicators_material_availability_indicators_component__WEBPACK_IMPORTED_MODULE_21__[
            'MaterialAvailabilityIndicatorsComponent'
          ]
        ];
        var DYNAMIC_COMPONENTS = [];
        /******************************************************************************
         * Services
         *************************************************************************** */
        var SERVICES = [
          _procurement_requests_table_service__WEBPACK_IMPORTED_MODULE_23__['ProcurementRequestsTableService']
        ];
        var API_PROVIDERS = [
          _shared_api_bidt_procurement_request_api__WEBPACK_IMPORTED_MODULE_16__['BidtProcurementRequestApi'],
          _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_15__['AMProjectManagementApi'],
          _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_14__['AircraftMaintenanceApi']
        ];
        var ProcurementRequestsTableModule = /** @class */ (function() {
          function ProcurementRequestsTableModule() {}
          ProcurementRequestsTableModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: __spread(COMPONENTS, DYNAMIC_COMPONENTS),
                exports: __spread(COMPONENTS),
                imports: __spread(
                  [
                    _shared_angular_common_shared_module__WEBPACK_IMPORTED_MODULE_12__['AngularCommonSharedModule'],
                    _shared_angular_generic_templates_shared_module__WEBPACK_IMPORTED_MODULE_13__[
                      'AngularGenericTemplatesSharedModule'
                    ],
                    _shared_app_common_shared_module__WEBPACK_IMPORTED_MODULE_17__['AppCommonSharedModule'],
                    _shared_components_table_table_module__WEBPACK_IMPORTED_MODULE_18__['TableModule'],
                    _dynamic_component_loader_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_19__[
                      'DynamicComponentLoaderModule'
                    ].forChild(DYNAMIC_COMPONENTS)
                  ],
                  EXTERNAL_MODULES,
                  INTERNAL_MODULES
                ),
                providers: __spread(API_PROVIDERS, SERVICES)
              })
            ],
            ProcurementRequestsTableModule
          );
          return ProcurementRequestsTableModule;
        })();

        /***/
      },

    /***/ './src/app/main/maintenance/procurement-request/procurement-requests-table.service.ts':
      /*!********************************************************************************************!*\
  !*** ./src/app/main/maintenance/procurement-request/procurement-requests-table.service.ts ***!
  \********************************************************************************************/
      /*! exports provided: ProcurementRequestsTableService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ProcurementRequestsTableService',
          function() {
            return ProcurementRequestsTableService;
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
        /* harmony import */ var _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../shared/api/aircraft-maintenance.api */ './src/app/shared/api/aircraft-maintenance.api.ts'
        );
        /* harmony import */ var _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/api/am-project-management.api */ './src/app/shared/api/am-project-management.api.ts'
        );
        /* harmony import */ var _shared_api_bidt_procurement_request_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../shared/api/bidt-procurement-request.api */ './src/app/shared/api/bidt-procurement-request.api.ts'
        );
        /* harmony import */ var _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../../shared/constants/component-constants */ './src/app/shared/constants/component-constants.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../../../shared/services/app-config.service */ './src/app/shared/services/app-config.service.ts'
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

        var ProcurementRequestsTableService = /** @class */ (function(_super) {
          __extends(ProcurementRequestsTableService, _super);
          function ProcurementRequestsTableService(
            http,
            appConfigService,
            procurementRequestApi,
            aMProjectManagementApi,
            aircraftMaintenanceApi,
            translateService
          ) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.procurementRequestApi = procurementRequestApi;
            _this.aMProjectManagementApi = aMProjectManagementApi;
            _this.aircraftMaintenanceApi = aircraftMaintenanceApi;
            _this.translateService = translateService;
            _this.componentName =
              _shared_constants_component_constants__WEBPACK_IMPORTED_MODULE_6__[
                'ComponentConstants'
              ].MAI_PROCUREMENT_REQUESTS_TABLE;
            return _this;
          }
          ProcurementRequestsTableService.prototype.findProcReqItemsAndStockQuantityIndicators = function(
            bidmWorkOrder,
            workPackageDTOIdsTab
          ) {
            var input = {};
            if (!!bidmWorkOrder) {
              input = {
                workOrdersIds: [{ woId: bidmWorkOrder.woId, projectId: bidmWorkOrder.projectId }]
              };
            }
            if (!!workPackageDTOIdsTab && workPackageDTOIdsTab.length > 0) {
              input = __assign({}, input, { workPackagesIds: workPackageDTOIdsTab });
            }
            return _super.prototype.post.call(
              this,
              this.procurementRequestApi.findProcurementRequestStockQuantityIndicators,
              input
            );
          };
          ProcurementRequestsTableService.prototype.findBidmProject = function(projectId) {
            return _super.prototype.post.call(this, this.aMProjectManagementApi.findBidmProject, projectId);
          };
          ProcurementRequestsTableService.prototype.calculateWorkOrderStatus = function(input) {
            return _super.prototype.post.call(this, this.aircraftMaintenanceApi.calculateWorkOrderStatus, input);
          };
          ProcurementRequestsTableService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_8__['AppConfigService'],
                _shared_api_bidt_procurement_request_api__WEBPACK_IMPORTED_MODULE_5__['BidtProcurementRequestApi'],
                _shared_api_am_project_management_api__WEBPACK_IMPORTED_MODULE_4__['AMProjectManagementApi'],
                _shared_api_aircraft_maintenance_api__WEBPACK_IMPORTED_MODULE_3__['AircraftMaintenanceApi'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateService']
              ])
            ],
            ProcurementRequestsTableService
          );
          return ProcurementRequestsTableService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_7__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/shared/constants/bidt-stock-mvt-type-constants.ts':
      /*!*******************************************************************!*\
  !*** ./src/app/shared/constants/bidt-stock-mvt-type-constants.ts ***!
  \*******************************************************************/
      /*! exports provided: BidtStockMvtTypeConstant */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'BidtStockMvtTypeConstant',
          function() {
            return BidtStockMvtTypeConstant;
          }
        );
        var BidtStockMvtTypeConstant = /** @class */ (function() {
          function BidtStockMvtTypeConstant() {}
          BidtStockMvtTypeConstant.RECEIPT = 10;
          BidtStockMvtTypeConstant.STORAGE = 11;
          BidtStockMvtTypeConstant.LOCATION_CHANGE = 12;
          BidtStockMvtTypeConstant.QUARANTINE = 13;
          BidtStockMvtTypeConstant.CROSS_DOCKING = 18;
          BidtStockMvtTypeConstant.PICKING = 19;
          BidtStockMvtTypeConstant.SHIPMENT = 20;
          BidtStockMvtTypeConstant.BATCH_SPLITTING_PLUS = 22;
          BidtStockMvtTypeConstant.BATCH_SPLITTING_MINUS = 23;
          BidtStockMvtTypeConstant.INVENTORY_CORRECTION_PLUS = 24;
          BidtStockMvtTypeConstant.INVENTORY_CORRECTION_MINUS = 25;
          BidtStockMvtTypeConstant.WORKSHOP_ENTRY = 30;
          BidtStockMvtTypeConstant.INSTALLATION = 40;
          BidtStockMvtTypeConstant.REMOVAL = 50;
          BidtStockMvtTypeConstant.WORKSHOP_ISSUE = 60;
          return BidtStockMvtTypeConstant;
        })();

        /***/
      },

    /***/ './src/app/shared/constants/control-config-constants.ts':
      /*!**************************************************************!*\
  !*** ./src/app/shared/constants/control-config-constants.ts ***!
  \**************************************************************/
      /*! exports provided: ControlConfigConstants */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ControlConfigConstants', function() {
          return ControlConfigConstants;
        });
        var ControlConfigConstants = /** @class */ (function() {
          function ControlConfigConstants() {}
          ControlConfigConstants.ICON_GREEN = '9';
          ControlConfigConstants.ICON_RED = '10';
          ControlConfigConstants.ICON_YELLOW = '11';
          ControlConfigConstants.ICON_NONE = '12';
          ControlConfigConstants.CUSTOMIZATION_STATUS_NONE = '0';
          ControlConfigConstants.CUSTOMIZATION_STATUS_OK_ASSUMED = '10';
          ControlConfigConstants.CUSTOMIZATION_STATUS_OK_CUSTOMIZED = '11';
          ControlConfigConstants.CUSTOMIZATION_STATUS_WARNING_NO_ALTERNATIVE = '21';
          ControlConfigConstants.ICON_GREEN_LIGHT_CODE = '0';
          ControlConfigConstants.ICON_RED_LIGHT_CODE = '1';
          ControlConfigConstants.ICON_YELLOW_LIGHT_CODE = '2';
          ControlConfigConstants.ICON_NONE_LIGHT_CODE = '3';
          ControlConfigConstants.ICON_EQUIPMENT_CODE = '5';
          ControlConfigConstants.ICON_GREEN_ROUND_CODE = '6';
          ControlConfigConstants.ICON_ITEM_CODE = '4';
          ControlConfigConstants.ICON_YELLOW_TRIANGLE_CODE = '7';
          ControlConfigConstants.ICON_RED_SQUARE_CODE = '8';
          ControlConfigConstants.ICON_GREEN_LED_CODE = '9';
          ControlConfigConstants.ICON_YELLOW_LED_CODE = '11';
          ControlConfigConstants.ICON_RED_LED_CODE = '10';
          ControlConfigConstants.ICON_NONE_LED_CODE = '12';
          ControlConfigConstants.OME_CHECK_EQUIPMENT_MISSING = 'MISSING';
          ControlConfigConstants.OME_CHECK_EQUIPMENT_TO_REMOVE = 'REMOVE';
          ControlConfigConstants.OME_CHECK_EQUIPMENT_TO_REPLACE = 'REPLACE';
          ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_SUGGESTED = 'SUGGESTED';
          ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_VALIDATED = 'VALIDATED';
          ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_ON_GOING = 'ON_GOING';
          return ControlConfigConstants;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=default~logistics-goods-movement-goods-movement-module~maintenance-forecast-forecast-module~maintena~5d9237f0.js.map
