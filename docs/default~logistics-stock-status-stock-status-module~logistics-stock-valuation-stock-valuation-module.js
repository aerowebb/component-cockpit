(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['default~logistics-stock-status-stock-status-module~logistics-stock-valuation-stock-valuation-module'],
  {
    /***/ './node_modules/primeng/chart.js':
      /*!***************************************!*\
  !*** ./node_modules/primeng/chart.js ***!
  \***************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /* Shorthand */

        function __export(m) {
          for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
        Object.defineProperty(exports, '__esModule', { value: true });
        __export(
          __webpack_require__(/*! ./components/chart/chart */ './node_modules/primeng/components/chart/chart.js')
        );

        /***/
      },

    /***/ './node_modules/primeng/components/chart/chart.js':
      /*!********************************************************!*\
  !*** ./node_modules/primeng/components/chart/chart.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var __decorate =
          (this && this.__decorate) ||
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
          (this && this.__metadata) ||
          function(k, v) {
            if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(k, v);
          };
        Object.defineProperty(exports, '__esModule', { value: true });
        var core_1 = __webpack_require__(/*! @angular/core */ './node_modules/@angular/core/fesm5/core.js');
        var common_1 = __webpack_require__(/*! @angular/common */ './node_modules/@angular/common/fesm5/common.js');
        var UIChart = /** @class */ (function() {
          function UIChart(el) {
            this.el = el;
            this.options = {};
            this.plugins = [];
            this.responsive = true;
            this.onDataSelect = new core_1.EventEmitter();
          }
          Object.defineProperty(UIChart.prototype, 'data', {
            get: function() {
              return this._data;
            },
            set: function(val) {
              this._data = val;
              this.reinit();
            },
            enumerable: true,
            configurable: true
          });
          UIChart.prototype.ngAfterViewInit = function() {
            this.initChart();
            this.initialized = true;
          };
          UIChart.prototype.onCanvasClick = function(event) {
            if (this.chart) {
              var element = this.chart.getElementAtEvent(event);
              var dataset = this.chart.getDatasetAtEvent(event);
              if (element && element[0] && dataset) {
                this.onDataSelect.emit({ originalEvent: event, element: element[0], dataset: dataset });
              }
            }
          };
          UIChart.prototype.initChart = function() {
            var opts = this.options || {};
            opts.responsive = this.responsive;
            // allows chart to resize in responsive mode
            if (opts.responsive && (this.height || this.width)) {
              opts.maintainAspectRatio = false;
            }
            this.chart = new Chart(this.el.nativeElement.children[0].children[0], {
              type: this.type,
              data: this.data,
              options: this.options,
              plugins: this.plugins
            });
          };
          UIChart.prototype.getCanvas = function() {
            return this.el.nativeElement.children[0].children[0];
          };
          UIChart.prototype.getBase64Image = function() {
            return this.chart.toBase64Image();
          };
          UIChart.prototype.generateLegend = function() {
            if (this.chart) {
              return this.chart.generateLegend();
            }
          };
          UIChart.prototype.refresh = function() {
            if (this.chart) {
              this.chart.update();
            }
          };
          UIChart.prototype.reinit = function() {
            if (this.chart) {
              this.chart.destroy();
              this.initChart();
            }
          };
          UIChart.prototype.ngOnDestroy = function() {
            if (this.chart) {
              this.chart.destroy();
              this.initialized = false;
              this.chart = null;
            }
          };
          __decorate([core_1.Input(), __metadata('design:type', String)], UIChart.prototype, 'type', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Object)], UIChart.prototype, 'options', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Array)], UIChart.prototype, 'plugins', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], UIChart.prototype, 'width', void 0);
          __decorate([core_1.Input(), __metadata('design:type', String)], UIChart.prototype, 'height', void 0);
          __decorate([core_1.Input(), __metadata('design:type', Boolean)], UIChart.prototype, 'responsive', void 0);
          __decorate(
            [core_1.Output(), __metadata('design:type', core_1.EventEmitter)],
            UIChart.prototype,
            'onDataSelect',
            void 0
          );
          __decorate(
            [core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])],
            UIChart.prototype,
            'data',
            null
          );
          UIChart = __decorate(
            [
              core_1.Component({
                selector: 'p-chart',
                template:
                  '\n        <div style="position:relative" [style.width]="responsive && !width ? null : width" [style.height]="responsive && !height ? null : height">\n            <canvas [attr.width]="responsive && !width ? null : width" [attr.height]="responsive && !height ? null : height" (click)="onCanvasClick($event)"></canvas>\n        </div>\n    '
              }),
              __metadata('design:paramtypes', [core_1.ElementRef])
            ],
            UIChart
          );
          return UIChart;
        })();
        exports.UIChart = UIChart;
        var ChartModule = /** @class */ (function() {
          function ChartModule() {}
          ChartModule = __decorate(
            [
              core_1.NgModule({
                imports: [common_1.CommonModule],
                exports: [UIChart],
                declarations: [UIChart]
              })
            ],
            ChartModule
          );
          return ChartModule;
        })();
        exports.ChartModule = ChartModule;
        //# sourceMappingURL=chart.js.map

        /***/
      },

    /***/ './src/app/main/logistics/stock-valuation/form/stock-valuation-form.service.ts':
      /*!*************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/form/stock-valuation-form.service.ts ***!
  \*************************************************************************************/
      /*! exports provided: StockValuationFormService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StockValuationFormService',
          function() {
            return StockValuationFormService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../../node_modules/@angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/product-structure-management.api */ './src/app/shared/api/product-structure-management.api.ts'
        );
        /* harmony import */ var _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/api/task-management.api */ './src/app/shared/api/task-management.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

        var StockValuationFormService = /** @class */ (function(_super) {
          __extends(StockValuationFormService, _super);
          function StockValuationFormService(http, appConfigService, productStructureManagement, taskManagementApi) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.productStructureManagement = productStructureManagement;
            _this.taskManagementApi = taskManagementApi;
            return _this;
          }
          // makes a calculation on the base of search criteria
          StockValuationFormService.prototype.stockValuationSearch = function(searchCriteria) {
            return _super.prototype.post.call(
              this,
              this.productStructureManagement.stockValuationSearch,
              searchCriteria
            );
          };
          StockValuationFormService.prototype.getLocalCurrency = function() {
            return _super.prototype.post.call(this, this.taskManagementApi.getLocalCurrency);
          };
          StockValuationFormService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])(),
              __metadata('design:paramtypes', [
                _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_5__['AppConfigService'],
                _shared_api_product_structure_management_api__WEBPACK_IMPORTED_MODULE_2__[
                  'ProductStructureManagementApi'
                ],
                _shared_api_task_management_api__WEBPACK_IMPORTED_MODULE_3__['TaskManagementApi']
              ])
            ],
            StockValuationFormService
          );
          return StockValuationFormService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_4__['AbstractAwHttpService']);

        /***/
      },

    /***/ './src/app/main/logistics/stock-valuation/search/stock-valuation-search.service.ts':
      /*!*****************************************************************************************!*\
  !*** ./src/app/main/logistics/stock-valuation/search/stock-valuation-search.service.ts ***!
  \*****************************************************************************************/
      /*! exports provided: StockValuationSearchService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StockValuationSearchService',
          function() {
            return StockValuationSearchService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common/http */ './node_modules/@angular/common/fesm5/http.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../../../shared/api/bidt-warehouse.api */ './src/app/shared/api/bidt-warehouse.api.ts'
        );
        /* harmony import */ var _shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../../../shared/http/abstract-aw-http */ './src/app/shared/http/abstract-aw-http.ts'
        );
        /* harmony import */ var _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

        var StockValuationSearchService = /** @class */ (function(_super) {
          __extends(StockValuationSearchService, _super);
          function StockValuationSearchService(http, appConfigService, bidtWarehouse) {
            var _this = _super.call(this, http, appConfigService) || this;
            _this.bidtWarehouse = bidtWarehouse;
            return _this;
          }
          // fetches the list of all the warehouses
          StockValuationSearchService.prototype.findAll = function() {
            return _super.prototype.post.call(this, this.bidtWarehouse.findAll);
          };
          StockValuationSearchService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])(),
              __metadata('design:paramtypes', [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
                _shared_services_app_config_service__WEBPACK_IMPORTED_MODULE_4__['AppConfigService'],
                _shared_api_bidt_warehouse_api__WEBPACK_IMPORTED_MODULE_2__['BidtWarehouseApi']
              ])
            ],
            StockValuationSearchService
          );
          return StockValuationSearchService;
        })(_shared_http_abstract_aw_http__WEBPACK_IMPORTED_MODULE_3__['AbstractAwHttpService']);

        /***/
      }
  }
]);
//# sourceMappingURL=default~logistics-stock-status-stock-status-module~logistics-stock-valuation-stock-valuation-module.js.map
